# 004 - Thiết lập môi trường cho Agent Under The Hood

## 1. Tổng quan

Bài này chuẩn bị môi trường để tự triển khai agent loop trong các phần tiếp theo.

Môi trường gồm:

- mã nguồn ở nhánh `project/agents-under-the-hood`;
- project Python quản lý bằng `uv`;
- LangChain và các tích hợp cần thiết;
- biến môi trường cho các dịch vụ được sử dụng;
- Ollama để chạy mô hình open-weight cục bộ;
- LangSmith để theo dõi hoạt động của agent.

## 2. Mục tiêu

Sau bài này, người học có thể:

- checkout đúng mốc mã nguồn dùng cho phần học;
- khởi tạo project bằng `uv`;
- cài các dependency được sử dụng trong phần agent;
- cấu hình file `.env`;
- tải và chạy một mô hình cục bộ bằng Ollama;
- khởi chạy Ollama server để ứng dụng Python có thể gọi mô hình;
- xác nhận môi trường đã sẵn sàng cho bài triển khai agent loop.

## 3. Chuẩn bị mã nguồn

Mã nguồn của phần học sử dụng nhánh:

```text
project/agents-under-the-hood
```

Từ IDE hoặc terminal, tạo nhánh từ commit khởi đầu:

```bash
git checkout -b project/agents-under-the-hood <commit-hash>
```

`<commit-hash>` phải được thay bằng commit khởi đầu tương ứng trong repository của khóa học. Nội dung nguồn hiện có không cung cấp giá trị hash cụ thể, vì vậy không nên tự điền một mã giả định.

Sau khi checkout, trạng thái ban đầu của project rất tối giản và có file `.gitignore`.

## 4. Khởi tạo project bằng uv

Khởi tạo môi trường Python:

```bash
uv init
```

Nếu lệnh tạo `main.py` nhưng project không sử dụng file này, có thể xóa nó theo cấu trúc của bài học.

Cài các package cần thiết:

```bash
uv add langchain langchain-ollama langchain-openai python-dotenv black isort
```

Vai trò của các package trong phạm vi bài:

| Package | Mục đích |
| --- | --- |
| `langchain` | Các abstraction cơ bản để xây agent |
| `langchain-ollama` | Kết nối LangChain với Ollama |
| `langchain-openai` | Cho phép chuyển sang mô hình OpenAI trong phần học |
| `python-dotenv` | Tải biến môi trường từ file `.env` |
| `black` | Định dạng mã Python |
| `isort` | Sắp xếp import |

Sau khi thêm dependency, `uv` cập nhật `pyproject.toml` và tạo hoặc cập nhật `uv.lock` để ghi lại các phiên bản phụ thuộc chính xác.

## 5. Cấu hình biến môi trường

Tạo file:

```text
.env
```

Phần học sử dụng biến môi trường cho:

- khóa API OpenAI khi dùng mô hình OpenAI;
- khóa API LangSmith;
- cấu hình project LangSmith;
- bật tracing của LangSmith.

Tên project tracing được dùng trong bài là:

```text
ReAct Under The Hood
```

Ollama chạy cục bộ nên không cần API key cho mô hình local trong thiết lập này.

Không đưa khóa API thật vào nội dung bài học hoặc commit công khai.

## 6. Theo dõi agent bằng LangSmith

Tracing được bật để có thể quan sát hoạt động của agent.

Mục tiêu của tracing trong phần học là giúp nhìn rõ:

- mô hình được gọi khi nào;
- agent quyết định gì;
- công cụ nào được sử dụng;
- các bước diễn ra theo thứ tự nào.

Điều này phù hợp với mục tiêu chính của module: hiểu agent “under the hood”, thay vì chỉ nhìn kết quả cuối.

## 7. Chọn mô hình chạy cục bộ

Phần học sử dụng Ollama và chọn một biến thể Qwen 3 hỗ trợ tool calling.

Biến thể được nhắc đến có khoảng:

- `1.7B` tham số;
- dung lượng tải khoảng `1.4 GB`.

Một biến thể `0.6B` đã được thử trước đó nhưng cho kết quả chưa đủ tốt trong ngữ cảnh bài học, nên phiên bản lớn hơn được chọn để cân bằng giữa khả năng và dung lượng.

Bạn có thể dùng mô hình khác nếu mô hình đó hỗ trợ function/tool calling cho các bài cần khả năng này.

## 8. Làm việc với Ollama

Kiểm tra các model đã có trên máy:

```bash
ollama list
```

Tải model:

```bash
ollama pull <model-name>
```

`<model-name>` phải được thay bằng đúng tên model Ollama mà bạn chọn.

Chạy model trực tiếp trong CLI:

```bash
ollama run <model-name>
```

Sau khi kiểm tra model có thể phản hồi, thoát khỏi phiên CLI bằng:

```text
/bye
```

Khởi chạy Ollama server:

```bash
ollama serve
```

Server này cho phép ứng dụng Python kết nối tới mô hình đang chạy cục bộ.

## 9. Checkpoint môi trường

Trước khi sang phần triển khai agent loop, cần xác nhận:

- [ ] Đã checkout đúng nhánh hoặc đúng commit khởi đầu.
- [ ] `uv init` đã hoàn tất.
- [ ] Các dependency cần thiết đã có trong `pyproject.toml`.
- [ ] `uv.lock` đã được tạo hoặc cập nhật.
- [ ] File `.env` đã được cấu hình cho các dịch vụ sẽ dùng.
- [ ] LangSmith tracing đã được chuẩn bị.
- [ ] Model Ollama đã được tải.
- [ ] `ollama run <model-name>` chạy được.
- [ ] `ollama serve` đang hoạt động.

## 10. Kết quả cần đạt

Sau khi hoàn tất thiết lập, project đã sẵn sàng cho lớp triển khai tiếp theo: tự viết agent loop sử dụng function calling và các primitive của LangChain.

Mục tiêu của setup không chỉ là “cài đủ package”, mà là tạo một môi trường có thể vừa chạy agent, vừa quan sát được các bước nội bộ của agent trong quá trình học.
