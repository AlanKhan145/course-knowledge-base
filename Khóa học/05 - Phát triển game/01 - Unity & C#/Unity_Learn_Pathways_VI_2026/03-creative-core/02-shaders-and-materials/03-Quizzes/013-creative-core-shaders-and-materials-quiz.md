---
title: "Bài 13 — Ôn tập và tự đánh giá Shader & Material"
source_title: "Creative Core: Shaders and materials quiz"
course: "Unity Creative Core — Shaders and Materials"
unity_version: "6.3 (hướng dẫn ưu tiên URP)"
lesson_number: 13
lesson_type: "quiz"
status: "Tài liệu tự biên soạn, mở rộng và đối chiếu tài liệu công khai"
updated_at: "2026-10-29"
---

# Bài 13 — Ôn tập và tự đánh giá Shader & Material

> **Phần học:** Creative Core / Shaders and Materials  
> **Tên bài gốc:** Creative Core: Shaders and materials quiz  
> **Môi trường thực hành:** Unity 6.3, khuyến nghị project Universal Render Pipeline (URP)  
> **Nguồn gốc nội dung:** Dựa trên tệp đề cương do người học cung cấp; phần giải thích, ví dụ, bài tập, sơ đồ là nội dung bổ sung do biên soạn, không phải transcript hoặc bản dịch chính thức của Unity Learn.

## Mục tiêu học tập
- Tự kiểm tra mối liên hệ giữa mesh, material, shader, texture và rendering.
- Phân tích lỗi phổ biến dựa trên bằng chứng thực nghiệm.
- Hoàn thành bài kiểm tra lý thuyết và một bài thực hành nhỏ.

## 1. Phạm vi và phương pháp tự đánh giá
Bộ câu hỏi sau **do tài liệu này tự biên soạn**, không phải đề thi/đáp án chính thức của Unity Learn. Câu hỏi bao phủ toàn bộ 12 bài trước, trọng tâm là tư duy lựa chọn material, kiểm tra giả thuyết và giải thích kết quả quan sát.

### Phần A — Trắc nghiệm (mỗi câu 1 điểm)
**Câu 1.** Trong Unity, thành phần nào chứa tham chiếu tới shader cùng các giá trị cụ thể?  
A. Mesh Filter · B. Material · C. Transform · D. Camera

**Câu 2.** Với một Mesh Filter + Mesh Renderer thông thường, dữ liệu nào mô tả hình dạng tam giác?  
A. Mesh · B. Texture · C. Light · D. Post-processing

**Câu 3.** Ở URP/Lit, khi tăng Smoothness, hiệu ứng phổ biến là:  
A. Mesh thêm polygon · B. Vệt phản xạ hẹp/sắc hơn · C. Alpha luôn giảm · D. UV tự sửa

**Câu 4.** Khi muốn một chiếc lá cắt biên sắc từ ảnh alpha, chọn:  
A. Alpha Clipping · B. Metallic 1 · C. Unlit + Metallic · D. Tắt mesh

**Câu 5.** Một normal map *thông thường*:  
A. Làm đổi silhouette · B. Thay hướng pháp tuyến dùng cho shading · C. Tạo mesh mới · D. Thay Camera

**Câu 6.** Dấu hiệu trực tiếp của UV bị kéo giãn là:  
A. Texture trên bề mặt méo không đều · B. FPS luôn bằng 0 · C. Scene không có Light · D. Camera đổi FOV

**Câu 7.** Texture nào thường cung cấp dữ liệu về vùng thiếu ánh sáng môi trường trong khe?  
A. Albedo · B. Occlusion/AO · C. Base Color · D. Emission

**Câu 8.** Trong Shader Graph, exposed property giúp:  
A. Material chỉnh giá trị từ Inspector · B. Sinh polygon tự động · C. Làm vật thể luôn nhận bóng · D. Thay Pipeline

**Câu 9.** Một vật thể URP chuyển màu hồng, thao tác hợp lý đầu tiên là:  
A. Tăng Metallic · B. Xem Console và shader/pipeline · C. Tăng độ phân giải texture · D. Đổi sang Orthographic Camera

**Câu 10.** Dùng nhiều GameObject tham chiếu một material asset có nghĩa:  
A. Chỉnh asset có thể đổi đồng thời các object · B. Object có UV giống nhau · C. Mọi object có cùng Mesh · D. Không được dùng shader khác

**Câu 11.** Metallic 1 nhưng bề mặt rất tối có thể do:  
A. Thiếu nguồn phản xạ môi trường · B. Mesh tự xóa · C. UV luôn sai · D. Alpha bằng 1

**Câu 12.** Phát biểu nào đúng về emission?  
A. Mọi emission đều chiếu sáng vật khác theo vật lý · B. Emission có thể làm bề mặt trông phát sáng nhưng GI phụ thuộc thiết lập · C. Emission thay tất cả normals · D. Emission luôn làm transparent

### Phần B — Giải thích tình huống (2 điểm/câu)
**Câu 13.** Hai tấm kính transparent giao nhau, xuất hiện lớp chồng sai. Hãy nêu ít nhất hai yếu tố rendering cần kiểm tra.  
**Câu 14.** Một normal map màu tím đã gán nhưng rãnh vẫn không thấy rõ. Lập quy trình debug gồm bốn bước.  
**Câu 15.** Trong một scene có 50 vật thể gỗ dùng chung material, bạn cần một vật thể màu đỏ mà không đổi 49 vật thể còn lại. Đề xuất hai giải pháp và ưu/nhược điểm.  
**Câu 16.** Khi nhập texture roughness từ phần mềm khác, vì sao không nên gán mù vào Smoothness Map trong URP?

### Phần C — Bài thực hành tổng hợp (12 điểm)
Tạo một scene 3D với 4 Sphere/Cube, mỗi object thể hiện một kỹ thuật: `Lit PBR`, `Base Map UV`, `Alpha Clipping/Transparent`, `Normal Map hoặc Shader Graph`. Lưu ảnh tổng thể, 2 ảnh đối chứng và bảng thông số.

| Tiêu chí | Điểm |
|---|---:|
| Chọn đúng Shader/Material, có lý do | 3 |
| Texture/UV và normal hoặc Shader Graph chạy đúng | 3 |
| Phân biệt chế độ alpha, phản xạ và giới hạn | 2 |
| Ghi kết quả và sửa ít nhất một lỗi | 2 |
| Tổ chức file và trình bày chứng cứ | 2 |

## 2. Đáp án tự kiểm tra
**Phần A:** 1B · 2A · 3B · 4A · 5B · 6A · 7B · 8A · 9B · 10A · 11A · 12B.

**Phần B — ý chính:**
- **13:** thứ tự transparent queue/sorting, depth writing/testing, render face và geometry giao nhau; kiểm tra bằng Frame Debugger.
- **14:** kiểm tra Texture Type Normal Map → slot Normal Map và intensity → nguồn/độ xiên ánh sáng → UV, normals, tangents và chiều kênh xanh.
- **15:** duplicate material độc lập (dễ hiểu, nhiều asset) hoặc material variant (kế thừa có quản trị); nếu đổi khi chạy, có thể dùng material instance nhưng phải kiểm soát số lượng và vòng đời.
- **16:** Roughness và smoothness là thông số đối nghịch về ý nghĩa nhưng quy ước số học, packed channels và color space tùy phần mềm/shader. Cần xác định nguồn/kênh và quy tắc chuyển đổi trước.

## 3. Đánh giá năng lực
- **Bắt đầu:** chọn được shader và gán material đúng.
- **Cơ bản:** giải thích được UV, normal, metallic, smoothness, alpha và làm được phép thử đối chứng.
- **Khá:** tự sửa lỗi shader/texture, đưa ra quyết định chất liệu hợp lý cho một scene.
- **Vững:** có hệ thống material nhất quán, tối ưu có số liệu, biết giới hạn và báo cáo rõ các lựa chọn kỹ thuật.

## 4. Câu hỏi mở rộng
- Trong hoàn cảnh nào một shader stylized không phản ứng ánh sáng lại là lựa chọn tốt hơn PBR?
- Nếu bản build trên mobile nhìn khác Editor, cần thu thập những bằng chứng nào trước khi chỉnh texture?
- Vì sao không thể suy ra độ trung thực vật lý của bề mặt chỉ từ một ảnh chụp tĩnh?

## Tự kiểm chứng khi hoàn thành
- [ ] Nêu được khái niệm chính của bài bằng ví dụ trong Unity.
- [ ] Thực hiện được phép thử trước–sau và lưu scene/bằng chứng.
- [ ] Phân biệt kết quả quan sát thực tế với kết luận suy đoán.
- [ ] Kiểm tra phiên bản Render Pipeline/Shader khi áp dụng trên dự án khác.

## Tài liệu tham khảo và đối chiếu
- **1.** [Unity Learn — Creative Core Shaders and Materials](https://learn.unity.com/project/creative-core-shaders-and-materials)
- **2.** [Unity Manual 6.3 — URP/Lit reference](https://docs.unity.com/en-us/engine/6000.3/manual/materials-and-shaders/built-in/shaders-in-universalrp/reference/lit-shader)
- **3.** [Unity Manual 6.3 — Shader Graph](https://docs.unity.com/en-us/engine/6000.3/manual/materials-and-shaders/shaders/writing-custom/shader-graph)
- **4.** [Unity Manual 6.3 — Frame Debugger](https://docs.unity.com/en-us/engine/6000.3/manual/analysis/graphics-performance-profiling/profile-rendering/frame-debugger/frame-debugger)

> **Ghi chú tài liệu:** Các bước thao tác và thông số minh họa được thiết kế để tự học; vị trí menu/thuộc tính có thể thay đổi theo template, package và bản cập nhật. Các nguồn Unity ở trên được dùng để kiểm tra thuật ngữ và tính năng; không có tuyên bố đã kiểm thử trực tiếp bằng Unity Editor trong môi trường này.
