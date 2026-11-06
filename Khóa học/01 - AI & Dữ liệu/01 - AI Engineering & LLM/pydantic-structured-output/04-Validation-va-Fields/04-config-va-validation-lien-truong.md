# Cấu hình model và kiểm tra ràng buộc liên trường

> **Khóa học:** Pydantic Crash Course — tiếng Việt  
> **Học phần:** Module 04 — Validation, Field và validators  
> **Loại nội dung:** Bài học / thực hành  
> **Mức độ:** Cơ bản → ứng dụng

## 1. Tóm tắt

Dùng `ConfigDict` và `model_validator` cho các quy tắc khó diễn tả bằng từng Field độc lập.

## 2. Mục tiêu học tập

Sau bài học này, bạn có thể:

- Thiết lập `extra="forbid"` và `validate_assignment=True`.
- Viết `model_validator(mode="after")` để kiểm tra liên trường.
- Phân biệt validate ở khởi tạo và validate khi sửa thuộc tính.

## 3. Bối cảnh và vấn đề

Bên cạnh giới hạn từng trường, hệ thống thường cần chính sách chung: chấp nhận hay từ chối key thừa, có validate khi gán thuộc tính mới, có strict trên toàn model. `ConfigDict` giúp khai báo chính sách ở cấp lớp. `model_validator` kiểm tra quan hệ giữa các giá trị đã chuẩn hóa.

## 4. Kiến thức cốt lõi

### 4.1. Cấu hình model

```python
from pydantic import BaseModel, ConfigDict

class Payload(BaseModel):
    model_config = ConfigDict(extra="forbid", validate_assignment=True)
    name: str
```

`extra="forbid"` từ chối key không khai báo; mặc định Pydantic thường bỏ qua extra fields. `validate_assignment=True` validate khi **gán thuộc tính model**, không thể tự chứng minh bất biến mọi đối tượng lồng nhau nếu mutate in-place. `frozen=True` giúp hạn chế thay đổi thuộc tính nhưng không đồng nghĩa deep immutability.

### 4.2. Model validator

```python
from datetime import date
from typing import Self
from pydantic import BaseModel, model_validator

class Booking(BaseModel):
    start: date
    end: date

    @model_validator(mode="after")
    def verify_range(self) -> Self:
        if self.end < self.start:
            raise ValueError("end phải sau hoặc bằng start")
        return self
```

`Self` cần Python hỗ trợ `typing.Self` (Python 3.11+); nếu dùng Python cũ hơn, có thể dùng `from typing_extensions import Self`.

## 5. Ví dụ và thực hành hướng dẫn

```python
from datetime import date
from typing import Self
from pydantic import BaseModel, ConfigDict, model_validator, ValidationError

class Period(BaseModel):
    model_config = ConfigDict(extra="forbid")
    start: date
    end: date

    @model_validator(mode="after")
    def ordered(self) -> Self:
        if self.start > self.end:
            raise ValueError("start không được sau end")
        return self

for payload in [
    {"start": "2026-11-01", "end": "2026-11-10"},
    {"start": "2026-11-10", "end": "2026-11-01"},
    {"start": "2026-11-01", "end": "2026-11-10", "unknown": 1},
]:
    try:
        print(Period.model_validate(payload))
    except ValidationError as exc:
        print([e["msg"] for e in exc.errors()])
```

So sánh lỗi liên trường và lỗi `extra_forbidden`.

## 6. Điểm dễ sai và cách khắc phục

- `extra="ignore"` có thể âm thầm bỏ key sai chính tả. API ổn định nên cân nhắc `forbid`.
- Không dùng `model_validator` truy cập mạng hoặc ghi dữ liệu nếu muốn validation thuần, nhanh và dễ test.
- `validate_assignment` không phải cơ chế transaction hay bảo vệ các mutable nested objects khỏi sửa sâu.

## 7. Bài tập tự luyện

Thiết kế model `Discount(start, end, percent)` với `percent` trong [0,100], `start <= end`, `extra="forbid"`. Thử payload thêm `currency`, % ngoài khoảng và ngày ngược. Tiêu chí: ba loại sai đều bị báo rõ.

## 8. Câu hỏi ôn tập trắc nghiệm

**Câu 1. Muốn từ chối các key ngoài schema, dùng cấu hình nào?**

A. `ConfigDict(extra="forbid")`  
B. `ConfigDict(extra="ignore")`  
C. `Field(default_factory=dict)`  
D. `ConfigDict(frozen=False)`  

**Đáp án:** A.  
**Giải thích:** forbid phát sinh lỗi nếu input có thuộc tính lạ.

**Câu 2. Kiểm tra `end >= start` nên dùng?**

A. `HttpUrl`  
B. `model_validator(mode="after")`  
C. `Literal`  
D. `model_dump_json()`  

**Đáp án:** B.  
**Giải thích:** Quan hệ giữa hai field được xử lý tốt ở model level.

**Câu 3. `validate_assignment=True` đảm bảo điều gì?**

A. Khóa không cho sửa mọi object con  
B. Tự kiểm tra tất cả rows database  
C. Kiểm tra khi gán trực tiếp field của model  
D. Tự sinh UI form  

**Đáp án:** C.  
**Giải thích:** Tùy chọn này validate assignment trên model.


## 9. Tổng kết

Model config xác lập chính sách chung; model validator diễn tả invariants liên trường. Hãy giữ validation thuần và dễ kiểm thử.
