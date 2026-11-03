# Chọn ô bằng chuột với Raycast

> **Module 02** · Tham chiếu bản ghi video: **02:13–02:27** · Công cụ thực hành: Unity + C#

## Mục tiêu học tập

Sau bài này, bạn có thể giải thích cơ chế, triển khai một phiên bản tối thiểu trong prototype, tự kiểm thử hành vi và nêu các quyết định thiết kế liên quan.

## 1. Kiến thức trọng tâm

Để tương tác với lưới 3D, phát một tia từ camera qua vị trí con trỏ. Điểm raycast trúng mặt phẳng sàn được chuyển thành chỉ số ô. Nếu game 2D, có thể dùng phép chuyển tọa độ camera và physics 2D thay thế.

Luồng an toàn: đọc input → kiểm tra UI có đang chặn hay không → raycast lớp Ground → đổi tọa độ → kiểm tra giới hạn → hiển thị hover → chọn ô.

Không cho người chơi ra lệnh khi đang chạy animation của action trước. Mọi cú nhấp chỉ là **yêu cầu**, không phải quyền thực hiện vô điều kiện.

## 2. Quy trình thực hành với Unity/C#

1. Đặt layer `Ground` cho mặt sàn và `Unit` cho nhân vật.
2. Dùng `Camera.ScreenPointToRay(Input.mousePosition)` và `Physics.Raycast` với `LayerMask`.
3. Vẽ viền `hover cell` và `selected cell` bằng prefab hoặc mesh overlay.
4. Nếu raycast trúng ngoài lưới, bỏ lựa chọn thay vì phát sinh exception.
5. Khóa điều khiển trong trạng thái `Busy`, sau đó mở lại khi action kết thúc.

## 3. Bài tập vận dụng

Tạo tooltip hiển thị tọa độ, chi phí di chuyển và đơn vị đang đứng ở ô trỏ chuột.

## 4. Điều kiện hoàn thành

- [ ] Tóm tắt được quy tắc của cơ chế bằng lời của mình.
- [ ] Chạy được ca thực hành trong scene mẫu.
- [ ] Có kiểm tra ít nhất một trường hợp hợp lệ và một trường hợp lỗi.
- [ ] Ghi lại thông số đã chọn và lý do trong tài liệu thiết kế.

## 5. Liên hệ nguồn và giới hạn

- Phần **Kiến thức trọng tâm** bám các chủ đề trong bản ghi gốc và được biên tập lại thuật ngữ cho chính xác.
- **Quy trình thực hành**, ví dụ cấu trúc C# và thông số minh họa là nội dung giáo trình biên soạn bổ sung; video tổng quan không cung cấp toàn bộ mã triển khai.
- Xem [Nguồn và cách đọc giáo trình](../PHU-LUC/01-nguon-va-ghi-chu.md) để đối chiếu.
