# 006 — Edit Mode

| Thuộc tính        | Nội dung                                                 |
| ----------------- | -------------------------------------------------------- |
| **Phần**          | 01 — Introduction to Blender                             |
| **Thời lượng**    | 6:11                                                     |
| **Chủ đề**        | Vertex, Edge, Face và chỉnh sửa Mesh                     |
| **Kỹ năng chính** | Edit Mode, Selection Mode, Wireframe, transform hình học |

---

## 1. Mục tiêu bài học

Sau bài này, bạn cần:

* [ ] Phân biệt được **Object Mode** và **Edit Mode**.
* [ ] Biết vào/thoát Edit Mode nhanh bằng `Tab`.
* [ ] Hiểu Mesh được cấu tạo từ **Vertex → Edge → Face**.
* [ ] Chuyển nhanh giữa Vertex / Edge / Face Select.
* [ ] Di chuyển, xoay và scale trực tiếp hình học của Mesh.
* [ ] Hiểu **N-gon** là gì và vì sao cần thận trọng khi sử dụng.
* [ ] Biết dùng **Wireframe** để chọn cả những thành phần nằm phía sau vật thể.
* [ ] Phân biệt các chế độ hiển thị chính của Viewport.

---

## File mẫu thực hành Edit Mode

File mẫu đã được đặt cùng thư mục với bài học:

> [Tải/mở `05+Edit+mode.blend`](05%2BEdit%2Bmode.blend)

Nguồn ban đầu: `C:\Users\Khanh PC\Downloads\05+Edit+mode.blend`

Vị trí trong khóa học: `01 - Introduction to Blender\05+Edit+mode.blend`

File này dùng để luyện chuyển Object Mode/Edit Mode, chọn vertex/edge/face,
Wireframe và chỉnh sửa hình học của mesh.

### Mở file từ Blender

```text
File
 ↓
Open
 ↓
Chọn 05+Edit+mode.blend
 ↓
Open Blender File
```

Nếu Blender hỏi có lưu scene hiện tại hay không, hãy xử lý trước khi mở file mẫu.

---

# 2. Object Mode và Edit Mode

Blender có nhiều chế độ làm việc khác nhau. Hai chế độ quan trọng nhất ở giai đoạn đầu là:

| Chế độ          | Công dụng                         |
| --------------- | --------------------------------- |
| **Object Mode** | Làm việc với toàn bộ Object       |
| **Edit Mode**   | Chỉnh sửa hình học bên trong Mesh |

### Object Mode

Trong Object Mode, khi:

* di chuyển;
* xoay;
* scale;

thì bạn đang biến đổi **toàn bộ Object**.

### Edit Mode

Trong Edit Mode, bạn có thể chỉnh sửa trực tiếp:

* Vertex;
* Edge;
* Face.

Ví dụ:

```text
Cube ban đầu
     ↓
Edit Mode
     ↓
Chọn một số Vertex
     ↓
Di chuyển Vertex
     ↓
Hình dạng Cube thay đổi
```

---

# 3. Tạo Cube để thực hành

Nếu Scene chưa có Cube:

```text
Shift + A
   ↓
Mesh
   ↓
Cube
```

Sau đó chọn Cube.

---

# 4. Cách vào Edit Mode

Có hai cách.

## Cách 1 — Chọn bằng giao diện

Ở góc trên bên trái của 3D Viewport:

```text
Object Mode
    ↓
Edit Mode
```

Cách này sử dụng được nhưng khá chậm nếu phải chuyển chế độ thường xuyên.

---

## Cách 2 — Dùng phím `Tab`

Đây là cách nên sử dụng:

```text
Chọn Object
    ↓
Tab
    ↓
Edit Mode
```

Nhấn `Tab` lần nữa:

```text
Edit Mode
    ↓
Tab
    ↓
Object Mode
```

> **Khuyến nghị:** hình thành thói quen dùng `Tab` thay vì chọn chế độ thủ công bằng chuột.

---

# 5. Ẩn/hiện Toolbar bằng `T`

Khi vào Edit Mode, Blender hiển thị thêm các công cụ chỉnh sửa ở bên trái.

Có thể ẩn Toolbar để tăng diện tích Viewport:

```text
T
```

Nhấn `T` một lần nữa để hiện lại.

---

# 6. Mesh được cấu tạo như thế nào?

Một Mesh cơ bản gồm ba loại thành phần:

```text
        MESH
          │
    ┌─────┼─────┐
    │     │     │
 Vertex  Edge  Face
    │     │     │
 Điểm   Cạnh   Mặt
```

Mối quan hệ:

```text
Vertex ── Vertex
    \       /
     \ Edge
      \   /
       Face
```

---

# 7. Vertex — Điểm

**Vertex** là đơn vị hình học nhỏ nhất của Mesh.

Một Cube mặc định có:

* 8 Vertex;
* 12 Edge;
* 6 Face.

Trong Edit Mode, chuyển sang Vertex Select:

```text
1
```

> Sử dụng hàng số phía trên bàn phím khi con trỏ đang nằm trong 3D Viewport.

---

## Chọn một Vertex

Click vào Vertex cần chọn.

---

## Chọn nhiều Vertex

Giữ:

```text
Shift
```

và lần lượt click các Vertex.

---

## Di chuyển Vertex

Ví dụ:

```text
G
```

sau đó chọn trục:

```text
G → X
G → Y
G → Z
```

Ví dụ:

```text
G → Z
```

di chuyển Vertex theo trục Z.

### Kết quả

```text
Cube
 │
 ├── Vertex cố định
 │
 └── Vertex được kéo
        ↓
Hình dạng Mesh thay đổi
```

Đây là một trong những nguyên tắc quan trọng nhất của modeling:

> **Bạn tạo hình Object bằng cách thay đổi vị trí các Vertex của Mesh.**

---

# 8. Edge — Cạnh

**Edge** là đường nối giữa hai Vertex.

Chuyển sang Edge Select:

```text
2
```

Khi chọn một Edge, bạn có thể:

| Thao tác | Phím |
| -------- | ---- |
| Move     | `G`  |
| Rotate   | `R`  |
| Scale    | `S`  |

Ví dụ:

```text
Chọn Edge
   ↓
R
   ↓
X
```

Edge sẽ được xoay quanh trục X.

---

# 9. Face — Mặt

**Face** là vùng bề mặt được tạo bởi các Edge.

Chuyển sang Face Select:

```text
3
```

Face có thể là:

```text
Triangle
   △
3 cạnh
```

hoặc:

```text
Quad
┌─────┐
│     │
└─────┘
4 cạnh
```

Ngoài ra còn có:

```text
N-gon
5 cạnh trở lên
```

---

# 10. Vertex / Edge / Face Select

Trong Edit Mode:

| Phím | Selection Mode |
| ---: | -------------- |
|  `1` | Vertex Select  |
|  `2` | Edge Select    |
|  `3` | Face Select    |

Sơ đồ:

```text
1                 2                 3
│                 │                 │
▼                 ▼                 ▼

Vertex            Edge              Face

   •             •────•          •────•
                                /       \
                               •────────•
```

Việc sử dụng hotkey giúp modeling nhanh hơn nhiều so với liên tục click các nút trên giao diện.

---

# 11. N-gon là gì?

Một polygon có hơn 4 cạnh được gọi là:

> **N-gon**

Ví dụ mặt trên của Cylinder mặc định thường là một N-gon lớn.

```text
       ______
    .-'      '-.
   /            \
  |              |
   \            /
    '-.______.-'
```

---

## Triangle, Quad và N-gon

| Loại         | Số cạnh | Đặc điểm                                    |
| ------------ | ------: | ------------------------------------------- |
| **Triangle** |       3 | Đơn giản, rất phổ biến khi render/game      |
| **Quad**     |       4 | Tốt cho modeling và deformation             |
| **N-gon**    |      5+ | Tiện khi modeling nhưng dễ phát sinh vấn đề |

---

# 12. Vì sao cần thận trọng với N-gon?

Blender có thể hiển thị N-gon khá tốt, tuy nhiên chúng có thể gây vấn đề khi:

* deform Mesh;
* rigging;
* subdivision;
* export sang phần mềm khác;
* export sang game engine;
* triangulation tự động;
* shading trên bề mặt phức tạp.

Ví dụ:

```text
N-gon lớn
    ↓
Blender/Game Engine phải tự chia mặt
    ↓
Triangulation có thể khác mong muốn
    ↓
Shading / Deformation Artifact
```

---

## Topology nên ưu tiên

Thông thường:

```text
Modeling / Animation
        ↓
      QUADS
        ↓
Export / Rendering
        ↓
Triangles khi cần
```

Không phải mọi N-gon đều sai.

N-gon có thể vẫn dùng được trên:

* bề mặt phẳng;
* khu vực không deform;
* các bước modeling trung gian.

Nhưng với khu vực cần animation hoặc deformation, topology sạch bằng Quad thường an toàn hơn.

---

# 13. Thực hành với Cylinder

Thoát Edit Mode:

```text
Tab
```

Tạo Cylinder:

```text
Shift + A
    ↓
Mesh
    ↓
Cylinder
```

Di chuyển Cylinder nếu cần:

```text
G
```

Sau đó:

```text
Tab
```

để vào Edit Mode.

Quan sát mặt trên của Cylinder.

Thông thường bạn sẽ thấy một Face có rất nhiều cạnh:

```text
Cylinder
   ↓
Top Face
   ↓
N-gon
```

---

# 14. Các chế độ Viewport Shading

Ở góc phải phía trên của Viewport có bốn chế độ hiển thị chính:

```text
Wireframe
    ↓
Solid
    ↓
Material Preview
    ↓
Rendered
```

---

# 15. Wireframe Mode

Wireframe hiển thị cấu trúc Mesh dưới dạng các đường cạnh.

Đặc biệt hữu ích khi cần chọn cả hình học nằm phía sau Object.

Có thể mở Pie Menu bằng:

```text
Z
```

sau đó chọn:

```text
Wireframe
```

---

## Vì sao Wireframe quan trọng?

Giả sử bạn muốn chọn một nửa Cylinder.

Trong Solid Mode:

```text
Camera
   ↓

██████  ← mặt phía trước được nhìn thấy
██████

??????  ← phần phía sau bị che
```

Box Select trong trường hợp thông thường có thể chỉ chọn phần hình học nhìn thấy.

Trong Wireframe:

```text
Camera
   ↓

┆┆┆┆┆┆
┆┆┆┆┆┆
┆┆┆┆┆┆
```

Bạn nhìn xuyên qua Object và dễ chọn các Vertex/Edge/Face phía sau.

---

# 16. Solid Mode

Đây là chế độ làm việc phổ biến nhất khi modeling.

Mở:

```text
Z
↓
Solid
```

Trong Solid View:

* Object có dạng khối;
* dễ quan sát hình dáng;
* không phụ thuộc hoàn toàn vào vật liệu và ánh sáng Scene.

---

# 17. Material Preview

Material Preview dùng ánh sáng môi trường tích hợp của Blender để xem trước Material.

```text
Z
↓
Material Preview
```

Phù hợp khi:

* kiểm tra màu;
* texture;
* roughness;
* metallic;
* material.

Nếu chưa có Material thì Object thường trông khá đơn giản.

---

# 18. Rendered View

Rendered View hiển thị Scene gần với kết quả render thực tế.

```text
Z
↓
Rendered
```

Nó sử dụng:

* Material;
* Scene Lights;
* World;
* Render Engine.

Nếu Scene chưa có ánh sáng phù hợp, Object có thể rất tối.

---

# 19. So sánh các Viewport Mode

| Mode                 | Công dụng chính                         |
| -------------------- | --------------------------------------- |
| **Wireframe**        | Chọn xuyên Mesh, kiểm tra topology      |
| **Solid**            | Modeling                                |
| **Material Preview** | Xem nhanh Material                      |
| **Rendered**         | Kiểm tra ánh sáng và render gần thực tế |

Sơ đồ workflow:

```text
Modeling
   │
   ├── Wireframe → chọn xuyên Mesh
   │
   └── Solid → kiểm tra hình dạng
                   │
                   ▼
             Material Preview
                   │
                   ▼
               Rendered
```

---

# 20. Bài thực hành — Biến dạng Cylinder

Mục tiêu:

> Chọn một nửa Cylinder rồi thay đổi vị trí và góc của nó.

---

## Bước 1 — Chọn Cylinder

Ở Object Mode:

```text
Chọn Cylinder
```

---

## Bước 2 — Vào Edit Mode

```text
Tab
```

---

## Bước 3 — Chuyển sang Wireframe

```text
Z
↓
Wireframe
```

---

## Bước 4 — Chọn một nửa Cylinder

Có thể dùng Box Select:

```text
B
```

kéo vùng chọn qua một nửa Mesh.

Do đang ở Wireframe nên cả Vertex phía trước và phía sau đều có thể được chọn.

---

## Bước 5 — Di chuyển xuống theo Z

```text
G
↓
Z
```

Sau đó kéo chuột xuống.

Ví dụ:

```text
G → Z → -1
```

---

## Bước 6 — Xoay theo trục X

Vẫn giữ vùng vừa chọn:

```text
R
↓
X
```

Di chuyển chuột để xoay.

Ví dụ:

```text
R → X → 20
```

---

## Kết quả

Ban đầu:

```text
    ______
   /      \
  |        |
  |        |
  |        |
   \______/
```

Sau chỉnh sửa:

```text
    ______
   /      \
  |        |
  |       /
  |      /
   \____/
```

Ý tưởng chính là chỉ chỉnh **một phần hình học**, thay vì xoay hoặc di chuyển cả Object.

---

# 21. Quy trình Edit Mode cơ bản

```text
┌──────────────────────┐
│      Object Mode     │
└──────────┬───────────┘
           │ Tab
           ▼
┌──────────────────────┐
│       Edit Mode      │
└──────────┬───────────┘
           │
           ▼
   Chọn Selection Mode
      1 / 2 / 3
           │
           ▼
 Vertex / Edge / Face
           │
           ▼
     Chọn hình học
           │
           ▼
   G / R / S / ...
           │
           ▼
 Kiểm tra Wireframe /
       Solid Mode
           │
           ▼
          Tab
           │
           ▼
┌──────────────────────┐
│      Object Mode     │
└──────────────────────┘
```

---

# 22. Các hotkey cần nhớ

| Hotkey          | Chức năng                                                |
| --------------- | -------------------------------------------------------- |
| `Shift + A`     | Add Object                                               |
| `Tab`           | Object Mode ↔ Edit Mode                                  |
| `T`             | Ẩn/hiện Toolbar                                          |
| `1`             | Vertex Select                                            |
| `2`             | Edge Select                                              |
| `3`             | Face Select                                              |
| `G`             | Move                                                     |
| `R`             | Rotate                                                   |
| `S`             | Scale                                                    |
| `X`             | Giới hạn theo trục X sau transform                       |
| `Y`             | Giới hạn theo trục Y                                     |
| `Z`             | Giới hạn theo trục Z / mở Shading Pie khi chưa transform |
| `B`             | Box Select                                               |
| `Shift` + Click | Chọn thêm/bỏ phần tử khỏi vùng chọn                      |

> `Z` có hai ngữ cảnh khác nhau: nếu đang thực hiện `G`, `R` hoặc `S`, nó khóa transform theo trục Z; nếu không có transform đang chạy, `Z` mở Viewport Shading Pie Menu.

---

# 23. Object Transform và Mesh Transform khác nhau thế nào?

Đây là điểm rất quan trọng.

### Object Mode

```text
Cube
↓
G
↓
Toàn bộ Object di chuyển
↓
Origin cũng đi cùng Object
```

### Edit Mode

```text
Cube
↓
Tab
↓
Chọn Vertex
↓
G
↓
Mesh thay đổi
↓
Object vẫn là Object cũ
```

Do đó, nếu mục tiêu là thay đổi **hình dạng hình học**, Edit Mode thường là chế độ thích hợp.

---

# 24. Thực hành mở rộng

Ngoài bài tập trong video, có thể luyện thêm trên Cube.

## Bài 1 — Vertex

```text
Cube
↓
Tab
↓
1
↓
Chọn 2 Vertex
↓
G → Z
```

Tạo hình dạng không đối xứng.

---

## Bài 2 — Edge

```text
2
↓
Chọn Edge
↓
S
```

Thay đổi tỷ lệ một cạnh/vùng liên quan.

---

## Bài 3 — Face

```text
3
↓
Chọn Face
↓
G
```

Di chuyển một mặt và quan sát các Vertex/Edge liên quan thay đổi theo.

---

## Bài 4 — Extrude một Face

Chọn Face:

```text
3
```

sau đó:

```text
E
```

kéo Face ra ngoài.

```text
Cube
     ↓
Chọn Face
     ↓
E — Extrude
     ↓
Tạo hình học mới
```

> Extrude là công cụ modeling rất quan trọng và sẽ được học kỹ hơn ở các bài sau.

---

## Bài 5 — Bevel một Edge

Chọn Edge:

```text
2
```

sau đó:

```text
Ctrl + B
```

kéo chuột để tạo Bevel.

Bevel giúp cạnh:

```text
Cạnh sắc
   │
   ▼
   ┐
```

trở thành cạnh có nhiều segment hơn:

```text
Cạnh bevel
    ╮
```

---

# 25. Lỗi người mới thường gặp

## Lỗi 1 — Transform nhầm trong Object Mode

Bạn muốn kéo một Vertex nhưng cả Cube lại di chuyển.

### Nguyên nhân

Đang ở:

```text
Object Mode
```

### Cách sửa

```text
Tab
```

để vào Edit Mode.

---

## Lỗi 2 — Không chọn được Vertex phía sau

### Nguyên nhân

Đang ở Solid Mode và phần hình học phía sau bị che.

### Cách xử lý

```text
Z
↓
Wireframe
```

Sau đó chọn lại.

---

## Lỗi 3 — Nhấn `1`, `2`, `3` nhưng Viewport đổi góc nhìn

Một số cấu hình hoặc thao tác với Numpad có thể khiến bạn nhầm giữa:

```text
1 / 2 / 3
```

và:

```text
Numpad 1 / Numpad 2 / Numpad 3
```

Để đổi Vertex/Edge/Face Selection, dùng hàng số phía trên bàn phím khi đang trong Edit Mode.

---

## Lỗi 4 — Rendered View quá tối

Không phải Mesh bị lỗi.

Có thể Scene chưa có:

* Light;
* World lighting phù hợp;
* Material.

Ở giai đoạn modeling, cứ sử dụng:

```text
Solid
```

là đủ.

---

## Lỗi 5 — N-gon trông ổn nhưng deform bị lỗi

Một N-gon có thể nhìn hoàn toàn bình thường khi Mesh đứng yên nhưng gặp vấn đề khi:

```text
Rig
↓
Bone deformation
↓
N-gon bị triangulate
↓
Shading / deformation không ổn định
```

Vì vậy topology cho model animation nên được kiểm soát cẩn thận.

---

# 26. Kiến thức cốt lõi cần nhớ

### Edit Mode

> Chỉnh sửa **hình học bên trong Object**.

### Vertex

> Điểm cấu thành Mesh.

### Edge

> Đường nối giữa hai Vertex.

### Face

> Bề mặt được tạo từ các Edge.

### N-gon

> Face có trên 4 cạnh.

### Wireframe

> Cho phép nhìn xuyên Mesh và thuận tiện khi chọn hình học phía sau.

### Solid

> Chế độ chính để modeling.

---

# 27. Cheat Sheet

```text
OBJECT MODE
    │
    │ Tab
    ▼
EDIT MODE
    │
    ├── 1 → Vertex
    ├── 2 → Edge
    └── 3 → Face
          │
          ├── G → Move
          ├── R → Rotate
          ├── S → Scale
          ├── E → Extrude
          └── Ctrl+B → Bevel

Viewport:
Z
│
├── Wireframe
├── Solid
├── Material Preview
└── Rendered
```

---

# 28. Bài tập

### Bài tập chính

Sử dụng Cylinder:

1. Chọn Cylinder.
2. Nhấn `Tab`.
3. Chuyển sang Wireframe.
4. Chọn một nửa Mesh.
5. Nhấn `G → Z` để kéo xuống.
6. Nhấn `R → X` để xoay.
7. Trở lại Solid Mode.
8. Nhấn `Tab` về Object Mode.
9. Quan sát hình dạng cuối cùng.

### Bài tập mở rộng

Với Cube:

1. vào Edit Mode;
2. chọn Face Mode;
3. Extrude một Face bằng `E`;
4. chuyển sang Edge Mode;
5. Bevel một Edge bằng `Ctrl + B`;
6. kiểm tra topology trong Wireframe.

---

# 29. Checklist hoàn thành bài

* [ ] Phân biệt được Object Mode và Edit Mode.
* [ ] Vào/thoát Edit Mode bằng `Tab`.
* [ ] Hiểu Vertex, Edge và Face.
* [ ] Chuyển được Vertex Select bằng `1`.
* [ ] Chuyển được Edge Select bằng `2`.
* [ ] Chuyển được Face Select bằng `3`.
* [ ] Di chuyển vùng chọn bằng `G`.
* [ ] Xoay vùng chọn bằng `R`.
* [ ] Scale vùng chọn bằng `S`.
* [ ] Biết N-gon là Face có hơn 4 cạnh.
* [ ] Hiểu hạn chế của N-gon đối với deformation/export.
* [ ] Chuyển được giữa Wireframe và Solid bằng `Z`.
* [ ] Chọn được cả hình học phía trước và phía sau trong Wireframe.
* [ ] Extrude được một Face bằng `E`.
* [ ] Bevel được một Edge bằng `Ctrl + B`.
* [ ] Trở lại Object Mode mà Mesh vẫn giữ nguyên chỉnh sửa.

---

## Ghi nhớ

> **Object Mode = chỉnh Object.**
> **Edit Mode = chỉnh hình học của Object.**

Và ba phím quan trọng nhất trong bài:

```text
1 = Vertex
2 = Edge
3 = Face
```

Kết hợp với:

```text
G = Move
R = Rotate
S = Scale
```

Đây là nền tảng của gần như toàn bộ quá trình **3D Modeling trong Blender**.
