---
title: "Bài 08 — Tạo và vá texture màu bằng Tripo và Modif"
course: "AI 3D Character — Từ hình tham chiếu đến Game-Ready"
lesson: 8
source_type: "Biên soạn tiếng Việt từ bản ghi video do người học cung cấp"
video_segment: "37:30–42:08"
format: "Markdown"
---

# Bài 08 — Tạo và vá texture màu bằng Tripo và Modif

> **Vị trí trong video:** 37:30–42:08 · **Đầu vào:** bản ghi tiếng Việt do người học cung cấp.  
> **Phạm vi:** tái cấu trúc nội dung video thành bài thực hành; không phải phụ đề nguyên văn hay tài liệu chính thức của nhà cung cấp công cụ.

## Mục tiêu học tập

- Biết cách dùng tham chiếu hình cho texture AI.
- Thực hành làm texture nhiều góc và vá vùng bị sai.
- Tổng hợp bản đồ màu khi nhiều đối tượng cùng dùng atlas.

## Nội dung bài học

### 1. Hai hướng texturing trong bản ghi

- **Texturing trực tiếp trong Tripo:** upload model, cung cấp ảnh tham chiếu, tạo texture tự động. Nhanh nhưng có thể sai hình chi tiết, góc khuất và seam.
- **Modif:** tạo/layer/patch texture theo nhiều hình tham chiếu và góc nhìn; người hướng dẫn ưu tiên khi cần sửa cục bộ. Điều kiện dịch vụ/gói miễn phí có thể thay đổi.

### 2. Chuẩn bị model để mang sang công cụ texture

1. Kiểm tra UV đã hoàn thiện; lưu bản Blender dự phòng.
2. Với Mirror hoặc modifier cần chuyển thành geometry, **apply trước export** hoặc chọn Apply Modifiers trong export nếu hỗ trợ.
3. Export GLB/định dạng công cụ nhận; mở lại file để chắc không rớt mesh/UV.
4. Chuẩn bị ảnh reference đúng từng đối tượng và các góc (trước, bên, sau).

### 3. Quy trình tạo texture nhiều góc

1. Import model sang công cụ texture.
2. Chọn bộ phận hiện tại, gắn ảnh tham chiếu tương ứng.
3. Tạo lớp texture cho góc nhìn đang xử lý.
4. Sinh thêm hình tham chiếu góc sau/bên nếu ảnh ban đầu không đủ.
5. Dùng **Patch** khoanh đúng vùng lỗi, tái tạo hoặc dán họa tiết vào vùng đó thay vì tạo lại toàn bộ.
6. Lặp lại kiểm tra nhiều góc đến khi đường seam/họa tiết nhất quán.

### 4. Ghép bản đồ màu khi chung atlas

Video đề cập trường hợp xuất ra nhiều color maps nhưng các phần đáng lẽ dùng **một texture set**. Có thể ghép đúng theo UV atlas bằng công cụ vẽ ảnh có layer hoặc bake/transfer qua phần mềm 3D. **Không chỉ chồng bốn ảnh lên nhau** nếu không kiểm soát vùng UV và alpha: có thể mất màu ở những đảo trùng pixel.

### 5. Kiểm tra texture trước PBR

- Màu và họa tiết không nhảy ở mặt sau.
- Seam lớn ở vùng dễ nhìn đã được sửa.
- Chi tiết màu không vô tình chạy qua phần kim loại/vải khác.
- Base color chưa bị lẫn bóng đậm một cách khó kiểm soát khi đưa vào PBR.

> AI texturing là công cụ tạo bản nháp nhanh; người làm 3D vẫn phải kiểm tra từng góc nhìn, đặc biệt các chi tiết có tính đối xứng hoặc cần khớp reference.

## Bài thực hành và tiêu chí hoàn thành

- [ ] Texturing ít nhất hai góc nhìn cho một bộ phận.
- [ ] Sửa cục bộ một lỗi bằng Patch hoặc cách tô thủ công tương đương.
- [ ] Xuất color map và xác nhận UV khớp Blender.

## Tự kiểm tra

1. **Khi nào nên patch cục bộ?**  
   *Gợi ý đáp án:* Khi hầu hết texture tốt nhưng một vùng lỗi về họa tiết/màu/seam.
2. **Vì sao xuất GLB cần kiểm tra modifier?**  
   *Gợi ý đáp án:* Một số công cụ không tái tạo modifier Blender; cần geometry thật.

## Ghi chú học tập

- Lưu bản `.blend` phiên bản mới trước các thao tác phá hủy như remesh, áp modifier hoặc join mesh.
- Các số poly, thông số bake và công cụ trong video là **ví dụ theo nhân vật Queen of Hearts**, không phải chuẩn bắt buộc cho mọi dự án.
- Tên tính năng có thể khác giữa phiên bản phần mềm; khi bản ghi tự động nhận sai tên, khóa học giữ khái niệm kỹ thuật và nêu những chỗ cần đối chiếu giao diện.
