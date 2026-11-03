# Action System và dữ liệu kỹ năng bằng ScriptableObject

> **Module 03** · Tham chiếu bản ghi video: **02:59–03:46** · Công cụ thực hành: Unity + C#

## Mục tiêu học tập

Sau bài này, bạn có thể giải thích cơ chế, triển khai một phiên bản tối thiểu trong prototype, tự kiểm thử hành vi và nêu các quyết định thiết kế liên quan.

## 1. Kiến thức trọng tâm

Video gợi ý dùng **ScriptableObject** để lưu định nghĩa kỹ năng, vũ khí, loại kẻ địch và trang bị. Trong Unity, đối tượng dạng asset phù hợp với dữ liệu có thể dùng lại: tên, icon, chi phí AP, tầm, thời gian hồi, sát thương và loại mục tiêu.

Không nên đưa `currentCooldown` của từng đơn vị vào asset dùng chung; đây là **trạng thái runtime**. Tách `ActionDefinition` khỏi `ActionInstance` để nhiều nhân vật dùng cùng một kỹ năng nhưng không chia sẻ thời gian hồi.

Ví dụ các action đầu tiên: `MoveAction`, `ShootAction`, `OverwatchAction`, `WaitAction`; các hành động bổ sung: `Reload`, `ThrowGrenade`, `Interact`.

## 2. Quy trình thực hành với Unity/C#

1. Tạo ScriptableObject `ActionDefinition` với `id`, `displayName`, `apCost`, `range`, `icon`.
2. Tạo lớp executor theo action type, tránh `switch` quá lớn chứa toàn bộ logic.
3. Với mỗi action, triển khai `CanTarget`, `Preview`, `Execute`.
4. `Execute` thông báo `OnActionCompleted` để `TurnSystem` có thể tiếp tục.
5. Tạo inspector validation chặn chi phí âm, tầm không hợp lệ, id trùng.
6. Dùng các asset dữ liệu thay vì hard-code thông số trong prefab.

## 3. Bài tập vận dụng

Thêm kỹ năng `Aim`: tốn 1 AP, tăng độ chính xác của lần bắn tiếp theo; lưu trạng thái buff trên đơn vị chứ không trên asset.

## 4. Điều kiện hoàn thành

- [ ] Tóm tắt được quy tắc của cơ chế bằng lời của mình.
- [ ] Chạy được ca thực hành trong scene mẫu.
- [ ] Có kiểm tra ít nhất một trường hợp hợp lệ và một trường hợp lỗi.
- [ ] Ghi lại thông số đã chọn và lý do trong tài liệu thiết kế.

## 5. Liên hệ nguồn và giới hạn

- Phần **Kiến thức trọng tâm** bám các chủ đề trong bản ghi gốc và được biên tập lại thuật ngữ cho chính xác.
- **Quy trình thực hành**, ví dụ cấu trúc C# và thông số minh họa là nội dung giáo trình biên soạn bổ sung; video tổng quan không cung cấp toàn bộ mã triển khai.
- Xem [Nguồn và cách đọc giáo trình](../PHU-LUC/01-nguon-va-ghi-chu.md) để đối chiếu.
