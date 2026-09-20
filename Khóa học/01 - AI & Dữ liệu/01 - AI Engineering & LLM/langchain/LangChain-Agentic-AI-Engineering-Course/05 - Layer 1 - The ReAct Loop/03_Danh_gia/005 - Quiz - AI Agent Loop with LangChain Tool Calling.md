# 005 - Quiz - AI Agent Loop with LangChain Tool Calling

## 1. Hướng dẫn

Bài đánh giá kiểm tra khả năng giải thích và áp dụng các khái niệm trong Layer 1 - The ReAct Loop. Không sử dụng đáp án mẫu trong quá trình làm bài.

Phạm vi gồm:

- tool writing;
- tool binding;
- defensive prompting;
- ReAct loop implementation;
- model switching và đánh giá hành vi agent.

## 2. Phần A - Câu hỏi ngắn

### 2.1. Tool writing

1. Nêu bốn loại metadata của một tool mà model cần để có thể sử dụng tool hiệu quả.
2. Vì sao `apply_discount` phù hợp để triển khai thành tool thay vì để LLM tự thực hiện phép tính?
3. Nếu tool có logic đúng nhưng docstring mơ hồ, agent có thể gặp vấn đề gì?

### 2.2. Tool binding và prompt

4. `bind_tools()` khác `tool_map` ở chức năng nào?
5. Viết lại bằng lời của bạn nguyên tắc “không đoán giá” và giải thích mục đích của nguyên tắc đó.
6. Agent nên làm gì nếu người dùng yêu cầu giảm giá nhưng không chỉ định tier?

### 2.3. ReAct loop

7. Điều kiện nào cho biết agent nên trả final answer?
8. Vì sao phải thêm `ToolMessage` vào history sau khi tool chạy?
9. Tool call ID được dùng để nối kết những thành phần nào?
10. Vì sao cần giới hạn số iteration ngay cả khi model thường trả lời đúng?

## 3. Phần B - Phân tích luồng thực thi

Cho yêu cầu:

```text
Giá của một chiếc laptop sau khi áp dụng ưu đãi vàng là bao nhiêu?
```

Giả sử catalog trả giá laptop là `1299` và tier Vàng giảm `23%`.

Hãy mô tả đầy đủ chuỗi trạng thái của agent từ lúc nhận `HumanMessage` đến khi tạo final answer. Câu trả lời phải chỉ ra:

- model call;
- tool call thứ nhất;
- observation thứ nhất;
- cập nhật message history;
- tool call thứ hai;
- observation thứ hai;
- điều kiện dừng.

Không cần viết toàn bộ source code.

## 4. Phần C - Bài thực hành

Triển khai hoặc hoàn thiện một `run_agent(question)` thỏa các yêu cầu:

- model đã bind `get_product_price` và `apply_discount`;
- system prompt cấm đoán giá và cấm tự tính giảm giá;
- mỗi iteration kiểm tra `tool_calls`;
- tool được tìm thông qua `tool_map`;
- observation được thêm vào history bằng `ToolMessage`;
- có giới hạn iteration;
- có tracing hoặc log đủ để đọc lại thứ tự thực thi.

Chạy tối thiểu hai input:

```text
Giá laptop sau ưu đãi vàng là bao nhiêu?
```

```text
Giá laptop sau khi giảm giá là bao nhiêu?
```

Với input thứ hai, agent không được tự chọn tier.

## 5. Phần D - Model switch

Dùng cùng agent loop và cùng test case với một model khác mà môi trường hỗ trợ.

Trình bày ngắn:

- phần nào của code không cần thay đổi;
- dependency hoặc cấu hình nào phải thay đổi;
- hành vi tool calling có giữ nguyên hay không;
- trace cho thấy khác biệt gì;
- vì sao không thể kết luận model phù hợp chỉ từ việc model mới hơn.

## 6. Tiêu chí chấm

| Nhóm tiêu chí | Yêu cầu |
|---|---|
| Tool design | Mô tả đúng vai trò metadata, tool schema và phép tính xác định. |
| Tool binding | Phân biệt đúng binding ở phía model và mapping ở phía ứng dụng. |
| Defensive prompting | Nêu đúng các guardrail quan trọng và xử lý trường hợp thiếu tier. |
| ReAct loop | Trình bày đúng model → action → observation → history → next iteration. |
| State handling | Dùng đúng AI message, `ToolMessage` và tool call ID. |
| Safety of execution | Có điều kiện dừng và giới hạn iteration. |
| Observability | Có khả năng đọc lại chuỗi hành vi bằng trace/log. |
| Model switch | Phân biệt được khả năng tích hợp với mức độ phù hợp của model. |

## 7. Điều kiện hoàn thành

Bài được xem là hoàn thành khi người học có thể tự giải thích vòng lặp ReAct và tái triển khai workflow chính mà không phụ thuộc vào việc chép lại từng dòng source từ bài học.
