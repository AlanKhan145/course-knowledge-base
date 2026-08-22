# 011 — Typical Errors in Modeling

| Thuộc tính | Nội dung |
|---|---|
| Phần | 02 — Modeling in Blender |
| Thời lượng | 3:08 |
| Chủ đề | Lỗi topology, normals, scale và modifier |

## Mục tiêu

Nhận diện lỗi thường gặp trước khi chúng biến thành lỗi shading hoặc lỗi bake.

## Kiểm tra nhanh

Apply scale khi cần → Recalculate Normals → Merge by Distance → kiểm tra non-manifold → xem modifier stack và tên object.

## Checklist

- [ ] Biết mở Face Orientation.
- [ ] Không còn mặt trùng hoặc điểm trùng ngoài chủ ý.
- [ ] Biết khi nào nên sửa topology thay vì tăng subdivision.
