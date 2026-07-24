# 005 — Navigation

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 01 — Introduction & Setup |
| **Bài học** | Navigation |
| **Thời lượng** | 7:12 |
| **Chủ đề chính** | Điều hướng trong không gian 3D |

## 1. Mục tiêu bài học

- Thành thạo các thao tác xoay (Orbit), lia (Pan) và phóng to/thu nhỏ (Zoom) trong viewport 3D.
- Biết dùng Numpad để chuyển nhanh giữa các góc nhìn chuẩn (Front, Side, Top, Camera).
- Hiểu sự khác biệt giữa chế độ Perspective và Orthographic.
- Biết cách focus vào một đối tượng và frame toàn bộ scene.

## 2. Nội dung chính

Điều hướng viewport là kỹ năng nền tảng quan trọng nhất trước khi làm bất kỳ thao tác modeling nào. Blender sử dụng chuột giữa (MMB) làm công cụ điều hướng chính:

- **Orbit (xoay góc nhìn)**: giữ và kéo MMB.
- **Pan (lia ngang/dọc)**: `Shift + MMB` kéo.
- **Zoom (phóng to/thu nhỏ)**: lăn con lăn chuột, hoặc `Ctrl + MMB` kéo.

Bàn phím số (Numpad) cung cấp các góc nhìn trực giao (Orthographic) chuẩn:

- `Numpad 1` — Front View, `Ctrl + Numpad 1` — Back View.
- `Numpad 3` — Right View, `Ctrl + Numpad 3` — Left View.
- `Numpad 7` — Top View, `Ctrl + Numpad 7` — Bottom View.
- `Numpad 0` — Camera View (nhìn qua camera scene).
- `Numpad 5` — chuyển đổi giữa Perspective và Orthographic.
- `Numpad 4/6/8/2` — xoay góc nhìn theo bước cố định (không cần chuột).
- `Numpad .` (Period) — View Selected: zoom/frame vào đối tượng đang chọn.
- `Home` — View All: frame toàn bộ đối tượng trong scene vào viewport.

Người dùng laptop không có Numpad vật lý có thể bật `Preferences > Input > Emulate Numpad` để dùng hàng số phía trên bàn phím, hoặc dùng phím `~` (dấu ngã, phía trên Tab) để mở **View Pie Menu** chứa các góc nhìn tương tự.

Blender còn có chế độ **Walk/Fly Navigation** (`Shift + ~` hoặc qua menu `View > Navigation`) cho phép di chuyển tự do trong scene giống game FPS, hữu ích khi làm việc với không gian lớn.

## 3. Quy trình thực hành gợi ý

1. Mở một file mới, thử orbit bằng MMB quanh khối Cube mặc định.
2. Thực hành pan bằng `Shift + MMB` để di chuyển góc nhìn ngang/dọc.
3. Zoom vào/ra bằng con lăn chuột và quan sát tốc độ zoom.
4. Lần lượt bấm `Numpad 1`, `3`, `7` để xem các góc nhìn chuẩn, sau đó `Numpad 0` để vào Camera View.
5. Chọn một object, bấm `Numpad .` để frame nhanh vào nó; bấm `Home` để xem lại toàn bộ scene.
6. Thử chuyển đổi Perspective/Orthographic bằng `Numpad 5` và quan sát sự khác biệt về phối cảnh.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt |
|---|---|
| Orbit | Giữ kéo MMB |
| Pan | `Shift + MMB` |
| Zoom | Lăn chuột / `Ctrl + MMB` |
| Front / Back View | `Numpad 1` / `Ctrl + Numpad 1` |
| Right / Left View | `Numpad 3` / `Ctrl + Numpad 3` |
| Top / Bottom View | `Numpad 7` / `Ctrl + Numpad 7` |
| Camera View | `Numpad 0` |
| Perspective ↔ Orthographic | `Numpad 5` |
| Xoay theo bước | `Numpad 4/6/8/2` |
| View Selected | `Numpad .` |
| View All (frame toàn scene) | `Home` |
| View Pie Menu | `~` (tilde) |
| Walk/Fly mode | `Shift + ~` |

## 5. Lưu ý & lỗi thường gặp

- Laptop không có Numpad dễ nhầm lẫn — nên bật Emulate Numpad trong Preferences ngay từ đầu.
- Zoom quá sâu vào một điểm có thể khiến viewport "kẹt" clip gần — dùng `Numpad .` để reset lại điểm nhìn.
- Nhầm giữa Orbit (MMB) và Pan (Shift+MMB) là lỗi phổ biến nhất với người mới.
- Ở chế độ Orthographic, không có hiệu ứng phối cảnh (perspective distortion) nên các vật thể xa/gần trông cùng kích thước — cần chuyển sang Perspective khi muốn xem cảm giác thực tế.

## 6. Checklist thực hành

- [ ] Đã thành thạo Orbit, Pan, Zoom bằng chuột.
- [ ] Đã dùng thành thạo các phím Numpad 0/1/3/7.
- [ ] Đã biết dùng View Selected và View All.
- [ ] Đã hiểu khác biệt giữa Perspective và Orthographic.
- [ ] Đã thử qua chế độ Walk/Fly Navigation.

## 7. Tóm tắt

Điều hướng viewport bằng chuột (Orbit/Pan/Zoom) kết hợp với các phím Numpad là kỹ năng cơ bản bắt buộc thành thạo trước khi modeling. Việc quen tay với các phím tắt này giúp tăng tốc độ làm việc đáng kể trong toàn bộ khóa học.
