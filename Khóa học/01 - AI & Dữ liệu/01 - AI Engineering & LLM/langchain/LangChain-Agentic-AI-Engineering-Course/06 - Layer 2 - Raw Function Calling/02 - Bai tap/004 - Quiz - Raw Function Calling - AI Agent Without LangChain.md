# 004 - Quiz: Raw Function Calling - AI Agent không dùng LangChain

## 1. Hướng dẫn

Bài đánh giá kiểm tra kiến thức của toàn bộ phần Raw Function Calling. Trả lời dựa trên cơ chế đã học, không cần viết lời giải dài nếu câu hỏi chỉ yêu cầu giải thích ngắn.

Không sử dụng đáp án mẫu trong khi làm bài.

## 2. Phạm vi

Bài quiz bao gồm:

- Ollama SDK;
- raw function calling;
- JSON tool schema;
- Google-style docstring trong chuyển đổi function thành tool;
- `tools_dict`;
- raw message format;
- `tool_calls`;
- observation và agent loop;
- Tool abstraction của LangChain.

## 3. Câu hỏi

1. Khi bỏ LangChain Tool decorator, vì sao ứng dụng cần tự mô tả các hàm cho LLM?
2. Một JSON tool schema cần mô tả những thành phần cốt lõi nào của function?
3. Khi truyền trực tiếp hàm Python cho Ollama theo cách đã học, docstring cần tuân theo phong cách nào?
4. `tools_dict` giải quyết vấn đề gì trong raw agent loop?
5. Vai trò `user`, `system` và `tool` được dùng như thế nào trong message history của triển khai raw Ollama?
6. Từ một Ollama tool call, ứng dụng cần lấy hai thông tin nào để thực thi hàm?
7. Vì sao observation phải được thêm trở lại message history sau khi tool chạy xong?
8. Điều kiện dừng tự nhiên của agent loop là gì?
9. Với truy vấn giá laptop sau ưu đãi vàng, vì sao agent cần nhiều vòng thay vì chỉ một lần gọi LLM?
10. Nêu ít nhất ba phần việc mà LangChain abstraction giúp giảm bớt so với việc tự tích hợp raw SDK.
11. Vì sao chuyển từ Ollama sang một provider khác có thể làm tăng chi phí phát triển khi không có abstraction chung?
12. Giải thích câu: "Function calling không phải là phép thuật."

## 4. Câu hỏi tự phản tư

Khái niệm nào trong phần Raw Function Calling khiến bạn thấy khó nhất? Mô tả chính xác điểm gây nhầm lẫn và cách bạn sẽ kiểm chứng lại nó bằng code hoặc trace.

## 5. Tiêu chí chấm

| Nhóm | Tiêu chí |
| --- | --- |
| Tool schema | Giải thích đúng mục đích và metadata cần thiết |
| Raw SDK | Hiểu message, response và tool call ở mức Ollama |
| Agent loop | Mô tả đúng chu trình suy luận, thực thi và observation |
| Abstraction | Nêu đúng lợi ích và giới hạn của việc chuẩn hóa bằng LangChain |
| Diễn đạt | Câu trả lời rõ ràng, dùng đúng thuật ngữ kỹ thuật |
