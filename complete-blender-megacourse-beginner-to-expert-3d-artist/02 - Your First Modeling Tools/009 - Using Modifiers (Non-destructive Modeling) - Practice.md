# 009 — Using Modifiers (Non-destructive Modeling)

| Thuộc tính        | Nội dung                                                                                                           |
| ----------------- | ------------------------------------------------------------------------------------------------------------------ |
| **Section**       | Section 02 — Your First Modeling Tools                                                                             |
| **Bài học**       | Using Modifiers (Non-destructive Modeling)                                                                         |
| **Loại nội dung** | Video lecture                                                                                                      |
| **Thời lượng**    | 29:40                                                                                                              |
| **Ngôn ngữ gốc**  | English                                                                                                            |
| **Chủ đề chính**  | Modifier Stack, Subdivision Surface, Bevel, Displace, Array, Vertex Group, Support Loops, Non-destructive Modeling |

---

## 1. Tổng quan bài học

Bài học này giới thiệu một trong những tư duy quan trọng nhất khi modeling trong Blender:

> **Non-destructive Modeling — Modeling không phá hủy hình học gốc.**

Thay vì trực tiếp thêm hàng loạt vertex, edge và face vào mesh, ta có thể sử dụng **Modifiers** để Blender tính toán hình dạng kết quả trong thời gian thực.

Ví dụ:

```text
Base Mesh đơn giản
       ↓
Bevel
       ↓
Subdivision Surface
       ↓
Displace
       ↓
Array
       ↓
Kết quả phức tạp
```

Điểm quan trọng là:

```text
Tắt Modifiers
      ↓
Base Mesh ban đầu vẫn còn nguyên
```

Trong bài, kiến thức được áp dụng lên hai asset đã tạo trước đó:

* **Cobblestone Pathway** — đường lát đá.
* **Lantern** — đèn lồng.

---

# 2. Mục tiêu bài học

Sau bài học này, người học có thể:

* Hiểu khái niệm **non-destructive modeling**.
* Hiểu Modifier là gì và vì sao Modifier hữu ích.
* Hiểu cách hoạt động của **Modifier Stack**.
* Biết rằng **thứ tự Modifier ảnh hưởng trực tiếp đến kết quả**.
* Sử dụng:

  * Subdivision Surface;
  * Bevel;
  * Displace;
  * Array.
* Phân biệt `Simple` và chế độ làm mượt của Subdivision Surface.
* Sử dụng **support loops / constraint loops** để kiểm soát Subdivision.
* Dùng **Vertex Group** để giới hạn vùng tác động của Bevel.
* Hiểu mối quan hệ giữa:

  * topology;
  * Bevel;
  * Subdivision Surface.
* Sử dụng procedural texture làm nguồn cho Displace.
* Tạo variation cho đá mà không sửa trực tiếp base mesh.
* Biết khi nào nên và chưa nên **Apply Modifier**.
* Tạo bản backup trước các thao tác destructive.
* Copy Modifier giữa các object.
* Hiểu cách Parent / Clear Parent khi cần Join object.
* Sử dụng Array để nhân bản geometry theo cách procedural.

---

# 3. Destructive và Non-destructive Modeling

## 3.1. Destructive Modeling

Nếu trực tiếp:

```text
Subdivide
Extrude
Delete
Bevel geometry
Apply Modifier
```

thì mesh thật sẽ bị thay đổi.

Ví dụ:

```text
Cube
 ↓
Subdivide thủ công
 ↓
100 vertices
 ↓
Tiếp tục chỉnh sửa trên 100 vertices
```

Nếu muốn quay lại Cube đơn giản ban đầu thì rất khó, trừ khi:

```text
Ctrl + Z
```

vẫn còn trong Undo History.

---

## 3.2. Non-destructive Modeling

Với Modifier:

```text
Base Mesh
   │
   ├── Bevel
   ├── Subdivision
   ├── Displace
   └── Array
```

Base Mesh vẫn đơn giản.

Có thể:

* bật/tắt Modifier;
* đổi thông số;
* đổi thứ tự;
* xóa Modifier;
* quay lại hình dạng gốc.

Sơ đồ:

```text
                BASE MESH
                    │
                    ▼
                Modifier 1
                    │
                    ▼
                Modifier 2
                    │
                    ▼
                Modifier 3
                    │
                    ▼
              Final Result
```

Nhưng:

```text
Base Mesh ≠ Final Result
```

cho đến khi Modifier được **Apply**.

---

# 4. Bắt đầu lại từ Cobblestone Pathway

Ở bài trước, các viên đá đã được subdivide thủ công.

Trong bài này, giảng viên loại bỏ những edge không cần thiết để đưa mesh trở lại dạng đơn giản.

Sử dụng:

```text
X
→ Limited Dissolve
```

**Limited Dissolve** cố gắng loại bỏ:

* vertex dư thừa;
* edge không cần thiết;

mà vẫn giữ hình dạng tổng thể.

Kết quả:

```text
Trước

┌─┬─┬─┬─┐
├─┼─┼─┼─┤
├─┼─┼─┼─┤
└─┴─┴─┴─┘

       ↓ Limited Dissolve

┌───────┐
│       │
│       │
└───────┘
```

Ta quay trở lại một mesh đơn giản hơn để Modifier xử lý phần subdivision.

---

# 5. Subdivision Surface Modifier

Thêm Modifier:

```text
Add Modifier
→ Subdivision Surface
```

Subdivision Surface bổ sung geometry dựa trên mesh gốc.

Có thể hình dung:

```text
Low-poly Base Mesh
        ↓
Subdivision Surface
        ↓
Dense / Smooth Mesh
```

---

# 6. Simple Subdivision

Trong Subdivision Surface có chế độ:

```text
Simple
```

Simple thêm topology nhưng **không làm bo tròn hình dạng như Catmull-Clark**.

Ví dụ:

```text
Base

┌─────────────┐
│             │
│             │
└─────────────┘

Simple Subdivision

┌──────┬──────┐
│      │      │
├──────┼──────┤
│      │      │
└──────┴──────┘
```

Hình dáng ngoài gần như không đổi nhưng số polygon tăng.

Điều này rất hữu ích trước:

```text
Displace
```

vì Displace cần đủ vertex để tạo biến dạng chi tiết.

---

# 7. Điểm mạnh của Modifier

Nếu tắt Subdivision:

```text
Modifier OFF
```

hoặc quan sát Base Mesh trong Edit Mode, geometry ban đầu vẫn đơn giản.

```text
Viewport Result

┌─┬─┬─┬─┐
├─┼─┼─┼─┤
└─┴─┴─┴─┘

Base Mesh

┌───────┐
│       │
└───────┘
```

Đây chính là bản chất của:

> **Non-destructive workflow.**

---

# 8. Levels Viewport và Render

Subdivision Surface thường cho phép đặt mức subdivision riêng cho:

* Viewport;
* Render.

Ví dụ:

```text
Viewport = 1
Render   = 2
```

Khi modeling:

```text
ít subdivision
→ nhẹ máy
```

Khi render:

```text
nhiều subdivision hơn
→ bề mặt mượt hơn
```

Đây là cách cân bằng:

```text
Performance
    ↕
Visual Quality
```

---

# 9. Optimal Display

Tùy chọn:

```text
Optimal Display
```

giúp giảm lượng đường topology hiển thị trong viewport.

Modifier vẫn tạo subdivision nhưng viewport đỡ rối hơn.

Có thể hiểu:

```text
Subdivision thực tế vẫn tồn tại
        ↓
Optimal Display
        ↓
Ẩn bớt wire subdivision
```

---

# 10. Support Loop / Constraint Loop

Một kỹ thuật rất quan trọng khi sử dụng Subdivision Surface là:

> **Support Loop** hoặc **Constraint Loop**.

Subdivision có xu hướng làm mềm hình dạng.

Ví dụ:

```text
Cube
   ↓
Subdivision
   ↓
Rounded Cube
```

Nếu muốn cạnh sắc hơn, thêm Edge Loop gần cạnh đó:

```text
Cạnh
│
│ ← Support Loop
│
```

Khoảng cách càng nhỏ:

```text
Support Loop gần cạnh
       ↓
Cạnh càng sắc
```

Khoảng cách càng lớn:

```text
Support Loop xa
       ↓
Transition mềm hơn
```

---

# 11. Topology điều khiển Subdivision

Một điểm quan trọng trong bài:

> Không cần thêm hàng loạt Loop Cut thủ công.

Thay vào đó có thể giữ Base Mesh đơn giản và chỉ thêm loop ở những nơi cần kiểm soát hình dạng.

```text
Không tối ưu

|||||||||||||||||
rất nhiều loops
```

so với:

```text
Tối ưu hơn

|      |     |
support loops cần thiết
```

Workflow:

```text
Low-poly Mesh
     ↓
Support Loops cần thiết
     ↓
Subdivision Surface
     ↓
Smooth Result
```

---

# 12. Bevel Modifier

Modifier tiếp theo:

```text
Add Modifier
→ Bevel
```

Bevel bo các cạnh của object.

Trước:

```text
┌────────
│
│
```

Sau:

```text
╭────────
│
│
```

Bevel giúp vật thể:

* bắt ánh sáng tốt hơn;
* bớt cảm giác CG;
* có cạnh giống vật thể thực;
* phù hợp với hard surface modeling.

---

# 13. Amount / Width

Thông số quan trọng:

```text
Amount
```

hoặc Width tùy giao diện Blender.

Nó kiểm soát độ rộng vùng bevel.

Ví dụ:

```text
Amount nhỏ
→ cạnh hơi bo

Amount lớn
→ cạnh tròn mạnh
```

Trong bài, giá trị nhỏ được sử dụng cho cobblestone và lantern để giữ form.

---

# 14. Bevel Segments

Thông số:

```text
Segments
```

kiểm soát số phân đoạn trên cạnh bevel.

### 1 Segment

```text
\_
```

cạnh còn khá đơn giản.

### Nhiều Segments

```text
)
```

chuyển tiếp tròn hơn.

Nhưng:

```text
Segments ↑
    ↓
Polygon Count ↑
```

Vì vậy không nên tăng quá mức cần thiết.

---

# 15. Giới hạn Bevel

Không phải lúc nào cũng muốn bevel mọi Edge.

Bevel Modifier có thể giới hạn vùng tác động bằng nhiều phương pháp, ví dụ:

```text
Angle
Weight
Vertex Group
```

---

# 16. Limit Method — Angle

Với:

```text
Limit Method = Angle
```

Blender chỉ bevel những cạnh có góc phù hợp với ngưỡng thiết lập.

Ví dụ:

```text
Flat surface

──────────────

Không cần bevel
```

trong khi:

```text
90° Edge

───────┐
       │
       │

→ candidate for bevel
```

---

# 17. Vertex Group

Trong Lantern, giảng viên không muốn mọi cạnh đều được bevel.

Giải pháp:

```text
Object Data Properties
→ Vertex Groups
```

tạo:

```text
Bevel
```

---

## Workflow

### Bước 1

Tạo Vertex Group:

```text
Vertex Groups
→ +
→ Name: Bevel
```

### Bước 2

Vào:

```text
Edit Mode
```

### Bước 3

Chọn vertex cần bevel.

### Bước 4

Nhấn:

```text
Assign
```

### Bước 5

Trong Bevel Modifier:

```text
Limit Method
→ Vertex Group
→ Bevel
```

Kết quả:

```text
Mesh
│
├── Vertex thuộc Group → Bevel
│
└── Vertex không thuộc Group → giữ nguyên
```

---

# 18. Vertex Group Weight

Vertex Group có giá trị:

```text
Weight
```

thường nằm trong khoảng:

```text
0.0 → 1.0
```

Có thể hiểu:

```text
0.0 = không ảnh hưởng
1.0 = ảnh hưởng đầy đủ
```

Vertex Group không chỉ được dùng cho Bevel mà còn xuất hiện rất nhiều trong:

* modifiers;
* deformation;
* particle systems;
* rigging;
* weight painting.

---

# 19. Circle Select

Khi cần chọn nhiều vertex, bài sử dụng:

```text
C
```

để kích hoạt:

> **Circle Select**

Thay đổi kích thước vùng chọn bằng con lăn chuột.

Circle Select hữu ích khi:

* chọn vùng lớn;
* thêm/bớt vertex nhanh;
* chỉnh Vertex Group.

Thoát Circle Select bằng:

```text
Right Click
```

hoặc:

```text
Esc
```

---

# 20. Bevel kết hợp với Subdivision

Đây là một trong những phần quan trọng nhất.

Modifier Stack có thể là:

```text
Bevel
   ↓
Subdivision Surface
```

Bevel tạo thêm geometry gần cạnh.

Subdivision Surface sau đó xử lý geometry này.

Do đó Bevel có thể hoạt động giống như một dạng:

> **Support geometry**

cho Subdivision.

---

# 21. Modifier Stack

Blender xử lý Modifier:

```text
Từ trên xuống dưới
```

Ví dụ:

```text
1. Bevel
2. Subdivision
3. Displace
```

có nghĩa:

```text
Base Mesh
   ↓
Bevel
   ↓
Subdivision
   ↓
Displace
   ↓
Final Mesh
```

Nếu đổi thành:

```text
1. Displace
2. Bevel
3. Subdivision
```

kết quả có thể hoàn toàn khác.

---

# 22. Thứ tự Modifier rất quan trọng

Ví dụ:

```text
Subdivision
→ Displace
```

Subdivision tạo nhiều vertex trước.

Sau đó Displace có nhiều vertex để tác động.

Trong khi:

```text
Displace
→ Subdivision
```

Displace chỉ tác động lên mesh thô trước, rồi kết quả mới được subdivide.

Hai workflow không tương đương.

Có thể nhớ bằng công thức:

```text
Modifier Stack ≈ chuỗi phép toán

A → B ≠ B → A
```

---

# 23. Displace Modifier

Đối với cobblestone, giảng viên thêm:

```text
Add Modifier
→ Displace
```

Displace di chuyển vertex dựa trên một giá trị.

Sơ đồ:

```text
Vertex
   ↓
Texture Value
   ↓
Displace Strength
   ↓
Vertex Position mới
```

---

# 24. Displace cần đủ geometry

Nếu mesh chỉ có:

```text
4 vertices
```

thì Displace gần như không có đủ điểm để tạo bề mặt chi tiết.

Do đó workflow thường là:

```text
Base Mesh
   ↓
Subdivision Surface
   ↓
Nhiều vertices
   ↓
Displace
```

---

# 25. Texture dùng cho Displace

Displace Modifier có thể sử dụng Texture làm nguồn.

Trong bài, giảng viên tạo một texture dạng noise.

Ví dụ:

```text
Texture
→ Distorted Noise
```

Texture có giá trị sáng/tối.

Có thể hiểu đơn giản:

```text
Black
 ↓
ít / hướng displacement thấp

Gray
 ↓
trung gian

White
 ↓
displacement mạnh hơn
```

---

# 26. Noise tạo độ ngẫu nhiên

Noise texture giúp phá sự hoàn hảo của các viên đá.

Trước:

```text
┌────────┐
│        │
│        │
└────────┘
```

Sau Displace:

```text
╭──────╮
│      ╲
│       │
╰───────╯
```

Mỗi vertex bị offset một chút khác nhau.

Kết quả phù hợp với:

* stone;
* rock;
* terrain;
* organic irregularities;
* stylized environment.

---

# 27. Strength

Thông số quan trọng nhất của Displace:

```text
Strength
```

Trong transcript, Strength ban đầu:

```text
1.0
```

quá mạnh.

Giảng viên giảm dần:

```text
0.1
→ 0.02
→ khoảng 0.01
```

Mục tiêu:

> Chỉ tạo irregularity nhẹ thay vì phá hủy silhouette.

---

# 28. Midlevel

Thông số:

```text
Midlevel
```

xác định mức texture được coi là vị trí trung tính.

Có thể hình dung:

```text
Texture value < Midlevel
        ↓
dịch vào

Texture value = Midlevel
        ↓
không đổi

Texture value > Midlevel
        ↓
dịch ra
```

---

# 29. Direction — Normal

Trong bài, Displace sử dụng hướng:

```text
Normal
```

Tức là vertex di chuyển theo Surface Normal.

```text
           ↑ Normal
           │
────────── ● ─────────
         Vertex
```

Nếu displacement dương:

```text
vertex → hướng Normal
```

---

# 30. Procedural Stone Stack

Cobblestone được xây dựng theo stack kiểu:

```text
Base Stone
    ↓
Bevel
    ↓
Subdivision Surface
    ↓
Displace
    ↓
Stylized Stone
```

Tắt toàn bộ modifier:

```text
Stylized Stone
      ↓ OFF
Simple Square
```

Đây là ví dụ rõ ràng nhất của non-destructive modeling.

---

# 31. Vì sao nên tạo Backup?

Dù Modifier là non-destructive, workflow có lúc bắt buộc phải:

```text
Apply
Join
Separate
Merge
```

Các thao tác đó có thể phá khả năng quay lại.

Do đó giảng viên tạo backup:

```text
Shift + D
```

và đưa bản sao vào Collection riêng.

Ví dụ:

```text
Cobblestone
├── Working
└── Backup
```

hoặc:

```text
Lantern
├── Current
└── Lantern_Backup
```

---

# 32. Quy tắc Backup đơn giản

Trước các thao tác:

```text
Apply Modifier
Join Objects
Delete geometry lớn
Boolean phức tạp
Retopology lớn
```

nên:

```text
Shift + D
        ↓
Move to Backup Collection
        ↓
Hide Collection
```

---

# 33. Áp dụng Modifier lên Lantern

Sau Cobblestone, bài quay lại asset **Lantern**.

Mục tiêu:

* dùng Bevel có chọn lọc;
* cải thiện shading;
* dùng Subdivision cho những phần cần bo mềm;
* giữ các vùng hard surface có độ sắc phù hợp.

---

# 34. Không bevel toàn bộ Lantern

Khi thêm Bevel Modifier mặc định:

```text
Bevel
→ toàn bộ các cạnh phù hợp
```

nhưng Lantern có những vùng không nên bevel giống nhau.

Do đó sử dụng:

```text
Vertex Group
```

để kiểm soát chính xác.

Workflow:

```text
Lantern
   ↓
Identify Sharp Edges
   ↓
Vertex Group
   ↓
Bevel Modifier
   ↓
Selective Bevel
```

---

# 35. Cạnh sắc là ứng viên cho Bevel

Trong thế giới thực, cạnh hiếm khi sắc vô hạn.

Ví dụ:

```text
CG edge

┌────────
│
```

so với cạnh vật thể thực:

```text
╭────────
│
```

Vì vậy bài học sử dụng Bevel tại những cạnh cần bắt highlight.

---

# 36. Bevel cải thiện Lighting

Không bevel:

```text
Light
  ↓
────────┐
        │

highlight rất nhỏ
```

Bevel:

```text
Light
  ↓
──────╮
      │

highlight chạy trên vùng cong
```

Điều này làm vật thể:

* dễ đọc hình;
* có volume tốt hơn;
* trông bớt nhân tạo.

---

# 37. Shade Smooth / Auto Smooth

Sau Bevel, bài kiểm tra shading bằng các chế độ làm mượt.

Ý tưởng:

```text
Geometry
   +
Bevel
   +
Smooth Shading
   ↓
Gradient đẹp hơn
```

Nếu chỉ dùng mặt phẳng cứng:

```text
Flat transition
```

ánh sáng có thể thay đổi đột ngột.

Bevel tạo vùng chuyển tiếp để lighting mượt hơn.

---

# 38. Không phải đâu cũng cần Subdivision

Một quyết định quan trọng trong bài:

> Sau khi thêm Bevel, nhiều phần của Lantern đã đủ mượt nên không cần Subdivision Surface.

Đây là tư duy tối ưu.

Không nên:

```text
mọi object
→ Subdivision
```

mà nên hỏi:

```text
Bevel đã đủ chưa?
Geometry có cần thực sự mượt hơn không?
Subdivision có thay đổi silhouette cần thiết không?
```

---

# 39. Subdivision cho phần Top

Phần trên của Lantern cần bề mặt mềm hơn.

Do đó giảng viên tách phần này và dùng:

```text
Subdivision Surface
```

Kết quả:

```text
Angular Top
     ↓
Subdivision
     ↓
Rounded Stylized Top
```

---

# 40. Separate Object

Để tách geometry đang chọn thành object mới:

```text
P
```

sau đó chọn kiểu Separate phù hợp.

Ví dụ:

```text
Lantern
├── Body
└── Top
```

Việc tách giúp:

* Modifier Stack khác nhau;
* dễ kiểm soát;
* không buộc toàn bộ asset dùng chung thiết lập.

---

# 41. Support Loops giữ hình dạng

Subdivision làm mềm Top quá nhiều.

Giải pháp:

```text
Ctrl + R
```

thêm Support Loop.

Ví dụ:

```text
Không Support Loop

      ╭──────╮
    ╭─╯      ╰─╮
```

Có Support Loop:

```text
       ┌─────╮
     ╭─╯     │
```

Tức là form giữ định nghĩa tốt hơn.

---

# 42. Apply Modifier là gì?

Khi Modifier còn tồn tại trong Stack:

```text
Base Mesh
+
Modifier
```

Edit Mode vẫn chủ yếu làm việc trên Base Mesh.

Khi:

```text
Apply
```

Blender biến kết quả Modifier thành geometry thật.

Trước:

```text
Base Mesh = 8 vertices
Modifier = Subdivision
```

Sau Apply:

```text
Mesh thật = hàng chục / hàng trăm vertices
Modifier biến mất
```

---

# 43. Apply làm mất tính Non-destructive

Đây là điểm quan trọng nhất của bài.

```text
Subdivision Modifier
      ↓
Apply
      ↓
Subdivision geometry trở thành mesh thật
```

Khi đó không còn slider:

```text
Levels = 1 / 2 / 3
```

để dễ dàng quay về mesh cũ.

Do đó:

> **Chỉ Apply Modifier khi có lý do cụ thể.**

---

# 44. Khi nào cần Apply?

Một số tình huống có thể cần Apply:

* cần Join với geometry khác theo một cách cụ thể;
* cần edit geometry do Modifier tạo;
* cần export pipeline yêu cầu;
* Modifier tiếp theo cần geometry thật;
* chuẩn bị final mesh.

Nhưng trước Apply nên:

```text
Backup
```

---

# 45. Copy Modifiers

Khi hai object cần cùng Modifier Stack:

1. Chọn object đích.
2. Chọn object nguồn cuối cùng để nó trở thành **Active Object**.
3. Nhấn:

```text
Ctrl + L
```

4. Chọn:

```text
Copy Modifiers
```

Có thể hình dung:

```text
Object A
Bevel
Subdivision

       ↓ Copy Modifiers

Object B
Bevel
Subdivision
```

Điều này tiết kiệm thời gian và giữ thông số đồng nhất.

---

# 46. Join Objects

Để Join nhiều Mesh Object:

```text
Ctrl + J
```

Object cuối cùng được chọn thường là:

> **Active Object**

và đóng vai trò object chính sau Join.

Trước:

```text
Lantern_Top
Lantern_Body
```

Sau:

```text
Lantern
```

Tuy nhiên không phải lúc nào Join cũng cần thiết.

Nếu các phần:

* cần Modifier khác nhau;
* có material khác;
* cần chỉnh riêng;

thì giữ chúng tách biệt có thể tốt hơn.

---

# 47. Parent và Child

Lantern có thể có hierarchy:

```text
Lantern
│
├── Glass
├── Top
├── Body
└── Frame
```

Để tạo Parent:

```text
Ctrl + P
```

Parent giúp object con đi theo object cha.

```text
Parent Move
    ↓
Children Move
```

---

# 48. Clear Parent

Nếu muốn bỏ quan hệ Parent:

```text
Alt + P
```

Có thể chọn:

```text
Clear Parent
Keep Transformation
```

`Keep Transformation` rất hữu ích vì object vẫn giữ nguyên vị trí hiện tại trong scene.

Workflow trong bài:

```text
Child Object
    ↓
Alt + P
    ↓
Clear Parent
+ Keep Transform
    ↓
Join / chỉnh sửa
```

---

# 49. Bevel cho Glass

Giảng viên cũng thêm một Bevel nhỏ lên phần Glass.

Mục đích:

```text
Perfectly Sharp Glass
        ↓
Small Bevel
        ↓
Better Highlights
```

Ngay cả kính cũng thường có cạnh rất nhỏ thay vì góc toán học hoàn toàn sắc.

---

# 50. Solidify

Phần Glass sử dụng:

```text
Solidify
```

Modifier này tạo độ dày cho surface.

Ví dụ:

```text
Plane

────────────
```

sau Solidify:

```text
────────────
│          │
────────────
```

Đây là Modifier hữu ích cho:

* glass;
* cloth;
* panels;
* walls;
* thin shells.

Trong bài, Solidify được Apply trước khi Join ở một số giai đoạn vì giảng viên đã có bản backup.

---

# 51. Array Modifier

Modifier cuối được giới thiệu:

```text
Add Modifier
→ Array
```

Array tạo nhiều bản sao procedural của một object.

```text
Original

■

Array Count = 5

■ ■ ■ ■ ■
```

Nhưng về mặt base mesh:

```text
chỉ có 1 object gốc
```

---

# 52. Vì sao Array mạnh?

Nếu Duplicate thủ công:

```text
Shift + D × 20
```

sẽ tạo nhiều object/geometry riêng biệt.

Array:

```text
1 Base Object
+
Array Modifier
=
20 copies
```

Nếu chỉnh Base Object:

```text
mọi phần tử Array thay đổi theo
```

Đây là non-destructive repetition.

---

# 53. Array Count

Thông số:

```text
Count
```

kiểm soát số lượng bản sao.

Ví dụ:

```text
Count = 2

■ ■
```

```text
Count = 5

■ ■ ■ ■ ■
```

---

# 54. Array Offset

Array có thể điều khiển khoảng cách giữa các phần tử bằng Offset.

Ý tưởng:

```text
Relative Offset

■   ■   ■   ■
```

Khoảng cách có thể điều chỉnh theo:

```text
X
Y
Z
```

tùy mục đích.

---

# 55. Array + Displace

Một bài học quan trọng khác về Modifier Order.

Ví dụ:

```text
Displace
   ↓
Array
```

Base stone được Displace trước.

Sau đó Array sao chép kết quả.

Kết quả:

```text
Stone A = same deformation
Stone B = same deformation
Stone C = same deformation
```

---

Nếu đổi thành:

```text
Array
   ↓
Displace
```

Blender tạo cả dãy trước rồi mới tính Displace.

Do đó texture/displacement có thể tác động khác nhau trên toàn bộ tập hợp.

Đây là ví dụ rất rõ cho:

> **Modifier order changes the result.**

---

# 56. Modifier Stack như một chương trình

Có thể nghĩ Modifier Stack giống pipeline xử lý:

```text
Input Mesh

    ↓ Function 1

Bevel

    ↓ Function 2

Subdivision

    ↓ Function 3

Array

    ↓ Function 4

Displace

    ↓

Output Mesh
```

Do đó:

```text
Bevel → Subdivision
```

không đồng nghĩa với:

```text
Subdivision → Bevel
```

Tư duy này rất quan trọng khi workflow ngày càng phức tạp.

---

# 57. Randomization trong Array

Transcript cũng đề cập khả năng tạo một số offset/random variation khi bố trí các phần tử.

Ý tưởng:

```text
Perfect Array

■ ■ ■ ■ ■
```

so với:

```text
Variation

■  ■   ■ ■    ■
```

Trong môi trường stylized, việc phá sự đều đặn giúp scene trông tự nhiên hơn.

Đặc biệt hữu ích với:

* stones;
* fences;
* vegetation;
* props;
* repeated architecture.

---

# 58. Performance khi dùng Modifier

Subdivision Surface có thể tạo rất nhiều geometry.

Ví dụ:

```text
Base
100 vertices

Subdivision Level 1
~4× faces

Level 2
~16× faces

Level 3
~64× faces
```

Với nhiều object, viewport có thể chậm.

Giải pháp:

```text
Disable modifier in viewport
```

hoặc giảm:

```text
Viewport Levels
```

trong lúc modeling.

Sau đó:

```text
Render Levels ↑
```

khi render.

---

# 59. Wireframe để kiểm tra Modifier

Khi sử dụng Subdivision, có thể bật:

```text
Viewport Overlays
→ Wireframe
```

để xem cấu trúc mesh.

Giảng viên thường dùng kết hợp:

```text
Solid
+
Wireframe
```

để vừa thấy surface vừa hiểu topology.

---

# 60. Frame Selected

Khi cần tập trung viewport vào object đang chọn, Blender có lệnh:

```text
Frame Selected
```

thường dùng:

```text
Numpad .
```

Điều này rất hữu ích khi asset gồm nhiều object.

---

# 61. Front và Back View

Góc nhìn chuẩn:

```text
Numpad 1
```

→ Front View.

Góc đối diện:

```text
Ctrl + Numpad 1
```

→ Back View.

Orthographic view rất hữu ích khi căn:

* support loops;
* symmetry;
* proportions;
* vị trí geometry.

---

# 62. Eyeballing trong Modeling

Trong bài, giảng viên đôi khi điều chỉnh các loop bằng mắt:

```text
0.75
0.70
0.65
...
```

Mục tiêu không phải luôn tạo geometry chính xác tuyệt đối.

Với stylized modeling:

> **Visual result có thể quan trọng hơn con số toán học hoàn hảo.**

Quan trọng là hai bên:

* tương đối cân bằng;
* silhouette đẹp;
* lighting hợp lý.

---

# 63. Subdivision thay đổi phong cách

Một điểm thú vị trong Lantern:

Khi bật Subdivision:

```text
hard angular shape
      ↓
soft rounded form
```

Lantern chuyển sang phong cách:

* cute;
* stylized;
* mềm hơn;
* ít mechanical hơn.

Điều này cho thấy Modifier không chỉ là công cụ kỹ thuật mà còn ảnh hưởng trực tiếp đến:

> **Art direction.**

---

# 64. Bevel vs Subdivision

Hai Modifier đều có thể làm object trông mềm hơn nhưng mục đích khác nhau.

| Bevel                        | Subdivision Surface                 |
| ---------------------------- | ----------------------------------- |
| Bo cạnh                      | Làm mượt toàn surface               |
| Giữ form chính tốt           | Có thể thay đổi silhouette          |
| Kiểm soát cạnh               | Tăng mật độ mesh                    |
| Thường dùng hard surface     | Dùng cho cả hard surface và organic |
| Có thể chỉ tác động vài cạnh | Thường xử lý toàn mesh              |

---

# 65. Khi chỉ cần Bevel

Ví dụ:

```text
Lantern Frame
```

nếu form chính đã đúng và chỉ cần:

```text
edge highlights
```

thì:

```text
Bevel
```

có thể đủ.

Không nhất thiết thêm:

```text
Subdivision Surface
```

---

# 66. Khi cần Subdivision

Nếu object cần:

```text
smooth continuous curvature
```

như phần Top:

```text
Subdivision Surface
```

hợp lý hơn.

Sơ đồ quyết định:

```text
Cần chỉ bo cạnh?
      │
     Yes
      ↓
    Bevel

Cần làm mềm cả form?
      │
     Yes
      ↓
Subdivision Surface
```

---

# 67. Bevel làm Support cho Subdivision

Kết hợp:

```text
Bevel
   ↓
Subdivision
```

có thể tạo cạnh có definition tốt hơn.

Nếu không có constraint:

```text
────────┐
        │
     Subdivision
        ↓
      ╭────
```

Có Bevel/support:

```text
──────╮
      │
      ↓
Subdivision giữ cạnh rõ hơn
```

---

# 68. Workflow Cobblestone hoàn chỉnh

```text
Simple Stone Mesh
        ↓
Limited Dissolve
        ↓
Subdivision Surface
     (Simple)
        ↓
Bevel
        ↓
Subdivision / Smooth
        ↓
Noise Texture
        ↓
Displace
        ↓
Array
        ↓
Stylized Cobblestone Path
```

Tùy Modifier Stack cụ thể, thứ tự được điều chỉnh để đạt kết quả mong muốn.

---

# 69. Workflow Lantern hoàn chỉnh

```text
Lantern Base Mesh
        ↓
Identify Sharp Edges
        ↓
Create Bevel Vertex Group
        ↓
Bevel Modifier
        ↓
Add Support Loops
        ↓
Shade Smooth / Auto Smooth
        ↓
Separate Top
        ↓
Subdivision Surface
        ↓
Constraint Loops
        ↓
Small Bevel on Glass
        ↓
Solidify Glass
        ↓
Backup
        ↓
Join / Apply khi cần
        ↓
Stylized Lantern
```

---

# 70. Sơ đồ Modifier Stack

```text
                       BASE MESH
                           │
                           ▼
                       BEVEL
                    bo các cạnh
                           │
                           ▼
                 SUBDIVISION SURFACE
                   thêm / làm mượt
                           │
                           ▼
                       ARRAY
                    nhân bản mesh
                           │
                           ▼
                      DISPLACE
                   tạo biến dạng
                           │
                           ▼
                    FINAL RESULT
```

Thay đổi thứ tự:

```text
Array ↔ Displace
```

có thể làm kết quả thay đổi rõ rệt.

---

# 71. Sơ đồ Non-destructive Modeling

```text
                      Base Geometry
                           │
             ┌─────────────┴─────────────┐
             │                           │
        Edit Base Mesh              Modifier Stack
             │                           │
      Ít vertices                 Bevel
             │                      ↓
      Dễ chỉnh sửa               Subdivision
                                    ↓
                                 Displace
                                    ↓
                                  Array
                                    ↓
                               Final Mesh
                                    │
                     ┌──────────────┴──────────────┐
                     │                             │
               Không Apply                     Apply
                     │                             │
            Non-destructive              Geometry trở thành thật
                     │                             │
            Có thể quay lại              Khó quay lại hơn
```

---

# 72. Các Modifier trong bài

| Modifier                | Vai trò                             |
| ----------------------- | ----------------------------------- |
| **Subdivision Surface** | Tăng subdivision và làm mượt bề mặt |
| **Bevel**               | Bo cạnh                             |
| **Displace**            | Di chuyển vertex bằng texture/value |
| **Array**               | Nhân bản object procedural          |
| **Solidify**            | Tạo độ dày cho surface              |

---

# 73. Các công cụ khác được sử dụng

| Công cụ           | Chức năng                              |
| ----------------- | -------------------------------------- |
| Limited Dissolve  | Xóa topology dư nhưng giữ form         |
| Vertex Group      | Giới hạn vùng ảnh hưởng của Modifier   |
| Loop Cut          | Tạo support/constraint loop            |
| Shade Smooth      | Làm mượt shading                       |
| Wireframe Overlay | Kiểm tra topology                      |
| Parent            | Tạo hierarchy object                   |
| Backup Collection | Giữ bản gốc trước thao tác destructive |

---

# 74. Phím tắt quan trọng

| Phím              | Chức năng                          |
| ----------------- | ---------------------------------- |
| `X`               | Delete menu                        |
| `Ctrl + R`        | Loop Cut                           |
| `C`               | Circle Select                      |
| `Shift + D`       | Duplicate                          |
| `P`               | Separate                           |
| `Ctrl + J`        | Join Objects                       |
| `Ctrl + L`        | Link/Copy data, gồm Copy Modifiers |
| `Ctrl + P`        | Set Parent                         |
| `Alt + P`         | Clear Parent                       |
| `Ctrl + Z`        | Undo                               |
| `Numpad 1`        | Front View                         |
| `Ctrl + Numpad 1` | Back View                          |
| `Numpad .`        | Frame Selected                     |

> **Lưu ý:** transcript tự động có một số đoạn nhận nhầm phím như `Ctrl + G` cho Join. Trong Blender, shortcut chuẩn để **Join Objects** là `Ctrl + J`.

---

# 75. Limited Dissolve vs Subdivision

Hai khái niệm đối lập thú vị:

```text
Limited Dissolve
      ↓
Giảm topology

Subdivision
      ↓
Tăng topology
```

Workflow thông minh:

```text
Giữ Base Mesh tối giản
       ↓
Modifier tạo complexity khi cần
```

thay vì lưu complexity trực tiếp vào mesh từ đầu.

---

# 76. Support Loops và Polygon Count

Không nên thêm support loop khắp nơi.

Ví dụ:

```text
Bad

|||||||||||||||||||||
```

Good:

```text
|       |        |
↑       ↑        ↑
chỉ nơi cần giữ cạnh
```

Bởi vì mỗi loop:

* tăng polygon;
* làm mesh khó chỉnh;
* có thể ảnh hưởng Subdivision ở vùng khác.

---

# 77. Apply càng muộn càng tốt

Một nguyên tắc rất hữu ích:

```text
Add Modifier
   ↓
Adjust
   ↓
Test
   ↓
Iterate
   ↓
Backup
   ↓
Apply only when necessary
```

Không nên:

```text
Add Modifier
   ↓
Apply ngay
```

vì như vậy mất phần lớn lợi ích của workflow non-destructive.

---

# 78. Tư duy Experimentation

Modifier cho phép thử nhiều phiên bản rất nhanh.

Ví dụ Lantern:

```text
Version A
Bevel only

Version B
Subdivision only

Version C
Bevel + Subdivision
```

Sau đó so sánh:

* silhouette;
* shading;
* style;
* performance.

Vì chưa Apply:

```text
không thích → tắt/xóa Modifier
```

thay vì phải sửa lại toàn mesh.

---

# 79. Modifier và Art Direction

Trong bài, Subdivision làm Lantern trở nên "cute" hơn dự kiến.

Điều này minh họa rằng Modifier có thể được dùng để khám phá thiết kế.

```text
Technical Tool
     ↓
Visual Change
     ↓
Unexpected Style
     ↓
Artistic Decision
```

Non-destructive modeling vì thế giúp:

> **thử nghiệm mà không sợ phá model gốc.**

---

# 80. Performance Workflow

Khi scene bắt đầu nặng:

```text
Disable expensive modifiers
```

đặc biệt:

```text
Subdivision Surface
```

Hoặc giảm:

```text
Viewport Levels
```

Trong render:

```text
Render Levels
```

có thể cao hơn.

Workflow:

```text
Modeling
→ Low Viewport Quality

Render
→ Higher Quality
```

---

# 81. Những lỗi thường gặp

## Lỗi 1 — Apply Modifier quá sớm

Hậu quả:

```text
Modifier controls biến mất
+
Topology tăng mạnh
+
Khó quay lại
```

Giải pháp:

```text
Backup trước
+
Apply càng muộn càng tốt
```

---

## Lỗi 2 — Modifier sai thứ tự

Ví dụ:

```text
Array → Displace
```

và:

```text
Displace → Array
```

không cho cùng kết quả.

Giải pháp:

> Thử kéo Modifier lên/xuống Stack và quan sát thay đổi.

---

## Lỗi 3 — Displace quá mạnh

Ví dụ:

```text
Strength = 1
```

trên viên đá nhỏ có thể phá hoàn toàn hình dạng.

Nên bắt đầu thấp:

```text
0.01
0.02
...
```

rồi tăng dần.

---

## Lỗi 4 — Displace trên mesh quá ít vertex

```text
Low-poly Mesh
+
Displace
=
Biến dạng thô
```

Giải pháp:

```text
Subdivision
→ Displace
```

---

## Lỗi 5 — Subdivision làm mất cạnh

Nguyên nhân:

```text
Không có support loops
```

Giải pháp:

```text
Ctrl + R
→ Support Loop
```

hoặc kết hợp Bevel.

---

## Lỗi 6 — Bevel toàn bộ object

Một số vùng không cần bevel.

Giải pháp:

```text
Angle
Vertex Group
Weight
```

để giới hạn.

---

## Lỗi 7 — Tăng Subdivision quá cao

Hậu quả:

* viewport chậm;
* memory tăng;
* file nặng;
* render chậm.

Giải pháp:

```text
Viewport Level thấp
Render Level vừa đủ
```

---

## Lỗi 8 — Không tạo Backup

Nếu phải:

```text
Apply
Join
Delete
```

sau đó phát hiện lỗi thì rất khó quay lại.

Giải pháp:

```text
Shift + D
→ Backup Collection
→ Hide
```

---

# 82. Thực hành 1 — Non-destructive Stone

Tạo một Cube hoặc viên đá đơn giản.

Thêm:

```text
Bevel
Subdivision Surface
Displace
```

Mục tiêu:

```text
Modifiers ON
→ viên đá stylized

Modifiers OFF
→ Cube/Stone đơn giản
```

---

# 83. Thực hành 2 — Modifier Order

Tạo hai phiên bản.

### Version A

```text
Subdivision
↓
Displace
```

### Version B

```text
Displace
↓
Subdivision
```

So sánh:

* silhouette;
* noise;
* độ mượt;
* topology.

---

# 84. Thực hành 3 — Bevel Vertex Group

Tạo Cube.

Chỉ chọn một số cạnh/vertex và gán vào:

```text
Vertex Group: Bevel
```

Sau đó:

```text
Bevel Modifier
→ Limit = Vertex Group
```

Mục tiêu:

> Chỉ những vùng được chỉ định mới bị bevel.

---

# 85. Thực hành 4 — Support Loop

Tạo Cube.

Thêm:

```text
Subdivision Surface
```

Quan sát Cube bị bo tròn.

Sau đó:

```text
Ctrl + R
```

tạo các support loops gần cạnh.

So sánh:

```text
Loop xa
→ mềm

Loop gần
→ sắc
```

---

# 86. Thực hành 5 — Array

Tạo một viên đá.

Thêm:

```text
Array
```

Đặt:

```text
Count = 5
```

sau đó thử:

* Relative Offset;
* khoảng cách;
* thay đổi Base Stone.

Quan sát tất cả các bản sao cập nhật.

---

# 87. Thử thách mở rộng

Tạo một hàng gồm khoảng:

```text
8–12 viên đá
```

bằng một Base Mesh duy nhất.

Yêu cầu sử dụng:

* Bevel;
* Subdivision;
* Displace;
* Array.

Không Apply Modifier cho đến cuối bài.

Sau đó tạo:

```text
Version A
Clean / Uniform

Version B
Stylized / Irregular
```

chỉ bằng cách thay đổi Modifier.

---

# 88. Bài tập với Lantern

Tạo ba phiên bản:

### A — Hard Surface

```text
Bevel only
```

### B — Soft Stylized

```text
Subdivision only
```

### C — Hybrid

```text
Bevel
+
Subdivision
+
Support Loops
```

So sánh:

| Phiên bản | Đặc điểm               |
| --------- | ---------------------- |
| A         | Sắc, mechanical        |
| B         | Mềm, stylized          |
| C         | Cạnh rõ nhưng vẫn mượt |

---

# 89. Checklist bài học

* [ ] Hiểu non-destructive modeling là gì.
* [ ] Hiểu Modifier không nhất thiết thay đổi Base Mesh.
* [ ] Biết Modifier Stack chạy từ trên xuống.
* [ ] Biết thứ tự Modifier ảnh hưởng kết quả.
* [ ] Biết sử dụng Limited Dissolve.
* [ ] Biết thêm Subdivision Surface.
* [ ] Phân biệt Simple Subdivision và Smooth Subdivision.
* [ ] Hiểu Viewport Levels và Render Levels.
* [ ] Biết sử dụng Optimal Display.
* [ ] Hiểu Support Loop.
* [ ] Biết sử dụng Bevel Modifier.
* [ ] Hiểu Amount và Segments.
* [ ] Biết giới hạn Bevel bằng Vertex Group.
* [ ] Biết tạo và Assign Vertex Group.
* [ ] Biết Circle Select bằng `C`.
* [ ] Hiểu Bevel có thể hỗ trợ Subdivision.
* [ ] Biết sử dụng Displace.
* [ ] Hiểu vai trò của Noise Texture.
* [ ] Biết điều chỉnh Displace Strength.
* [ ] Hiểu Direction = Normal.
* [ ] Biết tạo Backup Collection.
* [ ] Hiểu Apply Modifier làm mất tính non-destructive.
* [ ] Biết Separate object.
* [ ] Biết Copy Modifiers.
* [ ] Biết Join Objects.
* [ ] Hiểu Parent và Clear Parent.
* [ ] Biết sử dụng Solidify.
* [ ] Biết sử dụng Array.
* [ ] Đã thử thay đổi Modifier Order.
* [ ] Đã thực hành lại Cobblestone Pathway.
* [ ] Đã áp dụng Modifier lên Lantern.

---

# 90. Sơ đồ tổng hợp toàn bài

```text
                         LESSON 009
                             │
                  NON-DESTRUCTIVE MODELING
                             │
          ┌──────────────────┴──────────────────┐
          │                                     │
     COBBLESTONE                            LANTERN
          │                                     │
 Limited Dissolve                         Vertex Group
          │                                     │
 Subdivision Surface                        Bevel
          │                                     │
       Bevel                            Support Loops
          │                                     │
   Noise Texture                       Auto/Smooth Shading
          │                                     │
      Displace                         Separate Top
          │                                     │
       Array                           Subdivision
          │                                     │
          └──────────────────┬──────────────────┘
                             │
                      Modifier Stack
                             │
                   Order Changes Result
                             │
                          Backup
                             │
                  Apply only when needed
                             │
                        Final Models
                             │
                             ▼
                  MATERIALS + SCENE
                    (bài tiếp theo)
```

---

# 91. Những nguyên tắc quan trọng nhất

### Nguyên tắc 1

> **Giữ Base Mesh càng đơn giản càng tốt.**

```text
Simple Base
+
Modifiers
=
Complex Result
```

---

### Nguyên tắc 2

> **Modifier order matters.**

```text
A → B ≠ B → A
```

---

### Nguyên tắc 3

> **Không Apply Modifier nếu chưa cần thiết.**

Apply đồng nghĩa với việc:

```text
Procedural Result
→ Real Geometry
```

---

### Nguyên tắc 4

> **Tạo Backup trước khi thực hiện thao tác destructive.**

```text
Shift + D
→ Backup
→ Hide
```

---

### Nguyên tắc 5

> **Subdivision không thay thế topology tốt.**

Support loops và base topology vẫn quyết định:

* silhouette;
* độ sắc cạnh;
* cách surface chuyển tiếp.

---

### Nguyên tắc 6

> **Bevel không chỉ để làm đẹp hình học mà còn để cải thiện cách ánh sáng đọc hình dạng.**

---

# 92. Tóm tắt

Bài **Using Modifiers (Non-destructive Modeling)** giới thiệu một bước tiến quan trọng trong workflow Blender.

Thay vì:

```text
Model
→ thêm geometry
→ sửa geometry
→ thêm geometry
→ mesh ngày càng phức tạp
```

ta có thể xây dựng:

```text
Simple Base Mesh
      ↓
Modifier Stack
      ↓
Complex Final Result
```

Các Modifier chính trong bài:

```text
Subdivision Surface
→ thêm geometry / làm mượt

Bevel
→ bo cạnh

Displace
→ tạo biến dạng bằng texture

Array
→ nhân bản procedural

Solidify
→ tạo độ dày
```

Cobblestone minh họa workflow:

```text
Simple Stone
→ Bevel
→ Subdivision
→ Noise Displace
→ Array
```

Lantern minh họa workflow phức tạp hơn:

```text
Base Lantern
→ Vertex Groups
→ Selective Bevel
→ Support Loops
→ Subdivision
→ Smooth Shading
```

Điểm cốt lõi cần nhớ:

```text
Base Mesh
   +
Modifier Stack
   =
Editable Procedural Model
```

và:

> **Một workflow tốt không chỉ tạo ra model đẹp, mà còn cho phép quay lại, thử nghiệm và sửa đổi model một cách dễ dàng.**

Bài học kết thúc với hai asset chính:

```text
Cobblestone Pathway
+
Lantern
```

đã sẵn sàng để chuyển sang giai đoạn tiếp theo:

```text
Materials
   ↓
Scene Assembly
   ↓
Lighting / Rendering
```

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
