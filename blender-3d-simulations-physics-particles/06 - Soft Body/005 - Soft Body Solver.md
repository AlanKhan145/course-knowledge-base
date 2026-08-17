# Module 06 — Soft Body — Bài 005: Soft Body Solver

| Thuộc tính | Nội dung |
|---|---|
| Thời lượng tham khảo | 8:20 |
| Hệ thống | Soft Body Goal, Edges, Self Collision và solver |
| Trọng tâm | biến dạng mềm, đàn hồi và ổn định solver |

> Đây là lesson note thực hành được biên soạn từ tên bài và curriculum. Không phải bản chép lời giảng.

## Mục tiêu bài học

- Hiểu vai trò của **Soft Body Solver** trong pipeline biến dạng mềm, đàn hồi và ổn định solver.
- Biết xác định object, collection hoặc solver cần chuẩn bị trước khi thực hành.
- Có thể chạy một test ngắn, quan sát kết quả và ghi lại nguyên nhân khi kết quả chưa đúng.

## Trọng tâm kỹ thuật

- Tạo object prototype có topology đều, cho tương tác với một collider và chỉnh một nhóm thông số mỗi lần.
- Giữ workflow theo thứ tự: **setup → test ngắn → tinh chỉnh → cache → render hoặc export**.
- Khi thay đổi một thông số, ghi lại frame range và kết quả để có thể quay lại phiên bản ổn định.

## Bài thực hành

1. Mở file thực hành của module và tạo một scene test riêng cho bài **Soft Body Solver**.
2. Tạo object prototype có topology đều, cho tương tác với một collider và chỉnh một nhóm thông số mỗi lần.
3. Chạy lại từ đầu timeline, kiểm tra viewport từ góc camera và lưu một phiên bản ổn định.

## Lỗi thường gặp

- topology không đủ cho biến dạng.
- self-collision gây chậm nhưng không cần thiết.
- solver chưa ổn định đã cache.
- Thay quá nhiều thông số cùng lúc nên không xác định được nguyên nhân.

## Checklist

- [ ] Đã tạo scene hoặc collection test riêng.
- [ ] Đã kiểm tra scale, normals và frame range trước khi chạy.
- [ ] Đã xem kết quả ở viewport và từ góc camera.
- [ ] Đã lưu file sau khi cache hoặc sau khi đạt kết quả ổn định.

Quay lại [README của module](README.md).

