# Bài 03 — Onion Skin và gắn thẻ hoạt ảnh

> Module: Làm chủ Timeline và hoạt ảnh Pixel Art  
> Mức độ: Nhập môn  
> Trích đoạn tham chiếu: T01 01:42–02:11 và 03:55–04:42

## Mục tiêu học tập

Sau bài này, bạn thực hành được quy trình **onion skin và gắn thẻ hoạt ảnh**, giải thích nguyên lý lựa chọn kỹ thuật và tự kiểm tra kết quả trong project.

## Trọng tâm
**Onion Skin** hiển thị ảnh mờ của frame lân cận, giúp định vị quỹ đạo. Trong video, độ mờ được điều chỉnh ở bảng Timeline. **Animation Tag** đánh dấu một khoảng frame có tên, màu và điểm bắt đầu/kết thúc, giúp chia nhiều hành động trong một tệp.

### Quy trình
1. Bật Onion Skin và chọn độ mờ vừa đủ thấy bóng cũ nhưng không lẫn với nét đang vẽ.
2. Chọn frame giữa, di chuyển vũ khí 3–5 pixel trên cung chuyển động. So sánh bóng frame trước và frame mới.
3. Tạo thẻ `idle`, đặt khoảng frame cho chu kỳ đứng. Tạo `attack`, đặt khoảng cho đòn đánh.
4. Gán màu dễ phân biệt, ví dụ xanh lá cho idle và cam cho attack. Kéo lại biên tag khi thêm hoặc bớt frame.
5. Phát riêng từng tag, kiểm tra frame cuối có khớp chuyển về frame đầu hay không nếu cần lặp.

### Lỗi thường gặp
Bóng Onion Skin quá đậm khiến bạn vẽ đè lên các pixel không thuộc frame hiện tại. Tag chồng khoảng cũng dễ làm sai chuỗi khi xuất sprite sheet. Đối chiếu tên, khoảng frame và chế độ loop trước khi bàn giao.

## Bài tập bắt buộc

1. Tạo tag `idle` 1–4 và `attack` 5–8.
2. Thử hai mức opacity, ghi lại mức dễ thao tác hơn.

## Tiêu chí hoàn thành

Timeline có ít nhất 2 tag; một người khác có thể xác định đúng điểm đầu và cuối của mỗi animation.

## Tự kiểm tra

- Bước nào trong quy trình là điểm khó nhất, và bạn kiểm chứng nó bằng cách nào?
- Nếu bỏ một hiệu ứng, chuyển động chính còn dễ đọc không?
- Tham số hoặc thời điểm nào bạn sẽ điều chỉnh trước khi tối ưu hiệu năng?

## Liên hệ bài kế tiếp

Ghi lại một vấn đề quan sát được khi preview; mang nó vào bài tiếp theo để cải thiện dần thay vì làm mới từ đầu.

**Ghi chú nguồn:** Tài liệu biên soạn từ transcript, không phải bản chép lời nguyên văn. Các bài tập được thêm để người học thực hành.
