# Edge scrolling: rê chuột đến mép màn hình

**Loại bài:** Bài giảng và thực hành  |  **Công nghệ:** Unity / C#  |  **Bản chính:** Cinemachine 3.1

> **Yêu cầu đầu vào:** Biết mở Unity Editor, tạo GameObject, gắn MonoBehaviour và lưu Scene. Các ví dụ sử dụng Legacy `UnityEngine.Input` để dễ theo dõi; nếu dùng Input System mới, cần chuyển lớp đọc input tương ứng. Nội dung camera 3D dùng Unity 3D (mặt phẳng XZ) trừ khi tiêu đề nêu rõ 2D.

**Tóm tắt:** Tạo camera tự lia khi con trỏ ở cạnh Game view, có tùy chọn bật/tắt.

**Mục tiêu học tập**

- Đọc tọa độ pixel chuột và độ rộng/cao màn hình.
- Phát hiện vùng cạnh trên/dưới/trái/phải.
- Ngăn lia ngoài ý muốn khi chuột ở ngoài Game view.

## 1. Vùng phát hiện cạnh
`Input.mousePosition` trả về tọa độ màn hình (pixel), gốc ở góc trái dưới. Tạo vùng biên dày $e$ pixel:

- trái: `x < e`, phải: `x > Screen.width - e`;
- dưới: `y < e`, trên: `y > Screen.height - e`.

Các góc sẽ tạo chuyển động chéo, nên normalize hướng để giữ tốc độ nhất quán.

## 2. Triển khai
```csharp
[SerializeField] private bool useEdgeScrolling = true;
[SerializeField, Min(1)] private float edgeSize = 20f;
[SerializeField] private float edgeSpeed = 16f;

private void HandleEdgeScroll() {
    if (!useEdgeScrolling) return;
    Vector3 p = Input.mousePosition;
    // Tránh auto-pan khi chuột ra khỏi cửa sổ Game.
    if (p.x < 0 || p.y < 0 || p.x > Screen.width || p.y > Screen.height) return;

    float x = p.x < edgeSize ? -1f : (p.x > Screen.width - edgeSize ? 1f : 0f);
    float z = p.y < edgeSize ? -1f : (p.y > Screen.height - edgeSize ? 1f : 0f);
    Vector3 dir = (transform.right * x + transform.forward * z).normalized;
    transform.position += dir * edgeSpeed * Time.deltaTime;
}
```

## 3. Tương tác với UI
Trong game thực, không edge-scroll nếu con trỏ đang kéo thả lá bài, chỉnh UI, hoặc panel có hành vi kéo. Có thể kiểm tra UI bằng `EventSystem.current.IsPointerOverGameObject()` khi có EventSystem, hoặc tùy chọn khóa edge-scroll lúc UI modal mở. Phần này là cơ chế bổ sung khi tích hợp giao diện, không mặc định trong đoạn ví dụ.

## 4. Kiểm thử
Ở 1920×1080, `edgeSize=20` nghĩa là biên rộng 20 pixel; trên màn hình khác giá trị này vẫn là **pixel**, không phải tỷ lệ. Thử bốn cạnh, bốn góc, đưa chuột ra ngoài Game view, bật và tắt option từ Inspector. Điểm đạt: không trôi khi chuột không ở vùng Game hợp lệ.

## 5. Câu hỏi ôn tập trắc nghiệm

### Câu 1

Input.mousePosition biểu diễn vị trí chuột theo đơn vị gì?

A. Pixel màn hình  
B. Mét thế giới  
C. Độ yaw  
D. Giây  

**Đáp án:** A

**Giải thích:** Đây là screen coordinates.

### Câu 2

Đâu là điều kiện chuột ở mép phải?

A. x < edgeSize  
B. y < edgeSize  
C. x > Screen.width - edgeSize  
D. x == 0  

**Đáp án:** C

**Giải thích:** Cạnh phải gần width của màn hình.

### Câu 3

Tại góc trên phải, vector đầu vào nên có dấu nào?

A. x dương và z dương  
B. x âm và z âm  
C. x bằng 0 và z âm  
D. y tăng trong world  

**Đáp án:** A

**Giải thích:** Góc trên phải cần di chuyển phải và lên trên mặt đất.

### Câu 4

Tại sao cần kiểm tra chuột ngoài Game view?

A. Để tăng kích thước FOV  
B. Để ngắt Animator  
C. Tránh camera trôi ngoài ý muốn khi con trỏ rời vùng chơi  
D. Để thay đổi Cursor texture  

**Đáp án:** C

**Giải thích:** Giá trị chuột ngoài viewport có thể thỏa điều kiện cạnh nếu không chặn.

### Câu 5

Tùy chọn useEdgeScrolling mang ý nghĩa gì?

A. Cho người chơi bật/tắt kiểu lia bằng cạnh  
B. Bắt buộc thay đổi shader  
C. Tự quay camera 360 độ  
D. Chỉ lưu vị trí chuột  

**Đáp án:** A

**Giải thích:** Tính năng nên tùy chỉnh theo nhu cầu người chơi.

## 6. Tổng kết

Tạo camera tự lia khi con trỏ ở cạnh Game view, có tùy chọn bật/tắt. Hãy tự chạy scene để xác nhận hành vi trước khi mở bài tiếp theo.
