# 016 — Modeling Round Symmetrical Models

| Thuộc tính         | Nội dung                                                           |
| ------------------ | ------------------------------------------------------------------ |
| **Phần**           | 02 — Modeling in Blender                                           |
| **Thời lượng**     | 8:02                                                               |
| **Chủ đề**         | Model tròn, đối xứng và **Screw Modifier**                         |
| **Kỹ thuật chính** | Dựng profile 2D → xoay 360° → tạo độ dày → Subdivision → biến dạng |

---

## 1. Mục tiêu bài học

Sau bài này, bạn cần có thể:

* Dựng các vật thể **tròn xoay** như bình hoa, chai, ly, cột, chân bàn…
* Hiểu nguyên lý của **Screw Modifier**.
* Biết cách dựng chỉ **một nửa profile** thay vì model toàn bộ vật thể.
* Đặt đúng **Origin** và **3D Cursor** làm tâm xoay.
* Điều chỉnh số lượng segment bằng `Steps`.
* Xử lý seam bằng `Merge`.
* Kiểm tra và sửa **Normals** sau khi Screw.
* Tạo độ dày bằng **Solidify Modifier**.
* Làm mượt bằng **Subdivision Surface**.
* Dùng **support loop** để kiểm soát độ bo.
* Kết hợp **Proportional Editing** để tạo các bình xoắn hoặc biến dạng stylized.

---

# 2. Nguyên lý của mô hình tròn xoay

Thay vì dựng toàn bộ bình hoa, ta chỉ cần dựng một đường biên nhìn từ bên cạnh.

```text
Profile 2D
    │
    │       ╭───╮
    │      ╱     ╲
    │     ╱       ╲
    │    │         │
    │     ╲       ╱
    │      ╲_____╱
    │
    ●  ← tâm xoay
```

Sau đó **Screw Modifier** quay profile quanh trục:

```text
Profile
   │
   │        ↻ 360°
   │      ↗ ↑ ↖
   │    ←   ●   →
   │      ↘ ↓ ↙
```

Kết quả:

```text
Profile 2D
    ↓
Screw 360°
    ↓
Surface tròn xoay
    ↓
Solidify
    ↓
Subdivision
    ↓
Model hoàn chỉnh
```

Đây là workflow cực kỳ hiệu quả với những vật thể có hình dạng gần đối xứng quanh một trục.

---

# 3. Workflow tổng quát

```text
Reference
   ↓
Tạo Plane
   ↓
Merge toàn bộ vertex → 1 điểm
   ↓
Extrude dựng một nửa profile
   ↓
Đặt 3D Cursor tại tâm xoay
   ↓
Origin → 3D Cursor
   ↓
Screw Modifier
   ↓
Angle = 360°
Steps ≈ 32
Merge = ON
   ↓
Apply
   ↓
Recalculate Normals Outside
   ↓
Solidify
   ↓
Subdivision Surface
   ↓
Support Loop
   ↓
Tinh chỉnh hình dạng
```

---

# 4. Bài thực hành 1 — Dựng bình tròn cơ bản

## Bước 1 — Chuẩn bị reference

Đưa hình tham chiếu của bình về khu vực dễ quan sát.

Nếu cần reset vị trí object:

```text
Alt + G
```

Sau đó di chuyển reference sang phía sau để không cản việc model.

---

## Bước 2 — Tạo geometry ban đầu

Thêm một Plane:

```text
Shift + A
→ Mesh
→ Plane
```

Vào Edit Mode:

```text
Tab
```

Chọn tất cả:

```text
A
```

Merge toàn bộ 4 vertex về một điểm:

```text
M
→ At Center
```

Kết quả:

```text
Plane

●────●
│    │
●────●

     ↓ Merge

     ●
```

Điểm này sẽ là điểm bắt đầu để dựng profile.

---

# 5. Dựng profile của bình

Chuyển sang Front View:

```text
Numpad 1
```

Từ vertex đầu tiên, dùng:

```text
E
```

để Extrude từng đoạn theo đường biên của bình.

Ví dụ:

```text
           ●
          ╱
         ●
        ╱
       ●
       │
       ●
        ╲
         ●
          ╲
           ●
```

Đây chỉ là **một nửa mặt cắt của bình**.

---

## Nguyên tắc đặt vertex

### Không nên

```text
●●●●●●●●●●●●●
```

Đặt quá nhiều vertex sẽ:

* khó chỉnh sửa;
* topology nặng;
* đường cong dễ không đều;
* Subdivision khó kiểm soát.

### Nên

```text
●────●────●
          ╲
           ●
            ╲
             ●
```

Ưu tiên:

* ít vertex;
* khoảng cách tương đối đều;
* chỉ thêm vertex tại nơi curvature thay đổi.

---

# 6. Không cần dựng mặt trong của bình

Bạn chỉ cần dựng đường biên bên ngoài.

Ví dụ:

```text
Chỉ dựng:

      ●
     ╱
    ●
   ╱
  ●
  │
  ●
   ╲
    ●
```

Không cần tự dựng:

```text
      ●──●
     ╱    ╲
    ●      ●
    │      │
    ●      ●
```

Phần mặt trong sẽ được tạo sau bằng **Solidify Modifier**.

---

# 7. Đặt tâm xoay chính xác

Đây là bước rất quan trọng.

Chọn vertex nằm chính giữa trục của bình.

Sau đó:

```text
Shift + S
→ Cursor to Selected
```

3D Cursor sẽ được chuyển tới vertex đó.

Thoát Edit Mode:

```text
Tab
```

Sau đó:

```text
Right Click
→ Set Origin
→ Origin to 3D Cursor
```

---

## Vì sao Origin quan trọng?

Screw Modifier xoay geometry quanh **Origin/trục đã xác định**.

Origin sai:

```text
       Profile

          │
          │
     ●────┘

● Origin

        ↓ Screw

     hình xoay lệch
```

Origin đúng:

```text
Profile
   │
   │
   ● Origin

      ↓ Screw

   bình tròn chuẩn
```

---

# 8. Thêm Screw Modifier

Vào:

```text
Modifiers
→ Add Modifier
→ Screw
```

Blender sẽ xoay profile quanh tâm và tạo ra vật thể 3D.

---

# 9. Thông số quan trọng của Screw Modifier

## Angle

Đặt:

```text
Angle = 360°
```

Có thể hiểu như sau:

```text
90°
  ◔

180°
  ◐

270°
  ◕

360°
  ●
```

Với bình kín hoàn chỉnh:

```text
360°
```

---

## Steps

`Steps` quyết định số lượng đoạn quanh chu vi.

Ví dụ:

```text
Steps = 8

     ______
   /        \
  |          |
   \________/
```

Có thể thấy khá góc cạnh.

Tăng lên:

```text
Steps = 32
```

sẽ tạo bề mặt tròn mượt hơn.

Trong bài:

```text
Steps ≈ 32
```

là lựa chọn hợp lý cho high-poly model.

---

## Merge

Bật:

```text
Merge ✓
```

để những vertex gặp nhau tại seam được hàn thành một.

Nếu không bật Merge:

```text
Vertex A ● ● Vertex B
          ↑
       khe seam
```

Khi bật:

```text
Vertex A/B ●
```

Điều này giúp tránh:

* seam hở;
* shading artifact;
* geometry trùng;
* lỗi khi Subdivision.

---

# 10. Kiểm tra Wireframe

Có thể bật:

```text
Object Properties / Viewport Display
→ Wireframe
```

để quan sát mật độ topology.

Ví dụ:

```text
Steps 16

||||||||||||||||

Steps 32

||||||||||||||||||||||||||||||||
```

Steps càng cao thì hình tròn càng mượt nhưng polygon cũng nhiều hơn.

---

# 11. Apply Screw Modifier

Khi đã hài lòng:

```text
Modifier
→ Apply
```

Lúc này geometry xoay được chuyển thành mesh thật.

---

# 12. Kiểm tra Normals

Sau Screw, đôi khi normal có thể quay vào trong.

Bật:

```text
Viewport Overlays
→ Face Orientation
```

Thông thường:

* **Blue** → mặt ngoài đúng.
* **Red** → normal đang quay ngược.

Nếu bên ngoài model bị đỏ:

```text
Tab
A
Alt + N
→ Recalculate Outside
```

Workflow:

```text
Screw
  ↓
Face Orientation
  ↓
Red outside?
  ↓ Yes
Alt + N
  ↓
Recalculate Outside
```

---

# 13. Tạo độ dày bằng Solidify

Hiện tại bình chỉ là một lớp surface rất mỏng.

Thêm:

```text
Add Modifier
→ Solidify
```

Điều chỉnh:

```text
Thickness
```

cho tới khi thành bình có độ dày hợp lý.

---

## Hướng của Thickness

Nếu profile đã dựng theo silhouette ngoài của reference, thường muốn thành bình đi **vào bên trong**.

Có thể điều chỉnh:

```text
Thickness
Offset
```

để kiểm soát hướng.

Ví dụ:

```text
Silhouette gốc
│
│← thành bình đi vào trong
│
```

Điều này giữ nguyên kích thước ngoài của reference.

---

# 14. Làm mượt với Subdivision Surface

Sau Solidify, thêm:

```text
Ctrl + 2
```

Blender tạo:

```text
Subdivision Surface
Viewport Level = 2
```

Kết quả sẽ mượt hơn.

---

# 15. Vấn đề: Subdivision làm model quá tròn

Ví dụ miệng bình ban đầu:

```text
────────┐
        │
```

Sau Subdivision có thể thành:

```text
───────╮
       │
```

Nếu muốn cạnh sắc hơn, thêm **support loop** gần cạnh.

Ví dụ:

```text
──────────── edge
──────────── support loop
```

Càng gần nhau:

```text
══════
══════
```

thì cạnh càng sắc.

Càng xa nhau:

```text
══════


══════
```

thì vùng chuyển tiếp càng mềm.

---

# 16. Thêm Edge Loop

Trong Edit Mode:

```text
Ctrl + R
```

Thêm loop gần:

* miệng bình;
* đáy bình;
* phần chuyển tiếp;
* những nơi cần giữ silhouette.

Ví dụ:

```text
Không support loop

     ╭────
    ╱
───╯
```

Có support loop:

```text
     ┌────
     │
─────┘
```

---

# 17. Bài thực hành 2 — Bình có các rãnh xoắn

Bình thứ hai vẫn sử dụng workflow ban đầu:

```text
Plane
↓
Merge
↓
Extrude Profile
↓
Origin đúng tâm
↓
Screw
```

Thiết lập:

```text
Angle = 360°
Steps = 32
Merge = ON
```

Sau đó Apply Screw.

---

# 18. Recalculate Normals

Tiếp tục kiểm tra normal:

```text
Tab
A
Alt + N
→ Recalculate Outside
```

Trước khi thực hiện các thao tác Extrude tiếp theo.

---

# 19. Tạo các rãnh dọc quanh bình

Ở model thứ hai, chúng ta muốn tạo pattern xen kẽ quanh chu vi.

Chọn các dải polygon dọc xen kẽ:

```text
| X |   | X |   | X |   | X |
```

Có thể dùng kết hợp:

```text
Alt + Click
Shift + Alt + Click
```

để chọn nhiều face loop.

Không chọn hai hàng polygon phía trên nếu muốn phần miệng bình giữ nguyên.

---

# 20. Extrude Faces Along Normals

Sau khi chọn các dải polygon:

```text
Alt + E
→ Extrude Faces Along Normals
```

Extrude một lượng rất nhỏ.

Minh họa:

```text
Trước:

| | | | | | | |

Sau:

|█| |█| |█| |█|
```

Các dải nhô ra tạo pattern quanh thân bình.

Không nên extrude quá nhiều vì Subdivision sẽ làm pattern trở nên quá mạnh.

---

# 21. Làm mềm phần chuyển tiếp ở đáy

Nếu pattern dọc kết thúc quá đột ngột:

```text
||||||||
||||||||
________
```

hãy chọn các vertex phía dưới và đẩy lên hoặc tinh chỉnh vị trí.

Mục tiêu:

```text
||||||||
 ||||||
  ||||
   ||
```

để pattern hòa dần vào phần đáy.

---

# 22. Subdivision Surface cho pattern

Dùng:

```text
Ctrl + 2
```

Pattern sẽ chuyển từ dạng polygon cứng:

```text
_|‾|_|‾|_|‾|_
```

thành dạng mềm:

```text
╭╮╭╮╭╮╭╮
```

---

# 23. Tạo hiệu ứng xoắn bằng Proportional Editing

Đây là phần thú vị nhất của bài.

Vào Edit Mode:

```text
Tab
```

Chọn vòng vertex phía trên:

```text
Alt + Click
```

Bật Proportional Editing:

```text
O
```

Sau đó Rotate:

```text
R
```

theo trục của bình.

Trong trường hợp bình đứng theo Z:

```text
R
Z
```

Cuộn con lăn chuột để thay đổi vùng ảnh hưởng.

---

## Nguyên lý

Không có Proportional Editing:

```text
|||||||||
|||||||||
///////// ← chỉ phần trên xoay
```

Có Proportional Editing:

```text
\\\\\\\\
 \\\\\\\
  \\\\\\
   \\\\\
    ||||
```

Rotation được truyền dần xuống dưới, tạo ra một **twist mềm mại**.

---

# 24. Điều chỉnh vùng ảnh hưởng

Khi dùng:

```text
O
R Z
```

cuộn:

```text
Mouse Wheel
```

để thay đổi bán kính.

### Bán kính nhỏ

```text
\\\\\
|||||
|||||
|||||
```

Chỉ phần trên bị ảnh hưởng.

### Bán kính lớn

```text
\\\\\
 \\\\
  \\\
   \\
    |
```

Twist trải dài toàn thân bình.

Đây thường là kết quả đẹp hơn.

---

# 25. Thêm Solidify cho bình xoắn

Cuối cùng thêm:

```text
Solidify Modifier
```

và điều chỉnh:

```text
Thickness
```

để biến surface thành một vật thể có thành thật.

Workflow hoàn chỉnh:

```text
Profile
  ↓
Screw
  ↓
Extrude pattern
  ↓
Subdivision
  ↓
Proportional Twist
  ↓
Solidify
```

---

# 26. Có thể tiếp tục phá vỡ tính đối xứng

Screw Modifier chỉ giúp **tạo base nhanh**.

Sau khi Apply, model không bắt buộc phải tiếp tục đối xứng.

Ví dụ có thể:

* kéo dài cổ bình;
* nghiêng cổ;
* tạo phần thân lệch;
* xoắn một vùng;
* scale một bên;
* thêm các điểm lồi/lõm;
* tạo silhouette stylized.

Ví dụ:

```text
Base đối xứng

    │
   ╱ ╲
  │   │
   ╲_╱

       ↓ chỉnh sửa

      ╱
     ╱
    ╱
   │
  ╱ ╲
 │   │
  ╲_╱
```

---

# 27. Khi nào nên dùng Screw?

Screw đặc biệt phù hợp với:

| Loại object              | Phù hợp |
| ------------------------ | ------: |
| Bình hoa                 |       ✅ |
| Chai                     |       ✅ |
| Ly/cốc                   |       ✅ |
| Bát                      |       ✅ |
| Chậu cây                 |       ✅ |
| Cột tròn                 |       ✅ |
| Chân bàn tiện            |       ✅ |
| Tay nắm tròn             |       ✅ |
| Bánh xe                  |       ✅ |
| Vật thể cơ khí tròn xoay |       ✅ |
| Nhân vật                 |       ❌ |
| Nhà                      |       ❌ |
| Object bất đối xứng mạnh |       ❌ |

---

# 28. Mirror và Screw khác nhau thế nào?

| Mirror                     | Screw                   |
| -------------------------- | ----------------------- |
| Đối xứng qua một mặt phẳng | Đối xứng quanh một trục |
| Thường dựng một nửa object | Thường dựng một profile |
| Phù hợp nhân vật, xe, nhà  | Phù hợp bình, chai, cốc |
| Lặp 2 phía                 | Xoay profile 360°       |

Minh họa:

```text
MIRROR

Left │ Right
  ←  │  →
     │
  Plane đối xứng
```

```text
SCREW

       ↻
    ↗     ↖
  ←    ●    →
    ↘     ↙

Trục xoay
```

---

# 29. Screw và Spin

Hai công cụ có nguyên lý tương tự:

```text
Profile
   +
Rotation quanh trục
   =
Round Model
```

Nhưng:

### Screw Modifier

* Non-destructive trước khi Apply.
* Có thể chỉnh `Angle`.
* Có thể chỉnh `Steps`.
* Dễ bật/tắt.
* Rất phù hợp workflow modifier.

### Spin

* Là thao tác trực tiếp trong Edit Mode.
* Tạo geometry ngay lập tức.
* Phù hợp khi muốn chỉnh mesh trực tiếp.

Trong workflow hiện đại, **Screw Modifier thường linh hoạt hơn**.

---

# 30. Modifier Stack đề xuất

Một stack phổ biến:

```text
Screw
  ↓
Solidify
  ↓
Subdivision Surface
```

Hoặc sau khi Apply Screw:

```text
Base Mesh
  ↓
Solidify
  ↓
Subdivision Surface
```

Với model cần chỉnh pattern:

```text
Screw → Apply
      ↓
Edit topology
      ↓
Solidify
      ↓
Subdivision
```

Thứ tự modifier có thể ảnh hưởng rất lớn đến kết quả.

---

# 31. Những lỗi thường gặp

## Lỗi 1 — Origin sai

### Hiện tượng

Screw tạo thành một vòng lớn hoặc quay lệch khỏi bình.

### Sửa

```text
Select center vertex
Shift + S
→ Cursor to Selected

Object Mode
Right Click
→ Set Origin
→ Origin to 3D Cursor
```

---

## Lỗi 2 — Profile cách trục quá xa

Nếu toàn bộ profile nằm quá xa trục:

```text
● Origin       Profile
               │
               │
```

Screw sẽ tạo ra dạng vòng tròn/ring thay vì bình đúng tỷ lệ.

---

## Lỗi 3 — Quá ít Steps

```text
Steps = 8
```

có thể tạo thành bình góc cạnh.

Tăng:

```text
Steps = 24–32
```

hoặc cao hơn tùy mục đích.

---

## Lỗi 4 — Quá nhiều Steps

Không phải càng nhiều càng tốt.

```text
Steps = 128
```

có thể:

* tạo mesh nặng;
* khó edit;
* không tăng đáng kể chất lượng nếu đã dùng Subdivision.

---

## Lỗi 5 — Không bật Merge

Có thể xuất hiện seam:

```text
│  │
│  │ ← hai cạnh gần nhau nhưng chưa weld
│  │
```

Bật:

```text
Merge ✓
```

---

## Lỗi 6 — Normal bị ngược

Kiểm tra:

```text
Face Orientation
```

Sửa:

```text
A
Alt + N
→ Recalculate Outside
```

---

## Lỗi 7 — Subdivision làm mất form

Nguyên nhân:

* thiếu support loop.

Giải pháp:

```text
Ctrl + R
```

để thêm edge loop gần các cạnh quan trọng.

---

## Lỗi 8 — Profile quá nhiều điểm

Nhiều điểm không đồng nghĩa với bề mặt đẹp hơn.

Ưu tiên:

> **Ít điểm + placement tốt + Subdivision**

thay vì:

> **Nhiều điểm + topology khó kiểm soát**

---

# 32. Công thức cần nhớ

## Vật thể tròn đơn giản

```text
1 profile
+ Screw 360°
+ Merge
= Round Base
```

## Vật thể có độ dày

```text
Round Base
+ Solidify
= Shell
```

## High-poly

```text
Shell
+ Support Loops
+ Subdivision
= Smooth High-Poly
```

## Bình xoắn

```text
Round Base
+ Pattern
+ Proportional Rotation
= Twisted Vase
```

---

# 33. Phím tắt trọng tâm

| Phím                  | Chức năng                   |
| --------------------- | --------------------------- |
| `Tab`                 | Object/Edit Mode            |
| `A`                   | Chọn tất cả                 |
| `E`                   | Extrude                     |
| `M`                   | Merge                       |
| `Shift + S`           | Snap menu                   |
| `Alt + N`             | Normal menu                 |
| `Ctrl + R`            | Loop Cut                    |
| `Alt + E`             | Extrude menu                |
| `O`                   | Proportional Editing        |
| `R`                   | Rotate                      |
| `R`, `Z`              | Rotate quanh Z              |
| `Ctrl + 2`            | Subdivision Surface Level 2 |
| `Alt + Click`         | Chọn loop                   |
| `Shift + Alt + Click` | Thêm loop vào selection     |
| `Alt + G`             | Clear Location              |

---

# 34. Bài thực hành đề xuất

## Bài 1 — Bình đơn giản

Tạo một bình có:

* thân tròn;
* cổ hẹp;
* miệng hơi mở;
* đáy tương đối phẳng.

Bắt buộc dùng:

```text
Profile
→ Screw
→ Solidify
→ Subdivision
```

---

## Bài 2 — Bình có pattern

Tạo:

* 16–32 segment;
* các dải polygon xen kẽ;
* Extrude Along Normals;
* Subdivision.

---

## Bài 3 — Bình xoắn

Từ bài 2:

```text
Top vertices
→ Proportional Editing
→ Rotate Z
```

Tạo twist lan dần từ trên xuống dưới.

---

## Bài 4 — Tự tìm reference

Tìm một object tròn xoay như:

* bình cổ cao;
* chai nước hoa;
* bình gốm;
* cốc;
* chân đèn;
* quân cờ.

Sau đó cố gắng dựng chỉ bằng một profile.

---

# 35. Checklist

* [ ] Profile chỉ sử dụng số vertex cần thiết.
* [ ] Vertex được phân bố tương đối đều ở vùng cong.
* [ ] Profile có hướng đúng.
* [ ] Origin nằm chính xác trên trục xoay.
* [ ] Hiểu sự khác biệt giữa Origin và 3D Cursor.
* [ ] Screw sử dụng `Angle = 360°` cho vật thể kín.
* [ ] `Steps` đủ để silhouette tròn.
* [ ] `Merge` được bật để xử lý seam.
* [ ] Kiểm tra Face Orientation sau khi Apply Screw.
* [ ] Normals hướng ra ngoài.
* [ ] Solidify tạo độ dày hợp lý.
* [ ] Subdivision không phá silhouette chính.
* [ ] Support loop được thêm tại vùng cần cạnh sắc.
* [ ] Kiểm tra shading ở vùng pole, miệng và đáy.
* [ ] Có thể sử dụng Proportional Editing để tạo twist.
* [ ] Không thêm topology nhiều hơn mức cần thiết.

---

# 36. Ghi nhớ cốt lõi

> **Đối với một vật thể tròn xoay, đừng model toàn bộ hình dạng nếu chỉ cần model một profile.**

Tư duy quan trọng của bài:

```text
Phân tích object
      ↓
Có đối xứng quanh trục?
      ↓
     Có
      ↓
Dựng 1 profile
      ↓
Screw 360°
      ↓
Tinh chỉnh topology
      ↓
Solidify + Subdivision
```

**Screw Modifier** giúp biến một đường profile rất đơn giản thành một model 3D phức tạp chỉ trong vài thao tác. Sau khi tạo được base, bạn vẫn có thể phá vỡ tính đối xứng bằng Extrude, Proportional Editing, twist hoặc chỉnh vertex để tạo ra những thiết kế phức tạp hơn.

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
