# 004 - Bài thực hành tổng hợp: AI Agent không dùng LangChain

## 1. Bài toán

Tái tạo một agent nhỏ dùng raw Ollama SDK có khả năng xử lý một yêu cầu cần hai bước công cụ: lấy giá sản phẩm và áp dụng giảm giá. Không dùng LangChain chat model, LangChain message object hoặc LangChain Tool decorator cho luồng agent chính.

## 2. Mục tiêu sản phẩm

Sản phẩm cuối phải chứng minh được rằng người học hiểu toàn bộ chuỗi function calling:

```text
Tool definition
→ LLM tool selection
→ Parse function name + arguments
→ Python execution
→ Observation
→ LLM continuation
→ Final answer
```

## 3. Yêu cầu

### 3.1. Tool layer

- Có `get_product_price` và `apply_discount`.
- Có mô tả tool phù hợp để Ollama nhận biết các function.
- Có mapping từ tên tool sang callable Python.

### 3.2. Message layer

- Có system message.
- Có user message.
- Observation được đưa trở lại bằng role `tool`.

### 3.3. Agent loop

- Gọi trực tiếp Ollama Chat.
- Đọc được `tool_calls` từ response.
- Lấy được function name và arguments.
- Thực thi tool trong application code.
- Có khả năng lặp qua nhiều tool call.
- Dừng khi response không còn yêu cầu tool.

### 3.4. Quan sát hệ thống

- Có log hoặc LangSmith trace cho thấy các bước agent đã chạy.
- Tên trace nên phản ánh đây là Ollama agent loop, tránh giữ tên gây nhầm với LangChain implementation.

## 4. Kịch bản kiểm thử

Dùng yêu cầu tương đương với bài minh họa: xác định giá laptop sau khi áp dụng ưu đãi vàng.

Luồng mong đợi về mặt hành vi:

1. agent chọn `get_product_price`;
2. ứng dụng thực thi và trả observation;
3. agent chọn `apply_discount`;
4. ứng dụng thực thi và trả observation;
5. agent kết thúc bằng final answer.

Nếu sử dụng đúng cùng dữ liệu và logic tool của phần học, kết quả minh họa là `1.099`.

## 5. Deliverable

Nộp một thư mục gồm:

- file Python của agent;
- file ghi chú ngắn mô tả kiến trúc;
- log hoặc ảnh trace;
- câu trả lời cho hai câu hỏi:
  - Phần nào khó nhất khi bỏ LangChain abstraction?
  - Nếu đổi provider, những phần nào của code có khả năng phải sửa?

## 6. Definition of Done

- [ ] Agent chạy bằng raw Ollama SDK.
- [ ] LLM nhận được danh sách tool hợp lệ.
- [ ] Tên tool được ánh xạ về đúng Python function.
- [ ] Arguments từ model được dùng để gọi tool.
- [ ] Observation được đưa trở lại message history.
- [ ] Có ít nhất hai tool call trong kịch bản kiểm thử tổng hợp.
- [ ] Vòng lặp kết thúc khi không còn tool call.
- [ ] Trace hoặc log thể hiện được chuỗi thực thi.
- [ ] Người học giải thích được phần việc mà LangChain đã abstract đi.

## 7. Gợi ý

Nếu gặp lỗi, đừng sửa nhiều phần cùng lúc. Kiểm tra lần lượt theo pipeline: schema → request → response → `tool_calls` → mapping → execution → observation → vòng lặp kế tiếp.
