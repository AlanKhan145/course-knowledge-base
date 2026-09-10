# Bài 11 — Tránh flip, twist và lỗi thứ tự transform

## 1. Mục tiêu học tập

Chẩn đoán các lỗi rotation thường gặp.

## 2. Hai lớp rotation

Một con cá 3D thường cần:

1. **Heading rotation:** hướng toàn thân theo quỹ đạo.
2. **Local body rotation:** dao động thân quanh trục cục bộ.

Nếu trộn hai loại trong world space, cá dễ lật.

## 3. Trục phụ

Tutorial xử lý thêm một bước align trên trục thứ hai để giữ orientation ổn định. Trong workflow mới, tư duy tương đương là xây rotation từ forward vector cùng một up reference ổn định, hoặc dùng các rotation utilities phù hợp.

## 4. Position và Offset

`Set Position` tính `Position` và `Offset` trong cùng node theo quy tắc field của Blender; cần hiểu rõ đâu là vị trí mục tiêu và đâu là dịch chuyển bổ sung. Nguồn: https://docs.blender.org/manual/en/3.0/modeling/geometry_nodes/geometry/set_position.html

## 5. Debug checklist

- Apply Rotation/Scale nếu cần.
- Kiểm tra local axes.
- Visualize direction vector.
- Giảm look-ahead.
- Giảm body rotation strength.
- Kiểm tra dấu `P1 - P0` chứ không phải `P0 - P1`.

## 6. Bài tập

Tạo một Empty hoặc vector debug để hiển thị forward direction.
