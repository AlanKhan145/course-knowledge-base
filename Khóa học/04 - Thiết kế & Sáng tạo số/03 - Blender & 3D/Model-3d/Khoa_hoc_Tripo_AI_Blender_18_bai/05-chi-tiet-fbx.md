---
title: "Bài 05 — Tạo chi tiết nhỏ và xuất FBX có tổ chức"
course: "Tripo AI → Blender: Nhân vật 3D từ ảnh đến rig"
lesson_number: 5
source_type: "Biên tập từ transcript do người dùng cung cấp"
source_timestamp: "11:21–19:19"
status: "Tài liệu tự biên soạn, có phần chú giải và bài tập"
---

# Bài 05 — Tạo chi tiết nhỏ và xuất FBX có tổ chức

> **Phân đoạn tham chiếu:** 11:21–19:19 trong bản ghi gốc.  
> **Đầu ra bài học:** sản phẩm/tài liệu theo mục tiêu và mục thực hành bên dưới.

## Mục tiêu
Tạo lông mày, lông mi, mũi và **xuất sạch có tên nhất quán**.

## Quy trình
1. Đưa ảnh **front và side** của lông mày vào Tripo. Tài liệu thử **Smart Mesh** khoảng 500 cho phần nhỏ; cũng thử chế độ HD.
2. Nếu Tripo có **retopology / quad** phù hợp, cân nhắc dùng, nhưng không ép nếu mô hình vẫn có rãnh lạ; sửa hình trước khi remesh thường hiệu quả hơn.
3. Làm lặp lại cho lông mi và mũi; tác giả nhận thấy lông mi tạo khá tốt, mũi đơn giản dễ ra hình.
4. Với các chi tiết giả (lỗ, rãnh) phát sinh từ **họa tiết nguồn**, xóa họa tiết bằng công cụ inpainting trong trình sửa ảnh trước khi thử lại.
5. Với đầu: tạo nhiều phương án, chọn mặt có vị trí mắt và vẻ ngoài gần concept nhất. Tránh cố sửa toàn bộ lỗi ngay trong Tripo.
6. Đánh dấu phương án được chọn, xuất FBX từng phần và **đổi tên đúng chức năng**.

## Quy ước tên tệp
```text
01_tripo_raw/
├── BunnyHead_high.fbx
├── BunnyBody_high.fbx
├── Eyebrow_high.fbx
├── Eyelash_high.fbx
└── Nose_high.fbx
```

## Điểm ra quyết định
- Nếu chi tiết quá đơn giản (đặc biệt mắt), có thể tự dựng Blender thay vì dùng credit AI.
- Nếu quads sạch hơn thì thuận lợi cho hậu kỳ; **chuyển tam giác sang quad không tự bảo đảm edge flow đúng**.
- Nếu không chắc Smart Low Poly dùng được, giữ cả **bản gốc và bản thử**.

## Bài tập
Xuất 5 FBX như trên và lập bảng `file → chức năng → tình trạng topology → lỗi còn lại`. Tránh dùng tên sinh ngẫu nhiên khi bắt đầu làm rig/texture.

---

**Tiếp theo:** Bài 06.
