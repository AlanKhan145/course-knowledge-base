# Type hints: kiểu cơ bản, tham số và kiểu trả về

> **Khóa học:** Pydantic Crash Course — tiếng Việt  
> **Học phần:** Module 02 — Type hints trong Python  
> **Loại nội dung:** Bài học / thực hành  
> **Mức độ:** Cơ bản → ứng dụng

## 1. Tóm tắt

Type hints là cú pháp mô tả cấu trúc dữ liệu cho người đọc, IDE và công cụ kiểm tra tĩnh; chúng không tự validate đầu vào ở runtime.

## 2. Mục tiêu học tập

Sau bài học này, bạn có thể:

- Khai báo được `str`, `int`, `float`, `bool` cho biến và hàm.
- Giải thích ý nghĩa của `->` trong chữ ký hàm.
- Phân biệt công cụ kiểm tra kiểu tĩnh và Pydantic runtime validation.

## 3. Bối cảnh và vấn đề

Việc viết `name: str = "Dave"` làm rõ ý định của người lập trình nhưng bản thân Python vẫn cho phép gán giá trị khác kiểu. Đây là cơ sở Pydantic khai thác: nó đọc annotations để xây schema kiểm tra tại runtime. Chữ ký hàm giúp IDE autocomplete và cảnh báo sai kiểu sớm, tuy nhiên code Python không chạy type checker mặc định.

## 4. Kiến thức cốt lõi

### 4.1. Các kiểu phổ biến

| Annotation | Ý nghĩa | Ví dụ |
| --- | --- | --- |
| `str` | Chuỗi | `"Alice"` |
| `int` | Số nguyên | `32` |
| `float` | Số thực | `3.14` |
| `bool` | Logic | `True` |

### 4.2. Hàm có hợp đồng dữ liệu

```python
def create_user(name: str, age: int) -> dict[str, str | int]:
    return {"name": name, "age": age}
```

`name: str` và `age: int` diễn tả đầu vào; `-> dict[str, str | int]` diễn tả cấu trúc đầu ra. Annotation không thực thi kiểm tra. Các trình kiểm tra kiểu như Pyright và mypy có thể phát hiện nhiều sai lệch trước khi chạy.

## 5. Ví dụ và thực hành hướng dẫn

```python
age: int = 25
age = "unknown"  # Python cho phép ở runtime
print(age)

def add_one(value: int) -> int:
    return value + 1

# add_one("unknown")  # sẽ lỗi khi thực hiện phép +, không lỗi lúc truyền tham số
```

Thực hành bật type checking ở editor, quan sát cảnh báo khi truyền chuỗi vào hàm `add_one`. Sau đó chạy Python để thấy sự khác biệt giữa cảnh báo tĩnh và lỗi thực tế.

## 6. Điểm dễ sai và cách khắc phục

- Không nhầm việc IDE gạch đỏ với exception lúc chạy.
- `float` cho phép annotation nhưng vẫn phải xử lý trường hợp `nan`, vô hạn khi sử dụng trong logic thực tế.
- Type hints không thay thế `try/except` hoặc kiểm tra dữ liệu từ API.

## 7. Bài tập tự luyện

Viết `calculate_total(price: float, quantity: int) -> float`, truyền một chuỗi vào `quantity`. Giải thích kết quả ở IDE và runtime. Tiêu chí: hàm có đủ annotations và báo cáo riêng hai loại kiểm tra.

## 8. Câu hỏi ôn tập trắc nghiệm

**Câu 1. Ký hiệu `-> float` trong chữ ký hàm có chức năng gì?**

A. Khai báo kiểu giá trị trả về dự kiến  
B. Ép mọi kết quả thành float  
C. Tự động bắt ngoại lệ  
D. Giới hạn độ chính xác số thực  

**Đáp án:** A.  
**Giải thích:** Mũi tên thể hiện type hint cho giá trị trả về.

**Câu 2. Khi nào Pydantic khác type hints thuần?**

A. Khi viết chú thích `#`  
B. Khi Pydantic xác thực dữ liệu khi khởi tạo model  
C. Khi đặt tên biến  
D. Khi dùng print  

**Đáp án:** B.  
**Giải thích:** BaseModel chủ động chạy validation tại ranh giới dữ liệu.

**Câu 3. IDE báo truyền chuỗi vào hàm nhận `int`. Python mặc định sẽ làm gì?**

A. Luôn dừng trước khi chạy hàm  
B. Luôn đổi chuỗi sang int  
C. Vẫn có thể thực thi đến khi thao tác gây lỗi  
D. Tự sinh JSON Schema  

**Đáp án:** C.  
**Giải thích:** Thông thường annotations không được Python tự cưỡng chế.


## 9. Tổng kết

Type hints là ngôn ngữ mô tả hợp đồng. Khi cần dữ liệu đầu vào được kiểm tra thật, sử dụng công cụ runtime như Pydantic.
