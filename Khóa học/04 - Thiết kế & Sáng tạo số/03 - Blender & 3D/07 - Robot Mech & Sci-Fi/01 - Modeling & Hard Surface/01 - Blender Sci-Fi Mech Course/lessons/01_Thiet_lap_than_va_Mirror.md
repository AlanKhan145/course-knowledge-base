# Bài 01 — Thiết lập thân robot và mô hình đối xứng bằng Mirror

## 1. Tóm tắt

Thân robot Mech thường gần đối xứng qua mặt phẳng giữa. Dựng cả hai nửa bằng tay khiến các đường giáp, mép vát và hốc cơ khí khó khớp tuyệt đối. Bài học này thiết lập một khối thân đơn giản, sử dụng `Mirror Modifier` và kiểm soát đường nối giữa hai nửa. Kết quả là nền tảng hình học vững để dựng ngực và ba lô.

## 2. Mục tiêu học tập

- Phân biệt `Object Mode` và `Edit Mode` trong thao tác thêm khối.
- Tạo thân từ `Mesh > Cube` và xác định đúng mặt phẳng đối xứng.
- Chuyển `Mirror` và `Bevel` từ đối tượng đã có, hoặc tự thêm modifier tương đương.
- Giải thích vai trò của `Clipping` và xử lý mặt nội bộ nằm tại tâm gương.
- Kiểm tra sự liền mạch ở đường giữa bằng ba góc nhìn.

## 3. Chuẩn bị cảnh

Mở Blender và giữ trục `Z` là hướng thẳng đứng. Nếu đã có mesh đầu robot, đặt nó phía trên thân để đối chiếu tỉ lệ. Nếu chưa có, đặt một cube tạm làm mốc kích thước và xóa hoặc ẩn khi cần. Ảnh tham chiếu nhìn trước và nhìn bên sẽ giúp xác định vị trí thân theo cùng hệ trục.

Bấm `Tab` để bảo đảm đang ở `Object Mode`, dùng `Shift + C` để đưa `3D Cursor` về tâm, sau đó `Shift + A > Mesh > Cube`. Đặt tên đối tượng là `Torso_Main`. Vào `Edit Mode`, dùng `S` thu khối xuống kích thước phù hợp. Thao tác scale trong Edit Mode giúp origin vẫn tại vị trí gốc của đối tượng, điều này đặc biệt có ích khi dùng Mirror.

## 4. Cơ chế của Mirror và Bevel

`Mirror Modifier` tạo phần đối xứng dựa trên origin và hệ trục cục bộ của đối tượng. Nếu muốn đối xứng trái/phải, thông thường bật `X`. Vị trí origin phải khớp với mặt phẳng giữa robot; nếu origin nằm lệch, hai nửa sẽ phản chiếu quanh mặt phẳng sai.

`Clipping` ngăn các đỉnh ở mép trung tâm vượt qua mặt gương khi kéo chỉnh. `Merge` hợp nhất các đỉnh đủ gần mặt đối xứng. Cả hai nên được kiểm tra khi thiết kế thân khép kín. `Bevel Modifier` có nhiệm vụ bo cạnh theo điều kiện của modifier, nhưng không thay thế mọi thao tác vát chủ động trong Edit Mode.

Nếu đối tượng đầu đã thiết lập sẵn các modifier phù hợp, có thể chọn thân trước, sau đó `Shift`-chọn đầu để đầu trở thành đối tượng active; nhấn `Ctrl + L > Copy Modifiers`. Kiểm tra lại trục Mirror, thứ tự modifier và phạm vi Bevel. Không nên sao chép vô điều kiện nếu đầu có thông số không phù hợp với thân.

## 5. Quy trình dựng thân đối xứng

1. Trong `Edit Mode`, chuyển sang `Face Select` bằng phím `3` ở hàng số trên cùng.
2. Xóa mặt nằm ở phía cắt giữa thân, nơi hai nửa sẽ được Mirror ghép lại. Chọn đúng mặt rồi `X > Faces`; không xóa mặt ngoài của robot.
3. Di chuyển nửa mesh về đúng phía của mặt phẳng Mirror bằng `G`, sau đó giới hạn theo trục khi cần (`G`, `X`).
4. Đưa hàng đỉnh trung tâm về đúng mặt gương và bật `Clipping` cùng `Merge`.
5. Chọn `Numpad 1` để quan sát từ trước, `Numpad 3` để quan sát bên; dùng menu `Z > Wireframe` kiểm tra các đỉnh khuất.
6. Chọn `A` nếu muốn chọn toàn bộ hình học, điều chỉnh `G` và `S` trong Edit Mode để thân có tỉ lệ tương xứng với đầu.
7. Trở về `Object Mode`, kiểm tra hai bên có phản chiếu đối xứng và không tạo một khe hở giữa tâm.

**Vì sao phải xóa mặt giữa?** Nếu để lại mặt trong khi Mirror, có thể tạo bề mặt chồng hoặc ngăn thân hình thành một lớp vỏ sạch. Hai nửa nhìn ngoài có vẻ khớp nhưng mesh bên trong vẫn có thể rối, gây lỗi shading hay khi xuất sang công cụ khác.

## 6. Kiểm tra kết quả và xử lý lỗi

| Hiện tượng | Nguyên nhân thường gặp | Hướng xử lý |
| --- | --- | --- |
| Hai nửa không gặp nhau | Origin hoặc đỉnh giữa lệch | Kiểm tra origin và tọa độ hàng đỉnh trung tâm |
| Có đường nứt dọc thân | `Merge`/`Clipping` chưa phù hợp | Bật đúng tùy chọn và kéo hàng đỉnh vào mặt đối xứng |
| Vùng trung tâm bị dày | Còn mặt bên trong | Quan sát Wireframe, loại bỏ mặt không cần thiết |
| Bevel rộng quá mức | Thông số sao chép từ đầu không phù hợp | Giảm độ rộng bevel, kiểm tra `Limit Method` |
| Đối tượng bị méo sau scale | Transform/geometry thiếu nhất quán | Kiểm tra scale và vị trí thao tác trong Object/Edit Mode |

## 7. Thực hành

Tạo hai phiên bản thân: một khối tương đối vuông vức và một khối có phần đáy thu hẹp. Cả hai phải duy trì mặt phẳng đối xứng chung và không xuất hiện mặt nội bộ tại tâm. Lưu dự án thành `01_torso_mirror.blend`.

**Tiêu chí đạt:** nhìn trước đối xứng, nhìn bên có bề dày hợp lý, `Mirror` có tác dụng đúng, đường giữa không hở.

## 8. Câu hỏi ôn tập

### Câu 1

Vì sao origin của đối tượng quan trọng khi dùng `Mirror Modifier`?

A. Nó xác định màu vật liệu.  
B. Nó điều khiển độ sáng của viewport.  
C. Nó xác định vị trí mặt phẳng phản chiếu theo hệ tọa độ đối tượng.  
D. Nó tự động xóa tất cả mặt thừa.

**Đáp án:** C. **Giải thích:** Mirror phản chiếu tương ứng với trục và origin; origin lệch làm trục đối xứng lệch.

### Câu 2

Để tránh đỉnh tại đường giữa đi xuyên qua mặt phẳng Mirror trong lúc kéo chỉnh, nên kiểm tra tùy chọn nào?

A. Clipping.  
B. Motion Blur.  
C. Bloom.  
D. Auto Keying.

**Đáp án:** A. **Giải thích:** Clipping hạn chế đỉnh vượt mặt gương khi chỉnh mesh.

### Câu 3

Tổ hợp nào thường dùng để sao chép modifier từ đối tượng active sang đối tượng đã chọn khác?

A. `Ctrl + R`.  
B. `Shift + D`.  
C. `Ctrl + J`.  
D. `Ctrl + L > Copy Modifiers`.

**Đáp án:** D. **Giải thích:** Link/Copy Modifiers sử dụng đối tượng active làm nguồn.

### Câu 4

Vì sao nên xóa mặt ở giữa hai nửa thân trước khi Mirror?

A. Để tự tạo animation.  
B. Để tránh mặt nội bộ hoặc hình học trùng nhau.  
C. Để tăng số polygon.  
D. Để đổi trục Z thành X.

**Đáp án:** B. **Giải thích:** Mặt giữa không cần thiết có thể tồn tại bên trong vật thể sau phản chiếu.

### Câu 5

Khi cần xem các đỉnh bị che khuất ở mặt bên, cách nào hữu ích nhất?

A. Đổi sang Rendered View.  
B. Tắt tất cả modifier.  
C. `Numpad 3` kết hợp Wireframe.  
D. Chỉ xoay nguồn sáng.

**Đáp án:** C. **Giải thích:** Góc nhìn bên vuông góc và Wireframe giúp chọn đúng các đỉnh xuyên qua mô hình.

## 9. Tổng kết

Một torso đáng tin cậy bắt đầu từ **origin đúng, mặt giữa sạch và Mirror có Clipping/Merge phù hợp**. Khi nền đối xứng ổn định, các bước tạo ngực, panel và ba lô sẽ dễ kiểm soát hơn nhiều.
