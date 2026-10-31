---
title: "Bài 02 — Thiết kế nhân vật và hồ sơ tham chiếu"
course: "Tripo AI → Blender: Nhân vật 3D từ ảnh đến rig"
lesson_number: 2
source_type: "Biên tập từ transcript do người dùng cung cấp"
source_timestamp: "02:30–04:15"
status: "Tài liệu tự biên soạn, có phần chú giải và bài tập"
---

# Bài 02 — Thiết kế nhân vật và hồ sơ tham chiếu

> **Phân đoạn tham chiếu:** 02:30–04:15 trong bản ghi gốc.  
> **Đầu ra bài học:** sản phẩm/tài liệu theo mục tiêu và mục thực hành bên dưới.

## Mục tiêu
Biến ý tưởng nhân vật thành **bộ mô tả thống nhất**, trước khi gửi ảnh đi tạo 3D. Ví dụ trong video là một chú thỏ cách điệu.

## Các bước
1. Tạo **character sheet** với ngoại hình, bảng màu, tỉ lệ đầu/thân và điểm nhận diện.
2. Xác định loài, bối cảnh, tính cách, mối quan hệ nhân vật — tài liệu cho rằng hồ sơ chi tiết giúp ảnh đầu ra nhất quán hơn.
3. Chọn **một bản thiết kế chuẩn**, lưu làm ảnh gốc; không thay mẫu tùy tiện ở các bước tiếp theo.
4. Yêu cầu ảnh nhân vật nhìn chính diện, không bị che bởi trang phục, ở **A-pose hoặc T-pose**.
5. Với chibi, thử **A-pose** trước: tư thế T đôi lúc khiến phần vai trông quá rộng khi hạ tay trong animation.
6. Nếu ảnh hoạt hình quá phẳng, tạo thêm bản **clay-like / đổ bóng khối rõ** để Tripo dễ đoán chiều sâu.

## Prompt mẫu — ảnh tham chiếu
```text
Từ thiết kế nhân vật thỏ cách điệu đính kèm, tạo ảnh toàn thân chính diện,
A-pose cân đối, hai tay tách thân, chân tách rõ, không có phụ kiện che thân.
Giữ nguyên màu sắc, tỉ lệ, đường viền, kích thước đầu và biểu cảm.
Chuyển chất liệu hiển thị sang dạng clay render với ánh sáng mềm,
đổ bóng khối rõ nhưng không thay đổi thiết kế nhân vật.
Nền đơn giản; không văn bản, không vật thể khác.
```

## Lỗi thường gặp
| Hiện tượng | Nguyên nhân khả dĩ | Cách xử lý |
|---|---|---|
| Tạo 3D méo chiều sâu | Ảnh nguồn quá phẳng, thiếu bóng khối | Tạo thêm clay render |
| Vai quá rộng trong pose thường | T-pose không hợp tỉ lệ chibi | Thử A-pose |
| Khác mẫu sau nhiều lượt gen | Mỗi lần prompt dùng mô tả khác | Giữ một character sheet làm chuẩn |

## Bài tập
Tạo 2 bản A-pose và T-pose; so sánh khoảng cách tay-thân, tỉ lệ vai, độ rõ của bàn tay/chân. Chọn một bản làm `character_master.png`.

## Tiêu chí hoàn thành
Ảnh nhìn được toàn thân, silhouette rõ, không có chi tiết thừa giao nhau, và màu sắc nhất quán với concept.

---

**Tiếp theo:** Bài 03.
