# Nested Models: một đối tượng chứa mô hình khác

> **Khóa học:** Pydantic Crash Course — tiếng Việt  
> **Học phần:** Module 05 — Nested models  
> **Loại nội dung:** Bài học / thực hành  
> **Mức độ:** Cơ bản → ứng dụng

## 1. Tóm tắt

Mô hình dữ liệu thực tế gồm người dùng, địa chỉ, đơn hàng và các phần tử con. Pydantic validate xuyên qua nhiều cấp.

## 2. Mục tiêu học tập

Sau bài học này, bạn có thể:

- Định nghĩa nested BaseModel.
- Nhận dict lồng nhau và truy cập thuộc tính con.
- Đọc vị trí lỗi nhiều cấp trong ValidationError.

## 3. Bối cảnh và vấn đề

Trong hệ thống thương mại, một đơn hàng không chỉ có `order_id` mà còn có thông tin khách, địa chỉ và sản phẩm. Tách chúng thành các model nhỏ, mỗi model chịu trách nhiệm ràng buộc riêng, rồi ghép lại thành schema lớn. Khi Pydantic nhận dict nested, nó tạo các đối tượng con phù hợp và kiểm tra mọi tầng.

## 4. Kiến thức cốt lõi

### 4.1. Tách model theo thực thể

```python
from pydantic import BaseModel, Field

class Address(BaseModel):
    city: str
    country: str

class Customer(BaseModel):
    id: int
    name: str
    address: Address

class Order(BaseModel):
    id: str
    customer: Customer
    total: float = Field(ge=0)
```

Khi truy cập `order.customer.address.city`, editor biết kiểu của mỗi cấp. Không cần tự viết vòng lặp ép từng dict thành class.

### 4.2. Validation lan xuống con

Dữ liệu sai trong `customer.address.city` sẽ có `loc` chứa chuỗi cấp: `("customer", "address", "city")`. Điều này đặc biệt hữu ích cho client form nhiều tầng và log lỗi API.

## 5. Ví dụ và thực hành hướng dẫn

```python
from pydantic import BaseModel, ValidationError

class Address(BaseModel):
    city: str

class User(BaseModel):
    name: str
    address: Address

ok = User.model_validate({"name": "Lan", "address": {"city": "Hà Nội"}})
print(ok.address.city)

try:
    User.model_validate({"name": "Lan", "address": {"city": 123}})
except ValidationError as exc:
    print(exc.errors()[0]["loc"])
```

Khác một số loại khác, Pydantic v2 mặc định không ép số nguyên thành chuỗi thông thường; `city=123` sẽ tạo lỗi ở field nested.

## 6. Điểm dễ sai và cách khắc phục

- Không truyền `address={}` nếu `city` là required; sẽ nhận lỗi nested.
- Không đồng nhất nested BaseModel với quan hệ ORM; model không tự truy vấn database.
- Nếu chỉ cần tham chiếu id giữa thực thể, cân nhắc model riêng tránh nested payload quá lớn.

## 7. Bài tập tự luyện

Tạo `Invoice` gồm `customer` có `address`, `amount >= 0`. Kiểm tra city rỗng (thêm `min_length=1`), thiếu địa chỉ và tổng âm. Tiêu chí: lỗi có `loc` đúng cấp.

## 8. Câu hỏi ôn tập trắc nghiệm

**Câu 1. Lỗi trong field `address.city` của customer xuất hiện thế nào?**

A. Trong `loc` theo đường đi các model con  
B. Chỉ hiển thị ở `order_id`  
C. Không được Pydantic phát hiện  
D. Tự sửa thành None  

**Đáp án:** A.  
**Giải thích:** Pydantic validate nested model và ghi nhận vị trí lỗi nhiều cấp.

**Câu 2. Lợi ích chính của nested model là gì?**

A. Tự động tạo bảng SQL  
B. Tái sử dụng schema con và validate dữ liệu nhiều tầng  
C. Tăng tốc mạng  
D. Không còn cần JSON  

**Đáp án:** B.  
**Giải thích:** Nested models phù hợp cấu trúc thực tế và tạo type safety.

**Câu 3. Khi nhận nested dict, Pydantic làm gì?**

A. Chỉ lưu nguyên một chuỗi text  
B. Bỏ qua mọi dữ liệu lồng nhau  
C. Có thể tạo và validate instance model con  
D. Tự kết nối đến database  

**Đáp án:** C.  
**Giải thích:** Pydantic ánh xạ dict vào class con đã khai báo.


## 9. Tổng kết

Nested Models giúp tái sử dụng schema theo thực thể và cung cấp thông báo lỗi chi tiết cho dữ liệu nhiều tầng.
