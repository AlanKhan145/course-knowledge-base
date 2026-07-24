# 039 — Building the Dungeon

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 02 — Modular Dungeon |
| **Bài học** | Building the Dungeon |
| **Thời lượng** | 11:45 |
| **Chủ đề chính** | Lắp ráp và render hầm ngục |

## 1. Mục tiêu bài học

- Lắp ráp toàn bộ các module đã tạo (tường, sàn, cột, cửa, đuốc, prop) thành một scene hầm ngục hoàn chỉnh.
- Sử dụng Snapping và Duplicate để ghép các module chính xác theo lưới, không hở khe hoặc chồng lấn.
- Tổ chức scene bằng Collections và đặt tên object hợp lý để dễ quản lý.
- Bố trí camera và thực hiện render cuối cùng cho toàn cảnh.

## 2. Nội dung chính

Đây là bài tổng hợp, nơi toàn bộ prop/module đã dựng riêng lẻ (barrel, crate, pillar, wall, door surround, floor, torch) được ghép lại thành một không gian thống nhất. Kỹ thuật chủ đạo là **Duplicate** (`Shift+D` cho bản sao độc lập, `Alt+D` cho bản sao liên kết dữ liệu — linked duplicate, hữu ích khi muốn sửa một chỗ áp dụng cho tất cả bản sao cùng loại) kết hợp **Snapping** (`Shift+Tab` bật, biểu tượng nam châm chọn chế độ "Increment" theo lưới hoặc "Vertex" để bắt dính đúng cạnh module kề nhau).

Quy trình gợi ý: dựng sàn trước (dùng Array hoặc Duplicate module sàn thành khu vực nền), sau đó dựng khung tường xung quanh viền, chèn module có cửa vào vị trí lối ra vào, đặt cột ở các góc/điểm nhấn kiến trúc, cuối cùng rải các prop nhỏ (thùng, đuốc gắn tường) để lấp đầy không gian và tạo điểm kể chuyện (storytelling) cho scene.

Nên tổ chức Outliner bằng **Collections** riêng cho từng nhóm: "Walls", "Floors", "Props", "Lights" — giúp dễ ẩn/hiện, chọn nhóm, và kiểm soát hiệu năng viewport khi scene có nhiều object. Đặt tên object rõ ràng (Wall_North_01, Torch_02...) thay vì để tên mặc định "Cube.003" giúp việc chỉnh sửa về sau dễ dàng hơn nhiều.

Khi bố cục đã ổn, thêm **Camera** (`Shift+A > Camera`), dùng `Numpad 0` để xem qua ống kính camera, điều chỉnh Focal Length và vị trí để có góc nhìn ấn tượng nhất (thường là góc thấp, hơi chéo để tôn chiều cao cột và độ sâu hành lang). Cuối cùng, kiểm tra lại Render Settings (Engine Eevee hoặc Cycles, Resolution, Samples) trước khi render (`F12`) hình ảnh cuối cùng của module.

## 3. Quy trình thực hành gợi ý

1. Tạo các Collection: Walls, Floors, Props, Lights để tổ chức scene.
2. Dựng nền sàn bằng cách Duplicate/Array module sàn theo lưới.
3. Dựng viền tường bao quanh không gian, dùng Snapping để ghép khít từng module.
4. Chèn module tường có cửa (đã cắt ở bài 034) vào vị trí lối ra vào.
5. Đặt cột đá tại các góc hoặc điểm nhấn kiến trúc.
6. Rải prop nhỏ (thùng gỗ, thùng hàng, đuốc gắn tường) để lấp đầy không gian.
7. Kiểm tra và tinh chỉnh lại ánh sáng (bài 038) phù hợp với bố cục thực tế.
8. Thêm Camera, canh góc nhìn, kiểm tra Render Settings rồi render (`F12`).
9. Lưu file `.blend` và xuất ảnh render cuối cùng.

## 4. Phím tắt & công cụ liên quan

| Phím tắt | Chức năng |
|---|---|
| `Shift+D` | Duplicate độc lập |
| `Alt+D` | Duplicate Linked (chia sẻ mesh data) |
| `Shift+Tab` | Bật/tắt Snapping |
| `M` | Move object vào Collection |
| `Shift+A > Camera` | Thêm Camera |
| `Numpad 0` | Xem qua ống kính Camera |
| `Ctrl+Numpad 0` | Đặt Camera theo góc nhìn hiện tại |
| `F12` | Render ảnh |

## 5. Lưu ý & lỗi thường gặp

- Không bật Snapping khi ghép module dẫn đến hở khe nhỏ khó phát hiện bằng mắt thường ở viewport nhưng lộ rõ khi render.
- Dùng Duplicate thường thay vì Linked Duplicate cho các object cần đồng bộ chỉnh sửa hàng loạt (ví dụ sửa lại một mẫu tường) gây mất công sửa từng cái.
- Không tổ chức Collection khiến Outliner rối, khó quản lý khi scene có hàng chục/hàng trăm object.
- Bỏ qua kiểm tra lại ánh sáng sau khi bố cục thay đổi khiến một số khu vực bị tối/sáng bất hợp lý so với bài 038.
- Render Samples quá thấp gây nhiễu hạt (noise) rõ rệt trong ảnh cuối, đặc biệt ở scene tối nhiều đèn điểm.

## 6. Checklist thực hành

- [ ] Đã tổ chức scene bằng Collections rõ ràng.
- [ ] Đã ghép sàn, tường, cột, cửa khít nhau bằng Snapping.
- [ ] Đã rải prop nhỏ tạo điểm nhấn cho scene.
- [ ] Đã kiểm tra và tinh chỉnh lại ánh sáng theo bố cục thực tế.
- [ ] Đã đặt Camera và render ảnh cuối cùng.
- [ ] Đã lưu file `.blend` hoàn chỉnh.

## 7. Tóm tắt

Đây là bài lắp ráp tổng hợp toàn bộ Module 02: kết hợp mọi module đã dựng thành một scene hầm ngục thống nhất, hoàn thiện bằng camera và render cuối cùng — hoàn tất mục tiêu học tập theo hướng dự án (project-based) của module.
