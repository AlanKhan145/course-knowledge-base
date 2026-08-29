# 004 — Navigation Interface

| Thuộc tính     | Nội dung                                                                         |
| -------------- | -------------------------------------------------------------------------------- |
| **Phần**       | 01 — Introduction to Blender                                                     |
| **Thời lượng** | 9:55                                                                             |
| **Chủ đề**     | Orbit, Pan, Zoom, View Axis, Local View và điều hướng trong 3D Viewport          |
| **Mức độ**     | Nhập môn                                                                         |
| **Trọng tâm**  | Di chuyển ổn định trong không gian 3D mà không làm thay đổi Transform của object |

---

## 1. Mục tiêu bài học

Sau bài này, người học có thể:

* [ ] Orbit quanh scene bằng chuột.
* [ ] Pan sang trái/phải/lên/xuống.
* [ ] Zoom vào và ra khỏi scene.
* [ ] Chuyển nhanh giữa Front, Right, Top và các góc nhìn đối diện.
* [ ] Phân biệt **Perspective** và **Orthographic**.
* [ ] Chuyển sang **Camera View**.
* [ ] Focus vào object đang chọn bằng **Frame Selected**.
* [ ] Hiển thị toàn bộ scene bằng **Frame All**.
* [ ] Cô lập object bằng **Local View**.
* [ ] Ẩn/hiện object mà không xóa chúng.
* [ ] Chọn nhiều object.
* [ ] Tổ chức object bằng Collection.
* [ ] Phóng lớn tạm thời một Editor bằng `Ctrl + Space`.

---

# 2. File mẫu thực hành Navigation

File mẫu đã được đặt cùng thư mục với bài học:

> [Tải/mở `03+Navigation.blend`](03%2BNavigation.blend)

Nguồn ban đầu: `C:\Users\Khanh PC\Downloads\03+Navigation.blend`

Vị trí trong khóa học: `01 - Introduction to Blender\03+Navigation.blend`

File này dùng để luyện orbit, pan, zoom, View Axis, Perspective/Orthographic,
Frame Selected, Frame All và Local View.

## Cách 1 — Mở trực tiếp

Double-click vào:

```text
03+Navigation.blend
```

Blender sẽ khởi động và mở project.

---

## Cách 2 — Mở từ Blender

```text
File
 ↓
Open
 ↓
Chọn 03+Navigation.blend
 ↓
Open Blender File
```

Nếu Blender hỏi có lưu scene hiện tại hay không, hãy xử lý trước khi mở file mới.

---

# 3. Bộ kỹ năng Navigation cốt lõi

Đây là nhóm thao tác cần luyện thành phản xạ:

```text
                 NAVIGATION
                     │
       ┌─────────────┼─────────────┐
       │             │             │
      Orbit          Pan          Zoom
       │             │             │
      MMB       Shift + MMB      Wheel
                     │
                     ↓
               View Control
                     │
          ┌──────────┼───────────┐
          ↓          ↓           ↓
        Front       Right        Top
      Numpad 1    Numpad 3    Numpad 7
```

---

# 4. Orbit — xoay góc nhìn

Để xoay góc nhìn quanh scene:

```text
MMB
```

Trong đó `MMB` là:

> **Middle Mouse Button — nhấn con lăn chuột.**

Giữ MMB rồi kéo chuột:

```text
MMB + kéo trái/phải
MMB + kéo lên/xuống
```

Bạn có thể quan sát object từ mọi phía.

---

## 4.1 Orbit không làm xoay object

Điểm rất quan trọng:

```text
MMB
```

chỉ thay đổi **góc nhìn của người dùng**.

Nó không thay đổi:

```text
Location
Rotation
Scale
```

của object.

Ví dụ:

```text
Object Rotation
X = 0°
Y = 0°
Z = 0°

        ↓ Orbit View

Object Rotation
X = 0°
Y = 0°
Z = 0°
```

Object hoàn toàn không thay đổi.

---

# 5. Pan — di chuyển góc nhìn

Để dịch chuyển góc nhìn sang trái, phải, lên hoặc xuống:

```text
Shift + MMB
```

Giữ cả hai rồi rê chuột.

```text
Shift + MMB
      │
      ├── ←
      ├── →
      ├── ↑
      └── ↓
```

Pan đặc biệt hữu ích khi đang zoom rất gần một phần của model.

---

# 6. Zoom

Cuộn con lăn:

```text
Wheel Up
```

để zoom vào.

Cuộn:

```text
Wheel Down
```

để zoom ra.

Tóm tắt:

| Thao tác      | Navigation |
| ------------- | ---------- |
| `MMB`         | Orbit      |
| `Shift + MMB` | Pan        |
| Mouse Wheel   | Zoom       |

Đây là ba thao tác quan trọng nhất của navigation trong Blender.

---

# 7. Navigation không phải Transform

Người mới rất dễ nhầm hai nhóm thao tác này.

### Navigation

Thay đổi cách **bạn nhìn scene**:

```text
Orbit
Pan
Zoom
```

### Transform

Thay đổi **object**:

```text
G → Move
R → Rotate
S → Scale
```

Sơ đồ:

```text
Navigation
    ↓
Camera nhìn của người dùng thay đổi
    ↓
Object KHÔNG thay đổi


Transform
    ↓
Object thay đổi
    ↓
Location / Rotation / Scale thay đổi
```

---

# 8. View Axis cơ bản

Blender sử dụng hệ trục:

```text
X
Y
Z
```

Trong đó:

```text
Z = Up
```

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

Trục Z là hướng lên trên của không gian Blender.

---

# 9. Front View

Nhấn:

```text
Numpad 1
```

để chuyển sang:

```text
Front View
```

Đây là góc nhìn chính diện.

---

# 10. Right View

Nhấn:

```text
Numpad 3
```

để chuyển sang:

```text
Right View
```

Bạn sẽ nhìn object từ bên phải.

---

# 11. Top View

Nhấn:

```text
Numpad 7
```

để chuyển sang:

```text
Top View
```

Đây là góc nhìn từ trên xuống.

---

# 12. Ba phím cần thuộc

```text
Numpad 1 → Front

Numpad 3 → Right

Numpad 7 → Top
```

Có thể ghi nhớ bằng sơ đồ:

```text
             TOP
          Numpad 7
              │
              ↓

FRONT ← Object → RIGHT
Num 1            Num 3
```

Đây là ba view được sử dụng rất thường xuyên khi modeling.

---

# 13. Các góc nhìn đối diện

Giữ:

```text
Ctrl
```

kết hợp với các phím trên.

## Back View

```text
Ctrl + Numpad 1
```

```text
Front
  ↕
Back
```

---

## Left View

```text
Ctrl + Numpad 3
```

```text
Right
  ↕
Left
```

---

## Bottom View

```text
Ctrl + Numpad 7
```

```text
Top
 ↕
Bottom
```

---

# 14. Bảng View Axis

| Góc nhìn | Phím              |
| -------- | ----------------- |
| Front    | `Numpad 1`        |
| Back     | `Ctrl + Numpad 1` |
| Right    | `Numpad 3`        |
| Left     | `Ctrl + Numpad 3` |
| Top      | `Numpad 7`        |
| Bottom   | `Ctrl + Numpad 7` |

Nên luyện đến khi không cần suy nghĩ khi nhấn.

---

# 15. Camera View

Một phím rất quan trọng khác:

```text
Numpad 0
```

dùng để chuyển vào/ra:

```text
Camera View
```

Sơ đồ:

```text
3D Viewport
     ↓
Numpad 0
     ↓
Camera View
     ↓
Numpad 0
     ↓
Viewport bình thường
```

Camera View cho biết khu vực nào sẽ được camera render.

---

# 16. Numpad 2 / 4 / 6 / 8

Các phím:

```text
Numpad 2
Numpad 4
Numpad 6
Numpad 8
```

xoay góc nhìn theo từng bước nhỏ.

Thông thường Blender xoay khoảng:

```text
15°
```

mỗi lần nhấn với thiết lập mặc định.

Ví dụ:

```text
Numpad 4 → Orbit sang trái

Numpad 6 → Orbit sang phải

Numpad 8 → Orbit lên

Numpad 2 → Orbit xuống
```

Các phím này ít quan trọng hơn:

```text
1 / 3 / 7
```

nhưng vẫn hữu ích khi cần xoay góc nhìn chính xác từng bước.

---

# 17. Không có Numpad thì sao?

Nếu bàn phím laptop không có Numeric Keypad, trong bài trước chúng ta có thể bật:

```text
Edit
 ↓
Preferences
 ↓
Input
 ↓
Emulate Numpad
```

Khi bật, hàng số phía trên bàn phím có thể đảm nhiệm nhiều chức năng của Numpad.

---

# 18. Viewport Gizmo

Ngoài keyboard, góc trên phải Viewport còn có:

```text
Navigation Gizmo
```

thể hiện:

```text
X
Y
Z
```

Có thể click trực tiếp vào các trục để chuyển view.

Ví dụ:

```text
Click Z
   ↓
Top View
```

hoặc click vào các hướng tương ứng để nhìn từ bên cạnh.

---

# 19. Gizmo giúp xác định phương hướng

Khi Orbit quá nhiều, người mới có thể gặp tình trạng:

> "Không biết đâu là trên, dưới, trái, phải nữa."

Lúc đó nhìn vào:

```text
Viewport Gizmo
```

để xác định:

```text
Z = Up
```

Ví dụ:

```text
Bạn xoay view
      ↓
Scene trông như bị lật
      ↓
Quan sát X/Y/Z Gizmo
      ↓
Xác định hướng
      ↓
Numpad 1 / 3 / 7
      ↓
Trở về View chuẩn
```

---

# 20. Nên dùng phím hay View Gizmo?

Cả hai đều hợp lệ.

Nhưng khi làm việc nhanh:

```text
Keyboard
```

thường hiệu quả hơn.

Ví dụ thay vì:

```text
Di chuột
→ tìm Gizmo
→ click X
```

chỉ cần:

```text
Numpad 3
```

Vì vậy nên luyện hotkey ngay từ đầu.

---

# 21. Perspective View

Blender thường sử dụng:

```text
Perspective
```

cho góc nhìn tự do.

Perspective mô phỏng cách mắt/camera nhìn thế giới:

```text
Object gần
   ↓
Trông lớn hơn

Object xa
   ↓
Trông nhỏ hơn
```

Ví dụ:

```text
      ┌──────────┐
Near  │  CUBE    │
      └──────────┘

           ┌───┐
Far        │ C │
           └───┘
```

---

# 22. Orthographic View

Orthographic không có hiệu ứng phối cảnh.

Object ở xa và gần không bị thay đổi kích thước do khoảng cách theo cùng cách như Perspective.

Ví dụ:

```text
Perspective

Near:  ██████
Far:     ██


Orthographic

Near:  ████
Far:   ████
```

Orthographic rất hữu ích cho:

* Technical modeling.
* Blueprint.
* Front/Side/Top reference.
* Căn chỉnh object.
* Kiểm tra silhouette.

---

# 23. Chuyển Perspective ↔ Orthographic

Nhấn:

```text
Numpad 5
```

Workflow:

```text
Perspective
     ↓
 Numpad 5
     ↓
Orthographic
     ↓
 Numpad 5
     ↓
Perspective
```

---

# 24. Axis View thường tự dùng Orthographic

Khi nhấn:

```text
Numpad 1
Numpad 3
Numpad 7
```

Blender thường chuyển sang một **Orthographic Axis View**.

Ví dụ:

```text
Numpad 1
   ↓
Front Orthographic
```

Nếu Orbit bằng MMB:

```text
Front Orthographic
       ↓
      MMB
       ↓
User Perspective
```

---

# 25. Perspective và Orthographic dùng khi nào?

| Công việc                  | View phù hợp |
| -------------------------- | ------------ |
| Quan sát model tự nhiên    | Perspective  |
| Modeling từ Blueprint      | Orthographic |
| Kiểm tra silhouette        | Orthographic |
| Bố trí scene               | Perspective  |
| Căn thẳng vertex           | Orthographic |
| Xem vật thể từ nhiều hướng | Perspective  |
| Front/Side/Top reference   | Orthographic |

---

# 26. Frame Selected

Một trong những lệnh navigation quan trọng nhất:

```text
Numpad .
```

Dấu chấm trên Numpad.

Lệnh tương ứng:

```text
View
 ↓
Frame Selected
```

---

# 27. Frame Selected làm gì?

Giả sử scene có rất nhiều object:

```text
Scene
│
├── House
├── Tree
├── Car
├── Rock
├── Lamp
└── Donut
```

Bạn muốn làm việc với:

```text
Donut
```

Thực hiện:

```text
Select Donut
     ↓
Numpad .
     ↓
Viewport focus vào Donut
```

Object trở thành tâm navigation mới.

---

# 28. Vì sao Frame Selected rất quan trọng?

Trong một scene lớn, có thể có:

```text
Environment dài 100 m
```

nhưng object bạn đang chỉnh chỉ dài:

```text
5 cm
```

Nếu chỉ dùng Wheel để zoom, rất dễ:

* Zoom quá chậm.
* Mất object.
* Orbit quanh sai điểm.
* Không thể tiếp cận đúng vùng cần chỉnh.

Giải pháp:

```text
Select Object
     ↓
Numpad .
     ↓
Frame Selected
     ↓
Tiếp tục modeling
```

---

# 29. Frame Selected cũng reset tâm Orbit

Ví dụ bạn đang Orbit quanh toàn bộ scene:

```text
Orbit Pivot = Scene
```

Sau đó:

```text
Select Fish Head
      ↓
Numpad .
```

Viewport sẽ tập trung vào vùng được chọn.

Từ đó việc Orbit sẽ thuận tiện hơn quanh vị trí đó.

Đây là workflow cực kỳ hữu ích khi modeling chi tiết.

---

# 30. Frame All

Để đưa toàn bộ object trong scene vào vùng nhìn:

```text
Home
```

Lệnh:

```text
View
 ↓
Frame All
```

Workflow:

```text
Bị lạc trong scene
       ↓
      Home
       ↓
Hiển thị toàn bộ scene
```

---

# 31. Frame Selected và Frame All

| Lệnh           | Phím       | Tác dụng               |
| -------------- | ---------- | ---------------------- |
| Frame Selected | `Numpad .` | Focus object đang chọn |
| Frame All      | `Home`     | Hiển thị toàn bộ scene |

Một quy tắc hữu ích:

```text
Không tìm thấy object?
       ↓
      Home

Thấy object nhưng muốn làm chi tiết?
       ↓
     Select
       ↓
   Numpad .
```

---

# 32. Local View — cô lập object

Nếu scene quá nhiều object, có thể cô lập object đang chọn.

Thực hiện:

```text
Select Object
     ↓
Numpad /
```

Blender chuyển sang:

```text
Local View
```

Các object khác tạm thời biến mất khỏi Viewport.

---

# 33. Local View không xóa object

Ví dụ:

```text
Scene
│
├── Fish
├── Tank
├── Rocks
├── Plants
└── Lights
```

Select:

```text
Fish
```

rồi:

```text
Numpad /
```

Viewport trở thành:

```text
Local View
└── Fish
```

Nhưng:

```text
Tank
Rocks
Plants
Lights
```

không bị xóa.

Chúng chỉ tạm thời không nằm trong Local View hiện tại.

---

# 34. Thoát Local View

Nhấn lại:

```text
Numpad /
```

Workflow:

```text
Scene đầy đủ
     ↓
Select Fish
     ↓
Numpad /
     ↓
Chỉ Fish
     ↓
Numpad /
     ↓
Scene đầy đủ
```

---

# 35. Không có Numpad `/`

Có thể dùng menu:

```text
View
 ↓
Local View
 ↓
Toggle Local View
```

Điểm quan trọng:

> Phải chọn object trước khi chuyển sang Local View nếu muốn cô lập object đó.

---

# 36. Local View và Frame Selected khác nhau

Hai chức năng này thường bị nhầm.

### Frame Selected

```text
Numpad .
```

Chỉ:

> Focus camera nhìn của Viewport vào object.

Các object khác vẫn còn.

### Local View

```text
Numpad /
```

Tạm thời cô lập object khỏi phần còn lại của scene.

---

## So sánh

| Chức năng      | Frame Selected | Local View |
| -------------- | -------------- | ---------- |
| Focus object   | Có             | Có thể     |
| Ẩn object khác | Không          | Có         |
| Xóa object     | Không          | Không      |
| Phím           | `Numpad .`     | `Numpad /` |

---

# 37. Hide Object

Một cách khác để giảm sự lộn xộn là:

```text
H
```

Đây là lệnh:

```text
Hide Selected
```

Ví dụ:

```text
Select Rocks
     ↓
H
     ↓
Rocks tạm ẩn
```

---

# 38. Unhide Object

Để hiện lại object:

```text
Alt + H
```

Workflow:

```text
Select
  ↓
 H
  ↓
Hide
  ↓
Alt + H
  ↓
Show again
```

---

# 39. Hide khác Delete

Rất quan trọng:

```text
H
```

không phải:

```text
X / Delete
```

### Hide

```text
Object vẫn tồn tại
```

### Delete

```text
Object bị xóa khỏi scene
```

Vì vậy khi chỉ muốn dọn Viewport:

```text
H
```

an toàn hơn.

---

# 40. Theo dõi object bị ẩn trong Outliner

Khi object bị ẩn, trạng thái visibility của chúng có thể được quan sát trong:

```text
Outliner
```

Thông qua các biểu tượng visibility tương ứng.

Điều này rất hữu ích trong scene lớn.

---

# 41. Chọn object

Cách cơ bản:

```text
Left Click
```

Object được chọn thường có outline highlight.

---

# 42. Chọn nhiều object

Giữ:

```text
Shift
```

và click lần lượt:

```text
Shift + Left Click
```

Ví dụ:

```text
Cube
 +
Sphere
 +
Cylinder
```

→ cả ba object được chọn.

---

# 43. Box Select

Để chọn nhiều object trong một vùng:

```text
B
```

Sau đó kéo một hộp lựa chọn quanh chúng.

```text
B
 ↓
Drag
 ↓
┌─────────────────┐
│ Object Object   │
│ Object Object   │
└─────────────────┘
```

Các object nằm trong vùng sẽ được chọn.

---

# 44. Deselect trong Box Select

Trong quá trình Box Select, Blender cho phép sử dụng chế độ trừ lựa chọn tùy thao tác và phiên bản.

Một workflow quen thuộc là dùng:

```text
MMB
```

khi thực hiện Box Select để loại bớt các vùng khỏi selection.

Tuy nhiên chi tiết input có thể khác nhẹ theo keymap Blender.

Điều quan trọng là hiểu ba thao tác:

```text
Select
Add Selection
Subtract Selection
```

---

# 45. Không thay đổi Transform khi luyện Navigation

Bài thực hành nên tập trung vào:

```text
Orbit
Pan
Zoom
Frame
Hide
Local View
```

mà không nhấn:

```text
G
R
S
```

Mục tiêu:

```text
Navigation thay đổi View
     ≠
Transform Object
```

---

# 46. Outliner

Cửa sổ danh sách object bên phải được gọi là:

```text
Outliner
```

Outliner hiển thị hierarchy của scene.

Ví dụ:

```text
Scene Collection
│
├── Camera
├── Light
├── Monkey
├── Donut
├── House
├── Cylinder.001
├── Cylinder.002
├── Cylinder.003
└── ...
```

Nếu scene lớn, danh sách này có thể trở nên rất dài.

---

# 47. Collection

Blender sử dụng:

```text
Collection
```

để tổ chức object.

Có thể hiểu gần giống:

```text
Folder
```

Ví dụ:

```text
Scene Collection
│
├── HOUSE
│   └── House
│
├── CYLINDERS
│   ├── Cylinder.001
│   ├── Cylinder.002
│   └── Cylinder.003
│
└── ENVIRONMENT
    ├── Ground
    ├── Tree
    └── Rock
```

---

# 48. Vì sao Collection quan trọng?

Project nhỏ:

```text
10 objects
```

có thể dễ quản lý.

Project thật:

```text
100
500
1000+
```

object thì không.

Nếu không tổ chức:

```text
Cube
Cube.001
Cube.002
Plane
Plane.001
Cylinder.017
Cylinder.018
...
```

sẽ rất khó tìm object.

---

# 49. Tạo Collection

Có thể tạo Collection từ Outliner.

Ví dụ:

```text
New Collection
```

rồi đặt tên:

```text
CYLINDERS
```

Sau đó đưa các cylinder vào đó.

---

# 50. Di chuyển object bằng Drag & Drop

Trong Outliner:

```text
Select Objects
      ↓
Left Click + Hold
      ↓
Drag
      ↓
Drop vào Collection
```

Tương tự thao tác di chuyển file vào folder.

---

# 51. Phím M — Move to Collection

Workflow nhanh hơn:

```text
Select Object
     ↓
M
```

Blender mở:

```text
Move to Collection
```

Bạn có thể:

* Chọn Collection có sẵn.
* Hoặc tạo Collection mới.

---

# 52. Tạo Collection mới bằng M

Ví dụ muốn đưa ngôi nhà vào collection riêng:

```text
Select House
     ↓
M
     ↓
New Collection
     ↓
House
     ↓
Create
```

Kết quả:

```text
Scene Collection
└── House
    └── House_Object
```

---

# 53. Đặt tên Collection rõ ràng

Không nên để:

```text
Collection
Collection 2
Collection 3
```

Nên dùng:

```text
HOUSE
CYLINDERS
ENVIRONMENT
LIGHTS
CAMERAS
CHARACTERS
PROPS
```

Hoặc theo convention của dự án.

---

# 54. Ví dụ hierarchy tốt

```text
SCENE
│
├── ENVIRONMENT
│   ├── Ground
│   ├── Rock_01
│   └── Tree_01
│
├── BUILDINGS
│   └── House_01
│
├── PROPS
│   ├── Cylinder_01
│   ├── Cylinder_02
│   └── Cylinder_03
│
├── LIGHTS
│
└── CAMERAS
```

Một project sạch không chỉ giúp bản thân mà còn giúp cả team.

---

# 55. Đổi tên Collection

Trong Outliner có thể double-click tên:

```text
Collection
```

rồi đổi thành:

```text
ENVIRONMENT
```

Nên đặt tên ngay khi tạo thay vì chờ project lớn mới dọn dẹp.

---

# 56. Collection Color

Collection có thể được gán màu để dễ nhận diện.

Ví dụ:

```text
Right Click Collection
       ↓
Color Tag
```

Màu có thể dùng để phân loại:

```text
Characters
Environment
FX
Lighting
Cameras
```

Đây chỉ là hỗ trợ tổ chức, không ảnh hưởng đến màu render của object.

---

# 57. Maximize Editor

Một phím rất hữu ích:

```text
Ctrl + Space
```

Nếu con trỏ đang nằm trên một Editor:

```text
Ctrl + Space
```

sẽ phóng Editor đó lên gần như toàn màn hình.

---

# 58. Ví dụ với Outliner

Di chuột vào:

```text
Outliner
```

rồi:

```text
Ctrl + Space
```

Kết quả:

```text
┌─────────────────────────┐
│                         │
│                         │
│       OUTLINER          │
│       FULL AREA         │
│                         │
│                         │
└─────────────────────────┘
```

Rất hữu ích khi có hàng trăm object.

---

# 59. Quay lại bố cục cũ

Nhấn lại:

```text
Ctrl + Space
```

Blender quay về layout trước đó.

---

# 60. Ctrl + Space áp dụng cho hầu hết Editor

Không chỉ Outliner.

Ví dụ:

### Viewport

```text
Mouse over 3D Viewport
        ↓
Ctrl + Space
        ↓
Viewport lớn
```

### Shader Editor

```text
Mouse over Shader Editor
        ↓
Ctrl + Space
        ↓
Shader Editor lớn
```

### Graph Editor

```text
Mouse over Graph Editor
        ↓
Ctrl + Space
        ↓
Graph Editor lớn
```

Đây là một trong những hotkey rất đáng nhớ.

---

# 61. Bộ phím Navigation nên thuộc

| Phím              | Chức năng                  |
| ----------------- | -------------------------- |
| `MMB`             | Orbit                      |
| `Shift + MMB`     | Pan                        |
| `Wheel`           | Zoom                       |
| `Numpad 1`        | Front                      |
| `Ctrl + Numpad 1` | Back                       |
| `Numpad 3`        | Right                      |
| `Ctrl + Numpad 3` | Left                       |
| `Numpad 7`        | Top                        |
| `Ctrl + Numpad 7` | Bottom                     |
| `Numpad 5`        | Perspective ↔ Orthographic |
| `Numpad 0`        | Camera View                |
| `Numpad .`        | Frame Selected             |
| `Home`            | Frame All                  |
| `Numpad /`        | Local View                 |
| `H`               | Hide Selected              |
| `Alt + H`         | Unhide                     |
| `B`               | Box Select                 |
| `M`               | Move to Collection         |
| `Ctrl + Space`    | Maximize Editor            |

---

# 62. Workflow khi bị lạc trong scene

Nếu không biết mình đang ở đâu:

```text
Bị lạc
   ↓
Home
   ↓
Frame All
   ↓
Tìm object
   ↓
Select
   ↓
Numpad .
   ↓
Frame Selected
```

Nếu vẫn không biết hướng:

```text
Numpad 1
```

hoặc:

```text
Numpad 3
```

hoặc:

```text
Numpad 7
```

để quay về góc nhìn chuẩn.

---

# 63. Workflow khi modeling một object trong scene lớn

Ví dụ scene có:

```text
Tank
Fish
Plants
Rocks
Lights
Camera
```

Bạn chỉ muốn sửa cá.

Workflow:

```text
Select Fish
     ↓
Numpad .
     ↓
Frame Selected
     ↓
Numpad /
     ↓
Local View
     ↓
Model Fish
     ↓
Numpad /
     ↓
Return Scene
```

Đây là workflow rất hiệu quả.

---

# 64. Workflow khi một object cản tầm nhìn

Ví dụ:

```text
Rock
```

che mất object cần chỉnh.

Không cần xóa Rock.

Chỉ:

```text
Select Rock
    ↓
H
```

Sau khi hoàn thành:

```text
Alt + H
```

---

# 65. Navigation Hierarchy

Có thể chia toàn bộ bài thành bốn nhóm:

```text
NAVIGATION
│
├── 1. MOVE VIEW
│   ├── Orbit
│   ├── Pan
│   └── Zoom
│
├── 2. CHANGE VIEW
│   ├── Front
│   ├── Right
│   ├── Top
│   ├── Orthographic
│   └── Camera
│
├── 3. FOCUS
│   ├── Frame Selected
│   ├── Frame All
│   └── Local View
│
└── 4. CLEAN VIEW
    ├── Hide
    ├── Unhide
    └── Collections
```

---

# 66. Thực hành 1 — Orbit, Pan và Zoom

Tạo hoặc sử dụng scene có:

```text
Cube
Sphere
Cylinder
Monkey
Torus
```

Sau đó dành vài phút chỉ sử dụng:

```text
MMB
Shift + MMB
Wheel
```

Mục tiêu:

> Có thể di chuyển quanh scene mà không mất phương hướng.

---

# 67. Thực hành 2 — View Axis

Lần lượt nhấn:

```text
Numpad 1
Numpad 3
Numpad 7
```

Sau đó:

```text
Ctrl + Numpad 1
Ctrl + Numpad 3
Ctrl + Numpad 7
```

Cố gắng đoán trước view trước khi nhấn.

---

# 68. Thực hành 3 — Perspective và Orthographic

Ở một góc nhìn tự do:

```text
Numpad 5
```

Quan sát khác biệt.

Lặp lại:

```text
Perspective
    ↕
Orthographic
```

Sau đó thử zoom trong cả hai chế độ.

---

# 69. Thực hành 4 — Camera View

Nhấn:

```text
Numpad 0
```

Quan sát khung Camera.

Sau đó nhấn lại:

```text
Numpad 0
```

để quay lại Viewport.

Không di chuyển Camera trong bài thực hành này.

---

# 70. Thực hành 5 — Frame Selected

Tạo nhiều primitive với kích thước và vị trí khác nhau.

Ví dụ:

```text
Cube
Sphere
Monkey
Torus
Cylinder
```

Thực hiện:

```text
Select Cube
→ Numpad .

Select Monkey
→ Numpad .

Select Torus
→ Numpad .
```

Quan sát tâm navigation thay đổi.

---

# 71. Thực hành 6 — Frame All

Zoom thật xa hoặc thật gần.

Sau đó:

```text
Home
```

Kiểm tra Blender đưa toàn bộ scene trở lại vùng nhìn.

---

# 72. Thực hành 7 — Local View

```text
Select Monkey
     ↓
Numpad /
```

Kiểm tra chỉ còn Monkey.

Sau đó:

```text
Numpad /
```

để quay lại scene.

---

# 73. Thực hành 8 — Hide và Unhide

Chọn:

```text
Cube
Sphere
Cylinder
```

nhấn:

```text
H
```

Sau đó:

```text
Alt + H
```

Kiểm tra chúng xuất hiện trở lại.

---

# 74. Thực hành 9 — Không thay đổi Transform

Trước khi luyện navigation, kiểm tra một object:

```text
Location = ...
Rotation = ...
Scale = ...
```

Sau đó thực hiện:

```text
Orbit
Pan
Zoom
Frame Selected
Local View
Hide / Unhide
```

Kiểm tra lại Transform.

Kết quả phải là:

```text
Transform trước
      =
Transform sau
```

Điều này xác nhận bạn chỉ đang điều hướng Viewport.

---

# 75. Thực hành 10 — Tổ chức Outliner

Tạo:

```text
3 Cylinder
1 House/Object chính
3 Environment Objects
```

Sau đó tổ chức thành:

```text
Scene Collection
│
├── CYLINDERS
│   ├── Cylinder_01
│   ├── Cylinder_02
│   └── Cylinder_03
│
├── HOUSE
│   └── House
│
└── ENVIRONMENT
    ├── Ground
    ├── Rock
    └── Tree
```

Sử dụng:

```text
M
```

để Move to Collection.

---

# 76. Bài tập tổng hợp

Tạo scene:

```text
Scene
│
├── Fish
├── Sphere
├── Cube
├── Torus
└── Cylinder
```

Thực hiện tuần tự:

```text
1. Orbit toàn scene
        ↓
2. Pan sang trái
        ↓
3. Zoom vào Fish
        ↓
4. Numpad 1
        ↓
5. Numpad 3
        ↓
6. Numpad 7
        ↓
7. Numpad 5
        ↓
8. Select Fish
        ↓
9. Numpad .
        ↓
10. Numpad /
        ↓
11. Numpad /
        ↓
12. Hide một object bằng H
        ↓
13. Alt + H
        ↓
14. Home
```

Nếu làm được chuỗi này mà không mất phương hướng, navigation cơ bản đã khá ổn.

---

# 77. Các lỗi thường gặp

## Orbit xong không biết đâu là trên

Dùng:

```text
Numpad 1
```

hoặc:

```text
Numpad 3
```

hoặc:

```text
Numpad 7
```

để reset về Axis View.

---

## Không zoom được đúng object

Không cố cuộn Wheel liên tục.

Dùng:

```text
Select Object
     ↓
Numpad .
```

---

## Mất toàn bộ object

Thử:

```text
Home
```

để Frame All.

---

## Các object khác gây vướng

Dùng:

```text
H
```

hoặc:

```text
Numpad /
```

tùy mục đích.

---

## Không có Numpad

Kiểm tra:

```text
Edit
→ Preferences
→ Input
→ Emulate Numpad
```

hoặc dùng menu **View**.

---

## Nhấn `/` nhưng không cô lập đúng object

Hãy:

```text
Select Object trước
```

rồi mới:

```text
Numpad /
```

---

## Không biết đang ở Perspective hay Orthographic

Nhìn tên Viewport ở góc trên bên trái.

Có thể hiển thị dạng:

```text
User Perspective
```

hoặc:

```text
User Orthographic
```

hoặc:

```text
Front Orthographic
```

---

# 78. Perspective vs Orthographic

| Đặc điểm           | Perspective  | Orthographic |
| ------------------ | ------------ | ------------ |
| Có phối cảnh       | Có           | Không        |
| Object xa nhỏ hơn  | Có           | Không        |
| Cảm giác tự nhiên  | Cao          | Thấp         |
| Modeling kỹ thuật  | Khá          | Rất tốt      |
| Blueprint          | Không tối ưu | Rất tốt      |
| Quan sát scene     | Rất tốt      | Trung bình   |
| Căn chỉnh hình học | Khá          | Rất tốt      |

---

# 79. Local View vs Hide vs Frame Selected

| Công cụ    | Mục đích            |
| ---------- | ------------------- |
| `Numpad .` | Focus vào object    |
| `Numpad /` | Cô lập object       |
| `H`        | Ẩn object được chọn |
| `Alt + H`  | Hiện lại object     |
| `Home`     | Hiển thị toàn scene |

Có thể chọn theo tình huống:

```text
Muốn nhìn gần?
    ↓
Numpad .

Muốn chỉ làm object này?
    ↓
Numpad /

Object đang che?
    ↓
H

Không tìm thấy scene?
    ↓
Home
```

---

# 80. Navigation tốt là nền tảng của Modeling

Người mới thường nghĩ tốc độ modeling phụ thuộc vào việc biết nhiều công cụ.

Nhưng một phần rất lớn phụ thuộc vào khả năng:

```text
Select
  ↓
Frame
  ↓
Orbit
  ↓
Pan
  ↓
Zoom
  ↓
Change View
  ↓
Edit
```

Nếu navigation chậm, mọi thao tác phía sau cũng chậm.

Do đó bài này nên được luyện đến mức gần như phản xạ.

---

# 81. Checklist hoàn thành bài

## Navigation cơ bản

* [ ] Orbit được bằng `MMB`.
* [ ] Pan được bằng `Shift + MMB`.
* [ ] Zoom được bằng Mouse Wheel.
* [ ] Không nhầm Navigation với Transform.
* [ ] Không mất phương hướng khi Orbit.

## Axis View

* [ ] `Numpad 1` → Front.
* [ ] `Numpad 3` → Right.
* [ ] `Numpad 7` → Top.
* [ ] `Ctrl + Numpad 1` → Back.
* [ ] `Ctrl + Numpad 3` → Left.
* [ ] `Ctrl + Numpad 7` → Bottom.
* [ ] Biết `Numpad 0` dùng cho Camera View.

## Perspective / Orthographic

* [ ] Hiểu Perspective.
* [ ] Hiểu Orthographic.
* [ ] Chuyển được bằng `Numpad 5`.
* [ ] Biết khi nào nên dùng từng chế độ.

## Focus

* [ ] Biết dùng `Numpad .` để Frame Selected.
* [ ] Biết dùng `Home` để Frame All.
* [ ] Biết dùng `Numpad /` để Local View.
* [ ] Biết thoát Local View.

## Visibility

* [ ] Biết `H` để Hide.
* [ ] Biết `Alt + H` để Unhide.
* [ ] Hiểu Hide không phải Delete.

## Selection

* [ ] Chọn được object bằng Left Click.
* [ ] Chọn nhiều object bằng `Shift`.
* [ ] Biết dùng Box Select.
* [ ] Có thể lựa chọn nhiều object mà không làm thay đổi Transform.

## Outliner

* [ ] Biết Outliner dùng để làm gì.
* [ ] Hiểu Collection.
* [ ] Tạo được Collection.
* [ ] Biết `M` → Move to Collection.
* [ ] Đặt tên Collection rõ ràng.
* [ ] Tổ chức được hierarchy đơn giản.

## Editor

* [ ] Biết `Ctrl + Space` để maximize Editor.
* [ ] Biết nhấn lại `Ctrl + Space` để quay về.

---

# 82. Cheat Sheet

```text
NAVIGATION
────────────────────────────────

Orbit                MMB
Pan                  Shift + MMB
Zoom                 Mouse Wheel

Front                Numpad 1
Back                 Ctrl + Numpad 1

Right                Numpad 3
Left                 Ctrl + Numpad 3

Top                  Numpad 7
Bottom               Ctrl + Numpad 7

Camera View          Numpad 0

Perspective /
Orthographic         Numpad 5

Frame Selected       Numpad .

Frame All            Home

Local View           Numpad /

Hide Selected        H
Unhide               Alt + H

Box Select           B

Move to Collection   M

Maximize Editor      Ctrl + Space
```

---

# 83. Bản đồ tư duy bài học

```text
                      NAVIGATION
                          │
        ┌─────────────────┼──────────────────┐
        │                 │                  │
       MOVE              VIEW              FOCUS
        │                 │                  │
   ┌────┼────┐       ┌────┼─────┐      ┌────┼────┐
   │    │    │       │    │     │      │    │    │
Orbit  Pan  Zoom    Front Right Top   Frame Local All
 MMB  Shift Wheel     1    3    7       .    /   Home
       +MMB
                         │
                         ├── Camera → 0
                         │
                         └── Perspective /
                             Orthographic → 5

                          │
                      VISIBILITY
                          │
                     ┌────┴────┐
                     │         │
                     H       Alt + H
                    Hide      Show

                          │
                     ORGANIZATION
                          │
                  ┌───────┼────────┐
                  │       │        │
               Outliner Collection M
                                   │
                            Move to Collection
```

---

# 84. Tóm tắt bài học

```text
MỞ SCENE
   ↓
ORBIT / PAN / ZOOM
   ↓
HỌC TRỤC X/Y/Z
   ↓
1 / 3 / 7
Front / Right / Top
   ↓
Ctrl + 1 / 3 / 7
Back / Left / Bottom
   ↓
Numpad 5
Perspective ↔ Orthographic
   ↓
Numpad 0
Camera View
   ↓
Select Object
   ↓
Numpad .
Frame Selected
   ↓
Numpad /
Local View
   ↓
H / Alt + H
Hide / Unhide
   ↓
Home
Frame All
   ↓
OUTLINER + COLLECTIONS
   ↓
M
Move to Collection
   ↓
PROJECT SẠCH VÀ DỄ ĐIỀU HƯỚNG
```

**Ý tưởng cốt lõi của bài 004:**

> Điều hướng tốt không làm thay đổi object; nó chỉ thay đổi cách bạn quan sát scene. Hãy luyện `MMB`, `Shift + MMB`, Wheel, `Numpad 1/3/7`, `Numpad .`, `Numpad /` và `Home` cho đến khi trở thành phản xạ. Khi kết hợp Navigation với Hide, Local View và Collection, bạn có thể làm việc hiệu quả ngay cả trong những scene Blender rất lớn.
