# 050 — Giới thiệu hệ thống Shader Nodes

| Thuộc tính       | Nội dung                                         |
| ---------------- | ------------------------------------------------ |
| **Module**       | Module 03 — Low-Poly Dinosaur                    |
| **Bài học**      | Intro to Nodes                                   |
| **Thời lượng**   | 11:48                                            |
| **Chủ đề chính** | Texture Nodes, Texture Coordinates và Color Ramp |

---

## 1. Mục tiêu bài học

Sau bài học này, bạn có thể:

* Hiểu cách dữ liệu di chuyển giữa các node trong **Shader Editor**.
* Thiết lập workspace gồm **3D Viewport** và **Shader Editor**.
* Thử nghiệm các procedural texture:

  * Noise Texture
  * Wave Texture
  * Musgrave Texture
* Phân biệt procedural texture và image texture.
* Hiểu vai trò cơ bản của:

  * Factor
  * Color
  * Vector
  * Generated
  * Object
  * UV
* Sử dụng **Texture Coordinate** để điều khiển cách texture được đặt lên mô hình.
* Sử dụng **Color Ramp** để chuyển dữ liệu đen trắng thành màu sắc.
* Biết cách tạm tắt một node bằng phím `M`.

---

## 2. Chuẩn bị workspace

Trước khi chỉnh sửa vật liệu, cần bố trí lại giao diện để có thể vừa quan sát mô hình, vừa làm việc với node.

### Các bước thực hiện

1. Chia khu vực làm việc thành hai cửa sổ.
2. Giữ cửa sổ bên trái là **3D Viewport**.
3. Chuyển cửa sổ bên phải thành **Shader Editor**.
4. Nhấn `N` trong Shader Editor để đóng thanh bên nếu không cần sử dụng.
5. Kiểm tra Shader Editor đang hiển thị:

```text
Object
```

thay vì:

```text
World
```

6. Chọn mô hình khủng long để các node vật liệu của nó xuất hiện.
7. Chuyển 3D Viewport sang chế độ **Rendered View** để quan sát trực tiếp kết quả vật liệu.

### Bố cục gợi ý

```text
┌────────────────────────────┬────────────────────────────┐
│                            │                            │
│        3D Viewport         │       Shader Editor        │
│                            │                            │
│  Quan sát khủng long và    │  Thêm, kết nối và chỉnh    │
│  kết quả của vật liệu      │  thông số các node         │
│                            │                            │
└────────────────────────────┴────────────────────────────┘
```

---

## 3. Cấu trúc vật liệu cơ bản

Vật liệu mặc định thường có hai node chính:

```text
Principled BSDF ──────────► Material Output
                     BSDF       Surface
```

### Principled BSDF

`Principled BSDF` là shader chính, quyết định đặc điểm bề mặt của vật thể.

Trong bài này, input được sử dụng nhiều nhất là:

* **Base Color**: màu cơ bản của vật liệu.

Khi chưa có texture nào được kết nối, Base Color sử dụng màu được thiết lập trực tiếp trên node.

Khi một texture được nối vào Base Color, texture đó sẽ thay thế màu mặc định.

---

## 4. Nguyên tắc kết nối node

Mỗi node có các điểm kết nối, còn gọi là **socket**:

* Socket bên trái thường là **Input**.
* Socket bên phải thường là **Output**.

Dữ liệu thường chảy từ trái sang phải:

```text
Node tạo dữ liệu
       │
       ▼
Node xử lý dữ liệu
       │
       ▼
Principled BSDF
       │
       ▼
Material Output
```

Ví dụ:

```text
Noise Texture
     Factor
       │
       ▼
Principled BSDF
   Base Color
```

Các đường nối giữa node đôi khi được gọi là **noodles**.

Một node không được nối vào hệ thống vật liệu sẽ không ảnh hưởng đến kết quả cuối cùng.

---

## 5. Noise Texture

Để thêm Noise Texture:

```text
Shift + A
→ Texture
→ Noise Texture
```

Sau đó nối output của Noise Texture vào:

```text
Principled BSDF → Base Color
```

### Sử dụng output Factor

Khi nối `Factor` vào Base Color, texture tạo ra các vùng đen, trắng và xám phân bố ngẫu nhiên trên bề mặt.

```text
Noise Texture: Factor
          │
          ▼
Principled BSDF: Base Color
```

Có thể tạm hiểu:

```text
Factor = dữ liệu đen trắng
```

* Giá trị thấp thường được biểu diễn bằng màu đen.
* Giá trị cao thường được biểu diễn bằng màu trắng.
* Các giá trị trung gian được biểu diễn bằng màu xám.

### Sử dụng output Color

Khi sử dụng output `Color`, Noise Texture có thể tạo dữ liệu màu sắc thay vì chỉ dữ liệu đen trắng.

```text
Noise Texture: Color
          │
          ▼
Principled BSDF: Base Color
```

### Một số thông số quan trọng

| Thông số       | Tác dụng cơ bản                                 |
| -------------- | ----------------------------------------------- |
| **Scale**      | Điều chỉnh kích thước của các mảng noise        |
| **Detail**     | Tăng hoặc giảm số lượng chi tiết nhỏ            |
| **Roughness**  | Điều chỉnh mức độ gồ ghề, phức tạp của chi tiết |
| **Distortion** | Làm biến dạng cấu trúc noise                    |

Không nhất thiết phải ghi nhớ chính xác tất cả thông số ngay lập tức. Cách tốt nhất là thay đổi từng giá trị và quan sát kết quả trực tiếp trên mô hình.

---

## 6. Wave Texture

Để thêm Wave Texture:

```text
Shift + A
→ Texture
→ Wave Texture
```

Wave Texture tạo ra các đường hoặc dải lặp lại trên bề mặt vật thể.

```text
Wave Texture
      │
      ▼
Principled BSDF
  Base Color
```

### Một số thông số thường dùng

| Thông số         | Tác dụng                                     |
| ---------------- | -------------------------------------------- |
| **Scale**        | Tăng hoặc giảm số lượng đường                |
| **Distortion**   | Làm các đường bị uốn cong hoặc biến dạng     |
| **Detail**       | Bổ sung chi tiết cho phần biến dạng          |
| **Detail Scale** | Điều chỉnh kích thước của chi tiết biến dạng |

Trong trường hợp Wave Texture, output `Factor` và `Color` có thể cho kết quả khá giống nhau khi hiển thị dưới dạng đen trắng.

---

## 7. Musgrave Texture

Để thêm Musgrave Texture:

```text
Shift + A
→ Texture
→ Musgrave Texture
```

Musgrave Texture cũng tạo ra một dạng procedural texture ngẫu nhiên, nhưng cấu trúc của nó khác Noise Texture.

Node này có thể sử dụng output `Height` thay vì `Factor`.

Trong phạm vi bài học, có thể hiểu:

```text
Height ≈ Factor
```

Nó vẫn đại diện cho dữ liệu cường độ dưới dạng đen, trắng và xám.

```text
Musgrave Texture: Height
             │
             ▼
Principled BSDF: Base Color
```

### Thông số Scale

`Scale` thay đổi kích thước của các mảng texture:

* Scale thấp: các mảng lớn hơn.
* Scale cao: các mảng nhỏ và dày hơn.

> Tùy phiên bản Blender, tên hoặc vị trí của một số procedural texture có thể khác so với giao diện trong khóa học.

---

## 8. Procedural Texture là gì?

Noise Texture, Wave Texture và Musgrave Texture là các **procedural texture**.

Procedural texture được Blender tạo ra bằng thuật toán, không cần tải hình ảnh từ bên ngoài.

### Đặc điểm

* Có thể thay đổi vô hạn bằng các thông số.
* Không phụ thuộc vào độ phân giải của ảnh.
* Thường được áp dụng tương đối tốt lên mô hình 3D.
* Có thể tạo đá, mây, đất, gỗ, vết bẩn và nhiều dạng bề mặt khác.

```text
Thông số toán học
       │
       ▼
Procedural Texture
       │
       ▼
Hoa văn trên vật thể
```

---

## 9. Image Texture

Để thêm một hình ảnh làm texture:

```text
Shift + A
→ Texture
→ Image Texture
```

Sau đó:

1. Nhấn **Open**.
2. Chọn một hình ảnh từ máy tính.
3. Nối output `Color` của Image Texture vào Base Color.

```text
Image Texture: Color
          │
          ▼
Principled BSDF: Base Color
```

Nếu chưa tải hình ảnh, vật liệu có thể hiển thị màu đen.

### Vấn đề khi đưa ảnh 2D lên vật thể 3D

Image Texture là một hình ảnh phẳng hai chiều, trong khi khủng long là vật thể ba chiều.

Blender cần biết:

* Phần nào của ảnh nằm trên đầu.
* Phần nào của ảnh nằm trên thân.
* Ảnh phải xoay theo hướng nào.
* Ảnh phải co giãn ra sao.

Nếu không có phương pháp mapping phù hợp, hình ảnh có thể:

* Bị kéo giãn.
* Bị méo.
* Bị lặp lại.
* Xuất hiện không đúng vị trí.

```text
Ảnh 2D
  │
  │ Cần hệ tọa độ để xác định vị trí
  ▼
Bề mặt mô hình 3D
```

---

## 10. Vector và Texture Mapping

Hầu hết các texture node đều có input `Vector`.

`Vector` cung cấp thông tin vị trí để Blender biết cách đặt texture lên vật thể.

```text
Texture Coordinate
       │
       ▼
Vector của Texture
       │
       ▼
Texture được đặt lên mô hình
```

Có thể hiểu đơn giản:

```text
Vector = thông tin về vị trí và hướng của texture
```

---

## 11. Texture Coordinate Node

Để thêm Texture Coordinate:

```text
Shift + A
→ Input
→ Texture Coordinate
```

Hoặc sử dụng ô tìm kiếm và nhập:

```text
Texture Coordinate
```

Node này cung cấp nhiều loại tọa độ khác nhau để điều khiển texture.

Trong bài học, ba output quan trọng là:

* Generated
* Object
* UV

---

## 12. Generated Coordinates

`Generated` là hệ tọa độ được Blender tự động tạo dựa trên hình dạng giới hạn của vật thể.

```text
Texture Coordinate: Generated
              │
              ▼
Procedural Texture: Vector
```

Các procedural texture thường tự động sử dụng một phương pháp gần giống Generated khi chưa có node tọa độ được nối vào.

Vì vậy, khi nối Generated vào Noise hoặc Musgrave, kết quả có thể gần như không thay đổi.

### Đặc điểm

* Dễ sử dụng.
* Không cần UV unwrap.
* Phù hợp cho procedural texture.
* Đôi khi texture có thể bị kéo giãn hoặc phân bố chưa đều.

---

## 13. Object Coordinates

`Object` sử dụng hệ tọa độ của object để phân bố texture.

```text
Texture Coordinate: Object
             │
             ▼
Musgrave Texture: Vector
```

So với Generated, Object Coordinates thường cho kết quả procedural texture đồng đều hơn trên mô hình.

Trong ví dụ của bài học:

* Generated làm texture hơi bị kéo giãn ở một số khu vực.
* Object làm texture nhỏ hơn nhưng phân bố đều hơn.

### Quy tắc thực hành

```text
Procedural Texture
        │
        └── Thường nên thử Object Coordinates
```

Ví dụ đầy đủ:

```text
Texture Coordinate
      Object
        │
        ▼
Musgrave Texture
      Height
        │
        ▼
Principled BSDF
    Base Color
        │
        ▼
Material Output
```

---

## 14. UV Coordinates

`UV` là hệ tọa độ được thiết kế để đặt hình ảnh 2D lên bề mặt 3D.

```text
Texture Coordinate: UV
            │
            ▼
Image Texture: Vector
```

Khi sử dụng Image Texture, Blender thường mặc định sử dụng UV mapping.

### Quy tắc ghi nhớ

```text
Image Texture      → UV Coordinates
Procedural Texture → Object hoặc Generated Coordinates
```

UV mapping sẽ được trình bày kỹ hơn trong các bài sau.

---

## 15. So sánh các loại tọa độ

| Tọa độ        | Phù hợp với        | Đặc điểm                                    |
| ------------- | ------------------ | ------------------------------------------- |
| **Generated** | Procedural texture | Blender tự động tạo, nhanh và dễ dùng       |
| **Object**    | Procedural texture | Thường phân bố đồng đều và dễ kiểm soát hơn |
| **UV**        | Image texture      | Dùng để trải ảnh 2D lên mô hình 3D          |

### Sơ đồ lựa chọn

```text
Bạn đang dùng loại texture nào?
              │
       ┌──────┴──────┐
       │             │
Procedural         Image
 Texture           Texture
       │             │
       ▼             ▼
Object hoặc          UV
Generated
```

---

## 16. Thêm Color Ramp

Dữ liệu từ procedural texture thường là đen, trắng và xám.

Để chuyển dữ liệu này thành các màu mong muốn, có thể thêm node `Color Ramp`.

```text
Shift + A
→ Converter
→ Color Ramp
```

Đặt Color Ramp vào giữa procedural texture và Principled BSDF:

```text
Musgrave Texture
      Height
        │
        ▼
    Color Ramp
      Color
        │
        ▼
Principled BSDF
    Base Color
```

Khi kéo Color Ramp lên đường kết nối hiện có, Blender có thể tự động chèn node vào giữa đường nối.

---

## 17. Color Ramp hoạt động như thế nào?

Color Ramp ánh xạ dữ liệu đen trắng từ texture thành các màu mới.

Ví dụ texture ban đầu có:

```text
Đen ───────── Xám ───────── Trắng
```

Color Ramp có thể chuyển thành:

```text
Đỏ ───────── Xanh lá ───────── Xanh dương
```

### Luồng dữ liệu

```text
Musgrave tạo dữ liệu:

0.0                0.5                1.0
Đen                Xám                Trắng
 │                  │                   │
 ▼                  ▼                   ▼
Đỏ              Xanh lá           Xanh dương
```

Những vùng ban đầu màu xám sẽ nhận màu nằm ở giữa Color Ramp.

---

## 18. Điều chỉnh Color Ramp

Color Ramp mặc định có hai điểm:

* Điểm màu đen ở bên trái.
* Điểm màu trắng ở bên phải.

### Di chuyển các điểm

Khi kéo điểm đen về bên phải:

* Nhiều vùng xám sẽ trở thành đen hơn.
* Ranh giới giữa các vùng màu thay đổi.

Khi kéo điểm trắng về bên trái:

* Nhiều vùng xám sẽ trở thành trắng hơn.

### Thay đổi màu

1. Chọn một điểm trên Color Ramp.
2. Nhấn vào ô màu phía dưới.
3. Chọn màu mới.

Ví dụ:

* Đổi màu đen thành đỏ.
* Đổi màu trắng thành xanh dương.

Các giá trị ở giữa sẽ được nội suy thành màu tím hoặc các màu chuyển tiếp khác.

### Thêm điểm màu mới

Nhấn biểu tượng:

```text
+
```

để thêm một điểm vào Color Ramp.

Ví dụ thêm một điểm màu xanh lá ở giữa:

```text
Đỏ ─────── Xanh lá ─────── Xanh dương
```

Điều này giúp tạo vật liệu có nhiều dải màu hơn.

---

## 19. Mute node bằng phím M

Để tạm thời vô hiệu hóa một node:

```text
M
```

Khi Color Ramp bị mute, Blender sẽ bỏ qua tác động của nó và cho phép quan sát dữ liệu texture ban đầu.

```text
Texture → Color Ramp → Principled BSDF
             │
             └── Nhấn M để tạm bỏ qua
```

Nhấn `M` lần nữa để bật lại node.

### Công dụng

* So sánh trước và sau khi xử lý.
* Kiểm tra node nào đang gây ra kết quả không mong muốn.
* Tạm bỏ qua một phần của hệ thống mà không cần xóa node.

---

## 20. Hai hệ thống node quan trọng trong bài

### Procedural texture có màu

```text
┌────────────────────┐
│ Texture Coordinate │
│       Object       │
└─────────┬──────────┘
          │
          ▼
┌────────────────────┐
│ Musgrave / Noise   │
│    / Wave Texture  │
└─────────┬──────────┘
          │
          ▼
┌────────────────────┐
│     Color Ramp     │
│ Đổi đen trắng sang │
│      màu sắc       │
└─────────┬──────────┘
          │
          ▼
┌────────────────────┐
│  Principled BSDF   │
│     Base Color     │
└─────────┬──────────┘
          │
          ▼
┌────────────────────┐
│  Material Output   │
└────────────────────┘
```

### Image texture

```text
┌────────────────────┐
│ Texture Coordinate │
│         UV         │
└─────────┬──────────┘
          │
          ▼
┌────────────────────┐
│   Image Texture    │
└─────────┬──────────┘
          │
          ▼
┌────────────────────┐
│  Principled BSDF   │
│     Base Color     │
└─────────┬──────────┘
          │
          ▼
┌────────────────────┐
│  Material Output   │
└────────────────────┘
```

---

## 21. Quy trình thực hành

### Bài tập 1: Noise Texture

1. Chọn khủng long.
2. Mở Shader Editor.
3. Thêm Noise Texture.
4. Nối `Factor` vào Base Color.
5. Thử thay đổi:

   * Scale
   * Detail
   * Roughness
   * Distortion
6. Chuyển sang output `Color` và so sánh.

### Bài tập 2: Wave Texture

1. Thêm Wave Texture.
2. Nối vào Base Color.
3. Thay đổi Scale để tăng số lượng đường.
4. Thử Distortion và Detail.
5. So sánh output Factor với Color.

### Bài tập 3: Musgrave Texture

1. Thêm Musgrave Texture.
2. Nối Height vào Base Color.
3. Thay đổi Scale.
4. Quan sát cấu trúc texture trên mô hình.

### Bài tập 4: Image Texture

1. Thêm Image Texture.
2. Mở một hình ảnh bất kỳ.
3. Nối Color vào Base Color.
4. Quan sát hiện tượng méo hoặc kéo giãn.
5. Thêm Texture Coordinate.
6. Nối UV vào Vector của Image Texture.

### Bài tập 5: So sánh tọa độ

1. Nối Generated vào procedural texture.
2. Quan sát kết quả.
3. Thay Generated bằng Object.
4. So sánh độ đồng đều của texture.
5. Nối UV vào Image Texture để hiểu phương pháp mặc định của ảnh.

### Bài tập 6: Color Ramp

1. Chọn một procedural texture.
2. Thêm Color Ramp vào giữa texture và Principled BSDF.
3. Đổi màu đen thành đỏ.
4. Đổi màu trắng thành xanh dương.
5. Thêm một điểm màu xanh lá ở giữa.
6. Di chuyển các điểm để thay đổi phân bố màu.
7. Nhấn `M` để so sánh trước và sau Color Ramp.

---

## 22. Phím tắt và công cụ

| Phím/Công cụ          | Chức năng                                        |
| --------------------- | ------------------------------------------------ |
| `Shift + A`           | Mở menu thêm node                                |
| `N`                   | Mở hoặc đóng thanh bên trong Shader Editor       |
| `M`                   | Mute hoặc Unmute node đang chọn                  |
| `Z`                   | Mở menu chế độ hiển thị trong 3D Viewport        |
| **Rendered**          | Hiển thị kết quả vật liệu với ánh sáng của scene |
| **Open**              | Mở hình ảnh trong Image Texture                  |
| **+ trên Color Ramp** | Thêm một điểm màu mới                            |

---

## 23. Lưu ý và lỗi thường gặp

### Không thấy node vật liệu

**Nguyên nhân:**

* Chưa chọn object.
* Shader Editor đang ở chế độ World.
* Object chưa có material.

**Cách xử lý:**

* Chọn mô hình khủng long.
* Chuyển Shader Editor sang Object.
* Kiểm tra material đang được gán cho object.

---

### Không thấy thay đổi trong viewport

**Nguyên nhân:**

Viewport đang ở chế độ Solid.

**Cách xử lý:**

Chuyển sang:

* Material Preview; hoặc
* Rendered View.

---

### Texture không ảnh hưởng đến vật liệu

**Nguyên nhân:**

Node chưa được nối vào Principled BSDF.

```text
Node nằm riêng lẻ = không ảnh hưởng đến kết quả
```

Hãy kiểm tra đường nối cuối cùng có đi đến:

```text
Principled BSDF → Base Color
```

---

### Image Texture bị méo

Đây là hiện tượng bình thường khi ảnh 2D chưa được UV mapping phù hợp.

Trong bài này chỉ cần hiểu rằng:

```text
Image Texture thường cần UV
```

Việc UV unwrap chi tiết sẽ được học sau.

---

### Procedural texture bị kéo giãn

Hãy thử nối:

```text
Texture Coordinate: Object
```

vào:

```text
Procedural Texture: Vector
```

Object Coordinates có thể giúp texture phân bố đồng đều hơn.

---

### Thay đổi Base Color nhưng không thấy tác dụng

Khi một texture đã được nối vào Base Color, màu mặc định của Base Color sẽ bị thay thế.

```text
Không có kết nối → dùng màu Base Color mặc định
Có kết nối      → dùng dữ liệu từ texture
```

---

## 24. Checklist thực hành

* [ ] Đã chia giao diện thành 3D Viewport và Shader Editor.
* [ ] Đã chuyển Shader Editor sang chế độ Object.
* [ ] Đã chuyển viewport sang Rendered View.
* [ ] Đã thử Noise Texture.
* [ ] Đã thử Wave Texture.
* [ ] Đã thử Musgrave Texture.
* [ ] Đã tải một hình ảnh bằng Image Texture.
* [ ] Hiểu Factor và Height là dữ liệu cường độ đen trắng.
* [ ] Hiểu Vector quyết định vị trí của texture.
* [ ] Đã thử Generated Coordinates.
* [ ] Đã thử Object Coordinates.
* [ ] Đã thử UV Coordinates với Image Texture.
* [ ] Đã chèn Color Ramp giữa texture và Principled BSDF.
* [ ] Đã thay đổi màu trên Color Ramp.
* [ ] Đã thêm một điểm màu mới vào Color Ramp.
* [ ] Đã thử Mute và Unmute node bằng phím `M`.

---

## 25. Thử thách cuối bài

Tạo lần lượt ba hệ thống vật liệu sau:

### Noise Texture

```text
Texture Coordinate: Object
        │
        ▼
Noise Texture
        │
        ▼
Color Ramp
        │
        ▼
Principled BSDF: Base Color
```

### Wave Texture

```text
Texture Coordinate: Object
        │
        ▼
Wave Texture
        │
        ▼
Color Ramp
        │
        ▼
Principled BSDF: Base Color
```

### Musgrave Texture

```text
Texture Coordinate: Object
        │
        ▼
Musgrave Texture
        │
        ▼
Color Ramp
        │
        ▼
Principled BSDF: Base Color
```

Với mỗi hệ thống:

* Thay đổi các thông số của texture.
* Thử ít nhất ba màu trên Color Ramp.
* Di chuyển vị trí các điểm màu.
* Nhấn `M` để so sánh trước và sau Color Ramp.

---

## 26. Tóm tắt bài học

Shader Nodes hoạt động như một chuỗi xử lý dữ liệu:

```text
Tọa độ
   │
   ▼
Tạo texture
   │
   ▼
Chuyển đổi màu
   │
   ▼
Shader bề mặt
   │
   ▼
Kết quả vật liệu
```

Các nguyên tắc quan trọng cần ghi nhớ:

```text
Procedural Texture → Object hoặc Generated Coordinates
Image Texture      → UV Coordinates
Dữ liệu đen trắng  → Color Ramp → Màu sắc
Node không kết nối → Không ảnh hưởng đến vật liệu
```

Bài học này tạo nền tảng để xây dựng vật liệu phức tạp hơn, đặc biệt là vật liệu chuyển màu cho ngọn núi trong cảnh khủng long ở bài tiếp theo.
