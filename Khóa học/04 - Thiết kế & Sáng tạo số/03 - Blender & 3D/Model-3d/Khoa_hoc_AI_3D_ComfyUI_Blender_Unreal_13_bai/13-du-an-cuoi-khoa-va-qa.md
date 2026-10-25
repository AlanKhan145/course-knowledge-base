---
lesson: 13
title: "Đồ án cuối khóa: kiểm thử và sửa lỗi asset game-ready"
video_time: "Tổng hợp 00:00–36:09; phần đánh giá tự biên soạn"
---

# Bài 13 — Đồ án cuối khóa và kiểm thử chất lượng (QA)

> **Mục tiêu:** đánh giá toàn bộ pipeline, không dừng ở việc model trông đẹp trong viewport. Phần bài tập/tiêu chí dưới đây là **biên soạn bổ trợ**, không phải bộ tiêu chuẩn được tác giả video công bố.

## 1. Đề bài

Tạo một **khủng long cơ khí steampunk** từ concept AI, có các bộ phận được kiểm soát riêng, bản high-poly tham chiếu, low-poly UV, normal map, texture PBR, rig có thể cử động chân/đuôi/hàm, ba animation và nhập thử trong Unreal Engine.

## 2. Hồ sơ nộp

```text
submission/
├── concept/         # concept gốc + upscale + ảnh bộ phận
├── mesh/            # high-poly / low-poly FBX, OBJ trung gian nếu cần
├── textures/        # normal, base-color, roughness, metallic
├── rig/             # .blend đã rig + FBX rigged
├── animation/       # idle, walk, run FBX
├── unreal/          # ảnh preview asset, animation trong Unreal
└── QA_REPORT.md     # thông số + lỗi + hướng xử lý
```

## 3. Checklist cuối cùng

### Model và topology
- [ ] Toàn bộ bộ phận đều hiện diện; silhouette không thiếu phần.
- [ ] Không có chi trái/phải chồng hoặc cách nhau bất thường.
- [ ] Bản high-poly và low-poly được lưu riêng.
- [ ] Đã ghi thống kê polygon thực tế; biết nó có phù hợp ngân sách dự án.
- [ ] Không có vùng mesh lỏng hoặc mặt đảo gây sự cố shading rõ rệt.

### UV và material
- [ ] Low-poly có UV hợp lệ.
- [ ] Normal map là Non-Color và được gắn qua Normal Map node.
- [ ] Base color, roughness, metallic đúng nguồn và kênh.
- [ ] Đã kiểm tra các mối nối texture/UV seams.

### Rig và animation
- [ ] Chân trái, chân phải được điều khiển đúng xương.
- [ ] Đuôi và hàm chuyển động cơ bản mà không méo/rách mesh.
- [ ] Idle, Walk, Run xem trước ổn.
- [ ] Skeleton export/import tương thích trong Unreal.

### Engine
- [ ] Có Skeletal Mesh, Skeleton và Animation assets.
- [ ] Có ảnh chứng minh ít nhất hai clip trong Unreal.
- [ ] Có phần ghi chú về các hạng mục chưa thực hiện (ví dụ Animation Blueprint).

## 4. Rubric chấm điểm (100 điểm, do giáo trình xây dựng)

| Hạng mục | Điểm |
|---|---:|
| Concept rõ nét và đủ bộ phận | 10 |
| High-poly và lắp ráp hình khối | 15 |
| Low-poly, retopo và UV | 20 |
| Normal bake và PBR | 20 |
| Rig + skinning chân/đuôi/hàm | 20 |
| Import/animation trong Unreal | 15 |
| **Tổng** | **100** |

Gợi ý tự đánh giá: dưới 60 cần sửa pipeline; 60–79 chạy được ở mức bài tập; 80–89 tốt; 90–100 hoàn thiện cả chất lượng và hồ sơ. Đây là thang đánh giá học tập, **không phải** chuẩn ngành về asset performance.

## 5. Nhật ký lỗi mẫu

| Giai đoạn | Lỗi | Nguyên nhân nghi ngờ | Cách kiểm chứng | Kết quả |
|---|---|---|---|---|
| Bake | Normal map phẳng | Sai active image node | Kiểm tra node và UV | ... |
| Texture | Metallic không đúng | Map packed khác layout | Kiểm từng RGB channel | ... |
| Rig | Đuôi bị giật | Weight không đều | Pose từng bone | ... |
| Unreal | Animation không hoạt động | Sai skeleton | Mở animation asset | ... |

## 6. Câu hỏi kết thúc

1. Khác nhau giữa **sinh high-poly**, **decimate** và **retopology**?
2. Vì sao low-poly cần UV trước khi bake?
3. Khi nào cần giữ base color là sRGB nhưng normal là Non-Color?
4. Mirror geometry có tự động cho khả năng điều khiển từng chi độc lập không?
5. Vì sao import animation thành công vẫn chưa đồng nghĩa nhân vật đã điều khiển được trong game?

## 7. Hướng mở rộng

Sau khi hoàn thành, thực hành thêm một **Animation Blueprint** cho Idle/Walk/Run và thử nghiệm thông số game-ready thực tế: số triangle, số texture, số bone, hiệu năng trên phần cứng đích. Các thông số này không có ngưỡng chung trong video.
