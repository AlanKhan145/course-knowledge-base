# 04 — Cấu hình Particle System và Instance Object

| Thuộc tính | Nội dung |
|---|---|
| **Phân đoạn** | Thiết lập hạt |
| **Thời điểm** | 04:07–05:25 |
| **Chủ đề** | Dùng mô hình cá thay cho hạt mặc định |

## Mục tiêu bài học

- Chuyển Physics sang Boids.
- Thiết lập khối lượng cơ bản cho hạt.
- Hiển thị mỗi hạt bằng object `Fish`.
- Kiểm tra hướng và thời gian xuất hiện của cá.

## Chuyển sang Boids

1. Chọn `Emitter`.
2. Mở Particle Properties.
3. Tìm phần **Physics**.
4. Đổi loại vật lý sang **Boids**.
5. Đặt Mass khoảng `0.2 kg` làm giá trị khởi đầu.

Khối lượng không quyết định một mình toàn bộ chuyển động, nhưng nó ảnh hưởng đến cách hệ thống xử lý hành vi của đàn.

## Hiển thị mô hình cá

Trong phần **Render**:

1. Đổi **Render As** thành `Object`.
2. Trong **Instance Object**, chọn object `Fish`.
3. Nhấn Play.
4. Kiểm tra xem các hạt đã hiển thị thành nhiều con cá chưa.

Có thể ẩn cá gốc trong viewport hoặc đưa nó ra ngoài vùng camera để chỉ nhìn thấy các bản sao do Particle System tạo ra.

## Điều chỉnh hướng cá

Nếu cá quay sai hướng, cần xoay object `Fish` trước khi dùng làm instance. Hướng trục của mô hình sẽ quyết định hướng di chuyển mà người xem nhận thấy.

Nếu kích thước cá quá lớn hoặc quá nhỏ, điều chỉnh Scale của object gốc và áp dụng Scale trước khi kiểm tra lại.

## Checklist

- [ ] Physics đã chuyển sang Boids.
- [ ] Mass đã có giá trị khởi đầu.
- [ ] Render As là Object.
- [ ] Instance Object là `Fish`.
- [ ] Cá có kích thước và hướng phù hợp.

