# Bài 02 — Hoạt ảnh nạp kiếm, biến hình và xoay tròn trên không

> Module: Tạo tuyệt kỹ nhiều giai đoạn với nhảy xoay, đập đất và laser  
> Mức độ: Trung cấp / nâng cao  
> Trích đoạn tham chiếu: T04 00:35–05:20

## Mục tiêu học tập

Sau bài này, bạn thực hành được quy trình **hoạt ảnh nạp kiếm, biến hình và xoay tròn trên không**, giải thích nguyên lý lựa chọn kỹ thuật và tự kiểm tra kết quả trong project.

## Trọng tâm
Trong video, thanh kiếm được biến đổi khi tích năng lượng. Tác giả dùng sắc độ thấp → sáng và tạo **ball spin** bằng vài hình cầu màu xen kẽ, lật nhanh để mô phỏng xoay.

### Quy trình
1. Ở pose charge, hạ thân, cúi đầu và điều chỉnh áo choàng đúng khối lượng.
2. Trên lớp kiếm tạo 2–3 biến thể hình dáng: bình thường → mở ra → nạp đầy. Dùng lớp `VFX` chứa vùng sáng riêng.
3. Tạo frame trước khi nhảy với độ nén mạnh, rồi frame nhấc khỏi mặt đất.
4. Trong pha xoay, thiết kế hai silhouette dạng quả cầu với nét sáng lệch nhau; xen kẽ nhanh để tạo cảm giác quay.
5. Đặt **độ dài frame** sao cho pha nạp được nhận biết, nhưng cú quay đủ ngắn để tạo động năng.

### Kiểm tra
Phân biệt rõ nhân vật đang xoay chứ không biến thành một vật thể lạ. Màu và hướng chuyển động phải còn liên hệ với thiết kế gốc.

## Bài tập bắt buộc

1. Dựng 2 biến thể ball spin và 3 cấp sáng kiếm.
2. Tạo preview không có VFX phụ.

## Tiêu chí hoàn thành

Sự nén năng lượng rõ, cú xoay mạnh mà không rối hình.

## Tự kiểm tra

- Bước nào trong quy trình là điểm khó nhất, và bạn kiểm chứng nó bằng cách nào?
- Nếu bỏ một hiệu ứng, chuyển động chính còn dễ đọc không?
- Tham số hoặc thời điểm nào bạn sẽ điều chỉnh trước khi tối ưu hiệu năng?

## Liên hệ bài kế tiếp

Ghi lại một vấn đề quan sát được khi preview; mang nó vào bài tiếp theo để cải thiện dần thay vì làm mới từ đầu.

**Ghi chú nguồn:** Tài liệu biên soạn từ transcript, không phải bản chép lời nguyên văn. Các bài tập được thêm để người học thực hành.
