# 029 — Adding Materials

| Thuộc tính           | Nội dung                                                 |
| -------------------- | -------------------------------------------------------- |
| **Module**           | Module 02 — Modular Dungeon                              |
| **Bài học**          | Adding Materials                                         |
| **Thời lượng**       | 6:28                                                     |
| **Chủ đề chính**     | Làm biến dạng nhẹ cột đá và thêm vật liệu cho các object |
| **Object thực hành** | Stone Pillars, Crate, Barrel                             |

---

## 1. Mục tiêu bài học

Sau bài học này, bạn có thể:

* Sử dụng lệnh **Randomize** để tạo độ méo nhẹ, giúp các cột đá bớt đều và tự nhiên hơn.
* Tạo vật liệu đá màu xám cho hệ thống cột.
* Sao chép hoặc liên kết vật liệu giữa nhiều object bằng `Ctrl + L`.
* Điều chỉnh **Base Color**, **Roughness** và **Metallic** trong Principled BSDF.
* Bật **Ambient Occlusion** và **Screen Space Reflections** trong Eevee.
* Tạo vật liệu gỗ màu nâu cho thùng gỗ.
* Dùng **Material Slots** để gán vật liệu gỗ và kim loại lên các phần khác nhau của cùng một barrel.
* Kiểm tra kết quả bằng **Material Preview**.

---

## 2. Tạo độ méo tự nhiên cho cột đá

Các cột hiện tại có hình dáng khá đồng đều. Có thể sử dụng lệnh **Randomize** để làm vị trí các vertex lệch nhẹ, tạo cảm giác cột đá cũ, thủ công và không hoàn toàn thẳng.

### 2.1. Chọn các cột

1. Chọn toàn bộ các cột đá.
2. Nhấn `Tab` để chuyển sang **Edit Mode**.
3. Nhấn `1` để chuyển sang **Vertex Select**.
4. Nhấn `A` để chọn toàn bộ vertex.

### 2.2. Bỏ chọn vertex ở hai đầu

Không nên làm biến dạng các vertex trên cùng và dưới cùng vì:

* Đáy cột cần nằm phẳng trên sàn.
* Đỉnh cột cần tiếp xúc phẳng với trần.
* Nếu hai phần này bị lệch, cột có thể trông như đang lơ lửng hoặc xuyên qua bề mặt.

Quy trình:

1. Chuyển sang **Front View** bằng `Numpad 1`.
2. Bật **Wireframe** hoặc **X-Ray** để nhìn xuyên qua object.
3. Giữ `Ctrl` và dùng Box Select để bỏ chọn hàng vertex trên cùng.
4. Tiếp tục bỏ chọn hàng vertex dưới cùng.
5. Chuyển lại **Solid View** để quan sát kết quả rõ hơn.

### 2.3. Sử dụng Randomize

Trên thanh menu của 3D Viewport, chọn:

```text
Mesh → Transform → Randomize
```

Sau khi thực hiện, mở bảng điều chỉnh thao tác ở góc dưới bên trái và giảm giá trị **Amount** xuống mức rất nhỏ.

Giá trị phù hợp có thể nằm trong khoảng:

```text
0.01 – 0.02
```

Không nên dùng giá trị quá lớn vì cột sẽ bị méo mạnh và mất cấu trúc.

> Randomize chỉ nên tạo ra sự không hoàn hảo rất nhẹ. Mục tiêu là làm cột có thêm cá tính, không phải phá hỏng hình dạng ban đầu.

### Sơ đồ lựa chọn vertex

```text
Đỉnh cột        → Không Randomize
┌──────────────┐
│              │
│  Phần thân   │ → Randomize nhẹ
│              │
└──────────────┘
Đáy cột         → Không Randomize
```

Sau khi hoàn tất, nhấn `Tab` để trở lại **Object Mode**.

---

## 3. Tạo vật liệu đá cho các cột

### 3.1. Tạo vật liệu mới

1. Chuyển sang workspace **Shading**.
2. Chọn một cột đá.
3. Trong Material Properties, nhấn **New**.
4. Đặt tên vật liệu:

```text
Stone Gray
```

5. Chỉnh **Base Color** thành màu xám trung bình hoặc xám đậm.

Ví dụ về đặc tính vật liệu:

| Thuộc tính |               Giá trị gợi ý |
| ---------- | --------------------------: |
| Base Color | Xám trung bình hoặc xám đậm |
| Metallic   |                       `0.0` |
| Roughness  |               `0.80 – 0.90` |

### 3.2. Điều chỉnh Roughness

Vật liệu đá không nên quá bóng. Khi Roughness thấp, ánh sáng phản chiếu mạnh trên các mặt phẳng low-poly, khiến object trông giống nhựa.

Nên tăng Roughness lên khoảng:

```text
0.85
```

So sánh:

```text
Roughness thấp
      ↓
Bề mặt bóng, phản chiếu mạnh
      ↓
Dễ trông giống nhựa

Roughness cao
      ↓
Bề mặt mềm và mờ hơn
      ↓
Phù hợp với đá low-poly
```

---

## 4. Liên kết vật liệu giữa nhiều cột

Vật liệu mới chỉ được thêm vào **active object**, tức object được chọn cuối cùng và có viền màu vàng sáng.

Có hai cách gán vật liệu cho các cột còn lại.

### Cách 1: Chọn vật liệu từ danh sách

1. Chọn một cột khác.
2. Mở danh sách vật liệu.
3. Chọn vật liệu `Stone Gray`.

Cách này phù hợp khi chỉ có ít object.

### Cách 2: Link Materials bằng `Ctrl + L`

1. Chọn tất cả các cột cần nhận vật liệu.
2. Chọn cột đang có vật liệu `Stone Gray` cuối cùng.
3. Nhấn:

```text
Ctrl + L
```

4. Chọn:

```text
Link Materials
```

### Nguyên tắc active object

```text
Các object nhận vật liệu
        ↓
Chọn trước

Object chứa vật liệu nguồn
        ↓
Chọn cuối cùng
        ↓
Active Object
        ↓
Ctrl + L → Link Materials
```

> Object được chọn cuối cùng là nguồn để Blender sao chép hoặc liên kết dữ liệu.

---

## 5. Bật hiệu ứng trong Eevee

Trong **Render Properties**, nếu đang sử dụng Eevee, có thể bật thêm các hiệu ứng giúp vật liệu và bóng đổ rõ hơn.

### 5.1. Ambient Occlusion

**Ambient Occlusion** làm tối các khe hẹp, góc tiếp xúc và vùng bị che khuất.

Hiệu ứng này đặc biệt hữu ích ở:

* Khe giữa các viên đá.
* Điểm tiếp xúc giữa cột và sàn.
* Các góc lõm của crate.
* Khu vực dưới đai kim loại của barrel.

```text
Ambient Occlusion
        ↓
Tăng bóng ở khe và góc
        ↓
Object có chiều sâu rõ hơn
```

### 5.2. Screen Space Reflections

**Screen Space Reflections** hỗ trợ tạo phản chiếu trong Eevee.

Hiệu ứng có thể chưa rõ trên vật liệu đá vì đá có Roughness cao, nhưng sẽ hữu ích hơn đối với:

* Đai kim loại trên barrel.
* Vật liệu kim loại.
* Bề mặt có Roughness thấp.
* Sàn hoặc vật liệu có khả năng phản chiếu.

> Tên và vị trí của các tùy chọn có thể thay đổi tùy theo phiên bản Blender và Eevee đang sử dụng.

---

## 6. Hiển thị lại crate và barrel

Các object crate và barrel đang nằm ở vị trí trung tâm và có thể chồng lên những object khác.

Có thể tách chúng ra theo trục X:

### Crate

```text
G → X → -2
```

### Barrel

```text
G → X → -4
```

Sau khi di chuyển, các object có khoảng cách rõ ràng để dễ chỉnh vật liệu.

---

## 7. Tạo vật liệu gỗ cho crate

### 7.1. Tạo vật liệu Brown

1. Chọn crate.
2. Tạo material mới.
3. Đặt tên:

```text
Wood Brown
```

4. Chỉnh Base Color thành màu nâu.
5. Tăng Roughness lên trên `0.8`.

### 7.2. Cách tạo màu nâu

Trong hệ màu, nâu có thể được xem là màu cam có độ sáng thấp.

Quy trình chọn màu:

1. Chọn vùng màu cam.
2. Giảm **Value** hoặc độ sáng.
3. Điều chỉnh nhẹ về phía vàng nếu muốn màu gỗ mềm và ấm hơn.

```text
Màu cam
   +
Giảm độ sáng
   =
Màu nâu
```

Giá trị tham khảo:

| Thuộc tính |         Giá trị gợi ý |
| ---------- | --------------------: |
| Base Color | Nâu vàng hoặc nâu cam |
| Metallic   |                 `0.0` |
| Roughness  |         `0.80 – 0.90` |

> Không nên làm vật liệu gỗ quá bóng vì crate sẽ trông giống nhựa hoặc gỗ đã phủ lớp sơn bóng dày.

---

## 8. Gán hai vật liệu cho barrel

Barrel cần hai loại vật liệu:

* **Wood Brown** cho phần thân gỗ.
* **Metal Gray** cho các vòng đai kim loại.

Đây là trường hợp cần sử dụng **Material Slots**.

### Sơ đồ cấu tạo vật liệu barrel

```text
Barrel
├── Thân thùng
│   └── Wood Brown
│
└── Các vòng đai
    └── Metal Gray
```

---

## 9. Gán vật liệu gỗ cho barrel

1. Chọn barrel.
2. Trong Material Properties, chọn vật liệu đã tạo:

```text
Wood Brown
```

Toàn bộ barrel ban đầu sẽ sử dụng vật liệu gỗ.

Việc dùng lại cùng một material giúp:

* Giữ màu gỗ của crate và barrel nhất quán.
* Giảm số lượng material không cần thiết.
* Chỉnh sửa đồng thời màu gỗ của nhiều object.

---

## 10. Tạo Material Slot cho phần kim loại

### 10.1. Thêm slot mới

1. Trong Material Properties, nhấn nút `+` để thêm Material Slot.
2. Nhấn **New** để tạo material mới.
3. Đặt tên:

```text
Metal Gray
```

Lúc này material mới chưa xuất hiện trên barrel vì chưa có face nào được gán cho slot đó.

### 10.2. Chọn các mặt đai kim loại

1. Nhấn `Tab` để vào **Edit Mode**.
2. Chuyển sang **Face Select** bằng phím `3`.
3. Chuyển sang **Front View**.
4. Bật **Wireframe** hoặc **X-Ray**.
5. Dùng Box Select để chọn các mặt thuộc vòng đai phía trên.
6. Giữ `Shift` và chọn thêm các vòng đai còn lại.

### 10.3. Gán material cho face

Trong Material Properties:

1. Chọn slot `Metal Gray`.
2. Nhấn **Assign**.

Các face được chọn sẽ chuyển từ vật liệu gỗ sang vật liệu kim loại.

```text
Chọn face đai kim loại
          ↓
Chọn slot Metal Gray
          ↓
Nhấn Assign
          ↓
Face sử dụng vật liệu kim loại
```

---

## 11. Thiết lập vật liệu kim loại

Với material `Metal Gray`, điều chỉnh Principled BSDF:

| Thuộc tính |                    Giá trị gợi ý |
| ---------- | -------------------------------: |
| Base Color | Xám trung bình hoặc xám hơi sáng |
| Metallic   |                            `1.0` |
| Roughness  |                    `0.30 – 0.60` |

### Vai trò của Metallic

```text
Metallic = 0
→ Gỗ, đá, nhựa, vải và các vật liệu phi kim

Metallic = 1
→ Sắt, thép, đồng, vàng và các vật liệu kim loại
```

### Vai trò của Roughness trên kim loại

* Roughness thấp: kim loại bóng, phản chiếu mạnh.
* Roughness trung bình: kim loại cũ hoặc hơi xước.
* Roughness cao: kim loại rất mờ, ít phản chiếu.

Với barrel low-poly, có thể giảm Roughness nhẹ để đai kim loại nổi bật so với phần gỗ, nhưng không nên làm quá bóng.

---

## 12. Lỗi hiển thị trong Edit Mode

Trong quá trình chỉnh vật liệu, đôi khi vật liệu có thể hiển thị quá tối hoặc không chính xác khi đang ở Edit Mode.

Cách kiểm tra:

1. Chuyển về **Object Mode**.
2. Chuyển sang **Material Preview**.
3. Kiểm tra lại Base Color, Metallic và Roughness.
4. Nếu Object Mode hiển thị đúng, có thể đây chỉ là lỗi hiển thị tạm thời của viewport.

> Không nên thay đổi toàn bộ vật liệu chỉ dựa trên một lỗi hiển thị xuất hiện riêng trong Edit Mode.

---

## 13. Quy trình thực hành hoàn chỉnh

```text
Chọn các cột
      ↓
Edit Mode → Vertex Select
      ↓
Bỏ chọn vertex ở đỉnh và đáy
      ↓
Mesh → Transform → Randomize
      ↓
Tạo vật liệu Stone Gray
      ↓
Ctrl + L → Link Materials
      ↓
Bật Ambient Occlusion và Reflections
      ↓
Tạo Wood Brown cho crate
      ↓
Gán Wood Brown cho barrel
      ↓
Thêm slot Metal Gray
      ↓
Chọn các face đai kim loại
      ↓
Assign
      ↓
Chỉnh Metallic và Roughness
      ↓
Kiểm tra bằng Material Preview
      ↓
Lưu file
```

---

## 14. Phím tắt và công cụ liên quan

| Phím tắt / Công cụ             | Chức năng                                |
| ------------------------------ | ---------------------------------------- |
| `Tab`                          | Chuyển giữa Object Mode và Edit Mode     |
| `1`                            | Vertex Select trong Edit Mode            |
| `3`                            | Face Select trong Edit Mode              |
| `A`                            | Chọn toàn bộ thành phần                  |
| `Numpad 1`                     | Front View                               |
| `Z`                            | Mở Viewport Shading Pie Menu             |
| `B`                            | Box Select                               |
| `Shift`                        | Chọn thêm nhiều vùng hoặc thành phần     |
| `Ctrl + L`                     | Mở menu liên kết dữ liệu giữa các object |
| `G`                            | Di chuyển object                         |
| `G`, `X`, `-2`                 | Di chuyển object `-2` đơn vị theo trục X |
| `Mesh → Transform → Randomize` | Làm vị trí vertex lệch ngẫu nhiên        |
| Material Slot `+`              | Thêm slot vật liệu                       |
| **Assign**                     | Gán material đang chọn cho các face      |
| **Select**                     | Chọn các face đang thuộc material slot   |
| **Deselect**                   | Bỏ chọn các face thuộc material slot     |
| `Ctrl + S`                     | Lưu file Blender                         |

---

## 15. Thông số vật liệu tham khảo

| Vật liệu       | Base Color                  | Metallic |     Roughness |
| -------------- | --------------------------- | -------: | ------------: |
| **Stone Gray** | Xám trung bình hoặc xám đậm |    `0.0` | `0.80 – 0.90` |
| **Wood Brown** | Nâu vàng hoặc nâu cam       |    `0.0` | `0.80 – 0.90` |
| **Metal Gray** | Xám trung tính              |    `1.0` | `0.30 – 0.60` |

Các giá trị trên chỉ là điểm bắt đầu. Có thể điều chỉnh dựa trên ánh sáng và phong cách của scene.

---

## 16. Lưu ý và lỗi thường gặp

### 16.1. Randomize quá mạnh

**Hiện tượng:** Cột bị méo, mặt đá gãy hoặc đỉnh và đáy không còn phẳng.

**Nguyên nhân:** Giá trị Amount quá lớn hoặc đã chọn cả vertex ở hai đầu.

**Cách xử lý:**

* Hoàn tác bằng `Ctrl + Z`.
* Bỏ chọn vertex trên cùng và dưới cùng.
* Sử dụng Amount khoảng `0.01 – 0.02`.

---

### 16.2. Material chỉ xuất hiện trên một cột

**Nguyên nhân:** Vật liệu chỉ được tạo trên active object.

**Cách xử lý:**

* Chọn các cột nhận vật liệu trước.
* Chọn cột chứa vật liệu nguồn cuối cùng.
* Nhấn `Ctrl + L → Link Materials`.

---

### 16.3. Link Materials sai chiều

**Hiện tượng:** Vật liệu đúng bị thay bằng vật liệu của object khác.

**Nguyên nhân:** Chọn active object sai.

**Cách xử lý:** Luôn chọn object chứa vật liệu nguồn cuối cùng.

---

### 16.4. Không thể nhấn Assign

**Nguyên nhân phổ biến:**

* Đang ở Object Mode.
* Chưa thêm Material Slot.
* Chưa chọn face.
* Đang sử dụng Vertex Select hoặc Edge Select trong khi cần chọn mặt.

**Cách xử lý:**

1. Vào Edit Mode.
2. Chuyển sang Face Select.
3. Chọn các face cần gán.
4. Chọn đúng slot.
5. Nhấn Assign.

---

### 16.5. Toàn bộ barrel biến thành kim loại

**Nguyên nhân:** Material kim loại được đặt làm vật liệu chính hoặc chưa gán theo face.

**Cách xử lý:**

* Giữ Wood Brown ở slot đầu tiên.
* Thêm Metal Gray vào slot thứ hai.
* Chỉ chọn các face thuộc vòng đai.
* Nhấn Assign.

---

### 16.6. Đá và gỗ trông giống nhựa

**Nguyên nhân:** Roughness quá thấp.

**Cách xử lý:** Tăng Roughness lên trên `0.8`.

---

### 16.7. Kim loại không giống kim loại

**Nguyên nhân phổ biến:**

* Metallic vẫn bằng `0`.
* Scene thiếu nguồn sáng hoặc môi trường phản chiếu.
* Roughness quá cao.
* Screen Space Reflections chưa được bật.

**Cách xử lý:**

* Đặt Metallic gần hoặc bằng `1.0`.
* Điều chỉnh Roughness xuống mức trung bình.
* Kiểm tra trong Material Preview hoặc Rendered View.
* Bật các thiết lập phản chiếu phù hợp trong Eevee.

---

## 17. Bài tập thực hành

### Bài tập 1: Randomize cột đá

* Chọn các cột.
* Giữ nguyên vertex ở đỉnh và đáy.
* Randomize phần thân với Amount nhỏ.
* So sánh trước và sau khi Randomize.

### Bài tập 2: Tạo vật liệu đá

* Tạo vật liệu xám đậm.
* Đặt Roughness trên `0.8`.
* Link material cho tất cả cột bằng `Ctrl + L`.

### Bài tập 3: Tạo vật liệu gỗ

* Tạo màu nâu bằng cách bắt đầu từ màu cam.
* Giảm Value để màu trở thành nâu.
* Gán vật liệu cho crate và barrel.

### Bài tập 4: Tạo barrel hai vật liệu

* Thân barrel sử dụng vật liệu gỗ.
* Các vòng đai sử dụng vật liệu kim loại.
* Đặt Metallic của vòng đai bằng `1.0`.
* Điều chỉnh Roughness để phần kim loại nổi bật nhưng không quá bóng.

---

## 18. Checklist thực hành

* [ ] Đã chọn toàn bộ các cột và chuyển sang Edit Mode.
* [ ] Đã bỏ chọn vertex ở đỉnh và đáy cột.
* [ ] Đã sử dụng Randomize với giá trị nhỏ.
* [ ] Đã tạo vật liệu `Stone Gray`.
* [ ] Đã đặt Roughness của đá trên `0.8`.
* [ ] Đã liên kết vật liệu cho các cột bằng `Ctrl + L`.
* [ ] Đã bật Ambient Occlusion.
* [ ] Đã bật thiết lập phản chiếu phù hợp trong Eevee.
* [ ] Đã tạo vật liệu `Wood Brown` cho crate.
* [ ] Đã sử dụng lại vật liệu gỗ cho barrel.
* [ ] Đã thêm Material Slot thứ hai cho barrel.
* [ ] Đã chọn đúng các face thuộc vòng đai.
* [ ] Đã nhấn Assign cho material `Metal Gray`.
* [ ] Đã đặt Metallic của kim loại bằng `1.0`.
* [ ] Đã kiểm tra kết quả trong Material Preview hoặc Object Mode.
* [ ] Đã lưu file bằng `Ctrl + S`.

---

## 19. Tóm tắt

Bài học kết hợp hai kỹ thuật quan trọng trong quá trình xây dựng modular dungeon:

1. **Randomize vertex** để tạo độ không hoàn hảo nhẹ cho các cột đá.
2. **Material Slots** để gán nhiều chất liệu lên cùng một mesh.

Các cột sử dụng vật liệu đá xám với Roughness cao. Crate và thân barrel sử dụng vật liệu gỗ màu nâu. Những vòng đai của barrel được gán vật liệu kim loại với Metallic bằng `1.0` và Roughness thấp hơn.

Đây là nền tảng quan trọng để các object low-poly có chất liệu dễ nhận biết, đồng thời chuẩn bị cho các bài tiếp theo về ánh sáng, shading và hoàn thiện môi trường dungeon.

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
