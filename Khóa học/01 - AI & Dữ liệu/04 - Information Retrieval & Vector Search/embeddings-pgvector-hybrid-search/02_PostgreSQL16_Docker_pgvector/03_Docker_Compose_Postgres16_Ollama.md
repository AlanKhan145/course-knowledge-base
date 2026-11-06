# Bài 03 — Khởi chạy PostgreSQL 16 và Ollama bằng Docker Compose

## 1. Tổng quan lab

Thay vì cài PostgreSQL, extension và Ollama rời rạc trên máy, dùng Compose tạo hai service. Container PostgreSQL chạy pgvector; container Ollama sẽ tải model embedding. Dữ liệu database và cache model phải có volume để không mất khi tạo lại container.

## 2. Mục tiêu và chuẩn bị

Người học cần Docker Engine/Desktop, plugin `docker compose`, một terminal, Python 3, trình quản trị PostgreSQL như DBeaver hoặc `psql`. Kiểm tra:

```bash
docker --version
docker compose version
python --version
```

Trên Windows PowerShell có thể dùng `py -3 --version`. Port **5432** và **11434** trên máy host cần đang rảnh. Không dùng mật khẩu demo trong môi trường thật.

## 3. Cấu trúc thư mục

```text
pgvector-docsearch/
├── Dockerfile
├── compose.yaml
├── .env
├── requirements.txt
├── init.sql
├── urls.txt
├── ingest.py
└── search.py
```

Tạo `Dockerfile` sau. Đây là cách đơn giản hóa việc cài extension: kế thừa image `pgvector/pgvector` đã chứa PostgreSQL 16 và extension tương ứng. Nếu muốn tự xây từ `postgres:16`, cần cài đúng package `postgresql-16-pgvector` vào image trước khi khởi chạy.

```dockerfile
FROM pgvector/pgvector:0.8.7-pg16-bookworm
```

## 4. File `compose.yaml`

```yaml
services:
  postgres:
    build: .
    restart: unless-stopped
    environment:
      POSTGRES_USER: ${POSTGRES_USER}
      POSTGRES_PASSWORD: ${POSTGRES_PASSWORD}
      POSTGRES_DB: ${POSTGRES_DB}
    ports:
      - "127.0.0.1:5432:5432"
    volumes:
      - pgdata:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U $$POSTGRES_USER -d $$POSTGRES_DB"]
      interval: 5s
      timeout: 3s
      retries: 15

  ollama:
    image: ollama/ollama
    restart: unless-stopped
    ports:
      - "127.0.0.1:11434:11434"
    volumes:
      - ollama_data:/root/.ollama

volumes:
  pgdata:
  ollama_data:
```

File `.env` dùng **chỉ cho local development**:

```dotenv
POSTGRES_USER=rag
POSTGRES_PASSWORD=rag_dev_password
POSTGRES_DB=vector_db
DATABASE_URL=postgresql://rag:rag_dev_password@localhost:5432/vector_db
OLLAMA_URL=http://localhost:11434
EMBED_MODEL=nomic-embed-text
```

Thêm `.env` vào `.gitignore`. Chưa cần service Django trong Compose; app và các script chạy trực tiếp trên host để việc debug dễ hơn.

## 5. Khởi động và kiểm tra

```bash
docker compose up -d --build
docker compose ps
docker compose logs --tail=50 postgres
docker compose exec postgres psql -U rag -d vector_db -c "SELECT version();"
docker compose exec ollama ollama pull nomic-embed-text
```

Lệnh `docker compose ps` phải báo service `postgres` đã healthy; `ollama pull` chạy được khi service Ollama khởi động. Để thấy model:

```bash
docker compose exec ollama ollama list
```

Nếu chạy Python **trên host**, database URL dùng `localhost:5432` và Ollama dùng `localhost:11434`. Nếu chạy script **trong container cùng mạng Compose**, hostname là tên service `postgres` và `ollama`, không phải localhost.

## 6. Kết nối qua DBeaver

Chọn New Database Connection → PostgreSQL, nhập host `localhost`, port `5432`, database `vector_db`, user `rag`, password từ `.env`; nhấn Test Connection. Schema thường là `public`. PostgreSQL hệ thống và database demo là hai database khác nhau; phải tạo extension trong **vector_db**.

## 7. Gỡ lỗi và checkpoint

- `port is already allocated`: thay cổng host `15432:5432` và sửa connection string.
- `Connection refused`: xem `docker compose ps`, log và health check.
- `model not found`: chạy lại `ollama pull`.
- `docker compose down -v`: **xóa volume và dữ liệu**, chỉ dùng khi muốn làm lại hoàn toàn.

**Checkpoint:** kết nối `psql` được, Ollama liệt kê `nomic-embed-text`, PostgreSQL đã healthy. Chụp lại kết quả của `docker compose ps`.

## 8. Tổng kết

Compose tạo môi trường thực hành có thể lặp lại. Tách service, giữ volume và xác định đúng hostname sẽ tránh phần lớn lỗi cấu hình ban đầu.

## 9. Câu hỏi ôn tập

### Câu 1

Lệnh nào xây lại image và khởi chạy service ở chế độ nền?

A. docker ps -a  
B. docker compose up -d --build  
C. docker image ls  
D. psql --build  

**Đáp án:** B  
**Giải thích:** Compose `up -d --build` build image và khởi chạy service ở background.

### Câu 2

Chạy Python trên host thì dùng hostname database nào trong cấu hình hiện tại?

A. postgres  
B. localhost  
C. ollama  
D. db.internal  

**Đáp án:** B  
**Giải thích:** Cổng 5432 đã publish từ container ra host.

### Câu 3

Ý nghĩa volume `pgdata` là gì?

A. Chỉ lưu log tạm  
B. Lưu dữ liệu PostgreSQL qua vòng đời container  
C. Tự backup lên cloud  
D. Tăng kích thước embedding  

**Đáp án:** B  
**Giải thích:** Named volume giúp giữ dữ liệu khi container được tạo lại.

### Câu 4

Lệnh nào có thể xóa dữ liệu của volume khi làm lại môi trường?

A. docker compose ps  
B. docker compose down -v  
C. docker compose logs  
D. docker compose exec postgres bash  

**Đáp án:** B  
**Giải thích:** Tùy chọn `-v` yêu cầu Compose xóa volumes liên quan.

### Câu 5

Lệnh nào tải model embedding vào Ollama container?

A. pip install nomic-embed-text  
B. docker compose exec ollama ollama pull nomic-embed-text  
C. psql -c nomic  
D. docker volume pull nomic  

**Đáp án:** B  
**Giải thích:** `ollama pull` tải weights/model vào Ollama local.

