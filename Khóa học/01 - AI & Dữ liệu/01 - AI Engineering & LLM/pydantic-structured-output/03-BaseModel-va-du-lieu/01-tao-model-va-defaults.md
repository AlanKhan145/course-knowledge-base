# BaseModel đầu tiên: trường bắt buộc, nullable và mặc định

> **Khóa học:** Pydantic Crash Course — tiếng Việt  
> **Học phần:** Module 03 — BaseModel và chuyển đổi dữ liệu  
> **Loại nội dung:** Bài học / thực hành  
> **Mức độ:** Cơ bản → ứng dụng

## 1. Tóm tắt

Kế thừa `BaseModel` để biến class thành cấu trúc dữ liệu có validation, thuộc tính và mặc định.

## 2. Mục tiêu học tập

Sau bài học này, bạn có thể:

- Định nghĩa và khởi tạo model bằng `BaseModel`.
- So sánh field bắt buộc, field có default và nullable.
- Giải thích cách Pydantic phản hồi khi thiếu hoặc sai dữ liệu.

## 3. Bối cảnh và vấn đề

Một model Pydantic là lớp Python mô tả các thuộc tính dữ liệu. Khi tạo instance, Pydantic phân tích dữ liệu đã đưa vào, ép kiểu khi phù hợp và báo `ValidationError` khi dữ liệu không đạt. Thuộc tính sau validation có thể truy cập bằng `user.name` thay vì phải truy cập `dict["name"]` ở mọi nơi.

## 4. Kiến thức cốt lõi

### 4.1. Cú pháp của model

```python
from pydantic import BaseModel, Field

class User(BaseModel):
    name: str
    email: str
    age: int | None = None
    active: bool = True
```

`name`, `email` phải có dữ liệu. `age` có thể thiếu vì mặc định là `None`. `active` có default `True`. Nếu cần không chấp nhận giá trị `None` cho tuổi thì dùng `age: int` và cung cấp số hợp lệ.

### 4.2. So sánh với dataclass

`@dataclass` chuẩn của Python tạo class lưu dữ liệu, tạo phương thức khởi tạo và biểu diễn tiện lợi, nhưng mặc định **không runtime-validate annotations** như Pydantic. Pydantic phù hợp hơn tại các biên nhận dữ liệu không đáng tin; dataclass phù hợp nhiều đối tượng nội bộ không cần validation tự động.

## 5. Ví dụ và thực hành hướng dẫn

```python
from pydantic import BaseModel, ValidationError

class User(BaseModel):
    name: str
    email: str
    age: int | None = None

print(User(name="Lan", email="lan@example.com"))
print(User(name="Nam", email="nam@example.com", age="25").age)

try:
    User(email="missing-name@example.com")
except ValidationError as exc:
    print(exc.errors()[0]["loc"])
```

Dòng thứ hai cho thấy ép chuỗi số thành `int` trong mặc định; trường name bị thiếu tạo lỗi ngay lúc khởi tạo.

## 6. Điểm dễ sai và cách khắc phục

- Không dùng kiểu `str` để tuyên bố địa chỉ email hợp lệ: `EmailStr` mới kiểm tra cú pháp email.
- `age: int | None` không có default vẫn bắt buộc; thêm `= None` nếu muốn bỏ qua.
- Validation trên tạo instance không có nghĩa việc gán thuộc tính sau đó luôn được kiểm tra; cần `validate_assignment=True` nếu muốn.

## 7. Bài tập tự luyện

Định nghĩa `Product(name, price, currency, available)` với `price` bắt buộc và `available=True` mặc định. Viết ba tình huống thiếu price, price sai và product hợp lệ. Tiêu chí: phân biệt được lỗi missing và lỗi parsing.

## 8. Câu hỏi ôn tập trắc nghiệm

**Câu 1. Field nào được phép bỏ qua khi khởi tạo?**

A. `age: int | None = None`  
B. `age: int | None`  
C. `age: int`  
D. `age: int = ...`  

**Đáp án:** A.  
**Giải thích:** Default `None` làm trường có thể bị lược bỏ.

**Câu 2. Lợi ích khi dùng model thay vì truyền raw dict giữa các tầng là gì?**

A. Không còn cần viết tests  
B. Có thuộc tính rõ ràng và dữ liệu đã được kiểm tra  
C. Tự suy ra mọi quy tắc nghiệp vụ  
D. Tự lưu database  

**Đáp án:** B.  
**Giải thích:** Model diễn đạt schema và thực hiện validation ở ranh giới.

**Câu 3. Dataclass chuẩn khác Pydantic BaseModel ở đâu?**

A. Không tạo được lớp Python  
B. Không truy cập được thuộc tính  
C. Không tự validation annotations lúc khởi tạo theo mặc định  
D. Chỉ hoạt động cùng API  

**Đáp án:** C.  
**Giải thích:** Dataclass của stdlib ưu tiên cấu trúc, không kiểm tra kiểu tự động.


## 9. Tổng kết

BaseModel là nền của khóa học. Trường required, default và nullable quyết định cách xử lý payload thiếu/sai giá trị.
