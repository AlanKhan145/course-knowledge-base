# 025 — Creating A Crate

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 02 — Modular Dungeon |
| **Bài học** | Creating A Crate |
| **Thời lượng** | 9:34 |
| **Chủ đề chính** | Tạo thùng hàng |

## 1. Mục tiêu bài học

- Dựng thùng gỗ hình hộp (crate) từ Cube bằng box modelling.
- Tạo chi tiết ván gỗ (plank) và khung viền bằng Inset, Extrude, Bevel.
- Sử dụng Array modifier hoặc Duplicate để nhân bản chi tiết lặp lại nhanh chóng.
- Hiểu cách giữ crate đúng kích thước module (đơn vị lưới) để đặt vào scene sau này.

## 2. Nội dung chính

Thùng hàng (crate) là một prop hình hộp đơn giản nhưng cần chi tiết bề mặt để không bị "phẳng" và nhàm chán. Bắt đầu từ `Shift+A > Mesh > Cube`, scale theo tỉ lệ thực tế (ví dụ 1m x 1m x 1m), rồi `Ctrl+A > Apply > Scale` để làm sạch transform.

Kỹ thuật chính là dùng Inset Faces (`I`) trên từng mặt để tạo viền khung (frame) quanh mép, sau đó Extrude (`E`) khung này ra ngoài một chút để tạo độ dày nẹp gỗ. Bên trong khung, có thể thêm Loop Cut để chia thành các tấm ván riêng biệt, rồi Inset nhẹ từng tấm và Extrude âm nhỏ để tạo khe hở giữa các ván — mô phỏng cấu trúc ván gỗ ghép.

Với các nẹp góc (corner reinforcement), có thể tạo một thanh gỗ nhỏ (cube dẹt) rồi dùng `Shift+D` (Duplicate) hoặc modifier Array kết hợp Mirror để nhân ra đủ 4 góc/8 cạnh một cách đối xứng, thay vì dựng thủ công từng thanh.

Cuối cùng, Bevel (`Ctrl+B`) nhẹ các cạnh ngoài để bắt sáng tốt hơn khi render, tránh cạnh quá sắc gây "clipping" ánh sáng.

## 3. Quy trình thực hành gợi ý

1. Add Cube, scale đúng kích thước module, Apply Scale.
2. Inset Faces từng mặt để tạo khung viền.
3. Extrude khung viền ra ngoài để tạo độ dày nẹp.
4. Loop Cut chia mặt trong khung thành các tấm ván, Inset + Extrude âm nhẹ tạo khe ván.
5. Tạo một thanh nẹp góc, dùng Duplicate/Array + Mirror để nhân ra các vị trí còn lại.
6. Bevel các cạnh ngoài cùng để bắt sáng tốt.
7. Kiểm tra tỉ lệ tổng thể so với đơn vị lưới của module.
8. Đặt Origin và đổi tên object thành "Crate".

## 4. Phím tắt & công cụ liên quan

| Phím tắt | Chức năng |
|---|---|
| `I` | Inset Faces |
| `E` | Extrude |
| `Ctrl+R` | Loop Cut |
| `Ctrl+B` | Bevel |
| `Shift+D` | Duplicate |
| `Alt+D` | Duplicate Linked |
| `Ctrl+A` | Apply Transform |
| `Mirror modifier` | Generate đối xứng chi tiết theo trục |
| `Array modifier` | Nhân bản chi tiết lặp lại theo khoảng cách |

## 5. Lưu ý & lỗi thường gặp

- Inset Faces không bật "Individual" khi cần inset riêng từng tấm ván sẽ làm sai hình dạng.
- Quên Apply Scale trước khi Bevel khiến độ rộng bevel không đều giữa các trục.
- Dùng Duplicate thường (`Shift+D`) thay vì Array modifier cho chi tiết lặp có thể gây khó chỉnh sửa sau này.
- Nẹp góc không thẳng hàng với cạnh crate do quên bật Snapping.

## 6. Checklist thực hành

- [ ] Đã tạo khung viền bằng Inset + Extrude.
- [ ] Đã chia và tạo khe hở giữa các tấm ván.
- [ ] Đã thêm nẹp góc đối xứng bằng Duplicate/Array + Mirror.
- [ ] Đã Bevel các cạnh ngoài.
- [ ] Đã kiểm tra kích thước tổng thể theo đơn vị lưới module.

## 7. Tóm tắt

Bài học xây dựng chiếc thùng hàng gỗ bằng box modelling kết hợp Inset/Extrude để tạo cấu trúc ván và khung viền, đồng thời luyện tập kỹ thuật nhân bản đối xứng cho chi tiết nẹp góc — kỹ năng dùng lại xuyên suốt các module khác.
