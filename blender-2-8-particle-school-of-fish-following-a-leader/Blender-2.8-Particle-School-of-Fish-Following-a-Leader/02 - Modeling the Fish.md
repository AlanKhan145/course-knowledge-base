# 02 — Dựng mô hình cá đơn giản

| Thuộc tính | Nội dung |
|---|---|
| **Phân đoạn** | Dựng hình |
| **Thời điểm** | 00:36–02:13 |
| **Chủ đề** | Tạo một mô hình cá nhẹ để dùng làm hạt |

## Mục tiêu bài học

- Tạo thân cá từ một khối cơ bản.
- Tạo phần đuôi bằng cách chỉnh các đỉnh ở cuối mesh.
- Làm bề mặt cá tròn hơn bằng subdivision.
- Chuẩn bị object để dùng làm Instance Object.

## Quy trình thực hành

1. Thêm một Cube.
2. Nhấn `Tab` để vào Edit Mode.
3. Dùng `S`, `X` để kéo dài thân cá.
4. Dùng `S`, `Y` và `S`, `Z` để điều chỉnh độ rộng, độ cao.
5. Nhấn `Ctrl + R` để thêm loop cut.
6. Bật X-Ray nếu cần chọn các đỉnh xuyên qua mesh.
7. Chọn phần cuối thân và thu nhỏ bằng `S`, `Z` để tạo đuôi.
8. Thêm các loop cut gần đầu và đuôi để kiểm soát hình dáng.
9. Nhấn `Ctrl + 3` để thêm Subdivision Surface cấp độ 3.
10. Nhấp chuột phải và chọn **Shade Smooth**.
11. Đặt tên object là `Fish`.

## Phím tắt chính

| Phím tắt | Công dụng |
|---|---|
| `Tab` | Chuyển Edit Mode/Object Mode |
| `S`, `X/Y/Z` | Thu phóng theo trục |
| `Ctrl + R` | Thêm loop cut |
| `Ctrl + 3` | Thêm Subdivision Surface cấp 3 |
| `Z` | Mở menu shading hoặc chuyển chế độ xem |

## Lưu ý kỹ thuật

Không nên làm mô hình quá nặng. Particle System sẽ hiển thị nhiều bản sao của cá, vì vậy mesh càng đơn giản thì viewport và render càng dễ xử lý.

Nếu cá bị biến dạng quá nhiều sau khi subdivision, hãy thêm loop cut ở vùng đầu và vùng nối với đuôi.

## Checklist

- [ ] Có thân cá dài theo trục chuyển động.
- [ ] Có phần đuôi thu nhỏ ở phía sau.
- [ ] Bề mặt cá đã được làm mượt.
- [ ] Object được đặt tên là `Fish`.

