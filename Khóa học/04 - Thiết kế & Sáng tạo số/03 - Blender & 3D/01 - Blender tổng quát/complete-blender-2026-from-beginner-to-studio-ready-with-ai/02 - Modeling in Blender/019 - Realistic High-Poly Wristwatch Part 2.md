# 019 — Realistic High-Poly Wristwatch Part 2

| Thuộc tính     | Nội dung                                                                      |
| -------------- | ----------------------------------------------------------------------------- |
| **Phần**       | 02 — Modeling in Blender                                                      |
| **Thời lượng** | 21:23                                                                         |
| **Chủ đề**     | Hoàn thiện chi tiết cơ khí, Boolean cutout, strap và chuẩn bị high-poly model |
| **Mức độ**     | Trung cấp                                                                     |
| **Trọng tâm**  | Subdivision, Boolean, support loop, Curve, Mirror, file versioning            |

---

## 1. Mục tiêu bài học

Sau bài này, cần có thể:

* [ ] Hoàn thiện các chi tiết cuối của đồng hồ như **crown/núm chỉnh**, lỗ nhỏ và vùng gắn dây.
* [ ] Dùng **Boolean** để tạo các cutout phức tạp mà không phá phần model đã hoàn thiện.
* [ ] Biết tại sao Boolean nên được thực hiện **sau cùng** trong high-poly workflow.
* [ ] Dùng **Curve** để dựng dây đồng hồ có hình cong tự nhiên.
* [ ] Chuyển Curve thành Mesh và hoàn thiện topology cần thiết.
* [ ] Dùng **Mirror Modifier** để tránh chỉnh sửa hai bên giống nhau.
* [ ] Quản lý file theo phiên bản để tránh mất model và dễ quay lại iteration trước.
* [ ] Chuẩn bị một **high-poly master** sạch để tiếp tục material, texture, render hoặc bake.

---

# 2. Nguyên tắc quan trọng: lưu file theo phiên bản

Ngay đầu bài, giảng viên nhấn mạnh việc lưu project có tổ chức.

Ví dụ:

```text
watch_001.blend
watch_002.blend
watch_003.blend
```

Nếu project đi qua nhiều giai đoạn, có thể đặt tên:

```text
watch_model_001.blend
watch_material_001.blend
watch_light_001.blend
watch_render_001.blend
```

### Vì sao dùng `001`, `002`, `003`?

Thay vì:

```text
watch_1
watch_2
watch_10
```

sử dụng:

```text
watch_001
watch_002
watch_010
```

giúp:

* file luôn được sắp xếp đúng;
* dễ nhận biết iteration;
* thuận tiện khi project có hàng chục hoặc hàng trăm phiên bản;
* đồng nghiệp có thể hiểu cấu trúc project.

> Không nên dùng những tên như `final`, `final2`, `final_final`, `final_really_final`.

---

# 3. Tổng quan phần model còn lại

Ở phần trước đã hoàn thiện phần lớn:

```text
Watch
├── Case
├── Bezel
├── Dial
├── Hands
├── Markers
└── Remaining
    ├── Crown / núm chỉnh
    ├── Side cutouts
    ├── Speaker / microphone hole
    ├── Strap connection
    └── Strap
```

Workflow phần 2:

```text
Crown
   ↓
Side details
   ↓
Boolean cutters
   ↓
Strap mounting cutout
   ↓
Curve strap
   ↓
Convert to Mesh
   ↓
Support loops
   ↓
Mirror
   ↓
High-poly master
```

---

# 4. Dựng Crown — núm chỉnh đồng hồ

Núm chỉnh bên hông đồng hồ về bản chất có thể bắt đầu từ một **Cylinder**.

## 4.1 Tạo cylinder

Dùng:

```text
Shift + A
→ Mesh
→ Cylinder
```

Đặt:

```text
Vertices: 32
```

Lý do:

* crown có các rãnh lặp đều xung quanh;
* số segment cần phù hợp với số lượng rãnh;
* 32 segment đủ mượt nhưng vẫn dễ kiểm soát.

Sau đó:

```text
R → Y → 90°
```

để xoay cylinder đúng hướng.

---

# 5. Căn theo reference

Chuyển sang side view và Wireframe:

```text
Numpad 3
Z → Wireframe
```

Sau đó:

1. scale crown về đúng kích thước;
2. căn tương đối theo ảnh reference;
3. chừa một chút thể tích cho Subdivision.

Điểm quan trọng:

> Không cần khớp reference ở cấp pixel. Đây vẫn là giai đoạn dựng hình dựa trên tỷ lệ quan sát.

---

# 6. Tạo profile cho Crown

Ở mặt trước:

```text
I → Inset
```

Sau đó scale để tạo các lớp profile.

Có thể hình dung:

```text
      _________
    /           \
---|             |---
   |   Crown     |
---|             |---
    \___________/
```

Profile không nên chỉ là một cylinder phẳng. Cần thêm:

* vòng ngoài;
* vùng lõm;
* mặt phẳng chính;
* bevel chuyển tiếp.

Những thay đổi nhỏ này giúp ánh sáng tạo highlight giống sản phẩm thật.

---

# 7. Tạo các rãnh quanh Crown

Đây là chi tiết quan trọng nhất của núm chỉnh.

Ban đầu:

```text
||||||||||||||||||||||||||||||||
```

Sau xử lý:

```text
|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_
```

Các rãnh này tạo khả năng bám ngón tay khi xoay crown.

---

## 7.1 Chọn Edge Loop

Có thể dùng:

```text
Ctrl + Alt + Click
```

để chọn edge loop.

Kết hợp:

```text
B
```

để Box Select.

Nếu chọn thừa, loại bỏ những phần không cần thiết.

---

## 7.2 Bevel các cạnh

Dùng:

```text
Ctrl + B
```

để chia cạnh.

Mục tiêu là tạo ra các polygon nhỏ để chuẩn bị làm recess.

---

## 7.3 Đẩy polygon vào trong

Chọn xen kẽ các mặt rồi dùng:

```text
I
```

hoặc Extrude/Scale thích hợp để đẩy chúng vào.

Kết quả:

```text
Crown surface
──────────────
 \_/\_/\_/\_/
```

Các phần lõm sẽ bắt highlight và shadow rõ hơn khi render.

---

# 8. Vấn đề N-gon khi Subdivision

Sau khi tạo recess, một số vùng có thể trở thành **N-gon**.

Khi bật:

```text
Ctrl + 2
```

Subdivision có thể gây:

* méo mặt;
* pinching;
* highlight không đều;
* transition quá mềm.

Giải pháp là bổ sung topology.

---

# 9. Subdivide để tạo support edge

Trong vùng cần thêm cạnh:

```text
Right Click
→ Subdivide
```

Sau đó dùng:

```text
G → G
```

để **Edge Slide**.

Di chuyển cạnh gần contour cần giữ sắc.

Nguyên tắc:

```text
Cạnh càng gần nhau
        ↓
Subdivision càng giữ góc sắc
```

Ví dụ:

```text
Không support loop:

──────────────
     )
   )
 )

Có support loop:

──────────────
          |
          |
```

---

# 10. Shade Auto Smooth

Sau khi hoàn thiện crown:

```text
Right Click
→ Shade Auto Smooth
```

Mục tiêu:

* mặt cong nhìn mềm;
* cạnh cơ khí vẫn giữ rõ;
* giảm shading artifact.

Nếu vẫn thấy highlight bị méo, không nên chỉ sửa bằng Smooth.

Cần kiểm tra:

```text
Topology
→ support loops
→ poles
→ triangulation
→ mặt bị kéo
```

---

# 11. Sửa artifact bằng topology

Nếu một vùng crown xuất hiện highlight không đẹp:

1. tạm giảm hoặc tắt Subdivision;
2. chọn vùng polygon gây lỗi;
3. thêm support edge;
4. điều chỉnh vị trí;
5. bật lại Subdivision.

Workflow:

```text
Artifact
   ↓
Ctrl + 0
   ↓
Inspect topology
   ↓
Move/Add support edge
   ↓
Ctrl + 2
   ↓
Check highlight
```

Đây là cách sửa chính xác hơn việc cố dùng Shade Smooth.

---

# 12. Thêm relief ở mặt trước Crown

Mặt đầu crown không nên hoàn toàn phẳng.

Có thể dùng:

```text
I → Inset
```

rồi đẩy vào rất nhẹ.

Nếu muốn thu toàn bộ vùng về một điểm:

```text
M
→ At Center
```

Tạo profile dạng:

```text
 \       /
  \_____/
```

Chỉ cần độ sâu nhỏ vì mục đích chính là tạo:

* highlight;
* shadow;
* thay đổi phản xạ vật liệu.

---

# 13. Nguyên tắc High-Poly: chi tiết nhỏ tạo bằng ánh sáng

Một chi tiết cơ khí rất nhỏ không nhất thiết phải sâu.

Ví dụ:

```text
Flat surface
──────────────
```

chỉ cần biến thành:

```text
──────\__/──────
```

là đã tạo đủ khác biệt khi ánh sáng chiếu vào.

Trong product modeling:

> Chất lượng thường được đọc qua highlight nhiều hơn qua topology trực tiếp.

---

# 14. Tạo cutout bên hông bằng Boolean

Tiếp theo là một vùng lõm/cutout ở case.

Đây là lúc thích hợp để dùng **Boolean** vì shape chính đã gần hoàn thiện.

---

# 15. Vì sao Boolean nên làm ở cuối?

Boolean rất hữu ích nhưng có thể tạo:

* N-gon;
* topology phức tạp;
* poles;
* cạnh khó chỉnh sửa;
* Subdivision artifact.

Do đó workflow tốt:

```text
Base Shape
    ↓
Subdivision topology
    ↓
Primary details
    ↓
Secondary details
    ↓
Boolean
    ↓
Final micro details
```

Không nên:

```text
Boolean sớm
   ↓
Topology rối
   ↓
Tiếp tục chỉnh shape lớn
   ↓
Khó kiểm soát
```

---

# 16. Tạo Boolean Cutter từ Circle

Thêm:

```text
Shift + A
→ Mesh
→ Circle
```

Với chi tiết nhỏ có thể dùng:

```text
Vertices: 24
```

Không cần 32 hoặc 64 segment vì:

* cutter nhỏ;
* ít ảnh hưởng silhouette;
* quá nhiều polygon làm Boolean nặng hơn.

---

# 17. Chỉnh hình cutter

Xoay:

```text
R → Y → 90°
```

Sau đó chỉnh các điểm để cutter phù hợp với reference.

Có thể bevel vertex bằng:

```text
Ctrl + Shift + B
```

nhằm tạo phần chuyển tiếp mềm hơn.

---

# 18. Tạo độ dày Cutter

Sau khi có outline:

```text
F
```

để fill.

Sau đó:

```text
I
```

để Inset.

Xóa vùng trung tâm nếu cần tạo dạng khung.

Cuối cùng:

```text
E
```

để Extrude cutter xuyên qua case.

Điều kiện quan trọng:

```text
Cutter phải xuyên hoàn toàn qua vùng cần cắt.
```

---

# 19. Kiểm tra và sửa Normal

Nếu polygon hiển thị sai:

```text
A
Ctrl + N
→ Recalculate Outside
```

Trong Blender phiên bản mới thường có thể dùng:

```text
Shift + N
```

Mục tiêu là đảm bảo normal hướng ra ngoài.

---

# 20. Thêm Boolean Modifier

Chọn object đồng hồ:

```text
Modifier
→ Boolean
```

Operation thường là:

```text
Difference
```

Sau đó dùng **Eyedropper** chọn cutter.

Sơ đồ:

```text
Watch Case
      +
Boolean Cutter
      ↓
Difference
      ↓
Watch Case có lỗ
```

---

# 21. Không xóa Boolean Cutter ngay

Cutter nên được giữ lại nếu modifier chưa Apply.

Tạo Collection riêng:

```text
Boolean
├── Cutter_Side
├── Cutter_Hole
└── Cutter_Strap
```

Ẩn cutter ở:

```text
Viewport
Render
```

Nhưng vẫn giữ trong Outliner.

Lợi ích:

* có thể sửa kích thước sau;
* Boolean vẫn non-destructive;
* dễ quản lý project.

---

# 22. Vì sao không chỉ dùng `H` để ẩn cutter?

Nếu dùng:

```text
H
```

sau đó:

```text
Alt + H
```

tất cả object bị ẩn có thể xuất hiện lại.

Giảng viên ưu tiên tắt visibility trực tiếp trong Object Properties / Outliner để Boolean cutters vẫn được giữ ẩn khi thao tác Show All.

---

# 23. Tạo lỗ speaker hoặc microphone

Một chi tiết nhỏ khác bên case có thể tạo đơn giản bằng Cylinder.

```text
Shift + A
→ Cylinder
```

Scale nhỏ và cho cylinder xuyên vào thân đồng hồ.

Sau đó:

```text
Boolean → Difference
```

Không cần tạo lỗ quá nông.

Nên cho cutter sâu vào trong để shadow tạo cảm giác có chiều sâu.

---

# 24. Thêm bevel quanh lỗ

Một lỗ hoàn toàn sắc:

```text
|   |
|   |
```

không phản ánh ánh sáng tự nhiên.

Nên tạo transition:

```text
\   /
 | |
```

Chỉ cần một bevel nhỏ cũng giúp hình ảnh cao cấp hơn đáng kể.

---

# 25. Boolean cutout cho vùng gắn Strap

Đây là Boolean lớn hơn nên cần nhiều segment hơn.

Tạo:

```text
Circle
Vertices: 32
```

Lý do:

* kích thước lớn;
* cạnh cong nằm gần silhouette;
* dễ thấy trong render.

---

# 26. Dùng Proportional Editing chỉnh Cutter

Trong Edit Mode:

```text
O
```

bật **Proportional Editing**.

Chọn một hoặc vài vertex và kéo.

Mouse Wheel điều chỉnh bán kính tác động.

Sơ đồ:

```text
Vertex được kéo
      ↓
      ●
    / | \
   /  |  \
  ●   ●   ●

Ảnh hưởng giảm dần theo khoảng cách
```

Điều này giúp tạo contour cong tự nhiên hơn nhiều so với việc di chuyển từng vertex riêng lẻ.

---

# 27. Tránh transition quá sắc

Nếu contour như:

```text
_______
       |
       |
```

Subdivision hoặc Boolean sẽ tạo cảm giác cơ khí quá cứng.

Nên tạo chuyển tiếp:

```text
_______
       \
        \
```

Proportional Editing rất thích hợp cho công việc này.

---

# 28. Extrude Cutter xuyên qua case

Sau khi hoàn chỉnh outline:

```text
F
```

Fill mặt.

Sau đó:

```text
E
```

Extrude xuyên qua toàn bộ thân đồng hồ.

Nếu cần duplicate cutter sang phía còn lại:

```text
Shift + D
```

rồi:

```text
R
```

hoặc Mirror/Rotate tương ứng.

Có thể join hai cutter bằng:

```text
Ctrl + J
```

---

# 29. Kiểm tra Boolean sau Subdivision

Một cutter nhìn ổn ở low-poly chưa chắc đẹp khi Subdivision.

Test:

```text
Ctrl + 2
```

Nếu xuất hiện:

* pinching;
* lõm bất thường;
* cạnh gãy;
* highlight méo;

thì cần quay lại cutter và bổ sung support loop.

---

# 30. Support loop ở đầu vùng cong

Những đoạn đầu và cuối thường cần thêm edge.

Ví dụ:

```text
Không support:

──────╮
      ╰────

Có support:

─────┬╮
     │╰────
```

Cạnh gần contour giúp Subdivision giữ shape tốt hơn.

---

# 31. Kiểm tra Boolean qua highlight

Sau khi cutter được ẩn:

hãy quan sát vùng cutout trong MatCap hoặc Studio Light.

Một Boolean tốt cần:

* contour sạch;
* không có gợn sóng;
* shading đều;
* không có cạnh thừa nhìn thấy;
* transition hợp lý.

---

# 32. Tạo Strap bằng Curve

Dây đồng hồ là phần cuối.

Thay vì dựng hoàn toàn bằng mesh, sử dụng **Curve** giúp dễ tạo đường cong.

Workflow:

```text
Circle
   ↓
Delete vertices
   ↓
Semicircle
   ↓
Convert to Curve
   ↓
Bevel Depth
   ↓
Twist profile
   ↓
Fill Caps
   ↓
Convert to Mesh
```

---

# 33. Tạo đường cong cơ sở cho Strap

Thêm Circle:

```text
Shift + A
→ Mesh
→ Circle
```

Xóa một phần vertex để giữ lại dạng bán nguyệt:

```text
     ______
   /        \
  /          \
```

Đường này sẽ định nghĩa hướng cong của strap.

---

# 34. Chuyển thành Curve

Dùng:

```text
Object
→ Convert
→ Curve
```

Sau đó trong Curve Properties:

```text
Geometry
→ Bevel
→ Depth
```

tăng **Depth** để tạo độ dày.

Có thể đặt:

```text
Resolution: 0
```

nếu muốn profile có cạnh tương đối rõ.

---

# 35. Điều chỉnh profile bằng Tilt

Nếu cross-section của strap bị xoay không đúng hướng:

Trong Edit Mode:

```text
A
Ctrl + T
```

xoay Tilt.

Trong bài:

```text
-45°
```

Giữ:

```text
Ctrl
```

để snap theo các bước góc.

---

# 36. Fill Caps

Trước khi Convert thành Mesh, bật:

```text
Curve Properties
→ Fill Caps
```

Nếu không bật, hai đầu strap sẽ bị hở:

```text
Open:

[========

Closed:

[========]
```

Sau đó:

```text
Object
→ Convert
→ Mesh
```

---

# 37. Chuyển Curve thành Mesh đúng thời điểm

Nên giữ Curve càng lâu càng tốt vì Curve dễ chỉnh:

* curvature;
* depth;
* profile;
* orientation.

Chỉ chuyển thành Mesh khi cần:

* chỉnh topology;
* thêm support loop;
* Mirror;
* Boolean;
* edit vertex trực tiếp.

Workflow tốt:

```text
Curve procedural
      ↓
Shape approved
      ↓
Duplicate backup
      ↓
Convert to Mesh
```

---

# 38. Sửa topology sau khi Convert

Curve → Mesh đôi khi sinh geometry không tối ưu, ví dụ:

```text
┌─────────────┐
│ \           │
│  \          │
│   \         │
└─────────────┘
```

có cạnh diagonal không mong muốn.

Có thể:

1. chọn face;
2. Delete Face;
3. fill lại bằng:

```text
F
```

4. tạo cạnh cần thiết với:

```text
J
```

---

# 39. Thêm support edge cho Strap

Sau khi Convert sang Mesh:

```text
Ctrl + B
```

để bevel hoặc tạo thêm subdivision.

Mục tiêu là để strap giữ được mặt phẳng tương đối nhưng vẫn có cạnh mềm.

Profile:

```text
Không bevel:

┌────────┐
│        │
└────────┘

Micro bevel:

 ╭──────╮
 │      │
 ╰──────╯
```

---

# 40. Chỉnh Strap ở Side View

Quan sát từ cạnh:

```text
Numpad 1
```

hoặc view phù hợp.

Thêm loop cut tại những vùng có thay đổi curvature.

Nếu thiếu topology:

```text
───────╲_______
```

có thể bị gãy.

Thêm segment:

```text
───╲──╲──╲_____
```

giúp curvature mượt hơn.

---

# 41. Làm thẳng các vertex bị lệch

Nếu một nhóm vertex cần cùng nằm trên một mặt phẳng:

```text
S → X → 0
```

Ví dụ:

```text
Trước:

●
  ●
 ●

Sau S X 0:

●
●
●
```

Tương tự:

```text
S Y 0
S Z 0
```

tùy trục cần căn.

Đây là kỹ thuật rất hữu ích trong hard-surface modeling.

---

# 42. Chỉ model một nửa Strap

Không nên chỉnh hai phía giống nhau bằng tay.

Workflow:

```text
Full Strap
    ↓
Cut center
    ↓
Delete half
    ↓
Mirror Modifier
```

Ưu điểm:

* topology đối xứng;
* giảm một nửa công việc;
* mọi chỉnh sửa cập nhật tự động.

---

# 43. Đặt Origin cho Mirror

Để Mirror hoạt động đúng:

1. xác định center của strap;
2. đưa 3D Cursor đến center;
3. đặt Origin phù hợp.

Có thể dùng:

```text
Shift + S
→ Cursor to Selected
```

sau đó đặt Origin theo cursor hoặc tổ chức object để Mirror lấy đúng trục.

Thêm:

```text
Mirror Modifier
```

---

# 44. Workflow hoàn chỉnh của Strap

```text
Reference
    ↓
Create semicircle
    ↓
Convert to Curve
    ↓
Set Bevel Depth
    ↓
Set profile orientation
    ↓
Fill Caps
    ↓
Adjust curvature
    ↓
Duplicate backup
    ↓
Convert to Mesh
    ↓
Clean topology
    ↓
Add support loops
    ↓
Delete half
    ↓
Mirror
    ↓
Final strap
```

---

# 45. Phân loại chi tiết khi dựng đồng hồ

Có thể chia model thành 3 cấp độ:

| Cấp                 | Ví dụ                         | Kỹ thuật           |
| ------------------- | ----------------------------- | ------------------ |
| **Primary Form**    | Case, bezel, strap            | Mesh / Curve       |
| **Secondary Form**  | Crown, strap cutout           | Mesh + Subdivision |
| **Tertiary Detail** | Microphone hole, small recess | Boolean            |

Thứ tự hợp lý:

```text
Primary
   ↓
Secondary
   ↓
Tertiary
```

Không nên dựng micro-detail khi silhouette chính còn sai.

---

# 46. Quy tắc chọn số segment

Không có một số lượng segment cố định cho mọi chi tiết.

### Chi tiết nhỏ

Ví dụ microphone hole:

```text
16–24 segments
```

### Chi tiết trung bình

Crown:

```text
≈32 segments
```

### Đường cong lớn gần camera

Có thể cần:

```text
32+
```

Nguyên tắc:

> Geometry nhiều hơn chỉ nên được thêm khi silhouette hoặc highlight thực sự cần nó.

---

# 47. Boolean workflow nên dùng cho project này

Khuyến nghị cấu trúc Object:

```text
WATCH
├── GEO
│   ├── Watch_Case
│   ├── Watch_Bezel
│   ├── Watch_Dial
│   ├── Watch_Crown
│   └── Watch_Strap
│
└── BOOLEAN
    ├── BOOL_SideCut
    ├── BOOL_Microphone
    └── BOOL_StrapSocket
```

Collection `BOOLEAN` có thể:

* ẩn khỏi viewport;
* tắt render;
* giữ lại để chỉnh modifier.

---

# 48. Modifier Stack gợi ý

Một hard-surface part có thể có stack:

```text
Mirror
   ↓
Boolean
   ↓
Bevel
   ↓
Subdivision
   ↓
Weighted/Smooth shading
```

Tuy nhiên thứ tự thực tế cần thay đổi tùy object.

Điều cần nhớ:

> Thứ tự Modifier ảnh hưởng trực tiếp tới kết quả cuối.

---

# 49. Micro Bevel quan trọng như thế nào?

Trong thế giới thật gần như không có cạnh hoàn toàn sắc.

Cạnh toán học:

```text
90°
┌
│
```

Cạnh thực tế:

```text
╭
│
```

Micro bevel giúp:

* bắt highlight;
* vật liệu kim loại nhìn thật hơn;
* phân biệt các mặt;
* render product đẹp hơn.

---

# 50. High-poly không đồng nghĩa với cực nhiều polygon

High-poly tốt là:

```text
Đủ geometry
+
đúng vị trí
+
silhouette sạch
+
highlight đẹp
```

Không phải:

```text
càng nhiều polygon càng tốt
```

Một model có hàng triệu polygon nhưng highlight méo vẫn là model chất lượng thấp.

---

# 51. Những lỗi thường gặp trong bài

## Lỗi 1 — Boolean quá sớm

### Hậu quả

Topology bị rối trước khi shape chính hoàn thiện.

### Khắc phục

```text
Primary Form
→ Subdivision
→ Major Details
→ Boolean cuối
```

---

## Lỗi 2 — Cutter có quá nhiều polygon

### Hậu quả

* Boolean chậm;
* topology đầu ra phức tạp;
* khó sửa.

### Khắc phục

Chỉ dùng đủ segment cho silhouette.

---

## Lỗi 3 — Cutter quá nông

Boolean có thể thất bại hoặc tạo artifact.

Cutter nên xuyên hoàn toàn:

```text
──── CASE ────
      █
      █
      █
──── CASE ────
      █
```

---

## Lỗi 4 — Strap cong bị gãy

Nguyên nhân:

```text
thiếu subdivision theo chiều cong
```

Khắc phục:

```text
Add Loop Cuts
→ distribute evenly
→ refine curvature
```

---

## Lỗi 5 — Convert Curve quá sớm

Sau khi Convert:

* khó thay đổi đường cong;
* mất workflow procedural.

Nên giữ Curve đến khi shape đã ổn định.

---

## Lỗi 6 — Strap làm hai bên thủ công

Không cần thiết nếu đối xứng.

Dùng:

```text
Mirror Modifier
```

---

## Lỗi 7 — Shading xấu nhưng chỉ dùng Shade Smooth

Shade Smooth không sửa topology xấu.

Cần sửa:

```text
Support loops
Normals
N-gons
Poles
Boolean topology
```

---

# 52. Phím tắt xuất hiện trong bài

| Phím                     | Công dụng                    |
| ------------------------ | ---------------------------- |
| `Tab`                    | Object/Edit Mode             |
| `Shift + A`              | Add object                   |
| `R`                      | Rotate                       |
| `S`                      | Scale                        |
| `G`                      | Move                         |
| `G G`                    | Edge Slide                   |
| `E`                      | Extrude                      |
| `I`                      | Inset                        |
| `F`                      | Fill                         |
| `B`                      | Box Select                   |
| `O`                      | Proportional Editing         |
| `Ctrl + B`               | Bevel Edge                   |
| `Ctrl + Shift + B`       | Bevel Vertex                 |
| `Ctrl + 2`               | Subdivision Level 2          |
| `Ctrl + 0`               | Tắt subdivision hotkey level |
| `Shift + D`              | Duplicate                    |
| `Ctrl + J`               | Join Objects                 |
| `M`                      | Merge                        |
| `A`                      | Select All                   |
| `Shift + N` / `Ctrl + N` | Recalculate Normals          |
| `Ctrl + T`               | Tilt Curve                   |
| `Shift + S`              | Snap/Cursor menu             |
| `S X 0`                  | Flatten theo trục X          |
| `Alt + H`                | Unhide                       |
| `Numpad 1/3`             | Orthographic View            |

---

# 53. Sơ đồ tư duy của bài

```text
            HIGH-POLY WATCH PART 2
                     │
        ┌────────────┴────────────┐
        │                         │
      DETAIL                    STRAP
        │                         │
   ┌────┴────┐                Curve Path
   │         │                    │
 Crown    Boolean             Bevel Depth
   │         │                    │
Cylinder   Cutter              Fill Caps
   │         │                    │
32 seg    Difference          Convert Mesh
   │         │                    │
Recess   Support Edge          Cleanup
   │         │                    │
Support   Hide Cutter           Mirror
Loops        │                    │
   └─────────┴─────────────┬──────┘
                          │
                    Check Shading
                          │
                    High-Poly Master
```

---

# 54. Quy trình thực hành đề xuất

## Giai đoạn A — Crown

```text
Cylinder 32
→ Rotate
→ Scale
→ Inset
→ Create grooves
→ Bevel
→ Support loops
→ Subdivision
→ Shade Auto Smooth
```

## Giai đoạn B — Side Cutout

```text
Circle 24
→ Shape cutter
→ Fill
→ Extrude
→ Recalculate normals
→ Boolean Difference
→ Hide cutter
```

## Giai đoạn C — Speaker Hole

```text
Cylinder
→ Extrude through case
→ Boolean
→ Add small bevel
```

## Giai đoạn D — Strap Socket

```text
Circle 32
→ Proportional Editing
→ Fill
→ Extrude
→ Duplicate
→ Join
→ Boolean
→ Fix support edges
```

## Giai đoạn E — Strap

```text
Semicircle
→ Convert Curve
→ Bevel Depth
→ Tilt -45°
→ Fill Caps
→ Convert Mesh
→ Cleanup topology
→ Add loops
→ Shape
→ Mirror
```

---

# 55. Bài thực hành sau bài học

Giảng viên chỉ minh họa phần đầu của strap; phần còn lại nên tự hoàn thiện dựa trên reference.

### Yêu cầu

* [ ] Hoàn thiện toàn bộ dây.
* [ ] Đảm bảo dây nối đúng với case.
* [ ] Giữ độ cong tự nhiên.
* [ ] Dùng Mirror nếu cấu trúc đối xứng.
* [ ] Không có face bị hở.
* [ ] Không có shading artifact rõ.
* [ ] Có micro bevel ở cạnh nhìn thấy.

---

# 56. Checklist kiểm tra High-Poly Master

## Hình dáng

* [ ] Case đúng tỷ lệ.
* [ ] Bezel tròn và sạch.
* [ ] Crown đúng vị trí.
* [ ] Cutout không làm hỏng silhouette.
* [ ] Strap có curvature hợp lý.

## Topology

* [ ] Support loops nằm đúng vị trí.
* [ ] Không có pinching lớn.
* [ ] N-gon không gây shading artifact.
* [ ] Boolean được dùng chủ yếu cho secondary/tertiary detail.

## Normals

* [ ] Normal hướng ra ngoài.
* [ ] Shade Smooth/Auto Smooth hoạt động đúng.
* [ ] Highlight chạy liên tục trên các mặt cong.

## Modifier

* [ ] Modifier chưa cần thiết không bị Apply sớm.
* [ ] Boolean cutters vẫn được lưu.
* [ ] Mirror hoạt động đúng.
* [ ] Subdivision không phá silhouette.

## File

* [ ] Đã lưu phiên bản mới.
* [ ] Object naming rõ ràng.
* [ ] Boolean cutter nằm trong collection riêng.
* [ ] Có bản backup trước khi Apply modifier.

---

# 57. Chuẩn bị cho bước Material và Render

Model sau bài này nên đạt trạng thái:

```text
High-Poly Geometry
        ↓
Clean Shading
        ↓
Correct Scale
        ↓
Correct Normals
        ↓
Organized Objects
        ↓
Ready for Materials
```

Đặc biệt với vật liệu kim loại, cần quan sát:

```text
Edge bevel
+
Surface curvature
+
Clean highlight
```

vì ba yếu tố này ảnh hưởng rất mạnh đến độ chân thực.

---

# 58. Chuẩn bị Low/High để Bake

Nếu sau này cần game asset hoặc realtime model:

```text
High Poly
    │
    ├── Crown detail
    ├── Bevels
    ├── Recess
    └── Mechanical detail
          │
          ↓
        BAKE
          │
          ↓
Low Poly + Normal Map
```

Nên giữ riêng:

```text
Watch_HP
Watch_LP
```

Không ghi đè high-poly master.

---

# 59. Kiến thức cốt lõi cần nhớ

> **1. Chi tiết lớn trước, chi tiết nhỏ sau.**

> **2. Boolean là công cụ rất mạnh nhưng nên dùng khi shape chính đã ổn định.**

> **3. Support loop quyết định độ sắc của hình dạng khi Subdivision.**

> **4. Highlight sạch quan trọng hơn việc sở hữu thật nhiều polygon.**

> **5. Curve là lựa chọn rất hiệu quả cho những phần cong dài như dây đồng hồ.**

> **6. Chỉ Convert Curve → Mesh khi thật sự cần chỉnh topology.**

> **7. Dùng Mirror để tránh làm công việc đối xứng hai lần.**

> **8. Luôn lưu version trước các thao tác phá hủy như Apply Boolean hoặc Convert.**

---

# 60. Checklist hoàn thành bài 019

* [ ] Lưu project theo dạng `watch_001`, `watch_002`...
* [ ] Hoàn thiện crown bằng cylinder 32 segments.
* [ ] Tạo rãnh crown.
* [ ] Thêm support loop cho Subdivision.
* [ ] Kiểm tra highlight của crown.
* [ ] Tạo side cutout bằng Boolean.
* [ ] Tạo lỗ speaker/microphone.
* [ ] Tạo Boolean cutter cho vùng gắn strap.
* [ ] Dùng Proportional Editing để chỉnh contour.
* [ ] Quản lý cutter trong Collection `Boolean`.
* [ ] Tạo strap từ Curve.
* [ ] Bật Fill Caps trước khi Convert.
* [ ] Convert strap thành Mesh.
* [ ] Sửa topology phát sinh.
* [ ] Thêm support loops.
* [ ] Làm thẳng vertex bằng `S X/Y/Z 0` khi cần.
* [ ] Dùng Mirror cho phần đối xứng.
* [ ] Kiểm tra normals.
* [ ] Kiểm tra Smooth Shading.
* [ ] Lưu **high-poly master** riêng.
* [ ] Chuẩn bị model cho material, texture, render hoặc bake.
