# Phụ lục C — BattleSystem.cs hoàn chỉnh

> **Mã do biên soạn**, dựa trên trình tự xây dựng của transcript. Đây không phải mã nguồn gốc tải từ video.

```csharp
using System.Collections;
using UnityEngine;
using UnityEngine.UI;

public enum BattleState
{
    START,
    PLAYERTURN,
    ENEMYTURN,
    WON,
    LOST
}

public class BattleSystem : MonoBehaviour
{
    [Header("Prefabs")]
    public GameObject playerPrefab;
    public GameObject enemyPrefab;

    [Header("Spawn Positions")]
    public Transform playerBattleStation;
    public Transform enemyBattleStation;

    [Header("UI")]
    public Text dialogueText;
    public BattleHUD playerHUD;
    public BattleHUD enemyHUD;

    [Header("Runtime State")]
    public BattleState state;

    private Unit playerUnit;
    private Unit enemyUnit;
    private bool isResolvingAction;

    private void Start()
    {
        state = BattleState.START;
        isResolvingAction = true;
        StartCoroutine(SetupBattle());
    }

    private IEnumerator SetupBattle()
    {
        // In this lesson, Unit is attached to each prefab ROOT.
        GameObject playerGO = Instantiate(playerPrefab, playerBattleStation);
        playerGO.transform.localPosition = Vector3.zero;
        playerUnit = playerGO.GetComponent<Unit>();

        GameObject enemyGO = Instantiate(enemyPrefab, enemyBattleStation);
        enemyGO.transform.localPosition = Vector3.zero;
        enemyUnit = enemyGO.GetComponent<Unit>();

        if (playerUnit == null || enemyUnit == null)
        {
            Debug.LogError("Player/Enemy prefab must have Unit on its root.");
            yield break;
        }

        playerHUD.SetHUD(playerUnit);
        enemyHUD.SetHUD(enemyUnit);
        dialogueText.text = $"{enemyUnit.unitName} xuất hiện!";

        yield return new WaitForSeconds(2f);
        state = BattleState.PLAYERTURN;
        isResolvingAction = false;
        PlayerTurn();
    }

    private void PlayerTurn()
    {
        dialogueText.text = "Chọn hành động: Tấn công hoặc Hồi máu.";
    }

    public void OnAttackButton()
    {
        if (state != BattleState.PLAYERTURN || isResolvingAction) return;
        isResolvingAction = true;
        StartCoroutine(PlayerAttack());
    }

    private IEnumerator PlayerAttack()
    {
        bool enemyDead = enemyUnit.TakeDamage(playerUnit.damage);
        enemyHUD.SetHP(enemyUnit.currentHP);
        dialogueText.text = $"{playerUnit.unitName} tấn công!";
        yield return new WaitForSeconds(2f);

        if (enemyDead)
        {
            state = BattleState.WON;
            EndBattle();
        }
        else
        {
            state = BattleState.ENEMYTURN;
            StartCoroutine(EnemyTurn());
        }
    }

    public void OnHealButton()
    {
        if (state != BattleState.PLAYERTURN || isResolvingAction) return;
        isResolvingAction = true;
        StartCoroutine(PlayerHeal());
    }

    private IEnumerator PlayerHeal()
    {
        playerUnit.Heal(5);
        playerHUD.SetHP(playerUnit.currentHP);
        dialogueText.text = $"{playerUnit.unitName} hồi máu!";
        yield return new WaitForSeconds(2f);

        state = BattleState.ENEMYTURN;
        StartCoroutine(EnemyTurn());
    }

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

    private void EndBattle()
    {
        isResolvingAction = true;
        if (state == BattleState.WON)
            dialogueText.text = "Bạn đã chiến thắng!";
        else if (state == BattleState.LOST)
            dialogueText.text = "Bạn đã bị đánh bại!";
    }
}
```

## Lưu ý

- Tạo GameObject `BattleSystem`, gắn script và kéo tất cả 7 tham chiếu: 2 Prefab, 2 Station, 2 HUD, Dialogue Text.
- Gắn `AttackButton.OnClick` → `BattleSystem.OnAttackButton`, `HealButton.OnClick` → `BattleSystem.OnHealButton`.
- `isResolvingAction` là lớp bảo vệ bổ sung so với bản mô tả video, ngăn người chơi bấm lặp trong lúc Coroutine xử lý.
- Code giữ AI theo video (địch luôn tấn công); mô hình AI tự chọn ở Bài 15 là phần tự nâng cấp.
