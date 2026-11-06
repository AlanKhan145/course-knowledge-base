# Danh sách nested model và giỏ hàng có ràng buộc

> **Khóa học:** Pydantic Crash Course — tiếng Việt  
> **Học phần:** Module 05 — Nested models  
> **Loại nội dung:** Bài học / thực hành  
> **Mức độ:** Cơ bản → ứng dụng

## 1. Tóm tắt

Kết hợp `list[Model]`, `Field(min_length=1)` và validators để xử lý đơn hàng gồm nhiều sản phẩm.

## 2. Mục tiêu học tập

Sau bài học này, bạn có thể:

- Định nghĩa list chứa model thay vì raw dict.
- Validate từng phần tử và đường dẫn lỗi theo index.
- Tính tổng an toàn từ dữ liệu đã được kiểm tra.

## 3. Bối cảnh và vấn đề

Một order thường có nhiều order items. Dùng `list[OrderItem]` để mỗi phần tử được validate như một đối tượng độc lập. Trong hệ thống mua bán, bạn còn cần giá dương, số lượng tối thiểu, ít nhất một món và công thức tổng tiền. Ràng buộc này không nên chỉ kiểm tra sau khi một món đã được ghi vào database.

## 4. Kiến thức cốt lõi

### 4.1. Kết hợp Field trên danh sách

```python
from decimal import Decimal
from pydantic import BaseModel, Field

class OrderItem(BaseModel):
    sku: str = Field(min_length=1)
    quantity: int = Field(ge=1)
    unit_price: Decimal = Field(ge=0)

class Order(BaseModel):
    id: str
    items: list[OrderItem] = Field(min_length=1)
```

Sử dụng `Decimal` cho số tiền để tránh sai số nhị phân khi cộng giá trị thập phân. Khi serialize JSON, Decimal có thể thành chuỗi tùy đường serialize và ngữ cảnh.

### 4.2. Lỗi theo index

Nếu phần tử thứ hai có `quantity=0`, `loc` thường là `("items", 1, "quantity")`. Nhờ đó API biết chỉ ra dòng nào trong form bị sai.

## 5. Ví dụ và thực hành hướng dẫn

```python
from decimal import Decimal
from pydantic import BaseModel, Field

class Item(BaseModel):
    name: str
    quantity: int = Field(ge=1)
    price: Decimal = Field(ge=0)

class Cart(BaseModel):
    items: list[Item] = Field(min_length=1)

    def total(self) -> Decimal:
        return sum((x.price * x.quantity for x in self.items), start=Decimal("0"))

cart = Cart.model_validate({
    "items": [
        {"name": "Notebook", "quantity": 2, "price": "12.50"},
        {"name": "Pen", "quantity": 3, "price": "1.20"},
    ]
})
print(cart.total())  # 28.60
```

Hàm `total` chỉ tính toán trên dữ liệu đã qua validation. Trong hệ thống thật vẫn cần áp thuế, phí vận chuyển và quy tắc làm tròn phù hợp.

## 6. Điểm dễ sai và cách khắc phục

- Không dùng giá client gửi để chốt thanh toán nếu giá thực phải lấy từ database.
- `Decimal` giúp phép toán thập phân, nhưng quy tắc currency/rounding vẫn là nghiệp vụ.
- Mọi `list[Item]` đều được validate từng phần tử khi khởi tạo model; ràng buộc list rỗng cần `min_length=1`.

## 7. Bài tập tự luyện

Tạo `Order` từ JSON có 3 items, cố ý sai `quantity` item thứ ba, bắt lỗi và định vị phần tử. Sau đó tính tổng cho payload đúng. Tiêu chí: có test thứ tự lỗi và số tiền mong đợi.

## 8. Câu hỏi ôn tập trắc nghiệm

**Câu 1. Cấu hình nào bảo đảm giỏ hàng có ít nhất một phần tử?**

A. `Field(min_length=1)` trên `list[Item]`  
B. `Field(gt=1)` trên list  
C. `str | None`  
D. `ConfigDict(extra="allow")`  

**Đáp án:** A.  
**Giải thích:** `min_length` áp dụng cho độ dài list.

**Câu 2. Lỗi item thứ ba thường có index nào trong `loc`?**

A. 3  
B. 2  
C. 1  
D. 0  

**Đáp án:** B.  
**Giải thích:** Chỉ số list Python bắt đầu từ 0.

**Câu 3. Vì sao dùng Decimal trong tính tổng tiền?**

A. Để bỏ kiểm tra logic kinh doanh  
B. Để tự kết nối tài khoản ngân hàng  
C. Để phép toán thập phân tránh sai số float trong nhiều trường hợp  
D. Để xuất PDF  

**Đáp án:** C.  
**Giải thích:** Decimal phù hợp cho biểu diễn số tiền thập phân.


## 9. Tổng kết

Kết hợp nested model và list constraints bảo vệ giỏ hàng nhiều dòng. Tổng tiền vẫn cần xác minh giá nguồn trong service.
