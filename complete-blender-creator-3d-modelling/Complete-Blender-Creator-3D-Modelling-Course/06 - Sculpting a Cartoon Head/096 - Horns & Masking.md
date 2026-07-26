# 096 — Horns & Masking

## Tạo sừng và sử dụng Mask trong Sculpt Mode

| Thuộc tính       | Nội dung                                                      |
| ---------------- | ------------------------------------------------------------- |
| **Module**       | Module 06 — Sculpting a Cartoon Head                          |
| **Bài học**      | Horns & Masking                                               |
| **Thời lượng**   | 6:41                                                          |
| **Chủ đề chính** | Masking, Grab, Snake Hook, Inflate, Remesh và Mirror Modifier |

---

## 1. Mục tiêu bài học

Sau bài học này, bạn có thể:

* Sử dụng **Mask Brush** để bảo vệ hoặc cô lập một vùng mesh.
* Chỉnh sửa một bộ phận mà không làm ảnh hưởng đến vùng xung quanh.
* Dùng **Snake Hook** để kéo mesh thành hình sừng cong.
* Dùng **Inflate** để làm dày những vùng bị quá mỏng.
* Hiểu tác động của việc kéo giãn mesh và khi nào cần **Voxel Remesh**.
* Tạo sừng dưới dạng một object riêng biệt.
* Đối xứng sừng bằng **Mirror Modifier** với đúng tâm đối xứng.
* Hiểu lý do cần **Apply Scale** trước khi Remesh.

---

## 2. Masking trong Sculpt Mode

### 2.1. Mask là gì?

**Mask** là một lớp bảo vệ được vẽ trực tiếp lên bề mặt mesh.

Vùng đã được mask sẽ ít bị hoặc không bị tác động bởi các Sculpt Brush khác. Nhờ đó, bạn có thể chỉnh sửa một khu vực mà không làm biến dạng những phần lân cận.

Trong Blender:

* Vùng tối: đang được mask, được bảo vệ.
* Vùng sáng: có thể tiếp tục sculpt.

---

### 2.2. Ví dụ chỉnh mí mắt

Khi sử dụng **Grab Brush** để kéo mí mắt trên, mí mắt dưới cũng có thể bị kéo theo vì hai vùng nằm gần nhau.

Để tránh điều này:

1. Chọn **Mask Brush** hoặc nhấn `M`.
2. Tô mask lên mí mắt dưới.
3. Nhấn `G` để chuyển sang **Grab Brush**.
4. Tăng kích thước brush.
5. Kéo mí mắt trên.

Kết quả: mí mắt dưới được bảo vệ và gần như không bị ảnh hưởng.

```text
Không dùng Mask
Grab mí trên
     ↓
Mí trên di chuyển
Mí dưới cũng bị kéo theo

Dùng Mask
Mask mí dưới → Grab mí trên
                    ↓
           Chỉ mí trên di chuyển
```

> Cần tô mask đủ rộng. Những vùng bị bỏ sót vẫn có thể bị Grab Brush tác động.

---

## 3. Các thao tác Mask quan trọng

| Thao tác                  |       Phím tắt | Công dụng                                   |
| ------------------------- | -------------: | ------------------------------------------- |
| Chọn Mask Brush           |            `M` | Vẽ mask lên bề mặt                          |
| Xóa toàn bộ mask          |      `Alt + M` | Loại bỏ mask hiện tại                       |
| Đảo ngược mask            |     `Ctrl + I` | Đổi vùng được bảo vệ và vùng được chỉnh sửa |
| Thay đổi kích thước brush |            `F` | Tăng hoặc giảm bán kính brush               |
| Vẽ mask                   | Giữ chuột trái | Tô vùng cần bảo vệ                          |

### Đảo ngược Mask

Giả sử bạn vẽ mask lên một vùng nhỏ ở trên đầu nhưng muốn **chỉ chỉnh sửa vùng đó**:

1. Vẽ mask lên vùng gốc sừng.
2. Nhấn `Ctrl + I`.
3. Toàn bộ phần còn lại của đầu sẽ được mask.
4. Chỉ vùng gốc sừng còn có thể được sculpt.

```text
Trước khi đảo Mask

[Đầu có thể chỉnh sửa]
       ●
   [Vùng bị Mask]

            Ctrl + I
                ↓

Sau khi đảo Mask

[Toàn bộ đầu bị Mask]
       ○
[Vùng này có thể chỉnh sửa]
```

---

## 4. Cách 1 — Kéo sừng trực tiếp từ mesh đầu

Một cách tạo sừng là kéo trực tiếp một vùng trên đầu.

### Quy trình

1. Dùng **Mask Brush** tô một vùng nhỏ tại vị trí gốc sừng.
2. Nhấn `Ctrl + I` để chỉ cho phép chỉnh sửa vùng đó.
3. Dùng **Grab Brush** hoặc **Snake Hook** kéo vùng mesh ra ngoài.
4. Uốn hướng kéo để tạo độ cong cho sừng.
5. Thực hiện **Voxel Remesh** để phân bố lại topology.

---

### Sử dụng Snake Hook

**Snake Hook** có khả năng kéo dài và uốn mesh mạnh hơn Grab Brush.

Nó phù hợp để tạo:

* Sừng cong.
* Xúc tu.
* Đuôi.
* Ngón tay dạng stylized.
* Các chi tiết dài và mềm.

Khi kéo Snake Hook, mesh có thể được uốn theo đường di chuyển của chuột.

```text
Vùng mesh ban đầu
       ●

Kéo bằng Snake Hook
       ●───────↗

Tiếp tục đổi hướng
       ●─────╮
             ╰──↗
```

---

### Hạn chế của phương pháp kéo trực tiếp

Snake Hook kéo giãn mạnh các polygon hiện có. Điều này khiến:

* Polygon bị kéo dài.
* Mật độ lưới không đều.
* Bề mặt dễ bị méo.
* Phần đầu sừng có thể thiếu độ phân giải.

Sau khi kéo, cần dùng:

```text
Ctrl + R → Voxel Remesh
```

Tuy nhiên, Remesh có thể làm mất một phần chi tiết đã sculpt trên khuôn mặt nếu voxel size chưa đủ nhỏ.

> Vì vậy, việc kéo sừng trực tiếp từ mesh đầu không phải lúc nào cũng là lựa chọn tốt nhất, đặc biệt khi khuôn mặt đã có nhiều chi tiết.

---

## 5. Cách 2 — Tạo sừng bằng một object riêng

Phương pháp được ưu tiên trong bài học là thêm một mesh mới và sculpt sừng độc lập.

Ưu điểm:

* Không kéo giãn mesh của đầu.
* Không làm mất chi tiết khuôn mặt khi Remesh.
* Có thể chỉnh sửa sừng độc lập.
* Dễ thay đổi kích thước, vị trí và góc xoay.
* Có thể áp dụng Mirror Modifier thuận tiện.

---

## 6. Tạo mesh mới cho sừng

### Bước 1 — Chuẩn bị vị trí gốc sừng

Trước tiên, có thể dùng **Grab Brush** tạo một phần nhô nhẹ trên đầu để xác định vị trí sừng sẽ mọc ra.

Không cần kéo thành sừng hoàn chỉnh; chỉ cần tạo vùng chuyển tiếp nhỏ.

---

### Bước 2 — Thêm object mới

1. Chuyển sang **Object Mode**:

```text
Ctrl + Tab → Object Mode
```

2. Đặt 3D Cursor tại vị trí gốc sừng:

```text
Shift + chuột phải
```

3. Thêm một UV Sphere:

```text
Shift + A
→ Mesh
→ UV Sphere
```

4. Thu nhỏ UV Sphere và đặt vào đúng vị trí.

5. Chuyển object mới sang **Sculpt Mode**.

```text
Ctrl + Tab → Sculpt Mode
```

---

## 7. Apply Scale trước khi Remesh

Sau khi thêm UV Sphere, sphere thường được thu nhỏ rất nhiều.

Trong bảng Item, giá trị Scale có thể giống như:

```text
Scale X: 0.1
Scale Y: 0.1
Scale Z: 0.1
```

Nếu Remesh ngay, Blender vẫn tính toán dựa trên scale chưa được áp dụng. Điều này có thể làm mật độ voxel không đúng với kích thước thực tế của object.

### Cách khắc phục

Trong Object Mode:

```text
Ctrl + A → Scale
```

Sau khi Apply Scale:

```text
Scale X: 1
Scale Y: 1
Scale Z: 1
```

Hình dạng và kích thước object không thay đổi, nhưng Blender xem kích thước hiện tại là kích thước gốc.

Sau đó, chuyển lại Sculpt Mode và thực hiện Remesh.

---

## 8. Voxel Size và Remesh

### Voxel Size là gì?

Voxel Size xác định độ phân giải của mesh sau khi Remesh.

| Voxel Size | Kết quả                                  |
| ---------- | ---------------------------------------- |
| Lớn        | Ít polygon, hình thô, mất nhiều chi tiết |
| Nhỏ        | Nhiều polygon, giữ hình dạng tốt hơn     |
| Quá nhỏ    | Mesh nặng, sculpt chậm hơn               |

### Quy trình phù hợp

```text
Thêm UV Sphere
      ↓
Thu nhỏ và đặt vị trí
      ↓
Ctrl + A → Apply Scale
      ↓
Điều chỉnh Voxel Size
      ↓
Ctrl + R → Remesh
```

Nếu sừng vẫn quá thô, giữ `Shift` trong lúc điều chỉnh giá trị Voxel Size để thay đổi chính xác hơn, sau đó Remesh lại.

---

## 9. Sculpt hình dạng sừng

Sau khi mesh đã có đủ mật độ:

### Bước 1 — Kéo dài bằng Snake Hook

* Chọn **Snake Hook**.
* Điều chỉnh kích thước brush bằng `F`.
* Kéo sphere ra thành một đoạn dài.
* Thay đổi hướng kéo để tạo độ cong hoặc độ xoắn.

Nên kéo và chỉnh từng bước thay vì cố tạo toàn bộ hình sừng chỉ bằng một lần kéo.

---

### Bước 2 — Remesh sau khi kéo

Khi sừng đã bị kéo dài và topology trở nên méo:

```text
Ctrl + R
```

Remesh giúp:

* Phân bố polygon đều hơn.
* Giảm tình trạng polygon bị kéo dài.
* Chuẩn bị mesh cho các bước chỉnh sửa tiếp theo.

---

### Bước 3 — Smooth bề mặt

Giữ:

```text
Shift
```

và tô lên bề mặt để làm mượt.

Không nên Smooth quá mạnh vì:

* Đầu sừng dễ bị teo nhỏ.
* Thân sừng có thể mất độ dày.
* Đường cong có thể trở nên quá mềm.

---

## 10. Làm dày bằng Inflate Brush

Khi Smooth nhiều, phần đầu hoặc thân sừng có thể trở nên quá mỏng.

Lúc này, sử dụng **Inflate Brush** để đẩy bề mặt ra ngoài và bổ sung thể tích.

Inflate phù hợp để:

* Làm dày đầu sừng.
* Khôi phục vùng bị teo sau khi Smooth.
* Làm phần gốc sừng chắc chắn hơn.
* Điều chỉnh những đoạn có độ dày không đều.

```text
Sừng bị mỏng
      ↓
Dùng Inflate
      ↓
Bổ sung thể tích
      ↓
Smooth nhẹ
```

Nên kết hợp theo vòng lặp:

```text
Snake Hook
    ↓
Remesh
    ↓
Smooth
    ↓
Inflate
    ↓
Grab chỉnh dáng
    ↓
Remesh lần cuối
```

---

## 11. Chỉnh dáng bằng Grab Brush

Sau khi tạo được chiều dài cơ bản, dùng **Grab Brush** để:

* Uốn sừng lên trên.
* Kéo đầu sừng ra sau.
* Tạo độ cong hình chữ S.
* Làm sừng xoắn hoặc gợn sóng.
* Điều chỉnh silhouette khi nhìn từ nhiều góc.

Nên quan sát sừng từ:

* Front View.
* Side View.
* Góc nhìn 3/4.
* Góc nhìn từ trên xuống.

Một hình dạng đẹp ở mặt trước có thể bị phẳng hoặc lệch khi nhìn từ bên cạnh.

---

## 12. Mirror sừng sang phía đối diện

Sau khi hoàn thành một chiếc sừng, cần tạo chiếc còn lại ở bên đối diện.

### Vì sao không dùng Symmetrize trực tiếp?

Mỗi object có một **Object Origin** riêng.

Object Origin của sừng nằm gần chiếc sừng hiện tại, không nằm giữa đầu nhân vật. Vì vậy, nếu đối xứng dựa trên origin của chính object sừng, bản sao có thể xuất hiện sai vị trí.

```text
Origin của đầu
         │
   Sừng trái     Sừng phải
        \           /
         \         /
          [  Đầu  ]

Origin của sừng
      ●───Sừng

Đối xứng theo origin của sừng
→ Bản sao xuất hiện sai vị trí
```

---

### Dùng Mirror Modifier

Quy trình chính xác:

1. Chọn object sừng.
2. Mở tab **Modifiers**.
3. Chọn:

```text
Add Modifier → Mirror
```

4. Trong trường **Mirror Object**, dùng công cụ Eyedropper.
5. Chọn object đầu nhân vật.

Khi đó, Blender sẽ sử dụng **Object Origin của đầu** làm tâm đối xứng.

```text
Sừng gốc
    ↓
Mirror Modifier
    ↓
Mirror Object = Head
    ↓
Đối xứng qua tâm của đầu
    ↓
Tạo sừng phía còn lại
```

> Đây là cách phù hợp vì đầu nhân vật có Object Origin nằm gần trục giữa của cơ thể.

---

## 13. Thay đổi kích thước sừng sau khi Mirror

Sau khi thêm Mirror Modifier, có thể chuyển sang Object Mode và scale object sừng.

Ví dụ:

```text
S → Kéo chuột
```

Việc scale object gốc sẽ đồng thời ảnh hưởng đến hình ảnh phản chiếu của sừng.

Sau khi đạt kích thước mong muốn:

```text
Ctrl + A → Scale
```

Apply Scale đặc biệt quan trọng nếu bạn quay lại Sculpt Mode và tiếp tục:

* Kéo bằng Snake Hook.
* Smooth.
* Inflate.
* Remesh.

---

## 14. Quy trình hoàn chỉnh

```text
Tạo vùng nhô nhẹ trên đầu
             ↓
Chuyển sang Object Mode
             ↓
Đặt 3D Cursor tại gốc sừng
             ↓
Thêm UV Sphere
             ↓
Scale và đặt đúng vị trí
             ↓
Ctrl + A → Apply Scale
             ↓
Chỉnh Voxel Size
             ↓
Ctrl + R → Remesh
             ↓
Snake Hook kéo thành sừng
             ↓
Grab chỉnh đường cong
             ↓
Ctrl + R → Remesh
             ↓
Smooth bề mặt
             ↓
Inflate vùng quá mỏng
             ↓
Mirror Modifier
             ↓
Mirror Object = Head
             ↓
Kiểm tra từ nhiều góc
             ↓
Lưu file
```

---

## 15. Phím tắt và công cụ quan trọng

| Phím tắt / Công cụ     | Chức năng                      |
| ---------------------- | ------------------------------ |
| `M`                    | Chọn Mask Brush                |
| `Alt + M`              | Xóa toàn bộ mask               |
| `Ctrl + I`             | Đảo ngược mask                 |
| `G`                    | Chuyển nhanh sang Grab Brush   |
| `F`                    | Thay đổi kích thước brush      |
| Giữ `Shift` khi sculpt | Smooth bề mặt                  |
| `Ctrl + R`             | Voxel Remesh trong Sculpt Mode |
| `Ctrl + Tab`           | Mở Pie Menu chuyển chế độ      |
| `Shift + chuột phải`   | Đặt 3D Cursor                  |
| `Shift + A`            | Thêm object mới                |
| `Ctrl + A → Scale`     | Áp dụng tỷ lệ object           |
| **Snake Hook**         | Kéo dài và uốn mesh            |
| **Inflate**            | Làm phồng và bổ sung thể tích  |
| **Grab**               | Chỉnh hình dáng tổng thể       |
| **Mirror Modifier**    | Tạo bản đối xứng của sừng      |

---

## 16. Lỗi thường gặp

### 16.1. Mask không đủ vùng

**Hiện tượng:** Khi Grab mí trên, một phần mí dưới vẫn di chuyển.

**Nguyên nhân:** Một số vùng quanh mí dưới chưa được mask.

**Khắc phục:** Tô mask rộng hơn và kiểm tra các vùng bị bỏ sót.

---

### 16.2. Quên đảo Mask

**Hiện tượng:** Vùng muốn kéo lại không thể chỉnh sửa.

**Nguyên nhân:** Chính vùng đó đang bị mask.

**Khắc phục:**

```text
Ctrl + I
```

để đảo ngược Mask.

---

### 16.3. Snake Hook làm mesh bị kéo giãn

**Hiện tượng:** Polygon dài, bề mặt méo hoặc xuất hiện các đoạn quá mỏng.

**Khắc phục:**

```text
Ctrl + R → Remesh
```

Sau đó Smooth nhẹ và dùng Inflate khi cần.

---

### 16.4. Remesh làm mất chi tiết khuôn mặt

**Nguyên nhân:** Tạo sừng trực tiếp từ mesh đầu và sử dụng Voxel Size quá lớn.

**Khắc phục:**

* Giảm Voxel Size.
* Hoặc tạo sừng bằng object riêng để không ảnh hưởng mesh đầu.

---

### 16.5. Remesh object mới cho kết quả không đúng

**Nguyên nhân:** Object đã được scale mạnh nhưng chưa Apply Scale.

**Khắc phục:**

```text
Object Mode
→ Ctrl + A
→ Scale
```

Sau đó quay lại Sculpt Mode và Remesh.

---

### 16.6. Sừng bị quá nhọn sau khi Smooth

**Nguyên nhân:** Smooth quá nhiều làm mất thể tích.

**Khắc phục:**

* Dùng Inflate bổ sung thể tích.
* Smooth lại với cường độ nhẹ hơn.
* Remesh nếu topology bị biến dạng.

---

### 16.7. Mirror xuất hiện sai vị trí

**Nguyên nhân:** Đối xứng dựa trên Object Origin của sừng thay vì tâm của đầu.

**Khắc phục:**

* Thêm Mirror Modifier.
* Đặt **Mirror Object** thành object đầu nhân vật.

---

## 17. Checklist thực hành

### Masking

* [ ] Đã dùng Mask để bảo vệ vùng không muốn chỉnh sửa.
* [ ] Đã thử chỉnh riêng mí mắt trên.
* [ ] Đã sử dụng `Ctrl + I` để đảo Mask.
* [ ] Đã biết cách xóa Mask bằng `Alt + M`.

### Tạo sừng

* [ ] Đã tạo một object riêng cho sừng.
* [ ] Đã Apply Scale trước khi Remesh.
* [ ] Đã điều chỉnh Voxel Size phù hợp.
* [ ] Đã dùng Snake Hook để kéo và uốn sừng.
* [ ] Đã Remesh sau khi mesh bị kéo giãn.
* [ ] Đã dùng Smooth để làm sạch bề mặt.
* [ ] Đã dùng Inflate để phục hồi vùng bị mỏng.
* [ ] Đã dùng Grab để hoàn thiện silhouette.

### Đối xứng

* [ ] Đã thêm Mirror Modifier.
* [ ] Đã chọn object đầu làm Mirror Object.
* [ ] Hai chiếc sừng nằm đúng vị trí hai bên đầu.
* [ ] Đã kiểm tra hình dạng từ nhiều góc nhìn.
* [ ] Đã lưu file trước khi chuyển sang bài tiếp theo.

---

## 18. Ghi chú thiết kế

Nhân vật không bắt buộc phải có sừng. Chi tiết này chủ yếu được sử dụng để thực hành các Sculpt Brush mới.

Có thể thử nhiều thiết kế khác nhau:

* Sừng ngắn và dày.
* Sừng dài, cong ra sau.
* Sừng uốn hình chữ S.
* Sừng xoắn hoặc gợn sóng.
* Hai sừng không hoàn toàn giống nhau.
* Sừng nhỏ kết hợp tai lớn.
* Chỉ sử dụng một sừng ở giữa trán.

Hãy ưu tiên **silhouette tổng thể** thay vì tập trung quá sớm vào các chi tiết nhỏ.

---

## 19. Tóm tắt bài học

Bài học giới thiệu **Mask Brush** như một công cụ giúp bảo vệ và cô lập vùng mesh trong Sculpt Mode. Mask có thể được sử dụng để chỉnh mí mắt mà không ảnh hưởng đến phần xung quanh hoặc để giới hạn vùng kéo mesh.

Đối với sừng, có thể kéo trực tiếp từ mesh đầu bằng **Grab** hoặc **Snake Hook**, nhưng phương pháp này dễ làm giãn topology và có thể khiến chi tiết khuôn mặt bị mất khi Remesh.

Giải pháp linh hoạt hơn là tạo sừng bằng một **UV Sphere riêng**, Apply Scale, Remesh rồi sử dụng **Snake Hook, Grab, Smooth và Inflate** để hoàn thiện hình dạng. Sau đó, dùng **Mirror Modifier** và chọn object đầu làm **Mirror Object** để tạo chiếc sừng đối xứng chính xác.
