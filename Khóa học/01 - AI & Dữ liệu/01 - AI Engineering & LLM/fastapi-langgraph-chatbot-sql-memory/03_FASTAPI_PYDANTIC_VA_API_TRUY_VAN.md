# Bài 03 — Xây dựng API dữ liệu và API chat với FastAPI, Pydantic

## 1. Tóm tắt

Agent chỉ có thể truy vấn dữ liệu ổn định khi backend cung cấp một giao diện gọi rõ ràng. FastAPI tạo ra lớp HTTP; Pydantic kiểm tra dữ liệu đầu vào/đầu ra; SQLAlchemy thực thi truy vấn. Bài này xây các endpoint để chatbot đọc **khách hàng, đơn hàng, tồn kho** và endpoint `POST /api/chat` dùng để kích hoạt agent.

## 2. Mục tiêu học tập

- Tạo `FastAPI` application và router prefix `/api`.
- Xây Pydantic schema với `ConfigDict(from_attributes=True)`.
- Truy vấn có điều kiện bằng `select`, `where`, `ilike`, `order_by`, `limit`.
- Tạo request/response có `session_id`, `user_id`, `messages`.
- Phân biệt chế độ CORS phát triển với cấu hình bảo mật production.

## 3. Thiết kế API

| HTTP | Endpoint | Chức năng |
| --- | --- | --- |
| GET | `/api/health` | Kiểm tra server đang hoạt động |
| GET | `/api/customers` | Lọc khách theo ID hoặc từ khóa |
| GET | `/api/orders` | Lọc đơn hàng theo khách và trạng thái |
| GET | `/api/inventory` | Tra cứu tồn kho; sắp xếp theo số lượng |
| POST | `/api/chat` | Gửi hội thoại và nhận phản hồi từ agent |

Những endpoint `GET` là **nguồn dữ liệu cho tools**. Người dùng bình thường thường tương tác với `/api/chat`; agent gọi các endpoint dữ liệu khi câu trả lời cần thông tin SQL.

## 4. Xây schema dữ liệu

File `schemas.py`:

```python
from typing import Any, Literal
from pydantic import BaseModel, ConfigDict, Field

class CustomerOut(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    id: int
    name: str
    email: str
    city: str
    country: str

class OrderOut(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    id: int
    customer_id: int
    product_name: str
    status: str

class InventoryOut(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    id: int
    sku: str
    product_name: str
    category: str
    quantity: int
    unit: str
    price: float
    warehouse: str

class ChatMessage(BaseModel):
    role: Literal["user", "assistant"]
    content: str

class ChatRequest(BaseModel):
    session_id: str = Field(min_length=1, max_length=100)
    user_id: str = Field(min_length=1, max_length=100)
    messages: list[ChatMessage] = Field(min_length=1)

class ChatResponse(BaseModel):
    message: str
    session_id: str
```

`from_attributes=True` hỗ trợ xây response Pydantic từ đối tượng SQLAlchemy ORM. `Literal` giới hạn role hợp lệ. `Field(min_length=1)` ngăn danh sách message rỗng và session ID trống.

**Lưu ý bảo mật:** `user_id` được gửi từ client trong minh họa. Ở sản phẩm thực, không nên tin giá trị tự khai; phải lấy user ID từ cơ chế xác thực đã kiểm chứng (token/session hợp lệ).

## 5. Cấu hình ứng dụng và CORS

File `main.py`:

```python
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database import init_db
from app import router


def create_app() -> FastAPI:
    init_db()
    app = FastAPI(
        title="My Store AI Chatbot",
        version="1.0.0",
        description="FastAPI + LangGraph + SQLAlchemy + SQLite",
    )
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["http://localhost:5173"],
        allow_credentials=True,
        allow_methods=["GET", "POST"],
        allow_headers=["Content-Type", "Authorization"],
    )
    app.include_router(router)
    return app

app = create_app()
```

CORS cho phép frontend ở một origin cụ thể gọi API từ trình duyệt. Khi thử nghiệm nội bộ, nhiều ví dụ bật `allow_methods=["*"]` và `allow_headers=["*"]`, nhưng triển khai production nên giới hạn origin, method và header theo đúng nhu cầu.

## 6. Viết các endpoint GET

File `app.py` — ví dụ các route nghiệp vụ:

```python
from typing import Annotated
from fastapi import APIRouter, Depends, Query
from sqlalchemy import or_, select
from sqlalchemy.orm import Session
from database import get_db
from models import Customer, Order, InventoryItem
from schemas import CustomerOut, OrderOut, InventoryOut

router = APIRouter(prefix="/api")
Db = Annotated[Session, Depends(get_db)]

@router.get("/health")
def health():
    return {"status": "ok"}

@router.get("/customers", response_model=list[CustomerOut])
def get_customers(
    db: Db,
    customer_id: int | None = None,
    search: str | None = None,
    limit: int = Query(default=20, ge=1, le=100),
):
    stmt = select(Customer)
    if customer_id is not None:
        stmt = stmt.where(Customer.id == customer_id)
    if search:
        term = f"%{search}%"
        stmt = stmt.where(or_(
            Customer.name.ilike(term),
            Customer.email.ilike(term),
            Customer.city.ilike(term),
        ))
    return db.scalars(stmt.order_by(Customer.id).limit(limit)).all()

@router.get("/orders", response_model=list[OrderOut])
def get_orders(
    db: Db,
    customer_id: int | None = None,
    status: str | None = None,
    limit: int = Query(default=20, ge=1, le=100),
):
    stmt = select(Order)
    if customer_id is not None:
        stmt = stmt.where(Order.customer_id == customer_id)
    if status:
        stmt = stmt.where(Order.status == status)
    return db.scalars(stmt.order_by(Order.id).limit(limit)).all()

@router.get("/inventory", response_model=list[InventoryOut])
def get_inventory(
    db: Db,
    search: str | None = None,
    limit: int = Query(default=20, ge=1, le=100),
):
    stmt = select(InventoryItem)
    if search:
        stmt = stmt.where(InventoryItem.product_name.ilike(f"%{search}%"))
    return db.scalars(stmt.order_by(InventoryItem.quantity.asc()).limit(limit)).all()
```

`ilike` giúp tìm từ khóa không phân biệt chữ hoa/thường; `%...%` là ký tự đại diện SQL. Các biểu thức xây bằng SQLAlchemy không nối thủ công chuỗi SQL, nhờ đó giảm rủi ro injection so với tự dựng câu truy vấn.

Với câu “Có bao nhiêu khách hàng ở Delhi?”, API dạng danh sách có giới hạn **không đủ để đếm chính xác toàn bộ khách hàng** khi nhiều hơn giới hạn. Một công cụ đếm chuyên dụng hoặc truy vấn `COUNT` là giải pháp đúng; không được lấy số lượng của danh sách bị cắt và coi đó là tổng số.

## 7. Xây API chat

`POST /api/chat` nhận hội thoại, user ID, session ID; gọi `run_chat()` trong `agent.py`, rồi trả lời dưới cấu trúc thống nhất:

```python
from schemas import ChatRequest, ChatResponse
from agent import run_chat

@router.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    reply = await run_chat(
        messages=request.messages,
        session_id=request.session_id,
        user_id=request.user_id,
    )
    return ChatResponse(message=reply, session_id=request.session_id)
```

Đoạn mã trên đặt tiếp **vào cùng file `app.py`**, sử dụng `router` đã định nghĩa. `run_chat` là hàm bất đồng bộ sẽ được cài trong bài ghép tích hợp.

Payload minh họa:

```json
{
  "session_id": "demo-001",
  "user_id": "rahul",
  "messages": [
    {"role": "user", "content": "Tôi tên là Rahul."}
  ]
}
```

Chạy server sau khi có đầy đủ các module:

```bash
uvicorn main:app --reload
```

Swagger UI của FastAPI có thể truy cập tại `/docs` trong chế độ local để xem schema và thử endpoint.

## 8. Lỗi thường gặp và bài thực hành

- **422 Unprocessable Entity:** payload thiếu `messages`, sai `role`, hoặc `session_id` rỗng.
- **500 Internal Server Error:** thường do import vòng, bảng chưa tạo, code `agent.py` chưa có hoặc kết nối database lỗi.
- **CORS error trên trình duyệt:** origin của frontend không khớp `allow_origins`.
- **Dữ liệu sai tổng số:** đếm kết quả đã bị `limit()` thay vì thực hiện `COUNT`.

**Thực hành:** gọi `/api/health`, tìm khách theo `city`, lấy các order có `status` phù hợp và liệt kê tồn kho theo số lượng tăng dần. Thử gửi `role` không hợp lệ để quan sát Pydantic từ chối request.

## 9. Câu hỏi ôn tập

**Câu 1.** Tại sao dùng `response_model=list[CustomerOut]`?  
A. Để định nghĩa và kiểm tra cấu trúc phản hồi. B. Để chạy LLM. C. Để tạo SQLite. D. Để mở CORS.  
**Đáp án: A.** FastAPI kết hợp Pydantic kiểm soát shape đầu ra.

**Câu 2.** `Query(ge=1, le=100)` dùng để làm gì?  
A. Khởi tạo khách hàng. B. Ghi nhớ hội thoại. C. Ràng buộc giới hạn trả về từ 1 đến 100. D. Thay thế authentication.  
**Đáp án: C.** Đây là validation đối với tham số truy vấn.

**Câu 3.** Vì sao không nên dùng `len(rows)` làm tổng số khách nếu `rows` đã giới hạn 20?  
A. Vì JSON rỗng. B. Vì không có session. C. Vì FastAPI không hỗ trợ `len`. D. Vì các bản ghi còn lại đã bị cắt.  
**Đáp án: D.** Muốn đếm tổng cần query đếm phù hợp.

**Câu 4.** `POST /api/chat` cần thông tin nào để gắn memory đúng người?  
A. `sku`. B. `user_id`. C. `warehouse`. D. `price`.  
**Đáp án: B.** User ID xác định phạm vi ghi nhớ của hội thoại.

**Câu 5.** Trong production, chọn cách nào phù hợp nhất?  
A. Mở mọi origin/method/header không kiểm soát. B. Bỏ validation. C. Xác thực người dùng và giới hạn CORS cần thiết. D. Dùng user ID tùy ý như bằng chứng định danh.  
**Đáp án: C.** Bảo mật yêu cầu xác thực và giảm bề mặt truy cập.

## 10. Tổng kết

Backend giờ có bộ hợp đồng HTTP rõ ràng. Pydantic hạn chế input sai, SQLAlchemy cung cấp truy vấn có bộ lọc, FastAPI trình bày các công cụ mà agent sắp gọi. Endpoint chat sẽ trở thành điểm vào thống nhất cho người dùng và frontend.
