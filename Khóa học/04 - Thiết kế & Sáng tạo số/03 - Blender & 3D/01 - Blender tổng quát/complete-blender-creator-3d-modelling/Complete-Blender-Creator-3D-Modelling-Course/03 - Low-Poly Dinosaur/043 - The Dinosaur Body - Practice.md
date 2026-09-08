# 043 — The Dinosaur Body

| Thuộc tính             | Nội dung                                                          |
| ---------------------- | ----------------------------------------------------------------- |
| **Module**             | Module 03 — Low-Poly Dinosaur                                     |
| **Bài học**            | The Dinosaur Body                                                 |
| **Thời lượng**         | 10:15                                                             |
| **Chủ đề chính**       | Dựng thân và đầu khủng long từ ảnh tham chiếu                     |
| **Kỹ thuật trọng tâm** | Plane Tracing, Extrude, Loop Cut, Knife, Mirror Modifier, Normals |

---

## 1. Mục tiêu bài học

Sau bài học này, người học có thể:

* Tạo hình thân và đầu khủng long bằng cách vẽ theo ảnh tham chiếu nhìn ngang.
* Bắt đầu mô hình từ một **Plane** thay vì Cube.
* Sử dụng **Extrude** để mở rộng đường bao của mô hình.
* Dùng **Loop Cut** và **Knife Tool** để bổ sung topology tại các khu vực cần nhiều chi tiết.
* Cắt phần miệng và hàm trực tiếp trên mesh.
* Thêm **Mirror Modifier** để tạo phần thân đối xứng.
* Đùn các cạnh biên vào tâm nhằm tạo mô hình 3D kín.
* Kiểm tra hướng mặt bằng **Face Orientation**.
* Phát hiện và xóa các mặt thừa nằm bên trong mô hình.
* Làm sạch các đỉnh trùng nhau bằng **Merge by Distance**.

---

## 2. Ý tưởng dựng hình chính

Trong bài này, mô hình khủng long không được bắt đầu từ Cube hay Cylinder. Thay vào đó, ta sử dụng một **Plane dựng đứng**, sau đó điều chỉnh các đỉnh để vẽ theo đường bao của ảnh tham chiếu nhìn ngang.

Quy trình tổng quát:

```text
Tạo Plane
    ↓
Xoay Plane dựng đứng
    ↓
Apply Rotation
    ↓
Vẽ đường bao đầu và thân
    ↓
Tạo topology cho miệng
    ↓
Xóa các mặt bên trong miệng
    ↓
Dịch mesh khỏi tâm đối xứng
    ↓
Thêm Mirror Modifier
    ↓
Extrude cạnh biên vào giữa
    ↓
Kiểm tra Normals
    ↓
Xóa mặt bên trong và đỉnh trùng
```

Phương pháp này giúp người học kiểm soát tốt hình dáng nhìn ngang trước khi tạo chiều rộng và thể tích cho nhân vật.

---

## 3. Chuẩn bị Plane để vẽ theo ảnh tham chiếu

### 3.1. Đưa 3D Cursor về tâm thế giới

Trước khi thêm Plane, cần bảo đảm **3D Cursor** nằm tại gốc tọa độ thế giới.

Thao tác:

1. Nhấn `Shift + S`.
2. Chọn **Cursor to World Origin**.

Việc đặt 3D Cursor tại gốc tọa độ giúp Object Origin của Plane nằm chính xác trên mặt phẳng đối xứng. Đây là điều quan trọng khi sử dụng Mirror Modifier.

---

### 3.2. Thêm và xoay Plane

Thêm một Plane:

```text
Shift + A → Mesh → Plane
```

Plane mặc định nằm ngang trên mặt phẳng XY. Vì ảnh khủng long đang dựng đứng, cần xoay Plane 90° quanh trục Y:

```text
R → Y → 90 → Enter
```

Sau đó chuyển sang góc nhìn bên:

```text
Numpad 3
```

Điều chỉnh vị trí Plane để nó nằm trên phần thân của ảnh khủng long.

---

### 3.3. Apply Rotation

Sau khi xoay Plane, Rotation của đối tượng đang có giá trị khoảng 90° trên trục Y.

Nếu giữ nguyên giá trị này, Mirror Modifier có thể hoạt động theo trục cục bộ không như mong muốn. Vì vậy cần áp dụng phép xoay:

```text
Ctrl + A → Rotation
```

Sau thao tác này:

```text
Rotation X = 0°
Rotation Y = 0°
Rotation Z = 0°
```

Hình dạng Plane vẫn giữ nguyên, nhưng các trục cục bộ đã được đặt lại.

> Đây là bước quan trọng. Quên Apply Rotation có thể khiến phần Mirror xuất hiện sai vị trí hoặc sai hướng.

---

## 4. Vẽ đường bao thân và đầu

### 4.1. Bật Edit Mode và X-Ray

Nhấn:

```text
Tab
```

để chuyển sang **Edit Mode**.

Bật X-Ray để có thể nhìn xuyên qua mesh và thấy ảnh tham chiếu phía sau:

```text
Alt + Z
```

Ngoài ra, có thể bật X-Ray bằng biểu tượng ở góc trên bên phải Viewport.

---

### 4.2. Điều chỉnh các đỉnh ban đầu

Chọn từng vertex và di chuyển bằng:

```text
G
```

Đặt các đỉnh của Plane gần đường bao phần thân.

Không cần bám tuyệt đối từng pixel của ảnh tham chiếu. Một lượng nhỏ ảnh bị lộ ra ngoài hoặc nằm dưới mesh là chấp nhận được vì hình dạng sẽ tiếp tục được điều chỉnh ở các bước sau.

Nguyên tắc:

* Dùng ít đỉnh nhất có thể.
* Thêm đỉnh tại vị trí đường cong thay đổi rõ rệt.
* Giữ kích thước các face tương đối đều nhau.
* Tránh tạo quá nhiều polygon ngay từ đầu.

---

### 4.3. Thêm Loop Cut tại vị trí thay đổi hình dạng

Tại những khu vực hình dáng thay đổi mạnh, chẳng hạn từ cổ sang lưng hoặc từ bụng sang đuôi, cần bổ sung cạnh.

Sử dụng:

```text
Ctrl + R
```

Sau khi thấy đường cắt xem trước:

1. Nhấn chuột trái để xác nhận.
2. Nhấn chuột phải để đặt đường cắt vào chính giữa.

Điều chỉnh vertex mới sao cho phù hợp với đường bao ảnh tham chiếu.

---

### 4.4. Extrude để mở rộng thân

Chọn hai đỉnh ở đầu một cạnh và nhấn:

```text
E
```

Kéo phần mới ra theo đường bao thân khủng long.

Có thể kết hợp:

| Lệnh          | Công dụng                            |
| ------------- | ------------------------------------ |
| `E`           | Tạo thêm cạnh và mặt mới             |
| `G`           | Di chuyển vertex hoặc edge           |
| `S`           | Thu nhỏ hoặc phóng to phần đang chọn |
| `X`, `Y`, `Z` | Khóa thao tác theo một trục          |

Ví dụ:

```text
E → kéo ra ngoài → Left Click
S → điều chỉnh độ rộng
G → tinh chỉnh vị trí
```

Tiếp tục Extrude quanh phần:

* Đầu
* Cổ
* Lưng
* Đuôi
* Bụng

Ở phần cuối đuôi, không bắt buộc phải gộp các đỉnh thành một điểm duy nhất. Có thể kết thúc bằng một cạnh ngắn để giữ topology dễ kiểm soát.

---

## 5. Nguyên tắc topology khi vẽ đường bao

Khi tạo đường bao, nên duy trì phần lớn các mặt ở dạng **quad**, tức mặt có bốn cạnh.

```text
Topology tốt:

●────●────●
│    │    │
●────●────●
│    │    │
●────●────●
```

Hạn chế tạo nhiều cạnh không cần thiết vì:

* Mesh trở nên khó chỉnh sửa.
* Khi thay đổi hình dáng, phải di chuyển nhiều vertex.
* Dễ xuất hiện bề mặt gồ ghề.
* Làm mất tính đơn giản của phong cách low-poly.

Chỉ thêm loop cut tại những nơi thực sự cần:

* Đường cong thay đổi mạnh.
* Vùng đầu có nhiều chi tiết.
* Khu vực miệng và hàm.
* Vị trí sẽ cần tạo mắt, mũi hoặc cấu trúc khuôn mặt.

---

## 6. Tạo phần miệng và hàm

### 6.1. Thêm một Loop Cut xuyên thân

Để chuẩn bị topology cho miệng và đồng thời tạo thêm khả năng uốn cong phần thân, thêm một loop cut chạy dọc qua mô hình:

```text
Ctrl + R
```

Không nên lạm dụng thao tác này. Mỗi loop cut chạy xuyên toàn bộ mesh sẽ làm tăng số lượng vertex ở nhiều khu vực không thực sự cần thêm chi tiết.

Tuy nhiên, đường cắt giữa này hữu ích vì sau đó có thể:

* Đẩy các vertex ra ngoài để tạo độ cong cho thân.
* Tạo thêm topology quanh đầu.
* Xây dựng phần miệng rõ ràng hơn.

---

### 6.2. Định vị đường trên của miệng

Ở góc nhìn bên, điều chỉnh các vertex gần đầu sao cho chúng đi theo đường viền phía trên của miệng.

Phần đầu có nhiều chi tiết hơn thân nên có thể sử dụng nhiều loop cut hơn, nhưng vẫn cần giữ topology gọn.

---

### 6.3. Cắt đường dưới của hàm bằng Knife Tool

Nhấn:

```text
K
```

để kích hoạt **Knife Tool**.

Quy trình cắt:

1. Bắt đầu tại một vertex có sẵn.
2. Nhấp lần lượt qua các edge cần cắt.
3. Kết thúc tại một vertex hoặc cạnh phù hợp.
4. Nhấn `Enter` để xác nhận.

Việc bắt đầu và kết thúc trên vertex giúp đường cắt sạch hơn và giảm nguy cơ tạo topology khó kiểm soát.

Sau khi cắt, điều chỉnh các vertex mới để bám theo đường dưới của hàm.

---

### 6.4. Bổ sung Loop Cut quanh đầu

Do đầu có nhiều chi tiết hơn thân, có thể thêm các loop cut cục bộ quanh:

* Hốc mắt
* Lỗ mũi
* Phần nối giữa hàm trên và hàm dưới
* Mép trong của miệng
* Phần da hoặc cơ nối ở góc hàm

Sử dụng:

```text
Ctrl + R
```

Sau đó dùng `G` để điều chỉnh vertex.

Mục tiêu trong giai đoạn này chưa phải tạo chi tiết hoàn chỉnh mà chỉ là chuẩn bị topology phù hợp.

---

## 7. Tạo lỗ miệng

Chuyển sang Face Select:

```text
3
```

> Phím `3` trên hàng số khi đang ở Edit Mode thường dùng để chuyển sang Face Select.
> `Numpad 3` dùng để chuyển sang Right/Side View.

Chọn các face nằm bên trong vùng miệng, sau đó nhấn:

```text
X → Faces
```

hoặc:

```text
Delete → Faces
```

Sau khi xóa, phần miệng trở thành một khoảng hở thực sự trên mesh.

Ở bước này chưa cần tạo phần da nối bên trong miệng. Chi tiết đó có thể được bổ sung sau khi hai nửa mô hình đã được nối thành một khối hoàn chỉnh.

---

## 8. Tạo chiều rộng cho thân

### 8.1. Chuyển sang Front View

Nhấn:

```text
Numpad 1
```

Ở thời điểm này, Plane vẫn nằm gần mặt phẳng trung tâm nên nhìn từ trước sẽ gần như chỉ thấy một đường mỏng.

Mirror Modifier đối xứng dựa trên **Object Origin**. Nếu toàn bộ mesh nằm đúng tại tâm, bản sao Mirror sẽ chồng hoàn toàn lên mesh gốc.

Vì vậy cần dịch geometry sang một bên nhưng giữ Object Origin tại tâm.

---

### 8.2. Dịch geometry trong Edit Mode

Trong Edit Mode:

```text
A
```

để chọn toàn bộ geometry.

Sau đó:

```text
G → X
```

và kéo mesh sang một bên của Object Origin.

Do thao tác được thực hiện trong Edit Mode:

* Vertex và face di chuyển.
* Object Origin không di chuyển.
* Tâm đối xứng vẫn nằm tại gốc tọa độ.

Đặt mesh ở khoảng giữa từ tâm đến biên ngoài của thân. Không nên đặt quá rộng vì sau này còn cần tạo phần bụng phình và phần mặt thu vào.

---

## 9. Thêm Mirror Modifier

Chuyển đến tab **Modifiers**, biểu tượng cờ lê.

Chọn:

```text
Add Modifier → Mirror
```

Giữ trục đối xứng là:

```text
X
```

Bật tùy chọn:

```text
Clipping
```

### Vai trò của Clipping

Clipping ngăn các vertex vượt qua mặt phẳng đối xứng và giúp các vertex hai bên dính vào nhau khi được kéo đến tâm.

Nếu Mirror xuất hiện sai hướng hoặc sai vị trí, hãy kiểm tra:

* Plane đã được Apply Rotation chưa.
* Object Origin có còn ở tâm thế giới không.
* Trục Mirror có đang là X không.
* Geometry có nằm đúng một phía của Object Origin không.

---

## 10. Extrude các cạnh biên vào tâm

### 10.1. Chọn toàn bộ cạnh biên

Chuyển sang Edge Select:

```text
2
```

Giữ `Alt` và nhấp chuột trái lên một cạnh biên:

```text
Alt + Left Click
```

để chọn một edge loop.

Để chọn thêm edge loop khác:

```text
Shift + Alt + Left Click
```

Cần chọn toàn bộ các cạnh chạy quanh đường bao ngoài của mô hình, bao gồm:

* Lưng
* Đuôi
* Bụng
* Đầu
* Các cạnh quanh miệng nếu cần nối

---

### 10.2. Extrude vào giữa

Chuyển sang Front View:

```text
Numpad 1
```

Tắt X-Ray nếu cần để quan sát rõ hơn:

```text
Alt + Z
```

Bảo đảm **Clipping** đang được bật trong Mirror Modifier.

Sau đó nhấn:

```text
E → X
```

Kéo các cạnh vào mặt phẳng trung tâm.

Khi các vertex chạm tâm, Clipping sẽ giữ chúng tại đó và hai phía Mirror sẽ nối lại.

Kết quả là mô hình từ một mặt phẳng 2D trở thành một khối 3D kín.

```text
Trước Extrude:

        Object Origin
             │
             │    Mesh gốc
             │      ╱
─────────────┼─────╱─────────────
             │

Sau Mirror và Extrude:

      Nửa Mirror │ Nửa gốc
            ╲    │    ╱
             ╲   │   ╱
              ╲──┼──╱
```

---

## 11. Kiểm tra Face Orientation và Normals

### 11.1. Bật Face Orientation

Mở menu:

```text
Viewport Overlays → Face Orientation
```

Màu hiển thị:

| Màu            | Ý nghĩa                                   |
| -------------- | ----------------------------------------- |
| **Xanh dương** | Mặt trước đang hướng ra ngoài             |
| **Đỏ**         | Mặt sau đang hướng về phía người quan sát |

Đối với một mô hình kín bình thường, bề mặt bên ngoài nên có màu xanh.

---

### 11.2. Sửa hướng Normals

Chọn toàn bộ mesh:

```text
A
```

Sau đó nhấn:

```text
Shift + N
```

Lệnh này thực hiện **Recalculate Outside**, giúp Blender tính lại hướng mặt sao cho chúng hướng ra ngoài mô hình.

Nếu cần đảo hướng thủ công, có thể sử dụng:

```text
Alt + N → Flip
```

Normals sai có thể gây vấn đề khi:

* Áp dụng vật liệu.
* Texture mapping.
* Rigging.
* Render.
* Sử dụng các modifier phụ thuộc vào hướng mặt.
* Xuất mô hình sang game engine.

---

## 12. Kiểm tra các mặt nằm bên trong mô hình

### 12.1. Inside Face là gì?

Inside Face là các face nằm bên trong một mesh kín mà người xem không nhìn thấy từ bên ngoài.

Chúng có thể xuất hiện khi:

* Extrude nhưng hủy thao tác không đúng cách.
* Extrude nhiều lần tại cùng một vị trí.
* Dùng Fill sai cạnh.
* Nối geometry nhưng không xóa mặt cũ.
* Tạo mặt giữa hai cạnh đã có bề mặt kín.

Các mặt bên trong có thể gây:

* Nhấp nháy bề mặt.
* Z-fighting.
* Lỗi shading.
* Lỗi khi rigging.
* Kết quả Boolean không ổn định.
* Tăng số polygon không cần thiết.

---

### 12.2. Cách kiểm tra

Có thể tạm thời:

* Ẩn ảnh tham chiếu.
* Bật X-Ray.
* Xoay Viewport quanh mô hình.
* Chuyển sang Face Select.
* Quan sát các face xuất hiện bên trong khối.

Nếu phát hiện face thừa:

```text
Chọn face → X → Faces
```

Cần cẩn thận không xóa nhầm các face tạo nên bề mặt ngoài của mô hình.

---

## 13. Xóa vertex trùng bằng Merge by Distance

Các vertex trùng nhau thường xuất hiện khi:

* Extrude nhưng không di chuyển.
* Hủy thao tác Extrude sau khi geometry mới đã được tạo.
* Sao chép geometry tại cùng vị trí.
* Nối hai phần mesh nhưng chưa Merge.

Để làm sạch:

```text
A → M → By Distance
```

Blender sẽ hiển thị số lượng vertex đã được gộp.

Nếu thông báo cho biết không có vertex nào bị xóa, mesh không có điểm trùng trong phạm vi hiện tại.

### Lưu ý

Không nên tăng giá trị khoảng cách quá lớn vì có thể khiến các vertex gần nhau nhưng thuộc các chi tiết khác nhau bị gộp nhầm.

---

## 14. Quy trình thực hành chi tiết

### Giai đoạn 1 — Chuẩn bị

1. Đưa 3D Cursor về World Origin.
2. Thêm một Plane.
3. Xoay Plane 90° quanh trục Y.
4. Apply Rotation.
5. Chuyển sang Side View.
6. Vào Edit Mode.
7. Bật X-Ray.

### Giai đoạn 2 — Tạo đường bao

8. Điều chỉnh bốn vertex ban đầu theo phần thân.
9. Thêm Loop Cut tại nơi đường cong thay đổi.
10. Extrude dọc theo lưng, đầu, bụng và đuôi.
11. Điều chỉnh vertex bằng Move và Scale.
12. Giữ số lượng polygon ở mức vừa đủ.

### Giai đoạn 3 — Tạo miệng

13. Thêm Loop Cut hỗ trợ quanh đầu.
14. Định hình đường trên của miệng.
15. Dùng Knife Tool cắt đường dưới của hàm.
16. Điều chỉnh topology quanh hốc mắt và lỗ mũi.
17. Chọn và xóa các face nằm trong miệng.

### Giai đoạn 4 — Tạo khối 3D

18. Chuyển sang Front View.
19. Chọn toàn bộ geometry.
20. Dịch geometry sang một bên theo trục X.
21. Thêm Mirror Modifier.
22. Bật Clipping.
23. Chọn các cạnh biên.
24. Extrude các cạnh vào tâm theo trục X.
25. Kiểm tra đường nối giữa hai nửa.

### Giai đoạn 5 — Làm sạch mesh

26. Bật Face Orientation.
27. Recalculate Normals nếu cần.
28. Kiểm tra các face thừa bên trong.
29. Xóa các inside face.
30. Merge by Distance.
31. Lưu file bằng `Ctrl + S`.

---

## 15. Phím tắt và công cụ

| Phím tắt                   | Chức năng                       |
| -------------------------- | ------------------------------- |
| `Shift + A`                | Thêm đối tượng mới              |
| `Shift + S`                | Mở Snap Menu                    |
| `Tab`                      | Chuyển Object Mode và Edit Mode |
| `Numpad 1`                 | Front View                      |
| `Numpad 3`                 | Side View                       |
| `Alt + Z`                  | Bật hoặc tắt X-Ray              |
| `A`                        | Chọn toàn bộ                    |
| `G`                        | Di chuyển                       |
| `R`                        | Xoay                            |
| `S`                        | Scale                           |
| `E`                        | Extrude                         |
| `Ctrl + R`                 | Loop Cut                        |
| `K`                        | Knife Tool                      |
| `1`                        | Vertex Select                   |
| `2`                        | Edge Select                     |
| `3`                        | Face Select                     |
| `Alt + Left Click`         | Chọn Edge Loop                  |
| `Shift + Alt + Left Click` | Thêm Edge Loop vào vùng chọn    |
| `X`                        | Xóa vertex, edge hoặc face      |
| `M`                        | Merge                           |
| `Shift + N`                | Recalculate Normals Outside     |
| `Alt + N`                  | Mở menu Normals                 |
| `Ctrl + A`                 | Apply Transform                 |
| `Ctrl + S`                 | Lưu file                        |

---

## 16. Lỗi thường gặp

### 16.1. Mirror xuất hiện sai vị trí

**Nguyên nhân:**

* Chưa Apply Rotation.
* Object Origin bị di chuyển khỏi tâm.
* Chọn sai trục Mirror.
* Geometry nằm ngay trên mặt phẳng đối xứng.

**Cách xử lý:**

```text
Object Mode → Ctrl + A → Rotation
```

Kiểm tra Object Origin và bảo đảm Mirror đang dùng trục X.

---

### 16.2. Hai nửa không dính vào nhau

**Nguyên nhân:**

* Chưa bật Clipping.
* Vertex chưa được kéo hoàn toàn đến mặt phẳng giữa.
* Object Origin không nằm đúng tâm.
* Merge distance quá nhỏ hoặc các vertex không cùng vị trí.

**Cách xử lý:**

* Bật Clipping.
* Chọn vertex giữa và kéo về trục X.
* Kiểm tra tọa độ X.
* Dùng Merge by Distance nếu Mirror đã được Apply.

---

### 16.3. Bề mặt ngoài có màu đỏ

**Nguyên nhân:** Normals đang quay vào trong.

**Cách xử lý:**

```text
A → Shift + N
```

Nếu vẫn sai:

```text
Alt + N → Flip
```

---

### 16.4. Xuất hiện đường nhấp nháy trên bề mặt

**Nguyên nhân có thể là:**

* Hai face chồng lên nhau.
* Có inside face.
* Có geometry bị Extrude nhưng chưa di chuyển.
* Có vertex trùng.

**Cách xử lý:**

1. Bật X-Ray.
2. Kiểm tra các face bên trong.
3. Xóa face thừa.
4. Dùng `M → By Distance`.

---

### 16.5. Loop Cut không chạy xuyên toàn bộ mesh

Loop Cut chỉ có thể chạy liên tục qua chuỗi các mặt quad.

Sau khi sử dụng Knife Tool hoặc tạo topology có triangle và n-gon, đường Loop Cut có thể bị dừng.

Đây không nhất thiết là lỗi. Có thể:

* Thêm loop cut ở từng khu vực riêng.
* Dùng Knife Tool để tiếp tục đường cắt.
* Điều chỉnh topology để duy trì quad nếu cần.

---

### 16.6. Mesh có quá nhiều polygon

**Nguyên nhân:** Thêm quá nhiều loop cut để cố gắng bám sát từng chi tiết nhỏ của ảnh.

**Hậu quả:**

* Khó điều chỉnh hình dáng.
* Mesh dễ lồi lõm.
* Tốn nhiều thời gian chỉnh sửa.
* Không còn rõ phong cách low-poly.

**Giải pháp:** Chỉ thêm geometry ở nơi silhouette hoặc cấu trúc thực sự thay đổi.

---

## 17. Nguyên tắc low-poly trong bài

### Ưu tiên silhouette

Ở giai đoạn đầu, đường bao của nhân vật quan trọng hơn các chi tiết nhỏ trên bề mặt.

Cần tập trung vào:

* Tỷ lệ giữa đầu và thân.
* Độ cong của lưng.
* Hình dáng bụng.
* Chiều dài và độ thon của đuôi.
* Kích thước phần mõm.
* Độ mở của miệng.

### Chưa dựng tay và chân

Bài này chỉ tập trung vào:

* Thân
* Cổ
* Đầu
* Đuôi
* Phần miệng cơ bản

Tay và chân sẽ được dựng trong các bài sau.

### Tăng độ phức tạp từng bước

```text
Silhouette đơn giản
        ↓
Topology phần đầu
        ↓
Tạo lỗ miệng
        ↓
Tạo chiều rộng
        ↓
Điều chỉnh thể tích
        ↓
Thêm chi tiết khuôn mặt
        ↓
Thêm tay và chân
```

Không nên cố hoàn thiện toàn bộ chi tiết ngay từ đầu.

---

## 18. Checklist thực hành

### Chuẩn bị

* [ ] 3D Cursor đã được đưa về World Origin.
* [ ] Đã tạo Plane và xoay 90° quanh trục Y.
* [ ] Đã Apply Rotation.
* [ ] Object Origin vẫn nằm tại tâm đối xứng.
* [ ] Đã bật X-Ray để nhìn ảnh tham chiếu.

### Đường bao

* [ ] Đường bao đầu và thân bám tương đối sát ảnh nhìn ngang.
* [ ] Đã tạo phần cổ, lưng, bụng và đuôi.
* [ ] Không thêm quá nhiều loop cut.
* [ ] Phần lớn topology vẫn là quad.
* [ ] Kích thước các face tương đối đồng đều.

### Miệng và đầu

* [ ] Đã tạo đường trên của miệng.
* [ ] Đã dùng Knife Tool để cắt hàm dưới.
* [ ] Đã xóa các face trong vùng miệng.
* [ ] Có đủ topology để tiếp tục dựng mắt, mũi và hàm.

### Mirror và thể tích

* [ ] Geometry đã được dịch khỏi tâm trong Edit Mode.
* [ ] Mirror Modifier đang đối xứng theo trục X.
* [ ] Clipping đã được bật.
* [ ] Các cạnh biên đã được Extrude vào giữa.
* [ ] Hai nửa mô hình đã nối kín tại tâm.

### Làm sạch mesh

* [ ] Face Orientation bên ngoài có màu xanh.
* [ ] Không còn mặt thừa bên trong mô hình.
* [ ] Đã sử dụng Merge by Distance.
* [ ] Không có vertex hoặc face chồng lên nhau.
* [ ] File đã được lưu bằng `Ctrl + S`.

---

## 19. Bài tập tự luyện

### Bài tập 1 — Kiểm tra silhouette

Ẩn ảnh tham chiếu và quan sát mô hình chỉ ở chế độ Solid.

Kiểm tra xem hình dáng có thể nhận ra là khủng long hay không dựa trên:

* Đầu lớn
* Miệng dài
* Cổ ngắn
* Thân nặng
* Đuôi dài và thon

Nếu silhouette chưa rõ, hãy chỉnh các vertex lớn trước khi thêm chi tiết.

---

### Bài tập 2 — Tối ưu topology phần đầu

Quan sát các loop cut quanh đầu và xác định:

* Edge nào thực sự cần cho hốc mắt?
* Edge nào cần cho lỗ mũi?
* Edge nào cần để tạo hàm?
* Edge nào không ảnh hưởng đến silhouette và có thể xóa?

Có thể dùng:

```text
X → Dissolve Edges
```

để loại bỏ cạnh không cần thiết mà không tạo lỗ trên bề mặt.

---

### Bài tập 3 — Kiểm tra mô hình kín

Bật X-Ray và xoay mô hình từ nhiều hướng.

Xác nhận rằng:

* Không có lỗ ngoài vùng miệng.
* Không có face nằm giữa thân.
* Không có vertex trùng.
* Đường nối tại mặt phẳng Mirror không bị hở.

---

## 20. Tóm tắt bài học

Trong bài học này, phần thân khủng long được xây dựng bằng phương pháp **Plane Tracing**:

1. Tạo một Plane và xoay dựng đứng.
2. Apply Rotation để Mirror hoạt động đúng.
3. Dùng vertex, Loop Cut và Extrude để vẽ theo đường bao ảnh nhìn ngang.
4. Dùng Knife Tool và Loop Cut để tạo topology cho phần miệng.
5. Xóa các face bên trong miệng.
6. Dịch geometry sang một bên trong Edit Mode.
7. Thêm Mirror Modifier và bật Clipping.
8. Extrude các cạnh biên vào tâm để tạo mô hình 3D kín.
9. Kiểm tra Face Orientation và sửa Normals.
10. Xóa các mặt bên trong và gộp vertex trùng bằng Merge by Distance.

Đây mới là **khối nền ban đầu** của khủng long. Ở các bài tiếp theo, mô hình sẽ tiếp tục được điều chỉnh về chiều rộng, độ cong, cấu trúc khuôn mặt, tay và chân trước khi hoàn thiện thành nhân vật low-poly.

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
