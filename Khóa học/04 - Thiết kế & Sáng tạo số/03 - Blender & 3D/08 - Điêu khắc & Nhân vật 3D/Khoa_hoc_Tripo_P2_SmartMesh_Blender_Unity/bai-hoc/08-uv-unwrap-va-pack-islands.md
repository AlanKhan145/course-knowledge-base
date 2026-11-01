---
title: "Bài 08 — UV Unwrap và phân bổ không gian texture"
order: 8
stage: "UV mapping"
source_timestamps: "35:08–42:48"
---

# Bài 08 — UV Unwrap và phân bổ không gian texture

## Mục tiêu

Biết cách đánh dấu seam, unwrap, sắp xếp UV islands và ưu tiên diện tích ảnh cho những chi tiết người chơi dễ nhìn.

## 1. Tại sao phải UV trước khi sinh texture?

UV cho phép ánh xạ điểm trên mesh 3D sang tọa độ 2D của texture. Trong video, tác giả unwrap ở Blender **trước khi** upload model vào Tripo để sinh texture từ ảnh đa góc. Nếu UV chồng chéo ngoài chủ đích, texture có thể bị lặp hoặc nhòe không mong muốn.

## 2. Quy trình unwrap theo video

1. Mở **UV Editor** ở một cửa sổ cạnh viewport.
2. Chọn các cạnh làm đường rạch UV; `Mark Seam` quanh mắt, miệng, tay và các vùng khuất.
3. Với body, cắt sơ bộ mặt trước/sau và điều chỉnh riêng phần tay cần mở.
4. Với lông mày/lông mi có bề mặt nhìn từ trước, thử **Project From View**, rồi kiểm tra chồng lấn.
5. Tóc phức tạp có thể unwrap thủ công hoặc nhờ Claude qua Blender MCP; tác giả yêu cầu **tách mặt trong/ngoài sợi tóc** và cấp thêm diện tích cho mặt ngoài.
6. Chọn UV islands liên quan, dùng **Pack Islands** để sắp xếp và giảm overlap.

## 3. Ưu tiên độ phân giải bằng diện tích UV

| Khu vực | Mức ưu tiên trong ví dụ video | Lý do |
|---|---|---|
| Mặt | Cao | Luôn thấy rõ khi nhìn nhân vật |
| Iris / mống mắt | Cao | Chi tiết biểu cảm nổi bật |
| Cổ và một số vùng da | Trung bình | Cần đủ nét khi quay camera |
| Tóc bên ngoài | Trung bình–cao | Làm nên silhouette và phong cách |
| Trong miệng, phía sau đầu | Thấp hơn | Ít nhìn thấy |
| Vùng bị quần áo che | Thấp trong mẫu demo | Chưa tập trung làm quần áo |

**Không hiểu nhầm:** Đẩy UV island ra ngoài vùng [0,1] hoặc chồng islands một cách tùy tiện có thể gây lỗi với pipeline thông thường. Trong bài học, hãy giữ các islands cần texture trong vùng hợp lệ, không chồng lấn nếu không có chủ đích.

## 4. Kiểm tra UV

- [ ] Mặt và mắt được dành đủ diện tích.
- [ ] UV islands không tự chồng vô ý.
- [ ] Không có stretching quá mạnh ở cánh tay và tóc.
- [ ] Seam ở vị trí ít lộ hơn nếu có thể.
- [ ] Có thể export mesh cùng UV sang Tripo.

## 5. Chuẩn bị chuyển sang texturing

Trong video, tác giả nhờ trợ lý **Apply Modifiers/Transforms**, đổi tên các object cho rõ ràng, rồi `Ctrl+J` để giảm số đối tượng trước khi texture; cuối cùng còn thân và tóc. Đây là lựa chọn tổ chức pipeline, không nhất thiết phải gộp mọi object nếu tool đã hỗ trợ nhiều material/mesh.

**Bài thực hành:** tạo checker texture để soi méo UV, chỉnh các vùng mắt/tay trước khi texture AI; lưu `08_uv.blend`.

**Bài tiếp:** [Bài 09 — Texture AI và Texture Paint](09-tripo-texture-va-texture-paint.md).
