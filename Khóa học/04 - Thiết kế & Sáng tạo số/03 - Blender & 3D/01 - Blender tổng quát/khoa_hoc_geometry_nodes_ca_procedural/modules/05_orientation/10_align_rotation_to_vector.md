# Bài 10 — Căn rotation theo vector chuyển động

## 1. Mục tiêu học tập

Làm đầu cá hướng theo vector `D`.

## 2. Blender 3.0

Tutorial sử dụng `Align Euler to Vector`. Node này xoay Euler rotation để một local axis hướng về vector chỉ định.

Nguồn Blender 3.0: https://docs.blender.org/manual/en/3.0/modeling/geometry_nodes/utilities/align_euler_to_vector.html

## 3. Blender mới

Trong các bản mới, workflow tương đương dùng `Align Rotation to Vector`. `Align Euler to Vector` được đưa vào nhóm deprecated.

Nguồn mới: https://docs.blender.org/manual/en/5.2/modeling/geometry_nodes/utilities/rotation/align_rotation_to_vector.html

## 4. Chọn axis đúng

Nếu đầu cá trong local space hướng theo:

- +X → align X;
- +Y → align Y;
- +Z → align Z.

Sai axis là nguyên nhân phổ biến khiến cá đi ngang, dựng đứng hoặc quay ngược.

## 5. Checkpoint

Trước khi sửa node, làm cách nào xác định local forward axis của model?
