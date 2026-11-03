# Stealth, bán kính tiếng động và mức cảnh báo

> **Module 04** · Tham chiếu bản ghi video: **03:47–04:21** · Công cụ thực hành: Unity + C#

## Mục tiêu học tập

Sau bài này, bạn có thể giải thích cơ chế, triển khai một phiên bản tối thiểu trong prototype, tự kiểm thử hành vi và nêu các quyết định thiết kế liên quan.

## 1. Kiến thức trọng tâm

Video nhấn mạnh lối chơi nhóm nhỏ lẻn vào căn cứ, hạ mục tiêu âm thầm và nhìn trước **bán kính tạo tiếng động** của hành động. Người thiết kế phải chọn giữa thông tin **minh bạch** và xác suất **không chắc chắn**. Nếu muốn chiến thuật tính toán được, hãy hiển thị vùng gây chú ý trước khi hành động.

Một mô hình dễ triển khai: `Hidden → Suspicious → Alerted`. Hành động `shoot`, `run`, `melee`, `throw` có `noiseRadius` khác nhau. Địch nghe tiếng động có thể chuyển tới điểm điều tra, không nhất thiết thấy người chơi ngay.

Đây là **đề xuất mở rộng thực hành** dựa trên mô tả video, không phải state machine được video quy định.

## 2. Quy trình thực hành với Unity/C#

1. Gắn thuộc tính tiếng ồn vào cấu hình action.
2. Khi thực thi action, phát `NoiseEvent(position, radius, source)`.
3. Địch đủ gần nhận event và chuyển `Suspicious`; AI đi tới điểm gây tiếng động.
4. Nếu có LOS trực tiếp, chuyển `Alerted` và bắt đầu giao tranh.
5. HUD vẽ vòng bán kính noise khi hover action, cùng cảnh báo “sẽ bị nghe thấy”.
6. Chọn rõ có hay không việc vật cản làm giảm âm thanh; ghi thành luật.

## 3. Bài tập vận dụng

Thiết kế hai đường xâm nhập: đường ngắn tạo tiếng động và đường dài đi vòng an toàn.

## 4. Điều kiện hoàn thành

- [ ] Tóm tắt được quy tắc của cơ chế bằng lời của mình.
- [ ] Chạy được ca thực hành trong scene mẫu.
- [ ] Có kiểm tra ít nhất một trường hợp hợp lệ và một trường hợp lỗi.
- [ ] Ghi lại thông số đã chọn và lý do trong tài liệu thiết kế.

## 5. Liên hệ nguồn và giới hạn

- Phần **Kiến thức trọng tâm** bám các chủ đề trong bản ghi gốc và được biên tập lại thuật ngữ cho chính xác.
- **Quy trình thực hành**, ví dụ cấu trúc C# và thông số minh họa là nội dung giáo trình biên soạn bổ sung; video tổng quan không cung cấp toàn bộ mã triển khai.
- Xem [Nguồn và cách đọc giáo trình](../PHU-LUC/01-nguon-va-ghi-chu.md) để đối chiếu.
