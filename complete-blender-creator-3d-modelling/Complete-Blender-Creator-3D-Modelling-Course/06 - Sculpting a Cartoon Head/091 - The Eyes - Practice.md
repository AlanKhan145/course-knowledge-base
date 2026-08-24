# 091 — The Eyes: Tạo mắt, hốc mắt và mí mắt

| Thuộc tính       | Nội dung                                 |
| ---------------- | ---------------------------------------- |
| **Module**       | Module 06 — Sculpting a Cartoon Head     |
| **Bài học**      | The Eyes                                 |
| **Thời lượng**   | 6 phút 40 giây                           |
| **Phần mềm**     | Blender                                  |
| **Chủ đề chính** | Tạo cầu mắt, hốc mắt, chân mày và mí mắt |

---

## 1. Mục tiêu bài học

Sau bài học này, người học có thể:

* Thêm một **UV Sphere** làm cầu mắt tham chiếu.
* Xác định kích thước và vị trí mắt phù hợp với tính cách nhân vật.
* Dùng **Mirror Modifier** để tạo mắt đối xứng.
* Điều chỉnh vùng hốc mắt và chân mày bằng brush **Grab**.
* Đắp mí mắt trên và mí mắt dưới bằng **Clay Strips**.
* Sử dụng **Smooth** để làm mềm bề mặt vùng mắt.
* Kiểm tra hình khối khuôn mặt từ nhiều góc nhìn trước khi tiếp tục.

---

## 2. Vai trò của mắt trong thiết kế nhân vật

Mắt là một trong những bộ phận ảnh hưởng mạnh nhất đến tính cách và cảm xúc của nhân vật.

### Ảnh hưởng của kích thước mắt

| Đặc điểm mắt           | Cảm giác thường tạo ra                  |
| ---------------------- | --------------------------------------- |
| Mắt lớn                | Thân thiện, trẻ trung, dễ thương        |
| Mắt nhỏ                | Nghiêm nghị, bí hiểm, đáng ngờ          |
| Hai mắt gần nhau       | Tạo cảm giác sắc sảo hoặc hơi nham hiểm |
| Hai mắt xa nhau        | Tạo cảm giác ngây thơ, hiền lành        |
| Chân mày thấp, cau lại | Giận dữ, tập trung hoặc nguy hiểm       |
| Mí mắt khép nhẹ        | Nghi ngờ, khó chịu hoặc đang quan sát   |

Trong bài học, nhân vật được định hướng theo phong cách **criminal mastermind** — một nhân vật phản diện có trí tuệ lớn. Vì vậy:

* Kích thước mắt được giữ tương đối gần với mắt người thật.
* Hai mắt được đặt hơi gần nhau.
* Chân mày được kéo xuống tạo biểu cảm cau có.
* Phần hộp sọ phía trên được giữ lớn để tạo cảm giác nhân vật có bộ não lớn.

---

## 3. Quy trình tổng quát

```text
Chuyển sang Object Mode
        ↓
Thêm UV Sphere làm cầu mắt
        ↓
Xoay và thu nhỏ cầu mắt
        ↓
Đặt vị trí theo mặt trước và mặt bên
        ↓
Thêm Mirror Modifier
        ↓
Chọn đầu làm Mirror Object
        ↓
Quay lại Sculpt Mode
        ↓
Điều chỉnh hốc mắt và chân mày
        ↓
Remesh với kích thước nhỏ hơn
        ↓
Đắp mí mắt bằng Clay Strips
        ↓
Smooth và chỉnh bằng Grab
        ↓
Kiểm tra từ nhiều góc nhìn
        ↓
Lưu file
```

---

# 4. Phần 1 — Thêm cầu mắt

## 4.1. Chuyển sang Object Mode

Từ Sculpt Mode, nhấn:

```text
Ctrl + Tab
```

Sau đó chọn:

```text
Object Mode
```

Cầu mắt là một object riêng biệt nên cần được tạo trong Object Mode.

---

## 4.2. Hiển thị 3D Cursor

Mở menu **Viewport Overlays** và bảo đảm tùy chọn hiển thị **3D Cursor** đang được bật.

Sau đó có thể dùng:

```text
Shift + chuột phải
```

để đặt 3D Cursor gần vị trí muốn tạo mắt.

---

## 4.3. Thêm UV Sphere

Sử dụng:

```text
Shift + A
→ Mesh
→ UV Sphere
```

UV Sphere được sử dụng thay vì sculpt trực tiếp cầu mắt trên mesh đầu.

Lợi ích:

* Dễ xác định kích thước mắt.
* Dễ định vị hốc mắt.
* Giúp mí mắt được tạo theo đúng độ cong.
* Có thể giữ lại để làm cầu mắt chính thức khi tạo vật liệu sau này.

---

## 4.4. Xoay cầu mắt về phía trước

Sau khi tạo UV Sphere, xoay nó 90 độ quanh trục X:

```text
R → X → 90 → Enter
```

Việc này giúp phần trước của UV Sphere hướng về phía trước khuôn mặt, thuận lợi hơn khi tạo texture cho mắt sau này.

---

## 4.5. Thu nhỏ cầu mắt

Dùng:

```text
S
```

để thu nhỏ UV Sphere đến kích thước phù hợp.

Kích thước không cần hoàn toàn chính xác về giải phẫu. Nó phụ thuộc vào phong cách nhân vật:

* Nhân vật nữ cách điệu thường có mắt lớn hơn.
* Nhân vật nam có thể có mắt nhỏ hơn.
* Mắt lớn khiến nhân vật thân thiện hơn.
* Mắt nhỏ khiến nhân vật trông đáng ngờ hoặc nham hiểm hơn.

---

# 5. Ước lượng kích thước mắt

Một tỷ lệ tham khảo đối với đầu người tương đối thực tế là:

```text
Chiều rộng phần sọ ≈ 6 lần chiều rộng một cầu mắt
```

Có thể kiểm tra bằng cách:

1. Nhân đôi cầu mắt.
2. Xếp khoảng sáu cầu mắt liên tiếp theo chiều ngang.
3. So sánh tổng chiều rộng với phần sọ.
4. Điều chỉnh kích thước cầu mắt.
5. Xóa các bản sao không cần thiết.

### Phím tắt liên quan

```text
Shift + D
```

Nhân đôi object.

```text
G → X
```

Di chuyển bản sao theo trục X.

```text
Shift + R
```

Lặp lại thao tác vừa thực hiện.

> Cách đo bằng sáu cầu mắt chỉ là phương pháp tham khảo. Với nhân vật cartoon, có thể lựa chọn kích thước tự do dựa trên cảm giác hình ảnh.

---

# 6. Định vị cầu mắt

## 6.1. Kiểm tra từ mặt trước

Chuyển sang Front View và điều chỉnh vị trí cầu mắt.

```text
G → X
```

để di chuyển theo chiều ngang.

Trong bài học, mắt được đưa hơi gần đường giữa khuôn mặt nhằm tạo cảm giác sắc sảo và hơi nham hiểm.

---

## 6.2. Kiểm tra từ mặt bên

Chuyển sang Side View và sử dụng:

```text
G → Y
```

để đẩy cầu mắt vào trong hoặc ra ngoài khuôn mặt.

Cầu mắt không nên:

* Nằm hoàn toàn bên ngoài đầu.
* Lún quá sâu vào hộp sọ.
* Cắt xuyên qua sống mũi.
* Đặt quá xa khỏi hốc mắt dự kiến.

Mục tiêu là để phần trước cầu mắt lộ ra vừa đủ, đồng thời vẫn còn không gian để tạo mí mắt bao quanh.

---

# 7. Tạo mắt đối xứng bằng Mirror Modifier

## 7.1. Thêm Mirror Modifier

Chọn object cầu mắt, sau đó mở:

```text
Modifier Properties
→ Add Modifier
→ Mirror
```

Nếu không đặt Mirror Object, Blender sẽ đối xứng object dựa trên chính **origin của cầu mắt**. Điều này thường không tạo ra kết quả mong muốn.

---

## 7.2. Chọn đầu làm Mirror Object

Trong thiết lập Mirror Modifier:

1. Tìm trường **Mirror Object**.
2. Dùng công cụ Eyedropper.
3. Chọn object đầu nhân vật.

Khi đó, mắt sẽ được phản chiếu qua origin của đầu, tạo thành mắt còn lại ở phía đối diện.

```text
Cầu mắt bên trái
        │
        │ Mirror qua origin của đầu
        ↓
Cầu mắt bên phải
```

Object mắt vẫn chỉ là một object gốc nhưng được hiển thị thành hai mắt nhờ modifier.

---

## 7.3. Đặt tên object

Để tránh nhầm lẫn giữa nhiều object hình cầu, nên đổi tên:

```text
Head
Eyes
```

Mặc dù chỉ có một object cầu mắt, tên `Eyes` vẫn hợp lý vì Mirror Modifier đang tạo cả hai mắt.

---

# 8. Phần 2 — Điều chỉnh hốc mắt và chân mày

## 8.1. Chọn đúng object đầu

Trước khi chuyển sang Sculpt Mode, phải chọn object đầu.

Sau đó sử dụng:

```text
Ctrl + Tab
→ Sculpt Mode
```

Nếu chọn nhầm object mắt, các brush sculpt sẽ tác động lên cầu mắt thay vì khuôn mặt.

---

## 8.2. Kiểm tra vị trí chân mày từ mặt bên

Trong Side View, so sánh:

* Đỉnh của cầu mắt.
* Vùng chân mày.
* Độ nhô của trán.
* Khoảng trống dành cho mí mắt.

Với nhân vật trong bài, chân mày được kéo xuống một chút để:

* Tạo biểu cảm cau có.
* Làm phần hộp sọ phía trên có cảm giác lớn hơn.
* Tăng vẻ thông minh nhưng nguy hiểm của nhân vật.

---

## 8.3. Điều chỉnh bằng Grab Brush

Sử dụng **Grab Brush** để kéo các khối lớn.

Các thao tác chính:

* Kéo phần giữa chân mày xuống nhiều hơn.
* Giữ phần ngoài chân mày cao hơn một chút.
* Đẩy vùng phía dưới chân mày vào trong.
* Kéo đường chân mày nhô ra phía trước.
* Tạo một vùng lõm nhẹ ở giữa hai chân mày.
* Giữ đủ không gian giữa chân mày và cầu mắt để thêm mí mắt.

### Hình dạng chân mày gợi ý

```text
Ngoài mắt          Giữa trán          Ngoài mắt
    \                  /\                  /
     \________________/  \________________/
           thấp và hơi cau xuống
```

Không nên tạo chân mày quá nhô, trừ khi muốn nhân vật mang vẻ thô sơ hoặc giống người Neanderthal.

---

# 9. Phần 3 — Tăng mật độ lưới cho vùng mí mắt

Mí mắt là chi tiết nhỏ hơn so với hình khối tổng thể của đầu. Vì vậy cần một mesh có mật độ cao hơn.

## 9.1. Điều chỉnh Voxel Size

Trong Sculpt Mode, sử dụng:

```text
Shift + R
```

để điều chỉnh kích thước voxel.

Trong bài học, giá trị được giảm xuống khoảng:

```text
0.02
```

Giá trị voxel nhỏ hơn tạo ra nhiều polygon hơn và cho phép sculpt chi tiết chính xác hơn.

---

## 9.2. Thực hiện Voxel Remesh

Sau khi chọn kích thước voxel, sử dụng:

```text
Ctrl + R
```

để remesh.

Kết quả:

* Mesh trở nên dày hơn.
* Có đủ topology để tạo mí mắt.
* Các brush nhỏ hoạt động mượt hơn.
* Hình dạng cũ được phân bố lại thành lưới đồng đều hơn.

> Không nên giảm voxel quá thấp quá sớm vì số lượng polygon có thể tăng mạnh và làm Blender chậm.

---

# 10. Phần 4 — Tạo mí mắt bằng Clay Strips

## 10.1. Đắp mí mắt trên

Chọn brush:

```text
Clay Strips
```

Sau đó dùng phím:

```text
F
```

để giảm kích thước brush.

Đắp một dải clay phía trên cầu mắt, tương ứng với mí mắt trên.

Ban đầu hình dạng có thể khá thô và phồng. Đây là điều bình thường vì bước này chỉ nhằm tạo khối.

---

## 10.2. Đắp mí mắt dưới

Tiếp tục dùng Clay Strips để tạo một dải clay phía dưới cầu mắt.

Ở giai đoạn đầu, khu vực mắt có thể trông giống như bị sưng:

```text
Khối chân mày
      ↓
  ───────────
   Mí mắt trên
      ◯ Cầu mắt
   Mí mắt dưới
  ───────────
```

Không cần cố tạo bề mặt hoàn hảo ngay khi dùng Clay Strips.

---

# 11. Làm mượt mí mắt

Giữ:

```text
Shift
```

trong khi kéo brush để tạm thời kích hoạt Smooth.

Nên:

* Tăng kích thước Smooth Brush một chút.
* Chạm nhẹ nhiều lần.
* Làm mềm các cạnh gồ ghề.
* Giữ lại khối lượng của mí mắt.
* Tránh giữ chuột quá lâu tại một vị trí.

Cách làm tốt:

```text
Nhiều lần chạm nhẹ
        tốt hơn
Một lần smooth quá mạnh
```

Smooth quá mạnh có thể làm mất hoàn toàn độ dày của mí mắt.

---

# 12. Tinh chỉnh mí mắt bằng Grab Brush

Sau khi có khối cơ bản, chuyển lại **Grab Brush** để tạo hình chính xác hơn.

## 12.1. Mí mắt trên

Mí mắt trên nên:

* Ôm theo bề mặt cầu mắt.
* Che nhẹ phần trên của mống mắt.
* Hạ thấp hơn ở phía gần sống mũi.
* Có độ cong rõ ràng hơn mí mắt dưới.

Giả sử:

* Vòng lớn là cầu mắt.
* Vòng giữa là mống mắt.
* Điểm giữa là đồng tử.

Mí trên nên che một phần nhỏ phía trên mống mắt:

```text
       Mí mắt trên
      ───────────
    /             \
   |     Iris      |
   |       ●       |
    \_____________/
       Mí mắt dưới
```

Nếu để lộ toàn bộ mống mắt phía trên, nhân vật có thể trông quá ngạc nhiên hoặc sợ hãi.

---

## 12.2. Khóe mắt trong

Phần gần sống mũi thường được kéo thấp xuống nhẹ.

Điều này góp phần tạo hình dạng mắt giống hạt hạnh nhân:

```text
Khóe trong thấp → mắt cong lên → khóe ngoài
```

---

## 12.3. Mí mắt dưới

Mí mắt dưới nên:

* Nhẹ hơn mí mắt trên.
* Ôm sát phần dưới cầu mắt.
* Nằm gần đáy mống mắt.
* Không che quá nhiều cầu mắt.
* Có thể được đẩy nhẹ ra sau để bám theo độ cong.

---

# 13. Tạo biểu cảm nheo mắt

Trong bài học, nhân vật được tạo một chút biểu cảm **squint** — nheo mắt.

Đặc điểm:

* Mí trên hạ xuống.
* Mí dưới được nâng nhẹ.
* Khoảng mở của mắt nhỏ hơn.
* Chân mày kéo xuống.
* Mắt trông tập trung hoặc nghi ngờ.

```text
Chân mày cau xuống
        ↓
    \________/
     \      /
      \____/
     Mắt nheo nhẹ
```

Biểu cảm này phù hợp với nhân vật phản diện hoặc nhân vật đang quan sát, tính toán.

---

# 14. Kiểm tra hình khối

Sau khi tạo mí mắt, cần xoay model và kiểm tra từ nhiều hướng.

## Mặt trước

Kiểm tra:

* Khoảng cách giữa hai mắt.
* Chiều cao hai mắt.
* Độ đối xứng.
* Biểu cảm tổng thể.
* Hình dạng mí mắt.

## Mặt bên

Kiểm tra:

* Cầu mắt có nằm quá sâu không.
* Chân mày có nhô quá nhiều không.
* Mí mắt có ôm theo cầu mắt không.
* Trán và hốc mắt có chuyển tiếp tự nhiên không.

## Góc ba phần tư

Đây là góc quan trọng để đánh giá:

* Độ sâu của hốc mắt.
* Độ dày mí mắt.
* Độ cong của cầu mắt.
* Mối quan hệ giữa mũi, mắt và chân mày.

---

# 15. Phím tắt và công cụ được sử dụng

| Phím tắt / Công cụ            | Chức năng                      |
| ----------------------------- | ------------------------------ |
| `Ctrl + Tab`                  | Mở menu chuyển đổi mode        |
| `Shift + chuột phải`          | Đặt vị trí 3D Cursor           |
| `Shift + A`                   | Thêm object mới                |
| `R → X → 90`                  | Xoay object 90 độ quanh trục X |
| `S`                           | Thay đổi kích thước            |
| `G → X`                       | Di chuyển theo trục X          |
| `G → Y`                       | Di chuyển theo trục Y          |
| `Shift + D`                   | Nhân đôi object                |
| `Shift + R` trong Object Mode | Lặp lại thao tác trước         |
| **Mirror Modifier**           | Tạo mắt đối xứng               |
| **Grab Brush**                | Kéo và điều chỉnh hình khối    |
| `F`                           | Thay đổi kích thước brush      |
| `Shift + R` trong Sculpt Mode | Điều chỉnh Voxel Size          |
| `Ctrl + R` trong Sculpt Mode  | Thực hiện Voxel Remesh         |
| **Clay Strips**               | Đắp khối mí mắt                |
| Giữ `Shift` khi sculpt        | Kích hoạt Smooth tạm thời      |

---

# 16. Lưu ý quan trọng

## 16.1. Cầu mắt là khối tham chiếu

Không nên sculpt mí mắt mà không có cầu mắt bên trong.

Cầu mắt giúp xác định:

* Độ cong mí mắt.
* Độ sâu hốc mắt.
* Phần cầu mắt cần lộ ra.
* Vị trí mống mắt sau này.

---

## 16.2. Chọn đúng Mirror Object

Nếu hai mắt không nằm đối xứng chính xác, hãy kiểm tra:

* Mirror Object có phải là object đầu không.
* Origin của đầu có nằm đúng giữa không.
* Cầu mắt gốc có nằm đúng một phía không.
* Object mắt có transform bất thường không.

---

## 16.3. Không thêm quá nhiều chi tiết

Ở giai đoạn này chỉ cần hoàn thiện:

* Kích thước mắt.
* Vị trí mắt.
* Hình dạng hốc mắt.
* Độ dày mí mắt.
* Biểu cảm cơ bản.

Chưa cần tạo:

* Nếp nhăn mí mắt.
* Tuyến lệ.
* Lông mi.
* Da chi tiết.
* Nếp gấp nhỏ quanh mắt.

---

## 16.4. Đừng Smooth quá mạnh

Smooth quá nhiều có thể:

* Làm mất mí mắt.
* Làm cầu mắt lộ quá nhiều.
* Xóa biểu cảm nheo mắt.
* Khiến vùng mắt trở nên phẳng.

Nên dùng các lần chạm nhẹ thay vì một nét dài.

---

# 17. Lỗi thường gặp và cách khắc phục

| Lỗi                              | Nguyên nhân                               | Cách khắc phục                     |
| -------------------------------- | ----------------------------------------- | ---------------------------------- |
| Mắt thứ hai xuất hiện sai vị trí | Mirror đang dùng origin của chính cầu mắt | Chọn object đầu làm Mirror Object  |
| Hai mắt quá xa nhau              | Cầu mắt gốc đặt quá xa đường giữa         | Dùng `G → X` đưa mắt vào gần hơn   |
| Mắt bị lồi                       | Cầu mắt đặt quá xa về phía trước          | Kiểm tra Side View và dùng `G → Y` |
| Mắt bị chìm                      | Cầu mắt nằm quá sâu trong đầu             | Đưa cầu mắt ra ngoài một chút      |
| Không có chỗ tạo mí mắt          | Chân mày hoặc hốc mắt quá gần cầu mắt     | Dùng Grab mở rộng vùng quanh mắt   |
| Mí mắt trông như khối u          | Clay Strips quá mạnh và chưa Smooth       | Smooth nhẹ rồi chỉnh lại bằng Grab |
| Mí mắt bị mất hoàn toàn          | Smooth quá nhiều                          | Đắp lại một lớp Clay Strips mỏng   |
| Nhân vật trông quá ngạc nhiên    | Mí trên không che mống mắt                | Kéo mí trên xuống nhẹ              |
| Chân mày giống người nguyên thủy | Gờ chân mày nhô quá mạnh                  | Dùng Grab đẩy vào và Smooth nhẹ    |
| Blender bị chậm                  | Voxel Size quá nhỏ                        | Tăng Voxel Size trước khi remesh   |

---

# 18. Checklist thực hành

## Cầu mắt

* [ ] Đã chuyển sang Object Mode.
* [ ] Đã thêm một UV Sphere.
* [ ] Đã xoay UV Sphere 90 độ quanh trục X.
* [ ] Đã điều chỉnh kích thước mắt phù hợp.
* [ ] Đã kiểm tra mắt từ Front View.
* [ ] Đã kiểm tra mắt từ Side View.
* [ ] Đã đặt tên object mắt.

## Đối xứng

* [ ] Đã thêm Mirror Modifier.
* [ ] Đã chọn object đầu làm Mirror Object.
* [ ] Hai mắt nằm đúng vị trí đối xứng.

## Hốc mắt và chân mày

* [ ] Đã chọn object đầu trước khi vào Sculpt Mode.
* [ ] Đã điều chỉnh hốc mắt bằng Grab Brush.
* [ ] Đã tạo đủ không gian cho mí mắt.
* [ ] Chân mày thể hiện đúng tính cách nhân vật.
* [ ] Gờ chân mày không nhô quá mức.

## Mí mắt

* [ ] Đã giảm Voxel Size xuống mức phù hợp.
* [ ] Đã thực hiện Voxel Remesh.
* [ ] Đã đắp mí mắt trên bằng Clay Strips.
* [ ] Đã đắp mí mắt dưới.
* [ ] Mí trên che nhẹ phần trên của mống mắt.
* [ ] Mí dưới nằm gần đáy mống mắt.
* [ ] Đã Smooth nhẹ vùng mắt.
* [ ] Đã dùng Grab để tạo hình hạt hạnh nhân.

## Hoàn thiện

* [ ] Đã kiểm tra mặt trước.
* [ ] Đã kiểm tra mặt bên.
* [ ] Đã kiểm tra góc ba phần tư.
* [ ] Không thêm quá nhiều chi tiết nhỏ.
* [ ] Đã lưu file Blender.

---

# 19. Bài tập thực hành

Tạo ba phiên bản mắt khác nhau từ cùng một model đầu:

### Phiên bản 1 — Thân thiện

* Mắt lớn hơn.
* Hai mắt mở rộng.
* Chân mày nâng nhẹ.
* Mí trên che ít mống mắt.

### Phiên bản 2 — Phản diện

* Mắt nhỏ hơn.
* Hai mắt gần nhau hơn.
* Chân mày hạ thấp.
* Mắt nheo nhẹ.
* Gờ chân mày rõ hơn.

### Phiên bản 3 — Mệt mỏi

* Mí trên hạ thấp.
* Mí dưới hơi phồng.
* Chân mày ít căng.
* Khóe mắt ngoài hơi thấp.

Mục tiêu của bài tập là quan sát cách một số thay đổi nhỏ quanh mắt có thể làm thay đổi toàn bộ tính cách nhân vật.

---

# 20. Tóm tắt bài học

Bài học hướng dẫn tạo cầu mắt và điêu khắc vùng mắt cho nhân vật hoạt hình. Một **UV Sphere** được dùng làm cầu mắt tham chiếu, sau đó được đặt đúng vị trí và nhân đối xứng bằng **Mirror Modifier**.

Trên mesh đầu, **Grab Brush** được sử dụng để điều chỉnh hốc mắt và chân mày. Sau khi tăng mật độ mesh bằng **Voxel Remesh**, mí mắt trên và dưới được đắp bằng **Clay Strips**, làm mượt bằng **Smooth** và tinh chỉnh bằng **Grab**.

Điểm quan trọng nhất không phải là tạo chi tiết thật sớm, mà là bảo đảm cầu mắt, hốc mắt, mí mắt và chân mày phối hợp với nhau để tạo đúng biểu cảm và tính cách của nhân vật.

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
