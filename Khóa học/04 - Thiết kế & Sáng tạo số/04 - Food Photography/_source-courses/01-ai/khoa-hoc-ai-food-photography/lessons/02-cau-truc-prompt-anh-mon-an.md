# Bài 2 — Cấu trúc prompt ảnh món ăn

## Công thức prompt nền

Một prompt tốt có thể được xây theo 8 lớp:

1. **Tên món**
2. **Trạng thái món ăn**
3. **Thành phần nhìn thấy**
4. **Cách trình bày**
5. **Góc máy**
6. **Ánh sáng**
7. **Bối cảnh**
8. **Chất lượng ảnh**

## Mẫu cấu trúc

```text
[food subject],
[texture + visible ingredients],
[plating],
[camera angle],
[lighting],
[background / environment],
[commercial food photography],
[realistic camera characteristics]
```

## Ví dụ

```text
Freshly shucked oysters on crushed ice,
natural wet oyster texture, lemon wedges and herbs,
served on a chilled metal tray,
45-degree close-up food photography,
soft directional daylight,
subtle restaurant table background,
high-end editorial food photography,
realistic reflections, natural imperfections, shallow depth of field
```

## Tại sao prompt này hiệu quả?

### “Freshly shucked”

Mô tả trạng thái món, giúp AI hiểu hàu vừa được mở.

### “Natural wet oyster texture”

Buộc model chú ý đến độ ẩm và bề mặt thật.

### “45-degree close-up”

Giảm cảm giác ảnh flat do góc top-down 90°.

### “Natural imperfections”

Rất hữu ích nếu muốn tránh hình quá hoàn hảo, bóng bẩy hoặc “AI”.

## Quy tắc

Không nên nhồi quá nhiều tính từ như:

```text
perfect, incredible, amazing, magical, stunning, cinematic, masterpiece
```

Thay vào đó, hãy dùng mô tả vật lý cụ thể:

```text
glossy sauce, crisp edge, uneven crumbs, melted chocolate, steam
```

## Bài tập

Tạo 3 biến thể prompt cho cùng một món:

- ảnh menu
- ảnh quảng cáo
- ảnh social
