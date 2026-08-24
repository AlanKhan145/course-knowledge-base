# 098 — Tô màu mô hình Sculpt trong Blender

| Thuộc tính         | Nội dung                                                      |
| ------------------ | ------------------------------------------------------------- |
| **Module**         | Module 06 — Sculpting a Cartoon Head                          |
| **Bài học**        | Painting the Sculpt                                           |
| **Thời lượng**     | 14:39                                                         |
| **Chủ đề chính**   | Tô màu trực tiếp lên mô hình trong Sculpt Mode                |
| **Kỹ thuật chính** | Sculpt Paint, Color Attribute, bảng màu và phối màu khuôn mặt |

---

## 1. Mục tiêu bài học

Sau bài học này, anh có thể:

* Hiểu cách tô màu trực tiếp lên mô hình trong **Sculpt Mode**.
* Phân biệt **Sculpt Paint** với **Texture Paint**.
* Tạo vật liệu sử dụng dữ liệu từ **Color Attribute**.
* Xây dựng bảng màu để dễ dàng tái sử dụng màu.
* Phối màu da theo ba vùng chính:

  * Vàng ở phần trên khuôn mặt.
  * Đỏ ở vùng giữa.
  * Xanh tím ở phần dưới.
* Tô màu cho môi, má, mũi, tai, bọng mắt và các vùng bóng tối.
* Dùng **Smear Brush** để hòa trộn ranh giới màu.
* Điều chỉnh độ bóng của da bằng thông số **Roughness**.

---

## 2. Phương pháp tô màu được sử dụng

Trong bài học này, mô hình có khoảng **750.000 mặt**, vì vậy việc unwrap UV và sử dụng Texture Paint trực tiếp sẽ rất nặng.

Thay vào đó, Blender cho phép tô màu ngay trong Sculpt Mode bằng công cụ **Paint**.

Màu được lưu trong một lớp dữ liệu gọi là:

> **Color Attribute**

Color Attribute lưu thông tin màu trên các điểm hoặc góc của mesh, tương tự phương pháp **Vertex Paint**.

### Sơ đồ hoạt động

```text
Brush Paint trong Sculpt Mode
              │
              ▼
      Color Attribute của mesh
              │
              ▼
       Color Attribute Node
              │
              ▼
 Base Color của Principled BSDF
              │
              ▼
     Màu hiển thị trên mô hình
```

---

## 3. Sculpt Paint và Texture Paint

### 3.1. Sculpt Paint

Sculpt Paint là phương pháp được sử dụng trong bài học.

* Không cần UV Map.
* Không cần tạo Image Texture.
* Phù hợp với mesh sculpt có mật độ polygon cao.
* Tô màu nhanh và ít giật hơn.
* Màu được lưu trong Color Attribute.
* Chất lượng màu phụ thuộc vào mật độ mesh.

### 3.2. Texture Paint

Texture Paint là phương pháp tô màu lên một hình ảnh thông qua UV.

* Cần UV Map.
* Cần Image Texture.
* Phù hợp với mô hình đã retopology.
* Cho phép tạo texture có độ phân giải xác định.
* Thường được sử dụng cho game, animation và xuất sang phần mềm khác.

### Bảng so sánh

| Đặc điểm                       | Sculpt Paint              | Texture Paint              |
| ------------------------------ | ------------------------- | -------------------------- |
| Cần UV Map                     | Không                     | Có                         |
| Cần Image Texture              | Không                     | Có                         |
| Nơi lưu màu                    | Color Attribute           | File hình ảnh              |
| Phù hợp mesh rất nhiều polygon | Tốt                       | Không tối ưu               |
| Phù hợp mô hình game           | Chỉ dùng tạm hoặc để bake | Phù hợp hơn                |
| Độ chi tiết màu                | Phụ thuộc mật độ mesh     | Phụ thuộc độ phân giải ảnh |
| Hiệu năng khi sculpt           | Nhanh                     | Có thể giật hoặc treo      |

> **Lưu ý:** Mesh khoảng 750.000 mặt không thích hợp để đưa trực tiếp vào game, rig hoặc animation. Trong quy trình chuyên nghiệp, cần retopology và bake dữ liệu từ high-poly sang low-poly.

---

## 4. Bật công cụ Paint trong Sculpt Mode

Trong Sculpting Workspace:

1. Chọn mô hình đầu.
2. Đảm bảo đang ở **Sculpt Mode**.
3. Chọn công cụ **Paint** trong danh sách brush.
4. Chọn màu tại thanh công cụ phía trên hoặc trong bảng Brush Settings.
5. Điều chỉnh:

   * Kích thước brush.
   * Strength.
   * Symmetry.
   * Màu sắc.

Khi bắt đầu tô, Blender sẽ tự động tạo một **Color Attribute** cho mô hình.

---

## 5. Tô màu nền cho da

Màu nền được chọn là một màu:

* Đỏ hồng.
* Hơi tối.
* Có sắc da.
* Phù hợp với nhân vật mang phong cách quỷ hoặc phản diện.

### Quy trình

1. Chọn màu đỏ hồng tối.
2. Bật đối xứng theo trục X để tô nhanh hai bên khuôn mặt.
3. Tăng Strength lên gần `1.0` khi cần phủ màu hoàn toàn.
4. Tô toàn bộ:

   * Mặt.
   * Đầu.
   * Tai.
   * Sau tai.
   * Cổ.
   * Phần đáy đầu.

### Lưu ý về Strength

Nếu Strength nhỏ hơn `1.0`, mỗi lần tô chồng lên sẽ khiến màu đậm hơn.

```text
Một lần tô       → màu nhạt
Nhiều lần tô     → màu đậm dần
Strength = 1.0   → màu gần với màu đã chọn
```

---

## 6. Thiết lập vật liệu hiển thị Color Attribute

Sau khi tô trong Sculpt Mode, màu có thể chưa xuất hiện trong **Material Preview** vì vật liệu chưa đọc dữ liệu Color Attribute.

### Các bước thiết lập

1. Chuyển sang **Shading Workspace**.
2. Chọn mô hình đầu.
3. Tạo một Material mới.
4. Đặt tên, ví dụ:

```text
Head
```

5. Trong Shader Editor, thêm node:

```text
Shift + A
→ Input
→ Color Attribute
```

6. Chọn đúng tên Color Attribute đã được tạo.
7. Nối đầu ra màu của node vào:

```text
Principled BSDF → Base Color
```

### Sơ đồ node

```text
┌────────────────────────┐
│ Color Attribute        │
│ Attribute: Color       │
│                        │
│ Color ─────────────────┼─────────┐
└────────────────────────┘         │
                                   ▼
                         ┌────────────────────┐
                         │ Principled BSDF    │
                         │                    │
                         │ Base Color ◄───────┘
                         └─────────┬──────────┘
                                   │
                                   ▼
                         ┌────────────────────┐
                         │ Material Output    │
                         └────────────────────┘
```

> Nếu xóa Color Attribute trong **Object Data Properties**, toàn bộ màu đã tô bằng lớp đó cũng sẽ bị xóa.

---

## 7. Tạo và sử dụng bảng màu

Trước khi tô chi tiết, nên tạo một **Color Palette**.

### Cách thực hiện

1. Mở phần **Color Palette** trong cài đặt brush.
2. Chọn **New**.
3. Nhấn dấu `+` để lưu màu hiện tại.
4. Mỗi khi tạo một màu quan trọng, tiếp tục nhấn `+`.

### Các màu nên lưu

* Màu da nền.
* Màu đỏ cho má, tai và mũi.
* Màu tím cho môi.
* Màu tím tối cho bọng mắt.
* Màu xanh cho cằm.
* Màu vàng cho trán.
* Màu tối cho hốc mũi và nếp sâu.

### Lợi ích

Khi tô sai, anh không có công cụ tẩy màu theo kiểu xóa dữ liệu đơn giản. Thay vào đó, anh có thể chọn lại màu da nền và tô đè lên vùng sai.

```text
Tô sai màu
    │
    ▼
Chọn lại màu da trong Palette
    │
    ▼
Giảm Strength
    │
    ▼
Tô đè để làm mờ hoặc xóa màu sai
```

---

## 8. Phối màu khuôn mặt theo ba vùng

Một khuôn mặt thường không chỉ có một màu da đồng nhất. Việc thêm biến thiên màu sẽ làm mô hình sinh động và tự nhiên hơn.

### Phân bố màu cơ bản

```text
        ┌─────────────────────┐
        │ VÙNG TRÊN           │
        │ Vàng nhẹ            │
        │ Trán, đỉnh đầu      │
        ├─────────────────────┤
        │ VÙNG GIỮA           │
        │ Đỏ hoặc hồng        │
        │ Má, mũi, tai        │
        ├─────────────────────┤
        │ VÙNG DƯỚI           │
        │ Xanh hoặc tím lạnh  │
        │ Cằm, quanh miệng    │
        └─────────────────────┘
```

Cách phối màu này thường được gọi gần với nguyên tắc:

> **Red – Yellow – Blue facial zones**

Đây không phải quy tắc bắt buộc, nhưng là nền tảng hữu ích khi tô da người hoặc nhân vật stylized.

---

## 9. Tô vùng đỏ ở giữa khuôn mặt

Vùng giữa khuôn mặt thường có sắc đỏ mạnh hơn do tuần hoàn máu và cấu trúc da.

### Các vùng cần tô

* Hai bên má.
* Phần giữa và đầu mũi.
* Mép vành tai.
* Bên trong tai.
* Một phần ngực và cổ.

### Thiết lập gợi ý

| Thuộc tính           |          Giá trị tham khảo |
| -------------------- | -------------------------: |
| Strength ban đầu     |               Khoảng `0.5` |
| Strength để hòa trộn |                  `0.1–0.3` |
| Kích thước brush     |               Vừa hoặc lớn |
| Symmetry             | Có thể bật khi tô vùng lớn |

Không nên tô đỏ quá đều. Hãy tập trung sắc đỏ ở trung tâm rồi giảm dần ra xung quanh.

---

## 10. Tô màu môi

Màu môi được chọn theo hướng:

* Đỏ tím.
* Tối hơn da.
* Có độ bão hòa vừa phải.

### Quy trình

1. Chọn màu đỏ tím.
2. Giảm kích thước brush.
3. Có thể tắt Symmetry vì khuôn mặt đã được chỉnh lệch nhẹ.
4. Tô từng bên môi cẩn thận.
5. Tăng Strength để làm rõ vùng giữa môi.
6. Giảm Strength khi cần làm mềm viền.
7. Sử dụng màu da để sửa những vùng tô tràn.

### Tránh lỗi “trang điểm sân khấu”

Nếu màu môi quá đậm và viền quá sắc, nhân vật có thể trông giống đang trang điểm quá mức.

Cách khắc phục:

* Giảm Strength.
* Tô đè bằng màu da.
* Dùng Smear Brush.
* Chỉ giữ màu tối ở khe môi và các nếp sâu.

---

## 11. Sử dụng Smear Brush để hòa màu

**Smear Brush** kéo và trộn các màu lân cận trên bề mặt.

Công cụ này hữu ích cho:

* Làm mờ viền môi.
* Hòa màu giữa má và da.
* Làm mềm vùng xanh dưới cằm.
* Chuyển tiếp giữa vùng đỏ, vàng và xanh.
* Xử lý những mảng màu bị gắt.

### Cách sử dụng

1. Chọn Smear Brush.
2. Giảm Strength.
3. Kéo nhẹ theo hướng chuyển màu.
4. Không kéo quá nhiều vì màu có thể bị bẩn hoặc nhòe.

```text
Ranh giới màu sắc nét
          │
          ▼
Smear với Strength thấp
          │
          ▼
Chuyển màu mềm và tự nhiên hơn
```

---

## 12. Tạo bọng mắt và vùng bóng tím

Sử dụng màu tím của môi hoặc một màu tím tối hơn để tạo:

* Bọng mắt.
* Vùng dưới mí mắt.
* Hốc tai.
* Dưới mũi.
* Các vùng lõm nhẹ trên khuôn mặt.

### Kỹ thuật

* Dùng brush có kích thước vừa.
* Strength khoảng `0.2–0.6`.
* Tô nhiều lớp nhẹ thay vì một lớp quá mạnh.
* Có thể bật X Symmetry nếu hai bên còn tương đối giống nhau.

Bọng mắt giúp nhân vật:

* Trông mệt mỏi.
* Có vẻ già hơn.
* Đáng sợ hoặc phản diện hơn.
* Có chiều sâu hơn quanh mắt.

---

## 13. Thêm sắc xanh ở vùng cằm

Vùng dưới của khuôn mặt, đặc biệt ở nhân vật nam, thường có sắc lạnh hơn.

Màu này có thể gợi cảm giác:

* Râu mọc dưới da.
* Bóng lạnh.
* Vùng da dày.
* Sự thay đổi sắc độ tự nhiên.

### Các bước

1. Từ màu da đỏ hồng, di chuyển vòng màu về phía xanh.
2. Giữ mức saturation tương đối gần màu da.
3. Giảm brightness một chút.
4. Dùng brush lớn.
5. Đặt Strength khoảng `0.25`.
6. Tô nhẹ:

   * Cằm.
   * Hàm.
   * Quanh miệng.
   * Phần dưới má.

Không nên kéo màu xanh quá xa xuống cổ, trừ khi đó là chủ ý thiết kế.

---

## 14. Thêm sắc vàng ở vùng trán

Phần trên khuôn mặt có thể được thêm một lớp vàng nhẹ.

### Vùng áp dụng

* Trán.
* Thái dương.
* Đỉnh đầu.
* Khu vực phía trên chân mày.

### Kỹ thuật

* Chọn màu vàng có độ sáng gần màu da nền.
* Dùng Strength thấp.
* Tô theo lớp mỏng.
* Sau đó dùng màu da với Strength dưới `0.1` để làm mềm hiệu ứng.

Mục tiêu là tạo cảm giác ấm nhẹ, không biến toàn bộ trán thành màu vàng rõ rệt.

---

## 15. Tô bóng trong các nếp sâu

Các vùng lõm có thể được tô tối hơn để tăng chiều sâu:

* Khe giữa hai môi.
* Lỗ mũi.
* Dưới mũi.
* Hốc tai.
* Nếp mí.
* Nếp gấp quanh miệng.

### Nguyên tắc

Ánh sáng trong cảnh sau này cũng sẽ tạo bóng, vì vậy không cần vẽ bóng quá mạnh.

Màu tối được tô trực tiếp chỉ nên dùng để:

* Tăng độ rõ của hình khối.
* Làm nhân vật stylized hơn.
* Nhấn mạnh các vùng quan trọng.
* Tăng độ tương phản thị giác.

---

## 16. Điều chỉnh Roughness của da

Nếu da trông quá bóng, hãy chuyển sang Shading Workspace và tăng thông số:

```text
Principled BSDF → Roughness
```

### Ảnh hưởng của Roughness

|  Roughness | Kết quả                           |
| ---------: | --------------------------------- |
|       Thấp | Da bóng, phản xạ mạnh             |
| Trung bình | Da mềm, phù hợp nhân vật stylized |
|        Cao | Da lì, ít phản xạ                 |

Đối với đầu nhân vật stylized, mức Roughness trung bình hoặc hơi cao thường dễ nhìn hơn.

---

## 17. Symmetry và vấn đề bất đối xứng

X Symmetry giúp tô nhanh hai bên đầu, nhưng nó chỉ chính xác khi hình học hai bên còn đối xứng.

Trong quá trình sculpt, nếu anh đã:

* Kéo lệch miệng.
* Chỉnh một bên mắt.
* Thay đổi một bên má.
* Làm tai không giống nhau.

thì kết quả tô đối xứng có thể lệch.

### Cách xử lý

* Bật Symmetry khi tô các vùng lớn.
* Tắt Symmetry khi tô:

  * Môi.
  * Mí mắt.
  * Lỗ mũi.
  * Nếp gấp.
  * Chi tiết bất đối xứng.

---

## 18. Phím tắt và thao tác quan trọng

| Phím hoặc thao tác                    | Chức năng                                              |
| ------------------------------------- | ------------------------------------------------------ |
| `Shift + F`                           | Thay đổi Strength của brush                            |
| `F`                                   | Thay đổi kích thước brush trong nhiều cấu hình Blender |
| `Shift + A`                           | Mở menu thêm node trong Shader Editor                  |
| `Shift + A → Input → Color Attribute` | Thêm node đọc màu từ Color Attribute                   |
| Dấu `+` trong Color Palette           | Lưu màu hiện tại vào bảng màu                          |
| X Symmetry                            | Tô đồng thời hai bên mô hình                           |
| Paint Brush                           | Tô màu lên mô hình                                     |
| Smear Brush                           | Kéo và hòa trộn màu                                    |
| Material Preview                      | Xem màu thông qua vật liệu                             |
| Solid Mode                            | Có thể hiển thị màu khác với vật liệu thực tế          |

> Các phím tắt có thể thay đổi tùy phiên bản Blender và keymap đang sử dụng.

---

## 19. Lỗi thường gặp

### 19.1. Không thấy màu trong Material Preview

**Nguyên nhân:** Material chưa sử dụng Color Attribute.

**Cách sửa:**

```text
Color Attribute Node
→ nối Color
→ Base Color của Principled BSDF
```

---

### 19.2. Màu hiển thị khác giữa Solid Mode và Material Preview

Solid Mode có thể sử dụng cách hiển thị màu riêng của viewport.

Để đánh giá màu vật liệu chính xác hơn, nên kiểm tra bằng:

* Material Preview.
* Rendered View.

---

### 19.3. Màu bị quá đậm

**Nguyên nhân:**

* Strength quá cao.
* Tô chồng nhiều lần.
* Màu quá bão hòa.

**Cách sửa:**

* Chọn màu da nền.
* Giảm Strength xuống dưới `0.1`.
* Tô nhẹ để trung hòa.
* Dùng Smear Brush.

---

### 19.4. Màu đối xứng bị lệch

**Nguyên nhân:** Hai bên mesh không còn đối xứng hoàn toàn.

**Cách sửa:** Tắt X Symmetry và chỉnh từng bên bằng tay.

---

### 19.5. Quên lưu màu vào Palette

Khi cần dùng lại, rất khó chọn chính xác màu cũ bằng mắt.

**Cách tránh:** Mỗi khi tạo được màu quan trọng, nhấn dấu `+` ngay lập tức.

---

### 19.6. Xóa nhầm Color Attribute

Nếu xóa Color Attribute đang chứa dữ liệu màu, phần màu đã tô có thể mất hoàn toàn.

Nên:

* Đặt tên rõ ràng cho Color Attribute.
* Không xóa thuộc tính màu khi chưa kiểm tra.
* Lưu file Blender theo nhiều phiên bản.

---

### 19.7. Dùng mô hình high-poly trực tiếp trong game

Mesh 750.000 mặt sẽ:

* Tốn bộ nhớ.
* Khó rig.
* Khó animation.
* Render chậm.
* Không tối ưu thời gian thực.

Quy trình phù hợp hơn:

```text
High-poly Sculpt
       │
       ▼
   Retopology
       │
       ▼
Low-poly Mesh + UV
       │
       ▼
Bake Normal / Color / AO
       │
       ▼
 Texture Paint bổ sung
       │
       ▼
 Game hoặc Animation
```

---

## 20. Quy trình thực hành hoàn chỉnh

```text
01. Chọn mô hình đầu
        │
        ▼
02. Vào Sculpt Mode
        │
        ▼
03. Chọn Paint Brush
        │
        ▼
04. Tô màu da nền
        │
        ▼
05. Tạo Material cho đầu
        │
        ▼
06. Thêm Color Attribute Node
        │
        ▼
07. Nối vào Base Color
        │
        ▼
08. Tạo Color Palette
        │
        ▼
09. Tô đỏ cho má, mũi và tai
        │
        ▼
10. Tô tím cho môi và bọng mắt
        │
        ▼
11. Tô xanh cho cằm
        │
        ▼
12. Tô vàng nhẹ cho trán
        │
        ▼
13. Thêm màu tối vào các nếp sâu
        │
        ▼
14. Dùng Smear để hòa màu
        │
        ▼
15. Điều chỉnh Roughness
        │
        ▼
16. Kiểm tra ở Material Preview
        │
        ▼
17. Lưu file
```

---

## 21. Checklist thực hành

### Thiết lập màu

* [ ] Đã chọn Paint Brush trong Sculpt Mode.
* [ ] Đã tô phủ màu da nền lên toàn bộ đầu.
* [ ] Đã kiểm tra sau tai và phía dưới cổ.
* [ ] Đã tạo Color Attribute tự động khi bắt đầu tô.
* [ ] Đã tạo Material riêng cho đầu.
* [ ] Đã nối Color Attribute vào Base Color.

### Bảng màu

* [ ] Đã tạo Color Palette.
* [ ] Đã lưu màu da nền.
* [ ] Đã lưu màu đỏ.
* [ ] Đã lưu màu môi.
* [ ] Đã lưu màu xanh.
* [ ] Đã lưu màu vàng.
* [ ] Đã lưu màu bóng tối.

### Phối màu khuôn mặt

* [ ] Đã thêm đỏ vào má, mũi và tai.
* [ ] Đã tô môi màu đỏ tím.
* [ ] Đã thêm bọng mắt.
* [ ] Đã thêm sắc xanh ở cằm.
* [ ] Đã thêm sắc vàng nhẹ trên trán.
* [ ] Đã tô tối các nếp sâu.
* [ ] Đã hòa trộn những ranh giới quá sắc.

### Hoàn thiện

* [ ] Đã kiểm tra X Symmetry.
* [ ] Đã sửa thủ công những vùng bị lệch.
* [ ] Đã điều chỉnh Roughness nếu da quá bóng.
* [ ] Đã kiểm tra trong Material Preview.
* [ ] Đã lưu file Blender.

---

## 22. Bài tập mở rộng

Sau khi hoàn thành bài học, anh có thể thử tạo thêm các phiên bản màu khác:

### Phiên bản quỷ lửa

* Da đỏ sẫm.
* Trán cam vàng.
* Hốc mắt tím đen.
* Sừng nâu hoặc đen.
* Tai đỏ rực.

### Phiên bản quỷ băng

* Da xanh xám.
* Mũi và tai tím lạnh.
* Môi xanh đậm.
* Trán xanh nhạt.
* Hốc mắt xanh tím.

### Phiên bản nhân vật già

* Da ít bão hòa.
* Nhiều tím dưới mắt.
* Sắc đỏ tập trung ở mũi.
* Tăng bóng trong nếp nhăn.
* Thêm màu xám quanh cằm.

### Phiên bản hoạt hình vui nhộn

* Màu da sáng.
* Má đỏ rõ.
* Môi bão hòa cao.
* Chuyển màu mềm.
* Ít vùng bóng tối.

---

## 23. Tóm tắt bài học

Bài học hướng dẫn tô màu trực tiếp lên mô hình high-poly bằng công cụ **Paint trong Sculpt Mode**. Phương pháp này sử dụng **Color Attribute**, nhờ đó không cần unwrap UV hoặc tạo Image Texture.

Quy trình chính gồm:

1. Tô màu da nền.
2. Tạo Material.
3. Đọc dữ liệu màu bằng Color Attribute Node.
4. Tạo bảng màu.
5. Phối đỏ ở vùng giữa khuôn mặt.
6. Phối xanh ở vùng cằm.
7. Phối vàng nhẹ ở vùng trán.
8. Tô môi và bọng mắt bằng màu tím.
9. Nhấn mạnh các nếp sâu bằng màu tối.
10. Hòa màu bằng Smear Brush.
11. Điều chỉnh Roughness để giảm độ bóng.

Điểm quan trọng nhất là không cần làm cho mô hình giống hoàn toàn mẫu của giảng viên. Hãy thử nghiệm màu sắc, điều chỉnh Strength và xây dựng cá tính riêng cho nhân vật.

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
