# 079 — The Modifier Stack

| Thuộc tính       | Nội dung                                               |
| ---------------- | ------------------------------------------------------ |
| **Module**       | Module 05 — Rigging & Animation                        |
| **Bài học**      | The Modifier Stack                                     |
| **Thời lượng**   | 8:54                                                   |
| **Chủ đề chính** | Thứ tự Modifier Stack và Subdivision Surface Modelling |

---

## 1. Mục tiêu bài học

Sau bài học này, bạn sẽ:

* Hiểu cách Blender xử lý các modifier theo thứ tự từ trên xuống dưới.
* Biết tại sao thứ tự giữa `Mirror` và `Subdivision Surface` ảnh hưởng đến kết quả.
* Tách phần màn hình TV thành một object riêng.
* Điều chỉnh topology để kiểm soát độ cong và độ sắc của bề mặt.
* Sử dụng inset và loop cut để khắc phục hiện tượng bề mặt bị gợn.
* Hoàn thiện màn hình và các núm điều chỉnh của chiếc TV.

---

## 2. Modifier Stack là gì?

**Modifier Stack** là danh sách các modifier được áp dụng lên một object.

Blender xử lý các modifier theo thứ tự:

```text
Mesh gốc
   ↓
Modifier ở trên cùng
   ↓
Modifier tiếp theo
   ↓
Modifier cuối cùng
   ↓
Kết quả hiển thị
```

Mỗi modifier nhận kết quả từ modifier nằm phía trên làm dữ liệu đầu vào.

Vì vậy:

> Cùng sử dụng một nhóm modifier nhưng thay đổi thứ tự của chúng có thể tạo ra kết quả hình học khác nhau.

---

## 3. Tách màn hình khỏi thân TV

### 3.1. Đổi tên object

Chọn object TV và đổi tên thành:

```text
TV
```

Việc đặt tên rõ ràng giúp quản lý scene dễ dàng hơn khi bắt đầu thêm nhiều object.

---

### 3.2. Chọn các mặt của màn hình

1. Chọn TV.
2. Nhấn `Tab` để vào **Edit Mode**.
3. Nhấn `3` để chuyển sang **Face Select**.
4. Chọn các mặt tạo thành khu vực màn hình.

Có thể dùng `I` để inset trực tiếp phần màn hình, nhưng cách này khiến màn hình vẫn thuộc cùng một mesh với thân TV.

Trong bài học, màn hình được tách thành một object riêng để:

* Có đường viền sắc nét hơn.
* Dễ tạo độ cong cho màn hình.
* Dễ gán material và texture sau này.
* Dễ chỉnh sửa độc lập với thân TV.

---

### 3.3. Tách màn hình

Sau khi chọn các mặt màn hình:

```text
P → Selection
```

Blender sẽ tạo một object mới từ các mặt đã chọn.

Quay lại **Object Mode**, chọn object vừa tách và đổi tên thành:

```text
Screen
```

---

## 4. Modifier được giữ lại khi tách object

Khi một phần mesh được tách bằng `P → Selection`, object mới vẫn giữ lại các modifier của object ban đầu.

Do đó, object `Screen` vẫn có:

* `Subdivision Surface`
* `Mirror`

Đây là điều cần lưu ý vì object mới có thể gặp lỗi ở đường nối trung tâm nếu thứ tự modifier chưa phù hợp.

---

## 5. Thứ tự giữa Mirror và Subdivision Surface

Ban đầu, Modifier Stack có thể được sắp xếp như sau:

```text
Subdivision Surface
Mirror
```

Trong trường hợp này:

1. Blender làm mượt một nửa object trước.
2. Sau đó mới sao chép kết quả sang phía đối diện.

Điều này có thể tạo ra:

* Đường nối bất thường ở chính giữa.
* Khe nhỏ giữa hai nửa.
* Bề mặt bị gấp hoặc biến dạng.
* Các lỗi shading tại trục đối xứng.

### Thứ tự phù hợp hơn

Di chuyển `Mirror` lên trên `Subdivision Surface`:

```text
Mirror
Subdivision Surface
```

Quy trình xử lý lúc này là:

```text
Một nửa mesh
    ↓
Mirror tạo thành object hoàn chỉnh
    ↓
Subdivision Surface làm mượt toàn bộ object
```

Khi đó, Subdivision Surface tính toán cả hai nửa như một hình dạng hoàn chỉnh, giúp đường nối ở giữa mượt hơn.

---

## 6. Minh họa thứ tự Modifier Stack

### Trường hợp 1: Subdivision trước Mirror

```text
Nửa mesh ban đầu
       ↓
Subdivision Surface
       ↓
Nửa mesh được làm mượt
       ↓
Mirror
       ↓
Hai nửa được ghép lại
```

Rủi ro:

```text
Đường nối giữa có thể bị gợn hoặc không liên tục
```

### Trường hợp 2: Mirror trước Subdivision

```text
Nửa mesh ban đầu
       ↓
Mirror
       ↓
Mesh đối xứng hoàn chỉnh
       ↓
Subdivision Surface
       ↓
Toàn bộ hình dạng được làm mượt đồng đều
```

Đây là thứ tự phù hợp cho chiếc TV trong bài học.

---

## 7. Sửa Modifier Stack cho màn hình và TV

Thực hiện trên cả hai object:

* `Screen`
* `TV`

Kéo `Mirror` lên phía trên `Subdivision Surface`.

Modifier Stack cuối cùng:

```text
1. Mirror
2. Subdivision Surface
```

Sau khi thay đổi thứ tự, các lỗi bất thường ở phần giữa của TV và màn hình sẽ biến mất hoặc giảm đáng kể.

---

## 8. Tạo màn hình TV cong kiểu retro

Chọn object `Screen`:

1. Nhấn `Tab` để vào **Edit Mode**.
2. Chọn mặt chính ở giữa màn hình.
3. Nhấn:

```text
G → Y
```

Kéo mặt ra phía trước để tạo độ phồng.

Kết quả là màn hình có dạng cong giống các TV CRT cổ điển.

Nếu màn hình đang nằm quá sâu trong thân TV, tiếp tục dùng:

```text
G → Y
```

để đưa toàn bộ màn hình tiến nhẹ ra phía trước.

### Nguyên tắc

```text
Kéo nhẹ → màn hình cong vừa phải
Kéo nhiều → màn hình phồng mạnh
```

Nên quan sát object từ nhiều góc để tránh đẩy màn hình ra quá xa.

---

## 9. Làm mượt bề mặt

Chọn cả `TV` và `Screen`, sau đó:

```text
Right Click → Shade Smooth
```

`Shade Smooth` giúp bề mặt:

* Bớt góc cạnh.
* Chuyển tiếp ánh sáng mềm hơn.
* Hiển thị kết quả Subdivision Surface đẹp hơn.

> Shade Smooth chỉ thay đổi cách Blender nội suy ánh sáng trên bề mặt, không trực tiếp tạo thêm hình học.

---

## 10. Tạo núm điều chỉnh cho TV

### 10.1. Đặt 3D Cursor

Sử dụng:

```text
Shift + Right Click
```

để đặt **3D Cursor** tại vị trí gần phía dưới màn hình TV.

---

### 10.2. Thêm hình trụ

Thêm một Cylinder:

```text
Shift + A
→ Mesh
→ Cylinder
```

Giữ giá trị mặc định:

```text
Vertices: 32
```

Do chiếc TV hướng tới phong cách mượt và nhiều chi tiết hơn, số lượng 32 đỉnh phù hợp để tạo núm xoay tròn.

---

### 10.3. Đặt hình trụ đúng hướng

Thu nhỏ cylinder:

```text
S
```

Xoay cylinder:

```text
R → X → 90
```

Di chuyển cylinder đến vị trí núm điều chỉnh ở mặt trước TV.

Có thể để cylinder xuyên nhẹ vào thân TV. Các object không nhất thiết phải nối topology với nhau nếu phần giao nhau không nhìn thấy trong sản phẩm cuối.

---

## 11. Điều chỉnh phần đáy của TV

Phần đáy TV ban đầu có thể cong xuống quá nhiều, khiến núm điều chỉnh khó đặt sát vào thân máy.

Độ cong này được kiểm soát bởi vị trí của các edge loop xung quanh.

Có hai phương pháp chính để điều chỉnh.

---

### 11.1. Di chuyển edge loop hiện có

1. Vào **Edit Mode**.
2. Chuyển sang **Edge Select** bằng phím `2`.
3. Chọn edge loop.
4. Nhấn:

```text
G → G
```

để dùng **Edge Slide**.

Di chuyển edge loop xuống dưới có thể làm khu vực phía trước TV phẳng hơn.

---

### 11.2. Thêm loop cut mới

Sử dụng:

```text
Ctrl + R
```

Thêm một loop cut gần khu vực cần giữ phẳng.

Nguyên tắc của Subdivision Surface:

```text
Các edge loop càng gần nhau
→ bề mặt càng sắc và ít cong

Các edge loop càng xa nhau
→ bề mặt càng mềm và cong nhiều
```

Do đó, thêm loop cut gần phần đáy giúp:

* Giữ mặt trước phẳng hơn.
* Kiểm soát vị trí bắt đầu của đường cong.
* Tạo không gian phù hợp cho các núm điều chỉnh.

---

## 12. Dùng Edge Slide để kiểm soát độ cong

Sau khi thêm hoặc chọn edge loop, sử dụng:

```text
G → G
```

để trượt edge loop dọc theo bề mặt.

Có thể di chuyển nhiều edge loop để điều chỉnh đường cong một cách từ từ.

Ví dụ:

```text
Edge loop gần cạnh
→ cạnh sắc hơn

Edge loop cách xa cạnh
→ cạnh tròn và mềm hơn
```

Khi điều chỉnh, nên quan sát từ:

* Front View
* Side View
* Perspective View

để đảm bảo hình dạng không bị biến dạng ngoài ý muốn.

---

## 13. Thu hẹp khoảng trống phía dưới màn hình

Nếu khu vực đặt núm quá rộng, có thể nâng phần đáy TV lên.

Quy trình:

1. Vào **Wireframe Mode**.
2. Chọn toàn bộ các vertex ở phần đáy.
3. Nhấn:

```text
G → Z
```

4. Di chuyển chúng lên một khoảng nhỏ.
5. Quay lại **Solid View**.
6. Điều chỉnh vị trí của núm xoay cho phù hợp.

Sau khi chỉnh sửa, kiểm tra TV từ nhiều góc để đảm bảo:

* Thân TV không bị méo.
* Hai bên vẫn đối xứng.
* Mặt trước không bị lõm hoặc gợn.
* Núm xoay không nổi quá xa hoặc chìm quá sâu.

---

## 14. Thêm Subdivision Surface cho núm xoay

Chọn cylinder và nhấn:

```text
Ctrl + 3
```

Blender sẽ thêm `Subdivision Surface` với mức Viewport là `3`.

Tuy nhiên, cylinder lúc này có thể xuất hiện:

* Bề mặt gợn.
* Phần nắp bị phồng.
* Các cạnh bị méo.
* Shading không đều.

Nguyên nhân là hai mặt đầu của cylinder là các **N-gon** lớn.

---

## 15. Vì sao N-gon gây lỗi với Subdivision Surface?

Subdivision Surface hoạt động tốt nhất với các mặt tứ giác:

```text
Quad = mặt có 4 cạnh
```

Trong khi đó, mặt đầu của cylinder thường là:

```text
N-gon = mặt có nhiều hơn 4 cạnh
```

Một N-gon lớn được nối với nhiều cạnh xung quanh. Khi subdivide, Blender phải tự nội suy bề mặt, dễ dẫn đến kết quả không đều.

```text
N-gon lớn
   ↓
Subdivision Surface
   ↓
Nội suy không ổn định
   ↓
Bề mặt bị gợn hoặc phồng
```

---

## 16. Khắc phục bề mặt cylinder bằng Inset

### 16.1. Inset mặt phía trước

1. Vào **Edit Mode**.
2. Nhấn `3` để chuyển sang **Face Select**.
3. Chọn mặt phía trước của cylinder.
4. Nhấn:

```text
I
```

5. Tạo một vòng inset nhỏ.

Inset tạo ra một vòng các mặt quad xung quanh N-gon.

Cấu trúc mới:

```text
Mặt N-gon ở giữa
      +
Vòng quad bao quanh
```

Vòng quad này giúp Subdivision Surface kiểm soát phần bo tròn tốt hơn.

---

### 16.2. Inset mặt phía sau

Có thể dùng **Local View** để dễ thao tác:

```text
/
```

Sau đó:

1. Chọn mặt phía sau cylinder.
2. Nhấn `I`.
3. Tạo inset tương tự mặt phía trước.

Nhấn `/` lần nữa để thoát Local View.

---

## 17. Thêm nhiều inset để giảm hiện tượng gợn

Một inset có thể chưa đủ để loại bỏ hoàn toàn bề mặt gợn.

Có thể tạo thêm một inset nữa:

```text
I → kéo vào trong
```

Mỗi vòng inset hoạt động như một vòng đỡ:

```text
Mặt trung tâm
    ↓
Inset thứ nhất
    ↓
Inset thứ hai
    ↓
Các mặt bên của cylinder
```

Khi có nhiều vòng quad phẳng, Blender có thêm thông tin để nội suy bề mặt ổn định hơn.

Kết quả:

* Phần đầu cylinder phẳng hơn.
* Viền được bo tròn đều hơn.
* Giảm hiện tượng lồi lõm.
* Shade Smooth hoạt động đẹp hơn.

---

## 18. Làm sắc cạnh của núm xoay

Sau khi thêm Subdivision Surface, cạnh bên của cylinder có thể quá tròn.

Để làm cạnh sắc hơn, thêm loop cut bằng:

```text
Ctrl + R
```

Đặt loop cut gần cạnh phía trước.

Có thể thêm một loop cut khác gần cạnh phía sau.

Sơ đồ:

```text
Cạnh cylinder
     │
     │  Loop cut gần cạnh
     ▼
Cạnh sắc hơn
```

Dùng:

```text
G → G
```

để thay đổi vị trí loop cut.

### Mối quan hệ giữa khoảng cách và độ sắc

| Vị trí loop cut    | Kết quả          |
| ------------------ | ---------------- |
| Rất gần cạnh       | Cạnh rất sắc     |
| Cách cạnh vừa phải | Cạnh bo nhẹ      |
| Xa cạnh            | Cạnh mềm và tròn |

---

## 19. Tạo núm xoay thứ hai

Sau khi hoàn thiện núm đầu tiên:

```text
Shift + D → X
```

để nhân bản và di chuyển núm sang ngang.

Thu nhỏ núm thứ hai:

```text
S
```

Có thể tạo hai núm với kích thước khác nhau để chiếc TV có thiết kế thú vị hơn.

Ví dụ:

```text
Núm lớn  → chọn kênh
Núm nhỏ  → điều chỉnh âm lượng
```

---

## 20. Quy trình hoàn thiện chiếc TV

```text
Tách màn hình
      ↓
Đưa Mirror lên trên Subdivision Surface
      ↓
Tạo độ cong cho màn hình
      ↓
Shade Smooth
      ↓
Thêm cylinder làm núm xoay
      ↓
Điều chỉnh topology phần đáy TV
      ↓
Thêm Subdivision Surface cho cylinder
      ↓
Inset hai mặt đầu để giảm gợn
      ↓
Thêm loop cut để làm sắc cạnh
      ↓
Nhân bản núm thứ hai
```

---

## 21. Phím tắt và công cụ quan trọng

| Phím/Công cụ                 | Chức năng                                 |
| ---------------------------- | ----------------------------------------- |
| `Tab`                        | Chuyển giữa Object Mode và Edit Mode      |
| `1`                          | Vertex Select trong Edit Mode             |
| `2`                          | Edge Select trong Edit Mode               |
| `3`                          | Face Select trong Edit Mode               |
| `P → Selection`              | Tách phần mesh đang chọn thành object mới |
| `I`                          | Inset Face                                |
| `G → Y`                      | Di chuyển theo trục Y                     |
| `G → Z`                      | Di chuyển theo trục Z                     |
| `G → G`                      | Edge Slide                                |
| `Ctrl + R`                   | Thêm Loop Cut                             |
| `Ctrl + 3`                   | Thêm Subdivision Surface mức 3            |
| `Shift + A`                  | Mở menu Add                               |
| `Shift + D`                  | Nhân bản object                           |
| `R → X → 90`                 | Xoay 90° quanh trục X                     |
| `/`                          | Bật hoặc tắt Local View                   |
| `Right Click → Shade Smooth` | Làm mượt shading                          |
| Kéo modifier lên hoặc xuống  | Thay đổi thứ tự Modifier Stack            |
| Icon màn hình trên modifier  | Bật hoặc tắt modifier trong Viewport      |
| Icon camera trên modifier    | Bật hoặc tắt modifier khi Render          |

---

## 22. Lưu ý quan trọng

### 22.1. Modifier Stack chạy từ trên xuống

Modifier phía dưới luôn nhận kết quả của modifier phía trên.

```text
Modifier 1
    ↓
Modifier 2
    ↓
Modifier 3
```

Do đó, thay đổi thứ tự modifier cũng thay đổi kết quả.

---

### 22.2. Mirror thường nên đặt trước Subdivision Surface

Đối với object đối xứng:

```text
Mirror
Subdivision Surface
```

thường giúp đường nối chính giữa được làm mượt đồng đều.

Tuy nhiên, thứ tự phù hợp còn phụ thuộc vào hiệu ứng mong muốn và cấu trúc topology của từng object.

---

### 22.3. Không nên lạm dụng N-gon

N-gon không phải lúc nào cũng gây lỗi, nhưng có thể tạo ra kết quả khó đoán khi:

* Dùng Subdivision Surface.
* Bề mặt cần uốn cong.
* Object sẽ được deform hoặc rig.
* N-gon không nằm trên một mặt phẳng hoàn toàn.

---

### 22.4. Loop cut là công cụ kiểm soát Subdivision

Subdivision Surface không tự biết cạnh nào cần sắc hoặc mềm.

Người dựng hình phải cung cấp topology phù hợp bằng:

* Loop cut.
* Inset.
* Support loop.
* Khoảng cách giữa các edge loop.

---

### 22.5. Không cần Apply modifier trong bài này

Các modifier vẫn có thể được giữ ở trạng thái **non-destructive** để tiếp tục chỉnh sửa.

Chỉ nên Apply modifier khi thực sự cần chuyển kết quả thành mesh thật, vì sau khi Apply:

* Không thể điều chỉnh tham số modifier như trước.
* Số lượng vertex và face có thể tăng mạnh.
* Việc chỉnh sửa topology trở nên phức tạp hơn.

> `Ctrl + A` trong Object Mode dùng để Apply Transform như Location, Rotation và Scale; không phải phím tắt để Apply modifier.

---

## 23. Lỗi thường gặp

### Lỗi 1: Có đường gấp ở chính giữa TV

**Nguyên nhân:** `Subdivision Surface` nằm phía trên `Mirror`.

**Khắc phục:**

```text
Mirror
Subdivision Surface
```

---

### Lỗi 2: Màn hình vẫn dính vào thân TV

**Nguyên nhân:** Chưa tách các mặt màn hình.

**Khắc phục:**

```text
Chọn mặt màn hình
→ P
→ Selection
```

---

### Lỗi 3: Núm xoay bị gợn ở hai đầu

**Nguyên nhân:** Mặt đầu cylinder là N-gon lớn.

**Khắc phục:**

* Inset mặt trước.
* Inset mặt sau.
* Có thể thêm một vòng inset thứ hai.

---

### Lỗi 4: Cạnh núm quá tròn

**Nguyên nhân:** Không có support loop gần cạnh.

**Khắc phục:**

```text
Ctrl + R
```

Thêm loop cut gần cạnh cần làm sắc.

---

### Lỗi 5: Phần đáy TV cong quá nhiều

**Nguyên nhân:** Các edge loop kiểm soát nằm quá xa khu vực cần giữ phẳng.

**Khắc phục:**

* Thêm loop cut.
* Dùng `G → G` để Edge Slide.
* Điều chỉnh vị trí các vertex ở phần đáy.

---

### Lỗi 6: Object vẫn trông góc cạnh dù đã subdivide

**Nguyên nhân:** Chưa bật Shade Smooth.

**Khắc phục:**

```text
Right Click → Shade Smooth
```

---

## 24. Bài tập thực hành

### Bài tập 1: Sửa Modifier Stack

Trên cả `TV` và `Screen`:

* Đưa `Mirror` lên trên.
* Đặt `Subdivision Surface` phía dưới.
* So sánh kết quả trước và sau khi đổi thứ tự.

---

### Bài tập 2: Tạo màn hình cong

* Chọn mặt giữa của màn hình.
* Dùng `G → Y`.
* Tạo màn hình cong kiểu retro.
* Kiểm tra từ góc nhìn bên cạnh.

---

### Bài tập 3: Điều chỉnh thân TV

* Thêm hoặc di chuyển edge loop.
* Làm phẳng khu vực đặt núm xoay.
* Giữ lại đường cong mềm ở phần đáy.

---

### Bài tập 4: Hoàn thiện núm xoay

* Thêm cylinder 32 vertices.
* Thêm Subdivision Surface mức 3.
* Inset cả hai mặt đầu.
* Thêm support loop ở phía trước và phía sau.
* Dùng Shade Smooth.
* Nhân bản thành núm thứ hai.

---

## 25. Checklist thực hành

* [ ] Đã tách màn hình thành object riêng.
* [ ] Đã đổi tên object thành `TV` và `Screen`.
* [ ] Đã đặt `Mirror` phía trên `Subdivision Surface`.
* [ ] Đã kiểm tra đường nối chính giữa object.
* [ ] Đã tạo độ cong cho màn hình.
* [ ] Đã bật Shade Smooth cho TV và màn hình.
* [ ] Đã thêm cylinder làm núm xoay.
* [ ] Đã điều chỉnh topology ở phần đáy TV.
* [ ] Đã thêm Subdivision Surface cho cylinder.
* [ ] Đã inset cả hai mặt đầu của cylinder.
* [ ] Đã thêm support loop để làm sắc cạnh.
* [ ] Đã nhân bản núm xoay thứ hai.
* [ ] Đã kiểm tra mô hình từ nhiều góc nhìn.
* [ ] Đã lưu file trước khi sang bài tiếp theo.

---

## 26. Tóm tắt

Modifier Stack trong Blender được xử lý tuần tự từ trên xuống dưới. Vì vậy, thứ tự của các modifier ảnh hưởng trực tiếp đến hình dạng cuối cùng của object.

Trong bài học này, thứ tự phù hợp là:

```text
Mirror
Subdivision Surface
```

`Mirror` tạo ra hình dạng đối xứng hoàn chỉnh trước, sau đó `Subdivision Surface` làm mượt toàn bộ mesh. Cách sắp xếp này giúp giảm lỗi ở đường nối trung tâm của TV và màn hình.

Bài học cũng giới thiệu các kỹ thuật quan trọng trong Subdivision Surface Modelling:

* Tách object để chỉnh sửa và texturing thuận tiện hơn.
* Dùng loop cut để kiểm soát độ cong.
* Đặt support loop gần cạnh để làm cạnh sắc hơn.
* Dùng inset để tạo topology quad xung quanh N-gon.
* Dùng Shade Smooth để cải thiện bề mặt hiển thị.

Những kỹ thuật này sẽ tiếp tục được sử dụng khi dựng phần thân của nhân vật trong bài học tiếp theo.
