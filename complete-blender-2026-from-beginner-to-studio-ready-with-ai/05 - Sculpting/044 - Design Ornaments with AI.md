# 044 — Design Ornaments with AI

| Thuộc tính | Nội dung |
|---|---|
| Phần | 05 — Sculpting |
| Thời lượng | 8:12 |
| Chủ đề | AI-generated depth map cho ornament |

## Mục tiêu

Biết dùng depth map AI như nguồn tham khảo/height detail và kiểm soát độ nổi khi đưa vào Blender.

## Quy trình gợi ý

Tạo depth map → kiểm tra grayscale và seam → đưa qua Image Texture/Displacement hoặc sculpt detail → giảm noise → test ánh sáng.

## Lưu ý

Depth map không tự động tạo topology sạch. Cần kiểm tra scale, hướng và artifact trước khi dùng trong asset cuối.

## Checklist

- [ ] Map có độ tương phản phù hợp.
- [ ] Ornament không phá silhouette ngoài chủ ý.
- [ ] Có bản gốc trước khi áp dụng displacement.
