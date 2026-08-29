# 018 — Material Slots

| Thuộc tính        | Nội dung                                           |
| ----------------- | -------------------------------------------------- |
| **Module**        | Module 01 — Introduction & Setup                   |
| **Bài học**       | Material Slots                                     |
| **Thời lượng**    | 9:43                                               |
| **Chủ đề chính**  | Gán nhiều vật liệu cho một đối tượng               |
| **Bài thực hành** | Tô vật liệu cho đá, mặt biển, nhà và ngọn hải đăng |

---

## 1. Mục tiêu bài học

Sau bài học này, người học có thể:

* Hiểu khái niệm **Material Slot** trong Blender.
* Gán nhiều vật liệu khác nhau lên cùng một object.
* Tạo vật liệu mới hoặc sử dụng lại vật liệu đã có.
* Gán vật liệu cho từng vùng mặt cụ thể trong **Edit Mode**.
* Sử dụng các nút **Assign**, **Select** và **Deselect**.
* Tạo các dải vật liệu đỏ – trắng cho ngọn hải đăng.
* Tạo vật liệu phát sáng bằng thuộc tính **Emission**.
* Bật tính năng phản xạ trong Eevee để vật liệu nước hiển thị tốt hơn.
* Kiểm tra và điều chỉnh lại hình dạng object sau khi thêm vật liệu.

---

## 2. Material Slot là gì?

Một object trong Blender có thể chứa nhiều **Material Slot**.

Mỗi Material Slot giữ tham chiếu đến một vật liệu. Các face trên mesh có thể được chỉ định sử dụng một trong các slot đó.

Ví dụ, một ngôi nhà có thể là một object duy nhất nhưng sử dụng:

* Vật liệu vàng nhạt cho tường.
* Vật liệu đỏ cho mái.
* Vật liệu nâu cho cửa.
* Vật liệu trong suốt cho cửa sổ.

### Sơ đồ hoạt động

```text
Object
│
├── Material Slot 1 → House_Plaster
│   └── Các face thuộc phần tường
│
├── Material Slot 2 → House_Roof
│   └── Các face thuộc phần mái
│
└── Material Slot 3 → Window_Glass
    └── Các face thuộc cửa sổ
```

Mỗi face chỉ sử dụng một Material Slot tại một thời điểm.

---

## 3. Chu trình gán vật liệu cơ bản

Quy trình phổ biến nhất khi sử dụng Material Slot:

```text
Chọn object
    ↓
Mở Material Properties
    ↓
Thêm Material Slot
    ↓
Tạo hoặc chọn vật liệu
    ↓
Vào Edit Mode
    ↓
Chọn các face cần tô
    ↓
Chọn đúng Material Slot
    ↓
Nhấn Assign
```

Điểm quan trọng nhất:

> Chỉ chọn Material Slot chưa đủ. Phải nhấn **Assign** để gán vật liệu cho các face đang được chọn.

---

# Phần I — Chuẩn bị Shading Workspace

## 4. Sắp xếp lại khu vực làm việc

Trong bài học, phần lớn thao tác vật liệu được thực hiện trong **Shading Workspace**.

Bố cục cần giữ lại:

* Một cửa sổ **3D Viewport** để quan sát mô hình.
* Một cửa sổ **Shader Editor** để chỉnh vật liệu.

Nếu có các vùng không cần thiết, có thể gộp chúng lại.

### Cách gộp hai vùng

1. Đưa chuột tới góc của một khu vực.
2. Khi con trỏ đổi thành biểu tượng dấu cộng hoặc đường chéo, nhấn và kéo sang vùng kế bên.
3. Thả chuột để hợp nhất hai vùng.

Ngoài ra:

1. Nhấp chuột phải vào đường phân cách giữa hai vùng.
2. Chọn **Join Areas**.
3. Chọn vùng muốn giữ lại.

---

## 5. Khôi phục Workspace khi bố cục bị rối

Blender không hỗ trợ Undo trực tiếp cho thao tác chia hoặc gộp khu vực giao diện.

Nếu Workspace bị chia thành quá nhiều vùng và khó sửa:

1. Nhấn nút dấu `+` trong thanh Workspace.
2. Chọn:

```text
General → Shading
```

3. Blender sẽ tạo một Shading Workspace mới với bố cục mặc định.
4. Nhấp chuột phải vào Workspace cũ.
5. Chọn **Delete** để xóa.
6. Đổi tên Workspace mới thành `Shading` nếu cần.

---

# Phần II — Tạo vật liệu cho môi trường

## 6. Tạo vật liệu cho phần đá

### Các bước thực hiện

1. Chọn object phần đá hoặc nền đá.
2. Mở **Material Properties** hoặc Shader Editor.
3. Nhấn **New** để tạo vật liệu mới.
4. Đặt tên:

```text
Rock
```

5. Thay đổi **Base Color** thành màu xám đậm.
6. Chuyển viewport sang **Material Preview** để xem kết quả.

### Gợi ý thông số

| Thuộc tính | Giá trị gợi ý       |
| ---------- | ------------------- |
| Base Color | Xám đậm             |
| Roughness  | Trung bình hoặc cao |
| Metallic   | 0                   |

Đá thường có bề mặt khá nhám nên không cần phản xạ quá mạnh.

---

## 7. Tạo vật liệu cho mặt biển

### Các bước thực hiện

1. Chọn object mặt nước.
2. Tạo vật liệu mới.
3. Đặt tên:

```text
Water
```

4. Chọn màu xanh dương đậm.
5. Điều chỉnh **Roughness** để kiểm soát độ rõ của phản xạ.

### Ý nghĩa của Roughness

```text
Roughness thấp
    ↓
Phản xạ rõ, sắc nét
    ↓
Bề mặt giống gương hoặc nước rất phẳng
```

```text
Roughness cao
    ↓
Phản xạ mờ
    ↓
Bề mặt giống nước có sóng hoặc vật liệu nhám
```

Không nên đặt Roughness quá thấp nếu muốn mặt biển có cảm giác tự nhiên.

---

## 8. Bật phản xạ trong Eevee

Nếu mặt nước không hiển thị phản xạ như mong muốn:

1. Mở **Render Properties**.
2. Kiểm tra Render Engine đang sử dụng là **Eevee**.
3. Bật tùy chọn phản xạ hoặc **Ray Tracing**.
4. Quay lại Material Preview hoặc Rendered View.
5. Tiếp tục điều chỉnh Roughness của vật liệu nước.

> Tên và vị trí của tùy chọn phản xạ có thể thay đổi tùy theo phiên bản Blender.

---

# Phần III — Gán hai vật liệu cho một ngôi nhà

## 9. Xác định các vùng vật liệu

Một ngôi nhà trong bài học sử dụng hai vật liệu:

| Vùng  | Vật liệu                 |
| ----- | ------------------------ |
| Tường | Vàng nhạt hoặc trắng ngà |
| Mái   | Đỏ sẫm                   |

Cấu trúc Material Slot:

```text
House
│
├── Slot 1 → House_Plaster
│   └── Tường nhà
│
└── Slot 2 → House_Roof
    └── Mái nhà
```

---

## 10. Cách thứ nhất: Tạo vật liệu trước rồi thêm Slot

### Bước 1: Tạo vật liệu tường

1. Chọn object ngôi nhà.
2. Nhấn **New** để tạo vật liệu.
3. Đặt tên:

```text
House_Plaster
```

4. Chọn màu trắng ngà hoặc vàng nhạt.
5. Điều chỉnh Roughness để vật liệu có cảm giác giống tường trát.

Vật liệu này sẽ nằm trong **Material Slot 1**.

---

### Bước 2: Thêm Material Slot cho mái

1. Trong Material Properties, nhấn nút `+`.
2. Một slot mới được tạo nhưng chưa có vật liệu.
3. Chọn slot mới.
4. Nhấn **New**.
5. Đặt tên:

```text
House_Roof
```

6. Chọn màu đỏ hoặc đỏ cam.
7. Giảm nhẹ độ sáng nếu màu quá rực.

---

### Bước 3: Gán vật liệu cho mái

1. Nhấn `Tab` để vào **Edit Mode**.
2. Nhấn `3` để chuyển sang **Face Select**.
3. Chọn các face thuộc phần mái.
4. Trong Material Properties, chọn slot `House_Roof`.
5. Nhấn **Assign**.
6. Nhấn `Tab` để quay lại Object Mode và kiểm tra.

---

## 11. Cách thứ hai: Tạo các Slot trước

Có thể tạo toàn bộ Material Slot trước rồi mới gán vật liệu.

### Các bước thực hiện

1. Chọn ngôi nhà.
2. Trong Material Properties, tạo hai slot.
3. Chọn Slot 1.
4. Từ danh sách vật liệu, chọn:

```text
House_Plaster
```

5. Chọn Slot 2.
6. Từ danh sách vật liệu, chọn:

```text
House_Roof
```

7. Vào Edit Mode.
8. Chọn các face của mái.
9. Chọn Slot 2.
10. Nhấn **Assign**.

Cả hai cách đều cho kết quả giống nhau.

---

## 12. Ý nghĩa các nút trong Material Slot

Khi đang ở Edit Mode, Blender hiển thị ba nút quan trọng:

| Nút          | Chức năng                                            |
| ------------ | ---------------------------------------------------- |
| **Assign**   | Gán các face đang chọn vào Material Slot hiện tại    |
| **Select**   | Chọn tất cả face đang sử dụng Material Slot hiện tại |
| **Deselect** | Bỏ chọn các face đang sử dụng Material Slot hiện tại |

### Ví dụ kiểm tra mái nhà

1. Chọn Slot `House_Roof`.
2. Nhấn **Select**.
3. Nếu toàn bộ face của mái được chọn, vật liệu đã được gán đúng.
4. Nếu có face tường bị chọn, face đó đã bị gán nhầm vật liệu.

---

## 13. Vật liệu trên Linked Duplicate

Nếu các ngôi nhà được tạo bằng **Linked Duplicate**, chúng có thể dùng chung mesh data và vật liệu.

Khi thay đổi vật liệu trên một object, các linked duplicate có thể cập nhật theo.

Ví dụ:

```text
House_A
House_B
House_C
    ↓
Dùng chung Mesh Data
    ↓
Cùng cập nhật House_Plaster và House_Roof
```

Điều này hữu ích khi muốn nhiều ngôi nhà có cùng kiểu vật liệu.

Tuy nhiên, nếu muốn mỗi ngôi nhà có màu riêng, cần kiểm tra:

* Object có đang chia sẻ mesh data hay không.
* Material đang liên kết theo **Object** hay **Data**.
* Có cần chuyển object thành bản sao độc lập hay không.

---

# Phần IV — Tạo vật liệu cho ngọn hải đăng

## 14. Phân tích các vùng vật liệu

Ngọn hải đăng trong bài học sử dụng bốn vật liệu:

| Slot | Vật liệu         | Vùng sử dụng           |
| ---- | ---------------- | ---------------------- |
| 1    | Lighthouse_White | Các dải thân màu trắng |
| 2    | Lighthouse_Red   | Các dải đỏ và phần mái |
| 3    | Lighthouse_Base  | Phần chân màu xám      |
| 4    | Lighthouse_Light | Khu vực phát sáng      |

### Sơ đồ

```text
Lighthouse
│
├── Slot 1 → Lighthouse_White
├── Slot 2 → Lighthouse_Red
├── Slot 3 → Lighthouse_Base
└── Slot 4 → Lighthouse_Light
```

---

## 15. Chia thân hải đăng bằng Loop Cut

Ban đầu, thân hải đăng chưa có đủ các vòng cạnh để tạo dải đỏ – trắng.

Cần dùng **Loop Cut** để chia thân thành nhiều phần.

### Các bước thực hiện

1. Chọn ngọn hải đăng.
2. Nhấn `Tab` để vào Edit Mode.
3. Nhấn:

```text
Ctrl + R
```

4. Di chuyển chuột lên thân hải đăng.
5. Lăn con lăn chuột để tăng số đường cắt.
6. Tạo khoảng ba đường cắt.
7. Nhấp chuột trái hai lần để xác nhận vị trí.

Nếu không có con lăn chuột:

* Dùng `Numpad +` hoặc `Numpad -`.
* Hoặc chỉnh **Number of Cuts** trong bảng thao tác.

---

## 16. Lưu ý về Snapping

Nếu bật Snapping khi tạo Loop Cut, các đường cắt hoặc phần mesh có thể bị di chuyển tới vị trí không mong muốn.

Trước khi chia thân hải đăng:

1. Kiểm tra biểu tượng nam châm.
2. Tắt Snapping nếu không cần thiết.
3. Sau đó thực hiện lại `Ctrl + R`.

---

## 17. Tạo bốn Material Slot

1. Chọn ngọn hải đăng.
2. Mở Material Properties.
3. Tạo tổng cộng bốn Material Slot.
4. Tạo hoặc gán vật liệu cho từng slot.

### Slot 1 — Vật liệu trắng

Tên gợi ý:

```text
Lighthouse_White
```

Thiết lập:

* Base Color: trắng.
* Roughness: trung bình.
* Metallic: 0.

---

### Slot 2 — Vật liệu đỏ

Tên gợi ý:

```text
Lighthouse_Red
```

Thiết lập:

* Base Color: đỏ tươi hoặc đỏ đậm.
* Roughness: trung bình.
* Có thể giảm độ sáng sau khi thiết lập ánh sáng cho scene.

---

### Slot 3 — Vật liệu chân đế

Tên gợi ý:

```text
Lighthouse_Base
```

Thiết lập:

* Base Color: xám.
* Màu có thể sáng hơn một chút so với phần đá bên dưới.
* Roughness: tương đối cao.

Có thể dùng **Eyedropper** để lấy màu từ vật thể khác, sau đó điều chỉnh lại độ sáng.

---

### Slot 4 — Vật liệu phát sáng

Tên gợi ý:

```text
Lighthouse_Light
```

Vật liệu này được gán cho khu vực đèn trên đỉnh hải đăng.

---

## 18. Tạo vật liệu Emission

Trong các phiên bản Blender mới, Principled BSDF có các thông số Emission tích hợp.

Các thuộc tính chính:

| Thuộc tính        | Chức năng            |
| ----------------- | -------------------- |
| Emission Color    | Màu ánh sáng phát ra |
| Emission Strength | Cường độ phát sáng   |

### Thiết lập gợi ý

```text
Emission Color: vàng nhạt
Emission Strength: khoảng 20–70
```

Cường độ chính xác phụ thuộc vào:

* Render Engine.
* Exposure.
* Hệ thống Color Management.
* Ánh sáng môi trường.
* Hiệu ứng Bloom hoặc Glare.

---

## 19. Gán Emission cho vùng đèn

1. Vào Edit Mode.
2. Chuyển sang Face Select bằng phím `3`.
3. Chọn vòng face thuộc khu vực đèn.

Có thể chọn một vòng face bằng:

```text
Alt + Nhấp chuột trái
```

4. Chọn Slot `Lighthouse_Light`.
5. Nhấn **Assign**.
6. Quay lại Object Mode để quan sát.

Khi tăng Emission Strength, vùng đèn sẽ trở nên sáng hơn.

Màu vàng có thể dần chuyển gần sang trắng khi cường độ quá cao. Đây là hiện tượng bình thường vì vùng phát sáng bị tăng độ chói.

---

# Phần V — Gán các dải đỏ và trắng

## 20. Chọn một vòng face

Để chọn một vòng face chạy quanh thân hải đăng:

1. Vào Face Select.
2. Giữ `Alt`.
3. Nhấp chuột trái vào một cạnh nằm trong vòng cần chọn.

Blender sẽ chọn toàn bộ dải face liên tiếp.

---

## 21. Mở rộng vùng chọn

Sau khi chọn một vòng face, có thể mở rộng sang các face lân cận bằng:

```text
Ctrl + Numpad +
```

Lệnh này còn được gọi là:

```text
Select More
```

Để thu nhỏ vùng chọn:

```text
Ctrl + Numpad -
```

Hoặc sử dụng menu:

```text
Select → More/Less
```

---

## 22. Gán vật liệu đỏ

1. Chọn vòng face cần tô đỏ.
2. Mở rộng vùng chọn nếu cần.
3. Trong Material Properties, chọn:

```text
Lighthouse_Red
```

4. Nhấn **Assign**.

Lặp lại với:

* Dải đỏ trên thân.
* Dải đỏ gần đỉnh.
* Phần mái hoặc phần chóp.

---

## 23. Giữ vật liệu trắng mặc định

Thông thường, toàn bộ mesh ban đầu sử dụng Material Slot đầu tiên.

Nếu Slot 1 là `Lighthouse_White`, các face chưa được gán sang slot khác sẽ tiếp tục giữ vật liệu trắng.

Vì vậy, không nhất thiết phải chọn từng dải trắng và nhấn Assign lại.

Quy trình nhanh hơn:

```text
Toàn bộ mesh → Mặc định màu trắng
        ↓
Chỉ chọn các dải đỏ → Assign màu đỏ
        ↓
Chọn chân đế → Assign màu xám
        ↓
Chọn khu vực đèn → Assign Emission
```

---

## 24. Gán vật liệu xám cho chân đế

1. Vào Edit Mode.
2. Chọn các face ở phần chân hải đăng.
3. Dùng `Ctrl + Numpad +` nếu cần mở rộng vùng chọn.
4. Chọn Slot `Lighthouse_Base`.
5. Nhấn **Assign**.
6. Quay lại Object Mode để kiểm tra.

---

# Phần VI — Điều chỉnh hình dạng sau khi tạo vật liệu

## 25. Thu nhỏ phần đỉnh hải đăng

Nếu phần đèn hoặc mái trông quá lớn:

1. Vào Edit Mode.
2. Chuyển sang Wireframe hoặc bật X-Ray.
3. Chọn toàn bộ vertex của phần đỉnh.
4. Nhấn:

```text
S
```

5. Di chuột vào trong để thu nhỏ.

Nếu chỉ muốn scale theo mặt phẳng ngang:

```text
Shift + Z
```

Điều này khóa trục Z và chỉ scale theo X, Y.

```text
S → Shift + Z
```

---

## 26. Di chuyển các vòng cạnh

Có thể chọn một vòng vertex hoặc face rồi di chuyển để điều chỉnh tỷ lệ hải đăng.

Tuy nhiên, cần lưu ý:

* Sau khi thêm Loop Cut, thân hải đăng có nhiều vòng cạnh hơn.
* Di chuyển một vòng cạnh có thể làm thân bị méo.
* Nên điều chỉnh với khoảng cách nhỏ.
* Giữ `Shift` trong lúc biến đổi để thao tác chính xác hơn.

Một chút biến dạng nhẹ có thể giúp mô hình bớt cứng và tự nhiên hơn.

---

## 27. Kiểm tra phần đá bị nhô ra

Sau khi hoàn thiện vật liệu:

1. Chọn phần đá.
2. Đi vòng quanh mô hình để kiểm tra.
3. Tìm các vertex hoặc face nhô quá xa ra ngoài mặt nước.
4. Vào Edit Mode.
5. Chuyển sang Vertex Select.
6. Di chuyển các vertex vào trong.

Mục tiêu:

* Không để phần đá xuyên hoặc chồng lên mặt nước bất hợp lý.
* Tránh các phần nhô quá mạnh làm bố cục mất cân đối.
* Giữ hình dáng tự nhiên, không quá đối xứng.

---

# Phần VII — Công cụ và phím tắt

## 28. Bảng phím tắt

| Thao tác                     | Phím tắt                |
| ---------------------------- | ----------------------- |
| Chuyển Object Mode/Edit Mode | `Tab`                   |
| Face Select                  | `3`                     |
| Vertex Select                | `1`                     |
| Edge Select                  | `2`                     |
| Tạo Loop Cut                 | `Ctrl + R`              |
| Chọn Face Loop               | `Alt + Nhấp chuột trái` |
| Thêm vùng chọn liền kề       | `Ctrl + Numpad +`       |
| Thu nhỏ vùng chọn            | `Ctrl + Numpad -`       |
| Scale                        | `S`                     |
| Scale trên mặt phẳng XY      | `S`, sau đó `Shift + Z` |
| Xoay theo trục Z             | `R`, sau đó `Z`         |
| Xoay 180 độ                  | `R`, `Z`, `180`         |
| Focus object đang chọn       | `Numpad .`              |
| Mở Shading Pie Menu          | `Z`                     |
| Material Preview             | `Z` → Material Preview  |
| Rendered View                | `Z` → Rendered          |
| Wireframe                    | `Z` → Wireframe         |
| Undo                         | `Ctrl + Z`              |

---

## 29. Các thao tác Material Slot

| Thao tác                   | Vị trí                      |
| -------------------------- | --------------------------- |
| Thêm Material Slot         | Nút `+` cạnh danh sách slot |
| Xóa Material Slot          | Nút `-` cạnh danh sách slot |
| Tạo vật liệu mới           | Nút **New**                 |
| Chọn vật liệu có sẵn       | Dropdown vật liệu           |
| Gán vật liệu cho face      | **Assign**                  |
| Chọn face theo vật liệu    | **Select**                  |
| Bỏ chọn face theo vật liệu | **Deselect**                |

---

# Phần VIII — Lỗi thường gặp

## 30. Chọn Slot nhưng vật liệu không xuất hiện

### Nguyên nhân

Người dùng đã chọn Material Slot nhưng chưa nhấn **Assign**.

### Cách khắc phục

```text
Chọn face
    ↓
Chọn Material Slot
    ↓
Nhấn Assign
```

---

## 31. Nút Assign không xuất hiện

### Nguyên nhân

Object đang ở Object Mode.

### Cách khắc phục

1. Chọn object mesh.
2. Nhấn `Tab` để vào Edit Mode.
3. Các nút Assign, Select và Deselect sẽ xuất hiện.

---

## 32. Gán vật liệu nhầm vùng

### Cách kiểm tra

1. Chọn Material Slot.
2. Nhấn **Select**.
3. Quan sát các face được chọn.
4. Nếu có face sai:

   * Bỏ chọn hoặc chọn lại vùng chính xác.
   * Chọn đúng Material Slot.
   * Nhấn Assign.

---

## 33. Material Slot trống

Một Material Slot mới tạo có thể chưa chứa vật liệu.

Slot trống thường hiển thị màu trắng hoặc không có tên vật liệu.

### Cách khắc phục

* Nhấn **New** để tạo vật liệu.
* Hoặc chọn vật liệu có sẵn trong dropdown.

---

## 34. Thay đổi vật liệu làm nhiều object cùng đổi

### Nguyên nhân

Các object có thể là Linked Duplicate và đang dùng chung mesh data hoặc material data.

### Cách khắc phục

* Kiểm tra liên kết Object/Data.
* Tạo bản sao vật liệu độc lập.
* Tạo mesh data độc lập nếu cần.
* Tránh chỉnh trực tiếp vật liệu dùng chung khi muốn mỗi object có màu riêng.

---

## 35. Mặt nước không có phản xạ

### Nguyên nhân có thể

* Chưa bật Ray Tracing hoặc tùy chọn phản xạ trong Eevee.
* Roughness quá cao.
* Scene không có vật thể hoặc ánh sáng phù hợp để phản chiếu.
* Đang xem trong Solid Mode.

### Cách khắc phục

1. Chuyển sang Material Preview hoặc Rendered View.
2. Kiểm tra Eevee Ray Tracing.
3. Giảm Roughness.
4. Kiểm tra ánh sáng và môi trường.

---

## 36. Emission sáng trắng thay vì vàng

### Nguyên nhân

Emission Strength quá cao làm màu bị đẩy gần sang trắng.

### Cách khắc phục

* Giảm Emission Strength.
* Chọn màu vàng đậm hơn.
* Điều chỉnh Exposure.
* Kiểm tra Color Management.
* Thêm hiệu ứng Glare hoặc Bloom ở bước hậu kỳ phù hợp.

---

## 37. Loop Cut bị lệch hoặc di chuyển sai

### Nguyên nhân

Snapping đang được bật.

### Cách khắc phục

1. Undo bằng `Ctrl + Z`.
2. Tắt biểu tượng nam châm.
3. Thực hiện lại `Ctrl + R`.

---

## 38. Xóa Material Slot đang được sử dụng

Nếu xóa một slot đang được gán cho face:

* Chỉ số vật liệu của các face có thể thay đổi.
* Face có thể chuyển sang vật liệu khác.
* Một số vùng có thể hiển thị sai hoặc mất vật liệu.

Trước khi xóa slot:

1. Chọn slot.
2. Nhấn **Select** để kiểm tra các face đang sử dụng.
3. Gán các face đó sang slot khác nếu cần.
4. Sau đó mới xóa slot.

---

# Phần IX — Quy trình thực hành hoàn chỉnh

## 39. Tạo vật liệu cho toàn bộ scene

### Bước 1 — Đá

* Tạo vật liệu `Rock`.
* Chọn màu xám đậm.
* Tăng Roughness.

### Bước 2 — Mặt biển

* Tạo vật liệu `Water`.
* Chọn màu xanh đậm.
* Điều chỉnh Roughness.
* Bật Ray Tracing trong Eevee.

### Bước 3 — Các ngôi nhà

* Slot 1: `House_Plaster`.
* Slot 2: `House_Roof`.
* Chọn các face mái.
* Nhấn Assign cho vật liệu mái.

### Bước 4 — Ngọn hải đăng

* Tạo ba Loop Cut trên thân.
* Slot 1: `Lighthouse_White`.
* Slot 2: `Lighthouse_Red`.
* Slot 3: `Lighthouse_Base`.
* Slot 4: `Lighthouse_Light`.
* Gán vật liệu đỏ cho các dải thân và mái.
* Gán xám cho chân đế.
* Gán Emission cho khu vực đèn.

### Bước 5 — Kiểm tra mô hình

* Kiểm tra các face bị gán sai vật liệu.
* Kiểm tra đá có nhô quá xa hay không.
* Điều chỉnh kích thước phần đỉnh hải đăng.
* Quan sát trong Material Preview và Rendered View.

### Bước 6 — Lưu dự án

```text
File → Save
```

Hoặc:

```text
Ctrl + S
```

---

# Phần X — Bài tập thực hành

## 40. Bài tập 1: Ngôi nhà hai vật liệu

Tạo một ngôi nhà sử dụng:

* Vật liệu vàng nhạt cho tường.
* Vật liệu đỏ cho mái.

Yêu cầu:

* Chỉ sử dụng một object.
* Sử dụng hai Material Slot.
* Gán mái bằng Face Select và Assign.

---

## 41. Bài tập 2: Ngọn hải đăng bốn vật liệu

Tạo ngọn hải đăng sử dụng:

1. Màu trắng cho thân.
2. Màu đỏ cho các dải.
3. Màu xám cho chân đế.
4. Emission vàng cho khu vực đèn.

Yêu cầu:

* Sử dụng Loop Cut để chia thân.
* Chọn các vòng face bằng `Alt + Click`.
* Kiểm tra từng slot bằng nút Select.

---

## 42. Bài tập mở rộng

Thêm các Material Slot mới cho ngôi nhà:

* Cửa gỗ.
* Cửa sổ kính.
* Ống khói.
* Viền mái.

Sơ đồ gợi ý:

```text
House
│
├── Slot 1 → Wall
├── Slot 2 → Roof
├── Slot 3 → Door
├── Slot 4 → Window
└── Slot 5 → Chimney
```

---

# 43. Checklist thực hành

## Material Slot

* [ ] Đã tạo được nhiều Material Slot trên cùng một object.
* [ ] Mỗi slot đã chứa đúng vật liệu.
* [ ] Đã chọn face trong Edit Mode.
* [ ] Đã nhấn Assign sau khi chọn vật liệu.
* [ ] Đã dùng Select để kiểm tra vùng được gán.
* [ ] Không còn face bị gán sai vật liệu.

## Ngôi nhà

* [ ] Tường sử dụng vật liệu `House_Plaster`.
* [ ] Mái sử dụng vật liệu `House_Roof`.
* [ ] Các linked duplicate hiển thị đúng vật liệu.

## Ngọn hải đăng

* [ ] Thân đã được chia bằng Loop Cut.
* [ ] Các dải đỏ – trắng được phân bố đúng.
* [ ] Chân đế sử dụng vật liệu xám.
* [ ] Khu vực đèn sử dụng Emission.
* [ ] Phần đỉnh có tỷ lệ cân đối.

## Môi trường

* [ ] Đá có vật liệu xám đậm.
* [ ] Mặt biển có vật liệu xanh phản xạ.
* [ ] Eevee đã bật tính năng phản xạ cần thiết.
* [ ] Không có phần đá nhô ra bất hợp lý.
* [ ] Dự án đã được lưu.

---

# 44. Tóm tắt

**Material Slots** cho phép một object sử dụng nhiều vật liệu trên các vùng face khác nhau.

Quy trình cốt lõi là:

```text
Thêm Slot
    ↓
Tạo hoặc chọn Material
    ↓
Vào Edit Mode
    ↓
Chọn Face
    ↓
Chọn Slot
    ↓
Assign
```

Trong bài thực hành:

* Đá được gán vật liệu xám.
* Mặt biển được gán vật liệu xanh phản xạ.
* Mỗi ngôi nhà sử dụng vật liệu riêng cho tường và mái.
* Ngọn hải đăng sử dụng bốn vật liệu: trắng, đỏ, xám và phát sáng.

Đây là kỹ thuật nền tảng để tạo các object có nhiều vùng bề mặt khác nhau mà không cần tách chúng thành nhiều object riêng biệt.
