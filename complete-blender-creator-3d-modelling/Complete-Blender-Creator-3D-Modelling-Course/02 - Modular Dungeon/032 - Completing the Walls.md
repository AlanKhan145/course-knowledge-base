# 032 — Completing the Walls

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 02 — Modular Dungeon |
| **Bài học** | Completing the Walls |
| **Thời lượng** | 6:29 |
| **Chủ đề chính** | Hoàn thiện và nối các phần tường |

## 1. Mục tiêu bài học

- Áp dụng (Apply) các modifier còn lại (Mirror, Bevel) để chốt mesh tường cuối cùng.
- Nối (Join) các phần mesh rời thành một object tường hoàn chỉnh.
- Kiểm tra và dọn dẹp mesh: xoá vertex trùng, kiểm tra normal, kiểm tra kích thước module.
- Tạo biến thể (variation) tường bằng cách nhân bản và chỉnh sửa nhẹ để tránh lặp lại y hệt trong scene.

## 2. Nội dung chính

Sau khi đã có chi tiết bề mặt và Mirror modifier từ hai bài trước, bước "hoàn thiện" tập trung vào việc chuẩn hoá mesh trước khi đưa vào lắp ráp scene. Đầu tiên, Apply các modifier theo đúng thứ tự từ trên xuống trong stack (Blender yêu cầu Apply modifier theo thứ tự, không thể apply modifier ở giữa nếu modifier phía trên chưa được xử lý).

Nếu module tường được dựng từ nhiều object riêng biệt (ví dụ thân tường + viền khung + chi tiết trang trí), dùng **Join** (`Ctrl+J`) để gộp tất cả thành một object duy nhất — chọn các object phụ trước, object chính (sẽ giữ tên và Origin) chọn sau cùng, vì Join luôn giữ lại Origin/tên của object active (được chọn cuối, viền sáng nhất).

Sau khi Join, nên kiểm tra sức khoẻ mesh bằng: `M > By Distance` (Merge by Distance) để loại bỏ vertex trùng lặp có thể phát sinh tại các điểm nối; kiểm tra Normal bằng `Shift+N` (Recalculate Normals) hoặc bật hiển thị Face Orientation (Overlay) để phát hiện mặt bị lật ngược (hiển thị màu đỏ).

Để tránh cảm giác lặp lại đơn điệu khi nhân bản nhiều tường giống hệt nhau trong scene, có thể tạo 2–3 biến thể (duplicate rồi chỉnh nhẹ vị trí một vài khối đá lồi lõm, hoặc xoay/lật một chi tiết) — vẫn giữ đúng kích thước module để đảm bảo ghép khít.

## 3. Quy trình thực hành gợi ý

1. Apply lần lượt các modifier còn lại theo đúng thứ tự trong stack (Mirror trước, Bevel sau nếu có).
2. Chọn toàn bộ các object con của module tường, Join (`Ctrl+J`) thành một object.
3. Vào Edit Mode, chọn tất cả (`A`), chạy Merge by Distance để loại vertex trùng.
4. Bật Face Orientation overlay hoặc `Shift+N` để kiểm tra và sửa normal bị lật.
5. Kiểm tra lại kích thước tổng thể (N-panel) khớp đúng bội số của lưới module.
6. Tạo 1–2 biến thể nhẹ bằng Duplicate + chỉnh sửa chi tiết nhỏ, đổi tên rõ ràng (Wall_A, Wall_B...).

## 4. Phím tắt & công cụ liên quan

| Phím tắt | Chức năng |
|---|---|
| `Ctrl+J` | Join nhiều object thành một |
| `M` | Merge (By Distance, At Center...) |
| `Shift+N` | Recalculate Normals Outside |
| `Alt+N` | Menu Normals nâng cao (Flip, Recalculate Inside...) |
| Overlay > Face Orientation | Hiển thị màu kiểm tra hướng normal |
| `N` | Xem kích thước (Dimensions) trong Side Panel |

## 5. Lưu ý & lỗi thường gặp

- Join sai thứ tự chọn khiến object giữ lại Origin không mong muốn.
- Không Merge by Distance sau khi Join dễ để lại vertex trùng gây lỗi shading hoặc bóng đen (n-gon lỗi).
- Bỏ qua kiểm tra Face Orientation khiến một số mặt bị tối/đen khi render do normal ngược.
- Tạo biến thể nhưng làm sai lệch kích thước tổng thể khiến module không còn khớp lưới.

## 6. Checklist thực hành

- [ ] Đã Apply toàn bộ modifier theo đúng thứ tự.
- [ ] Đã Join các object con thành một object tường hoàn chỉnh.
- [ ] Đã chạy Merge by Distance và kiểm tra Normal.
- [ ] Đã xác nhận kích thước tổng thể đúng đơn vị lưới.
- [ ] Đã tạo ít nhất một biến thể tường để tránh lặp lại đơn điệu.

## 7. Tóm tắt

Bài học chốt lại quy trình dựng tường: Apply modifier, Join các phần rời, dọn dẹp mesh (merge, normal) và tạo biến thể nhẹ. Kết quả là một bộ module tường sạch, sẵn sàng cho các bài tạo cửa, sàn và lắp ráp scene tiếp theo.
