# Context Management và dữ liệu ứng dụng

**Loại:** Lesson | **Trình độ:** Cơ bản → Trung cấp | **Thời điểm học:** 01:23:08

## 1. Tóm tắt
Phân biệt dữ liệu runtime của ứng dụng và context gửi vào mô hình; truyền state có kiểm soát vào tools.

## 2. Mục tiêu học tập
- Giải thích được kiến thức cốt lõi của **Context Management và dữ liệu ứng dụng** bằng ví dụ độc lập.
- Phân biệt được trường hợp sử dụng đúng và rủi ro triển khai thường gặp.
- Chạy hoặc kiểm tra được đoạn Python minh họa theo yêu cầu của bài.
- Phân tích kết quả, xác định lỗi và đề xuất cách sửa có căn cứ.

## 3. Bối cảnh và vấn đề
Từ một ứng dụng mô hình chỉ phản hồi văn bản, chúng ta muốn xây dựng hệ thống có thể xử lý nhiệm vụ, gọi công cụ khi phù hợp, báo cáo trạng thái và giữ đúng quyền truy cập. Bài học giải thích từng khái niệm bằng ví dụ có thể kiểm tra, không phụ thuộc vào một UI cụ thể.

## 4. Kiến thức cốt lõi

### 4.1. Hai loại context cần phân biệt
Model context là phần nội dung, instructions và lịch sử được gửi tới mô hình. Application/run context là dữ liệu Python đáng tin do ứng dụng truyền cho tool hoặc callback qua `RunContextWrapper`. Không mặc định toàn bộ dữ liệu application context được đưa cho model.

Ví dụ website siêu thị: agent cần tìm sản phẩm và tính giỏ hàng. Backend giữ user_id, session, catalog/client DB trong run context; model chỉ cần biết schema tool phù hợp.

### 4.2. Typed context và tool handler
Có thể định nghĩa một `dataclass` chứa `user_id`, catalog và cart. Khai báo `Agent[ShopContext]` và truyền `context=ShopContext(...)` vào `Runner.run`. Function tool nhận `ctx: RunContextWrapper[ShopContext]`, đọc `ctx.context`. Điều này giúp tool không phụ thuộc biến global và dễ test.

Dữ liệu quyền và tài khoản phải đến từ auth backend, không đến từ phần argument do model tự tạo. Khi model đề xuất một sản phẩm, backend tiếp tục kiểm tra còn hàng và giá.

### 4.3. Giới hạn token và lọc bối cảnh
Đưa toàn bộ DB hoặc lịch sử chat dài vào prompt gây tốn token, tăng độ trễ và rủi ro rò rỉ dữ liệu. Thay vào đó, giữ dữ liệu đầy đủ ở server, truy xuất chọn lọc qua tool, tóm tắt lịch sử hợp lý và kiểm soát window context.

Với giỏ hàng, lưu trạng thái thật ở DB; không để LLM thành nguồn chân lý duy nhất về số lượng hoặc giá tiền.

## 5. Ví dụ Python
```python
import asyncio
from dataclasses import dataclass
from agents import Agent, Runner, RunContextWrapper, function_tool

@dataclass
class ShopContext:
    user_id: str
    prices: dict[str, int]

@function_tool
def get_price(ctx: RunContextWrapper[ShopContext], code: str) -> str:
    """Lấy giá đơn hàng demo theo mã sản phẩm."""
    price = ctx.context.prices.get(code)
    return "Không có sản phẩm" if price is None else f"{price} VND"

agent = Agent[ShopContext](name="Store", instructions="Hỏi giá qua tool get_price.", tools=[get_price])

async def main():
    data = ShopContext(user_id="demo", prices={"milk": 30000, "egg": 4000})
    out = await Runner.run(agent, "Giá milk?", context=data)
    print(out.final_output)

asyncio.run(main())
```

## 6. Phân tích ví dụ
`context=data` là dependency do code cung cấp cho tool; model không trực tiếp định nghĩa `user_id`. Tên sản phẩm `code` vẫn là argument do mô hình gợi ý, cần kiểm tra trong tool.

**Lưu ý khi chạy:** Cần cấu hình `OPENAI_API_KEY`, cài `openai-agents` và dùng model mà tài khoản có quyền truy cập. Lời gọi API có thể phát sinh phí. Các ví dụ không thay thế bước kiểm tra quyền và dữ liệu trong ứng dụng thực.

## 7. Lỗi thường gặp và cách tránh
- **Sai lầm:** Truyền thông tin nhạy cảm vào prompt chỉ vì tiện. **Cách xử lý:** kiểm tra lại điều kiện đầu vào, quyền hạn và kết quả thực thi bằng test hoặc trace.
- **Sai lầm:** Tin user_id hoặc vai trò do model tạo ra thay vì backend auth. **Cách xử lý:** kiểm tra lại điều kiện đầu vào, quyền hạn và kết quả thực thi bằng test hoặc trace.
- **Sai lầm:** Đồng nhất memory context với database bền vững. **Cách xử lý:** kiểm tra lại điều kiện đầu vào, quyền hạn và kết quả thực thi bằng test hoặc trace.

## 8. Thực hành ngắn
Xây dựng store assistant đọc catalog từ `ShopContext`, kiểm tra user_id demo và lập danh sách mua sắm mà không sửa DB thật.

## 9. Câu hỏi ôn tập trắc nghiệm
### 9.1. Câu 1
Run context của ứng dụng là gì?

A. Chỉ transcript  
B. Dữ liệu Python do backend truyền vào runner/tool  
C. Bản đồ 3D  
D. Thời gian stream  

**Đáp án:** B
**Giải thích:** Ứng dụng chủ động cung cấp dependencies/context.

### 9.2. Câu 2
Giá từ DB nên được lấy qua đâu?

A. Đoán từ model  
B. Nhờ prompt chứa tất cả dữ liệu  
C. Tool có truy cập backend xác thực  
D. Chỉ hỏi lại user  

**Đáp án:** C
**Giải thích:** Tool truy vấn dữ liệu thật ở hệ thống.

### 9.3. Câu 3
Argument do model tạo có đáng tin là quyền user không?

A. Có  
B. Có nếu JSON  
C. Có nếu nhiều tokens  
D. Không  

**Đáp án:** D
**Giải thích:** Phân quyền phải dựa trên chứng thực backend.

### 9.4. Câu 4
Đưa toàn bộ DB vào prompt có vấn đề gì?

A. Tăng token và nguy cơ lộ dữ liệu  
B. Giảm token  
C. Đảm bảo tính đúng  
D. Tăng mức bảo mật  

**Đáp án:** A
**Giải thích:** Cần retrieval có chọn lọc.

### 9.5. Câu 5
Giá và giỏ hàng lâu dài nên lưu ở đâu?

A. Trong lời hứa của agent  
B. DB/cơ sở dữ liệu nguồn chân lý  
C. Trong tên agent  
D. Chỉ trong trace  

**Đáp án:** B
**Giải thích:** Trạng thái nghiệp vụ phải bền vững và kiểm chứng được.

## 10. Tổng kết
Phân biệt dữ liệu runtime của ứng dụng và context gửi vào mô hình; truyền state có kiểm soát vào tools. Mấu chốt là chọn mức tự động hóa vừa đủ, giữ dữ liệu có căn cứ và thử nghiệm hành vi thực tế trước khi đưa vào hệ thống phục vụ người dùng.

## 11. Đọc thêm
- [Tài liệu SDK chính thức](https://openai.github.io/openai-agents-python/)
- [Quickstart Python](https://openai.github.io/openai-agents-python/quickstart/)
