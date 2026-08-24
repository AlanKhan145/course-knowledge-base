# 023 — Section Intro: Modular Dungeon

| Thuộc tính       | Nội dung                                                 |
| ---------------- | -------------------------------------------------------- |
| **Module**       | Module 02 — Modular Dungeon                              |
| **Bài học**      | Section Intro — Modular Dungeon                          |
| **Thời lượng**   | 1:29                                                     |
| **Chủ đề chính** | Giới thiệu kỹ thuật xây dựng môi trường 3D theo module   |
| **Phong cách**   | Low-poly                                                 |
| **Ứng dụng**     | Môi trường game, hầm ngục, kiến trúc và scene quy mô lớn |

---

## 1. Mục tiêu bài học

Sau bài học này, người học sẽ:

* Hiểu khái niệm **modular modelling** trong thiết kế môi trường 3D.
* Biết cách tạo một số lượng nhỏ asset rồi tái sử dụng chúng để xây dựng scene lớn.
* Hiểu vì sao kỹ thuật modular được sử dụng phổ biến trong quá trình làm môi trường game.
* Nhận biết ưu điểm và hạn chế của việc lặp lại các module.
* Biết cách giảm cảm giác trùng lặp bằng cách xoay và sắp xếp asset theo nhiều hướng.
* Hiểu khái niệm hình học bị chồng lấn và các mặt nằm bên trong mô hình.

---

## 2. Modular modelling là gì?

**Modular modelling** là kỹ thuật tạo ra một tập hợp các đối tượng hoặc mảnh ghép 3D nhỏ, sau đó:

* Nhân bản chúng.
* Xoay chúng theo nhiều hướng.
* Sắp xếp lại vị trí.
* Ghép chúng với nhau.

Từ một số lượng asset tương đối nhỏ, chúng ta có thể nhanh chóng tạo thành một môi trường lớn và phức tạp hơn.

Ví dụ, một bộ modular dungeon có thể bao gồm những thành phần như:

* Mảnh tường.
* Góc tường.
* Sàn.
* Cột.
* Cửa hoặc cổng.
* Thùng gỗ.
* Thùng hàng.
* Các vật trang trí trong hầm ngục.

Các asset này có thể được sử dụng nhiều lần để xây dựng hành lang, phòng, khu vực chiến đấu hoặc toàn bộ hầm ngục.

---

## 3. Nguyên lý xây dựng scene modular

Quy trình cơ bản của kỹ thuật modular có thể mô tả như sau:

```text
Tạo một số asset cơ bản
            ↓
Nhân bản các asset
            ↓
Xoay và thay đổi cách bố trí
            ↓
Ghép các module lại với nhau
            ↓
Tạo thành một môi trường lớn
```

Thay vì dựng toàn bộ scene như một mô hình duy nhất, người thiết kế chia môi trường thành nhiều mảnh nhỏ có thể tái sử dụng.

Ví dụ:

```text
[Tường] + [Tường] + [Góc tường] + [Cửa]
                       ↓
                 Một hành lang

[Sàn] + [Cột] + [Thùng] + [Tường]
                       ↓
                   Một căn phòng
```

---

## 4. Vì sao modular modelling được sử dụng trong game?

Môi trường game thường có quy mô lớn, bao gồm:

* Nhiều căn phòng.
* Hành lang dài.
* Các khu vực có cấu trúc tương tự nhau.
* Nhiều vật thể trang trí được lặp lại.
* Những khu vực cần thay đổi hoặc mở rộng thường xuyên.

Nếu dựng từng phần hoàn toàn riêng biệt, quá trình sản xuất sẽ mất rất nhiều thời gian.

Với kỹ thuật modular, người thiết kế chỉ cần tạo một bộ asset ban đầu, sau đó sử dụng chúng như các khối lắp ghép để nhanh chóng xây dựng môi trường.

```text
Số lượng asset ít
        +
Khả năng tái sử dụng cao
        =
Tốc độ dựng scene nhanh hơn
```

Kỹ thuật này đặc biệt hữu ích trong:

* Thiết kế môi trường game.
* Dựng hầm ngục.
* Dựng thành phố.
* Kiến trúc.
* Level design.
* Prototype môi trường.
* Tạo các asset pack để chia sẻ hoặc bán.

---

## 5. Modular pack

Một **modular pack** là tập hợp các asset được thiết kế để có thể kết hợp với nhau.

Khi tìm kiếm các modular pack, chúng ta có thể thấy nhiều bộ asset dành cho:

* Hầm ngục.
* Lâu đài.
* Thành phố.
* Nhà ở.
* Khoa học viễn tưởng.
* Nhà máy.
* Hang động.
* Môi trường hậu tận thế.

Người dùng có thể tải các bộ asset này về và sắp xếp chúng để tạo thành những môi trường lớn mà không cần dựng lại tất cả từ đầu.

Trong module này, người học sẽ tự tạo một bộ asset tương tự dành cho môi trường **low-poly modular dungeon**.

---

## 6. Ưu điểm của modular modelling

### 6.1. Dựng scene nhanh

Ưu điểm lớn nhất là tốc độ.

Sau khi đã có một số module cơ bản, chúng ta có thể:

* Duplicate asset.
* Di chuyển asset.
* Xoay asset.
* Ghép nhiều asset.
* Thay đổi bố cục nhanh chóng.

Nhờ đó, việc tạo một scene lớn trở nên nhanh hơn rất nhiều so với dựng từng chi tiết riêng biệt.

---

### 6.2. Khả năng tái sử dụng cao

Một asset có thể xuất hiện ở nhiều vị trí khác nhau.

Ví dụ, một mảnh tường có thể được dùng trong:

* Hành lang.
* Phòng nhỏ.
* Phòng lớn.
* Khu vực cổng vào.
* Khu vực chiến đấu.

Các asset cũng có thể được tái sử dụng trong nhiều scene hoặc nhiều level khác nhau.

---

### 6.3. Dễ thay đổi bố cục

Do scene được tạo từ nhiều mảnh nhỏ, người thiết kế có thể nhanh chóng:

* Kéo dài hành lang.
* Mở rộng căn phòng.
* Thêm lối đi mới.
* Thay đổi vị trí cửa.
* Thử nhiều bố cục khác nhau.

Điều này rất hữu ích trong quá trình thử nghiệm level game.

---

### 6.4. Phù hợp với phong cách low-poly

Phong cách low-poly thường sử dụng:

* Hình khối đơn giản.
* Ít polygon.
* Chi tiết được tối giản.
* Màu sắc và ánh sáng để tạo cảm giác không gian.

Vì vậy, các asset low-poly rất phù hợp để nhân bản và ghép lại thành môi trường modular.

---

## 7. Hạn chế của modular modelling

Mặc dù có nhiều ưu điểm, kỹ thuật modular cũng có một số hạn chế.

### 7.1. Cảm giác lặp lại

Nếu cùng một asset xuất hiện quá nhiều lần, người xem có thể dễ dàng nhận ra sự lặp lại.

Ví dụ:

```text
[Tường A] [Tường A] [Tường A] [Tường A]
```

Nếu mỗi mảnh tường đều có cùng:

* Vết nứt.
* Viên đá nổi bật.
* Vết bẩn.
* Hình dạng đặc biệt.

Sự lặp lại sẽ trở nên rất rõ ràng.

Vì vậy, các module cơ bản không nên có quá nhiều đặc điểm riêng biệt hoặc dễ nhận diện.

---

### 7.2. Asset không nên có chi tiết quá nổi bật

Một module có thể được sử dụng nhiều lần, vì vậy cần tránh các chi tiết như:

* Một vết nứt rất lớn ở đúng một vị trí.
* Một viên đá có hình dạng đặc biệt.
* Một biểu tượng nổi bật.
* Một vùng màu khác biệt hoàn toàn.
* Một phần bị hỏng quá dễ nhận biết.

Nếu asset có đặc điểm quá nổi bật, người xem sẽ nhanh chóng nhận ra rằng cùng một mô hình đang được lặp lại.

---

### 7.3. Hình học có thể chồng lấn

Khi nhiều module được đặt sát hoặc xuyên vào nhau, hình học của chúng có thể bị chồng lấn.

Ví dụ:

```text
Module A ─────┐
              ├── Vùng hình học chồng lên nhau
Module B ─────┘
```

Trong trường hợp này, một số mặt nằm bên trong mô hình sẽ không bao giờ được nhìn thấy.

Những mặt này thường được gọi là:

* **Inside faces** — các mặt nằm bên trong.
* **Hidden faces** — các mặt bị che khuất.
* **Wasted geometry** — hình học không cần thiết hoặc bị lãng phí.

---

### 7.4. Không hoàn toàn tối ưu

Các mặt nằm bên trong vẫn có thể được lưu trữ và xử lý, dù người chơi không nhìn thấy chúng.

Về lý thuyết, đây là hình học dư thừa và không phải phương án tối ưu nhất.

Tuy nhiên, trong nhiều dự án hiện đại:

* Máy tính có khả năng xử lý mạnh hơn.
* Số lượng polygon của asset low-poly tương đối thấp.
* Tốc độ sản xuất thường quan trọng hơn việc tối ưu tuyệt đối.

Vì vậy, một mức độ chồng lấn hình học nhất định thường được chấp nhận.

---

## 8. Cách giảm cảm giác lặp lại

### 8.1. Xoay asset

Một số đối tượng như thùng gỗ hoặc thùng hàng có thể được xoay theo nhiều hướng.

Ví dụ:

```text
Thùng ban đầu → Xoay 90° → Xoay 180° → Xoay 270°
```

Mặc dù vẫn là cùng một object, hướng đặt khác nhau có thể tạo cảm giác giống như nhiều vật thể khác nhau.

---

### 8.2. Sắp xếp các object cạnh nhau theo nhiều cách

Khi hai hoặc nhiều asset được đặt cạnh nhau, chúng có thể tạo ra nhiều bố cục khác nhau.

```text
Bố cục 1:  [Thùng] [Thùng]

Bố cục 2:      [Thùng]
           [Thùng]

Bố cục 3:  [Thùng xoay] [Thùng nghiêng]
```

Sự khác biệt về vị trí và hướng xoay giúp giảm cảm giác sao chép.

---

### 8.3. Tạo nhiều biến thể nhỏ

Trong quá trình xây dựng modular pack, có thể tạo một vài phiên bản của cùng loại asset:

```text
Tường A — tường bình thường
Tường B — tường có vết nứt nhẹ
Tường C — tường bị vỡ một phần
```

Khi xen kẽ các biến thể, scene sẽ tự nhiên hơn.

Tuy nhiên, các chi tiết khác biệt vẫn nên được kiểm soát để các module có thể ghép nối linh hoạt.

---

### 8.4. Thay đổi tỷ lệ có kiểm soát

Đối với những vật thể trang trí không cần ghép chính xác như:

* Thùng.
* Đá.
* Gỗ.
* Vật dụng nhỏ.

Có thể thay đổi tỷ lệ nhẹ để tạo cảm giác khác nhau.

Ví dụ:

```text
Scale 0.9 → Object nhỏ hơn
Scale 1.0 → Kích thước gốc
Scale 1.1 → Object lớn hơn
```

Không nên thay đổi tỷ lệ của các module cấu trúc nếu điều đó làm chúng không còn ghép khít.

---

## 9. Cân bằng giữa tốc độ và tối ưu

Kỹ thuật modular luôn có sự đánh đổi giữa:

```text
Tốc độ sản xuất
        ↕
Mức độ tối ưu hình học
```

Nếu cố gắng loại bỏ toàn bộ các mặt bị che khuất, quá trình dựng scene có thể trở nên chậm và phức tạp hơn.

Ngược lại, nếu chấp nhận một số mặt chồng lấn, người thiết kế có thể xây dựng môi trường nhanh hơn rất nhiều.

Trong nhiều trường hợp, lựa chọn hợp lý là:

* Tối ưu những phần có ảnh hưởng lớn đến hiệu suất.
* Chấp nhận các vùng chồng lấn nhỏ.
* Ưu tiên tốc độ và tính linh hoạt của quy trình modular.
* Kiểm tra hiệu suất thực tế trước khi dành thời gian tối ưu sâu.

---

## 10. Quy trình xây dựng modular dungeon

Quy trình tổng quát trong module này:

```text
Học các kỹ thuật modelling mới
                 ↓
Tạo các asset low-poly riêng lẻ
                 ↓
Thiết kế asset có thể tái sử dụng
                 ↓
Nhân bản và xoay các module
                 ↓
Ghép thành phòng và hành lang
                 ↓
Hoàn thiện scene modular dungeon
```

Trọng tâm không chỉ là tạo từng object đẹp riêng lẻ mà còn phải đảm bảo chúng hoạt động tốt khi được đặt cạnh những object khác.

---

## 11. Tư duy khi thiết kế một module

Trước khi tạo một asset modular, nên đặt các câu hỏi:

1. Asset này có thể được sử dụng bao nhiêu lần?
2. Nó có thể xoay theo nhiều hướng không?
3. Nó có chi tiết nào khiến sự lặp lại quá rõ không?
4. Nó có thể ghép với những module nào khác?
5. Khi ghép, có xuất hiện khe hở hoặc chồng lấn nghiêm trọng không?
6. Có cần tạo thêm một vài biến thể không?
7. Asset có đủ đơn giản để sử dụng nhiều lần không?

Một module tốt cần cân bằng giữa:

* Độ đơn giản.
* Khả năng tái sử dụng.
* Khả năng kết hợp.
* Mức độ chi tiết.
* Hiệu suất.
* Tính thẩm mỹ.

---

## 12. Thuật ngữ quan trọng

| Thuật ngữ                  | Giải thích                                                              |
| -------------------------- | ----------------------------------------------------------------------- |
| **Modular modelling**      | Kỹ thuật tạo các mảnh 3D nhỏ có thể tái sử dụng và ghép thành scene lớn |
| **Modular scene building** | Quá trình xây dựng môi trường bằng cách kết hợp nhiều module            |
| **Modular pack**           | Bộ sưu tập các asset được thiết kế để ghép với nhau                     |
| **Game environment**       | Môi trường 3D được sử dụng trong trò chơi                               |
| **Repetition**             | Hiện tượng một asset lặp lại nhiều lần và dễ bị nhận ra                 |
| **Inside faces**           | Các mặt hình học nằm bên trong hoặc bị che khuất hoàn toàn              |
| **Wasted geometry**        | Hình học tồn tại nhưng không đóng góp trực tiếp vào hình ảnh            |
| **Overlap**                | Hiện tượng hai hoặc nhiều object chồng hoặc xuyên vào nhau              |
| **Asset variation**        | Phiên bản biến thể của một asset                                        |
| **Low-poly**               | Phong cách mô hình sử dụng số lượng polygon thấp                        |

---

## 13. Ưu điểm và hạn chế

| Ưu điểm                         | Hạn chế                                  |
| ------------------------------- | ---------------------------------------- |
| Dựng môi trường lớn nhanh chóng | Dễ xuất hiện cảm giác lặp lại            |
| Asset có thể tái sử dụng        | Không nên sử dụng chi tiết quá đặc trưng |
| Dễ thử nghiệm nhiều bố cục      | Có thể xuất hiện hình học chồng lấn      |
| Phù hợp với môi trường game     | Có thể tồn tại các mặt nằm bên trong     |
| Dễ mở rộng scene                | Không hoàn toàn tối ưu về hình học       |
| Tiết kiệm thời gian sản xuất    | Cần thiết kế module cẩn thận ngay từ đầu |

---

## 14. Lưu ý khi thực hành

* Không nên thêm quá nhiều chi tiết nổi bật vào một module được sử dụng thường xuyên.
* Hãy kiểm tra asset ở nhiều góc xoay khác nhau.
* Thử đặt nhiều bản sao cạnh nhau để đánh giá mức độ lặp lại.
* Chấp nhận một số vùng chồng lấn nhỏ nếu chúng không gây lỗi hiển thị.
* Ưu tiên các hình khối đơn giản, rõ ràng và dễ tái sử dụng.
* Cần đánh giá asset trong toàn bộ scene, không chỉ khi xem riêng lẻ.
* Các object như thùng và hộp nên được thiết kế để trông khác nhau khi xoay.

---

## 15. Checklist trước khi bắt đầu

* [ ] Hiểu modular modelling là kỹ thuật ghép các asset nhỏ thành scene lớn.
* [ ] Hiểu lợi ích của việc tái sử dụng object.
* [ ] Nhận biết nguy cơ lặp lại quá rõ.
* [ ] Biết có thể xoay asset để tạo cảm giác đa dạng.
* [ ] Hiểu khái niệm inside faces.
* [ ] Hiểu rằng một số hình học chồng lấn có thể được chấp nhận.
* [ ] Sẵn sàng xây dựng bộ asset low-poly modular dungeon.

---

## 16. Tóm tắt

Trong module này, người học sẽ nâng cao kỹ năng modelling bằng cách xây dựng một môi trường **hầm ngục low-poly theo phương pháp modular**.

Kỹ thuật modular sử dụng một số lượng nhỏ asset rồi nhân bản, xoay và ghép chúng lại để tạo thành môi trường lớn. Đây là phương pháp rất phổ biến trong thiết kế game vì giúp tăng đáng kể tốc độ sản xuất và cho phép tái sử dụng asset.

Hạn chế chính của phương pháp này là sự lặp lại và hiện tượng hình học chồng lấn. Tuy nhiên, có thể giảm sự lặp lại bằng cách xoay object, thay đổi cách bố trí và sử dụng một vài biến thể nhỏ.

Điểm cốt lõi của modular modelling là:

> **Tạo ít asset hơn, nhưng thiết kế chúng đủ linh hoạt để có thể xây dựng nhiều môi trường khác nhau.**

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
