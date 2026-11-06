# EmailStr, HttpUrl, JSON Schema và mô tả field

> **Khóa học:** Pydantic Crash Course — tiếng Việt  
> **Học phần:** Module 04 — Validation, Field và validators  
> **Loại nội dung:** Bài học / thực hành  
> **Mức độ:** Cơ bản → ứng dụng

## 1. Tóm tắt

Dùng các kiểu tích hợp để tránh tự viết regex phức tạp, rồi xuất schema phục vụ tài liệu và tích hợp.

## 2. Mục tiêu học tập

Sau bài học này, bạn có thể:

- Khai báo `EmailStr` và `HttpUrl` để kiểm tra dữ liệu thường gặp.
- Thêm `description`, `examples` vào `Field`.
- Tạo `model_json_schema()` và phân biệt với dữ liệu instance.

## 3. Bối cảnh và vấn đề

Địa chỉ email và URL đã có nhiều quy tắc cần xử lý; tự viết regex thường thiếu trường hợp và rất khó bảo trì. Pydantic cung cấp các type phổ biến để sử dụng như `EmailStr` hoặc `HttpUrl`. Ngoài ra, `model_json_schema()` là một hợp đồng machine-readable hữu ích cho API docs, tool integration và schema-driven UI.

## 4. Kiến thức cốt lõi

### 4.1. Dùng type có sẵn

```python
from pydantic import BaseModel, EmailStr, HttpUrl, Field

class Contact(BaseModel):
    email: EmailStr
    website: HttpUrl
    display_name: str = Field(min_length=1, description="Tên hiển thị")
```

Để dùng `EmailStr`, môi trường cần `email-validator`. `HttpUrl` kiểm tra URL có scheme HTTP/HTTPS và các điều kiện tương ứng; nó không kiểm tra website có thật sự truy cập được hay an toàn để fetch.

### 4.2. JSON Schema

`Contact.model_json_schema()` trả về `dict` có các trường như `properties`, `required`, `title`. Đây là đặc tả cấu trúc, không phải dữ liệu hiện tại của người dùng. Các framework web có thể dùng schema để tạo tài liệu API và xác thực đầu ra.

## 5. Ví dụ và thực hành hướng dẫn

```python
import json
from pydantic import BaseModel, EmailStr, HttpUrl, Field

class Contact(BaseModel):
    email: EmailStr
    website: HttpUrl
    display_name: str = Field(min_length=2, description="Tên công khai")

contact = Contact(
    email="alice@example.com", website="https://example.com", display_name="Alice"
)
print(contact.model_dump(mode="json"))
schema = Contact.model_json_schema()
print(json.dumps(schema, ensure_ascii=False, indent=2))
```

Đầu ra đầu tiên chứa dữ liệu người dùng; đầu ra thứ hai chứa schema cho tất cả Contact.

## 6. Điểm dễ sai và cách khắc phục

- URL hợp lệ về cú pháp **không có nghĩa** URL an toàn để backend fetch (rủi ro SSRF). Cần chính sách allowlist, kiểm tra DNS/IP và chặn mạng nội bộ nếu fetch URL từ user.
- Email hợp lệ cú pháp không chứng minh người dùng sở hữu mailbox đó.
- Không nhầm JSON Schema Pydantic với **subset JSON Schema** được một số nhà cung cấp LLM hỗ trợ.

## 7. Bài tập tự luyện

Viết model `LinkSubmission` gồm email, website, tiêu đề có độ dài 5–80. In JSON Schema và thử ba payload sai. Tiêu chí: lỗi đúng thuộc tính và phần schema mô tả được constraints.

## 8. Câu hỏi ôn tập trắc nghiệm

**Câu 1. Trường nào nên dùng để kiểm tra cú pháp email?**

A. `EmailStr`  
B. `str` thuần  
C. `HttpUrl`  
D. `dict`  

**Đáp án:** A.  
**Giải thích:** `EmailStr` kèm dependency xác nhận cú pháp email.

**Câu 2. `HttpUrl` có chứng minh URL an toàn để fetch không?**

A. Có, tự động chặn mọi IP nội bộ  
B. Không; cần bảo vệ SSRF và kiểm soát truy cập mạng  
C. Có, xác minh chứng chỉ của host ngay  
D. Có, tự quét mã độc website  

**Đáp án:** B.  
**Giải thích:** Kiểm tra format URL không thay thế kiểm soát mạng.

**Câu 3. `model_json_schema()` trả về gì?**

A. Chuỗi JSON chứa dữ liệu người dùng  
B. Instance model  
C. Dict mô tả cấu trúc model  
D. Một HTTP response  

**Đáp án:** C.  
**Giải thích:** JSON Schema phục vụ mô tả hợp đồng dữ liệu.


## 9. Tổng kết

Sử dụng kiểu dữ liệu tích hợp và JSON Schema giúp giảm regex thủ công, nhưng cần tách kiểm tra cú pháp với bảo mật và xác thực thực tế.
