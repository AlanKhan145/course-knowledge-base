# Streaming từng token và biểu diễn vòng đời tool call

> **Loại:** Lesson · **Trọng tâm:** Sự kiện stream, tiến độ và trải nghiệm phản hồi.

## 1. Tóm tắt

Streaming cho phép frontend vẽ câu trả lời khi backend còn đang sinh. Người dùng cảm nhận ứng dụng phản hồi sớm, có thể thấy agent đang xử lý bước nào và hủy khi không muốn tiếp tục. Nhưng stream không chỉ chứa văn bản: hệ thống agent còn phát tool-call chunks, kết quả, metadata và các sự kiện riêng.

## 2. Mục tiêu

- Mô tả chu trình tạo một message từ lúc bắt đầu tới khi hoàn tất.
- Phân biệt stream nội dung và stream trạng thái công cụ.
- Thiết kế loading/error/retry/cancel rõ ràng.
- Phân tích rủi ro duplicate, out-of-order và stale state.

## 3. Streaming gồm những loại thông tin nào?

### 3.1. Văn bản tăng dần

Model sinh ra các phần văn bản theo thời gian. Runtime có thể cộng dồn chúng và React render lại. Không nên giả định một network chunk tương đương một token; chunking và tokenization là các khái niệm khác nhau.

### 3.2. Tool-call lifecycle

Khi agent quyết định gọi tool, UI có thể hiển thị tên công cụ, input (đã loại bỏ bí mật), trạng thái đang chạy và output. Có thể cho phép mở rộng phần chi tiết. Một lần hỏi đáp có thể gọi nhiều tool theo trình tự hoặc song song; vì vậy UI cần gắn kết đúng từng tool call với kết quả của nó.

### 3.3. Event tùy biến

Generative UI từ LangGraph có thể đi theo kênh `custom` của stream. Nếu tự tích hợp SDK, phải chọn stream modes phù hợp. Ở luồng do `unstable_createLangGraphStream` tạo, runtime hỗ trợ kênh `custom` theo thiết lập được mô tả trong tài liệu.

## 4. Giao diện tốt cho mỗi trạng thái

| Trạng thái | Cách hiển thị | Điều cần tránh |
| --- | --- | --- |
| Đang chờ đầu tiên | Loading indicator ngắn | Giả như đã trả lời |
| Đang streaming | Render text theo tiến độ | Nối chunk thành nội dung trùng |
| Đang gọi tool | Tên tool + loading | Hiện input chứa secret |
| Tool lỗi | Error card có retry hợp lý | Giấu lỗi sau câu trả lời chắc chắn |
| Run hoàn tất | Bỏ loading, mở tương tác phù hợp | Giữ spinner vô hạn |
| Run bị hủy | Thông báo đã dừng | Diễn giải như thành công |

## 5. Thiết kế kiểm thử theo tình huống

Bắt đầu với câu hỏi “Viết một bài thơ dài”, sau đó chụp thời điểm token đầu xuất hiện, quan sát tốc độ dòng chữ, thử hủy khi chưa hoàn tất. Tiếp theo hỏi mã cổ phiếu để có tool call, mở và kiểm tra tên tool, arguments và kết quả. Cuối cùng kiểm tra trường hợp server trả lỗi giữa stream.

Trong Network tab, quan sát request streaming còn mở, các event có thể đến sau khi text đã xuất hiện. Ở React DevTools, tránh tạo lại client/stream function mỗi lần re-render không cần thiết; `useMemo` trong quickstart giúp ổn định các tham chiếu.

## 6. Những lỗi cần tránh

1. **Double append:** UI tự cộng chuỗi trong khi runtime đã cộng dồn; kết quả text xuất hiện lặp.
2. **Stale result:** phản hồi từ thread A đến sau khi UI chuyển sang thread B, rồi bị render sai vị trí.
3. **Không xử lý cancel:** frontend ẩn spinner nhưng server vẫn thực thi và gây tác động ngoài ý muốn.
4. **Tool output chưa sẵn sàng:** hiển thị dữ liệu trung gian như kết quả cuối.
5. **Mất quyền quan sát:** giấu mọi tool call làm người dùng không kiểm chứng quá trình.

Đối với hành động có hiệu ứng ghi, chỉ **hủy hiển thị** không đồng nghĩa đã hủy giao dịch; cần cơ chế xác nhận từ backend.

## 7. Tổng kết

Streaming là khả năng kỹ thuật đồng thời là hợp đồng UX: người dùng phải biết câu trả lời đang tiến triển, trạng thái công cụ và khi nào tác vụ thật sự hoàn tất. Không dùng text stream để thay thế trạng thái backend.

## 8. Câu hỏi ôn tập

### Câu 1

Network chunk có nhất thiết tương ứng một token LLM không?

A. Có, luôn 1:1  
B. Không; chunk và token là hai đơn vị khác nhau  
C. Chỉ đúng với JSON  
D. Chỉ đúng với tool error

**Đáp án:** B

**Giải thích:** Backend/transport có thể gom hoặc chia sự kiện khác token.

### Câu 2

Kênh stream nào dùng cho LangGraph Generative UI event?

A. errors  
B. http  
C. custom  
D. static

**Đáp án:** C

**Giải thích:** UI message có thể được emit qua custom stream.

### Câu 3

UI nên làm gì khi tool chưa trả kết quả?

A. Thể hiện trạng thái đang chạy  
B. Tạo kết quả cuối  
C. Đánh dấu giao dịch thành công  
D. Ẩn mọi dấu hiệu

**Đáp án:** A

**Giải thích:** Chưa có tool result thì không được kết luận thành công.

### Câu 4

Hủy giao diện có đủ để hủy giao dịch thật không?

A. Luôn đủ  
B. Không cần server  
C. Phụ thuộc màu nút  
D. Không, phải có xác nhận/cơ chế phía backend

**Đáp án:** D

**Giải thích:** Hủy render không chứng minh hành động bên ngoài đã được hủy.

### Câu 5

Double append gây vấn đề gì?

A. Mất CSS  
B. Nội dung stream bị lặp  
C. Mất thread id  
D. Tool tự chạy lại

**Đáp án:** B

**Giải thích:** Runtime có thể đã tích lũy text nên append lần nữa là sai.
