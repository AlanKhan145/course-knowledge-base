# Bài 08 — Lab cuối khóa: AI chatbot cửa hàng có truy vấn SQL và trí nhớ dài hạn

## 1. Bài toán

Xây backend cho một trợ lý cửa hàng có thể trả lời thông tin khách hàng, đơn hàng và tồn kho dựa trên SQLite; đồng thời có thể ghi nhớ thông tin bền vững như cách xưng hô hoặc sở thích của người dùng qua nhiều phiên chat. Lab kiểm chứng ba năng lực trong một hệ thống có thể chạy local.

## 2. Mục tiêu và điều kiện chuẩn bị

Người học cần có Python, môi trường ảo đã cài FastAPI, SQLAlchemy, LangGraph, LangChain, `httpx`, Pydantic, một API key model chat hợp lệ và công cụ gửi HTTP request (Postman hoặc tương đương). Các ví dụ dùng SQLite cho môi trường học tập.

Sau lab, người học phải giải thích được đường đi của một request, tự xác định dữ liệu nào đến từ SQL, dữ liệu nào đến từ memory và vì sao agent chọn gọi hoặc không gọi tool.

## 3. Các nhiệm vụ theo thứ tự

### 3.1. Milestone 1 — Database và dữ liệu mẫu

1. Tạo các bảng `customers`, `orders`, `inventory`, `sessions` bằng SQLAlchemy.
2. Viết script `seed.py` sinh ít nhất vài khách hàng, đơn hàng và sản phẩm để truy vấn.
3. Bảo đảm mỗi đơn có `customer_id` hợp lệ; `sku` không trùng.
4. Kiểm tra có thể tạo và đọc một `SessionRecord` có `memory_json` dạng JSON hợp lệ.

**Checkpoint:** query trực tiếp trả về dữ liệu đúng, không bị lỗi foreign key hoặc session chưa đóng.

### 3.2. Milestone 2 — FastAPI

1. Tạo `/api/health`, `/api/customers`, `/api/orders`, `/api/inventory`.
2. Hỗ trợ các bộ lọc ID, từ khóa và trạng thái thích hợp.
3. Bật validation với Pydantic và giới hạn `limit` tối đa 100.
4. Tạo `/api/chat` nhận `session_id`, `user_id`, `messages`.

**Checkpoint:** gọi từng endpoint từ Postman và so sánh đầu ra với database.

### 3.3. Milestone 3 — LangGraph agent

1. Viết ba tools dùng `httpx.AsyncClient` gọi các endpoint GET.
2. Viết system prompt: không bịa dữ liệu SQL, gọi tool khi cần, trả lời trực tiếp khi phù hợp.
3. Cài `AgentState`, `agent_node`, `route_after_agent`, `ToolNode` và `finalize_node`.
4. Biên dịch graph với luồng `START → agent → tools/ finalize → END`.

**Checkpoint:** câu hỏi khách hàng kích hoạt tool, câu chào bình thường không bắt buộc dùng tool.

### 3.4. Milestone 4 — Bộ nhớ xuyên phiên

1. Khai báo `MemoryExtraction` gồm `summary` và `memory_facts`.
2. Lưu facts và summary của một session vào bảng `sessions`.
3. Đọc memory theo đúng `user_id` ở đầu lượt chat mới.
4. Gộp facts cũ và mới, loại trùng, giới hạn dung lượng.
5. Ngăn sử dụng session thuộc user khác.

**Checkpoint:** session mới của cùng user có thể trả lời sở thích hoặc tên đã nêu ở session cũ; user khác không truy xuất được.

### 3.5. Milestone 5 — Tích hợp và kiểm thử

1. Kết nối `/api/chat` đến `run_chat()`.
2. Chuyển Pydantic messages sang các message class tương ứng.
3. Gọi `graph.ainvoke()` rồi lấy thông điệp cuối không chứa tool call.
4. Đánh giá trường hợp không có thông tin, model/tool lỗi và memory JSON hỏng.
5. Kiểm tra bản ghi phiên được tạo/cập nhật sau mỗi lượt theo thiết kế.

**Checkpoint:** bot trả lời đúng và dữ liệu memory tồn tại sau khi khởi động lại server.

## 4. Bộ ca kiểm thử bắt buộc

| Mã | Tình huống | Kết quả kỳ vọng |
| --- | --- | --- |
| T01 | `GET /api/health` | HTTP thành công, trả trạng thái server |
| T02 | Chat: “Xin chào” | Phản hồi hội thoại, không cần truy vấn SQL |
| T03 | Chat: “Khách số 20 là ai?” | Gọi tool đọc khách (nếu ID tồn tại), trả đúng thông tin |
| T04 | Chat: “Danh sách hàng gần hết?” | Tra tồn kho theo thứ tự số lượng, nêu giới hạn dữ liệu |
| T05 | `s1`, user A: “Tôi tên là Rahul” | Lưu memory fact thích hợp |
| T06 | `s2`, vẫn user A: “Tôi tên là gì?” | Dùng memory của user A |
| T07 | `s3`, user B hỏi “Tên tôi là gì?” | Không dùng memory user A |
| T08 | Request thiếu `messages` | HTTP 422 validation |
| T09 | Lỗi HTTP từ tool | Không trình bày lỗi HTTP thành dữ kiện nghiệp vụ |
| T10 | Memory JSON hỏng | Xử lý có kiểm soát, báo log phù hợp |

Dùng bản ghi thật của dữ liệu mẫu để xác định expected result. Không giả định ID 20 luôn tồn tại khi seed dữ liệu ít hơn 20 khách.

## 5. Sản phẩm cần nộp

- Source trong thư mục `backend/`, tách đúng database, models, schemas, API, agent.
- `requirements.txt` và `.env.example` **không chứa khóa bí mật**.
- Hướng dẫn chạy và tạo dữ liệu demo trong README của dự án.
- Báo cáo kiểm thử gồm các ca T01–T10, ghi input, output thực tế, pass/fail.
- Sơ đồ kiến trúc thể hiện luồng HTTP, SQL, LangGraph và memory.

## 6. Tiêu chí hoàn thành

Một dự án đạt yêu cầu khi các endpoint có schema rõ ràng, truy vấn SQL thực sự thay vì số liệu dựng, tool calling điều hướng đúng, memory dùng đúng định danh người dùng và các phiên sau lấy lại được facts đã lưu. Các lỗi request và lỗi tool cần được xử lý có thể chẩn đoán; không để lộ API key hoặc memory của người dùng khác.

## 7. Gợi ý mở rộng (không bắt buộc)

Sau khi phần demo ổn định, có thể thêm endpoint đếm khách hàng bằng SQL `COUNT`, thêm chiến lược ưu tiên facts gần đây, chuyển sang PostgreSQL và bổ sung xác thực. Với dữ liệu phức tạp hơn, thử nghiệm retrieval schema kết hợp Text-to-SQL an toàn để xử lý các câu hỏi nhiều bảng.

## 8. Câu hỏi ôn tập

**Câu 1.** Nếu câu “Có bao nhiêu khách hàng?” dùng `len()` trên kết quả API bị giới hạn 20, cần sửa gì?  
A. Tăng nhiệt độ. B. Xóa `user_id`. C. Tăng token model. D. Cài truy vấn đếm toàn bộ bằng database.  
**Đáp án: D.** Tổng số phải được tính trên dữ liệu đầy đủ.

**Câu 2.** Yêu cầu nào chứng minh chatbot có bộ nhớ dài hạn?  
A. T02. B. T05 và T06 với cùng user khác session. C. T01. D. Chỉ T08.  
**Đáp án: B.** Thông tin đã lưu ở session cũ được dùng ở session mới.

**Câu 3.** Khi thử T07, điều gì cho thấy lỗi nghiêm trọng?  
A. User B nhận được tên đã lưu của user A. B. User B được báo chưa có thông tin. C. User B không có memory. D. Server trả error hợp lệ khi truy cập trái phép.  
**Đáp án: A.** Đây là rò rỉ dữ liệu giữa người dùng.

**Câu 4.** Thành phần nào nên kiểm tra đầu tiên khi `POST /api/chat` trả 422?  
A. Model có đủ thông minh. B. SQLite có nhiều hàng. C. ChatRequest và JSON payload. D. Warehouse name.  
**Đáp án: C.** Lỗi 422 thường phát sinh từ validation đầu vào.

**Câu 5.** Sản phẩm nào không nên đưa vào gói nộp công khai?  
A. README. B. `requirements.txt`. C. Sơ đồ. D. `.env` chứa API key thật.  
**Đáp án: D.** Khóa bí mật phải được bảo vệ.

## 9. Tổng kết

Bài lab kết thúc khi một backend có thể chứng minh được cả ba khả năng: **trả lời tự nhiên, truy vấn dữ liệu SQL chính xác, và ghi nhớ qua nhiều session**. Đó là nền tảng để phát triển giao diện chat và triển khai thành sản phẩm thực tế.
