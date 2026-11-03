# Dự án cuối khóa: vertical slice hoàn chỉnh

> **Module 09** · Tham chiếu bản ghi video: **12:32–13:17** · Công cụ thực hành: Unity + C#

## Mục tiêu học tập

Sau bài này, bạn có thể giải thích cơ chế, triển khai một phiên bản tối thiểu trong prototype, tự kiểm thử hành vi và nêu các quyết định thiết kế liên quan.

## 1. Kiến thức trọng tâm

Kết hợp 9 module thành **một màn chiến thuật có thể chơi từ đầu tới cuối**. Phạm vi khuyến nghị: 1 scene chiến dịch nhỏ, 1 level, 2–3 đồng minh, 3 địch thuộc 2 archetype, grid, A*, AP, bắn, cover, một vùng Overwatch, một trigger và kết quả thắng/thua.

**Tiêu chí bắt buộc:** mọi hành động có preview/validation; chuyển lượt không kẹt; tất cả đơn vị có runtime state độc lập; tầm nhìn và đường bắn không mâu thuẫn; không có ngoại lệ khi thắng/thua; có menu restart.

**Tiêu chí nâng cao:** morale/suppression, patrol+investigate, skill tree và load/save campaign. Phần polishing: highlight, âm thanh, animation, camera feedback, VFX bắn/nổ và hướng dẫn người chơi.

## 2. Quy trình thực hành với Unity/C#

1. Tạo scene `MainMenu`, `CampaignMap`, `TacticalLevel01`.
2. Chơi trọn loop từ chọn nhiệm vụ tới kết quả.
3. Áp dụng checklist kiểm thử từ bài 09-02.
4. Quay video demo 2–5 phút; trình bày mỗi cơ chế xuất hiện và lý do chiến thuật.
5. Build cho Windows; nếu nhắm mobile, bổ sung touch input/responsive UI và tối ưu sau khi bản PC ổn định.
6. Viết `POSTMORTEM.md`: bài học, lỗi còn lại, phần sẽ mở rộng.

## 3. Bài tập vận dụng

Nộp một bản build chơi được, video demo và bảng tổng hợp cơ chế nào đã hoàn thiện/chưa hoàn thiện.

## 4. Điều kiện hoàn thành

- [ ] Tóm tắt được quy tắc của cơ chế bằng lời của mình.
- [ ] Chạy được ca thực hành trong scene mẫu.
- [ ] Có kiểm tra ít nhất một trường hợp hợp lệ và một trường hợp lỗi.
- [ ] Ghi lại thông số đã chọn và lý do trong tài liệu thiết kế.

## 5. Liên hệ nguồn và giới hạn

- Phần **Kiến thức trọng tâm** bám các chủ đề trong bản ghi gốc và được biên tập lại thuật ngữ cho chính xác.
- **Quy trình thực hành**, ví dụ cấu trúc C# và thông số minh họa là nội dung giáo trình biên soạn bổ sung; video tổng quan không cung cấp toàn bộ mã triển khai.
- Xem [Nguồn và cách đọc giáo trình](../PHU-LUC/01-nguon-va-ghi-chu.md) để đối chiếu.
