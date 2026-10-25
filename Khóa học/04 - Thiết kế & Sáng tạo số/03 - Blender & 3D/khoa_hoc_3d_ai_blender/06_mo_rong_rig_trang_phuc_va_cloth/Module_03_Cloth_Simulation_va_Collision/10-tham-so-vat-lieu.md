# Bài 10 — Điều chỉnh độ cứng, giảm chấn, Self Collision và chất lượng mô phỏng

## 1. Tổng quan

Một chiếc váy mỏng, quần short cứng và áo khoác dày không thể dùng cùng cảm giác vật liệu. Blender cung cấp nhiều tham số Physics để kiểm soát độ căng, nén, uốn, giảm chấn, trọng lượng và va chạm. Tinh chỉnh nên bắt đầu từ một thiết lập đơn giản rồi thay từng nhóm tham số.

## 2. Mục tiêu học tập

- Diễn giải tác dụng vật lý của các nhóm thông số quan trọng.
- Phân biệt Quality Steps với khối lượng và độ cứng.
- Lập quy trình so sánh preset có thể lặp lại.

## 3. Nội dung bài học

### 3.1. Các nhóm thông số cần biết

| Nhóm tham số | Mục đích | Dấu hiệu cần xem |
| --- | --- | --- |
| `Quality Steps` | Số bước giải/độ chính xác tương đối cho Cloth | Xuyên, rung, thời gian bake |
| `Mass` | Khối lượng/khối lượng trên vertex theo thiết lập | Quán tính, độ võng, phản ứng lực |
| `Tension/Compression` | Kháng kéo giãn và ép nén | Vải giãn hoặc xẹp không mong muốn |
| `Bending` | Kháng uốn gấp | Nếp gấp cứng hay mềm |
| `Damping` | Giảm dao động | Vải rung quá lâu hoặc đứng yên quá nhanh |
| `Collision Distance` | Khoảng cách bề mặt va chạm | Hở quá xa hoặc xuyên thân |
| `Self Collision` | Ngăn các vùng của cùng vải giao nhau | Váy tự xuyên khi xoay/fold |

Tăng độ cứng không đơn giản đồng nghĩa tạo một loại vải xác định, vì cảm giác còn tùy quy mô, mật độ lưới, damping và collision. Dùng preset (nếu phiên bản có) làm điểm xuất phát rồi chỉnh thủ công.

### 3.2. Chỉnh vải mềm và vải cứng

Với váy mềm hoặc áo choàng lụa: thử giảm độ chống uốn và chọn damping vừa phải để vạt phản ứng uyển chuyển. Với quần short hoặc áo khoác dày: tăng chống uốn, căng/nén khi cần giữ form; chỉnh damping để tránh rung vải quá mức. Mỗi lần thay đổi, chỉ điều chỉnh một nhóm và ghi chú kết quả.

Vật liệu quá mềm và lưới quá thưa có thể gãy thành các mặt phẳng lớn thay vì nếp mượt. Vật liệu rất cứng cộng với solver quality thấp có thể dễ lỗi; tăng quality vừa phải trước khi kết luận thông số vật liệu không đúng.

### 3.3. Collision và Self Collision

Bật `Self Collision` khi áo choàng có khả năng gấp lên chính nó, hoặc váy nhiều vạt có vùng dễ giao nhau. Tính năng này đòi hỏi nhiều phép tính hơn và không bảo đảm không lỗi nếu mesh vốn chồng mặt hay chuyển động quá nhanh. Với người làm beginner, có thể bắt đầu thử ở `Quality Steps = 7` hoặc `10` theo các ví dụ học thực hành, sau đó tăng khi cần — đây không phải giá trị bắt buộc cho mọi scene.

Nếu vùng vải hở quá xa cơ thể, kiểm tra khoảng cách va chạm của **cả** cloth và collider; không giảm tất cả về 0 vì có thể tăng xuyên lưới hoặc bất ổn. Nếu giật/nổ, tắt self-collision tạm thời để tách nguyên nhân, xác nhận scale và hình học rồi bật lại.

### 3.4. Quy trình kiểm nghiệm

Làm ba lượt bake với cùng animation: preset mềm, preset trung bình và preset cứng. Đặt tên thử nghiệm `soft_v01`, `medium_v01`, `stiff_v01`; ghi lại topology, quality, damping và những frame có clipping. Luôn xóa/giải phóng bake trước khi thay cấu hình. Kiểm tra kết quả trên chuyển động chân dài, không chỉ trong trạng thái đứng.

### 3.5. Thử keyframe Shrinking Factor ở đoạn khởi động

Một lựa chọn tinh chỉnh bổ sung là đặt keyframe cho tham số co vải (`Shrinking Factor`, nếu phiên bản và cấu hình Cloth đang dùng cung cấp). Trong bài thử minh họa, người thực hành có thể đặt giá trị khởi đầu **0** và thử tăng dần trong những frame đầu (ví dụ tới giá trị **1** ở đoạn 10–30 frame) rồi xem hình dạng vải thay đổi ra sao. Đây là một thí nghiệm điều chỉnh rest length/co vật liệu, **không phải thủ thuật tự động sửa clipping** và không có một giá trị phù hợp cho mọi nhân vật. Khi thay đổi tham số có keyframe, xóa cache cũ và mô phỏng lại từ frame đầu.

Ưu tiên sửa mesh, pin và collider trước khi cố bù lỗi bằng co vải.

## 4. Thực hành

**Nhiệm vụ:** Cùng một váy, so sánh hai cấu hình mềm và cứng và một phiên bản tăng Quality Steps. Ghi báo cáo ngắn 5–8 dòng: khác biệt nếp gấp, độ rung, xuyên thân, tốc độ tính toán.

**Checkpoint:** Giải thích được vì sao tăng chất lượng không thay thế sửa geometry; biết bật/tắt self-collision để khoanh vùng lỗi.

## 5. Câu hỏi ôn tập

**Câu 1.** Quality Steps chủ yếu tác động đến yếu tố nào?

A. Màu sắc
B. Độ chính xác/chi phí tính toán mô phỏng
C. Chất liệu UV
D. Tên xương

**Đáp án:** B. **Giải thích:** Chất lượng giải giúp kết quả ổn hơn nhưng tốn thời gian.

**Câu 2.** Thuộc tính nào trực tiếp chống việc vải gập quá dễ?

A. Bending stiffness
B. World Color
C. Texture Scale
D. Rig Name

**Đáp án:** A. **Giải thích:** Bending liên quan tới kháng uốn.

**Câu 3.** Self Collision xử lý vấn đề nào?

A. Vải xuyên camera
B. Chân bị trượt
C. Tóc đổi màu
D. Các phần của cùng tấm vải xuyên qua nhau

**Đáp án:** D. **Giải thích:** Nó xét va chạm nội bộ vải.

**Câu 4.** Để so sánh tác động của Damping, nên làm gì?

A. Đổi cả texture và rig
B. Đổi tất cả tham số đồng thời
C. Giữ các yếu tố khác cố định và chỉ thay damping
D. Xóa topology

**Đáp án:** C. **Giải thích:** Thí nghiệm một biến giúp nhận diện nguyên nhân.

**Câu 5.** Tăng mọi độ cứng lên rất cao có bảo đảm Cloth đẹp hơn không?

A. Có, luôn luôn
B. Không; còn phụ thuộc solver, lưới và chuyển động
C. Chỉ khi render Cycles
D. Chỉ khi có camera

**Đáp án:** B. **Giải thích:** Các tham số tương tác và có thể gây kết quả cứng, giật hoặc bất ổn.

## 6. Tổng kết

Hiểu từng nhóm tham số giúp tinh chỉnh có phương pháp. Tăng Quality Steps là công cụ hỗ trợ, không thay thế topology tốt, khoảng cách hợp lý hay animation sạch.
