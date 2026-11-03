# Bài 08 — Lab: Ghép hiệu ứng Impact VFX hoàn chỉnh

## 1. Tổng quan

Xây dựng một hiệu ứng va chạm nhiều lớp bằng Unity VFX Graph: **Flash → Cross → Sparks → Decal**. Mỗi lớp dùng một hệ thống hạt riêng để có thể tinh chỉnh kích thước, màu, lifetime và output độc lập.

## 2. Mục tiêu

- Tạo graph có bốn nhóm được đặt tên rõ ràng.
- Phối hợp chớp sáng cực ngắn với các hạt kéo dài hơn và dấu decal.
- Kiểm tra lỗi giao mesh, hướng decal, render order.
- Hoàn thiện một sản phẩm có thể kiểm chứng tại Scene.

## 3. Chuẩn bị

- Dự án **URP** có gói **Visual Effect Graph** tương thích.
- Một Scene thử với nền phẳng và mesh gồ ghề hoặc có góc cạnh.
- Một texture vết va chạm PNG có alpha, tự tạo hoặc được phép sử dụng.
- Cảnh/đối tượng chứa Visual Effect đã trỏ vào graph cần dựng.

## 4. Quy trình thực hiện

### 4.1. Tạo lớp Flash

Trong graph, đặt `Single Burst Count = 1`, không vận tốc, lifetime khoảng `0.102 s`; output dùng additive. Kết hợp `Set Size = 4` với size curve từ 1 xuống 0, ở chế độ Multiply. Tạo color property cho chớp màu vàng cam và gradient giảm alpha theo lifetime.

### 4.2. Tạo lớp Cross

Sao chép Flash thành nhóm `Cross`: Count = 2, Scale X khoảng 0.1. Lấy `Spawn Index`, dùng nhánh để đặt góc Z là 45° hoặc 135°. Xác nhận hai vệt cắt nhau tại tâm.

### 4.3. Tạo lớp Sparks

Sao chép thành `Sparks`: Count khoảng 20, spawn trong vùng hình cầu radius khoảng 0.1, lifetime tối đa khoảng 0.4 s, size ngẫu nhiên 0.1–0.2. Thêm `Conform to Sphere`. Tùy kết quả, định hướng theo vận tốc và dùng Scale X khoảng 0.2 để tạo các vệt sáng.

### 4.4. Giảm cạnh cứng

Kiểm tra khi Flash/Cross/Sparks chạm mesh. Bật Soft Particles trên output thích hợp và tinh chỉnh fade distance để cân bằng độ mềm và độ sáng.

### 4.5. Tạo lớp Decal

Sao chép Flash thành `Decal`, thay `Output Particle Quad` bằng `Output Particle Decal Forward`. Kết nối block size/color cần thiết, dùng lifetime khoảng 3 s và thử size khoảng 1 để debug. Kiểm tra hướng chiếu (mốc X = −90° trong bố cục ví dụ), gán texture có alpha và màu phù hợp.

### 4.6. Sắp xếp thứ tự render

Đặt output decal render trước các hạt còn lại theo cấu hình tham chiếu. Quan sát xem Flash/Cross/Sparks còn xuất hiện tự nhiên ở trên vết impact không.

## 5. Checkpoint

| Giai đoạn | Kết quả bắt buộc quan sát |
| --- | --- |
| Flash | Một chớp sáng nhanh, không trôi |
| Cross | Hai vệt vuông góc gần đúng tạo hình X |
| Sparks | Nhiều hạt tỏa khỏi vùng tác động |
| Soft Particles | Giao tuyến với mesh bớt sắc |
| Decal | Dấu vết xuất hiện trên hình học phù hợp |
| Composite | Các lớp có thứ tự thị giác dễ đọc |

## 6. Kiểm thử và debug

Kiểm tra trên **nền phẳng**, **nền gồ ghề** và **vật thể có mép sắc**. Với mỗi môi trường, xem: Flash có nằm ở điểm va chạm không, Sparks có hướng chuyển động hợp lý không, vết decal có đúng bề mặt không, soft fade có làm hạt mất sáng quá mức không.

Mỗi lần chỉ sửa một nguyên nhân, theo chuỗi: **Spawn → Lifetime → Size → Color → Orientation → Render Order**. Nếu một output không tồn tại trong phiên bản đang dùng, ghi rõ phiên bản và xác minh hỗ trợ thay vì thay bằng API không có căn cứ.

## 7. Sản phẩm bàn giao

1. Asset VFX Graph với các nhóm `Flash`, `Cross`, `Sparks`, `Decal`.
2. Scene thử thể hiện hiệu ứng trên ít nhất hai loại bề mặt.
3. Ảnh hoặc clip ngắn so sánh trước/sau Soft Particles.
4. Bảng ghi giá trị đã chọn cho Count, Lifetime, Size, Color, Scale, Orientation và Render Order.

## 8. Definition of Done

- [ ] Không còn `Constant Spawn Rate` ngoài ý muốn ở các lớp impact.
- [ ] Flash tắt nhanh, có đường cong thu nhỏ/mờ dần.
- [ ] Cross có hai vệt, góc phân biệt bằng Spawn Index.
- [ ] Sparks có phân bố và chuyển động rõ.
- [ ] Giao điểm với mesh không lộ cạnh cứng quá mức.
- [ ] Decal hiện khi có bề mặt phù hợp, được căn hướng đúng.
- [ ] Thứ tự render cho kết quả thị giác nhất quán.
- [ ] Tham số đã ghi lại, có thể tái hiện hiệu ứng.

## 9. Câu hỏi ôn tập

### Câu 1

Thứ tự nào hợp lý nhất khi một lớp hạt không xuất hiện?

A. Chỉ sửa texture  
B. Chỉ tăng kích thước  
C. Xem Spawn, Lifetime và Output trước khi tối ưu màu  
D. Xóa tất cả hệ thống khác

**Đáp án:** C. **Giải thích:** Hệ thống phát và tồn tại hạt phải hoạt động trước khi xét chất lượng thẩm mỹ.

### Câu 2

Lớp nào nên để lại dấu rõ hơn sau khi Flash đã tắt?

A. Decal  
B. Cross  
C. Flash  
D. Burst Count

**Đáp án:** A. **Giải thích:** Decal thể hiện vết va chạm còn lại trên bề mặt.

### Câu 3

Khi vệt Sparks quá dày, điều chỉnh nào liên quan trực tiếp nhất đến hình dáng?

A. Render Order của Decal  
B. Texture của nền  
C. Rotation X của Decal  
D. Scale/hướng của Sparks

**Đáp án:** D. **Giải thích:** Tỷ lệ và hướng hạt quyết định dạng vệt của Sparks.

### Câu 4

Vì sao kiểm thử trên nền gồ ghề quan trọng?

A. Để buộc thay phiên bản Unity  
B. Để phát hiện lỗi giao hình học và phép chiếu decal  
C. Để kiểm tra font chữ  
D. Để tăng Count không giới hạn

**Đáp án:** B. **Giải thích:** Bề mặt phức tạp làm lộ vấn đề vốn khó thấy trên mặt phẳng.

### Câu 5

Vì sao phải ghi lại tham số sau khi hoàn thành?

A. Để xóa graph  
B. Để tăng FPS tự động  
C. Để tái hiện, so sánh và tinh chỉnh hiệu ứng có kiểm soát  
D. Để biến shader thành texture

**Đáp án:** C. **Giải thích:** Bộ tham số giúp kiểm chứng và tái tạo kết quả qua các lần thử.
