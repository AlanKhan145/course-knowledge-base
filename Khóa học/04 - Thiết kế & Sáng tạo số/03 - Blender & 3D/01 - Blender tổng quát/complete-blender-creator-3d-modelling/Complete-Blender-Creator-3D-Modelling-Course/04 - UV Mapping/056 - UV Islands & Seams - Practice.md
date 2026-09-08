# 056 — UV Islands & Seams

| Thuộc tính        | Nội dung                                |
| ----------------- | --------------------------------------- |
| **Module**        | Module 04 — UV Mapping                  |
| **Bài học**       | UV Islands & Seams                      |
| **Thời lượng**    | 10:06                                   |
| **Chủ đề chính**  | UV Island, Seam và quy trình Unwrap     |
| **Bài thực hành** | Hình trụ làm thùng gỗ và mô hình Monkey |

---

## 1. Mục tiêu bài học

Sau bài học này, người học có thể:

* Hiểu **Seam** là gì và vì sao cần seam khi trải UV.
* Hiểu **UV Island** và cách các mặt của mô hình được chia thành nhiều mảnh trên UV Editor.
* Quan sát tác động của việc di chuyển UV island lên texture của vật thể.
* Hiển thị seam dựa trên UV island bằng lệnh **Seams from Islands**.
* Xóa UV Map hiện tại và tự tạo UV Map mới bằng **Unwrap**.
* Hiểu vì sao cần **Apply Scale** trước khi unwrap.
* Phân biệt cách hoạt động của tọa độ **UV** và **Generated** với procedural texture.

---

## 2. Seam là gì?

### 2.1. Ví dụ chiếc áo thun

Một chiếc áo thun được tạo từ những mảnh vải phẳng:

1. Vải được cắt thành nhiều mảnh.
2. Các mảnh được ghép và may lại.
3. Những đường nối giữa các mảnh được gọi là **đường may — seam**.

Trong Blender, quá trình UV Mapping hoạt động theo nguyên tắc tương tự:

* Mô hình 3D giống như chiếc áo đã được may hoàn chỉnh.
* Texture là một hình ảnh 2D phẳng.
* Blender cần biết nên “cắt” mô hình ở đâu để có thể trải nó thành mặt phẳng.
* Những cạnh được dùng làm vị trí cắt được gọi là **seam**.

```text
Mô hình 3D
    │
    │ Cắt theo Seam
    ▼
Các mảnh bề mặt rời nhau
    │
    │ Trải phẳng — Unwrap
    ▼
Các UV Island trong UV Editor
```

Seam giúp Blender xác định cách đặt hình ảnh 2D lên bề mặt của mô hình 3D.

---

## 3. UV Island là gì?

**UV Island** là một nhóm các mặt được nối liền với nhau trong không gian UV.

Các mặt trong cùng một island:

* Nằm liền nhau trên UV Editor.
* Không bị chia cắt bởi seam.
* Có thể được di chuyển, xoay hoặc thay đổi kích thước như một nhóm.

Các island khác nhau được tách rời và có thể nằm ở những vị trí khác nhau trong UV space.

### Ví dụ với hình trụ

UV Map mặc định của một hình trụ thường được chia thành ba island:

1. Mặt tròn phía trên.
2. Mặt tròn phía dưới.
3. Dải mặt bên bao quanh hình trụ.

```text
Hình trụ 3D                  UV Map 2D

       ______                ┌───────────┐
     /        \              │ Mặt trên  │
    │          │             └───────────┘
    │ Thân trụ │     →       ┌──────────────────┐
    │          │             │ Dải mặt bên      │
     \________/              └──────────────────┘
                              ┌───────────┐
                              │ Mặt dưới  │
                              └───────────┘
```

Dải mặt bên được trải phẳng giống như việc tháo nhãn giấy khỏi một hộp thực phẩm.

---

## 4. Scale của Object ảnh hưởng đến UV như thế nào?

Trong bài học, giảng viên thay đổi chiều cao của vật thể bằng cách scale trên trục Z:

```text
S → Z
```

Khi scale vật thể trong **Object Mode**:

* Hình dạng mô hình thay đổi.
* UV Map không tự động thay đổi theo.
* Texture bị kéo giãn trên vật thể.

Ví dụ:

```text
Vật thể ban đầu          Scale cao hơn

┌──────────┐             ┌──────────┐
│ Texture  │             │ Texture  │
│ bình     │     →       │ bị kéo   │
│ thường   │             │ giãn     │
└──────────┘             │          │
                         └──────────┘
```

Trong UV Editor, các face vẫn giữ kích thước UV cũ. Vì vậy, texture phải kéo dài để bao phủ hình dạng mới.

### Cách xử lý

Có thể:

* Chỉnh lại kích thước UV island trong UV Editor.
* Hoặc áp dụng scale rồi unwrap lại.

Để áp dụng scale:

```text
Object Mode → Ctrl + A → Scale
```

Sau đó:

```text
Edit Mode → A → U → Unwrap
```

---

## 5. Tạo hình trụ làm thùng gỗ

### Bước 1: Thêm hình trụ

Trong Object Mode:

```text
Shift + A → Mesh → Cylinder
```

Trong bảng tùy chọn tạo hình trụ, đặt:

```text
Vertices: 16
```

Giảm số đỉnh xuống 16 giúp:

* Mô hình có phong cách low-poly.
* Giảm số lượng face.
* UV Map đơn giản và dễ quan sát hơn.

### Bước 2: Điều chỉnh hình dạng

Để làm hình trụ mỏng hơn theo chiều ngang nhưng giữ nguyên chiều cao:

```text
S → Shift + Z
```

Thao tác này scale vật thể trên trục X và Y nhưng không scale trên trục Z.

### Bước 3: Đặt hình trụ cạnh tòa nhà

Có thể di chuyển và scale hình trụ để tạo hình dạng cơ bản của một chiếc thùng gỗ nằm cạnh tòa nhà.

---

## 6. Quan sát UV Map của hình trụ

Chọn hình trụ và mở:

```text
Object Data Properties → UV Maps
```

Hình trụ mặc định đã có một UV Map được Blender tạo sẵn.

Chuyển vào Edit Mode:

```text
Tab
```

UV Editor sẽ hiển thị các UV island tương ứng với những mặt của hình trụ.

### Chế độ chọn Island

Trong UV Editor, chọn chế độ **Island Select**.

Khi đó, người dùng có thể nhấp vào một island để chọn toàn bộ nhóm mặt UV đó.

Ví dụ:

```text
Chọn mặt trên → G → Di chuyển
Chọn mặt dưới → G → Di chuyển
Chọn dải thân → G → Di chuyển
```

Khi di chuyển một island, texture trên phần tương ứng của mô hình cũng thay đổi.

> Sau khi thử nghiệm, nên hoàn tác các thay đổi để UV trở về vị trí ban đầu.

```text
Ctrl + Z
```

---

## 7. Tạo material để quan sát seam

Để nhìn seam rõ hơn, bài học sử dụng một procedural texture.

### Bước 1: Tạo material

Chọn hình trụ và thêm material mới.

### Bước 2: Mở Shader Editor

Chọn node:

```text
Principled BSDF
```

Sau đó nhấn:

```text
Ctrl + T
```

Nếu Node Wrangler được bật, Blender sẽ tự động tạo ba node:

```text
Texture Coordinate
        │
        ▼
     Mapping
        │
        ▼
  Image Texture
        │
        ▼
 Principled BSDF
```

### Bước 3: Bật Node Wrangler

Nếu phím `Ctrl + T` không hoạt động:

```text
Edit → Preferences → Add-ons
```

Tìm:

```text
Node Wrangler
```

Sau đó bật add-on này.

### Bước 4: Thay Image Texture bằng procedural texture

Chọn node Image Texture và sử dụng chức năng đổi loại node của Node Wrangler:

```text
Shift + S
```

Sau đó chọn một procedural texture có họa tiết dễ quan sát, chẳng hạn **Musgrave Texture** trong phiên bản Blender được sử dụng trong khóa học.

Mục đích là tạo các mảng sáng tối rõ ràng để quan sát đường nối giữa các UV island.

---

## 8. Quan sát seam bằng cách di chuyển UV Island

Mặc định, procedural texture đang sử dụng đầu ra:

```text
Texture Coordinate → UV
```

Khi di chuyển các UV island:

* Họa tiết trên mỗi phần của vật thể thay đổi.
* Có thể nhìn thấy các đường nối sắc nét tại nơi các island gặp nhau.
* Những đường nối đó chính là vị trí seam.

### Seam trên hình trụ

Hình trụ thường có:

* Một seam bao quanh mặt trên.
* Một seam bao quanh mặt dưới.
* Một seam chạy dọc theo thân hình trụ.

```text
        Seam quanh mặt trên
              ↓
         ┌─────────┐
        /           \
       │             │
       │             │ ← Seam dọc thân
       │             │
        \___________/
              ↑
        Seam quanh mặt dưới
```

Dải mặt bên được cắt tại seam dọc thân rồi trải thành một hình chữ nhật trong UV Editor.

---

## 9. UV và Generated Coordinates

Procedural texture có thể sử dụng nhiều loại tọa độ khác nhau.

### 9.1. UV Coordinates

Khi nối đầu ra **UV** vào Mapping:

```text
Texture Coordinate: UV
        │
        ▼
      Mapping
        │
        ▼
Procedural Texture
```

Đặc điểm:

* Texture phụ thuộc vào UV Map.
* Di chuyển UV island sẽ làm texture thay đổi.
* Có thể xuất UV Map và texture sang phần mềm khác.
* Phù hợp với game engine như Unity và Unreal Engine.
* Có thể sử dụng với các texture hình ảnh bên ngoài.

### 9.2. Generated Coordinates

Khi sử dụng đầu ra **Generated**:

```text
Texture Coordinate: Generated
        │
        ▼
      Mapping
        │
        ▼
Procedural Texture
```

Đặc điểm:

* Texture được tạo dựa trên không gian của vật thể.
* Các seam trong UV Map thường không còn thể hiện rõ.
* Hữu ích khi sử dụng procedural texture trực tiếp trong Blender.
* Không phụ thuộc nhiều vào cách UV được chia thành island.

### So sánh

| Tiêu chí                              | UV Coordinates | Generated Coordinates    |
| ------------------------------------- | -------------- | ------------------------ |
| Phụ thuộc UV Map                      | Có             | Không hoặc rất ít        |
| Di chuyển UV island ảnh hưởng texture | Có             | Không                    |
| Có thể lộ seam                        | Có             | Thường khó thấy          |
| Dùng image texture                    | Phù hợp        | Hạn chế hơn              |
| Chuyển sang Unity/Unreal              | Phổ biến       | Không thuận tiện bằng UV |
| Dùng procedural texture trong Blender | Có             | Rất phù hợp              |

Mặc dù Generated Coordinates có thể giúp tránh seam, UV Coordinates vẫn phổ biến hơn vì tính tương thích và khả năng kiểm soát texture.

---

## 10. Hiển thị Seam từ UV Island

Để hiển thị seam đang bao quanh các UV island:

1. Vào Edit Mode.
2. Chọn toàn bộ UV:

```text
A
```

3. Trong UV Editor, mở menu:

```text
UV → Seams from Islands
```

Blender sẽ đánh dấu các cạnh bao quanh UV island thành seam.

Trên mô hình 3D, seam được hiển thị bằng các đường màu đỏ hoặc đỏ cam.

Đối với hình trụ, có thể quan sát:

* Đường seam quanh mặt trên.
* Đường seam quanh mặt dưới.
* Một đường seam chạy dọc thân hình trụ.

> **Seams from Islands** tạo seam dựa trên ranh giới hiện tại của các UV island.

---

## 11. Xóa và tạo lại UV Map

Blender tự tạo UV Map cho các primitive như Cube, Cylinder hoặc Monkey. Tuy nhiên, với mô hình phức tạp do người dùng tự dựng, cần biết cách tạo UV Map thủ công.

### Bước 1: Xóa UV Map hiện tại

Mở:

```text
Object Data Properties → UV Maps
```

Chọn UV Map và nhấn nút:

```text
−
```

Sau khi xóa:

* UV Editor không còn dữ liệu UV.
* Texture sử dụng tọa độ UV có thể làm vật thể chuyển sang màu đen.
* Blender chưa biết cách đặt texture lên các face.

### Bước 2: Tạo UV Map mới

Trong Edit Mode:

```text
A → U → Unwrap
```

Blender sẽ tạo một UV Map mới dựa trên:

* Các seam hiện có.
* Hình dạng của mesh.
* Tỷ lệ của vật thể.

---

## 12. Lỗi Non-Uniform Scale

Khi unwrap hình trụ đã được scale nhưng chưa áp dụng scale, Blender có thể hiển thị cảnh báo:

```text
Object has non-uniform scale
```

### Non-uniform scale là gì?

Non-uniform scale xảy ra khi các trục có tỷ lệ khác nhau.

Ví dụ:

| Trục | Scale |
| ---- | ----: |
| X    |   0.7 |
| Y    |   0.7 |
| Z    |   1.4 |

Vật thể đã bị scale không đồng đều giữa chiều ngang và chiều cao.

### Vì sao đây là vấn đề?

Nếu chưa apply scale:

* Blender phải tính toán unwrap dựa trên transform chưa được chuẩn hóa.
* Tỷ lệ UV có thể không phản ánh chính xác tỷ lệ thật của các mặt.
* Texture có thể bị kéo giãn hoặc phân bố không đúng.

### Cách sửa

Chuyển sang Object Mode:

```text
Tab
```

Áp dụng scale:

```text
Ctrl + A → Scale
```

Quay lại Edit Mode:

```text
Tab
```

Chọn toàn bộ mesh và unwrap lại:

```text
A → U → Unwrap
```

### Quy trình chuẩn

```text
Tạo hoặc chỉnh mô hình
        │
        ▼
Kiểm tra kích thước
        │
        ▼
Ctrl + A → Apply Scale
        │
        ▼
Đánh dấu hoặc kiểm tra Seam
        │
        ▼
A → U → Unwrap
        │
        ▼
Kiểm tra UV Islands
```

---

## 13. Vì sao UV Map mới khác UV Map mặc định?

Sau khi xóa UV Map mặc định và dùng `U → Unwrap`, UV Map mới có thể không hoàn toàn giống UV Map ban đầu.

Nguyên nhân:

* UV Map mặc định được tạo khi primitive vừa được thêm vào.
* Sau đó vật thể đã được scale hoặc chỉnh sửa.
* Unwrap mới sử dụng hình dạng và tỷ lệ hiện tại của mô hình.
* Thuật toán unwrap có thể bố trí và xoay island theo cách khác.

Điều quan trọng không phải là UV Map phải giống hệt bản mặc định, mà là:

* Các face được trải đúng tỷ lệ.
* Texture không bị méo quá mức.
* Các island được chia hợp lý.
* Seam nằm ở vị trí có thể kiểm soát được.

---

## 14. Thực hành với Monkey

Sau hình trụ, bài học sử dụng mô hình Monkey để quan sát UV Map của một vật thể phức tạp hơn.

### Bước 1: Thêm Monkey

Quay lại Object Mode:

```text
Tab
```

Thêm mô hình:

```text
Shift + A → Mesh → Monkey
```

Di chuyển và scale mô hình để đặt cạnh hình trụ.

### Bước 2: Quan sát UV Map mặc định

Chuyển vào Edit Mode:

```text
Tab
```

Blender hiển thị UV Map mặc định của Monkey.

UV Map của Monkey phức tạp hơn hình trụ và gồm nhiều island, chẳng hạn:

* Hai tai.
* Các vùng quanh mắt.
* Phần mặt.
* Phần đầu phía sau.
* Các vùng nối quanh cổ.

### Bước 3: Hiển thị seam

Chọn toàn bộ UV:

```text
A
```

Sau đó:

```text
UV → Seams from Islands
```

Các đường seam sẽ xuất hiện trên mô hình 3D, cho thấy Blender đã cắt phần đầu khỉ như thế nào để trải phẳng.

### Bước 4: Xóa UV Map

Trong Object Data Properties:

```text
UV Maps → −
```

### Bước 5: Unwrap lại

Đảm bảo toàn bộ face được chọn:

```text
A
```

Sau đó:

```text
U → Unwrap
```

UV Map mới nhìn tương tự UV Map mặc định nhưng có thể:

* Khác vị trí.
* Khác góc xoay.
* Khác tỷ lệ.
* Khác cách sắp xếp island.

Tuy nhiên, các nhóm island chính vẫn tương đối giống nhau vì Blender sử dụng cùng cấu trúc seam.

---

## 15. Quy trình thực hành đầy đủ

### Phần A — Hình trụ

1. Chuyển sang Object Mode.
2. Thêm Cylinder.
3. Đặt số vertices bằng 16.
4. Scale để tạo hình thùng gỗ.
5. Mở UV Editor.
6. Chuyển sang Edit Mode.
7. Quan sát ba UV island.
8. Tạo material mới.
9. Bật Node Wrangler.
10. Dùng `Ctrl + T` để thêm các node texture.
11. Thay Image Texture bằng procedural texture.
12. Sử dụng tọa độ UV.
13. Di chuyển từng island và quan sát seam.
14. Hoàn tác các thay đổi.
15. Chọn toàn bộ UV.
16. Chọn `UV → Seams from Islands`.
17. Quan sát seam trên mô hình.
18. Xóa UV Map.
19. Apply Scale.
20. Unwrap lại mô hình.

### Phần B — Monkey

1. Thêm Monkey.
2. Chuyển vào Edit Mode.
3. Quan sát UV Map mặc định.
4. Chọn toàn bộ UV.
5. Dùng `Seams from Islands`.
6. Quan sát các đường seam trên đầu khỉ.
7. Xóa UV Map hiện tại.
8. Chọn toàn bộ face.
9. Dùng `U → Unwrap`.
10. So sánh UV Map mới với UV Map mặc định.

---

## 16. Phím tắt và công cụ quan trọng

| Phím hoặc thao tác        | Chức năng                                             |
| ------------------------- | ----------------------------------------------------- |
| `Tab`                     | Chuyển giữa Object Mode và Edit Mode                  |
| `Shift + A`               | Mở menu Add                                           |
| `S`                       | Scale vật thể hoặc UV                                 |
| `S → Z`                   | Scale theo trục Z                                     |
| `S → Shift + Z`           | Scale theo X và Y, giữ nguyên Z                       |
| `G`                       | Di chuyển vật thể hoặc UV island                      |
| `A`                       | Chọn toàn bộ                                          |
| `U`                       | Mở menu UV Mapping                                    |
| `U → Unwrap`              | Trải các mặt thành UV island                          |
| `Ctrl + A`                | Mở menu Apply Transform                               |
| `Ctrl + A → Scale`        | Áp dụng tỷ lệ của vật thể                             |
| `Ctrl + T`                | Thêm Texture Coordinate và Mapping bằng Node Wrangler |
| `Shift + S`               | Đổi loại node thông qua Node Wrangler                 |
| `Ctrl + Z`                | Hoàn tác thao tác                                     |
| `UV → Seams from Islands` | Tạo seam từ ranh giới UV island                       |
| Nút `−` trong UV Maps     | Xóa UV Map hiện tại                                   |

---

## 17. Lỗi thường gặp

### 17.1. Texture bị kéo giãn sau khi scale

**Nguyên nhân:** Scale vật thể trong Object Mode không tự động thay đổi UV Map.

**Cách xử lý:**

* Chỉnh lại UV island.
* Hoặc Apply Scale rồi unwrap lại.

---

### 17.2. Xuất hiện cảnh báo Non-Uniform Scale

**Nguyên nhân:** Vật thể có scale khác nhau trên các trục.

**Cách xử lý:**

```text
Object Mode → Ctrl + A → Scale
```

Sau đó unwrap lại.

---

### 17.3. Vật thể chuyển sang màu đen

**Nguyên nhân:** UV Map đã bị xóa trong khi material vẫn sử dụng tọa độ UV.

**Cách xử lý:**

```text
Edit Mode → A → U → Unwrap
```

---

### 17.4. Không thấy các node khi nhấn Ctrl + T

**Nguyên nhân:** Node Wrangler chưa được bật hoặc chưa chọn node Principled BSDF.

**Cách xử lý:**

```text
Edit → Preferences → Add-ons → Node Wrangler
```

Sau đó chọn Principled BSDF và nhấn lại `Ctrl + T`.

---

### 17.5. Di chuyển UV nhưng texture không thay đổi

**Nguyên nhân:** Procedural texture đang dùng tọa độ Generated thay vì UV.

**Cách xử lý:** Nối đầu ra `UV` của Texture Coordinate vào Mapping.

---

### 17.6. Unwrap không tạo đủ UV

**Nguyên nhân:** Không chọn toàn bộ face trước khi unwrap.

**Cách xử lý:**

```text
Edit Mode → A → U → Unwrap
```

---

## 18. Checklist thực hành

* [ ] Đã hiểu seam là vị trí Blender cắt mô hình để trải UV.
* [ ] Đã hiểu UV island là một nhóm mặt liền nhau trong UV space.
* [ ] Đã thêm hình trụ với 16 vertices.
* [ ] Đã quan sát ba island cơ bản của hình trụ.
* [ ] Đã tạo procedural material để quan sát texture.
* [ ] Đã thử di chuyển UV island và nhìn thấy đường nối texture.
* [ ] Đã so sánh UV Coordinates với Generated Coordinates.
* [ ] Đã sử dụng `UV → Seams from Islands`.
* [ ] Đã xóa UV Map mặc định.
* [ ] Đã Apply Scale trước khi unwrap.
* [ ] Đã tạo UV Map mới bằng `U → Unwrap`.
* [ ] Đã thực hành tương tự với mô hình Monkey.
* [ ] Đã lưu file Blender trước khi kết thúc bài học.

---

## 19. Tóm tắt bài học

**Seam** và **UV Island** là hai khái niệm nền tảng của UV Mapping:

* Seam xác định vị trí bề mặt mô hình sẽ được cắt.
* Sau khi cắt và unwrap, các nhóm mặt trở thành UV island.
* Mỗi island có thể được di chuyển, xoay và scale độc lập trong UV Editor.
* Khi sử dụng UV Coordinates, vị trí của island quyết định cách texture xuất hiện trên mô hình.
* Generated Coordinates có thể giúp procedural texture ít lộ seam hơn, nhưng UV vẫn linh hoạt và phổ biến hơn khi làm game hoặc chuyển dữ liệu giữa nhiều phần mềm.
* Trước khi unwrap, nên sử dụng `Ctrl + A → Scale` để tránh lỗi non-uniform scale và đảm bảo UV có tỷ lệ chính xác.

```text
Seam hợp lý
    +
Apply Scale
    +
Unwrap đúng
    =
UV ít méo và dễ làm texture
```

Bài học này là bước chuẩn bị cho quá trình hoàn thiện mô hình **thùng gỗ**, nơi UV Map sẽ được sử dụng để đặt texture gỗ lên bề mặt vật thể.

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
