# 048 — The Landscape

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 03 — Low-Poly Dinosaur |
| **Bài học** | The Landscape |
| **Thời lượng** | 6:32 |
| **Chủ đề chính** | Tạo cảnh quan và núi |

## 1. Mục tiêu bài học

- Tạo mặt đất (ground plane) và địa hình núi non làm bối cảnh cho nhân vật.
- Sử dụng Subdivide kết hợp Proportional Editing để tạo địa hình gồ ghề tự nhiên.
- Áp dụng phong cách low-poly cho cảnh quan (mặt phẳng góc cạnh, không quá mượt).
- Bố cục lại tỉ lệ giữa nhân vật và cảnh quan cho hợp lý.

## 2. Nội dung chính

Sau khi hoàn thiện nhân vật, bước tiếp theo là xây dựng bối cảnh xung quanh — một mặt đất có địa hình núi đồi đơn giản, phù hợp phong cách low-poly. Quy trình phổ biến:

1. Bắt đầu từ một **Plane** lớn, **Subdivide** nhiều lần (nhấp phải > Subdivide trong Edit Mode) để có đủ vertex tạo địa hình.
2. Bật **Proportional Editing (O)** với Falloff Smooth, chọn từng cụm vertex và kéo lên (G, Z) để tạo các ngọn đồi/núi nhấp nhô.
3. Với các đỉnh núi nhọn hơn, tắt Proportional Editing và kéo trực tiếp một vertex đơn lẻ lên cao để tạo đỉnh nhọn góc cạnh — đúng đặc trưng low-poly (các mặt tam giác/phẳng rõ nét thay vì địa hình mượt như thật).
4. Có thể dùng **Displace Modifier** với một texture Noise hoặc Clouds làm nguồn địa hình tự động, sau đó Apply Modifier rồi chỉnh tay lại các điểm chưa ưng ý — cách này giúp tạo địa hình nhanh hơn so với kéo tay hoàn toàn.

Về bố cục, nên đặt mặt đất và núi sao cho nhân vật khủng long đứng ở vị trí tiền cảnh (foreground) rõ ràng, các dãy núi lớn nằm ở hậu cảnh (background) để tạo chiều sâu (depth) cho cảnh. Có thể dùng nhiều lớp núi với khoảng cách xa dần để tăng cảm giác không gian rộng lớn.

Kích thước tổng thể của địa hình cần được cân nhắc theo tỉ lệ nhân vật: núi quá nhỏ sẽ không tạo được cảm giác hùng vĩ, quá to sẽ làm nhân vật bị "chìm" mất trong khung hình.

## 3. Quy trình thực hành gợi ý

1. Add > Mesh > Plane, Scale lớn để làm mặt đất chính.
2. Vào Edit Mode, Subdivide nhiều lần (điều chỉnh Number of Cuts trong panel Operator ở góc dưới trái).
3. Bật Proportional Editing, kéo các cụm vertex lên tạo đồi thấp ở gần, núi cao dần về xa.
4. Tắt Proportional Editing, chỉnh tay các đỉnh nhọn cho một số ngọn núi nổi bật.
5. Kiểm tra tỉ lệ núi so với nhân vật bằng cách đặt Camera hoặc xoay Perspective quan sát tổng thể.
6. Object > Shade Flat để giữ các mặt núi góc cạnh rõ ràng theo phong cách low-poly.
7. Đặt nhân vật khủng long vào vị trí phù hợp trên mặt đất (kiểm tra chân không bị lún/nổi so với mặt đất).

## 4. Phím tắt & công cụ liên quan

| Phím tắt | Chức năng |
|---|---|
| Right Click > Subdivide | Chia nhỏ mesh Plane thành lưới vertex dày hơn |
| O | Proportional Editing |
| G, Z | Kéo vertex lên tạo độ cao địa hình |
| Scroll Wheel (khi transform) | Điều chỉnh bán kính ảnh hưởng Proportional |
| Shift+D | Duplicate (nhân bản đồi/núi tương tự) |
| Numpad 0 | Vào view Camera để kiểm tra bố cục |

## 5. Lưu ý & lỗi thường gặp

- Subdivide quá ít lần khiến địa hình thiếu chi tiết để tạo dáng núi tự nhiên.
- Subdivide quá nhiều lần làm mesh nặng, khó thao tác và không còn phù hợp phong cách low-poly.
- Núi và nhân vật lệch tỉ lệ khiến bố cục tổng thể mất cân đối khi lên khung hình cuối.
- Quên Shade Flat khiến mặt đất bị shading mượt, phá vỡ phong cách low-poly.
- Đặt các đỉnh núi ngẫu nhiên không có chủ đích bố cục (tiền cảnh thấp, hậu cảnh cao) khiến cảnh thiếu chiều sâu.

## 6. Checklist thực hành

- [ ] Đã tạo mặt đất từ Plane với đủ vertex để tạo địa hình.
- [ ] Địa hình có sự đa dạng độ cao (đồi thấp gần, núi cao xa).
- [ ] Các đỉnh núi giữ phong cách low-poly góc cạnh (Shade Flat).
- [ ] Tỉ lệ núi và nhân vật hợp lý khi quan sát qua Camera.
- [ ] Nhân vật khủng long đã được đặt đúng vị trí trên mặt đất.

## 7. Tóm tắt

Bài học chuyển trọng tâm từ modelling nhân vật sang xây dựng bối cảnh, sử dụng Subdivide và Proportional Editing để tạo địa hình núi đồi low-poly. Đây là bước đặt nền cho việc thêm cây cối, ánh sáng và vật liệu ở các bài tiếp theo.
