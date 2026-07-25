# 011 — Object Creation and Deletion

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 02 — Fundamentals |
| **Bài học** | Object Creation and Deletion |
| **Thời lượng** | 3:30 |
| **Chủ đề chính** | Thêm và xóa object bằng Add Menu, 3D Cursor và F9 |

## 1. Mục tiêu bài học

- Biết dùng Add Menu (`Shift + A`) để tạo object mới.
- Hiểu vai trò của 3D Cursor trong việc quyết định vị trí object mới.
- Nắm cách xóa object bằng X hoặc Delete.
- Biết sử dụng bảng Adjust Last Operation (F9) để tinh chỉnh thông số sau khi tạo.

## 2. Nội dung chính

**Add Menu** (`Shift + A`) là cửa ngõ chính để đưa nội dung mới vào scene, gồm các nhóm: Mesh (Cube, Plane, Cylinder, UV Sphere, Ico Sphere, Cone, Torus, Grid, Monkey/Suzanne...), Curve, Surface, Metaball, Text, Volume, Empty (Plain Axes, Arrows, Sphere...), Light (Point, Sun, Spot, Area), Camera, Force Field, Collection Instance.

Object mới luôn được tạo tại vị trí của **3D Cursor**, không phải tại gốc tọa độ (0,0,0) cố định. 3D Cursor có thể di chuyển bằng `Shift + Right Click` (đặt tại điểm click), hoặc reset về gốc bằng `Shift + C` hay `Shift + S > Cursor to World Origin`. Đây là lý do vì sao đôi khi object mới thêm "xuất hiện ở chỗ lạ" nếu người dùng quên vị trí cursor hiện tại.

Xóa object dùng phím `X` hoặc `Delete` trên object đang chọn — `X` sẽ mở thêm một menu ngữ cảnh nhỏ (Delete, hoặc các lựa chọn khác tùy chế độ), còn `Delete` xóa ngay lập tức không cần xác nhận thêm.

Sau khi thêm một object, một bảng nhỏ **Adjust Last Operation** hiện ở góc dưới trái Viewport (mở rộng bằng cách click, hoặc gọi lại bằng phím `F9`). Bảng này cho phép chỉnh ngay các thông số tạo hình gốc: số Vertices/Segments của Cylinder hay Sphere, Radius, Rotation, Location ban đầu, Align (World/View/3D Cursor)... Đây là cách duy nhất để chỉnh thông số tạo hình gốc — nếu thực hiện một thao tác khác (di chuyển chuột để chọn object khác, gõ lệnh khác) trước khi mở bảng này, nó sẽ biến mất và không thể chỉnh lại các thông số gốc nữa.

## 3. Quy trình thực hành gợi ý

1. Đặt 3D Cursor về gốc tọa độ bằng `Shift + C`.
2. Nhấn `Shift + A > Mesh > Cylinder`, mở bảng F9 để chỉnh Vertices xuống 6 (tạo lăng trụ lục giác).
3. Di chuyển 3D Cursor sang một vị trí khác bằng `Shift + Right Click`, thêm một UV Sphere mới, quan sát nó xuất hiện đúng tại cursor.
4. Thêm một Cone, mở F9 để chỉnh Radius 1 và Radius 2 khác nhau.
5. Chọn một object không cần thiết, xóa bằng `X > Delete`.
6. Thêm nhanh và xóa nhanh vài object khác nhau để làm quen phản xạ Shift+A / X.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt |
|---|---|
| Mở Add Menu | `Shift + A` |
| Xóa object (có menu xác nhận) | `X` |
| Xóa object ngay lập tức | `Delete` |
| Đặt 3D Cursor tại con trỏ | `Shift + Right Click` |
| Reset 3D Cursor về gốc | `Shift + C` |
| Mở lại bảng Adjust Last Operation | `F9` |

## 5. Lưu ý & lỗi thường gặp

- Quên vị trí 3D Cursor là lỗi phổ biến nhất — object mới có thể "biến mất" khỏi tầm nhìn vì bị tạo ở nơi không ngờ.
- Bảng F9/Adjust Last Operation chỉ tồn tại cho đến khi có thao tác khác được thực hiện — cần chỉnh thông số ngay sau khi thêm object.
- `X` trên object trong Object Mode chỉ có một lựa chọn Delete, nhưng trong Edit Mode sẽ mở menu nhiều lựa chọn hơn (Vertices, Edges, Faces, Limited Dissolve...) — dễ nhầm giữa hai ngữ cảnh.
- Xóa object không tự động xóa Mesh Data liên kết (dữ liệu mồ côi/orphan data) — có thể dọn bằng File > Clean Up > Purge nếu cần giảm dung lượng file.

## 6. Checklist thực hành

- [ ] Đã thêm được ít nhất 3 loại primitive khác nhau bằng Add Menu.
- [ ] Đã dùng F9 để chỉnh thông số tạo hình ngay sau khi thêm object.
- [ ] Đã thử di chuyển 3D Cursor và quan sát object mới xuất hiện đúng vị trí.
- [ ] Đã xóa object bằng cả hai phím X và Delete.

## 7. Tóm tắt

`Shift + A` luôn tạo object tại vị trí 3D Cursor, và bảng F9 là cơ hội duy nhất để tinh chỉnh thông số tạo hình ngay sau đó — nắm vững quy trình thêm/xóa này là bước khởi đầu bắt buộc cho mọi phiên làm việc modeling trong Blender.
