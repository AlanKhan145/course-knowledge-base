# System Message on Lovable

**Khóa học:** AI Agents For All! Build No-Code AI Agents & Master AI 2027  
**Module 04:** Your First AI Workflow with Lovable  
**Thứ tự:** Bài 009 · **Loại mục Udemy:** VIDEO_LECTURE · **Thời lượng metadata:** 6.5 phút  
**Trang khóa học:** https://www.udemy.com/course/no-code-ai-agents  

> **Phạm vi:** Đây là tài liệu học bổ trợ bằng tiếng Việt, tự biên soạn theo tên mục trong đề cương Udemy và kiến thức chung. Không phải bản chép lời hoặc bản trích xuất nội dung video.

## 1. Tóm tắt

Cấu hình system message trong ứng dụng giúp duy trì hành vi nhất quán qua nhiều yêu cầu người dùng.

## 2. Mục tiêu học tập

Sau bài học, bạn có thể:

1. Giải thích mục đích và thuật ngữ chính của **System Message on Lovable**.
2. Mô tả giả định, dữ liệu đầu vào và kết quả cần quan sát.
3. Dựng một workflow nhỏ chạy được với dữ liệu mẫu và có xử lý lỗi cơ bản.
4. Nêu ít nhất hai trường hợp dẫn đến kết luận không đáng tin.

## 3. Bối cảnh và kiến thức cốt lõi

Trong tự động hóa quy trình bằng công cụ ít mã như n8n, Make hay Zapier, một workflow chỉ đáng dùng khi có điều kiện kích hoạt rõ, dữ liệu đi qua các node được kiểm soát và có cách xử lý lỗi. Với chủ đề **System Message on Lovable**, cần tách ba câu hỏi: sự kiện nào kích hoạt và dữ liệu nào đi vào; mỗi bước biến đổi dữ liệu ra sao; và chuyện gì xảy ra khi một bước thất bại hoặc dịch vụ bên ngoài trả về lỗi.

Cấu hình system message trong ứng dụng giúp duy trì hành vi nhất quán qua nhiều yêu cầu người dùng.

## 4. Cách áp dụng và ví dụ thực hành

**Bài toán:** Tích hợp chỉ dẫn hệ thống vào ứng dụng và thử một yêu cầu phù hợp cùng một yêu cầu ngoài phạm vi.

Quy trình đề xuất:

1. Xác định mục tiêu, sự kiện kích hoạt (webhook, lịch, email...) và kết quả mong đợi của workflow.
2. Dựng workflow tối thiểu với dữ liệu mẫu, kiểm tra đầu ra của từng node trước khi nối bước tiếp theo.
3. Lưu thông tin xác thực trong mục credentials của công cụ, không viết thẳng vào node hoặc chia sẻ trong bản xuất.
4. Thêm xử lý lỗi và thử lại; thử các trường hợp biên như dữ liệu thiếu trường, bản ghi trùng hoặc dịch vụ bên ngoài phản hồi chậm.
5. Ghi lại giới hạn (số lượt chạy, hạn mức API, chi phí) và cách bật tắt hoặc quay lui workflow.

## 5. Những lỗi thường gặp

- Nối cả chuỗi dài rồi mới chạy thử, nên khó biết bước nào làm sai dữ liệu.
- Để lộ khóa API hoặc token trong workflow xuất ra, hoặc trong ảnh chụp màn hình chia sẻ.
- Không xử lý lỗi và trùng lặp, khiến workflow gửi nhiều email hoặc tạo nhiều bản ghi khi chạy lại.
- Giao cho agent AI quyền thực hiện việc không thể hoàn tác mà không có bước kiểm duyệt của con người.

## 6. Câu hỏi ôn tập

### Câu 1

Cách nào giúp tìm lỗi dễ nhất khi dựng workflow cho “System Message on Lovable”?

A. Nối tất cả node rồi chạy một lần  
B. Chạy thử từng node với dữ liệu mẫu và kiểm tra đầu ra trước khi nối tiếp  
C. Bỏ qua dữ liệu mẫu  
D. Chỉ đọc tài liệu mà không chạy  

**Đáp án:** B. **Giải thích:** Kiểm tra từng bước cho phép khoanh vùng node làm sai dữ liệu.

### Câu 2

Thông tin xác thực (token, khóa API) trong workflow “System Message on Lovable” nên được đặt ở đâu?

A. Mục credentials của công cụ  
B. Trực tiếp trong ô văn bản của node  
C. Trong tên workflow  
D. Trong ghi chú chia sẻ công khai  

**Đáp án:** A. **Giải thích:** Credentials được công cụ lưu tách khỏi nội dung node, giảm nguy cơ lộ khi chia sẻ hoặc xuất workflow.

### Câu 3

Workflow “System Message on Lovable” có thể bị chạy lại do lỗi mạng. Nên thiết kế gì để tránh hậu quả?

A. Không làm gì vì lỗi mạng hiếm  
B. Tắt mọi cảnh báo  
C. Kiểm tra trùng lặp (ví dụ theo mã định danh) và xử lý lỗi, thử lại có giới hạn  
D. Chạy workflow nhiều lần cho chắc  

**Đáp án:** C. **Giải thích:** Kiểm tra trùng và thử lại có giới hạn giúp workflow chạy lại an toàn.

### Câu 4

Khi workflow “System Message on Lovable” dùng agent AI để hành động như gửi email hoặc xóa dữ liệu, nên làm gì?

A. Cho toàn quyền để tự động tối đa  
B. Giới hạn công cụ và thêm bước con người duyệt với hành động khó hoàn tác  
C. Giấu log cho gọn  
D. Dùng một tài khoản quản trị cho mọi việc  

**Đáp án:** B. **Giải thích:** Hành động khó hoàn tác cần kiểm duyệt vì agent có thể hiểu sai yêu cầu hoặc bị dẫn dắt bởi dữ liệu đầu vào.

### Câu 5

Trước khi đưa workflow “System Message on Lovable” vào dùng thật, điều nào cần xem xét?

A. Chỉ giao diện đẹp  
B. Chỉ màu sắc node  
C. Chỉ tên gọi  
D. Hạn mức API, chi phí mỗi lần chạy, quyền truy cập và cách tắt khẩn cấp  

**Đáp án:** D. **Giải thích:** Workflow chạy thật tiêu tốn hạn mức, tiền và có thể tác động đến dữ liệu thật nên cần giới hạn và cách dừng nhanh.

## 7. Tổng kết

**System Message on Lovable** chỉ trở thành kỹ năng khi bạn dựng lại được workflow từ dữ liệu mẫu, xử lý được lỗi và trùng lặp, và biết giới hạn về chi phí, quyền truy cập và bảo mật. Hãy lưu bản xuất workflow (đã gỡ thông tin nhạy cảm), dữ liệu mẫu và ghi chú giới hạn cùng với bài học.
