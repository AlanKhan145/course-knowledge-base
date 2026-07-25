# 010 — Selection, Visibility and Collections

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 02 — Fundamentals |
| **Bài học** | Selection, Visibility and Collections |
| **Thời lượng** | 4:01 |
| **Chủ đề chính** | Chọn object, ẩn/hiện và tổ chức scene bằng Collections |

## 1. Mục tiêu bài học

- Thành thạo các cách chọn object: click, Shift+Click, box/circle/lasso select.
- Biết chọn tất cả / bỏ chọn tất cả nhanh bằng A / Alt+A.
- Sử dụng H / Alt+H / Shift+H để ẩn/hiện object theo nhiều cách.
- Hiểu cách tổ chức scene bằng Collections trong Outliner.

## 2. Nội dung chính

Chọn object là thao tác nền tảng trước khi thực hiện bất kỳ lệnh nào trong Blender. **Click trái** chọn một object duy nhất (bỏ chọn các object khác); **Shift + Click trái** thêm/bớt object khỏi vùng chọn hiện tại (Active Object — object được chọn sau cùng — có viền sáng hơn các object khác, quan trọng cho các thao tác dùng nhiều object như Parenting hay Snap).

Ngoài click đơn, Blender cung cấp 3 công cụ chọn vùng trên Toolbar: **Box Select** (`B` — kéo một khung chữ nhật), **Circle Select** (`C` — quét như cọ vẽ hình tròn, lăn chuột để đổi bán kính, click chuột phải hoặc `Esc` để thoát công cụ), và **Lasso Select** (giữ `Ctrl` + kéo chuột trái để vẽ vùng chọn tự do).

Phím `A` chọn toàn bộ object trong scene (hoặc toàn bộ vertex/edge/face nếu đang ở Edit Mode); `Alt + A` bỏ chọn tất cả.

Về **ẩn/hiện**: `H` ẩn object đang chọn; `Alt + H` hiện lại toàn bộ object đã ẩn trước đó; `Shift + H` ẩn tất cả **trừ** object đang chọn (rất hữu ích để cô lập một object khi làm việc chi tiết, tương tự Local View `/`). Trạng thái ẩn/hiện cũng có thể điều khiển qua icon hình con mắt cạnh tên object trong **Outliner**.

**Collections** là cơ chế nhóm object trong Outliner, hoạt động như thư mục ảo giúp tổ chức scene theo logic (ví dụ "Props", "Lights", "Background"). Tạo Collection mới bằng chuột phải trong Outliner > New Collection, hoặc nhấn `M` (Move to Collection) trên object đang chọn trong Viewport để gán nhanh. Mỗi Collection có thể ẩn/hiện toàn bộ nội dung bên trong chỉ bằng một click vào icon mắt của Collection đó, và cũng có thể loại trừ khỏi View Layer (checkbox) hoặc khỏi Render (icon máy ảnh) một cách độc lập.

## 3. Quy trình thực hành gợi ý

1. Thêm 4-5 object khác nhau vào scene.
2. Thử chọn từng object bằng click, sau đó Shift+Click để chọn nhiều object cùng lúc.
3. Dùng `B` (Box Select) và `C` (Circle Select) để chọn nhóm object trong Viewport.
4. Nhấn `A` để chọn tất cả, `Alt + A` để bỏ chọn tất cả.
5. Chọn một object, nhấn `H` để ẩn, sau đó `Alt + H` để hiện lại.
6. Chọn một object, nhấn `Shift + H` để cô lập nó (ẩn toàn bộ object khác).
7. Tạo một Collection mới trong Outliner, đặt tên, dùng `M` để chuyển các object vào Collection đó.
8. Click icon mắt của Collection để ẩn/hiện toàn bộ nhóm cùng lúc.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt |
|---|---|
| Chọn object | Click trái |
| Thêm/bớt vào vùng chọn | `Shift + Click trái` |
| Box Select | `B` |
| Circle Select | `C` |
| Lasso Select | `Ctrl + kéo chuột trái` |
| Chọn tất cả | `A` |
| Bỏ chọn tất cả | `Alt + A` |
| Ẩn object đã chọn | `H` |
| Hiện lại tất cả | `Alt + H` |
| Ẩn tất cả trừ object đang chọn | `Shift + H` |
| Chuyển vào Collection | `M` |

## 5. Lưu ý & lỗi thường gặp

- Quên object nào là Active Object (viền sáng nhất) có thể khiến các lệnh áp dụng theo (như Snap, Parent) chọn sai object tham chiếu.
- Ẩn object bằng `H` chỉ ẩn tạm thời trong Viewport hiện tại — dễ quên và tưởng object đã bị xóa; nên kiểm tra lại Outliner khi không thấy object.
- Circle Select (`C`) không tự thoát sau một lần chọn — cần nhấn chuột phải hoặc `Esc` để thoát công cụ, nếu không sẽ tiếp tục chọn khi di chuyển chuột.
- Không đặt tên rõ ràng cho Collection khiến scene lớn trở nên khó quản lý và khó tìm object cần chỉnh sửa.

## 6. Checklist thực hành

- [ ] Thành thạo chọn đơn và chọn nhiều bằng Shift+Click.
- [ ] Đã dùng cả 3 công cụ Box/Circle/Lasso Select.
- [ ] Biết ẩn/hiện bằng cả 3 phím H, Alt+H, Shift+H.
- [ ] Đã tạo và sử dụng ít nhất một Collection để nhóm object.

## 7. Tóm tắt

Việc chọn đối tượng chính xác, kết hợp ẩn/hiện linh hoạt và tổ chức scene bằng Collections là những kỹ năng quản lý cơ bản nhưng thiết yếu, giúp giữ scene gọn gàng và thao tác hiệu quả khi số lượng object tăng lên.
