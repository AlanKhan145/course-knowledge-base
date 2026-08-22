# 057 — Zombie Bake Maps

| Thuộc tính | Nội dung |
|---|---|
| Phần | 08 — Practice |
| Thời lượng | 17:08 |
| Chủ đề | Bake normal, AO và texture maps từ high-poly xuống low-poly |

## Mục tiêu

Thiết lập high/low pair, cage, ray distance, image size và color space để bake sạch.

## Quy trình gợi ý

Đặt tên high/low → UV low-poly → tạo image → chọn đúng thứ tự → bật Selected to Active → bake → kiểm tra seam/artifact.

## Lưu ý

Normal map và roughness/AO cần được đọc đúng color space. Nếu có lỗi, kiểm tra scale, normals, cage và khoảng cách ray trước khi tăng resolution.

## Checklist

- [ ] High/low pair được đặt tên rõ.
- [ ] Bake test ở resolution thấp trước.
- [ ] Kiểm tra normal map trên low-poly dưới ánh sáng.
