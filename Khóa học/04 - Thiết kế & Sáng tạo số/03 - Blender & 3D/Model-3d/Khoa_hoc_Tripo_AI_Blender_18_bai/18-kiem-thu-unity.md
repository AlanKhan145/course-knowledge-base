---
title: "Bài 18 — Kiểm thử tổng kết, lỗi chưa giải quyết và xuất sang Unity"
course: "Tripo AI → Blender: Nhân vật 3D từ ảnh đến rig"
lesson_number: 18
source_type: "Biên tập từ transcript do người dùng cung cấp"
source_timestamp: "2:29:39–2:31:48"
status: "Tài liệu tự biên soạn, có phần chú giải và bài tập"
---

# Bài 18 — Kiểm thử tổng kết, lỗi chưa giải quyết và xuất sang Unity

> **Phân đoạn tham chiếu:** 2:29:39–2:31:48 trong bản ghi gốc.  
> **Đầu ra bài học:** sản phẩm/tài liệu theo mục tiêu và mục thực hành bên dưới.

## Mục tiêu
Hoàn thành bản demo nhân vật AI 3D **có thể xem, xoay, pose và biểu cảm**, chuẩn bị bước kiểm thử trong engine.

## Nội dung video thực sự đã thể hiện
Bản ghi đi đến **model có texture, rig và nháy mắt**; người hướng dẫn nói có thể nhờ Claude Code hỗ trợ **xuất sang Unity**. Bản ghi **không trình bày đầy đủ một quy trình nhập Unity đã xác minh** và **không bao gồm chi tiết làm trang phục** (được nói là để ở phần khác).

## Checklist nghiệm thu trước xuất
- [ ] Tên object/bone/texture rõ ràng; các bản gốc ở BACKUP.
- [ ] Scale, hướng forward/up và transform nhất quán, không tự xoay lệch.
- [ ] Lưới đầu/thân có số mặt hợp lý cho thiết bị thử nghiệm; không có lỗ hở ngoài ý muốn.
- [ ] UV không chồng lên nhau ngoài kế hoạch mirror; atlas và ảnh texture đã Save.
- [ ] Mắt/miệng/mi/mày có thứ tự lớp hợp lý, không xuyên khi pose hoặc nhắm.
- [ ] Rig có thể tạo pose neutral, tay nâng, chân gập; tai không chịu weight sai từ bone tay.
- [ ] Shape Keys/Basis hoạt động ở các giá trị 0–1.
- [ ] Export bản test FBX (hoặc GLB khi pipeline đích cho phép); giữ một `.blend` làm file chủ.
- [ ] Mở bằng viewer/engine thử, kiểm tra vật liệu và skeleton thực tế.

## Quy trình kiểm chứng trong Unity (phần mở rộng, không được video xác nhận)
1. Export FBX với transforms và armature phù hợp, kiểm tra đơn vị đo.
2. Import asset vào Unity, chọn **Rig tab** phù hợp loại nhân vật (Generic hoặc Humanoid theo xương thực tế).
3. Xác nhận material và texture (có thể phải dựng lại **cel shader** bằng Shader Graph/URP vì node Blender không tự chuyển).
4. Gắn animator/clip demo, test pose và animation; kiểm tra hướng forward, scale, bone và shape key mapping (BlendShapes).
5. Chỉ kết luận **game-ready theo mục tiêu cụ thể** sau khi test được trên engine/thiết bị.

## Báo cáo cuối khóa
Tạo file `FINAL_REPORT.md` chứa: ảnh before/after, polycount, texture resolution, số materials, UV layout, rig test, danh sách shape keys, lỗi còn lại và kế hoạch sửa.

## Câu hỏi tổng kết
1. Vì sao high-poly nhiều mặt không đồng nghĩa game-ready?
2. Khi nào nên quay lại ảnh nguồn thay vì sửa mesh lỗi?
3. Sự khác nhau giữa Quad Remesher và RetopoFlow trong pipeline này?
4. Tại sao Save `.blend` không luôn thay cho Save ảnh Texture Paint?
5. Vì sao kiểm thử trong Unity vẫn cần thiết dù nhân vật trông đúng trong Blender?

---

**Tiếp theo:** Tổng kết khóa học — xem README và dự án cuối khóa.
