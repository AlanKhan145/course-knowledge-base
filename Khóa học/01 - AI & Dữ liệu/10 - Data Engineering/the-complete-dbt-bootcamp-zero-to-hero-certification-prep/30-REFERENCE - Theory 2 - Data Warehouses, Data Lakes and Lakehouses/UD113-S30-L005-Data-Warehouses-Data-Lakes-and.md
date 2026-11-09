# Data Warehouses, Data Lakes and Lakehouses

**Khóa học:** The Complete dbt Bootcamp: Zero to Hero + Certification Prep  
**Module 30:** REFERENCE - Theory 2 - Data Warehouses, Data Lakes and Lakehouses  
**Thứ tự:** Bài 005 · **Loại mục Udemy:** QUIZ · **Thời lượng metadata:** Không có thời lượng công bố  
**Trang khóa học:** https://www.udemy.com/course/complete-dbt-data-build-tool-bootcamp-zero-to-hero-learn-dbt  

> **Phạm vi:** Đây là tài liệu học bổ trợ bằng tiếng Việt, tự biên soạn theo tên mục trong đề cương Udemy và kiến thức chung. Không phải bản chép lời hoặc bản trích xuất nội dung video.

## 1. Mục tiêu

Ôn tập và vận dụng chủ đề **Data Warehouses, Data Lakes and Lakehouses** trong phạm vi module. Đây là bài luyện tập bổ trợ tự biên soạn; câu hỏi nguyên bản của Udemy không được công khai trong metadata.

## 2. Kiến thức sử dụng

Data Warehouses, Data Lakes and Lakehouses giúp củng cố kiến thức dbt và kỹ năng xây dựng, vận hành pipeline dữ liệu đáng tin cậy; hiểu chủ đề này hỗ trợ áp dụng đúng vào dự án và chuẩn bị chứng chỉ.

## 3. Bài thực hành

**Nhiệm vụ:** Tạo một ví dụ nhỏ về data warehouses, data lakes and lakehouses, thực hành quy trình liên quan và ghi lại một điều cần kiểm tra để xác nhận kết quả.

- Viết rõ dữ liệu đầu vào và giả định.
- Đưa ra quy tắc kiểm chứng kết quả.
- Ghi những sai số, trường hợp biên và hạn chế.

## 4. Câu hỏi tự kiểm tra

### Câu 1

Vì sao pipeline cho “Data Warehouses, Data Lakes and Lakehouses” nên được thiết kế idempotent?

A. Để chạy nhanh gấp đôi  
B. Để chạy lại sau lỗi mà không tạo dữ liệu trùng hoặc sai  
C. Để không cần lưu log  
D. Để bỏ qua kiểm thử  

**Đáp án:** B. **Giải thích:** Pipeline thường phải chạy lại sau lỗi; idempotent bảo đảm chạy lại không làm hỏng kết quả.

### Câu 2

Kiểm tra chất lượng dữ liệu cho “Data Warehouses, Data Lakes and Lakehouses” nên được thực hiện khi nào?

A. Chỉ khi người dùng báo lỗi  
B. Một lần duy nhất khi dựng xong  
C. Tự động ở các bước quan trọng của mỗi lần chạy, kèm cảnh báo khi vi phạm  
D. Không cần nếu nguồn đáng tin  

**Đáp án:** C. **Giải thích:** Dữ liệu thay đổi theo thời gian, nên kiểm tra phải lặp lại ở mỗi lần chạy.

### Câu 3

Khối lượng dữ liệu thật lớn hơn nhiều so với mẫu thử của “Data Warehouses, Data Lakes and Lakehouses”. Cách làm hợp lý là gì?

A. Thử với các lát dữ liệu lớn dần, đo thời gian, bộ nhớ và chi phí trước khi triển khai  
B. Triển khai ngay vì mẫu nhỏ đã chạy  
C. Tắt giám sát để tiết kiệm  
D. Bỏ qua phân vùng dữ liệu  

**Đáp án:** A. **Giải thích:** Hiệu năng và chi phí có thể thay đổi phi tuyến khi dữ liệu tăng, nên cần đo trước.

### Câu 4

Thông tin xác thực (mật khẩu, khóa truy cập) trong dự án “Data Warehouses, Data Lakes and Lakehouses” nên được quản lý thế nào?

A. Ghi vào mã nguồn  
B. Dùng chung một tài khoản quản trị  
C. Gửi qua email cho cả nhóm  
D. Lưu trong kho bí mật hoặc biến môi trường và cấp quyền tối thiểu  

**Đáp án:** D. **Giải thích:** Quyền tối thiểu và kho bí mật giảm thiệt hại khi một thông tin bị lộ.

### Câu 5

Với mô hình đã triển khai trong “Data Warehouses, Data Lakes and Lakehouses”, vì sao cần giám sát sau khi đưa vào chạy?

A. Dữ liệu thực tế có thể trôi (drift) làm chất lượng giảm dù mã không đổi  
B. Mô hình tự cải thiện nên không cần  
C. Chỉ để tăng chi phí  
D. Giám sát thay cho việc kiểm thử  

**Đáp án:** A. **Giải thích:** Phân phối dữ liệu thật thay đổi theo thời gian nên chất lượng mô hình phải được theo dõi liên tục.

## 5. Tiêu chí hoàn thành

Có kết quả chạy hoặc lời giải có thể kiểm tra độc lập, mô tả giả định và các bước tái lập.
