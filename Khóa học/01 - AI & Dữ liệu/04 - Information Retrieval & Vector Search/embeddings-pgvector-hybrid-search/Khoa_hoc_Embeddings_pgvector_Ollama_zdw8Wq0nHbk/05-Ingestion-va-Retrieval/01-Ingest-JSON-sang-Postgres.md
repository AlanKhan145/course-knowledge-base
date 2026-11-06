# Nạp chunk từ JSON vào Supabase PostgreSQL

> **Tóm tắt:** Kết nối Python với Supabase và Ollama để lưu từng chunk gồm content, metadata và vector đúng dimension.

## 1. Mục tiêu học tập

- Đọc file JSON chunks an toàn.
- Gọi embedding API và thực hiện insert.
- Kiểm tra bản ghi bằng SQL/Studio.

## 2. Cấu trúc dữ liệu đầu vào

Tệp `tai-nguyen/chunks.sample.json` chứa thuộc tính `chunks`, mỗi phần tử có `content` và `metadata`. Bộ dữ liệu này là ví dụ tự tạo để học. Khi dùng dữ liệu thực từ Markdown parser, cần giữ breadcrumb, source, section title và chunk index.

## 3. Kết nối và insert

Cài `pip install -r tai-nguyen/requirements.txt`. Tạo `.env` từ `.env.example` và điền `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY` theo `npx supabase status`. Chạy:

```bash
python tai-nguyen/ingest.py
```

Luồng chính của script:

```python
vec = ollama.embed(model=MODEL, input=chunk['content']).embeddings[0]
if len(vec) != 1024:
    raise ValueError('Embedding dimension mismatch')
supabase.table('chunks').insert({
    'content': chunk['content'],
    'metadata': chunk.get('metadata', {}),
    'embedding': vec
}).execute()
```

Dữ liệu vector dạng list Python số thực được client gửi cho API, PostgreSQL nhận dưới kiểu `vector(1024)`. RLS bật ở demo; khóa secret/service-role chạy **phía server** có quyền ghi. Không bao giờ đưa khóa này vào HTML/browser.

## 4. Đối chiếu dữ liệu sau insert

Mở Studio hoặc SQL Editor:

```sql
select id, left(content,80) as excerpt, metadata->>'title' as title
from public.chunks
order by id;
select count(*) from public.chunks;
```

Check metadata có `breadcrumb` và nội dung không rỗng. Script dùng `insert`, vì vậy chạy lại **sẽ tạo bản ghi trùng**; trong production nên dùng source key cố định, hash hoặc upsert với unique constraint và cập nhật bản ghi khi nguồn thay đổi.

## 5. Thực hành và tự kiểm tra

Sau khi chạy script, kiểm tra ít nhất 6 bản ghi demo. Truy vấn `metadata->>'source'`; xác minh một record có nội dung, metadata và vector. **Checkpoint:** Không có lỗi 401/403/400 hoặc dimension mismatch.

## 6. Câu hỏi ôn tập

### Câu 1

Ingestion có cần tạo embedding trước insert?

A. Có  
B. Không bao giờ  
C. Chỉ với file PDF  
D. Chỉ khi dùng RLS off  

**Đáp án:** A

**Giải thích:** Schema yêu cầu trường vector 1024 chiều.

### Câu 2

Khóa secret nên được dùng ở đâu?

A. Browser  
B. Backend  
C. GitHub README  
D. URL công khai  

**Đáp án:** B

**Giải thích:** Key quyền cao không được lộ phía client.

### Câu 3

Chạy lại script insert hiện tại có thể gây?

A. Xóa vector  
B. Reset index  
C. Dữ liệu trùng lặp  
D. Mất bảng  

**Đáp án:** C

**Giải thích:** Insert không có logic idempotency.

### Câu 4

`metadata->>'title'` trong SQL lấy gì?

A. JSON nguyên cột  
B. Vector length  
C. Row count  
D. Giá trị title dạng text  

**Đáp án:** D

**Giải thích:** `->>` trích field dạng văn bản.

### Câu 5

Lỗi dimension mismatch xử lý thế nào?

A. Kiểm tra model và schema  
B. Tự động padding zero  
C. Bỏ kiểm tra  
D. Đổi tên content  

**Đáp án:** A

**Giải thích:** Cần nhất quán đầu ra embedding và định nghĩa cột.

## 7. Tổng kết

Kết nối Python với Supabase và Ollama để lưu từng chunk gồm content, metadata và vector đúng dimension. Hoàn thành phần thực hành và trả lời được các câu hỏi là đạt yêu cầu của bài.
