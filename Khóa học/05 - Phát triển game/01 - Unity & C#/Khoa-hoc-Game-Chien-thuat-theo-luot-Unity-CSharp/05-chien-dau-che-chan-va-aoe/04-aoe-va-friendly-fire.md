# Bắn theo vùng và nguy cơ bắn trúng đồng đội

> **Module 05** · Tham chiếu bản ghi video: **07:13–08:20** · Công cụ thực hành: Unity + C#

## Mục tiêu học tập

Sau bài này, bạn có thể giải thích cơ chế, triển khai một phiên bản tối thiểu trong prototype, tự kiểm thử hành vi và nêu các quyết định thiết kế liên quan.

## 1. Kiến thức trọng tâm

Video đề cập hai kiểu nguy cơ: (1) đạn bay theo đường thẳng có thể chạm đơn vị đồng minh nằm giữa; (2) vũ khí bắn hình quạt/nón hoặc vùng có thể ảnh hưởng **mọi đơn vị** trong phạm vi, không phân biệt phe.

Thiết kế rõ `targetingShape`: `Single`, `Line`, `Cone`, `Radius`. Với mỗi hình, trả về danh sách đơn vị có khả năng bị ảnh hưởng, sau đó mới tính trúng/sát thương cho từng mục tiêu. Cần tránh sử dụng duy nhất Physics.Raycast để mô phỏng mọi viên đạn nếu luật đánh theo ô; đôi khi thuật toán duyệt ô trên đường thẳng sẽ xác định phạm vi rõ hơn.

**Friendly fire** là một quyết định luật chơi: có bật, giảm sát thương, hay chỉ áp dụng cho súng shotgun/lựu đạn? Video dùng nguy cơ bắn nhầm làm nguồn quyết định chiến thuật.

## 2. Quy trình thực hành với Unity/C#

1. Viết `GetAffectedCells(shape, origin, target, range)`.
2. Tạo preview màu đỏ cho địch, vàng cho đồng minh nằm trong vùng nguy hiểm.
3. Với vũ khí đường thẳng, lấy các ô giao đường bắn và xác định thứ tự chạm.
4. Với cone, dùng góc và khoảng cách; với radius, dùng khoảng cách đến điểm nổ.
5. Gọi combat resolver cho từng mục tiêu trong danh sách.
6. Không cho UI tự loại đồng minh nếu luật đã bật friendly fire.

## 3. Bài tập vận dụng

Tạo một kỹ năng nổ diện rộng đánh được 2 địch nhưng cũng gây nguy cơ cho 1 đồng minh; hiện cảnh báo xác nhận.

## 4. Điều kiện hoàn thành

- [ ] Tóm tắt được quy tắc của cơ chế bằng lời của mình.
- [ ] Chạy được ca thực hành trong scene mẫu.
- [ ] Có kiểm tra ít nhất một trường hợp hợp lệ và một trường hợp lỗi.
- [ ] Ghi lại thông số đã chọn và lý do trong tài liệu thiết kế.

## 5. Liên hệ nguồn và giới hạn

- Phần **Kiến thức trọng tâm** bám các chủ đề trong bản ghi gốc và được biên tập lại thuật ngữ cho chính xác.
- **Quy trình thực hành**, ví dụ cấu trúc C# và thông số minh họa là nội dung giáo trình biên soạn bổ sung; video tổng quan không cung cấp toàn bộ mã triển khai.
- Xem [Nguồn và cách đọc giáo trình](../PHU-LUC/01-nguon-va-ghi-chu.md) để đối chiếu.
