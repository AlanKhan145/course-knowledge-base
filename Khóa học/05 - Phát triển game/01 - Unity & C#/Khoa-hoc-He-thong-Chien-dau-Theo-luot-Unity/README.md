# Khóa học: Xây dựng hệ thống chiến đấu theo lượt trong Unity (C#)

Khóa học thực hành xây dựng **Turn-Based Battle System** từ một video hướng dẫn dài khoảng 29 phút. Nội dung được chia thành các module nhỏ, từ thiết kế UI, tạo Unit và Prefab, quản lý `BattleState`, xử lý lượt bằng Coroutine, đến tấn công, hồi máu và hoàn thiện vòng lặp trận đấu.

> Nguồn: bản transcript tiếng Việt do người học cung cấp. Các nội dung nâng cao được ghi rõ là **Mở rộng**; mã C# được biên soạn lại thành một phiên bản hoạt động thống nhất, không phải bản chép nguyên văn video.

## Kết quả đầu ra
- Tạo giao diện HP, tên và cấp độ cho hai đơn vị.
- Spawn người chơi/kẻ địch từ Prefab lên BattleStation.
- Quản lý 5 trạng thái `START`, `PLAYERTURN`, `ENEMYTURN`, `WON`, `LOST`.
- Triển khai `Attack`, `Heal`, điều kiện thắng/thua và coroutine.
- Hoàn thành demo 1 đấu 1; có hướng phát triển AI, animation và nhiều nhân vật.

## Lộ trình
1. `01-thiet-ke-va-setup/` — Thiết kế quy tắc, Scene, Canvas và BattleStation.
2. `02-don-vi-va-prefab/` — Xây dựng Unit, cấu hình Prefab.
3. `03-quan-ly-tran-dau-va-hud/` — State machine, khởi tạo trận, hiển thị HUD.
4. `04-vong-lap-theo-luot/` — Coroutine, Attack, EnemyTurn, Win/Lose.
5. `05-hoi-mau-va-kiem-thu/` — Heal, kết nối nút và kiểm thử.
6. `06-mo-rong-va-du-an/` — AI, animation và thử thách cuối khóa.
7. `07-phu-luc-ma-nguon/` — Ba script C# hoàn chỉnh (dạng Markdown).

## Cách học
Đọc các bài học theo thứ tự; mở Unity và làm theo; tự chạy checklist của mỗi bài. Mỗi bài có mốc thời gian tương ứng trong video gốc để tiện đối chiếu.

**Thời lượng gợi ý:** 4–6 giờ thực hành (ước lượng của biên soạn, không phải độ dài video).
