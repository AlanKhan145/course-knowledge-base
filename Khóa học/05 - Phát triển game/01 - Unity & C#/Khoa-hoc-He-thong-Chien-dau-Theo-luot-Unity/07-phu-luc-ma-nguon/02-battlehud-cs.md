# Phụ lục B — BattleHUD.cs hoàn chỉnh

> **Mã do biên soạn**, dựa trên trình tự xây dựng của transcript. Đây không phải mã nguồn gốc tải từ video.

```csharp
using UnityEngine;
using UnityEngine.UI;

public class BattleHUD : MonoBehaviour
{
    public Text nameText;
    public Text levelText;
    public Slider hpSlider;

    public void SetHUD(Unit unit)
    {
        if (unit == null) return;
        nameText.text = unit.unitName;
        levelText.text = $"Lv {unit.unitLevel}";
        hpSlider.minValue = 0;
        hpSlider.maxValue = unit.maxHP;
        hpSlider.value = unit.currentHP;
    }

    public void SetHP(int hp)
    {
        hpSlider.value = hp;
    }
}
```

## Lưu ý

- Tạo `BattleHUD` trên từng HUD và kéo NameText, LevelText, Slider vào Inspector.
- Mã dùng Legacy UI `Text` để bám sát video. Nếu dùng TMP, thay `Text` bằng `TMP_Text` và import `TMPro`.
- Đảm bảo tên class khớp file `BattleHUD.cs`.
