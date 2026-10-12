# Hướng dẫn làm project độc lập

Tạo repo riêng cho từng project. File tối thiểu: `README.md`, `src/`, `tests/`, `requirements.txt` hoặc `pyproject.toml`, `.env.example`, `.gitignore`. Đề cập rõ model/provider, thời gian chạy, phụ thuộc, dữ liệu, quyền hạn tool.

## Quy trình

1. Viết contract đầu vào/đầu ra và những gì hệ thống được phép làm.
2. Chuẩn bị dữ liệu tối thiểu; chạy baseline đơn giản trước agent.
3. Thêm tính năng mỗi lần một bước; dùng trace để bắt lỗi.
4. Test Happy path, missing key, API timeout, malformed args, unauthorized tool, insufficient context.
5. Ghi hạn chế: không có credential để chạy, phí API và kết quả thay đổi theo model.
