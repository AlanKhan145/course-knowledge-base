# Bài tập 006 — Đọc Agent Execution Loop

## 1. Mục tiêu

- nhận diện các message trong một lần agent chạy;
- phân biệt tool call với tool result;
- giải thích được vì sao một truy vấn có thể tạo nhiều lần gọi LLM.

## 2. Đề bài

Chạy agent của bài trước với tool `search` tĩnh và câu hỏi về thời tiết Tokyo. Dùng debugger hoặc trace để quan sát toàn bộ kết quả.

## 3. Nhiệm vụ

- Ghi lại thứ tự các message xuất hiện.
- Xác định message nào là input của người dùng.
- Xác định AI message nào chứa tool call.
- Ghi lại tên tool và argument mà model chọn.
- Xác định tool message chứa kết quả thực thi.
- Xác định AI message cuối cùng.
- Giải thích vì sao cần lần gọi LLM thứ hai sau khi tool hoàn tất.

## 4. Bài mở rộng

Thay câu hỏi bằng một câu mà model có thể trả lời mà không cần search tool. Quan sát xem execution trace có còn tool call hay không và so sánh với lần chạy trước.

## 5. Tiêu chí hoàn thành

- [ ] Xác định đúng ít nhất bốn message chính trong luồng tool-use.
- [ ] Phân biệt rõ “LLM yêu cầu gọi tool” và “runtime thực sự chạy tool”.
- [ ] Ghi đúng argument của tool.
- [ ] Giải thích được vai trò của lần gọi LLM cuối.
- [ ] Có so sánh giữa truy vấn cần tool và truy vấn không cần tool.

## 6. Gợi ý

Đừng chỉ đọc câu trả lời cuối. Hãy xem toàn bộ `messages`, vì phần ở giữa mới cho biết agent đã suy luận và hành động như thế nào.
