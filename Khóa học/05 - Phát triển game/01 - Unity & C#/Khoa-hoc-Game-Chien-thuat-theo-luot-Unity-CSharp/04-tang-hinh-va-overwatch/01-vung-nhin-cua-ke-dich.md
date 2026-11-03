# Field of View: nón nhìn và Line of Sight

> **Module 04** · Tham chiếu bản ghi video: **03:47–05:00** · Công cụ thực hành: Unity + C#

## Mục tiêu học tập

Sau bài này, bạn có thể giải thích cơ chế, triển khai một phiên bản tối thiểu trong prototype, tự kiểm thử hành vi và nêu các quyết định thiết kế liên quan.

## 1. Kiến thức trọng tâm

Cơ chế tàng hình cần một hình nón nhìn theo hướng mặt của kẻ địch. Với véc-tơ hướng `forward`, véc-tơ từ địch tới mục tiêu `direction`, góc mở `FOV`, kiểm tra `dot(forward, normalize(direction)) ≥ cos(FOV / 2)`; đồng thời cần điều kiện khoảng cách.

Sau khi qua hai điều kiện hình học, dùng **Raycast/Line of Sight (LOS)** để phát hiện tường chắn tầm nhìn. Video mô tả nón phát hiện, hướng nhìn và raycast tới các ô.

Một ô trong nón nhìn chưa chắc quan sát được vì vật cản; một ô nhìn thấy chưa chắc phát hiện ngay nếu luật game có cấp độ nghi ngờ. Nên phân biệt `VisibleCells` và `DetectedUnits`.

## 2. Quy trình thực hành với Unity/C#

1. Gắn `VisionSensor` gồm `range`, `halfAngle`, `blockerMask`.
2. Quét các đơn vị hoặc ô trong bán kính; thử góc bằng dot product.
3. Raycast từ `eyePosition` tới vị trí mục tiêu để xác định LOS.
4. Vẽ Gizmos cho bán kính, hướng nhìn, các ô thấy được.
5. Chạy kiểm tra lại khi đơn vị bước vào ô mới hoặc khi kẻ địch đổi hướng.
6. Dùng cùng dịch vụ `LineOfSight` cho hệ thống bắn và phát hiện, nhưng cho phép layer/rules khác nhau.

## 3. Bài tập vận dụng

Tạo 3 chướng ngại với độ cao khác nhau; đánh dấu mục tiêu nằm trong FOV nhưng không có LOS.

## 4. Điều kiện hoàn thành

- [ ] Tóm tắt được quy tắc của cơ chế bằng lời của mình.
- [ ] Chạy được ca thực hành trong scene mẫu.
- [ ] Có kiểm tra ít nhất một trường hợp hợp lệ và một trường hợp lỗi.
- [ ] Ghi lại thông số đã chọn và lý do trong tài liệu thiết kế.

## 5. Liên hệ nguồn và giới hạn

- Phần **Kiến thức trọng tâm** bám các chủ đề trong bản ghi gốc và được biên tập lại thuật ngữ cho chính xác.
- **Quy trình thực hành**, ví dụ cấu trúc C# và thông số minh họa là nội dung giáo trình biên soạn bổ sung; video tổng quan không cung cấp toàn bộ mã triển khai.
- Xem [Nguồn và cách đọc giáo trình](../PHU-LUC/01-nguon-va-ghi-chu.md) để đối chiếu.
