# 085 — Tạo hoạt ảnh chu kỳ đi bộ

## Animating the Walk Cycle

| Thuộc tính                | Nội dung                                       |
| ------------------------- | ---------------------------------------------- |
| **Module**                | Module 05 — Rigging & Animation                |
| **Bài học**               | Animating the Walk Cycle                       |
| **Thời lượng**            | 13:11                                          |
| **Chủ đề chính**          | Tạo hoạt ảnh chu kỳ đi bộ cho nhân vật TV Head |
| **Độ dài chu kỳ**         | 24 frame                                       |
| **Chế độ làm việc chính** | Pose Mode                                      |
| **Kiểu keyframe**         | Location & Rotation                            |

---

## 1. Mục tiêu bài học

Sau bài học này, anh có thể:

* Chuẩn bị giao diện Blender để tạo walk cycle.
* Sử dụng hình ảnh tham chiếu chu kỳ đi bộ.
* Tạo các tư thế chính tại frame `0`, `3`, `6`, `9` và `12`.
* Sao chép và lật đối xứng tư thế bằng **Paste X-Flipped Pose**.
* Tạo một walk cycle hoàn chỉnh dài `24 frame`.
* Thiết lập Auto Keying chỉ ghi lại **Location & Rotation**.
* Tránh lỗi lặp thừa frame khi render animation dạng vòng lặp.

---

# 2. Chuẩn bị không gian làm việc

## 2.1. Chuyển sang Animation Workspace

Chuyển sang workspace:

```text
Animation
```

Nếu nhân vật vẫn đang ở **Weight Paint Mode**, hãy chuyển về:

```text
Object Mode
```

Sau đó chọn armature và chuyển sang:

```text
Pose Mode
```

Có thể sử dụng:

```text
Ctrl + Tab
```

---

## 2.2. Thiết lập góc nhìn

Walk cycle cần được quan sát rõ từ bên cạnh vì phần lớn chuyển động diễn ra theo chiều trước–sau.

Nên sử dụng hai góc nhìn:

* Một cửa sổ ở **Side View**.
* Một cửa sổ ở góc **3/4 View**.

Góc nhìn 3/4 giúp chọn các bone ở phía sau nhân vật dễ dàng hơn.

### Phím tắt góc nhìn

| Phím tắt          | Chức năng                                    |
| ----------------- | -------------------------------------------- |
| `Numpad 3`        | Right View                                   |
| `Ctrl + Numpad 3` | Left View                                    |
| `` ` ``           | Mở View Pie Menu                             |
| `Ctrl + Spacebar` | Phóng to hoặc thu nhỏ vùng làm việc hiện tại |

Trong bài học, nhân vật ban đầu quay ngược hướng so với hình tham chiếu nên sử dụng:

```text
Ctrl + Numpad 3
```

để chuyển sang góc nhìn từ phía đối diện.

---

## 2.3. Hiển thị armature

Nếu không nhìn thấy bone trong cửa sổ 3D:

1. Mở **Viewport Overlays**.
2. Bật hiển thị **Bones**.
3. Chọn lại armature nếu giao diện chưa cập nhật.

Việc nhìn thấy bone là cần thiết để lựa chọn và điều khiển từng phần của rig.

---

## 2.4. Thêm mặt sàn

Một mặt sàn giúp dễ kiểm tra xem bàn chân có:

* Chạm đất hay không.
* Bị lơ lửng.
* Lún quá sâu xuống mặt đất.

Thao tác:

```text
Shift + A
→ Mesh
→ Plane
```

Sau đó:

```text
S
```

để phóng to mặt phẳng.

Có thể sử dụng:

```text
Alt + G
```

để đưa mặt phẳng trở về vị trí gốc nếu nó đang bị lệch.

---

# 3. Thêm hình ảnh tham chiếu walk cycle

## 3.1. Chuyển một vùng giao diện thành Image Editor

Trong bài học, vùng **Outliner** được đổi thành:

```text
Image Editor
```

Sau đó chọn:

```text
Open
```

và mở hình ảnh walk cycle được cung cấp trong tài nguyên bài học.

Hình tham chiếu sử dụng hai màu:

* **Đỏ:** tay và chân ở phía sau.
* **Xanh:** tay và chân ở phía trước.

---

## 3.2. Cấu trúc hình tham chiếu

Walk cycle trong bài dài `24 frame`.

Các tư thế tham chiếu được đặt cách nhau `3 frame`:

```text
0 → 3 → 6 → 9 → 12 → 15 → 18 → 21 → 24
```

Trong đó:

* Frame `0` giống frame `24`.
* Frame `12` là phiên bản đối xứng của frame `0`.
* Frame `15` là phiên bản đối xứng của frame `3`.
* Frame `18` là phiên bản đối xứng của frame `6`.
* Frame `21` là phiên bản đối xứng của frame `9`.

### Sơ đồ chu kỳ

```text
0 ─── 3 ─── 6 ─── 9 ─── 12 ─── 15 ─── 18 ─── 21 ─── 24
│                          │                              │
│                          └── Pose 0 được lật đối xứng   │
│                                                         │
└──────────────────────────── Pose 0 được lặp lại ────────┘
```

Hoặc biểu diễn theo nửa chu kỳ:

```text
Nửa chu kỳ thứ nhất          Nửa chu kỳ thứ hai
0 → 3 → 6 → 9 → 12          12 → 15 → 18 → 21 → 24
                              ↑
                    Các pose được lật trái–phải
```

---

# 4. Vì sao sử dụng 24 frame?

Blender mặc định thường sử dụng:

```text
24 FPS
```

Chu kỳ `24 frame` phù hợp vì:

* Dễ chia thành các khoảng `3 frame`.
* Một chu kỳ tương ứng khoảng một giây ở 24 FPS.
* Có đủ frame để tạo chuyển động rõ ràng.
* Việc xác định các tư thế đối xứng trở nên đơn giản.

Tuy nhiên, khi render một chu kỳ lặp, không nên render đồng thời cả frame `0` và frame `24`, vì hai frame này giống nhau.

Nếu cả hai cùng xuất hiện, animation có thể bị khựng nhẹ ở điểm nối.

### Thiết lập render phù hợp

```text
Start Frame: 1
End Frame: 24
```

Frame `0` vẫn được sử dụng để xây dựng animation, nhưng không nhất thiết phải xuất hiện trong đoạn render cuối.

---

# 5. Tạo tư thế đầu tiên tại frame 0

## 5.1. Chọn armature và vào Pose Mode

Thao tác:

```text
Chọn Armature
→ Ctrl + Tab
→ Pose Mode
```

Đặt playhead tại:

```text
Frame 0
```

---

## 5.2. Điều chỉnh cánh tay trên

Chọn bone cánh tay trên và xoay quanh trục `Y`:

```text
R → Y
```

Không nên chỉ nhấn `R` trong góc nhìn 3/4 vì bone có thể bị xoay lệch khỏi mặt phẳng chuyển động.

### So sánh

```text
R
```

Xoay tự do theo góc nhìn hiện tại, dễ làm tay lệch sang bên.

```text
R → Y
```

Giới hạn chuyển động quanh trục Y toàn cục, giúp tay vung đúng hướng trước–sau.

> Vì nhân vật được dựng thẳng theo các trục toàn cục nên sử dụng Global Axis là đủ cho bài tập cơ bản này.

---

## 5.3. Đặt vị trí hai chân

Chọn các IK controller hoặc bone điều khiển bàn chân:

* Một chân đưa về phía trước.
* Một chân đưa về phía sau.

Sử dụng:

```text
G
```

để di chuyển bàn chân.

Điều chỉnh sao cho tư thế gần giống hình tham chiếu.

Không cần khớp hoàn toàn từng pixel; điều quan trọng là:

* Hai chân mở ra rõ ràng.
* Có một chân trước và một chân sau.
* Nhân vật vẫn giữ được trọng lượng và sự cân bằng.

---

## 5.4. Hạ thân người xuống

Nếu hai chân quá thẳng hoặc nhân vật đang đứng quá cao, chọn bone gốc hoặc bone điều khiển phần thân dưới:

```text
G → Z
```

Hạ nhân vật xuống một chút để đầu gối có độ cong nhẹ.

Bàn chân nên:

* Chạm mặt sàn.
* Hoặc lún rất nhẹ xuống mặt sàn.

Lún nhẹ thường tốt hơn việc để chân lơ lửng vì lỗi lơ lửng dễ nhận thấy hơn trong animation.

---

## 5.5. Nghiêng thân người

Chọn bone thân chính và sử dụng:

```text
R
```

để nghiêng nhân vật nhẹ về phía trước.

Không nên nghiêng quá nhiều vì nhân vật có thể trông như sắp ngã.

---

## 5.6. Điều chỉnh bàn chân sau

Bàn chân sau có thể cần được xoay nhẹ để nằm gần mặt sàn hơn:

```text
R
```

Trong bài tập đơn giản, bàn chân có thể lún nhẹ xuống mặt sàn.

Đối với animation phức tạp hơn, rig thường cần thêm bone hoặc controller cho:

* Gót chân.
* Mũi chân.
* Động tác nhấc gót.
* Chuyển trọng lượng từ gót sang mũi.

---

## 5.7. Tạo chuyển động tay

Tay phải và tay trái vung ngược chiều với chân.

Ví dụ:

```text
Chân trái tiến về trước
→ Tay phải vung về trước
```

```text
Chân phải tiến về trước
→ Tay trái vung về trước
```

Ngoài cánh tay trên, có thể xoay nhẹ bone bàn tay để tạo cảm giác tay thả lỏng và tự nhiên hơn.

---

## 5.8. Chèn keyframe

Khi tư thế đầu tiên hoàn tất:

1. Chọn toàn bộ bone:

```text
A
```

2. Chèn keyframe:

```text
I
```

3. Chọn:

```text
Location & Rotation
```

Đây là pose tại frame `0`.

---

# 6. Sao chép pose đầu tiên sang frame 24

Frame `24` phải giống hoàn toàn frame `0` để tạo vòng lặp khép kín.

## Thao tác trong Dope Sheet

1. Chọn toàn bộ keyframe tại frame `0`.
2. Nhấn:

```text
Shift + D
```

3. Di chuyển bản sao đến frame:

```text
24
```

Có thể nhấn:

```text
X
```

để giới hạn thao tác duplicate theo chiều ngang của timeline.

### Lưu ý quan trọng

Phải bảo đảm tất cả các bone đều được chọn trước khi sao chép.

Nếu chỉ chọn một bone, Blender chỉ sao chép keyframe của bone đó. Kết quả là frame `24` sẽ không khớp hoàn toàn với frame `0`.

---

# 7. Tạo pose đối xứng tại frame 12

Frame `12` có cùng tư thế với frame `0`, nhưng tay và chân được đổi bên.

Thay vì tạo lại toàn bộ pose bằng tay, Blender có thể lật pose qua trục X.

## Quy trình

### Bước 1: Sao chép pose tại frame 0

Đặt playhead tại frame `0`.

Trong 3D Viewport:

```text
A
Ctrl + C
```

Hoặc:

```text
Pose
→ Copy Pose
```

### Bước 2: Chuyển đến frame 12

```text
Frame 12
```

### Bước 3: Dán pose đối xứng

```text
Ctrl + Shift + V
```

Hoặc:

```text
Pose
→ Paste X-Flipped Pose
```

### Bước 4: Chèn keyframe

```text
I
→ Location & Rotation
```

---

## Vì sao có thể lật pose theo trục X?

Rig được xây dựng đối xứng qua trục X:

```text
Bên trái ← X = 0 → Bên phải
```

Các bone trái và phải cũng cần có tên đối xứng đúng chuẩn, chẳng hạn:

```text
upper_arm.L
upper_arm.R
```

```text
foot.L
foot.R
```

Nhờ đó Blender có thể xác định bone nào cần đổi sang phía đối diện.

---

# 8. Kiểm tra walk cycle cơ bản

Sau khi có các pose tại:

```text
0 → 12 → 24
```

nhấn Play để kiểm tra.

Nhân vật đã có chuyển động giống bước đi cơ bản, nhưng animation vẫn còn đơn giản vì Blender chỉ nội suy trực tiếp giữa ba tư thế.

Các frame trung gian `3`, `6` và `9` sẽ giúp:

* Tạo độ nhún của cơ thể.
* Điều khiển vị trí chân chính xác hơn.
* Làm rõ quá trình chuyển trọng lượng.
* Tránh chuyển động quá thẳng và máy móc.

---

# 9. Thiết lập Auto Keying

## 9.1. Vấn đề với Auto Keying mặc định

Nếu bật nút **Auto Keying**, Blender có thể tự ghi cả:

* Location.
* Rotation.
* Scale.

Trong bài này, Scale không được sử dụng.

Việc ghi thêm Scale có thể:

* Tạo ra các channel không cần thiết.
* Làm Dope Sheet và Graph Editor rối hơn.
* Gây khó khăn khi chỉnh sửa animation.

---

## 9.2. Chọn Active Keying Set

Trong Timeline, tại mục:

```text
Active Keying Set
```

chọn:

```text
Location & Rotation
```

Sau đó bật nút:

```text
Auto Keying
```

Từ thời điểm này, khi di chuyển hoặc xoay bone, Blender chỉ tự tạo keyframe cho:

* Vị trí.
* Góc xoay.

---

# 10. Tạo pose tại frame 3

Frame `3` là giai đoạn cơ thể hạ xuống sau khi chân trước chạm đất.

## 10.1. Hạ thân người

Chọn bone điều khiển thân hoặc root:

```text
G → Z
```

Hạ nhân vật xuống một chút.

Đây thường là vị trí thấp nhất trong nửa đầu walk cycle.

---

## 10.2. Điều chỉnh chân chạm đất

Chân chịu lực cần chạm mặt sàn rõ ràng.

Di chuyển controller bàn chân:

```text
G
```

Nếu cần, xoay bàn chân:

```text
R
```

Bàn chân có thể lún nhẹ xuống sàn nhưng không nên bị lơ lửng.

---

## 10.3. Kiểm tra tay

Chuyển động của tay giữa frame `0` và frame `12` đã được Blender nội suy.

Nếu tay đã có vị trí phù hợp, không nhất thiết phải chỉnh quá nhiều tại frame `3`.

---

# 11. Tạo pose tại frame 6

Frame `6` là giai đoạn chân sau bắt đầu vượt qua chân trụ.

## 11.1. Nâng cơ thể trở lại

Sau khi hạ xuống ở frame `3`, phần thân bắt đầu nâng lên:

```text
G → Z
```

Không cần nâng quá cao vì điểm cao nhất nằm gần frame `9`.

---

## 11.2. Chân trụ

Chân trụ cần tiếp tục đứng chắc trên mặt sàn.

Điều chỉnh controller để:

* Bàn chân tiếp xúc với mặt đất.
* Đầu gối không bị khóa quá cứng.
* Cơ thể không trượt bất thường.

---

## 11.3. Chân đang bước

Chân còn lại được đưa về gần giữa cơ thể.

Có thể điều chỉnh:

```text
G
R
```

sao cho bàn chân đang chuẩn bị đi qua chân trụ.

---

# 12. Tạo pose tại frame 9

Frame `9` là điểm cơ thể được nâng lên cao nhất trong nửa chu kỳ đầu.

## 12.1. Nâng thân người

Chọn bone gốc hoặc bone thân:

```text
G → Z
```

Nâng nhân vật cao hơn frame `6` một chút.

So sánh trực tiếp với frame `0` để chắc chắn có sự thay đổi độ cao.

---

## 12.2. Điều chỉnh chân sau

Chân đang ở phía sau cần tiếp tục chạm đất hoặc vừa bắt đầu rời khỏi mặt đất, tùy hình tham chiếu.

Trong bài học, bàn chân có thể được đặt hơi lún nhẹ vào sàn để tránh hiện tượng lơ lửng.

---

## 12.3. Nâng chân phía trước

Chân đang di chuyển về phía trước cần được nâng lên:

```text
G → Z
```

Có thể xoay bàn chân:

```text
R
```

để mũi chân hướng tự nhiên hơn.

Không bắt buộc phải sao chép chính xác hoàn toàn hình tham chiếu. Chỉ cần bảo đảm:

* Chân đang di chuyển không xuyên sàn quá nhiều.
* Chân không bị duỗi cứng.
* Tư thế tổng thể có cảm giác đang tiến về phía trước.

---

# 13. Hoàn thiện keyframe cho toàn bộ bone

Trong quá trình sử dụng Auto Keying, Blender chỉ tạo keyframe cho các bone đã được chỉnh sửa.

Điều này có thể gây vấn đề khi sao chép pose đối xứng, vì một số bone không có keyframe tại frame `3`, `6` hoặc `9`.

Để bảo đảm mỗi pose chứa đầy đủ dữ liệu:

## Tại frame 3

```text
A
I
→ Location & Rotation
```

## Tại frame 6

```text
A
I
→ Location & Rotation
```

## Tại frame 9

```text
A
I
→ Location & Rotation
```

Sau bước này, toàn bộ bone đều có keyframe tại các frame cần thiết.

---

# 14. Sao chép và lật các pose trung gian

Nửa sau của walk cycle là phiên bản đối xứng của nửa đầu.

|   Pose gốc | Pose đối xứng |
| ---------: | ------------: |
|  Frame `0` |    Frame `12` |
|  Frame `3` |    Frame `15` |
|  Frame `6` |    Frame `18` |
|  Frame `9` |    Frame `21` |
| Frame `12` |    Frame `24` |

---

## 14.1. Sao chép frame 3 sang frame 15

Trong 3D Viewport:

```text
Frame 3
A
Ctrl + C
```

Chuyển đến:

```text
Frame 15
```

Dán đối xứng:

```text
Ctrl + Shift + V
```

Nếu Auto Keying không tự tạo keyframe, nhấn:

```text
I
→ Location & Rotation
```

---

## 14.2. Sao chép frame 6 sang frame 18

```text
Frame 6
A
Ctrl + C
```

Chuyển đến frame `18`:

```text
Ctrl + Shift + V
```

Sau đó chèn keyframe nếu cần.

---

## 14.3. Sao chép frame 9 sang frame 21

```text
Frame 9
A
Ctrl + C
```

Chuyển đến frame `21`:

```text
Ctrl + Shift + V
```

Sau đó chèn keyframe nếu cần.

---

## 14.4. Chú ý vị trí con trỏ chuột

Lệnh sao chép pose phải được thực hiện khi con trỏ chuột nằm trong:

```text
3D Viewport
```

Nếu nhấn `Ctrl + C` trong Dope Sheet, Blender sẽ sao chép các keyframe đang được chọn thay vì sao chép pose hiện tại.

### Phân biệt

| Vị trí con trỏ  | `Ctrl + C` thực hiện |
| --------------- | -------------------- |
| **3D Viewport** | Copy Pose            |
| **Dope Sheet**  | Copy Keyframes       |

---

# 15. Sơ đồ walk cycle hoàn chỉnh

```text
Frame:   0     3     6     9     12    15    18    21    24
         │     │     │     │      │     │     │     │     │
         A     B     C     D      A'    B'    C'    D'    A
```

Trong đó:

* `A`: Pose tiếp xúc đầu tiên.
* `B`: Cơ thể hạ xuống.
* `C`: Chân di chuyển đi qua giữa.
* `D`: Cơ thể nâng lên.
* `A'`: Pose A được lật trái–phải.
* `B'`: Pose B được lật trái–phải.
* `C'`: Pose C được lật trái–phải.
* `D'`: Pose D được lật trái–phải.

### Dòng chuyển động

```text
Chạm đất
   ↓
Hạ trọng tâm
   ↓
Chân đi qua
   ↓
Nâng trọng tâm
   ↓
Đổi chân
   ↓
Lặp lại đối xứng
```

---

# 16. Kiểm tra animation

Nhấn:

```text
Spacebar
```

để phát animation.

Quan sát các yếu tố sau:

## Chân

* Cả hai bàn chân có thay phiên bước hay không?
* Chân có chạm mặt sàn không?
* Có frame nào chân lơ lửng bất thường không?
* Bàn chân có xuyên sàn quá sâu không?

## Thân người

* Nhân vật có hạ xuống tại frame `3` và `15` không?
* Nhân vật có nâng lên tại frame `9` và `21` không?
* Thân người có nghiêng nhẹ về phía trước không?

## Tay

* Tay có vung ngược chiều với chân không?
* Chuyển động tay có quá mạnh hoặc quá cứng không?
* Bàn tay có độ thả lỏng nhẹ không?

## Vòng lặp

* Frame `0` và frame `24` có giống nhau không?
* Có hiện tượng giật tại điểm kết thúc chu kỳ không?
* Có bone nào bị thiếu keyframe trong nửa sau không?

---

# 17. Các phím tắt quan trọng

| Phím tắt           | Chức năng                                            |
| ------------------ | ---------------------------------------------------- |
| `Ctrl + Tab`       | Mở menu chuyển Object Mode, Edit Mode hoặc Pose Mode |
| `Numpad 3`         | Right View                                           |
| `Ctrl + Numpad 3`  | Left View                                            |
| `` ` ``            | Mở View Pie Menu                                     |
| `Ctrl + Spacebar`  | Phóng to vùng giao diện hiện tại                     |
| `Shift + A`        | Thêm object mới                                      |
| `Alt + G`          | Xóa Location, đưa object về vị trí mặc định          |
| `A`                | Chọn toàn bộ bone hoặc keyframe                      |
| `G`                | Di chuyển bone hoặc controller                       |
| `G`, `Z`           | Di chuyển theo trục Z                                |
| `R`                | Xoay bone                                            |
| `R`, `Y`           | Xoay quanh trục Y                                    |
| `I`                | Chèn keyframe                                        |
| `Shift + D`        | Nhân bản keyframe                                    |
| `Ctrl + C`         | Copy Pose khi con trỏ ở 3D Viewport                  |
| `Ctrl + Shift + V` | Paste X-Flipped Pose                                 |
| `Spacebar`         | Phát hoặc dừng animation                             |

---

# 18. Lỗi thường gặp

## 18.1. Chỉ sao chép keyframe của một bone

### Hiện tượng

Frame đối xứng bị thiếu chuyển động ở tay, chân hoặc thân.

### Nguyên nhân

Không chọn toàn bộ bone trước khi copy hoặc duplicate.

### Cách khắc phục

```text
A
```

để chọn toàn bộ bone trước khi:

```text
Ctrl + C
```

hoặc thao tác với keyframe.

---

## 18.2. Quên chèn keyframe sau khi dán pose

### Hiện tượng

Pose xuất hiện tạm thời nhưng biến mất khi chuyển sang frame khác.

### Nguyên nhân

Pose đã được dán nhưng chưa được ghi thành keyframe.

### Cách khắc phục

```text
I
→ Location & Rotation
```

---

## 18.3. Copy trong nhầm cửa sổ

### Hiện tượng

`Ctrl + C` không sao chép pose như mong muốn.

### Nguyên nhân

Con trỏ chuột đang nằm trong Dope Sheet.

### Cách khắc phục

Di chuyển con trỏ vào 3D Viewport trước khi nhấn:

```text
Ctrl + C
```

---

## 18.4. Tay hoặc chân xoay lệch sang bên

### Nguyên nhân

Chỉ sử dụng:

```text
R
```

trong góc nhìn 3/4.

### Cách khắc phục

Giới hạn trục xoay:

```text
R → Y
```

---

## 18.5. Ghi thừa Scale keyframe

### Hiện tượng

Dope Sheet xuất hiện thêm nhiều channel Scale không cần thiết.

### Cách khắc phục

Đặt **Active Keying Set** thành:

```text
Location & Rotation
```

trước khi bật Auto Keying.

---

## 18.6. Nhân vật bị lơ lửng

### Nguyên nhân

Bone thân được đặt quá cao hoặc bàn chân không chạm mặt sàn.

### Cách khắc phục

Hạ root hoặc body controller:

```text
G → Z
```

Điều chỉnh bàn chân chạm hoặc lún rất nhẹ xuống sàn.

---

## 18.7. Animation bị giật khi lặp

### Nguyên nhân

* Frame `0` và frame `24` không giống nhau.
* Render đồng thời hai frame giống nhau.
* Một số bone thiếu keyframe tại frame cuối.

### Cách khắc phục

* Duplicate chính xác frame `0` sang frame `24`.
* Khi xuất vòng lặp, bắt đầu render từ frame `1`.
* Kiểm tra toàn bộ bone tại frame `24`.

---

# 19. Checklist thực hành

## Chuẩn bị

* [ ] Đã chuyển sang Animation Workspace.
* [ ] Đã chuyển armature sang Pose Mode.
* [ ] Đã bật hiển thị bone trong Viewport Overlays.
* [ ] Đã thêm mặt phẳng làm sàn.
* [ ] Đã mở hình ảnh walk cycle trong Image Editor.
* [ ] Đã đặt End Frame thành `24`.

## Key pose

* [ ] Đã tạo pose đầu tiên tại frame `0`.
* [ ] Đã duplicate frame `0` sang frame `24`.
* [ ] Đã paste X-Flipped pose tại frame `12`.
* [ ] Đã tạo pose tại frame `3`.
* [ ] Đã tạo pose tại frame `6`.
* [ ] Đã tạo pose tại frame `9`.

## Nửa chu kỳ đối xứng

* [ ] Đã copy frame `3` sang frame `15`.
* [ ] Đã copy frame `6` sang frame `18`.
* [ ] Đã copy frame `9` sang frame `21`.
* [ ] Đã sử dụng Paste X-Flipped Pose.
* [ ] Đã chèn đầy đủ Location & Rotation keyframe.

## Kiểm tra

* [ ] Hai chân bước luân phiên.
* [ ] Hai tay vung ngược chiều với chân.
* [ ] Cơ thể có chuyển động lên xuống.
* [ ] Bàn chân không bị lơ lửng rõ ràng.
* [ ] Frame `0` và `24` giống nhau.
* [ ] Walk cycle chạy liên tục không bị giật.

---

# 20. Quy trình rút gọn

```text
Chuẩn bị Animation Workspace
        ↓
Thêm sàn và hình tham chiếu
        ↓
Tạo pose tại frame 0
        ↓
Duplicate frame 0 → frame 24
        ↓
Paste X-Flipped frame 0 → frame 12
        ↓
Tạo pose frame 3, 6 và 9
        ↓
Chèn keyframe cho toàn bộ bone
        ↓
Lật pose:
3 → 15
6 → 18
9 → 21
        ↓
Play và kiểm tra vòng lặp
        ↓
Lưu file
```

---

# 21. Tóm tắt bài học

Trong bài học này, walk cycle được xây dựng bằng một chu kỳ dài `24 frame`.

Nửa đầu chu kỳ gồm các pose tại:

```text
0 → 3 → 6 → 9 → 12
```

Nửa sau được tạo nhanh bằng cách lật đối xứng các pose:

```text
3 → 15
6 → 18
9 → 21
```

Frame `0` được duplicate sang frame `24` để bảo đảm điểm đầu và điểm cuối giống nhau.

Các kỹ thuật quan trọng nhất gồm:

* Sử dụng hình ảnh tham chiếu.
* Điều khiển chân bằng IK.
* Chèn keyframe Location & Rotation.
* Sử dụng Auto Keying đúng Keying Set.
* Copy Pose và Paste X-Flipped Pose.
* Tạo chuyển động lên xuống của thân người.
* Vung tay ngược chiều với chân.
* Kiểm tra kỹ điểm nối của animation loop.

Đây là một walk cycle cơ bản nhưng hiệu quả, giúp tổng hợp các kỹ năng về armature, IK, weight painting, pose và keyframe đã học trong các bài trước.
