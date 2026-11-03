# Zoom bằng thay đổi độ cao Y

**Loại bài:** Bài giảng và thực hành  |  **Công nghệ:** Unity / C#  |  **Bản chính:** Cinemachine 3.1

> **Yêu cầu đầu vào:** Biết mở Unity Editor, tạo GameObject, gắn MonoBehaviour và lưu Scene. Các ví dụ sử dụng Legacy `UnityEngine.Input` để dễ theo dõi; nếu dùng Input System mới, cần chuyển lớp đọc input tương ứng. Nội dung camera 3D dùng Unity 3D (mặt phẳng XZ) trừ khi tiêu đề nêu rõ 2D.

**Tóm tắt:** Hạ hoặc nâng camera theo trục Y để thay đổi cả khoảng cách và góc nhìn xuống mặt đất.

**Mục tiêu học tập**

- Chỉ thay thành phần Y của FollowOffset.
- Giữ X/Z ổn định khi zoom.
- Giới hạn minY/maxY và lựa chọn giữa ba chế độ zoom.

## 1. Động cơ thiết kế
Khi camera đang nhìn chéo từ trên xuống, thay đổi chiều cao Y nhưng giữ Z có thể tạo trải nghiệm đặc biệt: zoom gần làm camera hạ xuống, cảnh có góc nhìn ngang hơn, có thể nhìn nhân vật rõ hơn.

## 2. Thuật toán
```csharp
[SerializeField] private CinemachineFollow follow;
[SerializeField] private float minY = 5f, maxY = 50f;
[SerializeField] private float zoomStepY = 3f, smoothing = 8f;
private Vector3 targetOffset;

private void Awake() {
    if (follow != null) targetOffset = follow.FollowOffset;
}
private void Update() {
    if (follow == null) return;
    float wheel = Input.mouseScrollDelta.y;
    targetOffset.y = Mathf.Clamp(targetOffset.y - wheel * zoomStepY, minY, maxY);
    float t = 1f - Mathf.Exp(-smoothing * Time.deltaTime);
    follow.FollowOffset = Vector3.Lerp(follow.FollowOffset, targetOffset, t);
}
```

## 3. Khác biệt giữa ba chế độ
| Chế độ | Thuộc tính đổi | Kết quả chính |
|---|---|---|
| FOV | `Lens.FieldOfView` | Cảm giác zoom quang học; vị trí camera giữ nguyên |
| Distance | `FollowOffset` theo hướng normalized | Camera tiến/lùi theo đường thẳng gần target |
| Height | `FollowOffset.y` | Camera hạ/nâng, thay đổi góc nhìn bản đồ |

Không cho ba script cùng đọc wheel và sửa cùng thuộc tính một cách cạnh tranh. Tạo `enum ZoomMode { FieldOfView, Distance, Height }` và chạy **chỉ một** chế độ được chọn.

## 4. Lưu ý về va chạm
Một camera hạ gần terrain có thể bị tường, model lớn hoặc sàn che khuất. Cần chọn minY hợp lý; dự án nâng cao có thể dùng hệ thống camera collision của Cinemachine hoặc raycast tránh vật cản. Phần này nằm ngoài logic zoom cốt lõi.

## 5. Thực hành
Tạo ba preset zoom cho cùng bản đồ: quan sát toàn cảnh, điều khiển chiến thuật, cận cảnh nhân vật. Ghi lại ảnh chụp của ba phương thức để chọn cảm giác phù hợp gameplay.

## 6. Câu hỏi ôn tập trắc nghiệm

### Câu 1

Height zoom chủ yếu chỉnh thành phần nào của FollowOffset?

A. Y  
B. X  
C. Z  
D. W  

**Đáp án:** A

**Giải thích:** Độ cao của camera theo hệ Y-up là trục Y.

### Câu 2

Với height zoom, thành phần Z của offset thường được xử lý thế nào?

A. Luôn đặt thành 0  
B. Luôn tăng gấp đôi  
C. Giữ nguyên  
D. Dùng giá trị FOV  

**Đáp án:** C

**Giải thích:** Bài tập chỉ thay đổi Y để tạo góc nhìn mới.

### Câu 3

Vì sao nên chọn một ZoomMode tại một thời điểm?

A. Tránh nhiều logic cùng tác động lên zoom và tạo xung đột  
B. Để buộc tắt camera  
C. Vì enum lưu vào shader  
D. Vì Unity không hỗ trợ nhiều hàm  

**Đáp án:** A

**Giải thích:** Một nguồn quyết định giúp kết quả có thể dự đoán.

### Câu 4

minY nên chọn đủ lớn nhằm hạn chế vấn đề gì?

A. Độ phân giải texture giảm  
B. Mất trigger Animator  
C. Camera xuyên hoặc bị che bởi sàn/vật thể  
D. Mất collider đạn  

**Đáp án:** C

**Giải thích:** Camera hạ quá thấp dễ bị geometry chắn tầm nhìn.

### Câu 5

Loại zoom nào chỉ đổi góc nhìn quang học mà không chuyển camera?

A. FOV zoom  
B. Distance zoom  
C. Height zoom  
D. Camera shake  

**Đáp án:** A

**Giải thích:** FOV thay lens, không trực tiếp đổi vị trí.

## 7. Tổng kết

Hạ hoặc nâng camera theo trục Y để thay đổi cả khoảng cách và góc nhìn xuống mặt đất. Hãy tự chạy scene để xác nhận hành vi trước khi mở bài tiếp theo.
