# Tính xác suất trúng và đường bắn

> **Module 05** · Tham chiếu bản ghi video: **05:34–06:30; 07:36–08:20** · Công cụ thực hành: Unity + C#

## Mục tiêu học tập

Sau bài này, bạn có thể giải thích cơ chế, triển khai một phiên bản tối thiểu trong prototype, tự kiểm thử hành vi và nêu các quyết định thiết kế liên quan.

## 1. Kiến thức trọng tâm

Một phát bắn cần kiểm tra: mục tiêu còn sống, nằm trong tầm, có LOS và không vi phạm quy tắc bắn. Độ chính xác ban đầu do súng/kỹ năng của đơn vị quyết định, sau đó áp dụng các biến thể như khoảng cách, che chắn, trạng thái tinh thần, ngắm và đánh sườn.

Ví dụ minh họa: `hitChance = Clamp(baseAccuracy - rangePenalty - coverPenalty + aimBonus + flankBonus, 0, 100)`; công thức này do giáo trình đề xuất, không có số cụ thể trong video.

Khi giao diện hiển thị tỉ lệ trúng, cùng một hàm tính toán phải dùng cho **preview** và **resolution**. Nếu preview nói 70% nhưng game dùng bảng khác sẽ gây mất niềm tin.

## 2. Quy trình thực hành với Unity/C#

1. Viết `GetHitChance(Attacker, Target, AttackContext)` thuần dữ liệu.
2. Tách `HasLineOfSight` khỏi kiểm tra xác suất.
3. Dùng một random roll duy nhất để xác định hit/miss cho mỗi projectile theo luật.
4. Ghi combat log: tầm, cover, bonus, kết quả bắn.
5. Tạo HUD hiển thị breakdown tỉ lệ trúng trước khi xác nhận.
6. Viết test để xác suất luôn ở [0, 100] và đúng khi bỏ cover.

## 3. Bài tập vận dụng

Dựng bảng 5 tình huống với sát thương như nhau nhưng tỉ lệ trúng khác nhau; nêu lý do.

## 4. Điều kiện hoàn thành

- [ ] Tóm tắt được quy tắc của cơ chế bằng lời của mình.
- [ ] Chạy được ca thực hành trong scene mẫu.
- [ ] Có kiểm tra ít nhất một trường hợp hợp lệ và một trường hợp lỗi.
- [ ] Ghi lại thông số đã chọn và lý do trong tài liệu thiết kế.

## 5. Liên hệ nguồn và giới hạn

- Phần **Kiến thức trọng tâm** bám các chủ đề trong bản ghi gốc và được biên tập lại thuật ngữ cho chính xác.
- **Quy trình thực hành**, ví dụ cấu trúc C# và thông số minh họa là nội dung giáo trình biên soạn bổ sung; video tổng quan không cung cấp toàn bộ mã triển khai.
- Xem [Nguồn và cách đọc giáo trình](../PHU-LUC/01-nguon-va-ghi-chu.md) để đối chiếu.
