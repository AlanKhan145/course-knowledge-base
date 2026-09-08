# 004 — Understanding and Transforming Objects

## Hiểu và biến đổi Object trong Blender

| Thuộc tính        | Nội dung                                                                    |
| ----------------- | --------------------------------------------------------------------------- |
| **Section**       | Section 01 — Getting Started with Blender                                   |
| **Bài học**       | Understanding and Transforming Objects                                      |
| **Loại nội dung** | Video lecture                                                               |
| **Thời lượng**    | 11:29                                                                       |
| **Ngôn ngữ**      | English                                                                     |
| **Chủ đề chính**  | Object, Transform, Origin, Pivot Point, Duplicate, Instance, Snap, Viewport |

---

## 1. Tổng quan bài học

Bài học giới thiệu cách Blender quản lý **Object** và cách thực hiện các phép biến đổi cơ bản:

* **Move** — di chuyển.
* **Rotate** — xoay.
* **Scale** — thay đổi kích thước.
* Làm việc với **Object Origin**.
* Thay đổi **Transform Pivot Point**.
* Theo dõi Transform trong **N Panel**.
* **Apply Transform** bằng `Ctrl + A`.
* Phân biệt **Object** và **Mesh Data**.
* Phân biệt:

  * Duplicate thông thường — `Shift + D`.
  * Linked Duplicate / Instance — `Alt + D`.
* Sử dụng **Snapping**.
* Điều chỉnh **Grid**, **Overlay**, **Wireframe**, **X-Ray**.
* Làm quen các chế độ hiển thị của Viewport.

---

# 2. Object trong Blender là gì?

Trong ví dụ của bài học, toàn bộ bông hoa được Blender xem là một **Object**.

Một Object có thể chứa nhiều loại dữ liệu khác nhau, chẳng hạn:

* Mesh
* Curve
* Camera
* Light
* Armature
* Text
* Empty

Đối với bài học này, Object đang chứa **Mesh Data**.

```text
Object: Flower
│
├── Transform
│   ├── Location
│   ├── Rotation
│   └── Scale
│
├── Origin
│
└── Mesh Data
    └── flower.002
```

Điểm quan trọng:

> **Object và Mesh Data không phải là cùng một thứ.**

Một Object có thể được xem như một "container" chứa Transform và tham chiếu đến dữ liệu hình học.

---

# 3. Chọn Object

Blender cung cấp nhiều phương thức lựa chọn Object.

Các kiểu được nhắc đến trong bài:

* **Tweak**
* **Select Box**
* **Select Circle**
* **Select Lasso**

### Tweak

Cho phép click trực tiếp lên Object để chọn.

Đây là kiểu lựa chọn thuận tiện nhất cho thao tác thông thường.

### Lasso Select

Cho phép vẽ vùng tự do để chọn nhiều Object.

### Circle Select

Sử dụng vùng hình tròn để lựa chọn các thành phần/Object mà con trỏ đi qua.

> **Lưu ý:** transcript của bài có nhắc phím `D` để hiển thị toolbox. Đây có thể là lỗi phiên âm hoặc shortcut riêng của phiên bản/course. Trong quá trình thực hành nên kiểm tra shortcut trực tiếp trong phiên bản Blender đang sử dụng.

---

# 4. Object Origin

Mỗi Object có một **Origin**.

Trong Viewport, Origin thường được biểu diễn bằng một chấm nhỏ.

```text
        Mesh
    ┌───────────┐
    │           │
    │     ●     │
    │   Origin  │
    │           │
    └───────────┘
```

Origin đóng vai trò cực kỳ quan trọng đối với:

* Rotation.
* Scale.
* Modifier.
* Parent.
* Animation.
* Instancing.
* Transformation.

Ví dụ, khi xoay Object:

```text
Object
   │
   ▼
●───────────►
Origin

      ↓ Rotate

        ╱ Object
       ╱
      ●
   Origin
```

Object mặc định sẽ xoay quanh Origin của chính nó.

---

# 5. Ba Transform cơ bản

Transform của Object gồm:

$$
Transform = Location + Rotation + Scale
$$

Ba thao tác quan trọng nhất:

| Transform       | Shortcut | Chức năng           |
| --------------- | -------: | ------------------- |
| **Move / Grab** |      `G` | Di chuyển Object    |
| **Rotate**      |      `R` | Xoay Object         |
| **Scale**       |      `S` | Thay đổi kích thước |

---

# 6. Move — Di chuyển Object

Có thể chọn Move Tool trên Toolbar hoặc sử dụng:

```text
G
```

Sau khi nhấn `G`, Object có thể được di chuyển tự do.

## Khóa theo trục

```text
G → X
G → Y
G → Z
```

Ví dụ:

```text
G → X
```

chỉ cho phép Object di chuyển trên trục X.

### Sơ đồ

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

| Shortcut | Chuyển động |
| -------- | ----------- |
| `G X`    | Theo trục X |
| `G Y`    | Theo trục Y |
| `G Z`    | Theo trục Z |

Đây là cách làm được sử dụng rất thường xuyên trong Blender.

---

# 7. Rotate — Xoay Object

Shortcut:

```text
R
```

Nếu chỉ nhấn `R`, Object được xoay dựa trên góc nhìn hiện tại của Viewport.

Có thể khóa Rotation theo một trục:

```text
R → X
R → Y
R → Z
```

Ví dụ:

```text
R Z
```

→ xoay Object quanh trục Z.

| Shortcut | Chức năng    |
| -------- | ------------ |
| `R`      | Xoay tự do   |
| `R X`    | Xoay quanh X |
| `R Y`    | Xoay quanh Y |
| `R Z`    | Xoay quanh Z |

---

# 8. Scale — Thay đổi kích thước

Shortcut:

```text
S
```

Scale đồng đều:

```text
S
```

Scale theo từng trục:

```text
S X
S Y
S Z
```

Ví dụ:

```text
S Z
```

Object chỉ thay đổi kích thước theo chiều Z.

```text
Before

     ┌─────┐
     │     │
     └─────┘


S Z


After

     ┌─────┐
     │     │
     │     │
     │     │
     └─────┘
```

---

# 9. Transform Gizmo

Ngoài shortcut, Blender cung cấp Gizmo để thao tác trực tiếp.

Có các Gizmo riêng:

* Move.
* Rotate.
* Scale.

Và một Gizmo tổng hợp:

**Transform**

```text
Transform Gizmo
      │
      ├── Move
      ├── Rotate
      └── Scale
```

Transform Gizmo cho phép thực hiện cả ba thao tác trong cùng một công cụ.

Tuy nhiên khi làm việc nhanh, shortcut:

```text
G
R
S
```

thường tiện hơn.

---

# 10. Xem Transform trong N Panel

Transform của Object có thể được kiểm tra chính xác trong Sidebar.

Shortcut:

```text
N
```

Sau đó mở:

```text
Item
└── Transform
```

Ta sẽ thấy:

```text
Transform
├── Location
│   ├── X
│   ├── Y
│   └── Z
│
├── Rotation
│   ├── X
│   ├── Y
│   └── Z
│
└── Scale
    ├── X
    ├── Y
    └── Z
```

Ví dụ:

| Transform |  X |   Y |   Z |
| --------- | -: | --: | --: |
| Location  |  0 | 3 m |   0 |
| Rotation  | 0° |  0° | 70° |
| Scale     |  1 |   1 | 1.8 |

N Panel cực kỳ hữu ích khi cần kiểm soát Object bằng các con số chính xác.

---

# 11. Giá trị Transform mặc định

Một Object chưa được Transform thường có:

### Location

$$
X=0,\quad Y=0,\quad Z=0
$$

### Rotation

$$
X=0^\circ,\quad Y=0^\circ,\quad Z=0^\circ
$$

### Scale

$$
X=1,\quad Y=1,\quad Z=1
$$

Có thể ghi nhớ:

```text
Default Transform
│
├── Location = 0, 0, 0
├── Rotation = 0, 0, 0
└── Scale    = 1, 1, 1
```

---

# 12. Apply Transform

Giả sử Object được Scale theo Z:

```text
Scale
X = 1
Y = 1
Z = 1.8
```

Hình dạng Object lúc này đã thay đổi.

Nếu muốn giữ nguyên hình dạng nhưng đưa Scale trở về:

```text
1, 1, 1
```

sử dụng:

```text
Ctrl + A
```

Sau đó chọn loại Transform muốn Apply.

Ví dụ:

```text
Ctrl + A
└── Scale
```

Kết quả:

```text
Trước Apply

Object Shape: cao hơn
Scale: 1, 1, 1.8


       Ctrl + A
           ↓
         Scale


Sau Apply

Object Shape: vẫn cao như cũ
Scale: 1, 1, 1
```

Đây là điểm rất quan trọng.

---

# 13. Apply Scale không làm Object trở lại hình dạng ban đầu

Cần phân biệt:

### Reset Scale

```text
Scale 1.8 → 1
```

có thể làm hình dạng Object thay đổi trở lại.

### Apply Scale

```text
Ctrl + A → Scale
```

sẽ:

* Giữ nguyên hình dạng hiện tại.
* Đặt Scale hiện tại thành giá trị cơ sở mới.
* Scale hiển thị trở lại:

```text
1, 1, 1
```

Có thể hình dung:

```text
Object gốc
   ↓
Scale Z = 1.8
   ↓
Object cao hơn
   ↓
Ctrl + A → Scale
   ↓
Object vẫn cao
nhưng
Scale = 1,1,1
```

---

# 14. Vì sao Apply Scale quan trọng?

Ở các bài học đầu, Scale chưa Applied có thể chưa gây ra vấn đề rõ ràng.

Nhưng khi bắt đầu sử dụng:

* Modifier.
* Bevel.
* Array.
* Boolean.
* Solidify.
* Physics.
* Rigging.
* Procedural workflows.

Scale không đồng đều có thể dẫn đến kết quả không mong muốn.

Workflow tốt thường là:

```text
Model Object
     ↓
Scale Object
     ↓
Kiểm tra Transform
     ↓
Ctrl + A
     ↓
Apply Scale
     ↓
Tiếp tục Modifier / Modeling
```

---

# 15. World Origin và Object Origin

Cần phân biệt hai khái niệm.

## World Origin

Là điểm:

$$
(0,0,0)
$$

của toàn bộ Scene.

```text
World
                Z
                ↑
                │
                │
                ●────────→ X
             (0,0,0)
               /
              Y
```

## Object Origin

Là điểm Origin riêng của từng Object.

Ví dụ:

```text
World Origin
●


                 Flower
               ┌───────┐
               │   ●   │
               └───────┘
                   ↑
             Object Origin
```

Hai Origin này hoàn toàn có thể nằm ở những vị trí khác nhau.

---

# 16. Transform Pivot Point

Blender cho phép thay đổi điểm dùng làm tâm của phép Transform.

Một số lựa chọn được nhắc tới:

* Median Point.
* Individual Origins.
* 3D Cursor.
* Active Element.

Có thể hình dung:

```text
Transform Pivot Point
│
├── Median Point
├── Individual Origins
├── 3D Cursor
└── Active Element
```

---

# 17. Pivot bằng 3D Cursor

Nếu chọn:

```text
Pivot Point → 3D Cursor
```

thì Rotation và Scale có thể sử dụng vị trí của **3D Cursor** làm tâm.

Ví dụ:

```text
3D Cursor
    ●
     \
      \
       \ Object
        □
```

Khi Rotate:

```text
           □
          /
         /
        ●
   3D Cursor
```

Object quay xung quanh 3D Cursor thay vì Origin của chính Object.

Điều này rất hữu ích khi:

* Xoay cửa quanh bản lề.
* Xoay hành tinh quanh tâm.
* Xếp vật thể theo vòng tròn.
* Modeling các chi tiết đối xứng.

---

# 18. Individual Origins

Khi chọn nhiều Object:

```text
Pivot → Individual Origins
```

mỗi Object được Transform quanh Origin của chính nó.

Ví dụ:

```text
□       □       □
●       ●       ●
```

Khi Rotate:

```text
↻       ↻       ↻
□       □       □
```

Thay vì cả nhóm cùng xoay quanh một tâm chung.

---

# 19. Object và Object Data

Đây là một trong những khái niệm quan trọng nhất của bài.

Một Object bao gồm:

```text
Object
│
├── Name
├── Transform
├── Origin
├── Parent
└── Object Data
```

Ví dụ:

```text
Object Name
Flower
    │
    └── Mesh Data
        flower.002
```

Tên Object và tên Mesh Data có thể khác nhau.

---

# 20. Outliner và Object Data Properties

Trong **Outliner**, ta có thể thấy Object:

```text
Flower
```

Trong **Object Data Properties**, có thể thấy Mesh Data:

```text
flower.002
```

Do đó:

```text
Flower           ← Object
    │
    └── flower.002 ← Mesh Data
```

Không nên nhầm hai thành phần này.

---

# 21. Duplicate bằng Shift + D

Shortcut:

```text
Shift + D
```

tạo một bản sao độc lập.

Ví dụ:

```text
Object A
Mesh A
```

Sau:

```text
Shift + D
```

ta có:

```text
Object A        Object B
   │               │
Mesh A          Mesh B
```

Hai Object:

* Có Transform riêng.
* Có Mesh Data riêng.

Nếu chỉnh Mesh A trong Edit Mode:

```text
Object A → thay đổi
Object B → không thay đổi
```

---

# 22. Blender tự động đánh số tên

Khi Object hoặc Mesh có tên trùng, Blender thêm hậu tố:

```text
Flower
Flower.001
Flower.002
Flower.003
```

Tương tự với Mesh Data:

```text
flower
flower.001
flower.002
```

Đây là cơ chế Blender tự động đảm bảo tên dữ liệu không bị trùng hoàn toàn.

---

# 23. Linked Duplicate / Instance bằng Alt + D

Shortcut:

```text
Alt + D
```

khác với `Shift + D`.

`Alt + D` tạo Object mới nhưng dùng chung Mesh Data.

```text
           Mesh A
          /      \
         /        \
Object A          Object B
```

Hay:

```text
Object A ──┐
           ├── Mesh Data A
Object B ──┘
```

Hai Object là riêng biệt nhưng cùng tham chiếu đến một Mesh.

---

# 24. Shift + D và Alt + D

Đây là phần nên nhớ nhất trong bài.

| Thuộc tính                    | `Shift + D` | `Alt + D`                   |
| ----------------------------- | ----------- | --------------------------- |
| Object mới                    | ✅           | ✅                           |
| Transform riêng               | ✅           | ✅                           |
| Mesh Data riêng               | ✅           | ❌                           |
| Chỉnh Mesh ảnh hưởng bản khác | ❌           | ✅                           |
| Kiểu                          | Duplicate   | Linked Duplicate / Instance |
| Tiết kiệm dữ liệu             | Thấp hơn    | Cao hơn                     |

### Shift + D

```text
Object A ─── Mesh A

Shift + D

Object A ─── Mesh A

Object B ─── Mesh B
```

### Alt + D

```text
Object A ──┐
           │
           ├── Mesh A
           │
Object B ──┘
```

---

# 25. Ví dụ với Flower

Ban đầu:

```text
Flower
  │
  └── Mesh Flower
```

Dùng:

```text
Shift + D
```

ta có:

```text
Flower ───────── Mesh A

Flower.001 ───── Mesh B
```

Hai Mesh độc lập.

Dùng:

```text
Alt + D
```

ta có:

```text
Flower ────────┐
               │
Flower.002 ────┼── Mesh A
               │
```

Cả hai dùng cùng Mesh Data.

---

# 26. Chỉnh Instance trong Edit Mode

Nếu hai Object dùng chung Mesh Data:

```text
Object A ──┐
           ├── Mesh
Object B ──┘
```

và ta vào **Edit Mode** rồi sửa Mesh thông qua Object A:

```text
Edit Mesh
    ↓
Object A thay đổi
Object B cũng thay đổi
```

Nguyên nhân là cả hai Object đang đọc cùng một dữ liệu hình học.

---

# 27. Make Single User

Nếu muốn biến một Instance thành Mesh độc lập, có thể tạo:

**Single User Copy**

Ví dụ:

```text
Before

Object A ──┐
           ├── Mesh A
Object B ──┘
```

Sau khi tạo Single User:

```text
Object A ───── Mesh A

Object B ───── Mesh B
```

Object B lúc này có Mesh riêng và có thể chỉnh độc lập.

---

# 28. Tại sao Instance quan trọng?

Instances được sử dụng rất nhiều trong:

* Game development.
* Environment design.
* Architecture.
* Procedural modeling.
* Geometry Nodes.
* Large scenes.

Ví dụ một khu rừng:

```text
Tree Object 1 ──┐
Tree Object 2 ──┤
Tree Object 3 ──┼── Tree Mesh
Tree Object 4 ──┤
Tree Object 5 ──┘
```

Thay vì:

```text
Tree 1 → Mesh riêng
Tree 2 → Mesh riêng
Tree 3 → Mesh riêng
Tree 4 → Mesh riêng
Tree 5 → Mesh riêng
```

Instance có thể giúp:

* Giảm dữ liệu trùng lặp.
* Quản lý scene dễ hơn.
* Đồng bộ thay đổi hình học.
* Phù hợp với workflow game và environment.

---

# 29. Snapping

Blender có hệ thống **Snap** để Transform chính xác hơn.

Có thể Snap vào:

* Grid / Increment.
* Vertex.
* Edge.
* Face.
* Các loại phần tử khác tùy workflow.

Sơ đồ khái niệm:

```text
Snapping
│
├── Increment / Grid
├── Vertex
├── Edge
└── Face
```

---

# 30. Snap vào Grid

Khi bật Snap và sử dụng Increment/Grid:

```text
Grid

+---+---+---+---+
|   |   |   |   |
+---+---+---+---+
|   | ●────►●   |
+---+---+---+---+
|   |   |   |   |
+---+---+---+---+
```

Object di chuyển theo các bước của Grid thay vì tự do.

Workflow:

```text
Enable Snap
     ↓
G
     ↓
Move Object
     ↓
Object bám vào Grid
```

Đây là kỹ thuật đặc biệt hữu ích cho **modular modeling**.

---

# 31. Modular Grid

Modular Modeling thường yêu cầu kích thước và vị trí có quy luật.

Ví dụ:

```text
1 m × 1 m
2 m × 2 m
4 m × 4 m
```

Các phần:

```text
[Wall][Wall][Door][Wall]
```

có thể ghép chính xác nhờ Snap.

Ứng dụng:

* Modular buildings.
* Game environments.
* Dungeon kits.
* Sci-fi corridors.
* City blocks.

---

# 32. Viewport Overlays

Trong Viewport có menu:

**Overlays**

Cho phép hiển thị hoặc ẩn các thông tin hỗ trợ.

Các tùy chọn được nhắc tới trong bài:

* Guides.
* Grid.
* Floor.
* Axis.
* Geometry.
* Wireframe.

Có thể hình dung:

```text
Viewport Overlay
│
├── Guides
│   ├── Grid
│   ├── Floor
│   └── Axis
│
└── Geometry
    └── Wireframe
```

---

# 33. Grid và Axis

Viewport thường hiển thị các trục:

```text
X
Y
Z
```

và Floor/Grid hỗ trợ xác định:

* Vị trí.
* Hướng.
* Khoảng cách.
* Tỉ lệ.

```text
               Z
               ↑
               │
       ────────┼───────
              /│
             / │
            Y  └──────→ X
```

---

# 34. Wireframe Overlay

Có thể bật Wireframe trên Object ngay cả khi đang ở Solid View.

Ví dụ:

```text
Solid

┌───────────┐
│           │
│           │
└───────────┘
```

Bật Wireframe Overlay:

```text
┌────┬──────┐
│ ╲  │  ╱   │
├────┼──────┤
│ ╱  │  ╲   │
└────┴──────┘
```

Điều này giúp nhìn cấu trúc Mesh rõ hơn.

---

# 35. X-Ray

**X-Ray** cho phép nhìn xuyên qua Mesh.

Rất hữu ích khi cần chọn các Vertex ở cả phía trước và phía sau Object.

```text
Normal

Camera → ██████
         chỉ thấy mặt trước
```

```text
X-Ray

Camera → ░░░░░░
         có thể nhìn xuyên qua
```

---

# 36. Các chế độ hiển thị Viewport

Bài học giới thiệu các chế độ Viewport phổ biến.

```text
Viewport Shading
│
├── Wireframe
├── Solid
├── Material Preview
└── Rendered
```

---

## 36.1 Wireframe

Chỉ hiển thị cạnh của Mesh.

```text
┌───────┐
│╲     ╱│
│ ╲   ╱ │
│  ╲ ╱  │
└───────┘
```

Phù hợp với:

* Kiểm tra topology.
* Chọn geometry.
* Quan sát cấu trúc bên trong.

---

## 36.2 Solid

Hiển thị Object dạng khối cơ bản.

Không tập trung vào Material cuối cùng.

Đây thường là chế độ phù hợp nhất để Modeling.

---

## 36.3 Material Preview

Hiển thị Material và Texture gần với kết quả cuối hơn.

Phù hợp với:

* Material.
* Texture.
* Look development.

---

## 36.4 Rendered

Hiển thị Scene gần với Render cuối cùng nhất.

Có thể tính đến:

* Light.
* Material.
* Shadow.
* Render Engine.

---

# 37. Workflow tổng thể của bài học

```text
                Object
                   │
                   ▼
            Select Object
                   │
                   ▼
          Transform Object
          ┌────────┼────────┐
          │        │        │
          G        R        S
        Move    Rotate    Scale
          └────────┼────────┘
                   │
                   ▼
             Check N Panel
                   │
                   ▼
          Location / Rotation
               / Scale
                   │
          ┌────────┴─────────┐
          │                  │
          ▼                  ▼
   Apply Transform      Pivot Point
      Ctrl + A              │
                            ▼
                    Origin / Cursor
                   │
                   ▼
            Duplicate Object
          ┌────────┴────────┐
          │                 │
      Shift + D          Alt + D
          │                 │
   Independent Mesh     Shared Mesh
          │                 │
          └────────┬────────┘
                   ▼
              Snap / Grid
                   │
                   ▼
           Viewport Display
```

---

# 38. Object Workflow cần ghi nhớ

Một workflow cơ bản và an toàn:

```text
1. Select Object
       ↓
2. G / R / S
       ↓
3. Kiểm tra Transform bằng N
       ↓
4. Apply Transform nếu cần
       ↓
5. Kiểm tra Origin/Pivot
       ↓
6. Duplicate hoặc Instance
       ↓
7. Snap để căn chính xác
       ↓
8. Kiểm tra bằng các Viewport Mode
```

---

# 39. Các shortcut quan trọng

| Shortcut    | Chức năng                   |
| ----------- | --------------------------- |
| `G`         | Move / Grab                 |
| `G X`       | Move theo X                 |
| `G Y`       | Move theo Y                 |
| `G Z`       | Move theo Z                 |
| `R`         | Rotate                      |
| `R X`       | Rotate quanh X              |
| `R Y`       | Rotate quanh Y              |
| `R Z`       | Rotate quanh Z              |
| `S`         | Scale                       |
| `S X`       | Scale theo X                |
| `S Y`       | Scale theo Y                |
| `S Z`       | Scale theo Z                |
| `N`         | Mở/đóng Sidebar             |
| `Ctrl + A`  | Apply Transform             |
| `Shift + D` | Duplicate                   |
| `Alt + D`   | Linked Duplicate / Instance |
| `Ctrl + Z`  | Undo                        |

---

# 40. Những khái niệm quan trọng nhất

## Object ≠ Mesh

```text
Object
   │
   └── Mesh Data
```

Object là thực thể trong Scene.

Mesh Data là dữ liệu hình học.

---

## Origin ≠ World Origin

```text
World Origin = tâm tọa độ Scene
Object Origin = tâm Transform của Object
```

---

## Shift + D ≠ Alt + D

```text
Shift + D
Object mới + Mesh mới
```

```text
Alt + D
Object mới + dùng chung Mesh
```

---

## Scale hình học ≠ Applied Scale

```text
Scale Z = 2
```

không giống:

```text
Object giữ kích thước tương đương
Scale Z = 1
sau Ctrl + A → Scale
```

---

# 41. Những lỗi người mới thường gặp

### 1. Không biết Object đang có Scale khác 1

Ví dụ:

```text
Scale
X = 0.3
Y = 2.5
Z = 1.7
```

Sau đó thêm Modifier và nhận được kết quả bất thường.

**Cách xử lý:**

```text
Ctrl + A → Scale
```

---

### 2. Nhầm Object với Mesh Data

Thấy hai Object có tên khác nhau nên cho rằng chúng chắc chắn có Mesh riêng.

Điều này không đúng nếu chúng được tạo bằng:

```text
Alt + D
```

---

### 3. Chỉnh một Instance và thấy Object khác cũng thay đổi

Nguyên nhân:

```text
Object A ──┐
           ├── Same Mesh
Object B ──┘
```

Đây là hành vi đúng của Linked Duplicate.

---

### 4. Object xoay quanh vị trí "lạ"

Cần kiểm tra:

* Object Origin.
* Transform Pivot Point.
* 3D Cursor.

---

### 5. Move không tự do

Có thể:

* Snap đang bật.
* Axis constraint đang được sử dụng.
* Increment/Grid Snap đang hoạt động.

---

# 42. Bài thực hành

## Bài 1 — Transform cơ bản

1. Tạo Cube.
2. Di chuyển:

```text
G X
```

3. Xoay:

```text
R Z
```

4. Scale:

```text
S Z
```

5. Mở:

```text
N → Item → Transform
```

6. Quan sát Location, Rotation và Scale.

---

## Bài 2 — Apply Scale

Scale Object:

```text
S Z
```

khoảng 2 lần.

Quan sát:

```text
Scale Z ≈ 2
```

Sau đó:

```text
Ctrl + A → Scale
```

Kiểm tra lại:

```text
Scale
X = 1
Y = 1
Z = 1
```

nhưng Object vẫn giữ hình dạng đã kéo dài.

---

## Bài 3 — Duplicate

Tạo hai bản sao bằng:

```text
Shift + D
```

Sau đó vào Edit Mode và sửa một bản.

Quan sát:

> Object còn lại không bị thay đổi.

---

## Bài 4 — Instance

Tạo bản sao bằng:

```text
Alt + D
```

Sau đó chỉnh Mesh của một Object trong Edit Mode.

Quan sát:

> Tất cả Object dùng chung Mesh Data sẽ thay đổi.

---

## Bài 5 — Pivot Point

1. Di chuyển 3D Cursor khỏi Object.
2. Đổi Pivot sang:

```text
3D Cursor
```

3. Chọn Object.
4. Nhấn:

```text
R
```

Quan sát Object quay quanh 3D Cursor.

---

## Bài 6 — Snap

1. Bật Snap.
2. Chọn Increment/Grid.
3. Nhấn:

```text
G
```

4. Di chuyển Object.

Quan sát Object bám vào các bước của Grid.

---

# 43. Thử thách mở rộng

Tạo một hàng gồm **5 bông hoa** hoặc 5 Cube.

Yêu cầu:

* Object đầu tiên là Object gốc.
* 2 Object tạo bằng `Shift + D`.
* 2 Object tạo bằng `Alt + D`.
* Đặt chúng thẳng hàng bằng Snap.
* Thay đổi Scale của một Object.
* Apply Scale.
* Chỉnh Mesh của một Linked Duplicate để quan sát các Instance còn lại.

Sơ đồ:

```text
Flower 1      Flower 2      Flower 3      Flower 4      Flower 5
 Original     Shift+D       Shift+D        Alt+D          Alt+D
    │             │             │             │              │
 Mesh A        Mesh B        Mesh C          └──── Mesh A ────┘
```

Sau bài tập này, sự khác biệt giữa **Object**, **Mesh** và **Instance** sẽ rõ ràng hơn rất nhiều.

---

# 44. Checklist bài học

* [ ] Hiểu Object là gì trong Blender.
* [ ] Hiểu Object Origin.
* [ ] Phân biệt Object Origin và World Origin.
* [ ] Sử dụng được `G` để Move.
* [ ] Sử dụng được `R` để Rotate.
* [ ] Sử dụng được `S` để Scale.
* [ ] Khóa Transform theo `X`, `Y`, `Z`.
* [ ] Kiểm tra Transform trong `N Panel`.
* [ ] Hiểu Scale mặc định là `1, 1, 1`.
* [ ] Biết sử dụng `Ctrl + A` để Apply Transform.
* [ ] Hiểu ý nghĩa của Apply Scale.
* [ ] Biết thay đổi Transform Pivot Point.
* [ ] Hiểu tác dụng của 3D Cursor với Pivot.
* [ ] Phân biệt Object và Mesh Data.
* [ ] Biết Duplicate bằng `Shift + D`.
* [ ] Biết Linked Duplicate bằng `Alt + D`.
* [ ] Hiểu khái niệm Instance.
* [ ] Biết tạo Single User khi cần Mesh độc lập.
* [ ] Sử dụng được Snap.
* [ ] Hiểu Grid trong modular modeling.
* [ ] Biết bật Wireframe Overlay.
* [ ] Biết sử dụng X-Ray.
* [ ] Phân biệt Wireframe, Solid, Material Preview và Rendered.
* [ ] Đã lưu file thực hành riêng.

---

# 45. Tóm tắt nhanh

> **`G` = Move, `R` = Rotate, `S` = Scale.**

> Thêm `X`, `Y` hoặc `Z` sau shortcut để giới hạn Transform theo từng trục.

> **Object** và **Mesh Data** là hai lớp dữ liệu khác nhau.

> `Shift + D` tạo **Object + Mesh độc lập**, còn `Alt + D` tạo **Object mới nhưng dùng chung Mesh Data**.

> `Ctrl + A → Scale` giữ nguyên hình dạng hiện tại nhưng đưa Scale về `1, 1, 1`, một bước quan trọng trước nhiều workflow với Modifier.

> **Origin/Pivot** quyết định tâm của Rotation và Scale.

> **Snapping + Grid** giúp xây dựng asset chính xác, đặc biệt hữu ích trong modular modeling và game environment.

---

## 46. Vị trí bài học trong lộ trình

```text
Section 01 — Getting Started with Blender
│
├── Làm quen giao diện
├── Workspace & Viewport Navigation
│
├── 004 — Understanding and Transforming Objects
│      ├── Object
│      ├── Transform
│      ├── Origin
│      ├── Pivot
│      ├── Object Data
│      ├── Duplicate / Instance
│      └── Snapping
│
▼
Object / Mesh Editing
│
▼
Modeling
│
▼
Modifiers
│
▼
Materials
│
▼
Lighting & Rendering
```

Bài **Understanding and Transforming Objects** là nền tảng trực tiếp cho các bài Modeling tiếp theo, vì trước khi chỉnh sửa Mesh, người học cần hiểu rõ **Object đang nằm ở đâu, được xoay/scale như thế nào, Origin ở đâu và dữ liệu Mesh có đang được chia sẻ với Object khác hay không**.
