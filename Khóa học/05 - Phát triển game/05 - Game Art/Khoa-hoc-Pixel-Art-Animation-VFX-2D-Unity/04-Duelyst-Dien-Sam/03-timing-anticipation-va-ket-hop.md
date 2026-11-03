# Bài 03 — Canh thời điểm nhân vật, vật thể, điện trường

> Module: Animation nhân vật và hiệu ứng điện kiểu Duelyst  
> Mức độ: Trung cấp / nâng cao  
> Trích đoạn tham chiếu: T05 02:05–05:05 và 09:00–14:19

## Mục tiêu học tập

Sau bài này, bạn thực hành được quy trình **canh thời điểm nhân vật, vật thể, điện trường**, giải thích nguyên lý lựa chọn kỹ thuật và tự kiểm tra kết quả trong project.

## Trọng tâm
Tia sét mạnh đến từ **sự đồng bộ**: nhân vật mở tay, đá chuyển vào vị trí, điện bật, rồi cả cảnh hạ năng lượng. Bài học kết hợp tư thế chính và VFX thô để phát hiện sớm phần nào không ăn khớp.

### Quy trình
1. Trên một bảng timeline, chia track `Character`, `Rocks`, `Lightning`, `Flash`.
2. Gắn mốc `release`: cánh tay đạt tư thế mở, tảng đá ở vị trí mục tiêu, sét sáng nhất.
3. Xếp frame trước đó cho anticipation (tư thế nén, vật thể hội tụ); sau mốc là tắt sáng, hạ vai, trở idle.
4. Preview silhouette nhân vật riêng, sét riêng, sau đó cả hai cùng nhau.
5. Chỉnh nhịp nếu cú nổ xảy ra trước khi tư thế giải phóng hoặc đá chưa đến vị trí hợp lý.

### Mở rộng có nhãn
Có thể gắn các mốc này thành animation events trong Unity; cách tích hợp engine được giảng riêng ở Module 08, không phải nội dung thao tác nguyên văn của video.

## Bài tập bắt buộc

1. Thiết lập một bảng cue sheet các thời điểm.
2. Bàn giao animation sét và chuyển động vật thể.

## Tiêu chí hoàn thành

Cú giải phóng trông đồng nhất giữa mọi thành phần.

## Tự kiểm tra

- Bước nào trong quy trình là điểm khó nhất, và bạn kiểm chứng nó bằng cách nào?
- Nếu bỏ một hiệu ứng, chuyển động chính còn dễ đọc không?
- Tham số hoặc thời điểm nào bạn sẽ điều chỉnh trước khi tối ưu hiệu năng?

## Liên hệ bài kế tiếp

Ghi lại một vấn đề quan sát được khi preview; mang nó vào bài tiếp theo để cải thiện dần thay vì làm mới từ đầu.

**Ghi chú nguồn:** Tài liệu biên soạn từ transcript, không phải bản chép lời nguyên văn. Các bài tập được thêm để người học thực hành.
