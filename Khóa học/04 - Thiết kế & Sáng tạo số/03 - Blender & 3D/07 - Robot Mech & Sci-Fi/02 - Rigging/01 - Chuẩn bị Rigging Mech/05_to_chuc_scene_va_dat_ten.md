# Bài 05 — Tổ chức Outliner, Collection và đặt tên object cho rigging

**Loại bài:** Lesson  
**Chủ đề:** `Outliner`, `Collection`, `M`, `F2`, `H`, `Alt + H`

## 1. Tóm tắt

Sau khi Join và Separate, model robot thường có nhiều object mang tên tự động. Người thực hiện rigging cần biết object nào là đầu, thân, khớp hông trái/phải, đùi, cẳng chân và bàn chân. Sắp xếp `Outliner`, phân nhóm đèn và hình tham khảo, đặt tên chính xác sẽ giúp tránh chọn sai cụm khi tạo bộ điều khiển.

## 2. Mục tiêu học tập

Người học có thể:

- Giải thích vai trò của `Outliner` và `Collection` trong quản lý scene.
- Tạo collection riêng cho ánh sáng/camera và ảnh tham khảo.
- Dùng `M` để chuyển object vào collection và `F2` để đổi tên.
- Lập quy ước đặt tên bộ phận robot thống nhất theo bên trái/phải.
- Phân biệt **ẩn tạm object** với **ẩn collection** và với **xóa object**.

## 3. Tại sao tổ chức scene là một bước kỹ thuật?

Khi robot được rig, các bộ phận có thể được chọn và liên kết tới hệ thống điều khiển. Tên `Cube.015` hoặc `Cylinder.008` gần như không cho biết chúng thuộc cụm nào, rất dễ dẫn đến nhầm lẫn khi làm việc ở đùi hoặc khớp hông.

Một hệ thống tên tốt phải cung cấp ít nhất hai thông tin: **chức năng** và **bên** của bộ phận. Nếu có nhiều khớp ở một vùng, bổ sung số thứ tự.

Ví dụ:

| Vai trò | Tên gợi ý |
| --- | --- |
| Đầu robot | `Head` |
| Cổ robot | `Neck` |
| Thân chính | `Body` |
| Khớp hông thứ nhất bên trái | `Hip_Joint_01_Left` |
| Khớp hông thứ nhất bên phải | `Hip_Joint_01_Right` |
| Khớp hông thứ hai bên trái | `Hip_Joint_02_Left` |
| Khớp hông thứ hai bên phải | `Hip_Joint_02_Right` |
| Đùi trên | `Upper_Leg_Left`, `Upper_Leg_Right` |
| Cẳng chân | `Lower_Leg_Left`, `Lower_Leg_Right` |
| Mắt cá | `Ankle_Left`, `Ankle_Right` |
| Bàn chân | `Foot_Left`, `Foot_Right` |

Bộ tên trên là **quy ước thực hành đề xuất**; giá trị của nó nằm ở tính đồng nhất, không phải chính xác từng chữ.

## 4. Tạo Collection cho đèn và ảnh tham khảo

### 4.1. Collection cho đèn và camera

1. Trong `Outliner` hoặc viewport, chọn các đèn trong scene.
2. Nhấn `M` để mở menu di chuyển object vào collection.
3. Chọn **New Collection**.
4. Đặt tên chẳng hạn `Lights_and_Camera`.
5. Xác nhận tạo collection, sau đó kiểm tra các đèn đã chuyển vào đúng nhóm.
6. Khi bổ sung camera, có thể đặt nó cùng collection này.

Nếu muốn, đổi tên đèn theo vai trò hoặc số thứ tự. Trong ví dụ có sáu đèn; số đèn thực tế phụ thuộc scene riêng của người học.

### 4.2. Collection cho ảnh tham khảo

Ảnh tham khảo trong Blender có thể xuất hiện như các object loại **Empty** có gắn hình. Khi không cần xem ảnh để chuẩn bị rigging, nên đưa chúng vào một collection riêng và ẩn nhóm đi thay vì xóa ngay.

1. Chọn các object ảnh tham khảo trong `Outliner`.
2. Nhấn `M > New Collection`.
3. Đặt tên `Reference_Images`.
4. Có thể đổi tên `Reference_01`, `Reference_02`, `Reference_03` để dễ nhận diện.
5. Tắt hiển thị collection trong viewport bằng điều khiển visibility tương ứng trong `Outliner`.

Các ảnh vẫn có mặt trong tệp, nhưng không cản trở góc nhìn khi thao tác với mesh.

## 5. Đổi tên object và thống nhất bên trái/phải

Chọn một object trong viewport hoặc `Outliner`, nhấn `F2`, nhập tên mới và xác nhận. Cũng có thể nhấp đúp vào tên object trong `Outliner` để sửa.

**Cần thống nhất cách gọi trái/phải trước khi đặt tên.** Trong một số quy trình dựng hình, người thao tác gọi “trái” theo phía bên trái màn hình khi nhìn robot từ trước; trong các hệ thống rigging khác, tên `Left`/`Right` thường tính theo bên cơ thể robot. Hai cách hiểu này có thể đối nghịch nhau.

Để tránh nhầm, hãy chọn **một** quy ước dùng cho toàn bộ file và ghi rõ trong phần ghi chú dự án. Khi chuẩn bị pipeline rigging hoặc xuất game engine, nên kiểm tra lại quy ước phía trái/phải của bộ xương sẽ sử dụng.

Quy trình đổi tên:

1. Chọn `Head`, nhấn `F2`, nhập `Head`.
2. Làm tương tự với `Neck` và `Body`.
3. Đặt tên các khớp hông theo cặp `01`/`02` và `Left`/`Right`.
4. Đổi tên theo từng cặp đùi, cẳng chân, mắt cá, bàn chân.
5. Sau mỗi object đã xử lý, có thể nhấn `H` để ẩn tạm và tránh đặt tên lại nhầm.
6. Dùng `Alt + H` để hiện tất cả các object từng ẩn trong viewport, rồi đối chiếu lại `Outliner`.

## 6. Phân biệt các thao tác hiển thị và xóa

| Thao tác | Mục đích | Có xóa dữ liệu không? |
| --- | --- | --- |
| `H` trong viewport | Ẩn object đang chọn để dễ thao tác | Không |
| `Alt + H` | Hiện lại các object đã ẩn trong viewport | Không |
| Tắt visibility của Collection | Ẩn cả nhóm đèn/ảnh tham khảo | Không |
| `X` rồi xác nhận xóa | Xóa object được chọn khỏi scene | Có |

Ở cuối quy trình nên hiện các bộ phận robot đã tạm ẩn để nhìn lại tổng thể. Collection của đèn có thể được bật lại khi kiểm tra bằng chế độ `Rendered`; collection ảnh tham khảo có thể tiếp tục ẩn.

## 7. Phát hiện object rỗng và thực hành

Sau khi tách một mảnh mesh, đôi khi có thể xuất hiện object không còn hình học đáng kể. Chỉ xóa khi đã chắc chắn nó không chứa dữ liệu cần dùng:

1. Chọn object nghi ngờ trong `Outliner`.
2. Vào `Edit Mode` và kiểm tra có đỉnh, cạnh, mặt nào không.
3. So sánh với hình robot đầy đủ để bảo đảm không mất một chi tiết ẩn.
4. Nếu đúng là object Mesh rỗng không cần sử dụng, trở về `Object Mode`, nhấn `X` và xác nhận xóa.

**Thực hành:** Tạo `Lights_and_Camera` và `Reference_Images`, đặt tên toàn bộ các cụm robot từ đầu tới bàn chân, thống nhất quy ước trái/phải. Hiện toàn bộ robot, ẩn ảnh tham khảo và kiểm tra `Outliner` không còn những Mesh object chưa rõ chức năng.

## 8. Câu hỏi ôn tập

### Câu 1

Mục đích chính của việc đặt tên `Upper_Leg_Left` và `Upper_Leg_Right` là gì?

A. Tăng số lượng đa giác của chân.  
B. Tự sinh animation.  
C. Xác định nhanh chức năng và phía của từng object.  
D. Tự tăng chất lượng texture.

**Đáp án:** C  
**Giải thích:** Tên theo chức năng và bên giúp quản lý, chọn và gán điều khiển đúng khi rigging.

### Câu 2

Lệnh nào dùng để mở menu di chuyển object sang collection trong Blender?

A. `M`  
B. `P`  
C. `L`  
D. `Ctrl + J`

**Đáp án:** A  
**Giải thích:** `M` mở thao tác di chuyển object vào collection; đây là cách nhóm đèn hoặc ảnh tham khảo.

### Câu 3

Vì sao phải chọn quy ước trái/phải nhất quán?

A. Vì Blender chỉ chấp nhận một kiểu tên duy nhất.  
B. Vì đổi tên gây mất vật liệu.  
C. Vì đèn cần trái/phải theo hướng camera.  
D. Vì “trái” theo màn hình có thể ngược với “trái” của cơ thể robot.

**Đáp án:** D  
**Giải thích:** Hai hệ quy chiếu dễ dẫn tới chọn hoặc rig nhầm bên nếu không quy định rõ ngay từ đầu.

### Câu 4

Để tạm loại hình tham khảo khỏi viewport mà vẫn giữ nó trong dự án, cách nào phù hợp nhất?

A. Xóa hết ảnh.  
B. Chuyển ảnh vào collection riêng và ẩn collection.  
C. Join ảnh vào `Body`.  
D. Convert ảnh thành Bevel.

**Đáp án:** B  
**Giải thích:** Ẩn collection chỉ thay đổi khả năng hiển thị, không xóa dữ liệu tham khảo.

### Câu 5

Nên làm gì trước khi xóa một object nghi là Mesh rỗng?

A. Xóa ngay tất cả object cùng tên.  
B. Đổi tất cả đối tượng thành Curve.  
C. Kiểm tra Edit Mode và xác nhận nó không chứa hình học cần thiết.  
D. Tắt camera vĩnh viễn.

**Đáp án:** C  
**Giải thích:** Một object có thể khó nhìn từ bên ngoài nhưng vẫn chứa hình học; kiểm tra trước khi xóa tránh mất chi tiết robot.

## 9. Tổng kết

Scene chuẩn bị rigging cần dễ hiểu ngay khi mở `Outliner`. Hãy phân chia **đèn/camera**, **ảnh tham khảo** và **các bộ phận robot**; đặt tên theo chức năng và bên; dùng `H`/`Alt + H` để kiểm soát viewport; chỉ xóa object sau khi đã kiểm tra dữ liệu của nó.
