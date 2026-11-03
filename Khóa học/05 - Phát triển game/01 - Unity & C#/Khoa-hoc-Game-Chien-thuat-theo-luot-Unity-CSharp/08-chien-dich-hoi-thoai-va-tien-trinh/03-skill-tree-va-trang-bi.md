# Skill Tree, vũ khí và tùy biến nhân vật

> **Module 08** · Tham chiếu bản ghi video: **11:57–12:30** · Công cụ thực hành: Unity + C#

## Mục tiêu học tập

Sau bài này, bạn có thể giải thích cơ chế, triển khai một phiên bản tối thiểu trong prototype, tự kiểm thử hành vi và nêu các quyết định thiết kế liên quan.

## 1. Kiến thức trọng tâm

Video đề cập **cây kỹ năng** có chi phí, điều kiện, kỹ năng tiên quyết và **trang bị** làm thay đổi chỉ số hoặc hình ảnh nhân vật. ScriptableObject là phương án được tác giả ưu tiên để định nghĩa kỹ năng thay cho enum cứng.

Mỗi nút kỹ năng cần `skillId`, `cost`, `prerequisites`, `effects`. Điểm mở khóa là tài nguyên **campaign**, không phải AP trong giao tranh. Trang bị có thể thay đổi weapon stat, action list, animation/avatar; cần cập nhật cả UI lẫn gameplay.

Tránh lẫn lộn “đã mở khóa kỹ năng” với “đang trang bị kỹ năng”. Cho phép kiểm tra vòng phụ thuộc trong skill tree; không nên có chu trình A cần B và B cần A.

## 2. Quy trình thực hành với Unity/C#

1. Tạo 5 nút skill với điều kiện tiên quyết tạo thành DAG.
2. Viết `CanUnlock` kiểm tra tài nguyên và các nút tiên quyết.
3. Thêm `Inventory` và `EquipmentSlot` ở mức dữ liệu.
4. Khi đổi vũ khí, cập nhật action bắn, tầm và preview.
5. Bật/tắt visual child object tương ứng trang bị như gợi ý trong video.
6. Lưu skill unlocked và trang bị với phiên bản save-data rõ ràng.

## 3. Bài tập vận dụng

Thiết kế hai build cho cùng archetype: thiên về tàng hình và thiên về áp chế/tinh thần.

## 4. Điều kiện hoàn thành

- [ ] Tóm tắt được quy tắc của cơ chế bằng lời của mình.
- [ ] Chạy được ca thực hành trong scene mẫu.
- [ ] Có kiểm tra ít nhất một trường hợp hợp lệ và một trường hợp lỗi.
- [ ] Ghi lại thông số đã chọn và lý do trong tài liệu thiết kế.

## 5. Liên hệ nguồn và giới hạn

- Phần **Kiến thức trọng tâm** bám các chủ đề trong bản ghi gốc và được biên tập lại thuật ngữ cho chính xác.
- **Quy trình thực hành**, ví dụ cấu trúc C# và thông số minh họa là nội dung giáo trình biên soạn bổ sung; video tổng quan không cung cấp toàn bộ mã triển khai.
- Xem [Nguồn và cách đọc giáo trình](../PHU-LUC/01-nguon-va-ghi-chu.md) để đối chiếu.
