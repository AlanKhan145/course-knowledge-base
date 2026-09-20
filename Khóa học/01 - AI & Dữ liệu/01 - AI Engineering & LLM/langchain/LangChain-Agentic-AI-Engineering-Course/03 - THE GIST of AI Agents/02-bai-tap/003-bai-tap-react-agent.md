# Bài tập 003 — Mô phỏng vòng lặp ReAct

## 1. Mục tiêu

- mô phỏng được vòng Reason → Act → Observe;
- phân biệt quyết định của LLM với việc thực thi tool;
- nhận biết khi nào một bài toán cần agent thay vì chain cố định.

## 2. Đề bài

Một người dùng yêu cầu:

> Tìm ba vị trí AI Engineer tại Bay Area và chỉ giữ các vị trí có URL nguồn rõ ràng.

Agent có một tool duy nhất: `search_web(query)`.

Hãy mô phỏng quá trình ReAct cho đến khi agent có đủ thông tin để trả lời.

## 3. Nhiệm vụ

- Viết ít nhất hai vòng Reason → Act → Observe.
- Trong mỗi vòng, ghi rõ truy vấn được gửi vào `search_web`.
- Giải thích vì sao agent cần hoặc không cần gọi tool thêm lần nữa.
- Xác định bước tạo final answer.
- Viết thêm một phiên bản chain cố định cho cùng bài toán và so sánh với ReAct.

## 4. Tiêu chí hoàn thành

- [ ] Reason không chứa hành động thực thi; nó chỉ mô tả quyết định.
- [ ] Act thể hiện một tool call cụ thể.
- [ ] Observe chứa kết quả mà tool trả về.
- [ ] Có điều kiện dừng vòng lặp.
- [ ] Phần so sánh nêu được khác biệt về control flow.

## 5. Gợi ý

Nếu lần tìm kiếm đầu tiên chỉ trả về hai tin phù hợp, agent chưa nên tạo final answer ngay. Hãy suy nghĩ xem observation đó sẽ dẫn đến quyết định tiếp theo như thế nào.
