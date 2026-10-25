---
title: "Bài 14 — Texture Paint và hợp nhất atlas"
course: "Tripo AI → Blender: Nhân vật 3D từ ảnh đến rig"
lesson_number: 14
source_type: "Biên tập từ transcript do người dùng cung cấp"
source_timestamp: "1:51:29–2:05:18"
status: "Tài liệu tự biên soạn, có phần chú giải và bài tập"
---

# Bài 14 — Texture Paint và hợp nhất atlas

> **Phân đoạn tham chiếu:** 1:51:29–2:05:18 trong bản ghi gốc.  
> **Đầu ra bài học:** sản phẩm/tài liệu theo mục tiêu và mục thực hành bên dưới.

## Mục tiêu
Chỉnh những lỗi AI tô sai trong **Texture Paint** và giảm số image/material khi hợp lý.

## Các bước
1. Import phiên bản có texture và chuyển workspace **Texture Paint**, từ `View` sang `Paint` nếu cần.
2. Sơn phần lông mày, mũi, mí, tròng mắt, lòng trắng mắt, phần trong miệng. Video chọn mảng **màu phẳng** để giữ cel-look.
3. Dùng eyedropper lấy màu chuẩn từ khu vực tốt, sơn đè mảng sai. Với miệng, dùng sắc đỏ đậm; với lòng trắng mắt, tránh lớp màu xám bẩn.
4. Nếu vẽ chuột khó thành đường đẹp, tận dụng kiểu stroke ổn định trong Blender; chỉnh kích cỡ cọ bằng `F` hoặc thông số brush.
5. So sánh màu trong viewport **Flat with Texture** để tránh nhầm bóng chiếu của viewport với màu pixel.
6. Kiểm tra model ở front và side; dùng isolate (`/`) hoặc ẩn bộ phận che khuất để sơn vùng khó tới.
7. **Lưu ảnh texture riêng** bằng menu `Image → Save`/Save As. Chỉ lưu `.blend` có thể chưa lưu thay đổi pixel vào ảnh ngoài.
8. Nếu Tripo tạo **mỗi object một texture**, có thể yêu cầu trợ lý/Blender **bake vào một atlas** nhưng phải xác nhận UV, shader, không mất texture và alpha.
9. Khớp sắc độ giữa **đầu và thân**. Bản ghi dùng trợ lý điều chỉnh vì style màu phẳng thuận tiện để thay màu.

## Prompt cho trợ lý
```text
Hãy kiểm tra scene có nhiều image texture sau khi nhập từ Tripo.
Chỉ với bản sao của file, lập kế hoạch hợp nhất thành atlas duy nhất:
kiểm tra UV của từng object, tạo image atlas, bake Base Color,
đảm bảo không mất alpha/màu và gán lại image texture đúng UV.
Giữ bản material/texture cũ ở collection BACKUP và cung cấp báo cáo
trước-sau về số vật liệu, image, kích thước và tên file.
```

## Lỗi phổ biến
| Lỗi | Cách kiểm tra |
|---|---|
| Paint không hiện lên model | Active image/texture slot và material node |
| Paint biến mất sau mở lại | Đã Save image texture chưa? |
| Atlas méo/chồng màu | UV islands, bake cage/margin/target |
| Đầu/thân lệch màu | Lấy mẫu và đồng nhất palette, xem cả Flat view |

## Bài tập
Sửa 3 lỗi màu cụ thể, lưu ảnh texture, đóng/mở lại `.blend` xác nhận chúng vẫn tồn tại.

---

**Tiếp theo:** Bài 15.
