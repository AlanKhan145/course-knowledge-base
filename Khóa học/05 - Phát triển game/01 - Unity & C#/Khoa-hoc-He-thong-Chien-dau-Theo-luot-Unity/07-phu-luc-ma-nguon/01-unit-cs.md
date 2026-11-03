# Phụ lục A — Unit.cs hoàn chỉnh

> **Mã do biên soạn**, dựa trên trình tự xây dựng của transcript. Đây không phải mã nguồn gốc tải từ video.

```csharp
using UnityEngine;

public class Unit : MonoBehaviour
{
    [Header("Identity")]
    public string unitName = "New Unit";
    public int unitLevel = 1;

    [Header("Battle Stats")]
    [Min(0)] public int damage = 5;
    [Min(1)] public int maxHP = 30;
    [Min(0)] public int currentHP = 30;

    private void Awake()
    {
        maxHP = Mathf.Max(1, maxHP);
        currentHP = Mathf.Clamp(currentHP, 0, maxHP);
    }

    // Returns true when the unit has been defeated.
    public bool TakeDamage(int amount)
    {
        currentHP = Mathf.Max(0, currentHP - Mathf.Max(0, amount));
        return currentHP <= 0;
    }

    public void Heal(int amount)
    {
        currentHP = Mathf.Min(maxHP, currentHP + Mathf.Max(0, amount));
    }
}
```

## Lưu ý

- Gắn `Unit` lên GameObject **gốc** của Player Prefab và Enemy Prefab.
- Trường `currentHP` không vượt `maxHP` nhờ `Awake()`; các phép tính HP không cho giá trị âm.
- Tên class cần khớp tên file `Unit.cs`.
