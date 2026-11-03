# Tìm đường A* và đường đi thực tế

> **Module 02** · Tham chiếu bản ghi video: **02:27–02:43** · Công cụ thực hành: Unity + C#

## Mục tiêu học tập

Sau bài này, bạn có thể giải thích cơ chế, triển khai một phiên bản tối thiểu trong prototype, tự kiểm thử hành vi và nêu các quyết định thiết kế liên quan.

## 1. Kiến thức trọng tâm

**A*** tìm đường chi phí thấp nhất khi heuristic phù hợp. Với lưới chỉ đi bốn hướng, heuristic Manhattan là `|dx| + |dz|`; nếu cho đi chéo, dùng heuristic phù hợp với chi phí chéo. Mỗi trạng thái có `g` (chi phí đã đi), `h` (ước lượng còn lại), `f = g + h`.

Đơn vị không được xuyên qua tường, ô không thể đi hoặc đơn vị khác (trừ khi có quy tắc riêng). Đường đi cuối cùng là **danh sách ô liên tiếp**, không chỉ là điểm đến; đây cũng là dữ liệu quan trọng để kích hoạt Overwatch và vùng phát hiện.

Cần phân biệt **tìm được đường đi** với **đường đi đủ rẻ để mua bằng AP**.

## 2. Quy trình thực hành với Unity/C#

1. Lấy các ô lân cận hợp lệ trong `GridSystem`.
2. Tạo hàng đợi ưu tiên theo `f`, một tập đã duyệt và `cameFrom`.
3. Cập nhật gScore khi tìm ra đường rẻ hơn; dừng khi tới đích.
4. Truy ngược `cameFrom` để trả về danh sách ô.
5. Hiển thị trước đường đi và tổng chi phí; xử lý trường hợp không có đường.
6. Viết test: đường thẳng, tường chắn, ô đích bị chiếm, bản đồ không nối thông.

## 3. Bài tập vận dụng

So sánh đường đi ngắn theo số ô với đường đi rẻ theo trọng số khi có địa hình bùn hoặc nước.

## 4. Điều kiện hoàn thành

- [ ] Tóm tắt được quy tắc của cơ chế bằng lời của mình.
- [ ] Chạy được ca thực hành trong scene mẫu.
- [ ] Có kiểm tra ít nhất một trường hợp hợp lệ và một trường hợp lỗi.
- [ ] Ghi lại thông số đã chọn và lý do trong tài liệu thiết kế.

## 5. Liên hệ nguồn và giới hạn

- Phần **Kiến thức trọng tâm** bám các chủ đề trong bản ghi gốc và được biên tập lại thuật ngữ cho chính xác.
- **Quy trình thực hành**, ví dụ cấu trúc C# và thông số minh họa là nội dung giáo trình biên soạn bổ sung; video tổng quan không cung cấp toàn bộ mã triển khai.
- Xem [Nguồn và cách đọc giáo trình](../PHU-LUC/01-nguon-va-ghi-chu.md) để đối chiếu.
