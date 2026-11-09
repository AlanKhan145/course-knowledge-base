# Incremental Aggregates and Update Mode

**Khóa học:** Spark Streaming - Stream Processing in Lakehouse - PySpark  
**Module 05:** Streaming Aggregates and State Management  
**Thứ tự:** Bài 002 · **Loại mục Udemy:** VIDEO_LECTURE · **Thời lượng metadata:** 15.5 phút  
**Trang khóa học:** https://www.udemy.com/course/spark-streaming-using-python  

> **Phạm vi:** Đây là tài liệu học bổ trợ bằng tiếng Việt, tự biên soạn theo tên mục trong đề cương Udemy và kiến thức chung. Không phải bản chép lời hoặc bản trích xuất nội dung video.

## 1. Tóm tắt

Update mode phát ra các hàng tổng hợp đã thay đổi, phù hợp khi giá trị nhóm được cập nhật dần theo dữ liệu đến.

## 2. Mục tiêu học tập

Sau bài học, bạn có thể:

1. Giải thích mục đích và thuật ngữ chính của **Incremental Aggregates and Update Mode**.
2. Mô tả giả định, dữ liệu đầu vào và kết quả cần quan sát.
3. Dựng hoặc mô tả một pipeline nhỏ có thể chạy lại và có bước kiểm tra chất lượng dữ liệu.
4. Nêu ít nhất hai trường hợp dẫn đến kết luận không đáng tin.

## 3. Bối cảnh và kiến thức cốt lõi

Trong kỹ thuật dữ liệu và MLOps, một pipeline chỉ hữu ích khi nó chạy lặp lại được, cho cùng kết quả khi chạy lại và báo ngay khi dữ liệu hoặc mô hình có vấn đề. Với chủ đề **Incremental Aggregates and Update Mode**, cần tách ba câu hỏi: dữ liệu đi từ đâu tới đâu và theo lược đồ nào; điều gì xảy ra khi một bước lỗi hoặc được chạy lại; và dùng kiểm tra chất lượng, giám sát nào để phát hiện sai lệch.

Update mode phát ra các hàng tổng hợp đã thay đổi, phù hợp khi giá trị nhóm được cập nhật dần theo dữ liệu đến.

## 4. Cách áp dụng và ví dụ thực hành

**Bài toán:** So sánh output của aggregation ở update mode với append mode trên một nguồn sự kiện nhỏ.

Quy trình đề xuất:

1. Xác định nguồn, đích, lược đồ, khối lượng dữ liệu và tần suất cập nhật; ghi rõ phiên bản công cụ và môi trường chạy.
2. Dựng pipeline tối thiểu từ nguồn đến đích với dữ liệu mẫu nhỏ trước khi mở rộng.
3. Thiết kế để chạy lại an toàn (idempotent): chạy hai lần không tạo bản ghi trùng hoặc làm sai kết quả.
4. Thêm kiểm tra chất lượng (số bản ghi, giá trị rỗng, khóa trùng, phạm vi giá trị) và cảnh báo khi vi phạm.
5. Ghi lại chi phí, thời gian chạy, cách quay lui và những giả định về dữ liệu chưa được kiểm chứng.

## 5. Những lỗi thường gặp

- Chạy thử trên dữ liệu rất nhỏ rồi kết luận pipeline sẽ ổn khi khối lượng thật tăng lên.
- Thiết kế bước ghi không idempotent nên chạy lại tạo bản ghi trùng hoặc ghi đè sai.
- Không kiểm tra chất lượng và lược đồ, để lỗi dữ liệu âm thầm lan xuống các bảng và mô hình phía sau.
- Đặt khóa truy cập, mật khẩu vào mã hoặc cấu hình công khai và bỏ qua nguyên tắc cấp quyền tối thiểu.

## 6. Câu hỏi ôn tập

### Câu 1

Vì sao pipeline cho “Incremental Aggregates and Update Mode” nên được thiết kế idempotent?

A. Để chạy nhanh gấp đôi  
B. Để chạy lại sau lỗi mà không tạo dữ liệu trùng hoặc sai  
C. Để không cần lưu log  
D. Để bỏ qua kiểm thử  

**Đáp án:** B. **Giải thích:** Pipeline thường phải chạy lại sau lỗi; idempotent bảo đảm chạy lại không làm hỏng kết quả.

### Câu 2

Kiểm tra chất lượng dữ liệu cho “Incremental Aggregates and Update Mode” nên được thực hiện khi nào?

A. Chỉ khi người dùng báo lỗi  
B. Một lần duy nhất khi dựng xong  
C. Tự động ở các bước quan trọng của mỗi lần chạy, kèm cảnh báo khi vi phạm  
D. Không cần nếu nguồn đáng tin  

**Đáp án:** C. **Giải thích:** Dữ liệu thay đổi theo thời gian, nên kiểm tra phải lặp lại ở mỗi lần chạy.

### Câu 3

Khối lượng dữ liệu thật lớn hơn nhiều so với mẫu thử của “Incremental Aggregates and Update Mode”. Cách làm hợp lý là gì?

A. Thử với các lát dữ liệu lớn dần, đo thời gian, bộ nhớ và chi phí trước khi triển khai  
B. Triển khai ngay vì mẫu nhỏ đã chạy  
C. Tắt giám sát để tiết kiệm  
D. Bỏ qua phân vùng dữ liệu  

**Đáp án:** A. **Giải thích:** Hiệu năng và chi phí có thể thay đổi phi tuyến khi dữ liệu tăng, nên cần đo trước.

### Câu 4

Thông tin xác thực (mật khẩu, khóa truy cập) trong dự án “Incremental Aggregates and Update Mode” nên được quản lý thế nào?

A. Ghi vào mã nguồn  
B. Dùng chung một tài khoản quản trị  
C. Gửi qua email cho cả nhóm  
D. Lưu trong kho bí mật hoặc biến môi trường và cấp quyền tối thiểu  

**Đáp án:** D. **Giải thích:** Quyền tối thiểu và kho bí mật giảm thiệt hại khi một thông tin bị lộ.

### Câu 5

Với mô hình đã triển khai trong “Incremental Aggregates and Update Mode”, vì sao cần giám sát sau khi đưa vào chạy?

A. Dữ liệu thực tế có thể trôi (drift) làm chất lượng giảm dù mã không đổi  
B. Mô hình tự cải thiện nên không cần  
C. Chỉ để tăng chi phí  
D. Giám sát thay cho việc kiểm thử  

**Đáp án:** A. **Giải thích:** Phân phối dữ liệu thật thay đổi theo thời gian nên chất lượng mô hình phải được theo dõi liên tục.

## 7. Tổng kết

**Incremental Aggregates and Update Mode** chỉ trở thành kỹ năng khi bạn dựng lại được pipeline nhỏ, chạy lại an toàn và phát hiện được dữ liệu hoặc mô hình có vấn đề. Hãy lưu cấu hình, lược đồ, truy vấn kiểm tra chất lượng và ghi chú chi phí cùng với bài học.
