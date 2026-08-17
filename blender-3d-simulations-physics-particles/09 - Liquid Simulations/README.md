# Module 09 — Liquid Simulations

**11 bài • 2 giờ 58 phút**

Module cuối tập trung vào chất lỏng, diffusion, liquid particles, mesh và các shot rót chocolate hoặc thác nước.

## Mục tiêu

- Thiết lập Liquid Domain và các object Flow, Effector.
- Điều chỉnh diffusion, độ nhớt, particles và mesh.
- Hiểu quan hệ giữa simulation particles và liquid mesh.
- Tối ưu cache và render chất lỏng.
- Hoàn thành một shot rót chất lỏng và một shot thác nước.

## Danh sách bài học

| # | Bài học | Thời lượng | Trọng tâm thực hành |
|---:|---|---:|---|
| 001 | [Tổng quan Liquid Simulation](001%20-%20T%E1%BB%95ng%20quan%20Liquid%20Simulation.md) | 13:51 | Luồng làm việc và thuật ngữ |
| 002 | [Liquid Domain Settings](002%20-%20Liquid%20Domain%20Settings.md) | 18:59 | Domain, resolution và solver |
| 003 | [Liquid Diffusion / độ nhớt](003%20-%20Liquid%20Diffusion%20-%20%C4%91%E1%BB%99%20nh%E1%BB%9Bt.md) | 9:57 | Điều khiển chất lỏng đặc-loãng |
| 004 | [Liquid Particles](004%20-%20Liquid%20Particles.md) | 11:20 | Particle của chất lỏng |
| 005 | [Liquid Mesh](005%20-%20Liquid%20Mesh.md) | 12:06 | Tạo bề mặt render |
| 006 | [Tổng kết các thiết lập Liquid](006%20-%20T%E1%BB%95ng%20k%E1%BA%BFt%20c%C3%A1c%20thi%E1%BA%BFt%20l%E1%BA%ADp%20Liquid.md) | 17:34 | Ôn và kết hợp tham số |
| 007 | [Mô phỏng rót chocolate nóng](007%20-%20M%C3%B4%20ph%E1%BB%8Fng%20r%C3%B3t%20chocolate%20n%C3%B3ng.md) | 28:42 | Shot rót chocolate |
| 008 | [Animation thác nước](008%20-%20Animation%20th%C3%A1c%20n%C6%B0%E1%BB%9Bc.md) | 22:35 | Dòng chảy lớn |
| 009 | [Animation thác nước — Phần 2](009%20-%20Animation%20th%C3%A1c%20n%C6%B0%E1%BB%9Bc%20%E2%80%94%20Ph%E1%BA%A7n%202.md) | 18:28 | Tinh chỉnh hình dạng và bọt |
| 010 | [Animation thác nước — Phần 3](010%20-%20Animation%20th%C3%A1c%20n%C6%B0%E1%BB%9Bc%20%E2%80%94%20Ph%E1%BA%A7n%203.md) | 22:45 | Hoàn thiện render shot |
| 011 | [Bài bonus cuối khóa](011%20-%20B%C3%A0i%20bonus%20cu%E1%BB%91i%20kh%C3%B3a.md) | 1:24 | Tổng kết và hướng mở rộng |

## Bài thực hành đề xuất

Tạo một cốc và một nguồn rót, bắt đầu bằng domain resolution thấp. Khi dòng chảy ổn định, bật liquid mesh, chỉnh material và render đoạn 80 đến 120 frame. Sau đó thử thay đổi viscosity để tạo hai phiên bản khác nhau.

## Ứng dụng cho shot trứng

Liquid chỉ nên thêm khi shot có lòng đỏ, lòng trắng, chất nhầy hoặc splash. Nếu mục tiêu chỉ là vỏ nứt và bung, không nên đưa liquid solver vào sớm vì thời gian cache và việc debug sẽ tăng đáng kể.

## Checklist

- [ ] Domain và flow có scale đúng.
- [ ] Đã kiểm tra liquid particles trước khi tạo mesh.
- [ ] Mesh có độ dày và smoothing phù hợp.
- [ ] Đã cache low resolution trước khi tăng chất lượng.
- [ ] Material trong suốt hoặc bán trong được kiểm tra bằng render preview.

## Quiz Section 9 — trọng tâm ôn tập

Giải thích Domain, Flow, Effector, liquid particles và liquid mesh; độ nhớt tác động ra sao; và vì sao nên kiểm tra particle trước khi tạo mesh final.
