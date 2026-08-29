# 035 — The Art of Colorful Lighting

**Phần:** 04 — Lights
**Thời lượng:** 3:50
**Chủ đề:** Phối màu và mood của ánh sáng
**Loại bài:** lesson

---

## 1. Tóm tắt

Ánh sáng màu không chỉ làm scene bắt mắt hơn mà còn có thể định hướng cảm xúc, phân tách subject khỏi background và tạo visual hierarchy rõ ràng.

Trong một setup như `Three-Point Lighting`, `Key Light`, `Fill Light` và `Rim Light` không bắt buộc phải có cùng màu trắng trung tính. Mỗi nguồn sáng có thể mang một màu khác nhau, miễn là chúng được phối hợp có chủ đích.

Một workflow hiệu quả là:

```text
Xác định mood
      ↓
Chọn màu chủ đạo
      ↓
Chọn quan hệ màu
      ↓
Gán màu cho key / fill / rim
      ↓
Giữ exposure ổn định
      ↓
Kiểm tra saturation và chi tiết
      ↓
Tinh chỉnh vị trí ánh sáng
```

Color wheel là công cụ hữu ích để lựa chọn các màu có quan hệ rõ ràng thay vì thay đổi màu ngẫu nhiên.

---

## 2. Mục tiêu học tập

Sau khi hoàn thành bài này, người học có thể:

* Giải thích được vai trò của màu sắc trong lighting.
* Chọn màu chủ đạo cho một shot dựa trên mood mong muốn.
* Phân biệt được complementary, analogous và triadic color scheme.
* Phân bổ màu cho `Key Light`, `Fill Light` và `Rim Light` có chủ đích.
* Giữ visual hierarchy khi sử dụng nhiều nguồn sáng màu.
* So sánh các palette trong cùng một scene mà không để exposure làm sai lệch đánh giá.
* Phát hiện trường hợp saturation quá cao làm mất chi tiết.
* Sử dụng hình ảnh tham chiếu để học cách bố trí màu và ánh sáng.
* Sử dụng `black flag` để kiểm soát vùng nhận ánh sáng khi cần.

---

## 3. Màu của ánh sáng ảnh hưởng đến mood như thế nào?

Màu ánh sáng làm thay đổi cách người xem cảm nhận cùng một model hoặc cùng một composition.

Ví dụ:

```text
Ánh sáng ấm
→ gần gũi
→ hoàng hôn
→ năng lượng
→ cảm giác mùa thu

Ánh sáng lạnh
→ tĩnh lặng
→ đêm
→ công nghệ
→ cô lập

Warm + Cool
→ tương phản
→ chiều sâu
→ cinematic look
```

Không tồn tại một ý nghĩa cảm xúc tuyệt đối cho từng màu. Context của scene, material, background và câu chuyện vẫn quyết định cách màu được cảm nhận.

Vì vậy, thay vì hỏi:

> Màu nào đẹp nhất?

nên hỏi:

> Màu nào hỗ trợ tốt nhất cảm xúc và hierarchy của shot này?

---

## 4. Sử dụng color wheel để phối màu

Color wheel biểu diễn quan hệ giữa các hue và giúp lựa chọn palette có cấu trúc.

Các công cụ như Adobe Color có thể hỗ trợ xây dựng palette, nhưng điều quan trọng là hiểu logic phía sau thay vì phụ thuộc hoàn toàn vào preset.

### 4.1. Complementary và Analogous

#### Complementary

Complementary colors là hai màu nằm đối diện nhau trên color wheel.

Ví dụ phổ biến:

* xanh lam và cam;
* đỏ và xanh lục;
* tím và vàng.

```text
Blue  ←──── đối diện ────→  Orange
```

Complementary scheme tạo contrast mạnh nên rất phù hợp cho lighting cần separation rõ.

Ví dụ:

```text
Key Light
→ cam ấm

Rim Light
→ xanh lạnh
```

Khi đó, khuôn mặt hoặc subject có thể nhận màu ấm ở phía chính trong khi đường viền phía sau nhận màu lạnh.

Cách phối này thường tạo cảm giác điện ảnh vì hai vùng màu có thể tách nhau rất rõ.

#### Analogous

Analogous colors là các màu nằm gần nhau trên color wheel.

Ví dụ:

```text
Blue
→ Cyan
→ Green
```

hoặc:

```text
Red
→ Orange
→ Yellow
```

Analogous scheme thường:

* ít tương phản hue hơn;
* tạo cảm giác thống nhất;
* dễ hình thành mood rõ ràng;
* phù hợp với scene cần sự mềm mại và nhất quán.

Ví dụ, một shot mùa thu có thể sử dụng:

* vàng;
* cam;
* đỏ cam.

Trong trường hợp này, hierarchy cần được tạo thêm bằng:

* brightness;
* saturation;
* vị trí nguồn sáng;
* shadow;
* contrast với background.

---

### 4.2. Triadic và palette tham chiếu

#### Triadic

Triadic scheme sử dụng ba hue phân bố tương đối đều trên color wheel.

Có thể hình dung như một tam giác:

```text
           Color A
             ▲
            / \
           /   \
          /     \
    Color B --- Color C
```

Triadic scheme hữu ích khi muốn có ba màu khác nhau nhưng vẫn giữ quan hệ tương đối cân bằng.

Tuy nhiên:

> Có ba light không có nghĩa bắt buộc phải sử dụng triadic scheme.

Số lượng nguồn sáng và số lượng hue là hai khái niệm khác nhau.

Một setup Three-Point Lighting hoàn toàn có thể dùng:

```text
Key  → màu ấm
Fill → trắng trung tính
Rim  → màu lạnh
```

hoặc chỉ sử dụng hai hue complementary.

#### Palette từ hình ảnh tham chiếu

Ngoài color wheel, có thể nghiên cứu palette từ:

* phim;
* ảnh chân dung;
* concept art;
* quảng cáo;
* game cinematic;
* ảnh sản phẩm.

Khi dùng reference, không nên chỉ lấy ba mã màu rồi áp vào đèn.

Cần nghiên cứu cả:

```text
Màu nào nằm ở subject?
Màu nào nằm ở background?
Màu nào sáng nhất?
Màu nào chỉ xuất hiện ở rim?
Vùng nào gần như không có màu?
Màu nóng và lạnh được đặt ở đâu?
```

Bố trí màu quan trọng không kém việc lựa chọn màu.

---

## 5. Phân vai màu cho Key, Fill và Rim

Trong Three-Point Lighting, mỗi light đã có vai trò về cường độ và hình khối. Khi thêm màu, hierarchy này vẫn cần được giữ nguyên.

Một ví dụ:

| Light        | Vai trò           | Màu               |
| ------------ | ----------------- | ----------------- |
| `Key Light`  | Định hình subject | Xanh lam          |
| `Fill Light` | Nâng vùng shadow  | Đỏ hoặc trắng yếu |
| `Rim Light`  | Tách silhouette   | Vàng cát          |

Điều quan trọng không phải là tất cả các light đều phải khác màu.

Một setup thường dễ kiểm soát hơn khi:

```text
1 màu chính
+
1 màu đối lập hoặc hỗ trợ
+
1 nguồn trung tính hoặc rất nhẹ
```

Ví dụ cinematic phổ biến:

```text
Key
→ warm orange

Fill
→ neutral / cool nhẹ

Rim
→ cyan / blue
```

Key vẫn phải giữ vai trò chính về mặt thị giác.

Nếu rim có saturation và brightness quá cao:

```text
Rim quá nổi
      ↓
Mắt bị kéo khỏi subject chính
      ↓
Hierarchy bị phá
```

Do đó màu sắc phải hỗ trợ vai trò của light, không thay thế vai trò đó.

---

## 6. Hue, saturation và brightness phải được kiểm soát riêng

Khi thay đổi màu của light, người học dễ chỉ quan tâm tới hue.

Nhưng perception thực tế còn phụ thuộc vào:

* hue;
* saturation;
* luminance;
* power;
* exposure;
* material của subject.

Một màu rất saturated có thể trông mạnh hơn một màu khác ngay cả khi hai light có power tương tự.

Ví dụ:

```text
Màu xanh nhẹ
→ giữ nhiều chi tiết da

Màu xanh bão hòa mạnh
→ màu material bị áp đảo
→ mất variation
→ shadow khó đọc
```

Đây là lý do khi thử palette cần giữ các yếu tố khác càng ổn định càng tốt.

Một quy trình kiểm thử tốt:

```text
Giữ camera
Giữ position light
Giữ light size
Giữ exposure
Giữ World lighting
      ↓
Chỉ thay đổi palette
```

Nhờ đó có thể đánh giá màu sắc thay vì vô tình so sánh hai lighting setup khác nhau hoàn toàn.

---

## 7. Xây dựng complementary lighting

Một bài thử đơn giản là sử dụng hai màu bổ sung.

Ví dụ:

```text
Warm Orange
      ↕
Cool Blue
```

Có thể bố trí:

```text
       Blue Rim
          \
           \
        Subject
          /
         /
   Orange Key
```

Trong setup này:

* key ấm giúp tạo vùng chính;
* rim lạnh tách subject khỏi background;
* fill có thể giữ trung tính hoặc rất nhẹ.

Nếu cả hai màu đều quá saturated, hình ảnh dễ trở thành artificial hoặc mất chi tiết.

Do đó nên bắt đầu với saturation thấp hơn rồi tăng dần.

Một nguyên tắc thực hành hữu ích:

```text
Bắt đầu nhẹ
      ↓
Tăng saturation từ từ
      ↓
Dừng khi màu đã đọc rõ
      ↓
Không tăng chỉ vì muốn màu "mạnh hơn"
```

---

## 8. Xây dựng analogous lighting

Với analogous scheme, các màu gần nhau tạo một atmosphere thống nhất.

Ví dụ:

```text
Yellow
  ↓
Orange
  ↓
Red
```

Một scene có thể sử dụng:

```text
Key  → vàng cam

Fill → cam

Rim  → đỏ cam
```

Kết quả thường mềm và cohesive hơn complementary scheme.

Tuy nhiên, vì hue không tạo separation mạnh, cần dựa nhiều hơn vào:

* light intensity;
* value contrast;
* background;
* rim placement;
* shadow depth.

Nếu toàn bộ scene đều có cùng độ sáng và saturation, subject có thể hòa vào background dù palette đẹp.

---

## 9. Học từ phim và hình ảnh tham chiếu

Một trong những cách tốt nhất để phát triển khả năng lighting là phân tích các frame có chất lượng cao.

Không chỉ hỏi:

> Họ dùng màu gì?

Hãy phân tích:

```text
Nguồn sáng chính ở đâu?
      ↓
Màu chính là gì?
      ↓
Màu đối lập nằm ở đâu?
      ↓
Shadow sâu tới mức nào?
      ↓
Background sáng hơn hay tối hơn subject?
      ↓
Rim xuất hiện ở vùng nào?
```

Ví dụ, nếu một frame có orange-and-teal look:

* không nhất thiết toàn bộ vùng sáng đều orange;
* không nhất thiết toàn bộ shadow đều teal;
* một số vùng có thể gần trung tính;
* màu mạnh thường chỉ được sử dụng ở những vị trí có chủ đích.

Mục tiêu khi nghiên cứu reference là học cả:

```text
Color selection
+
Color placement
+
Light direction
+
Contrast
```

chứ không chỉ sao chép mã màu.

---

## 10. Dùng black flag để kiểm soát ánh sáng

Ngoài việc thêm light, lighting còn bao gồm việc loại bỏ ánh sáng khỏi những vùng không cần thiết.

Trong studio, một `black flag` là bề mặt tối được sử dụng để chặn hoặc hạn chế ánh sáng.

Trong Blender, có thể mô phỏng bằng một object đặt giữa nguồn sáng và subject.

```text
Light
  ↓
Black Flag
  ↓
Shadow / Blocked Region
  ↓
Subject
```

Flag có thể giúp:

* tạo shadow có chủ đích;
* giảm ánh sáng ở một vùng;
* tăng contrast;
* hướng mắt người xem;
* tạo pattern ánh sáng.

Ví dụ, nếu mặt subject nhận ánh sáng quá đều, một flag có thể che một phần nguồn sáng để tạo shadow thú vị hơn.

Tuy nhiên cần tránh để object chặn sáng xuất hiện trong camera hoặc tạo shadow không mong muốn ở các khu vực khác.

---

## 11. Thực hành

Sử dụng cùng một scene Three-Point Lighting và giữ nguyên:

* camera;
* model;
* vị trí light;
* kích thước light;
* exposure;
* World lighting.

### Bài thử A — Complementary palette

Chọn một cặp complementary, ví dụ:

```text
Orange
↕
Blue
```

Thiết lập:

* `Key Light`: orange;
* `Rim Light`: blue;
* `Fill Light`: trắng hoặc màu rất nhẹ.

Quan sát:

* subject có tách khỏi background không;
* màu nào thu hút mắt đầu tiên;
* vùng da hoặc material có mất chi tiết không;
* rim có quá nổi không.

### Bài thử B — Analogous palette

Chọn một palette tương đồng, ví dụ:

```text
Yellow
→ Orange
→ Red
```

Gán các màu cho key, fill và rim.

Giữ nguyên các thông số exposure để so sánh công bằng với setup trước.

Quan sát:

* mood thay đổi như thế nào;
* separation có yếu đi không;
* có cần giảm saturation hay thay đổi background không.

### Bài thử C — Reference study

Chọn một frame từ phim hoặc ảnh tham chiếu.

Không thay đổi geometry.

Chỉ cố tái tạo:

* màu key;
* màu rim;
* màu background;
* tỷ lệ sáng/tối;
* hướng ánh sáng.

Mục tiêu không phải sao chép tuyệt đối mà là hiểu logic bố trí màu của reference.

---

## 12. Lỗi thường gặp

**Hiện tượng:** Scene có quá nhiều màu và không biết nhìn vào đâu.
**Nguyên nhân:** Mọi light đều có saturation và visual weight tương tự nhau.
**Cách xử lý:** Chọn một màu chính, giảm saturation hoặc intensity của các màu hỗ trợ.

**Hiện tượng:** Rim light màu rất đẹp nhưng chiếm toàn bộ sự chú ý.
**Nguyên nhân:** Rim vừa sáng vừa saturated hơn key.
**Cách xử lý:** Giảm `Power`, `Exposure` hoặc saturation của rim.

**Hiện tượng:** Material không còn đọc được màu gốc.
**Nguyên nhân:** Colored light quá saturated hoặc quá mạnh.
**Cách xử lý:** Giảm saturation và kiểm tra lại lighting bằng light trung tính.

**Hiện tượng:** Complementary palette trông quá gắt.
**Nguyên nhân:** Hai màu đối lập đều được dùng ở saturation tối đa.
**Cách xử lý:** Giảm saturation của ít nhất một màu hoặc thêm vùng trung tính.

**Hiện tượng:** Analogous palette khiến subject hòa vào background.
**Nguyên nhân:** Hue, brightness và saturation giữa subject với background quá giống nhau.
**Cách xử lý:** Tạo separation bằng value, rim hoặc background lighting.

**Hiện tượng:** Hai palette được so sánh nhưng kết quả sáng tối khác nhau hoàn toàn.
**Nguyên nhân:** Đồng thời thay đổi cả màu và exposure.
**Cách xử lý:** Giữ exposure và các thông số lighting khác ổn định khi thử palette.

---

## 13. Best practices

* Xác định mood trước khi chọn màu.
* Chọn một màu chủ đạo thay vì để mọi màu cạnh tranh ngang nhau.
* Dùng complementary scheme khi cần contrast mạnh.
* Dùng analogous scheme khi cần cảm giác thống nhất.
* Không sử dụng triadic chỉ vì scene có ba light.
* Giữ một số vùng trung tính để mắt có chỗ nghỉ.
* Tăng saturation có kiểm soát.
* Luôn kiểm tra xem material còn giữ được detail hay không.
* Phân tích vị trí màu trong reference, không chỉ lấy mã màu.
* Tắt từng light riêng để hiểu vai trò màu của từng nguồn.
* Khi so sánh palette, giữ exposure và geometry ổn định.
* Lưu các setup màu hiệu quả thành preset hoặc ghi lại giá trị để có thể tái sử dụng.

---

## 14. Checklist hoàn thành

* [ ] Chọn được mood trước khi xây dựng palette.
* [ ] Phân biệt được complementary, analogous và triadic scheme.
* [ ] Xác định được màu chủ đạo của shot.
* [ ] Mỗi màu trong key, fill và rim có vai trò rõ ràng.
* [ ] Key vẫn giữ visual hierarchy chính.
* [ ] Fill không cạnh tranh với key.
* [ ] Rim hỗ trợ separation thay vì thu hút toàn bộ sự chú ý.
* [ ] Saturation không làm mất chi tiết material.
* [ ] Complementary palette được thử với exposure ổn định.
* [ ] Analogous palette được thử trên cùng điều kiện lighting.
* [ ] Phân tích được cách bố trí màu từ ít nhất một hình tham chiếu.
* [ ] Biết sử dụng black flag để chặn ánh sáng khi cần.
* [ ] Lưu lại preset hoặc thông số màu cho shot.

---

## 15. Tổng kết

Colorful lighting là sự kết hợp giữa kỹ thuật chiếu sáng và color composition.

Color wheel cung cấp các quan hệ màu hữu ích như:

```text
Complementary
→ contrast mạnh

Analogous
→ hài hòa và thống nhất

Triadic
→ đa dạng màu nhưng vẫn có cấu trúc
```

Tuy nhiên, palette đẹp chưa đủ.

Một lighting setup tốt còn phải kiểm soát:

```text
Color
+
Intensity
+
Saturation
+
Placement
+
Shadow
+
Visual hierarchy
```

`Key Light`, `Fill Light` và `Rim Light` có thể mang các màu khác nhau, nhưng mỗi light vẫn phải thực hiện đúng vai trò của nó.

Nguyên tắc quan trọng nhất là:

```text
Màu sắc không chỉ để trang trí
        ↓
Màu sắc phải phục vụ mood
        +
hướng mắt
        +
separation
        +
câu chuyện của shot
```

Khi luyện tập thường xuyên với color wheel, reference từ phim và nhiều variation trên cùng một scene, khả năng lựa chọn và bố trí ánh sáng màu sẽ dần trở thành một phần tự nhiên của quá trình art direction.
