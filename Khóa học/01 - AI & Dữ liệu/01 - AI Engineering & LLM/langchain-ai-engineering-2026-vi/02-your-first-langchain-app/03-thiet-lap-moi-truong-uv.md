# Bài 03 — Thiết lập môi trường Python với uv và Git

## 1. Tóm tắt

Một ứng dụng LLM dễ bị lỗi do thiếu dependency, sai Python, thiếu API key hoặc sai model. Dùng **uv** để quản lý môi trường ảo và dependency, **Git** để quản lý phiên bản mã nguồn và **`.env`** để cấu hình thông tin bí mật. Đây là nền tảng để các ví dụ LangChain chạy ổn định.

## 2. Mục tiêu học tập

- Khởi tạo được dự án `uv` và cài đặt gói LangChain cần thiết.
- Giải thích được vai trò của `pyproject.toml`, `uv.lock`, `.venv`, `.env` và `.gitignore`.
- Chạy một ví dụ offline, đồng thời tránh đưa API key lên Git.

## 3. Các thành phần của môi trường

| Tệp / thư mục | Công dụng | Có nên commit? |
| --- | --- | --- |
| `pyproject.toml` | Khai báo project và dependency | Có |
| `uv.lock` | Ghi các phiên bản phụ thuộc đã giải quyết | Có, khi được tạo |
| `.venv/` | Môi trường Python cục bộ | Không |
| `.env` | Chứa khóa API và cấu hình riêng | Không |
| `.env.example` | Mẫu tên biến không chứa bí mật | Có |
| `.gitignore` | Quy tắc không theo dõi file | Có |

## 4. Chuẩn bị dự án

Nếu muốn bắt đầu từ một kho học liệu có sẵn:

```bash
git clone <URL-KHO-CHUA-CODE-CUA-BAN>
cd <THU-MUC-DA-CLONE>
git switch -c practice/hello-world
```

Lệnh `git switch -c` tạo nhánh từ trạng thái hiện có. `git switch --orphan` tạo nhánh không có lịch sử chung và không cần thiết cho phần lớn bài thực hành. **Không chạy `git rm -rf .` chỉ để “làm sạch” thư mục**, vì có nguy cơ xóa dữ liệu đang theo dõi.

Tạo một dự án mới nếu chưa có `pyproject.toml`:

```bash
uv init --no-package langchain-demo
cd langchain-demo
uv add langchain langchain-openai python-dotenv
uv add --dev pytest black
uv run python main.py
```

`--no-package` giữ cấu trúc đơn giản kiểu `main.py`. Với **bộ bài tập đã đóng gói**, project `thuc-hanh/` có sẵn `pyproject.toml`; chỉ cần:

```bash
cd thuc-hanh
uv sync
uv run python -m examples.01_prompt_template
```

## 5. Quản lý API key

Tệp `.env` phục vụ cấu hình cục bộ, ví dụ:

```dotenv
LLM_PROVIDER=openai
OPENAI_API_KEY=YOUR_SECRET_KEY
OPENAI_MODEL=gpt-4o-mini
```

Đọc biến môi trường trong Python:

```python
import os
from dotenv import load_dotenv

load_dotenv()
if not os.getenv("OPENAI_API_KEY"):
    raise RuntimeError("Chưa khai báo OPENAI_API_KEY")
```

Không in giá trị khóa ra log để “kiểm tra”. Hãy chỉ kiểm tra khóa có tồn tại. Nếu vô tình công khai key, cần thu hồi/đổi key ngay và rà soát lịch sử Git, vì thêm `.gitignore` sau đó không xóa được secret đã commit.

## 6. Thực hành và kiểm tra

1. Chạy `uv sync` từ `thuc-hanh/`.
2. Sao chép `.env.example` thành `.env`, giữ `LLM_PROVIDER=ollama`.
3. Chạy `uv run python -m examples.01_prompt_template` (không cần model, không dùng API).
4. Chạy `uv run pytest -q` và kiểm tra các unit test.
5. Sử dụng `git status` để bảo đảm `.env` và `.venv/` không xuất hiện trong file được theo dõi.

## 7. Lỗi thường gặp

- `ModuleNotFoundError`: đang dùng Python ngoài `uv`; hãy chạy bằng `uv run` từ thư mục chứa `pyproject.toml`.
- Lỗi API 401: thường liên quan khóa API, project/organization hoặc provider chưa được cấu hình. Kiểm tra tên biến và trạng thái tài khoản, không chỉ vị trí địa lý.
- Lỗi quota/thanh toán: khóa API hợp lệ không có nghĩa tài khoản còn ngân sách.
- `uv sync` báo lỗi phiên bản: kiểm tra Python, dependency constraint và file khóa.

## 8. Câu hỏi ôn tập

**Câu 1.** File nào không nên được commit vì có thể chứa secret?  
A. `.env`.  
B. `.env.example`.  
C. `README.md`.  
D. `.gitignore`.  
**Đáp án: A.** `.env` thường chứa API key thật.

**Câu 2.** File nào giúp tái lập phiên bản dependency đã giải quyết?  
A. `main.py`.  
B. `.gitignore`.  
C. `uv.lock`.  
D. `data.txt`.  
**Đáp án: C.** Lockfile ghi lại tập dependency đã được giải quyết.

**Câu 3.** Lệnh nào chạy script trong môi trường do uv quản lý?  
A. `git run main.py`.  
B. `uv run python main.py`.  
C. `ollama serve main.py`.  
D. `uv rm main.py`.  
**Đáp án: B.** `uv run` đảm bảo môi trường project được sử dụng.

**Câu 4.** Tại sao không in API key khi debug?  
A. Vì Python không in được chuỗi.  
B. Vì sẽ làm model chạy chậm.  
C. Vì ảnh hưởng đến cache Git.  
D. Vì secret có thể xuất hiện trong log/ảnh chụp màn hình.  
**Đáp án: D.** Log rò rỉ có thể bị người khác khai thác.

**Câu 5.** Khi chỉ muốn tạo nhánh làm bài tập giữ lịch sử commit, nên dùng lệnh nào?  
A. `git switch -c practice/hello-world`.  
B. `git reset --hard HEAD~100`.  
C. `git rm -rf .`.  
D. `git push --force`.  
**Đáp án: A.** Tạo nhánh mới mà không phá hủy lịch sử và dữ liệu.

## 9. Tổng kết

Luôn tách dependency, secret và code. Chuẩn hóa lệnh chạy `uv run`, quản lý `.env` cẩn thận và commit lockfile khi thực sự có để người khác dễ tái hiện bài thực hành.
