---
title: "Bài 02 — Tách bộ phận và sinh mô hình 3D với AI"
course: "AI 3D Character — Từ hình tham chiếu đến Game-Ready"
lesson: 2
source_type: "Biên soạn tiếng Việt từ bản ghi video do người học cung cấp"
video_segment: "02:51–06:47"
format: "Markdown"
---

# Bài 02 — Tách bộ phận và sinh mô hình 3D với AI

> **Vị trí trong video:** 02:51–06:47 · **Đầu vào:** bản ghi tiếng Việt do người học cung cấp.  
> **Phạm vi:** tái cấu trúc nội dung video thành bài thực hành; không phải phụ đề nguyên văn hay tài liệu chính thức của nhà cung cấp công cụ.

## Mục tiêu học tập

- Phân loại thành phần cần high-poly và thành phần có thể low-poly sớm.
- Chuẩn bị ảnh riêng/multi-view và kiểm soát ngân sách đa giác khi AI sinh lưới.
- Xuất file để lắp ráp trong Blender.

## Nội dung bài học

### 1. Tư duy mô-đun

Thay vì sinh cả nhân vật thành một cục mesh, video tách thành các phần có chức năng khác nhau. **Đầu/tóc/phụ kiện nhỏ** có thể tận dụng mesh khá đơn giản, còn **vải nhiều nếp gấp và giáp cần chi tiết bề mặt** thường cần phiên bản high-poly để lưu chi tiết trước khi bake.

| Nhóm | Cách làm gợi ý theo video | Lý do |
|---|---|---|
| Đầu | Mesh AI tương đối gọn, chỉnh thêm vùng mắt/mặt | Dễ can thiệp topology |
| Tóc | Ưu tiên các lọn có cấu trúc riêng | Dễ chỉnh hình dáng và UV |
| Quần, vải có nếp | Sinh/sculpt high-poly rồi retopo | Giữ nếp gấp để chuyển sang normal map |
| Giáp, cổ áo | Tách riêng theo nhóm vật liệu | Thuận tiện vật liệu kim loại và texture |
| Phụ kiện đơn giản | Smart mesh với mức poly vừa phải | Không cần làm high-poly nếu hình học đơn giản |

### 2. Tạo từng mô hình

1. Cắt ảnh tham chiếu cho từng bộ phận, tránh để các phần không liên quan lẫn vào nhau.
2. Tạo thêm **multi-view** với những phần khó (thân/quần/giáp). Bộ phận đơn giản đôi khi đủ một ảnh.
3. Sinh mesh với nền tảng AI phù hợp. Video nhắc đến **Tripo** và các công cụ tương tự; chất lượng có thể khác theo phiên bản.
4. Khi có thiết lập **Smart Mesh**, chọn ngân sách poly theo đặc điểm chi tiết; video minh họa đầu khoảng **5.000**, phụ kiện nhỏ khoảng **500**, không phải quy chuẩn tuyệt đối.
5. Ở giai đoạn dựng hình, có thể **chưa cần texture** nếu mục tiêu chỉ là lấy geometry. Điều này tránh công việc thừa.
6. Xuất FBX hoặc định dạng mà công cụ và Blender cùng hỗ trợ; kiểm tra đúng tên file, trục và scale.

### 3. High-poly và low-poly khác nhau thế nào?

- **High-poly:** dùng để chạm khắc, giữ đường rãnh, nếp vải, cạnh nổi và các chi tiết khó biểu diễn bằng ít tam giác.
- **Low-poly:** bản tối ưu để đưa vào game, giữ silhouette và các vòng cạnh quan trọng cho biến dạng.
- **Baking:** đưa thông tin bề mặt từ high-poly sang texture để low-poly trông giàu chi tiết hơn.

> Không nên đánh giá chỉ theo số mặt. Mesh 10.000 tam giác với flow tốt có thể hữu ích hơn mesh 5.000 tam giác với ngón tay dính/chồng mặt.

### 4. Hồ sơ từng bộ phận

```text
Meshes/
  head_high.fbx
  hair_strands_high.fbx
  cloth_high.fbx
  armor_high.fbx
  weapon_high.fbx
  gloves_low_candidate.fbx
```

Tên file này là ví dụ tổ chức, không phải tên file gốc trong video.

## Bài thực hành và tiêu chí hoàn thành

- [ ] Tạo ít nhất 4 bộ phận riêng từ một concept.
- [ ] Chụp wireframe từng bộ phận và ghi số polygon thực tế.
- [ ] Kiểm tra model có phần méo, hở, dính hoặc mặt trong không mong muốn không.

## Tự kiểm tra

1. **Vì sao không cần texture ngay?**  
   *Gợi ý đáp án:* Ở bước này người hướng dẫn chủ yếu đánh giá hình học, texture sẽ được làm sau.
2. **Khi nào dùng multi-view?**  
   *Gợi ý đáp án:* Khi một ảnh không cho đủ thông tin về mặt bên, mặt sau hoặc thể tích.

## Ghi chú học tập

- Lưu bản `.blend` phiên bản mới trước các thao tác phá hủy như remesh, áp modifier hoặc join mesh.
- Các số poly, thông số bake và công cụ trong video là **ví dụ theo nhân vật Queen of Hearts**, không phải chuẩn bắt buộc cho mọi dự án.
- Tên tính năng có thể khác giữa phiên bản phần mềm; khi bản ghi tự động nhận sai tên, khóa học giữ khái niệm kỹ thuật và nêu những chỗ cần đối chiếu giao diện.
