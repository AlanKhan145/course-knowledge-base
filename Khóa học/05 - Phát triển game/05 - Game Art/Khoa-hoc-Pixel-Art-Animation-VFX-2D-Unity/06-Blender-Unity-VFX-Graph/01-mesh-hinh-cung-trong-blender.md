# Bài 01 — Tạo mesh đường chém từ Blender

> Module: Vết chém nâng cao: Blender, VFX Graph và Shader Graph  
> Mức độ: Trung cấp / nâng cao  
> Trích đoạn tham chiếu: T06 00:46–02:35

## Mục tiêu học tập

Sau bài này, bạn thực hành được quy trình **tạo mesh đường chém từ blender**, giải thích nguyên lý lựa chọn kỹ thuật và tự kiểm tra kết quả trong project.

## Trọng tâm
Video thiết kế vệt chém bằng mesh 3D rồi dùng trong cảnh chiến đấu. Người hướng dẫn bắt đầu từ hình trụ, bỏ nắp, thêm edge loops và làm dẹt với proportional editing để ra một dải cong.

### Quy trình
1. Trong Blender, tạo scene sạch, thêm **Cylinder**, chọn số cạnh đủ mượt (ví dụ 32 như trong nguồn), bỏ mặt nắp trên/dưới.
2. Vào Edit Mode, dùng `Ctrl+R` thêm các vòng cạnh; chọn vùng giữa và bật Proportional Editing (`O` trong keymap thông dụng).
3. Dùng Scale để đẩy vùng giữa thành đường vòng cung, làm dẹt chiều cao theo một trục để có dải vết chém.
4. Kiểm tra normal, UV và tâm mesh. Đổi tên `SlashMesh`, xuất FBX chỉ đối tượng đã chọn.
5. Nhập vào Unity. Kiểm tra scale và hướng trước khi gắn vào VFX; nguồn có điều chỉnh hệ số import vì khác biệt giữa Blender–Unity, nhưng giá trị đúng còn tùy hệ đơn vị dự án.

### Tại sao dùng mesh?
Vệt kiếm có thể quay theo quỹ đạo, uốn dải rõ hướng và nhận shader động. Đây là workflow **3D mesh dùng làm hiệu ứng cho cảnh game**, không phải pixel art thuần từng frame.

## Bài tập bắt buộc

1. Xuất `SlashMesh.fbx`.
2. Chụp mesh ở góc phối cảnh và khi nhìn top-down.

## Tiêu chí hoàn thành

Mesh có silhouette cung kiếm, không có nắp thừa, import đúng hướng.

## Tự kiểm tra

- Bước nào trong quy trình là điểm khó nhất, và bạn kiểm chứng nó bằng cách nào?
- Nếu bỏ một hiệu ứng, chuyển động chính còn dễ đọc không?
- Tham số hoặc thời điểm nào bạn sẽ điều chỉnh trước khi tối ưu hiệu năng?

## Liên hệ bài kế tiếp

Ghi lại một vấn đề quan sát được khi preview; mang nó vào bài tiếp theo để cải thiện dần thay vì làm mới từ đầu.

**Ghi chú nguồn:** Tài liệu biên soạn từ transcript, không phải bản chép lời nguyên văn. Các bài tập được thêm để người học thực hành.
