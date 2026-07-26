# 055 — Basic UV Mapping

| Thuộc tính             | Nội dung                                                      |
| ---------------------- | ------------------------------------------------------------- |
| **Module**             | Module 04 — UV Mapping                                        |
| **Bài học**            | Basic UV Mapping                                              |
| **Thời lượng**         | 12:58                                                         |
| **Chủ đề chính**       | Làm quen với UV Mapping và áp texture lên mô hình 3D          |
| **Sản phẩm thực hành** | Một ngôi nhà đơn giản được tạo từ Cube và texture ảnh tòa nhà |

---

## 1. Mục tiêu bài học

Sau bài học này, bạn có thể:

* Hiểu UV Mapping là gì.
* Biết cách mở và sử dụng workspace **UV Editing**.
* Hiểu mối liên hệ giữa:

  * Mặt của mô hình trong 3D Viewport.
  * UV layout trong UV Editor.
  * Hình ảnh texture trong vật liệu.
* Tạo một ảnh kiểm tra dạng **Color Grid** trong Blender.
* Gắn Image Texture vào đầu vào **Base Color** của Principled BSDF.
* Di chuyển, xoay và thay đổi kích thước từng mặt UV.
* Sử dụng một ảnh mặt tiền tòa nhà để tạo mô hình ngôi nhà đơn giản.
* Hiểu ảnh hưởng của độ phân giải và diện tích UV đến độ sắc nét của texture.

---

## 2. UV Mapping là gì?

**UV Mapping** là quá trình trải các mặt của một mô hình 3D thành một bố cục phẳng 2D.

Bố cục 2D này được gọi là **UV Map**.

Blender sử dụng UV Map để xác định phần nào của ảnh texture sẽ được hiển thị trên từng mặt của mô hình.

```text
Ảnh texture 2D
       │
       ▼
     UV Map
       │
       ▼
Bề mặt mô hình 3D
```

Ví dụ, một khối lập phương có sáu mặt. Khi được trải phẳng, sáu mặt này sẽ xuất hiện trong UV Editor dưới dạng một bố cục 2D.

```text
                 ┌───────┐
                 │ Mặt trên│
         ┌───────┼───────┼───────┬───────┐
         │Mặt trái│Mặt trước│Mặt phải│Mặt sau │
         └───────┼───────┼───────┴───────┘
                 │Mặt dưới│
                 └───────┘
```

Blender sẽ dựa vào vị trí của từng mặt UV trên ảnh để lấy màu và chi tiết tương ứng.

---

## 3. UV Map mặc định của các primitive

Phần lớn các primitive cơ bản trong Blender đã có sẵn UV Map khi được tạo.

Có thể kiểm tra UV Map tại:

```text
Object Data Properties
└── UV Maps
```

Các primitive như Cube thường đã được Blender tạo UV Map tự động.

Riêng đối tượng **Circle** thường chỉ gồm các đỉnh và cạnh khi mới tạo, chưa có bề mặt hoàn chỉnh để ánh xạ texture theo cách thông thường.

---

## 4. Làm quen với workspace UV Editing

Chọn Cube, sau đó chuyển sang workspace:

```text
UV Editing
```

Workspace này thường được chia thành hai khu vực chính:

| Khu vực                  | Chức năng                        |
| ------------------------ | -------------------------------- |
| **UV Editor bên trái**   | Hiển thị và chỉnh sửa UV Map     |
| **3D Viewport bên phải** | Hiển thị và chỉnh sửa mô hình 3D |

Khi chuyển sang UV Editing, Blender thường tự động đưa đối tượng vào **Edit Mode**.

### Hiển thị UV

Trong Edit Mode:

* Nhấn `A` để chọn toàn bộ mesh.
* Nhấn `Alt + A` để bỏ chọn toàn bộ.

UV Editor chỉ hiển thị UV của những thành phần đang được chọn.

```text
Chọn mặt trong 3D Viewport
            │
            ▼
UV tương ứng xuất hiện trong UV Editor
```

---

## 5. Phân biệt UV Editor và Image Editor

UV Editor và Image Editor có giao diện khá giống nhau, nhưng chức năng không hoàn toàn giống nhau.

### UV Editor

Dùng để:

* Xem UV Map.
* Chọn UV vertex, edge hoặc face.
* Di chuyển UV.
* Xoay UV.
* Scale UV.
* Đặt UV lên các khu vực khác nhau của ảnh.

### Image Editor

Chủ yếu dùng để:

* Xem ảnh.
* Xem kết quả render.
* Xem các image data-block trong Blender.

Trong bài học này cần sử dụng đúng **UV Editor**.

---

## 6. Chuẩn bị Shader Editor

Để quan sát rõ cách texture được nối vào vật liệu, tạo thêm một cửa sổ Shader Editor.

### Các bước

1. Kéo từ góc của một panel để chia cửa sổ.
2. Đổi loại editor mới thành **Shader Editor**.
3. Nhấn `N` để đóng sidebar nếu không cần.
4. Chuyển 3D Viewport sang **Material Preview**.
5. Quan sát node **Principled BSDF** của vật liệu mặc định.

Sơ đồ workspace lúc này:

```text
┌──────────────────────┬──────────────────────┐
│      UV Editor       │     3D Viewport      │
│                      │                      │
│   UV và texture 2D   │   Mô hình có texture │
├──────────────────────┴──────────────────────┤
│                Shader Editor                │
│ Image Texture → Principled BSDF → Output    │
└─────────────────────────────────────────────┘
```

---

## 7. Thêm node Image Texture

Trong Shader Editor, thêm node:

```text
Shift + A
└── Texture
    └── Image Texture
```

Sau đó nối node vào vật liệu:

```text
Image Texture: Color
          │
          ▼
Principled BSDF: Base Color
```

Sơ đồ node cơ bản:

```text
┌─────────────────┐
│  Image Texture  │
│                 │
│ Color ──────────┼──────────────┐
└─────────────────┘              │
                                 ▼
                     ┌────────────────────┐
                     │ Principled BSDF    │
                     │ Base Color         │
                     └─────────┬──────────┘
                               │
                               ▼
                     ┌────────────────────┐
                     │ Material Output    │
                     └────────────────────┘
```

Blender sẽ tự động sử dụng UV Map hiện có của Cube để đặt ảnh lên mô hình.

---

## 8. Tạo Color Grid để kiểm tra UV

Trong UV Editor, nhấn **New** để tạo một ảnh mới.

### Thiết lập gợi ý

| Thuộc tính         | Giá trị        |
| ------------------ | -------------- |
| **Name**           | `test`         |
| **Width**          | Khoảng 1000 px |
| **Height**         | Khoảng 1000 px |
| **Generated Type** | Color Grid     |

Một ảnh khoảng `1000 × 1000 px` thường được gọi gần đúng là texture **1K**.

Color Grid chứa:

* Các ô màu.
* Ký hiệu.
* Đường lưới.
* Các vùng dễ nhận biết.

Nó giúp quan sát:

* Mặt nào đang sử dụng khu vực nào của texture.
* Texture có bị kéo giãn hay không.
* UV có bị xoay sai hướng hay không.
* Kích thước texture giữa các mặt có đồng đều hay không.

---

## 9. Gắn ảnh Color Grid vào vật liệu

Ảnh vừa tạo mới chỉ xuất hiện trong UV Editor. Nó chưa tự động được gắn vào node Image Texture.

Trong node Image Texture:

1. Nhấn vào danh sách ảnh.
2. Chọn ảnh `test`.
3. Nối đầu ra **Color** vào **Base Color**.

Quy trình đầy đủ:

```text
Tạo ảnh Color Grid trong UV Editor
                  │
                  ▼
Chọn ảnh đó trong node Image Texture
                  │
                  ▼
Nối Color vào Base Color
                  │
                  ▼
Quan sát texture trên Cube
```

Sau khi kết nối, Color Grid sẽ xuất hiện trên các mặt của Cube.

---

## 10. Mối quan hệ giữa UV và mô hình

Mỗi vùng UV đại diện cho một mặt hoặc một nhóm mặt trên mô hình.

Khi chọn một mặt của Cube trong 3D Viewport, mặt UV tương ứng sẽ được đánh dấu trong UV Editor.

### Các chế độ chọn trong UV Editor

UV Editor cho phép chọn theo:

* Vertex.
* Edge.
* Face.

Việc chọn đúng chế độ rất quan trọng khi chỉnh sửa UV.

---

## 11. Biến đổi UV

Các thao tác trong UV Editor khá giống các thao tác với object trong 3D Viewport.

| Phím                  | Chức năng                |
| --------------------- | ------------------------ |
| `G`                   | Di chuyển UV             |
| `S`                   | Thay đổi kích thước UV   |
| `R`                   | Xoay UV                  |
| `X`                   | Giới hạn theo trục ngang |
| `Y`                   | Giới hạn theo trục dọc   |
| `Esc` hoặc chuột phải | Hủy thao tác             |

### Di chuyển UV

```text
G
```

Khi di chuyển một UV face sang vùng khác của ảnh, phần texture hiển thị trên mặt 3D cũng thay đổi.

### Scale UV

```text
S
```

Scale UV lớn hơn làm mặt đó sử dụng một vùng lớn hơn của ảnh.

Scale UV nhỏ hơn làm mặt đó chỉ sử dụng một vùng nhỏ của ảnh.

### Xoay UV

```text
R
```

Xoay UV giúp chỉnh đúng hướng của cửa sổ, cửa ra vào hoặc các chi tiết khác trên texture.

Ví dụ:

```text
R
-90
Enter
```

---

## 12. UV kết nối và hiện tượng kéo giãn

Khi nhiều mặt UV vẫn đang nối với nhau, việc di chuyển một mặt có thể kéo theo các cạnh và mặt xung quanh.

```text
Di chuyển một mặt UV đang nối
              │
              ▼
Các UV lân cận bị kéo giãn
              │
              ▼
Texture trên mô hình bị méo
```

Tuy nhiên, nếu chỉ chọn riêng một mặt trên mô hình, UV Editor có thể chỉ hiển thị mặt đó. Khi di chuyển, bạn có thể đặt mặt UV này độc lập vào một vị trí mới trên ảnh.

Điểm cần chú ý:

* Chọn đúng một mặt trong 3D Viewport.
* Chuyển sang Face Select nếu cần.
* Kiểm tra trong UV Editor trước khi di chuyển.
* Quan sát trực tiếp kết quả trên mô hình.

---

## 13. Thay Color Grid bằng texture tòa nhà

Sau khi hiểu cách UV hoạt động, bài học chuyển sang sử dụng một ảnh texture thật.

Texture được chọn là một ảnh mặt tiền tòa nhà có đặc điểm:

* Bề mặt khá phẳng.
* Có cửa ra vào.
* Có nhiều cửa sổ.
* Có những vùng tường trống.
* Góc chụp tương đối trực diện.

Ảnh kiểu này phù hợp để tạo một ngôi nhà đơn giản từ Cube.

> Tài nguyên khóa học đã cung cấp sẵn một số texture do trang texture được nhắc trong video chuyển sang mô hình thuê bao.

---

## 14. Mở texture trong Blender

Trong node Image Texture:

1. Nhấn **Open**.
2. Tìm ảnh tòa nhà.
3. Chọn ảnh.
4. Nhấn **Open Image**.

Ảnh sẽ được gắn vào vật liệu và xuất hiện trên Cube.

Đôi khi ảnh trong UV Editor không tự động đổi theo node Image Texture. Trong trường hợp đó:

1. Mở danh sách ảnh ở phía trên UV Editor.
2. Chọn đúng texture tòa nhà đã được nạp.

Danh sách này chứa toàn bộ ảnh đang được nạp trong file Blender.

---

## 15. Aspect Ratio của texture

**Aspect Ratio** là tỷ lệ giữa chiều rộng và chiều cao của ảnh.

Ví dụ:

```text
Ảnh vuông:     1000 × 1000
Ảnh ngang:     2000 × 1000
Ảnh dọc:       1000 × 2000
```

Texture tòa nhà trong bài có dạng dài và mỏng. Vì vậy, UV layout có thể trông như bị kéo giãn để phù hợp với tỷ lệ của ảnh.

Điều này không nhất thiết có nghĩa là mesh bị thay đổi. Đây là cách UV được hiển thị trên một ảnh có tỷ lệ khác với ảnh vuông.

---

## 16. Tạo mặt trước của ngôi nhà

Chọn một mặt Cube để làm mặt trước.

### Các bước cơ bản

1. Chọn mặt trước trong 3D Viewport.
2. Chọn UV face tương ứng.
3. Xoay UV khoảng `-90°` nếu texture bị nằm ngang.
4. Scale UV để vừa với khu vực cửa ra vào.
5. Di chuyển UV đến đúng vị trí.
6. Quan sát kết quả trong Material Preview.

Ví dụ thao tác:

```text
R → -90 → Enter
S → thu nhỏ
S → X → điều chỉnh chiều rộng
S → Y → điều chỉnh chiều cao
G → đặt vào khu vực cửa ra vào
```

Mục tiêu là đặt UV của mặt trước lên khu vực có:

* Cửa ra vào.
* Một phần tường.
* Một số cửa sổ phù hợp.

---

## 17. Giữ đúng tỷ lệ khi chỉnh UV

Nếu scale UV không đồng đều theo X và Y, texture có thể bị méo.

Ví dụ:

```text
Scale quá rộng theo X
        │
        ▼
Cửa sổ và cửa ra vào bị kéo ngang
```

```text
Scale quá cao theo Y
        │
        ▼
Cửa sổ và cửa ra vào bị kéo dọc
```

Cần cố gắng giữ cho các chi tiết như cửa sổ và cửa ra vào có hình dạng hợp lý.

Không nhất thiết UV face phải hoàn toàn vuông, nhưng cần tránh sự biến dạng quá rõ ràng.

---

## 18. Đặt UV cho các mặt bên

Tiếp tục chọn từng mặt bên của Cube.

Với mỗi mặt:

1. Chọn mặt trong 3D Viewport.
2. Xoay UV đúng hướng.
3. Scale UV.
4. Di chuyển UV đến một khu vực khác trên ảnh.
5. Chọn vùng có cửa sổ hoặc tường phù hợp.
6. So sánh độ cao cửa sổ giữa các mặt.

Ví dụ, có thể căn các cửa sổ ở mặt bên sao cho gần cùng độ cao với cửa sổ ở mặt trước.

```text
Mặt trước:  ────[ Cửa sổ ]────
Mặt bên:    ────[ Cửa sổ ]────
                    ▲
              Cùng độ cao
```

---

## 19. Đặt UV cho mặt mái

Mặt trên của Cube có thể được sử dụng làm mái.

Không nên đặt UV mặt mái lên khu vực có cửa sổ hoặc cửa ra vào, vì điều này không hợp lý về mặt hình ảnh.

Thay vào đó:

1. Chọn mặt trên.
2. Thu nhỏ UV.
3. Đặt UV vào một vùng tường trơn hoặc vùng không có cửa sổ.
4. Điều chỉnh sao cho texture ít bị kéo giãn.

---

## 20. UV chồng lên nhau

Các UV face có thể chồng lên nhau.

Ví dụ, hai mặt bên có thể cùng sử dụng một khu vực cửa sổ trên texture.

```text
UV mặt trái ─┐
             ├── Cùng sử dụng một vùng texture
UV mặt phải ─┘
```

Điều này được gọi là **UV Overlap**.

Trong bài thực hành đơn giản này, UV chồng lên nhau hoàn toàn có thể chấp nhận được.

### Khi UV overlap hữu ích

* Hai mặt cần có texture giống nhau.
* Hai bức tường sử dụng cùng một kiểu cửa sổ.
* Muốn tiết kiệm diện tích texture.
* Mô hình có nhiều phần đối xứng.

### Hạn chế

Nếu sau này cần vẽ chi tiết riêng cho từng mặt, UV overlap có thể gây vấn đề vì chỉnh một khu vực ảnh sẽ ảnh hưởng đến tất cả mặt đang sử dụng khu vực đó.

---

## 21. Độ phân giải và độ sắc nét

Texture được tạo thành từ các pixel.

Một UV face càng chiếm nhiều diện tích trên ảnh thì mặt đó càng sử dụng nhiều pixel.

```text
UV chiếm diện tích lớn
          │
          ▼
Sử dụng nhiều pixel
          │
          ▼
Texture sắc nét hơn
```

Ngược lại:

```text
UV chiếm diện tích nhỏ
          │
          ▼
Sử dụng ít pixel
          │
          ▼
Texture dễ bị mờ hoặc vỡ hạt
```

Ví dụ, nếu UV của mái chỉ nằm trên một vùng rất nhỏ của ảnh, texture trên mái có thể mờ hơn các mặt tường.

### Hai yếu tố ảnh hưởng đến chất lượng

1. **Độ phân giải của ảnh texture**
2. **Diện tích UV sử dụng trên ảnh**

Texture có độ phân giải cao hơn thường cho kết quả sắc nét hơn, nhưng cũng sử dụng nhiều bộ nhớ hơn.

---

## 22. Quy trình thực hành hoàn chỉnh

```text
Chọn Cube
    │
    ▼
Mở workspace UV Editing
    │
    ▼
Tạo Material và mở Shader Editor
    │
    ▼
Thêm node Image Texture
    │
    ▼
Tạo Color Grid để kiểm tra UV
    │
    ▼
Nối Image Texture vào Base Color
    │
    ▼
Thử di chuyển, xoay và scale UV
    │
    ▼
Mở texture tòa nhà
    │
    ▼
Chọn từng mặt Cube
    │
    ▼
Đặt từng UV face lên cửa, cửa sổ hoặc tường
    │
    ▼
Kiểm tra texture trong Material Preview
    │
    ▼
Điều chỉnh biến dạng và độ sắc nét
    │
    ▼
Lưu file Blender
```

---

## 23. Phím tắt và công cụ quan trọng

| Phím hoặc công cụ     | Chức năng                             |
| --------------------- | ------------------------------------- |
| `Shift + A`           | Thêm object hoặc node mới             |
| `Tab`                 | Chuyển giữa Object Mode và Edit Mode  |
| `A`                   | Chọn toàn bộ                          |
| `Alt + A`             | Bỏ chọn toàn bộ                       |
| `G`                   | Di chuyển UV                          |
| `S`                   | Scale UV                              |
| `R`                   | Xoay UV                               |
| `X`                   | Giới hạn thao tác theo trục X         |
| `Y`                   | Giới hạn thao tác theo trục Y         |
| `N`                   | Mở hoặc đóng sidebar                  |
| `Ctrl + Spacebar`     | Phóng to hoặc thu nhỏ editor hiện tại |
| Chuột phải hoặc `Esc` | Hủy thao tác đang thực hiện           |
| **Material Preview**  | Xem texture trực tiếp trên mô hình    |
| **New**               | Tạo ảnh mới trong Blender             |
| **Open**              | Mở ảnh texture từ máy tính            |

> Trong UV Editor chỉ sử dụng hai trục `X` và `Y`. Không có trục `Z` vì UV là không gian phẳng 2D.

---

## 24. Lỗi thường gặp

### 24.1. Texture chỉ xuất hiện trong UV Editor

**Nguyên nhân:** Ảnh chưa được chọn trong node Image Texture.

**Cách xử lý:**

* Mở danh sách ảnh trong node Image Texture.
* Chọn đúng ảnh.
* Nối đầu ra Color vào Base Color.

---

### 24.2. UV Editor hiển thị sai ảnh

**Nguyên nhân:** UV Editor đang hiển thị một image data-block khác.

**Cách xử lý:**

* Mở danh sách ảnh ở đầu UV Editor.
* Chọn đúng texture tòa nhà.

---

### 24.3. Texture bị xoay ngang

**Cách xử lý:**

```text
R → -90 → Enter
```

Hoặc xoay đến khi cửa sổ và cửa ra vào đúng chiều.

---

### 24.4. Texture bị kéo giãn

**Nguyên nhân:**

* Scale UV không đều.
* Di chuyển một mặt UV khi nó vẫn nối với các mặt xung quanh.
* UV face có tỷ lệ không phù hợp với vùng ảnh.

**Cách xử lý:**

* Điều chỉnh lại theo trục X và Y.
* Chọn riêng từng mặt.
* Quan sát trực tiếp trong Material Preview.

---

### 24.5. Texture bị mờ

**Nguyên nhân:**

* UV chỉ chiếm một vùng rất nhỏ trên ảnh.
* Texture có độ phân giải thấp.

**Cách xử lý:**

* Cho UV sử dụng vùng ảnh lớn hơn.
* Sử dụng texture có độ phân giải cao hơn.
* Tránh thu nhỏ UV quá mức.

---

### 24.6. Chọn một mặt nhưng nhiều mặt bị biến dạng

**Nguyên nhân:** Các mặt UV vẫn đang nối với nhau hoặc nhiều thành phần đang được chọn.

**Cách xử lý:**

* Bỏ chọn toàn bộ.
* Chọn riêng một mặt trong 3D Viewport.
* Chuyển sang Face Select.
* Kiểm tra phần UV đang được hiển thị trước khi chỉnh sửa.

---

## 25. Bài tập thực hành

Sử dụng một Cube và một texture mặt tiền tòa nhà để tạo ngôi nhà đơn giản.

### Yêu cầu

* Mặt trước có cửa ra vào.
* Các mặt bên có cửa sổ.
* Cửa sổ giữa các mặt tương đối thẳng hàng.
* Mặt trên không chứa cửa sổ hoặc cửa ra vào.
* Texture không bị kéo giãn quá rõ.
* Có thể cho phép các UV face chồng lên nhau.
* Lưu lại file để sử dụng trong bài học tiếp theo.

### Thử nghiệm thêm

* Di chuyển một UV vertex và quan sát texture.
* Di chuyển một UV edge và quan sát vùng bị kéo giãn.
* Scale UV theo X.
* Scale UV theo Y.
* Xoay UV 90°.
* Đặt hai mặt UV lên cùng một khu vực texture.
* So sánh độ sắc nét giữa UV lớn và UV nhỏ.

---

## 26. Checklist hoàn thành

* [ ] Đã tìm thấy UV Map trong Object Data Properties.
* [ ] Đã mở workspace UV Editing.
* [ ] Đã phân biệt UV Editor với Image Editor.
* [ ] Đã tạo thêm cửa sổ Shader Editor.
* [ ] Đã thêm node Image Texture.
* [ ] Đã tạo ảnh Color Grid khoảng 1K.
* [ ] Đã nối Image Texture vào Base Color.
* [ ] Đã thử di chuyển UV bằng `G`.
* [ ] Đã thử scale UV bằng `S`.
* [ ] Đã thử xoay UV bằng `R`.
* [ ] Đã mở texture tòa nhà.
* [ ] Đã đặt UV cho mặt trước của ngôi nhà.
* [ ] Đã đặt UV cho các mặt bên.
* [ ] Đã đặt mặt mái vào vùng texture phù hợp.
* [ ] Đã hiểu UV overlap có thể được sử dụng trong bài này.
* [ ] Đã kiểm tra độ kéo giãn và độ sắc nét của texture.
* [ ] Đã lưu file Blender.

---

## 27. Tóm tắt bài học

UV Mapping cho phép Blender biết cách đặt một hình ảnh 2D lên bề mặt mô hình 3D.

Trong bài học này, Cube được sử dụng để minh họa quy trình:

1. Xem UV Map mặc định.
2. Tạo Color Grid để kiểm tra UV.
3. Gắn Image Texture vào vật liệu.
4. Di chuyển, xoay và scale các mặt UV.
5. Thay Color Grid bằng ảnh mặt tiền tòa nhà.
6. Đặt từng mặt của Cube lên các vùng phù hợp của ảnh.
7. Hoàn thiện một ngôi nhà đơn giản.

Điểm quan trọng nhất là hiểu mối quan hệ:

```text
Mặt của mesh
     ↕
UV face trong UV Editor
     ↕
Khu vực tương ứng trên texture
```

Khi UV thay đổi, phần texture hiển thị trên mô hình cũng thay đổi. UV càng sử dụng nhiều pixel thì hình ảnh trên mô hình càng sắc nét. Ngược lại, UV quá nhỏ hoặc bị scale không đều sẽ khiến texture bị mờ hoặc biến dạng.
