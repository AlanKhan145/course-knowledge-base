# Bài 02. Thiết lập góc nhìn và căn chỉnh ảnh tham chiếu

## 1. Tóm tắt và mục tiêu

Ảnh tham chiếu là hệ thống tọa độ trực quan để dựng robot đúng hình dạng. Ảnh đặt sai tâm sẽ làm đầu lệch, đặc biệt khi sử dụng `Mirror Modifier`.

Sau bài học, bạn có thể thêm ba ảnh vào các góc nhìn thích hợp, căn vị trí theo trục và đối chiếu mọi góc để kiểm tra tỷ lệ.

## 2. Làm chủ các góc nhìn trực giao

| Phím Numpad | Góc nhìn |
| --- | --- |
| `Numpad 1` | Front (nhìn trước) |
| `Ctrl + Numpad 1` | Back (nhìn sau) |
| `Numpad 3` | Right (nhìn cạnh) |
| `Numpad 7` | Top (nhìn trên) |
| `Numpad 5` | Chuyển Perspective / Orthographic |
| `Numpad .` | Frame Selected, phóng đến vùng chọn |

Ảnh trực giao giúp so sánh hình học mà không bị biến dạng theo phối cảnh. Có thể dùng chuột giữa để xoay viewport kiểm tra hình khối thực tế.

## 3. Đặt ảnh Front, Side và Top

1. Nhấn `Numpad 1` để vào Front View.
2. Chọn `Shift + A → Image → Background` (hoặc mục ảnh tham chiếu tương ứng trong phiên bản Blender đang dùng), sau đó nạp ảnh mặt trước.
3. Vào `Numpad 3`, thêm ảnh bên bằng thao tác tương tự.
4. Vào `Numpad 7`, thêm ảnh trên.
5. Lần lượt dùng `Numpad 1`, `3`, `7` để xác nhận từng ảnh hiển thị đúng hướng.

Nếu sử dụng đối tượng ảnh dạng `Reference` thay vì `Background`, cần kiểm tra tùy chọn hiển thị trong Orthographic/Perspective, độ trong suốt và hiển thị trước/sau mesh. Mục đích là ảnh hướng dẫn không che mất phần hình học đang thao tác.

## 4. Căn tâm bằng một Cube tạm

Đưa `3D Cursor` về gốc thế giới (`Shift + S → Cursor to World Origin`), sau đó thêm `Mesh → Cube`. Trong Object Mode, đặt tâm khối đúng vị trí dự kiến của đầu robot; trong Edit Mode điều chỉnh kích thước các đỉnh theo ảnh.

Tiếp theo, căn ba ảnh theo khối này:

- **Front:** Trục tâm dọc của đầu trùng trục thế giới `Z`, hai nửa trái/phải cân xứng.
- **Side:** Mũi và gáy của đầu trùng với chiều sâu của Cube; có thể dịch ảnh dọc `Y`.
- **Top:** Vị trí tâm và các mép trái/phải phải thống nhất với ảnh Front.

Để di chuyển đúng trục, chọn ảnh rồi dùng `G` kết hợp `X`/`Y`/`Z`. Khi đang biến đổi có thể nhấn chuột giữa để khóa theo trục nếu thao tác phù hợp; nhập ký tự trục thường dễ tái hiện hơn.

## 5. Kiểm tra đồng bộ hình tham chiếu

1. Chọn Cube và xem từ mặt trước: chiều rộng xấp xỉ phần thân đầu.
2. Sang cạnh: chiều sâu và độ cao trùng silhouette của ảnh bên.
3. Sang trên: kiểm tra tâm, mép trước/sau, chiều rộng đầu.
4. Quay tự do viewport: ảnh không nên che việc kiểm tra hình khối.
5. Lưu bằng `Ctrl + S`.

Không cần căn đến từng pixel nếu ảnh có sai lệch phối cảnh hoặc được vẽ không thống nhất. Hãy ưu tiên trục đối xứng, độ cao mắt, đường đáy và khối tổng thể.

## 6. Lỗi thường gặp, thực hành và tổng kết

**Lỗi:** Đặt ảnh bằng cảm tính từ góc Perspective, khiến ảnh nhìn khớp ở một phía nhưng lệch ở hai phía còn lại. **Sửa:** Trở về Numpad 1/3/7, đối chiếu từng trục.

**Bài tập:** Thêm ba ảnh tham chiếu; tạo một Cube đối chiếu, rồi dịch ảnh đến khi tâm và silhouette khớp ở cả ba góc. Chụp ba ảnh viewport hoặc lưu checkpoint trong file `.blend`.

**Ghi nhớ:** Căn ảnh trước khi modeling giúp giảm số lần sửa mesh và đảm bảo phép đối xứng hoạt động chính xác.

## 7. Câu hỏi ôn tập

### Câu 1

Muốn xem robot từ phía trên, sử dụng phím nào?

A. Numpad 1  
B. Numpad 3  
C. Ctrl + Numpad 1  
D. Numpad 7  

**Đáp án:** D

**Giải thích:** Numpad 7 là góc nhìn Top trực giao.

### Câu 2

Vì sao cần căn trục giữa ảnh mặt trước đúng gốc đối xứng?

A. Để giảm độ phân giải texture  
B. Để hai nửa mesh đối xứng theo đúng tâm thiết kế  
C. Để tăng tốc render Cycles  
D. Để đổi màu vật liệu  

**Đáp án:** B

**Giải thích:** Mirror dựa vào hệ tọa độ và origin, nên ảnh lệch tâm dẫn tới hình học khó khớp.

### Câu 3

Khi góc nhìn phối cảnh làm đầu trông méo, nên kiểm tra bằng cách nào?

A. Tăng ánh sáng HDRI  
B. Thêm Armature  
C. Chuyển sang các góc nhìn trực giao Numpad 1/3/7  
D. Thêm Subdivision Surface  

**Đáp án:** C

**Giải thích:** Ba hình chiếu trực giao giúp đối chiếu tỷ lệ của mô hình mà không bị hiệu ứng phối cảnh.

### Câu 4

Tổ hợp nào đưa con trỏ 3D về gốc thế giới?

A. Shift + S rồi chọn Cursor to World Origin  
B. Shift + N  
C. Ctrl + J  
D. Ctrl + Shift + B  

**Đáp án:** A

**Giải thích:** Menu Snap mở bởi Shift + S có tùy chọn đưa 3D Cursor về gốc.

### Câu 5

Một ảnh Top bị lệch ngang so với Front. Cách xử lý tốt nhất là gì?

A. Xóa toàn bộ mesh  
B. Di chuyển ảnh Top theo trục cần thiết rồi kiểm tra lại các view  
C. Thêm âm thanh  
D. Tạo rig ngay  

**Đáp án:** B

**Giải thích:** Cần sửa vị trí ảnh tham chiếu, không bắt mesh sai lệch để bám vào ảnh.
