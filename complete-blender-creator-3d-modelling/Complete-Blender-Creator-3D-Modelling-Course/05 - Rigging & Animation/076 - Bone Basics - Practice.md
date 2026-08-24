# 076 — Bone Basics

## Kiến thức cơ bản về Bone trong Blender

| Thuộc tính       | Nội dung                                   |
| ---------------- | ------------------------------------------ |
| **Module**       | Module 05 — Rigging & Animation            |
| **Bài học**      | Bone Basics                                |
| **Thời lượng**   | 7:06                                       |
| **Chủ đề chính** | Tạo Armature và chuỗi bone cho mô hình rắn |

---

## 1. Mục tiêu bài học

Sau bài học này, bạn có thể:

* Hiểu vai trò của **Bone** và **Armature** trong Blender.
* Chuẩn bị topology phù hợp để mesh có thể uốn cong.
* Thêm Armature vào scene và hiển thị bone xuyên qua mesh.
* Phân biệt **Object Mode**, **Edit Mode** và **Pose Mode**.
* Tạo chuỗi bone bằng công cụ **Extrude**.
* Hiểu quan hệ cha–con giữa các bone.
* Phân biệt hai kiểu parenting:

  * **Connected**
  * **Keep Offset**
* Chuẩn bị bộ xương cơ bản cho animation con rắn.

---

## 2. Bone và Armature là gì?

### 2.1. Bone

**Bone** là một phần tử xương dùng để điều khiển mesh.

Một bone cơ bản có ba vùng có thể lựa chọn:

* **Head**: điểm gốc của bone.
* **Body**: phần thân, dùng để chọn toàn bộ bone.
* **Tail**: điểm cuối của bone.

```text
       Tail
        ●
       / \
      /   \
     /     \
    /       \
   ●─────────
  Head
```

Khi chọn từng phần:

| Phần được chọn | Kết quả khi nhấn `G`                           |
| -------------- | ---------------------------------------------- |
| Head           | Di chuyển điểm đầu và thay đổi chiều dài bone  |
| Tail           | Di chuyển điểm cuối và thay đổi chiều dài bone |
| Body           | Di chuyển toàn bộ bone                         |

### 2.2. Armature

**Armature** là một object chứa một hoặc nhiều bone.

```text
Armature
├── Bone 1
├── Bone 2
├── Bone 3
└── Bone 4
```

Mesh là phần hình học nhìn thấy, còn Armature là bộ khung được dùng để điều khiển và tạo chuyển động cho mesh.

---

## 3. Chuẩn bị mesh con rắn

### 3.1. Tạo thân rắn từ Cube

Bài học sử dụng Cube mặc định làm thân rắn.

Các bước:

1. Giữ lại Cube mặc định.
2. Chuyển sang Front View bằng phím `Numpad 1`.
3. Scale Cube theo trục X:

```text
S → X
```

4. Kéo dài Cube thành một khối dài khoảng **4 mét**.

Hình dạng ban đầu:

```text
┌───────────────────────────────┐
│                               │
└───────────────────────────────┘
```

---

## 4. Vì sao mesh cần nhiều topology?

Nếu Cube chỉ có các đỉnh ở hai đầu, mesh sẽ không thể uốn cong mượt.

```text
Mesh quá ít topology:

●──────────────────────────────●

Không có các điểm trung gian để tạo đường cong.
```

Khi bone xoay, Blender cần nhiều đỉnh nằm dọc theo mesh để phân bố biến dạng.

### 4.1. Thêm Loop Cut

1. Chọn Cube.
2. Nhấn `Tab` để vào Edit Mode.
3. Nhấn:

```text
Ctrl + R
```

4. Cuộn con lăn chuột để tăng số lượng đường cắt.
5. Tạo khoảng **10 Loop Cut**.
6. Nhấn chuột trái hai lần để xác nhận và giữ các đường cắt ở vị trí giữa.

Kết quả:

```text
┌───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┐
│   │   │   │   │   │   │   │   │   │   │   │
└───┴───┴───┴───┴───┴───┴───┴───┴───┴───┴───┘
```

Số lượng không nhất thiết phải chính xác tuyệt đối. Có thể sử dụng 9, 10 hoặc 11 đường cắt mà không ảnh hưởng quá nhiều đến bài thực hành.

---

## 5. Làm mượt mesh bằng Subdivision Surface

Sau khi tạo Loop Cut, thêm modifier để tăng topology và làm bề mặt mượt hơn.

### Các bước thực hiện

1. Chuyển về Object Mode.
2. Mở tab **Modifiers**, có biểu tượng cờ lê.
3. Chọn:

```text
Add Modifier → Subdivision Surface
```

Subdivision Surface sẽ:

* Chia nhỏ mỗi mặt thành nhiều mặt nhỏ hơn.
* Làm mesh tròn và mềm mại hơn.
* Tạo thêm topology để mesh biến dạng mượt hơn khi bone chuyển động.

```text
Mesh ban đầu
      ↓
Subdivision Surface
      ↓
Nhiều mặt hơn
      ↓
Biến dạng mượt hơn
```

Khi vào Edit Mode, bạn vẫn nhìn thấy topology gốc. Bề mặt mượt bên ngoài là kết quả do modifier tạo ra.

---

## 6. Thêm Armature

### Các bước thực hiện

1. Chuyển về Object Mode.
2. Chuyển sang Front View bằng `Numpad 1`.
3. Nhấn:

```text
Shift + A
```

4. Chọn:

```text
Armature
```

Blender sẽ thêm một bone mặc định tại vị trí 3D Cursor.

> Trong bản ghi âm, tổ hợp `Shift + A` đôi khi bị nhận nhầm thành “Shift 8”. Phím đúng để mở menu Add trong Blender là `Shift + A`.

---

## 7. Hiển thị bone phía trước mesh

Bone mới có thể bị mesh che khuất.

Để luôn nhìn thấy bone:

1. Chọn Armature.
2. Mở **Object Data Properties**, biểu tượng hình người màu xanh.
3. Mở mục **Viewport Display**.
4. Bật tùy chọn:

```text
In Front
```

Khi bật **In Front**, các bone luôn được hiển thị phía trước mesh, kể cả khi chúng thực tế nằm bên trong mô hình.

---

## 8. Ba chế độ làm việc với Armature

Armature có ba chế độ quan trọng.

| Chế độ          | Công dụng                                   |
| --------------- | ------------------------------------------- |
| **Object Mode** | Di chuyển, xoay hoặc scale toàn bộ Armature |
| **Edit Mode**   | Tạo và chỉnh sửa cấu trúc bộ xương          |
| **Pose Mode**   | Tạo dáng và animate các bone                |

### Sơ đồ quy trình

```text
Object Mode
    │
    ├── Edit Mode
    │      └── Xây dựng và chỉnh sửa bộ xương
    │
    └── Pose Mode
           └── Tạo dáng và animation
```

### Quy tắc quan trọng

* Xây dựng bộ xương trong **Edit Mode**.
* Tạo dáng và animate trong **Pose Mode**.
* Không sử dụng Object Mode để xoay riêng từng bone.

---

## 9. Đặt bone đầu tiên

1. Chọn Armature.
2. Chuyển sang Edit Mode.
3. Chọn phần Body của bone.
4. Nhấn `G` và di chuyển bone về gần đầu con rắn.
5. Chọn Head hoặc Tail để chỉnh chiều dài bone.

Bone đầu tiên không nhất thiết phải nằm sát mép ngoài cùng. Nó chỉ cần bao phủ vùng đầu tiên của mesh mà nó sẽ điều khiển.

Ví dụ:

```text
Mesh:
┌──────────────────────────────────────┐
│                                      │
└──────────────────────────────────────┘

Bone đầu tiên:
    ●────────────●
```

---

## 10. Tạo chuỗi bone bằng Extrude

Để tạo bone tiếp theo:

1. Chọn Tail của bone hiện tại.
2. Nhấn:

```text
E
```

3. Khóa theo trục X:

```text
X
```

4. Kéo bone mới sang bên phải.
5. Nhấn chuột trái để xác nhận.

Tiếp tục lặp lại thao tác đến khoảng giữa thân rắn.

```text
Bone 1       Bone 2       Bone 3
●────────●────────────●────────────●
```

Khi Extrude từ Tail, Blender tự động:

* Tạo bone mới.
* Nối bone mới với bone trước.
* Thiết lập quan hệ cha–con giữa hai bone.

---

## 11. Điều chỉnh độ dài các bone

Các bone không nhất thiết phải có chiều dài chính xác bằng nhau. Tuy nhiên, chuỗi bone tương đối đồng đều sẽ giúp animation dễ kiểm soát hơn.

Để điều chỉnh:

1. Chọn joint giữa hai bone.
2. Nhấn:

```text
G → X
```

3. Di chuyển joint dọc theo trục X.

Có thể sử dụng các đường lưới trong viewport để căn chỉnh.

```text
Không đều:

●────●────────●───●

Tương đối đều:

●─────●─────●─────●
```

---

## 12. Nhân đôi chuỗi bone

Sau khi tạo được nửa đầu của chuỗi:

1. Đảm bảo đang ở Edit Mode.
2. Chọn toàn bộ các bone đã tạo.
3. Nhấn:

```text
Shift + D
```

4. Khóa theo trục X:

```text
X
```

5. Di chuyển bản sao sang nửa còn lại của mesh.

Lúc này Armature chứa hai chuỗi bone riêng biệt:

```text
Chuỗi 1                         Chuỗi 2
●──●──●──●                  ●──●──●──●
```

Hai chuỗi nằm trong cùng một Armature nhưng chưa được kết nối với nhau.

---

## 13. Quan hệ cha–con giữa các bone

Trong một chuỗi bone:

* Bone đứng trước thường là **Parent**.
* Bone tiếp theo là **Child**.
* Khi Parent xoay, Child sẽ chuyển động theo.
* Child vẫn có thể xoay độc lập so với Parent.

Ví dụ:

```text
Bone cha
   │
   └── Bone con
          │
          └── Bone cháu
```

Khi xoay bone cha:

```text
Trước:
●────●────●────●

Sau:
      ●
     /
    ●
   /
  ●────●
```

Tất cả bone con phía sau đều chịu ảnh hưởng.

---

## 14. Kiểm tra trong Pose Mode

Để kiểm tra hệ thống phân cấp:

1. Chuyển sang Pose Mode.
2. Chọn một bone.
3. Bone được chọn sẽ hiển thị màu xanh.
4. Nhấn:

```text
R
```

5. Xoay bone.

Nếu các bone được parenting đúng, những bone con phía sau sẽ chuyển động theo.

Ví dụ giống cấu trúc cánh tay:

```text
Vai → Cánh tay → Cẳng tay → Bàn tay
```

* Xoay vai: toàn bộ phần còn lại chuyển động.
* Xoay khuỷu tay: chỉ cẳng tay và bàn tay chuyển động.
* Xoay bàn tay: chỉ bàn tay chuyển động.

---

## 15. Kết nối hai chuỗi bone

Hai chuỗi bone được Duplicate vẫn đang tách rời nhau. Vì vậy, xoay chuỗi đầu tiên sẽ không tác động đến chuỗi thứ hai.

Để kết nối:

1. Quay lại Edit Mode.
2. Chọn bone muốn trở thành **Child** trước.
3. Giữ `Shift` và chọn bone muốn trở thành **Parent** sau cùng.
4. Bone được chọn cuối cùng sẽ có màu vàng, cho biết đây là Active Bone.
5. Nhấn:

```text
Ctrl + P
```

6. Chọn:

```text
Connected
```

### Thứ tự chọn

```text
Chọn Child trước
       ↓
Chọn Parent sau
       ↓
Ctrl + P
       ↓
Connected
```

Sau khi chọn **Connected**, Blender sẽ di chuyển đầu của bone con đến Tail của bone cha để hai bone nối liền nhau.

```text
Trước:

●────●        ●────●

Sau:

●────●────────●────●
```

---

## 16. Connected và Keep Offset

Khi nhấn `Ctrl + P`, Blender cung cấp hai lựa chọn chính.

### 16.1. Connected

* Bone con được nối trực tiếp với Tail của bone cha.
* Head của bone con và Tail của bone cha nằm cùng một vị trí.
* Phù hợp với các chuỗi xương liên tục như:

  * Cột sống
  * Đuôi
  * Rắn
  * Tay
  * Chân

```text
Parent       Child
●────────────●────────────●
             ↑
       Joint dùng chung
```

### 16.2. Keep Offset

* Bone con vẫn là con của bone cha.
* Bone con không bị di chuyển đến vị trí bone cha.
* Giữa hai bone có thể tồn tại một khoảng cách.
* Blender hiển thị quan hệ này bằng một đường nét đứt.

```text
Parent                 Child
●────────●  . . . . .  ●────────●
             Offset
```

Dù không chạm nhau, khi Parent chuyển động, Child vẫn chịu ảnh hưởng.

### So sánh

| Thuộc tính                                | Connected   | Keep Offset    |
| ----------------------------------------- | ----------- | -------------- |
| Có quan hệ cha–con                        | Có          | Có             |
| Hai bone chạm nhau                        | Có          | Không bắt buộc |
| Bone con bị di chuyển khi parenting       | Có          | Không          |
| Có đường nét đứt thể hiện quan hệ         | Không       | Có             |
| Phù hợp với chuỗi xương liên tục          | Rất phù hợp | Ít phù hợp     |
| Phù hợp với controller hoặc bone tách rời | Ít phù hợp  | Phù hợp        |

---

## 17. Tạo bone có Offset để thử nghiệm

Để quan sát Keep Offset:

1. Vào Edit Mode.
2. Chọn một bone bất kỳ.
3. Nhấn:

```text
Shift + D
```

4. Di chuyển bone sao chép đến một vị trí khác.

Bone mới vẫn có thể duy trì quan hệ với bone cũ. Blender hiển thị một đường nét đứt màu đen giữa chúng.

Khi chuyển sang Pose Mode và xoay bone cha, bone nằm cách xa vẫn chuyển động theo.

Sau khi thử nghiệm:

1. Quay lại Edit Mode.
2. Chọn bone thử nghiệm.
3. Nhấn `X` hoặc `Delete`.
4. Chọn **Delete Bones**.

---

## 18. Cấu trúc hoàn chỉnh của rig con rắn

Sau bài học, hệ thống sẽ có dạng:

```text
Armature
│
└── Bone 1
    └── Bone 2
        └── Bone 3
            └── Bone 4
                └── Bone 5
                    └── Bone 6
                        └── Bone 7
                            └── Bone 8
```

Mỗi bone là con của bone đứng trước, tạo thành một chuỗi liên tục chạy dọc theo thân rắn.

```text
Đầu rắn                                      Đuôi rắn
   ●────●────●────●────●────●────●────●────●
```

Khi một bone ở gần đầu chuỗi xoay, các bone phía sau sẽ chuyển động theo.

---

## 19. Quy trình thực hành hoàn chỉnh

```text
Cube mặc định
      ↓
Scale dài theo trục X
      ↓
Thêm khoảng 10 Loop Cut
      ↓
Thêm Subdivision Surface
      ↓
Thêm Armature
      ↓
Bật In Front
      ↓
Vào Edit Mode
      ↓
Đặt bone đầu tiên
      ↓
Extrude thành chuỗi bone
      ↓
Duplicate chuỗi sang nửa còn lại
      ↓
Ctrl + P → Connected
      ↓
Kiểm tra trong Pose Mode
      ↓
Lưu file
```

---

## 20. Phím tắt và công cụ quan trọng

| Phím tắt/Công cụ        | Chức năng                                  |
| ----------------------- | ------------------------------------------ |
| `Numpad 1`              | Chuyển sang Front View                     |
| `Shift + A`             | Mở menu Add                                |
| `Tab`                   | Chuyển giữa Object Mode và Edit Mode       |
| `Ctrl + Tab`            | Mở menu chuyển sang Pose Mode              |
| `Ctrl + R`              | Thêm Loop Cut cho mesh                     |
| `E`                     | Extrude bone mới                           |
| `Shift + D`             | Duplicate bone                             |
| `Ctrl + P`              | Tạo quan hệ Parent giữa các bone           |
| `G`                     | Di chuyển bone hoặc joint                  |
| `R`                     | Xoay bone                                  |
| `S`                     | Scale                                      |
| `X`                     | Khóa thao tác theo trục X hoặc mở menu xóa |
| `A`                     | Chọn toàn bộ                               |
| `Alt + A`               | Bỏ chọn toàn bộ trong một số keymap        |
| `Delete`                | Xóa bone                                   |
| **In Front**            | Luôn hiển thị bone phía trước mesh         |
| **Subdivision Surface** | Làm mượt và tăng topology cho mesh         |

---

## 21. Lưu ý quan trọng

### 21.1. Mesh phải có đủ topology

Nếu mesh chỉ có ít vertex, bone không thể tạo ra đường cong mượt.

```text
Ít vertex  → biến dạng cứng
Nhiều vertex → biến dạng mượt
```

### 21.2. Phải đúng chế độ làm việc

* Chỉnh hình dạng và cấu trúc bone trong **Edit Mode**.
* Thử chuyển động và animate trong **Pose Mode**.
* Di chuyển toàn bộ hệ thống trong **Object Mode**.

### 21.3. Thứ tự chọn khi Parent

Khi dùng `Ctrl + P`:

1. Chọn bone con trước.
2. Chọn bone cha sau.
3. Bone cha phải là Active Bone, thường được hiển thị màu vàng.

### 21.4. Duplicate không đồng nghĩa với Connected

Các bone được Duplicate có thể nằm trong cùng Armature nhưng vẫn thuộc hai chuỗi hierarchy khác nhau. Cần parenting chúng bằng `Ctrl + P`.

### 21.5. Không cần các bone dài tuyệt đối bằng nhau

Sự chênh lệch nhỏ không gây ảnh hưởng đáng kể. Tuy nhiên, bone tương đối đồng đều sẽ giúp chuyển động của con rắn tự nhiên hơn.

### 21.6. Lưu file sau bài học

Rig sẽ được sử dụng trong bài tiếp theo để animate con rắn. Vì vậy, cần lưu file trước khi kết thúc.

---

## 22. Lỗi thường gặp

### Lỗi 1: Không nhìn thấy bone

**Nguyên nhân:** Bone nằm bên trong mesh.

**Cách khắc phục:**

```text
Armature Data Properties
→ Viewport Display
→ In Front
```

### Lỗi 2: Mesh không uốn cong

**Nguyên nhân:** Mesh có quá ít vertex hoặc chưa có Loop Cut.

**Cách khắc phục:**

* Thêm Loop Cut.
* Thêm Subdivision Surface.
* Đảm bảo có đủ topology dọc theo chiều uốn.

### Lỗi 3: Xoay bone nhưng các bone phía sau không đi theo

**Nguyên nhân:** Các chuỗi bone chưa được parenting.

**Cách khắc phục:**

```text
Edit Mode
→ Chọn Child
→ Chọn Parent
→ Ctrl + P
→ Connected
```

### Lỗi 4: Hai bone có quan hệ nhưng không nối liền nhau

**Nguyên nhân:** Đã chọn **Keep Offset** thay vì **Connected**.

**Cách khắc phục:**

* Xóa quan hệ cũ nếu cần.
* Parent lại và chọn **Connected**.

### Lỗi 5: Thay đổi cấu trúc rig khi chỉ muốn tạo dáng

**Nguyên nhân:** Đang thao tác trong Edit Mode.

**Cách khắc phục:** Chuyển sang Pose Mode trước khi xoay bone để tạo dáng.

---

## 23. Checklist thực hành

### Chuẩn bị mesh

* [ ] Đã kéo dài Cube theo trục X.
* [ ] Đã tạo khoảng 10 Loop Cut.
* [ ] Đã thêm Subdivision Surface.
* [ ] Mesh có đủ topology để uốn cong.

### Tạo Armature

* [ ] Đã thêm một Armature.
* [ ] Đã bật tùy chọn In Front.
* [ ] Đã đặt bone đầu tiên bên trong thân rắn.
* [ ] Đã Extrude thành chuỗi bone đến giữa thân.

### Hoàn thiện hierarchy

* [ ] Đã Duplicate chuỗi bone sang nửa còn lại.
* [ ] Đã kết nối hai chuỗi bằng `Ctrl + P`.
* [ ] Đã chọn tùy chọn Connected.
* [ ] Đã kiểm tra chuyển động trong Pose Mode.
* [ ] Đã hiểu sự khác nhau giữa Connected và Keep Offset.
* [ ] Đã xóa bone thử nghiệm không cần thiết.
* [ ] Đã lưu file để sử dụng trong bài sau.

---

## 24. Tóm tắt bài học

Bone là thành phần cơ bản của hệ thống rigging, còn Armature là object chứa toàn bộ các bone. Trước khi rig một mesh, cần đảm bảo mesh có đủ topology để biến dạng mượt. Trong bài học này, Cube được kéo dài để tạo thân rắn, sau đó được bổ sung Loop Cut và Subdivision Surface.

Bộ xương được xây dựng trong Edit Mode bằng cách Extrude các bone thành một chuỗi. Các bone có quan hệ cha–con, vì vậy khi bone cha xoay trong Pose Mode, các bone con phía sau sẽ chuyển động theo.

Hai kiểu parenting cần ghi nhớ là:

* **Connected**: bone con nối trực tiếp với bone cha.
* **Keep Offset**: bone con có quan hệ với bone cha nhưng vẫn giữ khoảng cách.

Sau khi hoàn thiện chuỗi bone và kiểm tra hierarchy, mô hình rắn đã sẵn sàng cho bước gắn Armature vào mesh và tạo animation trong bài tiếp theo.

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
