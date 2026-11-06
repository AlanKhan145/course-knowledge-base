# Lab tổng hợp: từ JSON đến searchable knowledge base

> **Tóm tắt:** Tự hoàn thành pipeline chạy local, có checkpoints, lỗi thường gặp và sản phẩm nộp cuối.

## 1. Mục tiêu học tập

- Dựng mới một local knowledge base.
- Chạy và kiểm chứng ingest, FTS, semantic.
- Bảo toàn dữ liệu khi dừng và khởi động lại stack.

## 2. Mục tiêu và sơ đồ

Tạo một project local sử dụng `Supabase CLI + Docker + PostgreSQL + pgvector` để lưu 6 chunk ví dụ. Python đọc JSON và nhờ Ollama tạo Qwen3 embeddings. PostgreSQL cung cấp cả FTS và semantic retrieval. Không cần frontend hay chat generation ở lab này.

## 3. Bước 1 — Khởi tạo và migration

```bash
mkdir pgvector-lab
cd pgvector-lab
npm install supabase --save-dev
npx supabase init
npx supabase migration new init_chunks
```

Dán nội dung `tai-nguyen/schema.sql` vào tệp mới trong `supabase/migrations/`, sau đó:

```bash
npx supabase start
npx supabase status
```

**Checkpoint A:** Studio truy cập được, `public.chunks` và index hiển thị. Tạo migration **trước** `start` lần đầu. Nếu đã chạy sai thứ tự, tham khảo `db reset` nhưng chỉ khi xác nhận không cần giữ dữ liệu.

## 4. Bước 2 — Model, Python và .env

```bash
ollama pull qwen3-embedding:0.6b
python -m venv .venv
# Windows: .venv\Scripts\Activate.ps1
# Linux/macOS: source .venv/bin/activate
pip install -r tai-nguyen/requirements.txt
```

Tạo `.env` ở thư mục project, đặt `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY` từ `supabase status` và tên model. Không thay bằng anon/publishable key do RLS đang bật và không có policy công khai.

**Checkpoint B:** `ollama list` có model; thử `len(ollama.embed(...).embeddings[0]) == 1024`.

## 5. Bước 3 — Ingest và search

```bash
python tai-nguyen/ingest.py
python tai-nguyen/search.py
```

**Checkpoint C:** `select count(*) from public.chunks` ≥ 6; xem content/metadata; `search.py` in kết quả FTS và semantic. Ghi số bản ghi trước và sau, không chạy ingest lặp nếu chưa chấp nhận duplicate.

## 6. Bước 4 — Kiểm tra persistence

Dùng `npx supabase stop`, sau đó `npx supabase start`. Chạy lại `select count(*)` và semantic search **mà không chạy lại ingest**.

**Checkpoint D:** row cũ còn, `id` và metadata không đổi. Thử nghiệm chỉ đúng trong cùng local project và không thực hiện `db reset`, xóa Docker volume hay xóa dữ liệu stack.

## 7. Báo cáo lỗi và deliverable

| Triệu chứng | Kiểm tra | Cách sửa cơ bản |
| --- | --- | --- |
| Docker không chạy | `docker ps` | Bật Docker Desktop |
| Supabase API từ chối | `supabase status` | Kiểm tra URL/key local |
| Ollama không kết nối | `ollama list`/service | Bật Ollama, đúng port |
| Invalid vector dimension | `len(embedding)` | Khớp model và vector(1024) |
| RLS từ chối request | Key/policy | Chỉ dùng key backend phù hợp |
| Chạy ingest sinh trùng | `count(*)` | Thiết kế upsert/dedup |

**Nộp bài:** migration SQL, `.py` chạy được, dữ liệu JSON, ảnh/ghi chú kết quả top-5, bảng test persistence. Không nộp `.env` thật.

## 8. Thực hành và tự kiểm tra

Thực hiện toàn bộ A→D. Tạo 1 file report Markdown ghi lệnh đã chạy, đường dẫn nguồn dữ liệu, số hàng và ảnh minh họa. **Definition of Done:** start/stop không làm mất các chunk đã nạp; hai truy vấn đều hoạt động.

## 9. Câu hỏi ôn tập

### Câu 1

Khi nào nên tạo migration cho lab mới?

A. Trước lần start đầu  
B. Sau khi xóa mọi DB  
C. Không cần migration  
D. Chỉ khi có LLM  

**Đáp án:** A

**Giải thích:** CLI áp migrations khi dựng stack mới.

### Câu 2

Lệnh nào dùng để kiểm tra persistence mà không reset?

A. supabase db reset  
B. supabase stop/start  
C. rm volumes  
D. ollama rm  

**Đáp án:** B

**Giải thích:** Stop/start phân biệt với reset dữ liệu.

### Câu 3

Nếu schema vector(1024) nhưng embedding 2560?

A. Vẫn insert  
B. Tự crop ngẫu nhiên  
C. Kiểm tra lại model/schema  
D. Bỏ primary key  

**Đáp án:** C

**Giải thích:** Kích thước phải phù hợp.

### Câu 4

Tệp nào không được đưa vào báo cáo công khai?

A. migration sql  
B. sample JSON  
C. Screenshot không có key  
D. `.env` có secret key  

**Đáp án:** D

**Giải thích:** Phải bảo vệ credentials.

### Câu 5

Bước nào chứng minh semantic search hoạt động?

A. Nhận được kết quả RPC match_chunks  
B. Có file markdown  
C. Đổi theme Studio  
D. Chỉ chạy Docker  

**Đáp án:** A

**Giải thích:** RPC cần trả chunk và similarity phù hợp schema.

## 10. Tổng kết

Tự hoàn thành pipeline chạy local, có checkpoints, lỗi thường gặp và sản phẩm nộp cuối. Hoàn thành phần thực hành và trả lời được các câu hỏi là đạt yêu cầu của bài.
