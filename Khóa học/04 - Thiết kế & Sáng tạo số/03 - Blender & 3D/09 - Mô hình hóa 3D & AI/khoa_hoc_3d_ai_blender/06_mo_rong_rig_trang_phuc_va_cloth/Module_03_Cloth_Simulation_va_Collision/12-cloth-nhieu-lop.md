# Bài 12 — Mô phỏng trang phục nhiều lớp: quần, áo thun và áo khoác

## 1. Tổng quan

Khi nhân vật mặc quần short, áo trong và áo khoác, mỗi lớp vải đồng thời chạm cơ thể và các lớp khác. Nếu bật toàn bộ Cloth/Collision ngay từ đầu, việc tìm nguyên nhân clipping khó hơn nhiều. Giải pháp là đưa trang phục vào scene theo từng lớp.

## 2. Mục tiêu học tập

- Lập thứ tự tính mô phỏng theo lớp gần cơ thể trước.
- Dùng Collision trên trang phục đã ổn định để hỗ trợ lớp ngoài.
- Xử lý xung đột giữa Armature, Surface Deform, Cloth và Subdivision.

## 3. Nội dung bài học

### 3.1. Thiết kế hệ nhiều lớp

Tổ chức thành `Shorts`, `Tshirt`, `Jacket` và `Body_Collision`. Bước đầu dùng `Parent With Automatic Weights` để từng lớp có chuyển động nền theo rig; với phần cần cố định, tạo nhóm Pin và Weight Paint. Bảo đảm các mesh ở rest pose không cắt nhau: ví dụ mặt áo thun phải nằm ngoài da nhưng trong lớp áo khoác.

Thứ tự gợi ý: (1) quần/shorts, (2) áo thun, (3) áo khoác. Mô phỏng và chốt cấu hình từng lớp trước khi thêm một lớp mới. Với từng lớp, kiểm tra cục bộ vùng vai, háng và gấu áo.

### 3.2. Lớp đầu tiên — quần short

Gắn Collision cho body, gắn Cloth cho shorts và chỉ định Pin Group tại lưng quần/cạp. Chạy thử chuyển động co chân. Nếu shorts xuyên đùi do phần mesh ban đầu không theo cơ thể tốt, có thể tinh chỉnh skinning, sửa hình học hoặc dùng `Surface Deform Modifier` trên vùng cần bám body; phải kiểm tra `Bind` và thứ tự modifier theo phiên bản Blender.

Với quần short cứng hơn váy mềm, có thể cần Bending cao hơn và damping phù hợp. Sau khi bake thấy ổn, bật Collision trên shorts ở thời điểm phù hợp để áo thun có thể tiếp xúc. Lưu ý hai solver liên hệ nhau có thể yêu cầu tính/cache một cách nhất quán từ frame đầu.

### 3.3. Lớp thứ hai — áo thun

Chọn mesh áo thun, sửa các group skin, pin phần cổ/vai hoặc vùng thân cần neo. Thêm Cloth, bật `Self Collision` nếu cần, kiểm tra khoảng cách với body và shorts. Nếu bật collider shorts khiến áo thun bị giật hoặc rách, so lại mesh giữa các lớp và thứ tự modifier/collision: collider cần phản ánh hình dạng được biến dạng đúng, không phải một mesh chưa chạy Cloth.

Tùy hiệu năng, có thể thêm subdivision mức thấp trước Cloth để solver có đủ mật độ, nhưng hãy đánh giá chi phí; thêm subdivision sau Cloth để mượt render khi không cần nếp vật lý tinh hơn.

### 3.4. Lớp ngoài — áo khoác

Áo khoác rộng có thể dùng thông số chống uốn cao hơn áo thun, và ghim vùng vai/cổ. Thêm Cloth sau khi các lớp trong đã vận hành ổn. Kiểm tra jacket với các pose vung tay, xoay người và co gối. Sửa từng vùng body xuyên áo bằng Weight Paint/Shape Key/Mask thay vì tăng collision distance đến mức áo trông bay khỏi thân.

Khi bake lại một lớp trong, dữ liệu lớp ngoài có thể phải được làm mới để không dựa trên biến dạng cũ. Giữ các tên cache, scene versions và render test rõ ràng.

## 4. Thực hành

**Nhiệm vụ:** Tạo ba lớp quần short, áo thun, áo khoác (có thể là mesh đơn giản). Test từng lớp theo thứ tự; thêm collider lớp trong rồi thử lớp ngoài; ghi lại trạng thái lỗi trước/sau khi đổi modifier order.

**Checkpoint:** Không có hai lớp trùng bề mặt ngay từ rest pose; ít nhất một đoạn chuyển động 50+ frame ổn định; biết layer nào gây lỗi nếu bật toàn bộ scene.

## 5. Câu hỏi ôn tập

**Câu 1.** Thứ tự mô phỏng nhiều lớp hợp lý là gì?

A. Áo khoác trước, body sau
B. Tất cả cùng lúc và không kiểm tra
C. Lớp gần body trước, lớp ngoài sau
D. Chỉ mô phỏng tóc

**Đáp án:** C. **Giải thích:** Mỗi lớp ngoài có thể phải va chạm với hình dạng lớp trong.

**Câu 2.** Pin Group của quần short thường nằm ở đâu?

A. Cạp/lưng quần
B. Đầu gối hoàn toàn
C. Ngón tay
D. Camera

**Đáp án:** A. **Giải thích:** Cạp là vùng neo bám vào cơ thể.

**Câu 3.** Khi bật Collision quần short làm áo thun méo, nên kiểm tra gì?

A. Âm thanh
B. Màu áo khoác
C. Tên texture
D. Thứ tự modifier, bề mặt và collision distance

**Đáp án:** D. **Giải thích:** Collider phải phản ánh đúng hình dạng và khoảng cách của lớp trong.

**Câu 4.** Tại sao không tăng khoảng cách va chạm quá lớn?

A. Vì không thể render
B. Vì lớp vải có thể bị đẩy cách xa cơ thể một cách giả
C. Vì xóa weight
D. Vì tăng fps

**Đáp án:** B. **Giải thích:** Khoảng hở quá lớn làm mất cảm giác trang phục đang được mặc.

**Câu 5.** Sau khi đổi cache của lớp trong, cần làm gì với lớp ngoài?

A. Không bao giờ thay đổi
B. Xóa tất cả bone
C. Tính/bake lại nếu dữ liệu va chạm phụ thuộc đã thay
D. Đổi ánh sáng

**Đáp án:** C. **Giải thích:** Lớp ngoài có thể đang dùng kết quả mô phỏng cũ.

## 6. Tổng kết

Mô phỏng nhiều lớp cần thứ tự có chủ đích. Giữ mỗi lớp đơn giản, bake và kiểm tra rồi mới tăng độ phức tạp.
