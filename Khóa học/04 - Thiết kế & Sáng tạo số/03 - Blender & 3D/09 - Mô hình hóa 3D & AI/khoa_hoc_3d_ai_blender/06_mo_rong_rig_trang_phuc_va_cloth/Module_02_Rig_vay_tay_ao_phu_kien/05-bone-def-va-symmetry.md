# Bài 05 — Tạo hệ xương DEF cho váy và liên kết rig nhân vật

## 1. Tổng quan

Với váy ngắn hoặc phần váy cần kiểm soát rõ silhouette, hệ bone riêng cho váy là phương án hữu ích. Ta xây các chuỗi xương biến dạng phân bố quanh váy, sau đó liên kết với rig chính và chuẩn hóa Weight Paint vùng cạp.

## 2. Mục tiêu học tập

- Tạo và đặt tên DEF bones theo topology của váy.
- Dùng snapping, bone roll và symmetrize để xây rig hai bên.
- Gộp rig váy vào nhân vật và sửa Armature Modifier khi mất target.

## 3. Nội dung bài học

### 3.1. Đặt chuỗi DEF theo vòng lưới

Trong `Edit Mode` của armature váy mới, bật `In Front`, tên xương và axes để quan sát. Thêm bone từ `Shift + A`, đặt một đầu gần lớp đỉnh dưới cạp, sử dụng snapping kiểu `Vertex` để bắt vào mesh. Với lưới phân bố đều, có thể tham khảo mật độ **một bone cho khoảng ba hàng/đỉnh theo chiều dọc**; đây chỉ là ví dụ thiết kế, không phải quy tắc cứng.

Đặt tên bone biến dạng như `DEF_skirt_front_01.L`, `DEF_skirt_front_02.L` rồi lặp cho dãy xung quanh váy. Các bone nối theo chiều dọc nhưng có thể dùng `Alt + P > Disconnect Bone` khi muốn không khóa đầu–đuôi ở cùng điểm. Tùy rig, giữ quan hệ cha–con nhưng cho phép dịch chuyển tự do.

### 3.2. Canh trục và đối xứng

Dùng `Ctrl + R` trong `Edit Mode` của Armature để tinh chỉnh `Bone Roll` (phím cụ thể có thể phụ thuộc ngữ cảnh), hướng trục gần với hướng tự nhiên của bề mặt váy; mục đích là khi xoay bone, animator thấy hướng điều khiển dễ đoán.

Đặt hậu tố `.L` cho xương bên trái theo quy ước Blender. Khi đã hoàn thiện một nửa, chọn xương phù hợp và `Armature > Symmetrize` để sinh phần `.R`. Trước khi symmetrize, kiểm tra trục đối xứng của rig, vị trí xương gốc và việc mesh có thực sự cân xứng hay không.

### 3.3. Bind váy vào rig DEF

Chọn váy, chọn armature váy, `Ctrl + P > With Automatic Weights`. Kiểm tra trong Pose Mode: các dải xương có tác động đúng nhóm vải không, phần cạp có bị di chuyển theo xương mép không. Vùng **hai vòng đỉnh trên cùng** có thể gán mạnh cho xương hông và giảm dần trọng số xuống dưới để chuyển tiếp tự nhiên.

Phần dưới có thể chịu ảnh hưởng chuỗi DEF. Tránh chuyển trọng số trực tiếp toàn bộ cạp vào xương đùi khiến váy bị kéo theo chân.

### 3.4. Gộp armature và sửa lỗi mất liên kết

Nếu đang dùng armature phụ, có thể gộp nó vào armature nhân vật ở `Object Mode`: chọn armature váy rồi chọn rig nhân vật làm active, `Ctrl + J` (cần lưu bản sao trước). Sau gộp, `Armature Modifier` của váy có thể vẫn trỏ tới đối tượng armature cũ đã biến mất: biểu tượng/target lỗi, kéo bone nhưng váy không biến dạng.

Mở `Modifiers` của váy, chọn lại rig mới ở `Object` target; kiểm tra vertex groups, tên bone và các constraint có đối tượng cũ. Sắp xếp bone collections/layers để tách xương váy ra khỏi điều khiển thân và tránh lộn khi animate.

## 4. Thực hành

**Nhiệm vụ:** Dựng váy ống hoặc váy ngắn topology quad, bố trí các cột DEF bone quanh váy và symmetrize; gán vùng cạp theo hip, gộp vào rig nhân vật rồi kiểm tra xương còn điều khiển mesh.

**Checkpoint:** Cột xương hai bên đúng tên `.L/.R`; vòng cạp ổn định; Armature Modifier không có target đỏ; không tạo chuyển động ngoài ý muốn khi thử pose.

## 5. Câu hỏi ôn tập

**Câu 1.** Tiền tố DEF trong rig váy biểu thị vai trò nào?

A. Bone biến dạng mesh
B. Camera rig
C. Âm thanh
D. Vật liệu

**Đáp án:** A. **Giải thích:** DEF bones đóng vai trò trực tiếp tác động vertex groups.

**Câu 2.** Hậu tố .L và công cụ nào hỗ trợ tạo đối xứng?

A. Shape Key
B. Solidify
C. Symmetrize
D. Bake All Dynamics

**Đáp án:** C. **Giải thích:** Blender nhận quy ước .L/.R để tạo cặp xương hai bên.

**Câu 3.** Sau Ctrl+J hai armature, váy đứng yên dù xương dịch chuyển: kiểm tra gì?

A. World Strength
B. Target Armature Modifier còn trỏ armature cũ
C. FPS ở Render
D. Chất liệu da

**Đáp án:** B. **Giải thích:** Target bị mất khiến modifier không còn biết dùng armature nào.

**Câu 4.** Vì sao cạp váy thường ảnh hưởng mạnh từ hip bone?

A. Để mép váy tự rơi
B. Để đổi scale camera
C. Để khóa ánh sáng
D. Vì cạp cần gắn với vùng eo/hông nhân vật

**Đáp án:** D. **Giải thích:** Cạp là vùng neo, thường không tự do như phần mép váy.

**Câu 5.** Tại sao bone roll quan trọng khi animate thủ công?

A. Cho hướng trục xoay dễ kiểm soát
B. Làm tăng số polygon
C. Đổi UV
D. Tự tạo va chạm

**Đáp án:** A. **Giải thích:** Trục bone nhất quán giúp xoay theo hướng dự kiến.

## 6. Tổng kết

Hệ DEF rõ ràng tạo nền cho rig váy linh hoạt. Sau khi gộp armature, luôn kiểm tra modifier và quan hệ xương trước khi thêm constraint.
