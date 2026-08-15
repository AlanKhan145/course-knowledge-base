# 246 — Character Creation Pt. 2
# 246 — Character Creation Pt. 2

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 36 — Bonus: Fast Learning |
| **Bài học** | Character Creation Pt. 2 |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 48:42 |
| **Ngôn ngữ** | English |

## Phạm vi ôn tập

Phần này tóm tắt modeling một stylized character từ face, body, clothes, shoes đến material, eye/eyelid, rigging, posing, lighting, particles và compositing. Nội dung được tổng hợp từ [Section 23 — Modeling a Simple Stylized Character](../23%20-%20Character%20Creation-%20Modeling%20a%20Simple%20Stylized%20Character/README.md).

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Dựng một stylized character bằng topology đơn giản và modifier không phá hủy.
- Chia quy trình thành face, body, clothes và shoes thay vì chỉnh toàn bộ cùng lúc.
- Tạo material, vertex paint mắt và khuôn mặt theo phong cách nhất quán.
- Dùng Rigify để tạo rig humanoid, sau đó pose và chuẩn bị render.
- Nhận biết các bước lighting, particles và compositing ở cuối pipeline.

## Nội dung trọng tâm

### 1. Modeling theo nhóm hình

Face, body, clothes và shoes nên được xử lý như các mốc riêng để dễ kiểm soát tỷ lệ. Subdivision Surface có thể giữ ở dạng modifier trong lúc modeling để có bề mặt mềm nhưng vẫn chỉnh trên base mesh nhẹ.

### 2. Màu và chi tiết khuôn mặt

Material tạo màu và phản ứng ánh sáng tổng thể; vertex painting giúp thêm màu cục bộ cho mắt hoặc mặt theo workflow của section. Cần kiểm tra mirror object, seam và các object phụ trước khi chuyển sang rig.

### 3. Rigify, pose và output

Rigify cung cấp human meta-rig và khả năng generate advanced rig cho humanoid. Sau khi bind object, kiểm tra vùng biến dạng, tạo pose có chủ đích, rồi dùng lighting, particles và compositing để hoàn thiện hình ảnh.

## Quy trình rút gọn

1. Dựng face với base mesh nhẹ và modifier phù hợp.
2. Mở rộng body, clothes và shoes, kiểm tra tỷ lệ ở nhiều góc.
3. Tạo material, eye/eyelid và vertex paint các vùng cần nhấn.
4. Sửa mirror object hoặc relationship của các phần trước khi rig.
5. Bật Rigify, tạo rig humanoid, bind character và kiểm tra pose.
6. Thiết lập lighting, thêm particles/compositing nếu cần rồi render.

## Thực hành đề xuất

Tạo một stylized character đơn giản có đầu, thân, quần áo và giày. Giữ subdivision chưa apply trong giai đoạn modeling, tạo một material cho trang phục và vertex paint mắt. Dùng Rigify tạo một pose bất đối xứng, đặt light key/fill và xuất một render có compositing nhẹ.

## Checklist

- [ ] Đã dựng face, body, clothes và shoes thành các mốc riêng.
- [ ] Đã giữ base mesh có thể chỉnh sửa trong lúc dùng Subdivision Surface.
- [ ] Đã hoàn thiện material và màu mắt/khuôn mặt.
- [ ] Đã kiểm tra mirror object và relationship trước khi rig.
- [ ] Đã tạo rig bằng Rigify và thử ít nhất một pose.
- [ ] Đã lưu render có lighting và compositing.

## Ghi chú về nguồn

> Đây là bài recap được biên soạn từ nội dung và transcript trong Section 23 của thư mục khóa học. Các bước được sắp xếp thành một pipeline stylized character hoàn chỉnh từ modeling đến output.
