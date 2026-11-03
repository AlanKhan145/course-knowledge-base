# Bài 02.01 — Tính các ô di chuyển hợp lệ bằng Pathfinding

**Mốc video:** 05:36–08:20. **Mục tiêu:** từ `moveRange`, xác định những ô có thể đến thực sự.

## 1. Quy tắc [Theo video]

Ví dụ trong video đặt giới hạn **5 bước**. Với Unit đứng tại `(ux, uy)`, xét các ô lưới quanh nó. Chỉ giữ ô **đi được**, có **đường đi**, và độ dài đường không vượt quá khoảng cách di chuyển. Điều này xử lý các thùng chắn đường: gần trên bản đồ không có nghĩa là đến được.

## 2. Pseudocode [Ví dụ biên soạn]

```text
valid = []
for x in [ux - moveRange, ux + moveRange]:
    for y in [uy - moveRange, uy + moveRange]:
        cell = (x, y)
        if not inBounds(cell): continue
        if not isWalkable(cell): continue
        path = findPath(unitCell, cell)
        if path is null: continue
        steps = path.count - 1  # nếu path chứa cả điểm đầu
        if steps <= moveRange: valid.add(cell)
return valid
```

**Quan trọng:** Chọn quy ước độ dài đường thống nhất. Nếu đường trả về N node **bao gồm điểm bắt đầu**, số cạnh/bước là `N - 1`. Độ dài theo trọng số khác bước đi trên lưới; phải quy đổi phù hợp.

## 3. Mẫu C# minh họa

```csharp
public HashSet<Vector2Int> GetReachableCells(
    Vector2Int from, int moveRange, IPathService pathService,
    IGridCoordinates coordinates) {
    var valid = new HashSet<Vector2Int>();
    for (int dx = -moveRange; dx <= moveRange; dx++) {
        for (int dy = -moveRange; dy <= moveRange; dy++) {
            var goal = from + new Vector2Int(dx, dy);
            if (!coordinates.InBounds(goal) || !pathService.IsWalkable(goal)) continue;
            var path = pathService.FindPath(from, goal);
            if (path != null && path.Count - 1 <= moveRange) valid.Add(goal);
        }
    }
    return valid;
}
```

Sử dụng `using System.Collections.Generic; using UnityEngine;` và hai interface ở bài 01.02. Không suy ra rằng tên API này giống mã nguồn của video.

## 4. Lựa chọn hướng đi

- Nếu chỉ đi **4 hướng**, độ dài đường có số bước trực quan.
- Nếu đi **8 hướng**, bước chéo có thể giá khác bước thẳng; phải chốt quy tắc chi phí.
- Nếu Unit chặn đường nhau, Pathfinding cần xét ô bị chiếm, không chỉ vật cản tĩnh.

## Bài tập

Từ ô `(2,2)` với 5 bước, đặt thùng chặn hành lang ngắn. Đối chiếu bộ ô hợp lệ trước và sau khi thêm thùng. Viết test cho ô ngoài bản đồ, ô bị chặn và ô không có đường đến.
