# Kiến trúc hệ thống camera và chuẩn bị dự án

**Loại bài:** Bài giảng và thực hành  |  **Công nghệ:** Unity / C#  |  **Bản chính:** Cinemachine 3.1

> **Yêu cầu đầu vào:** Biết mở Unity Editor, tạo GameObject, gắn MonoBehaviour và lưu Scene. Các ví dụ sử dụng Legacy `UnityEngine.Input` để dễ theo dõi; nếu dùng Input System mới, cần chuyển lớp đọc input tương ứng. Nội dung camera 3D dùng Unity 3D (mặt phẳng XZ) trừ khi tiêu đề nêu rõ 2D.

**Tóm tắt:** Nhận diện vai trò của Unity Camera, Cinemachine Camera và tracking target; chuẩn bị dự án 3D phù hợp.

**Mục tiêu học tập**

- Vẽ được luồng điều khiển camera trong Unity.
- Thiết lập Cinemachine Brain và một camera điều khiển bằng Cinemachine.
- Phân biệt API của Cinemachine 2.x với 3.1.

## 1. Bài toán
Một game chiến thuật, xây dựng thành phố hoặc quản lý bản đồ cần camera độc lập với nhân vật. Người chơi yêu cầu di chuyển WASD, quay Q/E, kéo chuột, cuộn tại cạnh và zoom. Nếu script điều khiển trực tiếp mọi thứ trên `Main Camera`, logic đầu vào, smoothing, framing và cấu hình lens sẽ trộn lẫn khó bảo trì.

Giải pháp là dùng **một đối tượng mục tiêu vô hình** làm điểm nhìn; hệ thống nhập liệu thay đổi vị trí/rotation của mục tiêu, còn Cinemachine tạo góc máy thực tế.

## 2. Kiến trúc
```mermaid
flowchart LR
    I[WASD / Q E / Mouse] --> C[CameraController]
    C --> T[CameraTarget Transform]
    T --> V[Cinemachine Camera]
    V --> B[Cinemachine Brain]
    B --> M[Main Camera hiển thị]
```
`CameraController` điều khiển target, **không di chuyển trực tiếp** Main Camera. `Cinemachine Brain` chọn camera Cinemachine hiện hành, áp dụng vị trí, hướng nhìn và lens cho Main Camera.

## 3. Chuẩn bị
1. Tạo Unity project 3D có một mặt phẳng (Plane/Terrain) để kiểm tra chuyển động; đặt vài Cube làm mốc.
2. Mở `Window > Package Manager`, cài **Cinemachine**.
3. Trong scene có `Main Camera` với `Camera` và `Cinemachine Brain` (một số thao tác tạo camera tự thêm Brain).
4. Tạo thư mục `Scenes`, `Scripts/Camera`, `Materials`, `Prefabs`.
5. Chạy Play Mode và kiểm tra Console không có lỗi đỏ.

## 4. Lưu ý quan trọng về phiên bản
Hai họ API không thể thay thế nguyên tên lớp:

| Cinemachine 2.x | Cinemachine 3.1 |
|---|---|
| `using Cinemachine;` | `using Unity.Cinemachine;` |
| `CinemachineVirtualCamera` | `CinemachineCamera` |
| `CinemachineTransposer.m_FollowOffset` | `CinemachineFollow.FollowOffset` |
| `m_Lens.FieldOfView` | `Lens.FieldOfView` |
| Body/Aim | Position Control/Rotation Control |

Khóa học dùng **Cinemachine 3.1** trong các ví dụ chính. Khi xem các hướng dẫn cũ, trước tiên xác định version dự án. API Input minh họa là `UnityEngine.Input` (Legacy Input Manager); bật `Active Input Handling = Both` hoặc `Input Manager (Old)` nếu dự án của bạn đã chuyển hoàn toàn sang Input System.

## 5. Thực hành và checkpoint
Tạo scene `CameraSandbox.unity` với mặt phẳng 60×60 đơn vị và tối thiểu bốn Cube màu khác nhau. Play Mode phải hiển thị cảnh và không cảnh báo thiếu Brain. **Deliverable:** scene mẫu để dùng xuyên suốt khóa học.

## 6. Lỗi thường gặp
- `The type or namespace name 'Cinemachine' could not be found`: dùng namespace 2.x trong dự án 3.1 hoặc chưa cài gói.
- Hai camera Unity cùng render: chỉ giữ Main Camera làm camera xuất hình chính.
- Script Legacy Input phát sinh lỗi: kiểm tra Active Input Handling trước khi sửa mã.

## 7. Câu hỏi ôn tập trắc nghiệm

### Câu 1

Thành phần nào áp dụng trạng thái của Cinemachine lên Main Camera?

A. Cinemachine Brain  
B. Animator  
C. Canvas Scaler  
D. Light Probe  

**Đáp án:** A

**Giải thích:** Brain điều phối kết quả của Cinemachine tới camera render.

### Câu 2

Vì sao nên dùng CameraTarget độc lập?

A. Để tăng số lượng texture  
B. Để làm cho CPU không còn xử lý Update  
C. Tách chuyển động do người chơi khỏi điều khiển ống kính và framing  
D. Để Camera tự động phát âm thanh  

**Đáp án:** C

**Giải thích:** Mục tiêu vô hình làm điểm neo rõ ràng và tái sử dụng được.

### Câu 3

Trong Cinemachine 3.1 nên dùng namespace nào?

A. Unity.Cinemachine  
B. Cinemachine.LegacyOnly  
C. UnityEngine.CameraRig  
D. Unity.VFX  

**Đáp án:** A

**Giải thích:** 3.1 định nghĩa các class ở Unity.Cinemachine.

### Câu 4

Nếu Input.GetKey báo lỗi khi chỉ bật Input System mới thì nên làm gì trước?

A. Xóa Main Camera  
B. Chuyển project sang 2D  
C. Bật chế độ Both hoặc Input Manager (Old), hoặc chuyển mã sang Input System  
D. Tắt mọi shader  

**Đáp án:** C

**Giải thích:** Ví dụ dùng API Legacy Input.

### Câu 5

Đâu là cách chia trách nhiệm phù hợp?

A. Input sửa target, Cinemachine tính camera hiển thị  
B. Input sửa tất cả materials của scene  
C. Mọi Cube tự điều khiển camera  
D. Main Camera tự nhận phím không cần script  

**Đáp án:** A

**Giải thích:** Kiến trúc tách logic điều khiển và lớp kết xuất.

## 8. Tổng kết

Nhận diện vai trò của Unity Camera, Cinemachine Camera và tracking target; chuẩn bị dự án 3D phù hợp. Hãy tự chạy scene để xác nhận hành vi trước khi mở bài tiếp theo.
