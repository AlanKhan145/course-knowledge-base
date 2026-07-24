# 049 — Trees, Lights & Colours

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 03 — Low-Poly Dinosaur |
| **Bài học** | Trees, Lights & Colours |
| **Thời lượng** | 11:33 |
| **Chủ đề chính** | Cây, ánh sáng và màu sắc |

## 1. Mục tiêu bài học

- Tạo cây low-poly đơn giản bằng khối Cone/Cylinder và nhân bản khắp cảnh quan.
- Sử dụng Collection và Instancing (Duplicate Linked) để rải cây hiệu quả.
- Thiết lập ánh sáng cơ bản (Sun Light, World Color) cho scene.
- Gán màu sắc cơ bản qua Material Base Color để phân biệt các thành phần trong cảnh.

## 2. Nội dung chính

**Tạo cây low-poly**: cách phổ biến nhất là kết hợp một **Cylinder** (thân cây) với một hoặc nhiều **Cone** (tán lá), độ phân giải (segments) thấp để giữ các mặt góc cạnh đúng phong cách low-poly. Có thể xếp chồng 2-3 Cone với kích thước giảm dần để tạo tán lá nhiều tầng, hoặc dùng một Cone lớn duy nhất cho phong cách tối giản hơn.

**Nhân bản cây**: thay vì tạo thủ công từng cây, dùng:

- **Shift+D** (Duplicate) để nhân bản độc lập, hoặc
- **Alt+D** (Duplicate Linked) để nhân bản dạng liên kết dữ liệu (Linked Duplicate) — khi sửa mesh gốc, tất cả bản sao linked cùng cập nhật, tiết kiệm thời gian nếu cần chỉnh sửa thiết kế cây sau này.
- Có thể gộp nhiều cây thành một **Collection**, sau đó dùng **Collection Instance** (Add > Collection Instance) để rải nhanh các cụm cây quanh núi.

Khi rải cây, nên xoay (R) và scale (S) ngẫu nhiên nhẹ cho mỗi bản sao để tránh cảm giác lặp lại đơn điệu, đồng thời đặt cây tập trung nhiều ở chân núi/thung lũng và thưa dần lên đỉnh núi cao.

**Ánh sáng**: Blender có 4 loại Light Object — Point, Sun, Spot, Area. Với cảnh ngoài trời như landscape này, **Sun Light** là lựa chọn phù hợp nhất vì mô phỏng ánh sáng mặt trời song song, chiếu đều toàn cảnh bất kể khoảng cách. Các tham số quan trọng của Sun Light trong Object Data Properties:

- **Strength**: cường độ sáng (đơn vị W/m²).
- **Angle**: độ mềm của bóng đổ (góc càng lớn, bóng càng mờ/mềm).
- **Color**: màu ánh sáng, có thể chỉnh hơi ấm (vàng cam) cho cảm giác hoàng hôn hoặc trung tính cho ánh sáng ban ngày.

Ngoài Sun Light, **World Color** (trong Properties > World, hoặc qua Shader Editor với chế độ World) quyết định màu nền/bầu trời và ánh sáng môi trường (ambient) tổng thể, ảnh hưởng lớn đến tông màu chung của cảnh.

**Màu sắc cơ bản**: mỗi đối tượng (khủng long, núi, cây, mặt đất) nên có Material riêng với **Base Color** phù hợp (dùng Principled BSDF mặc định khi tạo Material mới) — bước này là nền tảng trước khi đi sâu vào Shader Nodes ở bài học kế tiếp.

## 3. Quy trình thực hành gợi ý

1. Tạo một cây mẫu: Add > Mesh > Cylinder (thân), Add > Mesh > Cone (tán lá), căn chỉnh vị trí và Join (Ctrl+J) thành một object.
2. Giảm số Vertices của Cylinder/Cone khi tạo (trong panel Operator) để giữ phong cách low-poly.
3. Gộp cây vào một Collection riêng (M > New Collection).
4. Dùng Alt+D hoặc Collection Instance để rải nhiều cây quanh chân núi, xoay/scale ngẫu nhiên từng cây.
5. Add > Light > Sun, chỉnh góc chiếu và Strength cho phù hợp thời điểm trong ngày mong muốn.
6. Vào Properties > World, chỉnh Color nền trời (hoặc gán gradient đơn giản nếu muốn).
7. Tạo Material cơ bản (New Material) cho từng object, gán Base Color: xanh lá cho cây, nâu/xám cho núi, màu da phù hợp cho khủng long.
8. Render thử nhanh (F12 hoặc View > Rendered Shading) để kiểm tra tổng thể ánh sáng và màu sắc.

## 4. Phím tắt & công cụ liên quan

| Phím tắt | Chức năng |
|---|---|
| Shift+A | Add Object (Mesh, Light) |
| Shift+D | Duplicate |
| Alt+D | Duplicate Linked |
| Ctrl+J | Join objects thành một |
| M | Move to Collection |
| R, S | Rotate / Scale ngẫu nhiên khi rải cây |
| Z (giữ) | Chuyển chế độ Shading (Wireframe/Solid/Material Preview/Rendered) |
| F12 | Render ảnh tĩnh để kiểm tra |

## 5. Lưu ý & lỗi thường gặp

- Rải cây quá đều/thẳng hàng khiến cảnh trông nhân tạo, thiếu tự nhiên.
- Dùng quá nhiều Duplicate (không Linked) cho cây giống hệt nhau làm file nặng không cần thiết khi cần sửa thiết kế cây.
- Sun Light đặt góc quá cao (gần thẳng đứng) tạo bóng đổ nhạt, thiếu chiều sâu cho cảnh.
- Quên chỉnh World Color khiến nền mặc định (xám trung tính) làm cảnh trông thiếu sức sống.
- Material Preview (Z) khác với kết quả Render cuối (F12) nếu World/Light chưa thiết lập đầy đủ — nên kiểm tra cả hai.

## 6. Checklist thực hành

- [ ] Đã tạo được ít nhất một mẫu cây low-poly hoàn chỉnh.
- [ ] Cây đã được rải quanh cảnh bằng Duplicate Linked hoặc Collection Instance.
- [ ] Sun Light đã thiết lập góc và cường độ phù hợp.
- [ ] World Color đã được chỉnh cho phù hợp tông màu tổng thể.
- [ ] Mỗi object chính (dino, núi, cây, đất) đã có Material với Base Color riêng.

## 7. Tóm tắt

Bài học bổ sung sự sống cho cảnh quan bằng cây cối, đồng thời thiết lập ánh sáng và màu sắc cơ bản cho toàn bộ scene. Đây là bước chuẩn bị quan trọng trước khi đi sâu vào Shader Nodes để tạo vật liệu phức tạp hơn ở các bài tiếp theo.
