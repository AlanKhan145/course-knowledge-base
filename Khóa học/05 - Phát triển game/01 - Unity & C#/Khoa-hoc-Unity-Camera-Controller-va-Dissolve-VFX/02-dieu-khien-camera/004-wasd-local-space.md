# Di chuyển WASD theo hệ tọa độ của camera

**Loại bài:** Bài giảng và thực hành  |  **Công nghệ:** Unity / C#  |  **Bản chính:** Cinemachine 3.1

> **Yêu cầu đầu vào:** Biết mở Unity Editor, tạo GameObject, gắn MonoBehaviour và lưu Scene. Các ví dụ sử dụng Legacy `UnityEngine.Input` để dễ theo dõi; nếu dùng Input System mới, cần chuyển lớp đọc input tương ứng. Nội dung camera 3D dùng Unity 3D (mặt phẳng XZ) trừ khi tiêu đề nêu rõ 2D.

**Tóm tắt:** Khắc phục lỗi di chuyển theo trục thế giới khi camera đã xoay.

**Mục tiêu học tập**

- Xây dựng input W/A/S/D thành vector X/Z.
- Dùng transform.forward và transform.right để di chuyển theo hướng camera.
- Chuẩn hóa vector chéo và sử dụng deltaTime.

## 1. Vấn đề global space
Trong 3D, di chuyển trên mặt đất sử dụng **X và Z**, không phải X và Y. Một cách làm sai khi camera đã xoay là:
```csharp
transform.position += new Vector3(horizontal, 0f, vertical) * speed * Time.deltaTime;
```
Vector này luôn hướng theo trục thế giới. Nếu target xoay 90°, bấm W có thể khiến góc nhìn sang trái màn hình thay vì tiến về phía trước.

## 2. Giải pháp local space
Cần biểu diễn đầu vào theo các hướng của chính target:

$$
\mathbf{d} = x\,\mathbf{r} + z\,\mathbf{f}
$$

Trong đó $\mathbf{r}$ là `transform.right`, $\mathbf{f}$ là `transform.forward`. Với camera chỉ quay quanh Y, hai vector này nằm trên mặt phẳng XZ. `normalized` bảo đảm bấm W+D không nhanh hơn W.

```csharp
[SerializeField] private float moveSpeed = 16f;

private void HandleKeyboardPan() {
    float x = 0f, z = 0f;
    if (Input.GetKey(KeyCode.A)) x -= 1f;
    if (Input.GetKey(KeyCode.D)) x += 1f;
    if (Input.GetKey(KeyCode.S)) z -= 1f;
    if (Input.GetKey(KeyCode.W)) z += 1f;

    Vector3 localMove = (transform.right * x + transform.forward * z).normalized;
    transform.position += localMove * moveSpeed * Time.deltaTime;
}
```
Đặt hàm trong `Update()` của script gắn lên `CameraTarget`.

## 3. Giải thích
- `GetKey` duy trì chuyển động khi giữ phím; `GetKeyDown` chỉ đúng trong frame bắt đầu nhấn.
- `Time.deltaTime` giữ tốc độ tương đương giữa 30 và 120 FPS.
- `normalized` giữ hướng nhưng chỉnh độ lớn vector về 1 (nếu không phải zero).
- Nếu muốn camera luôn di chuyển ngang mặt đất dù target có pitch, chiếu forward/right lên mặt phẳng XZ trước khi normalize.

## 4. Thực hành
Xoay target 0°, 90°, 180° rồi di chuyển bằng W/A/S/D. Kết quả đạt khi W luôn đưa camera tiến theo hướng nhìn trên mặt đất; thử cả W+D để kiểm tra tốc độ chéo.

## 5. Câu hỏi ôn tập trắc nghiệm

### Câu 1

Ở scene 3D Y-up, phím W thường tăng trục nào của input mặt đất?

A. Z  
B. Y  
C. W  
D. Alpha  

**Đáp án:** A

**Giải thích:** Mặt đất thông thường nằm trên XZ.

### Câu 2

Để WASD đúng sau khi xoay target cần dùng cơ sở vector nào?

A. Vector3.up và Vector3.down  
B. Camera.clearFlags  
C. transform.forward và transform.right  
D. Material.color  

**Đáp án:** C

**Giải thích:** Local vectors quay theo transform.

### Câu 3

Tại sao normalize hướng di chuyển?

A. Tránh tăng tốc khi nhấn chéo hai phím  
B. Tăng tốc độ lên gấp đôi  
C. Bật physics  
D. Xóa trạng thái camera  

**Đáp án:** A

**Giải thích:** Vector chéo có độ dài căn hai nếu không chuẩn hóa.

### Câu 4

deltaTime dùng trong chuyển động liên tục vì lý do gì?

A. Giảm màu sắc vật liệu  
B. Thay thế input  
C. Giảm phụ thuộc vào FPS  
D. Khóa góc quay  

**Đáp án:** C

**Giải thích:** Nhân với thời gian frame giúp tốc độ theo đơn vị/giây.

### Câu 5

Bấm giữ W trong nhiều frame thì dùng phương thức nào?

A. Input.GetKey  
B. Input.GetKeyDown  
C. Input.GetKeyUp  
D. Input.mouseScrollDelta  

**Đáp án:** A

**Giải thích:** GetKey đúng trong suốt thời gian giữ phím.

## 6. Tổng kết

Khắc phục lỗi di chuyển theo trục thế giới khi camera đã xoay. Hãy tự chạy scene để xác nhận hành vi trước khi mở bài tiếp theo.
