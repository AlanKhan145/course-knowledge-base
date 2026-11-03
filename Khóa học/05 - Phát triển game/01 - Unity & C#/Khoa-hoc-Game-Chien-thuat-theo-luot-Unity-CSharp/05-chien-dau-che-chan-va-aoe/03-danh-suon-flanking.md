# Flanking: tấn công từ hướng không được che chắn

> **Module 05** · Tham chiếu bản ghi video: **06:30–07:11** · Công cụ thực hành: Unity + C#

## Mục tiêu học tập

Sau bài này, bạn có thể giải thích cơ chế, triển khai một phiên bản tối thiểu trong prototype, tự kiểm thử hành vi và nêu các quyết định thiết kế liên quan.

## 1. Kiến thức trọng tâm

Flanking (đánh sườn/đánh vòng) xảy ra khi người bắn di chuyển sang hướng không được vật che chắn bảo vệ. Video nhấn mạnh việc kiểm tra **cover có nằm giữa người bắn và mục tiêu hay không**. Nếu không có, mục tiêu dễ trúng đòn hơn.

Flanking không nhất thiết là một buff riêng: có thể là **loại bỏ cover penalty**, hoặc thêm `flankBonus`. Chỉ chọn một mô hình nhất quán để tránh nhân đôi ưu thế. Thực hiện tính cover từ góc của từng người bắn, không dùng một trạng thái `isFlanked` cố định cho mọi kẻ thù.

## 2. Quy trình thực hành với Unity/C#

1. Tạo bản đồ có một bao cát che phía Bắc mục tiêu.
2. Đứng phía Bắc bắn: cover áp dụng; di chuyển tới phía Đông: cover không áp dụng.
3. Trong `AttackContext`, trả về `coverType`, `flanked`, `hitChance`.
4. Vẽ mũi tên và nhãn `FLANK` trên HUD nếu người bắn đang khai thác cạnh trống.
5. Viết test góc bắn, độ cao và vật cản khác che phía sau mục tiêu.
6. Đảm bảo quân đang di chuyển chưa nhận ưu thế flanking trước khi hành động hoàn thành.

## 3. Bài tập vận dụng

Thiết kế một tình huống buộc người chơi cân nhắc giữa đi vòng tiêu tốn AP và bắn ngay với cover penalty.

## 4. Điều kiện hoàn thành

- [ ] Tóm tắt được quy tắc của cơ chế bằng lời của mình.
- [ ] Chạy được ca thực hành trong scene mẫu.
- [ ] Có kiểm tra ít nhất một trường hợp hợp lệ và một trường hợp lỗi.
- [ ] Ghi lại thông số đã chọn và lý do trong tài liệu thiết kế.

## 5. Liên hệ nguồn và giới hạn

- Phần **Kiến thức trọng tâm** bám các chủ đề trong bản ghi gốc và được biên tập lại thuật ngữ cho chính xác.
- **Quy trình thực hành**, ví dụ cấu trúc C# và thông số minh họa là nội dung giáo trình biên soạn bổ sung; video tổng quan không cung cấp toàn bộ mã triển khai.
- Xem [Nguồn và cách đọc giáo trình](../PHU-LUC/01-nguon-va-ghi-chu.md) để đối chiếu.
