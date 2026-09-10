# Bài 07 - Thiết kế nghiên cứu: từ micro-CT đến video 1.000 fps

## 1. Mục tiêu bài học

- Mô tả quy trình nghiên cứu hình thái và động học.
- Nêu vai trò của micro-CT, video tốc độ cao và landmark.
- Hiểu các bước xử lý số liệu chính.

## 2. Giải phẫu và micro-CT

Một mẫu *Z. cornutus* dài chuẩn 80 mm được dùng cho nghiên cứu hình thái. Đầu cá được quét bằng MicroXCT-200 với độ phân giải voxel **13,85 μm**. Dữ liệu được tái tạo, xuất dạng TIFF 16-bit và đưa vào Dragonfly ORS để segmentation và trực quan hóa từng xương bằng mesh mượt.

## 3. Quan sát kiếm ăn

Cá được quay trong bể 200 L, ở khoảng 25 °C. Thức ăn gồm tảo, mảnh tôm hoặc agar gắn vào benthos. Nghiên cứu ghi cả góc nhìn trước và góc nhìn bên.

Camera Photron Fastcam Mini được dùng ở **1.000 frames per second**. Mỗi cá thể thường có 5-10 sequence cho mỗi góc nhìn. Tổng cộng nghiên cứu phân tích **674 video**, **68 cá thể**, **35 loài**.

## 4. Landmark và số hóa động học

Video được đưa vào ImageJ. Với góc nhìn trước, các landmark mô tả trục neurocranium và đầu hàm để tính jaw rotation và vận tốc. Với góc nhìn bên, bảy landmark được đặt để tính các góc và chuyển động khác.

Landmark được đặt mỗi **5 frame**, tương ứng **5 ms** ở tốc độ quay 1.000 fps.

## 5. Tính góc và vận tốc

Các profile động học được tạo trong R. Góc ở mặt phẳng bên được tính từ ba landmark bằng định luật cos. Với dữ liệu mặt phẳng ngang, hàm `atan2` được dùng để bảo toàn thông tin hướng trái/phải.

Vận tốc được tính từ độ dịch chuyển landmark giữa hai thời điểm liên tiếp theo hai trục x-y.

## 6. Meta-analysis bite rate

Dữ liệu bite rate được tổng hợp từ các nghiên cứu quan sát thực địa ở cá rạn nhiệt đới. Để giảm khác biệt phương pháp, nhóm tác giả chỉ dùng dữ liệu từ nghiên cứu snorkel/SCUBA nơi quan sát viên theo một cá thể trong một khoảng thời gian.

Các giá trị được chuẩn hóa theo bites/min và phân tích bằng Generalized Linear Models. Mô hình Gaussian và Gamma được so sánh bằng AIC, sau đó kiểm tra chẩn đoán mô hình.

## 7. Phân tích phát sinh chủng loại

Mỗi loài được mã hóa có/không có lateral jaw movement. Lịch sử của đặc điểm được tái dựng trên cây phát sinh bằng stochastic character mapping trong gói `phytools`, sử dụng 100 bản đồ ngẫu nhiên.

## 8. Vì sao cần phương pháp đa nguồn?

Không một phương pháp đơn lẻ đủ trả lời toàn bộ câu hỏi:

- CT cho biết cấu trúc;
- giải phẫu cho biết cơ và điểm bám;
- video cho biết chuyển động thực;
- landmark biến chuyển động thành số;
- so sánh nhiều loài cho biết mức độ phân bố;
- meta-analysis đánh giá hệ quả hiệu suất;
- phylogeny đặt đổi mới vào bối cảnh tiến hóa.
