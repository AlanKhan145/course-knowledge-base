# Learning Plan 10 Weeks

## Cách dùng

Lịch này giả định bạn học 4-5 buổi mỗi tuần, mỗi buổi 90-120 phút. Khóa có nhiều hệ thống liên kết với nhau, nên sau mỗi tuần nên dành một buổi chỉ để chạy game, sửa lỗi và ghi chú kiến trúc.

## Tuần 1 - Project, Player và TileMap

- Hoàn thành module 01-04.
- Mục tiêu: project setup, node/scene, camera, player movement, input, animation và TileMap.
- Bài tập: tạo một map nhỏ và player di chuyển 8 hướng mượt với camera follow.

## Tuần 2 - Ability Architecture nền tảng

- Hoàn thành module 05-08.
- Mục tiêu: Ability Controller, component, spawn effect, manifest, melee attack và weapon context.
- Bài tập: tạo một ability thử nghiệm có manifest riêng và effect tự cleanup.

## Tuần 3 - Cooldown và Enemy cơ bản

- Hoàn thành module 09-11.
- Mục tiêu: cooldown manager, Skeleton enemy, group targeting và animation ưu tiên.
- Bài tập: Skeleton truy đuổi player, dừng đúng khoảng cách và phát animation phù hợp.

## Tuần 4 - Damage Feedback

- Hoàn thành module 12-17.
- Mục tiêu: health/damage, shader blink, floating damage text, pushback, multi-target, dot product và particles.
- Bài tập: melee attack đánh nhiều enemy, hiện số damage, knockback và hit particles.

## Tuần 5 - Game Over, Pathfinding và Fireball

- Hoàn thành module 18-21.
- Mục tiêu: death/game over, respawn, pathfinding, separation, Demon enemy, Fireball projectile và throw targeting.
- Bài tập: thêm một encounter có Skeleton và Demon cùng xuất hiện nhưng không chồng lên nhau.

## Tuần 6 - Audio và Footstep VFX

- Hoàn thành module 22-23.
- Mục tiêu: Audio Controller, audio config, sound theo khoảng cách, impact/fireball/footstep sound, bg music và footstep particles.
- Bài tập: tạo preset âm thanh cho melee, projectile và movement.

## Tuần 7 - Spell Bar và Cooldown UI

- Hoàn thành module 24-25.
- Mục tiêu: spell bar, shortcut, button scripts, ability icon, Event Bus và cooldown progress.
- Bài tập: UI hiển thị đúng icon, keybind và cooldown của ít nhất 3 ability.

## Tuần 8 - Health, Energy và Validation

- Hoàn thành module 26-28.
- Mục tiêu: health/energy bars, signal health change, energy cost/regeneration và UI feedback khi không thể cast.
- Bài tập: thiếu energy thì ability không cast và button rung báo lỗi.

## Tuần 9 - Dash, Home và Pause

- Hoàn thành module 29-30.
- Mục tiêu: dash ability, clone effect, Home Scene, Play Scene, Pause Menu và Resume/Back Home.
- Bài tập: pause không làm hỏng cooldown, timer hoặc input khi resume.

## Tuần 10 - Spawning, Polish và Build

- Hoàn thành module 31-32.
- Mục tiêu: enemy AI nâng cao, memory, spawner quanh player, audio rework, bug fix và build game.
- Bài tập: tạo một build chạy được và ghi lại 5 điểm polish tiếp theo.
