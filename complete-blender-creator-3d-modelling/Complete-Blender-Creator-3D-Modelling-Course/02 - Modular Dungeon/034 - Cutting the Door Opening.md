# 034 — Cutting the Door Opening

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 02 — Modular Dungeon |
| **Bài học** | Cutting the Door Opening |
| **Thời lượng** | 4:22 |
| **Chủ đề chính** | Cắt phần mở của cửa |

## 1. Mục tiêu bài học

- Sử dụng Boolean modifier (Difference) để cắt lỗ cửa chính xác trên module tường.
- Hiểu quy trình chuẩn bị mesh cắt (cutter object) sạch, kín (manifold) trước khi Boolean.
- Biết cách dọn dẹp topology sau Boolean để tránh lỗi n-gon/mặt xấu.
- Kết hợp lỗ cửa vừa cắt với khung Door Surround đã dựng ở bài trước.

## 2. Nội dung chính

**Boolean modifier** (Add Modifier > Generate > Boolean) thực hiện các phép toán hình học giữa hai mesh: **Union** (hợp), **Difference** (hiệu — cắt bỏ phần giao nhau), **Intersect** (giao). Để cắt lỗ cửa, cần một object phụ dạng khối hộp ("cutter") có kích thước đúng bằng lỗ trống đã đo ở bài trước, đặt chồng lên vị trí cần cắt trên tường, xuyên qua hết độ dày tường.

Trên object tường, thêm Boolean modifier, chọn Operation = **Difference**, Object = cutter vừa tạo. Blender sẽ trừ đi phần thể tích giao nhau, tạo ra lỗ hổng đúng hình dạng cutter. Sau khi kiểm tra kết quả ổn, Apply modifier để chốt mesh, rồi ẩn hoặc xoá object cutter (không xoá trước khi Apply).

Điều kiện quan trọng để Boolean hoạt động ổn định: cả hai mesh (tường và cutter) phải là **manifold** — kín, không có lỗ hổng, không có mặt trùng lặp hoặc normal bị lật. Mesh không kín dễ gây lỗi Boolean như mặt bị thủng, tam giác rác (sliver faces), hoặc kết quả không như mong đợi.

Sau khi Apply Boolean, gần như luôn cần dọn dẹp topology tại vùng vừa cắt: dùng `Select > Select All by Trait > Non-Manifold` để tìm các cạnh lỗi, hoặc thủ công dùng `X > Dissolve Edges/Vertices` để gộp các tam giác rác thành các mặt sạch hơn, sau đó `Shift+N` để tính lại normal.

Cuối cùng, đặt khung Door Surround (từ bài trước) đúng vào vị trí lỗ vừa cắt, dùng Snapping để căn chỉnh chính xác, rồi có thể Join hai object nếu muốn hợp nhất thành một module tường-cửa hoàn chỉnh.

## 3. Quy trình thực hành gợi ý

1. Tạo một Cube làm cutter, scale đúng kích thước lỗ cửa đã đo ở bài 033, xuyên hết độ dày tường.
2. Định vị chính xác cutter vào vị trí mong muốn trên tường bằng Snapping/N-panel.
3. Trên object tường, thêm Boolean modifier, Operation = Difference, chọn cutter làm Object.
4. Kiểm tra kết quả trong viewport, chỉnh vị trí/kích thước cutter nếu cần trước khi Apply.
5. Apply modifier, sau đó ẩn hoặc xoá object cutter.
6. Dọn dẹp topology quanh mép lỗ cắt (Dissolve, Recalculate Normals).
7. Căn khung Door Surround vào đúng lỗ vừa cắt bằng Snapping.

## 4. Phím tắt & công cụ liên quan

| Phím tắt / Thao tác | Chức năng |
|---|---|
| Boolean modifier (Difference) | Cắt bỏ phần giao nhau giữa tường và cutter |
| `Shift+Tab` | Bật Snapping để căn cutter/khung cửa chính xác |
| `Ctrl+A > Apply` | Áp dụng Boolean modifier |
| `X > Dissolve Edges/Vertices` | Dọn dẹp topology sau Boolean |
| `Shift+N` | Recalculate Normals sau khi cắt |
| Overlay > Face Orientation | Kiểm tra normal sau Boolean |

## 5. Lưu ý & lỗi thường gặp

- Cutter không xuyên hết độ dày tường để lại một lớp mặt mỏng sót lại, gây lỗi hiển thị.
- Mesh tường hoặc cutter không manifold khiến Boolean tạo ra mặt lỗi, lỗ thủng ngẫu nhiên.
- Xoá cutter trước khi Apply modifier khiến Boolean modifier báo lỗi/mất tác dụng.
- Không dọn dẹp topology sau Boolean để lại nhiều tam giác rác, gây lỗi shading tại mép lỗ cửa.
- Kích thước cutter không khớp với lỗ trống của khung Door Surround khiến khung không vừa khít.

## 6. Checklist thực hành

- [ ] Đã tạo cutter đúng kích thước lỗ cửa, xuyên hết độ dày tường.
- [ ] Đã dùng Boolean Difference cắt lỗ cửa và Apply thành công.
- [ ] Đã dọn dẹp topology và kiểm tra normal quanh mép lỗ cắt.
- [ ] Đã ẩn/xoá object cutter sau khi Apply.
- [ ] Đã căn khung Door Surround khớp vào lỗ vừa cắt.

## 7. Tóm tắt

Bài học sử dụng Boolean modifier để cắt chính xác lỗ cửa trên tường, kèm bước dọn dẹp topology thiết yếu sau khi Apply — một kỹ thuật quan trọng khi kết hợp các khối hình học phức tạp trong modular modelling.
