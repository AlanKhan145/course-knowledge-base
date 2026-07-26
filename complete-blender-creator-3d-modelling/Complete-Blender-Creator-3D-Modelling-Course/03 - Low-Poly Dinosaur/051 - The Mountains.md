# 051 — The Mountains: Tạo vật liệu Gradient cho núi

| Thuộc tính       | Nội dung                                                       |
| ---------------- | -------------------------------------------------------------- |
| **Module**       | Module 03 — Low-Poly Dinosaur                                  |
| **Bài học**      | The Mountains                                                  |
| **Thời lượng**   | 10:34                                                          |
| **Chủ đề chính** | Tạo vật liệu chuyển màu theo độ cao và chỉnh sửa hình dạng núi |

---

## 1. Mục tiêu bài học

Sau bài học này, bạn có thể:

* Tách phần núi và phần mặt đất thành hai object riêng biệt.
* Gán vật liệu riêng cho núi và mặt đất.
* Kích hoạt add-on **Node Wrangler**.
* Tạo gradient màu theo chiều cao của núi bằng tọa độ trục **Z**.
* Sử dụng **Color Ramp** để kiểm soát màu sắc và vùng chuyển màu.
* Xem trước kết quả của từng node mà không chịu ảnh hưởng của ánh sáng.
* Bổ sung topology cho núi bằng lệnh **Subdivide**.
* Chỉnh sửa hình dáng núi trong **Sculpt Mode**.
* Sử dụng lại modifier **Decimate** để khôi phục phong cách low-poly.

---

## 2. Tách núi và mặt đất thành hai object

Ban đầu, phần núi và mặt đất có thể đang nằm chung trong một mesh và sử dụng cùng một vật liệu.

Việc tách chúng thành hai object riêng sẽ hữu ích khi:

* Muốn mặt đất có màu khác với núi.
* Muốn nhân bản riêng các dãy núi.
* Muốn chỉnh sửa hình dạng núi mà không ảnh hưởng đến mặt đất.
* Muốn gán shader khác nhau cho từng phần.

### Quy trình tách object

1. Chọn object chứa núi và mặt đất.
2. Nhấn `Tab` để vào **Edit Mode**.
3. Chuyển sang chế độ chọn mặt bằng phím `3`.
4. Chuyển sang góc nhìn từ trên xuống bằng `Numpad 7`.
5. Chọn toàn bộ các mặt thuộc phần núi.
6. Nhấn `P`.
7. Chọn:

```text
Separate → Selection
```

Các mặt đã chọn sẽ trở thành một object mới.

Sau khi quay lại **Object Mode**, ta có thể chọn riêng:

* Object mặt đất.
* Object dãy núi.

### Sơ đồ đối tượng

```text
Object ban đầu
│
├── Mặt đất
└── Dãy núi
        │
        └── P → Separate by Selection
                 │
                 ├── Ground
                 └── Mountains
```

---

## 3. Tạo vật liệu riêng cho mặt đất

Mặc dù đã được tách thành hai object, núi và mặt đất vẫn có thể đang chia sẻ cùng một material.

Để tạo vật liệu riêng cho mặt đất:

1. Chọn object mặt đất.
2. Mở **Material Properties** hoặc **Shader Editor**.
3. Nhấn nút tạo bản sao material hiện tại.
4. Đổi tên material thành:

```text
Ground
```

5. Thay đổi **Base Color** thành màu phù hợp với mặt đất.

Ví dụ:

* Nâu đất.
* Xanh rêu.
* Vàng cát.
* Xám đá.

Nếu mặt đất không xuất hiện trong khung hình camera, không cần dành quá nhiều thời gian để hoàn thiện material của nó.

---

## 4. Kích hoạt Node Wrangler

**Node Wrangler** là add-on được tích hợp sẵn trong Blender, cung cấp nhiều phím tắt hữu ích khi làm việc với node.

### Cách kích hoạt

1. Mở:

```text
Edit → Preferences
```

2. Chọn mục **Add-ons**.
3. Tìm kiếm:

```text
Node Wrangler
```

4. Đánh dấu bật add-on.
5. Kiểm tra tùy chọn **Auto Save Preferences** đã được bật.
6. Đóng cửa sổ Preferences.

### Tác dụng chính

Node Wrangler giúp:

* Tạo nhanh các node liên quan đến texture.
* Xem trước kết quả tại từng điểm trong node tree.
* Kết nối node nhanh hơn.
* Tiết kiệm nhiều thao tác lặp lại trong Shader Editor.

---

## 5. Phím tắt `Ctrl + T`

Khi chọn một node texture hoặc node Principled BSDF và nhấn:

```text
Ctrl + T
```

Node Wrangler có thể tạo nhanh các node như:

* Texture Coordinate.
* Mapping.
* Image Texture.

Trong bài học này, mục tiêu chính chỉ là lấy tọa độ của object, vì vậy những node không cần thiết có thể được xóa, chỉ giữ lại:

```text
Texture Coordinate
```

Ngoài cách dùng phím tắt, có thể thêm thủ công bằng:

```text
Shift + A → Input → Texture Coordinate
```

---

## 6. Nguyên lý tạo gradient theo độ cao

Mục tiêu của shader là:

* Phần chân núi có màu tối.
* Màu sáng dần khi lên cao.
* Đỉnh núi có màu sáng nhất.

Để làm được điều này, Blender cần biết vị trí của từng điểm trên object theo chiều cao.

Trong không gian 3D:

| Trục  | Ý nghĩa thường gặp |
| ----- | ------------------ |
| **X** | Trái – phải        |
| **Y** | Trước – sau        |
| **Z** | Dưới – trên        |

Vì độ cao nằm trên trục **Z**, ta sẽ lấy giá trị Z làm dữ liệu điều khiển gradient.

### Nguyên lý

```text
Vị trí thấp trên trục Z
        ↓
Giá trị tối
        ↓
Màu chân núi

Vị trí cao trên trục Z
        ↓
Giá trị sáng
        ↓
Màu đỉnh núi
```

---

## 7. Tạo node Separate XYZ

Thêm node:

```text
Shift + A → Converter → Separate XYZ
```

Sau đó nối:

```text
Texture Coordinate: Object
              ↓
Separate XYZ: Vector
```

Node **Separate XYZ** sẽ tách vector tọa độ thành ba giá trị riêng:

* X.
* Y.
* Z.

### Sơ đồ node

```text
┌────────────────────┐
│ Texture Coordinate │
│                    │
│ Object ●────────────┼────────────┐
└────────────────────┘            │
                                  ▼
                         ┌────────────────┐
                         │  Separate XYZ  │
                         │                │
                         │ X ●            │
                         │ Y ●            │
                         │ Z ●            │
                         └────────────────┘
```

Trong bài học này, chỉ sử dụng output **Z**.

---

## 8. Xem trước node bằng Node Wrangler

Một tính năng rất hữu ích của Node Wrangler là xem riêng kết quả của một node.

### Phím tắt

Giữ:

```text
Ctrl + Shift
```

sau đó nhấp chuột trái vào node cần xem.

Node Wrangler sẽ tạo hoặc sử dụng một **Viewer Node** và kết nối node được chọn vào Material Output.

### Kiểm tra các trục tọa độ

Khi `Ctrl + Shift + Click` nhiều lần vào node **Separate XYZ**, Blender sẽ lần lượt hiển thị:

1. Trục X.
2. Trục Y.
3. Trục Z.

Kết quả:

* X tạo gradient theo hướng trái – phải.
* Y tạo gradient theo hướng trước – sau.
* Z tạo gradient theo hướng dưới – trên.

Do đó, trục **Z** chính là lựa chọn phù hợp để tạo màu theo độ cao của núi.

Để quay lại shader đầy đủ:

```text
Ctrl + Shift + Click vào Principled BSDF
```

---

## 9. Kiểm tra gradient đen trắng

Trước tiên có thể nối trực tiếp:

```text
Separate XYZ: Z
        ↓
Principled BSDF: Base Color
```

### Sơ đồ

```text
Texture Coordinate
        │ Object
        ▼
Separate XYZ
        │ Z
        ▼
Principled BSDF
        │
        ▼
Material Output
```

Kết quả ban đầu là một gradient đen trắng:

* Chân núi tối.
* Đỉnh núi sáng.

Gradient đen trắng này chính là dữ liệu dùng để điều khiển màu sắc ở bước tiếp theo.

---

## 10. Chuyển gradient đen trắng thành màu

Để chuyển dữ liệu đen trắng thành màu, thêm node:

```text
Shift + A → Converter → Color Ramp
```

Đặt node Color Ramp lên đường kết nối giữa **Separate XYZ** và **Principled BSDF**. Blender thường sẽ tự động nối node vào giữa.

### Chuỗi node hoàn chỉnh

```text
┌────────────────────┐
│ Texture Coordinate │
│ Object             │
└─────────┬──────────┘
          │
          ▼
┌────────────────────┐
│    Separate XYZ    │
│ Z                  │
└─────────┬──────────┘
          │
          ▼
┌────────────────────┐
│     Color Ramp     │
│ Dark → Mid → Light │
└─────────┬──────────┘
          │ Color
          ▼
┌────────────────────┐
│  Principled BSDF   │
│ Base Color         │
└─────────┬──────────┘
          │ BSDF
          ▼
┌────────────────────┐
│  Material Output   │
└────────────────────┘
```

---

## 11. Điều chỉnh Color Ramp

Color Ramp cho phép điều khiển:

* Màu ở chân núi.
* Màu ở giữa núi.
* Màu ở đỉnh núi.
* Vị trí chuyển tiếp giữa các màu.
* Độ rộng của từng vùng màu.

### Hai điểm màu mặc định

Color Ramp ban đầu có hai điểm:

* Điểm bên trái tương ứng với vùng thấp.
* Điểm bên phải tương ứng với vùng cao.

Ví dụ:

| Vị trí   | Màu gợi ý                        |
| -------- | -------------------------------- |
| Chân núi | Nâu đậm, xám tối hoặc xanh rêu   |
| Đỉnh núi | Vàng kem, nâu sáng hoặc xám sáng |

Trong bài học, màu tối được chuyển thành một màu nâu bẩn, trong khi màu trắng được giảm độ sáng và hơi nghiêng về vàng.

### Điều chỉnh phạm vi màu

Khi kéo điểm màu tối về bên phải:

* Vùng tối chiếm nhiều diện tích hơn.
* Gradient bị đẩy lên cao.
* Chỉ phần gần đỉnh mới có màu sáng.

Khi kéo điểm sáng về bên trái:

* Vùng sáng xuất hiện sớm hơn.
* Phần sáng chiếm nhiều diện tích núi hơn.

---

## 12. Thêm màu trung gian

Có thể thêm một điểm màu mới trên Color Ramp bằng nút dấu `+`.

Ví dụ dùng ba điểm màu:

```text
Nâu đậm → Nâu đỏ → Vàng kem
```

Hoặc:

```text
Xanh rêu → Nâu đá → Trắng tuyết
```

### Minh họa dải màu

```text
Chân núi                                Đỉnh núi
   │                                        │
   ▼                                        ▼
[Nâu đậm] ─────── [Nâu trung gian] ─────── [Vàng sáng]
    0.0                 0.55                    1.0
```

Điểm màu trung gian giúp gradient:

* Có chiều sâu hơn.
* Ít đơn điệu.
* Phân chia rõ vùng chân, thân và đỉnh núi.
* Phù hợp hơn với phong cách môi trường tự nhiên.

---

## 13. Kiểm tra gradient không chịu ảnh hưởng ánh sáng

Khi shader được kết nối qua Principled BSDF, ánh sáng trong scene có thể làm xuất hiện:

* Vùng phản chiếu.
* Vùng bóng tối.
* Thay đổi độ sáng trên các mặt polygon.

Điều này khiến việc đánh giá chính xác gradient trở nên khó khăn.

Để xem riêng màu của Color Ramp:

```text
Ctrl + Shift + Click vào Color Ramp
```

Kết quả sẽ được kết nối trực tiếp đến Viewer, bỏ qua ảnh hưởng của:

* Ánh sáng.
* Roughness.
* Specular.
* Bóng đổ.
* Shading của Principled BSDF.

Sau khi chỉnh xong, dùng:

```text
Ctrl + Shift + Click vào Principled BSDF
```

để quay lại vật liệu hoàn chỉnh.

---

## 14. Quan sát trong Camera View

Nhấn:

```text
Numpad 0
```

để chuyển sang góc nhìn camera.

Việc chỉnh màu trong Camera View giúp đánh giá:

* Phần núi nào thực sự xuất hiện trong khung hình.
* Độ sáng có phù hợp với dinosaur và môi trường hay không.
* Màu đỉnh núi có quá sáng không.
* Gradient có bắt đầu đúng vị trí hay không.
* Màu tối có chiếm quá nhiều diện tích hay không.

Không nhất thiết phải hoàn thiện những vùng nằm ngoài khung hình camera.

---

## 15. Vấn đề khi đã Apply Decimate

Modifier **Decimate** giúp giảm số lượng polygon và tạo phong cách low-poly.

Tuy nhiên, nếu modifier đã được **Apply**, đây là một thao tác mang tính phá hủy:

```text
Mesh nhiều polygon
       │
       ▼
Apply Decimate
       │
       ▼
Mesh ít polygon
```

Sau khi Apply:

* Không thể tăng lại Ratio của Decimate cũ.
* Các mặt polygon có thể trở nên quá lớn.
* Việc sculpt chi tiết sẽ khó hơn.
* Hình dạng núi có thể trông quá đơn giản.

Đây là một ví dụ về **destructive modelling** — chỉnh sửa trực tiếp và làm mất dữ liệu topology ban đầu.

---

## 16. Bổ sung topology bằng Subdivide

Nếu các mặt của núi quá lớn, có thể chia nhỏ chúng.

### Quy trình

1. Chọn object núi.
2. Nhấn `Tab` để vào Edit Mode.
3. Nhấn `A` để chọn toàn bộ mesh.
4. Nhấp chuột phải.
5. Chọn:

```text
Subdivide
```

Mỗi mặt polygon sẽ được chia thành nhiều mặt nhỏ hơn.

Có thể lặp lại lệnh **Subdivide** thêm một lần nếu vẫn chưa đủ topology.

### Minh họa

```text
Một mặt polygon lớn
┌──────────────┐
│              │
│              │
└──────────────┘

Sau khi Subdivide
┌───────┬──────┐
│       │      │
├───────┼──────┤
│       │      │
└───────┴──────┘
```

Topology dày hơn giúp các công cụ sculpt tác động lên mesh mượt và chính xác hơn.

---

## 17. Chỉnh sửa núi trong Sculpt Mode

Sau khi Subdivide:

1. Chuyển sang **Sculpt Mode**.
2. Chọn công cụ phù hợp.

### Draw Brush

Dùng để:

* Đắp thêm khối.
* Tạo gờ núi.
* Tăng độ nổi.
* Bổ sung chi tiết bề mặt.

### Grab Brush

Dùng để:

* Kéo đỉnh núi cao hơn.
* Làm núi nhọn hơn.
* Thay đổi silhouette.
* Đẩy hoặc kéo các vùng lớn của mesh.
* Điều chỉnh hình núi theo khung hình camera.

### Quy trình gợi ý

```text
Camera View
    ↓
Quan sát silhouette
    ↓
Grab Brush kéo hình khối lớn
    ↓
Draw Brush bổ sung chi tiết
    ↓
Kiểm tra lại trong camera
```

Đối với núi ở xa, silhouette thường quan trọng hơn các chi tiết nhỏ trên bề mặt.

---

## 18. Thêm lại Decimate Modifier

Sau khi Subdivide và Sculpt, số lượng polygon có thể tăng lên đáng kể.

Để đưa object trở lại phong cách low-poly:

1. Mở **Modifier Properties**.
2. Chọn:

```text
Add Modifier → Decimate
```

3. Giảm giá trị **Ratio**.

### Quy trình tổng thể

```text
Mesh quá ít mặt
       │
       ▼
Subdivide
       │
       ▼
Sculpt hình dạng
       │
       ▼
Decimate Modifier
       │
       ▼
Núi có nhiều chi tiết nhưng vẫn low-poly
```

Không nhất thiết phải Apply Decimate ngay.

Giữ modifier chưa Apply cho phép:

* Tiếp tục điều chỉnh Ratio.
* Quay lại Sculpt Mode để thay đổi hình dạng.
* Thử nhiều mức low-poly khác nhau.
* Tránh mất topology quá sớm.

---

## 19. Sculpt khi Decimate vẫn đang hoạt động

Blender cho phép sculpt mesh trong khi modifier Decimate vẫn đang bật.

Điều này giúp quan sát gần như trực tiếp:

* Silhouette low-poly sau khi giảm polygon.
* Các mặt polygon mới được tạo.
* Mức độ góc cạnh của núi.
* Tác động của việc kéo hoặc đẩy mesh.

Tuy nhiên, nếu mesh có quá nhiều polygon, máy tính có thể bị chậm.

### Khuyến nghị

* Không Subdivide quá nhiều lần.
* Chỉ tạo số polygon đủ để chỉnh sửa.
* Giữ Decimate ở mức hợp lý.
* Theo dõi hiệu năng của viewport.
* Ưu tiên hình dáng tổng thể hơn chi tiết cực nhỏ.

---

## 20. Quy trình hoàn chỉnh của bài học

```text
Chọn mesh núi và mặt đất
            │
            ▼
Chọn các mặt thuộc dãy núi
            │
            ▼
P → Separate by Selection
            │
            ▼
Tạo material riêng cho Ground và Mountains
            │
            ▼
Bật Node Wrangler
            │
            ▼
Texture Coordinate: Object
            │
            ▼
Separate XYZ: lấy trục Z
            │
            ▼
Color Ramp: gán màu thấp → cao
            │
            ▼
Principled BSDF: Base Color
            │
            ▼
Kiểm tra trong Camera View
            │
            ▼
Nếu polygon quá lớn: Subdivide
            │
            ▼
Sculpt bằng Grab/Draw
            │
            ▼
Thêm Decimate Modifier
            │
            ▼
Tinh chỉnh hình dạng low-poly
            │
            ▼
Lưu file
```

---

## 21. Phím tắt và công cụ quan trọng

| Phím tắt / Công cụ     | Chức năng                                  |
| ---------------------- | ------------------------------------------ |
| `Tab`                  | Chuyển giữa Object Mode và Edit Mode       |
| `3`                    | Face Select trong Edit Mode                |
| `Numpad 7`             | Top View                                   |
| `Numpad 0`             | Camera View                                |
| `P`                    | Tách phần mesh đã chọn thành object riêng  |
| `Shift + A`            | Thêm node hoặc object                      |
| `Ctrl + T`             | Node Wrangler: thêm nhanh các node texture |
| `Ctrl + Shift + Click` | Xem trước kết quả của node                 |
| `A`                    | Chọn toàn bộ mesh trong Edit Mode          |
| `G`                    | Di chuyển node hoặc object                 |
| `Delete`               | Xóa node hoặc đối tượng đã chọn            |
| **Subdivide**          | Chia nhỏ các mặt polygon                   |
| **Grab Brush**         | Kéo và thay đổi hình dạng lớn              |
| **Draw Brush**         | Đắp thêm hoặc khắc chi tiết                |
| **Decimate**           | Giảm số lượng polygon                      |

---

## 22. Lỗi thường gặp

### Gradient chạy sai hướng

**Nguyên nhân:** sử dụng output X hoặc Y thay vì Z.

**Cách sửa:**

```text
Separate XYZ → Z → Color Ramp
```

---

### Toàn bộ núi chỉ có một màu

**Nguyên nhân có thể:**

* Các điểm Color Ramp đặt quá sát nhau.
* Phạm vi giá trị Z không phù hợp.
* Object có tỷ lệ hoặc tọa độ bất thường.
* Đường nối node chưa đúng.

**Cách xử lý:**

* Kéo giãn các Color Stop.
* Kiểm tra lại output Z.
* Dùng Node Wrangler để xem trực tiếp dữ liệu Separate XYZ.
* Apply Scale nếu cần thiết.

---

### Màu bị ảnh hưởng quá mạnh bởi ánh sáng

**Nguyên nhân:** đang quan sát shader qua Principled BSDF.

**Cách kiểm tra:**

```text
Ctrl + Shift + Click vào Color Ramp
```

Sau khi chỉnh xong, kết nối lại Principled BSDF.

---

### Không thể sculpt thêm chi tiết

**Nguyên nhân:** mesh có quá ít polygon sau khi Apply Decimate.

**Cách sửa:**

```text
Edit Mode → Select All → Right Click → Subdivide
```

---

### Blender bị chậm khi Sculpt

**Nguyên nhân:** Subdivide quá nhiều lần hoặc mesh có quá nhiều polygon.

**Cách sửa:**

* Giảm số lần Subdivide.
* Chỉ sculpt các vùng nhìn thấy trong camera.
* Giảm độ phức tạp của mesh.
* Tránh tạo chi tiết không cần thiết cho vật thể ở xa.

---

### Núi không còn phong cách low-poly

**Nguyên nhân:** sau khi Subdivide và Sculpt, mesh có quá nhiều mặt nhỏ.

**Cách sửa:** thêm **Decimate Modifier** và giảm Ratio đến khi các mặt polygon trở nên rõ ràng.

---

## 23. Bài tập thực hành

### Yêu cầu

1. Tách núi và mặt đất thành hai object riêng.
2. Tạo material riêng cho mỗi object.
3. Bật Node Wrangler.
4. Tạo gradient theo chuỗi node:

```text
Texture Coordinate
        ↓
Separate XYZ
        ↓
Color Ramp
        ↓
Principled BSDF
```

5. Sử dụng output **Z** làm dữ liệu độ cao.
6. Tạo ít nhất ba vùng màu:

   * Chân núi.
   * Thân núi.
   * Đỉnh núi.
7. Kiểm tra gradient bằng Viewer Node.
8. Subdivide mesh nếu các polygon quá lớn.
9. Sculpt lại silhouette của dãy núi.
10. Thêm Decimate Modifier để phục hồi phong cách low-poly.
11. Kiểm tra kết quả trong Camera View.
12. Lưu file Blender trước khi sang bài tiếp theo.

---

## 24. Checklist hoàn thành

* [ ] Đã tách object núi khỏi mặt đất.
* [ ] Mặt đất và núi sử dụng hai material riêng.
* [ ] Đã kích hoạt Node Wrangler.
* [ ] Đã thêm Texture Coordinate.
* [ ] Đã nối Object vào Separate XYZ.
* [ ] Đã sử dụng output Z.
* [ ] Đã thêm Color Ramp.
* [ ] Gradient tối ở chân và sáng ở đỉnh.
* [ ] Đã thêm ít nhất một màu trung gian.
* [ ] Đã kiểm tra Color Ramp bằng Viewer Node.
* [ ] Đã quan sát kết quả trong Camera View.
* [ ] Đã Subdivide nếu topology quá thưa.
* [ ] Đã chỉnh lại hình núi trong Sculpt Mode.
* [ ] Đã thêm Decimate Modifier.
* [ ] Đã lưu file Blender.

---

## 25. Tóm tắt bài học

Bài học tập trung vào hai nội dung chính: tạo vật liệu gradient theo độ cao và chỉnh sửa lại topology của dãy núi.

Gradient được xây dựng bằng cách lấy tọa độ **Object**, tách riêng giá trị trục **Z** bằng node **Separate XYZ**, sau đó chuyển dữ liệu đen trắng thành màu bằng **Color Ramp**.

```text
Texture Coordinate → Separate XYZ → Color Ramp → Principled BSDF
```

Node Wrangler giúp kiểm tra trực tiếp từng node, qua đó dễ dàng nhận biết trục Z tạo gradient từ chân lên đỉnh núi.

Nếu núi đã bị Decimate quá mạnh, có thể bổ sung lại topology bằng **Subdivide**, chỉnh hình bằng công cụ Sculpt và thêm modifier **Decimate** một lần nữa. Cách làm này giúp dãy núi có hình dáng chi tiết hơn nhưng vẫn duy trì được phong cách góc cạnh đặc trưng của đồ họa low-poly.
