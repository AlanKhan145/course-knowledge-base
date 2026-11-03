# Bài 03 — Đập đất, trượt kiếm, dựng beam/laser

> Module: Tạo tuyệt kỹ nhiều giai đoạn với nhảy xoay, đập đất và laser  
> Mức độ: Trung cấp / nâng cao  
> Trích đoạn tham chiếu: T04 05:20–11:55 và 22:00–31:00

## Mục tiêu học tập

Sau bài này, bạn thực hành được quy trình **đập đất, trượt kiếm, dựng beam/laser**, giải thích nguyên lý lựa chọn kỹ thuật và tự kiểm tra kết quả trong project.

## Trọng tâm
Đoạn giữa của video đặt nhân vật vào tư thế đập kiếm xuống, tiếp đất và chuyển mạch sang tia năng lượng. **Landing impact** và **beam anticipation** là hai sự kiện cần được tách thời gian.

### Quy trình
1. Dựng key pose chân chạm đất, thân hạ và kiếm chỉ xuống; kiểm tra kiếm nằm trước hay sau nhân vật bằng z-order.
2. Thêm 1–2 frame bụi/hạt bắn quanh điểm chạm và một khung nhân vật nảy nhẹ sau va chạm.
3. Ở pha trượt, tạo các in-between đưa kiếm tới vị trí chuẩn bị phóng tia; không để vũ khí đột nhiên “nhảy” đến nơi mới.
4. Trước `beam_fire`, có thể giữ một pose charge ngắn, vệt sáng hội tụ về đầu kiếm.
5. Frame `beam_fire`: thay đổi độ sáng, biểu diễn thân tia rõ hướng; giảm dần năng lượng ở những frame kết thúc.

### Nguyên tắc trình tự
Một tuyệt kỹ phải cho biết **sắp có chuyện gì**, **khi nào đòn trúng** và **khi nào trở lại điều khiển**. Hiệu ứng nổ không nên che dấu toàn bộ chuỗi này.

## Bài tập bắt buộc

1. Tạo pha landing 3–5 frame và beam 3–5 frame.
2. Ghi thời điểm va chạm, thời điểm beam bắt đầu.

## Tiêu chí hoàn thành

Có ít nhất một frame rõ va chạm và một frame rõ xả năng lượng.

## Tự kiểm tra

- Bước nào trong quy trình là điểm khó nhất, và bạn kiểm chứng nó bằng cách nào?
- Nếu bỏ một hiệu ứng, chuyển động chính còn dễ đọc không?
- Tham số hoặc thời điểm nào bạn sẽ điều chỉnh trước khi tối ưu hiệu năng?

## Liên hệ bài kế tiếp

Ghi lại một vấn đề quan sát được khi preview; mang nó vào bài tiếp theo để cải thiện dần thay vì làm mới từ đầu.

**Ghi chú nguồn:** Tài liệu biên soạn từ transcript, không phải bản chép lời nguyên văn. Các bài tập được thêm để người học thực hành.
