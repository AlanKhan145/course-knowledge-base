# 011 — Chỉnh sửa đối tượng trong Blender

| Thuộc tính       | Nội dung                                                              |
| ---------------- | --------------------------------------------------------------------- |
| **Module**       | Module 01 — Introduction & Setup                                      |
| **Bài học**      | Editing Objects                                                       |
| **Thời lượng**   | 8:19                                                                  |
| **Chủ đề chính** | Chỉnh sửa hình dạng mesh bằng Vertex, Edge, Face, Extrude và Loop Cut |

---

## 1. Mục tiêu bài học

Sau bài học này, bạn có thể:

* Phân biệt **Object Mode** và **Edit Mode**.
* Chuyển đổi giữa ba chế độ chọn:

  * **Vertex Select**
  * **Edge Select**
  * **Face Select**
* Di chuyển, xoay và thay đổi kích thước các thành phần của mesh.
* Sử dụng **Extrude** để tạo thêm hình học.
* Sử dụng **Loop Cut** để chia một mesh thành nhiều phần.
* Nhận biết một số lỗi hình học thường gặp khi Extrude.
* Kết hợp Loop Cut và Extrude để tạo những hình dạng tự do.

---

## 2. Object Mode và Edit Mode

Blender có hai chế độ quan trọng khi làm việc với mesh:

### Object Mode

**Object Mode** được sử dụng để thao tác với toàn bộ đối tượng như một khối thống nhất.

Ví dụ:

* Di chuyển toàn bộ đối tượng.
* Xoay toàn bộ đối tượng.
* Phóng to hoặc thu nhỏ toàn bộ đối tượng.
* Nhân bản hoặc xóa đối tượng.
* Thêm modifier hoặc vật liệu.

### Edit Mode

**Edit Mode** cho phép chỉnh sửa trực tiếp cấu trúc hình học bên trong đối tượng.

Một mesh được tạo thành từ ba thành phần cơ bản:

* **Vertex** — đỉnh
* **Edge** — cạnh
* **Face** — mặt

Để chuyển đổi giữa Object Mode và Edit Mode, sử dụng:

```text
Tab
```

### Sơ đồ chế độ làm việc

```text
Object Mode
    │
    │ Tab
    ▼
Edit Mode
    ├── Vertex Select — phím 1
    ├── Edge Select   — phím 2
    └── Face Select   — phím 3
```

> Các phím `1`, `2`, `3` được sử dụng là hàng số phía trên bàn phím, không phải Numpad.

---

## 3. Ba chế độ chọn trong Edit Mode

### 3.1. Vertex Select

**Vertex** là một điểm trong không gian 3D.

Chuyển sang Vertex Select bằng phím:

```text
1
```

Trong chế độ này, bạn có thể:

* Chọn một hoặc nhiều vertex.
* Di chuyển vertex bằng `G`.
* Giữ `Shift` để chọn thêm nhiều vertex.
* Thay đổi trực tiếp hình dáng của mesh.

Ví dụ:

```text
Chọn một vertex → G → Z
```

Thao tác này di chuyển vertex theo trục Z.

Một vertex đơn lẻ không có kích thước hoặc hướng nên việc Scale hay Rotate thường không tạo ra thay đổi rõ ràng. Tuy nhiên, bạn có thể Scale hoặc Rotate khi chọn từ hai vertex trở lên.

---

### 3.2. Edge Select

**Edge** là cạnh nối giữa hai vertex.

Chuyển sang Edge Select bằng phím:

```text
2
```

Trong chế độ này, bạn có thể:

* Chọn một cạnh.
* Di chuyển cạnh bằng `G`.
* Xoay cạnh bằng `R`.
* Thay đổi kích thước vùng được chọn bằng `S`.

Ví dụ:

```text
Chọn cạnh trên của Cube → G → Z
```

Kéo cạnh lên trên sẽ làm thay đổi hình dạng của Cube.

---

### 3.3. Face Select

**Face** là bề mặt được tạo thành từ nhiều cạnh.

Chuyển sang Face Select bằng phím:

```text
3
```

Trong chế độ này, bạn có thể:

* Chọn một hoặc nhiều mặt.
* Di chuyển mặt bằng `G`.
* Xoay mặt bằng `R`.
* Scale mặt bằng `S`.
* Extrude mặt để tạo thêm hình học.

Face Select là chế độ được sử dụng nhiều khi dựng hình bằng phương pháp Extrude.

---

## 4. Các phép biến đổi cơ bản

Ba phép biến đổi cơ bản có thể được sử dụng trong cả Object Mode và Edit Mode.

| Phép biến đổi   | Phím tắt | Công dụng                            |
| --------------- | -------: | ------------------------------------ |
| **Move / Grab** |      `G` | Di chuyển thành phần được chọn       |
| **Rotate**      |      `R` | Xoay thành phần được chọn            |
| **Scale**       |      `S` | Phóng to hoặc thu nhỏ vùng được chọn |

### 4.1. Giới hạn theo trục

Sau khi nhấn `G`, `R` hoặc `S`, có thể nhấn thêm một phím trục:

* `X` — trục X
* `Y` — trục Y
* `Z` — trục Z

Ví dụ:

```text
G → Z
```

Di chuyển theo trục Z.

```text
R → Z
```

Xoay quanh trục Z.

```text
S → X
```

Scale theo trục X.

### 4.2. Nhập giá trị chính xác

Có thể nhập một con số sau khi chọn phép biến đổi và trục.

Ví dụ:

```text
G → X → 2 → Enter
```

Di chuyển đối tượng hoặc thành phần được chọn thêm 2 đơn vị theo trục X.

---

## 5. Hủy một thao tác đang thực hiện

Sau khi nhấn `G`, `R`, `S` hoặc `E`, bạn có thể hủy thao tác bằng:

```text
Esc
```

hoặc:

```text
Chuột phải
```

Ví dụ:

```text
G → di chuyển chuột → chuột phải
```

Đối tượng sẽ trở lại vị trí ban đầu.

> Riêng với Extrude, việc nhấn chuột phải chỉ hủy khoảng cách di chuyển nhưng có thể vẫn tạo ra hình học mới chồng lên hình học cũ. Vì vậy cần đặc biệt cẩn thận.

---

## 6. Extrude — tạo thêm hình học

### 6.1. Extrude là gì?

**Extrude** tạo ra vertex, edge hoặc face mới từ phần hình học đang được chọn.

Phím tắt:

```text
E
```

Extrude thường được sử dụng với Face Select để kéo dài một phần của mesh.

### Quy trình cơ bản

```text
Chọn Face
   │
   ▼
Nhấn E
   │
   ▼
Di chuyển chuột
   │
   ▼
Nhấn chuột trái để xác nhận
```

### Ví dụ

1. Nhấn `3` để vào Face Select.
2. Chọn mặt bên của Cube.
3. Nhấn `E`.
4. Di chuyển chuột ra ngoài.
5. Nhấn chuột trái để xác nhận.

Kết quả là một phần hình học mới được kéo ra từ mặt ban đầu.

---

### 6.2. Hướng Extrude

Khi Extrude một face, Blender thường di chuyển mặt mới theo hướng pháp tuyến của mặt đó.

Ví dụ:

* Mặt hướng theo trục X sẽ Extrude theo hướng X.
* Mặt nghiêng sẽ Extrude theo hướng nghiêng của chính mặt đó.

Có thể giới hạn Extrude theo một trục cụ thể:

```text
E → Z
```

Extrude theo trục Z.

---

### 6.3. Extrude nhiều mặt cùng lúc

Bạn có thể giữ `Shift` để chọn nhiều face, sau đó nhấn `E`.

```text
Chọn nhiều Face → E
```

Nếu các face nằm liền nhau, Blender có thể Extrude chúng thành một vùng hình học liên kết.

---

## 7. Các lỗi thường gặp khi Extrude

### 7.1. Extrude vào bên trong mesh

Khi Extrude một mặt vào bên trong đối tượng, bạn có thể tạo ra:

* Mặt nằm bên trong mesh.
* Hình học bị chồng lấn.
* Vùng có độ dày gần bằng 0.
* Lỗi khi thêm vật liệu, modifier hoặc render.

Minh họa:

```text
Bề mặt ngoài
┌──────────────┐
│   ┌──────┐   │  ← Mặt bị Extrude vào trong
│   │      │   │
│   └──────┘   │
└──────────────┘
```

Nên hạn chế Extrude xuyên vào phần hình học đã tồn tại.

---

### 7.2. Hủy Extrude bằng chuột phải

Một lỗi phổ biến:

```text
E → chuột phải
```

Người dùng có thể nghĩ rằng Extrude đã được hủy hoàn toàn. Tuy nhiên, Blender có thể đã tạo một face mới ngay trên face cũ, chỉ có khoảng cách Extrude bằng 0.

Điều này tạo ra các vertex trùng nhau, thường được gọi là:

* Duplicate vertices
* Overlapping geometry
* Doubles

Khi tiếp tục di chuyển một vertex hoặc face, bạn có thể nhận thấy có thêm một lớp hình học bị bỏ lại phía sau.

### Cách xử lý trong bài học

Sử dụng Undo:

```text
Ctrl + Z
```

Nếu không chắc Extrude đã được hủy đúng cách, hãy Undo rồi thực hiện lại thao tác.

Có thể Redo bằng:

```text
Ctrl + Shift + Z
```

---

### 7.3. Extrude sát một bức tường hình học

Không nên Extrude một vùng nếu mặt mới sẽ chồng trực tiếp lên một mặt đang tồn tại.

Ví dụ:

```text
┌───────┬───────┐
│ Face A│ Face B│
└───────┴───────┘
```

Nếu Extrude Face A sang vùng đang bị Face B chiếm giữ, mesh có thể xuất hiện mặt nằm bên trong hoặc hình học chồng lấn.

Nguyên tắc đơn giản:

> Chỉ Extrude khi phía trước vùng được kéo ra có đủ không gian trống.

---

## 8. Loop Cut — thêm vòng cạnh

### 8.1. Loop Cut là gì?

**Loop Cut** thêm một vòng cạnh chạy xuyên quanh mesh.

Phím tắt:

```text
Ctrl + R
```

Loop Cut giúp chia một face lớn thành nhiều face nhỏ hơn. Sau đó, bạn có thể chọn riêng từng phần để Extrude hoặc chỉnh sửa.

---

### 8.2. Quy trình sử dụng Loop Cut

```text
Ctrl + R
    │
    ▼
Di chuyển chuột lên mesh
    │
    ▼
Xuất hiện đường xem trước
    │
    ▼
Chuột trái lần 1: tạo đường cắt
    │
    ▼
Di chuyển chuột: điều chỉnh vị trí
    │
    ▼
Chuột trái lần 2: xác nhận
```

### Đặt Loop Cut ở chính giữa

Có hai cách:

#### Cách 1: Nhấn đúp chuột trái

```text
Ctrl + R → nhấp đúp chuột trái
```

Loop Cut được tạo tại vị trí chính giữa.

#### Cách 2: Chuột trái rồi chuột phải

```text
Ctrl + R → chuột trái → chuột phải
```

* Chuột trái lần đầu tạo đường cắt.
* Chuột phải hủy thao tác trượt cạnh.
* Đường cắt được đặt lại ở chính giữa.

> Chuột phải ở bước này không xóa Loop Cut mà chỉ hủy việc di chuyển vị trí của đường cắt.

---

## 9. Hiển thị thanh công cụ

Nếu thanh công cụ bên trái viewport bị ẩn, nhấn:

```text
T
```

Bạn có thể tìm thấy các công cụ như:

* Select
* Extrude
* Loop Cut
* Move
* Rotate
* Scale

Khi đưa chuột lên một biểu tượng công cụ, Blender thường hiển thị tên và phím tắt của công cụ đó.

Tuy nhiên, khi đã quen, nên ưu tiên phím tắt vì nhanh hơn việc liên tục chuyển đổi công cụ trên thanh Toolbar.

---

## 10. Quy trình thực hành cơ bản

### Bài tập 1: Chỉnh sửa cạnh của Cube

1. Chọn Cube mặc định.
2. Nhấn `Tab` để vào Edit Mode.
3. Nhấn `2` để vào Edge Select.
4. Chọn một cạnh ở đầu Cube.
5. Nhấn:

```text
G → Z
```

6. Di chuyển cạnh lên trên.
7. Nhấn chuột trái để xác nhận.

---

### Bài tập 2: Extrude một mặt

1. Tiếp tục trong Edit Mode.
2. Nhấn `3` để vào Face Select.
3. Chọn mặt ở đầu Cube.
4. Nhấn `E`.
5. Kéo mặt ra ngoài.
6. Nhấn chuột trái để xác nhận.

Kết quả:

```text
Cube ban đầu
    │
    ├── Di chuyển một cạnh lên
    │
    └── Extrude mặt đầu ra ngoài
```

---

### Bài tập 3: Chia mặt bằng Loop Cut

1. Nhấn `Ctrl + R`.
2. Đưa chuột lên Cube cho đến khi xuất hiện đường cắt.
3. Nhấn đúp chuột trái để đặt Loop Cut ở giữa.
4. Nhấn `3` để vào Face Select.
5. Chọn một trong các mặt vừa được chia.
6. Nhấn `E` để Extrude mặt đó.

Loop Cut giúp bạn Extrude một phần của bề mặt thay vì toàn bộ mặt lớn ban đầu.

---

## 11. Thử thách: Tạo hình dạng kỳ lạ

Sử dụng kết hợp:

* `Ctrl + R` — thêm Loop Cut.
* `3` — chuyển sang Face Select.
* `E` — Extrude.
* `G` — di chuyển.
* `R` — xoay.
* `S` — thay đổi kích thước.

### Quy trình gợi ý

```text
Cube
  │
  ├── Loop Cut
  │      │
  │      └── Chia mesh thành nhiều vùng
  │
  ├── Chọn Face
  │
  ├── Extrude
  │
  ├── Loop Cut lần nữa
  │
  └── Tiếp tục Extrude các mặt khác nhau
```

Không cần tạo ra một vật thể đẹp hoặc có ý nghĩa cụ thể. Mục tiêu của bài tập là:

* Làm quen với việc chọn Face.
* Luyện thao tác Extrude.
* Hiểu cách Loop Cut chia nhỏ mesh.
* Quan sát cách hình học thay đổi.
* Phát hiện các trường hợp Extrude gây lỗi.

Sau khi hoàn thành, không cần lưu file vì mô hình chỉ được dùng để luyện tập.

---

## 12. Phím tắt trong bài học

| Thao tác                       |              Phím tắt |
| ------------------------------ | --------------------: |
| Chuyển Object Mode ↔ Edit Mode |                 `Tab` |
| Vertex Select                  |                   `1` |
| Edge Select                    |                   `2` |
| Face Select                    |                   `3` |
| Chọn thêm nhiều thành phần     |  `Shift + chuột trái` |
| Move / Grab                    |                   `G` |
| Rotate                         |                   `R` |
| Scale                          |                   `S` |
| Giới hạn theo trục             |         `X`, `Y`, `Z` |
| Extrude                        |                   `E` |
| Loop Cut                       |            `Ctrl + R` |
| Undo                           |            `Ctrl + Z` |
| Redo                           |    `Ctrl + Shift + Z` |
| Hủy thao tác hiện tại          | `Esc` hoặc chuột phải |
| Hiện hoặc ẩn Toolbar           |                   `T` |
| Thêm đối tượng                 |           `Shift + A` |

---

## 13. Lưu ý quan trọng

### Emulate Numpad

Các phím `1`, `2`, `3` được dùng để chuyển Vertex, Edge và Face Select.

Nếu tùy chọn **Emulate Numpad** đang bật, các phím này có thể được sử dụng để thay đổi góc nhìn thay vì thay đổi chế độ chọn.

Khi gặp vấn đề, kiểm tra tại:

```text
Edit
└── Preferences
    └── Input
        └── Emulate Numpad
```

---

### Luôn kiểm tra chế độ hiện tại

Hãy nhìn vào góc trên bên trái của 3D Viewport để biết bạn đang ở:

* Object Mode
* Edit Mode

Nhiều thao tác cho kết quả khác nhau tùy theo chế độ hiện tại.

---

### Ưu tiên phím tắt

Bạn có thể dùng Toolbar để chọn Extrude hoặc Loop Cut, nhưng cách này chậm hơn vì phải liên tục chuyển giữa công cụ chỉnh sửa và công cụ chọn.

Nên ghi nhớ:

```text
E       → Extrude
Ctrl+R  → Loop Cut
```

---

## 14. Lỗi thường gặp

| Lỗi                                 | Nguyên nhân                                    | Cách hạn chế                            |
| ----------------------------------- | ---------------------------------------------- | --------------------------------------- |
| Không chọn được Vertex/Edge/Face    | Đang ở Object Mode                             | Nhấn `Tab` để vào Edit Mode             |
| Phím `1`, `2`, `3` đổi góc nhìn     | Emulate Numpad đang bật                        | Tắt Emulate Numpad                      |
| Mesh có vertex hoặc face chồng nhau | Nhấn `E` rồi chuột phải                        | Undo bằng `Ctrl + Z`                    |
| Xuất hiện mặt nằm bên trong mesh    | Extrude vào trong hoặc vào vùng đã có hình học | Extrude về phía không gian trống        |
| Loop Cut không xuất hiện            | Con trỏ chưa nằm trên vùng edge loop hợp lệ    | Di chuyển chuột sang vùng khác của mesh |
| Loop Cut bị lệch khỏi chính giữa    | Di chuyển chuột sau lần nhấn đầu tiên          | Nhấn chuột phải để đặt lại giữa         |
| Chọn nhầm thành phần                | Đang ở sai chế độ chọn                         | Kiểm tra Vertex, Edge hoặc Face Select  |

---

## 15. Checklist thực hành

* [ ] Chuyển được giữa Object Mode và Edit Mode bằng `Tab`.
* [ ] Chuyển được giữa Vertex, Edge và Face Select.
* [ ] Chọn nhiều thành phần bằng `Shift`.
* [ ] Di chuyển một cạnh theo trục Z.
* [ ] Extrude được một face.
* [ ] Hủy được thao tác bằng `Esc` hoặc chuột phải.
* [ ] Hiểu rủi ro khi nhấn `E` rồi chuột phải.
* [ ] Tạo được một Loop Cut bằng `Ctrl + R`.
* [ ] Đặt được Loop Cut ở chính giữa.
* [ ] Kết hợp Loop Cut và Extrude để tạo hình dạng tự do.
* [ ] Tránh Extrude vào vùng đã có hình học.

---

## 16. Tóm tắt bài học

Trong **Object Mode**, Blender xử lý toàn bộ đối tượng như một khối thống nhất. Trong **Edit Mode**, bạn có thể chỉnh sửa trực tiếp các thành phần cấu tạo nên mesh:

```text
Vertex → Edge → Face
```

Các công cụ chính trong bài học gồm:

```text
G       → Di chuyển
R       → Xoay
S       → Scale
E       → Extrude
Ctrl+R  → Loop Cut
```

**Loop Cut** được sử dụng để chia mesh thành nhiều vùng nhỏ hơn, còn **Extrude** được sử dụng để kéo các vùng đó ra và tạo thêm hình học.

Khi Extrude, cần tránh:

* Extrude vào bên trong mesh.
* Extrude vào vùng đã có mặt khác.
* Nhấn `E` rồi chuột phải mà không Undo.
* Tạo vertex hoặc face chồng lên nhau.

Đây là những kỹ năng nền tảng để bắt đầu dựng các mô hình phức tạp từ những primitive đơn giản như Cube.
