# 027 — Pillar Details: Bevel

| Thuộc tính        | Nội dung                                               |
| ----------------- | ------------------------------------------------------ |
| **Module**        | Module 02 — Modular Dungeon                            |
| **Bài học**       | Pillar Details – Bevel                                 |
| **Thời lượng**    | 9:54                                                   |
| **Chủ đề chính**  | Tạo các cạnh sứt mẻ và hư hại cho cột bằng Bevel       |
| **Công cụ chính** | Mirror Modifier, Apply Scale, Edge Bevel, Vertex Bevel |

---

## 1. Mục tiêu bài học

Sau bài học này, anh có thể:

* Sắp xếp các cột vào một **Collection** riêng.
* Hiểu vì sao cần **Apply Mirror Modifier** trước khi tạo chi tiết hư hại bất đối xứng.
* Hiểu tác động của **Scale không đồng nhất** đối với công cụ Bevel.
* Biết cách dùng `Ctrl + A > Scale` trước khi chỉnh sửa hình học.
* Tạo các cạnh vát, góc bị mẻ và bề mặt cột không đồng đều bằng:

  * **Edge Bevel**
  * **Vertex Bevel**
* Chỉnh sửa nhiều object cùng lúc trong Edit Mode.
* Nhận biết rủi ro khi chỉnh sửa nhiều object đồng thời.

---

## 2. Kết quả mong muốn

Từ các khối cột đối xứng và còn khá đơn giản:

```text
Cột ban đầu
┌──────────┐
│          │
│          │
│          │
└──────────┘
```

Ta tạo ra những cột đá có cạnh bị mòn, góc bị sứt và hình dáng không hoàn toàn giống nhau:

```text
Cột sau khi thêm chi tiết
   ╱───────┐
  ╱        │
 │       ╲ │
 │        ╲│
 └─────╲───┘
```

Mục tiêu không phải làm cột tròn và mượt, mà giữ được phong cách:

* Low-poly
* Góc cạnh
* Cũ kỹ
* Bị va đập
* Có sự khác biệt giữa từng cột

---

# 3. Sắp xếp các cột vào Collection

Trước khi chỉnh sửa, nên đưa toàn bộ các object cột vào một Collection riêng.

## Cách thực hiện

1. Chọn tất cả các cột.
2. Nhấn `M`.
3. Chọn **New Collection**.
4. Đặt tên:

```text
Pillars
```

5. Nhấn `Enter` để xác nhận.

## Cách khác

Có thể tạo Collection bằng nút **Add Collection** trong Outliner, sau đó kéo các object vào Collection mới.

## Cấu trúc Outliner gợi ý

```text
Scene Collection
├── Dungeon
├── Walls
├── Floor
└── Pillars
    ├── Pillar_01
    ├── Pillar_02
    └── Pillar_03
```

Việc tổ chức object theo Collection giúp:

* Dễ chọn toàn bộ nhóm cột.
* Dễ ẩn hoặc hiện nhóm object.
* Giữ scene gọn gàng.
* Thuận tiện khi scene ngày càng phức tạp.

---

# 4. Vì sao phải Apply Mirror Modifier?

Các cột hiện vẫn đang sử dụng **Mirror Modifier**.

Điều đó có nghĩa là mọi thay đổi ở một nửa sẽ tự động xuất hiện ở nửa còn lại.

```text
Chỉnh sửa phía trên
        ↓
┌────────────┐
│  Vết mẻ    │
│            │
│  Vết mẻ    │  ← Mirror tự lặp lại ở phía dưới
└────────────┘
```

Cơ chế này hữu ích khi đang xây dựng hình dạng cơ bản đối xứng. Tuy nhiên, nó không phù hợp với các chi tiết hư hại như:

* Vết mẻ
* Góc bị vỡ
* Cạnh bị mòn
* Chỗ lồi lõm
* Biến dạng ngẫu nhiên

Trong thực tế, một vết hư hại ở đầu cột thường không xuất hiện chính xác ở vị trí đối xứng phía dưới.

## Trước khi Apply Mirror

```text
Phía trên: vết mẻ
Phía dưới: tự động xuất hiện vết mẻ giống hệt
```

## Sau khi Apply Mirror

```text
Phía trên: có thể chỉnh riêng
Phía dưới: có thể chỉnh riêng
```

---

## 5. Cách Apply Mirror Modifier

### Bước 1: Chuyển sang Object Mode

Modifier chỉ có thể được Apply trong **Object Mode**.

Nhấn:

```text
Tab
```

để chuyển từ Edit Mode sang Object Mode.

> Con trỏ chuột cần nằm trên 3D Viewport khi sử dụng `Tab`. Nếu con trỏ đang nằm trên một vùng giao diện khác, phím tắt có thể không hoạt động như mong muốn.

### Bước 2: Apply Modifier

1. Mở tab **Modifiers**.
2. Tìm Mirror Modifier.
3. Mở menu thả xuống của modifier.
4. Chọn **Apply**.

```text
Object Mode
    ↓
Modifier Properties
    ↓
Mirror Modifier
    ↓
Menu ▼
    ↓
Apply
```

Sau khi Apply, phần hình học được tạo bởi Mirror trở thành mesh thật.

---

## 6. Hạn chế sau khi Apply Mirror

Sau khi Apply, hai phía của cột không còn liên kết với nhau.

Ví dụ, khi di chuyển cạnh trên:

```text
G → Z
```

chỉ phần trên thay đổi. Phần dưới sẽ không tự động thay đổi theo.

Nếu muốn chỉnh cả hai đầu giống nhau, anh phải:

1. Chọn cạnh phía trên và chỉnh sửa.
2. Chọn cạnh phía dưới và thực hiện thay đổi tương ứng.

### Ưu điểm

* Có thể tạo chi tiết bất đối xứng.
* Mỗi đầu cột có thể có mức độ hư hại khác nhau.
* Cột trông tự nhiên hơn.

### Nhược điểm

* Các thay đổi lớn phải thực hiện ở cả hai phía.
* Không thể tiếp tục chỉnh sửa đối xứng nhanh như trước.
* Muốn dùng Mirror lại, có thể phải xóa một nửa mesh rồi thêm Mirror Modifier mới.

> Vì vậy, chỉ nên Apply Mirror khi hình dạng tổng thể của cột đã tương đối hoàn chỉnh.

---

# 7. Apply Scale trước khi Bevel

Một vấn đề quan trọng trong bài là **Scale không đồng nhất**.

Ví dụ:

```text
Scale X = 1
Scale Y = 1
Scale Z = 3
```

Điều này thường xảy ra khi object được kéo dài trong Object Mode.

Mặc dù cột nhìn đúng kích thước, Blender vẫn ghi nhớ rằng object đã bị scale mạnh theo trục `Z`.

---

## 8. Scale không đồng nhất ảnh hưởng đến Bevel như thế nào?

Khi Bevel một vertex hoặc edge, khoảng cách bevel có thể không đều.

Ví dụ:

```text
        Khoảng bevel ngắn
               ↓
        ┌───────╲
        │
        │
        │
        ╲────────
             ↑
       Khoảng bevel dài
```

Nguyên nhân là Blender đang tính toán Bevel dựa trên tỷ lệ scale của object.

Nếu các trục có scale khác nhau, cùng một thao tác Bevel có thể tạo ra khoảng cách khác nhau theo từng hướng.

---

## 9. Cách Apply Scale

### Bước 1: Chuyển sang Object Mode

```text
Tab
```

### Bước 2: Mở Apply Menu

Nhấn:

```text
Ctrl + A
```

### Bước 3: Chọn Scale

```text
Ctrl + A
    ↓
Scale
```

Sau khi Apply Scale:

```text
Scale X = 1
Scale Y = 1
Scale Z = 1
```

Kích thước thực tế của cột không thay đổi. Blender chỉ xác nhận rằng kích thước hiện tại là kích thước tự nhiên mới của object.

## Trước và sau Apply Scale

```text
Trước:
Dimensions: không đổi
Scale: X 1, Y 1, Z 3

Sau:
Dimensions: không đổi
Scale: X 1, Y 1, Z 1
```

---

# 10. Quy trình chuẩn trước khi thêm chi tiết

```text
Chọn cột
   ↓
Hoàn thiện hình dáng tổng thể
   ↓
Object Mode
   ↓
Apply Mirror Modifier
   ↓
Ctrl + A → Scale
   ↓
Edit Mode
   ↓
Thêm Edge Bevel và Vertex Bevel
```

Thứ tự này giúp tránh:

* Chi tiết hư hại bị lặp đối xứng.
* Bevel bị méo do Scale không đồng nhất.
* Phải sửa lại mesh sau khi đã thêm nhiều chi tiết.

---

# 11. Edge Bevel — Vát cạnh

## Cách thực hiện

1. Chuyển sang Edit Mode bằng `Tab`.
2. Chuyển sang Edge Select bằng phím `2`.
3. Chọn một edge hoặc một chuỗi edge.
4. Nhấn:

```text
Ctrl + B
```

5. Kéo chuột để điều chỉnh độ rộng.
6. Nhấn chuột trái để xác nhận.

---

## 12. Chọn đường cạnh ngắn nhất

Để chọn một chuỗi cạnh liên tiếp:

1. Chọn edge đầu tiên.
2. Giữ `Ctrl`.
3. Nhấp chuột trái vào edge cuối cùng.

Blender sẽ chọn đường đi ngắn nhất giữa hai vị trí.

```text
Edge bắt đầu
     ●
     │
     │  ← Blender chọn chuỗi cạnh ngắn nhất
     │
     ●
Edge kết thúc
```

Sau đó dùng:

```text
Ctrl + B
```

để Bevel toàn bộ chuỗi cạnh.

Cách này giúp tạo:

* Một dải cạnh bị mài mòn.
* Một góc cột bị vát.
* Một vùng đá bị sứt kéo dài.
* Hình dáng không đều theo chiều cao cột.

---

# 13. Điều chỉnh độ rộng Bevel

Khi kéo Bevel quá xa, các vertex có thể tiến gần và va vào nhau.

```text
Bevel nhỏ:
────────╲
         │

Bevel quá lớn:
──────╲╱──────
      ↑
Các vertex chạm hoặc chồng lên nhau
```

Blender có thể giới hạn độ rộng Bevel khi các phần hình học sắp va vào nhau. Hiện tượng này thường được gọi là **clamping**.

Trong bài học, Bevel nhỏ thường phù hợp hơn vì:

* Giữ phong cách low-poly.
* Không làm thay đổi silhouette quá mạnh.
* Tạo cảm giác cạnh bị mẻ thay vì cạnh được bo tròn hoàn hảo.
* Tránh sinh ra hình học phức tạp.

---

# 14. Vertex chưa thực sự nối với nhau

Sau khi Bevel, hai vertex có thể trông như đang nằm cùng một vị trí nhưng thực tế vẫn chưa được gộp.

Ngay cả khi bật **Auto Merge**, hai vertex chỉ được gộp nếu chúng nằm đủ gần nhau.

## Cách kiểm tra

1. Chuyển sang Vertex Select bằng phím `1`.
2. Chọn vertex.
3. Nhấn `G` và thử di chuyển.

Nếu chỉ một vertex di chuyển, hai vertex chưa được nối.

---

## 15. Dùng Edge Slide để đưa vertex vào đúng vị trí

Nhấn:

```text
G → G
```

để thực hiện **Edge Slide**.

Di chuyển vertex dọc theo edge cho đến khi nó chạm vào vertex còn lại.

Khi Auto Merge đang bật, Blender sẽ tự động gộp hai vertex nếu chúng nằm trong khoảng cách cho phép.

```text
Vertex A ●────────────● Vertex B
         G → G  ─────→

Khi chạm nhau:
              ●
         Hai vertex được gộp
```

Dấu hiệu thường thấy là một chuyển động hoặc nhấp nháy nhẹ khi vertex snap vào vị trí còn lại.

---

# 16. Vertex Bevel — Vát một góc

Ngoài edge, ta có thể Bevel trực tiếp từng vertex để tạo góc bị sứt.

## Cách thực hiện trong bài học

1. Chuyển sang Vertex Select bằng phím `1`.
2. Chọn một vertex.
3. Nhấn:

```text
Ctrl + B
```

4. Nhấn tiếp:

```text
V
```

5. Kéo chuột để điều chỉnh độ rộng.
6. Nhấn chuột trái để xác nhận.

```text
Ctrl + B
    ↓
Nhấn V
    ↓
Vertex Bevel
```

> Trong một số phiên bản hoặc cấu hình Blender, có thể dùng `Ctrl + Shift + B` để gọi Vertex Bevel trực tiếp. Tuy nhiên, thao tác được minh họa trong bài là `Ctrl + B`, sau đó nhấn `V`.

---

## 17. Edge Bevel và Vertex Bevel khác nhau thế nào?

### Edge Bevel

```text
Trước:
┌────
│

Sau:
╲────
 ╲
```

Edge Bevel biến một cạnh thành một vùng mặt vát.

Phù hợp để tạo:

* Cạnh bị mài mòn.
* Dải sứt dài.
* Góc cột bớt sắc.
* Một mặt cột bị lệch.

### Vertex Bevel

```text
Trước:
────●────

Sau:
───╱ ╲───
```

Vertex Bevel cắt bỏ một góc và thay nó bằng một hoặc nhiều cạnh mới.

Phù hợp để tạo:

* Góc bị vỡ.
* Điểm va đập.
* Một mảnh đá nhỏ bị mất.
* Chi tiết hư hại cục bộ.

---

# 18. Không nên chọn hai vertex liền nhau khi Vertex Bevel

Nếu chọn hai vertex nằm cạnh nhau rồi dùng `Ctrl + B`, Blender có thể hiểu rằng anh muốn Bevel edge nối giữa chúng.

```text
●────●
↑    ↑
Hai vertex liền nhau
```

Trong trường hợp muốn tạo hai vết mẻ riêng biệt, nên:

1. Bevel vertex thứ nhất.
2. Hoàn tất thao tác.
3. Chọn vertex thứ hai.
4. Bevel riêng.

Điều này giúp kiểm soát hình dáng tốt hơn.

---

# 19. Không nên Bevel quá nhiều lần cùng một khu vực

Một vertex đã nằm trong vùng Bevel thường đã được chia thành nhiều vertex nhỏ.

Nếu tiếp tục Vertex Bevel tại đây, hình học có thể trở nên phức tạp:

```text
Trước:
────●────

Sau Bevel lần 1:
───●──●───

Sau Bevel tiếp:
──●─●●─●──
```

Điều này có thể gây:

* Các mặt rất nhỏ.
* Cạnh chồng chéo.
* Hình dạng bị méo.
* Topology khó kiểm soát.
* Vùng hư hại trông không tự nhiên.

Tuy nhiên, trong một số trường hợp, sự biến dạng này vẫn có thể được dùng như một chi tiết đá bị đập vỡ.

Nguyên tắc là:

> Chỉ giữ lại khi kết quả nhìn hợp lý trong Object Mode.

---

# 20. Tạo chi tiết ngẫu nhiên nhưng có kiểm soát

Không nên Bevel tất cả các cột theo cùng một cách.

Mỗi cột nên có:

* Vị trí sứt khác nhau.
* Số lượng cạnh vát khác nhau.
* Độ rộng Bevel khác nhau.
* Một số góc sắc được giữ nguyên.
* Một số vùng bị hư hại nhiều hơn vùng khác.

Ví dụ:

```text
Pillar 01
- Hư hại nhiều ở đầu cột
- Một cạnh dọc bị vát
- Góc dưới vẫn còn sắc

Pillar 02
- Hư hại chủ yếu ở phần thân
- Nhiều cạnh vát nhỏ
- Ít góc bị mất

Pillar 03
- Một mảng lớn bị sứt
- Phần trên gần như nguyên vẹn
- Phần đáy không cân đối
```

Sự khác biệt này làm môi trường trông tự nhiên hơn và tránh cảm giác các object chỉ là bản sao của nhau.

---

# 21. Chỉnh sửa nhiều object cùng lúc

Blender cho phép chọn nhiều object và vào Edit Mode cùng lúc.

## Cách thực hiện

1. Trong Object Mode, chọn hai hoặc nhiều cột.
2. Nhấn `Tab`.
3. Blender sẽ hiển thị mesh của tất cả object được chọn trong Edit Mode.

Điều này hữu ích khi muốn:

* So sánh chi tiết giữa các cột.
* Thực hiện các chỉnh sửa tương tự.
* Giảm số lần chuyển đổi Object Mode và Edit Mode.

---

## 22. Rủi ro khi Edit nhiều object

Khi chỉnh sửa nhiều object, có thể vô tình chọn geometry ở object khác.

Ví dụ:

```text
Pillar A: đang nhìn gần và chỉnh sửa
Pillar B: vẫn có một edge được chọn
```

Nếu nhấn:

```text
Ctrl + B
```

Blender sẽ Bevel geometry đang được chọn trên cả hai cột.

```text
Edge được chọn trên Pillar A
           +
Edge vô tình được chọn trên Pillar B
           ↓
Ctrl + B tác động lên cả hai
```

Vì vậy, trước mỗi thao tác nên kiểm tra:

* Có geometry nào trên object khác đang được chọn không?
* Object nào đang là active object?
* Có đang chỉnh sửa nhầm nhiều cột cùng lúc không?

---

# 23. Apply Scale cho nhiều object cùng lúc

Scale có thể được Apply cho nhiều object đồng thời.

## Cách thực hiện

1. Chọn nhiều cột trong Object Mode.
2. Nhấn:

```text
Ctrl + A
```

3. Chọn:

```text
Scale
```

Tất cả object được chọn sẽ có Scale trở về:

```text
X = 1
Y = 1
Z = 1
```

---

# 24. Apply Modifier trên nhiều object

Khác với Apply Scale, khi chọn nhiều object và Apply một modifier, Blender thường chỉ Apply modifier của **active object**.

Active object là object được chọn cuối cùng và thường được hiển thị bằng màu sáng hơn.

```text
Object được chọn: viền cam
Active object: viền vàng hoặc cam sáng hơn
```

## Ví dụ

```text
Pillar 01: active object
Pillar 02: selected object
```

Khi Apply Mirror Modifier:

```text
Pillar 01: Mirror được Apply
Pillar 02: Mirror vẫn còn
```

Vì vậy, cần chọn lần lượt từng cột và Apply Mirror Modifier cho từng object.

---

# 25. Quy trình thực hành cho ba cột

## Cột thứ nhất

1. Chọn cột.
2. Apply Mirror Modifier.
3. Apply Scale.
4. Vào Edit Mode.
5. Chọn một số chuỗi edge bằng `Ctrl + Click`.
6. Dùng `Ctrl + B` để tạo các cạnh bị mòn.
7. Chọn một số vertex sắc.
8. Dùng `Ctrl + B`, sau đó `V`.
9. Giữ lại một vài góc sắc để tạo sự đa dạng.
10. Chuyển sang Object Mode để kiểm tra silhouette.

## Cột thứ hai

1. Apply Mirror Modifier riêng cho cột.
2. Apply Scale.
3. Tạo ít Bevel hơn cột thứ nhất.
4. Tập trung chi tiết ở phần giữa hoặc phần đáy.
5. Dùng độ rộng Bevel khác với cột đầu tiên.

## Cột thứ ba

1. Apply Mirror Modifier.
2. Apply Scale.
3. Tạo một vài vùng Bevel lớn hơn.
4. Tận dụng loop cut có sẵn để tạo cảm giác một mảng đá bị mất.
5. Kiểm tra không để topology quá phức tạp.

---

# 26. Sơ đồ tổng hợp thao tác

```text
┌──────────────────────────┐
│ Chọn tất cả các Pillar   │
└────────────┬─────────────┘
             ↓
┌──────────────────────────┐
│ M → New Collection       │
│ Đặt tên: Pillars         │
└────────────┬─────────────┘
             ↓
┌──────────────────────────┐
│ Hoàn thiện hình khối lớn │
└────────────┬─────────────┘
             ↓
┌──────────────────────────┐
│ Apply Mirror từng object │
└────────────┬─────────────┘
             ↓
┌──────────────────────────┐
│ Chọn nhiều object        │
│ Ctrl + A → Scale         │
└────────────┬─────────────┘
             ↓
┌──────────────────────────┐
│ Edit Mode                │
├──────────────────────────┤
│ Edge: Ctrl + B           │
│ Vertex: Ctrl + B → V     │
└────────────┬─────────────┘
             ↓
┌──────────────────────────┐
│ Object Mode kiểm tra     │
│ hình dáng và silhouette  │
└────────────┬─────────────┘
             ↓
┌──────────────────────────┐
│ Tạo biến thể riêng cho   │
│ từng cột                 │
└──────────────────────────┘
```

---

# 27. Phím tắt và công cụ liên quan

| Phím tắt/Công cụ       | Chức năng                                            |
| ---------------------- | ---------------------------------------------------- |
| `M`                    | Di chuyển object vào Collection                      |
| `Tab`                  | Chuyển đổi Object Mode và Edit Mode                  |
| `Period` / `Numpad .`  | Focus vào object hoặc vùng đang chọn                 |
| `1`                    | Vertex Select trong Edit Mode                        |
| `2`                    | Edge Select trong Edit Mode                          |
| `Ctrl + Click`         | Chọn đường đi ngắn nhất giữa các thành phần mesh     |
| `Ctrl + B`             | Edge Bevel                                           |
| `Ctrl + B`, sau đó `V` | Chuyển sang Vertex Bevel                             |
| `Ctrl + Shift + B`     | Vertex Bevel trực tiếp trong nhiều phiên bản Blender |
| `G`                    | Di chuyển thành phần được chọn                       |
| `G`, `Z`               | Di chuyển theo trục Z                                |
| `G`, `G`               | Edge Slide                                           |
| `Ctrl + A`             | Mở Apply Menu trong Object Mode                      |
| `Ctrl + A > Scale`     | Apply Scale                                          |
| Modifier menu > Apply  | Apply modifier đang chọn                             |
| `Shift + Click`        | Thêm hoặc bỏ từng thành phần khỏi vùng chọn          |

---

# 28. Phân biệt các thao tác Apply

| Thao tác                  | Vị trí thực hiện                 | Tác dụng                                                |
| ------------------------- | -------------------------------- | ------------------------------------------------------- |
| **Apply Scale**           | `Ctrl + A > Scale`               | Đặt Scale X, Y, Z về 1 mà không đổi kích thước hiện tại |
| **Apply Mirror Modifier** | Menu của Mirror Modifier > Apply | Chuyển phần đối xứng thành mesh thật                    |
| **Apply Bevel Modifier**  | Menu của Bevel Modifier > Apply  | Chuyển kết quả modifier thành mesh thật                 |
| **Apply All Transforms**  | `Ctrl + A > All Transforms`      | Apply Location, Rotation và Scale                       |

> `Ctrl + A` không phải là lệnh Apply modifier. Đây là menu Apply Transform của object.

---

# 29. Lưu ý về Bevel Modifier

Bài học này chủ yếu sử dụng **Bevel trực tiếp trong Edit Mode**, không tập trung vào Bevel Modifier.

## Bevel trực tiếp

```text
Edit Mode → chọn geometry → Ctrl + B
```

Đặc điểm:

* Thay đổi trực tiếp mesh.
* Dễ tạo hư hại ngẫu nhiên.
* Có thể Bevel riêng từng edge hoặc vertex.
* Phù hợp với phong cách đá bị vỡ.

## Bevel Modifier

```text
Object Mode → Add Modifier → Bevel
```

Đặc điểm:

* Tác động theo quy tắc lên nhiều cạnh.
* Không phá hủy mesh cho đến khi Apply.
* Phù hợp khi cần bo cạnh đồng đều.
* Ít phù hợp hơn cho các vết sứt ngẫu nhiên của bài này.

```text
Chi tiết đồng đều → Bevel Modifier
Chi tiết hư hại riêng lẻ → Bevel trong Edit Mode
```

---

# 30. Lỗi thường gặp

## 30.1. Không Apply Scale trước khi Bevel

### Hiện tượng

* Bevel rộng theo một hướng.
* Bevel hẹp theo hướng khác.
* Vertex Bevel trông méo.

### Khắc phục

```text
Object Mode → Ctrl + A → Scale
```

---

## 30.2. Không thể Apply Modifier

### Nguyên nhân

Đang ở Edit Mode.

### Khắc phục

```text
Tab → Object Mode
```

Sau đó mở menu của modifier và chọn **Apply**.

---

## 30.3. Chi tiết bị lặp ở hai đầu

### Nguyên nhân

Mirror Modifier vẫn còn hoạt động.

### Khắc phục

Apply Mirror Modifier trước khi tạo các chi tiết hư hại bất đối xứng.

---

## 30.4. Bevel tạo hình học kỳ lạ

### Nguyên nhân có thể

* Bevel quá rộng.
* Các vertex va vào nhau.
* Bevel lại vùng đã có nhiều vertex.
* Có vertex trùng vị trí nhưng chưa merge.
* Scale chưa được Apply.

### Khắc phục

* Giảm độ rộng Bevel.
* Dùng `G → G` để Edge Slide.
* Kiểm tra Auto Merge.
* Tránh Bevel lặp quá nhiều lần.
* Apply Scale.

---

## 30.5. Nhiều cột cùng bị Bevel

### Nguyên nhân

Đang Edit nhiều object và geometry trên nhiều cột cùng được chọn.

### Khắc phục

* Nhấn `Alt + A` để bỏ chọn toàn bộ geometry nếu phù hợp với phiên bản Blender.
* Chọn lại đúng edge hoặc vertex cần chỉnh.
* Hoặc quay về Object Mode và chỉ chỉnh từng cột.

---

## 30.6. Apply Mirror chỉ có tác dụng với một object

### Nguyên nhân

Blender chỉ Apply modifier trên active object.

### Khắc phục

Chọn và Apply modifier lần lượt cho từng cột.

---

# 31. Nguyên tắc tạo đá hư hại đẹp

## Giữ độ ngẫu nhiên

Không đặt tất cả vết mẻ ở cùng độ cao.

## Giữ silhouette rõ ràng

Chi tiết nên làm đường viền cột thú vị hơn khi nhìn từ xa.

## Không phá hỏng hình khối chính

Cột vẫn cần giữ được cảm giác chắc chắn và có khả năng nâng đỡ công trình.

## Trộn cạnh sắc và cạnh vát

Nếu Bevel mọi cạnh, object sẽ mất phong cách low-poly.

## Kiểm tra thường xuyên trong Object Mode

Một vùng topology có thể trông kỳ lạ trong Edit Mode nhưng lại tạo silhouette tốt trong Object Mode — hoặc ngược lại.

---

# 32. Bài thực hành

## Thử thách 1 — Tổ chức Collection

* Chọn tất cả các cột.
* Tạo Collection mới tên `Pillars`.
* Đưa tất cả cột vào Collection.

## Thử thách 2 — Chuẩn bị object

Với mỗi cột:

* Apply Mirror Modifier.
* Apply Scale.
* Kiểm tra Scale X, Y và Z đều bằng `1`.

## Thử thách 3 — Tạo chi tiết

Trên mỗi cột:

* Tạo ít nhất hai Edge Bevel.
* Tạo ít nhất hai Vertex Bevel.
* Giữ lại một số góc sắc.
* Không dùng cùng một mẫu hư hại cho cả ba cột.

## Thử thách 4 — Kiểm tra kết quả

Quan sát từ nhiều góc:

* Front
* Side
* Perspective
* Góc nhìn từ trên xuống
* Góc nhìn gần mặt đất

Đảm bảo các cột không có hình dạng giống hệt nhau.

---

# 33. Checklist thực hành

## Tổ chức scene

* [ ] Đã tạo Collection tên `Pillars`.
* [ ] Đã chuyển tất cả các cột vào Collection.
* [ ] Đã đặt tên object rõ ràng nếu cần.

## Chuẩn bị mesh

* [ ] Đã hoàn thiện hình dáng tổng thể trước khi Apply Mirror.
* [ ] Đã Apply Mirror cho từng cột.
* [ ] Đã Apply Scale.
* [ ] Scale của mỗi cột đều là `1, 1, 1`.

## Tạo chi tiết

* [ ] Đã sử dụng Edge Bevel bằng `Ctrl + B`.
* [ ] Đã sử dụng Vertex Bevel bằng `Ctrl + B`, sau đó `V`.
* [ ] Đã tạo các vết mẻ có kích thước khác nhau.
* [ ] Đã giữ lại một số cạnh sắc.
* [ ] Không Bevel quá nhiều lần trên cùng một khu vực.
* [ ] Các cột có hình dạng hư hại khác nhau.

## Kiểm tra

* [ ] Không còn chi tiết bị Mirror ngoài ý muốn.
* [ ] Bevel không bị méo do Scale.
* [ ] Không có vertex hoặc mặt chồng chéo rõ ràng.
* [ ] Silhouette của cột vẫn dễ đọc.
* [ ] Đã lưu file Blender.

---

# 34. Tóm tắt bài học

Trong bài này, ta hoàn thiện các cột đá bằng cách thêm những cạnh mòn và góc bị sứt bằng công cụ Bevel.

Quy trình quan trọng nhất là:

```text
Hoàn thiện hình khối
        ↓
Apply Mirror
        ↓
Apply Scale
        ↓
Edge Bevel
        ↓
Vertex Bevel
        ↓
Tạo biến thể riêng cho từng cột
```

**Mirror Modifier** cần được Apply để phần trên và phần dưới có thể chỉnh sửa độc lập. **Scale** cần được Apply để Bevel hoạt động đồng đều. Sau đó, kết hợp **Edge Bevel** và **Vertex Bevel** giúp tạo ra các vết hư hại có kiểm soát mà vẫn giữ phong cách low-poly.

Điểm quan trọng không phải là làm mọi cạnh thật mượt, mà là sử dụng Bevel có chọn lọc để mỗi cột mang một hình dáng riêng, tạo cảm giác cũ kỹ và tự nhiên hơn cho môi trường dungeon.
