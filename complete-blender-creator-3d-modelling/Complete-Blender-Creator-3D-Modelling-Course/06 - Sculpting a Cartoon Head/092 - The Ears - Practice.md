# 092 — The Ears

## Tạo và điêu khắc tai

| Thuộc tính       | Nội dung                                                       |
| ---------------- | -------------------------------------------------------------- |
| **Module**       | Module 06 — Sculpting a Cartoon Head                           |
| **Bài học**      | The Ears                                                       |
| **Thời lượng**   | 7:14                                                           |
| **Chủ đề chính** | Tạo tai bằng object riêng, hợp nhất mesh và điêu khắc chi tiết |

---

## 1. Mục tiêu bài học

Sau bài học này, bạn có thể:

* Xác định vị trí và tỷ lệ cơ bản của tai trên đầu nhân vật.
* Tạo tai bằng một **Cylinder** riêng thay vì kéo trực tiếp từ mesh đầu.
* Định hướng Cylinder theo góc của đầu bằng các phép biến đổi theo trục local.
* Dùng **Join** để ghép tai và đầu thành một object.
* Dùng **Voxel Remesh** để hợp nhất hình học thành một khối kín.
* Sao chép tai sang phía đối diện bằng **Symmetrize**.
* Điêu khắc vành tai, hốc tai và phần sụn phía trước bằng các brush cơ bản.
* Kết hợp **Draw**, **Crease**, **Grab** và **Smooth** để tạo hình tai cách điệu.

---

## 2. Ý tưởng chính của bài học

Có nhiều cách để tạo tai trong Sculpt Mode:

1. Dùng **Mask** để cô lập một vùng rồi kéo trực tiếp từ đầu.
2. Tạo một object riêng, đặt vào vị trí tai rồi hợp nhất với đầu.

Trong bài này, giảng viên sử dụng phương pháp thứ hai:

> Tạo một Cylinder riêng → đặt vào cạnh đầu → Join với đầu → Voxel Remesh → điêu khắc chi tiết.

Đây là kỹ thuật rất hữu ích khi cần bổ sung các bộ phận nhô ra như:

* Tai
* Sừng
* Mũi lớn
* Gai
* Mấu xương
* Các khối phụ trên sinh vật hoặc quái vật

---

## 3. Quy trình tổng quát

```text
Đặt 3D Cursor tại vị trí tai
             │
             ▼
       Thêm Cylinder
             │
             ▼
  Scale + Rotate + Position
             │
             ▼
 Chọn tai → chọn đầu sau cùng
             │
             ▼
          Ctrl + J
             │
             ▼
       Voxel Remesh
             │
             ▼
   Sculpt hình dáng cơ bản
             │
             ▼
 Symmetrize sang phía còn lại
             │
             ▼
 Draw + Crease + Grab + Smooth
             │
             ▼
      Hoàn thiện hai tai
```

---

## 4. Xác định vị trí tai

Chuyển đối tượng đầu sang **Object Mode**, sau đó dùng:

```text
Shift + chuột phải
```

để đặt **3D Cursor** tại vị trí muốn tạo tai.

### Vị trí tham khảo

Khi nhìn từ bên cạnh:

* Tai nằm phía sau đường hàm.
* Đỉnh tai gần ngang với phần trên của mắt hoặc lông mày.
* Đáy tai gần ngang với đáy mũi.
* Phần lớn tai nằm phía sau hàm dưới.

```text
        Đỉnh tai
           ───────── ngang vùng mắt/lông mày
          /       \
         /         \
        |    Tai    |
         \         /
          \_______/
           ───────── ngang đáy mũi
```

Đây chỉ là tỷ lệ tham khảo. Với nhân vật hoạt hình hoặc sinh vật giả tưởng, tai có thể:

* To hơn bình thường.
* Nhỏ hơn bình thường.
* Nhọn như tai yêu tinh.
* Nghiêng ra ngoài nhiều hơn.
* Đặt cao hoặc thấp để tăng tính cách điệu.

---

## 5. Thêm Cylinder làm khối tai

Trong **Object Mode**, nhấn:

```text
Shift + A → Mesh → Cylinder
```

Không cần quá quan tâm đến số cạnh của Cylinder vì mesh sẽ được xây dựng lại bằng **Voxel Remesh**.

### Thu nhỏ độ dày

Thu nhỏ Cylinder theo trục Z:

```text
S → Z
```

Sau đó thu nhỏ toàn bộ Cylinder:

```text
S
```

### Xoay Cylinder

Xoay Cylinder 90° quanh trục Y:

```text
R → Y → 90
```

Cylinder lúc này trở thành một khối dẹt, thích hợp làm hình dạng ban đầu của tai.

---

## 6. Điều chỉnh vị trí và góc tai

Nên kiểm tra tai từ nhiều góc nhìn:

* Side View
* Back View
* Front View
* Góc nhìn ba phần tư

### Back View

Có thể dùng:

```text
Ctrl + Numpad 1
```

để nhìn từ phía sau.

Di chuyển tai ra khỏi đầu một chút và xoay theo trục Z:

```text
G → X
R → Z
```

Tai nên hơi nhô ra khỏi bề mặt đầu.

### Scale theo trục local

Do Cylinder đã được xoay nên trục local của nó không còn trùng với trục global.

Để scale theo trục X cục bộ:

```text
S → X → X
```

Nhấn `X` hai lần giúp Blender chuyển từ **Global X** sang **Local X**.

Điều chỉnh chiều dài tai sao cho:

* Đỉnh tai gần vùng lông mày.
* Đáy tai gần đáy mũi.
* Tai không quá lớn so với đầu.

---

## 7. Tạo khoảng hở ở chân tai

Không nên đặt toàn bộ Cylinder chìm hoàn toàn vào đầu.

Hãy để một phần mép trên hoặc mép ngoài hơi nhô ra, tạo một khoảng chuyển tiếp rõ ràng giữa:

* Tai
* Hộp sọ
* Vùng thái dương

Khoảng hở này giúp hình tai dễ đọc hơn sau khi Remesh.

```text
Nhìn từ phía sau:

        Đầu
     ┌─────────┐
     │         │\
     │         │ \  ← Tai hơi nhô ra
     │         │  )
     │         │ /
     └─────────┘/
```

Một phần Cylinder xuyên vào đầu là bình thường, vì phần giao nhau sẽ được xử lý bằng **Voxel Remesh**.

---

## 8. Góc nghiêng của tai

Khi nhìn từ bên cạnh:

* Tai thường hơi nghiêng về phía sau.
* Phần lớn tai nằm sau đường hàm.
* Tai không nên dựng thẳng hoàn toàn theo phương đứng.
* Tai không nên hướng thẳng ra hai bên như một tấm phẳng.

Có thể điều chỉnh bằng:

```text
R
G
```

và giới hạn theo trục phù hợp.

---

## 9. Join tai với đầu

Sau khi đặt tai đúng vị trí:

1. Chọn Cylinder tai trước.
2. Giữ `Shift` và chọn đầu sau cùng.
3. Nhấn:

```text
Ctrl + J
```

Hai phần lúc này trở thành một object.

### Vì sao phải chọn đầu sau cùng?

Object được chọn sau cùng là **Active Object**.

Nếu chọn đầu sau cùng:

* Object mới giữ thiết lập chính của đầu.
* Origin vẫn nằm tại trung tâm đầu.
* Việc Symmetrize qua trục X dễ thực hiện hơn.

Nếu chọn tai sau cùng, Origin có thể nằm tại vị trí tai, gây khó khăn khi đối xứng.

---

## 10. Join không đồng nghĩa với hợp nhất hình học

Sau `Ctrl + J`, tai và đầu tuy thuộc cùng một object nhưng vẫn chỉ là hai khối hình học chồng lên nhau.

Bên trong đầu vẫn có thể tồn tại:

* Mặt của Cylinder.
* Mặt của đầu.
* Các mặt giao nhau.
* Hình học ẩn bên trong mesh.

```text
Sau Join:

Đầu mesh        Tai mesh
   ┌───────┐   ┌───┐
   │       │━━━│   │
   │       │   └───┘
   └───────┘

Hai khối thuộc cùng một object,
nhưng chưa phải một bề mặt liên tục.
```

Để hợp nhất thật sự, cần dùng **Voxel Remesh**.

---

## 11. Hợp nhất bằng Voxel Remesh

Chuyển sang **Sculpt Mode**:

```text
Ctrl + Tab → Sculpt Mode
```

Nếu tai xuất hiện với màu khác, đó là do Blender đang hiển thị một **Face Set** riêng.

### Xem kích thước voxel

Nhấn:

```text
Shift + R
```

để xem và điều chỉnh kích thước voxel.

Trong video, giá trị được đặt khoảng:

```text
0.02
```

Giá trị phù hợp còn tùy thuộc:

* Kích thước model.
* Mức độ chi tiết mong muốn.
* Hiệu năng máy tính.

### Thực hiện Remesh

Nhấn:

```text
Ctrl + R
```

Voxel Remesh sẽ:

* Xóa các mặt nằm bên trong.
* Hợp nhất Cylinder và đầu.
* Tạo lại topology đều hơn.
* Biến đầu và tai thành một khối kín liên tục.

```text
Trước Remesh              Sau Remesh

 ┌───────┐ ┌───┐           ┌──────────┐
 │ Đầu   │━│Tai│     →      │ Đầu + tai│
 └───────┘ └───┘           └──────────┘
 Hai khối giao nhau         Một khối liên tục
```

---

## 12. Face Sets sau khi Join

Sau khi Join, Blender có thể hiển thị phần tai bằng màu khác. Đây là **Face Set**, dùng để phân vùng bề mặt trong Sculpt Mode.

Face Sets hữu ích trong các quy trình nâng cao, nhưng chưa cần thiết trong bài này.

Nếu màu Face Set gây khó quan sát:

1. Mở thiết lập **Remesh**.
2. Tắt tùy chọn bảo toàn Face Sets.
3. Thực hiện Remesh lại bằng:

```text
Ctrl + R
```

Sau đó phần đầu và tai sẽ hiển thị đồng nhất.

---

## 13. Điêu khắc hình dáng tai cơ bản

Sau khi Remesh, tai có thể còn:

* Quá dày.
* Cạnh quá cứng.
* Hình trụ rõ rệt.
* Chân tai chưa hòa vào đầu.

### Làm tai mỏng hơn

Dùng brush thích hợp, chẳng hạn:

* Grab
* Inflate/Deflate
* Draw với hướng âm
* Sculpt trực tiếp từ hai mặt tai

Đẩy hoặc ép bề mặt vào trong để tai mỏng hơn.

### Làm mềm cạnh

Giữ:

```text
Shift
```

khi đang sử dụng brush để kích hoạt **Smooth** tạm thời.

Smooth các vùng:

* Viền ngoài quá sắc.
* Chân tai nối với đầu.
* Mặt trước và mặt sau tai.
* Những vùng bị gồ sau Remesh.

### Remesh định kỳ

Sau khi kéo hoặc ép mesh nhiều lần, topology có thể bị kéo giãn.

Nhấn:

```text
Ctrl + R
```

để phân bố lại topology.

Quy trình lặp:

```text
Sculpt hình dáng
      ↓
Smooth bề mặt
      ↓
Voxel Remesh
      ↓
Tiếp tục Sculpt
```

---

## 14. Tạo tai nhọn cách điệu

Nhân vật trong bài có phong cách phản diện hoặc sinh vật bí ẩn, vì vậy tai có thể được làm hơi nhọn.

Dùng **Grab Brush** kéo nhẹ phần đỉnh tai:

```text
Đỉnh tròn             Đỉnh nhọn

   ____                   /\
  /    \                 /  \
 |      |       →       |    |
  \____/                 \__/
```

Không nên kéo quá mạnh trong một lần. Nên thực hiện:

1. Kéo nhẹ.
2. Smooth.
3. Remesh nếu cần.
4. Kéo tiếp để kiểm soát hình dạng.

---

## 15. Sao chép tai sang phía đối diện

Sau khi hoàn thành hình dáng cơ bản của một bên tai, dùng **Symmetrize** để sao chép sang bên còn lại.

Mở:

```text
Sculpt → Symmetrize
```

hoặc mở menu Symmetry trong Sculpt Mode.

### Chọn đúng hướng đối xứng

Nếu tai hiện tại nằm ở phía **Positive X** và muốn sao chép sang phía **Negative X**, chọn:

```text
Direction: +X to -X
```

Sau đó nhấn:

```text
Symmetrize
```

```text
       Trục X = 0
           │
 Tai gốc   │   Tai được tạo
   +X      │       -X
    )      │      (
           │
```

Cần kiểm tra đúng chiều trước khi thực hiện, nếu không Blender có thể lấy phía không có tai ghi đè lên phía đã có tai.

---

## 16. Điêu khắc chi tiết bên trong tai

Sau khi hai tai đã đối xứng, tiếp tục tạo chi tiết trên một bên khi **X Symmetry** đang bật, hoặc chỉnh cả hai đồng thời.

Với tai cách điệu, không cần tái tạo toàn bộ giải phẫu tai người. Chỉ cần một số hình khối chính để người xem nhận biết đây là tai.

### Cấu trúc đơn giản

```text
        Vành tai ngoài
       ______________
      /              \
     /   ┌────────┐   \
    |    │ Hốc tai│    |
    |    │        │◄── Tragus
     \   └────────┘   /
      \______________/
```

Các phần chính:

* **Helix:** vành ngoài của tai.
* **Concha:** vùng lõm lớn dẫn vào ống tai.
* **Ear canal:** lỗ hoặc hốc tai.
* **Tragus:** phần sụn nhỏ phía trước hốc tai.
* **Earlobe:** dái tai, có thể được giản lược ở nhân vật hoạt hình.

---

## 17. Tạo vành tai bằng Draw Brush

Chọn **Draw Brush** và giảm kích thước brush.

Vẽ một đường nổi chạy quanh mép tai:

1. Bắt đầu từ phần trên.
2. Đi dọc theo viền ngoài.
3. Uốn xuống phần đáy tai.
4. Giữ lực nhấn vừa phải.

Đường này tạo cảm giác có **vành tai** thay vì một miếng mesh phẳng.

```text
     Đường Draw
      ↓↓↓↓↓
    /-------\
   /         \
  |           |
   \         /
    \_______/
```

---

## 18. Tạo hốc tai

Vẫn dùng Draw Brush nhưng giữ:

```text
Ctrl
```

để đảo hướng tác động, chuyển từ đắp nổi sang khoét lõm.

Khoét một vùng ở giữa tai để tạo:

* Hốc tai.
* Cảm giác chiều sâu.
* Vùng dẫn vào ống tai.

Không nên tạo lỗ quá sâu ngay từ đầu. Hãy khoét từng bước nhỏ rồi Smooth nhẹ.

---

## 19. Tạo phần Tragus

**Tragus** là phần sụn nhỏ nằm phía trước ống tai, có tác dụng che và bảo vệ một phần hốc tai.

Trong nhân vật cách điệu, có thể tạo tragus bằng một khối nổi nhỏ ở phía trước hốc tai.

```text
Nhìn từ bên:

       Vành tai
      /        \
     |   Hốc    |
     |    ◄█    | ← Tragus
      \        /
       \______/
```

Dùng Draw Brush hoặc Clay Brush để đắp nhẹ phần này, sau đó Smooth vừa đủ để nó hòa vào tai.

---

## 20. Tạo đường nếp bằng Crease Brush

Chọn **Crease Brush** để tạo một đường lõm rõ hơn bên trong tai.

Đường nếp có thể mang hình gần giống dấu hỏi:

```text
     __
    /  \
      /
     /
```

Cách thực hiện:

1. Bắt đầu từ phần trên bên trong tai.
2. Đi vòng theo đường cong.
3. Kéo xuống phía dưới.
4. Smooth nhẹ nếu đường quá sắc.

Crease Brush giúp phân tách:

* Vành tai ngoài.
* Khối sụn bên trong.
* Hốc tai.

Không nên dùng Crease quá mạnh vì tai có thể trông như bị cắt bằng dao.

---

## 21. Tinh chỉnh bằng Grab Brush

Dùng **Grab Brush** để:

* Kéo phần đỉnh tai ra ngoài.
* Điều chỉnh dáng tai.
* Làm viền tai cân đối hơn.
* Sửa hình silhouette khi nhìn từ phía trước hoặc phía sau.
* Làm tai nhọn hơn nếu muốn.

Sau các thay đổi lớn:

```text
Ctrl + R
```

để Remesh, rồi Smooth nhẹ.

---

## 22. Quy trình chi tiết hóa tai

```text
Tạo silhouette tai
        │
        ▼
Draw tạo vành ngoài
        │
        ▼
Ctrl + Draw khoét hốc tai
        │
        ▼
Draw tạo khối tragus
        │
        ▼
Crease tạo nếp cong bên trong
        │
        ▼
Grab chỉnh hình tổng thể
        │
        ▼
Smooth các vùng quá gắt
        │
        ▼
Remesh nếu topology bị kéo giãn
```

---

## 23. Phím tắt và công cụ quan trọng

| Phím tắt / Công cụ     | Chức năng                                       |
| ---------------------- | ----------------------------------------------- |
| `Shift + chuột phải`   | Đặt 3D Cursor                                   |
| `Shift + A`            | Thêm object mới                                 |
| `R → Y → 90`           | Xoay Cylinder 90° quanh trục Y                  |
| `S → X → X`            | Scale theo trục X cục bộ                        |
| `Ctrl + Numpad 1`      | Back View                                       |
| `Ctrl + J`             | Join các object                                 |
| `Ctrl + Tab`           | Mở Pie Menu chuyển mode                         |
| `Shift + R`            | Xem hoặc điều chỉnh Voxel Size                  |
| `Ctrl + R`             | Voxel Remesh trong Sculpt Mode                  |
| Giữ `Shift` khi sculpt | Kích hoạt Smooth tạm thời                       |
| Giữ `Ctrl` với Draw    | Đảo hướng brush, tạo vùng lõm                   |
| **Draw Brush**         | Đắp nổi hoặc khoét hốc                          |
| **Crease Brush**       | Tạo nếp lõm sắc                                 |
| **Grab Brush**         | Kéo và chỉnh hình khối lớn                      |
| **Symmetrize**         | Sao chép hình học từ một phía sang phía còn lại |

---

## 24. Lưu ý về Remesh

### Voxel Size quá lớn

Nếu voxel quá lớn:

* Tai mất chi tiết.
* Đường Crease biến mất.
* Hốc tai bị lấp.
* Hình dạng trở nên thô và nhiều khối.

### Voxel Size quá nhỏ

Nếu voxel quá nhỏ:

* Số polygon tăng mạnh.
* Sculpt có thể chậm.
* Remesh mất nhiều tài nguyên.
* Máy yếu có thể bị giật hoặc treo.

Nên chọn độ phân giải vừa đủ để giữ được hình dáng tai mà chưa cần các chi tiết cực nhỏ.

---

## 25. Lỗi thường gặp

### 25.1. Chỉ Join nhưng không Remesh

**Hiện tượng:**

* Tai và đầu vẫn có mặt nằm bên trong.
* Smooth vùng nối hoạt động không tự nhiên.
* Bề mặt có thể bị lỗi khi tiếp tục sculpt.

**Khắc phục:**

```text
Ctrl + R
```

để Voxel Remesh sau khi Join.

---

### 25.2. Chọn tai sau cùng khi Join

**Hiện tượng:**

* Origin của object nằm ở vị trí tai.
* Symmetrize có thể không hoạt động như mong muốn.
* Việc đối xứng qua trung tâm đầu trở nên khó khăn.

**Khắc phục:**

Chọn tai trước, chọn đầu sau cùng rồi nhấn:

```text
Ctrl + J
```

---

### 25.3. Tai nằm quá xa phía trước

**Hiện tượng:**

* Tai nằm ngang má.
* Silhouette đầu mất tự nhiên.
* Nhân vật trông giống có cánh ở hai bên mặt.

**Khắc phục:**

Kiểm tra Side View và đặt phần lớn tai phía sau đường hàm.

---

### 25.4. Tai quá dày

**Hiện tượng:**

* Tai giống một khối trụ.
* Không có cảm giác là tấm sụn mỏng.
* Hốc tai khó thể hiện.

**Khắc phục:**

* Ép hai mặt tai lại gần nhau.
* Smooth viền.
* Remesh sau khi thay đổi hình lớn.

---

### 25.5. Không để tai nhô khỏi đầu

**Hiện tượng:**

* Vành tai bị chìm.
* Tai không có silhouette rõ.
* Sau Remesh, tai có thể hòa hoàn toàn vào hộp sọ.

**Khắc phục:**

Để mép ngoài tai nhô ra một khoảng trước khi Remesh.

---

### 25.6. Symmetrize sai chiều

**Hiện tượng:**

* Tai đã tạo bị xóa.
* Phía trống được sao chép đè lên phía có tai.

**Khắc phục:**

Kiểm tra vị trí tai hiện tại:

* Tai ở `+X` → chọn `+X to -X`.
* Tai ở `-X` → chọn `-X to +X`.

---

### 25.7. Crease quá sâu

**Hiện tượng:**

* Tai có các đường cắt cứng.
* Chi tiết trông không tự nhiên.
* Bề mặt bị véo hoặc rách.

**Khắc phục:**

* Giảm Strength.
* Tăng kích thước brush nhẹ.
* Smooth đường Crease.
* Remesh nếu topology bị kéo căng.

---

## 26. Checklist thực hành

### Khối tai cơ bản

* [ ] Đã đặt 3D Cursor đúng vị trí tai.
* [ ] Đã thêm một Cylinder riêng.
* [ ] Đã xoay Cylinder 90° quanh trục Y.
* [ ] Đã scale tai theo trục local.
* [ ] Đỉnh tai gần vùng mắt hoặc lông mày.
* [ ] Đáy tai gần đáy mũi.
* [ ] Phần lớn tai nằm phía sau đường hàm.
* [ ] Tai hơi nghiêng về phía sau.
* [ ] Mép tai có một phần nhô khỏi đầu.

### Hợp nhất mesh

* [ ] Đã chọn tai trước và đầu sau cùng.
* [ ] Đã Join bằng `Ctrl + J`.
* [ ] Đã kiểm tra Voxel Size.
* [ ] Đã thực hiện Voxel Remesh.
* [ ] Tai và đầu đã trở thành một khối liên tục.
* [ ] Đã Smooth vùng chân tai.

### Đối xứng

* [ ] Origin của đầu nằm ở trung tâm.
* [ ] Đã chọn đúng hướng Symmetrize.
* [ ] Hai tai xuất hiện ở hai phía.
* [ ] Hai tai có vị trí và kích thước đối xứng.

### Chi tiết tai

* [ ] Đã tạo vành tai bằng Draw Brush.
* [ ] Đã khoét hốc tai bằng `Ctrl + Draw`.
* [ ] Đã tạo khối tragus phía trước hốc tai.
* [ ] Đã tạo nếp cong bằng Crease Brush.
* [ ] Đã chỉnh silhouette bằng Grab Brush.
* [ ] Đã Smooth những vùng quá gắt.
* [ ] Đã Remesh sau các thay đổi lớn.
* [ ] Đã lưu file trước khi kết thúc.

---

## 27. Bài tập mở rộng

Sau khi hoàn thành tai theo hướng dẫn, hãy thử tạo một trong các biến thể sau:

### Tai người cách điệu

* Dáng oval.
* Vành tai mềm.
* Dái tai tròn.
* Chi tiết bên trong tối giản.

### Tai yêu tinh

* Phần đỉnh kéo dài và nhọn.
* Tai hướng chếch về phía sau.
* Vành tai rõ hơn.
* Dái tai nhỏ hoặc không có.

### Tai sinh vật ngoài hành tinh

* Tai rất lớn hoặc rất nhỏ.
* Hình dạng bất đối xứng.
* Có nhiều nếp sụn.
* Gắn thêm gai hoặc mấu phụ.

### Tai nhân vật phản diện

* Tai hơi nhọn.
* Vành tai sắc hơn.
* Hốc tai sâu.
* Silhouette góc cạnh để tăng cảm giác nguy hiểm.

---

## 28. Tóm tắt bài học

Trong bài này, tai không được kéo trực tiếp từ mesh đầu. Thay vào đó, một **Cylinder** được tạo riêng, thu nhỏ, xoay và đặt vào bên cạnh đầu.

Sau khi xác định đúng vị trí:

1. Chọn Cylinder tai.
2. Chọn đầu sau cùng.
3. Dùng `Ctrl + J` để Join.
4. Dùng **Voxel Remesh** để hợp nhất hình học.
5. Sculpt hình dáng tai cơ bản.
6. Dùng **Symmetrize** để tạo tai phía đối diện.
7. Dùng Draw, Crease, Grab và Smooth để tạo chi tiết.

Điểm quan trọng nhất cần ghi nhớ:

> **Join chỉ đưa nhiều mesh vào cùng một object; Voxel Remesh mới thực sự hợp nhất chúng thành một bề mặt liên tục.**

---

## 29. Ghi nhớ nhanh

```text
Cylinder
   ↓
Đặt đúng vị trí
   ↓
Chọn tai → chọn đầu
   ↓
Ctrl + J
   ↓
Shift + R kiểm tra Voxel Size
   ↓
Ctrl + R Remesh
   ↓
Sculpt + Smooth
   ↓
Symmetrize
   ↓
Draw + Crease + Grab
   ↓
Lưu file
```

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
