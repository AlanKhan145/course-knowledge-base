# Bài 3. BattleStation, Sprite và thứ tự hiển thị

> **Đối chiếu video gốc:** 02:06–03:30  
> **Phạm vi:** Nội dung chính theo transcript video; phần lưu ý, kiểm thử và gợi ý được biên soạn để học dễ hơn.

## Mục tiêu học tập
- Tạo hai vị trí xuất hiện nhân vật bằng GameObject trong thế giới game.
- Hiểu khác biệt giữa `SpriteRenderer` và `Image` thuộc Canvas.
- Biết cách tránh nhân vật bị nền che.

## 1. BattleStation là gì?

Video tạo hai vùng cỏ làm nền chỗ đứng của người chơi và đối thủ. Chúng là **đối tượng trong Scene**, không phải các thành phần UI. Ta dùng `SpriteRenderer` để hiển thị Sprite trong thế giới game.

## 2. Các bước

1. Import một Sprite làm nền/trạm chiến đấu (có thể dùng hình vuông màu đơn giản thay vì asset video).
2. Kéo Sprite vào Scene để Unity sinh `SpriteRenderer`.
3. Đặt tên **EnemyBattleStation** và **PlayerBattleStation**.
4. Chỉnh vị trí để trạm nằm phía trên HUD tương ứng.
5. Đặt `Order in Layer = -10` cho trạm để nhân vật có thứ tự cao hơn có thể nằm phía trước.

```text
Hierarchy (phần world)
├── EnemyBattleStation  // SpriteRenderer, Order in Layer -10
├── PlayerBattleStation // SpriteRenderer, Order in Layer -10
└── Main Camera
```

## 3. Vì sao cần Transform?

Trong bài về `BattleSystem`, ta sẽ truyền `playerBattleStation` và `enemyBattleStation` kiểu `Transform`. Nhờ đó, `Instantiate(prefab, station)` có thể tạo nhân vật làm con của trạm, dùng trạm làm vị trí tham chiếu.

## 4. Phân biệt tọa độ

- **World position** của BattleStation: vị trí cố định trong Scene.
- **Local position** của nhân vật dưới BattleStation: đặt `(0,0,0)` để xuất hiện ngay ở vị trí trạm.
- **Sprite sorting order**: điều khiển thứ tự các Sprite; không có tác dụng giống thứ tự UI Canvas.

**Lưu ý:** nếu Sprite không xuất hiện, kiểm tra camera culling mask, SpriteRenderer, Sorting Layer và tọa độ Z.

## Thực hành và tự kiểm tra
- [ ] Có đủ hai trạm chiến đấu trong Hierarchy.
- [ ] Thử kéo một Sprite nhân vật thử nghiệm lên trạm và đảm bảo nó không bị nền che.
- [ ] Xác định được Transform của hai BattleStation.

## Câu hỏi ôn tập
1. Thành phần vừa tạo chịu trách nhiệm gì trong hệ thống?
2. Điều gì có thể xảy ra nếu thiếu thành phần hoặc tham chiếu này?
3. Làm thế nào để tự kiểm tra kết quả mà không chỉ nhìn vào mã?

---
*Đi tiếp đến bài tiếp theo sau khi hoàn thành checklist. Mã hoàn chỉnh, đã thống nhất với các bài, nằm trong `07-phu-luc-ma-nguon/`.*
