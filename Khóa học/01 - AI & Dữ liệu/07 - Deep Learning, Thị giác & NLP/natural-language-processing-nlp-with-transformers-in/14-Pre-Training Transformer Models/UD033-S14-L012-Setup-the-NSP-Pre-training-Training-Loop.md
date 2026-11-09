# Setup the NSP Pre-training Training Loop

**Khóa học:** Natural Language Processing: NLP With Transformers in Python  
**Module 14:** Pre-Training Transformer Models  
**Thứ tự:** Bài 012 · **Loại mục Udemy:** PRACTICE · **Thời lượng metadata:** Không có thời lượng công bố  
**Trang khóa học:** https://www.udemy.com/course/nlp-with-transformers  

> **Phạm vi:** Đây là tài liệu học bổ trợ bằng tiếng Việt, tự biên soạn theo tên mục trong đề cương Udemy và kiến thức chung. Không phải bản chép lời hoặc bản trích xuất nội dung video.

## 1. Mục tiêu

Ôn tập và vận dụng chủ đề **Setup the NSP Pre-training Training Loop** trong phạm vi module. Đây là bài luyện tập bổ trợ tự biên soạn; câu hỏi nguyên bản của Udemy không được công khai trong metadata.

## 2. Kiến thức sử dụng

NSP сургалтын loop нь batch-уудыг загварт дамжуулж, ангиллын алдаагаар параметр шинэчилдэг.

## 3. Bài thực hành

**Nhiệm vụ:** NSP-д зориулж forward, loss, backward, optimizer.step бүхий нэг epoch-ийн сургалтын loop бич.

- Viết rõ dữ liệu đầu vào và giả định.
- Đưa ra quy tắc kiểm chứng kết quả.
- Ghi những sai số, trường hợp biên và hạn chế.

## 4. Câu hỏi tự kiểm tra

### Câu 1

Khi học “Setup the NSP Pre-training Training Loop”, cách nào giúp kết luận về hiệu năng mô hình đáng tin nhất?

A. Báo cáo độ chính xác trên chính tập huấn luyện  
B. Đánh giá trên tập kiểm tra tách riêng, đã chia trước mọi bước xử lý  
C. Chỉ chạy một lần với cấu hình mặc định  
D. Chọn kết quả tốt nhất trong nhiều lần thử trên tập kiểm tra  

**Đáp án:** B. **Giải thích:** Tập kiểm tra độc lập, tách trước mọi bước học từ dữ liệu, mới phản ánh hiệu năng trên dữ liệu chưa thấy.

### Câu 2

Dấu hiệu nào cho thấy mô hình liên quan đến “Setup the NSP Pre-training Training Loop” có thể đang quá khớp?

A. Sai số huấn luyện và kiểm định cùng thấp  
B. Hàm mất mát không đổi từ đầu  
C. Sai số huấn luyện rất thấp nhưng sai số kiểm định cao hơn nhiều  
D. Cả hai sai số đều rất cao như nhau  

**Đáp án:** C. **Giải thích:** Khoảng cách lớn giữa kết quả huấn luyện và kiểm định cho thấy mô hình ghi nhớ dữ liệu huấn luyện thay vì khái quát hóa.

### Câu 3

Trước khi thử mô hình phức tạp cho “Setup the NSP Pre-training Training Loop”, nên làm gì?

A. Dựng baseline đơn giản để có mốc so sánh  
B. Bỏ qua baseline để tiết kiệm thời gian  
C. Tăng ngay số tầng và số tham số  
D. Chỉ đổi thư viện  

**Đáp án:** A. **Giải thích:** Baseline cho biết mô hình phức tạp có thực sự cải thiện hay không, và cải thiện bao nhiêu.

### Câu 4

Dữ liệu cho “Setup the NSP Pre-training Training Loop” bị lệch lớp nặng. Thước đo nào hợp lý hơn?

A. Chỉ độ chính xác tổng  
B. Chỉ thời gian chạy  
C. Số tham số của mô hình  
D. Chỉ số phản ánh lớp hiếm như precision, recall, F1 hoặc PR-AUC  

**Đáp án:** D. **Giải thích:** Khi một lớp chiếm áp đảo, độ chính xác tổng có thể cao dù mô hình bỏ sót gần như toàn bộ lớp hiếm.

### Câu 5

Điều nào cần ghi lại để tái lập kết quả của “Setup the NSP Pre-training Training Loop”?

A. Chỉ tên mô hình  
B. Dữ liệu và cách chia tập, hạt giống ngẫu nhiên, phiên bản thư viện và siêu tham số  
C. Chỉ ảnh chụp biểu đồ  
D. Không cần ghi vì kết quả luôn giống nhau  

**Đáp án:** B. **Giải thích:** Thiếu một trong các yếu tố này thì rất khó chạy lại ra đúng kết quả.

## 5. Tiêu chí hoàn thành

Có kết quả chạy hoặc lời giải có thể kiểm tra độc lập, mô tả giả định và các bước tái lập.
