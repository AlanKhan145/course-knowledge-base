# Pydantic v2 — Cheat Sheet

## 1. Model cơ bản

```python
from pydantic import BaseModel, Field, ValidationError

class User(BaseModel):
    name: str
    age: int = Field(ge=0)

user = User.model_validate({"name": "An", "age": "25"})
print(user.model_dump_json())
```

## 2. API quan trọng

| Tác vụ | API |
| --- | --- |
| Input dict | `Model.model_validate(data)` |
| Input JSON | `Model.model_validate_json(text)` |
| Output dict | `instance.model_dump()` |
| Output JSON | `instance.model_dump_json()` |
| JSON Schema | `Model.model_json_schema()` |
| Kiểm tra field | `@field_validator("field")` |
| Kiểm tra model | `@model_validator(mode="after")` |
| Strict | `Field(strict=True)` |
| Settings | `from pydantic_settings import BaseSettings` |

## 3. Ghi nhớ

- `x: str | None` có thể None **nhưng vẫn required** nếu không có `= None`.
- `mode="json"` ở `model_dump` trả object tương thích JSON, `model_dump_json` trả chuỗi JSON.
- `model_json_schema` trả schema chứ không phải dữ liệu.
- Pydantic v2 và v1 khác API; ưu tiên tài liệu v2.
- Structured LLM Output có thể cần schema subset, xử lý refusal và không thay thế factual validation.

## 4. Đọc sâu

- [Các bài học](./README.md)
- [Pydantic chính thức](https://docs.pydantic.dev/latest/)
