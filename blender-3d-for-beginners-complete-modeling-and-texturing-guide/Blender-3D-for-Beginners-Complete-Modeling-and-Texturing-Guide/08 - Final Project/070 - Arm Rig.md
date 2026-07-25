# 070 — Arm Rig

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 08 — Final Project |
| **Bài học** | Arm Rig |
| **Thời lượng** | 12:39 |
| **Chủ đề chính** | Armature đơn giản cho cánh tay và pose cầm gậy |

## 1. Mục tiêu bài học

- Thêm một Armature với chuỗi xương vai-khuỷu tay-cổ tay cho cánh tay nhân vật.
- Parent mesh tay vào Armature bằng Automatic Weights.
- Pose cánh tay để cầm cây gậy đã dựng ở bài 069 một cách tự nhiên.

## 2. Nội dung chính

Vì dự án chỉ cần một tư thế tĩnh cho ảnh render cuối cùng (không phải animation đầy đủ), module chỉ giới thiệu một **Armature tối giản** cho riêng cánh tay đang cầm gậy: thêm Armature (`Shift + A > Armature`), vào Edit Mode của Armature, dựng chuỗi ba xương nối tiếp — **Upper Arm** (vai đến khuỷu), **Forearm** (khuỷu đến cổ tay), và **Hand** (cổ tay đến các ngón, có thể đơn giản hóa thành một xương duy nhất nếu không cần rig từng ngón).

**Parent mesh tay vào Armature** qua `Ctrl + P > With Automatic Weights` — Blender tự động tính toán Vertex Groups và trọng số ảnh hưởng (weight) của từng xương lên mesh dựa trên khoảng cách hình học, cho kết quả biến dạng hợp lý trong đa số trường hợp đơn giản mà không cần vẽ tay từng Vertex Group (kỹ thuật Weight Painting thủ công nằm ngoài phạm vi chi tiết ở bài này).

Sau khi parent, chuyển Armature sang **Pose Mode**, xoay từng xương (`R`) để đặt cánh tay vào tư thế cầm gậy tự nhiên — khuỷu tay hơi gập, cổ tay xoay để lòng bàn tay ôm quanh tay cầm gậy đã dựng ở bài 069. Gậy sau đó được **Parent** (không phải Weight Paint, vì là vật cứng không biến dạng) vào xương bàn tay để nó di chuyển theo khi pose, đảm bảo vị trí luôn khớp với lòng bàn tay.

## 3. Quy trình thực hành gợi ý

1. Thêm Armature, vào Edit Mode, dựng chuỗi 3 xương: Upper Arm, Forearm, Hand.
2. Chọn mesh cánh tay trước, Shift-chọn Armature sau, `Ctrl + P > With Automatic Weights`.
3. Chuyển Armature sang Pose Mode, kiểm tra vùng ảnh hưởng bằng cách xoay thử từng xương.
4. Xoay Upper Arm và Forearm để tạo dáng khuỷu tay gập tự nhiên.
5. Xoay xương Hand để lòng bàn tay hướng đúng vào vị trí cầm gậy.
6. Chọn cây gậy, Shift-chọn xương Hand trong Pose Mode, Parent (Ctrl+P > Bone) để gậy theo tay khi pose.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt |
|---|---|
| Thêm Armature | `Shift + A > Armature` |
| Extrude thêm xương (Edit Mode của Armature) | `E` |
| Parent with Automatic Weights | `Ctrl + P > With Automatic Weights` |
| Chuyển sang Pose Mode | Dropdown Mode, chọn "Pose Mode" |
| Xoay xương trong Pose Mode | `R` |

## 5. Lưu ý & lỗi thường gặp

- Automatic Weights có thể tính sai vùng ảnh hưởng nếu mesh tay có hình dạng phức tạp hoặc nằm quá gần các phần cơ thể khác (ví dụ thân người) — cần kiểm tra kỹ bằng cách xoay thử từng xương trước khi chốt pose cuối.
- Parent cây gậy vào mesh thay vì vào xương (Bone) khiến gậy không di chuyển đúng khi pose tay thay đổi.
- Quên rằng Automatic Weights tính toán dựa trên trạng thái Rest Pose (tư thế ban đầu khi parent) — nếu mesh tay đã bị chỉnh sửa sau khi parent, có thể cần Parent lại.
- Góc khuỷu tay/cổ tay không tự nhiên (quá thẳng hoặc gập ngược) làm mất tính thuyết phục của tư thế cầm gậy trong ảnh render cuối.

## 6. Checklist thực hành

- [ ] Đã dựng chuỗi Armature 3 xương cho cánh tay.
- [ ] Đã parent mesh tay vào Armature bằng Automatic Weights thành công.
- [ ] Đã pose cánh tay vào tư thế cầm gậy tự nhiên.
- [ ] Đã parent cây gậy vào xương bàn tay để nó theo đúng khi pose.

## 7. Tóm tắt

Arm Rig là bước rig tối giản chỉ đủ để đạt một tư thế tĩnh thuyết phục cho ảnh render cuối cùng — không đi sâu vào animation hay weight painting thủ công, nhưng đủ để minh họa quy trình cơ bản parent-mesh-vào-armature bằng Automatic Weights.
