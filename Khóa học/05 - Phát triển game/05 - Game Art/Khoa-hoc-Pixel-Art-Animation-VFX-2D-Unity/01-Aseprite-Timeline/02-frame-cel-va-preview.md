# Bài 02 — Tạo frame, sao chép cel, xem thử chuyển động

> Module: Làm chủ Timeline và hoạt ảnh Pixel Art  
> Mức độ: Nhập môn  
> Trích đoạn tham chiếu: T01 01:17–01:41 và 03:07–03:49

## Mục tiêu học tập

Sau bài này, bạn thực hành được quy trình **tạo frame, sao chép cel, xem thử chuyển động**, giải thích nguyên lý lựa chọn kỹ thuật và tự kiểm tra kết quả trong project.

## Trọng tâm
**Frame** xác định thời điểm; **cel** là nội dung của một layer tại frame cụ thể. Video trình bày hai cách tạo ô thời gian mới: khung hình trống và sao chép khung trước. Sao chép phù hợp với thay đổi nhỏ (thở, bước đi); khung trống thuận tiện khi tạo tư thế hoàn toàn khác.

### Quy trình
1. Chuẩn bị nhân vật đứng yên ở frame đầu.
2. Tạo frame kế tiếp từ bản sao, di chuyển thân lên 1 pixel và tay sang phải 1 pixel. Tạo frame thứ ba để cơ thể hạ xuống; frame thứ tư trở về gần tư thế đầu.
3. Nhìn lần lượt từng frame để kiểm tra đầu, thân, vũ khí có nhảy vị trí không chủ ý.
4. Nhấn nút **Play** trong Timeline. Nếu chuyển động quá giật, thêm frame trung gian; nếu quá chậm, rút ngắn thời gian frame.
5. Lưu hai nhóm riêng: `idle` và `attack` (sẽ gắn tag ở bài 03).

### Phân biệt quan trọng
`Duplicate frame` không giống `New empty frame`. Khi bản sao có nội dung liên kết (linked cel), chỉnh sửa có thể ảnh hưởng nhiều frame; hãy xác nhận bạn đang dùng cel độc lập trước khi tô lại.

### Mẫu idle bốn frame
`đứng yên → nâng vai → hạ vai → về trung tính`. Mọi thay đổi chỉ nên vài pixel để giữ nhân dạng.

## Bài tập bắt buộc

1. Vẽ chuỗi idle 4 frame và một động tác giơ kiếm 3 frame.
2. Xuất bản preview GIF nếu công cụ hỗ trợ.

## Tiêu chí hoàn thành

Người xem nhận ra hành động mà không cần chú thích.

## Tự kiểm tra

- Bước nào trong quy trình là điểm khó nhất, và bạn kiểm chứng nó bằng cách nào?
- Nếu bỏ một hiệu ứng, chuyển động chính còn dễ đọc không?
- Tham số hoặc thời điểm nào bạn sẽ điều chỉnh trước khi tối ưu hiệu năng?

## Liên hệ bài kế tiếp

Ghi lại một vấn đề quan sát được khi preview; mang nó vào bài tiếp theo để cải thiện dần thay vì làm mới từ đầu.

**Ghi chú nguồn:** Tài liệu biên soạn từ transcript, không phải bản chép lời nguyên văn. Các bài tập được thêm để người học thực hành.
