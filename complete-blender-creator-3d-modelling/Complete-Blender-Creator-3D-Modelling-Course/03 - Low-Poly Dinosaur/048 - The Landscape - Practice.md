# 048 — The Landscape

| Thuộc tính        | Nội dung                                         |
| ----------------- | ------------------------------------------------ |
| **Module**        | Module 03 — Low-Poly Dinosaur                    |
| **Bài học**       | The Landscape                                    |
| **Thời lượng**    | 6:32                                             |
| **Chủ đề chính**  | Tạo địa hình núi đồi low-poly                    |
| **Công cụ chính** | Grid, Sculpt Mode, Grab Brush, Decimate Modifier |

---

## 1. Mục tiêu bài học

Sau bài học này, chúng ta có thể:

* Tạo một mặt địa hình lớn để khủng long đứng lên.
* Phân biệt sự khác nhau giữa **Plane** và **Grid**.
* Sử dụng **Sculpt Mode** để tạo núi, đồi và bề mặt nhấp nhô.
* Dùng **Decimate Modifier** để giảm số lượng polygon.
* Chuyển địa hình mượt thành địa hình góc cạnh theo phong cách low-poly.
* Tạo bản sao dự phòng trước khi áp dụng Modifier.
* Chỉnh sửa địa hình sau khi đã giảm polygon.

---

## 2. Chuẩn bị mô hình khủng long

Trước khi tạo cảnh quan, cần dọn dẹp và bố trí lại scene.

### Các bước thực hiện

1. Ẩn các ảnh tham chiếu vì không còn cần sử dụng.
2. Thu gọn collection chứa ảnh tham chiếu.
3. Nhấn `Tab` để chuyển từ **Edit Mode** về **Object Mode**.
4. Chọn mô hình khủng long.
5. Xoay khủng long 90° quanh trục Z:

```text
R → Z → 90 → Enter
```

Việc xoay mô hình giúp khủng long nằm dọc theo trục X, thuận tiện hơn khi xây dựng cảnh quan và quan sát hệ tọa độ Cartesian.

---

## 3. Tạo mặt địa hình bằng Grid

Thay vì sử dụng một Plane thông thường, bài học sử dụng đối tượng **Grid**.

### Thêm Grid

```text
Shift + A
→ Mesh
→ Grid
```

Trong bảng thiết lập của Grid:

* Đặt số lượng chia theo trục X: `100`
* Đặt số lượng chia theo trục Y: `100`

Grid lúc này có một lượng lớn các mặt để phục vụ quá trình điêu khắc địa hình.

### Đặt Grid vào trung tâm

Nhấn:

```text
Alt + G
```

Lệnh này xóa vị trí dịch chuyển và đưa Grid trở về tâm scene.

### Phóng lớn Grid

```text
S → 30 → Enter
```

Grid được phóng lớn khoảng 30 lần để đủ rộng cho toàn bộ cảnh quan.

---

## 4. Grid khác Plane như thế nào?

| Đối tượng          | Đặc điểm                                                      |
| ------------------ | ------------------------------------------------------------- |
| **Plane**          | Ban đầu chỉ có một mặt với bốn đỉnh                           |
| **Grid**           | Có thể thiết lập sẵn nhiều hàng và cột                        |
| **Grid 100 × 100** | Có đủ mật độ hình học để tạo núi và địa hình bằng Sculpt Mode |

Nếu Grid chưa có đủ polygon, có thể chia nhỏ thêm:

```text
Edit Mode
→ Select All
→ Right Click
→ Subdivide
```

Trong bảng **Number of Cuts**:

* `1 Cut` chia mỗi mặt thành bốn mặt nhỏ.
* Giá trị càng cao thì số polygon tăng càng nhanh.
* Không nên sử dụng số lượng Cut quá lớn nếu mesh đã dày.

---

## 5. Quy trình tổng thể

```text
Tạo Grid 100 × 100
        ↓
Scale Grid lên 30 lần
        ↓
Sculpt địa hình bằng Grab Brush
        ↓
Tạo núi và các vùng nhấp nhô
        ↓
Thêm Decimate Modifier
        ↓
Giảm mạnh số polygon
        ↓
Sao lưu bản gốc
        ↓
Apply Modifier
        ↓
Chỉnh sửa vertex lần cuối
```

---

## 6. Tạo địa hình trong Sculpt Mode

Chuyển sang workspace:

```text
Sculpting
```

Sau đó chọn công cụ:

```text
Grab Brush
```

### Điều chỉnh kích thước Brush

Nhấn:

```text
F
```

Di chuyển chuột để thay đổi bán kính Brush, sau đó nhấp chuột để xác nhận.

### Tạo núi ở hậu cảnh

Sử dụng Grab Brush để kéo phần phía sau của Grid lên, tạo thành các dãy núi.

Khi thao tác:

* Dùng Brush lớn để tạo khối núi tổng thể.
* Kéo nhiều vùng lên với độ cao khác nhau.
* Không cần tạo chi tiết quá nhỏ ở giai đoạn này.
* Tập trung vào hình dáng tổng thể của đường chân trời.

### Tạo đồi quanh khủng long

Tiếp tục dùng Grab Brush để tạo:

* Các đồi thấp.
* Những vùng mặt đất nhấp nhô.
* Độ cao nhẹ quanh vị trí khủng long.
* Sự chuyển tiếp giữa tiền cảnh và hậu cảnh.

---

## 7. Không kéo mép Grid lên quá cao

Khi tạo núi, cần hạn chế tác động lên các cạnh ngoài của Grid.

### Không nên

```text
Mép Grid bị kéo cao
        /\
_______/  \____
```

### Nên giữ

```text
Mép bằng phẳng        Núi ở bên trong
______________      /\   /\
              \____/  \_/  \____
```

Việc giữ các mép tương đối bằng phẳng giúp:

* Địa hình dễ kết nối với các khu vực khác.
* Có thể cắt hoặc sử dụng riêng một phần núi sau này.
* Tránh tạo các bức tường dựng đứng ngoài ý muốn.
* Giữ silhouette của scene sạch hơn.

---

## 8. Vì sao địa hình ban đầu quá mượt?

Grid có khoảng 10.000 mặt nên sau khi Sculpt, bề mặt địa hình trông khá mịn.

Điều này phù hợp với điêu khắc, nhưng chưa phù hợp với phong cách low-poly.

Để tạo các mặt phẳng lớn và góc cạnh, cần giảm số lượng polygon bằng **Decimate Modifier**.

---

## 9. Sử dụng Decimate Modifier

Quay lại workspace:

```text
Layout
```

Chọn đối tượng Grid, sau đó mở:

```text
Modifier Properties
→ Add Modifier
→ Decimate
```

### Thiết lập Ratio

Ban đầu, có thể thử:

```text
Ratio: 0.1
```

Giá trị này giảm số polygon xuống còn khoảng 10% so với mesh ban đầu.

Để tạo phong cách low-poly rõ ràng hơn, giảm tiếp:

```text
Ratio: 0.01
```

Sau khi giảm, địa hình chỉ còn dưới khoảng 200 mặt và xuất hiện các mảng polygon lớn, góc cạnh.

### Ý nghĩa của Ratio

|  Ratio | Kết quả                     |
| -----: | --------------------------- |
|  `1.0` | Giữ gần như toàn bộ polygon |
|  `0.5` | Giữ khoảng 50%              |
|  `0.1` | Giữ khoảng 10%              |
| `0.01` | Giữ khoảng 1%               |

Ratio càng thấp:

* Mesh càng nhẹ.
* Các mặt polygon càng lớn.
* Địa hình càng góc cạnh.
* Chi tiết nhỏ càng dễ bị mất.

---

## 10. Tạo bản sao trước khi Apply Modifier

Áp dụng Modifier là một thao tác mang tính phá hủy vì nó thay đổi cấu trúc mesh thật.

Do đó, nên tạo một bản sao dự phòng.

### Đổi tên đối tượng hiện tại

```text
Landscape
```

### Nhân bản

```text
Shift + D
→ Enter
```

Đổi tên bản sao thành:

```text
Landscape Original
```

### Tạo collection dự phòng

Chuyển bản sao vào collection mới:

```text
M
→ New Collection
→ Spares
```

Sau đó:

* Tắt hiển thị bản sao trong Viewport.
* Tắt hiển thị bản sao khi Render.
* Thu gọn collection `Spares`.

Cấu trúc Outliner gợi ý:

```text
Scene Collection
├── Dinosaur
├── Landscape
└── Spares
    └── Landscape Original
```

---

## 11. Apply Decimate Modifier

Chọn đối tượng `Landscape` đang sử dụng.

Trong bảng Decimate Modifier, chọn:

```text
Apply
```

Trước khi Apply, các polygon thấp chỉ là kết quả tạm thời của Modifier.

Sau khi Apply:

* Cấu trúc polygon thấp trở thành mesh thật.
* Có thể vào Edit Mode để chọn các vertex mới.
* Có thể tiếp tục chỉnh sửa trực tiếp hình dáng của núi.

---

## 12. Chỉnh địa hình sau khi Apply

Vào:

```text
Tab → Edit Mode
```

Chuyển sang:

```text
Vertex Select
```

### Bật X-Ray

Nhấn:

```text
Alt + Z
```

X-Ray giúp chọn được cả các vertex phía trước và phía sau địa hình.

### Bật Proportional Editing

Nhấn:

```text
O
```

Công cụ này giúp một vertex tác động đến các vertex lân cận.

### Chỉnh các đỉnh núi

1. Chọn một hoặc nhiều vertex.
2. Nhấn `G` để di chuyển.
3. Di chuyển chuột để thay đổi vị trí.
4. Cuộn con lăn chuột để thay đổi vùng ảnh hưởng của Proportional Editing.

Có thể sử dụng thao tác này để:

* Kéo một số đỉnh núi cao hơn.
* Làm dãy núi rộng hơn.
* Tạo silhouette bất đối xứng.
* Điều chỉnh các khu vực quá phẳng.
* Tạo cảm giác tự nhiên nhưng vẫn giữ phong cách low-poly.

---

## 13. Bố cục cảnh quan

Một bố cục đơn giản có thể được chia thành ba lớp:

```text
Camera
  │
  ▼
┌───────────────────────────────────────┐
│ Tiền cảnh: mặt đất thấp, tương đối phẳng │
│                                       │
│          Khủng long                   │
│             🦖                        │
│                                       │
│ Trung cảnh: đồi thấp, địa hình nhấp nhô │
│                                       │
│ Hậu cảnh: dãy núi cao, silhouette rõ   │
└───────────────────────────────────────┘
```

### Nguyên tắc bố cục

* Khu vực quanh chân khủng long nên tương đối phẳng.
* Đồi thấp có thể được đặt ở trung cảnh.
* Núi cao nên tập trung ở hậu cảnh.
* Không nên để núi che hoàn toàn silhouette của khủng long.
* Độ cao các ngọn núi nên có sự khác biệt.
* Tránh tạo một dãy núi đối xứng hoàn toàn.

---

## 14. Phím tắt và công cụ quan trọng

| Phím/Công cụ   | Chức năng                                        |
| -------------- | ------------------------------------------------ |
| `Tab`          | Chuyển giữa Object Mode và Edit Mode             |
| `R`, `Z`, `90` | Xoay đối tượng 90° quanh trục Z                  |
| `Shift + A`    | Mở menu thêm đối tượng                           |
| `Alt + G`      | Đưa đối tượng trở về vị trí gốc                  |
| `S`, `30`      | Scale đối tượng lên 30 lần                       |
| `F`            | Điều chỉnh kích thước Sculpt Brush               |
| `Shift + D`    | Nhân bản đối tượng                               |
| `M`            | Chuyển đối tượng sang collection                 |
| `Alt + Z`      | Bật hoặc tắt X-Ray                               |
| `O`            | Bật hoặc tắt Proportional Editing                |
| `G`            | Di chuyển vertex                                 |
| `Mouse Wheel`  | Thay đổi vùng ảnh hưởng của Proportional Editing |
| **Grab Brush** | Kéo và biến dạng bề mặt trong Sculpt Mode        |
| **Decimate**   | Giảm số lượng polygon của mesh                   |

---

## 15. Lỗi thường gặp

### 15.1. Dùng Plane nhưng không Subdivide

Một Plane mặc định chỉ có bốn vertex nên không thể tạo địa hình phức tạp.

**Cách xử lý:**

* Sử dụng Grid có nhiều subdivisions ngay từ đầu.
* Hoặc Subdivide Plane nhiều lần trước khi Sculpt.

---

### 15.2. Grid có quá ít polygon

Khi kéo bằng Grab Brush, mesh bị kéo thành các mảng lớn và thiếu tự nhiên.

**Cách xử lý:**

* Tăng số subdivisions của Grid.
* Bài học sử dụng khoảng `100 × 100`.

---

### 15.3. Grid có quá nhiều polygon sau khi hoàn thành

Mesh giữ nguyên hàng nghìn polygon khiến địa hình quá mượt và nặng.

**Cách xử lý:**

* Thêm Decimate Modifier.
* Giảm Ratio xuống khoảng `0.01`.

---

### 15.4. Ratio quá thấp

Nếu Ratio quá thấp:

* Các đỉnh núi có thể biến dạng mạnh.
* Một số chi tiết quan trọng bị mất.
* Silhouette không còn đúng với bản Sculpt ban đầu.

**Cách xử lý:**

Điều chỉnh Ratio từ từ và quan sát hình dạng tổng thể trước khi Apply.

---

### 15.5. Apply Modifier mà không sao lưu

Sau khi Apply, việc quay lại mesh có độ phân giải cao sẽ khó khăn.

**Cách xử lý:**

* Duplicate đối tượng trước.
* Đổi tên thành `Landscape Original`.
* Đưa vào collection `Spares`.
* Tắt Viewport và Render cho bản dự phòng.

---

### 15.6. Quên Apply Modifier

Khi vào Edit Mode, Blender vẫn hiển thị cấu trúc Grid ban đầu thay vì các polygon low-poly đang thấy trong Object Mode.

**Nguyên nhân:**

Decimate vẫn chỉ đang hoạt động dưới dạng Modifier.

**Cách xử lý:**

Apply Decimate Modifier trước khi chỉnh trực tiếp các polygon đã được giảm.

---

### 15.7. Kéo các mép Grid lên quá cao

Điều này tạo ra các cạnh dựng đứng hoặc khiến địa hình khó kết nối với phần khác.

**Cách xử lý:**

* Tập trung Sculpt ở khu vực bên trong.
* Giữ các mép ngoài tương đối bằng phẳng.
* Sử dụng Brush lớn với chuyển động nhẹ.

---

## 16. Quy trình thực hành chi tiết

### Giai đoạn 1 — Chuẩn bị

* [ ] Ẩn ảnh tham chiếu.
* [ ] Chuyển về Object Mode.
* [ ] Xoay khủng long 90° quanh trục Z.
* [ ] Kiểm tra hướng của khủng long trong scene.

### Giai đoạn 2 — Tạo Grid

* [ ] Thêm `Mesh → Grid`.
* [ ] Đặt subdivisions khoảng `100 × 100`.
* [ ] Đưa Grid về tâm bằng `Alt + G`.
* [ ] Scale Grid lên khoảng 30 lần.

### Giai đoạn 3 — Sculpt địa hình

* [ ] Chuyển sang Sculpting Workspace.
* [ ] Chọn Grab Brush.
* [ ] Dùng `F` để tăng kích thước Brush.
* [ ] Tạo núi ở hậu cảnh.
* [ ] Tạo đồi thấp quanh khủng long.
* [ ] Giữ các cạnh ngoài tương đối bằng phẳng.

### Giai đoạn 4 — Low-poly hóa

* [ ] Quay lại Layout Workspace.
* [ ] Thêm Decimate Modifier.
* [ ] Thử Ratio `0.1`.
* [ ] Giảm xuống khoảng `0.01`.
* [ ] Kiểm tra silhouette của núi.

### Giai đoạn 5 — Sao lưu và Apply

* [ ] Đổi tên đối tượng thành `Landscape`.
* [ ] Nhân bản đối tượng.
* [ ] Đổi tên bản sao thành `Landscape Original`.
* [ ] Chuyển bản sao vào collection `Spares`.
* [ ] Tắt Viewport và Render cho bản sao.
* [ ] Apply Decimate Modifier trên bản đang sử dụng.

### Giai đoạn 6 — Chỉnh sửa cuối

* [ ] Vào Edit Mode.
* [ ] Bật X-Ray nếu cần.
* [ ] Bật Proportional Editing.
* [ ] Điều chỉnh các đỉnh núi.
* [ ] Kiểm tra bố cục tổng thể.
* [ ] Lưu file Blender.

---

## 17. Thử thách thực hành

Sau khi hoàn thành các thao tác chính, hãy tự điều chỉnh cảnh quan:

1. Tạo một ngọn núi chính cao hơn các ngọn còn lại.
2. Tạo các đồi thấp quanh khủng long.
3. Giữ khu vực dưới chân khủng long đủ phẳng.
4. Tạo silhouette núi không đối xứng.
5. Điều chỉnh vertex bằng Proportional Editing.
6. Kiểm tra cảnh quan từ nhiều góc nhìn.
7. Lưu lại file để chuẩn bị cho bài tiếp theo.

---

## 18. Tóm tắt

Trong bài học này, cảnh quan được tạo từ một **Grid có mật độ polygon cao**. Grid được điêu khắc bằng **Grab Brush** trong Sculpt Mode để hình thành núi, đồi và các vùng địa hình nhấp nhô.

Sau khi hoàn thành hình dáng tổng thể, **Decimate Modifier** được sử dụng để giảm mạnh số lượng polygon, biến địa hình mượt thành các mặt phẳng lớn, góc cạnh đặc trưng của phong cách low-poly.

Trước khi Apply Modifier, một bản sao của địa hình được lưu trong collection `Spares`. Sau khi Apply, các vertex low-poly có thể tiếp tục được chỉnh sửa bằng **X-Ray** và **Proportional Editing** để hoàn thiện silhouette của dãy núi.

> **Quy tắc quan trọng:** Sculpt với nhiều polygon để dễ tạo hình, sau đó giảm polygon bằng Decimate để đạt phong cách low-poly.

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
