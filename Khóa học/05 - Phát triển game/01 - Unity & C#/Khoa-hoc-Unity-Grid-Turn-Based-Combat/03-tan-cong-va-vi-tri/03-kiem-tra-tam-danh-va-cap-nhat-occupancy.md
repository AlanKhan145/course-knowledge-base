# Bài 03.03 — Kiểm tra tầm tấn công và cập nhật ô bị chiếm

**Mốc video:** 18:21–19:22. **Mục tiêu:** giải quyết hai bug quan trọng về logic chiến đấu.

## 1. Hai lỗi được phát hiện [Theo video]

1. Click kẻ địch rất xa vẫn ra lệnh Attack — cần **kiểm tra tầm tấn công**.
2. Unit đã đi tới ô mới nhưng GridObject vẫn giữ Unit ở **ô cũ** — cần dọn occupancy và gán lại cho ô đích.

## 2. Kiểm tra khoảng cách [Ví dụ biên soạn]

```csharp
public static bool InManhattanRange(Vector2Int a, Vector2Int b, int range) {
    int distance = Mathf.Abs(a.x - b.x) + Mathf.Abs(a.y - b.y);
    return distance <= range;
}
```

Video đề cập một phép kiểm tra dựa trên khoảng cách giữa các vị trí. Chọn **Euclid**, **Manhattan** hay khoảng cách đường đi tùy luật trò chơi; ví dụ trên sử dụng Manhattan trên lưới 4 hướng và **không tuyên bố là công thức đúng của video**.

## 3. Di chuyển occupancy an toàn

```text
old = grid.GetCell(unit.Cell)
new = grid.GetCell(destination)
assert new != null && new.IsWalkable
assert new.Occupant == null
old.ClearUnit()
new.SetUnit(unit)
unit.Cell = destination
```

**Khi nào chuyển occupancy?** Có thể khóa ô đích lúc Move bắt đầu và commit khi đến nơi, hoặc commit ngay nếu gameplay không cho cắt ngang. Chọn một chính sách nhất quán; nếu callback báo thất bại phải rollback, tránh mất unit trên Grid.

## 4. Các bất biến cần giữ

- Mỗi Unit sống thuộc **đúng một ô**.
- Mỗi ô cho phép **tối đa một Unit**, trừ khi luật chơi có stacking.
- Sau Move, `unit.Cell` trùng vị trí mà Grid cho biết đang chứa Unit.
- Unit chết/rời scene phải được xóa khỏi ô đang chiếm.

## Bài tập

Di chuyển Unit A từ (1,1) sang (2,1), rồi click ô cũ và ô mới để xác nhận. Đặt Unit B bên cạnh và một Unit C xa 5 ô; chỉ B được đánh nếu tầm là 1.
