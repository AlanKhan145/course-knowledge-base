# Bài 10 — Kiểm tra mô hình, quản lý file và hoàn thiện sản phẩm học tập

**Mốc video:** 36:20–36:39 (tổng kết) · **Phần kiểm tra là bài tập mở rộng** · **Thời lượng gợi ý:** 25–35 phút

## Mục tiêu

Rà soát lỗi hình học và tỷ lệ; lưu mô hình sculpt có khả năng tiếp tục chỉnh sửa; phân biệt công việc đã học với những bước sản xuất game chưa học.

## Checklist chất lượng

### Hình khối

- [ ] Đầu, cằm, má không lệch bất thường.
- [ ] Cổ kết nối đầu hợp lý, không có khe hở khi đã remesh.
- [ ] Tai, mắt, mũi, miệng đủ rõ ở góc chính diện và 3/4.
- [ ] Lông mày bám mặt, không bị xuyên qua đầu hoặc lơ lửng.
- [ ] Tóc có khối lớn và các mảng phụ rõ ràng.

### Kỹ thuật

- [ ] Các object đặt tên có nghĩa: `Head_Neck`, `Ears`, `Eyes`, `Nose`, `Brows`, `Hair`.
- [ ] Có collection `BACKUP_HEAD_PARTS` (ẩn) hoặc bản `.blend` dự phòng.
- [ ] Kiểm tra `Scale`, các modifier còn hoạt động và số lượng polygon.
- [ ] Không **Apply** tất cả modifier chỉ vì muốn dọn danh sách: giữ quy trình có thể chỉnh sửa khi cần.

### Bằng chứng kết quả

1. Lưu `stylized_head_final.blend`.
2. Chụp ảnh Viewport từ `Numpad 1` (chính diện), `Numpad 3` (ngang), góc 3/4 (xoay thủ công).
3. Chụp thêm ảnh cận khuôn mặt và ảnh cận một bên tai.
4. Viết 5–8 dòng tự đánh giá theo bài 11, nêu công cụ đã dùng và vấn đề gặp phải.

## Về tô màu, ánh sáng và render

Cuối bản ghi, người giảng **nói sẽ hướng dẫn vật liệu, tô màu, ánh sáng và render ở video tiếp theo**. Các chủ đề đó **không được trình bày đầy đủ trong video đang có**. Nếu chỉ muốn ảnh kiểm tra, chụp Viewport ở chế độ Solid/MatCap là đủ; không coi đó là bài thực hành render chính thức.

## Mở rộng dành cho mô hình game (ngoài phạm vi nguồn)

Sculpt high-poly → **Retopology** → **UV Unwrap** → **Bake normal/AO** (khi phù hợp) → **Texture/Material** → **Rigging & Animation** → **Xuất FBX/glTF và kiểm tra engine**.

**Kết luận:** sản phẩm sau khóa học là **mô hình đầu cách điệu ở giai đoạn sculpt**, không mặc nhiên là nhân vật game hoàn chỉnh.
