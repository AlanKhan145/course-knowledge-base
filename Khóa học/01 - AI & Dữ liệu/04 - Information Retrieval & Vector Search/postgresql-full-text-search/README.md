# KHÓA HỌC — PostgreSQL Full-Text Search từ cơ bản đến ứng dụng

**Ngôn ngữ:** Tiếng Việt  
**Trọng tâm:** tìm kiếm toàn văn trong cơ sở dữ liệu PostgreSQL, từ phép so khớp chuỗi tới ứng dụng tìm kiếm có ranking, highlight và gợi ý sửa chính tả.  
**Đối tượng:** người học đã biết SQL cơ bản; có thể dùng Docker và một SQL editor.

## 1. Mục tiêu sau khóa học

Sau khóa học, người học có thể giải thích pipeline parser → dictionary → lexeme → index, viết truy vấn FTS trên dữ liệu nhiều bảng, tạo chỉ mục GIN, đánh giá ranking, tổ chức materialized view, triển khai fallback với trigram và thiết kế Search API có tham số.

## 2. Lộ trình bài học

| STT | Bài học | Nội dung |
| --- | --- | --- |
| 01 | [Từ tìm kiếm chuỗi đến FTS](bai-hoc/01-tong-quan-va-tim-kiem-chuoi.md) | `LIKE`, `ILIKE`, regex, tổng quan |
| 02 | [`tsvector`, token và từ điển](bai-hoc/02-tsvector-va-tu-dien.md) | Lexeme, stemming, stop word, `unaccent` |
| 03 | [`tsquery` và truy vấn kiểu web](bai-hoc/03-tsquery-va-toan-tu.md) | Boolean, phrase, prefix, `@@` |
| 04 | [Tài liệu nhiều trường](bai-hoc/04-tai-lieu-da-truong.md) | `setweight`, nối vector |
| 05 | [Xếp hạng và highlight](bai-hoc/05-xep-hang-va-highlight.md) | `ts_rank`, `ts_rank_cd`, `ts_headline` |
| 06 | [GIN, GiST và hiệu năng](bai-hoc/06-chi-muc-gin-gist-va-hieu-nang.md) | Generated column, `EXPLAIN` |
| 07 | [Materialized view nhiều bảng](bai-hoc/07-materialized-view-da-nguon.md) | `UNION ALL`, index, refresh |
| 08 | [`pg_trgm` và gợi ý](bai-hoc/08-pg-trgm-va-goi-y-chinh-ta.md) | Trigram, `ts_stat`, suggestion |
| 09 | [Tích hợp Spring Boot](bai-hoc/09-tich-hop-spring-boot.md) | Search API, UI, an toàn |
| 10 | [Đánh giá và mở rộng](bai-hoc/10-thiet-ke-va-danh-gia.md) | Chất lượng, lỗi, hướng nâng cấp |

Mỗi bài có mục tiêu, giải thích kỹ thuật, code, ví dụ, thực hành, **5 câu trắc nghiệm kèm đáp án và giải thích**.

## 3. Bài thực hành và project

- [Lab 01 — Chạy PostgreSQL FTS](thuc-hanh/lab-01-chay-postgres.md): Docker + SQL + refresh.
- [Project 01 — Tìm kiếm phim/trích dẫn](thuc-hanh/project-01-search-api.md): blueprint ứng dụng Spring Boot.
- [Lab 02 — Áp dụng vào tìm món ăn](thuc-hanh/lab-02-ung-dung-mon-an.md): bài chuyển giao cho thư viện công thức.
- [Thư viện thuật ngữ](tai-lieu/thu-vien-thuat-ngu.md): bảng tra cứu nhanh.

## 4. Chạy demo

```bash
docker compose up -d
docker compose exec db psql -U fts_user -d fts
```

Database demo: `fts`, host `localhost:5433`, user `fts_user`, password `dev_only_change_me` (chỉ dùng local). Chạy câu SQL trong `sql/01-truy-van-mau.sql` bằng DBeaver hoặc `psql`. `sql/00-khoi-tao.sql` được chạy tự động khi **tạo volume lần đầu**, còn `sql/02-mon-an-demo.sql` là bài tập tùy chọn.

> **An toàn:** không tái sử dụng password demo trên hệ thống công khai. `docker compose down -v` xóa hẳn dữ liệu trong volume demo. Không chạy script khởi tạo trong database đang chứa dữ liệu thật.

## 5. Cấu trúc thư mục

```text
Khoa_hoc_PostgreSQL_Full_Text_Search/
├── README.md
├── compose.yaml
├── bai-hoc/
│   ├── 01-...md ... 10-...md
├── sql/
│   ├── 00-khoi-tao.sql
│   ├── 01-truy-van-mau.sql
│   └── 02-mon-an-demo.sql
├── thuc-hanh/
│   ├── lab-01-chay-postgres.md
│   ├── project-01-search-api.md
│   └── lab-02-ung-dung-mon-an.md
└── tai-lieu/
    └── thu-vien-thuat-ngu.md
```

## 6. Phạm vi kiến thức

Phần cốt lõi bám theo quy trình PostgreSQL Full-Text Search với dữ liệu trích dẫn/phim, chỉ mục, gợi ý và giao diện Spring Boot. Lab món ăn là **bài tập áp dụng thêm** cho bối cảnh xây dựng ứng dụng tìm món ăn. Code SQL được biên soạn thành bộ demo độc lập; không khẳng định tái tạo chính xác repository của người trình bày. Đây là hướng dẫn thực hành, không phải benchmark hay cam kết hiệu suất production.

**Tài liệu API chính thức:** [PostgreSQL Full Text Search](https://www.postgresql.org/docs/current/textsearch.html), [pg_trgm](https://www.postgresql.org/docs/current/pgtrgm.html), [Docker Postgres image](https://hub.docker.com/_/postgres).
