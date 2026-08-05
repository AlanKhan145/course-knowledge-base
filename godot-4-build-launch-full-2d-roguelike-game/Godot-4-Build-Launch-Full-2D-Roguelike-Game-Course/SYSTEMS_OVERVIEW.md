# Systems Overview

| Hệ thống | Nội dung |
| --- | --- |
| Player Controller | Di chuyển 8 hướng, animation, camera, lật sprite |
| TileMap | Môi trường pixel art và các lớp bản đồ |
| Ability Architecture | Controller, Context, Manifest và component tái sử dụng |
| Melee Combat | Vũ khí, slash, pushback và đánh nhiều mục tiêu |
| Ranged Combat | Fireball, projectile, ném và chọn mục tiêu |
| Enemy AI | Truy đuổi, animation ưu tiên, pathfinding và separation |
| Health & Damage | Máu, sát thương, shader nhấp nháy và floating text |
| UI | Spell Bar, cooldown, phím tắt, máu và năng lượng |
| Audio/VFX | Âm thanh theo khoảng cách, nhạc nền, hit và footstep particles |
| Game Flow | Game over, respawn, Home Scene và Pause Menu |
| Spawning | Sinh quái thích ứng quanh người chơi |
| Publishing | Hoàn thiện và build game để chia sẻ |

## Ghi chú kiến trúc

- Ability nên được thiết kế như các component nhỏ để dễ tái sử dụng.
- Context/Manifest giúp tách dữ liệu kỹ năng khỏi logic cast.
- Signal và Event Bus giúp giảm phụ thuộc trực tiếp giữa UI, ability và gameplay.
- Enemy AI cần test với nhiều enemy cùng lúc, vì bug separation/pathfinding thường chỉ lộ khi crowd đủ đông.
- UI cooldown/energy phải phản ánh trạng thái thật của ability, không chỉ là animation riêng.
