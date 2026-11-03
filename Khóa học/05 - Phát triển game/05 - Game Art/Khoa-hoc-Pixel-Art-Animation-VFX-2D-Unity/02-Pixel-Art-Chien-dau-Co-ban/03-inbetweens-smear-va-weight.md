# Bài 03 — In-between, smear frame, cảm giác sức nặng

> Module: Thiết kế nhân vật và đòn chém Pixel Art  
> Mức độ: Nhập môn  
> Trích đoạn tham chiếu: T03 05:16–12:59

## Mục tiêu học tập

Sau bài này, bạn thực hành được quy trình **in-between, smear frame, cảm giác sức nặng**, giải thích nguyên lý lựa chọn kỹ thuật và tự kiểm tra kết quả trong project.

## Trọng tâm
Chuyển động không phụ thuộc số frame càng nhiều càng tốt. **In-between** nối các pose; **smear** có thể kéo hình theo hướng di chuyển trong một thời điểm ngắn; **overshoot** và **follow-through** làm kiếm nặng, áo choàng và phụ kiện đi sau thân.

### Quy trình
1. Giữa `anticipation` và `contact`, thêm 1–2 frame trung gian, ưu tiên quỹ đạo kiếm.
2. Dựng cung chém rõ (sau nhân vật → cạnh bên → trước nhân vật). Khi đổi vị trí che phủ, xem lại frame để tránh kiếm đột nhiên xuyên qua thân sai ý định.
3. Trên frame impact, thử vệt kéo ngắn hoặc hình kiếm kéo dài. Giữ frame này rất ngắn rồi trở về hình kiếm đầy đủ.
4. Ở `follow-through`, áo choàng và dây tiếp tục chuyển động một nhịp; cơ thể dừng trước, phần mềm dừng sau.
5. Thử tốc độ phát thấp và cao để phát hiện pixel nhảy không chủ đích; chỉnh bằng Onion Skin.

### Phân tích lỗi
- Kiếm nhẹ: tốc độ đều từ đầu tới cuối, không có điểm dừng/overshoot.
- Kiếm rời rạc: quỹ đạo thiếu in-between hoặc đổi z-order đột ngột.
- Nhân vật méo: khối lượng màu bị mất qua nhiều frame.

## Bài tập bắt buộc

1. Làm 2 phiên bản: không smear và có 1 smear.
2. Đánh giá bản nào đọc tốt hơn khi phát bình thường.

## Tiêu chí hoàn thành

Đòn chém có trọng lượng, rõ hướng, không bị “trôi” nhân vật.

## Tự kiểm tra

- Bước nào trong quy trình là điểm khó nhất, và bạn kiểm chứng nó bằng cách nào?
- Nếu bỏ một hiệu ứng, chuyển động chính còn dễ đọc không?
- Tham số hoặc thời điểm nào bạn sẽ điều chỉnh trước khi tối ưu hiệu năng?

## Liên hệ bài kế tiếp

Ghi lại một vấn đề quan sát được khi preview; mang nó vào bài tiếp theo để cải thiện dần thay vì làm mới từ đầu.

**Ghi chú nguồn:** Tài liệu biên soạn từ transcript, không phải bản chép lời nguyên văn. Các bài tập được thêm để người học thực hành.
