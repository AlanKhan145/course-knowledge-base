# Bài 3 — Vì sao phải ghép mechanics với kinematics

## Mục tiêu

- Nhận biết sai lệch khi chỉ đo mechanics hoặc chỉ đo kinematics.
- Xây dựng cặp dữ liệu cùng một trial.
- Đọc khoảng trống nghiên cứu như yêu cầu dữ liệu.

## Nội dung cốt lõi

Mechanics cho biết hệ chống lại biến dạng ra sao; kinematics cho biết hệ thực sự chuyển động thế nào. Hai loại dữ liệu không thay thế nhau. Cùng một trajectory có thể xuất hiện dưới các lực và độ cứng khác nhau nếu cơ hoặc dòng nước khác nhau; ngược lại, cùng stiffness không đảm bảo trajectory giống nhau.

Một trial trong scene nên lưu timestamp, midline keyframes, góc từng khớp, stiffness profile và điều kiện lực. Các biến chưa có trong abstract phải để trống hoặc đánh dấu minh họa.

## Bài tập

Tạo hai simulation toy: thay stiffness nhưng giữ input cơ; thay input cơ nhưng giữ stiffness. Viết một đoạn kết luận chỉ mô tả điều thấy trong scene, không gọi đó là kết quả sinh học.

