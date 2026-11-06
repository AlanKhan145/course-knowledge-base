# Khóa học: PostgreSQL 16 + pgvector + Ollama + Django — Semantic Search & RAG

> Giáo trình thực hành tiếng Việt · dự án xuyên suốt: **Airflow DocSearch**  
> Hình thức: học từng bài Markdown, tự chạy code, hoàn thành checkpoint và câu hỏi trắc nghiệm.

## Mục tiêu của khóa học

Xây dựng một cơ sở dữ liệu có thể **tìm tài liệu theo ý nghĩa** ngay trong PostgreSQL, nạp embedding bằng Ollama cục bộ, dùng SQL cosine/HNSW để truy xuất và đưa kết quả lên giao diện Django. Sau khi hoàn thành bản chính, người học có thể thử nghiệm Hybrid Search và RAG tạo câu trả lời có trích dẫn.

## Trình tự học

| Module | Chủ đề | Bài học |
| --- | --- | --- |
| 01 | Nền tảng semantic search/RAG | 01. PostgreSQL + pgvector; 02. Embeddings + cosine + chunking |
| 02 | Triển khai database | 03. Docker PostgreSQL 16 + Ollama; 04. Extension, schema và SQL |
| 03 | Đưa tri thức vào database | 05. Ollama embeddings API; 06. Crawl, chunk, ingest Airflow docs |
| 04 | Search và tối ưu | 07. Cosine query SQL/Python; 08. HNSW và Hybrid Search RRF |
| 05 | Tạo web app | 09. Django ORM/pgvector; 10. Search API + UI |
| 06 | Mở rộng và tổng kết | 11. RAG + grounded generation; 12. Capstone + test/debug/security |

## Cấu trúc thư mục

```text
README.md
01_Nen_tang_RAG_va_Vector/
  01_PostgreSQL_pgvector_va_RAG.md
  02_Embedding_Cosine_Chunking.md
02_PostgreSQL16_Docker_pgvector/
  03_Docker_Compose_Postgres16_Ollama.md
  04_SQL_Extension_Schema_CRUD.md
03_Ollama_Crawl_Embedding/
  05_Ollama_Embedding_API.md
  06_Crawl_Chunk_Ingest_Python.md
04_Semantic_Search_HNSW_Hybrid/
  07_Cosine_Tim_kiem_SQL_Python.md
  08_HNSW_Hybrid_Search_RRF.md
05_Django_DocSearch/
  09_Django_ORM_pgvector.md
  10_Django_Search_API_UI.md
06_RAG_Capstone_Van_hanh/
  11_RAG_Context_Generation_Grounding.md
  12_Capstone_Test_Debug_Bao_mat.md
```

## Cài đặt cần có

- Docker + Docker Compose, Python 3, terminal, PostgreSQL client (tùy chọn DBeaver).
- Máy có thể tải model Ollama `nomic-embed-text`; không bắt buộc GPU cho thử nghiệm nhỏ.
- Kỹ năng nền: SQL cơ bản, Python, HTTP. Django được hướng dẫn từ đầu đến mức cần cho demo.

**Lộ trình chạy nhanh:** đọc bài 01–02 để hiểu kiến trúc; thực hiện bài 03–04 để khởi chạy database; chạy API Ollama ở bài 05; tạo `urls.txt`, `init.sql`, `ingest.py`, `search.py` bằng code trong bài 06–07; sau đó chạy Django theo bài 09–10. Bài 08 (Hybrid) và 11 (RAG) là mở rộng để tăng độ sâu, không phải điều kiện để demo semantic search cơ bản.

## Phạm vi và độ chính xác

- Các file Markdown đóng vai trò giáo trình, không phải bản phụ đề hay tóm tắt 9 phút.
- Bộ dữ liệu demo: tài liệu Apache Airflow công khai; chọn URL hợp lệ tại thời điểm thực hành. Khi video minh họa lưu khoảng 10 trang, đó là **số trang demo**, không đồng nghĩa đúng 10 chunk hoặc một benchmark về độ chính xác.
- Thông số `vector(768)` dành cho model Nomic trong lab, **phải kiểm tra dimensions** bằng code trước khi dùng; nếu đổi model, tái tạo embedding và schema.
- Mẫu password và cổng chỉ dành cho môi trường local, không đem nguyên cấu hình ra production.
- Các phần RRF/Hybrid, REST API tùy chỉnh và generative RAG là bài mở rộng trên nền workflow chính.

## Tài liệu chuẩn để tra cứu

- pgvector README: https://github.com/pgvector/pgvector
- pgvector Python/Django: https://github.com/pgvector/pgvector-python
- Ollama Embeddings API: https://docs.ollama.com/api/embed
- Ollama model: https://ollama.com/library/nomic-embed-text
- PostgreSQL 16 docs: https://www.postgresql.org/docs/16/
- Apache Airflow docs: https://airflow.apache.org/docs/
- Django docs: https://docs.djangoproject.com/

## Đầu ra kỳ vọng

Một ứng dụng web có ô tìm kiếm tự nhiên, Top-k tài liệu sắp hạng, similarity, snippet và link mở tài liệu gốc; có thể chứng minh bằng truy vấn về cài Airflow bằng Docker và LocalExecutor sau khi đã ingest trang tương ứng. Các bài đều có mục tiêu học tập, giải thích, code, checkpoint hoặc bài tập, phần ôn tập kèm đáp án.
