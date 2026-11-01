# Bài 04 — Gắn áo, váy và giày vào Rig với Weight Paint

## 1. Tổng quan

Khi mesh đã vừa cơ thể, trang phục cần nhận chuyển động từ bộ xương. Bind tự động giúp bắt đầu nhanh nhưng hiếm khi hoàn hảo ở vai, cổ áo, đùi và phần váy dài. Bài này đi từ `Parent With Automatic Weights` đến kiểm soát trọng số từng khu vực.

## 2. Mục tiêu học tập

- Parent mesh trang phục với rig và kiểm tra modifier.
- Sửa các lỗi biến dạng bằng Weight Paint và chuyển trọng số từ body.
- Xử lý clipping bằng Shape Key hoặc Mask trong trường hợp phù hợp.

## 3. Nội dung bài học

### 3.1. Bind tự động và kiểm tra ngay

Trong `Object Mode`, chọn **mesh trang phục trước**, giữ `Shift` chọn **Armature cuối**, nhấn `Ctrl + P > With Automatic Weights`. Blender tạo `Vertex Group` tương ứng xương biến dạng và `Armature Modifier`. Mở nhiều pose test; đừng đánh giá chỉ bằng T-pose.

Với áo, kiểm tra vai và nách; với váy, kiểm tra hông, đùi và khoảng cách hai chân; với giày, kiểm tra ngón chân và cổ chân. Nếu phần áo bị kéo mạnh theo ngón tay nằm gần nó, thuật toán có thể gán trọng số sai vì khoảng cách không phản ánh mối liên hệ giải phẫu.

### 3.2. Weight Paint và vùng ảnh hưởng

Trong `Weight Paint`, mỗi vertex có trọng số ảnh hưởng khác nhau cho từng bone (thường biểu diễn từ xanh đến đỏ). Chọn đúng xương hoặc vertex group rồi chỉnh `Add`, `Subtract`, `Blur`, `Smear` hoặc `Average` để chuyển tiếp mượt.

Ví dụ: vai áo bị móp khi nâng cánh tay. Xác định liệu `upper_arm` nhận quá nhiều trọng số hay `spine/shoulder` nhận quá ít. Giảm vùng ảnh hưởng sai và làm mượt phần chuyển tiếp; nhìn lại animation. Khi chỉnh váy dài, các bone bàn tay thường **không nên** điều khiển mép váy dù đang ở gần nó trong bind pose.

### 3.3. Chuyển trọng số từ thân người

Một cách khác là dùng lưới cơ thể đã skin tốt làm nguồn. Bảo vệ `Body_Render` bằng cách nhân bản trước khi thao tác. Chọn nguồn và đích đúng theo công cụ (`Weights > Transfer Weights` hoặc `Data Transfer Modifier`), thiết lập cách ánh xạ phù hợp, sau đó kiểm tra các vertex group được tạo trên trang phục.

Phương pháp này đặc biệt hữu ích cho áo ôm, giày và phần cạp. Nhưng với váy xòe, phần dưới không tương ứng sát với bề mặt cơ thể nên trọng số chuyển sang có thể làm chân váy co méo. Khi cần, lược các vùng body không liên quan (tay, ngón) trên **bản sao nguồn** để tránh ảnh hưởng sai.

### 3.4. Clipping: sửa hình học hay ẩn da?

Nếu ngón chân xuyên giày hoặc đầu gối xuyên quần sau khi đã chỉnh trọng số, có ba hướng: chỉnh lại form trang phục; dùng `Shape Key` trên body để thu nhỏ khu vực da không lộ; hoặc tạo `Vertex Group` và `Mask Modifier` chỉ ẩn hình học body dưới trang phục.

Với `Mask`, cần kiểm tra nhóm đỉnh đang là vùng **giữ lại** hay **ẩn đi** theo trạng thái tùy chọn của modifier. Không ẩn tràn ra phần da phải nhìn thấy ở mép quần/áo. `Shape Key` giúp giữ lại geometry gốc nhưng phải xem nó có xung đột animation khác không. Đừng dùng mask để che mọi lỗi Weight Paint.

## 4. Thực hành

**Nhiệm vụ:** Bind một áo và một đôi giày. Tạo ít nhất bốn pose test gồm giơ tay, xoay thân, co gối và gập ngón chân. Sửa ít nhất hai vùng trọng số sai; thử Shape Key hoặc Mask trên một vùng da bị xuyên.

**Checkpoint:** Armature modifier trỏ đúng rig; không có vertex group của tay kéo mép váy; đã giữ bản sao body trước khi chỉnh sửa.

## 5. Câu hỏi ôn tập

**Câu 1.** Thứ tự chọn đúng để dùng Parent With Automatic Weights?

A. Chọn camera trước
B. Chọn armature trước rồi ánh sáng
C. Chọn trang phục trước, armature cuối
D. Chỉ cần chọn mesh

**Đáp án:** C. **Giải thích:** Armature là đối tượng active cuối cùng để làm parent.

**Câu 2.** Vai áo bị giật theo xương bàn tay: vấn đề cần kiểm tra đầu tiên?

A. Trọng số vertex của bone sai
B. Độ sáng HDRI
C. Độ phân giải camera
D. Noise texture

**Đáp án:** A. **Giải thích:** Weight Paint quyết định bone nào đang tác động tới vùng mesh.

**Câu 3.** Transfer Weights có thể hữu ích nhất trong tình huống nào?

A. Chỉnh màu nền
B. Đổi FPS
C. Xóa action cũ
D. Sao chép ảnh hưởng xương từ body đã skin tốt sang áo ôm

**Đáp án:** D. **Giải thích:** Trang phục gần cơ thể thường hưởng lợi từ trọng số được chuyển.

**Câu 4.** Vì sao không nên xóa thẳng da gốc để khỏi xuyên giày?

A. Vì không thể bind lại giày
B. Vì khó hoàn nguyên và ảnh hưởng các bộ trang phục khác
C. Vì ngăn render
D. Vì không chạy được Sculpt

**Đáp án:** B. **Giải thích:** Nên dùng bản sao hoặc giải pháp không phá hủy như Mask/Shape Key.

**Câu 5.** Khi chân váy dài bị kéo bởi bone đùi, nên làm gì?

A. Tăng độ bóng
B. Đổi camera
C. Chỉnh phân bố trọng số, có thể dùng xương váy riêng
D. Xóa timeline

**Đáp án:** C. **Giải thích:** Các vùng vải tự do thường cần rig chuyên biệt thay vì bám hoàn toàn vào chân.

## 6. Tổng kết

Automatic Weights tạo điểm bắt đầu; Weight Paint và kiểm tra nhiều tư thế mới quyết định chất lượng chuyển động. Hãy phân biệt lỗi hình học với lỗi phân bố trọng số.
