# 003 — Interface and Settings

| Thuộc tính     | Nội dung                                                              |
| -------------- | --------------------------------------------------------------------- |
| **Phần**       | 01 — Introduction to Blender                                          |
| **Thời lượng** | 7:10                                                                  |
| **Chủ đề**     | Workspace, 3D Viewport, Outliner, Properties, Timeline và Preferences |
| **Mức độ**     | Nhập môn                                                              |
| **Trọng tâm**  | Làm quen giao diện Blender và thiết lập môi trường làm việc ban đầu   |

---

## 1. Mục tiêu bài học

Sau bài này, người học có thể:

* [ ] Nhận diện các khu vực chính trong giao diện Blender.
* [ ] Hiểu vai trò của **3D Viewport**, **Outliner**, **Properties** và **Timeline**.
* [ ] Biết cách chuyển đổi giữa các **Workspace**.
* [ ] Hiểu cách bật/tắt **Toolbar** và **Sidebar**.
* [ ] Biết các chế độ hiển thị chính của Viewport.
* [ ] Mở và chỉnh **Preferences**.
* [ ] Thiết lập GPU phù hợp cho Blender.
* [ ] Bật **Emulate Numpad** nếu bàn phím không có cụm phím số.
* [ ] Tăng số bước Undo để thao tác thuận tiện hơn.
* [ ] Hiểu vì sao nên giữ giao diện Blender bằng tiếng Anh.

---

# 2. Tổng quan giao diện Blender

Khi Blender khởi động lần đầu, bạn sẽ thấy **Splash Screen**.

Splash Screen cung cấp:

* Các template/workspace khởi tạo.
* Tài liệu tham khảo.
* Những project Blender mở gần đây.
* Liên kết đến tài liệu và cộng đồng Blender.

Có thể đóng Splash Screen bằng cách click vào vùng trống trong cửa sổ Blender.

Sau đó giao diện chính sẽ xuất hiện.

Có thể hình dung tổng thể như sau:

```text
┌──────────────────────────────────────────────────────────────┐
│ Menu Bar + Workspace Tabs                                   │
├──────────────────────────────────────────────┬───────────────┤
│                                              │   Outliner    │
│                                              │               │
│                 3D Viewport                  ├───────────────┤
│                                              │  Properties   │
│                                              │               │
├──────────────────────────────────────────────┴───────────────┤
│                         Timeline                              │
└──────────────────────────────────────────────────────────────┘
```

Đây là bố cục mặc định của workspace **Layout**.

---

# 3. 3D Viewport

Phần lớn màn hình được chiếm bởi:

```text
3D Viewport
```

Đây là nơi bạn:

* Quan sát scene.
* Chọn object.
* Di chuyển object.
* Xoay object.
* Scale object.
* Modeling.
* Rigging.
* Animation.
* Đặt camera.
* Bố trí scene.

Có thể xem 3D Viewport là:

> **Không gian làm việc trung tâm của Blender.**

---

## 3.1 Những gì thường xuất hiện trong Viewport

Scene mặc định thường có:

```text
Collection
│
├── Camera
├── Cube
└── Light
```

Trong Viewport bạn sẽ thấy:

* Cube.
* Camera.
* Light.
* Grid.
* Trục tọa độ.
* 3D Cursor.

---

# 4. Không cần học thuộc toàn bộ Blender

Giao diện Blender ban đầu có thể khá choáng ngợp vì có rất nhiều:

* Nút.
* Tab.
* Panel.
* Menu.
* Property.
* Editor.

Nhưng mục tiêu không phải:

```text
"Học thuộc từng nút trong Blender."
```

Mà là:

```text
Hiểu Blender hoạt động như thế nào
             ↓
Hiểu công cụ giải quyết vấn đề gì
             ↓
Sử dụng thường xuyên
             ↓
Thao tác trở thành phản xạ
```

Có thể so sánh với học lái xe: ban đầu cần nghĩ về từng thao tác, nhưng sau một thời gian việc điều khiển trở nên tự nhiên.

---

# 5. Toolbar — T Panel

Ở phía trái 3D Viewport là thanh công cụ:

```text
Toolbar
```

Thường được gọi quen là:

```text
T Panel
```

Có thể bật/tắt bằng:

```text
T
```

Ví dụ các công cụ thường thấy:

* Select.
* Cursor.
* Move.
* Rotate.
* Scale.
* Transform.
* Annotate.
* Measure.

Sơ đồ:

```text
3D Viewport
│
├── T → Toolbar
│     ├── Select
│     ├── Move
│     ├── Rotate
│     └── Scale
│
└── Không gian làm việc 3D
```

---

# 6. Sidebar — N Panel

Ở phía phải của 3D Viewport có một panel khác:

```text
Sidebar
```

Thường được gọi là:

```text
N Panel
```

Có thể bật/tắt bằng:

```text
N
```

Panel này thường chứa:

* Transform.
* Item.
* View.
* Tool.
* Các tab của Add-on.

---

## 6.1 Transform trong N Panel

Khi chọn một object, phần **Item** thường hiển thị:

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

Đây là nơi rất hữu ích khi cần nhập thông số chính xác.

Ví dụ:

```text
Location X = 2 m
Rotation Z = 90°
Scale X = 1
```

---

# 7. Add-on thường xuất hiện trong N Panel

Nhiều Blender Add-on bổ sung các tab riêng trong Sidebar.

Ví dụ:

```text
N Panel
│
├── Item
├── Tool
├── View
├── Add-on A
├── Add-on B
└── Add-on C
```

Vì vậy nếu cài một Add-on nhưng không biết giao diện của nó nằm ở đâu, một trong những vị trí đầu tiên nên kiểm tra là:

```text
3D Viewport → N
```

---

# 8. Outliner

Phía trên bên phải thường là:

```text
Outliner
```

Outliner giống như cây thư mục chứa toàn bộ đối tượng trong scene.

Ví dụ:

```text
Scene Collection
│
├── Environment
│   ├── Ground
│   └── Rocks
│
├── Fish
│   ├── Fish_Mesh
│   └── Fish_Rig
│
├── Camera
└── Lighting
    ├── Key_Light
    └── Fill_Light
```

---

## 8.1 Collection

Trong Blender, object có thể được tổ chức thành:

```text
Collections
```

Có thể xem Collection giống như:

```text
Folder
```

Ví dụ project cá:

```text
Scene
│
├── COLLECTION_FISH
│   ├── KOI_Mesh
│   ├── KOI_Rig
│   └── Swim_Path
│
├── COLLECTION_ENVIRONMENT
│   ├── Tank
│   ├── Rocks
│   └── Plants
│
├── COLLECTION_LIGHTING
│
└── COLLECTION_CAMERAS
```

Việc tổ chức scene bằng Collection rất quan trọng khi project trở nên lớn.

---

# 9. Vì sao phải tổ chức Outliner?

Một project nhỏ có thể chỉ có vài object.

Nhưng project thực tế có thể có:

```text
10 objects
↓
50 objects
↓
200 objects
↓
1000+ objects
```

Nếu không tổ chức ngay từ đầu, Outliner có thể trở thành:

```text
Cube
Cube.001
Cube.002
Plane
Plane.001
Plane.002
Sphere
Sphere.001
...
```

Rất khó quản lý.

Workflow tốt hơn:

```text
Object
   ↓
Đặt tên rõ ràng
   ↓
Cho vào Collection phù hợp
   ↓
Quản lý bằng Outliner
```

---

# 10. Properties Editor

Phía dưới Outliner thường là:

```text
Properties Editor
```

Đây là nơi chứa phần lớn cấu hình của scene và object.

Có rất nhiều tab nên người mới thường cảm thấy phức tạp.

Có thể hình dung:

```text
Properties
│
├── Render
├── Output
├── View Layer
├── Scene
├── World
├── Collection
├── Object
├── Modifiers
├── Constraints
├── Object Data
├── Material
└── ...
```

Không cần học toàn bộ ngay từ đầu.

Các tab sẽ được sử dụng dần trong các module sau.

---

# 11. Các nhóm Properties quan trọng

## Render Properties

Dùng để thiết lập:

* Render Engine.
* Sampling.
* Ray Tracing.
* Performance.
* Render quality.

---

## Output Properties

Dùng cho:

* Resolution.
* Frame rate.
* Start/End frame.
* Output directory.
* File format.

---

## World Properties

Dùng để thiết lập môi trường:

* Background.
* Environment lighting.
* HDRI.

---

## Object Properties

Dùng cho object đang chọn:

* Transform.
* Visibility.
* Viewport display.

---

## Modifier Properties

Quản lý Modifier như:

* Subdivision Surface.
* Mirror.
* Array.
* Solidify.
* Displace.

---

## Material Properties

Quản lý:

* Material.
* Shader.
* Surface properties.

---

# 12. Timeline

Phần dưới cùng của layout mặc định thường là:

```text
Timeline
```

Timeline chủ yếu phục vụ:

* Animation.
* Playback.
* Keyframe.
* Chọn frame.
* Xác định phạm vi animation.

Ví dụ:

```text
Frame
1 ─────── 24 ─────── 48 ─────── 72 ─────── 96
●           ●           ●                       ●
Keyframe
```

Nếu scene chưa có animation thì nhấn **Play** sẽ không tạo ra thay đổi đáng kể.

---

# 13. Timeline trong animation

Ví dụ một animation cá bơi:

```text
Frame 1       Frame 12       Frame 24       Frame 36       Frame 48
  │              │              │              │              │
Tail Left    Tail Center    Tail Right     Tail Center     Loop
```

Timeline cho phép di chuyển Playhead để xem từng trạng thái animation.

---

# 14. Menu Bar

Phía trên cùng Blender có các menu tiêu chuẩn:

```text
File
Edit
Render
Window
Help
```

Một số workspace hoặc mode còn có thêm các menu tương ứng.

---

# 15. File Menu

Dùng để quản lý file Blender.

Các chức năng quen thuộc:

```text
File
│
├── New
├── Open
├── Open Recent
├── Revert
├── Save
├── Save As
├── Import
├── Export
└── Quit
```

Các thao tác này tương tự nhiều phần mềm chuyên nghiệp khác.

---

# 16. Edit Menu

Menu **Edit** chứa nhiều thao tác chung.

Một mục đặc biệt quan trọng là:

```text
Edit → Preferences
```

Đây là nơi cấu hình Blender.

---

# 17. Render Menu

Menu:

```text
Render
```

được dùng để tạo hình ảnh hoặc animation từ scene.

Ví dụ:

```text
3D Scene
   ↓
Camera
   ↓
Lighting
   ↓
Materials
   ↓
Render Engine
   ↓
Render
   ↓
Image / Video
```

Chi tiết sẽ được học trong module rendering sau.

---

# 18. Window Menu

Menu:

```text
Window
```

cho phép quản lý các cửa sổ Blender.

Ví dụ:

* New Window.
* New Main Window.
* Toggle Window Fullscreen.

Các workflow nhiều màn hình đôi khi sử dụng nhiều cửa sổ Blender.

Ví dụ:

```text
Monitor 1
└── 3D Viewport

Monitor 2
├── Shader Editor
└── Image Editor
```

Nhưng với người mới, hầu hết thời gian chỉ cần một cửa sổ Blender.

---

# 19. Help Menu

Menu:

```text
Help
```

cung cấp các liên kết như:

* Blender Manual.
* Tutorials.
* Support.
* Report a Bug.
* Release Notes.

Nếu quên một chức năng, tài liệu Blender có thể giúp tra cứu.

---

# 20. Workspace là gì?

Phía trên Blender có các tab như:

```text
Layout
Modeling
Sculpting
UV Editing
Texture Paint
Shading
Animation
Rendering
Compositing
Geometry Nodes
```

Đây được gọi là:

```text
Workspaces
```

Một Workspace không phải là một chương trình riêng.

Nó chỉ là:

> **Một cách sắp xếp các Editor phù hợp với một nhiệm vụ cụ thể.**

---

# 21. Workspace Layout

Workspace mặc định:

```text
Layout
```

Phù hợp cho:

* Quản lý scene.
* Bố trí object.
* Transform.
* Công việc tổng quát.

Cấu trúc:

```text
Layout
│
├── 3D Viewport
├── Outliner
├── Properties
└── Timeline
```

Đây thường là workspace trung tâm.

---

# 22. Modeling Workspace

Workspace:

```text
Modeling
```

được tối ưu cho công việc chỉnh sửa mesh.

Ví dụ:

```text
Modeling
│
├── Vertex
├── Edge
├── Face
├── Extrude
├── Inset
├── Bevel
├── Loop Cut
└── Merge
```

Mục tiêu là đưa các công cụ modeling đến gần người dùng hơn.

---

# 23. Sculpting Workspace

Workspace:

```text
Sculpting
```

dành cho điêu khắc mesh.

Các công cụ có thể bao gồm:

```text
Brushes
│
├── Draw
├── Clay
├── Smooth
├── Grab
├── Inflate
├── Crease
└── ...
```

Workflow gần giống điêu khắc đất sét kỹ thuật số.

---

# 24. UV Editing Workspace

Workspace:

```text
UV Editing
```

dùng để tạo và chỉnh UV.

Cấu trúc thường có:

```text
┌─────────────────────┬─────────────────────┐
│      UV Editor      │    3D Viewport      │
│                     │                     │
│    UV Islands       │       Mesh          │
└─────────────────────┴─────────────────────┘
```

UV giúp ánh xạ hình ảnh 2D lên bề mặt object 3D.

---

# 25. Shading Workspace

Workspace:

```text
Shading
```

được sử dụng để:

* Tạo Material.
* Chỉnh Shader.
* Kết nối Shader Nodes.
* Preview vật liệu.

Ví dụ:

```text
Texture
   ↓
Shader Nodes
   ↓
Material
   ↓
Object Surface
```

---

# 26. Animation Workspace

Workspace:

```text
Animation
```

tổ chức các editor phục vụ animation.

Có thể gồm:

* 3D Viewport.
* Dope Sheet.
* Timeline.
* Graph Editor.
* Camera View.

Ví dụ:

```text
Animation
│
├── Keyframes
├── Curves
├── Timing
└── Playback
```

---

# 27. Rendering Workspace

Workspace:

```text
Rendering
```

hỗ trợ xem và quản lý kết quả render.

---

# 28. Chuyển đổi giữa các Workspace

Chỉ cần click vào tab ở phía trên.

Ví dụ:

```text
Layout
   ↓
Modeling
   ↓
Sculpting
   ↓
Shading
   ↓
Animation
```

Bạn có thể chuyển qua lại mà không làm mất object.

Điều quan trọng:

> **Workspace chỉ thay đổi bố cục giao diện, không tạo scene mới.**

---

# 29. Quay lại Layout

Nếu cảm thấy bị lạc trong các Workspace:

```text
Click → Layout
```

Đây là điểm quay lại an toàn.

Có thể xem:

```text
Layout = Home Base
```

---

# 30. Viewport Shading

Góc trên bên phải của 3D Viewport có các chế độ hiển thị.

Thông thường gồm:

```text
Viewport Shading
│
├── Wireframe
├── Solid
├── Material Preview
└── Rendered
```

---

# 31. Wireframe

Chỉ hiển thị khung lưới.

```text
Mesh Surface
    ↓
Edges only
```

Hữu ích khi:

* Xem topology.
* Chọn xuyên qua object.
* Kiểm tra mesh.

---

# 32. Solid

Đây là chế độ làm việc phổ biến nhất khi modeling.

Hiển thị:

* Shape.
* Geometry.
* Lighting đơn giản.

Nhưng không render material đầy đủ.

---

# 33. Material Preview

Hiển thị material và texture tương đối nhanh.

Workflow:

```text
Material
   ↓
Texture
   ↓
Material Preview
```

Rất hữu ích khi chỉnh vật liệu mà không muốn render toàn scene.

---

# 34. Rendered

Chế độ gần với kết quả render thực tế nhất.

Nó sử dụng:

* Scene lighting.
* Materials.
* World.
* Render engine.

Tuy nhiên:

```text
Rendered Mode
      ↓
Tốn tài nguyên GPU hơn
```

---

# 35. Tổng quan Editor

Các khu vực vừa học có thể tổng hợp như sau:

| Editor/Khu vực     | Chức năng chính                              |
| ------------------ | -------------------------------------------- |
| **3D Viewport**    | Tạo và thao tác object trong không gian 3D   |
| **Outliner**       | Quản lý object và Collection                 |
| **Properties**     | Thiết lập scene, object, material, render... |
| **Timeline**       | Điều khiển thời gian và animation            |
| **Toolbar**        | Công cụ thao tác trực tiếp                   |
| **Sidebar**        | Transform và các tùy chọn bổ sung            |
| **Workspace Tabs** | Chuyển bố cục theo công việc                 |

---

# 36. Mở Preferences

Để thiết lập Blender:

```text
Edit
 ↓
Preferences
```

Preferences chứa các nhóm như:

```text
Preferences
│
├── Interface
├── Themes
├── Viewport
├── Lights
├── Editing
├── Animation
├── Add-ons
├── Input
├── Navigation
├── Keymap
├── System
└── Save & Load
```

Tên hoặc vị trí chính xác có thể thay đổi nhẹ giữa các phiên bản.

---

# 37. System Settings

Bài giảng đặc biệt lưu ý phần:

```text
Preferences → System
```

Trong đây có cấu hình liên quan đến:

* GPU.
* Render Devices.
* Memory.
* Cycles.
* Hardware.

Nếu sử dụng Cycles, GPU có thể tăng đáng kể tốc độ render.

---

# 38. CPU và GPU khác nhau thế nào?

Có thể hình dung đơn giản:

```text
CPU
│
├── Ít core hơn
├── Core mạnh
└── Xử lý tác vụ tổng quát

GPU
│
├── Rất nhiều core
├── Xử lý song song
└── Rất phù hợp rendering
```

Với nhiều tác vụ render 3D:

```text
GPU Render
```

thường nhanh hơn CPU nếu có GPU tương thích.

---

# 39. NVIDIA — CUDA và OptiX

Nếu sử dụng NVIDIA, Blender có thể cung cấp các backend như:

```text
CUDA
OptiX
```

Nguyên tắc tổng quát:

### NVIDIA GTX đời cũ

Thường có thể sử dụng:

```text
CUDA
```

### NVIDIA RTX

Thường nên cân nhắc:

```text
OptiX
```

vì OptiX có thể tận dụng phần cứng ray tracing của RTX.

Sơ đồ:

```text
NVIDIA GPU
│
├── GTX / GPU hỗ trợ CUDA
│      ↓
│    CUDA
│
└── RTX
       ↓
     OptiX
```

---

# 40. Không nên áp dụng máy móc tên backend

Tùy phiên bản Blender và driver, danh sách compute device có thể khác nhau.

Do đó nên tập trung vào nguyên tắc:

```text
GPU của bạn
      ↓
Backend được Blender hỗ trợ
      ↓
Chọn GPU
      ↓
Test render
```

Không nên chỉ dựa vào một tên backend cố định từ video cũ.

---

# 41. AMD và Intel GPU

Các GPU khác có thể sử dụng backend phù hợp tùy phiên bản Blender.

Ví dụ tổng quát:

```text
NVIDIA → CUDA / OptiX

AMD → backend GPU được Blender hỗ trợ

Intel → backend GPU được Blender hỗ trợ
```

Tên chính xác có thể thay đổi theo Blender và driver.

---

# 42. Nếu không có GPU rời

Laptop văn phòng hoặc máy không có GPU rời vẫn có thể học Blender.

Workflow:

```text
Không có GPU rời
      ↓
CPU
      ↓
Modeling cơ bản
      ↓
Material cơ bản
      ↓
Animation cơ bản
      ↓
Render nhẹ
```

Bạn vẫn học được:

* Navigation.
* Modeling.
* UV.
* Material.
* Rigging.
* Animation.

Nhưng project nặng có thể:

* Render chậm hơn.
* Viewport chậm hơn.
* Khó sử dụng simulation lớn.
* Khó sử dụng scene nhiều polygon.

---

# 43. Có nên bỏ chọn CPU khi render bằng GPU?

Bài giảng khuyến nghị tập trung vào GPU nếu đã có GPU mạnh.

Tuy nhiên, hiệu quả CPU + GPU còn phụ thuộc vào:

* Render engine.
* GPU.
* CPU.
* Scene.
* Blender version.

Do đó cách tốt nhất là:

```text
GPU only
   ↓
Test Render

CPU + GPU
   ↓
Test Render

So sánh thời gian
```

Rồi chọn cấu hình nhanh và ổn định nhất trên chính máy của bạn.

---

# 44. Input Settings

Một thiết lập quan trọng khác:

```text
Preferences
   ↓
Input
```

Trong đó có:

```text
Emulate Numpad
```

---

# 45. Numpad dùng để làm gì?

Numpad là cụm phím số bên phải bàn phím full-size.

Blender sử dụng nó rất nhiều để đổi góc nhìn.

Ví dụ phổ biến:

| Phím       | Góc nhìn                   |
| ---------- | -------------------------- |
| `Numpad 1` | Front                      |
| `Numpad 3` | Right                      |
| `Numpad 7` | Top                        |
| `Numpad 5` | Perspective / Orthographic |
| `Numpad 0` | Camera View                |

Đây là lý do Numpad rất hữu ích khi dùng Blender.

---

# 46. Emulate Numpad

Nếu laptop hoặc bàn phím compact không có cụm Numpad:

```text
Preferences
   ↓
Input
   ↓
Emulate Numpad
```

Sau khi bật, hàng số phía trên bàn phím có thể được sử dụng cho một số thao tác navigation tương tự Numpad.

Sơ đồ:

```text
Có Numpad?
│
├── Có
│   └── Không cần Emulate Numpad
│
└── Không
    └── Bật Emulate Numpad
```

---

# 47. Lưu ý với Emulate Numpad

Khi bật tùy chọn này, các phím số thông thường có thể thay đổi chức năng trong Blender.

Do đó:

```text
Laptop không Numpad
→ nên bật

Keyboard full-size có Numpad
→ thường không cần
```

---

# 48. Undo

Một thiết lập khác được bài giảng đề cập là:

```text
Undo Steps
```

Undo giúp quay lại thao tác trước.

Phím tắt:

```text
Ctrl + Z
```

Ví dụ:

```text
Extrude
   ↓
Scale
   ↓
Rotate
   ↓
Delete
   ↓
Oops!
   ↓
Ctrl + Z
```

---

# 49. Tăng Undo Steps

Bài giảng đề xuất tăng từ:

```text
32
```

lên:

```text
64
```

Điều này giúp bạn có thể quay lại nhiều thao tác hơn.

Ví dụ:

```text
32 steps
   ↓
Quay lại tối đa 32 thao tác

64 steps
   ↓
Quay lại xa hơn
```

Đặc biệt hữu ích khi đang học vì người mới thường thử nhiều thao tác.

---

# 50. Undo Steps càng cao càng tốt?

Không hoàn toàn.

Undo có thể cần thêm bộ nhớ.

Vì vậy:

```text
Máy đủ RAM
   ↓
64 steps hợp lý

Scene cực lớn
   ↓
Cần cân nhắc bộ nhớ
```

Với các project học cơ bản, `64` thường là mức dễ sử dụng.

---

# 51. Interface Language

Blender hỗ trợ nhiều ngôn ngữ.

Bạn có thể chỉnh trong:

```text
Preferences
   ↓
Interface
   ↓
Translation / Language
```

Tuy nhiên bài giảng khuyến nghị sử dụng:

```text
English
```

---

# 52. Vì sao nên dùng Blender bằng tiếng Anh?

Phần lớn tài liệu Blender chuyên nghiệp sử dụng thuật ngữ tiếng Anh.

Ví dụ:

```text
Extrude
Bevel
Subdivision Surface
Weight Paint
Armature
Shader
Keyframe
Constraint
Modifier
```

Nếu giao diện được dịch sang ngôn ngữ khác, việc tìm tutorial có thể khó hơn.

Ví dụ tutorial nói:

```text
Add Modifier → Subdivision Surface
```

nhưng giao diện của bạn dùng tên dịch khác.

Điều này làm tăng thời gian tìm kiếm.

---

# 53. Tiếng Anh là ngôn ngữ chung của pipeline 3D

Trong môi trường sản xuất chuyên nghiệp, các thuật ngữ thường là:

```text
Modeling
Rigging
Animation
UV
Shader
Texture
Render
Compositing
```

Do đó có thể:

* Ghi chú bằng tiếng Việt.
* Học giải thích bằng tiếng Việt.
* Nhưng giữ thuật ngữ Blender bằng tiếng Anh.

Ví dụ:

```text
Vây cá → Pectoral Fin
Xương → Bone
Bộ xương → Armature
Trọng số → Weight
Đồ thị chuyển động → Graph Editor
```

Cách này rất hữu ích khi tra cứu tài liệu quốc tế.

---

# 54. Themes

Trong Preferences có:

```text
Themes
```

Bạn có thể thay đổi:

* Màu giao diện.
* Màu selection.
* Màu grid.
* Màu editor.
* Màu keyframe.

Người mới thường nên giữ theme mặc định cho đến khi quen giao diện.

---

# 55. Navigation Settings

Preferences cũng có các thiết lập Navigation liên quan đến:

* Orbit.
* Zoom.
* Pan.
* Perspective.
* Navigation style.

Người mới không cần thay đổi quá nhiều ngay từ đầu.

Nguyên tắc:

```text
Default settings
      ↓
Học navigation
      ↓
Có vấn đề cụ thể
      ↓
Mới chỉnh Preferences
```

---

# 56. Unit System — đơn vị dự án

Ngoài Preferences, mỗi project nên kiểm tra hệ đơn vị trong:

```text
Scene Properties
   ↓
Units
```

Các hệ thường gặp:

```text
None
Metric
Imperial
```

Đối với phần lớn project 3D thông thường:

```text
Metric
```

là lựa chọn dễ sử dụng.

---

# 57. Metric

Metric sử dụng:

* Millimeter.
* Centimeter.
* Meter.
* Kilometer.

Ví dụ:

```text
0.001 m = 1 mm
0.01 m  = 1 cm
1 m     = 1 meter
```

---

# 58. Unit Scale

Một thiết lập quan trọng là:

```text
Unit Scale
```

Trong nhiều project Blender:

```text
Unit Scale = 1.0
```

thường có thể hiểu theo convention:

```text
1 Blender Unit ≈ 1 meter
```

khi dùng Metric.

---

# 59. Vì sao scale dự án quan trọng?

Scale ảnh hưởng đến nhiều hệ thống:

```text
Scale
│
├── Physics
├── Rigid Body
├── Cloth
├── Fluid
├── Lighting
├── Camera
├── Depth of Field
├── Rigging
└── Export
```

Ví dụ nếu một con cá dài thực tế `30 cm` nhưng model dài `30 m`, một số simulation và lighting có thể hoạt động không như mong muốn.

---

# 60. Ví dụ scale cho project cá

Nếu cá dài khoảng:

```text
30 cm
```

thì có thể model theo:

```text
Length = 0.30 m
```

Bể:

```text
Width  = 1.2 m
Depth  = 0.8 m
Height = 0.8 m
```

Điều này giúp scene gần với tỷ lệ thực tế.

---

# 61. Kiểm tra Scale object

Object có Transform:

```text
Scale
X
Y
Z
```

Sau khi modeling bằng cách thay đổi kích thước object, đôi khi Scale có thể trở thành:

```text
X = 2
Y = 2
Z = 2
```

Trong nhiều workflow nên cân nhắc:

```text
Ctrl + A
   ↓
Apply Scale
```

để đưa về:

```text
X = 1
Y = 1
Z = 1
```

trong khi vẫn giữ kích thước hình học hiện tại.

Việc này sẽ được dùng nhiều ở các bài modeling, modifier, rigging và physics sau.

---

# 62. Lưu Preferences

Sau khi chỉnh:

* Compute Device.
* Emulate Numpad.
* Undo Steps.
* Interface.

hãy đảm bảo Blender lưu chúng.

Tùy phiên bản, Blender có thể:

* Lưu Preferences tự động.
* Hoặc có nút **Save Preferences**.

Nguyên tắc:

```text
Edit Preferences
      ↓
Thay đổi Settings
      ↓
Đảm bảo Preferences đã được lưu
      ↓
Đóng Preferences
```

---

# 63. Thiết lập ban đầu đề xuất

Một cấu hình nhập môn có thể là:

| Thiết lập       | Đề xuất                  |
| --------------- | ------------------------ |
| Language        | English                  |
| Undo Steps      | 64                       |
| Emulate Numpad  | Bật nếu không có Numpad  |
| GPU Render      | Chọn backend tương thích |
| Interface Theme | Default                  |
| Unit System     | Metric                   |
| Unit Scale      | 1.0 cho đa số project    |
| Workspace chính | Layout                   |

---

# 64. Workflow thiết lập Blender lần đầu

```text
Launch Blender
      ↓
Close Splash Screen
      ↓
Quan sát Layout
      ↓
Nhận diện:
Viewport
Outliner
Properties
Timeline
      ↓
Edit → Preferences
      ↓
System
      ↓
Chọn GPU phù hợp
      ↓
Input
      ↓
Emulate Numpad nếu cần
      ↓
Undo Steps = 64
      ↓
Interface = English
      ↓
Save Preferences
      ↓
Scene Properties
      ↓
Units = Metric
```

---

# 65. Thực hành 1 — Nhận diện giao diện

Mở workspace:

```text
Layout
```

Sau đó xác định:

```text
□ 3D Viewport
□ Outliner
□ Properties
□ Timeline
□ Toolbar
□ Sidebar
□ Workspace Tabs
□ Menu Bar
```

---

# 66. Thực hành 2 — Bật/tắt Panel

Trong 3D Viewport thử:

```text
T
```

Quan sát Toolbar ẩn/hiện.

Sau đó:

```text
N
```

Quan sát Sidebar ẩn/hiện.

Mục tiêu là ghi nhớ:

```text
T = Tools
N = Sidebar
```

---

# 67. Thực hành 3 — Workspace

Lần lượt mở:

```text
Layout
   ↓
Modeling
   ↓
Sculpting
   ↓
UV Editing
   ↓
Shading
   ↓
Animation
```

Quan sát cách bố cục editor thay đổi.

Sau đó quay về:

```text
Layout
```

---

# 68. Thực hành 4 — Viewport Shading

Lần lượt thử:

```text
Wireframe
   ↓
Solid
   ↓
Material Preview
   ↓
Rendered
```

Quan sát sự khác biệt.

Không cần hiểu sâu ngay; mục tiêu chỉ là nhận diện từng chế độ.

---

# 69. Thực hành 5 — Preferences

Mở:

```text
Edit → Preferences
```

Kiểm tra:

### Input

```text
Emulate Numpad
```

### System

```text
Compute Device
```

### Interface

```text
Language
```

### Editing / System tương ứng phiên bản

```text
Undo Steps
```

---

# 70. Thực hành 6 — Units

Vào:

```text
Scene Properties
   ↓
Units
```

Thiết lập:

```text
Unit System = Metric
Unit Scale  = 1.0
```

Sau đó tạo Cube và quan sát Dimension.

---

# 71. Bài tập mini — Tổ chức scene

Tạo một cấu trúc Collection đơn giản:

```text
Scene Collection
│
├── MODELS
│   └── Cube
│
├── LIGHTS
│   └── Light
│
└── CAMERAS
    └── Camera
```

Mục tiêu là làm quen với **Outliner** và **Collection**.

---

# 72. Các lỗi người mới thường gặp

## Không thấy Toolbar

Nhấn:

```text
T
```

---

## Không thấy Sidebar

Nhấn:

```text
N
```

---

## Không thấy Timeline

Có thể workspace đã bị thay đổi.

Giải pháp đơn giản:

```text
Workspace → Layout
```

---

## Không có Numpad

Bật:

```text
Edit
→ Preferences
→ Input
→ Emulate Numpad
```

---

## Render quá chậm

Kiểm tra:

```text
Preferences
→ System
→ Compute Device
```

và xem GPU đã được cấu hình đúng chưa.

---

## Giao diện không giống video

Nguyên nhân có thể là:

* Blender version khác.
* Workspace khác.
* Panel đang bị đóng.
* Add-on khác.
* Theme khác.

Không cần cố làm giao diện giống 100%.

Hãy tập trung vào:

> **Chức năng và vị trí tương đối của công cụ.**

---

# 73. Bản đồ giao diện cần nhớ

```text
                         BLENDER
                            │
       ┌────────────────────┼─────────────────────┐
       │                    │                     │
    Workspace           Editors              Preferences
       │                    │                     │
 ┌─────┼─────┐       ┌──────┼───────┐       ┌─────┼─────┐
 │     │     │       │      │       │       │     │     │
Layout Model Sculpt Viewport Outliner Properties Input System Interface
                       │
                       ├── T Panel
                       ├── N Panel
                       └── Shading Modes
```

---

# 74. Editor nào dùng để làm gì?

| Cần làm                | Nơi thực hiện chính         |
| ---------------------- | --------------------------- |
| Di chuyển object       | 3D Viewport                 |
| Xem danh sách object   | Outliner                    |
| Chỉnh material         | Properties / Shading        |
| Chỉnh render           | Render Properties           |
| Xem animation          | Timeline                    |
| Chỉnh tọa độ chính xác | N Panel / Object Properties |
| Modeling               | Modeling Workspace          |
| Sculpt                 | Sculpting Workspace         |
| UV                     | UV Editing                  |
| Shader                 | Shading                     |
| Animation              | Animation                   |
| Cấu hình Blender       | Preferences                 |

---

# 75. Ghi nhớ nhanh

### `T`

```text
Toolbar
```

### `N`

```text
Sidebar
```

### Outliner

```text
Quản lý Object + Collection
```

### Properties

```text
Thiết lập Scene / Object / Material / Render
```

### Timeline

```text
Animation + Frames
```

### Workspace

```text
Bố cục editor cho từng loại công việc
```

### Preferences

```text
Cấu hình Blender
```

---

# 76. Checklist hoàn thành bài

## Giao diện

* [ ] Nhận diện được **3D Viewport**.
* [ ] Nhận diện được **Outliner**.
* [ ] Nhận diện được **Properties Editor**.
* [ ] Nhận diện được **Timeline**.
* [ ] Biết Toolbar nằm ở đâu.
* [ ] Biết Sidebar nằm ở đâu.
* [ ] Biết `T` bật/tắt Toolbar.
* [ ] Biết `N` bật/tắt Sidebar.

## Workspace

* [ ] Biết Workspace là gì.
* [ ] Đã mở thử Modeling.
* [ ] Đã mở thử Sculpting.
* [ ] Đã mở thử UV Editing.
* [ ] Đã mở thử Shading.
* [ ] Đã mở thử Animation.
* [ ] Biết quay về Layout.

## Viewport

* [ ] Nhận diện Wireframe.
* [ ] Nhận diện Solid.
* [ ] Nhận diện Material Preview.
* [ ] Nhận diện Rendered.

## Preferences

* [ ] Đã mở `Edit → Preferences`.
* [ ] Đã kiểm tra System.
* [ ] Đã kiểm tra GPU/Compute Device.
* [ ] Đã kiểm tra Input.
* [ ] Đã bật Emulate Numpad nếu cần.
* [ ] Đã kiểm tra Undo Steps.
* [ ] Đã đặt Blender sang tiếng Anh nếu phù hợp.
* [ ] Đã đảm bảo Preferences được lưu.

## Unit và Scale

* [ ] Đã tìm được Scene Properties → Units.
* [ ] Đã hiểu Metric là gì.
* [ ] Đã hiểu Unit Scale.
* [ ] Đã chọn đơn vị phù hợp với project.
* [ ] Hiểu vì sao tỷ lệ thật của object quan trọng.

---

# 77. Tóm tắt bài học

```text
BLENDER INTERFACE
       │
       ├── 3D Viewport
       │      ├── T → Toolbar
       │      ├── N → Sidebar
       │      └── Shading Modes
       │
       ├── Outliner
       │      └── Object + Collection
       │
       ├── Properties
       │      ├── Render
       │      ├── Scene
       │      ├── Object
       │      ├── Modifier
       │      └── Material
       │
       ├── Timeline
       │      └── Animation
       │
       ├── Workspaces
       │      ├── Layout
       │      ├── Modeling
       │      ├── Sculpting
       │      ├── UV Editing
       │      ├── Shading
       │      └── Animation
       │
       └── Preferences
              ├── System → GPU
              ├── Input → Emulate Numpad
              ├── Undo → 64 Steps
              └── Interface → English
```

**Ý tưởng cốt lõi của bài 003:**

> Không cần ghi nhớ toàn bộ giao diện Blender ngay lập tức. Điều quan trọng là hiểu mỗi khu vực có nhiệm vụ gì, biết cách quay về workspace Layout khi bị lạc, và thiết lập Blender phù hợp với phần cứng cũng như quy mô project. Khi sử dụng thường xuyên, việc điều hướng giữa Viewport, Outliner, Properties và các Workspace sẽ dần trở thành phản xạ.

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
