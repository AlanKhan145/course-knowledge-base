# 013 — Stylized House Modeling Part 2

| Thuộc tính     | Nội dung                                          |
| -------------- | ------------------------------------------------- |
| **Phần**       | 02 — Modeling in Blender                          |
| **Thời lượng** | 7:48                                              |
| **Chủ đề**     | Tạo vòm gạch, cửa gỗ, cửa sổ và chi tiết stylized |

---

## 1. Mục tiêu bài học

Sau bài này, bạn có thể:

* [ ] Tách một phần mesh để tạo **vòm cửa bằng Curve**.
* [ ] Kết hợp **Array + Curve Modifier** để xếp gạch theo đường cong.
* [ ] Biến các viên gạch giống nhau thành hình dạng ngẫu nhiên có kiểm soát.
* [ ] Dựng cửa gỗ từ Cube và tạo cảm giác nhiều tấm ván.
* [ ] Sử dụng **Loop Cut, Extrude, Bevel và Proportional Editing**.
* [ ] Chuẩn bị phần cửa sổ bằng Boolean.
* [ ] Giữ được phong cách stylized thay vì tạo geometry quá đều và máy móc.

---

# 2. Ý tưởng tổng thể

Trong phần này, ngôi nhà được bổ sung ba nhóm chi tiết chính:

```text
Stylized House
│
├── Vòm cửa
│   ├── Tách edge từ tường
│   ├── Convert → Curve
│   ├── Array gạch
│   └── Curve Modifier → uốn theo vòm
│
├── Cửa gỗ
│   ├── Cube
│   ├── Loop Cut
│   ├── Extrude
│   ├── Bevel
│   └── Random deformation
│
└── Cửa sổ
    ├── Cube làm cutter
    └── Boolean tạo opening
```

Điểm quan trọng không phải làm mọi thứ hoàn toàn chính xác, mà là tạo **nhịp điệu không đều có chủ đích** để công trình trông stylized hơn.

---

# 3. Tạo đường vòm cửa

## 3.1. Chọn các cạnh của vòm

Trong **Edit Mode**, chọn toàn bộ các edge tạo thành phần vòm.

Có thể thử:

* `Alt + Click` để chọn edge loop.

Tuy nhiên, sau khi dùng Boolean, topology đôi khi không còn sạch. Khi đó `Alt + Click` có thể chọn sai.

> **Lưu ý:** Boolean có thể làm thay đổi topology và tạo những edge loop không liên tục. Nếu cần, hãy chọn thủ công các cạnh của vòm.

Không chọn phần cạnh nằm phía dưới nếu chỉ cần đường cong phía trên cửa.

---

## 3.2. Tách vòm thành object riêng

Khi các edge đã được chọn:

```text
P → Selection
```

Blender sẽ tách chúng thành một object riêng.

Ta có:

```text
Wall Mesh
   │
   └── P → Selection
            ↓
      Arch Edge Object
```

---

# 4. Chuyển vòm từ Mesh thành Curve

Ở **Object Mode**:

```text
Right Click
→ Convert
→ Curve
```

Sau khi chuyển đổi:

* object không còn được xử lý như mesh thông thường;
* trong Edit Mode, bạn sẽ thao tác với các **control point của Curve**.

Curve này sẽ đóng vai trò như một **đường dẫn để uốn hàng gạch**.

---

# 5. Chuẩn hóa Origin và 3D Cursor

Đây là một bước rất quan trọng để **Curve Modifier hoạt động đúng**.

## 5.1. Đưa Origin vào giữa Curve

Chọn Curve:

```text
Right Click
→ Set Origin
→ Origin to Geometry
```

---

## 5.2. Đặt 3D Cursor tại Origin

Vẫn chọn Curve:

```text
Shift + S
→ Cursor to Selected
```

3D Cursor lúc này nằm tại vị trí Origin của Curve.

---

## 5.3. Đưa viên gạch tới Cursor

Chọn một viên gạch đã tạo trước đó:

```text
Shift + S
→ Selection to Cursor
```

Mục tiêu là để:

```text
Origin Curve
     │
     ├── 3D Cursor
     │
     └── Brick
```

gần như trùng nhau.

> **Nguyên tắc quan trọng:** Object được uốn bằng Curve phải được đặt và định hướng hợp lý so với Origin của Curve. Nếu không, Array/Curve có thể nhảy sang vị trí khó hiểu.

---

# 6. Ẩn các object không cần thiết

Để dễ quan sát:

```text
H
```

để ẩn object đang chọn.

Hiện lại bằng:

```text
Alt + H
```

Có thể sử dụng biểu tượng **Eye** trong Outliner nếu muốn thao tác bằng giao diện.

---

# 7. Tạo hàng gạch bằng Array Modifier

Chọn viên gạch.

Thêm:

```text
Modifier
→ Array
```

Array tạo nhiều bản sao:

```text
[■] → [■][■][■][■][■][■]
```

Điều chỉnh:

* **Count**
* hoặc khoảng cách giữa các viên gạch

cho đến khi chiều dài dãy gạch gần đủ chiều dài của vòm.

---

# 8. Uốn gạch theo vòm bằng Curve Modifier

Sau Array, thêm:

```text
Modifier
→ Curve
```

Chọn Curve vừa tạo làm **Curve Object**.

Modifier stack cơ bản:

```text
Brick
│
├── Array
│     ↓
│  ■ ■ ■ ■ ■ ■ ■
│
└── Curve
      ↓
     ■     ■
   ■         ■
  ■           ■
```

### Thứ tự modifier

Nên giữ:

```text
Array
↓
Curve
```

Không đảo ngược.

Ta cần:

1. tạo nhiều viên gạch;
2. sau đó mới uốn toàn bộ dãy gạch.

---

# 9. Điều chỉnh số lượng viên gạch

Nếu số lượng gạch quá nhiều, vòm sẽ:

* quá dày;
* mất cảm giác stylized;
* tạo quá nhiều chi tiết nhỏ.

Có thể:

* giảm `Array Count`;
* thay đổi khoảng cách;
* hoặc scale viên gạch bằng `S`.

Mục tiêu là tạo nhịp:

```text
Không nên:
■■■■■■■■■■■■■■■■■■■■■■

Nên:
■  ■  ■  ■  ■  ■  ■  ■
```

với kích thước đủ lớn để đọc được silhouette.

---

# 10. Khôi phục ngôi nhà

Sau khi kiểm tra vòm:

```text
Alt + H
```

để hiện lại các object.

Sau đó đặt vòm gạch vào đúng khu vực cửa.

Có thể di chuyển vòm hơi ra ngoài bề mặt tường để tránh:

* z-fighting;
* geometry chồng lên nhau;
* shading không rõ.

---

# 11. Chuyển kết quả modifier thành geometry

Khi đã hài lòng với hình dạng, có thể **Apply modifier** hoặc chuyển kết quả thành mesh thực.

Điều này biến:

```text
1 Brick
+ Array
+ Curve
```

thành:

```text
Nhiều viên gạch mesh thực
```

Sau bước này có thể chỉnh từng viên gạch độc lập.

> Không nên Apply quá sớm. Hãy giữ phiên bản modifier chưa Apply cho tới khi tỷ lệ và hình dạng của vòm đã ổn định.

---

# 12. Làm các viên gạch bớt đều

Một vòm mà viên nào cũng giống hệt nhau thường quá "CG".

Mục tiêu tiếp theo là tạo:

> **Controlled Randomness — ngẫu nhiên có kiểm soát.**

Ví dụ:

```text
Quá đều
■ ■ ■ ■ ■ ■ ■

Stylized
■  ▰ ■ ▪ ▰ ■ ▪
```

---

## 12.1. Chỉnh từng island

Trong Edit Mode, có thể chọn từng phần geometry bằng:

```text
L
```

khi con trỏ đang nằm trên một viên gạch.

Sau đó:

* kéo viên này ra ngoài một chút;
* đẩy viên khác vào trong;
* scale nhẹ một vài viên.

Không nên biến dạng quá mạnh.

---

# 13. Random Select

Có thể dùng lựa chọn ngẫu nhiên để tăng tốc.

Chọn một số vertex/face ngẫu nhiên rồi:

```text
G
```

dịch nhẹ chúng.

Hoặc:

```text
S
```

scale nhẹ.

Ý tưởng:

```text
Random Selection
      ↓
chọn một số phần
      ↓
G / S rất nhẹ
      ↓
irregular geometry
```

Nếu biến dạng quá mạnh, giảm mức dịch chuyển hoặc scale.

---

# 14. Individual Origins

Khi cần scale nhiều viên gạch nhưng muốn mỗi viên tự scale quanh tâm của chính nó, thay **Pivot Point** thành:

```text
Individual Origins
```

So sánh:

### Median Point

```text
■ ■ ■ ■
   ↓
scale quanh một tâm chung
```

### Individual Origins

```text
■   ■   ■   ■
↓   ↓   ↓   ↓
mỗi viên scale riêng
```

Đối với chi tiết stylized dạng module, **Individual Origins rất hữu ích**.

---

# 15. Kết quả vòm gạch

Vòm hoàn chỉnh nên có:

* kích thước viên gạch tương đối nhất quán;
* nhưng không hoàn toàn giống nhau;
* một số viên nhô ra nhẹ;
* khoảng cách có độ biến thiên nhỏ;
* silhouette vẫn rõ.

```text
             ▰
        ▰         ■
     ■               ▰
   ▰                   ■
  ■                     ▰
```

Không cần cố làm méo từng viên quá nhiều.

**Stylization ≠ Random toàn bộ.**

---

# 16. Dựng cửa gỗ

Phần tiếp theo là tạo cánh cửa.

Thay vì cố tái sử dụng geometry phức tạp đang có, cách đơn giản hơn là:

```text
Shift + A
→ Mesh
→ Cube
```

Sau đó scale Cube theo kích thước cửa.

---

# 17. Điều chỉnh tỷ lệ cửa

Scale theo:

* chiều rộng;
* chiều cao;
* chiều dày.

Ví dụ:

```text
Front
┌───────────┐
│           │
│           │
│           │
│           │
└───────────┘

Side
│█│
```

Cửa nên tương đối mỏng.

---

# 18. Tạo các tấm ván

Trong Edit Mode, thêm nhiều:

```text
Ctrl + R
```

— Loop Cut.

Khoảng **5 tấm ván** là đủ cho thiết kế này.

Ví dụ:

```text
┌──┬──┬──┬──┬──┐
│  │  │  │  │  │
│  │  │  │  │  │
│  │  │  │  │  │
└──┴──┴──┴──┴──┘
```

Không cần chia quá nhiều.

---

# 19. Làm thẳng Loop Cut

Nếu đường cắt bị lệch, chọn các vertex của hàng đó rồi:

```text
S
→ Z
→ 0
```

hoặc trục tương ứng với orientation của object.

Công thức:

```text
S + Axis + 0
```

có nghĩa là ép toàn bộ điểm về cùng một tọa độ trên trục đó.

> Nếu Proportional Editing đang bật, hãy tắt bằng `O` trước khi thực hiện thao tác này.

---

# 20. Tạo khe giữa các tấm gỗ

Chọn các Face hoặc Edge tương ứng rồi sử dụng Extrude để tạo độ nổi/lõm.

Ví dụ:

```text
Mặt cửa phẳng
████████████████

↓ Extrude

███▌███▌███▌███
```

Các khe không cần sâu.

Chỉ cần đủ để ánh sáng tạo bóng nhỏ giữa các tấm ván.

---

# 21. Bevel cạnh

Chọn các edge cần làm mềm:

```text
Ctrl + B
```

Bevel nhỏ giúp cạnh bắt sáng tốt hơn.

```text
Cạnh cứng:

┌──────
│

Bevel:

 ╭─────
╱
```

### Nguyên tắc

Bevel nên:

* nhỏ;
* nhất quán;
* không làm mất silhouette.

---

# 22. Tạo các tấm gỗ không đều

Cửa gỗ stylized sẽ đẹp hơn nếu các plank không hoàn toàn thẳng.

Có thể:

1. thêm một số edge ngang;
2. chọn một vài vertex;
3. dịch chúng sang trái/phải;
4. hoặc đẩy nhẹ ra/vào.

Ví dụ:

```text
Quá đều
│ │ │ │ │
│ │ │ │ │
│ │ │ │ │

Stylized
│ │╲│ │ │
│╱│ │ │╲│
│ │ │╲│ │
```

Biến dạng chỉ nên rất nhẹ.

---

# 23. Proportional Editing

Bài học tiếp tục sử dụng **Proportional Editing** khá nhiều.

Bật/tắt:

```text
O
```

Sau khi:

```text
G / S / R
```

dùng **Mouse Wheel** để thay đổi bán kính ảnh hưởng.

```text
         điểm chọn
            ●
          / | \
        •   •   •
      •           •

      influence radius
```

Nó đặc biệt hữu ích để:

* uốn nhẹ bề mặt;
* tạo plank không đều;
* phá độ thẳng tuyệt đối;
* nhưng vẫn giữ deformation mượt.

---

# 24. Shade Smooth

Sau khi hình dạng ổn:

```text
Right Click
→ Shade Smooth
```

Điều này có thể giúp bề mặt trông mềm hơn.

Tuy nhiên với hard-surface/stylized asset, phải kiểm tra xem cạnh nào thực sự cần giữ sắc.

Nếu Shade Smooth gây lỗi shading, cần xem lại:

* normals;
* topology;
* bevel;
* Auto Smooth / smoothing settings tùy phiên bản Blender.

---

# 25. Tạo phần khối phẳng tiếp theo

Một số chi tiết kiến trúc đơn giản không cần topology phức tạp.

Có thể tiếp tục:

```text
Shift + A
→ Cube
→ Scale
```

để dựng nhanh các phần:

* khung;
* panel;
* mặt phẳng trang trí;
* cửa/window backing.

Đây là tư duy quan trọng khi modeling:

> **Nếu một chi tiết có thể tạo bằng primitive đơn giản, không cần cố ép mesh hiện tại làm tất cả mọi thứ.**

---

# 26. Chuẩn bị cửa sổ bằng Boolean

Để tạo opening cho cửa sổ:

1. thêm một `Cube`;
2. scale theo kích thước cửa sổ;
3. cho Cube xuyên qua tường;
4. chọn tường;
5. thêm **Boolean Modifier**;
6. sử dụng Cube làm operand;
7. chọn `Difference`.

Sơ đồ:

```text
Wall
████████████████

+

Boolean Cutter
      ████
      ████

↓

Boolean Difference

█████      █████
█████      █████
████████████████
```

---

# 27. Boolean và topology

Boolean rất nhanh nhưng phải sử dụng cẩn thận.

Sau Boolean có thể xuất hiện:

* n-gon lớn;
* edge loop bị ngắt;
* shading artifact;
* topology khó chỉnh sửa.

Vì vậy nên giữ workflow:

```text
Base Mesh
   ↓
Boolean Modifier
   ↓
Kiểm tra shading
   ↓
Chỉnh cutter
   ↓
Chỉ Apply khi cần
```

---

# 28. Modifier stack gợi ý

Đối với **vòm gạch**:

```text
Brick
│
├── Array
│
└── Curve
```

Đối với **tường có cửa/cửa sổ**:

```text
Wall
│
├── Boolean — Door Opening
├── Boolean — Window Opening
└── Bevel / smoothing nếu cần
```

Không nên Apply toàn bộ modifier ngay khi vừa tạo.

---

# 29. Tư duy stylized trong bài này

Một chi tiết stylized tốt thường nằm giữa hai thái cực:

```text
Quá chính xác
     ↓
máy móc / nhàm chán

        ← Stylized →

Quá ngẫu nhiên
     ↓
lộn xộn / mất thiết kế
```

Công thức có thể hiểu là:

> **Stylized = Form rõ ràng + Exaggeration nhẹ + Controlled Randomness**

Ví dụ với vòm gạch:

* hình dạng tổng thể phải rõ;
* kích thước gạch gần tương đương;
* chỉ một số viên lệch;
* không cần mỗi viên có hình dạng hoàn toàn khác.

---

# 30. Workflow hoàn chỉnh của bài

```text
VÒM CỬA
│
├── Chọn edge vòm
├── P → Selection
├── Convert → Curve
├── Origin to Geometry
├── Shift+S → Cursor to Selected
├── Đưa brick tới Cursor
├── Array
├── Curve Modifier
├── Điều chỉnh scale/count
├── Apply khi đã ổn
└── Random deformation nhẹ
        ↓
      Arch Done


CỬA GỖ
│
├── Add Cube
├── Scale thành cửa
├── Ctrl+R chia plank
├── Extrude
├── Ctrl+B Bevel
├── Random vertex offset
├── Proportional Editing
└── Shade Smooth / kiểm tra normals
        ↓
      Door Done


CỬA SỔ
│
├── Add Cube cutter
├── Scale
├── Boolean Difference
└── Kiểm tra topology/shading
```

---

# 31. Các phím tắt quan trọng

| Phím           | Chức năng                        |
| -------------- | -------------------------------- |
| `Alt + Click`  | Chọn edge loop                   |
| `P`            | Separate                         |
| `Shift + S`    | Snap menu                        |
| `H`            | Hide                             |
| `Alt + H`      | Unhide                           |
| `L`            | Select Linked                    |
| `S`            | Scale                            |
| `G`            | Move                             |
| `Ctrl + R`     | Loop Cut                         |
| `Ctrl + B`     | Bevel                            |
| `O`            | Proportional Editing             |
| `Ctrl + A`     | Apply transforms                 |
| `S → Axis → 0` | Làm thẳng các điểm theo một trục |

---

# 32. Các lỗi thường gặp

### ❌ Array hoạt động nhưng gạch không chạy đúng theo Curve

Kiểm tra:

* Origin;
* vị trí của brick;
* orientation;
* transform chưa Apply;
* Deform Axis trong Curve Modifier.

---

### ❌ Gạch bị xoay hoặc méo bất thường

Có thể do transform chưa được chuẩn hóa.

Thử:

```text
Ctrl + A
→ Rotation & Scale
```

trước khi chỉnh modifier.

---

### ❌ Curve làm object nhảy sang nơi khác

Nguyên nhân thường là:

```text
Object Origin ≠ Curve Origin
```

hoặc object đang cách quá xa vị trí mà Curve Modifier mong đợi.

---

### ❌ Random làm vòm quá lộn xộn

Giảm:

* khoảng cách dịch chuyển;
* scale variation;
* số phần tử được random.

Stylized cần **ngẫu nhiên nhỏ**, không phải phá toàn bộ cấu trúc.

---

### ❌ Proportional Editing làm nhiều vertex di chuyển ngoài ý muốn

Kiểm tra `O`.

Sau đó dùng Mouse Wheel để giảm bán kính influence.

---

### ❌ Boolean tạo shading artifact

Kiểm tra:

* cutter có thực sự xuyên hết tường không;
* mặt trùng nhau;
* normals;
* scale của object;
* topology sau Boolean.

Không cần Apply Boolean ngay.

---

# 33. Checklist cuối bài

## Vòm gạch

* [ ] Edge của vòm được tách thành object riêng.
* [ ] Đã convert object thành Curve.
* [ ] Origin của Curve được đặt hợp lý.
* [ ] Brick được đặt đúng tương quan với Curve.
* [ ] `Array` nằm trước `Curve Modifier`.
* [ ] Số lượng gạch phù hợp với silhouette.
* [ ] Gạch có variation nhẹ nhưng không quá hỗn loạn.

## Cửa gỗ

* [ ] Cửa có tỷ lệ phù hợp với công trình.
* [ ] Các plank đọc rõ ở khoảng cách camera chính.
* [ ] Bevel đủ nhỏ để bắt sáng.
* [ ] Các tấm gỗ có variation nhẹ.
* [ ] Proportional Editing không gây biến dạng ngoài ý muốn.

## Cửa sổ và Boolean

* [ ] Cutter xuyên hoàn toàn qua tường.
* [ ] Boolean tạo opening sạch.
* [ ] Không có shading artifact rõ rệt.
* [ ] Modifier chưa bị Apply quá sớm.

## Tổng thể

* [ ] Cửa và cửa sổ cùng hệ tỷ lệ với ngôi nhà.
* [ ] Modifier stack được sắp xếp hợp lý.
* [ ] Các chi tiết lặp không quá đều.
* [ ] Silhouette tổng thể vẫn quan trọng hơn chi tiết nhỏ.
* [ ] Phong cách stylized được giữ nhất quán.

---

## 34. Ghi nhớ nhanh

> **Array tạo repetition → Curve tạo hình vòm → Random nhẹ phá sự hoàn hảo → Bevel bắt sáng → Boolean tạo opening.**

Đây là workflow rất hữu ích không chỉ cho ngôi nhà này mà còn có thể áp dụng cho **vòm đá, cầu gạch, hàng rào cong, mái ngói, tường đá và nhiều modular asset stylized khác**.

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
