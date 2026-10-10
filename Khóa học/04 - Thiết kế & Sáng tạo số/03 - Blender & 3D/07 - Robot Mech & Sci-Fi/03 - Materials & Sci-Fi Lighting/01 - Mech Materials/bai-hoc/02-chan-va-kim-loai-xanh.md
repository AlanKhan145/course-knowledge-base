# Bài 02 — Hoàn thiện chân và xây dựng vật liệu Blue Metal

## 1. Tóm tắt

Chân robot có nhiều lớp cấu tạo: vỏ kim loại, bu lông, đĩa nối, vòng cơ khí và khớp. Nếu tất cả đều có một màu, độ sâu hình khối sẽ kém rõ. Bài học này dùng `Dark Metal` cho các chi tiết chân, rồi nhân bản vật liệu sáng để tạo `Blue Metal` trên khớp nối.

## 2. Mục tiêu học tập

- Chọn chính xác các đảo mesh nhỏ sau khi loại trừ phần vỏ lớn.
- Kết hợp `Linked Selection`, `Face Select` và chọn vòng mặt.
- Tạo `Blue Metal` như một material độc lập thay vì sửa `Light Metal` dùng chung.
- Thiết lập màu xanh tham chiếu `#0070FF` qua `Color Ramp` trong mạng shader hiện có.

## 3. Phân bổ vật liệu cho chân

Chọn object chân rồi vào `Edit Mode`. Nếu vỏ chân gồm các đảo hình học lớn, trỏ vào từng đảo lớn và nhấn `L` để chọn. Khi các phần vỏ cần giữ sáng đã được chọn, nhấn `Ctrl + I` để lấy nhóm chi tiết còn lại như bu lông và miếng đệm tròn. Thêm slot `Dark Metal` và **Assign**.

Ở những vị trí mà đảo hình học không thể chọn trọn vẹn bằng `L`, chuyển sang `Face Select` và chọn trực tiếp những mặt ở viền hay rãnh. Có thể dùng `Shift` để cộng thêm mặt, và `Shift + Alt` kết hợp nhấp chuột trên topology phù hợp để chọn một vòng mặt. Gán `Dark Metal` cho những vòng sâu cần làm nổi độ tương phản.

Điều quan trọng là phải nhìn lại kết quả ở `Object Mode`: một bu lông tối trên nền vỏ sáng thường dễ đọc hơn một cụm chi tiết đồng màu.

## 4. Tạo material Blue Metal

### 4.1. Nhân bản từ Light Metal

Chọn object khớp nối có sẵn `Light Metal`. Vào `Edit Mode`, trỏ chuột lên phần khớp cần đổi và nhấn `L` để chọn các mặt liên kết. Trong `Material Properties`:

1. Thêm một material slot mới.
2. Chọn `Light Metal` làm vật liệu xuất phát.
3. Tạo bản sao material độc lập (thao tác tạo bản sao/single-user trong giao diện material, không chỉ đổi tên slot).
4. Đổi tên bản sao thành `Blue Metal`.
5. Chọn slot `Blue Metal` và nhấn **Assign** cho vùng khớp đang được chọn.

**Vì sao cần bản sao?** Nếu chỉ đổi màu một material dùng chung, những chỗ khác đang dùng `Light Metal` cũng có thể bị đổi theo. `Blue Metal` cần là một material riêng để chỉnh độc lập.

### 4.2. Điều chỉnh shader màu xanh

Chuyển sang `Shading Workspace`, chọn khớp và phóng gần để quan sát. Trong Shader Editor, thêm node **Color Ramp** bằng `Shift + A` rồi tìm `Color Ramp`.

Chèn nó vào đường tín hiệu màu đang cấp cho **Base Color** của shader hiện có. Giữ nguyên đầu vào màu/giá trị của mạng node hiện tại và chỉnh điểm sáng của ramp sang màu xanh mã `#0070FF`; điểm tối có thể giữ đen. Phương pháp này chuyển sắc sáng trong vật liệu gốc thành vùng xanh mà vẫn giữ các vùng tối của bề mặt.

Nếu network hiện tại khác cấu trúc dự kiến, cần kiểm tra các dây nối trước khi thêm node: `Color Ramp` phải nhận dữ liệu đầu vào thích hợp và đưa kết quả **Color** đến `Base Color`. Việc đặt node mà không nối đúng đường tín hiệu sẽ không tạo thay đổi mong muốn.

## 5. Hoàn thiện vùng trong của khớp

Một khớp nối không nhất thiết xanh toàn bộ. Quay về `Edit Mode`, chọn phần mặt ở tâm và các vòng mặt phía trong ở hai phía khớp, thêm `Dark Metal` nếu cần và bấm **Assign**. Sau đó chuyển lại `Object Mode`.

Kết quả hướng đến là **vành xanh ở ngoài – lõi tối ở trong**. Cách phối này giúp phân biệt bộ phận mang tính cơ khí với những mảng giáp đang dùng kim loại sáng.

## 6. Lưu ý và khắc phục lỗi

- **`Light Metal` ở nơi khác cũng xanh:** bản sao material chưa độc lập; kiểm tra lại datablock material được sửa.
- **Color Ramp không tác động:** kiểm tra node được nối đúng đường vào `Base Color` và có đầu vào hợp lệ.
- **Vùng giữa không tối:** xác minh đang chọn mặt trong, không phải vỏ ngoài.
- **Vòng mặt bị chọn sai:** topology không tạo loop như dự kiến; dùng chọn mặt từng nhóm để kiểm soát.

Lưu scene bằng `Ctrl + S`.

## 7. Thực hành ngắn

Trên một khớp cơ khí, tạo hai lớp vật liệu: vòng ngoài `Blue Metal` và lõi bên trong `Dark Metal`. Tạo thêm một nhóm bu lông tối trên chân, bảo đảm phần vỏ sáng không bị đổi màu.

## 8. Câu hỏi ôn tập

**Câu 1.** Sau khi chọn toàn bộ vỏ chân bằng `L`, cách nhanh nhất để lấy các đảo còn lại là gì?

A. Chọn `Rendered`.  
B. Nhấn `H`.  
C. Nhấn `Ctrl + I`.  
D. Nhấn `Ctrl + J`.

**Đáp án:** C. **Giải thích:** Invert Selection biến các phần vỏ đang chọn thành không chọn và lấy phần chi tiết còn lại.

**Câu 2.** Vì sao không nên sửa trực tiếp `Light Metal` đang được nhiều object sử dụng?

A. Vì vật liệu này không hỗ trợ node.  
B. Vì sửa vật liệu dùng chung có thể làm thay đổi tất cả vùng đang dùng nó.  
C. Vì `Light Metal` không thể có màu.  
D. Vì không thể sao chép vật liệu trong Blender.

**Đáp án:** B. **Giải thích:** Một datablock material được chia sẻ giữa nhiều object; bản sao độc lập giúp giữ nguyên những vùng cũ.

**Câu 3.** Màu xanh tham chiếu cho Blue Metal trong bài là gì?

A. `#FF0000`.  
B. `#303030`.  
C. `#00FF00`.  
D. `#0070FF`.

**Đáp án:** D. **Giải thích:** Điểm sáng của `Color Ramp` được thiết lập sang màu xanh `#0070FF`.

**Câu 4.** Sau khi chèn `Color Ramp` nhưng khớp không đổi màu, cần kiểm tra điều gì trước?

A. Kết nối node tới đường `Base Color` của shader.  
B. Tên object có chữ Blue hay không.  
C. Số camera trong scene.  
D. Vị trí con trỏ 3D.

**Đáp án:** A. **Giải thích:** Node chỉ có hiệu quả khi dữ liệu được kết nối đúng trong shader graph.

**Câu 5.** Tổ hợp phân vùng nào giúp phần khớp dễ đọc hình khối?

A. Toàn bộ khớp đen đồng nhất.  
B. Toàn bộ khớp phát sáng đỏ.  
C. Vành ngoài xanh và lõi trong tối.  
D. Xóa các mặt ở tâm khớp.

**Đáp án:** C. **Giải thích:** Tương phản giữa `Blue Metal` và `Dark Metal` nhấn mạnh cấu tạo theo lớp của khớp.

## 9. Tổng kết

`Dark Metal` làm rõ các chi tiết nhỏ trên chân; `Blue Metal` tạo điểm nhận diện cho khớp. Khi cần tạo biến thể vật liệu, hãy nhân bản datablock trước rồi mới chỉnh shader để tránh thay đổi ngoài ý muốn.
