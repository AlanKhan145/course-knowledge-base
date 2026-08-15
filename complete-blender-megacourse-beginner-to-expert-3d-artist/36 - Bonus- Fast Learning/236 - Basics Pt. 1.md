# 236 — Basics Pt. 1

| Thuộc tính | Nội dung |
|---|---|
| **Section** | Section 36 — Bonus: Fast Learning |
| **Bài học** | Basics Pt. 1 |
| **Loại nội dung** | Video lecture |
| **Thời lượng** | 1:03:37 |
| **Ngôn ngữ** | English |

## Phạm vi ôn tập

Phần này cô đọng nền tảng Blender từ giao diện và thao tác object đến mesh modeling, modifier, reference image và các phép chỉnh sửa mesh nâng cao. Nội dung được tổng hợp từ:

- [Section 05 — Introduction to Blender](../05%20-%20Basics-%20Introduction%20to%20Blender/README.md)
- [Section 06 — Mesh Modeling](../06%20-%20Basics-%20Mesh%20Modeling/README.md)
- [Section 07 — Mesh Editing Operations I](../07%20-%20Basics-%20Mesh%20Editing%20Operations%20I/README.md)
- [Section 08 — Most Common Modifiers](../08%20-%20Basics-%20Most%20Common%20Modifiers/README.md)
- [Section 09 — Orthographic Reference](../09%20-%20Basics-%20Using%20Orthographic%20Reference/README.md)
- [Section 10 — Mesh Editing Operations II](../10%20-%20Basics-%20Mesh%20Editing%20Operations%20II/README.md)

## Mục tiêu bài học

Sau bài học này, người học có thể:

- Điều hướng workspace, thiết lập Blender và phân biệt Object Mode với Edit Mode.
- Dùng primitive, transform và cấu trúc vertices, edges, faces để dựng hình.
- Kết hợp extrude, delete/fill/join, loop cut, subdivide, bevel, inset, knife, bisect, spin, smooth, shrink và bridge edge loops.
- Chọn modifier phù hợp và sắp xếp một modifier stack không phá hủy.
- Đưa model sheet hoặc orthographic reference vào viewport để kiểm tra tỷ lệ khi modeling.

## Nội dung trọng tâm

### 1. Từ giao diện đến mesh

Workflow nền tảng bắt đầu bằng việc làm quen workspace, viewport navigation, phím tắt và bảng Transform. Mesh được hiểu qua ba thành phần chính: vertices, edges và faces; các thao tác Location, Rotation và Scale là nền tảng để đặt object trong scene.

### 2. Modeling bằng Edit Mode

Quy trình chuyển từ primitive sang asset dựa trên việc tạo và điều chỉnh geometry. Extrude tạo phần hình học mới; delete/fill/join xử lý vùng hở và liên kết; loop cut/subdivide thêm topology; bevel và inset kiểm soát cạnh, mặt và khoảng lùi. Knife, bisect, spin, smooth, shrink và bridge edge loops mở rộng khả năng dựng hình theo profile hoặc mặt cắt.

### 3. Modeling không phá hủy

Subdivision Surface làm mượt bề mặt, Mirror hỗ trợ đối xứng, Boolean tạo hoặc cắt hình học, còn Array lặp lại chi tiết. Các modifier được xếp trong stack nên thứ tự và mục đích của từng lớp cần được lên kế hoạch trước khi áp dụng.

### 4. Reference và kiểm tra hình dạng

Orthographic reference hoặc model sheet giúp căn model theo các góc nhìn trước, bên và trên. Reference là đường dẫn kiểm tra tỷ lệ, không thay thế việc quan sát khối 3D từ nhiều góc.

## Quy trình rút gọn

1. Mở một file mới, kiểm tra workspace, đơn vị và các thiết lập cần dùng.
2. Thêm primitive, đặt transform và dựng silhouette ở mức đơn giản.
3. Chuyển sang Edit Mode để tạo topology bằng các phép chỉnh sửa phù hợp.
4. Thử Mirror, Subdivision Surface, Boolean hoặc Array trên bản sao để giữ workflow có thể chỉnh sửa.
5. Đặt reference trong orthographic views, đối chiếu tỷ lệ rồi mới thêm chi tiết.
6. Lưu các mốc blockout, modeling và hoàn thiện thành các phiên bản riêng.

## Thực hành đề xuất

Tạo một prop đơn giản từ cube hoặc cylinder, chẳng hạn một hộp, tay cầm hoặc chi tiết kiến trúc. Dựng một nửa bằng Mirror, làm mềm bằng Subdivision Surface, tạo một lỗ bằng Boolean và lặp một chi tiết bằng Array. Sau đó đặt một ảnh reference, kiểm tra model ở các góc nhìn orthographic và lưu file trước/sau khi áp dụng modifier.

## Checklist

- [ ] Đã thực hành navigation, transform và Object/Edit Mode.
- [ ] Đã dựng một prop bằng primitive và mesh editing operations.
- [ ] Đã thử ít nhất ba modifier và ghi lại thứ tự trong stack.
- [ ] Đã căn model với một orthographic reference.
- [ ] Đã lưu file theo các mốc blockout, detail và final.

## Ghi chú về nguồn

> Đây là bài recap được biên soạn từ nội dung và transcript trong Sections 05–10 của thư mục khóa học. Thư mục Section 36 hiện không có transcript riêng cho bài Bonus này; phần trên vì vậy tập trung vào các kỹ thuật có thể ôn lại và áp dụng ngay.
