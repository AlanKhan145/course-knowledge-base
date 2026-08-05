# Project Brief - Unknown Adventure

## Thể loại

2D survival/roguelike trong Godot 4. Người chơi điều khiển nhân vật chiến đấu với các đợt quái vật ngày càng khó, sử dụng kỹ năng cận chiến, tầm xa, dash, thanh năng lượng và spell bar.

## Core Loop

1. Người chơi di chuyển trong map 2D.
2. Enemy sinh quanh player và truy đuổi/tấn công.
3. Người chơi dùng ability để gây sát thương, né tránh và sống sót.
4. Cooldown, energy và positioning quyết định nhịp combat.
5. Khi player chết, game chuyển sang game over/respawn flow.

## Hệ thống cần có

- Player controller 8 hướng với animation và camera follow.
- TileMap pixel art.
- Ability architecture dùng controller, context, manifest và component.
- Melee combat với slash, weapon rotation, pushback và multi-target.
- Ranged combat với Fireball, projectile và throw targeting.
- Enemy AI có chasing, pathfinding, separation, memory và spawning.
- Health/damage với shader blink, floating text và hit particles.
- Spell Bar, cooldown UI, health/energy UI và ability validation feedback.
- Audio Controller, sound theo khoảng cách, footstep sound, impact sound và bg music.
- Home Scene, Pause Menu, game over và build export.

## Bài tập mở rộng

- Thêm một enemy mới có pattern tấn công riêng.
- Thêm một ability AoE có cooldown dài và energy cost cao.
- Thêm wave scaling theo thời gian sống sót.
- Thêm màn result hiển thị thời gian sống sót và số enemy đã hạ.
