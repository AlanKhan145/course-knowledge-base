# 083 — IK & Parenting

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 05 — Rigging & Animation |
| **Bài học** | IK & Parenting |
| **Thời lượng** | 10:38 |
| **Chủ đề chính** | Inverse Kinematics và Parenting |

## 1. Mục tiêu bài học

- Hiểu sự khác biệt giữa Forward Kinematics (FK) và Inverse Kinematics (IK).
- Biết cách thêm IK Constraint vào một chuỗi bone (ví dụ chân hoặc tay).
- Nắm được vai trò của Pole Target trong việc kiểm soát hướng khớp gối/khuỷu tay.
- Hiểu cách Parent mesh vào Armature bằng Automatic Weights để mesh biến dạng theo bone.

## 2. Nội dung chính

Forward Kinematics (FK) là cách animate bằng cách xoay từng bone theo thứ tự từ gốc đến ngọn (ví dụ xoay vai, rồi xoay khuỷu tay, rồi xoay cổ tay) — đã được thực hành ở bài Animating Bones. Inverse Kinematics (IK) hoạt động ngược lại: người dùng chỉ cần di chuyển một bone mục tiêu (IK Target) ở cuối chuỗi (ví dụ bàn chân hoặc bàn tay), và Blender tự động tính toán góc xoay của các bone phía trên (đùi, cẳng chân) sao cho đầu chuỗi chạm đúng vị trí target. IK đặc biệt hữu ích cho chuyển động chân khi đi bộ (bàn chân cần giữ cố định trên mặt đất) vì dễ kiểm soát hơn nhiều so với FK.

Để thiết lập IK, thêm một bone Target riêng (không thuộc chuỗi IK) đặt tại vị trí cuối chi (ví dụ tại bàn chân), sau đó chọn bone cuối cùng của chuỗi cần IK (ví dụ shin/cẳng chân) trong Pose Mode, thêm Bone Constraint loại "Inverse Kinematics" (phím tắt Shift+Ctrl+C có thể mở nhanh menu constraint phổ biến), và gán Target là bone vừa tạo. Tham số Chain Length xác định IK ảnh hưởng đến bao nhiêu bone ngược lên trên (ví dụ 2 để chỉ ảnh hưởng shin và thigh, không ảnh hưởng đến hông).

Vì bài toán IK cho một chuỗi 2 khớp thường có vô số lời giải (khớp gối có thể cong ra nhiều hướng khác nhau mà bàn chân vẫn chạm đúng vị trí), cần thêm một Pole Target — một bone hoặc empty phụ đặt phía trước hoặc phía sau đầu gối — để chỉ định rõ hướng khớp gối/khuỷu tay phải cong về phía nào, tránh hiện tượng khớp "gãy" sai hướng.

Sau khi hoàn thiện Armature, bước Parenting gắn kết mesh với bộ xương: chọn mesh trước, giữ Shift chọn Armature sau (Armature phải là active object), nhấn Ctrl+P và chọn "With Automatic Weights". Blender sẽ tự động tạo Vertex Group cho từng bone và tính toán trọng số ảnh hưởng dựa trên khoảng cách hình học — đây là bước khởi tạo nhanh, kết quả thường cần tinh chỉnh thêm ở bài Weight Painting.

## 3. Quy trình thực hành gợi ý

1. Trong Edit Mode Armature, thêm một bone Target riêng tại vị trí bàn chân (không kết nối vào chuỗi chân).
2. Chuyển sang Pose Mode, chọn bone shin (cẳng chân), vào Bone Constraint Properties, thêm constraint Inverse Kinematics.
3. Gán Target là bone Target vừa tạo, đặt Chain Length = 2 (ảnh hưởng shin và thigh).
4. Thêm một bone hoặc Empty làm Pole Target phía trước đầu gối, gán vào ô Pole Target của constraint, chỉnh Pole Angle nếu khớp gối cong sai hướng.
5. Di chuyển bone Target để kiểm tra chuỗi chân uốn cong tự nhiên theo IK.
6. Chọn mesh Blob Man, Shift chọn Armature, nhấn Ctrl+P > With Automatic Weights để Parent.
7. Vào Pose Mode, thử xoay/di chuyển vài bone để kiểm tra mesh biến dạng theo Armature.

## 4. Phím tắt & công cụ liên quan

| Phím tắt / thao tác | Chức năng |
|---|---|
| `Shift+Ctrl+C` | Mở menu Add Bone Constraint nhanh (bao gồm IK) |
| Bone Constraint Properties > Inverse Kinematics | Thêm IK constraint cho bone đang chọn |
| `Ctrl+P` (chọn Mesh rồi Armature) | Parent mesh vào Armature |
| "With Automatic Weights" | Tùy chọn Parent tự động tính Vertex Group theo khoảng cách |
| "With Empty Groups" | Tùy chọn Parent tạo Vertex Group rỗng để tự vẽ Weight Paint |
| `Alt+P` | Clear Parent (gỡ liên kết Parent) |

## 5. Lưu ý & lỗi thường gặp

- Không đặt Pole Target khiến khớp gối/khuỷu tay cong ngẫu nhiên hoặc lật hướng sai khi di chuyển IK Target.
- Đặt Chain Length quá lớn khiến IK ảnh hưởng ngược lên cả cột sống ngoài ý muốn.
- Parent mesh vào Armature khi mesh chưa Apply Transform (bỏ qua bài Rig Ready Meshes) gây biến dạng sai lệch.
- Dùng Automatic Weights trên mesh có hình dạng phức tạp/chồng lấn (ví dụ tay áp sát thân) dẫn đến trọng số sai, cần Weight Paint sửa lại thủ công ở bài sau.

## 6. Checklist thực hành

- [ ] Đã thêm IK constraint cho chuỗi bone chân (hoặc tay).
- [ ] Đã thiết lập Pole Target và chỉnh hướng khớp hợp lý.
- [ ] Đã Parent mesh Blob Man vào Armature bằng Automatic Weights.
- [ ] Đã thử Pose Mode để kiểm tra mesh biến dạng theo bone.

## 7. Tóm tắt

IK cho phép điều khiển chuỗi bone bằng cách di chuyển một target ở cuối chi thay vì xoay từng khớp, kết hợp với Pole Target để kiểm soát hướng cong. Parenting với Automatic Weights gắn kết mesh vào Armature, tạo nền tảng ban đầu cho Weight Painting ở bài tiếp theo.
