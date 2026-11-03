# Viết Game Design Document và phạm vi MVP

> **Module 01** · Tham chiếu bản ghi video: **00:41–00:54; 12:32–13:17** · Công cụ thực hành: Unity + C#

## Mục tiêu học tập

Sau bài này, bạn có thể giải thích cơ chế, triển khai một phiên bản tối thiểu trong prototype, tự kiểm thử hành vi và nêu các quyết định thiết kế liên quan.

## 1. Kiến thức trọng tâm

Game Design Document (GDD) ngắn giúp quản lý phạm vi. Nội dung cần có: đối tượng người chơi; góc camera; nhịp lượt; bàn cờ dạng lưới vuông; giới hạn AP; danh sách action; tầm nhìn; chiến thắng/thất bại; cách mở khóa tính năng.

Phân biệt **luật cứng** và **giá trị cân bằng**: “Bắn cần đủ AP” là luật; “bắn tiêu tốn 2 AP” là giá trị có thể chỉnh. Giá trị cân bằng nên để thành dữ liệu cấu hình, không rải trong mã.

Lộ trình ưu tiên: di chuyển hợp lệ → tính AP → bắn → lượt địch → che chắn → Overwatch → tàng hình → tinh thần → bản đồ chiến dịch. Các yếu tố hậu kỳ như VFX, âm thanh, cắt cảnh chỉ làm sau khi logic đã kiểm thử.

## 2. Quy trình thực hành với Unity/C#

1. Viết `GDD.md` không quá 3 trang, mô tả trận đấu 5–10 phút.
2. Tạo bảng yêu cầu `MUST / SHOULD / LATER`.
3. Định nghĩa 8–12 ca kiểm thử chấp nhận, ví dụ “không thể đi vào ô bị chiếm”.
4. Ghi lại mọi công thức xác suất và giới hạn trong một bảng cân bằng.
5. Dùng Git, tạo commit cho mỗi cột mốc có thể chơi.

## 3. Bài tập vận dụng

Đề xuất 3 điểm khác biệt về chiến thuật của game, nhưng chỉ chọn **một** để làm sau bản MVP.

## 4. Điều kiện hoàn thành

- [ ] Tóm tắt được quy tắc của cơ chế bằng lời của mình.
- [ ] Chạy được ca thực hành trong scene mẫu.
- [ ] Có kiểm tra ít nhất một trường hợp hợp lệ và một trường hợp lỗi.
- [ ] Ghi lại thông số đã chọn và lý do trong tài liệu thiết kế.

## 5. Liên hệ nguồn và giới hạn

- Phần **Kiến thức trọng tâm** bám các chủ đề trong bản ghi gốc và được biên tập lại thuật ngữ cho chính xác.
- **Quy trình thực hành**, ví dụ cấu trúc C# và thông số minh họa là nội dung giáo trình biên soạn bổ sung; video tổng quan không cung cấp toàn bộ mã triển khai.
- Xem [Nguồn và cách đọc giáo trình](../PHU-LUC/01-nguon-va-ghi-chu.md) để đối chiếu.
