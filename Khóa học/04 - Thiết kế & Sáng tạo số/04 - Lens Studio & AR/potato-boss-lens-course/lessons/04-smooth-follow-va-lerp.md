# Bài 04 — SmoothFollow và `lerp`

## Mục tiêu

Hiểu cơ chế tạo chuyển động trễ và thử nghiệm trước trên một Sphere.

## 1. Script SmoothFollow

File đã được đóng gói tại:

`../scripts/SmoothFollow.js`

Script có ba input chính:

- `target`: đối tượng cần theo dõi.
- `offset`: độ lệch vị trí.
- `smoothSpeed`: mức độ bám theo mục tiêu.

## 2. Ý nghĩa của `lerp`

`lerp` là linear interpolation — nội suy tuyến tính giữa hai vị trí.

Trong tutorial:

```text
vị trí mới = lerp(vị trí hiện tại, vị trí mục tiêu, smoothSpeed)
```

- `smoothSpeed = 0`: gần như không tiến về mục tiêu.
- `smoothSpeed = 1`: bám mục tiêu ngay lập tức.
- Giá trị ở giữa: tạo độ trễ.

Tutorial gợi ý khoảng **0.05–0.25** thường cho cảm giác phù hợp với kiểu hiệu ứng này.

## 3. Thử bằng Sphere

1. Tạo Script resource `SmoothFollow`.
2. Tạo một Sphere.
3. Đảm bảo Sphere **không** nằm dưới Head Binding.
4. Thêm Script Component cho Sphere.
5. Chọn `SmoothFollow.js`.
6. Gán `target = Head Binding`.
7. Di chuyển đầu trong Preview.
8. Thử `smoothSpeed = 0`, `1`, rồi các giá trị trung gian.

## 4. Điều cần quan sát

Giá trị nhỏ hơn tạo cảm giác theo sau chậm hơn. Giá trị lớn hơn khiến vật thể bám sát mục tiêu hơn.

Mục tiêu của bước này là hiểu chuyển động trước khi gắn script vào bone thật của model.
