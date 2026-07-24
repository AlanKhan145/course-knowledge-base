# 008 — Material Colours

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 01 — Introduction & Setup |
| **Bài học** | Material Colours |
| **Thời lượng** | 11:03 |
| **Chủ đề chính** | Tạo vật liệu và màu sắc |

## 1. Mục tiêu bài học

- Biết cách tạo vật liệu mới trong Material Properties và gán cho object.
- Hiểu vai trò của tham số **Base Color** trong Principled BSDF.
- Biết cách đặt tên vật liệu, đổi màu, và xem kết quả qua Material Preview/Rendered.
- Làm quen với khái niệm mỗi object có thể có một hoặc nhiều vật liệu (mở rộng ở bài Material Slots sau này).

## 2. Nội dung chính

Vật liệu (Material) trong Blender được quản lý qua tab **Material Properties** (icon quả cầu sọc caro đỏ-trắng) trong Properties Panel. Khi chưa có vật liệu nào, bấm **"+ New"** sẽ tạo một vật liệu mặc định sử dụng shader node **Principled BSDF** — một shader vật lý (physically-based) tổng hợp gần như mọi loại chất liệu thông thường (nhựa, kim loại, da, vải...) chỉ bằng cách chỉnh các tham số của nó.

Tham số quan trọng nhất là **Base Color**: quyết định màu sắc gốc (albedo) của vật liệu, chỉnh bằng cách click vào ô màu để mở color picker (RGB, HSV, Hex, hoặc dùng color wheel). Ngoài chỉnh trực tiếp, Base Color cũng có thể được điều khiển bằng một Image Texture hoặc node khác (sẽ học sâu hơn ở các module Texturing/UV Mapping sau này).

Mỗi vật liệu có tên riêng (đổi tên bằng cách double-click vào ô tên trong Material Properties), và có thể được **tái sử dụng** cho nhiều object khác nhau bằng cách chọn từ danh sách thả xuống thay vì tạo mới — điều này giúp khi sửa một vật liệu, mọi object dùng chung sẽ tự động cập nhật.

Việc xem trước kết quả màu sắc nên thực hiện ở **Material Preview** hoặc **Rendered** viewport shading (bài trước) — ở chế độ Solid, màu vật liệu không hiển thị đầy đủ (Solid Mode có tùy chọn Color riêng: Material/Single/Random/Object, đặt trong Viewport Shading dropdown).

## 3. Quy trình thực hành gợi ý

1. Chọn một object (ví dụ Cube mặc định), mở Material Properties, bấm "+ New".
2. Đổi tên vật liệu thành tên có ý nghĩa (ví dụ "Wall_Red").
3. Click vào ô Base Color, chọn một màu bất kỳ qua color wheel hoặc nhập mã Hex.
4. Chuyển viewport sang Material Preview để xem kết quả ngay lập tức.
5. Tạo thêm 2-3 object khác, gán lại cùng vật liệu đã tạo bằng dropdown chọn vật liệu có sẵn thay vì tạo mới, quan sát chúng cùng đổi màu khi bạn chỉnh Base Color.
6. Thử chuyển Solid Shading Color mode sang "Material" trong dropdown Viewport Shading để xem màu ngay ở Solid Mode.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Vị trí/Phím tắt |
|---|---|
| Mở Material Properties | Icon quả cầu sọc trong Properties Panel |
| Tạo vật liệu mới | Nút "+ New" |
| Đổi màu Base Color | Click ô màu > Color Picker |
| Chuyển Material Preview | `Z` > chọn Material Preview |
| Xem màu ở Solid Mode | Dropdown Viewport Shading > Color: Material |

## 5. Lưu ý & lỗi thường gặp

- Quên chuyển sang Material Preview/Rendered rồi thắc mắc vì sao không thấy màu — ở Solid Mode mặc định, màu vật liệu không hiển thị trừ khi đổi Color mode.
- Tạo vật liệu trùng lặp cho nhiều object thay vì tái sử dụng một vật liệu chung — gây khó khăn khi cần chỉnh sửa hàng loạt về sau.
- Base Color không tự động tạo hiệu ứng phản chiếu/độ bóng — đó là vai trò của Roughness/Metallic sẽ học ở bài Material Reflections tiếp theo.
- Màu hiển thị có thể khác nhau tùy View Transform (Standard/AgX) đã học ở bài trước — cần nhất quán khi đánh giá màu sắc.

## 6. Checklist thực hành

- [ ] Đã tạo được ít nhất một vật liệu mới.
- [ ] Đã đổi tên và đổi Base Color của vật liệu.
- [ ] Đã gán cùng một vật liệu cho nhiều object khác nhau.
- [ ] Đã xem kết quả màu ở Material Preview.

## 7. Tóm tắt

Material Properties với node Principled BSDF là nơi tạo và quản lý vật liệu trong Blender, trong đó Base Color là tham số cơ bản nhất quyết định màu sắc gốc. Vật liệu có thể tái sử dụng giữa nhiều object, giúp quản lý scene hiệu quả hơn.
