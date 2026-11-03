# Đánh giá đồ án cuối khóa — Combat VFX 2D

## Giao nộp
- Một project Unity chạy được và source Pixel Art/Spine/Blender nếu dùng.
- 3 skill ứng với ít nhất 3 ngôn ngữ VFX; 1 finisher; 1 tương tác cộng hưởng.
- Clip demo 30–60 giây và ảnh so sánh không có/có VFX.
- Cue sheet: `Event → Time/frame → Effect → Gameplay rule`.
- Tệp `README` nêu Unity version, render pipeline, cách mở scene.

## Rubric (100 điểm)
| Tiêu chí | Điểm |
|---|---:|
| Silhouette, nhận dạng động tác và mục tiêu | 20 |
| Timing (anticipation–impact–recovery) | 20 |
| Chất lượng kỹ thuật VFX (particle, trails, slash, lightning) | 20 |
| Tích hợp gameplay, không kích nhầm/nhân đôi sự kiện | 20 |
| Tối ưu, tái sử dụng asset và khả năng mở rộng | 10 |
| Tài liệu, clip demo, tổ chức project | 10 |

## Checklist nghiệm thu
- [ ] Tắt VFX vẫn xem hiểu động tác.
- [ ] Tất cả skill có mốc bắt đầu/đánh trúng/kết thúc.
- [ ] Sự kiện chỉ phát một lần mỗi lần tung chiêu.
- [ ] Particle burst tự tắt; hiệu ứng loop có điều kiện dừng.
- [ ] Sắp thứ tự lớp hiển thị đúng.
- [ ] Không có texture vuông nền, shader tím hoặc prefab mất reference.
- [ ] Demo tại tốc độ game thật, không chỉ slow motion.
- [ ] Có phiên bản tối ưu cho màn hình nhỏ.
