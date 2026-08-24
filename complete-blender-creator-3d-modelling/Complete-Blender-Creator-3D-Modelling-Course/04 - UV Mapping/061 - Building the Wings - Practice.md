# 061 — Building the Wings

| Thuộc tính       | Nội dung                                                             |
| ---------------- | -------------------------------------------------------------------- |
| **Module**       | Module 04 — UV Mapping                                               |
| **Bài học**      | Building the Wings                                                   |
| **Thời lượng**   | 11:49                                                                |
| **Chủ đề chính** | Bo tròn thân sau, dựng cánh đuôi đứng, cánh đuôi ngang và cánh chính |

## 1. Mục tiêu bài học

Sau bài học này, bạn có thể:

* Bo tròn thân máy bay bằng **Loop Cut** và **Edge Slide**.
* Thu gọn, làm phẳng phần cuối thân để chuẩn bị dựng đuôi.
* Extrude trực tiếp từ thân để tạo:

  * **Cánh đuôi đứng** — vertical stabilizer.
  * **Cánh đuôi ngang** — horizontal stabilizer.
  * **Cánh chính** — main wings.
* Dùng các góc nhìn **Top**, **Front** và **Side** để căn hình theo ảnh tham chiếu.
* Điều chỉnh topology để thân và cánh chuyển tiếp mềm mại.
* Làm mỏng dần đầu cánh bằng **Proportional Editing**.

---

## 2. Tổng quan quy trình

```text
Thân máy bay ban đầu
        │
        ▼
Thêm Loop Cut giữa thân
        │
        ▼
Edge Slide để bo tròn tiết diện
        │
        ▼
Thu hẹp và làm phẳng phần đuôi
        │
        ├───────────────┐
        ▼               ▼
Cánh đuôi đứng     Cánh đuôi ngang
        │               │
        └───────┬───────┘
                ▼
      Thêm Loop Cut ở thân
                │
                ▼
        Extrude cánh chính
                │
                ▼
     Căn chỉnh Top/Front/Side
                │
                ▼
       Làm mỏng và bo đầu cánh
```

---

## 3. Bo tròn thân máy bay

### 3.1. Thêm vòng cạnh ở giữa thân

Trong **Edit Mode**, thêm một vòng cạnh chạy quanh giữa thân:

1. Nhấn `Ctrl + R`.
2. Di chuột lên thân để hiển thị đường Loop Cut.
3. Nhấn chuột trái để tạo.
4. Nhấn chuột phải để đặt vòng cạnh chính xác ở giữa.

Vòng cạnh mới giúp tạo thêm topology để điều chỉnh tiết diện thân máy bay.

### 3.2. Dùng Edge Slide tạo độ cong

Chọn từng vòng cạnh bằng:

```text
Alt + chuột trái
```

Sau đó sử dụng:

```text
G → G
```

để kích hoạt **Edge Slide**.

Trượt các vòng cạnh:

* Cạnh dưới hướng vào giữa.
* Cạnh bên điều chỉnh lên hoặc xuống.
* Cạnh trên trượt nhẹ để tiết diện không bị nhô ra bất thường.

Mục tiêu là biến tiết diện thân từ dạng góc cạnh thành một hình bo tròn mềm mại hơn.

### Nguyên tắc

```text
Ít vòng cạnh + vị trí hợp lý
          ↓
Hình dạng low-poly mềm mại
          ↓
Topology vẫn đơn giản, dễ chỉnh sửa
```

Không cần thêm quá nhiều Loop Cut. Trong phong cách low-poly, vị trí của các vòng cạnh quan trọng hơn số lượng cạnh.

---

## 4. Làm phẳng phần cuối thân máy bay

Phần thân gần đuôi cần dần chuyển từ tiết diện tròn sang một mặt sau hẹp và tương đối phẳng.

### 4.1. Căn thẳng các đỉnh cuối

Chọn các vertex ở cuối thân rồi sử dụng:

```text
S → X → 0
```

Thao tác này scale toàn bộ đỉnh được chọn về cùng một tọa độ trên trục X, giúp chúng thẳng hàng.

Sau đó di chuyển chúng vào trong:

```text
G → X
```

Lặp lại với các hàng vertex kế tiếp.

### 4.2. Tạo độ thuôn dần

Không nên làm tất cả các vòng cạnh phẳng ngay lập tức. Thay vào đó:

* Vòng cuối cùng: có thể scale về `0` trên trục X.
* Vòng kế trước: scale nhỏ nhưng không về `0`.
* Những vòng xa hơn: chỉ thu vào một chút.

Kết quả cần tạo được độ chuyển tiếp:

```text
Thân rộng và tròn
      ↓
Thu hẹp từ từ
      ↓
Phần đuôi hẹp và phẳng
```

### 4.3. Kiểm tra từ Top View

Dùng:

```text
Numpad 7
```

để kiểm tra hình dáng từ trên xuống.

Đường viền hai bên thân cần thu vào từ từ, không xuất hiện đoạn lồi hoặc gãy đột ngột.

---

## 5. Dựng cánh đuôi đứng

Cánh đuôi đứng được extrude trực tiếp từ các mặt phía trên ở cuối thân máy bay.

### 5.1. Chọn mặt gốc

Chuyển sang **Face Select**:

```text
3
```

Chọn hai mặt phía trên ở phần đuôi.

Dùng **Side View** để kiểm tra vị trí bắt đầu của cánh đuôi:

```text
Numpad 3
```

### 5.2. Extrude theo trục Z

Khi nhấn `E`, Blender có thể mặc định extrude theo normal của mặt. Nếu mặt đang nghiêng, phần extrude cũng sẽ bị lệch.

Để ép chuyển động theo trục Z toàn cục, trong trường hợp thao tác đang bị ràng buộc theo normal:

```text
E → Z → Z
```

Trong đó:

* Lần nhấn `Z` đầu tiên thay đổi hoặc hủy ràng buộc hiện tại.
* Lần nhấn `Z` tiếp theo khóa theo trục Z toàn cục.

Extrude cánh lên thành nhiều đoạn nhỏ thay vì kéo một lần duy nhất.

### 5.3. Tạo độ thuôn

Sau mỗi lần extrude:

```text
S → Y
```

để làm cánh hẹp dần theo chiều dày.

Có thể dùng:

```text
S → Z → 0
```

để làm phẳng một hàng vertex theo chiều cao trước khi tiếp tục extrude.

Quy trình cơ bản:

```text
Chọn mặt
   ↓
Extrude lên
   ↓
Scale hẹp lại
   ↓
Căn theo Side View
   ↓
Extrude đoạn tiếp theo
```

### 5.4. Điều chỉnh cạnh bằng Edge Slide

Nếu một cạnh ở cánh đuôi quá rộng hoặc lệch vị trí:

1. Chuyển sang **Edge Select** bằng `2`.
2. Chọn cạnh.
3. Nhấn `G → G`.
4. Trượt cạnh đến vị trí phù hợp.

Edge Slide giữ cạnh nằm trên bề mặt hiện tại, hạn chế làm biến dạng topology xung quanh.

---

## 6. Làm tròn vùng nối giữa thân và cánh đuôi

Sau khi extrude, vùng nối giữa thân và cánh đuôi có thể trông khá vuông hoặc gãy.

### 6.1. Chỉnh vertex theo ảnh tham chiếu

Trong **Side View**:

* Di chuyển các vertex ở cạnh trước và cạnh sau.
* Tạo đường cong nhẹ ở gốc cánh.
* Làm phần đáy cánh hòa vào thân.
* Chỉnh đỉnh cánh thuôn dần.

Sử dụng:

```text
G
```

hoặc khóa theo từng trục:

```text
G → X
G → Y
G → Z
```

### 6.2. Trượt các vòng cạnh

Chọn một chuỗi cạnh bằng `Ctrl + chuột trái`, sau đó:

```text
G → G
```

để di chuyển chúng gần nhau hơn.

Việc đưa các edge loop lại gần nhau có thể tạo một đoạn cong rõ hơn mà không cần thêm hình học mới.

### 6.3. Kiểm tra trong Object Mode

Nhấn:

```text
Tab
```

để tạm chuyển về Object Mode và đánh giá silhouette tổng thể.

Sau đó quay lại Edit Mode để tiếp tục chỉnh topology.

> Một mô hình có topology đều chưa chắc đã đẹp. Cần thường xuyên kiểm tra hình khối trong Object Mode để đánh giá silhouette thực tế.

---

## 7. Dựng cánh đuôi ngang

Cánh đuôi ngang được tạo từ các mặt bên của phần đuôi, ngay dưới cánh đuôi đứng.

### 7.1. Tạo mặt gốc bằng Inset

Chuyển sang Face Select và chọn hai mặt bên tại vị trí gắn cánh.

Nhấn:

```text
I
```

để **Inset Faces**, tạo một vùng mặt nhỏ hơn bên trong.

Sau đó dùng:

```text
S → Y
```

để điều chỉnh chiều cao hoặc độ rộng của vùng inset, tùy hướng mô hình.

Inset tạo ra topology bao quanh gốc cánh, giúp vùng nối giữa cánh và thân rõ ràng hơn.

### 7.2. Extrude cánh ra ngoài

Chuyển sang **Top View**:

```text
Numpad 7
```

Sau đó:

```text
E
```

để extrude cánh ra hai bên.

Sau mỗi lần extrude:

* Scale nhỏ dần để tạo độ thuôn.
* Dùng `G` để điều chỉnh vị trí.
* So sánh đường viền với ảnh tham chiếu.

Có thể chia cánh thành hai hoặc ba đoạn extrude:

```text
Gốc cánh → đoạn giữa → đầu cánh
```

Càng ra xa thân, cánh càng mỏng và hẹp.

### 7.3. Làm mỏng đầu cánh

Chọn các vertex ở đầu cánh và bật **Proportional Editing**:

```text
O
```

Sau đó scale theo trục đứng:

```text
S → Z
```

Dùng con lăn chuột để điều chỉnh vùng ảnh hưởng.

Kết quả là độ dày cánh giảm dần về phía đầu, thay vì thay đổi đột ngột.

---

## 8. Dựng cánh chính

Cánh chính được tạo bằng cách thêm Loop Cut vào thân rồi extrude các mặt bên ra ngoài.

### 8.1. Tạo Loop Cut xác định mép sau cánh

Trong Side View, xác định vị trí trước và sau của gốc cánh theo ảnh tham chiếu.

Thêm Loop Cut:

```text
Ctrl + R
```

Sau đó trượt vòng cạnh đến vị trí phù hợp.

Vòng cạnh này tạo thêm một dải mặt trên thân để sử dụng làm gốc cánh.

### 8.2. Chọn mặt gốc cánh

Chuyển sang Face Select:

```text
3
```

Chọn các mặt bên tương ứng với vị trí cánh chính.

Kiểm tra từ nhiều góc:

* **Side View**: kiểm tra vị trí trước–sau.
* **Front View**: kiểm tra độ cao.
* **Top View**: kiểm tra góc quét và chiều dài cánh.

### 8.3. Extrude đoạn đầu tiên

Trong Top View:

```text
E
```

để extrude mặt ra ngoài.

Sau đó:

```text
S → Y
```

để thu hẹp chiều rộng của đoạn cánh.

Nếu **Proportional Editing** vẫn đang bật từ thao tác trước, nên tắt bằng:

```text
O
```

trước khi scale, tránh làm biến dạng các phần không mong muốn.

### 8.4. Căn cánh trong Front View

Chuyển sang:

```text
Numpad 1
```

Chọn các vertex hoặc cạnh của cánh rồi:

```text
S → X → 0
```

hoặc trục tương ứng với hướng mô hình, để làm phẳng hàng vertex.

Sau đó:

```text
G → Z
```

để nâng hoặc hạ cánh theo ảnh tham chiếu.

Trong mô hình của bài học, phần cánh có một độ hạ nhẹ so với thân, vì vậy cần kiểm tra Front View thay vì chỉ dựng hoàn toàn phẳng.

---

## 9. Hoàn thiện hình dạng cánh chính

### 9.1. Extrude nhiều đoạn

Tiếp tục chọn các mặt ở đầu cánh rồi extrude:

```text
E
```

Sau mỗi đoạn:

* Scale nhỏ hơn.
* Di chuyển để khớp đường viền.
* Kiểm tra Perspective View.
* Quay lại Top hoặc Front View để chỉnh chính xác.

Cách làm phù hợp:

```text
Extrude đoạn gốc
      ↓
Extrude đoạn giữa
      ↓
Extrude ra đầu cánh
      ↓
Chỉnh từng vertex theo reference
```

### 9.2. Chỉnh đầu cánh bằng Vertex Select

Chuyển sang Vertex Select:

```text
1
```

Điều chỉnh riêng từng vertex để tạo hình đầu cánh:

* Mép trước có thể cong hoặc nhô ra.
* Mép sau thu lại.
* Đầu cánh hẹp hơn phần gốc.
* Chiều dày giảm dần.

Không nhất thiết tất cả vertex phải thẳng hàng tuyệt đối; ưu tiên silhouette phù hợp với ảnh tham chiếu.

### 9.3. Kiểm tra độ cao và góc cánh

Trong Front View:

* Scale đầu cánh theo trục Z để giảm chiều dày.
* Di chuyển đầu cánh lên hoặc xuống.
* Xoay nhẹ nếu cánh có góc nghiêng.

Có thể sử dụng:

```text
R
```

để xoay phần đầu cánh một góc nhỏ.

---

## 10. Bo tròn profile cánh

Sau khi hoàn thành hình dạng cơ bản, cánh có thể vẫn trông quá vuông.

Chọn các edge loop phía trên và phía dưới cánh:

```text
Alt + chuột trái
```

Sau đó scale theo chiều cao:

```text
S → Z
```

để tạo độ cong nhẹ.

Có thể tiếp tục:

* Trượt edge loop phía trước về sau.
* Trượt edge loop phía sau về trước.
* Điều chỉnh khoảng cách giữa các vòng cạnh.

Mục tiêu không phải tạo airfoil khí động học chính xác, mà tạo một profile low-poly có:

* Mép trước tương đối tròn.
* Phần giữa có độ dày.
* Mép sau mỏng hơn.
* Đầu cánh thuôn.

---

## 11. Vai trò của các góc nhìn

| Góc nhìn             |   Phím tắt | Nội dung cần kiểm tra                           |
| -------------------- | ---------: | ----------------------------------------------- |
| **Front View**       | `Numpad 1` | Độ cao, độ nghiêng và độ dày cánh               |
| **Side View**        | `Numpad 3` | Vị trí cánh trên thân, hình dạng cánh đuôi đứng |
| **Top View**         | `Numpad 7` | Chiều dài, độ thuôn và góc quét của cánh        |
| **Perspective View** | `Numpad 5` | Silhouette và hình khối tổng thể                |

Một bộ phận có thể đúng ở một góc nhưng sai ở góc khác. Vì vậy, cần luân phiên kiểm tra cả ba hướng trực giao.

```text
Top View đúng
     +
Front View đúng
     +
Side View đúng
     =
Hình khối 3D hợp lý
```

---

## 12. Phím tắt và công cụ quan trọng

| Phím tắt            | Chức năng                               |
| ------------------- | --------------------------------------- |
| `N`                 | Hiện hoặc ẩn Sidebar của Viewport       |
| `Tab`               | Chuyển Object Mode ↔ Edit Mode          |
| `1`                 | Vertex Select trong Edit Mode           |
| `2`                 | Edge Select trong Edit Mode             |
| `3`                 | Face Select trong Edit Mode             |
| `Ctrl + R`          | Thêm Loop Cut                           |
| `Alt + chuột trái`  | Chọn một edge loop                      |
| `Ctrl + chuột trái` | Chọn đường cạnh ngắn nhất giữa hai điểm |
| `G → G`             | Edge Slide                              |
| `E`                 | Extrude                                 |
| `I`                 | Inset Faces                             |
| `S → X/Y/Z`         | Scale theo một trục                     |
| `S → X/Y/Z → 0`     | Làm phẳng các vertex theo một trục      |
| `G → X/Y/Z`         | Di chuyển theo một trục                 |
| `R`                 | Rotate                                  |
| `O`                 | Bật hoặc tắt Proportional Editing       |
| `Numpad 1`          | Front View                              |
| `Numpad 3`          | Side View                               |
| `Numpad 7`          | Top View                                |
| `Numpad 5`          | Perspective ↔ Orthographic              |
| `Shift + N`         | Recalculate Normals                     |

---

## 13. Lưu ý quan trọng

### 13.1. Extrude có thể đi theo normal

Khi extrude từ một mặt nghiêng, Blender có thể di chuyển phần mới theo normal của mặt thay vì theo trục thế giới.

Hãy kiểm tra đường chỉ hướng xuất hiện khi extrude và khóa lại trục khi cần.

### 13.2. Không chỉ kiểm tra Top View

Cánh có thể đúng hình thang khi nhìn từ trên xuống nhưng:

* Nằm quá cao.
* Bị nghiêng.
* Có độ dày không đều.
* Không nối tự nhiên với thân.

Luôn kiểm tra thêm Front View và Perspective View.

### 13.3. Tắt Proportional Editing sau khi dùng

Nếu quên tắt `O`, thao tác scale hoặc di chuyển một nhóm vertex có thể kéo theo cả vùng thân và làm biến dạng mô hình.

### 13.4. Không extrude cánh trong một bước duy nhất

Extrude toàn bộ chiều dài cánh chỉ bằng một đoạn khiến việc tạo độ thuôn, góc quét và độ dày trở nên khó khăn.

Nên chia thành nhiều đoạn để kiểm soát hình dạng tốt hơn.

### 13.5. Ưu tiên silhouette

Các chỉnh sửa nhỏ như trượt cạnh vài pixel hoặc di chuyển một vertex có thể không giống tuyệt đối ảnh tham chiếu, nhưng vẫn chấp nhận được nếu silhouette tổng thể đẹp và hợp lý.

---

## 14. Lỗi thường gặp và cách khắc phục

| Lỗi                                     | Nguyên nhân                            | Cách khắc phục                                    |
| --------------------------------------- | -------------------------------------- | ------------------------------------------------- |
| Thân máy bay vẫn vuông                  | Các edge loop chưa được phân bố hợp lý | Dùng `G → G` để điều chỉnh khoảng cách vòng cạnh  |
| Phần cuối thân bị gãy                   | Scale các vòng cạnh quá khác nhau      | Tạo độ thu hẹp dần qua nhiều vòng                 |
| Cánh đuôi đứng bị lệch                  | Extrude theo normal của mặt            | Khóa chuyển động theo trục Z                      |
| Cánh đuôi ngang quá dày                 | Không scale đầu cánh                   | Scale theo trục Z hoặc dùng Proportional Editing  |
| Cánh chính không khớp reference         | Chỉ kiểm tra một góc nhìn              | So sánh lần lượt Top, Front và Side View          |
| Cả thân bị biến dạng khi chỉnh đầu cánh | Proportional Editing vẫn bật           | Nhấn `O` để tắt hoặc giảm vùng ảnh hưởng          |
| Gốc cánh quá vuông                      | Thiếu topology bao quanh               | Dùng Inset hoặc điều chỉnh edge loop gần gốc cánh |
| Đầu cánh không thuôn                    | Các lần extrude có cùng kích thước     | Scale nhỏ dần sau từng lần extrude                |
| Bóng đổ xuất hiện vùng đen              | Normal có thể bị đảo                   | Chọn toàn bộ và nhấn `Shift + N`                  |

---

## 15. Quy trình thực hành đề xuất

### Giai đoạn A — Hoàn thiện thân sau

1. Thêm Loop Cut giữa thân.
2. Dùng Edge Slide để bo tròn tiết diện.
3. Chọn các vertex cuối thân.
4. Scale về cùng trục để làm phẳng.
5. Thu hẹp dần những vòng cạnh phía trước.
6. Kiểm tra silhouette trong Top View.

### Giai đoạn B — Cánh đuôi đứng

1. Chọn hai mặt phía trên đuôi.
2. Extrude lên theo trục Z.
3. Scale nhỏ dần theo chiều dày.
4. Lặp lại nhiều đoạn.
5. Chỉnh vertex trong Side View.
6. Bo tròn vùng nối với thân.

### Giai đoạn C — Cánh đuôi ngang

1. Chọn mặt bên ở đuôi.
2. Inset để tạo vùng gốc cánh.
3. Extrude ra ngoài trong Top View.
4. Scale nhỏ dần qua từng đoạn.
5. Làm mỏng đầu cánh bằng Proportional Editing.

### Giai đoạn D — Cánh chính

1. Thêm Loop Cut tại vị trí gốc cánh.
2. Chọn các mặt bên của thân.
3. Extrude đoạn gốc.
4. Căn chiều cao trong Front View.
5. Extrude thêm các đoạn giữa và đầu.
6. Chỉnh riêng từng vertex.
7. Bo profile cánh bằng các edge loop.
8. Kiểm tra toàn bộ trong Object Mode.

---

## 16. Checklist thực hành

### Thân máy bay

* [ ] Đã thêm Loop Cut giữa thân.
* [ ] Thân có tiết diện bo tròn hơn.
* [ ] Phần cuối thân thu hẹp từ từ.
* [ ] Các vertex cuối thân đã được căn phẳng.
* [ ] Không còn cạnh nhô ra bất thường.

### Cánh đuôi đứng

* [ ] Được extrude từ các mặt phía trên thân.
* [ ] Extrude đúng theo trục Z.
* [ ] Hình dạng thuôn dần lên phía trên.
* [ ] Vùng nối với thân không quá vuông.
* [ ] Silhouette khớp tương đối với Side View.

### Cánh đuôi ngang

* [ ] Đã tạo vùng gốc cánh bằng Inset.
* [ ] Cánh được extrude ra ngoài đúng hướng.
* [ ] Đầu cánh hẹp và mỏng hơn gốc.
* [ ] Không bị nghiêng ngoài ý muốn.
* [ ] Hai bên đối xứng qua Mirror Modifier.

### Cánh chính

* [ ] Gốc cánh nằm đúng vị trí trên thân.
* [ ] Cánh có độ thuôn từ gốc đến đầu.
* [ ] Đường viền khớp với Top View.
* [ ] Độ cao khớp với Front View.
* [ ] Profile cánh được bo tròn nhẹ.
* [ ] Không có mặt chồng lên nhau hoặc khe hở.
* [ ] Proportional Editing đã được tắt sau khi sử dụng.
* [ ] File đã được lưu trước khi sang bài tiếp theo.

---

## 17. Bài tập tự luyện

Không nhìn lại video, hãy thử:

1. Tạo một bản sao của mô hình.
2. Thay đổi hình dạng cánh chính:

   * Cánh dài và hẹp.
   * Cánh ngắn và rộng.
   * Cánh quét mạnh về phía sau.
3. Thay đổi cánh đuôi đứng:

   * Cao và hẹp.
   * Thấp và rộng.
   * Nghiêng nhẹ về phía sau.
4. Kiểm tra mỗi thiết kế từ Top, Front, Side và Perspective View.
5. So sánh silhouette của ba phiên bản.

Mục tiêu của bài tập là hiểu cách vị trí các vertex và edge loop ảnh hưởng đến kiểu dáng tổng thể của máy bay.

---

## 18. Tóm tắt

Trong bài học này, phần thân sau của máy bay được hoàn thiện trước bằng cách thêm **Loop Cut**, sử dụng **Edge Slide** để bo tròn và scale các vertex để tạo phần đuôi thuôn, phẳng.

Từ topology có sẵn trên thân:

* Các mặt phía trên được extrude để tạo **cánh đuôi đứng**.
* Các mặt bên ở đuôi được inset và extrude để tạo **cánh đuôi ngang**.
* Một Loop Cut mới được thêm vào thân để xác định gốc **cánh chính**, sau đó cánh được dựng qua nhiều lần extrude và scale.

Kỹ năng quan trọng nhất của bài không chỉ là Extrude, mà là liên tục kiểm tra mô hình từ **Top View**, **Front View**, **Side View** và **Perspective View**. Điều này giúp hình dạng cánh đúng cả về đường viền, độ cao, độ dày và khả năng chuyển tiếp tự nhiên với thân máy bay.

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
