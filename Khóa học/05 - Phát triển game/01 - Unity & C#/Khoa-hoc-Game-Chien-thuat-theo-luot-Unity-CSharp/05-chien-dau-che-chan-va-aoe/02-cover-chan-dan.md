# Hệ thống che chắn: không, thấp, cao

> **Module 05** · Tham chiếu bản ghi video: **05:34–06:30** · Công cụ thực hành: Unity + C#

## Mục tiêu học tập

Sau bài này, bạn có thể giải thích cơ chế, triển khai một phiên bản tối thiểu trong prototype, tự kiểm thử hành vi và nêu các quyết định thiết kế liên quan.

## 1. Kiến thức trọng tâm

Video phân biệt `No Cover`, `Half/Low Cover` và `Full/High Cover`. Vật cản giúp giảm xác suất kẻ địch bắn trúng. Loại cover có thể lưu trong component gắn vào thùng, bao cát, tường... rồi ánh xạ vào các cạnh/ô của lưới.

Đừng chỉ gắn “cover có/không” cho **ô đứng**: vật cản phải nằm **theo hướng bắn** thì mới che được. Cách triển khai cơ bản của video: dùng raycast để ghi nhận các vật thể có component cover, sau đó kiểm tra ô lân cận khi đơn vị đứng cạnh.

Đề xuất mô hình dữ liệu: `CoverType { None, Low, High }`; `GridCell.CoverOnEdge[North/East/South/West]`. Đây là cách tổ chức bổ sung để xử lý hướng bắn nhất quán.

## 2. Quy trình thực hành với Unity/C#

1. Tạo `CoverObject` với loại `Low` hoặc `High`.
2. Dùng Collider/Raycast hoặc dữ liệu level editor để gán cover cho cạnh ô.
3. Xác định đoạn thẳng từ attacker tới defender đi qua cạnh cover nào.
4. Áp dụng mức phạt độ chính xác có cấu hình; cho hiển thị biểu tượng nửa/tấm khiên.
5. Viết test bắn từ bốn hướng tới cùng mục tiêu, đảm bảo phía trống không được cover.
6. Kiểm tra ưu tiên cover khi nhiều vật cản nằm xen giữa.

## 3. Bài tập vận dụng

So sánh độ chính xác trước và sau khi di chuyển tới phía sau tường; giải thích vì sao vị trí có giá trị hơn một phát bắn.

## 4. Điều kiện hoàn thành

- [ ] Tóm tắt được quy tắc của cơ chế bằng lời của mình.
- [ ] Chạy được ca thực hành trong scene mẫu.
- [ ] Có kiểm tra ít nhất một trường hợp hợp lệ và một trường hợp lỗi.
- [ ] Ghi lại thông số đã chọn và lý do trong tài liệu thiết kế.

## 5. Liên hệ nguồn và giới hạn

- Phần **Kiến thức trọng tâm** bám các chủ đề trong bản ghi gốc và được biên tập lại thuật ngữ cho chính xác.
- **Quy trình thực hành**, ví dụ cấu trúc C# và thông số minh họa là nội dung giáo trình biên soạn bổ sung; video tổng quan không cung cấp toàn bộ mã triển khai.
- Xem [Nguồn và cách đọc giáo trình](../PHU-LUC/01-nguon-va-ghi-chu.md) để đối chiếu.
