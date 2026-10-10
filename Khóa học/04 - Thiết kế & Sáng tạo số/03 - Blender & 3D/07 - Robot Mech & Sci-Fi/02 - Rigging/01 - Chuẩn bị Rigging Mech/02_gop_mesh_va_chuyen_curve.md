# Bài 02 — Gộp các bộ phận robot và chuyển Curve thành Mesh

**Loại bài:** Lesson  
**Chủ đề:** `Join`, `Ctrl + J`, active object, `Object > Convert > Mesh`

## 1. Tóm tắt

Robot Mech có thể được dựng từ rất nhiều object nhỏ: vỏ đầu, lõi đầu, ống dẫn, thân chính và các chi tiết trang trí. Khi nhiều thành phần luôn di chuyển như một khối, việc giữ chúng thành object riêng không mang lại lợi ích cho rigging. Bài này hướng dẫn gộp object theo chức năng, đồng thời xử lý những chi tiết còn là Curve để có thể Join vào Mesh.

## 2. Mục tiêu học tập

Sau bài học, người học có thể:

- Xác định khi nào nên gộp nhiều thành phần thành một object.
- Dùng `Ctrl + J` để Join các object dạng Mesh.
- Giải thích vai trò của **active object** trong lệnh Join.
- Chuyển ống dẫn từ `Curve` sang `Mesh` trước khi gộp với thân robot.
- Kiểm tra modifier và vật liệu sau Join.

## 3. Quy tắc gộp object trước rigging

Việc gộp không dựa vào việc hai chi tiết đứng cạnh nhau, mà dựa vào **chúng có cùng chuyển động hay không**. Hai mảng cố định trên đầu có thể cùng xoay với đầu, vì vậy có thể thuộc cùng một object `Head`. Ngược lại, bản lề hông cần xoay độc lập không nên gộp với thân chỉ vì nằm sát thân.

Dùng quy tắc:

- **Có thể gộp:** các mảnh đầu cố định; nhiều phần vỏ thân; các ống và chi tiết trang trí gắn cứng trên thân.
- **Không nên gộp sớm:** khớp hông, đùi, cẳng chân, mắt cá nếu chúng cần trục quay khác nhau.

`Ctrl + J` chỉ **Join các object** thành một object quản lý chung. Các mảng mesh chưa hàn đỉnh vẫn có thể là các vùng hình học rời nhau nằm trong cùng một object; đó là điều bình thường ở robot cơ khí.

## 4. Join hai phần đầu thành một object

### 4.1. Kiểm tra trước khi gộp

Ví dụ đầu robot gồm hai mảnh Mesh. Mảnh chính có `Mirror Modifier`, mảnh còn lại không có Mirror; cả hai có thể có `Bevel Modifier` tương ứng.

1. Chọn mảnh đầu chính và Apply `Mirror`.
2. Kiểm tra cả hai object còn lại những modifier nào, đặc biệt là `Bevel`.
3. Không cần Apply Bevel chỉ để Join nếu hai object có thể dùng thiết lập Bevel tương thích.

Lý do: khi Join, Blender sử dụng object được chọn **cuối cùng** làm active object và object kết quả sử dụng ngữ cảnh/thiết lập của object đó, bao gồm modifier stack. Nếu modifier khác nhau, vẻ ngoài của các mảnh có thể thay đổi.

### 4.2. Thực hiện Join

1. Ở `Object Mode`, chọn mảnh đầu thứ nhất.
2. Giữ `Shift` và chọn **mảnh đầu chính sau cùng**, để mảnh đầu chính là active object.
3. Nhấn `Ctrl + J`.
4. Vào `Edit Mode` và kiểm tra cả hai phần hình học cùng nằm trong object.
5. Quay lại `Object Mode` và kiểm tra vật liệu, vát cạnh ở `Rendered` hoặc `Material Preview`.

Có thể nhấn `H` để tạm ẩn object đã xử lý, giúp tập trung vào các phần còn lại. `Alt + H` hiện lại các object đã ẩn trong viewport.

## 5. Chuyển ống dẫn Curve sang Mesh

Một số ống dẫn được tạo bằng Curve để dễ điều chỉnh đường cong. Curve và Mesh là **hai loại object khác nhau**, vì thế Join trực tiếp một Curve với một Mesh thường không tạo kết quả mong muốn.

Quy trình:

1. Chọn object ống dẫn trong `Object Mode`.
2. Mở `Object > Convert > Mesh`.
3. Nhấn `Tab` để vào `Edit Mode`; kiểm tra ống đã có đỉnh, cạnh và mặt.
4. Trở về `Object Mode`.
5. Chọn ống Mesh và các thành phần thân cần gộp.
6. Chọn **thân chính cuối cùng** làm active object, rồi nhấn `Ctrl + J`.
7. Kiểm tra chi tiết ống và vật liệu sau khi gộp.

Chuyển sang Mesh là thao tác làm thay đổi cách chỉnh sửa đối tượng, vì thế nên giữ bản sao nếu vẫn muốn thay đổi biên dạng ống bằng công cụ Curve.

## 6. Gộp thân robot theo một cụm cố định

Với phần thân, một quy trình hợp lý là:

1. Xác định tất cả chi tiết luôn đi cùng thân: lớp vỏ chính, ống nối và những mảng trang trí cố định.
2. Chuyển toàn bộ các Curve cần gộp thành Mesh.
3. Apply `Mirror` cho những chi tiết mà tính đối xứng cần được cố định trước khi Join.
4. Kiểm tra các object có những modifier tương thích.
5. Chọn các object con trước, chọn `Body` làm active object sau cùng.
6. Nhấn `Ctrl + J`, sau đó kiểm tra Mesh và bề mặt render.

Không đưa chân hoặc khớp cần quay vào `Body`. Số lượng object ít chỉ hữu ích khi cấu trúc chuyển động vẫn đúng.

## 7. Lỗi thường gặp và thực hành

| Lỗi | Dấu hiệu | Cách khắc phục |
| --- | --- | --- |
| Join Curve với Mesh không được | Không Join hoặc báo dữ liệu mesh không tương thích | Convert Curve thành Mesh trước |
| Mất Mirror hoặc một phần nhìn khác trước | Các object có modifier khác nhau | Apply những modifier cần thiết và chọn active object phù hợp |
| Vát cạnh thay đổi sau Join | Modifier stack của active object không phù hợp | Đối chiếu thiết lập Bevel trước Join; kiểm tra sau Join |
| Gộp nhầm khớp vào thân | Khớp không còn là object độc lập | Tách lại phần khớp trước khi rigging |

**Thực hành:** Trên mô hình robot, tạo một `Head` từ hai phần đầu và một `Body` từ các mảng cố định, bao gồm ít nhất một ống đã Convert từ Curve sang Mesh. Sau mỗi lần `Ctrl + J`, kiểm tra `Edit Mode` và `Rendered` để bảo đảm không mất hình học hoặc vật liệu.

## 8. Câu hỏi ôn tập

### Câu 1

Một object ống dẫn không Join được với Mesh thân. Nguyên nhân hợp lý nhất là gì?

A. Ống dẫn đang có tên dài.  
B. Thân không có đèn chiếu sáng.  
C. Ống dẫn vẫn là Curve thay vì Mesh.  
D. Ống dẫn có màu khác thân.

**Đáp án:** C  
**Giải thích:** Curve và Mesh là các loại dữ liệu khác nhau; cần Convert Curve sang Mesh để thực hiện Join theo quy trình này.

### Câu 2

Trong `Ctrl + J`, object nào giữ vai trò active object quyết định ngữ cảnh đối tượng kết quả?

A. Object được chọn sau cùng.  
B. Object có nhiều mặt nhất.  
C. Object có tên đứng đầu bảng chữ cái.  
D. Object gần camera nhất.

**Đáp án:** A  
**Giải thích:** Đối tượng được chọn cuối cùng là active object; cần chủ động quyết định nó trước khi Join.

### Câu 3

`Ctrl + J` có tự hàn các đỉnh chạm nhau giữa hai Mesh không?

A. Có, và xóa toàn bộ vật liệu.  
B. Có, bất kể khoảng cách.  
C. Chỉ khi bật Rendered View.  
D. Không; lệnh Join chủ yếu đưa các mesh vào cùng một object.

**Đáp án:** D  
**Giải thích:** Các vùng hình học vẫn có thể là những đảo mesh tách rời bên trong object kết quả.

### Câu 4

Bộ phận nào không nên gộp vào thân robot nếu dự kiến xoay độc lập?

A. Ống dẫn gắn cố định.  
B. Khớp hông chuyển động.  
C. Mảng trang trí cố định trên ngực.  
D. Vỏ thân không cử động riêng.

**Đáp án:** B  
**Giải thích:** Khớp hông cần một object/cụm điều khiển độc lập để thực hiện chuyển động của chân.

### Câu 5

Sau Join, cần làm gì để xác nhận model vẫn đúng?

A. Xóa toàn bộ đèn và vật liệu.  
B. Lập tức thêm xương mà không cần kiểm tra.  
C. Kiểm tra Mesh, modifier và vật liệu ở các chế độ xem phù hợp.  
D. Chuyển tất cả object sang Camera.

**Đáp án:** C  
**Giải thích:** Join có thể làm thay đổi tác động của modifier của object hoạt động, nên cần kiểm tra hình học và bề mặt.

## 9. Tổng kết

Chuẩn bị rigging tốt đòi hỏi **gộp theo chuyển động**, không phải gộp càng nhiều càng tốt. Hãy Convert Curve sang Mesh trước, Apply những modifier gây xung đột, chọn active object có chủ đích và kiểm tra hình học/vật liệu sau mỗi lần Join.
