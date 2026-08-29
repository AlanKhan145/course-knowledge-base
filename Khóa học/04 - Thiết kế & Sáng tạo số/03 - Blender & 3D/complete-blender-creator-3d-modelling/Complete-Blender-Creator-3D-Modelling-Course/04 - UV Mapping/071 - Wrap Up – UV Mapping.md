# 071 — Tổng kết UV Mapping

## Wrap Up – UV Mapping

| Thuộc tính           | Nội dung                           |
| -------------------- | ---------------------------------- |
| **Module**           | Module 04 — UV Mapping             |
| **Bài học**          | Wrap Up – UV Mapping               |
| **Thời lượng**       | 0:45                               |
| **Chủ đề chính**     | Tổng kết module                    |
| **Dự án thực hành**  | Máy bay Spitfire và cảnh thành phố |
| **Module tiếp theo** | Rigging & Animation                |

---

## 1. Mục tiêu bài học

Sau bài tổng kết này, người học sẽ:

* Nhìn lại toàn bộ kiến thức đã học trong Module 04.
* Hiểu cách các kỹ thuật **modelling**, **UV mapping**, **texturing**, **animation**, **lighting** và **rendering** liên kết với nhau.
* Biết cách tiếp tục mở rộng cảnh 3D đã hoàn thành.
* Chuẩn bị nền tảng để chuyển sang phần **rigging và animation nhân vật**.

---

## 2. Tổng kết nội dung module

Module 04 bắt đầu từ những khái niệm cơ bản của **UV Mapping**, bao gồm:

* Seam.
* UV Island.
* Unwrap.
* UV Editor.
* Image Texture.
* Cách đặt một hình ảnh 2D lên bề mặt mô hình 3D.

Người học ban đầu thực hành trên các mô hình đơn giản như:

* Tòa nhà.
* Thùng gỗ.
* Các vật thể có hình dạng cơ bản.

Sau đó, những kỹ thuật này được áp dụng vào một dự án phức tạp hơn: xây dựng và hoàn thiện mô hình máy bay **Spitfire** từ ảnh tham chiếu.

Trong dự án cuối module, người học đã thực hiện toàn bộ quy trình:

1. Nhập ảnh tham chiếu.
2. Dựng thân máy bay.
3. Dựng cánh, cánh đuôi và cánh quạt.
4. Đánh dấu seam.
5. Unwrap mô hình.
6. Đặt UV lên ảnh texture.
7. Thiết lập controller cho máy bay.
8. Tạo keyframe chuyển động.
9. Xây dựng cảnh thành phố.
10. Thiết lập ánh sáng HDRI.
11. Render animation hoàn chỉnh.

---

## 3. Sơ đồ quy trình đã học

```text
Ảnh tham chiếu
      │
      ▼
Dựng mô hình 3D
      │
      ▼
Đánh dấu Seam
      │
      ▼
UV Unwrap
      │
      ▼
Sắp xếp UV Island
      │
      ▼
Gắn Image Texture
      │
      ▼
Thiết lập Controller
      │
      ▼
Tạo Keyframe Animation
      │
      ▼
Bố trí cảnh và Camera
      │
      ▼
Chiếu sáng bằng HDRI
      │
      ▼
Render Animation
```

Đây là lần đầu tiên trong khóa học, nhiều giai đoạn của quy trình sản xuất 3D được kết hợp trong cùng một dự án:

> **Modelling → UV Mapping → Texturing → Animation → Lighting → Rendering**

---

## 4. Không cần mô hình phải giống hoàn toàn mẫu

Kết quả của người học không nhất thiết phải giống chính xác với sản phẩm của giảng viên.

Điều quan trọng hơn là hiểu được:

* Seam được đặt ở đâu và vì sao.
* UV Island được tạo ra như thế nào.
* Cách di chuyển, xoay và scale UV.
* Cách đặt UV lên đúng khu vực của texture.
* Cách kiểm tra texture có bị kéo giãn hay không.
* Cách kết hợp mô hình đã hoàn thành vào một cảnh lớn hơn.

UV Mapping là một kỹ năng cần luyện tập nhiều lần. Khi đã quen với việc chia mô hình thành các phần hợp lý, quá trình unwrap sẽ trở nên dễ dàng và trực quan hơn.

---

## 5. Ý tưởng mở rộng dự án

Sau khi hoàn thành cảnh máy bay và thành phố, người học có thể tiếp tục bổ sung các mô hình mới.

### 5.1. Thêm thùng hàng

Thùng hàng là một lựa chọn phù hợp vì:

* Hình dạng đơn giản.
* Dễ dựng bằng cube.
* Dễ đánh dấu seam.
* Có thể sử dụng các texture gỗ đã học.
* Phù hợp với bối cảnh sân bay hoặc nhà kho.

### 5.2. Bổ sung chi tiết cho đường phố

Có thể thêm:

* Vỉa hè.
* Lề đường.
* Vạch phân chia làn đường.
* Đèn đường.
* Biển báo.
* Hàng rào.
* Cột điện.
* Miệng cống.

Những chi tiết nhỏ này giúp cảnh có chiều sâu và trông thuyết phục hơn.

### 5.3. Tạo thêm nhiều loại công trình

Thay vì lặp lại cùng một tòa nhà, có thể tạo:

* Nhà cao và nhà thấp.
* Nhà kho.
* Nhà chứa máy bay.
* Tháp điều khiển.
* Cửa hàng.
* Nhà ở.
* Công trình công nghiệp.

Có thể bắt đầu từ cùng một mô hình cơ sở, sau đó thay đổi:

* Chiều cao.
* Chiều rộng.
* Mái nhà.
* Texture.
* Vị trí cửa ra vào và cửa sổ.

### 5.4. Dựng cửa ra vào và cửa sổ thành vật thể riêng

Trong những bài trước, cửa và cửa sổ chủ yếu được thể hiện bằng texture.

Để tăng mức độ chi tiết, người học có thể:

1. Dựng cửa và cửa sổ thành các mô hình riêng.
2. Unwrap từng mô hình.
3. Đặt UV lên đúng vùng cửa hoặc cửa sổ trong texture.
4. Gắn chúng vào mặt ngoài của tòa nhà.

Phương pháp này giúp cảnh có nhiều chiều sâu hơn so với việc chỉ sử dụng một mặt phẳng có texture.

---

## 6. Quy trình thực hành mở rộng

Một bài luyện tập phù hợp sau khi hoàn thành module:

### Bước 1: Chọn một vật thể mới

Ví dụ:

* Thùng hàng.
* Biển báo.
* Trạm xe buýt.
* Nhà kho nhỏ.
* Xe đẩy hành lý.
* Hòm dụng cụ.

### Bước 2: Dựng hình khối cơ bản

Tập trung vào hình dáng tổng thể trước, chưa cần thêm quá nhiều chi tiết.

### Bước 3: Áp dụng Scale

Trước khi unwrap, sử dụng:

```text
Ctrl + A → Scale
```

Điều này giúp Blender tính toán UV chính xác hơn.

### Bước 4: Đánh dấu Seam

Đặt seam tại những khu vực:

* Ít được nhìn thấy.
* Có sự thay đổi rõ rệt về hướng bề mặt.
* Có thể tách mô hình thành các phần phẳng hợp lý.

### Bước 5: Unwrap và kiểm tra UV

* Chọn toàn bộ mô hình.
* Nhấn `U`.
* Chọn `Unwrap`.
* Kiểm tra các UV Island trong UV Editor.
* Sắp xếp lại nếu các island chồng lên nhau hoặc sử dụng không gian chưa hiệu quả.

### Bước 6: Gắn texture

Thêm node **Image Texture** và kết nối với vật liệu.

### Bước 7: Kiểm tra trong Material Preview

Quan sát các lỗi như:

* Texture bị kéo giãn.
* Texture bị đảo ngược.
* UV đặt sai khu vực.
* Tỷ lệ texture không đồng đều.
* Seam xuất hiện ở vị trí quá dễ thấy.

### Bước 8: Đưa vật thể vào cảnh

Bố trí vật thể mới trong cảnh máy bay và điều chỉnh:

* Vị trí.
* Góc xoay.
* Kích thước.
* Ánh sáng.
* Mức độ nổi bật trong khung hình.

---

## 7. Phím tắt và công cụ cần ôn lại

Bài tổng kết không giới thiệu thao tác mới, nhưng người học nên nhớ các công cụ sau:

| Phím tắt/Công cụ | Chức năng                            |
| ---------------- | ------------------------------------ |
| `Tab`            | Chuyển giữa Object Mode và Edit Mode |
| `A`              | Chọn toàn bộ                         |
| `Alt + A`        | Bỏ chọn toàn bộ                      |
| `Ctrl + E`       | Mở Edge Menu                         |
| `Mark Seam`      | Đánh dấu đường cắt UV                |
| `Clear Seam`     | Xóa đường seam                       |
| `U`              | Mở UV Mapping Menu                   |
| `Unwrap`         | Trải UV dựa trên các seam            |
| `L`              | Chọn phần hình học liên kết          |
| `G`              | Di chuyển                            |
| `R`              | Xoay                                 |
| `S`              | Scale                                |
| `Ctrl + A`       | Apply Transform                      |
| `Shift + D`      | Nhân bản vật thể                     |
| `Shift + R`      | Lặp lại thao tác gần nhất            |
| `I`              | Chèn keyframe                        |
| `Ctrl + F12`     | Render animation                     |

---

## 8. Lưu ý quan trọng

### 8.1. Không cần UV hoàn hảo ngay lần đầu

UV Mapping thường cần điều chỉnh nhiều lần:

```text
Đánh dấu Seam
      ↓
Unwrap
      ↓
Kiểm tra Texture
      ↓
Phát hiện lỗi
      ↓
Điều chỉnh Seam hoặc UV
      ↓
Unwrap lại
```

Đây là một phần bình thường của quy trình làm việc.

### 8.2. Tập trung vào hình khối chính trước

Khi dựng một cảnh lớn, không nên thêm quá nhiều chi tiết ngay từ đầu.

Thứ tự phù hợp là:

1. Tạo hình khối chính.
2. Kiểm tra tỷ lệ.
3. Sắp xếp bố cục.
4. Thêm texture.
5. Bổ sung chi tiết.
6. Thiết lập ánh sáng.
7. Render thử.

### 8.3. Render thử trước khi render chất lượng cao

Nên render thử với:

* Eevee.
* Độ phân giải khoảng 50%.
* Số frame ngắn.
* Thiết lập chất lượng thấp.

Sau khi xác nhận animation, camera, ánh sáng và texture đều chính xác, mới chuyển sang render chất lượng cao hơn.

---

## 9. Những kỹ năng đã đạt được

Sau khi hoàn thành Module 04, người học đã có khả năng:

* Hiểu nguyên lý hoạt động của UV Mapping.
* Phân biệt seam và UV Island.
* Tự đánh dấu seam cho mô hình.
* Unwrap vật thể đơn giản và phức tạp.
* Sắp xếp UV lên ảnh texture.
* Dựng mô hình dựa trên ảnh tham chiếu.
* Sử dụng Mirror Modifier trong quá trình modelling.
* Gắn texture ảnh lên mô hình.
* Kết hợp nhiều asset trong cùng một cảnh.
* Tạo controller cơ bản cho máy bay.
* Tạo animation bằng keyframe.
* Điều chỉnh tốc độ và thời gian animation.
* Thiết lập ánh sáng môi trường bằng HDRI.
* Thiết lập camera.
* Render animation thành chuỗi ảnh hoặc video.

---

## 10. Checklist hoàn thành Module 04

### Kiến thức UV Mapping

* [ ] Hiểu UV Mapping là gì.
* [ ] Phân biệt được seam và UV Island.
* [ ] Biết cách đánh dấu và xóa seam.
* [ ] Biết cách unwrap mô hình.
* [ ] Biết cách di chuyển, xoay và scale UV.
* [ ] Biết cách kiểm tra texture bị kéo giãn.

### Dựng mô hình và texture

* [ ] Đã dựng được thân máy bay từ ảnh tham chiếu.
* [ ] Đã hoàn thành cánh, đuôi, cockpit và cánh quạt.
* [ ] Đã unwrap thân và cánh máy bay.
* [ ] Đã gắn texture cho máy bay.
* [ ] Đã tạo các tòa nhà và thùng gỗ có texture.

### Animation và render

* [ ] Đã tạo controller cho máy bay.
* [ ] Đã tạo chuyển động bay bằng keyframe.
* [ ] Đã tạo chuyển động cho cánh quạt.
* [ ] Đã điều chỉnh timing của animation.
* [ ] Đã thiết lập camera.
* [ ] Đã thiết lập ánh sáng HDRI.
* [ ] Đã render thử bằng Eevee.
* [ ] Đã render được animation hoàn chỉnh.

### Chuẩn bị cho module tiếp theo

* [ ] Hiểu sự khác biệt giữa animation vật thể và animation nhân vật.
* [ ] Sẵn sàng tìm hiểu armature và bone.
* [ ] Sẵn sàng chuyển sang Module 05 — Rigging & Animation.

---

## 11. Nội dung tiếp theo

Ở module tiếp theo, người học sẽ chuyển từ animation một vật thể cứng như máy bay sang **rigging và animation nhân vật**.

Các nội dung có thể bao gồm:

* Armature.
* Bone.
* Parent mô hình với bộ xương.
* Weight Painting.
* Pose Mode.
* Tạo các tư thế cho nhân vật.
* Tạo chuyển động bằng keyframe.
* Xây dựng một chuỗi animation nhân vật.

```text
Animation vật thể
       │
       ▼
Tìm hiểu Armature
       │
       ▼
Tạo hệ thống Bone
       │
       ▼
Gắn mô hình vào bộ xương
       │
       ▼
Điều chỉnh Weight
       │
       ▼
Pose nhân vật
       │
       ▼
Animation nhân vật
```

---

## 12. Tóm tắt

Bài học khép lại Module 04 — UV Mapping và tổng kết hành trình từ những khái niệm cơ bản như **seam**, **UV Island** và **unwrap** đến một dự án hoàn chỉnh có:

* Modelling.
* UV Mapping.
* Texturing.
* Scene Building.
* Animation.
* HDRI Lighting.
* Rendering.

Người học không cần quá lo lắng nếu sản phẩm chưa giống hoàn toàn với mẫu. Mục tiêu quan trọng nhất là hiểu được quy trình và có thể tự áp dụng những kỹ thuật đã học vào các mô hình khác.

Từ nền tảng này, người học đã sẵn sàng chuyển sang module tiếp theo để tìm hiểu về **Rigging & Animation nhân vật**.
