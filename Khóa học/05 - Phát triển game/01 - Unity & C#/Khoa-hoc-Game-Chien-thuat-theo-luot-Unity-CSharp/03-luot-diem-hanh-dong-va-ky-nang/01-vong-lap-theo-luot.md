# Turn System và trạng thái game

> **Module 03** · Tham chiếu bản ghi video: **02:41–03:01** · Công cụ thực hành: Unity + C#

## Mục tiêu học tập

Sau bài này, bạn có thể giải thích cơ chế, triển khai một phiên bản tối thiểu trong prototype, tự kiểm thử hành vi và nêu các quyết định thiết kế liên quan.

## 1. Kiến thức trọng tâm

Một trận đánh có hai khái niệm: **lượt của phe** và **hành động của đơn vị**. Để tránh nhập nhằng, định nghĩa rõ khi nào AP phục hồi, khi nào đơn vị hết quyền hành động và khi nào chuyển lượt.

State machine tối thiểu: `PlayerTurn`, `Busy`, `EnemyTurn`, `Victory`, `Defeat`. Khi đang `Busy`, game không nhận thêm action trái quy tắc. Đối với game có cơ chế phản ứng (Overwatch), cần một hàng đợi giải quyết sự kiện để tránh hai đòn đánh đồng thời làm sai dữ liệu.

Thứ tự kết thúc một action mẫu: xác thực → trừ AP → thực thi → xử lý phản ứng → cập nhật trạng thái → kiểm tra thắng/thua.

## 2. Quy trình thực hành với Unity/C#

1. Tạo `TurnSystem` giữ `currentTeam` và `turnNumber`.
2. Ở đầu lượt, khôi phục AP của tất cả đơn vị còn sống thuộc phe đang chơi.
3. Chỉ cho phép action của đơn vị thuộc `currentTeam`.
4. Nút `End Turn` chuyển `PlayerTurn` sang `EnemyTurn`; AI hành động rồi trả quyền.
5. Ghi log mỗi thay đổi lượt để dễ truy lỗi.
6. Viết test không thể bắn sau khi đã hết lượt.

## 3. Bài tập vận dụng

Giải thích cách xử lý nếu một đơn vị chết trong lúc Overwatch đang thực thi.

## 4. Điều kiện hoàn thành

- [ ] Tóm tắt được quy tắc của cơ chế bằng lời của mình.
- [ ] Chạy được ca thực hành trong scene mẫu.
- [ ] Có kiểm tra ít nhất một trường hợp hợp lệ và một trường hợp lỗi.
- [ ] Ghi lại thông số đã chọn và lý do trong tài liệu thiết kế.

## 5. Liên hệ nguồn và giới hạn

- Phần **Kiến thức trọng tâm** bám các chủ đề trong bản ghi gốc và được biên tập lại thuật ngữ cho chính xác.
- **Quy trình thực hành**, ví dụ cấu trúc C# và thông số minh họa là nội dung giáo trình biên soạn bổ sung; video tổng quan không cung cấp toàn bộ mã triển khai.
- Xem [Nguồn và cách đọc giáo trình](../PHU-LUC/01-nguon-va-ghi-chu.md) để đối chiếu.
