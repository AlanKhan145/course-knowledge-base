# World Map và chọn nhiệm vụ

> **Module 08** · Tham chiếu bản ghi video: **11:19–11:50** · Công cụ thực hành: Unity + C#

## Mục tiêu học tập

Sau bài này, bạn có thể giải thích cơ chế, triển khai một phiên bản tối thiểu trong prototype, tự kiểm thử hành vi và nêu các quyết định thiết kế liên quan.

## 1. Kiến thức trọng tâm

Video trình bày bản đồ tổng thể (overworld): người chơi chọn vùng/nhiệm vụ. Một cách triển khai là chia bản đồ thành **các vùng có hình dạng**, dùng Sprite hoặc collider tương ứng và đổi màu theo trạng thái. Khi nhấp, mở panel nhiệm vụ hoặc chuyển scene.

Dữ liệu vùng gồm `regionId`, `displayName`, `mapPosition`, `missionId`, `unlockConditions`, `status` (`Locked`, `Available`, `Completed`). UI chỉ hiển thị dữ liệu; Campaign Manager là nơi quyết định vùng nào mở.

Có thể dùng ảnh nền hoặc polygon/collider; không cần bản đồ 3D phức tạp cho MVP.

## 2. Quy trình thực hành với Unity/C#

1. Tạo scene `CampaignMap` với 3 vùng click được.
2. Tạo `RegionDefinition` và `MissionDefinition` tách biệt.
3. Cập nhật màu vùng dựa trên trạng thái.
4. Chọn vùng → hiện brief → nhấn bắt đầu → load level.
5. Sau thắng, lưu tiến trình và trở lại CampaignMap.
6. Kiểm tra không thể mở vùng khóa khi reload scene.

## 3. Bài tập vận dụng

Thiết kế nhánh nhiệm vụ gồm hai lựa chọn, cả hai đều có thể dẫn tới cùng màn cuối.

## 4. Điều kiện hoàn thành

- [ ] Tóm tắt được quy tắc của cơ chế bằng lời của mình.
- [ ] Chạy được ca thực hành trong scene mẫu.
- [ ] Có kiểm tra ít nhất một trường hợp hợp lệ và một trường hợp lỗi.
- [ ] Ghi lại thông số đã chọn và lý do trong tài liệu thiết kế.

## 5. Liên hệ nguồn và giới hạn

- Phần **Kiến thức trọng tâm** bám các chủ đề trong bản ghi gốc và được biên tập lại thuật ngữ cho chính xác.
- **Quy trình thực hành**, ví dụ cấu trúc C# và thông số minh họa là nội dung giáo trình biên soạn bổ sung; video tổng quan không cung cấp toàn bộ mã triển khai.
- Xem [Nguồn và cách đọc giáo trình](../PHU-LUC/01-nguon-va-ghi-chu.md) để đối chiếu.
