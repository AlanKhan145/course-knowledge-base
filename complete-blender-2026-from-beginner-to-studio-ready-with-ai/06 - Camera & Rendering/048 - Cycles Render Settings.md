# 048 — Cycles Render Settings

| Thuộc tính | Nội dung |
|---|---|
| Phần | 06 — Camera & Rendering |
| Thời lượng | 6:54 |
| Chủ đề | GPU, samples, denoise, light paths, motion blur và color space |

## Mục tiêu

Thiết lập render test/final cân bằng giữa chất lượng, noise và thời gian.

## Quy trình gợi ý

Chọn Cycles device → render low samples → bật denoise → giới hạn light paths hợp lý → test motion blur → render final.

## Checklist

- [ ] Đã chọn đúng GPU/CPU.
- [ ] Có preset test và preset final.
- [ ] Denoise không làm mất detail quan trọng.
- [ ] Kiểm tra volume và caustics nếu scene có.
