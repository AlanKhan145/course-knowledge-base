---
title: "Steer the player"
pathway: "Game Development"
module: "Create a basic 2D game"
lesson_number: 5
lesson_type: tutorial
unity_version: "6.3"
source_mission: "https://learn.unity.com/pathway/game-development/unit/create-a-basic-2d-game?version=6.3"
content_type: "Bài học tiếng Việt tự biên soạn từ đề mục công khai và tài liệu người dùng cung cấp"
coverage: "outline_based_not_official_transcript"
---

# Bài 05 — Điều khiển nhân vật (Steer the player)

> **Nguồn đối chiếu:** [Unity Learn — Create a basic 2D game](https://learn.unity.com/pathway/game-development/unit/create-a-basic-2d-game?version=6.3). Đây là tài liệu học tập tự biên soạn, không phải bản dịch hay transcript chính thức.

## Mục tiêu

- Nắm được kỹ năng **điều khiển nhân vật** và vai trò của nó trong game 2D.
- Thực hiện ví dụ trong Unity Editor và xác minh ở Play Mode.
- Tìm được ít nhất một lỗi có thể tái hiện và cách khắc phục.

## Kiến thức nền

- `Scene` là không gian bố trí GameObject; mỗi GameObject có các `Component` được chỉnh qua Inspector.
- `SpriteRenderer` hiển thị hình 2D; `Sorting Layer` và `Order in Layer` điều khiển thứ tự vẽ.
- Tương tác 2D sử dụng `Rigidbody2D`, `Collider2D` và callbacks như `OnTriggerEnter2D`.

## Kiểm thử và ghi chép

Ghi rõ **kết quả mong đợi → kết quả thực tế → ảnh hoặc Console → nhận xét**. Kiểm tra tham chiếu Inspector, trạng thái GameObject và cách cấu hình Input/Physics khi Play Mode không cho kết quả như dự đoán.

## Checklist

- [ ] Có scene chạy thử và không có lỗi nghiêm trọng trong Console.
- [ ] Kiểm tra được thay đổi một tham số trong Inspector tác động ra sao.
- [ ] Lưu ảnh/video minh chứng và tự giải thích một lỗi.
- [ ] Đối chiếu bài gốc Unity Learn nếu cần các bước, tài nguyên chính thức.

---

## 9. Điều khiển nhân vật: vận tốc, biên và input

Đoạn mã minh họa dưới đây dùng **Input Manager cũ** tương tự ví dụ trong tệp gốc; dự án cấu hình `Input System` mới cần dùng Input Actions thay thế.

```csharp
using UnityEngine;
public class PlayerSteering2D : MonoBehaviour
{
    [SerializeField] float moveSpeed = 5f;
    [SerializeField] Vector2 minBounds = new(-8f, -4f);
    [SerializeField] Vector2 maxBounds = new(8f, 4f);

    void Update()
    {
        Vector2 input = new(Input.GetAxisRaw("Horizontal"), Input.GetAxisRaw("Vertical"));
        input = Vector2.ClampMagnitude(input, 1f);
        Vector3 next = transform.position + (Vector3)(input * moveSpeed * Time.deltaTime);
        transform.position = new Vector3(
            Mathf.Clamp(next.x, minBounds.x, maxBounds.x),
            Mathf.Clamp(next.y, minBounds.y, maxBounds.y),
            transform.position.z);
    }
}
```

```mermaid
flowchart LR
    A[Đọc phím] --> B[Chuẩn hóa input chéo]
    B --> C[Tính dịch chuyển theo deltaTime]
    C --> D[Clamp theo biên]
    D --> E[Cập nhật vị trí]
```

**Kiểm thử:** giữ hai phím chéo, xem nhân vật có nhanh hơn chạy một trục không; đưa nhân vật sát biên; so sánh độ dài quãng đi tại 30 và 60 FPS. Không dùng `Transform` trực tiếp đồng thời với lực vật lý cho cùng một hành vi chuyển động.
