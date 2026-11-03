# Bài 11. EnemyTurn tự động và luân phiên hành động

> **Đối chiếu video gốc:** 23:45–25:45  
> **Phạm vi:** Nội dung chính theo transcript video; phần lưu ý, kiểm thử và gợi ý được biên soạn để học dễ hơn.

## Mục tiêu học tập
- Tạo lượt hành động tự động của kẻ địch.
- Hiển thị thông báo, trừ HP người chơi, cập nhật HUD.
- Quay lại PlayerTurn hoặc chuyển LOST.

## 1. Phiên bản AI tối giản

Video cố ý giữ AI rất đơn giản: **kẻ địch luôn tấn công**. Đây là lựa chọn phù hợp để tập trung vào state machine trước khi xây AI phức tạp.

## 2. Coroutine EnemyTurn

```csharp
private IEnumerator EnemyTurn()
{
    dialogueText.text = $"{enemyUnit.unitName} tấn công!";
    yield return new WaitForSeconds(1f);

    bool playerDead = playerUnit.TakeDamage(enemyUnit.damage);
    playerHUD.SetHP(playerUnit.currentHP);
    yield return new WaitForSeconds(1f);

    if (playerDead)
    {
        state = BattleState.LOST;
        EndBattle();
    }
    else
    {
        state = BattleState.PLAYERTURN;
        isResolvingAction = false;
        PlayerTurn();
    }
}
```

## 3. Quy tắc quyết định

| Kết quả đánh | State sau đó |
|---|---|
| HP người chơi = 0 | LOST → EndBattle |
| HP người chơi > 0 | PLAYERTURN → PlayerTurn |

Khi state là `ENEMYTURN`, các nút người chơi không nên thực thi hành động ngay cả khi người chơi cố nhấn.

## 4. Kiểm tra bằng dữ liệu mẫu

- Player: HP 20, Enemy damage 5.
- Sau một lượt tấn công của địch: HP Player = 15.
- Sau hai lượt: HP Player = 10, nếu không Heal.

**Mở rộng:** nếu sau này thêm kỹ năng, nên tách `ChooseEnemyAction()` và `ExecuteAction()`; xem Module 06.

## Thực hành và tự kiểm tra
- [ ] Thấy dòng hội thoại thông báo lượt địch.
- [ ] HP Player giảm đúng 5 sau lượt địch.
- [ ] Sau khi địch đánh mà Player còn sống, có thể bấm Attack tiếp.

## Câu hỏi ôn tập
1. Thành phần vừa tạo chịu trách nhiệm gì trong hệ thống?
2. Điều gì có thể xảy ra nếu thiếu thành phần hoặc tham chiếu này?
3. Làm thế nào để tự kiểm tra kết quả mà không chỉ nhìn vào mã?

---
*Đi tiếp đến bài tiếp theo sau khi hoàn thành checklist. Mã hoàn chỉnh, đã thống nhất với các bài, nằm trong `07-phu-luc-ma-nguon/`.*
