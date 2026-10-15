# Bài 08 — Tự giám sát văn bản: next-token và masked-token

> **Module 02: Biểu diễn và kiến trúc mô hình**  
> **Phạm vi bài giảng:** 24:45–27:06  
> **Hình thức:** Bài học lý thuyết kết hợp thực hành ngắn

## 1. Tổng quan

Bài học xây dựng nền tảng về **tự giám sát văn bản: next-token và masked-token** và cách áp dụng tư duy kỹ thuật vào việc thiết kế, đánh giá hoặc vận hành hệ thống AI.

## 2. Mục tiêu học tập

1. So sánh autoregressive next-token prediction với masked-token prediction.
2. Giải thích vì sao văn bản thô tạo được tín hiệu huấn luyện.
3. Lựa chọn kiểu mục tiêu phù hợp với tác vụ sinh hoặc biểu diễn.

## 3. Kiến thức trọng tâm

### 3.1. Học từ chính văn bản
Với câu đã tồn tại, ta có thể xây dựng “đáp án” mà không cần con người viết nhãn mới. Chẳng hạn đưa mô hình chuỗi `Trường đại học nằm ở` và yêu cầu dự đoán token tiếp theo từ phần văn bản đã ẩn.

Sự thuận tiện này khiến khối lượng văn bản sẵn có trở thành nguồn tín hiệu học phong phú, dù vẫn cần lọc chất lượng dữ liệu và tôn trọng quyền sử dụng nội dung.

### 3.2. Autoregressive language modeling
Mô hình sinh từ trái sang phải ước lượng:

$$p(x_1,\ldots,x_T)=\prod_{t=1}^{T}p(x_t\mid x_{<t}).$$

Mỗi bước được huấn luyện bằng token đích thật. Trong **suy luận** dạng chatbot, mô hình chỉ nhìn được tiền tố câu và các token đã tạo nên cách dự đoán tiếp theo này phù hợp tự nhiên với sinh hội thoại.

### 3.3. Masked-token modeling
Ta ẩn một hoặc nhiều token trong câu, sau đó yêu cầu mô hình điền đúng thông tin bị thiếu. Với mô hình cho phép nhìn cả hai phía, nó có thể dùng ngữ cảnh trái và phải để dự đoán vùng bị che.

| Đặc điểm | Autoregressive | Masked-token |
|---|---|---|
| Thông tin khi đoán | Chủ yếu tiền tố bên trái | Thường có ngữ cảnh hai chiều |
| Mục tiêu | Token kế tiếp | Token bị ẩn |
| Ứng dụng điển hình | Sinh văn bản | Học biểu diễn để phân loại, truy xuất |

### 3.4. Điều không nên suy luận quá mức
Một mô hình đoán từ tốt không đồng nghĩa nó có sự thật được đảm bảo: loss đo khả năng dự đoán phân phối văn bản, không trực tiếp đo tính đúng đắn từng khẳng định. Ngoài ra, dù dữ liệu thô không cần gán nhãn thủ công, quá trình chọn lọc dữ liệu và huấn luyện vẫn rất tốn tài nguyên.

## 4. Bài tập thực hành

Tạo 10 câu tiếng Việt trong một chủ đề quen thuộc. Với mỗi câu, sinh hai bài luyện: (a) che token cuối và (b) che một token ở giữa. Phân tích tác vụ nào dễ đoán hơn khi chỉ có tiền tố.

## 5. Câu hỏi ôn tập trắc nghiệm

**Câu 1. Vì sao gọi next-token prediction là tự giám sát?**

A. Vì bắt buộc người phải gán nhãn từng token  
B. Token đích lấy trực tiếp từ văn bản sẵn có  
C. Vì mô hình không có loss  
D. Vì chỉ train với âm thanh  

**Đáp án: B.** Bản thân dữ liệu đầu vào cung cấp mục tiêu dự đoán.

**Câu 2. Trong sinh tự hồi quy, mô hình được dùng thông tin nào để sinh token tiếp theo?**

A. Toàn bộ các token tương lai thực tế  
B. Nhãn ngẫu nhiên của ảnh  
C. Tiền tố và các token đã sinh  
D. Chỉ nội dung phía sau câu  

**Đáp án: C.** Các token tương lai chưa được tạo nên không thể dùng làm điều kiện.

**Câu 3. Masked-token modeling thường khai thác lợi thế gì?**

A. Không cần đọc văn bản đầu vào  
B. Sinh văn bản không cần decoder  
C. Huấn luyện không cần tối ưu  
D. Dùng ngữ cảnh ở cả hai bên vị trí bị che  

**Đáp án: D.** Ngữ cảnh trái-phải giúp khôi phục từ bị che và học biểu diễn.

**Câu 4. Điểm hạn chế của next-token loss là gì?**

A. Không trực tiếp bảo đảm tính đúng thực tế của từng câu  
B. Không thể dùng cho bài toán ngôn ngữ  
C. Chỉ hoạt động với văn bản 5 từ  
D. Chỉ cần một ví dụ để hội tụ  

**Đáp án: A.** Mục tiêu dự đoán token khác với kiểm chứng sự thật.

**Câu 5. Để huấn luyện từ lượng lớn văn bản, yếu tố nào vẫn quan trọng?**

A. Chỉ độ dài tên tập dữ liệu  
B. Chất lượng và quyền sử dụng dữ liệu  
C. Không cần chuẩn hóa tokenizer  
D. Không cần đánh giá sau train  

**Đáp án: B.** Dữ liệu tự giám sát không làm mất yêu cầu kiểm soát chất lượng.

## 6. Tổng kết

- Self-supervised learning tạo mục tiêu từ dữ liệu chưa gán nhãn.
- Next-token thích hợp với sinh tự hồi quy; masked-token thuận cho học biểu diễn hai chiều.
