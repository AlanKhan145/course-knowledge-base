# 010 — Low Poly Chair

| Thuộc tính         | Nội dung                                                                                              |
| ------------------ | ----------------------------------------------------------------------------------------------------- |
| **Phần**           | 02 — Modeling in Blender                                                                              |
| **Thời lượng**     | 17:30                                                                                                 |
| **Chủ đề**         | Dựng ghế low-poly từ primitive và ảnh tham chiếu                                                      |
| **Kỹ thuật chính** | Reference, Blockout, Loop Cut, Bevel, Extrude, Inset, Bridge Edge Loops, Mirror, Proportional Editing |

---

## 1. Mục tiêu bài học

Sau bài này, bạn có thể:

* [ ] Phân tích một ảnh tham chiếu thành các khối hình học cơ bản.
* [ ] Blockout một mô hình ghế bằng `Cube`.
* [ ] Sử dụng `Loop Cut`, `Bevel`, `Extrude`, `Inset` và `Bridge Edge Loops`.
* [ ] Hiểu lý do phải `Apply Scale` trước một số thao tác modeling.
* [ ] Sử dụng `Mirror Modifier` để tạo chi tiết đối xứng.
* [ ] Điều chỉnh silhouette bằng `Proportional Editing`.
* [ ] Giữ object ở đúng tâm và kiểm soát `Origin`.
* [ ] Hoàn thiện một mô hình low-poly dựa trên ảnh reference.

---

# 2. Tư duy modeling quan trọng

Trước khi bắt đầu dựng model, **không nên lao ngay vào chỉnh vertex**.

Hãy phân tích vật thể thành những hình học đơn giản trước.

Ví dụ với chiếc ghế:

```text
                 ┌───────────────┐
                 │    Tựa lưng   │
                 │  │   │   │    │
                 │  │   │   │    │
                 └──┬───────┬────┘
                    │       │
            ┌───────┴───────┴───────┐
            │        Mặt ghế         │
            └─────┬────────────┬─────┘
                  │            │
                  │            │
                  │            │
              Chân trái     Chân phải
                  │            │
                  ├────┐  ┌────┤
                       │  │
                       └──┘
                    Thanh giằng
```

Có thể xem chiếc ghế như tập hợp của:

* các khối hộp;
* các thanh chữ nhật;
* một số vùng được extrude;
* các chi tiết lặp đối xứng;
* một đường cong nhẹ trên tựa lưng.

> **Nguyên tắc:**
> Bắt đầu từ **khối lớn → tỷ lệ → silhouette → cấu trúc → chi tiết nhỏ**.

---

# 3. Chuẩn bị ảnh tham chiếu

## 3.1. Đưa reference vào Blender

Bài học sử dụng một hình ảnh chiếc ghế làm reference.

Ảnh được đặt trực tiếp trong viewport để vừa quan sát vừa modeling.

### Lưu ý

Nên thực hiện việc căn chỉnh ảnh khi viewport đang ở **Perspective View**.

Sau khi đưa ảnh vào:

```text
Alt + R
```

Reset rotation.

Sau đó có thể xoay ảnh:

```text
R → X → 90
```

Rồi di chuyển ảnh sang bên cạnh model bằng:

```text
G
```

Scale ảnh:

```text
S
```

Mục tiêu là để reference đủ lớn và nằm ở vị trí dễ nhìn nhưng không che model.

---

# 4. Phân tích hình dạng trước khi dựng

Quan sát chiếc ghế và xác định:

1. Mặt ghế là một khối hộp dẹt.
2. Bốn chân đi xuống từ các góc.
3. Phía dưới có hệ thống thanh giằng.
4. Phía sau có hai trụ kéo dài lên tạo tựa lưng.
5. Giữa hai trụ có các thanh ngang/dọc.
6. Phần đỉnh tựa có độ cong nhẹ.

Workflow tổng quát:

```text
Reference
    ↓
Phân tích hình học
    ↓
Blockout khối lớn
    ↓
Chỉnh tỷ lệ
    ↓
Tạo chân
    ↓
Tạo thanh giằng
    ↓
Tạo tựa lưng
    ↓
Tạo chi tiết
    ↓
Chỉnh silhouette
    ↓
Cleanup
```

---

# 5. Blockout mặt ghế

Bắt đầu bằng một `Cube`.

```text
Shift + A
→ Mesh
→ Cube
```

Scale cube để tạo mặt ghế.

```text
S
```

Hoặc khóa theo từng trục:

```text
S → X
S → Y
S → Z
```

Ở giai đoạn đầu **không cần chính xác tuyệt đối**.

Mục tiêu chỉ là tạo tỷ lệ gần giống reference.

> Đây cũng là cách luyện khả năng ước lượng tỷ lệ bằng mắt.

---

# 6. Cải thiện khả năng quan sát hình học

Trong `Solid View`, có thể bật:

* Shadow;
* Cavity;
* highlight cạnh.

Cavity giúp các cạnh của model nổi rõ hơn và dễ quan sát topology.

Đây không phải chi tiết của model mà chỉ là tùy chọn hiển thị viewport.

---

# 7. Tạo topology cho chân ghế

Chuyển sang Edit Mode:

```text
Tab
```

Thêm Loop Cut:

```text
Ctrl + R
```

Mục đích là chia mặt ghế thành các vùng để xác định vị trí của bốn chân.

---

# 8. Vì sao không nên chia bằng mắt?

Nếu đặt nhiều loop cut thủ công:

```text
|--|----|---|-----|
```

khoảng cách giữa chúng dễ không đều.

Điều này khiến:

* chân trái/phải lệch nhau;
* model mất symmetry;
* kích thước các chi tiết không nhất quán.

Thay vào đó có thể sử dụng `Bevel` để chia một edge thành hai edge cách đều nhau.

---

# 9. Bevel

Chọn một edge:

```text
Ctrl + B
```

Kéo chuột để xác định độ rộng.

Dùng con lăn chuột để thay đổi số segment.

```text
Mouse Wheel ↑
→ tăng segment
```

Ví dụ:

```text
Edge ban đầu

──────────────


Bevel 1 segment

──────┐  ┌──────
      └──┘


Bevel nhiều segment

─────╮
     ╰─────
```

Trong low-poly modeling, thường không cần quá nhiều segment.

---

## 9.1. Last Operation

Sau khi thực hiện thao tác như Bevel, Blender hiển thị bảng thông số của thao tác vừa thực hiện.

Ở đây có thể điều chỉnh:

* Width;
* Segments;
* Profile;
* Clamp;
* các tùy chọn liên quan.

Nếu chuyển sang thao tác khác, bảng này sẽ thay đổi.

---

# 10. Tạo bốn chân bằng Extrude

Sau khi topology đã tạo ra bốn vùng ở các góc:

Chọn bốn polygon tương ứng.

Có thể giữ:

```text
Shift
```

để chọn nhiều polygon.

Sau đó:

```text
E
```

Extrude xuống dưới.

Nếu cần chỉnh chiều dài chân mà không muốn extrude thêm:

```text
G → Z
```

Kéo các face đã extrude xuống.

---

# 11. Điều chỉnh độ dày chân

Nếu chân nhìn quá mỏng:

Chuyển sang Side View hoặc Front View.

Chọn các vertex/edge liên quan rồi scale.

Ví dụ:

```text
S → X
```

hoặc:

```text
S → Y
```

Mục tiêu:

```text
Sai                        Tốt

│ │                        ┌──┐
│ │                        │  │
│ │                        │  │
│ │                        │  │
                            └──┘

quá mỏng                  đủ độ dày
```

Các chân nên có:

* cùng độ dày;
* cùng hướng;
* cùng tỷ lệ.

---

# 12. Tạo phần nhô quanh mặt ghế

Quan sát reference cho thấy viền ghế hơi nhô ra.

Thêm một vòng edge:

```text
Ctrl + R
```

Chọn toàn bộ face loop.

Một cách phổ biến:

```text
Alt + Click
```

Sau đó:

```text
Alt + E
```

Chọn:

```text
Extrude Faces Along Normals
```

Thao tác này đẩy các mặt theo hướng normal của chính chúng.

---

## 12.1. Normal là gì?

Normal là vector chỉ hướng mặt trước của polygon.

```text
        ↑ Normal
        │
    ┌──────────┐
    │ Polygon  │
    └──────────┘
```

Extrude Along Normals rất hữu ích khi muốn:

* tạo viền nổi;
* làm dày bề mặt;
* tạo panel;
* tạo frame quanh object.

Nếu extrusion không đều, kiểm tra tùy chọn:

```text
Offset Even
```

để khoảng cách extrusion đồng nhất hơn.

---

# 13. Một lưu ý về cấu trúc model

Trong bài học, một số phần nhô được tạo trực tiếp từ cùng một mesh để đơn giản hóa.

Tuy nhiên khi modeling nghiêm túc hơn nên suy nghĩ:

> Vật thể ngoài đời là một bộ phận riêng → có thể dựng bằng object riêng.

Ví dụ:

```text
Ghế thật

Mặt ghế
├── chân 1
├── chân 2
├── chân 3
├── chân 4
├── thanh giằng
└── tựa lưng
```

Không nhất thiết mọi thứ phải là một mesh ngay từ đầu.

Có thể dựng riêng rồi cuối cùng mới:

```text
Ctrl + J
```

Join thành một object.

---

# 14. Tạo các thanh giằng phía dưới

Thêm một cube mới.

Scale thành một thanh dài.

```text
Shift + A → Cube
S
```

Đặt thanh nối giữa hai chân ghế.

Trong Edit Mode có thể kéo một face ra:

```text
G
```

hoặc:

```text
E
```

để kéo thanh đến đúng chiều dài.

Trong trường hợp low-poly đơn giản, các mesh giao nhau nhẹ thường chưa phải vấn đề nghiêm trọng.

---

# 15. Duplicate và vấn đề symmetry

Có thể duplicate thanh sang phía đối diện:

```text
Shift + D
```

rồi:

```text
X
```

để khóa theo trục X.

Nhưng việc đặt thủ công có thể gây lệch.

Giải pháp tốt hơn là sử dụng:

# Mirror Modifier

---

# 16. Chuẩn bị Origin cho Mirror

Mirror Modifier phản chiếu object dựa trên:

* Origin;
* trục X/Y/Z.

Vì vậy Origin phải đúng vị trí.

Đầu tiên đưa 3D Cursor về World Origin:

```text
Shift + S
→ Cursor to World Origin
```

Sau đó:

```text
Right Click
→ Set Origin
→ Origin to 3D Cursor
```

Bây giờ Origin của object nằm tại tâm scene.

---

## 16.1. Quy tắc quan trọng

Khi modeling nên cố gắng:

```text
Location hợp lý
Rotation = 0°
Model nằm quanh World Origin
```

Nếu model bị xoay tùy tiện:

```text
Rotation X = 17°
Rotation Y = -31°
Rotation Z = 8°
```

các modifier và thao tác theo axis sau này sẽ khó kiểm soát hơn.

---

# 17. Mirror Modifier

Mở tab Modifier:

```text
🔧 Modifier Properties
```

Chọn:

```text
Add Modifier
→ Mirror
```

Thông thường dùng:

```text
Axis: X
```

Ví dụ:

```text
        World Origin
             │
             ▼

      ┌───┐  │  ┌───┐
      │ A │  │  │ A'│
      └───┘  │  └───┘

       gốc       mirror
```

Khi chỉnh phần A, phần A' tự động cập nhật.

---

# 18. Apply Mirror

Khi vẫn còn Modifier:

```text
Object A
   ↓
Mirror
   ↓
Virtual copy
```

Hai bên chưa thật sự độc lập.

Khi muốn biến kết quả modifier thành geometry thật:

```text
Modifier ▼
→ Apply
```

Sau đó có thể chỉnh từng bên riêng.

---

# 19. Tạo thanh ngang giữa hai bên

Thêm loop cut giữa thanh:

```text
Ctrl + R
```

Chọn edge loop:

```text
Alt + Click
```

Hoặc bổ sung selection:

```text
Shift + Alt + Click
```

Sau đó:

```text
Ctrl + B
```

tạo hai cạnh song song để xác định độ rộng thanh nối.

---

# 20. Bridge Edge Loops

Chọn hai edge loop hoặc hai border đối diện nhau.

Sau đó:

```text
Ctrl + E
→ Bridge Edge Loops
```

Blender tạo geometry nối hai vùng.

Ví dụ:

```text
Trước:

┌───┐              ┌───┐
│   │              │   │
└───┘              └───┘


Bridge Edge Loops
        ↓

┌──────────────────────┐
│                      │
└──────────────────────┘
```

Đây là một kỹ thuật cực kỳ hữu ích khi dựng:

* khung;
* tay cầm;
* thanh nối;
* lỗ xuyên mesh;
* các cấu trúc dạng cage.

---

# 21. Tạo phần tựa lưng

Phần trên của ghế có thể tiếp tục từ hai chân sau.

Chọn hai polygon phía sau.

Extrude theo trục Y hoặc Z tùy orientation của model:

```text
E → Y
```

hoặc:

```text
E → Z
```

Kéo hai thanh lên tạo khung tựa lưng.

---

# 22. Tạo cấu trúc bên trong tựa lưng

Thêm các loop cut:

```text
Ctrl + R
```

Sau đó dùng:

```text
Ctrl + B
```

để chia đều khoảng cách.

Mục đích là tạo vị trí cho:

* thanh ngang;
* thanh dọc;
* khoảng trống giữa các thanh.

---

# 23. Inset

Chọn face:

```text
I
```

Inset tạo một face nhỏ bên trong face hiện tại.

```text
Face gốc

┌──────────────┐
│              │
│              │
└──────────────┘


Inset

┌──────────────┐
│  ┌────────┐  │
│  │        │  │
│  └────────┘  │
└──────────────┘
```

Rất hữu ích cho:

* frame;
* cửa;
* panel;
* cửa sổ;
* mặt ghế;
* chi tiết máy móc.

---

# 24. Lỗi Inset không đều

Một vấn đề rất phổ biến:

```text
Scale X = 1
Scale Y = 1
Scale Z = 0.2
```

Object đã được scale trong Object Mode nhưng chưa Apply Scale.

Blender vẫn coi object dựa trên transform cũ.

Kết quả:

```text
Inset

┌─────────────┐
│ ┌─────────┐ │
│ │         │ |
│ └───────┘   │
└─────────────┘

không đều
```

---

# 25. Apply Scale

Trước các thao tác quan trọng:

```text
Ctrl + A
→ Scale
```

Sau đó:

```text
Scale X = 1
Scale Y = 1
Scale Z = 1
```

Nhưng hình dạng hiện tại của object **không thay đổi**.

Blender chỉ ghi nhận kích thước hiện tại là kích thước cơ sở mới.

---

## Vì sao Apply Scale quan trọng?

Các công cụ có thể phụ thuộc vào scale:

* Bevel;
* Inset;
* Array;
* Solidify;
* Mirror;
* một số simulation;
* modifier khác.

Quy tắc thực hành:

> Sau khi hoàn tất blockout kích thước lớn và trước khi modeling chi tiết, hãy kiểm tra xem có cần `Ctrl + A → Scale` hay không.

---

# 26. Tạo lỗ và khung bằng Inset + Bridge

Chọn hai face đối diện.

Thực hiện:

```text
I
```

để inset.

Sau đó chọn hai vùng tương ứng và:

```text
Ctrl + E
→ Bridge Edge Loops
```

Kết quả là tạo ra một cấu trúc nối xuyên giữa hai mặt.

Workflow:

```text
Face A        Face B
   ↓             ↓
 Inset         Inset
   ↓             ↓
   └──── Bridge ────┘
             ↓
          Khung 3D
```

---

# 27. Frame Selected

Khi xoay viewport mà model quay quanh một điểm quá xa, chọn model và nhấn:

```text
Numpad .
```

Đây là:

```text
Frame Selected
```

Viewport sẽ:

* focus vào object;
* đặt tâm orbit quanh object đang chọn.

Rất tiện khi modeling chi tiết.

---

# 28. Tạo các thanh trên tựa ghế

Để quan sát xuyên mesh, chuyển sang Wireframe:

```text
Z
→ Wireframe
```

hoặc dùng chế độ hiển thị Wireframe trực tiếp.

Tạo các edge loop cần thiết:

```text
Ctrl + R
```

Ví dụ:

```text
|  |  |  |  |
```

Sau đó chọn các edge loop:

```text
Shift + Alt + Click
```

và dùng:

```text
Ctrl + B
```

để tạo độ rộng cho các thanh.

---

# 29. Tạo thanh bằng Inset + Bridge

Sau khi đã có những polygon tương ứng ở trên và dưới:

1. Chọn polygon.
2. Nhấn:

```text
I
```

3. Tạo inset nhỏ.
4. Chọn vùng trên và dưới.
5. Nhấn:

```text
Ctrl + E
→ Bridge Edge Loops
```

Kết quả là các thanh tựa được hình thành.

---

# 30. Tạo đường cong trên tựa ghế

Reference có một đường cong nhẹ ở phần trên.

Thay vì dựng thêm topology phức tạp, có thể điều chỉnh vertex.

Chuyển sang Vertex Select:

```text
1
```

> `1` ở hàng số phía trên bàn phím trong Edit Mode là Vertex Select.
> Không nhầm với `Numpad 1` là Front View.

Chọn vertex rồi:

```text
G → Z
```

kéo lên.

---

# 31. Proportional Editing

Bật:

```text
O
```

Sau đó:

```text
G → Z
```

Khi di chuyển một vertex, những vertex xung quanh cũng bị ảnh hưởng.

```text
        ↑
        ●
      ●   ●
    ●       ●
──●───────────●──
```

Dùng con lăn chuột để thay đổi bán kính ảnh hưởng.

```text
Mouse Wheel
```

Bán kính nhỏ:

```text
        ●
      ● ↑ ●
────────────
```

Bán kính lớn:

```text
     ●   ●   ●
   ●    ↑    ●
───────────────
```

---

# 32. Dùng Proportional Editing để tạo cung cong

Workflow:

1. Chọn vertex giữa.
2. Bật:

```text
O
```

3. Nhấn:

```text
G → Z
```

4. Kéo vertex lên.
5. Dùng mouse wheel để điều chỉnh falloff.

Mục tiêu:

```text
Trước

────────────────


Sau

────╮      ╭────
    ╰──────╯
```

hoặc ngược lại tùy hình dạng tựa ghế.

Quan trọng là vùng ảnh hưởng không lan xuống các phần không mong muốn.

---

# 33. Các phím tắt chính trong bài

| Phím                  | Chức năng                    |
| --------------------- | ---------------------------- |
| `Tab`                 | Object Mode ↔ Edit Mode      |
| `Shift + A`           | Add Object                   |
| `G`                   | Move                         |
| `R`                   | Rotate                       |
| `S`                   | Scale                        |
| `E`                   | Extrude                      |
| `I`                   | Inset                        |
| `Ctrl + R`            | Loop Cut                     |
| `Ctrl + B`            | Bevel                        |
| `Alt + E`             | Extrude menu                 |
| `Ctrl + E`            | Edge menu                    |
| `Alt + Click`         | Chọn loop                    |
| `Shift + Alt + Click` | Thêm loop vào selection      |
| `Shift + D`           | Duplicate                    |
| `Ctrl + A`            | Apply Transform              |
| `Ctrl + J`            | Join Objects                 |
| `Shift + S`           | Snap menu                    |
| `O`                   | Proportional Editing         |
| `Numpad .`            | Frame Selected               |
| `Alt + R`             | Reset Rotation               |
| `X`                   | Delete / khóa X tùy thao tác |
| `Y`                   | Khóa trục Y                  |
| `Z`                   | Khóa trục Z / Pie Shading    |

---

# 34. Workflow hoàn chỉnh của bài

```text
Ảnh Reference
     │
     ▼
Phân tích thành primitive
     │
     ▼
Cube → mặt ghế
     │
     ▼
Loop Cut + Bevel
     │
     ▼
Extrude → chân ghế
     │
     ▼
Extrude Along Normals
     │
     ▼
Cube → thanh giằng
     │
     ▼
Mirror Modifier
     │
     ▼
Apply Mirror
     │
     ▼
Bridge Edge Loops
     │
     ▼
Extrude → tựa lưng
     │
     ▼
Apply Scale
     │
     ▼
Inset + Bridge
     │
     ▼
Tạo các thanh tựa
     │
     ▼
Proportional Editing
     │
     ▼
Chỉnh silhouette
     │
     ▼
Low Poly Chair hoàn chỉnh
```

---

# 35. Những lỗi thường gặp

## Lỗi 1 — Model không đối xứng

### Nguyên nhân

Đặt chi tiết bằng mắt:

```text
Shift + D → kéo thủ công
```

### Giải pháp

Sử dụng:

```text
Mirror Modifier
```

---

## Lỗi 2 — Mirror xuất hiện sai vị trí

### Nguyên nhân

Origin của object không nằm đúng tâm.

### Giải pháp

```text
Shift + S
→ Cursor to World Origin

Right Click
→ Set Origin
→ Origin to 3D Cursor
```

---

## Lỗi 3 — Inset không đều

### Nguyên nhân

Object có Scale khác `1`.

### Giải pháp

```text
Ctrl + A
→ Scale
```

---

## Lỗi 4 — Chân ghế quá mỏng

Chọn vertex/edge rồi scale theo trục:

```text
S → X
```

hoặc:

```text
S → Y
```

---

## Lỗi 5 — Viewport xoay quanh vị trí lạ

Dùng:

```text
Numpad .
```

để `Frame Selected`.

---

## Lỗi 6 — Proportional Editing làm biến dạng cả ghế

Giảm bán kính ảnh hưởng bằng mouse wheel.

Hoặc tắt:

```text
O
```

khi không sử dụng.

---

# 36. Low-poly không có nghĩa là làm sơ sài

Low-poly nên có:

* topology vừa đủ;
* silhouette rõ;
* tỷ lệ tốt;
* ít polygon thừa;
* hình dáng dễ nhận biết;
* các cạnh quan trọng được giữ rõ.

Không nên:

```text
Low Poly = càng ít polygon càng tốt ❌
```

Mà nên hiểu:

```text
Low Poly =
ít geometry
+
đúng silhouette
+
đúng cấu trúc
+
đủ thông tin thị giác
```

---

# 37. Bài học quan trọng về workflow

Không tồn tại duy nhất một cách dựng chiếc ghế này.

Ví dụ bốn chân có thể làm theo hai hướng:

### Cách A — Một mesh

```text
Seat
 ↓
Extrude
 ↓
4 Legs
```

### Cách B — Object riêng

```text
Seat

Leg
 ↓
Duplicate
 ↓
Mirror
```

Sau đó:

```text
Ctrl + J
```

để join nếu cần.

Cả hai đều có thể đúng tùy:

* mục đích model;
* workflow;
* tốc độ;
* nhu cầu chỉnh sửa sau này.

> Mục tiêu của bài không phải sao chép từng thao tác của giảng viên, mà là hiểu **tại sao** một công cụ được sử dụng.

---

# 38. Bài tập thực hành

Reference của bài có thêm các mẫu ghế khác.

Hãy dựng thêm **2 chiếc ghế** bằng những kỹ thuật đã học.

Không cần modeling giống hoàn toàn workflow trong bài.

Có thể thử:

### Phiên bản 1 — Single Mesh

* mặt ghế và chân cùng mesh;
* dùng Extrude;
* dùng Bridge.

### Phiên bản 2 — Modular

* mặt ghế là một object;
* mỗi chân là object riêng;
* dùng Mirror;
* các thanh giằng là object riêng.

Sau đó so sánh:

| Tiêu chí        | Single Mesh | Modular |
| --------------- | ----------- | ------- |
| Modeling nhanh  |             |         |
| Dễ chỉnh tỷ lệ  |             |         |
| Dễ tạo symmetry |             |         |
| Topology sạch   |             |         |
| Dễ sửa về sau   |             |         |

---

# 39. Mini Challenge

Không nhìn lại video, thử dựng một chiếc ghế bằng workflow:

```text
Cube
→ Scale
→ Apply Scale
→ Loop Cut
→ Extrude
→ Mirror
→ Inset
→ Bridge
→ Proportional Editing
```

Nếu hoàn thành được mà không cần xem lại từng bước, nghĩa là bạn đã bắt đầu chuyển từ:

```text
"nhớ thao tác"
```

sang:

```text
"hiểu modeling"
```

---

# 40. Checklist hoàn thành bài

## Reference

* [ ] Import và căn chỉnh được ảnh reference.
* [ ] Biết reset rotation bằng `Alt + R`.
* [ ] Reference không che khuất model.

## Blockout

* [ ] Mặt ghế có tỷ lệ hợp lý.
* [ ] Silhouette đọc rõ ở thumbnail.
* [ ] Các chân có độ dài và độ dày nhất quán.

## Modeling

* [ ] Sử dụng được `Ctrl + R` — Loop Cut.
* [ ] Sử dụng được `Ctrl + B` — Bevel.
* [ ] Sử dụng được `E` — Extrude.
* [ ] Sử dụng được `I` — Inset.
* [ ] Sử dụng được `Bridge Edge Loops`.

## Transform

* [ ] Hiểu lý do phải Apply Scale.
* [ ] Scale đã được kiểm tra trước khi Inset/Bevel.
* [ ] Rotation của model được giữ hợp lý.

## Symmetry

* [ ] Biết đưa 3D Cursor về World Origin.
* [ ] Biết đặt Origin theo 3D Cursor.
* [ ] Sử dụng được Mirror Modifier.
* [ ] Hiểu sự khác biệt trước và sau khi Apply Modifier.

## Shape

* [ ] Tạo được phần tựa lưng.
* [ ] Tạo được các thanh giằng.
* [ ] Tạo được đường cong bằng Proportional Editing.
* [ ] Proportional Editing không làm biến dạng phần dưới của ghế.

## Cleanup

* [ ] Không có chi tiết thừa rõ ràng.
* [ ] Các chân có tỷ lệ và hướng nhất quán.
* [ ] Bevel nếu sử dụng đủ nhỏ để giữ phong cách low-poly.
* [ ] Kiểm tra normals.
* [ ] Đặt tên object rõ ràng.
* [ ] Gom model vào collection phù hợp.

---

# 41. Ghi nhớ nhanh

> **Reference trước — modeling sau.**

> **Phân tích vật thể thành primitive trước khi thêm topology.**

> **Đừng căn symmetry hoàn toàn bằng mắt nếu Mirror có thể giải quyết.**

> **Inset hoặc Bevel bị lệch → kiểm tra Scale trước.**

> **Origin quyết định rất nhiều hành vi của Modifier.**

> **Low-poly ưu tiên silhouette và tỷ lệ hơn số lượng chi tiết.**

> **Không cần bắt chước workflow 100%; hãy thử nhiều cách và tìm quy trình phù hợp với mình.**

---

## Kết quả cuối bài

Sau bài học này, bạn đã dựng được một **mô hình 3D hoàn chỉnh đầu tiên từ ảnh reference**, đồng thời bắt đầu sử dụng một nhóm công cụ modeling nền tảng sẽ lặp lại liên tục trong Blender:

```text
Reference Analysis
+ Blockout
+ Loop Cut
+ Bevel
+ Extrude
+ Mirror
+ Inset
+ Bridge
+ Proportional Editing
        ↓
   LOW-POLY MODEL
```

Đây là nền tảng để tiếp tục sang các bài modeling phức tạp hơn trong Module 02.
