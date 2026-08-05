# Course Index

## Godot 4: Build & Launch Full 2D Roguelike Game

Khóa học này xây **Unknown Adventure**, một game sinh tồn/roguelike 2D trong Godot 4. Trọng tâm không chỉ là gameplay riêng lẻ, mà là kiến trúc có thể tái sử dụng: player controller, ability component, manifest/context, enemy AI, damage, UI, audio/VFX, game flow và build.

## Mục tiêu đầu ra

Sau khóa học, bạn nên có thể:

- Tạo project Godot 4 và tổ chức node, scene, resource, script.
- Viết GDScript cho movement, input, animation, ability và combat.
- Xây Ability Architecture với Controller, Context, Manifest và component tái sử dụng.
- Tạo melee/ranged combat, cooldown, energy cost, targeting, projectile và dash.
- Tạo enemy AI có truy đuổi, pathfinding, separation, memory và spawning quanh player.
- Xây Health/Damage system với shader feedback, floating text, pushback và particles.
- Tạo Spell Bar, cooldown UI, health/energy UI, Home Scene và Pause Menu.
- Tích hợp Audio Controller, sound theo khoảng cách, music và VFX.
- Build game để chia sẻ.

## Tài liệu trong khóa

- [SYLLABUS.md](SYLLABUS.md): mục lục đầy đủ theo bài học.
- [LEARNING_PLAN_10_WEEKS.md](LEARNING_PLAN_10_WEEKS.md): lịch học 10 tuần.
- [PROJECT_BRIEF.md](PROJECT_BRIEF.md): brief game Unknown Adventure.
- [PRACTICE_CHECKLIST.md](PRACTICE_CHECKLIST.md): checklist kỹ năng và tiến độ.
- [SYSTEMS_OVERVIEW.md](SYSTEMS_OVERVIEW.md): tổng quan các hệ thống hoàn chỉnh.

## Danh sách module

| Module | Nội dung | Bài học | Thời lượng |
| --- | --- | ---: | --- |
| 01 - Introduction | Giới thiệu | 2 | 7 phút |
| 02 - Project Setup | Khởi tạo dự án | 3 | 43 phút |
| 03 - Player | Nhân vật người chơi | 8 | 1 giờ 22 phút |
| 04 - Tilemap | Xây dựng bản đồ | 2 | 18 phút |
| 05 - Ability System | Kiến trúc hệ thống kỹ năng | 5 | 44 phút |
| 06 - Spawnable Abilities | Kỹ năng sinh đối tượng | 6 | 51 phút |
| 07 - Ability Manifest: Melee Attack | Kỹ năng cận chiến | 5 | 35 phút |
| 08 - Weapon | Vũ khí | 7 | 59 phút |
| 09 - Cooldowns | Thời gian hồi kỹ năng | 2 | 15 phút |
| 10 - Enemies | Kẻ địch cơ bản | 6 | 50 phút |
| 11 - Enemy Animation & Targeting | Animation và xác định mục tiêu | 5 | khoảng 53 phút |
| 12 - Health, Damage & Shader Feedback | Máu, sát thương và hiệu ứng shader | 6 | khoảng 50 phút |
| 13 - Floating Damage Text | Chữ sát thương nổi | 7 | khoảng 63 phút |
| 14 - Pushback & Turning | Đẩy lùi và xoay hướng | 4 | khoảng 35 phút |
| 15 - Skeleton Damage & Multi-Target Combat | Sát thương lên Skeleton và nhiều mục tiêu | 7 | khoảng 61 phút |
| 16 - Debug Range & Dot Product | Vùng tấn công và tích vô hướng | 5 | khoảng 52 phút |
| 17 - Hit Particles | Hiệu ứng hạt khi trúng đòn | 2 | khoảng 22 phút |
| 18 - Player Death & Game Over | Nhân vật chết và kết thúc lượt chơi | 5 | khoảng 36 phút |
| 19 - Enemy Pathfinding & Separation | Tìm đường và tránh quái chồng lên nhau | 5 | khoảng 50 phút |
| 20 - Demon & Fireball Projectile | Demon và kỹ năng Fireball | 7 | khoảng 55 phút |
| 21 - Throw Ability & Targeting | Kỹ năng ném và chọn mục tiêu | 3 | khoảng 26 phút |
| 22 - Audio System | Hệ thống âm thanh | 9 | khoảng 1 giờ 27 phút |
| 23 - Footstep Particles | Hiệu ứng bước chân | 3 | khoảng 25 phút |
| 24 - Spell Bar & Ability Shortcuts | Thanh kỹ năng và phím tắt | 8 | khoảng 1 giờ 22 phút |
| 25 - Cooldown UI | Hiển thị hồi chiêu | 5 | khoảng 35 phút |
| 26 - Health & Energy UI | Giao diện máu và năng lượng | 5 | khoảng 55 phút |
| 27 - Energy System | Hệ thống năng lượng | 4 | khoảng 28 phút |
| 28 - Ability Validation & UI Feedback | Kiểm tra khả năng dùng kỹ năng | 3 | khoảng 31 phút |
| 29 - Dash Ability | Kỹ năng Dash | 3 | khoảng 26 phút |
| 30 - Home & Pause Menu | Trang chủ và menu tạm dừng | 8 | khoảng 45 phút |
| 31 - Advanced Enemy AI & Spawning | AI nâng cao và sinh quái | 6 | khoảng 37 phút |
| 32 - Final Polish, Build & Wrap-up | Hoàn thiện và build game | 5 | khoảng 34 phút |

## Đường học khuyến nghị

1. Học module 01-04 để chắc project setup, player và TileMap.
2. Học module 05-10 chậm vì đây là nền kiến trúc ability/enemy cho cả game.
3. Với module 11-17, test combat feedback sau mỗi thay đổi nhỏ.
4. Với module 18-23, tập trung vào game feel: death, AI, projectile, audio và particles.
5. Với module 24-32, ưu tiên kiểm tra UI/game flow/build vì đây là phần dễ hỏng do kết nối nhiều hệ thống.
