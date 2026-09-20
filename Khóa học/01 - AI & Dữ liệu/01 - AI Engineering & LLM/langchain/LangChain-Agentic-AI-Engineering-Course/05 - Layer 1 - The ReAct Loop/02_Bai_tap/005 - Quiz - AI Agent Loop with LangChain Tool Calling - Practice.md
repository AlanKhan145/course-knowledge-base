# 005 - Quiz - AI Agent Loop with LangChain Tool Calling - Practice

## 1. Mục tiêu

Bộ luyện tập này hệ thống hóa bốn nhóm kiến thức của Layer 1 - The ReAct Loop trước khi làm assessment cuối section:

- viết tool;
- bind tool;
- defensive prompting;
- triển khai vòng lặp ReAct;
- chuyển model và đánh giá hành vi.

## 2. Phần A - Kiểm tra khái niệm

Trả lời ngắn gọn bằng lời của bạn.

1. `@tool` biến một hàm Python thành thành phần gì trong agent workflow?
2. Vì sao docstring và type hint của tool quan trọng đối với LLM?
3. `tool_map` giải quyết bước nào giữa quyết định của model và việc thực thi Python?
4. `bind_tools()` cung cấp thông tin gì cho model?
5. Vì sao system prompt yêu cầu agent không được đoán giá sản phẩm?
6. Tại sao `apply_discount` chỉ nên chạy sau `get_product_price` trong use case này?
7. `ToolMessage` mang dữ liệu gì trở lại model?
8. Tool call ID có vai trò gì trong lịch sử và tracing?
9. Điều kiện nào báo rằng model đã tạo final answer?
10. Vì sao agent vẫn cần `MAX_ITERATIONS` khi system prompt đã có guardrails?

## 3. Phần B - Sắp xếp vòng lặp

Sắp xếp các bước sau theo thứ tự hợp lý của một iteration ReAct:

- thêm observation vào message history;
- gọi model với message history;
- kiểm tra `tool_calls`;
- ánh xạ tên tool qua `tool_map`;
- thực thi tool;
- trích xuất name, args và tool call ID;
- trả final answer nếu không có tool call.

## 4. Phần C - Phân tích tình huống

### 4.1. Model đoán giá

Model trả lời trực tiếp rằng laptop có giá 1000 mà không gọi `get_product_price`.

Hãy chỉ ra:

- quy tắc nào bị vi phạm;
- lớp kiểm soát nào có thể phát hiện hoặc giảm hành vi này;
- trace cần kiểm tra chi tiết nào.

### 4.2. Thiếu tier

Người dùng hỏi:

```text
Giá laptop sau khi giảm giá là bao nhiêu?
```

Mô tả hành vi mong đợi của agent và giải thích vì sao không nên tự chọn một tier.

### 4.3. Model mới nhưng hành vi khác

Sau khi đổi model, agent hỏi lại “laptop nào?” thay vì gọi tool như model trước.

Giải thích vì sao đây không phải lỗi của cơ chế model switching nhưng vẫn là vấn đề cần đánh giá trước production.

## 5. Phần D - Tái dựng trace

Cho chuỗi sự kiện:

```text
1. HumanMessage: hỏi giá laptop sau ưu đãi vàng
2. AIMessage: tool call get_product_price(product="laptop")
3. ToolMessage: 1299
4. AIMessage: tool call apply_discount(price=1299, tier="gold")
5. ToolMessage: 1000.23
6. AIMessage: final answer
```

Trả lời:

1. Có bao nhiêu lần model được gọi?
2. Có bao nhiêu tool execution?
3. Observation thứ nhất ảnh hưởng đến tool call thứ hai như thế nào?
4. Nếu bỏ message ở bước 3, vòng lặp có thể gặp vấn đề gì?
5. Dấu hiệu nào ở bước 6 cho phép agent dừng?

## 6. Tiêu chí hoàn thành

- [ ] Trả lời được các câu khái niệm mà không cần nhìn lại transcript.
- [ ] Sắp xếp đúng chu trình model → tool → observation → model.
- [ ] Giải thích được vai trò của defensive prompting.
- [ ] Giải thích được tool call ID và message history.
- [ ] Phân biệt được portability của framework với suitability của model.
- [ ] Tái dựng được trace của kịch bản laptop + ưu đãi vàng.
