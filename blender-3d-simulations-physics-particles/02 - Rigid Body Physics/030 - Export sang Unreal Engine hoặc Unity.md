# Module 02 — Rigid Body Physics — Bài 030: Export sang Unreal Engine hoặc Unity

| Thuộc tính | Nội dung |
|---|---|
| Thời lượng tham khảo | 13:05 |
| Hệ thống | Rigid Body World, collision shape, constraint, cache và rigid body solver |
| Trọng tâm | vật thể cứng, va chạm và cơ cấu liên kết |

> Đây là lesson note thực hành được biên soạn từ tên bài và curriculum. Không phải bản chép lời giảng.

## Mục tiêu bài học

- Hiểu vai trò của **Export sang Unreal Engine hoặc Unity** trong pipeline vật thể cứng, va chạm và cơ cấu liên kết.
- Biết xác định object, collection hoặc solver cần chuẩn bị trước khi thực hành.
- Có thể chạy một test ngắn, quan sát kết quả và ghi lại nguyên nhân khi kết quả chưa đúng.

## Trọng tâm kỹ thuật

- Chốt frame range, cache và transform; thử export một đoạn ngắn rồi kiểm tra lại trong engine đích.
- Giữ workflow theo thứ tự: **setup → test ngắn → tinh chỉnh → cache → render hoặc export**.
- Khi thay đổi một thông số, ghi lại frame range và kết quả để có thể quay lại phiên bản ổn định.

## Bài thực hành

1. Mở file thực hành của module và tạo một scene test riêng cho bài **Export sang Unreal Engine hoặc Unity**.
2. Chốt frame range, cache và transform; thử export một đoạn ngắn rồi kiểm tra lại trong engine đích.
3. Chạy lại từ đầu timeline, kiểm tra viewport từ góc camera và lưu một phiên bản ổn định.

## Lỗi thường gặp

- scale chưa được Apply.
- collision shape không phù hợp.
- quên xóa cache sau khi đổi setup.
- Thay quá nhiều thông số cùng lúc nên không xác định được nguyên nhân.

## Checklist

- [ ] Đã tạo scene hoặc collection test riêng.
- [ ] Đã kiểm tra scale, normals và frame range trước khi chạy.
- [ ] Đã xem kết quả ở viewport và từ góc camera.
- [ ] Đã lưu file sau khi cache hoặc sau khi đạt kết quả ổn định.

Quay lại [README của module](README.md).

