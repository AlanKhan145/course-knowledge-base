# 037 — Creating Gobo Light Effects

**Phần:** 04 — Lights
**Thời lượng:** 3:58
**Chủ đề:** Gobo và pattern chiếu lên bề mặt
**Loại bài:** lesson

---

## 1. Tóm tắt

`Gobo` là kỹ thuật tạo pattern bằng ánh sáng, cho phép mô phỏng những hiện tượng như:

* ánh nắng xuyên qua tán cây;
* bóng cửa sổ;
* rèm hoặc song sắt;
* lưới;
* logo;
* họa tiết kiến trúc;
* những vùng sáng tối phức tạp mang tính điện ảnh.

Thay vì chỉ chiếu một vùng sáng đều, gobo làm thay đổi cường độ ánh sáng theo một texture hoặc một vật cản.

```text
Light
   ↓
Gobo Pattern
   ↓
Vùng sáng / tối có cấu trúc
   ↓
Subject + Background
```

Gobo đặc biệt hữu ích khi một scene đơn giản cần thêm cảm giác về môi trường mà không phải dựng toàn bộ những vật thể nằm ngoài camera.

Ví dụ, chỉ bằng pattern lá cây, người xem có thể cảm nhận rằng ánh sáng đang đi qua một tán cây dù trong scene không có cây hoàn chỉnh.

---

## 2. Mục tiêu học tập

Sau khi hoàn thành bài này, người học có thể:

* Giải thích được gobo là gì và vì sao nó hữu ích trong lighting.
* Phân biệt được gobo bằng texture với gobo bằng geometry.
* Thiết lập pattern cho một nguồn sáng bằng node khi phù hợp.
* Căn hướng chiếu để pattern nằm đúng trên subject hoặc background.
* Điều chỉnh scale và rotation của pattern.
* Kiểm soát độ sắc hoặc mềm của pattern.
* Kết hợp gobo với HDRI mà vẫn giữ hierarchy ánh sáng.
* Phối màu gobo với màu môi trường để tạo mood.
* Đánh giá xem pattern đang hỗ trợ hay cạnh tranh với subject.
* Tạo phiên bản bật/tắt gobo để thực hiện A/B test.

---

## 3. Gobo là gì?

Tên `gobo` thường được dùng cho một mask, pattern hoặc vật cản đặt trên đường đi của ánh sáng.

Mục tiêu là thay đổi hình dạng vùng sáng trước khi ánh sáng tới subject.

```text
Nguồn sáng đều
      ↓
Mask / Texture
      ↓
Một số vùng được truyền sáng
Một số vùng bị giảm hoặc chặn
      ↓
Pattern xuất hiện trên bề mặt
```

Trong môi trường thực, gobo thường được sử dụng với projector hoặc spotlight.

Trong Blender, có thể tạo hiệu ứng tương tự bằng nhiều cách, chẳng hạn:

* texture trong light shader;
* geometry đặt trước nguồn sáng;
* một plane có pattern phù hợp;
* hệ thống node hoặc projection phức tạp hơn.

Không phải lúc nào cũng cần giải pháp phức tạp nhất. Cách tốt nhất là cách cho phép kiểm soát pattern dễ dàng và tạo đúng kết quả mong muốn.

---

## 4. Hai cách xây dựng gobo phổ biến

### 4.1. Gobo bằng texture

Một texture có vùng sáng và tối được sử dụng để điều khiển lượng ánh sáng.

Ví dụ một texture mô phỏng lá cây:

```text
White / Bright
→ ánh sáng truyền qua mạnh

Black / Dark
→ ánh sáng bị giảm hoặc chặn

Gray
→ ánh sáng truyền qua một phần
```

Ưu điểm:

* dễ thay pattern;
* dễ scale;
* dễ rotate;
* không cần dựng nhiều geometry;
* phù hợp với pattern phức tạp.

Texture gobo có thể là:

* ảnh grayscale;
* ảnh có alpha;
* procedural texture;
* mask được tạo bằng node.

### 4.2. Gobo bằng geometry

Một cách khác là đặt vật thể thực giữa light và subject.

```text
Light
   ↓
Plane / Grid / Leaves / Slats
   ↓
Shadow
   ↓
Subject
```

Ví dụ:

* plane có các khe cửa sổ;
* Venetian blinds;
* một cụm lá đơn giản;
* lưới;
* vật thể cắt laser giả lập.

Ưu điểm của geometry gobo là shadow được hình thành trực tiếp từ hình học nên có thể dễ hiểu và có tính vật lý trực quan.

Cách này rất hữu ích khi muốn tạo:

* bóng cửa;
* song sắt;
* rèm;
* mesh có hình dạng cụ thể.

---

## 5. Xây dựng lighting nền trước khi thêm gobo

Gobo thường hoạt động tốt nhất khi không phải tự mình cung cấp toàn bộ ánh sáng cho scene.

Có thể sử dụng HDRI làm ánh sáng nền:

```text
HDRI
→ ambient lighting
→ reflection
→ môi trường cơ bản

Gobo Light
→ pattern
→ direction
→ focal emphasis
```

Trong `World Shader`, cấu trúc cơ bản là:

```text
Environment Texture
        ↓
Background
        ↓
World Output
```

Nếu HDRI quá mạnh, pattern gobo sẽ khó đọc.

Do đó có thể giảm `Background Strength` để ánh sáng môi trường chỉ đóng vai trò hỗ trợ.

Ví dụ:

```text
HDRI mạnh
→ shadow bị nâng quá nhiều
→ pattern yếu

HDRI vừa phải
→ vẫn có ambient light
→ pattern đọc rõ
```

Điều quan trọng không phải một giá trị strength cố định mà là tỷ lệ giữa ánh sáng môi trường và nguồn sáng tạo gobo.

---

## 6. Tạo gobo bằng Light Shader

Chọn nguồn sáng phù hợp, sau đó bật node cho light nếu workflow và loại light đang sử dụng hỗ trợ setup mong muốn.

Trong `Shader Editor`:

```text
Shader Editor
→ Object
→ chọn Light Object
→ Use Nodes
```

Light shader cơ bản thường chứa phần phát sáng.

Một texture hoặc mask có thể được đưa vào hệ thống node để điều khiển màu hoặc cường độ phát sáng.

Conceptual flow:

```text
Image Texture
      ↓
Mask / Color Processing
      ↓
Light Emission
      ↓
Pattern chiếu vào scene
```

Nếu dùng texture grayscale, nên coi texture đó như dữ liệu điều khiển:

```text
Trắng
→ sáng mạnh

Xám
→ sáng vừa

Đen
→ tối
```

Pattern cần có đủ contrast để đọc rõ sau khi đi qua hệ thống chiếu sáng.

---

## 7. Điều khiển tọa độ của pattern

Texture gobo thường cần được:

* phóng to;
* thu nhỏ;
* xoay;
* dịch chuyển.

Một chuỗi node điều khiển có thể được tổ chức theo logic:

```text
Texture Coordinate
        ↓
Mapping
        ↓
Image Texture
        ↓
Light Shader
```

`Mapping` cho phép thay đổi:

* `Location`;
* `Rotation`;
* `Scale`.

### Scale

Scale quyết định mật độ pattern.

Ví dụ:

```text
Pattern quá nhỏ
→ nhiều chi tiết nhỏ
→ dễ gây nhiễu hình ảnh

Pattern lớn hơn
→ mảng sáng tối lớn
→ dễ đọc composition
```

Với pattern lá cây, không phải lúc nào nhiều lá hơn cũng tốt. Một số mảng shadow lớn thường tạo kết quả điện ảnh hơn rất nhiều chi tiết nhỏ.

### Rotation

Rotation dùng để thay đổi hướng pattern.

Điều này đặc biệt quan trọng với:

* cửa sổ;
* thanh rèm;
* đường chéo;
* lưới;
* pattern có hướng rõ.

Pattern phải phù hợp với perspective và logic của nguồn sáng trong scene.

---

## 8. Căn hướng projector

Pattern chỉ hữu ích khi nó rơi đúng nơi.

Khi điều chỉnh gobo, cần quan sát đồng thời:

* vị trí light;
* rotation của light;
* vùng subject;
* background;
* kích thước pattern.

Một workflow hợp lý:

```text
Đặt light
    ↓
Hướng vào vùng cần chiếu
    ↓
Căn pattern
    ↓
Điều chỉnh scale
    ↓
Điều chỉnh rotation
    ↓
Kiểm tra từ camera
```

Không nên chỉ điều chỉnh từ góc nhìn tự do.

Pattern cuối cùng phải được đánh giá từ camera render.

Ví dụ, nếu vùng sáng quan trọng phải nằm trên mắt nhân vật nhưng chỉ nhìn đúng từ perspective tự do, thì composition vẫn thất bại.

---

## 9. Kiểm soát độ mềm của pattern

Một gobo quá sắc có thể trông giống texture được dán lên subject thay vì ánh sáng tự nhiên.

Ngược lại, nếu quá mờ, pattern gần như biến mất.

Mục tiêu là tìm mức transition phù hợp với loại nguồn sáng đang mô phỏng.

```text
Edge quá sắc
→ graphic
→ theatrical
→ đôi khi thiếu tự nhiên

Edge vừa mềm
→ giống ánh sáng thật hơn
→ vẫn đọc được pattern

Edge quá mềm
→ pattern mất cấu trúc
```

Độ mềm phụ thuộc vào nhiều yếu tố như:

* kích thước nguồn sáng;
* khoảng cách giữa nguồn sáng, vật cản và subject;
* cấu hình light;
* loại projection;
* độ blur trong texture hoặc node.

Nếu dùng geometry gobo, khoảng cách giữa vật cản và bề mặt nhận bóng cũng có ảnh hưởng mạnh tới hình dạng và độ rõ của shadow.

---

## 10. Ví dụ: ánh nắng xuyên qua tán cây

Một ứng dụng điển hình là tạo cảm giác ánh sáng mặt trời xuyên qua lá.

Có thể sử dụng:

* HDRI rừng hoặc môi trường ngoài trời;
* một nguồn sáng ấm có hướng;
* texture mask mô phỏng lá.

Lighting hierarchy:

```text
HDRI lạnh / trung tính
        ↓
Ambient environment

Gobo Light ấm
        ↓
Ánh nắng xuyên lá

Pattern lá
        ↓
Subject + Background
```

Kết quả có thể tạo cảm giác:

* đang ở gần cửa sổ nhìn ra cây;
* đang đứng trong rừng;
* ánh sáng buổi chiều;
* môi trường có vật cản nằm ngoài frame.

Đây là một ví dụ cho thấy lighting có thể cung cấp context mà không cần geometry đầy đủ.

---

## 11. Dùng màu để tăng cảm giác môi trường

Gobo không nhất thiết phải dùng ánh sáng trắng.

Ví dụ:

```text
Background / Ambient
→ lạnh

Gobo / Key
→ ấm
```

Sự tương phản warm–cool giúp pattern nổi bật và đồng thời tạo chiều sâu.

Một setup có thể sử dụng:

```text
HDRI
→ xanh lạnh nhẹ

Gobo Light
→ vàng / cam nhẹ
```

Khi đó người xem có thể cảm nhận:

```text
Không khí môi trường
+
ánh nắng trực tiếp
```

Tuy nhiên, màu gobo không nên saturated đến mức phá màu của material.

Nếu màu quá mạnh:

```text
Saturation cao
      ↓
Material mất màu gốc
      ↓
Pattern trở thành yếu tố chính
      ↓
Subject khó đọc
```

Do đó nên tăng saturation từ từ.

---

## 12. Gobo phải phục vụ composition

Một pattern đẹp vẫn có thể làm hỏng hình ảnh nếu đặt sai vị trí.

Ví dụ, pattern có thể:

* cắt ngang mắt;
* che focal point;
* tạo vùng sáng mạnh ngay cạnh khuôn mặt;
* làm background quá phức tạp;
* chia subject thành quá nhiều mảng nhỏ.

Trước khi giữ một gobo, hãy hỏi:

```text
Pattern có hướng mắt vào subject?
Pattern có làm silhouette rõ hơn?
Pattern có tạo thêm chiều sâu?
Pattern có cung cấp context?
```

Nếu câu trả lời đều là không, gobo có thể chỉ đang thêm noise.

Một nguyên tắc quan trọng:

> Pattern phải hỗ trợ hình ảnh, không phải chứng minh rằng scene đang sử dụng gobo.

---

## 13. Gobo trên subject và gobo trên background

Không nhất thiết pattern phải chiếu trực tiếp lên subject.

Có hai chiến lược chính:

### Chiếu lên subject

Phù hợp khi muốn:

* chia vùng sáng tối trên khuôn mặt hoặc cơ thể;
* tạo cảm giác ánh nắng xuyên vật cản;
* tăng texture thị giác.

### Chiếu lên background

Phù hợp khi muốn:

* tạo context;
* phá background phẳng;
* tăng depth;
* giữ subject sạch hơn.

Ví dụ:

```text
Subject
→ lighting tương đối đơn giản

Background
→ pattern cửa sổ

Kết quả
→ subject vẫn dễ đọc
→ scene có thêm ngữ cảnh
```

Đôi khi đây là lựa chọn tốt hơn việc đặt pattern phức tạp trực tiếp lên khuôn mặt.

---

## 14. A/B test gobo

Mỗi setup gobo nên có khả năng kiểm tra khi bật và tắt.

So sánh:

```text
Version A
→ Gobo OFF

Version B
→ Gobo ON
```

Quan sát:

* subject có dễ đọc hơn không;
* focal point có rõ hơn không;
* scene có thêm chiều sâu không;
* mood có phù hợp hơn không;
* pattern có làm frame rối hơn không.

Một effect chỉ nên được giữ lại nếu nó cải thiện hình ảnh.

Đây là nguyên tắc đặc biệt quan trọng khi sử dụng lighting effect vì những effect mới thường dễ tạo cảm giác thú vị lúc đầu nhưng không phải lúc nào cũng cải thiện composition.

---

## 15. Thực hành

Sử dụng một scene gồm:

* subject;
* background;
* camera;
* World lighting hoặc HDRI.

### Giai đoạn 1 — Thiết lập base lighting

Thiết lập HDRI hoặc ambient lighting ở mức vừa phải.

Mục tiêu:

* subject vẫn nhìn thấy được;
* scene chưa quá sáng;
* còn đủ contrast để gobo xuất hiện.

### Giai đoạn 2 — Tạo gobo light

Thêm `Spot` hoặc `Area Light` tùy setup.

Hướng nguồn sáng tới subject hoặc background.

Tạo pattern bằng:

* texture trong light shader; hoặc
* geometry đặt trước light.

### Giai đoạn 3 — Căn pattern

Điều chỉnh:

* vị trí;
* rotation;
* scale;
* vùng chiếu.

Đảm bảo pattern nằm đúng hướng từ camera.

### Giai đoạn 4 — Kiểm soát softness

Tạo ba phiên bản:

```text
A — Pattern sắc

B — Pattern mềm vừa

C — Pattern rất mềm
```

So sánh mức nào phù hợp nhất với scene.

### Giai đoạn 5 — Thử màu

Giữ ambient lighting lạnh nhẹ.

Đặt gobo ở tông ấm.

Sau đó thử ngược lại:

```text
Ambient ấm
+
Gobo lạnh
```

So sánh hai mood.

### Giai đoạn 6 — A/B test

Render hoặc chụp viewport:

```text
Gobo OFF
Gobo ON
```

Chỉ giữ gobo nếu phiên bản bật cải thiện composition hoặc storytelling.

---

## 16. Lỗi thường gặp

**Hiện tượng:** Texture đã được kết nối nhưng pattern gần như không nhìn thấy.
**Nguyên nhân:** Ánh sáng quá diffuse, HDRI quá mạnh hoặc pattern thiếu contrast.
**Cách xử lý:** Kiểm tra contribution của gobo light, giảm ambient lighting và tăng contrast của mask khi cần.

**Hiện tượng:** Pattern xuất hiện nhưng nằm sai hướng.
**Nguyên nhân:** Mapping hoặc rotation của projector chưa đúng.
**Cách xử lý:** Căn lại light và điều chỉnh rotation trong Mapping.

**Hiện tượng:** Pattern quá nhỏ và rối.
**Nguyên nhân:** Scale texture không phù hợp.
**Cách xử lý:** Tăng kích thước các mảng sáng tối và đánh giá từ camera.

**Hiện tượng:** Pattern nhìn như texture dán lên model.
**Nguyên nhân:** Edge quá sắc hoặc pattern không phù hợp với logic ánh sáng.
**Cách xử lý:** Làm mềm transition và kiểm tra hướng nguồn sáng.

**Hiện tượng:** Gobo làm mất sự chú ý khỏi khuôn mặt.
**Nguyên nhân:** Vùng sáng hoặc pattern mạnh nhất nằm sai vị trí.
**Cách xử lý:** Dịch pattern, giảm intensity hoặc chỉ chiếu gobo lên background.

**Hiện tượng:** Pattern bị mất khi bật HDRI.
**Nguyên nhân:** Ambient lighting nâng toàn bộ shadow quá cao.
**Cách xử lý:** Giảm `Background Strength` hoặc tăng tương phản giữa gobo và ambient light.

**Hiện tượng:** Màu gobo làm material mất chi tiết.
**Nguyên nhân:** Light quá saturated hoặc quá mạnh.
**Cách xử lý:** Giảm saturation, power hoặc exposure của nguồn gobo.

---

## 17. Best practices

* Bắt đầu với base lighting đơn giản trước khi thêm gobo.
* Dùng pattern có kích thước đủ lớn để đọc được ở camera cuối.
* Căn gobo từ camera render, không chỉ từ perspective view.
* Không để pattern che focal point một cách vô tình.
* Sử dụng gobo để tạo context hoặc hierarchy, không chỉ để trang trí.
* Giữ HDRI ở mức hỗ trợ nếu muốn pattern đọc rõ.
* Kiểm soát softness để gobo phù hợp với loại nguồn sáng được mô phỏng.
* Thử gobo trên background trước nếu pattern trên subject quá rối.
* Dùng color contrast có chủ đích giữa ambient và gobo.
* Tạo phiên bản bật/tắt để A/B test.
* Lưu lại texture, Mapping và light settings của những gobo hiệu quả để tái sử dụng.

---

## 18. Checklist hoàn thành

* [ ] Giải thích được gobo là gì.
* [ ] Phân biệt được texture gobo và geometry gobo.
* [ ] Tạo được một nguồn sáng có pattern.
* [ ] Gobo nằm đúng hướng chiếu.
* [ ] Scale của pattern phù hợp với composition.
* [ ] Rotation của pattern hợp lý.
* [ ] Kiểm soát được độ mềm của shadow.
* [ ] HDRI không làm pattern biến mất.
* [ ] Màu gobo hỗ trợ mood của scene.
* [ ] Saturation không làm mất detail của subject.
* [ ] Pattern không cạnh tranh với focal point.
* [ ] Biết khi nào nên chiếu pattern lên background thay vì subject.
* [ ] Có phiên bản gobo bật/tắt để A/B test.
* [ ] Lưu lại setup hiệu quả để tái sử dụng.

---

## 19. Tổng kết

Gobo biến một nguồn sáng đơn giản thành một công cụ tạo pattern.

```text
Light
+
Texture / Geometry Mask
+
Projection
=
Gobo Effect
```

Nó có thể mô phỏng nhiều loại ánh sáng giàu ngữ cảnh:

```text
Cửa sổ
Lá cây
Rèm
Lưới
Song sắt
Pattern kiến trúc
```

Một gobo hiệu quả cần kiểm soát đồng thời:

```text
Hướng
+
Scale
+
Rotation
+
Softness
+
Intensity
+
Color
+
Placement
```

Gobo không nên được đánh giá bằng độ phức tạp của pattern, mà bằng tác động của nó lên composition.

Nguyên tắc quan trọng nhất là:

```text
Gobo tốt
≠
pattern càng rõ càng tốt

Gobo tốt
=
pattern vừa đủ
+
đúng vị trí
+
đúng mood
+
hỗ trợ subject
```

Khi được sử dụng có chủ đích, gobo có thể khiến một scene đơn giản mang cảm giác có môi trường, chiều sâu và câu chuyện mà không cần bổ sung nhiều geometry.
