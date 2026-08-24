# 006 — Adding Objects

| Thuộc tính       | Nội dung                                         |
| ---------------- | ------------------------------------------------ |
| **Module**       | Module 01 — Introduction & Setup                 |
| **Bài học**      | Adding Objects                                   |
| **Thời lượng**   | 13:58                                            |
| **Chủ đề chính** | Thêm, lựa chọn và biến đổi đối tượng trong scene |

---

## 1. Mục tiêu bài học

Sau khi hoàn thành bài học, người học có thể:

* Sử dụng **Add Menu** để thêm các đối tượng vào scene.
* Thêm các primitive mesh cơ bản như Plane, Cube, UV Sphere, Icosphere, Cylinder, Cone, Torus và Monkey.
* Hiểu vai trò của **3D Cursor** đối với vị trí xuất hiện của object mới.
* Lựa chọn một hoặc nhiều object trong viewport và Outliner.
* Phân biệt **object được chọn** và **Active Object**.
* Di chuyển, xoay và thay đổi kích thước object bằng gizmo hoặc phím tắt.
* Giới hạn phép biến đổi theo trục `X`, `Y`, `Z`.
* Sử dụng các góc nhìn Front, Side và Top để căn chỉnh object chính xác hơn.
* Chỉnh trực tiếp thông số Location, Rotation và Scale trong bảng Item.
* Lưu scene thành file Blender để tiếp tục sử dụng ở bài học sau.

---

## 2. Tổng quan quy trình

```text
Đặt 3D Cursor
      ↓
Thêm object bằng Shift + A
      ↓
Chọn object
      ↓
Di chuyển — G
Xoay       — R
Tỷ lệ      — S
      ↓
Giới hạn theo X / Y / Z
      ↓
Kiểm tra bằng Front / Side / Top View
      ↓
Căn chỉnh trong bảng Item
      ↓
Lưu file Blender
```

---

## 3. Thêm đối tượng vào scene

### 3.1. Add Menu

Để thêm một đối tượng mới, có thể:

* Chọn **Add** trên thanh menu của 3D Viewport.
* Hoặc sử dụng phím tắt:

```text
Shift + A
```

Add Menu chứa nhiều nhóm đối tượng khác nhau:

| Nhóm                    | Công dụng                                |
| ----------------------- | ---------------------------------------- |
| **Mesh**                | Thêm các đối tượng hình học 3D           |
| **Curve**               | Thêm đường cong                          |
| **Surface**             | Thêm bề mặt                              |
| **Metaball**            | Tạo các khối có khả năng hòa vào nhau    |
| **Text**                | Thêm chữ 3D                              |
| **Volume**              | Thêm dữ liệu thể tích                    |
| **Empty**               | Thêm object tham chiếu không có hình học |
| **Light**               | Thêm nguồn sáng                          |
| **Camera**              | Thêm camera                              |
| **Force Field**         | Thêm trường lực cho mô phỏng             |
| **Collection Instance** | Tạo bản thể hiện của một Collection      |

Trong giai đoạn đầu, hai nhóm được sử dụng nhiều nhất là:

* **Mesh**
* **Light**

---

### 3.2. Các Mesh Primitive cơ bản

Trong menu:

```text
Shift + A → Mesh
```

người học có thể thêm các primitive sau:

| Primitive     | Mô tả                                                     |
| ------------- | --------------------------------------------------------- |
| **Plane**     | Mặt phẳng gồm bốn đỉnh                                    |
| **Cube**      | Khối lập phương                                           |
| **Circle**    | Vòng tròn gồm các đỉnh và cạnh                            |
| **UV Sphere** | Khối cầu có cấu trúc kinh tuyến và vĩ tuyến               |
| **Icosphere** | Khối cầu được tạo từ các mặt tam giác                     |
| **Cylinder**  | Khối trụ                                                  |
| **Cone**      | Khối nón                                                  |
| **Torus**     | Khối hình xuyến, giống chiếc vòng                         |
| **Grid**      | Mặt lưới có nhiều đỉnh                                    |
| **Monkey**    | Đầu khỉ Suzanne, object thử nghiệm quen thuộc của Blender |

> `Circle` và `Grid` chưa thực sự cần thiết đối với người mới. Grid có hình dạng tương tự Plane nhưng được chia thành nhiều mặt nhỏ hơn.

---

## 4. Vai trò của 3D Cursor

### 4.1. Object mới xuất hiện ở đâu?

Mọi object mới được thêm vào sẽ xuất hiện tại vị trí của **3D Cursor**.

3D Cursor được biểu diễn bằng biểu tượng hình tròn đỏ trắng trong viewport.

```text
Vị trí 3D Cursor
       ↓
Vị trí object mới
```

Object mới không phải lúc nào cũng xuất hiện tại tọa độ thế giới `(0, 0, 0)`. Nó chỉ xuất hiện tại đó khi 3D Cursor đang nằm ở World Origin.

---

### 4.2. Di chuyển 3D Cursor

Sử dụng:

```text
Shift + Right Click
```

để đặt 3D Cursor tại vị trí đang trỏ chuột.

Khi đặt cursor lên bề mặt một Mesh, cursor có thể bám vào bề mặt đó. Tuy nhiên, cursor không bám theo cùng cách lên Camera hoặc Light vì chúng không phải là bề mặt Mesh thông thường.

---

### 4.3. Đưa 3D Cursor về World Origin

Sử dụng:

```text
Shift + S
```

sau đó chọn:

```text
Cursor to World Origin
```

Có thể sử dụng:

```text
Shift + C
```

để đưa cursor về tâm thế giới đồng thời điều chỉnh lại góc nhìn.

---

### 4.4. Lỗi thường gặp với 3D Cursor

Nếu object mới xuất hiện ở vị trí bất ngờ, hãy kiểm tra vị trí của 3D Cursor trước tiên.

```text
Object xuất hiện sai vị trí
          ↓
Kiểm tra 3D Cursor
          ↓
Shift + S
          ↓
Cursor to World Origin
```

---

## 5. Trạng thái lựa chọn object

### 5.1. Chọn object trong viewport

Nhấn chuột trái vào object để chọn.

Object đang được chọn thường có:

* Đường viền màu cam.
* Thông tin tương ứng xuất hiện trong các bảng thuộc tính.

---

### 5.2. Chọn object trong Outliner

Khi object bị che khuất hoặc nằm bên trong object khác, việc chọn trực tiếp trong viewport có thể khó khăn.

Trong trường hợp này, hãy chọn object từ **Outliner**.

Ví dụ: Plane mới được thêm tại tâm scene có thể nằm bên trong Cube mặc định. Khi đó, chọn Plane trong Outliner sẽ dễ hơn việc click trực tiếp trong viewport.

---

### 5.3. Chọn nhiều object

Có thể kéo chuột tạo vùng chọn để chọn nhiều object cùng lúc.

Ngoài ra, có thể giữ `Shift` và lần lượt click vào các object.

```text
Shift + Left Click
```

Object được chọn cuối cùng sẽ trở thành **Active Object**.

---

### 5.4. Active Object là gì?

Khi nhiều object được chọn:

* Các object được chọn có viền màu cam.
* Active Object thường có đường viền sáng hơn hoặc màu vàng.
* Active Object là object chính của nhóm lựa chọn.
* Một số thao tác và thông số sẽ lấy Active Object làm tham chiếu.

```text
Nhiều object được chọn
        │
        ├── Selected Objects
        │
        └── Active Object
            = object được chọn cuối cùng
```

Khái niệm này sẽ quan trọng hơn trong các bài học về Parenting, Joining, Modifiers và nhiều thao tác khác.

---

### 5.5. Bỏ chọn bằng Box Select

Khi đang sử dụng công cụ Box Select, có thể giữ `Ctrl` và kéo vùng chọn để loại bỏ các object khỏi tập hợp đang chọn.

---

## 6. Thanh công cụ bên trái

Nhấn:

```text
T
```

để ẩn hoặc hiện Toolbar của 3D Viewport.

Các công cụ chính gồm:

| Công cụ        | Chức năng                     |
| -------------- | ----------------------------- |
| **Select Box** | Chọn một hoặc nhiều object    |
| **3D Cursor**  | Đặt lại vị trí 3D Cursor      |
| **Move**       | Di chuyển object              |
| **Rotate**     | Xoay object                   |
| **Scale**      | Thay đổi kích thước           |
| **Transform**  | Kết hợp Move, Rotate và Scale |

Mặc dù gizmo trực quan và dễ hiểu, phím tắt thường giúp thao tác nhanh và chính xác hơn.

---

## 7. Hệ tọa độ trong Blender

Blender sử dụng hệ tọa độ Descartes ba chiều:

| Trục  | Màu sắc    | Hướng tổng quát |
| ----- | ---------- | --------------- |
| **X** | Đỏ         | Trái – phải     |
| **Y** | Xanh lá    | Trước – sau     |
| **Z** | Xanh dương | Dưới – trên     |

```text
             Z
             ↑
             │
             │
             ●────→ X
            /
           /
          Y
```

Màu sắc của các trục được sử dụng nhất quán trên:

* Gizmo di chuyển.
* Gizmo xoay.
* Gizmo scale.
* Biểu tượng tọa độ ở góc viewport.
* Các trường Location, Rotation và Scale.

---

## 8. Di chuyển object

### 8.1. Di chuyển bằng Move Gizmo

Chọn công cụ **Move** để hiển thị các mũi tên:

* Mũi tên đỏ: di chuyển theo trục `X`.
* Mũi tên xanh lá: di chuyển theo trục `Y`.
* Mũi tên xanh dương: di chuyển theo trục `Z`.

Các ô vuông nhỏ trên gizmo cho phép di chuyển trên hai trục và loại trừ trục còn lại.

Ví dụ:

* Mặt phẳng `XY`: di chuyển theo `X` và `Y`, không thay đổi `Z`.
* Mặt phẳng `XZ`: di chuyển theo `X` và `Z`, không thay đổi `Y`.
* Mặt phẳng `YZ`: di chuyển theo `Y` và `Z`, không thay đổi `X`.

---

### 8.2. Di chuyển bằng phím `G`

Phím tắt:

```text
G
```

`G` là viết tắt của **Grab**.

Sau khi nhấn `G`, object di chuyển tương đối theo góc nhìn hiện tại. Để kiểm soát tốt hơn, cần khóa chuyển động theo một trục.

| Lệnh             | Kết quả                           |
| ---------------- | --------------------------------- |
| `G`              | Di chuyển tự do                   |
| `G`, `X`         | Di chuyển theo trục X             |
| `G`, `Y`         | Di chuyển theo trục Y             |
| `G`, `Z`         | Di chuyển theo trục Z             |
| `G`, `Shift + X` | Di chuyển theo Y và Z, loại trừ X |
| `G`, `Shift + Y` | Di chuyển theo X và Z, loại trừ Y |
| `G`, `Shift + Z` | Di chuyển theo X và Y, loại trừ Z |

Ví dụ:

```text
G → Z
```

Object chỉ có thể di chuyển lên hoặc xuống.

Sau khi xác định vị trí:

* Nhấn chuột trái để xác nhận.
* Hoặc nhấn `Enter`.
* Nhấn `Esc` hoặc chuột phải để hủy.

---

### 8.3. Nhập khoảng cách chính xác

Có thể nhập trực tiếp một giá trị số sau khi chọn trục.

Ví dụ:

```text
G → X → 2 → Enter
```

Object sẽ di chuyển `2` Blender Unit theo chiều dương của trục X.

```text
G → Z → -1 → Enter
```

Object sẽ di chuyển xuống `1` Blender Unit theo trục Z.

Theo thiết lập mặc định phổ biến:

```text
1 Blender Unit ≈ 1 mét
```

---

## 9. Xoay object

### 9.1. Xoay bằng Rotate Gizmo

Công cụ Rotate hiển thị các vòng tròn màu tương ứng với ba trục.

* Vòng đỏ: xoay quanh trục X.
* Vòng xanh lá: xoay quanh trục Y.
* Vòng xanh dương: xoay quanh trục Z.
* Kéo ngoài các vòng trục: xoay tự do theo góc nhìn.

---

### 9.2. Xoay bằng phím `R`

Phím tắt:

```text
R
```

| Lệnh     | Kết quả                     |
| -------- | --------------------------- |
| `R`      | Xoay theo góc nhìn hiện tại |
| `R`, `X` | Xoay quanh trục X           |
| `R`, `Y` | Xoay quanh trục Y           |
| `R`, `Z` | Xoay quanh trục Z           |

Ví dụ, để xoay Torus 90 độ quanh trục X:

```text
R → X → 90 → Enter
```

Để xoay theo chiều ngược lại:

```text
R → X → -90 → Enter
```

---

### 9.3. Xoay theo góc nhìn

Nếu đang nhìn chính diện dọc theo một trục, nhấn `R` có thể xoay object trong mặt phẳng màn hình mà không cần nhập thêm tên trục.

Ví dụ, khi đang ở Side View và nhìn dọc theo trục X, nhấn `R` sẽ tạo chuyển động xoay quanh trục X.

Tuy nhiên, đối với người mới, sử dụng rõ ràng:

```text
R → X
R → Y
R → Z
```

sẽ giúp hạn chế nhầm lẫn.

---

## 10. Thay đổi kích thước object

### 10.1. Scale bằng gizmo

Công cụ Scale cho phép:

* Kéo theo trục X, Y hoặc Z.
* Scale trên hai trục bằng các ô vuông.
* Scale đồng đều toàn bộ object bằng vùng điều khiển trung tâm.

---

### 10.2. Scale bằng phím `S`

Phím tắt:

```text
S
```

| Lệnh             | Kết quả           |
| ---------------- | ----------------- |
| `S`              | Scale đồng đều    |
| `S`, `X`         | Scale theo trục X |
| `S`, `Y`         | Scale theo trục Y |
| `S`, `Z`         | Scale theo trục Z |
| `S`, `Shift + X` | Scale theo Y và Z |
| `S`, `Shift + Y` | Scale theo X và Z |
| `S`, `Shift + Z` | Scale theo X và Y |

Ví dụ:

```text
S → 2 → Enter
```

Object lớn gấp đôi theo cả ba trục.

```text
S → Z → 0.5 → Enter
```

Chiều cao theo trục Z giảm còn một nửa.

---

## 11. Công thức phím tắt biến đổi

Ba thao tác quan trọng nhất có cùng một cấu trúc:

```text
Thao tác → Trục → Giá trị → Xác nhận
```

Ví dụ:

```text
G → X → 2 → Enter
R → Z → 45 → Enter
S → Y → 0.5 → Enter
```

Sơ đồ ghi nhớ:

```text
G = Grab  = Di chuyển
R = Rotate = Xoay
S = Scale  = Thay đổi kích thước
```

```text
G / R / S
    ↓
X / Y / Z
    ↓
Nhập giá trị
    ↓
Enter
```

---

## 12. Các góc nhìn hỗ trợ căn chỉnh

Việc đặt object chính xác trong góc nhìn Perspective có thể khó vì hình ảnh có chiều sâu. Các góc nhìn Orthographic giúp căn chỉnh dễ hơn.

| Góc nhìn       | Phím Numpad |
| -------------- | ----------- |
| **Front View** | `Numpad 1`  |
| **Side View**  | `Numpad 3`  |
| **Top View**   | `Numpad 7`  |

### Front View

Hữu ích khi:

* Đặt object lên mặt sàn.
* Kiểm tra chiều cao.
* Căn chỉnh theo trục X và Z.

### Side View

Hữu ích khi:

* Xoay object về tư thế phù hợp.
* Kiểm tra vị trí theo chiều sâu.
* Căn chỉnh theo trục Y và Z.

### Top View

Hữu ích khi:

* Xếp object thành hàng.
* Căn chỉnh theo trục X và Y.
* Kiểm tra khoảng cách giữa các object.

---

## 13. Sử dụng bảng Item

Nhấn:

```text
N
```

để mở hoặc đóng Sidebar trong 3D Viewport.

Trong tab **Item**, có thể chỉnh trực tiếp:

* Location
* Rotation
* Scale
* Dimensions

### 13.1. Căn object vào một trục

Giả sử muốn tất cả object nằm trên một đường thẳng dọc theo trục X.

Khi đó, đặt:

```text
Location Y = 0
```

cho từng object.

Object vẫn có thể nằm ở các vị trí X khác nhau nhưng sẽ có cùng tọa độ Y.

```text
Object A: X = -4, Y = 0
Object B: X = -2, Y = 0
Object C: X =  0, Y = 0
Object D: X =  2, Y = 0
Object E: X =  4, Y = 0
```

Kết quả:

```text
●────●────●────●────●  → Trục X
```

---

### 13.2. Thay đổi cùng một thông số cho nhiều object

Khi nhiều object được chọn, nhập một giá trị thông thường có thể chỉ tác động lên Active Object.

Để áp dụng giá trị cho toàn bộ object đang chọn, có thể giữ `Alt` khi chỉnh trường số tương ứng.

Ví dụ:

1. Chọn nhiều object.
2. Mở bảng Item bằng `N`.
3. Giữ `Alt`.
4. Click vào trường `Location Y`.
5. Nhập `0`.
6. Nhấn `Enter`.

Tất cả object được chọn sẽ có giá trị `Y = 0`.

> Cần cẩn thận không chọn nhầm Camera, Light hoặc Plane nếu không muốn chúng bị di chuyển cùng nhóm.

---

## 14. Adjust Last Operation

Sau khi thêm object, Blender hiển thị bảng **Adjust Last Operation** ở góc dưới bên trái viewport.

Có thể mở lại bảng bằng:

```text
F9
```

Bảng này cho phép điều chỉnh các tham số khởi tạo như:

* Số Vertices.
* Số Segments.
* Radius.
* Depth.
* Location.
* Rotation.
* Một số thuộc tính riêng của từng primitive.

Ví dụ, sau khi thêm Cylinder, có thể đổi:

```text
Vertices: 32 → 8
```

để biến hình trụ tròn thành một khối lăng trụ tám cạnh.

> Phải chỉnh các thông số này ngay sau khi thêm object. Khi thực hiện một thao tác mới, bảng sẽ chuyển sang hiển thị thao tác gần nhất và không còn chỉnh được thông số khởi tạo cũ.

---

## 15. Object Origin

Mỗi object có một **Origin Point**, thường được biểu diễn bằng chấm màu cam.

Origin quyết định:

* Tâm xoay của object.
* Tâm scale.
* Vị trí tham chiếu của object.
* Cách một số modifier và phép biến đổi hoạt động.

Có thể thay đổi Origin tại:

```text
Object → Set Origin
```

Một số lựa chọn thường dùng:

| Lựa chọn                     | Công dụng                            |
| ---------------------------- | ------------------------------------ |
| **Origin to Geometry**       | Đưa Origin vào giữa phần hình học    |
| **Geometry to Origin**       | Di chuyển hình học về vị trí Origin  |
| **Origin to 3D Cursor**      | Đưa Origin tới vị trí 3D Cursor      |
| **Origin to Center of Mass** | Đặt Origin dựa trên trọng tâm object |

Cần phân biệt:

```text
Object Origin ≠ 3D Cursor
```

* **Object Origin** thuộc về từng object.
* **3D Cursor** là một điểm tham chiếu chung trong scene.

---

## 16. Collections và Outliner

### 16.1. Outliner

Outliner hiển thị cấu trúc của scene, bao gồm:

* Collections.
* Mesh objects.
* Camera.
* Lights.
* Các object và dữ liệu khác.

Outliner đặc biệt hữu ích khi:

* Object bị che khuất.
* Scene có nhiều object.
* Cần đổi tên.
* Cần ẩn hoặc hiện object.
* Cần tổ chức object theo nhóm.

---

### 16.2. Collections

Collections giúp nhóm các object có liên quan.

Ví dụ:

```text
Scene Collection
├── Environment
│   ├── Floor
│   └── Rocks
├── Props
│   ├── Cylinder
│   ├── Cone
│   └── Torus
├── Characters
│   └── Suzanne
├── Lights
│   └── Key Light
└── Cameras
    └── Main Camera
```

Nhấn:

```text
M
```

để chuyển object đang chọn vào một Collection.

Collections giúp:

* Ẩn hoặc hiện cả nhóm.
* Chọn các object có cùng chức năng.
* Giữ Outliner dễ đọc.
* Quản lý scene lớn hiệu quả hơn.

---

## 17. Quy trình thực hành

### Bước 1: Chuẩn bị scene

Mở một Startup File mới.

Scene mặc định thường bao gồm:

* Cube.
* Camera.
* Light.

---

### Bước 2: Thêm Plane

1. Đưa 3D Cursor về World Origin.
2. Nhấn:

```text
Shift + A → Mesh → Plane
```

3. Plane xuất hiện tại vị trí 3D Cursor.
4. Chọn Plane từ Outliner nếu nó đang nằm bên trong Cube.

---

### Bước 3: Tạo mặt sàn

Chọn Plane và nhấn:

```text
S
```

sau đó kéo chuột hoặc nhập một giá trị lớn hơn `1`.

Ví dụ:

```text
S → 5 → Enter
```

Plane sẽ trở thành một mặt sàn lớn.

---

### Bước 4: Thêm các primitive

Di chuyển 3D Cursor bằng:

```text
Shift + Right Click
```

Sau đó lần lượt thêm:

1. UV Sphere.
2. Icosphere.
3. Cylinder.
4. Cone.
5. Torus.
6. Monkey.

Có thể thử thêm Circle và Grid để quan sát sự khác biệt, sau đó xóa chúng.

---

### Bước 5: Xóa object

Chọn object và nhấn:

```text
X
```

hoặc:

```text
Delete
```

Nếu muốn xóa nhiều object:

1. Box Select các object.
2. Nhấn `X` hoặc `Delete`.
3. Xác nhận xóa.

---

### Bước 6: Đặt object lên sàn

1. Chuyển sang Front View:

```text
Numpad 1
```

2. Chọn từng object.
3. Nhấn:

```text
G → Z
```

4. Di chuyển object lên hoặc xuống cho đến khi chạm mặt sàn.

Front View giúp quan sát chiều cao của object rõ ràng hơn Perspective View.

---

### Bước 7: Xếp object thành hàng

1. Chuyển sang Top View:

```text
Numpad 7
```

2. Di chuyển từng object theo trục X:

```text
G → X
```

3. Đặt tất cả object có cùng tọa độ Y.
4. Có thể nhập trực tiếp:

```text
Location Y = 0
```

Kết quả mong muốn:

```text
Sphere — Icosphere — Cylinder — Cone — Torus — Suzanne
```

Các object nằm trên sàn và được xếp thành một hàng dọc theo trục X.

---

### Bước 8: Xoay Torus

Chọn Torus và nhập:

```text
R → X → 90 → Enter
```

Quan sát Torus xoay chính xác 90 độ quanh trục X.

---

### Bước 9: Đặt Suzanne ngồi trên sàn

1. Chuyển sang Side View:

```text
Numpad 3
```

2. Chọn Suzanne.
3. Nhấn `R` để xoay.
4. Nhấn `G` để di chuyển.
5. Điều chỉnh cho đến khi đầu khỉ có tư thế đặt ổn định trên mặt sàn.

Có thể sử dụng các lệnh chính xác hơn:

```text
R → X → giá trị góc
G → Z → giá trị khoảng cách
```

---

### Bước 10: Đổi tên object

Chọn object trong Outliner và:

* Double-click vào tên.
* Hoặc nhấn `F2`.

Ví dụ:

```text
Plane      → Floor
Cube       → Main_Cube
UVSphere   → UV_Sphere
Cylinder   → Cylinder_01
Cone       → Cone_01
Torus      → Torus_01
Suzanne    → Monkey_Head
```

---

### Bước 11: Tổ chức bằng Collection

1. Chọn các object Mesh.
2. Nhấn:

```text
M
```

3. Chọn **New Collection**.
4. Đặt tên, ví dụ:

```text
Primitive Objects
```

---

### Bước 12: Lưu file

Trên thanh menu, chọn:

```text
File → Save
```

Hoặc sử dụng:

```text
Ctrl + Shift + S
```

nếu muốn mở hộp thoại Save As.

Đặt tên file:

```text
Adding Objects.blend
```

Sau đó chọn thư mục lưu và xác nhận.

---

## 18. Thử thách thực hành

### Thử thách 1: Thêm primitive

Di chuyển 3D Cursor đến nhiều vị trí khác nhau và thêm:

* Plane.
* UV Sphere.
* Icosphere.
* Cylinder.
* Cone.
* Torus.
* Monkey.

Không cần thêm Circle và Grid nếu chỉ thực hành các primitive chính.

---

### Thử thách 2: Thực hành di chuyển

Chọn UV Sphere và thử:

```text
G
G → X
G → Y
G → Z
G → Shift + Z
```

Quan sát sự khác biệt giữa di chuyển tự do, di chuyển theo một trục và di chuyển trên một mặt phẳng.

---

### Thử thách 3: Xếp hàng object

Đặt tất cả primitive:

* Nằm trên Plane.
* Có cùng tọa độ `Y = 0`.
* Có các tọa độ X khác nhau.
* Không chồng lên nhau.

---

### Thử thách 4: Xoay chính xác

Thực hiện:

```text
R → X → 90
R → Y → 45
R → Z → -30
```

Quan sát hướng xoay của từng trục.

---

## 19. Phím tắt quan trọng

### Thêm và xóa object

| Thao tác                     | Phím tắt          |
| ---------------------------- | ----------------- |
| Mở Add Menu                  | `Shift + A`       |
| Xóa object                   | `X` hoặc `Delete` |
| Hoàn tác                     | `Ctrl + Z`        |
| Đổi tên object               | `F2`              |
| Chuyển object vào Collection | `M`               |

### 3D Cursor

| Thao tác                          | Phím tắt                             |
| --------------------------------- | ------------------------------------ |
| Đặt 3D Cursor                     | `Shift + Right Click`                |
| Mở Snap Menu                      | `Shift + S`                          |
| Cursor về World Origin            | `Shift + S → Cursor to World Origin` |
| Cursor về tâm và căn lại viewport | `Shift + C`                          |

### Biến đổi object

| Thao tác         | Phím tắt    |
| ---------------- | ----------- |
| Di chuyển        | `G`         |
| Xoay             | `R`         |
| Scale            | `S`         |
| Khóa theo trục X | `X`         |
| Khóa theo trục Y | `Y`         |
| Khóa theo trục Z | `Z`         |
| Loại trừ trục X  | `Shift + X` |
| Loại trừ trục Y  | `Shift + Y` |
| Loại trừ trục Z  | `Shift + Z` |

### Giao diện và góc nhìn

| Thao tác              | Phím tắt   |
| --------------------- | ---------- |
| Ẩn/hiện Toolbar       | `T`        |
| Ẩn/hiện Sidebar       | `N`        |
| Front View            | `Numpad 1` |
| Side View             | `Numpad 3` |
| Top View              | `Numpad 7` |
| Adjust Last Operation | `F9`       |

### Lưu file

| Thao tác | Phím tắt           |
| -------- | ------------------ |
| Lưu file | `Ctrl + S`         |
| Save As  | `Ctrl + Shift + S` |

---

## 20. Lỗi thường gặp

### Object mới xuất hiện sai vị trí

**Nguyên nhân:** 3D Cursor đang nằm ở vị trí khác.

**Cách xử lý:**

```text
Shift + S → Cursor to World Origin
```

---

### Không chọn được Plane

**Nguyên nhân:** Plane đang nằm bên trong Cube hoặc bị object khác che khuất.

**Cách xử lý:** Chọn Plane trong Outliner.

---

### Object di chuyển khó kiểm soát

**Nguyên nhân:** Chỉ nhấn `G` nên object di chuyển theo mặt phẳng của góc nhìn.

**Cách xử lý:** Khóa theo một trục.

```text
G → X
G → Y
G → Z
```

---

### Object không nằm chính xác trên sàn

**Nguyên nhân:** Căn chỉnh trong Perspective View nên khó đánh giá chiều cao.

**Cách xử lý:**

1. Chuyển sang Front hoặc Side View.
2. Di chuyển object theo trục Z.
3. Phóng to để kiểm tra điểm tiếp xúc.

---

### Các object không thẳng hàng

**Nguyên nhân:** Tọa độ Y của chúng khác nhau.

**Cách xử lý:** Đặt cùng một giá trị:

```text
Location Y = 0
```

---

### Chỉnh Location nhưng chỉ một object thay đổi

**Nguyên nhân:** Trường số chỉ áp dụng cho Active Object.

**Cách xử lý:** Giữ `Alt` khi nhập giá trị để áp dụng cho toàn bộ object được chọn.

---

### Mất bảng Adjust Last Operation

**Nguyên nhân:** Đã thực hiện một thao tác khác sau khi thêm object.

**Cách xử lý:**

* Hoàn tác và thêm lại object.
* Chỉnh thông số ngay sau khi tạo.
* Dùng `F9` trước khi thực hiện thao tác tiếp theo.

---

### Xóa nhầm object

**Cách xử lý:**

```text
Ctrl + Z
```

Sau đó kiểm tra kỹ các object đang được chọn, đặc biệt là Active Object.

---

### Transform Gizmo quá rối

Công cụ Transform kết hợp Move, Rotate và Scale trong cùng một gizmo nên có nhiều thành phần chồng lên nhau.

Đối với người mới, nên sử dụng:

```text
G — Di chuyển
R — Xoay
S — Scale
```

---

## 21. Checklist thực hành

### Thêm đối tượng

* [ ] Đã mở được Add Menu bằng `Shift + A`.
* [ ] Đã thêm Plane.
* [ ] Đã thêm UV Sphere.
* [ ] Đã thêm Icosphere.
* [ ] Đã thêm Cylinder.
* [ ] Đã thêm Cone.
* [ ] Đã thêm Torus.
* [ ] Đã thêm Monkey/Suzanne.

### 3D Cursor

* [ ] Đã di chuyển 3D Cursor bằng `Shift + Right Click`.
* [ ] Đã đưa 3D Cursor về World Origin.
* [ ] Đã quan sát object mới xuất hiện tại vị trí cursor.

### Lựa chọn object

* [ ] Đã chọn object trong viewport.
* [ ] Đã chọn object trong Outliner.
* [ ] Đã box select nhiều object.
* [ ] Đã nhận biết Active Object.

### Transform

* [ ] Đã di chuyển object bằng `G`.
* [ ] Đã xoay object bằng `R`.
* [ ] Đã scale object bằng `S`.
* [ ] Đã giới hạn transform theo trục X, Y và Z.
* [ ] Đã nhập giá trị số chính xác.

### Căn chỉnh và tổ chức

* [ ] Đã tạo Plane làm mặt sàn.
* [ ] Đã đặt các object lên mặt sàn.
* [ ] Đã xếp object thành hàng theo trục X.
* [ ] Đã đặt cùng tọa độ Y cho nhiều object.
* [ ] Đã đổi tên object.
* [ ] Đã tạo và sử dụng Collection.

### Lưu bài

* [ ] Đã lưu scene thành file `.blend`.
* [ ] Đã đặt tên file rõ ràng.
* [ ] Đã kiểm tra đúng thư mục lưu.

---

## 22. Ghi nhớ nhanh

```text
Shift + A = Thêm object
Shift + Right Click = Đặt 3D Cursor

G = Di chuyển
R = Xoay
S = Scale

X = Trục X
Y = Trục Y
Z = Trục Z

Numpad 1 = Front
Numpad 3 = Side
Numpad 7 = Top

T = Toolbar
N = Sidebar
F9 = Adjust Last Operation
```

---

## 23. Tóm tắt bài học

Trong bài học này, người học đã làm quen với quy trình cơ bản để xây dựng một scene trong Blender:

1. Đặt vị trí 3D Cursor.
2. Thêm object bằng `Shift + A`.
3. Chọn object trong viewport hoặc Outliner.
4. Di chuyển bằng `G`.
5. Xoay bằng `R`.
6. Thay đổi kích thước bằng `S`.
7. Khóa phép biến đổi theo trục `X`, `Y` hoặc `Z`.
8. Sử dụng Front, Side và Top View để căn chỉnh.
9. Chỉnh tọa độ chính xác trong bảng Item.
10. Đổi tên, tổ chức object bằng Collections và lưu file.

Ba phím quan trọng nhất cần ghi nhớ là:

```text
G — Grab
R — Rotate
S — Scale
```

Kết hợp ba phím này với các trục `X`, `Y`, `Z`, người học có thể kiểm soát phần lớn các thao tác biến đổi object cơ bản trong Blender.

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
