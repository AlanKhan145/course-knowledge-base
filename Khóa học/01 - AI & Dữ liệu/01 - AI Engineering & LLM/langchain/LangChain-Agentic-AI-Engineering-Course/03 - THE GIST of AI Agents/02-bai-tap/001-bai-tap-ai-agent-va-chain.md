# Bài tập 001 — Phân biệt AI Agent và Chain

## 1. Mục tiêu

- phân biệt được chain và agent dựa trên luồng điều khiển;
- xác định vai trò của LLM và tool trong từng kiến trúc;
- thiết kế được vòng lặp ReAct ở mức khái niệm.

## 2. Kiến thức cần dùng

Sử dụng các khái niệm: chain, agent, reasoning engine, tool và vòng lặp Reason → Act → Observe.

## 3. Đề bài

Xét ba hệ thống sau:

1. Hệ thống nhận bài viết, luôn gọi LLM để tóm tắt, sau đó luôn lưu kết quả vào cơ sở dữ liệu.
2. Hệ thống nhận câu hỏi của người dùng, tự quyết định có cần tìm kiếm web hay không; nếu cần thì gọi công cụ tìm kiếm rồi mới trả lời.
3. Hệ thống xử lý hồ sơ theo đúng ba bước cố định: trích xuất thông tin → chấm điểm → tạo email phản hồi.

Hãy phân loại từng hệ thống là **chain** hay **agent** và giải thích dựa trên thành phần quyết định bước tiếp theo.

Sau đó, thiết kế một agent hỗ trợ tìm thông tin tuyển dụng. Agent tối thiểu phải có khả năng quyết định khi nào cần dùng công cụ tìm kiếm.

## 4. Nhiệm vụ

- Viết bảng phân loại cho ba hệ thống.
- Với mỗi hệ thống, chỉ rõ ai quyết định bước tiếp theo: developer hay LLM.
- Đề xuất ít nhất hai tool cho agent tìm việc.
- Vẽ luồng Reason → Act → Observe cho một truy vấn cụ thể.
- Mô tả điều kiện để agent dừng vòng lặp và trả câu trả lời cuối cùng.

## 5. Yêu cầu hoàn thành

- [ ] Phân loại đủ ba hệ thống.
- [ ] Lý do phân loại dựa trên luồng điều khiển, không chỉ dựa trên việc “có dùng LLM”.
- [ ] Agent đề xuất có ít nhất hai tool có mục đích rõ ràng.
- [ ] Có một luồng ReAct hoàn chỉnh từ yêu cầu đến câu trả lời cuối.
- [ ] Có điều kiện dừng hợp lý.

## 6. Gợi ý

Một hệ thống không tự động trở thành agent chỉ vì nó gọi LLM. Tập trung vào câu hỏi: **LLM có được lựa chọn hành động tiếp theo hay không?**
