# Zoom bằng khoảng cách Follow Offset

**Loại bài:** Bài giảng và thực hành  |  **Công nghệ:** Unity / C#  |  **Bản chính:** Cinemachine 3.1

> **Yêu cầu đầu vào:** Biết mở Unity Editor, tạo GameObject, gắn MonoBehaviour và lưu Scene. Các ví dụ sử dụng Legacy `UnityEngine.Input` để dễ theo dõi; nếu dùng Input System mới, cần chuyển lớp đọc input tương ứng. Nội dung camera 3D dùng Unity 3D (mặt phẳng XZ) trừ khi tiêu đề nêu rõ 2D.

**Tóm tắt:** Điều chỉnh khoảng cách thực giữa camera và target theo hướng offset, giữ nguyên FOV.

**Mục tiêu học tập**

- Lấy CinemachineFollow và FollowOffset.
- Thay đổi độ dài của offset theo hướng chuẩn hóa.
- Clamp min/max distance và lerp mượt.

## 1. Khác biệt với FOV
Zoom FOV chỉ thay độ rộng góc nhìn, còn zoom Follow Offset **di chuyển điểm đặt camera** gần/xa target. Nếu nhân đôi khoảng cách camera, thay đổi phối cảnh có thể khác hẳn việc đổi FOV. Đây là lựa chọn phổ biến cho camera chiến thuật.

## 2. Tìm component cần chỉnh
Trong Cinemachine 3.1, `Position Control = Follow` tạo component `CinemachineFollow` với `FollowOffset`. Không dùng tên cũ `CinemachineTransposer.m_FollowOffset` của 2.x.

## 3. Mẫu C# hoàn chỉnh
```csharp
using UnityEngine;
using Unity.Cinemachine;

public class OffsetZoom : MonoBehaviour {
    [SerializeField] private CinemachineFollow follow;
    [SerializeField] private float minDistance = 5f, maxDistance = 50f;
    [SerializeField] private float zoomUnitsPerStep = 3f, smoothing = 8f;
    private Vector3 targetOffset;

    private void Awake() {
        if (follow == null) { enabled = false; return; }
        targetOffset = follow.FollowOffset;
    }
    private void Update() {
        float scroll = Input.mouseScrollDelta.y;
        Vector3 direction = targetOffset.sqrMagnitude > 0.0001f ? targetOffset.normalized : new Vector3(0, 1, -1).normalized;
        float distance = Mathf.Clamp(targetOffset.magnitude - scroll * zoomUnitsPerStep,
                                     minDistance, maxDistance);
        targetOffset = direction * distance;
        float t = 1f - Mathf.Exp(-smoothing * Time.deltaTime);
        follow.FollowOffset = Vector3.Lerp(follow.FollowOffset, targetOffset, t);
    }
}
```

## 4. Vì sao phải xử lý trường hợp zero?
Nếu Follow Offset bằng `(0,0,0)`, `.normalized` không cung cấp hướng zoom đáng tin cậy; một hướng dự phòng giúp tránh camera "mắc kẹt". Nếu offset ban đầu mang góc nhìn `(Y>0, Z<0)` thì việc nhân với distance duy trì góc này.

## 5. Thực hành và so sánh
Giữ FOV ở 45–50°, cuộn zoom từ xa vào gần. So sánh với zoom FOV: vị trí tương đối của vật thể gần và xa khác ra sao? Đặt minDistance đủ lớn để không xuyên qua sàn. **Checkpoint:** khoảng cách không vượt phạm vi đặt ra.

## 6. Câu hỏi ôn tập trắc nghiệm

### Câu 1

FollowOffset mô tả đại lượng nào?

A. Vị trí tương đối của camera so với target  
B. Màu của camera  
C. Thời gian Animator  
D. Trạng thái collider  

**Đáp án:** A

**Giải thích:** Offset là vector dịch chuyển tương đối khi Follow.

### Câu 2

Để giữ nguyên hướng nhưng thay khoảng cách, ta thao tác gì?

A. Cộng trực tiếp FOV  
B. Đặt toàn bộ offset thành zero  
C. Nhân offset.normalized với độ dài mới  
D. Đổi EventSystem  

**Đáp án:** C

**Giải thích:** Vector normalized giữ hướng, độ dài quy định distance.

### Câu 3

Class Cinemachine 3.1 chứa FollowOffset là gì?

A. CinemachineFollow  
B. CinemachineTransposer trong namespace cũ  
C. CanvasRenderer  
D. Light  

**Đáp án:** A

**Giải thích:** Follow là body component mới.

### Câu 4

Khi offset bằng vector zero cần điều gì?

A. Tăng FOV lên vô cực  
B. Tắt hết camera  
C. Hướng dự phòng trước khi scale khoảng cách  
D. Đặt FrameRate về 0  

**Đáp án:** C

**Giải thích:** Zero không định nghĩa hướng zoom hợp lý.

### Câu 5

Điều gì khác biệt cốt lõi giữa zoom distance và zoom FOV?

A. Distance dịch chuyển camera, FOV đổi góc nhìn  
B. Cả hai đều sửa albedo  
C. FOV làm camera quay Y  
D. Distance chỉ dành cho 2D  

**Đáp án:** A

**Giải thích:** Hai phương pháp khác nhau về vị trí và phối cảnh.

## 7. Tổng kết

Điều chỉnh khoảng cách thực giữa camera và target theo hướng offset, giữ nguyên FOV. Hãy tự chạy scene để xác nhận hành vi trước khi mở bài tiếp theo.
