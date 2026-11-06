# Bài 1. Dựng FastAPI và cấu hình Python backend

> **Module 05 — FastAPI, SQLAlchemy và schema**  
> Thời điểm tham chiếu: [0:43:42](https://www.youtube.com/watch?v=qF5il_9IwME&t=2622s).  
> Hình thức: bài học kết hợp thực hành.

## 1. Tóm tắt

Khởi chạy API có cấu hình rõ ràng, endpoint health và tách lớp logic khỏi phần nhận HTTP request.

## 2. Mục tiêu học tập

- Giải thích được cơ chế và lý do kỹ thuật của chủ đề **Dựng FastAPI và cấu hình Python backend**.
- Tự triển khai hoặc mô phỏng các bước thực hành và kiểm tra kết quả theo tiêu chí được nêu.
- Nhận diện các lỗi thiết kế/triển khai phổ biến và lựa chọn biện pháp xử lý có căn cứ.

## 3. Bối cảnh và vấn đề cần giải quyết

Backend là nơi phối hợp truy xuất, xác thực và gọi LLM. FastAPI cung cấp routing, validation và OpenAPI; `uv` quản lý môi trường Python, dependency và lệnh chạy. Cấu trúc tối thiểu nên có `app/main.py`, `app/config.py`, `app/api/` và `app/db/` để tránh file khổng lồ.

## 4. Kiến thức cốt lõi

### 4.1. Application factory và routes

Một endpoint nhỏ như `/health` tạo checkpoint trước khi đưa database vào. Business logic nên ở service thay vì nhồi toàn bộ trong decorator HTTP để test đơn vị dễ hơn.

### 4.2. Settings có kiểu

Đọc biến môi trường qua Pydantic Settings hoặc cơ chế tương đương, yêu cầu biến quan trọng và validate khi ứng dụng khởi động. Tách `Settings` giúp không truy cập `os.environ` rải rác.

### 4.3. Phát triển từng lát cắt

Đầu tiên test imports, health, error format; sau đó thêm DB session dependency; sau nữa mới triển khai API conversations và retrieval. Phản hồi sớm giúp phát hiện sai package path và `.env` trước khi code dài.

## 5. Quy trình áp dụng từng bước

Các bước dưới đây là phương án thực hành để tái tạo và kiểm chứng các nguyên tắc đã học. Điều chỉnh tên file, biến môi trường và phiên bản dependency theo dự án của bạn.

**Bước 1.** Trong `backend/`, tạo project Python và chạy `uv sync`.

**Bước 2.** Tạo `app/main.py`, thêm route health và startup config.

**Bước 3.** Chạy API trên localhost; truy cập `/docs` và gọi `/health`.

**Bước 4.** Tạo bài test API cho status code và response shape.

## 6. Ví dụ minh họa

Ví dụ sau tập trung vào một nguyên lý triển khai. Đây là mã/giả mã dùng cho học tập, có thể cần bổ sung các thành phần vận hành và kiểm thử khi tích hợp vào repository thực tế.

```python
from fastapi import FastAPI

app = FastAPI(title="Document Copilot API")

@app.get("/health")
def health():
    return {"status": "ok"}

# Chạy từ thư mục backend:
# uv run uvicorn app.main:app --reload
```

## 7. Kiểm tra kết quả và tiêu chí hoàn thành

- [ ] `GET /health` trả JSON dự đoán được.
- [ ] Code không in secret và mở được API docs trong môi trường dev.

**Checkpoint:** Người học cần trình bày được dữ liệu đầu vào, biến đổi hoặc hành động chính, đầu ra quan sát được và tình huống thất bại của phần này. Nếu chưa chứng minh được bằng lệnh chạy, ảnh chụp, test hoặc bảng so sánh, chưa nên đánh dấu hoàn tất.

## 8. Lỗi thường gặp và cách tự debug

1. Lỗi `ModuleNotFoundError` thường do chạy sai current working directory hoặc Python path.

2. CORS phải cấu hình origin cụ thể cho ứng dụng web, không mở mọi origin với credential.

Khi gặp lỗi, hãy thu nhỏ tình huống về một input cụ thể, kiểm tra log/request id, xác nhận từng lớp độc lập và chỉ sửa một giả thuyết tại một thời điểm. Cách làm này giúp phân biệt sai dữ liệu, sai hợp đồng API và sai cấu hình môi trường.

## 9. Bài tập ứng dụng

Viết `GET /health` và `GET /health/ready` (kiểm tra DB) riêng, thêm test cho tình huống DB không sẵn sàng.

**Sản phẩm nộp:** một README ngắn mô tả cách chạy, dữ liệu/case thử, bằng chứng đã kiểm tra và tối thiểu một tình huống lỗi được xử lý. Nếu thực hành với tài khoản thật, loại bỏ mọi secret và dữ liệu nhạy cảm khỏi bản nộp.

## 10. Câu hỏi ôn tập trắc nghiệm

**Câu 1.** Vai trò của FastAPI?

A. Cung cấp lớp HTTP API, validation và OpenAPI.  
B. Tập trung load/validate biến môi trường.  
C. Endpoint `/health` độc lập với LLM.  
D. Dễ kiểm thử nghiệp vụ và tái sử dụng logic.  

**Đáp án: A.** FastAPI không tự xây hệ thống RAG.

**Câu 2.** Vì sao dùng một Settings class?

A. Endpoint `/health` độc lập với LLM.  
B. Dễ kiểm thử nghiệp vụ và tái sử dụng logic.  
C. Kiểm tra đường dẫn package, cwd và lệnh khởi chạy.  
D. Tập trung load/validate biến môi trường.  

**Đáp án: D.** Giảm lỗi cấu hình rải rác.

**Câu 3.** Điểm test đầu tiên phù hợp?

A. Dễ kiểm thử nghiệp vụ và tái sử dụng logic.  
B. Kiểm tra đường dẫn package, cwd và lệnh khởi chạy.  
C. Endpoint `/health` độc lập với LLM.  
D. Cung cấp lớp HTTP API, validation và OpenAPI.  

**Đáp án: C.** Nó kiểm tra runtime và routing trước tích hợp phức tạp.

**Câu 4.** Lợi ích tách service khỏi route?

A. Kiểm tra đường dẫn package, cwd và lệnh khởi chạy.  
B. Dễ kiểm thử nghiệp vụ và tái sử dụng logic.  
C. Cung cấp lớp HTTP API, validation và OpenAPI.  
D. Tập trung load/validate biến môi trường.  

**Đáp án: B.** Route nên mỏng, không ôm tất cả SQL và LLM.

**Câu 5.** Cách xử lý ModuleNotFoundError?

A. Kiểm tra đường dẫn package, cwd và lệnh khởi chạy.  
B. Cung cấp lớp HTTP API, validation và OpenAPI.  
C. Tập trung load/validate biến môi trường.  
D. Endpoint `/health` độc lập với LLM.  

**Đáp án: A.** Sai import path rất thường gặp ở dự án Python.

## 11. Tổng kết

Bài học tập trung vào **Dựng FastAPI và cấu hình Python backend** như một mắt xích của Document Copilot. Giá trị quan trọng nhất không chỉ là chạy được một chức năng mà còn là lý giải được thiết kế, truy vết được dữ liệu và kiểm chứng bằng trường hợp thực tế.

**Mốc học video:** [0:43:42](https://www.youtube.com/watch?v=qF5il_9IwME&t=2622s) — 1:08:15.
