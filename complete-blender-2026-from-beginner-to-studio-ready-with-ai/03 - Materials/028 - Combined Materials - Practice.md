# 028 — Combined Materials

| Thuộc tính     | Nội dung                               |
| -------------- | -------------------------------------- |
| **Phần**       | 03 — Materials                         |
| **Thời lượng** | 6:26                                   |
| **Chủ đề**     | Kết hợp nhiều shader và material masks |

## Mục tiêu

Sau bài này, bạn cần:

* Hiểu cách **kết hợp hai shader** trong cùng một material.
* Dùng **Mix Shader** để chuyển đổi giữa hai loại bề mặt.
* Dùng **mask đen–trắng** để quyết định shader nào xuất hiện ở từng vùng.
* Tạo mask bằng **Noise Texture**, **Gradient Texture** và **ColorRamp**.
* Kết hợp nhiều mask để tạo vùng chuyển tiếp tự nhiên hơn.
* Phân biệt rõ:

  * **Mix Shader** → trộn shader.
  * **Mix Color** → trộn dữ liệu màu/mask.
* Ứng dụng workflow vào các vật liệu như:

  * kim loại + sơn;
  * khô + ướt;
  * sạch + bẩn;
  * sơn + rỉ sét;
  * bùn + vật liệu gốc.

---

# 1. Combined Material là gì?

Một material không nhất thiết chỉ có một kiểu bề mặt.

Trong thực tế, một vật thể có thể đồng thời có:

* vùng khô và vùng ướt;
* vùng sơn và vùng kim loại lộ ra;
* vùng sạch và vùng bám bụi;
* vùng mới và vùng bị rỉ;
* vùng bóng và vùng nhám.

Trong Blender, ta có thể tạo các bề mặt này bằng cách tạo **nhiều shader** rồi dùng **mask** để xác định shader nào xuất hiện ở đâu.

```text
Shader A ───────┐
                ├── Mix Shader ──> Material Output
Shader B ───────┘
                     ▲
                     │
                    Mask
```

---

# 2. Tạo hai shader cơ bản

Ví dụ đầu tiên sử dụng hai `Principled BSDF`:

* Shader A → màu xanh.
* Shader B → màu đỏ.

Có thể nhân đôi shader hiện tại bằng:

```text
Shift + D
```

Sau đó đặt hai màu khác nhau để dễ quan sát.

Ví dụ:

```text
Principled BSDF A
Base Color = Blue

Principled BSDF B
Base Color = Red
```

---

# 3. Trộn hai shader bằng Mix Shader

Hai shader cần được đưa vào một node:

```text
Mix Shader
```

Sơ đồ:

```text
Principled A ───────┐
                    ├── Mix Shader ──> Material Output
Principled B ───────┘
```

Nếu sử dụng Node Wrangler, có thể chọn hai shader rồi:

```text
Ctrl + Shift + RMB kéo giữa hai node
```

Blender sẽ tự tạo node trộn phù hợp.

---

# 4. Factor của Mix Shader

`Fac` quyết định shader nào được hiển thị.

```text
Fac = 0
↓
Shader A

Fac = 1
↓
Shader B
```

Có thể hình dung:

```text
0.0                         1.0
│                            │
Shader A ───── Blend ───── Shader B
```

Nếu đặt giá trị trung gian:

```text
Fac = 0.5
```

hai shader sẽ được trộn với nhau.

Nhưng để kiểm soát theo từng vị trí trên object, chúng ta sử dụng **mask**.

---

# 5. Nguyên lý mask đen–trắng

Mask thường sử dụng giá trị từ:

```text
0 → 1
```

Tương ứng:

```text
Black = 0
White = 1
```

Ví dụ:

```text
BLACK
↓
Shader A
Blue

WHITE
↓
Shader B
Red
```

Sơ đồ:

```text
Mask
│
├── Black ──> Shader A
│
└── White ──> Shader B
```

Vì vậy, thay vì tự chỉnh `Fac`, ta đưa một texture vào `Fac`.

---

# 6. Tạo mask bằng Noise Texture

Một cách đơn giản là sử dụng:

```text
Noise Texture
```

Workflow:

```text
Noise Texture
      │
      ▼
ColorRamp
      │
      ▼
Mix Shader — Fac
```

Toàn bộ hệ thống:

```text
Noise Texture
      │
      ▼
ColorRamp
      │
      ▼
     Fac
      │
      ▼
Principled A ──────┐
                   ├── Mix Shader ──> Material Output
Principled B ──────┘
```

---

# 7. Vì sao cần ColorRamp?

Noise Texture mặc định có nhiều mức xám.

Ví dụ:

```text
Black → Gray → Gray → White
```

Điều này tạo vùng blend rộng giữa hai shader.

Nếu muốn mask rõ ràng hơn, sử dụng:

```text
ColorRamp
```

và kéo hai điểm đen/trắng lại gần nhau.

### Contrast thấp

```text
Black ───────────── White
      nhiều gray
```

→ chuyển shader mềm.

### Contrast cao

```text
Black ─── White
```

→ vùng shader tách biệt rõ hơn.

---

# 8. Procedural Texture không phụ thuộc độ phân giải

Một ưu điểm lớn của `Noise Texture` là nó là **procedural texture**.

Nó không phải ảnh bitmap như:

```text
1024 × 1024
2048 × 2048
4096 × 4096
```

Do đó không có khái niệm resolution cố định giống image texture.

Bạn có thể zoom gần object mà vẫn giữ được pattern toán học của texture.

Điều này đặc biệt hữu ích cho:

* noise;
* dirt;
* rust;
* scratches;
* wetness;
* damage;
* surface variation.

---

# 9. Ví dụ thực tế — Material khô và ướt

Ví dụ thứ hai tạo bề mặt:

```text
Dry
↓
Wet
```

trên cùng một object.

Ý tưởng:

```text
Shader Dry
+
Shader Wet
+
Vertical Gradient Mask
```

---

# 10. Tạo shader Wet từ shader Dry

Không nhất thiết phải tạo shader hoàn toàn mới.

Có thể duplicate shader:

```text
Dry Shader
    │
Shift + D
    │
    ▼
Wet Shader
```

Vùng ướt thường có:

* màu tối hơn;
* roughness thấp hơn;
* reflection mạnh hơn.

Ví dụ:

| Thuộc tính |      Dry |      Wet |
| ---------- | -------: | -------: |
| Base Color | sáng hơn |  tối hơn |
| Roughness  |      cao |     thấp |
| Reflection |  yếu hơn | mạnh hơn |

---

# 11. Làm tối texture bằng RGB Curves

Trong bài, texture màu của shader Wet được làm tối hơn bằng:

```text
RGB Curves
```

Workflow:

```text
Image Texture
      │
      ├──────────────> Dry Shader
      │
      ▼
 RGB Curves
      │
      ▼
 Wet Shader
```

Nhờ vậy:

* cả hai shader vẫn dùng cùng một texture;
* nhưng Wet shader có màu tối hơn.

---

# 12. Tạo Gradient Mask

Để tạo hiệu ứng:

```text
Dry phía trên
Wet phía dưới
```

ta sử dụng:

```text
Texture Coordinate
       ↓
Mapping
       ↓
Gradient Texture
       ↓
ColorRamp
```

Sơ đồ:

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
    ColorRamp
        │
        ▼
    Mix Shader
```

---

# 13. Texture Coordinate và Mapping

Có thể nhanh chóng thêm:

```text
Texture Coordinate
+
Mapping
```

bằng Node Wrangler:

```text
Ctrl + T
```

trên texture node phù hợp.

`Mapping` dùng để điều chỉnh:

* Location;
* Rotation;
* Scale.

---

# 14. Xoay hướng Gradient

Gradient mặc định có thể chạy:

```text
Left → Right
```

trong khi hiệu ứng cần:

```text
Bottom → Top
```

Khi đó dùng `Mapping` để xoay hệ tọa độ.

Ví dụ trong bài:

```text
Rotation ≈ 90°
```

trên axis phù hợp.

Kết quả mong muốn:

```text
TOP
████████ Dry
████████
▓▓▓▓▓▓▓▓ Transition
░░░░░░░░
████████ Wet
BOTTOM
```

---

# 15. Điều khiển vị trí vùng chuyển bằng ColorRamp

Sau Gradient Texture, thêm:

```text
ColorRamp
```

để kiểm soát:

* vị trí chuyển;
* độ rộng transition;
* độ gắt của biên.

Ví dụ:

```text
Gradient
   │
   ▼
ColorRamp
   │
   ▼
Wet/Dry Mask
```

Kéo điểm trắng sang trái/phải sẽ thay đổi vị trí vùng ướt.

---

# 16. Nếu mask bị ngược

Ví dụ bạn muốn:

```text
Bottom = Wet
Top = Dry
```

nhưng kết quả lại:

```text
Bottom = Dry
Top = Wet
```

Có hai cách sửa.

### Cách 1 — Đổi shader input

```text
Shader A ↔ Shader B
```

### Cách 2 — Đảo mask

Trong `ColorRamp`:

```text
Black ↔ White
```

Tức:

```text
Trước:

Black → Dry
White → Wet
```

sau khi invert:

```text
Black → Wet
White → Dry
```

Đảo mask thường tiện hơn vì giữ nguyên cấu trúc shader.

---

# 17. Preview mask trước khi nối shader

Khi làm material phức tạp, nên kiểm tra mask riêng.

Với Node Wrangler:

```text
Ctrl + Shift + LMB
```

trên node cần preview.

Ví dụ preview:

```text
ColorRamp
```

Nếu mask đúng, bạn nên thấy hình ảnh grayscale:

```text
White = Wet
Black = Dry
```

Thói quen tốt:

```text
Tạo mask
   ↓
Preview mask
   ↓
Chỉnh mask
   ↓
Sau đó mới nối vào shader
```

Điều này dễ debug hơn nhiều so với nhìn material cuối cùng.

---

# 18. Gradient hoàn hảo thường không tự nhiên

Một gradient như:

```text
──────────────────
Dry
──────────────────
Wet
```

thường quá sạch.

Ngoài đời, đường biên nước hoặc bụi thường:

```text
~~~~~__~~~~~~~_~~
```

không hoàn toàn thẳng.

Do đó ta thêm một Noise Texture để phá biên.

---

# 19. Tạo Noise cho đường biên

Thêm:

```text
Noise Texture
```

và điều chỉnh các thông số như:

* Scale;
* Detail;
* Roughness.

Ví dụ:

```text
Noise Texture

Scale      ↑
Detail     ↑ nhẹ
Roughness  điều chỉnh vừa phải
```

Mục tiêu không phải tạo noise cực mạnh, mà chỉ tạo variation nhỏ.

---

# 20. Tăng contrast của Noise

Tiếp tục dùng:

```text
Noise Texture
      ↓
ColorRamp
```

để kiểm soát pattern rõ hơn.

Sơ đồ:

```text
Noise
 │
 ▼
ColorRamp
 │
 ▼
Noise Mask
```

---

# 21. Kết hợp Gradient và Noise

Đây là phần quan trọng nhất của bài.

Ta đang có:

### Mask A — Gradient

```text
Gradient
↓
xác định vị trí tổng thể
```

### Mask B — Noise

```text
Noise
↓
tạo độ bất quy tắc
```

Sau đó kết hợp chúng bằng **Mix Color / Math-like operation**.

```text
Gradient Mask ─────┐
                   ├── Mix/Subtract ──> Final Mask
Noise Mask ────────┘
```

Final Mask được nối vào:

```text
Mix Shader — Fac
```

---

# 22. Gradient quyết định vùng lớn, Noise quyết định chi tiết

Có thể hiểu workflow như sau:

```text
Gradient
   │
   │ quyết định:
   │ "nước cao đến đâu?"
   ▼

Noise
   │
   │ quyết định:
   │ "mép nước nhấp nhô thế nào?"
   ▼

Final Mask
```

Đây là tư duy quan trọng khi xây procedural material.

---

# 23. Sơ đồ hoàn chỉnh Wet/Dry Material

```text
                         BASE TEXTURE
                              │
                  ┌───────────┴───────────┐
                  │                       │
                  ▼                       ▼
             Dry Shader              RGB Curves
                                          │
                                          ▼
                                     Wet Shader
                  │                       │
                  └───────────┬───────────┘
                              │
                         Mix Shader
                              ▲
                              │
                          Final Mask
                              ▲
                              │
                ┌─────────────┴─────────────┐
                │                           │
                ▼                           ▼
        Gradient Texture              Noise Texture
                │                           │
                ▼                           ▼
           ColorRamp                  ColorRamp
                │                           │
                └─────────────┬─────────────┘
                              │
                              ▼
                       Mix / Subtract
                              │
                              ▼
                          Final Mask
```

---

# 24. Mix Shader và Mix Color khác nhau

Đây là điểm rất dễ nhầm.

## Mix Shader

Dùng để trộn:

```text
Shader + Shader
```

Ví dụ:

```text
Principled BSDF
+
Glossy/another Principled
```

→ kết quả vẫn là **Shader**.

---

## Mix Color

Dùng để trộn:

```text
Color
Value
Texture
Mask
```

Ví dụ:

```text
Gradient
+
Noise
```

→ tạo một mask mới.

---

## Cách nhớ

```text
Mix Shader
→ trộn vật liệu/bề mặt

Mix Color
→ trộn dữ liệu
```

---

# 25. Kiểu socket trong Shader Editor

Node Editor sử dụng màu socket để cho biết loại dữ liệu.

Ví dụ phổ biến:

| Màu socket | Dữ liệu |
| ---------- | ------- |
| 🟢 Green   | Shader  |
| 🟡 Yellow  | Color   |
| ⚪ Gray     | Value   |
| 🟣 Purple  | Vector  |

Không thể tùy ý nối mọi loại dữ liệu với nhau.

Ví dụ:

```text
Shader ─X─> Color input
```

có thể không hợp lệ hoặc không cho kết quả mong muốn.

---

# 26. Cắt connection giữa các node

Nếu nối sai, Node Wrangler hỗ trợ thao tác nhanh:

```text
Ctrl + RMB
```

kéo qua dây connection để cắt.

Có thể hình dung như:

```text
Node A ───────── Node B

Ctrl + RMB
       ✂

Node A           Node B
```

Rất hữu ích khi shader graph bắt đầu lớn.

---

# 27. Điều chỉnh mức độ bất quy tắc

Sau khi Gradient và Noise được trộn, có thể kiểm soát vật liệu bằng nhiều cách.

### Muốn mép mượt hơn

Giảm:

```text
Noise strength
```

hoặc giảm contrast của ColorRamp.

### Muốn mép nhấp nhô hơn

Tăng:

```text
Noise influence
```

### Muốn nhiều chi tiết nhỏ

Tăng:

```text
Noise Scale
```

### Muốn pattern lớn hơn

Giảm:

```text
Noise Scale
```

---

# 28. Vai trò của từng node

| Node               | Chức năng                          |
| ------------------ | ---------------------------------- |
| Principled BSDF    | Xây dựng bề mặt                    |
| Mix Shader         | Trộn hai shader                    |
| Noise Texture      | Tạo pattern procedural ngẫu nhiên  |
| Gradient Texture   | Tạo chuyển đổi theo hướng          |
| ColorRamp          | Điều khiển contrast và ngưỡng mask |
| Texture Coordinate | Cung cấp hệ tọa độ                 |
| Mapping            | Scale / Rotate / Move texture      |
| RGB Curves         | Điều chỉnh sáng/tối của texture    |
| Mix Color          | Kết hợp nhiều mask                 |

---

# 29. Công thức tư duy procedural material

Có thể ghi nhớ material trong bài bằng công thức:

```text
Material A
+
Material B
+
Mask
=
Combined Material
```

Mask lại được tạo từ:

```text
Large Form
+
Small Variation
=
Natural Mask
```

Trong ví dụ này:

```text
Gradient
+
Noise
=
Wetness Mask
```

---

# 30. Workflow tổng quát

```text
1. Tạo Shader A
        ↓
2. Tạo Shader B
        ↓
3. Mix Shader
        ↓
4. Tạo mask cơ bản
        ↓
5. Preview mask
        ↓
6. ColorRamp để kiểm soát
        ↓
7. Thêm Noise để phá sự hoàn hảo
        ↓
8. Kết hợp các mask
        ↓
9. Nối Final Mask → Mix Shader
        ↓
10. Kiểm tra close-up
```

---

# 31. Ứng dụng khác

Kỹ thuật này không chỉ dành cho vật liệu ướt.

## Sơn bong

```text
Paint
+
Metal
+
Noise/Grunge Mask
```

## Kim loại rỉ

```text
Metal
+
Rust
+
Noise Mask
```

## Bụi

```text
Original Material
+
Dust Material
+
Up-facing Gradient
```

## Bùn

```text
Clean Surface
+
Mud
+
Height Gradient + Noise
```

## Tuyết

```text
Rock
+
Snow
+
Normal/Position-based Mask
```

## Rêu

```text
Stone
+
Moss
+
Noise + Orientation Mask
```

---

# 32. Ví dụ Metal + Paint

Một ứng dụng thực hành tốt:

```text
Paint Shader
Metal Shader
     │
     ▼
Mix Shader
     ▲
     │
Noise
 ↓
ColorRamp
 ↓
Mask
```

Kết quả:

```text
████████ Paint
██░░████
░░██░░██ Exposed Metal
████░░██
```

Nếu thêm một Noise thứ hai với scale nhỏ hơn, có thể tạo các vết bong sơn tinh tế hơn.

---

# 33. Ví dụ Dry + Wet nâng cao

Material Wet không chỉ nên tối hơn.

Bạn có thể thay đổi đồng thời:

```text
Wet:
Base Color ↓
Roughness ↓
Specular/Reflection ↑
Normal intensity có thể thay đổi nhẹ
```

Ví dụ:

```text
Dry
Roughness = 0.65

Wet
Roughness = 0.20
```

Nhờ vậy ánh sáng phản xạ trên vùng ướt rõ ràng hơn.

---

# 34. Nguyên tắc Large → Medium → Small

Khi tạo mask procedural phức tạp, nên làm theo thứ tự:

```text
Large Shape
    ↓
Medium Variation
    ↓
Small Detail
```

Ví dụ Wet/Dry:

```text
Gradient
↓
quyết định vùng lớn

Noise lớn
↓
phá đường biên

Noise nhỏ
↓
thêm spots/chi tiết nhỏ
```

Không nên bắt đầu bằng hàng loạt noise nhỏ vì material sẽ khó kiểm soát.

---

# 35. Kiểm tra mask ở close-up

Một mask trông ổn khi camera xa có thể bị lỗi khi nhìn gần.

Cần kiểm tra:

* đường biên có quá sắc không;
* noise có quá lớn không;
* pattern có nhìn giống procedural rõ ràng không;
* scale có phù hợp kích thước vật thể không;
* transition có tự nhiên không.

Ví dụ:

```text
Xa:
✓ nhìn ổn

Close-up:
✗ noise quá lớn
✗ edge quá sắc
✗ pattern lặp rõ
```

---

# 36. Tách mask thành Node Group

Khi một hệ thống mask được sử dụng nhiều lần, nên gom thành:

```text
Node Group
```

Ví dụ:

```text
GROUP: Wet_Edge_Mask

Inputs
├── Position
├── Wet Height
├── Noise Scale
├── Noise Strength
└── Edge Softness

Output
└── Wet Mask
```

Sau đó có thể tái sử dụng cho nhiều material.

---

# 37. Cấu trúc Node Group đề xuất

```text
[Wet Mask Group]

Texture Coordinate
       │
       ▼
    Mapping
       │
       ▼
 Gradient
       │
   ColorRamp
       │
       ├─────────────┐
       │             │
       ▼             ▼
                   Noise
                     │
                  ColorRamp
                     │
       └────── Mix/Subtract
                     │
                     ▼
                   MASK
```

Các parameter nên expose:

```text
Wet Height
Edge Width
Noise Scale
Noise Detail
Noise Strength
```

---

# 38. Các lỗi thường gặp

## Lỗi 1 — Dùng Mix Color để trộn shader

Sai:

```text
Shader A
Shader B
  ↓
Mix Color
```

Đúng:

```text
Shader A
Shader B
  ↓
Mix Shader
```

---

## Lỗi 2 — Mask quá xám

Nếu mask chứa quá nhiều vùng xám:

```text
Black ─ Gray ─ Gray ─ White
```

hai vật liệu bị hòa vào nhau quá nhiều.

### Cách sửa

```text
ColorRamp
```

tăng contrast.

---

## Lỗi 3 — Mask quá cứng

```text
████│░░░░
```

đường chuyển hoàn toàn sắc nét có thể không tự nhiên.

### Cách sửa

* mở rộng khoảng cách ColorRamp;
* thêm noise nhỏ;
* giảm contrast.

---

## Lỗi 4 — Gradient sai hướng

Ví dụ cần:

```text
Bottom → Top
```

nhưng hiện:

```text
Left → Right
```

### Cách sửa

Sử dụng:

```text
Texture Coordinate
→ Mapping
→ Rotation
```

---

## Lỗi 5 — Shader bị đảo

### Cách sửa

Một trong hai:

```text
Swap Shader A/B
```

hoặc:

```text
Invert ColorRamp
```

---

## Lỗi 6 — Noise quá mạnh

Nếu noise chi phối hoàn toàn gradient:

```text
Gradient không còn đọc được
```

Material sẽ trông ngẫu nhiên thay vì có logic.

Hãy coi Noise là:

> chi tiết phá sự hoàn hảo,

không phải lúc nào cũng là thành phần chính.

---

# 39. Thực hành

## Bài 1 — Red / Blue Procedural Material

Tạo:

```text
Blue Principled
+
Red Principled
+
Noise Mask
```

Yêu cầu:

* Noise Texture;
* ColorRamp;
* Mix Shader;
* có thể điều chỉnh Scale để thay đổi kích thước pattern.

---

## Bài 2 — Wet / Dry Surface

Tạo:

```text
Dry Shader
+
Wet Shader
+
Vertical Gradient
```

Yêu cầu:

* Wet tối hơn;
* Wet roughness thấp hơn;
* gradient từ dưới lên;
* ColorRamp điều chỉnh chiều cao vùng ướt.

---

## Bài 3 — Natural Wet Edge

Nâng cấp bài 2:

```text
Gradient
+
Noise
=
Final Mask
```

Yêu cầu:

* mép nước không hoàn toàn thẳng;
* noise vừa phải;
* không để pattern quá rõ.

---

# 40. Bài tập mở rộng — Painted Metal

Tạo một vật liệu:

```text
Paint
+
Bare Metal
+
Procedural Damage Mask
```

Gợi ý:

```text
Noise Texture
    ↓
ColorRamp
    ↓
Mix Shader
```

Sau đó thử thêm:

```text
Noise lớn
+
Noise nhỏ
```

để tạo nhiều cấp độ bong tróc.

---

# Checklist

* [ ] Tạo được ít nhất hai shader trong một material.
* [ ] Biết dùng `Mix Shader` để kết hợp shader.
* [ ] Hiểu `Fac = 0` và `Fac = 1` chọn shader nào.
* [ ] Hiểu mask đen–trắng điều khiển vùng xuất hiện của từng shader.
* [ ] Dùng được `Noise Texture` để tạo procedural mask.
* [ ] Dùng được `Gradient Texture` cho mask có hướng.
* [ ] Dùng `ColorRamp` để kiểm soát contrast và transition.
* [ ] Biết đảo mask khi shader xuất hiện ngược.
* [ ] Phân biệt được `Mix Shader` và `Mix Color`.
* [ ] Biết dùng `Texture Coordinate + Mapping` để đổi hướng gradient.
* [ ] Biết kết hợp Gradient và Noise để tạo mép tự nhiên.
* [ ] Mask không chuyển quá gắt ngoài chủ ý.
* [ ] Kiểm tra material ở close-up.
* [ ] Noise có scale phù hợp với kích thước vật thể.
* [ ] Tách hệ thống mask thành Node Group nếu cần tái sử dụng.

## Ghi nhớ

> **Combined Material = nhiều shader + một hệ thống mask có kiểm soát.**

Với procedural material, nên suy nghĩ theo cấu trúc:

```text
Shader A ────────────────┐
                         ├── Mix Shader ──> Output
Shader B ────────────────┘
                              ▲
                              │
                         Final Mask
                              ▲
                    ┌─────────┴─────────┐
                    │                   │
                 Gradient             Noise
                    │                   │
                 Large Form        Small Detail
```

Gradient quyết định **vật liệu xuất hiện ở đâu**, còn Noise giúp bề mặt **bớt hoàn hảo và tự nhiên hơn**.

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
