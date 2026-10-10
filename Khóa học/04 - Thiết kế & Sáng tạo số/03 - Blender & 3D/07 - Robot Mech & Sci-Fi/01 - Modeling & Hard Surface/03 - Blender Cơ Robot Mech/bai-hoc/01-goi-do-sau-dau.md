# Bài 01 — Dựng gối đỡ cơ khí phía sau đầu robot

## 1. Tóm tắt

Phần cổ của robot cần có một **gối đỡ** vừa tạo kết nối trực quan với đầu, vừa che được khoảng trống lộ ra khi nhìn từ phía sau. Một cách dựng nhanh là bắt đầu từ `Cylinder`, bỏ những mặt không cần thiết, giữ lại phần hình học phù hợp rồi kéo dài nó thành giá đỡ. Bài này tập trung vào **kiểm soát hình học trong Edit Mode**, thay vì lắp ghép nhiều vật thể nguyên khối.

## 2. Mục tiêu học tập

Hoàn thành bài học, người học có thể:

- Thêm và đặt `Cylinder` vào vùng phía sau đầu robot.
- Giải thích vì sao cần tạm tắt `Clipping` của `Mirror Modifier` khi di chuyển hình học gần mặt phẳng đối xứng.
- Dùng `Wireframe`, `Box Select`, `Delete Vertices` để cắt một phần hình trụ.
- Dùng `Extrude`, `Fill`, `Duplicate` và `Shade Smooth` để tạo gối đỡ có chi tiết cơ khí.

## 3. Chuẩn bị khung làm việc

Mở một mô hình đầu robot trong Blender và lưu thành tệp thực hành. Nếu đầu được dựng đối xứng, phần mesh của đầu có thể đang sử dụng `Mirror Modifier` với `Clipping` bật. `Clipping` ngăn các đỉnh băng qua hoặc tách khỏi mặt phẳng gương khi đã bị giữ tại đó, rất hữu ích với đường giữa nhưng bất tiện khi di chuyển một số phần phụ gần mặt phẳng này.

Trong `Object Mode`, chọn đầu robot, sau đó `Tab` vào `Edit Mode`. Lưu ý: khi thêm một mesh mới bằng `Shift + A` trong `Edit Mode`, hình học mới thuộc **cùng một đối tượng** với đầu; đó là cách dựng được dùng trong giai đoạn này. Nếu muốn kiểm soát gối đỡ thành đối tượng độc lập về sau, hãy tách nó bằng `P > Selection`.

## 4. Tạo phần hình trụ ban đầu

1. Trong `Edit Mode`, mở `Shift + A > Mesh > Cylinder`.
2. Tại bảng `Mirror Modifier` của đối tượng đang chỉnh sửa, **tạm tắt `Clipping`** nếu hình trụ bị níu vào mặt phẳng gương.
3. Dùng `G` để dịch chuyển trụ ra đúng khu vực cần làm gối đỡ; dùng `S` để giảm kích thước.
4. Bật lại `Clipping` khi phần trụ không còn bị vướng vào mặt phẳng gương.
5. Nhấn `Numpad 1` để nhìn thẳng từ phía trước; dùng `R`, gõ `90`, `Enter` để đặt hướng trụ nếu cần. Trục quay phải phụ thuộc định hướng mesh thực tế; có thể dùng `R X 90` hoặc `R Y 90` để khóa trục chính xác.
6. Tiếp tục `G` và `S` để đưa khối trụ vào vị trí lõm phía sau đầu.

**Vì sao cần xoay trụ?** Hình trụ nguyên thủy có trục dọc. Cổ robot thường cần một đoạn đỡ đặt theo phương vuông góc hoặc xiên với vỏ đầu. Xoay trụ giúp hướng của vòng tròn đáy phù hợp với phương định làm khớp.

## 5. Loại bỏ phần hình học dư

Đầu tiên, kiểm tra phía trong hình trụ. Nếu có nắp hoặc mặt phẳng cắt ngang tại vị trí không cần thiết, chuyển sang `Face Select` (`3` ở hàng số), chọn mặt và `X > Faces` để xóa. Không xóa nhầm nắp ngoài cần giữ cho cấu trúc.

Sau đó tạo phần gối đỡ dạng nửa vòng:

1. Chuyển về `Front View` (`Numpad 1`).
2. Mở `Z > Wireframe` để nhìn và chọn được cả đỉnh phía sau.
3. Chuyển sang `Vertex Select` (phím `1` ở hàng số).
4. Dùng `Alt + A` để bỏ chọn; nhấn `B` và quét qua **nửa hình trụ** dự định bỏ.
5. Dùng `Numpad 3` kiểm tra `Side View`. Nếu còn một hàng đỉnh thuộc nửa cần xóa, giữ `Shift` rồi chọn bổ sung.
6. Nhấn `X > Vertices`. Phần còn lại phải là đoạn trụ mở, không còn các đỉnh thừa ở nửa đã cắt.

`Wireframe` quan trọng vì ở chế độ `Solid`, thao tác chọn có thể bỏ sót các đỉnh đang bị che. Kết hợp nhìn trước và nhìn bên giúp tránh tình trạng cắt đúng ở một góc nhưng sai ở góc khác.

## 6. Kéo dài và đóng các mặt cần thiết

Di chuột lên đoạn trụ đã giữ lại rồi nhấn `L` để chọn toàn bộ thành phần liên thông. Dùng `G` và `S` căn vị trí trong `Front View` và `Side View`.

Để kéo đoạn giá đỡ lên sát đầu robot:

1. `Alt + A` để bỏ chọn.
2. Ở `Wireframe` và `Vertex Select`, dùng `B` chọn **hàng đỉnh phía trên**.
3. Nhấn `E`, sau đó `Z`, kéo đoạn mới theo trục đứng về phía đầu.
4. Dùng `G Z` tinh chỉnh khoảng cách để khớp với lỗ gắn dự kiến.
5. Chọn những đỉnh tạo thành một vùng mặt mở, nhấn `F` để tạo mặt.
6. Với một vòng cạnh hoặc vòng đỉnh khép kín khác, chọn vòng rồi nhấn `F` để đóng mặt cần thiết.

`F` chỉ tạo một mặt từ các đỉnh được chọn; nó **không tự sửa toàn bộ topology**. Nếu mặt bị xoắn hoặc che ngang khe cần chuyển động, hoàn tác rồi chọn lại vùng biên thích hợp.

## 7. Thêm gờ và bu-lông mẫu

Một khớp mech thường có gờ gia cường và bu-lông. Không cần dựng lại từ đầu nếu bộ phận đầu đã có chi tiết thích hợp.

- Trỏ chuột lên một gờ hình học liên thông và nhấn `L`; dùng `Shift + D` để nhân bản, sau đó `G Z` và `S Z` để đặt và kéo dài gờ.
- Chọn một cụm bu-lông sẵn có bằng `L`, `Shift + D` để có một bản sao và đặt gần điểm tiếp xúc giữa gối đỡ với vỏ đầu.
- `Tab` về `Object Mode`, áp dụng `Shade Smooth` qua menu ngữ cảnh để làm mềm cách hiển thị bề mặt.
- Nhấn `Ctrl + S` lưu tệp.

`Shade Smooth` thay đổi cách nội suy shading; nó không tự tăng số polygon và không sửa các mặt bị hở.

## 8. Checkpoint và xử lý lỗi

**Checkpoint:** Nhìn từ trước, gối đỡ nằm đúng vị trí dưới/sau đầu; nhìn từ bên, không xuyên lộ rõ qua lớp vỏ không liên quan. Phần giá đã được kéo dài, mặt cần đóng đã đóng, và gờ gia cường không lệch khỏi thân.

| Hiện tượng | Nguyên nhân thường gặp | Cách xử lý |
| --- | --- | --- |
| Trụ không dịch được khỏi mặt phẳng gương | `Clipping` đang giữ các đỉnh ở đường giữa | Tạm tắt `Clipping`, di chuyển, rồi bật lại |
| Xóa một nửa nhưng vẫn còn mặt rác | Chọn sót đỉnh phía sau | Vào `Wireframe`, kiểm tra từ trước và bên, xóa phần dư |
| `E` kéo sai hướng | Chưa khóa trục | Dùng `E`, sau đó `Z` và quan sát góc nhìn cạnh |
| Mặt được `F` che kín khe cần để hở | Chọn không đúng đường biên | Undo rồi chỉ chọn các đỉnh bao quanh mặt muốn đóng |
| Mặt trông mềm nhưng vẫn nhấp nhô | Topology hoặc normal không hợp lý | Kiểm tra hình học và hướng mặt, không chỉ dựa vào `Shade Smooth` |

## 9. Thực hành ngắn

Tạo thêm một bản gờ gia cường ở vị trí đối xứng phù hợp. Kiểm tra kết quả từ cả `Front View`, `Side View` và góc nhìn phối cảnh. Lưu một phiên bản trước khi chỉnh sửa tiếp.

## 10. Câu hỏi ôn tập

**Câu 1.** Vì sao có lúc phải tắt `Clipping` của `Mirror Modifier`?

A. Để thêm vật liệu cho trụ.  
B. Để tự động chia trụ thành hai đối tượng.  
C. Để di chuyển hình học đang bị giữ tại mặt phẳng gương.  
D. Để tăng số mặt của trụ.

**Đáp án: C.** `Clipping` có thể chặn các đỉnh tách khỏi đường gương; tạm tắt khi cần định vị rồi bật lại.

**Câu 2.** Khi cắt nửa hình trụ mà phải chọn cả đỉnh bị che, cách nào phù hợp?

A. `Wireframe` kết hợp `Box Select`.  
B. Chỉ dùng `Shade Smooth`.  
C. Chỉ chuyển sang `Object Mode`.  
D. Chỉ dùng `Bevel Modifier`.

**Đáp án: A.** `Wireframe` giúp thấy và chọn đỉnh xuyên qua vật thể.

**Câu 3.** Tổ hợp nào kéo nhóm đỉnh theo trục Z từ vùng đã chọn?

A. `F` rồi `Z`.  
B. `I` rồi `Z`.  
C. `Shift + N`.  
D. `E` rồi `Z`.

**Đáp án: D.** `E` sinh phần hình học mới, `Z` khóa phép kéo theo trục đứng.

**Câu 4.** `L` khi trỏ lên một phần mesh trong `Edit Mode` dùng để làm gì?

A. Khóa layer.  
B. Chọn phần hình học liên thông.  
C. Bật ánh sáng.  
D. Tạo Loop Cut.

**Đáp án: B.** `L` lấy cụm đỉnh/cạnh/mặt có liên kết topology với phần dưới con trỏ.

**Câu 5.** Phát biểu đúng về `Shade Smooth` là gì?

A. Luôn tự đóng mặt hở.  
B. Luôn làm đôi số polygon.  
C. Làm mượt cách hiển thị shading nhưng không sửa topology.  
D. Thay thế hoàn toàn việc kiểm tra normals.

**Đáp án: C.** Smooth shading chỉ là cách nội suy độ sáng giữa các mặt, không thay đổi cấu trúc mesh.

## 11. Tổng kết

Một `Cylinder` có thể trở thành gối đỡ phức tạp thông qua chọn đỉnh chính xác, xóa nửa hình học, kéo dài và đóng mặt. Bài học cốt lõi là kiểm tra **cả hình khối lẫn topology** trước khi thêm chi tiết trang trí.
