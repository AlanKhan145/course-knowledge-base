# 05 — Thiết lập hành vi đàn cá

| Thuộc tính | Nội dung |
|---|---|
| **Phân đoạn** | Boids Behavior |
| **Thời điểm** | 05:25–06:59 |
| **Chủ đề** | Flock và Avoid Collision |

## Mục tiêu bài học

- Tạo chuyển động bầy đàn.
- Giữ khoảng cách giữa các con cá.
- Hạn chế việc cá chồng lên nhau.

## Bật Flock

Trong phần **Boid Brain** hoặc **Behavior**:

1. Thêm hành vi **Flock**.
2. Nhấn Play để xem cá bắt đầu phản ứng với nhau.
3. Điều chỉnh cường độ hành vi nếu đàn cá tách quá xa hoặc dồn thành một khối.

Flock giúp các hạt quan sát và phản ứng với những hạt lân cận, tạo cảm giác chuyển động theo đàn.

## Bật Avoid Collision

1. Thêm hành vi **Avoid Collision**.
2. Bật tùy chọn để cá tránh va chạm với các cá thể khác.
3. Kiểm tra lại bằng cách phát timeline.

> Nếu phiên bản Blender hiển thị tên hoặc vị trí tùy chọn hơi khác, hãy tìm nhóm hành vi liên quan đến tránh va chạm trong Boids.

## Điều chỉnh khoảng cách

### Đàn cá dồn lại quá nhiều

- Tăng **Personal Space**.
- Tăng ảnh hưởng của Avoid Collision.
- Giảm mức hút hoặc ảnh hưởng của Flock nếu cần.

### Đàn cá tách quá xa

- Giảm Personal Space.
- Tăng ảnh hưởng của Flock.
- Giảm tốc độ đổi hướng quá lớn.

## Thử nghiệm

Thay đổi từng thông số một lần, sau đó phát lại timeline. Việc thay đổi đồng thời quá nhiều giá trị khiến khó biết yếu tố nào đã tạo ra kết quả.

## Checklist

- [ ] Đã bật Flock.
- [ ] Đã bật Avoid Collision.
- [ ] Cá không chồng lên nhau quá mức.
- [ ] Đàn cá vẫn giữ được cảm giác liên kết.

