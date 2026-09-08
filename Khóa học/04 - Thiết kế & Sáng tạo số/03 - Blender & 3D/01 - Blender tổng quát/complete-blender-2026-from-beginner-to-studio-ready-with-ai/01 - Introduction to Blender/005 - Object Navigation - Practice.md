# 005 — Object Navigation

| Thuộc tính     | Nội dung                                                                   |
| -------------- | -------------------------------------------------------------------------- |
| **Phần**       | 01 — Introduction to Blender                                               |
| **Thời lượng** | 9:18                                                                       |
| **Chủ đề**     | Select, Move, Rotate, Scale, Duplicate và quản lý Object                   |
| **Mức độ**     | Nhập môn                                                                   |
| **Trọng tâm**  | Điều khiển object bằng hotkey, hiểu Transform và xây dựng scene có tổ chức |

---

## 1. Mục tiêu bài học

Sau bài này, người học có thể:

* [ ] Chọn một hoặc nhiều object.
* [ ] Tạo primitive mới bằng `Shift + A`.
* [ ] Hiểu vai trò của **3D Cursor**.
* [ ] Di chuyển object bằng `G`.
* [ ] Xoay object bằng `R`.
* [ ] Scale object bằng `S`.
* [ ] Giới hạn Transform theo trục `X`, `Y`, `Z`.
* [ ] Nhập giá trị số chính xác cho Transform.
* [ ] Reset Location, Rotation và Scale.
* [ ] Duplicate object bằng `Shift + D`.
* [ ] Xóa object bằng `X` hoặc `Delete`.
* [ ] Hiểu khi nào cần `Ctrl + A → Apply`.
* [ ] Đặt tên object rõ ràng.
* [ ] Gom object vào Collection phù hợp.
* [ ] Dựng được một object đơn giản từ nhiều primitive.

---

## File mẫu thực hành Object Navigation

File mẫu đã được đặt cùng thư mục với bài học:

> [Tải/mở `04.+Object+Navigation.blend`](04.%2BObject%2BNavigation.blend)

Nguồn ban đầu: `C:\Users\Khanh PC\Downloads\04.+Object+Navigation.blend`

Vị trí trong khóa học: `01 - Introduction to Blender\04.+Object+Navigation.blend`

File này dùng để luyện select, move, rotate, scale, duplicate, apply transform,
đặt tên object và tổ chức Collection.

### Mở file từ Blender

```text
File
 ↓
Open
 ↓
Chọn 04.+Object+Navigation.blend
 ↓
Open Blender File
```

Nếu Blender hỏi có lưu scene hiện tại hay không, hãy xử lý trước khi mở file mẫu.

---

# 2. Ba nhóm kỹ năng chính

Bài này tập trung vào ba vấn đề:

```text
OBJECT WORKFLOW
│
├── 1. SELECT
│      ├── Select Box
│      ├── Select Circle
│      └── Select Lasso
│
├── 2. TRANSFORM
│      ├── G → Move
│      ├── R → Rotate
│      └── S → Scale
│
└── 3. ORGANIZATION
       ├── Naming
       ├── Duplicate
       ├── Hide
       └── Collection
```

Trong thực tế, `G`, `R`, `S` là ba phím được sử dụng gần như liên tục khi làm Blender.

---

# 3. Scene mặc định của Blender

Khi mở template **General**, scene thường có:

```text
Scene Collection
│
├── Camera
├── Cube
└── Light
```

Trong bài này chủ yếu tập trung vào object hình học như:

* Cube.
* Sphere.
* Cylinder.
* Cone.
* Các primitive khác.

Camera và Light sẽ được học kỹ hơn ở các phần sau.

---

# 4. Toolbar — T Panel

Nhấn:

```text
T
```

để bật hoặc tắt Toolbar bên trái 3D Viewport.

Toolbar chứa các công cụ như:

```text
Toolbar
│
├── Select
├── Cursor
├── Move
├── Rotate
├── Scale
├── Transform
├── Annotate
└── Measure
```

Các công cụ này rất hữu ích để hiểu Blender hoạt động như thế nào.

Tuy nhiên, khi đã quen:

> **Nên ưu tiên hotkey vì nhanh hơn đáng kể.**

---

# 5. Select Box

Công cụ lựa chọn cơ bản nhất là:

```text
Select Box
```

Cho phép kéo một vùng hình chữ nhật để chọn nhiều object.

Ví dụ:

```text
┌──────────────────────┐
│  Cube      Sphere    │
│                      │
│       Cylinder       │
└──────────────────────┘
```

Các object nằm trong vùng chọn sẽ được đưa vào selection.

---

# 6. Select nhiều object

Để thêm object vào vùng chọn hiện tại:

```text
Shift + Left Click
```

Ví dụ:

```text
Select Cube
     ↓
Shift + Click Sphere
     ↓
Shift + Click Cylinder
     ↓
3 object được chọn
```

Nếu click lại một object với modifier phù hợp, nó có thể được bỏ khỏi nhóm lựa chọn.

---

# 7. Các phương thức Selection

Blender cung cấp nhiều kiểu chọn:

```text
Selection
│
├── Box
├── Circle
└── Lasso
```

## Select Box

Phù hợp nhất cho phần lớn công việc.

## Select Circle

Tạo vùng chọn dạng tròn.

Rất hữu ích khi làm việc với nhiều:

* Vertex.
* Edge.
* Face.

Đặc biệt trong **Edit Mode**.

## Select Lasso

Cho phép vẽ vùng lựa chọn tự do.

Hữu ích khi selection có hình dạng phức tạp.

---

# 8. Khuyến nghị cho người mới

Trong phần lớn tình huống:

```text
Select Box
```

là đủ.

Sau này khi làm mesh phức tạp mới cần sử dụng Circle hoặc Lasso thường xuyên hơn.

---

# 9. 3D Cursor là gì?

Blender có một đối tượng đặc biệt gọi là:

```text
3D Cursor
```

Nó trông giống một dấu:

```text
⊕
```

3D Cursor không phải object để render.

Nó đóng vai trò như một **điểm tham chiếu trong không gian 3D**.

---

# 10. Primitive mới được tạo ở đâu?

Thông thường khi tạo object mới:

```text
Shift + A
```

object sẽ xuất hiện tại vị trí:

```text
3D Cursor
```

Ví dụ:

```text
3D Cursor
    ↓
Shift + A
    ↓
Mesh
    ↓
UV Sphere
    ↓
Sphere xuất hiện tại Cursor
```

---

# 11. Di chuyển 3D Cursor

Có thể chọn công cụ:

```text
Cursor
```

trong Toolbar rồi click vị trí mới trong Viewport.

Khi đó primitive tiếp theo sẽ xuất hiện tại khu vực đó.

---

# 12. Đưa Cursor về World Origin

Nếu Cursor bị di chuyển khỏi trung tâm:

```text
Shift + S
```

sau đó chọn:

```text
Cursor to World Origin
```

Kết quả:

```text
3D Cursor
Location X = 0
Location Y = 0
Location Z = 0
```

Workflow:

```text
Cursor bị lệch
      ↓
Shift + S
      ↓
Cursor to World Origin
      ↓
Cursor trở lại (0,0,0)
```

---

# 13. Tạo object bằng menu

Có thể sử dụng:

```text
Add
 ↓
Mesh
 ↓
UV Sphere
```

Ví dụ:

```text
Add
└── Mesh
    ├── Plane
    ├── Cube
    ├── Circle
    ├── UV Sphere
    ├── Icosphere
    ├── Cylinder
    ├── Cone
    └── Torus
```

---

# 14. Tạo object bằng hotkey

Workflow nhanh hơn:

```text
Shift + A
```

Sau đó chọn:

```text
Mesh
 ↓
Primitive
```

Ví dụ:

```text
Shift + A
→ Mesh
→ Cylinder
```

Một Cylinder sẽ được tạo tại vị trí của 3D Cursor.

---

# 15. Add Object — quy trình cần nhớ

```text
3D Cursor
    ↓
Shift + A
    ↓
Mesh
    ↓
Primitive
    ↓
Object mới
```

Đây là workflow sẽ được sử dụng rất nhiều trong modeling.

---

# 16. Transform là gì?

Mọi object Blender đều có ba nhóm Transform chính:

```text
Transform
│
├── Location
├── Rotation
└── Scale
```

Có thể xem tương ứng:

```text
Location → Object đang ở đâu?

Rotation → Object đang quay như thế nào?

Scale    → Object lớn/nhỏ bao nhiêu?
```

---

# 17. Ba hotkey quan trọng nhất

```text
G → Grab / Move

R → Rotate

S → Scale
```

Có thể ghi nhớ:

```text
        TRANSFORM
            │
     ┌──────┼──────┐
     ↓      ↓      ↓
     G      R      S
    Move  Rotate  Scale
```

Đây là nhóm hotkey phải luyện thành phản xạ.

---

# 18. Move bằng Gizmo

Chọn công cụ **Move** trong Toolbar.

Object sẽ xuất hiện các mũi tên:

```text
Red   → X
Green → Y
Blue  → Z
```

Ví dụ kéo mũi tên xanh dương:

```text
Z Axis
  ↑
  │
Object
```

Object chỉ di chuyển theo trục Z.

---

# 19. Màu của các trục

Blender sử dụng convention:

| Trục | Màu        |
| ---- | ---------- |
| X    | Đỏ         |
| Y    | Xanh lá    |
| Z    | Xanh dương |

Ghi nhớ:

```text
X → Red

Y → Green

Z → Blue
```

Convention này xuất hiện gần như toàn bộ Blender.

---

# 20. Move bằng hotkey

Thay vì kéo Gizmo:

```text
G
```

Object sẽ bám theo chuột.

Ví dụ:

```text
Select Cylinder
      ↓
G
      ↓
Move Mouse
      ↓
Left Click / Enter
```

để xác nhận vị trí.

---

# 21. Cancel Transform

Nếu đang Move nhưng không muốn thực hiện:

```text
Esc
```

hoặc:

```text
Right Click
```

Ví dụ:

```text
G
↓
Di chuyển
↓
Không thích
↓
Esc
```

Object quay về vị trí trước khi bắt đầu thao tác.

---

# 22. Move theo một trục

Đây là workflow cực kỳ quan trọng.

### Theo X

```text
G → X
```

### Theo Y

```text
G → Y
```

### Theo Z

```text
G → Z
```

Ví dụ:

```text
G
Z
```

sau đó kéo chuột lên:

```text
       +Z
        ↑
        │
        ● Object
```

Object chỉ có thể di chuyển theo Z.

---

# 23. Move bằng giá trị chính xác

Có thể nhập con số trực tiếp.

Ví dụ:

```text
G
X
2
Enter
```

nghĩa là:

> Di chuyển object `2` đơn vị theo trục X.

Hoặc:

```text
G
Z
-1
Enter
```

nghĩa là:

> Di chuyển `-1` theo trục Z.

---

# 24. Công thức Move

```text
G + Axis + Value
```

Ví dụ:

```text
G X 2
G Y -3
G Z 0.5
```

Workflow này chính xác hơn kéo chuột bằng mắt.

---

# 25. Reset Location

Nếu object đã bị di chuyển và muốn đưa Location về:

```text
0, 0, 0
```

có thể dùng:

```text
Alt + G
```

Kết quả:

```text
Location
X = 0
Y = 0
Z = 0
```

---

# 26. Lưu ý về `Alt + G`

`Alt + G` không có nghĩa:

> "Quay lại thao tác vừa Move."

Nó có nghĩa:

> **Clear Location — đặt Location của object về giá trị mặc định liên quan tới transform/parent hiện tại.**

Do đó không nên dùng nếu bạn chỉ muốn Undo một thao tác vừa làm.

Trong trường hợp đó dùng:

```text
Ctrl + Z
```

---

# 27. Rotate bằng Gizmo

Công cụ Rotate hiển thị các vòng màu:

```text
X → Red

Y → Green

Z → Blue
```

Kéo từng vòng sẽ xoay object quanh axis tương ứng.

---

# 28. Rotate bằng hotkey

Cách nhanh:

```text
R
```

Sau đó kéo chuột.

Ví dụ:

```text
R
```

→ xoay object theo view hiện tại.

---

# 29. Rotate theo trục

### X Axis

```text
R X
```

### Y Axis

```text
R Y
```

### Z Axis

```text
R Z
```

Ví dụ:

```text
R Z
```

giới hạn rotation quanh Z.

---

# 30. Rotate chính xác bằng số

Ví dụ:

```text
R
Z
90
Enter
```

nghĩa là:

> Xoay object 90° quanh Z.

Ví dụ khác:

```text
R X -45
```

→ xoay `-45°` quanh X.

Công thức:

```text
R + Axis + Angle
```

---

# 31. Snap góc khi Rotate

Trong quá trình xoay có thể giữ:

```text
Ctrl
```

để snap rotation theo các increment.

Ví dụ:

```text
R
↓
Hold Ctrl
↓
Rotate
```

giúp dễ đạt các góc như:

```text
15°
30°
45°
90°
```

tùy thiết lập snap.

---

# 32. Nên nhập số khi cần góc chính xác

Nếu mục tiêu là chính xác:

```text
R Z 90
```

thường tốt hơn cố kéo bằng chuột đến đúng:

```text
90°
```

Nguyên tắc:

```text
Ước lượng
→ Mouse

Chính xác
→ Keyboard Value
```

---

# 33. Reset Rotation

Để đưa Rotation trở về:

```text
0°
0°
0°
```

dùng:

```text
Alt + R
```

Kết quả:

```text
Rotation
X = 0°
Y = 0°
Z = 0°
```

---

# 34. Chỉnh Rotation bằng N Panel

Ngoài hotkey:

```text
N
```

mở Sidebar.

Sau đó:

```text
Item
 ↓
Transform
 ↓
Rotation
```

Có thể nhập:

```text
X = 0
Y = 0
Z = 0
```

Nhưng khi làm việc nhanh:

```text
Alt + R
```

thuận tiện hơn.

---

# 35. Free Rotation

Blender còn có:

```text
R
R
```

được gọi là:

```text
Trackball Rotation
```

Cho phép xoay object tự do theo nhiều hướng.

Workflow:

```text
R
R
↓
Move Mouse
```

Tuy nhiên với modeling kỹ thuật, thường nên ưu tiên:

```text
R X
R Y
R Z
```

để giữ rotation dễ kiểm soát.

---

# 36. Scale

Scale quyết định kích thước object.

Transform:

```text
Scale
X
Y
Z
```

Mặc định thường là:

```text
Scale X = 1
Scale Y = 1
Scale Z = 1
```

---

# 37. Scale bằng Gizmo

Các trục:

```text
X
Y
Z
```

cho phép scale riêng từng chiều.

Ví dụ kéo Z:

```text
      ↑
      │
   ┌─────┐
   │     │
   │     │
   │     │
   └─────┘
```

object cao hơn nhưng không nhất thiết rộng hơn.

---

# 38. Uniform Scale

Để scale toàn bộ object đồng đều:

```text
S
```

Ví dụ:

```text
S
2
Enter
```

→ object lớn gấp 2 lần.

Kết quả Transform:

```text
Scale
X = 2
Y = 2
Z = 2
```

---

# 39. Scale theo Axis

Ví dụ:

```text
S Z 2
```

chỉ tăng chiều Z gấp đôi.

Hoặc:

```text
S X 0.5
```

giảm chiều X xuống một nửa.

Công thức:

```text
S + Axis + Factor
```

---

# 40. Ví dụ Scale

```text
S 2
```

→ lớn gấp 2 trên cả ba axis.

```text
S 0.5
```

→ còn 50%.

```text
S Z 3
```

→ chiều Z gấp 3.

```text
S X 0.2
```

→ chiều X còn 20%.

---

# 41. Scale mặc định là `1`, không phải `0`

Đây là điểm rất quan trọng.

Transform mặc định:

```text
Scale
X = 1
Y = 1
Z = 1
```

Nếu Scale:

```text
0
```

object bị co lại đến mức không còn kích thước theo axis đó.

Ví dụ:

```text
Scale Z = 0
```

object bị ép phẳng theo Z.

---

# 42. Reset Scale

Để reset Scale:

```text
Alt + S
```

**không phải** lệnh reset object scale.

Trong Object Mode, cách rõ ràng là chỉnh:

```text
Scale
X = 1
Y = 1
Z = 1
```

qua N Panel nếu thực sự muốn đưa giá trị Transform trở lại 1 theo cách thủ công.

Tuy nhiên cần phân biệt rất rõ giữa:

```text
Reset Scale
```

và:

```text
Apply Scale
```

---

# 43. Reset Transform và Apply Transform khác nhau

Đây là khái niệm rất quan trọng.

Giả sử:

```text
Cube ban đầu
Scale = 1, 1, 1
```

Bạn thực hiện:

```text
S 2
```

Kết quả:

```text
Object nhìn lớn gấp 2

Scale = 2, 2, 2
```

Nếu bạn reset Scale về:

```text
1, 1, 1
```

object sẽ nhỏ lại.

Nhưng nếu:

```text
Ctrl + A
→ Scale
```

thì:

```text
Object vẫn giữ kích thước hiện tại

Scale = 1, 1, 1
```

---

# 44. Apply Transform — `Ctrl + A`

Trong Object Mode:

```text
Ctrl + A
```

mở menu:

```text
Apply
│
├── Location
├── Rotation
├── Scale
├── Rotation & Scale
└── All Transforms
```

Một trong các lệnh quan trọng nhất:

```text
Ctrl + A
→ Scale
```

---

# 45. Apply Scale hoạt động thế nào?

Trước:

```text
Object Dimensions
2 × 4 × 6

Scale
X = 2
Y = 2
Z = 2
```

Sau:

```text
Ctrl + A
→ Scale
```

Object vẫn có kích thước:

```text
2 × 4 × 6
```

nhưng Transform thành:

```text
Scale
X = 1
Y = 1
Z = 1
```

---

# 46. Vì sao Apply Scale quan trọng?

Scale chưa Apply có thể ảnh hưởng tới:

* Modifier.
* Bevel.
* Array.
* Solidify.
* Physics.
* Rigid Body.
* Rigging.
* Constraints.
* Texture.
* Export.
* Một số Geometry Nodes workflow.

Ví dụ:

```text
Object
Scale = 4, 1, 1
      ↓
Bevel Modifier
      ↓
Bevel có thể không đồng đều
```

Sau:

```text
Ctrl + A
→ Scale
```

workflow thường dễ kiểm soát hơn.

---

# 47. Khi nào không nên `Ctrl + A` máy móc?

Không nên Apply mọi transform ngay lập tức mà không hiểu mục tiêu.

Một số rig, animation, parent hoặc workflow procedural có thể cần giữ Transform hiện tại.

Nguyên tắc:

> **Apply khi công đoạn tiếp theo cần transform sạch, không phải vì “Scale luôn phải là 1”.**

Đặc biệt trước:

```text
Rigging
Physics
Certain Modifiers
Export
```

hãy kiểm tra yêu cầu của workflow.

---

# 48. Transform Cheat Sheet

```text
MOVE
G
G X
G Y
G Z

ROTATE
R
R X
R Y
R Z

SCALE
S
S X
S Y
S Z
```

Kết hợp với số:

```text
G X 2

R Z 90

S 0.5
```

---

# 49. Numeric Transform là workflow rất mạnh

Thay vì:

```text
Kéo bằng mắt
```

có thể:

```text
G X 2
```

hoặc:

```text
R Z 45
```

hoặc:

```text
S Z 1.5
```

Workflow này giúp modeling:

* Nhanh.
* Chính xác.
* Có thể lặp lại.
* Dễ kiểm soát.

---

# 50. Duplicate Object

Để nhân bản object:

```text
Shift + D
```

Workflow:

```text
Select Object
     ↓
Shift + D
     ↓
Move Mouse
     ↓
Left Click
```

Blender tạo một object mới.

---

# 51. Duplicate theo Axis

Ví dụ muốn duplicate một chiếc ghế sang bên phải:

```text
Shift + D
X
2
Enter
```

Workflow:

```text
Chair_01
    ↓
Shift + D
    ↓
X
    ↓
2
    ↓
Chair_02
```

---

# 52. Duplicate rồi Rotate

Có thể nối nhanh các thao tác:

```text
Shift + D
X
2
Enter

R
Z
90
Enter
```

Kết quả:

* Có bản sao mới.
* Bản gốc không thay đổi.
* Bản sao được xoay 90°.

---

# 53. Duplicate Independent nghĩa là gì?

`Shift + D` tạo object duplicate với dữ liệu riêng biệt để có thể chỉnh sửa độc lập theo workflow thông thường.

Ví dụ:

```text
Chair_A
    ↓
Shift + D
    ↓
Chair_B
```

Sau đó vào Edit Mode chỉnh geometry của `Chair_B`, thông thường `Chair_A` không thay đổi theo cùng kiểu của linked duplicate.

---

# 54. Linked Duplicate

Blender còn có:

```text
Alt + D
```

Đây là:

```text
Linked Duplicate
```

Hai object có Transform độc lập nhưng dùng chung Mesh Data.

Ví dụ:

```text
Chair_A ──┐
          ├── Same Mesh Data
Chair_B ──┘
```

Nếu chỉnh mesh trong Edit Mode của một object, object còn lại cũng thay đổi.

---

# 55. `Shift + D` và `Alt + D`

| Phím        | Kiểu                   |
| ----------- | ---------------------- |
| `Shift + D` | Duplicate thông thường |
| `Alt + D`   | Linked Duplicate       |

Trong bài này nên tập trung vào:

```text
Shift + D
```

để tạo bản sao độc lập dễ hiểu hơn cho người mới.

---

# 56. Hide Object

Để tạm thời ẩn object đang chọn:

```text
H
```

Để hiện lại:

```text
Alt + H
```

Ví dụ:

```text
Select Table
    ↓
H
    ↓
Table tạm ẩn
```

Không phải Delete.

---

# 57. Delete Object

Để xóa object:

```text
X
```

hoặc:

```text
Delete
```

Sau đó xác nhận.

Workflow:

```text
Select Object
     ↓
X
     ↓
Delete
```

Object sẽ bị loại khỏi scene.

---

# 58. Hide và Delete

| Hành động | Phím      | Object còn tồn tại? |
| --------- | --------- | ------------------- |
| Hide      | `H`       | Có                  |
| Unhide    | `Alt + H` | Có                  |
| Delete    | `X`       | Không               |

Nếu chỉ muốn object bớt cản trở Viewport:

```text
H
```

Nếu chắc chắn không cần nữa:

```text
X
```

---

# 59. Annotation

Toolbar cũng có:

```text
Annotate
```

cho phép vẽ ghi chú trực tiếp trong Viewport.

Ví dụ:

```text
→ phần này cần sửa
→ cạnh này quá dài
→ đặt object ở đây
```

Annotation hữu ích cho:

* Review.
* Team feedback.
* Planning.
* Ghi chú nhanh.

Nhưng không ảnh hưởng đến geometry.

---

# 60. Measure Tool

Blender có công cụ:

```text
Measure
```

dùng để đo:

* Khoảng cách.
* Góc.
* Kích thước tương đối.

Để đo chính xác hơn nên dùng các axis view như:

```text
Numpad 1
Numpad 3
Numpad 7
```

và kết hợp với Dimension trong N Panel khi cần số chính xác.

---

# 61. Dimension chính xác của Object

Nhấn:

```text
N
```

rồi vào:

```text
Item
→ Transform
→ Dimensions
```

Ví dụ:

```text
Dimensions

X = 4 m
Y = 4 m
Z = 2 m
```

Đây là nơi phù hợp hơn nếu cần biết kích thước chính xác của object.

---

# 62. Primitive Tool

Toolbar có thể cho phép tạo primitive tương tác trực tiếp.

Tuy nhiên workflow phổ biến hơn:

```text
Shift + A
```

Ví dụ:

```text
Shift + A
→ Mesh
→ Cube
```

Nhanh và thống nhất hơn khi thao tác bằng keyboard.

---

# 63. Hotkey-first workflow

Bài học nhấn mạnh việc làm quen với hotkey.

Không nên phụ thuộc hoàn toàn vào:

```text
Toolbar → Move
Toolbar → Rotate
Toolbar → Scale
```

Nên dần chuyển sang:

```text
G
R
S
```

Có thể dùng Gizmo khi:

* Mới học.
* Cần quan sát axis.
* Cần thao tác trực quan.

Nhưng với workflow nhanh:

```text
Hotkeys + Numeric Input
```

thường hiệu quả hơn.

---

# 64. Đặt tên Object

Không nên để scene phát triển thành:

```text
Cube
Cube.001
Cube.002
Cube.003
Cube.004
```

Nên đặt tên có ý nghĩa:

```text
Chair_Seat
Chair_Back
Chair_Leg_FL
Chair_Leg_FR
Chair_Leg_BL
Chair_Leg_BR
```

Hoặc:

```text
Snowman_Body
Snowman_Head
Snowman_Eye_L
Snowman_Eye_R
Snowman_Nose
Snowman_Hat
```

---

# 65. Vì sao Naming quan trọng?

Một project có:

```text
5 objects
```

thì tên mặc định vẫn có thể chấp nhận được.

Nhưng project có:

```text
500 objects
```

sẽ rất khó quản lý nếu tất cả đều là:

```text
Cube.143
Sphere.087
Cylinder.029
```

Naming rõ ràng giúp:

* Search.
* Rigging.
* Animation.
* Scripting.
* Export.
* Team collaboration.

---

# 66. Collection

Các object liên quan nên được đưa vào Collection.

Ví dụ một chiếc ghế:

```text
CHAIR
│
├── Chair_Seat
├── Chair_Back
├── Chair_Leg_FL
├── Chair_Leg_FR
├── Chair_Leg_BL
└── Chair_Leg_BR
```

Hoặc snowman:

```text
SNOWMAN
│
├── Body
├── Chest
├── Head
├── Eye_L
├── Eye_R
├── Nose
└── Hat
```

---

# 67. Move to Collection

Chọn object rồi:

```text
M
```

Blender mở:

```text
Move to Collection
```

Sau đó chọn Collection cần đưa object vào.

Ví dụ:

```text
Select toàn bộ Chair
      ↓
M
      ↓
CHAIR
```

---

# 68. Tạo Collection mới

Khi nhấn:

```text
M
```

có thể chọn:

```text
New Collection
```

rồi đặt tên:

```text
CHAIR
```

Workflow:

```text
Select Objects
     ↓
M
     ↓
New Collection
     ↓
CHAIR
     ↓
Create
```

---

# 69. Scene hierarchy tốt

Ví dụ:

```text
Scene Collection
│
├── ENVIRONMENT
│   ├── Floor
│   └── Wall
│
├── FURNITURE
│   └── CHAIR
│       ├── Chair_Seat
│       ├── Chair_Back
│       └── Chair_Legs
│
├── LIGHTS
│
└── CAMERAS
```

Một scene có tổ chức giúp việc tiếp tục project sau nhiều tuần dễ dàng hơn rất nhiều.

---

# 70. Bài thực hành trong video — Snowman

Sau khi học Transform, bài tập là tái tạo một **Snowman** từ các primitive.

Có thể chia thành:

```text
SNOWMAN
│
├── Body_Lower
├── Body_Middle
├── Head
├── Hat
├── Eye_L
├── Eye_R
└── Nose
```

---

# 71. Thân Snowman

Tạo:

```text
Shift + A
→ Mesh
→ UV Sphere
```

Đây là phần thân dưới.

---

# 72. Phần thân thứ hai

Tạo thêm:

```text
Shift + A
→ Mesh
→ UV Sphere
```

Ban đầu Sphere mới có thể nằm bên trong Sphere trước vì:

```text
Cùng vị trí 3D Cursor
```

Di chuyển:

```text
G Z
```

Sau đó scale:

```text
S
```

để nhỏ hơn.

---

# 73. Đầu Snowman

Tạo Sphere thứ ba:

```text
Shift + A
→ Mesh
→ UV Sphere
```

Sau đó:

```text
G Z
```

đưa lên phía trên.

Tiếp tục:

```text
S
```

để giảm kích thước.

Kết quả:

```text
       ○ Head
       │
      ◯ Middle
       │
     ◯◯ Lower
```

---

# 74. Mũ Snowman

Có thể sử dụng primitive phù hợp như:

```text
Cylinder
```

hoặc các primitive khác tùy thiết kế.

Sau khi tạo:

```text
G
R
S
```

để:

* Đặt đúng vị trí.
* Nghiêng mũ.
* Thay đổi chiều cao và chiều rộng.

Ví dụ:

```text
R X
```

để nghiêng mũ.

---

# 75. Mắt

Tạo một:

```text
UV Sphere
```

scale nhỏ:

```text
S 0.1
```

đặt lên mặt.

Sau đó thay vì tạo lại từ đầu:

```text
Shift + D
```

để duplicate mắt thứ hai.

Workflow:

```text
Eye_L
   ↓
Shift + D
   ↓
X
   ↓
Eye_R
```

Đây là ví dụ rất tốt để luyện Duplicate.

---

# 76. Mũi

Có thể sử dụng:

```text
Cone
```

Sau đó:

```text
S
R
G
```

để biến Cone thành mũi.

Ví dụ tùy orientation:

```text
R Y 90
```

rồi đưa ra phía trước khuôn mặt.

---

# 77. Workflow Snowman hoàn chỉnh

```text
UV Sphere
    ↓
Body Lower
    ↓
Shift + A → UV Sphere
    ↓
G Z + S
    ↓
Body Middle
    ↓
Shift + A → UV Sphere
    ↓
G Z + S
    ↓
Head
    ↓
Cylinder
    ↓
G / R / S
    ↓
Hat
    ↓
UV Sphere
    ↓
Eye_L
    ↓
Shift + D
    ↓
Eye_R
    ↓
Cone
    ↓
Nose
```

---

# 78. Bài thực hành mở rộng — Cụm ghế

Theo mục tiêu bài, có thể làm thêm một project nhỏ:

```text
CHAIR
│
├── Seat
├── Back
├── Leg_FL
├── Leg_FR
├── Leg_BL
└── Leg_BR
```

---

# 79. Bước 1 — Tạo mặt ghế

```text
Shift + A
→ Mesh
→ Cube
```

Sau đó:

```text
S X
S Y
S Z
```

để tạo hình mặt ghế.

Ví dụ:

```text
S X 2
S Y 2
S Z 0.2
```

---

# 80. Bước 2 — Tạo chân ghế

Tạo Cube:

```text
Shift + A
→ Cube
```

Scale:

```text
S X 0.15
S Y 0.15
S Z 1.5
```

Đặt chân đầu tiên vào vị trí.

---

# 81. Bước 3 — Duplicate chân ghế

Không cần tạo bốn Cube riêng.

Từ:

```text
Chair_Leg_FL
```

dùng:

```text
Shift + D
```

để tạo các chân còn lại.

Ví dụ:

```text
Leg_FL
  │
  ├── Shift + D X → Leg_FR
  │
  └── Shift + D Y → Leg_BL
                        │
                        └── Shift + D X → Leg_BR
```

---

# 82. Bước 4 — Tạo lưng ghế

Tạo Cube mới hoặc duplicate một phần thích hợp.

Sau đó:

```text
G
R
S
```

để đưa lưng ghế lên phía sau.

---

# 83. Bước 5 — Đặt tên

Ví dụ:

```text
Chair_Seat
Chair_Back
Chair_Leg_FL
Chair_Leg_FR
Chair_Leg_BL
Chair_Leg_BR
```

Convention:

```text
F = Front
B = Back
L = Left
R = Right
```

---

# 84. Bước 6 — Collection

Chọn toàn bộ object của ghế:

```text
Shift + Click
```

hoặc Box Select.

Sau đó:

```text
M
→ New Collection
→ CHAIR
```

Kết quả:

```text
Scene Collection
└── CHAIR
    ├── Chair_Seat
    ├── Chair_Back
    ├── Chair_Leg_FL
    ├── Chair_Leg_FR
    ├── Chair_Leg_BL
    └── Chair_Leg_BR
```

---

# 85. Bước 7 — Duplicate cả chiếc ghế

Chọn toàn bộ object trong CHAIR.

Sau đó:

```text
Shift + D
```

và di chuyển:

```text
X
3
```

Có thể tạo một chiếc ghế thứ hai.

Nếu muốn các object của ghế mới hoàn toàn tách biệt để chỉnh độc lập, kiểm tra chúng không sử dụng linked data ngoài ý muốn.

---

# 86. Transform đúng trục

Một nguyên tắc quan trọng:

> Khi biết chính xác object cần di chuyển theo hướng nào, hãy khóa axis.

Thay vì:

```text
G
→ kéo tự do
```

nên:

```text
G X
G Y
G Z
```

Tương tự:

```text
R X
R Y
R Z

S X
S Y
S Z
```

Điều này làm scene sạch và chính xác hơn.

---

# 87. Quy trình Transform chuẩn

```text
Select Object
     ↓
Chọn thao tác
G / R / S
     ↓
Chọn Axis nếu cần
X / Y / Z
     ↓
Nhập số nếu cần
     ↓
Enter
```

Ví dụ:

```text
Select Chair
      ↓
G
      ↓
X
      ↓
2
      ↓
Enter
```

---

# 88. Thực hành 1 — Move

Tạo Cube.

Thực hiện:

```text
G X 2
G Y 3
G Z 1
```

Sau đó kiểm tra N Panel.

Mục tiêu:

```text
Hiểu chính xác axis nào thay đổi.
```

---

# 89. Thực hành 2 — Rotate

Tạo Cube.

Thực hiện:

```text
R X 45
```

sau đó:

```text
Alt + R
```

Kiểm tra Rotation trở về:

```text
0
0
0
```

---

# 90. Thực hành 3 — Scale

Tạo Cube.

Thực hiện:

```text
S Z 2
```

Quan sát:

```text
Scale Z = 2
```

Sau đó thử:

```text
Ctrl + A
→ Scale
```

Kiểm tra:

```text
Dimensions không đổi

Scale Z → 1
```

---

# 91. Thực hành 4 — Cursor

Di chuyển 3D Cursor sang một vị trí mới.

Sau đó:

```text
Shift + A
→ UV Sphere
```

Quan sát Sphere được tạo ở đó.

Cuối cùng:

```text
Shift + S
→ Cursor to World Origin
```

---

# 92. Thực hành 5 — Duplicate

Tạo một Cube:

```text
Cube_01
```

Sau đó:

```text
Shift + D
X
2
```

Đổi tên:

```text
Cube_02
```

Vào Edit Mode của một bản và chỉnh geometry để kiểm tra kiểu duplicate mà bạn đang sử dụng.

---

# 93. Thực hành 6 — Hide

Chọn vài object:

```text
H
```

Sau đó:

```text
Alt + H
```

Đảm bảo hiểu rằng object chỉ bị tạm ẩn.

---

# 94. Thực hành 7 — Collection

Tạo:

```text
Cube
Sphere
Cylinder
Cone
```

Đặt tên:

```text
Prop_Cube
Prop_Sphere
Prop_Cylinder
Prop_Cone
```

Chọn tất cả:

```text
M
→ New Collection
→ PROPS
```

---

# 95. Các lỗi thường gặp

## Nhấn `G` rồi object chạy lung tung

Khóa axis:

```text
G X
```

hoặc:

```text
G Y
```

hoặc:

```text
G Z
```

---

## Scale sai trục

Dùng:

```text
S + Axis
```

Ví dụ:

```text
S Z
```

thay vì scale tự do.

---

## Xoay sai hướng

Sử dụng:

```text
R X
R Y
R Z
```

và nhập góc chính xác.

Ví dụ:

```text
R Z 90
```

---

## Muốn hủy Transform hiện tại

Nhấn:

```text
Esc
```

hoặc:

```text
Right Click
```

---

## Object đã Move sai

Nếu vừa thao tác xong:

```text
Ctrl + Z
```

Nếu thực sự muốn clear Location:

```text
Alt + G
```

---

## Object xoay loạn

Có thể dùng:

```text
Alt + R
```

nếu mục tiêu là Clear Rotation.

---

## Object quá nhỏ và tưởng đã biến mất

Kiểm tra:

```text
Scale
```

Nếu đang:

```text
0
```

hoặc rất gần `0`, object vẫn tồn tại nhưng bị co cực nhỏ.

---

## Modifier hoạt động kỳ lạ sau Scale

Kiểm tra:

```text
Scale ≠ 1
```

Nếu workflow yêu cầu:

```text
Ctrl + A
→ Scale
```

---

## Tạo Sphere nhưng không thấy Sphere mới

Hai object có thể đang nằm cùng vị trí:

```text
Old Sphere
New Sphere
      ↑
cùng 3D Cursor
```

Kiểm tra Outliner, chọn object mới rồi:

```text
G
```

để di chuyển nó ra.

---

# 96. Không nên phụ thuộc hoàn toàn vào Gizmo

Gizmo tốt để:

* Hiểu axis.
* Kiểm tra hướng.
* Thao tác trực quan.

Nhưng workflow chuyên nghiệp thường kết hợp:

```text
Hotkey
+
Axis Constraint
+
Numeric Input
```

Ví dụ:

```text
G X 2

R Z 90

S Z 0.5
```

Nhanh hơn nhiều so với cố kéo các handle bằng chuột.

---

# 97. Hotkey Cheat Sheet

| Phím           | Chức năng          |
| -------------- | ------------------ |
| `Shift + A`    | Add                |
| `G`            | Move               |
| `R`            | Rotate             |
| `S`            | Scale              |
| `X/Y/Z`        | Giới hạn theo Axis |
| `Alt + G`      | Clear Location     |
| `Alt + R`      | Clear Rotation     |
| `Shift + D`    | Duplicate          |
| `Alt + D`      | Linked Duplicate   |
| `Ctrl + A`     | Apply Transform    |
| `H`            | Hide               |
| `Alt + H`      | Unhide             |
| `X` / `Delete` | Delete             |
| `M`            | Move to Collection |
| `N`            | Sidebar            |
| `Shift + S`    | Snap Menu          |
| `Ctrl + Z`     | Undo               |

---

# 98. Công thức cần thuộc

```text
MOVE
G + Axis + Distance
```

Ví dụ:

```text
G X 2
```

---

```text
ROTATE
R + Axis + Angle
```

Ví dụ:

```text
R Z 90
```

---

```text
SCALE
S + Axis + Factor
```

Ví dụ:

```text
S Z 2
```

---

```text
DUPLICATE
Shift + D + Axis + Distance
```

Ví dụ:

```text
Shift + D X 2
```

---

# 99. Bản đồ tư duy

```text
                       OBJECT NAVIGATION
                              │
             ┌────────────────┼────────────────┐
             │                │                │
           CREATE           SELECT          TRANSFORM
             │                │                │
        Shift + A         Left Click      ┌────┼────┐
             │           Shift Click      │    │    │
             │               Box          G    R    S
             │                            │    │    │
          Primitive                       Move Rot Scale
             │
             └──────────────┐
                            │
                         3D Cursor
                            │
                        Shift + S
                            │
                   Cursor to Origin

                              │
                           DUPLICATE
                              │
                         Shift + D
                              │
                     Independent Copy

                              │
                          VISIBILITY
                              │
                         ┌────┴────┐
                         H       Alt + H
                        Hide       Show

                              │
                         ORGANIZATION
                              │
                    ┌─────────┴─────────┐
                   Naming              M
                                      │
                              Move to Collection

                              │
                         TRANSFORM CLEANUP
                              │
                         Ctrl + A
                              │
                        Apply Scale
```

---

# 100. Workflow thực tế

Một workflow object cơ bản có thể là:

```text
Shift + A
   ↓
Create Object
   ↓
Đặt tên
   ↓
G / R / S
   ↓
Constraint X / Y / Z
   ↓
Numeric Input nếu cần
   ↓
Ctrl + A nếu workflow yêu cầu
   ↓
Shift + D nếu cần bản sao
   ↓
M
   ↓
Đưa vào Collection
```

---

# 101. Checklist hoàn thành bài

## Selection

* [ ] Chọn được một object.
* [ ] Chọn được nhiều object bằng `Shift`.
* [ ] Hiểu Select Box.
* [ ] Biết Select Circle và Lasso tồn tại.

## 3D Cursor

* [ ] Biết 3D Cursor dùng để làm gì.
* [ ] Hiểu primitive mới được tạo tại Cursor.
* [ ] Biết `Shift + S`.
* [ ] Đưa được Cursor về World Origin.

## Add

* [ ] Biết `Shift + A`.
* [ ] Tạo được Cube.
* [ ] Tạo được UV Sphere.
* [ ] Tạo được Cylinder.
* [ ] Tạo được Cone.

## Move

* [ ] Biết `G`.
* [ ] Biết `G X`.
* [ ] Biết `G Y`.
* [ ] Biết `G Z`.
* [ ] Di chuyển bằng số chính xác.
* [ ] Biết `Alt + G`.

## Rotate

* [ ] Biết `R`.
* [ ] Biết `R X/Y/Z`.
* [ ] Nhập được góc chính xác.
* [ ] Biết giữ `Ctrl` để snap khi cần.
* [ ] Biết `Alt + R`.
* [ ] Biết `R R` dùng cho Trackball Rotation.

## Scale

* [ ] Biết `S`.
* [ ] Biết `S X/Y/Z`.
* [ ] Hiểu Scale mặc định là `1`.
* [ ] Không đặt Scale về `0` khi muốn reset.
* [ ] Phân biệt Reset Scale và Apply Scale.

## Apply Transform

* [ ] Biết `Ctrl + A`.
* [ ] Biết `Ctrl + A → Scale`.
* [ ] Hiểu Apply Scale giữ nguyên kích thước hình học hiện tại.
* [ ] Không Apply Transform máy móc khi chưa hiểu workflow.

## Duplicate

* [ ] Biết `Shift + D`.
* [ ] Duplicate được object theo một axis.
* [ ] Hiểu sự khác nhau cơ bản giữa `Shift + D` và `Alt + D`.
* [ ] Tạo được một duplicate độc lập.

## Visibility

* [ ] Biết `H`.
* [ ] Biết `Alt + H`.
* [ ] Phân biệt Hide với Delete.

## Organization

* [ ] Object có tên dễ hiểu.
* [ ] Biết `M` → Move to Collection.
* [ ] Tạo được Collection mới.
* [ ] Các object cùng nhóm nằm trong Collection thích hợp.

## Thực hành

* [ ] Dựng được Snowman từ primitive.
* [ ] Hoặc dựng được cụm ghế đơn giản.
* [ ] Các phần được Transform đúng trục.
* [ ] Sử dụng Duplicate thay vì tạo lại các object giống nhau.
* [ ] Outliner được tổ chức rõ ràng.

---

# 102. Tóm tắt bài học

```text
OBJECT
   │
   ├── CREATE
   │     ↓
   │  Shift + A
   │
   ├── MOVE
   │     ↓
   │     G
   │
   ├── ROTATE
   │     ↓
   │     R
   │
   ├── SCALE
   │     ↓
   │     S
   │
   ├── AXIS
   │     ↓
   │   X / Y / Z
   │
   ├── PRECISE VALUE
   │     ↓
   │    Number
   │
   ├── DUPLICATE
   │     ↓
   │ Shift + D
   │
   ├── APPLY
   │     ↓
   │ Ctrl + A
   │
   ├── HIDE
   │     ↓
   │ H / Alt + H
   │
   └── ORGANIZE
         ↓
       Naming
         ↓
         M
         ↓
     Collection
```

**Ý tưởng cốt lõi của bài 005:**

> Điều khiển object hiệu quả trong Blender dựa trên ba phím `G`, `R`, `S`. Khi kết hợp chúng với `X/Y/Z`, giá trị số, `Shift + D` và một hierarchy Collection rõ ràng, bạn có thể dựng scene nhanh nhưng vẫn chính xác và dễ quản lý. Đồng thời cần phân biệt rõ **thay đổi Transform** với **Apply Transform**: `Ctrl + A → Scale` không làm object nhỏ lại mà ghi kích thước hiện tại thành trạng thái Scale chuẩn `1,1,1`, khi workflow thực sự yêu cầu.

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
