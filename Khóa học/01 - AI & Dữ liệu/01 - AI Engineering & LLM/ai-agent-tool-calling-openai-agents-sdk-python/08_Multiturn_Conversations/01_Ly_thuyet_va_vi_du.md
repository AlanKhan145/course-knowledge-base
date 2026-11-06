# Hội thoại nhiều lượt và Sessions

**Loại:** Lesson | **Trình độ:** Cơ bản → Trung cấp | **Thời điểm học:** 01:14:47

## 1. Tóm tắt
Duy trì lịch sử tương tác qua nhiều lượt, phân biệt replay thủ công và sessions, quản lý conversation id.

## 2. Mục tiêu học tập
- Giải thích được kiến thức cốt lõi của **Hội thoại nhiều lượt và Sessions** bằng ví dụ độc lập.
- Phân biệt được trường hợp sử dụng đúng và rủi ro triển khai thường gặp.
- Chạy hoặc kiểm tra được đoạn Python minh họa theo yêu cầu của bài.
- Phân tích kết quả, xác định lỗi và đề xuất cách sửa có căn cứ.

## 3. Bối cảnh và vấn đề
Từ một ứng dụng mô hình chỉ phản hồi văn bản, chúng ta muốn xây dựng hệ thống có thể xử lý nhiệm vụ, gọi công cụ khi phù hợp, báo cáo trạng thái và giữ đúng quyền truy cập. Bài học giải thích từng khái niệm bằng ví dụ có thể kiểm tra, không phụ thuộc vào một UI cụ thể.

## 4. Kiến thức cốt lõi

### 4.1. Mỗi lần Runner chạy là một lượt
Một lệnh `Runner.run(agent, "Chào")` không tự nhớ mọi hội thoại trước nếu bạn không truyền trạng thái. Câu “Tên tôi là A” và sau đó “Tôi tên gì?” chỉ được kết nối khi lịch sử được đưa vào lần chạy sau.

Lựa chọn cơ bản: `result.to_input_list()` để replay thủ công hoặc `SQLiteSession`/session backend để SDK quản lý lịch sử. Với ứng dụng triển khai thật, cô lập session theo user và hội thoại.

### 4.2. Replay thủ công và session
Replay giúp xem toàn bộ messages, chủ động lược bỏ hoặc biên tập lịch sử. Session giảm công việc code và có thể lưu vào SQLite hoặc backend được hỗ trợ. Không đồng thời nạp full history thủ công **và** session nếu không có chủ đích: dễ nhân đôi cùng một nội dung trong model context.

Một cuộc hội thoại nhiều lượt không phải “trí nhớ vĩnh viễn”. Model chỉ thấy phần lịch sử/nhớ được cung cấp trong context, còn dữ liệu dài hạn cần database và chính sách lưu trữ.

### 4.3. Trạng thái cuối và dữ liệu người dùng
Khi có handoff, `last_agent` cho biết agent cuối. Một lượt sau có thể tiếp tục với agent này nếu ứng dụng có chính sách phù hợp, hoặc quay về triage khi chủ đề đổi.

Không dùng ID session đoán được làm bằng chứng đăng nhập. Nếu hệ thống nhiều người, liên kết với tài khoản xác thực và giới hạn đọc/ghi hội thoại của đúng chủ sở hữu.

## 5. Ví dụ Python
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

## 6. Phân tích ví dụ
`SQLiteSession` lưu hội thoại vào SQLite và SDK khôi phục các messages liên quan khi gọi tiếp. Demo dùng ID cố định; ứng dụng có user thật phải tạo ID theo hội thoại và phân quyền.

**Lưu ý khi chạy:** Cần cấu hình `OPENAI_API_KEY`, cài `openai-agents` và dùng model mà tài khoản có quyền truy cập. Lời gọi API có thể phát sinh phí. Các ví dụ không thay thế bước kiểm tra quyền và dữ liệu trong ứng dụng thực.

## 7. Lỗi thường gặp và cách tránh
- **Sai lầm:** Tạo session mới mỗi lượt rồi kỳ vọng nhớ hội thoại. **Cách xử lý:** kiểm tra lại điều kiện đầu vào, quyền hạn và kết quả thực thi bằng test hoặc trace.
- **Sai lầm:** Truyền replay cũ cùng lúc với session, làm trùng context. **Cách xử lý:** kiểm tra lại điều kiện đầu vào, quyền hạn và kết quả thực thi bằng test hoặc trace.
- **Sai lầm:** Dùng session_id thay cơ chế đăng nhập/phân quyền. **Cách xử lý:** kiểm tra lại điều kiện đầu vào, quyền hạn và kết quả thực thi bằng test hoặc trace.

## 8. Thực hành ngắn
Xây dựng chatbot CLI 3 lượt nhớ người dùng đang học gì; so sánh với cùng lời hỏi khi khởi tạo session mới.

## 9. Câu hỏi ôn tập trắc nghiệm
### 9.1. Câu 1
Lịch sử chat được tự truyền giữa mọi lệnh Runner không?

A. Luôn luôn  
B. Không, cần state/replay/session  
C. Chỉ có một model  
D. Chỉ khi có tool  

**Đáp án:** B
**Giải thích:** Runner cần chiến lược lưu và tiếp tục hội thoại.

### 9.2. Câu 2
`SQLiteSession` có mục đích gì?

A. Tạo hình ảnh  
B. Truy cập website  
C. Lưu lịch sử hội thoại  
D. Gọi model miễn phí  

**Đáp án:** C
**Giải thích:** SDK dùng session để khôi phục context giữa các lượt.

### 9.3. Câu 3
Truyền cùng lịch sử bằng cả replay và session có rủi ro gì?

A. Tự tăng quyền  
B. Mất Python  
C. Truyền JSON sai  
D. Nhân đôi context  

**Đáp án:** D
**Giải thích:** Hai chiến lược chồng nhau có thể gửi trùng nội dung.

### 9.4. Câu 4
Session ID có phải là chứng minh danh tính?

A. Không  
B. Có  
C. Chỉ khi 12 ký tự  
D. Có nếu dùng UUID  

**Đáp án:** A
**Giải thích:** Định danh hội thoại không thay token authentication.

### 9.5. Câu 5
Đổi `session_id` thường ảnh hưởng thế nào?

A. Dừng mọi server  
B. Tách lịch sử cuộc hội thoại  
C. Tự bật tracing  
D. Không ảnh hưởng  

**Đáp án:** B
**Giải thích:** Mỗi session có lịch sử riêng.

## 10. Tổng kết
Duy trì lịch sử tương tác qua nhiều lượt, phân biệt replay thủ công và sessions, quản lý conversation id. Mấu chốt là chọn mức tự động hóa vừa đủ, giữ dữ liệu có căn cứ và thử nghiệm hành vi thực tế trước khi đưa vào hệ thống phục vụ người dùng.

## 11. Đọc thêm
- [Tài liệu SDK chính thức](https://openai.github.io/openai-agents-python/)
- [Quickstart Python](https://openai.github.io/openai-agents-python/quickstart/)
