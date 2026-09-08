# 062 — Completing the Plane Model

## Hoàn thiện mô hình máy bay

| Thuộc tính           | Nội dung                                                                 |
| -------------------- | ------------------------------------------------------------------------ |
| **Module**           | Module 04 — UV Mapping                                                   |
| **Bài học**          | Completing the Plane Model                                               |
| **Thời lượng**       | 9:32                                                                     |
| **Chủ đề chính**     | Tạo phần mũi máy bay, cánh quạt và buồng lái                             |
| **Kỹ thuật nổi bật** | 3D Cursor, Solidify, Proportional Editing, Linked Duplicate, Auto Mirror |

---

## 1. Mục tiêu bài học

Sau bài học này, người học có thể:

* Hoàn thiện phần mũi phía trước của máy bay bằng một đối tượng Cylinder.
* Tạo một cánh quạt low-poly từ Plane.
* Dùng **Solidify Modifier** để thêm độ dày cho một mặt phẳng.
* Dùng **Bevel** và **Proportional Editing** để làm mềm và xoắn cánh quạt.
* Nhân bản cánh quạt theo vòng tròn bằng **Linked Duplicate**.
* Dùng **3D Cursor** làm tâm xoay chính xác.
* Tạo buồng lái bằng Cube kết hợp với **Auto Mirror**.
* Hoàn thiện hình dáng cơ bản của mô hình máy bay trước khi chuyển sang các bước tiếp theo.

---

## 2. Tổng quan quy trình

```text
Chọn đỉnh trước thân máy bay
            ↓
Đưa 3D Cursor đến đỉnh đã chọn
            ↓
Thêm Cylinder làm phần mũi
            ↓
Thêm Plane và dựng một cánh quạt
            ↓
Solidify → Bevel → tạo độ xoắn
            ↓
Linked Duplicate và xoay 120°
            ↓
Tạo tổng cộng 3 cánh quạt
            ↓
Thêm Cube làm buồng lái
            ↓
Auto Mirror và chỉnh hình
            ↓
Hoàn thiện mô hình máy bay
```

---

# 3. Tạo phần mũi máy bay

## 3.1. Đưa 3D Cursor đến đầu máy bay

Đầu tiên, cần đặt chính xác **3D Cursor** tại phần đầu của thân máy bay.

### Các bước thực hiện

1. Chọn thân máy bay.
2. Nhấn `Tab` để vào **Edit Mode**.
3. Nhấn `1` để chuyển sang **Vertex Select**.
4. Chọn vertex nằm ở đầu máy bay.
5. Nhấn:

```text
Shift + S
```

6. Chọn:

```text
Cursor to Selected
```

3D Cursor lúc này sẽ nằm chính xác tại vertex phía trước thân máy bay.

> Việc đặt 3D Cursor đúng vị trí giúp đối tượng mới được tạo ngay tại đầu máy bay và cung cấp tâm xoay chính xác cho cánh quạt sau này.

---

## 3.2. Thêm Cylinder

Quay lại **Object Mode**, sau đó thêm một Cylinder:

```text
Shift + A → Mesh → Cylinder
```

Giảng viên lựa chọn Cylinder thay vì Cone vì Cylinder thường có topology ổn định và dễ kiểm soát hơn.

Trong bảng **Add Cylinder**, đặt:

```text
Vertices: 8
```

Cylinder 8 cạnh tạo hình dáng low-poly phù hợp với phong cách của mô hình.

---

## 3.3. Định hướng Cylinder

Cylinder mặc định nằm dọc theo trục `Z`, vì vậy cần xoay nó để hướng về phía trước máy bay:

```text
R → X → 90
```

Sau đó:

* Scale Cylinder nhỏ lại.
* Chuyển sang **Top View** để căn chỉnh.
* Di chuyển Cylinder theo trục `Y`:

```text
G → Y
```

Đặt Cylinder hơi chồng vào phần thân máy bay để tránh xuất hiện khe hở giữa hai đối tượng.

---

## 3.4. Điều chỉnh tỷ lệ phần mũi

Kiểm tra mô hình từ nhiều góc nhìn:

* Top View
* Side View
* Perspective View

Nếu đầu thân máy bay và Cylinder chưa khớp:

* Scale phần đầu của thân máy bay.
* Scale Cylinder.
* Di chuyển Cylinder theo trục `Z` nếu cần:

```text
G → Z
```

Mục tiêu là tạo sự chuyển tiếp tự nhiên giữa thân máy bay và phần mũi.

---

## 3.5. Tạo đường cong cho phần mũi

Chọn Cylinder và vào **Edit Mode**.

Bật **X-Ray Mode** để có thể chọn đồng thời các vertex ở phía trước và phía sau đối tượng.

Chọn vòng cạnh phía trước và:

* Scale nhỏ lại.
* Di chuyển về phía trước theo trục `Y`.

```text
S
G → Y
```

Tiếp theo, thêm hai vòng cắt:

```text
Ctrl + R
```

Dùng con lăn chuột để tăng số lượng loop cut lên `2`.

Scale các loop mới nhưng không làm thay đổi kích thước theo trục `Y`:

```text
S → Shift + Y
```

Kết quả là phần mũi máy bay có độ cong nhẹ thay vì chỉ là một Cylinder thẳng.

---

## 4. Tạo một cánh quạt từ Plane

## 4.1. Thêm Plane

Chuyển sang **Front View**, sau đó bật X-Ray để nhìn thấy ảnh tham chiếu.

Thêm một Plane:

```text
Shift + A → Mesh → Plane
```

Xoay Plane đứng thẳng:

```text
R → X → 90
```

Sau đó:

* Scale Plane nhỏ lại.
* Đưa Plane đến vị trí một cánh quạt trong ảnh tham chiếu.

---

## 4.2. Dựng hình cánh quạt

Vào **Edit Mode**.

Bắt đầu từ Plane đơn giản và dùng Extrude để tạo hình cánh quạt.

Quy trình cơ bản:

1. Di chuyển cạnh dưới xuống:

```text
G → Z
```

2. Chọn hai vertex hoặc cạnh phía trên.
3. Extrude lên trên:

```text
E
```

4. Scale rộng ra:

```text
S
```

5. Extrude thêm một đoạn.
6. Scale thu nhỏ lại.
7. Extrude đến phần đầu cánh quạt.
8. Scale phần đầu thật nhỏ.

Sơ đồ hình dáng:

```text
        Đầu cánh hẹp
             ▲
            / \
           /   \
          /     \
         /       \
        /         \
       /           \
      └─────────────┘
       Gốc cánh hẹp
```

Cánh quạt được dựng bằng rất ít vertex để giữ phong cách low-poly.

---

# 5. Thêm độ dày bằng Solidify Modifier

Plane ban đầu chỉ là một bề mặt phẳng và không có độ dày.

Để thêm độ dày:

1. Chuyển sang **Modifier Properties**.
2. Nhấn **Add Modifier**.
3. Chọn:

```text
Generate → Solidify
```

---

## 5.1. Tham số Thickness

Tham số quan trọng nhất là:

```text
Thickness
```

Thickness xác định độ dày của cánh quạt.

Ví dụ trong bài:

```text
Thickness ≈ 0.02 m
```

Giá trị chính xác có thể thay đổi tùy theo kích thước mô hình.

---

## 5.2. Tham số Offset

**Offset** xác định hướng mà độ dày được tạo ra.

| Offset | Kết quả                             |
| -----: | ----------------------------------- |
|    `1` | Độ dày phát triển về một phía       |
|   `-1` | Độ dày phát triển về phía ngược lại |
|    `0` | Độ dày được chia đều sang hai phía  |

Trong trường hợp cánh quạt, giá trị `0` thường giúp Plane dày đều về cả hai phía.

---

## 5.3. Vấn đề Scale chưa được Apply

Nếu Scale của đối tượng nhỏ hơn hoặc lớn hơn `1`, giá trị Thickness có thể gây nhầm lẫn.

Ví dụ:

* Solidify hiển thị Thickness là `0.35 m`.
* Nhưng cánh quạt thực tế không dày 35 cm.
* Nguyên nhân là đối tượng đang có Scale rất nhỏ.

Kiểm tra trong bảng Item bằng phím:

```text
N
```

Nếu Scale chưa phải:

```text
1, 1, 1
```

hãy Apply Scale:

```text
Ctrl + A → Scale
```

Sau khi Apply Scale:

* Giá trị kích thước trở nên dễ hiểu hơn.
* Solidify hoạt động theo đúng đơn vị thực của mô hình.
* Các modifier khác cũng cho kết quả ổn định hơn.

> Nên Apply Scale trước khi thiết lập chính xác Thickness, Bevel hoặc các modifier phụ thuộc vào kích thước.

---

# 6. Làm tròn và tạo độ xoắn cho cánh quạt

## 6.1. Bevel các cạnh

Ưu điểm của Solidify Modifier là mô hình vẫn có thể được chỉnh sửa dưới dạng Plane đơn giản.

Vào **Edit Mode**, chuyển sang **Edge Select** và chọn hai cạnh ở hai bên cánh quạt.

Nhấn:

```text
Ctrl + B
```

Kéo chuột để Bevel các cạnh.

Có thể dùng con lăn chuột để tăng số segment nếu muốn đường cong mềm hơn.

Kết quả:

* Cạnh cánh quạt tròn hơn.
* Hình dáng bớt thô.
* Solidify vẫn tự động duy trì độ dày.

---

## 6.2. Tạo độ xoắn bằng Proportional Editing

Cánh quạt thật thường không hoàn toàn phẳng mà có một góc xoắn nhẹ.

Chọn các cạnh hoặc vertex ở phần trên của cánh quạt.

Bật **Proportional Editing**:

```text
O
```

Sau đó xoay quanh trục `Z`:

```text
R → Z
```

Dùng con lăn chuột để điều chỉnh phạm vi ảnh hưởng của Proportional Editing.

Chỉ cần xoay nhẹ để tạo cảm giác khí động học.

```text
Cánh phẳng             Cánh có độ xoắn

──────────             ╱────────
──────────      →       ╲───────
```

Không nên xoắn quá mạnh vì sẽ làm cánh quạt biến dạng bất thường.

---

# 7. Căn vị trí cánh quạt

Quay lại **Object Mode** và di chuyển cánh quạt về phía trước:

```text
G → Y
```

Kiểm tra bằng **Side View** để bảo đảm:

* Cánh quạt không nằm chìm vào mũi máy bay.
* Cánh quạt nằm đủ gần phần trục giữa.
* Không có khoảng cách quá lớn giữa cánh quạt và đầu máy bay.

---

# 8. Nhân bản thành ba cánh quạt

## 8.1. Dùng 3D Cursor làm tâm xoay

Trước đó, 3D Cursor đã được đặt tại tâm phần mũi máy bay.

Chuyển **Transform Pivot Point** sang:

```text
3D Cursor
```

Khi đó, mọi thao tác Rotate sẽ xoay đối tượng quanh tâm mũi máy bay.

---

## 8.2. Tạo Linked Duplicate

Thay vì dùng Duplicate thông thường, bài học sử dụng **Linked Duplicate**:

```text
Alt + D
```

Linked Duplicate tạo đối tượng mới nhưng vẫn dùng chung mesh data với đối tượng gốc.

Điều này có nghĩa là:

* Chỉnh sửa hình học của một cánh.
* Hai cánh còn lại cũng được cập nhật.
* Vị trí, góc xoay và Scale trong Object Mode vẫn có thể khác nhau.

---

## 8.3. Xoay 120 độ

Vì có ba cánh quạt phân bố đều quanh một vòng tròn:

```text
360° ÷ 3 = 120°
```

Sau khi nhấn `Alt + D`, xoay bản sao:

```text
R → 120
```

Nhấn `Enter` để xác nhận.

Tiếp tục lặp lại thao tác cuối bằng:

```text
Shift + R
```

Kết quả là ba cánh quạt nằm cách đều nhau.

```text
             Cánh 1
               │
               │
               ●
             ╱   ╲
        Cánh 3     Cánh 2

Góc giữa các cánh: 120°
```

---

## 8.4. Khôi phục các thiết lập thao tác

Sau khi nhân bản xong:

* Tắt **Proportional Editing** nếu vẫn đang bật:

```text
O
```

* Đổi Transform Pivot Point từ **3D Cursor** về:

```text
Median Point
```

Điều này tránh gây nhầm lẫn khi Scale hoặc Rotate các đối tượng sau đó.

---

# 9. Tạo buồng lái

## 9.1. Thêm Cube

Buồng lái là một object riêng biệt và hơi chồng vào thân máy bay.

Đưa 3D Cursor đến vị trí phù hợp phía trên thân máy bay, sau đó thêm Cube:

```text
Shift + A → Mesh → Cube
```

Scale Cube nhỏ lại để khớp với hình dạng buồng lái trong ảnh tham chiếu.

---

## 9.2. Bật X-Ray Mode

Chuyển sang **Side View** và bật X-Ray để nhìn thấy cả:

* Cube.
* Thân máy bay.
* Hình tham chiếu phía sau.

Điều này giúp việc căn chỉnh vertex chính xác hơn.

---

# 10. Dùng Auto Mirror cho buồng lái

Buồng lái là một đối tượng đối xứng qua trục `X`, vì vậy có thể dùng Auto Mirror.

Mở bảng Edit bằng phím:

```text
N
```

Chọn:

```text
Auto Mirror
```

với trục:

```text
X Axis
```

Auto Mirror sẽ:

* Xóa một nửa mesh.
* Thêm Mirror Modifier.
* Cho phép chỉnh một phía và tự động phản chiếu sang phía còn lại.
* Bật **Clipping** để các vertex ở giữa không đi xuyên qua trục đối xứng.

> Mirror Modifier hoạt động quanh Object Origin. Vì vậy Object Origin cần nằm ở chính giữa buồng lái.

Sau khi bật Auto Mirror, nhấn `N` để đóng bảng bên phải.

---

# 11. Chỉnh hình buồng lái

Vào **Edit Mode** và chỉnh các vertex theo ảnh tham chiếu.

Các thao tác chính:

* Di chuyển vertex:

```text
G
```

* Extrude thêm phần hình học:

```text
E
```

* Di chuyển theo trục `Z`:

```text
G → Z
```

Buồng lái được tạo thành một khối đơn giản có:

* Phần trước thấp.
* Phần giữa hoặc sau cao hơn.
* Đáy hơi chìm vào thân máy bay.

Không cần phần đáy khớp hoàn toàn vì buồng lái và thân máy bay là hai object chồng lên nhau.

---

## 11.1. Bảo đảm buồng lái chồng vào thân

Nếu phía dưới buồng lái chưa chồng hoàn toàn vào thân máy bay, chọn các vertex phía dưới và di chuyển xuống:

```text
G → Z
```

Việc cho hai object chồng nhẹ lên nhau giúp:

* Không xuất hiện khe hở khi render.
* Không cần tạo topology phức tạp để nối hai mesh.
* Dễ chỉnh sửa độc lập sau này.

---

## 11.2. Edge Slide

Để tinh chỉnh hình dáng mà vẫn giữ vertex nằm trên các cạnh hiện tại, dùng:

```text
G → G
```

Đây là thao tác **Edge Slide**.

Ứng dụng trong bài:

* Trượt vertex phía trên về trước hoặc sau.
* Điều chỉnh độ dốc của kính buồng lái.
* Trượt các cạnh xuống thấp hơn.
* Giảm phần giao nhau bất thường với thân máy bay.

Edge Slide thường an toàn hơn Move thông thường vì nó giữ vertex trên topology hiện có.

---

# 12. Kiểm tra kết quả

Sau khi hoàn thành:

1. Thoát khỏi Edit Mode.
2. Tắt X-Ray.
3. Kiểm tra mô hình từ nhiều góc nhìn.
4. Quan sát phần mũi, cánh quạt và buồng lái.
5. Kiểm tra xem các object có bị:

   * Lệch tâm.
   * Chồng quá nhiều.
   * Có khe hở.
   * Xoắn quá mạnh.
   * Không đối xứng.

Mô hình cuối cùng bao gồm:

```text
Máy bay hoàn chỉnh
├── Thân máy bay
├── Cánh chính
├── Phần mũi bằng Cylinder
├── Ba cánh quạt
│   ├── Solidify Modifier
│   ├── Bevel
│   └── Độ xoắn nhẹ
└── Buồng lái đối xứng bằng Mirror
```

---

# 13. Phím tắt và công cụ quan trọng

| Phím tắt / Công cụ   | Chức năng                            |
| -------------------- | ------------------------------------ |
| `Tab`                | Chuyển giữa Object Mode và Edit Mode |
| `1`                  | Vertex Select trong Edit Mode        |
| `Shift + S`          | Mở Snap Menu                         |
| `Cursor to Selected` | Đặt 3D Cursor vào phần tử đang chọn  |
| `Shift + A`          | Thêm object mới                      |
| `R → X → 90`         | Xoay 90° quanh trục X                |
| `G → Y`              | Di chuyển theo trục Y                |
| `G → Z`              | Di chuyển theo trục Z                |
| `Ctrl + R`           | Thêm Loop Cut                        |
| `S → Shift + Y`      | Scale nhưng loại trừ trục Y          |
| `E`                  | Extrude                              |
| `Ctrl + A → Scale`   | Apply Scale                          |
| `Ctrl + B`           | Bevel                                |
| `O`                  | Bật/tắt Proportional Editing         |
| `R → Z`              | Xoay quanh trục Z                    |
| `Alt + D`            | Tạo Linked Duplicate                 |
| `Shift + R`          | Lặp lại thao tác cuối                |
| `N`                  | Mở/đóng Sidebar                      |
| `G → G`              | Edge Slide                           |
| **Solidify**         | Thêm độ dày cho mặt phẳng            |
| **Auto Mirror**      | Tạo đối xứng tự động                 |

---

# 14. Phân biệt Duplicate và Linked Duplicate

| Tiêu chí            | `Shift + D`              | `Alt + D`                     |
| ------------------- | ------------------------ | ----------------------------- |
| Loại bản sao        | Duplicate độc lập        | Linked Duplicate              |
| Mesh data           | Riêng biệt               | Dùng chung                    |
| Sửa trong Edit Mode | Chỉ ảnh hưởng một object | Ảnh hưởng tất cả bản liên kết |
| Vị trí Object Mode  | Độc lập                  | Độc lập                       |
| Phù hợp với         | Đối tượng khác nhau      | Các đối tượng giống hệt nhau  |

Trong trường hợp ba cánh quạt, `Alt + D` là lựa chọn phù hợp vì cả ba cánh cần có cùng hình dáng.

---

# 15. Những kiến thức quan trọng

## 15.1. Cylinder thường hữu ích hơn Cone

Giảng viên cho biết hiếm khi dùng Cone vì Cylinder thường:

* Có topology dễ kiểm soát hơn.
* Cho phép scale một đầu để tạo hình tương tự Cone.
* Dễ thêm loop cut.
* Dễ tạo đường cong và chuyển tiếp hình dáng.

---

## 15.2. Modifier giữ quy trình không phá hủy

Solidify Modifier cho phép:

* Dựng cánh quạt từ một Plane đơn giản.
* Thay đổi hình dáng trong Edit Mode.
* Giữ độ dày tự động.
* Điều chỉnh Thickness bất kỳ lúc nào.

Đây là ví dụ của quy trình **non-destructive modeling**.

---

## 15.3. Apply Scale trước các thao tác phụ thuộc kích thước

Scale chưa được Apply có thể ảnh hưởng đến:

* Solidify Thickness.
* Bevel Width.
* Các phép đo kích thước.
* Một số modifier khác.

Do đó, nên kiểm tra và Apply Scale khi cần:

```text
Ctrl + A → Scale
```

---

## 15.4. 3D Cursor có thể dùng làm tâm xoay

3D Cursor không chỉ dùng để xác định vị trí thêm object mà còn có thể làm:

* Tâm xoay.
* Tâm scale.
* Điểm tham chiếu khi dựng hình.
* Vị trí đặt chính xác các object mới.

Trong bài, 3D Cursor giúp ba cánh quạt xoay đều quanh tâm phần mũi máy bay.

---

# 16. Lỗi thường gặp

## 16.1. Cylinder có quá nhiều cạnh

### Hiện tượng

Phần mũi có nhiều polygon hơn cần thiết và không còn phong cách low-poly.

### Cách khắc phục

Ngay khi thêm Cylinder, đặt:

```text
Vertices = 8
```

---

## 16.2. Solidify Thickness không đúng mong đợi

### Nguyên nhân

Scale của Plane chưa được Apply.

### Cách khắc phục

```text
Ctrl + A → Scale
```

Sau đó thiết lập lại Thickness.

---

## 16.3. Cánh quạt nằm chìm vào mũi máy bay

### Cách khắc phục

Kiểm tra ở Side View và di chuyển theo trục `Y`:

```text
G → Y
```

---

## 16.4. Các cánh quạt không cách đều nhau

### Nguyên nhân

* Tâm xoay không phải 3D Cursor.
* 3D Cursor không nằm ở tâm mũi máy bay.
* Góc xoay không chính xác.

### Cách khắc phục

* Đặt 3D Cursor tại tâm.
* Chọn Pivot Point là 3D Cursor.
* Xoay mỗi bản sao đúng `120°`.

---

## 16.5. Scale một cánh nhưng các cánh khác cũng thay đổi

Nếu dùng `Alt + D`, việc thay đổi mesh trong Edit Mode sẽ ảnh hưởng đến tất cả các bản sao liên kết.

Đây là hành vi đúng của Linked Duplicate.

Nếu cần cánh quạt độc lập, có thể tách liên kết bằng:

```text
Object → Relations → Make Single User
```

---

## 16.6. Object xoay hoặc Scale quanh vị trí lạ

### Nguyên nhân

Pivot Point vẫn đang đặt là **3D Cursor**.

### Cách khắc phục

Đổi lại thành:

```text
Median Point
```

---

## 16.7. Buồng lái không đối xứng

### Nguyên nhân

* Không dùng Mirror.
* Object Origin lệch khỏi tâm.
* Các vertex giữa không nằm đúng trên trục đối xứng.

### Cách khắc phục

* Kiểm tra Object Origin.
* Bật Clipping.
* Đưa vertex giữa về trục `X = 0`.

---

# 17. Quy trình thực hành đề xuất

## Phần A — Mũi máy bay

1. Chọn vertex đầu thân máy bay.
2. Đặt 3D Cursor bằng `Shift + S`.
3. Thêm Cylinder 8 cạnh.
4. Xoay Cylinder 90° quanh trục X.
5. Scale và căn chỉnh.
6. Thêm loop cut.
7. Scale các vòng cạnh để tạo độ cong.

## Phần B — Cánh quạt

1. Thêm Plane.
2. Xoay Plane 90° quanh trục X.
3. Extrude thành hình cánh quạt.
4. Apply Scale.
5. Thêm Solidify Modifier.
6. Bevel các cạnh.
7. Dùng Proportional Editing tạo độ xoắn.
8. Căn cánh quạt trước phần mũi.

## Phần C — Nhân bản cánh quạt

1. Đặt Pivot Point là 3D Cursor.
2. Nhấn `Alt + D`.
3. Xoay `120°`.
4. Nhấn `Shift + R`.
5. Khôi phục Pivot Point về Median Point.

## Phần D — Buồng lái

1. Thêm Cube.
2. Scale Cube theo ảnh tham chiếu.
3. Bật Auto Mirror trục X.
4. Chỉnh vertex ở Side View.
5. Dùng Extrude khi cần.
6. Dùng Edge Slide để tinh chỉnh.
7. Cho phần đáy chồng nhẹ vào thân máy bay.

---

# 18. Checklist thực hành

## Phần mũi

* [ ] Đã đặt 3D Cursor tại đầu máy bay.
* [ ] Đã dùng Cylinder 8 cạnh.
* [ ] Đã xoay Cylinder đúng hướng.
* [ ] Đã tạo đường cong bằng loop cut.
* [ ] Phần mũi không có khe hở với thân.

## Cánh quạt

* [ ] Đã dựng cánh quạt từ Plane.
* [ ] Đã Apply Scale.
* [ ] Đã thêm Solidify Modifier.
* [ ] Đã thiết lập Thickness hợp lý.
* [ ] Đã Bevel các cạnh.
* [ ] Đã tạo độ xoắn nhẹ.
* [ ] Cánh quạt không chìm vào phần mũi.

## Nhân bản

* [ ] Đã dùng 3D Cursor làm tâm xoay.
* [ ] Đã dùng Linked Duplicate.
* [ ] Ba cánh cách nhau đúng 120°.
* [ ] Đã tắt Proportional Editing.
* [ ] Đã đổi Pivot Point về Median Point.

## Buồng lái

* [ ] Đã tạo buồng lái bằng Cube.
* [ ] Đã dùng Auto Mirror trục X.
* [ ] Hình dáng khớp với ảnh tham chiếu.
* [ ] Đáy buồng lái chồng nhẹ vào thân.
* [ ] Không có khe hở rõ ràng.
* [ ] Buồng lái đối xứng ở hai bên.

---

# 19. Bài tập thực hành

## Bài tập cơ bản

Dựng lại phần cánh quạt với các yêu cầu:

* Chỉ dùng một Plane.
* Có Solidify Modifier.
* Có Bevel nhẹ.
* Có độ xoắn bằng Proportional Editing.
* Tạo ba cánh bằng Linked Duplicate.

## Bài tập mở rộng

Thử tạo các biến thể:

1. Cánh quạt hai cánh với góc cách nhau `180°`.
2. Cánh quạt bốn cánh với góc cách nhau `90°`.
3. Buồng lái dài hơn hoặc tròn hơn.
4. Phần mũi máy bay nhọn hơn.
5. Cánh quạt có đầu cánh rộng hơn.
6. Thêm một trục nhỏ nằm giữa cánh quạt và phần mũi.

Công thức góc xoay:

```text
Góc giữa các cánh = 360° ÷ số lượng cánh
```

| Số cánh | Góc xoay |
| ------: | -------: |
|       2 |     180° |
|       3 |     120° |
|       4 |      90° |
|       5 |      72° |
|       6 |      60° |

---

# 20. Tóm tắt

Trong bài học này, mô hình máy bay được hoàn thiện bằng ba bộ phận chính:

* Phần mũi được tạo từ một Cylinder 8 cạnh.
* Cánh quạt được dựng từ Plane, thêm độ dày bằng Solidify và tạo độ xoắn bằng Proportional Editing.
* Buồng lái được tạo từ Cube và chỉnh đối xứng bằng Auto Mirror.

Các kỹ thuật quan trọng nhất là:

```text
3D Cursor
+ Solidify Modifier
+ Apply Scale
+ Proportional Editing
+ Linked Duplicate
+ Auto Mirror
+ Edge Slide
```

Bài học minh họa rõ cách sử dụng các object đơn giản và modifier không phá hủy để tạo ra những chi tiết phức tạp hơn mà vẫn giữ topology gọn nhẹ, phù hợp với mô hình low-poly.

Cuối cùng, cần lưu file Blender để chuẩn bị tiếp tục dự án trong bài học sau.

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
