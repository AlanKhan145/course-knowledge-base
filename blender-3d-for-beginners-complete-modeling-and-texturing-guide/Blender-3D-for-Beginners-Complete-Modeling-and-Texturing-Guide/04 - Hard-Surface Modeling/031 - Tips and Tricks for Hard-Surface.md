# 031 — Tips and Tricks for Hard-Surface

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 04 — Hard-Surface Modeling |
| **Bài học** | Tips and Tricks for Hard-Surface |
| **Thời lượng** | 10:41 |
| **Chủ đề chính** | Xử lý shading và topology sau Boolean |

## 1. Mục tiêu bài học

- Biết cách giữ shading mượt mà sau khi thực hiện Boolean.
- Biết dùng Bevel Modifier với giới hạn Angle/Weight để chỉ vát các cạnh cần thiết.
- Biết dùng Harden Normals để tránh méo highlight ở các mặt bevel hẹp.
- Nhận diện và sửa lỗi n-gon/shading thường gặp sau Boolean.

## 2. Nội dung chính

Boolean thường để lại các cạnh sắc 90 độ không mong muốn và đôi khi cả n-gon (mặt nhiều hơn 4 cạnh) tại đường giao cắt — cả hai đều gây lỗi shading (bóng loang, vệt tối) khi bật Shade Smooth. Giải pháp phổ biến nhất là dùng **Bevel Modifier** thay vì bevel thủ công: đặt Amount nhỏ (0.01–0.05m tùy tỉ lệ model) và giới hạn phạm vi áp dụng bằng **Limit Method = Angle** (chỉ vát các cạnh có góc gấp khúc lớn hơn ngưỡng, giữ nguyên các cạnh phẳng) — nhờ đó không cần đánh dấu Bevel Weight thủ công cho từng cạnh.

**Harden Normals** (tùy chọn trong Bevel Modifier, yêu cầu bật Auto Smooth hoặc dùng Shade Auto Smooth) điều chỉnh lại normal ở các mặt bevel hẹp để ánh sáng phản chiếu mượt mà thay vì bị "gãy" thành các dải sáng tối rõ rệt — đây gần như là bước bắt buộc cho mọi model hard-surface có bevel nhỏ và vật liệu kim loại bóng.

Sau Boolean, nên luôn kiểm tra: chạy **Merge by Distance** để gộp vertex trùng, dùng overlay **Face Orientation** (xanh = normal đúng hướng ra ngoài, đỏ = bị lật) để phát hiện normal bị đảo, và dùng **Select > Select All by Trait > Faces by Sides** để tìm nhanh các n-gon/tam giác còn sót lại cần dọn dẹp thủ công bằng Knife hoặc Dissolve.

## 3. Quy trình thực hành gợi ý

1. Thực hiện một phép Boolean Difference giữa hai khối hộp, Apply modifier, bật Shade Smooth và quan sát các vệt shading xấu.
2. Thêm Bevel Modifier, đặt Limit Method = Angle, Amount nhỏ, quan sát các cạnh phẳng được giữ nguyên trong khi các cạnh giao cắt được vát mượt.
3. Bật Auto Smooth (hoặc Shade Auto Smooth) và tick Harden Normals trong Bevel Modifier, so sánh highlight trước/sau.
4. Bật overlay Face Orientation để kiểm tra normal, dùng Select by Trait > Faces by Sides để tìm n-gon còn sót.
5. Dọn các n-gon phát hiện được bằng Knife hoặc Dissolve Faces (`X > Dissolve Faces`).

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt |
|---|---|
| Bật overlay Face Orientation | Overlays dropdown > Face Orientation |
| Select Faces by Sides | Select > Select All by Trait > Faces by Sides |
| Dissolve Faces | `X > Dissolve Faces` |
| Merge by Distance | `M` → `By Distance` |
| Shade Auto Smooth | Object > Shade Auto Smooth (chuột phải trong Object Mode) |

## 5. Lưu ý & lỗi thường gặp

- Bevel Amount quá lớn so với kích thước model gây chồng lấn hình học ở các góc hẹp — nên test với Amount nhỏ trước.
- Quên bật Auto Smooth trước khi tick Harden Normals khiến tùy chọn này không có tác dụng.
- Áp dụng Boolean nhiều lần liên tiếp mà không dọn dẹp n-gon giữa các lần dễ khiến các phép Boolean sau đó cho kết quả lỗi hoặc thiếu mặt (non-manifold geometry).
- Không kiểm tra Face Orientation trước khi Boolean là nguyên nhân phổ biến khiến phép Union/Difference cho kết quả sai hoàn toàn.

## 6. Checklist thực hành

- [ ] Đã dùng Bevel Modifier với Limit Method = Angle để tự động vát cạnh sau Boolean.
- [ ] Đã bật Harden Normals và quan sát sự cải thiện shading.
- [ ] Đã dùng Face Orientation overlay để kiểm tra normal.
- [ ] Đã tìm và dọn dẹp thành công ít nhất một n-gon phát sinh từ Boolean.

## 7. Tóm tắt

Bevel Modifier với Limit Angle kết hợp Harden Normals là bộ đôi kỹ thuật gần như bắt buộc trong hard-surface modeling hiện đại — giúp mọi phép Boolean giữ được shading sạch sẽ mà không cần vát cạnh thủ công tốn thời gian.
