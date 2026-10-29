# Bài 05 — Điêu khắc cấu trúc vành tai

**Mốc video:** 10:03–14:16 · **Thời lượng học gợi ý:** 35–45 phút

## Mục tiêu

Tạo tai cách điệu có vành ngoài, hõm trong và sự chuyển tiếp mềm; tránh lỗi sculpt do scale không đều.

## Chuẩn bị

1. Trong Object Mode, chọn object tai và tạm ẩn các đối tượng che khuất nếu cần.
2. Nhấn `N` để mở Sidebar và quan sát **Transform > Scale**. Nếu các giá trị lệch đáng kể, dùng `Ctrl + A > Scale` trong Object Mode trước khi sculpt; **chỉ áp dụng khi chủ động chấp nhận biến đổi hiện tại**.
3. Chọn **Sculpt Mode**. Đảm bảo tai có đủ geometry; dùng Subdivision Surface/Remesh có kiểm soát, tránh tăng tới mức không cần thiết.
4. Kiểm tra **Symmetry X** hoặc Mirror Modifier để biết nét cọ có được nhân sang tai còn lại không. Không bật cả hai theo cách dẫn đến hiệu ứng đối xứng chồng không mong muốn.

## Điêu khắc

1. Chọn **Grab** với bán kính vừa, tạo đường cong tổng thể của tai và độ gập hướng vào đầu.
2. Sử dụng **Draw** hoặc brush tương đương để tạo vành tai nổi.
3. Ở những brush hỗ trợ, giữ `Ctrl` để **đảo chiều tác động** (ví dụ Draw từ đắp nổi sang ấn lõm); thử trước trên một vùng nhỏ vì hành vi phụ thuộc brush và phiên bản.
4. Tạo hõm tai trung tâm, tránh khoét sâu đến mức xuyên thủng mesh.
5. Giữ `Shift` để chuyển tạm sang Smooth trong bối cảnh brush hỗ trợ, làm mềm ranh giới giữa vành và hõm. Thả `Shift` để quay về brush đang dùng.
6. Xem lại ở góc trước và góc nghiêng. Đảm bảo tai vẫn có khối tích, không bị bóp dẹt.
7. Nếu đang dùng Mirror Modifier, bật lại Viewport hiển thị và kiểm tra tai đối xứng.

## Sơ đồ mặt cắt tai (minh họa giản lược)

```text
 Vành tai nổi          Hõm tai
      ___                 __
    /     \____       ___/  \
   /           \_____/        |
   \__________________________/
```

## Lỗi cần tránh

- **Bị cảnh báo scale:** áp dụng scale trước khi điêu khắc là bước hữu ích, nhưng nên lưu bản trước vì một số modifier/phép biến dạng có thể đổi kết quả.
- **Nét bị góc cạnh:** geometry quá ít hoặc brush quá nhỏ; kiểm tra mật độ mesh.
- **Bề mặt bị bùn/chảy:** Smooth quá mạnh làm mất vành tai; Undo rồi làm nhẹ hơn.
- **Đối xứng lệch:** xác minh origin, Mirror Object và trục X cục bộ.

## Tự kiểm tra

- [ ] Thấy ít nhất 1 vành nổi và 1 vùng hõm.
- [ ] Không có lỗ thủng mesh.
- [ ] Cả hai tai khớp phong cách khuôn mặt.

**Bài tập:** tạo hai biến thể tai: một tai đơn giản chỉ có một hõm và một tai thêm nếp gập thứ hai. Chụp góc 3/4 để đánh giá chiều sâu.
