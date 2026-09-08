# 015 — High-Poly Modeling

| Thuộc tính              | Nội dung                                                                 |
| ----------------------- | ------------------------------------------------------------------------ |
| **Phần**                | 02 — Modeling in Blender                                                 |
| **Thời lượng**          | 9:17                                                                     |
| **Chủ đề**              | High-poly modeling, Subdivision Surface và support loop                  |
| **Bài thực hành chính** | Dựng một chiếc cốc high-poly                                             |
| **Kỹ thuật trọng tâm**  | Subdivision Surface, Inset, Loop Cut, Merge, Curve, Proportional Editing |

---

## 1. Mục tiêu bài học

Sau bài này, bạn có thể:

* [ ] Hiểu nguyên lý của **Subdivision Surface**.
* [ ] Phân biệt **Subdivision Surface — Catmull-Clark** và **Simple**.
* [ ] Điều khiển độ sắc/mềm của cạnh bằng **support loop**.
* [ ] Hiểu ảnh hưởng của khoảng cách edge loop đến hình dáng sau subdivision.
* [ ] Dựng một chiếc cốc high-poly từ Cylinder.
* [ ] Tạo tay cầm bằng **Curve**, sau đó chuyển thành Mesh.
* [ ] Ghép tay cầm vào thân cốc.
* [ ] Hoàn thiện vật thể bằng **Shade Smooth**.
* [ ] Biết cách giữ mesh gốc đơn giản để chỉnh sửa trong khi Blender hiển thị phiên bản high-poly.

---

# 2. High-Poly / Subdivision Modeling là gì?

Trong Blender, một trong những phương pháp phổ biến để tạo mô hình high-poly là sử dụng:

> **Subdivision Surface Modifier**

Modifier này:

1. Chia nhỏ các polygon.
2. Tăng mật độ mesh.
3. Làm bề mặt trở nên mượt hơn.
4. Vẫn cho phép chúng ta chỉnh sửa một **control mesh tương đối đơn giản**.

### Sơ đồ nguyên lý

```text
Control Mesh đơn giản
        │
        ▼
Subdivision Surface
        │
        ├── Chia nhỏ polygon
        ├── Nội suy hình dạng
        └── Làm mượt bề mặt
        │
        ▼
High-Poly Surface
```

Ví dụ với Cube:

```text
Cube
6 mặt
   │
   │ Subdivision
   ▼
Khối bo tròn
   │
   │ thêm support loops
   ▼
Khối gần giống Cube
nhưng có cạnh bo mềm
```

Điểm quan trọng là:

> Bạn không nhất thiết phải trực tiếp chỉnh hàng nghìn polygon của high-poly mesh.
> Thay vào đó, bạn chỉnh **control cage**, còn modifier tạo bề mặt chi tiết hơn.

---

# 3. Subdivision Surface Modifier

Tạo một Cube:

```text
Shift + A
→ Mesh
→ Cube
```

Sau đó thêm:

```text
Modifier Properties
→ Add Modifier
→ Subdivision Surface
```

Hoặc dùng phím tắt:

| Phím       | Kết quả             |
| ---------- | ------------------- |
| `Ctrl + 1` | Subdivision Level 1 |
| `Ctrl + 2` | Subdivision Level 2 |
| `Ctrl + 3` | Subdivision Level 3 |

> Các phím tắt này thường được dùng trong **Object Mode**.

---

## 4. Viewport Level và Render Level

Subdivision Surface có hai thông số rất quan trọng:

### Levels Viewport

Quy định subdivision được hiển thị trong viewport.

Ví dụ:

```text
Viewport = 2
```

Giúp Blender hoạt động nhẹ hơn khi modeling.

### Render

Quy định subdivision khi render.

Ví dụ:

```text
Viewport = 2
Render   = 4
```

Workflow:

```text
Modeling
Viewport Level 2
       │
       ▼
Nhẹ hơn khi thao tác

Render
Level 4
       │
       ▼
Mesh chi tiết hơn
```

Đây là cách rất phổ biến khi xử lý model nặng.

---

## 5. Polygon tăng như thế nào?

Với mesh quad, mỗi lần subdivision, một mặt quad thường được chia thành **4 mặt nhỏ hơn**.

Ví dụ gần đúng:

```text
Level 0
1 quad

        ↓

Level 1
4 quads

        ↓

Level 2
16 quads

        ↓

Level 3
64 quads
```

Do đó subdivision level càng cao thì lượng geometry càng tăng rất nhanh.

### Lưu ý

Không nên đặt:

```text
Viewport = 5 hoặc 6
```

một cách tùy tiện.

Với model phức tạp, điều này có thể khiến viewport rất chậm.

---

# 6. Catmull-Clark và Simple

Subdivision Surface có hai chế độ quan trọng.

## Catmull-Clark

Đây là chế độ thông thường.

Nó:

* tăng polygon;
* nội suy vertex;
* làm tròn hình dạng.

Ví dụ:

```text
Cube
 ↓
Catmull-Clark
 ↓
Khối gần giống hình cầu
```

---

## Simple

Simple chỉ:

* chia nhỏ polygon;
* tăng mật độ mesh;

nhưng **không làm mượt hình dạng theo cách Catmull-Clark làm**.

```text
Cube
 ↓
Simple
 ↓
Cube có nhiều polygon hơn
```

### So sánh

| Catmull-Clark                       | Simple                            |
| ----------------------------------- | --------------------------------- |
| Tăng polygon                        | Tăng polygon                      |
| Làm mượt hình dạng                  | Không làm mượt hình dạng          |
| Dùng nhiều cho subdivision modeling | Dùng khi chỉ cần tăng mật độ mesh |

---

# 7. Nguyên lý quan trọng nhất: Support Loop

Một Cube khi áp dụng Subdivision sẽ bị bo tròn mạnh.

```text
Cube
  │
  │ Ctrl + 2
  ▼
Rounded Cube
```

Nếu muốn giữ cạnh gần với hình dạng Cube ban đầu, chúng ta thêm các **support loops**.

Phím:

```text
Ctrl + R
```

---

## Support loop hoạt động như thế nào?

### Loop gần cạnh

```text
Edge
││
│└─ Support Loop rất gần
│
```

Kết quả:

> Cạnh sắc hơn.

### Loop xa cạnh

```text
Edge
│
│      Support Loop
│───────────
```

Kết quả:

> Cạnh tròn và mềm hơn.

---

## Quy tắc cần nhớ

```text
Support Loop gần Edge
        ↓
Cạnh sắc
        ↓
Highlight hẹp
```

```text
Support Loop xa Edge
        ↓
Cạnh mềm
        ↓
Highlight rộng
```

Đây là nguyên lý cực kỳ quan trọng trong **Subdivision Modeling**.

---

# 8. Ví dụ với Cube

Tạo Cube:

```text
Shift + A
→ Cube
```

Áp dụng:

```text
Ctrl + 2
```

Cube lập tức bị bo thành gần hình cầu.

Vào Edit Mode:

```text
Tab
```

Thêm:

```text
Ctrl + R
```

ở gần các cạnh.

Ví dụ:

```text
┌────────────┐
│ ┌────────┐ │
│ │        │ │
│ │        │ │
│ └────────┘ │
└────────────┘
↑            ↑
Support Loops
```

Khi support loops được đưa gần các cạnh:

```text
Rounded Cube
      ↓
Support Loops
      ↓
Hard-Surface Cube
```

Cạnh vẫn có một chút bo tròn nhưng silhouette được giữ tốt hơn.

---

# 9. Thực hành chính — Dựng một chiếc cốc High-Poly

Chúng ta sẽ áp dụng nguyên lý subdivision để dựng:

```text
       _________
      /         \
     /           \
    │             │───╮
    │             │   │
    │             │   │
    │             │───╯
    │             │
    └─────────────┘
```

Workflow tổng quát:

```text
Cylinder
   │
   ▼
Tạo lòng cốc
   │
   ▼
Tạo support loops
   │
   ▼
Subdivision Surface
   │
   ▼
Tạo Handle bằng Curve
   │
   ▼
Convert to Mesh
   │
   ▼
Ghép vào thân cốc
   │
   ▼
Subdivision
   │
   ▼
Shade Smooth
```

---

# 10. Bước 1 — Tạo thân cốc

Thêm Cylinder:

```text
Shift + A
→ Mesh
→ Cylinder
```

Trong bảng Add Cylinder đặt khoảng:

```text
Vertices ≈ 20
```

20 cạnh là đủ cho bài tập vì Subdivision sẽ làm bề mặt mượt hơn.

---

# 11. Bước 2 — Tạo miệng cốc

Chọn mặt trên.

Nhấn:

```text
I
```

để **Inset**.

Tạo một vòng nhỏ bên trong.

```text
Top View

┌───────────────┐
│   ┌───────┐   │
│   │       │   │
│   │       │   │
│   └───────┘   │
└───────────────┘
```

Phần giữa sẽ trở thành lòng cốc.

---

# 12. Bước 3 — Tạo độ sâu

Đưa phần bên trong xuống dưới.

Có thể chuyển sang Wireframe:

```text
Z
→ Wireframe
```

hoặc:

```text
Shift + Z
```

tùy phiên bản/keymap.

Đẩy geometry xuống gần đáy.

Cần giữ lại một khoảng để tạo **độ dày đáy cốc**.

---

# 13. Xử lý mặt đáy

Nếu phần đáy chỉ là một N-gon lớn, topology không thuận lợi cho Subdivision và Loop Cut.

Một cách xử lý là tạo topology dạng radial.

Ý tưởng:

```text
       ●
     / | \
    /  |  \
   /   |   \
  ●────●────●
```

Các vertex xung quanh hội tụ về một vertex trung tâm.

Một workflow có thể là:

```text
Inset
→ chọn các vertex bên trong
→ M
→ At Center
```

Nhờ vậy, phần đáy có topology dễ kiểm soát hơn cho bài tập.

---

# 14. Bước 4 — Thêm Subdivision

Thử:

```text
Ctrl + 1
```

hoặc:

```text
Ctrl + 2
```

Lúc này cốc có thể bị biến dạng khá mạnh.

Đây là điều bình thường.

Nguyên nhân:

> Chưa có đủ support loops để giữ hình dạng.

---

# 15. Bước 5 — Giữ hình dạng miệng cốc

Vào:

```text
Tab
```

Thêm:

```text
Ctrl + R
```

ở gần miệng cốc.

Ví dụ:

```text
       Support Loop
           ↓
     ┌───────────┐
     │───────────│
     │           │
     │           │
```

Loop càng gần mép:

> Miệng cốc càng sắc.

Loop càng xa:

> Miệng cốc càng bo mềm.

---

# 16. Bước 6 — Giữ hình dạng đáy

Đáy cốc cũng cần support loops.

Ví dụ:

```text
│             │
│             │
│─────────────│ ← Support Loop
└─────────────┘
```

Có thể thêm:

* một loop sát đáy;
* một loop phía trên nó.

Khoảng cách giữa các loop quyết định bán kính bo.

---

# 17. Công thức hình học quan trọng

Có thể hình dung:

```text
Khoảng cách support loop
            ↓
Độ rộng vùng bo
            ↓
Hình dạng highlight
```

### Cạnh rất sắc

```text
││
││
└┘
```

Các loop rất gần nhau.

### Cạnh mềm

```text
│   │
│   │
╰───╯
```

Các loop cách xa nhau hơn.

---

# 18. Tạo tay cầm — Vì sao không Extrude trực tiếp?

Ta có thể Extrude từ thân cốc, nhưng cách này thường khó tạo:

* độ cong đẹp;
* tiết diện đều;
* hình dáng tay cầm dễ chỉnh.

Do đó bài học sử dụng:

> **Curve làm tay cầm trước, sau đó mới Convert thành Mesh.**

---

# 19. Bước 7 — Tạo Curve cho tay cầm

Thêm:

```text
Shift + A
→ Curve
→ Circle
```

hoặc tạo một đường Curve thích hợp.

Xoay:

```text
R
X
90
```

để curve nằm đúng hướng bên cạnh cốc.

---

# 20. Xóa bớt điểm để tạo hình chữ C

Trong Edit Mode, xóa một số control points.

Mục tiêu:

```text
╭────────╮
│
│
╰────────╯
```

thay vì một vòng tròn kín.

Đây sẽ là cấu trúc cơ bản của tay cầm.

---

# 21. Bước 8 — Proportional Editing

Chọn một hoặc vài control points.

Bật:

```text
O
```

Sau đó dùng:

```text
G
```

và con lăn chuột để thay đổi vùng ảnh hưởng.

Tạo shape gần giống:

```text
      ╭───────╮
──────╯       │
              │
──────╮       │
      ╰───────╯
```

Proportional Editing giúp tay cầm có đường cong tự nhiên hơn.

---

# 22. Bước 9 — Tạo độ dày cho Curve

Trong:

```text
Curve Properties
→ Geometry
→ Bevel
```

tăng:

```text
Depth
```

Curve bắt đầu có thể tích.

---

## Resolution

Không cần quá nhiều geometry.

Có thể giảm:

```text
Resolution
```

để tiết diện đơn giản hơn trước khi Convert sang Mesh.

Trong workflow của bài, mục tiêu là tạo tiết diện khoảng **4 cạnh** để dễ ghép với thân cốc.

---

# 23. Tilt của Curve

Nếu tiết diện bị xoay thành dạng kim cương:

```text
   ◇
```

trong khi ta cần:

```text
   □
```

hãy chọn tất cả control points:

```text
A
```

và dùng:

```text
Ctrl + T
```

Đây là lệnh **Tilt**.

Có thể xoay khoảng:

```text
-45°
```

để tiết diện phù hợp với thân cốc.

---

# 24. Bước 10 — Convert Curve thành Mesh

Khi shape tay cầm đã ổn:

```text
Object
→ Convert
→ Mesh
```

Bây giờ tay cầm trở thành geometry bình thường.

Ta có thể:

* chọn vertex;
* chọn edge;
* chọn face;
* Merge;
* Fill;
* Subdivide.

---

# 25. Bước 11 — Căn tay cầm với thân cốc

Chuyển sang góc nhìn thích hợp.

Ví dụ:

```text
Numpad 1
Numpad 3
Numpad 7
```

Điều chỉnh:

```text
G
R
S
```

để các cạnh tay cầm thẳng hàng với geometry của cốc.

Đây là bước quan trọng.

Nếu topology hai bên không khớp, việc nối mesh sẽ khó hơn.

---

# 26. Bước 12 — Join hai object

Chọn:

```text
Cup
+
Handle
```

Sau đó:

```text
Ctrl + J
```

Hai object trở thành cùng một Mesh Object.

> `Ctrl + J` chỉ gộp chúng thành một object. Nó chưa tự động nối topology giữa hai phần.

---

# 27. Bước 13 — Xóa mặt tại vùng kết nối

Tại nơi tay cầm chạm vào cốc:

```text
X
→ Faces
```

xóa các mặt không cần thiết.

Tạo các boundary edge để chuẩn bị nối.

Ví dụ:

```text
Cup                   Handle

┌───────┐             ┌───
│       │             │
│    ╳  │─────────────│
│       │             │
└───────┘             └───
     ↑
xóa mặt tại đây
```

---

# 28. Bước 14 — Nối geometry

Nếu topology đơn giản và tương ứng, có thể chọn các vertex/edge phù hợp rồi:

```text
F
```

để Fill.

Với các loop hoàn chỉnh, trong nhiều trường hợp có thể dùng:

```text
Bridge Edge Loops
```

để kết nối nhanh hơn.

### Điều quan trọng

Phải bảo đảm:

* số lượng vertex phù hợp;
* thứ tự vertex đúng;
* không tạo mặt xoắn;
* không có geometry chồng nhau.

---

# 29. Bước 15 — Subdivision tay cầm

Sau khi ghép:

```text
Ctrl + 1
```

hoặc:

```text
Ctrl + 2
```

Tay cầm sẽ được làm mượt.

Nếu nó quá mỏng:

```text
S
```

để Scale.

Nếu muốn điều chỉnh theo một trục:

```text
S X
S Y
S Z
```

---

# 30. Điều chỉnh hình dạng tay cầm

Có thể dùng Edge Loop selection:

```text
Alt + Click
```

Thêm loop khác vào selection:

```text
Shift + Alt + Click
```

Sau đó scale từng khu vực.

Ví dụ:

```text
Gần thân cốc
   rộng hơn

      ╭━━━━╮
━━━━━━╯    │
           │
━━━━━━╮    │
      ╰━━━━╯
```

Hoặc tạo thiết kế:

```text
đầu rộng
   ↓
╭━━━━━╮
╯     ╰━━╮
          │
╮     ╭━━╯
╰━━━━━╯
   ↑
giữa hẹp
```

Điều này giúp tay cầm bớt cảm giác như một ống đồng đều.

---

# 31. Shade Smooth

Bước cuối:

```text
Right Click
→ Shade Smooth
```

Kết quả:

* shading mượt;
* các polygon không còn hiện rõ;
* model có cảm giác high-poly hơn.

---

# 32. Quy trình hoàn chỉnh

```text
Cylinder ~20 vertices
        │
        ▼
Inset miệng cốc
        │
        ▼
Extrude/lower lòng cốc
        │
        ▼
Xử lý topology đáy
        │
        ▼
Subdivision Surface
        │
        ▼
Support loops miệng + đáy
        │
        ▼
Tạo Curve cho handle
        │
        ▼
Proportional Editing
        │
        ▼
Curve Bevel Depth
        │
        ▼
Ctrl + T chỉnh Tilt
        │
        ▼
Convert to Mesh
        │
        ▼
Ctrl + J
        │
        ▼
Xóa mặt giao nhau
        │
        ▼
Fill / Bridge
        │
        ▼
Subdivision Surface
        │
        ▼
Điều chỉnh support loops
        │
        ▼
Shade Smooth
        │
        ▼
HIGH-POLY MUG
```

---

# 33. Phím tắt sử dụng trong bài

| Phím                  | Chức năng                    |
| --------------------- | ---------------------------- |
| `Shift + A`           | Add Object                   |
| `Tab`                 | Object/Edit Mode             |
| `I`                   | Inset                        |
| `E`                   | Extrude                      |
| `Ctrl + R`            | Loop Cut                     |
| `Ctrl + B`            | Bevel                        |
| `M`                   | Merge                        |
| `F`                   | Fill                         |
| `G`                   | Move                         |
| `R`                   | Rotate                       |
| `S`                   | Scale                        |
| `O`                   | Proportional Editing         |
| `Ctrl + T`            | Tilt Curve                   |
| `Ctrl + J`            | Join Objects                 |
| `Ctrl + 1`            | Subdivision Level 1          |
| `Ctrl + 2`            | Subdivision Level 2          |
| `Alt + Click`         | Chọn Edge Loop               |
| `Shift + Alt + Click` | Thêm Edge Loop vào selection |
| `A`                   | Select All                   |
| `X`                   | Delete                       |

---

# 34. Support Loop vs Bevel

Hai kỹ thuật có liên quan nhưng không hoàn toàn giống nhau.

### Support Loop

```text
Base Edge
    +
Extra Loop
    ↓
Subdivision kiểm soát cạnh
```

### Bevel

```text
Base Edge
    ↓
Ctrl + B
    ↓
Tạo trực tiếp vùng bo
```

Trong subdivision modeling, support loops đặc biệt hữu ích vì chúng kiểm soát cách **Subdivision Surface nội suy bề mặt**.

---

# 35. Topology và Highlight

Đối với hard-surface high-poly, topology không chỉ ảnh hưởng silhouette mà còn ảnh hưởng ánh sáng.

```text
Topology
   ↓
Curvature
   ↓
Surface Normal
   ↓
Highlight
   ↓
Cảm giác vật liệu / chất lượng model
```

Model tốt thường có highlight chạy liên tục và sạch.

### Kiểm tra bằng Studio Light

Xoay model dưới Studio Light.

Quan sát highlight.

Nếu highlight:

```text
────────────
mượt, liên tục
```

→ topology thường khá ổn.

Nếu highlight:

```text
────╱╲──╱──
```

→ có thể tồn tại:

* pinching;
* topology không đều;
* pole đặt sai vị trí;
* support loop quá gần;
* N-gon gây nội suy khó kiểm soát.

---

# 36. Những lỗi thường gặp

## Lỗi 1 — Subdivision làm model thành hình cầu

### Nguyên nhân

Không có support loops.

### Sửa

```text
Ctrl + R
```

thêm loop gần các cạnh cần giữ.

---

## Lỗi 2 — Cạnh quá sắc

### Nguyên nhân

Support loops quá sát nhau.

```text
││
││
```

### Sửa

Di chuyển loop ra xa hơn.

```text
│   │
```

---

## Lỗi 3 — Cạnh quá mềm

### Nguyên nhân

Support loop quá xa cạnh chính.

### Sửa

Đưa support loop gần cạnh hơn.

---

## Lỗi 4 — Subdivision quá nặng

### Nguyên nhân

Viewport Level quá cao.

### Sửa

Ví dụ:

```text
Viewport = 1–2
Render   = 2–4
```

tùy độ phức tạp của model.

---

## Lỗi 5 — Tay cầm méo sau Subdivision

Kiểm tra:

* topology;
* số vertex;
* mặt xoắn;
* support loops;
* vertex chưa Merge;
* geometry giao nhau.

---

## Lỗi 6 — Pinching

Pinching thường xuất hiện quanh:

* pole;
* triangle;
* N-gon;
* nhiều edge tập trung tại một điểm;
* support loops quá sát.

Cần quan sát trực tiếp highlight để phát hiện.

---

# 37. High-Poly và Low-Poly

Trong production, thường không dùng trực tiếp high-poly model trong game.

Workflow phổ biến:

```text
High-Poly
  │
  │ chứa chi tiết
  │
  ▼
Bake
Normal Map
  │
  ▼
Low-Poly
  │
  ▼
Game / Realtime
```

Do đó nên giữ riêng:

```text
Cup_HP
Cup_LP
```

### High-poly

Ưu tiên:

* hình dáng;
* bevel;
* độ cong;
* surface detail;
* shading đẹp.

### Low-poly

Ưu tiên:

* polygon hợp lý;
* silhouette;
* UV;
* deformation;
* hiệu năng.

---

# 38. Bài thực hành

## Bài 1 — Recreate

Dựng lại chiếc cốc trong bài.

Yêu cầu:

* Cylinder khoảng 20 vertices.
* Có lòng cốc thật.
* Có độ dày thành cốc.
* Có support loops.
* Tay cầm được tạo bằng Curve.
* Convert Curve → Mesh.
* Ghép handle vào thân cốc.
* Subdivision Level 2.
* Shade Smooth.

---

## Bài 2 — Biến thể thiết kế

Sau khi hoàn thành, không sao chép hoàn toàn mẫu.

Thử thay đổi:

* miệng cốc rộng hơn;
* thân cao hơn;
* đáy nhỏ hơn;
* handle vuông hơn;
* handle dày hơn;
* cạnh mềm hơn;
* cạnh sắc hơn.

Ví dụ:

```text
Mug A           Mug B           Mug C

 ______          ______         ________
|      |        /      \       |        |
|      |──╮    |        |╮     |        |━━╮
|      |  │    |        ||     |        |  │
|______|──╯     \______/ ╯     |________|━━╯
```

---

# 39. Bài thử nghiệm support loop

Tạo ba Cube.

## Cube A — Không support loop

```text
Subdivision
→ rất tròn
```

## Cube B — Support loop xa cạnh

```text
Subdivision
→ cạnh bo mềm
```

## Cube C — Support loop sát cạnh

```text
Subdivision
→ cạnh sắc
```

Đặt chúng cạnh nhau để trực tiếp quan sát sự khác biệt.

---

# 40. Checklist cuối bài

### Subdivision

* [ ] Hiểu Subdivision Surface dùng để làm gì.
* [ ] Phân biệt được Viewport và Render Level.
* [ ] Phân biệt Catmull-Clark và Simple.
* [ ] Không đặt subdivision level quá cao một cách không cần thiết.

### Modeling

* [ ] Tạo được lòng cốc bằng Inset.
* [ ] Tạo được support loops bằng `Ctrl + R`.
* [ ] Biết support loop gần cạnh tạo cạnh sắc hơn.
* [ ] Biết support loop xa cạnh tạo cạnh mềm hơn.
* [ ] Bevel/subdivision không làm biến dạng silhouette ngoài ý muốn.

### Handle

* [ ] Tạo được handle từ Curve.
* [ ] Dùng Proportional Editing để chỉnh hình.
* [ ] Dùng Curve Depth để tạo độ dày.
* [ ] Biết dùng `Ctrl + T` để chỉnh Tilt.
* [ ] Convert Curve thành Mesh.
* [ ] Ghép được handle vào thân cốc.

### Topology

* [ ] Topology hỗ trợ highlight sạch.
* [ ] Không có geometry chồng nhau.
* [ ] Không có mặt xoắn rõ rệt.
* [ ] Kiểm tra pinching sau Subdivision.
* [ ] Kiểm tra model bằng Studio Light.

### Production

* [ ] Biết sự khác nhau giữa high-poly và low-poly.
* [ ] Biết giữ high-poly riêng với low-poly bake mesh.

---

# 41. Ghi nhớ nhanh

> **Subdivision Surface không tự tạo một hard-surface model đẹp.**

Subdivision chỉ làm nhiệm vụ chia nhỏ và nội suy mesh.

Để kiểm soát hình dạng, cần phối hợp:

```text
Base Topology
      +
Support Loops
      +
Subdivision Surface
      +
Shade Smooth
      ↓
Clean High-Poly Model
```

Quy tắc quan trọng nhất của bài:

> **Support loop càng gần cạnh → cạnh càng sắc.**
> **Support loop càng xa cạnh → cạnh càng mềm.**

Một khi hiểu nguyên lý này, bạn có thể áp dụng subdivision workflow cho rất nhiều đối tượng khác:

* cốc;
* chai;
* đồ gia dụng;
* máy móc;
* props;
* xe;
* robot;
* hard-surface asset;
* product visualization.
