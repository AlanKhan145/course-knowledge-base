# 002 - Lab: Xây dựng ReAct Agent Loop bằng Raw Ollama SDK

## 1. Tổng quan

Bài thực hành yêu cầu tái tạo vòng lặp agent bằng raw Ollama SDK dựa trên các thành phần đã học: message history, tool schema, `tools_dict`, `tool_calls`, thực thi hàm Python và observation.

Mục tiêu không phải sao chép từng dòng code, mà là tự dựng lại đúng luồng điều khiển của agent.

## 2. Mục tiêu

Sau khi hoàn thành, người học có thể:

- Tổ chức message theo role `system`, `user` và `tool`.
- Gọi Ollama Chat với model, messages và tool schemas.
- Đọc tên function và arguments từ tool call.
- Ánh xạ tên tool sang callable Python bằng `tools_dict`.
- Thực thi tool và đưa observation trở lại message history.
- Lặp cho đến khi response không còn tool call.
- Trace lời gọi raw Ollama bằng LangSmith `traceable` theo cách đã học.

## 3. Chuẩn bị

Cần có:

- hai hàm Python `get_product_price` và `apply_discount` từ phần triển khai trước;
- danh sách tool schema dùng cho Ollama;
- Ollama Python SDK trong môi trường hiện tại;
- cấu hình LangSmith nếu muốn kiểm tra trace.

Không thay đổi chữ ký của các hàm tool chỉ để làm bài dễ hơn.

## 4. Các bước thực hiện

### 4.1. Tạo hàm gọi Ollama có tracing

Tạo một hàm phụ nhận danh sách messages và gọi Ollama Chat trực tiếp. Hàm cần sử dụng model Qwen3 và truyền danh sách tool schema đã chuẩn bị.

Bọc hàm bằng cơ chế `traceable` để lần gọi LLM xuất hiện rõ trong LangSmith.

### 4.2. Tạo `tools_dict`

Tạo dictionary ánh xạ:

```text
get_product_price -> hàm get_product_price
apply_discount    -> hàm apply_discount
```

Mục đích là cho phép chương trình tìm callable bằng tên function do LLM trả về.

### 4.3. Khởi tạo message history

Tạo system message và user message bằng cấu trúc raw Ollama. Không dùng LangChain message object.

Câu hỏi kiểm thử nên yêu cầu nhiều hơn một tool, chẳng hạn truy vấn giá laptop sau khi áp dụng ưu đãi vàng như trong phần minh họa.

### 4.4. Gọi LLM và kiểm tra `tool_calls`

Trong vòng lặp:

1. gửi message history tới Ollama;
2. lấy message từ response;
3. kiểm tra danh sách `tool_calls`;
4. nếu không còn tool call, kết thúc vòng lặp.

### 4.5. Đọc function name và arguments

Với từng tool call, lấy:

- tên function;
- arguments của function.

Dùng tên function để tìm đúng callable trong `tools_dict`.

### 4.6. Thực thi tool

Gọi hàm Python bằng arguments do LLM cung cấp và lưu kết quả thành observation.

Không để LLM trực tiếp thực thi code. Phần gọi hàm phải nằm trong application logic.

### 4.7. Đưa observation trở lại agent

Thêm observation vào message history bằng message có role `tool`, sau đó tiếp tục vòng lặp.

Agent phải có khả năng thực hiện nhiều lần tool call liên tiếp nếu mô hình cần thêm thông tin trước khi trả lời cuối cùng.

## 5. Checkpoint

### 5.1. Sau lần gọi LLM đầu tiên

Kiểm tra:

- response là object từ Ollama SDK, không phải LangChain `AIMessage`;
- message có thể chứa `tool_calls`;
- tool call cung cấp function name và arguments.

### 5.2. Sau lần thực thi tool đầu tiên

Kiểm tra:

- callable đúng được lấy từ `tools_dict`;
- observation đã được tạo;
- message role `tool` đã được thêm vào history.

### 5.3. Khi vòng lặp kết thúc

Kiểm tra rằng agent dừng vì response không còn tool call, không phải vì đặt cứng số bước để bỏ qua logic dừng.

## 6. Kiểm tra kết quả

Với truy vấn minh họa về giá laptop sau ưu đãi vàng, trace của phần triển khai mẫu thể hiện chuỗi hành động:

```text
get_product_price
        ↓
observation
        ↓
apply_discount
        ↓
observation
        ↓
final answer
```

Phần minh họa gốc kết thúc với kết quả `1.099`. Khi tái tạo đúng cùng dữ liệu và logic tool, kết quả và chuỗi gọi tool phải phù hợp.

## 7. Debug

Nếu agent không hoạt động, kiểm tra theo thứ tự:

1. message có đúng role cho Ollama không;
2. tool schemas có được truyền vào lời gọi chat không;
3. response có `tool_calls` không;
4. function name có tồn tại trong `tools_dict` không;
5. arguments có được chuyển đúng cho hàm Python không;
6. observation có được thêm lại vào message history không;
7. vòng lặp có kiểm tra điều kiện không còn tool call không.

## 8. Deliverable

Nộp:

- file Python chứa raw agent loop;
- ảnh hoặc log trace thể hiện lời gọi Ollama và các tool;
- một đoạn ngắn giải thích ba khác biệt rõ nhất so với phiên bản dùng LangChain abstraction.

## 9. Checklist hoàn thành

- [ ] Không dùng LangChain chat model cho lời gọi LLM chính.
- [ ] Có `tools_dict` ánh xạ tên tool sang hàm Python.
- [ ] Dùng raw message structure.
- [ ] Đọc được function name và arguments từ Ollama tool call.
- [ ] Thực thi được nhiều tool call qua nhiều vòng.
- [ ] Observation được gửi lại bằng role `tool`.
- [ ] Agent dừng khi không còn tool call.
- [ ] Có trace hoặc log đủ để quan sát luồng thực thi.
