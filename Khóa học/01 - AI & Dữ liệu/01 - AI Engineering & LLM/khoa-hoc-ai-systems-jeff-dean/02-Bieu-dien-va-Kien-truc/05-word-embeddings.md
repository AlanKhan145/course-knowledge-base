# Bài 05 — Word embeddings và không gian ngữ nghĩa

> **Module 02: Biểu diễn và kiến trúc mô hình**  
> **Phạm vi bài giảng:** 12:27–13:43  
> **Hình thức:** Bài học lý thuyết kết hợp thực hành ngắn

## 1. Tổng quan

Bài học xây dựng nền tảng về **word embeddings và không gian ngữ nghĩa** và cách áp dụng tư duy kỹ thuật vào việc thiết kế, đánh giá hoặc vận hành hệ thống AI.

## 2. Mục tiêu học tập

1. Giải thích vì sao từ có thể biểu diễn bằng vector liên tục.
2. Mô tả nhiệm vụ dự đoán từ lân cận.
3. Diễn giải được khoảng cách và hướng trong không gian embedding.

## 3. Kiến thức trọng tâm

### 3.1. Từ one-hot đến vector liên tục
Một từ trong văn bản trước tiên có thể được xem là một ID rời rạc. Tuy nhiên, ID 5 và ID 6 không tự mang nghĩa hai từ liên quan hơn ID 5 và ID 500. **Embedding** ánh xạ token thành vector thực chiều thấp hơn, có thể được học cùng mục tiêu dự đoán từ xuất hiện gần nó.

Ví dụ, các từ `mèo`, `hổ`, `báo` cùng xuất hiện trong nhiều ngữ cảnh động vật; việc học từ lân cận có thể khiến vector của chúng nằm gần nhau trong không gian biểu diễn.

### 3.2. Tín hiệu học từ ngữ cảnh
Với một từ trung tâm $w_t$ và các từ trong cửa sổ lân cận, mô hình học tăng xác suất $p(w_{t+j}\mid w_t)$ cho các ngữ cảnh quan sát được. Có thể nhìn trực giác bài toán là “nhìn từ hiện tại để dự đoán những từ thường đi cùng”.

Với đủ dữ liệu, embedding không chỉ bắt sự gần nghĩa mà còn phản ánh một số quan hệ cú pháp và ngữ nghĩa. Ví dụ kinh điển là hướng tương tự giữa cặp `vua`–`hoàng hậu` và `nam`–`nữ`. Đây là hiện tượng thống kê, có ngoại lệ và dễ mang theo thiên lệch từ dữ liệu.

### 3.3. Cosine similarity
Một phép đo thường dùng giữa hai vector là:

$$\operatorname{cos}(u,v)=\frac{u\cdot v}{\|u\|\|v\|}.$$

Điểm gần $1$ nghĩa là hai vector có hướng tương tự, nhưng không tự đảm bảo hai từ hoàn toàn đồng nghĩa.

### 3.4. Embedding được dùng ở đâu?
- Tìm kiếm ngữ nghĩa và truy xuất tài liệu.
- Khởi tạo hoặc biểu diễn đầu vào cho mô hình ngôn ngữ.
- Phân nhóm và so sánh các văn bản có nội dung gần nhau.

**Phân biệt:** embedding tĩnh gắn một vector cho mỗi từ; embedding theo ngữ cảnh của các mô hình hiện đại có thể thay đổi theo câu.

## 4. Bài tập thực hành

Dùng Python hoặc máy tính tính cosine similarity giữa `u=[1,0]`, `v=[0.8,0.2]`, `z=[0,1]`. Giải thích vì sao đo khoảng cách vector không đủ để xác nhận một tài liệu đúng sự thật.

## 5. Câu hỏi ôn tập trắc nghiệm

**Câu 1. Mục tiêu huấn luyện Word2Vec kiểu dự đoán lân cận dựa vào đâu?**

A. Nhãn đối tượng ảnh do con người vẽ  
B. Điểm đánh giá Arena  
C. Các từ cùng xuất hiện trong ngữ cảnh  
D. Biên dịch mã lập trình  

**Đáp án: C.** Ngữ cảnh cung cấp tín hiệu tự giám sát cho biểu diễn từ.

**Câu 2. Hai từ có cosine similarity cao thường cho thấy điều gì?**

A. Chúng chắc chắn đồng nghĩa trong mọi tình huống  
B. Chúng có cùng số ký tự  
C. Chúng có nhãn phân loại chính xác tuyệt đối  
D. Vector của chúng có hướng tương tự  

**Đáp án: D.** Cosine đo hướng, không chứng minh quan hệ ngữ nghĩa tuyệt đối.

**Câu 3. Vì sao ID token không thay thế được embedding ngữ nghĩa?**

A. Khoảng cách giữa các ID không mã hóa sự liên quan  
B. ID không thể lưu dưới dạng số nguyên  
C. ID luôn nhiều chiều hơn vector  
D. Mỗi từ chỉ có thể có một ký tự  

**Đáp án: A.** ID là ký hiệu rời rạc; quan hệ được học qua vector.

**Câu 4. Rủi ro của embedding học từ văn bản thực tế là gì?**

A. Luôn bỏ qua mọi lỗi dữ liệu  
B. Có thể phản ánh thiên lệch và tương quan ngẫu nhiên  
C. Không thể dùng trong tìm kiếm  
D. Làm token không còn tồn tại  

**Đáp án: B.** Mô hình học các khuôn mẫu cả hữu ích lẫn thiên lệch.

**Câu 5. Điểm khác biệt chính giữa embedding tĩnh và theo ngữ cảnh?**

A. Embedding tĩnh luôn dùng hình ảnh  
B. Theo ngữ cảnh không phải vector  
C. Theo ngữ cảnh có thể thay đổi vector theo câu  
D. Embedding tĩnh không bao giờ được học  

**Đáp án: C.** Mô hình có ngữ cảnh dùng các từ xung quanh để tạo biểu diễn.

## 6. Tổng kết

- Embedding chuyển đơn vị văn bản sang không gian vector có thể học.
- Sự tương tự vector phản ánh mẫu thống kê, không phải bảo đảm tri thức.
