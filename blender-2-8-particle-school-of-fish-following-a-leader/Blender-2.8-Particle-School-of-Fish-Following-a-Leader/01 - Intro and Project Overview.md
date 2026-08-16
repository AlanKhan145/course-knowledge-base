# 01 — Giới thiệu và tổng quan dự án

| Thuộc tính | Nội dung |
|---|---|
| **Phân đoạn** | Mở đầu |
| **Thời điểm** | 00:00–00:36 |
| **Chủ đề** | Tạo đàn cá bơi theo một vật thể dẫn đầu |

## Mục tiêu bài học

Sau phần này, người học sẽ:

- Hiểu kết quả cuối cùng cần tạo.
- Biết vai trò của Particle System trong cảnh.
- Hiểu vì sao cần dùng Boids thay cho chuyển động hạt thông thường.
- Nắm được quy trình từ mô hình cá đến render.

## Tổng quan kỹ thuật

Mỗi con cá trong cảnh không được tạo thủ công. Một mô hình cá sẽ được dùng làm **Instance Object** cho hệ thống hạt. Hệ thống hạt chịu trách nhiệm tạo ra nhiều cá, còn **Boids** quyết định cách đàn cá di chuyển.

Quy trình gồm bốn phần:

1. Dựng một mô hình cá đơn giản.
2. Tạo emitter từ một Single Vertex.
3. Thiết lập Particle System và Boids.
4. Tạo Leader, hoạt hình hóa nó và hoàn thiện cảnh.

## Kết quả mong đợi

Đàn cá sẽ xuất hiện từ một điểm, hình thành chuyển động bầy đàn và cố gắng đi theo vật thể Leader. Chuyển động cuối cùng phụ thuộc vào số lượng hạt, tốc độ, khoảng cách riêng và các hành vi Boids.

## Lưu ý

Đây là bài thực hành tập trung vào Particle System trong Blender 2.8. Mô hình cá chỉ cần đủ nhẹ và đủ tròn để hiển thị tốt khi được nhân bản nhiều lần.

