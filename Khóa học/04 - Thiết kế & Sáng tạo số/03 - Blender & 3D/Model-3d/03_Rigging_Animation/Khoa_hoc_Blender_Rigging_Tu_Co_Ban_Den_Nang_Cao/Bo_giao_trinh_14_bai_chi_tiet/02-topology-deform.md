---
title: "Bài 02 — Chuẩn hóa topology trước khi rig"
course: "Blender Rigging — Từ cơ bản đến bộ rig tùy chỉnh"
lesson_number: 2
lesson_type: "bài học và thực hành"
language: "vi"
source: "Markdown đã dán (1)(20261025-100633).md"
source_timestamp: "04:10–05:39 và 07:31–10:20"
source_type: "transcript được biên tập lại"
blender_version_in_source: "4.1"
---

# Bài 02 — Chuẩn hóa topology trước khi rig

> **Nguồn đối chiếu:** bản ghi video đính kèm, đoạn **04:10–05:39 và 07:31–10:20**. Đây là bài giảng tự biên soạn từ transcript, có hệ thống hóa quy trình và thêm ví dụ để tự học; không phải lời thoại nguyên văn.

## Mục tiêu học tập

- Nhìn ra vùng thiếu edge loop tại khuỷu, gối và trang phục.
- Dùng Loop Cut, Inset, Edge Slide, Shrink/Fatten hợp lý.
- Giảm xuyên mesh giữa cơ thể và quần áo.

## 1. Vì sao topology quyết định chất lượng pose?

Các đỉnh nằm tại khớp bị biến dạng mạnh hơn vùng cứng. Với low-poly, một nếp gập xấu có thể xuất hiện ngay cả khi xương đặt chuẩn. Nguồn minh họa cách **phân bổ thêm hình học vào phía ngoài góc gập**: khuỷu ngoài và phía trước đầu gối thường cần hỗ trợ bề mặt, thay vì đắp loop dày đồng đều.

## 2. Xử lý khuỷu tay và đầu gối

1. Mở **Edit Mode**, chọn edge loop bằng `Alt+Click` (phím chọn tùy keymap).
2. Dùng `Ctrl+X` để dissolve loop nếu vòng hiện tại gây phân bố hình học chưa hợp lý.
3. Chọn các mặt vùng ngoài khuỷu/gối, dùng `I` (**Inset Faces**) để thêm topology tập trung.
4. Bật `Alt+Z` (**X-Ray**) nếu cần chọn đỉnh khuất; dùng `G` hai lần (**Edge Slide**) để kéo điểm vào vị trí phù hợp.
5. Thêm `Ctrl+R` (**Loop Cut**) để bổ sung một vòng tại vùng biến dạng còn thiếu.
6. Gập thử khớp để so sánh silhouette trước và sau.

## 3. Lớp quần áo phải phù hợp mesh bên dưới

Video đưa ví dụ áo khoác có ít vòng cạnh hơn cánh tay bên trong, nên khi tay gập có thể xuyên qua vải. Quy trình:

- Duplicate và ẩn **bản dự phòng Collection**.
- Thêm 2–3 loop ở vùng tay áo hoặc ống quần nơi cần uốn.
- Dùng `Alt+S` (Shrink/Fatten) để chỉnh mép áo/ống quần ra ngoài nhẹ, duy trì khe hở vừa đủ.
- Kiểm tra giày, mũi bàn chân và lưỡi giày cần thêm loop riêng không.
- Nếu mesh có Subdivision Surface, quan sát lại silhouette: thêm loop có thể ảnh hưởng độ cong.

## 4. Mẹo dành cho low-poly

| Tình trạng | Điều chỉnh ưu tiên |
|---|---|
| Gập tay bị lõm như bản lề | Bổ sung loop tại khuỷu, sau đó sửa weight |
| Đầu gối bẹt, sắc cạnh | Inset phía trước và điều chỉnh Edge Slide |
| Tay chọc xuyên ống áo | Tăng topology tay áo tương ứng, xét weight của vải |
| Subdivision làm đổi hình dáng quá nhiều | Chỉnh loop thủ công hoặc xem lại modifier stack |

> Topology tốt chỉ **tạo điều kiện** biến dạng sạch hơn; không thay thế cách đặt xương, constraints và trọng số chính xác.

## Bài thực hành

- Duplicate mesh nhân vật trước khi sửa.
- Tạo pose tay gập khoảng 90° và lưu ảnh `before`.
- Chỉ sửa topology vùng khuỷu/tay áo, pose lại, lưu ảnh `after`.
- Ghi 3 thay đổi nhìn thấy ở silhouette.

## Câu hỏi tự kiểm tra

1. **Vì sao không phải cứ càng nhiều polygon càng tốt?**

   <details><summary>Xem đáp án</summary>

   Vì nhiều polygon làm nặng việc chọn và sơn weight, không tự đảm bảo deformation sạch.

   </details>

2. **Ngoài topology của tay, cần xem gì để tránh xuyên áo?**

   <details><summary>Xem đáp án</summary>

   Topology và khoảng hở của tay áo, cùng với weight của trang phục.

   </details>

## Lỗi cần tránh

- Dissolve nhầm loop phá hình: dùng bản sao/Undo.
- Dùng Alt+S quá mạnh khiến quần áo phồng hoặc lệch phong cách.

---

[Nội dung khóa học](README.md) · [Bài trước](01-rigify-humanoid.md) · [Bài tiếp theo](03-armature-tu-dung.md)
