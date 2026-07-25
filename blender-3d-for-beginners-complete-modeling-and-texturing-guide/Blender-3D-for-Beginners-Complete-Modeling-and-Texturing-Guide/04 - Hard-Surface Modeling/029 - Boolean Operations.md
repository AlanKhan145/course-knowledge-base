# 029 — Boolean Operations

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 04 — Hard-Surface Modeling |
| **Bài học** | Boolean Operations |
| **Thời lượng** | 3:51 |
| **Chủ đề chính** | Ba phép toán Boolean cơ bản |

## 1. Mục tiêu bài học

- Hiểu ba loại phép toán Boolean: Union, Difference, Intersect.
- Biết thêm và cấu hình Boolean Modifier trên một object với một object "cutter" thứ hai.
- Hiểu quy trình làm việc non-destructive với Boolean Modifier thay vì Boolean trực tiếp trong Edit Mode.
- Làm quen với add-on Bool Tool (Boolean quick-access) tích hợp sẵn trong Blender.

## 2. Nội dung chính

**Boolean** là nhóm phép toán hình học kết hợp hai mesh dựa trên logic tập hợp, cực kỳ phổ biến trong hard-surface modeling vì cho phép tạo các chi tiết chính xác (lỗ, rãnh, hợp khối) mà không cần chỉnh tay từng vertex. Ba loại phép toán:

- **Union** (Hợp): gộp hai object thành một khối liền, loại bỏ phần mesh chồng lấn bên trong — dùng khi cần "dán" hai khối lại với nhau thành một hình thể duy nhất (ví dụ gắn tay cầm vào thân cốc).
- **Difference** (Hiệu): lấy object gốc trừ đi phần chồng lấn với object thứ hai (cutter) — dùng để khoét lỗ, cắt rãnh, tạo khe (ví dụ khe bỏ tiền trên lợn đất, lỗ vít trên chi tiết máy).
- **Intersect** (Giao): chỉ giữ lại phần mesh chung, chồng lấn giữa hai object, loại bỏ toàn bộ phần không giao nhau — ít dùng hơn nhưng hữu ích khi cần tạo hình dạng là "vùng giao" của hai khối.

Cách chuẩn để áp dụng Boolean trong Blender là qua **Boolean Modifier** (`Add Modifier > Generate > Boolean`) trên object gốc — không phải lệnh Boolean trực tiếp trong Edit Mode (Mesh > mesh tools cũ). Modifier yêu cầu chọn **Operation** (Union/Difference/Intersect) và một **Object** thứ hai làm "cutter". Ưu điểm lớn nhất của cách này là **non-destructive**: mesh gốc không bị thay đổi vĩnh viễn cho đến khi người dùng chủ động **Apply** modifier — trong lúc đó object cutter có thể tiếp tục di chuyển, xoay, scale và kết quả Boolean cập nhật theo thời gian thực, rất tiện khi cần thử nhiều vị trí cắt khác nhau trước khi chốt.

Object cutter thường được **ẩn khỏi Render** (biểu tượng camera trong Outliner) hoặc chuyển sang chế độ Wireframe/Viewport Display để không gây rối mắt trong khi vẫn tồn tại trong scene cho modifier tham chiếu.

Blender còn tích hợp sẵn add-on **Bool Tool**, cung cấp truy cập nhanh phép Boolean qua menu `Object > Quick Effects` hoặc phím tắt tùy biến (`Ctrl + Shift + B` tùy cấu hình mặc định hoặc add-on) — thực hiện Union/Difference/Intersect tức thì trên các object đang chọn mà không cần vào Modifier Properties thủ công, phù hợp cho thao tác nhanh khi không cần giữ lại khả năng chỉnh sửa sau này.

## 3. Quy trình thực hành gợi ý

1. Thêm hai object chồng lấn nhau (ví dụ một Cube và một Sphere).
2. Trên Cube, vào `Add Modifier > Generate > Boolean`, chọn Object = Sphere.
3. Thử lần lượt ba Operation (Union, Difference, Intersect), quan sát sự khác biệt kết quả.
4. Di chuyển Sphere trong khi modifier vẫn active để thấy kết quả Boolean cập nhật theo thời gian thực.
5. Ẩn Sphere khỏi Render (bỏ tick biểu tượng camera trong Outliner) trong khi vẫn giữ hiển thị Viewport để dễ chỉnh vị trí.
6. Apply Boolean Modifier khi đã chốt kết quả, sau đó xóa hoặc ẩn hẳn object cutter.
7. Thử tính năng Bool Tool qua `Object > Quick Effects` (nếu add-on được bật trong Preferences) để so sánh tốc độ thao tác.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt |
|---|---|
| Thêm Boolean Modifier | `Add Modifier > Generate > Boolean` |
| Ẩn object khỏi Render | Click biểu tượng camera cạnh object trong Outliner |
| Ẩn object khỏi Viewport | `H` (Alt+H để hiện lại) |
| Bật add-on Bool Tool | `Edit > Preferences > Add-ons > Bool Tool` |
| Quick Boolean (Bool Tool) | `Object > Quick Effects` (sau khi bật add-on) |

## 5. Lưu ý & lỗi thường gặp

- Nhầm lẫn giữa Union và Difference khiến kết quả ngược với mong muốn (ví dụ tạo khối đặc thay vì khoét lỗ).
- Mesh không phải "manifold" (kín, không lỗ thủng, normal nhất quán) dễ khiến Boolean sinh lỗi hình học (n-gon rác, mặt lật ngược).
- Quên ẩn cutter khỏi Render khiến object cutter xuất hiện thừa trong ảnh render dù không nhìn thấy trong Viewport Solid.
- Chồng lấn mesh quá khít (đồng phẳng — coplanar) tại vùng giao dễ gây lỗi z-fighting hoặc mặt rỗng sau Boolean.
- Apply Boolean quá sớm trước khi chốt vị trí cutter làm mất khả năng chỉnh sửa non-destructive.

## 6. Checklist thực hành

- [ ] Đã thử cả ba phép toán Union, Difference, Intersect trên cùng một cặp object.
- [ ] Hiểu và giải thích được sự khác biệt kết quả giữa ba phép toán.
- [ ] Đã thiết lập Boolean Modifier đúng cách với object cutter riêng biệt.
- [ ] Đã biết ẩn cutter khỏi Render trong khi vẫn giữ nó trong scene.
- [ ] Đã thử qua Bool Tool add-on (nếu khả dụng).

## 7. Tóm tắt

Ba phép toán Boolean — Union, Difference, Intersect — là công cụ nền tảng của hard-surface modeling, được áp dụng an toàn và linh hoạt nhất thông qua Boolean Modifier non-destructive kết hợp một object cutter riêng biệt, thay vì chỉnh sửa mesh trực tiếp không thể hoàn tác dễ dàng.
