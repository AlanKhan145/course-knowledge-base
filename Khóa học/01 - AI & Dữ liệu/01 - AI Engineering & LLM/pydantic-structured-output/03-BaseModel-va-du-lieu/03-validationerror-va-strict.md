# ValidationError, coercion và strict mode

> **Khóa học:** Pydantic Crash Course — tiếng Việt  
> **Học phần:** Module 03 — BaseModel và chuyển đổi dữ liệu  
> **Loại nội dung:** Bài học / thực hành  
> **Mức độ:** Cơ bản → ứng dụng

## 1. Tóm tắt

Xử lý lỗi validation có cấu trúc và chọn mức chặt chẽ khi tiếp nhận dữ liệu.

## 2. Mục tiêu học tập

Sau bài học này, bạn có thể:

- Đọc các thành phần `loc`, `msg`, `type` của ValidationError.
- Phân biệt coercion thông thường và strict mode.
- Thiết lập strict cho một field hoặc toàn bộ model.

## 3. Bối cảnh và vấn đề

Không phải mọi payload sai kiểu đều thất bại. Pydantic thường chuyển `"25"` thành `25`, hữu ích khi nhận dữ liệu form hoặc môi trường. Nhưng nếu bạn muốn hệ thống từ chối dữ liệu không đúng kiểu ngay từ đầu, hãy bật strict. Chọn chính sách theo ranh giới: dữ liệu biểu mẫu có thể hợp lý khi ép kiểu; luồng tài chính hoặc JSON protocol cần hợp đồng chặt hơn.

## 4. Kiến thức cốt lõi

### 4.1. Cấu trúc lỗi

`ValidationError.errors()` trả danh sách dict. Mỗi lỗi thường gồm `loc` (đường dẫn trường), `msg` (thông điệp), `type` (mã lỗi), `input` (đầu vào). Có thể hiển thị `loc` và `msg` cho client, nhưng tránh phản hồi dữ liệu nhạy cảm từ `input` trong sản phẩm thật.

### 4.2. Mức strict

```python
from pydantic import BaseModel, ConfigDict, Field

class Flexible(BaseModel):
    age: int

class StrictUser(BaseModel):
    model_config = ConfigDict(strict=True)
    age: int

class Hybrid(BaseModel):
    age: int = Field(strict=True)
    weight: float
```

`StrictUser(age="25")` thất bại; `Flexible(age="25")` có thể tạo instance. Lưu ý strict trên dữ liệu JSON có một số quy tắc chuyển đổi khác so với Python input (ví dụ một số loại ngày giờ).

## 5. Ví dụ và thực hành hướng dẫn

```python
from pydantic import BaseModel, ValidationError

class Ticket(BaseModel):
    id: int
    labels: list[str]

try:
    Ticket.model_validate({"id": "not-a-number", "labels": ["bug", 123]})
except ValidationError as exc:
    for issue in exc.errors():
        print("field=", issue["loc"])
        print("type=", issue["type"])
        print("reason=", issue["msg"])
```

Bản lỗi có thể xuất hiện ở cả `id` và `labels.1`. Điều này giúp frontend highlight đúng vị trí trường sai.

## 6. Điểm dễ sai và cách khắc phục

- Không lộ toàn bộ `ValidationError` ra client nếu trong payload có token hoặc secret.
- `strict=True` không phải là “luôn tốt hơn”; dùng nó sau khi hiểu dữ liệu từ nguồn nào.
- Đừng bắt toàn bộ `Exception` rồi trả “Invalid input”: sẽ che lỗi lập trình không liên quan.

## 7. Bài tập tự luyện

Viết hàm `validate_order(data: dict) -> dict` trả `{"ok": True, "data": ...}` hoặc `{"ok": False, "issues": ...}`; lọc chỉ `loc`, `msg`, `type`. Tiêu chí: xử lý ít nhất ba lỗi trong một payload mà không làm rò `input`.

## 8. Câu hỏi ôn tập trắc nghiệm

**Câu 1. Muốn từ chối `age="25"` thay vì ép sang int, chọn cách nào?**

A. `Field(strict=True)` hoặc `ConfigDict(strict=True)`  
B. `age: str`  
C. `age: int = 25`  
D. `type(age)`  

**Đáp án:** A.  
**Giải thích:** Strict mode kiểm soát coercion.

**Câu 2. `loc` trong lỗi validation dùng để làm gì?**

A. Đo thời gian validate  
B. Xác định vị trí trường sai  
C. Chọn API endpoint  
D. Mã HTTP status  

**Đáp án:** B.  
**Giải thích:** `loc` biểu diễn đường đi trong cấu trúc dữ liệu.

**Câu 3. Vì sao không trả nguyên `input` trong lỗi cho mọi client?**

A. Vì Pydantic không trả input  
B. Vì JSON không cho trường input  
C. Có thể lộ dữ liệu nhạy cảm  
D. Vì sẽ tự làm chậm GPU  

**Đáp án:** C.  
**Giải thích:** Input có thể chứa mật khẩu hoặc token.


## 9. Tổng kết

ValidationError giúp xử lý lỗi rõ ràng. Coercion là tiện ích, strict là chính sách; phải chọn phù hợp với rủi ro và hợp đồng API.
