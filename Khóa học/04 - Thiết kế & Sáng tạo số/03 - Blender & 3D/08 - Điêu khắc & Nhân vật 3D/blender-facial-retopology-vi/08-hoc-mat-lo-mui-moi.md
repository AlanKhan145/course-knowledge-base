# Bài 08 — Xử lý lỗ mũi, hốc mắt và viền môi
**Tham chiếu video:** 19:45–21:54; 29:32–31:16; 43:56–44:20.


## Vì sao cần tắt Shrinkwrap tạm thời?
Các phần **hốc mắt, lòng lỗ mũi, mặt trong môi** nằm sâu dưới bề mặt ngoài. Nếu dùng Nearest Surface Point, đỉnh có thể bị hút trở lại vị trí gần nhất trên mặt ngoài, làm mất độ sâu hoặc xuyên hình.


## 1. Dựng lỗ mũi
1. Chọn vòng cạnh quanh lỗ mũi, chuyển sang Wireframe qua menu `Z`.
2. Tạm tắt Snapping và Shrinkwrap để kiểm soát được độ sâu.
3. `E` rồi `S` để đùn thu nhỏ, `G` dịch vào trong, `R` chỉnh góc phù hợp.
4. Có thể thêm một loop để điều khiển hình lòng mũi.
5. Bật lại modifier nếu bề mặt tham chiếu có phần trong phù hợp; nếu bị hút sai, dùng Vertex Group hoặc tắt ảnh hưởng ở phần nội khoang.
6. Bịt phần khuất bằng mặt thích hợp khi không cần biến dạng ở đây.


## 2. Dựng hốc mắt
1. Chọn vòng mí/hốc → tắt Snap và Shrinkwrap.
2. `E` + `S` thu vòng vào, dịch theo trục sâu thật của model. Video dùng `G Y`; chỉ làm tương tự khi hướng model đúng như vậy.
3. Thêm một vòng bên trong để đủ chỗ đặt nhãn cầu.
4. Có thể **Grid Fill** ở phần sâu khuất hoặc dùng n-gon cục bộ khi không ảnh hưởng biến dạng. Không dùng n-gon ngay sát mí.
5. Thử nhắm mắt giả định, kiểm tra mí có cắt qua nhãn cầu.


## 3. Mép trong môi
Môi cần độ dày và khoang miệng khi mở miệng. Nếu rig phải lộ răng/lưỡi, đừng bịt kín khe môi bằng một mặt phẳng. Tạo thêm dải đi về phía trong, để phần sâu được đơn giản hóa.


## Tự kiểm tra
- [ ] Hốc mắt đủ sâu, không Shrinkwrap sai.
- [ ] Lỗ mũi không tự cắt.
- [ ] Khe mở môi phù hợp animation.
- [ ] N-gon chỉ ở vùng khuất ít biến dạng khi có lý do.


**Lưu ý:** mục tiêu là giữ hình dạng và khả năng cử động, không tái tạo từng chi tiết high-poly.