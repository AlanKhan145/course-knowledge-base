# 046 — Dino Claws

## Tạo móng vuốt cho khủng long

| Thuộc tính             | Nội dung                                                  |
| ---------------------- | --------------------------------------------------------- |
| **Module**             | Module 03 — Low-Poly Dinosaur                             |
| **Bài học**            | Dino Claws                                                |
| **Thời lượng**         | 8:57                                                      |
| **Chủ đề chính**       | Tạo ngón chân và móng vuốt                                |
| **Kỹ thuật trọng tâm** | Extrude, Inset Individual, Edge Slide, Individual Origins |

---

## 1. Mục tiêu bài học

Sau bài học này, anh có thể:

* Sắp xếp các ảnh tham chiếu vào một Collection riêng.
* Điều chỉnh độ dày của chân và bàn chân khủng long.
* Tạo ba mặt riêng ở phía trước bàn chân mà không cần thêm Loop Cut chạy quanh chân.
* Dùng **Inset Individual** để chuẩn bị từng ngón chân riêng biệt.
* Extrude đồng thời ba móng vuốt.
* Sử dụng **Individual Origins** để thu nhỏ từng móng theo tâm riêng.
* Xoay và chỉnh hướng móng để bàn chân trông tự nhiên hơn.
* Điều chỉnh phần gót chân dựa trên ảnh tham chiếu thực tế.

---

## 2. Tổ chức ảnh tham chiếu

Trước khi tiếp tục dựng hình, giảng viên gom hai ảnh tham chiếu mặt trước và mặt bên vào một Collection riêng.

### Các bước thực hiện

1. Trong **Outliner**, nhấp chuột phải.
2. Chọn **New Collection**.
3. Đặt tên Collection là:

```text
Reference
```

4. Kéo cả hai ảnh tham chiếu vào Collection này.
5. Dùng biểu tượng con mắt của Collection để ẩn hoặc hiện đồng thời cả hai ảnh.

### Lợi ích

Thay vì phải ẩn từng ảnh riêng lẻ, anh chỉ cần bật hoặc tắt một Collection duy nhất.

```text
Reference
├── T-Rex Front
└── T-Rex Side
```

---

## 3. Lựa chọn topology phù hợp cho bàn chân

Một phương án có thể nghĩ đến là thêm hai đường **Loop Cut** để chia phần trước bàn chân thành ba ngón.

Tuy nhiên, cách này có nhược điểm:

* Loop Cut tiếp tục chạy vòng quanh bàn chân.
* Các cạnh mới có thể kéo dài lên cả phần chân.
* Mesh xuất hiện nhiều topology không cần thiết.
* Việc chỉnh sửa hình dáng chân trở nên khó khăn hơn.

```text
Dùng Loop Cut
      ↓
Cạnh chạy quanh toàn bộ chân
      ↓
Tăng topology không cần thiết
      ↓
Khó chỉnh sửa mesh low-poly
```

Vì vậy, bài học sử dụng một phương pháp đơn giản hơn:

1. Thu nhỏ phần mặt trước bàn chân.
2. Extrude thêm một mặt sang bên trái.
3. Extrude thêm một mặt sang bên phải.
4. Dùng Edge Slide để căn lại các cạnh.

Kết quả là bàn chân có ba mặt phía trước, tương ứng với ba ngón, nhưng không làm tăng số cạnh trên toàn bộ chân.

---

## 4. Tạo ba mặt phía trước bàn chân

### Bước 1: Thu nhỏ mặt trước

Trong **Edit Mode**, chọn phần mặt trước bàn chân và thu nhỏ theo trục X:

```text
S → X
```

Thu nhỏ cho đến khi phần giữa có chiều rộng tương đương một ngón chân.

---

### Bước 2: Extrude mặt bên thứ nhất

Chuyển sang **Face Select**, chọn mặt bên ngoài rồi extrude theo trục X:

```text
E → X
```

Kéo mặt ra ngoài để tạo khu vực cho ngón chân thứ hai.

---

### Bước 3: Extrude mặt bên còn lại

Thực hiện tương tự với mặt phía đối diện:

```text
E → X
```

Sau bước này, phía trước bàn chân có ba mặt riêng.

```text
Ban đầu:

┌───────────────┐
│   Một mặt     │
└───────────────┘

Sau khi chỉnh:

┌─────┬─────┬─────┐
│Ngón │Ngón │Ngón │
│trái │giữa │phải │
└─────┴─────┴─────┘
```

---

### Bước 4: Căn chỉnh bằng Edge Slide

Các cạnh phía sau của hai mặt mới có thể bị kéo quá xa.

Chuyển sang **Edge Select**, chọn từng cạnh và dùng:

```text
G → G
```

hoặc nhấn nhanh phím `G` hai lần.

Edge Slide cho phép trượt cạnh dọc theo bề mặt hiện có mà không làm phá vỡ hình dáng tổng thể của mesh.

---

## 5. Làm chân và bàn chân dày hơn

Sau khi tạo ba mặt phía trước, phần chân vẫn còn khá mỏng. Bài học tiếp tục chỉnh lại thể tích trước khi tạo móng.

### Bật Wireframe

```text
Alt + Z
```

Trong chế độ Wireframe, anh có thể chọn xuyên qua toàn bộ mesh, bao gồm cả các vertex ở phía sau.

---

### Tăng chiều rộng theo trục X

Chọn các vertex cần thiết rồi dùng:

```text
S → X
```

Thao tác này giúp phần chân và bàn chân rộng hơn khi nhìn từ phía trước.

---

### Tăng độ dày theo trục Y

Dùng:

```text
S → Y
```

hoặc di chuyển từng hàng vertex:

```text
G → Y
```

Mục đích là tạo cảm giác chân có khối lượng và đủ khỏe để nâng cơ thể khủng long.

---

### Điều chỉnh các vùng riêng lẻ

Có thể cần chỉnh thêm:

* Phần trước bàn chân.
* Phần sau chân.
* Mép ngoài bàn chân.
* Khu vực nối giữa chân và bàn chân.
* Độ rộng của phần cổ chân.
* Độ cao của gót chân.

Không nên chỉ dựa hoàn toàn vào ảnh side view nếu ảnh tham chiếu khiến chân trông quá mỏng. Hãy quan sát mô hình từ nhiều góc và tham khảo thêm ảnh T-Rex thực tế.

---

## 6. Sử dụng Proportional Editing

Để chỉnh một vùng chân mềm mại hơn mà không phải di chuyển từng vertex riêng lẻ, bật:

```text
O
```

Sau đó dùng:

```text
G
```

Lăn con lăn chuột để thay đổi bán kính ảnh hưởng.

Proportional Editing giúp:

* Làm chân bớt cong vào trong.
* Tăng cảm giác chắc khỏe.
* Điều chỉnh nhiều vertex liền kề một cách tự nhiên.
* Tránh tạo ra các điểm gãy đột ngột trên mesh.

Sau khi chỉnh xong, nhấn `O` để tắt Proportional Editing.

---

## 7. Căn đều ba mặt tạo móng

Trước khi extrude móng, ba mặt ở phía trước bàn chân cần có kích thước tương đối đồng đều.

### Kiểm tra trong Side View

Dùng:

```text
Numpad 3
```

Kiểm tra:

* Đáy bàn chân có thẳng không.
* Các mặt có cùng độ cao không.
* Vị trí bắt đầu của móng có hợp lý không.

---

### Căn chỉnh vị trí

Dùng các lệnh:

```text
G → X
S → X
G → G
```

Trong đó:

* `G → X`: di chuyển theo trục X.
* `S → X`: thu hẹp hoặc mở rộng khoảng cách.
* `G → G`: trượt cạnh để căn đều các mặt.

Mục tiêu cuối cùng:

```text
┌────────┬────────┬────────┐
│ Mặt 1  │ Mặt 2  │ Mặt 3  │
│ tương  │ tương  │ tương  │
│ đối đều│ đối đều│ đối đều│
└────────┴────────┴────────┘
```

---

## 8. Tạo móng vuốt bằng Inset Individual

Chuyển sang **Face Select** bằng phím:

```text
3
```

Chọn cả ba mặt phía trước bàn chân.

Nếu extrude trực tiếp, ba mặt vẫn có xu hướng giữ liên kết với nhau. Vì vậy, cần inset từng mặt riêng biệt trước.

### Inset lần thứ nhất

Nhấn:

```text
I
```

Lúc này Blender inset cả ba mặt như một vùng chung.

### Chuyển sang Inset Individual

Nhấn thêm lần nữa:

```text
I
```

Ba mặt sẽ được inset độc lập.

```text
I lần 1
   ↓
Inset cả nhóm mặt

I lần 2
   ↓
Inset từng mặt riêng biệt
```

Thu nhỏ các mặt vừa đủ để tạo khoảng cách giữa ba móng.

---

## 9. Extrude ba móng vuốt

Sau khi inset riêng từng mặt, extrude chúng về phía trước theo trục Y:

```text
E → Y
```

Quan sát đồng thời ảnh mặt bên để xác định chiều dài phù hợp.

Có thể tiếp tục extrude thêm một đoạn:

```text
E
```

Đoạn thứ hai giúp móng có thể được thu nhỏ và tạo đầu nhọn rõ hơn.

---

## 10. Thu nhỏ từng móng bằng Individual Origins

Nếu sử dụng Scale với Pivot Point mặc định, cả ba móng sẽ thu về cùng một tâm và dễ dính vào nhau.

Vì vậy, đổi **Transform Pivot Point** sang:

```text
Individual Origins
```

Sau đó dùng:

```text
S
```

Mỗi móng sẽ được thu nhỏ quanh tâm riêng của nó.

```text
Median Point:

\   |   /
 \  |  /
  \ | /
   \|/
Một tâm chung

Individual Origins:

\ /   \ /   \ /
 V     V     V
Ba tâm riêng
```

Đây là thao tác quan trọng giúp tạo ba đầu móng nhọn mà vẫn giữ đúng khoảng cách giữa chúng.

---

## 11. Xoay và hướng móng ra ngoài

Các móng vừa extrude có thể trông còn vuông và song song với nhau.

Để tạo cảm giác tự nhiên hơn:

1. Bật Wireframe:

```text
Alt + Z
```

2. Chọn mặt đầu hoặc các vertex cuối của móng ngoài.
3. Xoay quanh trục Z:

```text
R → Z
```

4. Di chuyển trong mặt phẳng XY mà không thay đổi chiều cao:

```text
G → Shift + Z
```

`Shift + Z` khóa trục Z, cho phép di chuyển trên hai trục X và Y.

Thực hiện tương tự với móng ở phía đối diện.

Kết quả:

```text
Nhìn từ trên:

Trước khi chỉnh
│   │   │

Sau khi chỉnh
╲   │   ╱
```

Hai móng ngoài hơi hướng sang hai bên, trong khi móng giữa tiếp tục hướng về phía trước.

---

## 12. Điều chỉnh phần gót chân

Bàn chân T-Rex không hoàn toàn phẳng như bàn chân người. Phần mà ta thường nghĩ là “gót” nằm khá cao, còn khủng long chủ yếu đứng trên các ngón chân.

Dựa trên ảnh tham chiếu, có thể:

* Nâng phần đáy phía sau bàn chân lên.
* Xoay nhẹ các mặt đáy.
* Tạo đường cong chuyển tiếp từ chân xuống ngón.
* Tránh để toàn bộ mặt dưới nằm phẳng trên mặt đất.

```text
Chân quá phẳng:

──────────────

Gót được nâng:

        ╱
───────╯
```

Mức độ nâng gót có thể thay đổi tùy thiết kế. Một số ảnh tham chiếu có gót khá cao, trong khi một số mẫu khác có bàn chân phẳng hơn.

---

## 13. Hoàn thiện hình dáng bàn chân

Sau khi tạo móng, tiếp tục quan sát mô hình từ:

* Front View.
* Side View.
* Top View.
* Perspective View.

Có thể cần điều chỉnh thêm:

* Thu hẹp độ rộng tổng thể của bàn chân.
* Đưa các vertex ngoài vào gần thân hơn.
* Edge Slide cạnh phía trên của chân.
* Nâng hoặc hạ mặt đáy.
* Tăng độ dài móng.
* Tạo bàn chân to và chắc hơn.
* Chỉnh góc xòe của hai móng ngoài.

### Lưu ý về Pivot Point

Sau khi dùng **Individual Origins**, cần đổi Pivot Point trở lại:

```text
Median Point
```

Nếu không, thao tác Scale nhiều vertex có thể cho kết quả ngoài ý muốn.

---

## 14. Sơ đồ quy trình

```text
Tổ chức ảnh tham chiếu
          ↓
Thu nhỏ mặt trước bàn chân
          ↓
Extrude hai mặt sang hai bên
          ↓
Edge Slide để tạo ba mặt đều
          ↓
Làm chân và bàn chân dày hơn
          ↓
Chọn ba mặt phía trước
          ↓
Inset Individual
          ↓
Extrude theo trục Y
          ↓
Đổi Pivot sang Individual Origins
          ↓
Scale nhỏ đầu móng
          ↓
Xoay hai móng ngoài
          ↓
Nâng gót và chỉnh hình bàn chân
          ↓
Kiểm tra từ nhiều góc nhìn
```

---

## 15. Phím tắt và công cụ liên quan

| Phím tắt        | Chức năng                              |
| --------------- | -------------------------------------- |
| `Tab`           | Chuyển giữa Object Mode và Edit Mode   |
| `1`             | Vertex Select trong Edit Mode          |
| `2`             | Edge Select trong Edit Mode            |
| `3`             | Face Select trong Edit Mode            |
| `Numpad 1`      | Front View                             |
| `Numpad 3`      | Side View                              |
| `Numpad .`      | Zoom vào đối tượng hoặc vùng đang chọn |
| `Alt + Z`       | Bật/tắt Wireframe hoặc X-Ray           |
| `E`             | Extrude                                |
| `E → X`         | Extrude theo trục X                    |
| `E → Y`         | Extrude theo trục Y                    |
| `I`             | Inset Faces                            |
| `I → I`         | Chuyển sang Inset Individual           |
| `S → X`         | Scale theo trục X                      |
| `S → Y`         | Scale theo trục Y                      |
| `G → X`         | Di chuyển theo trục X                  |
| `G → Y`         | Di chuyển theo trục Y                  |
| `G → Z`         | Di chuyển theo trục Z                  |
| `G → G`         | Edge Slide                             |
| `R → Z`         | Xoay quanh trục Z                      |
| `G → Shift + Z` | Di chuyển nhưng khóa trục Z            |
| `O`             | Bật/tắt Proportional Editing           |

---

## 16. Lưu ý quan trọng

### Không nên thêm Loop Cut không cần thiết

Loop Cut có thể tạo các cạnh chạy vòng quanh toàn bộ chân. Điều này làm topology phức tạp hơn trong khi chỉ cần thêm chi tiết ở phần bàn chân.

### Không Extrude ngay ba mặt khi chưa Inset Individual

Nếu extrude trực tiếp, các móng có thể vẫn bị nối sát với nhau. Hãy inset từng mặt riêng trước để tạo khoảng cách rõ ràng.

### Kiểm tra Pivot Point trước khi Scale

* Dùng **Individual Origins** khi thu nhỏ từng móng.
* Đổi lại **Median Point** khi muốn chỉnh cả một nhóm vertex như một khối.

### Không làm chân quá mỏng

Chân quá nhỏ sẽ khiến cơ thể khủng long mất cân đối và tạo cảm giác không đủ sức nâng trọng lượng cơ thể.

### Không để móng hoàn toàn song song

Xoay nhẹ hai móng ngoài giúp bàn chân trông tự nhiên và có sức sống hơn.

### Không để gót chân quá phẳng

Nâng nhẹ phần gót sẽ giúp hình dáng bàn chân gần với cấu trúc chân của theropod hơn.

### Luôn quan sát ảnh tham chiếu

Không nhất thiết phải sao chép chính xác một hình duy nhất. Anh có thể tham khảo nhiều mẫu để lựa chọn:

* Chân dày hoặc mảnh.
* Móng dài hoặc ngắn.
* Bàn chân rộng hoặc gọn.
* Gót cao hoặc tương đối thấp.

---

## 17. Lỗi thường gặp

| Lỗi                           | Nguyên nhân                            | Cách khắc phục                               |
| ----------------------------- | -------------------------------------- | -------------------------------------------- |
| Topology chạy vòng quanh chân | Dùng Loop Cut để chia ngón             | Extrude hai mặt bên từ phần trước bàn chân   |
| Ba móng dính sát nhau         | Chưa dùng Inset Individual             | Nhấn `I` hai lần trước khi Extrude           |
| Ba móng thu về cùng một điểm  | Pivot đang ở Median Point              | Chuyển sang Individual Origins               |
| Scale cho kết quả lạ          | Quên đổi Pivot về Median Point         | Kiểm tra Transform Pivot Point               |
| Bàn chân quá rộng             | Các vertex ngoài nằm quá xa            | Scale theo X hoặc di chuyển vertex vào trong |
| Chân quá mỏng                 | Chưa tăng kích thước theo X và Y       | Scale hoặc di chuyển các hàng vertex         |
| Móng quá vuông                | Chưa thu nhỏ đầu móng                  | Extrude thêm đoạn và Scale nhỏ               |
| Móng trông thiếu tự nhiên     | Cả ba móng song song                   | Xoay nhẹ hai móng ngoài                      |
| Bàn chân quá phẳng            | Phần gót chưa được nâng                | Di chuyển các mặt hoặc vertex đáy lên trên   |
| Móng xuyên nhau               | Góc xoay hoặc khoảng cách chưa phù hợp | Kiểm tra trong Top View và Perspective       |

---

## 18. Checklist thực hành

* [ ] Hai ảnh tham chiếu đã được đưa vào Collection `Reference`.
* [ ] Phần trước bàn chân đã được chia thành ba mặt.
* [ ] Không có Loop Cut thừa chạy quanh toàn bộ chân.
* [ ] Ba mặt phía trước có kích thước tương đối đồng đều.
* [ ] Chân và bàn chân có độ dày hợp lý.
* [ ] Ba mặt đã được Inset Individual.
* [ ] Ba móng đã được Extrude về phía trước.
* [ ] Đầu mỗi móng đã được thu nhỏ bằng Individual Origins.
* [ ] Hai móng ngoài đã được xoay nhẹ sang hai bên.
* [ ] Các móng không xuyên hoặc chồng lên nhau.
* [ ] Phần gót đã được nâng và chỉnh lại.
* [ ] Pivot Point đã được đổi lại thành Median Point.
* [ ] Mô hình đã được kiểm tra từ nhiều góc nhìn.
* [ ] File Blender đã được lưu.

---

## 19. Thử thách cuối bài

Sau khi hoàn thành móng vuốt, hãy tự điều chỉnh thiết kế dựa trên ảnh tham chiếu:

* Làm chân dày và khỏe hơn.
* Tăng hoặc giảm chiều dài móng.
* Thay đổi độ xòe của các ngón.
* Thu hẹp hoặc mở rộng bàn chân.
* Nâng phần gót cao hơn.
* Tạo phong cách đáng sợ hoặc hoạt hình hơn.

Không có một hình dáng duy nhất bắt buộc phải tuân theo. Điều quan trọng là mô hình có silhouette rõ ràng, cân đối và phù hợp với phong cách low-poly.

---

## 20. Tóm tắt

Bài học tập trung vào việc tạo ba ngón chân và móng vuốt bằng một topology đơn giản, tránh sử dụng Loop Cut chạy quanh toàn bộ chân.

Quy trình chính gồm:

1. Thu nhỏ mặt trước bàn chân.
2. Extrude hai mặt sang hai bên để tạo ba mặt.
3. Điều chỉnh độ dày của chân và bàn chân.
4. Dùng Inset Individual để tách vùng bắt đầu của từng móng.
5. Extrude ba móng về phía trước.
6. Dùng Individual Origins để thu nhỏ từng móng.
7. Xoay hai móng ngoài sang hai bên.
8. Nâng phần gót và hoàn thiện silhouette.

Kỹ thuật quan trọng nhất của bài là phối hợp giữa **Inset Individual**, **Individual Origins** và **Edge Slide** để tạo móng vuốt rõ ràng mà vẫn giữ topology gọn gàng, phù hợp với mô hình low-poly.
