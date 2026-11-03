# Bài 02 — Thiết lập VFX Graph với Output Particle Mesh

> Module: Vết chém nâng cao: Blender, VFX Graph và Shader Graph  
> Mức độ: Trung cấp / nâng cao  
> Trích đoạn tham chiếu: T06 02:35–05:59

## Mục tiêu học tập

Sau bài này, bạn thực hành được quy trình **thiết lập vfx graph với output particle mesh**, giải thích nguyên lý lựa chọn kỹ thuật và tự kiểm tra kết quả trong project.

## Trọng tâm
Trong VFX Graph, video chuyển output mặc định sang **Output Particle Mesh**, phát đúng một lần thay vì duy trì hạt liên tục, vòng đời ngắn, và làm mesh quay theo đường cong nhanh đầu–chậm cuối.

### Quy trình
1. Chuẩn bị dự án Unity/pipeline hỗ trợ **Visual Effect Graph**; tạo VFX Graph và đối tượng `VFX_Slash` trong scene.
2. Tạo Output Particle Mesh, gán `SlashMesh`, loại output quad không dùng.
3. Thay `Constant Spawn Rate` bằng burst một hạt; đặt lifetime ngắn khoảng 0,3 s theo ví dụ trong nguồn.
4. Kiểm tra kích thước, orientation: xoay trục mesh để cung nằm trên mặt phẳng mong muốn.
5. Trong update, tạo rotation thay đổi theo tuổi hạt. Dùng `Sample Curve` lấy tuổi thọ chuẩn hóa 0–1 để kiểm soát tốc độ quay ban đầu nhanh, cuối chậm.
6. Gắn playback với thao tác chém của nhân vật; thử nhiều góc và hướng để phát hiện mesh quay lệch trục.

### Chú ý phiên bản
Node, block, menu và khả năng pipeline của VFX Graph thay đổi theo phiên bản Unity. Bản ghi hướng dẫn không ghi phiên bản; hãy ưu tiên nguyên lý, kiểm tra tên block tương ứng trong dự án hiện tại.

## Bài tập bắt buộc

1. Tạo graph phát 1 mesh slash mỗi lần kích hoạt.
2. Dùng một curve giảm tốc rõ rệt.

## Tiêu chí hoàn thành

Vệt kiếm không lặp tự phát; sinh ra ở hướng chuẩn và tan sau ~0,3 s.

## Tự kiểm tra

- Bước nào trong quy trình là điểm khó nhất, và bạn kiểm chứng nó bằng cách nào?
- Nếu bỏ một hiệu ứng, chuyển động chính còn dễ đọc không?
- Tham số hoặc thời điểm nào bạn sẽ điều chỉnh trước khi tối ưu hiệu năng?

## Liên hệ bài kế tiếp

Ghi lại một vấn đề quan sát được khi preview; mang nó vào bài tiếp theo để cải thiện dần thay vì làm mới từ đầu.

**Ghi chú nguồn:** Tài liệu biên soạn từ transcript, không phải bản chép lời nguyên văn. Các bài tập được thêm để người học thực hành.
