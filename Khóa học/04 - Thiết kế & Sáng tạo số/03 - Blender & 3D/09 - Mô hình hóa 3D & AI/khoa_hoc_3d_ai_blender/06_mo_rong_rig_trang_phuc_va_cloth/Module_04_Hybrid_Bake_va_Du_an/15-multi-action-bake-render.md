# Bài 15 — Ghép nhiều động tác, cache, vật liệu và xuất video

## 1. Tổng quan

Sau khi rig hoặc mô phỏng đạt yêu cầu, cần chuẩn bị đầu ra. Có hai hướng khác nhau: video render từ Blender (có thể dùng trực tiếp Cloth đã bake) và animation dùng cho game (phải kiểm tra dữ liệu bone/action sau xuất). Bài này hoàn thiện timeline, vật liệu, camera và xuất phim.

## 2. Mục tiêu học tập

- Nối animation Mixamo mà không phá giai đoạn mô phỏng ổn định.
- Bake Cloth theo toàn bộ timeline và xác nhận cache.
- Thêm độ dày, làm mượt vật liệu rồi render video khi cần.

## 3. Nội dung bài học

### 3.1. Ghép nhiều chuyển động

Sau đoạn rest pose và blend đầu, có thể nối các động tác như walk, turn, dance hoặc backflip. Quản lý dưới dạng `Action` riêng, hoặc copy keyframe giữa những vùng timeline phù hợp. Khi ghép, kiểm tra vị trí root, tốc độ khung hình và pose chuyển tiếp. Không đặt cánh tay từ tư thế trước sang tư thế sau quá xa chỉ trong một frame nếu có vải treo ở vai.

Nếu vải liên tục mô phỏng qua các động tác, timeline Cloth phải phủ **cả các đoạn chuyển tiếp**, không chỉ khúc chuyển động chính. Đổi Action, thêm keyframe hoặc chỉnh pose sau khi đã bake thì phải làm mới cache.

### 3.2. Bake và kiểm tra đầu ra

Mở `Cloth > Cache`, thiết lập `Frame Start/End` trùng phạm vi có rest pose và cuối đoạn animation, sau đó bake. Có thể dùng `Bake All Dynamics` khi scene có các dynamics phụ thuộc cần được xử lý. Khi bake xong, di chuyển qua toàn timeline để kiểm tra các frame đột ngột và vùng xuyên vải.

Một số bài thực hành dùng `Quality Steps` khoảng 10 khi preview và tăng lên khoảng 20 khi bake, nhưng điều này chỉ là điểm thử chứ không bảo đảm tối ưu cho mọi scene. Không chỉnh weight, mesh, collider hoặc FPS giữa lúc cache đã bake mà không tính lại.

### 3.3. Hoàn thiện hình thức vải

Để mặt áo không mỏng như giấy, thêm `Solidify` **sau** Cloth và kiểm tra normals. Để hình trông mịn, có thể thêm `Subdivision Surface` ở vị trí phù hợp; đôi khi cần một subdivision thấp trước Cloth cho topology giải, nhưng mức render cao nên để sau để tránh tải nặng.

Material có thể dùng texture hình ảnh ở `Base Color`, tăng `Roughness` tùy loại vải; thêm `Bump` rất nhẹ để gợi kết cấu sợi. Không lạm dụng bump vì trên camera gần sẽ nhìn giả. Khi dùng nhiều lớp material hoặc UV khác nhau, kiểm tra việc áp dụng biến đổi/đổi hình mesh có ảnh hưởng UV.

### 3.4. Camera, ánh sáng và video

Thiết lập camera để phần chuyển động của váy/áo choàng không bị cắt khung. Có thể keyframe camera nhẹ theo nhân vật, nhưng tránh rung quá mạnh làm người xem không đánh giá được vải. Nếu dùng hiệu ứng motion blur, chỉ thêm sau khi mesh và va chạm đã đạt yêu cầu — blur không phải cách sửa kỹ thuật.

Trong `Output Properties`, đặt độ phân giải, FPS, `Frame Start/End` và thư mục kết quả. Có thể chọn `FFmpeg Video` và container `MPEG-4` để xuất MP4, rồi `Render > Render Animation`. Nếu render dài hoặc cần hậu kỳ, xuất chuỗi ảnh thường an toàn hơn vì không mất toàn bộ quá trình khi một khung bị lỗi.

## 4. Thực hành

**Nhiệm vụ:** Tạo timeline từ T-pose sang walk, sau đó sang turn/dance. Bake đầy đủ, thêm vật liệu vải và camera, render clip kiểm tra ngắn. Nếu dự án cho game, xuất thêm FBX animation bone đã bake và import thử.

**Checkpoint:** Mọi frame trong đoạn cần xuất đã bake; không nhảy pose lúc chuyển hành động; video đúng FPS và frame range; bản game hoạt động mà không phụ thuộc Cloth runtime của Blender.

## 5. Câu hỏi ôn tập

**Câu 1.** Khi thêm Action mới sau khi bake Cloth, cần làm gì?

A. Không cần thao tác
B. Chuyển material
C. Free Bake và bake lại toàn bộ đoạn liên quan
D. Xóa camera

**Đáp án:** C. **Giải thích:** Animation đầu vào thay đổi làm dữ liệu cache cũ không còn phù hợp.

**Câu 2.** Solidify thường được dùng vào thời điểm nào trong stack với Cloth?

A. Sau Cloth để tăng độ dày trình bày
B. Thay thế Physics
C. Trước Armature mọi lúc
D. Chỉ khi không có mesh

**Đáp án:** A. **Giải thích:** Solver có thể hoạt động trên bề mặt mỏng, sau đó mới tạo độ dày render.

**Câu 3.** Thay đổi FPS sau khi bake có thể gây vấn đề gì?

A. Xóa UV
B. Chỉ đổi màu
C. Không ảnh hưởng
D. Thời gian và dữ liệu animation/cache có thể không còn khớp

**Đáp án:** D. **Giải thích:** FPS là phần nền của chuỗi frame được mô phỏng.

**Câu 4.** Đầu ra render video trực tiếp từ Blender có cần chuyển Cloth sang bone không?

A. Luôn cần
B. Không; có thể render Cloth đã bake
C. Chỉ khi Eevee
D. Phải xóa hết Physics

**Đáp án:** B. **Giải thích:** Video có thể dùng kết quả Cloth đã cache trong Blender.

**Câu 5.** Phương án tốt khi render dài cần khả năng phục hồi từng khung?

A. Chỉ ảnh chụp màn hình
B. Một file jpg cho tất cả
C. Chuỗi ảnh đầu ra
D. Không lưu cache

**Đáp án:** C. **Giải thích:** Render chuỗi ảnh thuận tiện khi cần render tiếp hoặc hậu kỳ.

## 6. Tổng kết

Hoàn thiện animation gồm cả nối clip, bake, vật liệu và xuất đầu ra. Phân biệt rõ video và game để chọn đúng cách lưu dữ liệu chuyển động.
