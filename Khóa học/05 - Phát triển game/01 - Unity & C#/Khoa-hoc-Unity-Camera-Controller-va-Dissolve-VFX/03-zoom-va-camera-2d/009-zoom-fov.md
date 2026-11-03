# Zoom bằng Field of View (FOV)

**Loại bài:** Bài giảng và thực hành  |  **Công nghệ:** Unity / C#  |  **Bản chính:** Cinemachine 3.1

> **Yêu cầu đầu vào:** Biết mở Unity Editor, tạo GameObject, gắn MonoBehaviour và lưu Scene. Các ví dụ sử dụng Legacy `UnityEngine.Input` để dễ theo dõi; nếu dùng Input System mới, cần chuyển lớp đọc input tương ứng. Nội dung camera 3D dùng Unity 3D (mặt phẳng XZ) trừ khi tiêu đề nêu rõ 2D.

**Tóm tắt:** Điều khiển độ rộng góc nhìn qua mouse wheel, có giới hạn và làm mượt.

**Mục tiêu học tập**

- Đọc Input.mouseScrollDelta.y và định hướng cuộn.
- Clamp FOV ở khoảng hợp lý.
- Lerp từ FOV hiện tại tới FOV mục tiêu.

## 1. FOV là gì?
Trong camera **Perspective**, Field of View biểu diễn góc nhìn dọc. FOV nhỏ khiến đối tượng trông lớn hơn, giống zoom ống kính. FOV không trực tiếp thay đổi khoảng cách giữa camera và target; hiệu ứng phối cảnh không giống di chuyển máy quay vật lý.

## 2. Thiết lập API Cinemachine 3.1
```csharp
using UnityEngine;
using Unity.Cinemachine;

public class CameraFovZoom : MonoBehaviour {
    [SerializeField] private CinemachineCamera cmCamera;
    [SerializeField] private float minFov = 10f;
    [SerializeField] private float maxFov = 50f;
    [SerializeField] private float zoomStep = 5f;
    [SerializeField] private float smoothing = 8f;
    private float targetFov;

    private void Awake() {
        if (cmCamera == null) { enabled = false; return; }
        targetFov = cmCamera.Lens.FieldOfView;
    }
    private void Update() {
        float scroll = Input.mouseScrollDelta.y;
        targetFov = Mathf.Clamp(targetFov - scroll * zoomStep, minFov, maxFov);
        float t = 1f - Mathf.Exp(-smoothing * Time.deltaTime);
        cmCamera.Lens.FieldOfView = Mathf.Lerp(cmCamera.Lens.FieldOfView, targetFov, t);
    }
}
```
Gắn script lên CameraTarget, gán `CM_StrategyCamera` vào field. Chỉ giữ **một** script chỉnh Lens để tránh conflict.

## 3. Giải thích quyết định thiết kế
- Cuộn lên có `scroll > 0`; trừ vào FOV để zoom in (quy ước quen thuộc).
- Không nhân deltaTime vào **số bước cuộn**, vì đây là lượng delta của input; chỉ dùng deltaTime trong hệ làm mượt.
- `Mathf.Clamp` ngăn FOV quá nhỏ gây méo/cắt hoặc quá rộng làm người chơi mất kiểm soát.
- Nội suy dùng hệ số $1-e^{-k\Delta t}$ để mức smoothing gần ổn định khi FPS thay đổi.

## 4. Kiểm thử
Cuộn mạnh tới giới hạn gần và xa; kết quả không vượt [10°,50°] trong ví dụ. Chỉnh `smoothing` xuống 2 rồi lên 15 để quan sát khác nhau. Khi đứng yên không cuộn, FOV phải ổn định.

## 5. Lỗi thường gặp
Đổi dấu scroll làm đảo hướng; chưa gán `cmCamera` gây NullReference; dùng `Orthographic` mà kỳ vọng FOV sẽ làm zoom là sai: orthographic dùng `OrthographicSize`.

## 6. Câu hỏi ôn tập trắc nghiệm

### Câu 1

Giảm FOV ở camera Perspective có tác dụng gì?

A. Vật thể trông lớn hơn trong khung nhìn  
B. Camera dịch chuyển target  
C. Chuyển phối cảnh sang 2D  
D. Tăng số lượng polygon  

**Đáp án:** A

**Giải thích:** Góc nhìn hẹp tạo cảm giác zoom in.

### Câu 2

Cuộn chuột lên thường nên thay đổi FOV theo hướng nào để zoom in?

A. Tăng FOV  
B. Đặt FOV bằng 0  
C. Giảm FOV  
D. Không đổi FOV và xoay Y  

**Đáp án:** C

**Giải thích:** FOV hẹp làm đối tượng chiếm nhiều diện tích khung.

### Câu 3

Vì sao kẹp targetFov?

A. Giữ zoom trong giới hạn hợp lý  
B. Để tạo Rigidbody  
C. Để tăng FPS vô hạn  
D. Để tạo animation clip  

**Đáp án:** A

**Giải thích:** Clamp bảo vệ camera khỏi giá trị quá rộng/hẹp.

### Câu 4

Thời gian deltaTime phù hợp ở đâu trong zoom FOV?

A. Nhân trực tiếp vào từng nấc wheel bắt buộc  
B. Thay cho minFov  
C. Trong hệ số làm mượt theo thời gian  
D. Đưa vào Scene name  

**Đáp án:** C

**Giải thích:** Scroll delta là số bước, smoothing vận hành theo thời gian.

### Câu 5

Đối với camera Orthographic, đại lượng zoom chính là gì?

A. Orthographic Size  
B. Field of View  
C. Gamma  
D. Render Queue  

**Đáp án:** A

**Giải thích:** Orthographic size xác định nửa chiều cao world của khung hình.

## 7. Tổng kết

Điều khiển độ rộng góc nhìn qua mouse wheel, có giới hạn và làm mượt. Hãy tự chạy scene để xác nhận hành vi trước khi mở bài tiếp theo.
