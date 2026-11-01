---
title: "Phụ lục — Thuật ngữ, phím tắt và đối chiếu nguồn"
source_type: "Tổng hợp phụ đề được cung cấp + ghi chú thực hành"
---

# Phụ lục — Thuật ngữ và phím tắt

## Thuật ngữ

| Thuật ngữ | Giải thích ngắn |
|---|---|
| Rig | Hệ điều khiển để tạo pose/animation |
| Armature | Object chứa bộ xương |
| Bone | Xương, phần tử điều khiển chính |
| Rest Pose | Trạng thái cấu trúc xương gốc khi rig |
| Pose Mode | Chỉnh pose/animation, không làm thay rest pose |
| Vertex Group | Nhóm đỉnh dùng để lưu trọng số theo tên xương |
| Weight | Cường độ ảnh hưởng từ bone lên đỉnh, thường từ 0 đến 1 |
| Armature Modifier | Modifier biến dạng mesh theo Armature |
| Automatic Weights | Blender tự ước lượng weight ban đầu |
| Bone Parenting | Gắn nguyên một object trực tiếp theo bone |
| FK | Forward Kinematics: quay khớp từ gốc ra ngọn |
| IK | Inverse Kinematics: điều khiển target để solver tính chuyển động khớp |
| Pole Target | Target định hướng mặt phẳng gập của chuỗi IK |
| Chain Length | Số bone trong chuỗi mà IK tác động |
| Pole Angle | Góc điều chỉnh hướng gập khi dùng pole |

## Phím tắt thường gặp

| Phím | Hoạt động (theo ngữ cảnh) |
|---|---|
| `Shift + A` | Mở menu Add (thêm Armature trong Object Mode) |
| `Tab` | Vào/ra Edit Mode |
| `G` / `R` / `S` | Move / Rotate / Scale |
| `E` | Extrude bone trong Edit Mode |
| `Shift + D` | Duplicate |
| `Ctrl + P` | Parent / thiết lập quan hệ cha-con |
| `Alt + P` | Clear Parent (tuỳ mode) |
| `F3` | Tìm lệnh theo tên, như Symmetrize |
| `Ctrl + F2` | Batch Rename trong một số keymap mặc định |
| `L` | Select Linked geometry dưới con trỏ trong Edit Mode |
| `F` | Điều chỉnh bán kính Weight Paint brush |
| `Ctrl + C` | Copy Pose (khi trong Pose Mode) |
| `Ctrl + Shift + V` | Paste Flipped Pose (thường gặp) |
| `I` | Chèn keyframe, hành vi phụ thuộc phiên bản và keying set |
| `Alt + R` | Clear rotation trong Pose Mode |

> **Nhắc lại:** Ưu tiên tìm lệnh bằng `F3` khi phím tắt trên máy không trùng hướng dẫn. Menu và shortcut phụ thuộc Blender version, chế độ làm việc và keymap.

## Đối chiếu mốc phụ đề

- **00:15–01:55:** hai kiểu rig, Armature, extrude/duplicate, parent bone, `.L/.R`, Symmetrize.
- **01:55–03:14:** Automatic Weights, Armature Modifier, Vertex Groups, lỗi heat weight, topology, Weight Paint.
- **03:15–05:32:** sửa weight, Auto Normalize, wireframe, symmetry, strength, smoothing.
- **05:34–07:30:** Bone Parenting, Empty Groups, Assign 1, mẹo thu nhỏ đảo hình học, Quantize.
- **07:30–09:38:** keyframes, mirrored pose, Auto IK, target/pole và IK Constraint.

## Ghi chú về chất lượng nguồn

Tệp đầu vào là bản tiếng Việt từ lời thoại video; một số cụm mang dấu hiệu nhận dạng/phiên dịch tự động sai, ví dụ **“tạ”** nên hiểu là **weights / trọng số**, **“khẩu độ giáp”** nhiều khả năng ám chỉ **Armature**, **“sơn trọng lượng”** là **Weight Paint**, và những đoạn nói phím tắt IK không đủ rõ để xác minh. Khóa học giữ đúng tinh thần và trình tự nguồn, nhưng các phần không chắc được chuyển thành bước qua menu hoặc gắn nhãn *ghi chú kỹ thuật* thay vì khẳng định chính xác.
