# Công thức dựng animation retreating và hovering từ dữ liệu paper
> **Phạm vi:** Bài này là phần ứng dụng/suy luận từ kết quả của paper vào rig và animation. Các con số thực nghiệm vẫn được giữ nguyên; các đề xuất triển khai 3D không phải kết luận trực tiếp của tác giả.
## Mục tiêu học tập
- Chuyển timing paper sang keyframe.
- Xây hai action cơ bản.
- Giữ khác biệt sinh học giữa hai gait.

## Nội dung bài học

### Retreating action

Dùng chu kỳ tham chiếu 0,4 s. Pha đầu co nhanh vây để giảm area, sau đó chuyển pha và mở chậm hơn. Thêm undulation delay từ dorsal tới ventral và cho ventral ray deformation lớn hơn.

### Hovering action

Cũng dùng chu kỳ 0,4 s trong thí nghiệm, nhưng out-stroke mở nhanh ở đầu chu kỳ rồi area giảm; in-stroke điều chỉnh chậm. Giữ chuyển động thân và các vây khác rất nhỏ nếu muốn mô phỏng đúng điều kiện được paper mô tả.

### Blending bốn mode

Expansion là trục chính kiểm soát area; cupping hiệu chỉnh độ lõm; undulation cung cấp phase wave; bending định hình curvature tổng. Không cần để bốn weight đạt cực đại cùng lúc.

### Chuyển đổi frame

Ở 24 fps, 0,4 s xấp xỉ 9,6 frame; ở 30 fps là 12 frame; ở 60 fps là 24 frame. Khi làm animation đẹp cho game, có thể time-scale chu kỳ nhưng nên giữ quan hệ pha.

## Điểm cần ghi nhớ
- Timing có thể scale nhưng quan hệ in/out-stroke và phase delay nên được bảo toàn.
- Retreating và hovering không phải cùng một loop chạy ngược.
- Các mode là basis để phối hợp, không phải clip tách biệt bắt buộc.

## Bài tập tự luyện
1. Dựng bảng keyframe cho 24-frame loop ở 60 fps.
2. Tạo 2 action Blender: Pectoral_Retreat và Pectoral_Hover, mỗi action dùng bốn mode control.

## Đối chiếu nguồn

Ứng dụng suy luận từ các chu kỳ ở Fig. 6, 10, các đồ thị Fig. 7-14 và mode Fig. 16.
