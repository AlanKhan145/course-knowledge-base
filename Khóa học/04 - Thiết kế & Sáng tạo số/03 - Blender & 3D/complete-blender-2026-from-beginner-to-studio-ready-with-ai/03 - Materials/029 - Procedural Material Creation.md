# 029 — Procedural Material Creation

| Thuộc tính          | Nội dung                                                                       |
| ------------------- | ------------------------------------------------------------------------------ |
| **Phần**            | 03 — Materials                                                                 |
| **Thời lượng**      | 7:30                                                                           |
| **Chủ đề**          | Noise Texture, ColorRamp và procedural shader                                  |
| **Thực hành chính** | Tạo procedural wood material                                                   |
| **Material mẫu**    | `Wood_P`                                                                       |
| **Kỹ thuật**        | Generated Coordinates, Noise Texture, ColorRamp, Bump, Displacement, Roughness |

---

## 1. Mục tiêu bài học

Sau bài này, cần hiểu được cách:

* Tạo material hoàn toàn bằng **procedural nodes**, không cần texture ảnh.
* Sử dụng **Noise Texture** để sinh pattern.
* Dùng **ColorRamp** để kiểm soát độ tương phản và màu sắc.
* Tạo màu gỗ procedural.
* Dùng cùng một pattern để điều khiển:

  * Base Color
  * Roughness
  * Bump
  * Displacement
* Thay đổi kích thước pattern theo kích thước object.
* Lưu material procedural vào **Asset Library** để tái sử dụng.

---

# 2. Procedural Material là gì?

**Procedural Material** là material được tạo bằng thuật toán và các node trong Blender thay vì sử dụng ảnh texture có sẵn.

Ví dụ:

```text
Texture ảnh
Wood_4K.jpg
      │
      ▼
Base Color
```

Trong khi procedural material:

```text
Coordinates
    │
    ▼
Noise Texture
    │
    ▼
ColorRamp
    │
    ├──► Base Color
    ├──► Roughness
    ├──► Bump
    └──► Displacement
```

### Ưu điểm

* Không phụ thuộc độ phân giải ảnh.
* Có thể zoom rất gần mà texture vẫn sắc nét.
* Dễ thay đổi:

  * Scale
  * Detail
  * Màu sắc
  * Roughness
  * Pattern
* Có thể áp dụng cho nhiều object khác nhau.
* Không cần lưu nhiều file texture bên ngoài.

### Nhược điểm

* Có thể tốn tài nguyên tính toán hơn texture ảnh.
* Khó tái tạo chính xác một vật liệu tự nhiên cụ thể.
* Dễ tạo cảm giác "noise ngẫu nhiên" nếu lạm dụng procedural texture.
* Một số vật liệu cần hệ node khá phức tạp.

---

# 3. Tạo material mới

Chọn phần chính của **Shader Ball**.

Tạo material mới:

```text
Material Properties
    ↓
New
    ↓
Wood_P
```

Tên được đặt:

```text
Wood_P
```

Trong đó:

* `Wood` → loại material.
* `_P` → Procedural.

Có thể dùng quy ước tương tự:

```text
Wood_P
Metal_Rust_P
Stone_P
Marble_P
Plastic_Noise_P
```

---

# 4. Cấu trúc tổng thể của material gỗ

Material trong bài có thể hình dung như sau:

```text
Texture Coordinate
        │
   Generated
        │
        ▼
     Mapping
        │
        ▼
  Noise Texture
        │
        ├───────────────┐
        │               │
        ▼               ▼
ColorRamp Color    ColorRamp Roughness
        │               │
        ▼               ▼
   Base Color        Roughness
        │
        │
        ├──────► Bump
        │          │
        │          ▼
        │        Normal
        │
        ▼
   Displacement
        │
        ▼
 Material Output
```

---

# 5. Tạo Noise Texture

Thêm:

```text
Shift + A
→ Texture
→ Noise Texture
```

Noise Texture sẽ tạo pattern procedural ban đầu.

Ở đây nó đóng vai trò giống như **nguồn dữ liệu chính** cho vật liệu gỗ.

---

# 6. Thêm Texture Coordinate và Mapping

Có thể nhanh chóng thêm hệ tọa độ bằng:

```text
Ctrl + T
```

Nếu **Node Wrangler** đang bật, Blender thường tạo:

```text
Texture Coordinate
        │
        ▼
     Mapping
        │
        ▼
     Texture
```

Trong bài sử dụng:

```text
Generated
```

từ Texture Coordinate.

Sơ đồ:

```text
Texture Coordinate
     Generated
         │
         ▼
      Mapping
         │
         ▼
   Noise Texture
```

---

## 7. Generated Coordinates

`Generated` tự động tạo tọa độ dựa trên bounding box của object.

Ưu điểm:

* Không cần unwrap UV.
* Nhanh.
* Phù hợp với nhiều procedural material.

Nhưng không phải lúc nào Generated cũng tốt.

Tùy object có thể thử:

```text
Generated
Object
UV
```

---

# 8. Thiết lập Noise Texture

Trong ví dụ, Noise Texture được tinh chỉnh để tạo cảm giác gần với cấu trúc gỗ.

Các giá trị được đề cập:

| Thuộc tính | Giá trị tham khảo |
| ---------- | ----------------: |
| Scale      |               `2` |
| Detail     |               `8` |
| Roughness  |               `1` |
| Distortion |               `1` |

Có thể hình dung:

```text
Noise Texture

Scale       2
Detail      8
Roughness   1
Distortion  1
```

---

## Ý nghĩa

### Scale

Kiểm soát kích thước pattern.

```text
Scale thấp
→ pattern lớn

Scale cao
→ pattern nhỏ
```

Ví dụ:

```text
Scale 2
████      ████

Scale 20
█ █ ██ █ █ ██ █
```

Đây là thông số rất quan trọng khi áp material lên object có kích thước khác nhau.

---

### Detail

Tăng lượng chi tiết nhỏ bên trong Noise.

```text
Detail thấp
→ pattern đơn giản

Detail cao
→ nhiều biến thiên nhỏ
```

---

### Roughness của Noise

Điều chỉnh mức độ đóng góp của các lớp noise nhỏ.

Không nên nhầm với:

```text
Principled BSDF → Roughness
```

Hai giá trị này có chức năng khác nhau.

---

### Distortion

Làm pattern bị méo.

Đối với gỗ, một lượng distortion vừa phải có thể giúp pattern tự nhiên hơn.

---

# 9. Tạo vân gỗ bằng Mapping

Ngoài Scale của Noise Texture, có thể kéo giãn pattern bằng node **Mapping**.

Ví dụ:

```text
Mapping Scale

X = 1.5
Y = 6
Z = 1
```

Ý tưởng chính là làm Noise bị kéo dài theo một trục.

```text
Noise ban đầu

~~~~ ~~~~ ~~~~
~~ ~~~~ ~~~~~~

        ↓ Stretch

================
~~~~============
================
```

Pattern kéo dài có thể bắt đầu giống:

* sợi gỗ,
* thớ gỗ,
* đường vân.

> Giá trị Mapping cần được thay đổi theo hướng của object và hướng mong muốn của thớ gỗ.

---

# 10. Tăng tương phản bằng ColorRamp

Noise Texture ban đầu thường khá mềm.

Thêm:

```text
Shift + A
→ Converter
→ Color Ramp
```

Kết nối:

```text
Noise Texture
    Fac
     │
     ▼
 ColorRamp
```

Sau đó đưa hai slider của ColorRamp lại gần nhau hơn.

```text
Ban đầu:

Black ------------------------ White

Tăng contrast:

          Black ---- White
```

Kết quả:

```text
Noise mềm
░░▒▒▓▓▒▒░░

        ↓ ColorRamp

███░░████░░██
```

Pattern lúc này rõ hơn và phù hợp để tạo thớ gỗ.

---

# 11. Tạo màu gỗ

Thay:

```text
Black → Dark Brown
White → Light Brown
```

Ví dụ:

```text
ColorRamp

Dark Brown ───────── Light Brown
```

Kết nối:

```text
Noise
 │
 ▼
ColorRamp
 │
 ▼
Principled BSDF
Base Color
```

Pipeline:

```text
Noise Texture
      │
      ▼
ColorRamp
Dark Brown → Light Brown
      │
      ▼
Principled BSDF
Base Color
```

Kết quả là một vật liệu có variation màu tương tự gỗ.

---

# 12. Điều chỉnh màu

Có thể tiếp tục tinh chỉnh:

* Hue
* Saturation
* Value
* Độ sáng tối
* Contrast

Ví dụ:

```text
Gỗ sáng
Tan → Light Brown

Gỗ tối
Dark Brown → Deep Brown

Gỗ đỏ
Dark Red Brown → Orange Brown
```

Điểm mạnh của procedural material là có thể tạo nhiều biến thể mà không cần đổi ảnh texture.

---

# 13. Tạo Bump

Color chỉ thay đổi hình ảnh bề mặt, nhưng không tạo cảm giác nổi lõm.

Để mô phỏng các lỗ nhỏ và thớ gỗ, thêm:

```text
Shift + A
→ Vector
→ Bump
```

Kết nối:

```text
Noise / ColorRamp
        │
        ▼
      Height
       Bump
        │
      Normal
        │
        ▼
Principled BSDF
      Normal
```

---

## Sơ đồ Bump

```text
Noise Texture
     │
     ▼
ColorRamp B/W
     │
     ▼
    Bump
   Height
     │
     ▼
Principled BSDF
   Normal
```

Bump tạo ảo giác bề mặt nổi lõm bằng cách thay đổi hướng normal.

Nó **không thực sự làm biến dạng geometry**.

---

# 14. Kiểm tra Bump riêng biệt

Một nguyên tắc rất tốt trong bài là:

> Khi chỉnh một channel, hãy tạm thời cô lập channel đó.

Ví dụ khi kiểm tra Bump:

```text
Base Color → Grey

Roughness → tạm cố định

Displacement → tắt

Chỉ giữ:
Noise → Bump → Normal
```

Nhờ vậy dễ nhận ra:

* Bump quá mạnh.
* Pattern quá dày.
* Contrast chưa đúng.
* Direction sai.

---

# 15. Điều chỉnh Bump Strength

Nếu hiệu ứng nổi quá mạnh:

```text
Bump
Strength ↓
```

Ví dụ:

```text
Strength 1.0
→ rất mạnh

Strength 0.2
→ nhẹ

Strength 0.05
→ micro-detail
```

Với vật liệu gỗ thực tế, thường nên dùng bump khá nhẹ.

---

# 16. Bump và Normal Map khác nhau thế nào?

Trong material procedural này không có sẵn Normal Map.

Do đó có thể dùng:

```text
Noise
→ Bump
```

thay vì:

```text
Normal Texture Image
→ Normal Map
```

So sánh:

| Phương pháp  | Nguồn                       |
| ------------ | --------------------------- |
| Normal Map   | Texture ảnh RGB             |
| Bump         | Height grayscale            |
| Displacement | Height grayscale + geometry |

---

# 17. Thêm Displacement

Nếu muốn bề mặt thực sự biến dạng, có thể sử dụng **Displacement**.

Đây là bước **không bắt buộc**.

Nếu Bump đã đủ tốt:

```text
Không nhất thiết cần Displacement
```

---

# 18. Bật Displacement trong Material Settings

Cần chỉnh material:

```text
Material Properties
→ Settings
→ Displacement
→ Displacement and Bump
```

Tùy phiên bản Blender/render engine, tên hoặc vị trí tùy chọn này có thể khác đôi chút.

---

# 19. Thêm Displacement Node

Thêm:

```text
Shift + A
→ Vector
→ Displacement
```

Pipeline:

```text
Noise
 │
 ▼
ColorRamp B/W
 │
 ▼
Displacement
 │
 ▼
Material Output
Displacement
```

---

# 20. ColorRamp cho Height

Displacement đọc dữ liệu độ cao.

Vì vậy không cần màu RGB theo nghĩa màu sắc.

Ta cần grayscale:

```text
Black
→ thấp

White
→ cao
```

Có thể tăng contrast:

```text
Noise
 │
 ▼
ColorRamp
Black ─ White
 │
 ▼
Displacement Height
```

---

# 21. Giảm Displacement Scale

Displacement ban đầu có thể quá mạnh.

Ví dụ trong bài giảm:

```text
Scale ≈ 0.005
```

hoặc thấp hơn tùy scene.

Nguyên tắc:

```text
Scale lớn
→ bề mặt biến dạng mạnh

Scale nhỏ
→ micro displacement
```

Đối với vân gỗ:

> Nên dùng displacement rất nhẹ để tránh làm bề mặt giống đá hoặc vỏ cây.

---

# 22. Bump + Displacement

Hai kỹ thuật có thể sử dụng cùng nhau.

```text
Height Pattern
     │
     ├────► Displacement
     │
     └────► Bump
```

Trong đó:

```text
Displacement
→ hình dạng lớn / trung bình

Bump
→ detail nhỏ
```

Một workflow hiệu quả:

```text
Macro Detail
→ Displacement

Micro Detail
→ Bump
```

---

# 23. Điều khiển Roughness bằng procedural texture

Material gỗ không nên có roughness hoàn toàn đồng đều.

Có thể dùng Noise để tạo variation.

Thêm một ColorRamp khác:

```text
Noise Texture
     │
     ▼
ColorRamp
     │
     ▼
Principled BSDF
Roughness
```

---

# 24. Vì sao cần ColorRamp riêng cho Roughness?

Không nên dùng trực tiếp ColorRamp màu gỗ vì:

```text
Base Color
```

và:

```text
Roughness
```

có mục đích khác nhau.

Nên tách:

```text
                ┌─ ColorRamp Color → Base Color
Noise Texture ──┤
                └─ ColorRamp B/W → Roughness
```

Nhờ vậy có thể chỉnh hai channel độc lập.

---

# 25. Kiểm tra Roughness riêng

Tạm tắt:

* Base Color variation.
* Bump.
* Displacement.

Giữ:

```text
Noise
→ ColorRamp
→ Roughness
```

Sau đó quan sát highlight.

```text
Roughness thấp
→ bóng mạnh
→ highlight rõ

Roughness cao
→ bề mặt mờ
→ highlight rộng
```

---

# 26. Cấu trúc material hoàn chỉnh

Material gỗ trong bài có thể tổ chức như sau:

```text
                        ┌───────────────┐
Texture Coordinate ───► │    Mapping    │
Generated               └───────┬───────┘
                                │
                                ▼
                        ┌───────────────┐
                        │ Noise Texture │
                        └───────┬───────┘
                                │
             ┌──────────────────┼──────────────────┐
             │                  │                  │
             ▼                  ▼                  ▼
      ColorRamp Color    ColorRamp Rough     ColorRamp Height
             │                  │                  │
             ▼                  ▼                  ├─────────────┐
        Base Color          Roughness              │             │
             │                  │                  ▼             ▼
             │                  │                Bump      Displacement
             │                  │                  │             │
             └─────────────┐    │                  ▼             │
                           ▼    ▼             BSDF Normal        │
                     Principled BSDF                           │
                           │                                  │
                           └─────────────┐                    │
                                         ▼                    ▼
                                      Material Output
```

---

# 27. Pipeline ngắn gọn

Có thể ghi nhớ bằng pipeline:

```text
Coordinates
    ↓
Mapping
    ↓
Noise
    ↓
ColorRamp
    ├── Color
    ├── Roughness
    ├── Bump
    └── Displacement
```

Hay:

```text
Coordinate
   ↓
Pattern
   ↓
Remap
   ↓
Material Property
```

Đây là tư duy cốt lõi của procedural shading.

---

# 28. Điều chỉnh scale theo object

Một procedural material có thể trông đẹp trên Shader Ball nhưng sai khi đưa sang object khác.

Ví dụ:

```text
Shader Ball
Scale = 2
→ đẹp

Một chiếc bàn lớn
Scale = 2
→ thớ gỗ quá lớn
```

Do đó phải điều chỉnh:

```text
Mapping Scale
```

hoặc:

```text
Noise Scale
```

theo kích thước thực tế của vật thể.

---

# 29. Không chỉ thay Noise Scale

Khi thay đổi Scale:

```text
Noise Scale
```

các channel phụ thuộc Noise cũng thay đổi theo:

```text
Color
Roughness
Bump
Displacement
```

Đây là lợi thế lớn của việc dùng chung một procedural source.

```text
Noise Scale
    ↓
Toàn bộ material cập nhật
```

---

# 30. Generated, Object hay UV?

Không có một coordinate đúng cho mọi tình huống.

## Generated

Phù hợp khi:

* Muốn thiết lập nhanh.
* Object có hình dạng khá đơn giản.
* Không muốn UV unwrap.

---

## Object

Phù hợp khi:

* Muốn pattern ổn định giữa nhiều object.
* Muốn dùng Empty để điều khiển texture.
* Cần điều khiển không gian procedural rõ hơn.

Ví dụ:

```text
Empty
  │
  ▼
Object Coordinates
  │
  ▼
Mapping
```

---

## UV

Phù hợp khi:

* Cần kiểm soát chính xác hướng vân.
* Gỗ cần chạy đúng theo chiều của từng bộ phận.
* Object phức tạp.

Ví dụ:

```text
Table

Mặt bàn:
vân ───────────►

Chân bàn:
vân
│
│
▼
```

Trường hợp này UV thường kiểm soát tốt hơn Generated.

---

# 31. Procedural wood trong sản xuất thực tế

Một material gỗ tốt thường phức tạp hơn chỉ một Noise Texture.

Có thể mở rộng:

```text
Texture Coordinate
      │
      ▼
Mapping
      │
      ├── Noise Texture
      │
      ├── Wave Texture
      │
      └── Voronoi
             │
             ▼
           Mix
             │
             ▼
         ColorRamp
```

Ví dụ:

```text
Wave Texture
→ cấu trúc thớ chính

Noise
→ biến dạng thớ

Voronoi
→ variation nhỏ
```

---

# 32. Noise không phải vật liệu

Một lỗi phổ biến:

```text
Noise
→ ColorRamp
→ "Xong vật liệu"
```

Noise chỉ là một **nguồn variation**.

Để material thuyết phục cần suy nghĩ:

```text
Vật liệu thật có cấu trúc gì?
        ↓
Pattern chính là gì?
        ↓
Variation nào là lớn?
        ↓
Variation nào là nhỏ?
        ↓
Roughness thay đổi thế nào?
        ↓
Bề mặt nổi bao nhiêu?
```

---

# 33. Nguyên tắc quan trọng: Scale vật lý

Một trong những lỗi procedural material phổ biến nhất là scale sai.

Ví dụ vân gỗ:

```text
Vân quá nhỏ
→ giống noise / bụi

Vân quá lớn
→ giống đá / mây

Đúng scale
→ đọc được như gỗ
```

Do đó luôn xem object trong kích thước gần với thực tế.

---

# 34. Node organization

Khi material ngày càng phức tạp, nên chia node theo chức năng.

Ví dụ:

```text
[ COORDINATES ]

Texture Coordinate
Mapping


[ PATTERN ]

Noise
Wave
Voronoi


[ COLOR ]

ColorRamp


[ ROUGHNESS ]

ColorRamp


[ HEIGHT ]

ColorRamp
Bump
Displacement


[ SHADER ]

Principled BSDF
Material Output
```

---

# 35. Node Labels

Nên đặt label:

```text
Noise_Texture
Wood_Color
Wood_Roughness
Wood_Height
Micro_Bump
Main_Displacement
```

Điều này đặc biệt hữu ích với material tái sử dụng.

---

# 36. Tạo Node Group

Nếu pattern sẽ dùng lại nhiều lần:

```text
Noise
+ Mapping
+ ColorRamp
```

có thể gom thành:

```text
Wood Pattern
```

Ví dụ:

```text
┌──────────────────────────┐
│      WOOD PATTERN        │
│                          │
│ Scale                    │
│ Detail                   │
│ Distortion               │
│ Dark Color               │
│ Light Color              │
└─────────────┬────────────┘
              │
             Color
```

Nhờ vậy material dễ điều khiển hơn.

---

# 37. Lưu material vào Asset Library

Sau khi hoàn thành:

```text
Right Click Material
        ↓
Mark as Asset
```

Sau đó mở:

```text
Asset Browser
```

Material có thể xuất hiện trong:

```text
Unassigned
```

Nếu cần tạo preview:

```text
R
→ Render Preview
```

Tùy giao diện/version Blender, thao tác render preview có thể hơi khác.

---

# 38. Quy trình thực hành hoàn chỉnh

```text
Shader Ball
     ↓
New Material
     ↓
Wood_P
     ↓
Texture Coordinate
     ↓
Generated
     ↓
Mapping
     ↓
Noise Texture
     ↓
ColorRamp
     ├── Brown Colors → Base Color
     ├── B/W → Roughness
     └── B/W → Height
                  │
            ┌─────┴─────┐
            ▼           ▼
           Bump    Displacement
            │           │
            ▼           ▼
      Principled      Output
            │
            ▼
     Material Output
     ↓
Mark as Asset
```

---

# 39. Thứ tự kiểm tra material

Không nên bật tất cả hiệu ứng rồi cố chỉnh cùng lúc.

Nên kiểm tra từng channel:

```text
1. Pattern
      ↓
2. Base Color
      ↓
3. Roughness
      ↓
4. Bump
      ↓
5. Displacement
      ↓
6. Kết hợp tất cả
```

Đây là workflow rất hữu ích khi shader có vấn đề.

---

# 40. Bump hay Displacement?

| Thuộc tính             | Bump    | Displacement |
| ---------------------- | ------- | ------------ |
| Thay đổi geometry thật | Không   | Có           |
| Nhanh                  | Có      | Chậm hơn     |
| Micro detail           | Rất tốt | Có thể       |
| Silhouette thay đổi    | Không   | Có           |
| Yêu cầu mesh đủ dày    | Không   | Có           |
| Phù hợp vân gỗ nhẹ     | Rất tốt | Chỉ khi cần  |

### Quy tắc đơn giản

```text
Không ảnh hưởng silhouette
→ Bump

Cần bề mặt thật sự nổi
→ Displacement
```

---

# 41. Những lỗi thường gặp

## Lỗi 1 — Noise quá mạnh

```text
Noise khắp mọi channel
→ vật liệu lộn xộn
```

### Cách sửa

Giảm:

* Detail.
* Contrast.
* Distortion.
* Bump Strength.

---

## Lỗi 2 — Scale không đúng

### Biểu hiện

Vân gỗ to như đá hoặc nhỏ như nhiễu.

### Cách sửa

Chỉnh:

```text
Mapping Scale
```

hoặc:

```text
Noise Scale
```

---

## Lỗi 3 — Bump quá mạnh

### Biểu hiện

Gỗ giống:

* đá,
* vỏ cây,
* bê tông.

### Cách sửa

```text
Bump Strength ↓
```

---

## Lỗi 4 — Displacement quá mạnh

### Biểu hiện

Silhouette bị méo rõ.

### Cách sửa

```text
Displacement Scale
→ rất nhỏ
```

Ví dụ bắt đầu thử:

```text
0.001 – 0.005
```

sau đó tinh chỉnh theo scale scene.

---

## Lỗi 5 — Roughness đồng đều

Material nhìn quá giống nhựa.

### Cách sửa

```text
Noise
→ ColorRamp
→ Roughness
```

nhưng variation phải nhẹ.

---

## Lỗi 6 — Không kiểm tra từng channel

Shader phức tạp nhưng không biết lỗi ở đâu.

### Cách sửa

Solo từng channel:

```text
Color
Roughness
Bump
Displacement
```

---

# 42. Tư duy procedural material

Thay vì nghĩ:

> "Tôi cần Noise Texture."

Hãy nghĩ:

> "Vật liệu ngoài đời có cấu trúc nào và tôi cần tín hiệu procedural nào để mô phỏng cấu trúc đó?"

Ví dụ gỗ:

```text
Gỗ thật
 │
 ├── màu sáng/tối
 │
 ├── thớ kéo dài
 │
 ├── lỗ nhỏ
 │
 ├── roughness không đồng đều
 │
 └── surface height nhỏ
```

Chuyển sang shader:

```text
Màu variation
      ↓
ColorRamp

Thớ
      ↓
Noise/Wave + Mapping

Roughness
      ↓
Noise + ColorRamp

Lỗ / vân nhỏ
      ↓
Bump

Độ nổi thật
      ↓
Displacement
```

---

# 43. Gợi ý nâng cấp material gỗ

Sau khi nắm bài cơ bản, có thể thử cấu trúc:

```text
Texture Coordinate
      │
      ▼
Mapping
      │
      ▼
Wave Texture
      │
      ▼
Noise Distortion
      │
      ▼
ColorRamp
```

Hoặc:

```text
Wave Texture ───┐
                ├── Mix → Wood Grain
Noise Texture ──┘
```

Điều này thường tạo thớ gỗ có quy luật hơn chỉ dùng Noise.

---

# 44. Ghi nhớ nhanh

```text
PROCEDURAL MATERIAL

Coordinates
    ↓
Mapping
    ↓
Pattern Generator
Noise / Voronoi / Wave
    ↓
ColorRamp
    ↓
┌──────────┬───────────┬──────────┬──────────────┐
│          │           │          │              │
Color   Roughness    Bump     Displacement     Masks
│          │           │          │              │
└──────────┴───────────┴──────────┴──────────────┘
                       ↓
                 Principled BSDF
                       ↓
                 Material Output
```

---

# 45. Checklist

* [ ] Hiểu procedural material không phụ thuộc texture ảnh.
* [ ] Tạo được Noise Texture để sinh pattern.
* [ ] Biết sử dụng `Generated`, `Object` và `UV` coordinates.
* [ ] Dùng Mapping để điều khiển hướng và tỷ lệ texture.
* [ ] Dùng ColorRamp để tăng/giảm contrast.
* [ ] Tạo được variation màu gỗ.
* [ ] Điều khiển Roughness bằng procedural texture.
* [ ] Tạo được Bump từ grayscale pattern.
* [ ] Phân biệt Bump và Displacement.
* [ ] Giữ Displacement Scale ở mức hợp lý.
* [ ] Biết cô lập từng channel để kiểm tra shader.
* [ ] Điều chỉnh pattern theo kích thước thật của object.
* [ ] Không lạm dụng Noise làm mất quy luật của vật liệu.
* [ ] Đặt node labels/group rõ ràng.
* [ ] Lưu material vào Asset Library.

---

## Kết luận

Cốt lõi của procedural material không nằm ở việc nối thật nhiều Noise Texture, mà ở workflow:

```text
Tạo tọa độ
    ↓
Sinh pattern
    ↓
Điều khiển pattern
    ↓
Chuyển pattern thành thuộc tính vật liệu
    ↓
Kiểm tra từng channel
    ↓
Tinh chỉnh theo scale thực tế
```

Trong bài này, một **procedural wood material** được xây dựng từ `Texture Coordinate → Mapping → Noise Texture → ColorRamp`, sau đó cùng pattern được tận dụng để điều khiển **Base Color, Roughness, Bump và Displacement**. Khi cấu trúc node được tổ chức tốt, chỉ cần thay đổi một vài tham số như `Scale`, màu hoặc contrast là có thể tạo ra nhiều biến thể gỗ khác nhau mà không cần thêm bất kỳ ảnh texture nào.
