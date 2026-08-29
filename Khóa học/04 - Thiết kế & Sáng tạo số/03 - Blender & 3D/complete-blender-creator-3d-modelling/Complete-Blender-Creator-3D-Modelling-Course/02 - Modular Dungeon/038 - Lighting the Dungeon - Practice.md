# 038 — Lighting the Dungeon

| Thuộc tính       | Nội dung                                          |
| ---------------- | ------------------------------------------------- |
| **Module**       | Module 02 — Modular Dungeon                       |
| **Bài học**      | Lighting the Dungeon                              |
| **Thời lượng**   | 9:37                                              |
| **Chủ đề chính** | Thiết lập ánh sáng đuốc và không khí cho hầm ngục |

---

## 1. Mục tiêu bài học

Sau bài học này, bạn có thể:

* Ghép phần ngọn lửa và thân đuốc thành một object.
* Kiểm tra và hiển thị **Object Origin** trong viewport.
* Đặt đuốc đúng vị trí trên tường của hầm ngục.
* Điều chỉnh riêng ngọn lửa trong Edit Mode.
* Hiểu sự khác nhau giữa vật liệu **Emission** trong Eevee và Cycles.
* Thêm **Point Light** để mô phỏng ánh sáng phát ra từ ngọn lửa.
* Điều chỉnh `Color`, `Power` và `Radius` của Point Light.
* Sử dụng **Linked Duplicate** để nhân bản nhiều đuốc có chung dữ liệu.
* Tổ chức đuốc và đèn vào một Collection riêng.
* Điều chỉnh **World Background** để kiểm soát độ sáng và không khí tổng thể của cảnh.

---

## 2. Quy trình tổng quát

```text
Ghép ngọn lửa với thân đuốc
              │
              ▼
Đặt và căn chỉnh đuốc trên tường
              │
              ▼
Kiểm tra Emission trong Eevee và Cycles
              │
              ▼
Thêm Point Light tại vị trí ngọn lửa
              │
              ▼
Chỉnh màu, Power và Radius
              │
              ▼
Đưa đuốc vào Collection riêng
              │
              ▼
Nhân bản bằng Linked Duplicate
              │
              ▼
Chỉnh World Background
              │
              ▼
Hoàn thiện không khí hầm ngục
```

---

## 3. Ghép ngọn lửa với thân đuốc

Đuốc hiện đang được tạo từ hai object riêng biệt:

* Thân đuốc.
* Ngọn lửa.

Để dễ dàng di chuyển và xoay toàn bộ cây đuốc, ta cần ghép hai object này lại.

### 3.1. Hiển thị Object Origin

Object Origin là điểm gốc dùng làm tâm cho các thao tác:

* Rotate.
* Scale.
* Một số phép biến đổi khác.

Nếu không thấy chấm màu cam biểu thị Origin:

1. Mở menu **Viewport Overlays** ở góc trên bên phải.
2. Mở phần tùy chọn chi tiết.
3. Bật:

```text
Origins
```

Sau khi bật, mỗi object sẽ hiển thị một chấm màu cam tại vị trí Origin.

> Object Origin của thân đuốc phù hợp hơn Origin của ngọn lửa vì nó tạo tâm xoay tự nhiên hơn khi căn đuốc vào tường.

---

### 3.2. Chọn object theo đúng thứ tự

Khi Join nhiều object, object được chọn cuối cùng sẽ trở thành **Active Object**.

Active Object quyết định:

* Tên object sau khi Join.
* Object Origin được giữ lại.
* Một số thuộc tính chính của object kết quả.

Quy trình chọn:

1. Chọn ngọn lửa trước.
2. Giữ `Shift`.
3. Chọn thân đuốc sau cùng.
4. Nhấn:

```text
Ctrl + J
```

Sau khi Join:

* Ngọn lửa và thân đuốc trở thành một object.
* Origin của thân đuốc được giữ lại.
* Các material của cả hai object vẫn được giữ trong các Material Slot.

```text
Ngọn lửa được chọn trước
             +
Thân đuốc được chọn cuối
             │
             ▼
          Ctrl + J
             │
             ▼
Một object đuốc hoàn chỉnh
```

---

### 3.3. Đổi tên object và material

Sau khi Join, nên đổi tên object thành:

```text
Torch
```

Object đuốc có thể chứa ba Material Slot:

1. Vật liệu màu nâu của phần gỗ.
2. Vật liệu kim loại màu xám.
3. Vật liệu Emission của ngọn lửa.

Nên đổi tên material phát sáng thành:

```text
Flame
```

Việc đặt tên rõ ràng giúp dễ quản lý material trong các bước sau.

---

## 4. Đặt đuốc lên tường

Sau khi ghép object, cần di chuyển đuốc đến vị trí phù hợp trong hầm ngục.

### 4.1. Di chuyển theo trục

Có thể sử dụng các lệnh:

```text
G → X
```

để di chuyển đuốc theo trục `X`.

Sau đó chuyển sang Top View:

```text
Numpad 7
```

Top View giúp quan sát chính xác khoảng cách giữa đuốc và bức tường.

Tiếp tục dùng:

```text
G → X
G → Y
```

tùy theo hướng của bức tường.

---

### 4.2. Focus vào đuốc

Để tập trung viewport vào object đang chọn:

```text
Numpad .
```

Sau đó điều chỉnh độ cao:

```text
G → Z
```

---

### 4.3. Xoay đuốc

Đuốc nên hơi nghiêng khỏi tường thay vì dựng hoàn toàn thẳng đứng.

Ví dụ:

```text
R → Y
```

Dùng chuột để tạo một góc nghiêng nhẹ.

Sau đó tiếp tục di chuyển đuốc sát tường:

```text
G → X
```

Không nên để đuốc:

* Nằm quá sâu bên trong tường.
* Cách tường quá xa.
* Nghiêng quá mạnh.
* Có tỷ lệ quá lớn so với các viên gạch.

---

### 4.4. Điều chỉnh kích thước

Nếu đuốc quá lớn, sử dụng:

```text
S
```

để scale nhỏ lại.

Sau khi scale, có thể cần chỉnh lại độ cao:

```text
G → Z
```

---

## 5. Điều chỉnh riêng ngọn lửa

Sau khi ngọn lửa và thân đuốc đã được Join, vẫn có thể chỉnh riêng phần ngọn lửa trong Edit Mode.

### Các bước thực hiện

1. Chọn đuốc.
2. Nhấn `Tab` để vào **Edit Mode**.
3. Nhấn:

```text
Alt + A
```

để bỏ chọn toàn bộ hình học.

4. Di chuyển chuột lên phần ngọn lửa.
5. Nhấn:

```text
L
```

để chọn toàn bộ phần hình học liên kết của ngọn lửa.

Phím `L` chọn toàn bộ geometry liên kết dưới con trỏ chuột.

---

### 5.1. Tắt Proportional Editing

Nếu Proportional Editing đang bật, khi xoay ngọn lửa, các phần khác của thân đuốc cũng có thể bị ảnh hưởng.

Nếu thao tác xoay làm biến dạng cả thân đuốc:

1. Nhấn `Ctrl + Z` để hoàn tác.
2. Tắt **Proportional Editing** bằng phím:

```text
O
```

Sau đó xoay ngọn lửa:

```text
R → Y
```

Ngọn lửa nên hướng gần như thẳng đứng vì lửa luôn có xu hướng bốc lên trên, ngay cả khi thân đuốc đang nghiêng.

```text
Thân đuốc nghiêng
       │
       └──── Ngọn lửa vẫn hướng lên
```

Cuối cùng, di chuyển nhẹ phần ngọn lửa:

```text
G
```

hoặc:

```text
G → X
G → Z
```

để đặt nó chính xác trên đầu đuốc.

---

## 6. Kiểm tra ánh sáng trong Rendered View

Chuyển viewport sang **Rendered View** để xem vật liệu Emission và ánh sáng trong cảnh.

Ngọn lửa có thể phát sáng hoặc có hiệu ứng Bloom, nhưng việc nó thực sự chiếu sáng các vật thể xung quanh phụ thuộc vào:

* Render Engine.
* Phiên bản Blender.
* Cách thiết lập vật liệu và ánh sáng.

---

## 7. Emission trong Eevee và Cycles

### 7.1. Trong các phiên bản Eevee cũ

Ở những phiên bản Blender cũ được sử dụng trong phần chính của video:

* Vật liệu Emission có thể làm ngọn lửa sáng.
* Bloom tạo quầng sáng xung quanh ngọn lửa.
* Nhưng Emission không thực sự chiếu sáng mạnh lên môi trường xung quanh.

Tăng **Emission Strength** chủ yếu làm ngọn lửa và Bloom sáng hơn.

```text
Emission trong Eevee cũ
        │
        ├── Ngọn lửa sáng
        ├── Có Bloom
        └── Gần như không chiếu sáng môi trường
```

---

### 7.2. Trong Cycles

Khi chuyển sang Cycles:

* Vật liệu Emission thực sự phát ánh sáng.
* Tường, sàn và các object gần ngọn lửa nhận được ánh sáng.
* Cường độ ánh sáng phụ thuộc vào Emission Strength.

Ví dụ, tăng Emission Strength lên khoảng:

```text
50
```

sẽ làm khu vực gần đuốc sáng rõ hơn.

Tuy nhiên, Cycles có một số hạn chế khi làm việc trong viewport:

* Xuất hiện noise.
* Cần thời gian để hội tụ hình ảnh.
* Viewport cập nhật chậm hơn Eevee.
* Yêu cầu phần cứng mạnh hơn để có trải nghiệm mượt.

---

### 7.3. GPU và Denoise trong Cycles

Nếu máy tính có GPU phù hợp, có thể bật GPU Compute để tăng tốc render.

Ngoài ra có thể bật:

```text
Denoise
```

Denoise giúp làm sạch noise trong viewport và hình render.

Tuy vậy, khi xoay hoặc di chuyển viewport, Cycles vẫn cần thời gian để tính toán lại ánh sáng.

---

### 7.4. Blender Eevee phiên bản mới

Trong phần cập nhật sử dụng Blender 4.4.3, Eevee đã có khả năng nhận một phần ánh sáng từ vật liệu Emission.

Điều này có nghĩa:

* Ngọn lửa Emission có thể chiếu một ít ánh sáng lên cảnh.
* Mức ánh sáng thường yếu hơn đáng kể so với Cycles.
* Trong nhiều trường hợp vẫn cần Point Light để kiểm soát kết quả tốt hơn.

```text
Eevee mới
   │
   ├── Emission có thể phát một ít ánh sáng
   ├── Phản hồi viewport nhanh
   └── Point Light vẫn cần thiết

Cycles
   │
   ├── Emission phát sáng mạnh và tự nhiên hơn
   ├── Global Illumination chính xác hơn
   └── Render chậm và có noise
```

---

## 8. Vì sao chọn Eevee cho bài học?

Trong phần này, Eevee được chọn vì:

* Tốc độ nhanh.
* Viewport cập nhật gần như tức thời.
* Hoạt động tốt trên nhiều cấu hình máy tính.
* Phù hợp với quá trình bố trí nhiều đuốc trong cảnh.
* Dễ quan sát thay đổi khi điều chỉnh ánh sáng.

Để bù lại giới hạn của Emission, ta thêm một nguồn sáng thật vào vị trí ngọn lửa.

---

## 9. Thêm Point Light cho ngọn lửa

### 9.1. Đưa 3D Cursor đến đuốc

Chọn object đuốc rồi nhấn:

```text
Shift + S
```

Trong Snap Pie Menu, chọn:

```text
Cursor to Selected
```

3D Cursor sẽ được đưa đến vị trí của đuốc.

---

### 9.2. Thêm Point Light

Nhấn:

```text
Shift + A
```

Sau đó chọn:

```text
Light → Point
```

Point Light phát ánh sáng theo mọi hướng từ một vị trí, vì vậy rất phù hợp để mô phỏng ánh sáng của ngọn lửa.

```text
Point Light
        │
        ├── Chiếu sáng mọi hướng
        ├── Phù hợp với đuốc
        └── Dễ điều khiển màu và công suất
```

---

### 9.3. Đặt Point Light tại ngọn lửa

Sau khi thêm Point Light:

1. Focus vào đèn bằng `Numpad .`.
2. Di chuyển đèn lên vị trí ngọn lửa:

```text
G → Z
```

3. Căn Point Light nằm gần tâm ngọn lửa.

Trong các phiên bản Blender mới, nên đặt Point Light hơi cao hơn hoặc hơi ra ngoài ngọn lửa để tránh nguồn sáng nằm hoàn toàn bên trong geometry.

---

## 10. Điều chỉnh màu ánh sáng

Mở **Light Properties** và thay đổi `Color`.

Ánh sáng đuốc thường có màu:

* Vàng.
* Cam.
* Vàng cam.
* Hơi đỏ ở vùng nóng.

Không nên dùng màu vàng bão hòa hoàn toàn. Một màu cam-vàng nhẹ thường cho kết quả tự nhiên hơn.

```text
Ánh sáng đuốc
    │
    ├── Vàng ấm
    ├── Cam nhẹ
    └── Không quá bão hòa
```

---

## 11. Điều chỉnh Power

Trong video, Power của Point Light được đặt khoảng:

```text
95–100 W
```

Giá trị này đủ để:

* Làm sáng vùng tường quanh đuốc.
* Hiển thị rõ một phần sàn.
* Vẫn duy trì không khí tối của hầm ngục.

Nếu Power quá thấp:

* Đuốc gần như không ảnh hưởng đến cảnh.
* Chỉ thấy ngọn lửa sáng nhưng tường vẫn tối.

Nếu Power quá cao:

* Toàn bộ phòng bị sáng đều.
* Mất tương phản.
* Không còn cảm giác bí ẩn của dungeon.

---

## 12. Điều chỉnh Radius

### 12.1. Trong phần giải thích của Blender cũ

Video ban đầu giải thích rằng khi Radius bằng `0`, Point Light rất nhỏ và có thể nằm bên trong ngọn lửa, khiến geometry của ngọn lửa cản nguồn sáng.

Tăng Radius giúp nguồn sáng mở rộng ra ngoài ngọn lửa.

---

### 12.2. Trong Blender mới

Trong Blender 4.4.3, Radius chủ yếu kiểm soát độ cứng hoặc mềm của bóng đổ.

| Radius | Kết quả                           |
| -----: | --------------------------------- |
|    `0` | Bóng rất cứng, đường biên sắc nét |
|    Nhỏ | Bóng tương đối cứng               |
|    Lớn | Bóng mềm và khuếch tán hơn        |

```text
Radius nhỏ
    │
    ▼
Nguồn sáng nhỏ
    │
    ▼
Bóng cứng

Radius lớn
    │
    ▼
Nguồn sáng lớn
    │
    ▼
Bóng mềm
```

Với ánh sáng đuốc, Radius khoảng:

```text
0.2–0.25
```

thường tạo bóng tương đối cứng, phù hợp với nguồn lửa nhỏ.

> Trong Blender mới, Radius không phải là thông số chính quyết định ánh sáng chiếu được bao xa. Khoảng cách chiếu sáng chịu ảnh hưởng nhiều hơn bởi Power và quy luật suy giảm ánh sáng.

---

## 13. Thiết lập Point Light gợi ý

| Thuộc tính | Giá trị gợi ý                   |
| ---------- | ------------------------------- |
| **Type**   | Point                           |
| **Color**  | Vàng cam                        |
| **Power**  | Khoảng `95–100 W`               |
| **Radius** | Khoảng `0.2–0.25 m`             |
| **Vị trí** | Gần hoặc hơi phía trên ngọn lửa |

Các giá trị này chỉ là điểm bắt đầu. Kết quả thực tế còn phụ thuộc vào:

* Kích thước scene.
* Đơn vị đo.
* Khoảng cách giữa đuốc và tường.
* Màu vật liệu.
* World Background.
* Exposure và Color Management.

---

## 14. Không thể Join Light với mesh

Point Light là một Light Object, còn đuốc là Mesh Object.

Không thể ghép chúng bằng `Ctrl + J` theo cách thông thường để trở thành một object duy nhất.

Do đó, khi muốn nhân bản một cây đuốc hoàn chỉnh, cần chọn đồng thời:

* Mesh đuốc.
* Point Light.

Sau đó mới thực hiện Duplicate.

---

## 15. Tổ chức đuốc vào Collection

Trước khi nhân bản, nên đưa đuốc và đèn vào một Collection riêng.

### Các bước thực hiện

1. Chọn mesh đuốc và Point Light.
2. Nhấn:

```text
M
```

3. Chọn:

```text
New Collection
```

4. Đặt tên:

```text
Torches
```

Collection giúp:

* Quản lý các object đuốc dễ dàng hơn.
* Bật hoặc tắt toàn bộ nhóm đuốc.
* Dễ chọn và chỉnh sửa.
* Giữ Outliner gọn gàng.

---

## 16. Nhân bản bằng Linked Duplicate

Để nhân bản mesh đuốc và Point Light:

1. Chọn cả hai object.
2. Nhấn:

```text
Alt + D
```

3. Di chuyển bản sao theo trục mong muốn.

Ví dụ:

```text
Alt + D → Y
```

để nhân bản sang bức tường đối diện theo trục `Y`.

---

### 16.1. Vì sao dùng Alt + D?

`Alt + D` tạo **Linked Duplicate**.

Các bản sao:

* Có transform riêng.
* Có thể nằm tại các vị trí khác nhau.
* Có thể xoay khác nhau.
* Nhưng dùng chung dữ liệu gốc.

Điều này đặc biệt hữu ích với Point Light. Nếu thay đổi Power của một đèn liên kết, các đèn còn lại cũng được cập nhật.

```text
Point Light gốc
       │
       ├── Alt + D → Đèn 2
       ├── Alt + D → Đèn 3
       └── Alt + D → Đèn 4

Thay đổi Power một đèn
       │
       ▼
Tất cả đèn liên kết cập nhật
```

---

### 16.2. Alt + D và Shift + D

| Phím tắt    | Loại bản sao      | Dữ liệu            |
| ----------- | ----------------- | ------------------ |
| `Shift + D` | Duplicate độc lập | Dữ liệu riêng      |
| `Alt + D`   | Linked Duplicate  | Dùng chung dữ liệu |

Dùng `Alt + D` khi muốn:

* Tất cả đuốc có cùng mesh.
* Tất cả Point Light có cùng thông số.
* Thay đổi một lần và cập nhật toàn bộ.

Dùng `Shift + D` khi muốn:

* Mỗi đuốc có hình dạng riêng.
* Mỗi đèn có Power hoặc Color khác nhau hoàn toàn.

---

## 17. Đặt các đuốc còn lại

Chuyển sang Top View:

```text
Numpad 7
```

Sau đó di chuyển các bản sao đến các bức tường còn lại.

Có thể sử dụng:

```text
G → X
G → Y
```

Nếu đuốc nằm ở phía đối diện và nghiêng sai hướng, xoay nó 180°:

```text
R → Z → 180
```

Sau đó nhấn `Enter`.

Tiếp tục đưa đuốc sát tường:

```text
G → X
```

hoặc:

```text
G → Y
```

tùy hướng của tường.

---

## 18. Chọn đuốc và đèn dễ hơn

Point Light và mesh đuốc đôi khi khó chọn cùng lúc, đặc biệt khi viewport có nhiều object.

Có thể sử dụng **Box Select**:

```text
B
```

để kéo vùng chọn bao quanh đuốc và Point Light.

Nếu chọn nhầm object khác, dùng thao tác Box Select kết hợp `Ctrl` để bỏ bớt object khỏi selection, tùy theo thiết lập chọn của phiên bản Blender.

Ngoài ra có thể chọn object trực tiếp trong Outliner.

---

## 19. Điều chỉnh World Background

Sau khi bố trí các đuốc, cần kiểm soát ánh sáng nền của toàn bộ cảnh.

Trong **Shader Editor**:

1. Mở menu chọn loại dữ liệu ở góc trên.
2. Chuyển từ:

```text
Object
```

sang:

```text
World
```

World sử dụng node **Background** để điều khiển:

* Màu nền.
* Ánh sáng môi trường.
* Độ sáng chung của toàn cảnh.

---

## 20. World Background màu đen

Nếu đặt màu Background thành đen hoàn toàn:

* Gần như không có ánh sáng môi trường.
* Các cây đuốc trở thành nguồn sáng chính.
* Cảnh rất tối và giàu không khí.
* Vùng xa đuốc có thể mất toàn bộ chi tiết.

```text
World đen
    │
    ├── Không khí mạnh
    ├── Tương phản cao
    ├── Đuốc nổi bật
    └── Dễ mất chi tiết vùng tối
```

Cách này phù hợp khi muốn tạo:

* Dungeon bí ẩn.
* Cảnh kinh dị.
* Không gian rất sâu và tối.
* Ánh sáng tập trung mạnh quanh đuốc.

---

## 21. World Background xanh xám tối

Để giữ không khí tối nhưng vẫn thấy một phần mô hình, có thể:

1. Tăng độ sáng Background nhẹ.
2. Dịch màu về phía xanh lam hoặc xanh xám.
3. Giữ giá trị màu ở mức thấp.

Màu xanh lạnh của môi trường tạo tương phản đẹp với ánh sáng đuốc màu cam.

```text
Ánh sáng môi trường
        xanh lạnh
            +
Ánh sáng đuốc
         cam ấm
            │
            ▼
Tương phản màu nóng – lạnh
```

Lợi ích:

* Vẫn nhìn thấy tường và sàn ở vùng tối.
* Tăng cảm giác chiều sâu.
* Giữ được không khí u ám.
* Làm ánh sáng đuốc nổi bật hơn.

---

## 22. Cân bằng ánh sáng đuốc và World

Nếu World quá sáng:

* Toàn bộ hầm ngục sáng đều.
* Ánh sáng đuốc ít nổi bật.
* Mất cảm giác tối và bí ẩn.
* Bóng đổ kém rõ ràng.

Nếu World quá tối:

* Các vùng ngoài phạm vi đuốc trở thành màu đen hoàn toàn.
* Không nhìn thấy hình dạng của tường và cột.
* Cảnh có thể thiếu thông tin thị giác.

Mục tiêu là tìm mức cân bằng:

```text
World Background tối
        +
Point Light màu ấm
        =
Cảnh tối nhưng vẫn đọc được hình khối
```

---

## 23. Quy trình thiết lập ánh sáng đề xuất

### Giai đoạn 1: Chuẩn bị đuốc

1. Bật hiển thị Object Origins.
2. Chọn ngọn lửa trước và thân đuốc sau.
3. Nhấn `Ctrl + J`.
4. Đổi tên object thành `Torch`.
5. Đổi tên material Emission thành `Flame`.

### Giai đoạn 2: Đặt đuốc

1. Di chuyển đuốc đến tường.
2. Dùng Top View để căn vị trí.
3. Xoay thân đuốc hơi nghiêng.
4. Điều chỉnh tỷ lệ nếu cần.
5. Vào Edit Mode và chọn ngọn lửa bằng `L`.
6. Tắt Proportional Editing.
7. Xoay ngọn lửa hướng lên trên.

### Giai đoạn 3: Tạo nguồn sáng

1. Chọn đuốc.
2. Dùng `Shift + S → Cursor to Selected`.
3. Thêm `Point Light`.
4. Đưa Point Light đến ngọn lửa.
5. Đổi màu sang vàng cam.
6. Đặt Power khoảng `100 W`.
7. Đặt Radius khoảng `0.2–0.25`.

### Giai đoạn 4: Nhân bản

1. Chọn đuốc và Point Light.
2. Đưa chúng vào Collection `Torches`.
3. Nhấn `Alt + D` để tạo Linked Duplicate.
4. Đặt các bản sao lên những bức tường khác.
5. Xoay 180° nếu đuốc quay sai hướng.
6. Thay đổi Power để kiểm tra toàn bộ linked lights cập nhật.

### Giai đoạn 5: Điều chỉnh môi trường

1. Chuyển Shader Editor sang World.
2. Thử Background màu đen.
3. Tăng độ sáng nhẹ nếu mất quá nhiều chi tiết.
4. Thêm sắc xanh xám vào Background.
5. Quan sát sự cân bằng giữa vùng sáng và vùng tối.
6. Lưu file.

---

## 24. Phím tắt quan trọng

| Phím tắt      | Chức năng                                   |
| ------------- | ------------------------------------------- |
| `Ctrl + J`    | Join các mesh object                        |
| `Tab`         | Chuyển giữa Object Mode và Edit Mode        |
| `Alt + A`     | Bỏ chọn toàn bộ trong Edit Mode             |
| `L`           | Chọn toàn bộ geometry liên kết dưới con trỏ |
| `O`           | Bật hoặc tắt Proportional Editing           |
| `G`           | Di chuyển                                   |
| `G → X`       | Di chuyển theo trục X                       |
| `G → Y`       | Di chuyển theo trục Y                       |
| `G → Z`       | Di chuyển theo trục Z                       |
| `R → Y`       | Xoay quanh trục Y                           |
| `R → Z → 180` | Xoay 180° quanh trục Z                      |
| `S`           | Scale object                                |
| `Numpad 7`    | Top View                                    |
| `Numpad .`    | Focus vào object được chọn                  |
| `Shift + S`   | Mở Snap Pie Menu                            |
| `Shift + A`   | Thêm object                                 |
| `M`           | Di chuyển object vào Collection             |
| `Alt + D`     | Linked Duplicate                            |
| `Shift + D`   | Duplicate độc lập                           |
| `B`           | Box Select                                  |
| `Ctrl + Z`    | Undo                                        |

---

## 25. Lỗi thường gặp và cách khắc phục

### 25.1. Join xong nhưng Origin nằm sai vị trí

**Nguyên nhân:**
Ngọn lửa được chọn cuối cùng nên nó trở thành Active Object.

**Cách khắc phục:**

1. Undo.
2. Chọn ngọn lửa trước.
3. Chọn thân đuốc cuối cùng.
4. Nhấn `Ctrl + J`.

---

### 25.2. Xoay ngọn lửa làm biến dạng thân đuốc

**Nguyên nhân:**
Proportional Editing đang bật.

**Cách khắc phục:**

1. Nhấn `Ctrl + Z`.
2. Nhấn `O` để tắt Proportional Editing.
3. Xoay lại phần ngọn lửa.

---

### 25.3. Ngọn lửa phát sáng nhưng tường không sáng

**Nguyên nhân có thể:**

* Đang sử dụng Eevee phiên bản cũ.
* Emission Strength quá thấp.
* Emission trong Eevee mới chỉ tạo ánh sáng yếu.
* Không có Point Light hỗ trợ.

**Cách khắc phục:**

* Thêm Point Light tại vị trí ngọn lửa.
* Đặt Power khoảng `100 W`.
* Chỉnh màu vàng cam.
* Đảm bảo đèn không nằm quá sâu bên trong mesh.

---

### 25.4. Point Light không chiếu sáng đúng

**Nguyên nhân:**

* Đèn nằm bên trong geometry.
* Power quá thấp.
* Đèn bị đặt sai vị trí.
* World hoặc exposure khiến kết quả khó quan sát.

**Cách khắc phục:**

* Di chuyển đèn hơi lên trên ngọn lửa.
* Tăng Power.
* Kiểm tra vị trí bằng Wireframe hoặc X-Ray.
* Tạm giảm World Background để quan sát tác động của đèn.

---

### 25.5. Bóng đổ quá cứng

**Nguyên nhân:**
Radius quá nhỏ hoặc bằng `0`.

**Cách khắc phục:**

* Tăng Radius lên khoảng `0.2–0.25`.
* Quan sát bóng của đuốc trên tường.
* Không tăng quá lớn nếu vẫn muốn giữ cảm giác nguồn lửa nhỏ.

---

### 25.6. Bóng đổ quá mềm

**Nguyên nhân:**
Radius quá lớn.

**Cách khắc phục:**

* Giảm Radius.
* So sánh trực tiếp bóng trên tường.
* Chọn giá trị phù hợp với kích thước ngọn lửa.

---

### 25.7. Thay đổi một đèn nhưng các đèn khác không cập nhật

**Nguyên nhân:**
Đèn được nhân bản bằng `Shift + D` thay vì `Alt + D`.

**Cách khắc phục:**

* Xóa các bản sao độc lập nếu cần.
* Nhân bản lại bằng `Alt + D`.
* Hoặc chỉnh từng đèn riêng nếu muốn chúng có cường độ khác nhau.

---

### 25.8. Toàn bộ hầm ngục quá sáng

**Nguyên nhân:**

* Point Light có Power quá cao.
* Có quá nhiều đèn.
* World Background quá sáng.
* Màu vật liệu phản xạ ánh sáng mạnh.

**Cách khắc phục:**

* Giảm Power.
* Làm World Background tối hơn.
* Chỉ đặt đèn tại những vị trí cần thiết.
* Đánh giá ánh sáng từ Camera View thay vì chỉ nhìn cận cảnh.

---

### 25.9. Cảnh tối hoàn toàn ngoài vùng đuốc

**Nguyên nhân:**
World Background được đặt thành màu đen hoàn toàn.

**Cách khắc phục:**

* Tăng độ sáng Background một chút.
* Dùng màu xanh xám rất tối.
* Giữ ánh sáng môi trường đủ để thấy hình khối nhưng không làm mất không khí.

---

## 26. So sánh Eevee và Cycles trong cảnh dungeon

| Tiêu chí                | Eevee                            | Cycles                     |
| ----------------------- | -------------------------------- | -------------------------- |
| **Tốc độ viewport**     | Rất nhanh                        | Chậm hơn                   |
| **Noise**               | Hầu như không                    | Có noise khi chưa hội tụ   |
| **Emission chiếu sáng** | Có giới hạn, phụ thuộc phiên bản | Chính xác và mạnh hơn      |
| **Global Illumination** | Gần đúng                         | Tự nhiên hơn               |
| **Phù hợp bố trí đèn**  | Rất phù hợp                      | Kém tiện lợi hơn           |
| **Phù hợp render cuối** | Tốt cho phong cách game          | Tốt cho hình ảnh chân thực |
| **Yêu cầu phần cứng**   | Thấp hơn                         | Cao hơn                    |

### Lựa chọn đề xuất

```text
Đang bố trí đèn và chỉnh scene
              │
              ▼
            Eevee

Muốn render chân thực và có thời gian
              │
              ▼
            Cycles
```

---

## 27. Checklist thực hành

* [ ] Đã bật hiển thị Object Origins.
* [ ] Đã chọn ngọn lửa trước và thân đuốc sau.
* [ ] Đã Join ngọn lửa với thân đuốc.
* [ ] Đã đổi tên object thành `Torch`.
* [ ] Đã đổi tên material Emission thành `Flame`.
* [ ] Đã đặt đuốc sát tường.
* [ ] Đã xoay thân đuốc hơi nghiêng.
* [ ] Đã chỉnh ngọn lửa hướng lên trên.
* [ ] Đã tắt Proportional Editing trước khi chỉnh ngọn lửa.
* [ ] Đã thử quan sát Emission trong Eevee.
* [ ] Đã thử chuyển sang Cycles để so sánh.
* [ ] Đã thêm Point Light tại ngọn lửa.
* [ ] Đã chọn màu vàng cam cho đèn.
* [ ] Đã đặt Power khoảng `95–100 W`.
* [ ] Đã điều chỉnh Radius để kiểm soát độ mềm của bóng.
* [ ] Đã đưa đuốc và đèn vào Collection `Torches`.
* [ ] Đã nhân bản bằng `Alt + D`.
* [ ] Đã kiểm tra việc thay đổi một đèn cập nhật các đèn liên kết.
* [ ] Đã điều chỉnh World Background.
* [ ] Đã tạo được sự tương phản giữa ánh sáng cam và nền xanh xám.
* [ ] Đã lưu file.

---

## 28. Tóm tắt

Bài học tập trung vào việc sử dụng đuốc làm nguồn sáng chính cho hầm ngục.

Quy trình quan trọng:

```text
Join ngọn lửa và thân đuốc
            │
            ▼
Đặt đuốc đúng vị trí trên tường
            │
            ▼
Thêm Point Light tại ngọn lửa
            │
            ▼
Color vàng cam + Power khoảng 100
            │
            ▼
Radius kiểm soát độ mềm của bóng
            │
            ▼
Alt + D để nhân bản liên kết
            │
            ▼
World Background xanh xám tối
            │
            ▼
Không khí dungeon tối và giàu chiều sâu
```

Các điểm cần ghi nhớ:

* Vật liệu Emission và Light Object không hoàn toàn giống nhau.
* Trong Cycles, Emission chiếu sáng tự nhiên và rõ ràng hơn.
* Eevee nhanh hơn và phù hợp để bố trí ánh sáng.
* Trong Eevee mới, Emission có thể phát một ít ánh sáng nhưng Point Light vẫn giúp kiểm soát cảnh tốt hơn.
* Power quyết định cường độ sáng.
* Radius chủ yếu ảnh hưởng đến độ mềm của bóng trong Blender mới.
* `Alt + D` giúp nhiều đèn dùng chung thông số.
* World Background không nên quá sáng hoặc quá tối.
* Màu nền lạnh kết hợp ánh sáng đuốc ấm tạo tương phản phù hợp với hầm ngục.

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
