# 012 — Stylized House Modeling Part 1

| Thuộc tính | Nội dung |
|---|---|
| **Phần** | 02 — Modeling in Blender |
| **Thời lượng** | 20:11 |
| **Chủ đề** | Blockout và dựng phần chính của ngôi nhà stylized |
| **Trọng tâm** | Reference → Blockout → Roof → Roof Tiles → Doorway → Stylized Stones |

---

## 1. Mục tiêu bài học

Sau bài này, bạn có thể:

- [ ] Phân tích một ảnh reference thành các khối hình học lớn.
- [ ] Blockout ngôi nhà dựa trên **tỷ lệ và silhouette** trước khi thêm chi tiết.
- [ ] Tạo mái cong bằng **Loop Cut + Proportional Editing**.
- [ ] Tạo hệ thống ngói bằng **Array Modifier**.
- [ ] Phá vỡ sự hoàn hảo của hình học để tạo cảm giác stylized.
- [ ] Uốn cả cụm ngói theo hình dạng mái mà vẫn giữ chi tiết.
- [ ] Tạo độ dày cho mái bằng Extrude hoặc Solidify.
- [ ] Kiểm tra **Face Orientation / Normals**.
- [ ] Tạo cửa vòm bằng **Boolean Difference**.
- [ ] Tạo đá stylized từ cube bằng Bevel và biến dạng ngẫu nhiên.

---

# 2. Tư duy chính: từ reference đến model

Không nên bắt đầu bằng những chi tiết nhỏ.

Hãy phân tích reference theo thứ tự:

```text
Reference
   ↓
Silhouette tổng thể
   ↓
Khối thân nhà
   ↓
Hình dạng mái
   ↓
Ngói
   ↓
Cửa / cửa sổ
   ↓
Đá / viền / trang trí
   ↓
Chi tiết nhỏ
```

> **Nguyên tắc:** nếu hình dáng tổng thể chưa đúng thì chưa nên mất thời gian làm ngói, cửa, đá hoặc ornament.

---

# 3. Chuẩn bị reference

## 3.1. Import ảnh

Đưa ảnh concept/reference của ngôi nhà vào Blender.

Có thể sử dụng:

- reference đi kèm bài học;
- concept tự vẽ;
- concept được tạo bằng công cụ AI;
- ảnh stylized có silhouette rõ ràng.

Bài này tập trung vào **stylized modeling**, vì vậy reference nên có hình khối được cường điệu tương đối rõ.

---

## 3.2. Chỉnh orientation của reference

Chọn ảnh:

```text
Alt + R
```

để reset Rotation nếu cần.

Sau đó xoay khoảng:

```text
R → 90°
```

để reference đứng đúng hướng.

Di chuyển ảnh sang bên cạnh để không che model.

---

## 3.3. Dọn scene

Xóa những thành phần chưa cần:

- Light
- Camera

Giữ lại:

- Cube mặc định

Cube này sẽ trở thành blockout chính của ngôi nhà.

---

# 4. Phân tích hình dạng ngôi nhà

Reference có thể được giản lược thành:

```text
              MÁI
         ╱──────────╲
       ╱              ╲
      │                │
      │    THÂN NHÀ    │
      │                │
      │      CỬA       │
      └────────────────┘
            NỀN
```

Ở giai đoạn đầu chỉ quan tâm:

1. chiều rộng;
2. chiều cao;
3. tỷ lệ mái;
4. độ cong của mái;
5. silhouette.

---

# 5. Blockout phần thân nhà

Chọn cube.

Di chuyển lên:

```text
G → Z
```

Scale để gần với kích thước của reference:

```text
S
```

Không cần chính xác tuyệt đối ngay từ đầu.

---

## 5.1. Tạo phần nền/tường

Vào Edit Mode:

```text
Tab
```

Tạo Loop Cut:

```text
Ctrl + R
```

Di chuyển edge vừa tạo lên trên để định nghĩa phần nền và thân nhà.

Kết quả sơ bộ:

```text
       ┌────────────┐
       │            │
       │  THÂN NHÀ  │
       │            │
       ├────────────┤
       │    NỀN     │
       └────────────┘
```

---

# 6. Tạo hình mái stylized

Mái trong reference không hoàn toàn phẳng mà có một đường cong nhẹ.

Để tạo được silhouette đó, cần thêm geometry.

## 6.1. Thêm Loop Cut

Thêm nhiều edge loop trên phần mái:

```text
Ctrl + R
```

Nên bố trí số lượng edge tương đối đều ở hai phía.

Ví dụ:

```text
|---|---|---|---|---|
```

Geometry đủ dày mới cho phép uốn mái mượt.

---

## 6.2. Tạo độ cong bằng Proportional Editing

Chọn phần polygon/vertex ở gần trung tâm mái.

Bật:

```text
O
```

Sau đó:

```text
G → Z
```

và kéo xuống nhẹ.

Dùng **con lăn chuột** để tăng/giảm bán kính ảnh hưởng.

```text
Mái phẳng
────────────

          ↓ Proportional Editing

╲____      ____╱
     ╲____╱
```

Mục tiêu không phải làm mái thật cong mà tạo một chút exaggeration để tăng cảm giác stylized.

---

# 7. Tách phần mái khỏi thân nhà

Chọn toàn bộ polygon thuộc mái.

Nhấn:

```text
P
```

chọn:

```text
Selection
```

Mái sẽ trở thành object riêng.

Việc này giúp:

- chỉnh mái độc lập;
- dễ gắn ngói;
- dễ thêm Solidify;
- tránh ảnh hưởng thân nhà.

---

# 8. Tạo một viên ngói mẫu

Bây giờ bắt đầu xây dựng hệ thống ngói.

Tạo cube:

```text
Shift + A
→ Mesh
→ Cube
```

Cube này sẽ trở thành **một viên/nguyên mẫu ngói**.

---

## 8.1. Isolate để dễ làm việc

Có thể chọn:

- cube;
- reference;

sau đó dùng:

```text
Numpad /
```

để vào **Local View**.

Nhờ đó scene trở nên sạch và dễ quan sát hơn.

---

# 9. Xác định số lượng ngói

Quan sát reference.

Ví dụ trong bài:

```text
Một hướng: 6 viên
Hướng còn lại: 7 viên
```

Tư duy:

```text
● ● ● ● ● ●
● ● ● ● ● ●
● ● ● ● ● ●
...
```

Không cần đặt từng viên bằng tay.

Ta sẽ sử dụng:

> **Array Modifier**

---

# 10. Chuẩn hóa viên ngói

Scale cube thành hình dạng viên ngói.

Sau khi Scale phải:

```text
Ctrl + A
→ Scale
```

### Vì sao phải Apply Scale?

Modifier như:

- Bevel
- Array
- Solidify

có thể cho kết quả không ổn định nếu object đang có Scale kiểu:

```text
X = 0.13
Y = 2.75
Z = 0.42
```

Sau Apply Scale:

```text
X = 1
Y = 1
Z = 1
```

Blender sẽ xem kích thước hiện tại là kích thước gốc mới của object.

---

# 11. Thêm geometry cho viên ngói

Vào Edit Mode.

Thêm một số Loop Cut:

```text
Ctrl + R
```

ở hai bên để chia mặt thành các phần tương đối đều.

Ví dụ:

```text
┌────┬────┬────┐
│    │    │    │
└────┴────┴────┘
```

Geometry này sẽ được dùng để:

- uốn;
- deform;
- tạo độ không đều;
- làm silhouette mềm hơn.

---

# 12. Nhân ngói bằng Array Modifier

Chọn object ngói.

Đi tới:

```text
Modifiers
→ Add Modifier
→ Array
```

---

## 12.1. Array theo hướng thứ nhất

Nếu Array mặc định chạy theo X nhưng model cần chạy theo Y:

```text
Relative Offset X = 0
Relative Offset Y = 1
```

Đặt:

```text
Count = 6
```

Kết quả:

```text
[■][■][■][■][■][■]
```

---

## 12.2. Array theo hướng thứ hai

Thêm Array thứ hai.

Thiết lập theo trục vuông góc với hàng ngói đầu tiên.

Ví dụ:

```text
Count = 7
```

Tùy orientation của object mà dùng:

```text
X = ±1
```

hoặc trục phù hợp với scene.

Kết quả:

```text
■ ■ ■ ■ ■ ■
■ ■ ■ ■ ■ ■
■ ■ ■ ■ ■ ■
■ ■ ■ ■ ■ ■
■ ■ ■ ■ ■ ■
■ ■ ■ ■ ■ ■
■ ■ ■ ■ ■ ■
```

> Các giá trị X/Y phụ thuộc hướng local axes của object. Điều quan trọng là tạo đúng hai chiều của lưới ngói.

---

# 13. Tạo profile cho viên ngói

Vào Edit Mode của viên ngói gốc.

Chọn các polygon ở phần trung tâm.

Tắt Proportional Editing nếu đang bật:

```text
O
```

Di chuyển một số phần lên để tạo mặt cong nhẹ.

Mục tiêu:

```text
Ban đầu:

─────────

Sau chỉnh:

___╭───╮___
```

Không nên làm cong quá mạnh.

---

# 14. Bevel mép viên ngói

Chọn các cạnh xung quanh viên ngói.

Nhấn:

```text
Ctrl + B
```

Kéo nhẹ để tạo Bevel.

Có thể tăng số segment bằng con lăn chuột.

Kết quả:

```text
Sharp:

┌─────────┐

Bevel:

╭─────────╮
│         │
╰─────────╯
```

Bevel giúp bắt highlight tốt hơn và tránh cảm giác quá "CG".

---

# 15. Apply Array

Khi đã hài lòng với số lượng ngói, có thể Apply các Array Modifier.

Lúc này toàn bộ hệ thống trở thành geometry có thể chỉnh trực tiếp.

> Chỉ Apply khi không còn cần thay đổi nhanh số lượng/khoảng cách của Array.

---

# 16. Phá sự hoàn hảo của lưới ngói

Đây là một kỹ thuật quan trọng trong stylized modeling.

Nếu tất cả viên ngói đều:

- cùng chiều cao;
- cùng vị trí;
- cùng góc;
- cùng kích thước;

model sẽ trông quá máy móc.

---

## 16.1. Select Random

Trong Edit Mode:

```text
Select
→ Select Random
```

Giảm **Ratio** để chỉ chọn một lượng nhỏ vertex.

Ví dụ:

```text
10–30%
```

---

## 16.2. Biến dạng nhẹ theo X

Bật:

```text
O
```

Sau đó:

```text
G → X
```

dịch rất nhẹ.

Kết quả:

```text
Trước:

||||||||||||

Sau:

| ||| | || | |
```

---

## 16.3. Biến dạng theo Z

Thực hiện Select Random lần nữa.

Sau đó:

```text
G → Z
```

dịch rất nhẹ.

Ta sẽ có:

```text
_─__──_─___──_
```

Các viên ngói không còn nằm trên một mặt phẳng hoàn hảo.

---

# 17. Nguyên tắc tạo "controlled randomness"

Đây không phải random hoàn toàn.

Nên sử dụng:

```text
Random nhỏ
+
Biến dạng nhỏ
+
Lặp lại vài lần
=
Stylized tự nhiên
```

Không nên:

```text
Random mạnh
+
Displacement lớn
=
Geometry hỗn loạn
```

> Stylized tốt thường là **sự không hoàn hảo có kiểm soát**.

---

# 18. Smooth bề mặt

Sau khi hoàn thành hình dạng:

```text
Right Click
→ Shade Auto Smooth
```

hoặc tùy phiên bản Blender:

```text
Shade Smooth by Angle
```

Mục tiêu:

- các bề mặt cong trông mượt;
- các góc lớn vẫn được giữ rõ.

---

## Shade Smooth và Smooth by Angle

### Shade Smooth

Có thể làm toàn bộ bề mặt mượt, kể cả nơi đáng ra phải giữ cạnh sắc.

### Smooth by Angle

Dựa vào một ngưỡng góc.

Ví dụ:

```text
Angle ≈ 30–35°
```

Cạnh có góc lớn vẫn giữ sắc, bề mặt cong nhỏ được smooth.

---

# 19. Tạo biến thể thủ công cho từng vùng ngói

Random vertex vẫn chưa đủ.

Reference còn có:

- viên nhô ra;
- viên lùi vào;
- viên dài hơn;
- viên ngắn hơn.

Vì vậy cần chỉnh thủ công.

---

## 19.1. Chọn từng island

Trong Edit Mode:

```text
L
```

khi chuột đang nằm trên một phần geometry liên kết.

Blender sẽ chọn toàn bộ island tương ứng.

---

## 19.2. Chọn Pivot = Individual Origins

Ở Pivot Point chọn:

```text
Individual Origins
```

Bây giờ khi scale nhiều island, mỗi island sẽ scale quanh tâm của chính nó.

Ví dụ:

```text
S → X
```

sẽ làm từng viên dài/ngắn riêng thay vì scale toàn bộ cụm từ một tâm chung.

---

# 20. Tạo mặt điều khiển để uốn cụm ngói

Cụm ngói hiện đang phẳng nhưng mái nhà cong.

Ta cần uốn ngói theo mái mà không phá chi tiết.

Một cách phù hợp là sử dụng:

> **Surface Deform Modifier**

---

## 20.1. Tạo plane điều khiển

```text
Shift + A
→ Mesh
→ Plane
```

Scale plane để nó bao phủ toàn bộ cụm ngói.

---

## 20.2. Subdivide plane

Vào Edit Mode.

Thêm khoảng 5 hoặc nhiều edge loop:

```text
Ctrl + R
```

Plane lúc này có đủ geometry để uốn.

Ví dụ:

```text
──────────────
──────────────
──────────────
──────────────
──────────────
```

---

# 21. Gắn ngói vào plane bằng Surface Deform

Chọn **cụm ngói**.

Thêm:

```text
Modifier
→ Surface Deform
```

Trong Target:

```text
Eyedropper → chọn Plane
```

Sau đó:

```text
Bind
```

Quan hệ lúc này:

```text
Plane điều khiển
       ↓
Surface Deform
       ↓
Cụm ngói
```

Khi plane biến dạng, ngói sẽ biến dạng theo.

---

# 22. Uốn plane thành hình mái

Chọn plane.

Vào Edit Mode.

Có thể xoay plane khoảng:

```text
R → 45°
```

tùy orientation mái.

---

## 22.1. Dùng Proportional Editing

Chọn một edge/vertex cần hạ xuống.

Bật:

```text
O
```

Dùng:

```text
G
```

và điều chỉnh vùng ảnh hưởng bằng con lăn chuột.

Mục tiêu là tái tạo độ cong của mái:

```text
Plane ban đầu:

────────────

Plane sau deform:

╲________╱
```

Do ngói đã Bind nên cụm ngói tự động cong theo.

---

# 23. Apply deformation

Khi hình dạng đã đúng:

```text
Surface Deform
→ Apply
```

Sau đó có thể xóa plane điều khiển nếu không còn cần.

---

# 24. Hoàn thiện phần nền của mái

Quay lại object mái được tách ở bước trước.

Không cần giữ cả hai bên nếu mái đối xứng.

Xóa một nửa:

```text
X
→ Faces
```

Sau đó sẽ duplicate sang phía đối diện.

---

# 25. Chỉnh silhouette mái bằng Edge Slide

Nếu một edge cần di chuyển theo chính topology hiện tại:

```text
G → G
```

Đây là **Edge Slide**.

Ví dụ:

```text
Edge ban đầu:

────●────

G G →

────────●
```

Khác với `G`, Edge Slide giúp edge chạy theo topology thay vì kéo tự do trong không gian.

Rất hữu ích khi:

- chỉnh chiều cao mái;
- điều chỉnh loop trên surface cong;
- giữ hình dạng tổng thể.

---

# 26. Tạo độ dày cho mái

Có hai phương pháp.

## Phương pháp 1 — Extrude

Edit Mode:

```text
A
E
```

Extrude toàn bộ polygon để tạo thickness.

---

## Phương pháp 2 — Solidify Modifier

```text
Modifier
→ Solidify
```

Điều chỉnh:

```text
Thickness
```

Nếu thickness chạy sai hướng, đổi dấu giá trị.

Ví dụ:

```text
0.05
```

thành:

```text
-0.05
```

---

# 27. Điều chỉnh phần ngói nhô khỏi mái

Trong reference, các viên ngói thường nhô ra khỏi lớp nền mái một chút.

Chọn:

- roof base;
- roof tiles;

và điều chỉnh theo chiều ngang mái.

Ví dụ:

```text
S → Y
```

tùy orientation model.

Mục tiêu:

```text
Ngói
   ↓
╭──────────────╮
╰──────────────╯
  ┌──────────┐
  │ Roof Base│
  └──────────┘
```

Ngói nên nhô nhẹ khỏi base.

---

# 28. Kiểm tra Normals

Bật:

```text
Viewport Overlays
→ Face Orientation
```

Thông thường:

- **Blue** = mặt ngoài đúng;
- **Red** = mặt đang quay ngược.

Quan sát toàn bộ mái.

Mặt bên trong có thể đỏ nếu đó thực sự là mặt bên trong của shell.

Nhưng mặt ngoài nhìn từ camera nên có orientation đúng.

---

# 29. Tạo mái bên đối diện

Nếu hai bên mái gần đối xứng:

```text
Shift + D
```

Sau đó:

```text
R → Z → 180°
```

Đặt bản sao sang bên còn lại.

Kiểm tra:

- vị trí giao nhau;
- khoảng hở;
- overlap;
- silhouette.

Nếu bị giao geometry, dịch nhẹ để tránh z-fighting hoặc xuyên mesh.

---

# 30. Che đường nối trên đỉnh mái

Hai nửa mái có thể tạo seam ở chính giữa.

Thay vì cố hàn tất cả geometry, có thể sử dụng một **ridge detail** để che seam.

Tạo:

```text
Shift + A
→ Cube
```

Đặt cube ở giữa đỉnh mái.

Lợi ích của việc xây model quanh World Origin:

```text
Origin
  ↓
-----|-----
 Left | Right
```

Các chi tiết đối xứng dễ căn giữa hơn rất nhiều.

---

# 31. Tạo ridge cap stylized

Scale cube theo chiều dài mái.

Thêm Loop Cut nếu cần.

Sau đó chọn cạnh:

```text
Ctrl + B
```

để Bevel.

Có thể chọn một số face và:

```text
Alt + E
→ Extrude Faces Along Normals
```

Extrude một lượng nhỏ.

Ta có thể tạo nhiều gờ:

```text
╭─╮ ╭─╮ ╭─╮
│ │ │ │ │ │
╰─╯─╰─╯─╰─╯
```

Các gờ nhỏ giúp đỉnh mái có silhouette stylized rõ hơn.

---

# 32. Tạo thêm độ cong cho ridge

Thêm một vài edge loop đều nhau.

Chọn edge ở khu vực trung tâm.

Bật:

```text
O
```

Di chuyển nhẹ để tạo độ cong.

Không cần hoàn toàn thẳng vì ngôi nhà đang theo phong cách stylized.

---

# 33. Tăng chiều sâu cho khu vực giữa mái

Có thể chọn đồng thời hai object ngói trái/phải.

Từ Top View, chọn những vertex/face nằm gần đường giữa.

Extrude hoặc di chuyển chúng nhẹ để phần mái có chiều sâu và không quá phẳng.

Mục tiêu:

```text
Mặt mái phẳng tuyệt đối     →     Không nên

Mặt mái hơi lồi/lõm         →     Stylized tốt hơn
```

---

# 34. Bắt đầu tạo cửa vòm

Reference có cửa dạng arch.

Trước hết không tạo cánh cửa.

Ta sẽ tạo:

> **hình học dùng để cắt lỗ cửa**

---

## 34.1. Tạo cutter

```text
Shift + A
→ Cube
```

Scale:

```text
S
```

và đặt ở vị trí cửa.

---

# 35. Tạo đầu cửa cong

Vào Edit Mode.

Chọn các cạnh phía trên bên trái và phải.

Dùng:

```text
Ctrl + B
```

Thêm nhiều segment bằng con lăn chuột.

Kết quả:

```text
Ban đầu:

┌────────┐
│        │
│        │

Sau Bevel:

╭────────╮
│        │
│        │
```

Điều chỉnh chiều cao và chiều rộng sao cho tương đối giống reference.

---

# 36. Cắt cửa bằng Boolean

Chọn **thân nhà**.

Thêm:

```text
Modifier
→ Boolean
```

Dùng Eyedropper chọn object cửa vừa tạo.

Operation:

```text
Difference
```

Sơ đồ:

```text
THÂN NHÀ
   −
CUTTER CỬA
   =
LỖ CỬA
```

---

# 37. Các chế độ Boolean cần nhớ

Boolean thường có ba operation chính:

| Operation | Công dụng |
|---|---|
| **Difference** | Lấy object B cắt khỏi object A |
| **Union** | Gộp hai object |
| **Intersect** | Chỉ giữ phần giao nhau |

Ở đây cần:

```text
Difference
```

---

## 37.1. Nếu Boolean hoạt động không ổn định

Có thể thử đổi Solver.

Tùy Blender/version có các lựa chọn như:

```text
Exact
Fast
```

Nếu topology đơn giản, Fast có thể xử lý nhanh hơn.

Sau khi chắc chắn kết quả đúng:

```text
Apply
```

modifier.

Sau đó có thể:

- xóa cutter;
- hoặc giấu cutter để sử dụng lại.

---

# 38. Tạo đá trang trí quanh cửa và góc nhà

Reference có các viên đá stylized.

Không nên tạo từng viên hoàn toàn mới.

Tạo khoảng:

```text
3–4 biến thể đá
```

sau đó tái sử dụng.

---

# 39. Bật Cavity để dễ quan sát hình khối

Trong Viewport Shading, bật:

```text
Cavity
Shadow
```

Điều này giúp các cạnh và vùng lõm nổi bật hơn trong quá trình sculpt hình bằng mesh.

---

# 40. Tạo viên đá đầu tiên

Tạo cube:

```text
Shift + A
→ Cube
```

Scale thành viên đá.

Sau đó:

```text
Ctrl + A
→ Scale
```

---

## 40.1. Thêm topology

Thêm khoảng ba Loop Cut:

```text
Ctrl + R
```

Geometry nhiều hơn cho phép tạo hình bất quy tắc.

---

## 40.2. Bevel toàn bộ góc

Chọn các cạnh.

```text
Ctrl + B
```

Tăng Bevel tương đối lớn.

Mục tiêu:

```text
Cube máy móc:

┌───────┐
│       │
└───────┘

Stylized stone:

╭───────╮
│       │
╰───────╯
```

---

# 41. Tạo nhiều biến thể đá

Duplicate:

```text
Shift + D
```

Tạo khoảng 4 viên.

Sau đó thay đổi tỷ lệ:

```text
Stone A → rộng
Stone B → cao
Stone C → nhỏ
Stone D → trung bình
```

Không nên dùng bốn viên giống hệt nhau.

---

# 42. Chỉnh nhiều object trong Edit Mode

Có thể chọn nhiều mesh object rồi:

```text
Tab
```

Blender cho phép chỉnh nhiều object cùng lúc trong Edit Mode.

Khi rê chuột lên từng viên:

```text
L
```

để chọn toàn bộ geometry của viên đó.

Sau đó scale riêng:

```text
S → X
S → Y
S → Z
```

---

# 43. Làm đá bất quy tắc

Có thể dùng:

```text
Select Random
```

hoặc chọn vertex thủ công.

Sau đó bật:

```text
O
```

và di chuyển nhẹ:

```text
G → Z
G → X
G → Y
```

Ví dụ:

```text
Perfect cube
     ↓
Bevel
     ↓
Random vertex movement
     ↓
Stylized stone
```

---

# 44. Random không phải lúc nào cũng tốt

Không bắt buộc phải dùng Select Random.

Trong nhiều trường hợp, chọn vertex thủ công sẽ kiểm soát silhouette tốt hơn.

Ví dụ:

```text
Chọn 1 vertex
↓
G → Z
↓
Chọn vertex khác
↓
G → X
```

Chỉ cần một số điểm lệch nhẹ đã đủ làm đá trông tự nhiên.

---

# 45. Smooth viên đá

Sau khi hoàn thành:

```text
Right Click
→ Shade Auto Smooth
```

hoặc:

```text
Shade Smooth by Angle
```

Kết quả cần đạt:

- cạnh không quá sắc;
- mặt không quá phẳng;
- vẫn giữ được silhouette rõ;
- có cảm giác đá được "đẽo" theo phong cách hoạt hình.

---

# 46. Đặt đá lên tường

Bắt đầu với một góc nhà.

Đặt viên đá sát tường.

Duplicate:

```text
Shift + D
```

và bố trí dọc theo cạnh.

Từ Top View có thể dễ kiểm soát khoảng cách với tường.

---

# 47. Scale nhiều viên cùng lúc

Nếu muốn tất cả viên đá cùng tăng chiều cao:

Chọn Pivot:

```text
Bounding Box Center
```

sau đó:

```text
S → Z
```

Toàn bộ cụm sẽ scale như một nhóm.

Ngược lại, nếu muốn từng viên tự scale:

```text
Individual Origins
```

---

# 48. Bố trí đá theo chiều cao

Sau khi có hàng đầu tiên:

```text
Shift + D
```

Di chuyển lên:

```text
G → Z
```

Có thể scale nhẹ ở từng hàng để tránh pattern lặp.

Ví dụ:

```text
       [■]
 [■■]      [■]
      [■■]
 [■]       [■■]
```

Thay vì:

```text
[■]
[■]
[■]
[■]
[■]
```

Stylized environment nên tránh pattern quá đều.

---

# 49. Quy trình tổng thể của Part 1

```text
REFERENCE
   │
   ▼
Phân tích silhouette
   │
   ▼
Blockout thân nhà
   │
   ├───────────────┐
   ▼               ▼
Tạo mái        Tạo cửa vòm
   │               │
   ▼               ▼
Tách roof       Boolean
   │
   ▼
Tạo 1 viên ngói
   │
   ▼
Array thành lưới
   │
   ▼
Randomize geometry
   │
   ▼
Surface Deform
   │
   ▼
Uốn theo mái
   │
   ▼
Solidify + chỉnh silhouette
   │
   ▼
Duplicate mái đối diện
   │
   ▼
Ridge Detail
   │
   ▼
Stylized Stones
```

---

# 50. Các công cụ Blender quan trọng trong bài

| Công cụ | Phím / vị trí | Công dụng |
|---|---|---|
| Edit Mode | `Tab` | Chỉnh mesh |
| Move | `G` | Di chuyển |
| Rotate | `R` | Xoay |
| Scale | `S` | Scale |
| Apply Scale | `Ctrl + A → Scale` | Chuẩn hóa transform |
| Loop Cut | `Ctrl + R` | Thêm edge loop |
| Bevel | `Ctrl + B` | Bo cạnh |
| Proportional Editing | `O` | Deform mềm |
| Separate | `P → Selection` | Tách geometry |
| Duplicate | `Shift + D` | Nhân bản |
| Select Linked | `L` | Chọn island |
| Edge Slide | `G → G` | Trượt edge theo topology |
| Extrude | `E` | Đùn geometry |
| Extrude Along Normals | `Alt + E` | Extrude theo normal |
| Local View | `Numpad /` | Cô lập object |
| Array | Modifier | Nhân lặp |
| Surface Deform | Modifier | Deform object theo surface |
| Solidify | Modifier | Tạo độ dày |
| Boolean | Modifier | Cắt/gộp geometry |
| Face Orientation | Overlay | Kiểm tra normals |

---

# 51. Các modifier được sử dụng

```text
Array
│
├─ Nhân ngói theo chiều ngang
└─ Nhân ngói theo chiều dọc

Surface Deform
│
└─ Uốn cụm ngói theo control plane

Solidify
│
└─ Tạo độ dày cho phần mái

Boolean
│
└─ Cắt cửa vòm khỏi thân nhà
```

---

# 52. Kỹ thuật stylization quan trọng

## 52.1. Không hoàn hảo có kiểm soát

Phong cách stylized không có nghĩa là làm geometry ngẫu nhiên.

Nên nghĩ theo công thức:

```text
Hình dạng cơ bản chính xác
          +
Tỷ lệ được cường điệu
          +
Sai lệch nhỏ có chủ đích
          =
Stylized Shape
```

Các sai lệch có thể là:

- viên ngói dài/ngắn khác nhau;
- vị trí Z hơi lệch;
- cạnh đá không thẳng hoàn toàn;
- roof ridge cong nhẹ;
- đá góc nhà có kích thước khác nhau.

---

# 53. Những lỗi cần tránh

## Lỗi 1 — Làm chi tiết quá sớm

Không nên bắt đầu bằng:

- viên ngói;
- cửa;
- đá;
- ornament;

khi silhouette của thân nhà còn sai.

---

## Lỗi 2 — Không Apply Scale

Đặc biệt trước:

```text
Bevel
Array
Solidify
```

hãy kiểm tra:

```text
Ctrl + A → Scale
```

---

## Lỗi 3 — Random quá mạnh

Nếu biến dạng quá lớn:

```text
Stylized → Melted / Broken
```

Mỗi lần chỉ nên thay đổi một lượng nhỏ.

---

## Lỗi 4 — Ngói quá đều

Nếu cả mái là:

```text
■■■■■■
■■■■■■
■■■■■■
```

thì model trông như được sản xuất bằng máy.

Hãy tạo:

- lệch nhẹ;
- dài/ngắn;
- cao/thấp;
- nhô/lùi.

---

## Lỗi 5 — Smooth mất cạnh

Dùng Shade Smooth không kiểm soát có thể làm cạnh vuông trông bị "tan".

Ưu tiên:

```text
Shade Smooth by Angle
```

khi cần giữ cạnh stylized.

---

## Lỗi 6 — Boolean trên geometry lỗi

Trước khi Boolean nên kiểm tra:

- Scale;
- normals;
- mesh không self-intersection;
- cutter thực sự xuyên qua object.

---

## Lỗi 7 — Hai mái chồng quá nhiều

Sau khi Duplicate + Rotate, kiểm tra seam ở giữa.

Nếu có overlap:

```text
G
```

dịch nhẹ hoặc chỉnh geometry.

Sau đó dùng ridge detail để che đường nối.

---

# 54. Checklist thực hành

### Reference & Blockout

- [ ] Reference được đặt đúng orientation.
- [ ] Reference không che viewport.
- [ ] Thân nhà có tỷ lệ gần reference.
- [ ] Silhouette đọc rõ từ góc nhìn chính.
- [ ] Chưa thêm chi tiết khi blockout còn sai.

### Roof

- [ ] Mái có đủ topology để uốn.
- [ ] Proportional Editing tạo độ cong nhẹ.
- [ ] Roof base đã được tách riêng.
- [ ] Hai bên mái cân đối.
- [ ] Không có overlap nghiêm trọng ở ridge.

### Roof Tiles

- [ ] Apply Scale trước khi Bevel/Array.
- [ ] Array tạo đúng số hàng/cột.
- [ ] Các viên ngói không hoàn toàn giống nhau.
- [ ] Random displacement đủ nhẹ.
- [ ] Một số viên được chỉnh thủ công.
- [ ] Ngói được deform theo hình mái.
- [ ] Ngói nhô khỏi roof base một lượng hợp lý.

### Geometry

- [ ] Face Orientation không có normal ngược ở mặt ngoài.
- [ ] Roof base có thickness.
- [ ] Không có geometry xuyên nhau rõ rệt.
- [ ] Smooth không làm mất các cạnh quan trọng.

### Door

- [ ] Cutter có silhouette dạng vòm.
- [ ] Boolean dùng `Difference`.
- [ ] Lỗ cửa xuyên đủ sâu qua tường.
- [ ] Boolean được Apply sau khi kiểm tra.

### Stones

- [ ] Có ít nhất 3–4 biến thể đá.
- [ ] Các viên đá khác kích thước.
- [ ] Cạnh được Bevel.
- [ ] Geometry được biến dạng nhẹ.
- [ ] Đá không được xếp thành pattern quá đều.

---

# 55. Bài thực hành đề xuất

Dựng một ngôi nhà stylized chỉ bằng các primitive.

### Yêu cầu

- 1 thân nhà chính.
- 2 mặt mái đối xứng.
- Ít nhất 30 viên ngói.
- Ngói phải có ít nhất 3 dạng sai lệch khác nhau.
- 1 ridge detail.
- 1 cửa vòm được tạo bằng Boolean.
- Ít nhất 4 biến thể stylized stone.
- Bật Face Orientation để kiểm tra normals.

### Không được

- Sculpt chi tiết.
- Thêm texture/material phức tạp.
- Làm cửa sổ hoặc props trước khi silhouette hoàn chỉnh.

---

# 56. Tiêu chí hoàn thành Part 1

Part 1 được xem là đạt khi từ góc camera chính ta có thể nhận ra ngay:

```text
        Stylized House
              │
     ┌────────┴────────┐
     │                 │
   Mái cong         Ngói lệch nhẹ
     │                 │
     └────────┬────────┘
              │
          Thân nhà
         /         \
     cửa vòm      đá góc
```

Model chưa cần material đẹp.

Điều cần đạt là:

> **Silhouette rõ + tỷ lệ hợp lý + hình học đủ stylized + không có lỗi geometry lớn.**

---

# 57. Ghi nhớ nhanh

```text
Blockout trước
    ↓
Chi tiết sau

Apply Scale
    ↓
Modifier ổn định hơn

Perfect Geometry
    ↓
Random nhẹ + chỉnh tay
    ↓
Stylized Geometry

Ngói phẳng
    ↓
Surface Deform
    ↓
Ngói cong theo mái

Cube
    ↓
Bevel + Deform
    ↓
Stylized Stone

Cube vòm
    ↓
Boolean Difference
    ↓
Door Opening
```

> **Ý tưởng cốt lõi của bài:** dựng một hình khối cơ bản thật chắc trước, sau đó dùng modifier và các sai lệch nhỏ có chủ đích để biến một mô hình đơn giản thành một ngôi nhà stylized giàu tính thủ công.