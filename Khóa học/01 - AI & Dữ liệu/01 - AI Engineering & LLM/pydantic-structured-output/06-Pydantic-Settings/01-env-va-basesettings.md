# Pydantic Settings: cấu hình từ environment variables

> **Khóa học:** Pydantic Crash Course — tiếng Việt  
> **Học phần:** Module 06 — Pydantic Settings  
> **Loại nội dung:** Bài học / thực hành  
> **Mức độ:** Cơ bản → ứng dụng

## 1. Tóm tắt

Đọc và validate cấu hình ứng dụng từ biến môi trường bằng `pydantic-settings`, tách cấu hình khỏi code.

## 2. Mục tiêu học tập

Sau bài học này, bạn có thể:

- Định nghĩa class kế thừa `BaseSettings`.
- Đọc biến môi trường và phát hiện giá trị thiếu.
- Dùng `SettingsConfigDict(env_prefix=...)` để quy ước key.

## 3. Bối cảnh và vấn đề

Ứng dụng production có địa chỉ database, cổng HTTP, môi trường, API key. Hardcode những thứ này vào Python gây khó deploy và dễ làm lộ secret trên Git. Quy ước tốt là đọc từ environment variables. `BaseSettings` dùng cơ chế Pydantic để parse và validate các giá trị này, cho phép khai báo một lần và dùng trong nhiều môi trường.

## 4. Kiến thức cốt lõi

### 4.1. BaseSettings và biến môi trường

```python
from pydantic import Field
from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_prefix="APP_")
    host: str = "127.0.0.1"
    port: int = Field(default=8000, ge=1, le=65535)
    debug: bool = False
```

Khi đặt `APP_PORT=9000`, Pydantic Settings parse chuỗi `"9000"` thành số nguyên 9000. Nếu biến môi trường chưa có, fallback về default. Nếu `port` bắt buộc mà không có mặc định, thiếu biến sẽ báo `ValidationError`.

### 4.2. Nguồn cấu hình

`BaseSettings` đọc giá trị từ nhiều nguồn như tham số khởi tạo, biến môi trường và dotenv (nếu cấu hình) theo thứ tự ưu tiên do thư viện quy định. Có thể tùy chỉnh nguồn; bài cơ bản chỉ cần nhớ giá trị cung cấp trực tiếp và env có thể ghi đè default. Không in secrets vào console.

## 5. Ví dụ và thực hành hướng dẫn

```python
import os
from pydantic import Field, ValidationError
from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_prefix="APP_")
    port: int = Field(default=8000, ge=1, le=65535)
    debug: bool = False

os.environ["APP_PORT"] = "9001"
os.environ["APP_DEBUG"] = "true"
settings = Settings()
print(settings.port, settings.debug)

os.environ["APP_PORT"] = "not-an-int"
try:
    Settings()
except ValidationError as exc:
    print(exc.errors()[0]["loc"])
```

Khi test settings, thay environment tạm thời hoặc dùng `monkeypatch` của pytest để tránh gây ảnh hưởng đến tests khác.

## 6. Điểm dễ sai và cách khắc phục

- Không đưa API key thật vào Git, README hoặc log.
- `BaseSettings` thuộc gói `pydantic-settings` riêng trong Pydantic v2.
- Cẩn thận khi đặt biến môi trường trong notebook: chúng có thể tồn tại xuyên nhiều cell, làm kết quả test thiếu nhất quán.

## 7. Bài tập tự luyện

Tạo `AppConfig` đọc `APP_HOST`, `APP_PORT`, `APP_DEBUG`; viết test cho biến cổng hợp lệ, ngoài dải và giá trị không phải số. Tiêu chí: lỗi có đường dẫn trường rõ ràng.

## 8. Câu hỏi ôn tập trắc nghiệm

**Câu 1. Mục đích của BaseSettings là gì?**

A. Đọc và validate cấu hình từ môi trường  
B. Tạo bảng cơ sở dữ liệu  
C. Bật GPU  
D. Sinh mật khẩu API tự động  

**Đáp án:** A.  
**Giải thích:** BaseSettings gom cấu hình và validation theo schema.

**Câu 2. `env_prefix="APP_"` có tác dụng nào?**

A. Đổi tên class thành APP  
B. Ánh xạ field `port` với biến `APP_PORT`  
C. Tự tạo file `.env`  
D. Bỏ kiểm tra field  

**Đáp án:** B.  
**Giải thích:** Prefix giúp tránh xung đột biến môi trường.

**Câu 3. Giá trị môi trường `APP_PORT=not-an-int` cho field `port: int` sẽ thế nào?**

A. Luôn được đổi thành 0  
B. Được giữ thành chuỗi  
C. Gây ValidationError khi đọc settings  
D. Luôn dùng default không báo  

**Đáp án:** C.  
**Giải thích:** Dữ liệu không parse được sẽ bị từ chối.


## 9. Tổng kết

BaseSettings chuyển cấu hình runtime thành schema có kiểm soát, giúp vận hành dễ hơn giữa local, staging và production.
