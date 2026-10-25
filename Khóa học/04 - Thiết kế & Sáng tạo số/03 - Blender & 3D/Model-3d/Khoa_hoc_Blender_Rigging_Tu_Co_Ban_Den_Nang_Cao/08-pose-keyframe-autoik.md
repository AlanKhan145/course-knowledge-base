---
title: "Bài 08 — Pose Mode, Keyframe, Mirror Pose và Auto IK"
lesson: 8
source_timestamp: "07:30–08:03"
---

# Bài 08 — Cho nhân vật chuyển động

**Thời lượng gợi ý:** 30–40 phút

## Mục tiêu

Tạo pose, tạo keyframe, sao chép tư thế đối xứng và phân biệt Auto IK với hệ IK ràng buộc cố định.

## 1. Pose Mode là nơi thử rig

1. Chọn Armature → **Pose Mode**.
2. Chọn xương và dùng `R` để xoay, `G` để di chuyển khi phù hợp loại bone/control.
3. Quan sát mesh trong lúc chuyển động; không chỉ nhìn vị trí xương.
4. `Alt + R` / `Alt + G` xóa rotation/location của xương được chọn khi muốn về trạng thái pose mặc định tương ứng.

## 2. Tạo keyframe

- Đặt playhead ở frame **1**, tạo pose khởi đầu rồi chèn keyframe (`I` hoặc menu **Pose → Animation → Insert Keyframe**, tùy keying set/Blender phiên bản).
- Sang frame **20**, thay đổi pose và chèn keyframe lần nữa.
- Sang frame **40**, tạo pose thứ ba. Play Animation để kiểm tra chuyển tiếp.

**Lưu ý phiên bản:** Blender các phiên bản có cách hiển thị menu và keying set khác nhau; bảo đảm các kênh cần thiết (location, rotation, scale hoặc available keying set) thực sự đã có dấu keyframe trong Dope Sheet.

## 3. Sao chép pose và phản chiếu

Tên bone có `.L`/`.R` cho phép Blender khớp phía bên trái và phải.

- Trong Pose Mode, chọn xương → `Ctrl + C` sao chép pose.
- `Ctrl + Shift + V` thường dùng **Paste Flipped** (dán tư thế đối xứng).
- Kiểm thử đặc biệt với bone control hoặc bone có orientation không đồng nhất.

## 4. Auto IK

**Auto IK** là hỗ trợ tạo pose nhanh bằng cách kéo vùng đầu cuối chuỗi xương trong Pose Mode mà Blender tạm xử lý hành vi giống inverse kinematics. Có thể bật trong tùy chọn Pose/Tool Settings; phụ đề mô tả dùng bánh xe chuột để điều chỉnh độ dài chuỗi trong lúc thao tác.

Auto IK **không phải** hệ IK controller hoàn chỉnh để làm animation pipeline phức tạp. Muốn kiểm soát mục tiêu bàn chân ổn định, hãy sang Bài 09 để tạo **IK Constraint**.

## 5. Bài tập

Làm một chuỗi chuyển động 40 frame: `idle → giơ tay → hạ tay`. Tạo thêm phiên bản đổi bên bằng mirror pose. Thử Auto IK kéo tay hoặc chân và quan sát hiệu ứng.

**Hoàn thành khi:** playback ra đúng 3 pose, mesh không kéo giãn bất thường, mirroring tương ứng.
