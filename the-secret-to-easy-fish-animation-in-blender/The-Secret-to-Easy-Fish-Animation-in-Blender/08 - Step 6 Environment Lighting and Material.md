# 08 — Bước 6: Đưa cá trở lại đại dương

| Thuộc tính | Nội dung |
|---|---|
| **Video** | The Secret to Easy Fish Animation in Blender! |
| **Đoạn** | Step six (bước cuối) |
| **Thời điểm** | 08:00–09:26 |
| **Chủ đề chính** | Môi trường đáy biển, Volume Scatter, hiệu ứng ống kính dưới nước, material cá, camera & render |

## 1. Mục tiêu bài học

- Dựng nhanh một môi trường "đáy đại dương" đáng tin cậy bằng texture miễn phí và ánh sáng đơn giản.
- Hiểu cách dùng **Volume Scatter** để mô phỏng sương mù/độ đục dưới nước.
- Áp dụng tư duy "logic quay phim thực tế" để chọn hiệu ứng hậu kỳ (Glare, Chromatic Aberration) hợp lý cho một cảnh quay dưới nước.
- Hoàn thiện vật liệu cá và chốt thiết lập camera/render cuối cùng trong Eevee.

## 2. Nội dung chính

**Nền đáy biển.** Tác giả dùng một **texture cát nhìn từ trên không (aerial beach texture), miễn phí và thuộc Public Domain, tải từ PolyHaven** — được chọn vì có kết cấu giống với loại cát phẳng thường thấy dưới đáy đại dương, nhưng có chủ đích **không để nó quá phẳng/đều** — cần thêm biến thiên (variation) để mặt đất trông tự nhiên hơn là một mặt phẳng lặp texture đơn điệu.

**Ánh sáng.** Thiết lập ánh sáng được giữ tối giản: chỉ dùng **một Area Light lớn, ánh sáng mềm (soft), chiếu từ phía trên** — mô phỏng ánh sáng mặt trời khuếch tán xuyên qua mặt nước, không cần nhiều nguồn sáng phức tạp.

**Sương mù dưới nước.** Để có hiệu ứng đục/mờ đặc trưng của môi trường nước (thường gọi là "hiệu ứng sương mù dưới nước cổ điển"), tác giả thêm một **khối Cube**, phóng to nó bao trùm cảnh, và gán cho nó một vật liệu dùng **Volume Scatter shader** (thay vì Surface shader thông thường) — shader này làm ánh sáng bị tán xạ khi đi qua "khối không khí/nước" bên trong Cube, tạo cảm giác độ sâu và độ đục tự nhiên. Tác giả lưu ý rõ: kỹ thuật này **làm tăng thời gian render**, nhưng đánh giá là "rất đáng giá" vì hiệu ứng thể tích (volume) mang lại chiều sâu hình ảnh đáng kể.

**Tư duy hậu kỳ theo logic quay phim thực tế.** Đây là một góc nhìn thú vị được tác giả áp dụng: hình dung cảnh 3D này như đang **mô phỏng một cảnh quay dưới nước thật** — trong đời thực, việc quay phim dưới nước gần như chắc chắn sẽ dùng một **lồng/vỏ bảo vệ máy quay chống nước (underwater housing)**, nghĩa là có **thêm một lớp kính** trước ống kính so với quay phim bình thường trên cạn. Từ logic đó, hậu quả hợp lý là ảnh sẽ có **nhiều hiện tượng quang học của ống kính hơn** — cụ thể là hiệu ứng **Glare** (lóe sáng ở vùng highlight) và **Chromatic Aberration** (sai lệch màu ở viền, do ánh sáng bị tán sắc qua nhiều lớp kính) — cả hai được thêm vào trong **Compositor**, cùng với một lớp **chỉnh màu tổng thể (color tint)** nghiêng về tông lạnh phù hợp không khí dưới nước.

**Hoàn thiện vật liệu cá.** Ở lớp cuối cùng ("quả anh đào trên đỉnh" — chi tiết tô điểm sau cùng), material của cá được tinh chỉnh thêm: thêm một chút **Subsurface Scattering (SSS)** tinh tế (mô phỏng ánh sáng xuyên nhẹ qua các mô mỏng như vây/da), cùng với **Glossy** (độ bóng) và **Bump** (độ gồ ghề vi mô) để da/vảy cá không phẳng lì. Tác giả gợi ý thêm: nếu muốn **"lạ mắt hơn"**, có thể dùng **Shape Keys** để làm các vây lắc lư nhẹ — nhưng đánh giá đây là mức độ chi tiết **có thể là quá nhiều công sức so với mức người xem thực sự nhận ra**, nên khẳng định rõ: việc làm vây chuyển động là **tùy chọn (optional)**, không phải bước bắt buộc của quy trình 10 phút này. Đây là một lưu ý quan trọng về việc phân bổ công sức hợp lý (biết dừng đúng lúc) trong một dự án có giới hạn thời gian.

**Camera & render.** Bước cuối cùng: thêm một **Camera**, đặt **Output thành định dạng video**, giữ nguyên **render engine là Eevee** (đúng lời hứa "real-time" từ đầu video), và render kết quả cuối cùng.

## 3. Quy trình thực hành gợi ý

1. Tải một texture cát/đáy biển miễn phí (Public Domain) từ PolyHaven, áp vào một mặt phẳng lớn làm nền, thêm biến thiên để tránh trông quá đều/phẳng.
2. Thêm một Area Light lớn, đặt phía trên cảnh, giảm cường độ và tăng kích thước để có ánh sáng mềm, khuếch tán.
3. Thêm một Cube, phóng to bao trùm cảnh, gán Volume Scatter shader để tạo hiệu ứng sương mù/độ đục dưới nước.
4. Thêm Camera, bật Compositor (Use Nodes), thêm node Glare và mô phỏng Chromatic Aberration, cùng một lớp chỉnh màu tông lạnh.
5. Tinh chỉnh material cá: thêm Subsurface Scattering nhẹ, điều chỉnh Glossy/Roughness và Bump cho phù hợp với vảy/da cá.
6. (Tùy chọn) Nếu có thời gian, thêm Shape Keys để vây lắc lư nhẹ — không bắt buộc.
7. Đặt Output Properties sang định dạng video, xác nhận Render Engine vẫn là Eevee, và render toàn bộ animation.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Vị trí |
|---|---|
| Thêm Volume Scatter cho vật liệu | Shader Editor > Add > Shader > Volume Scatter (nối vào ngõ Volume của Material Output) |
| Thêm Area Light | `Shift + A > Light > Area` |
| Bật Compositor và thêm node | Compositor Editor > bật "Use Nodes" > `Shift + A` |
| Thêm node Glare | Compositor > `Shift + A > Filter > Glare` |
| Đặt định dạng Output video | Output Properties > File Format > FFmpeg Video |
| Render toàn bộ animation | `Ctrl + F12` |

## 5. Lưu ý & lỗi thường gặp

- Volume Scatter làm tăng thời gian render đáng kể, đặc biệt nếu Cube bao trùm toàn bộ cảnh với mật độ tán xạ cao — cân nhắc kích thước Cube và giá trị Density cho phù hợp với thời gian render khả dụng.
- Texture đáy biển quá phẳng/đều (không thêm biến thiên) dễ bị nhận ra là "giả" ngay lập tức, dù các yếu tố khác (ánh sáng, volume) có tốt đến đâu.
- Đừng bỏ qua bước tư duy "logic quay phim thực tế" khi chọn hiệu ứng hậu kỳ — đây là cách tiếp cận hữu ích để quyết định hiệu ứng nào (Glare, Chromatic Aberration) thực sự hợp lý về mặt vật lý/quang học cho một cảnh cụ thể, thay vì thêm hiệu ứng một cách tùy tiện.
- Shape Keys cho vây là chi tiết **tùy chọn** — đầu tư quá nhiều thời gian vào chi tiết này có thể không tương xứng với hiệu quả thị giác thực tế mang lại, theo đúng đánh giá của tác giả.
- Vì cam kết ban đầu là chạy trong Eevee thời gian thực, không nên đổi sang Cycles ở bước render cuối trừ khi chấp nhận đánh đổi thời gian render tăng đáng kể.

## 6. Checklist thực hành

- [ ] Đã thiết lập nền đáy biển bằng texture PolyHaven có biến thiên tự nhiên.
- [ ] Đã thêm ánh sáng Area Light mềm từ phía trên.
- [ ] Đã tạo hiệu ứng sương mù dưới nước bằng Cube + Volume Scatter.
- [ ] Đã thêm hiệu ứng Glare/Chromatic Aberration và chỉnh màu trong Compositor.
- [ ] Đã hoàn thiện material cá với SSS, Glossy và Bump.
- [ ] Đã thêm Camera, đặt Output video, và render kết quả cuối cùng trong Eevee.

## 7. Tóm tắt

Bước cuối cùng biến chuyển động burst-and-coast đã hoàn thiện ở chương trước thành một cảnh hoàn chỉnh có tính thuyết phục về mặt hình ảnh — kết hợp môi trường đáy biển đơn giản, hiệu ứng thể tích, hậu kỳ dựa trên logic quay phim thực tế và material tinh tế cho cá — đồng thời nhắc nhở quan trọng: biết dừng đúng lúc (như việc để Shape Keys vây là tùy chọn) để giữ đúng tinh thần "dễ và nhanh" của toàn bộ kỹ thuật.
