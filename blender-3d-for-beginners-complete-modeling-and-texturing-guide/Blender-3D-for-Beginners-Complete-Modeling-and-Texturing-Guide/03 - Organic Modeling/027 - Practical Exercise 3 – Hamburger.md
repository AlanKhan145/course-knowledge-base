# 027 — Practical Exercise 3 – Hamburger

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 03 — Organic Modeling |
| **Bài học** | Practical Exercise 3 – Hamburger |
| **Thời lượng** | 13:01 |
| **Chủ đề chính** | Dựng bánh hamburger nhiều lớp |

## 1. Mục tiêu bài học

- Dựng một chiếc hamburger hoàn chỉnh gồm nhiều lớp xếp chồng: bánh mì trên/dưới, thịt, phô mai, rau xà lách, cà chua.
- Dùng Subdivision Surface để tạo độ phồng mềm cho từng lớp thực phẩm.
- Áp dụng noise/displacement texture hoặc sculpting để tạo bề mặt sần sùi tự nhiên cho vỏ bánh mì.
- Bố trí hạt mè (sesame seeds) bằng Particle System hoặc nhân bản thủ công (duplication).

## 2. Nội dung chính

Chiếc **hamburger** là bài tập tổng hợp, đòi hỏi dựng nhiều lớp hình khối khác nhau rồi xếp chồng đúng thứ tự vật lý: **bánh mì dưới (bun bottom)** — dạng bán cầu dẹt; **thịt (patty)** — hình trụ dẹt với viền hơi gợn không đều; **phô mai (cheese slice)** — một tấm mỏng vuông/tròn với các cạnh chảy rủ xuống patty; **rau xà lách (lettuce)** — nhiều lớp mỏng gợn sóng nhô ra ngoài rìa các lớp khác; **cà chua (tomato)** — vài lát hình trụ mỏng; và **bánh mì trên (bun top)** — dạng bán cầu phồng cao, phủ hạt mè.

Mỗi lớp được dựng từ một primitive cơ bản (UV Sphere cho bun, Cylinder cho patty/tomato, Plane hoặc Cylinder dẹt cho cheese/lettuce), sau đó tinh chỉnh hình dáng bằng Extrude/Scale/Proportional Editing và luôn kèm **Subdivision Surface Modifier** để giữ độ phồng mềm mại tự nhiên của thực phẩm — tránh các cạnh góc cứng đặc trưng của hard-surface.

Bề mặt **vỏ bánh mì (bun)** cần độ sần sùi đặc trưng thay vì nhẵn bóng. Có hai hướng xử lý: (1) dùng **Displacement** thông qua một **Noise Texture** trong Shader Editor kết hợp Displacement node vào Material Output (yêu cầu bật `Displacement and Bump` trong Settings của Material, hoặc dùng **Displace Modifier** với texture Noise ở cấp mesh để biến dạng hình học thật); hoặc (2) **sculpt nhẹ** bằng brush Clay Strips/Draw ở độ phân giải Multiresolution vừa phải để tạo các gợn lồi lõm ngẫu nhiên trên vỏ bánh, mang lại cảm giác nướng tự nhiên hơn là chỉ đổi bump map.

Chi tiết **hạt mè** trên mặt bánh mì trên là điểm nhấn cuối: mỗi hạt mè là một mesh nhỏ (Ico Sphere kéo dẹt hoặc Cube bo cạnh). Để rải hàng chục hạt mè lên bề mặt cong của bun mà không phải đặt tay từng cái, dùng **Particle System** ở chế độ **Hair** (dùng làm object instancing) với Render As = **Object**, chọn hạt mè làm Instance Object, giới hạn phân bố bằng **Vertex Group** hoặc Weight Paint để mè chỉ xuất hiện ở nửa trên của bun, kèm chỉnh Rotation ngẫu nhiên (Randomize) để hạt mè không nằm cùng một hướng. Cách thay thế đơn giản hơn (phù hợp số lượng ít) là nhân bản thủ công bằng `Shift + D` kết hợp Shrinkwrap Modifier để mỗi hạt mè tự bám dính đúng theo bề mặt cong của bun.

## 3. Quy trình thực hành gợi ý

1. Dựng bun dưới từ UV Sphere cắt nửa dưới, làm phẳng đáy, thêm Subdivision Surface.
2. Dựng patty từ Cylinder dẹt, dùng Proportional Editing làm viền hơi gợn sóng không đều.
3. Dựng cheese từ Plane vuông, Extrude nhẹ độ dày, kéo rủ các góc xuống bằng Proportional Editing.
4. Dựng lettuce từ vài Plane xếp lớp, thêm Loop Cut và Displace/sculpt nhẹ để tạo gợn sóng rìa lá.
5. Dựng vài lát tomato từ Cylinder mỏng.
6. Dựng bun trên từ UV Sphere phồng cao hơn bun dưới, thêm Subdivision Surface.
7. Thêm Noise Texture qua Displace Modifier (hoặc sculpt Clay Strips) trên cả hai lớp bun để tạo bề mặt sần.
8. Dựng một hạt mè mẫu, thiết lập Particle System (Hair, Render As Object) trên bun trên, giới hạn bằng Vertex Group ở nửa trên, bật Rotation Randomize.
9. Xếp chồng toàn bộ các lớp theo đúng thứ tự vật lý, căn chỉnh khoảng cách hợp lý giữa các lớp.
10. Shade Smooth toàn bộ, kiểm tra lại từ góc nhìn phối cảnh 3/4.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt |
|---|---|
| Thêm Displace Modifier | `Add Modifier > Deform > Displace` |
| Thêm Particle System | Particle Properties > `+` |
| Nhân bản đối tượng | `Shift + D` |
| Thêm Shrinkwrap Modifier | `Add Modifier > Deform > Shrinkwrap` |
| Vẽ Vertex Group (Weight Paint) | Chuyển Mode sang `Weight Paint` |
| Proportional Editing | `O` |

## 5. Lưu ý & lỗi thường gặp

- Các lớp thực phẩm chồng khít hoàn toàn phẳng, không có độ lệch/xô nhẹ tự nhiên trông giả tạo — nên xoay/dịch nhẹ ngẫu nhiên mỗi lớp.
- Noise Texture với Scale quá lớn hoặc Strength quá cao trên Displace khiến vỏ bánh biến dạng méo mó thay vì chỉ sần nhẹ.
- Particle System rải hạt mè không giới hạn Vertex Group khiến mè lan cả xuống mặt dưới/mặt bên bun.
- Quên bật Rotation Randomize khiến toàn bộ hạt mè nằm cùng hướng, trông như in khuôn.
- Không Apply Subdivision Surface trước khi thêm Particle System đôi khi khiến mật độ phân bố hạt không đều do khác biệt giữa mesh gốc và mesh hiển thị.

## 6. Checklist thực hành

- [ ] Đã dựng đủ 6 lớp: bun dưới, patty, cheese, lettuce, tomato, bun trên.
- [ ] Mỗi lớp có Subdivision Surface tạo độ phồng mềm phù hợp.
- [ ] Vỏ bánh mì có bề mặt sần tự nhiên (Displace hoặc sculpt).
- [ ] Hạt mè được rải tự động bằng Particle System hoặc nhân bản có Shrinkwrap.
- [ ] Toàn bộ các lớp xếp chồng đúng thứ tự, tỷ lệ hợp lý.

## 7. Tóm tắt

Bài hamburger tổng hợp gần như toàn bộ kỹ thuật organic đã học trong module — Subdivision Surface, Proportional Editing, Displacement/sculpting và Particle System instancing — để tạo ra một vật thể nhiều lớp phức tạp nhưng vẫn giữ được cảm giác mềm mại, tự nhiên của thực phẩm.
