# Phụ lục — Bảng chẩn đoán lỗi rigging

| Dấu hiệu | Kiểm tra đầu tiên | Cách xử lý |
|---|---|---|
| Di chuyển bone nhưng mesh đứng im | Parent, Armature modifier, Deform bật? | Chọn đúng rig và tạo/kiểm tra vertex groups |
| Mesh kéo theo xương xa lạ | Vertex group weight nhiễm | Weight Paint trên island đã mask, giảm/xóa ảnh hưởng sai |
| IK chân kéo cả torso | Chain Length đang bằng 0/quá dài | Đặt Chain Length = 2 và thử lại |
| IK target làm chân quay loạn | Có dependency cycle? | Clear parent với bone nằm trong chính IK chain, reparent vào root/controller |
| Đầu gối/khuỷu lật khi kéo target | Pole Target, Pole Angle, Bone Roll | Đặt lại hướng gập, chỉnh pole và local axes |
| Tay xuyên áo khoác | Topology/weight áo không khớp tay | Bổ sung edge loop, sửa weight, kiểm tra modifier stack |
| Mắt/miệng bị trôi khỏi bề mặt | Bone mặt thiếu constraint hoặc target sai | Shrinkwrap bone constraint vào proxy mặt trước |
| Shrinkwrap snap ra mặt sau | Target mesh kín, chọn mặt gần khác | Tạo proxy mesh chỉ có mặt mong muốn |
| Rigify tạo rig mới nhưng mesh parent nhầm | Đã parent vào metarig | Chuyển parent/Armature modifier sang generated rig |
| Symmetrize không tạo được bên kia | Tên thiếu `.L`/`.R`, vị trí xương sai | Chuẩn hóa tên và xem lại mirror plane |
| Apply modifier khiến mesh thay đổi | Thứ tự modifier/pose không an toàn | Undo, dùng bản dự phòng, thử trên duplicate ở rest pose |
| Join làm mất cách hiển thị một số phần | Dữ liệu mesh/modifier/material khác | Giữ tách object hoặc kiểm tra active object trước Join |

## Quy trình 5 câu hỏi

1. **Sai tại đâu?** Bone, vertex group, topology, constraint hay modifier?
2. **Sai khi nào?** Chỉ trong Pose Mode, khi có IK, hay cả rest pose?
3. **Đã cô lập để thử chưa?** Tắt từng constraint/modifier hoặc sử dụng Local View trên bản duplicate.
4. **Có thể tái hiện bằng một bone một bước không?** Nếu có, lưu thao tác và ảnh trước/sau.
5. **Sau sửa đã test nhiều tư thế chưa?** Cần ít nhất neutral pose, extreme bend và crossed pose.

[Quay lại README](README.md)
