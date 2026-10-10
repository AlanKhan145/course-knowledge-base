# Bài 08 — Dựng ống dẫn 3D bằng Bézier Curve và đầu nối cơ khí

## 1. Tóm tắt

Các ống dẫn từ bình chứa đến backpack cần đường cong liên tục, không bị gãy thành nhiều đoạn cứng và phải có độ dày thật trong viewport/render. `Bezier Curve` cung cấp những điểm điều khiển và handle để điều chỉnh hình dáng ống. Bài học xây dựng hai đường ống, điều chỉnh tiết diện bằng `Bevel Depth`, sau đó thêm vòng đầu nối bằng mesh.

## 2. Mục tiêu học tập

- Phân biệt đối tượng `Curve` và `Mesh` trong Blender.
- Tạo và căn Bézier Curve với các điểm/handle.
- Áp dụng `Mirror Modifier` cho curve ở mức object khi cần đối xứng.
- Dùng `Geometry > Bevel > Depth` để biến đường cong thành ống có tiết diện.
- Điều chỉnh độ mượt qua resolution và gắn đầu ống vào khớp cơ khí.
- Dựng vòng đầu nối bằng các thao tác trên mesh.

## 3. Vì sao nên dùng Curve thay vì ghép nhiều Cylinder?

Nếu ghép nhiều Cylinder thẳng, đường ống dễ lộ khớp gãy và khó tạo các đoạn uốn mềm. Bézier Curve có điểm đầu, điểm cuối và handle điều khiển tiếp tuyến. Việc dịch, xoay hoặc thay đổi độ dài handle sẽ điều khiển hướng ống đi qua không gian 3D.

Mesh và Curve là hai kiểu đối tượng khác nhau. `Ctrl + J` không thể tùy ý join một Mesh trực tiếp với Curve khi chưa chuyển đổi chúng về kiểu thích hợp. Để giữ khả năng chỉnh đường cong, nên để ống là một object Curve riêng biệt thay vì nhập ngay vào mesh thân.

## 4. Tạo đường cong đầu tiên

1. Trở về Object Mode (`Tab`), dùng `Shift + C` đưa 3D Cursor về gốc.
2. `Shift + A > Curve > Bezier` để tạo một đối tượng mới, đặt tên `Tube_Main`.
3. Vào Edit Mode và dịch các điểm điều khiển (`G`) khỏi tâm, thay vì di chuyển cả object một cách tùy tiện. Việc giữ origin gần gốc giúp thiết lập Mirror quanh trục đối xứng thuận tiện hơn.
4. Nếu cần một đường tương ứng bên đối diện robot, thêm `Mirror Modifier` lên curve và kiểm tra trục `X`. Không phải mọi bố cục ống đều nhất thiết đối xứng.
5. Chuyển Top View (`Numpad 7`), dùng `G`, `S`, `R` đặt điểm đầu ở gần bình chứa và định hướng tiếp tuyến ban đầu. Khi cần xoay một phần tư vòng, có thể nhập `R`, `90` trong mặt phẳng phù hợp.
6. Vào bảng `Object Data Properties` của Curve, mục `Geometry > Bevel`; tăng `Depth` để ống có bán kính. Điều chỉnh `Resolution` để tiết diện tròn mượt hơn. Một mức ví dụ trong quy trình là **khoảng 8**, nhưng nên cân đối với số polygon và khoảng cách nhìn.

**Lưu ý:** Khi `Bevel Depth` bằng 0, curve có thể không có tiết diện nhìn thấy trong kết xuất theo kiểu ống đặc. Depth quyết định bán kính hình học tạo ra quanh đường dẫn; độ lớn phải cân xứng với bình và đầu nối.

## 5. Uốn ống và nối đúng hai đầu

Trong Edit Mode, chọn điểm điều khiển gần bình, dùng `G` đặt vào lỗ ra của bình. Điều chỉnh handle bằng `R`, `S` hoặc kéo vị trí để đường ống rời bình theo hướng mượt. Chọn điểm đầu còn lại; từ Top View và Side View, di chuyển điểm đó tới mặt backpack.

Nếu cần thêm một đoạn, chọn điểm cuối rồi `E` để extrude điểm control mới của spline. Tại điểm mới, dùng `G` để xác định vị trí và `R` điều chỉnh hướng tay cầm. Có thể dùng `R` hai lần để thao tác xoay trackball trong tình huống phù hợp, nhưng nên kiểm tra từng trục trong góc nhìn vuông góc để tránh uốn không kiểm soát.

Ống không được đi xuyên qua vỏ robot một cách tùy ý. Ở mỗi đầu, nên có một đoạn chui vào lỗ hay đầu nối để mối tiếp xúc có vẻ hợp lý. Đường ống không nên tạo góc gãy đột ngột ngay sát bình, vì hiệu ứng sẽ giống ống cao su bị gập.

## 6. Tạo đầu nối từ Mesh

Chuyển sang đối tượng Mesh của backpack và vào Edit Mode. Chọn một edge loop có hình tròn (hoặc hình gần tròn) phù hợp ở vùng cần gắn ống. Có thể nhân bản vòng cạnh (`Shift + D`), sau đó dịch/rotate vòng đến vị trí kết nối. Dùng `E` tạo chiều sâu cho một cổ nối, chỉnh scale vừa với đường kính ống.

Nếu cần đầu nối thứ hai, dùng `L` chọn cụm geometry và `Shift + D` nhân bản sang vị trí mới. Trở về Object Mode, chọn `Tube_Main`, đưa điểm cuối của spline vào giữa đầu nối. Quan sát từ Top và Side để bảo đảm trục của ống đi vào đầu nối, không dừng ở mặt ngoài rồi mất hút.

## 7. Đường ống thứ hai và tinh chỉnh

Nhân bản các điểm của curve, hoặc tạo một curve khác tùy bố cục. Đổi hướng ống về một cổng khác, chỉnh handle để đường đi không trùng hoặc cắt qua ống thứ nhất. Nếu ống trông quá dày, giảm `Bevel Depth` rồi quan sát lại. Thao tác theo thứ tự **vị trí đầu → hướng cong → điểm cuối → độ dày** giúp dễ kiểm soát hơn.

## 8. Debug và kiểm tra

| Hiện tượng | Nguyên nhân | Cách xử lý |
| --- | --- | --- |
| Chỉ thấy một đường mảnh | Bevel Depth quá thấp hoặc chưa thiết lập | Tăng Geometry > Bevel > Depth |
| Ống gãy ở điểm uốn | Handle không cùng hướng với tuyến đi | Điều chỉnh handle, tăng độ mượt cục bộ |
| Ống xuyên xuyên qua vỏ | Điểm điều khiển đặt sai theo Y/Z | Kiểm tra đồng thời Top và Side |
| Mirror không ở đúng giữa | Origin của Curve lệch | Kiểm tra origin và trục Mirror |
| Mất hình ống sau chuyển object | Curve không được giữ/convert đúng | Giữ Curve riêng; nếu convert, kiểm tra mesh đầu ra |

## 9. Thực hành

Tạo ít nhất một ống cong từ bình tới ba lô, một đầu nối cơ khí ở backpack và một ống thứ hai đi đến cổng khác. Kiểm tra đường ống không cắt nhau bất thường và có tiết diện nhìn rõ. Lưu `08_curved_tubing.blend`.

## 10. Câu hỏi ôn tập

### Câu 1

Điều gì làm một Bézier Curve trông thành một ống tròn có độ dày?

A. Tăng chỉ số frame.  
B. Thiết lập Geometry > Bevel > Depth.  
C. Thêm một camera.  
D. Bật X-Ray.

**Đáp án:** B. **Giải thích:** Bevel Depth tạo tiết diện dọc spline.

### Câu 2

Vì sao nên giữ ống dưới dạng Curve riêng khi vẫn đang chỉnh hình dáng?

A. Để tránh phải dùng đèn.  
B. Vì Curve không có origin.  
C. Vì mọi object trong Blender đều là Curve.  
D. Vì có thể điều chỉnh điểm/handle và không cần chuyển ngay sang Mesh.

**Đáp án:** D. **Giải thích:** Curve giữ khả năng kiểm soát đường cong linh hoạt, và không thể join tùy tiện với Mesh.

### Câu 3

Trong Edit Mode của Curve, lệnh thường dùng để nối tiếp từ một control point cuối là gì?

A. `E`.  
B. `I`.  
C. `Ctrl + J`.  
D. `P`.

**Đáp án:** A. **Giải thích:** Extrude tạo điểm mới nối tiếp spline.

### Câu 4

Tại sao phải xem cả Top View và Side View khi gắn đầu ống?

A. Để có thêm shader.  
B. Vì mỗi góc nhìn xóa bớt polygon.  
C. Vì điểm cuối có thể đúng theo một trục nhưng lệch theo trục khác.  
D. Vì Blender chỉ render khi ở Side View.

**Đáp án:** C. **Giải thích:** Đường cong là đối tượng không gian 3D, một phép chiếu không đủ để xác định vị trí.

### Câu 5

Ống trông quá dày so với bình chứa. Điều chỉnh nào hợp lý nhất?

A. Xóa bình.  
B. Giảm `Bevel Depth` của Curve.  
C. Tăng Exposure.  
D. Bật Auto Keyframe.

**Đáp án:** B. **Giải thích:** Bevel Depth quy định kích thước tiết diện ống.

## 11. Tổng kết

Bézier Curve thích hợp để dựng ống cơ khí có tuyến cong mềm và độ dày nhất quán. Kết quả tốt nhất đến từ **điểm nối đúng vị trí, handle tự nhiên và đầu ống có cổ kết nối thật**.
