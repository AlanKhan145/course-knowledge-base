# Bài 02 — Chuẩn bị nhân vật, Mixamo và đoạn animation ổn định ban đầu

## 1. Tổng quan

Mesh vải phải được đặt lên nhân vật ở tư thế rõ ràng trước khi mô phỏng. Nhân vật nhập từ Mixamo thường đi kèm keyframe ngay từ khung đầu; vì thế phải chừa một giai đoạn **rest pose / T-pose** để trang phục ổn định trước khi bước vào động tác mạnh.

## 2. Mục tiêu học tập

- Nhập chuyển động Mixamo dạng FBX và xác nhận frame rate.
- Thiết lập rest pose, các keyframe trung gian và vòng lặp chuyển động.
- Kiểm tra tỷ lệ và biến đổi trước khi dùng Cloth.

## 3. Nội dung bài học

### 3.1. Nhập nhân vật có chuyển động

Chuẩn bị một nhân vật đã rig hoặc tải chuyển động cho nhân vật từ Mixamo. Chọn animation như walk/run/backflip, tải định dạng `FBX`, rồi trong Blender vào `File > Import > FBX`. Ví dụ bài thực hành có thể dùng 24 FPS, nhưng phải bảo đảm thiết lập fps ở Blender khớp dữ liệu nhập; 24 FPS không phải yêu cầu bắt buộc cho mọi dự án.

Nếu nhân vật nhỏ bất thường, kiểm tra đơn vị và scale từ FBX. Sau khi thống nhất kích thước và xác nhận rig/mesh còn gắn đúng, cân nhắc `Ctrl + A > Scale` trên đối tượng thích hợp. Không áp dụng biến đổi tùy tiện lên riêng armature đang có animation: thao tác thiếu nhất quán có thể làm lệch khung xương và quần áo.

### 3.2. Tạo pha T-pose để vải ổn định

Trong `Pose Mode`, dùng `A` chọn các xương điều khiển của rig; tại khung đầu, nếu rig cho phép, sử dụng `Alt + G` xóa dịch chuyển, `Alt + R` xóa xoay và `Alt + S` xóa scale của pose. Kiểm tra kết quả có thực sự là rest pose phù hợp hay không, bởi một số rig nhập từ ngoài dùng cách đặt tư thế khác.

Một lịch hoạt hình minh họa từ nội dung thực hành:

| Khung hình | Trạng thái |
| --- | --- |
| 1 | T-pose / rest pose, chèn khóa cho các bone liên quan |
| 15 | Giữ cùng tư thế để mô phỏng có thời gian ổn định |
| 35 | Chuyển mượt sang tư thế đầu của clip chạy/múa |
| 35 trở đi | Phát animation chính, có thể lặp nhiều chu kỳ |

Các mốc **1–15–35** là một ví dụ tổ chức timeline, không phải tiêu chuẩn cố định. Ở Blender, phím `I` chèn keyframe theo Keying Set/phương thức phiên bản hiện tại; phải kiểm tra các kênh Location/Rotation/Scale cần thiết đã có khóa.

### 3.3. Nối và lặp lại clip

Trong `Dope Sheet > Action Editor` hoặc vùng Timeline, chọn keyframe của chu kỳ và dùng `Shift + D` để nhân đôi. Đặt chu kỳ sau sát chu kỳ trước, tránh lặp chồng hai pose đầu–cuối sai lệch. Ví dụ clip 30 frame cần kiểm tra pose đầu và cuối có đồng nhất hay không trước khi sao chép liên tiếp. Nên phát playback và kiểm tra bàn chân bị trượt, dáng cơ thể giật, tay xuyên váy.

Nếu ghép các `Action` khác nhau, hãy có đoạn blend rõ ràng thay vì dán hai tư thế xa nhau vào cùng frame. Khi mục tiêu là Cloth, thay đổi quá đột ngột có thể tạo vận tốc không mong muốn khiến vải bùng hoặc rung.

### 3.4. Kiểm tra scene trước khi tiếp tục

Bật Wireframe/X-Ray để nhìn xem phần thân có đang xuyên qua mặt vải ngay ở khung đầu. Vải phải cách cơ thể một khoảng nhỏ và không có sự tự cắt của mesh. Chạy thử animation chỉ với cơ thể để giải quyết tư thế tay xuyên thân, đùi xuyên nhau hoặc rig bị xoắn; Cloth không thể sửa một hoạt ảnh nguồn sai hình học.

## 4. Thực hành

**Nhiệm vụ:** Nhập một hành động bước đi hoặc nhào lộn từ Mixamo, tạo đoạn giữ tư thế 1–15 và blend đến frame 35; lặp phần chuyển động để có đủ thời gian quan sát vải.

**Checkpoint:** Chọn các frame 1/15/35 thấy tư thế đúng; fps được kiểm tra; không có cú nhảy pose bất ngờ; đã lưu file trước khi thêm Physics.

## 5. Câu hỏi ôn tập

**Câu 1.** Vì sao tạo đoạn giữ T-pose đầu timeline?

A. Để giảm polygon
B. Để solver ổn định vải trước chuyển động chính
C. Để đổi vật liệu
D. Để chuyển sang Eevee

**Đáp án:** B. **Giải thích:** Một khoảng tĩnh giúp vải rơi và ổn định trước động tác nhanh.

**Câu 2.** Khi nhập FBX có animation, yếu tố thời gian nào cần đối chiếu?

A. FPS của clip và scene
B. Chỉ độ phân giải render
C. Tên material
D. Số camera

**Đáp án:** A. **Giải thích:** Khác fps có thể làm thời lượng hành động khác mong muốn.

**Câu 3.** Phím tắt thường dùng nhân đôi keyframe được chọn là gì?

A. Alt + G
B. Ctrl + J
C. G hai lần
D. Shift + D

**Đáp án:** D. **Giải thích:** Shift + D nhân đôi keyframe trong editor phù hợp.

**Câu 4.** Lỗi nào nên xử lý trước khi thêm Cloth?

A. Màu nền quá tối
B. Thiếu camera phụ
C. Bàn tay xuyên qua thân và trang phục
D. Thiếu HDRI

**Đáp án:** C. **Giải thích:** Giao nhau từ animation đầu vào sẽ gây va chạm sai.

**Câu 5.** Mốc 1–15–35 nên được hiểu như thế nào?

A. Ví dụ cấu trúc đoạn nghỉ và blend
B. Một chuẩn bắt buộc của Blender
C. FPS cố định
D. Số xương tối thiểu

**Đáp án:** A. **Giải thích:** Mốc frame minh họa, có thể đổi theo tốc độ clip và loại vải.

## 6. Tổng kết

Hãy ổn định pose, timeline và tỷ lệ trước khi mô phỏng. Một chuỗi animation sạch là điều kiện đầu tiên để sửa Cloth hiệu quả.
