# Khóa học Blender: Dựng robot Mech Sci-Fi — Khớp hông và đùi trên

**Hình thức:** Học theo bài Markdown kết hợp thực hành trong Blender.  
**Phạm vi:** Mô hình hóa khớp hông, cơ cấu quay, chi tiết cơ khí trang trí và phần đùi trên của robot đối xứng hai bên.  
**Đối tượng:** Người đã biết thao tác căn bản trong Blender và muốn luyện hard-surface modeling cho nhân vật game/mech.

## 1. Bạn sẽ làm được gì?

Sau khi hoàn thành, bạn có thể:

- Tổ chức các mesh đối xứng bằng `Mirror Modifier` và hiểu vì sao phải chú ý **Object Origin**.
- Tạo khớp hông có hình dạng gợi ý chuyển động xoay; chọn vị trí tâm quay để chuẩn bị cho rigging ở công đoạn khác.
- Dùng `Extrude`, `Inset`, `Loop Cut`, `Knife`, `Bevel` và `Bridge Edge Loops` để dựng chi tiết hard-surface.
- Tận dụng hình học có sẵn để tạo vỏ trục, vòng cơ khí, bu lông, khe thông gió và tấm nối.
- Rà soát `Normals`, hiện tượng chồng bề mặt, khe hở và hình dạng từ nhiều góc nhìn.

## 2. Lộ trình học

| Bài | Chủ đề | Sản phẩm sau bài |
| --- | --- | --- |
| [01](bai_hoc/01-khoi-tao-khop-hong-doi-xung.md) | Dựng khớp hông đối xứng | Một cặp khớp tròn gắn vào thân |
| [02](bai_hoc/02-khop-xoay-va-tam-quay.md) | Tạo khớp xoay ngang và chọn tâm quay | Cụm nối gồm hai nửa khớp |
| [03](bai_hoc/03-vo-truc-co-khi.md) | Tạo vỏ trục/cụm trang trí cơ khí | Cụm trục nhiều tầng có vành, rãnh và nắp |
| [04](bai_hoc/04-bu-long-va-ket-noi-hong.md) | Tạo bu lông và hoàn tất nối hông | Chi tiết bắt vít phân bố quanh khớp |
| [05](bai_hoc/05-dung-hinh-dui-tren.md) | Dựng hình khối chính của đùi trên | Tấm giáp đùi có bo cạnh và biên dạng rõ |
| [06](bai_hoc/06-chi-tiet-noi-va-hoc-dui.md) | Hốc lõm và gờ nối của đùi | Các tấm nối và hốc cơ khí của đùi |
| [07](bai_hoc/07-hoan-thien-dui-va-ra-soat.md) | Khe thông gió, đai ốc nhỏ và kiểm tra | Cụm hông–đùi trên hoàn thiện ở mức modeling |

**Cách học:** Đọc mục tiêu → thao tác trong Blender → kiểm tra checkpoint → làm bài tập → trả lời 5 câu trắc nghiệm. Mỗi bài là một file `.md` có thể mở độc lập.

## 3. Chuẩn bị

- Blender và các thao tác cơ bản với `Object Mode`, `Edit Mode`, chọn vertex/edge/face.
- Một mô hình thân robot, ba lô và hình tham chiếu trước/bên nếu đang dựng tiếp một robot có sẵn. **Các tệp `.blend` và ảnh tham chiếu không nằm trong học liệu này.** Nếu chỉ luyện kỹ thuật, có thể dùng vài khối đơn giản làm thân và vị trí định hướng, rồi tự chọn tỉ lệ hợp lý.
- Lưu dự án Blender thường xuyên tại những điểm checkpoint.
- Bàn phím có numpad giúp dùng các góc nhìn chuẩn; nếu không có, chuyển bằng menu `View`/view gizmo tương ứng.

## 4. Các nguyên tắc xuyên suốt

1. **Giữ đối xứng:** Khi tạo mesh một bên, đưa `3D Cursor` về gốc và dịch chuyển hình học trong `Edit Mode` để **origin** vẫn ở vị trí cần làm mặt phẳng gương. Kiểm tra modifier `Mirror` đang sử dụng trục phù hợp (ở quy trình này là X).
2. **Chọn đúng đối tượng nguồn khi sao chép modifier:** `Ctrl + L` → `Copy Modifiers` sao chép từ **đối tượng đang active (chọn cuối)** sang đối tượng được chọn còn lại.
3. **Phân biệt mô hình với chuyển động:** Tạo hình bản lề và đặt `3D Cursor` tại tâm là bước chuẩn bị. Bài học **không tạo rig, bone hoặc animation**.
4. **Giữ mesh sạch:** Kiểm tra `Normals` bằng `Shift + N`, soát phần bề mặt chồng nhau, mặt thừa bên trong và khe hở không mong muốn.
5. **Không có số đo bắt buộc:** Tỉ lệ, độ dày và vị trí phụ thuộc mẫu robot và hình tham chiếu đang dùng.

## 5. Bảng phím tắt nhanh

| Phím / thao tác | Công dụng |
| --- | --- |
| `Tab` | Chuyển `Object Mode` ↔ `Edit Mode` |
| `Shift + A` | Menu thêm primitive |
| `Shift + C` | Đưa `3D Cursor` về tâm thế giới và điều chỉnh khung nhìn |
| `G`, `R`, `S` | Move, Rotate, Scale |
| `X`, `Y`, `Z` sau lệnh biến đổi | Khóa theo trục tương ứng |
| `E`, `I`, `F` | Extrude, Inset, tạo mặt |
| `Ctrl + R`, `Ctrl + B`, `K` | Loop Cut, Bevel, Knife |
| `Shift + D`, `P` → `Selection` | Duplicate, Separate Selection |
| `Ctrl + L` → `Copy Modifiers` | Sao chép modifier từ đối tượng active |
| `Ctrl + J` | Gộp các object thành một object |
| `L` (trong Edit Mode) | Chọn linked geometry dưới con trỏ |
| `Alt + A`, `Ctrl + I` | Bỏ chọn, đảo vùng chọn trong Edit Mode |
| `Shift + S` → `Cursor to Selected` | Đưa con trỏ vào tâm vùng được chọn |
| `H`, `Alt + H` | Ẩn và hiện lại object/geometry tùy mode |
| `Shift + N` | Recalculate Normals |
| `Z` → `Wireframe` / `Solid` | Đổi kiểu hiển thị viewport |
| `Numpad 1`, `3`, `7` | Nhìn trước, bên, trên |
| `Ctrl + S` | Lưu dự án |

> **Lưu ý về phiên bản:** Những phím tắt ở trên dùng keymap Blender thông dụng. Trong `Knife` ở Blender hiện đại, `C` là `Cut Through` và `X/Y/Z` là ràng buộc theo trục; giao diện/keymap cũ có thể khác. Luôn kiểm tra gợi ý phím trong thanh trạng thái của Blender. Tài liệu đối chiếu: [Blender Manual — Knife Topology Tool](https://docs.blender.org/manual/en/5.0/modeling/meshes/editing/mesh/knife_topology_tool.html).

## 6. Ranh giới của khóa học

Khóa học này chỉ hoàn thiện **modeling của hông và đùi trên**. Không hướng dẫn tạo toàn bộ thân robot từ đầu, cẳng chân, mắt cá, bàn chân, gán vật liệu, rigging hay animation. Tên và các bộ phận trong bài được dùng để mô tả hình học; cấu tạo cơ khí không được xem là mô phỏng động học thật.
