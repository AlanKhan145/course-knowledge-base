# 027 — Texture Coordinate

| Thuộc tính        | Nội dung                                                     |
| ----------------- | ------------------------------------------------------------ |
| **Phần**          | 03 — Materials                                               |
| **Thời lượng**    | 3:43                                                         |
| **Chủ đề**        | UV, Generated, Object, Normal và Mapping                     |
| **Công cụ chính** | Texture Coordinate, Mapping, UV Editor, Empty, Node Wrangler |

---

## 1. Mục tiêu bài học

Sau bài này, cần hiểu cách Blender xác định **texture được đặt ở đâu và theo hướng nào trên vật thể**.

Mục tiêu chính:

* Phân biệt các nguồn tọa độ như **UV**, **Generated**, **Object**, **Normal**.
* Biết khi nào nên dùng từng loại coordinate.
* Sử dụng node **Mapping** để:

  * di chuyển texture;
  * xoay texture;
  * thay đổi tỷ lệ texture.
* Sử dụng một **Empty** để điều khiển texture bằng Object Coordinates.
* Biết chỉnh UV ngay trong workspace **Shading**.

---

# 2. Texture Coordinate là gì?

Một texture ảnh chỉ chứa thông tin màu hoặc dữ liệu bề mặt.

Blender vẫn cần biết:

> Pixel nào của texture sẽ nằm ở vị trí nào trên model?

Thông tin đó được cung cấp bởi **Texture Coordinates**.

Sơ đồ cơ bản:

```text
3D Object
   │
   ▼
Texture Coordinate
   │
   ├── UV
   ├── Generated
   ├── Object
   ├── Normal
   └── ...
   │
   ▼
Mapping
   │
   ▼
Image Texture / Procedural Texture
   │
   ▼
Principled BSDF
   │
   ▼
Material Output
```

Có thể hiểu:

* **Texture Coordinate** = hệ tọa độ.
* **Mapping** = biến đổi hệ tọa độ đó.
* **Image Texture** = hình ảnh được đặt dựa trên tọa độ.

---

# 3. Ví dụ: gắn vật liệu kim loại gỉ lên cánh cửa

Trong bài học, một vật liệu **rusty metal** được áp dụng cho cánh cửa.

Nếu có một bộ PBR texture:

```text
Base Color
Roughness
Metallic
Normal
Displacement
...
```

và đang bật **Node Wrangler**, có thể sử dụng:

```text
Ctrl + Shift + T
```

Sau đó chọn toàn bộ texture cần dùng.

Ví dụ:

```text
A → chọn tất cả texture
        ↓
Principled Texture Setup
        ↓
Node Wrangler tự kết nối PBR maps
```

Kết quả có thể giống:

```text
Base Color ────────────────┐
Roughness ─────────────────┤
Metallic ──────────────────┤
Normal → Normal Map ───────┤
                           ▼
                    Principled BSDF
                           │
                           ▼
                    Material Output
```

> `Ctrl + Shift + T` là chức năng của **Node Wrangler**, không phải phím mặc định độc lập của hệ material.

---

# 4. Điều chỉnh độ sáng của texture

Nếu Base Color quá tối, có thể chèn một node điều chỉnh màu, chẳng hạn:

```text
Image Texture
     │
     ▼
RGB Curves
     │
     ▼
Principled BSDF
```

RGB Curves cho phép điều chỉnh:

* vùng tối;
* vùng trung gian;
* vùng sáng;
* độ tương phản.

Tuy nhiên không nên dùng RGB Curves lên các map dữ liệu như:

* Roughness;
* Metallic;
* Normal;

nếu không có mục đích kỹ thuật rõ ràng.

---

# 5. Xem UV ngay trong Shading Workspace

Không nhất thiết phải chuyển sang workspace **UV Editing**.

Có thể đổi một editor hiện tại thành:

```text
UV Editor
```

Ví dụ bố cục:

```text
┌──────────────────────────┬─────────────────────┐
│                          │                     │
│       3D Viewport        │      UV Editor      │
│                          │                     │
├──────────────────────────┴─────────────────────┤
│                                               │
│                 Shader Editor                 │
│                                               │
└───────────────────────────────────────────────┘
```

Điều này rất tiện khi vừa:

* xem model;
* chỉnh UV;
* chỉnh shader.

---

# 6. Tạo UV bằng Cube Projection

Với vật thể dạng hộp như cánh cửa, có thể dùng:

```text
Tab
↓
Edit Mode
↓
A
↓
U
↓
Cube Projection
```

Sơ đồ:

```text
Door Mesh
   │
   ▼
Edit Mode
   │
   ▼
Select All
   │
   ▼
U
   │
   ▼
Cube Projection
   │
   ▼
UV Islands
```

**Cube Projection** đặc biệt hữu ích với:

* hộp;
* tường;
* cửa;
* tủ;
* kiến trúc;
* hard-surface hình khối.

---

# 7. Texture Coordinate Node

Node quan trọng của bài:

```text
Texture Coordinate
```

Nó cung cấp nhiều đầu ra:

```text
Texture Coordinate
│
├── Generated
├── Normal
├── UV
├── Object
├── Camera
├── Window
└── Reflection
```

Trong bài này cần tập trung chủ yếu vào:

1. **UV**
2. **Generated**
3. **Object**
4. hiểu cơ bản về **Normal**

---

# 8. UV Coordinates

## UV là gì?

UV là hệ tọa độ 2D được tạo riêng cho bề mặt mesh.

```text
3D Mesh
   │
   │ Unwrap
   ▼
2D UV Map
   │
   ▼
Texture
```

Ví dụ:

```text
Texture Coordinate: UV
          │
          ▼
       Mapping
          │
          ▼
    Image Texture
          │
          ▼
   Principled BSDF
```

UV đặc biệt phù hợp với **image texture**.

---

## Khi nào nên dùng UV?

Dùng UV khi texture phải được đặt chính xác.

Ví dụ:

* gỗ;
* kim loại gỉ;
* nhãn sản phẩm;
* chữ;
* decal;
* khuôn mặt;
* quần áo;
* texture PBR từ thư viện.

Ví dụ một cánh cửa:

```text
┌────────────────────┐
│       RUST         │
│   ▓▓▓              │
│          ▓▓▓▓      │
│                    │
│ ▓▓                 │
└────────────────────┘
          │
          │ UV
          ▼
┌────────────────────┐
│   Cánh cửa 3D      │
│   được đặt texture │
│   đúng vị trí      │
└────────────────────┘
```

---

# 9. Generated Coordinates

`Generated` là tọa độ Blender tự tạo dựa trên object.

```text
Texture Coordinate
       │
   Generated
       │
       ▼
    Mapping
       │
       ▼
Procedural Texture
```

Generated thường hoạt động khá tốt với:

* object đơn giản;
* procedural texture;
* noise;
* voronoi;
* marble;
* cloud;
* các shader không cần UV chính xác.

---

## Đặc điểm quan trọng

Generated coordinates có liên hệ với **bounding box của object**.

Có thể hình dung:

```text
Bounding Box

(0,1) ┌────────────────────┐ (1,1)
      │                    │
      │      Object        │
      │                    │
(0,0) └────────────────────┘ (1,0)
```

Blender ánh xạ tọa độ vào không gian bao quanh object.

Do đó khi:

* hình dạng object thay đổi;
* tỷ lệ bounding box thay đổi;

texture dùng Generated có thể thay đổi cách phân bố.

---

# 10. Generated và UV khác nhau thế nào?

| UV                                                           | Generated                               |
| ------------------------------------------------------------ | --------------------------------------- |
| Do người dùng tạo/unwrap                                     | Blender tự tạo                          |
| Kiểm soát rất cao                                            | Thiết lập nhanh                         |
| Tốt cho Image Texture                                        | Tốt cho procedural                      |
| Có UV islands                                                | Không cần unwrap                        |
| Phù hợp decal/logo                                           | Không thích hợp cho placement chính xác |
| Không phụ thuộc trực tiếp vào automatic bounding-box mapping | Liên hệ với bounding box                |

Quy tắc dễ nhớ:

```text
Cần texture nằm chính xác?
        │
       Có
        ▼
       UV

Không cần placement chính xác,
chỉ cần texture phủ object?
        │
       Có
        ▼
 Generated / Object
```

---

# 11. Mapping Node

Sau Texture Coordinate, thường sẽ có:

```text
Mapping
```

Node này cho phép biến đổi tọa độ trước khi đưa vào texture.

```text
Texture Coordinate
       │
       ▼
     Mapping
       │
       ├── Location
       ├── Rotation
       └── Scale
       │
       ▼
  Image Texture
```

---

# 12. Location — di chuyển texture

Ví dụ:

```text
Mapping → Location X
```

thay đổi sẽ làm texture trượt theo một hướng.

Có thể hiểu:

```text
Ban đầu

┌─────────────────┐
│ RUST             │
│      RUST        │
│            RUST  │
└─────────────────┘

Location thay đổi

┌─────────────────┐
│       RUST      │
│ RUST            │
│           RUST  │
└─────────────────┘
```

Điểm quan trọng:

> Mapping không nhất thiết đang chỉnh UV mesh; nó đang biến đổi tọa độ được gửi vào texture.

Do đó có thể thay đổi vị trí texture mà không phá UV unwrap gốc.

---

# 13. Rotation — xoay texture

Ví dụ texture chạy sai hướng:

```text
||||||||||||||
||||||||||||||
```

nhưng cần:

```text
==============
==============
```

Có thể chỉnh:

```text
Mapping
→ Rotation
→ Z
```

Ví dụ:

```text
Rotation Z = 90°
```

Texture sẽ được xoay trong không gian mapping.

---

# 14. Scale — thay đổi kích thước pattern

Mapping Scale rất thường được sử dụng.

Ví dụ:

```text
Scale nhỏ
→ chi tiết texture trông lớn hơn.

Scale lớn
→ texture lặp nhiều hơn
→ chi tiết trông nhỏ hơn.
```

Có thể hình dung:

```text
Scale 1

┌───────────────────┐
│       ███         │
│                   │
│          ████     │
└───────────────────┘
```

```text
Scale 4

┌───────────────────┐
│ ██ ██ █ ██ █ ██  │
│ █ ██ ██ █ ██ █   │
│ ██ █ ██ ██ █ ██  │
└───────────────────┘
```

Đây là điểm dễ nhầm:

> Tăng giá trị Mapping Scale thường làm pattern xuất hiện **nhỏ hơn và lặp nhiều hơn**.

---

# 15. Giữ `Shift` khi chỉnh giá trị

Khi kéo một thông số:

```text
Shift + Drag
```

cho phép thay đổi giá trị chậm hơn và chính xác hơn.

Rất hữu ích cho:

* Mapping Location;
* Rotation;
* Scale;
* Roughness;
* Color;
* các giá trị shader nhỏ.

---

# 16. Ctrl + T với Node Wrangler

Nếu đang chọn một node **Image Texture**, có thể nhấn:

```text
Ctrl + T
```

Node Wrangler thường tạo:

```text
Texture Coordinate
       │
       ▼
     Mapping
       │
       ▼
   Image Texture
```

Thay vì tự thêm từng node.

Workflow:

```text
Chọn Image Texture
       │
       ▼
     Ctrl + T
       │
       ▼
Texture Coordinate
       +
     Mapping
```

Đây là một trong những shortcut hữu ích nhất khi làm shader trong Blender.

---

# 17. Object Coordinates

Một phương pháp mạnh khác là:

```text
Texture Coordinate → Object
```

Thay vì dùng UV của chính mesh, Blender sử dụng hệ tọa độ của một object khác.

Ví dụ:

```text
Empty
  │
  │ Coordinates
  ▼
Texture Coordinate: Object
  │
  ▼
Mapping
  │
  ▼
Texture
  │
  ▼
Door
```

---

# 18. Sử dụng Empty để điều khiển texture

Tạo Empty:

```text
Shift + A
↓
Empty
↓
Plain Axes
```

Sau đó chọn Empty trong Texture Coordinate.

Workflow:

```text
Shift + A
   │
   ▼
 Empty
   │
   ▼
Texture Coordinate
Object = Empty
   │
   ▼
Texture sử dụng tọa độ Empty
```

---

# 19. Di chuyển Empty

Khi:

```text
G
```

để di chuyển Empty, hệ tọa độ texture cũng thay đổi.

```text
Empty
   ↓ Move

Texture
   ↓
thay đổi vị trí
```

Điều này cho phép chỉnh texture ngay trong 3D Viewport.

---

# 20. Xoay Empty

Ví dụ:

```text
R → X
```

để xoay Empty quanh X.

Texture sẽ thay đổi hướng theo hệ tọa độ đó.

```text
Empty Rotation
      │
      ▼
Object Coordinates
      │
      ▼
Texture Rotation
```

Đây là cách rất trực quan để định hướng procedural texture.

---

# 21. Scale Empty

Có thể dùng:

```text
S
```

để scale Empty.

Texture được điều khiển bởi Object Coordinates cũng thay đổi scale tương ứng.

Workflow rất tiện:

```text
G → Position
R → Rotation
S → Scale
```

Tức là có thể điều khiển texture gần giống như điều khiển một object thật.

---

# 22. Khi nào nên dùng Object Coordinates?

Object Coordinates rất hữu ích với:

* Noise Texture;
* Voronoi Texture;
* Gradient Texture;
* Wave Texture;
* procedural materials;
* nhiều object cần dùng chung một hệ tọa độ;
* hiệu ứng cần animate texture.

Ví dụ:

```text
Empty
  │
  ▼
Object Coordinate
  │
  ▼
Noise Texture
  │
  ▼
ColorRamp
  │
  ▼
Principled BSDF
```

Animate Empty:

```text
Frame 1
Empty Location X = 0

Frame 100
Empty Location X = 5
```

→ procedural texture có thể trượt trên bề mặt.

---

# 23. Normal Coordinates

Texture Coordinate còn có output:

```text
Normal
```

Nó đại diện cho **hướng normal của bề mặt trong không gian**, chứ **không phải Normal Map texture**.

Đây là hai khái niệm khác nhau:

### Texture Coordinate → Normal

```text
Surface Normal Direction
        │
        ▼
Procedural mapping/effect
```

### Normal Map PBR

```text
Normal Texture
     │
     ▼
Normal Map Node
     │
     ▼
Principled BSDF → Normal
```

> Không nên nhầm output **Normal** của Texture Coordinate với node **Normal Map**.

---

# 24. So sánh UV, Generated và Object

| Coordinate    | Nguồn               | Ưu điểm                  | Phù hợp               |
| ------------- | ------------------- | ------------------------ | --------------------- |
| **UV**        | UV Map của mesh     | Chính xác nhất           | PBR, decal, ảnh       |
| **Generated** | Blender tự sinh     | Nhanh, không unwrap      | Procedural            |
| **Object**    | Hệ tọa độ object    | Linh hoạt, dễ điều khiển | Procedural, animation |
| **Normal**    | Hướng normal bề mặt | Tạo effect theo hướng    | Shader đặc biệt       |

---

# 25. Workflow cho Image Texture

Với texture kim loại gỉ của cánh cửa:

```text
UV Map
   │
   ▼
Texture Coordinate
   │ UV
   ▼
Mapping
   │
   ▼
Image Texture
   │
   ▼
Principled BSDF
```

Đây thường là lựa chọn thích hợp nhất cho texture PBR ảnh.

---

# 26. Workflow cho Procedural Texture

Nếu tạo vật liệu hoàn toàn procedural:

```text
Texture Coordinate
     │
  Generated
     │
     ▼
   Mapping
     │
     ▼
Noise / Voronoi / Wave
     │
     ▼
   ColorRamp
     │
     ▼
Principled BSDF
```

Hoặc:

```text
Empty
  │
  ▼
Object Coordinate
  │
  ▼
Mapping
  │
  ▼
Noise Texture
```

---

# 27. Cách chọn coordinate nhanh

```text
                 Texture
                    │
          ┌─────────┴──────────┐
          │                    │
     Image Texture        Procedural
          │                    │
          ▼                    ▼
         UV            Generated / Object
                               │
                         cần điều khiển
                         bằng object?
                               │
                    ┌──────────┴─────────┐
                   Không                 Có
                    │                    │
               Generated              Object
                                         │
                                       Empty
```

---

# 28. Ví dụ thực hành

## Bài tập 1 — UV

Dùng cùng một cánh cửa:

```text
Texture Coordinate
        │
       UV
        │
        ▼
     Mapping
        │
        ▼
 Image Texture
```

Thử:

```text
Location X
Rotation Z
Scale X/Y
```

Quan sát texture thay đổi.

---

## Bài tập 2 — Generated

Đổi:

```text
UV
↓
Generated
```

So sánh cách texture xuất hiện trên object.

Chú ý đặc biệt ở:

* cạnh;
* mặt bên;
* object có tỷ lệ dài/ngắn khác nhau.

---

## Bài tập 3 — Object

Tạo:

```text
Empty
```

Kết nối:

```text
Texture Coordinate
Object = Empty
```

Sau đó thử:

```text
G
R
S
```

trên Empty.

Quan sát texture phản ứng theo transform của Empty.

---

# 29. Những lỗi thường gặp

## Lỗi 1 — Texture bị kéo giãn

Nguyên nhân có thể là:

* UV chưa đúng;
* object scale chưa apply;
* Generated mapping không phù hợp.

Kiểm tra:

```text
Ctrl + A
↓
Scale
```

và kiểm tra UV bằng checker texture.

---

## Lỗi 2 — Texture quá lớn hoặc quá nhỏ

Điều chỉnh:

```text
Mapping → Scale
```

Không cần unwrap lại ngay.

---

## Lỗi 3 — Texture xoay sai hướng

Dùng:

```text
Mapping → Rotation
```

Ví dụ:

```text
Rotation Z = 90°
```

---

## Lỗi 4 — Dùng Generated cho logo

Generated thích hợp với procedural hơn là placement chính xác.

Logo hoặc decal nên dùng:

```text
UV
```

---

## Lỗi 5 — Nhầm Normal Coordinate với Normal Map

Sai cách hiểu:

```text
Texture Coordinate → Normal
= Normal Map
```

Không đúng.

Đúng là:

```text
Texture Coordinate → Normal
= vector hướng của bề mặt
```

còn:

```text
Normal Texture
→ Normal Map Node
→ Principled Normal
```

mới là PBR normal mapping.

---

# 30. Quy trình gợi ý

```text
Chọn object
   │
   ▼
Xác định loại texture
   │
   ├──────── Image / PBR ────────► UV
   │
   └──────── Procedural ─────────► Generated/Object
                                    │
                                    ▼
                              Texture Coordinate
                                    │
                                    ▼
                                  Mapping
                                    │
                       ┌────────────┼────────────┐
                       ▼            ▼            ▼
                    Location     Rotation       Scale
                       │            │            │
                       └────────────┴────────────┘
                                    │
                                    ▼
                                  Texture
                                    │
                                    ▼
                              Principled BSDF
```

---

# 31. Ghi nhớ nhanh

> **UV = texture bám theo UV Map.**

> **Generated = Blender tự sinh tọa độ từ không gian của object/bounding box.**

> **Object = lấy hệ tọa độ của một object khác, thường là Empty.**

> **Mapping = Position + Rotation + Scale cho tọa độ texture.**

> **Ctrl + T = Node Wrangler tạo Texture Coordinate + Mapping cho Image Texture.**

> **Ctrl + Shift + T = Node Wrangler thiết lập bộ PBR texture cho Principled BSDF.**

---

## Checklist

* [ ] Biết khi nào nên dùng **UV**.
* [ ] Hiểu **Generated** được Blender tự sinh và liên quan đến bounding box.
* [ ] Biết dùng **Object Coordinates** với Empty.
* [ ] Điều khiển được **Location, Rotation và Scale** bằng Mapping.
* [ ] Biết tạo UV bằng `U → Cube Projection`.
* [ ] Biết chỉnh UV ngay trong workspace Shading.
* [ ] Biết `Ctrl + T` tạo nhanh Texture Coordinate + Mapping khi dùng Node Wrangler.
* [ ] Phân biệt **Texture Coordinate → Normal** với **Normal Map**.
* [ ] Kiểm tra UV và object scale khi texture bị stretch.

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
