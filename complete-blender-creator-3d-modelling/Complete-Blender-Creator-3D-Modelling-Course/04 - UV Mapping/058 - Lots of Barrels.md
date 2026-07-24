# 058 — Lots of Barrels

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 04 — UV Mapping |
| **Bài học** | Lots of Barrels |
| **Thời lượng** | 11:15 |
| **Chủ đề chính** | Làm việc với nhiều texture thùng gỗ |

## 1. Mục tiêu bài học
- Biết cách nhân bản (duplicate) một thùng gỗ đã UV-map để tạo nhiều biến thể.
- Hiểu sự khác nhau giữa việc dùng chung một Material/UV và tạo biến thể texture riêng cho từng bản sao.
- Biết cách quản lý Material Slot và Image Texture để mỗi thùng có thể mang một texture khác nhau (gỗ cũ, gỗ mới, có nhãn, không nhãn...).
- Tổ chức scene gọn gàng bằng Collection khi số lượng object tăng lên.

## 2. Nội dung chính
Sau khi đã có một thùng gỗ với UV hoàn chỉnh, một tình huống thực tế thường gặp là cần nhiều thùng tương tự nhau nhưng có texture khác nhau đôi chút (gỗ sẫm màu hơn, có thêm nhãn dán, đai kim loại gỉ sét...) để tránh cảm giác lặp lại (tiling) rõ rệt trong scene.

Có hai cách tiếp cận chính:
- **Duplicate Object (`Shift+D`)** tạo bản sao độc lập với mesh và material riêng — cho phép chỉnh sửa UV hoặc gán texture khác mà không ảnh hưởng tới thùng gốc.
- **Duplicate Linked (`Alt+D`)** tạo bản sao dùng chung mesh data — tiết kiệm bộ nhớ nhưng mọi chỉnh sửa mesh/UV sẽ áp dụng cho tất cả bản sao liên kết, nên không phù hợp nếu muốn UV hoặc texture khác nhau.

Vì mục tiêu là có nhiều thùng với texture khác nhau, `Shift+D` (Duplicate Object) là lựa chọn phù hợp hơn cho các bản cần material riêng, trong khi những bản dùng chung texture có thể tận dụng `Alt+D` để tiết kiệm tài nguyên.

Về mặt vật liệu, mỗi thùng có thể có một Material riêng biệt (hoặc một Material dùng chung với Image Texture khác nhau qua Material Slot), miễn là UV layout đã unwrap từ bài trước đảm bảo texture khớp đúng vị trí trên mesh, bất kể ảnh texture nào được gán vào.

## 3. Quy trình thực hành gợi ý
1. Từ thùng gỗ đã hoàn chỉnh UV, nhân bản bằng `Shift+D` để tạo vài bản sao, đặt rải rác trong scene.
2. Đặt tên lại các object và Material cho rõ ràng (Barrel_01, Barrel_02...) trong Outliner.
3. Với mỗi bản sao cần texture khác, tạo hoặc gán một Material mới, thay Image Texture trong Shader Editor.
4. Kiểm tra lại UV của từng bản trong UV Editor để chắc chắn texture mới vẫn khớp đúng với layout gỗ/nắp/đai.
5. Gom các thùng vào một Collection riêng (ví dụ "Barrels") để dễ quản lý và ẩn/hiện khi cần.
6. Dùng Randomize Transform (nếu có) hoặc xoay/scale thủ công nhẹ từng thùng để tránh cảm giác các bản sao giống hệt nhau.

## 4. Phím tắt & công cụ liên quan
| Phím tắt | Chức năng |
|---|---|
| `Shift+D` | Duplicate Object (bản sao độc lập, mesh/material riêng) |
| `Alt+D` | Duplicate Linked (bản sao dùng chung mesh data) |
| `M` | Move to Collection |
| `G` / `R` / `S` | Di chuyển / xoay / scale object trong 3D Viewport |
| `Ctrl+C` / `Ctrl+V` | Copy/Paste một số thuộc tính (ví dụ Material) giữa các object |

## 5. Lưu ý & lỗi thường gặp
- Dùng nhầm `Alt+D` khi muốn UV/texture độc lập sẽ khiến chỉnh sửa trên một bản sao ảnh hưởng tới toàn bộ các bản liên kết.
- Không đổi tên object/material khi số lượng thùng tăng lên khiến Outliner trở nên lộn xộn, khó chỉnh sửa về sau.
- Gán nhầm Image Texture vào sai Material Slot khiến một số thùng hiển thị texture sai hoặc trống (màu hồng/tím báo lỗi thiếu texture).
- Sao chép quá nhiều bản với texture độ phân giải cao có thể ảnh hưởng hiệu năng viewport; cân nhắc dùng Instance hoặc giảm độ phân giải preview khi cần.

## 6. Checklist thực hành
- [ ] Đã nhân bản được nhiều thùng gỗ từ một thùng gốc đã UV-map.
- [ ] Đã gán texture khác nhau cho ít nhất hai bản sao.
- [ ] Đã kiểm tra UV vẫn khớp đúng sau khi đổi texture.
- [ ] Đã tổ chức các thùng vào một Collection riêng.

## 7. Tóm tắt
Bài học mở rộng từ một thùng gỗ đơn lẻ sang một nhóm nhiều thùng với texture đa dạng, thông qua kỹ thuật duplicate object và quản lý material/UV hợp lý. Đây là kỹ năng tổ chức scene quan trọng khi số lượng asset tăng lên trong các dự án thực tế.
