# Bài 04 — Rig khớp hông và chuẩn đặt tên đối xứng

## 1. Tóm tắt bài học

Khớp hông tạo chuyển động xoay giúp chân robot thay đổi phương khi bước đi. Một xương đặt sai tâm hoặc cho phép xoay quá nhiều trục dễ làm cấu trúc máy móc mất tự nhiên. Bài này tạo xương hông bên phải, khóa đúng trục và chuẩn bị tên bone để có thể đối xứng sang bên trái.

## 2. Mục tiêu học tập

- Xác định tâm khớp hông từ các cạnh/đỉnh mesh.
- Tạo xương `Hip Rotation.R` và đặt đúng hướng.
- Giới hạn chỉ `Rotation Z` cho khớp hông trong cấu hình đang học.
- Gắn các mesh khớp hông vào một bone.
- Parent bone hông dưới `Body` bằng `Keep Offset`.
- Giải thích vai trò hậu tố `.R` và `.L`.

## 3. Phân tích chuyển động khớp hông

Trong thiết kế này, khớp hông bên phải cần xoay qua lại quanh trục **Z**. Xương điều khiển chỉ cần làm rõ vị trí và một bậc tự do xoay; nó không cần kéo dài theo toàn bộ chân. Những mesh thuộc cùng cụm khớp có thể được parent vào cùng bone hông.

Tên `Hip Rotation.R` có hai thành phần: chức năng điều khiển (`Hip Rotation`) và ký hiệu bên phải (`.R`). Hậu tố này sẽ được dùng khi `Symmetrize` để tạo `Hip Rotation.L` ở phía đối diện.

## 4. Đặt tâm và hướng xương

1. Chọn armature, vào `Edit Mode`, thêm bone mới bằng `Shift + A`.
2. Nếu cụm mesh thân che khớp hông, tạm chọn chúng trong `Object Mode` rồi nhấn `H` để ẩn.
3. Chọn mesh khớp hông cần xoay và vào `Edit Mode` của mesh.
4. Chọn hai cạnh đối xứng hoặc một vùng đỉnh biểu diễn vòng khớp, dùng `Shift + S → Cursor to Selected`.
5. Quay về armature `Edit Mode`, chọn `Head` của bone mới và dùng `Shift + S → Selection to Cursor`.
6. Điều chỉnh `Tail` để bone nằm dọc trục điều khiển của khớp; có thể dùng các phép di chuyển theo trục để giữ bone thẳng.
7. Nhấn `F2` và đặt tên chính xác `Hip Rotation.R`.

Việc ẩn mesh chỉ giúp thao tác; sau khi đặt xương xong, dùng `Alt + H` trong ngữ cảnh Object Mode để hiện các đối tượng lại.

## 5. Cấu hình giới hạn chuyển động

Trong `Pose Mode`:

1. Chọn `Hip Rotation.R`.
2. Mở `N → Item`.
3. Khóa các kênh `Location` và `Scale`.
4. Khóa các trục rotation không cần thiết, giữ `Z` tự do.
5. Nhấn `R` để thử xoay, xác nhận cụm hông chỉ xoay theo hướng mong muốn.
6. Nhấn `Alt + R` để trả pose về ban đầu.

Tại bài này, trục X dành cho những khớp gập chân, còn Z dành cho chuyển động xoay hông. Cần giữ nhất quán với hướng xương đã dựng.

## 6. Parent mesh và bone

**Gắn mesh cứng vào bone:** trở về `Object Mode`, chọn các mesh thuộc cùng cụm khớp hông, chọn armature sau cùng. Vào `Pose Mode`, chọn `Hip Rotation.R` rồi dùng `Ctrl + P → Bone`. Xoay thử khớp để chắc chắn toàn bộ các phần đi theo.

**Gắn bone hông vào thân:** trong armature `Edit Mode`, chọn `Hip Rotation.R` trước, `Shift` chọn `Body` sau, nhấn `Ctrl + P → Keep Offset`. Nhờ đó, khi thân di chuyển, khớp hông cũng đi theo mà không bị dời khỏi vị trí đã căn.

Cấu trúc sau bước này:

```text
Master Control
└── Body
    └── Hip Rotation.R
```

## 7. Kiểm tra và thực hành

**Checkpoint:** xoay `Hip Rotation.R` làm các mesh khớp hông xoay đúng tâm; xoay `Body` kéo toàn bộ nhánh hông theo; `Hip Rotation.R` được đặt tên có hậu tố `.R` chính xác.

**Lỗi thường gặp:** dùng `Connected` khiến bone hông nhảy khỏi khớp; quên bỏ ẩn mesh; gõ `.r` chữ thường không nhất quán; gắn một chi tiết hông vào nhầm xương `Body`.

**Thực hành:** cho hông xoay sang hai phía, reset pose, rồi xem sơ đồ hệ phân cấp để phân biệt bone điều khiển thân và bone xoay hông.

## 8. Câu hỏi ôn tập trắc nghiệm

**Câu 1.** Với cấu hình robot trong bài, khớp Hip Rotation.R được để tự do xoay quanh trục nào?

A. X  
B. Z  
C. Y  
D. Mọi trục  

**Đáp án: B.** Trong cấu hình này, bone hông dùng rotation Z để xoay qua lại.

**Câu 2.** Điểm quan trọng nhất khi đặt Head cho Hip Rotation.R là gì?

A. Đặt ở giữa camera  
B. Đặt bên ngoài robot bất kỳ  
C. Đặt tại gốc thế giới  
D. Đặt tại tâm khớp hông  

**Đáp án: D.** Head cần trùng tâm khớp để xoay đúng cơ chế.

**Câu 3.** Tên nào phù hợp để có thể Symmetrize xương bên phải?

A. Hip Rotation.R  
B. Hip Rotation_Right_side_01  
C. Hip Rotation.back  
D. Hip Rotation.001  

**Đáp án: A.** Blender sử dụng hậu tố hai bên như .R và .L để nhận diện khi đối xứng xương.

**Câu 4.** Khi bone hông bị kéo sang cuối xương Body sau parenting, nguyên nhân có thể là gì?

A. Đã bật Rendered View  
B. Đổi tên mesh  
C. Đã chọn Connected thay vì Keep Offset  
D. Tắt material preview  

**Đáp án: C.** Connected làm đầu xương con kết nối với đầu cuối bone cha, không phù hợp với vị trí hông đã dựng.

**Câu 5.** Để khớp hông đi theo chuyển động thân, quan hệ phù hợp là gì?

A. Body là con của Hip Rotation.R  
B. Hip Rotation.R là con của Body  
C. Hai xương không liên kết  
D. Hip Rotation.R là cha của Master Control  

**Đáp án: B.** Xương hông phải nhận transform từ Body nhưng vẫn có quyền xoay riêng.

## 9. Tổng kết

Bài học đã hoàn thành các nội dung: Tạo xương Hip Rotation.R, khóa trục Z, parent mesh khớp và gắn vào Body. Hãy bảo đảm các checkpoint đều đạt trước khi tiếp tục thao tác trên rig, và lưu dự án Blender ở trạng thái mong muốn.
