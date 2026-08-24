# 034 — Cutting the Door Opening

| Thuộc tính       | Nội dung                                                       |
| ---------------- | -------------------------------------------------------------- |
| **Module**       | Module 02 — Modular Dungeon                                    |
| **Bài học**      | Cutting the Door Opening                                       |
| **Thời lượng**   | 4:22                                                           |
| **Chủ đề chính** | Cắt lỗ cửa trên tường và ghép thành một wall module hoàn chỉnh |

## 1. Mục tiêu bài học

Sau bài học này, người học có thể:

* Hiểu hai phương pháp cơ bản để tạo lỗ trên một mesh:

  * Cắt thủ công bằng **Knife Tool**.
  * Cắt bằng phép toán **Boolean**.
* Sử dụng Wireframe để quan sát và chọn hình học xuyên qua vật thể.
* Dùng Knife Tool để bổ sung các cạnh bao quanh khu vực cửa.
* Xóa các mặt không cần thiết để tạo lỗ cửa xuyên qua tường.
* Áp dụng Mirror Modifier trước khi ghép các object.
* Hiểu vai trò của **Active Object** khi sử dụng `Ctrl + J`.
* Ghép tường, khung cửa và trụ thành một wall module hoàn chỉnh.
* Nhận biết các mặt nằm bên trong mesh sau khi Join.

---

## 2. Phương pháp được sử dụng trong bài

Có hai cách phổ biến để cắt lỗ cửa trên tường.

### Phương pháp 1: Knife Tool

Dùng Knife Tool để tạo các cạnh mới trên bề mặt tường, sau đó chọn và xóa các mặt nằm trong khu vực cửa.

```text
Tường ban đầu
      │
      ▼
Dùng Knife Tool tạo đường biên
      │
      ▼
Chọn các mặt bên trong
      │
      ▼
Delete Faces
      │
      ▼
Lỗ cửa hoàn chỉnh
```

Đây là phương pháp được sử dụng trong bài học.

### Phương pháp 2: Boolean

Boolean sử dụng một object riêng làm khối cắt.

Ví dụ:

```text
Tường + Object cắt
        │
        ▼
Boolean Difference
        │
        ▼
Tường có lỗ
```

Boolean có thể hoạt động nhanh, nhưng đôi khi gây ra:

* Topology phức tạp.
* Mặt nhỏ hoặc cạnh thừa.
* Lỗi hình học.
* Lỗi shading.
* Kết quả không ổn định khi mesh chưa sạch.

Vì đây là bài học dành cho người mới, giảng viên không sử dụng Boolean. Thay vào đó, bài học tập trung vào các kỹ năng box modelling nền tảng như thao tác với vertex, edge và face.

> **Lưu ý:** Boolean chỉ được giới thiệu về mặt khái niệm trong bài này, không phải công cụ được dùng để cắt cửa.

---

## 3. Chuẩn bị scene

Trong scene hiện tại có:

* Một đoạn tường.
* Hai trụ ở hai bên.
* Khung bao quanh cửa đã được tạo từ bài trước.

Trước khi cắt tường, cần tạm ẩn các trụ để chúng không che khuất hình học.

### 3.1. Ẩn hai trụ

Chọn hai trụ và nhấn:

```text
H
```

Có thể thực hiện thao tác tương đương bằng cách tắt biểu tượng con mắt của object trong **Outliner**.

Ẩn các trụ giúp:

* Quan sát phần tường rõ hơn.
* Tránh chọn nhầm object.
* Dễ xác định các cạnh cần cắt.

---

## 4. Chuyển sang Wireframe

Chọn object tường, sau đó chuyển sang chế độ Wireframe.

Có hai cách:

### Cách 1: Dùng Shading Menu

Nhấn vào biểu tượng **Wireframe** ở góc trên bên phải của 3D Viewport.

### Cách 2: Dùng Shading Pie Menu

Nhấn:

```text
Z
```

Sau đó chọn:

```text
Wireframe
```

Wireframe cho phép nhìn xuyên qua vật thể và quan sát toàn bộ cạnh ở cả mặt trước lẫn mặt sau.

---

## 5. Chuyển sang góc nhìn chính diện

Sử dụng:

```text
Numpad 1
```

để chuyển sang **Front View**.

Có thể nhấn:

```text
Numpad 5
```

để chuyển đổi giữa:

* Perspective View.
* Orthographic View.

Với thao tác cắt cửa, góc nhìn chính diện giúp các đường cắt được đặt thẳng và dễ căn theo khung cửa.

> Khi cần cắt chính xác theo mặt phẳng, Front Orthographic thường là góc nhìn dễ kiểm soát nhất.

---

## 6. Cắt hình dạng cửa bằng Knife Tool

Chuyển vào Edit Mode:

```text
Tab
```

Kích hoạt Knife Tool:

```text
K
```

### 6.1. Tận dụng topology có sẵn

Không nhất thiết phải cắt toàn bộ đường viền cửa từ đầu. Có thể tận dụng những cạnh đã tồn tại trên mesh tường.

Mục tiêu chính là tạo một vùng mặt khép kín ở giữa để có thể xóa nó.

Ví dụ, nếu tường đã có các cạnh ngang và dọc phù hợp, chỉ cần bổ sung những đường còn thiếu.

```text
Topology ban đầu:

┌───────────────┐
│───────┬───────│
│       │       │
│       │       │
└───────┴───────┘

Bổ sung đường cắt:

┌───────────────┐
│────┬─────┬────│
│    │ Cửa │    │
│    │     │    │
└────┴─────┴────┘
```

### 6.2. Tạo đường cắt thứ nhất

Khi Knife Tool đang hoạt động:

1. Nhấn chuột trái tại điểm bắt đầu.
2. Di chuyển đến điểm kết thúc.
3. Nhấn chuột trái để đặt điểm tiếp theo.
4. Nhấn `Enter` để xác nhận đường cắt.

### 6.3. Tạo đường cắt còn lại

Nhấn lại:

```text
K
```

Sau đó tạo đường cắt còn thiếu để vùng cửa được bao kín hoàn toàn.

Điều quan trọng là các đường cắt phải nối đúng vào những vertex hoặc edge có sẵn.

---

## 7. Chọn các mặt bên trong cửa

Sau khi tạo đủ đường biên, chuyển sang **Face Select**:

```text
3
```

Chọn toàn bộ các mặt nằm trong khu vực cửa.

Có thể sử dụng nhiều phương pháp chọn khác nhau.

### 7.1. Box Select

Sử dụng:

```text
B
```

Kéo một vùng hình chữ nhật để chọn nhiều mặt cùng lúc.

### 7.2. Circle Select

Nhấn và giữ biểu tượng công cụ chọn trên thanh công cụ, sau đó chọn **Circle Select**.

Với Circle Select:

* Giữ chuột trái để tô chọn các mặt.
* Giữ `Shift` khi cần mở rộng vùng chọn tùy theo thiết lập.
* Giữ `Ctrl` để bỏ chọn các mặt không mong muốn.
* Cuộn con lăn chuột để thay đổi kích thước vòng chọn.

Sau khi hoàn tất, nên chuyển lại về **Select Box** để tránh nhầm lẫn ở các thao tác sau.

---

## 8. Xóa các mặt để tạo lỗ cửa

Khi toàn bộ các mặt bên trong cửa đã được chọn, nhấn:

```text
Delete
```

Sau đó chọn:

```text
Faces
```

Không nên chọn Delete Vertices nếu vẫn muốn giữ các cạnh bao quanh lỗ cửa.

Quy trình:

```text
Chọn các mặt bên trong
          │
          ▼
       Delete
          │
          ▼
        Faces
          │
          ▼
   Tạo khoảng trống cửa
```

---

## 9. Kiểm tra kết quả trong Solid Mode

Nhấn:

```text
Z
```

Sau đó chọn:

```text
Solid
```

Lúc này có thể thấy một lỗ cửa đã được tạo trên tường.

Do object tường đang sử dụng **Mirror Modifier** theo trục Y, các thay đổi ở mặt trước cũng được phản chiếu sang phía sau. Vì vậy, khi xóa mặt trước, lỗ cửa cũng xuất hiện xuyên qua mặt sau của tường.

```text
Mặt trước bị xóa
        │
        ▼
Mirror theo trục Y
        │
        ▼
Mặt sau cũng có lỗ
```

---

## 10. Hiện lại các trụ

Để hiện lại những object đã ẩn, nhấn:

```text
Alt + H
```

Hoặc bật lại biểu tượng con mắt trong Outliner.

Sau khi hiện các trụ và khung cửa, có thể kiểm tra tổng thể wall module.

---

## 11. Chuẩn bị ghép các object

Mục tiêu tiếp theo là ghép:

* Phần tường.
* Khung bao quanh cửa.
* Một trụ bên cạnh.

thành một object duy nhất.

### 11.1. Chỉ giữ lại một trụ

Wall module chỉ cần một trụ vì khi các module được nhân bản và đặt cạnh nhau, trụ có thể được chia sẻ giữa hai đoạn tường.

Chọn trụ không cần thiết và nhấn:

```text
Delete
```

Việc chỉ giữ một trụ giúp:

* Tránh các trụ bị chồng lên nhau khi ghép module.
* Giảm số polygon không cần thiết.
* Giữ cấu trúc modular nhất quán.

---

## 12. Apply Mirror Modifier

Trước khi Join các object, cần áp dụng Mirror Modifier trên object tường.

Chọn object tường và mở tab **Modifiers**.

Trong Mirror Modifier, chọn:

```text
Apply
```

Tùy phiên bản Blender, có thể mở menu của modifier rồi chọn **Apply**.

Việc Apply Mirror giúp:

* Chuyển phần hình học phản chiếu thành mesh thật.
* Tránh mất hoặc thay đổi modifier khi Join.
* Đảm bảo hai mặt tường được giữ nguyên sau khi hợp nhất.

> Không nên Join khi Mirror Modifier chưa được áp dụng nếu muốn giữ chính xác hình học hiện tại.

---

## 13. Chọn Active Object

Khi Join nhiều object, object được chọn cuối cùng sẽ trở thành **Active Object**.

Active Object thường được hiển thị bằng đường viền màu vàng sáng hơn các object còn lại.

Trong bài học, thứ tự chọn là:

1. Chọn các phần của khung cửa.
2. Chọn phần tường.
3. Chọn trụ còn lại cuối cùng.

Trụ trở thành Active Object.

```text
Khung cửa
    +
Tường
    +
Trụ được chọn cuối
        │
        ▼
Trụ là Active Object
```

---

## 14. Vì sao chọn trụ làm Active Object?

Khi Join, object mới sẽ kế thừa một số thuộc tính của Active Object, bao gồm vị trí **Object Origin**.

Do trụ được chọn cuối cùng:

* Object Origin của module sẽ nằm tại vị trí trụ.
* Module dễ căn vào lưới hơn.
* Dễ xoay và đặt module.
* Dễ nhân bản để xây dựng môi trường modular.

Đây là một bước quan trọng khi thiết kế game asset dạng module.

---

## 15. Join các object

Khi các object cần thiết đã được chọn và trụ là Active Object, nhấn:

```text
Ctrl + J
```

Các object sẽ được hợp nhất thành một mesh duy nhất.

Sau thao tác, wall module gồm:

* Tường có lỗ cửa.
* Khung cửa.
* Một trụ.
* Object Origin nằm ở vị trí trụ.

```text
Tường có lỗ
     +
Khung cửa
     +
Một trụ
     │
     ▼
Ctrl + J
     │
     ▼
Door Wall Module
```

---

## 16. Kiểm tra các mặt bên trong

Chuyển sang Wireframe:

```text
Z → Wireframe
```

Có thể thấy giữa các phần vừa Join vẫn còn một số mặt nằm bên trong object.

Đây không phải topology tối ưu nhất vì:

* Những mặt này không nhìn thấy từ bên ngoài.
* Chúng làm tăng số polygon.
* Có thể gây khó khăn nếu tiếp tục chỉnh sửa mesh phức tạp.

Tuy nhiên, trong bài tập hiện tại, số mặt này không gây ảnh hưởng đáng kể đến kết quả.

Sau khi kiểm tra, quay lại Solid Mode:

```text
Z → Solid
```

> Join chỉ gộp nhiều object thành một object. Join không tự động xóa các mặt giao nhau hoặc hàn topology giữa chúng.

---

## 17. Join khác với Boolean Union

Cần phân biệt hai thao tác:

| Thao tác              | Kết quả                                                              |
| --------------------- | -------------------------------------------------------------------- |
| **Join – `Ctrl + J`** | Đưa nhiều mesh vào cùng một object nhưng giữ nguyên toàn bộ hình học |
| **Boolean Union**     | Hợp nhất thể tích và có thể loại bỏ một số mặt nằm bên trong         |
| **Merge Vertices**    | Gộp các vertex gần hoặc trùng nhau                                   |
| **Bridge/Fill**       | Tạo mặt nối giữa các phần topology                                   |

Sau khi Join, các phần mesh vẫn có thể:

* Chưa được nối vertex với nhau.
* Có mặt nằm chồng bên trong.
* Có các khối hình học độc lập trong cùng một object.

Điều này vẫn chấp nhận được đối với module đơn giản trong bài học.

---

## 18. Quy trình thực hành hoàn chỉnh

```text
Ẩn hai trụ
     │
     ▼
Chọn tường
     │
     ▼
Chuyển sang Wireframe
     │
     ▼
Front View
     │
     ▼
Edit Mode
     │
     ▼
Knife Tool tạo đường biên cửa
     │
     ▼
Face Select
     │
     ▼
Chọn các mặt bên trong
     │
     ▼
Delete Faces
     │
     ▼
Solid Mode kiểm tra lỗ cửa
     │
     ▼
Hiện lại các trụ
     │
     ▼
Xóa một trụ không cần thiết
     │
     ▼
Apply Mirror Modifier
     │
     ▼
Chọn khung cửa và tường
     │
     ▼
Chọn trụ cuối cùng
     │
     ▼
Ctrl + J
     │
     ▼
Wall module hoàn chỉnh
```

---

## 19. Phím tắt và công cụ liên quan

| Phím tắt        | Chức năng                              |
| --------------- | -------------------------------------- |
| `H`             | Ẩn object hoặc thành phần đang chọn    |
| `Alt + H`       | Hiện lại các object đã ẩn              |
| `Z`             | Mở Shading Pie Menu                    |
| `Numpad 1`      | Front View                             |
| `Numpad 5`      | Chuyển đổi Perspective và Orthographic |
| `Tab`           | Chuyển đổi Object Mode và Edit Mode    |
| `K`             | Knife Tool                             |
| `Enter`         | Xác nhận đường cắt Knife               |
| `3`             | Face Select trong Edit Mode            |
| `B`             | Box Select                             |
| `Delete`        | Mở menu xóa                            |
| `Ctrl + J`      | Join các object                        |
| `Ctrl + Z`      | Undo                                   |
| `Alt + A`       | Bỏ chọn toàn bộ trong một số keymap    |
| `Shift + Click` | Chọn thêm object hoặc thành phần       |

---

## 20. Lưu ý và lỗi thường gặp

### 20.1. Dùng Boolean dù chưa hiểu topology

Boolean có thể tạo kết quả nhanh nhưng dễ phát sinh lỗi đối với người mới.

**Khắc phục:** sử dụng Knife Tool và các cạnh có sẵn để luyện tập box modelling trước.

### 20.2. Cắt trong Solid Mode

Trong Solid Mode, có thể khó nhìn thấy hoặc chọn hình học ở mặt sau.

**Khắc phục:** chuyển sang:

```text
Z → Wireframe
```

### 20.3. Đường Knife không nối vào cạnh

Nếu điểm đầu hoặc điểm cuối không thực sự nằm trên edge, Knife có thể tạo topology không như mong muốn.

**Khắc phục:**

* Phóng to khu vực cắt.
* Đặt điểm trực tiếp lên vertex hoặc edge.
* Kiểm tra đường cắt trước khi nhấn `Enter`.

### 20.4. Vùng cửa chưa được khép kín

Nếu đường biên cửa chưa tạo thành một vùng mặt độc lập, không thể chọn chính xác các mặt bên trong.

**Khắc phục:** bổ sung các đường cắt còn thiếu bằng `K`.

### 20.5. Xóa nhầm Vertices

Delete Vertices có thể xóa cả các cạnh cần giữ quanh cửa.

**Khắc phục:** chọn:

```text
Delete → Faces
```

### 20.6. Quên Apply Mirror

Join khi Mirror Modifier chưa được Apply có thể khiến kết quả khác mong đợi hoặc modifier bị ảnh hưởng bởi Active Object.

**Khắc phục:** Apply Mirror trên tường trước khi Join.

### 20.7. Chọn sai Active Object

Nếu tường hoặc khung cửa được chọn cuối cùng, Object Origin của module có thể nằm ở vị trí không thuận tiện.

**Khắc phục:** chọn trụ cuối cùng để trụ trở thành Active Object.

### 20.8. Giữ lại cả hai trụ

Hai wall module đặt cạnh nhau có thể tạo ra hai trụ chồng lên cùng một vị trí.

**Khắc phục:** chỉ giữ một trụ trên mỗi module.

### 20.9. Cho rằng Join sẽ xóa mặt bên trong

`Ctrl + J` không tự động dọn dẹp topology.

**Khắc phục:** chấp nhận các mặt bên trong với asset đơn giản hoặc dọn dẹp thủ công nếu cần tối ưu cao hơn.

---

## 21. Bài tập thực hành

Tạo một wall module có cửa với các yêu cầu:

* Tường sử dụng Mirror Modifier.
* Lỗ cửa được tạo bằng Knife Tool.
* Tận dụng ít nhất một cạnh có sẵn trên tường.
* Các mặt trong vùng cửa được xóa bằng `Delete Faces`.
* Khung cửa được đặt bao quanh lỗ.
* Chỉ giữ lại một trụ.
* Mirror Modifier được Apply trước khi Join.
* Trụ là Active Object khi Join.
* Toàn bộ module được hợp nhất bằng `Ctrl + J`.

### Thử thách mở rộng

Tạo ba biến thể:

| Module                | Đặc điểm                            |
| --------------------- | ----------------------------------- |
| **Door Wall**         | Tường có lỗ cửa tiêu chuẩn          |
| **Wide Door Wall**    | Lỗ cửa rộng hơn cho cổng lớn        |
| **Damaged Door Wall** | Cạnh cửa bị sứt hoặc không đối xứng |

---

## 22. Checklist thực hành

* [ ] Đã ẩn hai trụ trước khi chỉnh sửa tường.
* [ ] Đã chuyển sang Wireframe.
* [ ] Đã chuyển sang Front View.
* [ ] Đã vào Edit Mode.
* [ ] Đã sử dụng Knife Tool để tạo đường biên cửa.
* [ ] Đã tận dụng các cạnh có sẵn trên tường.
* [ ] Đã chọn đúng các mặt bên trong cửa.
* [ ] Đã xóa bằng `Delete → Faces`.
* [ ] Đã kiểm tra lỗ cửa trong Solid Mode.
* [ ] Đã hiện lại các trụ.
* [ ] Đã xóa một trụ không cần thiết.
* [ ] Đã Apply Mirror Modifier.
* [ ] Đã chọn trụ làm Active Object.
* [ ] Đã Join bằng `Ctrl + J`.
* [ ] Đã kiểm tra các mặt bên trong ở Wireframe.
* [ ] Đã lưu file Blender.

---

## 23. Tóm tắt

Bài học hướng dẫn tạo lỗ cửa trên một đoạn tường bằng **Knife Tool** thay vì Boolean. Người học chuyển sang Wireframe, tận dụng topology có sẵn, bổ sung các đường cắt còn thiếu và xóa các mặt nằm trong vùng cửa.

Sau khi tạo lỗ, một trụ không cần thiết được xóa, Mirror Modifier của tường được Apply, rồi tường, khung cửa và trụ còn lại được ghép bằng `Ctrl + J`. Trụ được chọn cuối cùng để trở thành Active Object, giúp Object Origin của module nằm tại vị trí thuận tiện cho việc căn chỉnh và nhân bản.

Mặc dù sau khi Join vẫn còn một số mặt nằm bên trong mesh, chúng không ảnh hưởng đáng kể đến wall module trong bài tập này. Bài học chủ yếu củng cố các kỹ năng nền tảng về Knife Tool, lựa chọn face, quản lý modifier, Active Object và xây dựng asset modular.

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
