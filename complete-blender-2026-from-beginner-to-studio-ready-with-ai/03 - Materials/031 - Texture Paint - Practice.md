# 031 — Texture Paint

| Thuộc tính        | Nội dung                                                                       |
| ----------------- | ------------------------------------------------------------------------------ |
| **Phần**          | 03 — Materials                                                                 |
| **Thời lượng**    | 16:14                                                                          |
| **Chủ đề**        | Texture Paint — vẽ Color Map và Mask trực tiếp trên model                      |
| **Bài thực hành** | Tạo và texture quả táo, sau đó hoàn thiện composition với giỏ                  |
| **Công cụ chính** | UV Editing, Texture Paint, Image Texture, Stencil, ColorRamp, Bump, Subsurface |

---

## 1. Mục tiêu bài học

Sau bài này, cần có thể:

* Tạo một model hữu cơ đơn giản để thực hành Texture Paint.
* Unwrap UV thủ công bằng **Seam**.
* Kiểm tra và giảm **UV Stretch**.
* Tạo một `Image Texture` mới làm canvas để vẽ.
* Paint trực tiếp trên model hoặc UV/Image Editor.
* Dùng ảnh tham chiếu làm **Stencil** để chiếu texture lên bề mặt.
* Sửa lỗi texture bằng Blur/Smear.
* Lưu ảnh texture ra ổ đĩa để tránh mất dữ liệu.
* Từ một Color Map tạo thêm:

  * Roughness variation.
  * Bump/Height variation.
* Tận dụng Asset/Material Library để hoàn thiện scene nhanh hơn.

---

# 2. Tổng quan workflow

```text
Model quả táo
    ↓
Mark Seam
    ↓
UV Unwrap
    ↓
Kiểm tra UV Stretch
    ↓
Tạo Material
    ↓
Tạo Image Texture 2048 × 2048
    ↓
Texture Paint
    ↓
Stencil Projection
    ↓
Sửa seam / lỗi màu
    ↓
Save Image
    ↓
Shader Editor
    ├── Base Color
    ├── Roughness
    └── Bump
    ↓
Thêm Subsurface
    ↓
Hoàn thiện scene
```

---

# 3. Tạo model quả táo

## 3.1. Bắt đầu từ UV Sphere

Tạo một sphere thông thường:

```text
Shift + A
→ Mesh
→ UV Sphere
```

Sau đó:

```text
Right Click
→ Shade Smooth
```

Vào `Edit Mode`.

Chọn các vùng pole ở:

* đỉnh quả táo;
* đáy quả táo.

Bật:

```text
Proportional Editing
```

Chọn falloff:

```text
Sharp
```

Dùng:

```text
S
```

để thu nhỏ vùng pole.

Cuộn con lăn chuột để điều khiển phạm vi ảnh hưởng của Proportional Editing.

---

## 3.2. Phá đối xứng

Quả thật thường không hoàn toàn đối xứng.

Có thể chỉnh nhẹ:

* đỉnh;
* đáy;
* hai bên thân;
* silhouette.

Mục tiêu là tránh cảm giác:

```text
Sphere hoàn hảo
      ↓
Trông như vật thể CG
```

Thay vào đó:

```text
Bất đối xứng nhẹ
      ↓
Organic
      ↓
Tự nhiên hơn
```

> Không nên biến dạng quá mạnh. Chỉ cần variation nhỏ trong silhouette đã đủ tạo cảm giác hữu cơ.

---

# 4. Tạo cuống quả táo bằng Curve

## 4.1. Tạo đường cơ sở

Tạo Plane:

```text
Shift + A
→ Mesh
→ Plane
```

Vào Edit Mode và gộp các vertex về tâm:

```text
M
→ At Center
```

Lúc này ta có một vertex.

Extrude:

```text
E
```

nhiều lần để tạo profile cuống.

Nên kiểm tra ở Side View để điều khiển hình dáng chính xác hơn.

---

## 4.2. Chuyển sang Curve

Chuyển object thành:

```text
Object
→ Convert
→ Curve
```

Trong Curve Properties:

* tăng `Depth`;
* chỉnh độ dày;
* đặt `Resolution` phù hợp;
* bật `Fill Caps`.

Ví dụ:

```text
Curve
├── Bevel Depth      → độ dày
├── Resolution       → độ mượt
└── Fill Caps        → đóng hai đầu
```

Sau khi hình dáng ổn:

```text
Object
→ Convert
→ Mesh
```

---

## 4.3. Xử lý vertex trùng

Sau khi convert từ Curve sang Mesh, một số vertex ở đầu có thể bị trùng.

Vào Edit Mode:

```text
A
→ M
→ By Distance
```

hoặc:

```text
Mesh
→ Merge
→ By Distance
```

để loại các điểm trùng.

---

## 4.4. Điều chỉnh độ dày theo Normal

Nếu cuống hơi dày:

```text
A
→ Alt + S
```

`Alt + S` thực hiện **Shrink/Fatten**, tức là dịch các vertex theo hướng normal.

```text
Alt + S
    ↓
Vertex di chuyển theo Normal
    ↓
Tăng / giảm độ dày mesh
```

Cuối cùng có thể dùng:

```text
Ctrl + 1
```

hoặc:

```text
Ctrl + 2
```

để thêm nhanh Subdivision Surface.

---

# 5. UV Unwrap quả táo

Đây là phần quan trọng trước khi Texture Paint.

Texture Paint vẫn cần biết:

> Pixel trên ảnh tương ứng với vị trí nào trên mesh?

UV Map cung cấp phép ánh xạ đó.

---

## 5.1. Chuyển sang UV Editing

Chọn workspace:

```text
UV Editing
```

Ta cần chia bề mặt quả táo thành các UV island dễ trải phẳng.

---

## 5.2. Mark Seam

Chọn một edge loop chạy từ trên xuống dưới:

```text
Alt + Left Click
```

Chọn thêm các đường khác:

```text
Shift + Alt + Left Click
```

Có thể chia quả táo thành khoảng bốn phần dọc.

Ví dụ:

```text
        TOP
         ●
       / | \
      /  |  \
─────┼───┼─────
      \  |  /
       \ | /
         ●
       BOTTOM
```

Các đường dọc này đóng vai trò như các vết cắt.

Sau khi chọn:

```text
Right Click
→ Mark Seam
```

---

# 6. Unwrap UV

Chọn toàn bộ mesh:

```text
A
```

Sau đó:

```text
U
→ Unwrap
```

Có thể sử dụng phương pháp dựa trên góc cho dạng organic.

Kết quả sẽ tạo các UV island tương ứng với các vùng được chia bởi seam.

---

## 6.1. Sắp xếp UV Island

Trong UV Editor:

```text
L
```

để chọn toàn bộ island dưới con trỏ.

Có thể:

```text
G → Move
R → Rotate
S → Scale
```

để bố trí các island gọn gàng.

Ví dụ:

```text
UV Space
┌────────────────────────────┐
│                            │
│   ╭────╮      ╭────╮       │
│  ╱      ╲    ╱      ╲      │
│ │Island 1│  │Island 2│     │
│  ╲      ╱    ╲      ╱      │
│   ╰────╯      ╰────╯       │
│                            │
│   ╭────╮      ╭────╮       │
│  │  3   │    │  4   │      │
│   ╰────╯      ╰────╯       │
└────────────────────────────┘
```

Mục tiêu:

* sử dụng diện tích UV hợp lý;
* hạn chế khoảng trống;
* tránh island overlap ngoài chủ ý;
* giữ texel density tương đối đồng đều.

---

# 7. Kiểm tra UV Stretch

Bật visualization:

```text
UV Stretch
```

Màu hiển thị cho biết mức độ biến dạng khi bề mặt 3D được trải thành 2D.

Thông thường:

```text
Ít distortion
    ↓
Texture ổn định

Nhiều distortion
    ↓
Texture bị kéo giãn
```

Nếu một vùng UV bị scale sai, màu Stretch cũng thay đổi rõ.

---

## 7.1. Relax UV

Nếu UV distortion quá lớn, dùng công cụ relax/minimize stretch thích hợp để phân bố lại UV.

Khi dùng brush-based tool:

```text
F
```

→ thay đổi kích thước brush.

```text
Shift + F
```

→ thay đổi strength.

Các phím này cũng xuất hiện trong nhiều workflow khác như:

* Sculpting;
* Texture Paint;
* Weight Paint.

---

# 8. Tạo material cho quả táo

Chuyển sang:

```text
Shading
```

Tạo material mới:

```text
Apple
```

Thêm:

```text
Shift + A
→ Texture
→ Image Texture
```

---

# 9. Tạo Image Texture để paint

Trong `Image Texture` chọn:

```text
New
```

Ví dụ đặt tên:

```text
Apple_Diffuse
```

Độ phân giải:

```text
2048 × 2048
```

### Vì sao dùng 2K?

Scene có close-up quả táo nên:

```text
1024 × 1024
    ↓
có thể thiếu chi tiết

2048 × 2048
    ↓
đủ tốt cho bài thực hành
```

Không nhất thiết phải dùng 4K nếu texture chỉ phục vụ một object nhỏ trong scene.

---

# 10. Kết nối texture

Kết nối:

```text
Image Texture
Color
   │
   ▼
Principled BSDF
Base Color
```

Sơ đồ:

```text
[Apple_Diffuse]
      │ Color
      ▼
[Principled BSDF]
      │
      ▼
[Material Output]
```

Ban đầu ảnh mới chưa chứa dữ liệu paint nên màu hiển thị có thể rất đơn giản.

---

# 11. Texture Paint Workspace

Chuyển sang:

```text
Texture Paint
```

Để dễ nhìn màu texture, nên sử dụng kiểu viewport ít bị ảnh hưởng bởi highlight và ánh sáng phức tạp.

Có thể isolate quả táo bằng:

```text
Numpad /
```

Ta sẽ chỉ nhìn thấy object đang làm việc.

---

# 12. Paint trực tiếp trên model

Texture Paint cho phép hai cách chính.

## Cách 1 — Paint trên model

```text
Brush
   ↓
3D Mesh
   ↓
UV
   ↓
Image Texture
```

Đây là cách trực quan nhất.

---

## Cách 2 — Paint trực tiếp lên ảnh UV

```text
Brush
   ↓
2D Image
   ↓
UV Map
   ↓
3D Mesh
```

Ưu điểm:

* chính xác với chi tiết 2D;
* dễ xử lý một khu vực cụ thể.

Nhưng cần chú ý seam.

---

# 13. Hiểu vấn đề UV Seam

Ví dụ UV có hai island:

```text
3D surface
──────────────

Sau Unwrap:

┌───────┐   ┌───────┐
│Island │   │Island │
│   A   │   │   B   │
└───────┘   └───────┘
      ↑
     Seam
```

Nếu paint trực tiếp ở mép UV island, màu có thể không nối hoàn hảo với island bên cạnh.

Kết quả trên model:

```text
Texture A │ Texture B
          ↑
       đường seam
```

Vì vậy khi làm texture thật cần thường xuyên kiểm tra model trong 3D.

---

# 14. Điều khiển Brush

### Kích thước Brush

```text
F
```

### Strength

```text
Shift + F
```

Có thể kết hợp tablet/stylus để sử dụng pressure sensitivity.

Ví dụ:

```text
Nhấn nhẹ  → paint nhẹ
Nhấn mạnh → paint đậm hơn
```

Nếu có bảng vẽ, Texture Paint sẽ tự nhiên hơn đáng kể.

---

# 15. Texture bằng Stencil

Đây là kỹ thuật quan trọng nhất trong bài.

Thay vì tự vẽ toàn bộ texture quả táo, ta sử dụng ảnh quả táo thật như một stencil để project lên model.

Workflow:

```text
Ảnh quả táo
     ↓
Stencil
     ↓
Brush Projection
     ↓
Model 3D
     ↓
Image Texture
```

---

# 16. Nạp ảnh làm Brush Texture

Trong Brush Settings:

```text
Texture
→ New
```

Sau đó mở Texture Properties và:

```text
Open
```

chọn ảnh quả táo.

Trong Mapping chọn:

```text
Stencil
```

Lúc này ảnh xuất hiện như một lớp projection trước viewport.

---

# 17. Điều khiển Stencil

Có thể:

* di chuyển;
* xoay;
* thay đổi kích thước stencil.

Các tổ hợp phím có thể thay đổi tùy Blender/keymap, vì vậy nên kiểm tra tooltip của Blender nếu shortcut khác phiên bản bài học.

Mục tiêu là đặt ảnh tham chiếu khớp với quả táo:

```text
Stencil image
      ↓
 ┌───────────┐
 │   APPLE   │
 │ reference │
 └───────────┘
      ↓
  3D Apple
```

---

# 18. Dùng Brush mềm

Để tránh biên projection quá rõ, sử dụng falloff mềm.

Brush nên có dạng:

```text
        █
      █████
    █████████
   ███████████
    █████████
      █████
        █
```

thay vì:

```text
██████████
██████████
██████████
```

Tức là:

> Center mạnh → Edge giảm dần.

Nhờ vậy nhiều lần projection có thể blend với nhau tự nhiên hơn.

---

# 19. Paint quanh toàn bộ quả táo

Quy trình:

1. Đặt stencil.
2. Paint một vùng.
3. Xoay model.
4. Di chuyển stencil.
5. Điều chỉnh rotation/scale.
6. Paint tiếp.
7. Lặp lại cho đến khi phủ hết model.

```text
Front
  ↓
Side
  ↓
Back
  ↓
Other Side
  ↓
Top
  ↓
Bottom
```

---

## Lưu ý quan trọng

Không nên dùng stencil giống hệt nhau ở mọi mặt.

Nếu liên tục project cùng một vùng ảnh:

```text
Pattern
Pattern
Pattern
Pattern
```

texture sẽ xuất hiện sự lặp.

Nên thay đổi:

* vị trí stencil;
* rotation;
* scale;
* vùng ảnh sử dụng.

---

# 20. Xử lý vùng đỉnh và đáy

Đỉnh và đáy quả thường khó paint vì:

* UV hội tụ;
* geometry dày hơn;
* texture dễ bị kéo.

Có thể dùng:

* ảnh tham chiếu top-view;
* màu brush thông thường;
* Blur;
* Smear.

Không nhất thiết phải hoàn hảo nếu khu vực đó ít xuất hiện trong camera.

---

# 21. Sửa lỗi Texture Paint

Một số công cụ hữu ích:

### Blur

Dùng để làm mềm vùng chuyển tiếp.

```text
Hard seam
   ↓
Blur
   ↓
Smooth transition
```

### Smear

Có tác dụng kéo màu gần giống dùng ngón tay quệt sơn.

Hữu ích với:

* transition;
* VFX textures;
* organic surface;
* sửa lỗi nhỏ.

---

# 22. Lưu Image Texture

Đây là bước **rất quan trọng**.

Khi ảnh có dấu `*`, Blender đang báo:

> Image đã thay đổi nhưng chưa được lưu.

Texture đang tồn tại trong session Blender không đồng nghĩa với việc file ảnh đã được lưu an toàn ra ổ đĩa.

Chọn:

```text
Image
→ Save As
```

Ví dụ:

```text
textures/
└── apple/
    └── Apple_BaseColor.png
```

---

## Định dạng nên dùng

Trong bài giảng sử dụng JPEG, nhưng trong workflow thực tế thường nên ưu tiên:

```text
PNG
```

cho texture đang chỉnh sửa vì:

* lossless;
* không có JPEG compression artifact;
* phù hợp với texture intermediate/master.

JPEG có thể dùng khi:

* cần giảm dung lượng;
* texture không cần alpha;
* compression artifact không đáng kể.

---

# 23. Color Space

Với **Base Color/Diffuse texture**:

```text
Color Space = sRGB
```

Nếu sau này sử dụng image riêng cho:

* Roughness;
* Metallic;
* Height;
* Mask;

thì thường chọn:

```text
Non-Color
```

Sơ đồ:

```text
Base Color
   ↓
 sRGB

Roughness / Metallic / Height / Mask
   ↓
Non-Color
```

---

# 24. Tạo Roughness từ Color Texture

Có thể tận dụng texture màu để nhanh chóng tạo variation roughness.

Thêm:

```text
ColorRamp
```

Kết nối:

```text
Image Texture
     │
     ▼
 ColorRamp
     │
     ▼
Roughness
```

Sơ đồ:

```text
[Apple Texture]
       │
       ▼
   [ColorRamp]
       │
       ▼
[Principled BSDF]
    Roughness
```

---

# 25. Ý nghĩa Roughness

Có thể hình dung:

```text
Roughness
0.0 ───────────────────── 1.0
 │                          │
 ▼                          ▼
Bóng                       Nhám
Glossy                     Rough
```

Với mask đen trắng:

```text
Black  → roughness thấp → bóng hơn
White  → roughness cao → nhám hơn
```

Không nên ép ColorRamp quá mạnh khiến toàn bộ texture trở thành:

```text
0 hoặc 1
```

vì bề mặt dễ trông giả.

---

# 26. Tạo Bump từ cùng texture

Có thể tạo micro-detail:

```text
Image Texture
      ↓
ColorRamp
      ↓
Bump
      ↓
Principled BSDF Normal
```

Sơ đồ node:

```text
                   ┌─────────────── Base Color
                   │
[Apple Texture] ───┼── [ColorRamp] ── Roughness
                   │
                   └── [ColorRamp]
                           │
                           ▼
                         [Bump]
                           │ Normal
                           ▼
                    [Principled BSDF]
```

---

# 27. Điều chỉnh Bump

Không nên làm bump quá mạnh.

Quả táo chỉ cần micro-surface rất nhẹ.

Ví dụ logic:

```text
Bump mạnh
   ↓
Vỏ giống đá / da khô
   ✗

Bump nhẹ
   ↓
Micro variation
   ↓
Vỏ trái cây
   ✓
```

Nếu bắt đầu thấy pixelation rõ:

* giảm `Strength`;
* giảm contrast của Height Map;
* tăng resolution texture nếu thực sự cần.

---

# 28. Thêm Subsurface Scattering

Trái cây không phải một vật liệu opaque hoàn toàn.

Một lượng ánh sáng nhỏ có thể:

```text
đi vào bề mặt
      ↓
tán xạ
      ↓
thoát ra
```

Đó là lý do có thể thêm một lượng nhỏ:

```text
Subsurface
```

vào Principled BSDF.

Hiệu ứng giúp quả táo có cảm giác:

* mềm hơn;
* mọng hơn;
* ít giống plastic.

---

# 29. Material tổng thể của quả táo

Có thể tổ chức shader như sau:

```text
Apple_BaseColor
      │
      ├──────────────────────┐
      │                      │
      ▼                      ▼
Base Color              ColorRamp
Principled                  │
                            ▼
                        Roughness

Apple_BaseColor
      │
      ▼
  ColorRamp
      │
      ▼
    Bump
      │
      ▼
    Normal

Principled BSDF
├── Base Color
├── Roughness
├── Normal
└── Subsurface
```

---

# 30. Kiểm tra bằng Rendered View

Sau khi material hoàn thành, kiểm tra trong:

```text
Rendered View
```

và nếu bài đang dùng Cycles:

```text
Render Engine
→ Cycles
```

Không nên đánh giá material chỉ bằng Base Color.

Material cần được xem dưới:

* highlight;
* shadow;
* ánh sáng xiên;
* close-up.

---

# 31. Subdivision và UV

Sau khi thêm Subdivision Surface, Blender nội suy bề mặt và UV dựa trên mesh hiện có.

Thông thường:

```text
Low-poly UV
      ↓
Subdivision
      ↓
UV được nội suy
      ↓
Texture vẫn giữ đúng vị trí
```

Do đó không cần repaint toàn bộ chỉ vì tăng subdivision.

Tuy nhiên vẫn nên kiểm tra các vùng seam hoặc pole nếu subdivision làm silhouette thay đổi mạnh.

---

# 32. Gán vật liệu cho cuống

Cuống quả táo có thể dùng material đơn giản:

```text
Base Color → Brown
Roughness  → tương đối cao
```

Không cần texture phức tạp nếu cuống chỉ chiếm diện tích nhỏ trong camera.

---

# 33. Import giỏ từ project trước

Có thể tái sử dụng asset từ file `.blend` khác bằng:

```text
File
→ Append
```

Sau đó:

```text
file.blend
→ Object
→ Basket
```

Đây là lý do nên đặt tên object rõ ràng.

### Không nên

```text
Cube
Cube.001
Cube.002
Cube.046
```

### Nên

```text
Basket_Frame
Basket_Weave
Apple
Apple_Stem
```

---

# 34. Scale và duplicate quả táo

Sau khi import giỏ:

* scale quả táo xuống;
* duplicate;
* rotate;
* thay đổi scale nhẹ;
* bố trí thành một nhóm tự nhiên.

Ví dụ:

```text
Basket
├── Apple_A   scale 1.00
├── Apple_B   scale 0.92
├── Apple_C   scale 1.06
├── Apple_D   scale 0.96
└── Apple_E   scale 1.02
```

Tránh:

```text
cùng rotation
+
cùng scale
+
cùng vị trí tương đối
```

vì sẽ lộ cảm giác copy-paste.

---

# 35. Tái sử dụng Material Library

Giỏ có thể nhanh chóng nhận material gỗ từ thư viện đã tạo ở các bài trước.

Workflow:

```text
Material Library
      ↓
Procedural Wood
      ↓
Basket
```

Lợi ích:

```text
Tạo material một lần
       ↓
Lưu library
       ↓
Tái sử dụng nhiều scene
       ↓
Giảm thời gian production
```

---

# 36. UV cho giỏ

Nếu texture gỗ không chạy đúng hướng, tạo UV cho giỏ.

Vào Edit Mode:

```text
A
→ U
→ Cube Projection
```

Nhưng cần chú ý material đang lấy coordinate nào.

Ví dụ shader ban đầu:

```text
Generated
   ↓
Mapping
   ↓
Texture
```

thì tạo UV mới sẽ **không làm material thay đổi**, vì shader chưa sử dụng UV.

Cần đổi:

```text
Texture Coordinate
Generated
```

thành:

```text
Texture Coordinate
UV
```

---

# 37. Sơ đồ Coordinate

### Trước

```text
[Generated]
     │
     ▼
 [Mapping]
     │
     ▼
Wood Texture
```

UV unwrap không tác động tới workflow này.

### Sau

```text
[UV]
 │
 ▼
[Mapping]
 │
 ▼
Wood Texture
```

Lúc này UV mới kiểm soát hướng của vân gỗ.

---

# 38. Texture Paint và Procedural Texture khác nhau thế nào?

| Texture Paint               | Procedural Texture                 |
| --------------------------- | ---------------------------------- |
| Vẽ trực tiếp bằng brush     | Sinh từ node/toán học              |
| Phụ thuộc image resolution  | Gần như không phụ thuộc resolution |
| Phù hợp chi tiết riêng biệt | Phù hợp pattern lặp/variation      |
| Cần UV tốt                  | Có thể dùng Generated/Object       |
| Dễ tạo art direction cụ thể | Dễ tạo variation toàn object       |
| Có thể có seam              | Không nhất thiết có UV seam        |

### Ví dụ

```text
Quả táo
→ Texture Paint

Gỗ tổng quát
→ Procedural

Logo / chữ / vết bẩn cụ thể
→ Texture Paint / Image Texture

Noise micro-detail
→ Procedural
```

---

# 39. Khi nào nên dùng Texture Paint?

Texture Paint đặc biệt phù hợp khi texture cần có:

* vết bẩn tại một vị trí cụ thể;
* discoloration;
* decal;
* wear được art-direct;
* màu riêng của từng object;
* hand-painted texture;
* mask thủ công;
* chi tiết không thể tạo tốt chỉ bằng procedural.

Ví dụ:

```text
"Vết xước ở chính góc này"
            ↓
      Texture Paint
```

thay vì:

```text
Noise phủ ngẫu nhiên toàn object
```

---

# 40. Lỗi thường gặp

## Lỗi 1 — Paint nhưng không thấy trên model

Kiểm tra:

* Image Texture có được chọn làm paint target không?
* Material có được gán đúng không?
* Image có kết nối tới shader không?

---

## Lỗi 2 — Texture bị kéo dài

Nguyên nhân:

```text
UV Stretch
```

Giải pháp:

* sửa seam;
* unwrap lại;
* relax UV.

---

## Lỗi 3 — Có đường nối rõ

Nguyên nhân:

```text
UV Seam
```

Giải pháp:

* paint trực tiếp trên model;
* dùng brush mềm;
* Blur/Smear;
* tăng bleed/margin nếu phù hợp.

---

## Lỗi 4 — Mất texture sau khi mở lại Blender

Nguyên nhân phổ biến:

> Paint xong nhưng chưa `Save Image`.

Luôn thực hiện:

```text
Image
→ Save
```

trước khi đóng project.

---

## Lỗi 5 — Bump quá mạnh

Kết quả:

```text
Apple → Rock
```

Giải pháp:

* giảm Bump Strength;
* giảm contrast Height;
* sử dụng micro-detail rất nhẹ.

---

## Lỗi 6 — UV của giỏ thay đổi nhưng texture không đổi

Kiểm tra Shader Editor.

Có thể shader đang sử dụng:

```text
Generated
```

thay vì:

```text
UV
```

---

# 41. Phím tắt quan trọng

| Phím                  | Chức năng                    |
| --------------------- | ---------------------------- |
| `Tab`                 | Edit/Object Mode             |
| `A`                   | Select All                   |
| `E`                   | Extrude                      |
| `M`                   | Merge                        |
| `Alt + S`             | Shrink/Fatten theo Normal    |
| `Ctrl + 1`            | Subdivision Level 1          |
| `Ctrl + 2`            | Subdivision Level 2          |
| `Alt + Click`         | Chọn edge loop               |
| `Shift + Alt + Click` | Thêm edge loop vào selection |
| `U`                   | UV Mapping menu              |
| `L`                   | Chọn UV island dưới con trỏ  |
| `G`                   | Move                         |
| `R`                   | Rotate                       |
| `S`                   | Scale                        |
| `F`                   | Brush Radius                 |
| `Shift + F`           | Brush Strength               |
| `Numpad /`            | Local/Isolate View           |
| `Ctrl + J`            | Join Objects                 |

> Một số shortcut của Stencil có thể khác giữa các Blender version hoặc keymap.

---

# 42. Cấu trúc file đề xuất

```text
Project/
├── scenes/
│   └── apple_basket.blend
│
├── textures/
│   └── apple/
│       ├── Apple_BaseColor.png
│       ├── references/
│       │   ├── apple_front.jpg
│       │   └── apple_top.jpg
│       └── masks/
│
├── assets/
│   └── basket.blend
│
└── materials/
    └── material_library.blend
```

Cách này giúp tránh tình trạng:

```text
texture ở Desktop
ảnh reference trong Downloads
blend trong Documents
↓
mất file khi di chuyển project
```

---

# 43. Quy trình thực hành rút gọn

```text
01. UV Sphere
        ↓
02. Sculpt silhouette thành quả táo
        ↓
03. Tạo cuống
        ↓
04. Mark Seam
        ↓
05. UV Unwrap
        ↓
06. Check Stretch
        ↓
07. Tạo 2K Image
        ↓
08. Tạo material
        ↓
09. Texture Paint
        ↓
10. Load Stencil
        ↓
11. Project texture quanh quả
        ↓
12. Blur / Smear lỗi
        ↓
13. Save Image
        ↓
14. Base Color
        ↓
15. ColorRamp → Roughness
        ↓
16. ColorRamp → Bump
        ↓
17. Thêm Subsurface nhẹ
        ↓
18. Append Basket
        ↓
19. Gán procedural wood
        ↓
20. Hoàn thiện composition
```

---

# 44. Nguyên tắc cần nhớ

> **Texture Paint không chỉ là “tô màu lên model”. Nó là workflow kết hợp giữa UV, Image Texture, Brush Projection và Shader.**

Ba phần cần luôn kiểm tra:

```text
        UV
         │
         ▼
Image Texture
         │
         ▼
      Shader
```

Nếu một trong ba phần sai, Texture Paint rất dễ gặp lỗi.

---

# 45. Checklist

## Modeling

* [ ] Silhouette quả táo không quá hoàn hảo.
* [ ] Cuống có độ dày hợp lý.
* [ ] Không còn vertex trùng ngoài chủ ý.

## UV

* [ ] Seam được đặt hợp lý.
* [ ] UV không overlap ngoài chủ ý.
* [ ] UV island được bố trí tương đối gọn.
* [ ] Không có vùng Stretch quá mạnh.
* [ ] Pole của quả táo được kiểm tra kỹ.

## Texture Paint

* [ ] Tạo Image Texture trước khi paint.
* [ ] Resolution đủ cho khoảng cách camera.
* [ ] Stencil không bị lặp dễ nhận thấy.
* [ ] Brush edge đủ mềm.
* [ ] Kiểm tra seam trong 3D.
* [ ] Blur/Smear các lỗi cần thiết.

## File

* [ ] Image Texture đã được `Save`.
* [ ] Texture nằm trong thư mục project.
* [ ] Base Color sử dụng `sRGB`.
* [ ] Mask/data texture riêng sử dụng `Non-Color`.

## Shader

* [ ] Base Color được kết nối đúng.
* [ ] Roughness có variation.
* [ ] Bump đủ nhẹ.
* [ ] Không xuất hiện pixelation rõ.
* [ ] Subsurface chỉ được sử dụng vừa phải.

## Scene

* [ ] Apple có variation về rotation/scale.
* [ ] Basket được import đúng.
* [ ] Material gỗ lấy đúng coordinate.
* [ ] Kiểm tra material trong Rendered View/Cycles.

---

# 46. Kết quả cuối bài

Sau bài này, workflow hoàn chỉnh có thể được hiểu như sau:

```text
             ┌── Stencil Image
             │
             ▼
Model → UV → Texture Paint → Apple_BaseColor
                              │
                 ┌────────────┼─────────────┐
                 ▼            ▼             ▼
            Base Color    Roughness       Bump
                 │            │             │
                 └────────────┼─────────────┘
                              ▼
                       Principled BSDF
                              │
                         + Subsurface
                              │
                              ▼
                        Quả táo hoàn chỉnh
                              │
                              ▼
                     Basket + Material Library
                              │
                              ▼
                      Composition cuối
```

**Ý chính của bài 031:** dùng **Texture Paint** khi cần kiểm soát trực tiếp vị trí màu sắc và chi tiết trên một object. UV tốt giúp paint ổn định, stencil giúp tạo texture thủ công nhanh hơn, còn Shader Editor biến một texture màu đơn giản thành vật liệu phong phú hơn bằng **roughness, bump và subsurface**.

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
