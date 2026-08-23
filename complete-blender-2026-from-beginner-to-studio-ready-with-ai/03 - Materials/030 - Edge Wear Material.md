# 030 — Edge Wear Material

| Thuộc tính         | Nội dung                                                      |
| ------------------ | ------------------------------------------------------------- |
| **Phần**           | 03 — Materials                                                |
| **Thời lượng**     | 6:25                                                          |
| **Chủ đề**         | Mask edge wear, dirt mask và curvature-style look development |
| **Kỹ thuật chính** | Procedural Mask, Node Group, Mix Shader, Material Library     |

---

## 1. Mục tiêu bài học

Sau bài này, cần có thể:

* Tạo một **procedural mask** dùng để mô phỏng:

  * cạnh bị mòn;
  * lớp sơn bong;
  * bụi bẩn;
  * rỉ sét;
  * grime;
  * rêu/moss;
  * các lớp phủ không đồng đều.
* Dùng mask để **trộn hai vật liệu khác nhau**.
* Điều chỉnh kích thước và mật độ của vùng wear/dirt.
* Đóng gói hệ thống mask thành **Node Group** để tái sử dụng.
* Đưa Node Group và material hoàn chỉnh vào **Asset Library**.
* Tạo bản material độc lập trước khi chỉnh sửa để tránh làm thay đổi các material khác.

> Điểm quan trọng của workflow này không nằm ở việc thuộc từng node bên trong mask, mà ở việc hiểu **mask được tạo ra như thế nào, dùng ở đâu và tái sử dụng ra sao**.

---

# 2. Edge Wear / Dirt Mask là gì?

Một material phức tạp thường không chỉ có một bề mặt duy nhất.

Ví dụ một vật kim loại sơn:

```text
Bề mặt ban đầu
     │
     ├── Sơn
     │
     └── Kim loại bên dưới
```

Sau một thời gian sử dụng:

```text
      Va chạm / ma sát
             ↓
      Sơn bị mài mòn
             ↓
   Kim loại lộ ra ở cạnh
```

Trong shader, ta có thể biểu diễn điều đó bằng một **mask**.

```text
Material A ────────┐
                   │
                   ▼
               Mix Shader ──► Surface
                   ▲
                   │
Material B ────────┘
                   ▲
                   │
             Procedural Mask
```

Trong đó:

* **đen** → ưu tiên Material A;
* **trắng** → ưu tiên Material B;
* **xám** → vùng chuyển tiếp giữa hai material.

---

# 3. Procedural Mask

Mask trong bài được xây dựng theo dạng procedural.

Điều này có nghĩa là nó:

* không phụ thuộc hoàn toàn vào UV cụ thể;
* có thể sử dụng trên nhiều object;
* dễ thay đổi;
* có thể lưu thành Node Group;
* thích hợp xây dựng một thư viện material reusable.

Workflow tổng quát:

```text
Geometry / Coordinates
        │
        ▼
 Procedural Pattern
        │
        ▼
 Noise / Dirt Texture
        │
        ▼
 Range / Contrast
        │
        ▼
       MASK
        │
        ▼
Mix hai Material
```

---

# 4. Dirt Texture làm nguồn variation

Trong setup của bài học có một texture dùng để tạo hình dạng dirt.

Có thể thay texture này để thay đổi đặc tính của mask.

Ví dụ:

```text
Texture A
   ↓
Các đốm nhỏ
   ↓
Bụi / grime
```

```text
Texture B
   ↓
Mảng lớn
   ↓
Rỉ sét / bong sơn
```

```text
Texture C
   ↓
Pattern mềm
   ↓
Moss / dirt coating
```

Như vậy cùng một hệ thống mask nhưng chỉ cần đổi texture là có thể tạo nhiều loại bề mặt khác nhau.

---

# 5. Điều chỉnh lượng Dirt / Wear

Một tham số quan trọng trong setup là giá trị điều khiển mức độ xuất hiện của mask.

Có thể hiểu gần giống:

```text
Value thấp
   ↓
Ít Dirt / Wear

Value trung bình
   ↓
Dirt xuất hiện rõ hơn

Value cao
   ↓
Dirt / Wear phủ nhiều bề mặt
```

Khi chỉnh giá trị nhỏ chính xác trong Blender có thể:

```text
Shift + kéo chuột
```

để thay đổi chậm và chính xác hơn.

---

# 6. Điều chỉnh kích thước pattern

Pattern phải có kích thước phù hợp với vật thể.

Có thể thêm hệ thống Mapping bằng:

```text
Ctrl + T
```

khi đã bật **Node Wrangler**.

Workflow thường là:

```text
Texture Coordinate
       │
       ▼
    Mapping
       │
       ▼
 Dirt Texture
       │
       ▼
      Mask
```

Trong **Mapping**, thay đổi:

```text
Scale X
Scale Y
Scale Z
```

để điều chỉnh kích thước pattern.

### Ví dụ

Scale lớn:

```text
Scale ↑
  ↓
Pattern xuất hiện nhỏ và dày hơn
```

Scale nhỏ:

```text
Scale ↓
  ↓
Các mảng Dirt lớn hơn
```

---

# 7. Scale của vật thể rất quan trọng

Edge wear không nên có cùng kích thước trên mọi object.

Ví dụ:

```text
Một chiếc đồng hồ
Wear ≈ vài mm
```

khác hoàn toàn:

```text
Một cánh cửa kim loại
Wear ≈ vài cm
```

Do đó phải kiểm tra:

* kích thước thật của object;
* Object Scale;
* Mapping Scale;
* kích thước pattern.

Nếu scale không hợp lý, edge wear sẽ trông giống một đường viền giả chạy quanh model.

---

# 8. Đóng gói mask thành Node Group

Setup procedural có thể chứa nhiều node.

Để dễ quản lý:

1. Chọn toàn bộ node thuộc hệ thống mask.
2. Nhấn:

```text
Ctrl + G
```

Blender sẽ tạo một **Node Group**.

Trước:

```text
Coordinate
   │
Mapping
   │
Texture
   │
Math
   │
Ramp
   │
...
   │
Mask
```

Sau:

```text
┌───────────────────┐
│ Procedural Mask   │
└─────────┬─────────┘
          │
         Mask
```

Node tree trở nên sạch hơn rất nhiều.

---

# 9. Vào và thoát Node Group

Để chỉnh bên trong group:

```text
Tab
```

Cấu trúc:

```text
Main Shader
    │
    ▼
[Procedural Mask]
        │
       Tab
        ▼
 ┌─────────────────┐
 │ Internal Nodes  │
 └─────────────────┘
```

Nhấn `Tab` lần nữa để trở ra shader chính.

---

# 10. Đặt tên Node Group

Nên đặt tên rõ ràng, ví dụ:

```text
Mask_P
```

Trong đó:

* `Mask` → chức năng của group;
* `_P` → Procedural.

Có thể dùng hệ thống tên đầy đủ hơn:

```text
MASK_EdgeWear_P
MASK_Dirt_P
MASK_Rust_P
MASK_Moss_P
```

Điều này rất hữu ích khi Asset Library có hàng chục hoặc hàng trăm node group.

---

# 11. Trộn Bronze và Gold

Ví dụ bài học sử dụng hai material:

```text
Bronze
Gold
```

Ta muốn:

* Bronze là lớp chính;
* Gold xuất hiện ở vùng wear/cạnh.

Sơ đồ:

```text
Bronze ────────────┐
                   │
                   ▼
                 MIX ─────► Material Output
                   ▲
                   │
Gold ──────────────┘
                   ▲
                   │
             Procedural Mask
```

---

# 12. Đóng gói từng material thành Group

Material phức tạp cũng có thể được đóng gói thành Node Group.

Ví dụ Bronze:

```text
Texture
   │
Roughness
   │
Bump
   │
Principled BSDF
```

chuyển thành:

```text
┌─────────────┐
│   Bronze    │
└──────┬──────┘
       │
     Shader
```

Thực hiện:

```text
Chọn node → Ctrl + G
```

Sau đó đổi tên group:

```text
Bronze
```

Nhờ đó main shader chỉ còn vài node lớn:

```text
Bronze
Gold
Mask
Mix
Output
```

thay vì hàng chục node nhỏ.

---

# 13. Trộn hai Shader

Với Node Wrangler, có thể chọn hai shader rồi dùng thao tác trộn nhanh.

Workflow về bản chất:

```text
Bronze Shader ──┐
                │
                ▼
            Mix Shader
                ▲
                │
Gold Shader ────┘
```

Sau đó nối:

```text
Procedural Mask
       │
       ▼
      Fac
```

Kết quả:

```text
            Mask
              │
              ▼
Bronze ───► Mix ◄─── Gold
              │
              ▼
       Material Output
```

---

# 14. Đảo hướng Mask

Có trường hợp mask bị ngược.

Ví dụ mong muốn:

```text
Cạnh = Gold
Thân = Bronze
```

nhưng shader lại cho:

```text
Cạnh = Bronze
Thân = Gold
```

Có thể sửa bằng một trong các cách:

### Cách 1 — Đổi vị trí hai shader

```text
Bronze ↔ Gold
```

### Cách 2 — Invert mask

```text
Mask
 │
 ▼
Invert
 │
 ▼
Mix
```

Về toán học:

```text
Mask đảo = 1 - Mask
```

---

# 15. Tăng mức Edge Wear

Nếu vùng Gold ở cạnh xuất hiện quá ít:

1. chọn `Procedural Mask`;
2. nhấn `Tab`;
3. chỉnh tham số threshold/value;
4. quan sát kết quả.

Ví dụ:

```text
Threshold thấp
      │
      ▼
Wear ít
```

```text
Threshold tăng
      │
      ▼
Wear nhiều
```

Tuy nhiên không nên làm:

```text
████████████████
Wear quanh mọi cạnh
████████████████
```

vì sẽ tạo cảm giác CG.

---

# 16. Roughness giúp hai lớp đọc rõ hơn

Nếu Bronze và Gold có roughness gần như giống nhau, sự khác biệt giữa hai lớp có thể rất khó nhìn thấy.

Ví dụ:

### Bronze

```text
Roughness ≈ cao hơn
↓
Highlight rộng
↓
Bề mặt xỉn hơn
```

### Gold

```text
Roughness ≈ thấp hơn
↓
Highlight sắc
↓
Bề mặt bóng hơn
```

Khi kết hợp:

```text
Bronze — rough
       +
Gold — glossy
       +
Edge Mask
       ↓
Bề mặt dễ đọc hơn
```

---

# 17. Edge Wear không chỉ là thay đổi màu

Một lỗi phổ biến:

```text
Bronze màu nâu
Gold màu vàng
```

nhưng:

```text
Roughness giống nhau
Normal giống nhau
Surface detail giống nhau
```

Kết quả vẫn rất phẳng.

Một material tốt nên có variation ở nhiều kênh:

```text
Edge Mask
   │
   ├── Base Color
   ├── Metallic
   ├── Roughness
   └── Bump / Normal
```

Ví dụ:

```text
            Edge Mask
             /  |  \
            /   |   \
           ▼    ▼    ▼
        Color Roughness Bump
```

---

# 18. Tạo material mới thay vì chỉnh material dùng chung

Trong Blender, một material có thể được nhiều object sử dụng.

Ví dụ số:

```text
2
```

bên cạnh tên material có nghĩa datablock đó đang có nhiều user.

Nếu chỉnh trực tiếp:

```text
Material
   │
   ├── Object A
   └── Object B
```

thì:

```text
Chỉnh Material
      ↓
A thay đổi
B cũng thay đổi
```

Nếu muốn tạo phiên bản riêng:

```text
Click số user / Make Single User
```

hoặc:

```text
Copy Material
```

Sau đó đổi tên:

```text
Bronze_Gold
```

---

# 19. Cấu trúc đúng khi tạo biến thể

Nên hiểu workflow như sau:

```text
Material Gold
       │
       ├──────────┐
       │          │
Material Bronze   │
       │          │
       └──────┐   │
              ▼   ▼
               MIX
                ▲
                │
            Edge Mask
                │
                ▼
        Bronze_Gold
```

`Bronze_Gold` là một material mới hoàn chỉnh.

Không nên vô tình sửa trực tiếp material gốc trong library.

---

# 20. Thêm material vào Asset Library

Sau khi hoàn thiện:

```text
Bronze_Gold
```

có thể thêm vào Asset Library để tái sử dụng.

Cấu trúc library gợi ý:

```text
Material Library
│
├── Metal
│   ├── Bronze
│   ├── Gold
│   └── Bronze_Gold
│
├── Masks
│   ├── MASK_EdgeWear_P
│   ├── MASK_Dirt_P
│   ├── MASK_Rust_P
│   └── MASK_Moss_P
│
└── Procedural
    └── ...
```

---

# 21. Material Asset và Node Group Asset khác nhau

Đây là điểm quan trọng.

## Material Asset

Một material hoàn chỉnh:

```text
Bronze_Gold
```

có thể được kéo trực tiếp từ Asset Browser lên object.

```text
Asset Browser
     │
     ▼
Bronze_Gold
     │
     ▼
Object
```

---

## Node Group Asset

Ví dụ:

```text
MASK_EdgeWear_P
```

không phải material hoàn chỉnh.

Nó cần được sử dụng **bên trong Shader Editor**.

```text
Shader Editor
      │
 Shift + A
      │
      ▼
Node Groups
      │
      ▼
MASK_EdgeWear_P
```

Sau đó:

```text
MASK_EdgeWear_P
       │
       ▼
      Fac
       │
       ▼
      Mix
```

---

# 22. Procedural Material và Procedural Mask

Cần phân biệt:

```text
Procedural Material
```

và:

```text
Procedural Mask
```

### Procedural Material

Tạo trực tiếp shader cuối cùng:

```text
Procedural Nodes
      │
      ▼
Principled BSDF
      │
      ▼
Material Output
```

### Procedural Mask

Chỉ tạo dữ liệu trắng/đen:

```text
Procedural Nodes
      │
      ▼
     Mask
      │
      ▼
Mix / Roughness / Bump...
```

Mask linh hoạt hơn vì có thể dùng cho rất nhiều material khác nhau.

---

# 23. Tạo bản Mask độc lập

Nếu cùng một Node Group đang được nhiều material sử dụng:

```text
MASK_EdgeWear_P
   │
   ├── Material A
   ├── Material B
   └── Material C
```

việc chỉnh group gốc có thể ảnh hưởng tất cả các material đó.

Nếu chỉ muốn chỉnh riêng Material C:

```text
Make Single User
```

Kết quả:

```text
MASK_EdgeWear_P
   │
   ├── Material A
   └── Material B

MASK_EdgeWear_C
   │
   └── Material C
```

Đây là workflow an toàn hơn.

---

# 24. Edge Wear hợp lý theo câu chuyện vật thể

Edge wear không nên xuất hiện ngẫu nhiên hoàn toàn.

Hãy đặt câu hỏi:

> **Người dùng hoặc môi trường sẽ tiếp xúc với vật thể ở đâu?**

Ví dụ một chiếc hộp kim loại:

```text
       ┌──────────────┐
 wear ►│              │◄ wear
       │              │
       │              │
       └──────────────┘
        ▲            ▲
      wear          wear
```

Các cạnh ngoài có khả năng:

* va đập;
* cọ sát;
* bong sơn;

nhiều hơn những vùng phẳng ở giữa.

---

# 25. Không phải cạnh nào cũng mòn như nhau

Một setup procedural quá đơn giản thường cho:

```text
Mọi cạnh
   ↓
Cùng một lượng wear
```

Kết quả:

```text
┏━━━━━━━━━━━━━━━━━┓
┃                 ┃
┃                 ┃
┃                 ┃
┗━━━━━━━━━━━━━━━━━┛
```

trông giống outline hơn là hao mòn.

Tốt hơn:

```text
Curvature
    ×
Noise
    ×
Usage Mask
    ↓
Final Wear
```

---

# 26. Công thức Edge Wear tốt hơn

Một hệ thống nâng cao có thể dùng:

```text
Curvature / Edge Data
          │
          ▼
       Noise
          │
          ▼
      ColorRamp
          │
          ▼
   Dirt Variation
          │
          ▼
     Final Mask
```

Hoặc dưới dạng ý tưởng:

```text
Final Edge Wear
      =
Edge Information
      ×
Surface Noise
      ×
Usage Variation
```

---

# 27. Sơ đồ Node tổng quát

```text
                    ┌─────────────────────┐
                    │ Texture Coordinate  │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │       Mapping       │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │ Noise / Dirt Data   │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │ Curvature / Edge    │
                    │      Control        │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │ ColorRamp / Range   │
                    └──────────┬──────────┘
                               │
                               ▼
                      EDGE WEAR MASK
                               │
                 ┌─────────────┴─────────────┐
                 │                           │
                 ▼                           ▼
        ┌────────────────┐          ┌────────────────┐
        │     Bronze     │          │      Gold      │
        │ Roughness High │          │ Roughness Low  │
        └────────┬───────┘          └────────┬───────┘
                 │                           │
                 └────────────┬──────────────┘
                              ▼
                       ┌────────────┐
                       │    MIX     │
                       └─────┬──────┘
                             │
                             ▼
                     Material Output
```

---

# 28. Workflow thực hành hoàn chỉnh

## Bước 1 — Chuẩn bị material chính

Ví dụ:

```text
Bronze
```

---

## Bước 2 — Chuẩn bị lớp bị lộ

Ví dụ:

```text
Gold
```

hoặc:

```text
Bare Metal
```

---

## Bước 3 — Thêm Procedural Mask

```text
Shift + A
→ tìm MASK_EdgeWear_P
```

---

## Bước 4 — Mix hai material

```text
Bronze ──┐
         ▼
        Mix
         ▲
Gold ────┘
```

---

## Bước 5 — Nối Mask

```text
MASK_EdgeWear_P
       │
       ▼
      Fac
```

---

## Bước 6 — Kiểm tra hướng

Nếu lớp bị đảo:

```text
Swap Shader
```

hoặc:

```text
Invert Mask
```

---

## Bước 7 — Chỉnh kích thước wear

Điều chỉnh:

```text
Mapping Scale
Noise Scale
Threshold
Contrast
```

---

## Bước 8 — Chỉnh Roughness

Ví dụ:

```text
Bronze
Roughness = cao hơn
```

```text
Gold
Roughness = thấp hơn
```

---

## Bước 9 — Tạo material độc lập

```text
Make Single User
```

hoặc:

```text
Copy
```

---

## Bước 10 — Đặt tên

```text
Bronze_Gold_EdgeWear
```

---

## Bước 11 — Lưu vào Asset Library

Lưu cả:

```text
Material
+
Procedural Mask Node Group
```

để tái sử dụng trong các project sau.

---

# 29. Những lỗi thường gặp

| Lỗi                         | Nguyên nhân               | Cách sửa                     |
| --------------------------- | ------------------------- | ---------------------------- |
| Wear quá dày                | Threshold/scale sai       | Giảm vùng mask               |
| Wear xuất hiện mọi cạnh     | Chỉ dùng curvature        | Nhân thêm Noise/usage mask   |
| Pattern quá lớn             | Mapping chưa phù hợp      | Chỉnh Scale                  |
| Pattern quá nhỏ             | Texture scale quá cao     | Giảm Scale                   |
| Gold/Bronze khó phân biệt   | Roughness tương tự        | Tách Roughness hai lớp       |
| Material khác cũng thay đổi | Đang dùng chung datablock | Make Single User             |
| Mask bị ngược               | Shader order ngược        | Swap hoặc Invert             |
| Material trông như outline  | Mask quá đều              | Break-up bằng Noise          |
| Wear không đúng kích thước  | Object scale sai          | Apply Scale và chỉnh Mapping |

---

# 30. Nguyên tắc quan trọng khi làm Edge Wear

Không nên suy nghĩ:

```text
Edge = Wear
```

mà nên nghĩ:

```text
Edge
+
Va chạm
+
Ma sát
+
Thời gian
+
Môi trường
=
Wear
```

Ví dụ:

### Tay cầm

```text
Touch nhiều
→ Roughness thay đổi mạnh
→ Paint wear nhiều
```

### Góc dưới của thùng kim loại

```text
Va chạm sàn
→ Scratch
→ Chipping
→ Bare metal
```

### Mặt phẳng ít sử dụng

```text
Ít va chạm
→ Edge wear thấp
→ Có thể Dirt nhiều hơn Wear
```

---

# 31. Gợi ý hệ thống Mask Library

Có thể phát triển Node Group của bài này thành một thư viện:

```text
MASK
│
├── MASK_EdgeWear_P
├── MASK_Dirt_P
├── MASK_Grime_P
├── MASK_Rust_P
├── MASK_Moss_P
├── MASK_Dust_P
├── MASK_Scratch_P
└── MASK_PaintChip_P
```

Sau đó một material phức tạp có thể là:

```text
Base Metal
    │
    ├── Paint Mask
    ├── Edge Wear Mask
    ├── Rust Mask
    ├── Dirt Mask
    └── Scratch Mask
```

Đây là hướng tiếp cận rất mạnh khi xây dựng **procedural material system**.

---

# 32. Bài thực hành đề xuất

Tạo một material **Painted Metal Edge Wear**.

Cấu trúc:

```text
Paint
  │
  ├──────────────┐
  │              │
  │          Edge Mask
  │              │
  ▼              ▼
Mix Shader ◄── Bare Metal
     │
     ▼
Material Output
```

Yêu cầu:

* lớp chính là sơn;
* kim loại chỉ lộ ở một số cạnh;
* edge wear không đều;
* lớp sơn rough hơn kim loại;
* pattern có kích thước phù hợp object;
* đóng mask thành Node Group;
* lưu material hoàn chỉnh vào Asset Library.

---

# 33. Checklist

* [ ] Wear tập trung ở những cạnh hợp lý.
* [ ] Không phủ edge wear đồng đều lên toàn bộ model.
* [ ] Roughness của hai lớp có khác biệt.
* [ ] Mask không tạo đường viền giả quá dày.
* [ ] Mapping Scale phù hợp kích thước thật của object.
* [ ] Mask có variation bằng Noise/Dirt texture.
* [ ] Biết đảo mask hoặc đổi thứ tự shader.
* [ ] Mask được đóng thành Node Group.
* [ ] Node Group có naming rõ ràng.
* [ ] Tạo Single User trước khi chỉnh phiên bản riêng.
* [ ] Material hoàn chỉnh được lưu vào Asset Library.
* [ ] Phân biệt được **Material Asset** và **Node Group Asset**.

---

## Ghi nhớ nhanh

> **Edge Wear Material = hai bề mặt + một mask kiểm soát vị trí hao mòn.**

Workflow cốt lõi:

```text
Edge / Geometry Data
        +
Dirt / Noise
        ↓
 Procedural Mask
        ↓
┌────────────┬────────────┐
│ Material A │ Material B │
└──────┬─────┴─────┬──────┘
       └────► MIX ◄─┘
              │
              ▼
        Final Material
```

Quan trọng nhất là **wear phải kể được câu chuyện sử dụng của vật thể**. Procedural mask chỉ là công cụ; tính thuyết phục đến từ việc lựa chọn đúng vị trí, tỷ lệ, mức độ hao mòn và sự khác biệt về roughness giữa các lớp.
