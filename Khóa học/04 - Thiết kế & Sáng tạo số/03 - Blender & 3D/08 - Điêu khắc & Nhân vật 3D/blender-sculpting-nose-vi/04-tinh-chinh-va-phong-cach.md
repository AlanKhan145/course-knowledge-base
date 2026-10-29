# Bài 04 — Tinh chỉnh chất liệu hình khối và lựa chọn phong cách

**Thời lượng gợi ý:** 25–35 phút • **Mốc video:** 06:00–10:58

## 1. Mục tiêu

- Học cách dùng **Inflate/Blob + Grab + Smooth** để khôi phục nét tự nhiên.
- Phân biệt đặc điểm mũi bán hiện thực và mũi cách điệu.
- Hoàn thành một mũi sạch, hòa khối vào khuôn mặt và không làm hỏng mắt.

## 2. Gia cố vùng nhô và khối dưới da (06:00–07:29)

Lời thoại dùng cọ **Inflate** để làm phồng nhẹ các vùng cạnh mũi, sau đó làm dịu và chỉnh lại bằng **Grab**. Tư duy chính:

1. Phóng lớn tới vùng cánh mũi và đầu mũi.
2. Dùng **Inflate** nhẹ ở những nơi khối bị phẳng; không bơm đều toàn bộ mũi.
3. Quay góc để xem khối phồng có tạo “cục” lồi bất thường không.
4. Dùng **Grab** đẩy lùi phần quá nhô hoặc chỉnh mép mũi lệch.
5. Dùng **Smooth** với nét ngắn, giữ hình dạng chính.

**Quy tắc:** Cọ Smooth giúp sửa bề mặt, **không thay thế** việc chỉnh khối lớn bằng Grab.

## 3. Bán hiện thực và cách điệu (07:34–09:13)

| Thuộc tính | Bán hiện thực | Stylized / hoạt hình |
|---|---|---|
| Sống mũi | Chuyển mềm từ vùng trán | Có thể gọn hơn, sắc hoặc đơn giản hơn |
| Đầu mũi | Phồng vừa phải, không quá nổi | Có thể to tròn hoặc nhỏ nhọn theo thiết kế |
| Cánh mũi | Khối có độ dày và hòa vào má | Có thể đẩy khối rõ để tăng khả năng đọc silhouette |
| Rãnh | Nông, ngắt quãng hợp lý | Có thể nhấn nét mạnh có chủ đích |
| Lỗ mũi | Giữ độ sâu và vị trí tự nhiên | Có thể đơn giản hóa nhưng vẫn giữ hướng nhìn đúng |

Trong video, người hướng dẫn thử khả năng nhấn sắc khối nhưng **chọn hướng gần hiện thực**, sau đó chỉ bổ sung độ đầy vừa phải.

### Bài tập so sánh phong cách [Bổ sung]

- Nhân bản model đã sculpt thành **A** và **B**.
- **A — bán hiện thực:** ít nét Crease sâu, đường chuyển mũi mềm, tỉ lệ gần ảnh tham chiếu.
- **B — stylized:** chọn *một* đặc tính cường điệu (đầu mũi lớn hơn hoặc sống mũi nhọn hơn), tránh phóng đại tất cả cùng lúc.
- Chụp cùng góc và cùng ánh sáng để so sánh công bằng.

## 4. Gỡ Mask và hòa vùng mũi với mắt (09:19–10:58)

1. **Xóa Mask** bằng **Mask → Clear Mask** (Blender 2.8 thường `Alt+M`).
2. Quan sát lại **hai mắt, gốc mũi và phần gian mày**.
3. Dùng **Clay Strips** thấp để bổ sung các chuyển tiếp vùng gốc mũi bị lõm hoặc tách rời.
4. Dùng **Smooth** nhẹ ở ranh giới giữa vùng cũ và vùng mới.
5. Dùng **Grab** điều chỉnh đầu mũi để đạt độ tinh tế cuối cùng.
6. Kiểm tra Front/Side/Bottom và lưu bản hoàn thiện.

> **Không làm mờ toàn bộ khuôn mặt** sau khi gỡ Mask. Nếu cấu trúc mắt đã ổn, hãy chỉ sửa vùng nối cần thiết.

## 5. Checklist trước khi kết thúc

- [ ] Sống mũi nối hợp lý với vùng gian mày.
- [ ] Đầu mũi có thể tích, không bị bẹp hoặc nhọn bất thường.
- [ ] Cánh mũi có độ dày và chuyển sang má tự nhiên.
- [ ] Hai lỗ mũi có hướng nhìn, chiều sâu và khoảng cách hợp lý.
- [ ] Mắt và mí không biến dạng sau khi gỡ Mask.
- [ ] Không có vệt sọc Clay Strips hoặc mảng phồng Inflate quá tay.
- [ ] Silhouette ổn ở 3 góc nhìn, kể cả khi tắt ánh sáng phức tạp.
- [ ] Lưu `nose_03_final.blend` và 3 ảnh so sánh.

## 6. Tổng kết

Đường đi của khóa học là **đọc khối → dựng thể tích → tạo rãnh/hõm → điều chỉnh tỷ lệ → làm mịn → kiểm tra nhiều góc**. Đừng cố làm mũi “thật” bằng cách tăng độ sâu rãnh; cảm giác thật trước hết đến từ quan hệ đúng giữa các khối.
