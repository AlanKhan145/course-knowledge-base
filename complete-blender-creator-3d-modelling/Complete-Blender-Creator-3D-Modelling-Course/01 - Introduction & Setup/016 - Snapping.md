# 016 — Snapping

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 01 — Introduction & Setup |
| **Bài học** | Snapping |
| **Thời lượng** | 11:19 |
| **Chủ đề chính** | Kiến thức cơ bản về snapping |

## 1. Mục tiêu bài học

- Biết cách bật/tắt Snapping và mở Snap Pie Menu.
- Hiểu các Snap Target: Increment, Vertex, Edge, Face, Volume, Edge Center, Edge Perpendicular.
- Biết dùng Snap During Transform để căn chỉnh vị trí object/mesh chính xác trong lúc Move/Rotate/Scale.
- Áp dụng snapping để lắp ráp các bộ phận ngọn hải đăng khít với nhau (đèn, mái, nền đá).

## 2. Nội dung chính

**Snapping** giúp căn chỉnh vị trí chính xác giữa các đối tượng hoặc thành phần mesh, thay vì ước lượng bằng mắt. Bật/tắt nhanh bằng icon nam châm trên thanh header viewport, hoặc phím tắt `Shift + Tab`.

Loại Snap Target (chọn cạnh icon nam châm):

- **Increment**: snap theo bước lưới cố định (grid) — hữu ích khi cần di chuyển theo đơn vị tròn.
- **Vertex**: snap vào đỉnh gần nhất của mesh khác — phổ biến nhất khi ghép các object khít vào nhau.
- **Edge**: snap vào cạnh gần nhất.
- **Face**: snap lên bề mặt của mesh khác (hữu ích đặt object đứng "trên" một mặt phẳng, ví dụ đặt ngọn hải đăng lên nền đá).
- **Volume**: snap vào giữa thể tích một mesh kín.
- **Edge Center** / **Edge Perpendicular**: các chế độ snap bổ trợ chính xác hơn theo trung điểm cạnh hoặc theo phương vuông góc cạnh.

Bên cạnh nút bật/tắt và chọn Target, còn có các tùy chọn quan trọng: **Snap Base** (Closest/Center/Median/Active — điểm nào của object đang di chuyển được dùng để snap), và checkbox **Snap With Self** (có snap vào chính mesh đang chỉnh sửa hay không, quan trọng khi làm việc trong Edit Mode).

Khi Snapping đang bật, nó tự động áp dụng trong lúc `G`/`R`/`S`. Ngoài ra có thể **giữ phím `Ctrl`** trong lúc Move/Rotate/Scale để tạm thời bật snap (hoặc tạm tắt nếu Snapping đang bật sẵn) mà không cần bật nút nam châm cố định — cách này tiện khi chỉ cần snap tạm thời cho một thao tác.

**Snap Pie Menu** (`Shift + S`) chứa các lệnh snap nhanh không cần bật chế độ Snapping liên tục: Selection to Cursor, Cursor to Selected, Selection to Grid, Cursor to World Origin... rất hữu ích để đặt 3D Cursor hoặc di chuyển object/vertex tức thời đến một vị trí tham chiếu.

## 3. Quy trình thực hành gợi ý

1. Bật Snapping bằng icon nam châm hoặc `Shift + Tab`, chọn Target là "Face".
2. Chọn object ngọn hải đăng, di chuyển (`G`) và quan sát nó tự động bám lên bề mặt nền đá khi lại gần.
3. Đổi Target sang "Vertex", thử ghép hai object sao cho một đỉnh trùng khít với đỉnh của object khác.
4. Trong Edit Mode, bật Snap With Self, thử di chuyển một vertex và snap nó vào một vertex khác cùng mesh để hàn khít hai phần.
5. Dùng `Shift + S > Cursor to Selected` để đặt 3D Cursor vào đúng vị trí một vertex/object, sau đó `Shift + S > Selection to Cursor` để căn một object khác về đúng vị trí đó.
6. Thực hành giữ `Ctrl` khi Move một object để bật snap tạm thời mà không cần bật nút nam châm cố định.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt |
|---|---|
| Bật/tắt Snapping | `Shift + Tab` (hoặc icon nam châm) |
| Mở Snap Pie Menu | `Shift + S` |
| Bật snap tạm thời khi Move/Rotate/Scale | Giữ `Ctrl` |
| Chọn Snap Target | Dropdown cạnh icon nam châm trên header |

## 5. Lưu ý & lỗi thường gặp

- Quên tắt Snapping sau khi dùng xong khiến các thao tác Move/Rotate sau đó bị "dính" bất ngờ vào các object khác — nên tắt lại (`Shift + Tab`) khi không cần nữa.
- Snap Target "Face" đôi khi bám theo pháp tuyến bề mặt gây xoay object không mong muốn nếu bật thêm "Align Rotation to Target" — cần kiểm tra checkbox này có phù hợp mục đích hay không.
- Trong Edit Mode, quên bật "Snap With Self" khiến vertex không thể snap vào vertex khác cùng một mesh.
- Snapping theo Increment mặc định dùng bước lưới toàn cục, có thể không khớp tỷ lệ nhỏ của model chi tiết — cần điều chỉnh độ chia nhỏ lưới (Grid Scale trong Increment settings) nếu cần độ chính xác cao hơn.

## 6. Checklist thực hành

- [ ] Đã biết bật/tắt Snapping và mở Snap Pie Menu.
- [ ] Đã thử snap Target Face để đặt object lên bề mặt khác.
- [ ] Đã thử snap Target Vertex để ghép khít hai object.
- [ ] Đã dùng Shift+S để di chuyển 3D Cursor và căn object theo cursor.
- [ ] Đã thực hành giữ Ctrl để bật snap tạm thời.

## 7. Tóm tắt

Snapping là công cụ căn chỉnh chính xác thiết yếu khi lắp ráp nhiều bộ phận trong một scene, đặc biệt hữu ích để đặt ngọn hải đăng khít lên nền đá và ghép các chi tiết mesh không hở khe. Việc thành thạo các Snap Target và Snap Pie Menu giúp tăng tốc độ và độ chính xác trong modeling.
