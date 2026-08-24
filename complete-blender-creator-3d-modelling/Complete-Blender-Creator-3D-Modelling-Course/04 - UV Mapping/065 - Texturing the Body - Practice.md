# 065 — Texturing the Body

| Thuộc tính             | Nội dung                                  |
| ---------------------- | ----------------------------------------- |
| **Module**             | Module 04 — UV Mapping                    |
| **Bài học**            | Texturing the Body                        |
| **Thời lượng**         | 8:53                                      |
| **Chủ đề chính**       | UV Mapping và áp texture cho thân máy bay |
| **Kỹ thuật trọng tâm** | `Project from View`                       |

---

## 1. Mục tiêu bài học

Sau bài học này, người học có thể:

* Hoàn thiện texture cho hai bên thân máy bay.
* Hiểu hạn chế của phương pháp `Unwrap` thông thường đối với các hình ảnh có logo, hình tròn hoặc đồ họa chi tiết.
* Sử dụng kỹ thuật **Project from View** để chiếu UV theo góc nhìn trực diện.
* Lật UV bằng giá trị scale âm để áp texture cho mặt đối diện.
* Chỉnh sửa các UV vertex nhằm giảm phần bầu trời, cỏ hoặc vùng ảnh không mong muốn.
* Tạo vật liệu riêng cho:

  * Cánh quạt.
  * Trục giữa của cánh quạt.
  * Buồng lái.
* Sử dụng `Shade Smooth` để làm bề mặt mô hình mượt hơn.

---

## 2. Vấn đề khi unwrap thân máy bay theo cách thông thường

Ở bài trước, phần cánh máy bay đã được unwrap thành công. Tuy nhiên, thân máy bay có hình dạng cong và chứa nhiều chi tiết đồ họa nên khó căn chỉnh hơn.

Nếu sử dụng UV island được tạo bằng phương pháp unwrap thông thường, chúng ta phải:

1. Xoay UV island.
2. Scale UV theo trục X và Y.
3. Di chuyển UV lên đúng vị trí của máy bay trong ảnh texture.
4. Chỉnh từng UV vertex để loại bỏ phần bầu trời hoặc nền ảnh.

Quá trình này dễ làm cho texture bị:

* Kéo giãn.
* Cong vênh.
* Méo logo hoặc hình tròn.
* Lệch các đường đồ họa trên thân máy bay.

Ví dụ, khi kéo các UV vertex ở phía trên thân xuống để loại bỏ phần bầu trời, hình tròn trên texture có thể trở thành hình oval hoặc bị méo nghiêm trọng.

> Phương pháp này vẫn có thể chấp nhận được nếu mô hình chỉ được quan sát từ khoảng cách xa. Tuy nhiên, với các chi tiết cần giữ đúng hình dạng, nên sử dụng `Project from View`.

---

## 3. Kỹ thuật Project from View

### 3.1. Nguyên lý

`Project from View` tạo UV dựa trực tiếp trên góc nhìn hiện tại trong 3D Viewport.

Khi nhìn thẳng vào bên hông máy bay, UV được tạo ra sẽ có hình dạng gần như giống hoàn toàn với silhouette của thân máy bay.

```text
Nhìn trực diện bên hông máy bay
                ↓
Chọn các mặt của một bên thân
                ↓
U → Project from View
                ↓
UV có hình dạng giống góc nhìn hiện tại
                ↓
Căn UV lên máy bay trong ảnh texture
```

Kỹ thuật này đặc biệt hữu ích khi:

* Texture là ảnh chụp hoặc ảnh tham chiếu nhìn từ bên hông.
* Cần giữ nguyên hình dạng logo và đồ họa.
* Object có một mặt chính cần hiển thị chính xác.
* Không muốn UV bị cong hoặc biến dạng theo hình học 3D.

---

## 4. Chọn một bên thân máy bay

Chuyển sang **Edit Mode**, sau đó bỏ chọn toàn bộ:

```text
Alt + A
```

Đưa con trỏ chuột lên một bên thân máy bay và nhấn:

```text
L
```

Phím `L` chọn phần hình học liên kết nằm dưới con trỏ chuột.

Nếu Blender không chọn đúng theo đường seam:

1. Kiểm tra tùy chọn **Seams** đang được sử dụng khi chọn linked geometry.
2. Nhấn `Alt + A` để bỏ chọn.
3. Đưa chuột lên thân máy bay.
4. Nhấn `L` lại một lần nữa.

Đôi khi Blender không cập nhật lựa chọn seam ngay lập tức. Việc bỏ chọn rồi chọn lại thường sẽ khắc phục được vấn đề.

---

## 5. Project from View cho bên phải thân máy bay

### Bước 1: Chuyển sang góc nhìn bên hông

Chọn góc nhìn phù hợp sao cho có thể nhìn trực diện vào một bên thân máy bay.

Ví dụ:

```text
Numpad 3 → Right View
```

### Bước 2: Tạo UV

Khi phần thân đã được chọn, nhấn:

```text
U
```

Sau đó chọn:

```text
Project from View
```

UV mới sẽ xuất hiện trong UV Editor với hình dạng tương ứng với thân máy bay khi nhìn từ bên hông.

### Bước 3: Căn UV lên ảnh texture

Trong UV Editor:

* Nhấn `A` để chọn toàn bộ UV của phần thân.
* Dùng `S` để phóng to hoặc thu nhỏ.
* Dùng `G` để di chuyển.
* Dùng `R` để xoay.
* Dùng `S`, sau đó `X` hoặc `Y` để scale theo từng trục.

Ví dụ:

```text
S        → Scale toàn bộ
S, X     → Scale theo chiều ngang
S, Y     → Scale theo chiều dọc
R        → Xoay UV
G        → Di chuyển UV
```

Căn UV sao cho:

* Mũi máy bay trùng với mũi trong ảnh.
* Đuôi máy bay trùng với đuôi trong ảnh.
* Logo và hình tròn nằm đúng vị trí.
* Các cửa hoặc chi tiết đồ họa không bị lệch.

---

## 6. Lưu ý về các mặt vuông góc với góc nhìn

Khi sử dụng `Project from View`, những mặt nhìn trực diện sẽ tạo ra UV rõ ràng và có diện tích phù hợp.

Ngược lại, các mặt nằm gần vuông góc với góc nhìn có thể bị ép thành một đường rất mỏng.

```text
Mặt hướng về camera       → UV có diện tích rõ ràng
Mặt vuông góc với camera  → UV bị ép mỏng hoặc gần như phẳng
```

Ví dụ, phần mặt trước của thân máy bay có thể bị ép rất nhỏ khi project từ góc nhìn bên hông.

Trong bài này, vấn đề đó không quá nghiêm trọng vì phần đầu máy bay phần lớn được cánh quạt che khuất.

---

## 7. Chỉnh sửa UV để loại bỏ nền ảnh

Sau khi căn UV, một số khu vực trên mô hình có thể hiển thị:

* Bầu trời ở phía trên thân.
* Cỏ ở phía dưới.
* Các vùng nền nằm ngoài hình máy bay trong ảnh texture.

Để sửa:

1. Chuyển sang **Vertex Select** trong UV Editor.
2. Chọn một hoặc nhiều UV vertex.
3. Nhấn `G` để di chuyển chúng vào trong vùng texture của máy bay.

### Ví dụ chỉnh phần trên

Nếu phần trên thân xuất hiện bầu trời:

* Chọn UV vertex nằm ở mép trên.
* Kéo vertex xuống dưới.

Tuy nhiên, cần quan sát các chi tiết gần đó. Kéo một vertex xuống có thể khiến logo hoặc hình tròn bị méo.

Có thể giảm biến dạng bằng cách:

* Di chuyển thêm vertex bên dưới.
* Phân phối thay đổi qua nhiều vertex.
* Chấp nhận một lượng nhỏ nền ảnh nếu việc chỉnh sửa gây méo quá nhiều.

### Ví dụ chỉnh phần dưới

Nếu phần dưới thân xuất hiện cỏ:

1. Chọn các UV vertex phía dưới.
2. Di chuyển chúng lên trên một chút.
3. Chỉnh nhiều vertex liên tiếp để tránh làm texture bị kéo giãn đột ngột.

> Không nhất thiết phải loại bỏ hoàn toàn mọi phần nền. Điều quan trọng là cân bằng giữa việc che nền và giữ cho đồ họa trên máy bay không bị biến dạng.

---

## 8. Project from View cho mặt còn lại

Sau khi hoàn thành một bên thân, tiếp tục với bên còn lại.

### Bước 1: Chọn bên thân thứ hai

Trong Edit Mode:

```text
Alt + A
```

Đưa con trỏ lên mặt thân còn lại và nhấn:

```text
L
```

### Bước 2: Chuyển sang Left View

```text
Ctrl + Numpad 3
```

Lệnh này chuyển sang góc nhìn bên trái.

### Bước 3: Project UV

```text
U → Project from View
```

### Bước 4: Lật UV

UV của mặt đối diện thường bị quay ngược so với hình ảnh texture. Để lật theo chiều ngang:

```text
S → X → -1
```

Quy trình thao tác:

```text
S
X
-1
Enter
```

UV sẽ được phản chiếu theo trục X.

Sau đó tiếp tục:

* Scale UV.
* Xoay nếu cần.
* Di chuyển đến đúng vị trí.
* Chỉnh các vertex ở mép trên và mép dưới.

---

## 9. Quy trình tổng thể

```text
Hoàn thành UV cánh máy bay
             ↓
Chọn một bên thân bằng L
             ↓
Chuyển sang góc nhìn bên hông
             ↓
U → Project from View
             ↓
Scale, xoay và di chuyển UV
             ↓
Chỉnh UV vertex để giảm nền ảnh
             ↓
Chọn bên thân còn lại
             ↓
Ctrl + Numpad 3 → Left View
             ↓
U → Project from View
             ↓
S → X → -1 để lật UV
             ↓
Căn chỉnh và kiểm tra hai bên
             ↓
Tạo vật liệu cánh quạt và buồng lái
             ↓
Shade Smooth
```

---

## 10. Tạo vật liệu cho cánh quạt

Sau khi hoàn thành texture thân máy bay, bài học tiếp tục với một thử thách nhỏ: tạo vật liệu cho cánh quạt và buồng lái.

### 10.1. Vật liệu cho cánh quạt

Chọn một cánh quạt và tạo material mới.

Trong **Principled BSDF**:

* Đặt `Base Color` gần màu đen.
* Có thể điều chỉnh `Roughness` tùy mức độ bóng mong muốn.

Do các cánh quạt là những bản sao liên kết, khi chỉnh material của một cánh, những cánh còn lại cũng được cập nhật.

| Thuộc tính     | Thiết lập gợi ý      |
| -------------- | -------------------- |
| **Base Color** | Đen hoặc xám rất đậm |
| **Metallic**   | Thấp hoặc bằng `0`   |
| **Roughness**  | Trung bình           |

---

### 10.2. Vật liệu cho trục giữa cánh quạt

Chọn phần trung tâm của cánh quạt và tạo material mới.

Thiết lập gợi ý:

| Thuộc tính     | Thiết lập                             |
| -------------- | ------------------------------------- |
| **Base Color** | Xám bạc                               |
| **Metallic**   | `1.0`                                 |
| **Roughness**  | Điều chỉnh theo mức độ bóng mong muốn |

Tăng `Metallic` lên tối đa giúp phần trục có cảm giác làm bằng kim loại.

Có thể sử dụng:

* Xám sáng để tạo kim loại sạch.
* Xám tối để tạo cảm giác kim loại nặng hoặc cũ hơn.

---

## 11. Tạo vật liệu cho buồng lái

Chọn object buồng lái và tạo material mới.

Trong bài học, buồng lái không sử dụng kính trong suốt hoàn toàn. Thay vào đó, nó được tạo cảm giác giống kính phản chiếu bằng màu sắc và độ bóng.

Thiết lập:

| Thuộc tính     | Thiết lập gợi ý            |
| -------------- | -------------------------- |
| **Base Color** | Xám rất sáng pha xanh nhạt |
| **Metallic**   | `0` hoặc thấp              |
| **Roughness**  | Thấp                       |

Giảm `Roughness` làm bề mặt phản chiếu ánh sáng mạnh hơn, tạo cảm giác giống kính hoặc vật liệu bóng.

Màu xanh nhạt có thể mô phỏng ánh sáng bầu trời phản chiếu trên kính buồng lái.

> Bài học này không sử dụng `Transmission` hoặc thiết lập kính trong suốt. Hiệu ứng kính được tạo chủ yếu bằng màu sáng và Roughness thấp.

---

## 12. Làm mượt mô hình với Shade Smooth

Ở trạng thái mặc định, bề mặt thân và các bộ phận của máy bay có thể trông khá góc cạnh do đang sử dụng flat shading.

Để làm mượt:

1. Chuyển sang **Object Mode**.
2. Chọn toàn bộ các object của máy bay.
3. Nhấp chuột phải.
4. Chọn:

```text
Shade Smooth
```

Kết quả:

* Thân máy bay trông tròn và mượt hơn.
* Buồng lái phản chiếu ánh sáng tự nhiên hơn.
* Cánh quạt và các bề mặt cong bớt góc cạnh.

---

## 13. Kiểm tra kết quả cuối cùng

Để quan sát mô hình rõ hơn, có thể tạm thời tắt các thành phần hỗ trợ trong viewport:

* Tắt **Gizmos**.
* Tắt **Overlays**.

Khi đó, các đường lưới, đường viền lựa chọn và biểu tượng điều khiển sẽ được ẩn đi, giúp tập trung vào kết quả texture cuối cùng.

Kiểm tra mô hình từ nhiều góc:

* Bên trái.
* Bên phải.
* Phía trên.
* Phía dưới.
* Góc nhìn phía trước.
* Góc nhìn phối cảnh.

Đặc biệt quan sát:

* Logo có bị méo không.
* Hình tròn có bị kéo thành hình oval không.
* Có xuất hiện bầu trời hoặc cỏ trên thân không.
* Hai bên thân có cùng chiều và đúng vị trí không.
* Texture ở phần mũi và đuôi có bị kéo giãn quá mức không.

---

## 14. Phím tắt và công cụ quan trọng

| Phím tắt / Công cụ           | Chức năng                                |
| ---------------------------- | ---------------------------------------- |
| `Tab`                        | Chuyển giữa Object Mode và Edit Mode     |
| `Alt + A`                    | Bỏ chọn toàn bộ trong Edit Mode          |
| `L`                          | Chọn phần hình học liên kết dưới con trỏ |
| `U`                          | Mở menu UV Mapping                       |
| `U → Project from View`      | Tạo UV theo góc nhìn hiện tại            |
| `Numpad 3`                   | Right View                               |
| `Ctrl + Numpad 3`            | Left View                                |
| `A`                          | Chọn toàn bộ UV                          |
| `G`                          | Di chuyển UV                             |
| `R`                          | Xoay UV                                  |
| `S`                          | Scale UV                                 |
| `S → X`                      | Scale UV theo trục X                     |
| `S → Y`                      | Scale UV theo trục Y                     |
| `S → X → -1`                 | Lật UV theo chiều ngang                  |
| `O`                          | Bật hoặc tắt Proportional Editing        |
| `Right Click → Shade Smooth` | Làm mượt bề mặt object                   |

---

## 15. Lưu ý khi scale và xoay UV

Nếu UV đang bị xoay nghiêng rồi mới scale theo trục X, kết quả có thể làm UV bị biến dạng theo hướng không mong muốn.

Quy trình an toàn hơn:

1. Xoay UV về trạng thái tương đối thẳng.
2. Scale theo trục X hoặc Y.
3. Xoay UV trở lại góc phù hợp.
4. Di chuyển UV vào đúng vị trí.

```text
Không nên:
Xoay nghiêng → Scale X nhiều lần

Nên:
Đưa UV về thẳng → Scale X/Y → Xoay lại
```

Điều này giúp giữ tỷ lệ của texture ổn định hơn.

---

## 16. Lỗi thường gặp

### 16.1. Phím L chọn sai khu vực

**Nguyên nhân:**

* Chưa bỏ chọn các face cũ.
* Tùy chọn chọn theo seam chưa được cập nhật.
* Con trỏ không nằm đúng trên phần thân.

**Cách xử lý:**

```text
Alt + A → đưa chuột lên thân → L
```

---

### 16.2. UV mặt còn lại bị ngược

**Nguyên nhân:** Hai bên thân có hướng nhìn đối xứng nhau.

**Cách xử lý:**

```text
S → X → -1
```

---

### 16.3. Logo hoặc hình tròn bị méo

**Nguyên nhân:** Một UV vertex bị di chuyển quá xa trong khi các vertex xung quanh vẫn giữ nguyên.

**Cách xử lý:**

* Di chuyển nhiều vertex cùng nhau.
* Phân bố sự điều chỉnh qua nhiều hàng vertex.
* Chấp nhận một phần nhỏ nền ảnh nếu việc chỉnh sửa gây biến dạng nghiêm trọng.

---

### 16.4. Phần dưới thân xuất hiện cỏ

**Nguyên nhân:** UV island nằm quá thấp trên ảnh texture.

**Cách xử lý:**

* Chọn các UV vertex phía dưới.
* Di chuyển chúng lên một chút.
* Điều chỉnh từng nhóm vertex để hạn chế kéo giãn.

---

### 16.5. Mặt trước bị ép thành đường mỏng

**Nguyên nhân:** Mặt trước gần vuông góc với góc nhìn khi sử dụng `Project from View`.

**Cách xử lý:**

* Có thể giữ nguyên nếu phần này bị cánh quạt che khuất.
* Nếu cần nhìn rõ mặt trước, phải project riêng từ Front View.

---

### 16.6. Mô hình trông góc cạnh

**Nguyên nhân:** Object vẫn đang sử dụng flat shading.

**Cách xử lý:**

```text
Chọn object → Right Click → Shade Smooth
```

---

## 17. Bài tập thực hành

### Bài tập 1: Texture bên đầu tiên

* [ ] Chọn đúng một bên thân máy bay.
* [ ] Chuyển sang góc nhìn bên hông.
* [ ] Sử dụng `Project from View`.
* [ ] Scale và căn UV lên hình máy bay.
* [ ] Chỉnh vùng bầu trời và cỏ.

### Bài tập 2: Texture bên còn lại

* [ ] Chọn mặt thân đối diện.
* [ ] Chuyển sang `Left View`.
* [ ] Sử dụng `Project from View`.
* [ ] Lật UV bằng `S → X → -1`.
* [ ] Căn chỉnh logo và các chi tiết đồ họa.

### Bài tập 3: Tạo vật liệu

* [ ] Tạo vật liệu màu tối cho cánh quạt.
* [ ] Tạo vật liệu kim loại cho trục giữa.
* [ ] Tạo vật liệu sáng, bóng cho buồng lái.
* [ ] Áp dụng `Shade Smooth` cho toàn bộ máy bay.

---

## 18. Checklist hoàn thành

### UV Mapping

* [ ] Hai bên thân máy bay đã được unwrap.
* [ ] Đã sử dụng `Project from View`.
* [ ] UV bên đối diện đã được lật đúng chiều.
* [ ] Logo và hình tròn không bị biến dạng nghiêm trọng.
* [ ] Phần bầu trời và cỏ đã được giảm thiểu.
* [ ] Texture ở mũi và đuôi máy bay hiển thị hợp lý.

### Material

* [ ] Cánh quạt có material màu đen hoặc xám đậm.
* [ ] Trục giữa cánh quạt có material kim loại.
* [ ] Buồng lái có màu xám xanh nhạt.
* [ ] Roughness của buồng lái đã được giảm để tăng phản chiếu.

### Hoàn thiện

* [ ] Toàn bộ máy bay đã được `Shade Smooth`.
* [ ] Đã kiểm tra mô hình từ cả hai bên.
* [ ] Đã tắt Gizmos và Overlays để xem kết quả.
* [ ] Đã lưu file Blender.

---

## 19. Tóm tắt

Bài học giới thiệu kỹ thuật **Project from View**, một phương pháp UV Mapping phù hợp với các object cần khớp chính xác với ảnh tham chiếu từ một góc nhìn cụ thể.

Thay vì cố biến dạng UV island được unwrap theo cách thông thường, người học nhìn trực diện vào từng bên thân máy bay rồi sử dụng:

```text
U → Project from View
```

Đối với mặt còn lại, UV cần được lật theo chiều ngang bằng:

```text
S → X → -1
```

Sau khi hoàn thành UV, các vertex được điều chỉnh nhẹ để hạn chế phần bầu trời và cỏ xuất hiện trên thân mà không làm logo bị méo quá nhiều.

Cuối cùng, mô hình được hoàn thiện bằng:

* Vật liệu tối cho cánh quạt.
* Vật liệu kim loại cho trục cánh quạt.
* Vật liệu sáng và bóng cho buồng lái.
* `Shade Smooth` cho toàn bộ máy bay.

Kết quả là mô hình máy bay có texture hai bên tương đối chính xác, đồ họa ít biến dạng và bề mặt mượt hơn, sẵn sàng cho các bước tiếp theo của dự án.

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
