# 035 — Array Modifier and Simple Deform

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 05 — Creative Modeling with Modifiers |
| **Bài học** | Array Modifier and Simple Deform |
| **Thời lượng** | 8:36 |
| **Chủ đề chính** | Kết hợp Array và Simple Deform để dựng thùng gỗ |

## 1. Mục tiêu bài học

- Hiểu cách Array Modifier nhân bản một mesh theo Offset để tạo các chi tiết lặp lại (thanh gỗ, vòng đai).
- Biết dùng Simple Deform (chế độ Bend) để uốn cong một mảnh thẳng thành hình cung.
- Áp dụng cả hai modifier cùng lúc để dựng một chiếc thùng gỗ (barrel) hoàn chỉnh từ một thanh ván duy nhất.
- Hiểu vai trò của thứ tự modifier trong stack và ảnh hưởng của nó lên kết quả cuối.

## 2. Nội dung chính

Bài học lấy ví dụ kinh điển khi học modifier: dựng một **thùng gỗ (barrel)** chỉ từ một thanh ván (stave) duy nhất. Quy trình bắt đầu bằng việc tạo một mesh mỏng, dài (thường từ Cube được scale mỏng theo Y và dài theo Z), đại diện cho một thanh ván đơn.

**Simple Deform Modifier** (Properties > Modifier > Add Modifier > Deform > Simple Deform) có 4 chế độ: Twist, Bend, Taper, Stretch. Với thùng gỗ, chế độ **Bend** được dùng để uốn thanh ván theo trục dọc, tạo độ phình bụng (belly) đặc trưng của thùng. Vì Bend chỉ uốn mượt khi mesh có đủ vùng chia (loop cut) theo hướng uốn, thanh ván cần được subdivide (Ctrl+R thêm nhiều loop cut dọc trục Z) trước khi áp modifier, nếu không mặt sẽ bị gãy khúc thay vì cong đều.

Sau khi có một thanh ván cong, **Array Modifier** (Add Modifier > Generate > Array) được thêm vào để nhân bản thanh ván này thành vòng tròn tạo thân thùng. Thay vì dùng Relative Offset (dịch chuyển theo trục thẳng), bài học dùng **Object Offset**: tick chọn Object Offset, gán một Empty đặt tại tâm thùng. Xoay Empty này quanh trục Z một góc bằng 360°/số lượng thanh ván (ví dụ 24 thanh thì mỗi bản sao cách nhau 15°) sẽ khiến Array xếp các thanh ván thành vòng tròn khép kín quanh Empty.

Cuối cùng, các **vòng đai kim loại (hoop rings)** — thường là một Torus dẹt hoặc một vòng Cylinder mỏng — cũng được nhân bản bằng Array Modifier theo trục Z (Relative Offset) để tạo 2-3 vòng đai ở đáy, giữa và miệng thùng, ôm quanh phần bụng phình của các thanh ván.

Thứ tự modifier quan trọng: Simple Deform nên đặt phía trên (áp dụng trước) Array trong stack nếu muốn uốn cong áp dụng lên từng bản sao; nếu đặt Array trước Simple Deform, việc uốn sẽ tác động lên toàn bộ cụm đã nhân bản, cho kết quả khác hẳn.

## 3. Quy trình thực hành gợi ý

1. Thêm một Cube, scale mỏng theo trục Y, kéo dài theo trục Z để tạo hình thanh ván.
2. Vào Edit Mode, thêm 6-8 loop cut dọc theo Z (`Ctrl+R`) để đủ mật độ cho việc uốn mượt.
3. Thêm Simple Deform Modifier, chọn chế độ Bend, chỉnh Angle nhỏ (ví dụ 10-15°) và Axis phù hợp để tạo độ phình bụng thùng.
4. Thêm một Empty (Plain Axes) tại gốc tọa độ (0,0,0), làm tâm xoay cho Array.
5. Thêm Array Modifier trên thanh ván, tick Object Offset, gán Empty vừa tạo.
6. Xoay Empty quanh Z một góc bằng 360° chia cho số thanh ván mong muốn; tăng Count trong Array cho khớp số lượng.
7. Bật Merge trong Array (Ctrl Distance) để hàn các cạnh trùng giữa các thanh ván liền kề.
8. Tạo riêng một Torus dẹt cho vòng đai, dùng Array (Relative Offset trục Z) hoặc nhân bản thủ công để đặt 3 vòng quanh thân thùng.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt |
|---|---|
| Thêm loop cut | `Ctrl + R` |
| Mở Add Modifier | Properties Editor > tab Modifier (icon cờ lê) |
| Xoay Empty theo trục Z | `R` `Z` rồi nhập góc |
| Đặt Empty tại gốc tọa độ | `Shift + C` trước khi thêm Empty, hoặc `Shift + S > Cursor to World Origin` |
| Áp dụng modifier (khi cần) | `Ctrl + A` (menu Apply trong Object Mode) |

## 5. Lưu ý & lỗi thường gặp

- Không thêm đủ loop cut trước khi Bend khiến mesh bị gãy góc thay vì cong mượt.
- Đặt sai thứ tự Simple Deform và Array trong stack cho ra hình dạng hoàn toàn khác so với mong muốn.
- Quên bật Merge trong Array khiến các thanh ván bị hở khe hoặc chồng mặt tại điểm nối.
- Góc xoay Empty không chia đều 360° khiến vòng thanh ván không khép kín hoàn toàn.
- Origin của thanh ván không đặt đúng vị trí (nên ở cạnh trong, sát trục Z) khiến bán kính vòng tròn Array sai lệch.

## 6. Checklist thực hành

- [ ] Đã tạo được một thanh ván có đủ loop cut để uốn mượt.
- [ ] Simple Deform (Bend) tạo độ phình bụng hợp lý cho thanh ván.
- [ ] Array Modifier với Object Offset nhân bản thanh ván thành vòng tròn khép kín.
- [ ] Đã thêm ít nhất 2-3 vòng đai kim loại quanh thân thùng.
- [ ] Toàn bộ thùng gỗ trông liền mạch, không hở khe giữa các thanh ván.

## 7. Tóm tắt

Bằng cách kết hợp Simple Deform (Bend) để uốn cong một thanh ván và Array Modifier với Object Offset để nhân bản nó thành vòng tròn quanh một Empty, người học dựng được một chiếc thùng gỗ hoàn chỉnh chỉ từ một mesh gốc duy nhất — minh họa sức mạnh của workflow procedural trong Blender.
