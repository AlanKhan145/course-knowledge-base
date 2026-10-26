---
title: "Bài 07 — Xây dựng API backend với FastAPI"
course: "Text-to-SQL với RAG, Chroma, LangChain, FastAPI và Streamlit"
lesson_number: 7
language: vi
---

# Bài 07 — Xây dựng API backend với FastAPI

> **Tóm tắt:** Đóng gói pipeline Text-to-SQL thành một endpoint nhận câu hỏi và trả SQL/kết quả.

## 1. Mục tiêu học tập

- Định nghĩa được request/response bằng Pydantic.
- Xác định rõ nhiệm vụ của backend so với giao diện.
- Gửi thử được một POST request tới API nội bộ.

## 2. Kiến thức và nguyên lý

### 2.1. Vì sao cần backend riêng?

Frontend không nên giữ khóa API của LLM hoặc chuỗi kết nối database. **FastAPI** nhận câu hỏi, xác định quyền truy cập, gọi retriever/LLM, kiểm tra SQL, chạy SQLite và chuẩn hóa kết quả. Tách riêng backend giúp tái sử dụng cùng API cho web, ứng dụng di động hoặc công cụ nội bộ.

### 2.2. Hợp đồng API

```json
{"question": "Món nào nấu không quá 20 phút?"}
```

Phản hồi đề xuất:

```json
{
  "answer": "Có 3 món phù hợp trong dữ liệu mẫu.",
  "sql": "SELECT name FROM dishes WHERE cooking_minutes <= 20",
  "rows": [{"name": "Mì rau"}, {"name": "Salad trứng"}, {"name": "Mì nấm"}]
}
```

Tên món và số lượng chỉ minh họa định dạng; dữ liệu và đáp án phải lấy từ database thật. Với dữ liệu nhạy cảm, nên ẩn SQL hoặc dòng kết quả theo quyền người dùng.

### 2.3. Endpoint mẫu dùng Pydantic

```python
from fastapi import FastAPI
from pydantic import BaseModel, Field

app = FastAPI(title="Text-to-SQL API")

class AskRequest(BaseModel):
    question: str = Field(min_length=3, max_length=500)

@app.post("/ask")
def ask(payload: AskRequest):
    # Kết nối pipeline retrieval -> LLM -> validate -> execute.
    return {"message": "Triển khai trong demo/api.py", "question": payload.question}
```

Đoạn trên chỉ minh họa hợp đồng API. Trong `demo/api.py` có ví dụ nối một pipeline thật ở mức thử nghiệm.

### 2.4. Cách kiểm thử

Khởi chạy:

```bash
uvicorn api:app --app-dir demo --reload
```

Gửi thử request:

```bash
curl -X POST http://127.0.0.1:8000/ask   -H "Content-Type: application/json"   -d '{"question":"Món nào nấu dưới 20 phút?"}'
```

Trên Windows PowerShell có thể dùng `Invoke-RestMethod`, hoặc mở `/docs` để thử trên giao diện OpenAPI tự sinh.

### 2.5. Lưu ý triển khai

- Không bật CORS rộng một cách tùy tiện; frontend chạy cùng máy thường chỉ cần gọi server cục bộ.
- Kiểm soát xác thực, rate limit, timeout và xử lý lỗi.
- Không log API key, prompt bí mật hoặc toàn bộ dữ liệu người dùng.
- Với dữ liệu thực, schema retriever và chính sách database phải cùng phạm vi quyền.

## 3. Thực hành ngắn

Định nghĩa thêm `/health` trả `{"status":"ok"}`. Gọi endpoint bằng curl hoặc `/docs` và thử request rỗng để quan sát lỗi validation.

## 4. Tổng kết

FastAPI đưa pipeline thành dịch vụ có hợp đồng rõ ràng. Backend phải xác thực đầu vào, thực hiện kiểm tra và chỉ trả dữ liệu người dùng được phép xem.

## 5. Câu hỏi ôn tập

### Câu 1

Lý do quan trọng để chuyển việc truy vấn sang FastAPI là gì?

A. Ẩn logic truy vấn và thông tin bí mật khỏi frontend  
B. Streamlit không hiện chữ  
C. SQLite chỉ chạy trong trình duyệt  
D. Chroma không hỗ trợ Python  

**Đáp án:** A. **Giải thích:** Backend kiểm soát quyền, khóa và thực thi SQL.

### Câu 2

Pydantic trong ví dụ giúp gì?

A. Sinh embedding  
B. Vẽ biểu đồ  
C. Kiểm tra cấu trúc request  
D. Thay kết nối SQLite  

**Đáp án:** C. **Giải thích:** Pydantic định nghĩa và xác thực dữ liệu đầu vào.

### Câu 3

Phương thức phù hợp để gửi JSON câu hỏi là gì?

A. GET với mật khẩu  
B. POST  
C. DELETE  
D. TRACE  

**Đáp án:** B. **Giải thích:** POST thường được dùng cho body JSON chứa yêu cầu.

### Câu 4

Đường dẫn nào thử tài liệu tương tác của FastAPI mặc định?

A. /static  
B. /robots.txt  
C. /schema.sql  
D. /docs  

**Đáp án:** D. **Giải thích:** FastAPI cung cấp giao diện OpenAPI tại /docs theo cấu hình mặc định.

### Câu 5

Xử lý nào nên đặt ở backend?

A. Màu sắc tiêu đề  
B. Phân quyền và thực thi SQL  
C. Căn lề chat  
D. Ảnh đại diện  

**Đáp án:** B. **Giải thích:** Đó là trách nhiệm tin cậy cần được bảo vệ khỏi client.
