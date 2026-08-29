# 008 — Selection Methods

| Thuộc tính     | Nội dung                                                              |
| -------------- | --------------------------------------------------------------------- |
| **Phần**       | 01 — Introduction to Blender                                          |
| **Thời lượng** | 3:27                                                                  |
| **Chủ đề**     | Select, Deselect, Edge Loop, Edge Ring, Box Select và chọn cách quãng |

---

## 1. Mục tiêu bài học

Sau bài này, bạn có thể:

* [ ] Chọn chính xác **Vertex / Edge / Face** trong Edit Mode.
* [ ] Chọn nhanh toàn bộ một **Edge Loop** thay vì chọn từng cạnh.
* [ ] Chọn được **Edge Ring** theo hướng vuông góc với Edge Loop.
* [ ] Thêm nhiều loop/ring vào vùng chọn hiện tại.
* [ ] Dùng **Box Select** để chọn hoặc loại bỏ hàng loạt phần tử.
* [ ] Chọn các polygon theo chu kỳ, ví dụ **1 chọn – 1 bỏ** hoặc **1 chọn – 2 bỏ**.
* [ ] Kết hợp các phương pháp để tạo vùng chọn phức tạp trước khi modeling.

---

## File mẫu thực hành Selection Methods

File mẫu đã được đặt cùng thư mục với bài học:

> [Tải/mở `07+Selection+Methods.blend`](07%2BSelection%2BMethods.blend)

Nguồn ban đầu: `C:\Users\Khanh PC\Downloads\07+Selection+Methods.blend`

Vị trí trong khóa học: `01 - Introduction to Blender\07+Selection+Methods.blend`

File này dùng để luyện Vertex/Edge/Face Select, Edge Loop, Edge Ring,
Box Select và các kiểu chọn theo chu kỳ.

### Mở file từ Blender

```text
File
 ↓
Open
 ↓
Chọn 07+Selection+Methods.blend
 ↓
Open Blender File
```

Nếu Blender hỏi có lưu scene hiện tại hay không, hãy xử lý trước khi mở file mẫu.

---

# 2. Vì sao Selection quan trọng?

Trong modeling, phần lớn thao tác đều có quy trình:

```text
Chọn đúng thành phần
        ↓
Thực hiện thao tác
        ↓
Extrude / Scale / Bevel / Inset...
        ↓
Kiểm tra phần mesh không mong muốn
```

Nếu chọn sai vùng, các thao tác như:

* `Extrude`
* `Scale`
* `Bevel`
* `Inset`
* `Delete`
* `Dissolve`

có thể tác động lên những phần không mong muốn của model.

Do đó, **chọn nhanh và chính xác** là một kỹ năng nền tảng khi modeling.

---

# 3. Selection Mode

Trong **Edit Mode**, mesh có ba loại thành phần chính:

| Mode          | Thành phần | Phím |
| ------------- | ---------- | ---: |
| Vertex Select | Điểm       |  `1` |
| Edge Select   | Cạnh       |  `2` |
| Face Select   | Mặt        |  `3` |

> Các phím `1 / 2 / 3` ở đây là hàng số phía trên bàn phím, không phải Numpad.

Sơ đồ:

```text
Vertex
   ●────●
   │    │
   ●────●

Edge
   ●════●
   │    │
   ●────●

Face
   ●────●
   │████│
   │████│
   ●────●
```

---

# 4. Các phím chọn cơ bản

| Thao tác             | Phím                         |
| -------------------- | ---------------------------- |
| Chọn tất cả          | `A`                          |
| Bỏ toàn bộ vùng chọn | `Alt + A`                    |
| Đảo vùng chọn        | `Ctrl + I`                   |
| Box Select           | `B`                          |
| Edge Loop            | `Alt + Click`                |
| Thêm Edge Loop       | `Shift + Alt + Click`        |
| Edge Ring            | `Ctrl + Alt + Click`         |
| Thêm Edge Ring       | `Shift + Ctrl + Alt + Click` |

> Tùy phiên bản Blender và thiết lập keymap, thao tác click thường là **Left Mouse Button**.

---

# 5. Edge Loop Selection

Giả sử mesh có rất nhiều cạnh:

```text
│───│───│───│
│───│───│───│
│───│───│───│
│───│───│───│
│───│───│───│
```

Nếu chọn từng cạnh bằng `Shift + Click`, ta phải:

```text
Click
↓
Shift + Click
↓
Shift + Click
↓
Shift + Click
↓
...
```

Cách này rất chậm khi mesh có hàng trăm polygon.

## Cách nhanh

Đưa chuột lên một cạnh và:

```text
Alt + Click
```

Blender sẽ tìm và chọn toàn bộ **Edge Loop** liên tục.

Ví dụ:

```text
Trước:

│───│───│───│
│───│───│───│
│───│───│───│
│───│───│───│


Alt + Click


Sau:

│───║───│───│
│───║───│───│
│───║───│───│
│───║───│───│
    ↑
 Edge Loop
```

---

# 6. Chọn thêm nhiều Edge Loop

Sau khi đã chọn một loop, giữ:

```text
Shift + Alt + Click
```

để thêm loop khác vào vùng chọn.

Ví dụ:

```text
│───║───│───║
│───║───│───║
│───║───│───║
│───║───│───║
    ↑       ↑
 Loop 1   Loop 2
```

Đây là cách rất nhanh để chọn nhiều vòng cạnh trên một mesh.

---

# 7. Edge Loop và Edge Ring khác nhau thế nào?

Đây là hai khái niệm rất dễ nhầm.

## Edge Loop

Các edge nối liên tục theo một dòng.

```text
│   ║   │
│   ║   │
│   ║   │
│   ║   │
```

Chọn bằng:

```text
Alt + Click
```

---

## Edge Ring

Edge Ring đi theo chuỗi các cạnh **song song**, băng qua những quad liên tiếp.

```text
───────
═══════
───────
═══════
───────
```

Chọn bằng:

```text
Ctrl + Alt + Click
```

Có thể hiểu đơn giản:

```text
Edge Loop
    │
    │
    │
    │

Edge Ring
────────────
────────────
────────────
```

Loop và Ring thường chạy theo hai hướng khác nhau của topology.

---

# 8. Thêm nhiều Edge Ring

Sau khi đã chọn một ring, giữ:

```text
Shift + Ctrl + Alt + Click
```

để thêm các ring khác.

Ví dụ:

```text
════════════
────────────
════════════
────────────
════════════
```

Phương pháp này đặc biệt hữu ích khi:

* chỉnh topology;
* bevel nhiều dải cạnh;
* scale nhiều vòng;
* tạo chi tiết lặp;
* chuẩn bị vùng để extrude.

---

# 9. Loop Selection trên Face

Nguyên tắc tương tự cũng áp dụng với **Face Select Mode**.

Chuyển sang:

```text
3
```

sau đó:

```text
Alt + Click
```

Blender có thể chọn một dải polygon liên tục.

Ví dụ:

```text
┌───┬───┬───┐
│   │███│   │
├───┼───┼───┤
│   │███│   │
├───┼───┼───┤
│   │███│   │
└───┴───┴───┘
     ↑
 Face Loop
```

---

# 10. Chọn đúng hướng của Face Loop

Khi dùng:

```text
Alt + Click
```

trên polygon, vị trí con trỏ trong face có thể ảnh hưởng đến **hướng loop** mà Blender chọn.

Ví dụ một quad:

```text
┌─────────────────┐
│       ↑         │
│                 │
│ ←     FACE    → │
│                 │
│       ↓         │
└─────────────────┘
```

Nếu click gần:

* cạnh trái/phải → Blender có thể chọn loop theo một hướng;
* cạnh trên/dưới → có thể chọn loop theo hướng còn lại.

Vì vậy nếu Blender chọn sai hướng:

1. bỏ vùng chọn;
2. đưa con trỏ gần cạnh khác của polygon;
3. `Alt + Click` lại.

---

# 11. Box Select

Khi cần chọn một vùng lớn, dùng:

```text
B
```

sau đó kéo chuột tạo hộp.

Ví dụ:

```text
Mesh:

●──●──●──●──●
│  │  │  │  │
●──●──●──●──●
│  │  │  │  │
●──●──●──●──●


       ┌─────────┐
       │ SELECT  │
       └─────────┘
```

Box Select rất hữu ích khi cần:

* chọn một nửa mesh;
* chọn nhiều vertex;
* xóa nhanh một vùng;
* bổ sung vùng chọn phức tạp.

---

# 12. Dùng Box Select để loại bỏ vùng đã chọn

Trong Box Select, Blender cho phép sử dụng chế độ **deselect/subtract** để loại bớt các phần tử khỏi selection hiện tại.

Quy trình:

```text
Selection lớn
     ↓
B — Box Select
     ↓
Deselect một vùng
     ↓
Selection cuối cùng
```

Trong một số keymap/version, có thể dùng **Middle Mouse Button** khi Box Select để loại vùng.

Nếu keymap hiện tại hoạt động khác, có thể chọn chế độ:

```text
Select
Set
Extend
Subtract
Difference
Intersect
```

trên thanh công cụ của Box Select.

---

# 13. Wireframe giúp chọn xuyên mesh

Một vấn đề thường gặp:

Ở Solid Mode, bạn có thể chỉ chọn được thành phần đang nhìn thấy phía trước.

Chuyển sang:

```text
Wireframe
```

hoặc bật:

```text
X-Ray
```

để chọn xuyên qua mesh.

Sơ đồ:

```text
Solid Mode

Camera
  ↓

[ mặt trước ]
[ mặt sau  ]  ← khó chọn


Wireframe / X-Ray

Camera
  ↓

[ mặt trước ]
[ mặt sau  ]

     ↓

Có thể chọn xuyên cả hai
```

Điều này rất hữu ích khi dùng `B` để chọn hoặc loại bỏ một nửa model.

---

# 14. Tạo vùng chọn phức tạp

Có thể kết hợp nhiều phương pháp.

Ví dụ:

```text
1. Alt + Click
      ↓
Chọn Edge Loop

2. Shift + Alt + Click
      ↓
Thêm nhiều Loop

3. Wireframe
      ↓

4. B
      ↓
Loại bỏ một phần

5. Ctrl + I
      ↓
Đảo vùng chọn nếu cần
```

Kết quả là có thể tạo selection khá phức tạp chỉ trong vài giây.

---

# 15. Chọn cách quãng — Checker Deselect

Một phương pháp hữu ích khác là chọn theo chu kỳ.

Ví dụ:

```text
Chọn
 ↓
■ □ ■ □ ■ □ ■ □
```

tức:

```text
1 polygon được chọn
1 polygon bị bỏ
1 polygon được chọn
1 polygon bị bỏ
...
```

Blender gọi thao tác này là:

**Checker Deselect**

Có thể tìm tại:

```text
Select
└── Checker Deselect
```

---

## Ví dụ 1 — chọn cách một polygon

```text
Ban đầu:

■ ■ ■ ■ ■ ■ ■ ■


Checker Deselect:

■ □ ■ □ ■ □ ■ □
```

---

## Ví dụ 2 — chọn theo khoảng lớn hơn

Có thể điều chỉnh tham số để tạo:

```text
■ □ □ ■ □ □ ■ □ □
```

tức:

```text
Chọn 1
Bỏ 2
Chọn 1
Bỏ 2
...
```

Điều này rất hữu ích để tạo:

* họa tiết lặp;
* extrude xen kẽ;
* scale xen kẽ;
* vật liệu xen kẽ;
* mô hình kiến trúc;
* răng cưa;
* panel;
* chi tiết cơ khí.

> Phím tắt của **Checker Deselect** có thể khác giữa các phiên bản/keymap Blender. Nếu phím trong video không hoạt động, dùng menu `Select → Checker Deselect`.

---

# 16. So sánh các phương pháp Selection

| Phương pháp          | Dùng khi               |
| -------------------- | ---------------------- |
| Click                | Chọn một phần tử       |
| `Shift + Click`      | Thêm từng phần tử      |
| `Alt + Click`        | Chọn cả Edge/Face Loop |
| `Ctrl + Alt + Click` | Chọn Edge Ring         |
| `B`                  | Chọn một vùng lớn      |
| Wireframe + `B`      | Chọn xuyên qua mesh    |
| `Ctrl + I`           | Đảo selection          |
| Checker Deselect     | Chọn cách quãng        |
| `A`                  | Chọn toàn bộ           |
| `Alt + A`            | Bỏ toàn bộ             |

---

# 17. Workflow chọn mesh hiệu quả

```text
                 ┌──────────────┐
                 │ Vào Edit Mode│
                 └──────┬───────┘
                        ↓
              ┌───────────────────┐
              │ Chọn 1 / 2 / 3    │
              │ Vertex/Edge/Face  │
              └────────┬──────────┘
                       ↓
             ┌─────────────────────┐
             │ Selection đơn giản? │
             └──────┬────────┬─────┘
                    │        │
                  Có│        │Không
                    ↓        ↓
                  Click   Loop / Ring
                           / Box Select
                               ↓
                       Thêm/bớt selection
                               ↓
                         Ctrl + I nếu cần
                               ↓
                     ┌──────────────────┐
                     │ Modeling Tool    │
                     │ Bevel/Extrude... │
                     └──────────────────┘
```

---

# 18. Thực hành

## Bài tập — Bevel riêng một Edge Loop

### Bước 1 — Tạo model

Tạo một mesh có nhiều loop, ví dụ:

```text
Shift + A
→ Mesh
→ Cube
```

Subdivide hoặc thêm Loop Cut để mesh có đủ topology.

---

### Bước 2 — Vào Edit Mode

```text
Tab
```

Chuyển sang:

```text
2 — Edge Select
```

---

### Bước 3 — Chọn một Edge Loop

Đưa chuột lên cạnh cần chọn:

```text
Alt + Click
```

Kiểm tra toàn bộ loop đã được chọn.

---

### Bước 4 — Bevel riêng loop

Nhấn:

```text
Ctrl + B
```

kéo chuột để tạo bevel.

Có thể dùng con lăn chuột để tăng số segment.

---

### Bước 5 — Kiểm tra kết quả

Đảm bảo:

```text
Edge Loop được chọn
        ↓
      Bevel
        ↓
Chỉ loop đó thay đổi
        ↓
Các vùng khác giữ nguyên
```

Nếu nhiều phần không mong muốn bị bevel, nguyên nhân thường là **selection chưa chính xác**.

---

# 19. Bài tập nâng cao

Tạo một cylinder hoặc sphere rồi thực hiện:

```text
1. Alt + Click
   → chọn một loop

2. Shift + Alt + Click
   → thêm 2–3 loop

3. Ctrl + Alt + Click
   → thử Edge Ring

4. Chuyển Face Mode

5. Alt + Click
   → chọn Face Loop

6. Wireframe

7. B
   → loại một nửa selection

8. Checker Deselect
   → tạo selection xen kẽ

9. Extrude hoặc Scale
   → quan sát kết quả
```

---

# 20. Lỗi thường gặp

### Chọn sai hướng Loop

**Nguyên nhân:** click ở vị trí không phù hợp trên face.

**Cách sửa:**

* zoom gần mesh;
* đưa chuột gần cạnh theo hướng mong muốn;
* `Alt + Click` lại.

---

### Alt + Click không chọn được toàn bộ loop

Topology có thể bị ngắt bởi:

* triangle;
* ngon;
* pole;
* topology không liên tục.

Ví dụ:

```text
Quad → Quad → Quad → Triangle
                      ↑
                Loop có thể dừng
```

Edge Loop hoạt động tốt nhất trên topology dạng **quad**.

---

### Box Select không chọn mặt phía sau

Bật:

```text
Wireframe
```

hoặc:

```text
X-Ray
```

trước khi Box Select.

---

### Modeling làm thay đổi cả vùng không mong muốn

Kiểm tra selection trước khi:

```text
G
R
S
E
I
Ctrl + B
```

Không nên thao tác ngay nếu chưa chắc vùng nào đang được chọn.

---

# 21. Ghi nhớ nhanh

```text
A
│
└── Select All


Alt + A
│
└── Deselect


Alt + Click
│
└── Loop


Ctrl + Alt + Click
│
└── Ring


Shift
│
└── Add Selection


B
│
└── Box Select


Ctrl + I
│
└── Invert


Checker Deselect
│
└── Chọn cách quãng
```

---

# 22. Checklist

* [ ] Biết chuyển giữa Vertex / Edge / Face Select.
* [ ] Dùng được `A` để Select All.
* [ ] Dùng được Deselect.
* [ ] Dùng được `Alt + Click` để chọn Edge Loop.
* [ ] Dùng được `Shift + Alt + Click` để thêm nhiều loop.
* [ ] Phân biệt được **Edge Loop** và **Edge Ring**.
* [ ] Dùng được `Ctrl + Alt + Click` để chọn Edge Ring.
* [ ] Dùng được `B` để Box Select.
* [ ] Biết dùng Wireframe/X-Ray để chọn xuyên mesh.
* [ ] Biết đảo selection bằng `Ctrl + I`.
* [ ] Biết sử dụng Checker Deselect để tạo vùng chọn cách quãng.
* [ ] Bevel được riêng một loop mà không tác động các phần khác.

---

## Tóm tắt

Selection trong Blender không chỉ là click vào một vertex hay polygon. Khi model ngày càng phức tạp, cần tận dụng các phương pháp chọn tự động:

```text
Loop Selection
      +
Ring Selection
      +
Box Selection
      +
Checker Deselect
      +
Invert / Add / Subtract
      ↓
Selection nhanh và chính xác
      ↓
Modeling hiệu quả hơn
```

Kỹ năng quan trọng nhất của bài này là **chọn đúng topology trước khi thao tác**. Khi thành thạo Loop, Ring và Box Select, việc xử lý mesh có hàng trăm hoặc hàng nghìn polygon sẽ nhanh hơn rất nhiều so với chọn thủ công từng phần tử.
