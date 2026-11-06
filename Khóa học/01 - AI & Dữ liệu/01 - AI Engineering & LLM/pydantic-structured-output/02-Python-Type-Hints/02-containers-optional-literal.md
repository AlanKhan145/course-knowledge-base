# Type hints nâng cao: containers, Optional, Union và Literal

> **Khóa học:** Pydantic Crash Course — tiếng Việt  
> **Học phần:** Module 02 — Type hints trong Python  
> **Loại nội dung:** Bài học / thực hành  
> **Mức độ:** Cơ bản → ứng dụng

## 1. Tóm tắt

Biểu diễn danh sách, từ điển, tuple, giá trị có thể `None` và tập giá trị giới hạn bằng `Literal`.

## 2. Mục tiêu học tập

Sau bài học này, bạn có thể:

- Viết các annotations lồng nhau cho list và dict.
- Phân biệt `None` được chấp nhận với trường có thể được bỏ qua.
- Mô tả lựa chọn cố định bằng `Literal` và kiểm tra khi đưa vào BaseModel.

## 3. Bối cảnh và vấn đề

Ứng dụng ít khi chỉ có một giá trị nguyên thủy. Một payload có thể gồm danh sách nhãn, điểm số theo hạng mục, trạng thái đơn hàng. Type hints hỗ trợ mô tả cấu trúc này một cách rõ ràng. Chú ý rằng annotation `T | None` nói **giá trị được phép là `None`**; trong Pydantic v2, trường sẽ **vẫn bắt buộc** nếu không có giá trị mặc định.

## 4. Kiến thức cốt lõi

### 4.1. Kiểu container và Union

```python
from typing import Literal

tags: list[str] = ["python", "ai"]
scores: dict[str, int] = {"error": 12, "warning": 5}
location: tuple[float, float] = (21.0, 105.8)
ids: set[int] = {1, 2, 3}
identifier: int | str = "U-01"
status: Literal["draft", "published", "archived"] = "draft"
```

`Literal` thích hợp với một danh sách lựa chọn biết trước; với tập hằng số có ý nghĩa và tái sử dụng nhiều nơi, `Enum` cũng phù hợp.

### 4.2. Nullable khác optional/omittable

```python
from pydantic import BaseModel

class Profile(BaseModel):
    name: str
    middle_name: str | None          # bắt buộc truyền, nhưng cho phép None
    nickname: str | None = None     # có thể bỏ qua
```

`Profile(name="An", middle_name=None)` hợp lệ. `Profile(name="An")` lỗi vì thiếu `middle_name`. Đây là điểm chuyển từ type hints sang validation rất dễ nhầm.

## 5. Ví dụ và thực hành hướng dẫn

```python
from typing import Literal
from pydantic import BaseModel, ValidationError

class Article(BaseModel):
    tags: list[str]
    status: Literal["draft", "published", "archived"] = "draft"

article = Article(tags=["pydantic", "api"])
print(article.model_dump())
try:
    Article(tags=["python"], status="pending")
except ValidationError as exc:
    print(exc.errors()[0]["type"])
```

Trong annotation thuần Python, `"pending"` vẫn gán được; khi đưa vào Pydantic `Literal`, giá trị khác tập cho phép sẽ bị từ chối.

## 6. Điểm dễ sai và cách khắc phục

- Python `typing.Optional[str]` tương đương `str | None`, **không tự tạo default**.
- `list[str]` nói mọi phần tử mong muốn là chuỗi; chỉ Pydantic/type checker mới kiểm tra ở bối cảnh tương ứng.
- Với các kiểu Union phức tạp, kết quả ép kiểu có thể chịu ảnh hưởng chiến lược chọn nhánh; hãy viết tests cho payload nhập nhằng.

## 7. Bài tập tự luyện

Tạo model `Ticket` với `priority: Literal["low", "medium", "high"]`, `labels: list[str]`, `assignee: str | None = None`. Thử thiếu labels, priority không hợp lệ và assignee=None. Tiêu chí: mô tả được ba loại lỗi khác nhau.

## 8. Câu hỏi ôn tập trắc nghiệm

**Câu 1. `x: str | None` trong Pydantic v2 mà không có `= None` có ý nghĩa nào?**

A. Cho phép None nhưng trường vẫn bắt buộc  
B. Có thể bỏ qua trường hoàn toàn  
C. Chỉ nhận chuỗi rỗng  
D. Chỉ nhận None  

**Đáp án:** A.  
**Giải thích:** Union với None không tự thêm mặc định.

**Câu 2. Muốn trạng thái chỉ nhận `draft` hoặc `published`, nên dùng gì?**

A. `str` thuần  
B. `Literal["draft", "published"]`  
C. `float`  
D. `dict[str, str]`  

**Đáp án:** B.  
**Giải thích:** Literal giới hạn tập giá trị hợp lệ.

**Câu 3. Annotation nào mô tả danh sách chuỗi?**

A. `list[int]`  
B. `dict[str, int]`  
C. `list[str]`  
D. `set[float]`  

**Đáp án:** C.  
**Giải thích:** `list[str]` yêu cầu các phần tử có kiểu chuỗi trong contract.


## 9. Tổng kết

Container types, Union và Literal làm hợp đồng dữ liệu rõ ràng. Ghi nhớ mấu chốt: nullable và không bắt buộc truyền là hai vấn đề khác nhau.
