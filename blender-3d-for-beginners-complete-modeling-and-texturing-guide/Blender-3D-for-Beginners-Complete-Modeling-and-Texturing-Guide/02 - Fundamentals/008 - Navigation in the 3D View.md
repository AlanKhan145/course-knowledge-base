# 008 — Navigation in the 3D View

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 02 — Fundamentals |
| **Bài học** | Navigation in the 3D View |
| **Thời lượng** | 5:19 |
| **Chủ đề chính** | Di chuyển và quan sát cảnh 3D trong Viewport |

## 1. Mục tiêu bài học

- Thành thạo orbit, pan, zoom bằng chuột giữa (Middle Mouse Button).
- Sử dụng các phím Numpad để chuyển nhanh sang góc nhìn Front/Side/Top/Camera.
- Biết cách frame toàn bộ scene hoặc object đang chọn.
- Làm quen chế độ di chuyển Walk/Fly Navigation.

## 2. Nội dung chính

Điều hướng trong 3D Viewport chủ yếu dựa vào **chuột giữa (MMB)**: giữ và kéo MMB để **Orbit** (xoay góc nhìn quanh điểm pivot), giữ `Shift + MMB` để **Pan** (di chuyển góc nhìn theo mặt phẳng màn hình), và lăn con lăn chuột (hoặc `Ctrl + MMB` kéo) để **Zoom** vào/ra.

Bàn phím số (**Numpad**) cung cấp các góc nhìn trực giao chuẩn: `Numpad 1` = Front, `Numpad 3` = Side (Right), `Numpad 7` = Top. Giữ thêm `Ctrl` khi nhấn các phím này sẽ cho góc nhìn đối diện (Back, Left, Bottom). `Numpad 9` lật góc nhìn hiện tại 180 độ. `Numpad 0` chuyển sang **Camera View** — nhìn qua ống kính camera trong scene, rất quan trọng khi canh khung hình để render. `Numpad 4/6/8/2` xoay góc nhìn theo bước cố định (mặc định 15 độ), còn `Numpad +`/`Numpad -` zoom in/out theo bước.

Menu **View** ở góc trên trái Viewport liệt kê đầy đủ các lệnh điều hướng tương đương (Viewport > Camera, Frame Selected, Frame All...), hữu ích cho ai dùng laptop không có Numpad (có thể bật tùy chọn "Emulate Numpad" trong Preferences > Input).

Phím `Home` sẽ **Frame All** — tự động zoom/pan để toàn bộ object trong scene vừa khít khung nhìn, rất hữu ích khi bị "lạc" trong không gian 3D sau khi zoom quá xa. Tương tự, `Numpad .` (dấu chấm) sẽ **Frame Selected**, chỉ zoom đến object đang được chọn.

Chế độ **Walk/Fly Navigation** (`Shift + ~` hoặc `Shift + F` cho Fly) cho phép di chuyển góc nhìn như trong game FPS bằng phím WASD kết hợp di chuyển chuột để nhìn xung quanh — hữu ích khi cần "đi bộ" qua một scene kiến trúc hoặc không gian nội thất lớn để kiểm tra tỷ lệ.

## 3. Quy trình thực hành gợi ý

1. Thêm vài object khác nhau vào scene, dàn chúng ra xa nhau.
2. Dùng MMB kéo để orbit quan sát toàn cảnh; thử `Shift + MMB` để pan.
3. Lần lượt nhấn `Numpad 1`, `3`, `7` và quan sát góc nhìn đổi; giữ `Ctrl` lặp lại để thấy góc đối diện.
4. Zoom xa hết mức, sau đó nhấn `Home` để Frame All quay lại toàn cảnh.
5. Chọn một object, nhấn `Numpad .` để Frame Selected riêng object đó.
6. Nhấn `Numpad 0` để vào Camera View, thử pan/zoom trong chế độ này để cảm nhận sự khác biệt.
7. Bật thử Fly Navigation (`Shift + F`), dùng WASD và chuột để bay quanh scene, nhấn chuột trái để xác nhận vị trí hoặc `Esc` để hủy.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt |
|---|---|
| Orbit | Kéo chuột giữa (MMB) |
| Pan | `Shift` + kéo MMB |
| Zoom | Lăn chuột / `Ctrl` + kéo MMB |
| Front / Side / Top View | `Numpad 1` / `3` / `7` |
| Góc nhìn đối diện | `Ctrl + Numpad 1/3/7` |
| Camera View | `Numpad 0` |
| Frame All | `Home` |
| Frame Selected | `Numpad .` |
| Walk Navigation | `Shift + ~` |
| Fly Navigation | `Shift + F` |

## 5. Lưu ý & lỗi thường gặp

- Laptop không có bàn phím số cần bật "Emulate Numpad" trong Edit > Preferences > Input, hoặc dùng menu View thay thế.
- Zoom quá gần vào một điểm có thể khiến Blender "kẹt" clip near — nhấn `Home` để reset lại là cách xử lý nhanh nhất.
- Nhầm lẫn giữa Orbit quanh pivot point (điểm 3D Cursor hoặc object) khiến góc xoay cảm giác "lệch" — có thể đổi Pivot Point ở giữa header Viewport.
- Camera View (`Numpad 0`) chỉ hiển thị đúng khung hình render khi scene đã có Camera; nếu chưa có, Blender sẽ báo không tìm thấy camera hoạt động.

## 6. Checklist thực hành

- [ ] Thành thạo Orbit/Pan/Zoom bằng chuột giữa.
- [ ] Nhớ được các phím Numpad cho 6 góc nhìn chuẩn.
- [ ] Biết dùng Home và Frame Selected để định vị lại camera nhìn.
- [ ] Đã thử qua Fly hoặc Walk Navigation ít nhất một lần.

## 7. Tóm tắt

Việc điều hướng mượt mà trong 3D Viewport — kết hợp chuột giữa, phím Numpad và Home/Frame Selected — là kỹ năng nền tảng cần thành thạo trước khi đi sâu vào modeling, vì gần như mọi thao tác tiếp theo đều phụ thuộc vào khả năng quan sát object từ đúng góc độ.
