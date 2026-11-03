# Bài 03 — Ứng dụng VFX cho khiên, lửa, nước, cổng dịch chuyển

> Module: Thủ pháp Spine: linked mesh, bone, trail, tái sử dụng VFX  
> Mức độ: Trung cấp / nâng cao  
> Trích đoạn tham chiếu: T07 08:50–25:30

## Mục tiêu học tập

Sau bài này, bạn thực hành được quy trình **ứng dụng vfx cho khiên, lửa, nước, cổng dịch chuyển**, giải thích nguyên lý lựa chọn kỹ thuật và tự kiểm tra kết quả trong project.

## Trọng tâm
Phần giữa của video đi qua loạt nhân vật và hiệu ứng: khiên phát sáng, ánh lấp lánh, bốc lửa, xoáy trong đầu/thân, chuỗi nước chạy dọc cơ thể, vòng cổng và vụ nổ. Phương pháp lặp lại là **attachment nhỏ + đổi transform + tint + delay**.

### Bài thực hành theo nhóm
1. **Khiên:** dùng glow tròn nhỏ biến dạng theo bề mặt khiên; thêm một đường quét sáng.
2. **Lửa:** đặt 2–3 sequence flame khác offset thời gian, thay đổi scale và hướng; chú ý alpha giảm ở đuôi lửa.
3. **Nước:** chạy một strip nước theo quỹ đạo thân/bộ phận, giữ nhịp và độ trong suốt.
4. **Portal:** nhân bản các mảnh hạt từ cùng sequence, đặt lệch thời điểm tạo vòng xoáy; cho hạt xuất hiện và biến mất mềm.
5. **Flash/Hit:** dùng sprite glow hoặc hình sao xoay/scale nhanh tại điểm chạm.

### Tiêu chí kỹ thuật
Tối thiểu 70% asset nhỏ có thể tái dùng; hiệu ứng đặc trưng đến từ thời gian, màu, anchor và blend mode chứ không phải vẽ lại mọi thứ.

## Bài tập bắt buộc

1. Chọn 2 trong 4 nhóm hiệu ứng và dựng bằng Spine.
2. Lập bảng các asset được tái sử dụng.

## Tiêu chí hoàn thành

Mỗi hiệu ứng có silhouette, nhịp và vị trí neo hợp lý.

## Tự kiểm tra

- Bước nào trong quy trình là điểm khó nhất, và bạn kiểm chứng nó bằng cách nào?
- Nếu bỏ một hiệu ứng, chuyển động chính còn dễ đọc không?
- Tham số hoặc thời điểm nào bạn sẽ điều chỉnh trước khi tối ưu hiệu năng?

## Liên hệ bài kế tiếp

Ghi lại một vấn đề quan sát được khi preview; mang nó vào bài tiếp theo để cải thiện dần thay vì làm mới từ đầu.

**Ghi chú nguồn:** Tài liệu biên soạn từ transcript, không phải bản chép lời nguyên văn. Các bài tập được thêm để người học thực hành.
