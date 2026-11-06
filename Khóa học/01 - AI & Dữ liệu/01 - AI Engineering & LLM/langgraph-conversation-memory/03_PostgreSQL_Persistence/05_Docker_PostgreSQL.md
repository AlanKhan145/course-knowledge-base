# Bài 05 — Dựng PostgreSQL bằng Docker Compose

## 1. Tổng quan

State của `InMemorySaver` bị mất khi chương trình tắt. Để một chatbot khôi phục hội thoại khi backend restart, cần một kho lưu trữ bền vững. PostgreSQL là cơ sở dữ liệu quan hệ phù hợp cho checkpointer của LangGraph, còn Docker Compose giúp chuẩn hóa môi trường cài đặt để thực hành.

## 2. Mục tiêu

- Kiểm tra Docker Engine đang chạy.
- Tạo `compose.yaml` có PostgreSQL, volume và healthcheck.
- Giải thích cổng kết nối, username, password, database, volume, container restart.
- Kiểm chứng PostgreSQL thực sự hoạt động trước khi chạy Python.

## 3. Chuẩn bị

Cài Docker Desktop hoặc Docker Engine có Compose. Tại terminal:

```bash
docker --version
docker compose version
docker info
```

Lệnh `docker info` sẽ thất bại nếu daemon chưa chạy, dù client đã cài. Trên Windows, mở Docker Desktop và bảo đảm chế độ Linux containers hoạt động.

## 4. Tạo thư mục và Compose

```bash
mkdir langgraph-memory-lab
cd langgraph-memory-lab
```

Tạo `compose.yaml` cho **môi trường local**, không dùng mật khẩu ví dụ này trên server công khai:

```yaml
services:
  db:
    image: postgres:16
    container_name: langgraph-memory-db
    restart: unless-stopped
    environment:
      POSTGRES_USER: app
      POSTGRES_PASSWORD: app_password_local_only
      POSTGRES_DB: langgraph_memory
    ports:
      - "127.0.0.1:5432:5432"
    volumes:
      - pg_memory_data:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U app -d langgraph_memory"]
      interval: 5s
      timeout: 5s
      retries: 10

volumes:
  pg_memory_data:
```

`127.0.0.1:5432:5432` chỉ publish cổng vào localhost để giảm nguy cơ lộ database trong bài thực hành. Nếu cổng `5432` đã được ứng dụng khác dùng, thay cổng phía **trái** thành `5442`, giữ cổng bên phải `5432`, rồi dùng `localhost:5442` trong URI.

`pg_memory_data` là **named volume**, giữ file dữ liệu khi container bị dừng/xóa thông thường. Không xóa volume nếu muốn giữ hội thoại.

## 5. Chạy và kiểm tra

```bash
docker compose up -d
docker compose ps
docker compose logs db --tail 40
```

Khi container healthy, thử truy cập bằng `psql` chạy *bên trong* container:

```bash
docker compose exec db psql -U app -d langgraph_memory -c "SELECT current_database(), current_user;"
```

Kỳ vọng cột `current_database` là `langgraph_memory`, `current_user` là `app`. Nếu tên container hoặc database khác do bạn sửa Compose, sửa câu lệnh tương ứng.

## 6. Connection string

Trong Python trên **máy host**:

```dotenv
POSTGRES_URI=postgresql://app:app_password_local_only@localhost:5432/langgraph_memory?sslmode=disable
```

Khi Python chạy trong **một container cùng Compose network**, host thường là `db`, không phải `localhost`:

```text
postgresql://app:app_password_local_only@db:5432/langgraph_memory?sslmode=disable
```

`sslmode=disable` chỉ dành cho kết nối local được kiểm soát; hệ thống public/remote nên cấu hình TLS thích hợp.

## 7. Các thao tác vòng đời

| Lệnh | Tác dụng |
| --- | --- |
| `docker compose stop` | Dừng container, volume còn |
| `docker compose start` | Chạy lại container đã có |
| `docker compose down` | Gỡ container/network, **không** xóa named volume mặc định |
| `docker compose down -v` | **Xóa cả named volume**, có nguy cơ mất toàn bộ checkpoint |
| `docker compose ps` | Xem trạng thái container |
| `docker compose logs db` | Xem log database |

Chủ động kiểm thử bằng `stop`/`start`, không dùng `down -v` trong lab persistence.

## 8. Debug

- Port already allocated: đổi host port, ví dụ `5442:5432`.
- Authentication failed: kiểm tra username/password và dữ liệu volume cũ. Đổi các biến `POSTGRES_*` sau khi volume đã khởi tạo **không tự đổi mật khẩu database hiện có**.
- Cannot connect: Docker daemon chưa chạy, container unhealthy, sai host, cổng hoặc firewall.
- Connection refused trong container Python: đừng dùng `localhost` trừ khi Postgres chạy trong chính container đó.

## 9. Deliverable và checklist

- [ ] File `compose.yaml` chạy được.
- [ ] `docker compose ps` hiện database healthy.
- [ ] `psql` trả về đúng DB/user.
- [ ] Biết connection URI của Python host và Python container.
- [ ] Không upload mật khẩu thật hoặc API key lên Drive.

## 10. Câu hỏi ôn tập

**Câu 1.** Thành phần nào giúp dữ liệu còn sau khi container bị thay thế?  
A. Named volume.  
B. `container_name`.  
C. `--version`.  
D. `ports`.  
**Đáp án: A.** Volume tách dữ liệu khỏi vòng đời container.

**Câu 2.** `5442:5432` có nghĩa gì?  
A. Docker dùng database 5442.  
B. Container mở cổng 5442 ra host 5432.  
C. Host truy cập 5442, container nghe 5432.  
D. Đây là cổng TCP cố định của LangGraph.  
**Đáp án: C.** Docker map host port vào container port.

**Câu 3.** Lệnh nguy hiểm nhất nếu muốn giữ data?  
A. `docker compose ps`.  
B. `docker compose down -v`.  
C. `docker compose logs db`.  
D. `docker compose stop`.  
**Đáp án: B.** `-v` xóa volume do Compose quản lý.

**Câu 4.** Python trong cùng Compose network thường dùng hostname nào?  
A. `127.0.0.1` của container Python.  
B. IP ngẫu nhiên nhập tay.  
C. `localhost` trên trình duyệt.  
D. Tên service `db`.  
**Đáp án: D.** Compose cung cấp DNS nội bộ theo tên service.

**Câu 5.** Vì sao cần healthcheck?  
A. Để biết Postgres sẵn sàng nhận kết nối, không chỉ container đã tạo.  
B. Để tự mã hóa API key.  
C. Để tự tạo LangGraph thread.  
D. Để tự tóm tắt history.  
**Đáp án: A.** Tiến trình chạy không đồng nghĩa database đã sẵn sàng.

## 11. Tổng kết

Docker Compose giúp tái lập môi trường Postgres. `pg_memory_data` giải quyết độ bền dữ liệu ở cấp database; LangGraph vẫn cần `PostgresSaver` để thực sự ghi và tải checkpoint.
