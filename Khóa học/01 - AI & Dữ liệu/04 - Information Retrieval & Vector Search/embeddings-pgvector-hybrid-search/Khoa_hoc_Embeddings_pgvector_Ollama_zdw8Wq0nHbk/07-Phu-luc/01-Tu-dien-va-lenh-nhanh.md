# Từ điển thuật ngữ và bảng lệnh tra nhanh

> **Tóm tắt:** Hệ thống hóa các thuật ngữ, toán tử và lệnh thực hành giúp tự kiểm tra lỗi.

## 1. Mục tiêu học tập

- Tra cứu đúng các thuật ngữ cốt lõi.
- Phân biệt chức năng của lệnh CLI và toán tử SQL.
- Tìm nhanh bước kiểm tra lỗi thường gặp.

## 2. Từ điển

| Thuật ngữ | Định nghĩa ngắn |
| --- | --- |
| Chunk | Đơn vị văn bản được index và truy xuất |
| Breadcrumb | Vị trí phân cấp của đoạn trong tài liệu |
| Embedding | Vector số biểu diễn nội dung |
| pgvector | Extension `vector` trong PostgreSQL |
| HNSW | ANN index tìm vector gần |
| GIN | Index phù hợp với tsvector và JSONB |
| Full-text search | Tìm trên lexeme bằng tsvector/tsquery |
| Semantic retrieval | Tìm theo gần nghĩa trong không gian vector |
| Cosine similarity | Độ gần theo hướng vector |
| Ingestion | Đưa dữ liệu từ nguồn vào DB/index |
| Persistence | Dữ liệu được lưu bền qua phiên chương trình |
| RAG | Retrieval-Augmented Generation: dùng dữ liệu truy xuất hỗ trợ LLM |

## 3. Lệnh terminal

```bash
npx supabase init          # Khởi tạo local project
npx supabase start         # Start stack + migration khi tạo mới
npx supabase status        # URL và key local
npx supabase stop          # Dừng local stack
npx supabase migration new init_chunks  # Tạo migration
ollama pull qwen3-embedding:0.6b
ollama list
python tai-nguyen/ingest.py
python tai-nguyen/search.py
```

**Cẩn trọng:** `npx supabase db reset` xóa DB dev hiện tại rồi áp lại migration/seed.

## 4. SQL tra nhanh

```sql
select count(*) from public.chunks;
select id, metadata->>'title' from public.chunks;
select id, content from public.chunks
where fts @@ to_tsquery('english','data & center');
select id, content from public.chunks
where metadata @> '{"source":"demo.md"}'::jsonb;
```

Cosine operator `<=>`: **distance càng nhỏ càng gần**. Similarity dùng `1 - distance`. Query parameter của RPC là `query_embedding` (vector 1024) và `match_count` (số chunk).

## 5. Thực hành và tự kiểm tra

Tự tạo một thẻ ghi nhớ cho mỗi khái niệm và phân biệt 5 cặp: vector/metadata, cosine/distance, GIN/HNSW, full-text/semantic, stop/reset.

## 6. Câu hỏi ôn tập

### Câu 1

Tên extension pgvector trong SQL?

A. vector  
B. pgvector-server  
C. embeddings  
D. ann  

**Đáp án:** A

**Giải thích:** CREATE EXTENSION dùng tên vector.

### Câu 2

Metadata lưu kiểu gì trong khóa học?

A. PNG  
B. jsonb  
C. tsvector duy nhất  
D. string[] bắt buộc  

**Đáp án:** B

**Giải thích:** Bảng chunks có metadata jsonb.

### Câu 3

Từ khóa `data & center` dùng gì?

A. Similarity  
B. Docker filter  
C. FTS AND  
D. RLS policy  

**Đáp án:** C

**Giải thích:** & là phép AND trong tsquery.

### Câu 4

Cosine distance nhỏ hơn nghĩa là?

A. Ít liên quan hơn luôn  
B. Nhiều row hơn  
C. Nhiều token hơn  
D. Vector gần hơn  

**Đáp án:** D

**Giải thích:** Distance là đại lượng cần minimize.

### Câu 5

Muốn kiểm tra endpoint thật của local stack?

A. npx supabase status  
B. ollama pull  
C. pip list  
D. git log  

**Đáp án:** A

**Giải thích:** Status hiển thị cấu hình đang chạy.

## 7. Tổng kết

Hệ thống hóa các thuật ngữ, toán tử và lệnh thực hành giúp tự kiểm tra lỗi. Hoàn thành phần thực hành và trả lời được các câu hỏi là đạt yêu cầu của bài.
