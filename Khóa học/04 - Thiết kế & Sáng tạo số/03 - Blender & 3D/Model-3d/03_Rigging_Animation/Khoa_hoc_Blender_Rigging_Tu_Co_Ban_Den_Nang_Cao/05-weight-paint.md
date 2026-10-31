---
title: "Bài 05 — Weight Paint và hiệu chỉnh biến dạng"
lesson: 5
source_timestamp: "03:15–05:32"
---

# Bài 05 — Sửa rig bằng Weight Paint

**Thời lượng gợi ý:** 45–60 phút

## Mục tiêu

Chỉnh ảnh hưởng theo bone, hiểu màu weight, brush, Auto Normalize, symmetry, smoothing và thao tác đánh giá trên mesh gốc.

## 1. Vào Weight Paint

1. Chọn Armature, vào **Pose Mode** và chọn bone cần chỉnh.
2. Chọn mesh, chuyển **Weight Paint** (đảm bảo có Armature Modifier và vertex groups).
3. Trong các phiên bản Blender, quy trình chọn bone khi đang paint phụ thuộc trạng thái chọn nhiều object/mode và keymap; thường có thể dùng `Ctrl + Click` lên bone khi Armature đang Pose Mode và mesh đang Weight Paint.
4. Chọn đúng Vertex Group theo tên bone nếu cách chọn trực tiếp không hoạt động.

## 2. Bảng đọc màu

| Màu minh họa trên heatmap | Weight | Ý nghĩa |
|---|---:|---|
| Xanh dương | 0.0 | Bone gần như không ảnh hưởng |
| Xanh lục/vàng | trung gian | Ảnh hưởng chia sẻ |
| Đỏ | 1.0 | Bone ảnh hưởng tối đa |

> Màu là công cụ trực quan hóa weight, không phản ánh màu vật liệu của mesh.

## 3. Thiết lập quan trọng

- Bật **Wireframe overlay** để nhìn mật độ cạnh/đỉnh gốc, nhất là với Subdivision modifier.
- **Auto Normalize:** khi tăng weight của nhóm đang chỉnh, hệ thống cố duy trì tổng ảnh hưởng phù hợp trên đỉnh và điều chỉnh các nhóm deform khác.
- **Symmetry/Mirror:** hữu ích với model đối xứng và tên xương `.L`/`.R` hợp lệ; kiểm tra axis, đối xứng vertex group trước khi áp dụng hàng loạt.
- Các lựa chọn **front faces / falloff / paint through** khác nhau theo phiên bản Blender; nếu muốn tô xuyên cả mặt sau, xem kỹ tùy chọn front faces và occlusion, rồi tắt lại khi không còn cần.
- Dùng `F` để chỉnh **bán kính brush**, **Strength** thấp để sửa dần và tránh tạo chuyển tiếp gắt.

## 4. Kỹ thuật tô một khớp

Ví dụ khuỷu tay: `UpperArm.L` có ảnh hưởng cao phía cánh tay trên và giảm dần gần khuỷu; `Forearm.L` tăng ảnh hưởng xuống phía cẳng tay.

```mermaid
flowchart LR
  A[Chọn bone / group] --> B[Tô Weight với Strength nhỏ]
  B --> C[Smooth vùng chuyển tiếp]
  C --> D[Pose thử ở nhiều góc]
  D --> E{Biến dạng tốt?}
  E -- Chưa --> B
  E -- Tốt --> F[Tiếp tục bone kế]
```

## 5. Làm mượt và gán lại có chọn lọc

- Sử dụng các công cụ **Weights → Smooth** để giảm biến đổi weight đột ngột; chú ý phạm vi tác động.
- Nếu automatic weights sai mạnh, đôi khi dịch chỉnh vị trí bone ở **Edit Mode** (rest pose) và gán lại hợp lý hơn, nhưng phải cân nhắc animation đã có.
- Nguồn đề cập khả năng *tính lại weight từ xương được chọn*; tên lệnh chính xác có thể thay theo phiên bản, hãy tìm công cụ tương đương trong menu Weights / Weight Paint và **sao lưu** nhóm cũ trước khi chạy.

## 6. Thực hành

Xoay khuỷu ~60–90 độ, quan sát méo. Sửa 2 nhóm `UpperArm.L` và `Forearm.L` bằng brush Strength thấp, Smooth, test lại ở 0°, 45°, 90°.

**Checklist:** [ ] Chọn đúng group [ ] Bật Auto Normalize khi cần [ ] Không paint nhầm mặt sau [ ] Kiểm tra pose [ ] Lưu bản mới.

**Câu hỏi:** Tại sao một màu đỏ hoàn toàn chạy qua khớp thường khiến nếp gập cứng? Vì sao nên xem wireframe ở base mesh?
