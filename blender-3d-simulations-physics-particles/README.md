# Blender 3D Simulations, Physics & Particles

Khóa học thực hành bằng tiếng Việt về mô phỏng vật lý và hệ thống hạt trong Blender. Tài liệu này được biên soạn như một study guide độc lập, dựa trên curriculum và thời lượng người dùng cung cấp của khóa *The Ultimate Blender 3D Simulations, Physics & Particles* do Alex Cordebard giảng dạy.

> Đây là ghi chú học tập và lộ trình thực hành, không phải bản chép lời giảng. Nên mở video gốc, tự thao tác trong Blender và dùng các checklist bên dưới để kiểm tra kết quả.

## Thông tin khóa học

- **Phiên bản mục tiêu:** Blender 5.1+ theo curriculum được cung cấp
- **Tổng cấu trúc:** 9 module, 147 bài học, khoảng 37 giờ 42 phút
- **Định hướng:** hiểu solver, biết cách cache và debug, rồi áp dụng vào shot animation hoàn chỉnh
- **Đối tượng:** người mới đã biết thao tác cơ bản trong Blender và muốn làm simulation
- **Dự án xuyên suốt:** xây một thư viện simulation nhỏ, kết thúc bằng shot trứng nở và vỏ trứng vỡ

## Kết quả đầu ra

Sau khi hoàn thành, người học có thể:

- Thiết lập và kiểm tra Rigid Body, Cloth, Soft Body, Particle, Force Field, Dynamic Paint và Fluid.
- Phân biệt khi nào nên dùng mô phỏng vật lý, keyframe, Geometry Nodes hoặc kết hợp nhiều hệ thống.
- Chọn collision shape, mass, friction, damping, quality và cache phù hợp với shot.
- Tạo chuyển động bầy đàn bằng Boids và điều khiển particle bằng force field, texture hoặc object.
- Tạo các hiệu ứng vải, tóc, tuyết, cỏ, bướm, lửa, khói, chất lỏng và splash.
- Tối ưu viewport, cache, render và export simulation sang Unreal Engine hoặc Unity khi cần.
- Phân tích lỗi theo thứ tự: scale, normals, collision, frame range, cache, solver và render.

## Cấu trúc khóa học

| Module | Chủ đề | Số bài | Thời lượng | Bài thực hành chính |
|---|---|---:|---:|---|
| [01](01%20-%20Getting%20Started%20With%20Blender/README.md) | Getting Started With Blender | 8 | 1 giờ 01 phút | Scene kiểm tra animation và physics |
| [02](02%20-%20Rigid%20Body%20Physics/README.md) | Rigid Body Physics | 30 | 8 giờ 20 phút | Domino và xe vượt chướng ngại vật |
| [03](03%20-%20Cloth%20Physics/README.md) | Cloth Physics | 16 | 4 giờ 56 phút | Rèm sân khấu, áo choàng và quần áo |
| [04](04%20-%20Particle%20Systems/README.md) | Particle Systems | 33 | 9 giờ 29 phút | Boids, Sandman, đàn ong, tuyết và tóc |
| [05](05%20-%20Forcefields/README.md) | Forcefields | 16 | 2 giờ 34 phút | Cỏ, bướm và tuyết chuyển động |
| [06](06%20-%20Soft%20Body/README.md) | Soft Body | 7 | 1 giờ 16 phút | Jello và nhân vật mềm |
| [07](07%20-%20Dynamic%20Paint/README.md) | Dynamic Paint | 11 | 3 giờ 16 phút | Dấu chân, vết xước, sóng và vũng nước |
| [08](08%20-%20Fire%20and%20Smoke/README.md) | Fire & Smoke | 15 | 3 giờ 53 phút | Lửa trại, xe phát nổ và tornado |
| [09](09%20-%20Liquid%20Simulations/README.md) | Liquid Simulations | 11 | 2 giờ 58 phút | Chocolate nóng và thác nước |

## Cách học mỗi bài

1. Xem bài và ghi lại **đầu vào**, **solver**, **tham số chính** và **đầu ra cần đạt**.
2. Dựng lại scene từ đầu trong một file riêng, không chỉ mở file mẫu.
3. Chạy thử một đoạn ngắn, kiểm tra lỗi, sau đó mới cache toàn bộ timeline.
4. Thay đổi từng nhóm thông số một lần và ghi lại tác động.
5. Lưu phiên bản ổn định trước khi thử nghiệm tiếp.
6. Cuối module, hoàn thành project và quiz trước khi chuyển sang hệ thống mới.

## Lộ trình theo năng lực

```text
Blender cơ bản
    ↓
Rigid Body và Constraint
    ↓
Cloth và Soft Body
    ↓
Particle và Boids
    ↓
Force Field
    ↓
Dynamic Paint
    ↓
Fire, Smoke và Liquid
    ↓
Cache, render, export và shot hoàn chỉnh
```

## Lộ trình riêng cho animation trứng nở

Nếu mục tiêu trước mắt là quả trứng nứt, vỏ vỡ và nhân vật bên trong xuất hiện, học theo thứ tự rút gọn sau:

1. **Module 01:** scale, keyframe, timeline, transform và cách kiểm tra animation.
2. **Module 02:** Collision Shape, Mass, Friction, Rigid Body World, Deactivation và Constraint.
3. **Module 04:** Particle Velocity, Rotation, Render và Force Field cho mảnh vỏ hoặc mảnh vụn.
4. **Module 05:** Turbulence, Vortex và Drag để tạo chuyển động bung ra có kiểm soát.
5. **Module 06:** Soft Body nếu lòng trắng, màng trứng hoặc nhân vật cần biến dạng mềm.
6. **Module 08/09:** chỉ học khi shot cần khói, hơi nóng, chất nhầy hoặc chất lỏng.

Project cuối khóa cho mục tiêu này nằm tại [11 - Egg Hatch Project.md](11%20-%20Egg%20Hatch%20Project.md).

## Nguyên tắc debug simulation

Khi kết quả sai, kiểm tra theo thứ tự:

```text
Object scale và rotation
        ↓
Normals, topology và origin
        ↓
Collision / effector / collection
        ↓
Frame range và cache
        ↓
Solver quality, substeps và time scale
        ↓
Material, viewport và render
```

Đừng tăng mọi thông số cùng lúc. Một cache sạch và một thay đổi có chủ đích thường giúp tìm lỗi nhanh hơn một scene có hàng chục giá trị bị chỉnh ngẫu nhiên.

## Cách tổ chức file thực hành

```text
01-foundation.blend
02-rigid-body-domino.blend
03-rigid-body-vehicle.blend
04-cloth-project.blend
05-boids-and-particles.blend
06-forcefields.blend
07-soft-body.blend
08-dynamic-paint.blend
09-fire-and-smoke.blend
10-liquid.blend
11-egg-hatch-final.blend
```

Mỗi project nên có collection riêng cho `SIM`, `COLLISION`, `RENDER`, `LIGHTS` và `CAMERA`. Khi cache xong, ghi lại phiên bản Blender, frame range, solver và các thông số quan trọng trong một file `NOTES.md` cạnh file `.blend`.

## Đánh giá cuối khóa

- **Bài kiểm tra module:** trả lời câu hỏi khái niệm và giải thích nguyên nhân của một lỗi simulation.
- **Bài thực hành:** hoàn thành project module, có cache và render preview.
- **Capstone:** tạo shot dài tối thiểu 120 frame, có camera, ánh sáng, vật liệu, cache ổn định và một bản render xem được.

Tiêu chí chi tiết nằm trong [10 - Study Plan and Assessment.md](10%20-%20Study%20Plan%20and%20Assessment.md).

## Nguồn và phạm vi

Tên module, tên bài và thời lượng trong tài liệu này được giữ theo curriculum người dùng cung cấp từ trang Udemy. Các mục tiêu, bài thực hành đề xuất, checklist và project trứng nở là phần hướng dẫn học tập được xây dựng thêm cho workspace này.

