# Cài đặt môi trường Python, uv và Pydantic v2

> **Khóa học:** Pydantic Crash Course — tiếng Việt  
> **Học phần:** Module 01 — Nền tảng Pydantic và môi trường  
> **Loại nội dung:** Bài học / thực hành  
> **Mức độ:** Cơ bản → ứng dụng

## 1. Tóm tắt

Tạo môi trường tái lập, cài đúng các package và kiểm tra model đơn giản trước khi học validation.

## 2. Mục tiêu học tập

Sau bài học này, bạn có thể:

- Thiết lập dự án Python riêng bằng `uv` hoặc `venv`.
- Cài các gói `pydantic`, `pydantic-settings`, `email-validator`.
- Chạy một bài smoke test và kiểm tra version cài đặt.

## 3. Bối cảnh và vấn đề

Một khóa học lập trình cần môi trường thực hành tách biệt khỏi Python hệ thống. Dùng môi trường ảo để tránh xung đột gói và quản lý phụ thuộc theo dự án. Repo tham khảo sử dụng `uv` và file `pyproject.toml`; có thể học bằng `pip` nếu chưa sử dụng `uv`. Các ví dụ của khóa học sử dụng API Pydantic v2 như `model_validate()`, `model_dump()` và `field_validator()`.

## 4. Kiến thức cốt lõi

### 4.1. Hai cách cài đặt hợp lệ

**Cách A — `uv`:** Nếu đã cài `uv`, tạo dự án rồi thêm dependencies, hoặc clone repo và chạy `uv sync` để đọc cấu hình sẵn.

```bash
uv init pydantic-lab
cd pydantic-lab
uv add pydantic pydantic-settings email-validator
uv run python -c "import pydantic; print(pydantic.__version__)"
```

**Cách B — `venv` và `pip`:**

```bash
python -m venv .venv
# macOS/Linux:
source .venv/bin/activate
# Windows PowerShell: .venv\Scripts\Activate.ps1
python -m pip install "pydantic>=2,<3" pydantic-settings email-validator
python -c "import pydantic; print(pydantic.__version__)"
```

### 4.2. Cấu trúc thực hành

```text
pydantic-lab/
├── .venv/
├── pyproject.toml            # khi dùng uv
├── main.py
├── tests/
└── .env.example
```

Không commit `.venv` và `.env` chứa khóa thật. Dùng `python -m pip` hoặc `uv run` để đảm bảo lệnh chạy đúng interpreter.

## 5. Ví dụ và thực hành hướng dẫn

Tạo `main.py`:

```python
from pydantic import BaseModel

class HealthCheck(BaseModel):
    status: str
    attempts: int = 0

check = HealthCheck(status="ok", attempts="2")
print(check)
print(type(check.attempts).__name__)
```

Chạy bằng `uv run python main.py` hoặc `python main.py`. Nếu thấy `attempts=2` và `int`, Pydantic đang hoạt động và có ép kiểu chuỗi số sang integer.

## 6. Điểm dễ sai và cách khắc phục

- Nếu IDE báo không thấy Pydantic, chọn đúng Python interpreter trong `.venv`.
- `BaseSettings` được cài từ gói riêng **`pydantic-settings`**, không import trực tiếp từ `pydantic` trong v2.
- Với `EmailStr`, cần `email-validator` (hoặc cài `pydantic[email]`).
- Repo có file khóa phụ thuộc thì nên dùng `uv sync`, không cần tự suy đoán phiên bản.

## 7. Bài tập tự luyện

Lập 2 môi trường độc lập, chạy cùng bài `HealthCheck`, ghi phiên bản Python và Pydantic. Tiêu chí: cả hai môi trường đều in được đối tượng hợp lệ và không lộ khóa API.

## 8. Câu hỏi ôn tập trắc nghiệm

**Câu 1. Repo đã có `pyproject.toml` và `uv.lock`. Lệnh phù hợp để đồng bộ phụ thuộc là?**

A. `uv sync`  
B. `uv format`  
C. `uv remove`  
D. `uv tree --delete`  

**Đáp án:** A.  
**Giải thích:** `uv sync` cài theo cấu hình dự án và khóa phụ thuộc.

**Câu 2. Trong Pydantic v2, import `BaseSettings` từ đâu?**

A. `typing`  
B. `pydantic_settings`  
C. `dataclasses`  
D. `pydantic_core`  

**Đáp án:** B.  
**Giải thích:** Settings được tách thành distribution `pydantic-settings`.

**Câu 3. Lợi ích chính của môi trường ảo là gì?**

A. Tự tạo khóa API  
B. Thay Python thành kiểu tĩnh  
C. Cô lập phụ thuộc cho mỗi dự án  
D. Thay thế toàn bộ bộ kiểm thử  

**Đáp án:** C.  
**Giải thích:** Môi trường ảo giúp giảm xung đột phiên bản.


## 9. Tổng kết

Môi trường chạy ổn định là tiền đề của các ví dụ. Khởi đầu bằng `BaseModel` và xác nhận cơ chế ép kiểu để không nhầm với strict mode.
