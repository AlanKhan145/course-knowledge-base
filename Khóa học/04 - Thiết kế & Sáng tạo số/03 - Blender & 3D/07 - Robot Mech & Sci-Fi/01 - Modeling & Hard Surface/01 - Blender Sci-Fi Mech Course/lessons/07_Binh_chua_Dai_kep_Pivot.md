# Bài 07 — Dựng bình chứa, vòng đai giữ và sử dụng Pivot Point

## 1. Tóm tắt

Hệ bình chứa là một cụm hình trụ bố trí phía sau robot. Để không giống cylinder thô, bình cần có đầu vát, các dải kim loại ôm thân và đai kết nối vào backpack. Bài học này cũng giải thích `Median Point` và `Individual Origins` khi biến đổi nhiều vùng cùng lúc.

## 2. Mục tiêu học tập

- Dựng bình chứa bằng `Cylinder`, xác định trục, chiều cao và vị trí.
- Tạo hai đầu bình nở hoặc thu hợp lý từ các mặt nắp.
- Phân biệt `Median Point` và `Individual Origins` trong phép scale/rotate.
- Tạo dải đai từ các edge/face loop và nhân bản ở các độ cao khác nhau.
- Bổ sung đai ngang kết nối bình với ba lô.

## 3. Tạo bình hình trụ

Vào Edit Mode của mesh thích hợp, `Shift + A > Mesh > Cylinder`. Nếu đang sử dụng Mirror và `Clipping`, hãy đưa hình trụ khỏi mặt đối xứng trước khi chỉnh chiều cao; có thể tắt Clipping trong chốc lát nếu cần, rồi bật lại. Dùng `S` thu nhỏ đường kính và `S`, `Z` kéo dài bình theo chiều đứng. Dùng `Numpad 3` nhìn bên để đặt trục bình đứng, `Numpad 7` nhìn trên để căn khoảng cách với backpack.

Đặt bình sao cho phần thân có đủ không gian cho hai đai giữ; chiều cao không lấn qua các bộ phận khác. Tránh để bình xuyên hoàn toàn qua vỏ ba lô: phải nhìn thấy phần bên ngoài và chỗ nối.

## 4. Tạo miệng và đáy bình

Trong Face Select, chọn mặt nắp trên và dưới. Khi extrude hai nắp rồi dùng `S` điều chỉnh kích thước, hiệu ứng có thể khác nhau tùy `Transform Pivot Point`:

- `Median Point`: các vùng được biến đổi quanh một tâm chung của lựa chọn; phù hợp khi muốn dời hoặc scale cả cụm như một tổng thể.
- `Individual Origins`: mỗi phần/face được biến đổi quanh tâm riêng; hữu ích khi muốn thu hoặc nở hai mặt nắp một cách độc lập.

Quy trình tham khảo: chọn hai mặt nắp, `E` extrude ra khỏi bình ở hướng phù hợp; sau đó chuyển sang `Individual Origins`, dùng `S` để thu hoặc nở mỗi mặt, tạo chuyển tiếp hình học. Quan sát profile để đầu bình không phình quá lớn. Nếu cần hai nắp di chuyển ngược chiều nhau, thao tác riêng hoặc dùng các trục/normal phù hợp thay vì giả định một lệnh extrude sẽ luôn kéo đúng cả hai.

Sau khi hoàn thiện đầu bình, có thể chọn các cạnh hoặc mặt nắp để tạo bevel nhẹ giúp ánh sáng bắt vào vùng chuyển cấp.

## 5. Dựng đai kẹp ôm thân bình

Một đai kim loại nên có **chiều rộng** dọc bình và **độ dày** nhô khỏi bề mặt. Ở vị trí cần đai, chọn edge loop vòng quanh bình (`Alt + Click` nếu topology cho phép) hoặc dải mặt hẹp. Nhân bản vùng chọn bằng `Shift + D`, đưa đến vị trí mong muốn trên `Z`; dùng `S`, `Z` điều chỉnh độ rộng dọc trục.

Nếu chỉ nhân bản một edge loop, phần hình học có thể chưa tạo thành bề mặt đai. Cần bổ sung mặt hoặc extrude để có dải vật thể rõ ràng. Nếu đã có dải mặt, dùng `E` và `S`, `Shift + Z` để mở rộng theo mặt phẳng ngang, nghĩa là scale X/Y mà giữ nguyên kích thước theo Z. Lặp lại cho vòng đai thứ hai, giữ khoảng cách đủ lớn để cả hai hiện rõ.

Sau mỗi lần duplicate, di chuột lên đai và nhấn `L` để bảo đảm đang chọn đúng đảo geometry, không kéo theo cả bình.

## 6. Đai ngang nối vào ba lô

Chọn một đai có sẵn, `Shift + D` nhân bản và xoay `R` theo trục phù hợp, có thể dùng một góc vuông khi muốn tạo dải nằm ngang. Trước khi xoay, kiểm tra Pivot đang là `Median Point` nếu muốn cả dải quay quanh tâm chung. Nếu đang ở `Individual Origins`, các phần tách rời có thể tự xoay quanh mình và tạo kết quả khó dự đoán.

Đưa đai ngang sang vị trí vừa nối bình vừa chạm backpack. Nhìn từ Top View để kiểm tra độ ăn khớp. Nếu một đầu không vừa, chọn hàng đỉnh ở đầu đó và di chuyển độc lập theo trục `Y` hoặc `X` để tạo biến thể phù hợp.

## 7. Kiểm tra bề mặt và độ dày

Chuyển về Object Mode và dùng `Shade Smooth` nếu phù hợp cho bình có mặt tròn. Các đai giữ nên được giữ cảm giác kim loại cứng; bevel nhỏ và shading sạch sẽ tốt hơn làm mọi mặt trở nên mềm nhũn. Trong Edit Mode, `A` rồi `Shift + N` tính lại normals khi cần.

## 8. Thực hành

Dựng một bình có hai nắp định hình, ít nhất hai vòng đai và một dải gắn bình vào ba lô. Kiểm tra Pivot bằng cách thử xoay hai đai một lần trong `Individual Origins`, sau đó hoàn tác và xoay trong `Median Point`; mô tả bằng hai câu sự khác nhau. Lưu `07_tank_and_straps.blend`.

## 9. Câu hỏi ôn tập

### Câu 1

Dùng `Individual Origins` khi biến đổi hai mặt nắp bình mang lại điều gì?

A. Cả hai mặt bắt buộc xoay quanh 3D Cursor.  
B. Mesh được chuyển thành Curve.  
C. Mỗi mặt có thể được scale quanh tâm riêng.  
D. Modifier bị xóa.

**Đáp án:** C. **Giải thích:** Individual Origins biến đổi các thành phần quanh tâm tương ứng.

### Câu 2

Cần kéo dài một cylinder theo chiều đứng, thao tác nào phù hợp?

A. `S`, `Z`.  
B. `R`, `X`.  
C. `G`, `Y`.  
D. `P`.

**Đáp án:** A. **Giải thích:** Scale theo Z thay đổi chiều cao bình.

### Câu 3

`S`, `Shift + Z` trong thao tác Scale có ý nghĩa gì?

A. Chỉ scale Z.  
B. Ẩn trục X.  
C. Làm vật thể biến mất.  
D. Không thay đổi trục Z, scale trong mặt phẳng XY.

**Đáp án:** D. **Giải thích:** Shift+Z loại trục Z khỏi ràng buộc scale, để lại X/Y.

### Câu 4

Vì sao chỉ nhân bản một edge loop chưa chắc tạo được một đai có bề mặt?

A. Vì loop luôn tự xóa.  
B. Vì cạnh đơn thuần chưa có bề rộng và thể tích của đai.  
C. Vì đai phải dùng camera.  
D. Vì Cylinder không có cạnh.

**Đáp án:** B. **Giải thích:** Cần tạo dải mặt và độ dày, không chỉ một vòng cạnh.

### Câu 5

Khi một dải gồm nhiều phần bị xoay riêng rẽ ngoài ý muốn, nên kiểm tra điều gì trước?

A. Số đèn trong cảnh.  
B. Clip Start của camera.  
C. Transform Pivot Point.  
D. Tên của material.

**Đáp án:** C. **Giải thích:** Pivot Point quyết định tâm biến đổi và có thể khiến các phần quay quanh tâm riêng.

## 10. Tổng kết

Bình chứa đẹp phải có tỷ lệ hợp lý, đầu bình rõ hình khối và đai giữ đủ độ dày. Pivot Point là một công cụ thiết yếu để biến đổi nhiều thành phần mà không làm rối cấu trúc.
