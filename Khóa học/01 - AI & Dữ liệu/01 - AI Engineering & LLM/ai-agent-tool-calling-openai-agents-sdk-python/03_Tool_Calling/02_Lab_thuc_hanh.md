# Thực hành — Tool Calling: Function Tools và Web Search

**Loại:** Lab | **Đầu ra:** mã Python hoạt động và bản ghi kiểm thử

## 1. Tổng quan
Xây dựng công cụ tra giá đơn giản và một tool tính tổng giỏ hàng **chỉ đọc**, yêu cầu agent luôn gọi công cụ khi phát biểu số tiền.

## 2. Mục tiêu
- Tự triển khai được ví dụ trong một dự án Python độc lập.
- Quan sát được kết quả thực tế của Agent/Runner hoặc tool.
- Tìm và giải thích được ít nhất một tình huống lỗi.
- Hoàn thiện checklist và câu hỏi ôn tập.

## 3. Chuẩn bị
- Python và virtual environment đang kích hoạt.
- `pip install openai-agents python-dotenv`.
- Biến `OPENAI_API_KEY` được cấu hình an toàn; không đưa key vào code hay bản nộp.
- Trình soạn thảo VS Code, PyCharm hoặc Jupyter.
- Đọc mục tiêu và kiến thức cốt lõi trước khi bắt đầu.

## 4. Quy trình thực hiện

### 4.1. Bước 1
Thiết lập catalog demo 5 sản phẩm bằng dictionary hoặc SQLite test.

**Checkpoint:** Kiểm tra bằng một đầu vào cụ thể, lưu output/exception thực tế và ghi lại lý do nếu kết quả khác dự kiến.

### 4.2. Bước 2
Viết tool `get_product_price(product_id: str)` với type hint, docstring và xử lý sản phẩm không tồn tại.

**Checkpoint:** Kiểm tra bằng một đầu vào cụ thể, lưu output/exception thực tế và ghi lại lý do nếu kết quả khác dự kiến.

### 4.3. Bước 3
Viết tool `calculate_cart_total(items: list[str])` và đảm bảo kết quả trả về theo đơn vị cụ thể.

**Checkpoint:** Kiểm tra bằng một đầu vào cụ thể, lưu output/exception thực tế và ghi lại lý do nếu kết quả khác dự kiến.

### 4.4. Bước 4
Chạy hội thoại “Trứng bao nhiêu?”, “2 sữa và 3 trứng thì sao?” để kiểm tra lựa chọn tool.

**Checkpoint:** Kiểm tra bằng một đầu vào cụ thể, lưu output/exception thực tế và ghi lại lý do nếu kết quả khác dự kiến.

### 4.5. Bước 5
Ghi log những tool được gọi, thử tên sản phẩm sai và không để agent công bố giá khi tool không tìm được.

**Checkpoint:** Kiểm tra bằng một đầu vào cụ thể, lưu output/exception thực tế và ghi lại lý do nếu kết quả khác dự kiến.

## 5. Mã tham khảo
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
Đoạn mã là điểm khởi đầu, không phải toàn bộ lời giải cho mọi bước thực hành. Hãy bổ sung phần kiểm thử và xử lý tình huống theo yêu cầu. **Không chạy tool có side effect trên dữ liệu thật trong bài lab.**

## 6. Kiểm thử và đối chiếu kết quả
| Ca kiểm thử | Đầu vào | Kỳ vọng | Kết quả quan sát |
| --- | --- | --- | --- |
| Bình thường | Một yêu cầu đúng phạm vi | Có kết quả hợp lệ | Tự điền |
| Thiếu dữ liệu | Một tham số vắng/sai | Giải thích thiếu dữ liệu | Tự điền |
| Trường hợp biên | Yêu cầu mơ hồ/khó | Không bịa hoặc vượt quyền | Tự điền |

## 7. Debug và khắc phục
- **`ModuleNotFoundError`:** xác nhận `python -m pip show openai-agents` trong đúng môi trường.
- **Authentication/permission:** xác nhận key và quyền model, không in key.
- **Kết quả model thiếu ổn định:** thử nhiều câu đầu vào, thắt chặt schema/tiêu chí, quan sát trace.
- **Tool hoặc stream bị lỗi:** ghi exception, không báo đã hoàn thành hành động ngoài hệ thống nếu chưa có xác nhận.
- **Nhầm dữ liệu thực và demo:** ghi rõ dữ liệu nào cố định và dữ liệu nào cần API/DB thật.

## 8. Deliverable
Nộp một file Python hoặc notebook đã chạy được; bảng ba ca kiểm thử; ảnh chụp/log đã che thông tin nhạy cảm; báo cáo ngắn về một lỗi và cách giải quyết.

## 9. Checklist hoàn thành
- [ ] Chạy được code trong môi trường riêng.
- [ ] Không commit API key, file `.env` hoặc dữ liệu nhạy cảm.
- [ ] Có ít nhất ba ca kiểm thử và kết quả quan sát.
- [ ] Đã phân biệt hành vi model với thao tác thực.
- [ ] Giải thích được một lỗi và cách khắc phục.

## 10. Câu hỏi ôn tập trắc nghiệm
### 10.1. Câu 1
Tool thực sự được ai thực thi?

A. Mô hình trong bộ nhớ token  
B. Môi trường ứng dụng/SDK gọi hàm  
C. Người dùng tự động  
D. Trình duyệt bất kỳ  

**Đáp án:** B
**Giải thích:** SDK nhận yêu cầu gọi công cụ và thực thi mã/khả năng được cấu hình.

### 10.2. Câu 2
Cần dữ liệu thời tiết hiện hành, nên ưu tiên gì?

A. Model tự đoán  
B. Hardcode  
C. Công cụ dữ liệu thời tiết đáng tin  
D. Bỏ qua giờ/ngày  

**Đáp án:** C
**Giải thích:** Thông tin động cần nguồn dữ liệu tại thời điểm yêu cầu.

### 10.3. Câu 3
Tại sao type hint có ích với function tool?

A. Đổi CSS  
B. Ẩn API key  
C. Thay thế authentication  
D. Giúp mô tả schema đối số  

**Đáp án:** D
**Giải thích:** SDK có thể sinh mô tả đầu vào từ kiểu dữ liệu.

### 10.4. Câu 4
Tool ghi vào DB phải thêm gì?

A. Xác thực và kiểm tra quyền ở backend  
B. Tin instruction là đủ  
C. Cho phép mọi ID  
D. Bỏ log  

**Đáp án:** A
**Giải thích:** Mô hình không phải cơ chế phân quyền.

### 10.5. Câu 5
Nội dung website trả về có nên làm lệnh hệ thống?

A. Có  
B. Không, chỉ là dữ liệu ngoài  
C. Có nếu văn phong chính thức  
D. Chỉ khi đủ dài  

**Đáp án:** B
**Giải thích:** Dữ liệu không đáng tin có nguy cơ prompt injection.

## 11. Tổng kết
Cho agent truy cập hàm Python và công cụ tìm kiếm, hiểu schema, mô tả tool và giới hạn quyền thực thi. Thực hành thành công khi có bằng chứng chạy và bảng kiểm chứng, không chỉ đoạn code viết đúng cú pháp.
