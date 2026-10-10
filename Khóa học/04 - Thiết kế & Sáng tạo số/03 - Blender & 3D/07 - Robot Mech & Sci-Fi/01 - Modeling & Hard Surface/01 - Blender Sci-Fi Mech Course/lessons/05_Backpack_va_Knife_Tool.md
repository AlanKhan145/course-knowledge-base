# Bài 05 — Dựng khối chính ba lô và giải quyết topology bằng Knife Tool

## 1. Tóm tắt

Backpack là khối cơ khí gắn sau lưng robot, có nhiệm vụ tạo chiều sâu silhouette và làm nền cho bình chứa, hộp phụ và ống dẫn. Phần thân ba lô ban đầu được dựng từ một mặt nhân bản, sau đó điều chỉnh bằng extrude, bevel và loop. Khi loop không chạy được qua những vùng cạnh phức tạp, `Knife Tool` là công cụ thay thế có kiểm soát.

## 2. Mục tiêu học tập

- Tạo khối ba lô từ phần mặt của torso bằng Duplicate và Extrude.
- Sửa silhouette theo Top/Side/Front View.
- Nhận biết trường hợp bevel gây giao cắt hoặc làm loop không đi qua.
- Dùng `H`, `Shift + H`, `Alt + H` để cô lập chi tiết cần chỉnh.
- Tạo vết cắt bằng Knife và chuyển thành loop hỗ trợ dựng hình.

## 3. Tạo phôi ba lô

Trong Edit Mode của đối tượng thân, chọn một mặt hướng về phía sau. Nhấn `Shift + D` và dịch chuyển mặt được nhân bản lên vị trí sẽ trở thành thành ba lô. Chuyển `Numpad 3` nhìn bên, dùng `G`, `S` điều chỉnh tỉ lệ và vị trí. Dùng `Numpad 7` nhìn trên để căn bề ngang, luôn đối chiếu khoảng hở với lưng robot.

Sau khi xác định mặt nền, nhấn `E` để đùn thành khối có chiều dày. Dùng các đỉnh ở góc (`Vertex Select`, `B`) để kéo một cạnh xuống hoặc vào trong, tạo dáng giáp xiên. Có thể thêm `Ctrl + R` để đặt một đường hỗ trợ cho vùng thay đổi độ dốc.

Ở các mép ngoài, sử dụng bevel vừa đủ. Nếu mức bevel lớn làm bề mặt vượt qua vùng mong muốn, hoàn tác và giảm bớt. Các góc xiên của backpack nên có nét cứng đặc trưng, không nên bo tròn đồng loạt.

## 4. Vấn đề topology khi Loop Cut không hoạt động

`Ctrl + R` thường hoạt động tốt trên dải mặt quads. Tuy nhiên, khi ba lô đã có bevel và hình dạng đổi tiết diện, mạng cạnh không còn là dải quads khép kín. Con trỏ có thể không hiện vòng cắt xuyên qua vùng cần sửa.

Để dễ quan sát, trong Edit Mode di chuột lên cụm ba lô rồi nhấn `L` chọn phần geometry liên thông. `Shift + H` giấu những phần không chọn, chỉ để lại backpack. Khi đã cô lập, chuyển `Numpad 3` nhìn bên và bật Wireframe. Từ đó, dùng Knife để vẽ những đường cắt mới qua các mặt phù hợp.

## 5. Dùng Knife Tool để tạo đường cắt xuyên mặt

1. Nhấn `K` để vào `Knife Tool` trong Edit Mode.
2. Chọn góc nhìn vuông góc với hướng muốn cắt, ví dụ `Numpad 3`.
3. Kiểm tra tùy chọn **Cut Through** của Knife nếu muốn đường cắt tác động lên cả mặt khuất. Trong nhiều cấu hình Blender, phím `C` bật/tắt tùy chọn này; hãy xác nhận bằng dòng hướng dẫn của công cụ.
4. Nếu công cụ đang giới hạn góc, kiểm tra tùy chọn angle constraint (thường chuyển bằng `Z` ở Knife). Không nhầm với menu shading `Z` khi chưa kích hoạt Knife.
5. Nhấp để đặt điểm đầu, điểm cuối của đường cắt; nhấn `Enter` để xác nhận.
6. Lặp lại nếu cần cắt hai vùng song song. Thoát Knife rồi kiểm tra các điểm cắt trong Wireframe.
7. Chọn cạnh/đỉnh mới và dùng `G` theo trục để khớp hình góc vát dự định.
8. Khi vùng topology đã thuận lợi, thử `Ctrl + R` để tạo thêm các dải hỗ trợ chính xác hơn.

**Lưu ý:** Cut Through có thể cắt các mặt phía sau mà bạn không để ý. Sau mỗi lần cắt, xoay mô hình hoặc xem mặt sau để chắc chắn không tạo đường cắt dư.

## 6. Tạo các dải và hộp phụ nhỏ trên backpack

Từ một mặt bên backpack, `Shift + D` tạo một phiến nhỏ, dùng `S` điều chỉnh tỷ lệ rồi `E` tạo bề dày. Nhân bản phiến này theo các vị trí khác nhau để hình thành cụm gờ cơ khí. Nếu các chi tiết là đảo geometry trong cùng một object, dùng `L` trước khi nhân bản cả cụm.

Cuối cùng, `A` và `Shift + N` để nhất quán normals, `Alt + H` để hiện lại các phần đã giấu. Quan sát không gian giữa ba lô với thân: chi tiết không được va xuyên nhau bất thường.

## 7. Lỗi thường gặp

| Lỗi | Nguyên nhân | Khắc phục |
| --- | --- | --- |
| Không thể thêm loop | Topology không tạo vòng quads hợp lệ | Dùng Knife hoặc sắp lại mặt, sau đó thử Loop Cut |
| Knife chỉ cắt mặt trước | Chưa bật Cut Through khi cần | Kiểm tra tùy chọn và quan sát các mặt sau |
| Bevel làm mép bị phình | Width quá lớn hoặc cạnh giao nhau | Giảm width, sắp lại vị trí loop |
| Một chi tiết khác bị chỉnh nhầm | Không cô lập phần ba lô | `L` chọn cụm và `Shift + H` |
| Các đối tượng biến mất sau chỉnh | Đã giấu phần chưa chọn | `Alt + H` để hiện lại |

## 8. Thực hành

Dựng khối ba lô chính phía sau torso, ít nhất một cạnh xiên, hai dải cắt bổ trợ và ba gờ nhỏ. Hãy kiểm tra đường cắt từ cả trước/sau, lưu `05_backpack_body.blend`.

## 9. Câu hỏi ôn tập

### Câu 1

Vì sao `Ctrl + R` có thể không tạo được loop qua một mặt ba lô đã nhiều bevel?

A. Blender không hỗ trợ robot.  
B. Đang chọn mặt sau.  
C. Đèn bị tắt.  
D. Topology không còn dải quads thích hợp.

**Đáp án:** D. **Giải thích:** Loop Cut phụ thuộc đường đi topology hợp lệ.

### Câu 2

Lệnh nào giấu phần chưa chọn và giữ lại cụm ba lô cần chỉnh?

A. `Shift + H`.  
B. `Alt + H`.  
C. `Ctrl + J`.  
D. `E`.

**Đáp án:** A. **Giải thích:** Hide Unselected giúp cô lập phần đang chọn.

### Câu 3

Khi dùng Knife muốn vết cắt đi qua các mặt khuất, cần quan tâm tùy chọn gì?

A. Subdivision.  
B. Proportional Editing.  
C. Cut Through.  
D. Motion Paths.

**Đáp án:** C. **Giải thích:** Cut Through quy định Knife có tác động xuyên mặt hay không.

### Câu 4

Lệnh nào giúp hiện lại geometry đã ẩn trong Edit Mode?

A. `L`.  
B. `Alt + H`.  
C. `Ctrl + B`.  
D. `P`.

**Đáp án:** B. **Giải thích:** Alt+H hoàn tác việc ẩn các phần hình học.

### Câu 5

Tại sao nên quan sát mặt sau sau khi dùng Knife với Cut Through?

A. Để đổi màu Blender.  
B. Vì Knife tự thêm camera.  
C. Vì chỉ có mặt sau mới có bevel.  
D. Để phát hiện đường cắt thừa trên hình học khuất.

**Đáp án:** D. **Giải thích:** Cut Through có thể tác động lên các mặt không nhìn thấy ở góc hiện tại.

## 10. Tổng kết

Backpack nên được dựng theo thứ tự **khối lớn → góc xiên → đường cắt → chi tiết nhỏ**. `Knife Tool` đặc biệt hữu ích khi topology đã vượt khả năng của Loop Cut, nhưng phải dùng cẩn thận để giữ mạng lưới sạch.
