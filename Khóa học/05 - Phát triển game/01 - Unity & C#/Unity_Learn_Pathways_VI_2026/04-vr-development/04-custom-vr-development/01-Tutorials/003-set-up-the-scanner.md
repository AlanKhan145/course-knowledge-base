# Bài 03 — Thiết lập công cụ quét vật thể trong VR

> **Lộ trình:** VR Development · **Học phần:** Custom VR Development · **Nền tảng:** Unity 6.3 · **Dạng:** tutorial.
>
> **Lưu ý:** Các quy trình và mã bên dưới là ví dụ thực hành độc lập, không phải bản chép nguyên văn hướng dẫn hay đề kiểm tra chính thức của Unity. Cần đối chiếu tài nguyên scene, prefab và phiên bản package trong dự án thực tế.

## 1. Tổng quan

Một **scanner** (máy quét) trong VR có thể được thiết kế như thiết bị cầm tay phát tia về phía trước. Bài tập này tập trung xây dựng đúng cấu trúc GameObject và hệ tham chiếu trước khi viết logic dò tia. Ví dụ minh họa dùng `Physics.Raycast`; đó là một lựa chọn triển khai, không phải cấu trúc bắt buộc của mọi bộ công cụ XR.

## 2. Mục tiêu học tập

- Tạo prefab scanner có thể nhặt bằng hệ tương tác XR.
- Cấu hình đầu phát tia, collider và layer của mục tiêu.
- Xác minh hướng và phạm vi quét trong Play Mode.

## 3. Thiết kế cấu trúc thiết bị

```text
Scanner (gốc, XR Grab Interactable, Collider, Rigidbody)
├── Body (Mesh Renderer)
├── Muzzle (Transform xác định hướng tia)
├── Beam (Line Renderer, tùy chọn)
└── Feedback (đèn/trạng thái, tùy chọn)
```

`Muzzle` là một Transform rỗng nằm ở đầu máy quét. Hướng **trục Z dương** của nó thường dùng làm hướng tia qua `muzzle.forward`; cần nhìn gizmo local axes để bảo đảm tia không bắn ngược.

## 4. Chuẩn bị mục tiêu và lớp va chạm

| Đối tượng | Component tối thiểu | Vai trò |
|---|---|---|
| Scanner | `Collider`, `Rigidbody`, component Grab phù hợp | Cầm và di chuyển |
| Muzzle | `Transform` | Điểm xuất phát, hướng quét |
| Mục tiêu | `Collider` | Nhận `Physics.Raycast` |
| Phản hồi | Mesh/Light/Canvas | Hiển thị hit hoặc miss |

Nếu chỉ muốn quét một nhóm đối tượng, tạo Physics Layer riêng (ví dụ `Scannable`) và thiết lập `LayerMask`. Không nhầm với Interaction Layer Mask của XR Interaction Toolkit.

## 5. Các bước trong Unity

1. Tạo GameObject `Scanner` và thêm hình dạng đơn giản để dễ nhìn.
2. Gắn Collider phù hợp với thân thiết bị, cùng Rigidbody nếu cơ chế Grab yêu cầu.
3. Thêm `XR Grab Interactable` (hoặc thành phần tương ứng trong phiên bản XR của dự án), thử cầm và thả.
4. Tạo GameObject con `Muzzle`; kéo đến đầu nòng và xoay để local Z hướng ra trước.
5. Tạo vật thể mục tiêu có Collider. Kiểm tra Layer và khoảng cách từ scanner đến vật thể.
6. Nếu dùng `Line Renderer`, đặt hai điểm đầu/cuối để nhìn được đường quét; chiều dài, vật liệu và độ rộng là giá trị thử nghiệm, không có một mức cố định cho mọi thiết bị.

## 6. Kiểm tra hướng tia trước khi lập trình

Trong script điều khiển, đoạn ngắn sau cho phép nhìn tia trong Scene view khi Play Mode:

```csharp
using UnityEngine;

public class ScannerDirectionDebug : MonoBehaviour
{
    [SerializeField] private Transform muzzle;
    [SerializeField, Min(0.1f)] private float range = 5f;

    private void Update()
    {
        if (muzzle != null)
            Debug.DrawRay(muzzle.position, muzzle.forward * range, Color.cyan);
    }
}
```

`Debug.DrawRay` hiển thị trong Scene view (và Game view khi cấu hình gizmo cho phép); nó **không phải** hiệu ứng laser hiện cho người chơi trên HMD. Muốn có laser thực tế, dùng `Line Renderer` hoặc VFX.

## 7. Lỗi thường gặp và tiêu chí hoàn thành

- **Quét ngược:** trục Z của `Muzzle` quay sai.
- **Máy quét xuyên tay hoặc rơi bất thường:** kiểm tra Rigidbody/Collider và chính sách movement của Grab.
- **Không hit đối tượng:** Collider thiếu, layer bị loại hoặc range quá ngắn.
- **Tia hiện trong Scene view nhưng mất trên HMD:** `Debug.DrawRay` chỉ phục vụ debug.

**Checkpoint:** Nhặt được thiết bị, hướng đầu quét chính xác vào ba mục tiêu khác nhau, nhìn thấy tia debug đúng chiều và phân biệt rõ các Physics Layer.

## 8. Câu hỏi ôn tập trắc nghiệm

### Câu 1

`muzzle.forward` biểu diễn gì?

A. Hướng local Z dương trong hệ tọa độ thế giới  
B. Vị trí của Muzzle  
C. Tốc độ tia  
D. Kích thước Collider  

**Đáp án:** A. **Giải thích:** Transform.forward cung cấp vector hướng dựa trên trục Z của Transform.

### Câu 2

Vì sao mục tiêu cần Collider nếu dùng `Physics.Raycast`?

A. Để hoạt ảnh chạy  
B. Để hệ vật lý phát hiện điểm hit  
C. Để tăng FPS  
D. Để XR Origin di chuyển  

**Đáp án:** B. **Giải thích:** Raycast truy vấn các collider trong cảnh.

### Câu 3

Cách nào biến tia debug thành đường quét hiển thị trên HMD?

A. Tăng brightness  
B. Đổi tag  
C. Đổi camera FOV  
D. Dùng Line Renderer hoặc hiệu ứng render phù hợp  

**Đáp án:** D. **Giải thích:** Debug.DrawRay chỉ là công cụ quan sát trong Editor.

### Câu 4

Scanner đã cầm được nhưng tia bắn lệch, nên xem gì?

A. File README  
B. Mức âm lượng  
C. Vị trí/hướng của Muzzle  
D. Tên vật liệu  

**Đáp án:** C. **Giải thích:** Điểm xuất phát và phương quét do Transform Muzzle quyết định.

### Câu 5

Physics Layer Mask trong scanner nhằm mục đích gì?

A. Điều khiển FPS  
B. Giới hạn nhóm Collider mà ray có thể phát hiện  
C. Lưu mật mã  
D. Điều khiển haptic  

**Đáp án:** B. **Giải thích:** LayerMask lọc hit của truy vấn vật lý.

---

**Đọc thêm:** [Unity Learn — Custom VR Development](https://learn.unity.com/pathway/vr-development/unit/mission-4-custom-vr-development?version=6.3). Tên mục học và phiên bản đối chiếu theo danh mục Unity 6.3; thao tác và kết quả có thể thay đổi khi package được cập nhật.
