# Bài 06 — Background và Render Target

## Mục tiêu

Tạo background 2D lấp đầy màn hình nhưng vẫn nằm phía sau model 3D.

## 1. Thêm Screen Image

1. Thêm **Screen Image**.
2. Lens Studio tạo kèm **Orthographic Camera**.
3. Chọn texture ảnh nền.
4. Đặt Stretch Mode thành **Fill**.

Mục tiêu là background hoạt động trên cả màn hình dọc và ngang mà không làm biến dạng hình ảnh.

## 2. Vì sao model biến mất?

Screen Image có thể che lên phần 3D. Tutorial giải quyết bằng một Render Target riêng cho background.

## 3. Thiết lập Render Target

1. Trong Resources, tạo **Render Target** mới.
2. Đặt tên `Background`.
3. Chọn Orthographic Camera.
4. Đặt `Render Target = Background`.
5. Chọn camera chính.
6. Đổi `Clear Color Option = Texture`.
7. Đặt `Input = Background`.

![Camera dùng Background render target](../images/006-camera-settings.jpg)

## 4. Một cách khác

Tutorial cũng nêu cách khác: thay đổi **Render Order** của hai camera trong Scene Config để Orthographic Camera render trước.

Khóa học giữ phương pháp Render Target vì nó giúp bạn hiểu cách tùy chỉnh input texture của camera.

## Kiểm tra

- [ ] Background lấp đầy màn hình.
- [ ] Model 3D hiển thị phía trước.
- [ ] Chuyển portrait/landscape vẫn ổn.
