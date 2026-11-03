# Bài 04.02 — Một Move, một Attack và bỏ lượt bằng Space

**Mốc video:** 22:13–23:48. **Mục tiêu:** quản lý đúng ngân sách hành động của mỗi Unit.

## 1. Luật theo video

Khi bắt đầu lượt, hai cờ **`canMove`** và **`canAttack`** đều đúng. Sau khi dùng hành động nào thì cờ tương ứng chuyển sai. Khi **cả hai** đều sai, hệ thống tự chuyển đến Unit tiếp theo. Hai hành động được làm **theo thứ tự bất kỳ**: Move rồi Attack, hoặc Attack rồi Move. Bấm **Space** để bỏ phần lượt còn lại.

## 2. State đơn giản [Ví dụ biên soạn]

```csharp
private bool canMove;
private bool canAttack;

private void BeginTurn(UnitCombat unit) {
    activeUnit = unit;
    canMove = true;
    canAttack = true;
    state = BattleInputState.Ready;
    RefreshUIAndOverlay();
}

private void CheckTurnFinished() {
    if (state != BattleInputState.Ready) return;
    if (!canMove && !canAttack) BeginTurn(SelectNextUnit());
}

private void Update() {
    if (Input.GetKeyDown(KeyCode.Space)
        && state == BattleInputState.Ready) {
        BeginTurn(SelectNextUnit());
    }
}
```

Mẫu trên chỉ là trích đoạn; nối với `TryMove` và `TryAttack` ở các bài trước. Không gọi `BeginTurn` ngay trong khi animation còn chạy. Nếu muốn cho Space hủy animation cần một thiết kế riêng.

## 3. Bảng kiểm hành vi

| Tình huống | canMove | canAttack | Kết quả |
|---|---:|---:|---|
| Đầu lượt | true | true | Có thể Move/Attack |
| Vừa Move | false | true | Chỉ Attack hoặc Skip |
| Vừa Attack | true | false | Chỉ Move hoặc Skip |
| Đã làm đủ hai hành động | false | false | Tự sang Unit tiếp |
| Space khi Ready | bất kỳ | bất kỳ | Bỏ phần lượt còn lại |

## Bài tập

Ghi lại 4 kịch bản: Move→Attack; Attack→Move; chỉ Move→Space; không làm gì→Space. Đảm bảo mọi kịch bản chuyển sang Unit đúng đội và không có hành động thừa.
