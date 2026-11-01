---
title: "Bài 13 — Retopology high→low, quad topology và UV cho nhân vật"
course: "Từ model AI đến Game-Ready Asset"
module: "Nhân vật: low-poly và baking"
duration_minutes: 60
source: "Video B 11:14–15:24"
language: "vi"
format: "self-study"
---

# Bài 13 — Retopology high→low, quad topology và UV cho nhân vật

> **Thời lượng gợi ý:** 60 phút · **Nguồn:** Video B 11:14–15:24  
> **Hình thức:** Tự học có hướng dẫn, thực hành và tự kiểm tra.

## Mục tiêu
- Chuyển từng bộ phận high-poly sang mesh low-poly có topology phù hợp hơn.
- Chọn mức polygon cho **hero character** so với nhân vật nền.
- Tạo UV cho low-poly và giữ đúng vị trí để bake chi tiết.

## Quy trình nguồn
1. Xuất từng high mesh FBX (video có ví dụ `Hi_Dino_Head`).
2. Nạp từng phần vào dịch vụ retopology; nguồn nhắc một 3D Studio ở khoảng 11:14–12:45 nhưng tên công cụ trong lời chép không đủ tin cậy để xác nhận. Người học có thể dùng công cụ retopo sẵn có.
3. Chọn cấu hình low/medium/high tùy vai trò asset; **quad output** là mục tiêu nếu cần mô hình dễ chỉnh sửa/rig.
4. Đánh giá wireframe: video có ví dụ khoảng **13K faces, 6K vertices** sau retopo một phần; không áp dụng máy móc cho toàn bộ nhân vật.
5. Thực hiện **Smart UV Unwrap** cho low-poly hoặc tự unwrap trong Blender.
6. Xuất FBX, nhập trở lại Blender. **Giữ low-poly cùng vị trí và tỷ lệ với high-poly**.
7. Tổ chức cặp `Head_High/Head_Low`, `Arm_R_High/Arm_R_Low`... trong `HIGH` và `LOW`.

## Những điều retopology không bảo đảm
- “Quad” không đồng nghĩa edge loops đã phù hợp với miệng/gối/khuỷu.
- Không phải mọi công cụ tự động đều bảo toàn lỗ cơ khí, bề mặt cứng và đường ranh vật liệu.
- Mesh mới cần được kiểm tra **normals, UV, deformations** trước khi xuất bản.

## Tiêu chí đánh giá
| Loại phần | Ưu tiên |
|---|---|
| Giáp cứng, phụ kiện | Silhouette, bevel shading, phân chia vật liệu |
| Tay/chân biến dạng | Edge flow qua khớp, ít pole gây co dúm |
| Đầu có hàm cử động | Phân vùng hàm và mép mở miệng |
| Đuôi dài | Độ phân đoạn/loops đủ cho uốn cong |

## Thực hành
Retopo riêng đầu và chân phải, tạo UV, đưa về Blender. Bật `Wireframe` và ảnh so sánh high–low trước khi học bake.
