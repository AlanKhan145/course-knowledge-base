# 037 — Creating the Torch

| Thuộc tính        | Nội dung                                                                        |
| ----------------- | ------------------------------------------------------------------------------- |
| **Module**        | Module 02 — Modular Dungeon                                                     |
| **Bài học**       | Creating the Torch                                                              |
| **Thời lượng**    | 11:13                                                                           |
| **Chủ đề chính**  | Dựng cây đuốc low-poly và tạo ngọn lửa                                          |
| **Công cụ chính** | Cylinder, Extrude, Inset, Loop Cut, Bevel, Proportional Editing, Material Slots |

---

## 1. Mục tiêu bài học

Sau bài học này, anh có thể:

* Dựng thân cây đuốc low-poly từ một Cylinder 8 cạnh.
* Tạo cán đuốc, vòng kim loại ở giữa và phần đầu đuốc từ cùng một mesh.
* Hiểu vì sao nên hoàn thiện hình dáng tổng thể trước khi thêm chi tiết nhỏ.
* Tạo ngọn lửa bằng một Cylinder riêng.
* Dùng Extrude, Scale và Auto Merge để thu ngọn lửa về một đỉnh.
* Dùng Bevel và Proportional Editing để tạo độ cong cho ngọn lửa.
* Gán nhiều material cho một object bằng Material Slots.
* Tạo vật liệu phát sáng cho ngọn lửa bằng Emission.
* Gán vật liệu gỗ và kim loại cho các vùng khác nhau của thân đuốc.

---

## 2. Kết quả mong muốn

Cây đuốc hoàn chỉnh gồm hai object chính:

```text
Torch
├── Torch Body
│   ├── Wooden Handle
│   ├── Metal Bracket
│   └── Metal Top
│
└── Flame
    └── Emission Material
```

Hình dáng tổng thể:

```text
             Ngọn lửa
                /\
               /  \
              /    \
             /      \
            /________\
          ┌────────────┐
          │  Đầu đuốc  │
          └─────┬──────┘
                │
          ┌─────┴──────┐
          │ Giá kim loại│
          └─────┬──────┘
                │
                │
                │  Cán gỗ
                │
               / \
              /___\
```

Phong cách cần giữ:

* Low-poly
* Ít polygon
* Silhouette dễ đọc
* Chi tiết đơn giản
* Phù hợp với môi trường dungeon

---

# 3. Thử thách đầu bài: gán vật liệu cho sàn

Trước khi tạo cây đuốc, bài học đưa ra một thử thách ngắn: hoàn thiện vật liệu cho các module sàn.

Scene đang có hai vật liệu màu xám:

```text
Gray
Gray Light
```

Mục tiêu là:

* Dùng một vật liệu cho phần gạch lát.
* Dùng vật liệu còn lại cho phần nền sàn.
* Tận dụng Material Slots để một object chứa hai vật liệu.
* Quan sát các linked duplicate tự động cập nhật.

---

## 4. Gán hai vật liệu cho một module sàn

### Cách thứ nhất: gán vật liệu chính trước

1. Chọn module sàn.
2. Mở Shading Workspace.
3. Chọn vật liệu `Gray Light` làm vật liệu chính.
4. Nhấn `Tab` để vào Edit Mode.
5. Chuyển sang Face Select bằng phím `3`.
6. Chọn mặt nền bên dưới.
7. Thêm một Material Slot mới.
8. Nhấn **Assign** để gán mặt đang chọn vào slot mới.
9. Chọn vật liệu `Gray` cho slot thứ hai.

Kết quả:

```text
Material Slot 1 → Gray Light → Các viên gạch
Material Slot 2 → Gray       → Mặt nền
```

Khi một face đã được gán vào slot chưa có material, nó có thể tạm thời chuyển thành màu trắng. Sau khi chọn material cho slot đó, màu sắc sẽ hiển thị trở lại.

---

## 5. Chọn phần mesh liên kết bằng phím L

Nếu một module chứa nhiều phần mesh không nối trực tiếp với nhau, có thể dùng `L` để chọn từng phần liên kết.

### Cách thực hiện

1. Vào Edit Mode.
2. Đưa chuột lên một phần mesh.
3. Nhấn `L`.
4. Phần geometry liên kết dưới con trỏ sẽ được chọn.

Ví dụ:

```text
Module sàn
├── Viên gạch trái   → L
├── Viên gạch giữa   → L
├── Viên gạch phải   → L
└── Nền sàn          → L
```

Cách này nhanh hơn việc chọn từng face bằng tay.

---

## 6. Linked Duplicate và vật liệu

Các module sàn trong scene là linked duplicate. Vì vậy, khi thay đổi material hoặc geometry của object gốc, các bản linked duplicate cũng cập nhật.

```text
Object gốc
    │
    ├── Thay đổi material
    ├── Thay đổi Material Slots
    └── Thay đổi mesh
            ↓
Tất cả linked duplicate cập nhật
```

Điều này giúp tiết kiệm thời gian khi hoàn thiện nhiều module giống nhau.

---

# 7. Phân tích hình dáng cây đuốc

Trước khi dựng model, cần chia cây đuốc thành các phần cơ bản:

```text
┌────────────────────────┐
│       Ngọn lửa         │
├────────────────────────┤
│     Miệng đầu đuốc     │
├────────────────────────┤
│   Phần lõm giữ lửa     │
├────────────────────────┤
│    Vòng kim loại giữa  │
├────────────────────────┤
│        Cán gỗ          │
├────────────────────────┤
│      Đáy cán nhỏ       │
└────────────────────────┘
```

Trong bài học, toàn bộ thân đuốc được dựng từ một Cylinder duy nhất. Không cần thêm Torus, Cone hay Curve riêng cho vòng kim loại.

---

# 8. Tạo thân đuốc từ Cylinder 8 cạnh

## Bước 1: Đưa 3D Cursor về vị trí phù hợp

Trong scene mẫu, 3D Cursor đã nằm ở giữa scene.

Nếu cần đưa nó về tâm thế giới, có thể dùng:

```text
Shift + S
    ↓
Cursor to World Origin
```

## Bước 2: Thêm Cylinder

Nhấn:

```text
Shift + A
    ↓
Mesh
    ↓
Cylinder
```

Trong bảng Add Cylinder, đặt:

```text
Vertices: 8
```

Sau đó nhấn `Enter`.

---

## 9. Vì sao chọn Cylinder 8 cạnh?

Số cạnh `8` phù hợp với phong cách low-poly và chia hết cho `4`.

Điều này giúp object có thể được Mirror theo cả hai trục:

```text
X Axis
Y Axis
```

Nếu cần làm việc đối xứng, ta có thể chỉ chỉnh một phần tư model:

```text
       Y
       ↑
   ┌───┼───┐
   │ Q2│ Q1│
X ←┼───┼───┼→
   │ Q3│ Q4│
   └───┼───┘
       ↓
```

Khi Mirror theo `X` và `Y`, thay đổi ở một góc sẽ xuất hiện ở ba góc còn lại.

Ngoài ra, Cylinder 8 cạnh còn có các ưu điểm:

* Ít polygon.
* Có silhouette góc cạnh.
* Phù hợp với phong cách dungeon low-poly.
* Dễ chọn edge loop.
* Dễ tạo các mặt phẳng rõ ràng.

---

# 10. Tạo hình dáng cán đuốc

## Bước 1: Thu nhỏ Cylinder

Sau khi thêm Cylinder:

```text
S
```

để thu nhỏ toàn bộ object.

Tiếp tục scale theo trục đứng:

```text
S → Z
```

để kéo dài thành cán đuốc.

```text
Cylinder ban đầu       Sau khi Scale Z

   _______                 ___
  /       \               /   \
 |         |             |     |
 |         |             |     |
  \_______/              |     |
                         |     |
                         |     |
                          \___/
```

---

## Bước 2: Thu nhỏ đáy cán

1. Nhấn `Tab` để vào Edit Mode.
2. Chuyển sang Face Select bằng phím `3`.
3. Chọn mặt đáy.
4. Nhấn `S` để thu nhỏ.

Kết quả là phần đáy cán hơi hẹp hơn phần thân:

```text
     │     │
     │     │
     │     │
      \   /
       \_/
```

Chi tiết này làm cán đuốc bớt đơn điệu và tạo silhouette rõ hơn.

---

# 11. Tạo vòng kim loại ở giữa cán

Phần giữa của cây đuốc có một vòng hoặc bracket kim loại nhô ra.

Thay vì dựng bracket trước, bài học khuyên nên hoàn thiện đường nét chính của cán rồi mới thêm bracket.

## Bước 1: Thêm hai Loop Cut

Nhấn:

```text
Ctrl + R
```

Cuộn con lăn chuột để tạo:

```text
2 Loop Cuts
```

Nhấn chuột trái hai lần để xác nhận vị trí.

```text
Trước:

│           │
│           │
│           │
│           │

Sau:

│           │
├───────────┤
│           │
├───────────┤
│           │
```

---

## Bước 2: Điều chỉnh vị trí Loop Cut

Chọn loop trên bằng:

```text
Alt + Left Click
```

Sau đó dùng:

```text
G → G
```

để Edge Slide.

Lặp lại với loop phía dưới.

```text
Loop trên    ────
              ↓ G G
Vị trí mới   ────
```

Nếu edge bị nhảy theo từng khoảng cố định, cần kiểm tra xem Snapping có đang bật hay không.

Tắt Snapping nếu muốn trượt edge tự do hơn.

---

## Bước 3: Chọn Face Loop

Chuyển sang Face Select:

```text
3
```

Giữ `Alt` và nhấp vào một cạnh nằm ngang chạy qua các mặt của dải giữa.

Blender sẽ chọn toàn bộ face loop bao quanh cán.

```text
    ┌─────────┐
    │         │
    ├═════════┤ ← Face loop được chọn
    │         │
    └─────────┘
```

---

## Bước 4: Extrude vòng kim loại ra ngoài

Nhấn:

```text
E
```

để Extrude.

Sau đó scale theo mặt phẳng ngang, không thay đổi chiều cao:

```text
S → Shift + Z
```

`Shift + Z` loại trừ trục `Z`, nghĩa là chỉ scale theo `X` và `Y`.

```text
Trước:

│       │
│       │

Sau:

│       │
├───────┤
│       │
```

Kết quả là một dải bracket nhô ra quanh phần giữa cán.

---

# 12. Vì sao nên tạo bracket sau thân cán?

Nếu bắt đầu bằng phần bracket lớn rồi tiếp tục Extrude thân cán từ đó, đường nối có thể xuất hiện chỗ gấp hoặc thay đổi kích thước ngoài ý muốn.

Quy trình nên dùng:

```text
Tạo thân cán thẳng
        ↓
Định hình silhouette chính
        ↓
Thêm Loop Cut
        ↓
Extrude bracket ra ngoài
```

Thay vì:

```text
Tạo bracket trước
        ↓
Extrude thân từ bracket
        ↓
Có thể xuất hiện chỗ gãy hoặc độ dốc không đều
```

Nguyên tắc chung:

> Hoàn thiện hình khối lớn trước, sau đó mới thêm chi tiết nhỏ.

---

# 13. Tạo phần đầu cây đuốc

Sau khi hoàn thành cán và bracket, tiếp tục chỉnh mặt trên cùng.

## Bước 1: Extrude phần chuyển tiếp

1. Chọn mặt trên.
2. Nhấn `E` để Extrude.
3. Scale mặt mới ra ngoài bằng `S`.
4. Nhấn `G → Z` để kéo lên.

Kết quả là phần thân mở rộng dần lên phía trên:

```text
       ┌───────┐
      /         \
     /           \
    │             │
    │     cán     │
```

---

## Bước 2: Tạo miệng đầu đuốc

Tiếp tục:

```text
E → Extrude
S → Scale outward
```

Điều này tạo phần miệng rộng hơn.

```text
       ┌───────────┐
       │           │
       └─────┬─────┘
            / \
           /   \
```

---

## Bước 3: Tạo phần lõm giữ lửa

Chọn mặt trên và nhấn:

```text
I
```

để Inset.

Inset tạo một mặt nhỏ hơn nằm bên trong mặt hiện tại:

```text
Mặt trên trước:

┌──────────────┐
│              │
└──────────────┘

Sau Inset:

┌──────────────┐
│  ┌────────┐  │
│  └────────┘  │
└──────────────┘
```

Sau đó:

```text
E
```

và kéo mặt inset xuống dưới để tạo phần lõm.

Có thể scale nhẹ phần mặt bên trong để nó đi theo độ dốc của thành đầu đuốc.

Kết quả:

```text
Mặt cắt phần đầu

┌───────────────┐
│ \           / │
│  \_________/  │
└───────────────┘
```

Phần lõm này sẽ là vị trí đặt ngọn lửa.

---

# 14. Điều chỉnh tỷ lệ sau khi dựng

Sau khi hoàn thành hình dáng cơ bản, có thể điều chỉnh lại:

* Chiều dài cán.
* Vị trí bracket.
* Kích thước phần đầu.
* Độ rộng miệng đuốc.
* Độ dốc của cán.

Tuy nhiên, thay đổi lớn sau khi đã thêm chi tiết có thể làm biến dạng các đường chéo.

---

## 15. Kéo dài cán đuốc

Để kéo dài cán:

1. Chọn mặt đáy.
2. Nhấn:

```text
G → Z
```

3. Kéo xuống dưới.

Nếu phần đáy có đường chéo hướng vào trong, việc kéo mặt đáy có thể làm thay đổi góc nghiêng.

```text
Trước:

│       │
 \     /
  \___/

Sau khi kéo thẳng xuống:

│       │
│       │
 \     /
  \___/
```

Có thể cần scale lại mặt đáy để khôi phục độ dốc mong muốn.

---

# 16. Di chuyển bracket

Để thay đổi vị trí vòng bracket:

1. Bật X-Ray.
2. Chọn toàn bộ các face hoặc vertex của bracket.
3. Nhấn:

```text
G → Z
```

4. Di chuyển bracket lên hoặc xuống.

```text
Trước:

│       │
├───────┤
│       │
│       │

Sau:

│       │
│       │
├───────┤
│       │
```

Sau khi di chuyển, cần kiểm tra lại các cạnh dốc ở hai bên bracket.

---

# 17. Thay đổi kích thước phần đầu

Có thể chọn các face loop ở phần trên rồi scale theo mặt phẳng ngang:

```text
S → Shift + Z
```

Thao tác này làm phần đầu rộng hơn nhưng không thay đổi chiều cao.

```text
Trước:

   ┌─────┐
   │     │
   └──┬──┘

Sau:

 ┌─────────┐
 │         │
 └────┬────┘
```

Nếu phần lõm bên trong không còn khớp, chọn face loop bên trong và cũng dùng:

```text
S → Shift + Z
```

---

# 18. Quy trình dựng thân đuốc

```text
┌─────────────────────────────┐
│ Add Cylinder — 8 Vertices   │
└──────────────┬──────────────┘
               ↓
┌─────────────────────────────┐
│ Scale nhỏ và kéo dài theo Z │
└──────────────┬──────────────┘
               ↓
┌─────────────────────────────┐
│ Thu nhỏ mặt đáy             │
└──────────────┬──────────────┘
               ↓
┌─────────────────────────────┐
│ Ctrl + R — thêm 2 Loop Cut  │
└──────────────┬──────────────┘
               ↓
┌─────────────────────────────┐
│ Extrude face loop ra ngoài  │
│ tạo bracket                 │
└──────────────┬──────────────┘
               ↓
┌─────────────────────────────┐
│ Extrude mặt trên và Scale   │
│ tạo phần đầu đuốc           │
└──────────────┬──────────────┘
               ↓
┌─────────────────────────────┐
│ Inset và Extrude xuống      │
│ tạo phần lõm                │
└─────────────────────────────┘
```

---

# 19. Đặt 3D Cursor tại đầu đuốc

Ngọn lửa sẽ được tạo thành một object riêng. Để thêm nó đúng vị trí, trước tiên cần đưa 3D Cursor lên đầu đuốc.

## Cách thực hiện

1. Trong Edit Mode, chọn face loop hoặc mặt ở giữa phần đầu đuốc.
2. Nhấn:

```text
Shift + S
```

3. Chọn:

```text
Cursor to Selected
```

3D Cursor sẽ được đặt tại tâm vùng đang chọn.

```text
       +  ← 3D Cursor
   ┌─────────┐
   │         │
   └─────────┘
```

---

## 20. Vì sao tạo ngọn lửa thành object riêng?

Trước khi thêm ngọn lửa, phải quay lại Object Mode:

```text
Tab
```

Nếu thêm mesh khi vẫn đang ở Edit Mode, mesh mới sẽ trở thành một phần của object thân đuốc.

Tạo ngọn lửa riêng có lợi vì:

* Dễ cô lập và chỉnh sửa.
* Dễ gán vật liệu Emission.
* Dễ chọn toàn bộ ngọn lửa.
* Dễ thay đổi kích thước và hình dáng.
* Có thể join với thân đuốc ở bài sau nếu cần.

```text
Object Mode
├── Torch Body
└── Flame
```

---

# 21. Tạo ngọn lửa từ Cylinder

## Bước 1: Thêm Cylinder mới

Nhấn:

```text
Shift + A
    ↓
Mesh
    ↓
Cylinder
```

Đặt:

```text
Vertices: 8
```

Cylinder mới xuất hiện tại vị trí 3D Cursor.

Thu nhỏ bằng:

```text
S
```

Sau đó dùng `G → Z` nếu cần đưa nó lên đúng vị trí.

---

## 22. Tạo phần thân ngọn lửa

1. Nhấn `Tab` để vào Edit Mode.
2. Chuyển sang Face Select bằng `3`.
3. Chọn mặt trên.
4. Nhấn `S` để mở rộng phần trên.

```text
Cylinder ban đầu:

   ┌─────┐
   │     │
   │     │
   └─────┘

Sau khi mở rộng mặt trên:

  ┌───────┐
 /         \
│           │
└───────────┘
```

---

## 23. Thu ngọn lửa thành một đỉnh

Tiếp tục từ mặt trên:

```text
E
```

để Extrude lên.

Sau đó:

```text
S
```

để thu nhỏ.

Extrude thêm một lần nữa:

```text
E
```

Sau đó nhập:

```text
S → 0
```

để scale các vertex về cùng một điểm.

Nhấn `Enter` để xác nhận.

```text
     ●
    / \
   /   \
  /     \
 /       \
└─────────┘
```

Nếu Auto Merge Vertices đang bật, các vertex ở đỉnh sẽ được gộp thành một vertex duy nhất.

---

## 24. Kiểm tra đỉnh ngọn lửa

Để chắc chắn đỉnh chỉ có một vertex:

1. Chuyển sang Vertex Select bằng phím `1`.
2. Bỏ chọn toàn bộ.
3. Chọn lại vertex ở đỉnh.
4. Di chuyển nhẹ bằng `G`.

Nếu toàn bộ đỉnh di chuyển như một điểm duy nhất, các vertex đã được merge.

Nếu vẫn còn nhiều vertex trùng nhau, có thể dùng:

```text
M
    ↓
By Distance
```

để gộp chúng.

---

# 25. Uốn ngọn lửa sang một bên

Ngọn lửa không nên hoàn toàn thẳng và đối xứng.

Chọn một edge loop nằm ở phần trên hoặc giữa:

```text
Alt + Left Click
```

Sau đó nhấn:

```text
G
```

và kéo sang một bên.

```text
Trước:          Sau:

    /\             /\
   /  \           /  \
  /    \         /    \
 /      \       /      \
│        │     │       /
```

Thao tác này tạo cảm giác ngọn lửa đang chuyển động.

---

# 26. Điều chỉnh độ rộng và chiều cao

Nếu ngọn lửa quá tròn hoặc quá dày, chọn toàn bộ bằng:

```text
A
```

Sau đó thu nhỏ theo mặt phẳng ngang:

```text
S → Shift + Z
```

Điều này thu nhỏ theo `X` và `Y` nhưng giữ nguyên chiều cao.

Tiếp tục kéo dài theo trục đứng:

```text
S → Z
```

```text
Trước:

   /\
  /  \
 /    \
│      │

Sau:

    /\
   /  \
  /    \
 /      \
│        │
```

Mục tiêu là tạo ngọn lửa cao, hẹp và rõ silhouette.

---

# 27. Thêm độ cong bằng Bevel

Ngọn lửa đơn giản có thể hơi góc cạnh. Có thể thêm hình học bằng cách Bevel một edge loop.

## Cách thực hiện

1. Chọn edge loop.
2. Nhấn:

```text
Ctrl + B
```

3. Kéo chuột để điều chỉnh độ rộng.
4. Cuộn con lăn để thay đổi số Segments.

```text
Trước:

│
│
│

Sau Bevel:

│
╲
 ╲
  │
```

Bevel tạo thêm loop và giúp ngọn lửa có đường cong mềm hơn.

Tuy nhiên, không nên dùng quá nhiều Segments vì mục tiêu vẫn là phong cách low-poly.

---

# 28. Tạo nhiều nhịp chuyển động cho ngọn lửa

Có thể Bevel thêm một edge loop gần phần đáy để tạo thêm một vùng điều khiển.

```text
Ngọn lửa
    ●
   / \
  /---\  ← Loop trên
 /     \
|-------| ← Loop dưới
|       |
```

Sau đó di chuyển các loop theo các hướng khác nhau:

```text
Loop trên  → lệch phải
Loop giữa  → lệch trái
Loop dưới  → gần trung tâm
```

Kết quả là ngọn lửa có nhịp chuyển động hình chữ S.

---

# 29. Proportional Editing

Proportional Editing cho phép di chuyển hoặc xoay một vùng mesh với ảnh hưởng giảm dần đến các vertex xung quanh.

Bật bằng:

```text
O
```

hoặc nhấn biểu tượng hình tròn trên thanh công cụ.

---

## 30. Di chuyển ngọn lửa bằng Proportional Editing

1. Chọn một edge loop ở giữa.
2. Bật Proportional Editing.
3. Nhấn:

```text
G
```

4. Di chuyển chuột.
5. Cuộn con lăn để thay đổi bán kính ảnh hưởng.

```text
Ảnh hưởng lớn:

       ○○○○○
     ○○  ●  ○○
       ○○○○○

Ảnh hưởng nhỏ:

        ○●○
```

Bán kính lớn làm nhiều phần của ngọn lửa di chuyển theo. Bán kính nhỏ chỉ ảnh hưởng vùng gần edge được chọn.

---

## 31. Xoay ngọn lửa bằng Proportional Editing

Ngoài di chuyển, có thể dùng:

```text
R
```

để xoay edge loop.

Các vertex lân cận sẽ xoay theo với mức độ giảm dần.

```text
Trước:

    │
    │
    │

Sau:

     ╱
    ╱
   │
```

Có thể xoay phần trên theo một hướng, sau đó di chuyển đỉnh sang hướng khác để tạo ngọn lửa có độ xoắn.

---

# 32. Các kiểu ngọn lửa có thể tạo

## Kiểu đơn giản

```text
    /\
   /  \
  /    \
 /      \
│        │
```

Ưu điểm:

* Ít polygon.
* Dễ đọc từ xa.
* Phù hợp phong cách low-poly.

## Kiểu nghiêng

```text
       /\
      /  \
     /   /
    /   /
   /___/
```

Ưu điểm:

* Có cảm giác chuyển động.
* Silhouette thú vị hơn.

## Kiểu uốn chữ S

```text
      /\
     /  \
    /  /
   /  /
    \ \
     \_\
```

Ưu điểm:

* Tự nhiên hơn.
* Phù hợp với animation hoặc cảnh có gió.

---

# 33. Quy trình tạo ngọn lửa

```text
┌───────────────────────────┐
│ Đặt 3D Cursor ở đầu đuốc │
└─────────────┬─────────────┘
              ↓
┌───────────────────────────┐
│ Object Mode               │
│ Add Cylinder — 8 sides    │
└─────────────┬─────────────┘
              ↓
┌───────────────────────────┐
│ Scale nhỏ                 │
│ Chọn mặt trên             │
└─────────────┬─────────────┘
              ↓
┌───────────────────────────┐
│ Extrude và Scale          │
│ tạo thân ngọn lửa         │
└─────────────┬─────────────┘
              ↓
┌───────────────────────────┐
│ Extrude → S 0             │
│ tạo đỉnh nhọn             │
└─────────────┬─────────────┘
              ↓
┌───────────────────────────┐
│ Di chuyển các edge loop   │
│ tạo dáng bất đối xứng     │
└─────────────┬─────────────┘
              ↓
┌───────────────────────────┐
│ Bevel và Proportional     │
│ Editing tạo độ cong       │
└───────────────────────────┘
```

---

# 34. Tạo vật liệu cho ngọn lửa

Chuyển sang Shading Workspace và chọn object ngọn lửa.

## Bước 1: Tạo material mới

Trong Material Properties hoặc Shader Editor:

```text
New Material
```

Đặt tên gợi ý:

```text
Flame
```

## Bước 2: Thiết lập màu phát sáng

Chọn màu vàng hoặc vàng cam:

```text
Vàng sáng
Vàng cam
Cam nhạt
```

Tăng giá trị Emission Strength để ngọn lửa có cảm giác tự phát sáng.

Trong vật liệu sử dụng Principled BSDF, có thể điều chỉnh:

```text
Base Color        → vàng cam
Emission Color    → vàng
Emission Strength → tăng nhẹ
```

Hoặc dùng Emission Shader tùy cách thiết lập material của khóa học.

---

## 35. Hiệu ứng phát sáng trong viewport

Khi tăng Emission, mesh ngọn lửa trở nên sáng hơn.

Trong môi trường bài học, hiệu ứng glow được quan sát bằng Bloom trong chế độ hiển thị phù hợp.

```text
Emission
    ↓
Ngọn lửa tự sáng
    ↓
Bloom
    ↓
Xuất hiện quầng sáng quanh lửa
```

Ở bài này, mục tiêu chính là làm ngọn lửa có vẻ phát sáng. Việc dùng ánh sáng từ ngọn đuốc để chiếu lên dungeon sẽ được xử lý trong bài tiếp theo.

---

# 36. Gán vật liệu gỗ cho thân đuốc

Chọn object thân đuốc.

Trong danh sách material, chọn vật liệu gỗ đã tạo trước đó:

```text
Brown Wood
```

Material này sẽ được gán mặc định cho toàn bộ thân đuốc.

```text
Torch Body
└── Brown Wood
```

Sau đó sử dụng Material Slot thứ hai để gán kim loại cho các vùng cần thiết.

---

# 37. Thêm Material Slot cho phần kim loại

## Bước 1: Tạo slot mới

Trong Material Properties:

1. Nhấn nút `+` để thêm Material Slot.
2. Chọn vật liệu:

```text
Metal Gray
```

Cấu trúc material lúc này:

```text
Material Slot 1 → Brown Wood
Material Slot 2 → Metal Gray
```

---

## 38. Chọn các mặt kim loại

1. Nhấn `Tab` để vào Edit Mode.
2. Chuyển sang Face Select bằng phím `3`.
3. Chọn:

   * Các mặt ở phần đầu đuốc.
   * Face loop của bracket ở giữa.
4. Giữ `Shift` để thêm nhiều mặt vào vùng chọn.

Có thể dùng Box Select nếu cần:

```text
B
```

Sau khi chọn đúng các mặt, chọn slot `Metal Gray` và nhấn:

```text
Assign
```

---

## 39. Phân bố vật liệu trên thân đuốc

```text
Torch Body
├── Cán chính         → Brown Wood
├── Đáy cán           → Brown Wood
├── Bracket ở giữa    → Metal Gray
└── Phần đầu đuốc     → Metal Gray
```

Minh họa:

```text
             Flame Material
                  /\
                 /  \
                /____\
            ┌──────────┐
            │  Metal   │
            └────┬─────┘
                 │
            ┌────┴─────┐
            │  Metal   │
            └────┬─────┘
                 │
                 │ Wood
                 │
                 │
                /_\
```

---

# 40. Phân biệt Object và Material Slot

Một object có thể chứa nhiều material.

```text
Một Object
├── Material Slot 1
├── Material Slot 2
└── Material Slot 3
```

Mỗi face của mesh có thể được gán vào một slot nhất định.

Trong bài này:

```text
Torch Body Object
├── Brown Wood
└── Metal Gray

Flame Object
└── Flame Emission
```

Ngọn lửa vẫn là object riêng nên không cần đặt material của nó vào thân đuốc ở bài này.

---

# 41. Phím tắt và công cụ liên quan

| Phím tắt/Công cụ      | Chức năng                             |
| --------------------- | ------------------------------------- |
| `Shift + A`           | Thêm object mới                       |
| `Tab`                 | Chuyển Object Mode và Edit Mode       |
| `S`                   | Scale                                 |
| `S → Z`               | Scale theo trục Z                     |
| `S → Shift + Z`       | Scale theo X và Y, loại trừ Z         |
| `G`                   | Di chuyển                             |
| `G → Z`               | Di chuyển theo trục Z                 |
| `G → G`               | Edge Slide                            |
| `E`                   | Extrude                               |
| `I`                   | Inset Face                            |
| `Ctrl + R`            | Thêm Loop Cut                         |
| `Ctrl + B`            | Bevel edge                            |
| `Alt + Left Click`    | Chọn edge loop hoặc face loop         |
| `Shift + Click`       | Thêm hoặc loại phần tử khỏi vùng chọn |
| `A`                   | Chọn toàn bộ                          |
| `L`                   | Chọn geometry liên kết dưới con trỏ   |
| `3`                   | Face Select                           |
| `1`                   | Vertex Select                         |
| `O`                   | Bật hoặc tắt Proportional Editing     |
| `R`                   | Rotate                                |
| `S → 0`               | Scale các vertex về cùng một điểm     |
| `Shift + S`           | Mở Snap Pie Menu                      |
| `Period` / `Numpad .` | Focus vào object hoặc vùng chọn       |
| `B`                   | Box Select                            |
| `M > By Distance`     | Gộp các vertex trùng hoặc gần nhau    |

---

# 42. Lưu ý và lỗi thường gặp

## 42.1. Thêm ngọn lửa khi vẫn ở Edit Mode

### Hiện tượng

Ngọn lửa trở thành một phần của object thân đuốc.

### Nguyên nhân

Cylinder mới được thêm khi đang ở Edit Mode.

### Khắc phục

Trước khi thêm ngọn lửa:

```text
Tab → Object Mode
```

---

## 42.2. Ngọn lửa có nhiều vertex trùng ở đỉnh

### Hiện tượng

Khi chọn hoặc di chuyển đỉnh, nhiều vertex tách rời xuất hiện.

### Nguyên nhân

Auto Merge không hoạt động hoặc các vertex chưa được merge.

### Khắc phục

Chọn vùng đỉnh rồi dùng:

```text
M → By Distance
```

---

## 42.3. Snapping làm Edge Slide bị giật

### Hiện tượng

Khi dùng `G → G`, edge chỉ di chuyển theo từng khoảng cố định.

### Nguyên nhân

Snapping đang bật.

### Khắc phục

Tắt biểu tượng nam châm trên thanh công cụ hoặc dùng phím tắt Snapping phù hợp.

---

## 42.4. Bracket làm cán bị gãy khúc

### Hiện tượng

Các cạnh bên của cán thay đổi độ dốc sau khi di chuyển bracket.

### Nguyên nhân

Di chuyển bracket sau khi hình học xung quanh đã có các mặt chéo.

### Khắc phục

* Hoàn thiện vị trí bracket sớm.
* Chọn thêm các loop xung quanh khi di chuyển.
* Scale hoặc chỉnh lại các edge sau khi di chuyển.

---

## 42.5. Phần đầu đuốc không đều

### Nguyên nhân có thể

* Scale sai trục.
* Chọn thiếu face loop bên trong.
* Phần inset không được scale cùng phần bên ngoài.

### Khắc phục

Khi mở rộng phần đầu, kiểm tra cả:

```text
Outer Face Loop
Inner Face Loop
```

Dùng:

```text
S → Shift + Z
```

để giữ nguyên chiều cao.

---

## 42.6. Ngọn lửa quá dày

### Khắc phục

Chọn toàn bộ ngọn lửa:

```text
A
```

Sau đó:

```text
S → Shift + Z
```

để thu nhỏ chiều ngang mà không làm giảm chiều cao.

---

## 42.7. Ngọn lửa quá phức tạp

### Nguyên nhân

* Bevel quá nhiều Segments.
* Thêm quá nhiều Loop Cut.
* Proportional Editing ảnh hưởng phạm vi quá lớn.

### Khắc phục

* Giảm số Segments.
* Giữ silhouette đơn giản.
* Ưu tiên ít loop nhưng đặt đúng vị trí.
* Kiểm tra thường xuyên trong Object Mode.

---

## 42.8. Material kim loại phủ toàn bộ thân đuốc

### Nguyên nhân

Chọn material nhưng chưa gán đúng face bằng nút **Assign**.

### Khắc phục

1. Chọn slot gỗ làm material mặc định.
2. Vào Edit Mode.
3. Chọn các face kim loại.
4. Chọn slot `Metal Gray`.
5. Nhấn **Assign**.

---

# 43. Quy trình thực hành hoàn chỉnh

```text
┌──────────────────────────────┐
│ Hoàn thiện material cho sàn  │
└──────────────┬───────────────┘
               ↓
┌──────────────────────────────┐
│ Add Cylinder — 8 cạnh        │
│ tạo thân đuốc                │
└──────────────┬───────────────┘
               ↓
┌──────────────────────────────┐
│ Scale và chỉnh mặt đáy       │
└──────────────┬───────────────┘
               ↓
┌──────────────────────────────┐
│ Thêm 2 Loop Cut              │
│ Extrude bracket ra ngoài     │
└──────────────┬───────────────┘
               ↓
┌──────────────────────────────┐
│ Extrude phần đầu             │
│ Inset và tạo phần lõm        │
└──────────────┬───────────────┘
               ↓
┌──────────────────────────────┐
│ Đặt 3D Cursor ở đầu đuốc     │
└──────────────┬───────────────┘
               ↓
┌──────────────────────────────┐
│ Tạo Flame bằng Cylinder 8    │
└──────────────┬───────────────┘
               ↓
┌──────────────────────────────┐
│ Extrude → S 0 tạo đỉnh       │
│ Uốn ngọn lửa                 │
└──────────────┬───────────────┘
               ↓
┌──────────────────────────────┐
│ Bevel và Proportional Edit   │
└──────────────┬───────────────┘
               ↓
┌──────────────────────────────┐
│ Flame → Emission Material    │
│ Body → Wood + Metal Slots    │
└──────────────────────────────┘
```

---

# 44. Bài thực hành

## Thử thách 1 — Tạo thân đuốc

Dựng cây đuốc từ Cylinder 8 cạnh và đảm bảo có:

* Cán dài.
* Đáy cán thu nhỏ.
* Bracket ở giữa.
* Phần đầu mở rộng.
* Phần lõm giữ lửa.

## Thử thách 2 — Tạo ngọn lửa

Dùng một Cylinder riêng và:

* Thu đỉnh về một vertex.
* Làm ngọn lửa cao và hẹp.
* Uốn ít nhất một edge loop.
* Dùng Proportional Editing để tạo độ cong.
* Giữ số polygon thấp.

## Thử thách 3 — Gán vật liệu

Gán:

```text
Cán đuốc       → Brown Wood
Bracket        → Metal Gray
Đầu đuốc       → Metal Gray
Ngọn lửa       → Flame Emission
```

## Thử thách 4 — Tạo biến thể

Tạo một phiên bản ngọn lửa khác:

* Nghiêng mạnh hơn.
* Có hai đoạn cong.
* Đỉnh xoắn nhẹ.
* Phần đáy rộng hơn hoặc hẹp hơn.

---

# 45. Checklist thực hành

## Thân đuốc

* [ ] Đã dùng Cylinder 8 cạnh.
* [ ] Đã tạo cán đuốc dài và có đáy thu nhỏ.
* [ ] Đã thêm hai Loop Cut cho bracket.
* [ ] Đã Extrude bracket ra ngoài.
* [ ] Đã tạo phần đầu đuốc rộng hơn cán.
* [ ] Đã dùng Inset để tạo phần lõm.
* [ ] Silhouette của đuốc rõ ràng khi nhìn từ xa.

## Ngọn lửa

* [ ] Ngọn lửa là object riêng.
* [ ] Đã dùng Cylinder 8 cạnh.
* [ ] Đỉnh ngọn lửa chỉ còn một vertex.
* [ ] Đã thu nhỏ chiều ngang bằng `S → Shift + Z`.
* [ ] Đã kéo dài ngọn lửa theo trục Z.
* [ ] Đã tạo dáng bất đối xứng.
* [ ] Đã thử Bevel edge loop.
* [ ] Đã thử Proportional Editing.

## Vật liệu

* [ ] Cán đuốc sử dụng vật liệu gỗ.
* [ ] Bracket sử dụng vật liệu kim loại.
* [ ] Phần đầu sử dụng vật liệu kim loại.
* [ ] Ngọn lửa sử dụng vật liệu Emission.
* [ ] Các face đã được Assign đúng Material Slot.

## Hoàn thiện

* [ ] Không có vertex trùng ở đỉnh ngọn lửa.
* [ ] Không thêm ngọn lửa nhầm vào mesh thân đuốc.
* [ ] Không dùng quá nhiều polygon.
* [ ] Đã lưu file Blender.

---

# 46. Phạm vi của bài học

Bài này tập trung vào:

```text
Modeling cây đuốc
        +
Tạo ngọn lửa
        +
Gán vật liệu
```

Các nội dung sau thuộc bài kế tiếp:

* Join ngọn lửa với thân đuốc.
* Đặt đuốc lên tường.
* So sánh Eevee và Cycles.
* Thêm Point Light.
* Điều chỉnh Power và Radius của đèn.
* Duplicate đuốc quanh dungeon.
* Điều chỉnh World Background.

Do đó, trong bài 037 chưa cần thêm Point Light hoặc thiết lập ánh sáng cho toàn bộ dungeon.

---

# 47. Tóm tắt bài học

Bài học xây dựng một cây đuốc low-poly từ hai Cylinder 8 cạnh:

```text
Cylinder 1 → Thân đuốc
Cylinder 2 → Ngọn lửa
```

Thân đuốc được tạo bằng cách:

```text
Scale
→ Loop Cut
→ Extrude
→ Inset
```

Ngọn lửa được tạo bằng cách:

```text
Extrude
→ S 0
→ Di chuyển edge loop
→ Bevel
→ Proportional Editing
```

Cuối cùng, cây đuốc được hoàn thiện bằng ba loại vật liệu:

```text
Gỗ      → Cán đuốc
Kim loại → Bracket và đầu đuốc
Emission → Ngọn lửa
```

Nguyên tắc quan trọng nhất của bài là hoàn thiện silhouette và hình khối lớn trước, sau đó mới thêm bracket, độ cong và vật liệu. Cách làm này giúp model dễ chỉnh sửa, giữ topology đơn giản và phù hợp với phong cách modular dungeon low-poly.
