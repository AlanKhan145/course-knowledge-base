# 053 — Tổng kết: Khủng long Low-Poly

## Wrap Up – Low Poly Dinosaur

| Thuộc tính            | Nội dung                                                                                               |
| --------------------- | ------------------------------------------------------------------------------------------------------ |
| **Module**            | Module 03 — Low-Poly Dinosaur                                                                          |
| **Bài học**           | Wrap Up – Low Poly Dinosaur                                                                            |
| **Thời lượng**        | 0:50                                                                                                   |
| **Chủ đề chính**      | Tổng kết module và định hướng luyện tập                                                                |
| **Kết quả cuối cùng** | Một scene khủng long low-poly hoàn chỉnh gồm nhân vật, địa hình, cây cối, vật liệu, ánh sáng và Camera |

---

## 1. Nội dung bài học

Đây là bài học cuối cùng của **Module 03 — Low-Poly Dinosaur**. Giảng viên tổng kết quá trình xây dựng mô hình khủng long và khuyến khích người học tiếp tục thực hành bằng những dự án tương tự.

Điều quan trọng không phải là sản phẩm phải giống hoàn toàn với mẫu của giảng viên. Mục tiêu chính của module là giúp người học hiểu và ghi nhớ:

* Quy trình dựng hình từ ảnh tham chiếu.
* Cách chia một mô hình phức tạp thành nhiều bộ phận đơn giản.
* Những công cụ modelling cần thiết để tạo nhân vật low-poly.
* Cách xây dựng môi trường xung quanh nhân vật.
* Cách hoàn thiện một scene bằng vật liệu, ánh sáng và Camera.

Kỹ năng sử dụng Blender sẽ được cải thiện dần qua quá trình luyện tập. Vì vậy, sự khác biệt giữa mô hình của người học và mô hình mẫu là hoàn toàn bình thường.

---

## 2. Quy trình đã thực hiện trong module

```text
Ảnh tham chiếu
      ↓
Dựng hình cơ bản
      ↓
Tạo thân và đầu
      ↓
Tạo chân, tay và móng vuốt
      ↓
Chỉnh sửa hình dáng tổng thể
      ↓
Tạo núi, cây và địa hình
      ↓
Thiết lập vật liệu bằng Shader Nodes
      ↓
Bố trí ánh sáng và Camera
      ↓
Hoàn thiện scene khủng long low-poly
```

---

## 3. Những kỹ năng đã đạt được

### 3.1. Dựng hình nhân vật low-poly

Người học đã thực hành phương pháp **box modelling**, bắt đầu từ các khối hình học đơn giản rồi kéo dài và chỉnh sửa chúng để tạo thành cơ thể khủng long.

Các thao tác quan trọng gồm:

* Di chuyển, xoay và thay đổi kích thước đối tượng.
* Extrude để mở rộng mô hình.
* Thêm Loop Cut để tạo nhiều vùng điều khiển hơn.
* Chỉnh sửa Vertex, Edge và Face.
* Giữ số lượng polygon ở mức thấp để duy trì phong cách low-poly.

---

### 3.2. Sử dụng Mirror Modifier

**Mirror Modifier** được sử dụng để tạo mô hình có tính đối xứng.

Thay vì dựng riêng từng bên, người học chỉ cần chỉnh sửa một nửa mô hình. Blender sẽ tự động phản chiếu các thay đổi sang phía còn lại.

Kỹ thuật này giúp:

* Rút ngắn thời gian modelling.
* Giữ hai bên nhân vật cân đối.
* Hạn chế sai lệch giữa chân trái và chân phải.
* Dễ dàng chỉnh sửa hình dáng tổng thể.

---

### 3.3. Proportional Editing

**Proportional Editing** cho phép di chuyển một điểm và đồng thời tác động mềm đến các điểm lân cận.

Công cụ này đặc biệt hữu ích khi:

* Tạo đường cong cho cơ thể.
* Chỉnh hình dáng đầu và đuôi.
* Tạo địa hình đồi núi.
* Làm cho bề mặt chuyển tiếp tự nhiên hơn.

---

### 3.4. Tạo các chi tiết nhỏ

Người học đã sử dụng nhiều công cụ để tạo các bộ phận nhỏ như:

* Ngón chân.
* Móng vuốt.
* Ngón tay.
* Miệng và khuôn mặt.
* Các góc cạnh đặc trưng của nhân vật.

Các công cụ chính gồm:

| Công cụ      | Công dụng                                     |
| ------------ | --------------------------------------------- |
| **Loop Cut** | Thêm các vòng cạnh để có nhiều vùng chỉnh sửa |
| **Knife**    | Cắt thêm cạnh theo hình dạng mong muốn        |
| **Bevel**    | Làm mềm hoặc tạo thêm mặt tại cạnh và đỉnh    |
| **Extrude**  | Kéo dài bề mặt để tạo bộ phận mới             |
| **Merge**    | Gộp các đỉnh lại với nhau                     |

---

### 3.5. Xây dựng môi trường low-poly

Ngoài nhân vật chính, module còn hướng dẫn cách tạo một môi trường đơn giản gồm:

* Núi và địa hình.
* Cây low-poly.
* Mặt đất.
* Các vật thể trang trí.
* Không gian nền cho scene.

Địa hình được tạo bằng cách subdivide một mesh rồi sử dụng **Proportional Editing** để nâng hoặc hạ các vùng bề mặt.

---

### 3.6. Làm quen với Shader Nodes

Người học đã bắt đầu sử dụng **Shader Editor** để tạo vật liệu bằng node.

Các thành phần quan trọng gồm:

* **Principled BSDF:** shader cơ bản điều khiển màu sắc và đặc tính bề mặt.
* **Color Ramp:** kiểm soát dải màu và vùng chuyển màu.
* **Texture Coordinate:** cung cấp tọa độ để xác định vị trí màu trên mô hình.
* **Separate XYZ:** tách riêng các trục X, Y và Z.
* **Material Output:** đưa kết quả vật liệu ra bề mặt đối tượng.

Một quy trình tạo gradient cơ bản:

```text
Texture Coordinate
        ↓
Separate XYZ
        ↓
Color Ramp
        ↓
Principled BSDF
        ↓
Material Output
```

Cách kết nối này cho phép màu sắc của mô hình thay đổi theo độ cao hoặc theo một hướng xác định.

---

### 3.7. Ánh sáng và Camera

Để hoàn thiện scene, người học đã thực hành:

* Thêm và điều chỉnh **Sun Light**.
* Thay đổi màu nền của **World**.
* Chọn góc nhìn phù hợp.
* Đặt Camera để làm nổi bật nhân vật.
* Sắp xếp các vật thể nền nhằm tạo chiều sâu.
* Kiểm tra bố cục trước khi render.

Camera không chỉ ghi lại scene mà còn quyết định cách người xem cảm nhận về kích thước, tư thế và sự nổi bật của nhân vật.

---

## 4. Thông điệp quan trọng của bài học

Không cần lo lắng nếu mô hình của bạn không giống hoàn toàn với mô hình mẫu.

Trong giai đoạn học Blender, điều quan trọng hơn là:

1. Hiểu quy trình thực hiện.
2. Ghi nhớ công cụ đã sử dụng.
3. Biết lý do sử dụng từng kỹ thuật.
4. Có khả năng áp dụng kỹ thuật đó vào một mô hình khác.
5. Hoàn thành sản phẩm thay vì liên tục chỉnh sửa để đạt sự hoàn hảo.

```text
Không cần giống mẫu hoàn toàn
              ↓
Hiểu đúng kỹ thuật
              ↓
Luyện tập nhiều lần
              ↓
Tự xây dựng mô hình mới
```

---

## 5. Bài tập mở rộng

Sau khi hoàn thành module, hãy thử tạo một dự án mới mà không làm theo từng bước của bài giảng.

### Bài tập 1: Tạo một loài động vật khác

Chọn một con vật yêu thích, chẳng hạn như:

* Cá sấu.
* Rùa.
* Voi.
* Hươu cao cổ.
* Cá mập.
* Chim.
* Thằn lằn.

Tìm một ảnh nhìn ngang rõ ràng và sử dụng ảnh đó làm tài liệu tham chiếu.

---

### Bài tập 2: Tạo một loài khủng long khác

Có thể thử dựng:

* Triceratops.
* Stegosaurus.
* Brachiosaurus.
* Velociraptor.
* Ankylosaurus.
* Parasaurolophus.

Hãy quan sát hình dáng đặc trưng của từng loài và chia chúng thành các khối đơn giản trước khi bắt đầu modelling.

---

### Bài tập 3: Mở rộng scene hiện tại

Có thể bổ sung thêm:

* Đá và bụi cây.
* Núi ở phía xa.
* Một con khủng long khác.
* Tổ trứng khủng long.
* Hồ nước.
* Mây low-poly.
* Mặt trời hoặc mặt trăng.
* Hiệu ứng sương mù.
* Nhiều loại cây khác nhau.

---

### Bài tập 4: Thử các phong cách ánh sáng

Tạo nhiều phiên bản của cùng một scene:

| Phiên bản              | Gợi ý                             |
| ---------------------- | --------------------------------- |
| **Ban ngày**           | Ánh sáng mạnh, màu sắc tươi sáng  |
| **Hoàng hôn**          | Ánh sáng cam, bóng đổ dài         |
| **Ban đêm**            | Nền xanh đậm, ánh sáng dịu        |
| **Sương mù**           | Tương phản thấp, không gian bí ẩn |
| **Thế giới giả tưởng** | Ánh sáng tím, xanh hoặc hồng      |

---

## 6. Checklist hoàn thành module

* [ ] Đã chèn và căn chỉnh ảnh tham chiếu.
* [ ] Đã dựng hình thân và đầu khủng long.
* [ ] Đã tạo chân, tay và móng vuốt.
* [ ] Đã sử dụng Mirror Modifier.
* [ ] Đã sử dụng Proportional Editing.
* [ ] Đã chỉnh sửa hình dáng tổng thể.
* [ ] Đã tạo địa hình low-poly.
* [ ] Đã tạo cây và các vật thể trang trí.
* [ ] Đã tạo vật liệu bằng Shader Nodes.
* [ ] Đã sử dụng Color Ramp để tạo gradient.
* [ ] Đã thiết lập ánh sáng.
* [ ] Đã bố trí Camera.
* [ ] Đã lưu phiên bản hoàn chỉnh của dự án.
* [ ] Đã render hoặc chụp lại sản phẩm cuối cùng.

---

## 7. Chia sẻ sản phẩm

Giảng viên khuyến khích người học chia sẻ sản phẩm với cộng đồng.

Việc chia sẻ dự án giúp:

* Ghi nhận quá trình tiến bộ.
* Nhận phản hồi từ những người học khác.
* Học thêm cách xử lý từ các sản phẩm khác nhau.
* Tạo động lực để tiếp tục luyện tập.
* Dần xây dựng portfolio cá nhân.

Khi đăng sản phẩm lên mạng xã hội, có thể chia sẻ:

* Ảnh render cuối cùng.
* Ảnh mô hình ở chế độ Solid.
* Ảnh Wireframe.
* Các bước phát triển từ ảnh tham chiếu đến sản phẩm hoàn chỉnh.
* Những khó khăn và kỹ thuật mới đã học được.

---

## 8. Định hướng tiếp theo

Module tiếp theo sẽ chuyển sang quá trình tạo các mô hình có hình thức **chân thực hơn**.

Những kỹ năng trong module khủng long low-poly sẽ tiếp tục được sử dụng, nhưng mức độ chi tiết có thể được nâng cao hơn:

* Hình dáng chính xác hơn.
* Số lượng polygon lớn hơn.
* Bề mặt mềm và tự nhiên hơn.
* Vật liệu phức tạp hơn.
* Ánh sáng gần với thực tế hơn.
* Quy trình modelling có tổ chức hơn.

```text
Low-poly modelling
        ↓
Nắm chắc hình khối cơ bản
        ↓
Tăng mức độ chi tiết
        ↓
Vật liệu và ánh sáng nâng cao
        ↓
Mô hình chân thực hơn
```

---

## 9. Ghi chú thực hành

Nên lưu file dự án khủng long thành nhiều phiên bản:

```text
dinosaur_01_blockout.blend
dinosaur_02_model_complete.blend
dinosaur_03_environment.blend
dinosaur_04_materials.blend
dinosaur_05_final.blend
```

Việc lưu theo từng giai đoạn giúp:

* Quay lại phiên bản cũ khi xảy ra lỗi.
* So sánh sự phát triển của mô hình.
* Dễ dàng thử nghiệm vật liệu hoặc ánh sáng mới.
* Sử dụng lại các cây, đá và vật liệu cho dự án khác.

---

## 10. Tóm tắt

Module 03 kết thúc với một scene khủng long low-poly hoàn chỉnh, được xây dựng từ ảnh tham chiếu và phát triển qua nhiều giai đoạn:

* Dựng hình nhân vật.
* Tạo các chi tiết cơ thể.
* Chỉnh sửa hình dáng bằng Mirror và Proportional Editing.
* Xây dựng địa hình và môi trường.
* Tạo vật liệu bằng Shader Nodes.
* Thiết lập ánh sáng và Camera.
* Hoàn thiện bố cục cuối cùng.

Bài học quan trọng nhất là không cần sao chép mô hình mẫu một cách tuyệt đối. Hãy tập trung vào việc hiểu quy trình, luyện tập các kỹ thuật và từng bước phát triển khả năng tự tạo ra những mô hình của riêng mình.

> **Kết quả của module không chỉ là một mô hình khủng long, mà còn là khả năng biến một ảnh tham chiếu thành một scene 3D low-poly hoàn chỉnh.**

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
