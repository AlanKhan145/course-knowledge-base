# Bài 04 — Khởi tạo dự án Search Agent bằng UV, LangChain và Tavily

> **Chương 03:** Xây dựng Search Agent bằng LangChain · **Loại:** Lab thiết lập · **Thực hành:** `../examples/04_smoke_test.py`

## 1. Tổng quan

Mục tiêu của lab là xây dựng một dự án Python có thể chạy lại trên máy khác, tách API key ra khỏi mã và chuẩn bị các gói dành cho **LangChain agent**, **OpenAI model**, **Tavily Search**, **Pydantic** và **LangSmith tracing**. Công cụ quản lý môi trường được dùng là **UV**; gói phụ thuộc được kê khai trong `pyproject.toml`.

## 2. Mục tiêu học tập

- Khởi tạo hoặc mở một dự án Python bằng UV.
- Phân biệt `tavily-python` (SDK) và `langchain-tavily` (công cụ tích hợp cho LangChain).
- Cấu hình `.env` mà không để lộ bí mật trong Git và log.
- Chạy smoke test và xác định thiếu package hay API key.

## 3. Cấu trúc dự án

```text
Chuong_03_AI_Agents_Search_Agent/
├── .env.example          # Mẫu tên biến môi trường, KHÔNG chứa key thật
├── .gitignore
├── pyproject.toml        # Dependency và yêu cầu Python
├── lessons/              # Chín bài giảng Markdown
├── examples/             # Các bước tăng dần
├── data/                 # Fixture offline
├── src/ai_job_agent/     # Mã dự án cuối
└── tests/                # Unit test không gọi mạng
```

Nếu bắt đầu từ thư mục trống, có thể dùng:

```bash
uv init
uv add langchain langchain-openai langchain-tavily tavily-python python-dotenv pydantic
uv add --dev pytest
```

Bản đóng gói đã có `pyproject.toml`, nên **không cần chạy `uv init` lại**. Chạy `uv sync` để cài các dependency theo cấu hình; lần sync thành công sẽ tạo môi trường ảo và lockfile của máy nếu chưa có.

## 4. Thiết lập từng bước

### 4.1. Cài môi trường

Cần Python tương thích với `requires-python` trong `pyproject.toml` và có UV. Tại thư mục chứa file dự án:

```bash
uv sync
uv run python examples/04_smoke_test.py
```

Smoke test in phiên bản package và trạng thái **đã cấu hình/chưa cấu hình** cho key, không in giá trị key.

### 4.2. Cấu hình bí mật

Tạo file `.env` bằng cách sao chép `.env.example`. Trên macOS/Linux:

```bash
cp .env.example .env
```

Trên Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

Nội dung tối thiểu:

```dotenv
OPENAI_API_KEY=...gia-tri-rieng...
TAVILY_API_KEY=...gia-tri-rieng...
OPENAI_MODEL=gpt-4o-mini
```

`python-dotenv` nạp các giá trị này bằng `load_dotenv()` trước khi khởi tạo SDK. **Không gửi `.env` thật** cùng bài tập hoặc commit vào Git. Nếu vô tình công khai key, phải thu hồi/đổi key ngay tại nhà cung cấp.

### 4.3. Bật LangSmith khi cần

```dotenv
LANGSMITH_TRACING=true
LANGSMITH_API_KEY=...gia-tri-rieng...
LANGSMITH_PROJECT=langchain-ai-job-search-agent
```

LangSmith tracing cho phép quan sát lệnh gọi mô hình, tool và thời gian. Chỉ bật tracing khi có quyền gửi nội dung truy vấn và dữ liệu tool tới dịch vụ quan sát. Với dự án kiểm tra offline, để `LANGSMITH_TRACING=false`.

## 5. Các package quan trọng

| Package | Chức năng |
| --- | --- |
| `langchain` | `create_agent`, `@tool`, giao diện agent |
| `langchain-openai` | `ChatOpenAI` làm mô hình quyết định |
| `tavily-python` | SDK `TavilyClient` để gọi web search trực tiếp |
| `langchain-tavily` | `TavilySearch` dùng ngay làm LangChain tool |
| `pydantic` | Ràng buộc cấu trúc dữ liệu trả về |
| `python-dotenv` | Nạp biến môi trường từ `.env` |
| `pytest` | Kiểm tra hàm offline và hợp đồng dữ liệu |

Các package có thể phát hành phiên bản mới nên cần chạy `uv lock`/`uv sync` và lưu `uv.lock` trong repo dự án khi đã khóa môi trường thành công. Không tự suy đoán mô hình mặc định của SDK; trong mọi ví dụ thực hành đều cấu hình tên model rõ ràng.

## 6. Checkpoint, debug và kết quả bàn giao

**Checkpoint 1:** chạy `uv run python examples/04_smoke_test.py` không gặp lỗi import. **Checkpoint 2:** lệnh `uv run pytest -q` chạy được bộ test offline. **Checkpoint 3:** nếu dùng live search, có ít nhất hai biến `OPENAI_API_KEY` và `TAVILY_API_KEY` được cấu hình.

Một số lỗi thường gặp:

- `ModuleNotFoundError`: chưa `uv sync` hoặc đang chạy nhầm interpreter.
- `AuthenticationError`: API key thiếu, sai hoặc không còn hiệu lực.
- `RateLimitError`: tài khoản vượt quota hoặc tốc độ gọi.
- Trace trống: chưa bật tracing hoặc API key/biến môi trường LangSmith không phù hợp.
- Windows không chạy `cp`: sử dụng `Copy-Item` như hướng dẫn.

**Bàn giao:** screenshot trạng thái smoke test đã che bí mật, danh sách package đã cài, xác nhận `.env` nằm trong `.gitignore`.

## 7. Bài tập thực hành

**A — Thiết lập:** Chạy `uv sync`, sau đó `uv run python examples/04_smoke_test.py`. Ghi phiên bản Python và năm package trọng yếu. Không chụp màn hình hiện key.

**B — Kiểm thử:** Chủ động đặt biến `TAVILY_API_KEY` rỗng, thử lệnh live và quan sát thông báo lỗi. Khôi phục biến hợp lệ sau khi kiểm thử.

**C — Git safety:** Thử `git status` và xác nhận `.env` không xuất hiện trong danh sách staged. Giải thích vì sao `.env.example` có thể được commit còn `.env` thì không.

## 8. Câu hỏi ôn tập

### Câu 1
Gói nào cung cấp lớp `TavilyClient`?

A. `langchain-openai`.  
B. `pydantic`.  
C. `tavily-python`.  
D. `python-dotenv`.

**Đáp án: C.** **Giải thích:** `TavilyClient` thuộc SDK Python của Tavily.

### Câu 2
Gói nào cung cấp `TavilySearch` dưới dạng công cụ tích hợp LangChain?

A. `langchain-tavily`.  
B. `pytest`.  
C. `uv`.  
D. `langsmith`.

**Đáp án: A.** **Giải thích:** Đây là integration package của Tavily với LangChain.

### Câu 3
Vì sao không nên in API key trong smoke test?

A. Vì key không có dạng chuỗi.  
B. Vì Python sẽ tự xóa key.  
C. Vì Pydantic không thể đọc key.  
D. Vì log có thể làm lộ thông tin xác thực.

**Đáp án: D.** **Giải thích:** Log và ảnh chụp màn hình có thể bị chia sẻ ngoài ý muốn.

### Câu 4
Lệnh nào cài dependency từ dự án UV đã đóng gói?

A. `uv remove`.  
B. `uv sync`.  
C. `git reset`.  
D. `python compileall`.

**Đáp án: B.** **Giải thích:** `uv sync` đồng bộ môi trường theo mô tả dự án/lockfile.

### Câu 5
Mục đích chính của `LANGSMITH_TRACING=true` là gì?

A. Tăng số job tìm được.  
B. Thay thế công cụ tìm kiếm.  
C. Thu thập dấu vết thực thi mô hình và công cụ để quan sát.  
D. Mã hóa toàn bộ thư mục.

**Đáp án: C.** **Giải thích:** Tracing phục vụ debug và quan sát, không xác minh dữ liệu tự động.

## 9. Tổng kết

Môi trường được xem là chuẩn bị xong khi **cài lại được, chạy test offline được và không lộ thông tin xác thực**. Tách SDK Tavily khỏi công cụ tích hợp LangChain giúp người học hiểu hai cách thiết kế tool trong các bài thực hành tiếp theo.
