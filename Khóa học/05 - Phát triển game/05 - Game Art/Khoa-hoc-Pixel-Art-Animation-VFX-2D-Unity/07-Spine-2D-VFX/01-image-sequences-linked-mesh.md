# Bài 01 — Image sequence, Linked Mesh và tiết kiệm atlas

> Module: Thủ pháp Spine: linked mesh, bone, trail, tái sử dụng VFX  
> Mức độ: Trung cấp / nâng cao  
> Trích đoạn tham chiếu: T07 00:20–03:27

## Mục tiêu học tập

Sau bài này, bạn thực hành được quy trình **image sequence, linked mesh và tiết kiệm atlas**, giải thích nguyên lý lựa chọn kỹ thuật và tự kiểm tra kết quả trong project.

## Trọng tâm
Video Spine giới thiệu nhiều ví dụ từ game nhân vật: tác giả tận dụng một vài chuỗi ảnh cực ngắn, biến dạng, lật và dùng lại thay vì xuất hoạt ảnh mới cho từng đòn. **Linked Mesh** chia sẻ dữ liệu biến dạng với mesh nguồn, giúp các frame tương đương dễ bảo trì.

### Quy trình
1. Chuẩn bị 2 chuỗi PNG: `glow_01..03` và `slash_01..03`, nhỏ gọn nhưng đủ sắc nét.
2. Trong Spine, gắn chuỗi vào slot hợp lý trên rig nhân vật và xem animation bằng các key thay đổi attachment.
3. Thử linked mesh đối với một nhóm hình có cấu trúc lưới tương ứng, biến dạng cùng bộ vertex.
4. Tạo 2 lớp: glow chính và afterimage phía sau, đổi màu hoặc opacity để tái sử dụng cùng nguồn.
5. Kiểm tra kích thước và số atlas page sau export; không nhân nhiều tệp PNG chỉ vì khác màu nếu có thể tint trong engine/Spine.

### Chú ý
Linked mesh và sprite-frame từng ô là hai cơ chế khác nhau. Chỉ dùng linked mesh khi các attachment có topology phù hợp; nếu hình quá khác nhau, dùng mesh riêng hoặc sequence thông thường.

## Bài tập bắt buộc

1. Tạo 2 chuỗi 3 frame và sử dụng chúng hai lần với tint khác nhau.
2. Đo atlas trước/sau tái sử dụng.

## Tiêu chí hoàn thành

Không có asset trùng vô ích; VFX vẫn hoạt động sau export.

## Tự kiểm tra

- Bước nào trong quy trình là điểm khó nhất, và bạn kiểm chứng nó bằng cách nào?
- Nếu bỏ một hiệu ứng, chuyển động chính còn dễ đọc không?
- Tham số hoặc thời điểm nào bạn sẽ điều chỉnh trước khi tối ưu hiệu năng?

## Liên hệ bài kế tiếp

Ghi lại một vấn đề quan sát được khi preview; mang nó vào bài tiếp theo để cải thiện dần thay vì làm mới từ đầu.

**Ghi chú nguồn:** Tài liệu biên soạn từ transcript, không phải bản chép lời nguyên văn. Các bài tập được thêm để người học thực hành.
