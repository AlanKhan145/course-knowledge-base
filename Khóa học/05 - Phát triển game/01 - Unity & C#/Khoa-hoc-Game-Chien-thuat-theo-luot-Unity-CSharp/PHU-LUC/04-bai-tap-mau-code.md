# Mẫu mã C# tham khảo

> Mã mẫu do giáo trình bổ sung để minh họa, **không** được trích từ video. Các đoạn này độc lập và chưa phải project Unity hoàn chỉnh.

## 1. Kiểu tọa độ lưới

```csharp
using System;

[Serializable]
public readonly struct GridPosition : IEquatable<GridPosition>
{
    public readonly int X;
    public readonly int Z;

    public GridPosition(int x, int z) { X = x; Z = z; }
    public bool Equals(GridPosition other) => X == other.X && Z == other.Z;
    public override bool Equals(object obj) => obj is GridPosition p && Equals(p);
    public override int GetHashCode() => HashCode.Combine(X, Z);
    public override string ToString() => $"({X},{Z})";
}
```

## 2. Đổi tọa độ world/grid

```csharp
using UnityEngine;

public static class GridMath
{
    public static GridPosition WorldToGrid(Vector3 point, float cellSize)
    {
        return new GridPosition(
            Mathf.FloorToInt(point.x / cellSize),
            Mathf.FloorToInt(point.z / cellSize));
    }

    public static Vector3 GridToWorld(GridPosition cell, float cellSize)
    {
        return new Vector3((cell.X + 0.5f) * cellSize, 0f,
                           (cell.Z + 0.5f) * cellSize);
    }
}
```

## 3. Cấu hình kỹ năng với ScriptableObject

```csharp
using UnityEngine;

[CreateAssetMenu(menuName = "Tactics/Action Definition")]
public sealed class ActionDefinition : ScriptableObject
{
    public string actionId;
    public string displayName;
    [Min(0)] public int apCost = 1;
    [Min(0)] public int range = 1;
    public Sprite icon;
}
```

## 4. Nón nhìn qua dot product

```csharp
using UnityEngine;

public static class VisionMath
{
    public static bool WithinCone(Vector3 origin, Vector3 forward,
                                  Vector3 target, float range, float fovDegrees)
    {
        Vector3 toTarget = target - origin;
        toTarget.y = 0;
        Vector3 flatForward = forward;
        flatForward.y = 0;
        if (toTarget.sqrMagnitude > range * range) return false;
        if (toTarget.sqrMagnitude < 0.000001f) return true;
        return Vector3.Dot(flatForward.normalized, toTarget.normalized)
               >= Mathf.Cos(fovDegrees * 0.5f * Mathf.Deg2Rad);
    }
}
```

Sau khi kiểm tra hình nón vẫn cần **Line of Sight** (raycast/cell tracing) để loại mục tiêu sau tường.

## 5. Công thức xác suất minh họa

```text
hitChance = clamp(baseAccuracy - rangePenalty
                  - coverPenalty + aimBonus + flankBonus, 0, 100)
```

Các hằng số phải để trong dữ liệu cấu hình, không gắn chết trong UI.
