# Sổ tay phím tắt Blender cho mô hình robot Mech

## 1. Điều hướng và chế độ

| Lệnh | Ý nghĩa | Ghi nhớ |
| --- | --- | --- |
| `Tab` | Chuyển `Object Mode` / `Edit Mode` | Kiểm tra chế độ trước khi thêm hình |
| `Shift + A` | Thêm mesh hoặc curve | Menu khác theo chế độ |
| `Shift + C` | Đưa 3D Cursor về gốc và điều chỉnh góc nhìn | Hữu ích khi thêm vật ở tâm |
| `Numpad 1` / `3` / `7` | Front / Right / Top | Nhìn vuông góc để so tỷ lệ |
| `Ctrl + Numpad 1` / `7` | Back / Bottom | Kiểm tra mặt khuất |
| `Z` | Mở menu shading | Chọn Solid hoặc Wireframe |
| `Numpad .` | Frame Selected | Đưa chi tiết vào giữa viewport |
| `Ctrl + S` | Lưu dự án | Lưu sau các mốc chính |

## 2. Chọn và biến đổi

| Lệnh | Ý nghĩa |
| --- | --- |
| `1`, `2`, `3` (hàng phím số trên, trong Edit Mode) | Vertex / Edge / Face Select |
| `A` | Chọn tất cả |
| `Alt + A` | Bỏ chọn tất cả |
| `B` | Box Select |
| `L` (trỏ lên phần mesh) | Chọn phần mesh liên thông |
| `Alt + Click` (vào cạnh) | Chọn edge loop trong topology phù hợp |
| `G`, `R`, `S` | Di chuyển, xoay, thu phóng |
| `X`, `Y`, `Z` sau `G/R/S` | Giới hạn theo trục |
| `Shift + D` | Nhân bản vùng chọn |
| `E` | Extrude |
| `I` | Inset Faces |
| `Ctrl + R` | Loop Cut |
| `Ctrl + B` | Bevel cạnh được chọn |
| `Ctrl + Shift + B` | Bevel đỉnh được chọn |
| `F` | Tạo mặt từ biên đã chọn |
| `K` | Knife Tool |
| `Shift + N` | Recalculate Normals |

## 3. Đối tượng, modifier và curve

| Lệnh | Ý nghĩa |
| --- | --- |
| `Ctrl + L` trong Object Mode | Link/Copy dữ liệu, gồm `Copy Modifiers`, từ đối tượng active |
| `Ctrl + J` trong Object Mode | Join các object cùng loại phù hợp |
| `P` trong Edit Mode | Separate phần được chọn |
| `H` / `Shift + H` / `Alt + H` | Hide selected / Hide unselected / Unhide |
| `Ctrl + Z` | Undo |
| `E` khi chỉnh Bézier Curve | Kéo dài spline từ đầu mút |
| `R`, `G`, `S` trên control point/handle | Điều chỉnh hướng và độ cong của ống |

## 4. Các thao tác dễ nhầm

- `1/2/3` ở **hàng số phía trên** chuyển chế độ chọn; `Numpad 1/3/7` đổi góc nhìn.
- `Ctrl + B` dùng cho **edge bevel**; nếu muốn vát **vertex** riêng lẻ, dùng `Ctrl + Shift + B`. Tùy mesh, bevel từ vertex/edge cho hình học khác nhau.
- `I` áp dụng Inset; tùy chế độ, nhấn `I` lần nữa có thể đổi giữa inset theo nhóm và từng mặt. Tùy chọn `Boundary` cần được kiểm tra khi thao tác gần mặt phẳng Mirror.
- `Ctrl + R` chỉ tạo loop khi đường đi topology hợp lệ, thường là dải quads. Khi vướng góc vát/phức tạp, cân nhắc `K`.
- `Shift + N` sửa hướng normals thông thường; không tự sửa geometry chồng, mặt hở, hoặc mặt không phẳng.
- Dù một phím tắt được dùng trong tài liệu, hãy xem trạng thái và hướng dẫn hiện ở thanh trạng thái Blender vì công cụ có thể đổi tùy phiên bản.
