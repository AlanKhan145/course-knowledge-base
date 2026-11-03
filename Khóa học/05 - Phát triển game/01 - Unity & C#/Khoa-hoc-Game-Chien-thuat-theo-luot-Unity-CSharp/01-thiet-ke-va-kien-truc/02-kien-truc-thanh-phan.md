# Kiến trúc code và phân chia trách nhiệm

> **Module 01** · Tham chiếu bản ghi video: **01:19–03:45; 09:42–11:19** · Công cụ thực hành: Unity + C#

## Mục tiêu học tập

Sau bài này, bạn có thể giải thích cơ chế, triển khai một phiên bản tối thiểu trong prototype, tự kiểm thử hành vi và nêu các quyết định thiết kế liên quan.

## 1. Kiến thức trọng tâm

Vì nhiều hệ thống cùng sử dụng vị trí lưới, hãy tách **logic thuần** khỏi việc render. Tránh để mỗi `MonoBehaviour` tự quyết định luật chơi.

Đề xuất các nhóm: `GridSystem` (tọa độ, ô, vật cản), `Unit` (trạng thái), `TurnSystem` (phe/lượt), `ActionSystem` (lệnh và AP), `CombatResolver` (tính toán giao tranh), `EnemyAI` (chọn quyết định), `LevelController` (sự kiện), `UI` (hiển thị).

**ScriptableObject** lưu cấu hình **loại** đơn vị, vũ khí, kỹ năng; `MonoBehaviour` hoặc các lớp runtime giữ **trạng thái đang thay đổi**. Ví dụ: `maxHP` nằm trong cấu hình; `currentHP` nằm trong `Unit`.

## 2. Quy trình thực hành với Unity/C#

1. Tạo thư mục Unity: `Scripts/Core`, `Grid`, `Units`, `Actions`, `Combat`, `AI`, `Levels`, `UI`, `Data`, `Tests`.
2. Xác định luồng: nhấp chuột → chọn ô → yêu cầu hành động → kiểm tra luật/AP → thực thi → phát sự kiện → UI cập nhật.
3. Quy định một nguồn dữ liệu duy nhất cho vị trí và đơn vị đang chiếm ô.
4. Sự kiện như `OnUnitMoved`, `OnActionCompleted`, `OnTurnChanged` giúp các hệ thống độc lập mà vẫn phối hợp.
5. Không để UI trực tiếp trừ HP hoặc AP.

## 3. Bài tập vận dụng

Vẽ sơ đồ thành phần của prototype, ghi rõ dữ liệu đi qua và sự kiện nào phát ra khi một đơn vị di chuyển.

## 4. Điều kiện hoàn thành

- [ ] Tóm tắt được quy tắc của cơ chế bằng lời của mình.
- [ ] Chạy được ca thực hành trong scene mẫu.
- [ ] Có kiểm tra ít nhất một trường hợp hợp lệ và một trường hợp lỗi.
- [ ] Ghi lại thông số đã chọn và lý do trong tài liệu thiết kế.

## 5. Liên hệ nguồn và giới hạn

- Phần **Kiến thức trọng tâm** bám các chủ đề trong bản ghi gốc và được biên tập lại thuật ngữ cho chính xác.
- **Quy trình thực hành**, ví dụ cấu trúc C# và thông số minh họa là nội dung giáo trình biên soạn bổ sung; video tổng quan không cung cấp toàn bộ mã triển khai.
- Xem [Nguồn và cách đọc giáo trình](../PHU-LUC/01-nguon-va-ghi-chu.md) để đối chiếu.
