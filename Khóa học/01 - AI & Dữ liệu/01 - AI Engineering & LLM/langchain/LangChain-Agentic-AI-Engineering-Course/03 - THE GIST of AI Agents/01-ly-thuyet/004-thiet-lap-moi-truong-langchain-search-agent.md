# Bài 004 — Thiết lập môi trường cho LangChain Search Agent

## 1. Tóm tắt

Trước khi xây search agent, cần chuẩn bị một dự án Python, cài các package LangChain liên quan, Tavily, dotenv và cấu hình các biến môi trường cho OpenAI, LangSmith và Tavily. Mục tiêu của bước này là tạo một môi trường có thể chạy code, theo dõi trace và xác thực với dịch vụ tìm kiếm.

## 2. Mục tiêu học tập

Sau bài này, người học có thể:

- khởi tạo dự án Python bằng `uv`;
- xác định nhóm dependency cần cho search agent;
- cấu hình biến môi trường cho model, tracing và Tavily;
- giải thích vai trò của integration package và SDK gốc;
- kiểm tra môi trường trước khi viết agent.

## 3. Khởi tạo dự án

Dự án được khởi tạo bằng `uv`:

```bash
uv init
```

Sau đó cài các package cần thiết cho phần thực hành. Bộ package được dùng trong bài gồm các thành phần cho LangChain, OpenAI, Tavily, biến môi trường và định dạng code.

Một cấu hình tương ứng có thể được cài theo nhóm:

```bash
uv add langchain langchain-openai langchain-tavily tavily-python python-dotenv black
```

Sau khi cài, dependency của dự án được ghi trong `pyproject.toml`, còn file lock giúp cố định tập dependency đã được resolve.

## 4. Vì sao có cả integration package và SDK?

Tavily xuất hiện theo hai cách:

- SDK Python gốc cho phép gọi trực tiếp dịch vụ Tavily;
- integration package của LangChain cung cấp object tương thích với hệ thống tool của LangChain.

Hai cách này phục vụ hai mục đích học tập khác nhau. SDK gốc giúp quan sát rõ cách một API được gọi bên trong tool; integration package giúp sử dụng tool do nhà cung cấp chuẩn bị sẵn.

## 5. Tavily trong search agent

Tavily cung cấp khả năng tìm kiếm web và các API bổ sung như crawl, map hoặc extract. Trong module này, trọng tâm là search: agent gửi truy vấn và nhận về nội dung cùng URL nguồn.

Kết quả tìm kiếm có thể chứa:

- URL;
- nội dung hoặc đoạn trích;
- nhiều kết quả xếp hạng theo truy vấn;
- các tùy chọn để điều chỉnh phạm vi hoặc độ sâu tìm kiếm.

## 6. Biến môi trường

Các khóa API không được viết trực tiếp vào logic của agent. Chúng được nạp từ file `.env` bằng `python-dotenv`.

Một file cấu hình có thể chứa các biến sau:

```dotenv
OPENAI_API_KEY=...
LANGSMITH_TRACING=true
LANGSMITH_API_KEY=...
LANGSMITH_PROJECT=search-agent
TAVILY_API_KEY=...
```

Tên biến `TAVILY_API_KEY` đặc biệt quan trọng vì client/integration tìm khóa xác thực qua biến môi trường này.

Trong Python, có thể nạp file `.env` ở đầu chương trình:

```python
from dotenv import load_dotenv

load_dotenv()
```

## 7. LangSmith tracing

Khi tracing được bật, các lần gọi model và tool có thể được quan sát lại dưới dạng trace. Điều này giúp debug agent vì một câu trả lời cuối cùng có thể được tạo ra từ nhiều lần gọi LLM và nhiều tool call khác nhau.

Các biến chính gồm:

- `LANGSMITH_TRACING=true`: bật tracing;
- `LANGSMITH_API_KEY`: xác thực với LangSmith;
- `LANGSMITH_PROJECT`: nhóm các trace của bài thực hành vào cùng một project.

## 8. Kiểm tra môi trường

Trước khi tiếp tục, cần kiểm tra tối thiểu:

1. Dự án Python chạy được.
2. Dependency đã được cài.
3. `load_dotenv()` nạp được biến môi trường.
4. OpenAI key và Tavily key có mặt trong môi trường.
5. Tracing có thể ghi nhận lần chạy vào đúng LangSmith project.

Không cần xây agent ngay ở bước này. Mục tiêu là loại bỏ lỗi môi trường trước khi bắt đầu phần tool và execution loop.

## 9. Tổng kết

Môi trường của search agent gồm ba lớp: **Python project**, **dependency/integration** và **credentials/tracing**. Chuẩn bị đúng các lớp này giúp những bài sau tập trung vào logic agent thay vì xử lý lỗi cài đặt hoặc xác thực.
