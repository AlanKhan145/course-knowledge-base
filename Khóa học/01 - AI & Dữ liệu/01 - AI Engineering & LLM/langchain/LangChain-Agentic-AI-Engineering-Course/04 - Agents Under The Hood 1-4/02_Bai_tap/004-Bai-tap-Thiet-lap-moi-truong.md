# 004 - Bài tập: thiết lập môi trường Agent Under The Hood

## 1. Tổng quan

Đây là bài thực hành chuẩn bị môi trường để có thể tiếp tục tự triển khai agent loop.

## 2. Mục tiêu

Sau khi hoàn thành, người học cần có một project Python có dependency đầy đủ, mô hình Ollama chạy được và server Ollama sẵn sàng cho ứng dụng Python.

## 3. Chuẩn bị

Cần có:

- Git;
- Python;
- `uv`;
- Ollama;
- repository của phần học;
- thông tin xác thực cho các dịch vụ bên ngoài nếu bạn sử dụng chúng.

## 4. Các bước thực hiện

### 4.1. Chuẩn bị nhánh mã nguồn

Từ commit khởi đầu của phần học, tạo nhánh:

```bash
git checkout -b project/agents-under-the-hood <commit-hash>
```

Không tự thay `<commit-hash>` bằng một giá trị không có trong repository.

### 4.2. Khởi tạo project

```bash
uv init
```

Kiểm tra cấu trúc project sau khi khởi tạo.

### 4.3. Cài dependency

```bash
uv add langchain langchain-ollama langchain-openai python-dotenv black isort
```

Kiểm tra `pyproject.toml` và `uv.lock`.

### 4.4. Cấu hình môi trường

Tạo file `.env` và chuẩn bị cấu hình cần thiết cho:

- OpenAI nếu sử dụng;
- LangSmith;
- project tracing `ReAct Under The Hood`;
- tracing của LangSmith.

Không ghi khóa API thật vào bài nộp hoặc commit công khai.

### 4.5. Chuẩn bị Ollama

Liệt kê model local:

```bash
ollama list
```

Tải model đã chọn:

```bash
ollama pull <model-name>
```

Chạy thử:

```bash
ollama run <model-name>
```

Sau khi kiểm tra phản hồi, thoát bằng:

```text
/bye
```

Khởi động server:

```bash
ollama serve
```

## 5. Checkpoint

Sau mỗi nhóm thao tác, kiểm tra:

- `uv` có tạo hoặc cập nhật file quản lý dependency không;
- model có xuất hiện trong `ollama list` không;
- model có phản hồi trong CLI không;
- server Ollama có khởi động được không;
- cấu hình tracing đã được chuẩn bị chưa.

## 6. Deliverable

Nộp hoặc lưu lại:

1. cấu trúc thư mục project;
2. nội dung `pyproject.toml` không chứa secret;
3. xác nhận `uv.lock` đã được tạo;
4. kết quả `ollama list`;
5. ghi chú model đã chọn;
6. xác nhận `ollama serve` chạy thành công;
7. checklist hoàn tất môi trường.

## 7. Checklist hoàn thành

- [ ] Đã tạo đúng nhánh làm việc.
- [ ] Đã chạy `uv init`.
- [ ] Đã cài đủ dependency của bài.
- [ ] Đã chuẩn bị `.env`.
- [ ] Không để lộ API key trong bài nộp.
- [ ] Đã tải model Ollama.
- [ ] Đã chạy thử model trong CLI.
- [ ] Đã khởi động `ollama serve`.
- [ ] Môi trường sẵn sàng cho bài agent loop.
