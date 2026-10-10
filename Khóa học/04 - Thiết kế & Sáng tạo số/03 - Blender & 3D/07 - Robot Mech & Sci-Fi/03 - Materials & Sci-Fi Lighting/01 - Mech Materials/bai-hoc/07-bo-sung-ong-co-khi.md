# Bài 07 — Bổ sung ống cơ khí bằng nhân bản và chỉnh sửa mesh

## 1. Tóm tắt

Một chi tiết ống nhỏ nối hai vị trí cơ khí có thể làm phần thân robot thuyết phục hơn. Thay vì dựng lại từ đầu, có thể nhân bản một đoạn ống đã có ở cụm đầu, tách nó thành object riêng rồi kết hợp và chỉnh vị trí tại thân robot. Đây là chi tiết **tùy chọn** trong bước hoàn thiện model.

## 2. Mục tiêu học tập

- Dùng `H` để tạo không gian thao tác quanh vị trí thêm chi tiết.
- Nhân bản hình học đã có bằng `Shift + D`.
- Tách phần đang chọn bằng `P` → `Selection` và ghép object bằng `Ctrl + J` khi thích hợp.
- Dùng `G`, `E` và chỉnh kích thước để lắp một ống cơ khí vào đúng vị trí.

## 3. Chuẩn bị khu vực đặt ống

Quan sát phần thân nơi cần thêm một đường ống nhỏ. Tạm ẩn các mảng vỏ hoặc giáp bằng `H` để lộ không gian lắp. Chỉ ẩn những object làm vướng tầm nhìn; không xóa chúng.

Tìm một đoạn ống đã dựng hình trên model, chẳng hạn ở cụm đầu. Đoạn này sẽ đóng vai trò mẫu hình học. Nếu không có sẵn đoạn tương tự, bài thực hành này có thể được bỏ qua mà không ảnh hưởng hệ material đã hoàn thiện.

## 4. Nhân bản và tách ống

Chọn object chứa ống mẫu và nhấn `Tab` vào `Edit Mode`. Bỏ chọn toàn bộ nếu cần; trỏ chuột lên đoạn ống rồi nhấn `L` để chọn đúng đảo mesh. Nhấn `Shift + D` để nhân bản và di chuyển bản sao ra vị trí trống dễ nhìn.

Trong khi bản sao vẫn được chọn, nhấn `P` rồi chọn `Selection`. Blender tách phần mesh đang chọn thành một object riêng. Nhấn `Tab` về `Object Mode` và chọn object mới để kiểm tra rằng phần ống đã tách đúng, không mang theo những bộ phận đầu khác.

## 5. Kết hợp và định vị trên thân

Nếu cần ống nằm cùng một object chứa cụm nối hiện có, chọn object ống rồi giữ `Shift` chọn object đích, sau đó `Ctrl + J` để join. Object cuối cùng được chọn là object hoạt động và các material slot có thể được hợp nhất, vì vậy phải kiểm tra lại việc gán material sau thao tác.

Vào `Edit Mode` của object chứa ống, bỏ chọn hết, trỏ lên đoạn ống và nhấn `L`. Dùng `G` để đưa nó vào vị trí dọc thân, căn sao cho đầu ống đi vào các điểm lắp hợp lý thay vì lơ lửng giữa không khí. Dùng `S` để giảm kích thước nếu bản sao quá lớn.

## 6. Chỉnh đầu ống và hoàn tất

Chuyển sang chế độ chọn đỉnh (`Vertex Select`) hoặc mặt phù hợp. Chọn vòng đỉnh tại đầu ống; có thể dùng thao tác chọn vòng khi topology hỗ trợ. Nhấn `E` để extrude đoạn đầu, di chuyển theo trục phù hợp, chẳng hạn trục `X`, sao cho đầu ống ăn vào thân robot.

Lặp lại thao tác chỉnh vị trí/kích thước khi cần để đường ống có hướng hợp lý. Không ép phải đúng một trục cho mọi model; điều quan trọng là ống nối được vào cụm máy và không xuyên qua những vị trí vô lý.

Nhấn `Tab` trở về `Object Mode`, dùng `Alt + H` hiện các object đã ẩn. Xem model từ nhiều góc để chắc rằng ống không bị giáp che hoàn toàn và không lộ đầu hở bất thường. Nhấn `Ctrl + S`.

Nếu muốn kiểm tra bố cục tổng thể rõ hơn, có thể tắt **Overlays** trong viewport. Đây chỉ là điều chỉnh hiển thị, không thay đổi mesh hoặc shader.

## 7. Lỗi thường gặp

- **Nhân bản nhầm cả phần đầu:** ở `Edit Mode` cần chọn riêng đảo ống bằng `L` trước khi `Shift + D`.
- **Sau `P`, ống vẫn không thành object riêng:** kiểm tra có chọn `Selection` và thao tác trong `Edit Mode` hay không.
- **Join làm kết quả material thay đổi:** kiểm tra lại material slots của object sau `Ctrl + J`.
- **Ống bị lọt trong thân:** hiện lại giáp và chỉnh vị trí bằng góc nhìn bên để thấy mức giao cắt.

## 8. Thực hành ngắn

Lấy một đường ống có sẵn trên robot, nhân bản và lắp một chi tiết mới giữa hai khu vực kết cấu. Đầu ống cần kết thúc gần điểm lắp, kích thước cân đối và chất liệu đồng bộ với nhóm đường ống.

## 9. Câu hỏi ôn tập

**Câu 1.** Để nhân bản phần ống ngay trong `Edit Mode`, thao tác nào cần dùng sau khi chọn vùng ống?

A. `Alt + H`.  
B. `Shift + D`.  
C. `Ctrl + S`.  
D. `Ctrl + I`.

**Đáp án:** B. **Giải thích:** `Shift + D` nhân bản hình học đã chọn.

**Câu 2.** Muốn bản sao trở thành một object độc lập, cần thực hiện thao tác nào?

A. `H` rồi `Alt + H`.  
B. `G` rồi `S`.  
C. `Z` rồi `Rendered`.  
D. `P` → `Selection`.

**Đáp án:** D. **Giải thích:** Separate by Selection tách hình học đã chọn khỏi object hiện tại.

**Câu 3.** `Ctrl + J` phù hợp để làm gì?

A. Join các object đã chọn trong `Object Mode`.  
B. Tự tạo shader mới.  
C. Đảo lựa chọn các mặt.  
D. Tắt tất cả đèn.

**Đáp án:** A. **Giải thích:** Lệnh Join kết hợp nhiều object thành một object đang hoạt động.

**Câu 4.** Trong quá trình chỉnh đầu ống, vì sao sử dụng `E`?

A. Để lưu file.  
B. Để hiện các object bị ẩn.  
C. Để extrude thêm chiều dài từ vòng đỉnh/mặt đã chọn.  
D. Để đổi màu đèn sang đỏ.

**Đáp án:** C. **Giải thích:** Extrude tạo thêm hình học liền kề từ vùng đã chọn, giúp nối đoạn ống vào thân.

**Câu 5.** Vì sao phải hiện lại các object đã ẩn trước khi kết luận ống lắp đúng?

A. Vì material chỉ hoạt động khi ẩn object.  
B. Vì các mảng giáp có thể che ống hoặc tạo giao cắt không mong muốn.  
C. Vì sẽ tự sinh thêm ống.  
D. Vì mọi object đã ẩn sẽ bị xóa.

**Đáp án:** B. **Giải thích:** Vị trí chỉ đúng khi xét cùng toàn bộ hình học của robot.

## 10. Tổng kết

Một chi tiết cơ khí nhỏ có thể được bổ sung nhanh bằng chuỗi **chọn đảo mesh → duplicate → separate → join khi cần → định vị → extrude → kiểm tra**. Công đoạn này mang tính bổ sung hình học, không thay thế bước xây dựng vật liệu.
