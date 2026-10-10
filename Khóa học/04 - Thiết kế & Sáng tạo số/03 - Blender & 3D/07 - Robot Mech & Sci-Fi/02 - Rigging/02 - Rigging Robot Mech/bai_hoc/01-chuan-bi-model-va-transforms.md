# Bài 01 — Chuẩn bị model và chuẩn hóa Transform

## 1. Tóm tắt bài học

Trước khi tạo bộ xương cho robot mech, cần xác định một **tư thế nghỉ (rest pose)** nhất quán và chuẩn hóa các bộ phận đang tách thành nhiều đối tượng. Đối với robot dạng cơ khí, mỗi khối cứng có thể được gắn trực tiếp vào xương tương ứng; vì vậy sai sót trong vị trí, hướng hoặc tỷ lệ của các bộ phận sẽ gây khó khăn khi xoay khớp.

Trong bài này, ta làm sạch khung nhìn, chuẩn hóa transform và kiểm tra tác động phụ lên vật liệu cũng như các cạnh vát.

## 2. Mục tiêu học tập

Sau khi hoàn thành, người học có thể:

- Xác định tư thế nghỉ của model trước khi rigging.
- Sử dụng `Ctrl + A → All Transforms` đúng ngữ cảnh.
- Phân biệt transform của đối tượng với hình học bên trong mesh.
- Nhận diện và xử lý thay đổi về `Noise Texture` hoặc `Bevel` sau khi áp dụng transform.
- Khôi phục giá trị transform khi thử nghiệm tạo dáng.

## 3. Bối cảnh: vì sao phải chuẩn hóa trước khi rig?

Một robot mech thường gồm thân, khớp hông, đùi, cẳng chân, mắt cá, bàn chân, cổ và đầu. Những thành phần này là các đối tượng riêng để có thể xoay tương đối với nhau. Nếu một mesh vẫn lưu giá trị scale rất lớn hoặc rotation từ quá trình dựng hình, việc parenting hoặc chỉnh trục quay có thể khó dự đoán hơn.

`Apply Transforms` đưa các phép biến đổi đã áp dụng vào dữ liệu đối tượng và xác lập lại các giá trị điều khiển tương ứng. Mục tiêu của bước này không phải đưa robot về gốc tọa độ hay đổi hình dáng thiết kế, mà là giữ nguyên hình dạng nhìn thấy trong khi chuẩn bị trạng thái cơ sở ổn định cho rig.

## 4. Quy trình chuẩn bị

### 4.1. Làm sạch khung nhìn

1. Mở file Blender chứa các bộ phận robot đã được dựng hình.
2. Nhấn `Z` và chọn `Solid` để kiểm tra hình học mà không bị vật liệu làm phân tán chú ý.
3. Trong `Outliner`, tạm ẩn những đối tượng không cần để rig như đèn và camera. Có thể thu gọn các collection để dễ tìm các mesh.
4. Quan sát toàn bộ robot và xác nhận đây là tư thế mặc định muốn khôi phục sau mỗi lần thử chuyển động.

### 4.2. Áp dụng transform của các bộ phận

1. Trong `Object Mode`, chọn các mesh thuộc robot. Tránh vô tình chọn camera hoặc đèn.
2. Nhấn `Ctrl + A` để mở menu `Apply`.
3. Chọn `All Transforms`.
4. Chọn thử từng mesh và kiểm tra `Location`, `Rotation`, `Scale` trong bảng `N → Item`.
5. Lưu một bản `.blend` trước khi chuyển sang tạo xương bằng `Ctrl + S`.

**Lưu ý:** thao tác này thực hiện trước khi gắn ràng buộc/parent vào rig. Không lặp lại một cách tùy tiện trên robot đã rig xong.

### 4.3. Kiểm tra bề ngoài trong Rendered View

Chuyển `Z → Rendered` để xem liệu vật liệu của các bộ phận có thay đổi. Với `Noise Texture`, việc áp dụng scale có thể làm tỷ lệ hạt nhiễu khác đi, nhất là khi object đã từng được phóng rất lớn hoặc rất nhỏ.

Nếu thấy hoa văn bị biến đổi:

1. Chọn mesh bị ảnh hưởng, chẳng hạn một ống cơ khí (`Pipe`).
2. Chuyển sang workspace `Shading`.
3. Tìm node `Noise Texture` đang điều khiển vật liệu.
4. Điều chỉnh tham số `Scale` đến khi độ lớn hoa văn phù hợp trở lại.

Nếu độ vát cạnh (`Bevel`) hiển thị khác trước, kiểm tra thiết lập độ rộng vát trên đối tượng hoặc modifier tương ứng và điều chỉnh lại. Các thay đổi có thể rất nhỏ nếu model đã được dựng với tỷ lệ hợp lý.

## 5. Các phím tắt cần nhớ

| Thao tác | Phím tắt | Ý nghĩa |
| --- | --- | --- |
| Chọn các đối tượng trong vùng nhìn làm việc | `A` | Chọn hàng loạt; phải kiểm tra đối tượng không mong muốn |
| Áp dụng transform | `Ctrl + A` | Mở menu `Apply` |
| Chuyển kiểu hiển thị | `Z` | Mở lựa chọn `Solid`, `Wireframe`, `Rendered`,… |
| Hủy thao tác gần nhất | `Ctrl + Z` | Trở về trạng thái trước thao tác |
| Xóa rotation của lựa chọn | `Alt + R` | Đặt lại rotation |
| Xóa location | `Alt + G` | Đặt lại location |
| Xóa scale trong ngữ cảnh pose | `Alt + S` | Khôi phục scale của xương trong `Pose Mode` |
| Lưu file | `Ctrl + S` | Lưu dự án Blender |

Ba lệnh `Alt + R`, `Alt + G` và `Alt + S` đặc biệt quan trọng khi kiểm tra **pose của xương** ở các bài thực hành rigging.

## 6. Kiểm tra kết quả và sửa lỗi

**Checkpoint:** robot giữ nguyên hình dáng thiết kế; các mesh cần rig đã được chuẩn hóa; không có đèn/camera gây khó chọn; bản `.blend` đã lưu.

Nếu bề mặt trông khác đi sau `Apply`, đừng chỉnh xương để bù lỗi. Hãy kiểm tra scale/texture hoặc bevel trước. Nếu chưa rõ nguyên nhân và thao tác mới thực hiện, `Ctrl + Z` giúp đối chiếu trước và sau để xác định thay đổi.

## 7. Thực hành ngắn

Mở một robot gồm nhiều mesh tách rời. Chọn đúng các bộ phận cần chuyển động, dùng `All Transforms`, chuyển qua lại giữa `Solid` và `Rendered`, sau đó ghi nhận mesh nào có thay đổi về `Noise Texture` hoặc `Bevel`. Hoàn tất khi các bộ phận vẫn nằm đúng tư thế ban đầu.

## 8. Câu hỏi ôn tập trắc nghiệm

**Câu 1.** Vì sao cần xác lập tư thế nghỉ trước khi tạo armature?

A. Để giảm số polygon của mesh  
B. Để có trạng thái chuẩn dùng khi kiểm tra và khôi phục pose  
C. Để gộp tất cả mesh thành một  
D. Để tự động tạo chuyển động đi bộ  

**Đáp án: B.** Rest pose là mốc đối chiếu khi gắn xương, thử chuyển động và xóa biến đổi pose.

**Câu 2.** Sau khi áp dụng scale, chi tiết Noise Texture bỗng quá to. Bước xử lý phù hợp là gì?

A. Thêm một armature mới  
B. Xóa toàn bộ vật liệu  
C. Bật Wireframe cho render  
D. Kiểm tra node Noise Texture và điều chỉnh Scale  

**Đáp án: D.** Thay đổi scale đối tượng có thể ảnh hưởng cách texture được đánh giá; nên kiểm tra vật liệu ở Shading.

**Câu 3.** Menu Apply Transforms được mở bằng thao tác nào?

A. Ctrl + A trong Object Mode  
B. Ctrl + P trong Pose Mode  
C. Shift + S trong Edit Mode  
D. Alt + H trong Object Mode  

**Đáp án: A.** Ctrl + A mở các lựa chọn áp dụng transform đối tượng trong Object Mode.

**Câu 4.** Khi chọn nhiều mesh để áp dụng transform, điều gì cần kiểm tra trước?

A. Tất cả đều có tên Bone  
B. Không có mesh nào chứa vật liệu  
C. Không vô tình chọn camera hay đèn  
D. Tất cả đã có IK  

**Đáp án: C.** Lựa chọn sai đối tượng có thể gây thay đổi ngoài phạm vi các bộ phận robot.

**Câu 5.** Robot giữ dáng nhưng độ vát cạnh thay đổi sau Apply. Nên xử lý thế nào?

A. Đổi trục IK  
B. Kiểm tra và hiệu chỉnh Bevel của mesh bị ảnh hưởng  
C. Xóa xương chân  
D. Đổi tên mesh theo .L  

**Đáp án: B.** Bevel có thể thay đổi biểu hiện khi scale được chuẩn hóa; cần chỉnh đúng thành phần gây ra lỗi.

## 9. Tổng kết

Bài học đã hoàn thành các nội dung: Chuẩn bị tư thế nghỉ và kiểm soát ảnh hưởng của Apply Transforms tới vật liệu, bevel. Hãy bảo đảm các checkpoint đều đạt trước khi tiếp tục thao tác trên rig, và lưu dự án Blender ở trạng thái mong muốn.
