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
| 001 | Tổng quan Liquid Simulation | 13:51 | Luồng làm việc và thuật ngữ |
| 002 | Liquid Domain Settings | 18:59 | Domain, resolution và solver |
| 003 | Liquid Diffusion / độ nhớt | 9:57 | Điều khiển chất lỏng đặc-loãng |
| 004 | Liquid Particles | 11:20 | Particle của chất lỏng |
| 005 | Liquid Mesh | 12:06 | Tạo bề mặt render |
| 006 | Tổng kết các thiết lập Liquid | 17:34 | Ôn và kết hợp tham số |
| 007 | Mô phỏng rót chocolate nóng | 28:42 | Shot rót chocolate |
| 008 | Animation thác nước | 22:35 | Dòng chảy lớn |
| 009 | Animation thác nước — Phần 2 | 18:28 | Tinh chỉnh hình dạng và bọt |
| 010 | Animation thác nước — Phần 3 | 22:45 | Hoàn thiện render shot |
| 011 | Bài bonus cuối khóa | 1:24 | Tổng kết và hướng mở rộng |

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

