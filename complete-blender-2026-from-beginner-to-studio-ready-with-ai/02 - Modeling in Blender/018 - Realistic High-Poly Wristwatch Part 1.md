# 018 — Realistic High-Poly Wristwatch Part 1

| Thuộc tính     | Nội dung                                                                       |
| -------------- | ------------------------------------------------------------------------------ |
| **Phần**       | 02 — Modeling in Blender                                                       |
| **Thời lượng** | 12:05                                                                          |
| **Chủ đề**     | Blockout và hard-surface wristwatch                                            |
| **Trọng tâm**  | Reference, Curve Profile, Subdivision, Grid Fill, kiểm tra topology và normals |

---

## 1. Mục tiêu bài học

Sau bài này, có thể:

* Phân tích một chiếc đồng hồ thành các bộ phận lớn trước khi dựng chi tiết.
* Thiết lập **reference Front View + Side View** chính xác.
* Dựng outline của thân đồng hồ từ một Plane.
* Sử dụng **Vertex Bevel** để tạo các góc bo.
* Tạo **profile mặt cắt** theo Side View.
* Dùng Curve + custom profile để xây dựng thân đồng hồ.
* Chuyển Curve sang Mesh khi cần chỉnh topology.
* Tạo phần mặt kính/mặt trước bằng Extrude + Scale.
* Đóng bề mặt bằng **Grid Fill**.
* Sử dụng **Subdivision Surface** đúng cách.
* Kiểm tra lỗi shading bằng **MatCap** và **Face Orientation**.
* Tạo phần cảm biến phía sau đồng hồ.

---

# 2. Tư duy quan trọng: dựng từ lớn đến nhỏ

Một nguyên tắc xuyên suốt khi làm realistic high-poly:

```text
BASE FORM
   ↓
PRIMARY SHAPES
   ↓
MEDIUM DETAILS
   ↓
SMALL DETAILS
   ↓
SURFACE DETAILS
```

Hay:

```text
Silhouette
    ↓
Tỷ lệ tổng thể
    ↓
Thân / Case
    ↓
Bezel + Glass
    ↓
Dial
    ↓
Hands / Markers
    ↓
Crown / Buttons
    ↓
Strap
    ↓
Chi tiết nhỏ
```

> Không nên bắt đầu bằng nút bấm, logo, kim hay các rãnh nhỏ khi hình dáng tổng thể của chiếc đồng hồ chưa chính xác.

Lý do là topology của các chi tiết sau sẽ phụ thuộc trực tiếp vào phần base.

---

# 3. Phân tích cấu tạo chiếc đồng hồ

Trước khi model, phân tách reference thành các bộ phận.

```text
Wristwatch
│
├── Case
│   ├── Main body
│   ├── Bezel
│   └── Back case
│
├── Front
│   ├── Glass
│   ├── Dial
│   ├── Hour markers
│   └── Hands
│
├── Back
│   └── Sensor
│
├── Side controls
│   ├── Crown
│   └── Buttons
│
└── Strap
```

Trong **Part 1**, chủ yếu tập trung vào:

```text
Reference
   ↓
Main Case
   ↓
Front / Glass Base
   ↓
Back Sensor
```

---

# 4. Thiết lập Reference

## 4.1. Import ảnh

Đưa ảnh reference của đồng hồ vào Blender.

Sau khi import:

1. Reset transform nếu cần.
2. Xoay reference:

```text
R → X → 90
```

3. Đặt chính giữa theo tâm của mặt đồng hồ.

---

## 4.2. Tạo Front View

Dùng ảnh đầu tiên làm reference mặt trước.

Chuyển sang Front View:

```text
Numpad 1
```

Căn sao cho tâm mặt đồng hồ nằm đúng tại tâm scene.

---

## 4.3. Tạo Side View

Duplicate reference:

```text
Shift + D
```

Di chuyển sang trục thích hợp rồi xoay:

```text
R → Z → 90
```

Kiểm tra bằng:

```text
Numpad 3
```

để vào **Right View**.

---

## 4.4. Hệ reference

```text
              FRONT VIEW
                  │
                  │
                  ▼
             ┌─────────┐
             │  Watch  │
             │   Face  │
             └─────────┘
                  │
                  │
──────────────────┼──────────────
                  │
                  │
             SIDE VIEW
```

Reference phải thống nhất về:

* tâm;
* chiều cao;
* chiều rộng;
* độ dày;
* vị trí mặt kính;
* vị trí mặt sau.

---

# 5. Phân tích hình dạng thân đồng hồ

Nhìn từ Front View, phần case có thể coi như:

```text
Rectangle / Cube
        +
Rounded Corners
        +
Subdivision
```

Tuy nhiên thay vì bắt đầu bằng Cube, bài học sử dụng **Plane** để kiểm soát outline tốt hơn.

---

# 6. Dựng outline thân đồng hồ

## 6.1. Tạo Plane

```text
Shift + A
→ Mesh
→ Plane
```

Xoay:

```text
R → X → 90
```

Chuyển sang:

```text
Numpad 1
```

và bật Wireframe:

```text
Z → Wireframe
```

---

## 6.2. Căn Plane theo reference

Điều chỉnh các vertex để cạnh:

* trên;
* dưới;
* trái;
* phải

bám sát silhouette của case.

Ban đầu:

```text
┌──────────────┐
│              │
│              │
│              │
└──────────────┘
```

Sau khi bo góc:

```text
   ╭──────────╮
 ╭─╯          ╰─╮
 │              │
 ╰─╮          ╭─╯
   ╰──────────╯
```

---

# 7. Bo các vertex ở góc

Chọn vertex ở các góc rồi dùng:

```text
Ctrl + Shift + B
```

Đây là **Vertex Bevel**.

> `Ctrl + Shift + B` → bevel vertex
> `Ctrl + B` → bevel edge

Dùng con lăn chuột để tăng số segment.

Ví dụ:

```text
1 corner
   ↓
6 segments
   ↓
smooth rounded corner
```

Trong bài sử dụng khoảng **6 điểm/segment cho mỗi góc** để giữ mật độ topology tương đối đều.

---

# 8. Kiểm tra từ Side View

Chuyển sang:

```text
Numpad 3
```

Kiểm tra xem outline có nhô ra hoặc lệch so với reference hay không.

Điều chỉnh nhẹ các vertex nếu cần.

Mục tiêu:

```text
Front View → đúng silhouette
Side View  → đúng độ dày
```

---

# 9. Tạo Profile mặt cắt của thân

Outline phía trước mới chỉ mô tả hình dạng **XY**.

Để tạo thân 3D, cần thêm một **profile theo chiều sâu**.

---

## 9.1. Tạo Plane thứ hai

```text
Shift + A
→ Mesh
→ Plane
```

Trong Edit Mode:

```text
A
M
→ At Center
```

Tất cả vertex được merge thành một vertex duy nhất.

---

## 9.2. Chuyển sang Side View

```text
Numpad 3
```

Di chuyển vertex đến vị trí bắt đầu của case.

> Chỉ model **thân case** ở bước này.
> Phần kính sẽ được làm thành object riêng.

---

# 10. Extrude Profile

Dùng:

```text
E
```

liên tục để tracing theo mặt cắt của đồng hồ.

Ví dụ:

```text
Side Reference

             Glass
               ┌───────
               │
        _______│
      /         \
 ____/           \____
|                    |
|      Main Case     |
|____________________|
```

Profile hiện tại chỉ theo:

```text
      _______
    /         \
___/           \___
```

Không cần tạo các rãnh/cutout nhỏ ngay lập tức.

---

# 11. Bỏ qua chi tiết nhỏ trong giai đoạn blockout

Reference có thể có:

* khe;
* rãnh;
* nút;
* groove;
* cutout;
* sensor;
* seam.

Nhưng ở giai đoạn này:

```text
Reference detail
      ↓
Có ảnh hưởng silhouette lớn?
      │
   ┌──┴──┐
   │     │
  Có    Không
   │     │
Model   Bỏ qua
ngay    tạm thời
```

Ưu tiên tạo **overall shape** trước.

---

# 12. Dùng Profile để tạo thân đồng hồ

Bây giờ có hai thành phần:

```text
Object A
Front Outline

     +

Object B
Side Profile
```

Mục tiêu:

```text
Front Outline × Side Profile
          ↓
       3D Case
```

---

# 13. Chuyển Outline thành Curve

Chọn outline và chuyển sang Curve.

Sau đó vào:

```text
Curve Data Properties
→ Geometry
→ Bevel
```

Thay vì dùng profile dạng tròn mặc định, sử dụng **custom profile object** vừa tạo.

---

# 14. Gán Profile Object

Trong phần Geometry/Bevel của Curve:

```text
Bevel
└── Object
    └── chọn Side Profile
```

Lúc này Blender dùng mặt cắt vừa dựng để chạy quanh outline.

Kết quả về nguyên lý:

```text
      SIDE PROFILE
           │
           ▼
      ╭──────╮
      │      │
      ╰──────╯
           │
           │ sweep
           ▼

   ╭────────────────╮
 ╭─╯                ╰─╮
 │                    │
 │      WATCH CASE    │
 │                    │
 ╰─╮                ╭─╯
   ╰────────────────╯
```

---

# 15. Sửa hướng Profile

Profile có thể xuất hiện:

* ngược;
* xoay sai;
* mirror sai;
* lệch origin.

Đầu tiên:

```text
Right Click
→ Set Origin
→ Origin to Geometry
```

Sau đó chỉnh hướng.

Ví dụ trong bài:

```text
R → Z → 180
```

và flip theo Y nếu cần.

---

## Apply Rotation

Sau khi profile đúng hướng:

```text
Ctrl + A
→ Rotation
```

Điều này rất quan trọng vì Curve sử dụng transform của profile để xác định hướng sweep.

---

# 16. Quy tắc orientation của Profile

Có thể hình dung:

```text
Sai:

Front →
Profile →

→ sweep sai hướng


Đúng:

Front →
Profile ←

→ tiết diện chạy đúng quanh case
```

Nếu kết quả bị xoắn hoặc lật, kiểm tra theo thứ tự:

1. Origin.
2. Rotation.
3. Local axis.
4. Scale.
5. Apply Transform.

---

# 17. Kiểm tra Case

Ẩn profile:

```text
H
```

Sau đó kiểm tra lại từ Side View.

Nếu profile chưa khớp reference:

```text
S
```

để điều chỉnh scale.

Có thể chỉnh riêng từng vùng profile để bám sát silhouette.

---

# 18. Tạo phần mặt trước / kính

Khi case đã ổn, bắt đầu tạo phần front.

Trước tiên chuyển Curve thành Mesh nếu cần chỉnh polygon trực tiếp:

```text
Object
→ Convert
→ Mesh
```

---

## 18.1. Tách edge loop phía trước

Trong Edit Mode, chọn vòng cạnh phía trước:

```text
Alt + Click
```

sau đó:

```text
P
→ Selection
```

Kết quả:

```text
Main Case
+
Separate Front Ring
```

Front Ring này được dùng làm nền cho kính/mặt trước.

---

# 19. Extrude phần mặt trước

Chuyển sang Side View.

Dùng chuỗi:

```text
E
→ S
→ E
→ S
→ E
→ S
```

Ý nghĩa:

```text
Edge Ring
   │
   ├── Extrude ra trước
   │
   ├── Scale
   │
   ├── Extrude
   │
   ├── Scale
   │
   └── tạo transition
```

Mặt cắt:

```text
Case
──────────────╮
              ╰──╮
                 ╰── Glass/Dial base
```

Đồng thời liên tục so sánh với Side Reference.

---

# 20. Đóng mặt bằng Grid Fill

Sau khi extrude đến vòng cuối, cần đóng phần giữa.

Chọn edge loop:

```text
Ctrl + F
→ Grid Fill
```

Grid Fill sẽ tạo topology dạng quad ở bên trong.

---

# 21. Điều chỉnh Grid Fill

Trong bảng operator của Grid Fill có hai thông số quan trọng:

### Span

Điều khiển số lượng polygon.

```text
Span nhỏ
→ ít polygon

Span lớn
→ nhiều polygon
```

### Offset

Xoay / dịch cách bố trí grid.

```text
Offset
  ↓
thay đổi hướng kết nối quad
```

---

## Topology mong muốn

Không nên:

```text
/\/\/\/\/\
\//\/\\///
```

Nên:

```text
┌─┬─┬─┬─┐
├─┼─┼─┼─┤
├─┼─┼─┼─┤
└─┴─┴─┴─┘
```

Ưu tiên:

* quad;
* kích thước tương đối đều;
* không có polygon quá dài;
* không có vùng tập trung vertex bất thường.

---

# 22. Vì sao topology đều quan trọng?

Khi dùng Subdivision:

```text
Bad topology
      ↓
Uneven subdivision
      ↓
Pinching
      ↓
Shading artifacts
```

Ngược lại:

```text
Even quads
    ↓
Smooth subdivision
    ↓
Clean highlight
    ↓
Realistic hard-surface
```

Với sản phẩm như đồng hồ, **highlight sạch** đặc biệt quan trọng.

---

# 23. Thêm Subdivision Surface

Shortcut:

```text
Ctrl + 2
```

tạo:

```text
Subdivision Surface
Levels Viewport = 2
```

Thực hiện cho:

* main case;
* front/glass base.

---

# 24. Shade Smooth / Auto Smooth

Sau Subdivision:

```text
Right Click
→ Shade Auto Smooth
```

hoặc tùy phiên bản Blender:

```text
Shade Smooth by Angle
```

Mục tiêu là loại bỏ cảm giác faceted giữa các polygon.

---

# 25. Giữ silhouette bằng Support Loops

Subdivision làm object bị co lại và bo tròn quá mức.

Ví dụ:

```text
Before Subdivision

┌─────────┐

After Subdivision

╭─────────╮
```

Để giữ cạnh:

```text
Ctrl + R
```

thêm support loop gần cạnh.

---

## Quy luật

```text
Support loop gần cạnh
        ↓
Cạnh sắc hơn

Support loop xa cạnh
        ↓
Cạnh mềm hơn
```

Ví dụ:

```text
Sharp-ish edge

││──────││


Soft edge

│  │──│  │
```

---

# 26. Điều chỉnh outline sau Subdivision

Quan sát đồng hồ từ:

```text
Numpad 1
Numpad 3
```

Nếu silhouette bị co:

* kéo support loop;
* chỉnh vertex;
* tăng nhẹ scale;
* điều chỉnh profile.

Đây là bước refinement rất quan trọng.

---

# 27. Kiểm tra artifact bằng MatCap

Trong viewport shading mở menu:

```text
Solid Shading
→ Lighting
→ MatCap
```

Chọn MatCap có highlight rõ.

> Trong transcript từ **“Mac App”** thực tế là **MatCap**.

MatCap giúp nhìn rõ:

* waviness;
* pinching;
* normal lỗi;
* highlight bị gãy;
* bề mặt không đều.

---

# 28. Cách đọc highlight

Một bề mặt tốt:

```text
Highlight
────────────────────
```

liền mạch và trơn.

Bề mặt có topology lỗi:

```text
Highlight
──────╲__
        ╲────
```

có hiện tượng gãy, lượn hoặc lõm bất thường.

Đây là một trong những cách tốt nhất để kiểm tra hard-surface high-poly.

---

# 29. Kiểm tra Face Orientation

Nếu shading có vấn đề, bật:

```text
Viewport Overlays
→ Face Orientation
```

Thông thường:

* **Blue** → mặt ngoài.
* **Red** → mặt bị đảo hướng khi nhìn từ ngoài.

Nếu xuất hiện vùng đỏ ở bề mặt ngoài, normals đang sai.

---

# 30. Recalculate Normals

Trong Edit Mode:

```text
A
Alt + N
→ Recalculate Outside
```

Thông thường với vỏ ngoài của đồng hồ nên dùng:

**Recalculate Outside**.

Sau đó kiểm tra Face Orientation một lần nữa.

---

# 31. Tạo cảm biến phía sau

Phần sau của đồng hồ có một module giống cảm biến đo nhịp tim.

Bắt đầu bằng:

```text
Shift + A
→ Cube
```

Thêm Subdivision:

```text
Ctrl + 2
```

---

# 32. Apply geometry khi cần vertex thật

Subdivision hiện chỉ là modifier.

Nếu muốn trực tiếp sử dụng các polygon đã subdivide:

```text
Ctrl + A
→ Visual Geometry to Mesh
```

hoặc apply/convert geometry tương ứng tùy phiên bản Blender.

Sau bước này, các polygon của hình đã subdivide trở thành geometry thật.

---

# 33. Xóa một nửa để dựng đối xứng

Trong Edit Mode:

1. Chọn một nửa object theo trục X.
2. Xóa Face.

Có thể tiếp tục dựng một nửa rồi dùng Mirror ở workflow hoàn chỉnh.

Lợi ích:

```text
½ Model
   +
Mirror
   ↓
Symmetry
```

---

# 34. Điều chỉnh cảm biến theo Side View

Scale phần sensor theo Y:

```text
S → Y
```

Sau đó đặt sát mặt sau của case.

Kiểm tra reference bằng:

```text
Numpad 3
```

---

# 35. Tạo transition giữa sensor và case

Chọn edge loop:

```text
Alt + Click
```

Có thể dùng:

```text
G → G
```

để **Edge Slide**.

Sau đó extrude:

```text
E → Y
```

tạo phần chuyển tiếp từ cảm biến vào thân.

---

# 36. Điều chỉnh các polygon

Chọn vùng polygon rồi:

```text
S
```

để tạo taper.

Ví dụ mặt cắt:

```text
        Sensor
       ________
     /          \
____/            \____
       Case
```

Thay vì:

```text
        ________
       |        |
_______|        |_______
```

Transition mềm giúp Subdivision tạo highlight tự nhiên hơn.

---

# 37. Set Origin

Đặt origin sensor:

```text
Right Click
→ Set Origin
→ Origin to Geometry
```

Điều này giúp:

* scale;
* rotate;
* mirror;
* modifier

hoạt động dễ dự đoán hơn.

---

# 38. Subdivision làm giảm volume

Một vấn đề quan trọng:

```text
Original mesh
┌────────────┐

Subdivision
 ╭──────────╮
```

Object có xu hướng **co vào**.

Vì vậy sau khi bật Subdivision:

```text
Reference
    ↕
Subdivision Result
```

phải kiểm tra kích thước lại.

Nếu nhỏ hơn reference:

```text
S
```

để scale nhẹ hoặc chỉnh cage.

---

# 39. Thêm Support Loops cho sensor

Dùng:

```text
Ctrl + R
```

tại các vị trí cần giữ form.

Ví dụ:

```text
Outer border
↓
│ │────────│ │
↑             ↑
Support     Support
Loop        Loop
```

Mục tiêu là giữ được:

* chiều cao;
* độ nhô;
* bán kính góc;
* vùng chuyển tiếp.

---

# 40. Đóng mặt sau bằng Grid Fill

Chọn vòng edge còn hở:

```text
Ctrl + F
→ Grid Fill
```

Điều chỉnh:

* **Span**
* **Offset**

cho đến khi grid tương đối đều.

---

# 41. Kiểm tra sau khi Grid Fill

Trước Subdivision:

```text
□ □ □ □
□ □ □ □
□ □ □ □
```

Sau Subdivision cần đạt:

```text
Smooth surface
+
No pinching
+
Clean reflection
```

Nếu bị lỗi:

1. thay Span;
2. thay Offset;
3. chỉnh vertex;
4. kiểm tra pole;
5. kiểm tra normals.

---

# 42. Hoàn thiện shading sensor

Bật:

```text
Ctrl + 2
```

sau đó:

```text
Right Click
→ Shade Auto Smooth
```

Kiểm tra với MatCap.

---

# 43. Workflow tổng thể của Part 1

```text
REFERENCE
   │
   ├── Front View
   └── Side View
          │
          ▼
   PHÂN TÍCH HÌNH DÁNG
          │
          ▼
   FRONT OUTLINE
     từ Plane
          │
          ▼
    Vertex Bevel
          │
          ▼
    SIDE PROFILE
          │
          ▼
     Curve + Profile
          │
          ▼
       MAIN CASE
          │
          ├────────────┐
          │            │
          ▼            ▼
     FRONT RING    BACK SENSOR
          │            │
       Extrude       Cube
          │            │
       Scale        Subdivision
          │            │
      Grid Fill     Grid Fill
          │            │
          └─────┬──────┘
                ▼
          SUBDIVISION
                │
                ▼
          SUPPORT LOOPS
                │
                ▼
             MATCAP
                │
                ▼
        NORMALS CHECK
```

---

# 44. Các phím tắt quan trọng

| Phím               | Chức năng                   |
| ------------------ | --------------------------- |
| `Shift + A`        | Add object                  |
| `Shift + D`        | Duplicate                   |
| `Numpad 1`         | Front View                  |
| `Numpad 3`         | Right View                  |
| `Z`                | Shading Pie                 |
| `E`                | Extrude                     |
| `S`                | Scale                       |
| `G`                | Move                        |
| `G`, `G`           | Edge Slide                  |
| `R`                | Rotate                      |
| `Ctrl + B`         | Bevel Edge                  |
| `Ctrl + Shift + B` | Bevel Vertex                |
| `Ctrl + R`         | Loop Cut                    |
| `Alt + Click`      | Chọn Edge Loop              |
| `P`                | Separate                    |
| `M`                | Merge                       |
| `Ctrl + F`         | Face Menu                   |
| `Ctrl + 2`         | Subdivision Surface Level 2 |
| `Ctrl + A`         | Apply Transform             |
| `Alt + N`          | Normals menu                |
| `H`                | Hide selected               |
| `Tab`              | Edit/Object Mode            |

---

# 45. Những lỗi thường gặp

## Lỗi 1 — Làm chi tiết quá sớm

```text
Small details trước
       ↓
Base thay đổi
       ↓
Phải sửa toàn bộ chi tiết
```

**Giải pháp:** luôn đi theo:

```text
Large → Medium → Small
```

---

## Lỗi 2 — Profile Curve bị xoay sai

### Biểu hiện

* Case xoắn.
* Mặt cắt quay 90°.
* Phần trước hướng vào trong.

### Kiểm tra

```text
Origin
↓
Rotation
↓
Scale
↓
Local Axis
↓
Ctrl + A
```

---

## Lỗi 3 — Subdivision làm model nhỏ lại

Đây là hành vi bình thường.

**Giải pháp:**

* support loops;
* chỉnh cage;
* tăng nhẹ volume.

---

## Lỗi 4 — Grid Fill tạo polygon xấu

Thử điều chỉnh:

```text
Span
+
Offset
```

Ưu tiên quads đều.

---

## Lỗi 5 — Highlight bị gãy

Có thể do:

```text
Normals sai
│
├── Face Orientation
│
└── Alt + N
```

hoặc:

```text
Topology xấu
│
├── poles
├── stretched quads
└── support loops không đều
```

---

# 46. Quy tắc topology cho high-poly wristwatch

### Nên

```text
✓ Quads tương đối đều
✓ Edge flow theo silhouette
✓ Support loops có mục đích
✓ Chi tiết thành object riêng khi hợp lý
✓ Subdivision không phá silhouette
```

### Tránh

```text
✗ Nhiều vertex không cần thiết
✗ Triangle dài tại vùng highlight
✗ Pole ngay cạnh bo cong quan trọng
✗ Support loop quá dày
✗ Apply modifier quá sớm
```

---

# 47. Tư duy dựng vật thể realistic

Một điểm rất quan trọng được nhấn mạnh trong bài:

> **Hãy dựng vật thể 3D gần giống cách vật thể thật được cấu tạo.**

Ví dụ chiếc đồng hồ thật không phải một khối duy nhất.

```text
REAL WATCH

Case
├── Glass
├── Bezel
├── Dial
├── Back Cover
├── Sensor
├── Crown
└── Strap
```

Vì vậy model cũng nên được phân tách tương tự.

Lợi ích:

* topology đơn giản hơn;
* dễ thay đổi;
* dễ UV;
* dễ material;
* shading chính xác hơn;
* dễ thêm chi tiết;
* thuận lợi cho render macro.

---

# 48. Cấu trúc object gợi ý

Ngay từ Part 1 có thể tổ chức:

```text
WATCH
│
├── REF
│   ├── REF_Front
│   └── REF_Side
│
├── CASE
│   ├── Watch_Case
│   ├── Watch_Front
│   └── Watch_Back_Sensor
│
├── DIAL
├── HANDS
├── CONTROLS
└── STRAP
```

Naming rõ từ đầu sẽ hữu ích khi model trở nên phức tạp hơn.

---

# 49. Checklist thực hành

* [ ] Import được reference mặt trước và mặt bên.
* [ ] Hai reference được căn đúng tâm và tỷ lệ.
* [ ] Phân tích được các phần chính của wristwatch.
* [ ] Dựng outline case bằng Plane.
* [ ] Bo corner bằng `Ctrl + Shift + B`.
* [ ] Tạo được side profile bằng Extrude.
* [ ] Dùng side profile làm profile cho Curve.
* [ ] Hiểu cách sửa rotation/origin của custom profile.
* [ ] Tạo được phần front bằng edge loop riêng.
* [ ] Extrude + Scale để tạo transition.
* [ ] Dùng Grid Fill tạo quad tương đối đều.
* [ ] Thêm Subdivision bằng `Ctrl + 2`.
* [ ] Dùng support loop để giữ silhouette.
* [ ] Kiểm tra model bằng MatCap.
* [ ] Kiểm tra Face Orientation.
* [ ] Recalculate normals khi cần.
* [ ] Tạo được sensor phía sau.
* [ ] Case và bezel/front giữ được đường cong sạch.
* [ ] Các object lớn có naming và collection rõ ràng.

---

# 50. Ghi nhớ nhanh

```text
REALISTIC HIGH-POLY WATCH

Reference chính xác
        ↓
Blockout chính xác
        ↓
Outline sạch
        ↓
Profile đúng
        ↓
Quads đều
        ↓
Subdivision
        ↓
Support Loops
        ↓
MatCap Check
        ↓
Normals Check
        ↓
Medium Details
        ↓
Small Details
```

> **Nguyên tắc cốt lõi của Part 1:**
> Đừng cố làm chiếc đồng hồ “chi tiết” ngay từ đầu. Hãy làm cho **silhouette, tỷ lệ, profile và topology của phần thân chính thật tốt trước**. Khi nền tảng sạch, các chi tiết ở Part 2 sẽ dễ dựng và cho kết quả realistic hơn rất nhiều.
