# Bài 01 — Chuẩn bị backend AI chatbot và môi trường Python

## 1. Tóm tắt

Một chatbot có tool calling và memory cần các thư viện làm những việc khác nhau: FastAPI phục vụ HTTP; SQLAlchemy thao tác cơ sở dữ liệu; LangGraph điều phối agent; `langchain-openai` kết nối mô hình chat; `httpx` gửi HTTP bất đồng bộ; `python-dotenv` nạp cấu hình bí mật. Thiết lập rõ từ đầu sẽ giảm lỗi khi bổ sung công cụ và trạng thái.

## 2. Mục tiêu học tập

- Tạo môi trường ảo Python và cài đặt các phụ thuộc của backend.
- Phân biệt nhiệm vụ của FastAPI, LangGraph, LangChain và SQLAlchemy.
- Cấu hình API key, tên model và base URL qua `.env`.
- Đề xuất cấu trúc module dễ kiểm thử và mở rộng.

## 3. Công nghệ và nhiệm vụ

| Công nghệ | Vai trò trong hệ thống |
| --- | --- |
| Python | Ngôn ngữ cài đặt backend và agent |
| FastAPI | Định tuyến HTTP, dependency injection, validation |
| Uvicorn | Chạy ứng dụng ASGI |
| SQLAlchemy | ORM, engine và phiên giao dịch với SQLite |
| Pydantic | Kiểm tra cấu trúc dữ liệu request/response |
| LangGraph | Xây StateGraph, ToolNode và conditional edges |
| LangChain Core | Kiểu `HumanMessage`, `AIMessage`, `SystemMessage`, decorator `@tool` |
| `langchain-openai` | Cung cấp `ChatOpenAI` và khả năng bind tools |
| `httpx` | Công cụ HTTP client bất đồng bộ gọi các endpoint |
| `python-dotenv` | Đọc biến môi trường trong máy phát triển |

## 4. Khởi tạo dự án

```bash
mkdir ai-chatbot
cd ai-chatbot
mkdir backend
cd backend
python -m venv .venv
```

Kích hoạt môi trường ảo:

```powershell
# PowerShell, Windows
.venv\Scripts\Activate.ps1
```

```bash
# Linux hoặc macOS
source .venv/bin/activate
```

Tạo `requirements.txt` (đây là danh sách thư viện cần thiết, không khóa phiên bản):

```text
fastapi
uvicorn[standard]
httpx
python-dotenv
pydantic
sqlalchemy
langgraph
langchain-core
langchain-openai
```

Cài đặt:

```bash
python -m pip install -r requirements.txt
```

**Lưu ý:** Khi triển khai thật, nên khóa phiên bản sau khi đã kiểm thử để tránh thay đổi không tương thích giữa các bản LangGraph và LangChain. Không mặc định các API ví dụ hoạt động với mọi phiên bản tương lai.

## 5. Quản lý biến môi trường

Tạo `backend/.env`:

```dotenv
OPENAI_API_KEY=your_api_key_here
OPENAI_MODEL=gpt-4o-mini
API_BASE_URL=http://127.0.0.1:8000
```

`OPENAI_API_KEY` là bí mật, không ghi trực tiếp trong source code hoặc commit vào Git. `OPENAI_MODEL` là tên model chat được lựa chọn cho chạy thử; giá trị thực tế có thể thay đổi tùy tài khoản/API. `API_BASE_URL` cho phép agent gọi lại các endpoint của chính backend qua HTTP.

Thêm `.gitignore`:

```gitignore
.venv/
.env
__pycache__/
*.pyc
*.db
```

Đọc biến môi trường với Python:

```python
import os
from dotenv import load_dotenv

load_dotenv()
api_base_url = os.getenv("API_BASE_URL", "http://127.0.0.1:8000").rstrip("/")
model_name = os.getenv("OPENAI_MODEL", "gpt-4o-mini")
if not os.getenv("OPENAI_API_KEY"):
    raise RuntimeError("OPENAI_API_KEY chưa được cấu hình")
```

Đối với production, nên dùng secret manager hoặc cơ chế inject secrets của môi trường chạy thay vì lưu `.env` cùng source.

## 6. Cấu trúc mã nguồn

```text
backend/
├── .env                  # Chỉ lưu ở máy phát triển
├── .gitignore
├── requirements.txt
├── database.py           # Engine, SessionLocal, get_db, init_db
├── models.py             # Customer, Order, InventoryItem, SessionRecord
├── schemas.py            # Pydantic request/response
├── app.py                # APIRouter: API dữ liệu và /chat
├── agent.py              # Tools, graph, memory và run_chat
├── main.py               # Tạo FastAPI application
└── seed.py               # Tạo dữ liệu demo, tùy chọn
```

Tổ chức theo module tạo sự phân chia trách nhiệm. Một lỗi `FOREIGN KEY` thuộc `models.py` hoặc `database.py`; lỗi validation payload thuộc `schemas.py`; lỗi lựa chọn công cụ thuộc `agent.py`. Điều này có lợi khi dự án mở rộng sang một frontend riêng chạy tại `http://localhost:5173`.

## 7. Kiểm tra ban đầu và lỗi thường gặp

Chạy thử phiên bản thư viện:

```bash
python -c "import fastapi, sqlalchemy, langgraph, httpx; print('Imports OK')"
```

Nếu lỗi `ModuleNotFoundError`, cần kiểm tra môi trường ảo đang được kích hoạt và `pip` có đang cài đúng interpreter (`python -m pip`). Nếu lỗi thiếu API key, hãy xác định `.env` đang ở thư mục làm việc phù hợp và đã gọi `load_dotenv()`. Nếu backend báo `Connection refused`, có thể máy chủ FastAPI chưa chạy hoặc `API_BASE_URL` dùng sai host/port.

**Bài thực hành ngắn:** tạo toàn bộ cấu trúc thư mục, cài dependencies và kiểm tra import thành công. Không đưa file `.env` chứa khóa thật vào gói nộp bài.

## 8. Câu hỏi ôn tập

**Câu 1.** Vì sao nên dùng `python -m pip`?  
A. Để khởi tạo SQLite. B. Để cài package vào Python interpreter đang chạy. C. Để tạo route. D. Để bật CORS.  
**Đáp án: B.** Cú pháp này giảm nhầm lẫn giữa các phiên bản Python và môi trường ảo.

**Câu 2.** Thư viện nào cung cấp `StateGraph`?  
A. FastAPI. B. Pydantic. C. Uvicorn. D. LangGraph.  
**Đáp án: D.** Đồ thị trạng thái thuộc LangGraph.

**Câu 3.** Trong tệp nào nên lưu API key ở máy phát triển?  
A. `.env` không commit Git. B. README công khai. C. Mã `agent.py` đã commit. D. Log request.  
**Đáp án: A.** `.env` tách thông tin bí mật khỏi mã nguồn.

**Câu 4.** `httpx` cần thiết cho thao tác nào?  
A. Tạo bảng SQL. B. Định nghĩa schema. C. Gọi HTTP endpoint từ công cụ. D. Tạo graph node.  
**Đáp án: C.** `httpx.AsyncClient` gửi request bất đồng bộ.

**Câu 5.** Lệnh nào tạo môi trường ảo?  
A. `uvicorn main:app`. B. `python -m venv .venv`. C. `git add .`. D. `pip show fastapi`.  
**Đáp án: B.** Module `venv` tạo môi trường độc lập cho dự án.

## 9. Tổng kết

Môi trường backend đã sẵn sàng với Python, FastAPI, LangGraph, SQLAlchemy, HTTP client và cấu hình model. Bước tiếp theo của lộ trình là tổ chức bảng dữ liệu nghiệp vụ và bộ nhớ phiên trong SQLite.
