# Grid System: ô, tọa độ và chiếm chỗ

> **Module 02** · Tham chiếu bản ghi video: **01:19–02:10** · Công cụ thực hành: Unity + C#

## Mục tiêu học tập

Sau bài này, bạn có thể giải thích cơ chế, triển khai một phiên bản tối thiểu trong prototype, tự kiểm thử hành vi và nêu các quyết định thiết kế liên quan.

## 1. Kiến thức trọng tâm

Lưới chia thế giới thành các ô có tọa độ nguyên `(x, z)`. Với Unity 3D, mặt đất thường là mặt phẳng XZ; vị trí thế giới của tâm ô có thể là `(x * cellSize, 0, z * cellSize)`. Hệ thống lưới chỉ mô tả **tọa độ và trạng thái ô**, không cần quyết định mọi hành vi.

Mỗi ô có thể lưu `walkable`, `moveCost`, `occupant`, `cover` và nhãn địa hình. `GridPosition` nên là kiểu giá trị để so sánh dễ dàng. Phân biệt ô **nằm trong bản đồ**, ô **đi được** và ô **trống**.

Lưới vuông giúp kiểm soát luật; video cũng nhắc tới khả năng dùng hệ lưới lục giác như một hướng mở rộng.

## 2. Quy trình thực hành với Unity/C#

1. Tạo lớp `GridPosition { int X, Z; }` và phép so sánh bằng nhau.
2. Viết `WorldToGrid` với `Mathf.FloorToInt`, `GridToWorld` bằng tâm ô.
3. Tạo mảng 2 chiều `GridCell[,]` chứa dữ liệu đi được và đơn vị chiếm ô.
4. Vẽ đường kẻ bằng Gizmos trong Editor; tô màu ô đi được và ô bị chặn.
5. Khi đơn vị chuyển ô, giải phóng occupant cũ và đặt occupant mới **một cách nhất quán**.

## 3. Bài tập vận dụng

Đặt 5 chướng ngại trên bản đồ 10×10; xác minh tọa độ của từng ô bằng một nhãn debug.

## 4. Điều kiện hoàn thành

- [ ] Tóm tắt được quy tắc của cơ chế bằng lời của mình.
- [ ] Chạy được ca thực hành trong scene mẫu.
- [ ] Có kiểm tra ít nhất một trường hợp hợp lệ và một trường hợp lỗi.
- [ ] Ghi lại thông số đã chọn và lý do trong tài liệu thiết kế.

## 5. Liên hệ nguồn và giới hạn

- Phần **Kiến thức trọng tâm** bám các chủ đề trong bản ghi gốc và được biên tập lại thuật ngữ cho chính xác.
- **Quy trình thực hành**, ví dụ cấu trúc C# và thông số minh họa là nội dung giáo trình biên soạn bổ sung; video tổng quan không cung cấp toàn bộ mã triển khai.
- Xem [Nguồn và cách đọc giáo trình](../PHU-LUC/01-nguon-va-ghi-chu.md) để đối chiếu.
