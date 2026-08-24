# 064 — Texturing the Wings

| Thuộc tính              | Nội dung                                       |
| ----------------------- | ---------------------------------------------- |
| **Module**              | Module 04 — UV Mapping                         |
| **Bài học**             | Texturing the Wings                            |
| **Thời lượng**          | 8:43                                           |
| **Chủ đề chính**        | Định vị UV và tạo texture cho các cánh máy bay |
| **Phần mềm**            | Blender                                        |
| **Đối tượng thực hành** | Máy bay Spitfire                               |

---

## 1. Mục tiêu bài học

Sau bài học này, người học có thể:

* Đưa ảnh texture Spitfire vào **Shader Editor**.
* Kết nối Image Texture với shader **Principled BSDF**.
* Hiểu ảnh hưởng của **Mirror Modifier** đến UV của hai bên cánh.
* Chọn từng UV Island bằng lệnh **Select Linked**.
* Di chuyển, xoay và thu phóng UV Island để tìm vùng texture phù hợp.
* Điều chỉnh từng UV Vertex nhằm giảm hiện tượng kéo giãn texture.
* Nhận biết các vấn đề như:

  * Texture bị kéo dãn.
  * Texture bị vỡ hạt hoặc pixel hóa.
  * Chữ bị đảo ngược do cánh đối xứng.
  * Một phần UV lấy nhầm vùng bầu trời.
  * Hoa văn và đường panel bị nghiêng hoặc biến dạng.

---

## 2. Tổng quan quy trình

Quá trình tạo texture cho cánh trong bài học gồm bốn giai đoạn chính:

```text
Nhập ảnh texture
        ↓
Kết nối texture với vật liệu
        ↓
Chọn UV Island của từng phần cánh
        ↓
Di chuyển – xoay – scale – chỉnh vertex
        ↓
Kiểm tra kết quả trên mô hình 3D
```

Bài học không sử dụng một ảnh texture riêng dành cho cánh. Thay vào đó, các UV Island của cánh được đặt lên những vùng phù hợp có sẵn trên texture phần thân máy bay.

Đây là một phương pháp đơn giản, phù hợp khi:

* Mô hình không cần độ chính xác tuyệt đối.
* Cánh không xuất hiện quá gần camera.
* Mục tiêu là tạo kết quả trực quan tương đối nhanh.
* Ảnh texture gốc không có đầy đủ hình ảnh của mọi bộ phận.

---

## 3. Chuẩn bị Shader Editor

### 3.1. Mở thêm Shader Editor

Từ góc của một khu vực giao diện:

1. Kéo để chia thêm một cửa sổ.
2. Mở menu **Editor Type**.
3. Chuyển cửa sổ mới thành **Shader Editor**.
4. Nhấn `N` để đóng Sidebar nếu không cần sử dụng.

Việc mở đồng thời Shader Editor, UV Editor và 3D Viewport giúp theo dõi cả ba yếu tố:

```text
Shader Editor  → Thiết lập vật liệu
UV Editor      → Điều chỉnh UV Island
3D Viewport    → Quan sát texture trên mô hình
```

---

### 3.2. Nhập ảnh texture

Trong tài nguyên của bài học có một ảnh texture Spitfire.

Có thể nhập ảnh bằng cách:

* Kéo trực tiếp file ảnh vào Shader Editor.
* Hoặc tạo node **Image Texture** rồi chọn ảnh từ danh sách.

Khi kéo ảnh vào Shader Editor, Blender thường đồng thời hiển thị ảnh đó trong UV Editor. Tuy nhiên, điều này không phải lúc nào cũng xảy ra.

Nếu ảnh chưa xuất hiện trong UV Editor:

1. Mở danh sách ảnh ở thanh trên của UV Editor.
2. Chọn đúng ảnh texture Spitfire.

---

### 3.3. Kết nối node vật liệu

Kết nối node theo sơ đồ:

```text
┌───────────────────────┐
│ Image Texture         │
│                       │
│ Color ────────────────┼──────────┐
└───────────────────────┘          │
                                   ▼
                        ┌───────────────────────┐
                        │ Principled BSDF       │
                        │                       │
                        │ Base Color            │
                        └───────────┬───────────┘
                                    │ BSDF
                                    ▼
                        ┌───────────────────────┐
                        │ Material Output       │
                        │ Surface               │
                        └───────────────────────┘
```

Thao tác:

1. Chọn node **Image Texture**.
2. Nối đầu ra `Color` vào đầu vào `Base Color` của Principled BSDF.
3. Đặt tên vật liệu, chẳng hạn:

```text
Plane
```

4. Chuyển 3D Viewport sang **Material Preview** để xem texture trên mô hình.

---

## 4. Vì sao texture ban đầu trông lộn xộn?

Sau khi kết nối texture, hình ảnh trên máy bay có thể trông gần như ngẫu nhiên.

Nguyên nhân là các UV Island chưa được đặt đúng vị trí trên ảnh texture.

Một điểm quan trọng là sự khác nhau giữa phần thân và phần cánh.

### Phần thân máy bay

Mirror Modifier đã được **Apply** trước khi unwrap. Vì vậy, hai bên thân có các UV Island riêng biệt.

```text
Thân bên trái  → UV Island riêng
Thân bên phải  → UV Island riêng
```

### Phần cánh

Cánh được unwrap khi **Mirror Modifier vẫn còn hoạt động**. Vì vậy, UV của hai bên cánh nằm chồng lên nhau.

```text
Cánh trái
    └── dùng chung UV Island
Cánh phải
```

Kết quả là hai cánh sử dụng cùng một vùng texture và có hình ảnh giống nhau.

Điều này giúp:

* Tiết kiệm không gian UV.
* Hai cánh có texture đồng nhất.
* Chỉ cần điều chỉnh một UV Island cho cả hai bên.

Tuy nhiên, nó cũng tạo ra hạn chế:

* Chữ hoặc ký hiệu có thể bị đảo ngược ở một bên.
* Không thể tạo hoa văn khác nhau cho từng cánh nếu vẫn dùng UV chồng lên nhau.

---

## 5. Tạo texture cho cánh đuôi phía trên

### 5.1. Chọn hai UV Island

Trong Edit Mode:

1. Nhấn `Alt + A` để bỏ chọn toàn bộ.
2. Di chuột lên một phần cánh đuôi.
3. Nhấn `L` để chọn phần hình học liên kết.
4. Chọn phần đối diện tương ứng bằng `L`.

Khi chọn bằng `L`, nên sử dụng tùy chọn giới hạn theo đường seam để chỉ chọn đúng vùng UV mong muốn.

Do hai cánh đối xứng sử dụng chung UV, hai UV Island có thể đang nằm chồng lên nhau.

---

### 5.2. Đặt UV Island lên texture

Trong UV Editor, sử dụng:

* `G`: di chuyển.
* `S`: thu phóng.
* `R`: xoay.

Quy trình thử nghiệm:

```text
Chọn UV Island
      ↓
Scale nhỏ lại
      ↓
Di chuyển lên vùng thân máy bay
      ↓
Quan sát kết quả trong 3D Viewport
      ↓
Điều chỉnh lại nếu texture bị méo
```

Không nhất thiết phải tìm đúng hình ảnh cánh trên texture. Có thể sử dụng một vùng sơn hoặc đường panel trên thân máy bay để tạo cảm giác hợp lý.

---

### 5.3. Những vùng nên tránh

Khi đặt UV cánh đuôi, nên tránh các vùng sau:

#### Vùng bầu trời

Nếu UV Island vượt ra khỏi thân máy bay trong ảnh, cánh có thể xuất hiện một mảng màu xanh của bầu trời.

#### Vùng có nhiều chữ

Chữ dễ bị:

* Kéo giãn.
* Méo.
* Đảo ngược ở cánh đối diện.
* Làm lộ rõ việc UV không khớp chính xác.

#### Vùng có biểu tượng lớn

Các biểu tượng hình tròn hoặc ký hiệu lớn dễ bị biến dạng theo hình dạng của cánh.

#### Vùng có đường panel nghiêng

Nếu xoay UV Island, các đường panel có thể xuất hiện ở góc không tự nhiên.

---

## 6. Tạo texture cho mặt trên của cánh chính

Cánh chính lớn hơn cánh đuôi nên việc tìm vùng texture phù hợp sẽ khó hơn.

### 6.1. Chọn mặt trên cánh

1. Nhấn `Alt + A` để bỏ chọn.
2. Di chuột lên mặt trên của cánh chính.
3. Nhấn `L` để chọn vùng liên kết.
4. Đảm bảo cả hai phần cần thiết đã được chọn.

---

### 6.2. Thu nhỏ UV Island

Vì UV Island của cánh chính khá lớn, cần thu nhỏ để đặt vừa một vùng trên texture:

```text
S → kéo chuột vào trong
```

Sau đó sử dụng `G` để đưa UV Island vào vùng có các đường panel hoặc màu sơn tương đối đồng nhất.

---

### 6.3. Lưu ý về độ phân giải

Nếu UV Island bị thu nhỏ quá nhiều, nó chỉ sử dụng một số lượng nhỏ pixel trên ảnh texture.

Khi đó texture có thể:

* Trông mờ.
* Xuất hiện hạt.
* Bị pixel hóa.
* Mất chi tiết đường panel.

Hiện tượng này liên quan đến **Texel Density**.

```text
UV Island lớn trên texture
→ sử dụng nhiều pixel
→ texture rõ hơn

UV Island nhỏ trên texture
→ sử dụng ít pixel
→ texture dễ bị mờ hoặc vỡ
```

Do đó, cần tìm sự cân bằng giữa:

* Vị trí texture phù hợp.
* Độ chi tiết.
* Mức độ kéo giãn.
* Không gian còn trống trên ảnh.

---

## 7. Điều chỉnh từng UV Vertex

Nếu một phần đầu cánh bị méo hoặc lấy nhầm vùng texture, không nhất thiết phải di chuyển toàn bộ UV Island.

Có thể chuyển sang **Vertex Select Mode** trong UV Editor để chỉnh từng điểm.

### Quy trình

1. Chuyển từ Island Select sang **Vertex Select**.
2. Box Select các vertex ở vùng cần sửa.
3. Nhấn `G` để di chuyển.
4. Quan sát kết quả trên mô hình.

Khi UV của hai cánh đang chồng lên nhau, một cú click có thể chỉ chọn vertex của một UV Island.

Vì vậy, nên dùng Box Select:

```text
B → kéo khung quanh các vertex
```

Cách này giúp chọn đồng thời vertex của cả hai UV Island chồng lên nhau.

---

## 8. Cân bằng giữa kéo giãn và vị trí texture

Di chuyển một vertex có thể sửa lỗi tại một khu vực nhưng lại làm kéo giãn face bên cạnh.

Ví dụ:

```text
Di chuyển cạnh đầu cánh xuống
        ↓
Giảm vùng texture bị lệch ở đầu cánh
        ↓
Face phía sau trở nên dài hơn trong UV
        ↓
Biểu tượng hoặc đường panel bị kéo giãn
```

Vì vậy, không nên chỉ tập trung vào một điểm. Cần quan sát toàn bộ cánh sau mỗi lần chỉnh sửa.

Một quy trình hiệu quả:

1. Di chuyển một lượng nhỏ.
2. Chuyển sang Object Mode để kiểm tra.
3. Quay lại Edit Mode.
4. Điều chỉnh tiếp nếu cần.
5. Dừng khi đạt mức cân bằng hợp lý.

---

## 9. Tạo texture cho mặt dưới cánh chính

Mặt dưới của cánh thường ít được camera nhìn thấy hơn mặt trên. Vì vậy, độ chính xác có thể không cần cao bằng.

Tuy nhiên, vẫn phải tránh các lỗi rõ ràng như:

* Vùng bầu trời.
* Chữ lớn.
* Các mảng màu không liên quan.
* Texture kéo giãn quá mức.

### Các bước

1. Nhấn `Alt + A` để bỏ chọn.
2. Nhấn `L` trên từng phần mặt dưới của cánh.
3. Chuyển sang **Island Select Mode**.
4. Chọn cả hai UV Island.
5. Xoay bằng `R` nếu cần.
6. Thu nhỏ bằng `S`.
7. Di chuyển bằng `G`.
8. Kiểm tra trong Object Mode.

Có thể thay đổi tỷ lệ riêng theo từng trục:

```text
S, X → scale theo chiều ngang
S, Y → scale theo chiều dọc
```

Tuy nhiên, scale không đồng đều sẽ làm texture bị kéo dài hoặc ép lại.

---

## 10. Vấn đề chữ bị đảo ngược

Do hai cánh sử dụng UV chồng lên nhau, cùng một vùng texture sẽ được phản chiếu sang phía đối diện.

Nếu vùng texture có chữ:

```text
Cánh thứ nhất → chữ đọc bình thường
Cánh đối diện → chữ có thể bị phản chiếu
```

Vì vậy, nên ưu tiên các vùng:

* Chỉ có màu sơn.
* Có đường panel đơn giản.
* Có hoa văn đối xứng.
* Không chứa chữ hoặc số dễ nhận biết.

Nếu cần chữ hiển thị đúng ở cả hai cánh, phải sử dụng UV riêng cho từng bên, thay vì để chúng chồng lên nhau.

---

## 11. Tạo texture cho mặt dưới cánh đuôi

Thao tác tương tự các phần trước:

1. Trở lại Edit Mode.
2. Nhấn `Alt + A` để bỏ chọn.
3. Nhấn `L` trên hai mặt dưới của cánh đuôi.
4. Chuyển sang Island Select Mode.
5. Chọn cả hai UV Island.
6. Nhấn `G` để di chuyển.
7. Nhấn `S` để điều chỉnh kích thước.
8. Đặt UV lên vùng texture phù hợp.
9. Kiểm tra kết quả trong Object Mode.

Vì đây là vùng nhỏ và ít nổi bật, một chút chữ hoặc biến dạng nhẹ có thể không dễ nhận thấy.

---

## 12. Chuyển đổi giữa Edit Mode và Object Mode

Trong quá trình chỉnh UV, nên thường xuyên chuyển đổi giữa hai chế độ:

| Chế độ          | Mục đích                                     |
| --------------- | -------------------------------------------- |
| **Edit Mode**   | Chọn face, UV Island và chỉnh các UV Vertex  |
| **Object Mode** | Quan sát texture trên toàn bộ mô hình rõ hơn |

Phím chuyển đổi:

```text
Tab
```

Quy trình lặp lại:

```text
Edit Mode
→ chỉnh UV
→ Tab
→ Object Mode
→ kiểm tra
→ Tab
→ Edit Mode
→ tiếp tục chỉnh
```

Việc kiểm tra thường xuyên giúp phát hiện sớm:

* Texture bị giãn.
* Đường panel bị lệch.
* Chữ bị phản chiếu.
* UV lấy nhầm vùng trời.
* Màu giữa các phần cánh không đồng nhất.

---

## 13. Phím tắt quan trọng

| Phím tắt          | Chức năng                                |
| ----------------- | ---------------------------------------- |
| `Ctrl + Spacebar` | Phóng to hoặc khôi phục khu vực hiện tại |
| `N`               | Mở hoặc đóng Sidebar                     |
| `Tab`             | Chuyển giữa Object Mode và Edit Mode     |
| `Alt + A`         | Bỏ chọn toàn bộ                          |
| `L`               | Chọn phần hình học hoặc UV liên kết      |
| `B`               | Box Select                               |
| `G`               | Di chuyển UV                             |
| `R`               | Xoay UV                                  |
| `S`               | Thu phóng UV                             |
| `S`, `X`          | Scale UV theo trục X                     |
| `S`, `Y`          | Scale UV theo trục Y                     |
| `Z`               | Mở Viewport Shading Pie Menu             |

---

## 14. Sơ đồ lựa chọn chế độ UV

```text
Muốn chọn toàn bộ một phần cánh?
              │
              ├── Có → Island Select hoặc nhấn L
              │
              └── Không
                   │
                   └── Muốn chỉnh một khu vực nhỏ?
                            │
                            ├── Vertex Select
                            │    └── Dùng B để chọn các vertex chồng nhau
                            │
                            └── Edge Select
                                 └── Điều chỉnh cạnh UV
```

---

## 15. Lỗi thường gặp và cách khắc phục

### 15.1. Texture xuất hiện ngẫu nhiên

**Nguyên nhân:** UV Island chưa được đặt đúng trên ảnh.

**Cách khắc phục:** Chọn từng UV Island và sử dụng `G`, `R`, `S` để định vị lại.

---

### 15.2. Một phần cánh có màu trời

**Nguyên nhân:** Một phần UV Island nằm trên vùng bầu trời của ảnh texture.

**Cách khắc phục:**

* Di chuyển toàn bộ UV Island.
* Hoặc chỉnh riêng các UV Vertex ở đầu cánh.

---

### 15.3. Chữ xuất hiện ngược

**Nguyên nhân:** Hai cánh sử dụng UV chồng lên nhau và được phản chiếu bởi Mirror Modifier.

**Cách khắc phục:**

* Tránh vùng có chữ.
* Hoặc tạo UV riêng cho từng cánh nếu cần độ chính xác cao.

---

### 15.4. Texture bị mờ hoặc pixel hóa

**Nguyên nhân:** UV Island bị scale quá nhỏ, chỉ sử dụng rất ít pixel của texture.

**Cách khắc phục:**

* Tăng kích thước UV Island.
* Sử dụng ảnh texture có độ phân giải cao hơn.
* Dành nhiều không gian texture hơn cho cánh.

---

### 15.5. Đường panel bị nghiêng

**Nguyên nhân:** UV Island bị xoay không phù hợp với hướng các đường panel trên texture.

**Cách khắc phục:**

* Hạn chế xoay UV quá nhiều.
* Căn cạnh cánh song song với các đường panel.
* Thử một vùng texture khác.

---

### 15.6. Một bên UV di chuyển nhưng bên kia không di chuyển

**Nguyên nhân:** Chỉ một UV Vertex hoặc một UV Island trong hai island chồng nhau được chọn.

**Cách khắc phục:** Dùng `B` để Box Select, bảo đảm chọn cả hai lớp UV.

---

### 15.7. Chỉnh một điểm làm vùng khác bị giãn

**Nguyên nhân:** Thay đổi hình dạng UV Face làm tỷ lệ giữa UV và mesh không còn đồng đều.

**Cách khắc phục:**

* Di chuyển nhiều vertex lân cận cùng lúc.
* Chỉ điều chỉnh từng khoảng nhỏ.
* Kiểm tra liên tục trong Object Mode.
* Chấp nhận một mức biến dạng nhỏ nếu vùng đó không nổi bật.

---

## 16. Kinh nghiệm chọn vùng texture

Khi ảnh texture không có hình cánh riêng, nên ưu tiên các vùng theo thứ tự:

1. Vùng màu sơn đồng nhất.
2. Vùng có đường panel mảnh.
3. Vùng có hoa văn nhỏ, khó nhận biết.
4. Vùng có biểu tượng đơn giản.
5. Vùng có chữ hoặc số chỉ khi không còn lựa chọn khác.
6. Không nên sử dụng vùng bầu trời hoặc nền ảnh.

Có thể đánh giá nhanh bằng bảng sau:

| Loại vùng texture     | Mức độ phù hợp |
| --------------------- | -------------: |
| Màu sơn đồng nhất     |        Rất tốt |
| Đường panel đơn giản  |            Tốt |
| Hoa văn nhỏ           |        Khá tốt |
| Biểu tượng tròn lớn   |     Trung bình |
| Chữ và số             |      Không nên |
| Bầu trời hoặc nền ảnh |      Nên tránh |

---

## 17. Quy trình thực hành hoàn chỉnh

### Bước 1: Nhập texture

* Mở Shader Editor.
* Kéo ảnh Spitfire Texture vào.
* Chọn ảnh trong UV Editor nếu ảnh chưa tự động hiển thị.

### Bước 2: Thiết lập vật liệu

* Nối `Color` của Image Texture vào `Base Color`.
* Đặt tên material.
* Chuyển sang Material Preview.

### Bước 3: Chỉnh cánh đuôi phía trên

* Chọn hai vùng bằng `L`.
* Di chuyển UV lên vùng không có chữ và bầu trời.
* Xoay hoặc scale nếu cần.

### Bước 4: Chỉnh mặt trên cánh chính

* Chọn UV Island của cánh chính.
* Thu nhỏ và định vị lên vùng có đường panel.
* Kiểm tra hiện tượng pixel hóa.
* Chỉnh từng vertex nếu đầu cánh bị lệch.

### Bước 5: Chỉnh mặt dưới cánh chính

* Chọn đúng các island mặt dưới.
* Xoay và scale để tìm vùng phù hợp.
* Tránh chữ vì một bên sẽ bị phản chiếu.

### Bước 6: Chỉnh mặt dưới cánh đuôi

* Chọn hai UV Island.
* Scale nhỏ.
* Đặt vào vùng texture ít nổi bật.

### Bước 7: Kiểm tra toàn bộ mô hình

* Chuyển sang Object Mode.
* Xoay góc nhìn quanh máy bay.
* Kiểm tra cả mặt trên và mặt dưới.

### Bước 8: Lưu file

```text
Ctrl + Shift + S
```

Nên lưu một phiên bản mới để có thể quay lại nếu phần texturing tiếp theo gặp lỗi.

---

## 18. Checklist thực hành

### Thiết lập vật liệu

* [ ] Đã nhập ảnh Spitfire Texture.
* [ ] Đã chọn đúng ảnh trong UV Editor.
* [ ] Đã nối Image Texture vào Base Color.
* [ ] Đã chuyển sang Material Preview.

### Cánh đuôi

* [ ] Đã chọn đúng UV Island mặt trên.
* [ ] Đã đặt UV tránh vùng bầu trời.
* [ ] Đã hạn chế sử dụng vùng có chữ.
* [ ] Đã hoàn thành mặt dưới cánh đuôi.

### Cánh chính

* [ ] Đã hoàn thành texture cho mặt trên.
* [ ] Đã hoàn thành texture cho mặt dưới.
* [ ] Texture không bị pixel hóa quá rõ.
* [ ] Đầu cánh không bị kéo giãn nghiêm trọng.
* [ ] Các đường panel có hướng tương đối hợp lý.

### Kiểm tra cuối

* [ ] Đã kiểm tra trong Object Mode.
* [ ] Đã kiểm tra cả hai bên cánh.
* [ ] Không có mảng bầu trời rõ ràng trên cánh.
* [ ] Không có chữ đảo ngược quá dễ nhận thấy.
* [ ] Đã lưu file trước khi sang bài tiếp theo.

---

## 19. Tóm tắt bài học

Trong bài học này, ảnh texture Spitfire được kết nối với vật liệu của máy bay bằng Shader Editor. Sau đó, các UV Island của cánh chính và cánh đuôi được di chuyển lên những vùng phù hợp của ảnh texture.

Do ảnh không có texture cánh hoàn chỉnh, quá trình này chủ yếu dựa trên thử nghiệm:

```text
Chọn UV
→ di chuyển
→ scale
→ xoay
→ kiểm tra
→ chỉnh vertex
```

Các cánh được unwrap trong khi Mirror Modifier còn hoạt động nên hai bên sử dụng UV chồng lên nhau. Cách này tiết kiệm không gian UV nhưng có thể khiến chữ và ký hiệu bị phản chiếu.

Điểm quan trọng nhất của bài học là tìm được sự cân bằng giữa:

* Vị trí UV phù hợp.
* Độ rõ của texture.
* Mức độ kéo giãn.
* Hướng của đường panel.
* Tính đối xứng giữa hai cánh.

Ở bài tiếp theo, phần thân máy bay sẽ được tạo texture bằng một số kỹ thuật khác.

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
