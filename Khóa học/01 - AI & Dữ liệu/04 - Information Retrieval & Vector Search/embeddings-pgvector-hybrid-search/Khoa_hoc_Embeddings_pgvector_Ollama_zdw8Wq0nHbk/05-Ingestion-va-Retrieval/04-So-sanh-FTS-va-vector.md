# Thí nghiệm so sánh kết quả full-text và vector

> **Tóm tắt:** Thiết kế các truy vấn đại diện để đánh giá độ bao phủ và sự sai khác của lexical với semantic retrieval.

## 1. Mục tiêu học tập

- Tạo bộ query có nhiều mức từ vựng.
- Lập bảng so sánh top-5 của hai bộ truy xuất.
- Tránh tuyên bố cải thiện mà không có dữ liệu đánh giá.

## 2. Thiết kế thử nghiệm

Dùng chính corpus demo với các nhóm query:

- **Khớp chữ:** `data center` (phù hợp FTS `data & center`).
- **Diễn đạt khác từ:** `record-breaking quarterly financial performance` (phù hợp semantic).
- **Không liên quan:** `weather rain forecast` (kiểm tra retriever có phát hiện false positive không).
- **Mã/thuật ngữ chính xác:** nếu tài liệu có mã sản phẩm, thử một ID chính xác.

Mỗi query cần xác định những chunk nào **thực sự trả lời** trước khi xem ranking.

## 3. Bảng kết quả

Sử dụng biểu mẫu:

| Query | Relevant IDs | FTS Top-5 | Vector Top-5 | Nhận xét |
| --- | --- | --- | --- | --- |
| data center | tự gán | chạy thật | chạy thật | exact lexical |
| quarterly performance | tự gán | chạy thật | chạy thật | paraphrase |
| rain forecast | tự gán | chạy thật | chạy thật | negative/control |

Tính `Recall@k = số relevant retrieved / tổng số relevant` theo từng query. Nếu nhãn relevance chưa có, chỉ được đưa ra nhận xét định tính.

## 4. Suy luận kết quả

FTS sẽ mạnh khi từ khóa khớp; vector có thể tìm từ đồng nghĩa và paraphrase. Cả hai có thể trả về kết quả không đúng, đặc biệt khi query mơ hồ. Không xếp score cosine và `ts_rank` lên cùng một bảng rồi cộng trực tiếp. Muốn xây hybrid thật cần chuẩn hóa/fusion và kiểm thử, không chỉ đặt tên “hybrid”.

## 5. Thực hành và tự kiểm tra

Tạo ít nhất 5 query và gán nhãn relevant cho từng chunk. Chạy hai phương pháp, ghi hit/miss, tính Recall@3. Nêu ít nhất 1 false positive hoặc false negative. Không dùng số liệu minh họa làm benchmark.

## 6. Câu hỏi ôn tập

### Câu 1

Điều kiện để tính Recall@k đáng tin?

A. Có nhãn relevant  
B. Có 1024 chiều  
C. Có icon đẹp  
D. Có Docker compose  

**Đáp án:** A

**Giải thích:** Recall đo bao nhiêu relevant được truy xuất.

### Câu 2

Tại sao không cộng thẳng ts_rank và cosine?

A. Vì SQL cấm  
B. Thang đo khác nhau  
C. Vì phải dùng JSON  
D. Vì có 5 chunk  

**Đáp án:** B

**Giải thích:** Cần chiến lược fusion thích hợp.

### Câu 3

Truy vấn paraphrase hữu ích để kiểm gì?

A. RLS  
B. RAM  
C. Semantic recall  
D. Port 54321  

**Đáp án:** C

**Giải thích:** Paraphrase kiểm tra khả năng nhận gần nghĩa.

### Câu 4

Thử nghiệm vài query đủ chứng minh tốt hơn mọi nơi?

A. Có  
B. Chỉ cho tiếng Anh  
C. Có nếu FTS nhanh hơn  
D. Không  

**Đáp án:** D

**Giải thích:** Chất lượng phụ thuộc corpus và tập câu hỏi.

### Câu 5

Nếu top-k có đoạn cùng chủ đề nhưng không trả lời query?

A. Đó có thể là false positive  
B. Đó luôn là true positive  
C. Cần bỏ đánh giá  
D. Nghĩa là dữ liệu sai cú pháp  

**Đáp án:** A

**Giải thích:** Relevance phải gắn với mục tiêu câu hỏi.

## 7. Tổng kết

Thiết kế các truy vấn đại diện để đánh giá độ bao phủ và sự sai khác của lexical với semantic retrieval. Hoàn thành phần thực hành và trả lời được các câu hỏi là đạt yêu cầu của bài.
