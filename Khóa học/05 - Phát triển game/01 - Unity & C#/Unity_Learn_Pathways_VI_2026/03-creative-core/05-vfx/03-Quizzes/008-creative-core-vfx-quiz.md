# Bài 08 — Bài kiểm tra tổng hợp: Creative Core VFX

**Học phần:** Creative Core · VFX | **Loại:** Assessment tự luyện | **Phạm vi:** Particle System, environmental VFX, Burst, VFX Graph và tích hợp dự án

## 1. Hướng dẫn làm bài

Bài đánh giá gồm **16 câu trắc nghiệm** và **2 bài tình huống thực hành**. Chọn **một đáp án đúng nhất** trong mỗi câu trắc nghiệm. Nên hoàn thành câu hỏi trước khi xem file `009-dap-an-creative-core-vfx-quiz.md`; bộ câu hỏi này **không phải quiz chính thức của Unity Learn**.

Bài kiểm tra tập trung vào việc dự đoán kết quả cấu hình, phân biệt các cơ chế và đưa ra cách kiểm chứng, không chỉ thuộc tên module.

## 2. Phần A — Cấu trúc và tham số Particle System

### Câu 1

Bạn muốn tạo sương mù nhẹ quanh một con suối trong thời gian dài. Phương án nào phù hợp để bắt đầu?

A. Một Burst 5000 hạt rồi lập tức dừng.  
B. Continuous emission tốc độ vừa phải với lifetime và alpha phù hợp.  
C. Chỉ tăng Max Particles, không cần Emission.  
D. Tắt Renderer để giảm chi phí.

### Câu 2

Một hệ phát đều với `Rate over Time = 20` hạt/giây và lifetime khoảng 3 giây, chưa có giới hạn `Max Particles` hay Burst. Khi đạt trạng thái ổn định, số hạt sống xấp xỉ bằng bao nhiêu?

A. 6.7.  
B. 20.  
C. 60.  
D. 600.

### Câu 3

Module nào quyết định vùng và hướng ban đầu của việc phát hạt?

A. Shape.  
B. Color over Lifetime.  
C. Renderer.  
D. Noise.

### Câu 4

Điều nào mô tả đúng về `Simulation Space = World`?

A. Mỗi hạt bị khóa cố định theo emitter.  
B. Camera tự theo dõi particle.  
C. Mọi hạt đều phải có Rigidbody.  
D. Hạt đã phát được mô phỏng trong không gian thế giới.

## 3. Phần B — Thiết kế hiệu ứng môi trường và Burst

### Câu 5

Để làm tuyết rơi chậm với gió nhẹ theo trục X, bộ thay đổi nào có ý nghĩa nhất?

A. Xóa Shape và Emission.  
B. Giảm tốc độ rơi, thêm vận tốc X và nhiễu vừa phải.  
C. Bật Burst với thời gian sống bằng 0.  
D. Chỉ đổi tên prefab.

### Câu 6

Bạn muốn tạo một lần bùng nổ 30 hạt khi bấm nút. Cấu hình nào kiểm soát tốt nhất?

A. Bật Looping và Rate over Time = 30.  
B. Đặt Start Size = 30.  
C. Tắt Looping, đặt Rate over Time = 0, thêm Burst Count = 30 tại Time = 0.  
D. Chỉ tăng Max Particles = 30.

### Câu 7

Một Burst tự phát lại theo chu kỳ dù không có nút nhấn. Bạn nên kiểm tra gì trước?

A. Looping và số chu kỳ/thiết lập Burst.  
B. Màu UI Button.  
C. Vị trí AudioListener.  
D. Font của TextMeshPro.

### Câu 8

Nếu `Play()` đã kích hoạt Burst 20 hạt trong `Emission`, bạn lại gọi `Emit(20)` cùng lúc, kết quả thường cần lưu ý điều gì?

A. Hai API loại trừ nhau nên không phát.  
B. Hệ chuyển sang VFX Graph.  
C. Chỉ còn 1 hạt.  
D. Có thể xuất hiện hai đợt phát cộng dồn.

## 4. Phần C — VFX Graph

### Câu 9

Context nào chịu trách nhiệm thiết lập trạng thái lúc particle vừa sinh?

A. Output.  
B. Initialize.  
C. Update.  
D. Camera.

### Câu 10

Context `Output` trong VFX Graph chủ yếu điều khiển gì?

A. Cách hạt được biểu diễn và render.  
B. Điều kiện phát hiện va chạm gameplay trong mọi engine.  
C. Mọi dữ liệu âm thanh.  
D. Scene đang mở.

### Câu 11

Vì sao không nên mặc định dùng VFX Graph cho mọi dự án mobile?

A. VFX Graph không có các hạt.  
B. Mọi hệ mobile đều có compute GPU giống nhau.  
C. Pipeline, GPU/Compute Shader và hỗ trợ tính năng phải được xác nhận trên target.  
D. VFX Graph chỉ chạy khi bật Physics 2D.

### Câu 12

Bạn muốn thay đổi màu của nhiều instance mà không nhân bản graph. Chọn giải pháp nào?

A. Chỉnh camera clip plane.  
B. Chỉ đổi file tên graph.  
C. Thêm Collider cho mỗi hạt.  
D. Expose một property trên Blackboard và chỉnh ở instance.

## 5. Phần D — Debug, hiệu năng và dự án

### Câu 13

Hạt màu hồng sau khi chuyển project sang URP. Bước kiểm tra phù hợp nhất là gì?

A. Đặt Lifetime bằng 0.  
B. Kiểm tra shader/material có tương thích render pipeline không.  
C. Thêm toàn bộ đèn Directional Light.  
D. Xóa tất cả Camera.

### Câu 14

Điều nào làm hiệu ứng hạt trong suốt có thể gây GPU bottleneck?

A. Nhiều quad lớn phủ chồng cùng pixel.  
B. Tên prefab dài.  
C. Scene có chú thích.  
D. Đặt object dưới folder Assets/VFX.

### Câu 15

Ngay sau khi kích hoạt Burst, game hủy GameObject chứa Particle System. Lỗi nào có khả năng xuất hiện?

A. Tốc độ phát tăng vĩnh viễn.  
B. Camera tự dừng.  
C. Hiệu ứng bị cắt trước khi hoàn thành.  
D. Unity tạo một graph mới.

### Câu 16

Phương pháp nào đáng tin cậy hơn để kết luận bản tối ưu đã tốt hơn?

A. Chỉ nhìn số lượng line C#.  
B. Luôn đo trong Scene view nhưng thay đổi camera mỗi lần.  
C. So sánh với video demo trên máy khác mà không có thiết lập.  
D. Đo trong cùng điều kiện và ưu tiên build trên phần cứng đích, đồng thời xem chất lượng hình ảnh.

## 6. Phần E — Tình huống thực hành

### Tình huống 1 — Thiết kế VFX cho đài phun nước

Một scene có đài phun nước chạy liên tục. Khi người chơi ném vật vào hồ, bạn cần thêm splash tức thời.

**Yêu cầu:**

1. Phác thảo hai Particle System khác nhau về Emission, Shape, Lifetime và Velocity.
2. Mô tả điều kiện để kích hoạt splash đúng một lần khi vật chạm nước.
3. Đề xuất hai phép thử để tránh hạt xuất hiện ngoài ý muốn.
4. Ghi một rủi ro hiệu năng và giải pháp kiểm tra thực tế.

### Tình huống 2 — Chọn Particle System hay VFX Graph

Dự án có hai mục tiêu: (a) hiệu ứng bụi nhỏ khi người chơi bước trên đất; (b) bão hạt lớn trong một khu vực rộng cho PC. Người quản lý yêu cầu hiệu ứng dễ chỉnh và phải duy trì FPS mục tiêu.

**Yêu cầu:**

1. Chọn giải pháp ban đầu cho từng mục tiêu và nêu lý do.
2. Phác họa sơ đồ xử lý của VFX Graph cho bão hạt.
3. Đề xuất kế hoạch đo với ít nhất hai mức hạt và cùng góc camera.
4. Nêu điều kiện có thể khiến lựa chọn ban đầu phải thay đổi.

## 7. Thang đánh giá tự luyện

- **16 câu trắc nghiệm:** 4 điểm/câu, tối đa 64 điểm.
- **Hai tình huống:** 18 điểm/tình huống, tổng 36 điểm. Chấm theo phân tích yêu cầu (6), giải pháp đúng kỹ thuật (6), kiểm thử và giải thích (6).
- **Tổng:** 100 điểm. Mốc 80 điểm thể hiện nắm vững kiến thức; từ 60 đến 79 nên củng cố phần thiếu; dưới 60 nên thực hành lại các module trọng tâm. Đây là **ngưỡng tự học đề xuất**, không phải xếp loại của Unity.

## 8. Tài liệu để ôn tập

- [Creative Core VFX — Unity Learn](https://learn.unity.com/course/creative-core-vfx)
- [Particle System modules — Unity 6.3](https://docs.unity.com/en-us/engine/6000.3/manual/visual-effects/particle-systems/particle-system-modules)
- [Visual Effect Graph — Unity 6.3](https://docs.unity.com/en-us/engine/6000.3/manual/visual-effects/vfxgraph)
- [ParticleSystem API — Unity 6.3](https://docs.unity.com/en-us/engine/6000.3/script-reference/unityengine/particlesystem)

*Đề và thang chấm là bộ đánh giá mới phục vụ tự học, không phải bản sao bài thi chính thức.*
