---
title: "Bài 11 — Tạo hốc mắt, phần trong miệng và lắp mắt 3D"
course: "Tripo AI → Blender: Nhân vật 3D từ ảnh đến rig"
lesson_number: 11
source_type: "Biên tập từ transcript do người dùng cung cấp"
source_timestamp: "1:10:00–1:28:58"
status: "Tài liệu tự biên soạn, có phần chú giải và bài tập"
---

# Bài 11 — Tạo hốc mắt, phần trong miệng và lắp mắt 3D

> **Phân đoạn tham chiếu:** 1:10:00–1:28:58 trong bản ghi gốc.  
> **Đầu ra bài học:** sản phẩm/tài liệu theo mục tiêu và mục thực hành bên dưới.

## Mục tiêu
Biến head đã retopo thành **khuôn mặt có mắt và miệng sâu**, đặt mũi/lông mày/lông mi đúng vị trí.

## Hốc mắt và miệng
1. Quay về Blender **Edit Mode**, chỉnh silhouette trán, vùng má và góc nghiêng mắt bằng **Proportional Editing**.
2. Chọn **edge loop** quanh mắt (Alt-click tùy keymap), dùng `E` extrude một vài lần, thay đổi kích thước bằng `S` để tạo lòng mắt bên trong.
3. Kiểm tra không tạo mặt chồng, lỗ hở hoặc đùn ngược sai hướng; tác giả nắn từng bước trong góc nhìn front và side.
4. Với miệng, chọn vòng cạnh miệng và **Extrude (`E`)** vào phía trong; có thể dùng `Alt+S` theo hướng normal, nhưng phải kiểm tra scale và hình học thực tế.
5. Đánh dấu cạnh cần giữ sắc bằng **Mark Sharp** nếu shading yêu cầu; tùy Blender và modifier, thao tác này không tự tạo thêm khối.

## Tạo mắt và phụ kiện
6. Tạo **UV Sphere** (`Shift+A → Mesh → UV Sphere`) để làm nhãn cầu / mống mắt theo style, xoay và scale cho đúng.
7. Có thể dùng **Proportional Editing** để nắn phần lòng, tránh bóng mắt nhô quá cao. Bật X-Ray kiểm tra mắt khớp hốc, rồi Shade Smooth.
8. Đặt phần **highlight (đốm sáng)** theo độ cong; kiểm tra khi nhắm mắt để highlight không xuyên mí.
9. Import/căn lại mũi, lông mày, lông mi; đổi **Origin to Geometry** cho các object nếu điểm gốc quá lệch.
10. Tạo Mirror cho chi tiết cần đối xứng; sửa vùng nhìn nghiêng để bộ phận không nổi cách xa mặt.

## Bảng kiểm
| Vùng | Điều kiện |
|---|---|
| Hốc mắt | Có độ sâu, không xuyên qua đầu |
| Nhãn cầu | Nằm phù hợp dưới vùng mí |
| Lông mi | Cân hai bên, không đâm vào mắt |
| Mũi, mày | Khớp tham chiếu front và side |
| Miệng | Có thành trong, có thể thay đổi hình theo chiều dọc |

## Bài tập
Hoàn thiện khuôn mặt neutral, chụp ảnh front, 3/4 và side. Thử giả lập đóng mí bằng Edit Mode để phát hiện va chạm.

---

**Tiếp theo:** Bài 12.
