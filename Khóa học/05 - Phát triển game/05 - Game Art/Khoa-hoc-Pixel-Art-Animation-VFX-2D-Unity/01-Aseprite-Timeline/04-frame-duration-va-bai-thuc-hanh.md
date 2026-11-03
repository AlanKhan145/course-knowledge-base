# Bài 04 — Chỉnh thời lượng frame và bài tập hoạt ảnh hoàn chỉnh

> Module: Làm chủ Timeline và hoạt ảnh Pixel Art  
> Mức độ: Nhập môn  
> Trích đoạn tham chiếu: T01 04:48–05:31

## Mục tiêu học tập

Sau bài này, bạn thực hành được quy trình **chỉnh thời lượng frame và bài tập hoạt ảnh hoàn chỉnh**, giải thích nguyên lý lựa chọn kỹ thuật và tự kiểm tra kết quả trong project.

## Trọng tâm
Mỗi frame có **duration** (thường tính bằng mili giây). Duration nhỏ nghĩa là frame tồn tại ngắn hơn, nên cảm giác chuyển động nhanh hơn. Video dùng chọn nhiều frame để thay đổi tốc độ toàn chuỗi thay vì sửa lẻ từng frame.

### Thử nghiệm định lượng
- Dùng 4 frame, đặt mỗi frame 200 ms: chu kỳ kéo dài 800 ms.
- Đổi mỗi frame thành 100 ms: chu kỳ còn 400 ms, nhanh gấp đôi.
- Giữ khung tấn công chính 50–80 ms và khung kết thúc 150–250 ms (số minh họa thêm để luyện tập, không phải thông số bắt buộc từ video).

### Quy trình
1. Tạo animation `idle` 4 frame và `attack` 5–8 frame.
2. Chọn toàn bộ frame của `idle`, mở thuộc tính frame và thay `duration` thống nhất.
3. Thử bố cục thời gian **chuẩn bị chậm → đánh nhanh → hồi phục chậm** cho `attack`.
4. Chạy Preview, ghi một bảng: frame, tư thế, duration, nhận xét.
5. Xuất GIF/sprite sheet và giữ tệp nguồn có layer, tag, frame.

### Bài thực hành cuối module
Tạo một nhân vật 32×32 hoặc 64×64 pixel có 2 tag, ít nhất 4 layer, có Onion Skin được dùng khi dựng và thời lượng frame được chỉnh riêng.

## Bài tập bắt buộc

1. Bàn giao `.ase`, `.gif` và bảng thời lượng frame.
2. Giải thích tại sao không phải frame nào cũng nên có độ dài bằng nhau.

## Tiêu chí hoàn thành

Chuyển động có nhịp dễ đọc ở tốc độ phát thực tế; tag và layer vẫn nguyên vẹn.

## Tự kiểm tra

- Bước nào trong quy trình là điểm khó nhất, và bạn kiểm chứng nó bằng cách nào?
- Nếu bỏ một hiệu ứng, chuyển động chính còn dễ đọc không?
- Tham số hoặc thời điểm nào bạn sẽ điều chỉnh trước khi tối ưu hiệu năng?

## Liên hệ bài kế tiếp

Ghi lại một vấn đề quan sát được khi preview; mang nó vào bài tiếp theo để cải thiện dần thay vì làm mới từ đầu.

**Ghi chú nguồn:** Tài liệu biên soạn từ transcript, không phải bản chép lời nguyên văn. Các bài tập được thêm để người học thực hành.
