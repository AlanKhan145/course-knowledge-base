# Thực hành — Context Management và dữ liệu ứng dụng

**Loại:** Lab | **Đầu ra:** mã Python hoạt động và bản ghi kiểm thử

## 1. Tổng quan
Xây dựng store assistant đọc catalog từ `ShopContext`, kiểm tra user_id demo và lập danh sách mua sắm mà không sửa DB thật.

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
Tạo `ShopContext` chứa user_id và catalog 5 sản phẩm.

**Checkpoint:** Kiểm tra bằng một đầu vào cụ thể, lưu output/exception thực tế và ghi lại lý do nếu kết quả khác dự kiến.

### 4.2. Bước 2
Viết tool tìm giá, trả trường hợp không có sản phẩm.

**Checkpoint:** Kiểm tra bằng một đầu vào cụ thể, lưu output/exception thực tế và ghi lại lý do nếu kết quả khác dự kiến.

### 4.3. Bước 3
Tạo hai context khác nhau và chạy yêu cầu giống nhau để chứng minh dữ liệu context tách biệt.

**Checkpoint:** Kiểm tra bằng một đầu vào cụ thể, lưu output/exception thực tế và ghi lại lý do nếu kết quả khác dự kiến.

### 4.4. Bước 4
Đặt câu hỏi về món không có trong catalog; agent phải nêu rõ không có dữ liệu.

**Checkpoint:** Kiểm tra bằng một đầu vào cụ thể, lưu output/exception thực tế và ghi lại lý do nếu kết quả khác dự kiến.

### 4.5. Bước 5
Thiết kế phần mở rộng: auth thực → DB query → tool kết quả → agent phản hồi.

**Checkpoint:** Kiểm tra bằng một đầu vào cụ thể, lưu output/exception thực tế và ghi lại lý do nếu kết quả khác dự kiến.

## 5. Mã tham khảo
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
Run context của ứng dụng là gì?

A. Chỉ transcript  
B. Dữ liệu Python do backend truyền vào runner/tool  
C. Bản đồ 3D  
D. Thời gian stream  

**Đáp án:** B
**Giải thích:** Ứng dụng chủ động cung cấp dependencies/context.

### 10.2. Câu 2
Giá từ DB nên được lấy qua đâu?

A. Đoán từ model  
B. Nhờ prompt chứa tất cả dữ liệu  
C. Tool có truy cập backend xác thực  
D. Chỉ hỏi lại user  

**Đáp án:** C
**Giải thích:** Tool truy vấn dữ liệu thật ở hệ thống.

### 10.3. Câu 3
Argument do model tạo có đáng tin là quyền user không?

A. Có  
B. Có nếu JSON  
C. Có nếu nhiều tokens  
D. Không  

**Đáp án:** D
**Giải thích:** Phân quyền phải dựa trên chứng thực backend.

### 10.4. Câu 4
Đưa toàn bộ DB vào prompt có vấn đề gì?

A. Tăng token và nguy cơ lộ dữ liệu  
B. Giảm token  
C. Đảm bảo tính đúng  
D. Tăng mức bảo mật  

**Đáp án:** A
**Giải thích:** Cần retrieval có chọn lọc.

### 10.5. Câu 5
Giá và giỏ hàng lâu dài nên lưu ở đâu?

A. Trong lời hứa của agent  
B. DB/cơ sở dữ liệu nguồn chân lý  
C. Trong tên agent  
D. Chỉ trong trace  

**Đáp án:** B
**Giải thích:** Trạng thái nghiệp vụ phải bền vững và kiểm chứng được.

## 11. Tổng kết
Phân biệt dữ liệu runtime của ứng dụng và context gửi vào mô hình; truyền state có kiểm soát vào tools. Thực hành thành công khi có bằng chứng chạy và bảng kiểm chứng, không chỉ đoạn code viết đúng cú pháp.
