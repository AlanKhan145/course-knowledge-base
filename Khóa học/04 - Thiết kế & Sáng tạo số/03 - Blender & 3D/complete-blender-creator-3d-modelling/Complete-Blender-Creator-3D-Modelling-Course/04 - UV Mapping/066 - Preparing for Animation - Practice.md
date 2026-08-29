# 066 — Preparing for Animation

| Thuộc tính       | Nội dung                                                |
| ---------------- | ------------------------------------------------------- |
| **Module**       | Module 04 — UV Mapping                                  |
| **Bài học**      | Preparing for Animation                                 |
| **Thời lượng**   | 9:16                                                    |
| **Chủ đề chính** | Chuẩn bị controller và hệ thống parenting cho animation |

---

## 1. Mục tiêu bài học

Sau bài học này, người học có thể:

* Bật lại **Gizmos** và **Viewport Overlays** để dễ quan sát tọa độ, lưới và các object đang được chọn.
* Điều chỉnh màu vật liệu của cockpit và phần đầu cánh quạt.
* Hiểu chức năng **On Cage** trong modifier.
* Gán nhiều vật liệu cho các mặt khác nhau của cùng một object bằng **Material Slots**.
* Tạo **Empty** làm controller cho toàn bộ máy bay.
* Thiết lập hệ thống **Parent – Child** để điều khiển nhiều object cùng lúc.
* Tạo controller riêng cho cánh quạt để cánh quạt có thể quay độc lập.
* Xây dựng cấu trúc parenting nhiều tầng.
* Đặt tên object và tổ chức chúng trong Collection để chuẩn bị cho animation.

---

## 2. Chuẩn bị giao diện làm việc

Trước khi tiếp tục, bật lại hai thành phần hỗ trợ quan sát trong viewport:

* **Gizmos**: hiển thị hệ tọa độ và các công cụ Move, Rotate, Scale.
* **Viewport Overlays**: hiển thị lưới, đường viền object được chọn, origin và các thông tin phụ trợ.

Các tùy chọn này nằm ở góc trên bên phải của 3D Viewport.

Việc bật Gizmos và Overlays giúp dễ dàng:

* Nhận biết object đang được chọn.
* Xác định hướng của các trục `X`, `Y`, `Z`.
* Đặt controller chính xác vào tâm máy bay.
* Kiểm tra quan hệ giữa các bộ phận.

---

## 3. Điều chỉnh vật liệu cockpit

Cockpit ban đầu chưa đủ tối so với hình ảnh tham chiếu.

Quy trình thực hiện:

1. Chọn object cockpit.
2. Mở **Material Properties**.
3. Chọn vật liệu đang sử dụng.
4. Giảm độ sáng của **Base Color**.
5. Quan sát kết quả trong **Material Preview**.

Màu cockpit tối hơn giúp phần kính buồng lái nổi bật và gần với thiết kế của máy bay Spitfire hơn.

---

## 4. Sử dụng On Cage trong Solidify Modifier

Cánh quạt đang sử dụng **Solidify Modifier** để tạo độ dày từ một mặt phẳng ban đầu.

### 4.1. Vấn đề khi chỉnh sửa

Khi chuyển sang Edit Mode, phần hình học thực của object chỉ gồm các mặt ban đầu. Những mặt được tạo bởi Solidify Modifier chưa phải là hình học thật.

Vì vậy, người dùng có thể gặp khó khăn khi:

* Chọn mặt.
* Nhìn thấy mặt gốc.
* Phân biệt mặt trước và mặt sau.
* Chỉnh sửa object trong Material Preview.

Có thể bật **X-Ray Mode** để nhìn xuyên object, nhưng điều này làm vật liệu khó quan sát hơn.

---

### 4.2. Tham số Offset

Trong Solidify Modifier, tham số **Offset** quyết định độ dày được tạo về phía nào so với bề mặt gốc.

| Giá trị Offset | Kết quả                                     |
| -------------: | ------------------------------------------- |
|           `-1` | Độ dày được tạo hoàn toàn về một phía       |
|            `0` | Độ dày trải đều sang hai phía               |
|            `1` | Độ dày được tạo hoàn toàn về phía ngược lại |

Thay đổi Offset có thể giúp nhìn thấy mặt gốc dễ hơn, nhưng không phải lúc nào cũng phù hợp với hình dạng mong muốn.

---

### 4.3. On Cage

Nút **On Cage** cho phép hiển thị lưới chỉnh sửa gần giống với kết quả sau khi modifier được áp dụng.

Khi bật On Cage:

* Các vertex, edge và face có vẻ nằm trên bề mặt sau modifier.
* Có thể chọn và chỉnh sửa các mặt dễ dàng hơn.
* Vẫn giữ modifier ở trạng thái chưa Apply.
* Một mặt gốc có thể đại diện cho nhiều mặt được modifier tạo ra.

> **Lưu ý:** Những mặt do modifier tạo ra chưa phải là hình học độc lập. Khi chọn một mặt gốc, toàn bộ phần hình học được sinh ra từ mặt đó có thể cùng bị ảnh hưởng.

---

## 5. Tạo đầu cánh quạt màu vàng bằng Material Slots

Trong hình tham chiếu, phần đầu mỗi cánh quạt có màu vàng. Cách đơn giản nhất để tạo chi tiết này là sử dụng **Material Slots**.

Không cần UV unwrap lại toàn bộ cánh quạt.

---

### 5.1. Quy trình gán vật liệu

1. Chọn object cánh quạt.
2. Chuyển sang **Edit Mode** bằng `Tab`.
3. Chuyển sang chế độ chọn mặt.
4. Chọn mặt ở đầu cánh quạt.
5. Mở **Material Properties**.
6. Nhấn dấu `+` để thêm Material Slot mới.
7. Nhấn **New** để tạo vật liệu mới.
8. Đặt tên vật liệu là `Yellow`.
9. Nhấn **Assign** để gán vật liệu cho mặt đang chọn.
10. Thay đổi Base Color thành màu vàng.

Nếu Material Slot chưa có vật liệu, phần mặt được gán có thể tạm thời hiển thị màu trắng.

---

### 5.2. Lấy màu từ ảnh tham chiếu

Để màu vàng khớp với hình ảnh Spitfire:

1. Nhấn vào ô **Base Color**.
2. Chọn công cụ **Eyedropper**.
3. Di chuyển chuột đến vùng màu vàng trong ảnh tham chiếu.
4. Nhấn để lấy mẫu màu.

Phương pháp này giúp màu vật liệu gần giống hình tham chiếu hơn so với chọn màu thủ công.

---

## 6. Vì sao cần controller trước khi animate?

Máy bay hiện tại được cấu tạo từ nhiều object riêng biệt:

* Thân máy bay.
* Cockpit.
* Trục cánh quạt.
* Các cánh quạt.
* Những chi tiết phụ khác.

Nếu animate trực tiếp, mỗi lần di chuyển máy bay phải chọn tất cả các object. Điều này dễ dẫn đến:

* Bỏ sót object.
* Một bộ phận không di chuyển theo.
* Khó chỉnh sửa keyframe.
* Khó xoay máy bay quanh một tâm thống nhất.

Giải pháp là tạo một **Empty** làm controller chính.

---

## 7. Empty là gì?

**Empty** là một object không có hình học và không xuất hiện trong hình render.

Empty thường được sử dụng để:

* Điều khiển nhiều object.
* Làm điểm cha trong hệ thống parenting.
* Làm tâm xoay.
* Tổ chức hệ thống rig đơn giản.
* Tạo target cho constraint.
* Điều khiển camera hoặc ánh sáng.

Các dạng hiển thị phổ biến của Empty gồm:

* Plain Axes.
* Arrows.
* Single Arrow.
* Circle.
* Cube.
* Sphere.
* Cone.
* Image.

Hình dạng Empty chỉ ảnh hưởng đến cách hiển thị trong viewport, không thay đổi chức năng của nó.

---

## 8. Tạo controller chính cho máy bay

### 8.1. Thêm Empty

1. Chuyển sang góc nhìn bên bằng `Numpad 3`.
2. Nhấn:

```text
Shift + A → Empty → Plain Axes
```

3. Di chuyển Empty vào giữa máy bay.
4. Chuyển sang góc nhìn trước để kiểm tra vị trí trên các trục còn lại.

Controller nên được đặt gần tâm máy bay để việc xoay và nghiêng máy bay trông tự nhiên.

---

### 8.2. Đưa Empty về tâm thế giới

Nếu máy bay đã được đặt cân đối quanh tâm thế giới, có thể đặt Empty tại tọa độ:

```text
Location X = 0
Location Y = 0
Location Z = 0
```

Thao tác:

1. Nhấn `N` để mở Sidebar.
2. Chọn tab **Item**.
3. Trong phần Location, đặt cả ba giá trị thành `0`.

Đặt controller tại vị trí hợp lý đặc biệt quan trọng khi cần:

* Xoay máy bay.
* Nghiêng cánh.
* Thực hiện động tác bank.
* Chuyển hướng máy bay trong không gian.

---

### 8.3. Đặt tên controller

Đổi tên Empty thành:

```text
Plane Controller
```

Hoặc sử dụng quy ước tên rõ ràng hơn:

```text
CTRL_Plane
```

Tiền tố `CTRL_` giúp nhận biết nhanh đây là object dùng để điều khiển animation.

---

## 9. Tổ chức máy bay trong Collection

Trước khi tạo parenting, nên đặt toàn bộ object máy bay vào một Collection riêng.

Quy trình:

1. Chọn tất cả object thuộc máy bay.
2. Nhấn `M`.
3. Chọn **New Collection**.
4. Đặt tên Collection là:

```text
Plane
```

Collection giúp:

* Giữ Outliner gọn gàng.
* Ẩn hoặc hiện toàn bộ máy bay.
* Tách máy bay khỏi các object khác trong scene.
* Quản lý scene dễ hơn khi thêm môi trường, camera và ánh sáng.

---

## 10. Parenting toàn bộ máy bay vào controller chính

### 10.1. Khái niệm Parent – Child

Trong hệ thống parenting:

* **Parent** là object cha.
* **Child** là object con.
* Khi parent di chuyển, xoay hoặc scale, child sẽ đi theo.
* Child vẫn có thể được chỉnh sửa độc lập.

Trong bài học:

* Empty `Plane Controller` là parent.
* Thân máy bay, cockpit và các chi tiết là child.

---

### 10.2. Thứ tự chọn object

Thứ tự chọn rất quan trọng:

1. Chọn tất cả object muốn làm child.
2. Giữ `Shift`.
3. Chọn controller sau cùng.

Object được chọn cuối cùng sẽ trở thành **Active Object** và được dùng làm parent.

Active Object thường có đường viền màu sáng hơn các object còn lại.

---

### 10.3. Tạo parenting

Nhấn:

```text
Ctrl + P → Object
```

Hoặc sử dụng menu:

```text
Object → Parent → Object
```

Sau khi parenting, chọn riêng `Plane Controller` và thử:

```text
G
```

Toàn bộ máy bay phải di chuyển cùng controller.

Có thể thử xoay máy bay:

```text
R → Y
```

Tùy theo hướng model, trục xoay thực tế có thể khác.

---

## 11. Child vẫn có thể di chuyển độc lập

Parenting không hợp nhất các object thành một mesh.

Sau khi parent:

* Controller chính có thể điều khiển toàn bộ máy bay.
* Từng bộ phận vẫn có thể được chọn riêng.
* Có thể chỉnh vị trí cockpit hoặc cánh quạt.
* Có thể sửa vật liệu và hình học riêng.
* Có thể tạo animation riêng cho từng bộ phận.

Ví dụ, có thể di chuyển cánh quạt về phía sau để đặt đúng vị trí mà không làm thay đổi vị trí của toàn bộ máy bay.

Khi controller chính di chuyển, cánh quạt vẫn đi theo vì nó là child.

---

## 12. Điều chỉnh vị trí và vật liệu phần đầu máy bay

Sau khi kiểm tra model, cánh quạt được phát hiện đang nằm quá sâu vào phần trục phía trước.

Cách chỉnh:

1. Chọn các object thuộc cánh quạt.
2. Chuyển sang góc nhìn bên.
3. Nhấn `G`.
4. Khóa theo trục phù hợp, ví dụ:

```text
G → Y
```

5. Di chuyển cánh quạt về đúng vị trí.

Phần chóp phía trước của máy bay cũng được đổi sang màu tối, có cảm giác kim loại hơn để gần với hình tham chiếu.

---

## 13. Tạo controller riêng cho cánh quạt

Nếu các cánh quạt vẫn là nhiều object riêng biệt, việc quay chúng cùng lúc sẽ bất tiện.

Giải pháp là tạo một Empty thứ hai:

```text
Propeller Controller
```

Controller này sẽ chịu trách nhiệm điều khiển riêng cụm cánh quạt.

---

### 13.1. Đặt 3D Cursor vào tâm cánh quạt

Chọn phần trục chính nằm giữa cánh quạt, sau đó nhấn:

```text
Shift + S → Cursor to Selected
```

3D Cursor sẽ được đặt vào tâm của object đang chọn.

Vị trí này sẽ trở thành tâm của Empty mới và cũng là tâm quay của cánh quạt.

---

### 13.2. Thêm Empty cho cánh quạt

Nhấn:

```text
Shift + A → Empty → Circle
```

Có thể chọn loại Empty khác, nhưng sử dụng Circle giúp dễ phân biệt với controller chính.

Sau đó:

* Scale Empty nhỏ lại nếu cần.
* Kiểm tra Empty nằm đúng tâm trục cánh quạt.
* Đổi tên thành:

```text
Propeller Controller
```

Hoặc:

```text
CTRL_Propeller
```

---

## 14. Parent các bộ phận cánh quạt vào Propeller Controller

Thực hiện theo thứ tự:

1. Chọn tất cả các cánh quạt.
2. Chọn phần trục hoặc các chi tiết cần quay cùng cánh quạt.
3. Giữ `Shift`.
4. Chọn `Propeller Controller` sau cùng.
5. Nhấn:

```text
Ctrl + P → Object
```

Bây giờ, chọn riêng `Propeller Controller` và thử xoay:

```text
R → Y
```

Toàn bộ cụm cánh quạt phải quay quanh cùng một tâm.

> Trục quay có thể là `X`, `Y` hoặc `Z`, tùy theo hướng máy bay được dựng trong scene.

---

## 15. Parenting nhiều tầng

Sau khi các bộ phận cánh quạt được parent vào `Propeller Controller`, chúng không còn trực tiếp là child của `Plane Controller`.

Một object thông thường chỉ có một parent trực tiếp.

Do đó, cần tiếp tục parent `Propeller Controller` vào `Plane Controller`.

Quy trình:

1. Chọn `Propeller Controller`.
2. Giữ `Shift`.
3. Chọn `Plane Controller` sau cùng.
4. Nhấn:

```text
Ctrl + P → Object
```

Kết quả:

* `Plane Controller` điều khiển toàn bộ máy bay.
* `Propeller Controller` đi theo máy bay.
* Các cánh quạt đi theo `Propeller Controller`.
* Cánh quạt vẫn có thể quay độc lập.

---

## 16. Sơ đồ cấu trúc parenting

```text
Plane Controller
│
├── Plane Body
├── Cockpit
├── Các chi tiết thân máy bay
│
└── Propeller Controller
    │
    ├── Propeller Blade 01
    ├── Propeller Blade 02
    ├── Propeller Blade 03
    └── Propeller Hub
```

Quan hệ chuyển động:

```text
Di chuyển Plane Controller
        │
        ▼
Toàn bộ máy bay di chuyển
        │
        ├── Thân máy bay di chuyển
        ├── Cockpit di chuyển
        └── Propeller Controller di chuyển
                    │
                    ▼
          Cánh quạt di chuyển theo
```

Khi xoay riêng `Propeller Controller`:

```text
Propeller Controller quay
        │
        ▼
Các cánh quạt quay quanh trục
        │
        └── Thân máy bay không bị xoay theo
```

---

## 17. Nguyên lý của hệ thống parenting nhiều tầng

Có thể hình dung cấu trúc này như sau:

* Controller chính đại diện cho toàn bộ máy bay.
* Controller cánh quạt nằm bên trong hệ thống máy bay.
* Khi máy bay di chuyển, controller cánh quạt cũng di chuyển.
* Khi controller cánh quạt quay, chỉ các object con của nó quay.

Đây là một dạng **hierarchy** hoặc hệ thống phân cấp.

Cấu trúc này có thể mở rộng thêm:

```text
Plane Controller
├── Propeller Controller
├── Left Flap Controller
├── Right Flap Controller
├── Landing Gear Controller
└── Rudder Controller
```

Mỗi controller phụ có thể điều khiển một nhóm chuyển động riêng.

---

## 18. Kiểm tra hệ thống controller

Sau khi hoàn thành parenting, cần thực hiện hai bài kiểm tra.

### Kiểm tra controller chính

1. Chọn `Plane Controller`.
2. Nhấn `G` và di chuyển.
3. Nhấn `R` và xoay.

Kết quả mong muốn:

* Tất cả bộ phận máy bay di chuyển cùng nhau.
* Cánh quạt không bị bỏ lại.
* Không có object nào di chuyển sai hướng.

---

### Kiểm tra controller cánh quạt

1. Chọn `Propeller Controller`.
2. Xoay theo trục cánh quạt.

Kết quả mong muốn:

* Tất cả cánh quạt quay cùng nhau.
* Cánh quạt quay đúng tâm.
* Thân máy bay không quay theo.
* Controller cánh quạt vẫn di chuyển khi controller chính di chuyển.

---

## 19. Phím tắt và công cụ quan trọng

| Phím tắt hoặc công cụ | Chức năng                                          |
| --------------------- | -------------------------------------------------- |
| `Tab`                 | Chuyển giữa Object Mode và Edit Mode               |
| `Numpad 3`            | Chuyển sang góc nhìn bên                           |
| `Shift + A`           | Thêm object mới                                    |
| `Shift + A → Empty`   | Thêm Empty làm controller                          |
| `Shift + S`           | Mở Snap Menu                                       |
| `Cursor to Selected`  | Đưa 3D Cursor đến object hoặc thành phần đang chọn |
| `G`                   | Di chuyển object                                   |
| `R`                   | Xoay object                                        |
| `S`                   | Scale object                                       |
| `R → Y`               | Xoay quanh trục Y                                  |
| `G → Y`               | Di chuyển theo trục Y                              |
| `N`                   | Mở hoặc đóng Sidebar                               |
| `M`                   | Di chuyển object vào Collection                    |
| `Ctrl + P`            | Tạo quan hệ parent                                 |
| `Alt + P`             | Gỡ parent                                          |
| `Shift + Click`       | Chọn thêm object                                   |
| `Eyedropper`          | Lấy mẫu màu từ hình ảnh hoặc giao diện             |
| **On Cage**           | Hiển thị lưới chỉnh sửa theo kết quả modifier      |

---

## 20. Lỗi thường gặp

### 20.1. Chọn sai thứ tự khi parent

**Hiện tượng:** Mesh trở thành parent của controller hoặc cấu trúc Outliner bị ngược.

**Nguyên nhân:** Controller không được chọn cuối cùng.

**Cách khắc phục:**

1. Nhấn `Alt + P` để gỡ parent nếu cần.
2. Chọn child trước.
3. Chọn controller sau cùng.
4. Nhấn `Ctrl + P → Object`.

---

### 20.2. Cánh quạt không đi theo máy bay

**Hiện tượng:** Di chuyển `Plane Controller` nhưng cánh quạt đứng yên.

**Nguyên nhân:** Sau khi parent cánh quạt vào `Propeller Controller`, controller phụ chưa được parent vào controller chính.

**Cách khắc phục:**

```text
Propeller Controller
        ↓ Parent vào
Plane Controller
```

---

### 20.3. Cánh quạt quay lệch tâm

**Nguyên nhân:**

* Propeller Controller không nằm đúng tâm trục.
* 3D Cursor được đặt sai vị trí.
* Empty được thêm trước khi đặt Cursor vào tâm.

**Cách khắc phục:**

1. Chọn phần trục giữa của cánh quạt.
2. Dùng `Shift + S → Cursor to Selected`.
3. Đưa Propeller Controller về vị trí 3D Cursor hoặc tạo lại Empty.

---

### 20.4. Chỉ một cánh quạt quay

**Nguyên nhân:** Không chọn đủ các bộ phận trước khi parent.

**Cách khắc phục:** Kiểm tra danh sách child nằm dưới `Propeller Controller` trong Outliner.

---

### 20.5. Không nhìn thấy mặt khi Edit Mode

**Nguyên nhân:** Solidify Modifier tạo độ dày bao quanh mặt gốc.

**Cách khắc phục:**

* Bật **On Cage**.
* Thay đổi Offset tạm thời.
* Hoặc bật X-Ray khi cần chọn xuyên object.

---

### 20.6. Không gán được màu vàng cho đầu cánh quạt

**Nguyên nhân:**

* Chưa chuyển sang Edit Mode.
* Chưa chọn mặt.
* Chưa nhấn Assign.
* Material Slot mới chưa có vật liệu.

**Cách khắc phục:**

```text
Chọn mặt
→ Thêm Material Slot
→ Tạo vật liệu
→ Nhấn Assign
```

---

### 20.7. Khó chọn controller trong Outliner

**Nguyên nhân:** Object chưa được đổi tên rõ ràng.

Nên dùng quy ước:

```text
CTRL_Plane
CTRL_Propeller
MESH_PlaneBody
MESH_Cockpit
MESH_Propeller_01
```

---

## 21. Quy trình thực hành hoàn chỉnh

### Giai đoạn 1 — Hoàn thiện vật liệu

1. Bật lại Gizmos và Overlays.
2. Làm tối vật liệu cockpit.
3. Kiểm tra Solidify Modifier của cánh quạt.
4. Bật On Cage nếu cần.
5. Chọn phần đầu cánh quạt.
6. Tạo Material Slot mới.
7. Gán vật liệu màu vàng.
8. Dùng Eyedropper lấy màu từ ảnh tham chiếu.

### Giai đoạn 2 — Tạo controller chính

1. Thêm Empty dạng Plain Axes.
2. Đặt Empty vào giữa máy bay.
3. Đặt tên `Plane Controller`.
4. Đổi tên các object còn lại.
5. Di chuyển toàn bộ máy bay vào Collection `Plane`.
6. Parent các object máy bay vào controller chính.
7. Kiểm tra bằng Move và Rotate.

### Giai đoạn 3 — Tạo controller cánh quạt

1. Chọn phần trục chính của cánh quạt.
2. Đưa 3D Cursor đến object đang chọn.
3. Thêm Empty dạng Circle.
4. Đặt tên `Propeller Controller`.
5. Parent tất cả bộ phận cánh quạt vào controller này.
6. Kiểm tra chuyển động quay.

### Giai đoạn 4 — Tạo hierarchy hoàn chỉnh

1. Chọn `Propeller Controller`.
2. Chọn `Plane Controller` sau cùng.
3. Parent controller cánh quạt vào controller chính.
4. Kiểm tra chuyển động toàn bộ máy bay.
5. Kiểm tra chuyển động riêng của cánh quạt.
6. Lưu file Blender.

---

## 22. Checklist thực hành

### Vật liệu

* [ ] Gizmos đã được bật.
* [ ] Viewport Overlays đã được bật.
* [ ] Cockpit đã được làm tối.
* [ ] Đầu cánh quạt đã được gán vật liệu vàng.
* [ ] Màu vàng đã được lấy gần đúng từ ảnh tham chiếu.
* [ ] Biết cách sử dụng On Cage.

### Tổ chức scene

* [ ] Các object đã được đổi tên rõ ràng.
* [ ] Toàn bộ máy bay nằm trong Collection `Plane`.
* [ ] Controller chính nằm gần tâm máy bay.
* [ ] Controller cánh quạt nằm đúng tâm quay.

### Parenting

* [ ] Thân máy bay được parent vào Plane Controller.
* [ ] Cockpit được parent vào Plane Controller.
* [ ] Các cánh quạt được parent vào Propeller Controller.
* [ ] Propeller Controller được parent vào Plane Controller.
* [ ] Di chuyển Plane Controller làm toàn bộ máy bay di chuyển.
* [ ] Xoay Propeller Controller chỉ làm cánh quạt quay.
* [ ] File đã được lưu trước bài học tiếp theo.

---

## 23. Tóm tắt

Bài học tập trung vào việc chuẩn bị cấu trúc máy bay trước khi tạo keyframe animation.

Các kỹ thuật quan trọng gồm:

* Sử dụng **Material Slots** để gán màu vàng riêng cho đầu cánh quạt.
* Sử dụng **On Cage** để chỉnh sửa object đang có modifier dễ dàng hơn.
* Tạo **Plane Controller** bằng Empty để điều khiển toàn bộ máy bay.
* Tạo **Propeller Controller** để điều khiển cánh quạt độc lập.
* Xây dựng parenting nhiều tầng:

```text
Plane Controller
└── Propeller Controller
    └── Propeller Objects
```

Cấu trúc này cho phép toàn bộ máy bay di chuyển như một khối thống nhất, trong khi cánh quạt vẫn có thể quay độc lập. Đây là nền tảng quan trọng để tạo animation máy bay trong các bài học tiếp theo.

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
