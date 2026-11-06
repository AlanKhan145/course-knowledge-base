# Từ tool result sang price card và giao diện dữ liệu

> **Loại:** Lesson · **Trọng tâm:** Chọn đúng loại UI và biểu diễn dữ liệu có cấu trúc.

## 1. Tóm tắt

Generative UI là cách để agent cung cấp thông tin có cấu trúc và frontend biểu diễn thành thành phần thích hợp. Thay vì luôn in JSON hoặc một câu văn dài, ứng dụng có thể hiển thị card giá, bảng so sánh, biểu đồ hoặc trạng thái hành động. Điều quan trọng không nằm ở “tạo HTML tùy ý”, mà ở hợp đồng giữa backend và bộ component được phép render.

## 2. Mục tiêu

- Giải thích lợi ích của card so với JSON thuần.
- Định nghĩa trạng thái cho một price card an toàn.
- Phân biệt tool-call UI và UI message do LangGraph emit.
- Thiết kế component không làm thay đổi tính đúng đắn của dữ liệu.

## 3. Price snapshot như một ví dụ

Với yêu cầu “Giá cổ phiếu Meta hiện tại?”, tool có thể trả mã, giá, thay đổi trong ngày, đơn vị tiền và thời điểm cập nhật. Một price card đặt các thuộc tính này theo thứ bậc trực quan:

| Thành phần | Nội dung | Kiểm tra |
| --- | --- | --- |
| Header | Mã + tên tài sản | Không suy diễn mã khi input sai |
| Giá chính | Giá + currency | Dữ liệu hợp lệ, format đúng locale |
| Biến động | Giá trị thay đổi | Dấu +/- đúng theo dữ liệu |
| Footer | Thời điểm cập nhật | Nêu rõ thời gian, timezone |
| Trạng thái | Loading/error/stale | Không giả vờ báo giá trực tiếp |

Card thể hiện **kết quả đọc**. Nếu người dùng hỏi mua, cần màn hình hành động riêng, không lấy giá tham khảo làm giá đặt lệnh chắc chắn.

## 4. Hai kiểu tích hợp UI

### 4.1. Tool-call renderer

Một tool có thể hiển thị ngay tại chỗ gọi. Runtime nhận tool name, args, status và result. Frontend ánh xạ một tên tool backend sang component hiển thị. Kiểu này hợp với giá cổ phiếu, tra cứu sản phẩm hoặc kiểm tra dữ liệu.

### 4.2. LangGraph UI message

Graph có thể phát một UI event theo kênh `custom`; payload đặt tên component, dữ liệu props và message tương ứng. Frontend đăng ký renderer theo name. Cách này hữu ích nếu backend muốn điều khiển nội dung trực quan độc lập với một tool result cụ thể.

Không phải hai cơ chế này là một: tool-call UI dựa trên tool part, còn LangGraph UI message dựa trên sự kiện UI có cấu trúc.

## 5. Nguyên tắc giao diện đáng tin cậy

1. Không dùng data do model tự đoán như một báo giá kiểm chứng.
2. Không render HTML/JavaScript tùy ý không được tin cậy từ model.
3. Giới hạn tập component và schema mà backend được gửi.
4. Hiển thị rõ trạng thái chờ, lỗi và thời điểm dữ liệu.
5. Khi card có nút tương tác, gắn nút với hành động được cấp quyền và xác nhận kết quả từ server.

## 6. Lab thiết kế

Thiết kế card từ đối tượng minh họa `{ symbol, price, change, updated_at }`. Xây dựng đủ bốn trạng thái: `pending`, `resolved`, `failed`, `stale`. Viết unit test cho `price=null`, `change=0` và timezone khác.

**Checkpoint:** card hiển thị đúng tất cả dữ liệu đầu vào, nhưng không gửi giao dịch hoặc thay đổi dữ liệu chỉ vì được render.

## 7. Tổng kết

Generative UI giúp biến kết quả agent thành thông tin dễ thao tác. Giá trị của nó đến từ dữ liệu chính xác, schema rõ ràng và trải nghiệm được kiểm soát — không phải từ việc tùy ý tạo ra thành phần khó bảo trì.

## 8. Câu hỏi ôn tập

### Câu 1

Khi nào price card phù hợp hơn văn bản dài?

A. Khi tool trả nhiều trường có cấu trúc  
B. Khi chỉ hỏi chào buổi sáng  
C. Khi không có dữ liệu  
D. Khi backend đã lỗi

**Đáp án:** A

**Giải thích:** Card gom dữ liệu có nhãn để dễ đọc và kiểm tra.

### Câu 2

Tool-call renderer nhận thông tin nào?

A. Chỉ CSS  
B. Chỉ tên người dùng  
C. Tên tool, args, status, result  
D. Không nhận gì

**Đáp án:** C

**Giải thích:** Các trường này phản ánh vòng đời của một lần gọi công cụ.

### Câu 3

LangGraph UI messages thường xuất hiện qua kênh nào?

A. html  
B. custom  
C. font  
D. cookie

**Đáp án:** B

**Giải thích:** Custom stream có thể vận chuyển payload UI có cấu trúc.

### Câu 4

Một price card có nút mua được phép làm gì?

A. Tự khẳng định đã mua  
B. Bỏ qua xác thực  
C. Tự lấy tiền  
D. Gửi yêu cầu qua cơ chế được kiểm soát và xác nhận

**Đáp án:** D

**Giải thích:** UI chỉ khởi phát quy trình; backend kiểm tra và xác nhận hành động.

### Câu 5

Lý do nên giới hạn tên và schema component?

A. Để tránh UI tùy ý không an toàn và khó kiểm thử  
B. Để tăng độ trễ  
C. Để bỏ validate  
D. Để model có quyền thực thi script bất kỳ

**Đáp án:** A

**Giải thích:** Allowlist component và schema giúp giới hạn bề mặt tấn công.
