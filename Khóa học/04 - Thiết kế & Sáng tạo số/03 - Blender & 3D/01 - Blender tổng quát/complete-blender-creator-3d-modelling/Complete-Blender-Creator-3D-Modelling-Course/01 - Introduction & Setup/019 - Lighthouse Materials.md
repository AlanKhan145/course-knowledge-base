# 019 — Lighthouse Lighting

| Thuộc tính       | Nội dung                                          |
| ---------------- | ------------------------------------------------- |
| **Module**       | Module 01 — Introduction & Setup                  |
| **Bài học**      | Lighthouse Lighting                               |
| **Thời lượng**   | 8:10                                              |
| **Chủ đề chính** | Thiết lập ánh sáng ban đêm cho cảnh ngọn hải đăng |

## 1. Mục tiêu bài học

Sau bài học này, bạn có thể:

* Thiết lập góc nhìn và vị trí camera cho cảnh ngọn hải đăng.
* Sử dụng **World Background** để tạo ánh sáng môi trường ban đêm.
* Dùng **Sun Light** để mô phỏng ánh trăng chiếu từ một hướng.
* Tạo hiệu ứng **rim light** nhằm làm nổi bật đường viền của ngọn hải đăng.
* Điều chỉnh Roughness của nền đá để hạn chế phản chiếu quá mạnh.
* Sử dụng **Point Light** để giả lập ánh sáng đường phố giữa các ngôi nhà.
* Nhân bản liên kết ánh sáng bằng `Alt + D`.
* Chia giao diện thành nhiều viewport để vừa quan sát render vừa chỉnh sửa scene.

---

## 2. Tổng quan hệ thống ánh sáng

Cảnh ngọn hải đăng ban đêm được chiếu sáng bởi ba thành phần chính:

```text
World Background màu xanh
        │
        ├── Ánh sáng nền tổng thể
        │
Sun Light màu xanh nhạt
        │
        ├── Mô phỏng ánh trăng
        ├── Làm rõ hình dạng đá
        └── Tạo rim light quanh hải đăng
        │
Point Lights màu vàng cam
        │
        ├── Giả lập đèn đường
        └── Tạo điểm sáng ấm giữa các ngôi nhà
```

Sự kết hợp giữa ánh sáng xanh lạnh và ánh sáng vàng ấm giúp scene có chiều sâu và tạo không khí ban đêm rõ ràng.

---

## 3. Thiết lập góc nhìn ban đầu

Trước khi chỉnh ánh sáng, hãy đưa viewport đến góc nhìn phù hợp.

Một bố cục hiệu quả có thể bao gồm:

* Camera nhìn từ phía mặt biển.
* Góc nhìn hơi thấp, hướng lên ngọn hải đăng.
* Đường chân trời nằm thấp hơn trung tâm khung hình.
* Có khoảng trống xung quanh hòn đảo để tạo cảm giác cô độc.
* Ngọn hải đăng là điểm nhấn chính của bố cục.

Sau khi tìm được góc nhìn phù hợp, chuyển sang **Rendered View** để đánh giá ánh sáng thực tế.

### Chuyển sang Rendered View

Nhấn:

```text
Z → Rendered
```

Hoặc chọn biểu tượng **Rendered View** ở góc trên bên phải viewport.

---

## 4. Xóa nguồn sáng mặc định

Scene ban đầu có thể đang chứa một Light object không cần thiết.

Để đánh giá chính xác ánh sáng môi trường:

1. Chọn Light object hiện có.
2. Nhấn `X`.
3. Chọn **Delete**.
4. Quan sát scene khi chỉ còn ánh sáng từ World và vật liệu phát sáng của hải đăng.

Việc tạm thời xóa đèn giúp xác định rõ nguồn sáng nào đang tác động lên scene.

---

## 5. Thiết lập ánh sáng môi trường bằng World Background

Trong Shader Editor, chuyển từ chế độ chỉnh vật liệu của object sang chỉnh môi trường:

```text
Shader Editor
     ↓
Object → World
```

Node chính của World thường gồm:

```text
Background → World Output
```

### Phím điều hướng node

| Phím                    | Chức năng                                     |
| ----------------------- | --------------------------------------------- |
| `Numpad .`              | Frame Selected — tập trung vào node đang chọn |
| `Home`                  | Frame All — hiển thị toàn bộ node             |
| `View > Frame Selected` | Tập trung vào node đang chọn                  |
| `View > Frame All`      | Hiển thị toàn bộ node                         |

### Không nên đặt Strength bằng 0

Nếu đặt:

```text
Background Strength = 0
```

scene sẽ gần như hoàn toàn tối. Ánh sáng từ vật liệu phát sáng của ngọn hải đăng thường không đủ để chiếu sáng toàn bộ môi trường.

Thay vào đó, nên:

* Giữ một lượng ánh sáng nền nhỏ.
* Chuyển màu Background sang xanh đậm.
* Giảm độ sáng bằng thông số **Value**.

### Màu ánh sáng nền gợi ý

| Thuộc tính |                          Giá trị tham khảo |
| ---------- | -----------------------------------------: |
| Hue        |                     Xanh lam hoặc xanh tím |
| Saturation |                               Khoảng `0.8` |
| Value      |                             Khoảng `0.064` |
| Strength   | Khoảng `1.0`, sau đó điều chỉnh theo scene |

Các giá trị trên không bắt buộc phải giống hoàn toàn. Mục tiêu là tạo đủ ánh sáng để nhìn thấy object nhưng không khiến cảnh trông giống ban ngày.

---

## 6. Vì sao ánh sáng ban đêm thường có màu xanh?

Trong thực tế, ánh trăng không nhất thiết có màu xanh đậm. Tuy nhiên, điện ảnh và đồ họa 3D thường sử dụng ánh sáng xanh để truyền tải cảm giác ban đêm.

Ánh sáng xanh có ba tác dụng chính:

* Giúp người xem vẫn nhìn thấy các object trong cảnh tối.
* Tạo sự khác biệt rõ ràng với ánh sáng ban ngày.
* Tạo tương phản với các nguồn sáng vàng hoặc cam trong scene.

```text
Ánh sáng xanh lạnh → môi trường ban đêm
Ánh sáng vàng ấm   → nhà cửa, đèn đường, sự sống
```

---

## 7. Thêm Sun Light để mô phỏng ánh trăng

Đưa 3D Cursor đến vị trí phù hợp, sau đó thêm Sun Light:

```text
Shift + A
→ Light
→ Sun
```

Vị trí của Sun Light không ảnh hưởng nhiều đến kết quả. Điều quan trọng nhất là **hướng xoay** của nó.

### Điều chỉnh Sun Light

| Thao tác              | Phím                          |
| --------------------- | ----------------------------- |
| Di chuyển             | `G`                           |
| Di chuyển theo trục Z | `G`, sau đó `Z`               |
| Xoay nguồn sáng       | `R`                           |
| Xoay theo trục cụ thể | `R`, sau đó `X`, `Y` hoặc `Z` |

Hãy xoay Sun Light để ánh sáng chiếu từ một bên hoặc từ phía sau ngọn hải đăng.

Không nên để ánh sáng chiếu trực diện từ phía camera vì scene có thể trở nên phẳng và thiếu chiều sâu.

---

## 8. Thiết lập màu và cường độ ánh trăng

Trong **Light Properties**, thay đổi màu Sun Light từ trắng sang xanh nhạt.

Thông số tham khảo:

| Thuộc tính | Giá trị gợi ý |
| ---------- | ------------: |
| Light Type |           Sun |
| Color      | Xanh lam nhạt |
| Strength   |  Khoảng `2–4` |

Có thể bắt đầu với:

```text
Strength = 2
```

Sau đó thử tăng lên:

```text
Strength = 3 hoặc 4
```

Giá trị phù hợp phụ thuộc vào:

* Màu World Background.
* Màu vật liệu.
* Góc chiếu sáng.
* Color Management.
* Render Engine đang sử dụng.

---

## 9. Tạo hiệu ứng Rim Light

**Rim light** là dải sáng xuất hiện quanh mép của object khi nguồn sáng chiếu từ phía sau hoặc chếch phía sau.

```text
Nguồn sáng
     ↓
   phía sau
      \
       \   viền sáng
        \  ┌────────┐
Camera →   │ Object │
           └────────┘
```

Trong cảnh ngọn hải đăng, rim light giúp:

* Tách ngọn hải đăng khỏi nền trời tối.
* Làm rõ hình dáng tổng thể.
* Tăng cảm giác chiều sâu.
* Tạo không khí điện ảnh.

Để tạo rim light:

1. Chuyển sang Top View.
2. Xác định vị trí camera.
3. Xoay Sun Light ra phía sau ngọn hải đăng.
4. Quan sát đường viền sáng trong Rendered View.
5. Tiếp tục tinh chỉnh góc xoay cho đến khi đạt hiệu ứng mong muốn.

---

## 10. Đặt camera theo góc nhìn viewport

Sau khi đã chọn được góc nhìn đẹp trong viewport, có thể đưa camera đến đúng vị trí đó bằng:

```text
Ctrl + Alt + Numpad 0
```

Lệnh này căn camera theo góc nhìn hiện tại của viewport.

### Khi không có bàn phím Numpad

Bạn có thể:

1. Chuyển sang Camera View.
2. Mở Sidebar bằng `N`.
3. Vào tab **View**.
4. Bật **Lock Camera to View**.
5. Điều hướng viewport như bình thường để di chuyển camera.
6. Tắt khóa sau khi hoàn thành.

### Bố cục camera gợi ý

* Camera cách hòn đảo một khoảng vừa phải.
* Có khoảng trống quanh đảo.
* Đường chân trời không nằm chính giữa khung hình.
* Hải đăng nằm gần một điểm mạnh của bố cục.
* Không zoom quá sát vì sẽ làm mất cảm giác cô độc giữa biển.

---

## 11. Chia giao diện thành hai viewport

Khi chỉnh ánh sáng, bạn nên sử dụng hai viewport:

| Viewport   | Mục đích                                  |
| ---------- | ----------------------------------------- |
| Viewport 1 | Camera View và Rendered View              |
| Viewport 2 | Top View hoặc góc nhìn tự do để chỉnh đèn |

### Cách chia viewport

1. Đưa chuột đến góc của một vùng làm việc.
2. Khi con trỏ đổi thành biểu tượng chia cửa sổ, kéo vào trong.
3. Thiết lập một viewport ở Camera View.
4. Thiết lập viewport còn lại ở Top View.

Cấu trúc làm việc:

```text
┌─────────────────────────┬─────────────────────────┐
│                         │                         │
│ Camera View             │ Top View                │
│ Rendered                │ Chỉnh Sun Light         │
│                         │                         │
└─────────────────────────┴─────────────────────────┘
```

Ưu điểm:

* Thấy kết quả render ngay khi xoay đèn.
* Dễ xác định hướng ánh sáng so với camera.
* Không phải liên tục chuyển đổi giữa Camera View và Top View.

---

## 12. Làm sạch viewport render

Trong viewport dùng để xem kết quả cuối, có thể tắt các thành phần không cần thiết.

### Tắt Overlays

Nhấn biểu tượng **Viewport Overlays** để ẩn:

* Đường viền object được chọn.
* Grid.
* 3D Cursor.
* Origin.
* Các biểu tượng hỗ trợ.

### Tắt Gizmos

Nhấn biểu tượng **Gizmos** để ẩn công cụ di chuyển, xoay và scale.

Việc này giúp viewport gần giống với kết quả render cuối cùng hơn.

---

## 13. Điều chỉnh vật liệu nền đá

Khi Sun Light chiếu vào nền đá, một số vùng có thể phản chiếu quá mạnh và trông giống nhựa.

Để khắc phục:

1. Chuyển Shader Editor từ World về Object.

```text
World → Object
```

2. Chọn object nền đá.
3. Chọn đúng material, chẳng hạn `Rocky Base`.
4. Tìm node **Principled BSDF**.
5. Tăng Roughness.

### Giá trị Roughness gợi ý

```text
Roughness ≈ 0.8–0.9
```

| Roughness | Kết quả                           |
| --------: | --------------------------------- |
|     `0.0` | Rất bóng, phản chiếu mạnh         |
|     `0.5` | Phản chiếu vừa phải               |
|     `0.8` | Bề mặt khá nhám                   |
| `0.9–1.0` | Bề mặt rất mờ, gần như không bóng |

Đá tự nhiên thường nên có Roughness cao, trừ trường hợp đá bị ướt hoặc được đánh bóng.

---

## 14. Tinh chỉnh hình dạng nền đá

Ánh sáng có thể làm lộ ra những vùng mesh quá phẳng hoặc phản chiếu không tự nhiên.

Có thể chỉnh nhẹ hình dạng nền đá:

1. Chọn nền đá.
2. Nhấn `Tab` để vào Edit Mode.
3. Chọn các vertex cần chỉnh.
4. Dùng `G` để di chuyển.
5. Nâng hoặc hạ một số vertex để phá vỡ vùng phản sáng lớn.

```text
Bề mặt quá đều
      ↓
Phản sáng thành một mảng lớn
      ↓
Thay đổi độ cao vertex
      ↓
Ánh sáng và bóng đổ tự nhiên hơn
```

Đây là bước tinh chỉnh nhỏ, không nên thay đổi quá mạnh hình dạng tổng thể của hòn đảo.

---

## 15. Thêm ánh sáng cho khu vực nhà ở

Để làm sáng khu vực giữa các ngôi nhà, sử dụng **Point Light**.

### Thêm Point Light

1. Dùng `Shift + Right Click` để đặt 3D Cursor giữa các ngôi nhà.
2. Nhấn:

```text
Shift + A
→ Light
→ Point
```

3. Dùng `G`, sau đó `Z` để đưa đèn lên khỏi mặt đất.
4. Đặt đèn ở vị trí tương tự một đèn đường.

Point Light phát sáng theo mọi hướng nên phù hợp với:

* Đèn đường.
* Đèn trong làng.
* Đèn trang trí.
* Nguồn sáng nhỏ giữa các ngôi nhà.

---

## 16. Chọn màu cho Point Light

Màu trắng thường tạo cảm giác lạnh và thiếu không khí.

Nên chuyển Point Light sang:

* Vàng nhạt.
* Vàng cam.
* Cam ấm.

```text
Ánh sáng xanh từ Moonlight
              +
Ánh sáng vàng từ nhà cửa
              ↓
Tương phản màu lạnh – ấm
              ↓
Scene có chiều sâu và cảm xúc hơn
```

Không nên tăng màu cam quá mạnh vì có thể làm khu vực nhà ở bị bão hòa màu.

---

## 17. Nhân bản liên kết ánh sáng bằng Alt + D

Sau khi tạo Point Light đầu tiên, có thể nhân bản sang khu vực khác bằng:

```text
Alt + D
```

Đây là **Linked Duplicate**.

Các bản sao liên kết dùng chung dữ liệu ánh sáng. Vì vậy, khi đổi:

* Màu ánh sáng.
* Công suất.
* Radius.
* Các thuộc tính Light Data khác.

Tất cả Point Light liên kết sẽ thay đổi cùng nhau.

### So sánh Shift + D và Alt + D

| Phím        | Loại bản sao      | Đặc điểm                      |
| ----------- | ----------------- | ----------------------------- |
| `Shift + D` | Duplicate độc lập | Mỗi đèn có thông số riêng     |
| `Alt + D`   | Linked Duplicate  | Các đèn dùng chung Light Data |

Trong bài này, `Alt + D` phù hợp hơn vì các đèn đường nên có màu sắc và cường độ giống nhau.

---

## 18. Quy trình bố trí đèn khu nhà

Một quy trình đơn giản:

1. Tạo Point Light đầu tiên giữa nhóm nhà thứ nhất.
2. Đặt màu vàng cam.
3. Điều chỉnh cường độ vừa đủ.
4. Nhấn `Alt + D`.
5. Di chuyển bản sao đến nhóm nhà thứ hai.
6. Tiếp tục `Alt + D` cho khu vực còn tối.
7. Quan sát toàn cảnh trong Camera View.
8. Thay đổi màu hoặc công suất từ một đèn để cập nhật tất cả đèn liên kết.

Không cần thiết phải dựng mô hình cột đèn nếu camera ở xa. Chỉ riêng hiệu ứng ánh sáng cũng có thể tạo cảm giác tồn tại của đèn đường.

---

## 19. Tinh chỉnh World Background lần cuối

Sau khi thêm Sun Light và Point Lights, có thể quay lại World Background để cân bằng toàn bộ scene.

Các điều chỉnh thường dùng:

* Tăng nhẹ Value nếu scene quá tối.
* Tăng màu xanh nếu không khí ban đêm chưa rõ.
* Giảm Saturation nếu màu xanh quá gắt.
* Giảm Strength nếu ánh sáng nền làm mất bóng đổ.

Giá trị tham khảo trong bài:

| Thuộc tính |         Giá trị gần đúng |
| ---------- | -----------------------: |
| Saturation |                    `0.8` |
| Value      |                  `0.064` |
| Strength   | Điều chỉnh theo mắt nhìn |

Không nên phụ thuộc tuyệt đối vào các con số. Hãy đánh giá theo kết quả trực tiếp trong Rendered View.

---

## 20. Sơ đồ quy trình thực hành

```text
Chọn góc nhìn viewport
          ↓
Chuyển sang Rendered View
          ↓
Xóa Light mặc định
          ↓
Thiết lập World Background màu xanh
          ↓
Thêm Sun Light
          ↓
Xoay Sun về phía sau hải đăng
          ↓
Tạo rim light
          ↓
Đặt camera theo viewport
          ↓
Chia giao diện thành hai viewport
          ↓
Tăng Roughness của nền đá
          ↓
Thêm Point Light màu vàng
          ↓
Nhân bản bằng Alt + D
          ↓
Cân bằng World, Sun và Point Lights
          ↓
Lưu file Blender
```

---

## 21. Phím tắt và công cụ quan trọng

| Thao tác                           | Phím/Công cụ            |
| ---------------------------------- | ----------------------- |
| Chuyển sang Rendered View          | `Z` → Rendered          |
| Thêm object hoặc Light             | `Shift + A`             |
| Xóa object                         | `X`                     |
| Di chuyển object                   | `G`                     |
| Di chuyển theo trục Z              | `G`, `Z`                |
| Xoay object                        | `R`                     |
| Đặt camera theo viewport           | `Ctrl + Alt + Numpad 0` |
| Camera View                        | `Numpad 0`              |
| Top View                           | `Numpad 7`              |
| Frame Selected trong Shader Editor | `Numpad .`              |
| Frame All trong Shader Editor      | `Home`                  |
| Đặt 3D Cursor                      | `Shift + Right Click`   |
| Duplicate độc lập                  | `Shift + D`             |
| Linked Duplicate                   | `Alt + D`               |
| Chuyển Object/Edit Mode            | `Tab`                   |
| Ẩn đường hỗ trợ                    | Viewport Overlays       |
| Ẩn gizmo                           | Viewport Gizmos         |

---

## 22. Bảng thiết lập ánh sáng tham khảo

| Thành phần          | Màu sắc       |    Cường độ tham khảo | Vai trò                     |
| ------------------- | ------------- | --------------------: | --------------------------- |
| World Background    | Xanh đậm      |   Strength khoảng `1` | Ánh sáng nền ban đêm        |
| Sun Light           | Xanh lam nhạt | Strength khoảng `2–4` | Ánh trăng và rim light      |
| Point Lights        | Vàng hoặc cam |  Tùy kích thước scene | Đèn đường giữa các ngôi nhà |
| Lighthouse Emission | Vàng sáng     |          Tùy vật liệu | Điểm nhấn của hải đăng      |

Các thông số cần được điều chỉnh dựa trên tỷ lệ scene và Render Engine.

---

## 23. Lưu ý và lỗi thường gặp

### Scene hoàn toàn tối

**Nguyên nhân:**

* World Strength bằng `0`.
* Sun Light quá yếu.
* Camera đang nhìn vào vùng không được chiếu sáng.

**Cách xử lý:**

* Tăng nhẹ World Background.
* Tăng Sun Strength.
* Kiểm tra hướng xoay của Sun.

---

### Scene trông giống ban ngày

**Nguyên nhân:**

* World Background quá sáng.
* Sun Light có cường độ quá cao.
* Màu ánh sáng quá trắng.

**Cách xử lý:**

* Giảm Value của Background.
* Chuyển ánh sáng sang xanh.
* Giảm Sun Strength.

---

### Nền đá trông giống nhựa

**Nguyên nhân:**

* Roughness quá thấp.
* Ánh sáng chiếu trực diện.
* Bề mặt mesh quá phẳng.

**Cách xử lý:**

* Tăng Roughness lên khoảng `0.8–0.9`.
* Xoay Sun Light.
* Điều chỉnh nhẹ các vertex của nền đá.

---

### Không xuất hiện rim light

**Nguyên nhân:**

* Sun Light đang chiếu từ phía camera.
* Nguồn sáng không nằm đủ xa về phía sau object.
* Cường độ ánh sáng quá thấp.

**Cách xử lý:**

* Quan sát scene từ Top View.
* Xoay Sun ra phía sau ngọn hải đăng.
* Tăng nhẹ Strength.

---

### Các Point Light không thay đổi cùng nhau

**Nguyên nhân:**

Bạn đã dùng `Shift + D` thay vì `Alt + D`.

**Cách xử lý:**

* Xóa các bản sao độc lập nếu cần.
* Nhân bản lại bằng `Alt + D`.
* Hoặc liên kết lại Light Data thủ công.

---

### Vô tình di chuyển camera

**Nguyên nhân:**

Tùy chọn **Lock Camera to View** vẫn đang bật.

**Cách xử lý:**

* Mở Sidebar bằng `N`.
* Vào tab **View**.
* Tắt **Lock Camera to View** sau khi đặt camera xong.

---

## 24. Checklist thực hành

* [ ] Đã chọn góc nhìn từ phía biển hướng lên ngọn hải đăng.
* [ ] Đã chuyển viewport sang Rendered View.
* [ ] Đã xóa nguồn sáng mặc định không cần thiết.
* [ ] Đã chuyển Shader Editor từ Object sang World.
* [ ] Đã đặt World Background thành màu xanh đậm.
* [ ] Đã thêm một Sun Light để mô phỏng ánh trăng.
* [ ] Đã đổi màu Sun Light sang xanh nhạt.
* [ ] Đã xoay Sun Light để tạo rim light.
* [ ] Đã căn camera theo góc nhìn viewport.
* [ ] Đã chia giao diện thành hai viewport.
* [ ] Đã tắt Overlays và Gizmos trong viewport xem render.
* [ ] Đã tăng Roughness của nền đá.
* [ ] Đã thêm Point Light màu vàng cam giữa các ngôi nhà.
* [ ] Đã dùng `Alt + D` để nhân bản liên kết các Point Light.
* [ ] Đã cân bằng độ sáng giữa World, Sun và Point Lights.
* [ ] Đã lưu file Blender trước khi chuyển sang bài tiếp theo.

---

## 25. Bài tập mở rộng

### Bài tập 1: Thử ba góc ánh trăng

Tạo ba phiên bản:

1. Ánh sáng chiếu từ bên trái.
2. Ánh sáng chiếu từ bên phải.
3. Ánh sáng chiếu từ phía sau.

So sánh:

* Bóng đổ.
* Rim light.
* Độ rõ của nền đá.
* Mức độ nổi bật của ngọn hải đăng.

### Bài tập 2: Tạo tương phản lạnh – ấm

* World và Sun dùng màu xanh lạnh.
* Point Lights dùng màu vàng cam.
* Điều chỉnh sao cho ánh sáng vàng không lấn át ánh trăng.

### Bài tập 3: Tạo cảnh đêm tối hơn

* Giảm World Value.
* Tăng nhẹ ánh sáng từ các ngôi nhà.
* Giữ viền hải đăng đủ rõ bằng rim light.
* Đảm bảo người xem vẫn nhận biết được hình dạng hòn đảo.

---

## 26. Tóm tắt

Bài học hoàn thiện hệ thống ánh sáng ban đêm cho cảnh ngọn hải đăng bằng ba nhóm nguồn sáng:

* **World Background màu xanh** cung cấp ánh sáng môi trường.
* **Sun Light màu xanh nhạt** mô phỏng ánh trăng và tạo rim light.
* **Point Lights màu vàng cam** tạo ánh sáng ấm giữa khu vực nhà ở.

Bên cạnh việc thêm đèn, bài học còn nhấn mạnh mối liên hệ giữa ánh sáng và vật liệu. Nền đá cần Roughness cao để tránh phản chiếu giống nhựa, trong khi vị trí và hướng của Sun Light quyết định chiều sâu, bóng đổ và đường viền của ngọn hải đăng.

Việc sử dụng hai viewport giúp quá trình chỉnh ánh sáng nhanh và trực quan hơn: một viewport hiển thị kết quả camera, viewport còn lại dùng để xoay đèn và điều chỉnh scene. Sau bước này, cảnh đã sẵn sàng cho các công đoạn render và hậu kỳ cuối cùng.
