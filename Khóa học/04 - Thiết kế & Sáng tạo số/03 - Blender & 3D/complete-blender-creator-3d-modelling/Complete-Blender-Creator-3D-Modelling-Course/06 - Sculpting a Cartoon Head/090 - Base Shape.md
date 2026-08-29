# 090 — Base Shape: Tạo hình khối cơ bản

| Thuộc tính        | Nội dung                                            |
| ----------------- | --------------------------------------------------- |
| **Module**        | Module 06 — Sculpting a Cartoon Head                |
| **Bài học**       | Base Shape                                          |
| **Thời lượng**    | 13:15                                               |
| **Chủ đề chính**  | Tạo khối đầu, cổ và phần thân trên bằng Sculpt Mode |
| **Mesh khởi đầu** | UV Sphere                                           |
| **Công cụ chính** | Grab, Smooth, Crease, Voxel Remesh                  |

---

## 1. Mục tiêu bài học

Sau bài học này, bạn sẽ có thể:

* Thiết lập một đối tượng để bắt đầu sculpt trong Blender.
* Bật đối xứng theo trục X để tạo hình hai bên đồng đều.
* Sử dụng **Voxel Remesh** để phân bố lại topology.
* Dùng brush **Grab** để tạo các khối lớn:

  * Hộp sọ
  * Cằm
  * Hàm
  * Cổ
  * Vai và phần ngực trên
* Tạo vị trí cơ bản cho:

  * Hốc mắt
  * Mũi
  * Miệng và môi
* Hiểu nguyên tắc quan trọng:

> **Tạo khối lớn trước, thêm chi tiết sau.**

---

## 2. Tổng quan quy trình

```text
UV Sphere
   │
   ▼
Bật X Symmetry
   │
   ▼
Voxel Remesh 0.06
   │
   ▼
Tạo hộp sọ và cằm
   │
   ▼
Tạo cổ, vai và phần thân trên
   │
   ▼
Điều chỉnh đường hàm
   │
   ▼
Tạo hốc mắt và mũi
   │
   ▼
Voxel Remesh 0.03
   │
   ▼
Tạo miệng và môi bằng Crease
   │
   ▼
Lưu file
```

---

# 3. Chuẩn bị đối tượng sculpt

## 3.1. Tạo UV Sphere

Trong file Blender mới:

1. Xóa khối lập phương mặc định.
2. Nhấn:

```text
Shift + A → Mesh → UV Sphere
```

3. Chọn UV Sphere.
4. Chuyển sang workspace **Sculpting**.

UV Sphere sẽ là khối nền để tạo toàn bộ đầu, cổ và phần thân trên của nhân vật.

---

## 3.2. Thiết lập giao diện hỗ trợ quan sát

Các thiết lập sau không bắt buộc nhưng giúp dễ quan sát hơn trong quá trình học.

Trong phần **Viewport Overlays**, có thể bật:

* Trục X và Y.
* Object Origin.
* Statistics.

### Statistics

Khi bật **Statistics**, Blender hiển thị thông tin như:

* Số đỉnh
* Số cạnh
* Số mặt
* Số tam giác

Điều này giúp theo dõi mật độ polygon sau mỗi lần Remesh.

### Object Origin

Object Origin chỉ nhìn thấy rõ trong Object Mode.

Chuyển nhanh giữa các chế độ bằng:

```text
Ctrl + Tab
```

Sau đó chọn:

```text
Object Mode
```

hoặc:

```text
Sculpt Mode
```

---

# 4. Bật đối xứng theo trục X

Trước khi sculpt, cần kiểm tra tùy chọn:

```text
Symmetry → X
```

Khi **X Symmetry** được bật:

* Thao tác ở bên trái sẽ tự động xuất hiện bên phải.
* Hai bên khuôn mặt giữ được sự cân đối.
* Quá trình tạo khối nhanh và dễ kiểm soát hơn.

```text
        Trục X đối xứng
              │
       ┌──────┼──────┐
       │             │
  Bên trái       Bên phải
       │             │
       └── thay đổi ─┘
          đồng thời
```

## Khi nào nên tắt đối xứng?

Khuôn mặt thật không hoàn toàn đối xứng. Tuy nhiên, ở giai đoạn tạo base shape, nên giữ đối xứng trong phần lớn thời gian.

Chỉ nên tắt đối xứng khi:

* Khối lớn đã hoàn chỉnh.
* Bắt đầu thêm nét biểu cảm.
* Muốn tạo sự tự nhiên hoặc bất cân xứng cho nhân vật.

---

# 5. Tăng topology bằng Voxel Remesh

UV Sphere ban đầu chưa có đủ topology để kéo giãn thành đầu, cằm và cổ mà vẫn giữ bề mặt đều.

Vì vậy, cần sử dụng **Voxel Remesh**.

## 5.1. Voxel Size là gì?

Voxel Size xác định kích thước các mặt mới được tạo sau khi Remesh.

* Giá trị lớn → ít polygon hơn.
* Giá trị nhỏ → nhiều polygon và nhiều chi tiết hơn.

```text
Voxel Size lớn
→ Polygon ít
→ Mesh nhẹ
→ Phù hợp tạo khối lớn

Voxel Size nhỏ
→ Polygon nhiều
→ Mesh nặng hơn
→ Phù hợp tạo chi tiết nhỏ
```

## 5.2. Thiết lập ban đầu

Đặt Voxel Size khoảng:

```text
0.06
```

Phím tắt:

```text
Shift + R
```

* Di chuyển chuột để thay đổi kích thước voxel.
* Nhấp chuột trái để xác nhận.

Sau đó thực hiện Remesh:

```text
Ctrl + R
```

Sau lần Remesh đầu tiên, mesh có khoảng vài nghìn mặt, đủ để bắt đầu tạo hình.

> Trong bài học này, `Ctrl + R` được sử dụng trong Sculpt Mode để Voxel Remesh, không phải để tạo Loop Cut như trong Edit Mode.

---

# 6. Tạo khối lớn bằng Grab Brush

Trong phần lớn giai đoạn đầu, brush chính được sử dụng là:

```text
Grab Brush
```

Lý do là Grab có thể kéo cả một vùng lớn của mesh, rất phù hợp để tạo silhouette và tỷ lệ chung.

## Nguyên tắc sculpt

```text
Khối lớn → Khối trung bình → Chi tiết nhỏ
```

Không nên tạo mắt, nếp nhăn hoặc chi tiết da khi hình dạng đầu và cổ vẫn chưa đúng.

---

# 7. Tạo cằm và khuôn mặt dài

## 7.1. Chuyển sang Front View

Nhấn:

```text
Numpad 1
```

Hoặc dùng phím dấu ngã:

```text
~
```

Sau đó chọn **Front**.

## 7.2. Điều chỉnh kích thước brush

Nhấn:

```text
F
```

Di chuyển chuột để thay đổi bán kính brush.

Ở giai đoạn tạo cằm, nên sử dụng brush tương đối lớn để kéo một vùng rộng, tránh tạo bề mặt nhọn hoặc gồ ghề.

---

## 7.3. Kéo cằm xuống

Dùng Grab Brush:

1. Đặt brush vào vùng giữa, gần đáy của hình cầu.
2. Kéo thẳng xuống dưới.
3. Tạo một khuôn mặt dài và cằm kéo thấp.

Không nên kéo từ mép dưới của hình cầu vì dễ khiến cằm bị nghiêng khi nhìn từ Side View.

```text
Sai:
Kéo từ cạnh dưới
→ Cằm dễ bị xiên

Đúng:
Kéo từ vùng giữa
→ Cằm đi thẳng xuống
```

Nhân vật trong bài có phong cách caricature nên khuôn mặt được kéo rất dài và phóng đại.

---

## 7.4. Kiểm tra từ Side View

Nhấn:

```text
Numpad 3
```

Kiểm tra:

* Cằm có bị lệch về phía trước hoặc sau không.
* Mặt có đủ độ nhô ra không.
* Hình dạng đầu có giống một khối oval không.

Sau khi kéo dài mạnh, mesh sẽ xuất hiện các mặt bị giãn.

Thực hiện lại:

```text
Ctrl + R
```

Sau đó giữ:

```text
Shift
```

để làm mượt các vùng bị biến dạng.

---

# 8. Điều chỉnh hộp sọ

Quan sát từ Front View và Top View.

Top View:

```text
Numpad 7
```

Dùng Grab Brush để:

* Ép nhẹ hai bên đầu vào.
* Giữ phần phía sau hộp sọ lớn hơn phía trước.
* Tạo hình oval thay vì hình cầu hoàn toàn.

```text
Nhìn từ trên xuống:

          Phía trước
              ↓
          ________
       .-'        '-.
      /              \
     |                |  ← Phần sau rộng hơn
      \              /
       '------------'
              ↑
          Phía sau
```

Phần sọ phía sau thường có thể tích lớn hơn vùng mặt phía trước. Vì vậy không nên ép toàn bộ đầu thành một khối quá phẳng hoặc quá hẹp.

---

# 9. Tạo cổ

## 9.1. Kéo cổ từ Side View

Ở Side View:

1. Giảm kích thước Grab Brush.
2. Đặt brush vào vùng dưới hộp sọ.
3. Giữ `Ctrl`.
4. Kéo mesh ra ngoài theo hướng normal.
5. Tiếp tục kéo phần vừa tạo xuống dưới để hình thành cổ.

Khi giữ `Ctrl` với Grab Brush, thao tác kéo có xu hướng bám theo hướng pháp tuyến của bề mặt, giúp khối được kéo ra đồng đều hơn.

```text
Normal của bề mặt
        ↗
   ____/__
  /       \
 |  mesh   |
  \_______/
```

## 9.2. Kiểm tra nhiều góc

Sau mỗi vài lần kéo:

* Xoay viewport.
* Kiểm tra Front View.
* Kiểm tra Side View.
* Kiểm tra góc 3/4.

Điều này giúp tránh trường hợp cổ trông đúng từ một phía nhưng bị kéo lệch ở phía còn lại.

---

# 10. Tạo độ rộng cho cổ

Quan sát từ phía trước hoặc phía sau.

Phía sau thường dễ làm việc hơn vì cằm không che khuất cổ.

Dùng Grab Brush để:

* Kéo hai bên cổ rộng ra.
* Tạo một khối cổ hẹp và dài.
* Giữ đúng phong cách nhân vật gầy.

Do quá trình kéo làm topology bị giãn, tiếp tục thực hiện:

```text
Ctrl + R
```

Sau đó làm mượt:

```text
Giữ Shift + kéo chuột
```

---

# 11. Tạo vai và phần thân trên

Để mô hình giống một bức tượng bán thân, cần thêm phần vai và ngực trên.

## 11.1. Tạo ngực

Từ Side View:

* Kéo phần dưới cổ về phía trước.
* Tạo một mặt phẳng hoặc đường cong nhẹ cho vùng ngực.

## 11.2. Tạo lưng

Phần lưng có thể kéo ra gần ngang với phía sau đầu, thậm chí nhô ra thêm một chút.

## 11.3. Tạo vai

Dùng brush lớn hơn để:

* Kéo hai bên ra ngoài.
* Tạo độ dốc tự nhiên từ cổ xuống vai.
* Đặt khối vai hơi lệch về phía sau thay vì nằm hoàn toàn phía trước.

```text
          Đầu
           │
          Cổ
       ___/ \___
      /         \
   Vai trái   Vai phải
```

Nhân vật trong bài có thân hình gầy nên:

* Cổ dài.
* Vai không quá rộng.
* Phần thân trên tương đối mảnh.

---

# 12. Tạo đường hàm

Đường hàm cần nối từ cằm lên vùng giữa đầu.

Quan sát từ Side View:

1. Kéo vùng dưới má vào trong.
2. Giữ phần cằm nhô ra.
3. Tạo một đường chéo từ cằm lên phía tai.
4. Làm mượt vùng tiếp giáp giữa cổ và hàm.

```text
Nhìn nghiêng:

           Trán
             __
          __/  \
         /      \
        |        |
        |       /
        |      /  ← Đường hàm
         \    /
          \__/
           │
           │ Cổ
```

Sau nhiều lần ép và kéo mesh, nên Remesh lại:

```text
Ctrl + R
```

---

# 13. Làm tròn mặt trước

Một lỗi phổ biến của người mới là giữ phần mặt trước quá phẳng.

## Không nên

```text
Nhìn từ trên:

|          |
|   Mặt    |  ← Quá phẳng
|__________|
```

## Nên tạo độ cong

```text
Nhìn từ trên:

    ______
  /        \
 |          |  ← Mặt có độ tròn
  \________/
```

Giữ `Shift` để làm mượt vùng mặt trước, tạo sự chuyển tiếp tự nhiên từ má sang phần trung tâm khuôn mặt.

---

# 14. Tạo hốc mắt

## 14.1. Xác định vị trí mắt

Do UV Sphere chưa được di chuyển khỏi tâm thế giới, đường Object Origin có thể dùng làm mốc.

Trong nhân vật của bài:

* Phần trên của hốc mắt nằm gần đường tâm ngang.
* Mắt được đặt khá cao do nhân vật có phần cằm rất dài.

## 14.2. Tạo hốc mắt

Dùng Grab Brush:

1. Giảm kích thước brush.
2. Từ Side View, đẩy vùng mắt vào trong.
3. Chuyển sang Front View.
4. Tiếp tục kéo vùng hốc mắt vào.
5. Kiểm tra ở góc 3/4.

Vì X Symmetry đang bật nên hai hốc mắt được tạo cùng lúc.

```text
Front View:

       _________
      /         \
     |   ◡   ◡   |  ← Hai hốc mắt
     |           |
     |           |
      \_________/
```

Không cần quá chính xác ở giai đoạn này. Mục tiêu chỉ là xác định:

* Chiều cao mắt.
* Độ sâu hốc mắt.
* Khoảng cách hai mắt.

---

# 15. Tạo mũi

Mũi của nhân vật được thiết kế theo phong cách:

* Dài.
* Cong.
* Hơi móc xuống.
* Giống một nhân vật phản diện lớn tuổi hoặc “thiên tài tội phạm”.

## 15.1. Kéo mũi từ góc 3/4

Không nên kéo mũi hoàn toàn từ Side View vì brush có thể tác động lên vùng quá rộng.

Quy trình:

1. Chuyển sang Side View để xác định vị trí.
2. Xoay nhẹ sang góc 3/4.
3. Kéo sống mũi ra phía trước.
4. Tạo phần đầu mũi cong xuống.
5. Ép vùng sống mũi gần trán vào trong.
6. Kéo hai bên cánh mũi ra nhẹ.

```text
Góc nhìn nghiêng:

       Trán
        /
       /
      /__
         \
          \__
             \  ← Đầu mũi cong
```

---

## 15.2. Remesh sau khi kéo mũi

Khi kéo mũi dài, polygon ở vùng này sẽ bị giãn.

Thực hiện:

```text
Ctrl + R
```

Sau đó:

* Ép cánh mũi sát lại.
* Làm phần đầu mũi gọn hơn.
* Giữ `Shift` để làm mượt.

---

# 16. Chuẩn bị tạo miệng

Vị trí miệng nằm dưới mũi nhưng không ở chính giữa toàn bộ khoảng từ mũi đến cằm.

Do cằm rất dài:

* Khoảng cách từ môi dưới đến cằm lớn.
* Đường miệng được đặt tương đối cao.

Dùng Grab Brush kéo nhẹ vùng môi ra phía trước.

Kiểm tra từ:

* Side View
* Front View
* Góc 3/4

Ở bước này chỉ cần tạo khối môi nhô ra, chưa cần vẽ đường môi.

---

# 17. Tăng độ phân giải cho vùng môi

Để tạo đường môi bằng Crease Brush, cần topology mịn hơn.

Đổi Voxel Size từ:

```text
0.06
```

xuống khoảng:

```text
0.03
```

Thao tác:

```text
Shift + R
```

Chọn kích thước khoảng `0.03`, sau đó:

```text
Ctrl + R
```

## Lưu ý khi chỉnh Voxel Size

Nếu zoom quá gần, các con số hiển thị có thể khó nhìn.

Có thể:

1. Nhấn `Esc`.
2. Zoom ra xa.
3. Nhấn lại `Shift + R`.
4. Chọn giá trị thích hợp.

---

# 18. Tạo môi bằng Crease Brush

Chuyển sang:

```text
Crease Brush
```

Crease Brush tạo một rãnh trên bề mặt và đồng thời gom topology về phía đường vẽ.

## 18.1. Đánh dấu vị trí đường miệng

Dùng brush nhỏ để tạo một dấu nhẹ tại trung tâm miệng.

Sau đó quan sát từ Side View để đảm bảo vị trí không quá cao hoặc quá thấp.

Nếu sai vị trí, có thể dùng Grab Brush để di chuyển vùng miệng.

---

## 18.2. Vẽ đường phân cách hai môi

Đường miệng không hoàn toàn thẳng. Trong bài, nó có dạng chữ M bị ép ngang:

```text
      __    __
_____/  \__/  \_____
```

Hoặc hình dung đơn giản:

```text
Dạng chữ M dẹt
→ Nhô nhẹ ở giữa
→ Hạ xuống hai bên
```

Chiều rộng miệng có thể kéo gần đến đường thẳng đi qua giữa hai mắt.

Tuy nhiên, đây là nhân vật stylized nên có thể chủ động tạo:

* Miệng nhỏ.
* Miệng rộng.
* Miệng lệch.
* Biểu cảm đặc biệt.

---

## 18.3. Tạo độ nổi cho môi

Giữ:

```text
Ctrl
```

khi sử dụng Crease Brush để đảo tác dụng của brush.

Thao tác này:

* Kéo bề mặt ra ngoài.
* Gom topology lại.
* Tạo cảm giác môi nổi lên.

Nên áp dụng chủ yếu ở:

* Phần giữa môi trên.
* Phần giữa môi dưới.
* Hai bên gần khóe miệng.

Không nên tạo một đường viền nổi hoàn toàn quanh toàn bộ môi vì môi thật không có đường bao rõ ở mọi vị trí.

---

## 18.4. Tạo rãnh nhân trung

Có thể dùng Crease Brush nhẹ ở vùng giữa mũi và môi trên để tạo:

```text
Rãnh nhân trung — Philtrum
```

```text
       Mũi
        │
       \│/
        V   ← Rãnh nhân trung
      ─────  ← Môi trên
```

Chỉ cần tạo rất nhẹ vì đây vẫn là giai đoạn base shape.

---

# 19. Phím tắt và công cụ quan trọng

| Phím tắt / Công cụ | Chức năng                                  |
| ------------------ | ------------------------------------------ |
| `Shift + A`        | Mở menu Add                                |
| `Ctrl + Tab`       | Mở menu chuyển chế độ                      |
| `Numpad 1`         | Front View                                 |
| `Numpad 3`         | Side View                                  |
| `Numpad 7`         | Top View                                   |
| `~`                | Mở View Pie Menu                           |
| `F`                | Thay đổi bán kính brush                    |
| Giữ `Shift`        | Tạm thời sử dụng Smooth Brush              |
| Giữ `Ctrl`         | Đảo chiều hoặc thay đổi tác dụng của brush |
| `Shift + R`        | Điều chỉnh Voxel Size                      |
| `Ctrl + R`         | Thực hiện Voxel Remesh trong Sculpt Mode   |
| **Grab Brush**     | Kéo và thay đổi hình dạng vùng lớn         |
| **Crease Brush**   | Tạo rãnh, nếp gấp hoặc đường môi           |
| **X Symmetry**     | Áp dụng thao tác đối xứng qua trục X       |

---

# 20. Khi nào cần Remesh?

Nên Voxel Remesh sau khi thực hiện các thay đổi lớn như:

* Kéo cằm dài.
* Tạo cổ.
* Kéo vai rộng.
* Tạo mũi dài.
* Ép mạnh hộp sọ.
* Xuất hiện polygon bị kéo giãn.

```text
Kéo mesh mạnh
      │
      ▼
Polygon bị giãn
      │
      ▼
Ctrl + R — Remesh
      │
      ▼
Topology phân bố đều
      │
      ▼
Smooth nếu cần
```

## Dấu hiệu cần Remesh

* Bề mặt có các đường polygon dài.
* Brush tạo kết quả không đều.
* Một vùng quá ít mặt để tiếp tục tạo hình.
* Khi Smooth, bề mặt vẫn có các vệt kéo dài.
* Mũi, cằm hoặc cổ bắt đầu bị méo.

---

# 21. Những lỗi thường gặp

## 21.1. Sculpt chi tiết quá sớm

### Lỗi

Tạo môi, mắt hoặc nếp nhăn khi hộp sọ, cằm và cổ vẫn chưa đúng.

### Khắc phục

Hoàn thiện silhouette trước:

```text
Đầu → Cằm → Hàm → Cổ → Vai → Mắt → Mũi → Miệng
```

---

## 21.2. Không bật X Symmetry

### Hậu quả

* Hai bên mặt không đều.
* Mắt hoặc mũi bị lệch.
* Khó sửa ở giai đoạn đầu.

### Khắc phục

Kiểm tra **X Symmetry** trước khi bắt đầu sculpt.

---

## 21.3. Kéo cằm từ cạnh dưới

### Hậu quả

Cằm có thể bị nghiêng hoặc cong không mong muốn.

### Khắc phục

Kéo từ vùng trung tâm phía dưới của khối đầu.

---

## 21.4. Chỉ quan sát một góc

Một hình có thể đẹp ở Front View nhưng sai nghiêm trọng khi nhìn nghiêng.

Luôn kiểm tra:

* Front View
* Side View
* Top View
* Góc 3/4
* Góc phía sau

---

## 21.5. Không Remesh sau khi kéo mạnh

### Hậu quả

* Polygon bị giãn.
* Brush hoạt động không ổn định.
* Bề mặt khó Smooth.
* Không đủ topology để tạo chi tiết.

### Khắc phục

Dùng thường xuyên:

```text
Ctrl + R
```

---

## 21.6. Làm mặt trước quá phẳng

Khuôn mặt cần có độ cong từ trung tâm sang hai bên má.

Sử dụng:

* Grab để điều chỉnh thể tích.
* Smooth để làm mềm sự chuyển tiếp.
* Góc nhìn từ trên xuống để kiểm tra độ cong.

---

## 21.7. Smooth quá nhiều

Smooth giúp làm sạch bề mặt nhưng cũng có thể xóa mất:

* Sống mũi.
* Đường hàm.
* Hốc mắt.
* Khối môi.

Chỉ Smooth với mức vừa đủ, tránh chà đi chà lại quá lâu tại một vị trí.

---

# 22. Checklist thực hành

## Thiết lập

* [ ] Đã xóa Default Cube.
* [ ] Đã thêm UV Sphere.
* [ ] Đã chuyển sang Sculpting Workspace.
* [ ] Đã bật X Symmetry.
* [ ] Đã đặt Voxel Size khoảng `0.06`.
* [ ] Đã thực hiện Voxel Remesh.

## Khối lớn

* [ ] Đã kéo dài cằm.
* [ ] Đã tạo hộp sọ dạng oval.
* [ ] Phần sau hộp sọ lớn hơn phần trước.
* [ ] Đã tạo cổ dài.
* [ ] Đã tạo phần ngực trên và vai.
* [ ] Đã tạo đường hàm nối từ cằm lên đầu.
* [ ] Đã kiểm tra hình từ nhiều góc.

## Khuôn mặt

* [ ] Đã tạo hai hốc mắt.
* [ ] Đã kéo sống mũi ra phía trước.
* [ ] Đã tạo đầu mũi và cánh mũi.
* [ ] Đã xác định vị trí miệng.
* [ ] Đã giảm Voxel Size xuống khoảng `0.03`.
* [ ] Đã tạo đường môi bằng Crease Brush.
* [ ] Đã tạo độ nổi cho môi.
* [ ] Đã thêm nhẹ rãnh nhân trung.

## Hoàn tất

* [ ] Không còn vùng polygon bị kéo giãn nghiêm trọng.
* [ ] Hình khối trông hợp lý ở Front, Side và 3/4 View.
* [ ] Đã lưu file để tiếp tục ở bài sau.

---

# 23. Bài tập thực hành

Tạo ba biến thể từ cùng một UV Sphere:

### Biến thể 1 — Nhân vật gầy

* Cằm dài.
* Cổ dài và nhỏ.
* Mũi móc.
* Vai hẹp.

### Biến thể 2 — Nhân vật khỏe

* Hàm rộng.
* Cổ ngắn và dày.
* Vai lớn.
* Mũi ngắn.

### Biến thể 3 — Nhân vật hài hước

* Đầu lớn.
* Cằm rất nhỏ hoặc rất dài.
* Mắt đặt gần nhau.
* Mũi phóng đại.

Mục tiêu không phải tạo mô hình hoàn hảo mà là luyện khả năng kiểm soát Grab Brush và silhouette.

---

# 24. Tóm tắt bài học

Bài học xây dựng hình khối cơ bản của một đầu nhân vật hoạt hình từ **UV Sphere**.

Quy trình chính gồm:

1. Bật đối xứng theo trục X.
2. Voxel Remesh với kích thước khoảng `0.06`.
3. Dùng Grab Brush tạo đầu, cằm, cổ, vai và phần thân trên.
4. Remesh thường xuyên sau các thay đổi lớn.
5. Tạo hốc mắt và mũi ở mức khối cơ bản.
6. Giảm Voxel Size xuống khoảng `0.03`.
7. Dùng Crease Brush tạo đường miệng, môi và rãnh nhân trung.
8. Kiểm tra mô hình liên tục từ nhiều góc nhìn.

Điểm quan trọng nhất của bài học là:

> **Không cần cố gắng tạo chi tiết đẹp ngay lập tức. Hãy tập trung xây dựng silhouette, tỷ lệ và thể tích lớn của nhân vật trước.**
