# Bài 01 — Thiết kế lại silhouette, dáng đứng và vũ khí

> Module: Thiết kế nhân vật và đòn chém Pixel Art  
> Mức độ: Nhập môn  
> Trích đoạn tham chiếu: T03 00:32–01:40

## Mục tiêu học tập

Sau bài này, bạn thực hành được quy trình **thiết kế lại silhouette, dáng đứng và vũ khí**, giải thích nguyên lý lựa chọn kỹ thuật và tự kiểm tra kết quả trong project.

## Trọng tâm
Video của nghệ sĩ Pixel Art bắt đầu bằng việc **thiết kế lại sprite** trước khi làm chuyển động. Tác giả dùng nền tối, vẽ silhouette trước; thử tỉ lệ, áo choàng, mắt và thanh kiếm lớn hơn để tạo dấu ấn.

### Quy trình
1. Tạo canvas làm việc và nền tương phản, phác nét đen một chiến binh cầm kiếm.
2. Chỉ kiểm tra bóng dáng ở kích thước game thực tế: kiếm có đủ rõ? đầu–thân–chân tách bạch? hướng nhìn dễ nhận ra?
3. Thử 2–3 phương án kiếm (dài, ngắn, bản rộng) và 2 tư thế (đứng thẳng, nghiêng về trước).
4. Sau khi chốt silhouette, thêm điểm nhận dạng bằng màu: mắt, khăn/dây trên đầu, áo choàng.
5. Phân lớp: `Head`, `Body`, `Cape`, `Sword`, `VFX`, `Shadow` nếu thành phần thực sự di chuyển độc lập.

### Nguyên lý
Đòn tấn công sẽ đẹp hơn nếu ở frame nhanh nhất người chơi vẫn nhận ra nhân vật. Tránh dùng nét tô và lấp lánh bù cho một silhouette khó đọc.

## Bài tập bắt buộc

1. Vẽ 3 silhouette đen trắng và chọn 1 phương án.
2. Ghi tiêu chí lựa chọn (độ rõ, hướng tấn công, đặc trưng).

## Tiêu chí hoàn thành

Người xem nhận ra tư thế và vũ khí ở 100% zoom.

## Tự kiểm tra

- Bước nào trong quy trình là điểm khó nhất, và bạn kiểm chứng nó bằng cách nào?
- Nếu bỏ một hiệu ứng, chuyển động chính còn dễ đọc không?
- Tham số hoặc thời điểm nào bạn sẽ điều chỉnh trước khi tối ưu hiệu năng?

## Liên hệ bài kế tiếp

Ghi lại một vấn đề quan sát được khi preview; mang nó vào bài tiếp theo để cải thiện dần thay vì làm mới từ đầu.

**Ghi chú nguồn:** Tài liệu biên soạn từ transcript, không phải bản chép lời nguyên văn. Các bài tập được thêm để người học thực hành.
