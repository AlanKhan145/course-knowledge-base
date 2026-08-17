# Module 04 — Particle Systems

**33 bài • 9 giờ 29 phút**

Đây là module lớn nhất, đi từ emission particle đến Newtonian, Keyed, Boids, Hair, child particles, force field và các project animation.

## Mục tiêu

- Tạo particle emitter, điều khiển nguồn phát, lifetime, velocity và rotation.
- Hiểu Newtonian, Keyed và Boids physics.
- Xây hành vi đàn bằng Boid Brain và quan hệ giữa các boid.
- Render particle dưới dạng object, hair hoặc kết hợp với vật liệu.
- Điều khiển particle bằng texture, force field và child particles.
- Hoàn thành các shot đàn ong, tuyết, tóc và Sandman.

## Danh sách bài học

| # | Bài học | Thời lượng | Trọng tâm thực hành |
|---:|---|---:|---|
| 001 | [Hệ thống Emission Particle](001%20-%20H%E1%BB%87%20th%E1%BB%91ng%20Emission%20Particle.md) | 11:01 | Tạo emitter và lifetime |
| 002 | [Nguồn phát Particle](002%20-%20Ngu%E1%BB%93n%20ph%C3%A1t%20Particle.md) | 15:10 | Vertex, face, volume và timing |
| 003 | [Particle Cache](003%20-%20Particle%20Cache.md) | 9:28 | Cache và kiểm tra playback |
| 004 | [Particle Velocity](004%20-%20Particle%20Velocity.md) | 9:20 | Normal, object và random velocity |
| 005 | [Particle Rotation](005%20-%20Particle%20Rotation.md) | 18:10 | Hướng và xoay instance |
| 006 | [Newtonian Physics cho Particle](006%20-%20Newtonian%20Physics%20cho%20Particle.md) | 15:26 | Gravity và lực cơ bản |
| 007 | [Keyed Physics](007%20-%20Keyed%20Physics.md) | 13:49 | Particle đi theo mục tiêu |
| 008 | [Boid Particles](008%20-%20Boid%20Particles.md) | 15:17 | Chuyển particle thành boid |
| 009 | [Mô phỏng trận chiến bằng Boid](009%20-%20M%C3%B4%20ph%E1%BB%8Fng%20tr%E1%BA%ADn%20chi%E1%BA%BFn%20b%E1%BA%B1ng%20Boid.md) | 13:09 | Hai nhóm boid tương tác |
| 010 | [Quan hệ giữa các Boid](010%20-%20Quan%20h%E1%BB%87%20gi%E1%BB%AFa%20c%C3%A1c%20Boid.md) | 6:37 | Group và quan hệ hành vi |
| 011 | [Boid Brain](011%20-%20Boid%20Brain.md) | 22:03 | Goal, avoid và flock |
| 012 | [Boid Brain — Phần 2](012%20-%20Boid%20Brain%20%E2%80%94%20Ph%E1%BA%A7n%202.md) | 9:40 | Tinh chỉnh hành vi |
| 013 | [Boid di chuyển trên mặt đất](013%20-%20Boid%20di%20chuy%E1%BB%83n%20tr%C3%AAn%20m%E1%BA%B7t%20%C4%91%E1%BA%A5t.md) | 18:09 | Hạn chế chuyển động theo mặt phẳng |
| 014 | [Fluid Particles — Phần 1](014%20-%20Fluid%20Particles%20%E2%80%94%20Ph%E1%BA%A7n%201.md) | 14:19 | Particle liên quan đến fluid |
| 015 | [Fluid Particles — Phần 2](015%20-%20Fluid%20Particles%20%E2%80%94%20Ph%E1%BA%A7n%202.md) | 22:33 | Hoàn thiện thiết lập fluid particle |
| 016 | [Thiết lập Render cho Particle](016%20-%20Thi%E1%BA%BFt%20l%E1%BA%ADp%20Render%20cho%20Particle.md) | 19:33 | Object, collection, halo và material |
| 017 | [Hiển thị Particle trong Viewport](017%20-%20Hi%E1%BB%83n%20th%E1%BB%8B%20Particle%20trong%20Viewport.md) | 9:26 | Preview nhanh khi chỉnh solver |
| 018 | [Thiết lập Force Field cho Particle](018%20-%20Thi%E1%BA%BFt%20l%E1%BA%ADp%20Force%20Field%20cho%20Particle.md) | 10:33 | Hút, đẩy và làm lệch quỹ đạo |
| 019 | [Texture điều khiển Particle](019%20-%20Texture%20%C4%91i%E1%BB%81u%20khi%E1%BB%83n%20Particle.md) | 16:41 | Dùng texture để điều chế lực |
| 020 | [Hair Particles](020%20-%20Hair%20Particles.md) | 6:38 | Phát triển hair particle |
| 021 | [Hair Dynamics](021%20-%20Hair%20Dynamics.md) | 20:16 | Chuyển động tóc |
| 022 | [Render Hair Particle](022%20-%20Render%20Hair%20Particle.md) | 12:12 | Hiển thị và vật liệu tóc |
| 023 | [Child Particle kiểu Simple](023%20-%20Child%20Particle%20ki%E1%BB%83u%20Simple.md) | 18:55 | Tăng mật độ tóc bằng child |
| 024 | [Hair Kinks](024%20-%20Hair%20Kinks.md) | 17:50 | Tạo độ xoăn và biến thiên |
| 025 | [Child Particle kiểu Interpolated](025%20-%20Child%20Particle%20ki%E1%BB%83u%20Interpolated.md) | 6:36 | Nội suy child particle |
| 026 | [Hair Shape](026%20-%20Hair%20Shape.md) | 4:20 | Kiểm soát profile và độ dài |
| 027 | [Tạo animation Sandman](027%20-%20T%E1%BA%A1o%20animation%20Sandman.md) | 38:58 | Nhân vật tan thành particle |
| 028 | [Animation đàn ong](028%20-%20Animation%20%C4%91%C3%A0n%20ong.md) | 23:52 | Boid và đàn ong |
| 029 | [Animation đàn ong — Phần 2](029%20-%20Animation%20%C4%91%C3%A0n%20ong%20%E2%80%94%20Ph%E1%BA%A7n%202.md) | 51:48 | Hoàn thiện shot đàn ong |
| 030 | [Animation tuyết rơi](030%20-%20Animation%20tuy%E1%BA%BFt%20r%C6%A1i.md) | 24:34 | Particle rơi và render tuyết |
| 031 | [Animation tuyết rơi — Phần 2](031%20-%20Animation%20tuy%E1%BA%BFt%20r%C6%A1i%20%E2%80%94%20Ph%E1%BA%A7n%202.md) | 31:54 | Gió, accumulation và hoàn thiện |
| 032 | [Animation tóc nhân vật](032%20-%20Animation%20t%C3%B3c%20nh%C3%A2n%20v%E1%BA%ADt.md) | 26:39 | Hair dynamics trong shot nhân vật |
| 033 | [Export Emission Particle sang Unreal và Unity](033%20-%20Export%20Emission%20Particle%20sang%20Unreal%20v%C3%A0%20Unity.md) | 13:38 | Chuẩn bị particle cho engine |

## Luồng tư duy cho particle

```text
Emitter
  ↓
Birth, lifetime, count
  ↓
Velocity và rotation
  ↓
Physics hoặc Boids
  ↓
Force field / texture / collision
  ↓
Render As: object, collection hoặc hair
  ↓
Cache và export
```

## Bài thực hành đề xuất

- **Boids:** tạo đàn cá hoặc đàn ong có leader, flock và avoid collision.
- **Snow:** tạo tuyết rơi với variation về kích thước, gió và độ xoay.
- **Sandman:** làm một object tan dần thành particle, có camera cận cảnh.
- **Hair:** tạo tóc particle có child, kink và hair dynamics.

## Ứng dụng cho vỏ trứng

Particle phù hợp để tạo mảnh vụn nhỏ, bụi, bột vỏ trứng hoặc tia vật liệu bung ra. Với mảnh vỏ lớn cần va chạm chính xác, dùng Rigid Body; particle có thể bổ sung lớp chi tiết ở hậu cảnh. Velocity, rotation, turbulence và drag là nhóm thông số cần kiểm tra đầu tiên.

## Checklist

- [ ] Phân biệt emission, velocity, physics và render.
- [ ] Biết chuyển viewport sang hiển thị particle để debug nhanh.
- [ ] Boid có brain và behavior phù hợp, không chỉ bật Physics = Boids.
- [ ] Đã kiểm tra hướng instance theo velocity.
- [ ] Child particle chỉ được tăng sau khi particle gốc ổn định.
- [ ] Đã cache trước khi render hoặc export.

## Quiz Section 4 — trọng tâm ôn tập

Giải thích nguồn phát, lifetime, velocity, rotation và physics; so sánh Newtonian với Boids; mô tả vai trò của Boid Brain; và nêu khi nào nên dùng particle object thay cho rigid body.
