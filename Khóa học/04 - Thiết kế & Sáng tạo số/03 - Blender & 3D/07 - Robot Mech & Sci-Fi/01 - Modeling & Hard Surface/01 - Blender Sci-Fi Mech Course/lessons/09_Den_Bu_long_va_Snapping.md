# Bài 09 — Hoàn thiện thân robot bằng đèn, gờ vai và bu lông

## 1. Tóm tắt

Lớp hoàn thiện hard-surface tạo cảm giác sản phẩm được lắp ráp thực: các điểm đèn, khối trang trí nhỏ, gờ kim loại, lỗ thông gió và bu lông. Kỹ thuật chủ đạo là dùng lại geometry sẵn có, `Separate`, `Duplicate`, `Join` và `Snapping` để gắn nhiều chi tiết theo bề mặt. Bài này không đi vào vật liệu phát sáng hoàn chỉnh; trọng tâm là hình học đèn và bố trí chi tiết.

## 2. Mục tiêu học tập

- Nhân bản một cụm đèn từ mesh hiện có và tách thành object riêng.
- Giải thích vì sao một object đèn không nhất thiết phải kế thừa Mirror của thân.
- Lặp các cụm đèn/khối nhỏ có khoảng cách rõ ràng.
- Tạo cụm gờ vai có Inset, Extrude và bevel.
- Nhân bản bu lông, cấu hình Snap để đặt đúng bề mặt mà không đặt tùy tiện.

## 3. Tạo dãy đèn trước thân

Nếu mesh đầu robot đã có hình dạng đèn nhỏ, chọn object đó rồi vào Edit Mode. Di chuột lên phần đèn, `L` để chọn geometry liên thông, `Shift + D` nhân bản và kéo cụm đèn xuống. Nhấn `P > Selection` tách phần được nhân bản thành object độc lập. Trở về Object Mode, đặt tên chẳng hạn `Front_Lights`.

Lý do tách đối tượng là để có thể bố trí một dãy đèn cục bộ mà không bị Mirror nhân đôi ở phía ngoài ý muốn. Trong object đèn, vào Edit Mode, chọn toàn bộ geometry của đèn mới và chuyển nó xuống phần trước ngực/bụng robot bằng Front View. Sử dụng `Shift + D`, `Z` để tạo một hàng dọc có các khoảng cách tương đối đồng đều. Sang Side View, dịch toàn bộ dãy theo `Y` để chúng đặt sát mặt giáp nhưng không chìm hết vào mesh.

Nếu không có đèn mẫu, có thể dựng một khối nhỏ đơn giản làm placeholder. Việc gán vật liệu phát xạ (`Emission`) là một bước hoàn thiện vật liệu riêng, không bắt buộc để hoàn thành mục tiêu dựng hình này.

## 4. Tạo các khối trang trí nhỏ trên vỏ giáp

Trong Edit Mode, `Shift + A > Mesh > Cube`, thu rất nhỏ bằng `S`, chuyển đến mặt trước thân. Dùng Front View và Side View để căn cả chiều cao lẫn độ sâu. Nhân bản vài lần dọc một cạnh thích hợp. Đừng phủ kín bề mặt bằng hàng chục hộp giống nhau; một số cụm nhỏ đặt có chủ đích sẽ dễ đọc silhouette hơn.

Đối với chi tiết ở sát vai hoặc mép trên thân, nhân bản một mặt thích hợp bằng `Shift + D`, thu hẹp rồi `E` đùn ra thành gờ. Thêm một lần `E` nếu muốn tạo bậc, `S` điều chỉnh tiết diện, sau đó `I` tạo đường viền và `E` kéo vào thành rãnh. Nếu muốn hai gờ tương tự, dùng `L` chọn cụm rồi `Shift + D` sao chép dọc trục phù hợp.

## 5. Tái sử dụng bu lông và Snapping

Một đầu bu lông có thể xuất phát từ chi tiết sẵn có trên thân hoặc ba lô. Trong Edit Mode, di chuột lên cụm bu lông và `L`, `Shift + D` tạo bản sao, sau đó `P > Selection` để tách riêng nếu cần đặt bằng object độc lập.

Tại Object Mode, có thể dùng bu lông như object mẫu và nhân bản bằng `Shift + D`. Trong các trường hợp cần di chuyển bu lông trong cùng mesh thân, có thể kết hợp `Ctrl + J` (join objects cùng loại phù hợp) rồi chọn đảo geometry bằng `L`; tuy vậy, hãy cân nhắc vì join cũng làm thay đổi cách quản lý modifier/material và origin. Đối với quy trình dễ kiểm soát, giữ bu lông là object riêng cũng là lựa chọn hợp lệ.

Bật **Snapping** trên thanh header (biểu tượng nam châm) và chọn kiểu snap phù hợp, chẳng hạn tới Face khi gắn bu lông lên mặt vỏ. Bật các tùy chọn định hướng theo bề mặt khi cần để đầu bu lông không xiên sai góc. Nhấn `G` di chuyển vật thể đến cạnh hoặc góc dự kiến rồi nhân bản tiếp. Kiểm tra rằng đầu bu lông chạm vỏ mà không chìm quá sâu hoặc bay ra ngoài.

Bố trí bu lông tại các góc panel, đường ghép giáp, mép hộp lưu trữ và đầu thanh đỡ. Phân bố vừa đủ để mô tả cơ cấu lắp ráp; tránh đặt quá nhiều khiến robot rối thị giác.

## 6. Kiểm tra bố cục cuối

Quan sát tổng thể trong Solid View, lần lượt từ trước, sau, bên và góc ba phần tư. Các đèn phải xuất hiện đúng khu vực trước thân, không bị mirror ngoài ý muốn. Gờ vai cần có chiều sâu rõ ràng. Bu lông nên bám lên bề mặt và có sự lặp lại tương đối nhất quán về kích thước.

Lưu dự án bằng `Ctrl + S` sau khi bố cục đã ổn. Không cần áp dụng tất cả modifier chỉ để xem thành phẩm; giữ chúng còn chỉnh sửa được sẽ hữu ích hơn cho việc sửa hình khối.

## 7. Lỗi thường gặp

| Lỗi | Hướng xử lý |
| --- | --- |
| Đèn bị nhân sang bên không mong muốn | Kiểm tra Modifier của object đèn, tách khỏi mesh thân khi cần |
| Dãy đèn bị chìm vào vỏ | Kiểm tra Side View, chỉnh dịch theo Y |
| Bu lông không bám bề mặt | Kiểm tra Snap Target, Face và vị trí origin |
| Bu lông quay ngược hướng | Xem tuỳ chọn align rotation khi snap hoặc tự xoay theo normal |
| Các chi tiết nhỏ trông rối | Loại bỏ bớt bản sao, giữ nhịp điệu phân bố |

## 8. Thực hành

Tạo một dãy ba đèn phía trước, bốn khối nhỏ theo một đường panel, hai gờ cơ khí gần vai và một nhóm bu lông được đặt theo các góc/đường viền. Lưu `09_detail_pass.blend`.

## 9. Câu hỏi ôn tập

### Câu 1

Vì sao có thể cần tách cụm đèn thành object riêng?

A. Để mọi đèn biến thành camera.  
B. Để xóa toàn bộ UV.  
C. Để kiểm soát vị trí/modifier, tránh Mirror ngoài ý muốn.  
D. Để phóng to toàn cảnh.

**Đáp án:** C. **Giải thích:** Object riêng cho phép kiểm soát modifier và bố cục không phụ thuộc mesh thân.

### Câu 2

Lệnh nào tách phần geometry đang chọn thành một object mới trong Edit Mode?

A. `P > Selection`.  
B. `Ctrl + R`.  
C. `I`.  
D. `Shift + N`.

**Đáp án:** A. **Giải thích:** Separate Selection tạo object mới từ vùng đã chọn.

### Câu 3

Tính năng nào hỗ trợ đặt bu lông bám sát mặt vỏ robot?

A. Dope Sheet.  
B. Graph Editor.  
C. Motion Tracking.  
D. Snapping tới Face.

**Đáp án:** D. **Giải thích:** Face Snapping đưa đối tượng đến bề mặt được nhắm tới.

### Câu 4

Nếu đầu bu lông đã chạm mặt nhưng nghiêng sai hướng, nên kiểm tra yếu tố nào?

A. Tên file ảnh.  
B. Tùy chọn xoay căn theo normal hoặc xoay đối tượng.  
C. Độ dài timeline.  
D. Âm lượng hệ thống.

**Đáp án:** B. **Giải thích:** Vị trí snap và định hướng vật thể là hai vấn đề khác nhau.

### Câu 5

Lý do tránh gắn bu lông quá dày trên mọi mặt robot là gì?

A. Vì Blender giới hạn chỉ có hai bu lông.  
B. Vì chúng làm hỏng màn hình.  
C. Vì mật độ cao khiến thiết kế rối và khó nhận biết mảng chính.  
D. Vì mọi bu lông đều tự xóa Mirror.

**Đáp án:** C. **Giải thích:** Chi tiết cần giúp giải thích cấu trúc, không lấn át silhouette.

## 10. Tổng kết

Đèn, gờ và bu lông là lớp ngôn ngữ cuối cùng để diễn tả cơ chế lắp ráp. Sử dụng tái chế geometry và Snapping sẽ hiệu quả hơn dựng từng chi tiết độc lập từ đầu, miễn giữ quyền kiểm soát về đối xứng và bố cục.
