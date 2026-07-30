# 07 — Shape Keys

| Thuộc tính       | Nội dung                                                                             |
| ---------------- | ------------------------------------------------------------------------------------ |
| **Video**        | Learn How to Animate and Render a Fish in Blender! (Beginner Friendly)               |
| **Chương**       | Shape Keys                                                                           |
| **Thời điểm**    | 01:43:09                                                                             |
| **Thời lượng**   | 19:04                                                                                |
| **Chủ đề chính** | Tạo biến dạng cho vây bằng Shape Keys và tự động hóa chuyển động bằng Noise Modifier |

> [!IMPORTANT]
> Trong chương này, tác giả **không dùng Driver**.
> Chuyển động Shape Key được tạo bằng cách:
>
> 1. Chèn keyframe cho thuộc tính `Value`.
> 2. Mở Graph Editor.
> 3. Thêm **Noise Modifier** vào F-Curve của Shape Key.
>
> Đây là dạng chuyển động thủ tục, nhưng khác với hệ thống Driver.

---

## 1. Mục tiêu bài học

Sau chương này, anh có thể:

* Hiểu Shape Key là gì và cách nó lưu biến dạng của mesh.
* Tạm thời vô hiệu hóa animation cũ mà không xóa keyframe.
* Tạo `Basis` và một Shape Key mới cho model cá.
* Biến dạng các vây bằng Edit Mode, Proportional Editing và 3D Cursor.
* Điều khiển mức độ biến dạng bằng thuộc tính `Value`.
* Thêm Noise Modifier để vây chuyển động liên tục mà không phải keyframe thủ công.
* Kích hoạt lại Curve Modifier và animation di chuyển sau khi hoàn tất Shape Key.

---

## 2. Shape Key là gì?

**Shape Key** là hệ thống lưu nhiều trạng thái hình dạng khác nhau của cùng một mesh.

Ví dụ, một chiếc vây có thể tồn tại ở hai trạng thái:

```text
Basis
Vây mở tự nhiên
      │
      │ Shape Key Value tăng
      ▼
Key 1
Vây ép sát về phía thân
```

Blender sẽ nội suy giữa hai trạng thái dựa trên thuộc tính `Value`.

| Giá trị | Kết quả                                   |
| ------: | ----------------------------------------- |
|   `0.0` | Mesh giữ nguyên hình dạng Basis           |
|   `0.5` | Mesh nằm giữa Basis và Shape Key          |
|   `1.0` | Áp dụng hoàn toàn biến dạng của Shape Key |

Shape Key chỉ hoạt động đúng khi tất cả trạng thái có:

* Cùng số lượng vertex.
* Cùng thứ tự vertex.
* Cùng topology.

Vì vậy, topology nên được hoàn thiện trước khi tạo Shape Key.

---

## 3. Tổng quan quy trình

```text
Tạm tắt animation cũ
        │
        ▼
Đưa cá về vị trí dễ chỉnh sửa
        │
        ▼
Tạo Basis và Key 1
        │
        ▼
Chỉnh các vây trong Edit Mode
        │
        ▼
Kiểm tra bằng thanh Value
        │
        ▼
Chèn keyframe cho Value
        │
        ▼
Thêm Noise Modifier trong Graph Editor
        │
        ▼
Bật lại animation và Curve Modifier
        │
        ▼
Xem chuyển động tổng thể
```

---

# 4. Tạm thời vô hiệu hóa animation hiện có

Trước khi chỉnh Shape Key, tác giả tạm thời tắt các animation cũ để tập trung vào hình dạng và chuyển động của vây.

## 4.1. Tắt Curve Modifier trong Viewport

Trong tab **Modifiers**, tìm Curve Modifier đang điều khiển cá chạy theo đường bơi.

Tắt biểu tượng hiển thị trong Viewport:

```text
Modifiers
└── Curve Modifier
    └── Show in Viewport: OFF
```

Việc này không xóa Modifier. Nó chỉ tạm thời ngừng ảnh hưởng trong quá trình chỉnh sửa.

---

## 4.2. Tắt ảnh hưởng của các kênh animation

Tác giả mở **Graph Editor**, tìm Action đang chứa animation di chuyển của cá và tắt tiếng các kênh cần thiết.

Ví dụ:

```text
Fish Action
└── Object Transforms
    ├── X Location
    ├── Y Location
    └── Z Location
```

Khi tắt một kênh:

* Keyframe vẫn còn.
* Animation không bị xóa.
* Kênh đó tạm thời không đóng góp vào kết quả cuối.
* Có thể chỉnh vị trí model mà không phá animation đã tạo.

Đây là một quy trình làm việc **không phá hủy**.

---

## 4.3. Đưa model về vị trí trung tâm

Sau khi tắt ảnh hưởng của các kênh vị trí, có thể dùng:

```text
Alt + G
```

để xóa Location hiện tại và đưa model về vị trí gốc.

Nếu cần đặt lại Rotation:

```text
Alt + R
```

Model lúc này nằm ở vị trí dễ quan sát và chỉnh sửa hơn.

---

# 5. Tạo Shape Key

## 5.1. Điều kiện trước khi tạo

Để thêm Shape Key:

* Phải chọn đúng mesh cá.
* Phải ở **Object Mode**.
* Không thể thêm Shape Key khi đang ở Edit Mode.

Nếu nút thêm Shape Key bị mờ, hãy kiểm tra lại chế độ hiện tại.

---

## 5.2. Thêm Basis

Đi tới:

```text
Object Data Properties
└── Shape Keys
```

Nhấn nút:

```text
+
```

Lần nhấn đầu tiên sẽ tạo:

```text
Basis
```

`Basis` là hình dạng gốc của mesh và đóng vai trò làm mốc cho tất cả Shape Key còn lại.

---

## 5.3. Thêm Shape Key đầu tiên

Nhấn nút `+` thêm một lần nữa.

Blender sẽ tạo:

```text
Key 1
```

Có thể đổi tên thành tên rõ nghĩa hơn, ví dụ:

```text
Fin_Fold
```

hoặc:

```text
Fin_Flow
```

Trong video, tác giả giữ cách đặt tên mặc định là `Key 1`.

---

# 6. Chỉnh biến dạng Shape Key

## 6.1. Chọn đúng Shape Key

Trong danh sách Shape Keys:

1. Chọn `Key 1`.
2. Nhấn `Tab` để vào Edit Mode.
3. Các thay đổi vertex từ lúc này sẽ được lưu vào `Key 1`.

Không nên chỉnh nhầm `Basis`, vì thay đổi Basis sẽ ảnh hưởng đến hình dạng gốc của toàn bộ hệ thống Shape Key.

---

## 6.2. Bật chế độ chọn vertex và X-Ray

Tác giả chuyển sang Vertex Select và bật X-Ray:

```text
Vertex Select
Alt + Z
```

X-Ray giúp chọn được cả vertex ở mặt trước và mặt sau của mesh cá.

Điều này đặc biệt quan trọng vì cá có thân dẹt và vây gồm nhiều lớp vertex nằm chồng lên nhau theo góc nhìn.

---

## 6.3. Bật Proportional Editing

Nhấn:

```text
O
```

để bật **Proportional Editing**.

Sau đó đặt chế độ ảnh hưởng thành:

```text
Connected Only
```

### Vì sao cần Connected Only?

Nếu không bật `Connected Only`, vùng ảnh hưởng có thể lan từ vây sang thân cá hoặc sang các phần mesh nằm gần nhau trong không gian.

```text
Không dùng Connected Only
Vây được chọn ─────► có thể kéo theo thân cá

Dùng Connected Only
Vây được chọn ─────► chỉ ảnh hưởng các vertex nối liền với vây
```

Điều này giúp tác giả chỉnh từng vây mà không làm biến dạng những phần không liên quan.

---

# 7. Dùng 3D Cursor làm tâm xoay

## 7.1. Đặt Pivot Point thành 3D Cursor

Trong Transform Pivot Point, chọn:

```text
3D Cursor
```

Khi đó, các thao tác xoay sẽ sử dụng vị trí 3D Cursor làm tâm.

---

## 7.2. Đặt 3D Cursor vào gốc vây

Sử dụng:

```text
Shift + chuột phải
```

để đặt 3D Cursor gần vị trí vây nối với thân.

Ví dụ:

```text
            Đầu vây
               ●
              /
             /
Thân cá ●───●  ← 3D Cursor đặt tại gốc vây
```

Khi xoay, vây sẽ gập quanh gốc thay vì xoay quanh tâm toàn bộ vùng vertex đã chọn.

---

## 7.3. Xoay và gập vây

Sau khi chọn các vertex của vây:

```text
R
```

để xoay.

Trong khi xoay, cuộn con lăn chuột để thay đổi bán kính ảnh hưởng của Proportional Editing.

Mục tiêu của tác giả là:

* Gập các vây về phía sau.
* Đưa vây gần thân hơn.
* Tạo cảm giác nước đang ép vây khi cá bơi.
* Làm silhouette của cá có tính khí động học hơn.
* Tránh để vây đứng cứng vuông góc với thân.

```text
Trước Shape Key               Sau Shape Key

     \  Vây mở                    \ Vây xuôi
      \                            \
  ─────●─────                  ─────●─────
      /                             \
     /  Vây mở                       \ Vây xuôi
```

---

# 8. Chỉnh nhiều bộ phận trong cùng Shape Key

Tác giả không chỉ chỉnh một vây mà tiếp tục tác động lên nhiều phần:

* Vây phía sau.
* Vây lưng.
* Vây hậu môn.
* Một số phần vây dài ở phía trên.
* Một số phần vây dưới thân.
* Các dải vây mảnh có thể chuyển động theo dòng nước.

Mục đích là tạo một trạng thái trong đó toàn bộ hệ thống vây:

* Ép nhẹ về phía sau.
* Có dáng đang lướt trong nước.
* Không còn đứng cứng như model tĩnh.
* Có thể dao động nhẹ khi điều khiển bằng Shape Key Value.

---

## 8.1. Dùng Circle Select

Tác giả đề cập phím:

```text
C
```

để mở **Circle Select**.

Công cụ này hữu ích khi cần quét chọn nhiều vertex trên vây.

Kết hợp với X-Ray:

```text
Alt + Z
C
```

giúp chọn nhanh cả hai mặt của vây.

---

## 8.2. Xoay tự do với Trackball Rotation

Trong một số trường hợp, tác giả sử dụng:

```text
R
R
```

Đây là **Trackball Rotation**, cho phép xoay tự do thay vì chỉ xoay quanh một trục cố định.

Cách này hữu ích với các vây có hướng nghiêng phức tạp.

---

# 9. Kiểm tra Shape Key bằng Value

Sau khi chỉnh xong, nhấn:

```text
Tab
```

để trở về Object Mode.

Trong bảng Shape Keys, thay đổi `Value` của `Key 1`.

```text
Value = 0.0
Vây trở về Basis

Value = 1.0
Vây chuyển sang trạng thái đã chỉnh

Value từ 0 đến 1
Blender nội suy giữa hai trạng thái
```

Tác giả kéo thanh Value qua lại nhiều lần để kiểm tra:

* Hướng chuyển động có hợp lý không.
* Vây có xuyên vào thân không.
* Vertex có bị kéo giãn quá mức không.
* Silhouette của cá có tự nhiên không.
* Chuyển động có giống vật thể đang trôi trong nước không.

---

# 10. Vấn đề khi chỉnh Basis sau khi đã tạo Shape Key

Trong quá trình thực hiện, tác giả nhận thấy góc ban đầu của một số vây trong `Basis` chưa phù hợp.

Tác giả thử:

1. Chọn `Basis`.
2. Vào Edit Mode.
3. Chỉnh lại góc vây.
4. Quay lại `Key 1` để kiểm tra.

Kết quả là biến dạng giữa Basis và Key 1 không còn đúng như mong muốn, vì Key 1 vẫn lưu trạng thái vertex theo dữ liệu trước đó.

## Bài học quan trọng

> Nên chỉnh hình dạng cơ bản của model hoàn thiện trước khi tạo Shape Key.

Trình tự tốt hơn:

```text
Hoàn thiện mesh gốc
        │
        ▼
Chỉnh góc vây ở Basis
        │
        ▼
Kiểm tra topology
        │
        ▼
Tạo Shape Keys
```

Không nên:

```text
Tạo Shape Key
        │
        ▼
Sau đó mới sửa lớn trên Basis
        │
        ▼
Biến dạng Shape Key khó kiểm soát
```

Tuy nhiên, tác giả vẫn tiếp tục sửa thủ công `Key 1` để bù lại sự thay đổi này.

---

# 11. Tạo animation cho Shape Key

Sau khi Shape Key hoạt động đúng, tác giả tạo keyframe cho thuộc tính `Value`.

## 11.1. Chèn keyframe

Di chuột vào trường `Value`, sau đó:

* Nhấn biểu tượng keyframe ở bên phải property.
* Hoặc nhấn `I` khi con trỏ đang nằm trên property.

Một F-Curve mới sẽ xuất hiện trong Graph Editor.

Cấu trúc có thể giống như:

```text
KeyAction
└── Key Blocks
    └── Key 1
        └── Value
```

---

## 11.2. Mở Graph Editor

Chuyển một vùng làm việc thành:

```text
Graph Editor
```

Trong Graph Editor, chọn F-Curve tương ứng với `Key 1 → Value`.

Nhấn:

```text
N
```

để mở Sidebar.

---

# 12. Thêm Noise Modifier

Trong Graph Editor:

```text
Sidebar
└── Modifiers
    └── Add Modifier
        └── Noise
```

Noise Modifier tự động tạo ra sự biến thiên ngẫu nhiên trên F-Curve.

```text
Value
  1.0 ─────╮   ╭──╮
           │╲╱╲│  ╰╮
  0.5 ─╮╭──╯   ╰╮  ╰─
       ╰╯        ╰╮
  0.0 ──────────────── Time
```

Kết quả là Shape Key Value dao động liên tục mà không cần đặt hàng loạt keyframe.

---

## 12.1. Vai trò của Strength

`Strength` điều khiển biên độ chuyển động.

|   Strength | Kết quả                                  |
| ---------: | ---------------------------------------- |
|        Cao | Vây thay đổi mạnh, có thể rung giật      |
| Trung bình | Vây dao động rõ nhưng vẫn kiểm soát được |
|       Thấp | Vây chỉ rung nhẹ theo dòng nước          |

Trong video, Noise ban đầu quá mạnh khiến các vây rung rất nhanh và thiếu tự nhiên. Tác giả giảm Strength nhiều lần cho đến khi chuyển động nhẹ hơn.

---

## 12.2. Vai trò của Scale

`Scale` điều khiển độ dài hoặc tốc độ của các nhịp Noise.

| Scale | Kết quả tương đối             |
| ----: | ----------------------------- |
|   Nhỏ | Thay đổi nhanh, rung liên tục |
|   Lớn | Thay đổi chậm và kéo dài hơn  |

Mục tiêu là tạo cảm giác:

* Vây bị nước tác động nhẹ.
* Chuyển động không đều hoàn toàn.
* Vây trôi giống lá hoặc vải mềm trong dòng nước.
* Không rung quá nhanh như bị lỗi vật lý.

---

## 12.3. Di chuyển F-Curve theo trục Y

Noise có thể tạo giá trị vượt khỏi khoảng mong muốn.

Nếu Shape Key Value bị đẩy quá cao hoặc thường xuyên chạm mức `1.0`, tác giả chọn đường F-Curve rồi dùng:

```text
G
Y
```

để di chuyển toàn bộ đường cong lên hoặc xuống.

Điều này thay đổi giá trị trung tâm mà Noise dao động xung quanh.

Ví dụ:

```text
Trước khi dịch

Value thường xuyên chạm 1.0
0.0 ─────── Noise ─────── 1.0


Sau khi dịch xuống

Value dao động chủ yếu ở vùng thấp hơn
0.0 ── Noise ───── 0.6
```

---

# 13. Tại sao dùng Noise thay vì keyframe thủ công?

Nếu keyframe từng chuyển động vây bằng tay, cần tạo rất nhiều keyframe và liên tục điều chỉnh chúng khi thay đổi thời lượng animation.

Noise Modifier giúp:

* Chuyển động tiếp tục tự động trong suốt timeline.
* Không phải đặt từng keyframe.
* Tạo biến thiên không hoàn toàn lặp lại.
* Tránh cảm giác máy móc.
* Dễ điều chỉnh cường độ và tốc độ.
* Có thể giữ nguyên khi thay đổi animation di chuyển của cá.

Mặc dù Noise không tạo vòng lặp hoàn hảo, tác giả cho rằng người xem khó nhận ra vì chuyển động của vây nhỏ, liên tục và ngẫu nhiên.

---

# 14. Kích hoạt lại animation tổng thể

Sau khi hoàn thành chuyển động Shape Key:

1. Bật lại các kênh animation đã tắt tiếng.
2. Kích hoạt lại Curve Modifier trong Viewport.
3. Dùng `Alt + R` nếu cần đặt lại Rotation.
4. Phát toàn bộ animation để kiểm tra.

```text
Shape Key cho vây
        +
Animation di chuyển
        +
Curve Modifier
        +
Motion của thân
        =
Chuyển động cá hoàn chỉnh hơn
```

Tác giả nhận thấy sau khi thêm Shape Key:

* Vây không còn đứng cứng.
* Các vây hướng theo chiều chuyển động.
* Cá có cảm giác đang lướt qua nước.
* Silhouette tự nhiên hơn.
* Chuyển động phụ giúp animation chính thuyết phục hơn.

---

# 15. Kiểm tra Motion Blur

Khi xem lại animation, Motion Blur quá mạnh khiến tác giả khó quan sát chuyển động Shape Key.

Vì vậy, tác giả tạm thời tắt Motion Blur để đánh giá:

* Hình dạng vây.
* Mức độ dao động.
* Hiện tượng xuyên mesh.
* Tốc độ Noise.
* Độ rõ của chuyển động phụ.

> Khi tinh chỉnh animation, nên tạm tắt các hiệu ứng hậu kỳ làm che mất chuyển động chi tiết.

---

# 16. Tinh chỉnh đoạn tăng tốc

Sau khi kích hoạt lại animation tổng thể, tác giả phát hiện một đoạn tăng tốc của cá hơi bất thường.

Tác giả quay lại Graph Editor để chỉnh:

* Hình dạng F-Curve.
* Vị trí các keyframe.
* Góc của handle.
* Độ liên tục tại điểm đầu và cuối nếu animation cần lặp.

## Nguyên tắc khi chỉnh handle cho animation lặp

Hai đầu của animation nên có:

* Giá trị tương thích.
* Hướng tiếp tuyến tương thích.
* Tốc độ vào và ra tương đồng.

```text
Điểm cuối vòng lặp ─────┐
                        │ cần nối mượt
Điểm đầu vòng lặp  ─────┘
```

Nếu góc thoát ở cuối và góc đi vào ở đầu khác nhau, cá có thể giật hoặc thay đổi tốc độ đột ngột tại điểm lặp.

---

# 17. Phím tắt và công cụ liên quan

| Thao tác                               | Phím tắt hoặc vị trí                                      |
| -------------------------------------- | --------------------------------------------------------- |
| Chuyển Object Mode/Edit Mode           | `Tab`                                                     |
| Bật/tắt X-Ray                          | `Alt + Z`                                                 |
| Bật/tắt Proportional Editing           | `O`                                                       |
| Thay đổi bán kính Proportional Editing | Cuộn con lăn khi transform                                |
| Xoay                                   | `R`                                                       |
| Xoay tự do Trackball                   | `R`, sau đó `R` lần nữa                                   |
| Circle Select                          | `C`                                                       |
| Đặt 3D Cursor                          | `Shift + chuột phải`                                      |
| Xóa Location                           | `Alt + G`                                                 |
| Xóa Rotation                           | `Alt + R`                                                 |
| Mở/đóng Sidebar trong Graph Editor     | `N`                                                       |
| Di chuyển F-Curve theo trục Y          | `G`, sau đó `Y`                                           |
| Phóng to vùng làm việc hiện tại        | `Ctrl + Space`                                            |
| Thêm Shape Key                         | Object Data Properties → Shape Keys → `+`                 |
| Thêm Noise Modifier                    | Graph Editor → Sidebar → Modifiers → Add Modifier → Noise |

---

# 18. Lỗi thường gặp

## 18.1. Không thể thêm Shape Key

### Nguyên nhân

Đang ở Edit Mode.

### Cách khắc phục

Nhấn:

```text
Tab
```

để về Object Mode rồi thêm Shape Key.

---

## 18.2. Chỉnh nhầm Basis

### Biểu hiện

* Hình dạng gốc của cá thay đổi.
* Key 1 nội suy sai.
* Vertex di chuyển theo hướng không mong muốn.

### Cách khắc phục

Trước khi vào Edit Mode, luôn kiểm tra Shape Key đang active.

```text
Chỉnh hình gốc    → Basis
Chỉnh biến dạng   → Key 1 hoặc Shape Key tương ứng
```

---

## 18.3. Proportional Editing ảnh hưởng cả thân cá

### Nguyên nhân

Chưa bật:

```text
Connected Only
```

### Cách khắc phục

Trong menu Proportional Editing, chuyển chế độ Falloff sang `Connected Only`.

---

## 18.4. Chỉ chọn được vertex mặt trước

### Nguyên nhân

X-Ray đang tắt.

### Cách khắc phục

Nhấn:

```text
Alt + Z
```

trước khi quét chọn vùng vây.

---

## 18.5. Vây xoay sai tâm

### Nguyên nhân

Pivot Point vẫn đặt ở Median Point hoặc Individual Origins.

### Cách khắc phục

1. Đặt 3D Cursor ở gốc vây.
2. Chọn Pivot Point là `3D Cursor`.
3. Xoay lại vùng vertex.

---

## 18.6. Noise làm vây rung quá mạnh

### Nguyên nhân

* Strength quá lớn.
* Scale quá nhỏ.
* F-Curve có giá trị trung tâm quá cao.

### Cách khắc phục

* Giảm `Strength`.
* Tăng `Scale`.
* Dùng `G`, `Y` để dịch F-Curve xuống.
* Xem lại animation khi Motion Blur đang tắt.

---

## 18.7. Shape Key bị biến dạng sau khi sửa Basis

### Nguyên nhân

Basis được thay đổi lớn sau khi Key 1 đã được tạo.

### Cách khắc phục

Tốt nhất là hoàn thiện Basis trước khi tạo Shape Keys. Nếu đã chỉnh Basis, cần chỉnh lại từng Shape Key để phù hợp với hình dạng gốc mới.

---

## 18.8. Shape Key bị hỏng sau khi thay đổi topology

### Nguyên nhân

Đã thực hiện các thao tác làm thay đổi số lượng hoặc thứ tự vertex, chẳng hạn:

* Apply Decimate.
* Subdivide mesh.
* Xóa vertex.
* Gộp hoặc tách topology.
* Apply Modifier có thay đổi vertex.

### Cách khắc phục

Hoàn thiện và chốt topology trước khi bắt đầu tạo Shape Keys.

---

# 19. Quy trình thực hành đề xuất

## Bước 1 — Chuẩn bị model

* Chọn mesh cá.
* Hoàn thiện topology.
* Apply các Modifier cần thiết có thể làm thay đổi số vertex.
* Kiểm tra hình dạng cơ bản của các vây.

---

## Bước 2 — Cô lập phần cần chỉnh

* Tắt Curve Modifier trong Viewport.
* Tắt tiếng các F-Curve di chuyển.
* Dùng `Alt + G` và `Alt + R` nếu cần đưa cá về vị trí dễ chỉnh sửa.

---

## Bước 3 — Tạo Shape Keys

* Vào Object Data Properties.
* Thêm `Basis`.
* Thêm `Key 1`.
* Đổi tên thành `Fin_Flow` hoặc tên dễ hiểu hơn.

---

## Bước 4 — Biến dạng vây

* Chọn Shape Key mới.
* Vào Edit Mode.
* Bật X-Ray.
* Bật Proportional Editing.
* Chọn `Connected Only`.
* Đặt 3D Cursor ở gốc vây.
* Chọn Pivot Point là `3D Cursor`.
* Xoay các vây nhẹ về phía sau.

---

## Bước 5 — Kiểm tra Shape Key

* Trở về Object Mode.
* Kéo `Value` từ `0` đến `1`.
* Kiểm tra xuyên mesh.
* Kiểm tra vertex bị kéo giãn.
* Điều chỉnh lại nếu chuyển động quá mạnh.

---

## Bước 6 — Tạo animation thủ tục

* Chèn keyframe cho `Value`.
* Mở Graph Editor.
* Chọn F-Curve của Shape Key.
* Thêm Noise Modifier.
* Giảm Strength.
* Điều chỉnh Scale.
* Di chuyển đường cong bằng `G`, `Y` nếu cần.

---

## Bước 7 — Kiểm tra trong animation hoàn chỉnh

* Bật lại các F-Curve di chuyển.
* Bật lại Curve Modifier.
* Tắt Motion Blur khi tinh chỉnh.
* Phát toàn bộ animation.
* Kiểm tra vây có đi theo thân và hướng chuyển động hay không.

---

# 20. Gợi ý thiết lập ban đầu

Các giá trị sau chỉ là điểm khởi đầu, không phải thông số bắt buộc:

| Thuộc tính                |                     Giá trị gợi ý |
| ------------------------- | --------------------------------: |
| Shape Key Value trung tâm |                         `0.3–0.5` |
| Noise Strength            |                         `0.1–0.3` |
| Noise Scale               |                     `20–50` frame |
| Mức ép vây                | Nhẹ, không sát hoàn toàn vào thân |
| Proportional Editing      |                    Connected Only |
| Pivot                     |             3D Cursor tại gốc vây |

Đối với cá bơi chậm:

```text
Strength thấp
Scale lớn
Vây dao động chậm
```

Đối với cá tăng tốc:

```text
Shape Key Value cao hơn
Vây ép sát thân hơn
Noise có thể giảm nhẹ
```

---

# 21. Gợi ý nâng cấp hệ thống

Trong video, nhiều bộ phận được đặt chung trong một Shape Key. Cách này nhanh nhưng tất cả các vây sẽ chuyển động theo cùng một nguồn Noise.

Để tự nhiên hơn, có thể tách thành nhiều Shape Key:

```text
Fin_Pectoral_L
Fin_Pectoral_R
Fin_Dorsal
Fin_Anal
Fin_Tail
Fin_Pelvic
```

Sau đó mỗi Shape Key dùng Noise Modifier với:

* Scale khác nhau.
* Strength khác nhau.
* Phase hoặc Offset khác nhau.

```text
Vây ngực trái  ── Noise A ──╮
Vây ngực phải ── Noise B ───┤
Vây lưng       ── Noise C ──┼──► chuyển động không đồng bộ
Vây hậu môn    ── Noise D ──┤
Vây đuôi       ── Noise E ──╯
```

Điều này tránh hiện tượng tất cả các vây cùng gập và mở đồng thời.

---

# 22. Checklist thực hành

## Chuẩn bị

* [ ] Mesh đã được tối ưu và chốt topology.
* [ ] Hình dạng Basis đã được chỉnh hoàn thiện.
* [ ] Curve Modifier đã được tạm tắt.
* [ ] Các kênh di chuyển đã được tạm thời mute.

## Shape Key

* [ ] Đã tạo `Basis`.
* [ ] Đã tạo ít nhất một Shape Key mới.
* [ ] Đã chỉnh đúng Shape Key, không chỉnh nhầm Basis.
* [ ] Đã bật X-Ray khi chọn vertex.
* [ ] Đã bật Proportional Editing.
* [ ] Đã dùng `Connected Only`.
* [ ] Đã đặt 3D Cursor tại gốc vây.
* [ ] Đã kiểm tra Value từ `0` đến `1`.

## Animation

* [ ] Đã chèn keyframe cho Shape Key Value.
* [ ] Đã thêm Noise Modifier trong Graph Editor.
* [ ] Noise Strength không quá mạnh.
* [ ] Noise Scale phù hợp với tốc độ bơi.
* [ ] Shape Key không thường xuyên chạm giới hạn `0` hoặc `1`.
* [ ] Đã bật lại animation di chuyển và Curve Modifier.
* [ ] Đã kiểm tra kết quả khi tắt Motion Blur.

---

# 23. Tóm tắt

Trong chương này, Shape Keys được sử dụng để tạo một trạng thái biến dạng trong đó các vây cá ép nhẹ về phía sau và xuôi theo dòng chuyển động.

Quy trình chính gồm:

```text
Tạo Basis
   │
   ▼
Tạo Key 1
   │
   ▼
Chỉnh vây trong Edit Mode
   │
   ▼
Điều khiển bằng Value
   │
   ▼
Chèn keyframe
   │
   ▼
Thêm Noise Modifier
   │
   ▼
Bật lại animation tổng thể
```

Điểm quan trọng nhất không phải là làm các vây chuyển động thật mạnh, mà là tạo ra một lớp **secondary motion** nhẹ giúp chúng:

* Không đứng cứng.
* Đi theo chuyển động của thân.
* Phản ứng giống vật liệu mềm trong nước.
* Làm cá có cảm giác đang lướt thay vì chỉ trượt dọc theo Curve.

Shape Keys kết hợp với Noise Modifier tạo ra một hệ thống chuyển động thủ tục đơn giản, không phá hủy và dễ điều chỉnh. Đây là bước giúp animation cá trở nên mềm mại và có sức sống hơn trước khi chuyển sang các giai đoạn vật liệu, ánh sáng và render.
