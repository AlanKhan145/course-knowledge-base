# Bài 4 — Dịch dữ liệu sang rig cá trong Blender

## Mục tiêu

- Tạo rig phục vụ so sánh stiffness–kinematics.
- Dùng controller không phụ thuộc một loài.
- Xuất scene có thể tái kiểm tra.

## Pipeline

1. Chia thân thành các segment theo trục cột sống.
2. Đặt profile stiffness và giới hạn uốn cho từng segment.
3. Tạo midline controller với frequency, amplitude và phase.
4. Ghi lại lực/độ uốn ở mỗi frame nếu có mô phỏng.
5. Render cùng camera cho các scenario.
6. Lưu metadata và đánh dấu mọi tham số giả lập.

Mục tiêu của asset là minh họa quan hệ giữa mechanics và kinematics, không tuyên bố tái tạo đầy đủ ba loài trong bài báo. Đọc thêm [SOURCE_SUMMARY.md](../SOURCE_SUMMARY.md) và [REFERENCES.md](../REFERENCES.md).

## Bài tập cuối khóa

Xuất một board bốn ô: rig mềm, rig cứng, cùng stiffness khác input, cùng input khác stiffness. Mỗi ô cần chú thích biến đang thay đổi.

