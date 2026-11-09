# Filtering with one Condition

**Khóa học:** Python Data Science with Pandas: Master 12 Advanced Projects  
**Module 16:** Appendix: Pandas Crash Course  
**Thứ tự:** Bài 035 · **Loại mục Udemy:** QUIZ · **Thời lượng metadata:** Không có thời lượng công bố  
**Trang khóa học:** https://www.udemy.com/course/python-data-science-with-pandas-master-advanced-projects  

> **Phạm vi:** Đây là tài liệu học bổ trợ bằng tiếng Việt, tự biên soạn theo tên mục trong đề cương Udemy và kiến thức chung. Không phải bản chép lời hoặc bản trích xuất nội dung video.

## 1. Mục tiêu

Ôn tập và vận dụng chủ đề **Filtering with one Condition** trong phạm vi module. Đây là bài luyện tập bổ trợ tự biên soạn; câu hỏi nguyên bản của Udemy không được công khai trong metadata.

## 2. Kiến thức sử dụng

Bài luyện củng cố lọc DataFrame bằng một điều kiện và đọc kết quả dưới dạng tập con các hàng phù hợp.

## 3. Bài thực hành

**Nhiệm vụ:** Từ bảng nhiệt độ theo ngày, lấy các hàng có nhiệt độ trên 30 và kiểm tra chỉ số hàng được giữ lại.

- Viết rõ dữ liệu đầu vào và giả định.
- Đưa ra quy tắc kiểm chứng kết quả.
- Ghi những sai số, trường hợp biên và hạn chế.

## 4. Câu hỏi tự kiểm tra

### Câu 1

Khi học “Filtering with one Condition”, thực hành nào giúp tránh kết luận sai nhất?

A. Chỉ chạy một lần trên máy của mình và coi đó là bằng chứng  
B. Viết ví dụ tối thiểu, nêu rõ môi trường và kiểm tra lại với đầu vào biên  
C. Bỏ qua cảnh báo của trình biên dịch hoặc công cụ  
D. Sao chép mã mẫu mà không đọc tài liệu chính thức  

**Đáp án:** B. **Giải thích:** Ví dụ tối thiểu kèm môi trường rõ ràng và kiểm thử biên giúp tái lập kết quả và phát hiện lỗi sớm.

### Câu 2

Kết quả triển khai “Filtering with one Condition” nên được kiểm tra như thế nào?

A. Chỉ cần mã biên dịch được  
B. Không cần kiểm thử vì mã chạy được  
C. So sánh với kết quả mong đợi tính tay, test tự động và các trường hợp biên  
D. Chỉ chạy trên dữ liệu nhỏ thuận lợi  

**Đáp án:** C. **Giải thích:** Test tự động và trường hợp biên phát hiện lỗi mà một lần chạy thuận lợi không thấy.

### Câu 3

Khi tối ưu liên quan đến “Filtering with one Condition”, nguyên tắc nào đúng?

A. Đo (profile/benchmark) trước, rồi mới tối ưu điểm nghẽn thật sự  
B. Tối ưu mọi dòng mã ngay từ đầu  
C. Chỉ tin vào cảm giác về tốc độ  
D. Bỏ qua tính đúng đắn để đổi lấy tốc độ  

**Đáp án:** A. **Giải thích:** Số liệu đo cho biết đâu là điểm nghẽn; tối ưu không đo dễ tốn công mà không có hiệu quả.

### Câu 4

Nếu “Filtering with one Condition” liên quan đến nhiều luồng, nhiều tiến trình hoặc truy cập đồng thời, điều nào phù hợp?

A. Giả định thứ tự thực thi luôn cố định  
B. Chia sẻ dữ liệu có thể sửa đổi mà không đồng bộ  
C. Dùng một lần chạy thành công để kết luận không có lỗi đồng thời  
D. Xác định rõ dữ liệu chia sẻ, dùng cơ chế đồng bộ phù hợp và kiểm thử lặp lại nhiều lần  

**Đáp án:** D. **Giải thích:** Lỗi đồng thời thường phụ thuộc thời điểm nên cần thiết kế đồng bộ rõ ràng và kiểm thử lặp lại.

### Câu 5

Điều nào phù hợp khi đưa “Filtering with one Condition” vào mã nguồn có thể bảo trì?

A. Gộp mọi thứ vào một hàm lớn không có kiểm thử  
B. Tách thành đơn vị nhỏ, có kiểm thử, ghi chú giả định và quản lý phiên bản  
C. Bỏ qua tài liệu và cấu hình  
D. Không ghi lại phiên bản công cụ  

**Đáp án:** B. **Giải thích:** Mã chia nhỏ, có kiểm thử và ghi chú giả định dễ đọc, dễ sửa và dễ xác minh.

## 5. Tiêu chí hoàn thành

Có kết quả chạy hoặc lời giải có thể kiểm tra độc lập, mô tả giả định và các bước tái lập.
