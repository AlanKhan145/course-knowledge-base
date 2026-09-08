# 014 — Stylized House Modeling Part 3

| Thuộc tính     | Nội dung                                                                    |
| -------------- | --------------------------------------------------------------------------- |
| **Phần**       | 02 — Modeling in Blender                                                    |
| **Thời lượng** | 15:21                                                                       |
| **Chủ đề**     | Hoàn thiện hình khối, mái vòm, cửa gỗ, props và preview ngôi nhà            |
| **Trọng tâm**  | Curve, Array, Boolean, Bevel, Proportional Editing, Driver, Viewport Render |

---

## 1. Mục tiêu bài học

Sau bài này, có thể:

* [ ] Tạo **mái vòm bằng Curve + Array** từ các viên gạch.
* [ ] Tạo cửa gỗ stylized từ Cube.
* [ ] Làm mái che, ván gỗ và các thanh đỡ.
* [ ] Tạo props đơn giản như bánh răng, bảng hiệu và cờ lê.
* [ ] Dùng Boolean để khoét lỗ.
* [ ] Thêm độ bất quy tắc bằng **Random Selection + Proportional Editing**.
* [ ] Tạo bệ xoay cho toàn bộ ngôi nhà.
* [ ] Tạo chuyển động tự động bằng **Driver Expression**.
* [ ] Xuất nhanh một **playblast / viewport preview**.

---

# 2. Tạo vòm gạch bằng Curve

Đây là một trong những phần quan trọng nhất của bài.

Ý tưởng chính:

```text
Đường biên của vòm
        ↓
Separate thành object riêng
        ↓
Convert Mesh → Curve
        ↓
Đặt một viên gạch tại Origin
        ↓
Array Modifier
        ↓
Curve Modifier
        ↓
Các viên gạch chạy theo hình vòm
```

---

## 2.1. Tách đường tạo hình vòm

Trong **Edit Mode**, chọn các Edge tạo thành đường cong của vòm.

Có thể dùng:

```text
Alt + Click
```

để chọn một Edge Loop.

> Boolean đôi khi làm topology bị rối, khiến `Alt + Click` không chọn đúng toàn bộ loop. Khi đó hãy chọn thủ công các cạnh cần thiết.

Không cần giữ phần cạnh ở phía dưới.

Sau khi chọn xong:

```text
P
→ Selection
```

Blender sẽ tách các cạnh thành một object riêng.

---

## 2.2. Chuyển Mesh thành Curve

Quay về Object Mode.

Chuột phải:

```text
Convert
→ Curve
```

Bây giờ object không còn hoạt động giống Mesh thông thường nữa.

Khi vào Edit Mode, ta chủ yếu thao tác với:

```text
Control Points
```

thay vì:

```text
Vertex → Edge → Face
```

---

# 3. Chuẩn hóa Origin của Curve

Để Array + Curve hoạt động ổn định, vị trí Origin rất quan trọng.

Chọn Curve:

```text
Right Click
→ Set Origin
→ Origin to Geometry
```

Sau đó đặt 3D Cursor vào Origin:

```text
Shift + S
→ Cursor to Selected
```

hoặc tùy phiên bản Blender:

```text
Shift + S
→ Cursor to Active
```

Sơ đồ:

```text
Curve Geometry
      │
      ▼
[ Origin ]
      │
      ▼
  3D Cursor
```

---

# 4. Đặt viên gạch vào đúng Origin

Chọn một viên gạch đã tạo trước đó.

```text
Shift + S
→ Selection to Cursor
```

Viên gạch sẽ được chuyển đến vị trí 3D Cursor, tức Origin của Curve.

Điều này rất quan trọng vì **Curve Modifier phụ thuộc mạnh vào vị trí tương đối giữa object và Curve**.

---

# 5. Ẩn các object không cần thiết

Để dễ quan sát:

```text
H
```

Ẩn object đang chọn.

Hiện lại toàn bộ:

```text
Alt + H
```

Hoặc có thể dùng biểu tượng **Eye** trong Outliner.

---

# 6. Tạo dãy gạch bằng Array Modifier

Chọn viên gạch và thêm:

```text
Modifier
→ Array
```

Array tạo ra nhiều bản sao liên tiếp:

```text
[Gạch][Gạch][Gạch][Gạch][Gạch][Gạch]
```

Điều chỉnh:

* Count
* Relative Offset
* Scale của viên gạch

để kiểm soát số lượng viên gạch trên mái vòm.

---

# 7. Uốn dãy gạch bằng Curve Modifier

Tiếp tục thêm:

```text
Modifier
→ Curve
```

Trong:

```text
Curve Object
```

chọn Curve vòm vừa tạo.

Kết quả:

```text
Array ban đầu:

[] [] [] [] [] [] []


Sau Curve Modifier:

       []
    []    []
   []      []
  []        []
```

---

## 7.1. Khi Curve Modifier bị sai

Nếu gạch:

* chạy lệch;
* xoắn;
* nằm xa Curve;
* uốn theo hướng kỳ lạ;

hãy kiểm tra:

1. Origin của viên gạch.
2. Origin của Curve.
3. Rotation.
4. Scale.
5. Deform Axis trong Curve Modifier.

Nên Apply Scale khi cần:

```text
Ctrl + A
→ Scale
```

---

# 8. Điều chỉnh số lượng gạch

Nếu có quá nhiều gạch, có thể:

* giảm Count trong Array;
* tăng kích thước viên gạch.

Nếu viên gạch nhỏ:

```text
S
```

Scale lớn lên → cần ít viên hơn.

Nếu viên gạch lớn:

```text
S
```

Scale nhỏ xuống → cần nhiều viên hơn.

Mục tiêu là tạo nhịp gạch giống concept.

---

# 9. Chuyển kết quả Modifier thành Geometry

Khi đã hài lòng với mái vòm, có thể Apply modifier.

Một cách khác trong Blender mới:

```text
Object
→ Convert
→ Mesh
```

hoặc:

```text
Object
→ Apply
→ Visual Geometry to Mesh
```

Kết quả:

```text
Array + Curve
      ↓
Mesh thực
      ↓
Có thể Edit trực tiếp
```

---

# 10. Làm mái vòm bớt hoàn hảo

Stylized modeling thường không nên quá chính xác và đồng đều.

Sau khi chuyển thành Mesh:

```text
Tab
→ Edit Mode
```

Có thể chọn từng phần bằng:

```text
L
```

khi chuột đang đặt trên một island geometry.

Di chuyển nhẹ:

```text
G
```

hoặc scale:

```text
S
```

---

## 10.1. Random Selection

Có thể chọn ngẫu nhiên một số phần:

```text
Select
→ Select Random
```

Sau đó:

```text
G
```

dịch nhẹ chúng.

Hoặc:

```text
S
```

scale nhẹ.

Mục tiêu:

```text
Hoàn hảo
██████████████

        ↓ Random

██ ████ ██ ███ █
```

Tạo cảm giác gạch được đặt thủ công.

---

## 10.2. Individual Origins

Khi muốn mỗi viên gạch scale riêng:

```text
Transform Pivot Point
→ Individual Origins
```

Thay vì:

```text
     ● Pivot chung
     │
[] []│[] []
```

Blender sẽ dùng:

```text
●     ●     ●     ●
[]    []    []    []
```

cho từng viên.

Điều này rất hữu ích khi scale Random Selection.

---

# 11. Tạo cửa gỗ

Phần cửa có thể làm bằng một Cube mới.

```text
Shift + A
→ Mesh
→ Cube
```

Scale thành hình cửa:

```text
S
```

Giảm độ dày:

```text
S + trục
```

để cửa giống một tấm gỗ hơn.

---

# 12. Chia cửa thành các tấm ván

Thêm nhiều Loop Cut:

```text
Ctrl + R
```

Khoảng:

```text
5–6 phần
```

là đủ tùy kích thước cửa.

Sơ đồ:

```text
┌───────────────┐
│       │       │
│       │       │
│───────┼───────│
│       │       │
│       │       │
└───────────────┘
```

---

# 13. Làm các đường cắt thẳng

Nếu một hàng Vertex bị lệch, chọn chúng rồi:

```text
S
Z
0
```

Ví dụ muốn toàn bộ Vertex có cùng độ cao:

```text
S → Z → 0
```

Kết quả:

```text
Trước:

•       •
   •
      •

Sau:

•  •  •  •
────────────
```

> Khi làm thao tác này nên tắt Proportional Editing.

Tắt/bật:

```text
O
```

---

# 14. Tạo khe giữa các tấm ván

Chọn các Edge cần thiết.

Sau đó:

```text
Ctrl + B
```

để Bevel.

Một bevel nhỏ sẽ tạo cảm giác khe giữa những tấm ván:

```text
| Board |  | Board |  | Board |
          ↑
         khe
```

---

# 15. Làm cửa gỗ bất quy tắc

Để cửa không quá hoàn hảo:

1. Thêm một vài Edge.
2. Chọn một số Vertex.
3. Di chuyển nhẹ.

Ví dụ:

```text
G X
```

hoặc:

```text
G Y
```

Có thể dùng:

```text
Select Random
```

kết hợp với:

```text
Proportional Editing
```

để tạo gỗ cong nhẹ.

---

## Hiệu ứng mong muốn

```text
Quá hoàn hảo:

│ │ │ │ │
│ │ │ │ │
│ │ │ │ │


Stylized:

│ │  /│ │
│/│ │ │/
│ │ │/│ │
```

Không cần làm méo quá mạnh.

---

# 16. Shade Smooth

Sau khi hoàn thành:

```text
Right Click
→ Shade Smooth
```

hoặc:

```text
Shade Auto Smooth
```

tùy phiên bản Blender.

Tuy nhiên với gỗ stylized, không nên smooth quá mức khiến các cạnh biến mất.

---

# 17. Tạo phần mái nhô phía trước

Tiếp tục hoàn thiện mặt trước của ngôi nhà.

Chọn các Vertex/Edge cần thiết.

Nếu muốn chúng nằm trên một đường thẳng:

```text
S
Z
0
```

Sau đó chọn các Face:

```text
E
```

Extrude ra phía trước một đoạn nhỏ.

Kết quả:

```text
Tường
│
│───────┐
│       │ ← Overhang
│       │
```

Phần này tạo mái nhô và làm silhouette thú vị hơn.

---

# 18. Tạo mái che nhỏ

Thêm Cube:

```text
Shift + A
→ Cube
```

Scale thành một mặt phẳng dày mỏng vừa phải.

Đây sẽ là:

```text
mái che / protective roof
```

phía trước nhà.

---

# 19. Tạo các tấm ván trên mái

Thêm Edge Loop để chia object thành nhiều tấm.

```text
Ctrl + R
```

Sau đó chọn các phần và Extrude.

Có thể tiếp tục dùng:

```text
Ctrl + B
```

để tạo khe giữa các tấm gỗ.

---

# 20. Tạo độ sâu giữa các tấm ván

Chọn các Face cần lõm vào.

Có thể dùng:

```text
Alt + E
```

để mở nhóm lệnh Extrude nâng cao.

Sau đó đẩy một số Face vào trong:

```text
G
```

theo trục thích hợp.

Mục tiêu:

```text
┌────┐ ┌────┐
│    │ │    │
│    └─┘    │
│           │
```

tạo illusion các tấm gỗ riêng biệt.

---

# 21. Làm mái gỗ cong và lệch nhẹ

Một lần nữa sử dụng:

```text
Select Random
+
Proportional Editing
```

Di chuyển một vài Vertex rất nhẹ.

Stylized không có nghĩa là phá hình ngẫu nhiên.

Nguyên tắc:

```text
Cấu trúc lớn
    ↓
Phải hợp lý

Chi tiết nhỏ
    ↓
Có thể bất quy tắc
```

---

# 22. Thêm Bevel cho cạnh gỗ

Chọn cạnh:

```text
Ctrl + B
```

Thêm bevel nhỏ.

Bevel giúp cạnh bắt sáng tốt hơn khi thêm Material và Lighting.

---

# 23. Tạo các thanh chống mái

Tiếp theo thêm các Beam nhỏ để đỡ mái.

Có thể dùng Cube:

```text
Shift + A
→ Cube
```

Scale thành thanh gỗ.

Duplicate:

```text
Shift + D
```

---

## Nguyên tắc thiết kế

Không nên thêm chi tiết chỉ vì "chỗ này trống".

Hãy đặt câu hỏi:

> Thanh gỗ này đang đỡ phần nào của công trình?

Một cấu trúc hợp lý:

```text
        ROOF
━━━━━━━━━━━━━━━━
     ╲       ╱
      ╲     ╱
       ╲   ╱
        │ │
        │ │
       WALL
```

Chi tiết structural hợp lý sẽ khiến model đáng tin hơn.

---

# 24. Thêm đá ở các góc

Copy các khối đá đã tạo trước đó:

```text
Shift + D
```

Đặt tại góc nhà.

Có thể tạo đối xứng nhanh bằng cách scale âm:

```text
S
X
-1
```

hoặc tùy hướng object.

> Scale âm có thể làm đảo Normal. Nếu xảy ra lỗi shading, Apply Scale và Recalculate Normals.

---

# 25. Tạo bánh răng trang trí

Thêm Cylinder:

```text
Shift + A
→ Mesh
→ Cylinder
```

Ngay khi tạo, mở bảng:

```text
Adjust Last Operation
```

ở góc dưới trái.

Đặt:

```text
Vertices = 16
```

hoặc:

```text
20
24
```

Nên dùng số chẵn để dễ tạo pattern xen kẽ.

---

# 26. Tạo răng bánh răng

Trong Edit Mode, chọn các Face xen kẽ:

```text
Chọn
Bỏ
Chọn
Bỏ
Chọn
Bỏ
```

Sơ đồ:

```text
[1] [ ] [1] [ ] [1] [ ] [1] [ ]
```

Sau đó Extrude hoặc Scale chúng ra ngoài.

Có thể dùng:

```text
Select
→ Checker Deselect
```

để chọn xen kẽ nhanh hơn nếu topology phù hợp.

---

# 27. Tạo phần lõm của bánh răng

Chọn các Face cần thiết.

Dùng:

```text
I
```

Inset.

Sau đó:

```text
E
```

Extrude vào trong.

Kết quả:

```text
    ╱╲
 ──╯  ╰──
│   ○    │
 ──╮  ╭──
    ╲╱
```

---

# 28. Khoét các lỗ bằng Boolean

Tạo Cylinder nhỏ làm cutter.

Duplicate:

```text
Shift + D
```

tạo khoảng 4 cutter.

Sau đó chọn các cutter:

```text
Ctrl + J
```

Join chúng thành một object.

---

## Boolean workflow

Chọn bánh răng:

```text
Modifier
→ Boolean
```

Operation:

```text
Difference
```

Object:

```text
Hole_Cutters
```

Sau khi chắc chắn kết quả đúng:

```text
Apply
```

Xóa hoặc ẩn cutters.

---

# 29. Sửa Normals

Nếu shading bị lỗi sau Boolean:

```text
A
Alt + N
→ Recalculate Outside
```

Đây là thao tác rất hữu ích sau:

* Boolean;
* Mirror;
* Scale âm;
* chỉnh topology lớn.

---

# 30. Dùng 3D Cursor để đặt object chính xác

Chọn một Face:

```text
Shift + S
→ Cursor to Selected
```

Sau đó tạo:

```text
Shift + A
→ Cylinder
```

Object mới sẽ xuất hiện ngay tại vị trí Cursor.

Đây là cách rất nhanh để thêm:

* Bolt;
* screw;
* trục bánh răng;
* núm;
* decoration.

---

# 31. Tạo bảng hiệu

Tạo một Cube:

```text
Shift + A
→ Cube
```

Scale thành bảng.

Sau đó:

```text
Shift + A
→ Text
```

---

# 32. Chỉnh Text

Chọn Text:

```text
Tab
```

Nhập:

```text
WORKSHOP
```

Có thể đổi Font trong:

```text
Object Data Properties
→ Font
```

---

# 33. Tạo độ dày cho chữ

Trong Text Properties có thể dùng:

```text
Geometry
→ Extrude
```

để tăng độ dày.

Sau khi hài lòng:

```text
Right Click
→ Convert
→ Mesh
```

Bây giờ chữ trở thành geometry thông thường.

---

# 34. Căn chữ vào bảng

Đầu tiên đặt Origin của chữ:

```text
Right Click
→ Set Origin
→ Origin to Geometry
```

Sau đó dùng:

```text
Shift + S
```

để căn chữ và bảng theo Cursor/Active Object.

Cuối cùng kéo chữ ra trước một chút để tránh Z-fighting.

---

# 35. Làm chữ stylized

Có thể chọn một vài chữ riêng lẻ.

Sau đó:

```text
R
```

xoay nhẹ.

Hoặc:

```text
G
```

dịch nhẹ.

Kết quả có thể giống:

```text
W O R K S H O P
  ↗   ↘    ↗
```

Không nhất thiết mọi chữ phải nằm hoàn hảo trên một đường thẳng.

---

# 36. Tạo cờ lê trang trí

Có thể dựng nhanh từ hai Cylinder.

```text
Cylinder A
+
Cylinder B
```

Sau đó chỉnh Rotation và Scale.

Kết nối hai phần bằng:

```text
Bridge Edge Loops
```

---

## Workflow

```text
Cylinder
   +
Cylinder
   ↓
Bridge Edge Loops
   ↓
Boolean phần đầu cờ lê
   ↓
Bevel
   ↓
Wrench
```

---

# 37. Tạo đầu mở của cờ lê bằng Boolean

Tạo một object cutter.

Đặt vào phần đầu cờ lê.

```text
Boolean
→ Difference
```

Apply modifier.

Sau đó chỉnh topology nếu cần.

---

# 38. Bevel cờ lê

Chọn Edge:

```text
Ctrl + B
```

Nhưng phải chú ý các góc lõm.

Bevel quá lớn có thể:

```text
cắt xuyên mặt
↓
overlap
↓
shading lỗi
```

Do đó giữ Width nhỏ.

---

# 39. Hoàn thiện các props nhỏ

Các chi tiết như:

* đèn;
* hộp;
* đá;
* thanh gỗ;
* bậc thềm;
* đinh;
* núm;
* gác mái;

có thể được tạo từ những primitive đơn giản:

```text
Cube
Cylinder
Plane
```

Bài học ưu tiên khả năng tái sử dụng công cụ thay vì tạo từng chi tiết phức tạp.

---

# 40. Tạo bệ cho ngôi nhà

Thêm Cylinder:

```text
Shift + A
→ Cylinder
```

Scale thành một đế rộng.

Có thể dùng:

```text
Shade Auto Smooth
```

và:

```text
Bevel Modifier
```

để làm cạnh đẹp hơn.

---

# 41. Đưa bệ về tâm World

Đặt Cursor về World Origin:

```text
Shift + S
→ Cursor to World Origin
```

Sau đó căn bệ tới Cursor:

```text
Shift + S
→ Selection to Cursor
```

Hạ bệ xuống dưới ngôi nhà.

---

# 42. Parent toàn bộ ngôi nhà vào bệ

Chọn tất cả các thành phần của nhà.

Cuối cùng:

```text
Shift + Click
```

chọn bệ sao cho bệ là **Active Object**.

Sau đó:

```text
Ctrl + P
→ Object
→ Keep Transform
```

Hierarchy:

```text
        STAND
          │
 ┌────────┼────────┐
 │        │        │
House    Gear     Sign
 │
Props
```

Khi Stand xoay, toàn bộ ngôi nhà sẽ xoay theo.

---

# 43. Tạo chuyển động xoay tự động

Thay vì tạo keyframe thủ công, có thể dùng **Driver**.

Ở Rotation Z, thêm Driver rồi sử dụng Expression:

```python
frame * 0.1
```

Ý nghĩa:

```text
frame
  ↓
nhân với tốc độ
  ↓
Rotation Z
```

Ví dụ:

| Expression     | Kết quả           |
| -------------- | ----------------- |
| `frame * 0.02` | xoay rất chậm     |
| `frame * 0.05` | xoay chậm         |
| `frame * 0.1`  | tốc độ trung bình |
| `frame * 0.2`  | nhanh hơn         |
| `frame * 0.5`  | rất nhanh         |

> Nếu muốn **xoay chậm hơn `0.1`**, phải giảm xuống như `0.05`, không phải tăng lên `0.5`.

---

# 44. Sơ đồ hệ thống animation

```text
Timeline Frame
      │
      ▼
 frame * 0.05
      │
      ▼
 Rotation Z
      │
      ▼
     Stand
      │
      ▼
House + Props + Sign + Gear
      │
      ▼
Toàn bộ model xoay
```

Không cần tạo hàng trăm keyframe.

---

# 45. Thiết lập Playblast / Viewport Preview

Mục tiêu ở đây không phải Final Render.

Ta chỉ cần xuất video xem nhanh chuyển động.

Thiết lập:

```text
FPS = 30
```

Giảm timeline còn khoảng:

```text
1 → 120 frames
```

---

# 46. Tắt Overlay

Để video preview sạch:

```text
Viewport
→ Overlays
→ Off
```

Như vậy sẽ không còn:

* Grid;
* Bone;
* Origin;
* gizmo phụ;
* selection outline;
* hướng dẫn viewport.

---

# 47. Xuất Viewport Animation

Thiết lập Output:

```text
File Format
→ FFmpeg Video
```

Encoding:

```text
Container → MPEG-4
```

Đặt Output Path, ví dụ:

```text
/playblast/
    house_playblast_v001.mp4
```

Sau đó:

```text
View
→ Viewport Render Animation
```

Blender sẽ render trực tiếp viewport thành preview.

---

# 48. Playblast và Final Render khác nhau

### Preview / Playblast

Có thể dùng:

```text
FFmpeg → MP4
```

Ưu điểm:

* nhanh;
* xem animation ngay;
* file nhỏ;
* dễ chia sẻ.

---

### Final Render

Nên ưu tiên:

```text
PNG Sequence
hoặc
EXR Sequence
```

Sơ đồ:

```text
FINAL RENDER

Frame 001 → 001.png
Frame 002 → 002.png
Frame 003 → 003.png
...
Frame 120 → 120.png

        ↓

Ghép sequence

        ↓

MP4 / MOV
```

Ưu điểm quan trọng: nếu render bị crash ở frame 87, không cần render lại từ đầu.

---

# 49. Workflow tổng thể của bài

```text
HOUSE BLOCKOUT
      │
      ├── Arch Curve
      │      ├─ Separate
      │      ├─ Convert Curve
      │      ├─ Array
      │      └─ Curve Modifier
      │
      ├── Door
      │      ├─ Loop Cut
      │      ├─ Extrude
      │      ├─ Bevel
      │      └─ Random deformation
      │
      ├── Roof
      │      ├─ Boards
      │      ├─ Overhang
      │      └─ Support beams
      │
      ├── Decorations
      │      ├─ Stones
      │      ├─ Gear
      │      ├─ Sign
      │      └─ Wrench
      │
      └── Stand
             │
             ├─ Parent House
             ├─ Driver Rotation Z
             └─ Viewport Render
```

---

# 50. Các công cụ chính cần nhớ

| Công cụ              | Phím/Lệnh   | Ứng dụng                 |
| -------------------- | ----------- | ------------------------ |
| Separate             | `P`         | Tách geometry            |
| Select Linked        | `L`         | Chọn một geometry island |
| Hide                 | `H`         | Ẩn object/geometry       |
| Unhide               | `Alt + H`   | Hiện lại                 |
| Snap Menu            | `Shift + S` | Căn object/cursor        |
| Apply                | `Ctrl + A`  | Apply transforms         |
| Loop Cut             | `Ctrl + R`  | Chia geometry            |
| Extrude              | `E`         | Tạo geometry mới         |
| Extrude menu         | `Alt + E`   | Các kiểu Extrude         |
| Bevel                | `Ctrl + B`  | Bo cạnh                  |
| Proportional Editing | `O`         | Biến dạng mềm            |
| Duplicate            | `Shift + D` | Sao chép                 |
| Join                 | `Ctrl + J`  | Gộp object               |
| Parent               | `Ctrl + P`  | Tạo hierarchy            |
| Recalculate Normals  | `Alt + N`   | Sửa normals              |
| Array                | Modifier    | Tạo object lặp           |
| Curve                | Modifier    | Uốn geometry             |
| Boolean              | Modifier    | Cắt/gộp geometry         |
| Driver               | Expression  | Animation procedural     |

---

# 51. Nguyên tắc stylized quan trọng

Bài học sử dụng rất nhiều chi tiết bất quy tắc, nhưng cần phân biệt:

```text
Không phải:

Random = đẹp
```

Mà nên là:

```text
Hình khối chính rõ ràng
        +
Cấu trúc hợp lý
        +
Biến dạng nhỏ
        +
Chi tiết không đều
        =
Stylized believable
```

Ví dụ gỗ:

```text
Tốt:
│ │  │/ │ │
│/│ │  │ │

Không tốt:
╱ ╲│/╲ ╱╲
╲│╱╱ │╲
```

Biến dạng chỉ nên vừa đủ để phá sự hoàn hảo.

---

# 52. Bài thực hành

Hoàn thiện ngôi nhà dựa trên concept nhưng không cần sao chép tuyệt đối.

Yêu cầu tối thiểu:

* [ ] Hoàn thiện mái vòm bằng Array + Curve.
* [ ] Tạo cửa gỗ có nhiều tấm ván.
* [ ] Làm các tấm gỗ hơi bất quy tắc.
* [ ] Hoàn thiện mái che phía trước.
* [ ] Thêm các thanh chống hợp lý.
* [ ] Tạo ít nhất một bánh răng.
* [ ] Dùng Boolean để tạo lỗ trên bánh răng.
* [ ] Thêm bảng hiệu có Text.
* [ ] Tạo một prop riêng, chẳng hạn cờ lê.
* [ ] Tạo bệ cho ngôi nhà.
* [ ] Parent toàn bộ model vào bệ.
* [ ] Tạo Driver để bệ tự xoay.
* [ ] Xuất một Viewport Preview khoảng 120 frame.

---

# 53. Checklist hoàn thiện bài 014

### Modeling

* [ ] Silhouette của ngôi nhà rõ ràng.
* [ ] Mái vòm có nhịp gạch hợp lý.
* [ ] Gạch không xuyên nhau quá rõ.
* [ ] Cửa gỗ đọc được thành từng tấm.
* [ ] Các thanh chống mái có logic.
* [ ] Props không làm scene quá rối.

### Geometry

* [ ] Boolean không để lại artifact nghiêm trọng.
* [ ] Normals đúng hướng.
* [ ] Scale quan trọng đã được Apply.
* [ ] Bevel không tự cắt xuyên geometry.
* [ ] Origin được đặt hợp lý.

### Stylization

* [ ] Không có quá nhiều cạnh hoàn hảo.
* [ ] Gạch/gỗ có variation vừa phải.
* [ ] Randomness không phá silhouette.
* [ ] Chi tiết lớn → vừa → nhỏ có phân cấp.

### Scene

* [ ] House/Props/Ground được tổ chức rõ ràng.
* [ ] Toàn bộ nhà đã Parent vào Stand.
* [ ] Stand xoay được bằng Driver.
* [ ] Camera/Viewport đọc rõ silhouette.

### Preview

* [ ] Timeline khoảng 120 frame.
* [ ] FPS được thiết lập.
* [ ] Overlay đã tắt.
* [ ] Viewport Animation chạy đúng.
* [ ] Có file preview để kiểm tra model.

---

## 54. Kết quả cuối bài

Sau Part 3, model nên đạt trạng thái:

```text
Reference
   ↓
Blockout
   ↓
House Structure
   ↓
Arch / Door / Roof
   ↓
Wood + Stone details
   ↓
Gear / Sign / Wrench
   ↓
Stylized deformation
   ↓
Stand + Rotation
   ↓
Viewport Preview
   ↓
READY FOR
UV / MATERIAL / LIGHTING
```

> **Trọng tâm của bài không phải tạo một ngôi nhà hoàn hảo**, mà là luyện cách kết hợp những công cụ modeling cơ bản thành một asset stylized hoàn chỉnh: **Curve, Array, Boolean, Bevel, Proportional Editing, Origin/Snap và Driver**.

---

# Bài luyện tập

## Mục tiêu


## Đề bài


## Yêu cầu hoàn thành

- [ ] 
- [ ] 
- [ ] 

## Kết quả / lời giải


## Ghi chú
