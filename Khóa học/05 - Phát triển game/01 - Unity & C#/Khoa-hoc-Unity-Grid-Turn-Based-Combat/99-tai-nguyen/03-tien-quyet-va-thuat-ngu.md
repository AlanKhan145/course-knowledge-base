# Tiên quyết, thuật ngữ và lưu ý khi dùng bản chép lời

## Kiến thức cần ôn

- **Unity 2D**: Hierarchy, Scene/Game View, `MonoBehaviour`, `Update`, Inspector, SerializedField, Camera orthographic.
- **C#**: class, enum, `List<T>`, `HashSet<T>`, event/callback, nullable, interface, lambda.
- **Grid**: quy đổi World/Cell, ô walkable/blocked, lưu dữ liệu trên GridObject.
- **Pathfinding**: BFS, Dijkstra, A*, bước đi, đường không tồn tại, kiểm tra chướng ngại.
- **Tilemap**: vẽ `TileBase`, ClearAllTiles, Sorting Layer.

## Từ vựng chuẩn

| Thuật ngữ | Tên tiếng Việt | Vai trò |
|---|---|---|
| Grid System | Hệ thống lưới | Quản lý các ô và tọa độ |
| GridObject / BattleCell | Đối tượng ô lưới | Dữ liệu hợp lệ, Unit chiếm ô |
| Pathfinding | Tìm đường | Kiểm tra đường đến ô đích |
| Walkable | Có thể đi qua | Trạng thái vật cản |
| Tilemap | Bản đồ ô | Overlay vùng đi |
| Unit | Đơn vị/quân | Nhân vật trên bàn |
| MoveRange | Tầm di chuyển | Ngân sách bước |
| AttackRange | Tầm tấn công | Điều kiện tấn công |
| ActiveUnit | Unit đang hoạt động | Quân được phép hành động |
| Occupancy | Trạng thái chiếm ô | Liên kết Unit ↔ GridCell |
| Callback | Hàm gọi lại | Thông báo hành động hoàn thành |
| State Machine | Máy trạng thái | Chặn input khi đang chạy hành động |
| Turn | Lượt | Một Unit hành động theo luật |
| Round Robin | Luân phiên vòng | Lần lượt chọn các Unit |
| Camera Pan | Lia máy quay | Chuyển vùng nhìn tới Unit |

## Cách đọc nguồn có nhận dạng tiếng nói sai

Bản chép lời có nhiều từ dịch máy lạ như “đồ nướng”, “cáo”, “công cụ”, “tiệt trùng”, “Valley”. Khi học, ưu tiên **ngữ cảnh kỹ thuật**: Grid, `Unit`, `Tilemap`, Pathfinding, callback. Không suy đoán tên hàm từ các cụm sai này. Ví dụ mã trong khóa học được **biên soạn lại** để minh họa thao tác chứ không phải trích trực tiếp source code chính chủ.

## Những nội dung chưa có trong nguồn

Video **không** hướng dẫn đầy đủ cách xây Grid/Pathfinding ban đầu, không kèm asset/Prefab/code hoàn chỉnh trong bản chép lời, không chứng minh benchmark hiệu năng, và chưa triển khai AI, HP hay các kỹ năng đặc biệt. Những phần đó chỉ được đánh dấu **hướng mở rộng**.
