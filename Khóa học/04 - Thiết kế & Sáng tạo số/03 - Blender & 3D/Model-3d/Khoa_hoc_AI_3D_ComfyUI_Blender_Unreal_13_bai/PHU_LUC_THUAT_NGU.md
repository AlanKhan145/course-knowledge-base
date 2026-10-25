---
title: "Phụ lục — Thuật ngữ, tên công cụ và ghi chú bản chép lời"
language: vi
---

# Phụ lục — Thuật ngữ và lưu ý nguồn

> **Nguồn chính:** bản phiên âm tiếng Việt do người học cung cấp, độ dài khoảng 36 phút. Một số cụm từ là lỗi dịch máy/nhận dạng tiếng nói; khi thiếu bằng chứng, tài liệu không tự suy đoán thành tên miền hoặc thiết lập chính xác.

## 1. Thuật ngữ thường gặp

| Thuật ngữ | Giải thích ngắn |
|---|---|
| Concept art | Ảnh định hướng hình dáng, màu, chất liệu nhân vật |
| High-poly mesh | Mesh nhiều polygon để giữ chi tiết hình học |
| Low-poly mesh | Mesh đã tối ưu để quản lý/hiển thị hiệu quả hơn |
| Triangle | Mặt tam giác |
| Quad | Mặt tứ giác; thường thuận lợi cho vòng cạnh |
| Retopology | Tạo lại cấu trúc mesh theo bố cục lưới mong muốn |
| Decimate | Giảm số mặt một cách tự động, không nhất thiết có topo tốt |
| UV unwrapping | Trải mặt 3D lên không gian 2D để gắn texture |
| Normal map | Texture mã hóa hướng pháp tuyến, giúp mô phỏng độ gồ ghề |
| PBR | Mô hình vật liệu phản ứng có cơ sở vật lý với ánh sáng |
| Base Color | Màu cơ sở của vật liệu |
| Roughness | Độ nhám, điều khiển độ rộng và nét phản chiếu |
| Metallic | Mức tính chất kim loại của vật liệu |
| Shader Editor | Không gian biên tập node vật liệu Blender |
| Mirror Modifier | Modifier nhân bản đối xứng qua trục |
| Rigging | Tạo hệ xương và điều khiển nhân vật |
| Skinning / Weight | Liên kết mesh với hệ xương, phân bố ảnh hưởng của xương |
| Skeletal Mesh | Mesh có skeleton, dùng cho nhân vật hoạt hình trong Unreal |
| Retargeting | Chuyển animation giữa các hệ xương tương thích |
| In-place | Clip đi/chạy nhưng root không dịch chuyển xa trong không gian |
| Animation Blueprint | Hệ cấu hình và điều khiển animation trong Unreal |

## 2. Chuẩn hóa phiên âm tên công cụ

| Bản chép lời có thể ghi | Cách đọc/nghi vấn hợp lý | Mức độ xác nhận từ ngữ cảnh |
|---|---|---|
| Confui / Confi / Thoải mái | **ComfyUI** | Cao — mô tả workflow node và cloud/local |
| Quen Image 2512 | **Qwen Image 2512** | Khá cao — tên model được đọc trực tiếp, phiên bản nên đối chiếu trên UI |
| nano banana pro | **Nano Banana Pro** | Cao |
| Hanuan 3D / Hanu 3D | **Hunyuan3D** (một khả năng) | Chưa đủ xác nhận chính xác dịch vụ retopology được trình bày |
| Giàn leo 2 / Trellis | **Trellis 2** | Cao theo ngữ cảnh AI 3D/texture |
| Maxamo / Maximo / Samo | **Mixamo** | Cao — thư viện animation idle/walk/run |
| Auto rig pro | **Auto-Rig Pro** | Cao |
| rettopology | **Retopology** | Cao |
| nướng bánh / bản đồ chuẩn | **Bake / normal map** | Cao |
| quads/bài squat | **Quads** | Cao |
| chế độ đầu gối / limps | **Limb** (trong trình rigging) | Chưa chắc tên menu cụ thể |
| "3d.com" tại khoảng 11:14 | Công cụ **3D Studio/retopo có tab UV** | Không đủ cơ sở để gán tên miền |

## 3. Những điều video không khẳng định

- Không có **đường dẫn tải cụ thể** của workflow ComfyUI/retopo trong bản chép lời; tác giả chỉ nói link nằm dưới video.
- Không có số đa giác/texture budget chuẩn cho mọi game hoặc nền tảng.
- Không có hướng dẫn đầy đủ cho Animation Blueprint, hệ thống chuyển trạng thái Idle ↔ Walk ↔ Run hay controller gameplay.
- Không cung cấp file nguồn thật, ảnh từ video, nội dung prompt gốc, bản FBX/OBJ, UV/normal hoặc video xuất.
- Không chứng minh một pipeline tự động đảm bảo topology, skinning, normal bake luôn đúng trong mọi trường hợp.

## 4. Phân biệt nội dung gốc với phần bổ sung

- **Từ video:** thứ tự công cụ và thao tác chính, ví dụ chọn Ultra/Triangles, 2K/4K, G/R/S, Ctrl+A, Decimate, Smart UV, normal bake, Trellis texturing, Mirror, Auto-Rig Pro, Mixamo 30 FPS, Unreal Third Person.
- **Do giáo trình bổ sung:** prompt minh họa, cấu trúc thư mục, bảng tiêu chí QA, mô tả vấn đề transform/origin, phân biệt packed texture, cảnh báo hạn chế retarget và rubric chấm điểm.

**Cách dùng:** đối chiếu tên menu ngay trong bản Blender/ComfyUI/Mixamo/Unreal bạn đang dùng; phần phiên âm chỉ nên là bản đồ để tìm thao tác, không thay thế tài liệu chính thức của phiên bản phần mềm đó.
