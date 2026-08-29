# 020 — Material and Library Panel

| Thuộc tính     | Nội dung                                                                 |
| -------------- | ------------------------------------------------------------------------ |
| **Phần**       | 03 — Materials                                                           |
| **Thời lượng** | 5:48                                                                     |
| **Chủ đề**     | Shading Workspace, Material Editor, Asset Library và Node Wrangler       |
| **Mức độ**     | Cơ bản                                                                   |
| **Trọng tâm**  | Làm quen môi trường tạo vật liệu và chuẩn bị thư viện tài nguyên cá nhân |

---

## 1. Mục tiêu bài học

Sau bài này, bạn cần:

* [ ] Hiểu **Material** trong Blender là gì.
* [ ] Biết khái niệm **PBR — Physically Based Rendering**.
* [ ] Biết chuyển sang workspace **Shading**.
* [ ] Nhận biết các khu vực chính trong Shading Workspace.
* [ ] Biết kiểm tra material dưới nhiều môi trường ánh sáng khác nhau.
* [ ] Tạo và đăng ký **Asset Library** cá nhân.
* [ ] Hiểu cách tổ chức thư viện material/model/effect.
* [ ] Biết vai trò của **Node Wrangler**.
* [ ] Điều hướng cơ bản trong **Shader/Node Editor**.

---

# 2. Material là gì?

Trong thế giới thực, vật thể được cấu thành từ nhiều loại vật liệu khác nhau:

* Gỗ — Wood
* Nhựa — Plastic
* Kim loại — Metal
* Kính — Glass
* Cao su — Rubber
* Da — Leather
* Vật liệu hữu cơ — Organic materials

Trong Blender, chúng ta mô phỏng các đặc tính đó bằng **Material**.

Ví dụ:

```text
Object
   │
   ▼
Material
   │
   ├── Màu sắc
   ├── Độ nhám
   ├── Kim loại
   ├── Độ trong suốt
   ├── Phản xạ
   └── Texture
```

Material quyết định **bề mặt của object phản ứng với ánh sáng như thế nào**.

---

# 3. PBR — Physically Based Rendering

Blender sử dụng workflow vật liệu hiện đại gọi là:

> **PBR — Physically Based Rendering**

PBR mô phỏng cách ánh sáng tương tác với vật liệu dựa trên các nguyên lý vật lý.

Một material PBR thường có các thuộc tính như:

| Thuộc tính     | Ý nghĩa               |
| -------------- | --------------------- |
| **Base Color** | Màu cơ bản            |
| **Roughness**  | Độ nhám               |
| **Metallic**   | Mức độ kim loại       |
| **Normal**     | Chi tiết bề mặt       |
| **Alpha**      | Độ trong suốt         |
| **Emission**   | Khả năng tự phát sáng |

Ví dụ:

```text
Kim loại bóng
Metallic = 1
Roughness = thấp

Nhựa mờ
Metallic = 0
Roughness = trung bình/cao

Kính
Transmission = cao
Roughness = thấp
```

Workflow PBR không chỉ có trong Blender mà còn phổ biến trong các phần mềm 3D khác.

---

# 4. Mở Shading Workspace

Để bắt đầu làm việc với Material:

```text
Thanh Workspace phía trên
        ↓
     Shading
```

Workspace này được thiết kế dành riêng cho việc:

* tạo material;
* chỉnh shader;
* gắn texture;
* preview material;
* kiểm tra ánh sáng.

---

# 5. Cấu trúc Shading Workspace

Shading Workspace gồm nhiều khu vực.

```text
┌───────────────────────────────────────────────┐
│                  3D Viewport                  │
│                                               │
│          Xem material trên object             │
├───────────────────────────────┬───────────────┤
│                               │               │
│         Node Editor           │  Properties   │
│                               │  / Outliner   │
│     Tạo và nối Shader Node    │               │
└───────────────────────────────┴───────────────┘
```

Ngoài ra còn có khu vực dùng để quản lý và duyệt texture.

---

## 5.1. File Browser

File Browser cho phép:

* duyệt các texture;
* mở ảnh;
* kéo texture vào material;
* sử dụng ảnh làm reference.

Ví dụ:

```text
Texture Folder
     │
     ▼
File Browser
     │
     ▼
Drag & Drop
     │
     ▼
Shader Editor
```

---

# 6. Shader Editor / Node Editor

Khu vực quan trọng nhất nằm phía dưới Shading Workspace.

Đây là:

> **Shader Editor**, hay thường gọi là **Node Editor**.

Material được xây dựng bằng các **node**.

Ví dụ đơn giản:

```text
┌──────────────────────┐
│ Principled BSDF      │
│                      │
│ Base Color           │
│ Roughness            │
│ Metallic             │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│ Material Output      │
│                      │
│ Surface              │
└──────────────────────┘
```

Đây là cấu trúc material cơ bản trong Blender.

---

# 7. Tư duy Node-Based

Không nên quá lo lắng khi mới nhìn thấy Node Editor.

Node thực chất hoạt động theo logic:

```text
Input
  ↓
Xử lý
  ↓
Shader
  ↓
Output
```

Ví dụ với texture:

```text
Image Texture
      │
      ▼
Principled BSDF
      │
      ▼
Material Output
```

Khi material phức tạp hơn:

```text
Texture
   │
   ├── Base Color
   ├── Roughness
   ├── Metallic
   └── Normal
          │
          ▼
   Principled BSDF
          │
          ▼
   Material Output
```

---

# 8. Material Preview trong Viewport

Trong Shading Workspace, Blender thường sử dụng một môi trường ánh sáng HDRI để preview material.

Điều này giúp chúng ta đánh giá:

* màu sắc;
* phản xạ;
* roughness;
* metallic;
* highlight.

mà chưa cần dựng hệ thống đèn hoàn chỉnh.

---

# 9. Hai quả cầu preview

Trong môi trường Shading có các vật thể preview giúp đánh giá vật liệu.

Chúng đặc biệt hữu ích để quan sát sự khác nhau giữa:

```text
Matte Surface
     ↕
Reflective Surface
```

Tuy nhiên trong quá trình làm việc thực tế, thường có thể xem kết quả trực tiếp trên model.

---

# 10. Kiểm tra Material bằng nhiều môi trường ánh sáng

Một material không nên chỉ được kiểm tra dưới một nguồn sáng.

Blender cung cấp nhiều HDRI Studio Light khác nhau.

Ví dụ:

```text
Studio
Forest
Interior
Outdoor
Warm light
Cool light
```

Material có thể trông tốt trong một môi trường nhưng không tốt trong môi trường khác.

Vì vậy nên kiểm tra:

```text
Material
   ↓
Studio Light
   ↓
Interior
   ↓
Outdoor
   ↓
Đánh giá kết quả
```

---

# 11. Scene Lights

Trong Material Preview có tùy chọn:

> **Scene Lights**

Khi bật:

```text
Scene Lights = ON
```

Blender sử dụng các đèn thật đang tồn tại trong Scene.

Ví dụ:

```text
Point Light
Area Light
Sun
Spot Light
```

Khi tắt:

```text
Scene Lights = OFF
```

Blender sử dụng Studio Lighting để preview.

Trong giai đoạn làm material, thường có thể tắt Scene Lights để dễ đánh giá shader.

---

# 12. Scene World

Tùy chọn:

> **Scene World**

quyết định Blender có sử dụng World Environment của scene hay không.

### Khi bật

```text
Scene World = ON
```

Viewport sử dụng:

```text
World Shader
     +
HDRI của scene
```

### Khi tắt

Blender dùng HDRI preview tích hợp sẵn.

---

# 13. Điều chỉnh HDRI Preview

Trong Material Preview, môi trường HDRI có thể điều chỉnh.

Các thông số thường gặp:

* Rotation
* Strength
* Background Alpha
* Blur

---

## Rotation

Xoay môi trường ánh sáng.

```text
HDRI
  ↓ Rotate
Highlight thay đổi vị trí
```

Đặc biệt hữu ích khi kiểm tra phản xạ trên:

* kim loại;
* kính;
* sơn bóng.

---

## Strength

Điều chỉnh cường độ ánh sáng.

```text
Strength ↑
→ môi trường sáng hơn

Strength ↓
→ môi trường tối hơn
```

---

## Background Alpha

Có thể làm background:

* hiện rõ;
* bán trong suốt;
* gần như biến mất.

---

## Blur

Làm mờ ảnh HDRI phía sau.

Điều này giúp tập trung vào object thay vì background.

---

# 14. Tại sao phải kiểm tra nhiều loại ánh sáng?

Giả sử tạo một material kim loại.

Nếu chỉ kiểm tra bằng một HDRI:

```text
Studio A
   ↓
Looks good
```

chưa đủ.

Nên kiểm tra:

```text
             ┌── Studio
             │
Material ────┼── Interior
             │
             ├── Forest
             │
             └── Outdoor
```

Nếu material vẫn đọc tốt trong nhiều điều kiện ánh sáng thì khả năng material được thiết lập đúng sẽ cao hơn.

---

# 15. Xây dựng thư viện cá nhân

Một workflow quan trọng được giới thiệu trong bài là tạo:

> **My Library**

Đây sẽ là thư viện cá nhân chứa các tài nguyên tái sử dụng.

Ví dụ:

```text
My_Library/
│
├── Materials/
│
├── Models/
│
├── Effects/
│
├── Textures/
└── Utilities/
```

Ban đầu thư viện có thể trống.

Trong quá trình học và làm dự án, chúng ta bổ sung tài nguyên dần.

---

# 16. Vì sao nên có thư viện cá nhân?

Nếu mỗi project đều tạo lại material từ đầu:

```text
Project A → tạo Metal
Project B → tạo Metal lại
Project C → tạo Metal lại
```

sẽ tốn rất nhiều thời gian.

Thay vào đó:

```text
              ┌── Project A
              │
My Library ───┼── Project B
              │
              └── Project C
```

Bạn có thể tái sử dụng:

* material;
* model;
* effect;
* node group;
* shader;
* asset.

Đây là một trong những cách tăng tốc workflow rất hiệu quả.

---

# 17. Cấu trúc Library khuyến nghị

Theo bài học, trước tiên tạo thư mục chính:

```text
My_Library
```

Sau đó tạo thư mục:

```text
My_Library/
└── Materials/
```

Có thể mở rộng về sau:

```text
My_Library/
│
├── Materials/
│   ├── Metal/
│   ├── Wood/
│   ├── Plastic/
│   ├── Glass/
│   └── Fabric/
│
├── Models/
│
├── Effects/
│
└── Node_Groups/
```

---

# 18. Quy tắc đặt tên

Giảng viên khuyến nghị sử dụng tên tiếng Anh.

Ví dụ:

```text
My_Library
Materials
Metal
Wood
Glass
Plastic
```

thay vì sử dụng ký tự đặc biệt hoặc hệ chữ có thể gây vấn đề tương thích trong một số pipeline.

Trong production, tên tiếng Anh cũng giúp dễ:

* chia sẻ project;
* scripting;
* export;
* quản lý asset;
* làm việc nhóm.

---

# 19. Thêm Asset Library vào Blender

Sau khi tạo thư mục:

```text
My_Library/
```

cần đăng ký nó với Blender.

Quy trình:

```text
Edit
 ↓
Preferences
 ↓
File Paths
 ↓
Asset Libraries
 ↓
+
 ↓
Chọn My_Library
 ↓
Add Asset Library
```

---

## Quy trình đầy đủ

### Bước 1 — Tạo folder

Ví dụ:

```text
D:/Blender/My_Library/
```

---

### Bước 2 — Copy đường dẫn

Copy path của folder.

---

### Bước 3 — Mở Preferences

```text
Edit
→ Preferences
```

---

### Bước 4 — File Paths

Chọn:

```text
File Paths
```

---

### Bước 5 — Asset Libraries

Tìm phần:

```text
Asset Libraries
```

Nhấn:

```text
+
```

---

### Bước 6 — Chọn folder

Chọn:

```text
My_Library
```

---

### Bước 7 — Add Asset Library

Blender sẽ đăng ký thư mục này thành một Asset Library.

---

### Bước 8 — Lưu Preferences

Đảm bảo thay đổi được lưu vào Preferences.

---

# 20. Asset Library sẽ phát triển dần

Ban đầu:

```text
My Library
└── Empty
```

Sau một thời gian:

```text
My Library
│
├── Metal_Brushed
├── Metal_Polished
├── Plastic_Black
├── Glass_Clear
├── Wood_Oak
├── Fabric_Cotton
├── Water
├── Skin
└── ...
```

Thư viện này dần trở thành **bộ công cụ cá nhân của 3D Artist**.

---

# 21. Node Wrangler

Một công cụ quan trọng khác trong material workflow là:

> **Node Wrangler**

Đây là bộ công cụ hỗ trợ Shader Editor, giúp thao tác với node nhanh hơn.

Node Wrangler chủ yếu cung cấp:

* hotkey;
* tự động kết nối texture;
* preview node;
* quản lý node nhanh;
* tạo node setup phổ biến.

---

# 22. Kích hoạt Node Wrangler

Trong bài học, quy trình được mô tả:

```text
Edit
 ↓
Preferences
 ↓
Add-ons
 ↓
Search
 ↓
Node Wrangler
 ↓
Enable
```

> **Lưu ý phiên bản Blender:** vị trí quản lý Node Wrangler có thể khác giữa các phiên bản Blender mới/cũ, nhưng mục tiêu vẫn là bảo đảm các công cụ Node Wrangler có thể sử dụng trong Shader Editor.

---

# 23. Vì sao Node Wrangler quan trọng?

Nếu không có các công cụ hỗ trợ, việc tạo material texture có thể cần rất nhiều thao tác.

Ví dụ:

```text
BaseColor
Roughness
Metallic
Normal
Displacement
```

Phải tạo và kết nối nhiều node.

Node Wrangler giúp rút ngắn các workflow này đáng kể.

Sau này có thể gặp workflow:

```text
Select Principled BSDF
        ↓
Node Wrangler
        ↓
Chọn bộ PBR Texture
        ↓
Tự động tạo node
        ↓
Tự động nối shader
```

---

# 24. Navigation trong Node Editor

Điều hướng Node Editor khá giống với 3D Viewport.

Các thao tác quan trọng:

| Thao tác                | Chức năng      |
| ----------------------- | -------------- |
| **Mouse Wheel**         | Zoom           |
| **Middle Mouse Button** | Pan            |
| **Left Mouse Button**   | Chọn/kéo node  |
| **Numpad `.`**          | Frame Selected |

---

# 25. Zoom Node Editor

Dùng:

```text
Mouse Wheel
```

để:

```text
Zoom In
   ↕
Zoom Out
```

Khi material có nhiều node, đây là thao tác dùng liên tục.

---

# 26. Di chuyển Node

Chọn node bằng chuột trái.

Sau đó kéo node đến vị trí mong muốn.

```text
Before

[Texture]        [Shader]


After

[Texture] → [Shader]
```

Việc tổ chức node sạch rất quan trọng khi shader trở nên phức tạp.

---

# 27. Pan trong Node Editor

Giữ:

```text
Middle Mouse Button
```

và kéo chuột.

Bạn có thể di chuyển vùng nhìn:

```text
← ↑ ↓ →
```

mà không làm thay đổi vị trí node.

---

# 28. Frame Selected

Khi shader có rất nhiều node:

```text
              [Node]
        [Node]       [Node]

[Node]                         [Node]

              [Node]
```

rất dễ mất vị trí node đang cần.

Cách xử lý:

1. Chọn node.
2. Nhấn:

```text
Numpad .
```

Viewport của Node Editor sẽ focus vào node được chọn.

---

# 29. Workflow tổng quát của phần Material

```text
Mở Shading Workspace
        ↓
Chọn Object
        ↓
Tạo Material
        ↓
Mở Shader Editor
        ↓
Tạo / kết nối Node
        ↓
Kiểm tra Material Preview
        ↓
Thử nhiều HDRI
        ↓
Tinh chỉnh Material
        ↓
Đưa Material tốt vào Library
        ↓
Tái sử dụng cho project sau
```

---

# 30. Workflow xây dựng thư viện lâu dài

```text
Học / Project
     ↓
Tạo Material
     ↓
Material đạt chất lượng?
     │
     ├── Không → tiếp tục chỉnh
     │
     └── Có
          ↓
      Chuẩn hóa tên
          ↓
      Lưu thành Asset
          ↓
       My Library
          ↓
     Project tương lai
```

---

# 31. Cách đặt tên Material có hệ thống

Không nên đặt:

```text
Material
Material.001
Material.002
Material.003
```

Nên sử dụng:

```text
MAT_Metal_Brushed
MAT_Metal_Polished
MAT_Wood_Oak
MAT_Plastic_Black
MAT_Glass_Clear
```

Có thể sử dụng convention:

```text
MAT_<Type>_<Variant>
```

Ví dụ:

```text
MAT_Metal_Steel
MAT_Metal_Gold
MAT_Wood_Walnut
MAT_Plastic_Red
```

---

# 32. Nguyên tắc tránh duplicate material

Một lỗi phổ biến là:

```text
Metal
Metal.001
Metal.002
Metal.003
Metal.004
```

trong khi tất cả gần như giống nhau.

Thay vì tạo material mới liên tục:

```text
Object A ─┐
Object B ─┼── MAT_Metal_Steel
Object C ─┘
```

hãy tái sử dụng material hiện có.

Chỉ duplicate khi thực sự cần một biến thể riêng.

---

# 33. Ghi nhớ nhanh

```text
MATERIAL SYSTEM
│
├── PBR
│
├── Shading Workspace
│   ├── Viewport
│   ├── File Browser
│   ├── Shader Editor
│   └── Properties
│
├── Preview Lighting
│   ├── Scene Lights
│   ├── Scene World
│   └── Studio HDRI
│
├── Asset Library
│   └── My_Library/
│
└── Node Workflow
    ├── Node Wrangler
    ├── Zoom
    ├── Pan
    └── Frame Selected
```

---

# 34. Thực hành đề xuất

## Bài tập 1 — Khám phá Shading Workspace

Tạo một Cube và:

1. Chuyển sang **Shading Workspace**.
2. Xác định:

   * 3D Viewport;
   * Shader Editor;
   * Outliner;
   * Properties.
3. Quan sát material mặc định.

---

## Bài tập 2 — Kiểm tra Studio Light

Thử ít nhất ba môi trường:

```text
Studio
Interior
Outdoor/Forest
```

Quan sát sự thay đổi của:

* highlight;
* shadow;
* màu sắc;
* phản xạ.

---

## Bài tập 3 — Tạo thư viện cá nhân

Tạo:

```text
My_Library/
│
├── Materials/
├── Models/
└── Effects/
```

Sau đó đăng ký `My_Library` trong Asset Libraries.

---

## Bài tập 4 — Làm quen Node Editor

Trong Shader Editor:

1. Chọn `Principled BSDF`.
2. Zoom vào/ra.
3. Pan viewport.
4. Di chuyển node.
5. Chọn node và nhấn `Numpad .`.

---

# 35. Checklist hoàn thành

* [ ] Hiểu Material và PBR là gì.
* [ ] Mở được Shading Workspace.
* [ ] Xác định được Shader Editor.
* [ ] Hiểu vai trò của node.
* [ ] Phân biệt Scene Lights và Studio Lighting.
* [ ] Hiểu Scene World.
* [ ] Biết thay đổi môi trường HDRI preview.
* [ ] Biết xoay và chỉnh intensity của HDRI.
* [ ] Tạo được folder `My_Library`.
* [ ] Thêm được thư viện vào Blender Asset Libraries.
* [ ] Có cấu trúc thư mục `Materials`.
* [ ] Đặt tên asset/material có hệ thống.
* [ ] Biết mục đích của Node Wrangler.
* [ ] Zoom, pan và Frame Selected được trong Node Editor.
* [ ] Không tạo duplicate material ngoài chủ ý.

---

# 36. Tóm tắt bài học

Bài này chủ yếu **chuẩn bị môi trường làm việc cho toàn bộ phần Materials**, chưa đi sâu vào việc xây dựng shader phức tạp.

Ba nội dung quan trọng nhất cần nhớ:

```text
1. Shading Workspace
        ↓
   nơi tạo và kiểm tra material

2. Node Editor
        ↓
   nơi xây dựng shader bằng node

3. Asset Library
        ↓
   nơi lưu tài nguyên để tái sử dụng
```

Tư duy nên hình thành ngay từ đầu là:

> **Tạo một lần → chuẩn hóa → lưu vào Library → tái sử dụng nhiều lần.**

Đây là nền tảng để xây dựng workflow Material nhanh, sạch và có khả năng mở rộng khi làm các project Blender lớn hơn.

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
