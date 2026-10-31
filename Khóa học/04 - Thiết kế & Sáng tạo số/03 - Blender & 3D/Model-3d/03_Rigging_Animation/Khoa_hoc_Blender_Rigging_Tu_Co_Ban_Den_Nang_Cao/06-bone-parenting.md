---
title: "Bài 06 — Rigid Rig bằng Bone Parenting"
lesson: 6
source_timestamp: "05:34–06:04"
---

# Bài 06 — Gắn các bộ phận cứng trực tiếp vào xương

**Thời lượng gợi ý:** 25–35 phút

## Mục tiêu

Giữ từng bộ phận kim loại nguyên hình khi xoay bone mà không cần weight paint mềm.

## 1. Khi nào dùng?

Phù hợp với robot, cơ cấu khớp, mảng giáp, phụ kiện khi mỗi bộ phận đã là một **Mesh Object riêng**. Khi gắn trực tiếp, object đi theo biến đổi của một bone; các đỉnh của nó không bị uốn bởi hai bone cùng lúc.

## 2. Các bước

1. Trong **Object Mode**, chọn bộ phận cần gắn, ví dụ `Forearm_Armor.L`.
2. `Shift` chọn Armature để Armature là active object.
3. Chuyển Armature sang **Pose Mode**, chọn bone đích, ví dụ `Forearm.L`.
4. Nhấn `Ctrl + P` → **Bone** (không chọn *Bone Relative* nếu chưa biết khác biệt).
5. Xoay `Forearm.L`; bộ giáp cần di chuyển cùng bone, giữ hình dạng ban đầu.
6. Lặp lại với từng bộ phận.

> Nếu object đang parent/biến dạng bởi Armature Modifier cũ, kiểm tra quan hệ trước để không tạo ảnh hưởng chồng đôi.

## 3. Ví dụ bảng gán robot

| Mesh Object | Bone cha | Kiểm thử |
|---|---|---|
| `upper_arm_plate.L` | `UpperArm.L` | quay vai |
| `forearm_casing.L` | `Forearm.L` | gập khuỷu |
| `hand_shell.L` | `Hand.L` | xoay cổ tay |
| `shin_armor.L` | `Shin.L` | gập đầu gối |

## 4. Bẫy thường gặp

- Object origin sai khiến khi biến đổi/điều khiển không như mong muốn; cần kiểm tra vị trí object và xương.
- Chọn mesh sau cùng thay vì Armature sẽ khiến thao tác Parent không đúng ngữ cảnh.
- Giáp cứng nối giữa hai khớp phải được chia hình học hợp lý; không thể vừa đi theo hai bone khác nhau mà vẫn cứng như một vật thể đơn nhất.
- Bone Parenting khác với Vertex Group/Automatic Weights; tránh dùng cả hai trên một mảnh mà không chủ ý.

## 5. Bài tập

Lắp một cánh tay robot bằng 3 Mesh Objects (bắp tay, cẳng tay, bàn tay). Parent từng object vào bone tương ứng; test 3 pose. Không có tấm giáp nào bị kéo giãn.

**Hoàn thành khi:** 3 mảnh kim loại quay đúng khớp, không biến dạng.
