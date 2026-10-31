---
title: "Bài 18 — Capstone: nhân vật AI hoàn chỉnh trong Unreal"
course: "Từ model AI đến Game-Ready Asset"
module: "Dự án cuối khóa"
duration_minutes: 120
source: "Tổng hợp video B 00:00–36:09"
language: "vi"
format: "self-study"
---

# Bài 18 — Capstone: nhân vật AI hoàn chỉnh trong Unreal

> **Thời lượng gợi ý:** 120 phút · **Nguồn:** Tổng hợp video B 00:00–36:09  
> **Hình thức:** Tự học có hướng dẫn, thực hành và tự kiểm tra.

## Nhiệm vụ cuối khóa
Tạo một nhân vật cơ khí hoặc sinh vật lai dựa trên concept 2D, có nhiều bộ phận, topology tiết kiệm, PBR, rig, chuyển động và bản demo Unreal.

## Checklist theo giai đoạn
- [ ] Concept tổng thể được lưu, đủ góc quan sát, tỷ lệ rõ ràng.
- [ ] Ảnh bộ phận nhất quán với concept; không có chi thừa.
- [ ] High-poly lắp ráp khớp nhau, giữ nguyên bản nguồn.
- [ ] Low-poly từng phần có wireframe rõ, UV sạch, không chồng lấn ngoài ý muốn.
- [ ] Normal map bake từ high-poly lên low-poly được kiểm dưới nhiều hướng sáng.
- [ ] Base Color/Metallic/Roughness được gán đúng kênh và color space.
- [ ] Các phần đối xứng mirror chuẩn, đuôi và hàm có khả năng chuyển động.
- [ ] Skin weights không tạo vết rách rõ ở khớp chính.
- [ ] FBX rig import đúng vào Unreal, xem được Idle/Walk/Run.
- [ ] Có ảnh before/after, ngân sách triangles và file cấu trúc sạch.

## Cấu trúc nộp gợi ý
```text
AI_Character_GameReady/
├── 01_concept/               # concept và refs từng bộ phận
├── 02_highpoly/              # nguồn high-poly không xóa
├── 03_lowpoly/               # low-poly + UV
├── 04_textures/              # basecolor, normal, metallic, roughness
├── 05_rig/                   # Blender file rig, FBX
├── 06_animations/            # idle/walk/run
├── 07_unreal/                # project hoặc uasset export
├── 08_evidence/              # ảnh/clip kiểm thử
└── README.md                 # thông số và những gì chưa hoàn tất
```

## Thang điểm (100)
| Hạng mục | Điểm |
|---|---:|
| Concept + bộ phận nhất quán | 15 |
| Retopology + UV hợp lý | 20 |
| Normal/PBR và tính nhất quán vật liệu | 20 |
| Rig + skinning + jaw/tail | 20 |
| Idle/Walk/Run trong Unreal | 15 |
| Tổ chức project + tự đánh giá | 10 |

## Câu hỏi bảo vệ sản phẩm
1. Vì sao chọn ngân sách poly hiện tại? Mô tả platform mục tiêu và vai trò asset.
2. UV phần nào khó nhất và đã khắc phục ra sao?
3. Normal bake khác normal từ Base Color ở điểm nào?
4. Những chuyển động nào có lỗi deform? Có bằng chứng trước/sau sửa không?
5. Unreal đã ở mức **animation preview** hay đã có **gameplay controller**? Trình bày đúng mức độ hoàn tất.
