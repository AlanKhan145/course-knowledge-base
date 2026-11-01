---
title: "Bài 13 — Tạo ảnh màu và texture trong Tripo"
course: "Tripo AI → Blender: Nhân vật 3D từ ảnh đến rig"
lesson_number: 13
source_type: "Biên tập từ transcript do người dùng cung cấp"
source_timestamp: "1:41:47–1:51:28"
status: "Tài liệu tự biên soạn, có phần chú giải và bài tập"
---

# Bài 13 — Tạo ảnh màu và texture trong Tripo

> **Phân đoạn tham chiếu:** 1:41:47–1:51:28 trong bản ghi gốc.  
> **Đầu ra bài học:** sản phẩm/tài liệu theo mục tiêu và mục thực hành bên dưới.

## Mục tiêu
Dùng model đã sửa để tạo **texture phong cách anime/cel-like**, giảm việc sơn tay từ đầu.

## Quy trình trong bản ghi
1. Từ ảnh chụp **model Blender đã sửa**, tạo bộ hình có màu gợi đúng thiết kế ban đầu; tránh để AI tự thay dáng.
2. Tạo góc nhìn front/side/back cho **đầu** và **thân** riêng; nguồn video phải tạo lại một số ảnh vì màu và mặt tai sai.
3. Yêu cầu ảnh mang phong cách **anime 2D / màu phẳng**, không render vật liệu thực tế nếu style mục tiêu là cel-look.
4. Trước khi xuất sang Tripo để texture, kiểm tra **Apply Transform** và vị trí các bộ phận; có ví dụ object bị tản ra do transform chưa phù hợp.
5. Xuất tạm từng nhóm đầu và thân dưới dạng **FBX**, dùng luồng tạo texture cho mesh có UV (nếu phiên bản Tripo hỗ trợ và dùng đúng model).
6. Kiểm tra kết quả của tai, mặt và thân. Chạy thêm nếu màu sai hoặc chi tiết nhòe, nhưng cân nhắc tự sửa Blender nếu chỉ còn lỗi nhỏ.
7. Trong bản ghi, tác giả xuất texture cơ thể **2K** để có dư độ phân giải.
8. Nhập asset có texture trở lại Blender, xác nhận vật liệu/ảnh được gắn đúng UV.

## Prompt gợi ý — hình ảnh màu cho texture
```text
Dùng model Blender đính kèm làm chuẩn hình học tuyệt đối.
Tạo reference texture phong cách anime 2D: mảng màu phẳng,
đường viền rõ, không tạo vân da/lông photorealistic.
Giữ tỉ lệ đầu, tai, vị trí mắt, chiều dài tay chân không đổi.
Xuất ba góc: chính diện, bên, mặt sau.
Tạo riêng đầu và thân, bảo đảm mã màu nhân vật nhất quán.
```

## Khi nào tạo lại, khi nào sửa tay?
- **Tạo lại** nếu mặt sau/tai bị tô ngược, mảng lớn sai vật liệu hoặc texture không ánh xạ đúng UV.
- **Sửa tay** nếu chỉ thiếu nét ngón chân, lệch sắc đầu-thân, mắt không đủ trắng hoặc vài mảng loang.

## Bài thực hành
Lấy 1 texture đầu và 1 texture thân, nhập Blender và lưu `Lop_04_texture_import.blend`. Ghi số material/image tạo ra cho mỗi object.

---

**Tiếp theo:** Bài 14.
