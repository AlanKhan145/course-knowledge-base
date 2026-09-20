# 003 - Bài ôn tập: Raw Function Calling

## 1. Mục tiêu

Bài ôn tập giúp người học hệ thống hóa mối quan hệ giữa tool schema, function calling, agent loop và lớp abstraction của LangChain.

## 2. Phần A - Giải thích khái niệm

Trả lời ngắn gọn các câu hỏi sau bằng ngôn ngữ của chính bạn:

1. Vì sao một hàm Python chưa tự động trở thành tool mà LLM có thể sử dụng?
2. Tool schema cung cấp những loại thông tin nào cho LLM?
3. Trong function calling, LLM thực hiện phần nào và ứng dụng thực hiện phần nào?
4. Observation có vai trò gì trong ReAct agent loop?
5. Vì sao raw implementation phụ thuộc provider nhiều hơn implementation dùng LangChain abstraction?

## 3. Phần B - Sắp xếp luồng xử lý

Sắp xếp các bước sau theo đúng thứ tự của một agent loop:

- Thực thi hàm Python.
- Gửi messages và tools tới LLM.
- Đưa observation trở lại message history.
- LLM trả về tên tool và arguments.
- Kiểm tra xem còn tool call hay không.
- Trả về final answer khi không còn tool call.

Sau khi sắp xếp, viết một câu giải thích cho mỗi bước.

## 4. Phần C - So sánh abstraction

Lập bảng hai cột so sánh raw Ollama SDK và LangChain theo các tiêu chí:

- tool definition;
- message format;
- parse tool call;
- tool execution;
- tracing;
- chi phí chuyển provider.

Mỗi ô chỉ nên chứa một ý ngắn, tránh viết đoạn văn dài trong bảng.

## 5. Phần D - Giải thích chuỗi gọi tool

Với bài toán "tính giá laptop sau ưu đãi vàng", hãy mô tả bằng sơ đồ hoặc danh sách bước vì sao agent có thể cần gọi:

1. `get_product_price`;
2. `apply_discount`;
3. sau đó mới tạo final answer.

Không cần viết lại toàn bộ source code.

## 6. Tiêu chí hoàn thành

- [ ] Phân biệt đúng vai trò của LLM và application code.
- [ ] Mô tả đúng vòng lặp tool call → execution → observation.
- [ ] Giải thích đúng chức năng của tool schema.
- [ ] So sánh được raw SDK và LangChain abstraction.
- [ ] Không mô tả function calling như việc LLM trực tiếp chạy hàm Python.
