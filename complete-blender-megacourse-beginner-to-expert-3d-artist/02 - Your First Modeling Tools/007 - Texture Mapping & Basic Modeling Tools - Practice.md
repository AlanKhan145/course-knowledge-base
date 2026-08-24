# 007 — Texture Mapping & Basic Modeling Tools

| Thuộc tính        | Nội dung                                                                                                                      |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| **Section**       | Section 02 — Your First Modeling Tools                                                                                        |
| **Bài học**       | Texture Mapping & Basic Modeling Tools                                                                                        |
| **Loại nội dung** | Video lecture                                                                                                                 |
| **Thời lượng**    | 22:36                                                                                                                         |
| **Ngôn ngữ gốc**  | English                                                                                                                       |
| **Chủ đề chính**  | UV Mapping, Procedural Mapping, Box Projection, Correct Face Attributes, Loop Cut, Subdivide, Topology, Snap, Duplicate, Join |

---

## 1. Tổng quan bài học

Trong bài trước, chúng ta đã học cách **UV unwrap một khối Cube** để đưa texture lên bề mặt.

Bài này mở rộng sang hai vấn đề quan trọng:

1. Hiểu điều gì xảy ra với texture khi tiếp tục chỉnh sửa hình học sau khi đã UV unwrap.
2. Làm quen với **procedural texture mapping** để texture có thể tự thích nghi tốt hơn khi mesh thay đổi.
3. Học thêm các công cụ modeling cơ bản thông qua việc dựng một **cobblestone pathway — đường lát đá**.
4. Chuẩn bị cho việc dựng **lantern — đèn lồng** và học Modifier ở bài tiếp theo.

Luồng kiến thức chính:

```text
UV Mapping
    ↓
Chỉnh sửa Mesh
    ↓
Texture bị kéo giãn / thiếu UV
    ↓
Procedural Mapping
    ↓
Generated Coordinates + Box Projection
    ↓
Modeling cơ bản
    ↓
Loop Cut → Subdivide → Topology
    ↓
Duplicate → Snap → Join
    ↓
Chuẩn bị sử dụng Modifier
```

---

# 2. Mục tiêu bài học

Sau bài học này, người học có thể:

* Hiểu vì sao texture có thể bị **stretching** khi mesh đã UV unwrap bị thay đổi.
* Phân biệt được **UV Mapping** và **Procedural Mapping**.
* Hiểu vai trò của các node:

  * `Texture Coordinate`
  * `Mapping`
  * `Image Texture`
* Sử dụng **Generated Coordinates** thay cho UV trong một số trường hợp.
* Hiểu cách hoạt động của **Box Projection / Triplanar Projection**.
* Sử dụng **Correct Face Attributes** để Blender tự điều chỉnh UV khi chỉnh sửa mesh.
* Hiểu các chế độ mở rộng texture:

  * Repeat
  * Extend
  * Clip
* Sử dụng các công cụ modeling:

  * Move
  * Extrude
  * Loop Cut
  * Subdivide
  * Dissolve
  * Duplicate
  * Snap
  * Join
* Hiểu khái niệm cơ bản về **quad topology**.
* Biết cách dùng reference để phân tích hình dạng trước khi modeling.

---

# 3. Vấn đề khi chỉnh sửa mesh sau khi UV Mapping

Giả sử Cube đã được UV unwrap.

Khi chuyển sang **Edit Mode**:

```text
Tab → Edit Mode
```

chúng ta có thể chỉnh sửa trực tiếp:

* Vertex
* Edge
* Face

Ví dụ, để di chuyển một mặt:

```text
G
```

Khóa chuyển động theo trục Z:

```text
G → Z
```

---

## 3.1. Vì sao texture bị kéo giãn?

Khi một Face được di chuyển nhưng UV tương ứng trong **UV Editor** không thay đổi, hình học và UV không còn có cùng tỷ lệ.

Ví dụ:

```text
Mesh ban đầu

┌───────────┐
│ Texture   │
│ bình thường
└───────────┘

        ↓ Move Face

┌───────────┐
│           │
│ Texture   │
│ bị kéo    │
│ giãn      │
└───────────┘
```

UV vẫn giữ nguyên:

```text
UV Editor
┌─────────┐
│         │
│   UV    │
│         │
└─────────┘
```

nhưng mesh đã dài hơn.

Kết quả:

> Texture phải trải trên một diện tích lớn hơn nên xuất hiện hiện tượng **texture stretching**.

---

# 4. Extrude sau khi UV unwrap

Chọn một Face rồi sử dụng:

```text
E
```

để **Extrude**.

Ví dụ:

```text
Cube

┌───────┐
│       │
│       │
└───────┘

    ↓ E

    ┌───────┐
    │       │
┌───┴───────┴───┐
│               │
└───────────────┘
```

Các mặt bên mới được Blender tạo ra.

Tuy nhiên, các mặt mới này **chưa được bố trí đúng trong UV Map hiện tại**.

Vì vậy có thể xuất hiện:

* texture bị kéo;
* texture sai tỷ lệ;
* texture không xuất hiện đúng;
* các mặt mới chưa được unwrap phù hợp.

Đây là một trong những lý do workflow phổ biến thường là:

```text
Modeling
   ↓
Hoàn thiện hình học
   ↓
UV Unwrap
   ↓
Texture
```

thay vì:

```text
UV trước
↓
Tiếp tục thay đổi mesh lớn
↓
UV liên tục bị hỏng
```

---

# 5. UV Mapping và Procedural Mapping

Đây là một trong những nội dung quan trọng nhất của bài.

## UV Mapping

Texture dựa vào tọa độ UV do chúng ta tạo.

```text
Mesh
 ↓
UV Unwrap
 ↓
UV Coordinates
 ↓
Image Texture
 ↓
Material
```

Ưu điểm:

* kiểm soát texture rất chính xác;
* thích hợp cho character;
* thích hợp cho asset có texture riêng;
* phù hợp texture painting.

Nhược điểm:

* mesh thay đổi có thể yêu cầu chỉnh lại UV;
* dễ xuất hiện stretching.

---

## Procedural Mapping

Thay vì sử dụng UV Map, Blender có thể tính tọa độ texture từ chính không gian của object.

```text
Mesh
 ↓
Generated Coordinates
 ↓
Mapping
 ↓
Image Texture
 ↓
Shader
```

Texture không nhất thiết phụ thuộc vào UV unwrap.

Điều này đặc biệt hữu ích khi:

* blockout level;
* dựng môi trường;
* thử material nhanh;
* dùng texture gạch;
* đá;
* bê tông;
* đường;
* terrain.

---

# 6. Texture Coordinate Node

Trong Shader Editor, thêm:

```text
Shift + A
```

sau đó tìm:

```text
Texture Coordinate
```

Node có nhiều loại tọa độ, ví dụ:

```text
Generated
Normal
UV
Object
Camera
Window
Reflection
```

Trong bài, chúng ta sử dụng:

```text
Generated
```

---

## Generated Coordinates

`Generated` tự tạo tọa độ dựa trên **bounding box của object**.

Có thể hình dung object nằm trong một hộp tọa độ:

```text
        +Z
         ↑
         │
     ┌─────────┐
    /         /│
   /         / │
  └─────────┘  │ → +X
  │         │  │
  │         │ /
  │         │/
  └─────────┘
      ↙
     +Y
```

Texture sẽ dựa vào không gian này thay vì UV Map.

---

# 7. Mapping Node

Tiếp theo thêm:

```text
Mapping
```

Kết nối:

```text
Texture Coordinate
       │
       │ Generated
       ▼
    Mapping
       │
       │ Vector
       ▼
 Image Texture
       │
       ▼
Principled BSDF
```

Node `Mapping` cho phép điều chỉnh:

* Location
* Rotation
* Scale

của texture.

Ví dụ muốn texture nhỏ hơn và lặp nhiều hơn:

```text
Scale:

X = 4
Y = 4
Z = 4
```

---

# 8. Flat Projection

Image Texture mặc định có thể sử dụng:

```text
Projection = Flat
```

Flat Mapping chủ yếu chiếu texture theo mặt phẳng tọa độ.

Có thể hình dung giống như dùng máy chiếu:

```text
Texture
██████████████
      ↓
      ↓
      ↓
┌──────────────┐
│    Object    │
└──────────────┘
```

Điều này có thể hoạt động tốt ở một hướng nhưng không đẹp trên các mặt quay sang hướng khác.

---

# 9. Box Projection

Trong Image Texture:

```text
Projection
```

đổi từ:

```text
Flat
```

sang:

```text
Box
```

Texture lúc này được chiếu từ nhiều hướng.

Có thể hình dung:

```text
               ↓
             Texture
               ↓

Texture → ┌──────────┐ ← Texture
          │  Object  │
Texture → │          │ ← Texture
          └──────────┘
               ↑
             Texture
```

Texture được chiếu theo các trục:

```text
+X
-X
+Y
-Y
+Z
-Z
```

---

# 10. Box Mapping và Triplanar Projection

Khái niệm này thường được gọi là:

> **Triplanar Projection**

Đặc biệt phổ biến trong:

* game development;
* terrain shader;
* Unity;
* Unreal Engine;
* procedural materials.

Ý tưởng cơ bản:

```text
X Projection
     +
Y Projection
     +
Z Projection
     ↓
Blend
     ↓
Final Texture
```

Điều này giúp texture xuất hiện hợp lý trên nhiều hướng của bề mặt mà không cần UV unwrap thủ công.

---

# 11. Ưu điểm của Procedural / Box Mapping khi modeling

Nếu sử dụng:

```text
Generated
   ↓
Mapping
   ↓
Image Texture — Box
```

sau đó Extrude hoặc di chuyển geometry:

```text
E
G
S
```

texture vẫn có xu hướng giữ tỷ lệ tốt hơn.

Ví dụ:

```text
Ban đầu

████████
████████


Extrude mesh

████████
████████
████████
████████
```

thay vì:

```text
████████
█      █
█      █
████████
```

đây là lý do kỹ thuật này rất hữu ích cho:

* whitebox;
* graybox;
* level design;
* prototype;
* environment modeling.

---

# 12. Correct Face Attributes

Blender còn cung cấp một cách khác để hạn chế UV bị méo khi chỉnh sửa mesh.

Trên thanh:

```text
Options
```

bật:

```text
Transform
└── Correct Face Attributes
```

Sau khi bật, nếu di chuyển Face:

```text
G
```

Blender sẽ cố gắng điều chỉnh UV tương ứng.

---

## Không bật Correct Face Attributes

```text
Move Mesh
   ↓
UV giữ nguyên
   ↓
Texture Stretching
```

## Bật Correct Face Attributes

```text
Move Mesh
   ↓
UV tự điều chỉnh
   ↓
Texture giữ tỷ lệ tốt hơn
```

Trong UV Editor có thể quan sát UV thay đổi đồng thời với geometry.

---

# 13. Texture Extension

Trong **Image Texture Node** có tùy chọn:

```text
Extension
```

Ba chế độ quan trọng:

| Chế độ     | Tác dụng                                |
| ---------- | --------------------------------------- |
| **Repeat** | Texture tự lặp khi tọa độ vượt giới hạn |
| **Extend** | Kéo dài pixel ở cạnh texture            |
| **Clip**   | Không hiển thị texture ngoài vùng 0–1   |

---

## Repeat

```text
┌───┬───┬───┐
│IMG│IMG│IMG│
├───┼───┼───┤
│IMG│IMG│IMG│
└───┴───┴───┘
```

Rất hữu ích với:

* brick;
* stone;
* ground;
* tiles;
* wood.

---

## Extend

```text
Texture
┌──────────┐
│   IMG    │████████
└──────────┘████████
```

Pixel ở cạnh được kéo dài.

---

## Clip

```text
      Texture
     ┌───────┐
     │  IMG  │
     └───────┘

Ngoài vùng → trong suốt / không có texture
```

---

# 14. Workflow texture được giới thiệu

Có ba cách tiếp cận đáng nhớ.

### Workflow 1 — UV truyền thống

```text
Model
 ↓
UV Unwrap
 ↓
Image Texture
 ↓
Material
```

### Workflow 2 — Procedural / Generated

```text
Model
 ↓
Generated Coordinates
 ↓
Mapping
 ↓
Box Projection
 ↓
Texture
```

### Workflow 3 — UV + Correct Face Attributes

```text
UV Unwrap
 ↓
Bật Correct Face Attributes
 ↓
Chỉnh sửa Mesh
 ↓
Blender điều chỉnh UV
```

---

# 15. Bắt đầu modeling Cobblestone Path

Sau phần texture mapping, bài học chuyển sang modeling một **đường lát đá**.

Workflow được sử dụng:

```text
Reference
   ↓
Phân tích hình dạng
   ↓
Primitive đơn giản
   ↓
Subdivision
   ↓
Tạo Grid
   ↓
Tạo Stone
   ↓
Duplicate Variations
   ↓
Snap
   ↓
Join
   ↓
Modifier ở bài tiếp theo
```

---

# 16. Sử dụng Reference Image

Giảng viên kéo một ảnh cobblestone trực tiếp vào Viewport.

Lưu ý:

> Không thể kéo reference image vào viewport khi đang ở Edit Mode.

Vì vậy:

```text
Tab
```

để quay về:

```text
Object Mode
```

sau đó kéo ảnh vào viewport.

Trong Outliner ảnh sẽ xuất hiện dưới dạng một object hình ảnh tham chiếu.

---

# 17. Phân tích hình dạng trước khi modeling

Trước khi dựng chi tiết, cần quan sát **overall shape**.

Reference cobblestone có thể được phân tích thành:

```text
Cobblestone Path

┌────┬──────┬────┐
│    │      │    │
├──────┬────┴────┤
│      │         │
├───┬──────┬─────┤
│   │      │     │
└───┴──────┴─────┘
```

Về bản chất:

> Đây chỉ là một tập hợp nhiều khối hộp có kích thước và vị trí hơi khác nhau.

Nguyên tắc:

```text
Simple Shape
    ↓
Medium Detail
    ↓
Small Detail
    ↓
Texture
```

Không nên bắt đầu modeling từ chi tiết nhỏ.

---

# 18. Làm việc với đơn vị đo

Khối cơ sở được đặt khoảng:

```text
2 m × 2 m
```

và chiều cao ban đầu khoảng:

```text
1 m
```

Sau đó giảm xuống:

```text
20 cm
```

và cuối cùng khoảng:

```text
10 cm
```

để phù hợp với đường lát đá.

---

# 19. Chọn xuyên mesh bằng X-Ray

Khi nhìn từ Front View:

```text
Numpad 1
```

nếu Box Select bình thường, chỉ các vertex phía trước có thể được chọn.

Để chọn cả vertex phía trước và phía sau:

```text
Toggle X-Ray
```

hoặc:

```text
Wireframe Mode
```

Giảng viên ưu tiên X-Ray vì vẫn có thể quan sát texture/material.

---

# 20. Loop Cut

Một công cụ modeling rất quan trọng:

```text
Ctrl + R
```

Tên:

> **Loop Cut**

Ví dụ một Cube:

```text
Trước

┌─────────────┐
│             │
│             │
└─────────────┘
```

Sau `Ctrl + R`:

```text
┌──────┬──────┐
│      │      │
│      │      │
└──────┴──────┘
```

Loop Cut tạo một vòng:

* vertices;
* edges;

chạy xuyên qua topology.

---

# 21. Subdivision

Loop Cut thực chất là một dạng subdivision có kiểm soát.

Có thể chọn Edge hoặc toàn bộ mesh rồi:

```text
Right Click
→ Subdivide
```

Sau đó điều chỉnh:

```text
Number of Cuts
```

Ví dụ:

```text
Number of Cuts = 1
```

```text
┌────────────┐
│            │
├────────────┤
│            │
└────────────┘
```

Nếu:

```text
Number of Cuts = 3
```

```text
┌────────────┐
├────────────┤
├────────────┤
├────────────┤
└────────────┘
```

---

# 22. Fractal trong Subdivide

Subdivide còn có thuộc tính:

```text
Fractal
```

Fractal tạo nhiễu vào các điểm mới.

Ví dụ:

```text
Fractal = 0

──────────────
──────────────
──────────────
```

so với:

```text
Fractal > 0

───╱─────╲────
────╲──╱──────
```

Trong bài, giảng viên giữ:

```text
Fractal = 0
```

để topology còn thẳng và dễ kiểm soát.

---

# 23. Quad Modeling

Một khái niệm quan trọng được giới thiệu là:

> **Quad**

Quad là một Face có:

```text
4 vertices
4 edges
```

Ví dụ:

```text
A──────B
│      │
│      │
D──────C
```

Đây là một Quad.

---

## Topology

Cách tổ chức:

* vertex;
* edge;
* face;

trên mesh được gọi là:

> **Topology**

Topology tốt giúp:

* dễ edit;
* dễ subdivide;
* dễ deform;
* modifier hoạt động ổn định hơn;
* shading sạch hơn.

---

# 24. Quad Topology

Trong nhiều trường hợp, mục tiêu là duy trì topology chủ yếu bằng Quad:

```text
┌───┬───┬───┐
│   │   │   │
├───┼───┼───┤
│   │   │   │
├───┼───┼───┤
│   │   │   │
└───┴───┴───┘
```

Tuy nhiên:

> Không phải lúc nào cũng cần topology hoàn hảo ngay từ đầu.

Đối với asset đơn giản như cobblestone trong bài, mục tiêu chính vẫn là hiểu workflow modeling.

---

# 25. Delete và Dissolve

Khi nhấn:

```text
X
```

Blender cung cấp nhiều tùy chọn:

```text
Vertices
Edges
Faces
Only Edges & Faces
Only Faces
Dissolve Vertices
Dissolve Edges
...
```

Đây là điểm rất quan trọng.

---

## Delete Vertex

```text
X → Vertices
```

Nếu vertex bị xóa thì các:

* edges;
* faces;

phụ thuộc vào vertex đó cũng biến mất.

---

## Delete Edge

Có thể làm mất các Face sử dụng Edge đó.

---

## Dissolve Edge

```text
X
→ Dissolve Edges
```

khác với Delete.

Dissolve cố gắng loại bỏ Edge mà **không phá hủy bề mặt chung**.

Ví dụ:

```text
Trước

┌─────┬─────┐
│     │     │
└─────┴─────┘
```

Dissolve Edge giữa:

```text
┌───────────┐
│           │
└───────────┘
```

---

## Shortcut Dissolve

Có thể dùng:

```text
Ctrl + X
```

để dissolve nhanh.

---

# 26. Wireframe Overlay

Để quan sát topology trong Solid Mode:

```text
Viewport Overlays
→ Wireframe
```

Kết quả:

```text
Solid Mesh
+
Wireframe
```

giúp quan sát rõ:

* edge loops;
* subdivision;
* topology.

---

# 27. Tạo bản sao Object

Để tạo bản sao:

```text
Shift + D
```

Đây là **Duplicate**, không phải Linked Instance.

Sau khi nhấn:

```text
Shift + D
```

có thể:

* di chuyển chuột để đặt bản sao;
* hoặc nhấn chuột phải / Esc để giữ bản sao tại cùng vị trí.

---

# 28. Grid và Stones

Mesh ban đầu được duplicate thành hai object.

Ví dụ:

```text
Original Mesh
     │
     ├── Grid
     │
     └── Stones
```

`Grid` được sử dụng như khuôn bố trí.

`Stones` được dùng để tạo các viên đá.

Đây là một workflow thông minh:

```text
Grid = hệ thống định vị
Stone = geometry thực tế
```

---

# 29. Select Similar

Một công cụ hữu ích:

```text
Shift + G
```

mở:

```text
Select Similar
```

Có thể chọn dựa trên các thuộc tính tương tự như:

* Normal
* Area
* Material
* Face Angle
* ...

Trong bài, giảng viên chọn:

```text
Normal
```

để chọn tất cả Face cùng hướng.

---

# 30. Face Normals

Normal xác định hướng của một Face.

```text
      Normal
        ↑
        │
────────────── Face
```

Nếu Normal bị đảo:

```text
Normal
  ↓
──────────────
```

có thể gây:

* backface issues;
* shading sai;
* export sang game engine sai.

---

## Face Orientation

Blender có Overlay:

```text
Face Orientation
```

thường giúp phát hiện Face bị đảo.

---

## Flip Normal

Chọn các Face:

```text
A
```

sau đó:

```text
Alt + N
```

và chọn:

```text
Flip
```

để đảo normal.

---

# 31. Scale Mesh thay vì Scale Object

Một điểm workflow quan trọng:

Giảng viên muốn thay đổi kích thước các viên đá nhưng không muốn thay đổi transform của toàn Object.

Vì vậy:

```text
Tab → Edit Mode
A
S
```

thay vì:

```text
Object Mode
S
```

Khác biệt:

```text
Object Mode Scale
Object Transform = thay đổi
```

so với:

```text
Edit Mode Scale
Mesh thay đổi
Object Scale vẫn có thể = 1
```

Điều này rất hữu ích khi chuẩn bị cho:

* modifiers;
* physics;
* export;
* procedural workflow.

---

# 32. Transform Pivot Point

Mặc định Scale sử dụng:

```text
Median Point
```

Nhưng bài sử dụng:

```text
3D Cursor
```

làm Pivot Point.

Ví dụ:

```text
Stone
┌─────────┐
│         │
└─────────┘
● 3D Cursor
```

Scale xảy ra tương đối với vị trí:

```text
3D Cursor
```

thay vì tâm của selection.

---

# 33. Scale theo nhiều trục nhưng giữ nguyên chiều cao

Giả sử muốn thu nhỏ viên đá theo:

```text
X
Y
```

nhưng không thay đổi:

```text
Z
```

Ý tưởng:

```text
X → Scale
Y → Scale
Z → 1
```

Điều này giúp:

```text
Top View
████████      █████
████████  →   █████

Side View
████████      █████
             chiều cao giữ nguyên
```

---

# 34. Snap

Snap bật bằng:

```text
Shift + Tab
```

hoặc biểu tượng nam châm.

Snap giúp object/geometry bám chính xác vào:

* Vertex
* Edge
* Face
* Increment
* Grid
* Volume
* ...

---

# 35. Face Center Snap

Một tính năng được nhắc trong bài là:

```text
Face Center
```

Object có thể snap vào tâm Face của Grid.

Ví dụ:

```text
Grid

┌─────┬─────┐
│  ●  │  ●  │
├─────┼─────┤
│  ●  │  ●  │
└─────┴─────┘
```

Các chấm `●` là Face Center.

Stone có thể được đặt chính xác tại những điểm này.

---

# 36. Snap Base — Center

Không chỉ chọn đối tượng đích để Snap, Blender còn cho phép xác định **điểm nào của object đang di chuyển sẽ được dùng làm điểm Snap**.

Trong bài sử dụng:

```text
Snap Base
→ Center
```

Có thể hình dung:

```text
Stone
┌─────────┐
│    ●    │ ← Center
└─────────┘
```

Center của Stone sẽ bám vào Face Center của Grid.

---

# 37. Kết hợp nhiều Snap Mode

Giữ:

```text
Shift
```

khi chọn Snap Elements để bật nhiều loại cùng lúc.

Ví dụ bài sử dụng:

```text
Face Center
+
Edge Center
```

Do đó các viên đá có thể snap vào:

```text
┌────●────┐
│         │
●    ●    ●
│         │
└────●────┘
```

bao gồm:

* tâm mặt;
* tâm cạnh.

---

# 38. Tạo Variation cho các viên đá

Sử dụng liên tục:

```text
Shift + D
```

sau đó:

```text
G
S
```

để tạo các viên đá có:

* kích thước khác nhau;
* chiều dài khác nhau;
* vị trí khác nhau.

Ví dụ:

```text
┌──────┐ ┌────────┐ ┌────┐
│      │ │        │ │    │
└──────┘ └────────┘ └────┘

   ┌──────────┐
   │          │
   └──────────┘
```

Mục tiêu là tránh cảm giác quá đều và nhân tạo.

---

# 39. Tỷ lệ Quad khi Scale

Khi kéo dài mesh, các Quad có thể trở nên méo.

Ví dụ tốt:

```text
┌──────┐
│      │
└──────┘
```

so với:

```text
┌───────────────────┐
│                   │
└───────────────────┘
```

Trong topology lý tưởng, người modeling thường cố giữ polygon có tỷ lệ tương đối đều.

Tuy nhiên, đối với bài thực hành đơn giản này:

> Chưa cần quá lo lắng về topology hoàn hảo.

---

# 40. Join nhiều Object

Sau khi tạo nhiều viên đá, chúng ta cần gom chúng thành một Object.

Trước:

```text
Stone_01
Stone_02
Stone_03
Stone_04
Stone_05
...
```

Sau Join:

```text
Stones
 ├── Mesh 01
 ├── Mesh 02
 ├── Mesh 03
 ├── Mesh 04
 └── Mesh 05
```

Tất cả thuộc cùng một Object.

---

## Active Object

Khi chọn nhiều Object:

* màu cam nhạt: object được chọn;
* object active có trạng thái nổi bật hơn.

Object được Join vào:

> **Active Object**

Vì vậy cần đảm bảo object muốn giữ tên / thuộc tính chính là **Active Object** trước khi Join.

Shortcut tiêu chuẩn để Join object mesh trong Blender là:

```text
Ctrl + J
```

---

# 41. Object Origin

Sau khi Join, cần chú ý tới:

```text
Object Origin
```

hiển thị bằng chấm màu cam.

Origin ảnh hưởng đến:

* Rotation;
* Scale;
* Modifier;
* Animation;
* Parenting.

Có thể hình dung:

```text
          Object
┌──────────────────┐
│                  │
│         ●        │
│       Origin     │
└──────────────────┘
```

---

# 42. Apply Transform

Shortcut:

```text
Ctrl + A
```

mở menu:

```text
Apply

Location
Rotation
Scale
All Transforms
...
```

Apply Transform giúp "đóng băng" transform hiện tại thành trạng thái cơ sở mới của Object.

Ví dụ:

```text
Scale trước Apply

X = 2
Y = 2
Z = 2
```

Sau:

```text
Ctrl + A
→ Scale
```

Object vẫn có kích thước như cũ nhưng:

```text
X = 1
Y = 1
Z = 1
```

Điều này đặc biệt quan trọng trước khi sử dụng nhiều Modifier.

---

# 43. Modeling workflow của Cobblestone

Toàn bộ workflow có thể tóm tắt:

```text
Reference Image
      ↓
Phân tích Shape
      ↓
Cube 2 m × 2 m
      ↓
Giảm Height
      ↓
Loop Cut / Subdivide
      ↓
Tạo Grid
      ↓
Duplicate Mesh
      ↓
Tạo Stones
      ↓
Scale Variations
      ↓
Face Center / Edge Center Snap
      ↓
Duplicate Stones
      ↓
Join Objects
      ↓
Apply Transform
      ↓
Modifier ở bài tiếp theo
```

---

# 44. Nguyên tắc Modeling quan trọng trong bài

## 44.1. Bắt đầu từ hình dạng đơn giản

Không nên:

```text
Chi tiết nhỏ
→ chi tiết nhỏ
→ sửa hình tổng thể
```

Nên:

```text
Overall Shape
     ↓
Large Shapes
     ↓
Medium Shapes
     ↓
Small Details
     ↓
Texture
```

---

## 44.2. Tách Modeling và Texturing khi cần

Workflow phổ biến:

```text
Model
 ↓
Topology
 ↓
UV
 ↓
Texture
```

Không nhất thiết phải hoàn thiện texture trong lúc mesh vẫn còn thay đổi mạnh.

---

## 44.3. Procedural Mapping rất hữu ích khi Blockout

Đặc biệt cho:

```text
Level Design
Environment
Architecture
Terrain
Grayboxing
Whiteboxing
Prototype
```

---

# 45. UV Mapping vs Procedural Mapping

| Tiêu chí                    | UV Mapping        | Procedural / Generated Mapping |
| --------------------------- | ----------------- | ------------------------------ |
| Cần UV unwrap               | Có                | Không nhất thiết               |
| Kiểm soát texture chính xác | Rất cao           | Trung bình                     |
| Mesh thay đổi               | Có thể làm UV méo | Thích nghi tốt hơn             |
| Character                   | Rất phù hợp       | Ít phù hợp hơn                 |
| Environment                 | Phù hợp           | Rất phù hợp                    |
| Blockout                    | Không tối ưu      | Rất tốt                        |
| Texture painting            | Rất tốt           | Không phải mục đích chính      |
| Tile texture                | Tốt               | Rất tốt                        |
| Game level prototype        | Khá               | Rất tốt                        |

---

# 46. Delete vs Dissolve

| Thao tác        | Kết quả                          |
| --------------- | -------------------------------- |
| Delete Vertex   | Xóa vertex và geometry phụ thuộc |
| Delete Edge     | Xóa edge, có thể phá Face        |
| Delete Face     | Xóa Face                         |
| Dissolve Vertex | Xóa vertex nhưng cố giữ bề mặt   |
| Dissolve Edge   | Xóa edge nhưng cố giữ Face       |
| `Ctrl + X`      | Dissolve nhanh                   |

---

# 47. Các phím tắt cần nhớ

| Phím          | Chức năng               |
| ------------- | ----------------------- |
| `Tab`         | Object Mode ↔ Edit Mode |
| `G`           | Move                    |
| `G → Z`       | Move theo Z             |
| `S`           | Scale                   |
| `E`           | Extrude                 |
| `A`           | Select All              |
| `X`           | Delete Menu             |
| `Ctrl + X`    | Dissolve                |
| `Ctrl + R`    | Loop Cut                |
| `Shift + D`   | Duplicate               |
| `Shift + G`   | Select Similar          |
| `Alt + N`     | Normal Menu             |
| `Shift + Tab` | Toggle Snap             |
| `Numpad 1`    | Front View              |
| `Ctrl + A`    | Apply Transform         |
| `Ctrl + J`    | Join Objects            |

---

# 48. Các thuật ngữ quan trọng

| English                 | Tiếng Việt / Ý nghĩa                            |
| ----------------------- | ----------------------------------------------- |
| UV Mapping              | Ánh xạ texture bằng tọa độ UV                   |
| Procedural Mapping      | Ánh xạ texture theo phương pháp thủ tục         |
| Generated Coordinates   | Tọa độ tự sinh                                  |
| Mapping                 | Điều khiển vị trí/xoay/scale của tọa độ texture |
| Box Projection          | Chiếu texture dạng hộp                          |
| Triplanar Projection    | Chiếu texture theo ba trục                      |
| Texture Stretching      | Texture bị kéo giãn                             |
| Correct Face Attributes | Tự điều chỉnh thuộc tính Face khi transform     |
| Loop Cut                | Tạo vòng cắt                                    |
| Subdivide               | Chia nhỏ geometry                               |
| Quad                    | Polygon bốn cạnh                                |
| Topology                | Cấu trúc vertex–edge–face                       |
| Dissolve                | Xóa geometry nhưng cố giữ bề mặt                |
| Normal                  | Vector chỉ hướng bề mặt                         |
| Snap                    | Bắt dính                                        |
| Pivot Point             | Tâm biến đổi                                    |
| Object Origin           | Gốc của Object                                  |
| Active Object           | Object chủ động trong selection                 |
| Join                    | Gộp nhiều Object                                |
| Reference Image         | Ảnh tham chiếu                                  |

---

# 49. Sơ đồ tổng hợp bài học

```text
                    TEXTURE MAPPING
                           │
             ┌─────────────┴─────────────┐
             │                           │
          UV Mapping              Procedural Mapping
             │                           │
      UV Coordinates               Generated
             │                           │
      Mesh thay đổi                    Mapping
             │                           │
      Stretching                 Image Texture
             │                           │
Correct Face Attributes           Box Projection
                                         │
                                  Triplanar-like
                                         │
                                 Level / Environment


                    BASIC MODELING
                           │
                     Reference
                           │
                    Analyze Shape
                           │
                         Cube
                           │
                  Loop Cut/Subdivide
                           │
                     Quad Topology
                           │
                 Duplicate Grid/Stone
                           │
                 Scale Variations
                           │
                 Snap to Centers
                           │
                      Join Meshes
                           │
                   Apply Transform
                           │
                      Modifiers
                    (bài tiếp theo)
```

---

# 50. Những lỗi thường gặp

### Lỗi 1 — Texture bị stretch

**Nguyên nhân:**

* mesh được thay đổi;
* UV không thay đổi tương ứng.

**Khắc phục:**

* unwrap lại;
* bật Correct Face Attributes;
* hoặc dùng Generated / Box Mapping.

---

### Lỗi 2 — Extrude nhưng mặt mới không có texture đúng

Nguyên nhân:

```text
New Geometry
→ chưa được UV unwrap đúng
```

Khắc phục:

```text
UV Unwrap lại
```

hoặc sử dụng procedural mapping trong giai đoạn blockout.

---

### Lỗi 3 — Chỉ chọn Vertex phía trước

Nguyên nhân:

```text
X-Ray = Off
```

Khắc phục:

```text
Toggle X-Ray
```

hoặc Wireframe Mode.

---

### Lỗi 4 — Delete Edge làm mất Face

Thay vì:

```text
X → Edge
```

có thể dùng:

```text
Dissolve Edge
```

hoặc:

```text
Ctrl + X
```

---

### Lỗi 5 — Face Normal bị đảo

Bật:

```text
Face Orientation
```

sau đó:

```text
A
Alt + N
Flip
```

---

### Lỗi 6 — Scale làm mất chiều cao viên đá

Không nên Scale đồng thời cả X/Y/Z nếu muốn giữ Z.

Nên chỉ scale:

```text
X
Y
```

và giữ:

```text
Z = 1
```

---

### Lỗi 7 — Snap sai vị trí

Kiểm tra:

```text
Snap Element
Snap Base
Transform Pivot
```

Đối với bài:

```text
Face Center
Edge Center
Center
```

là những thiết lập quan trọng.

---

# 51. Thực hành đề xuất

## Bài tập 1 — Quan sát UV Stretching

1. Tạo Cube.
2. UV unwrap.
3. Gắn một texture dạng grid.
4. Chọn Face trên cùng.
5. Nhấn:

```text
G → Z
```

6. Quan sát UV Editor.
7. Ghi nhận texture bị kéo giãn.

---

## Bài tập 2 — Correct Face Attributes

Lặp lại bài tập trên nhưng bật:

```text
Options
→ Correct Face Attributes
```

So sánh:

```text
OFF             ON

UV cố định      UV thay đổi
    ↓               ↓
Stretching      Ít stretching hơn
```

---

## Bài tập 3 — Box Mapping

Tạo:

```text
Texture Coordinate
       ↓
Generated
       ↓
Mapping
       ↓
Image Texture
Projection = Box
```

Sau đó:

```text
Extrude
Move
Scale
```

mesh và quan sát texture.

---

## Bài tập 4 — Cobblestone Grid

Tạo:

```text
2 m × 2 m
```

grid sau đó:

* subdivide;
* duplicate stone;
* thay đổi kích thước;
* snap vào face center;
* tạo ít nhất 12 viên đá.

---

# 52. Thử thách mở rộng

Tự tạo một đoạn đường:

```text
3 m × 6 m
```

gồm khoảng:

```text
20–30 viên đá
```

với:

* ít nhất 4 kích thước khác nhau;
* khoảng cách không hoàn toàn đều;
* texture đá dạng tile;
* Box Mapping;
* không có texture stretching rõ rệt.

Sau đó thử tạo hai phiên bản:

```text
Version A
UV Mapping

Version B
Generated + Box Mapping
```

và so sánh workflow.

---

# 53. Checklist bài học

* [ ] Hiểu nguyên nhân texture stretching.
* [ ] Biết sự khác nhau giữa UV Mapping và Generated Mapping.
* [ ] Biết sử dụng Texture Coordinate Node.
* [ ] Biết vai trò của Mapping Node.
* [ ] Biết sử dụng Box Projection.
* [ ] Hiểu khái niệm Triplanar Projection.
* [ ] Biết sử dụng Correct Face Attributes.
* [ ] Phân biệt Repeat, Extend và Clip.
* [ ] Sử dụng được Loop Cut.
* [ ] Sử dụng được Subdivide.
* [ ] Hiểu Quad và Topology.
* [ ] Phân biệt Delete và Dissolve.
* [ ] Biết kiểm tra Face Normal.
* [ ] Biết Duplicate bằng `Shift + D`.
* [ ] Biết sử dụng Face Center / Edge Center Snap.
* [ ] Biết tạo variation cho các viên đá.
* [ ] Biết Join nhiều mesh thành một Object.
* [ ] Hiểu vai trò của Object Origin.
* [ ] Biết Apply Transform.
* [ ] Đã tạo thử một cobblestone pathway.
* [ ] Đã lưu file Blender thực hành.

---

# 54. Tóm tắt

Bài học kết nối hai chủ đề nền tảng của Blender: **texture mapping** và **basic modeling**.

Về texture, điểm quan trọng nhất là hiểu rằng:

```text
UV Mapping
= texture phụ thuộc vào UV do người dùng tạo

Generated / Procedural Mapping
= texture có thể dựa trực tiếp vào không gian của object
```

Khi mesh thay đổi sau UV unwrap, texture có thể bị stretching. Có thể giải quyết bằng:

```text
Correct Face Attributes
```

hoặc trong một số workflow environment/blockout:

```text
Generated
→ Mapping
→ Box Projection
```

Về modeling, bài học xây dựng nền tảng qua quy trình:

```text
Reference
→ Simple Shape
→ Loop Cut
→ Subdivide
→ Quad Topology
→ Duplicate
→ Snap
→ Join
→ Apply Transform
```

Các kiến thức này chuẩn bị trực tiếp cho bài tiếp theo, nơi **Modifiers** được sử dụng để biến hình dạng cobblestone đơn giản thành một asset có hình dáng tự nhiên và chi tiết hơn.

> **Nguyên tắc quan trọng cần nhớ:** bắt đầu modeling bằng hình dạng đơn giản, giữ topology dễ kiểm soát, chỉ thêm chi tiết khi cấu trúc tổng thể đã đúng, và lựa chọn phương pháp texture phù hợp với giai đoạn của asset.

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
