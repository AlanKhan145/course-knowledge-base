# 007 — Modeling Tools

| Thuộc tính        | Nội dung                                                         |
| ----------------- | ---------------------------------------------------------------- |
| **Phần**          | 01 — Introduction to Blender                                     |
| **Thời lượng**    | 6:14                                                             |
| **Chủ đề**        | Extrude, Loop Cut, Inset, Bridge, Knife, Merge, Join và Separate |
| **Kỹ năng chính** | Tạo topology mới và biến đổi primitive thành hình dạng phức tạp  |

---

## 1. Mục tiêu bài học

Sau bài này, bạn cần:

* [ ] Biết dùng **Loop Cut** để thêm vòng cạnh mới.
* [ ] Extrude được Face bằng `E`.
* [ ] Hiểu **Extrude Individual Faces** và **Extrude Manifold**.
* [ ] Biết nối hai vùng hình học bằng **Bridge Edge Loops**.
* [ ] Dùng **Inset** để tạo mặt nằm bên trong một Face.
* [ ] Kết nối Vertex bằng `J`.
* [ ] Cắt Mesh bằng **Knife Tool**.
* [ ] Merge nhiều Vertex thành một Vertex.
* [ ] Hiểu **Merge by Distance** để xử lý Vertex trùng/gần nhau.
* [ ] Phân biệt **Merge Geometry** và **Join Objects**.
* [ ] Tách geometry khỏi Object bằng `P`.
* [ ] Kết hợp các công cụ thành workflow modeling thực tế.

---

## File mẫu thực hành Modeling Tools

File mẫu đã được đặt cùng thư mục với bài học:

> [Tải/mở `06+Modeling+tools.blend`](06%2BModeling%2Btools.blend)

Nguồn ban đầu: `C:\Users\Khanh PC\Downloads\06+Modeling+tools.blend`

Vị trí trong khóa học: `01 - Introduction to Blender\06+Modeling+tools.blend`

File này dùng để luyện Loop Cut, Extrude, Inset, Bridge Edge Loops, Knife,
Merge, Join và Separate trong Edit Mode.

### Mở file từ Blender

```text
File
 ↓
Open
 ↓
Chọn 06+Modeling+tools.blend
 ↓
Open Blender File
```

Nếu Blender hỏi có lưu scene hiện tại hay không, hãy xử lý trước khi mở file mẫu.

---

# 2. Tổng quan nhóm Modeling Tools

Các công cụ trong bài này là nền tảng của quá trình dựng hình.

```text
Primitive
   │
   ▼
Loop Cut
   │
   ▼
Inset / Connect / Knife
   │
   ▼
Extrude
   │
   ▼
Bridge / Merge
   │
   ▼
Hoàn thiện topology
```

Một Cube đơn giản có thể được biến thành rất nhiều hình dạng nhờ những công cụ này.

---

# 3. Loop Cut — Thêm vòng cạnh

## Phím tắt

```text
Ctrl + R
```

Loop Cut thêm một **edge loop** chạy liên tục quanh topology của Mesh.

---

## Cách sử dụng

Chọn Cube và vào Edit Mode:

```text
Tab
```

Sau đó:

```text
Ctrl + R
```

Di chuyển chuột lên Mesh.

Blender sẽ hiển thị đường preview màu vàng/tím tùy giao diện.

---

## Hướng Loop Cut

Khi con trỏ nằm gần cạnh ngang:

```text
───────
```

Blender có thể preview vòng cắt theo chiều dọc:

```text
   │
   │
   │
```

Ngược lại, khi hover gần cạnh dọc:

```text
│
│
│
```

Loop Cut có thể chạy theo chiều ngang:

```text
────────
```

Điểm quan trọng là Blender dựa vào **edge loop của topology**, chứ không đơn giản chỉ dựa vào hướng màn hình.

---

# 4. Xác nhận Loop Cut

Sau khi:

```text
Ctrl + R
```

### Click trái lần 1

Tạo Loop Cut.

### Di chuyển chuột

Blender chuyển sang bước:

> **Edge Slide**

Bạn có thể trượt Loop Cut tới vị trí mong muốn.

### Click trái lần 2

Xác nhận vị trí.

Workflow:

```text
Ctrl + R
   ↓
Click
   ↓
Slide
   ↓
Click
```

---

## Đặt Loop Cut chính giữa

Nếu muốn Loop Cut nằm đúng giữa, có thể:

```text
Ctrl + R
↓
Click
↓
Right Click
```

hoặc `Esc` ở bước Edge Slide.

Loop Cut sẽ được đặt ở giữa vòng cạnh.

---

# 5. Loop Cut dùng để làm gì?

Loop Cut thường được dùng để:

* thêm topology;
* tạo vùng để Extrude;
* thêm detail;
* kiểm soát deformation;
* tạo support loop cho Subdivision;
* chia khu vực trước khi modeling.

Ví dụ:

```text
Cube
   ↓
Ctrl + R
   ↓
Thêm edge loop
   ↓
Chọn Face mới
   ↓
G / E / S
   ↓
Thay đổi hình dạng
```

---

# 6. Undo

Nếu thao tác sai:

```text
Ctrl + Z
```

Trong Blender có thể Undo nhiều bước liên tiếp tùy thiết lập Undo Steps.

> Không nên phụ thuộc vào một con số cố định như 62 vì số bước Undo có thể thay đổi trong Preferences và giữa các phiên bản Blender.

---

# 7. Extrude — Đùn hình học

Extrude là một trong những công cụ quan trọng nhất trong Blender.

## Phím tắt

```text
E
```

Extrude tạo **geometry mới** từ vùng đang chọn.

---

## Ví dụ

Chọn một Face:

```text
3
```

Sau đó:

```text
E
```

Kéo chuột.

Ban đầu:

```text
┌───────┐
│       │
│       │
└───────┘
```

Extrude:

```text
┌───────┐─────┐
│       │     │
│       │     │
└───────┘─────┘
```

Blender tạo:

* Vertex mới;
* Edge mới;
* Face mới.

---

# 8. Extrude theo một trục

Có thể khóa Extrude theo trục:

```text
E → X
E → Y
E → Z
```

Ví dụ:

```text
E
↓
Z
↓
1
```

Face được Extrude 1 đơn vị theo Z.

---

# 9. Extrude Individual Faces

Nếu chọn nhiều Face và dùng `E`, các Face thường được Extrude như một vùng liên kết.

Nếu muốn mỗi Face Extrude riêng theo normal của chính nó:

```text
Alt + E
```

sau đó chọn:

```text
Extrude Individual Faces
```

---

## Ví dụ

Có nhiều Face:

```text
┌───┬───┬───┐
│ A │ B │ C │
└───┴───┴───┘
```

Extrude Individual Faces:

```text
 A ↑
 B ↑
 C ↑
```

Mỗi Face được Extrude độc lập theo hướng của mình.

---

# 10. Khi nào dùng Extrude Individual Faces?

Công cụ này hữu ích khi tạo:

* gai;
* panel;
* tile;
* lông/cấu trúc thô;
* các phần nhô riêng biệt;
* pattern hình học.

Ví dụ:

```text
Sphere
   ↓
Select All Faces
   ↓
Alt + E
   ↓
Extrude Individual Faces
   ↓
Bề mặt dạng gai / panel
```

---

# 11. Extrude Manifold

Một tùy chọn khác trong:

```text
Alt + E
```

là:

```text
Extrude Manifold
```

Công cụ này hữu ích khi Extrude vào trong hoặc xuyên qua vùng geometry mà bạn muốn Blender xử lý topology sạch hơn.

---

## Extrude thường và Extrude Manifold

Giả sử bạn Extrude một mặt vào trong.

Extrude thường có thể để lại topology không mong muốn trong một số tình huống:

```text
Face
 ↓
E
 ↓
geometry bên trong có thể chồng / tạo side faces không cần thiết
```

Trong khi:

```text
Alt + E
↓
Extrude Manifold
```

có thể tự xử lý một số mặt giao nhau và giữ kết quả manifold tốt hơn.

---

# 12. Manifold là gì?

Một Mesh **manifold** về cơ bản là Mesh có cấu trúc kín và hợp lý về mặt topology.

Ví dụ với model solid:

```text
Bên ngoài
   │
   ▼
Surface kín
   │
   ▼
Bên trong xác định rõ
```

Các lỗi non-manifold thường bao gồm:

* lỗ hở;
* face bên trong;
* edge chỉ thuộc một Face trong vùng đáng lẽ phải kín;
* geometry chồng;
* Vertex trùng.

Điều này đặc biệt quan trọng khi:

* 3D printing;
* Boolean;
* simulation;
* export;
* game asset.

---

# 13. Bridge Edge Loops

Bridge dùng để tạo Faces nối giữa hai vòng cạnh hoặc hai vùng hình học.

Một cách gọi:

```text
Ctrl + E
```

sau đó:

```text
Bridge Edge Loops
```

---

# 14. Nguyên lý của Bridge

Giả sử có hai edge loop:

```text
Loop A             Loop B

┌──────┐          ┌──────┐
│      │          │      │
└──────┘          └──────┘
```

Sau Bridge:

```text
┌───────────────────────┐
│                       │
└───────────────────────┘
```

Blender tạo Faces nối giữa hai vùng.

---

# 15. Bridge Edge Loops dùng khi nào?

Rất hữu ích khi:

* nối hai phần Mesh;
* nối hai lỗ;
* tạo ống;
* tạo đoạn chuyển tiếp;
* nối thân với chi tiết khác;
* sửa topology sau khi xóa Face.

Ví dụ:

```text
Ring A
   │
   │ Bridge
   ▼
Ring B
```

---

# 16. Điều kiện để Bridge hoạt động tốt

Hai vùng nên:

* là Edge Loop rõ ràng;
* không bị geometry chồng;
* có số lượng Vertex tương thích nếu có thể;
* có hướng topology hợp lý.

Nếu một loop có:

```text
8 Vertex
```

và loop kia có:

```text
8 Vertex
```

Bridge thường rất sạch.

Nếu:

```text
8 Vertex ↔ 13 Vertex
```

Blender vẫn có thể xử lý một số trường hợp nhưng topology có thể phức tạp hơn.

---

# 17. Inset Faces

Inset tạo một Face nhỏ hơn nằm bên trong Face đang chọn.

## Phím tắt

```text
I
```

---

## Ví dụ

Face ban đầu:

```text
┌─────────────┐
│             │
│             │
│             │
└─────────────┘
```

Sau Inset:

```text
┌─────────────┐
│  ┌───────┐  │
│  │       │  │
│  └───────┘  │
└─────────────┘
```

Một khung mới được tạo xung quanh Face trung tâm.

---

# 18. Inset + Extrude

Đây là một combo modeling cực kỳ phổ biến.

```text
Chọn Face
   ↓
I
   ↓
Inset
   ↓
E
   ↓
Extrude vào trong
```

Kết quả có thể tạo:

* cửa;
* cửa sổ;
* hốc;
* panel;
* màn hình;
* khe máy;
* chi tiết hard-surface.

---

# 19. Ví dụ tạo hốc

```text
Face
 ↓
I
 ↓
Tạo khung
 ↓
Chọn Face giữa
 ↓
E
 ↓
Extrude vào trong
```

Sơ đồ:

```text
Trước

┌──────────────┐
│              │
│              │
└──────────────┘


Inset

┌──────────────┐
│  ┌────────┐  │
│  │        │  │
│  └────────┘  │
└──────────────┘


Extrude inward

┌──────────────┐
│  ┌────────┐  │
│  │  HỐC   │  │
│  └────────┘  │
└──────────────┘
```

---

# 20. Connect Vertex Path

Blender cho phép nối trực tiếp các Vertex bằng:

```text
J
```

Tên công cụ:

> **Connect Vertex Path**

---

## Cách sử dụng

Chuyển sang Vertex Select:

```text
1
```

Chọn hai Vertex:

```text
Shift + Click
```

Sau đó:

```text
J
```

Blender tạo Edge đi qua Face giữa hai Vertex.

---

# 21. Ví dụ Connect

Face Quad ban đầu:

```text
A────────B
│        │
│        │
D────────C
```

Chọn:

```text
A + C
```

sau đó:

```text
J
```

Kết quả:

```text
A────────B
│\       │
│ \      │
D───\────C
```

Face được chia thành hai Triangle.

---

# 22. Connect nhiều Vertex

Nếu hai đường Connect cắt nhau, Blender có thể tạo Vertex ở giao điểm.

Ví dụ:

```text
A────────B
│\      /│
│ \    / │
│  \  /  │
│   ●    │
│  / \   │
D────────C
```

Điểm `●` trở thành Vertex mới.

Sau đó có thể chọn Vertex đó và:

```text
G
```

để thay đổi bề mặt.

---

# 23. Knife Tool

Knife cho phép cắt Mesh thủ công.

## Phím tắt

```text
K
```

---

## Cách dùng

Trong Edit Mode:

```text
K
```

Click điểm đầu.

```text
Click
```

Click điểm cuối hoặc thêm nhiều điểm.

```text
Click
```

Sau đó:

```text
Enter
```

để xác nhận.

---

# 24. Knife khác Loop Cut như thế nào?

### Loop Cut

```text
Ctrl + R
```

* theo edge loop;
* thường chạy quanh topology;
* nhanh;
* sạch;
* phù hợp topology dạng Quad.

### Knife

```text
K
```

* cắt tự do;
* chọn chính xác đường cắt;
* không nhất thiết đi quanh Mesh;
* phù hợp chỉnh sửa cục bộ.

So sánh:

| Công cụ         | Đặc điểm                  |
| --------------- | ------------------------- |
| **Loop Cut**    | Tự động theo topology     |
| **Knife**       | Cắt thủ công              |
| **Connect `J`** | Nối các Vertex đã tồn tại |

---

# 25. Merge — Gộp Vertex

Merge dùng để hợp nhiều Vertex thành một Vertex.

## Phím tắt

```text
M
```

---

# 26. Các chế độ Merge phổ biến

Khi chọn nhiều Vertex rồi nhấn:

```text
M
```

Blender cung cấp các tùy chọn như:

| Tùy chọn        | Ý nghĩa                   |
| --------------- | ------------------------- |
| **At Center**   | Gộp về trung tâm          |
| **At Cursor**   | Gộp tại vị trí 3D Cursor  |
| **At First**    | Gộp về Vertex đầu tiên    |
| **At Last**     | Gộp về Vertex cuối cùng   |
| **By Distance** | Gộp Vertex gần/trùng nhau |

---

# 27. Merge At Center

Giả sử có hai Vertex:

```text
A────────────B
```

Chọn cả hai:

```text
M
↓
At Center
```

Kết quả:

```text
      ●
```

Vertex mới nằm ở trung điểm.

---

# 28. Merge At First / At Last

Giả sử chọn:

```text
A → B
```

### At First

```text
M
↓
At First
```

Vertex cuối cùng nằm tại:

```text
A
```

### At Last

```text
M
↓
At Last
```

Vertex cuối cùng nằm tại:

```text
B
```

Điều này rất hữu ích khi cần giữ chính xác vị trí một Vertex.

---

# 29. Merge nhiều Vertex thành một điểm

Ví dụ có bốn Vertex:

```text
A────────B
│        │
│        │
D────────C
```

Chọn tất cả:

```text
M
↓
At Center
```

Kết quả:

```text
    ●
```

Nếu các Vertex thuộc phần đáy của một hình, thao tác này có thể tạo dạng:

```text
     ●
    /|\
   / | \
  /  |  \
```

giống đỉnh của một Pyramid.

---

# 30. Merge by Distance

Đây là công cụ rất quan trọng để dọn Mesh.

Chọn các Vertex:

```text
A
```

sau đó:

```text
M
↓
By Distance
```

Blender sẽ gộp các Vertex nằm gần nhau hơn một khoảng threshold nhất định.

---

# 31. Khi nào dùng Merge by Distance?

Dùng khi:

* có Vertex trùng;
* hai phần Mesh vừa được nối;
* import model từ nguồn khác;
* mirror bị duplicate center Vertex;
* extrude nhầm tạo geometry chồng;
* cleanup topology.

Ví dụ:

```text
●
●   ← 2 Vertex gần như cùng vị trí
```

sau:

```text
Merge by Distance
```

thành:

```text
●
```

---

# 32. Cẩn thận với Merge by Distance

Nếu Distance quá lớn:

```text
Vertex A    Vertex B
    ↓          ↓

●──────────────●
```

Blender có thể gộp cả những Vertex bạn không muốn.

Vì vậy:

> Sau Merge by Distance cần kiểm tra thông báo số Vertex đã được merged.

---

# 33. Join Objects

Một khái niệm khác hoàn toàn với Merge Vertex là:

> **Join Objects**

## Phím tắt

```text
Ctrl + J
```

Thao tác này được thực hiện trong:

```text
Object Mode
```

---

# 34. Ví dụ Join

Có hai Object:

```text
Cube

Sphere
```

Chọn Cube.

Giữ:

```text
Shift
```

chọn Sphere.

Sau đó:

```text
Ctrl + J
```

Kết quả:

```text
1 Object
 ├── Cube geometry
 └── Sphere geometry
```

---

# 35. Join không đồng nghĩa với nối geometry

Đây là một điểm rất quan trọng.

Sau:

```text
Ctrl + J
```

Cube và Sphere thuộc **cùng Object**.

Nhưng topology của chúng vẫn có thể hoàn toàn tách rời:

```text
Object
│
├── Mesh Island A
│
└── Mesh Island B
```

Chúng không tự động được Bridge hoặc Weld với nhau.

---

# 36. Merge và Join khác nhau

| Công cụ    | Chế độ      | Tác dụng                          |
| ---------- | ----------- | --------------------------------- |
| `M`        | Edit Mode   | Gộp Vertex                        |
| `Ctrl + J` | Object Mode | Gộp nhiều Object thành một Object |
| `Bridge`   | Edit Mode   | Tạo Faces nối geometry            |

Đừng nhầm ba khái niệm này.

---

# 37. Separate — Tách Mesh thành Object mới

Nếu muốn làm ngược lại với Join:

```text
P
```

trong:

```text
Edit Mode
```

---

# 38. Separate Menu

Nhấn:

```text
P
```

thường có các tùy chọn:

```text
Selection
By Material
By Loose Parts
```

---

# 39. Separate by Selection

Chọn vùng geometry muốn tách.

Sau đó:

```text
P
↓
Selection
```

Vùng được chọn trở thành Object mới.

Workflow:

```text
Object
   │
   ▼
Tab
   │
   ▼
Select Faces
   │
   ▼
P
   │
   ▼
Selection
   │
   ▼
2 Objects
```

---

# 40. Separate by Loose Parts

Nếu một Object chứa nhiều phần geometry không kết nối nhau:

```text
Object
│
├── Island A
├── Island B
└── Island C
```

dùng:

```text
P
↓
By Loose Parts
```

Kết quả:

```text
Object A

Object B

Object C
```

---

# 41. Khi nào By Loose Parts không hoạt động như mong muốn?

Nếu các phần geometry đã được kết nối thật sự bằng:

* Edge;
* Face;
* Bridge Edge Loops;

thì chúng không còn là **loose parts**.

Ví dụ:

```text
Mesh A
   │
 Bridge
   │
Mesh B
```

được Blender xem là một vùng geometry liên tục.

Lúc này muốn tách chúng cần:

```text
Select vùng mong muốn
↓
P
↓
Selection
```

---

# 42. Separate by Material

Khi Object có nhiều Material Slot, bạn cũng có thể tách geometry dựa trên Material.

```text
P
↓
By Material
```

Công cụ này sẽ hữu ích hơn ở các bài Material sau.

---

# 43. Quy trình Modeling điển hình

Các công cụ trong bài không hoạt động độc lập. Chúng thường được kết hợp.

Ví dụ dựng một chi tiết hard-surface:

```text
Cube
 ↓
Ctrl + R
 ↓
Tạo vùng mới
 ↓
3
 ↓
Chọn Face
 ↓
I
 ↓
Inset
 ↓
E
 ↓
Extrude
 ↓
M
 ↓
Cleanup
```

---

# 44. Bài thực hành — Dựng một hộp có cửa

Mục tiêu:

> Từ một Cube, tạo một hộp có phần cửa/hốc ở mặt trước.

---

## Bước 1 — Tạo Cube

```text
Shift + A
↓
Mesh
↓
Cube
```

---

## Bước 2 — Vào Edit Mode

```text
Tab
```

---

## Bước 3 — Tạo vùng cho cửa

Dùng:

```text
Ctrl + R
```

thêm các Loop Cut cần thiết.

Có thể cần:

* 2 Loop Cut dọc;
* 2 Loop Cut ngang.

Mục tiêu tạo topology tương tự:

```text
┌────┬────────┬────┐
│    │        │    │
├────┼────────┼────┤
│    │  CỬA   │    │
├────┼────────┼────┤
│    │        │    │
└────┴────────┴────┘
```

---

# 45. Tạo khung cửa bằng Inset

Chuyển sang Face Select:

```text
3
```

Chọn Face trung tâm.

Sau đó:

```text
I
```

Inset nhẹ vào trong.

Kết quả:

```text
┌───────────────┐
│               │
│   ┌───────┐   │
│   │       │   │
│   └───────┘   │
│               │
└───────────────┘
```

---

# 46. Tạo hốc bằng Extrude

Chọn Face trung tâm.

```text
E
```

Extrude vào phía trong.

Ví dụ:

```text
E
↓
di chuyển vào trong
```

Bạn đã có:

```text
Khung cửa
    +
Hốc cửa
```

---

# 47. Kiểm tra hướng Extrude

Sau mỗi lần Extrude nên quan sát:

* Face đang chọn;
* hướng di chuyển;
* Normal;
* side faces vừa được tạo;
* geometry có bị chồng hay không.

Một lỗi người mới hay gặp:

```text
E
↓
Right Click / Esc
↓
S → 0
```

và nghĩ rằng Extrude đã bị hủy.

Thực tế:

> `Esc` hoặc Right Click có thể hủy **chuyển động**, nhưng geometry Extrude mới vẫn có thể đã được tạo.

Điều này có thể tạo Face/Vertex trùng nhau.

---

# 48. Extrude nhầm gây geometry chồng

Ví dụ:

```text
Face A
↓
E
↓
Esc
```

Bạn nhìn trên màn hình và tưởng không có gì xảy ra.

Nhưng có thể tồn tại:

```text
Face A
Face B
```

ở cùng vị trí.

Hậu quả:

* shading lỗi;
* z-fighting;
* normal lỗi;
* bevel lỗi;
* subdivision lỗi;
* export lỗi.

---

# 49. Cách xử lý geometry trùng

Nếu nghi ngờ có Vertex duplicate:

```text
A
↓
M
↓
By Distance
```

Sau đó xem Blender báo:

```text
Removed X vertices
```

Nếu có số Vertex được loại bỏ, Mesh trước đó có thể chứa điểm trùng.

---

# 50. Normal là gì?

Mỗi Face có một hướng gọi là:

> **Normal**

Có thể hình dung:

```text
      ↑ Normal
      │
┌────────────┐
│    Face    │
└────────────┘
```

Normal cho Blender biết đâu là:

* phía ngoài;
* phía trong.

Normal sai có thể gây:

* shading kỳ lạ;
* material hiển thị sai;
* backface culling;
* export lỗi.

---

# 51. Kiểm tra Face Orientation

Trong Blender có thể dùng:

```text
Viewport Overlays
↓
Face Orientation
```

Thông thường:

* **Blue** → mặt ngoài;
* **Red** → mặt đang quay ngược.

Nếu model kín mà mặt ngoài hiển thị đỏ, Normal có thể bị đảo.

---

# 52. Sửa Normal

Trong Edit Mode:

```text
A
```

sau đó:

```text
Shift + N
```

để:

> Recalculate Outside

Đây là thao tác cleanup rất hữu ích sau nhiều lần Extrude/Bridge.

---

# 53. Bài thực hành Bridge

Tạo hai edge loop đối diện.

Ví dụ:

```text
Loop A      khoảng trống       Loop B

┌────┐                      ┌────┐
│    │                      │    │
└────┘                      └────┘
```

Chọn cả hai loop.

Sau đó:

```text
Ctrl + E
↓
Bridge Edge Loops
```

Kiểm tra Faces mới được tạo.

---

# 54. Bài thực hành Connect

Tạo Cube.

Vào Edit Mode:

```text
Tab
```

Vertex Mode:

```text
1
```

Chọn hai Vertex chéo nhau:

```text
Shift + Click
```

sau đó:

```text
J
```

Quan sát Face được chia.

---

# 55. Bài thực hành Knife

```text
K
```

Click điểm đầu.

Click điểm thứ hai.

```text
Enter
```

Sau đó chọn Face mới được tạo và:

```text
E
```

Extrude để quan sát ảnh hưởng của đường cắt.

---

# 56. Bài thực hành Merge

Chọn bốn Vertex.

```text
M
↓
At Center
```

Quan sát chúng hội tụ thành một Vertex.

Sau đó:

```text
Ctrl + Z
```

thử lại:

```text
M
↓
At First
```

và:

```text
M
↓
At Last
```

để hiểu sự khác biệt.

---

# 57. Bài thực hành Join và Separate

Tạo:

```text
Cube
+
UV Sphere
```

Trong Object Mode:

```text
Shift + Click
↓
Ctrl + J
```

Hai Mesh giờ nằm trong một Object.

Vào Edit Mode:

```text
Tab
```

sau đó:

```text
P
↓
By Loose Parts
```

Chúng lại trở thành các Object riêng.

---

# 58. Những công cụ quan trọng nhất trong bài

| Công cụ           | Hotkey              | Công dụng                 |
| ----------------- | ------------------- | ------------------------- |
| Loop Cut          | `Ctrl + R`          | Thêm edge loop            |
| Extrude           | `E`                 | Tạo geometry mới          |
| Extrude Menu      | `Alt + E`           | Các kiểu Extrude nâng cao |
| Inset             | `I`                 | Tạo Face bên trong        |
| Connect           | `J`                 | Nối Vertex qua Face       |
| Knife             | `K`                 | Cắt Mesh thủ công         |
| Merge             | `M`                 | Gộp Vertex                |
| Bridge Edge Loops | `Ctrl + E` → Bridge | Nối hai loop              |
| Join Object       | `Ctrl + J`          | Gộp Object                |
| Separate          | `P`                 | Tách geometry             |
| Select All        | `A`                 | Chọn toàn bộ              |

---

# 59. Các tổ hợp Modeling rất thường dùng

### Tạo chi tiết nhô

```text
Loop Cut
↓
Select Face
↓
Extrude
```

### Tạo hốc

```text
Inset
↓
Extrude Inward
```

### Tạo đường topology

```text
Vertex Select
↓
J
```

### Cắt tự do

```text
K
↓
Knife
```

### Nối hai phần Mesh

```text
Select Edge Loops
↓
Bridge Edge Loops
```

### Cleanup điểm trùng

```text
A
↓
M
↓
By Distance
```

---

# 60. Vì sao Cube được dùng rất nhiều?

Cube là một primitive cực kỳ linh hoạt.

```text
Cube
 │
 ├── Scale
 ├── Loop Cut
 ├── Extrude
 ├── Inset
 ├── Bevel
 ├── Subdivision
 └── Merge
       ↓
  Model phức tạp
```

Từ Cube có thể dựng:

* bàn;
* ghế;
* tủ;
* nhà;
* xe;
* robot;
* thiết bị;
* thân nhân vật;
* vật thể bo tròn.

Điều quan trọng không phải primitive ban đầu trông giống vật thể cuối cùng đến đâu, mà là topology của nó có thuận lợi để chỉnh sửa hay không.

---

# 61. Những lỗi người mới thường gặp

## Lỗi 1 — Loop Cut không chạy qua Mesh

Nguyên nhân thường gặp:

* topology có Triangle;
* N-gon;
* Pole;
* edge flow bị ngắt.

Loop Cut hoạt động tốt nhất trên topology Quad liên tục.

---

## Lỗi 2 — Extrude rồi geometry bị chồng

Nguyên nhân:

```text
E
↓
Esc
```

rồi tiếp tục modeling mà không nhận ra geometry mới vẫn tồn tại.

### Xử lý

```text
A
↓
M
↓
By Distance
```

nhưng chỉ dùng khi thật sự phù hợp.

---

## Lỗi 3 — Bridge không hoạt động

Kiểm tra:

* đã chọn đúng hai Edge Loop chưa;
* Face cũ có đang bịt hai đầu không;
* topology có phù hợp không;
* selection có thừa Edge không.

---

## Lỗi 4 — `Ctrl + J` nhưng Mesh vẫn không liền

Đây là hành vi đúng.

`Ctrl + J` chỉ:

> Join Objects.

Nó không:

> weld topology.

Muốn geometry thật sự liền nhau, thường cần thêm:

* Merge;
* Bridge;
* Boolean;
* hoặc chỉnh topology thủ công.

---

## Lỗi 5 — `P → By Loose Parts` không tách được

Nếu hai vùng đã có Faces/Edges nối với nhau thì chúng không còn là Loose Parts.

Dùng:

```text
Select vùng
↓
P
↓
Selection
```

---

# 62. Workflow kiểm tra Mesh sau khi Modeling

Sau một chuỗi thao tác lớn:

```text
A
↓
Kiểm tra geometry
↓
Merge by Distance nếu cần
↓
Shift + N
↓
Recalculate Normals
↓
Wireframe
↓
Kiểm tra topology
↓
Solid
↓
Kiểm tra silhouette
```

Đây là thói quen tốt giúp hạn chế lỗi về sau.

---

# 63. Sơ đồ toàn bộ bài

```text
                     MODELING TOOLS
                           │
          ┌────────────────┼────────────────┐
          │                │                │
      Tạo topology      Tạo volume       Cleanup
          │                │                │
          ▼                ▼                ▼
      Loop Cut          Extrude           Merge
      Connect           Inset             Normals
      Knife             Bridge            Separate
                           │
                           ▼
                     Join Objects
```

---

# 64. Cheat Sheet

```text
EDIT MODE
│
├── Ctrl + R
│      └── Loop Cut
│
├── E
│      └── Extrude
│
├── Alt + E
│      ├── Extrude Individual Faces
│      └── Extrude Manifold
│
├── I
│      └── Inset
│
├── J
│      └── Connect Vertex Path
│
├── K
│      └── Knife
│
├── M
│      ├── At Center
│      ├── At Cursor
│      ├── At First
│      ├── At Last
│      └── By Distance
│
├── Ctrl + E
│      └── Bridge Edge Loops
│
└── P
       ├── Selection
       ├── By Material
       └── By Loose Parts


OBJECT MODE
│
└── Ctrl + J
       └── Join Objects
```

---

# 65. Bài tập tổng hợp

## Bài tập — Hộp có cửa/hốc

Tạo một Object duy nhất từ Cube.

### Yêu cầu

1. Tạo Cube.
2. Vào Edit Mode.
3. Dùng `Ctrl + R` tạo khu vực cửa.
4. Chọn Face cửa.
5. Dùng `I` tạo khung.
6. Dùng `E` Extrude mặt cửa vào trong.
7. Thêm một Loop Cut trên phần khung.
8. Dùng `J` nối hai Vertex nếu cần chia topology.
9. Dùng `K` tạo một đường cắt nhỏ tùy ý.
10. Kiểm tra Vertex trùng.
11. Dùng `M → By Distance` nếu thật sự có duplicate geometry.
12. Dùng `Shift + N` kiểm tra lại Normal.
13. Chuyển Wireframe kiểm tra topology.
14. Quay lại Solid Mode kiểm tra hình dáng.

---

# 66. Checklist hoàn thành bài

* [ ] Dùng được `Ctrl + R` để tạo Loop Cut.
* [ ] Hiểu Edge Slide sau khi tạo Loop Cut.
* [ ] Extrude Face được bằng `E`.
* [ ] Extrude được theo X/Y/Z.
* [ ] Biết dùng `Alt + E`.
* [ ] Hiểu Extrude Individual Faces.
* [ ] Hiểu mục đích của Extrude Manifold.
* [ ] Dùng được `I` để Inset.
* [ ] Kết hợp được Inset + Extrude.
* [ ] Dùng được `J` để Connect Vertex.
* [ ] Dùng được Knife bằng `K`.
* [ ] Biết Bridge Edge Loops dùng khi nào.
* [ ] Dùng được `M → At Center`.
* [ ] Phân biệt At First và At Last.
* [ ] Biết Merge by Distance dùng để xử lý điểm trùng.
* [ ] Kiểm tra geometry sau Merge.
* [ ] Phân biệt Merge và Join.
* [ ] Join được nhiều Object bằng `Ctrl + J`.
* [ ] Tách Mesh bằng `P → Selection`.
* [ ] Tách Loose Parts bằng `P → By Loose Parts`.
* [ ] Theo dõi Face đang chọn sau mỗi Extrude.
* [ ] Biết tránh Extrude nhầm tạo geometry chồng.
* [ ] Biết kiểm tra và sửa Normal bằng `Shift + N`.

---

# 67. Ghi nhớ

Ba combo quan trọng nhất của bài:

```text
Ctrl + R
↓
Loop Cut
↓
E
↓
Extrude
```

```text
I
↓
Inset
↓
E
↓
Extrude
```

và:

```text
Select Vertex
↓
M
↓
Merge
```

Đồng thời cần ghi nhớ:

> **`M` gộp geometry trong Edit Mode.**

> **`Ctrl + J` gộp nhiều Object thành một Object trong Object Mode.**

> **`P` tách geometry thành Object riêng.**

Các công cụ này tạo thành nền móng cho gần như toàn bộ quá trình **Mesh Modeling trong Blender**.

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
