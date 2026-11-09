# Draft a Token Security Policy for Client Telegram Bots

**Khóa học:** Complete AI Automation And Agentic AI Bootcamp With n8n  
**Module 26:** Personal Assistant (Swarm) - Master Workflow & UI  
**Thứ tự:** Bài 009 · **Loại mục Udemy:** PRACTICE · **Thời lượng metadata:** Không có thời lượng công bố  
**Trang khóa học:** https://www.udemy.com/course/complete-ai-automation-and-agentic-ai-bootcamp-with-n8n  

> **Phạm vi:** Đây là tài liệu học bổ trợ bằng tiếng Việt, tự biên soạn theo tên mục trong đề cương Udemy và kiến thức chung. Không phải bản chép lời hoặc bản trích xuất nội dung video.

## 1. Mục tiêu

Ôn tập và vận dụng chủ đề **Draft a Token Security Policy for Client Telegram Bots** trong phạm vi module. Đây là bài luyện tập bổ trợ tự biên soạn; câu hỏi nguyên bản của Udemy không được công khai trong metadata.

## 2. Kiến thức sử dụng

Chính sách token cho Telegram bot cần hạn chế quyền, bảo vệ bí mật và có phương án luân chuyển.

## 3. Bài thực hành

**Nhiệm vụ:** Soạn chính sách lưu token bằng credential store, giới hạn quyền, luân chuyển định kỳ và xử lý lộ khóa.

- Viết rõ dữ liệu đầu vào và giả định.
- Đưa ra quy tắc kiểm chứng kết quả.
- Ghi những sai số, trường hợp biên và hạn chế.

## 4. Câu hỏi tự kiểm tra

### Câu 1

Cách nào giúp tìm lỗi dễ nhất khi dựng workflow cho “Draft a Token Security Policy for Client Telegram Bots”?

A. Nối tất cả node rồi chạy một lần  
B. Chạy thử từng node với dữ liệu mẫu và kiểm tra đầu ra trước khi nối tiếp  
C. Bỏ qua dữ liệu mẫu  
D. Chỉ đọc tài liệu mà không chạy  

**Đáp án:** B. **Giải thích:** Kiểm tra từng bước cho phép khoanh vùng node làm sai dữ liệu.

### Câu 2

Thông tin xác thực (token, khóa API) trong workflow “Draft a Token Security Policy for Client Telegram Bots” nên được đặt ở đâu?

A. Mục credentials của công cụ  
B. Trực tiếp trong ô văn bản của node  
C. Trong tên workflow  
D. Trong ghi chú chia sẻ công khai  

**Đáp án:** A. **Giải thích:** Credentials được công cụ lưu tách khỏi nội dung node, giảm nguy cơ lộ khi chia sẻ hoặc xuất workflow.

### Câu 3

Workflow “Draft a Token Security Policy for Client Telegram Bots” có thể bị chạy lại do lỗi mạng. Nên thiết kế gì để tránh hậu quả?

A. Không làm gì vì lỗi mạng hiếm  
B. Tắt mọi cảnh báo  
C. Kiểm tra trùng lặp (ví dụ theo mã định danh) và xử lý lỗi, thử lại có giới hạn  
D. Chạy workflow nhiều lần cho chắc  

**Đáp án:** C. **Giải thích:** Kiểm tra trùng và thử lại có giới hạn giúp workflow chạy lại an toàn.

### Câu 4

Khi workflow “Draft a Token Security Policy for Client Telegram Bots” dùng agent AI để hành động như gửi email hoặc xóa dữ liệu, nên làm gì?

A. Cho toàn quyền để tự động tối đa  
B. Giới hạn công cụ và thêm bước con người duyệt với hành động khó hoàn tác  
C. Giấu log cho gọn  
D. Dùng một tài khoản quản trị cho mọi việc  

**Đáp án:** B. **Giải thích:** Hành động khó hoàn tác cần kiểm duyệt vì agent có thể hiểu sai yêu cầu hoặc bị dẫn dắt bởi dữ liệu đầu vào.

### Câu 5

Trước khi đưa workflow “Draft a Token Security Policy for Client Telegram Bots” vào dùng thật, điều nào cần xem xét?

A. Chỉ giao diện đẹp  
B. Chỉ màu sắc node  
C. Chỉ tên gọi  
D. Hạn mức API, chi phí mỗi lần chạy, quyền truy cập và cách tắt khẩn cấp  

**Đáp án:** D. **Giải thích:** Workflow chạy thật tiêu tốn hạn mức, tiền và có thể tác động đến dữ liệu thật nên cần giới hạn và cách dừng nhanh.

## 5. Tiêu chí hoàn thành

Có kết quả chạy hoặc lời giải có thể kiểm tra độc lập, mô tả giả định và các bước tái lập.
