# 099 — Hoàn thiện các chi tiết cuối cùng

## Finishing Touches

| Thuộc tính       | Nội dung                                                                       |
| ---------------- | ------------------------------------------------------------------------------ |
| **Module**       | Module 06 — Sculpting a Cartoon Head                                           |
| **Bài học**      | 099 — Finishing Touches                                                        |
| **Thời lượng**   | 7 phút 16 giây                                                                 |
| **Chủ đề chính** | Hoàn thiện mắt, sừng, các nốt trên da và tăng chiều sâu bằng Ambient Occlusion |

---

## 1. Mục tiêu bài học

Sau bài học này, bạn sẽ biết cách:

* Tạo màu cho **lòng trắng, mống mắt và đồng tử** bằng nhiều Material Slot.
* Điều chỉnh **Roughness** để mắt có độ bóng tự nhiên.
* Tạo vật liệu màu nâu đỏ cho sừng.
* Áp dụng **Shade Smooth** để loại bỏ cảm giác đa giác, gồ ghề.
* Sơn các nốt ruồi, mụn cóc hoặc phần da bị viêm.
* Làm tối vùng hốc mắt để khuôn mặt có chiều sâu và vẻ dữ tợn hơn.
* Tạo vùng chuyển tiếp giữa chân sừng và da đầu.
* Sử dụng **Ambient Occlusion** để tăng độ rõ của các khe và vùng lõm.
* Kiểm tra và lưu mô hình trước khi chuyển sang bài tiếp theo.

---

## 2. Quy trình tổng thể

```text
Hoàn thiện mắt
      ↓
Tạo vật liệu cho sừng
      ↓
Áp dụng Shade Smooth
      ↓
Sơn nốt ruồi và mụn cóc
      ↓
Làm tối vùng hốc mắt
      ↓
Tạo vùng đỏ quanh chân sừng
      ↓
Bật Ambient Occlusion
      ↓
Kiểm tra và lưu file
```

---

# 3. Hoàn thiện vật liệu cho mắt

## 3.1. Chuẩn bị

Chuyển sang workspace:

```text
Shading Workspace
```

Sau đó:

1. Chọn một nhãn cầu.
2. Nhấn phím `.` trên bàn phím số để tập trung vào object.
3. Chuyển sang **Edit Mode**.
4. Quan sát các vòng mặt ở phía trước nhãn cầu.

Do UV Sphere đã được xoay quanh trục X từ trước, các vòng mặt phía trước có thể được sử dụng thuận tiện để phân chia:

* Đồng tử.
* Mống mắt.
* Lòng trắng.

---

## 3.2. Tạo ba Material Slot

Tạo ba vật liệu riêng cho mắt:

| Material    | Vùng áp dụng | Màu sắc       |
| ----------- | ------------ | ------------- |
| `Eye_White` | Lòng trắng   | Trắng hơi xám |
| `Eye_Red`   | Mống mắt     | Đỏ sẫm        |
| `Eye_Black` | Đồng tử      | Đen           |

> Nên đặt tên rõ ràng thay vì sử dụng các tên mặc định như `Material.001`.

---

## 3.3. Tạo đồng tử

Chọn material `Eye_Black` và thiết lập:

* **Base Color:** màu đen.
* **Roughness:** gần `0`.

Roughness thấp giúp đồng tử có bề mặt bóng, tạo cảm giác mắt ướt.

Tiếp theo:

1. Chuyển sang chế độ chọn mặt.
2. Chọn cụm mặt nhỏ nhất ở chính giữa mắt.
3. Chọn Material Slot `Eye_Black`.
4. Nhấn **Assign**.

---

## 3.4. Tạo mống mắt

Chọn material `Eye_Red` và thiết lập:

* **Base Color:** đỏ sẫm.
* **Roughness:** thấp để mống mắt có độ bóng.

Sau đó:

1. Giữ `Alt` và nhấn chuột trái vào một cạnh thuộc vòng mống mắt.
2. Blender sẽ chọn toàn bộ vòng mặt tương ứng.
3. Chọn Material Slot `Eye_Red`.
4. Nhấn **Assign**.

Mống mắt có thể sử dụng những màu khác tùy phong cách nhân vật:

* Đỏ: dữ tợn, nguy hiểm.
* Xanh lá: ma quái.
* Tím: huyền bí.
* Xanh dương: lạnh lùng.

Trong bài học, màu đỏ sẫm được sử dụng để tăng vẻ đe dọa cho nhân vật.

---

## 3.5. Điều chỉnh lòng trắng

Chọn material `Eye_White`.

Không nên sử dụng màu trắng hoàn toàn vì mắt có thể:

* Quá sáng.
* Trông thiếu tự nhiên.
* Tách biệt quá mạnh khỏi khuôn mặt.

Thay vào đó, hãy dùng màu:

```text
Trắng hơi xám hoặc trắng ngà
```

---

## 3.6. Sơ đồ cấu tạo màu của mắt

```text
┌───────────────────────────┐
│         Lòng trắng        │
│       ┌───────────┐       │
│       │  Mống mắt │       │
│       │   ┌───┐   │       │
│       │   │ ● │   │       │
│       │   └───┘   │       │
│       └───────────┘       │
└───────────────────────────┘

● Trung tâm: Eye_Black
Vòng giữa: Eye_Red
Vùng ngoài: Eye_White
```

---

# 4. Làm mượt bề mặt

Khi quan sát gần, mắt hoặc khuôn mặt có thể vẫn xuất hiện các mặt đa giác.

Để làm mượt:

1. Chuyển về **Object Mode**.
2. Chọn object cần xử lý.
3. Nhấn chuột phải.
4. Chọn **Shade Smooth**.

Thực hiện với:

* Đầu.
* Hai mắt.
* Hai chiếc sừng.

Kết quả:

* Các mặt đa giác không còn hiện rõ.
* Bề mặt cong trông mượt hơn.
* Ánh sáng phản xạ đều hơn.

> Shade Smooth chỉ thay đổi cách Blender nội suy ánh sáng trên bề mặt, không làm tăng số lượng polygon.

---

# 5. Tạo vật liệu cho sừng

Chọn object sừng và tạo một material mới:

```text
Horns
```

## Thiết lập gợi ý

| Thuộc tính     | Giá trị gợi ý |
| -------------- | ------------- |
| **Base Color** | Nâu đỏ sẫm    |
| **Roughness**  | Trung bình    |
| **Metallic**   | 0             |

Không nên để sừng:

* Quá bóng như nhựa.
* Quá nhám và thiếu điểm phản sáng.

Mức Roughness trung bình tạo cảm giác sừng có bề mặt cứng nhưng vẫn phản chiếu một lượng ánh sáng vừa phải.

---

# 6. Sơn các nốt ruồi và mụn cóc

Sau khi hoàn thiện mắt và sừng:

1. Chọn object đầu.
2. Chuyển sang **Sculpt Mode**.
3. Chọn chế độ **Paint**.
4. Chọn màu nâu sẫm.
5. Tăng hoặc giảm Strength tùy vùng cần sơn.

## Kỹ thuật sơn

* Bắt đầu với brush lớn để phủ màu cơ bản.
* Giảm dần kích thước brush khi tiến về đầu nốt.
* Làm phần trung tâm hoặc đầu nốt tối hơn.
* Có thể sử dụng màu đỏ quanh mép để tạo cảm giác da bị kích ứng.

```text
Màu đỏ nhạt bên ngoài
          ↓
Màu nâu ở phần thân
          ↓
Màu nâu đen ở trung tâm
```

Cách phối màu này giúp nốt trên da trông có chiều sâu hơn thay vì chỉ là một mảng màu phẳng.

---

## Lưu ý khi zoom trong lúc sơn

Trong bài học, thao tác zoom khi đang giữ chuột sơn đôi khi tạo ra một đường màu ngoài ý muốn.

Để hạn chế:

1. Thả chuột trước khi zoom.
2. Điều chỉnh góc nhìn.
3. Tiếp tục sơn sau khi camera đã ổn định.
4. Sơn đè nhẹ lên đường lỗi nếu cần.

---

# 7. Làm tối vùng hốc mắt

Để đôi mắt có cảm giác nằm sâu hơn trong hộp sọ:

1. Chọn màu tím sẫm hoặc đỏ tím.
2. Đặt Strength khoảng `0.2`.
3. Bật đối xứng vì vùng mắt tương đối cân đối.
4. Sơn nhẹ quanh mí và hốc mắt.

Không nên tô quá đậm ngay từ đầu. Hãy sử dụng nhiều nét nhẹ để kiểm soát màu tốt hơn.

## Hiệu ứng đạt được

* Hốc mắt trông sâu hơn.
* Khuôn mặt dữ tợn hơn.
* Mắt nổi bật hơn.
* Tạo cảm giác da mỏng hoặc thâm quanh mắt.

Nếu vùng chuyển màu quá gắt, sử dụng **Smear Brush** để kéo và hòa màu nhẹ nhàng.

---

# 8. Tạo vùng chuyển tiếp quanh chân sừng

Ban đầu, sừng có thể trông giống như một vật thể riêng được đặt lên đầu thay vì mọc ra từ hộp sọ.

Để cải thiện:

1. Quay lại Paint Brush.
2. Chọn màu đỏ hoặc đỏ nâu.
3. Bật Symmetry.
4. Sơn quanh chân sừng.
5. Giảm Strength.
6. Tăng kích thước brush để tạo vùng đỏ lan nhẹ ra xung quanh.

```text
Sừng màu nâu đỏ
        ↓
Chân sừng đỏ đậm
        ↓
Vùng da đỏ nhạt
        ↓
Màu da bình thường
```

Hiệu ứng chuyển màu này giúp:

* Sừng hòa vào phần đầu tốt hơn.
* Tạo cảm giác sừng đang xuyên qua hoặc mọc từ da.
* Tăng mức độ chân thực cho vùng tiếp giáp.

---

# 9. Sử dụng Ambient Occlusion

## 9.1. Ambient Occlusion là gì?

Ambient Occlusion, thường viết tắt là **AO**, tạo bóng nhẹ tại những vùng ánh sáng khó tiếp cận, chẳng hạn:

* Hốc mắt.
* Khe giữa các nếp nhăn.
* Chân sừng.
* Góc miệng.
* Khe dưới cằm.
* Vùng tiếp giáp giữa các bộ phận.

AO giúp các chi tiết điêu khắc nổi rõ hơn mà không cần thay đổi mesh.

---

## 9.2. Bật Ambient Occlusion

Trong phần **Render Properties**:

1. Tìm tùy chọn **Ambient Occlusion**.
2. Bật tùy chọn này.
3. So sánh mô hình trước và sau khi bật.
4. Mở phần thiết lập chi tiết.
5. Điều chỉnh thông số khoảng cách.

Trong bài học, giá trị khoảng:

```text
Distance ≈ 0.4 m
```

cho kết quả phù hợp với kích thước của mô hình.

---

## 9.3. Ảnh hưởng của Distance

```text
Distance quá thấp
      ↓
AO chỉ xuất hiện ở các khe rất nhỏ
      ↓
Hiệu ứng khó nhận thấy
```

```text
Distance hợp lý
      ↓
Các khe và vùng lõm rõ ràng hơn
      ↓
Mô hình có chiều sâu
```

```text
Distance quá cao
      ↓
Xuất hiện mảng tối không hợp lý
      ↓
Các vùng như dưới cổ bị bẩn hoặc tối quá mức
```

Giá trị AO phụ thuộc vào kích thước thực tế của object. Vì vậy, `0.4` chỉ là mức tham khảo phù hợp với mô hình trong bài học.

---

# 10. Phím tắt và công cụ liên quan

| Phím hoặc công cụ     | Chức năng                                    |
| --------------------- | -------------------------------------------- |
| `.` trên Numpad       | Tập trung góc nhìn vào object đang chọn      |
| `Tab`                 | Chuyển giữa Object Mode và Edit Mode         |
| `Alt + Click trái`    | Chọn một vòng cạnh hoặc vòng mặt             |
| **Assign**            | Gán material hiện tại cho các mặt đang chọn  |
| **Shade Smooth**      | Làm mượt cách hiển thị bề mặt                |
| **Paint Brush**       | Sơn màu trực tiếp lên mô hình                |
| **Smear Brush**       | Kéo và hòa trộn màu                          |
| **Symmetry**          | Sơn đồng thời hai bên đối xứng               |
| **Roughness**         | Điều khiển độ nhám hoặc độ bóng của vật liệu |
| **Ambient Occlusion** | Tăng bóng tại khe, góc và vùng lõm           |

---

# 11. Lỗi thường gặp

## 11.1. Toàn bộ mắt chỉ có một màu

**Nguyên nhân:**

* Chưa tạo đủ Material Slot.
* Chưa chọn đúng mặt.
* Quên nhấn **Assign**.

**Khắc phục:**

* Tạo ba material riêng.
* Chọn đúng vòng mặt trong Edit Mode.
* Gán từng material cho đúng vùng.

---

## 11.2. Mắt trông như nhựa

**Nguyên nhân:**

* Toàn bộ mắt có Roughness bằng `0`.
* Lòng trắng quá sáng.
* Không có sự khác biệt giữa các vùng mắt.

**Khắc phục:**

* Chỉ để Roughness rất thấp cho đồng tử và mống mắt.
* Sử dụng trắng hơi xám cho lòng trắng.
* Điều chỉnh Roughness khác nhau giữa các material.

---

## 11.3. Bề mặt mắt hoặc sừng bị gãy khối

**Nguyên nhân:**

* Object vẫn sử dụng Flat Shading.

**Khắc phục:**

```text
Chọn object → Chuột phải → Shade Smooth
```

---

## 11.4. Nốt ruồi trông như một mảng màu phẳng

**Nguyên nhân:**

* Chỉ sử dụng một màu.
* Brush quá lớn.
* Màu không thay đổi từ ngoài vào trong.

**Khắc phục:**

* Dùng màu đỏ hoặc nâu nhạt ở mép.
* Tăng độ tối dần vào trung tâm.
* Giảm kích thước brush khi sơn phần đầu nốt.

---

## 11.5. Chân sừng trông như bị dán lên đầu

**Nguyên nhân:**

* Không có vùng chuyển tiếp màu sắc.
* Màu da và màu sừng tách biệt hoàn toàn.

**Khắc phục:**

* Sơn đỏ quanh chân sừng.
* Dùng brush lớn, Strength thấp để hòa màu ra vùng da xung quanh.

---

## 11.6. Ambient Occlusion tạo mảng đen bất thường

**Nguyên nhân:**

* Distance quá lớn.

**Khắc phục:**

* Giảm Distance.
* So sánh trạng thái bật và tắt AO.
* Chỉ tăng đến khi các khe được nhấn rõ mà không làm tối những vùng rộng.

---

# 12. Checklist thực hành

## Mắt

* [ ] Đã tạo material cho lòng trắng.
* [ ] Đã tạo material cho mống mắt.
* [ ] Đã tạo material cho đồng tử.
* [ ] Đã gán đúng material cho từng nhóm mặt.
* [ ] Đã điều chỉnh Roughness để mắt có độ bóng.
* [ ] Đã giảm độ trắng của lòng trắng mắt.

## Sừng và bề mặt

* [ ] Đã tạo vật liệu nâu đỏ cho sừng.
* [ ] Đã điều chỉnh Roughness của sừng.
* [ ] Đã áp dụng Shade Smooth cho đầu, mắt và sừng.
* [ ] Đã sơn vùng đỏ quanh chân sừng.

## Chi tiết khuôn mặt

* [ ] Đã sơn các nốt ruồi hoặc mụn cóc.
* [ ] Đã tạo vùng màu tối hơn ở trung tâm các nốt.
* [ ] Đã làm tối hốc mắt.
* [ ] Đã sử dụng Smear Brush nếu vùng chuyển màu quá gắt.

## Render

* [ ] Đã bật Ambient Occlusion.
* [ ] Đã thử giá trị Distance khoảng `0.4`.
* [ ] Đã kiểm tra các vùng tối bất thường.
* [ ] Đã lưu file Blender.

---

# 13. Bài tập thực hành

Hãy tạo ba phiên bản mắt khác nhau cho nhân vật:

| Phiên bản | Màu mống mắt | Cảm giác             |
| --------- | ------------ | -------------------- |
| 1         | Đỏ sẫm       | Hung dữ, nguy hiểm   |
| 2         | Xanh lá      | Độc ác, ma quái      |
| 3         | Tím          | Huyền bí, siêu nhiên |

Sau đó so sánh:

* Phiên bản nào phù hợp nhất với màu da?
* Phiên bản nào nổi bật nhất khi bật Ambient Occlusion?
* Roughness nào giúp mắt trông tự nhiên nhất?
* Màu quanh hốc mắt có cần thay đổi theo màu mống mắt hay không?

---

# 14. Tóm tắt bài học

Trong bài học này, nhân vật được hoàn thiện thông qua các bước:

1. Chia mắt thành ba vùng vật liệu: lòng trắng, mống mắt và đồng tử.
2. Điều chỉnh Roughness để tạo độ bóng cho mắt.
3. Tạo vật liệu nâu đỏ cho sừng.
4. Áp dụng Shade Smooth cho các bề mặt cong.
5. Sơn nốt ruồi, mụn cóc và vùng da bị kích ứng.
6. Làm tối hốc mắt để tăng chiều sâu và biểu cảm.
7. Sơn đỏ quanh chân sừng để sừng hòa vào hộp sọ.
8. Bật Ambient Occlusion và điều chỉnh Distance khoảng `0.4`.
9. Kiểm tra tổng thể và lưu file.

Đây là giai đoạn hoàn thiện màu sắc và khả năng hiển thị của mô hình, giúp nhân vật có chiều sâu, chất liệu rõ ràng và sẵn sàng cho các bước trình bày hoặc render tiếp theo.
