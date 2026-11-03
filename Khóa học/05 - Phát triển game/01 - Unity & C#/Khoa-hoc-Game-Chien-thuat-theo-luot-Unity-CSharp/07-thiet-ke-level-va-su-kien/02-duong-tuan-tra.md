# Patrol Routes và waypoint trong Editor

> **Module 07** · Tham chiếu bản ghi video: **05:00–05:07; 10:02–10:26** · Công cụ thực hành: Unity + C#

## Mục tiêu học tập

Sau bài này, bạn có thể giải thích cơ chế, triển khai một phiên bản tối thiểu trong prototype, tự kiểm thử hành vi và nêu các quyết định thiết kế liên quan.

## 1. Kiến thức trọng tâm

Địch có thể tuần tra qua các **waypoint** định sẵn. Video mô tả cách dùng các GameObject rỗng làm vị trí để kẻ địch di chuyển lần lượt. Ưu điểm: người thiết kế level tự tạo đường tuần tra mà không cần sửa code.

Điều cần chốt: waypoint có đi theo thứ tự cố định, vòng lặp hay đảo ngược; địch có dừng/ngó quanh; khi nghe tiếng động thì có quay lại patrol không. Cần A* từ waypoint hiện tại tới waypoint tiếp theo để không đi xuyên vật cản.

Hãy lưu waypoint bằng tham chiếu tới đối tượng/transform và chuyển sang tọa độ lưới khi load.

## 2. Quy trình thực hành với Unity/C#

1. Tạo `PatrolRoute` giữ một danh sách `Transform` waypoint.
2. Vẽ đường nối waypoint bằng Gizmos.
3. AI ở state `Patrol` chọn waypoint kế tiếp và yêu cầu MoveAction hợp lệ.
4. Nếu đường bị chặn, thử lại hoặc đợi theo thời hạn; tránh vòng lặp vô tận.
5. Khi bị phát hiện/tiếng động, lưu waypoint hiện tại để quay lại sau.
6. Log trạng thái AI bằng màu và text trong Editor.

## 3. Bài tập vận dụng

Tạo hai tuyến tuần tra cắt nhau để người chơi có cơ hội chọn thời điểm hành động.

## 4. Điều kiện hoàn thành

- [ ] Tóm tắt được quy tắc của cơ chế bằng lời của mình.
- [ ] Chạy được ca thực hành trong scene mẫu.
- [ ] Có kiểm tra ít nhất một trường hợp hợp lệ và một trường hợp lỗi.
- [ ] Ghi lại thông số đã chọn và lý do trong tài liệu thiết kế.

## 5. Liên hệ nguồn và giới hạn

- Phần **Kiến thức trọng tâm** bám các chủ đề trong bản ghi gốc và được biên tập lại thuật ngữ cho chính xác.
- **Quy trình thực hành**, ví dụ cấu trúc C# và thông số minh họa là nội dung giáo trình biên soạn bổ sung; video tổng quan không cung cấp toàn bộ mã triển khai.
- Xem [Nguồn và cách đọc giáo trình](../PHU-LUC/01-nguon-va-ghi-chu.md) để đối chiếu.
