# Bài tập 004 — Thiết lập môi trường Search Agent

## 1. Mục tiêu

- tạo được dự án Python bằng `uv`;
- cài đúng nhóm dependency;
- cấu hình biến môi trường cho OpenAI, LangSmith và Tavily;
- kiểm tra môi trường trước khi viết agent.

## 2. Đề bài

Tạo một project mới dành cho LangChain Search Agent. Project chưa cần chứa logic agent, nhưng phải sẵn sàng để bài tiếp theo có thể import model, tool, Tavily và đọc biến môi trường.

## 3. Nhiệm vụ

1. Khởi tạo project bằng `uv init`.
2. Cài các package cần cho LangChain, OpenAI, Tavily và dotenv.
3. Tạo file `.env` chứa các biến cần thiết.
4. Trong `main.py`, gọi `load_dotenv()`.
5. Kiểm tra `pyproject.toml` để xác nhận dependency đã được thêm.
6. Chạy một đoạn kiểm tra nhỏ để xác nhận chương trình đọc được sự tồn tại của `TAVILY_API_KEY` mà không in giá trị khóa ra màn hình.

## 4. Yêu cầu

- Không ghi trực tiếp API key trong source code.
- Không in toàn bộ API key ra terminal.
- Giữ tên biến môi trường đúng với package sử dụng.
- Project phải chạy được bằng môi trường dependency vừa tạo.

## 5. Tiêu chí hoàn thành

- [ ] `uv init` đã tạo project thành công.
- [ ] Dependency có mặt trong `pyproject.toml`.
- [ ] `.env` có `OPENAI_API_KEY` và `TAVILY_API_KEY`.
- [ ] Nếu dùng tracing, có đủ biến LangSmith.
- [ ] `main.py` nạp được biến môi trường.
- [ ] Không có API key bị hard-code trong file Python.

## 6. Gợi ý

Để kiểm tra một biến tồn tại mà không làm lộ khóa, chỉ cần in kết quả boolean của phép kiểm tra biến có giá trị hay không.
