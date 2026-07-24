# 077 — Animating Bones

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 05 — Rigging & Animation |
| **Bài học** | Animating Bones |
| **Thời lượng** | 12:05 |
| **Chủ đề chính** | Tạo hoạt ảnh bằng bone |

## 1. Mục tiêu bài học

- Biết cách chèn keyframe cho bone trong Pose Mode.
- Hiểu sự khác biệt giữa animate object thông thường và animate bone (Pose Bone).
- Nắm được cách sử dụng Keying Set (LocRotScale) khi animate nhiều bone cùng lúc.
- Làm quen với việc animate một chuỗi bone đơn giản để tạo chuyển động liên hoàn.

## 2. Nội dung chính

Animate bone hoạt động tương tự animate object thông thường (chèn keyframe bằng I, xem trên Timeline/Dope Sheet/Graph Editor), nhưng phải thực hiện trong Pose Mode và áp dụng riêng cho từng bone (Pose Bone) đang chọn — mỗi bone có transform riêng độc lập (Location, Rotation, Scale tính theo hệ tọa độ local của bone đó, thường dựa trên Rest Pose ban đầu).

Khi làm việc với chuỗi bone (ví dụ cánh tay gồm nhiều bone nối tiếp), animate bone gốc trong chuỗi sẽ kéo theo chuyển động của các bone con phía sau (do quan hệ cha-con), nhưng mỗi bone vẫn có thể có keyframe riêng để tạo chuyển động phức tạp hơn (ví dụ uốn cong từng đốt). Đây chính là nguyên lý Forward Kinematics (FK) — animate bằng cách xoay từng khớp theo thứ tự từ gốc đến ngọn, khác với Inverse Kinematics (IK) sẽ được học ở bài sau.

Khi chèn keyframe cho bone, nên chọn loại LocRotScale (hoặc dùng phím tắt tương ứng theo Keying Set) để đảm bảo toàn bộ giá trị transform của bone được lưu lại tại frame đó, tránh trường hợp chỉ lưu một phần thuộc tính khiến animation bị lỗi khi nội suy.

## 3. Quy trình thực hành gợi ý

1. Chuyển Armature sang Pose Mode (Ctrl+Tab).
2. Chọn một bone, di chuyển playhead về frame 1, nhấn I và chọn Rotation (hoặc LocRotScale).
3. Di chuyển playhead sang frame khác, xoay bone (R) để tạo tư thế mới, nhấn I lại.
4. Lặp lại cho các bone khác trong chuỗi để tạo chuyển động phối hợp.
5. Play animation để kiểm tra chuyển động của toàn bộ chuỗi bone.
6. Mở Dope Sheet (chế độ Action Editor) để xem toàn bộ keyframe của Armature trên một hàng thời gian.

## 4. Phím tắt & công cụ liên quan

| Phím tắt | Chức năng |
|---|---|
| `Ctrl+Tab` | Vào/thoát Pose Mode |
| `I` | Insert Keyframe cho Pose Bone đang chọn |
| `Alt+I` | Xóa keyframe của bone tại frame hiện tại |
| `Alt+R` / `Alt+G` / `Alt+S` | Xóa (clear) Rotation / Location / Scale về Rest Pose |
| `R` | Xoay bone (thao tác animate phổ biến nhất trong Pose Mode) |
| `A` | Chọn tất cả bone trong Pose Mode |

## 5. Lưu ý & lỗi thường gặp

- Animate ở Edit Mode thay vì Pose Mode — Edit Mode không lưu được keyframe animation cho bone.
- Quên rằng transform của bone tính theo hệ tọa độ local, khiến giá trị Location/Rotation khó đoán nếu không quen.
- Không dùng LocRotScale khi chèn keyframe, dẫn đến chỉ lưu một phần transform và animation bị lỗi ở phần còn lại.
- Chọn nhầm bone khi có nhiều bone chồng nhau trong khung nhìn — nên bật hiển thị tên bone hoặc phóng to để chọn chính xác.

## 6. Checklist thực hành

- [ ] Đã chèn keyframe LocRotScale cho ít nhất một bone.
- [ ] Đã tạo chuyển động cho một chuỗi 2-3 bone nối tiếp.
- [ ] Đã kiểm tra animation bằng Play trong Timeline.
- [ ] Đã xem lại keyframe bone trong Dope Sheet / Action Editor.

## 7. Tóm tắt

Animate bone thực hiện trong Pose Mode theo nguyên lý Forward Kinematics: xoay và chèn keyframe cho từng bone để tạo chuyển động chuỗi. Đây là kỹ năng nền tảng trước khi học Inverse Kinematics và rigging nhân vật hoàn chỉnh.
