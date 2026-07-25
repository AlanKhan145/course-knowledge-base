# 019 — Shortcuts and Interface Customization

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 02 — Fundamentals |
| **Bài học** | Shortcuts and Interface Customization |
| **Thời lượng** | 5:08 |
| **Chủ đề chính** | Tùy chỉnh phím tắt, Quick Favorites và theme |

## 1. Mục tiêu bài học

- Biết remap phím tắt qua Edit > Preferences > Keymap.
- Biết tạo menu Quick Favorites cho các lệnh dùng thường xuyên.
- Biết tùy chỉnh theme giao diện.
- Biết cách lưu lại cấu hình để dùng ở các phiên làm việc sau.

## 2. Nội dung chính

Tab **Keymap** trong Edit > Preferences liệt kê toàn bộ phím tắt của Blender theo từng ngữ cảnh (3D Viewport, Object Mode, Edit Mode...), cho phép tìm kiếm theo tên lệnh và gán lại tổ hợp phím khác nếu phím mặc định xung đột với thói quen cá nhân hoặc phần mềm khác. Mỗi thay đổi được đánh dấu bằng một icon "mũi tên khôi phục" để dễ dàng trả về mặc định.

**Quick Favorites** (`Q`) là một menu pie có thể tùy chỉnh: chuột phải vào bất kỳ lệnh nào trong menu và chọn "Add to Quick Favorites" để thêm nó vào danh sách truy cập nhanh bằng phím `Q` — rất hữu ích để gom các lệnh hay dùng nhưng không có sẵn phím tắt riêng (ví dụ Shade Auto Smooth, Set Origin to Geometry...).

**Theme** trong Preferences > Themes cho phép đổi màu sắc toàn bộ giao diện: màu nền viewport, màu highlight khi chọn đối tượng, màu các editor khác nhau — có sẵn vài theme dựng sẵn (Blender Dark, Blender Light...) hoặc tùy chỉnh từng thành phần màu riêng lẻ.

Toàn bộ thay đổi Keymap, Quick Favorites và Theme được lưu vào **Preferences** của Blender (không phải vào file .blend), nên áp dụng cho mọi project mở sau này trên cùng máy tính — có thể export/import file cấu hình để mang sang máy khác qua nút "Save Preferences" hoặc export riêng từng phần.

## 3. Quy trình thực hành gợi ý

1. Mở Edit > Preferences > Keymap, tìm lệnh "Delete" và thử xem tổ hợp phím hiện tại của nó.
2. Chuột phải vào lệnh Shade Smooth trong Object menu, chọn "Add to Quick Favorites".
3. Nhấn `Q` trong viewport để mở Quick Favorites và xác nhận lệnh vừa thêm xuất hiện.
4. Vào Preferences > Themes, thử đổi màu nền 3D Viewport sang một màu khác rồi trả lại mặc định.
5. Nhấn "Save Preferences" (hoặc bật Auto-Save Preferences) để lưu lại toàn bộ tùy chỉnh.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt |
|---|---|
| Mở menu Preferences | Edit > Preferences |
| Mở Quick Favorites | `Q` |
| Thêm lệnh vào Quick Favorites | Chuột phải vào lệnh > Add to Quick Favorites |
| Lưu Preferences thủ công | Nút "Save Preferences" trong cửa sổ Preferences |

## 5. Lưu ý & lỗi thường gặp

- Remap một phím tắt phổ biến (ví dụ `G`, `S`, `R`) có thể khiến các hướng dẫn/video khác trở nên khó theo dõi vì không còn khớp — nên cân nhắc kỹ trước khi đổi các phím cơ bản.
- Nếu không bật Auto-Save Preferences, thay đổi Keymap/Theme có thể bị mất khi cập nhật Blender lên phiên bản mới mà không export trước.
- Theme quá tối hoặc quá sáng có thể khiến khó phân biệt trạng thái selected/active — nên kiểm tra độ tương phản trước khi tùy chỉnh sâu.

## 6. Checklist thực hành

- [ ] Đã mở và tìm được một lệnh trong tab Keymap.
- [ ] Đã thêm ít nhất một lệnh vào Quick Favorites và gọi lại bằng phím Q.
- [ ] Đã thử đổi màu trong tab Themes.
- [ ] Đã biết cách lưu lại Preferences.

## 7. Tóm tắt

Việc tùy chỉnh phím tắt, Quick Favorites và theme không bắt buộc nhưng giúp cá nhân hóa quy trình làm việc — nên bắt đầu từ những thay đổi nhỏ, không phá vỡ các phím tắt tiêu chuẩn mà phần lớn tài liệu và cộng đồng Blender đang dùng.
