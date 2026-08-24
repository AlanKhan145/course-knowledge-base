# 032 — Create Advanced Material

| Thuộc tính        | Nội dung                                                               |
| ----------------- | ---------------------------------------------------------------------- |
| **Phần**          | 03 — Materials                                                         |
| **Thời lượng**    | 14:22                                                                  |
| **Chủ đề**        | Tích hợp PBR, procedural, mask, bump và displacement                   |
| **Bài thực hành** | Tạo material phức tạp cho một chiếc bình                               |
| **Kết quả**       | Material nhiều lớp, có variation màu, bụi bề mặt, bump và displacement |

---

## 1. Mục tiêu bài học

Sau bài này, có thể:

* Xây dựng một material gồm nhiều lớp thay vì chỉ dùng một texture đơn.
* Kết hợp **Image Texture + procedural mask**.
* Dùng **Box Projection / triplanar-style mapping** để hạn chế phụ thuộc vào UV.
* Tạo variation màu theo chiều cao của vật thể.
* Tạo mask bụi dựa trên hướng của bề mặt.
* Điều khiển riêng:

  * Base Color
  * Roughness
  * Bump
  * Displacement
* Phân biệt texture màu và texture dữ liệu.
* Tổ chức node tree bằng **Frame + Label**.
* Tạo material có thể tiếp tục chỉnh sửa và tái sử dụng.

---

# 2. Ý tưởng tổng thể của material

Chiếc bình trong bài không được tạo từ một shader duy nhất mà từ khoảng **3 lớp material**.

### Layer 1 — Base Material

Lớp vật liệu chính:

* texture đất sét;
* màu nền;
* roughness;
* bump.

### Layer 2 — Color Variation

Một lớp màu thứ hai xuất hiện không đều ở phần dưới hoặc một vùng nhất định của bình.

Mask được tạo từ:

* Gradient;
* Noise/Image Texture;
* Mix/Subtract;
* ColorRamp.

### Layer 3 — Dust / Faded Surface

Một lớp sáng hơn giống:

* bụi;
* bề mặt bạc màu;
* phần bị ánh sáng tác động lâu ngày.

Mask được lấy từ **Normal của Geometry**.

Cuối cùng thêm:

### Surface Detail

* Roughness variation
* Bump
* Displacement

---

# 3. Sơ đồ material tổng quát

```text
                    ADVANCED VASE MATERIAL

          ┌──────────────────────────────┐
          │        BASE MATERIAL         │
          │                              │
Generated│ → Mapping → Image Texture    │
          │                 ├→ BaseColor │
          │                 ├→ Roughness │
          │                 └→ Bump      │
          └──────────────┬───────────────┘
                         │
                         ▼
                    Mix Shader
                         ▲
                         │ Mask 1
          ┌──────────────┴───────────────┐
          │      GRADIENT VARIATION      │
          │                              │
          │ Gradient                     │
          │    + Texture Variation       │
          │    + Subtract                │
          │    + ColorRamp               │
          └──────────────┬───────────────┘
                         │
                         ▼
                    Mix Shader
                         ▲
                         │ Mask 2
          ┌──────────────┴───────────────┐
          │          DUST LAYER          │
          │                              │
Geometry Normal → Separate Color → Blue
                         │
                    ColorRamp
                         │
                    + Texture
                         │
                      Subtract
          └──────────────┬───────────────┘
                         │
                         ▼
                    Final Shader
                         │
                         ▼
                 Material Output


Additional Surface Detail:

Texture → Bump ───────────────→ Normal

Texture → Displacement ───────→ Material Output
```

---

# 4. Chuẩn bị scene

Sử dụng model chiếc bình đã tạo trong các bài modeling trước.

Chuẩn bị thêm:

* reference của chiếc bình;
* texture đất sét;
* một số texture grayscale để tạo:

  * roughness;
  * bump;
  * mask;
  * displacement.

Chuyển workspace sang:

**Shading**

---

# 5. Thiết lập môi trường xem material

Để đánh giá vật liệu chính xác hơn:

* bật **Rendered View**;
* sử dụng **Cycles**;
* nếu có GPU, chọn GPU để render nhanh hơn;
* bật **Scene World** khi cần;
* sử dụng studio/environment có màu trung tính.

Mục tiêu là tránh ánh sáng có màu quá mạnh làm sai cảm nhận về material.

---

# 6. Tạo material mới

Chọn chiếc bình.

Tạo material mới:

```text
Vase_P
```

Trong đó:

```text
P = Procedural
```

Đây là một cách naming giúp phân biệt:

```text
Vase_P       → procedural
Vase_PBR     → PBR texture
Vase_Mix     → combined material
```

---

# 7. Thiết lập Base Color

Thêm:

```text
Image Texture
```

Load texture, ví dụ:

```text
Clay Diffuse
```

Kết nối:

```text
Image Texture
      │
      ▼
Base Color
      │
      ▼
Principled BSDF
```

---

# 8. Vấn đề UV và texture stretching

Nếu kết nối texture trực tiếp, có thể xuất hiện:

* texture kéo dài;
* UV không phù hợp;
* đường seam;
* pattern không đồng đều.

Trong bài, giải pháp được sử dụng gần với **triplanar / box projection**.

---

# 9. Cube Projection

Vào:

```text
Tab
→ Edit Mode
→ U
→ Cube Projection
```

Sau đó trong Image Texture chuyển:

```text
Projection:
Flat
↓
Box
```

Box Projection chiếu texture từ nhiều hướng lên model.

Ưu điểm:

* hạn chế stretching;
* phù hợp với procedural workflow;
* không cần UV quá chính xác cho một số vật liệu tự nhiên.

---

# 10. Dùng Generated Coordinates

Chọn Image Texture rồi nhấn:

```text
Ctrl + T
```

Node Wrangler sẽ tạo:

```text
Texture Coordinate
        │
        ▼
Mapping
        │
        ▼
Image Texture
```

Thay vì:

```text
UV
```

sử dụng:

```text
Generated
```

Sơ đồ:

```text
Texture Coordinate
        │
   Generated
        │
        ▼
     Mapping
        │
        ▼
Image Texture
Projection = Box
        │
        ▼
Principled BSDF
```

---

# 11. Xóa seam bằng Blend

Box Projection có thể xuất hiện đường nối giữa các hướng chiếu.

Trong Image Texture, tăng:

```text
Blend
```

Nó sẽ làm mềm vùng chuyển giữa các projection.

```text
Projection A ─┐
              ├─ Blend → Texture liên tục
Projection B ─┤
              │
Projection C ─┘
```

Không nên tăng Blend quá cao vì texture có thể trở nên quá mềm.

---

# 12. Điều chỉnh scale texture

Quan sát pattern trên bình.

Nếu pattern bị kéo dọc theo Z:

```text
Mapping
→ Scale Z
```

Điều chỉnh riêng trục Z.

Nếu muốn texture lớn hơn:

```text
giảm Scale
```

Nếu muốn texture nhỏ và lặp nhiều hơn:

```text
tăng Scale
```

Quan hệ cơ bản:

```text
Mapping Scale ↑
      ↓
Pattern nhỏ hơn

Mapping Scale ↓
      ↓
Pattern lớn hơn
```

---

# 13. Thêm Subdivision Surface

Để bề mặt bình đủ mượt:

```text
Subdivision Surface
```

Ví dụ:

```text
Levels Viewport: 2
```

Sau này nếu dùng displacement thật, có thể phải tăng subdivision.

---

# 14. Tạo Roughness Map

Không nên để toàn bộ chiếc bình có cùng roughness.

Duplicate Image Texture:

```text
Shift + D
```

Chọn texture grayscale phù hợp.

Kết nối:

```text
Generated
   │
Mapping
   │
Image Texture
   │
   ▼
Roughness
```

---

## Color Space

Texture dùng cho roughness phải đặt:

```text
Color Space
→ Non-Color
```

Bởi vì Roughness chứa **data**, không phải màu.

---

# 15. Chia sẻ Vector giữa nhiều texture

Không cần tạo Texture Coordinate và Mapping mới cho từng texture.

Có thể dùng chung:

```text
Texture Coordinate
        │
        ▼
     Mapping
       │ │ │
       │ │ └────→ Bump Texture
       │ └──────→ Roughness Texture
       └────────→ Base Color Texture
```

Trong Blender có thể tạo **Reroute** để node tree sạch hơn.

Ví dụ:

```text
Generated
   │
Mapping
   │
   ●────────────┬─────────────┐
                │             │
                ▼             ▼
           Base Color      Roughness
```

---

# 16. Tạo Bump

Nếu texture chỉ là ảnh grayscale thì nó **không phải Normal Map**.

Không kết nối thẳng vào Normal.

Sai:

```text
Grayscale Texture
      │
      ▼
Normal
```

Đúng:

```text
Grayscale Texture
      │
      ▼
Height
      │
    Bump
      │
      ▼
Normal
```

---

## Thiết lập

```text
Image Texture
Color Space = Non-Color
      │
      ▼
Bump Height
      │
      ▼
Principled BSDF Normal
```

Điều chỉnh:

* Strength
* Distance

Không nên dùng bump quá mạnh.

---

# 17. Base Material sau bước đầu

Sau khi hoàn thành, Layer 1 có cấu trúc:

```text
                     ┌→ Base Color
Generated → Mapping → Texture
                     │
                     ├→ Roughness
                     │
                     └→ Bump
                           │
                           ▼
                         Normal
```

Đây là vật liệu nền cho chiếc bình.

---

# 18. Layer 2 — Tạo Gradient Material

Mục tiêu tiếp theo:

Tạo một vùng màu chuyển từ:

```text
sáng
 ↓
tối
```

theo chiều cao chiếc bình.

Duplicate shader/material setup:

```text
Shift + D
```

Sau đó trộn hai shader.

---

# 19. Tạo gradient mask

Có thể sử dụng:

```text
Gradient Texture
```

Kết nối qua Mapping.

```text
Texture Coordinate
        │
        ▼
Mapping
        │
        ▼
Gradient Texture
        │
        ▼
Mask
```

Điều chỉnh Rotation trong Mapping để gradient chạy đúng chiều trên bình.

Ví dụ:

```text
Rotation Y ≈ 90°
```

tùy orientation của model.

---

# 20. Di chuyển gradient

Dùng Location trong Mapping để di chuyển gradient.

Mục đích:

```text
Top
████████████

Transition
▒▒▒▒▒▒▒▒▒▒▒▒

Bottom
░░░░░░░░░░░░
```

Gradient quyết định vùng Layer 2 xuất hiện.

---

# 21. Làm cạnh gradient không quá hoàn hảo

Gradient thuần túy thường quá sạch:

```text
──────────────
```

Trong vật liệu thật, cạnh thường irregular:

```text
~──~~─~~~──~─
```

Vì vậy kết hợp gradient với một texture khác.

---

# 22. Gradient + Noise/Texture

Sơ đồ:

```text
Gradient ───────────→ A
                     │
Texture Variation ─→ Factor/Mask
                     │
                     ▼
                  Mix Color
                     │
                  Subtract
                     │
                     ▼
                    Mask
```

Trong bài sử dụng chế độ gần với:

```text
Subtract
```

để texture phá vỡ đường gradient.

---

# 23. Kiểm soát mask bằng ColorRamp

Sau khi mix, thêm:

```text
ColorRamp
```

```text
Gradient
   +
Texture
   │
Subtract
   │
ColorRamp
   │
   ▼
Final Mask
```

ColorRamp giúp:

* tăng contrast;
* giới hạn vùng transition;
* làm mask sắc hơn;
* kiểm soát chính xác vùng blend.

---

# 24. Invert mask

Nếu Layer A/B bị ngược:

Thêm:

```text
Invert Color
```

Sơ đồ:

```text
Mask
 │
 ▼
Invert Color
 │
 ▼
Mix Shader
```

Ví dụ:

```text
Trước:
Top    = Material A
Bottom = Material B

Invert:

Top    = Material B
Bottom = Material A
```

---

# 25. Debug mask bằng màu mạnh

Một kỹ thuật rất hữu ích khi làm material:

Tạm thời đổi một shader thành màu dễ thấy, ví dụ:

```text
Bright Blue
```

Khi đó dễ nhận biết vùng mask:

```text
████ Blue   → Layer B
░░░░ Base   → Layer A
```

Sau khi mask đúng, trả lại màu thật.

Đây là cách debug material rất hiệu quả.

---

# 26. Tạo variation màu cho Layer 2

Thay vì Layer 2 chỉ có một màu đồng nhất, tiếp tục dùng texture làm mask giữa hai màu.

```text
Texture
   │
   ▼
Mix Color
 ┌───────┴───────┐
 │               │
Color A       Color B
Dark Yellow   Light Yellow
```

Sau đó:

```text
Mix Color
    │
    ▼
Base Color
```

Kết quả:

```text
Layer 2
├─ vùng vàng nhạt
├─ vùng vàng đậm
└─ variation tự nhiên
```

---

# 27. Giảm saturation

Nếu màu quá mạnh:

Giảm:

```text
Saturation
```

hoặc chỉnh màu gần với:

```text
off-white
cream
beige
clay
```

Material photorealistic thường không sử dụng màu RGB cực kỳ bão hòa trừ khi reference thực sự như vậy.

---

# 28. Điều chỉnh màu bằng Curves

Có thể dùng:

```text
RGB Curves
```

để thay đổi:

* Red;
* Green;
* Blue;
* contrast tổng thể.

Ví dụ:

```text
Texture
   │
RGB Curves
   │
Base Color
```

Hữu ích khi texture đúng pattern nhưng màu chưa giống reference.

---

# 29. Roughness riêng cho Layer 2

Layer 2 cũng nên có roughness riêng.

Sơ đồ:

```text
Roughness Texture
       │
   ColorRamp
       │
       ▼
   Roughness
```

ColorRamp giúp:

```text
đen   → smooth
trắng → rough
```

---

# 30. Bump riêng cho Layer 2

Tương tự:

```text
Texture
Color Space = Non-Color
       │
       ▼
      Bump
       │
       ▼
     Normal
```

Như vậy hai lớp không chỉ khác màu mà còn khác phản xạ ánh sáng.

---

# 31. Layer 3 — Dust Material

Tiếp theo tạo một lớp giống:

* bụi;
* tro;
* vùng bị phai;
* deposition;
* weathering.

Điểm đặc biệt:

Lớp này chủ yếu xuất hiện trên những bề mặt **hướng lên trên**.

---

# 32. Sử dụng Geometry Normal

Thêm node:

```text
Geometry
```

Sử dụng output:

```text
Normal
```

Normal chứa vector:

```text
X
Y
Z
```

Ta quan tâm đến thành phần Z vì nó thể hiện bề mặt hướng lên trên.

---

# 33. Separate Color

Thêm:

```text
Separate Color
```

Kết nối:

```text
Geometry
   │
 Normal
   │
   ▼
Separate Color
```

Normal thường được biểu diễn bằng RGB tương ứng với XYZ:

```text
R → X
G → Y
B → Z
```

Vì vậy lấy:

```text
Blue / B
```

để tạo mask phụ thuộc hướng Z.

---

# 34. Dust Mask cơ bản

```text
Geometry
   │
 Normal
   │
Separate Color
   │
 Blue
   │
ColorRamp
   │
   ▼
Dust Mask
```

ColorRamp giúp xác định góc nào mới nhận bụi.

---

# 35. Làm Dust Mask tự nhiên hơn

Nếu chỉ dùng Normal:

```text
████████
████████
```

mask sẽ quá đều.

Kết hợp thêm texture:

```text
Geometry Normal
      │
Separate Color
      │
ColorRamp
      │
      ├──────────────→ A
      │
Texture Variation ──→ B
                      │
                   Subtract
                      │
                      ▼
                  Dust Mask
```

Kết quả:

```text
████▒▒████░████▒▒
```

thay vì một đường đồng đều.

---

# 36. Chọn texture phù hợp cho bụi

Tránh texture có:

* scratch quá rõ;
* pattern lặp;
* đường nét không liên quan vật liệu.

Ưu tiên:

* noise mềm;
* grunge nhẹ;
* variation tần số trung bình;
* không có feature quá đặc trưng.

---

# 37. Dust Shader

Tạo một shader sáng hơn.

Ví dụ:

```text
Base Color:
White
+
Slight Yellow / Grey
```

Mục tiêu tạo cảm giác:

```text
gray dust
sun fading
dry clay deposit
```

Không nhất thiết phải là trắng hoàn toàn.

---

# 38. Mix Dust với material trước đó

Sơ đồ:

```text
Base + Layer2
       │
       ├──────────────┐
       │              │
       │          Dust Shader
       │              │
       └──── Mix Shader
                 ▲
                 │
             Dust Mask
```

Kết quả:

```text
Top Surface
    ↑
Dust nhiều hơn

Vertical Surface
    ↑
Dust ít hơn
```

---

# 39. Sơ đồ ba lớp hoàn chỉnh

```text
                BASE MATERIAL
                     │
                     ▼
                 Mix Shader
                  ▲      │
                  │      │
          Gradient Mask  │
                         ▼
                   LAYER 2
                         │
                         ▼
                     Mix Shader
                      ▲      │
                      │      │
                  Dust Mask  │
                             ▼
                        DUST LAYER
                             │
                             ▼
                       FINAL SHADER
```

---

# 40. Thêm Displacement

Bump chỉ thay đổi shading.

Displacement có thể thực sự thay đổi geometry.

Thêm:

```text
Displacement
```

Sơ đồ:

```text
Texture
Color Space = Non-Color
      │
      ▼
    Height
      │
Displacement
      │
      ▼
Material Output
Displacement
```

---

# 41. Material Settings

Để displacement hoạt động đúng, tùy Blender/version/render engine, material phải cho phép displacement thực.

Trong workflow của bài, chuyển từ:

```text
Bump Only
```

sang dạng kết hợp:

```text
Displacement and Bump
```

> Tên tùy chọn có thể khác nhau giữa các phiên bản Blender.

---

# 42. Điều chỉnh Displacement Scale

Thông số cực kỳ quan trọng:

```text
Scale
```

Nếu Scale quá lớn:

```text
geometry bị phồng
pixelated
surface bị phá
silhouette sai
```

Nếu Scale phù hợp:

```text
micro relief
+
surface detail
+
realistic shadow
```

Nên bắt đầu rất nhỏ rồi tăng dần.

---

# 43. Vì sao displacement bị pixelated?

Nếu displacement xuất hiện dạng khối:

Nguyên nhân thường là:

```text
Geometry không đủ subdivision
```

Ví dụ:

```text
Low-poly
   │
Displacement
   ▼
██████
blocky
```

Giải pháp:

```text
Subdivision Surface
        │
        ▼
High-density mesh
        │
        ▼
Displacement
```

---

# 44. Adaptive Subdivision

Trong workflow Cycles có thể sử dụng subdivision thích ứng khi phiên bản Blender/render setup hỗ trợ.

Ý tưởng:

```text
Camera gần
   ↓
Subdivision cao

Camera xa
   ↓
Subdivision thấp
```

Điều này giúp displacement giữ detail mà không cần chia toàn bộ mesh quá nặng.

---

# 45. Shade Smooth

Sau khi tăng subdivision/displacement:

```text
Right Click
→ Shade Smooth
```

để cải thiện shading.

Tuy nhiên:

> Shade Smooth không sửa được geometry quá ít polygon.

Nếu silhouette vẫn blocky, phải tăng subdivision thực tế.

---

# 46. Bump và Displacement nên dùng cùng nhau thế nào?

Một chiến lược tốt:

```text
Large/Medium Detail
      ↓
Displacement

Small Detail
      ↓
Bump
```

Ví dụ:

```text
bề mặt đất sét gồ ghề lớn
→ Displacement

lỗ nhỏ / noise li ti
→ Bump
```

Không nên dùng displacement cho tất cả micro-detail vì rất tốn geometry.

---

# 47. Color Space trong material phức tạp

Đây là phần cực kỳ quan trọng.

### Texture màu

Ví dụ:

* Diffuse
* Albedo
* Base Color

Dùng:

```text
sRGB
```

### Texture dữ liệu

Ví dụ:

* Roughness
* Metallic
* Height
* Bump
* Displacement
* Mask

Dùng:

```text
Non-Color
```

Sơ đồ:

```text
IMAGE TEXTURES
│
├── Color information
│      └── sRGB
│
└── Data information
       └── Non-Color
```

---

# 48. Tổ chức node tree

Material phức tạp rất nhanh trở nên khó đọc.

Không nên để:

```text
node → node → node → node → node
        ↘ node ↗
node ──────→ node
```

mà không có cấu trúc.

Sử dụng:

```text
Frame
Label
Reroute
Node Group
```

---

# 49. Tạo Frame

Chọn các node liên quan rồi tạo Frame.

Có thể đặt tên:

```text
BASE MATERIAL
```

```text
GRADIENT MASK
```

```text
COLOR VARIATION
```

```text
DUST MASK
```

```text
ROUGHNESS
```

```text
BUMP
```

```text
DISPLACEMENT
```

---

# 50. Node tree production-ready đề xuất

```text
┌─────────────────────────────────┐
│ 01_COORDINATES                  │
│ Generated → Mapping             │
└───────────────┬─────────────────┘
                │
       ┌────────┴─────────┐
       │                  │
       ▼                  ▼

┌───────────────┐   ┌────────────────┐
│ 02_BASE       │   │ 03_VARIATION   │
│ Base Color    │   │ Gradient       │
│ Roughness     │   │ Noise          │
│ Bump          │   │ ColorRamp      │
└───────┬───────┘   └────────┬───────┘
        │                    │
        └────────┬───────────┘
                 ▼
             Mix Shader
                 │
                 ▼

        ┌───────────────────┐
        │ 04_DUST           │
        │ Geometry Normal   │
        │ Separate Color    │
        │ Noise             │
        │ ColorRamp         │
        └────────┬──────────┘
                 │
                 ▼
             Mix Shader
                 │
                 ▼

        ┌───────────────────┐
        │ 05_DISPLACEMENT   │
        │ Height Texture    │
        │ Displacement      │
        └────────┬──────────┘
                 │
                 ▼
          Material Output
```

---

# 51. Nguyên tắc debug material

Khi material trở nên phức tạp, không nên chỉnh tất cả cùng lúc.

Debug theo thứ tự:

```text
1. Coordinates
       ↓
2. Base Color
       ↓
3. Roughness
       ↓
4. Bump
       ↓
5. Mask 1
       ↓
6. Layer 2
       ↓
7. Mask Dust
       ↓
8. Dust Shader
       ↓
9. Displacement
```

---

# 52. Kiểm tra từng mask riêng

Có thể tạm nối mask vào Base Color:

```text
Mask
 │
 ▼
Base Color
```

Nếu thấy:

```text
White = vùng chịu ảnh hưởng
Black = vùng không chịu ảnh hưởng
```

thì dễ kiểm tra hơn rất nhiều.

Ví dụ:

```text
Mask Preview

██████████ White
████▒▒▒▒▒▒
▒▒▒▒░░░░░░
░░░░░░░░░░ Black
```

Sau khi mask đúng mới đưa nó vào Mix Shader.

---

# 53. Nguyên tắc Scale

Material procedural chỉ thực sự tái sử dụng tốt khi scale ổn định.

Nếu object khác có kích thước khác hoàn toàn:

```text
Noise Scale
Bump Size
Displacement Size
```

có thể thay đổi cảm nhận vật liệu.

Vì vậy trước khi đánh giá shader:

```text
Ctrl + A
→ Apply Scale
```

khi phù hợp với workflow.

Sau đó kiểm tra lại Mapping.

---

# 54. Đánh giá material dưới nhiều ánh sáng

Một material đẹp trong studio chưa chắc đẹp trong scene thật.

Nên kiểm tra:

```text
Neutral Studio
      ↓
HDRI
      ↓
Scene Lighting
      ↓
Strong Side Light
      ↓
Close-up Camera
```

Đặc biệt:

* roughness;
* bump;
* displacement

phải được đánh giá dưới ánh sáng xiên.

---

# 55. Workflow hoàn chỉnh

```text
Reference
   ↓
Model / Apply Scale
   ↓
Subdivision
   ↓
Generated Coordinates
   ↓
Mapping
   ↓
Box Projection
   ↓
Base Color
   ↓
Roughness
   ↓
Bump
   ↓
Gradient Mask
   ↓
Layer 2
   ↓
Geometry Normal
   ↓
Dust Mask
   ↓
Layer 3
   ↓
Displacement
   ↓
Shade Smooth
   ↓
Organize Node Tree
   ↓
Test Lighting
   ↓
Save Material Library
```

---

# 56. Cấu trúc material đề xuất

```text
VASE_ADVANCED
│
├── Coordinates
│   ├── Generated
│   └── Mapping
│
├── Base Material
│   ├── Clay Color
│   ├── Roughness
│   └── Bump
│
├── Gradient Variation
│   ├── Gradient Texture
│   ├── Texture Variation
│   ├── Subtract
│   ├── Invert
│   └── ColorRamp
│
├── Secondary Material
│   ├── Color Variation
│   ├── Roughness
│   └── Bump
│
├── Dust
│   ├── Geometry Normal
│   ├── Separate Color Z
│   ├── ColorRamp
│   └── Noise Variation
│
├── Displacement
│   ├── Height Texture
│   └── Displacement
│
└── Material Output
```

---

# 57. Những lỗi thường gặp

| Lỗi                    | Nguyên nhân                  | Cách xử lý                 |
| ---------------------- | ---------------------------- | -------------------------- |
| Texture bị kéo         | UV/coordinates không phù hợp | Generated + Box Projection |
| Có seam rõ             | Box Projection chưa blend    | Tăng Blend                 |
| Roughness sai          | Texture đang để sRGB         | Chuyển sang Non-Color      |
| Bump quá mạnh          | Strength/Distance quá cao    | Giảm Bump                  |
| Normal nhìn sai        | Grayscale nối thẳng Normal   | Dùng Bump node             |
| Gradient quá sạch      | Chỉ dùng Gradient Texture    | Mix thêm noise/grunge      |
| Mask bị ngược          | Black/White đảo vùng         | Dùng Invert                |
| Dust phủ toàn bộ model | Normal mask quá rộng         | Siết bằng ColorRamp        |
| Displacement dạng khối | Mesh thiếu subdivision       | Tăng Subdivision           |
| Bề mặt bị méo          | Displacement Scale quá lớn   | Giảm Scale                 |
| Material quá bão hòa   | Màu procedural quá mạnh      | Giảm Saturation            |
| Node tree khó debug    | Không có frame/label         | Tổ chức lại node           |

---

# 58. Kiến thức quan trọng rút ra

### 1. Material thực tế thường gồm nhiều lớp

Không nên nghĩ:

```text
Object
→ 1 Texture
→ Finished
```

Mà nên nghĩ:

```text
Base Material
+
Surface Variation
+
Wear
+
Dust
+
Micro Detail
+
Displacement
```

---

### 2. Mask là trung tâm của material nâng cao

Shader phức tạp thực chất là:

```text
Material A
+
Material B
+
Mask
```

Mask càng tốt thì kết quả blend càng tự nhiên.

---

### 3. Procedural không có nghĩa là chỉ dùng Noise Texture

Trong bài này workflow kết hợp:

```text
Image Texture
+
Generated Coordinates
+
Gradient
+
Geometry Normal
+
ColorRamp
+
Mix
```

Đây là một dạng **hybrid procedural workflow**.

---

### 4. Variation nên có nhiều cấp độ

Một vật liệu tự nhiên thường có:

```text
Macro Variation
↓
Gradient màu lớn

Medium Variation
↓
patches / dirt

Micro Variation
↓
roughness / bump
```

---

# 59. Công thức material photorealistic cơ bản

```text
Photorealism
    =
Correct Base Color
    +
Roughness Variation
    +
Surface Micro Detail
    +
Large-Scale Variation
    +
Logical Wear/Dust
    +
Correct Lighting
```

Không phải:

```text
Photorealism = Bump thật mạnh
```

---

# 60. Checklist cuối bài

* [ ] Model có scale hợp lý.
* [ ] Material có tên rõ ràng.
* [ ] Base Color texture sử dụng đúng color space.
* [ ] Roughness đặt **Non-Color**.
* [ ] Height/Bump đặt **Non-Color**.
* [ ] Displacement map đặt **Non-Color**.
* [ ] Không nối grayscale height map trực tiếp vào Normal.
* [ ] Box Projection không còn seam rõ.
* [ ] Mapping không làm texture bị stretching.
* [ ] Base material có variation roughness.
* [ ] Có bump detail nhẹ.
* [ ] Gradient Mask có variation, không quá hoàn hảo.
* [ ] Layer 2 có màu và roughness riêng.
* [ ] Dust Mask phụ thuộc hướng bề mặt hợp lý.
* [ ] Dust không phủ đều toàn model.
* [ ] Displacement không phá silhouette.
* [ ] Mesh có đủ subdivision cho displacement.
* [ ] Node tree có **Frame + Label**.
* [ ] Các kết nối dài có Reroute.
* [ ] Material được kiểm tra dưới nhiều điều kiện ánh sáng.
* [ ] Có bản sao lưu trong **Material Library**.

---

## Tóm tắt

Bài 032 kết hợp gần như toàn bộ kiến thức của phần **Materials** vào một material hoàn chỉnh:

```text
PBR / Image Texture
        +
Procedural Coordinates
        +
Box Projection
        +
Gradient
        +
Noise / Grunge
        +
ColorRamp
        +
Masks
        +
Geometry Normal
        +
Roughness
        +
Bump
        +
Displacement
        ↓
ADVANCED MATERIAL
```

Điểm quan trọng nhất không phải là tạo đúng chiếc bình giống hệt reference, mà là hiểu cách **xây material theo từng layer có nhiệm vụ riêng**. Khi Base, Mask, Roughness, Bump và Displacement được tách thành những khối rõ ràng, material sẽ dễ chỉnh, dễ debug và có thể tái sử dụng cho nhiều asset khác nhau.

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
