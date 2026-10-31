# Bài 06 — Thiết kế xương CTRL/MCH và hệ ràng buộc điều khiển váy

## 1. Tổng quan

Nếu animator phải chọn hàng chục DEF bones ở mọi khung hình, thời gian chỉnh váy sẽ rất lớn. Ta tách **bone điều khiển** ra khỏi **bone biến dạng** và dùng lớp cơ chế trung gian để điều khiển vòng váy, dịch chuyển, xoay hông và độ mở của chân váy.

## 2. Mục tiêu học tập

- Phân biệt bone điều khiển, cơ chế và biến dạng.
- Thiết lập parent và ràng buộc Copy Location/Rotation/Scale.
- Ứng dụng Damped Track để kiểm soát hướng váy mà không bắt buộc copy toàn bộ xoay.

## 3. Nội dung bài học

### 3.1. Tách ba vai trò bone

- `DEF_...`: bone nhận trọng số từ mesh.
- `CTRL_...` hoặc tên điều khiển dễ đọc như `Skirt_01`: bone mà animator cầm để pose.
- `MCH_...`: bone trung gian tính quan hệ và giữ constraint, thường ẩn khỏi giao diện làm animation.

Tạo các control dọc theo những hàng DEF đã dựng. Trong `Edit Mode`, dùng con trỏ 3D/snap để đặt điểm đầu rồi extrude theo chiều dọc bằng `E`, hạn chế trục bằng `Z` và snap về đầu bone mong muốn. Có thể `Alt + P > Disconnect` để chuỗi control dịch độc lập tại từng vòng, nhưng vẫn duy trì parent logic nếu cần. Đặt tên theo thứ tự `Skirt_01` đến `Skirt_05` để dễ thao tác.

### 3.2. Parent DEF với control mà vẫn giữ form

Thay vì làm control trực tiếp tăng chiều dài DEF khi scale, có thể tạo một bản sao chuỗi DEF làm `MCH` và thêm constraint Copy Scale đến root hoặc bone tham chiếu phù hợp. Khi thay đổi scale của control, cả vòng váy được đẩy ra nhưng từng DEF bone không phình vô ý.

Đây là một **thiết kế rig**, không phải nút có sẵn thực hiện mọi thứ. Test riêng theo từng trục và spaces (`Local`/`World`) để kiểm tra có double transform hoặc scale lạ hay không. Việc dùng `Ctrl + F2` để đổi hàng loạt tiền tố DEF → MCH là cách tổ chức nhanh, nhưng phải bảo đảm vertex groups cuối cùng vẫn ánh xạ tới đúng DEF bones.

### 3.3. Socket ở hông và bone trung gian

Tạo `MCH_Skirt_SOCKET` parent trực tiếp với `hips`. Nhân bản bone socket để tạo `MCH_Skirt_Intermediate`, rồi parent chuỗi control váy vào bone trung gian này. Trên MCH trung gian, dùng `Copy Location` theo socket/hông và `Copy Rotation` với influence có thể điều chỉnh.

Lợi ích: váy luôn đi theo vị trí cơ thể, nhưng không nhất thiết sao chép 100% mọi chuyển động lắc của hông. Khi nhân vật xoay trái–phải, giảm influence của xoay cần thiết có thể giữ váy đứng tự nhiên hơn. Đừng quên kiểm tra không xuất hiện độ trễ hoặc dịch chuyển khi blend ảnh hưởng giữa các constraint.

### 3.4. Điều khiển hướng với Damped Track

Một phương án nâng cao là dùng bone điều khiển chính độc lập cho chuyển động vị trí/hướng, cho bone trung gian `Copy Location` rồi dùng `Damped Track` hướng về đầu hoặc đuôi của control chính. Cách này giúp xương quan sát mục tiêu và giảm phụ thuộc vào toàn bộ Euler rotation của control. `Damped Track` không tự giải quyết **twist quanh trục dọc bone**; khi cần, bổ sung điều khiển twist riêng.

Kiểm tra hai động tác khó: hông xoay ngang và người vặn thân. Rig đúng phải cho phép animator điều chỉnh váy mà không khiến các vòng DEF bị xoắn hàng loạt. Lưu trước khi thay đổi parenting hoặc constraints vì thứ tự trong stack có thể làm kết quả khác nhau.

## 4. Thực hành

**Nhiệm vụ:** Tạo ba lớp DEF/MCH/CTRL cho một dải váy, thiết lập socket dưới hip. Dựng hai chế độ thử nghiệm: `Copy Rotation` influence thấp/cao và bone hướng mục tiêu bằng `Damped Track`.

**Checkpoint:** Di chuyển hip thì chân váy đi theo; xoay control mở váy theo dự định; scale control không làm xương DEF kéo giãn bất thường; các bone MCH không cản trở giao diện animating.

## 5. Câu hỏi ôn tập

**Câu 1.** Xương nào trực tiếp được gán Weight Paint trên váy?

A. CTRL
B. DEF
C. MCH
D. Camera

**Đáp án:** B. **Giải thích:** DEF là lớp bone biến dạng lưới.

**Câu 2.** Mục đích của MCH socket ở hip là gì?

A. Tạo material
B. Giảm polygon
C. Tạo điểm trung gian để điều khiển quan hệ váy và hông
D. Bake audio

**Đáp án:** C. **Giải thích:** Socket giữ logic theo hông nhưng cho phép tách một phần xoay.

**Câu 3.** Thay influence của Copy Rotation giúp gì?

A. Điều chỉnh mức độ váy theo xoay hông
B. Đổi số vertex
C. Đổi ánh sáng
D. Đổi kích thước texture

**Đáp án:** A. **Giải thích:** Ảnh hưởng thấp giúp váy không nhất thiết đi theo toàn bộ rotation của hip.

**Câu 4.** Damped Track không xử lý đầy đủ điều gì?

A. Dịch chuyển
B. Chọn material
C. Tạo Mesh
D. Twist quanh trục dọc hướng theo

**Đáp án:** D. **Giải thích:** Constraint định hướng đến mục tiêu không quyết định mọi độ xoắn quanh hướng đó.

**Câu 5.** Hiện tượng bone kéo dài bất thường khi scale có thể liên quan gì?

A. Nhạc nền
B. Scale truyền qua parent/constraint chưa được tách
C. Thiếu camera
D. Độ phân giải UV

**Đáp án:** B. **Giải thích:** Quan hệ scale cần test riêng để tránh double transform.

## 6. Tổng kết

Một rig váy dễ dùng có số control ít, lớp cơ chế rõ và constraint có mục đích. Tách dịch chuyển hông, xoay hông và hướng váy giúp animator chỉnh động tác phức tạp dễ hơn.
