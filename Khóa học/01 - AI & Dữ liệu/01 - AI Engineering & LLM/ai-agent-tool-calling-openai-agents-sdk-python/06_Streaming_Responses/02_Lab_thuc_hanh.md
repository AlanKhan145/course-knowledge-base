# Thực hành — Streaming phản hồi và sự kiện chạy Agent

**Loại:** Lab | **Đầu ra:** mã Python hoạt động và bản ghi kiểm thử

## 1. Tổng quan
Làm CLI chat streaming có 2 trạng thái “đang trả lời” và “hoàn thành”; mở rộng log khi agent đổi hoặc gọi tool.

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
Chạy code streaming và quan sát khác biệt với `Runner.run`.

**Checkpoint:** Kiểm tra bằng một đầu vào cụ thể, lưu output/exception thực tế và ghi lại lý do nếu kết quả khác dự kiến.

### 4.2. Bước 2
Thêm xử lý `agent_updated_stream_event` và `run_item_stream_event` để in dòng trạng thái riêng.

**Checkpoint:** Kiểm tra bằng một đầu vào cụ thể, lưu output/exception thực tế và ghi lại lý do nếu kết quả khác dự kiến.

### 4.3. Bước 3
Giới hạn độ dài prompt và xử lý ngoại lệ của API.

**Checkpoint:** Kiểm tra bằng một đầu vào cụ thể, lưu output/exception thực tế và ghi lại lý do nếu kết quả khác dự kiến.

### 4.4. Bước 4
Thử hủy tác vụ sau một khoảng do người dùng quyết định, đánh dấu kết quả dang dở.

**Checkpoint:** Kiểm tra bằng một đầu vào cụ thể, lưu output/exception thực tế và ghi lại lý do nếu kết quả khác dự kiến.

### 4.5. Bước 5
Viết mô tả payload SSE `event: token`, `event: status`, `event: done` cho bước tích hợp frontend.

**Checkpoint:** Kiểm tra bằng một đầu vào cụ thể, lưu output/exception thực tế và ghi lại lý do nếu kết quả khác dự kiến.

## 5. Mã tham khảo
```python
import asyncio
from agents import Agent, Runner
from openai.types.responses import ResponseTextDeltaEvent

agent = Agent(name="Explainer", instructions="Giải thích chủ đề ngắn gọn và chính xác.")

async def main():
    result = Runner.run_streamed(agent, "Giải thích agent loop trong 5 câu")
    async for event in result.stream_events():
        if event.type == "raw_response_event" and isinstance(event.data, ResponseTextDeltaEvent):
            print(event.data.delta, end="", flush=True)
    print("\n--- Hoàn thành ---")
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
`run_streamed` trả gì?

A. Một chuỗi đầy đủ ngay  
B. Đối tượng để duyệt sự kiện bất đồng bộ  
C. Một video  
D. Một tệp CSV  

**Đáp án:** B
**Giải thích:** Ta cần đọc `stream_events()` để nhận sự kiện.

### 10.2. Câu 2
Để hiển thị text sớm, nên lắng nghe gì?

A. File descriptor  
B. HTTP header  
C. ResponseTextDeltaEvent  
D. SQLite commit  

**Đáp án:** C
**Giải thích:** Delta mô tả phần văn bản được sinh thêm.

### 10.3. Câu 3
Tool call event có nên ghép trực tiếp vào đoạn trả lời?

A. Luôn luôn  
B. Chỉ khi có 3 tool  
C. Không bao giờ hiển thị progress  
D. Không, nên tách trạng thái và nội dung  

**Đáp án:** D
**Giải thích:** Sự kiện điều phối không nhất thiết là câu trả lời cho user.

### 10.4. Câu 4
Khi nào coi streamed run hoàn tất?

A. Sau khi duyệt hết sự kiện và SDK hoàn thành xử lý  
B. Sau delta đầu  
C. Ngay khi tool bắt đầu  
D. Sau 1 giây  

**Đáp án:** A
**Giải thích:** Cuối iterator là ranh giới hoàn tất của một lần chạy.

### 10.5. Câu 5
Vì sao cần kiểm soát hủy stream?

A. Để đổi theme  
B. Tool có thể đã gây side effect  
C. Để dùng nhiều màu  
D. Vì model không hỗ trợ asyncio  

**Đáp án:** B
**Giải thích:** Hủy stream không tự đảo ngược thay đổi bên ngoài.

## 11. Tổng kết
Phát văn bản theo từng phần, theo dõi event tool/handoff và tích hợp vào giao diện ứng dụng. Thực hành thành công khi có bằng chứng chạy và bảng kiểm chứng, không chỉ đoạn code viết đúng cú pháp.
