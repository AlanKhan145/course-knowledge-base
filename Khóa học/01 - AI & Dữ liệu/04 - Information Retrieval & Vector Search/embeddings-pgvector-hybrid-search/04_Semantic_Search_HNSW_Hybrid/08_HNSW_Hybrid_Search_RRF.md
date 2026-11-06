# Bài 08 — HNSW index và mở rộng Hybrid Search bằng RRF

## 1. Tóm tắt

Bảng vector nhỏ có thể dùng exact search bằng cách so sánh với mọi hàng. Khi dữ liệu tăng, HNSW là approximate nearest-neighbor index để tăng tốc truy vấn với đánh đổi nhất định về recall, bộ nhớ và tốc độ ghi. `Hybrid Search` kết hợp độ gần ngữ nghĩa với độ khớp keyword để cải thiện các câu hỏi chứa tên riêng, lệnh hoặc chuỗi chính xác.

## 2. Mục tiêu

- Tạo HNSW index với cosine operator class.
- Dùng `EXPLAIN (ANALYZE, BUFFERS)` để xem planner.
- Phân biệt ANN với exact search.
- Viết ví dụ `tsvector`/`tsquery` và hợp nhất kết quả qua Reciprocal Rank Fusion (RRF).

## 3. Tạo HNSW index

```sql
CREATE INDEX IF NOT EXISTS document_chunks_embedding_hnsw
ON document_chunks
USING hnsw (embedding vector_cosine_ops)
WITH (m = 16, ef_construction = 64);
```

- `vector_cosine_ops` phải tương ứng phép so `<=>`.
- `m` và `ef_construction` là thông số xây graph HNSW; giá trị trên minh họa một cấu hình phổ biến, chưa phải tối ưu.
- Tăng `ef_search` có thể cải thiện recall nhưng chậm hơn:

```sql
BEGIN;
SET LOCAL hnsw.ef_search = 100;
SELECT id, title FROM document_chunks
ORDER BY embedding <=> (SELECT embedding FROM document_chunks ORDER BY id LIMIT 1)
LIMIT 5;
COMMIT;
```

Ở dataset vài chục dòng, PostgreSQL có thể chọn sequential scan thay vì index do chi phí thấp; điều này không có nghĩa index hỏng. Trên dữ liệu lớn, so sánh thời gian p50/p95 cùng tập truy vấn, kiểm soát cache và tính recall@k so với exact baseline.

## 4. Xác định đường thực thi

```sql
EXPLAIN (ANALYZE, BUFFERS)
SELECT id, source_url FROM document_chunks
ORDER BY embedding <=> (SELECT embedding FROM document_chunks ORDER BY id LIMIT 1)
LIMIT 10;
```

`EXPLAIN ANALYZE` **thực thi** truy vấn; với SELECT demo thường an toàn. Bảng quá nhỏ hoặc query cấu trúc lạ có thể không dùng index. Không kết luận tốc độ chỉ dựa vào một lần chạy.

## 5. Full-text search trong PostgreSQL

Một trường hợp keyword search hữu ích: hỏi về tên `LocalExecutor`, lệnh `pip install`, hoặc tên file cụ thể. PostgreSQL có hàm full-text và GIN index:

```sql
ALTER TABLE document_chunks
ADD COLUMN IF NOT EXISTS search_tsv tsvector
GENERATED ALWAYS AS (to_tsvector('english', content)) STORED;
CREATE INDEX IF NOT EXISTS document_chunks_fts_idx
ON document_chunks USING gin (search_tsv);

SELECT id, title, ts_rank(search_tsv, plainto_tsquery('english','local executor')) AS score
FROM document_chunks
WHERE search_tsv @@ plainto_tsquery('english','local executor')
ORDER BY score DESC LIMIT 10;
```

Cấu hình `'english'` dành cho tài liệu Airflow tiếng Anh. Khi tìm tài liệu tiếng Việt cần cân nhắc tokenizer, dấu tiếng Việt và cấu hình full-text phù hợp; không mặc định English stemming dùng tốt cho mọi ngôn ngữ.

## 6. Hợp nhất hai bảng xếp hạng bằng RRF

Mỗi nhánh có thang điểm riêng: vector trả cosine distance, full-text trả `ts_rank`. Cộng trực tiếp hai điểm chưa chuẩn hóa dễ sai. RRF dựa trên **thứ hạng**, một cách khởi đầu dễ giải thích:

$$
\operatorname{RRF}(d) = \sum_{r \in \{semantic,keyword\}} \frac{1}{k + \operatorname{rank}_r(d)}
$$

Giá trị $k=60$ là heuristic thường gặp, không phải hằng số bắt buộc. Ví dụ chỉ minh họa cấu trúc SQL, thay `'[VECTORS...]'` bằng **tham số vector hợp lệ** từ driver trước khi chạy:

```sql
WITH sem AS (
 SELECT id, row_number() OVER (ORDER BY embedding <=> %s) AS r
 FROM document_chunks ORDER BY embedding <=> %s LIMIT 20
), kw AS (
 SELECT id, row_number() OVER
     (ORDER BY ts_rank(search_tsv, plainto_tsquery('english', %s)) DESC) AS r
 FROM document_chunks
 WHERE search_tsv @@ plainto_tsquery('english', %s)
 ORDER BY ts_rank(search_tsv, plainto_tsquery('english', %s)) DESC
 LIMIT 20
), fused AS (
 SELECT id, SUM(rrf) AS score FROM (
   SELECT id, 1.0/(60+r) AS rrf FROM sem
   UNION ALL
   SELECT id, 1.0/(60+r) AS rrf FROM kw
 ) t GROUP BY id
)
SELECT d.id, d.title, d.source_url, fused.score
FROM fused JOIN document_chunks d USING(id)
ORDER BY fused.score DESC LIMIT 10;
```

**Lưu ý:** ví dụ dùng placeholder `%s` theo Python/psycopg; truyền `query_vector` hai lần và `question` ba lần. Với một nhánh không tìm thấy kết quả, nhánh kia vẫn có thể đóng góp. Cần lọc quyền truy cập ngay trong **cả hai nhánh** thay vì lọc sau, để tránh lộ thông tin và sai thứ hạng.

## 7. Kiểm thử

Tạo nhóm query gồm tên chức năng đúng chính tả, mô tả lại ý nghĩa, và truy vấn chứa tên riêng. Đo Hit@5, Recall@5 hoặc MRR khi có nhãn chuẩn. So sánh `semantic-only`, `keyword-only`, `hybrid-RRF` trên cùng tập; không tự cho rằng hybrid luôn tốt hơn.

## 8. Tổng kết

HNSW giải quyết hiệu năng tìm lân cận gần đúng, còn Hybrid Search kết hợp hai tín hiệu xếp hạng. Hai khái niệm độc lập: có thể hybrid exact hoặc semantic-only HNSW.

## 9. Câu hỏi ôn tập

### Câu 1

HNSW thuộc nhóm thuật toán nào?

A. ANN tìm láng giềng gần xấp xỉ  
B. Model sinh văn bản  
C. Thuật toán mã hóa password  
D. Trình biên dịch SQL  

**Đáp án:** A  
**Giải thích:** HNSW là approximate nearest-neighbor index.

### Câu 2

Operator class nào phù hợp với `<=>`?

A. vector_l2_ops  
B. vector_cosine_ops  
C. vector_ip_ops  
D. tsvector_ops  

**Đáp án:** B  
**Giải thích:** Cosine distance cần cosine operator class khi tạo index.

### Câu 3

Vì sao PostgreSQL có thể không dùng HNSW trên bảng rất nhỏ?

A. Index hỏng chắc chắn  
B. Sequential scan có chi phí dự kiến thấp hơn  
C. Ollama chưa tải model  
D. Database chỉ có một user  

**Đáp án:** B  
**Giải thích:** Planner chọn cách thực thi dựa trên chi phí ước lượng.

### Câu 4

Lý do RRF hữu ích khi kết hợp keyword và semantic là gì?

A. Không cần embedding  
B. Tổng hợp theo thứ hạng thay vì cộng điểm không đồng thang  
C. Tự sinh câu trả lời  
D. Luôn bảo đảm Recall@10 = 100%  

**Đáp án:** B  
**Giải thích:** RRF tránh phải so trực tiếp các thang score khác nhau.

### Câu 5

Lọc tenant trong hybrid search nên đặt ở đâu?

A. Chỉ ở bước render UI  
B. Bên trong từng nhánh truy vấn theo quyền  
C. Chỉ sau khi log kết quả  
D. Không cần khi đã có HNSW  

**Đáp án:** B  
**Giải thích:** Mỗi nhánh cần lọc quyền đúng để tránh kết quả trái phép và sai thứ hạng.

