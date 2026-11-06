# Thực hành — Hội thoại nhiều lượt và Sessions

**Loại:** Lab | **Đầu ra:** mã Python hoạt động và bản ghi kiểm thử

## 1. Tổng quan
Xây dựng chatbot CLI 3 lượt nhớ người dùng đang học gì; so sánh với cùng lời hỏi khi khởi tạo session mới.

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
Dùng một `SQLiteSession` cố định cho ba lượt.

**Checkpoint:** Kiểm tra bằng một đầu vào cụ thể, lưu output/exception thực tế và ghi lại lý do nếu kết quả khác dự kiến.

### 4.2. Bước 2
Cho user nói tên môn đang học và giờ học, sau đó hỏi lại.

**Checkpoint:** Kiểm tra bằng một đầu vào cụ thể, lưu output/exception thực tế và ghi lại lý do nếu kết quả khác dự kiến.

### 4.3. Bước 3
Khởi tạo một session ID khác và chứng minh lịch sử không được chia sẻ mặc định.

**Checkpoint:** Kiểm tra bằng một đầu vào cụ thể, lưu output/exception thực tế và ghi lại lý do nếu kết quả khác dự kiến.

### 4.4. Bước 4
Thử chạy lại chương trình với session file-based để thấy dữ liệu có thể còn.

**Checkpoint:** Kiểm tra bằng một đầu vào cụ thể, lưu output/exception thực tế và ghi lại lý do nếu kết quả khác dự kiến.

### 4.5. Bước 5
Ghi ra quy tắc tạo session ID an toàn cho nhiều người dùng.

**Checkpoint:** Kiểm tra bằng một đầu vào cụ thể, lưu output/exception thực tế và ghi lại lý do nếu kết quả khác dự kiến.

## 5. Mã tham khảo
```python
import asyncio
from agents import Agent, Runner, SQLiteSession

agent = Agent(name="Study mentor", instructions="Trợ lý học tập; nhớ nội dung có trong session.")
session = SQLiteSession("demo_user_conversation", "history_demo.db")

async def main():
    first = await Runner.run(agent, "Tôi học Python buổi tối.", session=session)
    print(first.final_output)
    second = await Runner.run(agent, "Tôi thường học vào lúc nào?", session=session)
    print(second.final_output)

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
Lịch sử chat được tự truyền giữa mọi lệnh Runner không?

A. Luôn luôn  
B. Không, cần state/replay/session  
C. Chỉ có một model  
D. Chỉ khi có tool  

**Đáp án:** B
**Giải thích:** Runner cần chiến lược lưu và tiếp tục hội thoại.

### 10.2. Câu 2
`SQLiteSession` có mục đích gì?

A. Tạo hình ảnh  
B. Truy cập website  
C. Lưu lịch sử hội thoại  
D. Gọi model miễn phí  

**Đáp án:** C
**Giải thích:** SDK dùng session để khôi phục context giữa các lượt.

### 10.3. Câu 3
Truyền cùng lịch sử bằng cả replay và session có rủi ro gì?

A. Tự tăng quyền  
B. Mất Python  
C. Truyền JSON sai  
D. Nhân đôi context  

**Đáp án:** D
**Giải thích:** Hai chiến lược chồng nhau có thể gửi trùng nội dung.

### 10.4. Câu 4
Session ID có phải là chứng minh danh tính?

A. Không  
B. Có  
C. Chỉ khi 12 ký tự  
D. Có nếu dùng UUID  

**Đáp án:** A
**Giải thích:** Định danh hội thoại không thay token authentication.

### 10.5. Câu 5
Đổi `session_id` thường ảnh hưởng thế nào?

A. Dừng mọi server  
B. Tách lịch sử cuộc hội thoại  
C. Tự bật tracing  
D. Không ảnh hưởng  

**Đáp án:** B
**Giải thích:** Mỗi session có lịch sử riêng.

## 11. Tổng kết
Duy trì lịch sử tương tác qua nhiều lượt, phân biệt replay thủ công và sessions, quản lý conversation id. Thực hành thành công khi có bằng chứng chạy và bảng kiểm chứng, không chỉ đoạn code viết đúng cú pháp.
