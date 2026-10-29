# Phụ lục — Nguồn, phạm vi và các lưu ý kỹ thuật

## 1. Nguồn gốc

- **Nguồn chính:** bản ghi tiếng Việt tự động của video hướng dẫn Blender, tệp do người dùng cung cấp `Pasted markdown(20261029-122757).md`, thời gian khoảng **00:00–36:39**.
- **Tài liệu biên soạn:** chuyển lời nói thành các bài học có mục tiêu, công đoạn, tự kiểm tra, bài tập và sơ đồ. Không phải bản chép lời nguyên văn.
- Một số từ trong bản ghi bị nhận dạng sai, đặc biệt là tên công cụ tiếng Anh. Chúng được chuẩn hóa theo ý nghĩa rõ ràng từ ngữ cảnh (xem `PHIM_TAT_VA_THUAT_NGU.md`).

## 2. Giới hạn của video

Video hướng dẫn **điêu khắc phần đầu nhân vật cách điệu**: dựng khối đầu, tai, cổ, mắt, mũi, miệng, lông mày và tóc. Cuối video nói phần **vật liệu/tô màu/ánh sáng/render** sẽ có ở video tiếp theo. Vì thế không có cơ sở gán video này cho các chủ đề UV mapping, retopology game-ready, facial rigging, skinning hoặc animation.

## 3. Những nội dung được bổ sung nhằm học tốt hơn

Đây là **kiến thức kỹ thuật bổ sung**, không nhất thiết là lời giảng nguyên văn: đặt tên object, kiểm tra origin, lưu backup và version, lưu nhiều góc chụp, phân biệt Join với hàn lưới, cân nhắc giữ mesh mắt/tóc riêng, đánh giá đầu game-ready, rubric đồ án.

Các khác biệt phiên bản Blender (4.x/5.x) ảnh hưởng menu và phím tắt; ưu tiên **tên chức năng trong UI** thay cho học thuộc một phím có thể đã thay đổi.

## 4. Tài liệu Blender chính thức để kiểm tra thêm

- [Blender Manual — Sculpting Symmetry (4.2)](https://docs.blender.org/manual/en/4.2/sculpt_paint/sculpting/tool_settings/symmetry.html)
- [Blender Manual — Remesh / Voxel Size (4.0)](https://docs.blender.org/manual/en/4.0/sculpt_paint/sculpting/tool_settings/remesh.html)
- [Blender Manual — Adaptive Resolution / Voxel Remesher (4.3)](https://docs.blender.org/manual/en/4.3/sculpt_paint/sculpting/introduction/adaptive.html)
- [Blender Manual — Modifiers Introduction](https://docs.blender.org/manual/en/latest/modeling/modifiers/introduction.html)
- [Blender Manual — Multiresolution Modifier](https://docs.blender.org/manual/en/latest/modeling/modifiers/generate/multiresolution.html)
- [Blender Manual — Home](https://docs.blender.org/manual/en/latest/)

## 5. Cần nhớ để không hiểu sai

1. **Join không tự nối các đảo mesh** — nếu cần bề mặt liên tục có thể voxel remesh sau khi các khối giao nhau.
2. **Số `Voxel Size = 0.02` không cố định** — tùy quy mô không gian của model, máy và độ chi tiết cần thiết.
3. **Đối xứng cần đúng trục và origin** — đặc biệt với Mirror Object.
4. **MatCap không phải material render**.
5. **Shade Smooth không tăng polygon**.
6. **Bài học chỉ tạo bản sculpt**, không cam kết model đã tối ưu cho game, animation hoặc export engine.

**Ngày biên soạn:** 29/10/2026.
