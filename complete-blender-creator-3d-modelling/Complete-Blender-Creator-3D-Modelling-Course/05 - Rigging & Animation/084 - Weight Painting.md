# 084 — Weight Painting

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 05 — Rigging & Animation |
| **Bài học** | Weight Painting |
| **Thời lượng** | 7:31 |
| **Chủ đề chính** | Gán trọng số bằng Weight Painting |

## 1. Mục tiêu bài học

- Hiểu Weight Painting là gì và mối quan hệ giữa Vertex Group và Armature deform.
- Biết cách vào Weight Paint mode và đọc thang màu trọng số (xanh dương = 0, đỏ = 1).
- Biết cách dùng cọ vẽ (brush) để tinh chỉnh trọng số ở vùng biến dạng sai sau Automatic Weights.
- Nắm được các công cụ hỗ trợ: Blend, Add, Subtract, và giá trị Weight cụ thể.

## 2. Nội dung chính

Weight Painting là quá trình xác định mức độ ảnh hưởng (trọng số, weight, giá trị từ 0 đến 1) của mỗi bone lên từng vertex của mesh. Trọng số này được lưu trong Vertex Group — mỗi bone tương ứng với một Vertex Group cùng tên, và giá trị weight của một vertex trong group đó quyết định vertex bị "kéo theo" bao nhiêu phần trăm khi bone tương ứng chuyển động. Khi Parent bằng Automatic Weights ở bài trước, Blender đã tự tạo các Vertex Group này dựa trên khoảng cách hình học, nhưng kết quả tự động thường không hoàn hảo, đặc biệt ở các vùng giao nhau giữa nhiều bone (nách, háng, cổ).

Trong Weight Paint mode (chuyển từ Object Mode, chọn mesh, vào chế độ Weight Paint), mesh được tô màu theo thang nhiệt: xanh dương biểu thị weight 0 (không bị ảnh hưởng bởi bone đang chọn), đỏ biểu thị weight 1 (ảnh hưởng hoàn toàn), các màu trung gian (xanh lá, vàng, cam) thể hiện giá trị ở giữa. Người dùng chọn một bone trong Pose Mode kết hợp (Weight Paint mode tự động hiển thị Armature liên kết), sau đó dùng cọ vẽ trực tiếp lên mesh để tăng/giảm trọng số cho bone đang active.

Các công cụ vẽ chính gồm: Draw (vẽ thêm weight theo giá trị Weight đã đặt), Blend (pha trộn mượt giữa các giá trị lân cận), Add/Subtract (cộng/trừ nhanh), và Smooth (làm mượt chuyển tiếp trọng số giữa các vùng, tránh biến dạng gấp khúc đột ngột). Một kỹ thuật kiểm tra hiệu quả là bật chế độ xem trước bằng cách vào Pose Mode và xoay thử các bone trong khi vẫn xem mesh ở Weight Paint hoặc bật tùy chọn hiển thị Armature deform trực tiếp, giúp phát hiện ngay vùng nào bị kéo sai.

## 3. Quy trình thực hành gợi ý

1. Chọn mesh Blob Man đã Parent với Armature, vào Weight Paint mode.
2. Trong Pose Mode (hoặc panel liên kết), chọn từng bone lần lượt và quan sát vùng mesh được tô đỏ/xanh tương ứng.
3. Xoay thử một bone (ví dụ upper_arm) ở Pose Mode, quan sát vùng mesh bị kéo sai (ví dụ phần thân bị kéo theo tay).
4. Quay lại Weight Paint, chọn bone gây lỗi, dùng brush Subtract để giảm weight ở vùng không nên bị ảnh hưởng.
5. Dùng brush Add hoặc Blend để tăng weight cho vùng chưa bị ảnh hưởng đủ (ví dụ đầu vai chưa theo đúng bone).
6. Lặp lại kiểm tra bằng cách xoay bone và tinh chỉnh cho đến khi mesh biến dạng tự nhiên ở mọi khớp chính.

## 4. Phím tắt & công cụ liên quan

| Phím tắt / thao tác | Chức năng |
|---|---|
| Chuyển Mode dropdown sang "Weight Paint" | Vào chế độ Weight Paint |
| `Ctrl+Click` (trên brush) hoặc phím `+`/`-` | Tăng/giảm nhanh giá trị Weight của brush |
| Tool: Draw / Blend / Add / Subtract / Smooth | Các chế độ cọ vẽ trọng số khác nhau |
| `Shift` (giữ khi vẽ) | Tạm chuyển sang chế độ Smooth/Blend nhanh (brush phụ) |
| `[` / `]` | Giảm/tăng kích thước brush |
| Ctrl+Tab (trong lúc kiểm tra) | Chuyển sang Pose Mode để test chuyển động |

## 5. Lưu ý & lỗi thường gặp

- Vẽ weight khi chưa chọn đúng bone active, khiến trọng số bị gán nhầm cho bone khác.
- Để chuyển tiếp trọng số quá đột ngột (không dùng Smooth) gây gấp khúc mesh tại vùng khớp khi animate.
- Quên kiểm tra vùng đối xứng (tay trái/phải) sau khi chỉnh weight một bên, dẫn đến kết quả không cân đối.
- Chỉ kiểm tra ở Weight Paint mà không thử xoay bone thực tế ở Pose Mode, bỏ sót lỗi biến dạng chỉ xuất hiện khi chuyển động.

## 6. Checklist thực hành

- [ ] Đã vào Weight Paint mode và hiểu thang màu trọng số.
- [ ] Đã kiểm tra biến dạng mesh bằng cách xoay thử từng bone chính.
- [ ] Đã tinh chỉnh weight tại ít nhất một vùng khớp bị lỗi (vai, háng...).
- [ ] Đã dùng Smooth để làm mượt chuyển tiếp trọng số.
- [ ] Đã kiểm tra tính đối xứng của weight giữa hai bên cơ thể.

## 7. Tóm tắt

Weight Painting tinh chỉnh mức độ ảnh hưởng của từng bone lên mesh thông qua Vertex Group, khắc phục các lỗi biến dạng còn sót lại sau Automatic Weights. Đây là bước quyết định chất lượng biến dạng mesh trước khi bước vào animate walk cycle hoàn chỉnh.
