---
title: "Bài 03 — Giảm polygon bằng Decimate và bảo toàn chi tiết"
course: "Từ model AI đến Game-Ready Asset"
module: "Blender: chuẩn hóa"
duration_minutes: 35
source: "Video A 00:58–01:16; video B 09:33–10:48"
language: "vi"
format: "self-study"
---

# Bài 03 — Giảm polygon bằng Decimate và bảo toàn chi tiết

> **Thời lượng gợi ý:** 35 phút · **Nguồn:** Video A 00:58–01:16; video B 09:33–10:48  
> **Hình thức:** Tự học có hướng dẫn, thực hành và tự kiểm tra.

## Mục tiêu
- Hiểu khi nào Decimate có ích và khi nào cần retopology.
- Sử dụng `Decimate Modifier` và đo hiệu quả bằng Statistics.
- Giữ bản high-poly riêng làm nguồn texture/normal baking.

## Quy trình
1. Nhân bản model và giữ bản gốc trong `HIGH_SOURCE`.
2. Với bản làm việc, `Modifiers → Add Modifier → Decimate`.
3. Thử `Collapse` và thay đổi **Ratio** từ cao xuống thấp; xem **Triangles** trong viewport, không chỉ nhìn ratio.
4. Kiểm tra mặt nghiêng, viền, bộ phận nhỏ, hard edges và silhouette ở nhiều góc.
5. Chỉ `Apply` khi đã chắc về phương án UV/bake, đồng thời lưu checkpoint trước khi áp dụng.

Video A hướng tới **dưới 5.000 triangles** cho đạo cụ mẫu từ ~48.000 triangles. Video B dùng **Ratio ~0.1** để giảm tải một bộ phận high-poly trước khi đưa sang công cụ retopology. Hai con số thuộc hai ngữ cảnh khác nhau, **không nên dùng làm tiêu chuẩn cứng cho mọi model**.

## Decimate và Retopology khác nhau
| Decimate | Retopology |
|---|---|
| Cắt giảm mặt dựa trên mesh hiện có | Xây lại luồng cạnh có chủ đích |
| Nhanh cho prop tĩnh/phụ kiện | Hữu ích cho nhân vật cần biến dạng |
| Có thể tạo tam giác không đẹp | Có thể tối ưu quads quanh khớp |
| Không chữa tự động UV, shading hoặc skinning | Thường cần UV/bake lại |

## Chỉ số nghiệm thu
- Số triangles giảm có ý nghĩa so với ban đầu.
- Silhouette, các khớp nối, ngàm cơ khí vẫn nhận ra được.
- Không sinh lỗ hoặc mặt ngược; UV không phát sinh lỗi rõ ràng.

## Thực hành
So sánh 3 mức Ratio (ví dụ `0.5`, `0.2`, `0.1`) trên cùng model, chụp wireframe và ghi số triangles cùng lỗi. Chọn cấu hình cân bằng hình dáng–hiệu năng.

**Tự kiểm tra:** Vì sao không nên chỉ nhìn vào tỷ lệ Decimate? Vì mesh đầu vào và phân bố hình học khác nhau nên cùng ratio cho chất lượng khác nhau.
