# Bài 03 — Bộ điều khiển chính và hệ phân cấp xương

## 1. Tóm tắt bài học

Robot có nhiều khớp riêng nhưng vẫn cần một bộ điều khiển chung để dịch chuyển hoặc xoay toàn bộ cơ thể. Xương này gọi là `Master Control`. Muốn nó thực sự điều khiển các phần còn lại, phải tổ chức quan hệ cha–con (`bone parenting`) đúng cách.

## 2. Mục tiêu học tập

- Tạo xương `Master Control` độc lập với xương thân.
- Phân biệt `Connected` và `Keep Offset` khi parent xương.
- Đổi tên bone để thuận tiện chọn và sửa rig.
- Kiểm tra chuyển động truyền từ bone cha xuống bone con.
- Reset `Location`, `Rotation`, `Scale` trong `Pose Mode`.

## 3. Bone parenting hoạt động như thế nào?

Nếu bone B là **con** của bone A, chuyển động của A ảnh hưởng đến B; tuy nhiên B vẫn có thể được xoay riêng. Quan hệ này giúp tạo nhiều cấp độ điều khiển: cả robot, thân, từng chân, từng khớp.

Ví dụ ban đầu:

```text
Master Control
└── Body
```

Có hai cách parent thường gặp:

- **Connected**: liên kết vị trí đầu bone con với đuôi bone cha; thường dùng khi muốn một chuỗi xương nối tiếp nhau.
- **Keep Offset**: bone con nhận chuyển động của bone cha nhưng giữ vị trí tách rời như đã dựng.

Ở vị trí `Master Control` nằm dưới robot, chọn **Keep Offset** để không kéo xương thân rời khỏi tâm khớp.

## 4. Tạo Master Control

1. Chọn armature và vào `Edit Mode`.
2. Nhấn `Shift + C` nếu cần đưa con trỏ về gốc tọa độ.
3. Nhấn `Shift + A` để thêm bone trong armature.
4. Dùng `G`, kết hợp phím trục phù hợp như `Z`, để đưa bone mới xuống vị trí dễ nhìn dưới/giữa robot.
5. Dùng `Numpad 3` và `R` để hướng xương nằm ngang; dùng `S` hoặc điều chỉnh đầu/đuôi xương để nó đủ lớn làm tay nắm điều khiển.
6. Chọn bone và nhấn `F2`, đổi tên thành `Master Control`.
7. Chọn bone thân và nhấn `F2`, đổi tên thành `Body`.

Vị trí tay nắm không cần khớp một trục cơ khí cụ thể vì nhiệm vụ chính của nó là điều khiển toàn robot. Tuy vậy, tay nắm phải dễ nhận biết, dễ chọn trong viewport.

## 5. Tạo quan hệ Body → Master Control

Trong `Edit Mode`:

1. Chọn bone con `Body` trước.
2. Giữ `Shift`, chọn bone cha `Master Control` sau cùng.
3. Nhấn `Ctrl + P`.
4. Chọn `Keep Offset`.
5. Vào `Pose Mode` rồi chọn `Master Control`.
6. Nhấn `G`, `R`, `S` để thử: thân robot phải dịch chuyển và xoay cùng bộ điều khiển chính.

Nếu chọn `Connected` và thấy đầu xương thân bị kéo sang tay nắm, dùng `Ctrl + Z` để hoàn tác rồi parent lại bằng `Keep Offset`.

## 6. Khôi phục tư thế và lưu file

Sau khi kiểm thử, ở `Pose Mode` chọn những bone đã bị thay đổi và thực hiện:

- `Alt + R`: xóa rotation của pose.
- `Alt + G`: xóa location của pose.
- `Alt + S`: xóa scale của pose.

Chọn tất cả xương bằng `A` nếu muốn đưa **toàn bộ pose** trở về trạng thái nghỉ. Sau đó lưu bằng `Ctrl + S`.

Lưu ý rằng những phím tắt này không thay thế `Apply Transforms` của các mesh; chúng phục vụ mục đích khác trong quá trình rig và animation.

## 7. Thực hành và kiểm tra kết quả

Thử lần lượt hai phép kiểm tra:

1. Xoay `Body`: chỉ nhóm thân và những mesh đã gắn vào nó phải xoay; `Master Control` không bị điều khiển ngược lại.
2. Dịch chuyển `Master Control`: cả xương thân và mesh thân phải đi theo.

**Checkpoint:** quan hệ cha–con hoạt động một chiều, bone vẫn ở đúng vị trí rest pose, và không có xương bị ép nối sai tâm.

**Thực hành:** thêm một bone thử nghiệm độc lập, parent dưới `Master Control` bằng `Keep Offset`, so sánh với kết quả khi dùng `Connected`, sau đó hoàn tác để quay lại rig đúng.

## 8. Câu hỏi ôn tập trắc nghiệm

**Câu 1.** Lợi ích chính của Master Control là gì?

A. Di chuyển toàn bộ các bone nằm trong hệ phân cấp  
B. Thay thế hoàn toàn mọi bone khớp  
C. Tự động tô màu tất cả mesh  
D. Tăng số mặt polygon  

**Đáp án: A.** Master Control tạo cấp điều khiển cao nhất khi các bone được parent đúng.

**Câu 2.** Vì sao chọn Keep Offset khi parent Body với Master Control?

A. Để bật IK  
B. Để thêm texture  
C. Để giữ nguyên vị trí tương đối của bone con  
D. Để xóa bone cha  

**Đáp án: C.** Keep Offset giữ vị trí đã dựng của bone con nhưng vẫn kế thừa transform từ cha.

**Câu 3.** Khi tạo quan hệ cha–con giữa hai bone trong Edit Mode, thứ tự chọn là gì?

A. Cha trước, con sau  
B. Chọn camera trước  
C. Chọn cả hai rồi Alt + H  
D. Con trước, cha được chọn sau cùng  

**Đáp án: D.** Bone active chọn sau cùng sẽ làm cha khi dùng Ctrl + P theo quy trình này.

**Câu 4.** Xoay Body không làm Master Control đổi pose. Điều này cho thấy gì?

A. Parent đã thất bại  
B. Quan hệ cha–con hoạt động theo chiều đã dự định  
C. Body không nằm trong armature  
D. Mesh đã bị xóa  

**Đáp án: B.** Bone con có thể xoay độc lập mà không điều khiển ngược bone cha.

**Câu 5.** Phím nào dùng để xóa Location trong Pose Mode?

A. Alt + G  
B. Alt + R  
C. Ctrl + P  
D. Shift + A  

**Đáp án: A.** Alt + G trả lại giá trị dịch chuyển của pose về mặc định.

## 9. Tổng kết

Bài học đã hoàn thành các nội dung: Tạo Master Control, đặt tên, parenting Keep Offset, đưa robot về tư thế nghỉ. Hãy bảo đảm các checkpoint đều đạt trước khi tiếp tục thao tác trên rig, và lưu dự án Blender ở trạng thái mong muốn.
