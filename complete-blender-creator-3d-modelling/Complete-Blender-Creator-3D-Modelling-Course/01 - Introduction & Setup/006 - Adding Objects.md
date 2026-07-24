# 006 — Adding Objects

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 01 — Introduction & Setup |
| **Bài học** | Adding Objects |
| **Thời lượng** | 13:58 |
| **Chủ đề chính** | Thêm đối tượng vào scene |

## 1. Mục tiêu bài học

- Biết dùng Add Menu (`Shift + A`) để thêm các primitive mesh cơ bản.
- Hiểu vai trò của 3D Cursor trong việc xác định vị trí object mới được tạo.
- Biết dùng bảng "Adjust Last Operation" (F6/góc dưới trái) để tinh chỉnh thông số sau khi thêm object.
- Nắm được khái niệm Object Origin và Collections để tổ chức scene.

## 2. Nội dung chính

**Add Menu** (`Shift + A`) là công cụ chính để thêm nội dung vào scene: Mesh (Cube, Plane, Cylinder, UV Sphere, Ico Sphere, Cone, Torus, Monkey/Suzanne...), Curve, Surface, Metaball, Text, Volume, Empty, Light, Camera, Force Field, Collection Instance...

Mọi object mới được thêm vào vị trí của **3D Cursor** — không phải vị trí gốc tọa độ (0,0,0) cố định. 3D Cursor có thể di chuyển bằng `Shift + Right Click` (đặt tại vị trí con trỏ) hoặc reset về gốc tọa độ bằng `Shift + C` hoặc `Shift + S > Cursor to World Origin`.

Sau khi thêm một object, một bảng nhỏ **"Adjust Last Operation"** xuất hiện ở góc dưới bên trái viewport (có thể mở rộng bằng cách click vào nó, hoặc gọi lại bằng `F6`/`F9`). Bảng này cho phép chỉnh các tham số tạo hình ngay sau đó: số Vertices/Segments của Cylinder, Radius, Location, Rotation ban đầu... Đây là cách duy nhất để chỉnh các thông số tạo hình gốc — nếu thực hiện thao tác khác trước, bảng này sẽ biến mất.

Mỗi object có một **Origin Point** (chấm cam nhỏ) — điểm này quyết định tâm xoay/scale và vị trí tham chiếu của object. Origin có thể được đặt lại qua `Object > Set Origin` (ví dụ Origin to Geometry, Origin to 3D Cursor).

**Collections** (trong Outliner) giúp nhóm và tổ chức các object theo logic (ví dụ: nhóm "Lighthouse", "Terrain", "Lights") — hữu ích để ẩn/hiện hoặc chọn hàng loạt.

## 3. Quy trình thực hành gợi ý

1. Xóa Cube mặc định (`X > Delete` hoặc phím `Delete`).
2. Đặt 3D Cursor về gốc tọa độ bằng `Shift + C`.
3. Dùng `Shift + A > Mesh > Cylinder` để thêm một khối trụ; mở bảng Adjust Last Operation để chỉnh số Vertices thành 8 (tạo hình lăng trụ).
4. Thêm tiếp một UV Sphere và một Cone, quan sát các tham số riêng của từng loại primitive.
5. Đổi tên các object trong Outliner cho rõ ràng (double-click vào tên).
6. Tạo một Collection mới, kéo thả các object vào để nhóm chúng lại.
7. Thử di chuyển 3D Cursor bằng `Shift + Right Click` rồi thêm object mới để thấy nó xuất hiện đúng tại vị trí cursor.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt |
|---|---|
| Mở Add Menu | `Shift + A` |
| Xóa object | `X` hoặc `Delete` |
| Đặt 3D Cursor tại con trỏ | `Shift + Right Click` |
| Reset 3D Cursor về gốc | `Shift + C` |
| Mở Snap Pie Menu (Cursor to World Origin...) | `Shift + S` |
| Mở lại bảng Adjust Last Operation | `F9` |
| Đổi tên object | `F2` (hoặc double-click trong Outliner) |
| Nhóm vào Collection mới | `M` (Move to Collection) |

## 5. Lưu ý & lỗi thường gặp

- Quên vị trí 3D Cursor là lỗi phổ biến — object mới có thể xuất hiện ở vị trí bất ngờ nếu cursor không ở gốc tọa độ.
- Sau khi thực hiện một thao tác khác (ví dụ di chuyển chuột, click nơi khác), bảng Adjust Last Operation sẽ mất tác dụng với object vừa thêm — cần chỉnh thông số ngay lập tức.
- Không nên để quá nhiều object rời rạc không có tên rõ ràng và không được nhóm Collection — sẽ gây khó khăn khi scene lớn dần.
- Origin Point không phải là tâm hình học mặc định — cần chủ động set qua `Object > Set Origin` khi cần.

## 6. Checklist thực hành

- [ ] Đã thêm được ít nhất 4 loại mesh primitive khác nhau.
- [ ] Đã biết dùng bảng Adjust Last Operation để chỉnh Segments/Vertices.
- [ ] Đã biết di chuyển và reset 3D Cursor.
- [ ] Đã tạo và sử dụng ít nhất một Collection.
- [ ] Đã đổi tên object một cách có tổ chức.

## 7. Tóm tắt

`Shift + A` là cửa ngõ để thêm mọi loại đối tượng vào scene, luôn xuất hiện tại vị trí 3D Cursor. Kết hợp với bảng Adjust Last Operation và Collections, người học có thể tạo dựng và tổ chức scene một cách có kiểm soát ngay từ những bước đầu tiên.
