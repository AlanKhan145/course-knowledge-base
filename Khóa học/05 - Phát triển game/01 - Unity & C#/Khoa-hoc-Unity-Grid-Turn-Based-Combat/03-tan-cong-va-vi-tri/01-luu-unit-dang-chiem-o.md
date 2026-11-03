# Bài 03.01 — Lưu Unit đang đứng trên mỗi ô Grid

**Mốc video:** 14:26–16:30. **Mục tiêu:** tìm Unit bị click thông qua Grid, không phụ thuộc raycast collider.

## 1. Cách tiếp cận [Theo video]

Tác giả cân nhắc dùng Collider + Raycast để chọn Unit, nhưng chọn cách đơn giản hơn: mỗi `GridObject` lưu tham chiếu tới Unit đang đứng trên ô. Khi bắt đầu trận, lặp qua các Unit trong scene và gán cho GridObject tương ứng. Từ vị trí chuột → ô → Unit đích.

## 2. Dữ liệu và API [Ví dụ biên soạn]

```csharp
public sealed class BattleCell {
    public Vector2Int Position { get; }
    public UnitCombat Occupant { get; private set; }

    public BattleCell(Vector2Int position) => Position = position;
    public bool IsOccupied => Occupant != null;

    public void SetUnit(UnitCombat unit) => Occupant = unit;
    public void ClearUnit() => Occupant = null;
    public UnitCombat GetUnit() => Occupant;
}
```

**Chú ý:** ví dụ này tách riêng để đọc nhanh; nếu đã tạo `BattleCell` ở bài 02.03, hãy **gộp thêm** các method, không định nghĩa hai lớp trùng tên trong cùng project.

## 3. Khởi tạo

```text
for each unit in allUnits:
    cell = grid.GetCell(WorldToCell(unit.Position))
    assert cell != null
    assert cell.Occupant == null
    cell.SetUnit(unit)
```

Cần xử lý khi spawn, move, despawn, chết. Nếu hai unit cùng chiếm một ô ngoài ý muốn, hãy báo lỗi thay vì ghi đè im lặng.

## Bài tập

Đặt bốn Unit ở các ô khác nhau. Click lên từng ô và ghi log tên Unit, đội, vị trí. Click ô trống phải trả `null`, không được gây `NullReferenceException`.
