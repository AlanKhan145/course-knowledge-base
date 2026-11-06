# Cài đặt Ollama và Qwen3-Embedding-0.6B

> **Tóm tắt:** Chuẩn bị embedding model chạy local và xác nhận Ollama API trả về vector 1024 chiều.

## 1. Mục tiêu học tập

- Cài và tải Qwen3-Embedding-0.6B.
- Tạo embedding bằng Python Ollama client.
- Kiểm tra dimension trước khi gửi dữ liệu vào PostgreSQL.

## 2. Ollama và model embedding

Ollama cho phép tải và phục vụ model trên máy local. Embedding model khác chat LLM: đầu ra mong muốn là một vector, không phải một đoạn văn trả lời. Qwen3-Embedding-0.6B có 0,6 tỷ tham số và đầu ra mặc định 1024 chiều theo model card. Một số model khác hoặc cấu hình tùy chọn có số chiều khác; cần đo thật bằng mã.

## 3. Thiết lập

Cài Ollama từ trang chính thức và bảo đảm service hoạt động. Chạy:

```bash
ollama pull qwen3-embedding:0.6b
ollama list
```

Cài thư viện Python trong virtualenv:

```bash
python -m pip install ollama
```

Mẫu gọi trực tiếp bằng HTTP:

```bash
curl http://127.0.0.1:11434/api/embed -d '{"model":"qwen3-embedding:0.6b","input":"record quarterly revenue"}'
```

Trên PowerShell, cách quoting của `curl` khác Bash; có thể dùng Python dưới đây để tránh khác biệt shell.

## 4. Kiểm tra đầu ra

```python
from ollama import Client
client = Client(host='http://127.0.0.1:11434')
response = client.embed(
    model='qwen3-embedding:0.6b',
    input='The company reported higher earnings this quarter.'
)
vector = response.embeddings[0]
print('Number of dimensions:', len(vector))
assert len(vector) == 1024
```

Đừng `print` toàn bộ 1024 giá trị trong logs hệ thống. Nếu service từ chối kết nối, kiểm tra Ollama còn chạy và đúng host/port. Nếu model không tồn tại, xem `ollama list`.

## 5. Thực hành và tự kiểm tra

Chạy `ollama list`, thử embedding hai câu khác nhau và xác minh mỗi kết quả chứa 1024 số. **Checkpoint:** Python không báo lỗi assertion. Đừng thay `qwen3-embedding:0.6b` bằng `latest` nếu không kiểm tra độ dài vector mới.

## 6. Câu hỏi ôn tập

### Câu 1

Embedding model có đầu ra chính là gì?

A. Một vector số  
B. JSON migration  
C. Bản PDF  
D. SQL table  

**Đáp án:** A

**Giải thích:** Embedding model ánh xạ text thành vector.

### Câu 2

Lệnh tải model đúng trong bài?

A. docker pull qwen3  
B. ollama pull qwen3-embedding:0.6b  
C. pip install qwen  
D. supabase pull qwen  

**Đáp án:** B

**Giải thích:** Ollama CLI dùng pull với tên/tag model.

### Câu 3

Mục tiêu assert length là?

A. Đếm chunk  
B. Kiểm tra Docker port  
C. Phát hiện lệch dimension  
D. Cấp quyền user  

**Đáp án:** C

**Giải thích:** Mã kiểm tra nhất quán với vector(1024).

### Câu 4

Ollama API mặc định thông dụng ở đâu?

A. 54321  
B. 54323  
C. 3000  
D. 11434  

**Đáp án:** D

**Giải thích:** Ollama thường lắng nghe tại localhost:11434.

### Câu 5

Nếu gọi embedding bị lỗi model không có?

A. Kiểm tra ollama list/pull  
B. Xóa database  
C. Tăng match_count  
D. Đổi FTS dictionary  

**Đáp án:** A

**Giải thích:** Model cần sẵn trong Ollama.

## 7. Tổng kết

Chuẩn bị embedding model chạy local và xác nhận Ollama API trả về vector 1024 chiều. Hoàn thành phần thực hành và trả lời được các câu hỏi là đạt yêu cầu của bài.
