# 011 — Editing Objects

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 01 — Introduction & Setup |
| **Bài học** | Editing Objects |
| **Thời lượng** | 8:19 |
| **Chủ đề chính** | Chỉnh sửa đối tượng, Object Mode và Edit Mode |

## 1. Mục tiêu bài học

- Phân biệt rõ Object Mode và Edit Mode, và biết khi nào dùng chế độ nào.
- Thành thạo 3 mức chọn trong Edit Mode: Vertex, Edge, Face.
- Nắm vững 3 phép biến đổi cơ bản: Move (G), Rotate (R), Scale (S).
- Biết dùng Extrude để mở rộng hình học từ một mesh có sẵn.

## 2. Nội dung chính

Blender có hai chế độ làm việc chính với mesh, chuyển đổi qua lại bằng phím `Tab`:

- **Object Mode**: thao tác trên toàn bộ object như một khối thống nhất (di chuyển, xoay, scale cả object, gán vật liệu, thêm modifier...).
- **Edit Mode**: thao tác trực tiếp trên thành phần hình học bên trong mesh — **Vertex** (đỉnh), **Edge** (cạnh), **Face** (mặt). Chuyển đổi giữa 3 mức chọn này bằng phím `1`, `2`, `3` (hàng số phía trên, không phải Numpad) khi đang ở Edit Mode.

Ba phép biến đổi (Transform) cơ bản áp dụng được ở cả hai chế độ:

- **Move — `G`** (Grab): di chuyển. Có thể giới hạn theo trục bằng cách gõ thêm `X`, `Y`, hoặc `Z` sau khi bấm G (ví dụ `G` rồi `Z` chỉ di chuyển theo trục Z).
- **Rotate — `R`**: xoay quanh một trục hoặc điểm pivot.
- **Scale — `S`**: phóng to/thu nhỏ.

Có thể gõ số ngay sau các phím này để nhập giá trị chính xác (ví dụ `G X 2 Enter` di chuyển 2 đơn vị theo trục X).

**Extrude (`E`)** là công cụ đặc trưng của Edit Mode: kéo dài một Face/Edge/Vertex đã chọn thành hình học mới, giữ nguyên kết nối với phần mesh gốc — đây là kỹ thuật modeling cơ bản và quan trọng nhất để xây dựng hình khối phức tạp từ một primitive đơn giản (ví dụ: extrude mặt trên của Cylinder để tạo tháp).

Các công cụ chỉnh sửa mesh bổ trợ khác thường gặp: **Loop Cut** (`Ctrl + R`) thêm một vòng cạnh mới cắt ngang mesh; **Bevel** (`Ctrl + B`) vát cạnh/góc để tạo độ mềm mại; **Inset Face** (`I`) tạo một mặt mới thu nhỏ bên trong mặt đã chọn — thường dùng trước khi Extrude để tạo chi tiết lõm/lồi có kiểm soát.

## 3. Quy trình thực hành gợi ý

1. Chọn Cube mặc định, bấm `Tab` để vào Edit Mode.
2. Thử chuyển qua 3 mức chọn Vertex/Edge/Face bằng phím `1`/`2`/`3`, quan sát cách chọn khác nhau.
3. Chọn một mặt (Face) trên cùng, dùng `I` để inset, sau đó `E` để extrude mặt đó lên cao tạo một khối nhô.
4. Thực hành `G`, `R`, `S` kết hợp giới hạn trục (`G Z`, `S X Y`...) trên các vertex/edge đã chọn.
5. Thử `Ctrl + R` để thêm một loop cut giữa mesh, và `Ctrl + B` để bevel một cạnh.
6. Quay lại Object Mode bằng `Tab`, thử `G`/`R`/`S` ở cấp object để thấy sự khác biệt so với Edit Mode.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt |
|---|---|
| Chuyển Object Mode ↔ Edit Mode | `Tab` |
| Chọn Vertex / Edge / Face | `1` / `2` / `3` |
| Move | `G` |
| Rotate | `R` |
| Scale | `S` |
| Giới hạn trục X/Y/Z | Gõ thêm `X`/`Y`/`Z` sau G/R/S |
| Extrude | `E` |
| Inset Face | `I` |
| Loop Cut | `Ctrl + R` |
| Bevel | `Ctrl + B` |
| Chọn tất cả / Bỏ chọn | `A` / `Alt + A` |
| Box Select | `B` |

## 5. Lưu ý & lỗi thường gặp

- Quên mình đang ở Edit Mode hay Object Mode dễ dẫn đến thao tác sai đối tượng — luôn nhìn tiêu đề chế độ ở góc trên trái viewport để xác nhận.
- Extrude nhiều lần liên tiếp mà không kiểm soát trục dễ tạo hình học méo mó — nên giới hạn trục (ví dụ `E Z`) khi cần kéo dài theo một hướng cụ thể.
- Sau khi Scale object ở Object Mode, giá trị Scale không về lại 1.0 sẽ gây rắc rối cho modifier sau này — nên `Ctrl + A > Apply > Scale` khi hình dạng đã ổn định.
- Nhầm lẫn giữa xóa Vertex/Edge/Face (`X` trong Edit Mode, có nhiều tùy chọn như Delete Faces, Dissolve Faces) — chọn sai tùy chọn có thể để lại lỗ hổng hoặc cạnh thừa không mong muốn.

## 6. Checklist thực hành

- [ ] Đã chuyển qua lại thành thạo giữa Object Mode và Edit Mode.
- [ ] Đã dùng thành thạo 3 mức chọn Vertex/Edge/Face.
- [ ] Đã thực hành G/R/S có giới hạn trục.
- [ ] Đã dùng Extrude để tạo hình học mới từ mesh có sẵn.
- [ ] Đã thử qua Loop Cut, Bevel, Inset Face.

## 7. Tóm tắt

Edit Mode cho phép thao tác trực tiếp trên Vertex/Edge/Face của mesh, kết hợp với các phép biến đổi G/R/S và công cụ Extrude để xây dựng hình khối phức tạp từ những primitive đơn giản — đây là nền tảng của toàn bộ kỹ năng modeling trong Blender.
