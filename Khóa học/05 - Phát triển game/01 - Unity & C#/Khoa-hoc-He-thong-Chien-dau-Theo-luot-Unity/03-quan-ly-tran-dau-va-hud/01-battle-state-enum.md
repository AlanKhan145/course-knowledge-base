# Bài 6. Quản lý trận đấu với enum BattleState

> **Đối chiếu video gốc:** 08:42–10:28  
> **Phạm vi:** Nội dung chính theo transcript video; phần lưu ý, kiểm thử và gợi ý được biên soạn để học dễ hơn.

## Mục tiêu học tập
- Định nghĩa một finite-state machine đơn giản.
- Giải thích lợi ích của enum so với các biến boolean rời rạc.
- Khởi tạo trạng thái START khi Scene bắt đầu.

## 1. Định nghĩa 5 trạng thái

Tạo GameObject `BattleSystem`, gắn script `BattleSystem.cs`. Khai báo enum **ngoài class**:

```csharp
public enum BattleState
{
    START,
    PLAYERTURN,
    ENEMYTURN,
    WON,
    LOST
}
```

Trong class `BattleSystem`:

```csharp
public BattleState state;

private void Start()
{
    state = BattleState.START;
    StartCoroutine(SetupBattle());
}
```

Hàm `SetupBattle()` sẽ được xây trong bài tiếp theo.

## 2. Ý nghĩa từng state

| State | Người được phép hành động | Sự kiện tiếp theo |
|---|---|---|
| START | Chưa ai | Spawn, liên kết HUD, chuyển lượt người chơi |
| PLAYERTURN | Người chơi | Attack hoặc Heal |
| ENEMYTURN | AI | Enemy Attack |
| WON | Không ai | Thông báo thắng |
| LOST | Không ai | Thông báo thua |

## 3. Tư duy kiểm soát chuyển trạng thái

Mọi hành động phải kiểm tra state trước khi thực hiện. Ví dụ không cho `Attack` khi `ENEMYTURN` hoặc trận đã `WON`. Đây là nền tảng giúp tránh nhiều lỗi khó phát hiện trong gameplay.

```csharp
if (state != BattleState.PLAYERTURN)
    return;
```

**Mở rộng kỹ thuật:** bản hoàn chỉnh còn có cờ `isResolvingAction` để chặn nhấn nút liên tiếp trong lúc animation/Coroutine đang chạy. Video chỉ đề cập việc kiểm tra state.

## Thực hành và tự kiểm tra
- [ ] Tạo enum đủ 5 trạng thái với tên chính xác.
- [ ] Giải thích tại sao `WON` và `LOST` không cho phép bấm Attack nữa.
- [ ] Quan sát được biến state trong Inspector khi chơi.

## Câu hỏi ôn tập
1. Thành phần vừa tạo chịu trách nhiệm gì trong hệ thống?
2. Điều gì có thể xảy ra nếu thiếu thành phần hoặc tham chiếu này?
3. Làm thế nào để tự kiểm tra kết quả mà không chỉ nhìn vào mã?

---
*Đi tiếp đến bài tiếp theo sau khi hoàn thành checklist. Mã hoàn chỉnh, đã thống nhất với các bài, nằm trong `07-phu-luc-ma-nguon/`.*
