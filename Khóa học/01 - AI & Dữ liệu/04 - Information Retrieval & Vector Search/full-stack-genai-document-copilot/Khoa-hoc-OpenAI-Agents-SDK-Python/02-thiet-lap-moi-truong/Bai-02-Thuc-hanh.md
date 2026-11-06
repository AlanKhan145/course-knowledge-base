# Bài 02 — Thực hành có hướng dẫn: Thiết lập môi trường Python và API

> **Module 02 · Lab** · Video: [xem từ 00:06:37](https://www.youtube.com/watch?v=gFcAfU3V1Zo&t=397s).

**Tổng quan:** Tạo venv, cài Agents SDK, cấu hình VS Code/Jupyter, quản lý dependencies và API key an toàn.

## 1. Chuẩn bị

Máy có Python hiện đại, terminal, editor và quyền tạo key API. Nếu không có API key, thực hiện đến phần kiểm tra môi trường, bỏ qua cuộc gọi trả phí.

## 2. Tạo dự án sạch

```bash
mkdir agents_course_lab
cd agents_course_lab
python -m venv .venv
```

Kích hoạt như trong bài lý thuyết, sau đó tạo `requirements.txt`, `.env`, `.gitignore`, `hello_agent.py`.

## 3. Viết chương trình kiểm tra

```python
# hello_agent.py
import os
from dotenv import load_dotenv
from agents import Agent, Runner

load_dotenv()
assert os.getenv("OPENAI_API_KEY"), "Chưa có OPENAI_API_KEY"

agent = Agent(
    name="Hello Agent",
    instructions="Bạn là trợ lý ngắn gọn. Trả lời bằng tiếng Việt.",
)

result = Runner.run_sync(agent, "Xin chào, hãy giới thiệu về Agent trong một câu.")
print(result.final_output)
```

Chạy `python hello_agent.py`. Dấu hiệu thành công là mô hình trả lời bằng tiếng Việt; không nên kiểm tra kết quả bằng câu trả lời cố định vì output của LLM không mang tính xác định tuyệt đối.

## 4. Checkpoint từng bước

- `python -m pip show openai-agents` trả thông tin package.
- `python -c "from agents import Agent, Runner; print('OK')"` không báo lỗi.
- `.env` và `.venv` không xuất hiện trong `git status` sau khi tạo `.gitignore`.
- Chương trình chỉ in thông báo thành công, không in API key.

## 5. Khắc phục sự cố

Nếu Python chạy khác với Python dùng để cài thư viện, kích hoạt lại môi trường và luôn dùng `python -m pip`. Nếu báo không đủ hạn mức, không thử lặp lại liên tục; kiểm tra tài khoản và đặt giới hạn chi tiêu trước.

## 6. Sản phẩm cần nộp

Folder dự án với `requirements.txt`, `hello_agent.py`, `.gitignore` và file `.env.example` chứa **tên biến**, không chứa secret thực:

```dotenv
OPENAI_API_KEY=replace_me
```

Nâng cao: chạy đoạn code trong notebook bằng đúng kernel rồi so sánh `Runner.run_sync` trong script với `await Runner.run` trong môi trường async.

## 7. Câu hỏi ôn tập trắc nghiệm

### Câu 1

Lệnh nào tạo virtual environment?

A. `pip install venv`  
B. `python .env`  
C. `python -m venv .venv`  
D. `jupyter init`  

**Đáp án:** C. **Giải thích:** `venv` là module tạo môi trường ảo của Python.

### Câu 2

Tên package cài đặt Agents SDK là gì?

A. `openai-python-agents-sdkx`  
B. `agents-ai`  
C. `python.env`  
D. `openai-agents`  

**Đáp án:** D. **Giải thích:** Tên thư viện cài bằng pip khác tên module import `agents`.

### Câu 3

Mục đích chính của `.gitignore` với `.env`?

A. Tránh vô tình commit secrets  
B. Tăng tốc LLM  
C. Thay thế API key  
D. Lưu history chat  

**Đáp án:** A. **Giải thích:** Không đưa khóa bí mật vào kho mã nguồn.

### Câu 4

Notebook import sai thư viện dù terminal chạy được, nên kiểm tra gì?

A. Màu giao diện  
B. Kernel và `sys.executable`  
C. Đường dẫn video  
D. Tên agent  

**Đáp án:** B. **Giải thích:** Notebook có thể trỏ tới interpreter khác.

### Câu 5

Làm sao xác minh có key mà không làm lộ key?

A. In toàn bộ key vào terminal  
B. Commit key vào Git  
C. Kiểm tra `bool(os.getenv("OPENAI_API_KEY"))`  
D. Gửi key cho agent  

**Đáp án:** C. **Giải thích:** Kiểm tra có tồn tại thay vì tiết lộ giá trị.


**Tài liệu tra cứu:** [OpenAI Agents SDK](https://openai.github.io/openai-agents-python/) · [1](https://openai.github.io/openai-agents-python/quickstart/)
