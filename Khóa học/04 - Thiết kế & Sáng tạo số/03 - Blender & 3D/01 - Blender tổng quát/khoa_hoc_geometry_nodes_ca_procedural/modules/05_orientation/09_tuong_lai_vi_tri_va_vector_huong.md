# Bài 09 — Future position và vector hướng bơi

## 1. Mục tiêu học tập

Suy ra hướng bơi từ quỹ đạo procedural.

## 2. Ý tưởng đạo hàm số

Nếu biết vị trí hiện tại và vị trí tương lai rất gần:

```text
P0 = P(t)
P1 = P(t + Δt)
D = P1 - P0
```

`D` là xấp xỉ vector vận tốc.

## 3. Look Ahead

`Δt` nhỏ:

- hướng phản ứng nhanh;
- dễ rung nếu noise thay đổi mạnh.

`Δt` lớn:

- hướng mượt hơn;
- có thể “cắt góc” và phản ứng chậm.

Tutorial sử dụng một offset nhỏ; cách tốt hơn là expose `Look Ahead`.

## 4. Bài tập

Thử ba giá trị `Look Ahead` và ghi nhận độ mượt của rotation.
