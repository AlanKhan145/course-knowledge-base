# Bài 12 — Bảng tra cứu, thuật ngữ và nguồn
## 1. Phím tắt Blender
| Phím | Tác dụng |
|---|---|
| Tab | Object/Edit Mode |
| Numpad 1 | Front View |
| Ctrl+A (Object Mode) | Apply Rotation / Scale |
| Shift+A | Thêm đối tượng / mesh |
| 1, 2, 3 trong Edit Mode | Vertex / Edge / Face Select |
| G, R, S | Move / Rotate / Scale |
| E | Extrude |
| Shift+D | Duplicate |
| F | Make Edge / Face |
| Ctrl+R | Loop Cut |
| G G | Slide đỉnh/cạnh theo ngữ cảnh |
| Alt+click | Chọn edge loop khi phù hợp |
| L | Select Linked |
| Z | Menu Viewport Shading; chọn Wireframe |
| Shift+N | Recalculate Normals Outside |
| X > Dissolve Edges | Bỏ cạnh nhưng giữ bề mặt khi khả thi |
| Face > Grid Fill | Điền lưới quad vào biên phù hợp |


Phím tắt theo Blender keymap phổ biến; một số khác biệt theo phiên bản và mode.


## 2. Thuật ngữ
- **Retopology**: tái tạo topology với mesh mới.
- **Edge loop / edge flow**: vòng cạnh / hướng đi của các cạnh.
- **Quad / Triangle / N-gon**: mặt 4 / 3 / nhiều hơn 4 đỉnh.
- **Pole / Valence**: đỉnh chuyển hướng / số cạnh gặp tại đỉnh.
- **High-poly / low-poly**: lưới dày chi tiết / lưới nhẹ được tối ưu.
- **Mirror**: đối xứng; Merge và Clipping là hai lựa chọn khác nhau.
- **Shrinkwrap**: chiếu đỉnh lên bề mặt mục tiêu.
- **Grid Fill**: điền lưới quad.
- **Subdivision**: chia nhỏ mesh.
- **Shade Smooth**: làm mượt shading (khác Sculpt Smooth).


## 3. Nguồn
**Nguồn chính:** transcript video hướng dẫn retopology khuôn mặt dài 45 phút 12 giây do người dùng gửi; chưa có URL video gốc.


**Bổ sung kiểm chứng:**
1. Mirror Modifier — https://docs.blender.org/manual/en/5.0/modeling/modifiers/generate/mirror.html
2. Shrinkwrap Modifier — https://docs.blender.org/manual/en/5.0/modeling/modifiers/deform/shrinkwrap.html
3. Mesh Editing — https://docs.blender.org/manual/en/latest/modeling/meshes/editing/introduction.html
4. F2 Blender Extension — https://extensions.blender.org/add-ons/f2/


## 4. Hiệu chỉnh thuật ngữ transcript
- “rettopology / rtopo” → **retopology**.
- “phần đùi / cơ tứ đầu” trong bản dịch máy → **quads**.
- `R Z 90` và `G Y` là thao tác theo hướng của mẫu, không bắt buộc với mọi mesh.
- **Clipping** không tự thay thế **Merge**.
- **“Ready for animation”** nên hiểu là có nền topology thuận lợi để rig **sau khi đã kiểm tra chuyển động**.
- Thứ tự modifier thay đổi theo mục tiêu, nên lưu bản chưa Apply.


**Thành quả sau khóa:** mesh retopo cho khuôn mặt, sẵn sàng tiếp tục UV, bake normal, rig và facial animation.