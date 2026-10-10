# Khóa học Blender: Dựng cổ và khớp nối robot Mech Sci-Fi

## Giới thiệu

Khóa học thực hành này hướng dẫn xây dựng **cụm cổ cơ khí nối với đầu robot mech**, từ các khối đỡ đơn giản đến trục xoay, khớp nối, bu-lông và các tấm ốp phong cách khoa học viễn tưởng. Học viên thao tác trực tiếp trong Blender, học cách kiểm soát hình học bằng nhiều góc nhìn và tổ chức các thành phần theo mục đích sử dụng.

**Phạm vi:** tập trung vào **phần cổ và chi tiết liên kết với đầu**. Đây không phải một giáo trình dựng toàn bộ robot từ đầu; mô hình đầu robot hoặc một khối đầu thay thế được chuẩn bị sẵn để luyện tập. Khóa học cũng không bao gồm rigging, animation, UV hay tạo vật liệu hoàn chỉnh.

## Kết quả sau khóa học

- Tạo gối đỡ từ `Cylinder` bằng thao tác chọn đỉnh, cắt bớt, `Extrude` và `Fill`.
- Tạo các đối tượng khớp độc lập từ hình học có sẵn bằng `Duplicate` và `Separate`.
- Phối hợp `Mirror`, `Clipping`, `Bevel` và `Shade Smooth` đúng tình huống.
- Dựng trục cổ dạng tròn, chi tiết inset/extrude và chốt cơ khí.
- Nhân bản, đặt bu-lông bằng `Face Snapping`, sau đó bổ sung giáp trang trí.
- Kiểm tra bề mặt, `Normals`, hình học thừa và lưu tệp `.blend` có tổ chức.

## Cần chuẩn bị

1. Blender có các chức năng `Edit Mode`, `Mirror Modifier`, `Bevel Modifier`, `Snapping` và chế độ hiển thị `Wireframe`.
2. Một mô hình **đầu robot mech** đã dựng, hoặc một mô hình đầu đơn giản có khoảng trống ở phía dưới/sau để đặt cổ.
3. Ảnh tham chiếu phía trước và bên hông nếu có; thiếu ảnh vẫn có thể thực hành bằng cách kiểm tra hình khối trong các góc nhìn trực giao.
4. Nắm sơ bộ thao tác chọn đối tượng, xoay góc nhìn và lưu tệp Blender. Các phím cốt lõi được nhắc lại trong từng bài.

> **Lưu ý thao tác:** `Numpad 1/3` dùng cho góc nhìn trước/bên; các phím `1/2/3` ở hàng số dùng để đổi chế độ chọn `Vertex/Edge/Face` khi đang ở `Edit Mode`. Nếu không có bàn phím số, dùng `View > Viewpoint`.

## Lộ trình bài học

| Thứ tự | File Markdown | Nội dung chính | Sản phẩm trung gian |
| --- | --- | --- | --- |
| 01 | [Gối đỡ sau đầu](bai-hoc/01-goi-do-sau-dau.md) | Cylinder, Mirror Clipping, Wireframe, Extrude, Fill | Giá đỡ hình học ở sau đầu |
| 02 | [Cụm cổ xoay độc lập](bai-hoc/02-cum-co-xoay.md) | Duplicate, Separate, xoay và căn trục | Bán khớp cổ có thể tách riêng |
| 03 | [Chốt trụ và chi tiết cơ khí](bai-hoc/03-chot-tru-co-khi.md) | 3D Cursor, Loop Cut, Inset, extrude theo normals | Chốt trụ và các gờ nổi |
| 04 | [Trục trung tâm và khớp nối dưới](bai-hoc/04-truc-trung-tam.md) | Circle 32 đỉnh, Extrude, Recalculate Normals, modifier | Trục cổ và vòng nối phụ |
| 05 | [Bu-lông và Face Snapping](bai-hoc/05-bu-long-snapping.md) | Linked Select, Join, Snap, Align Rotation | Các bu-lông đặt lên mặt cơ khí |
| 06 | [Ốp Sci-Fi và hoàn thiện](bai-hoc/06-op-sci-fi-hoan-thien.md) | Duplicate Face, Inset, Extrude, đối xứng và kiểm tra | Cụm cổ robot hoàn chỉnh về hình học |
| 07 | [Dự án tổng hợp và đánh giá](bai-hoc/07-du-an-tong-hop.md) | Tự dựng, kiểm tra, nộp sản phẩm | Tệp `.blend` hoàn chỉnh |

## Phương pháp học

Đọc bài học theo thứ tự, thực hiện từng bước trong Blender và chỉ tiếp tục khi đã qua **Checkpoint**. Cuối mỗi bài có **5 câu trắc nghiệm** kèm đáp án và giải thích. Bài 07 là bài dự án, cung cấp yêu cầu và tiêu chí đánh giá thay vì giải sẵn toàn bộ.

## Quy ước tên đối tượng tham khảo

Các tên sau là **đề xuất tổ chức tệp**, không phải tên có sẵn trong Blender:

```text
MECH_HEAD
NECK_REAR_BRACKET
NECK_ROTATING_HOUSING
NECK_SIDE_PIN
NECK_CENTER_SHAFT
NECK_LOWER_COUPLER
NECK_BOLTS
NECK_ARMOR_DETAILS
```

Khi một cụm cần giữ riêng để có thể xoay sau này, không `Ctrl + J` với phần đầu chỉ để dọn Outliner. `Join` chỉ phù hợp nếu bạn chủ động muốn gộp chúng thành một `Object`.

## Phím tắt nhanh

| Phím | Vai trò |
| --- | --- |
| `Tab` | Chuyển `Object Mode` / `Edit Mode` |
| `Shift + A` | Thêm mesh (menu `Add`) |
| `G`, `R`, `S` | Move, Rotate, Scale; bấm thêm `X`, `Y`, `Z` để khóa trục |
| `E`, `I`, `F` | Extrude, Inset, Fill |
| `Shift + D`, `P > Selection` | Duplicate, Separate thành đối tượng mới |
| `L` (trỏ vào mesh) | Chọn thành phần hình học liên thông |
| `B`, `Alt + A` | Box Select, Deselect All |
| `Ctrl + R` | Loop Cut |
| `Shift + S` | Snap menu để đặt `3D Cursor` |
| `Shift + N` | Recalculate Normals |
| `Ctrl + L` | `Link/Transfer Data` trong Object Mode |
| `Ctrl + J` | Join đối tượng được chọn |
| `H`, `Alt + H` | Hide, Unhide |
| `Ctrl + S` | Save |

> Phím tắt có thể khác khi tùy biến keymap. Các bước chính đều có tên công cụ để có thể tìm trong giao diện Blender.
