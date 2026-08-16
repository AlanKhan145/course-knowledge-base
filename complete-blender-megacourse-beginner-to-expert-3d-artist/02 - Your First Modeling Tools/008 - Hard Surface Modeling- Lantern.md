# 008 — Hard Surface Modeling: Lantern

| Thuộc tính        | Nội dung                                                               |
| ----------------- | ---------------------------------------------------------------------- |
| **Section**       | Section 02 — Your First Modeling Tools                                 |
| **Bài học**       | Hard Surface Modeling: Lantern                                         |
| **Loại nội dung** | Video lecture                                                          |
| **Thời lượng**    | 40:48                                                                  |
| **Ngôn ngữ gốc**  | English                                                                |
| **Chủ đề chính**  | Hard Surface Modeling, Lantern, Mesh Editing, Form Breakdown, Topology |

---

## 1. Tổng quan bài học

Bài học **Hard Surface Modeling: Lantern** tập trung vào việc áp dụng các công cụ modeling cơ bản đã học để dựng một vật thể hard-surface hoàn chỉnh hơn: **đèn lồng (lantern)**.

Đây là bước chuyển từ các bài tập hình học đơn giản sang quy trình modeling một asset có nhiều bộ phận, yêu cầu người học phải:

* phân tích hình dạng;
* chia vật thể thành các khối đơn giản;
* kiểm soát tỷ lệ;
* quản lý topology;
* sử dụng Edit Mode hiệu quả;
* xây dựng chi tiết theo từng lớp.

Có thể hình dung workflow tổng quát:

```text
Reference
   ↓
Phân tích hình dạng
   ↓
Primitive đơn giản
   ↓
Blockout
   ↓
Chỉnh tỷ lệ
   ↓
Tạo các bộ phận chính
   ↓
Thêm chi tiết
   ↓
Kiểm tra topology
   ↓
Hoàn thiện Lantern
```

---

# 2. Mục tiêu bài học

Sau bài học này, người học nên có thể:

* Hiểu khái niệm **Hard Surface Modeling**.
* Phân tích một vật thể phức tạp thành các primitive đơn giản.
* Xây dựng một chiếc đèn lồng từ các hình khối cơ bản.
* Sử dụng Object Mode và Edit Mode đúng mục đích.
* Thao tác với:

  * Vertex;
  * Edge;
  * Face.
* Kiểm soát:

  * Position;
  * Rotation;
  * Scale;
  * Proportion.
* Biết khi nào nên:

  * Extrude;
  * Inset;
  * Loop Cut;
  * Scale;
  * Duplicate.
* Giữ topology đủ sạch để tiếp tục chỉnh sửa.
* Phân biệt giữa:

  * blockout;
  * primary form;
  * secondary form;
  * detail.
* Xây dựng một asset hard-surface có cấu trúc rõ ràng.

---

# 3. Hard Surface Modeling là gì?

**Hard Surface Modeling** là phương pháp modeling thường được sử dụng cho các vật thể có cấu trúc cơ học hoặc bề mặt tương đối cứng.

Ví dụ:

* đèn;
* bàn;
* ghế;
* xe;
* máy móc;
* vũ khí;
* robot;
* nhà cửa;
* thiết bị điện tử;
* props trong game.

Khác với Organic Modeling:

```text
Hard Surface
│
├── Mechanical
├── Architectural
├── Props
└── Manufactured Objects
```

Trong khi:

```text
Organic Modeling
│
├── Người
├── Động vật
├── Cơ thể
├── Sinh vật
└── Hình dạng mềm
```

---

# 4. Đặc điểm của Hard Surface

Hard Surface thường có:

* bề mặt tương đối phẳng;
* cạnh rõ;
* hình dạng có cấu trúc;
* tính đối xứng;
* các bộ phận lắp ghép;
* tỷ lệ tương đối chính xác.

Ví dụ một Lantern có thể được phân tích thành:

```text
          Handle
            ╭───╮
           /     \
          /       \
      ┌─────────────┐
      │     Top     │
      ├─────────────┤
      │             │
      │    Glass    │
      │             │
      ├─────────────┤
      │    Base     │
      └─────────────┘
```

Thay vì nghĩ:

> "Tôi phải model toàn bộ chiếc đèn."

nên nghĩ:

```text
Lantern
├── Base
├── Body
├── Glass
├── Frame
├── Top
└── Handle
```

Đây là tư duy rất quan trọng trong modeling.

---

# 5. Bắt đầu bằng Reference

Trước khi modeling một asset, nên tìm hoặc sử dụng ảnh tham chiếu.

Reference giúp xác định:

* silhouette;
* tỷ lệ;
* độ cao;
* độ rộng;
* vị trí các chi tiết;
* cách các bộ phận kết nối với nhau.

Workflow:

```text
Reference
   ↓
Quan sát silhouette
   ↓
Tách thành primitive
   ↓
Blockout
```

Không nên ngay lập tức thêm chi tiết nhỏ.

---

# 6. Phân tích chiếc Lantern thành Primitive

Một chiếc lantern có thể được dựng từ:

| Bộ phận      | Primitive phù hợp |
| ------------ | ----------------- |
| Base         | Cube / Cylinder   |
| Main body    | Cube / Cylinder   |
| Glass        | Cube / Cylinder   |
| Frame        | Cube              |
| Roof / Top   | Cube / Cylinder   |
| Handle       | Curve / Mesh      |
| Support bars | Cube / Cylinder   |

Ví dụ:

```text
Lantern

          Handle
             ↓
           Curve

            Top
             ↓
        Cube/Cylinder

           Body
             ↓
        Cube/Cylinder

           Base
             ↓
        Cube/Cylinder
```

Điều này giúp biến một vật thể tưởng như phức tạp thành nhiều bài toán modeling đơn giản.

---

# 7. Blockout

**Blockout** là giai đoạn dựng hình tổng thể bằng các primitive.

Mục tiêu chưa phải:

* topology hoàn hảo;
* bevel đẹp;
* material;
* texture;
* chi tiết nhỏ.

Mục tiêu là:

> Kiểm tra hình dáng và tỷ lệ tổng thể.

Ví dụ:

```text
Stage 1

   ███████
   ███████
   ███████
   ███████
```

sau đó mới phát triển thành:

```text
Stage 2

     ┌─────┐
   ┌─┴─────┴─┐
   │         │
   │         │
   └─────────┘
```

và cuối cùng:

```text
Stage 3

      ╭───╮
     /     \
   ┌─────────┐
   │┌───────┐│
   ││ Glass ││
   │└───────┘│
   └─────────┘
```

---

# 8. Primary, Secondary và Tertiary Forms

Một workflow modeling tốt thường được chia thành ba cấp độ.

## Primary Forms

Hình dạng lớn nhất:

```text
Lantern
├── Body
├── Base
└── Top
```

## Secondary Forms

Chi tiết cấu trúc:

```text
├── Frame
├── Supports
├── Handle
└── Glass frame
```

## Tertiary Forms

Chi tiết nhỏ:

```text
├── Bolts
├── Small bevels
├── Decorative details
└── Surface imperfections
```

Nguyên tắc:

```text
Primary
   ↓
Secondary
   ↓
Tertiary
```

Không nên làm ngược lại.

---

# 9. Object Mode và Edit Mode

Trong quá trình dựng Lantern, cần phân biệt rõ hai cấp độ chỉnh sửa.

## Object Mode

Dùng để chỉnh toàn Object:

```text
Object
├── Location
├── Rotation
└── Scale
```

Ví dụ:

```text
G → Move
R → Rotate
S → Scale
```

---

## Edit Mode

Dùng để chỉnh geometry bên trong Object:

```text
Mesh
├── Vertex
├── Edge
└── Face
```

Chuyển chế độ:

```text
Tab
```

---

# 10. Vertex, Edge và Face trong Hard Surface

Một mesh được cấu thành bởi:

```text
Vertex
  ↓
Edge
  ↓
Face
```

Ví dụ:

```text
A────────B
│        │
│ Face   │
│        │
D────────C
```

* `A B C D` = Vertices
* các đường nối = Edges
* khu vực bên trong = Face

Hard Surface Modeling về bản chất là việc kiểm soát các thành phần này để tạo hình.

---

# 11. Extrude

Một trong những công cụ quan trọng nhất:

```text
E
```

Extrude tạo geometry mới từ geometry đang chọn.

Ví dụ:

```text
Face ban đầu

┌─────────┐
│         │
└─────────┘
```

Extrude:

```text
      ┌─────────┐
     /         /│
    /         / │
   └─────────┘  │
   │         │  │
   │         │ /
   └─────────┘
```

Trong Lantern, Extrude có thể được dùng để tạo:

* chân đèn;
* cạnh;
* thành ngoài;
* frame;
* support;
* phần nhô ra.

---

# 12. Inset

Một công cụ rất hữu ích trong Hard Surface Modeling:

```text
I
```

Inset tạo một face nhỏ hơn bên trong face hiện tại.

Ví dụ:

```text
Ban đầu

┌─────────────┐
│             │
│             │
└─────────────┘
```

Inset:

```text
┌─────────────┐
│ ┌─────────┐ │
│ │         │ │
│ └─────────┘ │
└─────────────┘
```

Có thể tiếp tục Extrude phần trong:

```text
Inset
  ↓
Extrude inward
  ↓
Tạo panel / recess
```

Đây là workflow phổ biến cho các vật thể cơ khí.

---

# 13. Loop Cut

Shortcut:

```text
Ctrl + R
```

Loop Cut thêm Edge Loop mới.

Ví dụ:

```text
Trước

┌──────────────┐
│              │
│              │
└──────────────┘
```

Sau:

```text
┌──────────────┐
│              │
├──────────────┤
│              │
└──────────────┘
```

Loop Cut dùng để:

* thêm geometry;
* kiểm soát form;
* tạo vùng mới để Extrude;
* chuẩn bị cho chi tiết;
* hỗ trợ topology.

---

# 14. Scale và tỷ lệ

Trong hard surface modeling, tỷ lệ quan trọng hơn chi tiết ở giai đoạn đầu.

Shortcut:

```text
S
```

Theo trục:

```text
S → X
S → Y
S → Z
```

Ví dụ:

```text
S → Z
```

thay đổi chiều cao mà không ảnh hưởng chiều ngang.

---

# 15. Transform theo trục

Các transform cơ bản:

| Thao tác | Shortcut |
| -------- | -------- |
| Move     | `G`      |
| Rotate   | `R`      |
| Scale    | `S`      |

Khóa trục:

```text
G → X
G → Y
G → Z

R → X
R → Y
R → Z

S → X
S → Y
S → Z
```

Ví dụ:

```text
G → Z
```

di chuyển bộ phận Lantern lên hoặc xuống.

---

# 16. Duplicate

Các bộ phận lặp lại không cần model lại từ đầu.

Shortcut:

```text
Shift + D
```

Ví dụ frame có bốn thanh:

```text
     │       │
     │       │
     │       │
     │       │
```

Có thể:

```text
Model 1 thanh
     ↓
Duplicate
     ↓
Đặt sang các vị trí khác
```

Thay vì dựng từng thanh riêng biệt.

---

# 17. Tư duy tái sử dụng geometry

Hard Surface thường có nhiều chi tiết lặp lại.

Workflow hiệu quả:

```text
Model Once
    ↓
Duplicate
    ↓
Rotate / Move
    ↓
Reuse
```

Ví dụ:

```text
Support_01
   ↓
Shift + D
   ↓
Support_02
   ↓
Shift + D
   ↓
Support_03
```

Điều này giúp:

* tiết kiệm thời gian;
* giữ kích thước đồng nhất;
* giảm sai lệch.

---

# 18. Symmetry

Nhiều hard-surface object có tính đối xứng.

Một Lantern thường có:

```text
Left = Right
Front ≈ Back
```

Do đó có thể xây dựng:

```text
1/2 Model
   ↓
Mirror
   ↓
Full Model
```

hoặc duplicate các bộ phận đối xứng.

> Modifier cụ thể có thể được giới thiệu sâu hơn ở các bài tiếp theo; ở giai đoạn này, điều quan trọng là nhận biết khi nào hình dạng có tính lặp hoặc đối xứng.

---

# 19. Giữ topology đơn giản

Một lỗi phổ biến của người mới:

```text
Thêm rất nhiều Loop Cut
        ↓
Mesh quá dày
        ↓
Khó sửa
```

Thay vào đó:

```text
Geometry tối thiểu
       ↓
Đủ để tạo silhouette
       ↓
Thêm geometry khi cần
```

Nguyên tắc:

> Không thêm polygon nếu polygon đó chưa có nhiệm vụ rõ ràng.

---

# 20. Quad Topology

Trong nhiều tình huống, nên giữ Face dạng Quad:

```text
┌────┬────┬────┐
│    │    │    │
├────┼────┼────┤
│    │    │    │
└────┴────┴────┘
```

Quad có lợi cho:

* Loop Cut;
* subdivision;
* deformation;
* editing;
* topology flow.

---

# 21. N-gon

Một N-gon là Face có hơn bốn cạnh.

Ví dụ:

```text
      A────B
     /      \
    F        C
     \      /
      E────D
```

Không phải N-gon luôn xấu.

Trong hard surface tĩnh, N-gon đôi khi có thể chấp nhận nếu:

* bề mặt phẳng;
* không deform;
* shading không lỗi.

Tuy nhiên với người mới, topology đơn giản và dễ đọc vẫn là lựa chọn an toàn hơn.

---

# 22. Kiểm soát Silhouette

**Silhouette** là đường viền tổng thể của object.

Có thể kiểm tra bằng cách nhìn object như một khối đen:

```text
      ████
     ██████
     ██████
     ██████
      ████
```

Nếu silhouette chưa giống reference thì:

> Không nên mất thời gian thêm chi tiết.

Thứ tự:

```text
Silhouette
   ↓
Proportion
   ↓
Secondary Shapes
   ↓
Detail
```

---

# 23. Modeling từ lớn đến nhỏ

Một workflow hiệu quả:

```text
100% hình dạng
│
├── 70% Primary forms
├── 20% Secondary forms
└── 10% Details
```

Không nên dành phần lớn thời gian cho một chi tiết nhỏ trong khi toàn bộ asset vẫn sai tỷ lệ.

---

# 24. Hard Surface không có nghĩa là mọi cạnh phải sắc tuyệt đối

Trong thế giới thật, gần như không có cạnh nào hoàn toàn sắc.

Ví dụ:

```text
Cạnh hoàn toàn sắc

┌────────
│
│
```

Trong thực tế thường có một bán kính nhỏ:

```text
╭────────
│
│
```

Đây là lý do **Bevel** trở thành một kỹ thuật cực kỳ quan trọng trong hard surface modeling.

---

# 25. Bevel

Shortcut thường dùng:

```text
Ctrl + B
```

Bevel làm mềm cạnh.

Ví dụ:

```text
Trước

┌─────────
│
│
```

Sau Bevel:

```text
╭─────────
│
│
```

Bevel giúp:

* bắt highlight;
* làm object tự nhiên hơn;
* giảm cảm giác CG quá sắc;
* cải thiện shading.

---

# 26. Bevel Segments

Bevel có thể có nhiều Segment.

### 1 Segment

```text
  /
 /
```

### Nhiều Segment

```text
  )
 )
```

Nhiều segment:

* tròn hơn;
* nhưng nhiều polygon hơn.

Do đó cần cân bằng giữa:

```text
Visual Quality
      ↕
Polygon Count
```

---

# 27. Hard Edge và Soft Edge

Không phải tất cả cạnh đều cần giống nhau.

Một asset có thể gồm:

```text
Hard edges
+
Beveled edges
+
Curved surfaces
```

Ví dụ Lantern:

* cạnh frame: tương đối cứng;
* mép kim loại: bevel nhỏ;
* handle: cong;
* glass: phẳng hoặc cong nhẹ.

Sự kết hợp này tạo cảm giác vật thể thực hơn.

---

# 28. Shading trong Hard Surface

Topology và shading liên quan rất chặt.

Một mesh có topology không hợp lý có thể xuất hiện:

```text
Flat Surface
     ↓
Shading artifact
     ↓
Vệt tối / gợn bất thường
```

Khi modeling nên thường xuyên kiểm tra ở:

```text
Solid View
```

và xoay object dưới ánh sáng viewport.

---

# 29. Smooth Shading và Flat Shading

Hai chế độ quan trọng:

## Flat Shading

Mỗi Face hiển thị rõ hướng riêng.

Phù hợp:

* low-poly;
* kiểm tra topology.

## Smooth Shading

Normal giữa các Face được nội suy.

Phù hợp:

* curved surface;
* polished hard surface.

Hard Surface thường sử dụng kết hợp:

```text
Geometry
+
Bevel
+
Correct Normals
+
Smooth Shading
```

---

# 30. Kiểm tra Normal

Face Normal xác định hướng của bề mặt.

Có thể kiểm tra bằng:

```text
Viewport Overlays
→ Face Orientation
```

Thông thường:

* xanh: mặt hướng ra ngoài;
* đỏ: mặt bị đảo.

Sửa bằng:

```text
Alt + N
```

hoặc:

```text
Shift + N
```

để Recalculate Outside trong Edit Mode.

---

# 31. Object Origin

Mỗi Object có một Origin:

```text
        Mesh
┌─────────────────┐
│                 │
│        ●        │
│      Origin     │
└─────────────────┘
```

Origin ảnh hưởng đến:

* rotation;
* scale;
* modifier;
* parenting;
* animation.

Khi dựng một asset nhiều bộ phận, cần theo dõi origin của từng object.

---

# 32. Apply Transform

Trước khi sử dụng một số modifier hoặc bevel, nên kiểm tra Scale.

Ví dụ Object Scale:

```text
X = 2
Y = 1
Z = 0.5
```

có thể khiến modifier hoạt động không đồng đều.

Apply bằng:

```text
Ctrl + A
→ Scale
```

Sau đó:

```text
X = 1
Y = 1
Z = 1
```

nhưng kích thước object trong scene vẫn không thay đổi.

---

# 33. Vì sao Apply Scale quan trọng?

Ví dụ Bevel Width:

```text
0.05 m
```

nếu Object Scale không đồng đều:

```text
X = 5
Y = 1
Z = 0.2
```

Bevel có thể trông khác nhau trên các hướng.

Workflow tốt:

```text
Model / Scale
      ↓
Ctrl + A
      ↓
Apply Scale
      ↓
Bevel / Modifier
```

---

# 34. Tổ chức Object

Một Lantern có thể được tổ chức:

```text
Lantern
│
├── Lantern_Base
├── Lantern_Frame
├── Lantern_Glass
├── Lantern_Top
└── Lantern_Handle
```

Tên rõ ràng giúp:

* dễ tìm trong Outliner;
* dễ material;
* dễ edit;
* dễ export;
* dễ animation.

---

# 35. Khi nào nên Join Object?

Không phải mọi bộ phận đều cần Join ngay.

Có thể giữ riêng:

```text
Frame
Glass
Handle
Base
```

nếu chúng:

* cần material khác;
* cần chỉnh sửa riêng;
* có chức năng khác nhau.

Join khi:

```text
Ctrl + J
```

nếu các phần thực sự nên trở thành một object.

---

# 36. Modeling destructive và non-destructive

Có hai tư duy modeling lớn.

## Destructive

Thay đổi trực tiếp mesh:

```text
Extrude
Inset
Delete
Loop Cut
```

Geometry bị thay đổi ngay lập tức.

---

## Non-destructive

Sử dụng các công cụ/modifier có thể chỉnh lại sau:

```text
Base Mesh
   ↓
Modifier
   ↓
Final Result
```

Ví dụ:

* Mirror;
* Bevel;
* Array;
* Solidify;
* Subdivision Surface.

Ở giai đoạn học cơ bản, nên hiểu cả hai phương pháp.

---

# 37. Một workflow Hard Surface phổ biến

```text
Reference
   ↓
Blockout
   ↓
Check Proportion
   ↓
Primary Forms
   ↓
Secondary Forms
   ↓
Apply Scale
   ↓
Support Geometry
   ↓
Bevel
   ↓
Normals / Shading
   ↓
Details
   ↓
UV / Material
```

---

# 38. Workflow dành cho Lantern

Một cách hợp lý để tiếp cận asset:

```text
Lantern
   │
   ├── 1. Base
   │
   ├── 2. Main Body
   │
   ├── 3. Glass Section
   │
   ├── 4. Vertical Frame
   │
   ├── 5. Top Section
   │
   ├── 6. Handle
   │
   └── 7. Small Details
```

Không cần model tất cả cùng lúc.

---

# 39. Sơ đồ tư duy Modeling Lantern

```text
                         LANTERN
                            │
            ┌───────────────┴───────────────┐
            │                               │
       PRIMARY FORM                    SECONDARY FORM
            │                               │
       ┌────┼────┐                ┌─────────┼─────────┐
       │    │    │                │         │         │
      Base Body  Top             Frame     Glass    Handle
       │    │    │                │
       └────┴────┘                │
            │                     │
          Blockout              Duplicate
            │                     │
       Proportion             Position
            │                     │
            └──────────┬──────────┘
                       ↓
                    DETAIL
                       │
             Bevel / Small Forms
                       │
                   Topology
                       │
                    Shading
                       ↓
                 FINAL LANTERN
```

---

# 40. Những công cụ nên ghi nhớ

| Công cụ            | Shortcut / thao tác | Công dụng           |
| ------------------ | ------------------- | ------------------- |
| Object/Edit Mode   | `Tab`               | Chuyển chế độ       |
| Move               | `G`                 | Di chuyển           |
| Rotate             | `R`                 | Xoay                |
| Scale              | `S`                 | Thay đổi kích thước |
| Extrude            | `E`                 | Tạo geometry mới    |
| Inset              | `I`                 | Tạo Face bên trong  |
| Loop Cut           | `Ctrl + R`          | Thêm Edge Loop      |
| Bevel              | `Ctrl + B`          | Bo cạnh             |
| Duplicate          | `Shift + D`         | Nhân bản            |
| Delete             | `X`                 | Xóa geometry        |
| Select All         | `A`                 | Chọn tất cả         |
| Recalculate Normal | `Shift + N`         | Sửa hướng Normal    |
| Normal Menu        | `Alt + N`           | Các lệnh Normal     |
| Apply Transform    | `Ctrl + A`          | Apply transform     |
| Join               | `Ctrl + J`          | Gộp Object          |

---

# 41. Những lỗi người mới thường gặp

## Lỗi 1 — Bắt đầu bằng chi tiết

Sai:

```text
Model screw
→ Model bolt
→ Model decoration
→ Body vẫn sai
```

Đúng:

```text
Blockout
→ Proportion
→ Primary Forms
→ Details
```

---

## Lỗi 2 — Quá nhiều polygon

Người mới thường thêm quá nhiều Loop Cut.

Hậu quả:

* mesh khó chỉnh;
* topology rối;
* khó thay đổi form.

Giải pháp:

> Chỉ thêm geometry khi thật sự cần.

---

## Lỗi 3 — Scale object nhưng không Apply

Kiểm tra:

```text
N Panel
→ Item
→ Scale
```

Nếu không phải:

```text
1, 1, 1
```

hãy cân nhắc:

```text
Ctrl + A
→ Scale
```

trước khi dùng Modifier.

---

## Lỗi 4 — Cạnh quá sắc

CG object thường trông giả nếu mọi cạnh hoàn toàn sắc.

Giải pháp:

```text
Bevel
+
Smooth Shading
```

---

## Lỗi 5 — Bevel quá lớn

Bevel quá lớn có thể:

* phá silhouette;
* khiến các chi tiết chạm nhau;
* biến hard surface thành hình quá mềm.

Nên dùng bevel nhỏ tương ứng với kích thước thực tế.

---

## Lỗi 6 — Không kiểm tra Normal

Normal bị đảo có thể gây:

* shading sai;
* material sai;
* lỗi khi export.

Thường xuyên kiểm tra:

```text
Face Orientation
```

---

## Lỗi 7 — Model toàn bộ asset thành một mesh ngay từ đầu

Điều này khiến asset khó chỉnh.

Nên chia:

```text
Base
Frame
Glass
Top
Handle
```

rồi chỉ Join khi thật sự cần.

---

# 42. Nguyên tắc 80/20 trong modeling

Khoảng 80% cảm giác của asset đến từ:

* silhouette;
* proportion;
* primary forms.

Chỉ một phần nhỏ đến từ chi tiết cực nhỏ.

Có thể hình dung:

```text
Visual Quality

████████████████  Silhouette + Proportion
████              Secondary Details
██                Micro Details
```

Vì vậy hãy ưu tiên phần lớn thời gian cho form tổng thể.

---

# 43. Checklist kiểm tra Lantern

### Form

* [ ] Silhouette nhìn hợp lý.
* [ ] Tỷ lệ giữa Base, Body và Top hợp lý.
* [ ] Handle không quá lớn hoặc quá nhỏ.
* [ ] Frame có độ dày thống nhất.

### Geometry

* [ ] Không có geometry thừa rõ ràng.
* [ ] Edge Loop có mục đích.
* [ ] Không có Face chồng lên nhau.
* [ ] Không có Vertex vô tình bị duplicate.

### Transform

* [ ] Scale hợp lý.
* [ ] Rotation hợp lý.
* [ ] Origin nằm ở vị trí phù hợp.
* [ ] Apply Scale nếu cần.

### Topology

* [ ] Topology đủ đơn giản.
* [ ] Các vùng cần Loop Cut vẫn hoạt động.
* [ ] Không có topology rối không cần thiết.

### Shading

* [ ] Normal hướng đúng.
* [ ] Không có shading artifact rõ rệt.
* [ ] Bevel phù hợp với kích thước asset.

---

# 44. Thực hành đề xuất

## Bài tập 1 — Blockout Lantern

Chỉ sử dụng:

```text
Cube
Cylinder
```

để tạo:

```text
Base
Body
Top
Handle placeholder
```

Không thêm chi tiết.

Mục tiêu:

> Nhìn từ xa vẫn nhận ra đây là một chiếc Lantern.

---

## Bài tập 2 — Frame

Tạo một thanh frame.

Sau đó:

```text
Shift + D
```

để tạo bốn thanh.

Mục tiêu:

* chiều dày giống nhau;
* vị trí đối xứng;
* không dựng từng thanh từ đầu.

---

## Bài tập 3 — Bevel

Tạo hai phiên bản:

```text
Version A
No Bevel

Version B
Small Bevel
```

so sánh phản xạ ánh sáng trên cạnh.

---

## Bài tập 4 — Topology

Tạo cùng một chi tiết bằng:

### Mesh A

```text
20 Loop Cuts
```

### Mesh B

```text
4–6 Loop Cuts
```

So sánh khả năng chỉnh sửa.

---

# 45. Thử thách mở rộng

Tự tạo một phiên bản Lantern khác với reference.

Ví dụ:

```text
Fantasy Lantern
Steampunk Lantern
Medieval Lantern
Japanese Lantern
Modern Camping Lantern
```

Yêu cầu:

* giữ workflow giống bài;
* thay đổi ít nhất 3 yếu tố:

  * tỷ lệ;
  * frame;
  * top;
  * handle;
  * silhouette.

Mục tiêu không phải chỉ sao chép mà là:

> Hiểu workflow đủ tốt để tạo thiết kế của riêng mình.

---

# 46. Bài tập Portfolio nhỏ

Có thể biến bài học thành một mini asset portfolio.

Deliverables:

```text
Lantern.blend
Lantern_Render.png
Lantern_Wireframe.png
Lantern_Clay.png
```

Có thể render ba góc:

```text
Front
3/4 View
Back
```

Và một ảnh:

```text
Wireframe Overlay
```

để thể hiện topology.

---

# 47. Pipeline từ Modeling đến Game Asset

Bài học này nằm ở giai đoạn đầu của pipeline:

```text
Reference
   ↓
Modeling
   ↓
Topology
   ↓
UV
   ↓
Material
   ↓
Texture
   ↓
Lighting
   ↓
Render
```

Nếu dùng trong game:

```text
Model
 ↓
UV
 ↓
Texture
 ↓
Optimization
 ↓
Export
 ↓
Game Engine
```

Hard Surface Modeling là nền tảng cho toàn bộ chuỗi phía sau.

---

# 48. Kiến thức liên kết với bài trước

Bài **007 — Texture Mapping & Basic Modeling Tools** đã giới thiệu:

```text
UV Mapping
Procedural Mapping
Loop Cut
Subdivide
Topology
Duplicate
Snap
Join
```

Bài 008 đưa các kiến thức modeling đó vào một asset phức tạp hơn:

```text
Basic Tools
     ↓
Hard Surface Workflow
     ↓
Lantern Asset
```

Có thể coi đây là bước chuyển:

```text
Học công cụ
     ↓
Áp dụng công cụ
```

---

# 49. Các thuật ngữ quan trọng

| English               | Nghĩa                             |
| --------------------- | --------------------------------- |
| Hard Surface Modeling | Modeling vật thể bề mặt cứng      |
| Lantern               | Đèn lồng / đèn xách               |
| Blockout              | Dựng hình tổng thể ban đầu        |
| Primitive             | Hình học cơ bản                   |
| Primary Form          | Hình dạng chính                   |
| Secondary Form        | Hình dạng phụ                     |
| Tertiary Detail       | Chi tiết cấp nhỏ                  |
| Silhouette            | Đường viền tổng thể               |
| Proportion            | Tỷ lệ                             |
| Extrude               | Đùn geometry                      |
| Inset                 | Tạo Face lồng bên trong           |
| Loop Cut              | Tạo vòng cắt                      |
| Bevel                 | Bo cạnh                           |
| Topology              | Cấu trúc mesh                     |
| Quad                  | Face bốn cạnh                     |
| N-gon                 | Face có hơn bốn cạnh              |
| Normal                | Vector hướng của bề mặt           |
| Object Origin         | Gốc của Object                    |
| Apply Transform       | Áp dụng Transform                 |
| Shading               | Cách bề mặt phản ứng với ánh sáng |

---

# 50. Sơ đồ tổng hợp bài học

```text
                    HARD SURFACE MODELING
                             │
                          Reference
                             │
                       Analyze Shape
                             │
                 ┌───────────┴───────────┐
                 │                       │
             Primary Forms          Repeated Parts
                 │                       │
        Base / Body / Top             Frame
                 │                       │
              Blockout                Duplicate
                 │                       │
          Check Proportion            Position
                 │                       │
                 └───────────┬───────────┘
                             ↓
                       Secondary Forms
                             │
                     Extrude / Inset
                             │
                       Loop Cuts
                             │
                         Bevel
                             │
                      Check Topology
                             │
                       Check Normals
                             │
                       Apply Scale
                             │
                         Shading
                             ↓
                     FINISHED LANTERN
```

---

# 51. Checklist bài học

* [ ] Hiểu khái niệm Hard Surface Modeling.
* [ ] Biết phân tích asset thành primitive.
* [ ] Hiểu Blockout là gì.
* [ ] Biết ưu tiên silhouette trước detail.
* [ ] Phân biệt Primary, Secondary và Tertiary Forms.
* [ ] Sử dụng được `G`, `R`, `S`.
* [ ] Sử dụng được Extrude.
* [ ] Hiểu mục đích của Inset.
* [ ] Sử dụng được Loop Cut.
* [ ] Biết Duplicate geometry/object.
* [ ] Hiểu vai trò của Bevel.
* [ ] Hiểu Topology trong Hard Surface.
* [ ] Biết kiểm tra Normal.
* [ ] Hiểu Object Origin.
* [ ] Biết Apply Scale.
* [ ] Biết tổ chức asset thành nhiều Object.
* [ ] Đã dựng thử một Lantern.
* [ ] Đã kiểm tra Wireframe.
* [ ] Đã lưu file `.blend`.
* [ ] Đã tạo ít nhất một biến thể Lantern của riêng mình.

---

# 52. Tóm tắt

Bài **Hard Surface Modeling: Lantern** là bước thực hành quan trọng giúp chuyển từ việc học từng công cụ riêng lẻ sang **quy trình dựng một asset hoàn chỉnh**.

Tư duy cốt lõi:

```text
Không model "một chiếc Lantern"

Mà hãy model:

Base
+
Body
+
Frame
+
Top
+
Handle
```

Sau đó ghép các phần thành một asset hoàn chỉnh.

Workflow nên nhớ:

```text
Reference
   ↓
Analyze
   ↓
Blockout
   ↓
Primary Forms
   ↓
Proportion
   ↓
Secondary Forms
   ↓
Extrude / Inset / Loop Cut
   ↓
Bevel
   ↓
Topology
   ↓
Normals
   ↓
Final Asset
```

Nguyên tắc quan trọng nhất:

> **Hình dạng lớn và tỷ lệ luôn quan trọng hơn chi tiết nhỏ.**

Nếu silhouette và proportion chưa đúng, thêm nhiều chi tiết sẽ không làm model tốt hơn.

---

## Ghi chú về nguồn

> Nội dung trên được mở rộng từ metadata curriculum mà người dùng cung cấp cho bài **Hard Surface Modeling: Lantern**. Do chưa có transcript hoặc nội dung video đầy đủ của bài 008, các phần mô tả công cụ và workflow được trình bày theo kiến thức Hard Surface Modeling chuẩn trong Blender và nên được đối chiếu lại với video nếu cần ghi chép chính xác từng thao tác của giảng viên.
