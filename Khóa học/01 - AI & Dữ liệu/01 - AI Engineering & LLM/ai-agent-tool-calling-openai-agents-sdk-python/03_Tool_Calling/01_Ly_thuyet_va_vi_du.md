# Tool Calling: Function Tools và Web Search

**Loại:** Lesson | **Trình độ:** Cơ bản → Trung cấp | **Thời điểm học:** 00:26:35

## 1. Tóm tắt
Cho agent truy cập hàm Python và công cụ tìm kiếm, hiểu schema, mô tả tool và giới hạn quyền thực thi.

## 2. Mục tiêu học tập
- Giải thích được kiến thức cốt lõi của **Tool Calling: Function Tools và Web Search** bằng ví dụ độc lập.
- Phân biệt được trường hợp sử dụng đúng và rủi ro triển khai thường gặp.
- Chạy hoặc kiểm tra được đoạn Python minh họa theo yêu cầu của bài.
- Phân tích kết quả, xác định lỗi và đề xuất cách sửa có căn cứ.

## 3. Bối cảnh và vấn đề
Từ một ứng dụng mô hình chỉ phản hồi văn bản, chúng ta muốn xây dựng hệ thống có thể xử lý nhiệm vụ, gọi công cụ khi phù hợp, báo cáo trạng thái và giữ đúng quyền truy cập. Bài học giải thích từng khái niệm bằng ví dụ có thể kiểm tra, không phụ thuộc vào một UI cụ thể.

## 4. Kiến thức cốt lõi

### 4.1. Tool calling là một giao thức thực thi
Công cụ là hàm hoặc khả năng bên ngoài mô hình. Mô hình **đề nghị** gọi công cụ với các đối số, SDK validate và dispatch, rồi trả kết quả cho mô hình. Lựa chọn của mô hình không đồng nghĩa đã được cấp quyền hợp lệ.

Cần phân biệt: thông tin tổng quát có thể trả lời từ model; thông tin động (giá, thời tiết, tồn kho, cơ sở dữ liệu) phải lấy từ công cụ đáng tin tại thời điểm yêu cầu.

### 4.2. Function tool và schema
Decorator `@function_tool` (một số bản tài liệu mới cũng minh họa `@tool`) biến hàm Python thành tool. Tên hàm, type hint và docstring ảnh hưởng schema mà model nhìn thấy. Một tool tốt có tên hành động cụ thể, input rõ ràng, output ngắn gọn và thông báo lỗi có ích.

Tool chỉ đọc: kiểm tra hàng có sẵn. Tool ghi: thêm sản phẩm vào giỏ, hủy đặt chỗ. Với tool ghi cần xác thực user, quyền theo tenant, idempotency, hạn mức và xác nhận cho thao tác nhạy cảm.

### 4.3. Hosted tools và lựa chọn phù hợp
`WebSearchTool` cung cấp tìm kiếm web khi model và cấu hình hỗ trợ. Dùng cho câu hỏi cần bằng chứng hiện hành; lưu tên nguồn hoặc URL để người dùng kiểm tra. Tránh cho agent truy cập web nếu dữ liệu cần chỉ nằm trong database nội bộ.

Không coi văn bản trả về từ website là mệnh lệnh; đó là dữ liệu ngoài có thể chứa prompt injection. Không dùng thông tin web làm lệnh gọi công cụ ghi khi chưa qua xác thực và quyền hạn.

## 5. Ví dụ Python
```python
import asyncio
from agents import Agent, Runner, function_tool

CATALOG = {"gao": 18000, "trung": 3500, "sua": 32000}

@function_tool
def lookup_price(product: str) -> str:
    """Tra giá tham khảo từ danh mục demo, đơn vị VND/sản phẩm.

    Args:
        product: Mã sản phẩm, ví dụ gao, trung hoặc sua.
    """
    price = CATALOG.get(product.lower())
    return f"{price} VND" if price is not None else "Không có trong catalog"

agent = Agent(
    name="Store assistant",
    instructions="Trả giá bằng lookup_price; không tự bịa giá. Catalog chỉ là ví dụ.",
    tools=[lookup_price],
)

async def main():
    result = await Runner.run(agent, "Giá của gao là bao nhiêu?")
    print(result.final_output)

asyncio.run(main())
```

## 6. Phân tích ví dụ
`CATALOG` là dữ liệu giả lập cố định để học cơ chế, không phải giá thị trường. `@function_tool` tự tạo schema từ signature; SDK chỉ thực thi hàm nếu model chọn gọi nó trong vòng lặp.

**Lưu ý khi chạy:** Cần cấu hình `OPENAI_API_KEY`, cài `openai-agents` và dùng model mà tài khoản có quyền truy cập. Lời gọi API có thể phát sinh phí. Các ví dụ không thay thế bước kiểm tra quyền và dữ liệu trong ứng dụng thực.

## 7. Lỗi thường gặp và cách tránh
- **Sai lầm:** Để model tự bịa kết quả tool khi không có dữ liệu. **Cách xử lý:** kiểm tra lại điều kiện đầu vào, quyền hạn và kết quả thực thi bằng test hoặc trace.
- **Sai lầm:** Cho phép tool thao tác file/SQL không giới hạn từ chuỗi người dùng. **Cách xử lý:** kiểm tra lại điều kiện đầu vào, quyền hạn và kết quả thực thi bằng test hoặc trace.
- **Sai lầm:** Trả nguyên stacktrace hoặc secret trong kết quả tool. **Cách xử lý:** kiểm tra lại điều kiện đầu vào, quyền hạn và kết quả thực thi bằng test hoặc trace.

## 8. Thực hành ngắn
Xây dựng công cụ tra giá đơn giản và một tool tính tổng giỏ hàng **chỉ đọc**, yêu cầu agent luôn gọi công cụ khi phát biểu số tiền.

## 9. Câu hỏi ôn tập trắc nghiệm
### 9.1. Câu 1
Tool thực sự được ai thực thi?

A. Mô hình trong bộ nhớ token  
B. Môi trường ứng dụng/SDK gọi hàm  
C. Người dùng tự động  
D. Trình duyệt bất kỳ  

**Đáp án:** B
**Giải thích:** SDK nhận yêu cầu gọi công cụ và thực thi mã/khả năng được cấu hình.

### 9.2. Câu 2
Cần dữ liệu thời tiết hiện hành, nên ưu tiên gì?

A. Model tự đoán  
B. Hardcode  
C. Công cụ dữ liệu thời tiết đáng tin  
D. Bỏ qua giờ/ngày  

**Đáp án:** C
**Giải thích:** Thông tin động cần nguồn dữ liệu tại thời điểm yêu cầu.

### 9.3. Câu 3
Tại sao type hint có ích với function tool?

A. Đổi CSS  
B. Ẩn API key  
C. Thay thế authentication  
D. Giúp mô tả schema đối số  

**Đáp án:** D
**Giải thích:** SDK có thể sinh mô tả đầu vào từ kiểu dữ liệu.

### 9.4. Câu 4
Tool ghi vào DB phải thêm gì?

A. Xác thực và kiểm tra quyền ở backend  
B. Tin instruction là đủ  
C. Cho phép mọi ID  
D. Bỏ log  

**Đáp án:** A
**Giải thích:** Mô hình không phải cơ chế phân quyền.

### 9.5. Câu 5
Nội dung website trả về có nên làm lệnh hệ thống?

A. Có  
B. Không, chỉ là dữ liệu ngoài  
C. Có nếu văn phong chính thức  
D. Chỉ khi đủ dài  

**Đáp án:** B
**Giải thích:** Dữ liệu không đáng tin có nguy cơ prompt injection.

## 10. Tổng kết
Cho agent truy cập hàm Python và công cụ tìm kiếm, hiểu schema, mô tả tool và giới hạn quyền thực thi. Mấu chốt là chọn mức tự động hóa vừa đủ, giữ dữ liệu có căn cứ và thử nghiệm hành vi thực tế trước khi đưa vào hệ thống phục vụ người dùng.

## 11. Đọc thêm
- [Tài liệu SDK chính thức](https://openai.github.io/openai-agents-python/)
- [Quickstart Python](https://openai.github.io/openai-agents-python/quickstart/)
