# 031 — Mirroring the Walls

| Thuộc tính        | Nội dung                                                  |
| ----------------- | --------------------------------------------------------- |
| **Module**        | Module 02 — Modular Dungeon                               |
| **Bài học**       | Mirroring the Walls                                       |
| **Thời lượng**    | 5:15                                                      |
| **Chủ đề chính**  | Dùng Mirror Modifier để tạo mặt sau của module tường      |
| **Công cụ chính** | Mirror Modifier, Apply Rotation, Clipping, Dissolve Edges |

---

## 1. Mục tiêu bài học

Sau bài học này, người học có thể:

* Sử dụng **Mirror Modifier** để tạo phần tường đối xứng.
* Hiểu Mirror Modifier hoạt động dựa trên **trục tọa độ Local** của object.
* Phân biệt **Local Orientation** và **Global Orientation**.
* Biết vì sao object đã xoay có thể khiến Mirror hoạt động sai hướng.
* Dùng `Ctrl + A → Rotation` để áp dụng phép xoay cho object.
* Chọn đúng trục đối xứng, trong bài này là trục `Y`.
* Sử dụng **Clipping** để nối hai nửa mesh tại mặt phẳng đối xứng.
* Xóa các mặt đáy không cần thiết.
* Dùng **Dissolve Edges** để loại bỏ cạnh thừa mà không phá hủy các mặt xung quanh.

---

## 2. Kiểm tra module tường

Trước khi tạo mặt sau của tường, có thể bật lại hai cột trụ ở hai bên để kiểm tra tổng thể module.

```text
Pillar ┃     Wall     ┃ Pillar
       ┃              ┃
       ┃              ┃
```

Kết quả hiện tại đã tạo thành phần mặt trước của một module tường, nhưng tường vẫn còn rất mỏng và chưa có mặt sau.

Hai cột trụ sẽ được ghép với tường trong các bước tiếp theo. Trong bài này, chúng được tạm thời ẩn đi để dễ quan sát phần tường.

---

## 3. Đổi tên object

Trong Outliner, object tường hiện vẫn mang tên mặc định là `Plane`.

Đổi tên object thành:

```text
Wall
```

Việc đặt tên rõ ràng giúp:

* Quản lý scene dễ hơn.
* Phân biệt tường với các object khác.
* Thuận tiện khi đưa các thành phần vào Collection.
* Tránh nhầm lẫn khi scene có nhiều mesh.

---

## 4. Thêm Mirror Modifier

Chọn object `Wall`, sau đó mở tab Modifier có biểu tượng cờ lê:

```text
Modifier Properties
→ Add Modifier
→ Mirror
```

Theo mặc định, Mirror Modifier thường sử dụng trục `X`.

```text
Mirror Axis: X
```

Tuy nhiên, mục tiêu của bài học là tạo mặt sau của tường, vì vậy bản sao cần xuất hiện theo chiều sâu của module, tương ứng với trục `Y` trong hệ tọa độ Global.

Thử tắt trục `X` và bật trục `Y`:

```text
X: Off
Y: On
```

Nhưng bản mirror không xuất hiện ở phía sau như dự kiến. Thay vào đó, nó có thể xuất hiện theo hướng lên trên hoặc theo một hướng không mong muốn.

Nguyên nhân nằm ở phép xoay của object.

---

## 5. Vì sao Mirror hoạt động sai trục?

Khi object Plane ban đầu được thêm vào scene, nó nằm ngang trên mặt đất.

```text
Plane ban đầu
──────────────
Nằm trên mặt phẳng XY
```

Sau đó, Plane được xoay `90°` để dựng đứng thành bức tường.

Có thể nhấn:

```text
N
```

để mở Sidebar, sau đó xem phần:

```text
Item → Transform → Rotation
```

Object vẫn đang có một giá trị Rotation khoảng `90°`.

Ví dụ:

```text
Rotation X: 90°
```

Mặc dù object trông đã dựng đứng đúng vị trí, Blender vẫn ghi nhớ rằng object đang bị xoay so với hình dạng ban đầu.

---

## 6. Global Axis và Local Axis

### 6.1. Global Axis

Global Axis là hệ trục cố định của toàn bộ scene:

| Trục | Màu thường dùng |
| ---- | --------------- |
| `X`  | Đỏ              |
| `Y`  | Xanh lá         |
| `Z`  | Xanh dương      |

```text
             Z
             │
             │
             └──── X
            /
           Y
```

Trong scene hiện tại, trục `Y` Global đi theo chiều từ mặt trước ra mặt sau của tường.

---

### 6.2. Local Axis

Local Axis là hệ trục riêng của từng object.

Khi object bị xoay, trục Local cũng xoay theo object.

```text
Trước khi xoay:

Local Axis = Global Axis
```

```text
Sau khi xoay object 90°:

Global Axis vẫn giữ nguyên
Local Axis xoay theo object
```

Mirror Modifier sử dụng **Local Axis**, không nhất thiết sử dụng hướng Global mà người dùng đang nhìn thấy trong viewport.

Vì vậy, dù bật trục `Y` trong Mirror Modifier, Blender đang mirror theo **Local Y**, không phải Global Y.

---

## 7. Quan sát Local Orientation

Có thể bật Move Gizmo trong phần Viewport Gizmos để quan sát trục của object.

Sau đó, thay đổi Transform Orientation:

```text
Global → Local
```

Khi chuyển sang Local, các mũi tên gizmo sẽ thay đổi hướng vì chúng đang tính đến phép xoay `90°` của object.

```text
Global Y
   ≠
Local Y của object đã xoay
```

Đây là lý do bản mirror xuất hiện sai hướng.

---

## 8. Không nên đặt Rotation về 0 trực tiếp

Có thể nghĩ rằng chỉ cần nhập:

```text
Rotation = 0°
```

nhưng thao tác này sẽ thực sự xoay object trở lại trạng thái ban đầu.

Kết quả là bức tường sẽ nằm xuống mặt đất.

```text
Nhập Rotation = 0
        ↓
Object bị xoay trở lại
        ↓
Tường không còn dựng đứng
```

Do đó, không nên xóa giá trị Rotation bằng cách nhập `0`.

Thay vào đó, cần **Apply Rotation**.

---

## 9. Apply Rotation

Trong Object Mode, nhấn:

```text
Ctrl + A
```

Sau đó chọn:

```text
Rotation
```

Thao tác này nói với Blender rằng:

> Hướng xoay hiện tại của object sẽ trở thành trạng thái mặc định mới.

Sau khi Apply Rotation:

```text
Rotation X: 0°
Rotation Y: 0°
Rotation Z: 0°
```

Nhưng object vẫn giữ nguyên hình dạng và vẫn đứng thẳng.

### Trước Apply Rotation

```text
Tường đang đứng
Rotation X = 90°
Local Axis bị xoay
```

### Sau Apply Rotation

```text
Tường vẫn đứng
Rotation X = 0°
Local Axis khớp với Global Axis
```

---

## 10. Mirror theo đúng trục Y

Sau khi Apply Rotation, trục Local của object sẽ trùng với trục Global.

Mirror Modifier với trục `Y` lúc này sẽ tạo bản sao đúng về phía sau của tường.

```text
Nhìn từ trên xuống:

          Y
          ↑

Bản mirror
──────────────

Origin / mặt phẳng đối xứng
───────────────────────────

Mesh gốc
──────────────
```

Quy trình chính:

```text
Thêm Mirror Modifier
        ↓
Chọn trục Y
        ↓
Bản mirror xuất hiện sai hướng
        ↓
Ctrl + A → Rotation
        ↓
Local Axis khớp Global Axis
        ↓
Bản mirror xuất hiện đúng phía sau
```

---

## 11. Tạo độ dày cho tường

Sau khi Mirror hoạt động đúng, tường vẫn còn quá mỏng.

Chuyển sang Edit Mode:

```text
Tab
```

Chọn toàn bộ mesh:

```text
A
```

Di chuyển mesh gốc theo trục `Y`:

```text
G → Y
```

Khi mesh gốc được di chuyển ra khỏi mặt phẳng đối xứng, Mirror Modifier tạo phần tương ứng ở phía đối diện.

```text
Nhìn từ trên xuống:

Mesh gốc          Mesh mirror
─────────         ─────────
         \       /
          \     /
           Origin
```

Khoảng cách từ mesh gốc đến mặt phẳng đối xứng quyết định một nửa độ dày của tường.

```text
Độ dày tường
= Khoảng cách mesh gốc đến Origin × 2
```

Có thể bật lại hai Pillar để kiểm tra độ dày của tường so với cột.

Nếu tường quá rộng:

```text
G → Y
```

và di chuyển mesh về gần mặt phẳng đối xứng hơn.

---

## 12. Nối hai nửa tại cạnh giữa

Sau khi tạo độ dày, phần mesh gốc và phần mirror có thể chưa được nối liền hoàn toàn tại cạnh giữa.

Chuyển sang Edge Select:

```text
2
```

Chọn cạnh cần đưa về mặt phẳng đối xứng, sau đó:

```text
G → Y
```

Nếu chưa bật Clipping, cạnh có thể đi xuyên qua mặt phẳng đối xứng và chồng lên bản mirror.

```text
Không bật Clipping:

Mesh gốc ────────┼───────
                 │
           vượt qua trục
```

Điều này tạo ra hình học chồng lấn ở giữa.

---

## 13. Clipping trong Mirror Modifier

Bật tùy chọn:

```text
Clipping
```

Clipping ngăn các vertex đã chạm vào mặt phẳng đối xứng di chuyển xuyên qua mặt phẳng đó.

Sau khi bật Clipping:

1. Chọn cạnh giữa.
2. Nhấn `G → Y`.
3. Di chuyển cạnh về phía mặt phẳng đối xứng.
4. Cạnh sẽ dính vào đường giữa.
5. Sau khi đã dính, cạnh không thể bị kéo xuyên qua phía còn lại.

```text
Có Clipping:

Mesh gốc ────────│──────── Mesh mirror
                 │
             dính tại giữa
```

### Tác dụng của Clipping

* Giữ hai nửa mesh liền nhau.
* Ngăn vertex vượt qua mặt phẳng mirror.
* Tránh hình học chồng lấn.
* Giảm nguy cơ tạo khe hở ở giữa.
* Giúp tạo một bề mặt liên tục.

> Clipping chỉ có tác dụng rõ ràng khi vertex được di chuyển đến gần hoặc chạm mặt phẳng đối xứng.

---

## 14. Clipping và Merge

Hai tùy chọn này liên quan nhưng không hoàn toàn giống nhau.

| Tùy chọn     | Chức năng                                                             |
| ------------ | --------------------------------------------------------------------- |
| **Merge**    | Hợp nhất các vertex đủ gần nhau tại mặt phẳng đối xứng                |
| **Clipping** | Không cho vertex đã chạm mặt phẳng đối xứng đi xuyên qua phía còn lại |

Trong bài học, thao tác được nhấn mạnh là bật **Clipping** để cạnh giữa dính và không vượt qua mặt phẳng đối xứng.

---

## 15. Xóa các mặt đáy không cần thiết

Phần đáy của tường sẽ không được nhìn thấy khi module được đặt trên mặt sàn.

Do đó, có thể xóa các mặt đáy để:

* Giảm số lượng polygon.
* Giữ topology sạch hơn.
* Tránh các mặt bên trong không cần thiết.
* Hạn chế lỗi khi ghép module.

Chuyển sang Face Select:

```text
3
```

Chọn hai mặt đáy, sau đó nhấn:

```text
X
```

hoặc:

```text
Delete
```

Chọn:

```text
Faces
```

```text
Trước:

┌────────────┐
│            │
└────────────┘ ← Mặt đáy

Sau:

┌────────────┐
│            │
               Không còn mặt đáy
```

---

## 16. Loại bỏ cạnh thừa

Sau khi tạo mặt sau, trên đỉnh tường có thể còn một cạnh nằm giữa một bề mặt hoàn toàn phẳng.

```text
Bề mặt phẳng:

┌────────┬────────┐
│        │        │
│        │        │
└────────┴────────┘
         ↑
     Cạnh thừa
```

Cạnh này không làm thay đổi hình dạng của mesh.

Nó chỉ chia một mặt phẳng thành hai phần mà không phục vụ cho:

* Thay đổi góc.
* Tạo hình dạng.
* Hỗ trợ deformation.
* Giữ một chi tiết hình học cụ thể.

Do đó, cạnh này có thể được loại bỏ.

---

## 17. Delete Edge và Dissolve Edge

### 17.1. Delete Edge

Nếu chọn cạnh rồi sử dụng:

```text
X → Edges
```

Blender sẽ xóa:

* Cạnh được chọn.
* Các mặt đang sử dụng cạnh đó.

Kết quả có thể tạo thành một lỗ trên mesh.

```text
Delete Edge:

┌────────┬────────┐
│        │        │
└────────┴────────┘
         ↓
Các mặt liên quan cũng bị xóa
```

Do đó, Delete Edge không phù hợp trong trường hợp chỉ muốn loại bỏ đường chia trên một bề mặt.

---

### 17.2. Dissolve Edge

Thay vào đó, chọn:

```text
X → Dissolve Edges
```

Dissolve Edges loại bỏ cạnh nhưng cố gắng giữ lại bề mặt xung quanh.

```text
Trước:

┌────────┬────────┐
│        │        │
└────────┴────────┘

Sau Dissolve:

┌─────────────────┐
│                 │
└─────────────────┘
```

Kết quả là:

* Cạnh thừa biến mất.
* Bề mặt vẫn được giữ nguyên.
* Không tạo lỗ trên mesh.
* Hình dạng của object không thay đổi.

---

## 18. Khi nào không nên Dissolve Edge?

Không phải cạnh nào cũng có thể hòa tan mà không ảnh hưởng đến hình dạng.

Ví dụ, một cạnh đang tạo góc vuông:

```text
     │
     │
─────┘
     ↑
Cạnh giữ góc
```

Nếu dissolve cạnh này, Blender sẽ làm mất cấu trúc góc và thay đổi hình dạng của object.

```text
Dissolve cạnh giữ góc
          ↓
Góc vuông bị mất
          ↓
Hình dạng mesh thay đổi
```

### Quy tắc đánh giá

```text
Cạnh có ảnh hưởng đến hình dạng?
│
├── Có
│   └── Giữ lại
│
└── Không
    └── Có thể Dissolve
```

Cạnh trên đỉnh tường có thể được dissolve vì hai mặt hai bên đang nằm trên cùng một mặt phẳng.

---

## 19. Sơ đồ Mirror Modifier trong bài học

```text
Object Wall
│
├── Rotation chưa Apply
│   ├── Local Axis bị xoay
│   └── Mirror theo Y sai hướng
│
├── Ctrl + A → Rotation
│   ├── Rotation trở về 0
│   ├── Hình dạng không thay đổi
│   └── Local Axis khớp Global Axis
│
├── Mirror Modifier
│   ├── Axis: Y
│   └── Clipping: On
│
├── Edit Mode
│   ├── G → Y tạo độ dày
│   ├── Di chuyển cạnh về giữa
│   └── Hai nửa dính tại mặt phẳng đối xứng
│
└── Dọn topology
    ├── Xóa mặt đáy
    └── Dissolve cạnh thừa
```

---

## 20. Quy trình thực hành hoàn chỉnh

### Bước 1: Kiểm tra module

* Bật lại hai Pillar.
* Quan sát tỷ lệ giữa tường và cột.
* Ẩn Pillar để tiếp tục chỉnh sửa.

### Bước 2: Đổi tên object

```text
Plane → Wall
```

### Bước 3: Thêm Mirror Modifier

```text
Modifier Properties
→ Add Modifier
→ Mirror
```

### Bước 4: Chọn trục Y

* Tắt `X`.
* Bật `Y`.

Nếu bản mirror xuất hiện sai hướng, kiểm tra Rotation của object.

### Bước 5: Apply Rotation

Trong Object Mode:

```text
Ctrl + A → Rotation
```

Sau đó kiểm tra:

```text
Rotation X = 0
Rotation Y = 0
Rotation Z = 0
```

### Bước 6: Tạo độ dày

Trong Edit Mode:

```text
A
G → Y
```

Di chuyển mesh đến khi tường có độ dày phù hợp.

### Bước 7: Kiểm tra với Pillar

* Hiển thị lại hai Pillar.
* Quan sát chiều dày của tường.
* Dùng `G → Y` để điều chỉnh nếu cần.

### Bước 8: Bật Clipping

Trong Mirror Modifier:

```text
Clipping: On
```

### Bước 9: Nối cạnh giữa

```text
2 → Edge Select
Chọn cạnh
G → Y
```

Di chuyển cạnh đến mặt phẳng đối xứng để nó dính vào bản mirror.

### Bước 10: Xóa mặt đáy

```text
3 → Face Select
Chọn hai mặt đáy
X → Faces
```

### Bước 11: Dissolve cạnh thừa

```text
2 → Edge Select
Chọn cạnh trên mặt phẳng
X → Dissolve Edges
```

### Bước 12: Lưu dự án

```text
Ctrl + S
```

---

## 21. Phím tắt và công cụ liên quan

| Phím tắt / Công cụ    | Chức năng                               |
| --------------------- | --------------------------------------- |
| `N`                   | Mở hoặc đóng Sidebar                    |
| `Ctrl + A`            | Mở menu Apply Transform                 |
| `Ctrl + A → Rotation` | Áp dụng phép xoay hiện tại              |
| `Tab`                 | Chuyển giữa Object Mode và Edit Mode    |
| `A`                   | Chọn toàn bộ mesh                       |
| `G`                   | Di chuyển                               |
| `G → Y`               | Di chuyển theo trục Y                   |
| `2`                   | Edge Select trong Edit Mode             |
| `3`                   | Face Select trong Edit Mode             |
| `X` / `Delete`        | Mở menu xóa                             |
| `X → Faces`           | Xóa các mặt được chọn                   |
| `X → Dissolve Edges`  | Loại bỏ cạnh nhưng giữ bề mặt           |
| `Ctrl + S`            | Lưu dự án                               |
| Transform Orientation | Chuyển giữa Global và Local             |
| Mirror Modifier       | Tạo hình học đối xứng                   |
| Clipping              | Ngăn vertex vượt qua mặt phẳng đối xứng |

---

## 22. Lỗi thường gặp

### 22.1. Mirror theo trục Y nhưng bản sao xuất hiện phía trên

**Nguyên nhân:**

Object vẫn còn Rotation chưa được áp dụng. Mirror Modifier đang sử dụng Local Axis đã bị xoay.

**Cách khắc phục:**

```text
Object Mode
→ Ctrl + A
→ Rotation
```

---

### 22.2. Nhập Rotation bằng 0 làm tường nằm xuống

**Nguyên nhân:**

Nhập `0` vào Rotation không phải là Apply Rotation. Đây là thao tác xoay object trở về hướng ban đầu.

**Cách khắc phục:**

Hoàn tác bằng `Ctrl + Z`, sau đó dùng:

```text
Ctrl + A → Rotation
```

---

### 22.3. Hai nửa tường chồng lên nhau ở giữa

**Nguyên nhân:**

Cạnh hoặc vertex đã được kéo xuyên qua mặt phẳng đối xứng.

**Cách khắc phục:**

* Bật Clipping.
* Di chuyển cạnh về mặt phẳng đối xứng.
* Không kéo mesh vượt qua đường giữa.

---

### 22.4. Hai nửa tường có khe hở

**Nguyên nhân:**

* Cạnh giữa chưa được đưa đến mặt phẳng đối xứng.
* Clipping chưa bật.
* Khoảng cách Merge quá nhỏ nếu đang dùng Merge.

**Cách khắc phục:**

```text
Clipping: On
G → Y
```

Đưa cạnh chính xác về đường giữa.

---

### 22.5. Xóa cạnh làm xuất hiện lỗ trên tường

**Nguyên nhân:**

Đã chọn:

```text
Delete → Edges
```

thay vì:

```text
Dissolve Edges
```

**Cách khắc phục:**

* Nhấn `Ctrl + Z`.
* Chọn cạnh lại.
* Dùng `X → Dissolve Edges`.

---

### 22.6. Dissolve Edge làm mất góc tường

**Nguyên nhân:**

Cạnh được dissolve đang giữ một thay đổi về hướng hoặc góc của bề mặt.

**Cách khắc phục:**

Chỉ dissolve những cạnh nằm trên một bề mặt phẳng và không ảnh hưởng đến silhouette của object.

---

### 22.7. Tường quá dày hoặc quá mỏng

**Nguyên nhân:**

Mesh gốc nằm quá xa hoặc quá gần mặt phẳng đối xứng.

**Cách khắc phục:**

Trong Edit Mode:

```text
A
G → Y
```

Điều chỉnh vị trí mesh và bật lại Pillar để kiểm tra tỷ lệ.

---

## 23. Lưu ý về Object Origin

Mirror Modifier đối xứng mesh qua mặt phẳng đi qua **Object Origin**.

Trong bài học này, Origin đã nằm ở vị trí phù hợp nên không cần di chuyển Origin.

```text
Mesh gốc
      │
      │ Khoảng cách
      ▼
Object Origin / mặt phẳng mirror
      ▲
      │ Khoảng cách bằng nhau
      │
Mesh mirror
```

Nếu Origin bị di chuyển sai vị trí, bản mirror cũng sẽ xuất hiện sai vị trí.

Tuy nhiên, lỗi chính trong bài học không phải do Origin mà do **Rotation chưa được Apply**.

---

## 24. Có cần Apply Mirror Modifier không?

Trong bài học này, Mirror Modifier chưa được Apply.

Giữ modifier ở trạng thái chưa Apply có lợi vì:

* Có thể tiếp tục thay đổi độ dày tường.
* Có thể chỉnh mesh gốc và bản mirror tự động cập nhật.
* Có thể sửa topology dễ hơn.
* Giữ quy trình dựng hình linh hoạt và không phá hủy.

```text
Mirror chưa Apply
→ Chỉnh một bên
→ Bên còn lại tự cập nhật
```

Chỉ nên Apply Mirror khi thực sự cần chuyển kết quả thành mesh cố định cho một bước xử lý tiếp theo.

---

## 25. Checklist thực hành

### Chuẩn bị

* [ ] Đã đổi tên Plane thành `Wall`.
* [ ] Đã tạm ẩn Pillar để dễ chỉnh sửa.
* [ ] Đã kiểm tra Rotation của object.

### Mirror Modifier

* [ ] Đã thêm Mirror Modifier.
* [ ] Đã tắt trục X.
* [ ] Đã bật trục Y.
* [ ] Đã Apply Rotation bằng `Ctrl + A → Rotation`.
* [ ] Bản mirror đã xuất hiện đúng phía sau.

### Chỉnh hình học

* [ ] Đã dùng `G → Y` để tạo độ dày cho tường.
* [ ] Đã bật lại Pillar để kiểm tra tỷ lệ.
* [ ] Đã bật Clipping.
* [ ] Đã đưa cạnh giữa về mặt phẳng đối xứng.
* [ ] Hai nửa tường không có khe hở hoặc chồng lấn.

### Dọn topology

* [ ] Đã xóa các mặt đáy không cần thiết.
* [ ] Đã dissolve cạnh thừa trên mặt phẳng.
* [ ] Không dissolve các cạnh đang giữ góc của object.
* [ ] Đã lưu dự án bằng `Ctrl + S`.

---

## 26. Bài tập thực hành

### Bài tập 1: Quan sát Local Axis

1. Chọn object tường.
2. Bật Move Gizmo.
3. Chuyển Transform Orientation từ Global sang Local.
4. Quan sát hướng trục trước khi Apply Rotation.
5. Apply Rotation.
6. So sánh lại Local và Global Axis.

Mục tiêu là hiểu rằng:

```text
Apply Rotation
→ Local Axis được đặt lại
→ Không làm thay đổi hình dạng hiện tại
```

---

### Bài tập 2: Thử Mirror trước và sau Apply Rotation

Tạo hai bản sao của object:

* Một object chưa Apply Rotation.
* Một object đã Apply Rotation.

Thêm Mirror Modifier theo trục `Y` cho cả hai và so sánh hướng bản mirror.

---

### Bài tập 3: Kiểm tra Clipping

1. Tắt Clipping.
2. Di chuyển cạnh giữa xuyên qua mặt phẳng đối xứng.
3. Quan sát phần hình học chồng lấn.
4. Hoàn tác.
5. Bật Clipping.
6. Lặp lại thao tác.

---

### Bài tập 4: Delete và Dissolve

Tạo một mặt phẳng có cạnh chia ở giữa.

Thử lần lượt:

```text
X → Edges
```

và:

```text
X → Dissolve Edges
```

So sánh sự khác biệt giữa:

* Xóa cạnh cùng các mặt liên quan.
* Chỉ loại bỏ cạnh nhưng giữ bề mặt.

---

## 27. Sơ đồ tư duy bài học

```text
Mirroring the Walls
│
├── Chuẩn bị
│   ├── Kiểm tra Pillar
│   ├── Ẩn Pillar
│   └── Đổi tên Wall
│
├── Mirror Modifier
│   ├── Chọn trục Y
│   ├── Mirror sai hướng
│   └── Kiểm tra Rotation
│
├── Local và Global
│   ├── Global Axis cố định
│   ├── Local Axis xoay theo object
│   └── Mirror dùng Local Axis
│
├── Apply Transform
│   └── Ctrl + A → Rotation
│
├── Tạo độ dày
│   ├── Edit Mode
│   ├── A
│   └── G → Y
│
├── Nối đường giữa
│   ├── Edge Select
│   ├── Clipping
│   └── G → Y
│
└── Dọn topology
    ├── Xóa mặt đáy
    └── Dissolve cạnh thừa
```

---

## 28. Tóm tắt

Mirror Modifier giúp tạo mặt sau của module tường mà không cần dựng hình thủ công hai lần.

Điểm quan trọng nhất của bài học là Mirror Modifier sử dụng **Local Axis** của object.

Do Plane ban đầu được xoay `90°` để dựng đứng, Local Axis của nó không còn trùng với Global Axis. Vì vậy, chọn trục `Y` trong Mirror Modifier ban đầu không tạo bản sao theo hướng mong muốn.

Giải pháp là:

```text
Ctrl + A → Rotation
```

Apply Rotation giúp:

* Giữ nguyên hình dạng hiện tại.
* Đưa giá trị Rotation về `0`.
* Đặt lại Local Axis.
* Làm cho trục Local khớp với Global.

Sau đó, Mirror theo trục `Y` sẽ tạo đúng mặt sau của tường.

Quy trình tổng quát:

```text
Thêm Mirror
      ↓
Chọn trục Y
      ↓
Apply Rotation
      ↓
G → Y để tạo độ dày
      ↓
Bật Clipping
      ↓
Nối cạnh ở giữa
      ↓
Xóa mặt đáy
      ↓
Dissolve cạnh thừa
```

Cuối bài, module tường đã:

* Có cả mặt trước và mặt sau.
* Có độ dày phù hợp với các cột trụ.
* Liền mạch tại mặt phẳng đối xứng.
* Không còn các mặt đáy và cạnh thừa không cần thiết.
* Sẵn sàng để được ghép với Pillar trong các bài tiếp theo.
