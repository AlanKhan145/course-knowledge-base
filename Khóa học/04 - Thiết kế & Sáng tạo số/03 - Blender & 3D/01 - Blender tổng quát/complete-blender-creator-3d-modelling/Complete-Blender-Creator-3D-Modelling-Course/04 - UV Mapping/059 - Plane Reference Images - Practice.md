# 059 — Plane Reference Images

## Thiết lập ảnh tham chiếu máy bay

| Thuộc tính              | Nội dung                                       |
| ----------------------- | ---------------------------------------------- |
| **Module**              | Module 04 — UV Mapping                         |
| **Bài học**             | Plane Reference Images                         |
| **Thời lượng**          | 6:19                                           |
| **Chủ đề chính**        | Nhập, xoay và căn chỉnh ảnh tham chiếu máy bay |
| **Đối tượng thực hành** | Máy bay Spitfire                               |
| **Ảnh sử dụng**         | Front View, Side View và Top View              |

---

## 1. Mục tiêu bài học

Sau bài học này, người học có thể:

* Nhập nhiều ảnh tham chiếu vào Blender.
* Thiết lập ba góc nhìn của máy bay:

  * Front View
  * Side View
  * Top View
* Xoay từng ảnh đúng theo hệ trục tọa độ.
* Đặt các ảnh vào một Collection riêng.
* Căn chỉnh chiều dài, chiều rộng và chiều cao giữa các ảnh.
* Sử dụng Cube mặc định làm công cụ đo và đối chiếu tỷ lệ.
* Điều chỉnh độ trong suốt của ảnh tham chiếu.
* Chỉ hiển thị ảnh ở đúng góc nhìn trực giao.
* Chuẩn bị scene để bắt đầu dựng mô hình máy bay.

---

## 2. Tổng quan bài học

Trong phần tiếp theo của khóa học, kiến thức về UV Unwrapping sẽ được áp dụng cho một vật thể phức tạp hơn: máy bay Spitfire.

Trước khi dựng mô hình, cần thiết lập chính xác ba ảnh tham chiếu:

```text
                    Front View
                        │
                        │ chiều cao
                        ▼
Side View ───── chiều dài ───── Top View
                                      │
                                      │ chiều rộng cánh
                                      ▼
```

Ba ảnh phải thống nhất với nhau về:

* Vị trí mũi máy bay.
* Vị trí đuôi máy bay.
* Chiều dài thân.
* Chiều rộng cánh.
* Chiều cao thân và đuôi đứng.

Nếu các ảnh không được căn chỉnh chính xác, mô hình dựng từ các góc nhìn khác nhau sẽ bị sai tỷ lệ.

---

## 3. Chuẩn bị scene

Giảng viên bắt đầu bằng một scene Blender mới để tránh bị phân tâm bởi những object không cần thiết.

Tuy nhiên, máy bay sau khi hoàn thành có thể được đưa vào scene trước đó, chẳng hạn:

* Khu vực sân bay.
* Nhà chứa máy bay.
* Tháp radio.
* Công trình quân sự.
* Scene có các thùng gỗ và tòa nhà đã dựng trước đó.

Blender cho phép đưa object từ file này sang file khác bằng tính năng **Append**.

---

## 4. Nhập ba ảnh tham chiếu

Trong tài nguyên của bài học có ba ảnh:

* `plane_front`
* `plane_side`
* `plane_top`

Có thể nhập bằng cách kéo trực tiếp ảnh từ thư mục vào Blender hoặc sử dụng:

```text
Shift + A
→ Image
→ Reference
```

Sau khi nhập đủ ba ảnh:

1. Chọn cả ba ảnh.
2. Xóa mọi thay đổi vị trí:

```text
Alt + G
```

3. Xóa mọi góc xoay:

```text
Alt + R
```

Việc này đưa các ảnh về trạng thái chuẩn trước khi bắt đầu bố trí.

---

## 5. Xoay đúng từng ảnh

### 5.1. Side View

Ảnh nhìn bên cần được xoay để nằm đúng trên mặt phẳng nhìn cạnh.

```text
R → X → 90
R → Z → 90
```

Sau đó đổi tên object thành:

```text
Side
```

---

### 5.2. Top View

Ảnh nhìn từ trên xuống đã có hướng xoay phù hợp nên không cần chỉnh thêm nhiều.

Đổi tên object thành:

```text
Top
```

---

### 5.3. Front View

Ảnh nhìn phía trước cần xoay 90° quanh trục X:

```text
R → X → 90
```

Đổi tên object thành:

```text
Front
```

> Luôn kiểm tra trực tiếp bằng các góc Front, Side và Top thay vì chỉ dựa vào giá trị Rotation.

---

## 6. Tổ chức ảnh trong Collection riêng

Chọn cả ba ảnh tham chiếu và nhấn:

```text
M
→ New Collection
```

Đặt tên Collection:

```text
Plane Ref
```

Cấu trúc Outliner gợi ý:

```text
Scene Collection
├── Plane Ref
│   ├── Front
│   ├── Side
│   └── Top
├── Cube
├── Camera
└── Light
```

Lợi ích của Collection riêng:

* Bật hoặc tắt toàn bộ ảnh tham chiếu nhanh chóng.
* Giữ Outliner gọn gàng.
* Tránh chọn nhầm ảnh khi modelling.
* Dễ khóa hoặc vô hiệu hóa khả năng chọn ảnh.

---

## 7. Bố trí ảnh trong không gian 3D

Các ảnh cần được đẩy ra khỏi tâm scene để có khoảng trống dựng mô hình.

### Side View

Di chuyển theo trục X:

```text
G → X
```

### Front View

Di chuyển theo trục Y:

```text
G → Y
```

### Top View

Di chuyển xuống dưới theo trục Z:

```text
G → Z
```

Sơ đồ bố trí:

```text
                   Front Reference
                         │
                         │ trục Y
                         │
Side Reference ─────── Model ───────
                         │
                         │ trục Z
                         │
                   Top Reference
```

Mục tiêu là tạo một vùng trống ở giữa để dựng mesh mà không bị các mặt phẳng ảnh cắt xuyên qua object.

---

## 8. Điều chỉnh độ trong suốt

Chọn ảnh tham chiếu, vào:

```text
Object Data Properties
→ Opacity
```

Bật Opacity và đặt giá trị khoảng:

```text
0.5
```

Độ trong suốt giúp:

* Quan sát mesh phía trước ảnh.
* Không bị ảnh che vertex và edge.
* Dễ so sánh đường biên của model với bản vẽ.

Có thể dùng mức tham khảo:

|   Opacity | Công dụng                          |
| --------: | ---------------------------------- |
|     `1.0` | Ảnh rõ hoàn toàn                   |
|     `0.7` | Ảnh khá rõ                         |
|     `0.5` | Cân bằng giữa ảnh và mesh          |
| `0.2–0.3` | Phù hợp khi cần tập trung vào mesh |

---

## 9. Căn giữa Top View

Chuyển sang góc nhìn trên:

```text
Numpad 7
```

Chọn ảnh Top View và căn đường tâm máy bay trùng với trục giữa của scene:

```text
G → X
```

Giữ `Shift` khi di chuyển để điều chỉnh chậm và chính xác hơn.

Cần bảo đảm:

```text
Cánh trái ───── Trục giữa máy bay ───── Cánh phải
```

Đường tâm thân máy bay phải nằm đúng giữa hệ tọa độ.

---

## 10. Dùng Cube để căn chiều dài máy bay

Cube mặc định được dùng như một thước đo ba chiều.

### 10.1. Đặt đầu Cube tại mũi máy bay

Trong Top View:

1. Chọn Cube.
2. Di chuyển Cube đến mũi máy bay:

```text
G → Y
```

Đặt một mặt của Cube trùng chính xác với đầu mũi máy bay.

---

### 10.2. Kéo Cube đến đuôi máy bay

1. Chuyển Cube sang Edit Mode:

```text
Tab
```

2. Bật Wireframe:

```text
Z
→ Wireframe
```

3. Chọn các vertex ở phía sau Cube.
4. Di chuyển chúng đến đuôi máy bay:

```text
G → Y
```

Lúc này Cube có chiều dài đúng bằng chiều dài máy bay trong Top View.

```text
Mũi máy bay |==========================| Đuôi máy bay
                  chiều dài Cube
```

---

## 11. Căn Side View theo Top View

Chuyển sang Side View:

```text
Numpad 3
```

Chọn ảnh Side View.

Trước tiên, căn mũi của Side View với mặt trước Cube:

```text
G → Y
```

Sau đó cần điều chỉnh tỷ lệ để đuôi ảnh Side View trùng với đầu còn lại của Cube.

---

## 12. Scale từ một điểm cố định bằng 3D Cursor

Nếu scale bình thường, cả mũi và đuôi ảnh đều di chuyển. Điều này có thể làm mất vị trí mũi máy bay đã căn trước đó.

Giải pháp là scale quanh 3D Cursor.

### Quy trình

1. Đặt 3D Cursor tại mũi máy bay.
2. Đổi Transform Pivot Point thành:

```text
3D Cursor
```

3. Chọn ảnh Side View.
4. Scale ảnh:

```text
S
```

Ảnh sẽ được phóng to hoặc thu nhỏ từ vị trí mũi, giữ nguyên điểm mốc phía trước.

```text
3D Cursor
    ●──────────────────────►
    Mũi cố định       Đuôi thay đổi khi scale
```

Kết quả cần đạt:

* Mũi Side View trùng mũi Top View.
* Đuôi Side View trùng đuôi Top View.
* Hai ảnh có cùng chiều dài máy bay.

Sau khi hoàn tất, đổi Pivot Point trở lại:

```text
Median Point
```

---

## 13. Căn chiều rộng cánh giữa Top và Front View

Chuyển sang Top View và chọn Cube.

Scale Cube theo trục X để khớp với sải cánh:

```text
S → X
```

Hai mặt bên Cube cần chạm vào hai đầu cánh:

```text
Đầu cánh trái |====================| Đầu cánh phải
                    Cube
```

Sau đó chuyển sang Front View:

```text
Numpad 1
```

Chọn ảnh Front View và scale để hai đầu cánh trong ảnh chạm vào hai cạnh Cube.

Có thể sử dụng:

```text
S
G → X
```

Mục tiêu:

* Cánh trái và cánh phải đối xứng.
* Tâm máy bay nằm giữa.
* Sải cánh Front View khớp Top View.

---

## 14. Căn chiều cao giữa Side và Front View

Chuyển sang Side View.

### 14.1. Đặt đáy Cube tại đáy máy bay

Chọn Cube và di chuyển theo trục Z:

```text
G → Z
```

Đặt đáy Cube trùng với phần thấp nhất của máy bay.

---

### 14.2. Kéo đỉnh Cube đến phần cao nhất

1. Vào Edit Mode.
2. Chọn các vertex phía trên Cube.
3. Di chuyển lên:

```text
G → Z
```

Đặt đỉnh Cube chạm vào phần cao nhất của bánh lái đứng hoặc đuôi đứng.

```text
Đỉnh đuôi đứng
      ▲
      │
      │ chiều cao Cube
      │
      ▼
Đáy máy bay
```

---

### 14.3. Căn Front View theo Cube

Chuyển sang Front View, chọn ảnh Front và điều chỉnh:

```text
G → Z
G → X
S
```

Cần bảo đảm:

* Đáy máy bay trùng với đáy Cube.
* Đỉnh máy bay trùng với đỉnh Cube.
* Hai đầu cánh vẫn khớp chiều rộng Cube.
* Tâm máy bay trùng với trục giữa.

---

## 15. Quan hệ căn chỉnh giữa ba ảnh

Ba ảnh cần thỏa mãn các điều kiện sau:

| Thuộc tính        | Ảnh dùng để đối chiếu  |
| ----------------- | ---------------------- |
| Chiều dài thân    | Top View ↔ Side View   |
| Chiều rộng cánh   | Top View ↔ Front View  |
| Chiều cao máy bay | Side View ↔ Front View |
| Vị trí mũi        | Top View ↔ Side View   |
| Vị trí đuôi       | Top View ↔ Side View   |
| Đường tâm         | Top View ↔ Front View  |
| Đáy máy bay       | Side View ↔ Front View |

Sơ đồ kiểm tra:

```text
Top View
├── Cung cấp chiều dài
│   └── Đối chiếu với Side View
│
└── Cung cấp chiều rộng cánh
    └── Đối chiếu với Front View

Side View
└── Cung cấp chiều cao
    └── Đối chiếu với Front View
```

---

## 16. Chỉ hiển thị ảnh trong góc nhìn trực giao

Trong Object Data Properties của từng ảnh tham chiếu, tắt khả năng hiển thị trong Perspective View.

Mục đích:

* Ảnh Front chỉ xuất hiện khi nhìn Front.
* Ảnh Side chỉ xuất hiện khi nhìn Side.
* Ảnh Top chỉ xuất hiện khi nhìn Top.
* Ảnh không gây rối khi xoay góc nhìn 3D tự do.

Kết quả mong muốn:

| Góc nhìn         | Ảnh hiển thị                  |
| ---------------- | ----------------------------- |
| Front View       | Front Reference               |
| Side View        | Side Reference                |
| Top View         | Top Reference                 |
| Perspective View | Không hiển thị ảnh tham chiếu |

Thiết lập này giúp viewport sạch và dễ quan sát mô hình hơn.

---

## 17. Quy trình thực hành hoàn chỉnh

```text
Nhập 3 ảnh
    ↓
Reset Location và Rotation
    ↓
Xoay đúng Front, Side, Top
    ↓
Đổi tên object
    ↓
Đưa vào Collection Plane Ref
    ↓
Di chuyển ảnh ra khỏi tâm scene
    ↓
Căn giữa Top View
    ↓
Dùng Cube đo chiều dài
    ↓
Căn Side View với Top View
    ↓
Dùng Cube đo sải cánh
    ↓
Căn Front View với Top View
    ↓
Dùng Cube đo chiều cao
    ↓
Căn Front View với Side View
    ↓
Điều chỉnh Opacity
    ↓
Ẩn ảnh trong Perspective View
    ↓
Lưu file
```

---

## 18. Phím tắt và công cụ sử dụng

| Phím hoặc thao tác              | Chức năng                        |
| ------------------------------- | -------------------------------- |
| `Shift + A → Image → Reference` | Thêm ảnh tham chiếu              |
| `Alt + G`                       | Xóa Location của object          |
| `Alt + R`                       | Xóa Rotation của object          |
| `R → X → 90`                    | Xoay 90° quanh trục X            |
| `R → Z → 90`                    | Xoay 90° quanh trục Z            |
| `G → X`                         | Di chuyển theo trục X            |
| `G → Y`                         | Di chuyển theo trục Y            |
| `G → Z`                         | Di chuyển theo trục Z            |
| `S → X`                         | Scale theo trục X                |
| `S`                             | Scale đồng đều                   |
| `M`                             | Di chuyển object sang Collection |
| `H`                             | Ẩn object đã chọn                |
| `Tab`                           | Chuyển Object Mode và Edit Mode  |
| `Z → Wireframe`                 | Chuyển sang Wireframe            |
| `Numpad 1`                      | Front View                       |
| `Numpad 3`                      | Side View                        |
| `Numpad 7`                      | Top View                         |
| Giữ `Shift` khi di chuyển       | Điều chỉnh với bước nhỏ          |
| `3D Cursor Pivot`               | Scale quanh vị trí 3D Cursor     |
| `Median Point`                  | Pivot mặc định của vùng chọn     |

---

## 19. Lưu ý quan trọng

### 19.1. Không căn từng ảnh độc lập

Không nên chỉ căn ảnh dựa trên cảm giác. Mỗi kích thước cần được kiểm tra chéo giữa hai góc nhìn:

* Chiều dài: Top và Side.
* Chiều rộng: Top và Front.
* Chiều cao: Side và Front.

---

### 19.2. Không scale Side View từ tâm

Nếu mũi máy bay đã được căn đúng, scale từ tâm sẽ làm mũi bị lệch.

Nên:

1. Đặt 3D Cursor tại mũi.
2. Chọn Pivot là 3D Cursor.
3. Scale ảnh từ mũi về phía đuôi.

---

### 19.3. Trả Pivot Point về Median Point

Sau khi scale bằng 3D Cursor, cần đổi Pivot Point trở lại `Median Point`.

Nếu quên, các thao tác scale và rotate tiếp theo có thể hoạt động bất thường.

---

### 19.4. Kiểm tra đúng object trước khi thao tác

Vì các ảnh tham chiếu nằm gần nhau, rất dễ chọn nhầm Front, Side hoặc Top.

Nên:

* Đặt tên object rõ ràng.
* Kiểm tra tên trong Outliner.
* Sử dụng Collection riêng.
* Ẩn ảnh không cần thiết trong từng giai đoạn.

---

### 19.5. Phân biệt Wireframe và X-Ray

Nếu object khó chọn hoặc không hiển thị vùng chọn đúng, có thể chuyển từ X-Ray sang Wireframe.

```text
Z
→ Wireframe
```

Wireframe giúp nhìn và chọn các vertex của Cube dễ hơn trong quá trình đo kích thước.

---

## 20. Lỗi thường gặp

### Ảnh không nằm đúng mặt phẳng

**Nguyên nhân:** Xoay sai trục hoặc thiếu một bước xoay.

**Cách khắc phục:**

```text
Alt + R
```

Sau đó xoay lại theo đúng hướng.

---

### Mũi máy bay khớp nhưng đuôi bị lệch

**Nguyên nhân:** Side View và Top View có tỷ lệ khác nhau.

**Cách khắc phục:**

* Dùng Cube đo chiều dài.
* Đặt 3D Cursor tại mũi.
* Scale Side View từ 3D Cursor.

---

### Cánh trong Front View không khớp Top View

**Nguyên nhân:** Scale Front View chưa đúng hoặc ảnh chưa được căn giữa.

**Cách khắc phục:**

```text
G → X
S
```

Đảm bảo hai đầu cánh chạm vào hai cạnh Cube.

---

### Front View đúng chiều rộng nhưng sai chiều cao

**Nguyên nhân:** Chỉ căn theo sải cánh mà chưa căn theo Side View.

**Cách khắc phục:**

* Dùng Cube đo chiều cao trong Side View.
* Căn lại Front View theo đáy và đỉnh Cube.

---

### Ảnh che khuất mô hình

**Nguyên nhân:** Opacity quá cao.

**Cách khắc phục:**

```text
Object Data Properties
→ Opacity ≈ 0.5
```

---

### Ảnh xuất hiện khi xoay Perspective View

**Nguyên nhân:** Ảnh đang được phép hiển thị trong mọi góc nhìn.

**Cách khắc phục:** Tắt hiển thị Perspective trong Object Data Properties.

---

## 21. Checklist thực hành

### Nhập và tổ chức ảnh

* [ ] Đã nhập ảnh Front View.
* [ ] Đã nhập ảnh Side View.
* [ ] Đã nhập ảnh Top View.
* [ ] Đã reset Location bằng `Alt + G`.
* [ ] Đã reset Rotation bằng `Alt + R`.
* [ ] Đã đổi tên từng ảnh rõ ràng.
* [ ] Đã đưa ảnh vào Collection `Plane Ref`.

### Xoay và bố trí

* [ ] Front View nằm đúng mặt phẳng.
* [ ] Side View nằm đúng mặt phẳng.
* [ ] Top View nằm đúng mặt phẳng.
* [ ] Các ảnh đã được đẩy ra khỏi tâm scene.
* [ ] Có đủ không gian để dựng model ở giữa.

### Căn chỉnh tỷ lệ

* [ ] Top View đã được căn giữa.
* [ ] Top và Side có cùng chiều dài.
* [ ] Top và Front có cùng chiều rộng cánh.
* [ ] Side và Front có cùng chiều cao.
* [ ] Mũi máy bay khớp ở các góc nhìn.
* [ ] Đuôi máy bay khớp ở các góc nhìn.
* [ ] Đáy máy bay khớp giữa Side và Front.

### Hiển thị

* [ ] Opacity đã được giảm xuống mức phù hợp.
* [ ] Ảnh chỉ xuất hiện trong góc Orthographic tương ứng.
* [ ] Ảnh không làm rối Perspective View.
* [ ] Pivot Point đã được trả về Median Point.

### Hoàn tất

* [ ] Đã lưu file Blender.
* [ ] Scene đã sẵn sàng để bắt đầu dựng máy bay.

---

## 22. Thử thách cuối bài

Hoàn thiện việc căn chỉnh cả ba ảnh tham chiếu sao cho:

1. Mũi và đuôi của Top View trùng với Side View.
2. Hai đầu cánh của Top View trùng với Front View.
3. Độ cao của Side View trùng với Front View.
4. Các ảnh nằm đúng trên trục giữa.
5. Ảnh không xuất hiện khi xoay Perspective View.
6. Scene được lưu lại để tiếp tục ở bài học sau.

---

## 23. Tóm tắt

Bài học tập trung vào việc thiết lập ba ảnh tham chiếu của máy bay Spitfire trong Blender.

Quy trình quan trọng nhất là:

```text
Top + Side  → xác định chiều dài
Top + Front → xác định chiều rộng
Side + Front → xác định chiều cao
```

Cube mặc định được sử dụng như một công cụ đo tạm thời, giúp chuyển kích thước từ góc nhìn này sang góc nhìn khác. Việc sử dụng 3D Cursor làm Pivot Point giúp scale ảnh từ một điểm cố định mà không làm lệch vị trí mũi máy bay.

Khi ba ảnh Front, Side và Top đã được căn chỉnh chính xác, scene sẽ có một hệ thống tham chiếu đáng tin cậy để bắt đầu dựng mô hình máy bay trong các bài học tiếp theo.

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
