# 032 — Completing the Walls

| Thuộc tính       | Nội dung                                                     |
| ---------------- | ------------------------------------------------------------ |
| **Module**       | Module 02 — Modular Dungeon                                  |
| **Bài học**      | Completing the Walls                                         |
| **Thời lượng**   | 6:29                                                         |
| **Chủ đề chính** | Hoàn thiện module tường bằng cách nối tường với các loại trụ |

## 1. Mục tiêu bài học

Sau bài học này, người học có thể:

* Nhân bản phần tường và các loại trụ để tạo nhiều module tường.
* Sử dụng **Increment Snapping** để đặt các module đúng theo lưới.
* Nhận biết và xử lý hiện tượng **Z-fighting** do các bề mặt nằm quá gần hoặc chồng lên nhau.
* Hiểu vai trò của **active object** khi dùng lệnh Join.
* Apply **Mirror Modifier** trước khi nối object.
* Dùng `Ctrl + J` để gộp tường và trụ thành một object.
* Hiểu sự khác nhau cơ bản giữa **Join** và **Boolean**.
* Tổ chức các module hoàn chỉnh vào Collection `Walls`.
* Lưu object gốc vào Collection `Spares` để có thể tái sử dụng về sau.

---

## 2. Ý tưởng thiết kế module tường

Trong hệ thống modular dungeon, một module tường không nhất thiết phải có sẵn hai trụ ở hai đầu.

Ta chỉ cần nối phần tường với **một trụ ở một bên**:

```text
[Trụ]──────[Tường]
```

Khi nhân bản các module liên tiếp, trụ của module sau sẽ tạo thành đầu nối còn lại:

```text
[Trụ]──────[Tường][Trụ]──────[Tường][Trụ]
```

Cách xây dựng này có các ưu điểm:

* Giảm số lượng object cần quản lý.
* Dễ nhân bản theo lưới.
* Dễ xoay module để tạo góc.
* Có thể dùng một trụ rời để kết thúc đoạn tường nếu cần.

> Vì vậy, nên giữ lại một số trụ độc lập để đặt ở đầu hoặc cuối những đoạn tường không nối vòng kín.

---

## 3. Tạo ba module tường

Scene hiện có ba kiểu trụ khác nhau. Mỗi loại trụ sẽ được kết hợp với một bản sao của phần tường để tạo ra ba module.

### 3.1. Chuyển sang góc nhìn từ trên

Sử dụng góc nhìn Top để dễ bố trí các object trên lưới.

| Thao tác              | Phím tắt    |
| --------------------- | ----------- |
| Chuyển sang Top View  | `Numpad 7`  |
| Nhân bản object       | `Shift + D` |
| Di chuyển theo trục X | `X`         |
| Di chuyển theo trục Y | `Y`         |

### 3.2. Nhân bản các trụ

Với mỗi loại trụ:

1. Chọn trụ.
2. Nhấn `Shift + D` để nhân bản.
3. Nhấn trục cần di chuyển.
4. Đặt bản sao sang khu vực làm việc mới.

Ví dụ:

```text
Shift + D → Y → 4
```

Lệnh trên tạo bản sao và di chuyển nó 4 đơn vị theo trục Y.

### 3.3. Bật Increment Snapping

Bật biểu tượng nam châm trên thanh công cụ của Viewport.

Trong menu Snapping, chọn:

```text
Snap To: Increment
```

Increment Snapping khiến object di chuyển theo các bước của lưới, giúp module giữ đúng kích thước và vị trí.

### 3.4. Nhân bản phần tường

Nhân bản phần tường ba lần và đặt mỗi bản sao cạnh một loại trụ.

Kết quả dự kiến:

```text
Module 1: Trụ kiểu A + Tường
Module 2: Trụ kiểu B + Tường
Module 3: Trụ kiểu C + Tường
```

---

## 4. Xử lý hiện tượng Z-fighting

Khi quan sát scene từ xa, có thể xuất hiện hiện tượng bề mặt nhấp nháy tại vị trí tường tiếp xúc với trụ.

Hiện tượng này được gọi là **Z-fighting**.

### 4.1. Nguyên nhân

Z-fighting xảy ra khi hai bề mặt:

* Nằm chính xác trên cùng một vị trí.
* Chồng lấn lên nhau.
* Hoặc nằm quá gần nhau khiến phần mềm khó xác định mặt nào cần được hiển thị phía trước.

```text
Mặt của trụ    ─────────────
Mặt của tường  ─────────────
                ↑
        Hai mặt gần như trùng nhau
```

Khi camera ở xa, các bề mặt có thể liên tục tranh nhau vị trí hiển thị và gây ra hiện tượng nhấp nháy.

### 4.2. Cách xử lý trong bài học

Giảng viên xử lý bằng cách tăng nhẹ chiều cao của các trụ.

Quy trình:

1. Chọn tất cả các trụ cần chỉnh sửa.
2. Nhấn `Tab` để vào Edit Mode.
3. Chuyển sang Face Select.
4. Chọn các mặt trên cùng của trụ.
5. Tắt Snapping để có thể di chuyển một khoảng rất nhỏ.
6. Nhấn `G`, sau đó `Z`.
7. Kéo các mặt lên trên một chút.

```text
Trước khi sửa:

     Tường
──────────────
     Trụ
──────────────
Hai mặt quá gần nhau

Sau khi sửa:

       Mặt trên của trụ
──────────────
       Khoảng cách nhỏ
     Tường
──────────────
```

Không cần nâng quá nhiều. Chỉ cần tạo một khoảng cách nhỏ để loại bỏ nhấp nháy.

---

## 5. Nối tường với trụ

Blender có nhiều cách để kết hợp object. Trong bài học này, giảng viên sử dụng lệnh **Join** vì đây là phương pháp đơn giản và nhanh chóng.

### 5.1. Hai phương pháp được nhắc đến

| Phương pháp | Đặc điểm                                                                 |
| ----------- | ------------------------------------------------------------------------ |
| **Join**    | Gộp nhiều object thành một object nhưng không thực sự hợp nhất topology  |
| **Boolean** | Có thể hợp nhất hình học và xử lý các phần giao nhau, nhưng phức tạp hơn |

Boolean sẽ được học sau. Với hệ thống module, Join thường đủ nhanh và hiệu quả.

---

## 6. Active Object khi Join

Khi chọn nhiều object, object được chọn cuối cùng sẽ trở thành **active object**.

Active object thường có đường viền sáng hơn những object còn lại.

Khi dùng `Ctrl + J`, object sau khi gộp sẽ kế thừa từ active object:

* Tên object.
* Origin.
* Modifier.
* Một số thuộc tính object khác.

### 6.1. Thứ tự chọn trong bài học

Giảng viên thực hiện:

1. Chọn phần tường trước.
2. Giữ `Shift`.
3. Chọn trụ sau cùng.
4. Nhấn `Ctrl + J`.

```text
Chọn trước: Tường
Chọn cuối:  Trụ → Active Object
                    ↓
            Origin của module
            nằm tại vị trí trụ
```

Trụ được chọn sau cùng vì Origin của nó đang nằm ở vị trí thuận lợi để:

* Nhân bản module.
* Snap module theo lưới.
* Xoay module quanh góc tường.

---

## 7. Vấn đề khi Join object có Mirror Modifier

Nếu nối tường với trụ ngay lập tức, một nửa phần tường có thể biến mất.

### 7.1. Nguyên nhân

Phần tường đang sử dụng **Mirror Modifier**, trong khi trụ không có modifier.

Khi trụ là active object và thực hiện Join:

* Tường được gộp vào trụ.
* Object kết quả sử dụng modifier stack của trụ.
* Mirror Modifier của tường không được giữ lại.
* Phần hình học tạo ra bởi Mirror biến mất.

```text
Tường gốc
├── Mesh thật: một nửa
└── Mirror Modifier: tạo nửa còn lại

Sau khi Join vào trụ mà chưa Apply:
├── Mesh thật: một nửa
└── Mirror Modifier: bị mất
```

### 7.2. Cách khắc phục

Cần Apply Mirror Modifier trước khi Join.

Quy trình đúng:

1. Chọn phần tường.
2. Mở tab Modifiers.
3. Mở menu của Mirror Modifier.
4. Chọn **Apply**.
5. Giữ `Shift` và chọn trụ.
6. Đảm bảo trụ là active object.
7. Nhấn `Ctrl + J`.

Sau khi Apply, phần đối xứng được chuyển thành hình học thật:

```text
Trước Apply:
Mesh một nửa + Mirror Modifier

Sau Apply:
Mesh hoàn chỉnh
```

> Apply modifier là một thao tác mang tính phá huỷ — destructive modeling. Sau khi Apply, việc quay lại thay đổi thiết lập Mirror sẽ khó hơn nếu không Undo hoặc sử dụng object dự phòng.

---

## 8. Quy trình hoàn thiện từng module

Thực hiện lần lượt với cả ba module:

```text
Chọn tường
    ↓
Apply Mirror Modifier
    ↓
Shift + chọn trụ
    ↓
Trụ trở thành Active Object
    ↓
Ctrl + J
    ↓
Tường và trụ trở thành một object
```

Sau khi hoàn thành, ta có:

```text
Wall Module A
Wall Module B
Wall Module C
```

Mỗi module có:

* Một đoạn tường hoàn chỉnh.
* Một loại trụ riêng.
* Origin nằm tại trụ.
* Khả năng nhân bản và snap theo lưới.

---

## 9. Kiểm tra khả năng nhân bản module

Sau khi Join, có thể kiểm tra nhanh module bằng cách nhân bản nó.

Ví dụ:

```text
Shift + D → X → 4
```

Thao tác này:

1. Tạo một bản sao của module.
2. Di chuyển bản sao 4 đơn vị theo trục X.

Để tạo góc tường:

```text
Shift + D → X → 4
R → Z → 90
```

Sơ đồ:

```text
Module ban đầu:

[Trụ]────────

Nhân bản và xoay 90°:

[Trụ]────────
             │
             │
             │
```

Sau khi kiểm tra, có thể xóa các bản sao thử nghiệm.

---

## 10. Join không hợp nhất hoàn toàn mesh

Mặc dù tường và trụ đã trở thành một object, phần hình học bên trong vẫn còn tồn tại.

### 10.1. Kiểm tra bằng Local View

Có thể cô lập object để quan sát rõ hơn:

| Thao tác                | Phím tắt        |
| ----------------------- | --------------- |
| Bật hoặc tắt Local View | `Numpad /`      |
| Chuyển sang Edit Mode   | `Tab`           |
| Chuyển sang Wireframe   | `Z` → Wireframe |

Trong Wireframe, có thể thấy:

* Mặt bên trong trụ vẫn tồn tại.
* Mặt cuối của tường vẫn tồn tại.
* Hai phần hình học đang chồng vào nhau.
* Chúng thuộc cùng một object nhưng chưa trở thành một mesh liền mạch.

```text
Join:

[ Trụ ][ Tường ]
    ↑
Các mặt bên trong vẫn còn

Boolean Union:

[ Trụ + Tường ]
    ↑
Các vùng giao nhau có thể được hợp nhất
```

### 10.2. Có cần xóa các mặt bên trong không?

Trong trường hợp này, không bắt buộc.

Khi xây dựng môi trường bằng module, việc các phần hình học chồng nhẹ lên nhau là rất phổ biến.

Ví dụ, khi đặt hai module cạnh nhau:

```text
Module A            Module B
[Trụ]──────[Tường] [Trụ]──────[Tường]
                    ↑
            Có thể có phần giao nhau
```

Đối với scene modular thông thường:

* Chi phí hiệu năng tăng không đáng kể.
* Join nhanh hơn Boolean.
* Quy trình dựng level đơn giản hơn.
* Ít phát sinh lỗi topology hơn cho người mới.

Vì vậy, bài học ưu tiên tốc độ và sự đơn giản thay vì cố tạo một mesh hoàn toàn kín và tối ưu tuyệt đối.

---

## 11. Tổ chức các module vào Collection

Sau khi hoàn thiện ba module, nên tổ chức chúng trong Outliner.

### 11.1. Tạo Collection `Walls`

1. Chọn cả ba module tường.
2. Nhấn `M`.
3. Chọn **New Collection**.
4. Đặt tên:

```text
Walls
```

Collection này chứa các module đã hoàn chỉnh và sẵn sàng để xây dungeon.

### 11.2. Tạo Collection `Spares`

Phần tường gốc vẫn còn Mirror Modifier và có thể được sử dụng để:

* Chỉnh sửa thiết kế tường.
* Tạo một biến thể mới.
* Tạo module có cửa.
* Tạo cửa sổ hoặc lối mở.
* Khôi phục module nếu phiên bản đã Apply gặp lỗi.

Quy trình:

1. Chọn phần tường gốc.
2. Nhấn `M`.
3. Chọn **New Collection**.
4. Đặt tên:

```text
Spares
```

`Spares` có thể hiểu là nơi chứa:

* Object gốc.
* Bản dự phòng.
* Các chi tiết chưa chắc có cần sử dụng hay không.
* Các object có modifier chưa Apply.

---

## 12. Ẩn Collection Spares

Collection `Spares` không nên xuất hiện trong scene hoặc ảnh render hiện tại.

Trong Outliner, tắt:

* Biểu tượng con mắt để ẩn trong Viewport.
* Biểu tượng camera để loại khỏi Render.

```text
Spares
├── Viewport: Hidden
└── Render: Disabled
```

Việc này giúp:

* Tránh chọn nhầm object gốc.
* Tránh object dự phòng xuất hiện trong render.
* Giữ Viewport gọn gàng.
* Vẫn bảo toàn dữ liệu để sử dụng sau.

---

## 13. Quy trình tổng thể

```text
Nhân bản 3 loại trụ
          ↓
Nhân bản 3 phần tường
          ↓
Bật Increment Snapping
          ↓
Căn tường và trụ theo lưới
          ↓
Phát hiện Z-fighting
          ↓
Nâng nhẹ mặt trên của trụ
          ↓
Apply Mirror Modifier cho tường
          ↓
Chọn tường trước, trụ sau
          ↓
Ctrl + J để Join
          ↓
Kiểm tra khả năng nhân bản và xoay
          ↓
Đưa module hoàn chỉnh vào Walls
          ↓
Đưa object gốc vào Spares
          ↓
Ẩn Spares khỏi Viewport và Render
          ↓
Lưu file
```

---

## 14. Phím tắt và công cụ liên quan

| Phím tắt hoặc công cụ | Chức năng                                   |
| --------------------- | ------------------------------------------- |
| `Numpad 7`            | Chuyển sang Top View                        |
| `Shift + D`           | Nhân bản object                             |
| `G`                   | Di chuyển                                   |
| `X`, `Y`, `Z`         | Giới hạn thao tác theo trục                 |
| `R`                   | Xoay                                        |
| `R`, `Z`, `90`        | Xoay 90° quanh trục Z                       |
| `Tab`                 | Chuyển đổi Object Mode và Edit Mode         |
| Face Select           | Chọn mặt trong Edit Mode                    |
| Increment Snapping    | Snap object theo lưới                       |
| Apply Modifier        | Chuyển kết quả modifier thành hình học thật |
| `Ctrl + J`            | Join nhiều object thành một object          |
| `Numpad /`            | Bật hoặc tắt Local View                     |
| `Z`                   | Mở Viewport Shading Pie                     |
| `M`                   | Di chuyển object vào Collection             |
| `Ctrl + S`            | Lưu file                                    |

---

## 15. Lưu ý và lỗi thường gặp

### 15.1. Join trước khi Apply Mirror

**Hiện tượng:** Một nửa phần tường biến mất.

**Nguyên nhân:** Mirror Modifier của tường bị mất khi Join vào trụ.

**Cách sửa:** Undo, Apply Mirror Modifier rồi thực hiện Join lại.

---

### 15.2. Chọn sai active object

**Hiện tượng:** Origin của module nằm ở vị trí không thuận lợi.

**Nguyên nhân:** Tường được chọn cuối cùng thay vì trụ.

**Cách sửa:** Chọn tường trước, giữ `Shift`, sau đó chọn trụ cuối cùng.

---

### 15.3. Z-fighting tại điểm tiếp xúc

**Hiện tượng:** Bề mặt tường hoặc trụ nhấp nháy khi quan sát từ xa.

**Nguyên nhân:** Hai mặt nằm quá gần hoặc chồng lên nhau.

**Cách sửa:** Di chuyển mặt trên của trụ lên một khoảng nhỏ.

---

### 15.4. Quên tắt Snapping khi chỉnh một khoảng nhỏ

**Hiện tượng:** Mặt trên của trụ nhảy theo bước lưới quá lớn.

**Cách sửa:** Tắt Snapping trước khi dùng `G`, `Z` để nâng mặt lên nhẹ.

---

### 15.5. Hiểu nhầm Join là hợp nhất topology

`Ctrl + J` chỉ đưa nhiều phần hình học vào cùng một object. Nó không tự động:

* Xóa các mặt bên trong.
* Cắt giao tuyến.
* Hàn các vertex.
* Tạo topology liền mạch.

Muốn hợp nhất hình học thực sự, có thể cần Boolean hoặc chỉnh sửa mesh thủ công trong các bài học sau.

---

### 15.6. Xóa object gốc quá sớm

Nếu xóa phần tường gốc sau khi đã Apply Mirror, việc tạo biến thể mới sẽ khó hơn.

Nên đưa object gốc vào `Spares` thay vì xóa.

---

### 15.7. Quên ẩn Spares khỏi Render

Dù object đã được ẩn khỏi Viewport, nó vẫn có thể xuất hiện trong ảnh render nếu biểu tượng camera chưa được tắt.

Cần kiểm tra cả hai trạng thái trong Outliner.

---

## 16. Checklist thực hành

### Nhân bản và căn chỉnh

* [ ] Đã nhân bản ba loại trụ.
* [ ] Đã nhân bản ba phần tường.
* [ ] Đã bật Increment Snapping.
* [ ] Đã đặt các module đúng theo lưới.

### Xử lý Z-fighting

* [ ] Đã kiểm tra hiện tượng nhấp nháy tại điểm giao nhau.
* [ ] Đã chọn mặt trên của các trụ.
* [ ] Đã tắt Snapping trước khi chỉnh sửa nhỏ.
* [ ] Đã nâng các mặt lên đủ để loại bỏ Z-fighting.

### Apply và Join

* [ ] Đã Apply Mirror Modifier cho từng phần tường.
* [ ] Đã chọn tường trước.
* [ ] Đã chọn trụ sau cùng làm active object.
* [ ] Đã dùng `Ctrl + J` để tạo ba module hoàn chỉnh.
* [ ] Origin của mỗi module nằm tại vị trí trụ.

### Kiểm tra module

* [ ] Đã thử nhân bản module theo trục X hoặc Y.
* [ ] Đã thử xoay module 90° quanh trục Z.
* [ ] Module vẫn khớp với lưới.
* [ ] Đã xóa các bản sao thử nghiệm.

### Tổ chức scene

* [ ] Đã tạo Collection `Walls`.
* [ ] Đã đưa ba module hoàn chỉnh vào `Walls`.
* [ ] Đã tạo Collection `Spares`.
* [ ] Đã đưa phần tường gốc vào `Spares`.
* [ ] Đã ẩn `Spares` khỏi Viewport.
* [ ] Đã loại `Spares` khỏi Render.
* [ ] Đã lưu file bằng `Ctrl + S`.

---

## 17. Tóm tắt

Trong bài học này, ba module tường được tạo bằng cách nhân bản phần tường và kết hợp nó với ba loại trụ khác nhau. Các object được căn theo lưới bằng Increment Snapping, đồng thời hiện tượng Z-fighting được xử lý bằng cách nâng nhẹ mặt trên của trụ.

Trước khi Join, Mirror Modifier của phần tường phải được Apply để bảo toàn toàn bộ hình học. Khi sử dụng `Ctrl + J`, trụ được chọn cuối cùng làm active object để module giữ Origin tại vị trí thuận lợi cho việc nhân bản, snapping và xoay.

Join không hợp nhất hoàn toàn topology và vẫn để lại các mặt hình học bên trong, nhưng điều này có thể chấp nhận được trong quy trình xây dựng môi trường modular. Cuối cùng, các module hoàn chỉnh được đưa vào Collection `Walls`, còn object gốc được bảo quản trong Collection `Spares` và ẩn khỏi Viewport cũng như Render.

> **Nguyên tắc quan trọng:** Hãy giữ lại object gốc có modifier trong Collection `Spares`, sau đó sử dụng các bản đã Apply và Join để xây dựng level.

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
