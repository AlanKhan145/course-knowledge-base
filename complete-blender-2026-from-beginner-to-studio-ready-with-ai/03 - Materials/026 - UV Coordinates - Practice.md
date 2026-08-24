# 026 — UV Coordinates

| Thuộc tính         | Nội dung                                                                           |
| ------------------ | ---------------------------------------------------------------------------------- |
| **Phần**           | 03 — Materials                                                                     |
| **Thời lượng**     | 14:03                                                                              |
| **Chủ đề**         | UV Space, Seams, Unwrap và Texture Projection                                      |
| **Công cụ chính**  | UV Editor, Mark Seam, Unwrap, Smart UV Project, Cube Projection                    |
| **Mục tiêu chính** | Trải bề mặt 3D thành không gian 2D để điều khiển chính xác vị trí và tỷ lệ texture |

---

## 1. UV Coordinates là gì?

**UV Coordinates** là hệ tọa độ 2D dùng để xác định cách một texture 2D được đặt lên bề mặt của model 3D.

Có thể hình dung:

> Model 3D giống như một hộp giấy → cắt theo một số cạnh → trải phẳng ra → đặt hình ảnh lên phần giấy đã trải.

```text
Model 3D
   │
   │ Mark Seam
   ▼
Cắt bề mặt
   │
   │ Unwrap
   ▼
UV Islands 2D
   │
   │ Gắn Texture
   ▼
Texture hiển thị trên Model 3D
```

Trong UV Editor:

* Trục **U** tương đương chiều ngang.
* Trục **V** tương đương chiều dọc.
* UV không làm thay đổi hình học thật của object.
* Thay đổi UV chỉ thay đổi **cách texture được ánh xạ lên bề mặt**.

---

# 2. UV Island là gì?

Sau khi một object được trải phẳng, các phần tách rời trên UV Editor được gọi là **UV Islands**.

Ví dụ với một chiếc hộp:

```text
       ┌───────┐
       │  Top  │
┌──────┼───────┼───────┬───────┐
│ Left │ Front │ Right │ Back  │
└──────┼───────┼───────┴───────┘
       │Bottom │
       └───────┘
```

Toàn bộ hình chữ thập trên có thể là **một UV Island** nếu các mặt vẫn nối với nhau.

Nếu cắt thêm seam:

```text
┌───────┐   ┌───────┐
│ Front │   │ Right │
└───────┘   └───────┘

┌───────┐   ┌───────┐
│ Back  │   │ Left  │
└───────┘   └───────┘
```

thì mỗi mặt có thể trở thành một island riêng.

---

# 3. Workspace UV Editing

Để làm việc với UV:

1. Chọn object.
2. Chuyển sang workspace **UV Editing**.
3. Vào **Edit Mode**.
4. Chọn các face cần kiểm tra.

Thông thường giao diện sẽ có:

```text
┌──────────────────────┬──────────────────────┐
│      UV Editor       │     3D Viewport      │
│                      │                      │
│    UV Islands        │      Model 3D        │
│    + Texture         │                      │
│                      │                      │
└──────────────────────┴──────────────────────┘
```

Bên trái chỉnh UV, bên phải quan sát kết quả trên model.

---

# 4. Luôn Apply Scale trước khi Unwrap

Đây là một bước rất quan trọng.

Ví dụ:

1. Tạo Cube.
2. Scale nó thành hình hộp dài.
3. Nếu chưa Apply Scale, Blender vẫn có thể xem scale nội bộ là:

```text
Scale X = 2
Scale Y = 1
Scale Z = 1
```

Khi unwrap, tỷ lệ UV có thể không phản ánh đúng hình dạng thực.

### Cách xử lý

Trong **Object Mode**:

```text
Ctrl + A
    ↓
Scale
```

Sau đó mới unwrap.

### Quy trình nên nhớ

```text
Model
  ↓
Chỉnh hình dạng
  ↓
Ctrl + A → Scale
  ↓
Mark Seam
  ↓
Unwrap
```

> **Nguyên tắc:** trước khi xử lý UV nghiêm túc, hãy kiểm tra Scale của object.

---

# 5. Reset UV

Nếu muốn bỏ cách bố trí UV hiện tại:

1. Vào Edit Mode.
2. Chọn tất cả face bằng `A`.
3. Mở menu `UV`.
4. Chọn **Reset**.

Sau Reset, mỗi polygon có thể chiếm toàn bộ không gian UV.

Điều này thường chỉ dùng như bước khởi đầu hoặc để làm lại UV.

---

# 6. Manual UV Unwrapping

Manual Unwrap cho phép kiểm soát chính xác nơi model được "cắt".

## 6.1 Mark Seam

Chọn một hoặc nhiều edge:

```text
Right Click
    ↓
Mark Seam
```

Seam thường xuất hiện màu đỏ.

Seam tương đương với đường cắt trên một mô hình giấy.

---

## 6.2 Ví dụ unwrap chiếc hộp

Ban đầu:

```text
      ┌─────┐
      │     │
┌─────┼─────┼─────┐
│     │ Box │     │
└─────┼─────┼─────┘
      │     │
      └─────┘
```

Ta chọn các cạnh thích hợp và **Mark Seam**.

Sau đó:

```text
A
↓
U
↓
Unwrap
```

hoặc:

```text
UV → Unwrap
```

Blender sẽ cắt theo seam rồi trải object thành UV Islands.

---

# 7. Angle Based Unwrap

Trong bài học sử dụng:

```text
UV
 ↓
Unwrap
 ↓
Angle Based
```

**Angle Based** thường phù hợp với:

* Organic mesh.
* Surface cong.
* Character.
* Các hình dạng không hoàn toàn hình học.

Nếu UV unwrap bị méo hoặc không mở đúng:

> Thường nguyên nhân là **thiếu seam**.

Ví dụ:

```text
Seam quá ít
    ↓
UV bị kéo
    ↓
Thêm Seam
    ↓
Unwrap lại
```

---

# 8. Chỉnh UV Island

Trong UV Editor có thể sử dụng gần như các shortcut quen thuộc trong 3D Viewport.

| Phím              | Chức năng          |
| ----------------- | ------------------ |
| `G`               | Move               |
| `R`               | Rotate             |
| `S`               | Scale              |
| `S X`             | Scale theo U/X     |
| `S Y`             | Scale theo V/Y     |
| `L`               | Chọn linked island |
| `A`               | Chọn tất cả        |
| `Ctrl` khi Rotate | Snap theo bước góc |

Ví dụ:

```text
UV Island
   │
   ├── G → di chuyển
   ├── R → xoay
   └── S → thay đổi kích thước texture trên model
```

---

# 9. UV Scale và kích thước Texture

Một khái niệm quan trọng:

### UV island nhỏ

```text
┌──────────────────── Texture ───────────────────┐
│                                                │
│                    ┌───┐                       │
│                    │UV │                       │
│                    └───┘                       │
└────────────────────────────────────────────────┘
```

Object chỉ sử dụng một vùng nhỏ của texture.

Texture trên model thường có xu hướng **phóng lớn**.

---

### UV island lớn

```text
┌──────────────────── Texture ───────────────────┐
│ ┌────────────────────────────────────────────┐ │
│ │                  UV                        │ │
│ └────────────────────────────────────────────┘ │
└────────────────────────────────────────────────┘
```

Texture được lặp hoặc hiển thị với tỷ lệ nhỏ hơn tùy cách mapping.

---

# 10. UV không làm thay đổi Mesh

Khi:

* Move UV.
* Rotate UV.
* Scale UV.

hình dạng 3D của model **không thay đổi**.

```text
UV Editor                    Model 3D

Scale UV ────────────────► Mesh vẫn giữ nguyên
Rotate UV ───────────────► Texture xoay
Move UV ─────────────────► Texture thay đổi vị trí
```

---

# 11. UV Overlap

Các UV islands có thể chồng lên nhau.

```text
Island A
┌─────────┐
│         │
│ Island B│
│         │
└─────────┘
```

## Khi overlap có ích

Ví dụ:

* Hai phần đối xứng dùng cùng texture.
* Các vật thể lặp lại.
* Game assets cần tiết kiệm texture space.

Ví dụ:

```text
Left Arm UV
       ╲
        ╲
         ├── cùng một vùng texture
        ╱
Right Arm UV
```

## Khi không nên overlap

Các object cần texture độc nhất như:

* Mặt nhân vật.
* Skin.
* Hand-painted texture.
* Baking unique details.

Nếu UV overlap ngoài ý muốn thì khi painting:

```text
Paint Island A
     ↓
Island B cũng nhận màu
```

---

# 12. Manual Unwrap dùng khi nào?

Manual unwrap đặc biệt phù hợp với:

* Character.
* Human head.
* Hero asset.
* Game asset cần bake.
* Object cần texture painting.
* Model yêu cầu texel density chính xác.

Ví dụ với đầu người:

```text
        Seam
         │
         ▼
     ┌─────────┐
    /           \
   │    FACE     │
    \           /
     └────┬────┘
          │
       back seam
```

Seam thường nên đặt ở:

* Sau đầu.
* Sau tai.
* Phía trong tay/chân.
* Mặt dưới object.
* Các vị trí camera ít nhìn thấy.

---

# 13. Nguyên tắc đặt Seam

Một seam tốt thường:

* Nằm ở khu vực khuất.
* Theo đường thiết kế tự nhiên.
* Theo ranh giới vật liệu.
* Hạn chế distortion.
* Không chia model thành quá nhiều island vô ích.

```text
                 Ưu tiên seam
                     │
       ┌─────────────┼─────────────┐
       ▼             ▼             ▼
   Vùng khuất   Đường thiết kế   Material border
```

---

# 14. Automatic UV Unwrap

Không phải object nào cũng cần unwrap thủ công.

Với môi trường hoặc object đơn giản có thể dùng các phương pháp tự động.

Các phương pháp thường gặp:

```text
U
├── Unwrap
├── Smart UV Project
├── Cube Projection
├── Cylinder Projection
└── Sphere Projection
```

---

# 15. Smart UV Project

Quy trình:

```text
Edit Mode
   ↓
A
   ↓
U
   ↓
Smart UV Project
   ↓
OK
```

Blender tự động:

1. Phân tích góc giữa các polygon.
2. Xác định vị trí nên cắt.
3. Tạo UV islands.
4. Bố trí chúng trong UV space.

---

## Khi nên dùng Smart UV Project

Phù hợp với:

* Props.
* Architecture.
* Background assets.
* Hard-surface đơn giản.
* Object cần UV nhanh.

Không lý tưởng cho:

* Character.
* Hero asset.
* Face.
* Texture painting chính xác.

---

# 16. Island Selection bằng `L`

Trong UV Editor:

```text
Hover chuột lên UV Island
          ↓
          L
```

Blender sẽ chọn toàn bộ island đang liên kết.

Rất hữu ích khi muốn:

* Move một island.
* Rotate island.
* Scale island.
* Kiểm tra cách Smart UV Project đã cắt model.

---

# 17. Cube Projection

Một phương pháp nhanh khác:

```text
U
 ↓
Cube Projection
```

Blender tưởng tượng object nằm trong một chiếc hộp và chiếu texture từ sáu hướng.

```text
             +Z
              ↓
        ┌──────────┐
   -X → │  Object  │ ← +X
        └──────────┘
              ↑
             -Z
```

Phù hợp với:

* Box.
* Wall.
* Floor.
* Building.
* Hard-surface.
* Object có nhiều bề mặt tương đối phẳng.

---

# 18. Cube Projection cho Plane

Nếu object chỉ là một mặt phẳng:

```text
Camera projection
      ↓
 ┌─────────────┐
 │    Plane    │
 └─────────────┘
```

Cube Projection về cơ bản chỉ chiếu từ hướng phù hợp lên mặt plane.

Sau đó có thể chỉnh:

```text
S X
S Y
```

để thay đổi tỷ lệ texture.

---

# 19. Cylinder Projection và Sphere Projection

Tùy hình học có thể chọn projection phù hợp.

| Geometry              | Projection phù hợp  |
| --------------------- | ------------------- |
| Wall / Box            | Cube Projection     |
| Pipe / Bottle         | Cylinder Projection |
| Ball / Planet         | Sphere Projection   |
| Hard-surface phức tạp | Smart UV Project    |
| Character             | Manual Unwrap       |

Sơ đồ:

```text
Cube          Cylinder          Sphere
  │               │               │
  ▼               ▼               ▼
Cube UV       Cylinder UV      Sphere UV
```

---

# 20. Texture Repeat và Clip

Texture có thể được xử lý khi UV vượt ra ngoài ô UV `0–1`.

## Repeat

Texture lặp lại:

```text
┌──────┬──────┬──────┐
│ TEX  │ TEX  │ TEX  │
├──────┼──────┼──────┤
│ TEX  │ TEX  │ TEX  │
└──────┴──────┴──────┘
```

Phù hợp với:

* Brick.
* Tiles.
* Concrete.
* Sand.
* Ground.

---

## Clip

Nếu chọn **Clip**:

```text
┌───────────┐
│ Texture   │
│           │
└───────────┘

Ngoài vùng → không lặp
```

Phần UV ngoài texture có thể bị cắt hoặc cho kết quả màu biên/đen tùy thiết lập.

---

# 21. Texture lặp và UV ngoài vùng 0–1

Đối với texture tileable:

UV có thể lớn hơn vùng tiêu chuẩn:

```text
0–1 UV Space

┌───────────┐
│           │
│ Texture   │
│           │
└───────────┘

UV Island ─────────────────────────►
        có thể vượt ra ngoài 0–1
```

Texture khi ở chế độ **Repeat** sẽ tiếp tục lặp.

Đây là workflow phổ biến cho:

* Wall.
* Floor.
* Road.
* Concrete.
* Brick.

---

# 22. Node Wrangler và Principled Texture Setup

Bài học sử dụng **Node Wrangler** để tự động kết nối texture maps.

### Quy trình

Chọn:

```text
Principled BSDF
```

sau đó:

```text
Ctrl + Shift + T
```

Chọn các texture maps:

```text
Base Color
Roughness
Normal
Displacement
...
```

rồi chọn:

```text
Principled Texture Setup
```

Node Wrangler tự động nhận diện tên file và kết nối map phù hợp.

---

## Ví dụ

```text
BaseColor ─────────────► Base Color

Roughness ─────────────► Roughness

Normal
   ↓
Normal Map
   ↓
Principled Normal

Displacement
   ↓
Displacement Node
   ↓
Material Output
```

---

# 23. UV và PBR Texture

Texture PBR vẫn cần UV để Blender biết texture nằm ở đâu trên mesh.

```text
UV Coordinates
       │
       ▼
Image Texture
       │
       ├── Base Color
       ├── Roughness
       ├── Metallic
       ├── Normal
       └── Height
```

Thông thường tất cả các maps của cùng một material đều sử dụng **cùng một UV mapping**.

---

# 24. Displacement và mật độ Mesh

Nếu dùng **Displacement Map**, mesh cần đủ geometry để có thể biến dạng.

```text
Mesh thưa
   ↓
Displacement
   ↓
Hình dạng thô / artifact
```

So với:

```text
Mesh đủ dày
   ↓
Displacement
   ↓
Chi tiết mượt hơn
```

Có thể tăng geometry bằng:

```text
Subdivide
```

hoặc:

```text
Subdivision Surface
```

Nhưng không nên tăng quá mức vì có thể khiến viewport hoặc render nặng.

---

# 25. Material Displacement Settings

Nếu dùng true displacement, cần kiểm tra material settings.

Tùy Blender/render engine, workflow có thể yêu cầu chế độ như:

```text
Displacement and Bump
```

Sau đó:

```text
Height Map
    ↓
Displacement Node
    ↓
Material Output → Displacement
```

---

# 26. UV cho Wall

Ví dụ với một brick wall:

```text
Wall Mesh
   ↓
Apply Scale
   ↓
Smart UV Project
   ↓
Select Island
   ↓
Rotate
   ↓
Scale UV
   ↓
Brick Texture đúng tỷ lệ
```

Nếu viên gạch:

* Quá lớn → chỉnh scale UV.
* Quá nhỏ → chỉnh scale UV theo hướng ngược lại.
* Xoay sai → `R 90`.

---

# 27. UV cho Floor

Với sàn hoặc plane:

```text
Plane
  ↓
Ctrl + A → Scale
  ↓
U
  ↓
Cube Projection
  ↓
S X / S Y
  ↓
Điều chỉnh texture scale
```

Đây là một workflow rất nhanh cho environment asset.

---

# 28. Checker Texture để kiểm tra UV

Một UV đẹp không chỉ cần nằm đúng vị trí mà còn cần hạn chế **distortion**.

Có thể dùng checker:

```text
┌───┬───┬───┬───┐
│ ■ │ □ │ ■ │ □ │
├───┼───┼───┼───┤
│ □ │ ■ │ □ │ ■ │
├───┼───┼───┼───┤
│ ■ │ □ │ ■ │ □ │
└───┴───┴───┴───┘
```

Nếu UV tốt:

```text
□ □ □ □
□ □ □ □
□ □ □ □
```

Các ô tương đối vuông và đều.

Nếu bị stretch:

```text
▭ ▭ ▭ ▭
▭ ▭ ▭ ▭
```

hoặc:

```text
▯
▯
▯
▯
```

thì UV đang bị méo.

---

# 29. Texel Density

**Texel Density** mô tả mật độ pixel texture trên một đơn vị diện tích của model.

Ví dụ hai mặt có kích thước 3D tương đương:

### Sai

```text
Face A UV        Face B UV

┌─────────┐      ┌───┐
│         │      │   │
│         │      └───┘
└─────────┘
```

Face A sẽ nhận nhiều pixel hơn Face B.

---

### Tốt hơn

```text
Face A UV        Face B UV

┌───────┐        ┌───────┐
│       │        │       │
└───────┘        └───────┘
```

Texel density tương đối đồng đều.

---

# 30. Pack UV Islands

Sau khi unwrap, các islands nên được bố trí hiệu quả trong vùng UV.

```text
Trước Pack

┌────────────────────────┐
│ ┌──┐                   │
│ └──┘       ┌──────┐    │
│            └──────┘    │
│   ┌───┐                │
│   └───┘                 │
└────────────────────────┘
```

Mục tiêu:

```text
Sau Pack

┌────────────────────────┐
│ ┌──────┐ ┌──────┐      │
│ │      │ │      │      │
│ └──────┘ └──────┘      │
│ ┌────┐ ┌────────┐      │
│ └────┘ └────────┘      │
└────────────────────────┘
```

Cố gắng:

* Tận dụng UV space.
* Giữ margin giữa islands.
* Không overlap ngoài chủ ý.
* Giữ texel density nhất quán.

---

# 31. UV cho Character

Character thường cần unwrap cẩn thận hơn environment asset.

Ví dụ:

```text
Character
├── Head
│   ├── Face
│   ├── Back Head
│   └── Ears
├── Torso
├── Arms
├── Hands
├── Legs
└── Feet
```

Các vùng quan trọng như **khuôn mặt** thường được dành nhiều texture space hơn.

---

# 32. UDIM

Trong bài có đề cập sơ bộ đến **UDIM**.

UV truyền thống thường sử dụng một tile:

```text
1001
┌──────────────┐
│              │
│    UV Map    │
│              │
└──────────────┘
```

UDIM cho phép nhiều tile:

```text
┌──────────┬──────────┬──────────┐
│   1001   │   1002   │   1003   │
│  Body    │   Face   │ Clothes  │
└──────────┴──────────┴──────────┘
```

Ví dụ:

* Tile 1001 → Body.
* Tile 1002 → Face.
* Tile 1003 → Clothes.

Lợi ích:

* Texture resolution cao hơn.
* Tốt cho film/VFX.
* Phù hợp character hoặc hero asset rất chi tiết.

---

# 33. Khi nào dùng phương pháp UV nào?

| Trường hợp        | Phương pháp đề xuất           |
| ----------------- | ----------------------------- |
| Character         | Manual Unwrap                 |
| Human Face        | Manual Unwrap / UDIM          |
| Hero Asset        | Manual Unwrap                 |
| Prop đơn giản     | Smart UV Project              |
| Wall              | Cube Projection / Smart UV    |
| Floor             | Cube Projection               |
| Cylinder / Pipe   | Cylinder Projection           |
| Ball              | Sphere Projection             |
| Background asset  | Smart UV Project              |
| Tileable material | Cube Projection hoặc Smart UV |

---

# 34. Workflow UV đề xuất

```text
Model hoàn chỉnh
      │
      ▼
Apply Scale
Ctrl + A → Scale
      │
      ▼
Xác định loại object
      │
      ├───────────────┬─────────────────┐
      ▼               ▼                 ▼
Character         Prop đơn giản      Wall/Floor
      │               │                 │
Manual Seam     Smart UV Project   Cube Projection
      │               │                 │
      └───────────────┴─────────────────┘
                      │
                      ▼
                Kiểm tra Checker
                      │
                      ▼
               Sửa Stretch/Scale
                      │
                      ▼
                Texel Density
                      │
                      ▼
                Pack Islands
                      │
                      ▼
                  Gắn PBR
```

---

# 35. Workflow Manual Unwrap chuẩn

```text
01. Hoàn thiện hình dạng lớn
        ↓
02. Ctrl + A → Scale
        ↓
03. Xác định vùng khuất
        ↓
04. Chọn Edge
        ↓
05. Mark Seam
        ↓
06. A → U → Unwrap
        ↓
07. Kiểm tra UV Islands
        ↓
08. Checker Texture
        ↓
09. Sửa Stretch
        ↓
10. Đồng bộ Texel Density
        ↓
11. Pack Islands
        ↓
12. Gắn Texture
```

---

# 36. Manual hay Automatic?

## Manual

**Ưu điểm**

* Kiểm soát cao.
* Seam đẹp.
* Ít distortion.
* Tốt cho texture painting.
* Tốt cho hero assets.

**Nhược điểm**

* Tốn thời gian.
* Cần hiểu topology.

---

## Automatic

**Ưu điểm**

* Rất nhanh.
* Phù hợp background.
* Tốt cho test material.
* Ít thao tác.

**Nhược điểm**

* Có thể tạo nhiều island.
* Seam không đẹp.
* Khó texture painting.
* Texel density có thể không đều.

---

# 37. Các lỗi UV thường gặp

## Lỗi 1 — Quên Apply Scale

**Triệu chứng:**

* Texture bị kéo.
* UV tỷ lệ không đúng.

**Sửa:**

```text
Object Mode
→ Ctrl + A
→ Scale
→ Unwrap lại
```

---

## Lỗi 2 — Thiếu Seam

**Triệu chứng:**

* Island kéo dài.
* Checker bị méo.

**Sửa:**

```text
Thêm Seam
→ Unwrap lại
```

---

## Lỗi 3 — Seam quá nhiều

**Triệu chứng:**

* Hàng chục/hàng trăm islands nhỏ.
* Khó chỉnh texture.

**Sửa:**

Giảm seam và cố gắng giữ các khu vực liên quan thành island lớn.

---

## Lỗi 4 — UV overlap ngoài ý muốn

**Triệu chứng:**

Paint một vùng nhưng nhiều khu vực trên model cùng thay đổi.

**Sửa:**

Tách và pack islands lại.

---

## Lỗi 5 — Texel Density không đều

**Triệu chứng:**

Một khu vực rất nét, khu vực khác bị mờ.

**Sửa:**

Scale islands để mật độ texture tương đối đồng đều.

---

## Lỗi 6 — Texture xoay sai

Ví dụ brick chạy dọc thay vì ngang.

**Sửa:**

```text
R
```

hoặc:

```text
R → 90
```

trong UV Editor.

---

# 38. Thực hành đề xuất

## Bài tập 1 — Crate

Tạo một chiếc hộp và:

1. Scale thành crate.
2. Apply Scale.
3. Mark Seam.
4. Manual Unwrap.
5. Đưa từng mặt vào đúng khu vực của texture.
6. Kiểm tra bằng Material Preview.

---

## Bài tập 2 — Brick Wall

1. Tạo Plane hoặc Wall.
2. Subdivide vừa đủ nếu cần displacement.
3. Apply Scale.
4. Smart UV Project.
5. Rotate island.
6. Scale UV để kích thước viên gạch hợp lý.
7. Gắn PBR material.

---

## Bài tập 3 — Floor

1. Tạo Plane.
2. Apply Scale.
3. `U → Cube Projection`.
4. Scale UV.
5. Gắn tileable pavement texture.
6. Kiểm tra Repeat.

---

# 39. Ghi nhớ nhanh

```text
UV = cách Texture nằm trên Mesh

Seam
  ↓
nơi cắt Mesh

Unwrap
  ↓
trải Mesh 3D thành UV 2D

Island
  ↓
một cụm UV liên tục

Checker
  ↓
kiểm tra Stretch

Texel Density
  ↓
kiểm tra độ phân giải tương đối

Pack
  ↓
sắp xếp Islands tối ưu
```

---

# 40. Checklist

* [ ] Apply Scale trước khi unwrap.
* [ ] Seams đi theo vùng khuất hoặc đường thiết kế hợp lý.
* [ ] Không tạo seam nhiều hơn mức cần thiết.
* [ ] UV islands không overlap ngoài chủ ý.
* [ ] Kiểm tra distortion bằng checker texture.
* [ ] Checker giữ hình vuông tương đối đều.
* [ ] Texel density giữa các vùng tương đối nhất quán.
* [ ] Rotate UV đúng hướng của texture.
* [ ] Pack islands hợp lý và có margin.
* [ ] Dùng Manual Unwrap cho asset quan trọng.
* [ ] Dùng Smart UV Project khi cần UV nhanh.
* [ ] Dùng Cube Projection cho wall, floor và hard-surface phù hợp.
* [ ] Kiểm tra Repeat/Clip khi UV vượt vùng `0–1`.
* [ ] Nếu dùng displacement, bảo đảm mesh có đủ geometry.

---

## Tóm tắt bài học

> **UV Mapping là quá trình chuyển bề mặt của model 3D sang không gian 2D để Blender biết chính xác texture phải được đặt ở đâu.**

Workflow quan trọng nhất cần nhớ:

```text
Apply Scale
     ↓
Mark Seam / Chọn Projection
     ↓
Unwrap
     ↓
Kiểm tra Checker
     ↓
Chỉnh Scale + Rotation
     ↓
Kiểm tra Texel Density
     ↓
Pack Islands
     ↓
Gắn PBR Texture
```

Đối với **character và hero asset**, nên ưu tiên **Manual Unwrap**. Đối với **wall, floor, props và environment asset**, `Smart UV Project` hoặc `Cube Projection` thường giúp làm việc nhanh hơn đáng kể.

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
