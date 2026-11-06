# LAB: Kiểm tra payload API cho ứng dụng quản lý đơn hàng

> **Khóa học:** Pydantic Crash Course — tiếng Việt  
> **Học phần:** Module 08 — Thực hành tích hợp và tổng kết  
> **Loại nội dung:** Bài học / thực hành  
> **Mức độ:** Cơ bản → ứng dụng

## 1. Tóm tắt

Lắp ghép BaseModel, nested models, Field, errors và serialization thành luồng xử lý request hoàn chỉnh, không cần API server.

## 2. Mục tiêu học tập

Sau bài học này, bạn có thể:

- Triển khai schema nhận order và validate payload.
- Chuẩn hóa lỗi về danh sách field-path phù hợp cho frontend.
- Tạo response typed và JSON string đầu ra.

## 3. Bối cảnh và vấn đề

Bài thực hành mô phỏng backend nhận HTTP JSON nhưng chạy độc lập bằng Python. Người học viết model request, xử lý lỗi và tạo kết quả để trả về client. Đây là kỹ năng có thể dùng trực tiếp trước khi tích hợp FastAPI, worker hoặc AI Agent.

## 4. Kiến thức cốt lõi

### 4.1. Thiết kế schema

Một order gồm mã đơn, khách hàng, các dòng sản phẩm; mỗi dòng có `sku`, `quantity` và `price`. Input không được chứa key lạ; mỗi đơn có ít nhất một dòng. Output trả mã đơn, tổng tiền và trạng thái, không mang các field nội bộ.

### 4.2. Các bước lab

**Bước 1:** Cài `pydantic` và tạo file `order_lab.py`.

**Bước 2:** Định nghĩa model con `Item` và model cha `CreateOrder`.

**Bước 3:** Tạo 2 payload: hợp lệ và payload lỗi (`quantity=0`, `items=[]`, key thừa).

**Bước 4:** Bọc `model_validate` trong `try/except ValidationError`, biến errors thành cặp `field` / `message`.

**Bước 5:** Serialize output bằng `model_dump_json()` và xác minh kết quả là chuỗi JSON hợp lệ.

## 5. Ví dụ và thực hành hướng dẫn

```python
from decimal import Decimal
from pydantic import BaseModel, ConfigDict, Field, ValidationError

class Item(BaseModel):
    sku: str = Field(min_length=1)
    quantity: int = Field(ge=1)
    price: Decimal = Field(ge=0)

class CreateOrder(BaseModel):
    model_config = ConfigDict(extra="forbid")
    order_id: str
    items: list[Item] = Field(min_length=1)

class OrderResult(BaseModel):
    order_id: str
    total: Decimal
    status: str

def process(raw: dict) -> dict:
    try:
        request = CreateOrder.model_validate(raw)
    except ValidationError as exc:
        return {
            "ok": False,
            "issues": [
                {"field": ".".join(map(str, e["loc"])), "message": e["msg"]}
                for e in exc.errors()
            ],
        }

    total = sum((i.price * i.quantity for i in request.items), Decimal("0"))
    out = OrderResult(order_id=request.order_id, total=total, status="accepted")
    return {"ok": True, "data": out.model_dump(mode="json")}

print(process({"order_id": "O-1", "items": [{"sku": "P1", "quantity": 2, "price": "5.50"}]}))
print(process({"order_id": "O-2", "items": [{"sku": "P1", "quantity": 0, "price": "5.50"}]}))
```

**Checkpoint:** Payload đúng trả `ok=True` và tổng `11.00`; payload sai trả `ok=False` với trường `items.0.quantity`.

## 6. Điểm dễ sai và cách khắc phục

- Trong sản phẩm thật, giá phải đối chiếu nguồn tin cậy thay vì hoàn toàn lấy từ client.
- API nên thêm mã trạng thái HTTP và logging phù hợp; lab chủ đích chỉ dạy tầng validation.
- `Decimal` serialize sang chuỗi ở `mode="json"` là bình thường; frontend phải có chiến lược parse và format tiền.

## 7. Bài tập tự luyện

Tự mở rộng `OrderResult` có `line_count`, thêm 5 unit tests với pytest cho order hợp lệ, thiếu ID, quantity âm, items rỗng và key lạ. **Deliverable:** file `order_lab.py` chạy được, bảng checkpoint và output minh họa lỗi. Tiêu chí: mọi tests pass và không lộ dữ liệu nhạy cảm.

## 8. Câu hỏi ôn tập trắc nghiệm

**Câu 1. Lỗi của phần tử đầu tiên, trường quantity nên biểu diễn như thế nào?**

A. `items.0.quantity`  
B. `quantity.items.1`  
C. `order_id`  
D. `item.quantity.1`  

**Đáp án:** A.  
**Giải thích:** Đường dẫn lỗi nested thường gồm tên danh sách, index rồi field.

**Câu 2. Vì sao cần `extra="forbid"` ở input API?**

A. Để tự tạo dữ liệu thiếu  
B. Để báo lỗi nếu client gửi field không mong đợi  
C. Để tăng tốc GPU  
D. Để lưu file log  

**Đáp án:** B.  
**Giải thích:** Từ chối extra keys giúp contract rõ ràng.

**Câu 3. Muốn trả object JSON-compatible nên dùng?**

A. `model_json_schema()`  
B. `model_copy()`  
C. `model_dump(mode="json")`  
D. `model_fields`  

**Đáp án:** C.  
**Giải thích:** JSON mode chuyển các kiểu đặc biệt sang biểu diễn tương thích JSON.


## 9. Tổng kết

LAB hoàn chỉnh minh họa ranh giới nhận dữ liệu → validate → business calculation → serialize output.
