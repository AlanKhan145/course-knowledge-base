# Phụ lục — Từ điển thuật ngữ Blender Rigging

| Thuật ngữ | Nghĩa thực hành | Dễ nhầm với |
|---|---|---|
| Mesh | Hình học nhân vật | Object (một object có thể chứa nhiều đảo mesh) |
| Armature | Object chứa xương | Metarig và generated rig là 2 armature khác nhau trong Rigify |
| Bone | Phần tử của armature | Control bone không nhất thiết deform |
| Deform bone | Bone biến dạng mesh qua vertex groups | Control bone |
| Parent | Liên kết cha-con giữa object/bone | Constraint (ràng buộc không chỉ là parent) |
| Keep Offset | Parent nhưng không nối đầu/đuôi bone | Connected parenting |
| Bone Roll | Góc xoay trục cục bộ quanh xương | Rotation trong Pose Mode |
| Weight | Hệ số ảnh hưởng bone tới vertex | Strength của cọ Weight Paint |
| Auto Normalize | Cân trọng số khi paint | Tự sửa sai bone hoàn toàn |
| Weight Paint | Chế độ sửa phân bố weight | Texture Paint |
| Vertex Group | Nhóm vertex với weight, thường mang tên deform bone | Bone Collection |
| FK | Điều khiển xuôi theo chuỗi cha-con | IK |
| IK | Tính ngược góc của các bone theo vị trí target | Auto IK |
| Chain Length | Số mắt xích chịu tác động bởi IK | Chiều dài bone |
| Pole Target | Control điều khiển hướng gối/khuỷu | IK target điều khiển vị trí cuối chuỗi |
| Root | Control gốc của nhân vật | Hips/pelvis |
| B-Bone | Bone hỗ trợ uốn cong mềm với segments | Bone display size |
| Constraint | Ràng buộc điều khiển transform | Modifier hình học |
| Shrinkwrap bone constraint | Giữ transform của bone gần bề mặt mesh | Shrinkwrap modifier của mesh |
| Mirror | Modifier đối xứng hình học | Symmetrize bone hoặc Paste X-Flipped Pose |
| Symmetrize | Tạo bone phía đối diện từ tên `.L`/`.R` | X-Axis Mirror khi chỉnh/sơn |
| Topology | Cấu trúc vertices/edges/faces | Polygon count đơn thuần |
| Loop Cut | Cắt vòng cạnh để tăng hình học | Subdivide toàn bộ mesh |
| Edge Slide | Trượt cạnh/đỉnh dọc bề mặt | Di chuyển tự do |
| Local View | Cô lập đối tượng đang làm việc | Hide (ẩn thông thường) |

[Quay lại README](README.md)
