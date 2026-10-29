# Bài 08 — Bộ câu hỏi kiểm tra Creative Core: Cameras

> **Khóa:** Unity Creative Core · **Học phần:** Cameras · **Dạng:** Đánh giá kiến thức (assessment) · **Định hướng:** Unity 6.x
>
> **Mục đích:** Đánh giá khả năng chọn cấu hình Camera và phân tích các lỗi thường gặp qua tình huống thực tế.

**Lưu ý tương thích:** Nội dung sử dụng các khái niệm của Unity 6 và cách thiết lập phổ biến trong Unity Editor. Tên nhóm thiết lập Camera có thể khác giữa Built-in Render Pipeline, URP và HDRP. Các giá trị được nêu trong bài thực hành là ví dụ để kiểm chứng, không phải cấu hình bắt buộc cho mọi dự án.

## 1. Hướng dẫn làm bài

Bộ kiểm tra này gồm **12 câu trắc nghiệm tự biên soạn**, bám theo kỹ năng của module Cameras. Mỗi câu có bốn lựa chọn và chỉ **một đáp án tốt nhất**. Người học nên trả lời trước khi mở đáp án ở cuối tài liệu. Đây **không phải** bản chép lại hay đáp án chính thức của quiz trên Unity Learn.

**Phạm vi đánh giá:** Camera và Game view, Perspective/Orthographic, FOV/Size, clipping planes, Culling Mask, background, camera viewpoints và shot types, ứng dụng trong scene.

## 2. Đề trắc nghiệm

**Câu 1.** Cần một camera cho bản đồ chiến thuật sao cho cùng một biểu tượng ở gần và xa có kích thước tương đương nhau. Chọn phép chiếu nào?

A. Perspective FOV 120°.  
B. Orthographic.  
C. Perspective với Near rất nhỏ.  
D. Physical Camera luôn luôn.

**Câu 2.** Camera không di chuyển, FOV dọc giảm từ 60° xuống 30°. Thay đổi nào hợp lý nhất?

A. Camera tự đổi sang Orthographic.  
B. Vùng nhìn rộng hơn.  
C. Vùng nhìn hẹp hơn, chủ thể trông lớn hơn.  
D. GameObject bị chuyển Layer.

**Câu 3.** Một đối tượng xuất hiện trong Scene view nhưng không hiện ở Game view; nó vẫn nằm giữa Near và Far. Bạn nên kiểm tra trước điều gì?

A. Culling Mask của Camera và Layer của đối tượng.  
B. Tên tài khoản Unity.  
C. Độ phân giải màn hình hệ điều hành.  
D. Tốc độ CPU.

**Câu 4.** Đặt `orthographicSize = 6`, camera dùng viewport thông thường. Chiều cao vùng nhìn là bao nhiêu đơn vị thế giới?

A. 3.  
B. 6.  
C. 36.  
D. 12.

**Câu 5.** Một số bức tường rất gần Camera bị “cắt”, nhìn xuyên qua phần sát Camera. Thông số trực tiếp liên quan là gì?

A. Far Clip.  
B. Near Clip.  
C. Camera Tag.  
D. Ambient Intensity.

**Câu 6.** Khi chọn `Background Type = Solid Color` và đặt màu xanh, điều nào đúng nhất?

A. Skybox Material của scene tự bị xóa.  
B. Collider trên tất cả vật thể bị tắt.  
C. Camera hiển thị màu nền ở nơi không có đối tượng; môi trường sáng không nhất thiết bị thay thế.  
D. Game chuyển sang chế độ 2D.

**Câu 7.** Trò chơi phiêu lưu muốn người chơi nhìn thấy trang phục và animation của nhân vật khi di chuyển. Nên thử viewpoint nào trước?

A. Third-person.  
B. First-person chỉ hiện tay.  
C. Fixed shot không có avatar.  
D. Camera UI.

**Câu 8.** Một người mới đến khu vực chưa biết cần thấy các công trình và lối đi chính. Shot nào phù hợp để giới thiệu cảnh?

A. Cận mắt nhân vật.  
B. Cận tay nhặt vật.  
C. Shot chỉ có bầu trời.  
D. Wide/Establishing shot.

**Câu 9.** `Culling Mask` bỏ một Layer nhưng vật thể ở Layer đó vẫn có Collider. Tại sao?

A. Mọi Collider luôn tạo ảnh.  
B. Lọc render của Camera không đồng nghĩa vô hiệu hóa physics.  
C. Layer không ảnh hưởng đến Camera.  
D. FOV đã tự tăng.

**Câu 10.** Cấu hình nào mô tả chính xác kiểu `top-down`?

A. Một phép chiếu mới nằm ngoài Perspective và Orthographic.  
B. Camera chỉ được dùng trong game 2D.  
C. Camera nhìn từ trên cao xuống và có thể dùng Perspective hoặc Orthographic.  
D. Camera luôn có FOV bằng 0.

**Câu 11.** Khi thử dựng theo ảnh tham chiếu, nhân vật đúng kích thước nhưng nhà phía sau trông quá lớn so với ảnh. Cần cân nhắc điều gì?

A. Phối hợp lại khoảng cách Camera–chủ thể và FOV, không chỉ phóng to/thu nhỏ ảnh.  
B. Đổi tên file ảnh.  
C. Giảm Near xuống 0.  
D. Tắt tất cả ánh sáng.

**Câu 12.** Dự án có ba Camera với chức năng toàn–trung–cận. Cách kiểm thử hợp lý là gì?

A. Chỉ kiểm tra Scene view.  
B. Bật cùng lúc tất cả Camera và Audio Listener mà không có quản lý.  
C. Chọn ngẫu nhiên một Camera rồi nghiệm thu cả ba.  
D. Xem từng Camera trong Game view và đối chiếu chủ thể, góc, clipping và tỷ lệ ảnh.

## 3. Đáp án và giải thích

| Câu | Đáp án | Giải thích |
|---:|:---:|---|
| 1 | B | Orthographic loại bỏ hiệu ứng vật ở xa nhỏ hơn do phối cảnh. |
| 2 | C | FOV nhỏ làm góc mở hẹp, vật thường chiếm tỷ lệ lớn hơn trên ảnh. |
| 3 | A | Layer bị loại khỏi Culling Mask làm vật không render trên camera đó. |
| 4 | D | Chiều cao vùng nhìn Orthographic bằng `2 × Size = 12`. |
| 5 | B | Near Clip loại hình học nằm quá sát Camera. |
| 6 | C | Background render và ánh sáng môi trường là các cấu hình khác nhau. |
| 7 | A | Third-person thuận tiện để xem avatar và hoạt ảnh khi chơi. |
| 8 | D | Shot rộng giúp giới thiệu không gian và các yếu tố định hướng. |
| 9 | B | Camera culling chỉ điều khiển render; Collider vẫn có thể hoạt động. |
| 10 | C | Top-down là hướng đặt Camera, không phải phép chiếu riêng. |
| 11 | A | Đổi vị trí Camera và FOV làm đổi quan hệ tỷ lệ tiền–hậu cảnh. |
| 12 | D | Nghiệm thu từng Camera tránh nhầm đầu ra và bỏ sót lỗi. |

## 4. Bài thực hành tự đánh giá

Dựng một cảnh có `Capsule` đứng trước một tòa tháp và ba vật ở các độ sâu khác nhau. Sản xuất:

1. Một ảnh Perspective FOV khoảng 60°.
2. Một ảnh Orthographic có Size phù hợp.
3. Một ảnh từ góc cao và một ảnh từ góc thấp.
4. Một ảnh thử bỏ Layer của một vật khỏi Culling Mask.

Viết báo cáo ngắn giải thích vì sao các ảnh khác nhau và thông số nào gây ra thay đổi. Kết quả đạt yêu cầu khi thao tác thực hiện đúng, ảnh minh chứng rõ và các giải thích không nhầm viewpoint với projection.

## 5. Tự xác định lỗ hổng kiến thức

| Nhóm câu | Kỹ năng liên quan | Hướng ôn lại |
|---|---|---|
| 1, 2, 4 | Projection, FOV, Orthographic Size | Bài 02 |
| 3, 5, 6, 9 | Clipping, Culling, Background | Bài 03 |
| 7, 10 | Camera viewpoint | Bài 04 |
| 8, 11 | Shot và phối cảnh | Bài 05–06 |
| 12 | Tích hợp và nghiệm thu | Bài 07 |

## 6. Tài liệu tham khảo và đối chiếu

- [Unity Learn — bài 08, Creative Core: Cameras](https://learn.unity.com/course/creative-core-cameras/quiz/creative-core-camera-quiz?version=6.0) — mục tiêu và bối cảnh thực hành của bài.
- [Unity Scripting API — Camera](https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Camera.html) — các thuộc tính `fieldOfView`, `orthographicSize`, `nearClipPlane`, `farClipPlane`, `cullingMask`.
- [Unity Learn — Creative Core: Cameras, mục tiêu toàn khóa](https://learn.unity.com/project/creative-core-cameras?uv=2022.3).
