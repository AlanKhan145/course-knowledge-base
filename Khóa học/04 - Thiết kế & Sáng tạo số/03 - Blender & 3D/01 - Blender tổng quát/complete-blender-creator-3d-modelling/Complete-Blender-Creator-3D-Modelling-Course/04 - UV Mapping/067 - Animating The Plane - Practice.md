# 067 — Animating The Plane

| Thuộc tính       | Nội dung                                       |
| ---------------- | ---------------------------------------------- |
| **Module**       | Module 04 — UV Mapping                         |
| **Bài học**      | Animating The Plane                            |
| **Thời lượng**   | 10:05                                          |
| **Chủ đề chính** | Tạo hoạt ảnh máy bay bay qua một cảnh đơn giản |

## 1. Mục tiêu bài học

Sau bài học này, người học có thể:

* Đưa object từ một file Blender khác vào scene hiện tại bằng **Append**.
* Tạo một bối cảnh đơn giản gồm mặt đất, tòa nhà và các thùng phuy.
* Làm quen với workspace **Animation**.
* Hiểu vai trò cơ bản của **Timeline**, **Dope Sheet** và playhead.
* Thiết lập tốc độ khung hình của animation.
* Chèn keyframe cho **Location** và **Rotation** của máy bay.
* Tạo hoạt ảnh quay cho cánh quạt.
* Di chuyển và xóa keyframe trong Dope Sheet.
* Phát thử animation trực tiếp trong viewport.

---

## 2. Chuẩn bị bối cảnh

Trước khi tạo animation, bài học xây dựng một scene đơn giản để máy bay có vật thể tham chiếu khi bay qua.

Scene gồm:

* Máy bay và các controller đã được tạo ở bài trước.
* Một tòa nhà.
* Bốn thùng phuy.
* Một mặt phẳng lớn làm mặt đất.

### Sơ đồ bố trí cơ bản

```text
Điểm bắt đầu                                  Điểm kết thúc
ngoài camera                                    ngoài camera
     ✈  ───────────────────────────────────────────►

                    🛢      🏠      🛢
                 ───────────────────────
                         Mặt đất
```

Máy bay sẽ bắt đầu ở ngoài khung hình, bay ngang qua các công trình và tiếp tục đi ra ngoài khung hình ở phía đối diện.

---

## 3. Đưa object từ file khác bằng Append

Để đưa tòa nhà và các thùng phuy từ một file Blender cũ vào scene hiện tại, sử dụng:

```text
File → Append
```

Sau đó:

1. Tìm đến thư mục chứa file `.blend`.
2. Mở file cần lấy dữ liệu.
3. Chọn thư mục dữ liệu bên trong file, chẳng hạn:

   * `Object`
   * `Collection`
   * `Material`
   * `Mesh`
4. Chọn các object cần đưa vào.
5. Nhấn **Append**.

Trong bài học, giảng viên mở file chứa nhiều thùng phuy, sau đó chọn:

* Object tòa nhà.
* Bốn object hình trụ đại diện cho các thùng phuy.

### Append và Link khác nhau thế nào?

| Công cụ    | Đặc điểm                                                                                                                |
| ---------- | ----------------------------------------------------------------------------------------------------------------------- |
| **Append** | Sao chép dữ liệu từ file khác vào file hiện tại. Có thể chỉnh sửa độc lập.                                              |
| **Link**   | Tạo liên kết tới dữ liệu trong file nguồn. Phức tạp hơn và thường không chỉnh sửa trực tiếp như object thông thường.    |
| **Import** | Dùng để nhập các định dạng khác như FBX, OBJ, STL hoặc glTF, không phải cách chính để lấy dữ liệu từ một file `.blend`. |

Đối với người mới học, **Append** thường dễ sử dụng hơn.

---

## 4. Tầm quan trọng của việc đặt tên object

Khi mở mục `Object` trong file nguồn, các object có thể mang những tên khó hiểu như:

* `Cube`
* `Cube.001`
* `Cylinder`
* `Cylinder.003`

Điều này khiến việc xác định object trở nên khó khăn trong những scene lớn.

Nên sử dụng tên mô tả rõ chức năng:

```text
Building_Main
Barrel_01
Barrel_02
Barrel_03
Barrel_04
Plane_Controller
Propeller_Controller
Ground
```

Ngoài ra, có thể gom các object liên quan vào một Collection:

```text
Environment
├── Building_Main
├── Barrel_01
├── Barrel_02
├── Barrel_03
├── Barrel_04
└── Ground
```

Việc đặt tên và tổ chức Collection tốt giúp thao tác **Append**, chọn object và quản lý scene dễ dàng hơn.

---

## 5. Tạo mặt đất

Để tạo mặt đất:

1. Đưa 3D Cursor về tâm thế giới:

```text
Shift + S → Cursor to World Origin
```

2. Thêm một Plane:

```text
Shift + A → Mesh → Plane
```

3. Scale Plane lên đủ lớn:

```text
S
```

4. Chọn tòa nhà và các thùng phuy.
5. Xoay chúng quanh trục Z nếu cần:

```text
R → Z → 90
```

Mục đích của bước này là đặt các công trình theo hướng phù hợp với đường bay của máy bay.

---

## 6. Workspace Animation

Chuyển sang workspace:

```text
Animation
```

Workspace này thường bao gồm:

* Một viewport hiển thị góc nhìn Camera.
* Một viewport để quan sát và điều khiển scene.
* Dope Sheet ở phía dưới.
* Timeline được thu gọn ở sát đáy giao diện.

### Bố cục tổng quát

```text
┌───────────────────────┬───────────────────────┐
│                       │                       │
│    Camera View        │    3D Viewport        │
│                       │                       │
├───────────────────────┴───────────────────────┤
│                   Dope Sheet                  │
├───────────────────────────────────────────────┤
│                    Timeline                   │
└───────────────────────────────────────────────┘
```

---

## 7. Timeline, Dope Sheet và playhead

### 7.1. Timeline

Timeline cho biết:

* Frame hiện tại.
* Frame bắt đầu.
* Frame kết thúc.
* Các keyframe.
* Nút Play và Pause.
* Các nút di chuyển giữa keyframe.
* Tùy chọn tự động ghi keyframe.

### 7.2. Dope Sheet

Dope Sheet cung cấp nhiều thông tin hơn Timeline.

Nó hiển thị:

* Object đang có animation.
* Nhóm thuộc tính được animate.
* Các channel như Location và Rotation.
* Vị trí keyframe theo thời gian.

Ví dụ:

```text
Plane_Controller
└── Object Transforms
    ├── X Location
    ├── Y Location
    ├── Z Location
    ├── X Euler Rotation
    ├── Y Euler Rotation
    └── Z Euler Rotation
```

### 7.3. Playhead

Playhead là vạch chỉ frame hiện tại.

Có thể:

* Nhấp vào một vị trí trên Timeline.
* Kéo playhead sang trái hoặc phải.
* Nhập trực tiếp số frame.
* Dùng phím mũi tên để di chuyển từng frame.

Khi kéo playhead giữa các keyframe, Blender sẽ hiển thị trạng thái nội suy của object tại frame đó.

---

## 8. Frame rate và thời lượng animation

Trong **Output Properties**, có thể thiết lập:

* Frame Start.
* Frame End.
* Frame Rate.

Trong bài học, frame rate được đổi từ:

```text
24 fps → 25 fps
```

`fps` là viết tắt của **frames per second**, nghĩa là số khung hình trong một giây.

Với tốc độ `25 fps`:

| Thời gian |  Số frame |
| --------: | --------: |
|    1 giây |  25 frame |
|    2 giây |  50 frame |
|    3 giây |  75 frame |
|    4 giây | 100 frame |

Công thức:

```text
Số frame = Thời gian × Frame rate
```

Ví dụ:

```text
2 giây × 25 fps = 50 frame
```

Vì vậy, hoạt ảnh máy bay trong bài được thiết lập kéo dài khoảng 50 frame, tương đương 2 giây.

> Trong Blender, frame đầu thường được đặt là frame 1. Tuy nhiên, một số quy trình có thể sử dụng frame 0. Quan trọng nhất là giữ cách thiết lập nhất quán trong toàn bộ animation.

---

## 9. Thiết lập vị trí bắt đầu của máy bay

Chọn controller chính của máy bay thay vì chọn từng mesh riêng lẻ.

Sau đó di chuyển máy bay về phía ngoài khung hình:

```text
G → Y
```

Tùy theo hướng của scene, máy bay có thể di chuyển trên trục X hoặc Y. Trong bài học, chuyển động chính nằm dọc theo trục Y.

Controller giúp điều khiển toàn bộ máy bay:

```text
Plane Controller
├── Thân máy bay
├── Cánh
├── Đuôi
├── Buồng lái
└── Propeller Controller
    └── Cánh quạt
```

Khi di chuyển `Plane Controller`, tất cả thành phần của máy bay sẽ di chuyển theo.

---

## 10. Thiết lập camera

Để đặt camera nhanh theo góc nhìn hiện tại:

1. Đưa con trỏ chuột vào viewport Camera.
2. Nhấn:

```text
N
```

3. Mở tab **View**.
4. Bật:

```text
Lock Camera to View
```

5. Điều hướng viewport cho đến khi camera có góc phù hợp.
6. Tắt **Lock Camera to View** sau khi hoàn thành để tránh vô tình di chuyển camera.

Camera nên được bố trí sao cho:

* Có thể nhìn thấy tòa nhà và các thùng phuy.
* Máy bay bắt đầu ngoài khung hình.
* Máy bay kết thúc ngoài khung hình ở phía đối diện.
* Có đủ khoảng trống để quan sát toàn bộ chuyển động.

---

## 11. Khái niệm keyframe

Keyframe là một mốc thời gian lưu giá trị của thuộc tính.

Ví dụ:

```text
Frame 1:
Y Location = -15 m

Frame 50:
Y Location = 15 m
```

Blender sẽ tự tính toán các vị trí ở giữa:

```text
Frame 1        Frame 25          Frame 50
   ✈  ─────────── ✈ ─────────────── ✈
Bắt đầu          Ở giữa             Kết thúc
```

Quá trình Blender tự tính giá trị giữa hai keyframe được gọi là **interpolation** hoặc nội suy.

---

## 12. Tạo keyframe đầu tiên cho máy bay

### Bước 1: Chọn controller

Chọn:

```text
Plane Controller
```

### Bước 2: Đưa playhead về frame đầu

Ví dụ:

```text
Frame 1
```

### Bước 3: Đặt máy bay ở ngoài khung hình

Dùng:

```text
G → Y
```

### Bước 4: Chèn keyframe

Đưa con trỏ chuột vào 3D Viewport và nhấn:

```text
I
```

Chọn:

```text
Location & Rotation
```

Blender sẽ tạo keyframe cho:

* Vị trí X, Y, Z.
* Góc xoay X, Y, Z.

Một dấu keyframe màu vàng xuất hiện trên Timeline và Dope Sheet.

### Ý nghĩa màu sắc

| Màu         | Ý nghĩa thường gặp                                                    |
| ----------- | --------------------------------------------------------------------- |
| **Vàng**    | Thuộc tính có keyframe tại frame hiện tại và giá trị chưa bị thay đổi |
| **Xanh lá** | Thuộc tính đang được animate nhưng frame hiện tại không có keyframe   |
| **Cam**     | Giá trị đã bị thay đổi so với keyframe nhưng chưa chèn keyframe mới   |

---

## 13. Tạo keyframe thứ hai

Đưa playhead tới:

```text
Frame 50
```

Di chuyển máy bay sang phía đối diện:

```text
G → Y
```

Đặt máy bay ra ngoài camera ở phía còn lại.

Sau đó nhấn:

```text
I → Location & Rotation
```

Bây giờ máy bay có hai trạng thái:

```text
Frame 1                       Frame 50
Máy bay ngoài camera   →      Máy bay ngoài camera
bên trái hoặc phía sau        bên phải hoặc phía trước
```

Khi kéo playhead giữa hai frame, máy bay sẽ tự động bay qua scene.

---

## 14. Thay đổi Frame End

Vì animation chỉ kéo dài đến frame 50, nên có thể đổi:

```text
Frame End = 50
```

Điều này giúp:

* Timeline gọn hơn.
* Animation tự lặp lại ngay sau frame 50.
* Không phải chờ các frame trống từ 51 đến 250.
* Dễ kiểm tra thời lượng thực tế.

---

## 15. Phát thử animation

Nhấn:

```text
Spacebar
```

để phát hoặc tạm dừng animation.

Khi playhead đến Frame End, animation sẽ quay về Frame Start và lặp lại.

Có thể quan sát:

* Tốc độ bay của máy bay.
* Hướng chuyển động.
* Máy bay có xuất hiện và biến mất đúng lúc hay không.
* Camera có nhìn thấy đầy đủ scene hay không.

---

## 16. Xóa keyframe

Nếu vô tình chèn keyframe sai vị trí:

1. Chọn keyframe trong Dope Sheet.
2. Có thể chọn keyframe ở hàng tổng phía trên để chọn tất cả channel bên dưới.
3. Nhấn:

```text
X
```

hoặc:

```text
Delete
```

4. Xác nhận xóa keyframe.

Sau khi xóa một keyframe, thuộc tính sẽ không còn thay đổi tại mốc đó.

Ví dụ, nếu xóa keyframe ở frame 50 và chỉ còn keyframe đầu tiên, máy bay sẽ không bay qua scene nữa.

---

## 17. Di chuyển keyframe

Nếu keyframe được đặt nhầm frame, không nhất thiết phải xóa và tạo lại.

Trong Dope Sheet:

1. Chọn keyframe.
2. Nhấn:

```text
G
```

3. Di chuyển keyframe sang vị trí mới.
4. Nhấp chuột trái hoặc nhấn `Enter` để xác nhận.

Ví dụ:

```text
Keyframe đặt nhầm ở Frame 2
             ↓
Di chuyển về Frame 1
```

Có thể kéo trực tiếp keyframe bằng chuột, nhưng dùng `G` thường giúp thao tác nhất quán hơn.

---

## 18. Tạo animation cho cánh quạt

Máy bay đã chuyển động nhưng cánh quạt vẫn đứng yên. Vì vậy cần tạo một animation riêng cho `Propeller Controller`.

### Keyframe đầu tiên

1. Chọn `Propeller Controller`.
2. Đưa playhead về frame đầu.
3. Nhấn:

```text
I → Rotation
```

Chỉ cần keyframe Rotation vì cánh quạt không thay đổi Location.

Dope Sheet lúc này sẽ hiển thị nhóm:

```text
Object Transforms
└── Euler Rotation
```

`Euler` là một phương pháp Blender sử dụng để biểu diễn góc xoay của object.

---

## 19. Xoay cánh quạt nhiều vòng

Đưa playhead tới frame 50.

Cánh quạt trong bài quay quanh trục Y, vì vậy sử dụng:

```text
R → Y → 3600
```

Trong đó:

```text
360° = 1 vòng
3600° = 10 vòng
```

Sau đó chèn keyframe:

```text
I → Rotation
```

Blender sẽ nội suy góc xoay từ frame đầu tới frame 50, khiến cánh quạt quay trong suốt quá trình máy bay bay qua scene.

Nếu muốn cánh quạt quay nhanh hơn, có thể sử dụng:

```text
R → Y → 36000
```

Trong đó:

```text
36000° = 100 vòng
```

### Công thức số vòng quay

```text
Số vòng quay = Tổng góc xoay ÷ 360°
```

Ví dụ:

| Góc xoay |  Số vòng |
| -------: | -------: |
|     360° |   1 vòng |
|   1.440° |   4 vòng |
|   3.600° |  10 vòng |
|  18.000° |  50 vòng |
|  36.000° | 100 vòng |

---

## 20. Hai lớp animation của máy bay

Animation hoàn chỉnh gồm hai phần độc lập:

### Chuyển động tổng thể

```text
Plane Controller
Frame 1  → Location & Rotation
Frame 50 → Location & Rotation
```

### Chuyển động cục bộ

```text
Propeller Controller
Frame 1  → Rotation
Frame 50 → Rotation nhiều vòng
```

Sơ đồ:

```text
Plane Controller
│
├── Bay từ điểm A đến điểm B
│
└── Propeller Controller
    └── Quay nhiều vòng trong cùng khoảng thời gian
```

Nhờ hệ thống parent/controller, cánh quạt vừa:

* Di chuyển theo toàn bộ máy bay.
* Vừa quay quanh trục riêng của nó.

---

## 21. Thực hành từng bước

### Phần A — Chuẩn bị scene

1. Mở scene máy bay.
2. Chuyển sang Layout.
3. Chuyển viewport sang Material Preview.
4. Dùng Append để đưa tòa nhà và thùng phuy vào.
5. Thêm Plane làm mặt đất.
6. Scale mặt đất đủ lớn.
7. Xoay và sắp xếp các công trình theo hướng bay.

### Phần B — Thiết lập animation

1. Chuyển sang workspace Animation.
2. Đặt frame rate thành 25 fps.
3. Đặt Frame End thành 50.
4. Đặt camera nhìn ngang qua các công trình.
5. Chọn Plane Controller.
6. Tại frame 1, đặt máy bay ngoài camera.
7. Chèn `Location & Rotation`.
8. Tại frame 50, di chuyển máy bay sang phía đối diện.
9. Chèn `Location & Rotation`.

### Phần C — Animate cánh quạt

1. Chọn Propeller Controller.
2. Tại frame 1, chèn `Rotation`.
3. Tại frame 50, xoay quanh trục thích hợp nhiều vòng.
4. Chèn `Rotation`.
5. Nhấn Spacebar để xem kết quả.

---

## 22. Phím tắt và công cụ liên quan

| Phím tắt hoặc công cụ  | Chức năng                                   |
| ---------------------- | ------------------------------------------- |
| `Shift + A`            | Thêm object mới                             |
| `Shift + S`            | Mở Snap Pie Menu                            |
| `G`                    | Di chuyển object hoặc keyframe              |
| `G`, `Y`               | Di chuyển theo trục Y                       |
| `R`                    | Xoay object                                 |
| `R`, `Z`, `90`         | Xoay 90° quanh trục Z                       |
| `R`, `Y`, `3600`       | Xoay 3.600° quanh trục Y                    |
| `S`                    | Scale object                                |
| `I`                    | Chèn keyframe                               |
| `X` hoặc `Delete`      | Xóa keyframe đã chọn                        |
| `Spacebar`             | Play hoặc Pause animation                   |
| `N`                    | Mở hoặc đóng Sidebar                        |
| `Numpad .`             | Focus vào object đang chọn                  |
| Con lăn chuột          | Zoom trong Dope Sheet                       |
| Nhấn và kéo chuột giữa | Pan vùng nhìn trong Dope Sheet              |
| `File → Append`        | Đưa dữ liệu từ file `.blend` khác vào scene |
| `Lock Camera to View`  | Điều khiển camera thông qua viewport        |

---

## 23. Lỗi thường gặp

### 23.1. Chèn keyframe lên sai object

**Hiện tượng:** Chỉ một bộ phận máy bay di chuyển.

**Nguyên nhân:** Keyframe được chèn trực tiếp vào mesh thay vì Plane Controller.

**Khắc phục:** Chọn đúng controller chính trước khi chèn Location và Rotation.

---

### 23.2. Cánh quạt quay sai trục

**Hiện tượng:** Cánh quạt lắc hoặc xoay lệch thay vì quay quanh tâm.

**Nguyên nhân:** Sử dụng sai trục xoay.

**Khắc phục:** Kiểm tra hướng local axis của Propeller Controller và thử một trong các trục:

```text
R → X
R → Y
R → Z
```

Trong scene của bài học, trục quay được sử dụng là trục Y.

---

### 23.3. Máy bay không chuyển động

**Nguyên nhân có thể:**

* Chỉ có một keyframe.
* Hai keyframe có cùng Location.
* Keyframe được tạo trên object khác.
* Frame End nhỏ hơn vị trí keyframe cuối.

**Khắc phục:** Kiểm tra Dope Sheet và xác nhận có hai keyframe khác vị trí.

---

### 23.4. Máy bay vẫn nằm trong camera ở frame đầu

**Hiện tượng:** Máy bay xuất hiện sẵn ngay khi animation bắt đầu.

**Khắc phục:** Tại frame đầu, di chuyển máy bay xa hơn ra ngoài ranh giới camera rồi cập nhật keyframe.

---

### 23.5. Camera bị di chuyển ngoài ý muốn

**Nguyên nhân:** Vẫn đang bật `Lock Camera to View`.

**Khắc phục:** Tắt tùy chọn này ngay sau khi hoàn thành bố cục camera.

---

### 23.6. Animation tiếp tục chạy đến frame 250

**Nguyên nhân:** Chưa thay đổi Frame End.

**Khắc phục:**

```text
Frame End = 50
```

---

### 23.7. Keyframe nằm sai frame

**Khắc phục:** Chọn keyframe trong Dope Sheet và dùng:

```text
G
```

để di chuyển nó về đúng frame.

---

## 24. Thử thách cuối bài

Mở rộng scene thành một khu vực có nhiều chi tiết hơn.

Có thể thực hiện:

* Duplicate tòa nhà nhiều lần.
* Thay đổi vị trí và góc xoay của từng tòa nhà.
* Rải các thùng phuy thành từng cụm.
* Tạo thêm thùng gỗ hoặc crate.
* Gán nhiều material khác nhau cho các công trình.
* Thêm đường, vỉa hè hoặc sân bê tông.
* Thêm đèn và điều chỉnh camera.
* Thay đổi độ cao đường bay.
* Cho máy bay hơi nghiêng trong quá trình bay.

### Gợi ý bố cục

```text
             ✈ ─────────────────────►

     🏠          🏢         🏠
        🛢 🛢         📦
  ────────────────────────────────
        Khu công nghiệp nhỏ
```

Không cần dành quá nhiều thời gian cho bối cảnh ở bước đầu. Mục tiêu chính là tạo đủ vật thể tham chiếu để dễ quan sát chuyển động của máy bay.

---

## 25. Checklist thực hành

### Chuẩn bị scene

* [ ] Đã Append tòa nhà và các thùng phuy.
* [ ] Đã thêm Plane làm mặt đất.
* [ ] Đã sắp xếp công trình theo hướng bay.
* [ ] Đã đặt tên object hoặc tổ chức Collection hợp lý.

### Thiết lập animation

* [ ] Đã chuyển sang workspace Animation.
* [ ] Đã đặt Frame Rate thành 25 fps.
* [ ] Đã đặt Frame End thành 50.
* [ ] Đã bố trí camera phù hợp.
* [ ] Máy bay bắt đầu ngoài camera.
* [ ] Máy bay kết thúc ngoài camera.

### Keyframe máy bay

* [ ] Đã chọn đúng Plane Controller.
* [ ] Đã chèn Location & Rotation tại frame đầu.
* [ ] Đã chèn Location & Rotation tại frame 50.
* [ ] Máy bay bay qua toàn bộ scene.

### Keyframe cánh quạt

* [ ] Đã chọn Propeller Controller.
* [ ] Đã chèn Rotation tại frame đầu.
* [ ] Đã xoay cánh quạt nhiều vòng tại frame 50.
* [ ] Đã chèn keyframe Rotation thứ hai.
* [ ] Cánh quạt vừa quay vừa di chuyển theo máy bay.

### Kiểm tra

* [ ] Đã phát thử animation bằng Spacebar.
* [ ] Đã kiểm tra keyframe trong Dope Sheet.
* [ ] Đã xóa hoặc di chuyển các keyframe đặt nhầm.
* [ ] Đã lưu file Blender.

---

## 26. Tóm tắt

Bài học giới thiệu quy trình animation cơ bản trong Blender thông qua một cảnh máy bay bay ngang qua các công trình.

Quy trình chính gồm:

```text
Append object
      ↓
Sắp xếp bối cảnh
      ↓
Thiết lập camera
      ↓
Chọn frame rate và thời lượng
      ↓
Keyframe vị trí máy bay
      ↓
Keyframe góc quay cánh quạt
      ↓
Kiểm tra bằng Timeline và Dope Sheet
      ↓
Phát thử và tinh chỉnh
```

Máy bay sử dụng hai controller:

* **Plane Controller** điều khiển chuyển động tổng thể.
* **Propeller Controller** điều khiển chuyển động quay của cánh quạt.

Đây là nền tảng quan trọng để tiếp tục học các nội dung animation nâng cao hơn như:

* Điều chỉnh timing.
* Chỉnh interpolation.
* Sử dụng Graph Editor.
* Tạo chuyển động lặp.
* Làm camera animation.
* Render animation thành video.

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
