# Bài 14 — Chuyển chuyển động Cloth sang keyframe xương để xuất game

## 1. Tổng quan

Mô phỏng trong Blender có thể cho vạt cape rất đẹp nhưng game engine không nhất thiết hiểu cache Cloth này. Một phương pháp là để các `Empty` theo sát ba đỉnh của mesh Cloth, cho bone phụ theo các Empty rồi **bake chuyển động bone** thành keyframe có thể xuất. Phương pháp này tạo chuyển động gần giống mô phỏng, không tự bảo đảm khớp 100% từng đỉnh.

## 2. Mục tiêu học tập

- Mô tả chuỗi Cloth → Empty → Bone → Bake.
- Dùng vertex parenting ba đỉnh để khôi phục vị trí và hướng tương đối.
- Xác định giới hạn độ chính xác và bước kiểm tra khi xuất FBX.

## 3. Nội dung bài học

### 3.1. Chuẩn bị hai bản cape và rig

Giữ một bản `Cape_Cloth` đang mô phỏng đã bake và một bản `Cape_Skinned` không chạy Cloth nhưng được skin theo hệ bone cape. Hai bản ban đầu có cấu trúc/hình dáng tương đồng; khác biệt có thể xuất hiện nếu số bone ít hơn số điểm vải.

Tạo các bone phụ trong armature `Cape_Rig`, phân bố theo các vùng muốn tái tạo: cạnh trái, giữa, cạnh phải, các hàng dọc cape. Hãy chọn mật độ vừa đủ cho nếp chuyển động cần giữ; quá ít bone không thể tái hiện các nếp gấp nhỏ của mô phỏng.

### 3.2. Canh Empty với bone

Tạo một `Empty` cho từng bone muốn lấy chuyển động. Trước tiên có thể dùng `Copy Transforms` tạm thời từ bone để canh Empty tới vị trí và hướng cần theo dõi. Sau đó `Apply Visual Transform` nếu cấu hình phù hợp, bỏ constraint tạm, giữ Empty ở vị trí hiện tại.

Mục tiêu là mỗi Empty ban đầu thẳng hàng với bone tương ứng, để khi lấy hướng từ tấm Cloth không phát sinh offset lớn. Với hệ tọa độ phức tạp, phải kiểm tra world/local space trước khi chuyển sang bước tiếp theo.

### 3.3. Parent Empty theo ba đỉnh mô phỏng

Trên `Cape_Cloth`, xác định một bộ **ba đỉnh không thẳng hàng** cho mỗi vị trí Empty. Dùng `Vertex (Triangle) Parenting` để Empty theo vị trí và định hướng bề mặt tạo bởi ba đỉnh đó. Có thể chọn Empty, sau đó mesh, vào Edit Mode chọn ba vertex và tạo quan hệ parent theo ba đỉnh bằng menu parenting tương ứng. Nếu dùng hai vertex hoặc chọn ba đỉnh gần như thẳng hàng, hướng suy ra dễ bất ổn.

Khi phát cache, Empty phải bám theo vải. Kiểm tra các vòng xoay khi cape lật, gấp; nếu một Empty bị đảo chiều 180°, đổi bộ ba đỉnh hoặc trục tham chiếu.

### 3.4. Cho bone theo Empty và bake action

Ở `Pose Mode` của cape rig, thêm `Copy Transforms` cho mỗi bone với target Empty tương ứng. Khi phát animation, hệ bone chuyển động theo tấm Cloth. Kiểm tra `Cape_Skinned` có biến dạng gần với bản cloth hay không.

Để xuất, cần **Bake Action** trên các pose bones nhận constraint, bật `Visual Keying` và chọn frame range tương ứng (đồng thời cân nhắc `Clear Constraints` trên bản dùng xuất nếu đã xác nhận bake đúng). Chạy lại animation khi đã tắt/bỏ các constraint để bảo đảm bone vẫn chuyển động. Xuất FBX với armature, skinned cape và action đã bake; nhập thử vào engine hoặc Blender scene sạch để xác nhận. Constraint hay Empty chỉ là công cụ trung gian, không phải dữ liệu animation tương thích được bảo đảm.

### 3.5. Giới hạn và tối ưu

Nếu số bone ít, những nếp gấp nhỏ sẽ bị làm mượt — đó là sai khác dự kiến. Tăng số bone cải thiện độ bám nhưng làm rig và keyframe nặng. Đặt bone ở vùng đổi hướng chính của cape, giữ topology và Weight Paint đều, xem chuyển động ở góc 3/4 và chuyển động quay nhanh. Với mỗi bone, bake theo từng frame hay bước mẫu đủ dày để không bỏ qua dao động nhanh.

## 4. Thực hành

**Nhiệm vụ:** Tạo một plane cloth nhỏ treo hai góc, thêm ba bone và ba Empty ở ba vùng; parent từng Empty theo ba vertex của tấm vải, bone Copy Transforms theo Empty, Bake Action và thử bỏ toàn bộ constraint.

**Checkpoint:** Bone vẫn chạy khi bỏ Empty/Cloth khỏi bản kiểm tra; bản cape skinned chuyển động tương tự (không cần giống từng nếp); FBX import lại có action hợp lệ.

## 5. Câu hỏi ôn tập

**Câu 1.** Vì sao không xuất trực tiếp cache Cloth và kỳ vọng game tự chạy?

A. Vì clip không có FPS
B. Vì hệ thống cache và runtime engine có thể khác
C. Vì FBX không có mesh
D. Vì Blender không có bones

**Đáp án:** B. **Giải thích:** Định dạng và engine không tự hiểu mô phỏng đã cache trong Blender.

**Câu 2.** Vertex (Triangle) Parenting sử dụng bao nhiêu đỉnh?

A. Một
B. Hai
C. Ba
D. Năm

**Đáp án:** C. **Giải thích:** Ba đỉnh tạo cơ sở xác định hướng của bề mặt.

**Câu 3.** Phần nào cần thực hiện để bỏ phụ thuộc runtime vào Empty và constraints?

A. Bake Action của pose bones
B. Render thumbnail
C. Đổi HDRI
D. Xóa mọi mesh

**Đáp án:** A. **Giải thích:** Bake ghi chuyển động thực tế xuống keyframe bone.

**Câu 4.** Bản bone-driven thường không khớp 100% với Cloth vì sao?

A. Vì material khác
B. Vì cache không có thông tin
C. Vì không có ánh sáng
D. Vì số bone và skinning có độ phân giải biến dạng hạn chế

**Đáp án:** D. **Giải thích:** Bone deformation không mô phỏng chính xác từng đỉnh vải trừ khi rất nhiều bone.

**Câu 5.** Để kiểm tra thành công, sau bake nên làm gì?

A. Chỉ nhìn thumbnail
B. Tắt constraints rồi phát lại và import thử FBX
C. Đổi đơn vị nhiệt độ
D. Xóa Body_Render

**Đáp án:** B. **Giải thích:** Animation phải độc lập với thiết lập trung gian mới an toàn để xuất.

## 6. Tổng kết

Dùng Empty theo bề mặt vải, ràng buộc bone rồi bake thành keyframe là cầu nối giữa mô phỏng và animation rigged. Kiểm tra độc lập sau bake là bước bắt buộc.
