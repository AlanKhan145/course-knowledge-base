# 063 — Unwrapping the Plane

| Thuộc tính            | Nội dung                                            |
| --------------------- | --------------------------------------------------- |
| **Module**            | Module 04 — UV Mapping                              |
| **Bài học**           | Unwrapping the Plane                                |
| **Thời lượng**        | 8:05                                                |
| **Chủ đề chính**      | Unwrap UV cho thân, cánh chính và cánh đuôi máy bay |
| **Workspace sử dụng** | UV Editing                                          |

---

## 1. Mục tiêu bài học

Sau bài học này, người học có thể:

* Phân tích một mô hình phức tạp và chia nó thành các **UV island** nhỏ, dễ quản lý.
* Đặt seam cho:

  * Cánh chính.
  * Cánh đuôi.
  * Thân máy bay.
* Hiểu cách **Mirror Modifier** ảnh hưởng đến UV.
* Tận dụng UV chồng lên nhau cho những bộ phận có texture đối xứng.
* Áp dụng Mirror Modifier khi hai bên thân máy bay cần texture khác nhau.
* Khắc phục lỗi **Non-Uniform Scale** trước khi unwrap.
* Tránh làm thay đổi các UV island đã được chồng chính xác.

---

## 2. Tư duy chia mô hình thành UV island

Mô hình máy bay có hình dạng tương đối phức tạp. Thay vì cố unwrap toàn bộ mô hình thành một mảnh duy nhất, cần chia nó thành các khu vực riêng biệt.

Trong bài học, máy bay được chia thành ba nhóm chính:

```text
Máy bay
├── Cánh chính
│   ├── Mặt trên
│   └── Mặt dưới
├── Cánh đuôi
│   ├── Mặt trên
│   └── Mặt dưới
└── Thân máy bay
    ├── Nửa bên trái
    └── Nửa bên phải
```

Mỗi nhóm sẽ trở thành một hoặc nhiều UV island độc lập.

Nguyên tắc chung:

> Một phần mesh cần có đủ seam để có thể “mở phẳng” mà không bị kéo giãn hoặc gấp chồng lên nhau.

---

## 3. Chuẩn bị môi trường làm việc

### Bước 1: Chọn thân máy bay

1. Chọn object máy bay.
2. Nhấn `Tab` để chuyển sang **Edit Mode**.
3. Chuyển sang workspace **UV Editing**.
4. Phóng to mô hình để dễ lựa chọn edge.

### Bước 2: Chuyển sang Edge Select

Nhấn:

```text
2
```

Hoặc chọn biểu tượng **Edge Select** trên thanh công cụ.

Việc đặt seam chủ yếu được thực hiện bằng cách chọn các cạnh của mesh.

---

## 4. Ảnh hưởng của Mirror Modifier đến UV

Ở thời điểm đầu bài học, máy bay vẫn đang sử dụng **Mirror Modifier**.

Điều này có hai ảnh hưởng quan trọng:

1. Seam được đặt ở một bên sẽ tự động xuất hiện ở phía đối xứng.
2. UV của hai phía đối xứng sẽ nằm chính xác chồng lên nhau.

Ví dụ:

```text
UV cánh trái
      ↓
┌─────────────┐
│             │
│ UV cánh phải│  ← Hai UV island nằm cùng vị trí
│             │
└─────────────┘
```

### Khi nào UV chồng lên nhau có lợi?

UV chồng lên nhau phù hợp khi hai phía sử dụng texture giống hệt nhau, chẳng hạn:

* Cánh trái và cánh phải.
* Hai cánh đuôi.
* Những chi tiết hoàn toàn đối xứng.

Lợi ích:

* Tiết kiệm diện tích UV.
* Hai bên có độ phân giải texture giống nhau.
* Không cần đặt texture riêng cho từng phía.

### Khi nào UV chồng lên nhau gây vấn đề?

Nếu texture có:

* Chữ viết.
* Logo.
* Biểu tượng có hướng.
* Họa tiết không đối xứng.

Texture ở phía đối diện sẽ bị lật ngược.

Ví dụ:

```text
Bên trái:   SPITFIRE
Bên phải:   ERIFTIPS
```

Vì vậy, phần thân máy bay cần hai UV island riêng biệt.

---

## 5. Unwrap cánh chính

### 5.1. Tách cánh khỏi thân máy bay

Chọn toàn bộ các cạnh nằm quanh vị trí cánh nối với thân máy bay.

Sau đó sử dụng:

```text
Ctrl + E → Mark Seam
```

Hoặc:

```text
Nhấp chuột phải → Mark Seam
```

Đường seam này tách cánh chính khỏi thân máy bay.

---

### 5.2. Thử unwrap cánh

Đưa con trỏ lên cánh và nhấn:

```text
L
```

`L` chọn toàn bộ phần mesh được liên kết dưới con trỏ. Khi tùy chọn **Seams** được sử dụng làm ranh giới, vùng chọn sẽ dừng tại các cạnh đã đánh seam.

Tiếp theo:

```text
U → Unwrap
```

Ở lần unwrap đầu tiên, kết quả chưa tốt vì toàn bộ cánh vẫn giống như một khối kín bị ép phẳng.

---

### 5.3. Tách mặt trên và mặt dưới cánh

Để cánh được mở phẳng đúng cách, cần thêm một seam chạy dọc quanh cạnh cánh.

Có thể đặt seam tại phần mép hoặc mặt dưới ít nhìn thấy.

```text
Cánh nhìn ngang

          Mặt trên
       ┌────────────┐
Seam → └────────────┘ ← Seam
          Mặt dưới
```

Sau khi đặt seam:

1. Nhấn `Alt + A` để bỏ chọn tất cả.
2. Đưa con trỏ lên mặt trên và nhấn `L`.
3. Đưa con trỏ lên mặt dưới và nhấn `L` lần nữa.
4. Nhấn `U → Unwrap`.

Kết quả sẽ gồm:

* Một UV island cho mặt trên.
* Một UV island cho mặt dưới.

Do Mirror Modifier vẫn còn hoạt động, UV của cánh bên đối diện sẽ nằm chồng lên các island này.

---

## 6. Unwrap cánh đuôi

Cánh đuôi được xử lý tương tự cánh chính.

### Quy trình

1. Chọn một phần cánh đuôi.
2. Nhấn phím `.` trên Numpad để tập trung góc nhìn vào vùng đã chọn.
3. Chọn các cạnh quanh vị trí nối giữa cánh đuôi và thân.
4. Chọn **Mark Seam**.
5. Chọn edge loop chạy quanh mép cánh để tách mặt trên và mặt dưới.
6. Bỏ chọn những cạnh không cần thiết nếu edge loop lan sang khu vực khác.
7. Đánh dấu seam.
8. Nhấn `Alt + A` để bỏ chọn.
9. Nhấn `L` trên mặt trên.
10. Nhấn `L` trên mặt dưới.
11. Nhấn `U → Unwrap`.

### Lưu ý khi chọn Edge Loop

Phím:

```text
Alt + nhấp chuột trái
```

dùng để chọn một edge loop.

Tuy nhiên, edge loop có thể tiếp tục chạy sang các vùng không mong muốn. Khi đó cần bỏ chọn thủ công những cạnh thừa trước khi đánh seam.

---

## 7. Unwrap thân máy bay khi còn Mirror Modifier

Sau khi tách cánh chính và cánh đuôi, phần còn lại là thân máy bay.

### Cách thực hiện

1. Nhấn `Alt + A` để bỏ chọn.
2. Đưa con trỏ lên thân máy bay.
3. Nhấn `L` để chọn phần thân.
4. Nhấn:

```text
U → Unwrap
```

Trong trường hợp này, Blender có thể unwrap phần thân tương đối tốt ngay cả khi chưa có thêm seam, vì object hiện mới chỉ chứa một nửa thân và được Mirror Modifier tạo ra phía còn lại.

Tuy nhiên, UV của hai phía thân vẫn nằm chồng lên nhau.

---

## 8. Khắc phục lỗi Non-Uniform Scale

Khi unwrap toàn bộ object, Blender có thể hiển thị cảnh báo:

```text
Object has non-uniform scale
```

Điều này xảy ra khi object đã được scale trong **Object Mode** nhưng giá trị scale chưa được áp dụng.

Ví dụ:

```text
Scale X: 1.500
Scale Y: 0.800
Scale Z: 1.000
```

Scale không đồng nhất có thể khiến:

* UV bị méo.
* Tỷ lệ giữa các island không chính xác.
* Kết quả unwrap không ổn định.

### Cách khắc phục

1. Nhấn `Tab` để về **Object Mode**.
2. Nhấn:

```text
Ctrl + A → Scale
```

3. Kiểm tra Scale đã trở về:

```text
X = 1
Y = 1
Z = 1
```

4. Quay lại **Edit Mode**.
5. Chọn phần cần thiết.
6. Thực hiện `U → Unwrap` lại.

---

## 9. Kiểm tra seam bị thiếu

Nếu kết quả unwrap khác đáng kể so với bài giảng, nguyên nhân phổ biến là seam không tạo thành một đường khép kín.

Ví dụ, nếu thiếu một cạnh seam tại vị trí cánh nối với thân:

```text
Seam đúng

Thân ┃ Cánh
     ┃
     ┗━━━━━━━━

Seam bị hở

Thân ┃ Cánh
     ┃
     ┗━━━━  ━━
           ↑
       Thiếu seam
```

Blender có thể cố nối cánh với thân thành cùng một UV island, khiến kết quả:

* Bị kéo giãn mạnh.
* Xuất hiện những UV island rất nhỏ.
* Hình dạng UV không còn nhận biết được.
* Cánh bị nhập chung với thân.

### Cách kiểm tra

* Quan sát toàn bộ đường nối giữa các bộ phận.
* Kiểm tra seam có chạy liên tục hay không.
* Dùng `L` để thử chọn từng phần.
* Nếu `L` chọn lan sang bộ phận khác, seam vẫn chưa tách hoàn toàn.

### Xóa seam

Chọn cạnh cần xóa seam, sau đó:

```text
Ctrl + E → Clear Seam
```

Hoặc:

```text
Nhấp chuột phải → Clear Seam
```

---

## 10. Áp dụng Mirror Modifier

Cánh và cánh đuôi có thể tiếp tục dùng UV đối xứng, nhưng hai bên thân máy bay cần được đặt ở các vị trí khác nhau trên texture.

Nguyên nhân là texture Spitfire có thể chứa chữ hoặc họa tiết riêng cho từng phía.

Do đó, cần áp dụng Mirror Modifier.

### Các bước

1. Nhấn `Tab` để về **Object Mode**.
2. Mở tab **Modifiers**.
3. Trong Mirror Modifier, mở menu tùy chọn.
4. Chọn:

```text
Apply
```

5. Nhấn `Tab` để quay lại **Edit Mode**.

Sau khi Apply:

* Mesh đã có đầy đủ cả hai phía.
* Hai bên không còn được tạo tự động bởi modifier.
* Có thể chỉnh sửa từng bên độc lập.
* Các UV cũ vẫn còn, nhưng các phần đối xứng vẫn đang nằm chồng lên nhau.

---

## 11. Tạo seam giữa hai nửa thân máy bay

Sau khi Apply Mirror, phần thân máy bay trở thành một mesh hoàn chỉnh.

Để tách hai phía thân thành hai UV island riêng, cần đặt một seam chạy dọc đường chính giữa máy bay.

### Thực hiện

1. Dùng `Alt + nhấp chuột trái` để chọn edge loop chạy dọc chính giữa thân.
2. Chọn:

```text
Ctrl + E → Mark Seam
```

Sơ đồ:

```text
Nhìn từ trên xuống

       Mũi máy bay
            ▲
            │
    ┌───────┼───────┐
    │       │       │
    │ Trái  │ Phải  │
    │       │       │
    └───────┼───────┘
            │
            ▼
         Đuôi máy bay

            │
       Seam chính giữa
```

Seam này cho phép Blender tách thân thành:

* UV thân bên trái.
* UV thân bên phải.

---

## 12. Chỉ unwrap lại phần thân máy bay

Đây là bước quan trọng nhất của bài học.

Sau khi Apply Mirror và đặt seam giữa thân, không nên chọn toàn bộ máy bay rồi unwrap lại.

Nếu chọn toàn bộ và `U → Unwrap`:

* UV hai cánh trái và phải sẽ không còn chồng chính xác lên nhau.
* UV hai cánh đuôi cũng bị tách và sắp xếp lại.
* Việc căn chỉnh các UV đối xứng trở nên khó khăn hơn.

### Quy trình đúng

1. Nhấn `Alt + A` để bỏ chọn tất cả.
2. Đưa con trỏ lên nửa thân thứ nhất.
3. Nhấn `L`.
4. Đưa con trỏ lên nửa thân còn lại.
5. Nhấn `L` lần nữa.
6. Chỉ khi hai nửa thân đang được chọn, nhấn:

```text
U → Unwrap
```

Kết quả:

```text
UV layout

┌───────────┐    ┌───────────┐
│ Thân trái │    │ Thân phải │
└───────────┘    └───────────┘

┌───────────┐
│ 2 cánh    │  ← Vẫn chồng lên nhau
└───────────┘

┌───────────┐
│ 2 đuôi    │  ← Vẫn chồng lên nhau
└───────────┘
```

---

## 13. Quản lý các UV island chồng lên nhau

Trong UV Editor, khi chọn một UV island của cánh và nhấn:

```text
G
```

có thể thấy một island giống hệt nằm bên dưới.

Điều này xác nhận rằng UV của hai cánh đang chồng chính xác lên nhau.

### Di chuyển hai island cùng lúc

Để giữ chúng chồng lên nhau:

1. Dùng **Box Select** để chọn đồng thời cả hai island.
2. Nhấn `G` để di chuyển.
3. Không chọn và di chuyển riêng từng island.

Quy tắc tương tự được áp dụng cho cánh đuôi.

### Không unwrap toàn bộ lần nữa

Sau khi đã có bố cục mong muốn, tránh:

```text
A → U → Unwrap
```

Thao tác này sẽ tính toán lại tất cả UV và phá vỡ các cặp island đang chồng lên nhau.

---

## 14. Quy trình tổng thể

```text
Chọn máy bay
      ↓
Vào Edit Mode và UV Editing
      ↓
Đặt seam quanh gốc cánh chính
      ↓
Đặt seam tách mặt trên/dưới cánh
      ↓
Unwrap cánh chính
      ↓
Đặt seam và unwrap cánh đuôi
      ↓
Unwrap thân khi Mirror còn hoạt động
      ↓
Phát hiện Non-Uniform Scale?
      ├── Có → Ctrl + A → Scale → Unwrap lại
      └── Không
      ↓
Áp dụng Mirror Modifier
      ↓
Đặt seam dọc chính giữa thân
      ↓
Chỉ chọn hai nửa thân bằng L
      ↓
Chỉ unwrap phần thân
      ↓
Giữ UV cánh và đuôi chồng lên nhau
      ↓
Lưu file
```

---

## 15. Phím tắt và công cụ quan trọng

| Phím hoặc thao tác          | Chức năng                             |
| --------------------------- | ------------------------------------- |
| `Tab`                       | Chuyển giữa Object Mode và Edit Mode  |
| `2`                         | Chuyển sang Edge Select               |
| `L`                         | Chọn phần mesh liên kết dưới con trỏ  |
| `Alt + A`                   | Bỏ chọn toàn bộ trong Edit Mode       |
| `Alt + Click trái`          | Chọn Edge Loop                        |
| `Ctrl + E → Mark Seam`      | Đánh dấu seam                         |
| `Ctrl + E → Clear Seam`     | Xóa seam                              |
| `U → Unwrap`                | Unwrap phần mesh đang được chọn       |
| `Ctrl + A → Scale`          | Áp dụng tỷ lệ của object              |
| `G`                         | Di chuyển mesh hoặc UV island         |
| `A`                         | Chọn tất cả                           |
| `.` trên Numpad             | Tập trung góc nhìn vào vùng được chọn |
| `Shift + B` hoặc Box Select | Chọn nhiều UV island trong một vùng   |

---

## 16. Lỗi thường gặp

### 16.1. Cánh bị nối với thân trong UV

**Nguyên nhân:** Seam quanh gốc cánh chưa khép kín.

**Cách xử lý:**

* Kiểm tra lại toàn bộ đường seam.
* Dùng `L` để xem cánh có được chọn riêng hay không.
* Bổ sung cạnh seam còn thiếu.

---

### 16.2. Cánh bị ép hoặc kéo giãn

**Nguyên nhân:** Chỉ có seam quanh gốc cánh, chưa có seam tách mặt trên và mặt dưới.

**Cách xử lý:**

* Đặt thêm seam dọc theo cạnh cánh.
* Unwrap lại cả mặt trên và mặt dưới.

---

### 16.3. Blender báo Non-Uniform Scale

**Nguyên nhân:** Object đã được scale không đồng đều trong Object Mode.

**Cách xử lý:**

```text
Object Mode → Ctrl + A → Scale
```

Sau đó unwrap lại.

---

### 16.4. Chữ trên một bên thân bị ngược

**Nguyên nhân:** Hai phía thân vẫn sử dụng UV chồng lên nhau do Mirror Modifier.

**Cách xử lý:**

* Apply Mirror Modifier.
* Đặt seam giữa thân.
* Unwrap hai nửa thân thành hai UV island riêng.

---

### 16.5. UV của hai cánh không còn chồng lên nhau

**Nguyên nhân:** Đã chọn toàn bộ mesh và unwrap lại sau khi Apply Mirror.

**Cách xử lý:**

* Hoàn tác thao tác bằng `Ctrl + Z`.
* Chỉ chọn hai nửa thân bằng `L`.
* Chỉ unwrap phần thân.

---

### 16.6. Edge Loop chọn lan sang phần khác

**Nguyên nhân:** Topology tạo thành một vòng cạnh liên tục qua nhiều bộ phận.

**Cách xử lý:**

* Dùng `Alt + Click` để chọn loop.
* Giữ `Shift` và bỏ chọn các cạnh không cần thiết.
* Chỉ Mark Seam sau khi vùng chọn đã chính xác.

---

## 17. Checklist thực hành

* [ ] Đã chuyển sang workspace UV Editing.
* [ ] Đã đặt seam quanh vị trí cánh chính nối với thân.
* [ ] Đã tách mặt trên và mặt dưới của cánh chính.
* [ ] Đã unwrap cánh chính thành các UV island hợp lý.
* [ ] Đã đặt seam và unwrap cánh đuôi.
* [ ] Đã kiểm tra các phần có thể được chọn riêng bằng phím `L`.
* [ ] Đã Apply Scale nếu Blender báo Non-Uniform Scale.
* [ ] Đã hiểu UV đối xứng sẽ chồng lên nhau khi dùng Mirror Modifier.
* [ ] Đã Apply Mirror Modifier để tách hai phía thân.
* [ ] Đã đặt seam dọc chính giữa thân máy bay.
* [ ] Chỉ unwrap lại hai nửa thân.
* [ ] UV cánh trái và phải vẫn chồng chính xác lên nhau.
* [ ] UV cánh đuôi vẫn chồng chính xác lên nhau.
* [ ] Hai phía thân đã trở thành hai UV island độc lập.
* [ ] Đã lưu file trước khi chuyển sang bài tiếp theo.

---

## 18. Tóm tắt

Trong bài học này, mô hình máy bay được chia thành các UV island dựa trên cấu trúc thực tế của nó. Cánh chính và cánh đuôi được tách khỏi thân, sau đó chia thành mặt trên và mặt dưới để unwrap phẳng hơn.

Khi Mirror Modifier còn hoạt động, UV của các bộ phận đối xứng nằm chồng lên nhau. Cách này phù hợp với cánh và cánh đuôi vì hai phía có thể sử dụng cùng một texture.

Tuy nhiên, phần thân máy bay có chữ và họa tiết định hướng nên hai phía không thể dùng chung UV. Vì vậy, Mirror Modifier được áp dụng, một seam được tạo dọc chính giữa thân và chỉ hai nửa thân được unwrap lại.

Điểm quan trọng nhất là:

> Sau khi Apply Mirror, chỉ unwrap lại phần thân máy bay để giữ UV của hai cánh và hai cánh đuôi chồng chính xác lên nhau.
