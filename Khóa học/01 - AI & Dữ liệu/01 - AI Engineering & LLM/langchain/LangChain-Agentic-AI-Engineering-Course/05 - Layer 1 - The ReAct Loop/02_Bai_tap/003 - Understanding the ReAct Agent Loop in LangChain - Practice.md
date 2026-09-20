# 003 - Understanding the ReAct Agent Loop in LangChain - Practice

## 1. Mục tiêu

Bài tập yêu cầu tự triển khai vòng lặp ReAct dựa trên các tool, model và message history đã chuẩn bị ở hai bài trước.

## 2. Kiến thức cần dùng

- model đã `bind_tools()`;
- `tool_map`;
- AI message và `tool_calls`;
- `ToolMessage`;
- tool call ID;
- `invoke()`;
- giới hạn số vòng lặp.

## 3. Đề bài

Hoàn thiện `run_agent(question)` để agent có thể giải quyết câu hỏi nhiều bước bằng cách lặp giữa model và tool cho đến khi nhận được final answer.

Kịch bản kiểm thử chính:

```text
Giá của một chiếc laptop sau khi áp dụng ưu đãi vàng là bao nhiêu?
```

## 4. Nhiệm vụ

### 4.1. Gọi model trong từng iteration

Trong mỗi iteration:

- gửi toàn bộ message history cho model đã bind tools;
- nhận AI message;
- kiểm tra `tool_calls`.

### 4.2. Xử lý final answer

Nếu AI message không có tool call:

- coi nội dung message là final answer;
- kết thúc vòng lặp;
- trả kết quả từ `run_agent()`.

### 4.3. Xử lý tool call

Để bám đúng phạm vi bài học, chỉ xử lý tool call đầu tiên nếu model trả về nhiều call.

Trích xuất:

- tool name;
- tool arguments;
- tool call ID.

Dùng `tool_map` để lấy tool tương ứng và thực thi bằng arguments đã nhận.

### 4.4. Ghi observation vào lịch sử

Sau khi tool chạy xong:

- thêm AI message chứa tool call vào history;
- tạo `ToolMessage` chứa observation;
- gắn đúng tool call ID;
- tiếp tục iteration kế tiếp.

### 4.5. Xử lý giới hạn vòng lặp

Nếu hết số iteration mà vẫn chưa có final answer, kết thúc theo nhánh lỗi thay vì chạy tiếp vô hạn.

## 5. Checkpoint

Với kịch bản laptop + ưu đãi vàng, trace hợp lệ phải thể hiện chuỗi hành vi tương đương:

```text
Iteration 1: get_product_price(laptop)
Observation: 1299

Iteration 2: apply_discount(1299, gold)
Observation: 1000.23

Iteration 3: không có tool call
Final answer
```

Tên tier trong argument có thể phụ thuộc cách bạn quy ước trong tool, nhưng logic và thứ tự phải tương đương.

## 6. Yêu cầu hoàn thành

- [ ] Mỗi iteration gọi model với toàn bộ history hiện tại.
- [ ] Không có tool call thì trả final answer.
- [ ] Có tool call thì lấy đúng name, args và ID.
- [ ] Tool được tìm qua `tool_map`, không dùng chuỗi tên để gọi trực tiếp bằng cách không kiểm soát.
- [ ] Observation được đưa trở lại history bằng `ToolMessage`.
- [ ] Tool call ID được giữ đúng.
- [ ] Agent không vượt giới hạn iteration.
- [ ] Trace thể hiện đúng thứ tự model → tool → model → tool → model.

## 7. Câu hỏi tự kiểm tra

1. Vì sao phải thêm cả AI message chứa tool call lẫn `ToolMessage` chứa observation?
2. Điều gì xảy ra nếu chỉ giữ observation mà bỏ tool call ID?
3. Vì sao `tool_calls` rỗng có thể được dùng làm điều kiện dừng?
4. Triển khai của bài đang đơn giản hóa điều gì khi chỉ xử lý tool call đầu tiên?
5. Guardrail ở prompt và giới hạn iteration giải quyết hai loại rủi ro khác nhau như thế nào?

## 8. Gợi ý

Nếu vòng lặp chạy sai thứ tự, đừng chỉ nhìn final answer. Mở trace và kiểm tra message history sau từng iteration. Lỗi thường nằm ở việc không append đúng AI message hoặc `ToolMessage` trước lần gọi model tiếp theo.
