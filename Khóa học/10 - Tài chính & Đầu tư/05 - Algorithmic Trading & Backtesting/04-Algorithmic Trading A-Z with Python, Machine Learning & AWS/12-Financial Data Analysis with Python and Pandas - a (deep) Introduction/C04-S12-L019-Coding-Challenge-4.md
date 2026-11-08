# Coding Challenge #4

**Khóa học:** Algorithmic Trading A-Z with Python, Machine Learning & AWS  
**Module 12:** Financial Data Analysis with Python and Pandas - a (deep) Introduction  
**Thứ tự:** Bài 019 · **Loại mục Udemy:** ARTICLE_LECTURE · **Thời lượng metadata:** 0.2 phút  
**Trang khóa học:** https://www.udemy.com/course/algorithmic-trading-with-python-and-machine-learning  

> **Phạm vi:** Đây là tài liệu học bổ trợ bằng tiếng Việt, tự biên soạn theo tên mục trong đề cương Udemy và kiến thức chung. Không phải bản chép lời hoặc bản trích xuất nội dung video.

## 1. Tóm tắt

Pandas cung cấp Series/DataFrame, indexes và phép toán vector hóa. Trong dữ liệu tài chính, timestamp alignment và missing values thường quan trọng hơn cú pháp đơn lẻ.

## 2. Mục tiêu học tập

Sau bài học, bạn có thể:

1. Giải thích mục đích và thuật ngữ chính của **Coding Challenge #4**.
2. Mô tả giả định, dữ liệu đầu vào và kết quả cần quan sát.
3. Triển khai hoặc kiểm tra một ví dụ định lượng có thể tái lập.
4. Nêu ít nhất hai trường hợp dẫn đến kết luận không đáng tin.

## 3. Bối cảnh và kiến thức cốt lõi

Trong hệ thống Quant, một thành phần chỉ hữu ích khi có định nghĩa rõ, dữ liệu đầu vào hợp lệ, quy tắc đánh giá và giới hạn áp dụng. Với chủ đề **Pandas**, cần tách ba câu hỏi: điều gì đang được mô hình hóa; giả định nào được sử dụng; và bằng chứng nào xác nhận kết quả.

Pandas cung cấp Series/DataFrame, indexes và phép toán vector hóa. Trong dữ liệu tài chính, timestamp alignment và missing values thường quan trọng hơn cú pháp đơn lẻ.

Khi không có công thức cụ thể trong phần nội dung công khai, hãy bắt đầu bằng sơ đồ dữ liệu đầu vào → phép biến đổi → kết quả và xây các phép kiểm tra đơn vị.

## 4. Cách áp dụng và ví dụ thực hành

**Bài toán:** Tạo DataFrame có DatetimeIndex, resample và kiểm tra không trộn phiên giao dịch.

Quy trình đề xuất:

1. Chọn bộ dữ liệu nhỏ hoặc tự mô phỏng, ghi nguồn và mốc thời gian.
2. Thiết lập các biến, tham số và quy ước đo lường trước khi tính.
3. Xây dựng baseline có thể kiểm tra bằng tay hoặc bằng một thư viện độc lập.
4. Đối chiếu với tình huống biên, đặc biệt là dữ liệu thiếu, sai đơn vị hoặc thứ tự thời gian.
5. Ghi lại kết quả, độ nhạy theo tham số và điều kiện thất bại.

## 5. Những lỗi thường gặp

- Nhầm dữ liệu quan sát được với dữ liệu giả định hoặc giá trị dự báo.
- Sử dụng kết quả có tính toán từ tương lai để ra quyết định ở quá khứ.
- Đánh giá bằng một chỉ số duy nhất mà không xem giới hạn của nó.
- Thay đổi tham số liên tục cho tới khi đạt một backtest đẹp, rồi coi đó là bằng chứng ngoài mẫu.

## 6. Câu hỏi ôn tập

### Câu 1

Khi nghiên cứu “Pandas”, thực hành nào giúp tránh kết luận sai nhất?

A. Chỉ nhìn kết quả tốt nhất trên train  
B. Ghi rõ dữ liệu, giả định và kiểm tra ngoài mẫu khi phù hợp  
C. Bỏ qua trường hợp bất thường  
D. Thay đổi mục tiêu sau khi thấy dữ liệu  

**Đáp án:** B. **Giải thích:** Việc ghi lại giả định và sử dụng kiểm tra phù hợp giúp hạn chế data leakage và selective reporting.

### Câu 2

Kết quả tính toán cho “Pandas” nên được kiểm tra như thế nào?

A. Chỉ cần có một biểu đồ đẹp  
B. Không cần unit tests  
C. So sánh với một ví dụ nhỏ tính tay và các edge cases  
D. Chỉ chạy trên dữ liệu thuận lợi  

**Đáp án:** C. **Giải thích:** Các ví dụ có thể kiểm tra thủ công và edge cases giúp phát hiện lỗi triển khai.

### Câu 3

Khi ứng dụng “Pandas” cho tài chính, điều nào cần được công bố?

A. Giả định và giới hạn mô hình  
B. Chỉ kết quả lợi nhuận cao nhất  
C. Không cần biết dữ liệu đến từ đâu  
D. Chỉ tên thư viện  

**Đáp án:** A. **Giải thích:** Giả định và giới hạn quyết định phạm vi diễn giải kết quả.

### Câu 4

Nếu dữ liệu dùng trong “Pandas” có thứ tự thời gian, bước nào phù hợp?

A. Trộn ngẫu nhiên mọi mốc trước khi đánh giá mà không kiểm tra leak  
B. Dùng luôn dữ liệu cuối kỳ cho tín hiệu đầu kỳ  
C. Fit scaler trên toàn bộ dữ liệu rồi chia train/test  
D. Bảo toàn thứ tự thông tin và chia train/test theo thời gian khi dự báo  

**Đáp án:** D. **Giải thích:** Forecasting cần giữ đúng thứ tự thông tin khả dụng tại thời điểm dự báo.

### Câu 5

Điều nào phù hợp khi chuyển “Pandas” thành hệ thống có thể bảo trì?

A. Sao chép code và bỏ kiểm thử  
B. Tách dữ liệu, logic xử lý, kiểm thử và ghi lại phiên bản  
C. Giấu tham số sử dụng  
D. Chỉ chạy một lần mà không lưu kết quả  

**Đáp án:** B. **Giải thích:** Thiết kế có cấu trúc và reproducibility giúp kết quả có thể xác minh độc lập.

## 7. Tổng kết

**Pandas** chỉ trở thành kỹ năng có thể sử dụng khi bạn giải thích được cơ chế, lập lại được phép tính và trình bày rõ các giả định. Hãy lưu code, dữ liệu mẫu và kết quả thử nghiệm cùng với bài học.
