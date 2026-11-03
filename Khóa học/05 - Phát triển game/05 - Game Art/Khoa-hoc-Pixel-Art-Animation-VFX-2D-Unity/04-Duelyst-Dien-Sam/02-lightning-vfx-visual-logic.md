# Bài 02 — Thiết kế tia sét bằng quan sát trực quan

> Module: Animation nhân vật và hiệu ứng điện kiểu Duelyst  
> Mức độ: Trung cấp / nâng cao  
> Trích đoạn tham chiếu: T05 03:45–06:00 và 12:00–14:00

## Mục tiêu học tập

Sau bài này, bạn thực hành được quy trình **thiết kế tia sét bằng quan sát trực quan**, giải thích nguyên lý lựa chọn kỹ thuật và tự kiểm tra kết quả trong project.

## Trọng tâm
Tác giả phân tích tia sét từ góc độ hình ảnh: xuất hiện gần như tức thì, có nhánh mảnh, vùng lõi sáng và tắt dần. Hoạt hình game có thể cách điệu thêm chút chuyển động để sinh động hơn thực tế.

### Quy trình
1. Vẽ một đường sét chính theo 3 điểm neo; thêm 2–4 nhánh phụ ngắn.
2. Phân tầng sắc độ: **lõi sáng gần trắng → thân xanh/tím → quầng nhạt**.
3. Dựng pha `anticipation` bằng chuyển động của nhân vật và vật thể; **không** kéo dài hình sét từ từ như dây thừng trừ khi đang cố tình cách điệu.
4. Frame đánh: chớp sáng mạnh, có thể kèm flash toàn màn hình rất ngắn tùy cường độ.
5. Pha tiêu tán: nhánh mảnh biến mất trước, lõi chính giảm sáng sau; thử giữ hình sét gần như cùng vị trí rồi giảm alpha/độ dày.

### Sai lầm
Đường zigzag vàng đồng đều, không nhánh, hiển thị quá lâu và cùng cường độ ở mọi frame thường đọc như một biểu tượng, thiếu điện năng.

## Bài tập bắt buộc

1. Tạo 4–6 frame tia sét: xuất hiện, giữ, tắt.
2. So sánh bản có và không có glow.

## Tiêu chí hoàn thành

Đòn điện có flash rõ ràng, không bị cảm giác dây đang uốn lượn.

## Tự kiểm tra

- Bước nào trong quy trình là điểm khó nhất, và bạn kiểm chứng nó bằng cách nào?
- Nếu bỏ một hiệu ứng, chuyển động chính còn dễ đọc không?
- Tham số hoặc thời điểm nào bạn sẽ điều chỉnh trước khi tối ưu hiệu năng?

## Liên hệ bài kế tiếp

Ghi lại một vấn đề quan sát được khi preview; mang nó vào bài tiếp theo để cải thiện dần thay vì làm mới từ đầu.

**Ghi chú nguồn:** Tài liệu biên soạn từ transcript, không phải bản chép lời nguyên văn. Các bài tập được thêm để người học thực hành.
