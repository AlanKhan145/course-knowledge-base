# Bài 04 — Bật extension vector, thiết kế bảng và kiểm thử SQL

## 1. Tổng quan lab

`pgvector` phải được cài trong PostgreSQL server **và được bật tại từng database**. Image Docker đã chứa extension trên server; câu lệnh `CREATE EXTENSION` chỉ kích hoạt extension cho `vector_db`.

## 2. Mục tiêu

- Chạy `CREATE EXTENSION IF NOT EXISTS vector` đúng database.
- Tạo bảng chunk chứa văn bản, metadata và `vector(768)`.
- Thực hiện các phép insert, inspect, tìm kiếm vector đơn giản, xóa test data.
- Nhận diện lỗi extension không tồn tại và mismatch chiều.

## 3. Cấu hình SQL

Tạo file `init.sql`:

```sql
CREATE EXTENSION IF NOT EXISTS vector;

CREATE TABLE IF NOT EXISTS document_chunks (
    id BIGSERIAL PRIMARY KEY,
    source_url TEXT NOT NULL,
    title TEXT NOT NULL,
    chunk_index INTEGER NOT NULL CHECK (chunk_index >= 0),
    content TEXT NOT NULL,
    embedding VECTOR(768) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    CONSTRAINT document_chunk_unique UNIQUE (source_url, chunk_index)
);

CREATE INDEX IF NOT EXISTS document_chunks_url_idx
    ON document_chunks (source_url);
```

Chạy:

```bash
docker compose exec -T postgres psql -U rag -d vector_db < init.sql
```

Hoặc trong DBeaver mở SQL Editor tại `vector_db` và chạy nội dung. Đọc lại:

```sql
SELECT extname, extversion FROM pg_extension WHERE extname = 'vector';
SELECT column_name, udt_name FROM information_schema.columns
WHERE table_name = 'document_chunks';
```

`udt_name` của cột có thể hiển thị là `vector`. Kiểu `vector(768)` giới hạn kích thước đầu vào; chọn 768 vì embedding mặc định của Nomic v1.5, nhưng phải xác nhận qua API trước khi ingest. Nếu dùng model có kích thước khác, phải thiết kế và migrate bảng tương ứng.

## 4. Thử nhanh trên bảng ba chiều

Để học cú pháp vector mà chưa cần Ollama, dùng bảng phụ `toy_vectors`:

```sql
CREATE TABLE IF NOT EXISTS toy_vectors (
    id BIGSERIAL PRIMARY KEY,
    label TEXT NOT NULL,
    embedding VECTOR(3) NOT NULL
);
TRUNCATE toy_vectors RESTART IDENTITY;
INSERT INTO toy_vectors(label, embedding) VALUES
  ('x', '[1,0,0]'),
  ('y', '[0,1,0]'),
  ('x-plus', '[0.9,0.1,0]');
SELECT label, embedding <=> '[1,0,0]' AS cosine_distance
FROM toy_vectors
ORDER BY embedding <=> '[1,0,0]' LIMIT 3;
```

Dự kiến `x` đứng đầu, tiếp theo là `x-plus`; `y` vuông góc nên xa hơn. Vector ba chiều chỉ dùng minh họa, **không** insert vào cột `vector(768)` của bảng thực.

## 5. Thiết kế khóa chống trùng

Cặp `(source_url, chunk_index)` được đánh UNIQUE để re-ingest có thể cập nhật đoạn đã tồn tại. Khi tài liệu thay đổi số chunk, các chunk cũ vượt quá số lượng mới cần được xóa trong một transaction theo URL; nếu không, tìm kiếm có thể trả thông tin đã lỗi thời. Trong dự án multi-tenant cần thêm khóa phạm vi dữ liệu như `tenant_id` và policy quyền truy cập.

## 6. Chẩn đoán lỗi

| Lỗi | Nguyên nhân thường gặp | Cách kiểm tra |
| --- | --- | --- |
| `type "vector" does not exist` | Chưa `CREATE EXTENSION` tại database đang dùng | `SELECT current_database()` |
| `extension "vector" is not available` | Server image chưa có pgvector | Kiểm tra image/tag Docker |
| `expected 768 dimensions` | Model trả sai kích thước | `len(embedding)` |
| `relation does not exist` | Nhầm schema/database hoặc chưa chạy script | `\dt` trong `psql`, refresh GUI |

## 7. Checklist lab

- [ ] Extension `vector` xuất hiện trong `pg_extension`.
- [ ] Bảng `document_chunks` có cột `embedding vector(768)`.
- [ ] SQL trên `toy_vectors` trả thứ tự hợp lý.
- [ ] Có thể giải thích tại sao cần `source_url`, `title`, `chunk_index`.

## 8. Tổng kết

Database schema quyết định khả năng tái nạp, kiểm soát nguồn và truy vấn chính xác. Luôn verify extension, kích thước vector và tính duy nhất trước khi xây pipeline.

## 9. Câu hỏi ôn tập

### Câu 1

`CREATE EXTENSION vector` cần chạy ở đâu?

A. Trên từng database cần dùng extension  
B. Chỉ trên máy người dùng  
C. Chỉ một lần cho mọi database trong cluster  
D. Trong file requirements.txt  

**Đáp án:** A  
**Giải thích:** Extension được bật ở cấp database của PostgreSQL.

### Câu 2

Vì sao đặt `UNIQUE(source_url, chunk_index)`?

A. Để ép tất cả trang một URL  
B. Để tránh chèn lại cùng vị trí chunk khi re-ingest  
C. Để index tự động HNSW  
D. Để hạn chế số chiều vector  

**Đáp án:** B  
**Giải thích:** Cặp khóa định danh một chunk thuộc một tài liệu cụ thể.

### Câu 3

Dữ liệu nào có thể insert vào `vector(3)`?

A. `[1,2]`  
B. `[1,2,3]`  
C. `[1,2,3,4]`  
D. Chuỗi HTML bất kỳ  

**Đáp án:** B  
**Giải thích:** Kiểu vector(3) yêu cầu đúng ba phần tử.

### Câu 4

Thông báo `type "vector" does not exist` thường chỉ ra điều gì?

A. Chưa bật extension trong database  
B. Ollama chưa pull model  
C. Django chưa chạy server  
D. Máy không có GPU  

**Đáp án:** A  
**Giải thích:** Database không nhận biết kiểu vector khi extension chưa được kích hoạt.

### Câu 5

Khi chunk count của một URL giảm sau khi cập nhật, cần chú ý gì?

A. Các chunk cũ có thể còn và phải dọn  
B. Vector tự co về một chiều  
C. HNSW tự xóa file HTML  
D. PostgreSQL sẽ tự đổi URL  

**Đáp án:** A  
**Giải thích:** Upsert theo khóa không tự xóa những chunk cũ không còn trong nguồn.

