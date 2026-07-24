# 082 — Building the Armature

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 05 — Rigging & Animation |
| **Bài học** | Building the Armature |
| **Thời lượng** | 9:44 |
| **Chủ đề chính** | Tạo bộ xương Armature |

## 1. Mục tiêu bài học

- Xây dựng một Armature hoàn chỉnh khớp với cấu trúc cơ thể của Blob Man.
- Biết cách dùng X-Ray và Symmetrize để dựng bone đối xứng nhanh hơn.
- Nắm được cách đặt tên bone theo quy ước (ví dụ .L/.R) để hỗ trợ Symmetrize và Mirror animation.
- Hiểu cấu trúc phân cấp (hierarchy) hợp lý cho một rig nhân vật cơ bản: root, spine, head, arms, legs.

## 2. Nội dung chính

Xây dựng Armature cho nhân vật là quá trình đặt các bone vào đúng vị trí giải phẫu tương ứng với mesh, tạo thành một hệ thống phân cấp logic. Với một nhân vật cơ bản như Blob Man, cấu trúc bone tối thiểu thường gồm: một bone gốc (root) hoặc hip, một chuỗi spine (cột sống) đi lên đến bone head, và hai chuỗi bone cho mỗi tay (upper arm, forearm, hand) và mỗi chân (thigh, shin, foot).

Để dựng nhanh và chính xác, nên bật chế độ hiển thị X-Ray (hoặc In Front) để nhìn xuyên qua mesh khi đặt bone ở Edit Mode, giúp căn chỉnh bone khớp chính xác vào bên trong hình dạng cơ thể. Một kỹ thuật tiết kiệm thời gian phổ biến là chỉ dựng bone cho một bên cơ thể (ví dụ tay trái, chân trái) với tên đặt theo quy ước hậu tố `.L`, sau đó dùng chức năng Symmetrize (Armature > Symmetrize trong Edit Mode) để tự động tạo bone đối xứng bên còn lại với hậu tố `.R` tương ứng — Blender tự nhận diện và đổi tên đúng quy ước.

Việc đặt tên bone rõ ràng và nhất quán (ví dụ `upper_arm.L`, `forearm.L`, `hand.L`) không chỉ giúp quản lý rig dễ dàng mà còn là điều kiện cần để các công cụ như Symmetrize, Copy Pose, hay Mirror animation trong Pose Mode hoạt động đúng. Quan hệ cha-con giữa các bone (thiết lập bằng cách extrude nối tiếp, hoặc Parent thủ công trong Edit Mode với Ctrl+P) quyết định cách chuyển động lan truyền: xoay bone cha (ví dụ upper_arm) sẽ kéo theo toàn bộ chuỗi con (forearm, hand) chuyển động theo.

## 3. Quy trình thực hành gợi ý

1. Thêm Armature mới, bật chế độ hiển thị X-Ray/In Front để nhìn xuyên mesh.
2. Vào Edit Mode, di chuyển bone đầu tiên vào vị trí hông/root, kéo dài lên tạo chuỗi spine đến đầu.
3. Từ vị trí vai trên spine, extrude tạo chuỗi bone tay trái: upper_arm.L, forearm.L, hand.L.
4. Từ vị trí hông, extrude tạo chuỗi bone chân trái: thigh.L, shin.L, foot.L.
5. Chọn toàn bộ bone bên trái, dùng Armature > Symmetrize để tự động tạo bone đối xứng bên phải.
6. Kiểm tra lại tên bone (hậu tố .L/.R đúng), điều chỉnh vị trí Head/Tail từng bone khớp sát với hình dạng mesh.

## 4. Phím tắt & công cụ liên quan

| Phím tắt / thao tác | Chức năng |
|---|---|
| `Shift+A` | Add > Armature |
| Bật "In Front" (Object Properties > Viewport Display) | Nhìn xuyên mesh để căn bone chính xác |
| `E` | Extrude tạo bone con nối tiếp |
| `Ctrl+P` (Edit Mode Armature) | Parent bone đã chọn vào bone khác (Connected/Keep Offset) |
| Armature menu > Symmetrize | Tự động tạo bone đối xứng theo tên .L/.R |
| `F2` hoặc double-click trong Outliner | Đổi tên bone |

## 5. Lưu ý & lỗi thường gặp

- Không đặt tên bone theo đúng quy ước `.L`/`.R` khiến Symmetrize không nhận diện đúng cặp đối xứng.
- Đặt bone không khớp sát vào bên trong mesh (do không bật X-Ray) khiến rig trông lệch khi Weight Paint.
- Quên thiết lập quan hệ cha-con hợp lý (ví dụ hand không parent vào forearm) khiến chuyển động không lan truyền đúng.
- Dựng quá nhiều bone không cần thiết cho một nhân vật đơn giản như Blob Man, làm tăng độ phức tạp không cần thiết khi Weight Paint.

## 6. Checklist thực hành

- [ ] Đã dựng chuỗi spine từ root đến head.
- [ ] Đã dựng chuỗi bone cho một bên tay và một bên chân.
- [ ] Đã dùng Symmetrize để tạo bone đối xứng bên còn lại.
- [ ] Đã kiểm tra và đặt tên bone đúng quy ước .L/.R.
- [ ] Đã căn chỉnh vị trí bone khớp sát với hình dạng mesh Blob Man.

## 7. Tóm tắt

Building the Armature là bước dựng bộ xương hoàn chỉnh cho nhân vật, với cấu trúc phân cấp hợp lý và tên bone theo quy ước .L/.R để tận dụng Symmetrize. Đây là nền tảng trực tiếp cho các bước IK, Parenting và Weight Painting tiếp theo.
