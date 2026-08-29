# 075 — The Graph Editor

| Thuộc tính       | Nội dung                                          |
| ---------------- | ------------------------------------------------- |
| **Module**       | Module 05 — Rigging & Animation                   |
| **Bài học**      | The Graph Editor                                  |
| **Thời lượng**   | 12:56                                             |
| **Chủ đề chính** | Sử dụng Graph Editor để tạo hoạt ảnh quả bóng nảy |

---

## 1. Mục tiêu bài học

Sau bài học này, bạn sẽ có thể:

* Hiểu vai trò của **Graph Editor** trong Blender.
* Đọc được đường cong chuyển động hay **F-Curve**.
* Phân biệt trục thời gian và trục giá trị trong Graph Editor.
* Xóa các kênh animation không cần thiết.
* Nhân bản và di chuyển keyframe trực tiếp trên đồ thị.
* Phân biệt ba kiểu nội suy:

  * Constant
  * Linear
  * Bezier
* Điều chỉnh handle để tạo:

  * Điểm va chạm sắc.
  * Đỉnh chuyển động mềm.
  * Hiệu ứng giảm dần độ cao của cú nảy.
* Co giãn toàn bộ thời gian animation bằng Pivot Point.
* Tạo hoàn chỉnh một animation quả bóng nảy rồi dừng lại.

---

## 2. Graph Editor là gì?

**Graph Editor** là trình chỉnh sửa animation dưới dạng các đường cong.

Mỗi thuộc tính được animate sẽ tạo thành một **F-Curve** riêng, chẳng hạn:

* `X Location`
* `Y Location`
* `Z Location`
* `X Rotation`
* `Y Rotation`
* `Z Rotation`
* `Scale`

Trong bài thực hành này, quả bóng chỉ di chuyển theo chiều cao nên chủ yếu sử dụng:

```text
Z Location
```

### Cách đọc Graph Editor

```text
Giá trị Z
    ▲
    │           ●
    │         ╱   ╲
    │       ╱       ╲
    │ ●   ╱           ╲   ●
    │  ╲╱               ╲╱
    └──────────────────────────► Frame
       0   25   45   65   80
```

* **Trục X:** thời gian, được biểu diễn bằng số frame.
* **Trục Y:** giá trị của thuộc tính đang animate.
* **Điểm tròn:** keyframe.
* **Đường nối:** sự thay đổi giá trị giữa các keyframe.
* **Độ dốc của đường cong:** tốc độ chuyển động.

---

## 3. Timeline, Dope Sheet và Graph Editor

| Công cụ          | Chức năng                                                  |
| ---------------- | ---------------------------------------------------------- |
| **Timeline**     | Hiển thị tổng quan các keyframe theo thời gian             |
| **Dope Sheet**   | Hiển thị chi tiết keyframe của từng đối tượng và từng kênh |
| **Graph Editor** | Hiển thị và chỉnh sửa đường cong giá trị của animation     |

Có thể hiểu đơn giản:

```text
Timeline
   ↓
Xem animation có keyframe ở đâu

Dope Sheet
   ↓
Quản lý keyframe theo đối tượng và thuộc tính

Graph Editor
   ↓
Kiểm soát tốc độ, độ cong và cảm giác chuyển động
```

---

# 4. Bài thực hành: Tạo quả bóng rơi

## 4.1. Chuẩn bị Scene

Tạo một Blender File mới và thực hiện:

1. Xóa Cube mặc định.
2. Thêm một quả cầu:

   * `Shift + A`
   * Chọn **Mesh → UV Sphere**
3. Thêm mặt sàn:

   * `Shift + A`
   * Chọn **Mesh → Plane**
4. Phóng to Plane để tạo thành sàn.
5. Di chuyển quả cầu lên trên theo trục Z.

Scene cơ bản:

```text
          ○  Sphere
          │
          │
          ▼
──────────────────── Plane
```

---

## 4.2. Thiết lập tốc độ khung hình

Trong **Output Properties**, đặt:

```text
Frame Rate: 25 FPS
```

Khi đó:

```text
25 frame = 1 giây
```

Bạn cũng có thể giữ tốc độ mặc định là `24 FPS`, nhưng bài học sử dụng `25 FPS` để dễ tính toán.

---

## 4.3. Tạo hai keyframe đầu tiên

Bật nút **Auto Keying**, còn được gọi là nút Record.

### Keyframe đầu tiên

Tại frame đầu:

1. Đặt quả bóng ở trên cao.
2. Nhấn `G`.
3. Nhấn `Enter` để xác nhận vị trí.

Do Auto Keying đang bật, Blender sẽ tự động tạo keyframe.

### Keyframe thứ hai

1. Di chuyển playhead đến frame `25`.
2. Nhấn `G → Z`.
3. Hạ quả bóng xuống sát mặt sàn.
4. Xác nhận vị trí.

Kết quả:

|    Frame | Trạng thái          |
| -------: | ------------------- |
| 0 hoặc 1 | Quả bóng ở trên cao |
|       25 | Quả bóng chạm sàn   |

Khi phát animation, quả bóng sẽ rơi xuống sàn trong khoảng một giây.

> Khi thay đổi vị trí nhiều lần ngay trên cùng một frame, Blender sẽ ghi đè giá trị keyframe cũ thay vì tạo thêm keyframe mới.

---

# 5. Mở Graph Editor

Chuyển sang **Animation Workspace**, sau đó đổi một khu vực thành:

```text
Editor Type → Graph Editor
```

Graph Editor sẽ hiển thị các kênh transform của đối tượng.

Ví dụ:

```text
Object Transforms
├── X Location
├── Y Location
├── Z Location
├── X Rotation
├── Y Rotation
├── Z Rotation
├── X Scale
├── Y Scale
└── Z Scale
```

---

## 5.1. Màu của các kênh Location

Blender thường sử dụng màu theo trục tọa độ:

| Kênh         | Màu        |
| ------------ | ---------- |
| `X Location` | Đỏ         |
| `Y Location` | Xanh lá    |
| `Z Location` | Xanh dương |

Trong bài này, chỉ có `Z Location` thay đổi nên đường màu xanh dương là đường cong quan trọng nhất.

---

## 5.2. Xóa các kênh không cần thiết

Để đồ thị dễ quan sát hơn:

1. Chọn các kênh Rotation và Scale.
2. Nhấn chuột phải.
3. Chọn **Delete Channels**.
4. Xóa tiếp `X Location` và `Y Location`.
5. Chỉ giữ lại `Z Location`.

Cấu trúc sau khi dọn dẹp:

```text
Object Transforms
└── Z Location
```

> Chỉ xóa channel khi chắc chắn thuộc tính đó không được sử dụng trong animation.

---

# 6. Điều khiển khung nhìn trong Graph Editor

## Thu phóng thông thường

Sử dụng con lăn chuột để phóng to hoặc thu nhỏ.

## Thay đổi chiều cao hiển thị

Giữ:

```text
Ctrl + con lăn chuột
```

Di chuyển theo chiều dọc để thay đổi tỷ lệ trục giá trị.

## Thay đổi chiều rộng hiển thị

Giữ:

```text
Ctrl + con lăn chuột
```

Di chuyển theo chiều ngang để thay đổi tỷ lệ trục thời gian.

## Hiển thị toàn bộ đường cong

Nhấn:

```text
Home
```

Blender sẽ tự động căn toàn bộ keyframe vào vùng nhìn.

---

# 7. Xây dựng chuỗi chuyển động nảy

Ban đầu, quả bóng chỉ có hai trạng thái:

```text
Cao → Chạm sàn
```

Để tạo chuyển động nảy, cần bổ sung thêm các đỉnh và điểm chạm sàn.

Ví dụ:

```text
Cao
 ↓
Chạm sàn
 ↑
Nảy cao
 ↓
Chạm sàn
 ↑
Nảy thấp hơn
 ↓
Chạm sàn
 ↑
Nảy rất thấp
 ↓
Dừng
```

---

## 7.1. Kéo dài animation

Đặt End Frame thành khoảng:

```text
100
```

Sau đó tạo thêm các keyframe.

Một bố cục frame tham khảo:

| Frame | Trạng thái              |
| ----: | ----------------------- |
|     0 | Vị trí bắt đầu trên cao |
|    25 | Chạm sàn lần đầu        |
|    45 | Đỉnh nảy thứ nhất       |
|    65 | Chạm sàn lần hai        |
|    80 | Đỉnh nảy thứ hai        |
|    95 | Chạm sàn lần ba         |

Các con số không bắt buộc phải giống hoàn toàn. Điều quan trọng là:

* Mỗi lần nảy sau thấp hơn lần trước.
* Khoảng thời gian giữa các lần nảy dần ngắn lại.

---

## 7.2. Nhân bản keyframe

Để nhân bản một keyframe:

```text
Shift + D
```

Sau đó nhấn:

```text
X
```

để giới hạn chuyển động theo trục thời gian.

Ví dụ:

1. Chọn keyframe ở đỉnh đầu tiên.
2. Nhấn `Shift + D`.
3. Nhấn `X`.
4. Di chuyển keyframe đến frame mới.
5. Nhấn chuột trái để xác nhận.

---

## 7.3. Thay đổi độ cao của keyframe

Trong Graph Editor:

```text
G → Y
```

được sử dụng để thay đổi giá trị theo chiều dọc của đồ thị.

Điều này có thể gây nhầm lẫn:

* Trong 3D Viewport, quả bóng di chuyển theo `Z`.
* Trong Graph Editor, việc kéo điểm lên xuống lại dùng trục `Y` của giao diện 2D.

```text
3D Viewport:
G → Z = thay đổi chiều cao của quả bóng

Graph Editor:
G → Y = thay đổi giá trị Z trên đồ thị
```

---

# 8. Hiểu tốc độ thông qua độ dốc

Độ dốc của đường cong thể hiện tốc độ thay đổi của thuộc tính.

```text
Đường gần nằm ngang
→ Chuyển động chậm

Đường càng dốc
→ Chuyển động càng nhanh

Đường nằm ngang hoàn toàn
→ Đối tượng đứng yên
```

Với quả bóng rơi:

* Khi bắt đầu rơi, tốc độ thấp.
* Khi đến gần mặt đất, tốc độ tăng.
* Sau khi bật lên, tốc độ giảm dần.
* Tại đỉnh, vận tốc theo chiều dọc gần bằng `0`.
* Sau đó quả bóng lại tăng tốc khi rơi xuống.

---

# 9. Interpolation Mode

Kiểu nội suy quyết định cách Blender tính chuyển động giữa hai keyframe.

Chọn keyframe và nhấn:

```text
T
```

Hoặc mở:

```text
Key → Interpolation Mode
```

Ba kiểu nội suy quan trọng gồm:

---

## 9.1. Constant

```text
●─────────┐
          │
          └─────────●
```

Đặc điểm:

* Giá trị được giữ nguyên cho đến keyframe tiếp theo.
* Sau đó thay đổi đột ngột.
* Không có chuyển động chuyển tiếp.

Ứng dụng:

* Stop-motion.
* Chuyển trạng thái tức thời.
* Bật hoặc tắt thuộc tính.
* Animation theo từng pose.

Đối với quả bóng:

```text
Ở trên → lập tức xuống sàn → lập tức lên trên
```

Vì vậy Constant không phù hợp với chuyển động nảy tự nhiên.

---

## 9.2. Linear

```text
●────────╲────────●
```

Đặc điểm:

* Giá trị thay đổi với tốc độ không đổi.
* Đường nối giữa hai keyframe là đường thẳng.
* Không có ease-in hoặc ease-out.

Ứng dụng:

* Chuyển động cơ học.
* Băng chuyền.
* Camera di chuyển đều.
* Vật thể quay với tốc độ ổn định.

Đối với quả bóng, Linear có thể làm điểm chạm đất sắc, nhưng đỉnh chuyển động sẽ giống như quả bóng va vào một trần vô hình.

---

## 9.3. Bezier

```text
●──────╲
        ╲
         ╲──────●
```

Đặc điểm:

* Tạo đường cong mượt.
* Có ease-in và ease-out.
* Có thể điều chỉnh bằng các handle.
* Là kiểu nội suy mặc định của Blender.

Bezier phù hợp với:

* Chuyển động tự nhiên.
* Quả bóng nảy.
* Nhân vật tăng tốc hoặc giảm tốc.
* Camera bắt đầu và dừng nhẹ nhàng.

> Từ đúng là **Bezier**, không phải “Busier” hoặc “Busy Air” như một số bản ghi âm tự động có thể nhận diện sai.

---

## 9.4. So sánh nhanh

| Interpolation | Hình dạng   | Tốc độ             | Ứng dụng                    |
| ------------- | ----------- | ------------------ | --------------------------- |
| **Constant**  | Bậc thang   | Thay đổi đột ngột  | Stop-motion, đổi trạng thái |
| **Linear**    | Đường thẳng | Không đổi          | Chuyển động máy móc         |
| **Bezier**    | Đường cong  | Tăng giảm tự nhiên | Animation hữu cơ            |

---

# 10. Tạo điểm chạm đất sắc

Nếu sử dụng Bezier mặc định, quả bóng thường giảm tốc trước khi chạm đất.

Kết quả là quả bóng có cảm giác:

* Lơ lửng gần mặt đất.
* Chạm đất quá nhẹ.
* Không tạo được lực va chạm.

Đường cong không phù hợp:

```text
      ╲
       ╲
        ╲___
            ●
```

Đường cong phù hợp:

```text
       ╲
        ╲
         ╲
          ●
         ╱
```

Điểm chạm sàn cần tạo thành một góc nhọn.

## Cách thực hiện

1. Chọn keyframe ở mặt đất.
2. Chọn hoặc kéo các handle.
3. Nhấn `S → X`.
4. Thu hai handle lại gần keyframe.

Kết quả:

* Quả bóng đi xuống nhanh.
* Đổi hướng ngay tại điểm chạm.
* Chuyển động trông giống một cú nảy thực sự.

---

# 11. Tạo đỉnh nảy mềm

Ở đỉnh của cú nảy, quả bóng cần:

1. Chậm dần khi đi lên.
2. Dừng trong khoảnh khắc rất ngắn.
3. Tăng tốc khi rơi xuống.

Vì vậy, đường cong ở đỉnh cần tròn và rộng:

```text
          ______
       __/      \__
```

Không nên quá nhọn:

```text
          /\
         /  \
```

Đỉnh quá nhọn khiến quả bóng giống như:

* Va vào trần.
* Đổi hướng ngay lập tức.
* Không chịu tác động của trọng lực.

## Cách điều chỉnh

1. Chọn các keyframe ở đỉnh.
2. Đặt Pivot Point thành **Individual Centers**.
3. Nhấn `S → X`.
4. Kéo rộng các handle theo chiều ngang.

Mỗi đỉnh sẽ được điều chỉnh quanh chính keyframe đó.

---

# 12. Làm animation nhanh hơn

Animation ban đầu dài khoảng một giây cho lần rơi đầu tiên nên có thể trông quá chậm.

Để tăng tốc:

1. Đưa playhead hoặc 2D Cursor về đầu animation.
2. Đặt Pivot Point thành **2D Cursor**.
3. Chọn toàn bộ keyframe bằng `A`.
4. Nhấn:

```text
S → X
```

5. Co toàn bộ keyframe lại gần điểm bắt đầu.

Ví dụ:

```text
Trước: 0 → 100 frame
Sau:   0 → 50 frame
```

Animation sẽ diễn ra nhanh gấp đôi.

---

## 12.1. Tại sao cần dùng 2D Cursor?

Nếu dùng Pivot Point mặc định, các keyframe sẽ co giãn quanh tâm của toàn bộ vùng chọn:

```text
        Tâm vùng chọn
             ↓
●────●────●────●────●
```

Điều này có thể làm keyframe đầu tiên bị thay đổi vị trí.

Khi dùng **2D Cursor** tại frame `0`:

```text
2D Cursor
    ↓
    ●────●────●────●
```

Toàn bộ animation được co giãn từ đầu mà không làm thay đổi thời điểm bắt đầu.

---

# 13. Pivot Point trong Graph Editor

Các Pivot Point thường dùng:

| Pivot Point            | Công dụng                                        |
| ---------------------- | ------------------------------------------------ |
| **Median Point**       | Scale quanh tâm của toàn bộ keyframe đã chọn     |
| **2D Cursor**          | Scale quanh vị trí của 2D Cursor                 |
| **Individual Centers** | Scale từng keyframe hoặc từng cặp handle độc lập |

Trong bài này:

```text
2D Cursor
→ Co ngắn toàn bộ thời gian animation từ frame đầu

Individual Centers
→ Điều chỉnh độ rộng handle của từng đỉnh hoặc điểm chạm
```

---

# 14. Hoàn thiện chuyển động giảm dần

Một quả bóng thực tế sẽ mất dần năng lượng sau mỗi lần chạm đất.

Do đó:

```text
Độ cao cú nảy sau < Độ cao cú nảy trước
```

Đồng thời:

```text
Thời gian cú nảy sau < Thời gian cú nảy trước
```

Ví dụ:

| Lần nảy | Độ cao            | Thời lượng   |
| ------: | ----------------- | ------------ |
|       1 | Cao nhất          | Dài nhất     |
|       2 | Thấp hơn          | Ngắn hơn     |
|       3 | Thấp hơn nữa      | Ngắn hơn nữa |
|       4 | Rất thấp          | Rất ngắn     |
|       5 | Gần như không nảy | Dừng         |

Sơ đồ F-Curve hoàn chỉnh:

```text
Giá trị Z
    ▲
    │ ●
    │  ╲
    │   ╲          ●
    │    ╲       ╱   ╲
    │     ╲     ╱     ╲     ●
    │      ╲   ╱       ╲   ╱ ╲    ●
    │       ╲ ╱         ╲ ╱   ╲  ╱ ╲__
    │        ●           ●     ● ●
    └──────────────────────────────────► Frame
         0   20   35   50   61  70  75
```

Đường cong thể hiện:

* Đỉnh đầu tiên cao nhất.
* Các đỉnh sau thấp dần.
* Khoảng cách thời gian ngắn dần.
* Các điểm chạm đất nằm trên cùng một giá trị Z.
* Cuối animation, đường cong nằm ngang.

---

# 15. Tạo khoảng đứng yên cuối animation

Sau lần nảy cuối, nên để quả bóng đứng yên trong một số frame.

Ví dụ:

```text
Frame 72: Quả bóng dừng
Frame 80: Kết thúc animation
```

Đường cong cuối:

```text
●──────────────
```

Điều này giúp:

* Người xem nhận biết animation đã kết thúc.
* Quả bóng không lập tức quay lại vị trí đầu khi video lặp.
* Animation có nhịp nghỉ tự nhiên.

Nếu render thành chuỗi ảnh tĩnh, có thể:

* Kết thúc tại frame quả bóng dừng.
* Lặp lại frame cuối trong quá trình dựng video.

Nếu render trực tiếp thành video, nên để thêm một khoảng đứng yên ngay trong Blender.

---

# 16. Quy trình hoàn chỉnh

```text
Tạo Sphere và Plane
        ↓
Đặt quả bóng ở trên cao
        ↓
Tạo keyframe đầu
        ↓
Tạo keyframe chạm đất
        ↓
Mở Graph Editor
        ↓
Chỉ giữ lại Z Location
        ↓
Nhân bản keyframe để tạo các cú nảy
        ↓
Giảm dần độ cao mỗi lần nảy
        ↓
Giảm dần khoảng thời gian mỗi lần nảy
        ↓
Làm sắc các điểm chạm đất
        ↓
Làm tròn các đỉnh chuyển động
        ↓
Co ngắn toàn bộ timing
        ↓
Thêm khoảng đứng yên ở cuối
        ↓
Kiểm tra và render
```

---

# 17. Phím tắt quan trọng

| Phím tắt        | Chức năng                                    |
| --------------- | -------------------------------------------- |
| `Shift + A`     | Thêm đối tượng                               |
| `G`             | Di chuyển keyframe hoặc đối tượng            |
| `G → X`         | Di chuyển keyframe theo thời gian            |
| `G → Y`         | Thay đổi giá trị keyframe trong Graph Editor |
| `S`             | Scale keyframe hoặc handle                   |
| `S → X`         | Scale theo trục thời gian                    |
| `Shift + D`     | Nhân bản keyframe                            |
| `Shift + D → X` | Nhân bản và di chuyển theo thời gian         |
| `A`             | Chọn tất cả keyframe                         |
| `T`             | Chọn Interpolation Mode                      |
| `V`             | Chọn Handle Type                             |
| `N`             | Mở hoặc đóng Sidebar                         |
| `Home`          | Hiển thị toàn bộ đường cong                  |
| `Spacebar`      | Phát hoặc tạm dừng animation                 |

---

# 18. Handle Type liên quan

Ngoài Interpolation Mode, có thể nhấn `V` để thay đổi loại handle.

| Handle Type      | Đặc điểm                                                    |
| ---------------- | ----------------------------------------------------------- |
| **Auto**         | Blender tự tạo đường cong mượt                              |
| **Auto Clamped** | Mượt nhưng hạn chế overshoot ngoài ý muốn                   |
| **Vector**       | Tạo đoạn thẳng và góc sắc                                   |
| **Aligned**      | Hai handle nằm trên cùng một đường nhưng có thể khác độ dài |
| **Free**         | Hai handle có thể chỉnh độc lập                             |

Đối với bài quả bóng nảy:

* **Auto/Bezier:** phù hợp với đỉnh cú nảy.
* **Vector:** hữu ích để tạo điểm va chạm sắc.
* **Free:** phù hợp khi cần điều chỉnh riêng phần đi xuống và bật lên.
* **Auto Clamped:** giúp tránh đường cong vượt quá giá trị không mong muốn.

---

# 19. Timing và Spacing

Graph Editor giúp quan sát hai khái niệm animation quan trọng.

## Timing

Timing là khoảng thời gian giữa các keyframe.

```text
Keyframe cách xa nhau
→ Chuyển động chậm

Keyframe gần nhau
→ Chuyển động nhanh
```

## Spacing

Spacing là khoảng cách mà đối tượng di chuyển giữa các frame.

Trong Graph Editor:

* Đường cong dốc thể hiện spacing lớn.
* Đường cong phẳng thể hiện spacing nhỏ.

Đối với quả bóng:

```text
Gần đỉnh
→ Các vị trí gần nhau
→ Quả bóng chuyển động chậm

Gần mặt đất
→ Các vị trí cách xa nhau
→ Quả bóng chuyển động nhanh
```

---

# 20. Lỗi thường gặp

## 20.1. Quả bóng lơ lửng trước khi chạm đất

**Nguyên nhân:** Bezier handle tại điểm chạm quá rộng.

**Cách sửa:**

* Chọn keyframe chạm sàn.
* Thu ngắn handle bằng `S → X`.
* Hoặc sử dụng Vector Handle.

---

## 20.2. Quả bóng giống như va vào trần

**Nguyên nhân:** Đỉnh đường cong quá nhọn hoặc đang dùng Linear.

**Cách sửa:**

* Dùng Bezier.
* Kéo handle ở đỉnh rộng hơn.
* Tạo đường cong tròn ở vị trí cao nhất.

---

## 20.3. Quả bóng nảy mãi với cùng độ cao

**Nguyên nhân:** Các keyframe ở đỉnh có cùng giá trị Z.

**Cách sửa:**

* Chọn từng đỉnh.
* Nhấn `G → Y`.
* Hạ dần các đỉnh sau.

---

## 20.4. Các cú nảy có cùng thời lượng

**Nguyên nhân:** Khoảng cách giữa các keyframe không giảm.

**Cách sửa:**

* Di chuyển các keyframe sau gần nhau hơn bằng `G → X`.

---

## 20.5. Scale animation làm thay đổi frame bắt đầu

**Nguyên nhân:** Pivot Point đang đặt tại Median Point.

**Cách sửa:**

* Đưa 2D Cursor đến frame đầu.
* Chọn Pivot Point là **2D Cursor**.
* Thực hiện `S → X`.

---

## 20.6. Chỉnh nhầm đường cong

**Nguyên nhân:** Nhiều channel đang hiển thị cùng lúc.

**Cách sửa:**

* Chọn đúng `Z Location`.
* Ẩn hoặc xóa các channel không sử dụng.
* Kiểm tra màu và tên của channel.

---

## 20.7. Quả bóng xuyên qua mặt sàn

**Nguyên nhân:** Giá trị Z tại các keyframe chạm đất không giống nhau.

**Cách sửa:**

* Chọn tất cả keyframe chạm sàn.
* Đặt cùng một giá trị trong Sidebar bằng phím `N`.
* Kiểm tra vị trí Origin của quả bóng.

---

# 21. Render animation

Trước khi render:

* Đặt Camera ở vị trí phù hợp.
* Kiểm tra Start Frame và End Frame.
* Kiểm tra Frame Rate.
* Chọn thư mục lưu.
* Lưu file Blender.

Để xuất video:

```text
Output Properties
└── File Format: FFmpeg Video
```

Sau đó sử dụng:

```text
Render → Render Animation
```

Phím tắt:

```text
Ctrl + F12
```

> Luôn lưu file trước khi bắt đầu render animation.

---

# 22. Bài tập thực hành

## Bài tập 1 — Quả bóng nảy cơ bản

Tạo một quả bóng:

* Rơi từ trên cao.
* Chạm sàn.
* Nảy ít nhất ba lần.
* Mỗi lần nảy thấp hơn lần trước.
* Dừng tại khoảng frame `70–80`.

## Bài tập 2 — So sánh Interpolation

Tạo ba quả bóng có cùng keyframe nhưng sử dụng:

1. Constant
2. Linear
3. Bezier

Quan sát sự khác nhau về cảm giác chuyển động.

## Bài tập 3 — Thay đổi vật liệu giả định

Tạo ba phiên bản animation:

* Bóng cao su: nảy cao và lâu.
* Bóng bowling: gần như không nảy.
* Bóng xốp: nảy thấp và mất năng lượng nhanh.

Thực hiện bằng cách thay đổi:

* Độ cao các đỉnh.
* Khoảng thời gian giữa các lần nảy.
* Hình dạng handle.

---

# 23. Checklist thực hành

* [ ] Đã tạo Sphere và Plane.
* [ ] Đã đặt Frame Rate phù hợp.
* [ ] Đã tạo keyframe quả bóng ở trên cao.
* [ ] Đã tạo keyframe quả bóng chạm sàn.
* [ ] Đã mở Graph Editor.
* [ ] Đã nhận diện trục Frame và Value.
* [ ] Đã chỉ giữ lại channel `Z Location`.
* [ ] Đã nhân bản keyframe bằng `Shift + D`.
* [ ] Đã tạo ít nhất ba lần nảy.
* [ ] Đã giảm dần độ cao của mỗi lần nảy.
* [ ] Đã giảm dần thời gian giữa các lần nảy.
* [ ] Đã thử Constant, Linear và Bezier.
* [ ] Đã làm sắc các keyframe chạm đất.
* [ ] Đã làm tròn các keyframe ở đỉnh.
* [ ] Đã sử dụng Pivot Point `2D Cursor`.
* [ ] Đã sử dụng Pivot Point `Individual Centers`.
* [ ] Đã thêm khoảng đứng yên cuối animation.
* [ ] Đã lưu file trước khi render.

---

# 24. Tóm tắt bài học

Graph Editor cho phép kiểm soát animation ở mức chi tiết thông qua các đường cong F-Curve.

Trong animation quả bóng nảy:

* Trục X biểu diễn thời gian.
* Trục Y biểu diễn chiều cao của quả bóng.
* Độ dốc biểu diễn tốc độ.
* Đỉnh cong mềm thể hiện quả bóng chậm lại khi lên cao.
* Điểm đáy sắc thể hiện va chạm nhanh với mặt đất.
* Các đỉnh thấp dần thể hiện sự mất năng lượng.
* Khoảng cách keyframe ngắn dần làm các lần nảy diễn ra nhanh hơn.
* Đường nằm ngang cuối animation thể hiện quả bóng đã dừng.

Cấu trúc chuyển động chính:

```text
Rơi nhanh
   ↓
Va chạm sắc
   ↓
Nảy lên và chậm dần
   ↓
Đạt đỉnh
   ↓
Rơi nhanh trở lại
   ↓
Mất dần năng lượng
   ↓
Dừng hoàn toàn
```

Graph Editor không chỉ cho biết đối tượng đang ở đâu mà còn cho biết **đối tượng di chuyển như thế nào**, từ đó giúp animation trở nên tự nhiên, có trọng lượng và có chủ đích hơn.
