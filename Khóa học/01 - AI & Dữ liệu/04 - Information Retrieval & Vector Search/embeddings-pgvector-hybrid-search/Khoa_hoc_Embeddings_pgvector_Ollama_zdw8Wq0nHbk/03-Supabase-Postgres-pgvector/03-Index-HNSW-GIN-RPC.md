# Chỉ mục HNSW, GIN và hàm match_chunks

> **Tóm tắt:** Tạo chỉ mục tìm kiếm vector và từ khóa, đồng thời xây RPC SQL để tìm top-k chunk theo cosine distance.

## 1. Mục tiêu học tập

- Phân biệt HNSW với GIN.
- Dùng toán tử `<=>` trong SQL.
- Giải thích tham số của hàm `match_chunks`.

## 2. HNSW và cosine distance

HNSW (Hierarchical Navigable Small World) là approximate-nearest-neighbor index. Khi nhiều vector được lưu, nó giúp tìm ứng viên gần query mà không nhất thiết duyệt toàn bộ. Trong pgvector, định nghĩa:

```sql
create index chunks_embedding_hnsw_idx
on public.chunks using hnsw (embedding vector_cosine_ops);
```

Đặt `vector_cosine_ops` khi truy vấn sắp xếp theo `<=>`. ANN có trade-off tốc độ–độ chính xác; trên dữ liệu nhỏ chưa chắc nhanh hơn exact scan. Không khẳng định latency cụ thể mà chưa benchmark.

## 3. GIN cho full-text và metadata

```sql
create index chunks_fts_gin_idx
  on public.chunks using gin (fts);
create index chunks_metadata_gin_idx
  on public.chunks using gin (metadata);
```

GIN là loại index phù hợp các toán tử tìm trên tsvector/JSONB. Truy vấn `fts @@ to_tsquery('english','data & center')` cần cả hai lexeme. JSONB `metadata @> '{"source":"demo.md"}'` hữu ích khi lọc tài liệu theo nguồn. Index không tự tạo ra từ đồng nghĩa.

## 4. Hàm retrieval gọi qua Supabase

```sql
create or replace function public.match_chunks(
  query_embedding extensions.vector(1024),
  match_count integer default 5
)
returns table (id bigint, content text, metadata jsonb, similarity double precision)
language sql stable set search_path = public, extensions
as $$
  select c.id, c.content, c.metadata,
         1 - (c.embedding <=> query_embedding) as similarity
  from public.chunks c
  order by c.embedding <=> query_embedding
  limit least(greatest(match_count,1),50);
$$;
```

`match_chunks` được gọi bằng RPC từ client Supabase. `match_count` giới hạn số dòng; `similarity` là $1-\text{cosine distance}$. Trong production cần phân quyền phù hợp, RLS, giới hạn tài nguyên và kiểm tra security definer/invoker.

## 5. Thực hành và tự kiểm tra

Trong SQL Editor, chạy `select indexname,indexdef from pg_indexes where tablename='chunks';`. Sau khi insert dữ liệu, thử `select count(*)` và xem query plan bằng `EXPLAIN`. **Lưu ý:** index có thể không được planner chọn với bảng rất nhỏ.

## 6. Câu hỏi ôn tập

### Câu 1

Index nào dùng cho ANN vector?

A. GIN  
B. B-tree  
C. HNSW  
D. HASH  

**Đáp án:** C

**Giải thích:** HNSW được thiết kế cho tìm hàng xóm gần.

### Câu 2

Index nào phù hợp full-text?

A. HNSW  
B. BRIN nhất thiết  
C. Vector only  
D. GIN  

**Đáp án:** D

**Giải thích:** GIN hỗ trợ tsvector/FTS.

### Câu 3

`1 - (embedding <=> query)` là?

A. Cosine similarity  
B. Số ID  
C. FTS rank  
D. Số byte  

**Đáp án:** A

**Giải thích:** `<=>` trả cosine distance.

### Câu 4

Hàm RPC nhận gì?

A. Image và URL  
B. Vector truy vấn và số lượng kết quả  
C. Duy nhất mật khẩu  
D. Một file Docker  

**Đáp án:** B

**Giải thích:** Hàm lấy top-k theo vector query.

### Câu 5

HNSW bảo đảm ranking chính xác tuyệt đối ở mọi cấu hình?

A. Có  
B. Chỉ trên 1024 chiều  
C. Không, là ANN  
D. Khi có GIN  

**Đáp án:** C

**Giải thích:** Approximate search đổi tốc độ với recall.

## 7. Tổng kết

Tạo chỉ mục tìm kiếm vector và từ khóa, đồng thời xây RPC SQL để tìm top-k chunk theo cosine distance. Hoàn thành phần thực hành và trả lời được các câu hỏi là đạt yêu cầu của bài.
