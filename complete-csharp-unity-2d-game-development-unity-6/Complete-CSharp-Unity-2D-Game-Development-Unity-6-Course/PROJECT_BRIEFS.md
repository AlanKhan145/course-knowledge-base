# Project Briefs

## Delivery Dash

Thể loại: game lái xe giao hàng từ góc nhìn 2D.

Mục tiêu sản phẩm:

- Người chơi điều khiển xe bằng bàn phím.
- Xe có thể va chạm môi trường và đi qua vùng trigger.
- Người chơi nhặt gói hàng, giao đến điểm đích và nhận phản hồi UI.
- Có boost và bump làm thay đổi tốc độ.

Kỹ năng trọng tâm:

- C# method, variable, `if`, boolean.
- `Transform.Translate()`, `Time.deltaTime`, `SerializeField`.
- `OnCollisionEnter2D()`, `OnTriggerEnter2D()`.
- Tag, prefab, `Destroy()`, `GetComponent()`.
- Cinemachine và TextMeshPro.

Bài tập mở rộng:

- Thêm bộ đếm thời gian giao hàng.
- Thêm nhiều điểm giao với màu khác nhau.
- Thêm âm thanh khi nhặt và giao hàng.

## Snow Surfer

Thể loại: game trượt tuyết vật lý.

Mục tiêu sản phẩm:

- Người chơi trượt trên đường đồi dùng Sprite Shape.
- Nhân vật có thể xoay, lộn vòng và crash.
- Game có finish line, particle effect, timer, power-up và UI button.
- Scene có thể reload sau delay.

Kỹ năng trọng tâm:

- Sprite Shape, Edge Collider, Surface Effector 2D.
- Unity Input System, torque, `Invoke()`.
- Namespace và `SceneManagement`.
- Particle System, `OnCollisionExit()`.
- Function parameter, public access modifier, ScriptableObject.
- Anchor, pivot, layout group, button `OnClick()`.

Bài tập mở rộng:

- Tạo power-up tăng tốc ngắn hạn.
- Thêm medal theo thời gian hoàn thành.
- Tạo đường trượt có nhịp khó tăng dần.

## Tilemania

Thể loại: platformer 2D.

Mục tiêu sản phẩm:

- Người chơi chạy, nhảy, leo thang và bắn.
- Level được xây bằng Tilemap và Rule Tile.
- Có enemy, hazard, coin, sound effect và nhiều level.
- Lives và score được giữ qua scene.

Kỹ năng trọng tâm:

- Slicing sprite sheet, Tilemap, Rule Tile, Sorting Layer.
- Animator state, transition và animation state từ code.
- Composite Collider, LayerMask, `IsTouchingLayers`.
- Cinemachine Follow, Confiner và State-Driven Camera.
- Coroutine, Singleton, scene persistence, prefab variant.

Bài tập mở rộng:

- Thêm checkpoint.
- Thêm enemy bay hoặc turret đứng yên.
- Tạo một level bí mật chứa coin thưởng.

## Star Blaster

Thể loại: game bắn phi thuyền 2D.

Mục tiêu sản phẩm:

- Người chơi di chuyển trong viewport và bắn projectile.
- Enemy đi theo path, sinh theo wave và bắn trả.
- Game có damage, explosion, screen shake, sound, music, score và UI.
- Có scene flow, level manager, singleton và bản build.

Kỹ năng trọng tâm:

- Array, `for`, `foreach`, `while`.
- Coroutine và wave spawning.
- Health/damage system, projectile, shooting.
- Parallax/scrolling background.
- AudioManager, ScoreKeeper, LevelManager.
- Balance và build game.

Bài tập mở rộng:

- Thêm boss wave.
- Thêm power-up bắn hai tia.
- Thêm màn hình game over có điểm cao nhất trong session.

