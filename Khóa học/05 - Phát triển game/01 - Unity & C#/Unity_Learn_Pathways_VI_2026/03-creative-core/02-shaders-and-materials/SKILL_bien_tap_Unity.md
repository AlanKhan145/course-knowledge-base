---
name: unity-markdown-lesson-editor
version: 1.0
scope: Unity Creative Core Shaders and Materials
---
# Quy trình (skill) biên tập bài học Unity Markdown

**Mục tiêu:** biến đề cương ngắn thành bài học tự nghiên cứu có thể kiểm chứng, **không** giả định đề cương là transcript chính thức.

## Quy trình biên tập
1. **Truy nguyên nguồn:** đọc từng `.md`, ghi đúng `source_title`, lesson_number, phạm vi nội dung trong nguồn.
2. **Đối chiếu:** chỉ viện dẫn tài liệu Unity Manual/Unity Learn có đường dẫn cụ thể; ưu tiên tài liệu phiên bản Unity 6.3.
3. **Giới hạn giả định:** chọn URP để tạo phòng thí nghiệm nhất quán; đánh dấu khi bước không dùng cho Built-in/HDRP.
4. **Mô hình hóa:** nêu định nghĩa, biến đầu vào, ảnh hưởng mong đợi, ngoại lệ và phân biệt khái niệm dễ nhầm.
5. **Thực nghiệm:** mỗi bài có ít nhất một thí nghiệm thay một biến và một quan sát kiểm chứng được.
6. **Sơ đồ:** ưu tiên Mermaid cho pipeline, quan hệ phụ thuộc hoặc quyết định lựa chọn; không ép sơ đồ vào bài chỉ có bảng thông số.
7. **Đánh giá:** có bài tập, lỗi thường gặp, tiêu chí nghiệm thu và link tài liệu chuẩn.
8. **Kiểm định:** đảm bảo đủ 13 file, thứ tự đúng, các liên kết tham khảo không phải URL tự phỏng đoán, thuật ngữ không tự mâu thuẫn.

## Kiểm tra thuật ngữ
- Mesh ≠ Material ≠ Shader ≠ Texture.
- Smoothness ≠ Metallic; Roughness cần kiểm tra phép chuyển theo workflow.
- Alpha Clipping ≠ Alpha Blending ≠ Subsurface Translucency.
- Bump/Normal/Parallax thông thường không đổi silhouette.
- Emission không tự bảo đảm ánh sáng gián tiếp trong scene.
- Performance phải được đo bằng profiler/đúng thiết bị.

## Đầu ra
Mỗi bài có frontmatter, tên gốc, mục tiêu, nội dung khoa học, thực hành, lỗi, checklist, nguồn và ghi chú giới hạn. Tài liệu README chứa lộ trình và phân biệt thông tin từ nguồn với phần tự biên soạn.
