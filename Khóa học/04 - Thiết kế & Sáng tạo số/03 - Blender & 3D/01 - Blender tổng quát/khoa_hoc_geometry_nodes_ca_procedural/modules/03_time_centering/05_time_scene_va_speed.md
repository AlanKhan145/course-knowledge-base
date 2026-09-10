# Bài 05 — Time, frame và speed

## 1. Mục tiêu học tập

Tách “thời gian scene” khỏi “tốc độ chuyển động”.

## 2. Workflow Blender 3.0 trong tutorial

Tutorial dùng một Value node có driver:

```text
#frame
```

rồi chia cho 24, 50 hoặc giá trị khác để làm chậm chuyển động.

## 3. Workflow Blender mới

`Scene Time` cung cấp trực tiếp:

- `Seconds`;
- `Frames`.

Do đó có thể dùng:

```text
Scene Time: Seconds
→ Multiply Speed
→ Noise W
```

hoặc:

```text
Scene Time: Frames
→ Divide FrameScale
→ Noise W
```

Nguồn: https://docs.blender.org/manual/en/3.5/modeling/geometry_nodes/input/scene/scene_time.html

## 4. Công thức

```text
t_effective = time × speed
```

hoặc tương đương:

```text
t_effective = frame / divisor
```

Divisor càng lớn thì chuyển động càng chậm.

## 5. Bài tập

Tạo Group Input `Speed` sao cho `1.0` là tốc độ cơ sở, `0.5` chậm một nửa, `2.0` nhanh gấp đôi.
