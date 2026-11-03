# Kiểm thử logic, bug cạnh và cân bằng

> **Module 09** · Tham chiếu bản ghi video: **05:57–06:08; 12:32–13:17** · Công cụ thực hành: Unity + C#

## Mục tiêu học tập

Sau bài này, bạn có thể giải thích cơ chế, triển khai một phiên bản tối thiểu trong prototype, tự kiểm thử hành vi và nêu các quyết định thiết kế liên quan.

## 1. Kiến thức trọng tâm

Video lưu ý nhiều cơ chế thực chất là công thức tương đối đơn giản; thách thức lớn hơn là **cân bằng các con số** để tạo quyết định thú vị. Hệ thống nên có test tự động cho phần logic thuần và playtest cho trải nghiệm.

Các nhóm lỗi quan trọng: đường đi xuyên vật cản, không cập nhật occupancy, trừ AP lặp, không xử lý chết giữa movement, Overwatch phản ứng sau khi người canh gác đã chết, LOS khác preview, không kiểm tra friendly fire, load level lặp spawn và lỗi lưu game.

Cân bằng qua bảng thử: chi phí AP, tốc độ di chuyển, khoảng cách, accuracy, cover penalty, damage HP/Morale, số hành động mỗi lượt. Đừng sửa năm tham số cùng lúc rồi không biết tham số nào tạo khác biệt.

## 2. Quy trình thực hành với Unity/C#

1. Viết ít nhất 20 EditMode/PlayMode tests cho grid, AP, target validation và combat.
2. Chạy 5 kịch bản đặt sẵn với random seed cố định.
3. Dùng log thống kê: số lượt/trận, tỷ lệ trúng, AP không dùng, thiệt hại đồng đội, tần suất Overwatch.
4. Chỉ thay một hoặc hai thông số cân bằng mỗi lần, ghi nhận thay đổi.
5. Quan sát playtest xem người chơi hiểu vì sao một action thất bại.
6. Tạo checklist trước mỗi bản build.

## 3. Bài tập vận dụng

Tìm một tình huống “chiến thuật luôn đúng”; thay đổi một luật để tạo ra ít nhất hai lựa chọn cạnh tranh.

## 4. Điều kiện hoàn thành

- [ ] Tóm tắt được quy tắc của cơ chế bằng lời của mình.
- [ ] Chạy được ca thực hành trong scene mẫu.
- [ ] Có kiểm tra ít nhất một trường hợp hợp lệ và một trường hợp lỗi.
- [ ] Ghi lại thông số đã chọn và lý do trong tài liệu thiết kế.

## 5. Liên hệ nguồn và giới hạn

- Phần **Kiến thức trọng tâm** bám các chủ đề trong bản ghi gốc và được biên tập lại thuật ngữ cho chính xác.
- **Quy trình thực hành**, ví dụ cấu trúc C# và thông số minh họa là nội dung giáo trình biên soạn bổ sung; video tổng quan không cung cấp toàn bộ mã triển khai.
- Xem [Nguồn và cách đọc giáo trình](../PHU-LUC/01-nguon-va-ghi-chu.md) để đối chiếu.
