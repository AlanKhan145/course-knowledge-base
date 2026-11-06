# Bài 05 — Sinh embedding cục bộ bằng Ollama và `nomic-embed-text`

## 1. Tóm tắt

Ollama cung cấp HTTP API cục bộ để nạp model và sinh embedding. `nomic-embed-text` là **embedding model**, không dùng để soạn câu trả lời hội thoại. Việc chạy local giúp học cách tách tầng xử lý dữ liệu khỏi dịch vụ sinh câu trả lời, đồng thời tránh đưa tài liệu sang API bên thứ ba trong lab.

## 2. Mục tiêu học tập

- Xác nhận model đã được tải và Ollama API sẵn sàng.
- Gửi `POST /api/embed` với chuỗi hoặc mảng văn bản.
- Lấy `embeddings[0]` và kiểm tra 768 chiều.
- Xử lý timeout, lỗi HTTP, model chưa tải và input rỗng.

## 3. Kiểm tra HTTP API

Đảm bảo Compose đang chạy. Trên macOS/Linux hoặc Git Bash:

```bash
curl http://localhost:11434/api/tags
curl http://localhost:11434/api/embed \
  -H 'Content-Type: application/json' \
  -d '{"model":"nomic-embed-text","input":"search_document: Apache Airflow installation guide"}'
```

Trong PowerShell, `curl` có thể là alias; dùng `curl.exe` hoặc Python để tránh khác biệt cú pháp quoting. Kết quả chứa key `embeddings` là danh sách vector. Không nên in toàn bộ hàng trăm số lên terminal nếu chỉ cần biết số chiều.

## 4. Python client dùng `requests`

Tạo môi trường ảo:

```bash
python -m venv .venv
# Linux/macOS
source .venv/bin/activate
# Windows PowerShell
# .\.venv\Scripts\Activate.ps1
python -m pip install requests
```

Tạo file `embed_check.py`:

```python
import os
import requests

OLLAMA = os.getenv('OLLAMA_URL', 'http://localhost:11434').rstrip('/')
MODEL = os.getenv('EMBED_MODEL', 'nomic-embed-text')

def embed(text: str) -> list[float]:
    if not text.strip():
        raise ValueError('Không thể embed chuỗi rỗng')
    r = requests.post(
        f'{OLLAMA}/api/embed',
        json={'model': MODEL, 'input': text, 'truncate': False},
        timeout=180,
    )
    r.raise_for_status()
    vector = r.json()['embeddings'][0]
    if len(vector) != 768:
        raise ValueError(f'Sai số chiều: {len(vector)}, kỳ vọng 768')
    return vector

if __name__ == '__main__':
    v = embed('search_query: How to install Airflow?')
    print('Model:', MODEL, 'Dimensions:', len(v), 'First 5:', v[:5])
```

`truncate=False` buộc API trả lỗi nếu văn bản quá dài thay vì âm thầm cắt nội dung. Hãy rút ngắn chunk hoặc thiết kế chia nội dung phù hợp giới hạn của model. Nếu chạy batch, truyền `input` là danh sách chuỗi; mỗi phần tử có một vector tương ứng.

## 5. Embedding và chi phí vận hành

Embedding thường được tạo một lần cho mỗi chunk khi ingest; câu hỏi được nhúng mỗi lần truy vấn. Có thể cache embedding theo hash nội dung, nhưng phải đưa cả tên/phiên bản model và preprocessing vào cache key. Nếu sau này nâng cấp model, phải tạo lại embedding của tài liệu tương thích.

Trong trường hợp môi trường Ollama không có model, `ollama pull nomic-embed-text` tải model và lần chạy đầu có thể chậm hơn do nạp weights vào bộ nhớ. Các thông số latency phụ thuộc CPU/GPU, dung lượng RAM và văn bản; không dùng số liệu giả định.

## 6. Chẩn đoán lỗi

| Triệu chứng | Cách xử lý |
| --- | --- |
| `Connection refused` | Kiểm tra Compose, port 11434 và URL |
| HTTP 404 model | `docker compose exec ollama ollama list`, rồi `ollama pull` |
| Read timeout | Thử văn bản ngắn, xem log, tăng timeout hợp lý |
| `dimensions != 768` | Kiểm tra tag model và cấu hình bảng trước khi ingest |
| Văn bản quá dài | Chia chunk nhỏ hơn, tránh bật truncate âm thầm |

## 7. Bài tập và checkpoint

Gọi API cho ba câu tiếng Anh và ba câu tiếng Việt, chỉ ghi tên model, độ dài vector, thời gian xử lý và thông báo lỗi nếu có. Không kết luận model có độ chính xác tốt cho tiếng Việt chỉ dựa trên ba ví dụ; đánh giá retrieval cần bộ dữ liệu gán nhãn.

**Checkpoint:** script in ra `Dimensions: 768` và không phát sinh HTTP error. Đây là điều kiện tiên quyết trước khi chạy ingest.

## 8. Tổng kết

API `/api/embed` tạo vector, không trả câu trả lời ChatGPT. Cần theo dõi model ID, dimensions, timeout và cách tiền xử lý cho cả hai chiều ingest/query.

## 9. Câu hỏi ôn tập

### Câu 1

Endpoint hiện dùng để sinh embedding qua Ollama là gì?

A. POST /api/embed  
B. GET /api/chat  
C. POST /api/sql  
D. GET /api/vector-table  

**Đáp án:** A  
**Giải thích:** API `/api/embed` nhận model và input rồi trả embeddings.

### Câu 2

Vì sao kiểm tra `len(vector)` trước insert?

A. Để xóa log  
B. Để khớp schema `vector(768)`  
C. Để tăng RAM  
D. Để chuyển PostgreSQL thành MongoDB  

**Đáp án:** B  
**Giải thích:** Schema vector yêu cầu một số chiều cố định.

### Câu 3

`truncate: false` giúp phát hiện điều gì?

A. Nội dung vượt giới hạn input model  
B. Port PostgreSQL sai  
C. Index HNSW bị khóa  
D. Password database sai  

**Đáp án:** A  
**Giải thích:** API sẽ báo lỗi thay vì âm thầm cắt văn bản quá dài.

### Câu 4

Lệnh nào kiểm tra model trong Ollama container?

A. docker compose ps postgres  
B. docker compose exec ollama ollama list  
C. pip freeze  
D. psql -c SHOW MODEL  

**Đáp án:** B  
**Giải thích:** `ollama list` liệt kê các model Ollama đã tải.

### Câu 5

Khi thay embedding model, thao tác nào thường cần thiết?

A. Chỉ thay màu UI  
B. Re-embed tài liệu và điều chỉnh schema/index nếu cần  
C. Xóa toàn bộ URL nguồn  
D. Chỉ tăng timeout HTTP  

**Đáp án:** B  
**Giải thích:** Vector của model khác không bảo đảm cùng không gian biểu diễn hay số chiều.

