# Bài 01 — Kiến thức nền tảng: Thiết lập môi trường Python và API

> **Module 02 · Lesson** · Video: [xem từ 00:06:37](https://www.youtube.com/watch?v=gFcAfU3V1Zo&t=397s).

**Tổng quan:** Tạo venv, cài Agents SDK, cấu hình VS Code/Jupyter, quản lý dependencies và API key an toàn.

## 1. Mục tiêu học tập

Tạo môi trường Python độc lập, cài đúng gói `openai-agents`, dùng Jupyter notebook và xác minh `OPENAI_API_KEY` được tải từ `.env` mà không lộ khóa bí mật.

## 2. Vì sao cần môi trường ảo?

Các dự án Python thường dùng phiên bản thư viện khác nhau. `venv` tạo một vùng cài đặt riêng cho dự án, tránh ảnh hưởng Python toàn máy. Khi mở terminal trong thư mục dự án, chạy:

```bash
python --version
python -m venv .venv
```

Kích hoạt trên Windows PowerShell:

```powershell
.\.venv\Scripts\Activate.ps1
```

Trên macOS/Linux:

```bash
source .venv/bin/activate
```

Kiểm tra `python -m pip --version` để chắc `pip` thuộc môi trường đang kích hoạt. Nếu PowerShell chặn script, có thể dùng Command Prompt với `.venv\Scriptsctivate.bat` hoặc chỉnh policy phù hợp với quy định máy.

## 3. Dependencies và requirements

Tên gói trên PyPI là `openai-agents`; gói đọc `.env` là `python-dotenv`, không phải các phiên âm “python.env” trong phụ đề tự động.

```bash
python -m pip install --upgrade pip
python -m pip install openai-agents python-dotenv ipykernel
```

Tạo `requirements.txt`:

```text
openai-agents
python-dotenv
ipykernel
```

Sau đó có thể tái tạo môi trường với `python -m pip install -r requirements.txt`. Dùng `pip freeze` để khóa dependency phục vụ tái lập, nhưng cần xem lại các thư viện không thực sự thuộc dự án. Không cố định phiên bản tùy tiện khi chưa thử với môi trường của bạn.

## 4. Jupyter trong VS Code

Cài extension **Python** và **Jupyter**. Tạo file `.ipynb`, chọn kernel trỏ tới `.venv` và chạy một cell:

```python
import sys
print(sys.executable)
print("Hello, Agent!")
```

Đường dẫn in ra cần nằm trong `.venv`. Notebook hỗ trợ `%pip install package` nhưng đưa dependencies vào `requirements.txt` sẽ giúp dễ tái lập trên máy khác. Không lưu token vào notebook outputs hoặc chia sẻ notebook có đầu ra nhạy cảm.

## 5. API key và biến môi trường

Tạo API key trong [OpenAI Platform](https://platform.openai.com/api-keys). API có cơ chế thanh toán và giới hạn khác với gói ChatGPT; kiểm tra billing, quyền và ngân sách trước khi chạy. Tạo `.env`:

```dotenv
OPENAI_API_KEY=sk-your-real-key-here
```

Đây là **giá trị minh họa**, tuyệt đối không dùng literal này làm khóa thật. Tạo `.gitignore`:

```gitignore
.venv/
.env
__pycache__/
.ipynb_checkpoints/
```

Code Python:

```python
import os
from dotenv import load_dotenv

load_dotenv()
if not os.getenv("OPENAI_API_KEY"):
    raise RuntimeError("Thiếu OPENAI_API_KEY trong môi trường")
print("API key đã được cấu hình")  # Không in key
```

## 6. Các lỗi hay gặp

| Triệu chứng | Nguyên nhân | Cách kiểm tra |
| --- | --- | --- |
| `ModuleNotFoundError: agents` | Cài vào sai Python | `python -m pip show openai-agents` |
| Notebook không import được | Chọn sai kernel | `sys.executable` |
| Authentication error | Key rỗng/sai/hết hiệu lực | Kiểm tra tên biến và key trong Platform |
| Rate limit/billing error | Hạn mức hoặc tài khoản API | Kiểm tra dashboard và model được phép |
| Lộ key trên GitHub | Commit nhầm `.env` | Thu hồi/rotate key ngay, xóa khỏi lịch sử khi cần |

## 7. Tổng kết

Tách project với `venv`, quản lý dependencies rõ ràng và giữ secrets ngoài source. Chưa có API key hợp lệ thì các ví dụ gọi mô hình sẽ không hoạt động, nhưng vẫn có thể đọc và thiết kế luồng mà không phát sinh chi phí.

## 8. Câu hỏi ôn tập trắc nghiệm

### Câu 1

Lệnh nào tạo virtual environment?

A. `python -m venv .venv`  
B. `pip install venv`  
C. `python .env`  
D. `jupyter init`  

**Đáp án:** A. **Giải thích:** `venv` là module tạo môi trường ảo của Python.

### Câu 2

Tên package cài đặt Agents SDK là gì?

A. `openai-python-agents-sdkx`  
B. `openai-agents`  
C. `agents-ai`  
D. `python.env`  

**Đáp án:** B. **Giải thích:** Tên thư viện cài bằng pip khác tên module import `agents`.

### Câu 3

Mục đích chính của `.gitignore` với `.env`?

A. Tăng tốc LLM  
B. Thay thế API key  
C. Tránh vô tình commit secrets  
D. Lưu history chat  

**Đáp án:** C. **Giải thích:** Không đưa khóa bí mật vào kho mã nguồn.

### Câu 4

Notebook import sai thư viện dù terminal chạy được, nên kiểm tra gì?

A. Màu giao diện  
B. Đường dẫn video  
C. Tên agent  
D. Kernel và `sys.executable`  

**Đáp án:** D. **Giải thích:** Notebook có thể trỏ tới interpreter khác.

### Câu 5

Làm sao xác minh có key mà không làm lộ key?

A. Kiểm tra `bool(os.getenv("OPENAI_API_KEY"))`  
B. In toàn bộ key vào terminal  
C. Commit key vào Git  
D. Gửi key cho agent  

**Đáp án:** A. **Giải thích:** Kiểm tra có tồn tại thay vì tiết lộ giá trị.


**Tài liệu tra cứu:** [OpenAI Agents SDK](https://openai.github.io/openai-agents-python/) · [1](https://openai.github.io/openai-agents-python/quickstart/)
