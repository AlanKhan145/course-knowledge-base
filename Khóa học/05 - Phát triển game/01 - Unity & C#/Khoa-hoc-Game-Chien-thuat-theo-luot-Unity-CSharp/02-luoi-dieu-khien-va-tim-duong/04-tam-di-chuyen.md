# Vùng di chuyển hợp lệ với ngân sách AP

> **Module 02** · Tham chiếu bản ghi video: **02:43–02:58** · Công cụ thực hành: Unity + C#

## Mục tiêu học tập

Sau bài này, bạn có thể giải thích cơ chế, triển khai một phiên bản tối thiểu trong prototype, tự kiểm thử hành vi và nêu các quyết định thiết kế liên quan.

## 1. Kiến thức trọng tâm

Không nên gọi A* độc lập cho mọi ô chỉ để tính phạm vi có thể đi. Với chi phí địa hình không âm, Dijkstra từ vị trí hiện tại sẽ trả về **chi phí nhỏ nhất tới mọi ô**; từ đó lọc các ô có `cost ≤ moveBudget`.

Video giải thích ý tưởng tính khoảng cách tối đa rồi kiểm tra khả năng tiếp cận từng điểm. Dijkstra là **phần triển khai tối ưu hóa được giáo trình bổ sung**, không phải thuật toán được video nêu cụ thể.

Cần quy định rõ: chi phí đi một ô, chi phí địa hình, giới hạn lượt, có được đi xuyên đồng đội hay không, có cho phép đường chéo hay không.

## 2. Quy trình thực hành với Unity/C#

1. Tạo `moveBudget` từ AP và quy đổi thành chi phí bước.
2. Chạy Dijkstra để tính chi phí và đường tiền nhiệm tới từng ô.
3. Chỉ tô xanh ô `walkable`, còn trống và đạt ngân sách.
4. Khi chọn một ô, tái dựng đường đi, kiểm tra lại tính hợp lệ ngay trước khi thực thi.
5. Trừ AP theo đúng `pathCost`, không chỉ theo khoảng cách Euclid.
6. Nếu có tác động giữa các bước di chuyển, phát sự kiện sau **mỗi ô**.

## 3. Bài tập vận dụng

Dựng một map có địa hình đi chậm; chứng minh 2 ô khác nhau có cùng khoảng cách hình học nhưng chi phí AP khác nhau.

## 4. Điều kiện hoàn thành

- [ ] Tóm tắt được quy tắc của cơ chế bằng lời của mình.
- [ ] Chạy được ca thực hành trong scene mẫu.
- [ ] Có kiểm tra ít nhất một trường hợp hợp lệ và một trường hợp lỗi.
- [ ] Ghi lại thông số đã chọn và lý do trong tài liệu thiết kế.

## 5. Liên hệ nguồn và giới hạn

- Phần **Kiến thức trọng tâm** bám các chủ đề trong bản ghi gốc và được biên tập lại thuật ngữ cho chính xác.
- **Quy trình thực hành**, ví dụ cấu trúc C# và thông số minh họa là nội dung giáo trình biên soạn bổ sung; video tổng quan không cung cấp toàn bộ mã triển khai.
- Xem [Nguồn và cách đọc giáo trình](../PHU-LUC/01-nguon-va-ghi-chu.md) để đối chiếu.
