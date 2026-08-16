# 08 — Camera, ánh sáng và render cuối

| Thuộc tính | Nội dung |
|---|---|
| **Phân đoạn** | Hoàn thiện cảnh |
| **Thời điểm** | 13:45–14:13 |
| **Chủ đề** | Bố cục, vật liệu, ánh sáng và render |

## Mục tiêu bài học

- Đặt camera nhìn rõ đàn cá.
- Tạo ánh sáng đủ để phân biệt cá và nền.
- Kiểm tra chuyển động trước khi render.
- Xuất một frame hoặc animation hoàn chỉnh.

## Đặt camera

1. Chọn camera.
2. Nhấn `Numpad 0` để xem qua camera.
3. Điều chỉnh vị trí và góc quay.
4. Bảo đảm Leader và phần lớn đàn cá nằm trong khung hình.
5. Chọn một frame đại diện để kiểm tra bố cục.

Một góc máy hơi rộng thường giúp người xem nhận thấy rõ mối quan hệ giữa Leader và đàn cá.

## Vật liệu và ánh sáng

Có thể bắt đầu với:

- Một vật liệu đơn giản cho cá.
- Một vật liệu nền có màu xanh hoặc tối.
- Một đèn chính chiếu từ phía trên.
- Một đèn phụ nhẹ để tách cá khỏi nền.

Không cần xây dựng shader nước phức tạp để hoàn thành bài học. Trọng tâm vẫn là chuyển động Particle System và Boids.

## Kiểm tra trước khi render

- [ ] Cá đã hiển thị đúng kích thước.
- [ ] Cá không bị xoay sai hướng.
- [ ] Leader không xuất hiện ngoài ý muốn trong khung hình.
- [ ] Đàn cá không bị dồn vào một điểm.
- [ ] Camera bao quát được đường chuyển động.
- [ ] Ánh sáng không làm mất chi tiết của cá.
- [ ] Render thử một frame trước khi render toàn bộ animation.

## Render

1. Chọn frame cần kiểm tra.
2. Dùng **Render > Render Image** để xem thử.
3. Nếu cần xuất chuyển động, đặt khoảng frame trong Output Properties.
4. Chọn định dạng và thư mục lưu.
5. Render animation sau khi kiểm tra xong.

## Tóm tắt khóa học

Quy trình hoàn chỉnh là:

```text
Fish mesh → Single Vertex → Particle System → Boids
→ Flock/Avoid Collision → Follow Leader → Animation → Render
```

