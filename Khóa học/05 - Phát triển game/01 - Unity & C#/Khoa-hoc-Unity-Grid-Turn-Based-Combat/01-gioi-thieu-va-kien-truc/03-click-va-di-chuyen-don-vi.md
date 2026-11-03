# Bài 01.03 — Click chuột để gửi lệnh di chuyển

**Mốc video:** 03:36–05:35. **Mục tiêu:** điều khiển Unit đến vị trí chuột qua một bộ điều khiển có sẵn.

## 1. Luồng thực thi [Theo video]

Tác giả tạo script quản lý chiến đấu gắn lên một GameObject, lưu tham chiếu tới `Unit`, bắt `GetMouseButtonDown(0)` và chuyển vị trí chuột trong thế giới thành điểm đích cho Unit. Unit dùng module di chuyển và Pathfinding đã có từ trước.

## 2. Mẫu mã dễ hiểu [Ví dụ biên soạn]

```csharp
using UnityEngine;

public class ClickToMoveDemo : MonoBehaviour {
    [SerializeField] private Camera gameCamera;
    [SerializeField] private Transform debugMarker;

    private void Update() {
        if (!Input.GetMouseButtonDown(0)) return;
        Vector3 mouse = Input.mousePosition;
        Vector3 world = gameCamera.ScreenToWorldPoint(mouse);
        world.z = 0f;

        // Demo vị trí đích. Thay bằng Unit.MoveTo(world, onComplete)
        // nếu controller có API tương ứng.
        if (debugMarker != null) debugMarker.position = world;
    }
}
```

Nếu dùng 3D camera phối cảnh, nên raycast với mặt phẳng chiến trường, không dùng trực tiếp cách chuyển tọa độ trên. Ví dụ này dành cho **Unity 2D orthographic**.

## 3. Những thiếu sót cố ý ở bước đầu

Cách click-to-move thô **chưa kiểm tra** giới hạn số bước, vị trí hợp lệ, ô bị chiếm và trạng thái khi Unit đang di chuyển. Những phần này là nội dung của Module 02.

## Thực hành và tự kiểm

Chạy scene; click ba điểm khác nhau, in `world` và ô lưới tương ứng ra Console. Xác nhận unit/controller di chuyển theo đường tìm được. Sau đó đặt một vật cản giữa Unit và điểm đích rồi kiểm tra đường vòng.

**Lỗi thường gặp:** quên gán `gameCamera`, `z` không đúng mặt phẳng, gọi Move cho mọi frame thay vì chỉ khi click, controller không phát callback khi đi xong.
