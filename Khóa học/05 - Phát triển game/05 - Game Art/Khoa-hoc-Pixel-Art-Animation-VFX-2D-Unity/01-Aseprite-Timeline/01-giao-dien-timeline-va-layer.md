# Bài 01 — Bật Timeline, tổ chức lớp vẽ

> Module: Làm chủ Timeline và hoạt ảnh Pixel Art  
> Mức độ: Nhập môn  
> Trích đoạn tham chiếu: T01 00:06–01:17 và 02:17–02:44

## Mục tiêu học tập

Sau bài này, bạn thực hành được quy trình **bật timeline, tổ chức lớp vẽ**, giải thích nguyên lý lựa chọn kỹ thuật và tự kiểm tra kết quả trong project.

## Trọng tâm
Timeline là bảng điều khiển **frame × layer**: cột tương ứng thời điểm, hàng tương ứng thành phần hình ảnh. Trong video, người hướng dẫn mở Timeline, thay đổi vị trí bảng, rồi tạo lớp bằng menu ngữ cảnh. Mỗi lớp là vùng chỉnh sửa độc lập; chỉ lớp được chọn mới nhận thao tác vẽ.

### Quy trình
1. Mở tài liệu Pixel Art có một nhân vật đơn giản. Bật Timeline qua menu giao diện của phần mềm (trong Aseprite thường dùng **Tab** để ẩn/hiện bảng; tên menu có thể đổi theo phiên bản).
2. Tìm khu vực danh sách layer, frame, điều khiển phát và tùy chọn Timeline. Kéo/đặt bảng sao cho bạn nhìn được cả canvas lẫn dãy frame.
3. Đổi `Layer 1` thành `Body`. Tạo thêm `Weapon`, `VFX`, `Shadow`. Đặt tên rõ thay vì `Layer 2`, `Layer 3`.
4. Vẽ vài pixel riêng trên mỗi lớp. Chọn lớp `Weapon` để thử chỉnh sửa; quan sát `Body` không thay đổi.
5. Thử biểu tượng con mắt để ẩn/hiện từng layer, rồi kiểm tra thao tác ẩn toàn bộ trong bảng.

### Lưu ý chất lượng
Đừng đưa cả nhân vật, vũ khí và hiệu ứng sáng vào cùng một layer: bạn sẽ khó xoay kiếm và thay đổi hiệu ứng. Ngược lại, chia quá nhiều layer li ti sẽ làm chậm thao tác. Tách theo **thành phần cần chuyển động độc lập**.

## Bài tập bắt buộc

1. Tạo cấu trúc 4 layer, thử ẩn và hiện từng lớp.
2. Lưu bản gốc `.ase` hoặc định dạng dự án tương đương.

## Tiêu chí hoàn thành

Tệp dự án mở lại giữ đúng lớp và người khác nhận biết ngay chức năng từng lớp.

## Tự kiểm tra

- Bước nào trong quy trình là điểm khó nhất, và bạn kiểm chứng nó bằng cách nào?
- Nếu bỏ một hiệu ứng, chuyển động chính còn dễ đọc không?
- Tham số hoặc thời điểm nào bạn sẽ điều chỉnh trước khi tối ưu hiệu năng?

## Liên hệ bài kế tiếp

Ghi lại một vấn đề quan sát được khi preview; mang nó vào bài tiếp theo để cải thiện dần thay vì làm mới từ đầu.

**Ghi chú nguồn:** Tài liệu biên soạn từ transcript, không phải bản chép lời nguyên văn. Các bài tập được thêm để người học thực hành.
