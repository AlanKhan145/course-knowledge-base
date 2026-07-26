# 030 — Making Walls

| Thuộc tính       | Nội dung                                         |
| ---------------- | ------------------------------------------------ |
| **Module**       | Module 02 — Modular Dungeon                      |
| **Bài học**      | Making Walls                                     |
| **Thời lượng**   | 9:55                                             |
| **Chủ đề chính** | Dựng tường đá modular và tối ưu số lượng polygon |

---

## 1. Mục tiêu bài học

Sau bài học này, bạn có thể:

* So sánh hai phương pháp dựng tường đá trong Blender.
* Hiểu ảnh hưởng của số lượng polygon đến hiệu suất của game.
* Dựng một module tường từ một mặt phẳng thay vì ghép nhiều khối riêng biệt.
* Tạo các hàng đá lớn và các viên gạch nhỏ bằng `Loop Cut`, `Knife`, `Inset` và `Extrude`.
* Tạo độ méo tự nhiên cho bề mặt đá bằng công cụ `Randomize`.
* Tạo các góc sứt, cạnh vỡ và rãnh khuyết trên viên đá.
* Xóa những mặt không nhìn thấy để giảm polygon không cần thiết.
* Chuẩn bị một module tường có thể đặt giữa hai cột đá.

---

## 2. Hai phương pháp dựng tường

Có hai cách phổ biến để xây dựng một bức tường đá low-poly.

### Phương pháp 1: Ghép nhiều khối đá

Mỗi viên đá là một Cube hoặc một mesh độc lập, sau đó được nhân bản và xếp chồng lên nhau.

```text
┌────┬────┬────┬────┐
│    │    │    │    │
├────┼────┼────┼────┤
│    │    │    │    │
├────┼────┼────┼────┤
│    │    │    │    │
└────┴────┴────┴────┘
```

**Ưu điểm:**

* Dễ hiểu và dễ dựng.
* Có thể tạo các viên đá nhô ra hoặc xoay lệch độc lập.
* Phù hợp khi người chơi nhìn thấy cả hai mặt của tường.
* Dễ tạo tường bị phá hủy hoặc các viên đá có thể tách rời.

**Nhược điểm:**

* Mỗi khối đá đều có mặt trước, mặt sau và các mặt bên.
* Nhiều mặt bị che khuất nhưng vẫn tồn tại trong mesh.
* Số lượng polygon tăng nhanh khi nhân bản bức tường nhiều lần.

Trong ví dụ của bài học, phiên bản ghép từ nhiều viên đá có khoảng:

> **800 triangles**

---

### Phương pháp 2: Dựng từ một mặt phẳng

Bắt đầu bằng một Plane, chia bề mặt thành các vùng rồi đẩy từng phần ra phía trước.

```text
Mặt phẳng ban đầu
        ↓
Chia thành các hàng đá
        ↓
Cắt thành từng viên đá
        ↓
Inset từng viên
        ↓
Đẩy các viên đá ra phía trước
```

**Ưu điểm:**

* Ít polygon hơn.
* Không cần tạo mặt sau nếu người chơi không thể nhìn thấy phía sau tường.
* Dễ kiểm soát hình dạng tổng thể.
* Phù hợp để luyện tập kỹ thuật box modeling.
* Có thể sử dụng Mirror nếu cần cả hai mặt của bức tường.

Phiên bản dựng từ Plane trong bài học có khoảng:

> **308 triangles**

| Phương pháp        | Số triangle xấp xỉ |
| ------------------ | -----------------: |
| Dựng từ Plane      |                308 |
| Ghép nhiều khối đá |                800 |

Plane chỉ sử dụng khoảng **38,5%** số triangle so với phương pháp ghép nhiều khối.

Tuy nhiên, cả hai phiên bản vẫn có số polygon tương đối thấp. Sự khác biệt về hiệu suất chỉ thực sự đáng chú ý khi bức tường được lặp lại hàng trăm hoặc hàng nghìn lần trong môi trường game.

---

## 3. Kiểm tra số lượng polygon

Để hiển thị thông tin về vertex, edge, face và triangle:

1. Mở menu **Viewport Overlays** ở góc trên bên phải của 3D Viewport.
2. Bật tùy chọn **Statistics**.
3. Chọn object.
4. Vào `Edit Mode`.
5. Nhấn `A` để chọn toàn bộ mesh.

Blender sẽ hiển thị các thông tin như:

```text
Vertices
Edges
Faces
Triangles
```

### Vì sao game engine quan tâm đến triangle?

Game engine thường chuyển bề mặt polygon thành các tam giác trước khi render.

Ví dụ:

```text
Quad
┌─────────┐
│       / │
│     /   │
│   /     │
└─────────┘

→ Hai triangle
```

Các mặt nhiều cạnh như Ngon có thể tạo ra nhiều triangle hơn sau khi được triangulate trong game engine. Vì vậy, thống kê trong Blender có thể thấp hơn một chút so với số triangle cuối cùng được engine sử dụng.

---

## 4. Chuẩn bị khu vực dựng tường

Trước khi dựng tường:

* Chuyển sang workspace **Layout**.
* Tạm ẩn Barrel và Crate để viewport gọn hơn.
* Sử dụng khoảng cách giữa hai cột đá làm kích thước tham chiếu.

Khoảng cách giữa hai cột trong bài học là:

```text
4 mét
```

Có thể chọn một cột giữa và di chuyển nó sang bên cạnh để dùng làm mẫu kích thước:

```text
G → X → -4
```

Hai cột ở hai đầu có thể được ẩn tạm thời bằng:

```text
H
```

Để hiện lại tất cả object bị ẩn:

```text
Alt + H
```

---

## 5. Tạo mặt phẳng tường

### Bước 1: Thêm Plane

Trong `Object Mode`:

```text
Shift + A
→ Mesh
→ Plane
```

Thiết lập kích thước Plane thành:

```text
4 m
```

### Bước 2: Dựng Plane đứng thẳng

Xoay Plane 90° quanh trục X:

```text
R → X → 90
```

Điểm đáng lưu ý là phép xoay này được giữ trong transform của object. Trong bảng Item, Rotation X sẽ hiển thị khoảng `90°`.

Điều này có thể ảnh hưởng đến một số thao tác hoặc modifier sau này nếu transform chưa được Apply.

---

### Bước 3: Đặt vị trí Plane

Chuyển sang Front View:

```text
Numpad 1
```

Di chuyển Plane sang phải 2 mét:

```text
G → X → 2
```

Di chuyển Plane lên trên 2 mét:

```text
G → Z → 2
```

---

### Bước 4: Điều chỉnh chiều cao

Nhấn `Tab` để vào `Edit Mode`, sau đó chuyển sang Edge Select:

```text
2
```

Chọn cạnh trên và hạ xuống 1 mét:

```text
G → Z → -1
```

Kết quả là bức tường có kích thước xấp xỉ:

```text
Rộng: 4 m
Cao: 3 m
```

Có thể kiểm tra tại:

```text
N → Item → Dimensions
```

---

## 6. Chia cấu trúc chính của bức tường

Bức tường được chia thành ba khu vực:

```text
┌────────────────────────────┐
│      Khối đá dài phía trên │
├────────────────────────────┤
│                            │
│      Khu vực các viên đá   │
│                            │
├────────────────────────────┤
│      Khối đá dài phía dưới │
└────────────────────────────┘
```

### Bước 1: Tạo ba Loop Cut

Trong `Edit Mode`:

```text
Ctrl + R
```

Dùng con lăn chuột để tạo:

```text
3 Loop Cuts
```

Nhấn đúp chuột trái để đặt các đường cắt ở giữa.

Các đường cắt này tạo ra:

* Một hàng đá dài phía trên.
* Hai hàng gạch đá ở giữa.
* Một hàng đá dài phía dưới.

---

### Bước 2: Đẩy phần trên và dưới ra ngoài

Chuyển sang Face Select:

```text
3
```

Chọn mặt trên và mặt dưới, sau đó Extrude theo chiều sâu:

```text
E
```

Kéo nhẹ ra phía trước để tạo một phần gờ lớn ở trên và dưới tường.

---

### Bước 3: Tạo gờ nhỏ

Tiếp tục thêm Loop Cut gần mép trên và mép dưới:

```text
Ctrl + R
```

Chọn các dải mặt nhỏ vừa tạo rồi Extrude theo trục Y:

```text
E → Y
```

Kết quả là phần trên và dưới của tường có thêm các gờ nhỏ, giúp thiết kế đồng nhất với cột đá.

```text
Mặt cắt bên:

          ┌──── Gờ nhỏ
          │
     ┌────┘
─────┘       Thân tường
```

---

## 7. Xóa các mặt không cần thiết

Hai đầu bức tường sẽ bị cột đá che phủ. Vì vậy, các mặt ở hai bên không cần tồn tại.

### Cách xóa mặt hai đầu

1. Chuyển sang góc nhìn bên.
2. Bật X-Ray:

```text
Alt + Z
```

3. Box Select các mặt ở đầu tường:

```text
B
```

4. Xóa các mặt:

```text
X
→ Faces
```

5. Tắt X-Ray:

```text
Alt + Z
```

### Lợi ích

* Giảm số polygon.
* Tránh tạo các mặt không bao giờ được nhìn thấy.
* Giảm khả năng xuất hiện z-fighting khi tường chồng lên cột.
* Giữ mesh gọn hơn.

> Chỉ nên xóa các mặt này khi chắc chắn chúng luôn được che bởi cột hoặc object khác.

---

## 8. Tạo hoa văn các viên đá bằng Knife Tool

Sau khi tạo cấu trúc lớn, phần giữa bức tường cần được chia thành từng viên đá.

### Vấn đề khi cắt ở Front Orthographic

Nếu đang ở Front Orthographic, Knife Tool có thể chọn nhầm cạnh phía trước thay vì cạnh nằm phía sau.

Khi đó, đường cắt không đi qua bề mặt như mong muốn.

### Cách khắc phục

Chuyển từ Orthographic sang Perspective:

```text
Numpad 5
```

Khi nhìn thấy rõ cạnh phía sau, sử dụng Knife Tool:

```text
K
```

---

### Quy trình cắt

1. Nhấn `K`.
2. Nhấp vào một cạnh để bắt đầu.
3. Nhấp vào cạnh đối diện để tạo đường cắt.
4. Nhấn chuột phải để kết thúc đường hiện tại nhưng vẫn giữ Knife Tool hoạt động.
5. Tiếp tục tạo các đường cắt khác.
6. Nhấn `Enter` để xác nhận toàn bộ.

Tạo các đường chia lệch nhau giữa hai hàng:

```text
Hàng trên:
┌──────┬────────┬───────┬─────┐
│      │        │       │     │
└──────┴────────┴───────┴─────┘

Hàng dưới:
┌───┬────────┬──────┬─────────┐
│   │        │      │         │
└───┴────────┴──────┴─────────┘
```

Không cần làm các đường cắt hoàn toàn thẳng. Một chút xiên và không đều sẽ giúp bức tường có cảm giác thủ công và cổ xưa hơn.

---

## 9. Inset từng viên đá

Sau khi chia các mặt thành từng viên đá:

1. Chuyển sang Face Select:

```text
3
```

2. Chọn tất cả các mặt đá ở khu vực giữa.
3. Nhấn:

```text
I
```

Lần nhấn đầu tiên sẽ Inset toàn bộ các mặt như một vùng chung.

Nhấn `I` thêm lần nữa để bật:

```text
Inset Individual Faces
```

Khi đó, mỗi viên đá sẽ được Inset độc lập.

```text
Inset theo vùng chung:
┌─────────────────┐
│ ┌─────────────┐ │
│ └─────────────┘ │
└─────────────────┘

Inset từng mặt:
┌──────┬──────┐
│ ┌──┐ │ ┌──┐ │
│ └──┘ │ └──┘ │
└──────┴──────┘
```

---

### Tránh Inset quá lớn

Nếu Inset quá sâu, các cạnh có thể chồng lên nhau và gây hiện tượng nhấp nháy hoặc geometry bị lỗi.

Hiện tượng này thường xuất hiện ở:

* Mép trái.
* Mép phải.
* Các viên đá quá nhỏ hoặc có góc nhọn.

Nên sử dụng khoảng Inset nhỏ và quan sát toàn bộ mesh trước khi xác nhận.

---

### Đẩy các viên đá ra ngoài

Trong bảng tùy chọn của Inset, có thể điều chỉnh thông số:

```text
Depth
```

Đặt Depth khoảng:

```text
0,05 m
```

Tương đương khoảng 5 cm.

Nếu đã mất bảng tùy chọn, có thể di chuyển các mặt theo trục Y:

```text
G → Y
```

Kết quả:

```text
Nhìn từ cạnh:

       ┌── Viên đá nhô ra
───────┘
       Thân tường
```

---

## 10. Tạo độ méo tự nhiên bằng Randomize

Một bức tường đá hoàn toàn thẳng và đều thường trông quá nhân tạo. Công cụ Randomize giúp tạo một chút sai lệch cho các vertex.

### Bước 1: Mở rộng vùng chọn

Sau khi chọn các mặt đá, nhấn:

```text
Ctrl + Numpad +
```

Lệnh này sử dụng **Select More** để mở rộng vùng chọn sang các cạnh và vertex lân cận.

### Bước 2: Randomize

Trên menu chính của 3D Viewport:

```text
Mesh
→ Transform
→ Randomize
```

Đặt Amount khoảng:

```text
0,01
```

Giá trị nhỏ này tạo độ méo nhẹ mà không phá hủy cấu trúc của bức tường.

```text
Trước Randomize:
┌──────┬──────┬──────┐
│      │      │      │
└──────┴──────┴──────┘

Sau Randomize:
┌─────╱┬──────┬─────╲┐
│      │      │      │
└──────┴─────╱┴──────┘
```

> Không nên sử dụng Amount quá lớn vì các viên đá có thể xuyên vào nhau hoặc làm mép tường bị biến dạng mạnh.

---

## 11. Tạo các góc đá bị sứt

Để làm một số góc viên đá bớt hoàn hảo, sử dụng Vertex Bevel.

### Quy trình

1. Chuyển sang Vertex Select:

```text
1
```

2. Chọn ngẫu nhiên một số vertex ở góc viên đá.
3. Bevel vertex:

```text
Ctrl + Shift + B
```

4. Di chuyển chuột để xác định độ rộng.
5. Nhấp chuột trái để xác nhận.

```text
Trước:
┌─────────
│

Sau Vertex Bevel:
╲─────────
 ╲
```

Chỉ nên bevel một số góc. Nếu tất cả các viên đá đều bị bevel giống nhau, bức tường sẽ lại trông lặp lại và nhân tạo.

---

### Điều chỉnh các vertex bằng Edge Slide

Một số vertex có thể nằm quá gần hoặc gần như chồng lên nhau sau khi bevel.

Có thể điều chỉnh vị trí của chúng bằng:

```text
G → G
```

Đây là lệnh **Vertex Slide/Edge Slide**, cho phép vertex trượt dọc theo cạnh hiện tại mà không phá vỡ bề mặt.

Nếu hai vertex thực sự nằm trùng nhau, có thể gộp chúng bằng:

```text
M
→ By Distance
```

Việc này giúp mesh sạch và tránh các vertex dư thừa.

---

## 12. Tạo rãnh khuyết trên viên đá

Ngoài các góc sứt, có thể tạo các vết khuyết sâu hơn trên cạnh viên đá.

### Bước 1: Tạo đường cắt

Nhấn:

```text
K
```

Bắt đầu từ một cạnh và kết thúc tại một vertex có sẵn.

Ví dụ:

```text
┌──────────────┐
│            ╱ │
│          ╱   │
└─────────●────┘
```

Nhấn `Enter` để xác nhận.

### Nguyên tắc topology

Nên kết thúc Knife Cut tại một vertex hoặc góc có sẵn.

```text
Tốt:
Vertex ───────── Vertex

Kém tối ưu:
Vertex ─────── Điểm giữa cạnh
```

Một vertex nằm giữa cạnh mà không kết nối hợp lý có thể tạo topology khó chỉnh sửa về sau.

---

### Bước 2: Bevel cạnh cắt

Chuyển sang Edge Select:

```text
2
```

Chọn cạnh vừa tạo và bevel:

```text
Ctrl + B
```

Sử dụng con lăn chuột để thêm một đường cắt ở giữa bevel.

---

### Bước 3: Tạo hình rãnh

Chuyển sang Vertex Select và chọn vertex ở giữa:

```text
1
```

Trượt vertex bằng:

```text
G → G
```

Có thể tiếp tục điều chỉnh theo trục:

```text
G → X
```

hoặc:

```text
G → Z
```

Ví dụ, di chuyển vertex xuống dưới để tạo rãnh sâu hơn:

```text
G → Z
```

Kết quả:

```text
Cạnh đá ban đầu:
──────────────

Sau khi tạo notch:
───────╲
        ╲──────
```

Chỉ cần tạo một vài rãnh khuyết để tránh làm bề mặt quá rối.

---

## 13. Sơ đồ quy trình tổng thể

```text
Chuẩn bị hai cột tham chiếu
            │
            ▼
       Thêm Plane 4 m
            │
            ▼
      Xoay X 90 độ
            │
            ▼
 Điều chỉnh thành 4 m × 3 m
            │
            ▼
   Tạo 3 Loop Cut ngang
            │
            ▼
Extrude hàng trên và hàng dưới
            │
            ▼
     Tạo các gờ nhỏ
            │
            ▼
  Xóa mặt ở hai đầu tường
            │
            ▼
 Cắt các viên đá bằng Knife
            │
            ▼
Inset Individual Faces
            │
            ▼
 Đẩy các viên đá ra phía trước
            │
            ▼
 Randomize tạo độ méo nhẹ
            │
            ▼
Bevel một số góc và cạnh đá
            │
            ▼
   Tạo một vài rãnh khuyết
            │
            ▼
     Kiểm tra và lưu file
```

---

## 14. Phím tắt và công cụ liên quan

| Phím tắt           | Chức năng                            |
| ------------------ | ------------------------------------ |
| `Shift + A`        | Thêm object mới                      |
| `Tab`              | Chuyển giữa Object Mode và Edit Mode |
| `H`                | Ẩn object đang chọn                  |
| `Alt + H`          | Hiện lại các object đã ẩn            |
| `Numpad 1`         | Front View                           |
| `Numpad 5`         | Chuyển Perspective/Orthographic      |
| `Alt + Z`          | Bật hoặc tắt X-Ray                   |
| `1`                | Vertex Select trong Edit Mode        |
| `2`                | Edge Select trong Edit Mode          |
| `3`                | Face Select trong Edit Mode          |
| `Ctrl + R`         | Loop Cut                             |
| `K`                | Knife Tool                           |
| `I`                | Inset Faces                          |
| `I`, sau đó `I`    | Chuyển sang Inset Individual Faces   |
| `E`                | Extrude                              |
| `G`                | Di chuyển                            |
| `G`, `G`           | Vertex Slide hoặc Edge Slide         |
| `Ctrl + B`         | Bevel Edge                           |
| `Ctrl + Shift + B` | Bevel Vertex                         |
| `Ctrl + Numpad +`  | Mở rộng vùng chọn                    |
| `B`                | Box Select                           |
| `X`                | Xóa vertex, edge hoặc face           |
| `M`                | Merge các vertex                     |
| `A`                | Chọn toàn bộ                         |
| `Enter`            | Xác nhận Knife Cut                   |
| `Esc`              | Hủy thao tác hiện tại                |

---

## 15. Các nguyên tắc tối ưu quan trọng

### 15.1. Không tạo geometry không nhìn thấy

Các mặt nằm hoàn toàn bên trong cột hoặc phía sau tường có thể được xóa nếu người chơi không bao giờ nhìn thấy chúng.

```text
Cột       Tường       Cột
████│────────────│████
    ↑            ↑
Mặt hai đầu bị che
```

---

### 15.2. Không tối ưu quá mức

Giảm polygon là cần thiết, nhưng không nên làm mesh phức tạp hoặc khó chỉnh sửa chỉ để tiết kiệm vài triangle.

Trong bài học:

* 308 triangles là hiệu quả hơn.
* 800 triangles vẫn là mức thấp.
* Cả hai đều có thể sử dụng trong game engine.

Tối ưu chỉ thực sự quan trọng khi:

* Object được nhân bản rất nhiều lần.
* Scene có hàng nghìn object.
* Game chạy trên thiết bị cấu hình thấp.
* Object chiếm diện tích rất nhỏ trên màn hình nhưng có quá nhiều chi tiết.
* Hệ thống physics, collision hoặc shadow phải xử lý nhiều geometry.

---

### 15.3. Ưu tiên silhouette và chi tiết nhìn thấy

Polygon nên được sử dụng cho những phần ảnh hưởng trực tiếp đến:

* Silhouette của object.
* Bóng đổ.
* Các cạnh vỡ lớn.
* Chi tiết người chơi có thể nhìn thấy.
* Các phần tương tác hoặc chuyển động.

Những chi tiết bề mặt rất nhỏ thường phù hợp hơn với texture, normal map hoặc shader.

---

## 16. Lưu ý và lỗi thường gặp

### Knife Tool không cắt đúng mặt

**Nguyên nhân:** đang ở Orthographic View và Knife bắt vào cạnh phía trước.

**Cách khắc phục:**

```text
Numpad 5
```

Chuyển sang Perspective để nhìn thấy cạnh cần cắt.

---

### Inset tất cả các viên đá thành một vùng

**Nguyên nhân:** chỉ nhấn `I` một lần.

**Cách khắc phục:**

```text
I → I
```

Lần nhấn thứ hai bật **Individual Faces**.

---

### Geometry bị nhấp nháy sau Inset

**Nguyên nhân:** Inset quá lớn khiến các cạnh hoặc mặt chồng lên nhau.

**Cách khắc phục:**

* Giảm Thickness.
* Giảm Depth.
* Kiểm tra các viên đá nhỏ ở mép trái và phải.
* Tránh tạo các mặt quá mỏng.

---

### Randomize làm biến dạng toàn bộ tường

**Nguyên nhân:** Amount quá lớn hoặc chọn cả các cạnh biên ngoài.

**Cách khắc phục:**

* Sử dụng giá trị nhỏ, khoảng `0,01`.
* Không chọn các vertex quyết định kích thước module.
* Giữ cạnh ngoài của module tương đối thẳng để dễ ghép với cột.

---

### Knife Cut kết thúc giữa cạnh

Điều này vẫn có thể hoạt động, nhưng có thể tạo topology không sạch.

Nên cố gắng kết thúc đường cắt tại:

* Vertex có sẵn.
* Góc của viên đá.
* Giao điểm giữa các cạnh.

---

### Quá nhiều góc vỡ

Nếu mọi viên đá đều có bevel và notch, bức tường sẽ trông nhiễu và thiếu điểm nhấn.

Nên sử dụng:

* Nhiều viên đá tương đối nguyên vẹn.
* Một số viên có góc sứt.
* Chỉ vài viên có rãnh khuyết lớn.

---

### Xóa nhầm các mặt cần nhìn thấy

Chỉ xóa mặt ở hai đầu khi chúng chắc chắn được cột đá che phủ.

Nếu module có thể được dùng độc lập hoặc nhìn thấy từ bên cạnh, cần giữ lại hoặc tạo phương án mesh khác.

---

## 17. Checklist thực hành

### Kích thước và bố cục

* [ ] Plane có chiều rộng khoảng 4 m.
* [ ] Tường có chiều cao khoảng 3 m.
* [ ] Tường vừa với khoảng cách giữa hai cột.
* [ ] Phần trên và dưới có các khối đá dài.
* [ ] Khu vực giữa được chia thành hai hàng đá.

### Chi tiết hình học

* [ ] Đã tạo gờ phía trên và phía dưới.
* [ ] Đã cắt các viên đá bằng Knife Tool.
* [ ] Các đường chia viên đá có độ lệch tự nhiên.
* [ ] Đã sử dụng Inset Individual Faces.
* [ ] Các viên đá được đẩy nhẹ ra phía trước.
* [ ] Không có mặt bị chồng lấn sau Inset.

### Tạo phong cách đá cũ

* [ ] Đã Randomize nhẹ các vertex.
* [ ] Một số góc được Vertex Bevel.
* [ ] Một số cạnh có rãnh khuyết.
* [ ] Các chi tiết không lặp lại quá đều.
* [ ] Silhouette của tường vẫn rõ ràng.

### Tối ưu

* [ ] Đã bật Statistics để kiểm tra số triangle.
* [ ] Các mặt hai đầu bị cột che đã được xóa.
* [ ] Không có vertex trùng hoặc geometry dư thừa.
* [ ] Các cạnh ngoài vẫn phù hợp để ghép modular.
* [ ] Đã kiểm tra mesh từ nhiều góc nhìn.

### Hoàn tất

* [ ] Đã hiện lại hai cột để kiểm tra độ vừa khít.
* [ ] Không xuất hiện khe hở giữa cột và tường.
* [ ] Không có hiện tượng nhấp nháy hoặc mặt chồng nhau.
* [ ] Đã lưu file trước khi chuyển sang bài tiếp theo.

---

## 18. Tóm tắt

Trong bài học này, bức tường được dựng từ một **Plane 4 m × 3 m** thay vì ghép nhiều Cube riêng lẻ. Phương pháp này sử dụng ít polygon hơn vì chỉ tạo geometry ở những phần thực sự cần nhìn thấy.

Quy trình chính gồm:

1. Tạo và đặt Plane giữa hai cột.
2. Chia tường thành các hàng đá lớn và khu vực gạch ở giữa.
3. Extrude phần trên, phần dưới và các gờ trang trí.
4. Xóa các mặt hai đầu bị cột che.
5. Dùng Knife Tool để chia khu vực giữa thành từng viên đá.
6. Inset từng mặt riêng biệt và đẩy các viên đá ra phía trước.
7. Randomize nhẹ để phá vỡ sự hoàn hảo.
8. Bevel một số vertex và tạo notch trên các cạnh đá.
9. Kiểm tra topology, số triangle và lưu file.

Bài học không chỉ hướng dẫn dựng một module tường đá mà còn giới thiệu tư duy tối ưu quan trọng trong game art:

> Chỉ tạo geometry ở những vị trí thực sự ảnh hưởng đến hình ảnh, silhouette hoặc trải nghiệm của người chơi.
