# 03 — Tạo emitter từ một Single Vertex

| Thuộc tính | Nội dung |
|---|---|
| **Phân đoạn** | Particle Emitter |
| **Thời điểm** | 02:13–04:07 |
| **Chủ đề** | Tạo một điểm phát và Particle System |

## Mục tiêu bài học

- Tạo một object chỉ có một đỉnh.
- Dùng đỉnh đó làm nguồn phát hạt.
- Tạo Particle System trong Particle Properties.

## Tạo Single Vertex

Trong Blender 2.8, công cụ tạo Single Vertex có thể nằm trong add-on **Add Mesh: Extra Objects**.

1. Mở **Edit > Preferences > Add-ons**.
2. Tìm `Add Mesh: Extra Objects`.
3. Bật add-on nếu chưa được bật.
4. Đóng Preferences.
5. Nhấn `Shift + A`.
6. Chọn **Mesh > Single Vert**.
7. Đặt tên object là `Emitter`.

Nếu menu không có Single Vert, có thể tạo một mesh tạm, vào Edit Mode, xóa toàn bộ đỉnh rồi thêm lại một đỉnh duy nhất.

## Tạo Particle System

1. Chọn `Emitter`.
2. Chuyển sang Object Mode.
3. Mở tab **Particle Properties**.
4. Nhấn **New**.
5. Kiểm tra bằng cách nhấn Play.

Ở giai đoạn này, hạt thường hiển thị dưới dạng điểm hoặc vật thể mặc định. Chưa cần gán mô hình cá ngay.

## Thông số ban đầu

- **Number:** 100
- **Frame Start:** -250
- **End:** 500
- **Lifetime:** khoảng 1.000 frame

Frame Start âm cho phép hệ thống có thời gian chuẩn bị trước khi bắt đầu quan sát cảnh từ frame 0. Có thể dùng các giá trị nhỏ hơn nếu cần cảnh ngắn.

## Lỗi thường gặp

### Không thấy hạt

Kiểm tra xem đã tạo Particle System chưa và timeline có đang nằm trong khoảng Start đến End hay không.

### Hạt phát ra quá nhiều

Giảm **Number** xuống khoảng 50–100 để dễ kiểm tra.

### Không tìm thấy Single Vert

Bật add-on **Add Mesh: Extra Objects** hoặc tạo mesh một đỉnh thủ công.

## Checklist

- [ ] Đã tạo object `Emitter`.
- [ ] Emitter chỉ có một đỉnh.
- [ ] Đã tạo Particle System.
- [ ] Số lượng hạt được giảm xuống mức dễ kiểm tra.

