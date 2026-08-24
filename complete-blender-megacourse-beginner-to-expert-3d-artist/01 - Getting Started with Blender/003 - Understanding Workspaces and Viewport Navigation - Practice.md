# 003 — Understanding Workspaces and Viewport Navigation

## Hiểu Workspace và điều hướng 3D Viewport trong Blender

| Thuộc tính        | Nội dung                                                |
| ----------------- | ------------------------------------------------------- |
| **Section**       | Section 01 — Getting Started with Blender               |
| **Bài học**       | Understanding Workspaces and Viewport Navigation        |
| **Loại nội dung** | Video lecture                                           |
| **Thời lượng**    | 13:22                                                   |
| **Ngôn ngữ**      | English                                                 |
| **Chủ đề chính**  | Blender Workspace, Editor Area, 3D Viewport, Navigation |
| **Mức độ**        | Beginner                                                |

---

## 1. Mục tiêu bài học

Sau bài học này, người học có thể:

* Hiểu khái niệm **Workspace** trong Blender.
* Nhận biết các **Editor Area** chính trong workspace `Layout`.
* Phân biệt:

  * **3D Viewport**
  * **Outliner**
  * **Properties Editor**
  * **Timeline**
* Biết cách thay đổi kích thước, đóng và sắp xếp các Editor Area.
* Hiểu chức năng của các workspace:

  * Layout
  * Modeling
  * Sculpting
  * UV Editing
  * Texture Paint
  * Shading
  * Animation
  * Rendering
  * Compositing
  * Geometry Nodes
  * Scripting
* Hiểu hệ tọa độ `X / Y / Z` của Blender.
* Hiểu sự khác nhau giữa:

  * **World Origin**
  * **3D Cursor**
  * **Object Origin**
* Điều hướng 3D Viewport bằng chuột và Numpad.
* Chuyển đổi giữa **Perspective** và **Orthographic View**.
* Điều chỉnh **Focal Length**, **Clip Start**, **Clip End**.
* Tìm lại object khi bị mất phương hướng trong viewport.

---

# 2. Blender Workspace là gì?

**Workspace** có thể hiểu là một bố cục giao diện được Blender chuẩn bị cho một nhóm công việc cụ thể.

Ví dụ:

```text
Modeling
   ↓
UV Editing
   ↓
Texture Paint / Shading
   ↓
Animation
   ↓
Rendering
   ↓
Compositing
```

Mỗi Workspace thường chứa nhiều **Editor Area** được sắp xếp khác nhau để phù hợp với công việc đang thực hiện.

---

# 3. Preferences — thiết lập giao diện Blender

Có thể mở phần thiết lập bằng:

```text
Edit
└── Preferences
```

Trong Preferences có thể tùy chỉnh nhiều thành phần của Blender.

Ví dụ trong bài học, giảng viên tăng:

```text
Resolution Scale → 1.1
```

để chữ và thành phần giao diện lớn hơn, dễ quan sát hơn trong video.

---

## 3.1 Add-ons

Blender hỗ trợ hệ thống **Add-on** để bổ sung chức năng.

Ví dụ:

* Import/Export
* Rigging
* UV
* Modeling tools
* Workflow utilities
* Screencast Keys

Trong bài giảng, **Screencast Keys** được bật để hiển thị những phím và thao tác chuột mà giảng viên đang sử dụng.

```text
User Input
   │
   ├── Mouse Click
   ├── Keyboard Shortcut
   └── Modifier Key
          ↓
   Screencast Keys
          ↓
Hiển thị thao tác trên màn hình
```

> Screencast Keys chủ yếu hữu ích khi quay tutorial hoặc trình diễn thao tác.

---

# 4. Workspace Layout

Workspace mặc định được giới thiệu trong bài là:

**Layout**

Layout thường được chia thành bốn khu vực chính:

```text
┌──────────────────────────────────────┬───────────────┐
│                                      │               │
│                                      │   Outliner    │
│                                      │               │
│            3D Viewport               ├───────────────┤
│                                      │               │
│                                      │  Properties   │
│                                      │               │
├──────────────────────────────────────┴───────────────┤
│                     Timeline                          │
└──────────────────────────────────────────────────────┘
```

---

# 5. 3D Viewport

**3D Viewport** là khu vực chính để tương tác với scene 3D.

Tại đây bạn có thể:

* Quan sát model.
* Chọn object.
* Di chuyển object.
* Rotate.
* Scale.
* Edit Mesh.
* Sculpt.
* Đặt camera.
* Điều chỉnh ánh sáng.
* Xem vật liệu.
* Quan sát animation.

Có thể xem đây là **không gian làm việc 3D chính của Blender**.

---

# 6. Outliner

**Outliner** thường nằm ở góc trên bên phải.

Nó hiển thị cấu trúc các object trong scene.

Ví dụ:

```text
Scene Collection
│
├── Camera
├── Flower
└── Light
```

Nếu scene lớn hơn:

```text
Scene Collection
│
├── Environment
│   ├── Ground
│   └── Rocks
│
├── Characters
│   ├── Character_A
│   └── Character_B
│
├── Camera
└── Lights
    ├── Key_Light
    └── Fill_Light
```

Outliner đặc biệt quan trọng khi scene có hàng chục hoặc hàng trăm object.

---

# 7. Properties Editor

**Properties Editor** thường nằm ở phía dưới bên phải của workspace Layout.

Có thể chia các thuộc tính thành hai nhóm lớn.

---

## 7.1 Scene / Global Properties

Đây là những thiết lập liên quan đến scene hoặc quá trình render.

Ví dụ:

* Render Properties
* Output Properties
* Scene Properties
* World Properties
* Environment

```text
Properties
│
├── Render
├── Output
├── Scene
├── World
└── ...
```

---

# 8. Object-dependent Properties

Một số tab Properties chỉ xuất hiện hoặc thay đổi tùy theo object đang được chọn.

Ví dụ khi chọn một Mesh:

```text
Selected Object
      ↓
Object Properties
      ↓
Modifiers
      ↓
Particles / Physics
      ↓
Object Data
      ↓
Material
```

Nếu chọn Camera, một số thuộc tính sẽ đổi sang những thiết lập dành cho Camera.

```text
Select Flower
     ↓
Mesh-related properties

Select Camera
     ↓
Camera-related properties
```

### Quy tắc quan trọng

> **Properties Editor phụ thuộc vào Context — object hoặc thành phần đang được chọn.**

Vì vậy nếu không tìm thấy một tab nào đó, hãy kiểm tra object hiện đang được chọn.

---

# 9. Timeline

Editor Area phía dưới của Layout mặc định thường là:

**Timeline**

Timeline được dùng chủ yếu cho animation.

Ví dụ:

```text
Frame 1 -------------------------------- Frame 250
   ▲
Current Frame
```

Khi animation chạy:

```text
1 → 2 → 3 → 4 → 5 → ... → End Frame
```

### Shortcut được nhắc đến

| Thao tác               | Shortcut             |
| ---------------------- | -------------------- |
| Play / Pause Animation | `Spacebar`           |
| Về frame đầu           | `Shift + Left Arrow` |

Ở giai đoạn đầu khóa học chưa sử dụng animation nên giảng viên tạm đóng Timeline để có nhiều không gian hơn cho 3D Viewport.

---

# 10. Thay đổi kích thước Editor Area

Đưa chuột tới đường biên giữa hai editor.

Con trỏ sẽ thay đổi để cho phép kéo.

```text
Editor A │ Editor B
         ↑
      Boundary
```

Sau đó:

```text
Left Mouse
+
Drag
```

để thay đổi kích thước từng vùng.

---

# 11. Join Areas — đóng một Editor Area

Blender cho phép ghép hai Area lại với nhau bằng:

**Join Areas**

Ý tưởng:

```text
Trước

┌─────────────────┐
│   3D Viewport   │
├─────────────────┤
│    Timeline     │
└─────────────────┘

        ↓
    Join Areas

Sau

┌─────────────────┐
│                 │
│   3D Viewport   │
│                 │
└─────────────────┘
```

Trong bài học, Timeline được đóng để mở rộng 3D Viewport.

---

# 12. Các Workspace chính của Blender

Ở phía trên cửa sổ Blender có các tab Workspace.

---

## 12.1 Layout

Workspace tổng quát.

Phù hợp để:

* Sắp xếp scene.
* Chọn object.
* Transform object.
* Quan sát toàn bộ project.

---

## 12.2 Modeling

Dùng chủ yếu để chỉnh sửa geometry.

Khi làm việc với Mesh, bạn thường sử dụng:

```text
Object Mode
   ↓
Edit Mode
   ↓
Vertex / Edge / Face Editing
```

Nội dung Edit Mesh sẽ được học kỹ hơn ở bài sau.

---

## 12.3 Sculpting

Dùng để điêu khắc model bằng các brush.

```text
Mesh
 ↓
Sculpt Brush
 ↓
Push / Pull / Smooth / Crease...
 ↓
Detailed Shape
```

Phù hợp với:

* Nhân vật.
* Sinh vật.
* Đá.
* Địa hình.
* Organic modeling.

---

# 13. UV Editing

UV Editing được sử dụng để chuyển bề mặt 3D thành biểu diễn 2D.

Ví dụ:

```text
3D Mesh
   ↓
UV Unwrap
   ↓
2D UV Layout
   ↓
Texture
   ↓
Material trên Mesh
```

Có thể hình dung giống như tháo một chiếc hộp giấy ra thành mặt phẳng.

```text
       ┌───┐
       │   │
   ┌───┼───┼───┐
   │   │   │   │
   └───┼───┼───┘
       │   │
       └───┘
```

Sau đó texture 2D được ánh xạ lại lên model 3D.

---

# 14. Texture Paint

Workspace này cho phép **vẽ trực tiếp texture lên model**.

Pipeline đơn giản:

```text
3D Mesh
   ↓
UV
   ↓
Texture Paint
   ↓
Paint trực tiếp lên model
   ↓
Texture Image
```

Ví dụ:

* Vẽ màu da.
* Vẽ hoa văn.
* Vẽ vết xước.
* Vẽ mắt.
* Vẽ pattern.

---

# 15. Shading

Workspace **Shading** được dùng để xây dựng Material.

Thường sử dụng hệ thống:

**Shader Nodes**

Ví dụ:

```text
Image Texture
      ↓
Principled BSDF
      ↓
Material Output
```

Một material phức tạp hơn:

```text
Noise Texture
      ↓
ColorRamp
      ↓
Principled BSDF
      ↓
Material Output
```

Workspace này sẽ trở nên rất quan trọng khi học:

* Material
* Texture
* Roughness
* Metallic
* Normal
* Procedural Texture

---

# 16. Animation

Workspace Animation được thiết kế để thực hiện animation.

Có thể bao gồm:

```text
3D Viewport
+
Timeline
+
Dope Sheet
+
Graph Editor
```

Pipeline cơ bản:

```text
Object / Bone
      ↓
Keyframe
      ↓
Timeline
      ↓
Interpolation
      ↓
Animation
```

---

# 17. Rendering

Workspace Rendering dùng để xem kết quả render.

Shortcut quan trọng:

```text
F12
```

Thực hiện:

**Render Image**

Pipeline:

```text
Scene
 ↓
Camera
 ↓
Lights
 ↓
Materials
 ↓
Render Engine
 ↓
F12
 ↓
Rendered Image
```

---

# 18. Compositing

Sau khi render, Blender cho phép xử lý hình ảnh bằng hệ thống node.

Ví dụ:

```text
Rendered Image
      ↓
Compositor
      ↓
Glare
      ↓
Color Correction
      ↓
Vignette
      ↓
Final Image
```

Compositing có thể được dùng để thêm:

* Glare
* Bloom-like effects
* Color adjustment
* Vignette
* Blur
* Mask
* Lens effects

---

# 19. Geometry Nodes

**Geometry Nodes** là hệ thống procedural modeling dựa trên Node.

Thay vì chỉnh từng vertex thủ công:

```text
Manual Modeling
Vertex → Edge → Face → Repeat
```

có thể xây dựng:

```text
Input Geometry
      ↓
Geometry Nodes
      ↓
Procedural Operations
      ↓
Generated Geometry
```

Ví dụ:

```text
Points
  ↓
Distribute Points
  ↓
Instance on Points
  ↓
Hundreds of Objects
```

Geometry Nodes đặc biệt mạnh cho:

* Procedural environment.
* Vegetation.
* Scattering.
* Pattern.
* Parametric modeling.
* Motion graphics.

---

# 20. Scripting

Blender cũng cung cấp Workspace:

**Scripting**

Blender sử dụng:

```text
Python
```

Ví dụ có thể dùng Python để:

* Tạo object tự động.
* Batch rename.
* Import/export.
* Tạo animation.
* Xây add-on.
* Tự động hóa workflow.

Pipeline:

```text
Python Script
     ↓
Blender Python API
     ↓
Objects / Materials / Scene / Animation
```

---

# 21. Workspace không phải cấu trúc cố định

Workspace chỉ là một cách bố trí giao diện.

Bạn có thể:

* Thêm Workspace.
* Xóa Workspace.
* Thay đổi các Editor.
* Resize Editor.
* Join Area.
* Split Area.
* Tạo Workspace riêng.

Do đó:

```text
Workspace
≠
Feature cố định

Workspace
=
Bố cục giao diện phục vụ workflow
```

---

# 22. Hệ tọa độ Blender

Blender sử dụng ba trục:

```text
X
Y
Z
```

Trong đó:

* `X` → ngang.
* `Y` → chiều sâu trên mặt phẳng ground.
* `Z` → chiều cao.

Có thể hình dung:

```text
               +Z
                ↑
                │
                │
                ●──────→ +X
               /
              /
            +Y
```

Mặt sàn thường nằm trên:

$$
XY
$$

và chiều cao nằm theo:

$$
Z
$$

---

# 23. Gizmo trục tọa độ

Ở góc trên bên phải 3D Viewport có **Navigation Gizmo**.

Nó hiển thị:

* X
* Y
* Z

Bạn có thể click vào các trục để chuyển nhanh sang những hướng nhìn chuẩn.

Ví dụ:

```text
Front
Right
Top
Back
Left
Bottom
```

---

# 24. Numpad View Shortcuts

Ba shortcut rất quan trọng:

| View           | Shortcut   |
| -------------- | ---------- |
| **Front View** | `Numpad 1` |
| **Right View** | `Numpad 3` |
| **Top View**   | `Numpad 7` |

Có thể ghi nhớ:

```text
1 → Front
3 → Side
7 → Top
```

---

# 25. Orthographic View

Khi sử dụng:

```text
Numpad 1
Numpad 3
Numpad 7
```

Blender thường chuyển sang **Orthographic View**.

Orthographic không có hiệu ứng thu nhỏ theo khoảng cách như Perspective.

```text
Orthographic

┌────┐
│    │
└────┘

Object xa hơn
┌────┐
│    │
└────┘

→ Kích thước biểu kiến gần như không đổi
```

Nó đặc biệt hữu ích khi:

* Modeling.
* Align object.
* Kiểm tra silhouette.
* Làm theo blueprint/reference.

---

# 26. Perspective View

Perspective mô phỏng cách mắt hoặc camera quan sát thế giới.

```text
Near Object
████████

Far Object
  ████
```

Object càng xa sẽ trông càng nhỏ.

Đây thường là góc nhìn tự nhiên hơn khi quan sát scene.

---

# 27. Chuyển Perspective ↔ Orthographic

Shortcut:

```text
Numpad 5
```

Workflow:

```text
Perspective
     │
 Numpad 5
     ↓
Orthographic
     │
 Numpad 5
     ↓
Perspective
```

---

# 28. 3D Cursor

Trong scene có một thành phần gọi là:

**3D Cursor**

Nó thường xuất hiện ban đầu tại:

$$
X = 0
$$

$$
Y = 0
$$

$$
Z = 0
$$

hay:

$$
(0,0,0)
$$

Đây cũng là **World Origin** của scene.

---

# 29. World Origin

World Origin là điểm gốc của hệ tọa độ thế giới.

```text
               Z
               ↑
               │
               │
Y ─────────── (0,0,0) ─────────── X
```

World Origin luôn ở:

$$
(0,0,0)
$$

---

# 30. 3D Cursor không phải World Origin

Một điểm rất quan trọng:

> 3D Cursor **có thể di chuyển**, còn World Origin thì không.

Ví dụ:

```text
World Origin
(0,0,0)
   ●

3D Cursor
(2,3,1)
       ⊕

Object
(5,2,0)
             ■
```

---

# 31. Shift + S — Snap Menu

Shortcut:

```text
Shift + S
```

mở menu **Snap**.

Một trong các thao tác được nhắc tới là:

**Cursor to World Origin**

Kết quả:

```text
3D Cursor
    ↓
(0,0,0)
```

---

# 32. Object Origin

Mỗi Object có **Object Origin riêng**.

Ví dụ ban đầu:

```text
World Origin
      ●
      │
Object Origin
      ●
```

Nếu di chuyển object:

```text
World Origin
●

                 Object
                   ■
                   ●
             Object Origin
```

Do đó:

```text
World Origin
≠
Object Origin
≠
3D Cursor
```

Đây là ba khái niệm khác nhau.

---

# 33. Sidebar — phím N

Trong 3D Viewport:

```text
N
```

mở hoặc đóng Sidebar.

Một trong những tab quan trọng là:

**Item**

Tại đây có thể xem Transform của object:

```text
Transform
│
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

```text
Location
X = 0
Y = 0
Z = 0
```

nghĩa là Object Origin đang nằm tại World Origin.

---

# 34. Điều hướng 3D Viewport

Đây là phần quan trọng nhất của bài học.

Có ba thao tác cơ bản:

```text
Orbit
Pan
Zoom
```

---

# 35. Orbit — xoay góc nhìn

Giữ:

```text
Middle Mouse Button
```

và kéo chuột.

```text
MMB + Drag
```

Kết quả:

```text
        Camera View
             ↘
              ↓
Object ← Orbit → Object
              ↑
             ↗
```

Bạn đang **xoay góc nhìn xung quanh scene**, không phải xoay object.

---

# 36. Pan — tịnh tiến góc nhìn

Giữ:

```text
Shift + Middle Mouse Button
```

sau đó kéo.

```text
Shift + MMB + Drag
```

Có thể di chuyển góc nhìn:

```text
← Left

→ Right

↑ Up

↓ Down
```

---

# 37. Zoom

Sử dụng:

```text
Mouse Wheel
```

### Scroll Up

```text
Zoom In
```

### Scroll Down

```text
Zoom Out
```

---

# 38. Bộ ba Navigation quan trọng

Nên ghi nhớ ngay:

| Chức năng | Shortcut             |
| --------- | -------------------- |
| **Orbit** | `MMB + Drag`         |
| **Pan**   | `Shift + MMB + Drag` |
| **Zoom**  | `Mouse Wheel`        |

Có thể nhớ bằng sơ đồ:

```text
             NAVIGATION
                 │
        ┌────────┼────────┐
        │        │        │
      Orbit     Pan      Zoom
        │        │        │
       MMB   Shift+MMB   Wheel
```

---

# 39. Viewport Camera không phải Scene Camera

Một điểm dễ nhầm:

```text
Viewport View
≠
Camera Object
```

### Viewport

Là góc bạn đang sử dụng để làm việc trong Blender.

### Camera Object

Là camera thực sự nằm trong scene và được sử dụng cho render.

```text
Your Eyes
   ↓
Viewport

Camera Object
   ↓
Final Render
```

Do đó thay đổi cách bạn orbit viewport không có nghĩa là bạn đã di chuyển Camera object.

---

# 40. Focal Length của Viewport

Trong phần:

```text
N
└── View
```

có thể thay đổi **Focal Length** của viewport.

Ví dụ:

```text
30 mm
50 mm
80 mm
```

Focal Length ảnh hưởng đến cảm giác Perspective.

### Focal Length thấp

```text
Wide perspective
→ Cảm giác góc rộng
→ Perspective mạnh hơn
```

### Focal Length cao

```text
Narrow perspective
→ Góc nhìn phẳng hơn
```

Trong thao tác thông thường, không cần thay đổi liên tục thông số này.

---

# 41. Clip Start và Clip End

Viewport có giới hạn khoảng cách hiển thị.

Hai giá trị quan trọng:

```text
Clip Start
Clip End
```

---

## Clip Start

Quy định vật thể gần viewport đến mức nào trước khi bị cắt.

```text
Viewer
  👁
  │
  │ Clip Start
  X──────────── Object
```

Nếu Clip Start quá lớn, object ở gần có thể bị cắt mất.

---

## Clip End

Quy định khoảng cách tối đa mà viewport có thể hiển thị.

```text
Viewer
  👁
   │
   ├──────────── Visible
   │
   ├──────────── Visible
   │
Clip End
   X
              Object too far
                   ■
             → không hiển thị
```

---

# 42. Tại sao object đôi khi "biến mất"?

Một nguyên nhân có thể là:

```text
Object
   ↓
nằm ngoài Clip Range
   ↓
Viewport không render object
   ↓
Có cảm giác object biến mất
```

Khi gặp vấn đề này, hãy kiểm tra:

* Clip Start.
* Clip End.
* Vị trí object.
* Khoảng cách viewport.

---

# 43. Bị lạc trong 3D Viewport

Khi mới dùng Blender rất dễ gặp tình trạng:

```text
Orbit
 ↓
Zoom
 ↓
Orbit tiếp
 ↓
Zoom tiếp
 ↓
"Object của mình đâu rồi?"
```

Blender cung cấp một số shortcut để xử lý.

---

# 44. Home — Frame All

Nhấn:

```text
Home
```

Blender sẽ điều chỉnh viewport để hiển thị toàn bộ các object trong scene.

```text
Lost View
   ↓
Home
   ↓
Frame All
   ↓
Toàn bộ scene xuất hiện lại
```

Đây là một shortcut rất hữu ích cho người mới.

---

# 45. Frame Selected

Nếu chỉ muốn tập trung vào object đang được chọn:

```text
Numpad .
```

tức **Numpad Decimal / Period**.

Ví dụ:

```text
Select Flower
      ↓
Numpad .
      ↓
Viewport Focus
      ↓
Flower
```

Sau đó khi Orbit, việc quan sát object sẽ thuận tiện hơn.

> Đây là một trong những shortcut quan trọng nhất khi modeling.

---

# 46. Frame Selected + Orbit

Một workflow rất thường dùng:

```text
Select Object
      ↓
Numpad .
      ↓
Frame Selected
      ↓
MMB
      ↓
Orbit quanh vùng object
```

Điều này hữu ích hơn rất nhiều so với việc cố gắng pan và zoom thủ công tới model.

---

# 47. Hủy thao tác View

Trong một số thao tác điều hướng hoặc transform, có thể dùng:

```text
Right Mouse Button
```

để hủy thao tác đang thực hiện.

Ngoài ra:

```text
Esc
```

cũng thường được sử dụng để cancel nhiều thao tác trong Blender.

---

# 48. Status Bar

Thanh trạng thái của Blender có thể hiển thị gợi ý thao tác hiện tại.

Ví dụ:

```text
LMB → Select
MMB → Rotate View
RMB → Cancel
```

Khi chưa nhớ shortcut, hãy quan sát khu vực này để hiểu những thao tác Blender đang cho phép.

---

# 49. Tổng hợp shortcut trong bài

| Chức năng                  | Shortcut             |
| -------------------------- | -------------------- |
| Play / Pause Timeline      | `Spacebar`           |
| Về frame đầu               | `Shift + ←`          |
| Front View                 | `Numpad 1`           |
| Right View                 | `Numpad 3`           |
| Top View                   | `Numpad 7`           |
| Perspective ↔ Orthographic | `Numpad 5`           |
| Orbit                      | `MMB + Drag`         |
| Pan                        | `Shift + MMB + Drag` |
| Zoom                       | `Mouse Wheel`        |
| Frame All                  | `Home`               |
| Frame Selected             | `Numpad .`           |
| Snap Menu                  | `Shift + S`          |
| Mở / đóng Sidebar          | `N`                  |
| Render Image               | `F12`                |
| Undo                       | `Ctrl + Z`           |

---

# 50. Navigation Cheat Sheet

```text
                    3D VIEWPORT
                         │
         ┌───────────────┼────────────────┐
         │               │                │
       ORBIT            PAN             ZOOM
         │               │                │
        MMB          Shift + MMB       Wheel
         │
         ├─────────────────────────────────┐
         │                                 │
    STANDARD VIEW                     VIEW MODE
         │                                 │
  ┌──────┼──────┐                    Numpad 5
  │      │      │                         │
  1      3      7                 Perspective
Front   Right   Top                       ↕
                                   Orthographic
```

---

# 51. Blender Workspace Workflow

Toàn bộ bài học có thể được hình dung như sau:

```text
BLENDER
│
├── Preferences
│   ├── Interface
│   └── Add-ons
│
├── Workspace
│   │
│   ├── Layout
│   │    ├── 3D Viewport
│   │    ├── Outliner
│   │    ├── Properties
│   │    └── Timeline
│   │
│   ├── Modeling
│   ├── Sculpting
│   ├── UV Editing
│   ├── Texture Paint
│   ├── Shading
│   ├── Animation
│   ├── Rendering
│   ├── Compositing
│   ├── Geometry Nodes
│   └── Scripting
│
└── 3D Viewport
    │
    ├── Coordinate System
    │   ├── X
    │   ├── Y
    │   └── Z
    │
    ├── Navigation
    │   ├── Orbit
    │   ├── Pan
    │   └── Zoom
    │
    ├── Projection
    │   ├── Perspective
    │   └── Orthographic
    │
    └── Focus
        ├── Home → Frame All
        └── Numpad . → Frame Selected
```

---

# 52. Các khái niệm dễ nhầm

## Workspace ≠ Editor

**Workspace** là một bố cục gồm nhiều Editor.

```text
Workspace
   ↓
Multiple Editors
```

Ví dụ Layout chứa:

```text
Layout
├── 3D Viewport
├── Outliner
├── Properties
└── Timeline
```

---

## Viewport ≠ Camera

```text
Viewport
→ góc nhìn để làm việc

Camera
→ góc nhìn dùng để render
```

---

## World Origin ≠ Object Origin

```text
World Origin
→ (0,0,0) của toàn scene

Object Origin
→ điểm tham chiếu transform của từng object
```

---

## 3D Cursor ≠ Object Origin

3D Cursor có thể được đặt ở bất kỳ vị trí nào và được dùng trong nhiều thao tác như:

* Đặt object mới.
* Snap.
* Làm pivot trong một số workflow.

---

## Orbit ≠ Rotate Object

```text
MMB
→ Orbit Viewport

R
→ Rotate Object
```

Đây là khác biệt rất quan trọng.

---

# 53. Workflow điều hướng nên hình thành ngay từ đầu

Thay vì liên tục zoom và pan một cách ngẫu nhiên, nên hình thành quy trình:

```text
1. Chọn Object
      ↓
2. Numpad .
      ↓
3. Frame Selected
      ↓
4. MMB → Orbit
      ↓
5. Shift + MMB → Pan nếu cần
      ↓
6. Wheel → Zoom
      ↓
7. Numpad 1 / 3 / 7 để kiểm tra hình dạng
```

Workflow này sẽ đặc biệt hữu ích khi học modeling.

---

# 54. Ví dụ thực tế

Giả sử đang modeling một bông hoa.

### Bước 1 — chọn object

```text
LMB → Flower
```

### Bước 2 — tập trung camera

```text
Numpad .
```

### Bước 3 — kiểm tra phía trước

```text
Numpad 1
```

### Bước 4 — kiểm tra bên phải

```text
Numpad 3
```

### Bước 5 — kiểm tra phía trên

```text
Numpad 7
```

### Bước 6 — quan sát tự do

```text
MMB + Drag
```

### Bước 7 — chỉnh vị trí quan sát

```text
Shift + MMB
```

### Bước 8 — phóng to

```text
Mouse Wheel
```

Đây gần như là chuỗi thao tác sẽ được sử dụng liên tục trong toàn bộ khóa học Blender.

---

# 55. Thực hành đề xuất

## Bài 1 — Workspace Exploration

Mở lần lượt:

1. Layout
2. Modeling
3. Sculpting
4. UV Editing
5. Texture Paint
6. Shading
7. Animation
8. Rendering
9. Compositing
10. Geometry Nodes
11. Scripting

Với mỗi Workspace, xác định:

* 3D Viewport nằm ở đâu?
* Có Editor nào mới?
* Workspace đó phục vụ công việc gì?

---

## Bài 2 — Editor Area

Trong Layout:

1. Thay đổi kích thước Outliner.
2. Thay đổi kích thước Properties.
3. Phóng lớn 3D Viewport.
4. Thử Join Timeline vào 3D Viewport.
5. Quan sát cách Blender thay đổi bố cục.

---

## Bài 3 — View Navigation

Chọn một object và luyện:

```text
MMB
Shift + MMB
Mouse Wheel
```

Cho đến khi có thể điều hướng mà không cần suy nghĩ về shortcut.

---

## Bài 4 — Standard Views

Lần lượt sử dụng:

```text
Numpad 1
Numpad 3
Numpad 7
```

Sau mỗi View thử:

```text
Numpad 5
```

để quan sát sự khác biệt giữa Perspective và Orthographic.

---

## Bài 5 — Recover Lost View

Cố tình:

1. Zoom rất xa.
2. Orbit nhiều vòng.
3. Pan object ra khỏi màn hình.

Sau đó dùng:

```text
Home
```

và:

```text
Numpad .
```

để tìm lại scene/object.

---

# 56. Thử thách mở rộng

Tạo một scene gồm:

```text
Cube
Sphere
Cylinder
Monkey
```

Sau đó:

1. Đặt chúng ở bốn vị trí khác nhau.
2. Chọn từng object.
3. Dùng `Numpad .` để focus.
4. Orbit quanh từng object.
5. Chuyển Front / Right / Top View.
6. Kiểm tra Location trong Sidebar `N`.
7. Dùng `Home` để quay lại toàn bộ scene.

Mục tiêu là có thể điều hướng scene hoàn toàn tự nhiên.

---

# 57. Những lỗi người mới thường gặp

### 1. Không thấy object

Thử:

```text
Home
```

hoặc:

```text
Select object → Numpad .
```

---

### 2. Một phần model bị cắt mất

Kiểm tra:

```text
N
→ View
→ Clip Start
```

---

### 3. Object ở xa không hiển thị

Kiểm tra:

```text
Clip End
```

---

### 4. Không tìm thấy Properties mong muốn

Kiểm tra object đang được chọn.

```text
Selected Object
      ↓
Context
      ↓
Available Properties
```

---

### 5. Nhấn MMB nhưng tưởng object đang xoay

`MMB` chỉ đang thay đổi **viewport orientation**.

Object thực tế vẫn giữ nguyên Rotation.

---

### 6. Perspective làm model trông méo khi modeling

Dùng:

```text
Numpad 1 / 3 / 7
```

để chuyển sang standard Orthographic View.

---

# 58. Thuật ngữ quan trọng

| English               | Tiếng Việt / Ý nghĩa                        |
| --------------------- | ------------------------------------------- |
| **Workspace**         | Không gian/bố cục làm việc                  |
| **Editor Area**       | Khu vực editor                              |
| **3D Viewport**       | Khung nhìn không gian 3D                    |
| **Outliner**          | Danh sách/cấu trúc object trong scene       |
| **Properties Editor** | Khu vực thuộc tính                          |
| **Timeline**          | Dòng thời gian                              |
| **Scene**             | Cảnh 3D                                     |
| **Object**            | Đối tượng                                   |
| **World Origin**      | Gốc tọa độ thế giới                         |
| **Object Origin**     | Điểm gốc của object                         |
| **3D Cursor**         | Con trỏ 3D                                  |
| **Orbit**             | Xoay góc nhìn                               |
| **Pan**               | Tịnh tiến góc nhìn                          |
| **Zoom**              | Phóng to / thu nhỏ                          |
| **Perspective**       | Phối cảnh                                   |
| **Orthographic**      | Hình chiếu trực giao                        |
| **Focal Length**      | Tiêu cự                                     |
| **Clip Start**        | Khoảng cắt gần                              |
| **Clip End**          | Khoảng cắt xa                               |
| **Frame Selected**    | Đưa object được chọn vào trung tâm viewport |
| **Frame All**         | Hiển thị toàn bộ scene                      |
| **Gizmo**             | Bộ điều khiển trực quan                     |
| **Add-on**            | Tiện ích mở rộng                            |
| **Geometry Nodes**    | Hệ thống procedural modeling bằng node      |
| **Compositing**       | Hậu kỳ hình ảnh                             |
| **Shading**           | Thiết lập vật liệu/shader                   |

---

# 59. Kiến thức cốt lõi cần nhớ

Nếu chỉ ghi nhớ những kiến thức quan trọng nhất của bài này, hãy nhớ:

```text
Workspace
    ↓
Bố cục dành cho từng loại công việc

Layout
    ↓
Viewport + Outliner + Properties + Timeline

Viewport Navigation
    ↓
MMB         → Orbit
Shift+MMB   → Pan
Wheel       → Zoom

Standard Views
    ↓
1 → Front
3 → Right
7 → Top
5 → Perspective / Orthographic

Lost?
    ↓
Home       → Frame All
Numpad .   → Frame Selected

Coordinate System
    ↓
X + Y → Ground Plane
Z     → Up
```

---

# 60. Checklist

* [ ] Hiểu Workspace là gì.
* [ ] Phân biệt Workspace và Editor Area.
* [ ] Xác định được 3D Viewport.
* [ ] Xác định được Outliner.
* [ ] Xác định được Properties Editor.
* [ ] Hiểu Properties thay đổi theo object đang chọn.
* [ ] Biết Timeline dùng để làm gì.
* [ ] Biết resize Editor Area.
* [ ] Hiểu cách Join Area.
* [ ] Biết mục đích của Modeling Workspace.
* [ ] Biết mục đích của Sculpting Workspace.
* [ ] Hiểu cơ bản UV Editing.
* [ ] Hiểu cơ bản Texture Paint.
* [ ] Hiểu cơ bản Shading.
* [ ] Biết Animation Workspace.
* [ ] Biết `F12` dùng để render.
* [ ] Hiểu Compositing dùng để hậu kỳ.
* [ ] Hiểu Geometry Nodes là procedural modeling.
* [ ] Biết Blender hỗ trợ Python scripting.
* [ ] Hiểu hệ tọa độ `X / Y / Z`.
* [ ] Biết `Z` là trục hướng lên.
* [ ] Phân biệt World Origin và Object Origin.
* [ ] Hiểu vai trò của 3D Cursor.
* [ ] Biết `Shift + S` mở Snap Menu.
* [ ] Biết `N` mở Sidebar.
* [ ] Biết `MMB` để Orbit.
* [ ] Biết `Shift + MMB` để Pan.
* [ ] Biết Mouse Wheel để Zoom.
* [ ] Biết `Numpad 1 / 3 / 7`.
* [ ] Biết `Numpad 5` chuyển Perspective/Orthographic.
* [ ] Biết `Home` để Frame All.
* [ ] Biết `Numpad .` để Frame Selected.
* [ ] Hiểu Clip Start và Clip End.
* [ ] Phân biệt Viewport View và Camera Object.
* [ ] Có thể tự điều hướng một scene mà không bị mất object.

---

# 61. Kết luận

Bài **Understanding Workspaces and Viewport Navigation** tạo nền móng cho gần như toàn bộ phần còn lại của khóa học.

Trước khi học modeling, material hay animation, người học cần thành thạo ba kỹ năng cơ bản:

```text
Hiểu giao diện
      +
Hiểu hệ tọa độ
      +
Điều hướng Viewport
      ↓
Làm việc hiệu quả trong Blender
```

Đặc biệt, bộ shortcut:

```text
MMB
Shift + MMB
Mouse Wheel
Numpad 1
Numpad 3
Numpad 7
Numpad 5
Numpad .
Home
```

nên được luyện tới mức gần như trở thành **muscle memory**.

Bài tiếp theo có thể chuyển từ việc **quan sát và điều hướng scene** sang trực tiếp thao tác với Object: **Move, Rotate, Scale, Object Mode, Edit Mode và cấu trúc Mesh**.

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
