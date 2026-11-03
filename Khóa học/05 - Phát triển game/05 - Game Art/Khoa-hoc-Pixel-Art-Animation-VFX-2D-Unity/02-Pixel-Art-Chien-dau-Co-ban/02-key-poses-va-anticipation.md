# Bài 02 — Dựng key pose: chuẩn bị, chém, thu kiếm

> Module: Thiết kế nhân vật và đòn chém Pixel Art  
> Mức độ: Nhập môn  
> Trích đoạn tham chiếu: T03 01:47–05:16

## Mục tiêu học tập

Sau bài này, bạn thực hành được quy trình **dựng key pose: chuẩn bị, chém, thu kiếm**, giải thích nguyên lý lựa chọn kỹ thuật và tự kiểm tra kết quả trong project.

## Trọng tâm
Tác giả lên kế hoạch hai nhát chém và một cú lao mạnh. Trước khi tô hiệu ứng, hãy làm rõ **key poses**: `idle → anticipation → contact/follow-through → recovery`. Khung chuẩn bị hạ thấp trọng tâm, nghiêng đầu và kéo kiếm; khung sau đòn đưa kiếm sang phía đối diện.

### Quy trình
1. Giữ frame đầu là `idle`, nhân bản thành `anticipation`; hạ đầu/thân 1–3 pixel, đưa kiếm về phía sau.
2. Thêm `slash_1_contact`: cho kiếm chuyển qua trước thân, nghiêng người thuận hướng đánh; thay đổi lớp che phủ và z-order ở cel khi cần.
3. Thêm `slash_2_contact`: thấp người hơn, kéo vũ khí sang đường chém tiếp theo.
4. Thêm khung hồi chiêu `recovery`: kiếm có thể nảy nhẹ trước khi trở về `idle`.
5. Chạy animation chỉ với key pose để kiểm tra **đường tác động**; chưa vẽ hạt, lóe sáng, vệt kiếm.

### Bảo toàn hình thể
Khi chỉnh áo choàng/đầu, không chỉ xóa pixel ở một phía: hãy dịch khối lượng hình sang phía khác để nhân vật không vô tình co nhỏ. Mắt và dây đội đầu cần giữ vị trí tương đối nhất quán giữa các pose.

## Bài tập bắt buộc

1. Tạo ít nhất 5 key pose cho combo 2 nhát.
2. Xuất bản xem thử chỉ gồm silhouette.

## Tiêu chí hoàn thành

Không cần VFX vẫn phân biệt được khung chuẩn bị, chém và kết thúc.

## Tự kiểm tra

- Bước nào trong quy trình là điểm khó nhất, và bạn kiểm chứng nó bằng cách nào?
- Nếu bỏ một hiệu ứng, chuyển động chính còn dễ đọc không?
- Tham số hoặc thời điểm nào bạn sẽ điều chỉnh trước khi tối ưu hiệu năng?

## Liên hệ bài kế tiếp

Ghi lại một vấn đề quan sát được khi preview; mang nó vào bài tiếp theo để cải thiện dần thay vì làm mới từ đầu.

**Ghi chú nguồn:** Tài liệu biên soạn từ transcript, không phải bản chép lời nguyên văn. Các bài tập được thêm để người học thực hành.
