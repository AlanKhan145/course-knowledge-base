# 062 — Body Blocking

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 08 — Final Project |
| **Bài học** | Body Blocking |
| **Thời lượng** | 7:41 |
| **Chủ đề chính** | Blocking cơ thể nhân vật ếch bằng Skin Modifier |

## 1. Mục tiêu bài học

- Dựng khối cơ thể ban đầu (blocking) của nhân vật ếch từ một khung xương mesh đơn giản.
- Sử dụng **Skin Modifier** để nhanh chóng biến một chuỗi vertex/edge thành khối hình ống có thể tích.
- Áp dụng **Mirror Modifier** để đảm bảo đối xứng hai bên trong lúc blocking.
- Xác lập tỷ lệ tổng thể: đầu to, thân ngắn, chi trước nhỏ, chân sau to có bàn chân màng.

## 2. Nội dung chính

Thay vì bắt đầu từ một khối primitive đặc, bài học dùng kỹ thuật **blocking bằng Skin Modifier** — cách tiếp cận nhanh để dựng khung tỷ lệ nhân vật organic. Quy trình bắt đầu từ một vertex đơn (thêm qua add-on *Add Mesh Extra Objects > Single Vert*, hoặc đơn giản là xóa bớt vertex thừa từ một Plane), sau đó ở Edit Mode dùng `E` (Extrude) liên tiếp để "vẽ" ra một chuỗi edge đóng vai trò xương sống: từ đầu → cổ → thân → xuống chân, và rẽ nhánh sang hai tay bằng cách chọn lại vertex gốc rồi extrude tiếp.

Sau khi có khung edge, thêm **Skin Modifier** (`Add Modifier > Generate > Skin`) để Blender tự động bọc một lớp mesh dạng ống quanh từng edge, biến khung xương thành khối có thể tích. Bán kính của từng vertex có thể chỉnh riêng lẻ ngay trong Edit Mode bằng `Ctrl + A` rồi rê chuột (resize skin vertex) — đây là cách nhanh nhất để tạo ra sự chênh lệch kích thước giữa đầu to, thân nhỏ và chân to đặc trưng của một chú ếch cách điệu. Có thể dùng `Shift + Ctrl + A` để căn đều tỷ lệ X/Y của vertex đang chọn, tránh tiết diện bị méo lệch.

Vì cơ thể ếch đối xứng hai bên, toàn bộ phần chi (tay, chân) chỉ cần dựng một bên rồi thêm **Mirror Modifier** (`Add Modifier > Generate > Mirror`, trục X mặc định) với tùy chọn *Clipping* bật để các vertex nằm trên mặt phẳng đối xứng không bị tách rời khi di chuyển. Ở giai đoạn blocking, nên thêm thêm một **Subdivision Surface Modifier** ở mức Viewport thấp (1) phía trên Skin Modifier để xem trước hình dáng cuối cùng sẽ mượt ra sao mà không cần commit quá sớm vào chi tiết.

Trong lúc chỉnh khung, bật chế độ **X-Ray** (`Alt + Z`) giúp nhìn xuyên qua mesh để chọn đúng vertex nằm khuất, và dùng Front/Side Orthographic (`Numpad 1`/`Numpad 3`) để so tỷ lệ với ảnh reference đã chuẩn bị ở bài trước.

## 3. Quy trình thực hành gợi ý

1. Tạo một Single Vert (hoặc dọn Plane còn 1 vertex), vào Edit Mode.
2. Extrude (`E`) tạo chuỗi edge cho cột sống: đầu, cổ, thân, đùi, chân, bàn chân màng; extrude nhánh riêng cho tay.
3. Thêm Skin Modifier, dùng `Ctrl + A` chỉnh bán kính từng vertex để tạo tỷ lệ đầu to – thân nhỏ – chân to.
4. Thêm Mirror Modifier trục X, bật Clipping để giữ liền mạch phần giữa cơ thể.
5. Thêm Subdivision Surface Modifier (Viewport level 1) để xem trước hình khối mượt.
6. So sánh silhouette với ảnh reference ở góc Front và Side, chỉnh tỷ lệ tổng thể cho khớp.
7. Đặt tên object là "Body_Blocking" và gộp vào Collection "Body" đã tạo ở bài trước.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt |
|---|---|
| Extrude | `E` |
| Thêm Skin Modifier | `Add Modifier > Generate > Skin` |
| Resize Skin vertex | `Ctrl + A` (trong Edit Mode, khi có Skin Modifier) |
| Căn đều tỷ lệ Skin vertex | `Shift + Ctrl + A` |
| Bật X-Ray | `Alt + Z` |
| Thêm Mirror Modifier | `Add Modifier > Generate > Mirror` |
| Xem Front/Side Ortho | `Numpad 1` / `Numpad 3` |

## 5. Lưu ý & lỗi thường gặp

- Quên bật Clipping trên Mirror Modifier khiến các vertex ở giữa cơ thể tách rời khi kéo.
- Extrude tạo ra edge trùng lặp hoặc rẽ nhánh sai điểm khiến Skin Modifier sinh ra khối méo tại điểm giao.
- Chỉnh bán kính Skin vertex quá đột ngột giữa hai điểm liền kề tạo ra vết "thắt cổ chai" không tự nhiên.
- Commit chi tiết quá sớm (bo tròn ngón chân, mí mắt...) trước khi tỷ lệ tổng thể được chốt — nên giữ mọi thứ ở dạng khối lớn trong bài blocking này.

## 6. Checklist thực hành

- [ ] Đã dựng khung edge hoàn chỉnh cho đầu, thân, tay, chân.
- [ ] Đã áp Skin Modifier và chỉnh bán kính tạo đúng tỷ lệ ếch cách điệu.
- [ ] Đã thêm Mirror Modifier đối xứng hai bên cơ thể.
- [ ] Silhouette tổng thể khớp với ảnh reference ở cả góc Front và Side.

## 7. Tóm tắt

Kỹ thuật blocking bằng Skin Modifier trên một khung edge tối giản cho phép nhanh chóng xác lập tỷ lệ và silhouette cơ thể ếch, làm nền tảng vững chắc để các bài tiếp theo blocking và tinh chỉnh trang phục lên trên.
