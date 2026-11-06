# Nhận dữ liệu từ dict/JSON và xuất dữ liệu đã kiểm tra

> **Khóa học:** Pydantic Crash Course — tiếng Việt  
> **Học phần:** Module 03 — BaseModel và chuyển đổi dữ liệu  
> **Loại nội dung:** Bài học / thực hành  
> **Mức độ:** Cơ bản → ứng dụng

## 1. Tóm tắt

Sử dụng `model_validate`, `model_validate_json`, `model_dump` và `model_dump_json` để đi qua ranh giới API và database.

## 2. Mục tiêu học tập

Sau bài học này, bạn có thể:

- Phân biệt input Python dict với chuỗi JSON.
- Chuyển payload thành model bằng `model_validate()`.
- Xuất dữ liệu thành dict, JSON string và JSON Schema đúng mục đích.

## 3. Bối cảnh và vấn đề

Dữ liệu từ API thường đến dưới dạng JSON, được giải mã thành `dict`; dữ liệu database cũng có thể là mapping. Model là đối tượng tiện cho business logic; dictionary và JSON phù hợp cho truyền tải. Pydantic cung cấp các phương thức chuyển đổi có chủ đích để không phải viết code lặp cho từng trường.

## 4. Kiến thức cốt lõi

### 4.1. Ba dạng dữ liệu cần tách biệt

| Biểu diễn | API | Kết quả |
| --- | --- | --- |
| Python dict → model | `User.model_validate(payload)` | `User` instance |
| JSON string → model | `User.model_validate_json(json_text)` | `User` instance |
| Model → Python dict | `user.model_dump()` | `dict` |
| Model → JSON string | `user.model_dump_json()` | `str` |
| Class → JSON Schema | `User.model_json_schema()` | `dict` mô tả cấu trúc |

### 4.2. Các tùy chọn serialize hữu ích

`model_dump(exclude_none=True)` bỏ các trường giá trị `None`; `exclude_unset=True` bỏ các trường không được cung cấp khi khởi tạo; `mode="json"` cho cấu trúc Python tương thích JSON (chẳng hạn `datetime` → chuỗi). Không nhầm schema (mô tả kiểu dữ liệu) với dữ liệu thực.

## 5. Ví dụ và thực hành hướng dẫn

```python
from datetime import datetime, timezone
from pydantic import BaseModel

class Event(BaseModel):
    name: str
    time: datetime
    note: str | None = None

payload = {"name": "Meeting", "time": "2026-11-06T10:00:00+07:00"}
event = Event.model_validate(payload)
print(type(event.time).__name__)
print(event.model_dump(exclude_none=True))
print(event.model_dump(mode="json"))
json_text = event.model_dump_json()
restored = Event.model_validate_json(json_text)
print(restored.name)
print(Event.model_json_schema()["properties"].keys())
```

`model_dump()` có thể chứa `datetime` Python; `model_dump_json()` luôn cho chuỗi JSON, rất tiện để gửi qua HTTP hoặc lưu văn bản.

## 6. Điểm dễ sai và cách khắc phục

- `json.dumps(model)` không phải cách chuẩn để serialize Pydantic instance. Dùng `model_dump_json()` hoặc `model_dump(mode="json")`.
- `model_validate_json` nhận JSON string/bytes; nếu đã có `dict` dùng `model_validate`.
- Khi log model có secret, không dump nguyên dữ liệu nhạy cảm ra log.

## 7. Bài tập tự luyện

Viết converter nhận `payload` của `Event`, trả về JSON string; thêm hai trường hợp thời gian ISO hợp lệ và sai. Tiêu chí: validation hoạt động và round-trip không mất tên sự kiện.

## 8. Câu hỏi ôn tập trắc nghiệm

**Câu 1. Đã có Python dict từ API, nên dùng phương thức nào?**

A. `Event.model_validate(payload)`  
B. `Event.model_dump()`  
C. `Event.model_json_schema()`  
D. `Event.model_dump_json()`  

**Đáp án:** A.  
**Giải thích:** `model_validate` tạo instance và xác thực dict đầu vào.

**Câu 2. `model_dump_json()` trả về kiểu gì?**

A. Instance model  
B. Chuỗi JSON (`str`)  
C. JSON Schema dict  
D. Generator  

**Đáp án:** B.  
**Giải thích:** `model_dump_json()` serialize instance thành JSON string.

**Câu 3. Cần mô tả cấu trúc đầu vào cho API docs thì dùng?**

A. `event.model_dump_json()`  
B. `event.name`  
C. `Event.model_json_schema()`  
D. `Event.model_copy()`  

**Đáp án:** C.  
**Giải thích:** Schema mô tả trường, kiểu và ràng buộc của class.


## 9. Tổng kết

Pydantic cung cấp đường chuyển đổi rõ ràng giữa dict, JSON string, model và JSON Schema; mỗi biểu diễn phục vụ một mục đích khác nhau.
