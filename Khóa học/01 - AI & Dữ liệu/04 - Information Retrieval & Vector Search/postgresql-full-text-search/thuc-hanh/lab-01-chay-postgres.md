# Lab 01 — Chạy PostgreSQL FTS từ dữ liệu mẫu

## 1. Tổng quan

Lab này khởi chạy PostgreSQL qua Docker Compose, nạp hai nguồn dữ liệu trích dẫn/phim và thử tìm kiếm FTS, phân hạng, highlight và gợi ý gõ sai. Tất cả tài khoản/password dưới đây chỉ dành cho môi trường máy cá nhân.

## 2. Chuẩn bị

- Docker Engine có hỗ trợ Compose (`docker compose`).
- SQL client: DBeaver hoặc `psql`.
- Docker port `5433` còn trống ở máy host.

## 3. Các bước

**Bước 1.** Mở thư mục gốc khóa học, chạy:

```bash
docker compose up -d
```

Image ví dụ `postgres:16`; khi volume database trống, PostgreSQL tự chạy `sql/00-khoi-tao.sql` trong `/docker-entrypoint-initdb.d/`. Nếu thư mục volume đã chứa dữ liệu thì SQL init **không được tự chạy lại**.

**Bước 2.** Kết nối DBeaver:

| Thuộc tính | Giá trị demo |
| --- | --- |
| Host | `localhost` |
| Port | `5433` |
| Database | `fts` |
| User | `fts_user` |
| Password | `dev_only_change_me` |

Hoặc vào `psql` bên trong container:

```bash
docker compose exec db psql -U fts_user -d fts
```

**Bước 3.** Kiểm tra dữ liệu và tìm kiếm:

```sql
SELECT source_type, source_id, title FROM search_documents;
SELECT source_type, title
FROM search_documents
WHERE search_doc @@ websearch_to_tsquery('english','Albert');
```

**Bước 4.** Mở và chạy từng câu trong `sql/01-truy-van-mau.sql` bằng SQL editor. Kiểm tra thứ tự kết quả, độ khớp, gợi ý và execution plan.

**Bước 5.** Thêm một nguồn dữ liệu:

```sql
INSERT INTO quotes(author, content)
VALUES ('Demo Author', 'Something valuable can emerge from small ideas');

-- Materialized view chưa tự có bản ghi vừa thêm.
REFRESH MATERIALIZED VIEW CONCURRENTLY search_documents;
REFRESH MATERIALIZED VIEW CONCURRENTLY search_terms;
```

**Bước 6.** Xác nhận được tìm thấy bản ghi mới và từ vựng mới:

```sql
SELECT title FROM search_documents
WHERE search_doc @@ plainto_tsquery('english','valuable');
SELECT word FROM search_terms WHERE word % 'valuabl';
```

## 4. Checkpoint

- [ ] Container PostgreSQL khởi động thành công.
- [ ] Kết nối bằng DBeaver hoặc `psql`.
- [ ] Tìm thấy kết quả trong `search_documents`.
- [ ] Biết vì sao cần `REFRESH`.
- [ ] Chạy được gợi ý từ `search_terms`.

## 5. Debug và lưu ý

- **Port 5433 bị chiếm:** đổi phần cổng host trong `compose.yaml` rồi kết nối bằng cổng mới.
- **Không thấy bảng:** kiểm tra log `docker compose logs db` và volume đã có trước đó hay chưa.
- **SQL init không chạy lại:** thử chạy file SQL bằng DBeaver trên database mới; hoặc nếu chắc chắn chỉ chứa dữ liệu demo, dùng `docker compose down -v` để xóa volume *và toàn bộ dữ liệu trong volume*, rồi khởi động lại.
- **Chỉ mục không hiện trong EXPLAIN:** với dataset nhỏ, planner có thể chọn Seq Scan hợp lý.

## 6. Deliverable

Nộp ảnh hoặc log của: (1) truy vấn tìm kiếm, (2) bảng ranking, (3) kết quả sau refresh, (4) một câu giải thích về GIN và materialized view.
