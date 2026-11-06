# field_validator: kiểm tra và chuẩn hóa dữ liệu tùy chỉnh

> **Khóa học:** Pydantic Crash Course — tiếng Việt  
> **Học phần:** Module 04 — Validation, Field và validators  
> **Loại nội dung:** Bài học / thực hành  
> **Mức độ:** Cơ bản → ứng dụng

## 1. Tóm tắt

Khi constraints có sẵn không đủ, `@field_validator` cho phép kiểm tra và biến đổi giá trị theo logic riêng.

## 2. Mục tiêu học tập

Sau bài học này, bạn có thể:

- Viết `@field_validator` với mode `after`.
- Phân biệt validator `before` và `after`.
- Trả về giá trị hợp lệ hoặc ném `ValueError` có thông điệp hữu ích.

## 3. Bối cảnh và vấn đề

Nhiều yêu cầu không thể biểu diễn chỉ bằng độ dài hoặc khoảng số: username không chứa khoảng trắng; tên phải chuẩn hóa chữ thường; mã kho có prefix theo công ty. Validator là hàm có kiểm soát do Pydantic gọi trong quá trình kiểm tra. Với `mode="after"`, giá trị đầu vào đã được Pydantic xử lý theo type hint, nên logic có thể dựa vào kiểu được khai báo.

## 4. Kiến thức cốt lõi

### 4.1. Validator sau khi parse

```python
from pydantic import BaseModel, field_validator

class Account(BaseModel):
    username: str

    @field_validator("username")
    @classmethod
    def normalize_username(cls, value: str) -> str:
        cleaned = value.strip().lower()
        if not cleaned or " " in cleaned:
            raise ValueError("username không được rỗng hoặc chứa khoảng trắng")
        return cleaned
```

`@field_validator("username")` đăng ký logic; `@classmethod` xác định method nhận lớp; `return` trả giá trị cuối cùng gán vào model.

### 4.2. Before và after

`mode="before"` nhận **raw input** và hữu ích để xử lý dữ liệu chưa đồng nhất, nhưng phải phòng trường hợp kiểu lạ. `mode="after"` nhận giá trị đã được chuyển/validate kiểu cơ bản, thường dễ viết hơn. Khi tạo validator nên ưu tiên API đơn giản và kiểm thử các trường hợp rìa.

## 5. Ví dụ và thực hành hướng dẫn

```python
from pydantic import BaseModel, field_validator, ValidationError

class Username(BaseModel):
    name: str

    @field_validator("name")
    @classmethod
    def clean(cls, value: str) -> str:
        value = value.strip().lower()
        if " " in value or len(value) < 3:
            raise ValueError("tối thiểu 3 ký tự và không chứa khoảng trắng")
        return value

print(Username(name="  ALICE  ").name)
try:
    Username(name="a b")
except ValidationError as exc:
    print(exc.errors()[0]["msg"])
```

Thử `" ALICE "` cho thấy validation có thể vừa chuẩn hóa vừa chặn dữ liệu không hợp lệ.

## 6. Điểm dễ sai và cách khắc phục

- Quên `return value` làm kết quả validator trở thành `None` và gây lỗi khó đoán.
- Nếu cần kiểm tra nhiều field cùng lúc, dùng `model_validator` thay vì dựa vào thứ tự field.
- Không dùng `assert` để diễn đạt validation nghiệp vụ: có thể bị loại bỏ trong chế độ tối ưu Python.
- Không đặt tác dụng phụ ghi database hoặc gọi API vào validator nếu không thật cần thiết.

## 7. Bài tập tự luyện

Tạo model `Coupon` với `code: str`; validator chuẩn hóa `strip().upper()` và từ chối mã chứa ký tự ngoài A–Z, 0–9, dấu gạch nối. Có unit tests cho chuỗi rỗng, hợp lệ, ký tự lạ. Tiêu chí: thông điệp lỗi rõ và chuẩn hóa đúng.

## 8. Câu hỏi ôn tập trắc nghiệm

**Câu 1. Một `field_validator` mode after nhận dữ liệu ở giai đoạn nào?**

A. Sau khi Pydantic parse/validate kiểu cơ bản  
B. Luôn là bytes từ HTTP  
C. Trước mọi loại parsing  
D. Sau khi gửi response  

**Đáp án:** A.  
**Giải thích:** After validator nhận giá trị đã qua validation cơ bản.

**Câu 2. Nếu validator không `return` dữ liệu hợp lệ sẽ thế nào?**

A. Pydantic tự giữ giá trị cũ luôn luôn  
B. Giá trị có thể bị thay bằng None  
C. Dữ liệu tự gửi lên API  
D. Validator không chạy  

**Đáp án:** B.  
**Giải thích:** Kết quả return là đầu ra của validator; quên trả về là lỗi logic.

**Câu 3. Muốn kiểm tra `start_date <= end_date` nên ưu tiên gì?**

A. `Field(min_length=1)`  
B. `EmailStr`  
C. `model_validator`  
D. `Literal`  

**Đáp án:** C.  
**Giải thích:** Đây là điều kiện liên trường nên model validator phù hợp.


## 9. Tổng kết

Validator nên đơn nhiệm: chuẩn hóa, xác minh, trả giá trị, ném lỗi rõ ràng. Với rule liên trường, chuyển sang cấp model.
