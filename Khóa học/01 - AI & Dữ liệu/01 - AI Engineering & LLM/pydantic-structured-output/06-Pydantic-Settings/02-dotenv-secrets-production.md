# Đọc file .env và quản lý bí mật khi triển khai

> **Khóa học:** Pydantic Crash Course — tiếng Việt  
> **Học phần:** Module 06 — Pydantic Settings  
> **Loại nội dung:** Bài học / thực hành  
> **Mức độ:** Cơ bản → ứng dụng

## 1. Tóm tắt

Thiết lập dotenv cho môi trường phát triển, bảo vệ API keys và tách cấu hình ra khỏi code.

## 2. Mục tiêu học tập

Sau bài học này, bạn có thể:

- Cấu hình `env_file` bằng `SettingsConfigDict`.
- Phân biệt `.env.example` và `.env` chứa secret thật.
- Xử lý thiếu khóa hoặc config lỗi trước khi ứng dụng khởi chạy.

## 3. Bối cảnh và vấn đề

`.env` là lựa chọn tiện ở local; khi deploy trong container/cloud, secrets thường được inject qua biến môi trường hoặc secret manager. `pydantic-settings` có thể đọc `.env` nếu cấu hình `env_file`, nhưng không nên xem file dotenv như hệ thống bảo mật riêng. Vì khóa rất dễ bị vô tình commit, nên xây dựng thói quen cấu hình an toàn ngay từ đầu.

## 4. Kiến thức cốt lõi

### 4.1. Cấu hình dotenv

Tạo `.env.example` (không có secret thật):

```dotenv
APP_DEBUG=false
APP_PORT=8000
APP_API_KEY=replace-me
```

Cấu hình ứng dụng:

```python
from pydantic import SecretStr, Field
from pydantic_settings import BaseSettings, SettingsConfigDict

class AppSettings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=".env",
        env_prefix="APP_",
        extra="ignore",
    )
    api_key: SecretStr
    port: int = Field(default=8000, ge=1, le=65535)
    debug: bool = False
```

`SecretStr` làm giá trị bí mật ít lộ hơn khi biểu diễn model. Khi thực sự cần dùng, gọi `settings.api_key.get_secret_value()` và truyền cho SDK qua bộ nhớ; không in ra log.

### 4.2. Checklist production

Không đưa `.env` thật vào version control; cấu hình secrets ở nền tảng deploy; áp dụng quyền truy cập tối thiểu; rotate key nếu bị lộ; fail fast khi thiếu biến bắt buộc; dùng `.env.example` để người mới biết phải cấu hình gì.

## 5. Ví dụ và thực hành hướng dẫn

```python
import os
from pydantic import SecretStr
from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_prefix="DEMO_")
    api_key: SecretStr

os.environ["DEMO_API_KEY"] = "local-placeholder-do-not-use"
settings = Settings()
print(settings.api_key)  # masked, không in secret gốc
assert settings.api_key.get_secret_value() == "local-placeholder-do-not-use"
```

Lệnh trên minh họa cách log an toàn; trong môi trường thật, tuyệt đối không đưa key thật vào tài liệu hoặc file test.

## 6. Điểm dễ sai và cách khắc phục

- SecretStr bảo vệ biểu diễn/log ở một số luồng, **không mã hóa secret trong RAM** và không chặn mọi cách lộ dữ liệu.
- `.env` cần được ignore trong Git; nếu đã commit secret, xóa file khỏi lịch sử chưa đủ, cần rotate.
- Khi `.env` có nhiều biến không thuộc schema, `extra="ignore"` có thể giúp tránh lỗi; còn với input API thì `extra="forbid"` thường phù hợp hơn.

## 7. Bài tập tự luyện

Viết `.gitignore` có `.env`, tạo `.env.example`, định nghĩa Settings với API key bắt buộc và service URL. Thử chạy khi không có key và khi key hợp lệ. Tiêu chí: log không lộ key và app fail fast đúng lúc.

## 8. Câu hỏi ôn tập trắc nghiệm

**Câu 1. `.env.example` nên chứa gì?**

A. Tên biến và giá trị mẫu không nhạy cảm  
B. Secret production thật  
C. Mật khẩu database gốc  
D. Token truy cập cá nhân thật  

**Đáp án:** A.  
**Giải thích:** Example hướng dẫn cấu hình, không lưu dữ liệu bí mật.

**Câu 2. `SecretStr` giúp ích gì?**

A. Mã hóa tuyệt đối nội dung RAM  
B. Che giá trị khi biểu diễn thông thường  
C. Tự đổi key mỗi ngày  
D. Tự chặn quyền truy cập file  

**Đáp án:** B.  
**Giải thích:** SecretStr giảm nguy cơ log lộ value, không phải cơ chế mã hóa hoàn chỉnh.

**Câu 3. API key bị commit công khai, hành động quan trọng là gì?**

A. Chỉ xóa dòng khỏi README  
B. Đổi tên file `.env`  
C. Thu hồi/rotate khóa bị lộ và sửa quy trình secrets  
D. Giữ nguyên nếu chưa có lỗi  

**Đáp án:** C.  
**Giải thích:** Key từng lộ phải được coi như compromised.


## 9. Tổng kết

Quản lý settings đúng cách giúp deploy an toàn và tránh lỗi cấu hình bí ẩn; ưu tiên biến môi trường/secret manager cho production.
