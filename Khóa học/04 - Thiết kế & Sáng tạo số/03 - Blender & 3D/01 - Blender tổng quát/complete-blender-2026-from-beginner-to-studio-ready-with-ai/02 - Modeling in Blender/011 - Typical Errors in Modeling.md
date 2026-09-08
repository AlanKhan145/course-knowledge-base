# 011 — Typical Errors in Modeling

| Thuộc tính     | Nội dung                                                                     |
| -------------- | ---------------------------------------------------------------------------- |
| **Phần**       | 02 — Modeling in Blender                                                     |
| **Thời lượng** | 3:08                                                                         |
| **Chủ đề**     | Các lỗi modeling phổ biến: Loop Cut, Extrude, Normals, vertex trùng và Inset |
| **Mức độ**     | Cơ bản                                                                       |
| **Trọng tâm**  | Phát hiện và sửa lỗi mesh trước khi chúng gây lỗi topology hoặc shading      |

---

## 1. Mục tiêu bài học

Sau bài này, bạn có thể:

* [ ] Đặt **Loop Cut** chính xác ở giữa mesh.
* [ ] Tránh tạo geometry thừa khi dùng **Extrude**.
* [ ] Phát hiện và sửa **Normals bị đảo**.
* [ ] Xóa các vertex/edge bị trùng bằng **Merge by Distance**.
* [ ] Sử dụng **Inset** đúng cách.
* [ ] Hiểu vì sao một số công cụ không xuất hiện khi con trỏ đặt sai vị trí.
* [ ] Hình thành quy trình kiểm tra mesh sau khi modeling.

---

# 2. Tổng quan các lỗi thường gặp

```text
Modeling
   │
   ├── Loop Cut
   │     └── Không khóa đường cắt vào giữa
   │
   ├── Extrude
   │     └── Extrude nhiều lần → geometry thừa
   │
   ├── Normals
   │     └── Mặt quay ngược → shading sai
   │
   ├── Geometry trùng
   │     └── Vertex/edge nằm chồng lên nhau
   │
   └── Inset
         └── Điều khiển khoảng cách không đúng
```

Đây đều là những lỗi nhỏ khi mới nhìn vào, nhưng có thể gây ra vấn đề lớn khi:

* thêm Modifier;
* Subdivision;
* UV Unwrap;
* Bake texture;
* rigging;
* export FBX/GLB;
* render.

---

# 3. Lỗi 1 — Loop Cut không nằm chính giữa

## Hiện tượng

Bạn dùng:

```text
Ctrl + R
```

để tạo một **Loop Cut**.

Sau khi tạo đường cắt, bạn vô tình kéo nó lệch khỏi tâm rồi cố gắng di chuyển thủ công trở lại chính giữa.

Điều này vừa chậm vừa khó chính xác.

---

## Cách đúng

Quy trình chuẩn:

```text
Ctrl + R
   ↓
Hover lên vùng mesh cần cắt
   ↓
LMB
Xác nhận Loop Cut
   ↓
RMB
Hủy thao tác trượt
   ↓
Loop Cut tự nằm ở giữa
```

> Trong Blender, cách đáng tin cậy nhất để đặt Loop Cut chính giữa là **LMB rồi RMB**, thay vì cố căn bằng mắt.

### Nếu đã làm sai

```text
Ctrl + Z
```

sau đó thực hiện lại.

---

## Ví dụ

### Sai

```text
|---------|-------------------|
          ↑
      Loop Cut lệch
```

### Đúng

```text
|---------------|---------------|
                ↑
             chính giữa
```

---

# 4. Lỗi 2 — Extrude lần nữa khi chỉ muốn kéo dài

Giả sử bạn vừa Extrude một phần mesh theo trục Z:

```text
      ┌───────┐
      │       │
      │       │
──────┴───────┴──────
```

Sau đó nhận ra rằng phần vừa Extrude cần cao thêm một chút.

Một lỗi phổ biến là tiếp tục nhấn:

```text
E
```

để Extrude thêm lần nữa.

---

## Tại sao không nên?

Mỗi lần Extrude có thể tạo thêm:

* vertex;
* edge;
* face;
* edge loop mới.

Ví dụ:

```text
Extrude lần 1

────┬────
    │
    │
────┴────
```

Extrude lần 2:

```text
────┬────
    │
────┼────    ← edge loop không cần thiết
    │
────┴────
```

Nếu mục tiêu chỉ là làm phần hiện tại dài hơn thì geometry mới này hoàn toàn không cần thiết.

---

# 5. Cách đúng — Move thay vì Extrude

Chọn face trên cùng rồi dùng:

```text
G
Z
```

để di chuyển theo trục Z.

```text
Chọn face
   ↓
G
   ↓
Z
   ↓
Di chuyển lên
```

Ví dụ:

```text
Trước

   ┌─────┐
   │     │
───┴─────┴───


G → Z


Sau

   ┌─────┐
   │     │
   │     │
   │     │
───┴─────┴───
```

Không xuất hiện thêm edge loop.

---

## Quy tắc nhớ nhanh

> **Tạo hình mới → Extrude.**
> **Chỉnh vị trí hình đã có → Move.**

---

# 6. Lỗi 3 — Normals bị đảo

Đây là một trong những lỗi quan trọng nhất khi modeling.

## Normal là gì?

Mỗi polygon có một hướng gọi là **Normal**.

Có thể hiểu đơn giản:

```text
        Normal
          ↑
          │
     ┌─────────┐
     │  Face   │
     └─────────┘
```

Normal cho Blender biết đâu là **mặt ngoài** của polygon.

---

# 7. Tại sao Normals quan trọng?

Normals ảnh hưởng đến:

* ánh sáng;
* shading;
* material;
* normal map;
* backface culling;
* baking;
* Boolean;
* export sang game engine.

Nếu Normal quay sai hướng, model có thể:

* xuất hiện vùng đen;
* shading bất thường;
* biến mất khi bật Backface Culling;
* hiển thị sai trong Unity/Unreal/WebGL.

---

# 8. Kiểm tra bằng Face Orientation

Trong 3D Viewport:

```text
Viewport Overlays
      ↓
Face Orientation
```

Khi bật, Blender thường hiển thị:

* **Xanh:** mặt trước / normal hướng ra ngoài.
* **Đỏ:** mặt sau / normal đang hướng ngược.

Ví dụ:

```text
        Model

   BLUE BLUE BLUE
       ┌─────┐
 BLUE  │     │  BLUE
       └─────┘

        ✓ đúng
```

Nếu mặt ngoài xuất hiện màu đỏ:

```text
       RED
    ┌────────┐
    │        │
    └────────┘

       ✗ sai
```

---

# 9. Sửa toàn bộ Normals của object

Vào:

```text
Edit Mode
```

Nếu object gồm một phần geometry liên kết, đưa chuột lên phần đó và nhấn:

```text
L
```

để chọn **Linked Geometry**.

Hoặc:

```text
A
```

để chọn tất cả.

Sau đó:

```text
Alt + N
```

mở menu Normals.

Chọn:

```text
Recalculate Outside
```

---

## Quy trình

```text
Face Orientation
       ↓
Phát hiện mặt đỏ
       ↓
Edit Mode
       ↓
A
       ↓
Alt + N
       ↓
Recalculate Outside
       ↓
Kiểm tra lại Face Orientation
```

Đây thường là lựa chọn tốt nhất khi toàn bộ object bị đảo Normal.

---

# 10. Chỉ đảo một vài face

Đôi khi phần lớn mesh đúng nhưng chỉ một polygon bị ngược.

Ví dụ:

```text
BLUE  BLUE  BLUE

BLUE  RED   BLUE
      ↑
   mặt bị ngược
```

Không cần recalculation toàn bộ mesh.

Chọn face đó:

```text
Face Select
     ↓
Chọn polygon
     ↓
Alt + N
     ↓
Flip
```

Kết quả:

```text
RED
 ↓
Flip
 ↓
BLUE
```

---

# 11. Recalculate Outside và Flip khác nhau thế nào?

| Công cụ                 | Công dụng                                      |
| ----------------------- | ---------------------------------------------- |
| **Recalculate Outside** | Blender tự xác định hướng ngoài cho nhiều face |
| **Recalculate Inside**  | Hướng các normal vào bên trong                 |
| **Flip**                | Đảo trực tiếp normal của face đang chọn        |

### Thông thường

Toàn object bị sai:

```text
Alt + N
→ Recalculate Outside
```

Một vài face riêng lẻ:

```text
Alt + N
→ Flip
```

---

# 12. Lỗi 4 — Vertex hoặc edge bị trùng

Một lỗi rất khó phát hiện bằng mắt là:

> Hai hoặc nhiều vertex nằm gần như chính xác cùng một vị trí.

Ví dụ:

```text
Nhìn bình thường:

──────────────
```

Nhưng thực tế:

```text
──────●●──────
      ↑↑
  2 vertex trùng nhau
```

Hoặc hai edge nằm chồng nhau:

```text
Edge A ──────────
Edge B ──────────
       ↑
   cùng vị trí
```

---

# 13. Nguyên nhân

Geometry trùng thường xuất hiện khi:

* Extrude rồi hủy chuyển động không đúng cách;
* duplicate geometry;
* ghép nhiều mesh;
* import model;
* thao tác modeling nhiều lần tại cùng vị trí.

Một ví dụ kinh điển:

```text
E
→ RMB
```

Trong một số workflow, bạn có thể tạo geometry mới nhưng giữ nó đúng vị trí cũ.

Kết quả là các vertex bị chồng lên nhau.

---

# 14. Dấu hiệu

Bạn có thể thấy:

* edge trông đậm hơn bình thường;
* shading kỳ lạ;
* mặt nhấp nháy;
* bevel lỗi;
* subdivision lỗi;
* vertex không di chuyển như mong muốn;
* UV hoặc bake bất thường.

Với model phức tạp, rất khó phát hiện bằng mắt.

---

# 15. Sửa bằng Merge by Distance

Trong Edit Mode:

```text
A
```

chọn toàn bộ mesh.

Sau đó:

```text
M
```

chọn:

```text
Merge by Distance
```

---

## Quy trình

```text
Edit Mode
   ↓
A
   ↓
M
   ↓
Merge by Distance
   ↓
Blender gộp các vertex quá gần nhau
```

Blender sẽ báo ví dụ:

```text
Removed 4 vertices
```

nghĩa là bốn vertex dư đã được loại bỏ.

---

# 16. Điều chỉnh Merge Distance

Nếu các vertex không hoàn toàn trùng nhau nhưng cách nhau cực nhỏ, có thể tăng:

```text
Merge Distance
```

trong bảng **Adjust Last Operation**.

Ví dụ:

```text
● ●
↑ ↑
hai vertex hơi cách nhau
```

Tăng khoảng cách:

```text
Merge Distance ↑
```

sẽ cho phép Blender gộp chúng.

---

## Cảnh báo

Không nên tăng quá cao.

```text
Merge Distance nhỏ
        ↓
chỉ gộp vertex gần nhau
        ✓


Merge Distance quá lớn
        ↓
gộp cả geometry cần giữ
        ✗
```

> **Merge by Distance rất nhạy. Hãy tăng khoảng cách từng chút một.**

---

# 17. Lỗi 5 — Inset khó kiểm soát

Inset được kích hoạt bằng:

```text
I
```

Ví dụ:

```text
Face ban đầu

┌─────────────┐
│             │
│             │
│             │
└─────────────┘
```

Sau Inset:

```text
┌─────────────┐
│ ┌─────────┐ │
│ │         │ │
│ └─────────┘ │
└─────────────┘
```

---

# 18. Vấn đề khi dùng Inset

Người mới thường đặt chuột quá sát khu vực thao tác khiến việc kéo khoảng cách Inset khó kiểm soát.

Khi thao tác:

```text
I
```

hãy di chuyển chuột đủ xa để có phạm vi điều khiển tốt hơn.

Bạn cũng có thể nhập trực tiếp giá trị bằng bàn phím nếu cần độ chính xác.

Ví dụ:

```text
I
0.1
Enter
```

sẽ tạo inset theo một giá trị xác định tùy scale của model.

---

# 19. Loop Cut không xuất hiện

Một vấn đề khác:

```text
Ctrl + R
```

nhưng không thấy đường preview màu vàng/tím của Loop Cut.

Nguyên nhân có thể đơn giản là con trỏ đang nằm ở vùng không xác định được edge ring phù hợp.

---

## Cách xử lý

Di chuyển chuột:

```text
        TOP
         ↑

LEFT ← Object → RIGHT

         ↓
       BOTTOM
```

Hover gần một edge của vùng cần cắt.

Khi Blender nhận ra một edge loop hợp lệ, đường preview sẽ xuất hiện.

---

# 20. Loop Cut hoạt động như thế nào?

`Ctrl + R` không đơn giản cắt tại nơi con trỏ đang đứng.

Blender phải tìm một chuỗi các **quad faces** liên tục:

```text
┌─────┬─────┬─────┐
│     │     │     │
├─────┼─────┼─────┤
│     │     │     │
└─────┴─────┴─────┘
```

Sau đó tạo edge loop:

```text
┌──┬──┬──┬──┬──┬──┐
│  │  │  │  │  │  │
├──┼──┼──┼──┼──┼──┤
│  │  │  │  │  │  │
└──┴──┴──┴──┴──┴──┘
```

Topology không phù hợp cũng có thể khiến Loop Cut dừng lại hoặc không chạy như mong muốn.

---

# 21. Tổng hợp lỗi và cách sửa

| Lỗi                  | Dấu hiệu                    | Cách sửa                        |
| -------------------- | --------------------------- | ------------------------------- |
| Loop Cut lệch tâm    | Edge mới không nằm giữa     | `Ctrl + R` → `LMB` → `RMB`      |
| Extrude quá nhiều    | Xuất hiện edge loop dư      | Dùng `G` + trục thay vì `E`     |
| Normals bị đảo       | Face Orientation hiện đỏ    | `Alt + N` → Recalculate Outside |
| Một face bị đảo      | Chỉ một vùng đỏ             | `Alt + N` → Flip                |
| Vertex trùng         | Edge đậm, shading lỗi       | `A` → `M` → Merge by Distance   |
| Merge không đủ       | Vertex vẫn chưa gộp         | Tăng Merge Distance nhẹ         |
| Inset khó điều khiển | Khoảng inset chạy quá nhanh | Đưa chuột ra xa hoặc nhập số    |
| Loop Cut không hiện  | `Ctrl + R` không có preview | Hover gần edge/quad phù hợp     |

---

# 22. Phím tắt quan trọng

| Phím       | Chức năng               |
| ---------- | ----------------------- |
| `Ctrl + R` | Loop Cut                |
| `Ctrl + Z` | Undo                    |
| `E`        | Extrude                 |
| `G`        | Move                    |
| `G` → `Z`  | Move theo Z             |
| `I`        | Inset                   |
| `A`        | Select All              |
| `L`        | Select Linked Geometry  |
| `M`        | Merge                   |
| `Alt + N`  | Normals Menu            |
| `Tab`      | Object Mode ↔ Edit Mode |

---

# 23. Quy trình kiểm tra mesh sau khi Modeling

Một workflow tốt là kiểm tra mesh trước khi chuyển sang bước tiếp theo.

```text
Modeling xong
     │
     ▼
Kiểm tra geometry dư
     │
     ▼
Merge by Distance
     │
     ▼
Kiểm tra Face Orientation
     │
     ▼
Recalculate Normals
     │
     ▼
Kiểm tra topology
     │
     ▼
Kiểm tra scale
     │
     ▼
Apply Scale nếu cần
     │
     ▼
Kiểm tra modifier
     │
     ▼
Sẵn sàng UV / Material / Rig / Render
```

---

# 24. Kiểm tra mở rộng — Scale

Dù transcript chủ yếu tập trung vào topology và normals, **Scale** cũng là lỗi rất phổ biến trong modeling.

Ví dụ Object Scale:

```text
X = 0.25
Y = 2.40
Z = 0.50
```

có thể khiến:

* Bevel không đều;
* Solidify sai độ dày;
* Array sai khoảng cách;
* physics hoạt động không ổn định.

Khi phù hợp, dùng:

```text
Ctrl + A
→ Scale
```

để đưa scale về:

```text
X = 1
Y = 1
Z = 1
```

> Không phải lúc nào cũng cần Apply Scale ngay lập tức, nhưng trước các modifier hoặc workflow phụ thuộc kích thước, cần kiểm tra nó.

---

# 25. Kiểm tra Non-Manifold

Một mesh sạch cũng nên được kiểm tra các vùng **non-manifold**.

Trong Edit Mode có thể dùng:

```text
Select
→ Select All by Trait
→ Non-Manifold
```

hoặc tùy keymap:

```text
Ctrl + Shift + Alt + M
```

Non-manifold có thể bao gồm:

* lỗ hở;
* edge chỉ gắn sai số lượng face;
* geometry bên trong;
* topology không tạo thành bề mặt kín.

Đặc biệt quan trọng đối với:

* 3D Printing;
* Boolean;
* baking;
* simulation;
* game asset.

---

# 26. Nguyên tắc quan trọng

### Nguyên tắc 1 — Đừng Extrude nếu chỉ muốn Move

```text
Tạo geometry mới → E

Điều chỉnh geometry hiện có → G
```

### Nguyên tắc 2 — Luôn kiểm tra Normals

```text
Face Orientation
→ tìm vùng đỏ
→ Alt + N
```

### Nguyên tắc 3 — Geometry trùng không phải lúc nào cũng nhìn thấy

```text
A
→ M
→ Merge by Distance
```

### Nguyên tắc 4 — Không dùng modifier để che topology xấu

```text
Topology lỗi
     ↓
Subdivision × 3
     ↓
Vẫn là topology lỗi
```

Thay vào đó:

```text
Topology lỗi
     ↓
Sửa mesh
     ↓
Kiểm tra normals
     ↓
Kiểm tra vertex trùng
     ↓
Sau đó mới dùng modifier
```

---

# 27. Bài thực hành

Tạo một Cube và cố ý tạo một số lỗi để luyện sửa.

## Bước 1 — Loop Cut

```text
Ctrl + R
```

Tạo một Loop Cut lệch tâm.

Undo rồi thực hiện lại:

```text
Ctrl + R
LMB
RMB
```

---

## Bước 2 — Extrude

Chọn mặt trên:

```text
E
Z
```

Extrude lên trên.

Sau đó thay vì Extrude lần nữa, dùng:

```text
G
Z
```

để tăng chiều cao.

---

## Bước 3 — Đảo Normal

Chọn một face:

```text
Alt + N
→ Flip
```

Bật:

```text
Face Orientation
```

quan sát mặt đỏ.

Sau đó sửa lại bằng:

```text
Alt + N
→ Flip
```

---

## Bước 4 — Tạo vertex trùng

Thử tạo geometry chồng nhau, sau đó:

```text
A
M
Merge by Distance
```

Quan sát số vertex Blender loại bỏ.

---

## Bước 5 — Inset

Chọn một face:

```text
I
```

thử điều chỉnh bằng chuột.

Sau đó thử nhập giá trị trực tiếp để cảm nhận sự khác biệt.

---

# 28. Checklist cuối bài

### Loop Cut

* [ ] Biết tạo Loop Cut bằng `Ctrl + R`.
* [ ] Biết đặt Loop Cut chính giữa bằng `LMB` → `RMB`.
* [ ] Biết hover đúng vùng khi Loop Cut không xuất hiện.

### Extrude

* [ ] Không Extrude lần nữa nếu chỉ cần kéo dài geometry.
* [ ] Biết sử dụng `G + X/Y/Z` để chỉnh vị trí.

### Normals

* [ ] Biết bật **Face Orientation**.
* [ ] Phân biệt được mặt hướng ngoài và mặt bị đảo.
* [ ] Biết dùng `Alt + N → Recalculate Outside`.
* [ ] Biết dùng `Alt + N → Flip`.

### Geometry

* [ ] Không còn vertex trùng ngoài chủ ý.
* [ ] Biết sử dụng `Merge by Distance`.
* [ ] Không tăng Merge Distance quá lớn.
* [ ] Biết kiểm tra Non-Manifold khi cần.

### Inset

* [ ] Biết dùng `I`.
* [ ] Điều khiển được khoảng Inset.
* [ ] Biết nhập giá trị chính xác khi cần.

### Kiểm tra cuối

* [ ] Normals đúng hướng.
* [ ] Không có geometry trùng.
* [ ] Không có edge loop thừa.
* [ ] Scale hợp lý.
* [ ] Modifier stack hoạt động đúng.
* [ ] Topology sạch trước khi tăng Subdivision.

---

## 29. Ghi nhớ nhanh

```text
Ctrl + R
Loop Cut
→ LMB → RMB để đặt giữa

E
Extrude
→ chỉ dùng khi cần geometry mới

G + Axis
→ kéo geometry hiện có

Face Orientation
→ tìm mặt đỏ

Alt + N
→ sửa Normals

A → M
→ Merge by Distance

I
→ Inset
```

> **Mesh sạch từ đầu sẽ giúp UV, shading, modifier, rigging, animation và export ổn định hơn rất nhiều.**
