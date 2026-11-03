# Bài 14. Tích hợp các script và bảng kiểm thử

> **Đối chiếu video gốc:** 25:47–28:03 (tổng kết demo)  
> **Phạm vi:** Nội dung chính theo transcript video; phần lưu ý, kiểm thử và gợi ý được biên soạn để học dễ hơn.

## Mục tiêu học tập
- Ghép đủ Prefab, UI, BattleSystem và các callback.
- Chạy kiểm thử cả đường thắng, thua, Heal và hành động sai lượt.
- Biết tra nguyên nhân một số lỗi Unity cơ bản.

## 1. Checklist Inspector trước khi Play

| Nơi | Kiểm tra |
|---|---|
| Enemy & Player Prefab | Có Unit ở root, cấu hình đúng HP/damage |
| BattleSystem | Có playerPrefab, enemyPrefab, 2 BattleStation, 2 HUD, dialogueText |
| Mỗi HUD | Có nameText, levelText, hpSlider |
| AttackButton | OnClick → BattleSystem.OnAttackButton |
| HealButton | OnClick → BattleSystem.OnHealButton |
| Scene | Có EventSystem để Button nhận click |

## 2. Các ca kiểm thử bắt buộc

| ID | Chuỗi hành động | Kết quả mong đợi |
|---|---|---|
| TC01 | Play | Spawn đủ hai Unit, HUD đúng chỉ số |
| TC02 | Chờ setup | Chuyển từ START sang PLAYERTURN |
| TC03 | Attack | Enemy mất damage điểm HP, địch tự phản đòn nếu còn sống |
| TC04 | Heal | Player +5 HP giới hạn maxHP, sau đó nhường lượt |
| TC05 | Attack kết liễu Enemy | State WON, có thông báo thắng |
| TC06 | Để Enemy kết liễu Player | State LOST, có thông báo thua |
| TC07 | Nhấn Attack liên tục | Không trừ HP nhiều lần trong một lượt |
| TC08 | Bấm Button khi đã WON/LOST | Không phát sinh thêm đòn đánh |

## 3. Lỗi thường gặp và cách gỡ

- **NullReferenceException tại `SetHUD`:** chưa kéo đúng HUD/Text/Slider hoặc Unit prefab thiếu script.
- **Button không gọi:** kiểm tra `OnClick`, object được kéo vào và `EventSystem`.
- **HP trong Inspector thay nhưng Slider không đổi:** thiếu `SetHP` sau hành động.
- **Nhân vật bị spawn lệch:** kiểm tra Transform của Station và localPosition của prefab.
- **Enemy đánh nhiều lần:** kiểm tra số coroutine được Start, cờ `isResolvingAction` và luồng state.
- **Không thấy UI:** kiểm tra Canvas Scaler, Anchor, camera và thứ tự layer.

## 4. Tiêu chí hoàn thành mini-project

Một trận 1–1 chạy liên tục từ START, cho phép Attack/Heal, hiển thị thông tin và đạt đúng WON/LOST mà không lỗi Console.

## Thực hành và tự kiểm tra
- [ ] Vượt tất cả TC01–TC08.
- [ ] Tắt/mở Play hai lần và xác nhận không nhân đôi Unit.
- [ ] Chụp lại màn hình demo thắng và demo thua để làm bằng chứng thực hành.

## Câu hỏi ôn tập
1. Thành phần vừa tạo chịu trách nhiệm gì trong hệ thống?
2. Điều gì có thể xảy ra nếu thiếu thành phần hoặc tham chiếu này?
3. Làm thế nào để tự kiểm tra kết quả mà không chỉ nhìn vào mã?

---
*Đi tiếp đến bài tiếp theo sau khi hoàn thành checklist. Mã hoàn chỉnh, đã thống nhất với các bài, nằm trong `07-phu-luc-ma-nguon/`.*
