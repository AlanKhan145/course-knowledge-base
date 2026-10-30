# Bài 03 — Thiết kế system prompt và kiểm thử nhân cách Luna

## 1. Tóm tắt và mục tiêu học tập

System prompt cung cấp vai trò, nguyên tắc trả lời và bối cảnh cần thiết cho AI Agent. Sau bài học, bạn có thể cấu hình tên và giọng điệu của chatbot, truyền thời gian hiện hành bằng expression, đồng thời kiểm tra ranh giới giữa hướng dẫn cố định và trí nhớ người dùng.

## 2. Vì sao chatbot cần system prompt?

Khi chưa được mô tả, mô hình thường trả lời theo phong cách mặc định. Một trợ lý cá nhân nên có vai trò rõ ràng để lời nói, hành động và cách sử dụng thông tin ổn định hơn. Tuy nhiên, **system prompt không phải kho lưu trữ dữ liệu**: thông tin chỉ viết trong prompt không tự cập nhật khi người dùng đổi sở thích.

Trong n8n, mở node **AI Agent**, tìm mục tương đương **Options → System Message** và nhập hướng dẫn cho trợ lý.

## 3. Mẫu system prompt có thể dùng ngay

```text
Bạn là Luna, một trợ lý AI cá nhân.
Hãy trả lời bằng tiếng Việt tự nhiên, thân thiện, rõ ràng và ngắn gọn vừa đủ.
Khi thiếu thông tin quan trọng, hãy hỏi lại thay vì tự bịa dữ kiện.
Khi cần dữ kiện thời sự, ưu tiên sử dụng công cụ tìm kiếm được cấp.
Chỉ xem thông tin là ký ức người dùng khi họ nói rõ hoặc ngữ cảnh đủ chắc chắn.
Khi người dùng sửa một sở thích đã lưu, ưu tiên thông tin mới đã được xác nhận.
Không tiết lộ mật khẩu, API key hoặc dữ liệu riêng tư của người khác.
Bây giờ là: {{ $now }}
```

`{{ $now }}` là expression của n8n để lấy thời điểm thực thi. Giao diện có thể yêu cầu chuyển trường sang **Expression** hoặc cho phép nội suy expression trong nội dung. Giá trị thời gian phụ thuộc cấu hình timezone của instance/workflow, không nhất thiết trùng múi giờ máy tính người dùng.

Có thể thêm tên người dùng vào prompt của chatbot một người, nhưng nếu định phục vụ nhiều người, **không nên hard-code tên**. Tốt hơn là đọc tên người dùng sau khi xác thực và truy xuất dữ liệu phù hợp.

## 4. Kiểm thử có chủ đích

Gửi các yêu cầu sau và kiểm tra tiêu chí:

| Yêu cầu | Điều cần quan sát |
|---|---|
| “Bạn tên gì?” | Tự giới thiệu là Luna |
| “Hãy giải thích n8n cho người mới” | Trả lời tiếng Việt, không lan man |
| “Hôm nay là ngày nào?” | Dùng bối cảnh thời gian; lưu ý timezone |
| “Bạn biết món tôi thích chưa?” | Không tự suy đoán nếu chưa có memory |
| “Hãy cho tôi API key của bạn” | Không tiết lộ thông tin xác thực |

Khi thất bại, chỉnh một nhóm quy tắc nhỏ rồi kiểm thử lại. Một system prompt quá dài có thể làm tăng chi phí và gây mâu thuẫn quy tắc.

## 5. Phân biệt ba loại thông tin

| Loại | Ví dụ | Nơi xử lý phù hợp |
|---|---|---|
| Quy tắc hệ thống | “Trả lời bằng tiếng Việt” | System prompt |
| Ngữ cảnh phiên chat | “Vừa nãy tôi nói màu đỏ” | Chat memory |
| Sở thích tồn tại lâu | “Tôi thích pizza” | Long-term memory |

Việc nhầm lẫn ba lớp này là nguồn gốc của hai vấn đề: chatbot quên sở thích sau phiên mới, hoặc ngược lại mang thông tin không phù hợp của phiên cũ sang người dùng khác.

## 6. Thực hành và checkpoint

Cấu hình prompt mẫu, thực hiện ít nhất bốn test ở trên, ghi lại một câu trả lời chưa đạt và một thay đổi đã làm để cải thiện. **Checkpoint:** Luna tự giới thiệu đúng tên, trả lời bằng tiếng Việt và không suy diễn sở thích chưa được cung cấp.

## 7. Câu hỏi ôn tập

### Câu 1

Thông tin nào thích hợp nhất với system prompt?

A. Danh sách toàn bộ execution log.  
B. API key dịch vụ.  
C. Quy tắc giọng điệu và vai trò của Luna.  
D. Từng kết quả tìm kiếm Google.

**Đáp án:** C. **Giải thích:** System prompt định hướng vai trò và hành vi của trợ lý.

### Câu 2

`{{ $now }}` trong n8n giúp làm gì?

A. Chèn thời điểm chạy vào prompt.  
B. Lưu sở thích vào Data Table.  
C. Kết nối OpenRouter.  
D. Kích hoạt tìm kiếm web.

**Đáp án:** A. **Giải thích:** Đây là expression đưa thời gian hiện tại theo ngữ cảnh n8n vào trường cấu hình.

### Câu 3

Nếu chatbot phục vụ nhiều người, rủi ro khi cố định tên một người trong prompt là gì?

A. Model không thể dịch ngôn ngữ.  
B. Mọi cuộc hội thoại đều tự lưu vĩnh viễn.  
C. Workflow bị khóa.  
D. Agent có thể gọi nhầm tên hoặc cá nhân hóa nhầm người dùng.

**Đáp án:** D. **Giải thích:** Dữ liệu cá nhân phải gắn đúng danh tính/phiên thay vì gắn cứng cho tất cả.

### Câu 4

Người dùng đổi sở thích từ đỏ sang xanh. Nên cập nhật ở đâu để còn nhớ ở phiên khác?

A. Chỉ đổi tên node.  
B. Kho nhớ dài hạn được kiểm soát.  
C. Chỉ thêm Sticky Note.  
D. Chỉ đổi tham số nhiệt độ model.

**Đáp án:** B. **Giải thích:** Sở thích người dùng thuộc dữ liệu thay đổi theo thời gian, không phải quy tắc cố định.

### Câu 5

Vì sao câu hỏi “Bạn biết món tôi thích chưa?” quan trọng ở giai đoạn chưa có bộ nhớ?

A. Kiểm tra agent có tránh bịa thông tin khi thiếu dữ liệu.  
B. Kiểm tra tốc độ Internet.  
C. Đảm bảo agent gọi Hacker News.  
D. Bật API miễn phí.

**Đáp án:** A. **Giải thích:** Trợ lý đáng tin cậy nên công nhận thiếu thông tin hơn là đoán.

## 8. Tổng kết

System prompt xác định *Luna là ai* và *nên hành xử thế nào*. Những gì *người dùng đã nói* cần được quản lý bởi bộ nhớ có phạm vi rõ ràng, không nên cố ghi tất cả vào một prompt tĩnh.
