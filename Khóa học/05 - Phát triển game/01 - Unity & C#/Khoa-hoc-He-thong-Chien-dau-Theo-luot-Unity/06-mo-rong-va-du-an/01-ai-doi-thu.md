# Bài 15. Mở rộng: AI quyết định tấn công hay hồi máu

> **Đối chiếu video gốc:** 24:28–24:44 (video gợi ý; phần triển khai sau đây là mở rộng)  
> **Phạm vi:** Phần ý tưởng AI được video nhắc ngắn; mã và thiết kế bên dưới là bài mở rộng do biên soạn.

## Mục tiêu học tập
- Nhận biết AI video chỉ Attack mỗi lượt.
- Thiết kế luật ra quyết định đơn giản có thể mở rộng.
- Không trộn logic ra quyết định và logic xử lý damage.

> **Mở rộng do biên soạn:** Video chỉ nêu ý tưởng AI phức tạp hơn, chưa triển khai code cho hành động Heal của kẻ địch.

## 1. Từ AI cố định sang AI theo luật

Quy tắc gợi ý:

1. Nếu damage đủ kết liễu Player → **Attack**.
2. Nếu Enemy dưới 30% HP và Heal còn tác dụng → cân nhắc **Heal**.
3. Còn lại → **Attack**.

```csharp
private bool ShouldEnemyHeal()
{
    bool canFinishPlayer = enemyUnit.damage >= playerUnit.currentHP;
    bool lowHP = enemyUnit.currentHP <= enemyUnit.maxHP * 0.3f;
    bool notFull = enemyUnit.currentHP < enemyUnit.maxHP;
    return !canFinishPlayer && lowHP && notFull;
}
```

Nếu chọn Heal, gọi `enemyUnit.Heal(5)` và `enemyHUD.SetHP(enemyUnit.currentHP)` trong `EnemyTurn()`; vẫn cần chuyển lại lượt người chơi.

## 2. Giữ state machine không đổi

Không cần thêm `EnemyHealState` nếu cả Heal và Attack cùng là một hành động **nằm trong ENEMYTURN**. Sau khi xử lý xong mới chuyển `PLAYERTURN` hoặc `LOST`.

## 3. Bài tập nâng cao

- Cho AI xác suất Heal 50% khi HP dưới ngưỡng, thay vì Heal mọi lần.
- Thêm `Debug.Log` giải thích vì sao AI chọn hành động.
- Kiểm tra ưu tiên kết liễu người chơi ngay cả khi Enemy có HP thấp.

## 4. Khả năng cân bằng

Đừng cho địch Heal mãi khi HP thấp: có thể giới hạn số lần dùng hoặc thêm cooldown. Đây là quyết định **thiết kế game**, không có quy tắc cố định từ nguồn video.

## Thực hành và tự kiểm tra
- [ ] Thực hiện hàm ShouldEnemyHeal và tự kiểm tra ít nhất 3 trường hợp.
- [ ] Bảo đảm dù Enemy Attack hay Heal, cuối lượt vẫn trả về PlayerTurn.
- [ ] Không phá vỡ đường thắng/thua của bản cơ bản.

## Câu hỏi ôn tập
1. Thành phần vừa tạo chịu trách nhiệm gì trong hệ thống?
2. Điều gì có thể xảy ra nếu thiếu thành phần hoặc tham chiếu này?
3. Làm thế nào để tự kiểm tra kết quả mà không chỉ nhìn vào mã?

---
*Đi tiếp đến bài tiếp theo sau khi hoàn thành checklist. Mã hoàn chỉnh, đã thống nhất với các bài, nằm trong `07-phu-luc-ma-nguon/`.*
