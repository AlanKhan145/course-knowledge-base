# Bài 03 — Mưa rơi, va chạm mặt đất và thứ tự hiển thị

> Module: Hệ thống hạt 2D bằng sprite trong Unity  
> Mức độ: Trung cấp / nâng cao  
> Trích đoạn tham chiếu: T02 03:49–05:01

## Mục tiêu học tập

Sau bài này, bạn thực hành được quy trình **mưa rơi, va chạm mặt đất và thứ tự hiển thị**, giải thích nguyên lý lựa chọn kỹ thuật và tự kiểm tra kết quả trong project.

## Trọng tâm
Video tạo sprite giọt nước, phát hạt từ trên mây và dùng tính năng Collision để hạt có tương tác với mặt đất. Đồng thời lưu ý hạt chịu quy tắc sorting giống sprite khác.

### Quy trình
1. Vẽ sprite giọt mưa, gắn vào Particle System mới, đổi shape sao cho giọt xuất hiện dưới đám mây.
2. Điều chỉnh trọng lực/tốc độ và hướng rơi phù hợp phối cảnh game.
3. Tạo đối tượng `Ground` có `BoxCollider2D` trong scene.
4. Bật mô-đun `Collision` của Particle System; ở phiên bản hỗ trợ hãy chọn chế độ thế giới 2D, xác định layer collider được xét.
5. Thử `Bounce = 0` để giọt không nảy hoặc giá trị thấp để tạo giọt bắn nhẹ; điều chỉnh `Dampen` khi cần.
6. Tại `Renderer`, so sánh `Sorting Layer` và `Order in Layer` với nhân vật, nền, mây; bố trí sao cho hạt không che sai lớp.

### Khắc phục
Nếu hạt xuyên nền, kiểm tra có `Collider2D`, collision mode, kích thước collider và layer mask. Một số đường render/collision phụ thuộc phiên bản Unity; ghi rõ bản sử dụng trong bài nộp.

## Bài tập bắt buộc

1. Tạo trời mưa với vùng phát và sàn va chạm.
2. Chụp ảnh hai cấu hình Bounce khác nhau.

## Tiêu chí hoàn thành

Giọt rơi đúng hướng, chạm sàn và thứ tự lớp hợp lý.

## Tự kiểm tra

- Bước nào trong quy trình là điểm khó nhất, và bạn kiểm chứng nó bằng cách nào?
- Nếu bỏ một hiệu ứng, chuyển động chính còn dễ đọc không?
- Tham số hoặc thời điểm nào bạn sẽ điều chỉnh trước khi tối ưu hiệu năng?

## Liên hệ bài kế tiếp

Ghi lại một vấn đề quan sát được khi preview; mang nó vào bài tiếp theo để cải thiện dần thay vì làm mới từ đầu.

**Ghi chú nguồn:** Tài liệu biên soạn từ transcript, không phải bản chép lời nguyên văn. Các bài tập được thêm để người học thực hành.
