# Refactor: tách input, tính toán chuyển động và cấu hình

**Loại bài:** Bài giảng và thực hành  |  **Công nghệ:** Unity / C#  |  **Bản chính:** Cinemachine 3.1

> **Yêu cầu đầu vào:** Biết mở Unity Editor, tạo GameObject, gắn MonoBehaviour và lưu Scene. Các ví dụ sử dụng Legacy `UnityEngine.Input` để dễ theo dõi; nếu dùng Input System mới, cần chuyển lớp đọc input tương ứng. Nội dung camera 3D dùng Unity 3D (mặt phẳng XZ) trừ khi tiêu đề nêu rõ 2D.

**Tóm tắt:** Tổ chức lại script thành những hàm nhỏ dễ kiểm thử và bật/tắt độc lập.

**Mục tiêu học tập**

- Tách HandleKeyboardPan, HandleRotation, HandleEdgeScroll và HandleDragPan.
- Sử dụng SerializeField cho thông số và tùy chọn.
- Tránh cộng sai tốc độ khi nhiều kiểu input đồng thời.

## 1. Vấn đề khi nhồi mọi thứ vào Update
Một hàm Update dài hàng trăm dòng với WASD, cạnh màn hình, kéo chuột, xoay và zoom sẽ khó bảo trì. Khi thêm menu cài đặt hoặc chế độ quay cảnh kết liễu, việc khóa một tính năng trở nên rủi ro.

## 2. Tách chức năng
```csharp
private void Update() {
    HandleKeyboardPan();
    HandleRotation();
    if (useEdgeScrolling && !dragging) HandleEdgeScroll();
    if (useDragPan) HandleDragPan();
    HandleZoom();
}
```
Cần có một nơi duy nhất để quản lý trạng thái đầu vào và thứ tự ưu tiên. Ví dụ, khi `dragging=true`, tắt edge scrolling để không bị hai kiểu lia cùng lúc. Khi đang mở cửa sổ settings, khóa các nhóm điều khiển bằng một cờ `inputEnabled`.

## 3. Cấu hình thông số
```csharp
[Header("Keyboard")]
[SerializeField, Min(0f)] private float moveSpeed = 16f;
[Header("Pan Modes")]
[SerializeField] private bool useEdgeScrolling = true;
[SerializeField] private bool useDragPan = true;
```
`SerializeField` hiển thị trường private trong Inspector, vẫn giữ encapsulation. Hãy đặt tên biến theo **đơn vị đo**: `rotationDegreesPerSecond`, `dragUnitsPerPixel` rõ hơn `speed1`, `speed2`.

## 4. Hai cách xử lý nhiều đầu vào
- **Độc lập:** mỗi hàm tự dịch chuyển target; đơn giản nhưng WASD + edge có thể cộng tốc độ bất ngờ.
- **Gộp:** thu thập vector các nguồn, tổng hợp và clamp magnitude trước khi apply một lần. Phù hợp hệ thống production; riêng drag delta thường xử lý riêng theo đơn vị pixel.

Một hướng production:
```csharp
Vector3 input = Vector3.ClampMagnitude(keyboardDirection + edgeDirection, 1f);
transform.position += input * moveSpeed * Time.deltaTime;
// Drag delta sử dụng hệ số units-per-pixel riêng.
```

## 5. Thực hành
Tạo Inspector với bốn nhóm cài đặt. Tắt drag và edge, kiểm tra WASD vẫn chạy; bật lại từng cái; giữ WASD đồng thời rê chuột tới góc màn hình và bảo đảm tốc độ không tăng vượt mức thiết kế.

## 6. Câu hỏi ôn tập trắc nghiệm

### Câu 1

Lợi ích chính của việc chia nhỏ Update là gì?

A. Mỗi hành vi dễ bật tắt, kiểm thử và bảo trì  
B. Engine bỏ qua Update  
C. Script không cần compile  
D. Camera tự tạo UI  

**Đáp án:** A

**Giải thích:** Các trách nhiệm độc lập giúp kiểm soát thay đổi.

### Câu 2

SerializeField trên trường private giúp gì?

A. Tự động tìm camera  
B. Thay thế MonoBehaviour  
C. Cho chỉnh giá trị trong Inspector mà không public trường  
D. Xóa field khi build  

**Đáp án:** C

**Giải thích:** Unity serialize và hiển thị các trường được đánh dấu.

### Câu 3

Khi drag pan đang hoạt động, edge scrolling thường nên ra sao?

A. Tạm khóa để tránh xung đột  
B. Bắt buộc bật tối đa  
C. Chuyển sang zoom FOV  
D. Xóa target  

**Đáp án:** A

**Giải thích:** Hai kiểu pan đồng thời dễ làm camera trôi.

### Câu 4

Đơn vị đúng cho dragUnitsPerPixel là gì?

A. Độ trên mỗi giây  
B. Pixel trên mỗi material  
C. Đơn vị world trên mỗi pixel  
D. Lần mỗi frame  

**Đáp án:** C

**Giải thích:** Tên biến mô tả phép chuyển đổi của delta chuột.

### Câu 5

Gộp keyboard và edge input rồi ClampMagnitude nhằm mục đích gì?

A. Khống chế tốc độ tổng khi nhiều nguồn kích hoạt  
B. Tăng zoom  
C. Làm shader sáng hơn  
D. Xóa hiện tượng clipping  

**Đáp án:** A

**Giải thích:** Giới hạn độ dài vector đầu vào tránh cộng tốc độ.

## 7. Tổng kết

Tổ chức lại script thành những hàm nhỏ dễ kiểm thử và bật/tắt độc lập. Hãy tự chạy scene để xác nhận hành vi trước khi mở bài tiếp theo.
