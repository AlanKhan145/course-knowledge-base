# Bài 01 — Tách sprite thành lớp và dựng keyframes thô

> Module: Animation nhân vật và hiệu ứng điện kiểu Duelyst  
> Mức độ: Trung cấp / nâng cao  
> Trích đoạn tham chiếu: T05 00:43–03:42

## Mục tiêu học tập

Sau bài này, bạn thực hành được quy trình **tách sprite thành lớp và dựng keyframes thô**, giải thích nguyên lý lựa chọn kỹ thuật và tự kiểm tra kết quả trong project.

## Trọng tâm
Video phân tích cách biến một hình tĩnh thành animation công kích của nhân vật trong *Duelyst*: nhân vật thao tác những tảng đá lơ lửng trước khi kích hoạt điện năng. Tác giả nhấn mạnh tách lớp vừa đủ và kiểm tra toàn bộ hoạt ảnh dưới dạng bản nháp thật sớm.

### Quy trình
1. Phân lớp thành `Body`, `Arms`, `Rocks`, `Electricity`, `Aura` theo chuyển động độc lập.
2. Lập 6 pose: chuẩn bị ném, ném trái, ném phải, kéo vật thể, co người tích lực, mở tay giải phóng điện.
3. Phóng đại góc vai/cánh tay và thay đổi hướng thân khi cần; không bó buộc mọi frame giống mặt trước của hình tĩnh.
4. Preview các pose **không tô chi tiết**; ưu tiên hiểu hành động trước.
5. Giữ khung sau cùng phù hợp quay lại idle nếu đây là chuỗi hành động game có thể lặp.

### Chú ý
Nhiều layer không luôn tốt hơn. Nếu tìm layer đúng mất nhiều thời gian hơn việc vẽ, cấu trúc đang quá vụn.

## Bài tập bắt buộc

1. Lập 6 rough poses và sơ đồ layer.
2. Đánh giá pose nào khó đọc nhất và chỉnh lại.

## Tiêu chí hoàn thành

Tư thế rõ, số lớp đủ di chuyển độc lập.

## Tự kiểm tra

- Bước nào trong quy trình là điểm khó nhất, và bạn kiểm chứng nó bằng cách nào?
- Nếu bỏ một hiệu ứng, chuyển động chính còn dễ đọc không?
- Tham số hoặc thời điểm nào bạn sẽ điều chỉnh trước khi tối ưu hiệu năng?

## Liên hệ bài kế tiếp

Ghi lại một vấn đề quan sát được khi preview; mang nó vào bài tiếp theo để cải thiện dần thay vì làm mới từ đầu.

**Ghi chú nguồn:** Tài liệu biên soạn từ transcript, không phải bản chép lời nguyên văn. Các bài tập được thêm để người học thực hành.
