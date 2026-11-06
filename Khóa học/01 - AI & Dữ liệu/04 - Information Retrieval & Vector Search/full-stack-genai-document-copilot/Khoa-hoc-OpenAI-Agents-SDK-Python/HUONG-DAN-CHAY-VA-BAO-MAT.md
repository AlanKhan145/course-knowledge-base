# Hướng dẫn chạy mã và bảo mật chung

## 1. Chuẩn bị Python

```bash
python -m venv .venv
python -m pip install openai-agents python-dotenv pydantic
```

Kích hoạt `.venv` trước khi chạy. Mọi ví dụ được thiết kế để bạn sao chép vào file Python riêng cho module, trừ những khối đã ghi rõ là pseudocode hoặc mẫu chưa hoàn thiện.

## 2. Bảo mật API key

Tạo `.env`:

```dotenv
OPENAI_API_KEY=replace_me
```

Và `.gitignore`:

```gitignore
.env
.venv/
__pycache__/
reports/
```

Trong Python:

```python
from dotenv import load_dotenv
load_dotenv()
```

Không nhúng key vào code hoặc prompt. Nếu key bị lộ, thu hồi và tạo key mới. Kiểm soát chi phí, rate limits và quyền API.

## 3. Phân biệt ví dụ mô phỏng

Các module có tool mock sử dụng dữ liệu giả để trình bày vòng lặp Agent mà không phụ thuộc thời tiết, tin tức hay dịch vụ thật. Module 13 có cả demo end-to-end offline; nó không phải sản phẩm nghiên cứu có nguồn thực khi chưa thay search provider và bổ sung kiểm chứng citations.

## 4. Rủi ro nội dung bên ngoài

Dữ liệu từ web, database hoặc tool output là dữ liệu không tin cậy về mặt chỉ thị. Không làm theo yêu cầu nằm trong nội dung truy xuất như “gửi API key” hoặc “bỏ qua system prompt”. Validate ID, URL, tenant và quyền trong backend.

## 5. Kiểm tra phiên bản

SDK phát triển liên tục; các import, model compatibility, thành phần mới có thể thay đổi sau khi viết. Tra cứu tài liệu [OpenAI Agents SDK](https://openai.github.io/openai-agents-python/), ưu tiên APIs đã được tài liệu xác nhận, và viết test trước khi cập nhật dependency.

## 6. Kiểm chứng kết quả

Cần kiểm tra riêng ba tầng: hành vi Agent (tool/handoff), code tool (đúng, bảo mật), nội dung cuối cùng (grounded/đủ nguồn). Sơ đồ visualization không thay thế tracing và trace cũng không bảo đảm câu trả lời đúng.
