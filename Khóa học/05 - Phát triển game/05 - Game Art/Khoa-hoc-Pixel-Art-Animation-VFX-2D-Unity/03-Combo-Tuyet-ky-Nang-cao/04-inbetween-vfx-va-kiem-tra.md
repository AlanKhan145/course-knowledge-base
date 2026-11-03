# Bài 04 — Tối ưu in-between và tinh chỉnh nhịp tuyệt kỹ

> Module: Tạo tuyệt kỹ nhiều giai đoạn với nhảy xoay, đập đất và laser  
> Mức độ: Trung cấp / nâng cao  
> Trích đoạn tham chiếu: T04 12:30–46:24

## Mục tiêu học tập

Sau bài này, bạn thực hành được quy trình **tối ưu in-between và tinh chỉnh nhịp tuyệt kỹ**, giải thích nguyên lý lựa chọn kỹ thuật và tự kiểm tra kết quả trong project.

## Trọng tâm
Phần lớn thời lượng video được dành cho thử–xem–sửa: thêm frame nối chuyển động, loại chi tiết vướng, chỉnh cú nhảy, tinh gọn pose trước laser và bổ sung các hạt bắn.

### Quy trình kiểm thử
1. Dùng ba lượt xem: chỉ key pose; key pose + in-between; toàn bộ + VFX.
2. Tại từng chỗ giật hình, xác định nguồn: tư thế, z-order, khoảng cách dịch chuyển hay duration.
3. Chỉ thêm frame khi nó cải thiện **độ rõ**; tránh quá nhiều frame làm mất lực đánh.
4. Xử lý bụi/đốm sáng phụ bằng lớp riêng để sửa mà không chạm vào nhân vật.
5. Tạo phiên bản rút ngắn phù hợp gameplay: người chơi không nên bị khóa điều khiển quá lâu vì hoạt cảnh.

### Bảng đề nghị tự lập
| Pha | Mục tiêu hình ảnh | Điều cần kiểm tra |
|---|---|---|
| Charge | Năng lượng đang tăng | Màu/size tăng có kiểm soát |
| Spin | Tốc độ cao | Đường di chuyển liền mạch |
| Impact | Cú đánh có sức nặng | Chớp đúng thời điểm chạm |
| Beam | Hướng công kích rõ | Tia không che nguồn phát |
| Recovery | Sẵn sàng lượt kế | Kết thúc mượt |

Các mốc trên là cấu trúc bài tập hóa từ transcript, không phải số frame bắt buộc.

## Bài tập bắt buộc

1. Nộp clip 2 phiên bản: đầy đủ và rút ngắn.
2. Giải thích ít nhất 3 lần sửa theo quan sát preview.

## Tiêu chí hoàn thành

Không còn đoạn gãy chuyển động lớn; người xem hiểu được các pha.

## Tự kiểm tra

- Bước nào trong quy trình là điểm khó nhất, và bạn kiểm chứng nó bằng cách nào?
- Nếu bỏ một hiệu ứng, chuyển động chính còn dễ đọc không?
- Tham số hoặc thời điểm nào bạn sẽ điều chỉnh trước khi tối ưu hiệu năng?

## Liên hệ bài kế tiếp

Ghi lại một vấn đề quan sát được khi preview; mang nó vào bài tiếp theo để cải thiện dần thay vì làm mới từ đầu.

**Ghi chú nguồn:** Tài liệu biên soạn từ transcript, không phải bản chép lời nguyên văn. Các bài tập được thêm để người học thực hành.
