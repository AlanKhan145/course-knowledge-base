# Bài 04 — Teleport, impact, ghosting và tối ưu bộ hiệu ứng

> Module: Thủ pháp Spine: linked mesh, bone, trail, tái sử dụng VFX  
> Mức độ: Trung cấp / nâng cao  
> Trích đoạn tham chiếu: T07 25:30–36:05

## Mục tiêu học tập

Sau bài này, bạn thực hành được quy trình **teleport, impact, ghosting và tối ưu bộ hiệu ứng**, giải thích nguyên lý lựa chọn kỹ thuật và tự kiểm tra kết quả trong project.

## Trọng tâm
Cuối video có ví dụ nhân vật biến mất/xuất hiện, bóng mờ, ánh chớp, vệt hạt và cú đánh nổ. Tác giả tách các thành phần đơn giản để tái sử dụng, tạo chiều sâu bằng số bản sao ít thay vì sprite-sheet khổng lồ.

### Quy trình
1. Chụp một pose rõ của nhân vật để làm afterimage; giảm alpha dần và dịch vị trí rất nhẹ.
2. Tạo lớp flash xuất hiện khi nhân vật rời hoặc hiện lại. Không giữ flash quá lâu vì làm mất thông tin trận đấu.
3. Nhân đôi một số hạt/vệt, lệch thời gian và thay scale để tránh cảm giác hàng loạt giống hệt nhau.
4. Ghép hit reaction ở mục tiêu: ánh trắng, co/giãn nhanh, mảnh văng ra, hồi bình thường.
5. Kiểm tra tổng số attachment, atlas, mesh vertex và draw calls khi export vào game; bỏ các lớp không quan sát được ở kích thước hiển thị.

### Bài tổng kết
Thiết kế một thư viện `VFX_Slash`, `VFX_Lightning`, `VFX_Hit`, `VFX_Teleport` dùng chung một nhóm texture gốc, nhưng có màu và timing khác nhau.

## Bài tập bắt buộc

1. Xuất 2 animation: teleport và impact.
2. Viết checklist tối ưu cho thiết bị di động.

## Tiêu chí hoàn thành

VFX dễ tái sử dụng, không có bản sao hình ảnh không cần thiết.

## Tự kiểm tra

- Bước nào trong quy trình là điểm khó nhất, và bạn kiểm chứng nó bằng cách nào?
- Nếu bỏ một hiệu ứng, chuyển động chính còn dễ đọc không?
- Tham số hoặc thời điểm nào bạn sẽ điều chỉnh trước khi tối ưu hiệu năng?

## Liên hệ bài kế tiếp

Ghi lại một vấn đề quan sát được khi preview; mang nó vào bài tiếp theo để cải thiện dần thay vì làm mới từ đầu.

**Ghi chú nguồn:** Tài liệu biên soạn từ transcript, không phải bản chép lời nguyên văn. Các bài tập được thêm để người học thực hành.
