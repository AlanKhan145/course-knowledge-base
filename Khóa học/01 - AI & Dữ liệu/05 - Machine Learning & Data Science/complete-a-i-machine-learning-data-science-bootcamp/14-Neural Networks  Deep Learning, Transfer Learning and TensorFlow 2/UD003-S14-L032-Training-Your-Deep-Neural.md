# Training Your Deep Neural Network

**Khóa học:** Complete A.I. & Machine Learning, Data Science Bootcamp  
**Module 14:** Neural Networks: Deep Learning, Transfer Learning and TensorFlow 2  
**Thứ tự:** Bài 032 · **Loại mục Udemy:** VIDEO_LECTURE · **Thời lượng metadata:** 19.1 phút  
**Trang khóa học:** https://www.udemy.com/course/complete-machine-learning-and-data-science-zero-to-mastery  

> **Phạm vi:** Đây là tài liệu học bổ trợ bằng tiếng Việt, tự biên soạn theo tên mục trong đề cương Udemy và kiến thức chung. Không phải bản chép lời hoặc bản trích xuất nội dung video.

## 1. Tóm tắt

Huấn luyện mạng sâu lặp qua dữ liệu để tối ưu trọng số; theo dõi epoch và validation giúp nhận biết tiến trình học.

## 2. Mục tiêu học tập

Sau bài học, bạn có thể:

1. Giải thích mục đích và thuật ngữ chính của **Training Your Deep Neural Network**.
2. Mô tả giả định, dữ liệu đầu vào và kết quả cần quan sát.
3. Huấn luyện hoặc tính một ví dụ nhỏ có thể tái lập và đánh giá trên dữ liệu kiểm tra tách riêng.
4. Nêu ít nhất hai trường hợp dẫn đến kết luận không đáng tin.

## 3. Bối cảnh và kiến thức cốt lõi

Trong học máy và trí tuệ nhân tạo, một thuật toán hay mô hình chỉ đáng tin khi dữ liệu, giả định, hàm mục tiêu và cách đánh giá được nêu rõ. Với chủ đề **Training Your Deep Neural Network**, cần tách ba câu hỏi: mô hình học hoặc tối ưu điều gì từ dữ liệu nào; giả định và siêu tham số nào ảnh hưởng đến kết quả; và dùng thước đo nào trên tập kiểm tra độc lập để biết nó thực sự hoạt động.

Huấn luyện mạng sâu lặp qua dữ liệu để tối ưu trọng số; theo dõi epoch và validation giúp nhận biết tiến trình học.

## 4. Cách áp dụng và ví dụ thực hành

**Bài toán:** Huấn luyện mô hình nhỏ vài epoch, lưu lịch sử loss và vẽ đường train-validation.

Quy trình đề xuất:

1. Chọn một tập dữ liệu nhỏ, ghi rõ nguồn, kích thước, nhãn và cách chia train/validation/test với hạt giống ngẫu nhiên cố định.
2. Dựng baseline đơn giản (ví dụ dự đoán giá trị trung bình hoặc mô hình tuyến tính) để có mốc so sánh.
3. Áp dụng kỹ thuật của bài, theo dõi hàm mất mát và thước đo trên cả tập huấn luyện lẫn tập kiểm định.
4. Kiểm tra quá khớp hoặc dưới khớp, độ nhạy với siêu tham số và các trường hợp biên của dữ liệu (thiếu giá trị, lệch lớp, ngoại lai).
5. Ghi lại kết quả, phiên bản thư viện, cấu hình và những giả định chưa được kiểm chứng.

## 5. Những lỗi thường gặp

- Rò rỉ dữ liệu: chuẩn hóa hoặc chọn đặc trưng trên toàn bộ dữ liệu trước khi tách tập kiểm tra.
- Chỉ nhìn độ chính xác trên tập huấn luyện, hoặc dùng sai thước đo khi dữ liệu lệch lớp.
- Chỉnh siêu tham số theo tập kiểm tra rồi coi kết quả đó là hiệu năng thực tế.
- Sao chép đoạn mã mẫu mà không hiểu giả định về dạng dữ liệu, thang đo và phiên bản thư viện.

## 6. Câu hỏi ôn tập

### Câu 1

Khi học “Training Your Deep Neural Network”, cách nào giúp kết luận về hiệu năng mô hình đáng tin nhất?

A. Báo cáo độ chính xác trên chính tập huấn luyện  
B. Đánh giá trên tập kiểm tra tách riêng, đã chia trước mọi bước xử lý  
C. Chỉ chạy một lần với cấu hình mặc định  
D. Chọn kết quả tốt nhất trong nhiều lần thử trên tập kiểm tra  

**Đáp án:** B. **Giải thích:** Tập kiểm tra độc lập, tách trước mọi bước học từ dữ liệu, mới phản ánh hiệu năng trên dữ liệu chưa thấy.

### Câu 2

Dấu hiệu nào cho thấy mô hình liên quan đến “Training Your Deep Neural Network” có thể đang quá khớp?

A. Sai số huấn luyện và kiểm định cùng thấp  
B. Hàm mất mát không đổi từ đầu  
C. Sai số huấn luyện rất thấp nhưng sai số kiểm định cao hơn nhiều  
D. Cả hai sai số đều rất cao như nhau  

**Đáp án:** C. **Giải thích:** Khoảng cách lớn giữa kết quả huấn luyện và kiểm định cho thấy mô hình ghi nhớ dữ liệu huấn luyện thay vì khái quát hóa.

### Câu 3

Trước khi thử mô hình phức tạp cho “Training Your Deep Neural Network”, nên làm gì?

A. Dựng baseline đơn giản để có mốc so sánh  
B. Bỏ qua baseline để tiết kiệm thời gian  
C. Tăng ngay số tầng và số tham số  
D. Chỉ đổi thư viện  

**Đáp án:** A. **Giải thích:** Baseline cho biết mô hình phức tạp có thực sự cải thiện hay không, và cải thiện bao nhiêu.

### Câu 4

Dữ liệu cho “Training Your Deep Neural Network” bị lệch lớp nặng. Thước đo nào hợp lý hơn?

A. Chỉ độ chính xác tổng  
B. Chỉ thời gian chạy  
C. Số tham số của mô hình  
D. Chỉ số phản ánh lớp hiếm như precision, recall, F1 hoặc PR-AUC  

**Đáp án:** D. **Giải thích:** Khi một lớp chiếm áp đảo, độ chính xác tổng có thể cao dù mô hình bỏ sót gần như toàn bộ lớp hiếm.

### Câu 5

Điều nào cần ghi lại để tái lập kết quả của “Training Your Deep Neural Network”?

A. Chỉ tên mô hình  
B. Dữ liệu và cách chia tập, hạt giống ngẫu nhiên, phiên bản thư viện và siêu tham số  
C. Chỉ ảnh chụp biểu đồ  
D. Không cần ghi vì kết quả luôn giống nhau  

**Đáp án:** B. **Giải thích:** Thiếu một trong các yếu tố này thì rất khó chạy lại ra đúng kết quả.

## 7. Tổng kết

**Training Your Deep Neural Network** chỉ trở thành kỹ năng khi bạn giải thích được mô hình học gì, tự chạy lại được ví dụ trên dữ liệu kiểm tra tách riêng và nêu rõ giới hạn của kết quả. Hãy lưu mã, cấu hình, hạt giống ngẫu nhiên và thước đo cùng với bài học.
