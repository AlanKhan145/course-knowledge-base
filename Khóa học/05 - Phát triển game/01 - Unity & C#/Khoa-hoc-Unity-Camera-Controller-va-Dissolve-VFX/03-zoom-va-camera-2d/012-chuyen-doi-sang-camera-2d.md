# Chuyển hệ thống điều khiển từ 3D sang 2D

**Loại bài:** Bài giảng và thực hành  |  **Công nghệ:** Unity / C#  |  **Bản chính:** Cinemachine 3.1

> **Yêu cầu đầu vào:** Biết mở Unity Editor, tạo GameObject, gắn MonoBehaviour và lưu Scene. Các ví dụ sử dụng Legacy `UnityEngine.Input` để dễ theo dõi; nếu dùng Input System mới, cần chuyển lớp đọc input tương ứng. Nội dung camera 3D dùng Unity 3D (mặt phẳng XZ) trừ khi tiêu đề nêu rõ 2D.

**Tóm tắt:** Tái sử dụng input architecture trong game 2D với mặt phẳng XY và zoom Orthographic.

**Mục tiêu học tập**

- Đổi hệ trục di chuyển từ XZ sang XY.
- Quay quanh Z nếu cho phép rotation trong 2D.
- Zoom bằng Orthographic Size.

## 1. Khác nhau về hệ trục
Trong game 3D Y-up, bản đồ thường ở XZ; trong game 2D, nhân vật nằm trên mặt phẳng **XY**, còn Z biểu diễn chiều sâu hiển thị. Vì vậy lệnh W/S tăng giảm Y, và nếu cho quay camera 2D thì dùng rotation quanh Z.

## 2. Setup Cinemachine cho 2D
1. `Main Camera` dùng `Projection = Orthographic`.
2. Tạo `CameraTarget2D` đặt ở `(0,0,0)`.
3. Tạo `Cinemachine Camera` gán target, Follow Offset thường `(0,0,-10)`.
4. Chọn Position Control phù hợp, kiểm tra camera nằm trước sprite và đang nhìn về mặt phẳng XY.
5. Gắn script điều khiển đơn giản vào target.

## 3. Code chuyển động và zoom
```csharp
using UnityEngine;
using Unity.Cinemachine;

public class CameraController2D : MonoBehaviour {
    [SerializeField] private CinemachineCamera cmCamera;
    [SerializeField] private float moveSpeed = 10f;
    [SerializeField] private float rotateSpeed = 80f;
    [SerializeField] private float minSize = 3f, maxSize = 20f;
    [SerializeField] private float step = 2f, smoothing = 8f;
    private float targetSize;

    private void Awake() {
        if (cmCamera == null) { enabled = false; return; }
        targetSize = cmCamera.Lens.OrthographicSize;
    }
    private void Update() {
        float x = (Input.GetKey(KeyCode.D) ? 1 : 0) - (Input.GetKey(KeyCode.A) ? 1 : 0);
        float y = (Input.GetKey(KeyCode.W) ? 1 : 0) - (Input.GetKey(KeyCode.S) ? 1 : 0);
        Vector3 dir = (transform.right * x + transform.up * y).normalized;
        transform.position += dir * moveSpeed * Time.deltaTime;

        float yaw = (Input.GetKey(KeyCode.E) ? 1 : 0) - (Input.GetKey(KeyCode.Q) ? 1 : 0);
        transform.Rotate(Vector3.forward, yaw * rotateSpeed * Time.deltaTime);

        targetSize = Mathf.Clamp(targetSize - Input.mouseScrollDelta.y * step, minSize, maxSize);
        float t = 1f - Mathf.Exp(-smoothing * Time.deltaTime);
        cmCamera.Lens.OrthographicSize = Mathf.Lerp(cmCamera.Lens.OrthographicSize, targetSize, t);
    }
}
```

## 4. Vì sao Orthographic Size?
Khác Perspective, camera Orthographic không thu nhỏ vật thể ở xa theo phối cảnh. `OrthographicSize` xác định **nửa chiều cao khung nhìn theo world units**. Giảm size cho cảm giác phóng to, tăng size cho thu nhỏ. FOV không phải thông số zoom chính.

## 5. Thực hành
Tạo scene có Sprite và Tilemap; kiểm thử WASD, Q/E (có thể tắt rotation trong game 2D top-down), cuộn vào/ra. Chuyển edge-scroll từ XZ sang XY và chuyển drag delta chuột sang `transform.up` khi muốn tích hợp hai tính năng còn lại.

## 6. Câu hỏi ôn tập trắc nghiệm

### Câu 1

Mặt phẳng gameplay mặc định cho 2D dùng các trục nào?

A. X và Y  
B. X và Z  
C. Y và W  
D. Z và W  

**Đáp án:** A

**Giải thích:** Sprite 2D thường bố trí theo XY.

### Câu 2

Camera Orthographic zoom bằng thuộc tính nào?

A. FieldOfView  
B. FarClipPlane duy nhất  
C. OrthographicSize  
D. Smoothness  

**Đáp án:** C

**Giải thích:** Size quyết định nửa chiều cao nhìn thấy.

### Câu 3

Khi xoay màn 2D theo hướng nhìn, trục xoay phù hợp là gì?

A. Z  
B. Y  
C. X  
D. Alpha  

**Đáp án:** A

**Giải thích:** Xoay quanh Z giữ camera hướng vào mặt phẳng XY.

### Câu 4

Giảm OrthographicSize cho kết quả gì?

A. Nhìn thấy vùng rộng hơn  
B. Di chuyển Sprite theo Z  
C. Phóng to vật thể trên màn hình  
D. Tăng ảnh hưởng phối cảnh  

**Đáp án:** C

**Giải thích:** Khung nhìn hẹp đi nên sprite lớn hơn.

### Câu 5

Khi mang WASD từ 3D sang 2D, vector tiến lên nên thay từ đâu sang đâu?

A. Từ transform.forward sang transform.up  
B. Từ transform.right sang zero  
C. Từ Color sang Vector3  
D. Từ Quaternion sang Texture2D  

**Đáp án:** A

**Giải thích:** Hướng lên trên màn hình 2D nằm trên Y.

## 7. Tổng kết

Tái sử dụng input architecture trong game 2D với mặt phẳng XY và zoom Orthographic. Hãy tự chạy scene để xác nhận hành vi trước khi mở bài tiếp theo.
