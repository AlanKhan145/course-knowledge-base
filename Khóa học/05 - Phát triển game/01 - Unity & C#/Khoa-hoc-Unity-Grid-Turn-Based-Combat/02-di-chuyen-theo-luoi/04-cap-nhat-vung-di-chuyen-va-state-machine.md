# Bài 02.04 — Làm mới vùng đi và khóa trạng thái khi Unit đang di chuyển

**Mốc video:** 12:11–14:25. **Mục tiêu:** quản lý hành động bất đồng bộ bằng callback.

## 1. Tình huống cần sửa [Theo video]

Nếu chỉ tính ô hợp lệ ở `Start()`, sau khi Unit đi xong vùng di chuyển vẫn dựa vào tọa độ cũ. Tác giả tách đoạn tính toán ra hàm cập nhật và gọi lại sau callback của chuyển động. Trong thời gian di chuyển, hệ thống ở trạng thái **chờ** để chặn input.

## 2. State machine nhỏ [Ví dụ biên soạn]

```csharp
public enum BattleInputState { Ready, Moving, Attacking, Resolving }

private BattleInputState state = BattleInputState.Ready;

private void TryMove(Vector2Int destination) {
    if (state != BattleInputState.Ready || !canMove) return;
    if (!validCells.Contains(destination)) return;

    state = BattleInputState.Moving;
    canMove = false;
    activeUnit.MoveTo(destination, () => {
        // Cập nhật ô chiếm ở Module 03.
        validCells = CalculateValidCells();
        UpdateOverlay(validCells);
        state = BattleInputState.Ready;
        CheckTurnFinished();
    });
}
```

Giả định `MoveTo(cell, callback)` tồn tại. Nếu controller của bạn cung cấp coroutine/event, thay callback nhưng giữ **cùng nguyên tắc hoàn thành rồi mới mở input**.

## 3. Bẫy logic thường gặp

Trong thiết kế lượt đầy đủ, **sau khi đã đi, `canMove` phải giữ `false`**. Vùng tô Move cần **ẩn** hoặc chỉ cập nhật vì mục đích debug, không được cho phép đi lần hai. Bản demo ở khoảng 12–14 phút chưa hoàn thiện giới hạn lượt; bước đó được thêm ở Module 04.

Phải quy định callback được gọi **chính xác một lần** kể cả khi đích bằng vị trí hiện tại hoặc đường đi bị hủy. Nếu không, game có thể mắc kẹt mãi trong `Moving`.

## Thực hành

Gửi ba click liên tục khi nhân vật đang đi; chỉ click đầu được xử lý. Sau khi đến đích, in trạng thái và vị trí mới. Đảm bảo đang đi không thể tấn công hoặc ra lệnh lại (trừ khi luật game cho phép).
