# Bài 01 — Thiết kế sprite hạt và gắn vào Particle System

> Module: Hệ thống hạt 2D bằng sprite trong Unity  
> Mức độ: Trung cấp / nâng cao  
> Trích đoạn tham chiếu: T02 00:45–02:21

## Mục tiêu học tập

Sau bài này, bạn thực hành được quy trình **thiết kế sprite hạt và gắn vào particle system**, giải thích nguyên lý lựa chọn kỹ thuật và tự kiểm tra kết quả trong project.

## Trọng tâm
Tutorial dùng một hình bông hoa làm hạt, vẽ ở công cụ 2D rồi nhập vào Unity. Hình trắng rất tiện cho việc đổi **Start Color** trong Unity. Tác giả chọn renderer dùng sprite thay cho hạt tròn mềm mặc định.

### Quy trình
1. Vẽ hình hạt trắng có nền trong suốt (hoa, bụi, giọt nước, đốm sáng). Xuất PNG thật sự có alpha.
2. Import PNG vào Unity; đặt `Texture Type = Sprite (2D and UI)` khi dùng quy trình Sprite thông thường.
3. Tạo `GameObject > Effects > Particle System` (tên menu có thể đổi theo bản Unity), đặt tên `FX_Flowers`.
4. Trong `Renderer`, dùng material dành cho sprite phù hợp render pipeline của dự án. Trong `Texture Sheet Animation`, nếu workflow của phiên bản cho phép, bật chế độ **Sprites** và thêm sprite hạt.
5. Chọn Start Color có 2 màu biến thiên; đổi Start Size, Lifetime và Rotation trong khoảng ngẫu nhiên.

### Cảnh báo
Hướng dẫn cũ dùng `Sprites/Default`; Unity/URP có thể đòi vật liệu khác. Nếu hạt hiển thị tím, kiểm tra shader/material tương thích pipeline và texture thay vì cho rằng hình PNG hỏng.

## Bài tập bắt buộc

1. Tạo ít nhất 3 sprite hạt khác nhau.
2. Thiết lập particle sử dụng sprite do mình vẽ.

## Tiêu chí hoàn thành

Particle hiện sprite và đổi màu đúng mà không có nền vuông.

## Tự kiểm tra

- Bước nào trong quy trình là điểm khó nhất, và bạn kiểm chứng nó bằng cách nào?
- Nếu bỏ một hiệu ứng, chuyển động chính còn dễ đọc không?
- Tham số hoặc thời điểm nào bạn sẽ điều chỉnh trước khi tối ưu hiệu năng?

## Liên hệ bài kế tiếp

Ghi lại một vấn đề quan sát được khi preview; mang nó vào bài tiếp theo để cải thiện dần thay vì làm mới từ đầu.

**Ghi chú nguồn:** Tài liệu biên soạn từ transcript, không phải bản chép lời nguyên văn. Các bài tập được thêm để người học thực hành.
