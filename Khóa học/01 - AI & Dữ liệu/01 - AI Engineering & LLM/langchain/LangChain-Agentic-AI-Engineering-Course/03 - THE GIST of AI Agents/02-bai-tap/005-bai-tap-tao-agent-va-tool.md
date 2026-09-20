# Bài tập 005 — Tạo Agent và Tool đầu tiên

## 1. Mục tiêu

- tạo được custom tool từ hàm Python;
- khởi tạo model và agent;
- gửi `HumanMessage` vào agent;
- quan sát việc model lựa chọn tool.

## 2. Đề bài

Tạo một agent có tool `search(query: str) -> str`. Ở giai đoạn này, tool chưa cần truy cập Internet; nó có thể trả về dữ liệu tĩnh để kiểm tra execution flow.

## 3. Nhiệm vụ

1. Tạo hàm `search` nhận `query: str`.
2. Viết docstring mô tả rõ chức năng của tool.
3. Dùng `@tool` để chuyển hàm thành LangChain tool.
4. Tạo `ChatOpenAI`.
5. Tạo agent với danh sách chứa `search`.
6. Gửi câu hỏi về thời tiết Tokyo bằng `HumanMessage`.
7. In `result` để quan sát cấu trúc dữ liệu trả về.

## 4. Yêu cầu

- Tool phải có type hint.
- Docstring phải mô tả đúng input và mục đích.
- Agent phải nhận tool thông qua danh sách `tools`.
- Message đầu vào phải đi qua `agent.invoke()`.
- Không thay search tool bằng cách hard-code câu trả lời trực tiếp ở ngoài agent.

## 5. Tiêu chí hoàn thành

- [ ] Hàm Python đã được chuyển thành tool.
- [ ] Agent tạo thành công từ model và tool.
- [ ] `agent.invoke()` chạy được.
- [ ] Có thể quan sát query mà tool nhận được.
- [ ] Kết quả cuối cùng phản ánh dữ liệu do tool trả về.

## 6. Gợi ý

Nếu agent không gọi tool, hãy kiểm tra lại tên tool và docstring. Model cần đủ thông tin để hiểu rằng tool này phù hợp với câu hỏi về dữ liệu bên ngoài.
