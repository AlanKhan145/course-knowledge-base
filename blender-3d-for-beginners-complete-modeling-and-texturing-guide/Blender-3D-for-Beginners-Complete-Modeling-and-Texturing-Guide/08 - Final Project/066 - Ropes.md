# 066 — Ropes

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 08 — Final Project |
| **Bài học** | Ropes |
| **Thời lượng** | 8:13 |
| **Chủ đề chính** | Dựng chi tiết dây thừng bằng Array + Curve + Screw |

## 1. Mục tiêu bài học

- Tái sử dụng kỹ thuật Array + Curve Modifier từ Module 05 (bài 037) để dựng dây thừng thật.
- Thêm hiệu ứng xoắn sợi bằng Screw Modifier hoặc xoắn thủ công.
- Gắn dây thừng vào đúng vị trí trên cơ thể/trang phục nhân vật (vắt qua vai, buộc quanh eo).

## 2. Nội dung chính

Dây thừng của nhân vật ếch (ví dụ vắt chéo qua vai để treo túi nước, hoặc buộc quanh eo) được dựng bằng kỹ thuật đã học ở bài 037: một đoạn dây ngắn (profile là vài sợi nhỏ xoắn quanh nhau hoặc một trụ có rãnh xoắn bề mặt) được nhân bản bằng **Array Modifier** và uốn theo một **Bezier Curve** bằng **Curve Modifier** — đường Curve được vẽ và chỉnh control point trực tiếp bám theo dáng cơ thể/trang phục nhân vật đã hoàn thiện.

Hiệu ứng **xoắn sợi** (các sợi nhỏ quấn quanh nhau dọc theo chiều dài dây, đặc trưng của dây thừng thật) có thể tạo bằng cách dựng 2-3 trụ nhỏ song song rồi thêm **Screw Modifier** với Angle nhỏ để chúng xoắn quanh trục chung, hoặc đơn giản hơn là dùng một profile mặt cắt có rãnh xoắn (giống kỹ thuật ốc vít ở bài 038) áp lên toàn bộ chiều dài Curve.

Sau khi có đoạn dây thừng hoàn chỉnh dọc theo Curve, cần **Apply** Curve Modifier (hoặc Convert to Mesh) nếu muốn tiếp tục sculpt thêm chi tiết đầu dây tưa ra hoặc nút thắt — các phần này thường sculpt tay bằng Snake Hook/Clay Strips (Module 06) vì độ phức tạp hình học không đều của một nút thắt khó dựng bằng modifier thuần túy.

## 3. Quy trình thực hành gợi ý

1. Dựng một đoạn dây ngắn có bề mặt xoắn (dùng Screw Modifier trên profile nhỏ, hoặc 2-3 trụ song song xoắn quanh nhau).
2. Vẽ một Bezier Curve bám theo đường dây thừng mong muốn quanh vai/eo nhân vật.
3. Thêm Array Modifier + Curve Modifier vào đoạn dây, chỉ định Curve vừa vẽ làm Object.
4. Chỉnh Curve control point để dây ôm sát tự nhiên theo hình dáng cơ thể/trang phục.
5. Apply/Convert to Mesh, sculpt thêm chi tiết đầu dây tưa hoặc nút thắt bằng Snake Hook.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt |
|---|---|
| Thêm Bezier Curve | `Shift + A > Curve > Bezier` |
| Curve Modifier | Modifier Properties > Add Modifier > Deform > Curve |
| Array Modifier | Modifier Properties > Add Modifier > Generate > Array |
| Convert to Mesh | Object > Convert > Mesh |

## 5. Lưu ý & lỗi thường gặp

- Trục Curve không khớp với trục Array Fit Type có thể khiến dây bị xoay lệch hướng dọc theo đường cong thay vì nằm đúng theo profile mong muốn.
- Dây thừng xuyên vào bên trong cơ thể/trang phục ở các đoạn cong gấp — cần kiểm tra kỹ và chỉnh control point Curve ở những khúc cua gấp.
- Nút thắt sculpt tay không khớp về tỷ lệ với đường kính dây được tạo bằng modifier — nên đối chiếu kích thước thường xuyên trong lúc sculpt.

## 6. Checklist thực hành

- [ ] Đã dựng được đoạn dây có hiệu ứng xoắn sợi.
- [ ] Đã dùng Array + Curve Modifier để dây bám theo đường cong mong muốn.
- [ ] Đã gắn dây đúng vị trí trên cơ thể/trang phục nhân vật, không xuyên chéo.
- [ ] Đã sculpt thêm chi tiết đầu dây/nút thắt nếu cần.

## 7. Tóm tắt

Dây thừng minh họa việc tái sử dụng trực tiếp kỹ thuật Array + Curve Modifier đã học ở Module 05 vào bối cảnh một dự án thật, đồng thời cho thấy cách kết hợp modifier (cho phần đều đặn lặp lại) với sculpt tay (cho phần bất quy tắc như nút thắt).
