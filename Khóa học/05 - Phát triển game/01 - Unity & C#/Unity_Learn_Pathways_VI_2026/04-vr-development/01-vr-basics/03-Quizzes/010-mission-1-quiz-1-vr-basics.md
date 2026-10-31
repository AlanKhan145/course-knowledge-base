---
title: "Mission 1 — Bài kiểm tra VR Basics"
pathway: "VR Development"
module: "VR Basics"
lesson_number: 10
content_type: "Bài học tiếng Việt tự biên soạn"
unity_version_reference: "6.3"
lesson_kind: "assessment"
---

# Bài 10 — Mission 1 — Bài kiểm tra VR Basics

## 1. Tổng quan

Bộ câu hỏi dùng để tự kiểm tra kiến thức và khả năng chọn cách xử lý tình huống VR. Có 15 câu trắc nghiệm bốn lựa chọn và ba bài kiểm chứng thực hành. Phần trắc nghiệm chủ ý không kèm đáp án để có thể sử dụng như một lượt kiểm tra độc lập.

## 2. Mục tiêu học tập

- Lựa chọn giải pháp hợp lý cho tình huống XR thường gặp.
- Phân biệt được các lớp công cụ, cấu hình và cơ chế tương tác.
- Giải thích và kiểm chứng được ít nhất một câu trả lời bằng scene hoặc Console.

## 3. Hướng dẫn làm bài

Bài kiểm tra củng cố kiến thức của module **VR Basics** trong bối cảnh Unity: môi trường phát triển, XR Origin, Input Actions, phương pháp di chuyển, cầm nắm, Socket Interactor, camera và kiểm thử. Đây là bộ câu hỏi **tự biên soạn**, không phải nội dung thi chính thức của Unity.

**Cách thực hiện:** Chọn đúng một đáp án **A/B/C/D** cho mỗi câu. Nên trả lời trước khi mở Editor hoặc xem các tài liệu khác. Ghi riêng những câu chưa chắc chắn và kiểm chứng chúng bằng một scene nhỏ.

## 4. Phạm vi và yêu cầu

| Nhóm | Kiến thức cần vận dụng |
|---|---|
| Môi trường | Unity Hub, Editor, Package Manager, build modules |
| Kiến trúc VR | XR Origin, Interactor, Interactable, Input |
| Locomotion | Teleportation, Continuous Movement, Time.deltaTime |
| Tương tác | Grab Interactable, Collider, Rigidbody, Socket |
| Camera và kiểm thử | Clipping, Culling Mask, Console, HMD |

**Quy tắc tự đánh giá:** Sau khi làm xong, với các câu đã chọn, tự ghi giải thích bằng một câu và nêu ví dụ kiểm chứng. Không chỉ ghi chữ cái đáp án.

## 5. Bài trắc nghiệm

### Câu 1

Một GameObject hiện trong scene nhưng không nhận lệnh chọn. Bộ ba nào nên kiểm tra trước?

A. Skybox, Light, Audio Source  
B. Input Actions, Interactor, Interactable  
C. Terrain, Fog, Reflection Probe  
D. Mesh resolution, font, logo  

### Câu 2

Unity Hub được sử dụng chủ yếu để làm gì?

A. Quản lý Editor và dự án  
B. Chạy hệ thống vật lý trực tiếp  
C. Tạo collider  
D. Lập trình shader trong scene  

### Câu 3

Điểm nào là khác biệt quan trọng giữa Teleportation và Continuous Movement?

A. Tên file build  
B. Cách cập nhật vị trí và mức chuyển động thị giác  
C. Cách đặt tên GameObject  
D. Số lượng scene  

### Câu 4

Một script tăng vị trí thêm 1 đơn vị mỗi Update mà không dùng deltaTime sẽ có nguy cơ nào?

A. Phụ thuộc tốc độ khung hình  
B. Không thể thêm collider  
C. Không hiển thị mesh  
D. Không có Material  

### Câu 5

Khi vật được cầm lên rồi thả xuống, thành phần nào liên quan đến mô phỏng rơi?

A. TextMeshPro  
B. Rigidbody  
C. Unity Hub  
D. Build profile  

### Câu 6

Vai trò của XR Origin là gì?

A. Là tài liệu Markdown  
B. Tổ chức hệ gốc tracking người dùng  
C. Là texture 2D  
D. Là trình biên dịch  

### Câu 7

Ray Interactor thích hợp nhất để thử hành vi nào?

A. Chọn vật ở khoảng cách xa  
B. Đổi phiên bản Editor  
C. Tắt runtime  
D. Nén ảnh  

### Câu 8

Vật vào vùng socket nhưng không gắn. Hành động debug nào hợp lý?

A. Kiểm tra vùng phát hiện, tính tương thích và select  
B. Xóa toàn bộ scene  
C. Tăng draw call  
D. Tắt mọi collider  

### Câu 9

Camera làm vật ở gần biến mất. Thiết lập nào cần kiểm tra?

A. Near clipping plane  
B. Tên file .md  
C. Package cache font  
D. Thời gian compile  

### Câu 10

Để biết một layer có được camera render không, xem mục nào?

A. Rigidbody mass  
B. Culling Mask  
C. Time.deltaTime  
D. Controller grip  

### Câu 11

Nếu chỉ có thể sửa một biến ở mỗi lượt debug, lợi ích chính là gì?

A. Dễ xác định tác động của thay đổi  
B. Luôn làm FPS tăng  
C. Không cần Play mode  
D. Tự xóa lỗi package  

### Câu 12

Vì sao FPS trong Editor không đủ để kết luận hiệu năng VR?

A. HMD và runtime có đặc điểm khác  
B. Editor không hỗ trợ scene  
C. FPS chỉ áp dụng âm thanh  
D. Build luôn giống Play mode  

### Câu 13

Dự án không có tùy chọn build cho nền tảng muốn thử, nơi kiểm tra trước?

A. Unity Hub build modules  
B. Attach Transform  
C. Culling Mask  
D. Collision Layer  

### Câu 14

Đối tượng đang bị giữ bởi tay, muốn đặt lên giá đúng vị trí, thành phần nào phù hợp?

A. Socket Interactor  
B. Texture Importer  
C. Audio Mixer  
D. Main Camera đơn thuần  

### Câu 15

Đầu ra nào phù hợp nhất cho bài lab kiểm chứng?

A. Scene không kèm kiểm thử  
B. Scene hoặc build, ảnh/video, bảng lỗi và cải tiến  
C. Tên game hấp dẫn  
D. Hình minh họa không có project

## 6. Phần tự kiểm tra thực hành

**Bài tập 1:** Vẽ một sơ đồ từ controller đến vật cầm nắm, gắn tên `Input Actions`, `Interactor` và `Interactable` vào đúng vị trí.

**Bài tập 2:** Tạo một scene gồm vật cản, vật có thể cầm và vị trí đặt. Mô tả ba trường hợp kiểm thử: thao tác đúng, input không phản hồi và vị trí đặt không phù hợp.

**Bài tập 3:** Chọn một lỗi hiển thị hoặc chuyển động camera, ghi lại: biểu hiện → giả thuyết → cấu hình kiểm tra → cách xác nhận.

**Tự chấm:** Một câu trả lời tốt cần **khái niệm đúng + lý do + minh chứng có thể kiểm tra**. Không cung cấp sẵn đáp án trắc nghiệm để giữ đúng tính chất bài đánh giá.

## 7. Tổng kết

Hoàn thành lượt đánh giá khi bạn có bảng đáp án riêng, lý do cho các lựa chọn chưa chắc chắn và ít nhất một minh chứng thực hành. Kiểm tra lại các khái niệm bị nhầm bằng phép thử nhỏ trong Unity.

---

**Học liệu đối chiếu:** [Unity Learn — VR Basics](https://learn.unity.com/pathway/vr-development/unit/vr-basics?version=6.3). Các ví dụ và bài tập là nội dung học tập tự biên soạn, không phải bài kiểm tra hoặc transcript chính thức.
