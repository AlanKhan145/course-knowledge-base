# 069 — Thiết lập ánh sáng và HDRI

| Thuộc tính         | Nội dung                                                                    |
| ------------------ | --------------------------------------------------------------------------- |
| **Module**         | Module 04 — UV Mapping                                                      |
| **Bài học**        | Lighting and HDRI’s                                                         |
| **Thời lượng**     | 6:14                                                                        |
| **Chủ đề chính**   | Thiết lập ánh sáng HDRI, so sánh Eevee và Cycles                            |
| **Kết quả đầu ra** | Một scene có ánh sáng, bóng đổ và độ tương phản phù hợp để render animation |

---

## 1. Mục tiêu bài học

Sau bài học này, bạn có thể:

* Thiết lập không gian làm việc để quan sát ánh sáng trong scene.
* Điều chỉnh cường độ ánh sáng của HDRI.
* Xoay HDRI để thay đổi hướng chiếu sáng.
* Cải thiện độ tương phản và bóng đổ trong Eevee.
* So sánh chất lượng ánh sáng giữa Eevee và Cycles.
* Thiết lập giới hạn thời gian render cho từng frame.
* Bổ sung đèn Sun khi Eevee không tạo được bóng đổ đủ rõ.
* Chọn render engine phù hợp với cấu hình máy tính.

---

## 2. Bối cảnh scene

Ở đầu bài học, scene đã có:

* Máy bay được animate bay qua các tòa nhà.
* Các tòa nhà được sắp xếp thành một tuyến đường cong.
* Camera đặt ở phía trước scene.
* HDRI được sử dụng làm ánh sáng môi trường.
* Shader Editor đang được mở trong workspace **Shading**.

Mục tiêu tiếp theo là làm cho scene có:

* Bóng đổ rõ hơn.
* Độ tương phản tốt hơn.
* Hướng ánh sáng đẹp hơn.
* Chiều sâu không gian rõ ràng hơn.

---

## 3. Thiết lập workspace để chỉnh ánh sáng

Trong workspace **Shading**, chia giao diện thành các khu vực sau:

| Khu vực                   | Công dụng                                          |
| ------------------------- | -------------------------------------------------- |
| **Camera View**           | Xem trước bố cục cuối cùng                         |
| **3D Viewport**           | Quan sát và điều chỉnh các đối tượng, nguồn sáng   |
| **Shader Editor — World** | Chỉnh HDRI và ánh sáng môi trường                  |
| **Properties Editor**     | Chuyển render engine và chỉnh các thiết lập render |

### Bố cục gợi ý

```text
┌──────────────────────────┬──────────────────────────┐
│                          │                          │
│       Camera View        │       3D Viewport        │
│                          │                          │
├──────────────────────────┴──────────────────────────┤
│                                                    │
│              Shader Editor — World                 │
│                                                    │
└────────────────────────────────────────────────────┘
```

### Các bước thực hiện

1. Chuyển sang workspace **Shading**.
2. Đổi một cửa sổ thành **3D Viewport**.
3. Chuyển viewport đó sang **Camera View**.
4. Bật chế độ **Rendered** để xem ánh sáng gần với kết quả cuối.
5. Trong Shader Editor, chuyển từ **Object** sang **World**.
6. Có thể tắt **Overlays** và **Gizmos** trong Camera View để hình ảnh dễ quan sát hơn.

---

## 4. Vấn đề ánh sáng ban đầu

Trong Eevee, scene ban đầu có thể trông hơi phẳng vì:

* Bóng đổ chưa rõ.
* Các vùng tiếp xúc giữa vật thể thiếu độ tối.
* Mặt trước và mặt sau của các tòa nhà có độ sáng gần giống nhau.
* Ánh sáng môi trường từ HDRI phủ tương đối đều lên toàn bộ scene.

Kết quả là scene thiếu chiều sâu và độ tương phản.

---

## 5. Tăng độ tương phản bằng Ambient Occlusion

Trong phiên bản Blender được sử dụng trong khóa học, có thể bật **Ambient Occlusion** trong Render Properties.

Ambient Occlusion giúp tạo thêm vùng tối tại:

* Góc tường.
* Khe giữa các vật thể.
* Chân tòa nhà.
* Những khu vực có các bề mặt nằm gần nhau.
* Các phần bị che khuất khỏi ánh sáng môi trường.

Giảng viên tăng giá trị Ambient Occlusion lên khoảng:

```text
1.4
```

Tuy nhiên, giá trị phù hợp phụ thuộc vào:

* Kích thước scene.
* Khoảng cách giữa các vật thể.
* Cường độ HDRI.
* Phong cách hình ảnh mong muốn.

> Ambient Occlusion không thay thế ánh sáng vật lý. Nó chủ yếu là một hiệu ứng bổ sung để tăng cảm giác tiếp xúc và chiều sâu.

Ngoài ra, có thể bật tùy chọn bóng đổ có độ chính xác cao hơn, chẳng hạn **High Bit Depth**, nhưng trong scene này sự khác biệt không quá lớn.

---

## 6. Cấu trúc World Shader sử dụng HDRI

HDRI được thiết lập trong **World Shader** bằng các node chính:

```text
Texture Coordinate
        │
        ▼
     Mapping
        │
        ▼
Environment Texture
        │ Color
        ▼
    Background
        │
        ▼
   World Output
```

### Vai trò của từng node

| Node                    | Vai trò                                       |
| ----------------------- | --------------------------------------------- |
| **Texture Coordinate**  | Cung cấp tọa độ để định hướng ảnh môi trường  |
| **Mapping**             | Điều chỉnh vị trí, tỉ lệ và góc xoay của HDRI |
| **Environment Texture** | Nạp ảnh HDRI                                  |
| **Background**          | Kiểm soát màu và cường độ ánh sáng môi trường |
| **World Output**        | Xuất World Shader ra toàn bộ scene            |

---

## 7. Thêm nhanh Mapping bằng Node Wrangler

Khi đã bật add-on **Node Wrangler**, có thể:

1. Chọn node **Environment Texture**.
2. Nhấn:

```text
Ctrl + T
```

Node Wrangler sẽ tự động thêm:

* **Texture Coordinate**
* **Mapping**

Sau đó kết nối chúng với Environment Texture.

Nếu thêm thủ công:

```text
Shift + A
→ Vector
→ Mapping
```

---

## 8. Xoay HDRI để thay đổi hướng ánh sáng

Một trong những lợi ích lớn nhất của node Mapping là có thể xoay HDRI mà không cần xoay toàn bộ scene.

Trong node **Mapping**, thay đổi:

```text
Rotation Z
```

Thao tác này sẽ xoay ảnh HDRI quanh scene.

### Khi xoay HDRI, những yếu tố sau sẽ thay đổi

* Vị trí mặt trời hoặc vùng sáng nhất.
* Hướng bóng đổ.
* Mặt nào của tòa nhà được chiếu sáng.
* Cường độ vùng sáng phía sau scene.
* Phản chiếu môi trường trên các vật liệu.
* Độ nổi bật của máy bay so với hậu cảnh.

### Nguyên tắc lựa chọn góc HDRI

Một góc HDRI tốt thường tạo ra:

* Một phía của tòa nhà sáng.
* Phía còn lại tối hơn.
* Bóng đổ chạy theo một hướng rõ ràng.
* Máy bay tách biệt khỏi hậu cảnh.
* Vùng sáng không làm mất chi tiết vật thể.

```text
Vùng sáng HDRI
      ☀
       ╲
        ╲  ánh sáng
         ╲
     ┌─────────┐
     │ Tòa nhà │ ─────────► Bóng đổ
     └─────────┘
```

Nên vừa xoay HDRI vừa quan sát:

* Camera View.
* Rendered View.
* Hướng bóng đổ trong 3D Viewport.

---

## 9. Điều chỉnh Strength của HDRI

Node **Background** có tham số **Strength**, dùng để kiểm soát cường độ ánh sáng từ HDRI.

| Strength | Hiệu ứng                                   |
| -------: | ------------------------------------------ |
| Quá thấp | Scene tối, thiếu chi tiết                  |
| Vừa phải | Ánh sáng cân bằng, bóng đổ dễ quan sát     |
|  Quá cao | Scene phẳng, cháy sáng và thiếu tương phản |

Trong Eevee, nếu HDRI tạo quá nhiều ánh sáng đều, có thể giảm Strength để nguồn sáng Sun bổ sung tạo bóng đổ rõ hơn.

---

## 10. So sánh Eevee và Cycles

### 10.1. Eevee

Eevee ưu tiên tốc độ và khả năng xem trước theo thời gian thực.

**Ưu điểm:**

* Render nhanh.
* Thích hợp với máy cấu hình thấp hoặc trung bình.
* Phù hợp để kiểm tra animation.
* Dễ xem trước ánh sáng trong viewport.

**Hạn chế trong scene này:**

* Ánh sáng có thể trông phẳng.
* Ánh sáng gián tiếp không chân thực bằng Cycles.
* HDRI có thể làm toàn bộ scene sáng tương đối đồng đều.
* Cần bổ sung Ambient Occlusion hoặc đèn Sun để tăng bóng đổ.

---

### 10.2. Cycles

Cycles mô phỏng đường đi của ánh sáng bằng ray tracing.

**Ưu điểm:**

* Ánh sáng tự nhiên hơn.
* Bóng đổ chân thực hơn.
* Ánh sáng có thể phản xạ giữa các tòa nhà.
* Các vùng khuất nhận được ánh sáng gián tiếp hợp lý.
* HDRI hoạt động như một nguồn sáng môi trường thực tế hơn.

**Hạn chế:**

* Render chậm hơn.
* Đòi hỏi nhiều tài nguyên máy tính.
* Render animation nhiều frame có thể mất nhiều thời gian.

### So sánh tổng quát

| Tiêu chí              | Eevee                    | Cycles                      |
| --------------------- | ------------------------ | --------------------------- |
| Tốc độ                | Rất nhanh                | Chậm hơn                    |
| Ánh sáng gián tiếp    | Xấp xỉ                   | Chân thực hơn               |
| Bóng đổ               | Cần tinh chỉnh           | Tự nhiên hơn                |
| HDRI                  | Nhanh nhưng có thể phẳng | Ánh sáng và phản xạ tốt hơn |
| Phù hợp               | Preview, máy yếu         | Render cuối, máy mạnh       |
| Animation nhiều frame | Tiết kiệm thời gian      | Cần tối ưu kỹ               |

---

## 11. Thiết lập Cycles để render nhanh hơn

Khi chuyển sang Cycles:

1. Mở **Render Properties**.
2. Chọn:

```text
Render Engine: Cycles
```

3. Nếu máy có GPU phù hợp, chọn:

```text
Device: GPU Compute
```

4. Bật **Denoise** cho:

   * Viewport.
   * Render cuối.

Denoise giúp giảm nhiễu sau khi render, cho phép sử dụng số sample thấp hơn hoặc thời gian render ngắn hơn.

---

## 12. Giới hạn thời gian render cho từng frame

Vì animation có nhiều frame, thời gian render cho mỗi frame ảnh hưởng rất lớn đến tổng thời gian.

Trong bài học, animation có khoảng:

```text
100 frame
```

Nếu đặt giới hạn:

```text
3 giây/frame
```

Thời gian render lý thuyết là:

```text
100 × 3 = 300 giây
```

Tương đương khoảng:

```text
5 phút
```

Sau khi đạt giới hạn thời gian, Blender sẽ dừng lấy mẫu và áp dụng Denoise.

### Công thức ước tính

```text
Tổng thời gian ≈ Số frame × Thời gian mỗi frame
```

Ví dụ:

| Số frame | Thời gian/frame | Tổng thời gian lý thuyết |
| -------: | --------------: | -----------------------: |
|      100 |          3 giây |                   5 phút |
|      100 |         10 giây |          16 phút 40 giây |
|      250 |          5 giây |          20 phút 50 giây |
|      500 |         10 giây |    1 giờ 23 phút 20 giây |

> Thời gian thực tế có thể dài hơn do quá trình tải scene, lưu file, denoise và ghi từng frame ra ổ đĩa.

---

## 13. Giải pháp thay thế trong Eevee: thêm đèn Sun

Nếu máy không đủ mạnh để render Cycles, có thể tiếp tục sử dụng Eevee và bổ sung một đèn Sun.

### Thêm đèn Sun

```text
Shift + A
→ Light
→ Sun
```

### Quy trình thiết lập

1. Thêm đèn **Sun**.
2. Chuyển sang góc nhìn từ trên xuống.
3. Đặt và xoay Sun sao cho hướng sáng gần giống vùng mặt trời trong HDRI.
4. Tạm giảm Strength của HDRI xuống gần `0`.
5. Điều chỉnh góc Sun để quan sát bóng đổ rõ ràng.
6. Tăng lại Strength của HDRI để bổ sung ánh sáng môi trường.
7. Cân bằng giữa Sun và HDRI.

Trong ví dụ của bài học:

```text
Sun Strength ≈ 3
HDRI Background Strength ≈ 0.3
```

Đây chỉ là giá trị tham khảo, không phải giá trị bắt buộc.

---

## 14. Phối hợp HDRI và Sun trong Eevee

Cách phối hợp ánh sáng:

```text
HDRI
 ├─ Cung cấp ánh sáng môi trường
 ├─ Làm sáng các vùng trong bóng râm
 └─ Tạo hình ảnh nền và phản chiếu môi trường

Sun
 ├─ Tạo hướng sáng chính
 ├─ Tạo bóng đổ rõ ràng
 └─ Tăng độ tương phản cho scene
```

### Sơ đồ ánh sáng

```text
                 HDRI
        ánh sáng môi trường đều
             ↘   ↓   ↙

          ┌─────────────┐
Sun ─────►│    Scene    │─────► Bóng đổ
          └─────────────┘

HDRI Strength thấp  +  Sun mạnh
        │
        ▼
Scene có ánh sáng nền nhưng vẫn giữ bóng rõ
```

---

## 15. Điều chỉnh màu của đèn Sun

Màu trắng hoàn toàn có thể làm ánh sáng trông hơi lạnh hoặc nhân tạo.

Có thể chỉnh màu Sun hơi ngả:

* Vàng nhạt.
* Cam nhạt.
* Vàng kem.

Điều này giúp nguồn sáng giống ánh nắng hơn.

Không nên dùng màu vàng quá đậm vì có thể:

* Làm sai màu vật liệu.
* Khiến toàn bộ scene bị ám màu.
* Làm vùng sáng trông không tự nhiên.

---

## 16. Quy trình lựa chọn render engine

```text
Bắt đầu
   │
   ▼
Thử render một frame bằng Cycles
   │
   ├─ Chất lượng tốt và thời gian chấp nhận được
   │            │
   │            ▼
   │       Dùng Cycles
   │
   └─ Render quá chậm
                │
                ▼
          Chuyển sang Eevee
                │
                ▼
     Giảm HDRI + thêm Sun + tăng tương phản
```

### Gợi ý quyết định

* Dùng **Cycles** khi ưu tiên chất lượng hình ảnh.
* Dùng **Eevee** khi ưu tiên tốc độ.
* Trước khi render toàn bộ animation, luôn render thử một vài frame.
* Kiểm tra cả những frame có nhiều vật thể và bóng đổ phức tạp.

---

## 17. Phím tắt và công cụ liên quan

| Phím tắt hoặc công cụ | Chức năng                                         |
| --------------------- | ------------------------------------------------- |
| `Shift + A`           | Thêm object, light hoặc shader node               |
| `Ctrl + T`            | Node Wrangler: thêm Texture Coordinate và Mapping |
| `G`                   | Di chuyển object hoặc node                        |
| `R`                   | Xoay object                                       |
| `Z`                   | Mở menu Viewport Shading                          |
| `Numpad 0`            | Chuyển sang Camera View                           |
| `Numpad 7`            | Góc nhìn từ trên xuống                            |
| **Rendered View**     | Xem trước ánh sáng và vật liệu                    |
| **World Shader**      | Chỉnh HDRI và Background Strength                 |
| **Render Properties** | Chọn Eevee hoặc Cycles                            |
| **Denoise**           | Giảm nhiễu trong Cycles                           |
| **Time Limit**        | Giới hạn thời gian lấy mẫu cho mỗi frame          |

---

## 18. Lỗi thường gặp

### 18.1. Xoay node Mapping nhưng HDRI không thay đổi

**Nguyên nhân có thể:**

* Mapping chưa được nối với Environment Texture.
* Đang chỉnh Material Shader thay vì World Shader.
* Đang thay đổi sai trục xoay.
* Viewport chưa ở chế độ Rendered.

**Cách khắc phục:**

* Kiểm tra chuỗi kết nối node.
* Chuyển Shader Editor sang **World**.
* Điều chỉnh **Rotation Z**.
* Bật Rendered View.

---

### 18.2. Scene quá sáng và không có bóng rõ

**Nguyên nhân:**

* HDRI Strength quá cao.
* Ánh sáng môi trường lấn át nguồn sáng chính.
* Eevee không mô phỏng ánh sáng gián tiếp giống Cycles.

**Cách khắc phục:**

* Giảm Background Strength.
* Thêm đèn Sun.
* Tăng Ambient Occlusion.
* Thử render bằng Cycles.

---

### 18.3. Scene quá tối sau khi giảm HDRI

**Cách khắc phục:**

* Tăng nhẹ Background Strength.
* Tăng Sun Strength.
* Điều chỉnh hướng Sun.
* Kiểm tra Color Management và Exposure.

---

### 18.4. Cycles render quá chậm

**Cách khắc phục:**

* Chuyển sang GPU Compute.
* Bật Denoise.
* Giảm số sample.
* Đặt Time Limit.
* Giảm độ phân giải khi render thử.
* Render một vùng nhỏ trước khi render toàn bộ.
* Chuyển sang Eevee nếu cần.

---

### 18.5. Hướng Sun không khớp với HDRI

Nếu Sun chiếu từ bên trái nhưng vùng mặt trời trong HDRI nằm bên phải, ánh sáng sẽ thiếu nhất quán.

**Cách khắc phục:**

1. Tạm giảm Background Strength về `0`.
2. Chỉnh Sun cho bóng đổ đúng hướng.
3. Tăng HDRI trở lại.
4. Xoay HDRI để vùng sáng khớp với Sun.

---

## 19. Quy trình thực hành đề xuất

### Bước 1 — Chuẩn bị workspace

* Mở Camera View.
* Mở một 3D Viewport riêng.
* Chuyển Shader Editor sang World.
* Bật Rendered View.

### Bước 2 — Kiểm tra HDRI

* Kiểm tra Environment Texture.
* Thêm Texture Coordinate và Mapping.
* Xoay Rotation Z.
* Chọn hướng ánh sáng đẹp nhất.

### Bước 3 — Thử với Eevee

* Điều chỉnh Ambient Occlusion.
* Giảm hoặc tăng HDRI Strength.
* Kiểm tra bóng đổ.

### Bước 4 — Thử với Cycles

* Chuyển sang GPU Compute.
* Bật Denoise.
* Đặt giới hạn khoảng 3 giây cho một frame thử nghiệm.
* Render một frame để đánh giá.

### Bước 5 — Tối ưu Eevee nếu Cycles quá chậm

* Thêm Sun.
* Đặt hướng Sun khớp với HDRI.
* Điều chỉnh Sun Strength.
* Giảm HDRI Strength để tăng độ tương phản.

### Bước 6 — Lưu dự án

Sau khi chọn được thiết lập ánh sáng phù hợp:

```text
File → Save
```

Nên lưu thêm một phiên bản dự phòng trước khi render animation.

---

## 20. Thử thách cuối bài

Thiết lập ánh sáng hoàn chỉnh cho scene và quyết định sử dụng:

* **Cycles** với HDRI và Denoise; hoặc
* **Eevee** với HDRI, Ambient Occlusion và đèn Sun bổ sung.

Hãy render thử ít nhất một frame trước khi quyết định.

### Câu hỏi tự đánh giá

1. Hướng ánh sáng có làm nổi bật máy bay không?
2. Các tòa nhà có bóng đổ rõ ràng không?
3. Scene có đủ độ tương phản không?
4. Vùng sáng có bị cháy không?
5. Vùng tối có còn nhìn thấy chi tiết không?
6. Thời gian render mỗi frame có phù hợp không?
7. HDRI và đèn Sun có cùng hướng chiếu sáng không?

---

## 21. Checklist thực hành

* [ ] Đã thiết lập Camera View và Rendered View.
* [ ] Đã chuyển Shader Editor sang World.
* [ ] Đã thêm hoặc kiểm tra Environment Texture.
* [ ] Đã thêm Texture Coordinate và Mapping.
* [ ] Đã thử xoay HDRI bằng Rotation Z.
* [ ] Đã điều chỉnh Background Strength.
* [ ] Đã kiểm tra Ambient Occlusion trong Eevee.
* [ ] Đã thử render một frame bằng Cycles.
* [ ] Đã bật GPU Compute nếu máy hỗ trợ.
* [ ] Đã bật Denoise.
* [ ] Đã ước tính tổng thời gian render animation.
* [ ] Đã thử thêm Sun nếu tiếp tục dùng Eevee.
* [ ] Đã cân bằng HDRI Strength và Sun Strength.
* [ ] Đã lưu file sau khi hoàn tất.

---

## 22. Tóm tắt bài học

Bài học tập trung vào việc hoàn thiện ánh sáng cho scene animation bằng HDRI.

Các điểm quan trọng nhất gồm:

* HDRI vừa cung cấp hình nền vừa chiếu sáng toàn bộ scene.
* Node Mapping cho phép xoay HDRI và thay đổi hướng ánh sáng.
* Eevee render nhanh nhưng có thể cần Ambient Occlusion và đèn Sun để tạo bóng rõ hơn.
* Cycles cho ánh sáng, bóng đổ và phản xạ chân thực hơn nhưng render chậm hơn.
* Denoise và Time Limit giúp kiểm soát thời gian render Cycles.
* Trước khi render toàn bộ animation, cần thử nghiệm một vài frame và ước tính tổng thời gian.
* Sau khi hoàn thành ánh sáng, lưu dự án để chuẩn bị cho bước render animation tiếp theo.

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
