# Bài 01. Khởi tạo dự án và chuẩn bị tài nguyên

## 1. Tóm tắt

Để dựng một robot Mech khoa học viễn tưởng, cần bắt đầu từ một dự án sạch, hình tham chiếu nhất quán và thao tác lưu tệp an toàn. Một mô hình đầu đẹp phụ thuộc nhiều vào tỷ lệ và bố cục trước khi thêm chi tiết.

**Mục tiêu học tập**

- Khởi tạo và lưu một dự án Blender mới.
- Phân biệt ảnh tham chiếu dùng để dựng hình với HDRI dùng để chiếu sáng.
- Xác định chính xác phạm vi công việc: dựng **phần đầu robot**, chưa dựng cổ, thân, rig hay animation.
- Thực hiện thành thạo các thao tác mở menu thêm đối tượng, xóa và lưu.

## 2. Hệ thống tài nguyên

| Tài nguyên | Công dụng | Ghi chú |
| --- | --- | --- |
| Ảnh tham chiếu mặt trước | Căn chiều rộng, tâm đối xứng, vị trí mắt | Ưu tiên góc nhìn trực giao |
| Ảnh tham chiếu bên | Căn độ sâu, độ nhô của khung giáp | Giữ cùng tỷ lệ với ảnh trước |
| Ảnh tham chiếu trên | Căn bề ngang, các ống và chi tiết trên đỉnh | Đối chiếu trục X–Y |
| HDRI môi trường từ Poly Haven | Ánh sáng, phản chiếu khi xử lý vật liệu và render | Chưa cần ở bước modeling |
| Âm thanh cơ khí từ Freesound | Có thể dùng cho chuyển động bước chân ở giai đoạn animation | Kiểm tra giấy phép từng âm thanh |

Có thể tải ảnh tham chiếu từ tài nguyên đi kèm của tác giả nếu truy cập được, hoặc dùng bộ ba ảnh có cùng tỷ lệ và hình dáng robot. HDRI mẫu được chuẩn bị ở dạng HDR 1K; nó không thay thế ảnh thiết kế cơ khí.

## 3. Khởi tạo tệp Blender

1. Mở Blender và tạo cảnh mới.
2. Chọn các đối tượng mặc định không cần dùng. Có thể dùng `A` để chọn toàn bộ, sau đó `X` và xác nhận xóa.
3. Tạo thư mục riêng cho dự án, chẳng hạn `mech-head/`.
4. Chọn **File → Save As** và lưu thành `mech_head_part01.blend`.
5. Trong quá trình dựng hình, nhấn `Ctrl + S` sau mỗi giai đoạn quan trọng.

Việc xóa Cube mặc định chỉ nhằm có một cảnh trống, không phải quy tắc bắt buộc của Blender. Sau đó chúng ta chủ động thêm một Cube mới để tạo thân khối đầu.

## 4. Những thao tác cần biết trước khi bắt đầu

| Phím / thao tác | Chức năng |
| --- | --- |
| `Shift + A` | Mở menu Add để thêm mesh, ảnh tham chiếu... |
| `G` | Di chuyển đối tượng / vùng chọn |
| `S` | Thay đổi tỷ lệ |
| `R` | Xoay |
| `Tab` | Chuyển giữa Object Mode và Edit Mode |
| `Ctrl + Z` | Hoàn tác |
| `Ctrl + S` | Lưu dự án |
| `Shift + S` | Mở menu Snap để định vị 3D Cursor |

Khi nhấn `G`, `S` hoặc `R`, có thể nhấn tiếp `X`, `Y` hoặc `Z` để khóa thao tác trên trục tương ứng. Phím số ở hàng trên dùng để chọn **Vertex/Edge/Face** trong Edit Mode, khác với **Numpad** dùng đổi góc nhìn.

## 5. Thực hành ngắn

1. Tạo thư mục dự án có thư mục con `references/`.
2. Lưu ba ảnh tham chiếu trước, bên và trên nếu đã có.
3. Tạo cảnh trống và lưu `mech_head_part01.blend`.
4. Thử thêm một Cube bằng `Shift + A → Mesh → Cube`, nhấn `G`, `S`, rồi hoàn tác để trở về cảnh sạch.

**Tiêu chí hoàn thành:** File `.blend` có thể mở lại, cảnh sạch và ba ảnh tham chiếu đã được chuẩn bị cho bài kế tiếp.

## 6. Lỗi thường gặp và tổng kết

- Chưa lưu tệp trước khi modeling, dẫn đến mất thao tác khi ứng dụng đóng bất ngờ.
- Dùng ảnh mặt trước và mặt bên khác tỷ lệ, khiến bộ phận không khớp ở không gian 3D.
- Coi HDRI là texture bề mặt robot: HDRI chủ yếu đóng vai trò ánh sáng môi trường.

**Ghi nhớ:** Bước chuẩn bị đặt nền tảng cho mọi thao tác kỹ thuật về sau. Không cần thêm vật liệu hay dựng rig ngay lúc này.

## 7. Câu hỏi ôn tập

### Câu 1

Tài nguyên nào quan trọng nhất để căn kích thước đầu robot từ nhiều phía?

A. Ba ảnh tham chiếu trước, bên, trên  
B. Tệp âm thanh bước chân  
C. Một ảnh HDRI bất kỳ  
D. Một bản render duy nhất ở góc phối cảnh  

**Đáp án:** A

**Giải thích:** Các góc nhìn trực giao cho phép kiểm tra chiều rộng, chiều sâu và sự tương quan giữa các chi tiết.

### Câu 2

Chức năng chính của HDRI ở dự án này là gì?

A. Định nghĩa topology  
B. Cung cấp ánh sáng và phản chiếu môi trường  
C. Thay thế Armature  
D. Cắt trực tiếp mesh  

**Đáp án:** B

**Giải thích:** HDRI phục vụ ánh sáng/render; không phải công cụ để đặt các đỉnh theo thiết kế.

### Câu 3

Tổ hợp phím nào dùng để lưu nhanh file Blender?

A. Shift + A  
B. Ctrl + J  
C. Ctrl + S  
D. Ctrl + R  

**Đáp án:** C

**Giải thích:** Ctrl + S lưu các thay đổi hiện tại của dự án.

### Câu 4

Khi muốn thêm Cube mới, người học mở menu nào?

A. Shift + A  
B. Ctrl + B  
C. Alt + A  
D. Shift + N  

**Đáp án:** A

**Giải thích:** Menu Add được mở bằng Shift + A trong viewport.

### Câu 5

Tại sao chưa dựng rig ở giai đoạn này?

A. Blender không hỗ trợ rig robot  
B. Rig chỉ chạy trong Eevee  
C. Rig phải được tạo trước mesh  
D. Phạm vi hiện tại là modeling phần đầu; rig nằm ở giai đoạn sau  

**Đáp án:** D

**Giải thích:** Rigging yêu cầu hình học đã được chuẩn bị và nằm ngoài phạm vi dựng đầu.
