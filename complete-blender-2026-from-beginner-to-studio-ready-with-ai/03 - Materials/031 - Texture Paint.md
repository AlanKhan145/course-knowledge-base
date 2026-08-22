# 031 — Texture Paint

| Thuộc tính | Nội dung |
|---|---|
| Phần | 03 — Materials |
| Thời lượng | 16:14 |
| Chủ đề | Paint color map và mask trực tiếp trên model |

## Mục tiêu

Chuẩn bị UV/image texture, paint layer có chủ ý và lưu ảnh đúng color space.

## Quy trình gợi ý

UV unwrap → New Image → tạo paint layer → paint base/variation → Save Image → kiểm tra trong Shader Editor.

## Checklist

- [ ] UV không bị overlap ngoài chủ ý.
- [ ] Image đã được lưu ra ổ đĩa.
- [ ] Paint layer có thể sửa lại, không chỉ phụ thuộc một stroke.
