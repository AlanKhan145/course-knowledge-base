# Tổng quan game chiến thuật theo lượt

> **Module 01** · Tham chiếu bản ghi video: **00:38–01:18** · Công cụ thực hành: Unity + C#

## Mục tiêu học tập

Sau bài này, bạn có thể giải thích cơ chế, triển khai một phiên bản tối thiểu trong prototype, tự kiểm thử hành vi và nêu các quyết định thiết kế liên quan.

## 1. Kiến thức trọng tâm

Game chiến thuật theo lượt (turn-based tactics) yêu cầu người chơi chọn **đơn vị**, cân nhắc **vị trí**, sử dụng **điểm hành động (AP)** và tương tác với địa hình. Video lấy *Classified: France ’44* làm ví dụ tham khảo, không phải mã nguồn hoặc hướng dẫn tái tạo nguyên bản trò chơi đó.

Các trụ cột được giới thiệu: **lưới**, **tìm đường**, **hành động/kỹ năng**, **tàng hình**, **Overwatch**, **che chắn/đánh sườn**, **bắn nhầm đồng đội**, **máu/tinh thần**, **AI**, **dữ liệu bản đồ** và **tiến trình chiến dịch**.

Nên bắt đầu bằng một **vertical slice** nhỏ: 1 bản đồ, 2 lính đồng minh, 2 kẻ địch, di chuyển, bắn và kết thúc lượt. Chỉ thêm cơ chế mới khi vòng lặp này ổn định.

## 2. Quy trình thực hành với Unity/C#

1. Viết luật: mỗi bên điều khiển các đơn vị lần lượt; lượt của đơn vị bị giới hạn bởi AP.
2. Quy định điều kiện thắng (loại bỏ toàn bộ địch) và thua (không còn đơn vị có thể chiến đấu).
3. Vẽ màn hình gồm lưới, HUD đơn vị, nút hành động, nút kết thúc lượt và nhật ký chiến đấu.
4. Tạo một scene Unity chứa mặt sàn, camera nhìn xiên và các đối tượng tượng trưng bằng capsule/cube.
5. **Không** triển khai đồng thời nhiều cơ chế; ưu tiên chạy được loop di chuyển → tấn công → đổi lượt.

## 3. Bài tập vận dụng

Vẽ một chuỗi 6 bước từ khởi động trận tới thắng/thua; gắn tên hệ thống chịu trách nhiệm cho mỗi bước.

## 4. Điều kiện hoàn thành

- [ ] Tóm tắt được quy tắc của cơ chế bằng lời của mình.
- [ ] Chạy được ca thực hành trong scene mẫu.
- [ ] Có kiểm tra ít nhất một trường hợp hợp lệ và một trường hợp lỗi.
- [ ] Ghi lại thông số đã chọn và lý do trong tài liệu thiết kế.

## 5. Liên hệ nguồn và giới hạn

- Phần **Kiến thức trọng tâm** bám các chủ đề trong bản ghi gốc và được biên tập lại thuật ngữ cho chính xác.
- **Quy trình thực hành**, ví dụ cấu trúc C# và thông số minh họa là nội dung giáo trình biên soạn bổ sung; video tổng quan không cung cấp toàn bộ mã triển khai.
- Xem [Nguồn và cách đọc giáo trình](../PHU-LUC/01-nguon-va-ghi-chu.md) để đối chiếu.
