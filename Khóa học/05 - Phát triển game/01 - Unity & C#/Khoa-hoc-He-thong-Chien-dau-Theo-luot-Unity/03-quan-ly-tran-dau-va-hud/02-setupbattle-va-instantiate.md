# Bài 7. SetupBattle: Spawn Player và Enemy

> **Đối chiếu video gốc:** 10:28–14:10  
> **Phạm vi:** Nội dung chính theo transcript video; phần lưu ý, kiểm thử và gợi ý được biên soạn để học dễ hơn.

## Mục tiêu học tập
- Dùng `Instantiate()` để tạo instance từ Prefab.
- Dùng `GetComponent<Unit>()` để liên kết dữ liệu của instance.
- Kết nối DialogueText để hiển thị thông báo khi vào trận.

## 1. Các tham chiếu trong BattleSystem

```csharp
public GameObject playerPrefab;
public GameObject enemyPrefab;
public Transform playerBattleStation;
public Transform enemyBattleStation;
public Text dialogueText;

private Unit playerUnit;
private Unit enemyUnit;
```

Nhớ thêm `using UnityEngine.UI;` nếu dùng `Text` dạng Legacy UI.

## 2. Sinh nhân vật đúng vị trí

```csharp
GameObject playerGO = Instantiate(playerPrefab, playerBattleStation);
playerGO.transform.localPosition = Vector3.zero;
playerUnit = playerGO.GetComponent<Unit>();

GameObject enemyGO = Instantiate(enemyPrefab, enemyBattleStation);
enemyGO.transform.localPosition = Vector3.zero;
enemyUnit = enemyGO.GetComponent<Unit>();
```

Tạo đối tượng bằng `Instantiate` và lấy dữ liệu từ chính đối tượng mới; đừng lấy Unit của Prefab asset để thay HP trong lúc chạy.

## 3. Thông báo bắt đầu

```csharp
dialogueText.text = $"{enemyUnit.unitName} xuất hiện!";
```

Sau khi HUD được gán (bài tiếp theo), chờ một nhịp để người chơi đọc rồi chuyển `state = BattleState.PLAYERTURN` và gọi `PlayerTurn()`.

## 4. Kéo tham chiếu qua Inspector

| Trường script | Đối tượng trong Unity |
|---|---|
| Player Prefab | Prefab Player trong Project |
| Enemy Prefab | Prefab Enemy trong Project |
| Player Battle Station | Transform của PlayerBattleStation |
| Enemy Battle Station | Transform của EnemyBattleStation |
| Dialogue Text | Text con của DialoguePanel |

## 5. Lỗi thường gặp

- `NullReferenceException`: chưa gắn Prefab/Station/Text hoặc Unit không ở gốc.
- Spawn sai chỗ: quên `localPosition = Vector3.zero`.
- Spawn hai lần: Scene còn giữ các nhân vật tạm và `SetupBattle` lại instantiate.

## Thực hành và tự kiểm tra
- [ ] Kéo đủ 5 tham chiếu từ Inspector.
- [ ] Chạy Play, thấy đúng 2 nhân vật xuất hiện ở 2 BattleStation.
- [ ] Đọc Console, không có lỗi NullReferenceException.

## Câu hỏi ôn tập
1. Thành phần vừa tạo chịu trách nhiệm gì trong hệ thống?
2. Điều gì có thể xảy ra nếu thiếu thành phần hoặc tham chiếu này?
3. Làm thế nào để tự kiểm tra kết quả mà không chỉ nhìn vào mã?

---
*Đi tiếp đến bài tiếp theo sau khi hoàn thành checklist. Mã hoàn chỉnh, đã thống nhất với các bài, nằm trong `07-phu-luc-ma-nguon/`.*
