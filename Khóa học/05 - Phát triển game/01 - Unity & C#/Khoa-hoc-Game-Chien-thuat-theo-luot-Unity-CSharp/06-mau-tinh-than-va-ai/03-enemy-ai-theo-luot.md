# Enemy AI: lựa chọn mục tiêu và hành động

> **Module 06** · Tham chiếu bản ghi video: **09:27–09:42; 13:00–13:06** · Công cụ thực hành: Unity + C#

## Mục tiêu học tập

Sau bài này, bạn có thể giải thích cơ chế, triển khai một phiên bản tối thiểu trong prototype, tự kiểm thử hành vi và nêu các quyết định thiết kế liên quan.

## 1. Kiến thức trọng tâm

Video nhắc tới AI kẻ địch và loại địch nhưng không cung cấp thuật toán cụ thể. Phần này là **bài tập triển khai mở rộng** để hoàn thiện vòng chơi.

AI cơ bản có thể vận hành theo `Patrol → Investigate → Combat`. Khi vào Combat: liệt kê hành động hợp lệ → chấm điểm kỳ vọng theo sát thương, vị trí cover, nguy cơ bị trả đòn, AP còn lại → chọn hành động phù hợp.

Cách chấm điểm minh họa: `score = expectedDamage + coverValue - risk - apOpportunityCost`. Ưu tiên chọn **hành động hợp lệ** trước khi tối ưu; một AI “thông minh” nhưng đi xuyên tường là AI hỏng.

## 2. Quy trình thực hành với Unity/C#

1. Tạo `EnemyController` chỉ hành động trong `EnemyTurn`.
2. Liệt kê legal moves, legal attacks theo dữ liệu hiện thời.
3. Trước tiên dùng luật đơn giản: có mục tiêu bắn được thì bắn; nếu không, tiến tới ô cover gần nhất.
4. Sau khi hành động, cập nhật AP và trạng thái; lặp cho tới khi hết AP hoặc muốn dừng.
5. Thêm mode `Investigate` dựa vào tiếng động và `Patrol` dựa vào waypoint.
6. Dùng random seed cố định khi test để tái tạo lỗi.

## 3. Bài tập vận dụng

Viết 5 ca kiểm thử AI: không còn AP, không thấy địch, thấy địch sau vật cản, morale thấp, đường đi bị chặn.

## 4. Điều kiện hoàn thành

- [ ] Tóm tắt được quy tắc của cơ chế bằng lời của mình.
- [ ] Chạy được ca thực hành trong scene mẫu.
- [ ] Có kiểm tra ít nhất một trường hợp hợp lệ và một trường hợp lỗi.
- [ ] Ghi lại thông số đã chọn và lý do trong tài liệu thiết kế.

## 5. Liên hệ nguồn và giới hạn

- Phần **Kiến thức trọng tâm** bám các chủ đề trong bản ghi gốc và được biên tập lại thuật ngữ cho chính xác.
- **Quy trình thực hành**, ví dụ cấu trúc C# và thông số minh họa là nội dung giáo trình biên soạn bổ sung; video tổng quan không cung cấp toàn bộ mã triển khai.
- Xem [Nguồn và cách đọc giáo trình](../PHU-LUC/01-nguon-va-ghi-chu.md) để đối chiếu.
