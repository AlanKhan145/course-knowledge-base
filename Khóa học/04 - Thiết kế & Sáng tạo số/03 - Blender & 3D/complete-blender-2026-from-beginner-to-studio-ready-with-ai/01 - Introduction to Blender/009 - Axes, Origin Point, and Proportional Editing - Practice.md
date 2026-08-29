# 009 — Axes, Origin Point, and Proportional Editing

| Thuộc tính | Nội dung |
|---|---|
| **Phần** | 01 — Introduction to Blender |
| **Thời lượng** | 9:17 |
| **Chủ đề** | Global/Local axes, Transform Pivot Point, Origin, 3D Cursor, Snap và Proportional Editing |

---

## 1. Mục tiêu bài học

Sau bài này, bạn có thể:

- [ ] Phân biệt **Global** và **Local Transform Orientation**.
- [ ] Di chuyển, xoay và scale object theo đúng trục mong muốn.
- [ ] Hiểu **Origin Point** và vai trò của nó.
- [ ] Đặt Origin chính xác bằng **3D Cursor**.
- [ ] Đưa Origin trở lại tâm geometry.
- [ ] Hiểu các loại **Transform Pivot Point**.
- [ ] Dùng `Shift + S` để snap object, selection và 3D Cursor.
- [ ] Bật và sử dụng **Proportional Editing**.
- [ ] Thay đổi vùng ảnh hưởng bằng con lăn chuột.
- [ ] Phân biệt một số kiểu falloff như Smooth, Sphere, Root, Sharp và Random.

---

# 2. Tổng quan

Bài này tập trung vào bốn nhóm công cụ rất quan trọng trong Blender:

```text
Transform Orientation
        │
        ├── Global
        ├── Local
        └── View
             ↓
         Điều khiển trục

Origin + 3D Cursor
             ↓
      Xác định tâm biến đổi

Transform Pivot Point
             ↓
   Xác định điểm xoay/scale

Proportional Editing
             ↓
      Biến dạng có falloff
```

Đây đều là những kiến thức sẽ xuất hiện liên tục khi modeling.

---

# 3. Hệ trục tọa độ trong Blender

Blender sử dụng ba trục:

| Trục | Màu mặc định | Ý nghĩa thường gặp |
|---|---|---|
| `X` | Đỏ | Trái ↔ Phải |
| `Y` | Xanh lá | Trước ↔ Sau |
| `Z` | Xanh dương | Dưới ↔ Trên |

Sơ đồ:

```text
           Z
           ↑
           │
           │
           ●──────→ X
          /
         /
        Y
```

Khi thao tác với:

```text
G = Move
R = Rotate
S = Scale
```

ta có thể khóa theo trục bằng:

```text
G + X
G + Y
G + Z

R + X
R + Y
R + Z

S + X
S + Y
S + Z
```

---

# 4. Global Orientation

**Global** là hệ trục của toàn bộ World.

Ví dụ:

```text
Object chưa xoay

      Z
      ↑
      │
   ┌───────┐
   │ Cube  │
   └───────┘
```

Nếu xoay object đi 45°:

```text
      Z
      ↑
      │
       ╱────╲
      ╱ Cube ╲
```

Global Axis vẫn không đổi.

Tức là:

```text
G → Z
```

luôn di chuyển object theo trục `Z` của World.

---

# 5. Local Orientation

**Local** sử dụng hệ trục riêng của object.

Khi object đã xoay:

```text
World Z
  ↑
  │
  │       Local Z
  │          ↗
  │        ╱
  │      ╱ Object
```

Nếu chọn:

```text
Transform Orientation → Local
```

thì Move/Rotate/Scale sẽ dựa trên hướng hiện tại của object.

---

# 6. Global và Local khác nhau như thế nào?

Ví dụ object đã xoay 45°:

```text
GLOBAL

          Z
          ↑
          │
        ╱ Object
       ╱
```

`G + Z`:

```text
Object đi thẳng lên theo World Z.
```

Trong Local:

```text
LOCAL

        Local Z
          ↗
        ╱
      ╱ Object
```

Object sẽ di chuyển theo hướng trục riêng.

---

# 7. Chuyển nhanh từ Global sang Local

Không nhất thiết phải đổi Transform Orientation trên thanh công cụ.

Ví dụ:

```text
G → Z
```

→ khóa theo **Global Z**.

Nhấn `Z` thêm lần nữa:

```text
G → Z → Z
```

→ chuyển sang **Local Z**.

Tương tự:

```text
G → X → X
G → Y → Y

R → X → X
R → Y → Y
R → Z → Z
```

Đây là một shortcut rất hữu ích khi modeling.

---

# 8. Ví dụ thực tế

Giả sử một thanh đã xoay:

```text
          ╱
         ╱ Object
        ╱
```

Muốn di chuyển theo World:

```text
G
Z
```

Muốn di chuyển theo trục riêng của object:

```text
G
Z
Z
```

Workflow:

```text
Object xoay
    ↓
G + Z
    ↓
Global Z

Object xoay
    ↓
G + Z + Z
    ↓
Local Z
```

---

# 9. View Orientation

Ngoài Global và Local còn có:

```text
View
```

Hệ trục được tính theo hướng nhìn của camera viewport.

Có thể hình dung:

```text
           View Up
              ↑
              │
              │
   ←──────── Camera View ────────→
              │
```

Các trục sẽ phụ thuộc vào góc bạn đang nhìn object.

Đây là chế độ khá đặc thù và thường ít dùng hơn Global/Local trong modeling cơ bản.

---

# 10. Origin Point là gì?

Origin Point là chấm màu cam đại diện cho **tâm transform của object**.

Ví dụ:

```text
┌──────────────┐
│              │
│      ●       │ ← Origin
│              │
└──────────────┘
```

Origin ảnh hưởng đến:

- Rotate;
- Scale;
- một số modifier;
- parenting;
- animation;
- snapping;
- transform.

---

# 11. Vì sao vị trí Origin quan trọng?

Ví dụ một object hình cánh cửa.

Nếu Origin nằm giữa cửa:

```text
┌──────────────┐
│      ●       │
│              │
│              │
└──────────────┘
       ↑
     Origin
```

Khi:

```text
R → Z
```

cánh cửa sẽ quay quanh tâm:

```text
      ↺
     ●
```

Điều này không giống cửa thật.

---

# 12. Origin đúng cho cánh cửa

Origin nên nằm tại bản lề:

```text
●──────────────┐
│              │
│    Door      │
│              │
└──────────────┘
↑
Origin
```

Khi:

```text
R → Z
```

kết quả:

```text
●────── Door
 \
  \
   \
```

Cánh cửa sẽ mở đúng quanh bản lề.

---

# 13. 3D Cursor

**3D Cursor** là một điểm tham chiếu đặc biệt trong scene.

Nó có thể dùng để:

- tạo object;
- đặt Origin;
- làm pivot;
- snap object;
- snap selection;
- định vị chính xác một điểm.

Biểu diễn:

```text
        ╱│╲
      ───┼───
        ╲│╱
        3D Cursor
```

---

# 14. Di chuyển 3D Cursor thủ công

Có thể sử dụng công cụ 3D Cursor trong Toolbar.

Hoặc tùy keymap, dùng tổ hợp chuột để đặt Cursor trực tiếp trong viewport.

Tuy nhiên cách chính xác hơn là sử dụng:

```text
Shift + S
```

để mở **Snap Menu**.

---

# 15. Đặt 3D Cursor chính xác vào Vertex

Giả sử muốn Origin nằm đúng tại một vertex.

### Bước 1 — Vào Edit Mode

```text
Tab
```

### Bước 2 — Chọn vertex

```text
1
```

Chọn vertex mong muốn.

Ví dụ:

```text
●─────────────●
│             │
│             │
●─────────────●
↑
Vertex được chọn
```

### Bước 3 — Đưa Cursor đến Selection

```text
Shift + S
```

chọn:

```text
Cursor to Selected
```

Kết quả:

```text
◎─────────────●
│             │
│             │
●─────────────●
↑
3D Cursor
```

---

# 16. Đưa Origin tới 3D Cursor

Quay về Object Mode:

```text
Tab
```

Sau đó:

```text
Right Click
→ Set Origin
→ Origin to 3D Cursor
```

Kết quả:

```text
●─────────────┐
│             │
│    Door     │
│             │
└─────────────┘
↑
Origin
```

Object giờ sẽ Rotate/Scale quanh điểm này.

---

# 17. Đưa Origin trở lại Geometry

Nếu muốn đưa Origin về tâm object:

```text
Right Click
→ Set Origin
→ Origin to Geometry
```

Ví dụ:

```text
Trước:

●─────────────┐
│             │
│             │
└─────────────┘


Sau:

┌─────────────┐
│      ●      │
│             │
└─────────────┘
```

---

# 18. Workflow đặt Origin chính xác

```text
Chọn object
     ↓
Tab → Edit Mode
     ↓
Chọn Vertex / Edge / Face
     ↓
Shift + S
     ↓
Cursor to Selected
     ↓
Tab → Object Mode
     ↓
Right Click
     ↓
Set Origin
     ↓
Origin to 3D Cursor
```

Đây là workflow rất hữu ích cho:

- cánh cửa;
- bánh xe;
- nắp hộp;
- khớp máy;
- tay cầm;
- rig cơ khí;
- animation xoay.

---

# 19. Transform Pivot Point

Pivot Point quyết định:

> **Selection sẽ xoay hoặc scale quanh điểm nào?**

Các chế độ chính:

| Pivot | Ý nghĩa |
|---|---|
| Median Point | Trung tâm trung bình của vùng chọn |
| Bounding Box Center | Tâm bounding box |
| Individual Origins | Mỗi object tự transform quanh origin của nó |
| Active Element | Dùng object/element active làm tâm |
| 3D Cursor | Dùng vị trí 3D Cursor |

---

# 20. Median Point

Nếu chọn hai object:

```text
□          □
```

Median Point nằm giữa:

```text
□     ●     □
      ↑
    Pivot
```

Khi:

```text
R → Z
```

hai object sẽ quay quanh điểm giữa.

```text
     ↖   ↗
       ●
     ↙   ↘
```

---

# 21. Individual Origins

Nếu chọn:

```text
Individual Origins
```

mỗi object xoay quanh Origin riêng.

Ví dụ:

```text
   ↺          ↺
  ●□         ●□
```

thay vì quay quanh một tâm chung.

Đặc biệt hữu ích khi:

- xoay nhiều bánh xe;
- scale nhiều face riêng biệt;
- xoay nhiều cánh;
- chỉnh nhiều object giống nhau.

---

# 22. Active Element

Trong Blender, khi chọn nhiều object:

```text
Object A
Object B
Object C
```

object được chọn cuối cùng là **Active Object**.

Nó thường có outline sáng hơn.

Ví dụ:

```text
□      □      ▣
               ↑
          Active Object
```

Nếu Pivot Point là:

```text
Active Element
```

thì các object khác transform quanh Origin của Active Object.

Ví dụ:

```text
□     □     ●▣
            ↑
          Pivot
```

---

# 23. Đổi Active Object

Khi đang chọn nhiều object:

```text
Shift + Click
```

vào object mong muốn để thay đổi Active Object.

Ví dụ:

```text
Trước:

□     □     ▣
            ↑ Active


Sau Shift + Click:

□     ▣     □
      ↑ Active
```

Pivot cũng thay đổi theo.

---

# 24. Pivot tại 3D Cursor

Chọn:

```text
Transform Pivot Point
→ 3D Cursor
```

mọi rotation/scale sẽ dùng Cursor làm tâm.

Ví dụ:

```text
◎                □
↑
3D Cursor
```

Khi Rotate:

```text
        ↗ □
      /
     /
◎───
```

Object xoay theo quỹ đạo quanh Cursor.

Đây là kỹ thuật rất hữu ích cho animation.

---

# 25. So sánh các Pivot Point

```text
Median Point
□    ●    □

Individual Origins
●□       ●□

Active Element
□       ●□

3D Cursor
◎              □
```

---

# 26. Snapping

Biểu tượng nam châm:

```text
🧲
```

là **Snapping**.

Khi bật snapping, object có thể tự hút vào:

- Increment;
- Vertex;
- Edge;
- Face;
- Volume;
- Grid.

---

# 27. Increment Snap

Nếu:

```text
Snap To → Increment
```

khi Move:

```text
G
```

object sẽ di chuyển theo từng bước của grid.

Ví dụ:

```text
Grid:

+---+---+---+---+
|   |   |   |   |
+---+---+---+---+
        ↑
   Object snap
```

---

# 28. Vertex Snap

Nếu chọn:

```text
Snap To → Vertex
```

có thể kéo một điểm/object và snap chính xác vào vertex khác.

Ví dụ:

```text
Object A          Object B

●──────           ─────●
    \                 /
     \_______________/
          Snap
```

Rất hữu ích khi cần ghép geometry chính xác.

---

# 29. Shift + S — Snap Menu

Một cách rất nhanh khác là:

```text
Shift + S
```

Menu thường chứa các lệnh như:

```text
Cursor to World Origin
Cursor to Selected
Cursor to Active

Selection to Cursor
Selection to Cursor (Keep Offset)
Selection to Active
Selection to Grid
```

---

# 30. Selection to Active

Ví dụ có hai object:

```text
Object A             Object B
   □                     ▣
                         ↑
                       Active
```

Chọn cả hai, đảm bảo Object B là Active.

Sau đó:

```text
Shift + S
→ Selection to Active
```

Object A sẽ được chuyển tới vị trí Object B.

```text
Trước:

□                 ▣


Sau:

                 □▣
```

Đây là một cách nhanh để align object.

---

# 31. Proportional Editing

Proportional Editing cho phép thao tác một vertex nhưng đồng thời ảnh hưởng đến các vertex xung quanh.

Bật bằng:

```text
O
```

hoặc click biểu tượng:

```text
Proportional Editing
```

trên header của viewport.

---

# 32. Không dùng Proportional Editing

Giả sử plane:

```text
────────●────────
```

chọn một vertex và:

```text
G → Z
```

kết quả:

```text
        ●
        │
────────┘
```

Chỉ vertex đó di chuyển, gây chuyển tiếp gắt.

---

# 33. Khi bật Proportional Editing

Bật:

```text
O
```

sau đó:

```text
G → Z
```

các vertex xung quanh cũng bị ảnh hưởng:

```text
             ●
          ╱     ╲
       ╱           ╲
──────               ──────
```

Kết quả mềm và tự nhiên hơn.

---

# 34. Influence Radius

Khi đang thực hiện:

```text
G
R
S
```

với Proportional Editing, Blender hiển thị một vòng tròn:

```text
        ╭─────────────╮
      ╱                 ╲
     │        ●          │
      ╲                 ╱
        ╰─────────────╯
```

Đây là **Influence Radius**.

Các vertex nằm trong vòng tròn sẽ chịu ảnh hưởng.

---

# 35. Điều chỉnh bán kính ảnh hưởng

Trong lúc transform:

```text
Mouse Wheel
```

để thay đổi radius.

### Wheel lên

Thông thường:

```text
Radius nhỏ hơn
```

### Wheel xuống

```text
Radius lớn hơn
```

Tùy hướng thiết lập scroll của hệ điều hành nhưng nguyên tắc là:

> Cuộn wheel để tăng hoặc giảm vùng ảnh hưởng.

---

# 36. Không nhìn thấy vòng tròn Proportional Editing

Đôi khi radius quá lớn:

```text
       ┌─────────────────────┐
       │                     │
       │      Viewport       │
       │                     │
       └─────────────────────┘

Circle nằm ngoài viewport
```

nên tưởng Proportional Editing không hoạt động.

Hãy:

```text
Scroll Mouse Wheel
```

để giảm radius.

Ngoài ra có thể nhìn thông số:

```text
Proportional Size
```

ở góc trên bên trái khi transform.

---

# 37. Falloff là gì?

Falloff xác định mức độ ảnh hưởng giảm dần từ điểm đang chọn ra bên ngoài.

Khái niệm:

```text
Selected Vertex
      ●
      │
100%  │
      │
  ↓   │
70%
  ↓
40%
  ↓
10%
  ↓
0%
```

Mỗi kiểu Falloff có đường cong khác nhau.

---

# 38. Smooth Falloff

Đây là chế độ phổ biến nhất.

```text
       ●
     ╱   ╲
   ╱       ╲
 ╱           ╲
```

Tạo chuyển tiếp mềm.

Phù hợp với:

- terrain;
- organic modeling;
- deformation;
- tạo gò;
- uốn surface.

---

# 39. Sphere Falloff

Sphere tạo profile gần giống mặt cầu.

```text
       ●
    ╭─────╮
  ╭         ╮
╭             ╮
```

Có thể dùng để:

- tạo khối phồng;
- dome;
- má;
- vùng bo tròn;
- bề mặt dạng cầu.

---

# 40. Root Falloff

Root tạo chuyển tiếp khác Smooth, thường giữ độ ảnh hưởng cao hơn ở khu vực gần vùng giữa trước khi giảm mạnh ở rìa.

Minh họa tương đối:

```text
       ●
      ╱ ╲
    ╱     ╲
___╱       ╲___
```

Hữu ích khi cần deformation mạnh nhưng vẫn khá mượt.

---

# 41. Sharp Falloff

Sharp cho profile nhọn hơn.

```text
        ●
       ╱│╲
      ╱ │ ╲
_____/  │  \_____
```

Phù hợp khi muốn:

- đỉnh nhọn;
- gò sắc;
- spike;
- deformation tập trung.

---

# 42. Random Falloff

Random tạo ảnh hưởng ngẫu nhiên lên các vertex trong radius.

Ví dụ plane ban đầu:

```text
──────────────────────
```

sau khi:

```text
O
→ Random
→ G
→ Z
```

có thể thành:

```text
──╱\___╱──╲_╱\___╲────
```

Tạo surface không đều.

Phù hợp với:

- mặt đất;
- đá;
- terrain;
- bề mặt tự nhiên;
- rough surface.

---

# 43. Ví dụ tạo mặt đất bằng Random Falloff

### Bước 1

Tạo Plane:

```text
Shift + A
→ Mesh
→ Plane
```

### Bước 2

Subdivide nhiều lần.

Có thể dùng:

```text
Right Click
→ Subdivide
```

hoặc thêm topology phù hợp.

### Bước 3

Chọn một hoặc nhiều vertex.

### Bước 4

Bật:

```text
O
```

### Bước 5

Chọn:

```text
Random Falloff
```

### Bước 6

Di chuyển:

```text
G → Z
```

và thay đổi radius bằng wheel.

Kết quả:

```text
             /\        _
       ___ /   \__   _/ \_
______/          \_/      \____
```

---

# 44. Ví dụ tạo giọt nước từ UV Sphere

Proportional Editing rất hữu ích với organic modeling.

### Bước 1 — Tạo Sphere

```text
Shift + A
→ Mesh
→ UV Sphere
```

### Bước 2 — Vào Edit Mode

```text
Tab
```

### Bước 3 — Chọn đỉnh trên cùng

```text
1
```

chọn top vertex.

### Bước 4 — Bật Proportional Editing

```text
O
```

### Bước 5 — Di chuyển lên

```text
G
Z
```

### Bước 6 — Điều chỉnh radius

```text
Mouse Wheel
```

Kết quả:

```text
        ●
       / \
      /   \
     /     \
    /       \
   /         \
  (           )
   \         /
    \_______/
```

Sphere dần trở thành dạng giọt nước.

---

# 45. Duplicate object để so sánh Falloff

Có thể tạo nhiều bản sao:

```text
Shift + D
```

sau đó khóa trục:

```text
X
```

hoặc:

```text
Y
```

Ví dụ:

```text
Smooth      Sphere       Sharp       Random

   /\         ___           /\        _/\_/\
 _/  \_     /     \       _/  \_    /      \_
```

Cách này giúp dễ quan sát khác biệt giữa các Falloff.

---

# 46. Duplicate Object

Shortcut:

```text
Shift + D
```

sau đó:

```text
X
Y
Z
```

để khóa hướng.

Ví dụ:

```text
Shift + D
X
```

→ tạo bản sao và chỉ di chuyển theo X.

Workflow:

```text
Object
  ↓
Shift + D
  ↓
Duplicate
  ↓
X / Y / Z
  ↓
Move theo trục
```

---

# 47. Frame Selected

Nếu object quá nhỏ hoặc nằm xa viewport:

```text
Numpad .
```

sẽ đưa view tập trung vào selection.

Ví dụ:

```text
Scene lớn

             tiny object ●


Numpad .


       ┌───────────┐
       │     ●     │
       │  Object   │
       └───────────┘
```

Rất hữu ích khi modeling chi tiết.

---

# 48. Workflow Proportional Editing

```text
Chọn Object
     ↓
Tab
     ↓
Edit Mode
     ↓
Chọn Vertex/Edge/Face
     ↓
O
     ↓
Bật Proportional Editing
     ↓
Chọn Falloff
     ↓
G / R / S
     ↓
Mouse Wheel
     ↓
Điều chỉnh Radius
     ↓
Left Click
     ↓
Xác nhận
```

---

# 49. Global/Local + Origin + Pivot khác nhau ra sao?

Ba khái niệm này rất dễ nhầm.

## Transform Orientation

Trả lời:

> **Transform diễn ra theo hướng nào?**

Ví dụ:

```text
Global
Local
View
```

---

## Origin

Trả lời:

> **Tâm riêng của object nằm ở đâu?**

Ví dụ:

```text
      ●
   Object
```

---

## Pivot Point

Trả lời:

> **Selection đang transform quanh điểm nào?**

Ví dụ:

```text
Median
Individual Origins
Active Element
3D Cursor
```

Sơ đồ tổng hợp:

```text
                 TRANSFORM

        Hướng                    Tâm
          │                       │
          │                       │
 Transform Orientation       Pivot Point
          │                       │
   ┌──────┼──────┐         ┌─────┼────────┐
 Global Local View      Median Active Cursor
                               │
                            Origin
```

---

# 50. Ví dụ tổng hợp — Cánh cửa

Mục tiêu:

> Đặt Origin ở bản lề rồi xoay cửa theo Local Axis.

### Bước 1

Chọn Door.

### Bước 2

```text
Tab
```

### Bước 3

Chọn vertex/edge tại bản lề.

### Bước 4

```text
Shift + S
→ Cursor to Selected
```

### Bước 5

```text
Tab
```

### Bước 6

```text
Right Click
→ Set Origin
→ Origin to 3D Cursor
```

### Bước 7

Nếu Door bị xoay trong World:

```text
R
Z
Z
```

để Rotate theo Local Z nếu phù hợp.

Kết quả:

```text
●───────────── Door đóng
 \
  \
   \────────── Door mở
```

---

# 51. Thực hành chính

## Bài tập 1 — Global và Local Axis

1. Tạo Cube.
2. Rotate:

```text
R
X
45
Enter
```

3. Thử:

```text
G
Z
```

4. Undo.
5. Thử:

```text
G
Z
Z
```

6. Quan sát sự khác biệt giữa Global và Local.

---

## Bài tập 2 — Đặt Origin ở chân object

Tạo một object dạng thanh đứng:

```text
      ┌─────┐
      │     │
      │     │
      │     │
      └─────┘
```

Mục tiêu:

```text
      ┌─────┐
      │     │
      │     │
      │     │
      ●─────┘
      ↑
    Origin
```

Thực hiện:

```text
Tab
→ chọn vertex/edge dưới
→ Shift + S
→ Cursor to Selected
→ Tab
→ Right Click
→ Set Origin
→ Origin to 3D Cursor
```

Sau đó thử:

```text
R
```

để kiểm tra tâm xoay.

---

## Bài tập 3 — Proportional Editing

1. Tạo Plane.
2. Subdivide nhiều lần.
3. Chọn vertex ở giữa.
4. Bật:

```text
O
```

5. Chọn:

```text
Smooth
```

6. Thực hiện:

```text
G
Z
```

7. Cuộn wheel để thay đổi bán kính.

Mục tiêu:

```text
Trước:

────────────────────────


Sau:

            ●
         ╱     ╲
      ╱           ╲
─────               ─────
```

---

# 52. Bài tập nâng cao

Tạo bốn bản sao của cùng một plane:

```text
Shift + D
X
```

Áp dụng:

```text
Plane 1 → Smooth
Plane 2 → Sphere
Plane 3 → Sharp
Plane 4 → Random
```

So sánh hình dạng:

```text
Smooth        Sphere        Sharp          Random

    ●           ___            ●          ●  ●
  ╱   ╲       ╱     ╲         ╱ ╲       ╱ \/ ╲
╱       ╲   ╱         ╲    __╱   ╲__  _╱      ╲_
```

---

# 53. Các lỗi thường gặp

## Object di chuyển sai hướng

Ví dụ bạn muốn đi theo trục của object nhưng:

```text
G + Z
```

lại đi theo World.

### Cách sửa

Dùng:

```text
G
Z
Z
```

hoặc đổi Transform Orientation:

```text
Global → Local
```

---

## Door vẫn xoay quanh giữa

Nguyên nhân:

```text
Origin vẫn ở giữa geometry.
```

Cách sửa:

```text
Cursor to Selected
→ Origin to 3D Cursor
```

---

## Origin không nằm chính xác

Không nên đặt 3D Cursor bằng mắt nếu yêu cầu độ chính xác cao.

Nên dùng:

```text
Edit Mode
→ Select Vertex/Edge/Face
→ Shift + S
→ Cursor to Selected
```

---

## Proportional Editing làm ảnh hưởng quá nhiều geometry

Nguyên nhân:

```text
Influence Radius quá lớn.
```

Cách sửa:

```text
Mouse Wheel
```

để giảm radius.

---

## Không thấy vòng tròn Proportional Editing

Có thể radius đang lớn hơn cả viewport.

Tiếp tục cuộn wheel và nhìn:

```text
Proportional Size
```

ở góc viewport.

---

## Proportional Editing vẫn bật ngoài ý muốn

Đây là lỗi rất phổ biến.

Sau khi chỉnh xong hãy nhấn:

```text
O
```

để tắt.

Nếu quên, lần Move tiếp theo có thể kéo theo hàng loạt vertex xung quanh.

---

# 54. Ghi nhớ nhanh

```text
G / R / S
    │
    └── Transform


X / Y / Z
    │
    └── Khóa trục


G + Z + Z
    │
    └── Local Z


Origin
    │
    └── Tâm riêng của Object


Shift + S
    │
    └── Snap / Cursor Menu


Origin to 3D Cursor
    │
    └── Đưa Origin tới Cursor


Origin to Geometry
    │
    └── Origin về tâm Mesh


O
    │
    └── Proportional Editing


Mouse Wheel
    │
    └── Influence Radius
```

---

# 55. Cheat Sheet

| Mục đích | Thao tác |
|---|---|
| Move | `G` |
| Rotate | `R` |
| Scale | `S` |
| Khóa trục | `X / Y / Z` |
| Local Axis nhanh | Nhấn cùng trục lần thứ hai |
| Duplicate | `Shift + D` |
| Snap Menu | `Shift + S` |
| Proportional Editing | `O` |
| Influence Radius | Mouse Wheel |
| Focus Selection | `Numpad .` |
| Tìm lệnh | `F3` |
| Origin về Geometry | `Set Origin → Origin to Geometry` |
| Origin tới Cursor | `Set Origin → Origin to 3D Cursor` |

---

# 56. Checklist

- [ ] Phân biệt được **Global** và **Local Orientation**.
- [ ] Biết `G/R/S + X/Y/Z` để khóa trục.
- [ ] Biết nhấn trục lần thứ hai để dùng Local Axis.
- [ ] Hiểu Origin Point là gì.
- [ ] Đặt được Origin tại bản lề/chân object.
- [ ] Dùng được `Shift + S → Cursor to Selected`.
- [ ] Dùng được `Origin to 3D Cursor`.
- [ ] Dùng được `Origin to Geometry`.
- [ ] Phân biệt Median Point, Individual Origins và Active Element.
- [ ] Biết dùng 3D Cursor làm Pivot.
- [ ] Biết cơ chế cơ bản của Snapping.
- [ ] Dùng được `Selection to Active`.
- [ ] Bật/tắt Proportional Editing bằng `O`.
- [ ] Điều chỉnh được Influence Radius bằng Mouse Wheel.
- [ ] Phân biệt được Smooth, Sphere, Root, Sharp và Random Falloff.
- [ ] Tạo được deformation mềm bằng Proportional Editing.

---

# 57. Tóm tắt bài học

Có thể gom toàn bộ bài thành bốn câu hỏi:

```text
1. Object biến đổi theo hướng nào?
   → Transform Orientation
   → Global / Local / View

2. Tâm riêng của object ở đâu?
   → Origin Point

3. Selection xoay hoặc scale quanh đâu?
   → Transform Pivot Point

4. Những vertex xung quanh bị ảnh hưởng bao nhiêu?
   → Proportional Editing + Falloff
```

Workflow quan trọng nhất:

```text
Đặt đúng Orientation
        ↓
Đặt đúng Origin
        ↓
Chọn đúng Pivot
        ↓
Transform
        ↓
Bật Proportional Editing nếu cần
        ↓
Điều chỉnh Falloff + Radius
        ↓
Tạo hình chính xác và tự nhiên
```

Khi hiểu rõ **Global/Local Axis, Origin, Pivot và Proportional Editing**, bạn sẽ kiểm soát được object và mesh tốt hơn rất nhiều, đặc biệt khi bắt đầu bước sang các bài modeling thực tế.

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
