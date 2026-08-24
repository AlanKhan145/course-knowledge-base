# 023 — Build Your Material Library

| Thuộc tính        | Nội dung                                                                          |
| ----------------- | --------------------------------------------------------------------------------- |
| **Phần**          | 03 — Materials                                                                    |
| **Thời lượng**    | 6:12                                                                              |
| **Chủ đề**        | Xây dựng thư viện Material có thể tái sử dụng                                     |
| **Công cụ chính** | Material Properties, Asset Browser, Mark as Asset, Asset Catalog                  |
| **Kết quả**       | Tạo thư viện gồm Plastic, Gold, Silver, Glass và có thể kéo thả sang project khác |

---

## 1. Mục tiêu bài học

Sau bài này, cần có khả năng:

* [ ] Tạo các material cơ bản để đưa vào thư viện.
* [ ] Đặt tên material rõ ràng và nhất quán.
* [ ] Đánh dấu material bằng **Mark as Asset**.
* [ ] Sử dụng **Asset Browser** để quản lý material.
* [ ] Tạo **Asset Catalog** theo từng nhóm vật liệu.
* [ ] Tạo ảnh preview riêng cho từng material.
* [ ] Sử dụng lại material trong project Blender khác.
* [ ] Duy trì một file `.blend` riêng làm **Material Library Master**.

---

# 2. Tư duy về Material Library

Nếu không có thư viện material:

```text
Project A
   ↓
Tạo Gold từ đầu

Project B
   ↓
Tạo Gold lại

Project C
   ↓
Lại tạo Gold
```

Cách này vừa mất thời gian vừa dễ tạo ra các material không đồng nhất.

Với Material Library:

```text
                 MATERIAL LIBRARY
                       │
        ┌──────────────┼──────────────┐
        │              │              │
      Metal          Plastic         Glass
        │              │              │
   ┌────┴────┐      ┌──┴───┐      ┌──┴───┐
 Gold      Silver   Glossy  Matte   Clear  Blue
   │
   ├──────► Project A
   ├──────► Project B
   └──────► Project C
```

Material chỉ cần tạo và tinh chỉnh **một lần**, sau đó có thể tái sử dụng.

---

# 3. Cấu trúc thư viện đề xuất

Ví dụ:

```text
My_Material_Library/
│
├── My_Material_Library.blend
│
├── previews/
│   ├── gold.jpg
│   ├── silver.jpg
│   ├── glossy_plastic.jpg
│   └── blue_glass.jpg
│
└── references/
```

Trong Asset Browser có thể chia thành:

```text
Materials
├── Metal
│   ├── Gold
│   └── Silver
│
├── Plastic
│   └── Glossy Plastic
│
└── Glass
    └── Blue Glass
```

---

# 4. Bước 1 — Tạo file Material Library riêng

Không nên xây thư viện trực tiếp trong file scene của một project.

Vào:

```text
File
→ Save As
```

Ví dụ đặt tên:

```text
My_Material_Library.blend
```

### Vì sao?

File này sẽ đóng vai trò:

> **Master Library**

Nó chứa:

* material;
* shader;
* preview;
* catalog;
* asset metadata.

Khi cần material cho project khác, chỉ việc lấy từ thư viện này.

---

# 5. Bước 2 — Dùng Shader Ball để kiểm tra vật liệu

Trong bài học sử dụng một **Shader Ball** đã được chuẩn bị sẵn.

Shader Ball rất hữu ích vì trên cùng một object có:

* bề mặt cong;
* bề mặt phẳng;
* khe nhỏ;
* highlight;
* shadow;
* vùng phản xạ.

Nhờ vậy dễ kiểm tra:

```text
Material
   ↓
Shader Ball
   ↓
Lighting
   ↓
Highlight / Reflection / Transparency
   ↓
Tinh chỉnh Material
```

---

# 6. Material 01 — Glossy Plastic

Tạo material mới:

```text
New Material
→ Name: Glossy Plastic
```

Sử dụng **Principled BSDF**.

Ví dụ:

| Thuộc tính | Thiết lập                        |
| ---------- | -------------------------------- |
| Base Color | Xám                              |
| Metallic   | `0`                              |
| Roughness  | Thấp đến trung bình              |
| IOR        | Khoảng giá trị nhựa thông thường |

Ý tưởng:

```text
Plastic
│
├── Metallic = 0
│
├── Roughness thấp
│
└── Highlight rõ
```

### Kết quả

Material có bề mặt:

* trơn;
* bóng;
* phản chiếu highlight;
* nhưng **không phải kim loại**.

> Roughness thấp tạo bề mặt bóng hơn. Không cần tăng `Metallic` để tạo nhựa bóng.

---

# 7. Material 02 — Gold

Tạo material:

```text
Name: Gold
```

Trong Principled BSDF:

```text
Metallic = 1
```

sau đó đặt:

```text
Base Color = vàng kim
```

và giảm Roughness nếu muốn vàng đánh bóng.

Ví dụ:

| Parameter  | Giá trị định hướng |
| ---------- | -----------------: |
| Base Color |               Vàng |
| Metallic   |              `1.0` |
| Roughness  |      `0.15 – 0.35` |

---

## Công thức tư duy

```text
Gold
=
Metallic 1.0
+
Gold Base Color
+
Roughness phù hợp
```

### Roughness thấp

```text
Highlight sắc
Reflection rõ
→ Polished Gold
```

### Roughness cao

```text
Highlight rộng
Reflection mờ
→ Brushed / Rough Gold
```

---

# 8. Bước 3 — Đánh dấu Material thành Asset

Sau khi Gold hoàn chỉnh:

1. Chọn material `Gold`.
2. Chuột phải.
3. Chọn:

```text
Mark as Asset
```

Material sẽ xuất hiện biểu tượng Asset.

Có thể hiểu:

```text
Material bình thường
       │
       │ Mark as Asset
       ▼
Reusable Asset
```

---

# 9. Bước 4 — Mở Asset Browser

Trong một Editor bất kỳ, đổi loại Editor thành:

```text
Asset Browser
```

Ví dụ:

```text
Layout Workspace
       ↓
Editor Type
       ↓
Asset Browser
```

Sau đó chọn thư viện tương ứng.

Material `Gold` vừa đánh dấu sẽ xuất hiện.

---

# 10. Asset Browser dùng để làm gì?

Asset Browser không chỉ quản lý material.

Nó có thể chứa:

```text
Asset Browser
│
├── Materials
├── Objects
├── Collections
├── Geometry Nodes
├── Worlds
├── Lights
└── nhiều loại Asset khác
```

Trong bài học này ta chủ yếu tập trung vào:

```text
Materials
```

Có thể bật bộ lọc để Asset Browser chỉ hiển thị Material.

---

# 11. Bước 5 — Tạo ảnh Preview đẹp

Preview mặc định đôi khi không đủ đẹp hoặc khó đánh giá vật liệu.

Giảng viên sử dụng Shader Ball đã được setup ánh sáng sẵn.

Chuyển sang:

```text
Rendered View
```

hoặc render:

```text
Render
→ Render Image
```

Sau khi render xong:

```text
Image
→ Save As
```

Ví dụ:

```text
gold.jpg
```

---

# 12. Gắn custom preview cho Asset

Trong Asset Browser:

```text
N
```

để mở Sidebar.

Sau đó tìm phần liên quan đến preview và chọn ảnh vừa render.

Ví dụ:

```text
Gold Asset
    │
    └── Preview
          │
          └── gold.jpg
```

Kết quả:

```text
Trước

[ quả cầu preview mặc định ]

↓

Sau

[ Shader Ball Gold đẹp, dễ nhận diện ]
```

### Lợi ích

Khi thư viện có hàng chục hoặc hàng trăm material, chỉ cần nhìn thumbnail là có thể nhận ra vật liệu.

---

# 13. Bước 6 — Tạo Asset Catalog

Không nên để toàn bộ material trong `Unassigned/Unsorted`.

Tạo catalog:

```text
Materials
```

sau đó tạo catalog con:

```text
Metallic
```

Rồi chuyển Gold vào:

```text
Materials
└── Metallic
    └── Gold
```

---

# 14. Lưu Asset Catalog

Nếu xuất hiện biểu tượng dấu sao `*`, nghĩa là có thay đổi chưa được lưu.

Nhấn:

```text
Ctrl + S
```

để lưu file.

Sau khi lưu, cấu trúc catalog sẽ được giữ cho lần mở Blender tiếp theo.

---

# 15. Material 03 — Silver

Tạo material mới:

```text
Name: Silver
```

Thiết lập cơ bản:

| Parameter  | Thiết lập             |
| ---------- | --------------------- |
| Base Color | Xám                   |
| Metallic   | `1.0`                 |
| Roughness  | Điều chỉnh tùy bề mặt |

Công thức:

```text
Silver
=
Gray Base Color
+
Metallic 1
+
Controlled Roughness
```

Ví dụ:

```text
Roughness ≈ 0.15
→ polished silver

Roughness ≈ 0.4
→ satin silver

Roughness ≈ 0.65
→ rough silver
```

---

# 16. Đưa Silver vào Library

Quy trình giống Gold:

```text
Tạo Silver
   ↓
Tinh chỉnh
   ↓
Mark as Asset
   ↓
Chuyển sang Metallic Catalog
   ↓
Render Shader Ball
   ↓
Save silver.jpg
   ↓
Set Preview
   ↓
Ctrl + S
```

---

# 17. Vì sao môi trường test nên trung tính?

Giảng viên sử dụng môi trường gần như:

```text
Black + White
```

thay vì HDRI có màu quá mạnh.

Lý do:

```text
HDRI màu mạnh
      ↓
Ánh sáng nhuộm màu material
      ↓
Khó xác định màu thực
```

Trong khi môi trường trung tính:

```text
Neutral Lighting
      ↓
Ít Color Cast
      ↓
Đánh giá Base Color tốt hơn
      ↓
Fine-tune Material chính xác
```

Đây là lý do studio look-dev thường sử dụng lighting tương đối trung tính.

---

# 18. Material 04 — Glass

Tạo material Glass từ Principled BSDF.

Các thông số cần quan tâm:

```text
Glass
│
├── Base Color
├── Transmission
├── Roughness
└── IOR
```

Trong transcript, giảng viên sử dụng IOR khoảng:

```text
IOR ≈ 1.3
```

và thêm một chút sắc xanh.

Một thiết lập khởi đầu có thể là:

| Parameter    |  Giá trị tham khảo |
| ------------ | -----------------: |
| Base Color   |      Xanh rất nhạt |
| Metallic     |                `0` |
| Roughness    |         `0 – 0.15` |
| Transmission |                cao |
| IOR          | khoảng `1.3 – 1.5` |

> Giá trị cụ thể tùy loại kính và phiên bản Blender; điều quan trọng là hiểu vai trò của **Transmission + IOR + Roughness**.

---

# 19. Glass Roughness

### Roughness thấp

```text
Glass
↓
Reflection sắc
↓
Clear Glass
```

### Roughness cao

```text
Glass
↓
Reflection mờ
↓
Frosted Glass
```

---

# 20. Workflow đầy đủ của một Material Asset

Đây là quy trình quan trọng nhất của bài:

```text
┌──────────────────────────┐
│ 1. Tạo Material          │
└─────────────┬────────────┘
              ↓
┌──────────────────────────┐
│ 2. Đặt tên rõ ràng       │
└─────────────┬────────────┘
              ↓
┌──────────────────────────┐
│ 3. Test trên Shader Ball │
└─────────────┬────────────┘
              ↓
┌──────────────────────────┐
│ 4. Fine-tune Shader      │
└─────────────┬────────────┘
              ↓
┌──────────────────────────┐
│ 5. Mark as Asset         │
└─────────────┬────────────┘
              ↓
┌──────────────────────────┐
│ 6. Render Preview        │
└─────────────┬────────────┘
              ↓
┌──────────────────────────┐
│ 7. Gán Custom Preview    │
└─────────────┬────────────┘
              ↓
┌──────────────────────────┐
│ 8. Đưa vào Catalog       │
└─────────────┬────────────┘
              ↓
┌──────────────────────────┐
│ 9. Ctrl + S              │
└──────────────────────────┘
```

---

# 21. Sử dụng Material trong project mới

Giả sử tạo một Blender project mới.

Mở:

```text
Asset Browser
```

Chọn:

```text
My Material Library
```

Sau đó:

```text
Gold
↓
Drag & Drop
↓
Object
```

Material được gán cho object mà không phải tạo shader lại từ đầu.

Nếu viewport đang ở Solid Mode thì có thể khó đánh giá vật liệu.

Chuyển sang:

```text
Material Preview
```

hoặc:

```text
Rendered
```

để kiểm tra.

---

# 22. Đặt tên Material có hệ thống

Khi thư viện còn 5 material:

```text
Gold
Silver
Glass
Plastic
Wood
```

không có vấn đề.

Nhưng với hàng trăm material, cần naming convention.

Ví dụ:

```text
MAT_Metal_Gold_Polished
MAT_Metal_Gold_Rough
MAT_Metal_Silver_Polished

MAT_Plastic_Black_Glossy
MAT_Plastic_Black_Matte

MAT_Glass_Clear
MAT_Glass_Blue
MAT_Glass_Frosted
```

Cấu trúc:

```text
MAT
 │
 ├── Type
 │
 ├── Color / Material
 │
 └── Variant
```

Ví dụ:

```text
MAT_Metal_Gold_Polished
 │     │      │      │
 │     │      │      └── Variant
 │     │      └───────── Material
 │     └──────────────── Category
 └────────────────────── Asset Type
```

---

# 23. Catalog đề xuất cho thư viện lớn

```text
Materials
│
├── Metal
│   ├── Gold
│   ├── Silver
│   ├── Steel
│   ├── Aluminum
│   └── Copper
│
├── Plastic
│   ├── Glossy
│   ├── Matte
│   └── Transparent
│
├── Glass
│   ├── Clear
│   ├── Colored
│   └── Frosted
│
├── Wood
│
├── Fabric
│
├── Leather
│
├── Stone
│
├── Ceramic
│
└── Organic
```

---

# 24. Không trộn Library Master với Project

Nên phân biệt:

```text
Material_Library.blend
│
├── Gold
├── Silver
├── Plastic
└── Glass
```

với:

```text
Watch_Project.blend
House_Project.blend
Product_Project.blend
```

Project chỉ **sử dụng** tài nguyên.

Library là nơi:

* tạo;
* chỉnh sửa;
* tổ chức;
* bảo trì asset.

---

# 25. Khi nào cần cập nhật thư viện?

Trong quá trình học:

```text
Học material mới
        ↓
Tạo material
        ↓
Test
        ↓
Nếu đạt chất lượng
        ↓
Mark as Asset
        ↓
Thêm vào Library
```

Ví dụ thư viện sẽ phát triển:

```text
Ban đầu
│
├── Gold
├── Silver
├── Plastic
└── Glass

Sau này
│
├── Gold
├── Silver
├── Copper
├── Steel
├── Plastic
├── Glass
├── Wood
├── Leather
├── Fabric
├── Stone
└── Ceramic
```

---

# 26. Các lỗi thường gặp

## Lỗi 1 — Không Mark as Asset

Material tồn tại trong `.blend` nhưng không xuất hiện như asset.

**Sửa:**

```text
Material
→ Right Click
→ Mark as Asset
```

---

## Lỗi 2 — Quên lưu file

Catalog vừa tạo có thể chưa được lưu.

Nhấn:

```text
Ctrl + S
```

đặc biệt khi thấy dấu:

```text
*
```

---

## Lỗi 3 — Preview quá khó nhìn

Không nên chỉ dựa vào thumbnail mặc định nếu cần thư viện chuyên nghiệp.

Nên:

```text
Shader Ball
→ Render
→ Save Image
→ Custom Preview
```

---

## Lỗi 4 — Không tổ chức Catalog

Một thư viện như:

```text
Unsorted
├── Gold
├── Plastic
├── Glass
├── Wood
├── Silver
├── Leather
├── ...
```

sẽ nhanh chóng trở nên khó sử dụng.

Nên chia:

```text
Materials
├── Metal
├── Plastic
├── Glass
├── Wood
└── Organic
```

---

# 27. Bài thực hành

Tạo một mini material library gồm ít nhất:

| Material       | Loại    |
| -------------- | ------- |
| Gold           | Metal   |
| Silver         | Metal   |
| Glossy Plastic | Plastic |
| Matte Plastic  | Plastic |
| Clear Glass    | Glass   |
| Blue Glass     | Glass   |

Với mỗi material:

```text
Create
→ Name
→ Shade
→ Test
→ Mark as Asset
→ Render Preview
→ Catalog
→ Save
```

---

# 28. Bài tập nâng cao

Tạo thêm ba biến thể Gold:

```text
Gold
├── Gold Polished
├── Gold Satin
└── Gold Rough
```

Không thay đổi `Metallic`, mà chủ yếu so sánh bằng:

```text
Roughness
```

Quan sát:

```text
Roughness thấp
      ↓
Highlight nhỏ + sắc
      ↓
Polished Gold


Roughness trung bình
      ↓
Highlight rộng hơn
      ↓
Satin Gold


Roughness cao
      ↓
Reflection mờ
      ↓
Rough Gold
```

Đây cũng là cách củng cố kiến thức từ bài **022 — Materials**.

---

# 29. Checklist hoàn thành

### Material

* [ ] Tạo được Glossy Plastic.
* [ ] Tạo được Gold.
* [ ] Tạo được Silver.
* [ ] Tạo được Glass.
* [ ] Hiểu Metallic không phải nút “tăng độ bóng”.
* [ ] Hiểu Roughness điều khiển độ sắc của reflection/highlight.

### Asset Library

* [ ] Material có tên rõ ràng.
* [ ] Material đã được **Mark as Asset**.
* [ ] Mở và sử dụng được **Asset Browser**.
* [ ] Tạo được Asset Catalog.
* [ ] Gold và Silver nằm trong nhóm Metal/Metallic.
* [ ] Có preview dễ nhận biết.
* [ ] Đã `Ctrl + S` sau khi thay đổi catalog.

### Workflow

* [ ] Library nằm trong file `.blend` riêng.
* [ ] Không phụ thuộc vào scene project chính.
* [ ] Có thể mở một Blender project mới và tìm thấy library.
* [ ] Có thể kéo material từ Asset Browser sang object.
* [ ] Kiểm tra material trong Material Preview hoặc Rendered View.

---

# 30. Ghi nhớ nhanh

> **Material Library = Create once → Organize → Preview → Reuse many times.**

```text
Principled BSDF
      ↓
Tạo Material
      ↓
Shader Ball
      ↓
Mark as Asset
      ↓
Custom Preview
      ↓
Asset Catalog
      ↓
Material Library
      ↓
Drag & Drop vào mọi Project
```

Điểm quan trọng nhất của bài **023** không phải chỉ là tạo **Gold, Silver hay Glass**, mà là hình thành workflow xây dựng **một thư viện vật liệu cá nhân có tổ chức**, giúp những project Blender sau này nhanh hơn và đồng nhất hơn.

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
