# 073 — Basic Animation

## Animation cơ bản trong Blender

| Thuộc tính        | Nội dung                                           |
| ----------------- | -------------------------------------------------- |
| **Module**        | Module 05 — Rigging & Animation                    |
| **Bài học**       | Basic Animation                                    |
| **Thời lượng**    | 10:45                                              |
| **Chủ đề chính**  | Tạo animation cơ bản bằng Location và Rotation     |
| **Bài thực hành** | Làm một khối Cube di chuyển và xoay trên mặt phẳng |

---

## 1. Mục tiêu bài học

Sau bài học này, người học có thể:

* Làm quen lại với workspace **Animation** trong Blender.
* Phân biệt vai trò của **Timeline** và **Dope Sheet**.
* Hiểu cấu trúc phân cấp của keyframe trong Dope Sheet.
* Chèn keyframe cho:

  * **Location** — vị trí.
  * **Rotation** — góc xoay.
* Tạo chuyển động cho Cube theo nhiều trục.
* Điều chỉnh thời lượng animation bằng cách di chuyển keyframe.
* Thiết lập tốc độ khung hình — **Frame Rate**.
* Thiết lập Start Frame và End Frame.
* Render animation thành video MP4.
* Xem lại animation sau khi render.

---

# 2. Tổng quan workspace Animation

Trong file Blender mới, chuyển sang workspace:

```text
Animation
```

Workspace này thường bao gồm bốn khu vực chính:

```text
┌─────────────────────────┬─────────────────────────┐
│                         │                         │
│      Camera View        │      3D Viewport        │
│                         │                         │
├─────────────────────────┴─────────────────────────┤
│                    Dope Sheet                     │
├───────────────────────────────────────────────────┤
│                     Timeline                      │
└───────────────────────────────────────────────────┘
```

## 2.1. Camera View

Camera View cho biết phần nào của scene sẽ xuất hiện trong kết quả render cuối cùng.

## 2.2. 3D Viewport

Đây là khu vực dùng để:

* Quan sát toàn bộ scene.
* Chọn object.
* Di chuyển object.
* Xoay object.
* Thay đổi góc nhìn.

## 2.3. Timeline

Timeline cung cấp cái nhìn tổng quát về animation.

Timeline hiển thị:

* Frame hiện tại.
* Playhead.
* Start Frame.
* End Frame.
* Các frame có chứa keyframe.

Trên Timeline, mỗi thời điểm thường chỉ xuất hiện một dấu keyframe tổng hợp, ngay cả khi object có nhiều thuộc tính được keyframe tại frame đó.

## 2.4. Dope Sheet

Dope Sheet là phiên bản chi tiết hơn của Timeline.

Nó cho phép quan sát:

* Object nào đang được animate.
* Action đang được sử dụng.
* Nhóm Transform.
* Từng kênh chuyển động riêng biệt.
* Keyframe của từng trục X, Y, Z.

---

# 3. Timeline và Dope Sheet khác nhau như thế nào?

| Timeline                              | Dope Sheet                            |
| ------------------------------------- | ------------------------------------- |
| Hiển thị animation tổng quát          | Hiển thị chi tiết từng kênh animation |
| Dễ quan sát Start và End Frame        | Dễ chọn, xóa và di chuyển keyframe    |
| Không thể hiện rõ từng thuộc tính     | Hiển thị Location X, Y, Z và Rotation |
| Phù hợp để phát và kiểm tra animation | Phù hợp để chỉnh sửa keyframe         |

Ví dụ, tại frame `0`, Cube có keyframe cho cả ba kênh Location:

```text
Timeline
└── Frame 0
    └── Có keyframe

Dope Sheet
└── Summary
    └── Cube
        └── CubeAction
            └── Object Transforms
                └── Location
                    ├── X Location
                    ├── Y Location
                    └── Z Location
```

---

# 4. Cấu trúc phân cấp trong Dope Sheet

Các kênh animation trong Dope Sheet được tổ chức theo dạng cây phân cấp.

```text
Summary
└── Cube
    └── CubeAction
        └── Object Transforms
            ├── X Location
            ├── Y Location
            ├── Z Location
            ├── X Euler Rotation
            ├── Y Euler Rotation
            └── Z Euler Rotation
```

## 4.1. Summary

`Summary` nằm ở trên cùng.

Khi chọn keyframe trong hàng Summary, Blender có thể chọn toàn bộ những keyframe tương ứng nằm bên dưới.

## 4.2. Object

Mỗi object có animation sẽ có một nhóm riêng.

Ví dụ:

```text
Cube
```

Nếu scene có nhiều object được animate, Dope Sheet sẽ hiển thị nhiều object khác nhau.

## 4.3. Action

Action có thể được hiểu là một animation hoàn chỉnh của object.

Ví dụ đối với nhân vật:

* `Walk` — đi bộ.
* `Run` — chạy.
* `Jump` — nhảy.

Một object có thể có nhiều Action khác nhau.

Trong bài này, Blender tự tạo một Action cho Cube, thường có tên tương tự:

```text
CubeAction
```

## 4.4. Object Transforms

Nhóm này chứa các thuộc tính biến đổi của object, chẳng hạn:

* Location.
* Rotation.
* Scale.

## 4.5. Animation Channel

Mỗi thuộc tính được chia thành các kênh riêng:

* X Location.
* Y Location.
* Z Location.
* X Rotation.
* Y Rotation.
* Z Rotation.

Việc tách riêng các channel giúp kiểm soát animation chính xác hơn.

---

# 5. Nguyên lý hoạt động của keyframe

Animation trong Blender hoạt động bằng cách lưu giá trị của một thuộc tính tại các frame cụ thể.

Ví dụ:

```text
Frame 0:
Cube nằm bên trái camera.

Frame 50:
Cube nằm bên phải camera.
```

Blender tự động tính toán các vị trí trung gian giữa hai frame:

```text
Frame 0                   Frame 50
Cube bên trái ───────────▶ Cube bên phải
```

Quá trình Blender tự tính giá trị giữa các keyframe được gọi là:

```text
Interpolation — Nội suy
```

---

# 6. Thiết lập frame bắt đầu

Mặc định, Blender thường bắt đầu animation từ frame `1`.

Trong bài học, giảng viên chuyển Start Frame về:

```text
0
```

Cách này giúp việc tính toán thời gian dễ hiểu hơn:

```text
Frame 0 = thời điểm bắt đầu
```

Cần thay đổi Start Frame ở khu vực Frame Range:

```text
Start: 0
```

Sau đó đưa Playhead về frame `0`.

---

# 7. Tạo chuyển động đầu tiên cho Cube

## 7.1. Đặt Cube ở vị trí bắt đầu

Chọn Cube, sau đó di chuyển nó sang bên trái theo trục X:

```text
G → X
```

Đặt Cube ở ngoài hoặc gần mép trái của khung hình camera.

## 7.2. Chèn keyframe Location

Đưa chuột vào 3D Viewport và nhấn:

```text
I
```

Chọn:

```text
Location
```

Blender sẽ tạo keyframe cho toàn bộ ba kênh:

```text
X Location
Y Location
Z Location
```

Keyframe này xuất hiện tại:

```text
Frame 0
```

---

# 8. Tính frame dựa trên thời gian

Để xác định số frame cần dùng, áp dụng công thức:

```text
Số frame = Số giây × Frame Rate
```

Ví dụ với Frame Rate là 25 FPS:

```text
2 giây × 25 FPS = 50 frame
```

Do đó:

```text
Frame 0   → Thời điểm bắt đầu
Frame 50  → Sau 2 giây
```

---

## 8.1. Kiểm tra Frame Rate

Mở:

```text
Output Properties
```

Tìm mục:

```text
Frame Rate
```

Trong file mặc định, Frame Rate có thể là:

```text
24 FPS
```

Ở 24 FPS:

```text
2 giây × 24 FPS = 48 frame
```

Tuy nhiên, trong bài học, Frame Rate được đổi thành:

```text
25 FPS
```

Lý do là các mốc thời gian dễ tính hơn:

| Thời gian | Frame tại 25 FPS |
| --------: | ---------------: |
|    1 giây |               25 |
|    2 giây |               50 |
|    3 giây |               75 |
|    4 giây |              100 |

---

# 9. Di chuyển Cube qua khung hình trong 2 giây

Đưa Playhead đến:

```text
Frame 50
```

Chọn Cube và di chuyển sang bên phải theo trục X:

```text
G → X
```

Di chuyển Cube qua phía bên kia của camera.

Sau đó chèn keyframe:

```text
I → Location
```

Animation hiện tại:

```text
Frame 0                              Frame 50
Cube bên trái ─────────────────────▶ Cube bên phải
                    2 giây
```

---

# 10. Chỉ giữ lại channel cần thiết

Cube hiện chỉ di chuyển theo trục X.

Tuy nhiên, khi chọn:

```text
I → Location
```

Blender tạo keyframe cho cả:

* X Location.
* Y Location.
* Z Location.

Trong trường hợp này, Y và Z không thay đổi nên không nhất thiết phải được keyframe.

Có thể xóa keyframe của:

```text
Y Location
Z Location
```

và chỉ giữ:

```text
X Location
```

Cấu trúc sau khi dọn dẹp:

```text
Location
├── X Location    ✓ Có keyframe
├── Y Location    ✗ Không có keyframe
└── Z Location    ✗ Không có keyframe
```

## Lợi ích

* Dope Sheet gọn hơn.
* Dễ theo dõi animation hơn.
* Có thể thay đổi vị trí Y và Z của object mà không phải sửa nhiều keyframe.
* Tránh keyframe những thuộc tính không thực sự thay đổi.

---

# 11. Thêm mặt sàn

Thêm một Plane:

```text
Shift + A
→ Mesh
→ Plane
```

Phóng to Plane:

```text
S
```

Lúc này Cube có thể đang nằm một nửa bên dưới mặt sàn vì tâm của Cube nằm ở giữa hình khối.

---

# 12. Đưa Cube lên trên mặt sàn

Cube mặc định có kích thước:

```text
2 × 2 × 2 Blender Units
```

Tâm của Cube nằm giữa object. Vì vậy, để đáy Cube nằm đúng trên mặt phẳng `Z = 0`, cần di chuyển Cube lên một đơn vị:

```text
G → Z → 1
```

Kết quả:

```text
Trước khi nâng              Sau khi nâng

      ┌─────┐                    ┌─────┐
──────┼─────┼──── Floor          └─────┘
      └─────┘                ───────────── Floor
```

Do channel Z Location đã được xóa keyframe nên chỉ cần di chuyển Cube một lần.

Giá trị Z mới sẽ được áp dụng cho toàn bộ animation.

Nếu Z Location vẫn được keyframe, cần sửa giá trị Z ở tất cả các keyframe liên quan.

---

# 13. Kéo dài animation từ 2 giây thành 4 giây

Animation hiện kết thúc tại:

```text
Frame 50
```

Với 25 FPS:

```text
50 frame = 2 giây
```

Để animation kéo dài 4 giây, di chuyển keyframe cuối đến:

```text
Frame 100
```

Cách thực hiện trong Dope Sheet:

1. Chọn keyframe cuối.
2. Nhấn:

```text
G
```

3. Di chuyển keyframe đến frame `100`.

Kết quả:

```text
Frame 0                              Frame 100
Cube bên trái ─────────────────────▶ Cube bên phải
                    4 giây
```

## Ảnh hưởng

Khoảng cách không thay đổi nhưng thời gian tăng gấp đôi, do đó Cube di chuyển chậm hơn.

```text
Cùng quãng đường:

2 giây  → chuyển động nhanh
4 giây  → chuyển động chậm
```

---

# 14. Tạo đường chuyển động theo trục Y

Tiếp theo, Cube không chỉ di chuyển từ trái sang phải mà còn đi lên theo trục Y ở giữa animation.

Mục tiêu:

```text
Nhìn từ trên xuống:

Điểm đầu                  Điểm giữa
    ● ─────────────────────── ●
     \                       /
      \                     /
       \                   /
        ───────────────── ●
                         Điểm cuối
```

Chuyển động gồm ba mốc:

| Frame | Vị trí                |
| ----: | --------------------- |
|   `0` | Điểm bắt đầu          |
|  `50` | Điểm lệch theo trục Y |
| `100` | Điểm kết thúc         |

---

## 14.1. Tại sao phải tạo keyframe Y ở đầu và cuối?

Ban đầu, Cube chỉ có keyframe cho X Location.

Nếu chỉ đến frame `50`, di chuyển Cube theo Y rồi chèn keyframe, Blender không có đủ các mốc Y ở đầu và cuối để tạo đường đi mong muốn.

Do đó, cần tạo keyframe Y ở cả ba thời điểm:

```text
Frame 0
Frame 50
Frame 100
```

---

## 14.2. Quy trình thực hiện

### Bước 1: Keyframe vị trí đầu

Đưa Playhead về frame `0`.

Nhấn:

```text
I → Location
```

Blender tạo keyframe Location ở vị trí bắt đầu.

### Bước 2: Keyframe vị trí cuối

Đưa Playhead đến frame `100`.

Nhấn:

```text
I → Location
```

### Bước 3: Tạo vị trí ở giữa

Đưa Playhead đến frame `50`.

Di chuyển Cube theo trục Y:

```text
G → Y
```

Sau đó chèn keyframe:

```text
I → Location
```

Kết quả:

```text
Frame 0          Frame 50          Frame 100
Điểm đầu ─────── Điểm giữa ─────── Điểm cuối
                  Y thay đổi
```

---

# 15. Thêm chuyển động xoay cho Cube

Mục tiêu tiếp theo là làm Cube xoay một vòng quanh trục Z trong khi đang di chuyển.

Một vòng đầy đủ tương đương:

```text
360°
```

---

## 15.1. Tạo keyframe Rotation ở đầu

Đưa Playhead về frame `0`.

Nhấn:

```text
I → Rotation
```

Blender tạo các channel Euler Rotation:

```text
X Euler Rotation
Y Euler Rotation
Z Euler Rotation
```

---

## 15.2. Xoay Cube ở cuối animation

Đưa Playhead đến frame `100`.

Xoay Cube quanh trục Z:

```text
R → Z → 360
```

Sau đó nhấn:

```text
I → Rotation
```

Animation hoàn chỉnh:

```text
Frame 0                                Frame 100
Rotation Z = 0° ─────────────────────▶ Rotation Z = 360°
```

Cube vừa di chuyển vừa xoay:

```text
       ↻
[Cube] ───────────────────────────────▶ [Cube]
```

---

# 16. Euler Rotation là gì?

Trong Dope Sheet, Blender hiển thị:

```text
Euler Rotation
```

Euler Rotation là một phương pháp biểu diễn góc xoay dựa trên ba trục:

* X.
* Y.
* Z.

Ví dụ:

```text
X Rotation = 0°
Y Rotation = 0°
Z Rotation = 360°
```

Trong bài này, Cube chỉ xoay quanh trục Z.

Người mới chưa cần tìm hiểu sâu về Euler Rotation ở giai đoạn này.

---

# 17. Kiểm tra animation

Đưa Playhead về frame đầu:

```text
Frame 0
```

Nhấn:

```text
Spacebar
```

để phát animation.

Nhấn `Spacebar` lần nữa để dừng.

Cần kiểm tra:

* Cube có nằm trên mặt sàn không?
* Cube có đi đúng hướng không?
* Cube có đi qua đầy đủ khung hình camera không?
* Cube có xoay đủ một vòng không?
* Animation có kết thúc ở frame `100` không?

---

# 18. Điều chỉnh Camera View

Cần đảm bảo toàn bộ chuyển động nằm trong khung camera.

Chọn Camera View, sau đó nhấn:

```text
N
```

Mở tab:

```text
View
```

Bật:

```text
Lock Camera to View
```

Sau đó sử dụng thao tác điều hướng viewport để lùi camera ra xa và quan sát được toàn bộ animation.

Khi hoàn thành, có thể đóng bảng bên phải bằng:

```text
N
```

---

# 19. Thiết lập Frame Range

Trong Timeline hoặc Output Properties, đặt:

```text
Start: 0
End: 100
```

Với 25 FPS, animation dài:

```text
100 ÷ 25 = 4 giây
```

Sơ đồ thời gian:

```text
0s          1s          2s          3s          4s
│           │           │           │           │
0          25          50          75          100
```

---

# 20. Thiết lập thư mục xuất animation

Mở:

```text
Output Properties
```

Trong mục Output, không nên để đường dẫn mặc định là thư mục tạm:

```text
/tmp/
```

Thay vào đó, tạo một thư mục rõ ràng, ví dụ:

```text
Practice Cube
```

Sau đó bảo đảm Blender đang trỏ vào bên trong thư mục đó.

---

# 21. Hai cách xuất animation

## 21.1. Xuất dưới dạng chuỗi ảnh

Blender có thể xuất mỗi frame thành một ảnh riêng:

```text
frame_0000.png
frame_0001.png
frame_0002.png
...
frame_0100.png
```

### Ưu điểm

* An toàn hơn khi render dài.
* Nếu render bị dừng, có thể tiếp tục từ frame còn thiếu.
* Phù hợp với dự án chuyên nghiệp.

### Nhược điểm

* Cần ghép chuỗi ảnh thành video sau đó.

---

## 21.2. Xuất trực tiếp thành video

Để xuất trực tiếp thành video, đặt File Format thành:

```text
FFmpeg Video
```

Trong phần Encoding, chọn Container:

```text
MPEG-4
```

Kết quả là một file:

```text
.mp4
```

Đây là định dạng dễ mở và dễ chia sẻ.

---

# 22. Thiết lập Encoding

Các thiết lập được sử dụng trong bài:

| Thiết lập      | Giá trị gợi ý         |
| -------------- | --------------------- |
| File Format    | FFmpeg Video          |
| Container      | MPEG-4                |
| Output Quality | Perceptually Lossless |
| Encoding Speed | Slowest               |

## Lưu ý

`Slowest` có thể cho khả năng nén tốt hơn nhưng mất nhiều thời gian xử lý hơn.

Đối với bài thực hành ngắn, thiết lập này vẫn có thể sử dụng.

---

# 23. Giảm độ phân giải để render thử

Để render nhanh, giảm tỷ lệ Resolution Percentage xuống:

```text
25%
```

Ví dụ, nếu độ phân giải gốc là:

```text
1920 × 1080
```

Render ở 25% sẽ tạo kích thước gần:

```text
480 × 270
```

Công thức:

```text
1920 × 25% = 480
1080 × 25% = 270
```

Đây là thiết lập phù hợp để kiểm tra nhanh animation trước khi render chất lượng cao.

---

# 24. Render animation

Để render toàn bộ animation, nhấn:

```text
Ctrl + F12
```

Hoặc sử dụng menu:

```text
Render
→ Render Animation
```

Blender sẽ lần lượt render các frame từ:

```text
Frame 0 → Frame 100
```

---

# 25. Xem animation đã render

Để phát lại kết quả render, nhấn:

```text
Ctrl + F11
```

Hoặc vào:

```text
Render
→ View Animation
```

Animation sẽ được phát và có thể lặp lại để kiểm tra.

---

# 26. Quy trình thực hành hoàn chỉnh

```text
Chuyển sang Animation Workspace
              ↓
Đặt Start Frame = 0
              ↓
Đặt Frame Rate = 25 FPS
              ↓
Frame 0: đặt Cube bên trái
              ↓
Chèn keyframe Location
              ↓
Frame 50 hoặc 100: đặt Cube bên phải
              ↓
Chèn keyframe Location
              ↓
Xóa các channel không cần thiết
              ↓
Thêm Plane làm mặt sàn
              ↓
Nâng Cube lên Z = 1
              ↓
Di chuyển keyframe cuối đến frame 100
              ↓
Frame 50: thay đổi Y Location
              ↓
Chèn keyframe Location tại 0, 50, 100
              ↓
Frame 0: keyframe Rotation
              ↓
Frame 100: xoay Z = 360°
              ↓
Chèn keyframe Rotation
              ↓
Điều chỉnh Camera View
              ↓
Đặt End Frame = 100
              ↓
Thiết lập FFmpeg và MPEG-4
              ↓
Giảm Resolution xuống 25%
              ↓
Ctrl + F12 để render
              ↓
Ctrl + F11 để xem kết quả
```

---

# 27. Phím tắt quan trọng

| Phím tắt        | Chức năng                      |
| --------------- | ------------------------------ |
| `I`             | Mở menu Insert Keyframe        |
| `G`             | Di chuyển object hoặc keyframe |
| `G`, `X`        | Di chuyển theo trục X          |
| `G`, `Y`        | Di chuyển theo trục Y          |
| `G`, `Z`        | Di chuyển theo trục Z          |
| `R`             | Xoay object                    |
| `R`, `Z`        | Xoay quanh trục Z              |
| `R`, `Z`, `360` | Xoay một vòng quanh trục Z     |
| `Shift + A`     | Mở menu Add                    |
| `S`             | Thay đổi kích thước            |
| `N`             | Mở hoặc đóng Sidebar           |
| `Spacebar`      | Phát hoặc dừng animation       |
| `Ctrl + F12`    | Render Animation               |
| `Ctrl + F11`    | Xem animation đã render        |
| `Delete`        | Xóa keyframe đang chọn         |

---

# 28. Các thử thách trong bài học

## Thử thách 1: Di chuyển Cube trong 2 giây

Yêu cầu:

* Cube bắt đầu ở bên trái.
* Cube kết thúc ở bên phải.
* Thời lượng 2 giây.
* Frame Rate 25 FPS.

Đáp án:

```text
Frame đầu: 0
Frame cuối: 50
```

---

## Thử thách 2: Đặt Cube trên mặt sàn

Yêu cầu:

* Thêm Plane.
* Cube nằm hoàn toàn trên Plane.

Đáp án:

```text
G → Z → 1
```

---

## Thử thách 3: Kéo dài animation thành 4 giây

Yêu cầu:

* Giữ nguyên quãng đường.
* Cube di chuyển chậm hơn.
* Thời lượng mới là 4 giây.

Đáp án:

```text
Di chuyển keyframe cuối từ frame 50 đến frame 100.
```

---

## Thử thách 4: Tạo chuyển động theo trục Y

Yêu cầu:

* Cube đi từ điểm đầu.
* Lệch sang một phía tại frame giữa.
* Quay về hướng điểm cuối.

Đáp án:

```text
Frame 0:   Location keyframe
Frame 50:  Thay đổi Y và chèn Location keyframe
Frame 100: Location keyframe
```

---

## Thử thách 5: Xoay Cube một vòng

Yêu cầu:

* Cube xoay quanh trục Z.
* Tổng góc xoay là 360°.
* Xoay trong toàn bộ thời lượng animation.

Đáp án:

```text
Frame 0:
I → Rotation

Frame 100:
R → Z → 360
I → Rotation
```

---

## Thử thách 6: Render animation

Yêu cầu:

* Camera nhìn thấy toàn bộ chuyển động.
* End Frame là 100.
* Giảm Resolution để render nhanh.
* Xuất thành video MP4.

Thiết lập:

```text
Start: 0
End: 100
Frame Rate: 25 FPS
Resolution: 25%
File Format: FFmpeg Video
Container: MPEG-4
```

Render bằng:

```text
Ctrl + F12
```

---

# 29. Lỗi thường gặp

## 29.1. Cube không di chuyển

### Nguyên nhân

* Chưa tạo đủ hai keyframe.
* Hai keyframe có cùng giá trị Location.
* Playhead đang ở sai frame khi chèn keyframe.

### Cách khắc phục

Kiểm tra:

```text
Frame 0: vị trí A
Frame cuối: vị trí B
```

Hai vị trí phải khác nhau.

---

## 29.2. Cube bị chìm vào mặt sàn

### Nguyên nhân

Origin của Cube nằm ở giữa object.

### Cách khắc phục

Di chuyển Cube lên một đơn vị:

```text
G → Z → 1
```

---

## 29.3. Di chuyển Cube theo Z nhưng animation tự đưa nó xuống

### Nguyên nhân

Z Location đã được keyframe ở nhiều frame.

### Cách khắc phục

* Sửa Z ở tất cả keyframe.
* Hoặc xóa keyframe Z nếu trục này không cần animate.

---

## 29.4. Cube chỉ nằm ở vị trí Y mới trong toàn bộ animation

### Nguyên nhân

Chỉ có một keyframe Y ở frame giữa, chưa thiết lập điểm bắt đầu và kết thúc cho Y.

### Cách khắc phục

Thêm keyframe Y tại:

```text
Frame 0
Frame 50
Frame 100
```

---

## 29.5. Animation dài hoặc ngắn hơn dự kiến

### Nguyên nhân

Tính frame không đúng với Frame Rate.

### Công thức

```text
Thời lượng = Tổng số frame ÷ Frame Rate
```

Ví dụ:

```text
100 frame ÷ 25 FPS = 4 giây
```

---

## 29.6. Render không thấy toàn bộ Cube

### Nguyên nhân

Cube đi ra ngoài Camera View.

### Cách khắc phục

* Bật `Lock Camera to View`.
* Lùi camera ra xa.
* Phát thử animation trước khi render.

---

## 29.7. Không tìm thấy file video

### Nguyên nhân

Output Path vẫn đang trỏ đến thư mục tạm.

### Cách khắc phục

Chọn một thư mục rõ ràng trước khi render:

```text
Output Properties
→ Output
→ Chọn thư mục
```

---

## 29.8. Video không mở được

### Nguyên nhân

Chưa thiết lập đúng Container hoặc Codec.

### Thiết lập gợi ý

```text
File Format: FFmpeg Video
Container: MPEG-4
```

---

# 30. Ghi chú quan trọng

## Chỉ keyframe những thuộc tính cần thiết

Nếu object chỉ di chuyển theo X, nên ưu tiên keyframe:

```text
X Location
```

Không cần keyframe Y và Z nếu hai giá trị này không thay đổi.

## Frame Rate ảnh hưởng đến cách tính thời gian

Cùng 100 frame nhưng thời lượng khác nhau:

| Frame Rate | Thời lượng của 100 frame |
| ---------: | -----------------------: |
|     24 FPS |         Khoảng 4,17 giây |
|     25 FPS |                   4 giây |
|     30 FPS |         Khoảng 3,33 giây |
|     60 FPS |         Khoảng 1,67 giây |

## Thay đổi thời gian bằng cách di chuyển keyframe

```text
Các keyframe gần nhau  → chuyển động nhanh
Các keyframe xa nhau   → chuyển động chậm
```

## Kiểm tra bằng camera trước khi render

Animation nhìn đúng trong 3D Viewport chưa chắc đã nằm trong khung Camera View.

Luôn phát thử toàn bộ frame range bằng Camera View trước khi render.

---

# 31. Checklist thực hành

## Thiết lập

* [ ] Đã chuyển sang workspace Animation.
* [ ] Đã đặt Start Frame thành `0`.
* [ ] Đã đặt Frame Rate thành `25 FPS`.
* [ ] Đã đặt End Frame thành `100`.

## Animation vị trí

* [ ] Đã tạo keyframe Location tại frame `0`.
* [ ] Đã tạo keyframe Location tại frame `100`.
* [ ] Cube di chuyển từ trái sang phải.
* [ ] Đã thêm keyframe giữa tại frame `50`.
* [ ] Cube có thay đổi vị trí theo trục Y.

## Animation xoay

* [ ] Đã tạo Rotation keyframe tại frame `0`.
* [ ] Đã xoay Cube `360°` quanh trục Z tại frame `100`.
* [ ] Đã tạo Rotation keyframe tại frame `100`.

## Scene

* [ ] Đã thêm Plane làm mặt sàn.
* [ ] Cube nằm hoàn toàn trên Plane.
* [ ] Camera nhìn thấy toàn bộ chuyển động.

## Render

* [ ] Đã chọn thư mục Output.
* [ ] Đã chọn FFmpeg Video.
* [ ] Đã chọn MPEG-4.
* [ ] Đã giảm Resolution xuống `25%`.
* [ ] Đã render bằng `Ctrl + F12`.
* [ ] Đã xem kết quả bằng `Ctrl + F11`.
* [ ] Đã lưu file Blender.

---

# 32. Tóm tắt bài học

Bài học giới thiệu quy trình tạo một animation cơ bản trong Blender bằng Cube.

Animation được xây dựng từ các keyframe:

```text
Frame 0   → Vị trí và góc xoay ban đầu
Frame 50  → Vị trí trung gian theo trục Y
Frame 100 → Vị trí cuối và góc xoay 360°
```

Các kiến thức quan trọng gồm:

* Timeline cung cấp cái nhìn tổng quát về animation.
* Dope Sheet hiển thị chi tiết từng object và animation channel.
* `I` được dùng để chèn keyframe.
* Khoảng cách giữa các keyframe quyết định tốc độ chuyển động.
* Frame Rate quyết định số frame tương ứng với một giây.
* Chỉ nên keyframe những channel thực sự cần thiết.
* Camera View và Frame Range phải được kiểm tra trước khi render.
* Animation có thể được xuất thành video MP4 bằng FFmpeg.

Sơ đồ tổng kết:

```text
Thuộc tính thay đổi
        ↓
Chèn keyframe đầu
        ↓
Chuyển đến frame khác
        ↓
Thay đổi thuộc tính
        ↓
Chèn keyframe tiếp theo
        ↓
Blender nội suy chuyển động
        ↓
Kiểm tra bằng Timeline
        ↓
Render animation
```

Đây là nền tảng quan trọng để tiếp tục học các kỹ thuật nâng cao hơn như:

* Animation nhiều object.
* Graph Editor.
* Action.
* Rigging.
* Character Animation.
* Walk Cycle.
