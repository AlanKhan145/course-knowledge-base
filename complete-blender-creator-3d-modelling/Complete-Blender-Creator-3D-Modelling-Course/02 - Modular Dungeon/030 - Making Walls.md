# 030 — Making Walls

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 02 — Modular Dungeon |
| **Bài học** | Making Walls |
| **Thời lượng** | 9:55 |
| **Chủ đề chính** | Tạo các module tường |

## 1. Mục tiêu bài học

- Hiểu nguyên tắc thiết kế module tường theo đơn vị lưới cố định để ghép nối liền mạch.
- Dựng khối tường cơ bản từ Cube với độ dày và chiều cao chuẩn.
- Thêm chi tiết bề mặt (gạch đá, khối lồi lõm) bằng Loop Cut, Inset, Extrude.
- Đảm bảo các cạnh biên (edge) của module khớp chính xác để module có thể lặp lại vô hạn.

## 2. Nội dung chính

Tường modular là thành phần cốt lõi của môi trường dungeon: một mảnh tường (wall segment) được thiết kế với chiều rộng/cao là bội số của đơn vị lưới đã chọn ở đầu module (ví dụ 2m), sao cho khi Duplicate và ghép cạnh kề cạnh, không xuất hiện khe hở hoặc chồng lấn.

Quy trình bắt đầu bằng một Cube được scale thành tấm tường (rộng x cao x dày, ví dụ 2m x 2m x 0.3m), `Ctrl+A > Apply Scale` để chuẩn hoá transform. Sau đó, dùng Loop Cut (`Ctrl+R`) chia mặt tường thành lưới ô vuông/chữ nhật mô phỏng các khối đá xây, mỗi ô có thể Inset (`I`) nhẹ và Extrude (`E`) ra/vào một chút để tạo độ lồi lõm ngẫu nhiên giữa các viên đá — tăng chi tiết bề mặt mà không cần texture phức tạp.

Điểm quan trọng nhất của modular wall là **các cạnh biên phải phẳng và thẳng hàng chính xác với lưới** — không nên để chi tiết lồi lõm chạm ra sát mép ngoài của tường, để khi hai module ghép lại, đường nối không bị lệch hoặc lộ khe sáng. Nên để một viền phẳng nhỏ (margin) quanh mép tường trước khi bắt đầu chi tiết hoá phần giữa.

## 3. Quy trình thực hành gợi ý

1. Add Cube, scale thành tấm tường theo đúng đơn vị lưới module, Apply Scale.
2. Dùng Loop Cut chia mặt trước tường thành lưới các khối đá.
3. Chừa một viền phẳng (margin) quanh mép ngoài trước khi Inset/Extrude phần giữa.
4. Inset nhẹ từng ô, Extrude ra/vào ngẫu nhiên một chút để tạo độ lồi lõm bề mặt đá.
5. Kiểm tra bằng cách Duplicate (`Shift+D`) tường sang cạnh bên, xác nhận không có khe hở khi ghép.
6. Apply Transform, đặt Origin tại một góc/cạnh chuẩn để dễ căn lưới khi lắp ráp.

## 4. Phím tắt & công cụ liên quan

| Phím tắt | Chức năng |
|---|---|
| `Ctrl+R` | Loop Cut chia lưới bề mặt tường |
| `I` | Inset Faces từng khối đá |
| `E` | Extrude tạo độ lồi lõm |
| `Ctrl+A` | Apply Transform (Scale) |
| `Shift+D` | Duplicate để kiểm tra ghép module |
| `Shift+Tab` | Snapping khi căn chỉnh vị trí ghép |
| `Numpad .` | Zoom to Selected để kiểm tra chi tiết cạnh biên |

## 5. Lưu ý & lỗi thường gặp

- Kích thước tường không phải bội số của đơn vị lưới khiến việc lắp ráp scene ở bài 039 bị lệch.
- Chi tiết lồi lõm chạm sát mép ngoài làm lộ đường nối giữa các module khi ghép.
- Quên Apply Scale khiến các thao tác Bevel/Inset sau này không đều.
- Đặt Origin không nhất quán giữa các module (mỗi cái một kiểu) gây khó khăn khi align bằng Snapping.

## 6. Checklist thực hành

- [ ] Đã tạo tấm tường đúng kích thước bội số của lưới module.
- [ ] Đã thêm chi tiết bề mặt đá bằng Loop Cut/Inset/Extrude.
- [ ] Đã chừa viền phẳng quanh mép để đảm bảo ghép khít.
- [ ] Đã kiểm tra ghép nối bằng Duplicate cạnh kề cạnh.
- [ ] Đã Apply Transform và đặt Origin nhất quán.

## 7. Tóm tắt

Bài học xây dựng nguyên tắc cốt lõi của modular wall: kích thước chuẩn theo lưới, chi tiết bề mặt không phá vỡ cạnh biên. Đây là nền tảng để bài tiếp theo áp dụng Mirror modifier nhân đôi chi tiết một cách đối xứng và hiệu quả.
