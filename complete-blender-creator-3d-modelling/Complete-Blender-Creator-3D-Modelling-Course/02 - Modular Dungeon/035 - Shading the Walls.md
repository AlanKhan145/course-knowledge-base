# 035 — Shading the Walls

| Thuộc tính       | Nội dung                                         |
| ---------------- | ------------------------------------------------ |
| **Module**       | Module 02 — Modular Dungeon                      |
| **Bài học**      | Shading the Walls                                |
| **Thời lượng**   | 10:42                                            |
| **Chủ đề chính** | Gán nhiều vật liệu cho tường bằng Material Slots |

## 1. Mục tiêu bài học

Sau bài học này, bạn có thể:

* Sắp xếp lại workspace **Shading** để thao tác thuận tiện hơn.
* Sử dụng **Material Slots** để gán nhiều vật liệu cho từng phần của cùng một object.
* Chọn các nhóm hình học rời nhau bằng **Select Linked**.
* Sử dụng **Select Inverse**, **Hide**, **Unhide** và **Local View** để cô lập vùng cần chỉnh sửa.
* Thu nhỏ vùng chọn bằng **Select Less**.
* Gán vật liệu xám sáng cho một số viên đá nhằm tạo biến thể màu.
* Áp dụng vật liệu nhất quán lên các module tường và cửa.
* Hiểu cách vật liệu hoạt động với **Linked Duplicate**.

---

## 2. Tổng quan quy trình

```text
Điều chỉnh Shading Workspace
            ↓
Chọn module tường
            ↓
Vào Edit Mode
            ↓
Dùng Select Linked để chọn từng phần
            ↓
Ẩn các phần không cần thiết
            ↓
Chọn nhóm mặt đá cần đổi màu
            ↓
Tạo Material Slot mới
            ↓
Gán vật liệu Gray Light
            ↓
Điều chỉnh Roughness
            ↓
Lặp lại cho toàn bộ module tường
```

---

## 3. Điều chỉnh Shading Workspace

Chuyển sang workspace:

```text
Shading
```

Bố cục mặc định có thể chứa nhiều vùng không cần thiết. Trong bài học, workspace được chỉnh lại thành hai vùng chính:

* **3D Viewport** ở bên trái.
* **Shader Editor** ở bên phải.

### 3.1. Gộp các vùng không cần thiết

Di chuyển con trỏ đến góc của một vùng cho đến khi xuất hiện biểu tượng kéo chéo, sau đó kéo sang vùng bên cạnh để gộp hai vùng.

Có thể tiếp tục điều chỉnh kích thước để 3D Viewport chiếm phần lớn màn hình.

### 3.2. Chuyển loại Editor

Ở góc trên bên trái của một vùng, mở menu Editor Type và chọn:

```text
Shader Editor
```

Nếu thanh bên phải của Shader Editor đang mở, nhấn:

```text
N
```

để ẩn nó.

Sau đó, zoom vào node **Principled BSDF** để dễ chỉnh các tham số vật liệu.

### Bố cục gợi ý

```text
┌───────────────────────────────┬──────────────────────┐
│                               │                      │
│          3D Viewport          │    Shader Editor     │
│                               │                      │
│                               │  Principled BSDF     │
│                               │                      │
└───────────────────────────────┴──────────────────────┘
```

---

## 4. Chuẩn bị các module tường

Hiện lại các object tường và cột trong Outliner.

Các cột đã được nối vào trong các module tường, vì vậy collection hoặc object cột riêng không còn cần thiết trong viewport. Có thể ẩn chúng để scene gọn hơn.

Chọn module tường đầu tiên và focus vào nó:

```text
Numpad .
```

Sau đó chuyển sang Edit Mode:

```text
Tab
```

---

## 5. X-Ray Mode

Để có thể chọn các mặt ở cả phía trước và phía sau object, bật **X-Ray Mode**:

```text
Alt + Z
```

X-Ray Mode giúp nhìn xuyên qua hình học nhưng vẫn giữ được màu của vật liệu.

Điều này đặc biệt hữu ích khi chọn nhiều mặt xuyên qua toàn bộ chiều sâu của module tường.

> Nhấn lại `Alt + Z` để tắt X-Ray Mode.

---

## 6. Select Linked — Chọn phần hình học liên kết

Một module tường có thể là một object duy nhất nhưng chứa nhiều khối mesh không nối vertex với nhau, chẳng hạn:

* Phần tường đá.
* Cột bên cạnh.
* Khung cửa.
* Các khối trang trí.

Các phần này thuộc cùng một object nhưng không liên kết trực tiếp bằng cạnh hoặc vertex.

Để chọn một khối hình học liên tục, di chuột lên phần đó và nhấn:

```text
L
```

Lệnh này là:

```text
Select Linked
```

Blender sẽ chọn toàn bộ vertex, edge và face được nối với phần tử nằm dưới con trỏ.

### Ví dụ

```text
Một object duy nhất

┌────────────┐       ┌──────┐
│            │       │      │
│    Wall    │       │Pillar│
│            │       │      │
└────────────┘       └──────┘

Nhấn L trên Wall → chỉ Wall được chọn
Nhấn L trên Pillar → chỉ Pillar được chọn
```

Không cần giữ `Shift` khi nhấn `L` trên nhiều phần. Mỗi lần nhấn `L`, Blender sẽ thêm phần đó vào vùng chọn hiện tại.

---

## 7. Select Inverse — Đảo ngược vùng chọn

Sau khi chọn phần tường bằng `L`, có thể đảo ngược vùng chọn bằng:

```text
Ctrl + I
```

Lệnh này sẽ:

* Bỏ chọn phần đang được chọn.
* Chọn tất cả phần còn lại.

Có thể tìm lệnh này tại:

```text
Select → Invert
```

Ví dụ, nếu phần tường đang được chọn, nhấn `Ctrl + I` sẽ chọn phần cột.

---

## 8. Hide và Unhide

Để tạm thời ẩn phần hình học đang chọn trong Edit Mode:

```text
H
```

Để hiện lại toàn bộ hình học đã ẩn:

```text
Alt + H
```

### Lưu ý quan trọng

Trạng thái ẩn trong Edit Mode được Blender ghi nhớ riêng.

Khi chuyển sang Object Mode, toàn bộ object có thể vẫn hiển thị bình thường. Tuy nhiên, khi quay lại Edit Mode, các phần đã ẩn trước đó vẫn tiếp tục bị ẩn.

```text
Edit Mode:
Pillar bị ẩn

Tab → Object Mode:
Toàn bộ object vẫn xuất hiện

Tab → Edit Mode:
Pillar vẫn đang bị ẩn
```

Do đó, cần nhớ sử dụng:

```text
Alt + H
```

để hiện lại các phần hình học trước khi tiếp tục lựa chọn.

---

## 9. Local View — Cô lập object

Để cô lập object đang chọn và tạm thời ẩn các object khác trong scene, nhấn:

```text
Numpad /
```

Chế độ này được gọi là:

```text
Local View
```

Local View rất hữu ích khi:

* Các module khác che khuất object đang chỉnh sửa.
* Có nhiều cột hoặc tường ở phía sau.
* Cần chọn mặt chính xác trong Front View.

Nhấn lại:

```text
Numpad /
```

để thoát Local View.

---

## 10. Chọn các viên đá ở giữa tường

Chuyển sang Front View:

```text
Numpad 1
```

Sau khi đã ẩn phần cột, chọn các mặt đá ở giữa tường.

Trong một số trường hợp, vùng chọn có thể bao gồm thêm:

* Mặt phía trên.
* Mặt phía dưới.
* Các gờ nhô ra ở hai đầu.

Để thu nhỏ vùng chọn một cấp, nhấn:

```text
Ctrl + Numpad -
```

Lệnh này là:

```text
Select Less
```

Có thể tìm tại:

```text
Select → Select More/Less → Less
```

### Minh họa

```text
Vùng chọn ban đầu:

┌───────────────┐
│███████████████│
│███████████████│
│███████████████│
│███████████████│
└───────────────┘

Sau Select Less:

┌───────────────┐
│               │
│  ███████████  │
│  ███████████  │
│               │
└───────────────┘
```

Nhờ đó, chỉ các viên đá ở giữa được giữ lại trong vùng chọn.

---

## 11. Material Slots

Một object có thể chứa nhiều vật liệu. Danh sách vật liệu này được quản lý thông qua **Material Slots**.

### 11.1. Tạo Material Slot mới

Trong Material Properties, nhấn:

```text
+
```

để tạo một slot mới.

Material Slot chỉ là vị trí để chứa vật liệu. Nếu slot chưa có material, các mặt được gán có thể chuyển sang màu trắng mặc định.

### 11.2. Gán mặt vào slot

Sau khi chọn các mặt cần đổi màu:

1. Chọn Material Slot mong muốn.
2. Nhấn:

```text
Assign
```

Các mặt được chọn sẽ được gán vào material của slot đó.

### Cấu trúc

```text
Wall Object
│
├── Material Slot 1: Gray
│   └── Phần lớn các mặt tường
│
└── Material Slot 2: Gray Light
    └── Một số viên đá tạo điểm nhấn
```

> Material Slots thuộc về toàn bộ object, không chỉ riêng phần mesh đang chọn.

Nếu cột và tường nằm trong cùng một object, cả hai đều sử dụng chung danh sách Material Slots.

---

## 12. Tạo vật liệu Gray Light

Tạo một material mới và đặt tên:

```text
Gray Light
```

Tên `Gray Light` được chọn thay vì `Light Gray` để khi mở danh sách material theo thứ tự alphabet, nó nằm gần material `Gray`.

Điều chỉnh **Base Color** thành một màu xám sáng hơn material hiện tại.

```text
Gray       → xám trung bình
Gray Light → xám sáng
```

Chuyển sang Object Mode để kiểm tra:

```text
Tab
```

Nếu màu quá sáng, giảm nhẹ độ sáng cho đến khi sự khác biệt đủ rõ nhưng không quá tương phản.

---

## 13. Gán vật liệu cho các viên đá trên cột

Quay lại Edit Mode:

```text
Tab
```

Hiện lại hình học đã ẩn:

```text
Alt + H
```

Bỏ chọn toàn bộ:

```text
Alt + A
```

Chọn phần tường bằng:

```text
L
```

Sau đó ẩn phần tường:

```text
H
```

Bây giờ chỉ còn phần cột để thao tác.

Chọn một số viên đá trên cột và gán chúng vào Material Slot:

```text
Gray Light
```

Nhấn:

```text
Assign
```

Không cần chọn giống hoàn toàn với video. Có thể chọn các viên đá khác nhau để tạo sự ngẫu nhiên.

### Nguyên tắc phối màu

```text
Không nên:

Sáng – Sáng – Sáng – Sáng

Nên:

Xám – Sáng – Xám – Xám – Sáng
```

Sự phân bố không đều giúp bề mặt đá tự nhiên hơn.

---

## 14. Điều chỉnh Roughness

Vật liệu mặc định có thể hơi bóng, không phù hợp với bề mặt đá thô.

Trong Principled BSDF, tăng:

```text
Roughness ≈ 0.8
```

Roughness cao làm ánh sáng phản xạ tản rộng hơn, khiến vật liệu ít bóng.

| Roughness | Đặc điểm                            |
| --------: | ----------------------------------- |
|     `0.0` | Rất bóng, giống gương               |
|     `0.3` | Hơi bóng                            |
|     `0.5` | Trung bình                          |
|     `0.8` | Khá nhám, phù hợp với đá            |
|     `1.0` | Gần như không có phản chiếu sắc nét |

Trong bài học, cả hai vật liệu xám nên có Roughness tương đối cao để giữ cảm giác đá dungeon.

---

## 15. Gán vật liệu cho module cửa

Module cửa phức tạp hơn vì gồm nhiều phần hình học:

* Khung cửa.
* Tường.
* Cột.
* Các viên đá ở phần giữa.
* Các viên đá trang trí phía trên hoặc dưới.

### 15.1. Cô lập module cửa

Chọn module cửa và nhấn:

```text
Numpad .
```

Sau đó:

```text
Numpad /
Numpad 1
Tab
```

Kết quả:

* Focus vào object.
* Vào Local View.
* Chuyển Front View.
* Vào Edit Mode.

Bỏ chọn toàn bộ:

```text
Alt + A
```

---

### 15.2. Gán vật liệu cho khung cửa

Di chuột lên khung cửa và nhấn:

```text
L
```

Tạo Material Slot mới bằng nút `+`.

Chọn material:

```text
Gray Light
```

Nhấn:

```text
Assign
```

Khung cửa sẽ được gán vật liệu xám sáng.

---

### 15.3. Gán vật liệu cho phần đá giữa tường

Ẩn khung cửa:

```text
H
```

Chọn phần cột hoặc phần không cần thiết bằng `L`, sau đó tiếp tục ẩn bằng `H`.

Chọn các mặt đá ở giữa tường.

Nếu vùng chọn bao gồm các gờ trên và dưới, thu nhỏ vùng chọn bằng:

```text
Ctrl + Numpad -
```

Chọn slot `Gray Light` và nhấn:

```text
Assign
```

---

### 15.4. Gán vật liệu cho nhiều phần rời

Hiện lại toàn bộ:

```text
Alt + H
```

Bỏ chọn:

```text
Alt + A
```

Nhấn `L` trên khung cửa, sau đó tiếp tục nhấn `L` trên phần tường.

Không cần giữ `Shift`.

Ẩn hai phần này bằng:

```text
H
```

Sau đó chọn các viên đá còn lại cần đổi màu và gán vật liệu `Gray Light`.

Cuối cùng:

```text
Alt + H
Tab
Numpad /
```

để:

* Hiện lại toàn bộ.
* Quay về Object Mode.
* Thoát Local View.

---

## 16. Linked Duplicate và vật liệu

Một số module tường cần được dùng ở hai phía của cửa.

Để tạo bản sao liên kết:

```text
Alt + D
```

Bản sao này dùng chung mesh data với object gốc.

Điều đó có nghĩa là:

* Chỉnh sửa hình học trong Edit Mode ở một object sẽ cập nhật object còn lại.
* Gán material cho các face cũng được phản ánh trên cả hai object.
* Di chuyển, xoay hoặc scale ở Object Mode vẫn có thể thực hiện độc lập.

### Sơ đồ

```text
Wall Module A
      │
      │ Alt + D
      ▼
Wall Module B

Cùng dùng một Mesh Data
      │
      ├── Thay đổi vertex → cập nhật cả hai
      ├── Gán vật liệu face → cập nhật cả hai
      └── Di chuyển object → độc lập
```

Điều này đặc biệt hữu ích khi hai module cần có màu sắc và hình học giống nhau.

---

## 17. Snapping theo Increment

Sau khi tạo Linked Duplicate, di chuyển object:

```text
G
```

Trong lúc di chuyển, giữ:

```text
Ctrl
```

để bật snapping tạm thời.

Trong bài học, kiểu snapping được sử dụng là:

```text
Increment
```

Increment Snap giúp object bám theo các bước của lưới.

Kiểm tra menu Snapping trên thanh công cụ để bảo đảm đang chọn đúng kiểu.

### So sánh

| Snap Mode | Hành vi           |
| --------- | ----------------- |
| Increment | Bám theo lưới     |
| Vertex    | Bám vào vertex    |
| Edge      | Bám vào cạnh      |
| Face      | Bám vào mặt       |
| Volume    | Bám theo thể tích |

Nếu Snap Mode đang đặt là `Face`, object có thể bám vào bề mặt các module khác thay vì lưới.

---

## 18. Gán vật liệu cho các module còn lại

Lặp lại quy trình cho toàn bộ wall modules:

1. Chọn object.
2. Focus bằng `Numpad .`.
3. Cô lập bằng `Numpad /`.
4. Vào Edit Mode.
5. Chuyển Front View.
6. Bỏ chọn toàn bộ.
7. Dùng `L` để chọn từng phần hình học.
8. Dùng `H` để ẩn các phần không cần chỉnh.
9. Chọn các viên đá cần đổi màu.
10. Dùng `Ctrl + Numpad -` nếu cần thu nhỏ vùng chọn.
11. Tạo hoặc chọn Material Slot `Gray Light`.
12. Nhấn `Assign`.
13. Hiện lại bằng `Alt + H`.
14. Quay về Object Mode.
15. Thoát Local View.

Không cần tất cả module có cùng cách phân bố màu. Sự khác biệt nhẹ giữa các bức tường sẽ làm dungeon bớt lặp lại.

---

## 19. Các phương pháp chọn được sử dụng

| Phím tắt          | Tên lệnh       | Chức năng                      |
| ----------------- | -------------- | ------------------------------ |
| `L`               | Select Linked  | Chọn toàn bộ hình học liên kết |
| `Ctrl + I`        | Select Inverse | Đảo ngược vùng chọn            |
| `Alt + A`         | Deselect All   | Bỏ chọn toàn bộ                |
| `H`               | Hide Selected  | Ẩn phần đang chọn              |
| `Alt + H`         | Reveal Hidden  | Hiện lại phần đã ẩn            |
| `Ctrl + Numpad -` | Select Less    | Thu nhỏ vùng chọn              |
| `Numpad /`        | Local View     | Cô lập object                  |
| `Alt + Z`         | X-Ray          | Bật hoặc tắt nhìn xuyên        |

---

## 20. Phím tắt và công cụ quan trọng

| Phím tắt / Công cụ   | Chức năng                      |
| -------------------- | ------------------------------ |
| `Tab`                | Chuyển Object Mode/Edit Mode   |
| `Numpad .`           | Focus vào object               |
| `Numpad 1`           | Front View                     |
| `Numpad /`           | Bật hoặc tắt Local View        |
| `Alt + Z`            | Bật hoặc tắt X-Ray             |
| `L`                  | Select Linked                  |
| `Ctrl + I`           | Đảo vùng chọn                  |
| `Alt + A`            | Bỏ chọn toàn bộ                |
| `H`                  | Ẩn phần đã chọn                |
| `Alt + H`            | Hiện lại hình học đã ẩn        |
| `Ctrl + Numpad -`    | Thu nhỏ vùng chọn              |
| `Alt + D`            | Tạo Linked Duplicate           |
| `G`                  | Di chuyển object               |
| `Ctrl` khi di chuyển | Bật snapping tạm thời          |
| `N`                  | Ẩn hoặc hiện Sidebar           |
| Material Slot `+`    | Thêm slot vật liệu             |
| `Assign`             | Gán material cho mặt đang chọn |

---

## 21. Lỗi thường gặp

### 21.1. Không chọn được các mặt ở phía sau

**Nguyên nhân:** X-Ray Mode đang tắt.

**Cách khắc phục:**

```text
Alt + Z
```

---

### 21.2. Nhấn `L` chọn sai phần

**Nguyên nhân:** Con trỏ đang nằm trên phần mesh khác.

**Cách khắc phục:**

* Zoom gần hơn.
* Đặt con trỏ chính xác trên phần cần chọn.
* Chuyển sang Front View nếu cần.

---

### 21.3. Một số mặt bị ẩn khi quay lại Edit Mode

**Nguyên nhân:** Các mặt đã được ẩn bằng `H` ở lần chỉnh sửa trước.

**Cách khắc phục:**

```text
Alt + H
```

---

### 21.4. Vùng chọn bao gồm cả gờ trên và dưới

**Nguyên nhân:** Box Select hoặc X-Ray đã chọn thêm các mặt ở rìa.

**Cách khắc phục:**

```text
Ctrl + Numpad -
```

để thu nhỏ vùng chọn.

---

### 21.5. Nhấn Assign nhưng mặt chuyển thành màu trắng

**Nguyên nhân:** Material Slot mới chưa được gán material.

**Cách khắc phục:**

* Chọn material `Gray Light` trong dropdown.
* Sau đó nhấn lại `Assign` nếu cần.

---

### 21.6. Màu của đá quá bóng

**Nguyên nhân:** Roughness quá thấp.

**Cách khắc phục:**

```text
Roughness ≈ 0.8
```

---

### 21.7. Linked Duplicate không cập nhật giống nhau

**Nguyên nhân:** Đã dùng `Shift + D` thay vì `Alt + D`.

**Cách khắc phục:**

```text
Alt + D
```

để tạo bản sao liên kết.

---

### 21.8. Object snap sai vị trí

**Nguyên nhân:** Snap Mode đang đặt là Face, Vertex hoặc chế độ khác.

**Cách khắc phục:**

Chọn lại:

```text
Snap To → Increment
```

---

## 22. Checklist thực hành

* [ ] Đã điều chỉnh workspace Shading thành 3D Viewport và Shader Editor.
* [ ] Đã ẩn các object cột không còn cần thiết.
* [ ] Đã bật X-Ray Mode khi chọn mặt xuyên qua object.
* [ ] Đã sử dụng `L` để chọn hình học liên kết.
* [ ] Đã sử dụng `Ctrl + I` để đảo vùng chọn.
* [ ] Đã sử dụng `H` và `Alt + H` để ẩn và hiện hình học.
* [ ] Đã sử dụng Local View để cô lập module.
* [ ] Đã sử dụng Select Less để loại bỏ các mặt ở rìa.
* [ ] Đã tạo Material Slot `Gray Light`.
* [ ] Đã gán màu xám sáng cho một số viên đá.
* [ ] Đã tăng Roughness lên khoảng `0.8`.
* [ ] Đã hoàn thiện vật liệu cho module cửa.
* [ ] Đã tô màu các module tường còn lại.
* [ ] Đã hiểu cách vật liệu hoạt động trên Linked Duplicate.
* [ ] Đã kiểm tra Snap Mode là Increment.
* [ ] Đã lưu file trước khi chuyển sang bài tiếp theo.

---

## 23. Tóm tắt

Bài học này tập trung vào việc sử dụng **Material Slots** để gán hai vật liệu xám khác nhau cho các viên đá trên cùng một wall module.

Thay vì xây dựng vật liệu procedural phức tạp, bài học chủ yếu rèn luyện các kỹ thuật lựa chọn hình học trong Edit Mode:

```text
Select Linked
Select Inverse
Hide / Unhide
Select Less
Local View
X-Ray Mode
```

Vật liệu `Gray Light` được gán ngẫu nhiên cho một số viên đá nhằm tạo biến thể màu sắc và giảm cảm giác lặp lại giữa các module.

Bài học cũng giới thiệu cách **Linked Duplicate** chia sẻ mesh và material assignment, đồng thời sử dụng **Increment Snapping** để đặt các module đúng vị trí trên lưới dungeon.

Sau khi hoàn thành, toàn bộ wall modules và doorway module đã có vật liệu cơ bản, sẵn sàng được lắp ráp thành một dungeon hoàn chỉnh.
