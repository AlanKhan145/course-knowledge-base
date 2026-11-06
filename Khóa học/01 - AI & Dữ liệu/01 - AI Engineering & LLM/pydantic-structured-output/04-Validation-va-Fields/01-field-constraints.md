# Field: điều kiện giới hạn số, chuỗi và danh sách

> **Khóa học:** Pydantic Crash Course — tiếng Việt  
> **Học phần:** Module 04 — Validation, Field và validators  
> **Loại nội dung:** Bài học / thực hành  
> **Mức độ:** Cơ bản → ứng dụng

## 1. Tóm tắt

Dùng `Field` để mô tả ràng buộc về số, chiều dài chuỗi, mẫu ký tự và độ dài list ngay trong schema.

## 2. Mục tiêu học tập

Sau bài học này, bạn có thể:

- Định nghĩa constraints `gt`, `ge`, `lt`, `le`, `min_length`, `max_length`.
- Kiểm tra ràng buộc với model đầu vào hợp lệ và không hợp lệ.
- Giải thích vì sao giới hạn nên nằm ở model hay service.

## 3. Bối cảnh và vấn đề

Type hint `price: float` chỉ nói giá thuộc loại số. Nó không nói rằng số tiền phải dương, tên sản phẩm không được rỗng hoặc giỏ hàng phải có ít nhất một món. Những điều kiện này có thể đưa vào `Field` để dữ liệu được kiểm tra đồng bộ ở mọi nơi sử dụng model.

## 4. Kiến thức cốt lõi

### 4.1. Các nhóm constraints

| Nhóm | Field arguments | Ví dụ |
| --- | --- | --- |
| Giá trị số | `gt`, `ge`, `lt`, `le` | `Field(gt=0)` |
| Độ dài | `min_length`, `max_length` | `Field(min_length=2)` |
| Mẫu chuỗi | `pattern` | `Field(pattern=r"^[A-Z]{2}-\d+$")` |
| Thông tin schema | `description`, `examples`, `title` | `Field(description="... ")` |

`gt` là lớn hơn (`>`), `ge` là lớn hơn hoặc bằng (`>=`). Ràng buộc được dùng cả trong validation lẫn JSON Schema (khi có ánh xạ hỗ trợ).

### 4.2. Khi nào dùng Field?

Dùng `Field` cho điều kiện có thể diễn đạt cục bộ trên một trường. Khi điều kiện liên quan nhiều trường (`start < end`) hoặc phụ thuộc trạng thái database, dùng validator hoặc business service. Không cố nhét toàn bộ logic nghiệp vụ vào model.

## 5. Ví dụ và thực hành hướng dẫn

```python
from pydantic import BaseModel, Field, ValidationError

class Order(BaseModel):
    product_code: str = Field(pattern=r"^[A-Z]{2}-\d{3}$")
    quantity: int = Field(ge=1, le=100)
    unit_price: float = Field(gt=0)
    tags: list[str] = Field(default_factory=list, max_length=5)

order = Order(product_code="AB-123", quantity=2, unit_price=10.5)
print(order.model_dump())

try:
    Order(product_code="bad", quantity=0, unit_price=-1)
except ValidationError as exc:
    for issue in exc.errors():
        print(issue["loc"], issue["msg"])
```

`default_factory=list` tạo giá trị mặc định mới theo từng instance, thể hiện rõ ý định dùng danh sách độc lập.

## 6. Điểm dễ sai và cách khắc phục

- `gt=0` không chấp nhận 0; `ge=0` chấp nhận 0.
- `pattern` kiểm tra mẫu; với yêu cầu phải khớp toàn chuỗi nên có `^...$` (hoặc cách neo phù hợp).
- Không dùng `float` cho tiền khi cần chính xác tuyệt đối; cân nhắc `Decimal` theo bài toán.
- `Field` không thay thế kiểm tra quyền hạn, tính tồn kho hoặc dữ liệu trên database.

## 7. Bài tập tự luyện

Tạo `Book` với `isbn` theo một pattern đơn giản, `title` ít nhất 3 ký tự, `pages >= 1`, `keywords` tối đa 6 phần tử. Viết bốn payload sai, mô tả lỗi. Tiêu chí: mọi điều kiện có `ValidationError` đúng trường.

## 8. Câu hỏi ôn tập trắc nghiệm

**Câu 1. Một trường số phải nhận từ 1 trở lên, cấu hình nào đúng?**

A. `Field(ge=1)`  
B. `Field(gt=1)`  
C. `Field(le=1)`  
D. `Field(max_length=1)`  

**Đáp án:** A.  
**Giải thích:** `ge=1` chấp nhận cả giá trị 1.

**Câu 2. Để đặt mặc định một danh sách mới, nên dùng?**

A. `Field(pattern="list")`  
B. `Field(default_factory=list)`  
C. `Field(strict=list)`  
D. `Field(ge=0)`  

**Đáp án:** B.  
**Giải thích:** `default_factory` tạo container riêng cho mỗi instance.

**Câu 3. Ràng buộc số lượng hàng còn trong kho nên đặt ở đâu?**

A. Chỉ trong `Field(gt=0)`  
B. Trong type hint `int`  
C. Service có truy cập dữ liệu tồn kho  
D. Không cần kiểm tra  

**Đáp án:** C.  
**Giải thích:** Số lượng tồn kho là trạng thái nghiệp vụ ở database, không suy ra được chỉ từ kiểu.


## 9. Tổng kết

Field khai báo giới hạn dữ liệu ngắn gọn và có thể tái sử dụng. Dùng nó cho điều kiện từng trường, giữ business validation riêng.
