# Bài 03 — Hoàn thiện mép giáp bằng Bevel, Inset và xử lý shading

## 1. Tóm tắt

Robot hard-surface sẽ thiếu cảm giác cơ khí nếu mọi cạnh đều sắc tuyệt đối, nhưng bevel quá lớn lại khiến giáp trông mềm và mất nét. Bài này tập trung vào hai nhóm thao tác: tạo các mép vát đúng vị trí và tạo các ô panel lồi/lõm bằng `Inset` kết hợp `Extrude`. Phần cuối hướng dẫn phát hiện shading artifacts và sửa normals/topology.

## 2. Mục tiêu học tập

- Áp dụng `Ctrl + B` cho cạnh và phân biệt với bevel đỉnh.
- Nhận biết tác động của `Bevel Modifier` khi dùng chế độ giới hạn theo góc.
- Tạo panel hình chữ nhật từ một mặt bằng `I` rồi `E`.
- Dùng `Shade Smooth` nhưng vẫn phát hiện được hiện tượng đổ bóng sai.
- Kiểm tra tính đồng phẳng, normals và mặt thừa khi mesh có artifact.

## 3. Khi nào dùng Bevel Modifier, khi nào bevel thủ công?

`Bevel Modifier` thuận tiện để tạo dải sáng chạy theo các cạnh đủ điều kiện. Nếu đặt `Limit Method` dựa trên góc, những cạnh có góc nhỏ hơn ngưỡng có thể không được vát; đây không hẳn là lỗi mà là cơ chế chọn cạnh của modifier.

Khi cần vát đúng một góc giáp hoặc một mép chuyển cấp, có thể chủ động chọn cạnh trong `Edge Select` (`2` hàng phím số), rồi `Ctrl + B`. Kéo chuột để chọn độ rộng bevel; lăn bánh xe để điều chỉnh số segment khi đang thao tác. Đối với vát một vertex đơn lẻ, lệnh thông dụng là `Ctrl + Shift + B`, không nên xem hai lệnh là tương đương.

Độ rộng bevel phải nhỏ hơn khoảng không giữa các cạnh lân cận để tránh phần vát chồng lên nhau. Nếu bevel lấn qua mặt khác, `Ctrl + Z` và thử một kích thước nhỏ hơn.

## 4. Tạo chi tiết panel từ một mặt

1. Trong `Edit Mode`, chọn `Face Select` (`3` hàng phím số).
2. Chọn một mặt ở giữa ngực, nơi sẽ có tấm panel nhỏ.
3. Nhấn `I` để tạo đường viền vào bên trong mặt; để lại biên quanh panel.
4. Nhấn `E`, đùn nhẹ ra ngoài để panel nổi hoặc vào trong để thành khe lõm.
5. Chuyển sang góc nhìn cạnh và ba phần tư, bảo đảm panel không bị quá cao so với vỏ thân.
6. Nếu muốn panel ở phần bụng hoặc cận đáy, thêm một loop (`Ctrl + R`) để tạo mặt phù hợp rồi thực hiện `I` và `E` tại vùng đó.

Một vài hốc trên thân được tạo bằng cách inset các mặt gần nhau. Khi thao tác trên nhiều mặt, cần chú ý Blender đang inset **theo từng mặt** hay **theo vùng chung**. Lựa chọn sai khiến xuất hiện đường biên không mong muốn hoặc những ô nhỏ rời rạc.

## 5. Shade Smooth và normals

Chọn đối tượng trong `Object Mode`, sử dụng lệnh `Shade Smooth` từ menu ngữ cảnh. Mặt tròn, bevel nhiều segment và ống dẫn thường trông đẹp hơn với shading mượt. Tuy nhiên, bề mặt giáp phẳng vẫn cần giữ cảm giác phẳng, nên kiểm tra kết quả cùng `Bevel` và các thiết lập normal/sharp edge thích hợp.

Nếu một vùng ngực xuất hiện vệt tối, loang sáng hay nếp gấp kỳ lạ, hãy kiểm tra theo thứ tự:

- Có mặt tam giác nhỏ hoặc mặt chồng nằm bên trong vùng phẳng hay không.
- Các vertex đáng lẽ cùng một mặt phẳng có bị lệch vị trí không.
- Normals có hướng ra ngoài nhất quán không: chọn mesh phù hợp và `Shift + N`.
- Có cần gộp lại một vùng **thực sự phẳng** thành một mặt mới bằng `F` hay không. Chỉ tạo mặt khi đường biên hợp lệ; một n-gon lớn cũng có thể sinh lỗi nếu không phẳng.
- Bevel đã tạo hình học chồng, quá hẹp hoặc gặp góc giao nhau phức tạp không.

`Shift + N` không thể tự sửa mọi vấn đề shading: nó chỉ tính lại hướng normal dựa trên hình học hiện có. Nếu mesh có mặt trùng, cạnh hở hoặc vùng bị méo, phải sửa geometry trước.

## 6. Minh họa quy trình giải quyết một vệt shading

Một mảng ngực có gờ nhô do extrude, gần cạnh xuất hiện hai tam giác nhỏ tạo ra vùng tối khi bật Shade Smooth. Bước đầu tiên là vào Edit Mode, quan sát mặt và cạnh trong Solid/Wireframe. Nếu các tam giác là mặt dư nằm trên cùng bề mặt phẳng, có thể xóa chúng hoặc xây lại mặt bằng biên thích hợp. Sau đó, dùng `Shift + N` và kiểm tra lại trong Object Mode.

Nếu không thể giữ mặt phẳng do hình học bị gấp, không nên ép tất cả thành một n-gon. Hãy bố trí thêm cạnh hợp lý để chia bề mặt thành các mặt nhỏ, đồng phẳng hơn.

## 7. Lỗi thường gặp

| Tình huống | Nguyên nhân có thể | Xử lý |
| --- | --- | --- |
| Bevel không xuất hiện ở một cạnh | Cạnh không đạt điều kiện góc của modifier | Bevel thủ công hoặc điều chỉnh giới hạn một cách có kiểm soát |
| Mép bevel chạm nhau | Bevel quá rộng | Giảm width, xem lại khoảng cách loop |
| Panel lõm bị tách đôi | Inset từng mặt thay vì theo vùng | Kiểm tra chế độ Inset và vùng đang chọn |
| Mảng phẳng bị loang sáng | Normal/topology không ổn | Kiểm tra mặt dư, đồng phẳng, `Shift + N` |
| Panel nổi xuyên vào lớp bên ngoài | Extrude sai chiều | Quan sát Side View, chỉnh lại bằng G theo trục |

## 8. Thực hành

Tạo một panel hình chữ nhật nhô nhẹ ở ngực, hai góc vát có chủ đích ở lớp giáp và một hốc nhỏ ở bụng. Bật `Shade Smooth`, kiểm tra không có loang sáng nổi bật. Lưu `03_chest_panels.blend`.

## 9. Câu hỏi ôn tập

### Câu 1

Khi một cạnh chưa đạt ngưỡng `Angle` của Bevel Modifier, điều gì có thể xảy ra?

A. Mesh tự biến mất.  
B. Cạnh không được modifier vát.  
C. Blender tự thêm UV.  
D. Modifier đổi sang Mirror.

**Đáp án:** B. **Giải thích:** Angle Limit quyết định những cạnh được vát theo điều kiện góc.

### Câu 2

Thao tác nào tạo một đường viền bên trong mặt trước khi đùn panel?

A. `I` (Inset).  
B. `H` (Hide).  
C. `Ctrl + J` (Join).  
D. `Shift + C`.

**Đáp án:** A. **Giải thích:** Inset thu vùng mặt vào trong và tạo dải viền mới.

### Câu 3

Khi `Shade Smooth` tạo vệt tối trên mặt giáp phẳng, cách tiếp cận đúng nhất là gì?

A. Luôn tăng cường độ đèn.  
B. Xóa cả thân robot.  
C. Chuyển ngay sang Sculpt Mode.  
D. Kiểm tra mặt dư, tính đồng phẳng và normals.

**Đáp án:** D. **Giải thích:** Shading artifacts thường liên quan đến geometry và normal, không chỉ ánh sáng.

### Câu 4

Lệnh nào dùng để tính lại hướng normals của phần mesh đã chọn trong Edit Mode?

A. `Ctrl + R`.  
B. `S`.  
C. `Shift + N`.  
D. `P`.

**Đáp án:** C. **Giải thích:** Recalculate Normals giúp các pháp tuyến có hướng nhất quán theo bề mặt.

### Câu 5

Tại sao không nên gộp vô điều kiện các mặt thành một n-gon lớn?

A. Vì n-gon không thể đổi tên.  
B. Vì mặt không phẳng hoặc biên phức tạp có thể tạo shading/topology không mong muốn.  
C. Vì điều đó tự xóa Mirror.  
D. Vì Blender không cho phép tạo mặt có hơn bốn cạnh.

**Đáp án:** B. **Giải thích:** N-gon có thể dùng được, nhưng cần hình học phù hợp và kiểm tra shading.

## 10. Tổng kết

`Bevel` tạo cảm giác vật liệu và cạnh bắt sáng; `Inset` cùng `Extrude` tạo ngôn ngữ panel sci-fi. Cả hai chỉ hiệu quả khi **hình học sạch và shading được kiểm tra**.
