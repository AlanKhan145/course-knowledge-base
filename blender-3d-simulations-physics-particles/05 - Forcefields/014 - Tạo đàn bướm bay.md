# Module 05 — Forcefields — Bài 014: Tạo đàn bướm bay

| Thuộc tính | Nội dung |
|---|---|
| Thời lượng tham khảo | 18:26 |
| Hệ thống | Force, Wind, Vortex, Turbulence, Drag, Curve Guide và các force field liên quan |
| Trọng tâm | điều khiển hướng, nhiễu, xoáy và lực cản |

> Đây là lesson note thực hành được biên soạn từ tên bài và curriculum. Không phải bản chép lời giảng.

## Mục tiêu bài học

- Hiểu vai trò của **Tạo đàn bướm bay** trong pipeline điều khiển hướng, nhiễu, xoáy và lực cản.
- Biết xác định object, collection hoặc solver cần chuẩn bị trước khi thực hành.
- Có thể chạy một test ngắn, quan sát kết quả và ghi lại nguyên nhân khi kết quả chưa đúng.

## Trọng tâm kỹ thuật

- Kiểm tra một cá thể trước, sau đó thêm flock, tránh va chạm, leader hoặc goal và quan sát từ camera.
- Giữ workflow theo thứ tự: **setup → test ngắn → tinh chỉnh → cache → render hoặc export**.
- Khi thay đổi một thông số, ghi lại frame range và kết quả để có thể quay lại phiên bản ổn định.

## Bài thực hành

1. Mở file thực hành của module và tạo một scene test riêng cho bài **Tạo đàn bướm bay**.
2. Kiểm tra một cá thể trước, sau đó thêm flock, tránh va chạm, leader hoặc goal và quan sát từ camera.
3. Chạy lại từ đầu timeline, kiểm tra viewport từ góc camera và lưu một phiên bản ổn định.

## Lỗi thường gặp

- nhiều field mạnh cùng lúc.
- falloff quá rộng.
- turbulence làm mất hướng chuyển động chính.
- Thay quá nhiều thông số cùng lúc nên không xác định được nguyên nhân.

## Checklist

- [ ] Đã tạo scene hoặc collection test riêng.
- [ ] Đã kiểm tra scale, normals và frame range trước khi chạy.
- [ ] Đã xem kết quả ở viewport và từ góc camera.
- [ ] Đã lưu file sau khi cache hoặc sau khi đạt kết quả ổn định.

Quay lại [README của module](README.md).

