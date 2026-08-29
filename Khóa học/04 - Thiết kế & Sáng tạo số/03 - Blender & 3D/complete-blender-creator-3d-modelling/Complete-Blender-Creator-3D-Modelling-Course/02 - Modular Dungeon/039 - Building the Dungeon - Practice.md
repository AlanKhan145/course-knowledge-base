# 039 — Building the Dungeon

| Thuộc tính             | Nội dung                                                          |
| ---------------------- | ----------------------------------------------------------------- |
| **Module**             | Module 02 — Modular Dungeon                                       |
| **Bài học**            | Building the Dungeon                                              |
| **Thời lượng**         | 11:45                                                             |
| **Chủ đề chính**       | Lắp ráp, điều chỉnh module và render hầm ngục                     |
| **Kỹ thuật trọng tâm** | Collections, Snapping, Linked Duplicate, Make Single User, Camera |

---

## 1. Mục tiêu bài học

Sau bài học này, bạn có thể:

* Tổ chức toàn bộ object trong dungeon bằng **Collections**.
* Ghép các module tường, sàn, cột và cửa thành nhiều phòng, hành lang.
* Sử dụng **Snapping** để module luôn nằm đúng trên lưới.
* Phân biệt bản sao độc lập `Shift + D` và bản sao liên kết `Alt + D`.
* Chuyển một Linked Duplicate thành object độc lập bằng **Make Single User**.
* Chỉnh sửa module để loại bỏ cột hoặc chi tiết bị chồng lấn.
* Phát hiện và xử lý hiện tượng **Z-fighting**.
* Bố trí crate và barrel có độ ngẫu nhiên tự nhiên.
* Quản lý nhiều camera và xác định camera chính.
* Điều chỉnh **Focal Length** và **Clipping** để render nội thất hoặc toàn cảnh dungeon.

---

## 2. Chuẩn bị không gian làm việc

Trước khi tiếp tục xây dungeon, nên dành nhiều diện tích nhất có thể cho 3D Viewport.

### 2.1. Chuyển về Layout Workspace

Chọn workspace:

```text
Layout
```

Sau đó thu nhỏ hoặc đóng những khu vực chưa cần thiết.

### 2.2. Ẩn Sidebar

Nếu Sidebar đang mở bên phải Viewport, nhấn:

```text
N
```

Thao tác này giúp tăng diện tích hiển thị scene.

### 2.3. Loại bỏ Timeline

Nếu chưa cần làm animation, Timeline ở phía dưới có thể được gộp vào 3D Viewport:

1. Đưa chuột đến góc giao giữa hai editor.
2. Khi con trỏ chuyển thành biểu tượng dấu cộng hoặc mũi tên chéo, nhấn và kéo.
3. Chọn hướng gộp Timeline vào 3D Viewport.

Sau khi hoàn tất, 3D Viewport sẽ chiếm phần lớn màn hình.

---

## 3. Tổ chức Scene bằng Collections

Khi dungeon có nhiều module, việc tổ chức Outliner trở nên rất quan trọng.

Các nhóm object có thể được chia như sau:

```text
Dungeon Scene
├── Walls
├── Floors
├── Pillars
├── Doorways
├── Torches
├── Barrels
├── Crates
├── Cameras
└── Spares
```

Cấu trúc không bắt buộc phải giống hoàn toàn bài giảng. Quan trọng nhất là:

* Object cùng loại được đặt chung Collection.
* Collection có tên rõ ràng.
* Có thể nhanh chóng ẩn, hiện hoặc chọn cả nhóm.
* Các module dự phòng không cản trở khu vực đang xây dựng.

---

## 4. Chọn toàn bộ object trong một Collection

Để chọn tất cả object thuộc một Collection:

1. Nhấn `Alt + A` để bỏ chọn toàn bộ object.
2. Trong Outliner, nhấp chuột phải vào Collection.
3. Chọn:

```text
Select Objects
```

Ví dụ, chọn toàn bộ Collection `Pillars`, sau đó di chuyển chúng sang một bên để không cản trở khu vực tường.

```text
G → X
```

Giữ `Ctrl` trong lúc di chuyển để bắt theo lưới nếu Snapping chưa bật thường trực.

---

## 5. Di chuyển module theo lưới

Các module modular cần được đặt chính xác trên grid.

Có hai cách sử dụng Snapping:

### Cách 1: Bật hoặc tắt Snapping

```text
Shift + Tab
```

### Cách 2: Giữ Ctrl khi di chuyển

Trong lúc dùng `G`, giữ `Ctrl` để tạm thời bật snapping.

Nên kiểm tra ở **Top View**:

```text
Numpad 7
```

Top View giúp dễ dàng căn các module theo trục X và Y.

---

## 6. Đưa các object vào Collection

### 6.1. Tạo Collection cho Floor

1. Chọn tất cả floor tile.
2. Nhấn:

```text
M
```

3. Chọn **New Collection**.
4. Đặt tên:

```text
Floors
```

### 6.2. Tạo Collection cho Doorways

Chọn các module cửa và chuyển chúng vào:

```text
Doorways
```

### 6.3. Tạo Collection riêng cho Crate và Barrel

Do crate và barrel sẽ được nhân bản nhiều lần, có thể tạo:

```text
Crates
Barrels
```

Mỗi Collection có thể chứa module gốc và các bản sao của loại prop tương ứng.

---

## 7. Chuẩn bị các module dự phòng

Có hai cách quản lý module để nhân bản:

### Cách 1: Để một bản dự phòng bên cạnh dungeon

```text
Khu vực xây dựng      Khu vực module dự phòng
┌──────────────┐      ┌──────────────────────┐
│   Dungeon    │      │ Wall / Floor / Torch │
└──────────────┘      └──────────────────────┘
```

Ưu điểm:

* Dễ nhìn thấy module có sẵn.
* Có thể nhanh chóng chọn và nhân bản.

### Cách 2: Nhân bản trực tiếp từ dungeon

Bạn cũng có thể chọn một module đang có trong scene và dùng `Alt + D` hoặc `Shift + D`.

Cách này giúp scene gọn hơn nhưng cần cẩn thận không chọn nhầm object.

---

## 8. Tạo hành lang mới

Để mở rộng dungeon, có thể nhân bản tường và sàn tạo thành một hành lang ngắn.

### 8.1. Nhân bản tường

1. Chọn một module tường.
2. Nhấn:

```text
Alt + D
```

3. Di chuyển module đến vị trí mới.
4. Xoay 90 độ:

```text
R → Z → 90
```

Trong Top View, nếu Blender đang xoay đúng theo trục nhìn, đôi khi có thể chỉ cần:

```text
R → 90
```

### 8.2. Nhân bản sàn

Chọn một floor tile và dùng:

```text
Alt + D
```

Đặt hai hoặc nhiều floor tile liên tiếp để tạo hành lang.

### Sơ đồ hành lang cơ bản

```text
Phòng hiện tại
┌───────────────┐
│               │
└───────┬───────┘
        │ Floor
        │ Floor
        │
    ┌───┴───┐
    │ Cửa   │
    └───────┘
```

---

## 9. Hiện tượng hai module chồng lên nhau

Khi đặt doorway cạnh một wall module, có thể xảy ra trường hợp cả hai module đều có cột ở cùng vị trí.

```text
Module A         Module B
   │                │
   └──── Cột ───────┘
          ↑
    Hai mesh chồng nhau
```

Điều này gây ra hiện tượng gọi là **Z-fighting**.

---

## 10. Z-fighting là gì?

Z-fighting xảy ra khi hai bề mặt nằm gần như chính xác tại cùng một vị trí.

GPU không xác định được bề mặt nào nằm trước, vì vậy hình ảnh có thể:

* Nhấp nháy.
* Xuất hiện các mảng sọc.
* Thay đổi màu khi camera di chuyển.
* Gây lỗi trong game engine.
* Làm tăng số polygon không cần thiết.

Trong Material Preview, lỗi đôi khi không rõ ràng, nhưng nó vẫn tồn tại trong geometry.

> Không nên để hai module có những mặt hoặc cột trùng hoàn toàn lên nhau.

---

## 11. Vấn đề khi chỉnh sửa Linked Duplicate

Nếu module được tạo bằng:

```text
Alt + D
```

thì đây là **Linked Duplicate**.

Các object Linked Duplicate có:

* Transform độc lập.
* Vị trí, xoay và scale riêng.
* Nhưng dùng chung Mesh Data.

Điều này có nghĩa là nếu xóa một cột trong Edit Mode, tất cả bản sao liên kết khác cũng bị xóa cột tương ứng.

### So sánh hai kiểu Duplicate

| Thao tác    | Object  | Mesh Data  | Khi sửa Edit Mode                     |
| ----------- | ------- | ---------- | ------------------------------------- |
| `Shift + D` | Độc lập | Độc lập    | Chỉ bản sao bị thay đổi               |
| `Alt + D`   | Độc lập | Dùng chung | Tất cả Linked Duplicate cùng thay đổi |

---

## 12. Chuyển Linked Duplicate thành Single User

Trước khi chỉnh sửa riêng một module được tạo bằng `Alt + D`, cần làm nó thành một object độc lập.

Chọn module rồi vào:

```text
Object
└── Relations
    └── Make Single User
        └── Object & Data
```

Sau thao tác này:

```text
Trước
Wall_A ───┐
          ├── Dùng chung Mesh Data
Wall_B ───┘

Sau Make Single User
Wall_A ───── Mesh_A
Wall_B ───── Mesh_B
```

Hai object không còn dùng chung mesh, vì vậy có thể chỉnh sửa Wall_B mà không ảnh hưởng Wall_A.

---

## 13. Cô lập module bằng Local View

Khi dungeon có nhiều object, việc chỉnh một module cụ thể có thể khó khăn.

Chọn module rồi nhấn:

```text
Numpad /
```

Blender sẽ chuyển sang **Local View**, chỉ hiển thị object đang chọn.

Nhấn lại `Numpad /` để trở về toàn bộ scene.

Local View hữu ích khi:

* Xóa một cột khỏi doorway.
* Chỉnh geometry của wall module.
* Chọn phần mesh nhỏ mà không bị object khác che.
* Kiểm tra module riêng biệt.

---

## 14. Xóa cột khỏi Doorway Module

Sau khi chuyển module thành Single User:

1. Nhấn `Numpad /` để vào Local View.
2. Nhấn `Tab` để vào Edit Mode.
3. Bỏ chọn toàn bộ:

```text
Alt + A
```

4. Đưa chuột lên phần cột cần xóa.
5. Nhấn:

```text
L
```

`L` chọn toàn bộ geometry liên kết dưới vị trí con trỏ.

6. Nhấn:

```text
X
```

7. Chọn:

```text
Faces
```

8. Nhấn `Tab` trở về Object Mode.
9. Nhấn `Numpad /` để thoát Local View.

Kết quả là doorway không còn cột bị chồng lên module bên cạnh.

---

## 15. Tạo Wall Module không có cột

Trong một số bố cục, bạn cũng cần một đoạn tường không có cột ở hai đầu.

Quy trình tương tự:

1. Chọn wall module gốc.
2. Nhấn `Shift + D` để tạo bản sao độc lập hoặc dùng `Alt + D` rồi Make Single User.
3. Di chuyển module ra khu vực chỉnh sửa.
4. Vào Local View.
5. Vào Edit Mode.
6. Đưa chuột lên cột.
7. Nhấn `L`.
8. Nhấn `X → Faces`.
9. Trở lại Object Mode.

Bạn sẽ có thêm một biến thể module:

```text
Wall Modules
├── Wall có hai cột
├── Wall có một cột
└── Wall không có cột
```

---

## 16. Tư duy điều chỉnh Modular Design

Module không phải lúc nào cũng ghép hoàn hảo trong mọi trường hợp.

Trong quá trình xây dựng, có thể cần:

* Xóa một cột.
* Thêm một cột.
* Thay panel tường.
* Rút ngắn chiều dài phòng.
* Di chuyển floor tile.
* Tạo doorway mới.
* Tạo góc tường mới.
* Điều chỉnh module để tránh overlap.

### Nguyên tắc

```text
Module có sẵn
      ↓
Đặt vào dungeon
      ↓
Kiểm tra khoảng trống và giao nhau
      ↓
Phù hợp?
 ┌────┴────┐
Có        Không
 │           │
Dùng       Tạo biến thể module
ngay       hoặc chỉnh geometry
```

Một bộ modular kit tốt thường có nhiều biến thể nhỏ để xử lý các trường hợp đặc biệt.

---

## 17. Nhân bản một căn phòng

Để tạo nhanh một căn phòng mới:

1. Chuyển sang Top View.
2. Dùng `B` để Box Select toàn bộ tường, sàn và prop của phòng.
3. Nhấn:

```text
Shift + D
```

hoặc:

```text
Alt + D
```

4. Di chuyển bản sao đến vị trí mới.
5. Xóa những tường không cần thiết.
6. Thay thế các module bị thừa cột.
7. Điều chỉnh floor tile để hai phòng không giống hoàn toàn.

### Khi nào dùng Shift + D?

Dùng `Shift + D` khi căn phòng mới có khả năng được chỉnh sửa nhiều.

### Khi nào dùng Alt + D?

Dùng `Alt + D` khi muốn các module cùng loại tiếp tục chia sẻ mesh, giúp giảm dữ liệu và đồng bộ thay đổi.

---

## 18. Thay đổi kích thước căn phòng

Một phòng được nhân bản không nhất thiết phải giữ nguyên kích thước.

Ví dụ, để làm phòng ngắn hơn:

1. Xóa một số floor tile.
2. Xóa module tường tương ứng.
3. Chọn tường cuối phòng.
4. Di chuyển nó vào gần hơn:

```text
G → Y
```

Sơ đồ:

```text
Phòng dài
┌──────────────────────┐
│  Floor Floor Floor   │
└──────────────────────┘

Xóa một phần
┌───────────────┐
│ Floor  Floor  │
└───────────────┘
```

Việc thay đổi kích thước giúp dungeon bớt lặp lại và thú vị hơn.

---

## 19. Di chuyển Torch vào phòng mới

Torch có thể được di chuyển hoặc nhân bản đến các vị trí mới.

Quy trình:

1. Chọn torch.
2. Chuyển sang Top View.
3. Nhấn:

```text
G
```

4. Di chuyển torch sát tường.
5. Kiểm tra trong Rendered View để đảm bảo ánh sáng phù hợp.

Torch không chỉ là prop trang trí mà còn quyết định ánh sáng và điểm nhìn trong scene.

---

## 20. Kiểm tra dungeon trong Rendered View

Sau khi hoàn thành bố cục cơ bản, chuyển sang Rendered View:

```text
Z → Rendered
```

Kiểm tra:

* Có khu vực nào quá tối không?
* Torch có nằm đúng trên tường không?
* Có module nào xuyên nhau không?
* Có khe hở giữa sàn và tường không?
* Các phòng có đủ khác biệt không?
* Ánh sáng có dẫn mắt người xem qua hành lang không?

---

## 21. Tạo nhóm Crate có biến thể

Một crate đơn lẻ có thể được nhân bản thành một cụm đồ vật.

### 21.1. Tắt Snapping

Khi bố trí prop, không nhất thiết phải giữ mọi object tuyệt đối theo grid.

Tắt Snapping:

```text
Shift + Tab
```

Điều này giúp tạo cảm giác tự nhiên hơn.

### 21.2. Nhân bản và xoay Crate

1. Chọn crate.
2. Nhấn:

```text
Alt + D
```

3. Di chuyển nhẹ theo trục X hoặc Y.
4. Xoay:

```text
R → Z → 90
```

hoặc:

```text
R → Z → 180
```

5. Di chuyển crate lên trên để xếp chồng:

```text
G → Z
```

### Sơ đồ cụm crate

```text
        ┌───────┐
        │ Crate │
┌───────┴───────┐
│ Crate │ Crate │
└───────┴───────┘
```

Không nên để mọi crate có cùng:

* Hướng xoay.
* Khoảng cách.
* Chiều cao.
* Cách xếp chồng.

Một chút không đồng đều giúp scene tự nhiên hơn.

---

## 22. Có cần Join các Crate không?

Bạn có thể chọn toàn bộ crate và nhấn:

```text
Ctrl + J
```

để tạo thành một object duy nhất.

Tuy nhiên, điều này không bắt buộc.

### Giữ crate riêng biệt

Ưu điểm:

* Dễ thay đổi từng crate.
* Dễ xóa bớt.
* Dễ tạo nhiều biến thể.
* Dễ thay đổi vị trí và góc xoay.

### Join thành module

Ưu điểm:

* Dễ chọn và di chuyển cả cụm.
* Thuận tiện nếu cụm crate được tái sử dụng nhiều lần.

Trong bài học, việc giữ riêng từng crate giúp dễ thay đổi cụm prop sau khi nhân bản.

---

## 23. Bố trí Barrel

Barrel có thể được xử lý tương tự crate:

1. Nhân bản bằng `Alt + D`.
2. Di chuyển theo X hoặc Y.
3. Xoay quanh trục Z.
4. Xếp một số barrel gần nhau.
5. Đặt các cụm barrel vào nhiều phòng.
6. Xóa bớt một số barrel ở mỗi cụm để tạo biến thể.

Ví dụ:

```text
Cụm A              Cụm B
○ ○ ○               ○ ○
  ○                 ○
```

Hai cụm dùng cùng module nhưng có bố cục khác nhau nên không tạo cảm giác copy-paste rõ rệt.

---

## 24. Nguyên tắc rải Props

Props như barrel và crate nên được dùng để:

* Lấp khoảng trống.
* Tạo điểm tập trung.
* Dẫn hướng người xem.
* Che bớt góc trống.
* Gợi ý câu chuyện của môi trường.
* Làm các phòng khác nhau.

Không nên rải prop hoàn toàn ngẫu nhiên. Có thể đặt chúng theo nhóm có mục đích:

```text
Crate gần cửa
→ Có thể là khu vực lưu trữ hoặc vận chuyển

Barrel sát tường
→ Không cản đường đi

Crate chồng cao
→ Tạo silhouette và chiều cao

Khoảng trống giữa phòng
→ Giữ lối di chuyển rõ ràng
```

---

## 25. Quản lý nhiều Camera

Trong lúc nhân bản một phòng, có thể vô tình nhân bản cả camera.

Nhấn:

```text
Numpad 0
```

để xem qua camera chính đang hoạt động.

Camera chính thường được biểu thị bằng dấu hiệu đặc biệt trong scene hoặc trong Outliner.

### Chuyển camera đang hoạt động

Chọn camera muốn sử dụng rồi nhấn:

```text
Ctrl + Numpad 0
```

Camera được chọn sẽ trở thành **Active Camera** của scene.

Khi nhấn `F12`, Blender render từ Active Camera.

### Nếu xóa camera hiện tại

Nếu camera đang hoạt động bị xóa:

* Blender thoát khỏi Camera View.
* Có thể chọn camera khác.
* Nhấn `Ctrl + Numpad 0` để đặt camera đó làm camera chính.

---

## 26. Khóa Camera theo góc nhìn

Để điều khiển camera giống như đang điều hướng viewport:

1. Nhấn `Numpad 0` vào Camera View.
2. Nhấn `N` để mở Sidebar.
3. Chọn tab **View**.
4. Bật:

```text
Lock Camera to View
```

5. Dùng các thao tác điều hướng viewport để căn camera.
6. Khi hoàn tất, tắt **Lock Camera to View** để tránh vô tình di chuyển camera.

---

## 27. Focal Length là gì?

Trong Camera Data Properties, tham số **Focal Length** quyết định góc nhìn của camera.

Đơn vị là millimet.

### Focal Length thấp

Ví dụ:

```text
20–25 mm
```

Đặc điểm:

* Góc nhìn rộng.
* Nhìn thấy nhiều không gian nội thất.
* Tăng cảm giác chiều sâu.
* Các vật thể gần mép ảnh có thể bị kéo giãn.
* Phù hợp với ảnh bên trong phòng và hành lang.

### Focal Length cao

Ví dụ:

```text
85–100 mm
```

Đặc điểm:

* Góc nhìn hẹp.
* Giảm méo phối cảnh.
* Các lớp không gian trông gần nhau hơn.
* Tạo cảm giác gần giống Orthographic.
* Phù hợp với ảnh toàn cảnh nhìn từ xa.

### Sơ đồ Focal Length

```text
Focal Length thấp
20–25 mm
      ↓
Góc rộng
Phối cảnh mạnh
Phù hợp nội thất

Focal Length cao
85–100 mm
      ↓
Góc hẹp
Phối cảnh phẳng hơn
Phù hợp toàn cảnh
```

---

## 28. Thiết lập camera cho cảnh nội thất

Khi camera nằm bên trong dungeon, nên bắt đầu với:

```text
Focal Length: khoảng 25 mm
```

Có thể giảm xuống khoảng `20 mm` nếu căn phòng quá nhỏ và cần nhìn thấy nhiều hơn.

Tuy nhiên, nếu focal length quá thấp:

* Cột gần mép ảnh bị kéo dài.
* Tường bị cong cảm giác.
* Góc phòng trông quá sâu.
* Scene có thể giống ảnh qua ống kính mắt cá.

Khoảng `25 mm` thường là điểm cân bằng tốt cho dungeon.

---

## 29. Thiết lập camera cho ảnh toàn cảnh

Khi camera ở xa và cần chụp toàn bộ dungeon:

* Dùng focal length cao hơn.
* Có thể thử `85 mm` hoặc `100 mm`.
* Di chuyển camera lùi xa để đưa toàn scene vào khung hình.

Cách này tạo hình ảnh có phối cảnh nhẹ hơn, gần với bản vẽ kiến trúc hoặc orthographic nhưng vẫn giữ camera ở chế độ Perspective.

> Thường dễ điều khiển hơn việc chuyển camera trực tiếp sang Orthographic.

---

## 30. Camera Clipping

Camera chỉ hiển thị object nằm trong một khoảng cách nhất định.

Hai giá trị quan trọng:

| Thuộc tính     | Chức năng                                    |
| -------------- | -------------------------------------------- |
| **Clip Start** | Khoảng cách gần nhất camera có thể nhìn thấy |
| **Clip End**   | Khoảng cách xa nhất camera có thể nhìn thấy  |

Nếu dungeon biến mất khi camera lùi quá xa, nguyên nhân thường là **Clip End** quá thấp.

Có thể tăng:

```text
Clip End: 1000 m
```

hoặc giá trị phù hợp với kích thước scene.

---

## 31. Viewport Clipping

Viewport cũng có thiết lập clipping riêng với camera.

Nếu các object biến mất khi zoom ra xa trong 3D Viewport:

1. Nhấn `N`.
2. Mở tab **View**.
3. Tìm phần:

```text
Clip Start
Clip End
```

4. Tăng `Clip End`.

Lưu ý:

```text
Camera Clipping ≠ Viewport Clipping
```

Thay đổi Camera Clip End chỉ ảnh hưởng camera.
Thay đổi Viewport Clip End chỉ ảnh hưởng việc quan sát trong 3D Viewport.

---

## 32. So sánh góc camera nội thất và toàn cảnh

| Loại ảnh          | Vị trí camera       | Focal Length gợi ý |                 Clip End |
| ----------------- | ------------------- | -----------------: | -----------------------: |
| Phòng nhỏ         | Bên trong phòng     |         `20–25 mm` |   Mặc định hoặc tăng nhẹ |
| Hành lang         | Bên trong hành lang |         `25–35 mm` |                 Mặc định |
| Góc kiến trúc     | Góc phòng           |         `25–50 mm` |                 Mặc định |
| Toàn cảnh dungeon | Xa khỏi scene       |        `85–100 mm` | Có thể tăng đến `1000 m` |
| Gần Orthographic  | Xa scene            |   `100 mm` trở lên |   Tăng theo quy mô scene |

Các giá trị chỉ mang tính gợi ý và có thể thay đổi tùy tỷ lệ dungeon.

---

## 33. Quy trình hoàn chỉnh xây Dungeon

```text
Tổ chức Collections
        ↓
Di chuyển module dự phòng ra ngoài
        ↓
Tạo hành lang bằng Wall + Floor
        ↓
Thêm Doorway
        ↓
Phát hiện cột chồng nhau
        ↓
Make Single User
        ↓
Xóa cột thừa
        ↓
Tạo các biến thể Wall/ Doorway
        ↓
Nhân bản phòng
        ↓
Điều chỉnh kích thước và bố cục
        ↓
Di chuyển Torch
        ↓
Rải Crate và Barrel
        ↓
Tạo biến thể vị trí và góc xoay
        ↓
Kiểm tra Rendered View
        ↓
Chọn Active Camera
        ↓
Điều chỉnh Focal Length
        ↓
Điều chỉnh Clipping
        ↓
Render ảnh nội thất và toàn cảnh
        ↓
Lưu file
```

---

## 34. Phím tắt và công cụ liên quan

| Phím tắt / Thao tác       | Chức năng                                         |
| ------------------------- | ------------------------------------------------- |
| `N`                       | Mở hoặc đóng Sidebar                              |
| `Alt + A`                 | Bỏ chọn toàn bộ                                   |
| `M`                       | Chuyển object vào Collection                      |
| `G`                       | Di chuyển object                                  |
| `G`, `X`                  | Di chuyển theo trục X                             |
| `G`, `Y`                  | Di chuyển theo trục Y                             |
| `G`, `Z`                  | Di chuyển theo trục Z                             |
| `R`, `Z`, `90`            | Xoay 90° quanh trục Z                             |
| `Shift + Tab`             | Bật hoặc tắt Snapping                             |
| Giữ `Ctrl` khi di chuyển  | Tạm thời bắt theo lưới                            |
| `Shift + D`               | Tạo bản sao độc lập                               |
| `Alt + D`                 | Tạo Linked Duplicate                              |
| `Shift + Z` khi di chuyển | Loại trừ trục Z, chỉ di chuyển trong mặt phẳng XY |
| `B`                       | Box Select                                        |
| `L`                       | Chọn geometry liên kết trong Edit Mode            |
| `X → Faces`               | Xóa các mặt được chọn                             |
| `Numpad 7`                | Top View                                          |
| `Numpad /`                | Bật hoặc tắt Local View                           |
| `Numpad 0`                | Xem qua Active Camera                             |
| `Ctrl + Numpad 0`         | Đặt camera đang chọn làm Active Camera            |
| `Z → Rendered`            | Chuyển sang Rendered View                         |
| `F12`                     | Render ảnh                                        |
| `Ctrl + S`                | Lưu file                                          |

---

## 35. Lưu ý và lỗi thường gặp

### 35.1. Xóa cột làm tất cả module cùng thay đổi

**Nguyên nhân:** Module được tạo bằng `Alt + D` và vẫn dùng chung Mesh Data.

**Cách xử lý:**

```text
Object
→ Relations
→ Make Single User
→ Object & Data
```

Sau đó mới vào Edit Mode để xóa cột.

---

### 35.2. Hai cột nhấp nháy tại cùng vị trí

**Nguyên nhân:** Hai mesh chồng hoàn toàn lên nhau, gây Z-fighting.

**Cách xử lý:**

* Xóa một cột.
* Sử dụng module không có cột.
* Di chuyển module để không trùng mặt.
* Kiểm tra trong Solid View và Rendered View.

---

### 35.3. Module không nằm đúng lưới

**Nguyên nhân:**

* Snapping đang tắt.
* Di chuyển tự do bằng chuột.
* Grid size không phù hợp kích thước module.

**Cách xử lý:**

* Bật `Shift + Tab`.
* Giữ `Ctrl` khi di chuyển.
* Kiểm tra ở Top View.
* Nhập giá trị di chuyển chính xác bằng bàn phím.

---

### 35.4. Không chọn được toàn bộ cột trong Edit Mode

**Nguyên nhân:** Cột có thể không phải là một phần geometry liên kết riêng hoặc con trỏ không nằm đúng vị trí.

**Cách xử lý:**

* Bỏ chọn toàn bộ bằng `Alt + A`.
* Đưa chuột trực tiếp lên cột.
* Nhấn `L`.
* Bật X-Ray nếu cần kiểm tra vùng chọn.

---

### 35.5. Dungeon quá giống nhau giữa các phòng

**Nguyên nhân:** Sao chép nguyên căn phòng mà không thay đổi bố cục.

**Cách xử lý:**

* Xóa bớt một số wall hoặc floor tile.
* Di chuyển tường để thay đổi kích thước phòng.
* Thay đổi vị trí torch.
* Xoay crate và barrel.
* Tạo cụm prop có số lượng khác nhau.
* Dùng module tường và doorway khác nhau.

---

### 35.6. Props trông quá đều

**Nguyên nhân:**

* Mọi crate cùng hướng.
* Mọi barrel cùng khoảng cách.
* Snapping vẫn bật khi bố trí prop.
* Các cụm prop hoàn toàn giống nhau.

**Cách xử lý:**

* Tắt Snapping.
* Xoay từng object.
* Thay đổi khoảng cách.
* Xếp chồng một vài object.
* Xóa bớt object trong một số cụm.

---

### 35.7. Render từ camera không mong muốn

**Nguyên nhân:** Scene có nhiều camera và Active Camera đang được đặt sai.

**Cách xử lý:**

1. Chọn camera mong muốn.
2. Nhấn:

```text
Ctrl + Numpad 0
```

3. Nhấn `Numpad 0` để kiểm tra.
4. Render bằng `F12`.

---

### 35.8. Dungeon biến mất khi camera lùi xa

**Nguyên nhân:** Camera Clip End hoặc Viewport Clip End quá thấp.

**Cách xử lý:**

* Tăng Camera Clip End trong Camera Data Properties.
* Tăng Viewport Clip End trong Sidebar.
* Có thể thử giá trị `1000 m` cho scene lớn.

---

### 35.9. Góc nội thất bị méo quá mạnh

**Nguyên nhân:** Focal Length quá thấp.

**Cách xử lý:**

* Tăng từ `15 mm` lên khoảng `20–25 mm`.
* Đưa camera lùi lại nếu còn không gian.
* Tránh đặt camera quá sát cột hoặc tường.

---

## 36. Bài tập thực hành

### Bài tập 1: Tạo hành lang

* Nhân bản wall module.
* Xoay tường 90°.
* Thêm hai floor tile.
* Đặt doorway ở cuối hành lang.
* Xóa cột thừa khỏi doorway.

### Bài tập 2: Tạo biến thể module

Tạo ít nhất ba biến thể:

* Wall có hai cột.
* Wall có một cột.
* Wall không có cột.

Đặt các biến thể vào Collection `Spares` để tái sử dụng.

### Bài tập 3: Tạo phòng thứ hai

* Nhân bản một phòng có sẵn.
* Thay đổi chiều dài hoặc chiều rộng.
* Xóa một số module.
* Thay đổi vị trí torch.
* Kiểm tra không có Z-fighting.

### Bài tập 4: Bố trí props

* Tạo ít nhất hai cụm crate.
* Tạo ít nhất hai cụm barrel.
* Thay đổi số lượng và góc xoay giữa các cụm.
* Không để prop chặn hoàn toàn lối đi.

### Bài tập 5: Render nội thất

* Đặt camera bên trong một phòng.
* Sử dụng Focal Length khoảng `25 mm`.
* Căn góc nhìn có chiều sâu.
* Render một ảnh bằng `F12`.

### Bài tập 6: Render toàn cảnh

* Đưa camera ra xa dungeon.
* Tăng Clip End.
* Đặt Focal Length khoảng `85–100 mm`.
* Render toàn bộ bố cục dungeon.

---

## 37. Checklist thực hành

### Tổ chức scene

* [ ] Đã chia object vào các Collections hợp lý.
* [ ] Đã đặt floor tile vào Collection riêng.
* [ ] Đã tạo Collection cho doorways.
* [ ] Đã tạo Collection cho crate và barrel.
* [ ] Đã thu gọn các Collection chưa sử dụng.

### Lắp ráp dungeon

* [ ] Đã tạo ít nhất một hành lang mới.
* [ ] Đã thêm doorway ở cuối hành lang.
* [ ] Đã sử dụng Snapping khi ghép module.
* [ ] Đã kiểm tra module trong Top View.
* [ ] Không còn khoảng hở lớn giữa các module.

### Điều chỉnh module

* [ ] Đã nhận biết sự khác nhau giữa `Shift + D` và `Alt + D`.
* [ ] Đã sử dụng Make Single User trước khi chỉnh Linked Duplicate.
* [ ] Đã xóa cột thừa khỏi doorway hoặc wall.
* [ ] Không còn bề mặt chồng nhau gây Z-fighting.
* [ ] Đã tạo ít nhất một biến thể wall hoặc doorway.

### Props

* [ ] Đã bố trí crate trong dungeon.
* [ ] Đã bố trí barrel trong dungeon.
* [ ] Đã thay đổi vị trí và góc xoay của prop.
* [ ] Các cụm prop không hoàn toàn giống nhau.
* [ ] Props không chặn lối đi chính.

### Camera và render

* [ ] Đã xác định đúng Active Camera.
* [ ] Đã thử góc camera bên trong phòng.
* [ ] Đã dùng Focal Length thấp cho cảnh nội thất.
* [ ] Đã dùng Focal Length cao cho cảnh toàn cảnh.
* [ ] Đã kiểm tra Camera Clip End.
* [ ] Đã kiểm tra Viewport Clip End.
* [ ] Đã render ít nhất một ảnh nội thất.
* [ ] Đã render ít nhất một ảnh toàn cảnh.
* [ ] Đã lưu file bằng `Ctrl + S`.

---

## 38. Tóm tắt

Bài học hoàn thiện toàn bộ quy trình xây dựng modular dungeon bằng cách kết hợp các module tường, sàn, cột, doorway, torch, crate và barrel thành một scene thống nhất.

Điểm quan trọng nhất không chỉ là nhân bản module, mà còn phải biết **điều chỉnh module theo từng tình huống**. Khi sử dụng `Alt + D`, các object chia sẻ Mesh Data nên cần dùng **Make Single User** trước khi chỉnh sửa riêng. Các chi tiết bị chồng lên nhau phải được loại bỏ để tránh **Z-fighting**.

Sau khi hoàn thiện bố cục, props được bố trí với vị trí và góc xoay khác nhau để giảm cảm giác lặp lại. Cuối cùng, camera được thiết lập theo hai mục đích:

* **Focal Length thấp, khoảng 20–25 mm:** phù hợp với ảnh bên trong phòng.
* **Focal Length cao, khoảng 85–100 mm:** phù hợp với ảnh toàn cảnh từ xa.

Camera và Viewport Clipping cũng cần được điều chỉnh khi dungeon có kích thước lớn. Sau khi render các góc nội thất và toàn cảnh, lưu lại file `.blend` để hoàn tất Module 02 — Modular Dungeon.

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
