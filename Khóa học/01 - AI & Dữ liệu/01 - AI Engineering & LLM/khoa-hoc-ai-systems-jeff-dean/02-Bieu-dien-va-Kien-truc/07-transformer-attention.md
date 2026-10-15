# Bài 07 — Transformer: attention thay đổi kiến trúc chuỗi

> **Module 02: Biểu diễn và kiến trúc mô hình**  
> **Phạm vi bài giảng:** 22:21–24:45  
> **Hình thức:** Bài học lý thuyết kết hợp thực hành ngắn

## 1. Tổng quan

Bài học xây dựng nền tảng về **transformer: attention thay đổi kiến trúc chuỗi** và cách áp dụng tư duy kỹ thuật vào việc thiết kế, đánh giá hoặc vận hành hệ thống AI.

## 2. Mục tiêu học tập

1. Phân tích hai hạn chế của LSTM mà Transformer hướng tới.
2. Giải thích trực giác query, key, value và attention.
3. Phân biệt self-attention với chuỗi cập nhật trạng thái tuần tự.

## 3. Kiến thức trọng tâm

### 3.1. Vì sao cần thay đổi LSTM?
Một LSTM xử lý lần lượt từng token nên khó tận dụng tối đa phần cứng tính toán song song khi chuỗi dài. Mặt khác, trạng thái cập nhật tuần tự phải chắt lọc rất nhiều lịch sử vào một biểu diễn giới hạn.

Transformer thay đổi cách truy cập ngữ cảnh: thay vì chỉ mang theo một state cập nhật liên tục, mô hình lưu biểu diễn các vị trí và dùng **attention có thể học** để lấy thông tin liên quan ở từng bước/lớp.

### 3.2. Q, K, V hoạt động ra sao?
Với các ma trận biểu diễn $Q$ (query), $K$ (key), $V$ (value), scaled dot-product attention thường được viết:

$$\operatorname{Attention}(Q,K,V)=\operatorname{softmax}\left(\frac{QK^\top}{\sqrt{d_k}}\right)V.$$

Hệ số từ softmax giúp mô hình phân phối mức chú ý đến các vị trí. Token đang xét tạo query, các vị trí ngữ cảnh có key và value; tương đồng giữa query và key điều khiển lượng thông tin value được tổng hợp.

### 3.3. Tính song song và phụ thuộc cần phân biệt
Trong **huấn luyện**, nhiều vị trí của Transformer có thể được tính song song bằng các phép nhân ma trận. Với mô hình sinh tự hồi quy, **khi phát sinh văn bản**, token tiếp theo vẫn phụ thuộc token đã sinh. Vì vậy Transformer giảm một nút thắt tính toán của mạng tuần tự, nhưng không xóa mọi tính tuần tự trong sinh văn bản.

### 3.4. Attention không đồng nghĩa diễn giải đầy đủ
Có thể trực quan hóa trọng số attention để thấy mô hình đang kết hợp thông tin từ đâu. Nhưng trọng số attention không phải bằng chứng đầy đủ về quan hệ nhân quả hay lý do duy nhất của dự đoán.

### 3.5. Lợi ích hiệu quả
Trong các so sánh nghiên cứu được giới thiệu, Transformer đạt chất lượng tương đương hoặc tốt hơn LSTM với ít mô hình/tính toán hơn trong các thiết lập cụ thể. Không nên coi bất kỳ hệ số tăng tốc nào là định luật chung cho mọi độ dài chuỗi.

## 4. Bài tập thực hành

Xét câu `Con mèo ngủ trên ghế vì nó mệt`. Chọn hai cách hiểu từ `nó` và mô tả attention có thể giúp dùng ngữ cảnh để phân giải. Sau đó vẽ một ma trận attention giả lập $3\times3$ và giải thích mỗi hàng phải được chuẩn hóa theo các key hợp lệ.

## 5. Câu hỏi ôn tập trắc nghiệm

**Câu 1. Khó khăn kiến trúc chủ đạo mà Transformer giải quyết so với LSTM là gì?**

A. Giảm phụ thuộc xử lý tuần tự trong biểu diễn ngữ cảnh  
B. Bỏ hoàn toàn nhu cầu dữ liệu  
C. Làm mô hình không cần tham số  
D. Bỏ phép nhân ma trận  

**Đáp án: A.** Transformer cho phép tính nhiều vị trí đồng thời trong huấn luyện.

**Câu 2. Trong attention, softmax dùng để làm gì?**

A. Chuyển văn bản thành âm thanh  
B. Chuẩn hóa các điểm liên quan thành trọng số  
C. Xóa dữ liệu huấn luyện  
D. Đếm số GPU  

**Đáp án: B.** Softmax biến điểm chú ý thành phân phối trọng số cho việc tổng hợp value.

**Câu 3. Vì sao decoder tự hồi quy vẫn sinh từng token?**

A. Vì Transformer không có ma trận  
B. Vì attention chỉ dùng được cho ảnh  
C. Token tiếp theo phụ thuộc các token đã sinh  
D. Vì positional encoding bị tắt  

**Đáp án: C.** Không thể biết đầy đủ ngữ cảnh bên phải chưa được sinh.

**Câu 4. Điều nào đúng về attention visualization?**

A. Luôn là lời giải thích nhân quả duy nhất  
B. Chứng minh mô hình có ý thức  
C. Chỉ tạo được với LSTM  
D. Hữu ích để quan sát nhưng chưa giải thích đầy đủ nguyên nhân  

**Đáp án: D.** Trọng số attention là một góc nhìn giới hạn vào nội bộ mô hình.

**Câu 5. Biểu thức QKᵀ trong attention biểu diễn điều gì?**

A. Điểm phù hợp giữa query và key  
B. Loss trên tập kiểm thử  
C. Gradient của GPU  
D. Số phần tử của từ vựng  

**Đáp án: A.** Tích query-key tạo điểm tương thích trước bước softmax.

## 6. Tổng kết

- Attention tạo đường truy cập linh hoạt đến các biểu diễn ngữ cảnh.
- Parallel training khác với autoregressive decoding.
