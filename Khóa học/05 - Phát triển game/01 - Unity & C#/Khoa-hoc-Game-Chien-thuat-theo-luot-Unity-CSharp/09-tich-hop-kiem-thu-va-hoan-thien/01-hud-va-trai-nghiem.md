# UI/HUD phản hồi và mức độ minh bạch

> **Module 09** · Tham chiếu bản ghi video: **03:05–04:21; 05:34–07:11** · Công cụ thực hành: Unity + C#

## Mục tiêu học tập

Sau bài này, bạn có thể giải thích cơ chế, triển khai một phiên bản tối thiểu trong prototype, tự kiểm thử hành vi và nêu các quyết định thiết kế liên quan.

## 1. Kiến thức trọng tâm

Video khen cách một số game chiến thuật hiển thị thông tin **trước khi hành động**, ví dụ bán kính tiếng động, vùng bị phát hiện, tỉ lệ trúng, cover và nguy cơ friendly fire. Điều đó giúp các quyết định không biến thành đoán mò.

HUD cần trả lời nhanh: “Tôi chọn ai?”, “Có thể làm gì?”, “Tốn bao nhiêu AP?”, “Địch nào sẽ thấy/nghe?”, “Tỉ lệ bắn trúng và sát thương dự kiến?”, “Nếu bấm thì điều gì xảy ra?”.

Màu sắc chỉ nên hỗ trợ chứ không thay cho icon/chữ; dùng một hệ thống preview duy nhất để tính toán và hiện thị.

## 2. Quy trình thực hành với Unity/C#

1. Hiển thị lựa chọn đơn vị, AP, HP, Morale và action bar.
2. Khi hover ô, hiện đường đi, chi phí AP; khi hover mục tiêu, hiện tỉ lệ bắn + modifiers.
3. Vẽ nón phát hiện, Overwatch zone, AoE, friendly fire.
4. Hiển thị tooltip lỗi cụ thể khi action không hợp lệ.
5. Ghi combat log có thể mở lại sau lượt.
6. Test bàn phím/chuột, màn hình nhỏ, ngôn ngữ dài và colorblind-friendly.

## 3. Bài tập vận dụng

Ghi lại 5 quyết định mà người chơi phải cân nhắc và loại thông tin tương ứng mà HUD cần cung cấp.

## 4. Điều kiện hoàn thành

- [ ] Tóm tắt được quy tắc của cơ chế bằng lời của mình.
- [ ] Chạy được ca thực hành trong scene mẫu.
- [ ] Có kiểm tra ít nhất một trường hợp hợp lệ và một trường hợp lỗi.
- [ ] Ghi lại thông số đã chọn và lý do trong tài liệu thiết kế.

## 5. Liên hệ nguồn và giới hạn

- Phần **Kiến thức trọng tâm** bám các chủ đề trong bản ghi gốc và được biên tập lại thuật ngữ cho chính xác.
- **Quy trình thực hành**, ví dụ cấu trúc C# và thông số minh họa là nội dung giáo trình biên soạn bổ sung; video tổng quan không cung cấp toàn bộ mã triển khai.
- Xem [Nguồn và cách đọc giáo trình](../PHU-LUC/01-nguon-va-ghi-chu.md) để đối chiếu.
