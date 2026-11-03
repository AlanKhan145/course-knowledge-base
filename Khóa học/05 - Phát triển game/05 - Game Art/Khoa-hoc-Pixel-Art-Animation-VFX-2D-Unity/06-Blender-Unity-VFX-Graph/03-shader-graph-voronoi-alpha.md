# Bài 03 — Shader Graph: màu, alpha, Voronoi chuyển động

> Module: Vết chém nâng cao: Blender, VFX Graph và Shader Graph  
> Mức độ: Trung cấp / nâng cao  
> Trích đoạn tham chiếu: T06 06:01–11:55

## Mục tiêu học tập

Sau bài này, bạn thực hành được quy trình **shader graph: màu, alpha, voronoi chuyển động**, giải thích nguyên lý lựa chọn kỹ thuật và tự kiểm tra kết quả trong project.

## Trọng tâm
Sau motion, tutorial tạo shader riêng cho vệt chém. Tinh thần chính: mesh phải trong suốt, có vùng sáng tối, có hoa văn chuyển động theo thời gian và có thể đổi màu.

### Quy trình
1. Tạo Shader Graph tương thích target render pipeline và loại output dùng bởi VFX Graph.
2. Khai báo tham số `Color`, `Alpha`, `VoronoiSpeed` và `VoronoiScale` (tên đặt gợi ý).
3. Dùng UV của mesh kết hợp thời gian trong đồ thị để chạy hoa văn Voronoi dọc thân vệt chém.
4. Nhân màu RGB với kết quả tạo hoa văn phù hợp; nối kênh A vào đầu vào alpha để vùng ngoài được trong suốt.
5. Thử additive/alpha blend theo mục tiêu: tia sáng cần nổi nhưng phần tối cũng có thể quan trọng.
6. Kiểm tra shader ở nền sáng và nền tối để tránh đường chém biến mất trên một loại nền.

### Lỗi phổ biến
- Mesh tím: shader không tương thích pipeline.
- Vệt có hình chữ nhật: alpha hoặc blend cấu hình sai.
- Voronoi tĩnh: thiếu đầu vào Time hoặc tốc độ bằng 0.
- Mất chi tiết: scale hoa văn quá nhỏ/lớn so với kích thước cung.

## Bài tập bắt buộc

1. Dựng một shader với Voronoi động và alpha.
2. Lưu 2 preset sáng và tối.

## Tiêu chí hoàn thành

Không có nền hình chữ nhật; hoa văn di chuyển trong suốt vòng đời slash.

## Tự kiểm tra

- Bước nào trong quy trình là điểm khó nhất, và bạn kiểm chứng nó bằng cách nào?
- Nếu bỏ một hiệu ứng, chuyển động chính còn dễ đọc không?
- Tham số hoặc thời điểm nào bạn sẽ điều chỉnh trước khi tối ưu hiệu năng?

## Liên hệ bài kế tiếp

Ghi lại một vấn đề quan sát được khi preview; mang nó vào bài tiếp theo để cải thiện dần thay vì làm mới từ đầu.

**Ghi chú nguồn:** Tài liệu biên soạn từ transcript, không phải bản chép lời nguyên văn. Các bài tập được thêm để người học thực hành.
