# Bài 03 — Chỉnh mesh trang phục vừa nhân vật bằng Sculpt và Shrinkwrap

## 1. Tổng quan

Đồ được tải hoặc tách từ mẫu khác thường không vừa tỷ lệ cơ thể mới. Nếu gắn rig ngay, sai lệch vùng ngực, nách và hông sẽ tăng khi cử động. Mục tiêu là đưa trang phục tới trạng thái ôm hợp lý mà vẫn giữ nếp và chi tiết thiết kế.

## 2. Mục tiêu học tập

- Định vị, cân tỷ lệ và sắp origin trước khi bind.
- Sử dụng Sculpt với Grab/Elastic Deform một cách có kiểm soát.
- Phân biệt Shrinkwrap với chỉnh thủ công và tránh phá chi tiết mesh.

## 3. Nội dung bài học

### 3.1. Canh trang phục ở tư thế nghỉ

Chuyển nhân vật về tư thế đứng dễ đối chiếu. Chọn trang phục ở `Object Mode`, dùng `G`, `R`, `S` đưa mesh tới đúng vùng cơ thể. Quan sát lần lượt hình chiếu trước, cạnh và sau; bật `X-Ray` hoặc Wireframe khi cần.

Nếu phần mềm cho phép, dùng `Object > Set Origin > Origin to Geometry` để đặt origin có ích cho việc thao tác. Kiểm tra `Scale` trên mesh và rig; áp dụng `Ctrl + A > Scale` khi an toàn. Đừng vì muốn hết clipping mà ép toàn bộ váy dính sát da: phần chân váy cần khoảng trống để mô phỏng và di chuyển.

### 3.2. Điêu khắc cục bộ

Ở `Sculpt Mode`, dùng `Grab` để đẩy vải ra ngoài hoặc kéo mép vào đúng form. Với các dạng cọ đàn hồi, vùng ảnh hưởng rộng hơn nên có thể phù hợp chỉnh ngực/vai; chọn kích cỡ cọ vừa đủ, strength thấp và thao tác theo nhiều bước. Ở vùng nách, cạp, cổ áo, đường may, luôn kiểm tra góc phía trong.

Đối xứng X giúp xử lý các trang phục cân hai bên, nhưng nên **tắt symmetry** nếu chiếc áo thực tế bất đối xứng. Khi mesh tách thành nhiều island hoặc seam UV, chú ý không kéo rách đường tiếp giáp. Dùng isolate/local view hoặc ẩn phần cơ thể không cần thiết để tránh chọn nhầm.

### 3.3. Dùng Shrinkwrap có chọn lọc

`Shrinkwrap Modifier` có thể đẩy phần trang phục về bề mặt cơ thể dựa trên `Target`. Nó hữu ích để khớp nhanh áo rộng với torso, nhưng có thể làm phẳng nếp gấp, méo texture hoặc ép xuyên vùng phức tạp như cổ và nách.

Quy trình thận trọng: (1) nhân bản mesh làm bản dự phòng; (2) thêm Shrinkwrap với target cơ thể; (3) xem kết quả và điều chỉnh offset/influence; (4) lưu thành shape hoặc áp dụng một cách có chủ đích nếu chất lượng đạt; (5) trả lại form tự nhiên bằng Sculpt. Nếu mesh vốn đã khá vừa, chỉnh tay thường giữ chi tiết tốt hơn. Đừng coi Shrinkwrap là phương pháp duy nhất hoặc luôn an toàn.

### 3.4. Kiểm tra hình học trước rig

Bật pose chuẩn và các pose test. Quan sát xuyên mesh ở nách, háng, vai và đầu gối. Nếu dưới lớp quần áo có phần da hoàn toàn không thấy, có thể xử lý bằng bản sao hình học hoặc mask ở bước sau; nhưng đừng xóa da gốc không có bản lưu. Vải mô phỏng càng cần giữ khoảng cách ban đầu giữa lớp trang phục và collider.

## 4. Thực hành

**Nhiệm vụ:** Chỉnh một áo, váy hoặc áo choàng nhập từ mẫu khác vừa nhân vật. Chụp hoặc ghi nhận ba góc nhìn và bốn tư thế thử. Tạo bản dự phòng trước khi thử Shrinkwrap.

**Checkpoint:** Form cân đối; không méo đường may quan trọng; hai bên kiểm soát được symmetry; không có vùng xuyên mesh đáng kể khi nhân vật đứng.

## 5. Câu hỏi ôn tập

**Câu 1.** Với một trang phục bất đối xứng, cách sculpt nào phù hợp?

A. Luôn bật đối xứng
B. Xóa nửa còn lại
C. Tắt mirror tại vùng cần chỉnh riêng
D. Chỉ chỉnh theo trục Z

**Đáp án:** C. **Giải thích:** Đối xứng không phù hợp chi tiết khác nhau ở hai bên.

**Câu 2.** Nguy cơ chính khi Shrinkwrap một áo có nhiều nếp đẹp là gì?

A. Làm mất hoặc méo chi tiết bề mặt
B. Tự tạo thêm camera
C. Xóa rig
D. Đổi fps

**Đáp án:** A. **Giải thích:** Co về bề mặt có thể làm phẳng nếp và méo cấu trúc áo.

**Câu 3.** Tại sao phải kiểm tra nách khi chỉnh áo?

A. Vì nách chỉ để đặt đèn
B. Vì nách chứa keyframe âm thanh
C. Vì nách không có mesh
D. Vì chuyển động vai dễ làm phần áo chồng/xuyên

**Đáp án:** D. **Giải thích:** Các khớp làm thay đổi khoảng cách và hướng của bề mặt.

**Câu 4.** Lúc nào hợp lý để dùng Grab trong Sculpt?

A. Đổi tên Action
B. Nắn vị trí hình học cục bộ
C. Thêm Physics
D. Bake texture

**Đáp án:** B. **Giải thích:** Grab thay đổi hình khối trực tiếp để điều chỉnh form.

**Câu 5.** Thao tác nào giúp thử giải pháp mạnh mà không mất phiên bản cũ?

A. Nhân bản và lưu dự phòng mesh
B. Xóa tất cả vertex group
C. Áp dụng mọi modifier ngay
D. Ẩn Outliner

**Đáp án:** A. **Giải thích:** Có bản dự phòng cho phép quay lại nếu kết quả xấu.

## 6. Tổng kết

Canh tỷ lệ, sculpt cục bộ và dùng Shrinkwrap thận trọng sẽ tạo mesh có khoảng hở đúng, không phá form trước khi gắn vào rig.
