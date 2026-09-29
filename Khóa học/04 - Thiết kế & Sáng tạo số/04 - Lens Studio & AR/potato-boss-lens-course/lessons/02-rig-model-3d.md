# Bài 02 — Chuẩn bị rig cho model 3D

## Mục tiêu

Tạo cấu trúc rig tối giản đủ để phần trên bám theo đầu trong khi phần dưới có thể chuyển động trễ.

## 1. Rig tối thiểu

Tutorial sử dụng rig rất đơn giản với hai bone chính:

- **Root bone** ở phần trên của model, gần vùng sẽ đặt khuôn mặt.
- **Bone thứ hai** ở phần dưới, là phần sẽ được điều khiển bởi SmoothFollow.

![Ví dụ rig](../images/002-rig.jpg)

Không cần rig phức tạp. Điều quan trọng là bone dưới phải có ảnh hưởng lên phần mesh bạn muốn lắc/trễ.

## 2. Tư duy phân vùng chuyển động

Có thể hình dung:

```text
Root bone
└── Bone dưới
    └── End bone
```

- Root bone: giữ model bám theo đầu.
- Bone dưới: chịu wobble.
- End bone: chỉ là điểm kết thúc xương nếu phần mềm 3D tạo ra.

## 3. Xuất model

Sau khi rig:

1. Kiểm tra skin weight.
2. Đảm bảo bone dưới thực sự kéo phần thân dưới.
3. Xuất model kèm armature/rig.
4. Import vào Lens Studio.

## Lỗi thường gặp

### Model di chuyển nguyên khối
Bone dưới không có vùng ảnh hưởng riêng hoặc weight bị phân bố sai.

### Model bị méo mạnh
Weight quá gắt hoặc bone đặt sai vị trí.

### Không thấy bone trong Lens Studio
Kiểm tra tùy chọn export rig/armature trong phần mềm 3D.

## Bài tập

Tạo một model đơn giản khác hạt đậu phộng, ví dụ quả lê, viên kẹo hoặc chai nước, với 2 bone theo cấu trúc trên.
