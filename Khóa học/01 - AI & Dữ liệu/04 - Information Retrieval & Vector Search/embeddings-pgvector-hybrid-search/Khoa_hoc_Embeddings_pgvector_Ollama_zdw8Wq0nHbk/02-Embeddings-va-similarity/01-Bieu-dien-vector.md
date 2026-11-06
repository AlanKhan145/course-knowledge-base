# Embeddings: biểu diễn ngữ nghĩa bằng vector

> **Tóm tắt:** Biến đoạn văn thành một dãy số có thể dùng để so sánh gần nhau về nội dung, kể cả khi khác từ ngữ.

## 1. Mục tiêu học tập

- Định nghĩa embedding và chiều vector.
- Phân biệt độ tương đồng ngữ nghĩa với khớp chuỗi ký tự.
- Giải thích tại sao query và document cần cùng embedding model.

## 2. Vì sao cần embedding

Truy vấn “doanh thu tăng mạnh” có thể liên quan tới đoạn dùng cụm “record quarterly sales” hoặc “higher earnings”, dù không có cụm từ y hệt. TF-IDF và full-text search ưu tiên khớp token; semantic search tìm gần về **ý nghĩa trong không gian biểu diễn được mô hình học**. Nó không hiểu mọi câu đúng tuyệt đối, nhưng thường tăng độ bao phủ cho từ đồng nghĩa/diễn đạt lại.

## 3. Vector gồm những gì

Embedding là một danh sách số thực. Với model Qwen3-Embedding-0.6B ở cấu hình mặc định đang dùng, mỗi đoạn được biểu diễn bằng **1024 phần tử**. Ví dụ minh họa (không phải output thực từ model):

```text
"record revenue" -> [0.12, -0.08, 0.31, ..., 0.04]  # 1024 số
"higher income" -> [0.10, -0.06, 0.29, ..., 0.03]
```

Độ lớn từng tọa độ riêng lẻ thường không có ý nghĩa trực quan. Ý nghĩa xuất hiện khi so sánh toàn bộ vector. Một model khác có thể sinh số chiều khác; bảng database phải khớp hoặc có chiến lược chuyển đổi được kiểm nghiệm.

## 4. Vector cho tài liệu và truy vấn

Index-time: `v_doc = embed(chunk.content)` rồi lưu `v_doc` vào pgvector. Query-time: `v_query = embed(câu hỏi)` sau đó lấy top-k có cosine distance nhỏ.

Không nên trộn embeddings từ hai model khác nhau vào một bảng rồi so sánh trực tiếp, ngay cả khi kích thước bằng nhau: chúng có thể ở hai không gian biểu diễn khác biệt. Qwen3 là model đa ngôn ngữ, nhưng chất lượng với dữ liệu của bạn vẫn phải được đánh giá.

## 5. Thực hành và tự kiểm tra

Viết 3 cặp câu (đồng nghĩa, chỉ chung chủ đề, hoàn toàn khác chủ đề). Dự đoán thứ tự tương đồng và kiểm chứng khi đến module Ollama. Giải thích vì sao câu có cùng vài chữ vẫn có thể khác ý.

## 6. Câu hỏi ôn tập

### Câu 1

Embedding là gì?

A. Danh sách ID khóa  
B. Vector số biểu diễn nội dung  
C. Tệp hình ảnh  
D. SQL view  

**Đáp án:** B

**Giải thích:** Mô hình biến nội dung đầu vào thành vector.

### Câu 2

Hai câu khác từ nhưng cùng ý có thể được tìm bằng gì?

A. Chỉ literal equality  
B. Chỉ COUNT(*)  
C. Chỉ JSON parser  
D. Semantic similarity  

**Đáp án:** D

**Giải thích:** So sánh vector cho phép phát hiện diễn đạt gần nghĩa.

### Câu 3

Kích thước vector của model dùng trong bài?

A. 1024  
B. 128  
C. 4096 bắt buộc  
D. 10  

**Đáp án:** A

**Giải thích:** Qwen3-Embedding-0.6B mặc định sinh embedding 1024 chiều.

### Câu 4

Trộn vector từ 2 model có cùng chiều có an toàn về ngữ nghĩa?

A. Luôn an toàn  
B. PostgreSQL tự sửa  
C. Không bảo đảm  
D. Bắt buộc như thế  

**Đáp án:** C

**Giải thích:** Cùng số chiều không có nghĩa cùng không gian vector.

### Câu 5

Embedding query được tạo thời điểm nào?

A. Lúc viết schema  
B. Khi có truy vấn  
C. Chỉ khi reset DB  
D. Khi đổi Docker image  

**Đáp án:** B

**Giải thích:** Query-time tạo biểu diễn cho câu hỏi cần tìm.

## 7. Tổng kết

Biến đoạn văn thành một dãy số có thể dùng để so sánh gần nhau về nội dung, kể cả khi khác từ ngữ. Hoàn thành phần thực hành và trả lời được các câu hỏi là đạt yêu cầu của bài.
