# Đạn, Raycast ngắm bắn và kích hoạt tan rã khi trúng đích

**Loại bài:** Bài giảng và thực hành  |  **Công nghệ:** Unity / C#  |  **Bản chính:** Cinemachine 3.1

> **Yêu cầu đầu vào:** Biết mở Unity Editor, tạo GameObject, gắn MonoBehaviour và lưu Scene. Các ví dụ sử dụng Legacy `UnityEngine.Input` để dễ theo dõi; nếu dùng Input System mới, cần chuyển lớp đọc input tương ứng. Nội dung camera 3D dùng Unity 3D (mặt phẳng XZ) trừ khi tiêu đề nêu rõ 2D.

**Tóm tắt:** Gắn hệ thống VFX vào gameplay qua collider và sự kiện bắn đạn.

**Mục tiêu học tập**

- Tổ chức Bullet prefab với Collider/Rigidbody.
- Dùng Raycast để lấy mục tiêu và xác định hướng bắn.
- Gọi DissolutionController khi projectile va chạm enemy.

## 1. Luồng gameplay
1. Người chơi nhấn nút bắn/skill.
2. Camera phóng một tia Raycast từ tâm màn hình để xác định `targetPoint`; không hit thì dùng một điểm xa trên tia.
3. Sau một khoảng delay khớp animation tấn công, spawn projectile tại `firePoint`.
4. Tính `direction = (targetPoint - firePoint.position).normalized`, cấp vận tốc cho Rigidbody.
5. Nếu đạn chạm Enemy Collider, gọi `DissolutionController.Dissolve()`.

## 2. Script cho viên đạn
```csharp
using UnityEngine;

[RequireComponent(typeof(Collider))]
public class DissolveProjectile : MonoBehaviour {
    [SerializeField] private float lifetime = 5f;
    private void Start() => Destroy(gameObject, lifetime);
    private void OnCollisionEnter(Collision hit) {
        DissolutionController enemy = hit.collider.GetComponentInParent<DissolutionController>();
        if (enemy != null) enemy.Dissolve();
        Destroy(gameObject);
    }
}
```
**Cấu hình:** Projectile prefab có `SphereCollider` và `Rigidbody`; Collider của enemy ở đúng vị trí mesh. Nếu dùng `isTrigger`, đổi sang `OnTriggerEnter(Collider other)` thay vì OnCollisionEnter. Không áp dụng hai loại callback như nhau.

## 3. Tính hướng bắn bằng Raycast
```csharp
Ray ray = Camera.main.ViewportPointToRay(new Vector3(0.5f, 0.5f, 0f));
Vector3 target = Physics.Raycast(ray, out RaycastHit hit, 200f)
    ? hit.point : ray.GetPoint(200f);
Vector3 direction = (target - firePoint.position).normalized;
```
Đây là **một phần** của hệ thống bắn. Phần cấp vận tốc/animation/cooldown phụ thuộc dự án; Unity 6 dùng `Rigidbody.linearVelocity`, trong khi nhiều phiên bản cũ dùng `Rigidbody.velocity`. Hãy chọn API đúng bản Unity đang chạy.

## 4. Điểm cần lưu ý
- Khớp thời gian animation bắn: sinh đạn sau `fireDelay`, không nhất thiết cùng frame với click.
- Chặn friendly fire bằng layer/tag hoặc kiểm tra team nếu game có nhiều phe.
- Đạn nhanh dễ xuyên Collider: chọn collision detection phù hợp.
- Chỉ enemy sở hữu `DissolutionController` mới tan rã; các vật khác chỉ chặn/hủy đạn.

## 5. Thực hành
Đặt ba enemy cùng scene. Bắn từng viên, kiểm tra chỉ enemy bị trúng chịu hiệu ứng; bắn lặp vào xác không khởi động sequence mới. Theo dõi Collider và debug ray trong Scene view nếu hướng đạn sai.

## 6. Câu hỏi ôn tập trắc nghiệm

### Câu 1

Raycast từ tâm màn hình giúp tìm điều gì?

A. Điểm mục tiêu theo hướng nhìn  
B. Vị trí UV texture  
C. Màu emission  
D. Độ sáng Ambient  

**Đáp án:** A

**Giải thích:** Ray từ camera xác định đối tượng hoặc điểm ngắm.

### Câu 2

Hướng vận tốc đạn tính theo cách nào?

A. target + Camera.FOV  
B. hit.point * Time.time  
C. (target - firePoint).normalized  
D. Vector3.up * Screen.width  

**Đáp án:** C

**Giải thích:** Vector từ điểm bắn tới mục tiêu là hướng chuyển động.

### Câu 3

Với Collider không phải trigger, callback nào xử lý va chạm?

A. OnCollisionEnter  
B. OnPointerExit  
C. OnAnimatorMoveOnly  
D. OnBecameInvisible  

**Đáp án:** A

**Giải thích:** Collision callback được gọi khi có va chạm vật lý phù hợp.

### Câu 4

Tại sao lấy DissolutionController ở parent của collider?

A. Camera luôn là parent collider  
B. Để thay Tag  
C. Collider có thể nằm trên xương/child model  
D. Để tăng tốc GPU  

**Đáp án:** C

**Giải thích:** Enemy controller thường nằm ở root prefab.

### Câu 5

Đạn rất nhanh xuyên mục tiêu cần kiểm tra điều gì?

A. Collision detection và kích thước collider  
B. FOV smoothing  
C. Animator speed  
D. HDR color  

**Đáp án:** A

**Giải thích:** Physics collision mode có ảnh hưởng tới đạn tốc độ cao.

## 7. Tổng kết

Gắn hệ thống VFX vào gameplay qua collider và sự kiện bắn đạn. Hãy tự chạy scene để xác nhận hành vi trước khi mở bài tiếp theo.
