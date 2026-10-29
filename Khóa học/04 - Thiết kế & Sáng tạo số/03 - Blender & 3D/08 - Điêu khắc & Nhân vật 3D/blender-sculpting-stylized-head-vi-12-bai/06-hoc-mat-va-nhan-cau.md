# Bài 06 — Điêu khắc hốc mắt và dựng nhãn cầu

**Mốc video:** 14:17–16:47 · **Thời lượng học gợi ý:** 35–45 phút

## Mục tiêu

- Tạo hốc mắt cân xứng bằng brush.
- Tạo nhãn cầu dạng hình khối đặt đúng vị trí.
- Biết khi nào nên giữ mắt là object riêng.

## Phần A — Điêu khắc hốc mắt

1. Chọn mesh đầu ở Sculpt Mode, bật **Symmetry X** nếu muốn hai hốc mắt tương đồng.
2. Chọn brush **Draw** hoặc brush tạo rãnh phù hợp. Điều chỉnh bán kính `F` nếu có.
3. Di chuyển con trỏ đến vùng mắt, dùng tác động lõm (chẳng hạn giữ `Ctrl` với brush hỗ trợ) để tạo hai vùng lõm tròn/oval.
4. Lặp lại nét nhẹ cho đến khi độ sâu vừa đủ. Không nên ấn một nét thật sâu vì có thể tạo nếp gấp khó sửa.
5. Chọn **Grab** để chỉnh dáng hốc mắt; nhìn trực diện và góc nghiêng để kiểm tra hình cầu có thể nằm trong hốc.
6. Sử dụng Smooth nhẹ để không có các nếp cứng ngoài ý muốn.

## Phần B — Tạo hai nhãn cầu

1. Về Object Mode. Dùng `Shift + A > Mesh > UV Sphere`.
2. Thu nhỏ bằng `S` và đặt gần vị trí hốc mắt bằng `G`. Có thể dùng `Shift + chuột phải` để đặt 3D Cursor trước khi Add (tùy keymap), nhưng không bắt buộc.
3. Nếu cần xoay khối mắt cách điệu, dùng `R` và trục phù hợp. Với quả cầu hoàn toàn đối xứng, xoay không làm thay đổi silhouette nhưng hữu ích khi đặt hình oval.
4. Đặt một phần nhãn cầu nằm sau hốc mắt và một phần nổi lên bề mặt; quan sát từ trước, bên và 3/4.
5. Tạo bên còn lại bằng **Mirror Modifier** với mặt phẳng đối xứng đặt đúng qua giữa đầu, hoặc nhân bản và nhập tọa độ đối xứng.
6. Đặt tên `Eye_L`, `Eye_R` hoặc `Eyes_Mirror` để không nhầm với mesh đầu.

## Vì sao giữ mắt riêng?

- Dễ thay kích thước, vị trí và vật liệu về sau.
- Dễ gắn biểu cảm (eyelid/shape keys) ở bài học nâng cao.
- Voxel Remesh toàn bộ đầu và mắt ngay tại bước này **không bắt buộc**, có thể làm mất độ tròn hoặc khiến mắt dính đầu.

## Tiêu chí hoàn thành

- [ ] Hai hốc mắt có chiều sâu, không thủng lưới.
- [ ] Nhãn cầu không nằm quá xa bề mặt hoặc lọt hẳn bên trong.
- [ ] Cặp mắt đối xứng theo trục của đầu.

**Bài tập:** tạo hai mẫu mắt: tròn lớn và oval dọc; so sánh biểu cảm nhân vật.
