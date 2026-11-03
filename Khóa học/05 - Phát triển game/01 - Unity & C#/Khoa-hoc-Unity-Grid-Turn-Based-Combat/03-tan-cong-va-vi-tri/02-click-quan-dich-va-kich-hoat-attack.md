# Bài 03.02 — Click quân địch và ra lệnh tấn công

**Mốc video:** 16:30–18:20. **Mục tiêu:** phân biệt click địch và click mặt đất.

## 1. Luồng xử lý [Theo video]

Từ vị trí chuột, tìm `GridObject`. Nếu ô đang có Unit, kiểm tra Unit đó có thuộc **đội đối phương** không. Nếu đúng, gửi lệnh tấn công; khi animation kết thúc thì callback trả hệ thống về trạng thái bình thường. Nếu không phải địch hoặc không có Unit, có thể tiếp tục thử xử lý lệnh di chuyển.

## 2. Thứ tự ưu tiên input [Ví dụ biên soạn]

```text
OnLeftClick(cell):
    if state != Ready: return
    target = grid[cell]?.Occupant
    if target != null:
        if target.Team != activeUnit.Team:
            TryAttack(target)
        return  # không tự chuyển sang Move khi bấm một ô đang có Unit
    TryMove(cell)
```

## 3. Mẫu C# minh họa

```csharp
private void TryAttack(UnitCombat target) {
    if (state != BattleInputState.Ready || !canAttack) return;
    if (target == null || target.Team == activeUnit.Team) return;
    if (!IsTargetInAttackRange(activeUnit, target)) return;

    canAttack = false;
    state = BattleInputState.Attacking;
    activeUnit.Attack(target, () => {
        state = BattleInputState.Ready;
        CheckTurnFinished();
    });
}
```

`Attack`, `IsTargetInAttackRange`, `Team` và callback là API **mang tính ví dụ**; bản chép lời không ghi lại chữ ký chính xác.

## 4. Tình huống cạnh

Click Unit cùng đội → không đánh; click chính mình → không đánh; click ô trống → thử Move; click địch ngoài tầm → phải từ chối, không vô tình đi về phía địch.

## Bài tập

Kiểm thử lần lượt: click đồng minh, click chính mình, click kẻ địch. Sau đó spam click trong animation Attack và đảm bảo không có hai đòn được kích hoạt từ một quyền Attack.
