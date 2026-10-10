# Bài 08 — Đối xứng chân trái và hoàn thiện parenting

## 1. Tóm tắt bài học

Sau khi rig hoàn chỉnh chân phải, không cần dựng lại từng bone ở chân trái. Blender hỗ trợ `Symmetrize` để tạo nhánh đối diện từ các bone đặt tên `.R`. Bài này nhân bản hệ xương sang `.L`, gắn mesh trái, kiểm tra các controller và gắn những chi tiết hông còn chưa có bone cha.

## 2. Mục tiêu học tập

- Phân biệt chọn một nhánh xương với chọn toàn bộ armature.
- Dùng `Armature → Symmetrize` đúng đối tượng.
- Kiểm tra quy tắc đổi tên `.R` thành `.L`.
- Parent lần lượt mesh hông, đùi, cẳng chân, mắt cá và bàn chân bên trái.
- Tổ chức bộ điều khiển dễ chọn cho cả hai chân.
- Phát hiện và sửa các mesh còn đứng yên khi di chuyển robot.

## 3. Điều kiện trước khi đối xứng

`Symmetrize` chỉ thuận lợi khi các xương bên phải đã được dựng ở vị trí đối xứng dự kiến và có hậu tố tên rõ ràng. Kiểm tra các bone cần nhân bản:

| Bên phải | Bên trái cần tạo |
| --- | --- |
| `Hip Rotation.R` | `Hip Rotation.L` |
| `Upper Leg.R` | `Upper Leg.L` |
| `Lower Leg.R` | `Lower Leg.L` |
| `Ankle.R` | `Ankle.L` |
| `Foot.R` | `Foot.L` |
| `Foot IK.R` | `Foot IK.L` |

Các bone trung tâm như `Master Control`, `Body` không được đưa vào vùng chọn nhân đôi. Quy tắc đối xứng được xác định theo hệ tọa độ của armature, vì vậy cần bảo đảm hai chân thực sự nằm ở hai phía đối diện của model.

## 4. Nhân bản nhánh xương

1. Chọn armature và vào `Edit Mode`.
2. Bỏ chọn những bone hiện tại, sau đó nhấn `B` để chọn theo khung.
3. Chỉ chọn **các bone chân phải**, tránh cả các bone ở trục giữa.
4. Kiểm tra hậu tố `.R` trên những bone đã chọn.
5. Mở menu `Armature → Symmetrize`.
6. Kiểm tra nhánh mới đã xuất hiện ở phía đối diện và tên bone có `.L`.
7. Quan sát cả `Foot IK.L` và các quan hệ bone cha–con, không chỉ các bone đùi/cẳng chân.

Sau khi đối xứng, bộ xương chân trái và cấu hình của các bone tương ứng cần được kiểm tra bằng chuyển động thật, không chỉ dựa vào việc chúng trông đối xứng.

## 5. Gắn mesh vào nhánh chân trái

Quy trình cho mỗi mesh là cố định: **chọn mesh → Shift chọn armature → vào Pose Mode → chọn bone đúng → Ctrl + P → Bone**.

Thực hiện theo bảng:

| Mesh được điều khiển | Bone parent |
| --- | --- |
| Cụm khớp hông trái chuyển động cùng hông | `Hip Rotation.L` |
| Đùi trên trái | `Upper Leg.L` |
| Cẳng chân trái | `Lower Leg.L` |
| Mắt cá chân trái | `Ankle.L` |
| Bàn chân trái | `Foot.L` |

Nếu khó chọn bone vì mesh che khuất, chuyển `Z → Wireframe`, chọn đúng bone rồi quay lại `Solid`. Có thể bật lại các bone đã ẩn bằng `Alt + H` trong `Pose Mode` trước khi tiến hành parenting.

## 6. Kiểm tra và làm gọn hai nhánh chân

1. Trong `Pose Mode`, chọn `Foot IK.L` và dùng `G` nâng thử chân trái.
2. Dùng `R` để xác nhận bộ điều khiển cũng có thể làm thay đổi góc mắt cá theo cấu hình đã nhân bản.
3. Xoay `Hip Rotation.L` để xác nhận controller IK và nhánh chân đi theo.
4. Lặp lại kiểm tra với chân phải.
5. Chọn `Master Control` và di chuyển toàn bộ robot để tìm mesh nào đứng yên.
6. Nhấn `H` để ẩn bone phụ không cần chọn khi tạo dáng; chỉ ẩn sau khi đã kiểm tra chúng.

### Xử lý hai chi tiết khớp hông còn sót

Ở giai đoạn này có thể còn hai **mesh khớp hông riêng** không được parent vào bone nào. Nếu các chi tiết đó cần di chuyển cùng toàn robot mà không theo góc xoay của từng chân, hãy chọn cả hai mesh, chọn armature, vào `Pose Mode`, chọn `Master Control` và `Ctrl + P → Bone`.

Cần phân biệt nhóm **mesh khớp hông quay cùng từng chân** (gắn vào `Hip Rotation.R`/`.L`) với nhóm **chi tiết cơ sở không quay theo từng hông** (gắn vào `Master Control` trong tình huống này).

## 7. Thực hành và tiêu chí hoàn thành

**Checkpoint:** hai chân đều có bone điều khiển IK, các mesh được gắn đúng bên, xoay từng hông không làm chân đối diện quay sai, và `Master Control` di chuyển mọi bộ phận robot cần đi theo.

**Bài thực hành:** tạo tư thế một chân nâng, một chân chống đỡ; đổi lại chân; kiểm tra cả hai góc bên và chính diện. Sau đó chọn toàn bộ bone pose và khôi phục bằng `Alt + R`, `Alt + G`, `Alt + S`.

**Lỗi thường gặp:** chọn cả `Body` khi symmetrize; đặt sai hậu tố `.R`; quên gắn mesh bên trái; bone `Foot IK.L` có mặt nhưng chưa được kiểm thử; chi tiết khớp hông đứng yên khi `Master Control` di chuyển.

## 8. Câu hỏi ôn tập trắc nghiệm

**Câu 1.** Khi Symmetrize, nên chọn tập bone nào?

A. Chỉ bone nhánh bên phải với hậu tố .R  
B. Toàn bộ cả robot và camera  
C. Chỉ Master Control  
D. Chỉ các mesh bên trái  

**Đáp án: A.** Chọn nhánh .R giúp nhân bản đúng bên mà không tạo trùng các bone giữa.

**Câu 2.** Sau Symmetrize, bone đối diện của Upper Leg.R được đặt tên gì?

A. Upper Leg.R.001  
B. Upper Leg.Leftside  
C. Upper Leg.L  
D. Upper Leg.Center  

**Đáp án: C.** Quy ước tên hai bên dùng hậu tố .R và .L.

**Câu 3.** Mesh mắt cá chân trái nên gắn với bone nào?

A. Foot IK.R  
B. Ankle.L  
C. Head  
D. Body  

**Đáp án: B.** Mesh mắt cá chân trái chuyển động cùng bone Ankle.L.

**Câu 4.** Khi di chuyển Master Control vẫn có hai chi tiết khớp hông đứng yên, nên làm gì?

A. Xóa cả hai mesh  
B. Xóa armature  
C. Tăng Chain Length  
D. Xác định vai trò và parent các mesh còn thiếu vào bone phù hợp  

**Đáp án: D.** Các mesh chưa có parent không tự đi theo rig; cần chọn bone đúng theo chức năng chuyển động.

**Câu 5.** Mục đích của việc bật Alt + H trong Pose Mode trước khi parent mesh là gì?

A. Hiển thị lại những bone đã ẩn để chọn đúng  
B. Tạo bone mới  
C. Áp dụng scale  
D. Xóa các bone trung tâm  

**Đáp án: A.** Hiện lại bone giúp chọn những xương như Ankle.L bị ẩn trong giai đoạn làm gọn rig.

## 9. Tổng kết

Bài học đã hoàn thành các nội dung: Symmetrize bone .R sang .L, gắn mesh bên trái, ẩn bone phụ và nối các chi tiết khớp còn sót. Hãy bảo đảm các checkpoint đều đạt trước khi tiếp tục thao tác trên rig, và lưu dự án Blender ở trạng thái mong muốn.
