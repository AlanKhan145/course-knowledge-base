# Module 08 — Fire and Smoke — Bài 013: Tạo cảnh xe phát nổ

| Thuộc tính | Nội dung |
|---|---|
| Thời lượng tham khảo | 45:06 |
| Hệ thống | Fluid Domain, Flow, Effector, Fire, Smoke, cache và volume render |
| Trọng tâm | lửa, khói, khí nóng và simulation thể tích |

> Đây là lesson note thực hành được biên soạn từ tên bài và curriculum. Không phải bản chép lời giảng.

## Mục tiêu bài học

- Hiểu vai trò của **Tạo cảnh xe phát nổ** trong pipeline lửa, khói, khí nóng và simulation thể tích.
- Biết xác định object, collection hoặc solver cần chuẩn bị trước khi thực hành.
- Có thể chạy một test ngắn, quan sát kết quả và ghi lại nguyên nhân khi kết quả chưa đúng.

## Trọng tâm kỹ thuật

- Tách chassis, bánh xe và địa hình thành các collection rõ ràng; kiểm tra constraint trước khi thêm asset.
- Giữ workflow theo thứ tự: **setup → test ngắn → tinh chỉnh → cache → render hoặc export**.
- Khi thay đổi một thông số, ghi lại frame range và kết quả để có thể quay lại phiên bản ổn định.

## Bài thực hành

1. Mở file thực hành của module và tạo một scene test riêng cho bài **Tạo cảnh xe phát nổ**.
2. Tách chassis, bánh xe và địa hình thành các collection rõ ràng; kiểm tra constraint trước khi thêm asset.
3. Chạy lại từ đầu timeline, kiểm tra viewport từ góc camera và lưu một phiên bản ổn định.

## Lỗi thường gặp

- Flow nằm ngoài domain.
- domain quá lớn làm cache chậm.
- material volume hoặc cache chưa được cập nhật.
- Thay quá nhiều thông số cùng lúc nên không xác định được nguyên nhân.

## Checklist

- [ ] Đã tạo scene hoặc collection test riêng.
- [ ] Đã kiểm tra scale, normals và frame range trước khi chạy.
- [ ] Đã xem kết quả ở viewport và từ góc camera.
- [ ] Đã lưu file sau khi cache hoặc sau khi đạt kết quả ổn định.

Quay lại [README của module](README.md).

