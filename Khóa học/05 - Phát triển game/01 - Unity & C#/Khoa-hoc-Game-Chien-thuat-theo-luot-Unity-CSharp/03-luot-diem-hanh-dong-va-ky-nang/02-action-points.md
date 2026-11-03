# Thiết kế và tiêu hao Action Points (AP)

> **Module 03** · Tham chiếu bản ghi video: **02:43–03:12** · Công cụ thực hành: Unity + C#

## Mục tiêu học tập

Sau bài này, bạn có thể giải thích cơ chế, triển khai một phiên bản tối thiểu trong prototype, tự kiểm thử hành vi và nêu các quyết định thiết kế liên quan.

## 1. Kiến thức trọng tâm

AP là tài nguyên bắt người chơi lựa chọn giữa đi xa, nấp, bắn và kỹ năng. Ví dụ thiết kế: đơn vị có `4 AP`, di chuyển mỗi ô `1 AP`, bắn súng trường `2 AP`, ngắm `1 AP`, Overwatch `2 AP`. Đây là **giá trị minh họa**, không phải thông số lấy từ video.

Kiểm tra trước khi chạy: đúng phe, đơn vị còn sống, đủ AP, mục tiêu hợp lệ, tầm/đường nhìn hợp lệ và không bị khóa trạng thái. Cần chống trừ AP hai lần nếu animation phát lại hoặc callback lặp.

Một nguyên tắc hữu ích: hành động chứa **báo giá chi phí** và **điều kiện hợp lệ**; `ActionSystem` chịu trách nhiệm commit tài nguyên.

## 2. Quy trình thực hành với Unity/C#

1. Viết `CanExecute(unit, target)` trả về kết quả và lý do thất bại.
2. Viết `GetActionCost(unit, target)`; với di chuyển, chi phí dựa trên đường đi thật.
3. Gói trừ AP và bắt đầu action trong cùng một bước xác thực.
4. HUD hiển thị AP hiện có, AP cần dùng và AP còn lại **trước khi xác nhận**.
5. Khi action bị hủy trước commit, không trừ AP; khi đã commit, dùng quy tắc hoàn trả nhất quán.
6. Cho phép nhiều action trong cùng lượt miễn đủ AP.

## 3. Bài tập vận dụng

Thiết kế 3 cách dùng 4 AP tạo ra chiến thuật khác nhau; giải thích trường hợp nào tối ưu.

## 4. Điều kiện hoàn thành

- [ ] Tóm tắt được quy tắc của cơ chế bằng lời của mình.
- [ ] Chạy được ca thực hành trong scene mẫu.
- [ ] Có kiểm tra ít nhất một trường hợp hợp lệ và một trường hợp lỗi.
- [ ] Ghi lại thông số đã chọn và lý do trong tài liệu thiết kế.

## 5. Liên hệ nguồn và giới hạn

- Phần **Kiến thức trọng tâm** bám các chủ đề trong bản ghi gốc và được biên tập lại thuật ngữ cho chính xác.
- **Quy trình thực hành**, ví dụ cấu trúc C# và thông số minh họa là nội dung giáo trình biên soạn bổ sung; video tổng quan không cung cấp toàn bộ mã triển khai.
- Xem [Nguồn và cách đọc giáo trình](../PHU-LUC/01-nguon-va-ghi-chu.md) để đối chiếu.
