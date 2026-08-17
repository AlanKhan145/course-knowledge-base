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
| 001 | Hệ thống Emission Particle | 11:01 | Tạo emitter và lifetime |
| 002 | Nguồn phát Particle | 15:10 | Vertex, face, volume và timing |
| 003 | Particle Cache | 9:28 | Cache và kiểm tra playback |
| 004 | Particle Velocity | 9:20 | Normal, object và random velocity |
| 005 | Particle Rotation | 18:10 | Hướng và xoay instance |
| 006 | Newtonian Physics cho Particle | 15:26 | Gravity và lực cơ bản |
| 007 | Keyed Physics | 13:49 | Particle đi theo mục tiêu |
| 008 | Boid Particles | 15:17 | Chuyển particle thành boid |
| 009 | Mô phỏng trận chiến bằng Boid | 13:09 | Hai nhóm boid tương tác |
| 010 | Quan hệ giữa các Boid | 6:37 | Group và quan hệ hành vi |
| 011 | Boid Brain | 22:03 | Goal, avoid và flock |
| 012 | Boid Brain — Phần 2 | 9:40 | Tinh chỉnh hành vi |
| 013 | Boid di chuyển trên mặt đất | 18:09 | Hạn chế chuyển động theo mặt phẳng |
| 014 | Fluid Particles — Phần 1 | 14:19 | Particle liên quan đến fluid |
| 015 | Fluid Particles — Phần 2 | 22:33 | Hoàn thiện thiết lập fluid particle |
| 016 | Thiết lập Render cho Particle | 19:33 | Object, collection, halo và material |
| 017 | Hiển thị Particle trong Viewport | 9:26 | Preview nhanh khi chỉnh solver |
| 018 | Thiết lập Force Field cho Particle | 10:33 | Hút, đẩy và làm lệch quỹ đạo |
| 019 | Texture điều khiển Particle | 16:41 | Dùng texture để điều chế lực |
| 020 | Hair Particles | 6:38 | Phát triển hair particle |
| 021 | Hair Dynamics | 20:16 | Chuyển động tóc |
| 022 | Render Hair Particle | 12:12 | Hiển thị và vật liệu tóc |
| 023 | Child Particle kiểu Simple | 18:55 | Tăng mật độ tóc bằng child |
| 024 | Hair Kinks | 17:50 | Tạo độ xoăn và biến thiên |
| 025 | Child Particle kiểu Interpolated | 6:36 | Nội suy child particle |
| 026 | Hair Shape | 4:20 | Kiểm soát profile và độ dài |
| 027 | Tạo animation Sandman | 38:58 | Nhân vật tan thành particle |
| 028 | Animation đàn ong | 23:52 | Boid và đàn ong |
| 029 | Animation đàn ong — Phần 2 | 51:48 | Hoàn thiện shot đàn ong |
| 030 | Animation tuyết rơi | 24:34 | Particle rơi và render tuyết |
| 031 | Animation tuyết rơi — Phần 2 | 31:54 | Gió, accumulation và hoàn thiện |
| 032 | Animation tóc nhân vật | 26:39 | Hair dynamics trong shot nhân vật |
| 033 | Export Emission Particle sang Unreal và Unity | 13:38 | Chuẩn bị particle cho engine |

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

