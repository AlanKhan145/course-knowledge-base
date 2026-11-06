# Persistence, vận hành và chuẩn bị mở rộng cho RAG

> **Tóm tắt:** Giữ dữ liệu an toàn, xác định giới hạn của bản demo và thiết kế bước tiếp theo trước khi triển khai cho người dùng thật.

## 1. Mục tiêu học tập

- Phân biệt lưu bền, backup và tái lập môi trường.
- Nêu rủi ro bảo mật khi phát hành DB/API.
- Lập backlog mở rộng từ retrieval sang hybrid/rerank/RAG.

## 2. Persistence và backup

Dữ liệu tồn tại sau khi đóng Python vì đã nằm trong PostgreSQL. Với Supabase local, `stop` rồi `start` cùng project thường giữ trạng thái nếu volumes không bị xóa; `db reset` xây lại nên làm mất các row insert thủ công. Persistent storage không phải backup: production cần cơ chế sao lưu, phục hồi, theo dõi lỗi và version migration.

Thực hành một thử nghiệm độc lập: ghi ID một chunk, stop/start, truy vấn lại đúng ID và metadata.

## 3. Các rủi ro thực tế

Không xuất khóa secret/service-role lên frontend; bật RLS và chỉ viết policies cần thiết; nếu công bố API retrieval cho người dùng, backend phải kiểm tra auth, quyền xem tài liệu và chống lạm dụng. Với tài liệu nhạy cảm, metadata cần có tenant/document permission; tìm vector không được làm vượt quyền truy cập.

Ngoài ra phải xử lý data lifecycle: cập nhật nguồn, xóa chunk cũ, idempotent upsert, duplicate detection, batching, retry, versioning model và định kỳ reindex.

## 4. Hướng phát triển sau khóa học

Bước tiếp theo thường là **hybrid retrieval** (lexical + vector), **reranking** danh sách ứng viên, **RAG generation** (đưa evidence vào LLM để trả lời có trích dẫn), và **evaluation** với tập truy vấn có nhãn. Đây là các hướng nghiên cứu tiếp nối, chưa được hiện thực đầy đủ trong lab.

Với hybrid, có thể bắt đầu bằng Reciprocal Rank Fusion (RRF) trên hai danh sách top-k; sau đó thử reranker cross-encoder và đo Recall@k/MRR/NDCG cùng độ trễ. Luôn đối chiếu permission filter và nguồn trích dẫn trước khi đưa cho LLM.

## 5. Bảng kiểm trước production

- Đã biết cách restore từ backup thử nghiệm; không chỉ có một bản DB.
- Model và dimension được version hóa; không trộn embedding khác model.
- Ingestion idempotent, có quan sát được retry/failure.
- Quyền truy cập theo người dùng/tài liệu được thực thi ở backend/DB.
- Bộ truy vấn đánh giá có nhãn, không quyết định từ ví dụ đơn lẻ.
- Không expose local Supabase hay Ollama ra Internet một cách tùy tiện.

## 6. Thực hành và tự kiểm tra

Viết backlog 5 nhiệm vụ triển khai thật theo thứ tự: dữ liệu, bảo mật, đánh giá, chất lượng retrieval, trải nghiệm sản phẩm. Mỗi nhiệm vụ có tiêu chí nghiệm thu cụ thể.

## 7. Câu hỏi ôn tập

### Câu 1

Persistence có thay thế backup không?

A. Không  
B. Có  
C. Chỉ với HNSW  
D. Chỉ khi có JSONB  

**Đáp án:** A

**Giải thích:** Vẫn có các tình huống xóa và hỏng dữ liệu.

### Câu 2

`supabase db reset` có thể làm gì với bản ghi đã insert?

A. Không thay đổi  
B. Xóa và dựng lại DB local  
C. Tự backup cloud  
D. Chỉ xóa embeddings  

**Đáp án:** B

**Giải thích:** Reset là quy trình destructive trong local stack.

### Câu 3

Kiểm soát quyền retrieval cần kiểm ở đâu?

A. CSS  
B. Tên query  
C. Backend/database  
D. Số chiều vector  

**Đáp án:** C

**Giải thích:** Truy xuất không được vượt quyền xem tài liệu.

### Câu 4

Reranking thường đặt ở đâu?

A. Trước khi có chunk  
B. Trong npm install  
C. Trong schema parser  
D. Sau bước lấy ứng viên retrieval  

**Đáp án:** D

**Giải thích:** Reranker đánh giá lại candidate list.

### Câu 5

Để đo chất lượng retrieval cần gì?

A. Query có nhãn relevance  
B. Chỉ số lượng Docker images  
C. Chỉ SQL migration  
D. Chỉ UUID  

**Đáp án:** A

**Giải thích:** Đánh giá có nhãn mới cho metric ý nghĩa.

## 8. Tổng kết

Giữ dữ liệu an toàn, xác định giới hạn của bản demo và thiết kế bước tiếp theo trước khi triển khai cho người dùng thật. Hoàn thành phần thực hành và trả lời được các câu hỏi là đạt yêu cầu của bài.
