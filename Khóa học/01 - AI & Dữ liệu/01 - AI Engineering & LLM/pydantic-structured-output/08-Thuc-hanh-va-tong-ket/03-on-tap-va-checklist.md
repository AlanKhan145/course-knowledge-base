# Tổng kết, cheat sheet và checklist khi dùng Pydantic

> **Khóa học:** Pydantic Crash Course — tiếng Việt  
> **Học phần:** Module 08 — Thực hành tích hợp và tổng kết  
> **Loại nội dung:** Bài học / thực hành  
> **Mức độ:** Cơ bản → ứng dụng

## 1. Tóm tắt

Hệ thống hóa các phương thức Pydantic v2 và cách chọn công cụ phù hợp cho API, settings và LLM.

## 2. Mục tiêu học tập

Sau bài học này, bạn có thể:

- Nhớ đúng các API nền tảng của Pydantic v2.
- Chọn giữa Field, validator, model_validator và business service.
- Tự đánh giá khả năng triển khai hệ thống có runtime validation.

## 3. Bối cảnh và vấn đề

Pydantic hữu ích nhất khi được dùng nhất quán tại các ranh giới dữ liệu. Từ đầu vào API, config, database đến kết quả LLM, một model tốt sẽ mô tả đúng kiểu, ràng buộc và thông điệp lỗi. Nhưng schema không thay thế permission, nguồn tri thức hay kiểm thử các trường hợp đặc biệt. Kỹ năng then chốt không phải nhớ mọi cú pháp mà là biết **đặt validation ở đâu** và **chọn mức strict nào**.

## 4. Kiến thức cốt lõi

### 4.1. Cheat sheet Pydantic v2

| Mục tiêu | API |
| --- | --- |
| Khai báo schema | `class X(BaseModel): ...` |
| Parse Python dict | `X.model_validate(data)` |
| Parse JSON string | `X.model_validate_json(text)` |
| Chuyển sang dict | `x.model_dump()` |
| Chuyển sang JSON string | `x.model_dump_json()` |
| Xuất JSON Schema | `X.model_json_schema()` |
| Ràng buộc số/chuỗi/list | `Field(ge=..., min_length=...)` |
| Validator một trường | `@field_validator("name")` |
| Validator liên trường | `@model_validator(mode="after")` |
| Cấu hình model | `model_config = ConfigDict(...)` |
| Cấu hình từ env | `BaseSettings` thuộc `pydantic_settings` |
| Bắt lỗi | `except ValidationError` / `.errors()` |
| LLM parsed output | `client.responses.parse(..., text_format=X)` |

### 4.2. Quy trình ra quyết định

1. Dữ liệu đầu vào có đáng tin không? Nếu không, validate tại boundary.
2. Chỉ sai kiểu? Dùng type hint + BaseModel; quyết định có cho ép kiểu không.
3. Có giới hạn từng trường? Dùng `Field`.
4. Có chuẩn hóa hoặc kiểm tra đặc thù? Dùng `field_validator`.
5. Có quan hệ giữa trường? Dùng `model_validator`.
6. Có liên quan quyền, database hoặc trạng thái bên ngoài? Đặt trong service.
7. Có LLM? Dùng structured output khi khả dụng, kiểm tra refusal và xác thực dữ liệu với nguồn tin cậy.

### 4.3. Các điểm tương thích cần nhớ

Pydantic v2 đổi nhiều API so với ví dụ v1: dùng `model_validate` thay cho `parse_obj`, `model_dump` thay `dict`, `model_json_schema` thay `schema`, `@field_validator` thay phần lớn `@validator`; settings tách thành package riêng. Khi copy code từ nguồn cũ, kiểm tra version trước.

## 5. Ví dụ và thực hành hướng dẫn

```python
from typing import Literal
from pydantic import BaseModel, ConfigDict, Field, ValidationError

class FinalResult(BaseModel):
    model_config = ConfigDict(extra="forbid")
    status: Literal["success", "failure"]
    count: int = Field(ge=0)
    note: str | None = None

payload = {"status": "success", "count": "3"}
try:
    result = FinalResult.model_validate(payload)
    print(result.model_dump_json())
except ValidationError as exc:
    print([{"loc": e["loc"], "msg": e["msg"]} for e in exc.errors()])
```

Một model nhỏ đã minh họa type hints, Literal, Field, default, coercion, ConfigDict, parse, serialize và error handling.

## 6. Điểm dễ sai và cách khắc phục

- **Nullable không đồng nghĩa optional:** `x: str | None` vẫn required nếu không có default.
- **JSON không đồng nghĩa JSON Schema:** một là dữ liệu, một là đặc tả.
- **Correct schema không đồng nghĩa correct facts:** đặc biệt quan trọng với LLM.
- **Strict mode không phải giải pháp cho mọi kiểu dữ liệu:** đánh giá theo nguồn input.
- **SecretStr không tự mã hóa secret:** thực hiện secret management đúng cách.

## 7. Bài tập tự luyện

Tự đánh giá 10 tiêu chí: cài môi trường, khai báo type hints, model required/default, strict, Field, validators, nested model, settings, serialization/schema, LLM typed output và fallback. Xây một bài demo đáp ứng tối thiểu 8/10; viết rõ hai mục còn yếu cùng kế hoạch cải thiện.

## 8. Câu hỏi ôn tập trắc nghiệm

**Câu 1. Muốn biến Python dict thành BaseModel đã kiểm tra, dùng?**

A. `Model.model_validate(data)`  
B. `model.model_dump()`  
C. `Model.model_json_schema()`  
D. `Model.copy()`  

**Đáp án:** A.  
**Giải thích:** Đây là API parsing/validation chuẩn của Pydantic v2.

**Câu 2. Mã kiểm tra business rule cần quyền người dùng nên nằm ở đâu?**

A. Chỉ trong Field  
B. Tầng service/authorization  
C. Chỉ trong Literal  
D. Trong JSON Schema thuần  

**Đáp án:** B.  
**Giải thích:** Nhiệm vụ quyền truy cập phải dựa vào dữ liệu tin cậy và chính sách hệ thống.

**Câu 3. Sự khác biệt đúng giữa `model_dump_json` và `model_json_schema` là gì?**

A. Cả hai đều phát HTTP request  
B. Cả hai đều tạo dataclass  
C. Một xuất dữ liệu JSON, một mô tả schema  
D. Cả hai đều đọc biến môi trường  

**Đáp án:** C.  
**Giải thích:** Đầu ra dữ liệu và định nghĩa hợp đồng có mục đích khác nhau.


## 9. Tổng kết

Từ type hints đến LLM structured output, Pydantic là công cụ xác thực tại runtime. Khi kết hợp với service checks, tests và chính sách bảo mật, ứng dụng trở nên đáng tin cậy hơn.
