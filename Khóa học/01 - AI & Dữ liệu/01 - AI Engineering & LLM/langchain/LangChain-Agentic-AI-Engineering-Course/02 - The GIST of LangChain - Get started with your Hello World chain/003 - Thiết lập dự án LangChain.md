# 003 - Thiết lập dự án LangChain

**Học phần:** The GIST of LangChain - Get started with your Hello World chain  
**Loại bài:** lab  
**Thời lượng:** 15 phút

---

## 1. Tổng quan

Trước khi viết chain đầu tiên, môi trường Python cần được chuẩn bị sao cho dependency, virtual environment và secret được quản lý rõ ràng. Quy trình gồm clone repository, tạo branch làm việc, khởi tạo project bằng `uv`, cài các package cần thiết, cấu hình `.gitignore`, lưu API key trong `.env` và kiểm tra khả năng nạp environment variable.

Kết quả cuối cùng là một project Python sạch, có môi trường cô lập và sẵn sàng để gọi LLM.

## 2. Mục tiêu

Hoàn thành bài này, người học có thể:

- Khởi tạo project Python bằng `uv`.
- Cài `langchain` và package integration cho OpenAI.
- Giải thích vì sao provider integration được tách khỏi package LangChain cốt lõi.
- Tạo `.gitignore` và tránh commit virtual environment hoặc API key.
- Nạp biến môi trường từ `.env` bằng `python-dotenv`.
- Kiểm tra project chạy trong đúng virtual environment.

## 3. Tạo workspace Git

Clone repository của khóa học bằng URL được cung cấp cùng tài liệu học:

```bash
git clone <REPOSITORY_URL>
cd <REPOSITORY_DIRECTORY>
```

Có thể sử dụng Cursor, PyCharm, VS Code, Vim hoặc IDE khác. IDE không phải trọng tâm; chỉ cần hỗ trợ chạy và debug Python.

Trong ví dụ, một orphan branch được tạo để bắt đầu với lịch sử commit mới:

```bash
git checkout --orphan project/hello-world
```

`--orphan` tạo branch không kế thừa commit history của branch hiện tại. Nếu tên branch đã tồn tại trong repository của bạn, cần chọn tên khác.

Khi thực sự muốn làm sạch toàn bộ tracked file trên orphan branch, thao tác xóa phải được thực hiện cẩn thận vì nó loại bỏ file khỏi working tree. Chỉ dùng trong đúng repository thực hành và sau khi chắc chắn không có dữ liệu cần giữ.

## 4. Khởi tạo project bằng uv

Trước hết kiểm tra `uv`:

```bash
uv --help
```

Nếu chưa có, bài học sử dụng cách cài:

```bash
pip3 install uv
```

Sau đó khởi tạo project:

```bash
uv init
```

`uv init` tạo skeleton của project, trong đó có `main.py` và `pyproject.toml`. `pyproject.toml` giữ cấu hình project và danh sách dependency.

Cài LangChain:

```bash
uv add langchain
```

Khi dependency được thêm, `uv` đồng thời quản lý virtual environment cho project. Code nên được chạy trong môi trường này để package của project không trộn với Python toàn hệ thống.

## 5. Cài các dependency cần thiết

Package OpenAI được tách thành integration riêng thay vì gộp mọi provider vào `langchain`. Cách tổ chức này giữ dependency theo provider độc lập: ứng dụng dùng OpenAI không cần tải toàn bộ integration của Gemini, Anthropic hoặc các vendor khác.

Cài các package được dùng trong chuỗi bài:

```bash
uv add langchain-openai python-dotenv black isort
```

Vai trò của từng package:

| Package | Vai trò |
| --- | --- |
| `langchain` | Các abstraction cốt lõi của LangChain |
| `langchain-openai` | Integration giữa LangChain và OpenAI |
| `python-dotenv` | Nạp biến môi trường từ file `.env` |
| `black` | Format mã Python |
| `isort` | Sắp xếp import |

Sau khi cài, kiểm tra `pyproject.toml` để xác nhận dependency đã được ghi nhận.

## 6. Bảo vệ secret bằng .gitignore và .env

Virtual environment và API key không nên được commit vào repository. Tạo `.gitignore` cho project Python và bảo đảm ít nhất `.env` cùng thư mục virtual environment được bỏ qua.

Tạo file `.env` để lưu API key:

```dotenv
OPENAI_API_KEY=<YOUR_OPENAI_API_KEY>
```

API key phải được xem như mật khẩu. Không chia sẻ, không đưa vào source code và không commit lên GitHub. Bài học cũng nhấn mạnh việc đặt giới hạn chi tiêu ở tài khoản API để giảm rủi ro nếu credential bị lộ.

Nếu sử dụng provider khác, tên biến môi trường và integration package sẽ thay đổi. Ví dụ, khóa học nhắc đến Google API key cho Gemini và `langchain-ollama` cho model chạy cục bộ.

## 7. Nạp biến môi trường vào Python

`python-dotenv` giúp đọc `.env` và đưa các giá trị vào environment của process:

```python
from dotenv import load_dotenv

load_dotenv()
```

Có thể kiểm tra tạm thời rằng biến đã được nạp:

```python
import os

value = os.environ.get("OPENAI_API_KEY")
print(value is not None)
```

Nên chỉ kiểm tra sự tồn tại của biến thay vì in toàn bộ secret. Sau khi xác nhận, xóa đoạn code kiểm tra không còn cần thiết.

LangChain integration cho OpenAI sẽ tìm `OPENAI_API_KEY` trong environment khi tạo request đến API.

## 8. Kiểm tra kết quả

Project được xem là sẵn sàng khi:

- `uv` hoạt động.
- `uv init` đã tạo project.
- Dependency xuất hiện trong `pyproject.toml`.
- Code chạy trong virtual environment của project.
- `.env` tồn tại nhưng không bị Git theo dõi.
- `OPENAI_API_KEY` được nạp thành công vào runtime.
- `main.py` có thể chạy mà không lỗi môi trường.

Sau checkpoint này, project đã đủ điều kiện để bắt đầu viết Hello World chain.
