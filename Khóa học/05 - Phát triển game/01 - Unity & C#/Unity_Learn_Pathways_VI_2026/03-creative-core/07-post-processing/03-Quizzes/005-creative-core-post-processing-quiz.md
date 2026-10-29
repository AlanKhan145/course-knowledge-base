---
title: "Bài 05 — Kiểm tra tổng kết: Creative Core Post-processing"
module: "Creative Core — Post-processing"
lesson_type: assessment
unity_version: "6.3 (URP)"
language: vi
---

# Bài 05 — Kiểm tra tổng kết: Creative Core Post-processing

## 1. Hướng dẫn làm bài

Bài kiểm tra đánh giá khả năng **giải thích**, **cấu hình**, **áp dụng** và **chẩn đoán lỗi** của Post-processing trong **Unity 6.3 + Universal Render Pipeline (URP)**. Những câu hỏi tập trung vào hai kết quả học tập chủ đạo: xác định khi nào hậu kỳ phù hợp với mục đích thị giác và triển khai một phong cách hình ảnh bằng Volume Profile.

Đây là **bộ câu hỏi luyện tập tự biên soạn**, không sao chép câu hỏi hoặc đáp án chính thức trong Unity Learn. Hãy tự hoàn thành trước khi đối chiếu với bài học và tài liệu kỹ thuật.

- **Phần A:** 12 câu trắc nghiệm, mỗi câu chọn **một đáp án tốt nhất**.
- **Phần B:** 5 phát biểu đúng/sai có giải thích.
- **Phần C:** 4 câu hỏi ngắn yêu cầu lập luận.
- **Phần D:** bài thực hành cấu hình và kiểm chứng một scene.

Không dùng điểm FPS hoặc hiệu năng giả định làm bằng chứng thực nghiệm. Khi chưa chạy trên phần cứng, chỉ nêu phép đo **sẽ** thực hiện.

## 2. Phạm vi kiến thức

| Nhóm kỹ năng | Nội dung cần nắm |
|---|---|
| Khái niệm hậu kỳ | Sự khác biệt với Lighting, Material, VFX; ưu/nhược điểm |
| Hệ thống URP | Camera Post Processing, Volume, Profile, Override, Volume Mask |
| Hiệu ứng | Bloom, Color Adjustments, Tonemapping, Vignette, Depth of Field |
| Volume theo không gian | Global/Local, Collider, Blend Distance, Weight, Priority, Volume Trigger |
| Quy trình sáng tạo | Baseline, mục tiêu thị giác, so sánh A/B, khả năng đọc scene |
| Kiểm thử và tối ưu | Chẩn đoán hiệu ứng không hiện; điều kiện đo nhất quán; đo trên thiết bị đích |

## 3. Phần A — Trắc nghiệm

**Câu 1.** Một biển hiệu neon đã có Material phát sáng. Bạn muốn tạo quầng sáng trong hình ảnh nhưng không muốn thay đổi hình học. Kỹ thuật nào phù hợp nhất?

A. Bloom.  
B. Box Collider.  
C. Occlusion Culling.  
D. NavMesh.

**Câu 2.** Bạn thêm Bloom vào Volume Profile và thay đổi Intensity, nhưng không thấy gì khác. Điều nào **không phải** nguyên nhân hợp lý cần ưu tiên kiểm tra?

A. Camera chưa bật Post Processing.  
B. Thuộc tính chưa bật checkbox Override.  
C. Volume nằm ở Layer bị Volume Mask loại bỏ.  
D. Số lượng Audio Listener trong scene chưa đủ hai.

**Câu 3.** Thành phần nào chứa nhóm thiết lập hậu kỳ như Bloom và Tonemapping để Volume tham chiếu?

A. Prefab Variant.  
B. Volume Profile.  
C. Rigidbody.  
D. Animation Controller.

**Câu 4.** Phát biểu nào đúng về `Color Adjustments`?

A. Thay đổi cấu trúc polygon.  
B. Điều khiển quỹ đạo chuyển động Camera.  
C. Điều chỉnh độ sáng, tương phản, độ bão hòa và các thuộc tính màu tổng thể.  
D. Buộc phải sử dụng Collider.

**Câu 5.** Khi làm hậu kỳ cho game góc nhìn thứ ba, Camera cách xa nhân vật. Bạn muốn hiệu ứng thay đổi theo vị trí nhân vật vào hang. Thiết lập nào liên quan trực tiếp nhất?

A. Chỉ tăng Far Clipping Plane.  
B. Volume Trigger của Camera.  
C. Thêm thành phần Rigidbody cho tất cả Light.  
D. Đổi tên Scene.

**Câu 6.** Một Local Volume có Blend Distance lớn hơn 0. Điều gì có thể xảy ra khi Camera tiến gần Collider từ bên ngoài?

A. Hiệu ứng nhất thiết chỉ xuất hiện sau khi Collider bắt đầu chuyển động.  
B. Profile bị xóa tự động.  
C. Hiệu ứng có thể bắt đầu hòa trộn trước khi tới biên Collider.  
D. Camera luôn dừng ở ranh giới.

**Câu 7.** Bạn cần làm vùng nét theo tiêu cự/khẩu độ mô phỏng ống kính. Lựa chọn nào phù hợp?

A. Bloom Threshold.  
B. Vignette Smoothness.  
C. Color Filter.  
D. Depth of Field chế độ Bokeh.

**Câu 8.** Một game có hình ảnh đẹp nhưng lối đi bị tối khó phân biệt. Hành động nào phù hợp nhất?

A. Đánh giá lại mục tiêu thị giác và giảm/điều chỉnh hiệu ứng đang che thông tin cần thiết.  
B. Bỏ qua vì hậu kỳ chỉ cần tăng cảm xúc.  
C. Tăng mọi effect đồng thời.  
D. Xóa Camera rồi dựng lại toàn bộ scene.

**Câu 9.** Phương án nào mô tả đúng `Volume Mask` trong URP?

A. Chọn những layer chứa Volume mà Camera cho phép dùng.  
B. Tạo bóng đổ trực tiếp.  
C. Làm thay công việc của Shader Graph.  
D. Xác định độ dày bề mặt vật thể.

**Câu 10.** Hai Volume sử dụng **cùng một** Profile asset. Bạn chỉnh Saturation trên asset đó. Nguy cơ đáng lưu ý nhất?

A. Mọi Material chuyển thành transparent.  
B. Camera tự đổi sang HDRP.  
C. Thay đổi có thể ảnh hưởng cả hai Volume vì cùng tham chiếu một asset.  
D. Unity tạo ra một Mesh Collider mới.

**Câu 11.** Khi đo tác động của hậu kỳ lên hiệu năng, cách đánh giá nào tốt nhất?

A. Đo hai scene khác nhau ở hai độ phân giải khác nhau.  
B. Giữ điều kiện render nhất quán và so frame time trước/sau trên thiết bị đích.  
C. Chỉ so số lượng GameObject.  
D. Lấy FPS từ ảnh chụp màn hình bất kỳ trên Internet.

**Câu 12.** Bạn muốn dùng `Tonemapping` để chọn cách ánh xạ dải sáng và đặc điểm màu đầu ra. Quy trình hợp lý nhất?

A. Chọn chế độ ngẫu nhiên rồi khóa tất cả thông số.  
B. Xóa mọi Material có Emission.  
C. Chỉ kiểm tra khi đã build game lên thiết bị khác.  
D. So Neutral và ACES trên cùng scene rồi chọn theo mục tiêu và khả năng giữ chi tiết.

## 4. Phần B — Đúng/Sai và giải thích

Ghi **Đúng** hoặc **Sai**, sau đó giải thích ngắn gọn.

1. “Một Global Volume chắc chắn ảnh hưởng đến mọi Camera ngay cả khi Camera tắt Post Processing.”
2. “Nếu Local Volume sử dụng Box Collider và Blend Distance lớn hơn 0, khu vực chuyển tiếp có thể nằm ngoài Collider.”
3. “Chỉ cần tăng Bloom là một vật thể phát sáng sẽ chiếu sáng vật khác tương tự như Point Light.”
4. “Giảm Depth of Field hoặc Motion Blur có thể giúp cải thiện tính dễ đọc của game, ngoài việc ảnh hưởng thẩm mỹ.”
5. “Một lần đo FPS trong Unity Editor luôn đủ để kết luận chính xác chi phí GPU của hậu kỳ trên thiết bị di động.”

## 5. Phần C — Câu hỏi ngắn

**Câu 1.** Trình bày quy trình **Camera → Volume → Volume Profile → Volume Override** và phân biệt vai trò của từng thành phần. Nếu một hiệu ứng không xuất hiện, bạn sẽ kiểm tra theo thứ tự nào?

**Câu 2.** Một cảnh khu phố đêm có bảng hiệu neon sáng nhưng người chơi khó nhìn thấy lối đi. Đề xuất ít nhất ba điều chỉnh, ghi rõ điều chỉnh nào thuộc hậu kỳ và điều chỉnh nào thuộc Lighting/Material/bố cục.

**Câu 3.** So sánh Global Volume và Local Volume trong trường hợp chuyển từ sân vườn vào phòng bí ẩn. Giải thích các thuộc tính `Blend Distance`, `Weight`, `Priority` và `Volume Trigger` bằng một tình huống cụ thể.

**Câu 4.** Thiết kế phép A/B test để xác định Profile B có làm tăng chi phí render so với Profile A hay không. Nêu biến cần giữ cố định, phép đo, cách ghi dữ liệu và giới hạn của phép đo.

## 6. Phần D — Bài thực hành cuối học phần

### 6.1. Đề bài

Tạo scene URP mô phỏng **một khu triển lãm ban ngày và một phòng trưng bày tối**. Trải nghiệm phải có chuyển đổi phong cách rõ ràng khi Camera hoặc nhân vật di chuyển qua cửa giữa hai không gian.

### 6.2. Yêu cầu kỹ thuật

- Có một `Global Volume` cho trạng thái nền.
- Có ít nhất một `Local Volume` với Collider đúng phạm vi phòng tối; kiểm tra `Is Trigger` khi cần.
- Có tối thiểu **hai Profile** độc lập, mỗi Profile sử dụng các Override phù hợp với mục tiêu hình ảnh.
- Chứng minh hiệu ứng thay đổi tại **ba vị trí**: bên ngoài, rìa vùng, bên trong.
- Thử nghiệm thay đổi ít nhất một trong các thuộc tính `Weight`, `Blend Distance` hoặc `Priority`; giải thích hệ quả quan sát được.
- Chụp ảnh baseline (trước hậu kỳ) và ảnh sau khi áp dụng.
- Có bảng kiểm thử ghi cả tình huống thành công và một lỗi được chẩn đoán.

### 6.3. Sản phẩm nộp

1. Unity scene cùng Volume Profile có thể mở và chạy trong URP.
2. Ít nhất bốn ảnh: baseline, ngoài vùng, rìa vùng, trong vùng; hoặc video đi qua ranh giới kèm một ảnh baseline.
3. Báo cáo ngắn 300–500 chữ: ý đồ thẩm mỹ, lý do chọn hiệu ứng, cách kiểm thử và hướng tối ưu nếu đưa lên thiết bị yếu.
4. Bảng ghi kết quả thực nghiệm. Nếu chưa đo hiệu năng trên bản build, trình bày kế hoạch đo thay cho số liệu.

## 7. Tiêu chí chấm

| Hạng mục | Điểm tối đa | Dấu hiệu đạt |
|---|---:|---|
| Phần A | 24 | 12 câu, mỗi câu 2 điểm |
| Phần B | 10 | 5 câu, mỗi câu 2 điểm gồm lựa chọn và giải thích |
| Phần C | 16 | 4 câu, mỗi câu 4 điểm: chính xác, có ví dụ và logic kiểm chứng |
| Phần D | 50 | Cấu hình 15; chuyển tiếp theo vùng 15; chất lượng hình 10; báo cáo/kiểm thử 10 |
| **Tổng** | **100** | Chỉ tính kết quả có bằng chứng/diễn giải |

**Mức hoàn thành đề xuất:** 80–100: vận dụng tốt; 65–79: đạt kỹ năng cốt lõi; 50–64: cần bổ sung kiểm chứng; dưới 50: nên thực hành lại Volume/Profile/Camera và phép thử theo vị trí. Đây là thang đánh giá **tự biên soạn**, không phải tiêu chuẩn chấm chính thức của Unity.

## 8. Tài liệu đối chiếu sau khi làm bài

- [Unity Learn — Creative Core: Post-processing](https://learn.unity.com/course/creative-core-post-processing).
- [Unity 6.3 — Add post-processing in URP](https://docs.unity.com/en-us/engine/6000.3/manual/post-processing-and-full-screen-effects/urp/add-post-processing).
- [Unity 6.3 — Volume component reference](https://docs.unity.com/en-us/engine/6000.3/manual/post-processing-and-full-screen-effects/urp/volumes-landing-page/volume-component-reference).
- [Unity 6.3 — Local Volume setup](https://docs.unity.com/en-us/engine/6000.3/manual/post-processing-and-full-screen-effects/urp/volumes-landing-page/set-up-a-volume).
- [Unity 6.3 — Depth of Field reference](https://docs.unity.com/en-us/engine/6000.3/manual/post-processing-and-full-screen-effects/urp/effect-list/depth-of-field-urp/volume-override-reference).
- [Unity 6.3 — Camera Volume Mask / Volume Trigger](https://docs.unity.com/en-us/engine/6000.3/manual/cameras/urp/camera-components-reference/camera-component-reference).

*Bộ đề tự kiểm tra không kèm đáp án để người học làm bài độc lập; câu hỏi không phải trích lục quiz chính thức của Unity Learn.*
