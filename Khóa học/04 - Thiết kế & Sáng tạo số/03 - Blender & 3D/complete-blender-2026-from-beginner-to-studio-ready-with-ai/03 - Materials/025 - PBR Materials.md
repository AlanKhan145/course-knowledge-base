# 025 — PBR Materials

| Thuộc tính     | Nội dung                                              |
| -------------- | ----------------------------------------------------- |
| **Phần**       | 03 — Materials                                        |
| **Thời lượng** | 14:08                                                 |
| **Chủ đề**     | PBR Texture Maps, Color Space, Normal và Displacement |

---

## 1. Mục tiêu bài học

Sau bài này, cần có thể:

* [ ] Hiểu vai trò của các **PBR Texture Maps**.
* [ ] Phân biệt dữ liệu màu và dữ liệu kỹ thuật.
* [ ] Gắn đúng **Base Color, Roughness, Metallic, Normal, Height/Displacement**.
* [ ] Biết khi nào dùng **sRGB** và khi nào dùng **Non-Color**.
* [ ] Không nối Normal Map trực tiếp vào cổng `Normal`.
* [ ] Phân biệt **Normal/Bump** với **Displacement thật**.
* [ ] Chọn độ phân giải texture phù hợp để tránh làm scene quá nặng.
* [ ] Biết dùng texture displacement ở cả cấp độ **Shader** và **Geometry/Modifier**.

---

# 2. PBR là gì?

**PBR — Physically Based Rendering** là phương pháp mô tả vật liệu dựa trên cách ánh sáng tương tác với bề mặt trong thế giới thực.

Thay vì chỉ dùng một màu duy nhất, một material PBR thường sử dụng nhiều texture map:

```text
PBR Material
│
├── Base Color / Albedo
├── Roughness
├── Metallic
├── Normal
└── Height / Displacement
```

Mỗi map phụ trách một đặc tính riêng của bề mặt.

Ví dụ với một bức tường gạch:

```text
Base Color
    ↓
Màu của gạch

Roughness
    ↓
Vùng bóng / nhám

Normal
    ↓
Chi tiết lồi lõm giả

Displacement
    ↓
Thay đổi hình học thật
```

---

# 3. Ý nghĩa màu của các socket trong Shader Editor

Trong Blender, màu của socket cho biết **loại dữ liệu** mà socket sử dụng.

| Màu socket | Kiểu dữ liệu   | Ví dụ               |
| ---------- | -------------- | ------------------- |
| 🟡 Vàng    | Color          | Base Color          |
| ⚪ Xám      | Value / Scalar | Roughness, Metallic |
| 🟣 Tím     | Vector         | Normal              |
| 🟢 Xanh lá | Shader         | BSDF Shader         |

Ví dụ:

```text
Image Texture
     │
     ├── Color ──────────────> Base Color 🟡
     │
     ├── Color ──────────────> Roughness ⚪
     │
     └── Color → Normal Map → Normal 🟣
```

> Socket màu tím **không có nghĩa là cần một ảnh màu tím**. Nó biểu thị dữ liệu kiểu `Vector`.

---

# 4. Cấu trúc Shader PBR cơ bản

Một material PBR phổ biến có cấu trúc:

```text
Base Color Texture
       │
       ▼
   Base Color
       │
       │
Roughness Texture
       │
       ▼
   Roughness
       │
       │
Normal Texture
       │
       ▼
  Normal Map
       │
       ▼
     Normal
       │
       │
       ▼
Principled BSDF
       │
       ▼
Material Output
```

Khi có Displacement:

```text
Height Texture
      │
      ▼
 Displacement
      │
      ▼
Material Output
  Displacement
```

---

# 5. Thêm node trong Shader Editor

Phím chính:

```text
Shift + A
```

sẽ mở menu:

```text
Add
├── Input
├── Output
├── Shader
├── Texture
├── Color
├── Vector
└── Converter
```

Có thể tìm node trực tiếp bằng Search.

Một số node quan trọng trong bài:

* `Image Texture`
* `Color Ramp`
* `RGB Curves`
* `Mix Color`
* `Normal Map`
* `Bump`
* `Displacement`
* `Principled BSDF`
* `Material Output`

---

# 6. Mix Color

`Mix Color` dùng để kết hợp hai nguồn màu.

Ví dụ:

```text
Color A ──┐
          ├── Mix Color ──> Base Color
Color B ──┘
```

Tham số `Factor` quyết định tỷ lệ trộn.

```text
Factor = 0
→ chủ yếu Color A

Factor = 0.5
→ trộn A và B

Factor = 1
→ chủ yếu Color B
```

Node này rất hữu ích khi sau này cần:

* pha màu;
* tạo variation;
* kết hợp texture;
* thêm dirt;
* tạo mask.

---

# 7. Bộ texture PBR

Một bộ texture tải về thường có các file như:

```text
brick/
├── brick_diffuse_2k.jpg
├── brick_rough_2k.jpg
├── brick_normal_2k.jpg
└── brick_disp_2k.png
```

Tên file có thể khác nhau tùy website.

### Một số ký hiệu thường gặp

| Tên         | Ý nghĩa        |
| ----------- | -------------- |
| `Diffuse`   | Màu nền        |
| `Albedo`    | Base Color     |
| `BaseColor` | Base Color     |
| `COL`       | Color          |
| `DIFF`      | Diffuse        |
| `Rough`     | Roughness      |
| `Metal`     | Metallic       |
| `NRM`       | Normal         |
| `NormalGL`  | OpenGL Normal  |
| `NormalDX`  | DirectX Normal |
| `Height`    | Height         |
| `Disp`      | Displacement   |

---

# 8. Base Color / Albedo Map

## Chức năng

Base Color quyết định màu sắc chính của vật liệu.

Ví dụ:

```text
Image Texture
Color
  │
  ▼
Base Color
Principled BSDF
```

### Color Space

Đối với texture màu:

```text
Color Space = sRGB
```

---

## Ví dụ

```text
Brick_Albedo.jpg
       │
       ▼
  Image Texture
       │ Color
       ▼
Principled BSDF
   Base Color
```

Nếu chỉ sử dụng Base Color, vật liệu thường nhìn giống:

> **một ảnh được dán lên bề mặt**

vì chưa có thông tin:

* độ nhám;
* chi tiết bề mặt;
* độ sâu.

---

# 9. Roughness Map

Roughness quyết định bề mặt **bóng hay nhám**.

```text
Roughness thấp
     ↓
Bề mặt bóng
     ↓
Reflection rõ

Roughness cao
     ↓
Bề mặt nhám
     ↓
Reflection tán xạ
```

Thông thường:

```text
Black
≈ Roughness thấp
≈ bóng

White
≈ Roughness cao
≈ nhám
```

---

## Cách kết nối

```text
Roughness Texture
      │ Color
      ▼
Principled BSDF
    Roughness
```

### Color Space

Roughness là **dữ liệu**, không phải hình ảnh màu.

Do đó:

```text
Color Space = Non-Color
```

---

# 10. Điều chỉnh Roughness bằng Color Ramp

Nếu Roughness Map chưa đủ mạnh:

```text
Roughness Texture
        │
        ▼
    Color Ramp
        │
        ▼
     Roughness
```

Color Ramp cho phép remap giá trị:

```text
Texture gốc
0 ----------------------- 1

          ↓ Color Ramp

0 ------┬─────────────── 1
        ↑
điều chỉnh vùng chuyển tiếp
```

Có thể:

* tăng contrast;
* giảm contrast;
* làm vật liệu bóng hơn;
* làm vật liệu nhám hơn.

---

# 11. RGB Curves

`RGB Curves` cũng có thể dùng để điều chỉnh texture.

Ví dụ:

```text
Roughness Map
      │
      ▼
  RGB Curves
      │
      ▼
   Roughness
```

Có thể dùng để:

* làm tối map;
* làm sáng;
* tăng contrast;
* giảm contrast.

---

# 12. Color Space — phần cực kỳ quan trọng

Texture trong PBR có thể chia thành hai nhóm.

## Nhóm 1 — Dữ liệu màu

Ví dụ:

* Base Color
* Albedo
* Diffuse
* Emission Color

Dùng:

```text
sRGB
```

---

## Nhóm 2 — Dữ liệu kỹ thuật

Ví dụ:

* Roughness
* Metallic
* Normal
* Height
* Displacement
* Ambient Occlusion
* Mask

Dùng:

```text
Non-Color
```

---

## Quy tắc nhớ nhanh

```text
Ảnh dùng để NHÌN
       ↓
     sRGB

Ảnh dùng để TÍNH
       ↓
   Non-Color
```

Đây là một trong những quy tắc quan trọng nhất của PBR.

---

# 13. Normal Map

Normal Map thường có màu xanh/tím đặc trưng.

Ví dụ:

```text
┌──────────────────┐
│  Purple / Blue   │
│   Normal Map     │
└──────────────────┘
```

Nó chứa thông tin về hướng bề mặt.

---

## Không được nối trực tiếp

### ❌ Sai

```text
Normal Texture
      │
      ▼
Principled BSDF
     Normal
```

### ✅ Đúng

```text
Normal Texture
      │
      ▼
 Normal Map Node
      │
      ▼
Principled BSDF
     Normal
```

---

# 14. Cấu hình Normal Map

```text
Image Texture
Color Space:
Non-Color
      │
      ▼
Normal Map
      │
      ▼
Principled BSDF
Normal
```

Node `Normal Map` chuyển dữ liệu RGB của texture thành vector normal mà shader có thể sử dụng.

---

# 15. Strength của Normal Map

Node `Normal Map` có tham số:

```text
Strength
```

Ví dụ:

| Strength | Kết quả           |
| -------: | ----------------- |
|        0 | Không có hiệu ứng |
|      0.1 | Rất nhẹ           |
|  0.3–0.7 | Thường tự nhiên   |
|      1.0 | Mức tiêu chuẩn    |
|       >1 | Hiệu ứng mạnh     |

Trong phần lớn trường hợp nên bắt đầu trong khoảng:

```text
0.1 → 1.0
```

rồi tăng thêm chỉ khi thật sự cần.

Nếu quá cao:

```text
Normal Strength quá lớn
        ↓
Highlight bị méo
        ↓
Bề mặt trông giả
```

---

# 16. Normal Map không làm thay đổi geometry

Đây là điểm rất quan trọng.

Ví dụ mặt phẳng:

```text
Geometry thật
──────────────────

Normal Map tạo cảm giác:

_/\/\__/\/\_/\/\_
```

Nhưng silhouette thật vẫn là:

```text
──────────────────
```

Normal Map chỉ thay đổi cách ánh sáng phản ứng với bề mặt.

---

# 17. Bump Map

Bump Map thường sử dụng ảnh grayscale.

```text
Height Texture
      │
      ▼
     Bump
      │
      ▼
Principled BSDF
     Normal
```

Bump cũng không thực sự thay đổi geometry.

Có thể hiểu:

```text
Bump
≈ Height → Normal
```

---

# 18. Normal Map vs Bump Map

| Normal Map                         | Bump Map                  |
| ---------------------------------- | ------------------------- |
| Thường có màu tím/xanh             | Grayscale                 |
| Lưu vector hướng bề mặt            | Lưu thông tin độ cao      |
| Chi tiết tốt                       | Đơn giản                  |
| Ít phụ thuộc vào độ phân giải mesh | Không thay đổi mesh       |
| Không thay đổi silhouette          | Không thay đổi silhouette |

Cả hai đều là **fake surface detail**.

---

# 19. Height / Displacement Map

Displacement khác hoàn toàn với Normal.

Normal:

```text
Không đổi geometry
```

Displacement:

```text
Thay đổi geometry thật
```

Ví dụ:

### Normal

```text
Geometry
────────────────────────
```

Nhìn như:

```text
▒▒▓▒░▒▓▒▒
```

nhưng silhouette vẫn phẳng.

### Displacement

```text
Geometry thật:

___/\____/\_/\/\____
```

---

# 20. Shader Displacement

Cấu trúc cơ bản:

```text
Height Texture
Color Space: Non-Color
        │
        ▼
   Displacement
        │
        ▼
Material Output
   Displacement
```

Không đi qua `Principled BSDF`.

---

# 21. Node Displacement

Một cấu trúc phổ biến:

```text
Image Texture
      │
      ▼
Displacement
├── Height
├── Midlevel
└── Scale
      │
      ▼
Material Output
Displacement
```

### Các tham số chính

#### Midlevel

Quy định giá trị nào được coi là bề mặt gốc.

Thường:

```text
Midlevel = 0.5
```

#### Scale

Quy định mức độ displacement.

Ví dụ:

```text
Scale = 1.0
```

có thể quá mạnh.

Có thể giảm xuống:

```text
0.5
0.1
0.05
0.01
```

tùy scene scale.

---

# 22. Vì sao Displacement cần nhiều polygon?

Displacement phải di chuyển vertex thật.

Nếu mesh chỉ có:

```text
4 vertex
```

thì texture không thể tạo nhiều chi tiết.

Ví dụ:

```text
Low-poly Plane

●────────●
│        │
│        │
●────────●
```

không đủ điểm để tạo địa hình.

Sau khi subdivide:

```text
●─●─●─●─●
│ │ │ │ │
●─●─●─●─●
│ │ │ │ │
●─●─●─●─●
```

Displacement có nhiều vertex để dịch chuyển hơn.

---

# 23. Displacement phụ thuộc mật độ mesh

Có thể hình dung:

```text
Height Map
       +
Nhiều vertices
       ↓
Displacement đẹp
```

Ngược lại:

```text
Height Map
       +
Ít vertices
       ↓
Geometry thô / ít chi tiết
```

---

# 24. Bật displacement trong Material Settings

Tùy phiên bản Blender và render engine, true displacement có thể cần cấu hình phù hợp trong:

```text
Material Properties
        ↓
Settings / Surface
        ↓
Displacement
```

Một số phiên bản/workflow có các lựa chọn như:

```text
Bump Only
Displacement Only
Displacement + Bump
```

> Tên và vị trí tùy phiên bản Blender, đặc biệt giữa Eevee và Cycles.

---

# 25. Displacement bằng Modifier

Ngoài Shader Editor, có thể displacement trực tiếp geometry bằng modifier.

Quy trình:

```text
Mesh
 ↓
Subdivision
 ↓
Displace Modifier
 ↓
Texture
 ↓
Height Map
 ↓
Geometry biến dạng thật
```

---

## Các bước cơ bản

### Bước 1 — Tạo đủ polygon

Ví dụ:

```text
Plane
→ Subdivide nhiều lần
```

hoặc:

```text
Subdivision Surface
```

---

### Bước 2 — Thêm Displace Modifier

```text
Modifiers
→ Add Modifier
→ Displace
```

---

### Bước 3 — Tạo Texture Slot

Trong modifier:

```text
Texture
→ New
```

---

### Bước 4 — Gắn Height Map

Trong Texture Properties:

```text
Type
→ Image or Movie

Open
→ Height Map
```

---

### Bước 5 — Giảm Strength

Ví dụ:

```text
Strength
1.0
↓
0.1
↓
0.05
```

đến khi hình dạng hợp lý.

---

# 26. Shader Displacement vs Displace Modifier

| Shader Displacement            | Displace Modifier                 |
| ------------------------------ | --------------------------------- |
| Hoạt động khi render           | Thay đổi mesh trực tiếp           |
| Phù hợp material workflow      | Phù hợp modeling                  |
| Có thể giữ workflow procedural | Có thể apply thành geometry       |
| Cần render engine hỗ trợ       | Nhìn thấy trực tiếp trên geometry |
| Phụ thuộc subdivision          | Phụ thuộc subdivision             |

---

# 27. Normal vs Bump vs Displacement

Đây là một trong những phần quan trọng nhất của bài.

| Đặc điểm            | Normal  | Bump      | Displacement |
| ------------------- | ------- | --------- | ------------ |
| Thay đổi geometry   | ❌       | ❌         | ✅            |
| Thay đổi silhouette | ❌       | ❌         | ✅            |
| Chi phí render      | Thấp    | Thấp      | Cao          |
| Cần nhiều polygon   | Không   | Không     | Có           |
| Texture             | RGB     | Grayscale | Grayscale    |
| Chi tiết nhỏ        | Rất tốt | Tốt       | Có thể dùng  |
| Chi tiết lớn        | Hạn chế | Hạn chế   | Rất tốt      |

---

# 28. Khi nào nên dùng cái gì?

Một workflow thực tế:

```text
Chi tiết cực nhỏ
       ↓
     Normal

Chi tiết nhỏ/vừa
       ↓
      Bump

Chi tiết ảnh hưởng silhouette
       ↓
  Displacement
```

Ví dụ bức tường:

```text
Hạt nhỏ trên gạch
→ Normal/Bump

Khe giữa viên gạch
→ Normal + Height nhẹ

Gạch nhô khỏi tường rõ rệt
→ Displacement
```

---

# 29. Không nên lạm dụng Displacement

Displacement có thể rất nặng vì cần nhiều geometry.

```text
Nhiều Object
      ×
Subdivision cao
      ×
Displacement
      ↓
RAM / VRAM tăng
      ↓
Viewport chậm
      ↓
Render nặng
```

Do đó:

> Chỉ nên dùng true displacement khi hình dạng thực sự cần thay đổi silhouette hoặc cần chất lượng cận cảnh cao.

Normal Map thường cho tỷ lệ:

```text
Chất lượng
────────────
Hiệu năng
```

rất tốt.

---

# 30. Texture Resolution

Các độ phân giải thường gặp:

```text
256 × 256
512 × 512
1024 × 1024   ≈ 1K
2048 × 2048   ≈ 2K
4096 × 4096   ≈ 4K
8192 × 8192   ≈ 8K
```

---

## Không phải lúc nào 4K/8K cũng tốt hơn

Một lỗi phổ biến:

```text
"Tải texture lớn nhất"
        ↓
Nhiều texture 4K/8K
        ↓
VRAM tăng mạnh
        ↓
Scene chậm
```

---

# 31. Chọn độ phân giải theo camera

### Mid Shot

```text
Camera
   ↓

       Object

Texture không chiếm nhiều pixel
```

Thường:

```text
1K–2K
```

có thể đủ.

### Close-up

```text
Camera → █████ Object
```

có thể cần:

```text
2K–4K
```

hoặc cao hơn trong trường hợp đặc biệt.

---

# 32. Power-of-Two Texture

Các kích thước kiểu:

```text
256
512
1024
2048
4096
```

là **power of two** và rất phổ biến trong computer graphics.

Tuy nhiên, cần hiểu chính xác:

> Texture hiện đại **không bắt buộc phải luôn vuông hoặc power-of-two** trong mọi trường hợp.

Power-of-two vẫn rất hữu ích vì:

* tương thích pipeline tốt;
* mipmap thuận tiện;
* tối ưu game engine;
* quản lý texture dễ hơn.

---

# 33. Texture Scale

Nếu texture trông sai, chưa chắc shader đã sai.

Ví dụ:

```text
Texture gạch
     ↓
Scale quá lớn
     ↓
Một viên gạch phủ cả object
```

hoặc:

```text
Scale quá nhỏ
     ↓
Hàng trăm viên gạch li ti
```

Do đó trước khi chỉnh shader:

```text
Kiểm tra
│
├── UV
├── Mapping
├── Texture Scale
├── Object Scale
└── Coordinate Space
```

---

# 34. Mapping workflow cơ bản

Một setup procedural thường gặp:

```text
Texture Coordinate
       │
       ▼
    Mapping
       │
       ▼
Image Texture
       │
       ▼
   PBR Shader
```

Có thể điều chỉnh trong `Mapping`:

* Location;
* Rotation;
* Scale.

---

# 35. Shortcut xem riêng từng node

Nếu đã bật **Node Wrangler**, có thể dùng:

```text
Ctrl + Shift + Click
```

vào node để preview trực tiếp output của node đó.

Ví dụ:

```text
Ctrl + Shift + Click
        ↓
Roughness Texture
        ↓
Hiển thị Roughness trực tiếp
```

Rất hữu ích để kiểm tra:

* Roughness;
* Normal;
* Mask;
* AO;
* Height.

---

# 36. PBR Material hoàn chỉnh

Một material cơ bản:

```text
                 Base Color Texture
                 sRGB
                      │
                      ▼
                   Base Color
                      │
Roughness Texture ────┤
Non-Color             │
       │              │
       └───────────> Roughness
                      │
Metallic Texture ─────┤
Non-Color             │
       └───────────> Metallic
                      │
Normal Texture        │
Non-Color             │
       │              │
       ▼              │
   Normal Map ─────> Normal
                      │
                      ▼
               Principled BSDF
                      │
                      ▼
               Material Output
```

Nếu thêm displacement:

```text
Height Texture
Non-Color
      │
      ▼
Displacement
      │
      └─────────────────────> Material Output
                               Displacement
```

---

# 37. Color Space chuẩn

| Map            | Color Space |
| -------------- | ----------- |
| Base Color     | `sRGB`      |
| Albedo         | `sRGB`      |
| Diffuse        | `sRGB`      |
| Emission Color | `sRGB`      |
| Roughness      | `Non-Color` |
| Metallic       | `Non-Color` |
| Normal         | `Non-Color` |
| Height         | `Non-Color` |
| Displacement   | `Non-Color` |
| AO             | `Non-Color` |
| Mask           | `Non-Color` |

Quy tắc:

```text
Color Map
   ↓
sRGB

Data Map
   ↓
Non-Color
```

---

# 38. Quy trình tạo một PBR Material

```text
① Download texture
        ↓
② Giải nén + tổ chức folder
        ↓
③ Tạo Material
        ↓
④ Base Color → sRGB
        ↓
⑤ Roughness → Non-Color
        ↓
⑥ Metallic → Non-Color
        ↓
⑦ Normal → Non-Color
        ↓
⑧ Normal Map Node
        ↓
⑨ Height → Non-Color
        ↓
⑩ Bump hoặc Displacement
        ↓
⑪ Kiểm tra texture scale / UV
        ↓
⑫ Test dưới ánh sáng thực
        ↓
⑬ Lưu vào Material Library
```

---

# 39. Quy trình thư viện material

Sau khi hoàn thiện một material:

```text
PBR Texture
     ↓
Shader Setup
     ↓
Test trên Shader Ball
     ↓
Đặt tên rõ ràng
     ↓
Render Preview
     ↓
Material Library
```

Ví dụ naming:

```text
MAT_Brick_Red_Old
MAT_Brick_Black_Painted
MAT_Concrete_Rough
MAT_Wood_Oak_Dark
MAT_Metal_Steel_Brushed
```

---

# 40. Không nên làm thư viện quá lớn

Không cần lưu hàng chục material gần giống nhau:

```text
Brick_01
Brick_02
Brick_03
Brick_04
Brick_05
...
Brick_40
```

nếu chúng chỉ khác một chút.

Có thể tạo:

```text
MAT_Brick_Base
```

và thay đổi:

* hue;
* roughness;
* dirt;
* saturation;
* texture variation;

tùy project.

---

# 41. Những lỗi phổ biến

### ❌ Lỗi 1 — Roughness để sRGB

```text
Roughness
Color Space = sRGB
```

Có thể làm giá trị roughness bị diễn giải sai.

### ✅ Nên dùng

```text
Non-Color
```

---

### ❌ Lỗi 2 — Normal nối trực tiếp

```text
Normal Texture
      ↓
Principled Normal
```

### ✅ Đúng

```text
Normal Texture
      ↓
Normal Map
      ↓
Principled Normal
```

---

### ❌ Lỗi 3 — Normal Strength quá cao

```text
Strength = 5
```

có thể khiến bề mặt bị méo giả tạo.

---

### ❌ Lỗi 4 — Displacement nhưng mesh quá ít polygon

```text
Plane 4 vertices
     +
Displacement
```

→ không đủ geometry.

---

### ❌ Lỗi 5 — Dùng Displacement cho mọi thứ

Kết quả:

```text
VRAM ↑
RAM ↑
Render Time ↑
Viewport FPS ↓
```

---

### ❌ Lỗi 6 — Luôn tải texture 4K/8K

Không mang lại lợi ích nếu object chỉ xuất hiện nhỏ trong khung hình.

---

### ❌ Lỗi 7 — Shader trông sai và chỉnh thông số ngay

Trước tiên kiểm tra:

```text
UV
↓
Mapping
↓
Scale
↓
Color Space
↓
Shader
```

---

# 42. Workflow tối ưu thực tế

Một material có thể kết hợp cả ba kỹ thuật:

```text
          PBR Material
              │
       ┌──────┼───────┐
       │      │       │
       ▼      ▼       ▼
     Normal  Bump  Displacement
       │      │       │
       ▼      ▼       ▼
Micro detail Medium Large detail
```

Ví dụ đá:

```text
Normal
→ hạt đá cực nhỏ

Bump
→ vết xước / lỗ nhỏ

Displacement
→ khối đá nhô lõm lớn
```

Đây thường hiệu quả hơn nhiều so với đẩy toàn bộ chi tiết sang true displacement.

---

# 43. Sơ đồ tổng kết

```text
                  PBR TEXTURES
                       │
       ┌───────────────┼─────────────────┐
       │               │                 │
       ▼               ▼                 ▼
   COLOR DATA       VALUE DATA       VECTOR DATA
       │               │                 │
       ▼               ▼                 ▼
 Base Color        Roughness           Normal
 Diffuse           Metallic              │
 Albedo            Height                ▼
       │            AO / Mask        Normal Map
       ▼               │                 │
     sRGB              ▼                 ▼
                    Non-Color           Normal
                       │
              ┌────────┴────────┐
              │                 │
              ▼                 ▼
             Bump          Displacement
              │                 │
              ▼                 ▼
        Fake Relief       Real Geometry
```

---

# 44. Ghi nhớ nhanh

> **Base Color = màu gì?**

> **Roughness = bóng hay nhám?**

> **Metallic = kim loại hay phi kim?**

> **Normal = ánh sáng nên phản ứng với các chi tiết nhỏ như thế nào?**

> **Height/Bump = vùng nào cao, vùng nào thấp nhưng không nhất thiết đổi geometry?**

> **Displacement = hình học thật phải lồi/lõm bao nhiêu?**

Và:

```text
Base Color → sRGB

Roughness
Metallic
Normal
Height
Displacement
      ↓
  Non-Color
```

---

# 45. Bài thực hành

Tạo một material tường gạch PBR hoàn chỉnh.

### Yêu cầu

* [ ] Base Color Map.
* [ ] Roughness Map.
* [ ] Normal Map.
* [ ] Height/Displacement Map.
* [ ] Base Color đặt `sRGB`.
* [ ] Các data map đặt `Non-Color`.
* [ ] Normal đi qua `Normal Map`.
* [ ] Điều chỉnh Roughness bằng `Color Ramp` nếu cần.
* [ ] Thử Normal Strength từ `0.2 → 1.0`.
* [ ] So sánh Normal với true Displacement.
* [ ] Kiểm tra texture scale.
* [ ] Render preview trên Shader Ball.
* [ ] Lưu material vào Material Library.

---

# 46. Checklist cuối bài

* [ ] Hiểu cấu trúc của một bộ PBR texture.
* [ ] Gắn đúng từng texture map.
* [ ] Base Color sử dụng `sRGB`.
* [ ] Roughness sử dụng `Non-Color`.
* [ ] Metallic sử dụng `Non-Color`.
* [ ] Normal sử dụng `Non-Color`.
* [ ] Normal Map đi qua node `Normal Map`.
* [ ] Phân biệt được Normal, Bump và Displacement.
* [ ] Biết Displacement thật cần đủ polygon.
* [ ] Không lạm dụng true displacement.
* [ ] Chọn độ phân giải texture dựa trên khoảng cách camera.
* [ ] Kiểm tra UV và texture scale trước khi kết luận shader sai.
* [ ] Biết preview riêng texture bằng Node Wrangler.
* [ ] Material hoàn chỉnh được đặt tên và lưu vào library.
