---
title: "Bài 07 — Tách tóc AI và sửa lỗi tóc dính đầu"
order: 7
stage: "Hair modeling"
source_timestamps: "30:47–35:08"
---

# Bài 07 — Tách tóc AI và sửa lỗi tóc dính đầu

## Mục tiêu

Giải quyết các lỗi **tóc thiếu phía sau, tóc dính vào mặt và tóc bị phân đoạn quá mức** bằng cách phối hợp Tripo và Blender.

## 1. Phân tích tóc AI

Video thử chọn mẫu tóc sạch nhất, nhưng gặp một khoảng trống lớn. Tác giả quyết định sinh lại với ảnh đa góc qua P1, chấp nhận **triangle topology** cho tóc.

Tóc không phải khớp cơ thể nên không nhất thiết đòi mọi mặt là quad; điều quan trọng hơn là **silhouette**, không còn lỗ lớn và đủ liền mạch để gán theo xương đầu.

## 2. Phân đoạn tóc trong Tripo

Các bước được trình bày:

1. Mở model tóc có mặt bị dính.
2. Chọn thao tác **Separate / Segmentation** (tên nút cụ thể tùy giao diện).
3. Chạy cách tách dạng thô (**Coarse**) để phân vùng đầu/tóc.
4. Nếu tách quá nhiều cụm, dùng công cụ **Brush** tô các vùng cần gom chung, ẩn các phần không liên quan.
5. Lưu kết quả sau khi hợp nhất phân đoạn; export cho Blender.

> Trong video, quy trình này giải quyết được phần tóc/mặt dính nhau ở mẫu cụ thể. Nếu hệ thống phân đoạn không nhận đúng, vẫn cần sửa thủ công trong Blender.

## 3. Làm sạch trong Blender

- `Object → Set Origin → Origin to Geometry` khi origin nhập vào nằm kỳ lạ.
- Bật X-Ray và chỉnh vị trí cho vừa đầu.
- Xóa các mảng mặt/tai thừa nằm trong tóc.
- Lấp lỗ ảnh hưởng silhouette, hàn đỉnh rời khi cần.
- Sửa shading bằng **Shade Smooth** và tùy phiên bản, các thiết lập smooth-by-angle/normals tương ứng.
- Đưa tóc vào Collection `Final`, giữ tên `Hair_Final`.

## 4. Quyết định nhanh

| Tình huống | Giải pháp ưu tiên |
|---|---|
| Chỉ có vài mảnh rác | Xóa island trong Blender |
| Tóc dính hẳn vào khuôn mặt | Thử segmentation trong Tripo |
| Tóc sau đầu bị thủng lớn | Sinh lại từ ảnh nhiều góc hoặc tự dựng bổ sung |
| Có nhiều đường tam giác | Giữ nếu silhouette và shading ổn |
| Tóc không đi theo đầu sau rig | Kiểm tra binding/weights ở Bài 11 |

**Bài thực hành:** có một object tóc sạch và thử xoay đầu trong scene (chưa rig) để đảm bảo tóc được đặt đúng; lưu `07_hair.blend`.

**Bài tiếp:** [Bài 08 — UV Unwrap](08-uv-unwrap-va-pack-islands.md).
