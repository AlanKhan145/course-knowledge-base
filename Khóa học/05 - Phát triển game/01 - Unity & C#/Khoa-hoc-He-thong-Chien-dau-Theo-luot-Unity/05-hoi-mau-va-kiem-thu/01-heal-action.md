# Bài 13. Hồi máu: Heal, PlayerHeal và OnHealButton

> **Đối chiếu video gốc:** 26:18–27:53  
> **Phạm vi:** Nội dung chính theo transcript video; phần lưu ý, kiểm thử và gợi ý được biên soạn để học dễ hơn.

## Mục tiêu học tập
- Triển khai thao tác Heal hồi 5 HP.
- Đảm bảo hồi máu không vượt maxHP.
- Trả lượt cho kẻ địch sau khi người chơi Heal.

## 1. Unit.Heal

```csharp
public void Heal(int amount)
{
    currentHP = Mathf.Min(maxHP, currentHP + Mathf.Max(0, amount));
}
```

## 2. Bắt sự kiện từ Button

```csharp
public void OnHealButton()
{
    if (state != BattleState.PLAYERTURN || isResolvingAction) return;
    isResolvingAction = true;
    StartCoroutine(PlayerHeal());
}
```

## 3. Viết PlayerHeal

```csharp
private IEnumerator PlayerHeal()
{
    playerUnit.Heal(5);
    playerHUD.SetHP(playerUnit.currentHP);
    dialogueText.text = "Bạn được hồi 5 HP!";
    yield return new WaitForSeconds(2f);
    state = BattleState.ENEMYTURN;
    StartCoroutine(EnemyTurn());
}
```

## 4. Đấu nối UI

Chọn `HealButton` → OnClick → kéo GameObject `BattleSystem` vào → chọn `BattleSystem.OnHealButton`.

## 5. Trường hợp đặc biệt

Nếu HP Player là 24/25, `Heal(5)` đưa HP lên **25/25**, không phải 29/25. Hồi máu cũng **tốn một lượt**; sau khi hồi xong, địch được quyền đánh.

**Mở rộng:** có thể cấm Heal khi đầy HP, hoặc biến hành động thành dùng potion có số lượng hạn chế. Hai quy tắc đó chưa có trong video.

## Thực hành và tự kiểm tra
- [ ] HealButton hoạt động nhưng không cho bấm trong lượt Enemy.
- [ ] Player 20/25 dùng Heal(5) lên 25/25.
- [ ] Player 24/25 dùng Heal(5) không vượt 25.
- [ ] Sau Heal, đối thủ thực hiện lượt của mình.

## Câu hỏi ôn tập
1. Thành phần vừa tạo chịu trách nhiệm gì trong hệ thống?
2. Điều gì có thể xảy ra nếu thiếu thành phần hoặc tham chiếu này?
3. Làm thế nào để tự kiểm tra kết quả mà không chỉ nhìn vào mã?

---
*Đi tiếp đến bài tiếp theo sau khi hoàn thành checklist. Mã hoàn chỉnh, đã thống nhất với các bài, nằm trong `07-phu-luc-ma-nguon/`.*
