# 017 — Modeling with Curves

| Thuộc tính              | Nội dung                                     |
| ----------------------- | -------------------------------------------- |
| **Phần**                | 02 — Modeling in Blender                     |
| **Thời lượng**          | 12:01                                        |
| **Chủ đề**              | Curve Bevel, Profile và Curve-based Modeling |
| **Bài thực hành chính** | Dựng một **giỏ đan** bằng Curve              |

---

## 1. Mục tiêu bài học

Sau bài này, bạn có thể:

* [ ] Hiểu khi nào nên dùng **Curve thay vì Mesh**.
* [ ] Tạo hình ống/dây bằng **Bevel Depth**.
* [ ] Điều chỉnh độ mịn bằng **Bevel Resolution**.
* [ ] Đóng hai đầu Curve bằng **Fill Caps**.
* [ ] Sử dụng một object làm **Bevel Profile**.
* [ ] Tạo họa tiết đan bằng cách xen kẽ các điểm.
* [ ] Kết hợp Curve với `Simple Deform → Twist/Bend`.
* [ ] Chuyển Curve sang Mesh khi thật sự cần chỉnh topology.
* [ ] Dùng Curve để tạo dây, cáp, viền, tay cầm, dây thừng và các chi tiết mềm.

---

# 2. Curve-based Modeling là gì?

Trong Blender, **Curve** phù hợp với những vật thể có hình dạng kéo dài theo một đường đi.

Ví dụ:

* dây điện;
* dây thừng;
* ống;
* viền trang trí;
* tay cầm;
* dây leo;
* tóc;
* đường ống;
* họa tiết đan;
* dây cáp.

Thay vì dựng rất nhiều polygon thủ công, ta chỉ cần:

```text
Đường Curve
    ↓
Thêm Bevel
    ↓
Curve có độ dày
    ↓
Điều chỉnh Path / Profile
    ↓
Chuyển Mesh khi cần
```

Ưu điểm lớn nhất:

> **Hình dạng vẫn procedural và dễ chỉnh sửa.**

---

# 3. Hai thuộc tính Curve quan trọng nhất

Trong bài này, hai nhóm thiết lập được sử dụng nhiều nhất là:

## 3.1. Bevel Depth

`Curve Properties → Geometry → Bevel → Depth`

Dùng để tạo **độ dày** cho Curve.

```text
Curve ban đầu

──────────────

        ↓ Depth

══════════════
```

Depth càng lớn → Curve càng dày.

---

## 3.2. Bevel Resolution

Quyết định số segment dùng để làm tròn phần tiết diện.

Ví dụ:

```text
Resolution thấp

┌──┐
│  │
└──┘

Resolution cao

  ╭──╮
 ╱    ╲
 ╲    ╱
  ╰──╯
```

Resolution cao tạo hình tròn mượt hơn nhưng tăng geometry.

Trong bài:

> Khoảng **4 segments** là đủ cho phần đan của chiếc giỏ.

---

## 3.3. Fill Caps

Bật:

`Curve Properties → Geometry → Fill Caps`

để đóng hai đầu Curve.

Không bật:

```text
Ống hở
╭──────╮
│      │ →
╰──────╯
```

Bật Fill Caps:

```text
Ống kín
●════════●
```

---

# 4. Bevel Object / Profile

Ngoài tiết diện tròn mặc định, Blender cho phép sử dụng một object khác làm **profile**.

Ý tưởng:

```text
Profile
  +
Curve Path
  ↓
Hình dạng mới
```

Ví dụ:

```text
Profile: △

Path: ─────────

Kết quả:

△△△△△△△△△
```

Thiết lập trong:

`Curve Properties → Geometry → Bevel → Object`

Đây là kỹ thuật rất mạnh cho:

* dây thừng;
* dây xoắn;
* khung trang trí;
* molding;
* ống đặc biệt;
* hoa văn kiến trúc.

---

# 5. Bài thực hành — Dựng giỏ đan bằng Curve

## 5.1. Tạo Cylinder làm cơ sở

Tạo:

`Shift + A → Mesh → Cylinder`

Giảm số cạnh xuống khoảng:

```text
Vertices: 18
```

18 cạnh đủ để:

* silhouette tương đối tròn;
* không quá nhiều geometry;
* dễ tạo từng sợi đan.

---

# 6. Tách các Edge từ Cylinder

Vào:

`Tab → Edit Mode`

Chọn một vòng cạnh cần sử dụng.

Sau đó:

`P → Selection`

để tách thành object riêng.

Tiếp tục chọn các đường dọc bằng:

`Ctrl + Alt + Click`

rồi tiếp tục:

`P → Selection`

Kết quả ta có:

```text
Cylinder gốc
   │
   ├── Vòng ngang
   │
   └── Các đường dọc
```

Cylinder gốc vẫn được giữ để làm thân bên trong chiếc giỏ.

---

# 7. Chuẩn bị Cylinder bên trong

Scale Cylinder nhỏ lại.

Sau đó:

`Ctrl + A → Scale`

để Apply Scale.

Điều này rất quan trọng trước khi dùng modifier hoặc các phép biến dạng.

Sau đó có thể tạm ẩn Cylinder:

`H`

---

# 8. Chuyển Edge thành Curve

Chọn object chứa các đường vừa tách.

Chuột phải:

`Convert To → Curve`

Sau khi chuyển, Curve có thể được điều khiển bằng:

* Depth;
* Resolution;
* Fill Caps;
* Profile;
* Handle;
* Tilt.

---

# 9. Tạo họa tiết đan

Đây là phần quan trọng nhất.

Chuyển sang:

`Top View`

và bật:

`Wireframe`

Trong Edit Mode, di chuyển các điểm xen kẽ:

```text
Điểm 1 → ra ngoài
Điểm 2 → vào trong
Điểm 3 → ra ngoài
Điểm 4 → vào trong
...
```

Nhìn từ trên xuống:

```text
        ●
     ╱
●───     ───●
     ╲
        ●
```

Mục tiêu là mô phỏng nguyên lý:

```text
Trên
↓
Dưới
↓
Trên
↓
Dưới
```

giống cách đan vật liệu ngoài đời thật.

---

# 10. Làm mềm các góc

Chọn tất cả các điểm:

`A`

Sau đó dùng:

`Ctrl + Shift + B`

Đây là **Bevel Vertex**.

> `Ctrl + B` thường dùng cho Edge của Mesh.
> Với các điểm cần bevel, dùng `Ctrl + Shift + B`.

Thêm khoảng:

```text
Segments ≈ 4
```

để các đoạn chuyển hướng mượt hơn.

---

# 11. Thêm độ dày cho sợi đan

Sau khi chuyển thành Curve:

`Curve Properties → Geometry → Bevel → Depth`

Điều chỉnh đến khi sợi đan có độ dày hợp lý.

Không nên quá lớn vì các sợi sẽ xuyên vào nhau.

---

# 12. Tạo các đường chia ngang

Một số phần cần được chuyển trở lại Mesh để thao tác topology.

Chuột phải:

`Convert To → Mesh`

Trong Wireframe:

1. chọn các đường dọc;
2. `Right Click → Subdivide`;
3. tạo thêm các đường chia;
4. dùng bevel nếu cần.

Mục đích:

```text
Trước

│
│
│
│

Sau Subdivide

│
├──
│
├──
│
├──
│
```

---

# 13. Nhân bản họa tiết đan

Tạo một bản sao:

`Shift + D`

Di chuyển theo Z:

`G → Z`

Sau đó xoay quanh Z:

`R → Z`

Giữ `Ctrl` để Snap.

Hai lớp sẽ được đặt lệch nhau:

```text
Layer 1

/\/\/\/\/\

Layer 2

\/\/\/\/\/
```

Khi nhìn cùng nhau:

```text
XXXXXXXXXX
XXXXXXXXXX
```

tạo cảm giác các sợi đang đan qua nhau.

---

# 14. Lặp họa tiết lên toàn bộ thân giỏ

Chọn hai layer vừa tạo:

`Shift + D`

Di chuyển lên Z.

Sau đó dùng:

`Shift + R`

để lặp lại thao tác trước.

Ví dụ:

```text
Shift + D
    ↓
G Z
    ↓
Shift + R
Shift + R
Shift + R
...
```

Đây là cách rất nhanh để dựng nhiều tầng sợi đan.

---

# 15. Tạo phần viền giỏ

Để che phần mép trên của geometry, tạo một Curve Circle:

`Shift + A → Curve → Circle`

Scale về kích thước phù hợp.

Curve Circle này sẽ đóng vai trò như **vòng viền hoàn thiện**.

---

# 16. Dùng 3D Cursor làm Pivot

Đặt 3D Cursor tại tâm:

1. chọn vòng;
2. `Shift + S`;
3. chọn:

`Cursor to Selected`

Sau đó đổi Pivot Point thành:

`3D Cursor`

Bây giờ các object được xoay quanh tâm chiếc giỏ.

---

# 17. Nhân các chi tiết quanh tâm

Tạo bản sao:

`Shift + D`

sau đó:

`R → Y`

hoặc trục tương ứng.

Giữ `Ctrl` để Snap theo góc.

Ví dụ:

```text
0°
60°
120°
180°
240°
300°
```

Sau khi tạo thao tác đầu tiên, dùng:

`Shift + R`

để lặp lại.

---

# 18. Ghép các Curve

Đảm bảo object cuối cùng cần làm active được chọn sau cùng.

Sau đó:

`Ctrl + J`

để Join.

---

# 19. Đưa Origin về giữa Object

Sau khi Join:

`Right Click → Set Origin → Origin to Geometry`

Blender sẽ tính lại tâm object.

Điều này đặc biệt quan trọng trước khi:

* xoay;
* Bend;
* Twist;
* Scale;
* dùng modifier.

---

# 20. Tạo dây đan bằng Profile

Tạo một Curve dùng làm đường chính.

Sau đó tạo một profile riêng.

Trong:

`Curve Properties → Geometry → Bevel → Object`

chọn profile.

Ta có:

```text
Curve Path
   +
Profile
   ↓
Sợi có tiết diện đặc biệt
```

---

# 21. Tạo hiệu ứng dây xoắn

Thêm:

`Modifier → Simple Deform`

Chọn:

`Twist`

Đặt Angle:

```text
360°
```

Nếu chưa đủ chặt:

```text
720°
```

Ví dụ:

```text
Trước Twist

||||||||||

Sau Twist

//////////
\\\\\\\\\\
//////////
```

Điều chỉnh Angle càng lớn → số vòng xoắn càng nhiều.

---

# 22. Uốn dây thành vòng

Thêm một `Simple Deform` thứ hai.

Chọn:

`Bend`

Angle:

```text
360°
```

Nếu object bị méo hoặc phá vỡ:

> Kiểm tra **Axis**.

Trong bài, trục phù hợp là:

```text
Z Axis
```

Sơ đồ modifier:

```text
Curve/Profile
     ↓
Simple Deform — Twist
     ↓
Simple Deform — Bend
     ↓
Vòng dây đan
```

---

# 23. Tinh chỉnh vòng dây

Nếu phần cuối chưa nối kín hoặc mật độ đan chưa phù hợp:

* điều chỉnh góc Twist;
* điều chỉnh Scale;
* điều chỉnh Bend;
* kiểm tra Axis;
* Apply Scale nếu modifier hoạt động sai.

Ví dụ có thể tăng Twist:

```text
360°
↓
720°
```

để braid dày hơn.

---

# 24. Đặt vòng đan lên miệng giỏ

Chuyển sang:

`Top View`

Scale:

`S`

để vòng braid bao quanh thân giỏ.

Nếu Scale đang dựa vào 3D Cursor ngoài ý muốn, đổi Pivot trở lại:

`Bounding Box Center`

---

# 25. Chuyển phần hoàn thiện thành Mesh

Khi đã hài lòng:

`Right Click → Convert To → Mesh`

Sau đó:

`Set Origin → Origin to Geometry`

Tạo bản sao:

`Shift + D`

để đặt một vòng tương tự phía dưới.

Có thể scale vòng dưới lớn/nhỏ hơn để tăng tính stylized.

---

# 26. Hiện lại Cylinder

Nhấn:

`Alt + H`

để hiện các object đã ẩn.

Cylinder bên trong có thể được scale nhỏ lại để tạo phần thành giỏ đặc bên trong.

---

# 27. Chuyển toàn bộ giỏ thành Mesh

Chọn tất cả phần Curve cần hoàn thiện.

Chuột phải:

`Convert To → Mesh`

Sau đó Join:

`Ctrl + J`

Pipeline lúc này:

```text
Curve Procedural
      ↓
Hoàn thiện hình dạng
      ↓
Convert To Mesh
      ↓
Ctrl + J
      ↓
Một Mesh hoàn chỉnh
```

---

# 28. Tạo dáng thân giỏ

Trong Wireframe Mode, chọn phần đáy.

Bật:

`O → Proportional Editing`

Scale phần dưới:

`S`

và dùng con lăn chuột để thay đổi vùng ảnh hưởng.

Ví dụ:

```text
Trước

|        |
|        |
|        |
|________|

Sau

 \      /
  \    /
   \__/
```

Không nên thu quá mạnh vì geometry sẽ bị biến dạng.

---

# 29. Làm mượt bề mặt

Object Mode:

`Right Click → Shade Smooth`

Kết quả:

* highlight mềm hơn;
* sợi đan trông tự nhiên hơn;
* giảm cảm giác low-poly rõ rệt.

---

# 30. Tạo tay cầm

Có thể tận dụng chính phần braid đã tạo.

Tạo bản sao:

`Shift + D`

Di chuyển lên trên.

Tắt Proportional Editing nếu đang bật:

`O`

Xoay:

`R → X → 90`

hoặc trục thích hợp.

Sau đó tách phần cần thiết:

`P → Selection`

Xóa một nửa vòng để tạo hình:

```text
   ╭────────╮
  ╱          ╲
 │            │
```

Đây trở thành tay cầm chiếc giỏ.

---

# 31. Che seam của tay cầm

Điểm nối giữa tay cầm và thân giỏ có thể trông giả.

Giải pháp:

> Tạo các vòng Curve nhỏ bao quanh điểm nối.

Ví dụ:

```text
Handle
   │
===O===
   │
Basket
```

Tạo một số Curve Circle nhỏ:

`Shift + A → Curve → Circle`

Sau đó:

* duplicate;
* rotate;
* scale;
* đặt quanh seam.

---

# 32. Điều chỉnh độ dày Procedural

Vì những chi tiết này vẫn là Curve, có thể thay đổi:

`Geometry → Bevel → Depth`

Ví dụ:

```text
Depth nhỏ
──────

Depth lớn
══════
```

Đây là ưu điểm rất lớn của việc chưa Convert sang Mesh quá sớm.

---

# 33. Workflow hoàn chỉnh của bài học

```text
Cylinder
   ↓
Tách Edge
   ↓
Convert to Curve
   ↓
Tạo pattern trên/dưới
   ↓
Bevel Vertex
   ↓
Thêm Depth
   ↓
Duplicate + Rotate
   ↓
Shift + R tạo nhiều tầng
   ↓
Tạo Curve Profile
   ↓
Simple Deform — Twist
   ↓
Simple Deform — Bend
   ↓
Tạo viền trên/dưới
   ↓
Tạo tay cầm
   ↓
Convert To Mesh
   ↓
Join
   ↓
Proportional Editing
   ↓
Shade Smooth
   ↓
Giỏ hoàn chỉnh
```

---

# 34. Các phím tắt quan trọng

| Phím                 | Chức năng                        |
| -------------------- | -------------------------------- |
| `Shift + A`          | Add Object                       |
| `Tab`                | Object/Edit Mode                 |
| `P`                  | Separate                         |
| `Ctrl + Alt + Click` | Chọn Edge Loop/Ring tùy ngữ cảnh |
| `A`                  | Select All                       |
| `Ctrl + Shift + B`   | Bevel Vertex                     |
| `Ctrl + B`           | Bevel Edge                       |
| `Shift + D`          | Duplicate                        |
| `Shift + R`          | Repeat Last Action               |
| `R`                  | Rotate                           |
| `R → Z`              | Rotate theo Z                    |
| `R → X`              | Rotate theo X                    |
| `G → Z`              | Di chuyển theo Z                 |
| `S`                  | Scale                            |
| `Shift + S`          | Snap / 3D Cursor Menu            |
| `Ctrl + J`           | Join                             |
| `Ctrl + A`           | Apply Transform                  |
| `H`                  | Hide                             |
| `Alt + H`            | Unhide                           |
| `O`                  | Proportional Editing             |

---

# 35. Khi nào nên giữ Curve?

Nên giữ Curve procedural nếu còn cần:

* thay đổi độ dày;
* thay profile;
* sửa đường đi;
* thay độ mịn;
* chỉnh Twist;
* chỉnh Bend;
* chỉnh chiều dài;
* chỉnh bán kính.

```text
Còn cần chỉnh
     ↓
Giữ Curve

Đã khóa thiết kế
     ↓
Convert Mesh
```

---

# 36. Khi nào nên Convert sang Mesh?

Chỉ nên Convert khi cần:

* Sculpt;
* chỉnh Vertex trực tiếp;
* UV unwrap chi tiết;
* retopology;
* Boolean phức tạp;
* Merge geometry;
* chỉnh topology;
* xuất sang workflow yêu cầu Mesh.

> Không nên Convert quá sớm vì sẽ mất tính procedural của Curve.

---

# 37. Lỗi thường gặp

## Curve quá vuông

**Nguyên nhân:** Bevel Resolution quá thấp.

**Cách sửa:**

Tăng:

`Bevel Resolution`

---

## Hai đầu Curve bị hở

Bật:

`Fill Caps`

---

## Bend làm object vỡ

Kiểm tra:

* Axis;
* Rotation;
* Scale;
* Origin.

Nên:

`Ctrl + A → Scale`

trước khi dùng modifier.

---

## Twist xoắn sai hướng

Thử:

* đổi Axis;
* đổi dấu Angle;
* kiểm tra Local Axis.

Ví dụ:

```text
720°
```

thành:

```text
-720°
```

---

## Scale quay quanh vị trí lạ

Kiểm tra Pivot Point.

Nếu đang ở:

`3D Cursor`

hãy đổi lại:

`Bounding Box Center`

hoặc:

`Median Point`.

---

## Pattern đan không rõ

Phải đảm bảo các điểm được đặt xen kẽ:

```text
Ngoài
Trong
Ngoài
Trong
Ngoài
Trong
```

Nếu tất cả nằm cùng một mặt phẳng thì sẽ không tạo được cảm giác đan.

---

# 38. Nguyên tắc quan trọng của Curve Modeling

Không phải mọi object đều phù hợp với Curve.

Trước khi dựng hình, cần phân tích:

```text
Object
  ↓
Có hình dạng chạy theo một đường?
  ├── Có → cân nhắc Curve
  └── Không → Mesh có thể phù hợp hơn
```

Curve đặc biệt mạnh với các object có:

* đường dẫn rõ;
* tiết diện lặp lại;
* hình dạng mềm;
* hình ống;
* hình dây.

---

# 39. Ví dụ ứng dụng

### Dây điện

```text
Path
+
Bevel Depth
=
Cable
```

### Dây thừng

```text
Profile
+
Twist
=
Rope
```

### Vòng trang trí

```text
Rope
+
Bend 360°
=
Ring
```

### Tay cầm

```text
Curve Path
+
Profile
=
Handle
```

---

# 40. Ghi nhớ nhanh

```text
CURVE MODELING
│
├── Path
│   └── Hình dạng tổng thể
│
├── Bevel Depth
│   └── Độ dày
│
├── Resolution
│   └── Độ mượt
│
├── Fill Caps
│   └── Đóng hai đầu
│
├── Bevel Object
│   └── Tiết diện tùy chỉnh
│
├── Twist
│   └── Xoắn
│
├── Bend
│   └── Uốn
│
└── Convert Mesh
    └── Chỉ dùng khi cần
```

---

# 41. Bài thực hành đề xuất

Hãy tự dựng ít nhất 3 object bằng Curve:

### Bài 1 — Dây điện

```text
Curve
→ Bevel Depth
→ chỉnh Handle
```

### Bài 2 — Dây thừng

```text
Profile
→ Curve
→ Twist
```

### Bài 3 — Vòng dây thừng

```text
Rope
→ Simple Deform Twist
→ Simple Deform Bend
```

### Bài nâng cao — Giỏ đan

```text
Cylinder
→ Extract Edges
→ Curve
→ Pattern xen kẽ
→ Duplicate
→ Border
→ Handle
```

---

# 42. Checklist cuối bài

* [ ] Tạo được Curve từ Edge của Mesh.
* [ ] Điều chỉnh được Curve bằng Control Point/Handle.
* [ ] Hiểu chức năng của `Bevel Depth`.
* [ ] Điều chỉnh được `Bevel Resolution`.
* [ ] Biết sử dụng `Fill Caps`.
* [ ] Sử dụng được object làm Bevel Profile.
* [ ] Tạo được pattern đan trên/dưới.
* [ ] Dùng `Shift + R` để lặp thao tác.
* [ ] Dùng được `Simple Deform → Twist`.
* [ ] Dùng được `Simple Deform → Bend`.
* [ ] Kiểm tra Axis khi modifier hoạt động sai.
* [ ] Biết dùng 3D Cursor làm Pivot.
* [ ] Biết khi nào nên giữ Curve procedural.
* [ ] Chỉ Convert sang Mesh khi thật sự cần.
* [ ] Hoàn thiện object bằng `Shade Smooth`.

---

## Kết luận

Curve là một trong những công cụ modeling rất mạnh của Blender khi đối tượng có cấu trúc chạy dọc theo một **đường dẫn**.

Công thức quan trọng nhất cần nhớ là:

```text
PATH + PROFILE + MODIFIER
          ↓
    CURVE MODELING
```

Trong đó:

* **Path** quyết định đường đi;
* **Bevel/Profile** quyết định tiết diện;
* **Depth** quyết định độ dày;
* **Twist** tạo xoắn;
* **Bend** tạo cong;
* **Mesh** chỉ nên được tạo khi workflow procedural đã hoàn tất.

Chiếc giỏ trong bài là một ví dụ điển hình cho việc kết hợp:

**Curve + Bevel + Profile + Duplicate + Twist + Bend + Proportional Editing**

để tạo một object khá phức tạp từ những thao tác tương đối đơn giản.
