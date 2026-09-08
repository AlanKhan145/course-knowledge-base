# 040 — Wrap Up – Modular Dungeons

| Thuộc tính       | Nội dung                                                       |
| ---------------- | -------------------------------------------------------------- |
| **Module**       | Module 02 — Modular Dungeon                                    |
| **Bài học**      | Wrap Up – Modular Dungeons                                     |
| **Thời lượng**   | 0:41                                                           |
| **Chủ đề chính** | Tổng kết dự án Modular Dungeon và định hướng luyện tập mở rộng |

---

## 1. Mục tiêu bài học

Sau bài tổng kết này, bạn có thể:

* Nhìn lại toàn bộ dự án dungeon modular đã hoàn thành.
* Hiểu rằng scene hiện tại có thể tiếp tục được mở rộng bằng nhiều asset mới.
* Biết cách tìm ý tưởng từ các bộ asset dungeon low-poly có sẵn.
* Thử nghiệm thêm về mô hình, vật liệu, ánh sáng và bố cục.
* Chia sẻ sản phẩm với cộng đồng để nhận phản hồi.
* Chuẩn bị chuyển sang phần tiếp theo của khóa học: tạo mô hình khủng long.

---

## 2. Nội dung chính

Bài học khép lại dự án **Modular Dungeon** sau khi người học đã hoàn thành một môi trường hầm ngục bằng các asset có thể tái sử dụng.

Thay vì coi scene hiện tại là sản phẩm cuối cùng, giảng viên khuyến khích người học xem đây là nền tảng để tiếp tục luyện tập và mở rộng kỹ năng.

```text
Dungeon hiện tại
      │
      ├── Thêm vũ khí và đạo cụ
      ├── Tạo thêm biến thể tường
      ├── Tạo thêm biến thể sàn
      ├── Thử ánh sáng nhiều màu
      ├── Thay đổi bố cục phòng
      └── Xây dựng scene dungeon lớn hơn
```

Việc tự mở rộng một dự án đã hoàn thành là một phương pháp luyện tập rất hiệu quả, bởi người học không cần bắt đầu lại toàn bộ từ đầu mà vẫn có thể rèn luyện thêm nhiều kỹ thuật mới.

---

## 3. Những kỹ năng đã thực hành trong module

Trong suốt dự án Modular Dungeon, người học đã được làm quen với một quy trình tạo môi trường 3D tương đối hoàn chỉnh.

### 3.1. Modeling

Các kỹ thuật modeling chính bao gồm:

* Tạo hình từ các primitive cơ bản.
* Box modeling.
* Di chuyển, xoay và scale object.
* Chỉnh sửa vertex, edge và face.
* Loop Cut.
* Extrude.
* Inset.
* Knife Tool.
* Bevel cạnh và vertex.
* Tạo các chi tiết sứt mẻ, lồi lõm.
* Tối ưu geometry không cần thiết.

---

### 3.2. Modular Design

Người học đã thực hành xây dựng các asset có thể ghép nối và tái sử dụng:

* Cột đá.
* Tường đá.
* Sàn dungeon.
* Khung cửa.
* Cửa ra vào.
* Thùng gỗ.
* Thùng hàng.
* Đuốc và các đạo cụ trang trí.

Ý tưởng cốt lõi của thiết kế modular là:

```text
Một asset cơ bản
      │
      ├── Duplicate
      ├── Xoay
      ├── Ghép nối
      └── Tái sử dụng
            │
            ▼
     Tạo scene lớn hơn
```

Thay vì dựng toàn bộ dungeon thành một mesh duy nhất, scene được xây dựng từ nhiều module nhỏ có kích thước và điểm ghép nhất quán.

---

### 3.3. Modifier

Các modifier đã được sử dụng hoặc giới thiệu trong module có thể bao gồm:

| Modifier    | Công dụng                                        |
| ----------- | ------------------------------------------------ |
| **Mirror**  | Tạo hình đối xứng và giảm số thao tác chỉnh sửa  |
| **Bevel**   | Làm mềm cạnh, giúp vật thể bắt sáng tự nhiên hơn |
| **Boolean** | Cắt hoặc kết hợp hình học giữa các object        |
| **Array**   | Nhân bản object theo một hướng cố định           |

Các modifier giúp tăng tốc quá trình dựng hình và giữ cho mô hình dễ chỉnh sửa hơn.

---

### 3.4. Materials và Shading

Người học đã thực hành:

* Tạo material mới.
* Gán màu cho các object.
* Điều chỉnh `Base Color`.
* Điều chỉnh `Roughness`.
* Tạo sự khác biệt giữa gỗ, đá và kim loại.
* Sử dụng Shader Editor ở mức cơ bản.
* Kiểm tra vật liệu bằng Material Preview hoặc Rendered View.

---

### 3.5. Lighting và Presentation

Scene dungeon không chỉ cần mô hình mà còn cần ánh sáng để tạo không khí.

Các kỹ năng liên quan bao gồm:

* Thêm Light object.
* Điều chỉnh cường độ ánh sáng.
* Thay đổi màu ánh sáng.
* Sử dụng ánh sáng ấm từ đuốc.
* Tạo vùng sáng và vùng tối để tăng chiều sâu.
* Bố trí camera và chuẩn bị render cuối cùng.

---

## 4. Bài tập mở rộng được đề xuất

Giảng viên khuyến khích người học tiếp tục phát triển dungeon bằng cách tạo thêm các object mới.

### 4.1. Tạo một thanh kiếm low-poly

Một thanh kiếm low-poly có thể phù hợp với bối cảnh dungeon hiện tại.

Thanh kiếm có thể được đặt:

* Dựa vào tường.
* Trên một chiếc thùng.
* Trong tay một nhân vật.
* Treo trên giá vũ khí.
* Nằm trên sàn như một vật phẩm bị bỏ lại.

```text
Thanh kiếm low-poly
      │
      ├── Lưỡi kiếm
      ├── Chuôi kiếm
      ├── Chắn tay
      └── Tay cầm
```

Có thể tìm video hướng dẫn tạo kiếm low-poly trên kênh YouTube của giảng viên.

---

### 4.2. Tìm ý tưởng từ các dungeon pack

Người học có thể tìm các bộ asset dungeon low-poly trên mạng để tham khảo.

Mục tiêu không phải là sao chép hoàn toàn, mà là:

1. Quan sát các object thường xuất hiện trong dungeon.
2. Phân tích chúng thành các hình khối đơn giản.
3. Tự dựng lại bằng kỹ năng đã học.
4. Tạo biến thể riêng phù hợp với scene.

Một số asset có thể tham khảo:

| Nhóm asset     | Ví dụ                                     |
| -------------- | ----------------------------------------- |
| **Vũ khí**     | Kiếm, rìu, khiên, cung tên                |
| **Nội thất**   | Bàn gỗ, ghế, giá sách, giường             |
| **Đạo cụ**     | Chìa khóa, dây xích, bình thuốc, túi tiền |
| **Kiến trúc**  | Cầu thang, cổng sắt, cửa bí mật           |
| **Trang trí**  | Đầu lâu, xương, cờ, biểu tượng cổ         |
| **Nguồn sáng** | Nến, đèn treo, lò lửa, đuốc tường         |

---

### 4.3. Tạo thêm biến thể tường

Thay vì chỉ sử dụng một loại tường, có thể tạo nhiều phiên bản khác nhau:

* Tường đá nguyên vẹn.
* Tường có vết nứt.
* Tường bị thủng.
* Tường có cửa sổ nhỏ.
* Tường có xích treo.
* Tường có rêu hoặc dây leo.
* Tường có biểu tượng hoặc phù điêu.

```text
Wall Module cơ bản
      │
      ├── Wall_A: nguyên vẹn
      ├── Wall_B: nứt nhẹ
      ├── Wall_C: bị vỡ
      ├── Wall_D: có cửa sổ
      └── Wall_E: có trang trí
```

Những biến thể này giúp dungeon bớt lặp lại dù vẫn sử dụng chung một hệ module.

---

### 4.4. Tạo thêm biến thể sàn

Tương tự tường, sàn dungeon cũng có thể được mở rộng:

* Sàn đá bình thường.
* Sàn bị nứt.
* Sàn có hố.
* Sàn có song sắt.
* Sàn có bẫy.
* Sàn có nước hoặc dung nham.
* Sàn có biểu tượng phép thuật.

Các biến thể sàn có thể được trộn ngẫu nhiên trong scene để tạo cảm giác tự nhiên hơn.

---

### 4.5. Thử nghiệm ánh sáng nhiều màu

Ánh sáng có thể được sử dụng để phân biệt các khu vực trong dungeon.

| Màu ánh sáng  | Cảm giác gợi ý                        |
| ------------- | ------------------------------------- |
| Cam hoặc vàng | Đuốc, lửa, khu vực có người sinh sống |
| Xanh lam      | Khu vực lạnh, băng, phép thuật        |
| Xanh lá       | Độc tố, phòng thí nghiệm, hầm mộ      |
| Đỏ            | Nguy hiểm, dung nham, phòng boss      |
| Tím           | Ma thuật, bí ẩn, cổng dịch chuyển     |

Ví dụ:

```text
Khu vực dungeon
      │
      ├── Phòng đầu: ánh sáng vàng
      ├── Hành lang: ánh sáng xanh lam
      ├── Phòng bẫy: ánh sáng đỏ
      └── Phòng phép thuật: ánh sáng tím
```

Không nên sử dụng quá nhiều màu mạnh trong cùng một khu vực, vì điều đó có thể làm scene trở nên rối mắt.

---

## 5. Quy trình luyện tập mở rộng

Có thể tiếp tục dự án theo quy trình sau:

```text
Mở lại file dungeon
        │
        ▼
Kiểm tra các asset hiện có
        │
        ▼
Chọn một object mới để dựng
        │
        ▼
Tìm ảnh hoặc asset tham khảo
        │
        ▼
Phân tích thành hình khối đơn giản
        │
        ▼
Dựng phiên bản low-poly
        │
        ▼
Tạo material phù hợp
        │
        ▼
Đặt object vào scene
        │
        ▼
Điều chỉnh ánh sáng và bố cục
        │
        ▼
Render và đánh giá kết quả
```

Mỗi lần chỉ cần bổ sung một hoặc hai asset mới. Sau nhiều lần luyện tập, dungeon sẽ trở nên phong phú hơn mà không tạo cảm giác quá tải.

---

## 6. Chia sẻ sản phẩm với cộng đồng

Giảng viên khuyến khích người học chia sẻ kết quả của mình trên:

* Cộng đồng của khóa học.
* Mạng xã hội.
* Diễn đàn Blender.
* Nhóm học 3D.
* Trang portfolio cá nhân.

Khi chia sẻ, có thể đăng:

* Ảnh render cuối cùng.
* Video quay camera đi xuyên dungeon.
* Ảnh Wireframe.
* Ảnh so sánh trước và sau.
* Các asset riêng lẻ.
* Quá trình phát triển từ blockout đến hoàn thiện.

### Thông tin nên đi kèm

* Phiên bản Blender đã sử dụng.
* Thời gian thực hiện.
* Những kỹ thuật đã áp dụng.
* Phần cảm thấy khó nhất.
* Những điểm muốn nhận góp ý.

Việc chia sẻ giúp:

* Nhận phản hồi từ người khác.
* Phát hiện lỗi mà bản thân chưa nhận ra.
* Có thêm động lực hoàn thành dự án.
* Xây dựng portfolio.
* Theo dõi sự tiến bộ theo thời gian.

---

## 7. Quy trình kiểm tra project trước khi kết thúc

Trước khi chuyển sang module tiếp theo, nên kiểm tra lại file `.blend`.

### 7.1. Kiểm tra Outliner

* Đặt tên rõ ràng cho object.
* Nhóm asset vào Collection.
* Xóa object thử nghiệm không còn sử dụng.
* Kiểm tra object bị ẩn.
* Tránh để quá nhiều object có tên như `Cube.001`, `Cube.002`.

Ví dụ:

```text
Dungeon_Scene
├── Architecture
│   ├── Walls
│   ├── Floors
│   ├── Pillars
│   └── Doors
├── Props
│   ├── Barrels
│   ├── Crates
│   └── Torches
├── Lights
└── Camera
```

---

### 7.2. Kiểm tra transform

Kiểm tra:

* Location.
* Rotation.
* Scale.
* Origin của object.
* Hướng xoay của các module.

Với những object đã hoàn thiện, có thể Apply Transform khi phù hợp:

```text
Ctrl + A
→ Rotation & Scale
```

Không nên Apply modifier hoặc transform một cách máy móc nếu vẫn cần chỉnh sửa object theo phương pháp không phá hủy.

---

### 7.3. Kiểm tra geometry

* Không có mặt bị chồng lên nhau.
* Không có vertex trùng.
* Normal hướng đúng.
* Không có mặt nằm bên trong không cần thiết.
* Không có geometry bị kéo giãn bất thường.
* Các module ghép với nhau không tạo khe hở.

---

### 7.4. Kiểm tra material

* Các object đã được gán đúng material.
* Tên material rõ ràng.
* Không tạo quá nhiều material giống nhau.
* Roughness phù hợp với đá, gỗ và kim loại.
* Màu sắc giữa các asset có sự thống nhất.

---

### 7.5. Kiểm tra ánh sáng và render

* Nguồn sáng chính đủ rõ.
* Không có vùng tối hoàn toàn ngoài ý muốn.
* Ánh sáng màu không quá bão hòa.
* Camera không xuyên vào geometry.
* Render không xuất hiện nhiễu hoặc vật thể bị cắt.
* Scene có điểm nhấn thị giác rõ ràng.

---

## 8. Những lỗi thường gặp sau khi hoàn thành module

### Chỉ hoàn thành đúng hướng dẫn rồi dừng lại

Việc làm theo bài học giúp hiểu công cụ, nhưng kỹ năng sẽ phát triển nhanh hơn khi tự tạo thêm một phiên bản khác.

Nên thay đổi ít nhất một yếu tố:

* Bố cục.
* Màu ánh sáng.
* Loại tường.
* Đạo cụ.
* Kích thước phòng.
* Câu chuyện của scene.

---

### Thêm quá nhiều chi tiết cùng lúc

Khi mở rộng scene, người học dễ thêm quá nhiều object khiến dự án thiếu trọng tâm.

Nên ưu tiên:

1. Một object có silhouette lớn.
2. Một điểm sáng chính.
3. Một khu vực quan trọng.
4. Một vài đạo cụ hỗ trợ câu chuyện.

---

### Sao chép asset tham khảo quá sát

Asset pack nên được dùng để tìm ý tưởng và học cách phân tích hình khối.

Nên tự thay đổi:

* Tỷ lệ.
* Hình dạng.
* Màu sắc.
* Chất liệu.
* Mức độ hư hỏng.
* Cách bố trí.

---

### Không lưu phiên bản mới

Trước khi mở rộng dungeon, nên tạo bản sao file:

```text
modular_dungeon_v01.blend
modular_dungeon_v02.blend
modular_dungeon_extended.blend
```

Điều này giúp quay lại phiên bản cũ nếu có lỗi.

---

## 9. Checklist hoàn thành Module 02

### Project

* [ ] Đã hoàn thành scene Modular Dungeon.
* [ ] Đã lưu file `.blend` cuối cùng.
* [ ] Đã tạo ít nhất một ảnh render.
* [ ] Các module tường, sàn và cột ghép nối hợp lý.
* [ ] Scene có ánh sáng và camera hoàn chỉnh.

### Modeling

* [ ] Hiểu cách sử dụng vertex, edge và face.
* [ ] Đã thực hành Extrude, Inset và Loop Cut.
* [ ] Đã sử dụng Knife Tool.
* [ ] Đã thực hành Bevel.
* [ ] Biết cách tạo chi tiết low-poly.
* [ ] Biết xóa geometry không cần thiết.

### Modular Workflow

* [ ] Hiểu cách tạo asset tái sử dụng.
* [ ] Các module có kích thước nhất quán.
* [ ] Biết Duplicate và xoay module để lắp ráp scene.
* [ ] Biết tạo biến thể để giảm sự lặp lại.
* [ ] Outliner và Collection được tổ chức hợp lý.

### Materials và Lighting

* [ ] Đã tạo material cho đá, gỗ hoặc kim loại.
* [ ] Biết điều chỉnh Base Color và Roughness.
* [ ] Đã thêm nguồn sáng vào scene.
* [ ] Ánh sáng hỗ trợ không khí dungeon.
* [ ] Biết thử nghiệm màu sắc ánh sáng.

### Luyện tập mở rộng

* [ ] Đã chọn ít nhất một asset mới để tự dựng.
* [ ] Đã tham khảo một dungeon pack hoặc ảnh tham khảo.
* [ ] Đã thử thay đổi bố cục scene.
* [ ] Đã lưu một phiên bản mới trước khi chỉnh sửa.
* [ ] Đã hoặc dự định chia sẻ sản phẩm với cộng đồng.

---

## 10. Hướng phát triển project

Sau khi hoàn thành bài học, có thể phát triển scene theo ba cấp độ.

### Cấp độ 1 — Biến thể đơn giản

* Đổi màu ánh sáng.
* Di chuyển các thùng gỗ.
* Thay đổi vị trí đuốc.
* Tạo một cách bố trí phòng mới.
* Thêm vài viên đá hoặc mảnh vỡ.

---

### Cấp độ 2 — Thêm asset mới

* Tạo kiếm low-poly.
* Tạo khiên.
* Tạo giá vũ khí.
* Tạo bàn và ghế.
* Tạo xương hoặc đầu lâu.
* Tạo chìa khóa và rương báu.

---

### Cấp độ 3 — Xây dựng dungeon hoàn chỉnh

* Tạo nhiều phòng nối với nhau.
* Tạo hành lang.
* Tạo cầu thang.
* Tạo phòng kho báu.
* Tạo phòng giam.
* Tạo phòng boss.
* Thêm hiệu ứng sương hoặc hạt bụi.
* Tạo animation camera đi xuyên dungeon.

```text
Module đơn lẻ
      │
      ▼
Một căn phòng
      │
      ▼
Nhiều phòng liên kết
      │
      ▼
Dungeon hoàn chỉnh
      │
      ▼
Scene portfolio hoặc môi trường game
```

---

## 11. Chuyển sang module tiếp theo

Sau khi hoàn thành dungeon, khóa học sẽ chuyển sang một chủ đề hoàn toàn mới:

> Tạo mô hình khủng long xuất hiện trên ảnh bìa của khóa học.

Module tiếp theo sẽ tiếp tục sử dụng các kỹ năng nền tảng đã học, nhưng áp dụng chúng vào một dạng mô hình hữu cơ phức tạp hơn.

Sự chuyển đổi có thể được hình dung như sau:

```text
Modular Dungeon
Hard-surface và kiến trúc
          │
          ▼
      Dinosaur
  Organic Modeling
```

Các kỹ năng như điều hướng viewport, Edit Mode, Extrude, Scale, Loop Cut và quản lý topology vẫn tiếp tục được sử dụng, nhưng cách xây dựng hình khối sẽ linh hoạt và hữu cơ hơn.

---

## 12. Phím tắt và công cụ cần ôn lại

Bài tổng kết không giới thiệu công cụ mới. Đây là thời điểm phù hợp để ôn lại các thao tác quan trọng trong module.

| Phím tắt           | Chức năng                    |
| ------------------ | ---------------------------- |
| `G`                | Di chuyển                    |
| `R`                | Xoay                         |
| `S`                | Scale                        |
| `Tab`              | Chuyển Object Mode/Edit Mode |
| `1`, `2`, `3`      | Vertex, Edge và Face Select  |
| `E`                | Extrude                      |
| `I`                | Inset                        |
| `Ctrl + R`         | Loop Cut                     |
| `K`                | Knife Tool                   |
| `Ctrl + B`         | Bevel Edge                   |
| `Ctrl + Shift + B` | Bevel Vertex                 |
| `Shift + D`        | Duplicate                    |
| `Alt + D`          | Linked Duplicate             |
| `Ctrl + J`         | Join Objects                 |
| `H`                | Ẩn object                    |
| `Alt + H`          | Hiện object đã ẩn            |
| `Shift + Tab`      | Bật hoặc tắt Snapping        |
| `Ctrl + A`         | Apply Transform              |
| `F12`              | Render ảnh                   |
| `Ctrl + S`         | Lưu file                     |

---

## 13. Tóm tắt

Bài học kết thúc Module 02 bằng việc khuyến khích người học tiếp tục mở rộng dự án Modular Dungeon thay vì dừng lại ở scene có sẵn.

Các hướng luyện tập được đề xuất gồm:

1. Tạo thêm đạo cụ như một thanh kiếm low-poly.
2. Tham khảo các bộ asset dungeon để tìm ý tưởng.
3. Tự dựng lại các object bằng kỹ năng đã học.
4. Tạo thêm nhiều loại tường và sàn.
5. Thử nghiệm ánh sáng màu cho từng khu vực.
6. Chia sẻ kết quả với cộng đồng và mạng xã hội.
7. Chuẩn bị chuyển sang module tạo mô hình khủng long.

Thông điệp chính của bài học là:

> Một dự án hướng dẫn chỉ là điểm khởi đầu. Kỹ năng thực sự được củng cố khi bạn tự thay đổi, mở rộng và tạo ra phiên bản riêng của mình.
