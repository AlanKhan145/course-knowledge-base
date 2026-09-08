# Bài 4 — Từ kinematics đến robot cá

## Mục tiêu

- Chuyển profile chuyển động thành rig segment.
- Dùng dữ liệu kinematics để tạo nhiều behavior.
- Tránh tối ưu robot theo nhãn hình thái đơn giản.

## Pipeline

1. Tạo spline trung tâm và các segment theo `s`.
2. Đặt amplitude controller bậc hai.
3. Thêm frequency, phase và wave length.
4. Cho fin/đuôi bám theo tangent cuối của spline.
5. Dùng cùng controller cho nhiều mesh morphology.
6. Đánh dấu tham số minh họa và kiểm tra silhouette.

Kết quả về sự hội tụ của kinematics gợi ý rằng robot cá nên được thiết kế theo chuyển động đo được, không chỉ sao chép ngoại hình. Đây là định hướng thiết kế rút ra từ abstract, không phải thông số kỹ thuật hoàn chỉnh.

## Bài tập cuối khóa

Xuất ba animation có cùng morphology nhưng khác wave length, rồi một animation khác morphology nhưng giữ midline. Kèm bảng tham số và ghi chú nguồn tại [SOURCE_SUMMARY.md](../SOURCE_SUMMARY.md).

