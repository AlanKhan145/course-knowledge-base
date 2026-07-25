# 013 — The Edit Mode

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 02 — Fundamentals |
| **Bài học** | The Edit Mode |
| **Thời lượng** | 3:57 |
| **Chủ đề chính** | Chuyển đổi Object Mode/Edit Mode và ba chế độ chọn thành phần mesh |

## 1. Mục tiêu bài học

- Hiểu sự khác nhau giữa Object Mode và Edit Mode.
- Biết chuyển đổi qua lại bằng phím Tab.
- Nắm rõ 3 chế độ chọn: Vertex, Edge, Face (phím 1/2/3).
- Phân biệt được khái niệm Object Data (Mesh) và Object (container transform).

## 2. Nội dung chính

**Object Mode** là chế độ mặc định khi mở Blender, nơi mọi thao tác (Move, Rotate, Scale, Add, Delete) áp dụng lên toàn bộ object như một khối thống nhất. **Edit Mode** cho phép chỉnh sửa cấu trúc hình học bên trong object đó — tức các thành phần **Vertex** (đỉnh), **Edge** (cạnh), **Face** (mặt) tạo nên mesh. Chuyển đổi giữa hai chế độ bằng phím `Tab` (khi con trỏ chuột đang ở trong Viewport và có object đang được chọn), hoặc qua dropdown Mode ở góc trên trái Viewport.

Trong Edit Mode, có 3 **chế độ chọn thành phần** (Selection Mode) tương ứng phím `1` (Vertex Select), `2` (Edge Select), `3` (Face Select), hiển thị bằng 3 icon ở header Viewport. Mỗi chế độ phù hợp cho từng loại thao tác: chọn Vertex để nắn hình chi tiết, chọn Edge để dùng Loop Cut/Bevel cạnh, chọn Face để Extrude/Inset theo mặt.

Về mặt kỹ thuật, Blender phân biệt **Object** (là một "container" chứa Transform — Location/Rotation/Scale — và tham chiếu đến dữ liệu) và **Object Data** (Mesh Data — cấu trúc hình học thực sự gồm danh sách vertex, edge, face). Nhiều Object có thể **link** (liên kết) cùng chung một Mesh Data (qua Alt+D — Linked Duplicate); khi đó chỉnh sửa trong Edit Mode ở một object sẽ ảnh hưởng đến tất cả object dùng chung Mesh Data đó, trong khi Move/Rotate/Scale ở Object Mode chỉ ảnh hưởng riêng từng object. Tên Mesh Data hiển thị trong Properties Editor tab Object Data (icon hình tam giác xanh lá) và trong Outliner khi mở rộng object.

## 3. Quy trình thực hành gợi ý

1. Thêm một Cube, nhấn `Tab` để vào Edit Mode, quan sát các chấm vertex xuất hiện tại 8 góc.
2. Lần lượt nhấn `1`, `2`, `3` để chuyển qua Vertex/Edge/Face Select, quan sát cách hiển thị thay đổi.
3. Chọn một vertex, quan sát thông tin tọa độ trong N-panel (tab Item).
4. Nhấn `Tab` để quay lại Object Mode, quan sát Cube trở lại trạng thái nguyên khối.
5. Duplicate object bằng `Alt + D` (Linked Duplicate), vào Edit Mode chỉnh sửa một bản, quan sát bản còn lại thay đổi theo.
6. So sánh với `Shift + D` (Duplicate thường, không link) để thấy Mesh Data độc lập không bị ảnh hưởng lẫn nhau.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt |
|---|---|
| Chuyển Object Mode ↔ Edit Mode | `Tab` |
| Vertex Select | `1` |
| Edge Select | `2` |
| Face Select | `3` |
| Duplicate liên kết Mesh Data | `Alt + D` |
| Duplicate độc lập | `Shift + D` |
| Make Single User (bỏ link Mesh Data) | `U` (trong Object Mode) |

## 5. Lưu ý & lỗi thường gặp

- Nhấn `Tab` khi chuột đang ở ngoài Viewport (ví dụ trong Outliner) có thể không có tác dụng như mong đợi hoặc kích hoạt chức năng khác của editor đó.
- Không nhận ra hai object đang link chung Mesh Data (do dùng Alt+D) dẫn đến việc "sửa nhầm" cả hai object cùng lúc mà không hiểu tại sao.
- Quên đổi Selection Mode phù hợp trước khi thao tác — ví dụ cố Inset Face khi đang ở Vertex Select sẽ không cho kết quả đúng như ý.
- Một object rỗng (không có Mesh Data, ví dụ Empty, Camera, Light) không có Edit Mode theo nghĩa chỉnh sửa hình học thông thường.

## 6. Checklist thực hành

- [ ] Thành thạo chuyển đổi Object Mode/Edit Mode bằng Tab.
- [ ] Biết chuyển 3 chế độ chọn Vertex/Edge/Face bằng 1/2/3.
- [ ] Hiểu và đã thử sự khác biệt giữa Alt+D và Shift+D.
- [ ] Xác định được vị trí Mesh Data trong Properties Editor.

## 7. Tóm tắt

Edit Mode là nơi diễn ra phần lớn công việc modeling thực sự — thao tác trực tiếp lên Vertex/Edge/Face của Mesh Data — và việc hiểu rõ mối quan hệ giữa Object và Object Data sẽ giúp tránh nhầm lẫn khi làm việc với nhiều bản sao object trong các bài học sau.
