# 046 — Brush Configurations

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 06 — Digital Sculpting |
| **Bài học** | Brush Configurations |
| **Thời lượng** | 7:09 |
| **Chủ đề chính** | Radius, Strength, Falloff, Stroke method, Symmetry |

## 1. Mục tiêu bài học

- Biết chỉnh Radius và Strength của brush bằng phím tắt và bằng số.
- Hiểu vai trò của đường cong Falloff.
- Phân biệt các Stroke method: Space, Airbrush, Anchored.
- Biết bật Symmetry theo trục X/Y/Z.
- Biết lưu brush preset tùy chỉnh.

## 2. Nội dung chính

**Radius** (bán kính vùng ảnh hưởng của brush) chỉnh nhanh bằng phím `F` rồi di chuột, hoặc kéo trực tiếp thanh trượt trong Tool Settings. **Strength** (cường độ tác động mỗi nét vẽ) chỉnh bằng `Shift + F` rồi di chuột. Cả hai đều có thể set số chính xác qua panel.

**Falloff** là đường cong quyết định cường độ brush giảm dần thế nào từ tâm ra rìa vùng ảnh hưởng — falloff dốc (Sharp) cho cạnh brush rõ nét hơn, falloff mượt (Smooth) cho chuyển tiếp êm ái hơn. Đường cong này có thể chỉnh trực tiếp trong panel Falloff của mỗi brush, ảnh hưởng lớn đến "cảm giác" của brush dù cùng một Radius/Strength.

**Stroke method** quyết định cách brush lặp lại tác động khi kéo chuột: **Space** (mặc định) áp dụng brush theo khoảng cách di chuyển đều đặn dọc đường kéo; **Airbrush** liên tục tác động theo thời gian giữ chuột kể cả khi đứng yên (giống bình xịt sơn, cường độ tăng dần nếu giữ lâu); **Anchored** cố định điểm bắt đầu và dùng khoảng cách kéo chuột để chỉnh Radius/cường độ hiệu ứng ngay tại điểm đó, thả chuột mới áp dụng.

**Symmetry** (panel bên phải hoặc phím X/Y/Z trong Tool Settings) cho phép brush tác động đối xứng đồng thời qua một hoặc nhiều trục — thiết yếu khi sculpt nhân vật/sinh vật có cấu trúc đối xứng, tiết kiệm gấp đôi/gấp bốn thời gian so với sculpt tay từng bên. Brush preset tùy chỉnh (kết hợp Radius/Strength/Falloff/Stroke method riêng) có thể lưu lại qua icon "+" cạnh dropdown preset để tái sử dụng.

## 3. Quy trình thực hành gợi ý

1. Chọn Clay Strips, nhấn `F` và di chuột để chỉnh Radius, nhấn `Shift+F` để chỉnh Strength.
2. Mở panel Falloff, thử đổi giữa Sharp và Smooth, quan sát cạnh brush khi sculpt.
3. Chuyển Stroke method sang Airbrush, giữ chuột đứng yên trên một điểm và quan sát khối lượng tăng dần theo thời gian.
4. Thử Anchored trên một brush như Inflate để tạo hiệu ứng phồng có kiểm soát bán kính bằng khoảng cách kéo chuột.
5. Bật Symmetry trục X trên một Icosphere, sculpt một bên và quan sát bên kia tự động phản chiếu.
6. Lưu một brush preset tùy chỉnh với thông số riêng.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt |
|---|---|
| Chỉnh Radius | `F` + di chuột |
| Chỉnh Strength | `Shift + F` + di chuột |
| Bật/tắt Symmetry trục X/Y/Z | Panel Symmetry hoặc phím tắt tùy cấu hình |
| Đổi Stroke method | Dropdown "Stroke" trong Tool Settings |

## 5. Lưu ý & lỗi thường gặp

- Airbrush với Strength cao dễ khiến khối lượng tăng vọt ngoài ý muốn nếu giữ chuột lâu ở một điểm.
- Quên bật Symmetry ngay từ đầu khiến phải sculpt lại đối xứng thủ công tốn thời gian.
- Falloff quá dốc (Sharp) trên brush Smooth có thể tạo viền rõ nét không mong muốn khi làm mượt chuyển tiếp giữa hai vùng chi tiết khác nhau.

## 6. Checklist thực hành

- [ ] Đã biết chỉnh Radius/Strength bằng phím tắt F và Shift+F.
- [ ] Đã thử nghiệm ảnh hưởng của đường cong Falloff.
- [ ] Đã phân biệt được Space, Airbrush và Anchored qua thực hành.
- [ ] Đã bật Symmetry và sculpt một hình đối xứng.
- [ ] Đã lưu ít nhất một brush preset tùy chỉnh.

## 7. Tóm tắt

Việc làm chủ các thông số Radius, Strength, Falloff, Stroke method và Symmetry biến các brush cơ bản đã học ở bài 044 thành công cụ có thể tùy biến chính xác cho từng tình huống sculpting cụ thể.
