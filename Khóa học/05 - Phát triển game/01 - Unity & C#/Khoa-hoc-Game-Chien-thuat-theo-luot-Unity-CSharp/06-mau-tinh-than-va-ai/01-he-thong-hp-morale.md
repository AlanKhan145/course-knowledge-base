# HP, Morale và hiệu ứng từ đòn bắn trượt

> **Module 06** · Tham chiếu bản ghi video: **08:22–09:27** · Công cụ thực hành: Unity + C#

## Mục tiêu học tập

Sau bài này, bạn có thể giải thích cơ chế, triển khai một phiên bản tối thiểu trong prototype, tự kiểm thử hành vi và nêu các quyết định thiết kế liên quan.

## 1. Kiến thức trọng tâm

HP (Health Points) phản ánh sinh lực; Morale (tinh thần) phản ánh khả năng chiến đấu dưới áp lực. Video mô tả cơ chế đáng chú ý: **bắn trượt vẫn làm giảm tinh thần**; khi tinh thần thấp, đơn vị bị giảm AP/độ chính xác và có thể rơi vào trạng thái suy sụp khi về 0.

Bản triển khai minh họa: `HP: 0..maxHP`, `Morale: 0..maxMorale`; khi bắn trúng gây mất HP và Morale; khi bắn trượt có thể vẫn gây `suppressionDamage` lên Morale; khi Morale dưới 50% có debuff, khi bằng 0 đơn vị không thể hành động trong một khoảng lượt. **Ngưỡng và số liệu chỉ là đề xuất**, cần hiệu chỉnh theo GDD.

Phải thống nhất xử lý cộng dồn debuff, hồi tinh thần, giới hạn AP tối thiểu và trạng thái chết.

## 2. Quy trình thực hành với Unity/C#

1. Tạo thành phần `UnitVitals` theo dõi HP/Morale, phát event khi thay đổi.
2. Tạo `ApplyHit` và `ApplySuppression` thay vì trừ số trực tiếp trong UI.
3. Tính debuff từ trạng thái, không sửa vĩnh viễn `baseAccuracy`.
4. Khi HP bằng 0, giải phóng vị trí lưới và vô hiệu hóa hành động.
5. HUD thể hiện hai thanh khác nhau và mô tả hiệu ứng âm.
6. Kiểm thử chuỗi bắn trượt liên tiếp: không mất HP nhưng Morale giảm theo luật.

## 3. Bài tập vận dụng

Thiết kế một kỹ năng hỗ trợ hồi Morale và giải thích nó tạo thêm lựa chọn chiến thuật nào.

## 4. Điều kiện hoàn thành

- [ ] Tóm tắt được quy tắc của cơ chế bằng lời của mình.
- [ ] Chạy được ca thực hành trong scene mẫu.
- [ ] Có kiểm tra ít nhất một trường hợp hợp lệ và một trường hợp lỗi.
- [ ] Ghi lại thông số đã chọn và lý do trong tài liệu thiết kế.

## 5. Liên hệ nguồn và giới hạn

- Phần **Kiến thức trọng tâm** bám các chủ đề trong bản ghi gốc và được biên tập lại thuật ngữ cho chính xác.
- **Quy trình thực hành**, ví dụ cấu trúc C# và thông số minh họa là nội dung giáo trình biên soạn bổ sung; video tổng quan không cung cấp toàn bộ mã triển khai.
- Xem [Nguồn và cách đọc giáo trình](../PHU-LUC/01-nguon-va-ghi-chu.md) để đối chiếu.
