# Bài 02.02 — Tô vùng có thể di chuyển trên Tilemap

**Mốc video:** 08:21–09:32. **Mục tiêu:** làm người chơi nhìn thấy những ô hợp lệ.

## 1. Hiển thị theo video

Tác giả dùng **Tilemap** với ít nhất hai trạng thái: `None` (không hiện) và `Move` (đánh dấu ô có thể đến). Kết quả được kiểm tra bằng cách thêm thùng làm vật cản, khiến một số ô không còn hợp lệ.

## 2. Hàm tô vùng [Ví dụ biên soạn]

```csharp
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Tilemaps;

public class MoveRangeOverlay : MonoBehaviour {
    [SerializeField] private Tilemap overlay;
    [SerializeField] private TileBase moveTile;

    public void Show(HashSet<Vector2Int> cells) {
        overlay.ClearAllTiles();
        foreach (var p in cells)
            overlay.SetTile(new Vector3Int(p.x, p.y, 0), moveTile);
    }

    public void Clear() => overlay.ClearAllTiles();
}
```

**Giả định:** tọa độ Grid tương ứng trực tiếp với tọa độ ô Tilemap. Nếu nguồn lưới và Tilemap lệch origin/cellSize, cần chuyển đổi thông qua hàm `CellToWorldCenter` và `WorldToCell` phù hợp.

## 3. UX và kỹ thuật

Giữ overlay ở sorting layer bên dưới nhân vật nhưng trên sàn; màu rõ ràng và đủ tương phản. Đừng chỉ dựa vào màu: ô có thể di chuyển cũng có thể hiển thị viền hoặc biểu tượng.

## 4. Kiểm thử

- Không tô lên ô thùng.
- Sau khi di chuyển xong, vùng tô chuyển sang tính theo vị trí mới.
- Khi đổi lượt, overlay của Unit cũ biến mất.
- Vùng tô phải khớp với quy tắc chặn click ở bài tiếp theo.

**Câu hỏi:** Vì sao chỉ tô đúng ô chưa đủ để ngăn người chơi đi vào ô sai?
