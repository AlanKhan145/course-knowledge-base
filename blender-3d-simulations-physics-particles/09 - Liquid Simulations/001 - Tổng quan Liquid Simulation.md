# Module 09 — Liquid Simulations — Bài 001: Tổng quan Liquid Simulation

| Thuộc tính | Nội dung |
|---|---|
| Thời lượng tham khảo | 13:51 |
| Hệ thống | Liquid Domain, Flow, Effector, liquid particles, liquid mesh và cache |
| Trọng tâm | dòng chảy, độ nhớt, bề mặt chất lỏng và splash |

> Đây là lesson note thực hành được biên soạn từ tên bài và curriculum. Không phải bản chép lời giảng.

## Mục tiêu bài học

- Hiểu vai trò của **Tổng quan Liquid Simulation** trong pipeline dòng chảy, độ nhớt, bề mặt chất lỏng và splash.
- Biết xác định object, collection hoặc solver cần chuẩn bị trước khi thực hành.
- Có thể chạy một test ngắn, quan sát kết quả và ghi lại nguyên nhân khi kết quả chưa đúng.

## Trọng tâm kỹ thuật

- Quan sát liquid particles trước khi tạo mesh; thử hai mức viscosity và lưu lại khác biệt trong cùng frame range.
- Giữ workflow theo thứ tự: **setup → test ngắn → tinh chỉnh → cache → render hoặc export**.
- Khi thay đổi một thông số, ghi lại frame range và kết quả để có thể quay lại phiên bản ổn định.

## Bài thực hành

1. Mở file thực hành của module và tạo một scene test riêng cho bài **Tổng quan Liquid Simulation**.
2. Quan sát liquid particles trước khi tạo mesh; thử hai mức viscosity và lưu lại khác biệt trong cùng frame range.
3. Chạy lại từ đầu timeline, kiểm tra viewport từ góc camera và lưu một phiên bản ổn định.

## Lỗi thường gặp

- scale domain hoặc flow sai.
- tạo mesh final quá sớm.
- cache cũ không khớp với setup hiện tại.
- Thay quá nhiều thông số cùng lúc nên không xác định được nguyên nhân.

## Checklist

- [ ] Đã tạo scene hoặc collection test riêng.
- [ ] Đã kiểm tra scale, normals và frame range trước khi chạy.
- [ ] Đã xem kết quả ở viewport và từ góc camera.
- [ ] Đã lưu file sau khi cache hoặc sau khi đạt kết quả ổn định.

Quay lại [README của module](README.md).

