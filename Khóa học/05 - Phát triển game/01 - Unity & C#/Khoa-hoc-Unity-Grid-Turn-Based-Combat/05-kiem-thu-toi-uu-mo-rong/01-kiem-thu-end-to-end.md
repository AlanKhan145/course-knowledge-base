# Bài 05.01 — Kiểm thử toàn bộ vòng chiến đấu

**Mốc tham chiếu:** tổng hợp 05:36–25:39. **Mục tiêu:** tự xác minh prototype đủ dùng để mở rộng.

## 1. Bộ trường hợp kiểm thử [Ví dụ biên soạn]

| ID | Trạng thái ban đầu | Thao tác | Kỳ vọng |
|---|---|---|---|
| M01 | Unit ở (2,2), Move=5 | Click ô hợp lệ | Unit đến ô, Move giảm còn 0 |
| M02 | Có thùng ở đường thẳng | Click đích xa phía sau | Đường tìm đi vòng hoặc bị chặn |
| M03 | Ô đích không hợp lệ | Click ô | Không di chuyển |
| M04 | Unit đang Moving | Click thêm | Không nhận lệnh mới |
| O01 | Unit vừa di chuyển | Xem ô cũ/mới | Ô cũ trống, ô mới chứa Unit |
| A01 | Đồng minh trong tầm | Click | Không đánh |
| A02 | Kẻ địch ngoài tầm | Click | Không đánh |
| A03 | Kẻ địch trong tầm | Click | Một lần tấn công, canAttack=false |
| T01 | Vừa Move, còn Attack | Click địch hợp lệ | Attack, sau callback chuyển lượt |
| T02 | Vừa Attack, còn Move | Click ô hợp lệ | Move, sau callback chuyển lượt |
| T03 | Đầu lượt | Nhấn Space | Bỏ lượt, chuyển đội |
| C01 | Đổi Unit | Quan sát Camera | Camera pan tới Unit mới |

## 2. Các bất biến

```text
activeUnit != null khi trận còn diễn ra
state != Ready  => không nhận input mới
canMove == false => không Move lần thứ hai
canAttack == false => không Attack lần thứ hai
Unit.Cell == GridCellContaining(Unit)
Mỗi ô chứa tối đa một unit
Unit đích của Attack phải khác đội và trong tầm
```

## 3. Gợi ý kiểm thử Unity

Dùng **Edit Mode** test cho các hàm tính vùng đi, tầm đánh, chọn đội (pure logic); dùng **Play Mode** test cho scene, animation callback, camera, input và Tilemap. Tách logic khỏi MonoBehaviour để viết unit test dễ hơn.

## Bài thực hành cuối bài

Quay video gameplay liên tục cho hai đội, trong đó phải có ít nhất một Move bị chặn, một Attack ngoài tầm, một lượt bỏ qua và một lượt Attack→Move. Dùng bảng trên để tự nghiệm thu.
