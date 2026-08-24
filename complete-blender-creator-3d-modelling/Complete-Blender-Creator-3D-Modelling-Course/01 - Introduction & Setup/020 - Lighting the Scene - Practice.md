# 020 — Lighting the Scene: Compositing, Glow & Glare

| Thuộc tính                | Nội dung                                                      |
| ------------------------- | ------------------------------------------------------------- |
| **Module**                | Module 01 — Introduction & Setup                              |
| **Bài học**               | Lighting the Scene                                            |
| **Thời lượng**            | 11:51                                                         |
| **Chủ đề chính**          | Hoàn thiện hình ảnh bằng Compositor, Glare, Bloom và Fog Glow |
| **Render Engine đề xuất** | Eevee                                                         |
| **Workspace chính**       | Compositing                                                   |

> **Lưu ý:** Mặc dù bài học có tên **Lighting the Scene**, nội dung chính tập trung vào giai đoạn hậu kỳ bằng **Compositor** để tạo hiệu ứng phát sáng cho đèn hải đăng và các ngôi nhà.

---

## 1. Mục tiêu bài học

* Biết cách truy cập và thiết lập **Compositing Workspace**.
* Hiểu luồng xử lý hình ảnh trong Compositor:

  * `Render Layers`
  * các node hiệu ứng
  * `Composite`
  * `Viewer`
* Biết dùng **Glare Node** để tạo:

  * Bloom
  * Fog Glow
  * Streaks
* Hiểu ý nghĩa của các tham số:

  * Strength
  * Threshold
  * Size
  * Saturation
  * Tint
  * Quality
* Biết xếp chồng nhiều hiệu ứng hậu kỳ trong cùng một node graph.
* Biết so sánh kết quả render giữa **Eevee** và **Cycles**.
* Đảm bảo hiệu ứng xuất hiện trong bản render cuối cùng.

---

## 2. Chuẩn bị bố cục Camera

Trước khi thêm hiệu ứng hậu kỳ, cần kiểm tra lại góc nhìn cuối cùng của Camera.

Trong bài học, Camera được điều chỉnh nhẹ để:

* Đường chân trời nằm gần khu vực giữa khung hình hơn.
* Ngọn hải đăng vẫn là chủ thể chính.
* Phần phản chiếu trên mặt nước được nhìn thấy rõ hơn.
* Bố cục có chiều sâu và cân bằng hơn.

### Điều chỉnh Camera trực tiếp

1. Chuyển sang góc nhìn Camera bằng `Numpad 0`.
2. Bật **Gizmos** nếu cần.
3. Mở `N-panel`.
4. Vào:

```text
View
└── Lock
    └── Camera to View
```

5. Di chuyển viewport để thay đổi vị trí Camera.
6. Tắt **Camera to View** sau khi hoàn tất để tránh vô tình làm lệch Camera.

> Nên khóa lại Camera ngay sau khi bố cục đã đạt yêu cầu.

---

## 3. Render hình ảnh trước khi Compositing

Compositor sử dụng kết quả render của Camera làm dữ liệu đầu vào. Vì vậy, trước tiên cần render scene.

### Thực hiện render

* Nhấn `F12`.
* Hoặc chọn:

```text
Render
└── Render Image
```

Nếu chưa render, node `Render Layers` có thể không có hình ảnh để xử lý.

### Kiểm tra Outliner

Một object có thể bị ẩn trong viewport nhưng vẫn xuất hiện khi render.

Trong Outliner:

* Biểu tượng **mắt**: bật hoặc tắt hiển thị trong viewport.
* Biểu tượng **Camera**: bật hoặc tắt object trong bản render.

Ví dụ:

```text
Object
├── Eye: Off       → Không thấy trong viewport
└── Camera: On     → Vẫn xuất hiện khi render
```

Nếu có object không mong muốn xuất hiện trong kết quả cuối, cần kiểm tra cả hai trạng thái này.

---

## 4. Mở Compositing Workspace

Chuyển sang workspace:

```text
Compositing
```

Sau đó bật hệ thống node.

### Blender 4.x

Chọn:

```text
Use Nodes
```

Các node cơ bản thường xuất hiện:

* `Render Layers`
* `Composite`

### Blender 5

Giao diện có một số thay đổi nhỏ:

* Nút **Use Nodes** có thể được thay bằng **New**.
* Có thể tự động xuất hiện:

  * `Render Layers`
  * `Group Output`
  * `Viewer`
* Một số hiệu ứng có thể được kéo trực tiếp từ thanh công cụ phía dưới vào scene.

Tuy giao diện khác nhau, nguyên lý xử lý node vẫn tương tự.

---

## 5. Luồng xử lý cơ bản trong Compositor

Compositor lấy hình ảnh đã render, xử lý qua các node hiệu ứng và gửi kết quả đến output cuối.

```text
┌─────────────────┐
│  Render Layers  │
│  Ảnh từ Camera  │
└────────┬────────┘
         │ Image
         ▼
┌─────────────────┐
│  Effect Nodes   │
│ Glare / Color...│
└────────┬────────┘
         │ Image
         ├──────────────────┐
         ▼                  ▼
┌─────────────────┐  ┌─────────────────┐
│    Composite    │  │     Viewer      │
│ Render cuối cùng│  │ Xem trước ảnh   │
└─────────────────┘  └─────────────────┘
```

### Chức năng từng node

| Node              | Chức năng                                        |
| ----------------- | ------------------------------------------------ |
| **Render Layers** | Cung cấp hình ảnh được render từ scene           |
| **Glare**         | Tạo hiệu ứng phát sáng, quầng sáng hoặc tia sáng |
| **Viewer**        | Hiển thị kết quả để xem trước trong Compositor   |
| **Composite**     | Xuất kết quả vào bản render cuối cùng            |

> Kết nối node vào `Viewer` chỉ giúp xem trước. Muốn hiệu ứng xuất hiện khi nhấn `F12`, kết quả phải được nối vào `Composite`.

---

## 6. Thêm Viewer Node

Trong một số phiên bản Blender, `Viewer` không được tạo tự động.

Để thêm Viewer Node:

1. Nhấn `Shift + A`.
2. Tìm kiếm:

```text
Viewer
```

3. Chọn:

```text
Output
└── Viewer
```

4. Nối cổng `Image` màu vàng:

```text
Render Layers: Image
        │
        ▼
Viewer: Image
```

Sau khi kết nối, hình ảnh sẽ xuất hiện trong Viewer hoặc backdrop.

---

## 7. Hiển thị kết quả Compositor

Có hai cách chính để xem kết quả xử lý.

### Cách 1: Dùng Backdrop

Bật:

```text
Backdrop
```

Ảnh từ Viewer Node sẽ xuất hiện phía sau node graph.

Ưu điểm:

* Thiết lập nhanh.
* Có thể chỉnh node và quan sát ngay kết quả.

Nhược điểm:

* Node và hình ảnh có thể chồng lên nhau.
* Khó quan sát với node graph phức tạp.

### Cách 2: Tạo cửa sổ Image Editor riêng

Đây là cách được sử dụng trong bài học.

1. Kéo từ góc của một editor để chia vùng làm việc.
2. Chuyển editor mới sang:

```text
Image Editor
```

3. Trong danh sách ảnh, chọn:

```text
Viewer Node
```

4. Tắt `Backdrop` trong Compositor.

Bố cục đề xuất:

```text
┌──────────────────────────┬──────────────────────┐
│                          │                      │
│       Compositor         │     Image Editor     │
│       Node Graph         │   Viewer Node Image  │
│                          │                      │
└──────────────────────────┴──────────────────────┘
```

Cách này giúp:

* Node graph rõ ràng hơn.
* Hình ảnh được hiển thị riêng.
* Dễ so sánh thay đổi của các tham số.

---

## 8. Thêm Glare Node

Để thêm hiệu ứng phát sáng:

1. Nhấn `Shift + A`.
2. Vào:

```text
Filter
└── Glare
```

3. Kéo node `Glare` lên đường nối giữa các node.

Khi thả node lên một đường kết nối, Blender thường tự động chèn node vào giữa.

```text
Render Layers
      │
      ▼
    Glare
      │
      ├──────────► Viewer
      │
      └──────────► Composite
```

Trong Blender, các đường kết nối giữa node đôi khi được gọi không chính thức là **noodles**.

---

## 9. Các chế độ của Glare Node

Glare Node cung cấp nhiều dạng hiệu ứng ánh sáng.

| Chế độ          | Đặc điểm                                           |
| --------------- | -------------------------------------------------- |
| **Bloom**       | Tạo vùng sáng mềm bao quanh highlight, xử lý nhanh |
| **Fog Glow**    | Tạo quầng sáng tự nhiên, mềm và điện ảnh hơn       |
| **Streaks**     | Tạo các tia sáng kéo dài từ nguồn sáng             |
| **Simple Star** | Tạo hiệu ứng ánh sáng hình ngôi sao đơn giản       |
| **Ghosts**      | Mô phỏng các vệt phản xạ bên trong ống kính        |

Trong bài học, ba chế độ được thử nghiệm chính là:

* Bloom
* Fog Glow
* Streaks

---

## 10. Hiệu ứng Bloom

`Bloom` là lựa chọn nhanh, tạo quầng sáng rõ quanh các vùng rất sáng.

### Ưu điểm

* Tính toán nhanh.
* Dễ nhìn thấy hiệu ứng.
* Phù hợp với đèn, biển hiệu hoặc vật liệu Emission.

### Nhược điểm

* Có thể quá mạnh.
* Dễ làm hình ảnh bị mờ hoặc cháy sáng.
* Kém tinh tế hơn Fog Glow trong một số scene.

Các thông số cần điều chỉnh:

* Strength
* Size
* Saturation
* Threshold
* Quality

---

## 11. Hiệu ứng Fog Glow

Trong scene ngọn hải đăng, `Fog Glow` mang lại kết quả tự nhiên hơn Bloom.

Hiệu ứng này giúp:

* Đèn hải đăng phát sáng mềm.
* Ánh đèn từ các ngôi nhà có quầng sáng nhẹ.
* Scene có cảm giác ấm áp và điện ảnh hơn.
* Highlight hòa vào môi trường thay vì tạo viền sáng quá cứng.

### Thiết lập tham khảo

Các giá trị chính xác phụ thuộc vào scene, nhưng bài học sử dụng thiết lập gần như:

| Thuộc tính     | Thiết lập gợi ý                         |
| -------------- | --------------------------------------- |
| **Glare Type** | Fog Glow                                |
| **Quality**    | High                                    |
| **Strength**   | Mức vừa phải                            |
| **Threshold**  | Khoảng `0.2`                            |
| **Size**       | Khoảng `0.4` theo giao diện trong video |
| **Saturation** | Giảm nếu ánh sáng quá vàng              |
| **Tint**       | Dịch nhẹ về màu vàng để tạo cảm giác ấm |

> Không nên sao chép giá trị tuyệt đối cho mọi scene. Cường độ Emission, Exposure và ánh sáng tổng thể sẽ làm kết quả thay đổi.

---

## 12. Ý nghĩa các tham số Glare

### 12.1. Strength

`Strength` kiểm soát cường độ tổng thể của hiệu ứng.

```text
Strength thấp
→ Quầng sáng nhẹ, tinh tế

Strength cao
→ Ánh sáng mạnh, có thể làm mất chi tiết
```

Nếu hiệu ứng quá mạnh:

* Giảm Strength.
* Tăng Threshold.
* Giảm độ sáng của vật liệu Emission.
* Giảm Exposure nếu toàn scene bị cháy sáng.

---

### 12.2. Threshold

`Threshold` là ngưỡng độ sáng mà từ đó hiệu ứng bắt đầu được áp dụng.

```text
Pixel có độ sáng thấp hơn Threshold
→ Không hoặc ít chịu ảnh hưởng

Pixel có độ sáng cao hơn Threshold
→ Được thêm hiệu ứng Glare
```

Ví dụ trong scene:

* Ánh sáng của ngọn hải đăng mạnh hơn.
* Ánh sáng từ các ngôi nhà yếu hơn.

Khi tăng Threshold:

```text
Threshold thấp
├── Hải đăng có glow
└── Nhà cũng có glow

Threshold cao
├── Hải đăng vẫn có glow
└── Glow của nhà giảm hoặc biến mất
```

Trong bài học:

* Khoảng `2.0`: glow của các ngôi nhà gần như biến mất.
* Khoảng `0.2`: cả hải đăng và nhà đều có một lượng glow vừa phải.

### Sơ đồ tác động của Threshold

```text
Độ sáng nguồn sáng
0 ─────────────────────────────────────► Cao

      Nhà                    Hải đăng
       │                         │
       ▼                         ▼
───────┼─────────────────────────┼───────

Threshold thấp
→ Cả nhà và hải đăng được áp dụng Glare

Threshold cao hơn ánh sáng nhà
→ Chỉ hải đăng được áp dụng Glare
```

---

### 12.3. Size

`Size` kiểm soát phạm vi lan rộng của quầng sáng.

* Size nhỏ: glow tập trung sát nguồn sáng.
* Size lớn: glow lan rộng ra môi trường.

Size quá lớn có thể:

* Làm mất độ tương phản.
* Làm nhiều nguồn sáng nhập vào nhau.
* Khiến scene bị phủ bởi một lớp sương sáng.

---

### 12.4. Saturation

`Saturation` kiểm soát độ rực màu của hiệu ứng.

* Tăng Saturation: quầng sáng có màu mạnh hơn.
* Giảm Saturation: glow gần với màu trắng hoặc trung tính hơn.

Nếu đèn màu vàng trở nên quá cam hoặc quá gắt, nên giảm Saturation.

---

### 12.5. Tint

`Tint` dùng để dịch màu của hiệu ứng.

Với scene hải đăng:

* Dịch nhẹ về vàng hoặc cam tạo cảm giác ấm.
* Không nên đẩy quá mạnh vì có thể làm toàn bộ highlight bị ám màu.

---

### 12.6. Quality

`Quality` quyết định chất lượng tính toán hiệu ứng.

| Mức            | Đặc điểm                                   |
| -------------- | ------------------------------------------ |
| **Low/Medium** | Xử lý nhanh, phù hợp khi thử nghiệm        |
| **High**       | Chi tiết mượt hơn, phù hợp bản render cuối |

Nên chỉnh node ở chất lượng thấp hoặc trung bình, sau đó chuyển sang High khi hoàn thiện.

---

## 13. Kết nối đúng với Composite

Một lỗi quan trọng trong bài học là chỉ nối Glare vào Viewer.

```text
Render Layers
      │
      ▼
    Glare
      │
      ▼
    Viewer
```

Khi đó:

* Image Editor hiển thị hiệu ứng.
* Nhưng `F12` vẫn cho ra hình ảnh gốc không có Glare.

Để hiệu ứng xuất hiện trong render cuối:

```text
Render Layers
      │
      ▼
    Glare
      │
      ├──────────► Viewer
      │
      └──────────► Composite
```

### Quy tắc cần nhớ

> `Viewer` dùng để xem thử, còn `Composite` quyết định kết quả render cuối cùng.

---

## 14. Xếp chồng nhiều hiệu ứng

Các node có thể được nối nối tiếp để tạo nhiều lớp xử lý.

Ví dụ:

```text
Render Layers
      │
      ▼
Glare — Fog Glow
      │
      ▼
Glare — Streaks
      │
      ├──────────► Viewer
      │
      └──────────► Composite
```

Để nhân bản node:

1. Chọn node.
2. Nhấn `Shift + D`.
3. Di chuyển node mới lên đường nối.
4. Đổi chế độ Glare.

Trong bài học:

* Node đầu tiên dùng `Fog Glow`.
* Node thứ hai được đổi sang `Streaks`.
* Strength của Streaks được giảm để hiệu ứng chỉ xuất hiện nhẹ.

### Nguyên tắc khi xếp chồng hiệu ứng

```text
Hiệu ứng chính
→ Rõ nhưng vẫn kiểm soát được

Hiệu ứng phụ
→ Chỉ nên hỗ trợ, không lấn át chủ thể
```

Nếu cả hai node đều có Strength cao:

* Highlight dễ bị cháy.
* Hình ảnh mất tương phản.
* Tia sáng có thể che khuất ngọn hải đăng và các ngôi nhà.

---

## 15. Hiệu ứng Streaks

`Streaks` tạo các tia sáng kéo dài từ vùng highlight.

Có thể điều chỉnh:

* Số lượng tia.
* Góc tia.
* Độ dài tia.
* Strength.
* Threshold.
* Chất lượng hiệu ứng.

Ví dụ:

```text
Số tia thấp
→ Hiệu ứng đơn giản, rõ hướng

Số tia cao
→ Hiệu ứng nhiều nhánh, giống ngôi sao
```

Trong bài học, số tia được thử tăng lên khoảng `8`, sau đó giảm Strength để giữ hiệu ứng tinh tế.

Streaks phù hợp với:

* Đèn pha.
* Đèn đường.
* Ánh sáng phản chiếu trên kim loại.
* Scene khoa học viễn tưởng.
* Hiệu ứng ống kính mang tính nghệ thuật.

Tuy nhiên, với scene low-poly nhẹ nhàng, nên sử dụng rất ít.

---

## 16. Eevee và Cycles

Sau khi thiết lập Compositor, bài học thử chuyển từ Eevee sang Cycles để so sánh.

### Thiết lập Cycles được thử nghiệm

* Render Engine: `Cycles`
* Device: `GPU`
* Denoise Viewport: bật
* Denoise Render: bật
* Denoiser: `OptiX`, nếu GPU hỗ trợ
* Time Limit: khoảng `3 giây`

### Kết quả quan sát

Cycles tạo:

* Phản chiếu trên mặt nước hoặc mặt đất mạnh hơn.
* Cách truyền ánh sáng khác Eevee.
* Kết quả tối hoặc lệch so với thiết lập ánh sáng ban đầu.

Để Cycles đẹp tương đương, cần điều chỉnh lại:

* Công suất đèn.
* Cường độ Emission.
* World Strength.
* Samples.
* Exposure.
* Chất liệu phản chiếu.
* Các thông số Glare.

Trong scene này, Cycles không mang lại lợi ích đủ lớn nên tác giả quay lại dùng Eevee.

### So sánh nhanh

| Tiêu chí                        | Eevee                 | Cycles                              |
| ------------------------------- | --------------------- | ----------------------------------- |
| Tốc độ                          | Nhanh                 | Chậm hơn                            |
| Phù hợp scene low-poly          | Rất phù hợp           | Có thể không cần thiết              |
| Ánh sáng gián tiếp              | Xấp xỉ thời gian thực | Chính xác vật lý hơn                |
| Phản chiếu                      | Cần thiết lập phù hợp | Tự nhiên hơn trong nhiều trường hợp |
| Yêu cầu tinh chỉnh lại ánh sáng | Ít                    | Có thể nhiều                        |
| Lựa chọn trong bài              | **Được giữ lại**      | Chỉ thử nghiệm                      |

> Render engine phức tạp hơn không đồng nghĩa hình ảnh luôn đẹp hơn. Engine tốt nhất là engine phù hợp với phong cách và mục tiêu của scene.

---

## 17. Quy trình thực hành hoàn chỉnh

### Bước 1: Kiểm tra Camera

* Vào Camera View.
* Điều chỉnh đường chân trời.
* Đảm bảo phần phản chiếu có mặt trong khung hình.
* Tắt Camera to View sau khi hoàn tất.

### Bước 2: Kiểm tra Outliner

* Ẩn các object không cần thiết khỏi viewport.
* Tắt biểu tượng Camera của các object không được render.
* Đảm bảo không có mesh thừa xuất hiện.

### Bước 3: Render scene

Nhấn:

```text
F12
```

### Bước 4: Mở Compositor

* Chuyển sang `Compositing`.
* Bật `Use Nodes` hoặc chọn `New`.
* Kiểm tra `Render Layers` và `Composite`.

### Bước 5: Thêm Viewer

* `Shift + A > Output > Viewer`.
* Nối hình ảnh vào Viewer.
* Dùng Backdrop hoặc Image Editor để xem kết quả.

### Bước 6: Thêm Fog Glow

```text
Render Layers
      │
      ▼
Glare: Fog Glow
      │
      ├────────► Viewer
      └────────► Composite
```

### Bước 7: Tinh chỉnh

* Quality: High.
* Threshold: khoảng `0.2`, sau đó điều chỉnh theo scene.
* Strength: vừa phải.
* Saturation: giảm nếu quá vàng.
* Tint: thêm một chút màu ấm.
* Size: giữ quầng sáng không lan quá rộng.

### Bước 8: Thêm Streaks nếu cần

* Nhân bản Glare bằng `Shift + D`.
* Đổi node mới sang Streaks.
* Giảm Strength.
* Điều chỉnh số tia.

### Bước 9: Render lại

Nhấn `F12` để xác nhận:

* Glow xuất hiện trong bản render cuối.
* Không có vùng cháy sáng quá mạnh.
* Các ngôi nhà không lấn át hải đăng.

### Bước 10: Lưu file

Nhấn:

```text
Ctrl + S
```

---

## 18. Node Graph hoàn chỉnh

Một node graph hợp lý cho scene trong bài:

```text
┌─────────────────┐
│  Render Layers  │
└────────┬────────┘
         │ Image
         ▼
┌─────────────────┐
│      Glare      │
│    Fog Glow     │
│ Threshold: 0.2  │
│ Quality: High   │
└────────┬────────┘
         │ Image
         ▼
┌─────────────────┐
│      Glare      │
│     Streaks     │
│ Strength: Low   │
└────────┬────────┘
         │ Image
         ├─────────────────────┐
         ▼                     ▼
┌─────────────────┐   ┌─────────────────┐
│    Composite    │   │     Viewer      │
│  Kết quả render │   │    Xem trước    │
└─────────────────┘   └─────────────────┘
```

---

## 19. Phím tắt và công cụ liên quan

| Thao tác                   | Phím tắt hoặc vị trí                   |
| -------------------------- | -------------------------------------- |
| Render ảnh                 | `F12`                                  |
| Đóng cửa sổ Render         | `F11` hoặc đóng cửa sổ Render          |
| Thêm node                  | `Shift + A`                            |
| Di chuyển node             | `G`                                    |
| Nhân bản node              | `Shift + D`                            |
| Xóa node                   | `X` hoặc `Delete`                      |
| Kết nối node               | Kéo từ output socket sang input socket |
| Xem qua Camera             | `Numpad 0`                             |
| Lưu file                   | `Ctrl + S`                             |
| Mở Compositor              | Workspace `Compositing`                |
| Thêm Glare                 | `Shift + A > Filter > Glare`           |
| Thêm Viewer                | `Shift + A > Output > Viewer`          |
| Hiển thị ảnh phía sau node | Bật `Backdrop`                         |
| Chọn ảnh Viewer            | `Image Editor > Viewer Node`           |

---

## 20. Lỗi thường gặp

### 20.1. Compositor không hiển thị hình ảnh

**Nguyên nhân có thể:**

* Chưa nhấn `F12`.
* Viewer chưa được kết nối.
* Backdrop chưa bật.
* Image Editor chưa chọn `Viewer Node`.

**Cách xử lý:**

```text
Render bằng F12
→ Kiểm tra Render Layers
→ Thêm Viewer
→ Nối Image sang Viewer
```

---

### 20.2. Có hiệu ứng trong Viewer nhưng render cuối không có

**Nguyên nhân:**

Glare chỉ được nối vào Viewer, không nối vào Composite.

**Cách sửa:**

```text
Glare Output
├── Viewer
└── Composite
```

---

### 20.3. Glow xuất hiện trên quá nhiều vật thể

**Nguyên nhân:**

* Threshold quá thấp.
* Strength quá cao.
* Vật liệu Emission quá sáng.

**Cách sửa:**

* Tăng Threshold.
* Giảm Strength.
* Giảm Emission Strength.
* Kiểm tra Exposure.

---

### 20.4. Ánh sáng hải đăng không phát glow

**Nguyên nhân:**

* Threshold quá cao.
* Emission chưa đủ mạnh.
* Glare Node chưa nằm trong luồng Composite.
* Render chưa được cập nhật.

**Cách sửa:**

* Giảm Threshold.
* Tăng Emission.
* Kiểm tra kết nối node.
* Render lại bằng `F12`.

---

### 20.5. Hình ảnh quá vàng

**Cách xử lý:**

* Giảm Saturation trong Glare.
* Đưa Tint gần vùng trung tâm hơn.
* Giảm màu vàng của vật liệu Emission.
* Kiểm tra Color Management và Exposure.

---

### 20.6. Streaks quá mạnh và gây rối

**Cách xử lý:**

* Giảm Strength.
* Tăng Threshold.
* Giảm độ dài hoặc số lượng tia.
* Chỉ dùng một node Streaks ở mức rất nhẹ.

---

### 20.7. Object đã ẩn nhưng vẫn xuất hiện khi render

**Nguyên nhân:**

Chỉ tắt biểu tượng mắt trong Outliner.

**Cách sửa:**

Tắt thêm biểu tượng Camera của object đó.

---

### 20.8. Chuyển sang Cycles làm scene tối hơn

Đây không nhất thiết là lỗi. Eevee và Cycles xử lý ánh sáng khác nhau.

Cần điều chỉnh lại:

* Power của Light.
* Emission Strength.
* World Strength.
* Exposure.
* Samples.
* Reflective materials.

Nếu Cycles không cải thiện hình ảnh rõ rệt, có thể tiếp tục dùng Eevee.

---

## 21. Nguyên tắc hậu kỳ hiệu quả

### Hiệu ứng phải hỗ trợ chủ thể

Trong scene này:

```text
Chủ thể chính: Ngọn hải đăng
Chủ thể phụ: Các ngôi nhà
Môi trường: Đảo đá và mặt nước
```

Do đó:

* Glow của hải đăng nên mạnh nhất.
* Glow của nhà nên yếu hơn.
* Streaks chỉ nên là chi tiết phụ.
* Phản chiếu không nên sáng hơn nguồn sáng chính.

### Ít hiệu ứng thường tốt hơn

```text
Không có Glow
→ Nguồn sáng thiếu sức sống

Glow vừa phải
→ Hình ảnh rõ ràng, điện ảnh

Glow quá mạnh
→ Mất chi tiết, giảm tương phản
```

Mục tiêu không phải làm hiệu ứng dễ nhìn thấy nhất, mà là khiến người xem cảm nhận ánh sáng tự nhiên hơn.

---

## 22. Checklist thực hành

### Camera và scene

* [ ] Camera đã được đặt ở bố cục cuối cùng.
* [ ] Đường chân trời nằm ở vị trí hợp lý.
* [ ] Phần phản chiếu trên mặt nước được nhìn thấy.
* [ ] Camera to View đã được tắt sau khi chỉnh.
* [ ] Không có object thừa xuất hiện trong render.

### Compositor

* [ ] Đã bật Use Nodes hoặc tạo node graph mới.
* [ ] Render Layers được nối vào Glare.
* [ ] Glare được nối vào Viewer.
* [ ] Glare được nối vào Composite.
* [ ] Image Editor đang hiển thị Viewer Node.

### Glare

* [ ] Đã thử Bloom.
* [ ] Đã thử Fog Glow.
* [ ] Threshold được điều chỉnh theo nguồn sáng.
* [ ] Strength không gây cháy sáng.
* [ ] Saturation và Tint được cân bằng.
* [ ] Quality được chuyển sang High cho render cuối.
* [ ] Streaks chỉ được sử dụng ở mức nhẹ nếu cần.

### Render

* [ ] Đã render thử bằng `F12`.
* [ ] Đã so sánh Eevee và Cycles.
* [ ] Đã chọn render engine phù hợp.
* [ ] Bản render cuối có glow nhưng vẫn giữ chi tiết.
* [ ] File Blender đã được lưu.

---

## 23. Tóm tắt

Trong bài học này, scene ngọn hải đăng được hoàn thiện bằng **Compositor** thay vì tiếp tục thay đổi trực tiếp các Light object.

Luồng xử lý chính là:

```text
Render Layers
→ Glare: Fog Glow
→ Glare: Streaks tùy chọn
→ Viewer
→ Composite
```

`Fog Glow` tạo quầng sáng mềm cho ngọn hải đăng và những ngôi nhà. `Threshold` quyết định vùng sáng nào được áp dụng hiệu ứng, trong khi `Strength`, `Size`, `Saturation` và `Tint` kiểm soát hình dạng và màu sắc của quầng sáng.

Viewer Node dùng để xem trước, nhưng kết quả bắt buộc phải được nối vào Composite để xuất hiện trong bản render cuối. Nhiều Glare Node có thể được xếp chồng để kết hợp Fog Glow và Streaks, nhưng hiệu ứng cần được giữ ở mức tinh tế.

Sau khi so sánh Eevee và Cycles, Eevee được lựa chọn vì phù hợp hơn với phong cách low-poly, cho kết quả đẹp và không yêu cầu thiết lập lại toàn bộ hệ thống ánh sáng.

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
