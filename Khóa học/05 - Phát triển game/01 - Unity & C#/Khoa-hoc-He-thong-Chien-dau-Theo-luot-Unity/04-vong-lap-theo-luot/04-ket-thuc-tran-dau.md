# Bài 12. EndBattle: thắng, thua và khóa thao tác

> **Đối chiếu video gốc:** 22:39–24:19; 25:19–26:14  
> **Phạm vi:** Nội dung chính theo transcript video; phần lưu ý, kiểm thử và gợi ý được biên soạn để học dễ hơn.

## Mục tiêu học tập
- Kết thúc luồng chiến đấu khi một Unit tử trận.
- Phân biệt rõ trạng thái WON và LOST.
- Không để click UI khởi tạo thêm lượt sau khi đã kết thúc.

## 1. Vì sao cần EndBattle?

Nếu mọi script tự viết điều kiện kết thúc riêng, nội dung thoại và state dễ mâu thuẫn. Một hàm `EndBattle()` tập trung sẽ hiển thị kết quả dựa trên state cuối cùng.

```csharp
private void EndBattle()
{
    isResolvingAction = true;
    if (state == BattleState.WON)
        dialogueText.text = "Bạn đã chiến thắng!";
    else if (state == BattleState.LOST)
        dialogueText.text = "Bạn đã bị đánh bại!";
}
```

## 2. Những điểm gọi hàm

- Sau `PlayerAttack`, nếu `enemyDead == true`: `state = WON` rồi `EndBattle()`.
- Sau `EnemyTurn`, nếu `playerDead == true`: `state = LOST` rồi `EndBattle()`.

Với cả hai nhánh, **không gọi lượt tiếp theo**.

## 3. Thử nghiệm biên

| Tình huống | Kỳ vọng |
|---|---|
| Enemy HP bằng đúng damage nhận | Chuyển WON |
| Enemy HP thấp hơn damage | HP chặn ở 0, chuyển WON |
| Player HP bằng đúng damage địch | Chuyển LOST |
| Bấm Attack khi WON/LOST | Không xảy ra hành động mới |

## 4. Hướng tích hợp vào game hoàn chỉnh

**Mở rộng** (không triển khai trong video): sau khi EndBattle, có thể bật nút `Retry`, quay về Scene trước, cập nhật phần thưởng và ghi lại lịch sử trận đấu.

## Thực hành và tự kiểm tra
- [ ] Kiểm thử được một trận thắng và một trận thua.
- [ ] Sau kết thúc trận, spam click không làm HP thay đổi.
- [ ] Không còn chạy EnemyTurn sau khi trạng thái WON xuất hiện.

## Câu hỏi ôn tập
1. Thành phần vừa tạo chịu trách nhiệm gì trong hệ thống?
2. Điều gì có thể xảy ra nếu thiếu thành phần hoặc tham chiếu này?
3. Làm thế nào để tự kiểm tra kết quả mà không chỉ nhìn vào mã?

---
*Đi tiếp đến bài tiếp theo sau khi hoàn thành checklist. Mã hoàn chỉnh, đã thống nhất với các bài, nằm trong `07-phu-luc-ma-nguon/`.*
