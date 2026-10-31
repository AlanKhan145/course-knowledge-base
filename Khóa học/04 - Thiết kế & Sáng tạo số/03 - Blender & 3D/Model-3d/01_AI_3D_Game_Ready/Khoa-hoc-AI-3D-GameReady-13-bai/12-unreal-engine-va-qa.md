---
title: "Bài 12 — Đưa nhân vật vào Unreal Engine và kiểm tra game-ready"
course: "AI 3D Character — Từ hình tham chiếu đến Game-Ready"
lesson: 12
source_type: "Biên soạn tiếng Việt từ bản ghi video do người học cung cấp"
video_segment: "56:10–57:17"
format: "Markdown"
---

# Bài 12 — Đưa nhân vật vào Unreal Engine và kiểm tra game-ready

> **Vị trí trong video:** 56:10–57:17 · **Đầu vào:** bản ghi tiếng Việt do người học cung cấp.  
> **Phạm vi:** tái cấu trúc nội dung video thành bài thực hành; không phải phụ đề nguyên văn hay tài liệu chính thức của nhà cung cấp công cụ.

## Mục tiêu học tập

- Hiểu đầu ra cần kiểm tra khi vào engine.
- Lập checklist đánh giá geometry, texture và rig.
- Thiết kế bài trình diễn nhân vật có ánh sáng/camera/animation.

## Nội dung bài học

### 1. Giai đoạn cuối trong video

Người hướng dẫn giới thiệu nhân vật đã hoàn thiện sau hơn hai ngày làm việc, rồi đưa sang **Unreal Engine** để thiết lập cảnh, vật lý bổ sung và các góc máy render. Đây là **phần giới thiệu ngắn**, không có hướng dẫn từng nút import/Physics Asset trong bản ghi.

### 2. Quy trình nhập engine để thực hành thêm

*Các bước dưới đây là khung thực hành bổ sung; video không trình bày chi tiết từng tùy chọn:*

1. Trong Blender kiểm tra trục, scale, hướng nhân vật, tên xương và texture được lưu đúng.
2. Export **FBX** khi cần skeletal mesh/animation theo pipeline Unreal; GLB có thể dùng cho nhu cầu khác khi plugin/pipeline hỗ trợ.
3. Import thành **Skeletal Mesh** và xác nhận skeleton/weights.
4. Tạo hoặc gắn material PBR: Base Color, Normal, Roughness, Metallic và AO tùy shader.
5. Gắn animation thử và kiểm tra biến dạng phần vai, khuỷu, háng, ngón.
6. Tạo ánh sáng, sàn, camera và trình diễn ngắn; có thể thêm vật lý tóc/vải nếu đã thiết kế đúng rig/asset.

### 3. Checklist game-ready

| Hạng mục | Chấp nhận khi |
|---|---|
| Hình dáng | Không thủng/xuyên nghiêm trọng ở pose tĩnh |
| Tối ưu | Triangle count phù hợp mục tiêu game/camera |
| UV | Không seam lỗi gây chú ý, normal bake hiển thị đúng |
| Texture | Không thiếu file, ánh sáng/metal phản ứng hợp lý |
| Rig | Các khớp cơ bản biến dạng ổn, giáp không bẹp |
| Export | Import lại file sạch không thất lạc phụ kiện |
| Demo | Có ảnh trước/sau và ít nhất một pose/animation |

### 4. Đầu ra bài tốt nghiệp

Tối thiểu: `character.blend`, mesh xuất engine, map `BaseColor`, `Normal`, `Roughness`, `Metallic`, ảnh atlas UV, ảnh wireframe, 3 pose test và 1 video quay ngắn trong engine.

> Bản ghi có nhắc phiên bản Unreal Engine ở cuối nhưng không phải là hướng dẫn tương thích phiên bản. Khi thực hành cần kiểm tra bản Unreal đang cài và cách import skeletal mesh của bản đó.

## Bài thực hành và tiêu chí hoàn thành

- [ ] Import rig nhân vật vào Unreal Engine hoặc engine tương đương nếu chưa cài Unreal.
- [ ] Tạo 3 ảnh kiểm tra: pose trung tính, giơ tay, gập gối.
- [ ] Hoàn thành bảng QA, đánh dấu lỗi nào thuộc mesh/UV/material/rig.

## Tự kiểm tra

1. **Video hướng dẫn chi tiết tạo Physics Asset không?**  
   *Gợi ý đáp án:* Không; chỉ nói thêm vật lý và dựng demo trong Unreal.
2. **Đẹp trong Blender có đủ là game-ready chưa?**  
   *Gợi ý đáp án:* Chưa; phải kiểm tra hiệu suất, texture, rig và vật liệu trong engine đích.

## Ghi chú học tập

- Lưu bản `.blend` phiên bản mới trước các thao tác phá hủy như remesh, áp modifier hoặc join mesh.
- Các số poly, thông số bake và công cụ trong video là **ví dụ theo nhân vật Queen of Hearts**, không phải chuẩn bắt buộc cho mọi dự án.
- Tên tính năng có thể khác giữa phiên bản phần mềm; khi bản ghi tự động nhận sai tên, khóa học giữ khái niệm kỹ thuật và nêu những chỗ cần đối chiếu giao diện.
