# Bài 02 — Phân biệt Emission liên tục và Burst một lần

> Module: Hệ thống hạt 2D bằng sprite trong Unity  
> Mức độ: Trung cấp / nâng cao  
> Trích đoạn tham chiếu: T02 02:22–03:45

## Mục tiêu học tập

Sau bài này, bạn thực hành được quy trình **phân biệt emission liên tục và burst một lần**, giải thích nguyên lý lựa chọn kỹ thuật và tự kiểm tra kết quả trong project.

## Trọng tâm
Hạt trang trí liên tục (hoa rơi, mưa) thường dùng **Rate over Time** và loop; hiệu ứng đánh trúng (nổ, chớp) cần **Burst** ngắn và không loop.

### Quy trình
1. Với `FX_Flowers`, bật `Looping`, cấu hình `Emission > Rate over Time` để hạt xuất hiện thường xuyên.
2. Đổi `Shape` theo vùng phát mong muốn, thử bán kính và góc để hoa rơi nhẹ từ phía trên.
3. Nhân đôi thành `FX_Explosion`, tắt `Looping`, đặt `Duration` ngắn và `Rate over Time` về 0.
4. Thêm một `Burst` phát khoảng hạt tại t=0; thử min/max count để có biến thiên.
5. Ngẫu nhiên hóa trong một khoảng hợp lý `Start Speed`, `Start Lifetime`, `Start Size`, `Start Rotation`; xem 10 lần phát để tránh cảm giác máy móc.

### So sánh
`Rate over Time = dòng chảy` và `Burst = vụ bùng nổ`. Đừng chỉ tăng Rate over Time để mô phỏng cú nổ một lần; hạt sẽ bị sinh thêm ngoài thời điểm va chạm.

## Bài tập bắt buộc

1. Thiết lập 1 prefab loop, 1 prefab burst.
2. Quay 2 clip ngắn ở cùng camera.

## Tiêu chí hoàn thành

Prefab burst không tự lặp lại; prefab loop đều và có biến thiên.

## Tự kiểm tra

- Bước nào trong quy trình là điểm khó nhất, và bạn kiểm chứng nó bằng cách nào?
- Nếu bỏ một hiệu ứng, chuyển động chính còn dễ đọc không?
- Tham số hoặc thời điểm nào bạn sẽ điều chỉnh trước khi tối ưu hiệu năng?

## Liên hệ bài kế tiếp

Ghi lại một vấn đề quan sát được khi preview; mang nó vào bài tiếp theo để cải thiện dần thay vì làm mới từ đầu.

**Ghi chú nguồn:** Tài liệu biên soạn từ transcript, không phải bản chép lời nguyên văn. Các bài tập được thêm để người học thực hành.
