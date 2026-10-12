# Checklist bảo mật và chi phí

- Không copy API key vào Markdown, Git, log, trace hoặc ví dụ chia sẻ công khai.
- Đặt tool allowlist, input validation, quotas, timeout và giới hạn số vòng lặp.
- Đọc và xác minh nguồn trước khi chạy MCP server/skill ngoài; ưu tiên sandbox, tài nguyên read-only.
- Phân tách dữ liệu từ website/tài liệu của bên thứ ba khỏi instruction có đặc quyền.
- Phân quyền tài nguyên theo tenant ở backend; tránh để LLM tự kiểm soát authorization.
- Đo token input/output, cost mỗi request và đặt budget; các mức giá dịch vụ thay đổi theo ngày.
- Đối với dịch vụ miễn phí, kiểm tra rate limit và chính sách xử lý dữ liệu.
