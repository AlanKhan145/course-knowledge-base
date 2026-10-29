# Bài 05 — Khám phá bố cục và các loại cảnh quay Camera

> **Khóa:** Unity Creative Core · **Học phần:** Cameras · **Dạng:** Bài học mỹ thuật ứng dụng · **Định hướng:** Unity 6.x
>
> **Mục đích:** Phân biệt toàn cảnh, cận cảnh, góc chim nhìn và góc sâu từ dưới lên; thiết kế cảm xúc và tính sử dụng.

**Lưu ý tương thích:** Nội dung sử dụng các khái niệm của Unity 6 và cách thiết lập phổ biến trong Unity Editor. Tên nhóm thiết lập Camera có thể khác giữa Built-in Render Pipeline, URP và HDRP. Các giá trị được nêu trong bài thực hành là ví dụ để kiểm chứng, không phải cấu hình bắt buộc cho mọi dự án.

## 1. Mục tiêu học tập

Người học nhận diện được các shot cơ bản, phân biệt **shot size**, **camera angle**, **viewpoint** và **FOV**, chọn cách đóng khung phù hợp mục đích và tạo bốn ảnh chụp cùng một scene thể hiện bốn trạng thái thị giác khác nhau.

## 2. Shot size, camera angle và FOV không đồng nghĩa

Trong ngôn ngữ điện ảnh, **shot size** nói về chủ thể chiếm bao nhiêu khung hình: toàn, trung, cận. **Camera angle** là góc đặt tương đối với chủ thể: cao, thấp, thẳng mắt. **Viewpoint** cho biết quan hệ Camera với hành động: first-person, third-person, fixed… **FOV** chỉ góc mở quang học/ảo của Camera. Ví dụ có thể tạo một cận cảnh bằng cách tiến Camera đến gần, hoặc giảm FOV và giữ Camera ở xa; hai cách không hoàn toàn giống nhau về phối cảnh.

| Thuật ngữ | Định nghĩa thực hành | Ví dụ |
|---|---|---|
| Wide / Establishing shot | Khung rộng, thấy môi trường | Giới thiệu thành phố, cửa hàng |
| Medium shot | Nhân vật/đối tượng và một phần bối cảnh | Đối thoại, tương tác đồ vật |
| Close-up | Nhấn mạnh mặt hoặc chi tiết | Cảm xúc, vật phẩm quan trọng |
| Bird’s-eye view | Camera từ cao nhìn xuống | Định vị trong mê cung |
| Worm’s-eye view | Camera rất thấp nhìn lên | Cảm giác uy thế, bất an, quy mô |
| Over-the-shoulder | Nhìn qua vai người tham gia cảnh | Đối thoại, ngắm mục tiêu |

**Ghi chú thuật ngữ:** “Wide angle” trong bài của Unity Learn đang được dùng theo ngữ cảnh **cảnh quay rộng**, không nhất thiết yêu cầu một ống kính góc rộng với số FOV cụ thể. Bird’s-eye và Worm’s-eye chủ yếu là **góc đặt máy**, có thể đi cùng các cỡ cảnh khác nhau.

## 3. Tác động thị giác và thông tin gameplay

### 3.1. Cảnh rộng: giới thiệu thế giới

Bằng cách giảm tỷ lệ diện tích mà chủ thể chiếm trong ảnh, người xem nhận ra bối cảnh, lối đi và vị trí tương đối. Đây là shot phù hợp để giới thiệu vùng chơi hoặc mở đầu một sự kiện. Nếu giữ quá lâu trong game hành động, nhân vật quá nhỏ có thể khiến người chơi khó đọc animation hoặc thao tác chính xác.

### 3.2. Cận cảnh: chú ý cảm xúc và chi tiết

Cận cảnh nhấn vào mắt, nét mặt, vật phẩm hoặc một thao tác. Vấn đề chính là lượng không gian bên ngoài khung giảm đi: dùng cận cảnh trong khi chiến đấu có thể che kẻ địch và đường thoát. Cần xác định khi nào nên chuyển từ shot kể chuyện sang shot hỗ trợ điều khiển.

### 3.3. Bird’s-eye và Worm’s-eye

Góc chim nhìn bao quát mặt bằng, hỗ trợ suy luận vị trí, quy mô và khoảng cách theo mặt đất. Góc cực thấp nhìn lên có thể khiến vật thể trở nên áp đảo, lạ lẫm, hoặc gây cảm giác bị đe dọa. Diễn giải cảm xúc phụ thuộc nội dung cảnh và bối cảnh; không nên viết “góc thấp **luôn** làm nhân vật quyền lực”.

## 4. Quy tắc bố cục hữu ích

**Phân bố trọng tâm:** đặt chủ thể tại vị trí có chủ ý thay vì lúc nào cũng chính giữa. Quy tắc một phần ba (rule of thirds) là gợi ý phổ biến: chia khung hình thành lưới 3×3 và đặt yếu tố chính gần giao điểm nếu phù hợp.

**Headroom và look room:** với cảnh có nhân vật, chừa khoảng phía trên đầu và khoảng trống theo hướng nhìn/chuyển động. Ít headroom có thể gây ngột ngạt, nhiều quá làm chủ thể nhỏ; cả hai có thể là lựa chọn nghệ thuật nếu có chủ đích.

**Layering (tiền–trung–hậu cảnh):** sắp xếp vật thể thành nhiều lớp tăng khả năng đọc chiều sâu, đặc biệt với Perspective. Tránh để đối tượng tiền cảnh vô tình che mất thông tin gameplay.

**Silhouette:** chủ thể phải đủ tách biệt khỏi hậu cảnh để nhận diện hình dáng. Có thể kiểm tra bằng cách giảm màu sắc hoặc nhìn nhỏ hình preview.

## 5. Thực hành: cùng một chủ thể, bốn shot

**Với scene Unity Learn:** mở `Camera_Shots_Scene` và ở Play mode thử các phím **1–4** theo thiết lập của scene mẫu. Đây là điều khiển do scene mẫu cài đặt, không phải phím mặc định của Unity Editor.

**Với scene độc lập:** tạo `Capsule` nhân vật, bục, lối đi và một cấu trúc cao (ví dụ `Cube` kéo dài). Tạo bốn Camera có tên rõ ràng:

1. `Cam_Wide`: camera xa, nhìn thấy nhân vật và toàn bộ khu vực quan trọng.
2. `Cam_Close`: camera gần hơn, nhân vật chiếm nhiều khung hình; đảm bảo cận cảnh không bị Near Clip.
3. `Cam_BirdsEye`: đặt camera phía trên nhìn xuống, vẫn giữ chủ thể và lối đi chính.
4. `Cam_WormsEye`: đặt rất thấp, nghiêng lên để thấy chiều cao công trình và chủ thể.

Bật từng camera riêng để chụp ảnh và ghi ảnh hưởng của vị trí, góc nhìn, Projection, FOV và khoảng cách. Thử giữ nguyên vị trí camera nhưng đổi FOV; sau đó giữ nguyên FOV và đổi khoảng cách để so sánh hiệu ứng.

## 6. Rubric chất lượng hình ảnh

| Tiêu chí | Kiểm tra |
|---|---|
| Chủ thể rõ | Người xem biết phải nhìn đâu trong 2–3 giây |
| Thông tin phù hợp | Không che mất thông tin quan trọng đối với nhiệm vụ |
| Cảm xúc có mục đích | Góc máy, bố cục và ánh sáng phục vụ cùng một thông điệp |
| Không lỗi kỹ thuật | Không near clipping sai, camera xuyên tường hoặc cắt khung vô ý |
| Tính nhất quán | Các shot cùng cảnh giữ được trục không gian và hướng hành động dễ hiểu |

## 7. Điểm dễ sai

- Nhầm **cận cảnh** với **FOV nhỏ**: FOV nhỏ có thể tạo cận cảnh nhưng không phải tiêu chí duy nhất.
- Nhầm **bird’s-eye** với **top-down gameplay**: góc cao của một shot và kiểu camera điều khiển toàn trò chơi là hai cấp khái niệm khác nhau.
- Lạm dụng góc cực thấp: mất khả năng nhìn mặt đất và trở ngại phía trước.
- Dùng quy tắc một phần ba máy móc: nếu mục tiêu nằm chính giữa vì yêu cầu thao tác, bố cục trung tâm có thể tốt hơn.

## 8. Câu hỏi ôn tập

**Câu 1. Hai shot có cùng FOV nhưng khác khoảng cách Camera có thể khác nhau chủ yếu ở điều gì?**

A. Layer của vật.  
B. Chất lượng prefab.  
C. Tỷ lệ và quan hệ phối cảnh trong khung hình.  
D. Hệ thống input.  

**Đáp án: C.** Khoảng cách và vị trí Camera quyết định tỷ lệ, che khuất và phối cảnh.

**Câu 2. Muốn giới thiệu toàn bộ khu vực chơi mới, nên ưu tiên shot nào?**

A. Wide shot.  
B. Cận mặt.  
C. Cận tay.  
D. Worm’s-eye chỉ nhìn bầu trời.  

**Đáp án: A.** Wide/Establishing shot cho phép khán giả thấy không gian.

**Câu 3. Close-up có bất lợi nào khi đang điều khiển nhân vật qua địa hình phức tạp?**

A. Luôn tắt toàn bộ vật liệu.  
B. Không render ánh sáng.  
C. Làm mất physics.  
D. Giảm môi trường nhìn thấy.  

**Đáp án: D.** Không gian xung quanh bị thu hẹp, dễ thiếu thông tin định hướng.

**Câu 4. Điều nào mô tả đúng Bird’s-eye view?**

A. Camera luôn dùng Orthographic.  
B. Camera nhìn từ cao xuống.  
C. Camera chỉ quay cận mặt.  
D. Camera không có Near Clip.  

**Đáp án: B.** Camera quan sát từ phía trên xuống, không bắt buộc một FOV duy nhất.

**Câu 5. Rule of thirds nên được áp dụng như thế nào?**

A. Là yêu cầu không thể vi phạm.  
B. Chỉ áp dụng cho UI.  
C. Là quy tắc tham khảo có mục đích.  
D. Bắt buộc đặt nhân vật ở góc trên trái.  

**Đáp án: C.** Là công cụ gợi ý có thể điều chỉnh tùy mục tiêu bố cục.
## 9. Tổng kết

Shot là lựa chọn **thông tin và cảm xúc** trong một khung hình. Cần phối hợp cỡ cảnh, góc đặt máy, FOV và cách sắp xếp vật thể. Một shot thành công vừa đẹp vừa phù hợp nhiệm vụ quan sát hoặc tương tác.

## 10. Tài liệu tham khảo và đối chiếu

- [Unity Learn — bài 05, Creative Core: Cameras](https://learn.unity.com/course/creative-core-cameras/tutorial/explore-camera-shot-types?version=6.0) — mục tiêu và bối cảnh thực hành của bài.
- [Unity Scripting API — Camera](https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Camera.html) — các thuộc tính `fieldOfView`, `orthographicSize`, `nearClipPlane`, `farClipPlane`, `cullingMask`.
- [Unity Learn — Creative Core: Cameras, danh sách các cảnh quay](https://learn.unity.com/project/creative-core-cameras?uv=2022.3).
