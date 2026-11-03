# Xoay camera quanh trục Y bằng Q/E

**Loại bài:** Bài giảng và thực hành  |  **Công nghệ:** Unity / C#  |  **Bản chính:** Cinemachine 3.1

> **Yêu cầu đầu vào:** Biết mở Unity Editor, tạo GameObject, gắn MonoBehaviour và lưu Scene. Các ví dụ sử dụng Legacy `UnityEngine.Input` để dễ theo dõi; nếu dùng Input System mới, cần chuyển lớp đọc input tương ứng. Nội dung camera 3D dùng Unity 3D (mặt phẳng XZ) trừ khi tiêu đề nêu rõ 2D.

**Tóm tắt:** Tạo điều khiển orbit theo yaw và liên kết với camera theo dõi.

**Mục tiêu học tập**

- Đọc hướng quay Q/E.
- Xoay quanh Y bằng tốc độ độ/giây.
- Kiểm tra kết hợp quay và di chuyển.

## 1. Nguyên lý
Để xem bản đồ từ nhiều hướng, **xoay CameraTarget quanh Y**; Cinemachine dùng Follow Offset theo target để orbit. Không xoay riêng Main Camera vì có thể gây xung đột với Cinemachine.

## 2. Cài đặt code
```csharp
[SerializeField] private float rotationSpeed = 90f; // độ mỗi giây

private void HandleRotation() {
    float yaw = 0f;
    if (Input.GetKey(KeyCode.Q)) yaw -= 1f;
    if (Input.GetKey(KeyCode.E)) yaw += 1f;
    transform.Rotate(Vector3.up, yaw * rotationSpeed * Time.deltaTime, Space.World);
}
```
Gọi từ `Update()`. Quy ước Q quay trái, E quay phải có thể đảo dấu theo thói quen người chơi.

## 3. Tại sao không xoay X/Z?
- X: thay đổi góc ngẩng/cúi target và có thể làm lệch mặt phẳng di chuyển.
- Z: tạo roll, đường chân trời nghiêng.
- Y: điều chỉnh yaw quanh phương thẳng đứng, phù hợp camera RTS/isometric.

Trong Inspector, kiểm tra `Cinemachine Follow > Binding Mode`. Nếu `World Space`, yaw có thể không làm offset orbit như mong muốn. Sau đó giảm rotation damping của composer nếu camera xoay quá chậm.

## 4. Kịch bản kiểm thử
Giữ E nửa vòng, sau đó nhấn W. Camera vẫn phải đi về hướng màn hình phía trên. Nhấn Q và E đồng thời phải cho yaw tổng gần 0. Với `rotationSpeed=90`, giữ một giây cho góc khoảng 90° nếu không bị gián đoạn.

## 5. Nâng cấp tùy chọn
Có thể thêm một tùy chọn đảo chiều quay trong settings, hoặc dùng mouse middle drag làm input yaw. Không cần thay kiến trúc CameraTarget/Cinemachine.

## 6. Câu hỏi ôn tập trắc nghiệm

### Câu 1

Trục quay yaw cho camera nhìn bản đồ 3D là trục nào?

A. Y  
B. X  
C. Z  
D. Time  

**Đáp án:** A

**Giải thích:** Yaw xoay quanh phương thẳng đứng.

### Câu 2

Tại sao xoay target thay vì Main Camera?

A. Main Camera không có Transform  
B. Transform chỉ dành cho UI  
C. Cinemachine giữ toàn quyền định vị camera render  
D. Để thay đổi normal map  

**Đáp án:** C

**Giải thích:** Thay đổi mục tiêu tránh xung đột với pipeline Cinemachine.

### Câu 3

Quay 90 độ/giây cần nhân tốc độ với gì trong Update?

A. Time.deltaTime  
B. Screen.width  
C. AudioListener.volume  
D. Camera.nearClipPlane  

**Đáp án:** A

**Giải thích:** Nhân theo giây để tốc độ không phụ thuộc FPS.

### Câu 4

Khi xoay target mà góc nhìn không thay đổi nên xem gì?

A. Tốc độ hạt VFX  
B. Chế độ nén texture  
C. Follow Binding Mode và rotation damping  
D. Chế độ static batching  

**Đáp án:** C

**Giải thích:** Binding/rotation quyết định việc camera orbit.

### Câu 5

Nếu Q và E được giữ đồng thời trong code cộng trừ thì yaw là bao nhiêu?

A. 0  
B. 1  
C. 2  
D. 90  

**Đáp án:** A

**Giải thích:** Hai hướng triệt tiêu nhau.

## 7. Tổng kết

Tạo điều khiển orbit theo yaw và liên kết với camera theo dõi. Hãy tự chạy scene để xác nhận hành vi trước khi mở bài tiếp theo.
