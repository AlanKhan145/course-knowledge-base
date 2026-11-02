# Bài 03 — Xác định khi người dùng chạm vào một mặt phẳng AR

> **Khóa học:** Mobile AR Development · **Môi trường tham chiếu:** Unity 2022.3, AR Foundation 5.x.  
> **Kết quả:** Chỉ trả về vị trí đặt đối tượng khi điểm chạm thực sự giao với mặt phẳng đang được AR theo dõi.

## 1. Bài toán

Một lần chạm màn hình không đồng nghĩa với việc người dùng đã chọn được mặt phẳng thật. Ứng dụng cần thực hiện **AR raycast**: dùng tọa độ chạm 2D để tìm giao điểm với `ARPlane`. Phép thử này khác `Physics.Raycast` thông thường vì đối tượng đích là các trackable do hệ thống AR cung cấp, không nhất thiết là Collider của mô hình 3D.

## 2. Mục tiêu

- Giải thích chuỗi: touch → `ARRaycastManager.Raycast` → `ARRaycastHit.pose`.
- Chỉ xử lý điểm chạm nằm bên trong đa giác mặt phẳng được phát hiện.
- Phân biệt trường hợp có và không có hit; ngăn thao tác đặt đối tượng ngoài bề mặt.
- Kiểm tra kết quả trên thiết bị thật ở các góc quan sát khác nhau.

## 3. Sơ đồ xử lý

```mermaid
flowchart TD
    A[TouchPhase.Began] --> B[Lấy touch.position]
    B --> C[ARRaycastManager.Raycast]
    C --> D{Hit trên PlaneWithinPolygon?}
    D -- Không --> E[Không đặt vật thể]
    D -- Có --> F[Lấy hits[0].pose]
    F --> G[Vị trí và hướng để đặt prefab]
```

`TrackableType.PlaneWithinPolygon` hạn chế hit vào vùng đa giác đã được AR nhận diện; nó phù hợp khi không muốn đặt portal ở bên ngoài ranh giới mặt phẳng. Danh sách hit được sắp theo khoảng cách, vì thế `hits[0]` là hit gần nhất theo truy vấn.

## 4. Cài đặt ví dụ

Trước khi lập trình, scene cần `AR Session`, `XR Origin`, `AR Plane Manager` và `AR Raycast Manager`. Tạo script `PlaneTouchDetector.cs` rồi kéo đối tượng chứa `AR Raycast Manager` vào trường Inspector.

```csharp
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.XR.ARFoundation;
using UnityEngine.XR.ARSubsystems;

public class PlaneTouchDetector : MonoBehaviour
{
    [SerializeField] private ARRaycastManager raycastManager;
    private static readonly List<ARRaycastHit> Hits = new List<ARRaycastHit>();

    private void Update()
    {
        if (raycastManager == null || Input.touchCount == 0) return;

        Touch touch = Input.GetTouch(0);
        if (touch.phase != TouchPhase.Began) return;

        bool foundPlane = raycastManager.Raycast(
            touch.position, Hits, TrackableType.PlaneWithinPolygon);

        if (!foundPlane || Hits.Count == 0)
        {
            Debug.Log("No tracked plane under touch");
            return;
        }

        Pose placementPose = Hits[0].pose;
        Debug.Log($"Plane hit at: {placementPose.position}");
    }
}
```

`Pose` gồm `position` và `rotation`; cả hai cần thiết để một portal có thể nằm đúng mặt sàn hoặc xoay theo bề mặt. Ví dụ chỉ ghi log, chưa tự tạo vật thể. Nếu dự án chỉ dùng Input System mới thì thay phần lấy touch hoặc bật chế độ hỗ trợ API Input cũ.

## 5. Thực hành kiểm thử

1. Build lên điện thoại, lia camera chậm cho đến khi có mặt phẳng được phát hiện.
2. Chạm **bên trong** vùng mặt bàn đã nhận diện: log cần xuất hiện vị trí 3D.
3. Chạm lên vùng chưa được nhận diện: script cần báo không có hit, không sử dụng tọa độ mặc định `(0,0,0)` để đặt đối tượng.
4. Di chuyển máy, chạm các vị trí khác nhau và quan sát thay đổi của `Pose`.
5. Nếu có UI phủ màn hình, thử chạm UI và thiết kế điều kiện bỏ qua các thao tác ấy trước khi raycast.

| Kiểm thử | Điều cần xác minh |
|---|---|
| Chạm trong đa giác mặt phẳng | `Raycast` thành công, `Hits.Count > 0` |
| Chạm ngoài vùng theo dõi | Không xử lý kết quả đặt đối tượng |
| Manager chưa được gán | Không xảy ra `NullReferenceException` |
| Tracking chưa ổn định | Ứng dụng phản hồi an toàn và cho phép thử lại |

## 6. Debug có hệ thống

Nếu `Raycast` luôn trả về `false`, lần lượt kiểm tra: thiết bị có hỗ trợ AR; camera và plane manager có đang tracking; `raycastManager` đã gán đúng trong Inspector; touch được ghi nhận; `PlaneWithinPolygon` có quá hạn chế đối với vùng đang quét hay không. Chỉ sửa một yếu tố mỗi lần để xác định nguyên nhân.

**Lưu ý:** Raycast cho phép tìm pose tại thời điểm chạm. Đối tượng cần đứng yên ổn định lâu dài có thể cần cơ chế anchor phù hợp theo nền tảng; không nên tự giả định pose sẽ bất biến khi hệ thống AR cập nhật thế giới.

## 7. Bài tập

Tạo chức năng hiển thị dấu đánh dấu nhỏ (marker) tại vị trí hit, chỉ khi có mặt phẳng hợp lệ. Viết ra khác biệt giữa marker đặt từ `Physics.Raycast` vào Collider và marker đặt từ `ARRaycastManager` vào `ARPlane`.

## 8. Câu hỏi ôn tập

**Câu 1.** `ARRaycastManager` phục vụ việc gì?  
A. Phát nhạc · B. Đặt màu vật liệu · C. Tìm giao điểm màn hình với trackable AR · D. Điều khiển ánh sáng  
**Đáp án: C.** Nó chuyển ý định chạm thành kết quả hit-test với dữ liệu AR.

**Câu 2.** Tại sao chọn `PlaneWithinPolygon`?  
A. Để giảm chạm ngoài vùng mặt phẳng được nhận diện · B. Để phát hiện khuôn mặt · C. Để chụp ảnh · D. Để xóa plane  
**Đáp án: A.** Bộ lọc yêu cầu hit nằm trong đa giác của mặt phẳng.

**Câu 3.** Khi `Raycast` không có hit, ứng dụng nên làm gì?  
A. Spawn tại origin · B. Spawn tại camera · C. Spawn liên tục · D. Không đặt vật thể và chờ lần chạm hợp lệ  
**Đáp án: D.** Không có đủ căn cứ để chọn vị trí 3D.

**Câu 4.** `ARRaycastHit.pose` chứa gì?  
A. Độ phân giải màn hình · B. Vị trí và hướng · C. FPS và RAM · D. Màu pixel  
**Đáp án: B.** Pose biểu diễn một tư thế trong không gian 3D.

**Câu 5.** Vì sao không chỉ dùng `touch.position` để đặt portal 3D?  
A. Vì đó là tên của camera · B. Vì luôn là số âm · C. Vì chỉ là tọa độ 2D · D. Vì nó không thể ghi log  
**Đáp án: C.** Touch phải qua hit-test mới xác định được vị trí bề mặt trong thế giới.

## 9. Tổng kết

Mọi thao tác đặt vật thể lên bề mặt AR đều cần kiểm tra kết quả hit-test. Chỉ khi raycast hợp lệ mới sử dụng `Pose` để tiếp tục tạo đối tượng.

**Đọc thêm:** [ARCore — Raycasts trong AR Foundation](https://developers.google.com/ar/develop/unity-arf/hit-test/developer-guide).
