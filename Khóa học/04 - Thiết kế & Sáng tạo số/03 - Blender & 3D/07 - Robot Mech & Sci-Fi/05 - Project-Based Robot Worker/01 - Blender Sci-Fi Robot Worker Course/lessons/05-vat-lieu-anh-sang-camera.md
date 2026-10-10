# Bài 05 — Thiết lập vật liệu kim loại, ánh sáng và camera cho robot

## 1. Tóm tắt

Modeling tạo nên hình khối, còn vật liệu và ánh sáng quyết định hình khối đó được cảm nhận như kim loại, nhựa, đèn tín hiệu hay thiết bị công nghiệp. Bài học sử dụng **Eevee**, ánh sáng môi trường từ HDRI, `Area Light` và mạng node trong `Shader Editor` để tạo robot sci-fi có màu kim loại tối, điểm nhấn cam và chi tiết xanh phát sáng. Cuối bài bạn sẽ bố trí camera cho một bản render trình bày nhân vật.

## 2. Mục tiêu học tập

- Chọn render engine phù hợp với hoạt hình và kiểm tra chế độ xem kết quả.
- Nạp HDRI vào `World` để tạo phản chiếu và ánh sáng môi trường.
- Bố trí `Area Light` có màu sắc tương phản và camera với tỷ lệ khung hình chủ động.
- Tạo vật liệu `Principled BSDF` với biến thể kim loại, nhựa và phần phát sáng.
- Gán một vật liệu cho nhiều object, hoặc nhiều vật liệu lên các face khác nhau.
- Kiểm tra tác động của `Apply Scale/Rotation` đối với tỷ lệ procedural texture và rig.

## 3. Chọn Eevee và xây dựng hệ ánh sáng

Eevee là lựa chọn trong khóa học bởi khả năng xem trước và kết xuất hoạt hình nhanh. `Cycles` có thể dùng nếu muốn ưu tiên giải pháp ray tracing khác, nhưng thời gian render và kết quả ánh sáng sẽ không giống hoàn toàn. Một số tùy chọn ở phiên bản Eevee cũ (chẳng hạn `Bloom`, `Screen Space Reflections` hay `Ambient Occlusion` theo cách hiển thị cũ) có thể đổi vị trí hoặc được thay thế trong phiên bản Blender mới; dùng chức năng tương đương nếu có.

### 3.1. Nạp HDRI vào World

1. Trong `Render Properties`, chọn **Eevee**.
2. Mở `World Properties`, ở mục màu của `Surface` chọn `Environment Texture`.
3. Mở HDRI **Auto Shop 01**, bản `1K HDR` từ Poly Haven.
4. Chuyển `3D Viewport` sang chế độ `Rendered` để xem ánh sáng phản chiếu lên robot.
5. Tinh chỉnh `World Strength`; giá trị **1.5** được sử dụng như một mốc tham khảo trong dự án.
6. Nếu chỉ muốn giữ ánh sáng HDRI mà không thấy nền HDRI trong ảnh, bật `Render Properties → Film → Transparent`.

HDRI không chỉ làm sáng mô hình. Nó còn cung cấp các dải phản chiếu có hình dạng phong phú, nhờ đó bề mặt kim loại có thể hiện rõ độ cong và các mép vát.

### 3.2. Bổ sung Area Light hai màu

Thêm `Area Light` (`Shift+A → Light → Area`). Di chuyển và xoay đèn để hướng vào robot. Trong thuộc tính đèn, đổi hình dạng từ vuông sang **Rectangle** nếu muốn một dải sáng dài chạy theo chiều cao robot. Trong ví dụ, một đèn có năng lượng khoảng **2000** trước khi hoàn thiện vật liệu; cần điều chỉnh lại theo kích thước scene, renderer và độ sáng thực tế.

Nhân đèn bằng `Shift+D`, xoay sang phía khác. Dùng một đèn **vàng/cam ấm** và một đèn **xanh lạnh** để tạo tương phản màu sci-fi. Khi dùng vật liệu trắng tạm, ảnh có thể cháy sáng; sau khi gán vật liệu kim loại tối, highlight dễ đọc hơn. Đừng xem công suất 2000 là giá trị bắt buộc cho mọi scene.

## 4. Đặt camera để trình bày robot

Thêm `Camera` qua `Shift+A`, điều hướng viewport tới góc bố cục mong muốn và dùng `Ctrl+Alt+Numpad 0` để căn camera theo góc nhìn. `Numpad 0` giúp chuyển qua `Camera View`. Trong một số thao tác, nhấn `G Z Z` để di chuyển camera dọc trục cục bộ hoặc `R R` để xoay kiểu trackball.

Ảnh tĩnh có thể sử dụng độ phân giải **1440 × 1440** để có bố cục vuông. Ở `Camera Properties`, tiêu cự mặc định phổ biến là khoảng `50 mm`; trong dự án, mức khoảng **70–80 mm** được lựa chọn để tạo dáng ít méo phối cảnh hơn. Tiêu cự lớn không tự động làm camera lùi lại; phải điều chỉnh vị trí camera để thấy toàn bộ robot.

## 5. Tạo vật liệu kim loại cơ bản

### 5.1. Shader Editor và bề mặt PBR

Chọn một object lớn của robot, chuyển đến `Shading` và tạo một material mới, ví dụ `Base_Metal`. Vật liệu dựa trên `Principled BSDF`; điều chỉnh `Base Color`, `Metallic` và `Roughness` cho hợp với bề mặt thép được sơn/đánh mờ. Vùng **kim loại có độ nhám nhất định** thường đọc hình khối rõ hơn một bề mặt bóng gương toàn phần.

Trong quy trình này còn dùng `Ambient Occlusion`, `ColorRamp` và `Noise Texture` để tạo biến thiên sáng tối nhỏ trên kim loại. `Ambient Occlusion` làm tối khu vực hốc, kẽ và vùng bị che; `ColorRamp` giúp kiểm soát dải đen–xám của hiệu ứng. `Noise Texture` có thể tạo sự không đồng nhất tinh tế, giúp màu bề mặt bớt phẳng.

Ví dụ luồng ý tưởng:

```text
Ambient Occlusion ──> ColorRamp ──> màu nền kim loại
Noise Texture ──> biến thiên màu/độ nhám khi cần
Principled BSDF ──> Material Output
```

Đây là sơ đồ chức năng rút gọn. Cách nối node cụ thể tùy shader và phiên bản Blender; không phải mọi phiên bản hỗ trợ node và Eevee AO theo giao diện cũ.

### 5.2. Gán đồng loạt và chuẩn hóa transform

Sau khi tạo một vật liệu dùng chung, có thể chọn nhiều object robot, chọn object mang material mong muốn **cuối cùng** làm active rồi `Ctrl+L → Link Materials`. Nhờ vậy toàn bộ các bộ phận dùng một material dữ liệu chung.

Nếu `Noise Texture` hiển thị lớn ở object này nhưng nhỏ ở object khác do tỷ lệ đối tượng khác nhau, có thể chọn toàn bộ các bộ phận phù hợp và dùng `Ctrl+A → Apply Scale`; đồng thời kiểm tra `Apply Rotation` khi chuẩn bị rig để rotation mặc định nhất quán. Chỉ apply transform khi hình dáng, vị trí và mối quan hệ đối tượng đang đúng. Trong ví dụ, `Noise Scale` khoảng **2** là một mốc có thể điều chỉnh, không phải hằng số bắt buộc.

## 6. Tạo biến thể kim loại tối và điểm nhấn cam

Thân robot cần sự phân cấp vật liệu. Dùng vật liệu kim loại nền cho đa số vỏ. Với hốc máy hoặc những mặt phải sẫm hơn:

1. Chọn object, chuyển `Edit Mode` và chọn những face cần gán màu khác.
2. Trong `Material Properties`, thêm một `Material Slot` mới.
3. Chọn material kim loại đã có, **nhân bản material thành datablock riêng** nếu muốn đổi màu độc lập.
4. Đặt tên `Dark_Metal`, giảm độ sáng của dải màu và nhấn `Assign` cho face đã chọn.

Tương tự, tạo `Orange_Metal` trên các mặt/cạnh điểm nhấn. Đổi màu sang cam–đỏ để tạo điểm nhận diện ở các phần của đầu và thân. Tránh để vật liệu phụ cùng chia sẻ datablock với material gốc nếu bạn muốn chỉnh màu mà không ảnh hưởng toàn bộ robot.

Các chi tiết nhựa hoặc lớp phủ không kim loại có thể dùng vật liệu khác với mức `Metallic` thấp hơn. Với các phần kim loại và bánh xe, hãy thay đổi đồng thời màu, độ nhám và kiểu phản xạ; chỉ đổi màu không phải lúc nào cũng thể hiện đúng chất liệu.

## 7. Tạo bộ phận xanh phát sáng

Chọn mắt, vòng đèn hoặc cảm biến đã dựng riêng, thêm material mới `Blue_Glow`. Vật liệu này sử dụng **Emission** hoặc ngõ phát sáng phù hợp trong shader, đặt màu xanh. Trong bài thực hành, mức `Emission Strength` khoảng **8** là điểm xuất phát cho độ sáng mạnh.

Hiệu ứng lan sáng (glow) còn phụ thuộc đường render và compositing. Ở một số bản Eevee cũ, có thể bật `Bloom`; ở giao diện khác, bạn có thể đạt hiệu ứng gần tương tự bằng node làm chói trong Compositor. Điều quan trọng là nhìn thấy **một tâm sáng có hình dạng rõ** chứ không phải một đốm trắng cháy sáng hoàn toàn.

## 8. Biểu tượng và chi tiết bề mặt

Các biểu tượng cảnh báo điện/nuclear hoặc biểu tượng hoạt động từ Pixabay có thể được đặt lên panel hoặc phần thân. Có thể dùng một hình phẳng với texture chứa alpha, căn hướng theo mặt vỏ, rồi điều chỉnh vật liệu trong suốt phù hợp. Nếu logo nằm lệch hoặc bị chìm, kiểm tra hướng mặt phẳng, scale và vị trí theo normal của bề mặt.

Lưu ý rằng các ảnh biểu tượng chỉ đóng vai trò chi tiết thiết kế: cốt lõi vẫn là hình khối, ánh sáng và vật liệu của robot.

## 9. Lab: Chuẩn bị ảnh trưng bày robot

**Yêu cầu:** tạo một bản render có HDRI, hai màu đèn bổ trợ, kim loại nền, kim loại tối, điểm nhấn cam và một vùng phát sáng xanh.

- [ ] HDRI nạp đúng, có reflection trên các cạnh kim loại.
- [ ] Hai `Area Light` không làm mất hoàn toàn độ chi tiết vùng sáng.
- [ ] Vật liệu nền được gán nhất quán các bộ phận chính.
- [ ] Một số face có material thứ hai và không thay đổi màu cả model ngoài ý muốn.
- [ ] Đã kiểm tra `Apply Scale/Rotation` ở các phần dự định rig.
- [ ] Camera thấy robot rõ, không cắt cụt chi tiết quan trọng.
- [ ] File được lưu.

**Bài tập mở rộng:** render cùng một góc hai phiên bản màu: cam–xanh và xám–xanh. So sánh mức độ đọc rõ các panel và silhouette.

## 10. Câu hỏi ôn tập

### Câu 1

HDRI mang lại lợi ích chính nào cho robot kim loại?

A. Tạo cấu trúc xương.  
B. Tự động tách mesh.  
C. Tạo ánh sáng môi trường và phản chiếu phong phú.  
D. Đặt các keyframe.

**Đáp án:** C. **Giải thích:** Bề mặt kim loại cần các vùng phản chiếu để thể hiện hình dáng.

### Câu 2

Khi liên kết material cho nhiều object bằng `Ctrl+L`, object nào nên là object được chọn active cuối cùng?

A. Object chứa material cần chia sẻ.  
B. Camera.  
C. Đèn Area Light.  
D. Object không có material.

**Đáp án:** A. **Giải thích:** Active object là nguồn material khi dùng `Link Materials`.

### Câu 3

Một điều cần kiểm tra khi procedural noise có kích thước khác nhau giữa các object là gì?

A. Số khung hình Timeline.  
B. Camera DOF.  
C. Vị trí video strip.  
D. Scale của các object và phép `Apply Scale`.

**Đáp án:** D. **Giải thích:** Transform của object có thể ảnh hưởng đến tỷ lệ texture theo kiểu tọa độ sử dụng.

### Câu 4

Tại sao cần tạo một bản sao material trước khi chỉnh màu riêng một số face?

A. Để xóa modifier.  
B. Để không thay đổi tất cả object/face đang dùng material gốc.  
C. Để tự tạo HDRI.  
D. Để khóa xoay robot.

**Đáp án:** B. **Giải thích:** Material datablock dùng chung sẽ phản ánh mọi thay đổi ở các nơi cùng tham chiếu.

### Câu 5

Chi tiết mắt xanh nên dùng nhóm thuộc tính shader nào để có ánh sáng tự thân?

A. `Mirror`.  
B. `Bevel`.  
C. `Emission`.  
D. `Parent`.

**Đáp án:** C. **Giải thích:** Emission điều khiển bề mặt phát sáng, khác với phản xạ của kim loại.

## 11. Tổng kết

Một robot sci-fi thuyết phục không cần mọi bộ phận đều bóng loáng. Kim loại nền, vùng tối, chi tiết nhựa và đèn xanh phải có vai trò tách bạch. HDRI kết hợp hai `Area Light` tạo những vùng highlight đọc được, trong khi camera và tiêu cự giúp hình dáng robot nổi bật trong ảnh trưng bày.
