# 02 — Dựng lòng suối cơ bản

| Thuộc tính | Nội dung |
|---|---|
| **Video** | (không rõ tên/kênh — chỉ có transcript) |
| **Đoạn** | Bước dựng phong cảnh |
| **Thời điểm** | 00:56–02:25 |
| **Chủ đề chính** | Plane, Subdivide, Circle Select + Proportional Editing, Subdivision Surface; object "Fish Source" cho Geometry Nodes |

## 1. Mục tiêu bài học

- Dựng nhanh một mặt đất/lòng suối cơ bản làm nền cho cảnh cá bơi.
- Dùng tổ hợp **Circle Select (`C`) + Proportional Editing (`O`)** để tạo hình dạng lòng suối uốn lượn một cách hữu cơ.
- Chuẩn bị sẵn một object phụ ("Fish Source") sẽ dùng làm nguồn phân bố cá bằng Geometry Nodes ở chương sau.

## 2. Nội dung chính

Bước đầu tiên là thêm một **Plane**, mở rộng kích thước cho phù hợp với quy mô cảnh, sau đó vào **Edit Mode** và **Subdivide** (chuột phải > Subdivide) với số lượng phân chia lớn (tác giả dùng **50 lần**) để có đủ mật độ đỉnh (vertex) cho việc tạo hình dạng lòng suối chi tiết sau này.

Để tạo hình dạng dòng chảy, tác giả dùng tổ hợp quen thuộc trong Blender: nhấn `2` hai lần để bỏ chọn toàn bộ, sau đó dùng công cụ **Circle Select (`C`)** để chọn dần các cụm đỉnh dọc theo đường mà dòng suối sẽ đi qua — vẽ nên hình dạng cơ bản của lòng suối bằng cách "quét" vùng chọn. Tiếp theo, bật **Proportional Editing (`O`)** — công cụ cho phép một thao tác biến đổi (move, scale...) ảnh hưởng lan tỏa ra các đỉnh xung quanh vùng chọn theo một bán kính giảm dần, tạo chuyển tiếp mượt mà thay vì cạnh sắc — và dùng **con lăn chuột giữa** để điều chỉnh bán kính vùng ảnh hưởng của Proportional Editing lớn/nhỏ khi đang kéo (ví dụ đẩy các đỉnh xuống để tạo độ trũng của lòng suối).

Sau khi có hình dạng lòng suối thô, thoát Edit Mode, thêm **Subdivision Surface modifier (`Ctrl + 2`)** để làm mượt toàn bộ bề mặt. Về vật liệu, tác giả giữ mức "rất cơ bản": chỉ dùng một **màu nâu-xanh đậm** đơn sắc (không dùng texture ảnh UV-mapped chi tiết như trong một dự án hoàn chỉnh), và bật hiển thị màu vật liệu trực tiếp trong viewport (Material Preview/Solid shading với màu vật liệu).

Cuối cùng, tác giả thêm một **Plane thứ hai** — hình dạng của nó không quan trọng vì sẽ không bao giờ được nhìn thấy trực tiếp trong cảnh — đặt nó nằm **ngay bên dưới bề mặt lòng suối** (dưới mặt đất một chút). Object này được đặt tên là **"Fish Source"**, còn object lòng suối chính được đặt tên là **"Ground"**. Vai trò của "Fish Source" sẽ được dùng lại ở chương Geometry Nodes (chương 10) làm **thể tích nguồn để phân bố các con cá** — nó không xuất hiện trực quan trong render, chỉ đóng vai trò dữ liệu hình học cho hệ thống scatter sau này.

## 3. Quy trình thực hành gợi ý

1. Thêm một Plane, mở rộng kích thước tổng thể của cảnh.
2. Vào Edit Mode, chuột phải > Subdivide, đặt số lần chia khoảng 50 để có đủ mật độ đỉnh.
3. Nhấn `2` hai lần để bỏ chọn tất cả, dùng Circle Select (`C`) để quét chọn dọc theo đường dự kiến của lòng suối.
4. Bật Proportional Editing (`O`), di chuyển/hạ thấp các đỉnh đã chọn, dùng con lăn chuột để điều chỉnh bán kính ảnh hưởng cho hình dạng lòng suối mềm mại.
5. Thoát Edit Mode, thêm Subdivision Surface modifier (`Ctrl + 2`).
6. Gán vật liệu màu nâu-xanh đậm đơn giản, bật hiển thị màu trong viewport.
7. Thêm một Plane thứ hai, đặt ngay dưới bề mặt lòng suối, đặt tên "Fish Source"; đặt tên object lòng suối chính là "Ground".

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt |
|---|---|
| Thêm Plane | `Shift + A > Mesh > Plane` |
| Vào/thoát Edit Mode | `Tab` |
| Subdivide (chuột phải trong Edit Mode) | Menu chuột phải > Subdivide |
| Bỏ chọn tất cả | `Alt + A` (hoặc `2` lần liên tiếp theo thói quen của tác giả) |
| Circle Select | `C` (cuộn chuột để đổi kích thước brush, click chuột phải/`Esc` để thoát công cụ) |
| Bật/tắt Proportional Editing | `O` |
| Điều chỉnh bán kính Proportional Editing khi đang transform | Con lăn chuột giữa |
| Thêm Subdivision Surface modifier | `Ctrl + 2` (hoặc Add Modifier > Generate > Subdivision Surface) |

## 5. Lưu ý & lỗi thường gặp

- Số lần Subdivide quá thấp sẽ không đủ đỉnh để tạo hình dạng lòng suối uốn lượn chi tiết bằng Proportional Editing — 50 lần là mức tác giả dùng, có thể điều chỉnh tùy quy mô cảnh thực tế.
- Quên bật Proportional Editing trước khi di chuyển đỉnh sẽ tạo ra cạnh sắc đột ngột thay vì độ trũng mềm mại tự nhiên của lòng suối.
- Đừng nhầm lẫn vai trò của hai Plane: "Ground" là bề mặt lòng suối thực sự hiển thị trong render, còn "Fish Source" chỉ là dữ liệu hình học ẩn dùng cho Geometry Nodes ở chương 10 — không cần đầu tư thời gian vào hình dạng hay vật liệu của "Fish Source".
- Vật liệu lòng suối trong video này chỉ dùng màu đơn sắc để giữ tốc độ thực hiện nhanh — một dự án hoàn chỉnh hơn có thể cần texture ảnh UV-mapped chi tiết (cát, đá, bùn...).

## 6. Checklist thực hành

- [ ] Đã dựng được hình dạng lòng suối cơ bản bằng Plane + Subdivide + Circle Select + Proportional Editing.
- [ ] Đã thêm Subdivision Surface modifier để làm mượt bề mặt.
- [ ] Đã gán vật liệu màu đơn giản cho lòng suối và đặt tên object là "Ground".
- [ ] Đã tạo object "Fish Source" đặt ngay dưới bề mặt lòng suối, chuẩn bị cho bước Geometry Nodes sau này.

## 7. Tóm tắt

Bước dựng lòng suối ưu tiên tốc độ hơn chi tiết: dùng tổ hợp Circle Select + Proportional Editing để tạo hình dạng hữu cơ nhanh chóng, đồng thời chuẩn bị sẵn một object ẩn ("Fish Source") sẽ đóng vai trò then chốt trong hệ thống Geometry Nodes phân bố cả đàn cá ở các chương sau.
