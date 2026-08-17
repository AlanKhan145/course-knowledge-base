# Module 07 — Dynamic Paint — Bài 005: Brush Settings

| Thuộc tính | Nội dung |
|---|---|
| Thời lượng tham khảo | 6:59 |
| Hệ thống | Dynamic Paint Canvas, Brush, Surface, source, velocity và output |
| Trọng tâm | dấu vết, màu, displacement, sóng và splash |

> Đây là lesson note thực hành được biên soạn từ tên bài và curriculum. Không phải bản chép lời giảng.

## Mục tiêu bài học

- Hiểu vai trò của **Brush Settings** trong pipeline dấu vết, màu, displacement, sóng và splash.
- Biết xác định object, collection hoặc solver cần chuẩn bị trước khi thực hành.
- Có thể chạy một test ngắn, quan sát kết quả và ghi lại nguyên nhân khi kết quả chưa đúng.

## Trọng tâm kỹ thuật

- Dựng một scene test nhỏ cho chủ đề “Brush Settings”, kiểm tra kết quả ở viewport rồi mới đưa vào project chính.
- Giữ workflow theo thứ tự: **setup → test ngắn → tinh chỉnh → cache → render hoặc export**.
- Khi thay đổi một thông số, ghi lại frame range và kết quả để có thể quay lại phiên bản ổn định.

## Bài thực hành

1. Mở file thực hành của module và tạo một scene test riêng cho bài **Brush Settings**.
2. Dựng một scene test nhỏ cho chủ đề “Brush Settings”, kiểm tra kết quả ở viewport rồi mới đưa vào project chính.
3. Chạy lại từ đầu timeline, kiểm tra viewport từ góc camera và lưu một phiên bản ổn định.

## Lỗi thường gặp

- Canvas và Brush bị đảo vai trò.
- frame range không khớp.
- đổi chuyển động nhưng quên cache lại.
- Thay quá nhiều thông số cùng lúc nên không xác định được nguyên nhân.

## Checklist

- [ ] Đã tạo scene hoặc collection test riêng.
- [ ] Đã kiểm tra scale, normals và frame range trước khi chạy.
- [ ] Đã xem kết quả ở viewport và từ góc camera.
- [ ] Đã lưu file sau khi cache hoặc sau khi đạt kết quả ổn định.

Quay lại [README của module](README.md).

