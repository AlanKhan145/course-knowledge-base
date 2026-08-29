# 057 — UV Mapping cho thùng gỗ

## Wooden Barrels UV’s

| Thuộc tính       | Nội dung                                            |
| ---------------- | --------------------------------------------------- |
| **Module**       | Module 04 — UV Mapping                              |
| **Bài học**      | Wooden Barrels UV’s                                 |
| **Thời lượng**   | 10:03                                               |
| **Chủ đề chính** | Tự đánh dấu seam, unwrap và áp texture cho thùng gỗ |

---

## 1. Mục tiêu bài học

Sau bài học này, bạn có thể:

* Hiểu điều gì xảy ra khi unwrap một mesh không có seam.
* Phân biệt giữa **seam** và **UV Map**.
* Xóa UV Map cũ để thực hiện unwrap lại từ đầu.
* Tự đánh dấu seam cho một vật thể dạng hình trụ.
* Tách UV của thùng gỗ thành ba phần:

  * Thân thùng.
  * Mặt trên.
  * Mặt dưới.
* Đưa texture hình ảnh vào Shader Editor.
* Căn chỉnh UV island để texture thùng gỗ hiển thị đúng.
* Chỉnh hình dáng thùng bằng loop cut và bevel mà vẫn giữ texture ổn định.

---

## 2. Vì sao vật thể cần có seam?

### 2.1. Thử nghiệm với đầu khỉ Suzanne

Giảng viên bắt đầu bằng cách xóa toàn bộ seam trên mô hình đầu khỉ:

1. Vào **Edit Mode**.
2. Chọn toàn bộ mesh bằng `A`.
3. Nhấn:

```text
Ctrl + E → Clear Seam
```

Sau đó thực hiện:

```text
U → Unwrap
```

Kết quả là phần đầu khỉ bị ép phẳng thành một UV island rất méo và khó nhận biết.

Hai mắt vẫn tạo thành hai UV island riêng vì chúng là các phần hình học tách rời bên trong mesh.

### Minh họa nguyên lý

```text
Mesh 3D không có seam
          │
          ▼
Blender không biết nên “cắt” ở đâu
          │
          ▼
Toàn bộ bề mặt bị ép phẳng
          │
          ▼
UV bị méo, chồng chéo hoặc khó sử dụng
```

Có thể hình dung giống như cố ép một vật thể 3D xuống mặt bàn mà không cắt nó ra trước: hình dạng sẽ bị dồn, kéo giãn và biến dạng.

---

## 3. Seam và UV Map là hai dữ liệu khác nhau

Một điểm quan trọng trong bài học là:

> Xóa seam không đồng nghĩa với việc xóa UV Map.

Sau khi xóa seam của thùng gỗ, UV layout cũ vẫn còn tồn tại và texture vẫn có thể tiếp tục hiển thị.

### Phân biệt

| Thành phần    | Chức năng                                        |
| ------------- | ------------------------------------------------ |
| **Seam**      | Đánh dấu vị trí Blender sẽ cắt mesh khi unwrap   |
| **UV Map**    | Kết quả trải phẳng mesh đã được lưu lại          |
| **UV Island** | Một vùng UV tách biệt trong UV Editor            |
| **Texture**   | Hình ảnh được ánh xạ lên mô hình dựa trên UV Map |

### Quy trình dữ liệu

```text
Đánh dấu Seam
      │
      ▼
Thực hiện Unwrap
      │
      ▼
Tạo hoặc cập nhật UV Map
      │
      ▼
Texture sử dụng UV Map để hiển thị trên mesh
```

Vì vậy, nếu chỉ xóa seam mà không unwrap lại, UV Map cũ vẫn tiếp tục được sử dụng.

---

## 4. Chuẩn bị mô hình thùng gỗ

Sau phần minh họa với Suzanne:

1. Chuyển sang **Object Mode** bằng `Tab`.
2. Xóa mô hình đầu khỉ.
3. Chọn thùng gỗ.
4. Nhấn phím dấu chấm `.` trên Numpad để tập trung khung nhìn vào thùng.
5. Chuyển sang **Edit Mode**.
6. Chọn toàn bộ mesh.
7. Xóa seam cũ:

```text
Ctrl + E → Clear Seam
```

Có thể thực hiện cùng chức năng trong menu:

```text
Edge → Clear Seam
```

---

## 5. Xóa UV Map cũ

Mặc dù seam đã bị xóa, UV layout cũ của thùng vẫn còn.

Để làm lại hoàn toàn:

1. Mở phần **Object Data Properties**.
2. Tìm mục **UV Maps**.
3. Chọn UV Map hiện tại.
4. Nhấn nút dấu trừ `-` để xóa.

Sau khi UV Map bị xóa, texture chuyển sang màu đen hoặc hiển thị không đúng vì Blender không còn biết phải đặt hình ảnh lên bề mặt như thế nào.

---

## 6. Điều gì xảy ra khi unwrap thùng không có seam?

Khi chọn toàn bộ thùng và thực hiện:

```text
U → Unwrap
```

Blender không thể tạo một UV layout hợp lý.

Các mặt của thùng có thể bị unwrap riêng lẻ hoặc chồng lên cùng một vùng ảnh. Phần thân, nắp trên và nắp dưới đều không được tách đúng cách.

Nguyên nhân là Blender chưa được chỉ dẫn vị trí cần cắt mesh.

---

## 7. Chiến lược đánh dấu seam cho thùng gỗ

Thùng gỗ có cấu trúc gần giống một hình trụ. Để trải phẳng, cần ba nhóm seam chính:

1. Một vòng seam quanh mép trên.
2. Một vòng seam quanh mép dưới.
3. Một seam dọc theo thân thùng.

### Sơ đồ seam

```text
                 Mặt trên
              ┌───────────┐
              │           │
         ─────┴───────────┴─────  ← Seam vòng trên
              │           │
              │           │
              │           │
              │           │
              │           │
              │           │
              │           │
              │           │
              │           │
              ↑
              │ Seam dọc thân
              ↓
         ─────┬───────────┬─────  ← Seam vòng dưới
              │           │
              └───────────┘
                 Mặt dưới
```

---

## 8. Đánh dấu seam vòng trên và vòng dưới

Chuyển sang chế độ chọn cạnh:

```text
Edge Select Mode
```

### Seam vòng trên

1. Giữ `Alt`.
2. Nhấn chuột trái vào một cạnh trên để chọn toàn bộ edge loop.
3. Đánh dấu seam bằng một trong hai cách:

```text
Ctrl + E → Mark Seam
```

hoặc:

```text
Chuột phải → Mark Seam
```

### Seam vòng dưới

Lặp lại thao tác tương tự với vòng cạnh ở đáy thùng.

Khi đó, mô hình đã được chia thành:

* Mặt trên.
* Phần thân.
* Mặt dưới.

---

## 9. Vì sao unwrap vẫn tạo ra ba hình tròn?

Sau khi chỉ đánh dấu hai seam vòng, thực hiện lại:

```text
A → U → Unwrap
```

Kết quả có thể xuất hiện ba UV island dạng tròn.

Hai hình tròn đầu tiên là nắp trên và nắp dưới. Tuy nhiên, phần thân vẫn chưa thể mở phẳng vì nó vẫn là một vòng kín.

### Nguyên nhân

Phần thân thùng giống như một nhãn giấy quấn quanh lon nước. Muốn trải nhãn giấy thành hình chữ nhật, cần cắt một đường từ trên xuống dưới.

```text
Thân trụ còn khép kín
        │
        ▼
Không thể mở thành mặt phẳng
        │
        ▼
Cần thêm một seam dọc
```

---

## 10. Đánh dấu seam dọc thân thùng

Chọn một cạnh chạy dọc theo thân thùng, sau đó:

```text
Chuột phải → Mark Seam
```

Nên đặt seam này ở:

* Mặt sau của thùng.
* Vị trí ít xuất hiện trước camera.
* Khu vực texture ít có chi tiết nổi bật.

Sau đó chọn toàn bộ mesh và unwrap lại:

```text
A → U → Unwrap
```

Kết quả UV hợp lý sẽ gồm:

* Một island hình chữ nhật cho thân thùng.
* Một island hình tròn cho mặt trên.
* Một island hình tròn cho mặt dưới.

### UV layout dự kiến

```text
┌─────────────────────────────────────┐
│                                     │
│       ┌──────────────────────┐      │
│       │                      │      │
│       │      Thân thùng      │      │
│       │                      │      │
│       └──────────────────────┘      │
│                                     │
│          ◯              ◯           │
│       Mặt trên       Mặt dưới       │
│                                     │
└─────────────────────────────────────┘
```

---

## 11. Lựa chọn texture thùng gỗ

Trong bài học, giảng viên thử nhiều texture tải từ một trang texture.

### Tiêu chí chọn texture phù hợp

Texture nên:

* Có màu sắc đồng đều ở mép trên và mép dưới.
* Có thể nối hai cạnh trái và phải tương đối tự nhiên.
* Không có vùng sáng tối thay đổi quá mạnh.
* Có các thanh gỗ chạy đúng hướng.
* Hạn chế làm lộ seam dọc của thùng.

### Texture không phù hợp

Một texture có phần đai kim loại phía dưới tối hơn phía trên sẽ tạo ra đường nối rất rõ khi hai mép texture gặp nhau.

```text
Mép trái texture ≠ Mép phải texture
                  │
                  ▼
          Xuất hiện đường seam rõ
```

Texture có tính lặp hoặc có độ sáng đồng đều thường cho kết quả tốt hơn.

---

## 12. Đưa texture vào Shader Editor

Có thể kéo trực tiếp các file texture từ trình quản lý file vào **Shader Editor**.

Mỗi file sẽ tạo thành một node:

```text
Image Texture
```

Sau đó nối cổng:

```text
Image Texture: Color
          │
          ▼
Principled BSDF: Base Color
```

### Sơ đồ node cơ bản

```text
┌─────────────────┐
│  Image Texture  │
│                 │
│ Color ●─────────┼──────────┐
└─────────────────┘          │
                             ▼
                  ┌────────────────────┐
                  │ Principled BSDF    │
                  │                    │
                  │ Base Color ●       │
                  └─────────┬──────────┘
                            │
                            ▼
                  ┌────────────────────┐
                  │ Material Output    │
                  │ Surface            │
                  └────────────────────┘
```

Nếu đã đưa nhiều texture vào Shader Editor, có thể lần lượt nối từng node vào `Base Color` để so sánh kết quả.

---

## 13. Căn chỉnh UV cho phần thân thùng

Phần quan trọng nhất là UV island hình chữ nhật của thân thùng.

### Các thao tác chính

1. Chuyển sang chế độ chọn island trong UV Editor.
2. Chọn island thân thùng.
3. Scale theo chiều ngang:

```text
S → X
```

4. Di chuyển theo chiều ngang:

```text
G → X
```

5. Đặt island phủ lên phần thích hợp của texture.

Mục tiêu là để:

* Các thanh gỗ chạy dọc theo chiều cao thùng.
* Đai kim loại nằm đúng vị trí.
* Hai cạnh của island gặp nhau tại vùng texture ít chênh lệch.
* Texture không bị kéo giãn quá mức.

---

## 14. Căn chỉnh hai mặt nắp

Hai UV island của nắp thùng có thể bị hơi dẹt.

Để làm chúng tròn hơn:

1. Giữ `Shift` và chọn đồng thời cả hai island.
2. Scale theo trục X:

```text
S → X
```

Việc làm tròn UV island giúp giảm hiện tượng texture bị kéo giãn trên mặt trên và mặt dưới của thùng.

### So sánh

```text
UV nắp bị dẹt             UV nắp cân đối

     ______                    ______
   /        \                /        \
  |          |              |          |
   \________/                \________/

Texture dễ bị kéo         Texture ít bị méo hơn
```

---

## 15. Chỉnh hình dáng thùng bằng Loop Cut

Sau khi texture đã được áp dụng, giảng viên làm thùng phình hơn ở giữa.

### Tạo hai loop cut

Đưa con trỏ lên phần thân thùng và nhấn:

```text
Ctrl + R
```

Dùng con lăn chuột để tạo hai đường cắt, sau đó nhấn chuột phải để giữ chúng ở vị trí cân đối quanh trung tâm.

### Phóng to theo chiều ngang

Chọn hai loop vừa tạo và nhấn:

```text
S → Shift + Z
```

`Shift + Z` loại trừ trục Z, nghĩa là các đỉnh chỉ được scale theo mặt phẳng XY.

Kết quả là phần giữa thùng phình ra nhưng chiều cao không thay đổi.

---

## 16. Làm cong thân thùng bằng Bevel

Nếu chỉ scale hai loop cut, thân thùng có thể trông hơi vuông và gấp khúc.

Để làm mềm đường cong:

```text
Ctrl + B
```

Kéo chuột để bevel hai loop được chọn.

Có thể dùng con lăn chuột để tăng số segment nếu cần bề mặt mượt hơn.

### Quy trình tạo thân thùng phình

```text
Thân trụ thẳng
      │
      ▼
Tạo hai Loop Cut
      │
      ▼
Scale hai loop ra ngoài
      │
      ▼
Bevel các loop
      │
      ▼
Thân thùng cong và phình tự nhiên
```

Giảng viên nhận xét rằng tạo hai loop cut rồi bevel thường dễ hơn việc tạo nhiều loop cut và phải scale từng loop với kích thước khác nhau.

---

## 17. UV thay đổi như thế nào khi thêm hình học?

Khi thêm loop cut vào mô hình đã có UV, Blender tự động bổ sung các đường UV tương ứng.

Việc trượt hoặc điều chỉnh các loop không nhất thiết làm texture bị biến dạng nghiêm trọng, vì UV layout được nội suy dựa trên hình học hiện tại.

Tuy nhiên, vẫn cần quan sát texture sau mỗi thay đổi để kiểm tra:

* Vân gỗ có bị kéo giãn không.
* Đai kim loại có bị cong sai vị trí không.
* Đường seam có trở nên rõ hơn không.
* Mật độ texture giữa các vùng có đồng đều không.

---

## 18. Quy trình thực hành đầy đủ

```text
Xóa mô hình Suzanne
        │
        ▼
Chọn thùng gỗ
        │
        ▼
Clear Seam
        │
        ▼
Xóa UV Map cũ
        │
        ▼
Thử Unwrap không seam
        │
        ▼
Mark Seam vòng trên
        │
        ▼
Mark Seam vòng dưới
        │
        ▼
Mark Seam dọc thân
        │
        ▼
Unwrap lại
        │
        ▼
Nhập texture vào Shader Editor
        │
        ▼
Nối texture vào Base Color
        │
        ▼
Scale và di chuyển UV island
        │
        ▼
Tạo hai Loop Cut
        │
        ▼
Scale phần giữa ra ngoài
        │
        ▼
Bevel để làm cong thân thùng
        │
        ▼
Lưu file Blender
```

---

## 19. Phím tắt và công cụ quan trọng

| Phím tắt                | Chức năng                                    |
| ----------------------- | -------------------------------------------- |
| `Tab`                   | Chuyển giữa Object Mode và Edit Mode         |
| `A`                     | Chọn toàn bộ                                 |
| `Alt + A`               | Bỏ chọn toàn bộ                              |
| `Ctrl + E`              | Mở menu Edge                                 |
| `Ctrl + E → Clear Seam` | Xóa seam                                     |
| `Ctrl + E → Mark Seam`  | Đánh dấu seam                                |
| `Alt + Click`           | Chọn edge loop                               |
| `U → Unwrap`            | Trải UV dựa trên seam                        |
| `L`                     | Chọn phần hình học liên kết                  |
| `G`                     | Di chuyển                                    |
| `G → X`                 | Di chuyển theo trục X                        |
| `S`                     | Scale                                        |
| `S → X`                 | Scale theo trục X                            |
| `S → Shift + Z`         | Scale nhưng loại trừ trục Z                  |
| `Ctrl + R`              | Tạo Loop Cut                                 |
| `Ctrl + B`              | Bevel cạnh hoặc loop                         |
| `Ctrl + Spacebar`       | Phóng to hoặc thu nhỏ vùng làm việc hiện tại |
| `Ctrl + Shift + Z`      | Redo                                         |
| `.` trên Numpad         | Focus vào đối tượng được chọn                |
| `T`                     | Ẩn hoặc hiện thanh công cụ bên trái          |
| `Delete`                | Xóa đối tượng                                |

---

## 20. Lỗi thường gặp

### 20.1. Unwrap khi chưa có seam dọc

**Hiện tượng:** Phần thân không mở thành hình chữ nhật.

**Nguyên nhân:** Thân thùng vẫn là một vòng kín.

**Khắc phục:** Đánh dấu thêm một seam chạy dọc từ mép trên xuống mép dưới.

---

### 20.2. Xóa seam nhưng UV không thay đổi

**Hiện tượng:** Seam đã biến mất nhưng UV layout cũ vẫn còn.

**Nguyên nhân:** Seam và UV Map là hai dữ liệu riêng biệt.

**Khắc phục:** Xóa UV Map hoặc thực hiện unwrap lại để cập nhật layout.

---

### 20.3. Texture xuất hiện đường nối rõ

**Hiện tượng:** Có một đường thẳng chạy dọc thân thùng.

**Nguyên nhân:**

* Hai mép texture có màu sắc khác nhau.
* UV island đặt sai vị trí.
* Seam nằm ở mặt trước.
* Texture không có khả năng lặp liền mạch.

**Khắc phục:**

* Đặt seam ra phía sau.
* Di chuyển UV island sang vùng texture đồng đều hơn.
* Chọn texture có hai cạnh trái và phải tương thích.
* Tránh vùng có độ sáng thay đổi mạnh.

---

### 20.4. Vân gỗ chạy sai hướng

**Hiện tượng:** Các thanh gỗ chạy ngang thay vì chạy dọc thân thùng.

**Khắc phục:** Xoay UV island bằng `R` hoặc chọn vùng khác của texture.

---

### 20.5. Texture trên nắp bị kéo giãn

**Hiện tượng:** Họa tiết trên nắp trông dẹt hoặc méo.

**Khắc phục:** Chọn island nắp và scale theo trục X hoặc Y để đưa nó về hình tròn cân đối hơn.

---

### 20.6. Thùng trông quá vuông sau khi scale

**Hiện tượng:** Phần phình giữa thùng có góc gãy rõ.

**Khắc phục:** Bevel hai loop cut bằng `Ctrl + B` để tạo đường cong mềm hơn.

---

## 21. Checklist thực hành

### Seam và UV

* [ ] Đã xóa seam cũ của thùng.
* [ ] Đã hiểu rằng xóa seam không xóa UV Map.
* [ ] Đã xóa UV Map cũ trước khi unwrap lại.
* [ ] Đã đánh dấu seam vòng trên.
* [ ] Đã đánh dấu seam vòng dưới.
* [ ] Đã đánh dấu một seam dọc thân thùng.
* [ ] Đã unwrap thành một island chữ nhật và hai island tròn.

### Texture

* [ ] Đã đưa texture vào Shader Editor.
* [ ] Đã nối `Color` của Image Texture vào `Base Color`.
* [ ] Đã căn chỉnh island thân theo vùng phù hợp của texture.
* [ ] Đã kiểm tra đường seam dọc trên mô hình.
* [ ] Đã chỉnh hai UV island của nắp để giảm kéo giãn.

### Hình dáng mô hình

* [ ] Đã tạo hai loop cut quanh phần giữa.
* [ ] Đã scale phần giữa ra ngoài.
* [ ] Đã bevel để tạo độ cong.
* [ ] Đã kiểm tra texture sau khi thay đổi hình học.
* [ ] Đã lưu file để tiếp tục ở bài sau.

---

## 22. Bài tập thực hành

Hãy thử lần lượt nhiều loại texture khác nhau trên cùng một UV layout:

1. Texture thùng gỗ hoàn chỉnh.
2. Texture các tấm ván gỗ.
3. Texture có độ sáng không đồng đều.
4. Texture có đường viền kim loại rõ ràng.

Với mỗi texture, hãy quan sát:

* Đường seam có dễ nhận thấy không?
* Thanh gỗ có chạy đúng hướng không?
* Đai kim loại có nằm đúng vị trí không?
* Texture có bị kéo giãn ở phần giữa không?
* Nắp thùng có hiển thị hợp lý không?

Việc thử texture không được thiết kế riêng cho thùng gỗ giúp hiểu rõ hơn mối quan hệ giữa **hình ảnh texture**, **UV layout** và **hình dạng mesh**.

---

## 23. Tóm tắt bài học

Trong bài này, chúng ta đã thực hành toàn bộ quy trình UV Mapping thủ công cho một thùng gỗ:

* Seam vòng trên và dưới giúp tách hai nắp khỏi thân.
* Seam dọc giúp mở phần thân trụ thành một UV island hình chữ nhật.
* Seam chỉ hướng dẫn quá trình unwrap; UV Map vẫn có thể tồn tại sau khi seam bị xóa.
* UV island cần được scale và di chuyển để khớp với nội dung của texture.
* Texture có màu sắc không đồng đều ở hai mép sẽ làm đường seam trở nên rõ ràng.
* Loop cut, scale và bevel giúp tạo hình thùng phình tự nhiên hơn.
* Blender có thể cập nhật UV khi bổ sung hình học, nhưng luôn cần kiểm tra lại độ kéo giãn của texture.

Kết quả cuối cùng là một thùng gỗ có hình dáng cong nhẹ, texture được đặt đúng hướng và UV layout đủ rõ ràng để tiếp tục thử nghiệm các texture khác trong bài học tiếp theo.

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
