# 071 — Stone Base

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 08 — Final Project |
| **Bài học** | Stone Base |
| **Thời lượng** | 2:26 |
| **Chủ đề chính** | Bệ đá cho nhân vật đứng |

## 1. Mục tiêu bài học

- Dựng nhanh một bệ đá tự nhiên bằng Subdivision Surface và displacement.
- Đặt đúng tỷ lệ bệ đá so với kích thước nhân vật.

## 2. Nội dung chính

Bài học ngắn này dựng phần bệ cho nhân vật đứng lên — một khối đá thấp, dẹt, hình dạng bất quy tắc tự nhiên. Cách nhanh nhất là bắt đầu từ một **Cube** dẹt, thêm **Subdivision Surface**, sau đó dùng Proportional Editing (`O`) kéo lệch một vài vertex ở Edit Mode để phá vỡ tính đối xứng hình hộp ban đầu, tạo silhouette gồ ghề tự nhiên hơn của đá tự nhiên.

Bề mặt chi tiết (vết nứt nhỏ, kết cấu thô ráp) có thể thêm nhanh bằng một **Displace Modifier** dùng Noise Texture làm nguồn, hoặc sculpt tay nhanh bằng Clay Strips/Scrape (Module 06) nếu cần kiểm soát chi tiết hơn — do đây là một chi tiết nền phụ, không cần đầu tư quá nhiều thời gian như các phần chính của nhân vật.

Bệ đá cần đủ lớn để chân có màng của nhân vật ếch đứng vững vàng bên trên, và có thể thêm vài chi tiết trang trí nhỏ (rêu, cỏ dại mọc quanh chân bệ) bằng các mesh đơn giản nếu muốn tăng thêm không khí môi trường cho bố cục render cuối cùng.

## 3. Quy trình thực hành gợi ý

1. Dựng một Cube dẹt, thêm Subdivision Surface, dùng Proportional Editing kéo lệch vài vertex tạo silhouette đá tự nhiên.
2. Thêm Displace Modifier với Noise Texture, hoặc sculpt nhanh bằng Clay Strips/Scrape để thêm chi tiết bề mặt.
3. Scale bệ đá đúng tỷ lệ để chân nhân vật đứng vững bên trên.
4. (Tùy chọn) thêm chi tiết trang trí nhỏ như cỏ/rêu quanh chân bệ.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt |
|---|---|
| Proportional Editing | `O` (bật/tắt), lăn chuột chỉnh bán kính |
| Displace Modifier | Modifier Properties > Add Modifier > Deform > Displace |

## 5. Lưu ý & lỗi thường gặp

- Bệ đá quá nhỏ hoặc quá lớn so với kích thước bàn chân nhân vật làm mất cân đối bố cục tổng thể.
- Đầu tư quá nhiều thời gian chi tiết hóa bệ đá trong khi đây chỉ là chi tiết nền phụ trợ cho nhân vật chính.

## 6. Checklist thực hành

- [ ] Đã dựng bệ đá với silhouette tự nhiên, không đối xứng hình hộp.
- [ ] Đã thêm chi tiết bề mặt cơ bản.
- [ ] Đã đặt đúng tỷ lệ để nhân vật đứng vững trên bệ.

## 7. Tóm tắt

Bệ đá là một chi tiết nền nhanh gọn, chỉ cần đủ tự nhiên để không làm mất tập trung khỏi nhân vật chính — ưu tiên tốc độ hơn độ chi tiết so với các phần trọng tâm khác của dự án.
