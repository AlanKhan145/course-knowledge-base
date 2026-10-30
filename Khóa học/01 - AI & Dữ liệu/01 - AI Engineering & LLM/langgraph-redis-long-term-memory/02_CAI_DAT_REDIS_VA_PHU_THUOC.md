# Bài 02: Thiết lập Redis và môi trường LangGraph

## 1. Tóm tắt

Hệ thống cần một Redis có khả năng lưu dữ liệu bền vững và hỗ trợ các chỉ mục mà thư viện tích hợp LangGraph sử dụng. Python sẽ chạy graph, Redis lưu checkpoint và bộ nhớ dài hạn, còn mô hình ngôn ngữ được gọi thông qua API.

## 2. Mục tiêu học tập

- Cấu hình Redis bằng Docker Compose và kiểm tra kết nối.
- Cài các thư viện Python cần thiết cho LangGraph, OpenAI và Redis.
- Phân biệt Redis thông thường với những khả năng tìm kiếm/index được tích hợp hỗ trợ.
- Khởi tạo `RedisSaver` và `RedisStore` với phương thức `setup()`.

## 3. Các thành phần cần chuẩn bị

| Thành phần | Nhiệm vụ |
| --- | --- |
| Docker / Docker Compose | Chạy dịch vụ Redis mà không cần cài thủ công trong hệ điều hành |
| Redis có hỗ trợ search/index | Lưu và lập chỉ mục dữ liệu ứng dụng |
| Python | Chạy mã LangGraph |
| `langgraph` | Xây dựng và vận hành đồ thị tác nhân |
| `langgraph-checkpoint-redis` | Cung cấp `RedisSaver` và `RedisStore` |
| `langchain-openai` | Gọi mô hình OpenAI qua `ChatOpenAI` |
| OpenAI API key | Xác thực khi gọi mô hình (không đưa lên Git) |

## 4. Khởi động Redis bằng Docker Compose

Tạo tệp `compose.yaml` trong thư mục thực hành:

```yaml
services:
  redis:
    image: redis/redis-stack-server:latest
    ports:
      - "127.0.0.1:6379:6379"
    volumes:
      - redis_data:/data

volumes:
  redis_data:
```

Đây là **cấu hình minh họa cho môi trường cục bộ**. Trong triển khai thực tế nên cố định phiên bản image đã kiểm thử, cấu hình xác thực/TLS và không mở cổng Redis công khai. Tùy phiên bản Redis được dùng, khả năng Search/JSON có thể tích hợp sẵn hoặc được cung cấp bởi Redis Stack.

Khởi động:

```bash
docker compose up -d
```

Kiểm tra container:

```bash
docker compose ps
```

Kiểm tra kết nối Redis:

```bash
docker compose exec redis redis-cli ping
```

Kết quả mong đợi: `PONG`. Dấu hiệu máy chủ chấp nhận TCP cho biết dịch vụ đã khởi động; vẫn cần kiểm tra các lệnh và quyền truy cập ở phía ứng dụng.

## 5. Cài đặt môi trường Python

Tạo virtual environment và kích hoạt theo hệ điều hành đang dùng:

```bash
python -m venv .venv
```

Linux/macOS:

```bash
source .venv/bin/activate
```

Windows PowerShell:

```powershell
.venv\Scripts\Activate.ps1
```

Cài thư viện:

```bash
python -m pip install langgraph langgraph-checkpoint-redis langchain-openai
```

Khóa API và tên mô hình nên được lấy từ biến môi trường:

```bash
export OPENAI_API_KEY="your-secret-key"
export OPENAI_MODEL="your-supported-chat-model"
```

Windows PowerShell:

```powershell
$env:OPENAI_API_KEY="your-secret-key"
$env:OPENAI_MODEL="your-supported-chat-model"
```

Tên mô hình phải là mô hình mà tài khoản API của bạn có quyền sử dụng. Không đưa API key vào code, notebook chia sẻ công khai hoặc tài liệu Git.

## 6. Khởi tạo hai cơ chế lưu trữ

`RedisSaver` quản lý checkpoint của graph. `RedisStore` quản lý các mục dữ liệu dài hạn theo `namespace` và `key`.

```python
from langgraph.checkpoint.redis import RedisSaver
from langgraph.store.redis import RedisStore

REDIS_URL = "redis://localhost:6379"

with RedisSaver.from_conn_string(REDIS_URL) as checkpointer:
    checkpointer.setup()

    with RedisStore.from_conn_string(REDIS_URL) as store:
        store.setup()

        namespace = ("user-001", "memories")
        store.put(namespace, "name", {"value": "Bob"})
        item = store.get(namespace, "name")
        print(item.value if item else None)
```

Hai câu gọi `setup()` dùng để tạo các cấu trúc/chỉ mục cần thiết cho từng cơ chế. Chúng là **bước khởi tạo hạ tầng**; không nên hiểu chúng như lệnh tự động trích xuất và ghi nhớ mọi lời người dùng nói.

Lưu ý: `from_conn_string(...)` trong ví dụ trả về context manager. Nếu đóng khối `with` rồi tiếp tục gọi graph dùng kết nối đã đóng, ứng dụng có thể báo lỗi. Vì vậy, vòng đời kết nối phải bao trùm thời gian thực thi graph hoặc được quản lý trong tầng ứng dụng phù hợp.

## 7. Khắc phục sự cố phổ biến

| Hiện tượng | Điều cần kiểm tra |
| --- | --- |
| `Connection refused` | Redis đã chạy chưa, cổng 6379 có đúng không, ứng dụng có chạy trong container khác không? |
| `redis-cli ping` không trả `PONG` | Container và cấu hình Redis, nhật ký dịch vụ |
| Lỗi liên quan đến tìm kiếm/chỉ mục | Bản Redis có cung cấp khả năng Search/JSON mà thư viện cần không? |
| Lỗi import `langgraph.checkpoint.redis` | Đã cài `langgraph-checkpoint-redis` trong đúng môi trường Python chưa? |
| Lỗi API model | Biến môi trường, quyền truy cập mô hình và quota API |
| Dữ liệu mất khi khởi động lại | Volume bền vững và cách cấu hình lưu trữ Redis |

## 8. Thực hành ngắn

1. Chạy Redis bằng Compose và kiểm tra `PONG`.
2. Tạo namespace `("user-demo", "memories")` và lưu `{"value": "cà phê"}` với key `favorite_drink`.
3. Dùng `store.get(...)` để đọc lại dữ liệu.
4. Khởi động lại ứng dụng Python, sau đó kiểm tra dữ liệu vẫn có thể truy xuất từ Redis.

## 9. Câu hỏi ôn tập

**Câu 1.** Lệnh nào kiểm tra nhanh Redis đang phản hồi?

A. `docker compose stop`  
B. `docker compose exec redis redis-cli ping`  
C. `python --version`  
D. `git status`

**Đáp án:** B. **Giải thích:** `PING` giúp xác minh kết nối Redis ở mức lệnh.

**Câu 2.** Vì sao cần `setup()` khi khởi tạo Redis backend?

A. Để huấn luyện LLM.  
B. Để tự tạo người dùng trên hệ điều hành.  
C. Để nạp toàn bộ lịch sử chat.  
D. Để thiết lập các chỉ mục/cấu trúc lưu trữ backend cần.

**Đáp án:** D. **Giải thích:** Thiếu các cấu trúc này có thể khiến thao tác backend thất bại.

**Câu 3.** Thành phần nào cung cấp class `RedisSaver`?

A. `langgraph-checkpoint-redis`  
B. Docker Compose  
C. `jupyter`  
D. `git`

**Đáp án:** A. **Giải thích:** Đây là gói tích hợp Redis cho cơ chế persistence của LangGraph.

**Câu 4.** Cách quản lý OpenAI API key phù hợp nhất là gì?

A. Ghi thẳng trong file sẽ commit lên Git.  
B. Chèn vào prompt của mọi người dùng.  
C. Đặt ở biến môi trường hoặc secret manager.  
D. Công khai trong tài liệu Markdown.

**Đáp án:** C. **Giải thích:** Tách secrets khỏi mã nguồn giảm nguy cơ lộ thông tin xác thực.

**Câu 5.** `RedisStore` chủ yếu phục vụ mục đích nào?

A. Quản lý Docker image.  
B. Lưu dữ liệu người dùng có thể tái sử dụng giữa nhiều thread.  
C. Thay thế API của LLM.  
D. Tạo tài khoản Google.

**Đáp án:** B. **Giải thích:** Store chứa các mục ký ức theo key/namespace, độc lập với checkpoint từng thread.

## 10. Tổng kết

Redis là lớp lưu trữ; LangGraph là lớp điều phối. Trước khi thiết kế hành vi ghi nhớ, hãy bảo đảm Redis hoạt động, các package cài đúng và `RedisSaver` cùng `RedisStore` được khởi tạo đầy đủ.
