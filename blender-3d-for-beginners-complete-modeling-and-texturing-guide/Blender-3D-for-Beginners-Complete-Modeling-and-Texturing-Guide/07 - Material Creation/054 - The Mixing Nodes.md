# 054 — The Mixing Nodes

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 07 — Material Creation |
| **Bài học** | The Mixing Nodes |
| **Thời lượng** | 8:22 |
| **Chủ đề chính** | Trộn màu/texture và điều khiển phép chiếu texture |

## 1. Mục tiêu bài học

- Hiểu và sử dụng node **ColorRamp** để ánh xạ giá trị Fac sang dải màu tùy chỉnh.
- Nắm được các chế độ nội suy (Interpolation) của ColorRamp: Linear, Ease, Constant...
- Sử dụng node **Mix** (chế độ Color và Shader) để trộn hai texture hoặc hai shader.
- Hiểu vai trò của **Texture Coordinate** và **Mapping** trong việc điều khiển vị trí/tỷ lệ/xoay của texture trên mesh.

## 2. Nội dung chính

**ColorRamp** là node trung tâm để "diễn giải" giá trị grayscale (Fac) từ một texture procedural thành một dải màu hoặc độ tương phản tùy ý. Node có một thanh gradient với các **color stop** (điểm dừng màu) có thể thêm (`+`), xóa (`-`), kéo vị trí và đổi màu riêng từng điểm. Chế độ nội suy quan trọng nhất:

- **Linear**: chuyển màu mượt tuyến tính giữa các stop — dùng cho gradient tự nhiên.
- **Ease**: chuyển mượt có gia tốc ở đầu/cuối, tạo cảm giác mềm mại hơn Linear.
- **Constant**: không nội suy, mỗi vùng giữ nguyên màu của stop gần nhất bên trái — tạo dải màu step rõ rệt (ví dụ tách Noise Texture thành vùng đen/trắng nhị phân, hoặc tạo bản đồ độ cao dạng bậc thang).

Kéo hai color stop lại gần nhau trên ColorRamp là kỹ thuật kinh điển để tăng độ tương phản/độ sắc nét của một mask — ví dụ biến noise mượt thành mask có biên rõ ràng dùng để trộn hai vật liệu.

Node **Mix** (trước đây tách thành MixRGB và Mix Shader, từ Blender 3.4+ hợp nhất vào một node Mix đa năng với các Data Type khác nhau) có hai chế độ chính dùng trong material:

- **Mix (Color)**: trộn hai màu/texture theo hệ số Factor (0-1) và các Blending Mode giống Photoshop (Mix, Add, Multiply, Screen, Overlay, Darken, Lighten...). Factor thường được nối từ Fac của một texture khác (ví dụ Noise) để tạo trộn không đều, tự nhiên thay vì trộn đều một tỷ lệ cố định.
- **Mix Shader**: trộn hai shader hoàn chỉnh (ví dụ hai Principled BSDF khác nhau, hoặc Principled BSDF với Transparent BSDF) thành một shader đầu ra duy nhất, dựa trên Factor — nền tảng để tạo vật liệu layered (ví dụ lớp sơn bong tróc lộ kim loại bên dưới).

**Texture Coordinate** cung cấp nhiều hệ tọa độ khác nhau để "đọc" texture: **UV** (theo UV map đã unwrap), **Generated** (hộp bao mesh, tự động, không cần UV), **Object** (theo không gian local của object, ổn định khi object di chuyển), **Normal**, **Camera**, **Window**... Lựa chọn đúng output quyết định texture bám theo mesh như thế nào khi object biến đổi.

Node **Mapping** nhận input Vector (thường từ Texture Coordinate) và cho phép biến đổi nó trước khi đưa vào texture: **Location** (dịch chuyển/pan texture), **Rotation** (xoay pattern), **Scale** (phóng to/thu nhỏ độc lập theo từng trục X/Y/Z). Đây là công cụ chuẩn để căn chỉnh texture đúng vị trí và tỷ lệ mong muốn mà không cần chỉnh sửa UV.

## 3. Quy trình thực hành gợi ý

1. Nối một **Noise Texture** vào **ColorRamp**, quan sát cách kéo hai stop lại gần nhau làm mask sắc nét hơn.
2. Đổi Interpolation của ColorRamp sang Constant, thêm 3-4 stop để tạo dải màu bậc thang.
3. Thêm node **Mix (Color)**, nối hai Base Color khác nhau (ví dụ đỏ và xanh) vào A/B, dùng output ColorRamp làm Factor.
4. Thử đổi Blending Mode của Mix sang Multiply hoặc Overlay để thấy hiệu ứng khác nhau.
5. Thêm **Texture Coordinate**, nối output Object vào input Vector của Noise Texture thay vì để mặc định (Generated ngầm định).
6. Chèn thêm node **Mapping** giữa Texture Coordinate và Noise Texture, thử chỉnh Scale X/Y/Z riêng biệt và Rotation Z để xoay pattern.
7. Thử **Mix Shader**: nối một Principled BSDF (kim loại) và một Transparent BSDF, dùng ColorRamp làm Factor để tạo hiệu ứng "lỗ thủng" ngẫu nhiên.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Vị trí / Phím tắt |
|---|---|
| Thêm ColorRamp | `Shift + A > Converter > Color Ramp` |
| Thêm Mix node | `Shift + A > Color > Mix Color` (hoặc `Shading > Mix Shader`) |
| Thêm Texture Coordinate | `Shift + A > Input > Texture Coordinate` |
| Thêm Mapping | `Shift + A > Vector > Mapping` |
| Thêm/xóa color stop trên ColorRamp | Nút `+` / `-` trong panel ColorRamp |
| Đổi chế độ nội suy | Dropdown "Linear/Ease/Constant..." trong ColorRamp |
| Kết nối node | Kéo từ output tròn sang input tròn |

## 5. Lưu ý & lỗi thường gặp

- Quên chèn **Mapping** trước texture khi cần offset/scale — chỉnh trực tiếp trên node texture (nếu có) không linh hoạt bằng việc tách riêng Mapping để tái sử dụng cho nhiều texture cùng lúc.
- Nối nhầm **Mix Shader** khi thực ra cần **Mix (Color)** — Mix Shader chỉ áp dụng cho hai node kiểu Shader (BSDF), không nhận input Color trực tiếp.
- Dùng **UV** làm Texture Coordinate nhưng mesh chưa được Unwrap đúng cách sẽ khiến texture bị méo hoặc chồng lấp — cần kiểm tra UV trước.
- Để nhiều stop ColorRamp cách xa nhau mà mong đợi biên sắc nét — cần kéo các stop gần nhau (gần như trùng vị trí) mới tạo được cạnh rõ.
- Quên rằng **Object** coordinate phụ thuộc gốc tọa độ (Origin) của object — nếu Origin lệch, texture có thể bị dịch không như ý.

## 6. Checklist thực hành

- [ ] Đã dùng ColorRamp để tăng độ tương phản một mask từ Noise Texture.
- [ ] Đã thử chế độ Constant để tạo dải màu bậc thang.
- [ ] Đã trộn hai màu bằng Mix (Color) với Factor động từ texture.
- [ ] Đã dùng Mapping để chỉnh Location/Rotation/Scale của một texture.
- [ ] Đã thử Mix Shader để trộn hai BSDF khác nhau.

## 7. Tóm tắt

ColorRamp, Mix và bộ đôi Texture Coordinate/Mapping là "bộ công cụ trộn" cốt lõi trong Shader Editor — cho phép biến các pattern procedural thô thành mask có kiểm soát, trộn nhiều lớp màu/vật liệu, và định vị chính xác texture trên bề mặt mesh.
