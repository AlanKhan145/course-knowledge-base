# Bài 02 — Lập trình VFX Controller bằng Unity C#

> Module: Đồ án ứng dụng: VFX tung chiêu, kết liễu, hiệu ứng tộc hệ trong game 2D  
> Mức độ: Trung cấp / nâng cao  
> Trích đoạn tham chiếu: Mã và quy trình bổ sung do biên soạn; nền tảng từ T02/T06

## Mục tiêu học tập

Sau bài này, bạn thực hành được quy trình **lập trình vfx controller bằng unity c#**, giải thích nguyên lý lựa chọn kỹ thuật và tự kiểm tra kết quả trong project.

## Mục tiêu
Tạo một thành phần trung gian phát hiệu ứng particle đúng lúc. Đoạn mã là **ví dụ bổ sung**, thích hợp cho prefab có `ParticleSystem`; VFX Graph cần phương thức `Play()` của VisualEffect và package tương ứng.

```csharp
using UnityEngine;

public sealed class CombatVfxController : MonoBehaviour
{
    [SerializeField] private ParticleSystem castFx;
    [SerializeField] private ParticleSystem impactFx;
    [SerializeField] private ParticleSystem finisherFx;

    // Các hàm này có thể được gọi bởi Animation Event hoặc CombatSystem.
    public void PlayCast() => Restart(castFx);
    public void PlayImpact() => Restart(impactFx);
    public void PlayFinisher() => Restart(finisherFx);

    private static void Restart(ParticleSystem fx)
    {
        if (fx == null) return;
        fx.Stop(withChildren: true, stopBehavior: ParticleSystemStopBehavior.StopEmittingAndClear);
        fx.Play(withChildren: true);
    }
}
```

### Tích hợp
1. Gắn script vào nhân vật/prefab có 3 nhóm Particle System.
2. Bỏ chọn `Play On Awake`, tắt Loop cho hiệu ứng impact/finisher.
3. Gán các thành phần vào Inspector.
4. Trong animation `Attack`, gắn Event `PlayCast` ở thời điểm tung chiêu; khi combat xác nhận trúng đòn, gọi `PlayImpact` tại target. Chỉ gọi `PlayFinisher` khi HP sau sát thương bằng 0.
5. Kiểm tra Particle Systems có đúng local/world simulation space và sorting layer.

### Test
Thử spam skill, pause/time scale, mục tiêu chết trước khi VFX tới và hai mục tiêu bị đánh liên tiếp. Khi có nhiều instance, dùng Object Pool thay vì dùng cùng một đối tượng ở nhiều vị trí.

## Bài tập bắt buộc

1. Tạo prefab CombatVfxController và test 3 event.
2. Viết bảng 5 tình huống kiểm thử.

## Tiêu chí hoàn thành

Mỗi event kích đúng hiệu ứng, không nhân đôi hoặc rò rỉ hạt.

## Tự kiểm tra

- Bước nào trong quy trình là điểm khó nhất, và bạn kiểm chứng nó bằng cách nào?
- Nếu bỏ một hiệu ứng, chuyển động chính còn dễ đọc không?
- Tham số hoặc thời điểm nào bạn sẽ điều chỉnh trước khi tối ưu hiệu năng?

## Liên hệ bài kế tiếp

Ghi lại một vấn đề quan sát được khi preview; mang nó vào bài tiếp theo để cải thiện dần thay vì làm mới từ đầu.

**Ghi chú nguồn:** Tài liệu biên soạn từ transcript, không phải bản chép lời nguyên văn. Các bài tập được thêm để người học thực hành.
