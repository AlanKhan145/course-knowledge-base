# 021 — Compositing & Glow

| Thuộc tính                | Nội dung                                                  |
| ------------------------- | --------------------------------------------------------- |
| **Module**                | Module 01 — Introduction & Setup                          |
| **Bài học**               | Compositing & Glow                                        |
| **Thời lượng**            | 9:35                                                      |
| **Chủ đề chính**          | Hậu kỳ hình ảnh bằng Compositor và tạo hiệu ứng phát sáng |
| **Công cụ chính**         | Render Layers, Glare, Viewer, Composite                   |
| **Render Engine sử dụng** | Eevee                                                     |

---

## 1. Mục tiêu bài học

Sau bài học này, người học có thể:

* Làm quen với **Compositing Workspace** và hệ thống xử lý ảnh bằng node của Blender.
* Hiểu luồng xử lý hình ảnh từ ảnh render đến kết quả cuối cùng.
* Sử dụng node **Viewer** để xem trước hiệu ứng trong Compositor.
* Thêm node **Glare** để tạo hiệu ứng:

  * Bloom.
  * Fog Glow.
  * Streaks.
* Hiểu và điều chỉnh các tham số quan trọng như:

  * Strength.
  * Threshold.
  * Size.
  * Saturation.
  * Tint.
  * Quality.
* Kết nối hiệu ứng vào node **Composite** để hiệu ứng xuất hiện trong ảnh render cuối.
* Xếp chồng nhiều node Glare để tạo hiệu ứng ánh sáng phức tạp hơn.
* So sánh nhanh kết quả giữa **Eevee** và **Cycles**.

---

## 2. Compositing là gì?

**Compositing** là quá trình xử lý hậu kỳ hình ảnh sau khi scene đã được render.

Khác với Shader Editor dùng để tạo vật liệu cho vật thể 3D, Compositor làm việc trực tiếp trên hình ảnh 2D đã render.

Compositor có thể được sử dụng để:

* Tạo glow hoặc bloom.
* Tạo tia sáng.
* Điều chỉnh màu sắc.
* Tăng hoặc giảm độ tương phản.
* Làm mờ hình ảnh.
* Ghép nhiều lớp hình ảnh.
* Xử lý nền xanh bằng keying.
* Kết hợp nhiều Render Pass.
* Tạo hiệu ứng điện ảnh.

### Luồng xử lý cơ bản

```text
Scene 3D
   │
   ▼
Render bằng Eevee hoặc Cycles
   │
   ▼
Render Layers
   │
   ▼
Các node xử lý hậu kỳ
   │
   ├──────────────► Viewer
   │                Xem trước kết quả
   │
   ▼
Composite
Ảnh render cuối cùng
```

---

## 3. Chuẩn bị góc camera

Trước khi compositing, cần kiểm tra lại bố cục của ảnh render.

Trong bài học, camera được điều chỉnh nhẹ để:

* Đường chân trời nằm gần giữa khung hình hơn.
* Phần phản chiếu trên mặt nước được nhìn thấy rõ hơn.
* Ngọn hải đăng vẫn là chủ thể chính.
* Các ngôi nhà có đủ không gian để tạo ánh sáng phụ.

Để điều chỉnh camera theo góc nhìn hiện tại:

1. Chuyển sang góc nhìn Camera.
2. Bật lại **Gizmos** nếu chúng đang bị ẩn.
3. Mở Sidebar bằng phím `N`.
4. Bật **Lock Camera to View**.
5. Điều chỉnh góc nhìn như khi điều hướng viewport.
6. Tắt **Lock Camera to View** sau khi hoàn tất.

> Nên tắt khóa camera sau khi căn chỉnh để tránh vô tình làm thay đổi bố cục.

---

## 4. Chuyển sang Compositing Workspace

Chọn workspace **Compositing** trên thanh workspace phía trên giao diện Blender.

Trong workspace này thường có:

* Compositor Node Editor.
* Image Editor hoặc khu vực xem ảnh.
* Dope Sheet ở phía dưới.

Dope Sheet chủ yếu phục vụ animation nên trong bài học có thể thu nhỏ hoặc đóng lại để dành thêm không gian cho Compositor.

---

## 5. Khác biệt giữa các phiên bản Blender

Giao diện Compositor có thể hơi khác nhau tùy phiên bản Blender.

### Blender 4.x

Trong nhiều phiên bản Blender 4.x, người dùng cần bật:

```text
Use Nodes
```

Sau khi bật, Blender tạo hai node cơ bản:

```text
Render Layers ─────────► Composite
```

Node Viewer thường phải được thêm thủ công.

### Blender 5

Theo giao diện được giới thiệu trong bài học:

* Nút **New** xuất hiện thay cho **Use Nodes**.
* Blender có thể tạo sẵn:

  * Render Layers.
  * Group Output hoặc Composite Output.
  * Viewer.
* Một số hiệu ứng có thể được kéo trực tiếp từ khu vực công cụ phía dưới vào Compositor.

Mặc dù giao diện khởi tạo khác nhau, nguyên tắc xử lý node vẫn giống nhau:

```text
Đầu vào ảnh → Hiệu ứng → Đầu ra
```

---

## 6. Render ảnh trước khi compositing

Compositor cần có dữ liệu hình ảnh để xử lý.

Nhấn:

```text
F12
```

hoặc chọn:

```text
Render → Render Image
```

Blender sẽ render scene từ góc nhìn của camera hiện tại.

Nếu chưa render, node Render Layers có thể chưa chứa ảnh và khu vực xem trước sẽ không hiển thị kết quả mong muốn.

---

## 7. Kiểm tra đối tượng có xuất hiện trong render

Trong Outliner, một object có thể bị ẩn khỏi viewport nhưng vẫn xuất hiện trong ảnh render.

Hai biểu tượng thường cần chú ý:

| Biểu tượng | Chức năng                                                  |
| ---------- | ---------------------------------------------------------- |
| **Eye**    | Hiển thị hoặc ẩn object trong viewport                     |
| **Camera** | Cho phép hoặc không cho phép object xuất hiện trong render |

Ví dụ:

```text
Eye tắt + Camera bật
        ↓
Không thấy trong viewport
Nhưng vẫn xuất hiện khi render
```

Vì vậy, nếu ảnh render xuất hiện vật thể không mong muốn, hãy kiểm tra biểu tượng camera trong Outliner.

---

## 8. Node Render Layers và Composite

Sau khi bật hệ thống node, Compositor có luồng cơ bản:

```text
┌──────────────────┐        ┌──────────────────┐
│  Render Layers   │───────►│    Composite     │
│                  │ Image  │                  │
└──────────────────┘        └──────────────────┘
```

### Render Layers

Node **Render Layers** là đầu vào của Compositor.

Nó chứa:

* Ảnh vừa render.
* Alpha.
* Các Render Pass nếu được bật.
* Thông tin từ View Layer hiện tại.

### Composite

Node **Composite** là đầu ra chính thức của Compositor.

Chỉ những node được nối vào Composite mới xuất hiện trong kết quả render cuối cùng.

> Viewer chỉ dùng để xem trước. Composite mới quyết định ảnh đầu ra.

---

## 9. Thêm Viewer Node

Để xem kết quả trong Compositor, thêm node Viewer:

```text
Shift + A → Output → Viewer
```

Hoặc:

1. Nhấn `Shift + A`.
2. Gõ từ khóa `Viewer`.
3. Chọn node Viewer.

Nối cổng Image của Render Layers với cổng Image của Viewer:

```text
Render Layers.Image ─────────► Viewer.Image
```

Các cổng màu vàng biểu thị dữ liệu hình ảnh hoặc màu sắc.

```text
Cổng vàng ─────────► Cổng vàng
```

Sau khi kết nối, ảnh render có thể được hiển thị dưới dạng Backdrop hoặc trong Image Editor.

---

## 10. Sử dụng Backdrop

Bật tùy chọn:

```text
Backdrop
```

để hiển thị ảnh Viewer phía sau các node.

### Ưu điểm

* Quan sát hiệu ứng ngay trong Node Editor.
* Không cần mở cửa sổ render liên tục.
* Dễ đánh giá thay đổi khi chỉnh node.

### Hạn chế

* Ảnh nền có thể làm các node khó nhìn.
* Dễ gây rối khi mạng node phức tạp.
* Không thuận tiện khi cần xem ảnh ở kích thước lớn.

Trong bài học, Backdrop được tắt và một khu vực riêng được dùng làm Image Editor.

---

## 11. Tạo cửa sổ xem kết quả riêng

Có thể chia giao diện thành hai khu vực:

```text
┌──────────────────────────┬───────────────────────┐
│                          │                       │
│    Compositor Nodes      │     Image Editor      │
│                          │                       │
│ Render Layers → Glare    │  Hiển thị Viewer Node │
│                          │                       │
└──────────────────────────┴───────────────────────┘
```

Cách thực hiện:

1. Đưa chuột đến góc của một khu vực.
2. Khi con trỏ chuyển thành hình dấu cộng hoặc crosshair, kéo để chia cửa sổ.
3. Đổi Editor Type của cửa sổ mới thành **Image Editor**.
4. Trong danh sách ảnh, chọn:

```text
Viewer Node
```

Cách bố trí này giúp:

* Node Editor có nhiều không gian hơn.
* Kết quả được hiển thị rõ ràng bên cạnh.
* Dễ điều chỉnh hiệu ứng theo thời gian thực.

---

## 12. Thêm Glare Node

Node Glare nằm trong nhóm Filter:

```text
Shift + A → Filter → Glare
```

Chèn node Glare giữa Render Layers và đầu ra:

```text
┌──────────────────┐
│  Render Layers   │
└────────┬─────────┘
         │ Image
         ▼
┌──────────────────┐
│      Glare       │
└────────┬─────────┘
         │ Image
         ├────────────► Viewer
         │
         └────────────► Composite
```

Khi kéo một node lên đường kết nối, Blender thường tự động chèn node đó vào luồng xử lý.

Các đường nối giữa node thường được gọi vui là **noodles**.

---

## 13. Viewer và Composite khác nhau như thế nào?

Giả sử Glare chỉ được nối vào Viewer:

```text
Render Layers → Glare → Viewer
       │
       └──────────────→ Composite
```

Kết quả:

* Viewer hiển thị hiệu ứng Glare.
* Ảnh render cuối vẫn không có Glare.
* Nhấn `F12` vẫn thấy kết quả gốc.

Để hiệu ứng xuất hiện trong ảnh cuối, phải nối đầu ra Glare vào Composite:

```text
                 ┌────────► Viewer
Render Layers → Glare
                 └────────► Composite
```

Đây là lỗi rất thường gặp khi mới học Compositor.

---

## 14. Các chế độ của Glare Node

Node Glare cung cấp nhiều kiểu hiệu ứng ánh sáng.

| Chế độ       | Đặc điểm                                           | Ứng dụng                                     |
| ------------ | -------------------------------------------------- | -------------------------------------------- |
| **Bloom**    | Ánh sáng lan đều và mềm quanh vùng sáng            | Đèn, biển hiệu, vật liệu phát sáng           |
| **Fog Glow** | Ánh sáng khuếch tán nhẹ như sương                  | Đèn hải đăng, đèn đêm, cảnh điện ảnh         |
| **Streaks**  | Tạo các tia sáng kéo dài                           | Lens flare, ánh sáng mạnh, phong cách sci-fi |
| **Ghosts**   | Tạo các bóng sáng phụ giống phản xạ trong ống kính | Hiệu ứng camera hoặc lens flare              |

Trong bài học, hai chế độ chính được thử nghiệm là:

```text
Bloom
Fog Glow
```

Sau đó bổ sung thêm một lớp:

```text
Streaks
```

---

## 15. Bloom

**Bloom** tạo ánh sáng lan đều quanh những vùng có cường độ sáng cao.

Ưu điểm:

* Tính toán nhanh.
* Dễ nhìn thấy kết quả.
* Phù hợp với đèn nhỏ.
* Tạo cảm giác vật thể đang thực sự phát sáng.

Bloom trong scene ngọn hải đăng làm:

* Đèn trên đỉnh hải đăng sáng hơn.
* Ánh sáng từ cửa sổ các ngôi nhà nổi bật hơn.
* Scene có cảm giác sống động hơn.

Tuy nhiên, nếu Strength quá cao, hình ảnh sẽ bị:

* Cháy sáng.
* Mất chi tiết.
* Mờ toàn bộ vùng xung quanh.
* Trông thiếu tự nhiên.

---

## 16. Fog Glow

**Fog Glow** tạo vùng sáng lan tỏa mềm và có cảm giác giống ánh sáng xuyên qua sương.

Trong bài học, Fog Glow được lựa chọn thay cho Bloom vì:

* Hiệu ứng tinh tế hơn.
* Ánh sáng không lan quá mạnh.
* Phù hợp với không khí đêm trên biển.
* Làm đèn hải đăng nổi bật mà vẫn giữ được chi tiết.
* Tạo một chút glow cho cửa sổ các ngôi nhà.

```text
Vùng sáng mạnh
      │
      ▼
Fog Glow
      │
      ▼
Quầng sáng mềm và mờ
```

---

## 17. Các tham số quan trọng của Glare

### 17.1. Strength

**Strength** quyết định cường độ của hiệu ứng phát sáng.

```text
Strength thấp
→ Glow nhẹ, tự nhiên

Strength cao
→ Glow mạnh, dễ cháy sáng
```

Nên bắt đầu với giá trị thấp, sau đó tăng từ từ.

---

### 17.2. Threshold

**Threshold** là ngưỡng độ sáng để Glare bắt đầu tác động.

Chỉ những pixel có độ sáng vượt qua Threshold mới được tạo hiệu ứng.

```text
Độ sáng pixel > Threshold
               ↓
          Có hiệu ứng Glare
```

```text
Độ sáng pixel ≤ Threshold
               ↓
        Không có hiệu ứng Glare
```

Ví dụ trong scene:

* Đèn hải đăng có cường độ sáng cao.
* Cửa sổ nhà có cường độ sáng thấp hơn.

Khi tăng Threshold:

```text
Threshold thấp
→ Đèn hải đăng phát sáng
→ Cửa sổ nhà cũng phát sáng

Threshold cao
→ Cửa sổ dần mất glow
→ Chỉ đèn hải đăng còn glow
```

Trong bài học:

* Khi Threshold tăng lên khoảng `2`, glow ở các ngôi nhà gần như biến mất.
* Giá trị khoảng `0.2` được sử dụng để giữ một chút glow cho cả nhà và hải đăng.

> Giá trị phù hợp phụ thuộc vào độ mạnh của vật liệu Emission và hệ thống ánh sáng trong scene.

---

### 17.3. Size

**Size** kiểm soát phạm vi lan tỏa của quầng sáng.

```text
Size nhỏ
→ Glow gọn và tập trung

Size lớn
→ Glow lan rộng hơn
```

Trong bài học, kích thước glare được giữ ở mức tương đối vừa phải, khoảng `0.4` theo giao diện đang sử dụng.

Không nên đặt quá lớn vì ánh sáng có thể che mất:

* Hình dáng đèn.
* Phần mái hải đăng.
* Chi tiết các ngôi nhà.
* Vùng phản chiếu trên mặt nước.

---

### 17.4. Saturation

**Saturation** điều chỉnh độ đậm của màu trong vùng glow.

```text
Saturation thấp
→ Glow gần trắng hoặc nhạt màu

Saturation cao
→ Màu ánh sáng rõ và đậm hơn
```

Nếu ánh sáng quá vàng hoặc quá rực, có thể giảm Saturation để tạo kết quả tự nhiên hơn.

---

### 17.5. Tint

**Tint** thay đổi sắc màu của hiệu ứng Glare.

Ví dụ:

* Kéo về vàng để tạo ánh sáng ấm.
* Kéo về xanh để tạo ánh sáng lạnh.
* Giữ gần trung tâm để màu không bị thay đổi quá nhiều.

Trong bài học, Tint được thử kéo nhẹ về màu vàng để tăng cảm giác ấm áp, sau đó giảm lại để hiệu ứng không quá bão hòa.

---

### 17.6. Quality

Quality quyết định chất lượng tính toán của hiệu ứng.

| Mức        | Đặc điểm                                         |
| ---------- | ------------------------------------------------ |
| **Low**    | Nhanh hơn nhưng chi tiết glow thấp hơn           |
| **Medium** | Cân bằng giữa tốc độ và chất lượng               |
| **High**   | Kết quả mượt và chi tiết hơn nhưng xử lý lâu hơn |

Đối với ảnh cuối, có thể chuyển sang:

```text
Quality: High
```

---

## 18. Thiết lập Glare gợi ý cho scene

Một thiết lập tham khảo theo bài học:

| Tham số        | Giá trị hoặc lựa chọn          |
| -------------- | ------------------------------ |
| **Type**       | Fog Glow                       |
| **Quality**    | High                           |
| **Strength**   | Mức vừa phải                   |
| **Threshold**  | Khoảng `0.2`                   |
| **Size**       | Khoảng `0.4`                   |
| **Saturation** | Giảm nhẹ nếu ánh sáng quá vàng |
| **Tint**       | Hơi nghiêng về màu vàng ấm     |

Đây không phải giá trị bắt buộc. Người học nên điều chỉnh dựa trên scene của mình.

---

## 19. Sơ đồ node hoàn chỉnh

### Một lớp Fog Glow

```text
┌────────────────────┐
│   Render Layers    │
│                    │
│ Image              │
└─────────┬──────────┘
          │
          ▼
┌────────────────────┐
│       Glare        │
│                    │
│ Type: Fog Glow     │
│ Quality: High      │
│ Threshold: ~0.2    │
│ Size: ~0.4         │
└─────────┬──────────┘
          │
          ├────────────────────► Viewer
          │
          └────────────────────► Composite
```

### Ý nghĩa

* **Render Layers** cung cấp ảnh đầu vào.
* **Glare** tạo quầng sáng.
* **Viewer** dùng để xem trước.
* **Composite** tạo kết quả render cuối.

---

## 20. Render lại để kiểm tra kết quả

Sau khi kết nối Glare vào Composite, nhấn:

```text
F12
```

Ảnh render cuối sẽ bao gồm hiệu ứng compositing.

Nếu kết quả render không giống Viewer, hãy kiểm tra:

1. Glare có nối vào Composite không?
2. Composite có đang dùng đúng đầu ra không?
3. Viewer và Composite có nhận cùng một luồng node không?
4. Scene đã được render lại chưa?
5. Có node nào đang bị Mute không?

---

## 21. Thử nghiệm với Cycles

Sau khi hoàn thành hiệu ứng trong Eevee, bài học thử chuyển sang **Cycles** để so sánh.

Các thiết lập được thử nghiệm gồm:

* Render Engine: Cycles.
* Device: GPU.
* Bật Denoise cho viewport.
* Bật Denoise cho render.
* Sử dụng OptiX nếu card đồ họa hỗ trợ.
* Đặt Time Limit khoảng 3 giây để render thử nhanh.

### Kết quả

Cycles tạo phản chiếu trên mặt đất hoặc mặt nước mạnh hơn.

Tuy nhiên, đối với scene hiện tại:

* Ánh sáng chưa được thiết lập tối ưu cho Cycles.
* Cường độ đèn cần được điều chỉnh lại.
* Phản chiếu mạnh chưa chắc làm ảnh đẹp hơn.
* Thời gian render cao hơn.
* Eevee đã cho kết quả phù hợp với phong cách low-poly.

Vì vậy, bài học quay lại sử dụng Eevee.

### Kết luận so sánh

| Tiêu chí               | Eevee         | Cycles                 |
| ---------------------- | ------------- | ---------------------- |
| Tốc độ                 | Nhanh         | Chậm hơn               |
| Phù hợp scene hiện tại | Cao           | Cần chỉnh lại ánh sáng |
| Phản chiếu             | Đơn giản hơn  | Chính xác và mạnh hơn  |
| Kết quả bài học        | Được lựa chọn | Chỉ dùng để thử nghiệm |

> Render engine phức tạp hơn không đồng nghĩa với kết quả luôn đẹp hơn. Render engine phù hợp với phong cách và mục tiêu của scene mới là lựa chọn tốt nhất.

---

## 22. Xếp chồng nhiều Glare Node

Compositor cho phép đặt nhiều hiệu ứng liên tiếp.

Trong bài học, node Fog Glow được nhân bản:

```text
Shift + D
```

Sau đó node thứ hai được đổi sang **Streaks**.

### Sơ đồ node nhiều lớp

```text
Render Layers
      │
      ▼
Glare 01 — Fog Glow
      │
      ▼
Glare 02 — Streaks
      │
      ├──────────────► Viewer
      │
      └──────────────► Composite
```

Kết quả:

1. Fog Glow tạo quầng sáng mềm.
2. Streaks nhận hình ảnh đã có Fog Glow.
3. Streaks tạo thêm các tia sáng.
4. Kết quả tổng hợp được gửi đến Viewer và Composite.

---

## 23. Điều chỉnh Streaks

Streaks tạo các tia kéo dài từ vùng sáng.

Các tham số thường cần điều chỉnh:

| Tham số          | Tác dụng                  |
| ---------------- | ------------------------- |
| **Strength**     | Độ rõ của các tia sáng    |
| **Streaks**      | Số lượng tia              |
| **Angle Offset** | Góc xoay của hệ thống tia |
| **Fade**         | Mức độ mờ dần của tia     |
| **Threshold**    | Ngưỡng sáng để sinh tia   |
| **Quality**      | Chất lượng hiệu ứng       |

Trong bài học:

* Số lượng tia được thử tăng lên khoảng `8`.
* Strength được giảm xuống để tạo hiệu ứng tinh tế.
* Các tia xuất hiện ở cả đèn hải đăng và cửa sổ nhà.
* Mục tiêu là tạo cảm giác thú vị nhưng không lấn át scene.

```text
Strength quá cao
→ Tia sáng chiếm toàn bộ hình ảnh

Strength thấp
→ Chỉ còn một chút hiệu ứng ống kính
```

---

## 24. Thứ tự node ảnh hưởng đến kết quả

Trong Compositor, thứ tự node rất quan trọng.

### Fog Glow trước Streaks

```text
Render → Fog Glow → Streaks → Output
```

Streaks xử lý hình ảnh đã có quầng sáng.

### Streaks trước Fog Glow

```text
Render → Streaks → Fog Glow → Output
```

Fog Glow tiếp tục làm mềm cả các tia sáng.

Hai thứ tự có thể tạo ra kết quả khác nhau.

Vì vậy, Compositor không chỉ là danh sách hiệu ứng mà là một **chuỗi xử lý hình ảnh**.

---

## 25. Có thể kết hợp thêm những node nào?

Ngoài Glare, có thể tiếp tục thêm các node khác:

```text
Render Layers
      │
      ▼
Color Balance
      │
      ▼
Glare — Fog Glow
      │
      ▼
Glare — Streaks
      │
      ▼
Contrast hoặc Exposure
      │
      ▼
Composite
```

Một số nhóm node hữu ích:

### Color

* Color Balance.
* Hue/Saturation/Value.
* Brightness/Contrast.
* RGB Curves.
* Exposure.
* Gamma.

### Filter

* Glare.
* Blur.
* Sharpen.
* Denoise.
* Pixelate.

### Matte và Keying

* Keying.
* Chroma Key.
* Color Key.
* Difference Key.

### Transform

* Scale.
* Translate.
* Rotate.
* Crop.

---

## 26. Quy trình thực hành hoàn chỉnh

### Bước 1: Kiểm tra camera

* Chuyển sang Camera View.
* Căn lại đường chân trời.
* Tạo bố cục đẹp cho hải đăng và phần phản chiếu.
* Tắt Lock Camera to View sau khi hoàn tất.

### Bước 2: Render ảnh

Nhấn:

```text
F12
```

### Bước 3: Mở Compositing Workspace

* Chọn Compositing.
* Bật Use Nodes hoặc chọn New tùy phiên bản Blender.

### Bước 4: Tạo Viewer

```text
Shift + A → Output → Viewer
```

### Bước 5: Tạo cửa sổ xem trước

* Chia một khu vực mới.
* Đổi thành Image Editor.
* Chọn Viewer Node.

### Bước 6: Thêm Glare

```text
Shift + A → Filter → Glare
```

### Bước 7: Chọn Fog Glow

Thiết lập tham khảo:

```text
Type: Fog Glow
Quality: High
Threshold: ~0.2
Size: ~0.4
```

### Bước 8: Kết nối đầu ra

```text
Glare → Viewer
Glare → Composite
```

### Bước 9: Render kiểm tra

Nhấn:

```text
F12
```

### Bước 10: Thêm Streaks nếu cần

* Chọn Glare.
* Nhấn `Shift + D`.
* Đổi node mới sang Streaks.
* Giảm Strength.
* Thử khoảng 8 tia.

### Bước 11: Lưu dự án

```text
Ctrl + S
```

---

## 27. Phím tắt và công cụ liên quan

| Thao tác                   | Phím tắt hoặc vị trí                    |
| -------------------------- | --------------------------------------- |
| Render ảnh                 | `F12`                                   |
| Thêm node                  | `Shift + A`                             |
| Di chuyển node             | `G`                                     |
| Nhân bản node              | `Shift + D`                             |
| Xóa node                   | `X` hoặc `Delete`                       |
| Tìm kiếm node              | `Shift + A`, sau đó nhập tên            |
| Lưu dự án                  | `Ctrl + S`                              |
| Mở Sidebar                 | `N`                                     |
| Chuyển Editor Type         | Menu góc trên bên trái của từng khu vực |
| Thêm Glare                 | `Shift + A → Filter → Glare`            |
| Thêm Viewer                | `Shift + A → Output → Viewer`           |
| Bật ảnh nền                | Backdrop                                |
| Xem ảnh trong Image Editor | Chọn `Viewer Node`                      |

---

## 28. Lỗi thường gặp

### 28.1. Không thấy ảnh trong Compositor

**Nguyên nhân có thể:**

* Chưa nhấn `F12`.
* Chưa bật Use Nodes.
* Render Layers chưa có dữ liệu.
* Viewer chưa được kết nối.
* Image Editor chưa chọn Viewer Node.

**Cách khắc phục:**

```text
Render ảnh → Kiểm tra Render Layers → Nối Viewer
```

---

### 28.2. Viewer chỉ hiển thị màu đen

**Nguyên nhân:**

Viewer chưa nhận dữ liệu hình ảnh.

**Cách khắc phục:**

```text
Render Layers.Image → Viewer.Image
```

---

### 28.3. Viewer có glow nhưng ảnh render không có

**Nguyên nhân:**

Glare chỉ được nối vào Viewer mà chưa nối vào Composite.

**Cách khắc phục:**

```text
Glare.Image → Composite.Image
```

---

### 28.4. Toàn bộ scene bị phát sáng

**Nguyên nhân:**

* Threshold quá thấp.
* Strength quá cao.
* Size quá lớn.
* Nhiều vùng trong scene có độ sáng cao.

**Cách khắc phục:**

* Tăng Threshold.
* Giảm Strength.
* Giảm Size.
* Giảm cường độ Emission của vật liệu.

---

### 28.5. Cửa sổ nhà không có glow

**Nguyên nhân:**

Threshold quá cao so với độ sáng của cửa sổ.

**Cách khắc phục:**

* Giảm Threshold.
* Tăng Strength của vật liệu Emission.
* Tăng cường độ ánh sáng ở cửa sổ.

---

### 28.6. Tia Streaks quá mạnh

**Nguyên nhân:**

Strength của node Streaks quá cao.

**Cách khắc phục:**

* Giảm Strength.
* Tăng Threshold.
* Giảm số tia.
* Điều chỉnh Fade.
* Chỉ dùng Streaks như một lớp hiệu ứng phụ.

---

### 28.7. Vật thể đã ẩn vẫn xuất hiện khi render

**Nguyên nhân:**

Object chỉ bị tắt biểu tượng Eye nhưng biểu tượng Camera vẫn bật.

**Cách khắc phục:**

Tắt biểu tượng Camera của object trong Outliner.

---

### 28.8. Cycles trông không đẹp bằng Eevee

Điều này không nhất thiết là lỗi.

Nguyên nhân có thể là:

* Scene được thiết lập ánh sáng dành cho Eevee.
* Công suất đèn chưa phù hợp với Cycles.
* Vật liệu và phản chiếu cần điều chỉnh lại.
* Thời gian render thử quá ngắn.
* Phong cách low-poly không cần độ chân thực cao.

---

## 29. Nguyên tắc sử dụng Glow hiệu quả

### Glow nên hỗ trợ chủ thể

Trong scene này, chủ thể chính là đèn hải đăng.

Vì vậy:

* Glow mạnh nhất nên nằm ở đỉnh hải đăng.
* Cửa sổ nhà chỉ nên có glow nhẹ.
* Phản chiếu trên mặt nước không nên bị mất chi tiết.
* Các tia sáng chỉ nên đóng vai trò trang trí.

### Hiệu ứng tinh tế thường đẹp hơn

```text
Glow nhẹ
→ Tạo cảm giác ánh sáng thật
→ Giữ được chi tiết
→ Chủ thể rõ ràng

Glow quá mạnh
→ Mất chi tiết
→ Hình ảnh bị mờ
→ Ánh sáng trông giả
```

### Luôn đánh giá ở kích thước ảnh cuối

Hiệu ứng có thể trông nhẹ khi phóng to nhưng lại rất mạnh khi xem toàn bộ khung hình.

Nên thường xuyên:

* Zoom Fit ảnh.
* Quan sát toàn scene.
* So sánh trước và sau.
* Render lại bằng `F12`.

---

## 30. Sơ đồ tư duy bài học

```text
Compositing & Glow
│
├── Chuẩn bị
│   ├── Kiểm tra camera
│   ├── Render bằng F12
│   └── Kiểm tra Outliner
│
├── Compositor
│   ├── Render Layers
│   ├── Composite
│   └── Viewer
│
├── Glare
│   ├── Bloom
│   ├── Fog Glow
│   ├── Streaks
│   └── Ghosts
│
├── Tham số
│   ├── Strength
│   ├── Threshold
│   ├── Size
│   ├── Saturation
│   ├── Tint
│   └── Quality
│
├── Kết nối
│   ├── Glare → Viewer
│   └── Glare → Composite
│
├── Xếp chồng hiệu ứng
│   ├── Fog Glow
│   └── Streaks
│
└── Render Engine
    ├── Thử Cycles
    └── Chọn Eevee
```

---

## 31. Checklist thực hành

### Thiết lập Compositor

* [ ] Đã chuyển sang Compositing Workspace.
* [ ] Đã bật Use Nodes hoặc tạo node tree mới.
* [ ] Đã render ảnh bằng `F12`.
* [ ] Đã kiểm tra Render Layers có dữ liệu.
* [ ] Đã thêm Viewer Node.
* [ ] Đã tạo Image Editor để xem Viewer Node.

### Thiết lập Glow

* [ ] Đã thêm Glare Node.
* [ ] Đã thử Bloom.
* [ ] Đã thử Fog Glow.
* [ ] Đã chuyển Quality sang High nếu cần.
* [ ] Đã điều chỉnh Strength.
* [ ] Đã điều chỉnh Threshold.
* [ ] Đã điều chỉnh Size.
* [ ] Đã kiểm tra Saturation và Tint.

### Đầu ra cuối

* [ ] Glare đã nối vào Viewer.
* [ ] Glare đã nối vào Composite.
* [ ] Ảnh render bằng `F12` có hiệu ứng.
* [ ] Glow của hải đăng nổi bật hơn glow của nhà.
* [ ] Hiệu ứng không làm mất chi tiết.
* [ ] Đã thử thêm Streaks ở mức nhẹ.
* [ ] Đã so sánh Eevee và Cycles.
* [ ] Đã lưu dự án bằng `Ctrl + S`.

---

## 32. Bài tập thực hành

### Bài tập 1: Fog Glow cơ bản

Tạo một node Glare với:

```text
Type: Fog Glow
Quality: High
```

Điều chỉnh Threshold sao cho:

* Đèn hải đăng phát sáng rõ.
* Cửa sổ nhà chỉ phát sáng nhẹ.
* Các vùng sáng khác không bị glow quá mức.

---

### Bài tập 2: So sánh Threshold

Tạo ba phiên bản:

```text
Threshold thấp
Threshold trung bình
Threshold cao
```

Quan sát:

* Vùng nào bắt đầu mất glow?
* Khi nào cửa sổ nhà không còn phát sáng?
* Khi nào chỉ còn đèn hải đăng tạo glare?

---

### Bài tập 3: Xếp chồng hiệu ứng

Tạo chuỗi node:

```text
Render Layers
      ↓
Fog Glow
      ↓
Streaks
      ↓
Composite
```

Giảm Strength của Streaks để tia sáng chỉ xuất hiện nhẹ.

---

### Bài tập 4: Thay đổi thứ tự node

So sánh:

```text
Fog Glow → Streaks
```

với:

```text
Streaks → Fog Glow
```

Ghi lại sự khác biệt trong độ mềm và độ rõ của tia sáng.

---

### Bài tập 5: Điều chỉnh màu

Thử ba sắc thái glow:

* Vàng ấm.
* Trắng trung tính.
* Xanh lạnh.

Đánh giá màu nào phù hợp nhất với không khí của scene.

---

## 33. Tóm tắt

Compositor là hệ thống hậu kỳ dựa trên node, cho phép xử lý ảnh sau khi Blender đã render scene.

Luồng xử lý cơ bản của bài học là:

```text
Render Layers
      ↓
Glare
      ├────► Viewer
      └────► Composite
```

Node Glare được sử dụng để tạo hiệu ứng phát sáng cho:

* Đèn trên ngọn hải đăng.
* Cửa sổ của các ngôi nhà.
* Một số vùng phản chiếu sáng trong scene.

Hai chế độ chính được sử dụng là:

* **Fog Glow** để tạo quầng sáng mềm.
* **Streaks** để tạo thêm các tia sáng tinh tế.

Trong đó, **Threshold** là tham số đặc biệt quan trọng vì nó quyết định vùng sáng nào được áp dụng hiệu ứng.

```text
Threshold thấp
→ Nhiều vùng phát sáng

Threshold cao
→ Chỉ vùng sáng mạnh nhất phát sáng
```

Có thể nối nhiều node liên tiếp để xếp chồng hiệu ứng, nhưng nên giữ cường độ vừa phải để không làm mất chi tiết của hình ảnh.

Sau khi thử nghiệm với Cycles, bài học tiếp tục sử dụng Eevee vì:

* Render nhanh.
* Phù hợp với phong cách low-poly.
* Ánh sáng đã được thiết lập tốt.
* Cycles không mang lại cải thiện đáng kể cho scene hiện tại.

Cuối cùng, cần bảo đảm hiệu ứng được nối vào node Composite, render lại bằng `F12` và lưu dự án bằng `Ctrl + S`.

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
