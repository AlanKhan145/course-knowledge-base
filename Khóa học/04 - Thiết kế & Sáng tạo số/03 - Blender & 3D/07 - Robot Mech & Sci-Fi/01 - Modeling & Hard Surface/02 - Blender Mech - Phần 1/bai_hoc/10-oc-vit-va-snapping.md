# Bài 10. Tạo ốc vít low-poly và đặt bằng Surface Snapping

## 1. Tóm tắt và mục tiêu

Ốc vít và đinh tán là chi tiết nhỏ nhưng có hiệu quả cao trong hard-surface. Thay vì tự căn thủ công từng ốc trên nhiều bề mặt nghiêng, có thể dùng `Snapping` để đặt và xoay theo mặt đích.

Mục tiêu: dựng một mẫu ốc vít có topology vừa phải; đặt ốc lên giáp bằng Face Snap; sao chép ốc nhiều lần mà vẫn giữ đúng hướng.

## 2. Dựng một ốc vít cơ bản

1. Trong Edit Mode của object phù hợp, thêm `Mesh → Circle`.
2. Mở bảng **Add Circle** ngay sau khi thêm, giảm số đỉnh từ giá trị mặc định sang một lượng thấp phù hợp. Ví dụ mẫu dùng khoảng **12 đỉnh** thay vì 32.
3. Dùng `S` thu nhỏ Circle theo kích thước ốc.
4. Dùng `E` để tạo thành ốc có chiều cao; có thể `S` một vòng đầu để tạo viền nhỏ.
5. Bịt mặt đầu bằng `F` nếu cần.
6. Dùng `Shift + N` để kiểm tra normals, rồi đặt mẫu ốc gần vị trí đầu tiên.

Không cần làm tròn dày đặc nếu ốc chỉ là chi tiết rất nhỏ trong game asset; hình dạng đọc được ở khoảng cách quan sát quan trọng hơn số polygon lớn.

## 3. Bật Snap to Face

1. Trong thanh công cụ của 3D Viewport, bật biểu tượng nam châm `Snap`.
2. Mở menu Snap và chọn **Face** thay cho `Increment`.
3. Trong các tùy chọn Snap, chọn điểm đối tượng dùng để bám thích hợp, ví dụ `Center` thay vì `Closest` khi tâm mẫu ốc cho kết quả ổn định hơn.
4. Bật **Align Rotation to Target** để ốc xoay khớp hướng của mặt giáp.
5. Dùng `G` để kiểm tra ốc di chuyển tới bề mặt; dùng `Esc` nếu cần hủy thử nghiệm.

Tên và vị trí tùy chọn Snap có thể khác chút ít giữa các giao diện Blender. Cần xác nhận tính năng bằng preview khi di chuyển, không chỉ dựa vào biểu tượng.

## 4. Nhân bản và gắn ốc hàng loạt

1. Chọn phần mesh của ốc bằng `L` khi trỏ chuột lên mẫu ốc.
2. Nhấn `Shift + D` để nhân bản.
3. Di chuyển bản sao đến các góc panel. Khi Snap to Face và Align Rotation đang bật, hướng ốc sẽ tự bám theo mặt được trỏ đến.
4. Lặp lại để đặt ốc tại các góc của khung và cạnh viền cần nhấn mạnh.
5. Dừng lại khi mật độ ốc đủ tạo nhịp thiết kế; không đặt ngẫu nhiên lên mọi mặt.

Với model đối xứng, cân nhắc Mirror các ốc ở hai phía thay vì nhân đôi thủ công không chính xác.

## 5. Kiểm tra chất lượng

- Ốc nằm **trên** bề mặt thay vì xuyên sâu vào giáp.
- Đỉnh ốc hướng theo normal của tấm giáp.
- Ốc trên các góc khác nhau không bị xoay ngẫu nhiên.
- Các ốc có kích thước tương đồng và số lượng hợp lý.
- Không có lớp hình học trùng ở mặt phẳng Mirror.

## 6. Thực hành và tổng kết

**Thực hành:** Tạo một ốc 12 đỉnh, thiết lập Face Snap và Align Rotation to Target, rồi nhân bản để gắn ốc lên ít nhất bốn mặt giáp có hướng khác nhau.

**Lỗi:** Nếu ốc bị lõm một nửa vào giáp, kiểm tra chế độ `Closest`/`Center` của Snap và vị trí tâm của mesh. Nếu ốc không xoay, xác nhận `Align Rotation to Target` đang bật.

**Ghi nhớ:** Một mẫu ốc low-poly, kết hợp với snapping chính xác, tạo hiệu quả cao hơn nhiều mẫu ốc nặng mesh được đặt thủ công.

## 7. Câu hỏi ôn tập

### Câu 1

Vì sao giảm số đỉnh Circle khi dựng ốc vít nhỏ?

A. Để tối ưu geometry khi chi tiết có kích thước nhỏ  
B. Để tự tạo rig  
C. Để ảnh tham chiếu sáng hơn  
D. Để thêm keyframe  

**Đáp án:** A

**Giải thích:** Ốc low-poly vẫn đọc được ở khoảng cách quan sát mà giảm số mặt không cần thiết.

### Câu 2

Chế độ Snap nào phù hợp để đặt ốc lên giáp nhiều hướng?

A. Increment  
B. Vertex chỉ theo lưới  
C. Grid Step  
D. Face  

**Đáp án:** D

**Giải thích:** Snap to Face bám vào bề mặt thay vì các khoảng bước cố định của lưới.

### Câu 3

Tùy chọn nào làm ốc xoay theo bề mặt đang snap?

A. Mirror Y  
B. Align Rotation to Target  
C. Bevel Segments  
D. Shade Flat  

**Đáp án:** B

**Giải thích:** Align Rotation to Target cho vật thể hướng theo normal của mặt đích.

### Câu 4

Nếu ốc xuyên một nửa vào giáp, nên kiểm tra yếu tố nào trước?

A. Nhạc nền  
B. Render engine  
C. Snap Base/Target và vị trí tâm mesh  
D. Số lượng frame  

**Đáp án:** C

**Giải thích:** Điểm được dùng để snap không phù hợp có thể khiến tâm ốc bám đúng nhưng hình học chui vào bề mặt.

### Câu 5

Thao tác nào giúp tạo các bản ốc lặp nhanh?

A. Shift + D  
B. Ctrl + S  
C. Numpad 7  
D. Shift + N  

**Đáp án:** A

**Giải thích:** Shift + D nhân bản phần mesh đang chọn.
