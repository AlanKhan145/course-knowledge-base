# 077 — Tạo hoạt ảnh bằng Bone trong Blender

| Thuộc tính       | Nội dung                                        |
| ---------------- | ----------------------------------------------- |
| **Module**       | Module 05 — Rigging & Animation                 |
| **Bài học**      | Animating Bones                                 |
| **Thời lượng**   | 12:05                                           |
| **Chủ đề chính** | Gắn mesh với Armature và tạo hoạt ảnh bằng bone |

---

## 1. Mục tiêu bài học

Sau bài học này, bạn có thể:

* Kiểm tra vị trí và transform của mesh và Armature trước khi rig.
* Gắn mô hình con rắn vào hệ thống bone bằng **Automatic Weights**.
* Hiểu cơ bản về mức độ ảnh hưởng của bone thông qua **Weight Paint**.
* Phân biệt hoạt ảnh trong **Object Mode** và **Pose Mode**.
* Chèn keyframe cho nhiều bone cùng lúc.
* Tạo chuỗi chuyển động con rắn:

  * Nằm nghỉ.
  * Ngẩng lên.
  * Tấn công.
  * Thu mình lại.
  * Trở về tư thế ban đầu.
* Điều chỉnh tốc độ chuyển động bằng cách di chuyển keyframe trong Dope Sheet.

---

## 2. Chuẩn bị mô hình trước khi rig

Trước khi gắn mô hình con rắn vào Armature, cần kiểm tra một số yếu tố quan trọng.

### 2.1. Kiểm tra vị trí của các bone

Các bone phải nằm bên trong mô hình.

Hãy kiểm tra mô hình từ nhiều góc nhìn, đặc biệt là:

* Front View.
* Side View.
* Top View.

Một Armature có thể trông đúng ở Front View nhưng thực tế lại bị lệch sang phía trước hoặc phía sau khi quan sát từ Side View.

```text
Nhìn từ Front View
       ┌──────────── Mesh ────────────┐
       │      Bone nằm chính giữa     │
       └───────────────────────────────┘

Nhìn từ Side View
       Mesh ───────────────
             Bone ─────────   ← Không được lệch khỏi mesh
```

---

### 2.2. Apply Rotation và Scale

Chọn mesh và Armature, sau đó nhấn:

```text
Ctrl + A
```

Chọn:

```text
Rotation & Scale
```

Sau khi áp dụng transform:

| Thuộc tính | Giá trị mong muốn |
| ---------- | ----------------: |
| Rotation X |                 0 |
| Rotation Y |                 0 |
| Rotation Z |                 0 |
| Scale X    |                 1 |
| Scale Y    |                 1 |
| Scale Z    |                 1 |

Có thể kiểm tra các giá trị này trong:

```text
N → Item
```

Việc áp dụng Rotation và Scale giúp hạn chế lỗi biến dạng khi rig và animate các mô hình phức tạp hơn.

> Không nên tùy tiện dùng **Apply Location** để đưa mô hình về tâm thế giới. Apply Location chỉ đặt lại giá trị Location thành `0`, nhưng không nhất thiết di chuyển hình học về tâm thế giới.

---

### 2.3. Đưa Object Origin về đúng vị trí

Object Origin nên nằm ở giữa hình học của mô hình.

Nếu origin bị lệch:

1. Chọn đối tượng.
2. Nhấn chuột phải.
3. Chọn:

```text
Set Origin → Origin to Geometry
```

Sau đó, để đưa origin và đối tượng trở lại tâm thế giới, có thể nhấn:

```text
Alt + G
```

Quy trình tổng quát:

```text
Origin bị lệch
      ↓
Set Origin → Origin to Geometry
      ↓
Alt + G
      ↓
Đối tượng trở về vị trí gốc của thế giới
```

---

## 3. Gắn mô hình với Armature

### 3.1. Quan hệ cha – con

Trong hệ thống rig:

* **Armature** là đối tượng cha.
* **Mesh con rắn** là đối tượng con.

Thứ tự chọn rất quan trọng:

1. Chọn mesh con rắn trước.
2. Giữ `Shift` và chọn Armature sau.
3. Armature phải là đối tượng đang hoạt động — **Active Object**.
4. Nhấn:

```text
Ctrl + P
```

5. Chọn:

```text
Armature Deform → With Automatic Weights
```

Sơ đồ quan hệ:

```text
Armature — Parent
    │
    ├── Bone 1
    ├── Bone 2
    ├── Bone 3
    └── ...
    │
    ▼
Snake Mesh — Child
```

Blender sẽ tự động tạo các **Vertex Group** và phân bố trọng số để xác định bone nào ảnh hưởng đến phần nào của mô hình.

---

## 4. Kiểm tra rig trong Pose Mode

Chọn Armature và chuyển sang **Pose Mode**:

```text
Ctrl + Tab
```

Hoặc chọn Pose Mode từ menu chế độ ở góc trên bên trái của 3D Viewport.

Chọn một bone và thử xoay:

```text
R
```

Để giới hạn xoay theo trục Y:

```text
R → Y
```

Nếu rig hoạt động đúng, mesh sẽ biến dạng theo bone.

Để xóa tư thế thử nghiệm và đưa các bone về trạng thái ban đầu:

1. Nhấn `A` để chọn tất cả bone.
2. Nhấn:

```text
Alt + R
```

Lệnh này xóa toàn bộ Rotation trong Pose Mode và đưa các bone trở về **Rest Pose**.

---

## 5. Hiểu về Automatic Weights và Weight Paint

### 5.1. Weight là gì?

Weight xác định mức độ một bone ảnh hưởng lên từng vertex của mesh.

Mỗi vertex có thể:

* Hoàn toàn chịu ảnh hưởng của một bone.
* Chịu ảnh hưởng một phần từ nhiều bone.
* Không chịu ảnh hưởng của bone đang kiểm tra.

### 5.2. Màu sắc trong Weight Paint

Khi chọn mesh và chuyển sang **Weight Paint Mode**, Blender hiển thị mức độ ảnh hưởng bằng màu sắc.

| Màu           | Mức độ ảnh hưởng            |
| ------------- | --------------------------- |
| Đỏ            | Ảnh hưởng tối đa, gần `1.0` |
| Vàng          | Ảnh hưởng cao               |
| Xanh lá       | Ảnh hưởng trung bình        |
| Xanh lam nhạt | Ảnh hưởng thấp              |
| Xanh lam đậm  | Gần như không ảnh hưởng     |

```text
Ảnh hưởng mạnh                                Ảnh hưởng yếu

Đỏ ───── Vàng ───── Xanh lá ───── Xanh lam ───── Xanh đậm
1.0                                                0.0
```

Ví dụ, bone ở cuối đuôi có thể ảnh hưởng hoàn toàn đến các vertex gần nó, nhưng chỉ ảnh hưởng một phần đến các vertex nằm gần bone kế bên.

---

## 6. Hiện tượng Pinching

Khi xoay mạnh hai bone liền nhau, phần mesh ở khớp nối có thể bị bóp hoặc lõm vào. Hiện tượng này thường được gọi là **pinching**.

```text
Bone 1 ───────╲
               ╲ Bone 2
                ▲
          Vùng dễ bị pinching
```

Nguyên nhân phổ biến:

* Mesh có quá ít polygon.
* Khoảng cách giữa các bone quá lớn.
* Số lượng bone quá ít.
* Weight được phân bố chưa hợp lý.
* Góc xoay giữa hai bone quá gắt.

Một số cách cải thiện:

* Thêm topology cho mesh.
* Thêm nhiều bone hơn.
* Điều chỉnh lại Weight Paint.
* Giảm góc xoay giữa các bone.
* Tạo quá trình chuyển tiếp mượt hơn giữa các vùng ảnh hưởng.

Trong bài học này, hiện tượng pinching có thể được chấp nhận vì mục tiêu chính là làm quen với animation bằng bone.

---

## 7. Object Mode và Pose Mode trong animation

### Object Mode

Object Mode được dùng khi muốn di chuyển toàn bộ nhân vật hoặc Armature trong không gian.

Ví dụ:

* Di chuyển nhân vật từ trái sang phải.
* Cho nhân vật chạy qua một cảnh.
* Di chuyển toàn bộ con rắn đến vị trí khác.

### Pose Mode

Pose Mode được dùng để thay đổi hình dáng và tư thế của nhân vật thông qua các bone.

Ví dụ:

* Uốn cong thân rắn.
* Nâng đầu rắn.
* Tạo tư thế tấn công.
* Điều khiển tay, chân và cột sống của nhân vật.

```text
Object Mode
Toàn bộ nhân vật di chuyển trong cảnh
                ↓
     [Armature + Mesh] ───────────→

Pose Mode
Các bone thay đổi tư thế bên trong nhân vật
                ↓
     Bone 1 → Bone 2 → Bone 3
```

Trong game, một walk cycle thường được tạo trong Pose Mode để nhân vật chạy tại chỗ. Sau đó, toàn bộ nhân vật được di chuyển trong thế giới bằng Object Mode hoặc bởi hệ thống điều khiển của game engine.

---

## 8. Tạo keyframe cho tư thế ban đầu

Chuyển Armature sang **Pose Mode**.

### Bước 1: Chọn tất cả bone

Nhấn:

```text
A
```

Việc chọn tất cả bone rất quan trọng. Nếu chỉ chọn một bone, Blender chỉ chèn keyframe cho bone đó.

### Bước 2: Chèn keyframe tại frame 1

Đưa playhead đến:

```text
Frame 1
```

Nhấn:

```text
I
```

Chọn:

```text
Location & Rotation
```

Có thể sử dụng `LocRotScale` nếu animation cần lưu cả Scale.

Sau khi chèn keyframe, Dope Sheet sẽ hiển thị keyframe cho tất cả các bone được chọn.

> Với animation lặp chính xác, có thể bắt đầu tại frame `0`. Tuy nhiên, bắt đầu từ frame `1` vẫn phù hợp với bài thực hành này.

---

## 9. Tạo tư thế con rắn ngẩng lên

Giả sử animation chạy ở tốc độ:

```text
25 FPS
```

Một giây sẽ tương ứng với khoảng:

```text
25 frame
```

### Các bước thực hiện

1. Di chuyển playhead đến frame `25`.
2. Bật **Auto Keying** bằng nút Record trên Timeline.
3. Xoay lần lượt các bone.
4. Tạo tư thế thân rắn cong lên giống chữ `S`.
5. Đưa đầu rắn ngả về phía sau để chuẩn bị tấn công.

```text
Frame 1                            Frame 25

Nằm trên mặt đất                  Ngẩng lên
───────────────                   ╭───── Head
                                  │
                                  ╰────╮
                                       ╰── Tail
```

Chuyển động:

```text
Tư thế nghỉ
    ↓
Thân bắt đầu uốn cong
    ↓
Đầu rắn nâng lên
    ↓
Tư thế chuẩn bị tấn công
```

Nếu hình dáng hơi gấp khúc, nguyên nhân thường là mô hình có ít bone và ít topology.

---

## 10. Tạo động tác tấn công

Động tác tấn công cần diễn ra nhanh hơn chuyển động ngẩng lên.

Ví dụ:

| Giai đoạn        | Frame gợi ý |
| ---------------- | ----------: |
| Nằm nghỉ         |           1 |
| Ngẩng lên        |          25 |
| Lao đầu tấn công |       30–35 |
| Thu đầu trở lại  |       38–45 |

### Thực hiện

1. Di chuyển playhead về phía trước khoảng 5–10 frame.
2. Xoay các bone để đầu rắn lao ra phía trước hoặc chúc xuống dưới.
3. Đảm bảo Auto Keying đang bật hoặc tự chèn keyframe bằng `I`.
4. Kiểm tra chuyển động bằng nút Play.

```text
Frame 25              Frame 32              Frame 40

Chuẩn bị               Tấn công               Thu lại
    S                      ───────→              S
```

---

## 11. Sao chép keyframe để trở về tư thế cũ

Sau khi con rắn tấn công, nó cần trở về tư thế ngẩng lên ban đầu.

### Cách thực hiện

1. Trong Pose Mode, nhấn `A` để chọn tất cả bone.
2. Trong Dope Sheet, chọn keyframe của tư thế ngẩng lên.
3. Nhấn:

```text
Shift + D
```

4. Di chuyển keyframe được sao chép đến vị trí sau động tác tấn công.
5. Nhấn chuột trái hoặc `Enter` để xác nhận.

> Không phải `Shift + D + X`. Keyframe trong Dope Sheet mặc định chỉ di chuyển theo trục thời gian nên chỉ cần `Shift + D`.

Nếu không chọn tất cả bone, Blender có thể chỉ sao chép keyframe của một bone, khiến các bone còn lại không trở về đúng tư thế.

---

## 12. Điều chỉnh tốc độ bằng Dope Sheet

Khoảng cách giữa các keyframe quyết định tốc độ của animation.

```text
Keyframe gần nhau
◆──◆
→ Chuyển động nhanh

Keyframe xa nhau
◆────────────◆
→ Chuyển động chậm
```

Để điều chỉnh:

1. Chọn keyframe trong Dope Sheet.
2. Nhấn:

```text
G
```

3. Di chuyển keyframe sang trái hoặc phải.
4. Nhấn chuột trái hoặc `Enter` để xác nhận.

Đối với động tác tấn công:

* Keyframe lao ra nên nằm gần tư thế chuẩn bị.
* Keyframe thu lại có thể xa hơn một chút để chuyển động trở về chậm hơn.

Ví dụ:

```text
Frame: 25    30        40
       ◆─────◆─────────◆
       Chuẩn  Tấn công  Thu lại
```

Ở đây:

* Tấn công mất 5 frame nên rất nhanh.
* Thu lại mất 10 frame nên chậm hơn.

---

## 13. Tạo khoảng dừng trước khi nằm xuống

Sau khi thu đầu về, con rắn nên giữ nguyên tư thế một lúc trước khi nằm xuống.

Để tạo khoảng dừng:

1. Chọn keyframe của tư thế ngẩng lên.
2. Nhấn `Shift + D`.
3. Đặt bản sao ở một frame phía sau.
4. Không thay đổi tư thế giữa hai keyframe này.

```text
Frame 40                Frame 50
◆───────────────────────◆
Cùng một tư thế

→ Con rắn giữ nguyên tư thế trong khoảng 10 frame
```

Nếu không sao chép keyframe, Blender sẽ bắt đầu nội suy ngay sang tư thế tiếp theo và không tạo được khoảng dừng rõ ràng.

---

## 14. Đưa con rắn trở về tư thế nằm

Để kết thúc animation:

1. Chọn tất cả bone bằng `A`.
2. Sao chép keyframe đầu tiên bằng `Shift + D`.
3. Di chuyển bản sao đến frame cuối, chẳng hạn frame `70`.
4. Điều chỉnh vị trí keyframe để tốc độ nằm xuống tự nhiên.

Sơ đồ animation hoàn chỉnh:

```text
Frame 1       Frame 25      Frame 30      Frame 40      Frame 50      Frame 70
   ◆────────────◆────────────◆────────────◆────────────◆────────────◆
 Nằm nghỉ     Ngẩng lên     Tấn công      Thu lại       Giữ tư thế    Nằm xuống
```

Một cách phân chia thời gian tham khảo:

| Giai đoạn             | Khoảng frame | Đặc điểm                        |
| --------------------- | -----------: | ------------------------------- |
| Nằm nghỉ → Ngẩng lên  |         1–25 | Chuyển động tương đối chậm      |
| Ngẩng lên → Tấn công  |        25–30 | Rất nhanh                       |
| Tấn công → Thu lại    |        30–40 | Nhanh nhưng chậm hơn lúc lao ra |
| Giữ tư thế            |        40–50 | Không thay đổi                  |
| Ngẩng lên → Nằm xuống |        50–70 | Chuyển động từ từ               |

---

## 15. Thiết lập animation lặp

Nếu keyframe cuối nằm ở frame `70`, không nên đặt End Frame đúng bằng `70`.

Nếu animation quay lại frame đầu ngay lập tức, con rắn sẽ vừa nằm xuống đã lập tức ngẩng lên, khiến vòng lặp quá gấp.

Có thể đặt:

```text
End Frame = 80
```

Khi đó, con rắn sẽ nằm yên thêm khoảng 10 frame trước khi animation lặp lại.

```text
Frame 70                 Frame 80                  Frame 1
◆────────────────────────◆       Loop →              ◆
Nằm xuống                Nghỉ                         Bắt đầu lại
```

So sánh:

| End Frame | Kết quả                                   |
| --------: | ----------------------------------------- |
|        70 | Animation lặp lại ngay, chuyển động gấp   |
|        80 | Có khoảng nghỉ trước khi bắt đầu vòng mới |

---

## 16. Workflow hoàn chỉnh

```text
Kiểm tra vị trí mesh và Armature
                ↓
Apply Rotation & Scale
                ↓
Kiểm tra Object Origin
                ↓
Chọn Mesh → Chọn Armature
                ↓
Ctrl + P → With Automatic Weights
                ↓
Pose Mode → Kiểm tra biến dạng
                ↓
Weight Paint → Kiểm tra ảnh hưởng của bone
                ↓
Frame 1 → Keyframe tư thế nằm
                ↓
Frame 25 → Tư thế ngẩng lên
                ↓
Frame 30 → Tấn công
                ↓
Frame 40 → Thu lại
                ↓
Frame 50 → Giữ nguyên tư thế
                ↓
Frame 70 → Trở về tư thế nằm
                ↓
End Frame 80 → Tạo khoảng nghỉ và loop
```

---

## 17. Phím tắt và công cụ quan trọng

| Phím tắt     | Chức năng                                           |
| ------------ | --------------------------------------------------- |
| `Ctrl + A`   | Apply transform                                     |
| `Ctrl + P`   | Parent đối tượng                                    |
| `Ctrl + Tab` | Mở menu chuyển chế độ, thường dùng để vào Pose Mode |
| `A`          | Chọn tất cả bone trong Pose Mode                    |
| `I`          | Chèn keyframe                                       |
| `R`          | Xoay bone                                           |
| `R`, `Y`     | Xoay bone theo trục Y                               |
| `G`          | Di chuyển bone hoặc keyframe                        |
| `Alt + R`    | Xóa Rotation của bone                               |
| `Alt + G`    | Xóa Location hoặc đưa đối tượng về vị trí gốc       |
| `Alt + S`    | Xóa Scale của bone                                  |
| `Shift + D`  | Nhân bản keyframe                                   |
| `N`          | Mở hoặc đóng Sidebar                                |
| `Spacebar`   | Phát hoặc dừng animation, tùy thiết lập keymap      |

---

## 18. Lỗi thường gặp

### 18.1. Bone không nằm bên trong mesh

**Biểu hiện:** Mesh biến dạng sai hoặc bone tác động lên vùng không mong muốn.

**Khắc phục:** Kiểm tra Armature từ Front, Side và Top View trước khi parent.

---

### 18.2. Quên Apply Rotation và Scale

**Biểu hiện:**

* Mesh biến dạng bất thường.
* Chuyển động không đúng trục.
* Scale của Armature hoặc mesh khác `1`.

**Khắc phục:**

```text
Ctrl + A → Rotation & Scale
```

---

### 18.3. Chọn sai thứ tự khi parent

**Sai:**

```text
Armature → Mesh
```

**Đúng:**

```text
Mesh → Armature → Ctrl + P
```

Armature phải được chọn cuối cùng và trở thành Active Object.

---

### 18.4. Animate trong Edit Mode

Edit Mode dùng để thay đổi cấu trúc và Rest Pose của Armature, không phải để tạo animation thông thường.

Hoạt ảnh bone phải được thực hiện trong:

```text
Pose Mode
```

---

### 18.5. Không chọn tất cả bone trước khi chèn hoặc sao chép keyframe

**Biểu hiện:** Chỉ một bone có keyframe hoặc chỉ một phần cơ thể chuyển động.

**Khắc phục:** Nhấn `A` trong Pose Mode trước khi chèn hoặc sao chép keyframe.

---

### 18.6. Animation tấn công quá chậm

**Nguyên nhân:** Khoảng cách giữa các keyframe quá xa.

**Khắc phục:** Trong Dope Sheet, chọn keyframe và nhấn `G` để đưa chúng lại gần nhau.

---

### 18.7. Không có khoảng dừng

**Biểu hiện:** Con rắn liên tục chuyển động, không giữ được tư thế chuẩn bị hoặc tư thế nghỉ.

**Khắc phục:** Nhân bản keyframe của cùng một tư thế và đặt nó ở frame phía sau.

---

### 18.8. Mesh bị pinching tại khớp

**Nguyên nhân:**

* Mesh low-poly.
* Quá ít bone.
* Automatic Weights phân bố chưa tốt.

**Khắc phục:**

* Thêm topology.
* Thêm bone.
* Chỉnh Weight Paint thủ công.

---

## 19. Bài tập thực hành

### Bài tập 1 — Rig con rắn

* Kiểm tra vị trí Armature.
* Apply Rotation và Scale.
* Parent mesh bằng Automatic Weights.
* Xoay thử từng bone trong Pose Mode.

### Bài tập 2 — Tạo animation ngẩng lên

* Frame 1: con rắn nằm.
* Frame 25: con rắn cong thành hình chữ `S`.
* Kiểm tra chuyển động trong Timeline.

### Bài tập 3 — Tạo động tác tấn công

* Cho đầu rắn lao ra trong khoảng 5–10 frame.
* Cho đầu rắn thu về chậm hơn.
* Điều chỉnh keyframe trong Dope Sheet.

### Bài tập 4 — Hoàn thiện vòng lặp

* Thêm khoảng dừng sau khi tấn công.
* Cho con rắn nằm xuống.
* Đặt End Frame lớn hơn frame cuối khoảng 10 frame.
* Phát animation ở chế độ Loop.

---

## 20. Checklist thực hành

* [ ] Bone nằm đúng bên trong mesh.
* [ ] Mesh và Armature có Rotation bằng `0`.
* [ ] Mesh và Armature có Scale bằng `1`.
* [ ] Object Origin nằm đúng vị trí.
* [ ] Mesh đã được parent với Armature bằng Automatic Weights.
* [ ] Có thể xoay bone và làm mesh biến dạng.
* [ ] Đã kiểm tra Weight Paint.
* [ ] Đã tạo keyframe cho tất cả bone ở tư thế ban đầu.
* [ ] Đã tạo tư thế con rắn ngẩng lên.
* [ ] Đã tạo chuyển động tấn công nhanh.
* [ ] Đã sao chép keyframe để con rắn thu lại.
* [ ] Đã tạo khoảng dừng bằng keyframe trùng nhau.
* [ ] Đã đưa con rắn trở về tư thế nằm.
* [ ] Đã đặt End Frame để animation lặp tự nhiên.
* [ ] Đã lưu file trước khi render.

---

## 21. Tóm tắt

Trong bài học này, mô hình con rắn được gắn với Armature bằng **Automatic Weights**. Blender sử dụng các trọng số vertex để xác định mức độ mỗi bone ảnh hưởng lên mesh. Các trọng số này có thể được kiểm tra và chỉnh sửa trong **Weight Paint Mode**.

Hoạt ảnh thay đổi tư thế được thực hiện trong **Pose Mode**. Mỗi bone có thể được xoay và chèn keyframe riêng, nhưng khi tạo tư thế cho toàn bộ con rắn, cần chọn tất cả bone trước khi chèn hoặc sao chép keyframe.

Chuỗi animation hoàn chỉnh gồm:

```text
Nằm nghỉ
   ↓
Ngẩng lên
   ↓
Lao ra tấn công
   ↓
Thu đầu trở lại
   ↓
Giữ nguyên tư thế
   ↓
Nằm xuống
   ↓
Tạm nghỉ
   ↓
Lặp lại
```

Tốc độ của từng chuyển động được kiểm soát bằng khoảng cách giữa các keyframe trong Dope Sheet. Keyframe càng gần nhau thì chuyển động càng nhanh; keyframe càng xa nhau thì chuyển động càng chậm.
