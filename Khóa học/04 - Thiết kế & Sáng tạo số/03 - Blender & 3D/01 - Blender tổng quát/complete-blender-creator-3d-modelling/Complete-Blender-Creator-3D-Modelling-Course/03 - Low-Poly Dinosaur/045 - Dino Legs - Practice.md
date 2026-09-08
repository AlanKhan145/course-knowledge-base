# 045 — Dino Legs

## Tạo chân sau cho khủng long Low-Poly

| Thuộc tính             | Nội dung                                             |
| ---------------------- | ---------------------------------------------------- |
| **Module**             | Module 03 — Low-Poly Dinosaur                        |
| **Bài học**            | Dino Legs                                            |
| **Thời lượng**         | 9:05                                                 |
| **Chủ đề chính**       | Dựng và tạo hình chân sau khủng long                 |
| **Kỹ thuật trọng tâm** | Extrude, Loop Cut, Bevel, Edge Slide, chỉnh topology |

---

## 1. Mục tiêu bài học

Sau bài học này, bạn có thể:

* Xác định đúng vị trí nối chân với thân khủng long.
* Extrude chân từ các mặt có sẵn trên mesh thân.
* Tạo lần lượt phần đùi, đầu gối, cẳng chân, mắt cá và bàn chân.
* Điều chỉnh hình dáng chân theo ảnh tham chiếu ở nhiều góc nhìn.
* Làm tròn hình khối bằng **Edge Slide**, **Loop Cut** và **Bevel**.
* Bổ sung topology đúng thời điểm mà vẫn duy trì phong cách low-poly.
* Giữ khoảng trống giữa hai chân khi sử dụng **Mirror Modifier**.

---

## 2. Nguyên tắc tạo chân

Chân sau được tạo trực tiếp từ mesh của thân thay vì dựng thành một object riêng.

Quy trình tổng quát:

```text
Chọn mặt ở hông
        ↓
Extrude chân ra ngoài
        ↓
Chọn các mặt phía dưới
        ↓
Extrude tạo đùi
        ↓
Tạo đầu gối và cẳng chân
        ↓
Extrude xuống mắt cá
        ↓
Extrude mặt trước tạo bàn chân
        ↓
Thêm topology và chỉnh đường cong
```

Điểm quan trọng nhất là không extrude chân thẳng xuống ngay từ thân. Trước tiên cần extrude các mặt **ra phía ngoài**, sau đó mới extrude phần dưới xuống để tạo chân.

Cách này giúp:

* Chân có điểm nối tự nhiên với phần hông.
* Giữ được khoảng trống giữa hai chân.
* Tránh tạo mặt bị bịt kín ở giữa mô hình.
* Hạn chế lỗi khi sử dụng Mirror Modifier.

---

## 3. Xác định vùng nối chân

### 3.1. Chuyển sang góc nhìn phù hợp

Chuyển sang **Side View**, phóng gần khu vực chân và bật chế độ nhìn xuyên mesh.

Các thao tác thường dùng:

* **Numpad 3**: Right/Side View.
* **Numpad 1**: Front View.
* **Alt + Z**: bật hoặc tắt X-Ray.
* **3**: Face Select Mode.

> Lưu ý: phím số `3` trên hàng số chuyển sang Face Select, còn `Numpad 3` chuyển sang góc nhìn bên.

---

### 3.2. Chọn đúng mặt

Chọn mặt hướng ra phía ngoài của thân, không chọn mặt nằm gần đường Mirror ở giữa.

Nếu chọn nhầm mặt phía trong và extrude:

* Hai chân có thể bị nối liền với nhau.
* Khoảng trống giữa hai chân bị mất.
* Xuất hiện vùng mặt cần sửa hoặc lấp lại.
* Mirror Modifier có thể tạo hình học không mong muốn.

---

### 3.3. Chuẩn bị topology tại hông

Di chuyển các vertex để vùng nối chân gần khớp với ảnh tham chiếu.

Sau đó dùng:

```text
Ctrl + R
```

để thêm một **Loop Cut** chạy qua vùng hông.

Loop Cut này chia vùng nối chân thành hai mặt. Khi extrude hai mặt cùng lúc, tiết diện chân có nhiều cạnh hơn và dễ tạo hình tròn hơn.

### So sánh

| Extrude một mặt           | Extrude hai mặt             |
| ------------------------- | --------------------------- |
| Ít cạnh                   | Nhiều cạnh hơn              |
| Hình chân vuông và cứng   | Dễ tạo tiết diện tròn       |
| Khó điều chỉnh đường cong | Có nhiều vertex để tạo hình |
| Phù hợp hình hộp đơn giản | Phù hợp chân khủng long     |

---

## 4. Extrude chân ra khỏi thân

Chọn hai mặt đã chuẩn bị và nhấn:

```text
E
```

Extrude chúng ra phía ngoài thân.

Không extrude thẳng xuống ở bước này.

```text
Thân
 ┌───────────────┐
 │               │
 │        ┌──────┼──→ Extrude ra ngoài
 │        │      │
 └────────┴──────┘
          ↓
    Sau đó mới extrude xuống
```

Sau khi extrude, điều chỉnh:

* Vị trí bằng **G**.
* Góc bằng **R**.
* Kích thước bằng **S**.
* Kích thước theo từng trục bằng `S + X`, `S + Y` hoặc `S + Z`.
* Loại trừ một trục bằng `S + Shift + trục`.

Ví dụ:

```text
S → Shift + X
```

sẽ scale trên hai trục còn lại nhưng giữ nguyên kích thước theo trục X.

---

## 5. Tạo phần đùi

Sau khi đã extrude phần hông ra ngoài:

1. Chọn các mặt phía dưới của phần vừa extrude.
2. Chuyển sang Side View.
3. Nhấn **E** để extrude xuống.
4. Di chuyển đoạn mới theo hình dáng của đùi trong ảnh tham chiếu.
5. Scale nhẹ để phần đùi thu nhỏ dần.
6. Xoay đoạn mesh để phù hợp với hướng của chân.

Không cần khớp hoàn toàn với ảnh tham chiếu. Mục tiêu là tạo được silhouette chân hợp lý.

---

## 6. Tạo đầu gối và cẳng chân

Tiếp tục extrude từ phần dưới của đùi:

1. Nhấn **E** để tạo đoạn mới.
2. Di chuyển đoạn mesh đến vị trí đầu gối.
3. Scale theo chiều ngang để phần đầu gối không quá dày.
4. Xoay nhẹ để chân có độ gập tự nhiên.
5. Extrude tiếp xuống phần mắt cá.

Trong quá trình này cần liên tục chuyển đổi giữa:

* **Side View** để kiểm tra độ cong trước–sau.
* **Front View** để kiểm tra chiều rộng và vị trí chân.
* **Perspective View** để đánh giá hình khối tổng thể.

```text
Side View                  Front View

     Hông                     Thân
      │                      ┌────┐
     Đùi                     │    │
       ╲                    ╱      ╲
        Gối                Chân    Chân
         ╲
       Cẳng chân
           ╲
          Mắt cá
```

---

## 7. Tạo bàn chân

Sau khi extrude chân xuống gần mặt đất:

1. Điều chỉnh mặt dưới để chân đứng gần phẳng trên sàn.
2. Chuyển sang Face Select Mode.
3. Chọn mặt phía trước của mắt cá.
4. Nhấn **E** để extrude mặt đó về phía trước.
5. Scale bàn chân theo chiều cao để bàn chân tương đối dẹt.
6. Scale theo chiều ngang để tạo độ rộng phù hợp.
7. Điều chỉnh cạnh đáy để bàn chân không xuyên xuống mặt đất.

Ở bài này chỉ tạo hình khối cơ bản của bàn chân. Phần móng vuốt sẽ được xử lý sau khi có thêm topology.

---

## 8. Làm tròn hình dáng chân

Sau khi hoàn thành các đoạn extrude, chân có thể còn khá vuông và cứng. Cần di chuyển vertex và edge để tạo đường cong tự nhiên hơn.

### 8.1. Chỉnh vertex

Chuyển sang Vertex Select Mode:

```text
1
```

Sau đó:

* Di chuyển các vertex quanh hông để tạo phần đùi lớn.
* Thu nhỏ vùng đầu gối.
* Điều chỉnh phía sau cẳng chân.
* Làm gọn vùng mắt cá.
* Giữ mặt dưới bàn chân tương đối phẳng.

---

### 8.2. Sử dụng Edge Slide

Chọn một cạnh hoặc edge loop rồi nhấn:

```text
G → G
```

Thao tác này kích hoạt **Edge Slide**, cho phép cạnh trượt dọc theo bề mặt mesh mà không phá vỡ cấu trúc topology.

Edge Slide được sử dụng để:

* Tạo độ cong ở mặt trong đùi.
* Điều chỉnh đường cong phía sau chân.
* Tạo chuyển tiếp mềm giữa đùi và đầu gối.
* Cải thiện silhouette mà không tạo thêm vertex.

---

### 8.3. Chỉnh các cạnh góc

Các edge loop nằm sát góc của chân có thể được trượt vào trong bằng Edge Slide.

Ví dụ:

```text
Cạnh góc ban đầu          Sau Edge Slide

┌─────────                ╭────────
│                         │
│                         │
└─────────                ╰────────
```

Mesh vẫn low-poly nhưng hình dáng bớt vuông và tự nhiên hơn.

---

## 9. Bổ sung topology

Không nên thêm quá nhiều topology ngay từ đầu.

Nếu thêm nhiều Loop Cut quá sớm:

* Phải di chuyển quá nhiều vertex.
* Khó thay đổi tỉ lệ tổng thể.
* Mất nhiều thời gian chỉnh sửa.
* Mesh dễ trở nên phức tạp không cần thiết.
* Phong cách low-poly có thể bị giảm.

Quy trình phù hợp:

```text
Tạo hình khối lớn
       ↓
Kiểm tra silhouette
       ↓
Điều chỉnh tỉ lệ
       ↓
Thêm topology ở khu vực cần thiết
       ↓
Tinh chỉnh đường cong
```

---

## 10. Tạo đường cong bằng Bevel

Ở vùng đầu gối hoặc phần đùi, thay vì thêm từng Loop Cut riêng lẻ, có thể chọn một edge loop rồi dùng:

```text
Ctrl + B
```

Bevel edge loop sẽ tạo thêm các vòng cạnh xung quanh cạnh được chọn.

Lợi ích:

* Nhanh chóng tạo nhiều vòng cạnh.
* Các vòng cạnh được phân bố tương đối đều.
* Dễ tạo đường cong quanh đầu gối.
* Thuận tiện hơn so với thêm từng Loop Cut rồi di chuyển riêng.

### Quy trình

1. Chọn edge loop quanh khu vực cần làm tròn.
2. Nhấn **Ctrl + B**.
3. Kéo chuột để điều chỉnh độ rộng.
4. Lăn con lăn chuột để thay đổi số segment.
5. Nhấn chuột trái để xác nhận.
6. Chỉnh lại vertex theo ảnh tham chiếu.

Không nên tạo quá nhiều segment vì mô hình vẫn hướng đến phong cách low-poly.

---

## 11. Tinh chỉnh vùng đầu gối

Đầu gối cần có đủ topology để tạo được sự chuyển tiếp giữa đùi và cẳng chân.

Có thể sử dụng:

* Một Loop Cut chạy qua vùng đầu gối.
* Bevel edge loop để tạo hai hoặc ba vòng cạnh.
* Box Select để chọn đồng thời các vertex phía trước và phía sau.
* Rotate để thay đổi hướng của cả tiết diện chân.
* Scale để thu nhỏ vùng đầu gối.
* Move để khớp với ảnh tham chiếu.

Khi chọn vertex trong chế độ X-Ray, cần chú ý rằng mỗi điểm nhìn thấy có thể có một vertex khác nằm phía sau. Sử dụng **Box Select** giúp chọn đầy đủ cả hai phía.

---

## 12. Kiểm tra ở chế độ Perspective

Sau mỗi nhóm chỉnh sửa:

1. Tắt X-Ray bằng **Alt + Z**.
2. Chuyển về Object Mode bằng **Tab**.
3. Bỏ chọn object để nhìn silhouette rõ hơn.
4. Tạm ẩn ảnh tham chiếu phía trước và bên.
5. Xoay góc nhìn Perspective.
6. Kiểm tra chân từ nhiều hướng.

Các câu hỏi nên tự kiểm tra:

* Chân có giống chân khủng long không?
* Phần đùi đã đủ lớn để nối với thân chưa?
* Đầu gối có quá vuông hoặc quá mỏng không?
* Cẳng chân có hướng hợp lý không?
* Bàn chân có nằm gần phẳng trên mặt đất không?
* Khoảng trống giữa hai chân còn rõ không?
* Silhouette có cân bằng với thân và đuôi không?

---

## 13. Phím tắt và công cụ

| Phím tắt           | Chức năng                     |
| ------------------ | ----------------------------- |
| `Tab`              | Chuyển Object Mode/Edit Mode  |
| `1`                | Vertex Select Mode            |
| `2`                | Edge Select Mode              |
| `3`                | Face Select Mode              |
| `Numpad 1`         | Front View                    |
| `Numpad 3`         | Side View                     |
| `Alt + Z`          | Bật/tắt X-Ray                 |
| `E`                | Extrude                       |
| `G`                | Di chuyển                     |
| `R`                | Xoay                          |
| `S`                | Scale                         |
| `S, X/Y/Z`         | Scale theo một trục           |
| `S, Shift + X/Y/Z` | Scale nhưng loại trừ một trục |
| `Ctrl + R`         | Thêm Loop Cut                 |
| `Ctrl + B`         | Bevel cạnh                    |
| `G, G`             | Edge Slide                    |
| `Alt + Click`      | Chọn edge loop                |
| `B`                | Box Select                    |
| `H`                | Ẩn phần được chọn             |
| `Alt + H`          | Hiện lại phần đã ẩn           |
| `Ctrl + S`         | Lưu file Blender              |

---

## 14. Lỗi thường gặp

### 14.1. Chọn nhầm mặt phía trong

**Hiện tượng:**

* Chân extrude từ vùng giữa thân.
* Hai chân bị nối kín.
* Không còn khoảng trống giữa hai chân.

**Cách khắc phục:**

* Undo thao tác.
* Chọn mặt hướng ra phía ngoài.
* Kiểm tra mô hình ở Solid View trước khi extrude.

---

### 14.2. Extrude thẳng xuống ngay từ thân

**Hiện tượng:**

* Chân không có phần nối hông.
* Đùi trông quá mỏng.
* Silhouette thiếu sức nặng.

**Cách khắc phục:**

* Extrude mặt ở hông ra ngoài trước.
* Sau đó chọn các mặt phía dưới và extrude xuống.

---

### 14.3. Chỉ extrude từ một mặt

**Hiện tượng:**

* Tiết diện chân quá vuông.
* Không đủ cạnh để tạo độ tròn.
* Khó điều chỉnh phần đùi.

**Cách khắc phục:**

* Thêm Loop Cut để tạo hai mặt.
* Chọn cả hai mặt và extrude cùng lúc.

---

### 14.4. Chỉ chỉnh ở một góc nhìn

**Hiện tượng:**

* Chân đúng trong Side View nhưng quá rộng hoặc lệch trong Front View.
* Bàn chân có thể xoay sai hướng.
* Vertex phía sau không được chọn đầy đủ.

**Cách khắc phục:**

Thường xuyên chuyển đổi:

```text
Side View ↔ Front View ↔ Perspective View
```

---

### 14.5. Thêm quá nhiều topology quá sớm

**Hiện tượng:**

* Có quá nhiều vertex cần chỉnh.
* Khó thay đổi hình dáng lớn.
* Mesh mất tính low-poly.

**Cách khắc phục:**

Hoàn thiện hình khối chính trước, sau đó chỉ thêm topology ở:

* Đầu gối.
* Phần cong của đùi.
* Mắt cá.
* Vùng chuẩn bị tạo móng chân.

---

### 14.6. Bàn chân xuyên xuống sàn

**Hiện tượng:**

* Cạnh đáy nằm dưới mặt đất.
* Bàn chân trông như bị chôn xuống.

**Cách khắc phục:**

* Chọn cạnh đáy.
* Di chuyển lên theo trục Z.
* Làm phần đáy tương đối phẳng.

---

## 15. Bài thực hành

Hãy hoàn thiện chân sau với các yêu cầu sau:

1. Chọn đúng hai mặt ở vùng hông.
2. Extrude chúng ra phía ngoài.
3. Extrude phần dưới để tạo đùi.
4. Tạo đầu gối, cẳng chân và mắt cá.
5. Extrude mặt trước để tạo bàn chân.
6. Điều chỉnh mesh ở Side View và Front View.
7. Sử dụng Edge Slide để làm mềm các cạnh góc.
8. Sử dụng Loop Cut hoặc Bevel để bổ sung topology.
9. Kiểm tra silhouette trong Perspective View.
10. Lưu file trước khi chuyển sang bài tiếp theo.

---

## 16. Checklist hoàn thành

* [ ] Chân được extrude từ đúng mặt hướng ra ngoài.
* [ ] Có khoảng trống rõ ràng giữa hai chân.
* [ ] Phần nối giữa chân và hông đủ lớn.
* [ ] Đùi có khối lượng lớn hơn cẳng chân.
* [ ] Đầu gối có độ cong và góc gập hợp lý.
* [ ] Cẳng chân thu nhỏ dần về phía mắt cá.
* [ ] Bàn chân hướng về phía trước.
* [ ] Đáy bàn chân không xuyên xuống mặt đất.
* [ ] Mesh đã được kiểm tra ở Side View.
* [ ] Mesh đã được kiểm tra ở Front View.
* [ ] Silhouette nhìn hợp lý trong Perspective View.
* [ ] Không thêm quá nhiều topology không cần thiết.
* [ ] File Blender đã được lưu.

---

## 17. Tóm tắt bài học

Trong bài này, chân sau của khủng long được dựng trực tiếp từ hai mặt trên phần hông của mesh thân. Hai mặt này được extrude ra phía ngoài trước, sau đó phần phía dưới mới được extrude liên tiếp để tạo đùi, đầu gối, cẳng chân, mắt cá và bàn chân.

Hình dáng chân được hoàn thiện bằng cách di chuyển vertex, scale tiết diện, xoay các đoạn chân và sử dụng **Edge Slide** để làm mềm các cạnh góc. Khi hình khối chính đã ổn định, các công cụ **Loop Cut** và **Bevel** được sử dụng để bổ sung topology tại đầu gối và những vùng cần thêm độ cong.

Nguyên tắc quan trọng nhất là dựng hình từ tổng thể đến chi tiết: tạo silhouette hợp lý trước, sau đó mới thêm topology và tinh chỉnh. Điều này giúp quá trình dựng hình nhanh hơn, mesh sạch hơn và duy trì được phong cách low-poly.

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
