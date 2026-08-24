# 041 — Giới thiệu Module: Khủng long Low-Poly

| Thuộc tính       | Nội dung                             |
| ---------------- | ------------------------------------ |
| **Module**       | Module 03 — Low-Poly Dinosaur        |
| **Bài học**      | Section Intro – Low Poly Dinosaur    |
| **Thời lượng**   | 1:00                                 |
| **Chủ đề chính** | Giới thiệu dự án khủng long low-poly |

---

## 1. Giới thiệu bài học

Sau khi đã làm quen và tự tin hơn với các công cụ modelling trong Blender, chúng ta sẽ nâng độ khó bằng một dự án mới: **tạo mô hình khủng long phong cách low-poly**.

Khác với các bức tường, cột đá hoặc vật thể kiến trúc trong module trước, khủng long là một đối tượng có hình dạng **hữu cơ**. Những đường cong, khớp chân, đầu, thân và tỷ lệ cơ thể khiến quá trình modelling trở nên phức tạp hơn.

Để hỗ trợ việc dựng hình, chúng ta sẽ sử dụng **ảnh tham chiếu** làm nền trong viewport. Đây là một kỹ thuật phổ biến trong quy trình modelling 3D, giúp người dựng hình kiểm soát tốt hơn:

* Tỷ lệ tổng thể của nhân vật.
* Hình dáng phần đầu, thân và đuôi.
* Vị trí của chân, tay và các khớp.
* Sự nhất quán giữa các góc nhìn.

> Mục tiêu quan trọng không phải là tạo ra mô hình giống hoàn toàn với sản phẩm của giảng viên, mà là áp dụng đúng các nguyên tắc modelling đã học.

---

## 2. Dự án trong module

Trong module này, chúng ta sẽ hoàn thành hai phần chính:

1. **Dựng mô hình khủng long low-poly.**
2. **Xây dựng cảnh quan xung quanh khủng long.**

### Sơ đồ tổng quan

```text
Ảnh tham chiếu
      │
      ▼
Dựng hình khối cơ bản
      │
      ▼
Chỉnh sửa thân và đầu
      │
      ▼
Tạo chân, tay và móng vuốt
      │
      ▼
Hoàn thiện chi tiết khuôn mặt
      │
      ▼
Tạo vật liệu và màu sắc
      │
      ▼
Xây dựng địa hình và cây cối
      │
      ▼
Thiết lập ánh sáng
      │
      ▼
Hoàn thiện scene khủng long
```

---

## 3. Mục tiêu của module

Sau khi hoàn thành module, người học có thể:

* Dựng được toàn bộ hình khối của một con khủng long low-poly.
* Làm việc với các dạng hình học hữu cơ phức tạp hơn.
* Chèn và căn chỉnh ảnh tham chiếu trong Blender.
* Sử dụng ảnh góc nhìn trước và góc nhìn bên để kiểm soát tỷ lệ.
* Tạo thân, đầu, chân, tay, móng vuốt và các chi tiết khuôn mặt.
* Áp dụng các kỹ thuật mesh editing đã học vào một mô hình nhân vật.
* Xây dựng địa hình và môi trường xung quanh nhân vật.
* Bổ sung cây cối, vật liệu, màu sắc và ánh sáng cho scene.
* Làm quen với **Shader Editor** và vật liệu sử dụng Shader Node.
* Tạo hiệu ứng chuyển màu bằng node **Color Ramp**.

---

## 4. Kỹ năng trọng tâm

### 4.1. Modelling hình dạng hữu cơ

Các vật thể kiến trúc thường có bề mặt phẳng, góc vuông và tỷ lệ dễ kiểm soát. Ngược lại, mô hình sinh vật có nhiều đường cong và bộ phận liên kết với nhau.

Trong dự án này, người học sẽ cần chú ý đến:

* Tỷ lệ giữa đầu, thân và đuôi.
* Độ cong của sống lưng.
* Vị trí và chiều dài của chân.
* Cách các khớp nối với thân.
* Silhouette của nhân vật khi nhìn từ nhiều góc độ.

```text
        Đầu
         │
         ▼
Tay ─── Thân ─── Đuôi
         │
         ▼
        Chân
```

**Silhouette** là đường bao bên ngoài của mô hình. Một mô hình low-poly tốt cần có silhouette rõ ràng, ngay cả khi chưa thêm vật liệu hoặc chi tiết nhỏ.

---

### 4.2. Sử dụng ảnh tham chiếu

Ảnh tham chiếu được đặt trong viewport để hỗ trợ việc dựng hình theo đúng tỷ lệ.

Hai góc nhìn thường được sử dụng là:

| Góc nhìn       | Công dụng                                                  |
| -------------- | ---------------------------------------------------------- |
| **Front View** | Kiểm soát chiều rộng, sự đối xứng và vị trí hai bên cơ thể |
| **Side View**  | Kiểm soát chiều dài, độ cong của thân, đầu và đuôi         |

Quy trình làm việc cơ bản:

```text
Chèn ảnh Front View
        +
Chèn ảnh Side View
        │
        ▼
Căn chỉnh cùng tỷ lệ
        │
        ▼
Đặt mesh ở trung tâm
        │
        ▼
Chỉnh mesh theo từng góc nhìn
```

Ảnh tham chiếu chỉ đóng vai trò hướng dẫn. Trong quá trình modelling, hình dạng mesh có thể được điều chỉnh để mô hình đẹp và dễ đọc hơn trong không gian 3D.

---

### 4.3. Xây dựng môi trường

Sau khi hoàn thành khủng long, module tiếp tục mở rộng sang phần dựng cảnh.

Các thành phần có thể bao gồm:

* Địa hình.
* Núi hoặc các khối đá.
* Cây cối.
* Mặt đất.
* Vật liệu môi trường.
* Ánh sáng.
* Các chi tiết trang trí cuối cùng.

Phần này đồng thời giúp người học ôn lại những kỹ năng đã sử dụng trong các module trước.

---

### 4.4. Làm quen với Shader Nodes

Module sẽ bước đầu giới thiệu cách tạo vật liệu bằng hệ thống node trong **Shader Editor**.

Một ứng dụng quan trọng là sử dụng node **Color Ramp** để tạo vật liệu chuyển màu cho núi hoặc địa hình.

```text
Thông tin bề mặt
       │
       ▼
Điều khiển vùng màu
       │
       ▼
Color Ramp
       │
       ▼
Principled BSDF
       │
       ▼
Material Output
```

Shader Nodes cho phép tạo vật liệu linh hoạt hơn so với việc chỉ chọn một màu đơn sắc.

---

## 5. Độ khó của module

Phần đầu của module sẽ khó hơn các bài trước do mô hình có hình dạng hữu cơ và nhiều bộ phận liên kết với nhau.

Người học có thể gặp một số vấn đề như:

* Mô hình không giống hoàn toàn với ảnh tham chiếu.
* Tỷ lệ đầu, thân hoặc chân chưa cân đối.
* Mesh đúng ở góc nhìn bên nhưng sai ở góc nhìn trước.
* Các khớp nối bị gãy hoặc tạo thành góc quá sắc.
* Silhouette của nhân vật chưa rõ ràng.
* Số lượng đỉnh và mặt tăng nhanh, khiến mesh khó kiểm soát.

Đây là những khó khăn bình thường khi bắt đầu modelling nhân vật.

> Hãy tập trung vào hình khối tổng thể và các nguyên tắc cơ bản trước khi chỉnh sửa những chi tiết nhỏ.

---

## 6. Khi mô hình không giống mẫu

Không cần quá lo lắng nếu hình dạng khủng long của bạn khác với sản phẩm trong bài giảng.

Một mô hình vẫn có thể được xem là đạt yêu cầu khi:

* Các bộ phận chính được đặt đúng vị trí.
* Tỷ lệ tổng thể hợp lý.
* Silhouette dễ nhận biết.
* Mesh không có lỗi nghiêm trọng.
* Các kỹ thuật modelling được áp dụng đúng.
* Mô hình thể hiện rõ phong cách low-poly.

Trong modelling 3D, sự khác biệt nhỏ giữa các sản phẩm là điều tự nhiên. Những khác biệt này còn có thể tạo nên phong cách riêng của người thực hiện.

---

## 7. Chuẩn bị trước khi bắt đầu

Trước khi tiếp tục, nên ôn lại các thao tác sau.

### Phím tắt Transform

| Phím         | Chức năng               |
| ------------ | ----------------------- |
| `G`          | Di chuyển               |
| `R`          | Xoay                    |
| `S`          | Thay đổi kích thước     |
| `G`, `X/Y/Z` | Di chuyển theo một trục |
| `R`, `X/Y/Z` | Xoay theo một trục      |
| `S`, `X/Y/Z` | Scale theo một trục     |

### Công cụ Edit Mode

| Phím        | Chức năng                               |
| ----------- | --------------------------------------- |
| `E`         | Extrude                                 |
| `Ctrl + R`  | Thêm Loop Cut                           |
| `Ctrl + B`  | Bevel                                   |
| `G`         | Di chuyển đỉnh, cạnh hoặc mặt           |
| `S`         | Thay đổi tỷ lệ vùng đang chọn           |
| `X`         | Xóa đỉnh, cạnh hoặc mặt                 |
| `1 / 2 / 3` | Chuyển giữa Vertex, Edge và Face Select |

### Kiến thức nên ôn lại

* Điều hướng trong viewport.
* Chuyển đổi giữa Object Mode và Edit Mode.
* Sử dụng Mirror Modifier.
* Kiểm soát Object Origin.
* Dùng Snapping khi cần thiết.
* Quản lý đối tượng bằng Collection.
* Quan sát mô hình từ nhiều góc nhìn.

---

## 8. Phương pháp học đề xuất

Khi thực hiện dự án khủng long, nên làm việc theo thứ tự từ lớn đến nhỏ:

```text
Hình khối tổng thể
        │
        ▼
Tỷ lệ các bộ phận
        │
        ▼
Silhouette
        │
        ▼
Khớp nối và cấu trúc mesh
        │
        ▼
Chi tiết nhỏ
        │
        ▼
Vật liệu và ánh sáng
```

Không nên dành quá nhiều thời gian cho mắt, móng vuốt hoặc các chi tiết nhỏ khi hình dáng tổng thể của thân và chân vẫn chưa đúng.

---

## 9. Gợi ý khi gặp khó khăn

Nếu cảm thấy dự án quá khó, người học có thể:

* Tạm dừng và luyện tập với các vật thể low-poly đơn giản hơn.
* Dựng kiếm, đá, cây, thùng gỗ hoặc các đạo cụ nhỏ.
* Xem lại những bài học về Extrude, Loop Cut và Mirror Modifier.
* So sánh mô hình ở cả Front View và Side View.
* Kiểm tra silhouette trong chế độ Solid View.
* Chia quá trình dựng hình thành từng bộ phận nhỏ.
* Sử dụng cộng đồng học tập khi gặp lỗi không thể tự xử lý.

Các trợ giảng và thành viên có kinh nghiệm thường có thể hỗ trợ những lỗi phổ biến liên quan đến mesh, modifier và ảnh tham chiếu.

---

## 10. Lưu ý quan trọng

> **Không cần cố gắng làm mô hình giống mẫu 100%.**

Điều quan trọng nhất trong module này là:

1. Hiểu cách sử dụng ảnh tham chiếu.
2. Biết kiểm soát hình khối hữu cơ.
3. Xây dựng mesh có cấu trúc hợp lý.
4. Quan sát mô hình từ nhiều góc nhìn.
5. Hoàn thành được một scene khủng long low-poly của riêng mình.

---

## 11. Kết quả mong đợi

Cuối module, người học sẽ có một scene hoàn chỉnh gồm:

* Một con khủng long phong cách low-poly.
* Cơ thể với đầu, thân, đuôi, chân và tay.
* Các chi tiết như mắt, miệng và móng vuốt.
* Địa hình và cảnh quan xung quanh.
* Cây cối hoặc các vật thể trang trí.
* Vật liệu có màu sắc rõ ràng.
* Hiệu ứng gradient trên núi hoặc địa hình.
* Hệ thống ánh sáng làm nổi bật nhân vật.

```text
┌──────────────────────────────────────────┐
│            SCENE HOÀN CHỈNH              │
├──────────────────────────────────────────┤
│                                          │
│             Khủng long                   │
│                  │                       │
│       ┌──────────┴──────────┐            │
│       ▼                     ▼            │
│   Địa hình              Cây cối          │
│       │                     │            │
│       └──────────┬──────────┘            │
│                  ▼                       │
│        Vật liệu và ánh sáng              │
│                                          │
└──────────────────────────────────────────┘
```

---

## 12. Câu hỏi ôn tập

1. Vì sao ảnh tham chiếu hữu ích khi dựng mô hình sinh vật?
2. Front View và Side View hỗ trợ kiểm soát những yếu tố nào?
3. Vì sao mô hình hữu cơ thường khó dựng hơn mô hình kiến trúc?
4. Khi mô hình chưa giống mẫu, yếu tố nào nên được ưu tiên trước?
5. Silhouette có vai trò gì trong thiết kế nhân vật low-poly?
6. Vì sao nên dựng hình khối lớn trước khi thêm chi tiết nhỏ?
7. Color Ramp có thể được sử dụng như thế nào trong vật liệu?
8. Người học nên làm gì khi cảm thấy dự án vượt quá khả năng hiện tại?

---

## 13. Bài tập khởi động

Trước khi bắt đầu bài modelling chính, hãy thử:

1. Thêm một Cube vào scene.
2. Scale Cube thành hình khối đại diện cho thân khủng long.
3. Extrude một đầu để tạo cổ và đầu.
4. Extrude đầu còn lại để tạo đuôi.
5. Quan sát mô hình từ Front View và Side View.
6. Điều chỉnh silhouette để hình khối bắt đầu giống một sinh vật.

Không cần thêm chân, tay hoặc chi tiết khuôn mặt. Mục tiêu của bài tập là luyện cách tạo hình tổng thể từ một mesh đơn giản.

---

## 14. Tóm tắt

Bài học mở đầu giới thiệu dự án chính của Module 03: dựng một con khủng long low-poly bằng ảnh tham chiếu và xây dựng cảnh quan hoàn chỉnh xung quanh nhân vật.

Module sẽ nâng cao độ khó của các kỹ thuật modelling, đặc biệt là khi làm việc với hình dạng hữu cơ. Đồng thời, người học sẽ tiếp tục luyện tập các kỹ năng dựng cảnh, tạo vật liệu, bố trí ánh sáng và bắt đầu làm quen với Shader Nodes.

Hãy kiên nhẫn với quá trình modelling. Mô hình không cần giống hoàn toàn với mẫu, miễn là bạn hiểu và áp dụng đúng những nguyên tắc nền tảng.

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
