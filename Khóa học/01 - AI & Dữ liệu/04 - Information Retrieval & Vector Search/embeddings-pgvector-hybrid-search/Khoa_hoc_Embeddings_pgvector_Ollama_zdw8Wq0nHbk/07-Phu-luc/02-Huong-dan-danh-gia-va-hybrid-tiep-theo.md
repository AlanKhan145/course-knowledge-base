# Hướng phát triển: hybrid search, reranking và đánh giá

> **Tóm tắt:** Giới thiệu kế hoạch nghiên cứu tiếp theo và khung đánh giá, chưa xem là chức năng đã có của project hiện tại.

## 1. Mục tiêu học tập

- Giải thích động cơ hybrid retrieval.
- Mô tả ngắn vai trò của reranking.
- Xây bộ đánh giá có nhãn và tiêu chí chất lượng.

## 2. Vì sao hybrid

Full-text tìm khớp từ tốt, semantic tìm gần nghĩa tốt nhưng có false positives. Hybrid kết hợp hai tín hiệu để giảm phụ thuộc vào một chiến lược. Quy trình cơ bản: chạy lexical top-N, vector top-N, gộp và khử trùng lặp, fusion theo thứ hạng, sau đó có thể rerank.

Một công thức thường gặp là Reciprocal Rank Fusion:

$$
\operatorname{RRF}(d) = \sum_{r \in \{lexical, vector\}} \frac{1}{K + \operatorname{rank}_r(d)}
$$

$K$ là hằng số smoothing, không có một giá trị tối ưu chung. Bài này chỉ trình bày **hướng phát triển**, không giả định mọi kết quả hybrid đều tốt hơn.

## 3. Reranker và generation

Reranker nhận `(query, candidate chunk)` và dự đoán độ liên quan chi tiết hơn so với so sánh embedding riêng. Sau khi chọn evidence tốt, LLM có thể sinh câu trả lời dựa trên các chunk, trích dẫn theo `metadata.source`. Phải có quy tắc không bịa khi tài liệu không chứa đáp án.

Nên tách 4 phép đo: retrieval recall, ranking quality, answer faithfulness và latency/cost. Đừng lấy kết quả chat trôi chảy làm bằng chứng retrieval chính xác.

## 4. Thiết kế benchmark tự làm

Lập tập ít nhất vài chục query đại diện, gắn relevance labels bằng người kiểm tra. Tính:

- `Recall@k`: tỉ lệ relevant chunks xuất hiện trong top-k;
- `MRR`: nghịch đảo rank của relevant đầu tiên, lấy trung bình;
- `nDCG@k`: tính đến vị trí và mức độ liên quan;
- `p50/p95 latency`: độ trễ trả kết quả.

Kiểm tra riêng các trường hợp số liệu chính xác, paraphrase, truy vấn phủ định, tài liệu cũ và truy vấn ngoài phạm vi. Đo trên corpus thật; kết quả thay đổi theo kích thước dataset, cấu hình ANN và phần cứng.

## 5. Thực hành và tự kiểm tra

Viết thiết kế benchmark 20 query có nhãn relevant và bảng so sánh FTS/semantic/hybrid dự định triển khai. Nêu trước điều kiện thành công: Recall@5 tốt hơn baseline mà p95 latency không vượt ngân sách của ứng dụng.

## 6. Câu hỏi ôn tập

### Câu 1

Hybrid retrieval phối hợp những tín hiệu nào?

A. Lexical và semantic  
B. GPU và RAM  
C. HTML và CSS  
D. Docker và npm  

**Đáp án:** A

**Giải thích:** Dựa vào điểm mạnh bổ sung của hai cách retrieval.

### Câu 2

RRF kết hợp chủ yếu bằng gì?

A. Kích thước text  
B. Thứ hạng kết quả  
C. ID tăng dần  
D. Tên file  

**Đáp án:** B

**Giải thích:** RRF dùng thứ hạng từ nhiều danh sách.

### Câu 3

Reranker đánh giá cái gì?

A. Màu dashboard  
B. Port Supabase  
C. Query và candidate  
D. Số file migrations  

**Đáp án:** C

**Giải thích:** Đánh giá relevance chi tiết của cặp query–document.

### Câu 4

Để khẳng định hybrid tốt hơn cần?

A. Nhìn một query  
B. Tin model card  
C. Cứ thấy điểm số cao  
D. Benchmark có nhãn và metric  

**Đáp án:** D

**Giải thích:** Chất lượng phải được đo trên tập đánh giá.

### Câu 5

Kết quả chat mượt có bảo đảm faithful?

A. Không  
B. Có  
C. Chỉ nếu 1024 chiều  
D. Chỉ khi RRF  

**Đáp án:** A

**Giải thích:** LLM vẫn có thể tạo thông tin không có trong retrieved evidence.

## 7. Tổng kết

Giới thiệu kế hoạch nghiên cứu tiếp theo và khung đánh giá, chưa xem là chức năng đã có của project hiện tại. Hoàn thành phần thực hành và trả lời được các câu hỏi là đạt yêu cầu của bài.
