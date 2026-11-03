# Khung mã C# minh họa để ghép các bài học

> **QUAN TRỌNG:** Đây là *thiết kế tham khảo được biên soạn mới* từ mô tả gameplay, **không phải mã gốc của Code Monkey**, không khẳng định tương thích ngay với scene/package của tác giả. Các thành phần `IGridBoard`, `IUnitActions` cần tự viết hoặc nối với project hiện có.

## 1. Dữ liệu cơ bản

```csharp
using System;
using System.Collections.Generic;
using UnityEngine;

public enum Team { Blue, Red }
public enum InputState { Ready, Moving, Attacking }

public interface IUnitActions {
    Team Team { get; }
    Vector2Int Cell { get; set; }
    int MoveRange { get; }
    int AttackRange { get; }
    void MoveTo(Vector2Int cell, Action onCompleted);
    void Attack(IUnitActions enemy, Action onCompleted);
}

public interface IGridBoard {
    bool InBounds(Vector2Int cell);
    bool IsWalkable(Vector2Int cell);
    IUnitActions GetOccupant(Vector2Int cell);
    List<Vector2Int> FindPath(Vector2Int start, Vector2Int end);
    void MoveOccupant(IUnitActions unit, Vector2Int from, Vector2Int to);
}
```

## 2. Bộ điều phối lượt (mã gần hoàn chỉnh nhưng phụ thuộc interface)

```csharp
public sealed class GridBattleCoordinator {
    private readonly IGridBoard board;
    private readonly List<IUnitActions> blue;
    private readonly List<IUnitActions> red;
    private IUnitActions active;
    private InputState state = InputState.Ready;
    private bool canMove, canAttack;
    private int blueIndex = -1, redIndex = -1;
    private HashSet<Vector2Int> reachable = new();

    public GridBattleCoordinator(IGridBoard board,
        List<IUnitActions> blue, List<IUnitActions> red) {
        this.board = board; this.blue = blue; this.red = red;
    }

    public IUnitActions Active => active;
    public bool CanMove => state == InputState.Ready && canMove;
    public bool CanAttack => state == InputState.Ready && canAttack;
    public IReadOnlyCollection<Vector2Int> Reachable => reachable;

    public void Start() => NextTurn();

    private void NextTurn() {
        Team nextTeam = active == null || active.Team == Team.Red
            ? Team.Blue : Team.Red;
        // Bản prototype giả định cả hai đội luôn còn tối thiểu 1 Unit.
        if (blue.Count == 0 || red.Count == 0)
            throw new InvalidOperationException("Một đội đã hết Unit: xử lý kết thúc trận.");
        if (nextTeam == Team.Blue) {
            blueIndex = (blueIndex + 1) % blue.Count;
            active = blue[blueIndex];
        } else {
            redIndex = (redIndex + 1) % red.Count;
            active = red[redIndex];
        }
        state = InputState.Ready;
        canMove = canAttack = true;
        reachable = FindReachable(active.Cell, active.MoveRange);
        // Thông báo UI, camera, tile overlay trong Unity adapter.
    }

    public bool TryMove(Vector2Int target) {
        if (!CanMove || !reachable.Contains(target)) return false;
        if (board.GetOccupant(target) != null) return false;
        state = InputState.Moving;
        canMove = false;
        Vector2Int origin = active.Cell;
        active.MoveTo(target, () => {
            board.MoveOccupant(active, origin, target);
            active.Cell = target;
            state = InputState.Ready;
            reachable.Clear(); // đã hết quyền di chuyển trong lượt
            CheckTurnFinished();
        });
        return true;
    }

    public bool TryAttack(IUnitActions enemy) {
        if (!CanAttack || enemy == null || enemy.Team == active.Team) return false;
        var a = active.Cell;
        var b = enemy.Cell;
        int distance = Mathf.Abs(a.x - b.x) + Mathf.Abs(a.y - b.y);
        if (distance > active.AttackRange) return false;
        state = InputState.Attacking;
        canAttack = false;
        active.Attack(enemy, () => {
            state = InputState.Ready;
            CheckTurnFinished();
        });
        return true;
    }

    public bool SkipTurn() {
        if (state != InputState.Ready) return false;
        NextTurn();
        return true;
    }

    private void CheckTurnFinished() {
        if (state == InputState.Ready && !canMove && !canAttack) NextTurn();
    }

    private HashSet<Vector2Int> FindReachable(Vector2Int from, int range) {
        var result = new HashSet<Vector2Int>();
        for (int dx = -range; dx <= range; dx++)
        for (int dy = -range; dy <= range; dy++) {
            var to = from + new Vector2Int(dx, dy);
            if (!board.InBounds(to) || !board.IsWalkable(to)) continue;
            if (board.GetOccupant(to) != null) continue;
            var path = board.FindPath(from, to);
            if (path != null && path.Count - 1 <= range) result.Add(to);
        }
        return result;
    }
}
```

## 3. Thiếu gì để chạy thật trong Unity?

1. Viết `GridBoardAdapter` kết nối hệ Grid/Pathfinding có sẵn, đảm bảo `FindPath` xét các ô bị chiếm khi cần.
2. Viết `UnitActionsAdapter : MonoBehaviour, IUnitActions`, dùng component di chuyển/đánh và callback animation thật.
3. Viết `InputAdapter : MonoBehaviour` chuyển mouse ↔ Grid, gọi `TryMove`/`TryAttack`, cập nhật Tilemap và Camera khi active unit đổi.
4. Thêm tính năng Unit chết/rời đội, animation thất bại, hủy Move, xử lý trận kết thúc.

## 4. Những giới hạn của bộ mã minh họa

- Mỗi đội phải còn ít nhất 1 Unit; chưa tự xử lý thắng/thua hoặc bỏ qua Unit chết.
- Tầm đánh dùng **Manhattan**, không xét che khuất tầm nhìn.
- Movement callback giả định đến đích thành công và được gọi đúng một lần.
- Không cung cấp Prefab, sprite, animation hay các package hỗ trợ.

Mục tiêu của tài liệu là cung cấp **điểm nối logic rõ ràng** để tự thực hành cùng video, không hứa đây là full project chạy ngay.
