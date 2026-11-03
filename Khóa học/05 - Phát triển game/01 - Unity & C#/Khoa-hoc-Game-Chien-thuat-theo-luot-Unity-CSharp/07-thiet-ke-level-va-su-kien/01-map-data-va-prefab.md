# Map Prefab, spawn point và dữ liệu bản đồ

> **Module 07** · Tham chiếu bản ghi video: **09:42–10:20** · Công cụ thực hành: Unity + C#

## Mục tiêu học tập

Sau bài này, bạn có thể giải thích cơ chế, triển khai một phiên bản tối thiểu trong prototype, tự kiểm thử hành vi và nêu các quyết định thiết kế liên quan.

## 1. Kiến thức trọng tâm

Video đề xuất cách đơn giản: xây toàn bộ môi trường dưới dạng **một Prefab bản đồ**. Bên trong đặt GameObject/marker trống cho các vị trí xuất hiện, mục tiêu, waypoint, trigger hoặc đồ vật cần tương tác.

Map Prefab gồm phần tĩnh (sàn, tường, cover), dữ liệu grid, marker (`PlayerSpawn`, `EnemySpawn`, `PatrolPoint`) và script level. Khi tải level, trình khởi tạo đọc các marker, tạo grid occupancy rồi spawn unit.

Tránh biến marker thành dependency khó theo dõi: nên có component rõ ràng `SpawnMarker(team, archetype)` thay vì tên đối tượng `Enemy1` chứa ý nghĩa duy nhất.

## 2. Quy trình thực hành với Unity/C#

1. Dựng một prefab `Level01` có 12×12 ô, 4 cover, 2 vị trí spawn mỗi phe.
2. Tạo `SpawnMarker` dùng Gizmos (xanh đồng minh, đỏ kẻ thù).
3. Tạo `LevelDefinition` khai báo asset bản đồ và mục tiêu thắng.
4. `LevelLoader` instantiate prefab, dựng dữ liệu lưới và tạo nhân vật.
5. Kiểm tra lỗi marker nằm ngoài lưới hoặc đè nhau.
6. Cho phép chạy level trực tiếp trong Editor để designer kiểm thử nhanh.

## 3. Bài tập vận dụng

Tạo một Level02 chỉ thay prefab/dữ liệu mà không sửa code hành động.

## 4. Điều kiện hoàn thành

- [ ] Tóm tắt được quy tắc của cơ chế bằng lời của mình.
- [ ] Chạy được ca thực hành trong scene mẫu.
- [ ] Có kiểm tra ít nhất một trường hợp hợp lệ và một trường hợp lỗi.
- [ ] Ghi lại thông số đã chọn và lý do trong tài liệu thiết kế.

## 5. Liên hệ nguồn và giới hạn

- Phần **Kiến thức trọng tâm** bám các chủ đề trong bản ghi gốc và được biên tập lại thuật ngữ cho chính xác.
- **Quy trình thực hành**, ví dụ cấu trúc C# và thông số minh họa là nội dung giáo trình biên soạn bổ sung; video tổng quan không cung cấp toàn bộ mã triển khai.
- Xem [Nguồn và cách đọc giáo trình](../PHU-LUC/01-nguon-va-ghi-chu.md) để đối chiếu.
