# ***FXCM Important Info***

**Khóa học:** Algorithmic Trading A-Z with Python, Machine Learning & AWS  
**Module 08:** API Trading with Python and Online Brokers- an Introduction  
**Thứ tự:** Bài 026 · **Loại mục Udemy:** ARTICLE_LECTURE · **Thời lượng metadata:** 0.3 phút  
**Trang khóa học:** https://www.udemy.com/course/algorithmic-trading-with-python-and-machine-learning  

> **Phạm vi:** Đây là tài liệu học bổ trợ bằng tiếng Việt, tự biên soạn theo tên mục trong đề cương Udemy và kiến thức chung. Không phải bản chép lời hoặc bản trích xuất nội dung video.

## 1. Mục tiêu

Xác định vai trò của mục *****FXCM Important Info***** trong module, chuẩn bị công cụ hoặc tài nguyên cần thiết và ghi lại tác động tới các bài thực hành.

## 2. Hướng dẫn

Mục này được đánh dấu là **ARTICLE_LECTURE** trong danh sách Udemy. Nội dung chi tiết hoặc tệp đính kèm không được cung cấp trong đề cương công khai; hãy mở trang khóa học để lấy tài nguyên từ tài khoản có quyền truy cập. Khi tải dữ liệu hay code mẫu, kiểm tra nguồn, phiên bản phụ thuộc, giấy phép và khả năng chạy độc lập.

## 3. Thực hành

1. Ghi danh sách thư viện, tệp hoặc thao tác được yêu cầu.
2. Kiểm tra phiên bản môi trường và chạy một smoke test an toàn.
3. Ghi kết quả, lỗi gặp phải và cách tái lập.

## 4. Câu hỏi ôn tập

### Câu 1

Khi nghiên cứu “Broker/Data API”, thực hành nào giúp tránh kết luận sai nhất?

A. Chỉ nhìn kết quả tốt nhất trên train  
B. Ghi rõ dữ liệu, giả định và kiểm tra ngoài mẫu khi phù hợp  
C. Bỏ qua trường hợp bất thường  
D. Thay đổi mục tiêu sau khi thấy dữ liệu  

**Đáp án:** B. **Giải thích:** Việc ghi lại giả định và sử dụng kiểm tra phù hợp giúp hạn chế data leakage và selective reporting.

### Câu 2

Kết quả tính toán cho “Broker/Data API” nên được kiểm tra như thế nào?

A. Chỉ cần có một biểu đồ đẹp  
B. Không cần unit tests  
C. So sánh với một ví dụ nhỏ tính tay và các edge cases  
D. Chỉ chạy trên dữ liệu thuận lợi  

**Đáp án:** C. **Giải thích:** Các ví dụ có thể kiểm tra thủ công và edge cases giúp phát hiện lỗi triển khai.

### Câu 3

Khi ứng dụng “Broker/Data API” cho tài chính, điều nào cần được công bố?

A. Giả định và giới hạn mô hình  
B. Chỉ kết quả lợi nhuận cao nhất  
C. Không cần biết dữ liệu đến từ đâu  
D. Chỉ tên thư viện  

**Đáp án:** A. **Giải thích:** Giả định và giới hạn quyết định phạm vi diễn giải kết quả.

### Câu 4

Nếu dữ liệu dùng trong “Broker/Data API” có thứ tự thời gian, bước nào phù hợp?

A. Trộn ngẫu nhiên mọi mốc trước khi đánh giá mà không kiểm tra leak  
B. Dùng luôn dữ liệu cuối kỳ cho tín hiệu đầu kỳ  
C. Fit scaler trên toàn bộ dữ liệu rồi chia train/test  
D. Bảo toàn thứ tự thông tin và chia train/test theo thời gian khi dự báo  

**Đáp án:** D. **Giải thích:** Forecasting cần giữ đúng thứ tự thông tin khả dụng tại thời điểm dự báo.

### Câu 5

Điều nào phù hợp khi chuyển “Broker/Data API” thành hệ thống có thể bảo trì?

A. Sao chép code và bỏ kiểm thử  
B. Tách dữ liệu, logic xử lý, kiểm thử và ghi lại phiên bản  
C. Giấu tham số sử dụng  
D. Chỉ chạy một lần mà không lưu kết quả  

**Đáp án:** B. **Giải thích:** Thiết kế có cấu trúc và reproducibility giúp kết quả có thể xác minh độc lập.

## 5. Tổng kết

Chỉ sử dụng các tài nguyên đã thực sự xác minh; không suy đoán nội dung tệp tải về từ tiêu đề.
