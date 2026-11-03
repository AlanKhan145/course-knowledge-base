# Bài 05 — Xử lý đường cắt cứng bằng Soft Particles

## 1. Tóm tắt

Khi một quad hạt xuyên qua nền hoặc giao với vật thể 3D, mép giao nhau có thể tạo đường cắt rất sắc, khiến hiệu ứng bị tách khỏi cảnh. **Soft Particles** giúp làm mềm hạt ở vùng gần bề mặt giao nhau khi pipeline/output hỗ trợ.

## 2. Mục tiêu học tập

- Nhận diện hiện tượng hard intersection giữa hạt và mesh.
- Bật Soft Particles cho các output hạt thích hợp.
- Giải thích ảnh hưởng của khoảng cách fade lên độ mềm của giao điểm.
- Phân biệt xử lý giao điểm với việc chiếu decal lên bề mặt.

## 3. Vấn đề thị giác

Đặt Flash hoặc Cross cắt qua một mesh. Ở vùng giao, quad có thể lộ cạnh thẳng sắc không hợp với ánh sáng mềm. Hiện tượng này thấy rõ khi hiệu ứng đặt sát mặt đất không phẳng.

## 4. Thiết lập

Chọn `Output Particle` của Flash và bật tùy chọn **Soft Particle / Soft Particles** nếu phiên bản/output cung cấp. Thử tương tự với Cross và Sparks. Sau đó điều chỉnh tham số **Soft Particle Fade Distance** (tên có thể thay đổi theo phiên bản).

Khoảng fade điều khiển vùng chuyển từ thấy rõ sang mờ gần chỗ giao. Nếu **giảm khoảng fade**, vùng chuyển có xu hướng hẹp hơn, nên hạt giữ rõ hơn cho tới khi sát bề mặt; nếu tăng, hạt mềm dần trên vùng rộng hơn. Hãy quan sát trực tiếp thay vì chọn một giá trị cứng cho mọi cảnh.

## 5. Quy trình kiểm tra

1. Bố trí mesh có góc cạnh/gồ ghề và đặt Flash xuyên nhẹ qua mép.
2. Chụp hoặc ghi nhận kết quả khi Soft Particles **tắt**.
3. Bật Soft Particles và so sánh cùng góc camera.
4. Thay đổi Fade Distance, tìm điểm cân bằng giữa cạnh mềm và độ sáng còn lại.
5. Lặp lại với Cross và Sparks; mỗi lớp có thể cần fade khác nhau.

Nếu không thấy thay đổi, kiểm tra hỗ trợ **depth** của pipeline, cấu hình renderer và phiên bản VFX Graph; Soft Particles phụ thuộc khả năng so sánh độ sâu của hình học.

## 6. Soft Particles không thay cho Decal

Soft Particles làm mượt **giao điểm của hạt nhìn thấy trong không gian**, còn Decal dùng để biểu diễn **dấu/vết hiển thị theo hình học bề mặt**. Một hiệu ứng impact có thể cần cả hai: Flash mềm ở vùng chạm, vết đạn bám trên nền.

## 7. Thực hành

So sánh ba trạng thái: tắt Soft Particles, bật với khoảng fade ngắn và bật với khoảng fade dài. Viết một nhận xét về độ mềm, độ sáng và hiện tượng hạt bị mờ quá mức.

## 8. Câu hỏi ôn tập

### Câu 1

Soft Particles được dùng chủ yếu để xử lý hiện tượng nào?

A. Hard intersection giữa hạt và mesh  
B. Spawn quá nhiều hạt  
C. Thiếu texture hình chữ X  
D. Thiếu Color Property

**Đáp án:** A. **Giải thích:** Tính năng này làm mềm vùng hạt giao với hình học.

### Câu 2

Khi tăng fade distance, kết quả thường là gì?

A. Hạt sinh liên tục  
B. Decal tự xoay 90°  
C. Đổi Render Pipeline  
D. Vùng chuyển mờ quanh giao điểm rộng hơn

**Đáp án:** D. **Giải thích:** Khoảng fade xác định phạm vi mềm dần khi gần bề mặt.

### Câu 3

Tại sao Soft Particles không thay thế hoàn toàn Decal?

A. Vì chỉ dùng được với màu trắng  
B. Vì nó không có nhiệm vụ tạo dấu vết chiếu lên hình học  
C. Vì chỉ có thể dùng trên 2D  
D. Vì khiến Count bằng 0

**Đáp án:** B. **Giải thích:** Hai kỹ thuật giải quyết hai vấn đề hiển thị khác nhau.

### Câu 4

Bật Soft Particles nhưng không thấy khác biệt, nên kiểm tra gì?

A. Số lần nhân bản nhóm  
B. Tên biến màu  
C. Hỗ trợ depth/pipeline và output hạt  
D. Góc xoay của Cross luôn phải là 0

**Đáp án:** C. **Giải thích:** Hiệu ứng fade phụ thuộc dữ liệu độ sâu và hỗ trợ của renderer.

### Câu 5

Cách so sánh trước/sau Soft Particles chính xác hơn là gì?

A. Dùng cùng vị trí, mesh và góc camera  
B. Chuyển sang Scene khác  
C. Tắt hết ánh sáng và mọi mesh  
D. Thay cùng lúc tất cả tham số

**Đáp án:** A. **Giải thích:** Cố định điều kiện quan sát giúp xác định tác dụng của một thay đổi.

## 9. Tổng kết

Soft Particles là bước hoàn thiện quan trọng khi hiệu ứng hạt chạm vào bề mặt. Nó giúp lớp Flash/Cross/Sparks hòa vào môi trường mà không tạo cảm giác bị cắt sắc.
