# 017 — Linked Duplicates

| Thuộc tính       | Nội dung                                     |
| ---------------- | -------------------------------------------- |
| **Module**       | Module 01 — Introduction & Setup             |
| **Bài học**      | Linked Duplicates                            |
| **Thời lượng**   | 8:11                                         |
| **Chủ đề chính** | Nhân bản đối tượng có liên kết trong Blender |

---

## 1. Mục tiêu bài học

Sau bài học này, bạn có thể:

* Phân biệt **Duplicate thông thường** và **Linked Duplicate**.
* Sử dụng `Alt + D` để tạo nhiều object dùng chung dữ liệu hình học.
* Hiểu sự khác nhau giữa **Object** và **Object Data** trong Blender.
* Dùng **Individual Origins** để thay đổi kích thước nhiều object theo tâm riêng.
* Bật hoặc sử dụng tạm thời chế độ **Snapping** khi di chuyển object.
* Ngắt liên kết giữa các object bằng **Make Single User**.
* Liên kết những object độc lập để chúng dùng chung mesh data.
* Xây dựng một ngôi làng nhỏ bằng cách nhân bản, xoay và sắp xếp các ngôi nhà.

---

## 2. Điều chỉnh kích thước nhiều object

Trước khi nhân bản thêm các ngôi nhà, có thể điều chỉnh kích thước của chúng để phù hợp với tổng thể cảnh.

### 2.1. Vai trò của Object Origin

Nếu **Object Origin** nằm gần đáy ngôi nhà, khi thực hiện Scale, object sẽ phóng to hoặc thu nhỏ quanh điểm này.

Điều đó giúp ngôi nhà:

* Tiếp tục nằm trên mặt đất.
* Không bị nâng lên hoặc chìm xuống khi thay đổi kích thước.
* Dễ sắp xếp trên địa hình hơn.

```text
        Ngôi nhà
       ┌────────┐
       │        │
       │        │
       └───●────┘
           ↑
      Object Origin
```

Đối với những object cần đứng trên mặt đất như nhà, cây, cột hoặc nhân vật, đặt Origin ở phần đáy thường rất hữu ích.

---

## 3. Transform Pivot Point

Khi chọn nhiều object và nhấn `S` để Scale, Blender cần xác định điểm làm tâm biến đổi.

Thiết lập này nằm tại:

```text
Thanh công cụ 3D Viewport
        ↓
Transform Pivot Point
```

### 3.1. Median Point

**Median Point** là tùy chọn mặc định.

Khi chọn nhiều object, Blender tính một điểm trung tâm chung giữa tất cả các object và Scale toàn bộ quanh điểm này.

```text
Nhà A          Nhà B          Nhà C
  □              □              □
          ↘      ●      ↙
             Median Point
```

Kết quả:

* Các object thay đổi kích thước.
* Khoảng cách giữa chúng cũng thay đổi.
* Chúng có xu hướng di chuyển vào gần hoặc ra xa tâm chung.

---

### 3.2. Individual Origins

Khi chọn **Individual Origins**, mỗi object sử dụng Origin riêng làm tâm biến đổi.

```text
Nhà A          Nhà B          Nhà C
  ●              ●              ●
  ↑              ↑              ↑
Origin A       Origin B       Origin C
```

Khi nhấn `S`:

* Mỗi ngôi nhà tự Scale quanh Origin của chính nó.
* Vị trí tương đối giữa các ngôi nhà gần như không thay đổi.
* Các object không bị dồn vào hoặc đẩy ra khỏi tâm chung.

### Quy trình

1. Chọn tất cả các ngôi nhà.
2. Mở menu **Transform Pivot Point**.
3. Chọn **Individual Origins**.
4. Nhấn `S`.
5. Di chuyển chuột để điều chỉnh kích thước.
6. Nhấn chuột trái hoặc `Enter` để xác nhận.
7. Chuyển Pivot Point trở lại **Median Point** sau khi hoàn thành.

> Nên đưa Pivot Point về thiết lập mặc định sau khi sử dụng để tránh nhầm lẫn trong các thao tác tiếp theo.

---

## 4. Snapping khi di chuyển object

Snapping giúp object bám vào bề mặt, lưới hoặc các thành phần hình học khác trong quá trình di chuyển.

Có thể bật Snapping bằng biểu tượng nam châm trên thanh công cụ của 3D Viewport.

### Hai cách sử dụng Snapping

| Cách sử dụng          | Thao tác                       |
| --------------------- | ------------------------------ |
| Bật Snapping liên tục | Bấm biểu tượng nam châm        |
| Bật Snapping tạm thời | Giữ `Ctrl` trong khi di chuyển |

Ví dụ:

1. Chọn một ngôi nhà.
2. Nhấn `G` để di chuyển.
3. Giữ `Ctrl`.
4. Đưa object đến vị trí cần đặt.
5. Object sẽ tạm thời sử dụng Snapping.

```text
Snapping tắt
    +
Giữ Ctrl khi di chuyển
    ↓
Snapping tạm thời được kích hoạt
```

Trong quá trình xây dựng ngôi làng, nên bật Snapping để các ngôi nhà dễ dàng bám vào mặt đất.

---

## 5. Duplicate thông thường

Để tạo một bản sao độc lập, sử dụng:

```text
Shift + D
```

Hoặc mở:

```text
Object → Duplicate Objects
```

Sau khi nhấn `Shift + D`:

* Blender tạo một object mới.
* Object mới có mesh data riêng.
* Chỉnh sửa hình học của bản sao không ảnh hưởng đến bản gốc.
* Object mới có thể được sửa thành một hình dạng hoàn toàn khác.

### Sơ đồ

```text
Object gốc
    │
    └── Shift + D
            │
            ├── Object mới
            └── Mesh Data mới
```

```text
Nhà A ── dùng Mesh A
Nhà B ── dùng Mesh B
```

Nếu chỉnh sửa Mesh B, Mesh A không thay đổi.

---

## 6. Linked Duplicate

Để tạo một bản sao có liên kết, sử dụng:

```text
Alt + D
```

Hoặc mở:

```text
Object → Duplicate Linked
```

Linked Duplicate tạo một object mới nhưng không tạo mesh data hoàn toàn riêng biệt. Thay vào đó, object mới dùng chung dữ liệu hình học với object gốc.

### Sơ đồ hoạt động

```text
                 ┌── Object A
Mesh Data chung ─┼── Object B
                 ├── Object C
                 └── Object D
```

Các object có thể có:

* Vị trí khác nhau.
* Góc xoay khác nhau.
* Kích thước ở Object Mode khác nhau.

Tuy nhiên, chúng vẫn dùng chung:

* Vertex.
* Edge.
* Face.
* Cấu trúc hình học của mesh.

---

## 7. Khác biệt giữa Object và Mesh Data

Trong Blender, một object có thể hiểu đơn giản gồm hai phần:

```text
Object
├── Transform
│   ├── Location
│   ├── Rotation
│   └── Scale
│
└── Object Data
    └── Mesh
        ├── Vertex
        ├── Edge
        └── Face
```

### Object Transform

Các Linked Duplicate vẫn có Transform riêng biệt.

Do đó, bạn có thể:

* Di chuyển từng ngôi nhà đến vị trí khác nhau.
* Xoay từng ngôi nhà theo hướng khác nhau.
* Thay đổi Scale ở Object Mode cho từng bản.

### Mesh Data

Các Linked Duplicate dùng chung mesh data.

Do đó, nếu vào **Edit Mode** và:

* Di chuyển vertex.
* Extrude một face.
* Thêm Loop Cut.
* Xóa edge.
* Thay đổi hình dạng mái nhà.
* Thêm ống khói hoặc phần mở rộng.

Thì tất cả các object đang dùng chung mesh data đều được cập nhật.

---

## 8. So sánh `Shift + D` và `Alt + D`

| Đặc điểm                          | `Shift + D`                   | `Alt + D`                     |
| --------------------------------- | ----------------------------- | ----------------------------- |
| Loại bản sao                      | Duplicate độc lập             | Linked Duplicate              |
| Tạo object mới                    | Có                            | Có                            |
| Tạo mesh data riêng               | Có                            | Không                         |
| Dùng chung hình học               | Không                         | Có                            |
| Di chuyển riêng                   | Có                            | Có                            |
| Xoay riêng                        | Có                            | Có                            |
| Scale ở Object Mode riêng         | Có                            | Có                            |
| Chỉnh Edit Mode lan sang bản khác | Không                         | Có                            |
| Phù hợp với                       | Object cần biến đổi khác nhau | Object lặp lại cùng hình dạng |

### Minh họa

```text
Shift + D
─────────
Nhà A → Mesh A
Nhà B → Mesh B

Sửa Nhà A
   ↓
Chỉ Nhà A thay đổi
```

```text
Alt + D
────────
Nhà A ┐
Nhà B ├── Mesh dùng chung
Nhà C ┘

Sửa một ngôi nhà trong Edit Mode
              ↓
Tất cả ngôi nhà cùng thay đổi
```

---

## 9. Khi nào nên dùng Linked Duplicate?

Linked Duplicate phù hợp khi trong scene có nhiều object cần giữ cùng một hình dạng.

### Ví dụ

* Nhiều ngôi nhà cùng kiểu.
* Các viên xúc xắc giống nhau.
* Cột kiến trúc.
* Cửa sổ và cửa ra vào lặp lại.
* Ghế trong lớp học.
* Bánh xe hoặc linh kiện máy móc.
* Cây hoặc tảng đá cùng một mẫu.
* Đèn đường.
* Hàng rào.
* Các chi tiết trang trí lặp lại.

Ví dụ, nếu tạo nhiều viên xúc xắc bằng `Alt + D` nhưng sau đó phát hiện thiếu một mặt số, bạn chỉ cần sửa một viên trong Edit Mode. Tất cả các viên còn lại sẽ được cập nhật theo.

---

## 10. Kiểm tra sự liên kết

### Quy trình thử nghiệm

1. Chọn một ngôi nhà.
2. Nhấn `Alt + D`.
3. Di chuyển bản sao sang vị trí khác.
4. Nhấn `Tab` để vào Edit Mode.
5. Chọn một vertex, edge hoặc face.
6. Nhấn `G`, `S` hoặc `E` để thay đổi hình học.
7. Quan sát bản Linked Duplicate còn lại.

Kết quả:

```text
Chỉnh sửa một object trong Edit Mode
                  ↓
Mesh Data chung thay đổi
                  ↓
Tất cả Linked Duplicate cập nhật
```

> Nếu chỉ thay đổi Location, Rotation hoặc Scale trong Object Mode, các object khác sẽ không bị ảnh hưởng.

---

## 11. Ngắt liên kết bằng Make Single User

Trong một số trường hợp, bạn muốn một Linked Duplicate trở thành object độc lập để chỉnh sửa riêng.

Thực hiện trong **Object Mode**:

```text
Object
  → Relations
    → Make Single User
      → Object & Data
```

Sau thao tác này:

* Object được chọn có mesh data riêng.
* Nó không còn chia sẻ hình học với các object trước đó.
* Chỉnh sửa trong Edit Mode không còn lan sang những bản khác.

### Sơ đồ trước và sau khi ngắt liên kết

#### Trước khi Make Single User

```text
             ┌── Nhà A
Mesh chung ──┼── Nhà B
             └── Nhà C
```

#### Sau khi tách Nhà C

```text
Mesh chung ──┬── Nhà A
             └── Nhà B

Mesh riêng ───── Nhà C
```

---

## 12. Liên kết lại các object

Blender cũng cho phép liên kết những object ban đầu không dùng chung mesh data.

### Quy trình

1. Chuyển sang **Object Mode**.
2. Chọn các object cần liên kết.
3. Chọn object nguồn sau cùng để nó trở thành **Active Object**.
4. Nhấn:

```text
Ctrl + L
```

5. Chọn tùy chọn liên kết dữ liệu object phù hợp.

Object đang hoạt động được nhận biết bởi đường viền nổi bật hơn. Mesh data của object này sẽ được sử dụng làm nguồn cho các object còn lại.

### Vai trò của Active Object

```text
Object được chọn trước
Object được chọn trước
Object được chọn cuối cùng
          ↓
    Active Object
          ↓
Dùng làm nguồn dữ liệu liên kết
```

Điều này rất quan trọng nếu một trong các ngôi nhà có hình dạng hơi khác. Khi liên kết, các object khác sẽ nhận dữ liệu hình học từ Active Object.

---

## 13. Tạo một kiểu nhà mới

Không phải tất cả các ngôi nhà đều cần dùng chung một mẫu.

Nếu muốn tạo một kiểu nhà mới, nên dùng:

```text
Shift + D
```

thay vì:

```text
Alt + D
```

Điều này giúp bản sao mới có mesh data riêng và có thể chỉnh sửa mà không ảnh hưởng đến các ngôi nhà cũ.

### Quy trình gợi ý

1. Chọn một ngôi nhà.
2. Nhấn `Shift + D`.
3. Di chuyển bản sao sang vị trí khác.
4. Nhấn phím `/` trên Numpad để vào **Local View**.
5. Nhấn `Tab` để vào Edit Mode.
6. Thêm một Loop Cut.
7. Chọn Face Select bằng phím `3`.
8. Chọn mặt bên.
9. Nhấn `E` để Extrude và tạo phần mở rộng.
10. Nhấn `Tab` để trở lại Object Mode.
11. Nhấn `/` để thoát Local View.

Sau khi có mẫu nhà mới, có thể dùng `Alt + D` để nhân bản kiểu nhà này thành nhiều bản có liên kết.

```text
Nhà mẫu cũ
    │
    └── Shift + D
            ↓
      Nhà kiểu mới
            │
            ├── Alt + D → Bản liên kết 1
            ├── Alt + D → Bản liên kết 2
            └── Alt + D → Bản liên kết 3
```

---

## 14. Local View

Local View giúp cô lập object đang chọn để dễ chỉnh sửa mà không bị các object khác che khuất.

### Phím tắt

```text
Numpad /
```

Có thể truy cập từ menu:

```text
View → Local View → Toggle Local View
```

### Công dụng

* Chỉ hiển thị object đang chọn.
* Dễ quan sát hình học.
* Giảm nhầm lẫn khi scene có nhiều object.
* Thuận tiện khi Extrude hoặc thêm Loop Cut.

Nhấn `Numpad /` lần nữa để trở lại toàn bộ scene.

---

## 15. Xây dựng ngôi làng

Sau khi hiểu Linked Duplicate, có thể sử dụng kỹ thuật này để xây dựng một ngôi làng cạnh ngọn hải đăng.

### Quy trình gợi ý

1. Bật Snapping.
2. Chuyển sang Top View bằng `Numpad 7`.
3. Chọn một ngôi nhà.
4. Nhấn `Alt + D` để tạo Linked Duplicate.
5. Di chuyển bản sao đến vị trí mới.
6. Xoay bằng `R`.
7. Lặp lại với nhiều kiểu nhà khác nhau.
8. Thay đổi hướng xoay để ngôi làng trông tự nhiên hơn.
9. Có thể đặt một ngôi nhà nối sát hoặc chồng nhẹ lên ngôi nhà khác để tạo phần mở rộng.
10. Kiểm tra lại trong góc nhìn Perspective.

### Sơ đồ bố trí ví dụ

```text
                      Ngọn hải đăng
                            ▲
                           / \
                          /   \

              Nhà A           Nhà B
                   Nhà C
          Nhà D             Nhà E
                        Nhà F
```

Không nên đặt tất cả ngôi nhà:

* Trên một đường thẳng hoàn toàn.
* Cùng một góc xoay.
* Có khoảng cách giống hệt nhau.
* Cùng một kích thước và cùng một kiểu.

Một chút khác biệt về vị trí, hướng xoay và loại nhà sẽ giúp ngôi làng trông tự nhiên hơn.

---

## 16. Quy trình thực hành hoàn chỉnh

### Bước 1: Điều chỉnh kích thước

* Chọn các ngôi nhà.
* Chuyển Pivot Point sang **Individual Origins**.
* Nhấn `S` để thay đổi kích thước.
* Chuyển Pivot Point trở lại **Median Point**.

### Bước 2: Tạo Linked Duplicate

* Chọn một ngôi nhà.
* Nhấn `Alt + D`.
* Di chuyển bản sao sang vị trí mới.
* Tạo ít nhất hai Linked Duplicate.

### Bước 3: Kiểm tra liên kết

* Chọn một trong các bản sao.
* Nhấn `Tab`.
* Thay đổi một vertex, edge hoặc face.
* Quan sát các bản còn lại thay đổi theo.
* Hoàn tác bằng `Ctrl + Z` nếu chỉ đang thử nghiệm.

### Bước 4: Thực hành ngắt liên kết

* Trở lại Object Mode.
* Chọn một object.
* Mở:

```text
Object → Relations → Make Single User → Object & Data
```

* Vào Edit Mode và chỉnh sửa.
* Xác nhận object này không còn ảnh hưởng đến các bản khác.

### Bước 5: Tạo kiểu nhà khác

* Chọn một ngôi nhà.
* Nhấn `Shift + D`.
* Chỉnh sửa mesh để tạo phần mở rộng hoặc hình dạng mới.
* Dùng `Alt + D` để nhân bản kiểu nhà mới.

### Bước 6: Hoàn thiện ngôi làng

* Bật Snapping.
* Di chuyển và xoay các ngôi nhà.
* Sắp xếp chúng trên ngọn đồi.
* Kiểm tra tổng thể bên cạnh ngọn hải đăng.
* Lưu file Blender.

---

## 17. Phím tắt và công cụ liên quan

| Thao tác                         | Phím tắt hoặc đường dẫn                                 |
| -------------------------------- | ------------------------------------------------------- |
| Duplicate độc lập                | `Shift + D`                                             |
| Linked Duplicate                 | `Alt + D`                                               |
| Di chuyển                        | `G`                                                     |
| Xoay                             | `R`                                                     |
| Scale                            | `S`                                                     |
| Vào hoặc thoát Edit Mode         | `Tab`                                                   |
| Bật Snapping tạm thời            | Giữ `Ctrl` khi Transform                                |
| Chuyển sang Top View             | `Numpad 7`                                              |
| Bật hoặc tắt Local View          | `Numpad /`                                              |
| Liên kết dữ liệu giữa các object | `Ctrl + L`                                              |
| Ngắt liên kết                    | `Object → Relations → Make Single User → Object & Data` |
| Hoàn tác                         | `Ctrl + Z`                                              |
| Face Select trong Edit Mode      | `3`                                                     |
| Extrude                          | `E`                                                     |
| Loop Cut                         | `Ctrl + R`                                              |
| Focus vào object được chọn       | `Numpad .`                                              |
| Lưu file                         | `Ctrl + S`                                              |

---

## 18. Lưu ý và lỗi thường gặp

### 18.1. Quên rằng các object đang liên kết

Nếu sửa một Linked Duplicate trong Edit Mode, tất cả các object dùng chung mesh data sẽ thay đổi.

**Cách xử lý:**

* Hoàn tác bằng `Ctrl + Z`.
* Hoặc dùng **Make Single User** trước khi chỉnh sửa riêng.

---

### 18.2. Dùng nhầm `Alt + D` khi muốn tạo kiểu nhà mới

Nếu muốn một ngôi nhà có hình dạng khác hoàn toàn, không nên dùng `Alt + D`.

**Nên sử dụng:**

```text
Shift + D
```

Sau đó mới chỉnh sửa mesh.

---

### 18.3. Dùng nhầm `Shift + D` cho các object lặp lại

Nếu tạo hàng chục object giống nhau bằng `Shift + D`, mỗi object có mesh data riêng.

Điều này khiến:

* Khó sửa đồng loạt.
* Tốn nhiều thao tác hơn.
* File có thể sử dụng nhiều dữ liệu hơn mức cần thiết.

Với các object cần giống hệt nhau, nên dùng `Alt + D`.

---

### 18.4. Quên chuyển Pivot Point về Median Point

Sau khi dùng **Individual Origins**, những thao tác tiếp theo có thể cho kết quả khác dự kiến.

Nên chuyển lại:

```text
Transform Pivot Point → Median Point
```

---

### 18.5. Quên bật Snapping

Khi Snapping tắt, ngôi nhà có thể:

* Chìm vào địa hình.
* Bay trên mặt đất.
* Xuyên qua object khác.
* Khó căn chỉnh chính xác.

Có thể bật Snapping hoặc giữ `Ctrl` khi di chuyển.

---

### 18.6. Chọn sai Active Object khi liên kết

Khi dùng `Ctrl + L`, object được chọn cuối cùng là Active Object và được dùng làm nguồn dữ liệu.

Nếu chọn sai thứ tự, các object có thể nhận mesh không mong muốn.

---

### 18.7. Chỉnh Scale trong Edit Mode và Object Mode

Hai thao tác này có ý nghĩa khác nhau:

* **Scale trong Object Mode:** thay đổi Transform của từng object.
* **Scale trong Edit Mode:** thay đổi mesh data và ảnh hưởng đến tất cả Linked Duplicate.

---

## 19. Bảng quyết định nhanh

| Nhu cầu                                       | Công cụ nên dùng            |
| --------------------------------------------- | --------------------------- |
| Tạo nhiều ngôi nhà giống hệt nhau             | `Alt + D`                   |
| Các ngôi nhà cần nằm ở vị trí khác nhau       | `Alt + D`, sau đó dùng `G`  |
| Các ngôi nhà cần xoay khác nhau               | `Alt + D`, sau đó dùng `R`  |
| Muốn sửa mái của tất cả các ngôi nhà cùng lúc | Sửa một bản trong Edit Mode |
| Muốn tạo một kiểu nhà hoàn toàn mới           | `Shift + D`                 |
| Muốn một bản không còn thay đổi theo nhóm     | Make Single User            |
| Muốn các object độc lập dùng chung hình học   | `Ctrl + L`                  |
| Muốn Scale nhiều object quanh tâm riêng       | Individual Origins          |
| Muốn object bám vào mặt đất                   | Snapping                    |

---

## 20. Checklist thực hành

* [ ] Đã điều chỉnh kích thước nhiều ngôi nhà bằng **Individual Origins**.
* [ ] Đã chuyển Pivot Point trở lại **Median Point**.
* [ ] Đã bật Snapping khi bố trí nhà.
* [ ] Đã tạo Duplicate độc lập bằng `Shift + D`.
* [ ] Đã tạo Linked Duplicate bằng `Alt + D`.
* [ ] Đã kiểm tra việc chỉnh sửa Edit Mode lan truyền giữa các Linked Duplicate.
* [ ] Đã thực hành **Make Single User**.
* [ ] Đã thử liên kết các object bằng `Ctrl + L`.
* [ ] Đã tạo ít nhất một kiểu nhà mới có mesh riêng.
* [ ] Đã dùng Local View để chỉnh sửa object.
* [ ] Đã bố trí các ngôi nhà thành một ngôi làng.
* [ ] Đã lưu file bằng `Ctrl + S`.

---

## 21. Bài tập thực hành

### Yêu cầu cơ bản

Tạo một ngôi làng nhỏ cạnh ngọn hải đăng với:

* Ít nhất hai kiểu nhà khác nhau.
* Mỗi kiểu nhà có ít nhất hai Linked Duplicate.
* Các ngôi nhà được đặt ở vị trí và góc xoay khác nhau.
* Tất cả các ngôi nhà nằm đúng trên bề mặt địa hình.

### Yêu cầu nâng cao

* Tạo một ngôi nhà có phần mở rộng.
* Tạo thêm một biến thể độc lập bằng `Shift + D`.
* Sau đó dùng `Alt + D` để nhân bản biến thể mới.
* Thử thêm ống khói hoặc cửa sổ và kiểm tra các Linked Duplicate cập nhật.
* Sắp xếp các ngôi nhà để tạo cảm giác như một ngôi làng tự nhiên trên đồi.

---

## 22. Tóm tắt bài học

**Linked Duplicate** là phương pháp tạo nhiều object riêng biệt nhưng dùng chung dữ liệu hình học.

```text
Alt + D
   ↓
Nhiều Object
   ↓
Dùng chung một Mesh Data
   ↓
Sửa một bản trong Edit Mode
   ↓
Tất cả các bản cùng cập nhật
```

Điểm khác biệt quan trọng:

* `Shift + D` tạo bản sao độc lập.
* `Alt + D` tạo bản sao dùng chung mesh data.
* Các Linked Duplicate vẫn có thể di chuyển, xoay và Scale riêng trong Object Mode.
* Chỉnh sửa hình học trong Edit Mode sẽ tác động đến toàn bộ nhóm.
* Khi cần chỉnh riêng một bản, sử dụng **Make Single User**.
* Khi cần liên kết các object độc lập, sử dụng `Ctrl + L`.

Kỹ thuật này đặc biệt hiệu quả khi xây dựng những scene có nhiều chi tiết lặp lại như nhà cửa, cây cối, cột, cửa sổ, đồ nội thất hoặc các bộ phận máy móc.
