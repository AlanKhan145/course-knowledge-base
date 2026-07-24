# 031 — Mirroring the Walls

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 02 — Modular Dungeon |
| **Bài học** | Mirroring the Walls |
| **Thời lượng** | 5:15 |
| **Chủ đề chính** | Mirror Modifier cho tường |

## 1. Mục tiêu bài học

- Hiểu nguyên lý hoạt động của Mirror modifier: nhân bản hình học đối xứng qua một trục dựa trên Origin của object.
- Thiết lập Mirror modifier đúng trục (X/Y/Z) cho module tường.
- Sử dụng tuỳ chọn Clipping và Merge để tránh hở khe tại đường đối xứng.
- Tận dụng Mirror để chỉ cần model một nửa chi tiết, tiết kiệm thời gian dựng hình.

## 2. Nội dung chính

**Mirror modifier** (Add Modifier > Generate > Mirror) tạo bản sao đối xứng của mesh qua một hoặc nhiều trục (X, Y, Z), lấy **Origin của object** làm mặt phẳng đối xứng. Đây là kỹ thuật rất hiệu quả cho các chi tiết tường đối xứng (ví dụ hoa văn, gờ trang trí đối xứng hai bên) — người dựng chỉ cần model một nửa, phần còn lại tự động sinh ra và cập nhật theo thời gian thực khi chỉnh sửa nửa gốc.

Trước khi thêm Mirror, cần đặt Origin của object đúng vị trí mặt phẳng muốn đối xứng (thường dùng `Shift+C` để đưa 3D Cursor về gốc toạ độ, rồi `Object > Set Origin > Origin to 3D Cursor`, hoặc căn Origin bằng cách di chuyển object). Sai vị trí Origin sẽ khiến bản mirror lệch khỏi vị trí mong muốn.

Hai tuỳ chọn quan trọng trong panel Mirror modifier:
- **Clipping**: ngăn các vertex nằm gần mặt phẳng đối xứng bị tách rời khi di chuyển trong Edit Mode, giữ đường nối giữa và bản mirror luôn liền mạch (không hở khe).
- **Merge** (và Merge Distance): tự động hợp nhất các vertex trùng nhau tại đường giữa, tránh double vertices gây lỗi shading hoặc lỗi khi Apply modifier.

Sau khi hoàn thiện chi tiết trên nửa gốc, có thể **Apply** modifier (`Ctrl+A` trong danh sách modifier hoặc nút dropdown > Apply) để "đóng băng" kết quả thành mesh thật, cần thiết trước khi export hoặc thêm các modifier khác phụ thuộc vào mesh cuối (như Boolean ở bài cắt cửa).

## 3. Quy trình thực hành gợi ý

1. Xoá bớt một nửa chi tiết trên module tường (chỉ giữ lại nửa cần model chi tiết).
2. Đặt Origin của object đúng tại mặt phẳng đối xứng mong muốn.
3. Thêm Mirror modifier, chọn đúng trục đối xứng (thường là X).
4. Bật Clipping và Merge để tránh hở khe tại đường giữa.
5. Tiếp tục chỉnh sửa chi tiết trên nửa gốc, quan sát bản mirror cập nhật theo thời gian thực trong viewport.
6. Khi hoàn tất, Apply modifier nếu cần mesh cố định cho các bước sau (Boolean, export).

## 4. Phím tắt & công cụ liên quan

| Phím tắt / Thao tác | Chức năng |
|---|---|
| `Shift+C` | Đưa 3D Cursor về gốc toạ độ (0,0,0) |
| Object > Set Origin > Origin to 3D Cursor | Đặt Origin tại vị trí mặt đối xứng |
| Mirror modifier | Generate đối xứng theo trục X/Y/Z |
| **Clipping** (tuỳ chọn) | Giữ vertex gần trục không tách khỏi mặt đối xứng |
| **Merge** (tuỳ chọn) | Hợp nhất vertex trùng tại đường giữa |
| Modifier dropdown > Apply | Áp dụng modifier thành mesh thật |

## 5. Lưu ý & lỗi thường gặp

- Origin không nằm đúng mặt phẳng đối xứng khiến bản mirror lệch vị trí hoàn toàn.
- Không bật Clipping khiến khi kéo vertex gần trục giữa, xuất hiện khe hở giữa hai nửa.
- Không bật Merge để lại vertex trùng lặp tại đường giữa, gây lỗi bóng đổ (shading artifact) hoặc lỗi khi Apply.
- Apply Mirror quá sớm trước khi hoàn tất chỉnh sửa khiến mất khả năng chỉnh đối xứng tự động, phải sửa thủ công cả hai bên.

## 6. Checklist thực hành

- [ ] Đã đặt Origin đúng vị trí mặt phẳng đối xứng.
- [ ] Đã thêm Mirror modifier với trục đúng.
- [ ] Đã bật Clipping và Merge.
- [ ] Đã kiểm tra không có khe hở tại đường giữa khi chỉnh sửa.
- [ ] Đã quyết định thời điểm hợp lý để Apply modifier.

## 7. Tóm tắt

Mirror modifier giúp tận dụng tính đối xứng để giảm một nửa khối lượng modelling chi tiết tường, đồng thời giữ hai bên luôn đồng bộ khi chỉnh sửa. Bài học tiếp theo sẽ hoàn thiện và nối các phần tường lại với nhau thành module hoàn chỉnh.
