# Overwatch: phản ứng khi địch đi vào vùng canh gác

> **Module 04** · Tham chiếu bản ghi video: **05:07–05:33** · Công cụ thực hành: Unity + C#

## Mục tiêu học tập

Sau bài này, bạn có thể giải thích cơ chế, triển khai một phiên bản tối thiểu trong prototype, tự kiểm thử hành vi và nêu các quyết định thiết kế liên quan.

## 1. Kiến thức trọng tâm

Overwatch là hành động tiêu tốn AP để chuyển đơn vị sang **trạng thái sẵn sàng bắn phản ứng**. Khi quân địch đi vào vùng canh gác, game tự kích hoạt phát bắn nếu mọi điều kiện vẫn hợp lệ.

Hai bước chính: (1) ở lượt đơn vị, người chơi chọn góc hướng/vùng Overwatch; (2) ở các bước di chuyển sau đó của đối thủ, kiểm tra sự kiện `OnUnitEnteredCell` và thực thi phản ứng.

Phải giải quyết các tình huống khó: địch đã chết, hết đạn, LOS bị chặn mới, nhiều Overwatch bắn cùng lúc, quân địch chết giữa đường, một đơn vị có thể bắn phản ứng mấy lần trong lượt. Chốt luật trong GDD trước khi lập trình.

## 2. Quy trình thực hành với Unity/C#

1. Viết `OverwatchState` giữ người quan sát, vùng ô, số lần bắn còn lại.
2. Khi kích hoạt, trừ AP, tô sáng các ô trông chừng và đăng ký lắng nghe `OnUnitEnteredCell`.
3. Mỗi bước di chuyển của địch kiểm tra vùng, LOS, tầm bắn và phe.
4. Thực thi reaction theo hàng đợi, tạm dừng movement đến khi xong.
5. Hủy trạng thái khi hết số lần bắn hoặc hết lượt theo luật.
6. Viết test với nhiều người canh gác và mục tiêu bị hạ trước khi tới đích.

## 3. Bài tập vận dụng

Thêm tuỳ chọn “canh gác theo nón nhìn” và so sánh với “canh gác theo bán kính”.

## 4. Điều kiện hoàn thành

- [ ] Tóm tắt được quy tắc của cơ chế bằng lời của mình.
- [ ] Chạy được ca thực hành trong scene mẫu.
- [ ] Có kiểm tra ít nhất một trường hợp hợp lệ và một trường hợp lỗi.
- [ ] Ghi lại thông số đã chọn và lý do trong tài liệu thiết kế.

## 5. Liên hệ nguồn và giới hạn

- Phần **Kiến thức trọng tâm** bám các chủ đề trong bản ghi gốc và được biên tập lại thuật ngữ cho chính xác.
- **Quy trình thực hành**, ví dụ cấu trúc C# và thông số minh họa là nội dung giáo trình biên soạn bổ sung; video tổng quan không cung cấp toàn bộ mã triển khai.
- Xem [Nguồn và cách đọc giáo trình](../PHU-LUC/01-nguon-va-ghi-chu.md) để đối chiếu.
