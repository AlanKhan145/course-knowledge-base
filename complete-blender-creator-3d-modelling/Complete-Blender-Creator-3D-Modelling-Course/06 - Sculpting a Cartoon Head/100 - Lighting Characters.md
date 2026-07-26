# 100 — Lighting Characters

## Thiết lập ánh sáng cho nhân vật

| Thuộc tính              | Nội dung                                 |
| ----------------------- | ---------------------------------------- |
| **Module**              | Module 06 — Sculpting a Cartoon Head     |
| **Bài học**             | Lighting Characters                      |
| **Thời lượng**          | 10:26                                    |
| **Chủ đề chính**        | Thiết lập hệ thống ánh sáng ba điểm      |
| **Render Engine chính** | Eevee                                    |
| **Đối tượng thực hành** | Nhân vật đầu cartoon đã sculpt và tô màu |

---

## 1. Mục tiêu bài học

Sau bài học này, người học có thể:

* Hiểu nguyên lý của hệ thống **Three-Point Lighting**.
* Phân biệt vai trò của:

  * **Key Light** — đèn chính.
  * **Fill Light** — đèn bù.
  * **Back Light/Rim Light** — đèn hậu hoặc đèn viền.
* Thiết lập nhiều cửa sổ làm việc để vừa điều chỉnh đèn vừa quan sát Camera.
* Sử dụng **Area Light** để kiểm soát độ cứng và mềm của bóng.
* Điều chỉnh:

  * Vị trí đèn.
  * Góc chiếu.
  * Công suất.
  * Kích thước.
  * Màu sắc.
* Tạo ánh sáng có phong cách mạnh, bí hiểm và phù hợp với nhân vật phản diện.
* So sánh nhanh kết quả giữa Eevee và Cycles.
* Render một hình ảnh hoàn chỉnh để trình bày sản phẩm.

---

# 2. Khái niệm Three-Point Lighting

**Three-Point Lighting** là hệ thống ánh sáng gồm ba nguồn sáng chính được sử dụng phổ biến trong:

* Nhiếp ảnh chân dung.
* Điện ảnh.
* Hoạt hình.
* Trình bày sản phẩm.
* Render nhân vật 3D.

Ba nguồn sáng phối hợp với nhau để làm rõ hình khối, giữ lại chi tiết trong vùng tối và tách nhân vật khỏi hậu cảnh.

```text
                      BACK LIGHT
                   Đèn hậu/đèn viền
                           ↓
                    ┌────────────┐
                    │  NHÂN VẬT  │
                    └────────────┘
                       ↙        ↘
              KEY LIGHT       FILL LIGHT
               Đèn chính       Đèn bù

                         CAMERA
                            ↑
```

Một cách bố trí nhìn từ trên xuống:

```text
                         Back Light
                              │
                              ▼

              Fill Light → [Nhân vật] ← Key Light
                              │
                              ▼
                            Camera
```

> Trong bài học, hệ thống cuối cùng có thể sử dụng **bốn đèn** vì giảng viên thêm một Back Light thứ hai để tạo viền sáng cho cả hai bên nhân vật.

---

# 3. Vai trò của từng nguồn sáng

## 3.1. Key Light — Đèn chính

**Key Light** là nguồn sáng quan trọng nhất trong cảnh.

Nó quyết định:

* Hướng chiếu sáng chính.
* Hình dạng bóng đổ.
* Độ nổi của khuôn mặt.
* Cảm giác mạnh, mềm, đáng sợ hoặc thân thiện của nhân vật.

Trong bài học:

* Đèn được đặt phía trước nhân vật.
* Lệch sang một bên.
* Nằm cao hơn khuôn mặt.
* Hướng xuống phía nhân vật.
* Có màu vàng hoặc cam nhẹ để tạo cảm giác ấm.
* Sử dụng loại **Area Light**.
* Công suất khoảng **1000 W**.
* Kích thước tương đối nhỏ để tạo bóng cứng.

### Hiệu ứng

* Đèn nhỏ → bóng sắc, mạnh và rõ.
* Đèn lớn → bóng mềm và chuyển tiếp nhẹ.
* Đặt thấp → khuôn mặt có cảm giác bí hiểm hoặc đáng sợ.
* Đặt cao → ánh sáng tự nhiên và dễ đọc hơn.

---

## 3.2. Fill Light — Đèn bù

**Fill Light** được đặt ở phía đối diện Key Light.

Nhiệm vụ của nó là:

* Làm sáng nhẹ vùng tối.
* Giữ lại chi tiết trong phần khuôn mặt bị bóng che.
* Giảm độ tương phản quá mạnh.
* Tránh vùng tối bị đen hoàn toàn.

Trong bài học:

* Fill Light được tạo bằng cách nhân bản Key Light.
* Đặt ở phía đối diện.
* Có kích thước lớn để tạo ánh sáng mềm.
* Công suất thấp hơn Key Light rất nhiều.
* Màu đỏ hoặc đỏ cam nhẹ.
* Công suất được thử nghiệm trong khoảng:

  * 100 W.
  * 150 W.
  * 200 W.

Giảng viên lựa chọn khoảng **150 W** vì mức này đủ để thấy chi tiết nhưng không làm khuôn mặt bị phẳng.

### Nguyên tắc quan trọng

```text
Fill Light quá yếu
        ↓
Vùng tối mất chi tiết

Fill Light hợp lý
        ↓
Thấy chi tiết nhưng vẫn giữ tương phản

Fill Light quá mạnh
        ↓
Khuôn mặt phẳng, thiếu chiều sâu
```

---

## 3.3. Back Light/Rim Light — Đèn hậu hoặc đèn viền

Back Light được đặt phía sau nhân vật và hướng về phía nhân vật.

Nguồn sáng này tạo ra một đường viền sáng trên:

* Đầu.
* Tai.
* Vai.
* Sừng.
* Cằm.
* Silhouette của nhân vật.

Mục đích chính là:

* Tách nhân vật khỏi hậu cảnh.
* Làm rõ đường viền.
* Tăng cảm giác chiều sâu.
* Tạo phong cách điện ảnh hoặc hoạt hình.

Trong bài học:

* Sử dụng **Area Light** nhỏ.
* Đặt phía sau và lệch sang một bên.
* Hướng gần như ngang vào nhân vật.
* Công suất khoảng **3000 W**.
* Màu xanh lam.
* Kích thước nhỏ để ánh sáng có cường độ và đường viền rõ.

Giảng viên còn nhân bản Back Light để tạo thêm một đường viền ở phía còn lại.

---

# 4. Thiết lập Workspace

Để dễ điều chỉnh ánh sáng, bài học sử dụng hai cửa sổ 3D Viewport.

## Cửa sổ thứ nhất

Dùng để:

* Xem Camera.
* Quan sát kết quả ánh sáng.
* Kiểm tra bố cục cuối cùng.

## Cửa sổ thứ hai

Dùng để:

* Di chuyển đèn.
* Xoay đèn.
* Điều chỉnh vị trí trong không gian 3D.
* Quan sát cảnh từ trên xuống hoặc từ bên cạnh.

Sơ đồ bố trí:

```text
┌──────────────────────────┬──────────────────────────┐
│                          │                          │
│      CAMERA VIEW         │       3D VIEWPORT        │
│                          │                          │
│  Quan sát kết quả cuối   │  Di chuyển và chỉnh đèn │
│                          │                          │
└──────────────────────────┴──────────────────────────┘
```

---

# 5. Thiết lập Camera

## Bước 1: Chuyển sang Camera View

Nhấn:

```text
Numpad 0
```

## Bước 2: Khóa Camera theo góc nhìn

Nhấn `N` để mở Sidebar, sau đó vào:

```text
View
└── Lock
    └── Camera to View
```

Khi bật tùy chọn này, việc điều hướng trong Viewport sẽ đồng thời di chuyển Camera.

## Bước 3: Chọn bố cục chân dung

Điều chỉnh sao cho:

* Khuôn mặt nằm ở trung tâm.
* Sừng không bị cắt quá nhiều.
* Có thể cắt một phần thân dưới.
* Nhân vật chiếm phần lớn khung hình.
* Góc nhìn thể hiện rõ mắt, mũi và hình dạng khuôn mặt.

## Bước 4: Tắt Camera to View

Sau khi có bố cục phù hợp, tắt **Camera to View** để tránh vô tình làm thay đổi Camera trong lúc chỉnh ánh sáng.

---

# 6. Làm sạch cửa sổ Camera

Để quan sát ánh sáng rõ hơn:

* Chuyển sang **Rendered Preview**.
* Tắt Overlays.
* Tắt Gizmos.
* Ẩn Toolbar bằng phím `T`.
* Có thể đóng Timeline nếu không cần làm hoạt ảnh.

Kết quả là một cửa sổ Camera sạch, gần giống với khung hình render cuối.

---

# 7. Quy trình thiết lập ánh sáng

## 7.1. Bước 1 — Kiểm tra World Background

Trong **World Properties**, bài học sử dụng một màu nền xám đơn giản.

```text
World Properties
└── Surface
    └── Background
        ├── Color: Xám
        └── Strength: Mức cơ bản
```

Nền xám giúp:

* Dễ quan sát màu sắc của ánh sáng.
* Thấy rõ đường viền của nhân vật.
* Không gây phân tâm.
* Phù hợp với ánh sáng màu xanh và cam.

---

## 7.2. Bước 2 — Tạo Key Light

Chọn nguồn sáng có sẵn hoặc thêm một đèn mới:

```text
Shift + A
└── Light
    └── Area
```

Thiết lập:

| Thuộc tính  |                 Giá trị gợi ý |
| ----------- | ----------------------------: |
| Loại đèn    |                    Area Light |
| Vai trò     |                     Key Light |
| Power       |                 Khoảng 1000 W |
| Màu sắc     |            Vàng hoặc cam nhạt |
| Kích thước  |                 Tương đối nhỏ |
| Vị trí      | Phía trước, lệch sang một bên |
| Độ cao      |             Cao hơn khuôn mặt |
| Hướng chiếu |          Hướng xuống nhân vật |

### Điều chỉnh hướng Area Light

Area Light chỉ chiếu sáng theo một mặt.

Cần xoay đèn để mặt phát sáng hướng vào nhân vật. Có thể sử dụng:

```text
R
```

hoặc kéo điểm điều khiển hướng của đèn trong Viewport.

### Điều chỉnh bóng đổ

Độ mềm của bóng phụ thuộc nhiều vào kích thước Area Light:

```text
Area Light nhỏ
      ↓
Bóng cứng, cạnh sắc
      ↓
Phù hợp nhân vật bí hiểm

Area Light lớn
      ↓
Bóng mềm
      ↓
Phù hợp chân dung nhẹ nhàng
```

Trong bài học, Key Light được giữ khá nhỏ để tạo bóng rõ và tăng cảm giác đáng sợ.

---

## 7.3. Bước 3 — Tạo Fill Light

Nhân bản Key Light:

```text
Shift + D
```

Sau đó:

1. Di chuyển đèn sang phía đối diện.
2. Xoay đèn hướng vào nhân vật.
3. Tăng kích thước đèn.
4. Giảm công suất.
5. Đổi màu sang đỏ hoặc đỏ cam nhẹ.

| Thuộc tính  |                    Giá trị gợi ý |
| ----------- | -------------------------------: |
| Loại đèn    |                       Area Light |
| Vai trò     |                       Fill Light |
| Power       |                     Khoảng 150 W |
| Màu sắc     |                   Đỏ hoặc đỏ cam |
| Kích thước  |                              Lớn |
| Vị trí      |               Đối diện Key Light |
| Hướng chiếu | Hướng vào vùng tối của khuôn mặt |

Fill Light lớn tạo ánh sáng mềm và không sinh thêm nhiều bóng sắc.

---

## 7.4. Kiểm tra ảnh hưởng của Fill Light

Có thể ẩn tạm nguồn sáng bằng:

```text
H
```

Hiện lại tất cả đối tượng đã ẩn bằng:

```text
Alt + H
```

Quy trình kiểm tra:

```text
Bật Fill Light
      ↓
Quan sát vùng tối

Ẩn Fill Light
      ↓
So sánh độ tương phản

Hiện lại Fill Light
      ↓
Điều chỉnh Power
```

Việc bật và tắt từng đèn giúp đánh giá chính xác nguồn sáng đang đóng góp gì vào kết quả.

---

## 7.5. Bước 4 — Tạo Back Light

Tiếp tục nhân bản một Area Light:

```text
Shift + D
```

Di chuyển đèn ra phía sau nhân vật.

Thiết lập:

| Thuộc tính  |                   Giá trị gợi ý |
| ----------- | ------------------------------: |
| Loại đèn    |                      Area Light |
| Vai trò     |            Back Light/Rim Light |
| Power       |                   Khoảng 3000 W |
| Màu sắc     |                        Xanh lam |
| Kích thước  |                             Nhỏ |
| Vị trí      |     Phía sau, lệch sang một bên |
| Hướng chiếu | Hướng vào cạnh sau của nhân vật |

### Mục tiêu của Back Light

Back Light phải tạo được một đường viền sáng nhưng không chiếu quá nhiều vào mặt trước.

```text
Back Light đặt quá ngang
        ↓
Ánh sáng tràn lên cằm và khuôn mặt

Back Light đặt lệch về phía sau
        ↓
Viền sáng tập trung ở đầu, sừng và vai
```

Nếu ánh sáng xuất hiện quá nhiều trên cằm, hãy:

* Di chuyển đèn ra sau hơn.
* Xoay đèn lệch khỏi Camera.
* Giảm Power.
* Thu nhỏ vùng chiếu sáng bằng Spot Light nếu cần.

---

## 7.6. Bước 5 — Thêm Back Light thứ hai

Hệ thống ánh sáng ba điểm chỉ yêu cầu một Back Light, nhưng bài học nhân bản thêm một đèn hậu để tạo viền sáng ở phía còn lại.

```text
Back Light trái  →  Nhân vật  ←  Back Light phải
```

Đèn thứ hai giúp:

* Làm nổi bật vai.
* Tạo viền cho phía đối diện.
* Tăng cảm giác cân bằng.
* Làm silhouette rõ hơn.

Tuy nhiên, cần tránh để cả hai Back Light có cường độ quá mạnh vì nhân vật có thể bị bao quanh bởi viền sáng cháy.

---

# 8. Thông số ánh sáng tham khảo

| Đèn          | Loại |         Power | Kích thước | Màu sắc   | Vai trò                     |
| ------------ | ---- | ------------: | ---------- | --------- | --------------------------- |
| Key Light    | Area | Khoảng 1000 W | Nhỏ        | Vàng/cam  | Định hình khuôn mặt         |
| Fill Light   | Area |  Khoảng 150 W | Lớn        | Đỏ/đỏ cam | Làm sáng vùng tối           |
| Back Light 1 | Area | Khoảng 3000 W | Nhỏ        | Xanh lam  | Tạo viền phía sau           |
| Back Light 2 | Area |     Tùy chỉnh | Nhỏ        | Xanh lam  | Tạo thêm viền phía đối diện |

> Các giá trị trên không phải công thức cố định. Kết quả còn phụ thuộc vào khoảng cách giữa đèn và nhân vật, kích thước mô hình, Color Management và Render Engine.

---

# 9. Ảnh hưởng của khoảng cách

Khoảng cách giữa nguồn sáng và nhân vật ảnh hưởng trực tiếp đến độ sáng.

```text
Đưa đèn lại gần
      ↓
Ánh sáng mạnh hơn

Đưa đèn ra xa
      ↓
Ánh sáng yếu hơn
```

Vì vậy, không nên chỉ điều chỉnh Power. Có thể phối hợp:

* Power.
* Distance.
* Size.
* Rotation.
* Color.
* Exposure của cảnh.

---

# 10. Thử nghiệm vị trí ánh sáng

Sau khi hoàn thành hệ thống cơ bản, bài học khuyến khích thử nhiều vị trí khác nhau.

## 10.1. Đặt Fill Light thấp

Khi Fill Light đặt dưới khuôn mặt và hướng lên:

* Khuôn mặt trở nên bí hiểm.
* Các hốc mắt nổi bật hơn.
* Bóng đổ có cảm giác không tự nhiên.
* Phù hợp với nhân vật phản diện hoặc kinh dị.

## 10.2. Đặt Fill Light cao

Khi Fill Light đặt cao:

* Ánh sáng tự nhiên hơn.
* Trán và sừng được chiếu rõ.
* Vùng mặt dưới vẫn giữ được độ tối.

## 10.3. Đặt Key Light thấp

Key Light chiếu từ dưới lên có thể tạo cảm giác:

* Đáng sợ.
* Kỳ lạ.
* Không ổn định.
* Giống ánh sáng sân khấu hoặc ánh sáng từ ngọn lửa.

## 10.4. Đổi màu Key Light

Một số màu có thể thử nghiệm:

| Màu       | Cảm giác            |
| --------- | ------------------- |
| Vàng nhạt | Ấm áp, tự nhiên     |
| Cam       | Mạnh, điện ảnh      |
| Đỏ        | Nguy hiểm, hung dữ  |
| Xanh lam  | Lạnh, bí ẩn         |
| Xanh lá   | Ma quái, độc hại    |
| Tím       | Huyền bí, giả tưởng |

---

# 11. Phối màu ánh sáng

Bài học sử dụng cặp màu tương phản:

```text
Key Light  → Vàng/cam  → Ánh sáng ấm
Fill Light → Đỏ        → Tăng cảm giác dữ dội
Back Light → Xanh lam  → Ánh sáng lạnh
```

Sự kết hợp ánh sáng nóng và lạnh tạo ra độ tương phản màu:

```text
Ánh sáng ấm phía trước
          +
Ánh sáng lạnh phía sau
          ↓
Nhân vật nổi bật và có chiều sâu
```

Đây là cách phối màu thường thấy trong:

* Poster phim.
* Game fantasy.
* Cinematic render.
* Concept art.
* Chân dung nhân vật stylized.

---

# 12. Screen Space Reflections

Trong bài học, giảng viên bật **Screen Space Reflections** trong Render Properties.

Mục đích là tăng khả năng hiển thị phản xạ trên:

* Mắt.
* Sừng.
* Các vật liệu bóng.
* Bề mặt có độ phản chiếu cao.

Hiệu ứng trong cảnh này không quá rõ, nhưng có thể tạo thêm điểm sáng nhỏ trong mắt, giúp nhân vật có sức sống hơn.

> Tùy phiên bản Blender và cấu hình Eevee, tên hoặc vị trí của tùy chọn phản xạ có thể khác nhau.

---

# 13. So sánh Eevee và Cycles

## Eevee

Trong bài học, Eevee cho kết quả:

* Ánh sáng có cường độ mạnh.
* Màu sắc nổi bật.
* Xem trước gần như tức thì.
* Phù hợp với nhân vật stylized.
* Dễ thử nghiệm nhiều vị trí đèn.

## Cycles

Khi chuyển sang Cycles:

* Ánh sáng trông mềm hơn.
* Hiệu ứng bớt dữ dội.
* Nhiễu xuất hiện trong quá trình xem trước.
* Có thể cần bật Denoise.
* Có thể cần điều chỉnh lại công suất và kích thước đèn.

| Tiêu chí        | Eevee                      | Cycles                  |
| --------------- | -------------------------- | ----------------------- |
| Tốc độ          | Rất nhanh                  | Chậm hơn                |
| Xem trước       | Gần như tức thì            | Cần lấy mẫu             |
| Ánh sáng        | Mạnh, rõ, stylized         | Tự nhiên, mềm           |
| Phản xạ         | Xấp xỉ theo thời gian thực | Chính xác hơn           |
| Phù hợp bài học | Rất phù hợp                | Dùng để thử nghiệm thêm |

Trong trường hợp này, giảng viên chọn **Eevee** vì nó giữ được độ mạnh và phong cách của ánh sáng tốt hơn cho nhân vật cartoon.

---

# 14. Phím tắt và công cụ liên quan

| Phím/Công cụ          | Chức năng                                 |
| --------------------- | ----------------------------------------- |
| `Shift + A`           | Thêm đối tượng hoặc nguồn sáng            |
| `Shift + D`           | Nhân bản nguồn sáng                       |
| `G`                   | Di chuyển đèn                             |
| `R`                   | Xoay đèn                                  |
| `S`                   | Thay đổi kích thước                       |
| `H`                   | Ẩn đèn đang chọn                          |
| `Alt + H`             | Hiện lại tất cả đối tượng bị ẩn           |
| `N`                   | Mở hoặc đóng Sidebar                      |
| `T`                   | Mở hoặc đóng Toolbar                      |
| `Numpad 0`            | Chuyển sang Camera View                   |
| `Z` → Rendered        | Chuyển sang Rendered Preview              |
| Light Data Properties | Điều chỉnh loại đèn, Power, Size và Color |
| World Properties      | Điều chỉnh màu và cường độ nền            |
| Render Properties     | Chọn Eevee/Cycles và cấu hình render      |

---

# 15. Lỗi thường gặp

## 15.1. Key Light quá trực diện

### Hiện tượng

* Hai bên khuôn mặt sáng gần như nhau.
* Bóng đổ rất ít.
* Hình khối không rõ.

### Cách khắc phục

* Di chuyển Key Light lệch sang một bên.
* Đặt đèn cao hơn.
* Giảm kích thước để tăng độ rõ của bóng.

---

## 15.2. Key Light quá nhỏ

### Hiện tượng

* Bóng quá cứng.
* Khuôn mặt có nhiều mảng tối sắc.
* Chi tiết bị chia cắt mạnh.

### Cách khắc phục

* Tăng Size của Area Light.
* Đưa đèn lại gần rồi giảm Power.
* Thêm Fill Light nhẹ.

---

## 15.3. Fill Light quá mạnh

### Hiện tượng

* Mất phần lớn bóng đổ.
* Khuôn mặt trông phẳng.
* Không còn cảm giác chiều sâu.

### Cách khắc phục

* Giảm Power.
* Đưa đèn ra xa.
* Tăng kích thước nhưng giảm cường độ.
* Ẩn đèn bằng `H` để so sánh trước và sau.

---

## 15.4. Fill Light quá yếu

### Hiện tượng

* Một nửa khuôn mặt gần như đen.
* Không thấy chi tiết mắt, tai hoặc má.
* Màu vật liệu bị mất trong vùng tối.

### Cách khắc phục

* Tăng Power từ từ.
* Đưa đèn lại gần.
* Điều chỉnh góc chiếu vào vùng tối.

---

## 15.5. Back Light không tạo được viền

### Nguyên nhân

* Đèn chưa hướng đúng vào nhân vật.
* Đèn nằm chính giữa phía sau.
* Đèn bị nhân vật che hoàn toàn.
* Power quá thấp.
* Nền quá sáng.

### Cách khắc phục

* Di chuyển Back Light lệch sang một bên.
* Đưa đèn lên cao hoặc xuống thấp.
* Tăng Power.
* Giảm độ sáng của World Background.

---

## 15.6. Back Light làm cháy sáng

### Hiện tượng

* Viền sáng quá dày.
* Sừng và vai mất màu.
* Một phần khuôn mặt bị ánh sáng xanh phủ lên.

### Cách khắc phục

* Giảm Power.
* Di chuyển đèn ra xa.
* Xoay đèn về phía sau nhiều hơn.
* Tăng kích thước nếu muốn viền sáng mềm hơn.
* Chỉ giữ một Back Light nếu đèn thứ hai không cần thiết.

---

## 15.7. Ánh sáng có màu quá bão hòa

### Hiện tượng

* Da nhân vật bị đổi màu hoàn toàn.
* Màu vật liệu gốc không còn rõ.
* Ánh sáng đỏ hoặc xanh trở nên gắt.

### Cách khắc phục

* Giảm Saturation của màu đèn.
* Dùng màu gần trắng nhưng hơi lệch về màu mong muốn.
* Giảm Power của đèn màu.
* Giữ Key Light có màu trung tính hơn.

---

## 15.8. Cycles khác Eevee quá nhiều

Đây là hiện tượng bình thường vì hai Render Engine xử lý ánh sáng khác nhau.

Khi chuyển sang Cycles, cần kiểm tra lại:

* Power của từng đèn.
* Kích thước nguồn sáng.
* Exposure.
* Color Management.
* Số lượng Sample.
* Denoise.

---

# 16. Quy trình thực hành hoàn chỉnh

```text
Chuẩn bị nhân vật đã tô màu
           ↓
Thiết lập Camera
           ↓
Chia Viewport thành hai cửa sổ
           ↓
Chuyển Camera View sang Rendered Preview
           ↓
Tạo Key Light màu vàng/cam
           ↓
Tạo Fill Light màu đỏ, công suất thấp
           ↓
Tạo Back Light màu xanh, công suất cao
           ↓
Kiểm tra từng đèn bằng H và Alt + H
           ↓
Thử nghiệm vị trí, màu và khoảng cách
           ↓
Thêm Back Light thứ hai nếu cần
           ↓
Kiểm tra phản xạ trên mắt và sừng
           ↓
So sánh Eevee với Cycles
           ↓
Lưu file và render kết quả
```

---

# 17. Bài tập thực hành

Hãy tạo ít nhất ba phiên bản ánh sáng khác nhau cho cùng một nhân vật.

## Phiên bản 1 — Ánh sáng tiêu chuẩn

* Key Light màu vàng nhạt.
* Fill Light màu trung tính.
* Back Light màu trắng.
* Độ tương phản vừa phải.

## Phiên bản 2 — Nhân vật phản diện

* Key Light màu cam hoặc đỏ.
* Fill Light màu đỏ tối.
* Back Light màu xanh lam mạnh.
* Bóng đổ tương đối cứng.

## Phiên bản 3 — Phong cách ma quái

* Key Light đặt thấp.
* Fill Light màu xanh lá.
* Back Light màu tím hoặc xanh lam.
* World Background tối.

Sau đó so sánh:

* Phiên bản nào thể hiện hình khối rõ nhất?
* Phiên bản nào phù hợp với tính cách nhân vật?
* Đèn nào gây ảnh hưởng lớn nhất?
* Màu sắc nào làm vật liệu mắt và sừng nổi bật nhất?

---

# 18. Thử thách nâng cao

Có thể mở rộng bài tập bằng cách:

* Animate Camera quay quanh nhân vật.
* Animate cường độ đèn.
* Animate màu Back Light.
* Tạo một vòng quay Turntable.
* Thêm nền Gradient.
* Thêm mặt phẳng nền phía sau.
* Sử dụng Depth of Field.
* Thêm Bloom hoặc Glare trong Compositor.
* Render nhiều góc Camera.
* So sánh kết quả giữa Eevee và Cycles.

Ví dụ quy trình Turntable:

```text
Nhân vật đứng yên
      +
Camera quay quanh nhân vật
      +
Ánh sáng giữ nguyên
      ↓
Video trình bày model 360°
```

---

# 19. Checklist thực hành

## Camera và bố cục

* [ ] Camera đã đặt ở góc nhìn phù hợp.
* [ ] Nhân vật chiếm phần lớn khung hình.
* [ ] Không cắt mất các chi tiết quan trọng.
* [ ] Đã tắt Camera to View sau khi hoàn thành bố cục.
* [ ] Camera View đã được chuyển sang Rendered Preview.

## Key Light

* [ ] Key Light nằm phía trước và lệch sang một bên.
* [ ] Đèn được đặt cao hơn khuôn mặt.
* [ ] Màu vàng hoặc cam không quá bão hòa.
* [ ] Power đủ để định hình khuôn mặt.
* [ ] Bóng đổ có độ cứng phù hợp.

## Fill Light

* [ ] Fill Light nằm đối diện Key Light.
* [ ] Kích thước đèn đủ lớn để tạo ánh sáng mềm.
* [ ] Power thấp hơn Key Light.
* [ ] Vùng tối vẫn còn nhưng không mất chi tiết.
* [ ] Khuôn mặt không bị chiếu sáng quá phẳng.

## Back Light

* [ ] Back Light nằm phía sau nhân vật.
* [ ] Đèn lệch sang một bên để tạo đường viền.
* [ ] Màu xanh làm nổi silhouette.
* [ ] Viền sáng không bị cháy.
* [ ] Có thể nhìn rõ sừng, đầu và vai trên nền.

## Hoàn thiện

* [ ] Đã bật/tắt từng đèn để kiểm tra ảnh hưởng.
* [ ] Đã thử nghiệm nhiều vị trí ánh sáng.
* [ ] Đã kiểm tra phản xạ trên mắt.
* [ ] Đã so sánh Eevee và Cycles.
* [ ] Đã lưu file Blender.
* [ ] Đã render một hình ảnh hoàn chỉnh.

---

# 20. Tóm tắt bài học

Bài học hướng dẫn sử dụng hệ thống **Three-Point Lighting** để trình bày một nhân vật 3D:

* **Key Light** tạo ánh sáng chính và định hình khuôn mặt.
* **Fill Light** làm sáng nhẹ vùng tối nhưng vẫn giữ tương phản.
* **Back Light** tạo đường viền để tách nhân vật khỏi hậu cảnh.
* Kích thước Area Light quyết định độ mềm hoặc cứng của bóng.
* Khoảng cách và Power đều ảnh hưởng đến cường độ ánh sáng.
* Màu cam, đỏ và xanh có thể kết hợp để tạo phong cách điện ảnh.
* Có thể thêm Back Light thứ hai để làm rõ cả hai bên silhouette.
* Eevee phù hợp để thử nghiệm và render nhanh nhân vật stylized.
* Ánh sáng không có một công thức cố định; cần liên tục thử nghiệm vị trí, màu sắc và cường độ.

Mục tiêu cuối cùng không chỉ là làm nhân vật sáng hơn mà là sử dụng ánh sáng để thể hiện:

* Hình khối.
* Tính cách.
* Tâm trạng.
* Điểm tập trung.
* Cảm giác chiều sâu của cảnh.
