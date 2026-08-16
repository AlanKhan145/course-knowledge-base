# 07 — Hoạt hình và làm mượt chuyển động của Leader

| Thuộc tính | Nội dung |
|---|---|
| **Phân đoạn** | Animation |
| **Thời điểm** | 10:08–13:45 |
| **Chủ đề** | Auto Keying, Graph Editor và Decimate Keys |

## Mục tiêu bài học

- Tạo đường chuyển động cho Leader.
- Để đàn cá phản ứng theo chuyển động đó.
- Giảm keyframe dư thừa.
- Loại bỏ các cú giật trên đường cong chuyển động.

## Tạo keyframe bằng Auto Keying

1. Chọn object `Leader`.
2. Bật **Auto Keying** trên Timeline.
3. Đưa timeline về frame 0.
4. Đặt vị trí bắt đầu.
5. Di chuyển đến một frame khác.
6. Nhấn `G` để di chuyển Leader.
7. Lặp lại ở một số frame tiếp theo để tạo đường đi.

Khi Auto Keying bật, Blender sẽ tự ghi lại thay đổi vị trí thành keyframe.

## Kiểm tra animation

Nhấn Play và quan sát:

- Leader có di chuyển đúng hướng không?
- Cá có theo kịp không?
- Đàn cá có bị dồn hoặc bị bỏ lại không?
- Leader có đổi hướng quá đột ngột không?

Nếu cá phản ứng chậm, có thể cần tăng tốc độ Boids hoặc tạo đường đi ít gấp hơn.

## Làm sạch keyframe trong Graph Editor

1. Chuyển một vùng giao diện sang **Graph Editor**.
2. Chọn các đường cong của Leader.
3. Nhấn `A` để chọn các keyframe cần xử lý.
4. Dùng **Key > Decimate Keys** để giảm số lượng keyframe.
5. Điều chỉnh tỷ lệ giảm cho đến khi chuyển động vẫn giữ đúng hình dạng.
6. Kiểm tra các điểm nhọn trên F-Curve.
7. Xóa hoặc chỉnh các keyframe gây giật.
8. Phát lại timeline.

## Nguyên tắc khi giảm keyframe

Không nên giảm keyframe chỉ để có một đường cong sạch hơn. Sau mỗi lần Decimate Keys, cần phát lại animation để chắc chắn Leader vẫn đi đúng quỹ đạo.

Nếu xuất hiện góc nhọn, hãy chỉnh handle của F-Curve hoặc xóa keyframe gây ra thay đổi tốc độ đột ngột.

## Checklist

- [ ] Leader có keyframe ở nhiều vị trí.
- [ ] Đàn cá phản ứng với chuyển động của Leader.
- [ ] Các keyframe dư thừa đã được giảm.
- [ ] Không còn những cú giật lớn trên F-Curve.
- [ ] Animation đã được kiểm tra từ đầu đến cuối.

