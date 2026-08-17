# Module 03 — Cloth Physics — Bài 016: Export Cloth sang Unreal và Unity

| Thuộc tính | Nội dung |
|---|---|
| Thời lượng tham khảo | 14:45 |
| Hệ thống | Cloth, collision, pinning, sewing, pressure, vertex group và cache |
| Trọng tâm | vải, biến dạng bề mặt và tương tác với collider |

> Đây là lesson note thực hành được biên soạn từ tên bài và curriculum. Không phải bản chép lời giảng.

## Mục tiêu bài học

- Hiểu vai trò của **Export Cloth sang Unreal và Unity** trong pipeline vải, biến dạng bề mặt và tương tác với collider.
- Biết xác định object, collection hoặc solver cần chuẩn bị trước khi thực hành.
- Có thể chạy một test ngắn, quan sát kết quả và ghi lại nguyên nhân khi kết quả chưa đúng.

## Trọng tâm kỹ thuật

- Chốt frame range, cache và transform; thử export một đoạn ngắn rồi kiểm tra lại trong engine đích.
- Giữ workflow theo thứ tự: **setup → test ngắn → tinh chỉnh → cache → render hoặc export**.
- Khi thay đổi một thông số, ghi lại frame range và kết quả để có thể quay lại phiên bản ổn định.

## Bài thực hành

1. Mở file thực hành của module và tạo một scene test riêng cho bài **Export Cloth sang Unreal và Unity**.
2. Chốt frame range, cache và transform; thử export một đoạn ngắn rồi kiểm tra lại trong engine đích.
3. Chạy lại từ đầu timeline, kiểm tra viewport từ góc camera và lưu một phiên bản ổn định.

## Lỗi thường gặp

- mesh quá thưa hoặc quá nặng.
- pin group sai vùng.
- cloth xuyên collider do scale hoặc collision margin.
- Thay quá nhiều thông số cùng lúc nên không xác định được nguyên nhân.

## Checklist

- [ ] Đã tạo scene hoặc collection test riêng.
- [ ] Đã kiểm tra scale, normals và frame range trước khi chạy.
- [ ] Đã xem kết quả ở viewport và từ góc camera.
- [ ] Đã lưu file sau khi cache hoặc sau khi đạt kết quả ổn định.

Quay lại [README của module](README.md).

