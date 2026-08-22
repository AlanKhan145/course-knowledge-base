# 025 — PBR Materials

| Thuộc tính | Nội dung |
|---|---|
| Phần | 03 — Materials |
| Thời lượng | 14:08 |
| Chủ đề | PBR texture maps và color management |

## Mục tiêu

Đọc albedo/base color, roughness, metallic, normal, height và displacement map đúng cách.

## Quy trình gợi ý

Color map dùng sRGB; roughness/metallic/normal dùng Non-Color → Normal Map node → Principled BSDF.

## Lưu ý

Không đưa normal map thẳng vào Normal socket và không để roughness chạy qua color transform như ảnh màu.

## Checklist

- [ ] Gắn đúng từng map.
- [ ] Phân biệt bump và displacement.
- [ ] Kiểm tra scale của texture trước khi kết luận shader sai.
