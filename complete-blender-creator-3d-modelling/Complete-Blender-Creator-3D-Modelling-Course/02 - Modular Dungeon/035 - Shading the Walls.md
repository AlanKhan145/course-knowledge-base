# 035 — Shading the Walls

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 02 — Modular Dungeon |
| **Bài học** | Shading the Walls |
| **Thời lượng** | 10:42 |
| **Chủ đề chính** | Tô màu và shading tường |

## 1. Mục tiêu bài học

- Xây dựng vật liệu đá (stone material) nâng cao hơn bằng Shader Editor thay vì chỉ chỉnh Base Color đơn giản.
- Sử dụng texture thủ tục (procedural texture) như Noise Texture, Voronoi Texture kết hợp Color Ramp để tạo biến thiên màu/độ nhám tự nhiên.
- Hiểu vai trò của Bump/Normal map trong việc mô phỏng độ nhấp nhô bề mặt đá mà không cần thêm hình học.
- Áp dụng vật liệu hoàn chỉnh lên toàn bộ module tường và kiểm tra dưới nhiều góc chiếu sáng.

## 2. Nội dung chính

Ở bài 029, vật liệu chỉ dừng ở mức gán Base Color/Roughness cố định. Bài này mở rộng sang **Shader Editor** (workspace "Shading") để xây dựng vật liệu đá phong phú hơn bằng node.

**Noise Texture** tạo một pattern nhiễu ngẫu nhiên (dựa trên Perlin noise) dùng làm nguồn biến thiên tự nhiên — có thể nối vào **Color Ramp** để ánh xạ giá trị noise thành dải màu (ví dụ từ xám đậm đến xám nhạt), tạo hiệu ứng đá loang màu tự nhiên thay vì màu phẳng đơn sắc. Tham số Scale của Noise Texture quyết định kích thước pattern — Scale nhỏ cho vệt loang lớn, Scale lớn cho chi tiết nhiễu mịn.

**Voronoi Texture** tạo các pattern dạng ô/mảnh vỡ (cellular), rất phù hợp mô phỏng các mảng đá xây hoặc vết nứt tự nhiên trên bề mặt tường đá.

Để mô phỏng độ nhấp nhô bề mặt đá (các vết lồi lõm nhỏ) mà không cần thêm hình học thực, nối output của Noise/Voronoi Texture qua node **Bump**, sau đó cắm vào input **Normal** của Principled BSDF. Node Bump chuyển đổi giá trị độ cao (height) trong texture thành nhiễu loạn hướng pháp tuyến, đánh lừa mắt người xem rằng bề mặt có độ gồ ghề thật dù mesh vẫn phẳng.

Có thể kết hợp thêm node **Mix Color** hoặc **Color Ramp** thứ hai để điều khiển Roughness biến thiên theo cùng pattern noise, làm các vùng bề mặt phản chiếu ánh sáng không đều — gần giống chất đá thật hơn vật liệu phẳng đơn điệu.

## 3. Quy trình thực hành gợi ý

1. Chuyển sang workspace Shading, chọn object tường và vật liệu đá đã tạo ở bài 029.
2. Thêm node Noise Texture, nối vào Color Ramp, rồi nối Color Ramp vào Base Color của Principled BSDF.
3. Điều chỉnh Scale của Noise Texture và các điểm dừng màu trên Color Ramp cho đến khi có hiệu ứng loang màu tự nhiên.
4. Thêm một nhánh Noise/Voronoi Texture khác, qua node Bump, nối vào input Normal của Principled BSDF.
5. Điều chỉnh Strength của node Bump để độ nhấp nhô vừa phải, không quá gắt.
6. Thử thêm biến thiên Roughness theo cùng pattern để tăng chất thực.
7. Kiểm tra vật liệu dưới Material Preview và Rendered shading, xoay góc nhìn để đánh giá dưới nhiều hướng sáng.

## 4. Phím tắt & công cụ liên quan

| Phím tắt / Node | Chức năng |
|---|---|
| `Shift+A` (trong Shader Editor) | Add node mới (Texture, Color, Vector...) |
| Noise Texture | Tạo pattern nhiễu tự nhiên |
| Voronoi Texture | Tạo pattern dạng ô/mảnh vỡ |
| Color Ramp | Ánh xạ giá trị texture sang dải màu/độ nhám |
| Bump node | Chuyển height map thành nhiễu loạn Normal |
| `Z` | Chuyển Viewport Shading (Material Preview/Rendered) |
| `Ctrl+T` (khi chọn Image Texture) | Auto-add UV + Mapping node (không bắt buộc với procedural) |

## 5. Lưu ý & lỗi thường gặp

- Scale Noise Texture không phù hợp với kích thước thực của tường khiến pattern quá to hoặc quá vụn.
- Strength của Bump quá cao tạo hiệu ứng nhiễu giả tạo, không giống bề mặt đá thật.
- Quên nối node Bump mà cắm thẳng Noise Texture vào Normal khiến kết quả sai (Normal cần vector, không phải giá trị màu thô).
- Chỉ kiểm tra dưới một góc sáng cố định, không phát hiện được các lỗi bump khi ánh sáng đổi hướng.

## 6. Checklist thực hành

- [ ] Đã tạo biến thiên màu bằng Noise Texture + Color Ramp cho Base Color.
- [ ] Đã thêm chi tiết nhấp nhô bằng Bump node nối vào Normal.
- [ ] Đã điều chỉnh Scale/Strength hợp lý so với kích thước tường thực tế.
- [ ] Đã kiểm tra vật liệu dưới Rendered shading với nhiều góc nhìn.
- [ ] Đã áp dụng vật liệu hoàn chỉnh cho toàn bộ module tường.

## 7. Tóm tắt

Bài học nâng cấp vật liệu tường từ màu phẳng đơn giản lên vật liệu đá thủ tục có biến thiên màu và độ nhấp nhô bề mặt bằng Noise/Voronoi Texture, Color Ramp và Bump node — giúp module tường trông tự nhiên và có chiều sâu hơn khi render.
