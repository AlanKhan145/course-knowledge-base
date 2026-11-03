# Tạo Cinemachine Camera và đối tượng mục tiêu

**Loại bài:** Bài giảng và thực hành  |  **Công nghệ:** Unity / C#  |  **Bản chính:** Cinemachine 3.1

> **Yêu cầu đầu vào:** Biết mở Unity Editor, tạo GameObject, gắn MonoBehaviour và lưu Scene. Các ví dụ sử dụng Legacy `UnityEngine.Input` để dễ theo dõi; nếu dùng Input System mới, cần chuyển lớp đọc input tương ứng. Nội dung camera 3D dùng Unity 3D (mặt phẳng XZ) trừ khi tiêu đề nêu rõ 2D.

**Tóm tắt:** Lắp dựng một camera ảo bám theo một Transform và nhìn xuống mặt phẳng của trò chơi.

**Mục tiêu học tập**

- Tạo được camera Cinemachine 3D.
- Gán Tracking Target và Look At Target chính xác.
- Hiệu chỉnh góc nhìn nhìn xuống bản đồ.

## 1. Mục tiêu trực quan
Chúng ta muốn camera nhìn chéo xuống bản đồ. Thay vì thay đổi vị trí camera trong mỗi frame, dịch chuyển `CameraTarget`; Cinemachine sẽ theo dõi target đó.

## 2. Tạo các đối tượng
1. `Hierarchy > Create Empty`, đổi tên `CameraTarget`, đặt `Position = (0,0,0)` và `Rotation = (0,0,0)`.
2. `GameObject > Cinemachine > Targeted Cameras > Follow Camera` (menu có thể khác nhẹ tùy phiên bản). Đổi tên `CM_StrategyCamera`.
3. Trong `Cinemachine Camera`, đặt **Tracking Target** = `CameraTarget`; bật và gán **Look At Target** = `CameraTarget` nếu Rotation Control yêu cầu.
4. Ở `Position Control`, chọn **Follow**. Trong `Rotation Control`, chọn **Rotation Composer** hoặc **Hard Look At**.
5. Trong `Cinemachine Follow`, đặt `Follow Offset` khoảng `(0, 16, -16)` làm điểm khởi đầu; có thể tăng Y/Z theo tỷ lệ bản đồ.
6. Thiết lập `Binding Mode` sao cho yaw của target ảnh hưởng vị trí camera, ví dụ **Lock To Target With World Up**.

Các giá trị `(0,16,-16)` chỉ là **tham số ví dụ để thực hành**, không phải thông số bắt buộc. Với trục X/Z nằm trên mặt đất, Y là chiều cao.

## 3. Vì sao cần thiết lập Binding Mode?
Nếu để `World Space`, thay đổi rotation của target không làm Follow Offset quay theo target; khi đó Q/E sẽ không tạo hành vi orbit mong muốn. `Lock To Target With World Up` dùng yaw của target nhưng bỏ qua tilt/roll, phù hợp camera chiến thuật.

## 4. Test nhanh
Chọn `CameraTarget` và di chuyển nó theo X hoặc Z trong Scene. Camera phải đi theo. Xoay `CameraTarget` theo Y một góc 90°: camera phải orbit xung quanh target, còn bản đồ vẫn ở phía dưới. Nếu camera đứng yên, xem lại Tracking Target và Binding Mode.

## 5. Bài thực hành
Tạo ba góc nhìn camera cho cùng scene, thử `Follow Offset` gần, trung bình, xa; ghi lại góc nào dễ quan sát toàn bộ chiến trường. **Checkpoint:** khi di chuyển và quay target bằng Inspector, Game view thay đổi đúng.

## 6. Câu hỏi ôn tập trắc nghiệm

### Câu 1

Đối tượng nào được người chơi điều khiển trong cấu trúc này?

A. CameraTarget  
B. Skybox  
C. Directional Light  
D. Canvas Root  

**Đáp án:** A

**Giải thích:** Target làm điểm neo được script thay đổi.

### Câu 2

Trục nào biểu diễn độ cao trong scene Unity 3D tiêu chuẩn?

A. X  
B. Z  
C. Y  
D. W  

**Đáp án:** C

**Giải thích:** Unity dùng hệ quy ước Y-up trong thao tác thông thường.

### Câu 3

Binding Mode nào thích hợp khi muốn camera orbit theo yaw của target?

A. Lock To Target With World Up  
B. World Space cố định  
C. Không cần Position Control  
D. Chỉ dùng Reflection Probe  

**Đáp án:** A

**Giải thích:** Binding này nhận rotation yaw của target.

### Câu 4

Nếu camera không bám theo target cần kiểm tra đầu tiên điều gì?

A. Texture resolution  
B. Screen Space Overlay  
C. Tracking Target đã gán đúng chưa  
D. Giá trị âm lượng  

**Đáp án:** C

**Giải thích:** Không có target thì Follow không có neo để bám.

### Câu 5

Tại sao offset (0,16,-16) có thể nhìn chéo xuống bản đồ?

A. Camera cao theo Y và lùi theo Z  
B. Camera luôn nằm ngang mặt đất  
C. Camera chỉ quay quanh Z  
D. Giá trị này thay đổi FOV  

**Đáp án:** A

**Giải thích:** Offset tạo vị trí trên cao và phía sau.

## 7. Tổng kết

Lắp dựng một camera ảo bám theo một Transform và nhìn xuống mặt phẳng của trò chơi. Hãy tự chạy scene để xác nhận hành vi trước khi mở bài tiếp theo.
