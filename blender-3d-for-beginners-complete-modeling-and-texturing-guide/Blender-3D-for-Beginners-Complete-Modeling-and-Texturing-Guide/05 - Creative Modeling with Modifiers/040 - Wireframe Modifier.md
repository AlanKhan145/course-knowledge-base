# 040 — Wireframe Modifier

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 05 — Creative Modeling with Modifiers |
| **Bài học** | Wireframe Modifier |
| **Thời lượng** | 4:05 |
| **Chủ đề chính** | Biến cạnh mesh thành khung ống 3D |

## 1. Mục tiêu bài học

- Hiểu cách Wireframe Modifier chuyển edge của mesh thành geometry dạng ống/thanh.
- Biết chỉnh Thickness và các tùy chọn Even Thickness, Replace Original.
- Dựng được một đối tượng dạng khung dây (thùng rác lưới, lồng microphone).

## 2. Nội dung chính

**Wireframe Modifier** lấy toàn bộ cạnh (edge) của mesh gốc và biến mỗi cạnh thành một thanh/ống hình hộp chữ nhật có độ dày điều chỉnh được qua tham số **Thickness** — kết quả là một phiên bản "khung xương" của mesh, rất hữu ích để dựng nhanh các đối tượng dạng lưới/khung như thùng rác dạng lưới thép, lồng bảo vệ microphone, khung kim loại trang trí, mà không cần model từng thanh kim loại thủ công.

Tùy chọn **Even Thickness** giữ độ dày các thanh đồng đều bất kể độ dài cạnh gốc khác nhau, tránh hiện tượng thanh dày/mỏng không đều tại các góc. **Replace Original** (mặc định bật) loại bỏ các face gốc, chỉ giữ lại phần khung; tắt tùy chọn này sẽ giữ cả mesh gốc lẫn khung chồng lên nhau — hữu ích khi cần cả bề mặt kính lẫn khung viền kim loại (ví dụ cửa sổ có khung). **Boundary** kiểm soát việc có tạo khung cho các cạnh biên hở (không giáp hai face) hay không.

Vì kết quả phụ thuộc hoàn toàn vào mật độ và bố cục cạnh của mesh gốc, chất lượng của Wireframe Modifier phụ thuộc rất nhiều vào việc chuẩn bị topology gốc hợp lý trước — quá nhiều cạnh dày đặc sẽ tạo ra khung rối rắm, trong khi quá ít cạnh sẽ cho khung quá thưa.

## 3. Quy trình thực hành gợi ý

1. Dựng một hình trụ (Cylinder) đại diện thân thùng rác, thêm vài Loop Cut ngang-dọc để tạo lưới ô vuông.
2. Thêm Wireframe Modifier, tăng Thickness từ từ để thấy khung ống hình thành từ các cạnh.
3. Bật Even Thickness, so sánh độ đồng đều của các thanh ở góc so với khi tắt.
4. Thử tắt Replace Original trên một mesh khác (ví dụ khung cửa sổ) để giữ lại cả mặt kính gốc lẫn khung.
5. Thử áp dụng Wireframe lên một mesh dạng cầu (Icosphere) để dựng nhanh một lồng bảo vệ dạng khung tròn.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt |
|---|---|
| Thêm Wireframe Modifier | Modifier Properties > Add Modifier > Generate > Wireframe |
| Chỉnh Thickness | Kéo giá trị trong panel modifier |
| Bật Even Thickness / Replace Original / Boundary | Checkbox trong panel modifier |

## 5. Lưu ý & lỗi thường gặp

- Mesh gốc có mật độ cạnh không đều (ví dụ một số vùng subdivide nhiều, vùng khác ít) sẽ cho khung dây trông lộn xộn, không đồng đều về hình dáng ô lưới.
- Thickness quá lớn so với kích thước ô lưới khiến các thanh chồng lấn dày đặc, mất luôn cảm giác "khung dây" thoáng.
- Quên rằng Wireframe hoạt động trên toàn bộ cạnh hiện có — muốn có bố cục khung cụ thể (ví dụ chỉ ngang hoặc chỉ chéo) cần chuẩn bị trước bằng cách xóa bớt cạnh không cần thiết trong Edit Mode.

## 6. Checklist thực hành

- [ ] Đã áp dụng Wireframe Modifier lên ít nhất một mesh có lưới cạnh chuẩn bị sẵn.
- [ ] Đã hiểu và thử nghiệm Even Thickness.
- [ ] Đã thử tắt Replace Original để giữ cả mesh gốc lẫn khung.
- [ ] Đã dựng được một đối tượng dạng khung dây hoàn chỉnh (thùng rác lưới hoặc lồng microphone).

## 7. Tóm tắt

Wireframe Modifier là cách nhanh nhất để biến bố cục cạnh có sẵn của một mesh thành geometry khung dây 3D thực sự — chất lượng kết quả phụ thuộc trực tiếp vào việc chuẩn bị topology gốc có chủ đích trước khi thêm modifier.
