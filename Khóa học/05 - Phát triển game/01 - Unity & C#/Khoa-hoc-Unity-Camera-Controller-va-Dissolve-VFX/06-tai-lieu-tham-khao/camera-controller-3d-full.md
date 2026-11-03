# Mã mẫu hoàn chỉnh — Camera chiến thuật 3D (Cinemachine 3.1)

## 1. Phạm vi
Script kết hợp WASD, Q/E, edge scrolling, drag pan và ba lựa chọn zoom; bạn chỉ chọn một chế độ tại một thời điểm. Tham chiếu `CinemachineCamera` và `CinemachineFollow` kéo trong Inspector, scene phải có đúng `CameraTarget`.

## 2. Script CameraController3D.cs
```csharp
using UnityEngine;
using Unity.Cinemachine;

public class CameraController3D : MonoBehaviour {
    public enum ZoomMode { FieldOfView, Distance, Height }

    [Header("References")]
    [SerializeField] private CinemachineCamera cmCamera;
    [SerializeField] private CinemachineFollow cmFollow;
    [Header("Keyboard and rotation")]
    [SerializeField, Min(0)] private float moveSpeed = 16f;
    [SerializeField, Min(0)] private float rotationDegreesPerSecond = 90f;
    [Header("Mouse pan")]
    [SerializeField] private bool useEdgeScrolling = true;
    [SerializeField] private bool useDragPan = true;
    [SerializeField, Min(1)] private float edgeSizePixels = 20f;
    [SerializeField, Min(0)] private float dragUnitsPerPixel = 0.04f;
    [Header("Zoom")]
    [SerializeField] private ZoomMode zoomMode = ZoomMode.Height;
    [SerializeField, Min(0)] private float zoomStep = 3f;
    [SerializeField, Min(0.01f)] private float zoomSmoothing = 8f;
    [SerializeField] private Vector2 fovRange = new Vector2(10, 50);
    [SerializeField] private Vector2 distanceRange = new Vector2(5, 50);
    [SerializeField] private Vector2 heightRange = new Vector2(5, 50);

    private bool dragging;
    private Vector2 previousMouse;
    private float targetFov;
    private Vector3 targetOffset;
    private bool inputEnabled = true;

    private void Awake() {
        if (cmCamera == null || cmFollow == null) {
            Debug.LogError("Assign CinemachineCamera and CinemachineFollow", this);
            enabled = false; return;
        }
        targetFov = cmCamera.Lens.FieldOfView;
        targetOffset = cmFollow.FollowOffset;
    }

    public void SetInputEnabled(bool value) {
        inputEnabled = value;
        if (!value) dragging = false;
    }

    private void Update() {
        if (!inputEnabled) return;
        HandlePlanarPan();
        HandleRotation();
        HandleDragPan();
        HandleZoom();
    }

    private void HandlePlanarPan() {
        float x = (Input.GetKey(KeyCode.D) ? 1 : 0) - (Input.GetKey(KeyCode.A) ? 1 : 0);
        float z = (Input.GetKey(KeyCode.W) ? 1 : 0) - (Input.GetKey(KeyCode.S) ? 1 : 0);

        if (useEdgeScrolling && !dragging) {
            Vector3 p = Input.mousePosition;
            if (p.x >= 0 && p.y >= 0 && p.x <= Screen.width && p.y <= Screen.height) {
                if (p.x < edgeSizePixels) x -= 1f;
                else if (p.x > Screen.width - edgeSizePixels) x += 1f;
                if (p.y < edgeSizePixels) z -= 1f;
                else if (p.y > Screen.height - edgeSizePixels) z += 1f;
            }
        }
        Vector3 direction = (transform.right * x + transform.forward * z).normalized;
        transform.position += direction * moveSpeed * Time.deltaTime;
    }

    private void HandleRotation() {
        float yaw = (Input.GetKey(KeyCode.E) ? 1 : 0) - (Input.GetKey(KeyCode.Q) ? 1 : 0);
        transform.Rotate(Vector3.up, yaw * rotationDegreesPerSecond * Time.deltaTime, Space.World);
    }

    private void HandleDragPan() {
        if (!useDragPan) { dragging = false; return; }
        if (Input.GetMouseButtonDown(1)) {
            dragging = true; previousMouse = Input.mousePosition;
        }
        if (Input.GetMouseButtonUp(1)) dragging = false;
        if (!dragging || !Input.GetMouseButton(1)) return;
        Vector2 current = Input.mousePosition;
        Vector2 delta = current - previousMouse;
        previousMouse = current;
        transform.position += (transform.right * delta.x + transform.forward * delta.y) * dragUnitsPerPixel;
    }

    private void HandleZoom() {
        float scroll = Input.mouseScrollDelta.y;
        float t = 1f - Mathf.Exp(-zoomSmoothing * Time.deltaTime);
        if (zoomMode == ZoomMode.FieldOfView) {
            float lo = Mathf.Min(fovRange.x, fovRange.y), hi = Mathf.Max(fovRange.x, fovRange.y);
            targetFov = Mathf.Clamp(targetFov - scroll * zoomStep, lo, hi);
            cmCamera.Lens.FieldOfView = Mathf.Lerp(cmCamera.Lens.FieldOfView, targetFov, t);
        } else if (zoomMode == ZoomMode.Distance) {
            Vector3 dir = targetOffset.sqrMagnitude > 0.0001f ? targetOffset.normalized : new Vector3(0, 1, -1).normalized;
            float lo = Mathf.Min(distanceRange.x, distanceRange.y), hi = Mathf.Max(distanceRange.x, distanceRange.y);
            float distance = Mathf.Clamp(targetOffset.magnitude - scroll * zoomStep, lo, hi);
            targetOffset = dir * distance;
            cmFollow.FollowOffset = Vector3.Lerp(cmFollow.FollowOffset, targetOffset, t);
        } else {
            float lo = Mathf.Min(heightRange.x, heightRange.y), hi = Mathf.Max(heightRange.x, heightRange.y);
            targetOffset.y = Mathf.Clamp(targetOffset.y - scroll * zoomStep, lo, hi);
            cmFollow.FollowOffset = Vector3.Lerp(cmFollow.FollowOffset, targetOffset, t);
        }
    }
}
```

## 3. Cách gắn
1. `CameraTarget`: gắn `CameraController3D`.
2. `CM_StrategyCamera`: gắn `CinemachineCamera` và `CinemachineFollow` (chọn Position Control=Follow).
3. Kéo hai tham chiếu từ camera Cinemachine vào các trường trong script.
4. Gán Tracking Target = CameraTarget, cấu hình Binding Mode `Lock To Target With World Up`, Rotation Control=Rotation Composer/Hard Look At.
5. Main Camera phải có Cinemachine Brain. Dùng Active Input Handling=Both nếu cần Legacy Input.

## 4. Lưu ý
Cách gộp hướng dùng cả bàn phím và cạnh màn hình; `normalized` ngăn tốc độ tăng quá mức, còn drag dùng đơn vị pixel nên không nhân `deltaTime`. Nếu UI cần chặn input camera, gọi `SetInputEnabled(false)`. Để giữ vị trí zoom khi đổi chế độ runtime, nên đồng bộ lại `targetFov/targetOffset` khi chuyển mode (mã mẫu giả định chọn mode từ Inspector trước Play).
