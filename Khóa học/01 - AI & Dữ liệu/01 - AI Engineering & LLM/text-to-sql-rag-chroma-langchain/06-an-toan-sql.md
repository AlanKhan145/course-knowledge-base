---
title: "Bài 06 — Kiểm tra SQL, phân quyền và giới hạn thực thi"
course: "Text-to-SQL với RAG, Chroma, LangChain, FastAPI và Streamlit"
lesson_number: 6
language: vi
---

# Bài 06 — Kiểm tra SQL, phân quyền và giới hạn thực thi

> **Tóm tắt:** Không để câu SQL do AI sinh chạy tùy ý trên dữ liệu sản xuất.

## 1. Mục tiêu học tập

- Giải thích được giới hạn của kiểm tra SQL bằng từ khóa.
- Thiết kế được luồng chỉ đọc và giới hạn kết quả.
- Nhận diện được các rủi ro về phân quyền, rò rỉ dữ liệu và query chậm.

## 2. Kiến thức và nguyên lý

### 2.1. Vì sao kiểm tra bằng regex là chưa đủ?

Một biểu thức kiểu `sql.lower().startswith("select")` **không phải** công cụ kiểm tra an toàn đáng tin cậy. SQL có comment, CTE, nhiều câu lệnh, hàm đặc biệt, subquery và khác biệt cú pháp theo dialect. Nên sử dụng **parser theo dialect** (chẳng hạn `sqlglot`) kết hợp quyền truy cập database ở mức thấp nhất.

### 2.2. Các lớp phòng vệ

| Lớp | Công việc |
| --- | --- |
| Chính sách người dùng | Xác định người hỏi được truy cập bảng/hàng nào |
| Lựa chọn schema | Chỉ truy xuất metadata cho các đối tượng đã được cấp quyền |
| SQL AST validator | Chấp nhận một truy vấn SELECT hợp lệ theo whitelist |
| SQLite read-only | Chỉ mở DB ở chế độ đọc và `PRAGMA query_only=ON` |
| Giới hạn truy vấn | Giới hạn số dòng, thời gian/chi phí, số lần thử |
| Giám sát | Log truy vấn đã làm sạch, mã lỗi, latency |

**Quan trọng:** SELECT vẫn có thể lộ dữ liệu nhạy cảm nếu bảng/hàng bị mở quyền quá rộng. Bảo mật không chỉ là chặn UPDATE/DELETE.

### 2.3. Minh họa validator tối thiểu

```python
import sqlglot
from sqlglot import exp

def validate_select(sql: str) -> str:
    statements = sqlglot.parse(sql, read="sqlite")
    if len(statements) != 1 or not isinstance(statements[0], exp.Select):
        raise ValueError("Chỉ chấp nhận một câu SELECT")
    return statements[0].sql(dialect="sqlite")
```

Đây **chỉ là bước học tập ban đầu**, chưa phải sandbox bảo mật. Hệ thống thật cần thêm whitelist bảng/hàm, authorizer của SQLite hoặc chính sách database tương đương, kết nối read-only, quyền theo người dùng, giới hạn tài nguyên và kiểm thử tấn công.

### 2.4. Giới hạn số dòng

Thay vì tin câu `LIMIT` do AI tạo, backend có thể áp giới hạn ngoài truy vấn:

```python
safe_sql = validate_select(proposed_sql)
wrapped_sql = f"SELECT * FROM ({safe_sql}) AS safe_result LIMIT ?"
rows = connection.execute(wrapped_sql, (50,)).fetchall()
```

Cách này giới hạn **số dòng trả về**, không chắc giới hạn lượng xử lý bên trong truy vấn. Phải kết hợp timeout/progress handler hoặc bộ giới hạn ở database.

### 2.5. Chính sách truy vấn trong ứng dụng nhiều người dùng

Nếu người dùng A không được xem kế hoạch ăn của B, việc LLM tạo `WHERE user_id = ...` không phải lớp bảo vệ chắc chắn. Backend phải cưỡng chế phạm vi truy vấn dựa trên danh tính đã xác thực, bằng row-level security, view cho phép, hoặc truy vấn tham số dựng bởi máy chủ.

## 3. Thực hành ngắn

Lập bảng 8 test đầu vào cho validator: `SELECT` hợp lệ, `DROP TABLE`, hai statement, comment xen vào, truy vấn không có LIMIT, truy vấn bảng bị cấm, `WITH`, và SELECT có hàm không được phép.

## 4. Tổng kết

Kiểm tra SQL, kết nối chỉ đọc, giới hạn tài nguyên và phân quyền là các lớp bổ sung cho nhau. Không mô tả hệ thống là “an toàn sản xuất” chỉ vì có một hàm kiểm tra cú pháp.

## 5. Câu hỏi ôn tập

### Câu 1

Vì sao `startswith("SELECT")` chưa đủ để bảo vệ ứng dụng?

A. Vì SQL không có SELECT  
B. Vì không phân tích được đầy đủ cấu trúc SQL  
C. Vì SQLite không có parser  
D. Vì cần CSS  

**Đáp án:** B. **Giải thích:** Chuỗi ký tự đầu không mô tả được toàn bộ cây cú pháp và hành vi.

### Câu 2

Chế độ mở database phù hợp với Text-to-SQL đọc dữ liệu là gì?

A. Read-only  
B. Quyền admin  
C. Quyền xóa bảng  
D. Quyền cập nhật schema  

**Đáp án:** A. **Giải thích:** Quyền tối thiểu làm giảm tác động của lỗi.

### Câu 3

`LIMIT 50` thực sự bảo đảm điều gì?

A. Câu SQL chạy dưới 50ms  
B. Không có lỗi JOIN  
C. Tối đa 50 hàng kết quả ở tầng ngoài  
D. Không truy cập cột nhạy cảm  

**Đáp án:** C. **Giải thích:** LIMIT chủ yếu giới hạn số hàng kết quả, không kiểm soát chi phí tính toán.

### Câu 4

Rủi ro nào vẫn có thể tồn tại khi chỉ cho phép SELECT?

A. Không có rủi ro  
B. Tự động mất dữ liệu  
C. Tất cả câu SQL đều rẻ  
D. Rò rỉ dữ liệu từ bảng/hàng không được phép  

**Đáp án:** D. **Giải thích:** Đọc trái phép cũng là một lỗ hổng nghiêm trọng.

### Câu 5

Cách kiểm soát user_id an toàn hơn là gì?

A. Nhờ LLM luôn nhớ thêm WHERE  
B. Cưỡng chế quyền ở backend/DB dựa trên danh tính đã xác thực  
C. Cho user gửi user_id tùy ý  
D. Ghi user_id vào tên bảng  

**Đáp án:** B. **Giải thích:** Server phải xác thực và thực thi giới hạn quyền độc lập với model.
