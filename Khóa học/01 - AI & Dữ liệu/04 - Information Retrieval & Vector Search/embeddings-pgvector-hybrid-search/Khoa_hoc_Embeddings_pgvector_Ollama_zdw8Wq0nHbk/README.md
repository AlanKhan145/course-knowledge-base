# Khóa học thực hành: Xây dựng Knowledge Base với PostgreSQL, pgvector, Supabase và Ollama

> **Mục tiêu đầu ra:** Tạo một kho lưu trữ các `chunk` có thể truy xuất bằng SQL và tìm kiếm ngữ nghĩa, chạy trên máy cá nhân, giữ dữ liệu sau khi tắt chương trình Python.

## 1. Thông tin khóa học

- **Trình độ:** Đã biết Python cơ bản và SQL cơ bản là lợi thế; bài học cung cấp đủ lệnh để bắt đầu.
- **Công nghệ:** Python, PostgreSQL, extension `vector` (pgvector), Supabase CLI, Docker, Ollama, Qwen3-Embedding-0.6B.
- **Dữ liệu thực hành:** Một bộ `chunk` ví dụ về doanh thu, báo cáo quý, trung tâm dữ liệu. Không phải dữ liệu tài chính xác thực.
- **Video tham chiếu:** [How to store your chunks?](https://www.youtube.com/watch?v=zdw8Wq0nHbk).
- **Trình bày:** Mỗi module là thư mục; mỗi bài học là file `.md` riêng. Phần `tai-nguyen/` cung cấp mã chạy được.

## 2. Cấu trúc thư mục và thứ tự học

| Module | Chủ đề | Kết quả học tập |
| --- | --- | --- |
| 00 | Bắt đầu | Cài đặt môi trường và xác định lộ trình |
| 01 | Chunking và bài toán lưu trữ | Thiết kế `content`/`metadata`, hiểu vì sao JSON chưa đủ |
| 02 | Embedding và semantic similarity | Hiểu vector, cosine, TF-IDF và retrieval |
| 03 | PostgreSQL/Supabase/pgvector | Chạy DB cục bộ, tạo migration, bảng và index |
| 04 | Ollama và Qwen3 | Sinh embedding 1024 chiều, so sánh câu |
| 05 | Ingestion và retrieval | Nhập chunk, tìm full-text và semantic search |
| 06 | Lab tổng hợp | Chạy end-to-end, kiểm tra persistence, debug |
| 07 | Phụ lục | Thuật ngữ, đánh giá và hướng phát triển |
| tai-nguyen | Code và dữ liệu mẫu | `.sql`, `.py`, `.json`, `requirements.txt`, `.env.example` |

## 3. Kết quả cần nộp

1. Docker/Supabase local đang chạy, truy cập được Studio.
2. PostgreSQL có bảng `public.chunks` với `content`, `metadata`, `embedding` và cột `fts`.
3. Tạo embedding với `qwen3-embedding:0.6b` và xác nhận độ dài **1024**.
4. Nạp ít nhất 5 chunk vào PostgreSQL và truy xuất lại qua Supabase client.
5. So sánh một truy vấn `full-text` với truy vấn `semantic` và giải thích chênh lệch.
6. Dừng/khởi động lại stack mà dữ liệu vẫn còn (không dùng `db reset`).

## 4. Làm nhanh từ mã đi kèm

> **Lưu ý:** Thực hiện trong môi trường phát triển cục bộ. Mã dùng khóa bí mật Supabase ở **backend**; tuyệt đối không nhúng vào frontend.

```bash
# Cài Docker Desktop + Node.js + Ollama trước.
# Trong thư mục project riêng của bạn:
npm install supabase --save-dev
npx supabase init
# Sao chép tai-nguyen/schema.sql vào một tệp trong supabase/migrations/
# (tên tệp cần bắt đầu bằng timestamp hoặc tạo trước bằng: npx supabase migration new init_chunks)
npx supabase start
npx supabase status
ollama pull qwen3-embedding:0.6b
python -m venv .venv
# Windows PowerShell: .venv\Scripts\Activate.ps1
# macOS/Linux: source .venv/bin/activate
pip install -r tai-nguyen/requirements.txt
```

Sao chép `tai-nguyen/.env.example` thành `.env`, điền URL và khóa **secret/service-role local** từ `npx supabase status`; sau đó:

```bash
python tai-nguyen/ingest.py
python tai-nguyen/search.py
```

Chạy các lệnh ở **thư mục project gốc**, với `tai-nguyen/` là một thư mục con. Các bài chi tiết giải thích từng bước, lỗi, checkpoint và câu hỏi ôn tập.

## 5. Những điều cần phân biệt

- **Đã trình bày trong video:** embedding, Supabase local, pgvector, vector 1024 chiều, bảng chunks, HNSW/cosine, GIN full-text, Ollama Qwen3, nhập dữ liệu, tìm kiếm và lưu bền.
- **Bổ sung để thực hành độc lập:** mã Python/SQL hoàn chỉnh, tổ chức migration, ví dụ JSON tự tạo, kiểm tra kích thước vector, quyền truy cập, tiêu chí thử nghiệm.
- **Không phải nội dung thực nghiệm đã kiểm chứng:** benchmark độ trễ, accuracy, thứ hạng chất lượng tìm kiếm. Bạn phải tự đo trên dữ liệu thực tế.
- **Hybrid search và reranking:** được giới thiệu như hướng phát triển, **chưa** được triển khai/đánh giá trong bài học từ video này.

## 6. Liên kết tham khảo kỹ thuật

- [Supabase local development](https://supabase.com/docs/guides/local-development)
- [Supabase migrations](https://supabase.com/docs/guides/local-development/database-migrations)
- [Supabase pgvector](https://supabase.com/docs/guides/database/extensions/pgvector)
- [pgvector repository](https://github.com/pgvector/pgvector)
- [Qwen3 Embedding repository](https://github.com/QwenLM/Qwen3-Embedding)
- [Ollama qwen3-embedding](https://ollama.com/library/qwen3-embedding)

**Thứ tự khuyến nghị:** đọc file `00-Bat-dau/01-Lo-trinh-va-chuan-bi.md` trước rồi học theo tên module tăng dần.
