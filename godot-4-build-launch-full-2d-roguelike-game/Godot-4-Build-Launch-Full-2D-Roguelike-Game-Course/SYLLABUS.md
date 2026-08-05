# Syllabus

## Tổng quan

- Khóa học: Godot 4: Build & Launch Full 2D Roguelike Game
- Giảng viên: Filip Jerga - Eincode
- Cập nhật gần nhất theo nội dung cung cấp: tháng 9/2025
- Quy mô: 32 module, 161 bài học
- Tổng thời lượng chính thức: 23 giờ 11 phút
- Game thực hành: Unknown Adventure

## Module 01 - Introduction

Giới thiệu - 2 bài, 7 phút.

Tổng quan khóa học, game sẽ xây dựng, cách xử lý lỗi và đối chiếu mã nguồn tham khảo.

1. Course Introduction - `2:15`
   Thực hành nội dung Course Introduction trong module Introduction.
2. Heads Up: Fixing Errors - `5:01`
   Thực hành nội dung Heads Up: Fixing Errors trong module Introduction.

Kiến thức chính:
- Course Introduction
- Heads Up: Fixing Errors

## Module 02 - Project Setup

Khởi tạo dự án - 3 bài, 43 phút.

Cài Godot, tạo dự án Unknown Adventure, làm quen node, scene, Sprite2D, TileMap và Camera2D.

1. Init project - `10:29`
   Thực hành nội dung Init project trong module Project Setup.
2. Scene - `17:31`
   Thực hành nội dung Scene trong module Project Setup.
3. Camera - `15:08`
   Thực hành nội dung Camera trong module Project Setup.

Kiến thức chính:
- Init project
- Scene
- Camera

## Module 03 - Player

Nhân vật người chơi - 8 bài, 1 giờ 22 phút.

GDScript cơ bản, chuyển động theo delta, Input Map, chuẩn hóa vector, camera bám theo và animation chạy.

1. Add player sprites - `15:56`
   Thực hành nội dung Add player sprites trong module Player.
2. GD Script - `10:46`
   Thực hành nội dung GD Script trong module Player.
3. Change player position - `12:28`
   Thực hành nội dung Change player position trong module Player.
4. Get movement input - `9:08`
   Thực hành nội dung Get movement input trong module Player.
5. Custom inputs and normalize - `6:04`
   Thực hành nội dung Custom inputs and normalize trong module Player.
6. Follow Camera - `4:31`
   Thực hành nội dung Follow Camera trong module Player.
7. Flip Animated Sprite - `14:36`
   Thực hành nội dung Flip Animated Sprite trong module Player.
8. Run animation - `8:47`
   Thực hành nội dung Run animation trong module Player.

Kiến thức chính:
- Add player sprites
- GD Script
- Change player position
- Get movement input
- Custom inputs and normalize
- Follow Camera
- Flip Animated Sprite
- Run animation

## Module 04 - Tilemap

Xây dựng bản đồ - 2 bài, 18 phút.

Tạo môi trường bằng TileMap, atlas 16×16, phân lớp hiển thị và thiết lập texture pixel art sắc nét.

1. Tilemaps - `16:27`
   Thực hành nội dung Tilemaps trong module Tilemap.
2. Tilemaps nearest texture - `1:08`
   Thực hành nội dung Tilemaps nearest texture trong module Tilemap.

Kiến thức chính:
- Tilemaps
- Tilemaps nearest texture

## Module 05 - Ability System

Kiến trúc hệ thống kỹ năng - 5 bài, 44 phút.

Ability Controller, kích hoạt kỹ năng bằng phím, truy xuất kỹ năng theo chỉ mục và kiến trúc component có thể tái sử dụng.

1. Ability Controller - `8:27`
   Thực hành nội dung Ability Controller trong module Ability System.
2. Handle key press down - `7:26`
   Thực hành nội dung Handle key press down trong module Ability System.
3. Create ability action - `2:12`
   Thực hành nội dung Create ability action trong module Ability System.
4. Get ability by idx - `12:47`
   Thực hành nội dung Get ability by idx trong module Ability System.
5. Ability Components - `12:46`
   Thực hành nội dung Ability Components trong module Ability System.

Kiến thức chính:
- Ability Controller
- Handle key press down
- Create ability action
- Get ability by idx
- Ability Components

## Module 06 - Spawnable Abilities

Kỹ năng sinh đối tượng - 6 bài, 51 phút.

Sinh hiệu ứng chém, instantiate scene, quản lý entity tung kỹ năng, node cha và vị trí offset.

1. Spawn object ability component - `10:34`
   Thực hành nội dung Spawn object ability component trong module Spawnable Abilities.
2. Slash Effect Scene - `10:30`
   Thực hành nội dung Slash Effect Scene trong module Spawnable Abilities.
3. Add effect in the tree - `10:00`
   Thực hành nội dung Add effect in the tree trong module Spawnable Abilities.
4. Entity - `8:47`
   Thực hành nội dung Entity trong module Spawnable Abilities.
5. Spawn node as child - `4:30`
   Thực hành nội dung Spawn node as child trong module Spawnable Abilities.
6. Spawn offset - `6:44`
   Thực hành nội dung Spawn offset trong module Spawnable Abilities.

Kiến thức chính:
- Spawn object ability component
- Slash Effect Scene
- Add effect in the tree
- Entity
- Spawn node as child
- Spawn offset

## Module 07 - Ability Manifest: Melee Attack

Kỹ năng cận chiến - 5 bài, 35 phút.

Ability Manifest, xoay đòn đánh theo con trỏ, tự xóa effect và luân phiên hướng chém.

1. Ability Manifest - `17:23`
   Thực hành nội dung Ability Manifest trong module Ability Manifest: Melee Attack.
2. New melee sprite - `2:52`
   Thực hành nội dung New melee sprite trong module Ability Manifest: Melee Attack.
3. Turn to mouse position - `2:27`
   Thực hành nội dung Turn to mouse position trong module Ability Manifest: Melee Attack.
4. Cleanup slash effect - `5:49`
   Thực hành nội dung Cleanup slash effect trong module Ability Manifest: Melee Attack.
5. Alternate slash - `6:58`
   Thực hành nội dung Alternate slash trong module Ability Manifest: Melee Attack.

Kiến thức chính:
- Ability Manifest
- New melee sprite
- Turn to mouse position
- Cleanup slash effect
- Alternate slash

## Module 08 - Weapon

Vũ khí - 7 bài, 59 phút.

Gắn vũ khí vào nhân vật, lật vị trí, truyền Ability Context, xoay theo chuột và tạo bản sao khi chém.

1. Add weapon to player - `4:33`
   Thực hành nội dung Add weapon to player trong module Weapon.
2. Mirror weapon position - `9:46`
   Thực hành nội dung Mirror weapon position trong module Weapon.
3. Ability Context - `11:12`
   Thực hành nội dung Ability Context trong module Weapon.
4. Rotate weapon to mouse pos - `7:45`
   Thực hành nội dung Rotate weapon to mouse pos trong module Weapon.
5. Rotate weapon to slash origin - `14:18`
   Thực hành nội dung Rotate weapon to slash origin trong module Weapon.
6. Alternate rotation offset - `2:06`
   Thực hành nội dung Alternate rotation offset trong module Weapon.
7. Clone weapon - `9:22`
   Thực hành nội dung Clone weapon trong module Weapon.

Kiến thức chính:
- Add weapon to player
- Mirror weapon position
- Ability Context
- Rotate weapon to mouse pos
- Rotate weapon to slash origin
- Alternate rotation offset
- Clone weapon

## Module 09 - Cooldowns

Thời gian hồi kỹ năng - 2 bài, 15 phút.

Lưu trạng thái cooldown trong dictionary, giảm thời gian theo delta và ngăn dùng kỹ năng quá sớm.

1. Add ability cooldown - `6:16`
   Thực hành nội dung Add ability cooldown trong module Cooldowns.
2. Manage cooldowns - `8:26`
   Thực hành nội dung Manage cooldowns trong module Cooldowns.

Kiến thức chính:
- Add ability cooldown
- Manage cooldowns

## Module 10 - Enemies

Kẻ địch cơ bản - 6 bài, 50 phút.

Tạo Skeleton, sử dụng group để tìm người chơi, truy đuổi, tính vận tốc, đổi hướng sprite và giữ khoảng cách tấn công.

1. Add skeleton - `11:54`
   Thực hành nội dung Add skeleton trong module Enemies.
2. Add player to group - `8:19`
   Thực hành nội dung Add player to group trong module Enemies.
3. Move to player location - `9:46`
   Thực hành nội dung Move to player location trong module Enemies.
4. Velocity and speed - `10:50`
   Thực hành nội dung Velocity and speed trong module Enemies.
5. Flip enemy to face player - `6:39`
   Thực hành nội dung Flip enemy to face player trong module Enemies.
6. Stop distance - `2:35`
   Thực hành nội dung Stop distance trong module Enemies.

Kiến thức chính:
- Add skeleton
- Add player to group
- Move to player location
- Velocity and speed
- Flip enemy to face player
- Stop distance

## Module 11 - Enemy Animation & Targeting

Animation và xác định mục tiêu - 5 bài, khoảng 53 phút.

Module này tập trung vào animation và xác định mục tiêu trong game Unknown Adventure.

1. Animation runner - `13:13`
   Thực hành nội dung Animation runner trong module Enemy Animation & Targeting.
2. Animation wrapper - `13:30`
   Thực hành nội dung Animation wrapper trong module Enemy Animation & Targeting.
3. Handle high prio animations - `14:22`
   Thực hành nội dung Handle high prio animations trong module Enemy Animation & Targeting.
4. Target player and deal damage components - `4:03`
   Thực hành nội dung Target player and deal damage components trong module Enemy Animation & Targeting.
5. Set player as target - `7:23`
   Thực hành nội dung Set player as target trong module Enemy Animation & Targeting.

Kiến thức chính:
- Animation runner
- Animation wrapper
- Handle high prio animations
- Target player and deal damage components
- Set player as target

## Module 12 - Health, Damage & Shader Feedback

Máu, sát thương và hiệu ứng shader - 6 bài, khoảng 50 phút.

Module này tập trung vào máu, sát thương và hiệu ứng shader trong game Unknown Adventure.

1. Health - `5:36`
   Thực hành nội dung Health trong module Health, Damage & Shader Feedback.
2. Deal damage - `6:41`
   Thực hành nội dung Deal damage trong module Health, Damage & Shader Feedback.
3. About shaders - `12:35`
   Thực hành nội dung About shaders trong module Health, Damage & Shader Feedback.
4. Mix Colors - `13:06`
   Thực hành nội dung Mix Colors trong module Health, Damage & Shader Feedback.
5. Blinking effect - `8:02`
   Thực hành nội dung Blinking effect trong module Health, Damage & Shader Feedback.
6. Delay deal damage - `3:54`
   Thực hành nội dung Delay deal damage trong module Health, Damage & Shader Feedback.

Kiến thức chính:
- Health
- Deal damage
- About shaders
- Mix Colors
- Blinking effect
- Delay deal damage

## Module 13 - Floating Damage Text

Chữ sát thương nổi - 7 bài, khoảng 63 phút.

Module này tập trung vào chữ sát thương nổi trong game Unknown Adventure.

1. Autoload - `7:47`
   Thực hành nội dung Autoload trong module Floating Damage Text.
2. Display damage text - `9:39`
   Thực hành nội dung Display damage text trong module Floating Damage Text.
3. Find spawn position for text - `14:11`
   Thực hành nội dung Find spawn position for text trong module Floating Damage Text.
4. Tweens - `12:28`
   Thực hành nội dung Tweens trong module Floating Damage Text.
5. Better tweens - `10:40`
   Thực hành nội dung Better tweens trong module Floating Damage Text.
6. Custom font - `7:01`
   Thực hành nội dung Custom font trong module Floating Damage Text.
7. Round the text - `1:10`
   Thực hành nội dung Round the text trong module Floating Damage Text.

Kiến thức chính:
- Autoload
- Display damage text
- Find spawn position for text
- Tweens
- Better tweens
- Custom font
- Round the text

## Module 14 - Pushback & Turning

Đẩy lùi và xoay hướng - 4 bài, khoảng 35 phút.

Module này tập trung vào đẩy lùi và xoay hướng trong game Unknown Adventure.

1. Push back attack - `15:05`
   Thực hành nội dung Push back attack trong module Pushback & Turning.
2. Push back reset timer - `3:31`
   Thực hành nội dung Push back reset timer trong module Pushback & Turning.
3. Turn to mouse - `10:05`
   Thực hành nội dung Turn to mouse trong module Pushback & Turning.
4. Turning cooldown - `6:06`
   Thực hành nội dung Turning cooldown trong module Pushback & Turning.

Kiến thức chính:
- Push back attack
- Push back reset timer
- Turn to mouse
- Turning cooldown

## Module 15 - Skeleton Damage & Multi-Target Combat

Sát thương lên Skeleton và nhiều mục tiêu - 7 bài, khoảng 61 phút.

Module này tập trung vào sát thương lên skeleton và nhiều mục tiêu trong game Unknown Adventure.

1. Get target component - `14:50`
   Thực hành nội dung Get target component trong module Skeleton Damage & Multi-Target Combat.
2. Deal damage to Skeleton - `7:59`
   Thực hành nội dung Deal damage to Skeleton trong module Skeleton Damage & Multi-Target Combat.
3. Display damage effect on Skeleton - `5:33`
   Thực hành nội dung Display damage effect on Skeleton trong module Skeleton Damage & Multi-Target Combat.
4. Get height - `13:34`
   Thực hành nội dung Get height trong module Skeleton Damage & Multi-Target Combat.
5. Get multiple targets - `6:13`
   Thực hành nội dung Get multiple targets trong module Skeleton Damage & Multi-Target Combat.
6. Handle dead + anim - `9:21`
   Thực hành nội dung Handle dead + anim trong module Skeleton Damage & Multi-Target Combat.
7. Improve attack FPS - `3:09`
   Thực hành nội dung Improve attack FPS trong module Skeleton Damage & Multi-Target Combat.

Kiến thức chính:
- Get target component
- Deal damage to Skeleton
- Display damage effect on Skeleton
- Get height
- Get multiple targets
- Handle dead + anim
- Improve attack FPS

## Module 16 - Debug Range & Dot Product

Vùng tấn công và tích vô hướng - 5 bài, khoảng 52 phút.

Module này tập trung vào vùng tấn công và tích vô hướng trong game Unknown Adventure.

1. Create debug circle - `13:04`
   Thực hành nội dung Create debug circle trong module Debug Range & Dot Product.
2. Spawn circle in mouse dir - `5:32`
   Thực hành nội dung Spawn circle in mouse dir trong module Debug Range & Dot Product.
3. Use of dot product - `14:16`
   Thực hành nội dung Use of dot product trong module Debug Range & Dot Product.
4. Dot Product Explanation - `11:21`
   Thực hành nội dung Dot Product Explanation trong module Debug Range & Dot Product.
5. Ability component group - `7:35`
   Thực hành nội dung Ability component group trong module Debug Range & Dot Product.

Kiến thức chính:
- Create debug circle
- Spawn circle in mouse dir
- Use of dot product
- Dot Product Explanation
- Ability component group

## Module 17 - Hit Particles

Hiệu ứng hạt khi trúng đòn - 2 bài, khoảng 22 phút.

Module này tập trung vào hiệu ứng hạt khi trúng đòn trong game Unknown Adventure.

1. Particles 2D - `8:49`
   Thực hành nội dung Particles 2D trong module Hit Particles.
2. Add hit particles to skeleton - `12:50`
   Thực hành nội dung Add hit particles to skeleton trong module Hit Particles.

Kiến thức chính:
- Particles 2D
- Add hit particles to skeleton

## Module 18 - Player Death & Game Over

Nhân vật chết và kết thúc lượt chơi - 5 bài, khoảng 36 phút.

Module này tập trung vào nhân vật chết và kết thúc lượt chơi trong game Unknown Adventure.

1. Player die animation - `4:03`
   Thực hành nội dung Player die animation trong module Player Death & Game Over.
2. Increase attack radius for Player - `1:21`
   Thực hành nội dung Increase attack radius for Player trong module Player Death & Game Over.
3. Handle game over respawn - `7:57`
   Thực hành nội dung Handle game over respawn trong module Player Death & Game Over.
4. Game over signal - `11:08`
   Thực hành nội dung Game over signal trong module Player Death & Game Over.
5. Screen overlays - `11:40`
   Thực hành nội dung Screen overlays trong module Player Death & Game Over.

Kiến thức chính:
- Player die animation
- Increase attack radius for Player
- Handle game over respawn
- Game over signal
- Screen overlays

## Module 19 - Enemy Pathfinding & Separation

Tìm đường và tránh quái chồng lên nhau - 5 bài, khoảng 50 phút.

Module này tập trung vào tìm đường và tránh quái chồng lên nhau trong game Unknown Adventure.

1. Pathfinding start - `7:57`
   Thực hành nội dung Pathfinding start trong module Enemy Pathfinding & Separation.
2. Get neighbor skeletons - `13:55`
   Thực hành nội dung Get neighbor skeletons trong module Enemy Pathfinding & Separation.
3. Exclude neighbor - `4:02`
   Thực hành nội dung Exclude neighbor trong module Enemy Pathfinding & Separation.
4. Separation - `19:43`
   Thực hành nội dung Separation trong module Enemy Pathfinding & Separation.
5. Fix separation - `4:39`
   Thực hành nội dung Fix separation trong module Enemy Pathfinding & Separation.

Kiến thức chính:
- Pathfinding start
- Get neighbor skeletons
- Exclude neighbor
- Separation
- Fix separation

## Module 20 - Demon & Fireball Projectile

Demon và kỹ năng Fireball - 7 bài, khoảng 55 phút.

Module này tập trung vào demon và kỹ năng fireball trong game Unknown Adventure.

1. Demon enemy - `13:33`
   Thực hành nội dung Demon enemy trong module Demon & Fireball Projectile.
2. Fireball manifest - `6:53`
   Thực hành nội dung Fireball manifest trong module Demon & Fireball Projectile.
3. Fireball ability - `7:56`
   Thực hành nội dung Fireball ability trong module Demon & Fireball Projectile.
4. Projectile movement - `9:08`
   Thực hành nội dung Projectile movement trong module Demon & Fireball Projectile.
5. Fireball enter area signal - `7:12`
   Thực hành nội dung Fireball enter area signal trong module Demon & Fireball Projectile.
6. Deal damage with projectile - `4:49`
   Thực hành nội dung Deal damage with projectile trong module Demon & Fireball Projectile.
7. Play cast animation - `5:05`
   Thực hành nội dung Play cast animation trong module Demon & Fireball Projectile.

Kiến thức chính:
- Demon enemy
- Fireball manifest
- Fireball ability
- Projectile movement
- Fireball enter area signal
- Deal damage with projectile
- Play cast animation

## Module 21 - Throw Ability & Targeting

Kỹ năng ném và chọn mục tiêu - 3 bài, khoảng 26 phút.

Module này tập trung vào kỹ năng ném và chọn mục tiêu trong game Unknown Adventure.

1. Throw ability - `13:04`
   Thực hành nội dung Throw ability trong module Throw Ability & Targeting.
2. Target cursor + max distance - `8:07`
   Thực hành nội dung Target cursor + max distance trong module Throw Ability & Targeting.
3. Rotate weapon and target enemies - `4:54`
   Thực hành nội dung Rotate weapon and target enemies trong module Throw Ability & Targeting.

Kiến thức chính:
- Throw ability
- Target cursor + max distance
- Rotate weapon and target enemies

## Module 22 - Audio System

Hệ thống âm thanh - 9 bài, khoảng 1 giờ 27 phút.

Module này tập trung vào hệ thống âm thanh trong game Unknown Adventure.

1. Audio start - `12:54`
   Thực hành nội dung Audio start trong module Audio System.
2. Audio config - `15:55`
   Thực hành nội dung Audio config trong module Audio System.
3. Audio controller - `9:35`
   Thực hành nội dung Audio controller trong module Audio System.
4. Play sound with controller - `12:27`
   Thực hành nội dung Play sound with controller trong module Audio System.
5. Audio max distance - `13:26`
   Thực hành nội dung Audio max distance trong module Audio System.
6. Play impact sound - `5:09`
   Thực hành nội dung Play impact sound trong module Audio System.
7. Fireball hit sound - `3:31`
   Thực hành nội dung Fireball hit sound trong module Audio System.
8. Footstep sound - `6:00`
   Thực hành nội dung Footstep sound trong module Audio System.
9. Bg music - `7:56`
   Thực hành nội dung Bg music trong module Audio System.

Kiến thức chính:
- Audio start
- Audio config
- Audio controller
- Play sound with controller
- Audio max distance
- Play impact sound
- Fireball hit sound
- Footstep sound

## Module 23 - Footstep Particles

Hiệu ứng bước chân - 3 bài, khoảng 25 phút.

Audio Controller, âm thanh 2D theo khoảng cách, tiếng va chạm, Fireball, bước chân, nhạc nền và particle bụi chân.

1. Footstep particles - `10:47`
   Thực hành nội dung Footstep particles trong module Footstep Particles.
2. Footstep effect done - `9:14`
   Thực hành nội dung Footstep effect done trong module Footstep Particles.
3. Footstep particles improvement - `4:56`
   Thực hành nội dung Footstep particles improvement trong module Footstep Particles.

Kiến thức chính:
- Footstep particles
- Footstep effect done
- Footstep particles improvement

## Module 24 - Spell Bar & Ability Shortcuts

Thanh kỹ năng và phím tắt - 8 bài, khoảng 1 giờ 22 phút.

Module này tập trung vào thanh kỹ năng và phím tắt trong game Unknown Adventure.

1. Spellbar start - `14:15`
   Thực hành nội dung Spellbar start trong module Spell Bar & Ability Shortcuts.
2. Spell button UI - `10:24`
   Thực hành nội dung Spell button UI trong module Spell Bar & Ability Shortcuts.
3. Scaling mode - `1:55`
   Thực hành nội dung Scaling mode trong module Spell Bar & Ability Shortcuts.
4. Spell button and spell bar scripts - `12:02`
   Thực hành nội dung Spell button and spell bar scripts trong module Spell Bar & Ability Shortcuts.
5. Init shortcuts - `13:10`
   Thực hành nội dung Init shortcuts trong module Spell Bar & Ability Shortcuts.
6. Assign ability to button - `17:31`
   Thực hành nội dung Assign ability to button trong module Spell Bar & Ability Shortcuts.
7. Ability icon - `4:55`
   Thực hành nội dung Ability icon trong module Spell Bar & Ability Shortcuts.
8. Event bus emit ability - `8:00`
   Thực hành nội dung Event bus emit ability trong module Spell Bar & Ability Shortcuts.

Kiến thức chính:
- Spellbar start
- Spell button UI
- Scaling mode
- Spell button and spell bar scripts
- Init shortcuts
- Assign ability to button
- Ability icon
- Event bus emit ability

## Module 25 - Cooldown UI

Hiển thị hồi chiêu - 5 bài, khoảng 35 phút.

Module này tập trung vào hiển thị hồi chiêu trong game Unknown Adventure.

1. Texture progress bar - `6:49`
   Thực hành nội dung Texture progress bar trong module Cooldown UI.
2. Display progress visually - `9:46`
   Thực hành nội dung Display progress visually trong module Cooldown UI.
3. Manage real cooldown - `5:09`
   Thực hành nội dung Manage real cooldown trong module Cooldown UI.
4. Cooldown label - `11:35`
   Thực hành nội dung Cooldown label trong module Cooldown UI.
5. Keybind label - `2:09`
   Thực hành nội dung Keybind label trong module Cooldown UI.

Kiến thức chính:
- Texture progress bar
- Display progress visually
- Manage real cooldown
- Cooldown label
- Keybind label

## Module 26 - Health & Energy UI

Giao diện máu và năng lượng - 5 bài, khoảng 55 phút.

Module này tập trung vào giao diện máu và năng lượng trong game Unknown Adventure.

1. Health and energy bars - `8:53`
   Thực hành nội dung Health and energy bars trong module Health & Energy UI.
2. Set healthbar - `15:00`
   Thực hành nội dung Set healthbar trong module Health & Energy UI.
3. Override apply damage - `10:36`
   Thực hành nội dung Override apply damage trong module Health & Energy UI.
4. Signal health change - `15:18`
   Thực hành nội dung Signal health change trong module Health & Energy UI.
5. Generic progress bar - `4:49`
   Thực hành nội dung Generic progress bar trong module Health & Energy UI.

Kiến thức chính:
- Health and energy bars
- Set healthbar
- Override apply damage
- Signal health change
- Generic progress bar

## Module 27 - Energy System

Hệ thống năng lượng - 4 bài, khoảng 28 phút.

Module này tập trung vào hệ thống năng lượng trong game Unknown Adventure.

1. Handle energy cost - `8:32`
   Thực hành nội dung Handle energy cost trong module Energy System.
2. Regenerate energy - `8:17`
   Thực hành nội dung Regenerate energy trong module Energy System.
3. Handle energy corner cases - `5:19`
   Thực hành nội dung Handle energy corner cases trong module Energy System.
4. Add labels to progress bars - `5:35`
   Thực hành nội dung Add labels to progress bars trong module Energy System.

Kiến thức chính:
- Handle energy cost
- Regenerate energy
- Handle energy corner cases
- Add labels to progress bars

## Module 28 - Ability Validation & UI Feedback

Kiểm tra khả năng dùng kỹ năng - 3 bài, khoảng 31 phút.

Spell Bar, icon kỹ năng, Event Bus, progress bar, cooldown trực quan, thanh máu, thanh năng lượng, tiêu hao–hồi phục năng lượng và phản hồi khi không thể tung kỹ năng.

1. Can cast ability check - `14:22`
   Thực hành nội dung Can cast ability check trong module Ability Validation & UI Feedback.
2. Shaking button - `15:12`
   Thực hành nội dung Shaking button trong module Ability Validation & UI Feedback.
3. Energy reset - `1:51`
   Thực hành nội dung Energy reset trong module Ability Validation & UI Feedback.

Kiến thức chính:
- Can cast ability check
- Shaking button
- Energy reset

## Module 29 - Dash Ability

Kỹ năng Dash - 3 bài, khoảng 26 phút.

Module này tập trung vào kỹ năng dash trong game Unknown Adventure.

1. Dash ability - `9:03`
   Thực hành nội dung Dash ability trong module Dash Ability.
2. Ability clone self - `7:32`
   Thực hành nội dung Ability clone self trong module Dash Ability.
3. Clone finished - `9:40`
   Thực hành nội dung Clone finished trong module Dash Ability.

Kiến thức chính:
- Dash ability
- Ability clone self
- Clone finished

## Module 30 - Home & Pause Menu

Trang chủ và menu tạm dừng - 8 bài, khoảng 45 phút.

Module này tập trung vào trang chủ và menu tạm dừng trong game Unknown Adventure.

1. Home Scene - `6:23`
   Thực hành nội dung Home Scene trong module Home & Pause Menu.
2. Go to play scene - `5:51`
   Thực hành nội dung Go to play scene trong module Home & Pause Menu.
3. Pause button - `3:48`
   Thực hành nội dung Pause button trong module Home & Pause Menu.
4. Pause game - `7:10`
   Thực hành nội dung Pause game trong module Home & Pause Menu.
5. Pause menu - `6:20`
   Thực hành nội dung Pause menu trong module Home & Pause Menu.
6. Resume game - `6:44`
   Thực hành nội dung Resume game trong module Home & Pause Menu.
7. Handle pause bg color - `6:23`
   Thực hành nội dung Handle pause bg color trong module Home & Pause Menu.
8. Back to home scene - `2:48`
   Thực hành nội dung Back to home scene trong module Home & Pause Menu.

Kiến thức chính:
- Home Scene
- Go to play scene
- Pause button
- Pause game
- Pause menu
- Resume game
- Handle pause bg color
- Back to home scene

## Module 31 - Advanced Enemy AI & Spawning

AI nâng cao và sinh quái - 6 bài, khoảng 37 phút.

Module này tập trung vào ai nâng cao và sinh quái trong game Unknown Adventure.

1. Aggressive behavior - `6:20`
   Thực hành nội dung Aggressive behavior trong module Advanced Enemy AI & Spawning.
2. Enemy memory - `4:24`
   Thực hành nội dung Enemy memory trong module Advanced Enemy AI & Spawning.
3. Handle chasing and projectiles - `6:12`
   Thực hành nội dung Handle chasing and projectiles trong module Advanced Enemy AI & Spawning.
4. Handle timer in pause - `3:02`
   Thực hành nội dung Handle timer in pause trong module Advanced Enemy AI & Spawning.
5. Enemy Spawner - `7:37`
   Thực hành nội dung Enemy Spawner trong module Advanced Enemy AI & Spawning.
6. Spawn around player - `9:21`
   Thực hành nội dung Spawn around player trong module Advanced Enemy AI & Spawning.

Kiến thức chính:
- Aggressive behavior
- Enemy memory
- Handle chasing and projectiles
- Handle timer in pause
- Enemy Spawner
- Spawn around player

## Module 32 - Final Polish, Build & Wrap-up

Hoàn thiện và build game - 5 bài, khoảng 34 phút.

Module này tập trung vào hoàn thiện và build game trong game Unknown Adventure.

1. Audio controller rework - `11:57`
   Thực hành nội dung Audio controller rework trong module Final Polish, Build & Wrap-up.
2. Bg music done - `10:44`
   Thực hành nội dung Bg music done trong module Final Polish, Build & Wrap-up.
3. Hit particle error fix - `1:32`
   Thực hành nội dung Hit particle error fix trong module Final Polish, Build & Wrap-up.
4. Build the game - `8:36`
   Thực hành nội dung Build the game trong module Final Polish, Build & Wrap-up.
5. Final lecture - `0:57`
   Thực hành nội dung Final lecture trong module Final Polish, Build & Wrap-up.

Kiến thức chính:
- Audio controller rework
- Bg music done
- Hit particle error fix
- Build the game
- Final lecture
