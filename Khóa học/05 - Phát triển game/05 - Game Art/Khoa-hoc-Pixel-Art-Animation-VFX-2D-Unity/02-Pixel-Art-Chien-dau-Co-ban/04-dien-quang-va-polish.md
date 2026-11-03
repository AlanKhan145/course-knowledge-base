# Bài 04 — Vẽ tia sáng, sparks và hoàn thiện combo

> Module: Thiết kế nhân vật và đòn chém Pixel Art  
> Mức độ: Nhập môn  
> Trích đoạn tham chiếu: T03 12:00–18:52

## Mục tiêu học tập

Sau bài này, bạn thực hành được quy trình **vẽ tia sáng, sparks và hoàn thiện combo**, giải thích nguyên lý lựa chọn kỹ thuật và tự kiểm tra kết quả trong project.

## Trọng tâm
Video dành phần sau để xử lý hồi phục, độ nảy của kiếm và các tia năng lượng. VFX nên làm **nổi bật chuyển động đã đúng**, không che mất hoạt ảnh nền.

### Quy trình
1. Đặt một lớp `VFX` riêng, thêm vệt sáng ngắn trên đường lưỡi kiếm tại khung contact.
2. Ở frame impact, thêm 1–3 tia văng ra theo hướng lực; trong 2 frame kế, các tia tách nhỏ và mờ dần.
3. Tạo chớp sáng một frame thật mạnh; giảm sáng ngay frame tiếp theo để giữ tương phản.
4. Dọn những pixel dư, thống nhất độ dày đường biên, kiểm tra kiếm khi quay về vị trí ban đầu.
5. Xem một lần ở canvas lớn, một lần ở kích thước hiển thị của game. Cảm giác “ngầu” ở mức zoom 800% chưa chắc dễ nhìn trên điện thoại.

### Sản phẩm
Một combo 2 chém và cú kết thúc đơn giản; tách các tag `attack_a`, `attack_b`, `finisher` nếu có mục đích dùng riêng trong engine.

## Bài tập bắt buộc

1. Xuất preview trước/sau VFX.
2. Giữ một bản chỉ có animation nhân vật để so sánh.

## Tiêu chí hoàn thành

Đòn đánh có điểm nhấn, không bị che sprite, hồi chiêu rõ.

## Tự kiểm tra

- Bước nào trong quy trình là điểm khó nhất, và bạn kiểm chứng nó bằng cách nào?
- Nếu bỏ một hiệu ứng, chuyển động chính còn dễ đọc không?
- Tham số hoặc thời điểm nào bạn sẽ điều chỉnh trước khi tối ưu hiệu năng?

## Liên hệ bài kế tiếp

Ghi lại một vấn đề quan sát được khi preview; mang nó vào bài tiếp theo để cải thiện dần thay vì làm mới từ đầu.

**Ghi chú nguồn:** Tài liệu biên soạn từ transcript, không phải bản chép lời nguyên văn. Các bài tập được thêm để người học thực hành.
