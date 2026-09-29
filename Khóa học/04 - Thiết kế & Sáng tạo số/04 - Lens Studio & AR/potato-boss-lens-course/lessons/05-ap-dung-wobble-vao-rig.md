# Bài 05 — Áp dụng wobble vào rig

## Mục tiêu

Dùng SmoothFollow để phần thân dưới của model theo đầu với độ trễ.

## 1. Chọn bone cần wobble

Trong tutorial:

- `Bone` là root bone.
- `Bone.001` điều khiển phần dưới.
- `Bone.001_end` là bone kết thúc.

Gắn `SmoothFollow.js` vào **bone điều khiển phần dưới**, không gắn vào root bone.

## 2. Gán target

Trong Script Component:

- `target = Head Binding`
- `offset` có thể để mặc định lúc đầu.
- `smoothSpeed` thử từ khoảng `0.1` đến `0.2` rồi tinh chỉnh.

## 3. Lỗi quan trọng: script không có tác dụng

Nếu bone đang là con của Head Binding, nó đã bị Head Binding điều khiển trực tiếp. Kết quả là bạn có thể không thấy chuyển động trễ như mong muốn.

Cách sửa theo tutorial:

1. Chọn bone có SmoothFollow.
2. Kéo bone đó **ra ngoài Head Binding**.
3. Để nó trở thành sibling của Head Binding.
4. Kiểm tra lại Preview.

![Hierarchy sau khi tách bone](../images/005-bone-hierarchy.jpg)

## 4. Tinh chỉnh

Tăng/giảm `smoothSpeed` cho tới khi:

- Có độ trễ rõ nhưng không quá chậm.
- Phần dưới không giật mạnh.
- Chuyển động vẫn đọc được khi quay đầu nhanh.

## Bài tập

Thử ba mức:

- 0.05
- 0.10
- 0.20

Ghi lại mức nào cho cảm giác tự nhiên nhất với model của bạn.
