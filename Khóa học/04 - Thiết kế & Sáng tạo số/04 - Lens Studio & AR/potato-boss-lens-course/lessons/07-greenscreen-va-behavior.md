# Bài 07 — Greenscreen và Behavior Script

## Mục tiêu

Tạo chế độ đổi qua lại giữa background thường và nền xanh bằng thao tác chạm.

## 1. Tạo material xanh

1. Tạo **Unlit Material**.
2. Đặt Base Color thành xanh lá.
3. Duplicate Screen Image background.
4. Gán Unlit Material cho bản duplicate.

## 2. Chuẩn bị hai trạng thái

- Background thường: enabled.
- Greenscreen: disabled.

## 3. Thêm Behavior

1. Thêm **Behavior** từ Helper Scripts.
2. Trigger: `Touch Event`.
3. Event Type: `Tap`.
4. Response Type: `Set Enabled`.
5. Target đầu tiên: background thường, Action = `Toggle`.
6. Tạo Behavior thứ hai tương tự cho greenscreen, Action = `Toggle`.

![Behavior toggle background](../images/007-background-toggle.jpg)

Khi người dùng chạm, trạng thái hai background được đảo qua lại.

## 4. Mục đích

Greenscreen hữu ích nếu lens được dùng trong phần mềm họp/video có chức năng thay nền.
