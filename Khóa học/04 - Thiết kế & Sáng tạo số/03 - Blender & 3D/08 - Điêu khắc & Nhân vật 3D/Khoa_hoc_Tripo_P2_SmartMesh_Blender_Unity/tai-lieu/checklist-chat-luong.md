# Checklist chất lượng nhân vật AI 3D — Tripo → Blender → Unity

## A. Hình tham chiếu
- [ ] Nền sạch, không có đồ vật/thành phần rác.
- [ ] Mặt trước và các góc khác không mâu thuẫn lớn về tỷ lệ.
- [ ] Nhìn rõ khớp tay, đầu gối, bàn tay và vùng mắt.

## B. Hình học
- [ ] Đầu/body/tóc được chọn từ các ứng viên tốt nhất.
- [ ] Không còn mảnh rác nổi hoặc mặt nhân đôi dễ thấy.
- [ ] Origin và trục Mirror đúng; đường đối xứng không có khe.
- [ ] Quanh mắt/miệng có edge loops hỗ trợ biểu cảm.
- [ ] Ngón tay, khuỷu, gối có hình dạng đủ cho uốn khớp.

## C. UV / Texture
- [ ] UV islands cần dùng nằm đúng vùng và không chồng lấn vô ý.
- [ ] Mặt và mống mắt đủ mật độ UV; checker không méo nặng.
- [ ] Không lem màu ở viền mắt, miệng, da/tóc.
- [ ] Lưu texture ảnh riêng; gán lại material trước export.

## D. Rig / Animation
- [ ] Shape Keys Basis / blink / Mouth_A hoạt động.
- [ ] Hướng IK khuỷu/gối được kiểm tra.
- [ ] Bind và deform ổn ở 4 tư thế: gập gối, gập khuỷu, nắm đấm, quay đầu.
- [ ] Tóc và các phụ kiện đi theo head/armature phù hợp.

## E. Unity
- [ ] Model hiển thị đúng hướng, tỉ lệ và vật liệu.
- [ ] Clip idle/move/jump kiểm thử ổn.
- [ ] Blendshape chớp mắt hiển thị được nếu đã xuất.
- [ ] Không có vết nứt nổi bật ở khớp hoặc lỗi chuyển động do retarget.

## Quyết định hoàn thành

**Đạt:** tất cả các nhóm A–E đều được kiểm tra và lỗi còn lại không ảnh hưởng trực tiếp tới trường hợp sử dụng.  
**Chưa đạt:** quay về đúng bài học tương ứng; không cố sửa animation để che lỗi topology hoặc rig.
