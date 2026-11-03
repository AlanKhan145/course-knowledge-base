# Bài 04.03 — Camera tự chuyển đến Unit đang hoạt động

**Mốc video:** 23:49–25:39. **Mục tiêu:** hỗ trợ người chơi theo dõi lượt và xem bản đồ rõ ràng.

## 1. Ý tưởng [Theo video]

Tác giả đã có camera movement handler từ trước. Khi chọn Unit tiếp theo, hệ thống gọi chức năng **pan camera** đến Unit đó. Video demo việc camera chuyển qua lại khi đổi lượt.

## 2. Mã camera minh họa [Ví dụ biên soạn]

```csharp
using UnityEngine;

public class CameraTurnFocus : MonoBehaviour {
    [SerializeField] private Transform cameraTransform;
    [SerializeField] private float followSpeed = 8f;
    private Vector3 target;

    public void Focus(Vector3 worldPosition) {
        target = new Vector3(worldPosition.x, worldPosition.y,
                             cameraTransform.position.z);
    }

    private void LateUpdate() {
        cameraTransform.position = Vector3.Lerp(
            cameraTransform.position, target, 1f - Mathf.Exp(-followSpeed * Time.deltaTime));
    }
}
```

Lưu ý camera script này **chỉ dành cho scene 2D**. Gán `target` ban đầu bằng vị trí camera để tránh cú nhảy khi bắt đầu. Nếu camera dùng Cinemachine, thiết lập target thay vì tự sửa transform.

## 3. Các chi tiết UX nên thêm [Ví dụ biên soạn]

- Viền hoặc biểu tượng Unit đang hoạt động.
- Thanh trạng thái: `Xanh / Đỏ`, `Move còn?`, `Attack còn?`.
- Thông báo ngắn khi click ô không hợp lệ hoặc địch ngoài tầm.
- Nút **End Turn** tương đương Space cho người chơi mobile.
- Camera giữ được quyền người chơi kéo/zoom nếu muốn.

## Thực hành

Sau 6 lần chuyển lượt, kiểm tra camera luôn kết thúc tại đúng Unit; không bị nhảy sang nhân vật cũ và không mất quyền điều khiển khi chuyển camera.
