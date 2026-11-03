# Thiết kế loại đơn vị và dữ liệu kẻ địch

> **Module 06** · Tham chiếu bản ghi video: **09:27–09:42** · Công cụ thực hành: Unity + C#

## Mục tiêu học tập

Sau bài này, bạn có thể giải thích cơ chế, triển khai một phiên bản tối thiểu trong prototype, tự kiểm thử hành vi và nêu các quyết định thiết kế liên quan.

## 1. Kiến thức trọng tâm

Trong video, các loại kẻ địch có chỉ số và kỹ năng khác nhau; ScriptableObject là lựa chọn lưu **định nghĩa mẫu**. Các trường nên có: id, tên, maxHP, maxMorale, baseAP, movement, visionRange, accuracy, weapon, actionList, AI role.

Một số archetype để làm bài tập: `Scout` (nhanh, quan sát xa), `Rifleman` (ổn định), `Heavy` (chậm, nhiều máu, áp chế). Đây là **dữ liệu thiết kế ví dụ**, không phải các loại kẻ thù mà video xác định.

Tách prefab trình bày (model, animation, visual effects) khỏi asset định nghĩa. Nhiều đơn vị có thể dùng chung một archetype nhưng runtime HP, Morale, vị trí, AP không chia sẻ.

## 2. Quy trình thực hành với Unity/C#

1. Tạo `UnitDefinition : ScriptableObject`.
2. Tạo 3 asset đơn vị, 2 asset vũ khí và 2 asset action.
3. Khi spawn, copy chỉ số khởi tạo từ asset sang `UnitRuntimeState`.
4. Sinh đối tượng qua một `UnitFactory`/`Spawner` chung.
5. Viết test clone cùng archetype nhưng hai cá thể mất máu độc lập.
6. Thêm một bảng cân bằng để điều chỉnh archetype mà không sửa source code.

## 3. Bài tập vận dụng

Thiết kế 3 loại địch với vai trò không trùng nhau và nêu cách phối hợp tạo tình huống thú vị.

## 4. Điều kiện hoàn thành

- [ ] Tóm tắt được quy tắc của cơ chế bằng lời của mình.
- [ ] Chạy được ca thực hành trong scene mẫu.
- [ ] Có kiểm tra ít nhất một trường hợp hợp lệ và một trường hợp lỗi.
- [ ] Ghi lại thông số đã chọn và lý do trong tài liệu thiết kế.

## 5. Liên hệ nguồn và giới hạn

- Phần **Kiến thức trọng tâm** bám các chủ đề trong bản ghi gốc và được biên tập lại thuật ngữ cho chính xác.
- **Quy trình thực hành**, ví dụ cấu trúc C# và thông số minh họa là nội dung giáo trình biên soạn bổ sung; video tổng quan không cung cấp toàn bộ mã triển khai.
- Xem [Nguồn và cách đọc giáo trình](../PHU-LUC/01-nguon-va-ghi-chu.md) để đối chiếu.
