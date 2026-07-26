# 042 — Chèn ảnh nền tham chiếu trong Blender

## Inserting Background Images

| Thuộc tính            | Nội dung                             |
| --------------------- | ------------------------------------ |
| **Module**            | Module 03 — Low-Poly Dinosaur        |
| **Bài học**           | Inserting Background Images          |
| **Thời lượng**        | 4:42                                 |
| **Chủ đề chính**      | Đưa ảnh tham chiếu T-Rex vào Blender |
| **Đối tượng sử dụng** | Empty dạng Image                     |
| **Ảnh cần chuẩn bị**  | T-Rex Front và T-Rex Side            |

---

## 1. Mục tiêu bài học

Sau bài học này, anh có thể:

* Đưa ảnh tham chiếu mặt trước và mặt bên của khủng long vào Blender.
* Hiểu ảnh tham chiếu được Blender lưu dưới dạng **Empty**.
* Đặt lại vị trí và góc xoay của ảnh bằng `Alt + G` và `Alt + R`.
* Căn ảnh theo mặt sàn và đường tâm của thế giới 3D.
* Điều chỉnh độ trong suốt bằng thuộc tính **Opacity**.
* Chuẩn hóa chiều cao khủng long khoảng **3 mét**.
* Sử dụng **3D Cursor** làm tâm phóng to, thu nhỏ.
* Đặt hai ảnh tham chiếu vuông góc để hỗ trợ dựng hình từ Front View và Side View.
* Tắt khả năng chọn ảnh để tránh di chuyển nhầm khi modelling.
* Đổi tên ảnh trong Outliner thành `Front` và `Side`.

---

## 2. Vai trò của ảnh tham chiếu

Khi dựng một vật thể có hình dạng phức tạp như khủng long, ảnh tham chiếu giúp xác định:

* Chiều cao tổng thể.
* Tỉ lệ đầu, thân và chân.
* Đường cong của cổ, lưng và đuôi.
* Chiều rộng của thân khi nhìn từ phía trước.
* Vị trí tương đối giữa các bộ phận.

Trong bài học này, hai ảnh được sử dụng:

1. **T-Rex Front** — ảnh nhìn từ phía trước.
2. **T-Rex Side** — ảnh nhìn từ bên cạnh.

Hai ảnh được đặt vuông góc với nhau để người dựng có thể kiểm tra mô hình theo hai hướng.

```text
                         Trục Z
                           ↑
                           │
            Ảnh Front      │
             ┌─────────────┤
             │             │
             │    T-Rex    │
             │             │
             └─────────────┤
                           │
                           ●────────────→ Trục X
                          /
                         /
                        ↙ Trục Y

                 ┌──────────────────┐
                 │    Ảnh Side      │
                 │      T-Rex       │
                 └──────────────────┘
```

---

## 3. Ảnh được đưa vào Blender dưới dạng Empty

Khi kéo một hình ảnh từ thư mục vào Viewport, Blender tạo một đối tượng **Empty dạng Image**.

Đặc điểm của đối tượng này:

* Hiển thị trong Viewport để làm tham chiếu.
* Không phải là Mesh.
* Không có vertex, edge hoặc face.
* Không tham gia vào hình học của mô hình.
* Có các thiết lập riêng trong **Object Data Properties**.
* Có thể di chuyển, xoay và thay đổi kích thước như một object thông thường.

Ảnh vừa kéo vào sẽ xuất hiện trong **Outliner** ở bên phải.

> Vị trí và hướng ban đầu của ảnh phụ thuộc vào góc nhìn Viewport tại thời điểm anh kéo ảnh vào.

---

# 4. Chèn và căn chỉnh ảnh Front

## Bước 1: Kéo ảnh Front vào Viewport

Mở thư mục chứa tài nguyên bài học, sau đó:

1. Tìm ảnh `T Rex Front`.
2. Giữ chuột trái.
3. Kéo ảnh vào Viewport.
4. Thả chuột để tạo ảnh tham chiếu.

Ảnh sẽ được tạo dưới dạng một đối tượng Empty.

---

## Bước 2: Đưa ảnh về tâm thế giới

Ảnh có thể đang bị xoay hoặc lệch khỏi vị trí trung tâm. Sử dụng:

```text
Alt + R
```

Đặt lại toàn bộ Rotation của ảnh.

```text
Alt + G
```

Đặt lại Location của ảnh về tâm thế giới.

Sau hai thao tác này, ảnh sẽ nằm tại World Origin với góc xoay mặc định.

| Phím tắt  | Tác dụng                                                               |
| --------- | ---------------------------------------------------------------------- |
| `Alt + R` | Xóa Rotation                                                           |
| `Alt + G` | Xóa Location                                                           |
| `Alt + S` | Xóa Scale delta trong một số trường hợp, không được dùng trong bài này |

---

## Bước 3: Xóa khối lập phương mặc định

Khối Cube mặc định không cần thiết trong bài này.

1. Chọn Cube.
2. Nhấn `X`.
3. Xác nhận xóa.

Việc xóa Cube giúp Viewport gọn hơn trước khi bắt đầu dựng khủng long.

---

## Bước 4: Dựng ảnh Front thẳng đứng

Chọn ảnh Front và xoay ảnh 90° quanh trục X:

```text
R → X → 90 → Enter
```

Sau đó chuyển sang Front View:

```text
Numpad 1
```

Ảnh lúc này sẽ đứng thẳng và hướng về góc nhìn phía trước.

---

## Bước 5: Đặt chân khủng long lên mặt sàn

Sử dụng:

```text
G
```

để di chuyển ảnh.

Đặt phần thấp nhất của bàn chân khủng long giao với đường mặt sàn.

Khi cần di chuyển chính xác theo từng trục:

```text
G → X
G → Y
G → Z
```

Trong Front View:

* Trục X dùng để căn ảnh sang trái hoặc phải.
* Trục Z dùng để căn ảnh lên hoặc xuống.

Căn đường giữa của cơ thể khủng long với đường tâm dọc của thế giới.

---

## Bước 6: Giảm độ mờ của ảnh

Khi ảnh quá đậm, lưới tọa độ phía sau sẽ khó nhìn.

Thực hiện:

1. Chọn ảnh Front.
2. Mở **Object Data Properties**.
3. Tìm thuộc tính **Opacity**.
4. Giảm Opacity xuống khoảng:

```text
0.20–0.25
```

Mức Opacity này giúp:

* Nhìn thấy ảnh tham chiếu.
* Đồng thời nhìn được lưới tọa độ.
* Quan sát mesh dễ hơn khi bắt đầu dựng hình.

> Giá trị chính xác có thể thay đổi tùy độ sáng và độ tương phản của ảnh nguồn.

---

# 5. Chuẩn hóa chiều cao khủng long

Theo bài giảng, khủng long sẽ được đặt chiều cao khoảng **3 mét**.

Để Scale ảnh từ mặt sàn thay vì từ tâm ảnh, cần sử dụng **3D Cursor** làm Transform Pivot Point.

---

## Bước 1: Đưa 3D Cursor về World Origin

Sử dụng:

```text
Shift + S
```

Trong menu Snap, chọn:

```text
Cursor to World Origin
```

3D Cursor sẽ được đưa về tọa độ:

```text
X = 0
Y = 0
Z = 0
```

---

## Bước 2: Đổi Transform Pivot Point

Trên thanh công cụ của Viewport:

1. Mở menu **Transform Pivot Point**.
2. Chọn **3D Cursor**.

Từ thời điểm này, thao tác Scale sẽ lấy vị trí 3D Cursor làm tâm.

---

## Bước 3: Scale ảnh lên chiều cao 3 mét

Chọn ảnh Front và nhấn:

```text
S
```

Phóng to ảnh cho đến khi điểm cao nhất của khủng long đạt khoảng:

```text
Z = 3 m
```

Do 3D Cursor đang nằm ở mặt sàn, bàn chân khủng long gần như được giữ nguyên vị trí trong khi phần thân được phóng lên phía trên.

```text
            Z = 3 m ────────── Đỉnh đầu
                      ▲
                      │
                    T-Rex
                      │
                      ▼
            Z = 0 m ────────── Mặt sàn / 3D Cursor
```

---

## Bước 4: Đẩy ảnh ra phía sau vùng dựng hình

Để có không gian dựng mesh ở phía trước ảnh, di chuyển ảnh Front về phía sau khoảng hai Blender Units:

```text
G → Y → 2
```

hoặc di chuyển theo hướng phù hợp với cách đặt scene.

Mục tiêu là tạo khoảng trống ở giữa để dựng mô hình mà ảnh không nằm trùng chính xác với mesh.

---

# 6. Chèn và căn chỉnh ảnh Side

## Bước 1: Chuyển sang Side View trước khi kéo ảnh

Trước khi kéo ảnh Side vào, chuyển sang góc nhìn bên:

```text
Numpad 3
```

Việc này giúp Blender đặt ảnh phù hợp với mặt phẳng của Side View ngay từ đầu.

---

## Bước 2: Kéo ảnh Side vào Viewport

1. Mở lại thư mục tài nguyên.
2. Kéo ảnh `T Rex Side` vào Viewport.
3. Thả chuột để tạo Empty mới.

Ảnh Side sẽ nằm trên một mặt phẳng vuông góc với ảnh Front.

---

## Bước 3: Đảo hướng ảnh nếu cần

Nếu đầu khủng long đang quay sai hướng, xoay ảnh 180° quanh trục Z:

```text
R → Z → 180 → Enter
```

Sau thao tác này, ảnh Side sẽ quay sang hướng mong muốn.

---

## Bước 4: Giảm Opacity

Trong **Object Data Properties**, giảm Opacity của ảnh Side xuống khoảng:

```text
0.20
```

Nên sử dụng mức Opacity gần giống ảnh Front để hai ảnh có độ hiển thị đồng nhất.

---

## Bước 5: Căn vị trí và chiều cao

Trong Side View:

1. Di chuyển ảnh để bàn chân tiếp xúc với mặt sàn.
2. Đảm bảo đỉnh đầu đạt khoảng 3 mét.
3. Sử dụng 3D Cursor làm Pivot Point.
4. Nhấn `S` để Scale ảnh.
5. Căn các mốc chính với ảnh Front.

Các mốc nên đối chiếu gồm:

* Mặt sàn.
* Đỉnh đầu.
* Chiều cao hông.
* Vị trí vai.
* Vị trí đầu gối.
* Chiều dài thân.

---

## Bước 6: Di chuyển ảnh sang bên cạnh vùng dựng

Di chuyển ảnh Side theo trục X khoảng hai Blender Units:

```text
G → X → -2
```

Sau khi hoàn tất:

* Ảnh Front nằm phía sau vùng dựng hình.
* Ảnh Side nằm bên cạnh vùng dựng hình.
* Mô hình khủng long sẽ được tạo ở khu vực giữa.

```text
Nhìn từ trên xuống:

             Ảnh Front
        ───────────────────
                 │
                 │
                 │
     Ảnh Side    │    Vùng dựng Mesh
        │        │
        │        ●
        │
        │
```

---

# 7. Chỉ hiển thị ảnh trong góc nhìn Orthographic

Blender cho phép giới hạn ảnh chỉ xuất hiện trong góc nhìn Orthographic phù hợp.

Trong phần thiết lập hiển thị của ảnh, có thể tắt tùy chọn **Perspective**.

Khi Perspective bị tắt:

* Ảnh Side vẫn hiển thị trong Side Orthographic View.
* Ảnh biến mất khi chuyển sang Perspective View.
* Viewport ít bị rối hơn khi xoay tự do quanh mô hình.

Ví dụ:

```text
Side Orthographic View
→ Ảnh Side hiển thị

Perspective View
→ Ảnh Side được ẩn
```

Trong bài giảng, tùy chọn này được bật lại để người học dễ theo dõi các bước tiếp theo.

---

# 8. Ngăn không cho chọn ảnh tham chiếu

Khi bắt đầu modelling, việc vô tình chọn ảnh nền có thể khiến ảnh bị di chuyển hoặc xoay sai vị trí.

Có thể tắt khả năng chọn ảnh thông qua Outliner.

## Bước 1: Hiện cột Selectable

Trong Outliner:

1. Nhấn biểu tượng mũi tên hoặc **Filter**.
2. Mở nhóm **Restriction Toggles**.
3. Bật cột **Selectable**.

Sau đó, một biểu tượng chọn sẽ xuất hiện cạnh từng object.

---

## Bước 2: Tắt khả năng chọn ảnh

Tắt Selectable cho:

* Ảnh Front.
* Ảnh Side.

Sau khi tắt:

* Ảnh vẫn hiển thị trong Viewport.
* Không thể chọn ảnh trực tiếp bằng chuột.
* Không thể vô tình di chuyển ảnh trong lúc chỉnh sửa mesh.
* Có thể bật lại Selectable từ Outliner khi cần điều chỉnh.

```text
Outliner
├── Front      [Không thể chọn]
├── Side       [Không thể chọn]
└── Dinosaur   [Có thể chọn]
```

> Đây là cách an toàn hơn so với chỉ khóa Location, bởi vì ảnh hoàn toàn không bị chọn khi thao tác trong Viewport.

---

# 9. Đổi tên ảnh trong Outliner

Để dễ quản lý scene, đổi tên hai Empty:

```text
Front
Side
```

Cách thực hiện:

1. Tìm object ảnh trong Outliner.
2. Nhấp đúp vào tên object.
3. Nhập tên mới.
4. Nhấn `Enter`.

Có thể tổ chức rõ hơn bằng Collection:

```text
Scene Collection
├── References
│   ├── Front
│   └── Side
└── Dinosaur
```

Việc tạo Collection riêng không bắt buộc trong bài này nhưng hữu ích khi scene trở nên phức tạp.

---

# 10. Quy trình hoàn chỉnh

```text
Chuẩn bị ảnh Front và Side
              ↓
Kéo ảnh Front vào Viewport
              ↓
Alt + R và Alt + G
              ↓
Xoay ảnh Front: R → X → 90
              ↓
Căn chân vào mặt sàn và thân vào đường tâm
              ↓
Giảm Opacity xuống 0.20–0.25
              ↓
Đưa 3D Cursor về World Origin
              ↓
Chọn Pivot Point = 3D Cursor
              ↓
Scale ảnh đạt chiều cao khoảng 3 m
              ↓
Di chuyển ảnh Front ra phía sau
              ↓
Chuyển sang Side View bằng Numpad 3
              ↓
Kéo ảnh Side vào
              ↓
Xoay Z 180° nếu ảnh quay sai hướng
              ↓
Giảm Opacity và Scale lên 3 m
              ↓
Di chuyển ảnh Side sang bên cạnh
              ↓
Tắt Selectable cho cả hai ảnh
              ↓
Đổi tên thành Front và Side
              ↓
Lưu file Blender
```

---

# 11. Phím tắt sử dụng trong bài

| Phím tắt        | Chức năng                              |
| --------------- | -------------------------------------- |
| `Numpad 1`      | Chuyển sang Front View                 |
| `Numpad 3`      | Chuyển sang Side View                  |
| `Numpad 5`      | Chuyển đổi Perspective và Orthographic |
| `Alt + R`       | Xóa toàn bộ Rotation                   |
| `Alt + G`       | Xóa toàn bộ Location                   |
| `G`             | Di chuyển object                       |
| `G`, `X`        | Di chuyển theo trục X                  |
| `G`, `Y`        | Di chuyển theo trục Y                  |
| `G`, `Z`        | Di chuyển theo trục Z                  |
| `R`             | Xoay object                            |
| `R`, `X`, `90`  | Xoay 90° quanh trục X                  |
| `R`, `Z`, `180` | Xoay 180° quanh trục Z                 |
| `S`             | Thay đổi kích thước                    |
| `Shift + S`     | Mở menu Snap                           |
| `X`             | Xóa object                             |
| `Enter`         | Xác nhận thao tác                      |

---

# 12. Lưu ý quan trọng

## 12.1. Kéo ảnh khi đang ở đúng góc nhìn

Ảnh được đặt dựa trên hướng Viewport hiện tại.

Vì vậy:

* Chuyển sang Front View trước khi thêm ảnh Front.
* Chuyển sang Side View trước khi thêm ảnh Side.

Nếu kéo ảnh vào khi đang ở một góc Perspective ngẫu nhiên, ảnh có thể xuất hiện với góc xoay khó kiểm soát.

---

## 12.2. Hai ảnh phải có cùng tỉ lệ

Ảnh Front và Side cần biểu diễn cùng một thiết kế khủng long.

Nếu chiều cao giữa hai ảnh không khớp:

* Đầu có thể đúng ở Front View nhưng sai ở Side View.
* Chân có thể bị quá dài hoặc quá ngắn.
* Thân mô hình dễ bị méo khi kiểm tra từ góc còn lại.

Luôn căn hai ảnh theo ít nhất hai mốc:

1. Mặt sàn.
2. Đỉnh đầu.

---

## 12.3. Không Scale từ tâm ảnh

Nếu Scale từ Median Point hoặc tâm object, ảnh sẽ phóng to cả lên trên lẫn xuống dưới, làm chân rời khỏi mặt sàn.

Sử dụng:

```text
Transform Pivot Point = 3D Cursor
```

và đặt 3D Cursor tại World Origin để Scale từ mặt sàn.

---

## 12.4. Không đặt Opacity quá thấp

Opacity quá thấp khiến các đường viền quan trọng khó nhìn thấy.

Mức gợi ý trong bài:

```text
0.20–0.25
```

Có thể tăng nhẹ khi dựng các vùng có nhiều chi tiết như đầu, bàn tay hoặc bàn chân.

---

## 12.5. Khóa ảnh sau khi căn xong

Sau khi hai ảnh đã đúng vị trí và kích thước, nên tắt Selectable ngay.

Nếu không, một cú kéo chuột nhầm có thể:

* Làm ảnh lệch khỏi đường tâm.
* Thay đổi chiều cao tham chiếu.
* Khiến Front View và Side View không còn khớp nhau.

---

# 13. Lỗi thường gặp và cách xử lý

| Lỗi                                    | Nguyên nhân                                  | Cách xử lý                             |
| -------------------------------------- | -------------------------------------------- | -------------------------------------- |
| Ảnh nằm ngang trên mặt sàn             | Ảnh chưa được xoay đúng                      | Dùng `R → X → 90`                      |
| Ảnh nằm lệch khỏi tâm                  | Location ban đầu chưa được đặt lại           | Nhấn `Alt + G`                         |
| Ảnh có góc xoay lạ                     | Kéo ảnh vào từ Perspective View              | Nhấn `Alt + R`, sau đó xoay lại        |
| Chân khủng long rời khỏi sàn khi Scale | Pivot Point đang ở tâm object                | Chuyển Pivot sang 3D Cursor            |
| Không nhìn thấy lưới phía sau          | Opacity quá cao                              | Giảm xuống khoảng `0.20–0.25`          |
| Ảnh Side quay sai hướng                | Hướng ảnh không phù hợp                      | Dùng `R → Z → 180`                     |
| Thường xuyên chọn nhầm ảnh             | Selectable vẫn đang bật                      | Tắt Selectable trong Outliner          |
| Ảnh che khuất khi xoay Perspective     | Ảnh đang cho phép hiển thị trong Perspective | Tắt tùy chọn Perspective               |
| Front và Side không khớp chiều cao     | Hai ảnh được Scale độc lập không theo mốc    | Căn cùng mặt sàn và cùng chiều cao 3 m |

---

# 14. Checklist thực hành

## Ảnh Front

* [ ] Đã kéo ảnh T-Rex Front vào Viewport.
* [ ] Đã dùng `Alt + R` để xóa Rotation.
* [ ] Đã dùng `Alt + G` để đưa ảnh về tâm.
* [ ] Đã xoay ảnh 90° quanh trục X.
* [ ] Đã căn chân khủng long với mặt sàn.
* [ ] Đã căn cơ thể với đường tâm.
* [ ] Đã giảm Opacity xuống khoảng 0.20–0.25.
* [ ] Đã Scale ảnh lên chiều cao khoảng 3 mét.
* [ ] Đã di chuyển ảnh ra phía sau khu vực dựng hình.

## Ảnh Side

* [ ] Đã chuyển sang Side View trước khi kéo ảnh.
* [ ] Đã kéo ảnh T-Rex Side vào Viewport.
* [ ] Đã xoay ảnh 180° quanh trục Z nếu cần.
* [ ] Đã giảm Opacity.
* [ ] Đã căn chân với mặt sàn.
* [ ] Đã Scale ảnh lên cùng chiều cao với ảnh Front.
* [ ] Đã di chuyển ảnh sang bên cạnh vùng dựng hình.

## Quản lý scene

* [ ] Đã đổi tên ảnh thành `Front` và `Side`.
* [ ] Đã bật cột Selectable trong Outliner.
* [ ] Đã tắt Selectable cho hai ảnh tham chiếu.
* [ ] Đã kiểm tra ảnh trong Front View và Side View.
* [ ] Đã lưu file Blender.

---

# 15. Kết quả cuối bài

Sau khi hoàn thành, scene sẽ có:

* Một ảnh T-Rex nhìn từ phía trước.
* Một ảnh T-Rex nhìn từ bên cạnh.
* Hai ảnh có cùng chiều cao khoảng 3 mét.
* Hai ảnh được đặt vuông góc với nhau.
* Độ trong suốt đủ để nhìn thấy lưới và mesh.
* Một khoảng trống ở giữa để dựng mô hình.
* Hai ảnh đã bị vô hiệu hóa khả năng chọn.
* Outliner được đặt tên rõ ràng.

```text
Scene Collection
├── Camera
├── Light
├── Front        ← Empty Image, không thể chọn
└── Side         ← Empty Image, không thể chọn
```

---

# 16. Tóm tắt bài học

Ảnh tham chiếu giúp quá trình dựng hình khủng long chính xác và nhất quán hơn giữa các góc nhìn. Trong Blender, ảnh được đưa vào dưới dạng **Empty Image**, sau đó được căn vị trí, góc xoay, độ trong suốt và kích thước.

Quy trình quan trọng nhất là:

```text
Chèn ảnh
→ Đặt lại Transform
→ Căn với mặt sàn
→ Giảm Opacity
→ Scale bằng 3D Cursor
→ Đặt hai ảnh vuông góc
→ Tắt Selectable
→ Lưu file
```

Khi ảnh Front và Side đã được chuẩn bị chính xác, anh có thể bắt đầu dựng mesh khủng long ở bài học tiếp theo mà không lo ảnh nền bị lệch hoặc bị chọn nhầm.
