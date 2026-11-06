# Bài 02 — Thực hành có hướng dẫn: Tổng quan AI Agents

> **Module 01 · Lab** · Video: [xem từ 00:00:00](https://www.youtube.com/watch?v=gFcAfU3V1Zo&t=0s).

**Tổng quan:** Agent là mô hình ngôn ngữ được định hướng bằng nhiệm vụ, có thể sử dụng công cụ và phối hợp với agent khác.

## 1. Mục tiêu lab

Thiết kế một ứng dụng Agent bằng sơ đồ và đặc tả trước khi viết code. Đầu ra là bảng công cụ và danh sách những tình huống agent được phép gọi công cụ.

## 2. Đề bài: Trợ lý lập lịch cá nhân

Người dùng có thể hỏi “Ngày mai tôi nên làm việc gì trước?”, “Tôi có cuộc họp nào?” và “Giải thích sự khác nhau giữa task ưu tiên cao và thấp”. Hệ thống giả định có ba hàm: `get_calendar_events(date)`, `list_tasks()` và `send_reminder(task_id)`. Trong lab này chúng chỉ là **giao diện thiết kế**; chưa cần kết nối lịch thật.

## 3. Thiết kế đầu vào, hành vi và quyền

1. Viết instructions 4–6 câu mô tả trợ lý và các hành động được phép.
2. Chia yêu cầu thành *trả lời trực tiếp*, *cần đọc dữ liệu* và *cần hành động thay đổi trạng thái*.
3. Với `send_reminder`, đặt điều kiện cần xác nhận của người dùng trước khi gửi.
4. Định nghĩa kết quả lỗi khi API lịch không khả dụng: không tự suy diễn lịch trống.

| Yêu cầu | Cần tool? | Tool phù hợp | Điều kiện |
| --- | --- | --- | --- |
| “Lịch chiều nay thế nào?” | Có | `get_calendar_events` | Xác thực người dùng |
| “Task nào quan trọng hơn?” | Tùy | `list_tasks` | Cần danh sách task mới nhất |
| “Nhắc tôi hoàn thành báo cáo” | Có | `send_reminder` | Xác nhận mục tiêu và thời gian |
| “Ưu tiên là gì?” | Không | Không | Có thể giải thích trực tiếp |

## 4. Bản phác thảo thuật toán

```python
# Pseudocode: mô tả thiết kế, chưa phải chương trình hoàn chỉnh.
def handle_message(message, authorized_tools):
    intent = analyze_intent(message)
    if intent == "explain":
        return generate_answer(message)
    if intent == "read_calendar":
        return authorized_tools["get_calendar_events"](date_from(message))
    if intent == "send_reminder":
        return request_user_confirmation(message)
```

Trong Agents SDK, bạn không cần viết `if/else` thủ công cho mọi câu nói; `Runner` và model có thể lựa chọn tool. Pseudocode giúp bạn hiểu ranh giới giữa **quy tắc ứng dụng bắt buộc** và **quyết định linh hoạt của mô hình**.

## 5. Checkpoint và bàn giao

Nộp một file `agent_design.md` gồm mô tả vai trò, sơ đồ vòng lặp, bảng tool và ba tình huống thất bại. Kiểm tra lại rằng hệ thống không gửi nhắc nhở thật từ một lệnh chưa được xác nhận.

## 6. Debug và mở rộng

Nếu agent trả lời “hôm nay bạn rảnh” mà không gọi lịch, cần xem lại instructions và quy tắc từ chối suy đoán dữ liệu động. Nếu agent cố dùng công cụ không được đăng ký, hệ thống phải từ chối thực thi chứ không được tự tạo API.

## 7. Câu hỏi ôn tập trắc nghiệm

### Câu 1

Điểm khác biệt trọng tâm giữa một chatbot và agent là gì?

A. Agent luôn nhiều mô hình hơn chatbot  
B. Agent không cần mô hình ngôn ngữ  
C. Agent có thể điều phối tool và hành động trong phạm vi được cấp quyền  
D. Agent chắc chắn đúng  

**Đáp án:** C. **Giải thích:** Khả năng dùng công cụ và thực thi theo mục tiêu là khác biệt chính.

### Câu 2

Bộ phận nào thực hiện vòng lặp gọi mô hình và công cụ?

A. `Pydantic`  
B. `.env`  
C. `Graphviz`  
D. `Runner`  

**Đáp án:** D. **Giải thích:** Runner tổ chức các bước cho tới khi nhận final output.

### Câu 3

Người dùng hỏi một định nghĩa thuần lý thuyết, phương án phù hợp nhất?

A. Trả lời trực tiếp nếu đủ dữ kiện  
B. Luôn gọi web  
C. Luôn handoff  
D. Luôn tạo file  

**Đáp án:** A. **Giải thích:** Lạm dụng tool làm tăng chi phí và độ trễ.

### Câu 4

Tại sao không nên mặc định chia mọi nhiệm vụ thành nhiều agent?

A. Vì SDK không cho phép nhiều agent  
B. Vì tăng phức tạp, độ trễ và chi phí khi không cần thiết  
C. Vì một agent không thể dùng tools  
D. Vì output_type không hỗ trợ  

**Đáp án:** B. **Giải thích:** Phân vai chỉ có ích khi vai trò riêng tạo giá trị.

### Câu 5

Đối với một công cụ thay đổi trạng thái như gửi nhắc nhở, điều gì quan trọng?

A. Cho phép model tự động gửi mọi lúc  
B. Đưa API key vào prompt  
C. Kiểm soát quyền và xác nhận thao tác  
D. Ẩn tool khỏi logs  

**Đáp án:** C. **Giải thích:** Hành động có tác dụng thực cần rào chắn ở tầng ứng dụng.


**Tài liệu tra cứu:** [OpenAI Agents SDK](https://openai.github.io/openai-agents-python/) · [1](https://openai.github.io/openai-agents-python/) · [2](https://openai.github.io/openai-agents-python/running_agents/)
