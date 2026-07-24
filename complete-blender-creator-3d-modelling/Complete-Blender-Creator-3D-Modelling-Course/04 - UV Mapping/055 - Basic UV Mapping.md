# 055 — Basic UV Mapping

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 04 — UV Mapping |
| **Bài học** | Basic UV Mapping |
| **Thời lượng** | 12:58 |
| **Chủ đề chính** | Kiến thức UV Mapping cơ bản |

## 1. Mục tiêu bài học
- Hiểu khái niệm UV mapping là gì và tại sao mọi mô hình 3D cần có UV trước khi áp texture.
- Làm quen với UV Editor và mối quan hệ giữa không gian UV (0–1) và bề mặt mesh trong 3D Viewport.
- Biết các phương pháp unwrap cơ bản: Unwrap, Smart UV Project, Cube/Cylinder/Sphere Projection.
- Biết cách dùng texture caro (checker texture) để kiểm tra chất lượng UV.

## 2. Nội dung chính
UV mapping là quá trình "trải phẳng" bề mặt 3D của một mesh ra một không gian 2D gọi là UV space (tọa độ U, V nằm trong khoảng 0 đến 1), để texture 2D có thể được ánh xạ chính xác lên bề mặt mô hình. Mỗi vertex của mesh, khi tham gia vào một mặt (face), sẽ có một tọa độ UV tương ứng lưu trong UV Map của object.

Trong Blender, UV Editor là workspace/editor chuyên dụng để xem và chỉnh sửa layout UV. Khi ở Edit Mode và bật UV Sync Selection (hoặc chọn face/vertex ở 3D Viewport), UV Editor sẽ hiển thị các UV tương ứng.

Các phương pháp tạo UV cơ bản:
- **Unwrap (phím U → Unwrap):** thuật toán "trải phẳng" mesh dựa trên seam đã đánh dấu, cho kết quả tự nhiên nhất với mesh phức tạp.
- **Smart UV Project:** tự động phân tích góc cạnh mesh và tự tạo seam + unwrap, phù hợp cho mesh hard-surface đơn giản hoặc để có kết quả nhanh.
- **Cube Projection / Cylinder Projection / Sphere Projection:** chiếu UV theo hình khối cơ bản, phù hợp với mesh có hình dạng gần giống khối lập phương, trụ, hoặc cầu.
- **Project from View:** chiếu UV theo góc nhìn hiện tại của viewport.

Để kiểm tra chất lượng UV, một texture caro (checker/UV grid) thường được gán tạm thời lên vật liệu: nếu các ô vuông trên bề mặt mô hình đều nhau, không bị kéo dãn hoặc méo, UV được coi là tốt.

## 3. Quy trình thực hành gợi ý
1. Tạo hoặc mở một mesh đơn giản (cube, cylinder) trong Edit Mode.
2. Chọn toàn bộ mesh (A), mở menu UV bằng phím U để xem các tùy chọn unwrap.
3. Thử Smart UV Project trước để có cái nhìn tổng quan về layout UV tự động.
4. Mở UV Editor (đổi một panel sang UV Editing workspace) để xem UV layout song song với 3D Viewport.
5. Tạo một Image Texture kiểu UV Grid (checker) và gán vào Material để kiểm tra độ méo của UV trên bề mặt.
6. So sánh kết quả giữa Unwrap thường (chưa có seam) và Smart UV Project để thấy sự khác biệt.

## 4. Phím tắt & công cụ liên quan
| Phím tắt | Chức năng |
|---|---|
| `U` | Mở menu UV Mapping (Unwrap, Smart UV Project, Cube/Cylinder/Sphere Projection...) |
| `A` | Chọn toàn bộ mesh trong Edit Mode |
| `Alt+A` | Bỏ chọn toàn bộ |
| `N` | Mở/đóng sidebar (xem thông tin UV, Item panel) |
| `Tab` | Chuyển giữa Object Mode và Edit Mode |

## 5. Lưu ý & lỗi thường gặp
- Unwrap khi chưa có seam nào sẽ cho kết quả không tối ưu vì Blender tự chọn cạnh để cắt mesh.
- Smart UV Project có thể tạo quá nhiều island nhỏ nếu Angle Limit quá thấp, gây khó khăn khi texturing thủ công.
- Quên gán checker texture để kiểm tra dễ dẫn đến việc không phát hiện UV bị kéo dãn cho tới khi bake hoặc texture thật đã áp lên.
- Không phải mesh nào cũng nên dùng Cube/Cylinder Projection — chỉ phù hợp với hình dạng gần giống hình khối tương ứng.

## 6. Checklist thực hành
- [ ] Đã mở được UV Editor và hiểu quan hệ giữa 3D Viewport và UV space.
- [ ] Đã thử Unwrap cơ bản và Smart UV Project trên cùng một mesh.
- [ ] Đã thử ít nhất một phương pháp Projection (Cube/Cylinder/Sphere).
- [ ] Đã gán checker texture để kiểm tra chất lượng UV.

## 7. Tóm tắt
Bài học cung cấp nền tảng lý thuyết và thực hành về UV mapping: khái niệm UV space, các công cụ unwrap cơ bản trong Blender, và cách dùng checker texture để đánh giá chất lượng UV trước khi đi sâu vào seam và UV islands ở bài tiếp theo.
