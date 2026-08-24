# 081 — Chuẩn bị Mesh cho Rigging

## Rig Ready Meshes

| Thuộc tính              | Nội dung                                           |
| ----------------------- | -------------------------------------------------- |
| **Module**              | Module 05 — Rigging & Animation                    |
| **Bài học**             | Rig Ready Meshes                                   |
| **Thời lượng**          | 5:53                                               |
| **Chủ đề chính**        | Chuẩn bị topology và tư thế nhân vật trước khi rig |
| **Đối tượng thực hành** | Nhân vật Blob Man                                  |
| **Bài tiếp theo**       | Thiết lập Armature và bộ xương                     |

---

## 1. Mục tiêu bài học

Sau bài học này, anh sẽ:

* Hiểu mối quan hệ giữa **topology** và khả năng biến dạng của mesh.
* Biết vì sao các khớp cần nhiều vòng cạnh hơn những vùng ít chuyển động.
* Bổ sung loop cut tại:

  * Khuỷu tay
  * Cổ tay
  * Vai
  * Hông
  * Đầu gối
  * Mắt cá chân
* Chuyển nhân vật từ **T-pose** sang **A-pose**.
* Điều chỉnh vùng vai, nách và ngực để hạn chế hiện tượng co rúm khi animate.
* Tạo một độ cong nhẹ cho cánh tay trước khi gắn Armature.
* Chuẩn bị mesh hoàn chỉnh cho bước dựng bộ xương.

---

## 2. Topology ảnh hưởng đến biến dạng như thế nào?

Topology không chỉ là số lượng:

* Vertex
* Edge
* Face

Vị trí và cách phân bố của chúng cũng ảnh hưởng trực tiếp đến cách mesh uốn cong.

Giả sử có hai mesh giống nhau:

* Mesh thứ nhất chỉ có **một vòng cạnh** tại vị trí khớp.
* Mesh thứ hai có **ba vòng cạnh** tại vị trí khớp.

Khi bone xoay, mesh có ba vòng cạnh sẽ cong tự nhiên và giữ được thể tích tốt hơn.

### Minh họa đơn giản

```text
Khớp chỉ có một vòng cạnh

───────│───────
        ↑
      vị trí uốn

Khi uốn:
───────┐
       └───────

Kết quả:
- Góc gấp cứng
- Mesh dễ bị bóp méo
- Khớp mất thể tích
```

```text
Khớp có ba vòng cạnh

─────│─│─│─────
       ↑
   vùng chuyển tiếp

Khi uốn:
─────╮
     ╰───────

Kết quả:
- Đường cong mềm hơn
- Biến dạng được phân bố trên nhiều vertex
- Khớp giữ hình dạng tốt hơn
```

### Nguyên tắc quan trọng

> Những vùng cần uốn cong nên có đủ geometry để phân bổ biến dạng.

Các vùng cần chú ý nhất trên nhân vật gồm:

```text
            Cổ
             │
      Vai ───┼─── Vai
             │
          Khuỷu tay
             │
           Cổ tay

             Hông
              │
           Đầu gối
              │
         Mắt cá chân
```

---

## 3. Subdivision Surface không thể sửa topology kém

Trong bài giảng, hai mesh được thêm **Subdivision Surface Modifier** để so sánh.

Mặc dù modifier tạo thêm nhiều polygon và làm bề mặt mượt hơn, mesh có topology gốc tốt vẫn biến dạng đẹp hơn.

```text
Topology gốc
     ↓
Armature Deform
     ↓
Subdivision Surface
     ↓
Kết quả cuối cùng
```

Nếu topology gốc không phù hợp:

```text
Topology kém
     ↓
Khớp bị bóp hoặc gãy
     ↓
Subdivision chỉ làm bề mặt mượt hơn
     ↓
Lỗi biến dạng vẫn còn
```

### Kết luận

> Subdivision Surface không thay thế cho việc xây dựng topology đúng tại các khớp.

Modifier có thể làm bề mặt mượt hơn nhưng không tự động tạo ra edge flow phù hợp cho chuyển động.

---

## 4. Hiển thị wireframe trong Object Mode

Để quan sát các cạnh của mesh ngay cả khi đang ở Object Mode:

1. Chọn object.
2. Mở **Object Properties**.
3. Tìm phần **Viewport Display**.
4. Đặt kiểu hiển thị thành **Wireframe**, hoặc bật cách hiển thị cạnh phù hợp.

Cách này giúp theo dõi topology trong khi xem thử mesh biến dạng bằng Armature.

---

## 5. Chuẩn bị khuỷu tay

Khuỷu tay là vùng uốn cong mạnh nên cần thêm topology.

### Thực hiện

1. Chọn nhân vật.
2. Vào **Edit Mode**.
3. Bật **X-Ray** để chọn xuyên qua mesh.
4. Chọn edge loop tại khuỷu tay.
5. Nhấn:

```text
Ctrl + B
```

6. Dùng con lăn chuột để tạo thêm segment.

Mục tiêu là tạo khoảng ba vòng cạnh quanh khuỷu tay.

```text
Trước:

──────│──────

Sau:

────│─│─│────
```

Ba vòng cạnh có thể được hiểu như:

* Vòng giữa nằm gần tâm khớp.
* Hai vòng ngoài tạo vùng chuyển tiếp.
* Các vertex có thêm không gian để phân bổ trọng số.

> Không phải mọi khớp đều bắt buộc có đúng ba loop cut. Tuy nhiên, ba vòng cạnh là giải pháp đơn giản, dễ hiểu và phù hợp cho người mới.

---

## 6. Chuẩn bị cổ tay

Cổ tay cũng cần thêm geometry để có thể xoay và gập tự nhiên.

### Thực hiện

1. Chọn edge loop tại cổ tay.
2. Nhấn `Ctrl + B`.
3. Tăng số segment để tạo ba vòng cạnh.

```text
Cẳng tay ──│─│─│── Bàn tay
                ↑
              Cổ tay
```

Vì cổ tay nhỏ hơn khuỷu tay nên khoảng cách giữa các loop cut không nên quá lớn.

---

## 7. Chuẩn bị vai

Vùng vai đã có các vòng cạnh nằm ở hai bên, vì vậy không nhất thiết phải bevel một loop thành ba vòng.

Có thể chỉ cần thêm một loop cut ở giữa.

### Thực hiện

1. Di chuyển con trỏ đến vùng vai.
2. Nhấn:

```text
Ctrl + R
```

3. Nhấp chuột để xác nhận loop cut.
4. Nhấp chuột phải hoặc nhấp đúp theo thao tác phù hợp để đặt loop ở chính giữa.

```text
Trước:

Ngực ─────── Cánh tay

Sau:

Ngực ──│──── Cánh tay
        ↑
   loop mới tại vai
```

Loop cut bổ sung giúp vai có thêm geometry khi cánh tay nâng lên hoặc hạ xuống.

---

## 8. Kiểm tra vùng cổ và eo

Trong mô hình hiện tại:

* Vùng cổ đã có lượng topology tương đối phù hợp.
* Vùng eo cũng đã có đủ geometry cho chuyển động cơ bản.

Vì vậy, không nhất thiết phải thêm loop cut tại mọi vị trí.

### Nguyên tắc

> Chỉ thêm geometry khi nó phục vụ hình dáng hoặc chuyển động.

Thêm quá nhiều loop cut có thể:

* Làm mesh khó chỉnh sửa.
* Khiến Weight Paint phức tạp hơn.
* Tăng số polygon không cần thiết.
* Làm edge flow trở nên lộn xộn.

---

## 9. Chuẩn bị vùng hông

Hông là nơi chân kết nối với thân và thường xuất hiện hiện tượng co rúm khi chân chuyển động.

### Thực hiện

1. Nhấn `Ctrl + R`.
2. Thêm một loop cut gần vùng hông.
3. Di chuyển loop lên vị trí phù hợp.
4. Điều chỉnh các vòng cạnh lân cận để tạo khoảng cách cân đối.

Có thể bố trí theo dạng:

```text
      Thân trên
────────│────────
        │
──── vòng hông ────
        │
──── vòng dưới ────
        │
       Chân
```

Trong bài giảng, giảng viên cho rằng hai vòng hỗ trợ có thể đủ vì vùng hông vẫn thường xuất hiện một mức độ pinching nhất định.

### Điều chỉnh hình dáng hông

Có thể thay đổi chiều rộng hông tùy theo thiết kế nhân vật:

* Hông hẹp hơn thường tạo dáng nam tính hơn.
* Hông rộng hơn thường tạo dáng nữ tính hơn.

Đối với người mới, hình thể nam đơn giản thường dễ rig và kiểm soát hơn, vì vậy phần hông được thu vào nhẹ.

---

## 10. Chuẩn bị đầu gối

Đầu gối là một trong những khớp uốn quan trọng nhất của chân.

### Thực hiện

1. Chọn edge loop tại đầu gối.
2. Nhấn `Ctrl + B`.
3. Tạo thêm segment để có khoảng ba vòng cạnh.

```text
Đùi ─────│─│─│───── Cẳng chân
              ↑
           Đầu gối
```

Ba vòng cạnh giúp:

* Phần trước đầu gối có đủ geometry khi gập.
* Phần sau đầu gối không bị co thành một điểm duy nhất.
* Chuyển động được phân bố mềm hơn.

---

## 11. Chuẩn bị mắt cá chân

Mắt cá chân trong mô hình đã có sẵn hai vòng cạnh liên quan.

Vì vậy, chỉ cần thêm một vòng nữa bằng `Ctrl + R` để tạo tổng cộng khoảng ba vòng cạnh.

```text
Cẳng chân ──│─│─│── Bàn chân
                 ↑
             Mắt cá chân
```

Cần quan sát topology hiện có trước khi thêm loop cut, tránh tạo geometry quá dày ở một vùng nhỏ.

---

## 12. Ngón tay và ngón chân

Nhân vật trong bài được thiết kế đơn giản:

* Không có ngón tay riêng biệt.
* Không có ngón cái.
* Không có các ngón chân được tạo hình rõ ràng.
* Có một loop ở vùng bàn chân nhưng ngón chân sẽ không được animate.

Điều này phù hợp với mục tiêu của khóa học dành cho người mới.

Trong một nhân vật chi tiết hơn, cần bổ sung topology quanh:

* Khớp ngón tay.
* Gốc ngón cái.
* Các đốt ngón.
* Khớp ngón chân.
* Vùng bàn tay và bàn chân.

```text
Mỗi khớp ngón:

──│─│─│──

Một vòng ở tâm khớp
Hai vòng hỗ trợ hai bên
```

---

## 13. T-pose và A-pose

### T-pose

T-pose là tư thế nhân vật đứng với hai cánh tay mở ngang, tạo hình giống chữ **T**.

```text
   ─────┼─────
        │
        │
       / \
```

T-pose được sử dụng phổ biến vì:

* Dễ quan sát toàn bộ cơ thể.
* Hai cánh tay tách khỏi thân.
* Thuận tiện khi tạo bone và skinning.
* Phù hợp với nhiều pipeline sản xuất.

### A-pose

A-pose là tư thế cánh tay hạ xuống một góc nhẹ, tạo hình gần giống chữ **A**.

```text
      \   /
       \│/
        │
        │
       / \
```

Giảng viên lựa chọn A-pose vì tư thế này có thể dễ kiểm soát biến dạng hơn đối với người mới, đặc biệt tại:

* Vai
* Nách
* Ngực
* Phần trên cánh tay

### So sánh

| Tiêu chí               | T-pose             | A-pose                  |
| ---------------------- | ------------------ | ----------------------- |
| Vị trí cánh tay        | Ngang 90°          | Hạ chéo xuống           |
| Hình dạng tổng thể     | Giống chữ T        | Gần giống chữ A         |
| Dễ dựng bone           | Tốt                | Tốt                     |
| Vùng nách              | Có thể bị kéo căng | Tự nhiên hơn            |
| Vùng vai ở tư thế nghỉ | Ít tự nhiên hơn    | Gần tư thế nghỉ hơn     |
| Phù hợp người mới      | Có thể sử dụng     | Thường dễ kiểm soát hơn |

---

## 14. Chuyển nhân vật từ T-pose sang A-pose

### Bước 1: Chọn toàn bộ cánh tay

Trong Edit Mode:

1. Bật X-Ray.
2. Chọn toàn bộ vertex thuộc cánh tay.
3. Đảm bảo không chọn nhầm vertex ở ngực hoặc thân.

### Bước 2: Đặt 3D Cursor tại vai

Đặt **3D Cursor** gần tâm khớp vai.

Điểm này sẽ đóng vai trò trục xoay của toàn bộ cánh tay.

### Bước 3: Đổi Pivot Point

Đổi Transform Pivot Point thành:

```text
3D Cursor
```

### Bước 4: Xoay cánh tay

Nhấn:

```text
R
```

Sau đó hạ cánh tay xuống một góc vừa phải.

```text
T-pose:

────────●────────
        ↑
       Vai

A-pose:

      ╲ ● ╱
        │
```

Cánh tay không nên ép sát thân. Cần giữ một khoảng trống để dễ chọn mesh, tạo bone và chỉnh Weight Paint.

---

## 15. Chỉnh topology vùng nách và vai

Sau khi hạ cánh tay, topology ở vùng nách có thể bị:

* Chồng chéo.
* Co cụm.
* Kéo căng.
* Tạo khoảng cách không đều.

Cần di chuyển các vertex để tạo dòng cạnh mềm mại hơn.

### Mục tiêu

```text
Không tốt:

Ngực ──╳── Cánh tay
       ↑
  cạnh co cụm

Tốt hơn:

Ngực ──╮
       ╰── Cánh tay
```

### Thao tác

* Di chuyển một số vertex vùng nách sang ngang.
* Nâng các vertex nằm dưới vai.
* Kéo nhẹ các vertex ngoài vai ra ngoài.
* Kiểm tra để các mặt không chồng lên nhau.
* Giữ khoảng cách giữa các loop tương đối đều.

Edge flow tại vai nên chuyển tiếp từ thân sang cánh tay thay vì tạo một góc gấp đột ngột.

---

## 16. Điều chỉnh ngực và cổ

Sau khi chỉnh vai, cần kiểm tra hình dáng ở Side View.

Mục tiêu:

* Ngực nhô ra nhẹ.
* Phần trên cổ không nhô quá mức.
* Đường chuyển tiếp từ ngực đến cổ tự nhiên.
* Không xuất hiện mặt bị gập hoặc chồng chéo.

### Quy trình kiểm tra

1. Chuyển sang **Solid View**.
2. Thoát về **Object Mode**.
3. Quan sát nhân vật từ:

   * Front View
   * Side View
   * Perspective View
4. Quay lại Edit Mode nếu cần chỉnh thêm.

---

## 17. Tạo độ cong nhẹ cho cánh tay

Cánh tay hoàn toàn thẳng đôi khi khiến việc quan sát hướng khớp trở nên khó khăn.

Một độ cong nhẹ giúp:

* Xác định mặt trước và mặt sau của khuỷu tay.
* Định hướng bone rõ ràng hơn.
* Tránh trường hợp IK hoặc bone không biết nên gập theo hướng nào.
* Giúp tư thế chuẩn bị trông tự nhiên hơn.

### Thực hiện

1. Vào Edit Mode.
2. Bật X-Ray.
3. Chọn các vertex từ khuỷu tay trở xuống.
4. Chuyển sang Side View.
5. Nhấn:

```text
G → X
```

6. Di chuyển nhẹ phần cẳng tay về phía sau.

```text
Cánh tay thẳng:

Vai ───────── Cổ tay

Cánh tay cong nhẹ:

Vai ─────╲──── Cổ tay
          ↑
       Khuỷu tay
```

Chỉ cần một góc cong nhỏ. Không nên tạo thành một tư thế gập rõ rệt.

---

## 18. Quy trình chuẩn bị mesh tổng thể

```text
Kiểm tra mô hình hiện tại
          ↓
Xác định các vùng sẽ uốn
          ↓
Bổ sung loop cut tại khớp
          ↓
Điều chỉnh vùng hông
          ↓
Chuyển T-pose thành A-pose
          ↓
Dọn topology ở vai và nách
          ↓
Tạo độ cong nhẹ cho cánh tay
          ↓
Kiểm tra trong Solid View
          ↓
Lưu file
          ↓
Sẵn sàng tạo Armature
```

---

## 19. Phím tắt và công cụ liên quan

| Phím tắt/Công cụ    | Chức năng                                   |
| ------------------- | ------------------------------------------- |
| `Tab`               | Chuyển giữa Object Mode và Edit Mode        |
| `Ctrl + R`          | Thêm Loop Cut                               |
| `Ctrl + B`          | Bevel cạnh hoặc edge loop                   |
| Con lăn chuột       | Thay đổi số segment khi Bevel hoặc Loop Cut |
| `R`                 | Xoay vùng được chọn                         |
| `G`                 | Di chuyển vùng được chọn                    |
| `G → X`             | Di chuyển theo trục X                       |
| `1` trên Numpad     | Front View                                  |
| `3` trên Numpad     | Side View                                   |
| `Alt + Z`           | Bật hoặc tắt X-Ray                          |
| `A`                 | Chọn toàn bộ                                |
| `3D Cursor`         | Làm tâm xoay cho cánh tay                   |
| **Solid View**      | Kiểm tra hình dáng bề mặt                   |
| **Wireframe/X-Ray** | Quan sát và chọn topology xuyên qua mesh    |
| **Pose Mode**       | Thử xoay bone và quan sát biến dạng         |

---

## 20. Những lỗi thường gặp

### 20.1. Chỉ có một loop tại khớp

**Hiện tượng:**

* Khuỷu tay hoặc đầu gối tạo góc gấp cứng.
* Mesh bị lõm mạnh.
* Khớp mất thể tích.

**Cách xử lý:**

* Thêm các vòng cạnh hỗ trợ quanh tâm khớp.

---

### 20.2. Cho rằng Subdivision Surface sẽ sửa mọi lỗi

**Hiện tượng:**

* Bề mặt trông mượt nhưng khớp vẫn biến dạng xấu.
* Mesh vẫn bị pinching khi bone xoay.

**Nguyên nhân:**

* Topology cơ sở không phù hợp với chuyển động.

**Cách xử lý:**

* Sửa edge flow trước khi phụ thuộc vào modifier.

---

### 20.3. Thêm quá nhiều loop cut

**Hiện tượng:**

* Mesh dày đặc và khó chỉnh.
* Weight Paint trở nên phức tạp.
* Các cạnh bị co cụm quanh khớp.

**Cách xử lý:**

* Chỉ thêm lượng geometry cần thiết.
* Giữ khoảng cách giữa các loop tương đối đều.

---

### 20.4. Loop cut đặt quá xa tâm khớp

**Hiện tượng:**

* Vùng uốn không nằm đúng vị trí bone.
* Khớp vẫn gập cứng dù có nhiều loop.

**Cách xử lý:**

* Đặt vòng giữa gần trục xoay của khớp.
* Đặt hai vòng hỗ trợ ở hai bên.

---

### 20.5. Vùng nách bị chồng chéo

**Hiện tượng:**

* Face giao nhau khi chuyển sang A-pose.
* Vai bị lõm hoặc nhăn.
* Armature deform tạo kết quả khó kiểm soát.

**Cách xử lý:**

* Điều chỉnh thủ công các vertex vùng vai và nách.
* Kiểm tra mesh từ nhiều góc nhìn.

---

### 20.6. Cánh tay hoàn toàn thẳng

**Hiện tượng:**

* Khó xác định hướng gập của khuỷu tay.
* Bone có thể gập về hướng không mong muốn.

**Cách xử lý:**

* Tạo một độ cong rất nhẹ ở khuỷu tay trong tư thế chuẩn bị.

---

### 20.7. A-pose quá khép

**Hiện tượng:**

* Cánh tay nằm quá sát thân.
* Khó chọn vertex vùng nách.
* Weight Paint giữa cánh tay và thân dễ bị ảnh hưởng lẫn nhau.

**Cách xử lý:**

* Giữ cánh tay hạ xuống nhưng vẫn có khoảng trống với thân.

---

## 21. Checklist thực hành

### Topology

* [ ] Khuỷu tay có đủ loop hỗ trợ.
* [ ] Cổ tay có đủ loop hỗ trợ.
* [ ] Vai có thêm geometry cần thiết.
* [ ] Vùng hông có topology phù hợp.
* [ ] Đầu gối có khoảng ba vòng cạnh.
* [ ] Mắt cá chân có đủ loop hỗ trợ.
* [ ] Không có loop cut thừa hoặc co cụm bất thường.
* [ ] Khoảng cách giữa các vòng cạnh tương đối đều.

### Tư thế nhân vật

* [ ] Nhân vật đã được chuyển từ T-pose sang A-pose.
* [ ] Hai cánh tay không nằm quá sát thân.
* [ ] Vùng nách không bị chồng chéo.
* [ ] Vai chuyển tiếp tự nhiên sang cánh tay.
* [ ] Ngực và cổ có hình dáng hợp lý.
* [ ] Cánh tay có độ cong nhẹ tại khuỷu.

### Kiểm tra cuối cùng

* [ ] Đã kiểm tra nhân vật từ Front View.
* [ ] Đã kiểm tra nhân vật từ Side View.
* [ ] Đã kiểm tra trong Solid View.
* [ ] Không có face giao nhau rõ ràng.
* [ ] Mesh đã sẵn sàng để tạo Armature.
* [ ] Đã lưu file trước khi sang bài tiếp theo.

---

## 22. Bài tập thực hành

### Yêu cầu

Tiếp tục hoàn thiện nhân vật Blob Man:

1. Tạo ba loop quanh đầu gối.
2. Kiểm tra mắt cá chân đang có bao nhiêu loop.
3. Chỉ thêm số loop còn thiếu.
4. Hạ hai cánh tay từ T-pose xuống A-pose.
5. Dọn lại vùng vai và nách.
6. Tạo độ cong nhẹ tại khuỷu tay.
7. Kiểm tra nhân vật trong Solid View.
8. Lưu file để chuẩn bị dựng Armature.

### Câu hỏi tự kiểm tra

1. Vì sao một khớp có ba vòng cạnh thường biến dạng tốt hơn một khớp chỉ có một vòng?
2. Subdivision Surface có thể thay thế topology đúng không?
3. Vì sao A-pose có thể dễ rig hơn T-pose đối với người mới?
4. Vì sao nên tạo một độ cong nhẹ ở khuỷu tay?
5. Có cần thêm ba loop cut vào mọi vị trí trên nhân vật không?

---

## 23. Ghi nhớ nhanh

> **Topology tốt phải hỗ trợ chuyển động, không chỉ hỗ trợ hình dáng tĩnh.**

```text
Vùng ít chuyển động
→ Có thể dùng ít geometry hơn

Vùng uốn cong
→ Cần thêm các vòng cạnh hỗ trợ

Topology cơ sở tốt
→ Armature deform tốt
→ Subdivision cho kết quả đẹp hơn
```

Các khớp chính cần kiểm tra:

```text
Vai → Khuỷu tay → Cổ tay
Hông → Đầu gối → Mắt cá chân
```

Tư thế chuẩn bị được sử dụng:

```text
T-pose → A-pose → Chỉnh nách và vai → Cong nhẹ khuỷu
```

---

## 24. Tóm tắt

Trong bài học này, nhân vật được chuẩn bị cho rigging bằng cách cải thiện topology tại những vùng sẽ uốn cong.

Các nội dung quan trọng gồm:

* Thêm loop hỗ trợ tại khuỷu tay và cổ tay bằng `Ctrl + B`.
* Thêm loop cut tại vai, hông và mắt cá chân bằng `Ctrl + R`.
* Tạo đủ geometry quanh đầu gối.
* Điều chỉnh chiều rộng và topology vùng hông.
* Chuyển nhân vật từ T-pose sang A-pose.
* Dọn lại topology vùng vai và nách.
* Tạo độ cong nhẹ ở cánh tay để xác định hướng gập.
* Kiểm tra mô hình trong Solid View và lưu file.

Mesh sau khi hoàn thiện sẽ có khả năng biến dạng ổn định hơn và sẵn sàng cho bước tiếp theo: **tạo Armature và dựng bộ xương cho nhân vật**.

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
