# Bài 12 — Đồ án tổng kết: DocSearch end-to-end, kiểm thử và vận hành

## 1. Đề bài

Xây dựng **Airflow DocSearch** chạy local: PostgreSQL 16 + pgvector, Ollama embedding `nomic-embed-text`, Python ingest từ các URL tài liệu Airflow, truy vấn cosine Top-k, HNSW, Django UI có source links. Phần Hybrid Search RRF và trả lời RAG được xem là mở rộng, đánh giá riêng. Mục đích là tự triển khai một pipeline hữu dụng, không chỉ copy các lệnh.

## 2. Yêu cầu chức năng

| ID | Điều kiện nghiệm thu |
| --- | --- |
| F01 | `docker compose up -d --build` tạo PostgreSQL + Ollama |
| F02 | Extension `vector` bật ở `vector_db` và bảng có `vector(768)` |
| F03 | Ingest URL hợp lệ, bỏ noise và chia chunk giữ nguồn |
| F04 | Re-ingest một URL không tăng bản ghi lỗi thời |
| F05 | API `/api/search/?q=...` trả Top-5 có URL và similarity |
| F06 | UI có ô nhập, loading/error, snippet và liên kết mở tài liệu |
| F07 | Có HNSW index, explain plan và so sánh với exact |
| F08 | Có nhật ký thực nghiệm với 5–10 câu hỏi tự gán nhãn |

Yêu cầu phi chức năng: không commit `.env`, dữ liệu không xóa khi restart, HTML trích xuất không được render tùy tiện, API giới hạn độ dài query, có hướng dẫn cài đặt được từ máy mới.

## 3. Milestone triển khai

### 3.1. Môi trường + schema

Tạo `Dockerfile`, `compose.yaml`, `.env`, `init.sql`; khởi động và kiểm tra extension, bảng. **Checkpoint:** `SELECT COUNT(*) FROM document_chunks` chạy dù chưa có dữ liệu.

### 3.2. Embedding + dữ liệu

Kiểm tra `len(embedding)=768`, chọn các trang tài liệu đang tồn tại, chạy `python ingest.py`, xác nhận số URL và chunk. **Checkpoint:** mỗi kết quả có title, source_url, content, chunk index.

### 3.3. Retrieval + hiệu năng

Chạy `python search.py "How to install Airflow?"`; kiểm chứng title và URL đúng. Tạo HNSW index và dùng `EXPLAIN`. **Checkpoint:** ghi lại thời gian đo thực tế và số hàng, không kết luận hiệu năng chỉ bằng dữ liệu 10 trang.

### 3.4. Django + demo

Chạy webserver, thực hiện các truy vấn `pip`, `Docker`, `LocalExecutor`; chụp các màn hình chứng minh kết quả, xử lý lỗi và link nguồn. Chỉ gắn nhãn đúng khi đã đọc nội dung gốc.

## 4. Mẫu bộ kiểm thử chất lượng

Tạo file ghi chú `evaluation.md` hoặc CSV với cột `query`, `expected_url_or_topic`, `top1`, `hit_at_5`, `comment`. Bộ câu hỏi tối thiểu:

1. `How to install Airflow with Docker?`
2. `How to configure Airflow?`
3. `What is LocalExecutor?`
4. `Where to install Python dependencies?`
5. `What is the difference between executor and scheduler?`
6. Một câu hỏi hoàn toàn ngoài phạm vi Airflow.

Chỉ chấm được câu nào khi trang trả lời tương ứng **thực sự đã được ingest**; nếu chưa, đánh dấu `not-in-corpus` thay vì phạt thuật toán. `Hit@5` trên một query = 1 nếu có ít nhất một tài liệu liên quan ở Top-5, ngược lại 0. Điểm trung bình trên tập đo được tính:

$$
\mathrm{Hit@5}=\frac{\text{số query có tài liệu liên quan trong Top-5}}{\text{số query đánh giá hợp lệ}}
$$

Thử sai chính tả, dùng mô tả gián tiếp hoặc chỉ tên lệnh. Quan sát khác biệt giữa semantic-only và hybrid trong phần mở rộng. Không sử dụng số 5.4 ở demo như benchmark áp dụng cho bộ dữ liệu của bạn; thang điểm và kỹ thuật xếp hạng có thể khác.

## 5. Runbook: vận hành và xử lý sự cố

| Sự cố | Kiểm tra và hành động |
| --- | --- |
| PostgreSQL không kết nối | `docker compose ps`, `logs postgres`, port/password/DB |
| `CREATE EXTENSION` thất bại | Kiểm tra image `pgvector/pgvector` và kết nối đúng DB |
| Ollama API từ chối | `docker compose logs ollama`, `ollama list`, port 11434 |
| Empty table | Kiểm tra URLs, HTTP errors, `init.sql`, transaction commit |
| Vector dimension mismatch | Đo `len` và model tag, re-embed nếu đổi model |
| Query chậm | `EXPLAIN ANALYZE`, index, volume dữ liệu, cache, ANN params |
| Độ liên quan kém | Content cleaning, chunking, query labels, model, hybrid |
| Django lỗi DB | Cấu hình `DATABASES`, `db_table`, quyền, schema |

Sao lưu cơ bản (đọc kỹ đường dẫn và quyền truy cập trước khi dùng):

```bash
docker compose exec -T postgres pg_dump -U rag -d vector_db > vector_db_backup.sql
# Restore chỉ vào database được chuẩn bị sẵn, tránh ghi đè ngoài ý muốn:
# cat vector_db_backup.sql | docker compose exec -T postgres psql -U rag -d vector_db
```

Backup mẫu không thay thế quy trình sao lưu và kiểm thử phục hồi trong production.

## 6. Bảo mật trước khi triển khai thật

- Chỉ publish port DB/Ollama trên loopback khi lab; production thường không expose trực tiếp.
- Dùng secret management; `.env` chỉ là ví dụ phát triển, không commit vào Git.
- Áp dụng auth, per-user/tenant row filtering trước retrieval, phân quyền với dữ liệu riêng tư.
- Chặn SSRF bằng danh sách domain cho phép nếu API nhận URL crawl từ người dùng; chống redirects tới mạng nội bộ.
- Giới hạn tần suất API, timeout, concurrency và kích thước nội dung.
- Sử dụng HTTPS, log không chứa credentials, kiểm tra license/robots của trang nguồn.
- Đánh giá prompt injection ở bước RAG và lọc kết quả theo quyền trước khi tạo context.

## 7. Thang chấm đồ án

| Hạng mục | Điểm |
| --- | ---: |
| Compose + DB + schema đúng | 20 |
| Ingest cập nhật ổn định, metadata đầy đủ | 25 |
| Retrieval, SQL, HNSW và đo thực nghiệm | 25 |
| Django UI, API, xử lý lỗi và source links | 20 |
| README/runbook và bảo mật cơ bản | 10 |
| **Tổng** | **100** |

**Deliverables:** repository dự án, README chạy từ đầu, SQL schema, `urls.txt`, ingest/search scripts, web UI, ảnh/screenrecord demo, báo cáo kiểm thử ngắn. **Definition of Done:** người khác có thể chạy lại được trên môi trường mới mà không cần đoán tham số.

## 8. Tổng kết

Một hệ thống search/RAG tốt cần cả dữ liệu đúng, khả năng tái nạp, source links, hiệu năng đo được và kiểm soát bảo mật. Demo thành công chỉ là bước đầu của sản phẩm vận hành được.

## 9. Câu hỏi ôn tập

### Câu 1

Definition of Done của đồ án nhấn mạnh điều gì?

A. Chỉ cần UI đẹp  
B. Người khác có thể dựng và chạy lại mà không phải đoán cấu hình  
C. Chỉ cần Ollama chạy  
D. Không cần kiểm thử retrieval  

**Đáp án:** B  
**Giải thích:** Khả năng tái lập là điều kiện quan trọng của một dự án kỹ thuật hoàn chỉnh.

### Câu 2

Nếu câu hỏi không có trang đáp án trong corpus, nên đánh giá thế nào?

A. Mặc định hệ thống sai  
B. Gắn nhãn not-in-corpus và tách khỏi phép đo phù hợp  
C. Tự tăng score  
D. Tạo đường dẫn giả  

**Đáp án:** B  
**Giải thích:** Không thể đánh giá khả năng tìm trang chưa được ingest như một lỗi retrieval thông thường.

### Câu 3

Biện pháp nào giúp giảm nguy cơ lộ password database?

A. Commit `.env` lên Git  
B. Không commit `.env`, dùng secrets và quyền tối thiểu  
C. Hiển thị password trong UI  
D. Đặt mật khẩu trong tên table  

**Đáp án:** B  
**Giải thích:** Credentials phải được quản lý riêng và không xuất hiện trong source public.

### Câu 4

Lệnh nào tạo bản SQL dump trong demo?

A. pg_dump  
B. pgvector_dump  
C. ollama save  
D. django runserver  

**Đáp án:** A  
**Giải thích:** `pg_dump` là công cụ backup logical database PostgreSQL.

### Câu 5

Trước khi chấm hiệu năng HNSW, cần làm gì?

A. Chạy đúng một query trên 3 dòng  
B. Đo tập dữ liệu và câu hỏi thực, so exact baseline  
C. Giả định HNSW luôn nhanh hơn  
D. Xóa tất cả index khác  

**Đáp án:** B  
**Giải thích:** Hiệu năng và chất lượng ANN phụ thuộc quy mô, planner, phần cứng và tham số.

