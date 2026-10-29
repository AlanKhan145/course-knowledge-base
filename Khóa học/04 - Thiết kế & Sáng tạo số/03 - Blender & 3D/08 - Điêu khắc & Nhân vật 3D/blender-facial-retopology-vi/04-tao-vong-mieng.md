# Bài 04 — Tạo edge loop quanh miệng
**Tham chiếu video:** 03:35–07:12; 30:32–31:16.


## Vì sao phải làm miệng trước?
Môi biến dạng khi cười, nói, mím và há miệng. Vòng cạnh cần ôm quanh đường môi và kéo ra thành dải quanh khóe, gò má, cằm.


## Thực hành chi tiết
1. Đặt quad đầu trên môi trên, dùng `G` để chỉnh bốn đỉnh theo độ cong thực.
2. Chọn cạnh ngoài; `E` để đùn từng quad chạy qua môi trên tới khóe miệng.
3. `R` xoay cạnh hoặc `G G` slide để giữ nhịp quad và hạn chế mặt xoắn.
4. Tiếp tục qua môi dưới, khép dải ở trục giữa với Mirror Merge + Clipping.
5. Từ vòng môi, đùn thêm một hoặc hai dải ngoài giúp khu vực chuyển tiếp về má và cằm.
6. Quan sát side view để chắc các đỉnh không chui qua high-poly.


## Nguyên tắc
- Ưu tiên dải quad theo *vành môi*, không dùng lưới vuông cứng ngắt.
- Đừng đặt pole lớn ngay tại khóe miệng nếu cần biểu cảm.
- Dải bên ngoài có thể thưa hơn nếu ít biến dạng.
- Nếu nhân vật cần lộ răng/lưỡi, giữ đường mở môi hợp lý để tạo khoang miệng. Đừng dùng một n-gon lớn bịt khe mở.
- Nhân vật anime có thể dùng ít loop hơn realistic nhưng vẫn phải kiểm tra shape keys.


## Lỗi hay gặp
**Lệch đối xứng:** rà Object Origin, Merge Distance và các điểm ở X=0.


**Mặt đè lên nhau:** kiểm tra khi bật Wireframe, không extrude hai lần ở cùng vị trí.


**Quads dài/nhọn:** dùng `G G` phân bố lại hoặc thêm một loop có chủ ý.


## Bài tập
Tạo vòng miệng khép, một dải bao ngoài; chụp front/side ở Wireframe.


## Tự đánh giá
- [ ] Có thể nhận ra dải môi rõ ràng.
- [ ] Không tạo mặt trùng.
- [ ] Khóe miệng giữ được các quad phù hợp biến dạng.