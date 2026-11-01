# Bài 11 — Collider cơ thể, bản sao va chạm và sửa xuyên vải

## 1. Tổng quan

Khi vải mô phỏng rơi xuyên thân, ta cần một hình thể đủ chính xác để cản chuyển động. Tuy nhiên, mesh body gốc có thể chứa bàn tay, ngón, phụ kiện gây va chạm không mong muốn; có lúc phần tay vung sát váy làm solver kéo mép váy méo. Bài này tạo collider riêng và phân tích lỗi va chạm.

## 2. Mục tiêu học tập

- Gắn Collision lên body và test tương tác.
- Tạo proxy collider chỉ gồm các phần thực sự cần va chạm.
- Sửa xuyên vải từ geometry, pose, thứ tự modifier và khoảng cách.

## 3. Nội dung bài học

### 3.1. Thêm Collision và chọn đúng đối tượng

Chọn `Body_Collision` hoặc mesh nhân vật, vào `Physics Properties > Collision`. Chọn trang phục rồi thêm `Cloth`. Bắt đầu playback ở **frame đầu tiên** của đoạn chuẩn bị; nếu nhảy thẳng vào giữa animation khi chưa có cache, việc tính toán có thể sai hoặc chưa có đủ lịch sử.

Nếu vải rơi xuyên thân, kiểm tra: collider có thực sự nhận pose qua `Armature Modifier`? Vải và collider có giao nhau ngay tại rest pose? `Collision` có bị vô hiệu không? Khoảng cách, normals và scale có hợp lý?

### 3.2. Làm collider từ bản sao cơ thể

Nhân bản mesh body đã rig bằng `Shift + D`; đổi tên thành `Body_Collision`. Xác nhận bản sao vẫn nhận đúng Armature Deform. Ẩn bản sao khỏi render nhưng không vô hiệu hóa phần cần tính physics. Trên body render, có thể tắt Collision để tránh hai hình thể chồng nhau cùng tác động vải.

Trong `Edit Mode` của `Body_Collision`, chọn và xóa những phần không cần va chạm với **trang phục đang mô phỏng**, chẳng hạn ngón tay/hai cánh tay đang gây va chạm sai với váy, hoặc chi tiết khuôn mặt. Không xóa phần cần cản vải như bụng, hông, đùi. Collider dạng proxy có thể là mesh lược hoặc tập hình thể đơn giản theo vùng tiếp xúc.

### 3.3. Lỗi do tư thế nhân vật

Một va chạm sai phổ biến: bàn tay đi xuyên torso hoặc đùi trong animation nguồn, đồng thời vải nằm giữa chúng. Không nên chỉ tăng `Collision Quality` vì collider tự giao nhau có thể khiến solver phản ứng bất thường. Sửa pose hoặc loại vùng collider không cần thiết trước.

Khi mặt áo xuyên body từng chút một, kiểm tra `Collision Distance` trước khi tăng độ dày hình học. `Solidify Modifier` thường được thêm sau Cloth cho mục đích render độ dày; đặt Solidify dày trước solver có thể thay đổi geometry và làm tăng bất ổn. Với mesh nhiều layer, modifier phục vụ collision phải nằm đúng thứ tự để collider nhận đúng hình dạng đã biến dạng.

### 3.4. Quy trình khoanh vùng lỗi

1. Tắt Self Collision, tắt phụ kiện, chỉ giữ Cloth và body collider.
2. Quay lại frame đầu, `Free Bake`/xóa cache cũ nếu đã bake.
3. Kiểm tra normals, scale, khoảng hở, topology và các frame nguồn.
4. Bật lại Self Collision; tăng Quality Steps vừa đủ.
5. Thêm lại từng collider phụ như quần, áo trong và test một lớp tại một thời điểm.

Khi chỉ một khung hình gây méo vải, xác định bộ phận chạm vải ở frame trước đó: lỗi thường bắt đầu sớm hơn vị trí nó hiển thị rõ.

## 4. Thực hành

**Nhiệm vụ:** Tạo `Body_Collision` từ body. Loại vùng không cần thiết, giấu proxy trong render, để nó hoạt động trong Physics. So sánh trước/sau trên animation vung tay sát váy.

**Checkpoint:** Va chạm hông/đùi còn đủ; không có bàn tay gây kéo vải sai; đã phân biệt lỗi xuất phát từ pose với lỗi tham số solver.

## 5. Câu hỏi ôn tập

**Câu 1.** Mục đích của Body_Collision riêng là gì?

A. Tạo thêm nhân vật render
B. Tạo proxy kiểm soát vùng cơ thể va chạm với vải
C. Đổi xương
D. Tạo keyframe camera

**Đáp án:** B. **Giải thích:** Collider phụ cho phép loại các vùng không cần mô phỏng tương tác.

**Câu 2.** Trước khi tăng Quality Steps khi vải nổ, điều nào nên kiểm tra?

A. Geometry/pose đang giao nhau từ frame đầu
B. Độ sáng đèn
C. Phong cách render
D. Tên Action

**Đáp án:** A. **Giải thích:** Giao lưới ban đầu là nguyên nhân vật lý quan trọng.

**Câu 3.** Phần nào của collider nên giữ khi váy chạm đùi?

A. Mắt
B. Ngón tay
C. Đèn
D. Hông và đùi

**Đáp án:** D. **Giải thích:** Vùng này cần thật để đẩy vải ra khi nhân vật cử động chân.

**Câu 4.** Thứ tự nào thường hợp lý với Solidify cho hiệu ứng độ dày?

A. Luôn trước mọi modifier
B. Không dùng được với Cloth
C. Sau mô phỏng Cloth trong trường hợp thông thường
D. Thay thế armature

**Đáp án:** C. **Giải thích:** Cloth hoạt động ổn hơn khi mô phỏng bề mặt chưa bị nhân độ dày không cần thiết.

**Câu 5.** Một frame Cloth méo do tay đâm vào vải, phương án đầu tiên nên cân nhắc?

A. Sửa pose/collider vùng tay
B. Thêm nhiều light
C. Đổi màu váy
D. Tăng UV map

**Đáp án:** A. **Giải thích:** Va chạm không mong muốn cần sửa đúng nguồn hình học.

## 6. Tổng kết

Collider hiệu quả không phải collider nhiều polygon nhất, mà là collider có bề mặt đúng và tránh tương tác sai. Luôn xác nhận rest pose và cache trước khi tinh chỉnh các thông số cao cấp.
