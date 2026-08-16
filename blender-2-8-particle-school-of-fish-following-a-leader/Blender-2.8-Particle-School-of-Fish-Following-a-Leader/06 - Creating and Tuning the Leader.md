# 06 — Tạo và tinh chỉnh vật thể Leader

| Thuộc tính | Nội dung |
|---|---|
| **Phân đoạn** | Follow Leader |
| **Thời điểm** | 06:59–10:08 |
| **Chủ đề** | Tạo vật thể dẫn đầu và làm đàn cá đi theo |

## Mục tiêu bài học

- Tạo một vật thể làm Leader.
- Gán Leader vào hành vi Follow Leader.
- Điều chỉnh ưu tiên và tốc độ để chuyển động tự nhiên hơn.

## Tạo Leader

1. Nhấn `Shift + A`.
2. Thêm một Icosphere hoặc UV Sphere.
3. Thu nhỏ vật thể.
4. Di chuyển nó ra phía trước đàn cá.
5. Đặt tên là `Leader`.

Leader không nhất thiết phải có hình dạng cá. Nó chỉ là vật thể điều khiển để các hạt theo dõi.

## Gán Leader cho Boids

1. Chọn `Emitter`.
2. Mở Particle Properties và phần Boids.
3. Thêm hành vi **Follow Leader**.
4. Dùng eyedropper để chọn object `Leader`.
5. Đưa Follow Leader lên ưu tiên cao trong danh sách hành vi.
6. Nhấn Play để kiểm tra.

Khi Leader được di chuyển, đàn cá sẽ dần thay đổi hướng để bám theo nó.

## Điều chỉnh chuyển động

Các thông số nên thử nghiệm:

- **Air Speed:** tốc độ bay hoặc bơi của hạt.
- **Maximum Air Speed:** vận tốc tối đa.
- **Maximum Angular Velocity:** tốc độ xoay tối đa.
- **Personal Space:** khoảng cách riêng.
- **Banking:** độ nghiêng khi đổi hướng.
- **Height:** độ dao động theo chiều cao.

Nếu cá gom thành một cụm quá chặt, tăng Personal Space hoặc giảm tốc độ góc. Nếu cá phản ứng quá chậm, tăng Air Speed và kiểm tra ưu tiên của Follow Leader.

## Tạo chuyển động tự nhiên

Một đàn cá tự nhiên không di chuyển thành một khối hoàn toàn đồng nhất. Hãy giữ lại một lượng dao động nhỏ bằng cách điều chỉnh Height, Banking và các giá trị tốc độ khác nhau.

## Checklist

- [ ] Đã tạo và đặt tên `Leader`.
- [ ] Đã gán Leader vào Follow Leader.
- [ ] Follow Leader có mức ưu tiên phù hợp.
- [ ] Đàn cá có thể thay đổi hướng theo Leader.
- [ ] Khoảng cách giữa cá đủ tự nhiên.

