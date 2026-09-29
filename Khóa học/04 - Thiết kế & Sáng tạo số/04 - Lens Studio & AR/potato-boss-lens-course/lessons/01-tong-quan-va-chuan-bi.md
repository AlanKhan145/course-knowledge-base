# Bài 01 — Tổng quan hiệu ứng và chuẩn bị tài nguyên

## Mục tiêu

Sau bài này, bạn sẽ hiểu hiệu ứng “Potato Boss style” gồm những thành phần nào và cần chuẩn bị gì trước khi mở Lens Studio.

## 1. Hiệu ứng cốt lõi

Điểm đặc trưng của kiểu lens này không chỉ là một model 3D che khuôn mặt. Phần dưới của model có **độ trễ nhẹ** khi đầu người dùng di chuyển, tạo cảm giác mềm, lắc và có “sức sống” hơn một model cứng.

Khóa học sẽ xây hiệu ứng theo chuỗi:

`Model 3D có rig → gắn vào đầu → đưa mắt/miệng thật lên model → tạo wobble → thêm background → thêm greenscreen`

## 2. Tài nguyên tối thiểu

Bạn cần:

- Lens Studio.
- Một model 3D.
- Model có rig đơn giản.
- Một ảnh nền.
- Script `SmoothFollow.js`.

Tutorial gốc dùng model hình **hạt đậu phộng** thay vì làm lại lens khoai tây y hệt. Ý tưởng quan trọng là áp dụng phong cách chuyển động vào **một đối tượng riêng của bạn**.

## 3. Kết quả mong đợi

Khi hoàn thành:

- Model di chuyển theo đầu.
- Mắt và miệng người dùng xuất hiện đúng trên model.
- Phần thân dưới theo sau đầu với độ trễ nhỏ.
- Background lấp đầy màn hình trên nhiều tỉ lệ khung hình.
- Có thể chạm để đổi giữa background thường và greenscreen.

## 4. Ảnh tham khảo

![Snapcode minh họa](../images/001-snapcode.png)

> Nếu ảnh chưa hiện, chạy `download_images.ps1` hoặc `download_images.py` ở thư mục gốc.

## Kiểm tra nhanh

- [ ] Có Lens Studio.
- [ ] Có model 3D riêng.
- [ ] Có ảnh nền.
- [ ] Model có ít nhất 2 bone nếu muốn tạo wobble phần thân dưới.
