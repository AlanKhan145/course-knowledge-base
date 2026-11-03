# Bài 04 — Chồng nhiều dải vết chém và đồng bộ nhân vật

> Module: Vết chém nâng cao: Blender, VFX Graph và Shader Graph  
> Mức độ: Trung cấp / nâng cao  
> Trích đoạn tham chiếu: T06 12:00–16:13

## Mục tiêu học tập

Sau bài này, bạn thực hành được quy trình **chồng nhiều dải vết chém và đồng bộ nhân vật**, giải thích nguyên lý lựa chọn kỹ thuật và tự kiểm tra kết quả trong project.

## Trọng tâm
Video nhân bản hệ slash thành lớp sáng/tối, khác kích cỡ, màu, cường độ, tốc độ hoa văn; cuối cùng ghép nhiều cú chém vào chuỗi hoạt ảnh nhân vật. Tầng VFX không nên giống hệt nhau vì sẽ tạo một mảng phẳng.

### Quy trình
1. Tạo `BrightSlash`: dải chính sáng, kích thước vừa, lifetime rất ngắn.
2. Tạo `DarkSlash`: dải tối/viền mỏng hơn hoặc rộng hơn một chút, xuất hiện lệch thời điểm.
3. Có thể thêm `SparkBurst` hoặc một hiệu ứng phụ khi vệt chạm mục tiêu.
4. Đặt 2–3 cung theo hướng đánh và thời gian trong bảng cue để không cùng bùng nổ vô cớ.
5. Chạy thử ở tốc độ gameplay và dưới camera game. Tối ưu bớt particle mesh nếu slash chiếm nhiều diện tích màn hình.
6. Đóng gói thành prefab/graph có thể điều khiển từ event hoạt ảnh.

### Mở rộng
Trong bài tích hợp sau, dùng callback/hệ combat phát chính xác `Play` tại mốc gây sát thương. Tránh buộc damage timing vào lúc hệ hạt tắt vì thời lượng VFX có thể thay đổi.

## Bài tập bắt buộc

1. Bàn giao 2 lớp vệt chém có timing khác nhau.
2. Quay clip một đòn đơn và combo 3 đòn.

## Tiêu chí hoàn thành

Có phân cấp lớp chính–phụ, không nháy lung tung, không lặp tự động.

## Tự kiểm tra

- Bước nào trong quy trình là điểm khó nhất, và bạn kiểm chứng nó bằng cách nào?
- Nếu bỏ một hiệu ứng, chuyển động chính còn dễ đọc không?
- Tham số hoặc thời điểm nào bạn sẽ điều chỉnh trước khi tối ưu hiệu năng?

## Liên hệ bài kế tiếp

Ghi lại một vấn đề quan sát được khi preview; mang nó vào bài tiếp theo để cải thiện dần thay vì làm mới từ đầu.

**Ghi chú nguồn:** Tài liệu biên soạn từ transcript, không phải bản chép lời nguyên văn. Các bài tập được thêm để người học thực hành.
