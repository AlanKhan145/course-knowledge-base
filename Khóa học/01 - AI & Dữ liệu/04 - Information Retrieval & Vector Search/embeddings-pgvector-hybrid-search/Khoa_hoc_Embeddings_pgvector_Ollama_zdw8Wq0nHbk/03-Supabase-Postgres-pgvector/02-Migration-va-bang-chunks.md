# Tạo migration, schema và bảng chunks

> **Tóm tắt:** Khởi tạo extension vector, tạo bảng có content/metadata/embedding và cột full-text tự sinh.

## 1. Mục tiêu học tập

- Tạo migration có thể tái áp dụng.
- Giải thích kiểu JSONB, vector(1024), tsvector.
- Kiểm tra schema và phát hiện lỗi lệch dimension.

## 2. Quản lý schema bằng migration

Migration là file SQL versioned giúp tái tạo schema nhất quán. Thay vì tạo bảng thủ công nhiều lần trong Studio, lưu SQL vào `supabase/migrations/<timestamp>_init_chunks.sql`.

```bash
npx supabase migration new init_chunks
# Mở file mới trong supabase/migrations/ và dán nội dung tai-nguyen/schema.sql
npx supabase start
# Nếu stack đã khởi chạy trước khi thêm migration, dùng npx supabase db reset
# CHỈ ở môi trường dev có thể xóa dữ liệu.
```

Một migration mới sau `start` có thể áp dụng theo workflow CLI phù hợp; để dựng từ đầu an toàn, tạo migration trước khi khởi chạy stack lần đầu.

## 3. Giải thích SQL cốt lõi

```sql
create schema if not exists extensions;
create extension if not exists vector with schema extensions;
set search_path to public, extensions;

create table if not exists public.chunks (
  id bigint generated always as identity primary key,
  content text not null,
  metadata jsonb not null default '{}'::jsonb,
  embedding extensions.vector(1024) not null,
  fts tsvector generated always as
    (to_tsvector('english', content)) stored
);
```

`id` là primary key tự sinh. `content` là đoạn văn. `metadata` là JSONB. `embedding` bắt buộc có 1024 chiều, phù hợp model Qwen3-Embedding-0.6B. `fts` là cột `tsvector` do PostgreSQL tính từ `content` để tối ưu lexical search. File `tai-nguyen/schema.sql` còn có check không cho content rỗng, indices, RLS và RPC.

## 4. Kiểm tra bảng

Sau khi migrations chạy, mở Supabase Studio, xem `public.chunks` với `id`, `content`, `metadata`, `embedding`, `fts`. SQL:

```sql
select column_name, data_type, udt_name
from information_schema.columns
where table_schema='public' and table_name='chunks'
order by ordinal_position;
```

Nếu model sinh vector 768 chiều trong khi schema yêu cầu 1024, insert sẽ thất bại. Giải pháp: xác nhận model và output, không tự padding/truncate tùy tiện.

## 5. Thực hành và tự kiểm tra

Tạo migration từ file nguồn, khởi động database, liệt kê các cột. **Checkpoint:** nhìn thấy extension `vector` và bảng `public.chunks`. Lưu tên file migration vào README của project.

## 6. Câu hỏi ôn tập

### Câu 1

`metadata` dùng kiểu gì?

A. tsvector  
B. jsonb  
C. boolean  
D. uuid[]  

**Đáp án:** B

**Giải thích:** Metadata là dữ liệu JSON có thể truy vấn.

### Câu 2

`embedding vector(1024)` buộc điều gì?

A. 1024 hàng  
B. 1024 bảng  
C. Vector có 1024 chiều  
D. 1024 API keys  

**Đáp án:** C

**Giải thích:** Dimension ràng buộc độ dài của embedding.

### Câu 3

Cột `fts` được tạo từ đâu?

A. Ảnh  
B. ID  
C. Địa chỉ Docker  
D. Content  

**Đáp án:** D

**Giải thích:** to_tsvector xử lý nội dung content.

### Câu 4

Ưu điểm của migration?

A. Version hóa thay đổi schema  
B. Tự tăng accuracy mô hình  
C. Không cần SQL  
D. Tắt PostgreSQL  

**Đáp án:** A

**Giải thích:** Migration giúp theo dõi và tái tạo schema.

### Câu 5

Nếu vector sinh sai số chiều thì sao?

A. Tự luôn sửa  
B. Insert có thể báo lỗi  
C. FTS tăng tốc  
D. Query tự convert  

**Đáp án:** B

**Giải thích:** Cột vector(n) kiểm tra kích thước.

## 7. Tổng kết

Khởi tạo extension vector, tạo bảng có content/metadata/embedding và cột full-text tự sinh. Hoàn thành phần thực hành và trả lời được các câu hỏi là đạt yêu cầu của bài.
