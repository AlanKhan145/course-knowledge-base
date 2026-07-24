# 028 — Pillar Details – Knife & Bisect

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 02 — Modular Dungeon |
| **Bài học** | Pillar Details – Knife & Bisect |
| **Thời lượng** | 9:38 |
| **Chủ đề chính** | Sử dụng Knife và Bisect |

## 1. Mục tiêu bài học

- Hiểu và sử dụng thành thạo Knife Tool (`K`) để cắt topology tự do trên mesh.
- Hiểu và sử dụng công cụ Bisect để cắt mesh theo một mặt phẳng chính xác.
- Áp dụng hai công cụ này để tạo các rãnh dọc (fluting), vết nứt đá, hoặc chia đối xứng cột.
- Biết kết hợp Knife/Bisect với Extrude, Inset để hoàn thiện chi tiết bề mặt đá.

## 2. Nội dung chính

**Knife Tool (`K`)** cho phép cắt topology mới trực tiếp lên bề mặt mesh theo đường tự do do người dùng vẽ, tạo vertex/edge mới đúng theo hình dạng vẽ ra. Trong Edit Mode, nhấn `K`, click để đặt các điểm cắt dọc theo bề mặt, `Enter` để xác nhận đường cắt. Giữ `C` trong khi dùng Knife để bật chế độ cắt "Angle Constrain" (giữ góc 45°/ngang/dọc), hoặc `Z` để bật/tắt "Cut Through" (cắt xuyên qua các mặt phía sau). Knife rất hữu ích để tạo các rãnh trang trí dọc thân cột (fluting) hoặc các vết nứt bất quy tắc trên bề mặt đá.

**Bisect** (tìm trong menu Edit Mode qua `Mesh > Bisect` hoặc phím tắt tùy chỉnh) cắt toàn bộ mesh đã chọn bằng một mặt phẳng vô hạn do người dùng kéo chuột định hướng, tạo ra một đường cắt thẳng, chính xác toán học — thích hợp để cắt mesh làm đôi đối xứng, cắt ngang chuẩn một mặt phẳng, hoặc tạo các đường phân đoạn kiến trúc rõ ràng (ví dụ chia rõ ranh giới giữa các bậc thang ở đế cột). Bisect có tùy chọn "Clear Inner"/"Clear Outer" để xoá luôn phần mesh một bên của mặt cắt, và "Fill" để tự động vá lỗ sau khi xoá.

Sau khi có đường cắt mới từ Knife hoặc Bisect, thường kết hợp thêm `I` (Inset) và `E` (Extrude) hoặc `Alt+S` (Shrink/Fatten âm) để đẩy sâu rãnh vào trong, tạo hiệu ứng rãnh khắc (fluting) hoặc vết nứt có chiều sâu thực sự thay vì chỉ là đường vẽ phẳng trên bề mặt.

## 3. Quy trình thực hành gợi ý

1. Vào Edit Mode trên mesh cột, chọn vùng thân cột cần thêm rãnh dọc.
2. Dùng Knife (`K`) vẽ các đường cắt dọc song song quanh chu vi thân cột (bật Angle Constrain để giữ đường thẳng đứng).
3. Sau khi có topology mới, chọn từng dải giữa hai đường cắt, Inset nhẹ rồi Extrude âm để tạo rãnh lõm.
4. Dùng Bisect để cắt cột theo mặt phẳng ngang/dọc nếu cần chia đối xứng hoặc tạo ranh giới chi tiết mới, chọn Fill để tự vá mặt cắt.
5. Kiểm tra lại topology bằng chế độ hiển thị Wireframe, xoá các vertex/edge thừa không cần thiết (`X > Dissolve`).
6. Shade Smooth + Auto Smooth để kiểm tra bề mặt sau khi thêm chi tiết.

## 4. Phím tắt & công cụ liên quan

| Phím tắt | Chức năng |
|---|---|
| `K` | Knife Tool |
| `C` (trong Knife) | Angle Constrain |
| `Z` (trong Knife) | Bật/tắt Cut Through |
| `Enter` | Xác nhận đường cắt Knife |
| Bisect (menu Mesh) | Cắt mesh theo mặt phẳng, có Clear Inner/Outer, Fill |
| `I` | Inset Faces |
| `Alt+S` | Shrink/Fatten (đẩy mặt theo pháp tuyến) |
| `X` | Delete / Dissolve |

## 5. Lưu ý & lỗi thường gặp

- Dùng Knife mà không bật Cut Through có thể chỉ cắt được mặt trước, bỏ sót mặt sau của mesh.
- Đường Knife không khớp lưới (không snap vào vertex/edge có sẵn) tạo ra topology lộn xộn, khó chỉnh sửa sau.
- Bisect không kiểm tra hướng mặt phẳng cắt (giữ `Shift` để giới hạn theo trục) dễ cắt sai vị trí mong muốn.
- Sau khi cắt, không dissolve các vertex/edge thừa khiến mesh có n-gon hoặc topology rối khi thêm Subdivision Surface.

## 6. Checklist thực hành

- [ ] Đã dùng Knife tạo được ít nhất một chi tiết rãnh/vết cắt trên cột.
- [ ] Đã dùng Bisect để cắt mesh theo mặt phẳng chính xác ít nhất một lần.
- [ ] Đã đẩy sâu rãnh bằng Inset + Extrude âm hoặc Shrink/Fatten.
- [ ] Đã dọn dẹp topology thừa sau khi cắt.
- [ ] Đã kiểm tra bề mặt dưới Shade Smooth.

## 7. Tóm tắt

Knife và Bisect là hai công cụ bổ sung cho Bevel: Knife cắt tự do theo hình dạng mong muốn, Bisect cắt chính xác theo mặt phẳng toán học. Kết hợp cả hai giúp tạo các chi tiết khắc, rãnh và ranh giới kiến trúc phức tạp hơn trên cột đá.
