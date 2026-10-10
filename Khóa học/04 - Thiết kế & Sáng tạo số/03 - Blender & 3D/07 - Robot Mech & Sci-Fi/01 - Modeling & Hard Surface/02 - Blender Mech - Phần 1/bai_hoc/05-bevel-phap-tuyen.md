# Bài 05. Inset, Bevel Modifier và kiểm tra pháp tuyến

## 1. Tóm tắt và mục tiêu

Các mảng giáp kim loại không nên sắc tuyệt đối ở mọi góc, nhưng cũng không nên bo tròn đồng loạt. `Bevel Modifier` tạo vát nhỏ có kiểm soát; `Face Orientation` và phép tính lại normals giúp tránh lỗi shading do mặt đảo chiều.

Sau bài này, bạn có thể tạo rãnh bằng Inset/Extrude, chỉnh `Bevel Modifier` và tìm lỗi normals.

## 2. Dựng hốc bằng Inset và Extrude

1. Trong Edit Mode, vào Face Select (`3` ở hàng phím số).
2. Chọn mặt muốn có panel lõm.
3. Nhấn `I`, kéo để tạo một viền nằm bên trong mặt.
4. Dùng `G` chỉnh vị trí mặt trong nếu cần khớp hình tham chiếu.
5. Nhấn `E`, kéo vào bên trong để tạo chiều sâu hốc.

Với nhiều mặt được chọn, `I` có tùy chọn `Individual` để Inset riêng từng mặt; nếu muốn khung liên tục, cần kiểm tra nó đang tắt. Gần đường đối xứng, tùy chọn `Boundary` của Inset cũng ảnh hưởng phần viền tiếp giáp Mirror.

## 3. Phân biệt Bevel thủ công và Bevel Modifier

| Phương pháp | Cách dùng | Khi nào phù hợp |
| --- | --- | --- |
| `Ctrl + B` trong Edit Mode | Vát trực tiếp cạnh/nhóm cạnh được chọn | Định hình silhouette và mép đặc biệt |
| `Bevel Modifier` | Tạo vát không phá hủy trên các cạnh đáp ứng điều kiện | Bo những mép kim loại nhỏ trên toàn object |

Thêm `Bevel Modifier` trong Modifier Properties, kiểm tra chế độ giới hạn bằng góc (`Angle`) để tránh làm tròn những chỗ chỉ đổi hướng rất nhẹ. Điều chỉnh `Amount` vừa phải và tăng số `Segments` nếu muốn phản chiếu mềm hơn. Trong thao tác mẫu, giá trị nhỏ như `0.004` từng được dùng; mức phù hợp luôn phụ thuộc kích thước mesh và đơn vị cảnh.

Có thể chọn `Shade Smooth` để bề mặt tròn trông mượt. `Shade Smooth` chỉ thay đổi cách nội suy shading, không làm tăng hình học thực.

## 4. Phát hiện và sửa mặt đảo chiều

Dùng `Viewport Overlays → Face Orientation`:

- Xanh ở phía ngoài thường biểu thị hướng mặt đúng.
- Đỏ ở phía ngoài báo hiệu cần kiểm tra các mặt có normal hướng vào trong.

Trong Edit Mode, chọn các mặt liên quan hoặc toàn mesh bằng `A`, rồi nhấn `Shift + N` (`Recalculate Outside`). Xoay nhìn các vùng có Inset/Extrude để bảo đảm không có shading bất thường. Hãy phân biệt lỗi normals với hốc tối do thiếu ánh sáng.

## 5. Tạo thanh giáp nhỏ bằng hình học liên kết

Một cách nhanh để tạo chi tiết phụ là chọn mặt sẵn có, `Shift + D` nhân bản trong Edit Mode, thu tỷ lệ bằng `S`, di chuyển `G` và `E` một chút để có độ dày. Khi dùng Mirror, kiểm tra `Clipping` để không bị kẹt ở giữa. Đưa chuột lên thành phần mới và nhấn `L` để chọn tất cả các đỉnh liên kết của phần đó trước khi nhân bản sang chỗ khác.

## 6. Thực hành, lỗi phổ biến và tổng kết

**Thực hành:** Tạo hai hốc panel phía sau; thêm `Bevel Modifier` bo viền rất nhẹ; nhân bản một thanh giáp nhỏ; sau cùng hiển thị Face Orientation và sửa nếu cần.

**Lỗi:** Bevel Amount quá lớn làm mép chồng nhau, nhất là trong hốc hẹp. Giảm Amount trước khi tăng Segments; tránh lạm dụng Shade Smooth để che topology lỗi.

**Ghi nhớ:** Bộ ba `Inset → Extrude → Bevel` tạo cảm giác mảng cơ khí có kết cấu; `Shift + N` xử lý các normal sai sau nhiều lần đùn.

## 7. Câu hỏi ôn tập

### Câu 1

Điểm khác biệt chính giữa Bevel Modifier và Ctrl + B là gì?

A. Modifier chỉ render Cycles  
B. Ctrl + B tự động tạo Armature  
C. Modifier cho phép điều chỉnh vát không phá hủy trên object  
D. Ctrl + B không tác động geometry  

**Đáp án:** C

**Giải thích:** Bevel Modifier vẫn giữ tham số để có thể sửa sau, còn thao tác Edit Mode thay đổi mesh trực tiếp.

### Câu 2

Bề ngoài của mặt hiện đỏ khi bật Face Orientation thường gợi ý vấn đề gì?

A. Tệp đã lưu lỗi  
B. Normal mặt có thể đang hướng ngược  
C. Camera bị khóa  
D. Âm thanh bị mất  

**Đáp án:** B

**Giải thích:** Màu đỏ ở phía ngoài thường báo mặt đang quay sai hướng.

### Câu 3

Tổ hợp nào thường dùng để tính lại hướng normal trong Edit Mode?

A. Ctrl + R  
B. Ctrl + J  
C. Shift + D  
D. Shift + N  

**Đáp án:** D

**Giải thích:** Shift + N là Recalculate Outside, thường sửa các mặt bị đảo.

### Câu 4

Muốn tạo vát nhỏ quanh phần lớn các cạnh gấp, nên ưu tiên công cụ nào?

A. Bevel Modifier giới hạn theo góc  
B. Video Sequence Editor  
C. Graph Editor  
D. Armature Edit  

**Đáp án:** A

**Giải thích:** Modifier theo góc cho phép xử lý đồng đều nhiều mép gấp của đầu robot.

### Câu 5

Vì sao không đặt Bevel Amount lớn tùy ý?

A. Nó tắt chế độ Edit  
B. Nó buộc phải dùng Cycles  
C. Có thể làm mép chồng lấn và méo chi tiết  
D. Nó làm mất ảnh tham chiếu  

**Đáp án:** C

**Giải thích:** Vát quá rộng gây giao nhau trên vùng hẹp và phá hình dáng ban đầu.
