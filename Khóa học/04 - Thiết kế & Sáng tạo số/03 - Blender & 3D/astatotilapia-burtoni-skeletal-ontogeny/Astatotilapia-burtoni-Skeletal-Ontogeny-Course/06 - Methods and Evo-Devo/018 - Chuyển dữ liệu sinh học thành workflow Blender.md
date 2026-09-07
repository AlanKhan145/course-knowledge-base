# 18. Chuyển dữ liệu sinh học thành workflow Blender

## Quy trình đề xuất

1. **Thu thập:** dùng `FIGURES.md`, PDF gốc và source text; ghi PMCID/DOI cho mọi reference.
2. **Phân lớp:** tách cartilage, membrane bone, mineralized bone, fin ray, soft tissue và cấu trúc tạm thời.
3. **Định thời:** tạo collection theo `0–4 dpf`, `5–7 dpf`, `8–10 dpf`, `11–14 dpf`.
4. **Blockout:** dựng silhouette, cột sống, đai và các vây trước; chưa thêm vảy hay texture.
5. **Rig:** dùng spline/curve cho cột sống và chain riêng cho các fin rays; giữ urophore complex độc lập.
6. **Look-dev:** dùng màu vật liệu chỉ để chú giải nguồn dữ liệu; không coi màu Alizarin/Alcian là màu tự nhiên.
7. **Kiểm tra:** đối chiếu từng object với hình và đánh dấu `observed`, `inferred`, hoặc `artistic approximation`.

## Những lỗi nên tránh

- Gộp gai và tia mềm thành cùng một loại hình học.
- Dùng tuổi dpf để suy ra kích thước tuyệt đối.
- Dựng mỗi xương sọ đều có tiền thân sụn tương ứng.
- Rải vảy đều ngay từ ngày đầu thay vì mô phỏng pattern sau–trước.
- Trình bày giả thuyết dị thời đuôi như một sự kiện đã được chứng minh.

## Deliverable thực hành

Một scene có 4 camera: `adult_skeleton`, `pectoral_development`, `caudal_complex`, `scale_pattern`; một timeline có visibility theo dpf; và một file README ghi rõ điều gì đến từ bài báo, điều gì là suy luận dựng hình.

