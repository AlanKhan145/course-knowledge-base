# Bài 14 — Bài kiểm tra tổng hợp kiến thức Lighting – Unity Creative Core

*Creative Core · Lighting · Unity 6.3 · Creative Core: Lighting quiz*

## 1. Mục tiêu và hướng dẫn

Bài đánh giá này kiểm tra khả năng **lựa chọn phương pháp chiếu sáng**, không chỉ ghi nhớ tên công cụ. Hãy thực hiện một lượt trả lời mà không mở Inspector, sau đó kiểm nghiệm các câu khiến bạn phân vân bằng scene Unity nhỏ.

Bài gồm **12 câu tự biên soạn** chia thành phần trắc nghiệm, đúng/sai và xử lý tình huống. Đây là bài đánh giá ôn luyện độc lập, **không phải bộ câu hỏi hay thang chấm chính thức của Unity Learn**. Đáp án không đặt trong đề để bạn có thể tự làm trước khi đối chiếu với kết quả thực hành.

## 2. Phần A — Trắc nghiệm (mỗi câu chọn một đáp án tốt nhất)

### Câu 1

Đèn nào thường phù hợp nhất để mô phỏng ánh nắng chiếu trên một quảng trường rộng?

A. Point Light.  
B. Spot Light.  
C. Directional Light.  
D. Reflection Probe.

### Câu 2

Vì sao một Mesh static đã bake vẫn có thể sáng đúng trong khi không có realtime Light chiếu lên nó?

A. Lightmap lưu kết quả chiếu sáng trước đó.  
B. Collider tự tạo ánh sáng.  
C. Animator giữ trạng thái màu.  
D. Mesh có UV0 nên tự phát sáng.

### Câu 3

Trong URP, Scene có một nhân vật chạy qua căn phòng dùng Baked GI. Nhân vật không nhận màu chiếu sáng gián tiếp thích hợp. Giải pháp nào cần được xét trước?

A. Đổi Collider thành Trigger.  
B. Bổ sung Light Probes và kiểm tra Renderer.  
C. Tăng Shadow Distance vô hạn.  
D. Tắt mọi Material.

### Câu 4

Bề mặt kim loại trong gallery phản xạ Skybox ngoài trời. Công cụ nào hỗ trợ tạo phản xạ môi trường cục bộ?

A. Animation Clip.  
B. Lightmap UV.  
C. Light Probe Group.  
D. Reflection Probe.

### Câu 5

Điều gì đúng nhất về Mixed Lighting?

A. Mọi ảnh hưởng của Light thay đổi tức thì khi runtime.  
B. Có thể kết hợp direct realtime với GI/bóng tính trước tùy Lighting Mode.  
C. Không dùng được trong dự án có vật thể động.  
D. Hoàn toàn giống Reflection Probe.

### Câu 6

Vì sao tăng Depth Bias quá lớn có thể làm bóng trông không thật?

A. Làm bóng tách khỏi tiếp xúc giữa vật và nền.  
B. Tăng số mesh renderer.  
C. Làm vật phát sáng.  
D. Làm âm thanh bị trễ.

### Câu 7

Với mô hình FBX có texture màu tốt nhưng lỗi bake thành từng mảng, bước nào hợp lý?

A. Chỉ tăng ánh sáng mặt trời.  
B. Xóa camera.  
C. Kiểm tra UV cho lightmap, overlap và padding.  
D. Thêm nhiều bloom.

### Câu 8

Để làm nổi đường viền của một mô hình sản phẩm tách khỏi hậu cảnh, bạn sẽ thử nguồn nào trước?

A. Fill Light phía trước.  
B. Rim/Back Light phía sau.  
C. Skybox đen tuyệt đối.  
D. Light Probe bên dưới sàn.

## 3. Phần B — Đúng hay sai (giải thích ngắn)

9. Material có Emission bật đồng nghĩa vật đó tự tạo bóng và chiếu sáng realtime lên mọi vật xung quanh.

10. Skybox có thể đóng góp ánh sáng môi trường, nhưng không đồng nghĩa với toàn bộ ánh sáng trực tiếp trong scene.

11. Light Probes có thể giúp renderer chuyển động nhận lighting từ môi trường bake mà không buộc mọi vật động mang một lightmap cố định.

12. Khi so sánh hiệu quả của hai cấu hình shadow, nên giữ góc camera, exposure và chất lượng render không đổi.

## 4. Phần C — Tình huống thực hành

**Tình huống 1: Phòng trưng bày.** Một quả cầu màu đỏ trên bục được spotlight chiếu sáng, nhưng mặt bên của nó tối đen và kim loại phản chiếu bầu trời. Hãy chỉ ra **hai hệ thống ánh sáng khác nhau** cần kiểm tra và giải thích vai trò riêng của từng hệ thống.

**Tình huống 2: Đường phố đêm.** Các đèn đường được bake nhưng người chơi chạy qua không nhận ánh sáng phù hợp. Hãy đề xuất một cấu hình dùng Light Probes và nói rõ khi nào cần thêm đèn realtime/mixed.

**Tình huống 3: Tối ưu.** Một Scene có nhiều đèn Spot realtime casting shadows gây giảm frame rate. Hãy đề xuất kế hoạch thử nghiệm theo thứ tự để tìm mức tối ưu phù hợp mà vẫn giữ được ý đồ ánh sáng.

## 5. Tiêu chí tự chấm

Phần A: 8 điểm, mỗi đáp án phù hợp được 1 điểm. Phần B: 4 điểm, mỗi giải thích đúng và nêu ví dụ được 1 điểm. Phần C: 6 điểm, mỗi tình huống được tối đa 2 điểm theo mức **xác định đúng hiện tượng → chọn đúng hệ thống → giải thích cách kiểm chứng**. Tổng điểm tự đánh giá tối đa **18**; không gán thang điểm này cho khóa chính thức của Unity.

Nếu bạn chưa chắc một lựa chọn, hãy thử tạo scene chỉ gồm một sàn tĩnh, một quả cầu di động, một nguồn sáng và một camera: dữ liệu quan sát trực tiếp thường đáng tin hơn phỏng đoán từ tên thiết lập.


## 6. Tài liệu tham khảo và lưu ý phiên bản

- [Unity Learn — Creative Core: Lighting quiz](https://learn.unity.com/course/creative-core-lighting/quiz/creative-core-lighting-quiz?version=6.3) (Unity 6.3).

**Lưu ý:** Menu và tùy chọn có thể khác theo URP Asset, Quality Level, Unity Editor và loại shader đang dùng. Nội dung là bài giảng tiếng Việt độc lập được biên soạn và bổ sung để học tập, không phải bản dịch chính thức hay lời chép toàn văn của Unity.
