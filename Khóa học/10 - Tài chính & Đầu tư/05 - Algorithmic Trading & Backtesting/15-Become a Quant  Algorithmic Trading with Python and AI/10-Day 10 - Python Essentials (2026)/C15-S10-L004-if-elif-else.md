# if...elif...else

**Khóa học:** Become a Quant: Algorithmic Trading with Python and AI  
**Module 10:** Day 10 - Python Essentials (2026)  
**Thứ tự:** Bài 004 · **Loại mục Udemy:** QUIZ · **Thời lượng metadata:** Không có thời lượng công bố  
**Trang khóa học:** https://www.udemy.com/course/the-complete-course-on-coding-trading-bots-using-python  

> **Phạm vi:** Đây là tài liệu học bổ trợ bằng tiếng Việt, tự biên soạn theo tên mục trong đề cương Udemy và kiến thức chung. Không phải bản chép lời hoặc bản trích xuất nội dung video.

## 1. Mục tiêu

Ôn tập và vận dụng chủ đề **if...elif...else** trong phạm vi module. Đây là bài luyện tập bổ trợ tự biên soạn; câu hỏi nguyên bản của Udemy không được công khai trong metadata.

## 2. Kiến thức sử dụng

Chuỗi if...elif...else có nhánh mặc định bắt mọi trường hợp còn lại.

## 3. Bài thực hành

**Nhiệm vụ:** Phân loại biến động giá trong ngày thành "thấp", "vừa", "cao" bằng if/elif/else, thử 5 giá trị.

- Viết rõ dữ liệu đầu vào và giả định.
- Đưa ra quy tắc kiểm chứng kết quả.
- Ghi những sai số, trường hợp biên và hạn chế.

## 4. Câu hỏi tự kiểm tra

### Câu 1

Khi nghiên cứu “if...elif...else”, thực hành nào giúp tránh kết luận sai nhất?

A. Chỉ nhìn kết quả tốt nhất trên train  
B. Ghi rõ dữ liệu, giả định và kiểm tra ngoài mẫu khi phù hợp  
C. Bỏ qua trường hợp bất thường  
D. Thay đổi mục tiêu sau khi thấy dữ liệu  

**Đáp án:** B. **Giải thích:** Việc ghi lại giả định và sử dụng kiểm tra phù hợp giúp hạn chế data leakage và selective reporting.

### Câu 2

Kết quả tính toán cho “if...elif...else” nên được kiểm tra như thế nào?

A. Chỉ cần có một biểu đồ đẹp  
B. Không cần unit tests  
C. So sánh với một ví dụ nhỏ tính tay và các edge cases  
D. Chỉ chạy trên dữ liệu thuận lợi  

**Đáp án:** C. **Giải thích:** Các ví dụ có thể kiểm tra thủ công và edge cases giúp phát hiện lỗi triển khai.

### Câu 3

Khi ứng dụng “if...elif...else” cho tài chính, điều nào cần được công bố?

A. Giả định và giới hạn mô hình  
B. Chỉ kết quả lợi nhuận cao nhất  
C. Không cần biết dữ liệu đến từ đâu  
D. Chỉ tên thư viện  

**Đáp án:** A. **Giải thích:** Giả định và giới hạn quyết định phạm vi diễn giải kết quả.

### Câu 4

Nếu dữ liệu dùng trong “if...elif...else” có thứ tự thời gian, bước nào phù hợp?

A. Trộn ngẫu nhiên mọi mốc trước khi đánh giá mà không kiểm tra leak  
B. Dùng luôn dữ liệu cuối kỳ cho tín hiệu đầu kỳ  
C. Fit scaler trên toàn bộ dữ liệu rồi chia train/test  
D. Bảo toàn thứ tự thông tin và chia train/test theo thời gian khi dự báo  

**Đáp án:** D. **Giải thích:** Forecasting cần giữ đúng thứ tự thông tin khả dụng tại thời điểm dự báo.

### Câu 5

Điều nào phù hợp khi chuyển “if...elif...else” thành hệ thống có thể bảo trì?

A. Sao chép code và bỏ kiểm thử  
B. Tách dữ liệu, logic xử lý, kiểm thử và ghi lại phiên bản  
C. Giấu tham số sử dụng  
D. Chỉ chạy một lần mà không lưu kết quả  

**Đáp án:** B. **Giải thích:** Thiết kế có cấu trúc và reproducibility giúp kết quả có thể xác minh độc lập.

## 5. Tiêu chí hoàn thành

Có kết quả chạy hoặc lời giải có thể kiểm tra độc lập, mô tả giả định và các bước tái lập.
