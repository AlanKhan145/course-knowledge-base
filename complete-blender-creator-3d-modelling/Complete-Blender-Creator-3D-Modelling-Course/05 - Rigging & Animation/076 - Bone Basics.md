# 076 — Bone Basics

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 05 — Rigging & Animation |
| **Bài học** | Bone Basics |
| **Thời lượng** | 7:06 |
| **Chủ đề chính** | Kiến thức cơ bản về bone |

## 1. Mục tiêu bài học

- Hiểu bone (xương) là gì trong Blender và vai trò của nó trong hệ thống rigging.
- Biết cách thêm một Armature/bone mới vào scene.
- Nắm được cấu trúc của một bone: Head, Tail, Roll.
- Phân biệt các chế độ làm việc với Armature: Object Mode, Edit Mode, Pose Mode.

## 2. Nội dung chính

Bone là đơn vị cơ bản cấu tạo nên một Armature — bộ khung xương dùng để điều khiển biến dạng của mesh trong quá trình animate. Mỗi bone có hình dạng kim tự tháp thon dài, gồm hai điểm chính: Head (gốc, đầu rộng) và Tail (đỉnh, đầu nhọn). Bone thường được nối tiếp nhau thành chuỗi (chain) mô phỏng cấu trúc xương thật, ví dụ chuỗi xương tay gồm upper arm, forearm, hand.

Armature có ba chế độ làm việc chính, tương tự như mesh: Object Mode (di chuyển/scale cả Armature như một object), Edit Mode (chỉnh cấu trúc bone — thêm, xóa, nối, đổi tên bone, giống chỉnh mesh ở Edit Mode) và Pose Mode (xoay/di chuyển bone để tạo dáng và animate — đây là chế độ dùng để animate nhân vật, tương tự việc điều khiển con rối). Chuyển sang Pose Mode bằng Ctrl+Tab hoặc chọn từ dropdown chế độ.

Một khái niệm quan trọng khác là Roll — góc xoay của bone quanh trục dọc của chính nó, quyết định hướng "lên/xuống local" của bone, ảnh hưởng đến cách các constraint và IK hoạt động sau này. Bone cũng có quan hệ cha-con (parent-child) trong hệ thống phân cấp (bone hierarchy), thể hiện qua Bone Constraint Properties và Armature outliner — bone con sẽ di chuyển theo bone cha khi bone cha được xoay/di chuyển.

## 3. Quy trình thực hành gợi ý

1. Thêm một Armature mới qua Add > Armature (mặc định là một bone đơn).
2. Vào Edit Mode của Armature (Tab), quan sát Head và Tail của bone.
3. Kéo dài Tail bằng cách chọn và di chuyển (G) để tạo bone dài hơn.
4. Thử extrude (E) từ Tail của bone đầu tiên để tạo bone thứ hai nối tiếp.
5. Chuyển sang Pose Mode (Ctrl+Tab), thử xoay (R) bone để quan sát cách nó biến dạng khung xương.
6. Quay lại Object Mode, kiểm tra Armature hiển thị đúng trong Outliner.

## 4. Phím tắt & công cụ liên quan

| Phím tắt | Chức năng |
|---|---|
| `Shift+A` | Add > Armature (thêm bone mới) |
| `Tab` | Chuyển giữa Object Mode và Edit Mode của Armature |
| `Ctrl+Tab` | Chuyển nhanh sang Pose Mode |
| `E` | Extrude — kéo dài chuỗi bone từ Tail |
| `G` / `R` / `S` | Move / Rotate / Scale bone (Edit Mode hoặc Pose Mode) |
| `N` | Mở sidebar xem thông tin bone (Roll, Length...) |

## 5. Lưu ý & lỗi thường gặp

- Nhầm lẫn giữa Edit Mode (chỉnh cấu trúc xương) và Pose Mode (tạo dáng/animate) — thao tác nhầm mode dễ làm hỏng rig.
- Không đặt tên bone rõ ràng (ví dụ Bone.001, Bone.002) khiến việc quản lý rig phức tạp về sau khó khăn.
- Quên rằng xoay bone ở Object Mode sẽ xoay toàn bộ Armature, không phải một bone riêng lẻ.
- Bỏ qua Roll của bone khiến hướng xoay không tự nhiên khi thiết lập IK hoặc constraint sau này.

## 6. Checklist thực hành

- [ ] Đã thêm một Armature mới vào scene.
- [ ] Đã hiểu và xác định được Head, Tail của bone.
- [ ] Đã thử extrude để tạo chuỗi nhiều bone.
- [ ] Đã chuyển qua lại giữa Object Mode, Edit Mode, Pose Mode.
- [ ] Đã đổi tên ít nhất một bone cho dễ quản lý.

## 7. Tóm tắt

Bone là thành phần cốt lõi của Armature, được chỉnh cấu trúc ở Edit Mode và animate ở Pose Mode. Hiểu rõ Head/Tail/Roll và ba chế độ làm việc là nền tảng bắt buộc trước khi xây dựng rig phức tạp hơn cho nhân vật.
