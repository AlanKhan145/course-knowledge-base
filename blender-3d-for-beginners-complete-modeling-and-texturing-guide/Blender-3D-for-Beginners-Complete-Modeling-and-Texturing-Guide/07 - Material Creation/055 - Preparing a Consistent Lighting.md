# 055 — Preparing a Consistent Lighting

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 07 — Material Creation |
| **Bài học** | Preparing a Consistent Lighting |
| **Thời lượng** | 3:40 |
| **Chủ đề chính** | Thiết lập ánh sáng trung tính để đánh giá vật liệu |

## 1. Mục tiêu bài học

- Hiểu vì sao cần một hệ ánh sáng "trung tính, lặp lại được" khi phát triển vật liệu, tách biệt khỏi ánh sáng của scene cuối.
- Biết cách thiết lập nhanh một World HDRI đơn giản làm ánh sáng môi trường.
- Biết dựng một rig ánh sáng studio 2-3 điểm (Key, Fill, Rim/Back) làm phương án thay thế.
- Nhận diện các yếu tố khiến đánh giá vật liệu bị sai lệch nếu ánh sáng không nhất quán.

## 2. Nội dung chính

Khi phát triển vật liệu (đặc biệt là Roughness, Metallic, các phản chiếu tinh tế), việc đánh giá dưới ánh sáng thay đổi liên tục — hoặc dưới ánh sáng phẳng, thiếu định hướng — sẽ khiến người dựng khó phán đoán chính xác kết quả. Một **hệ ánh sáng nhất quán** (consistent lighting rig) giúp mọi thử nghiệm màu sắc, độ nhám, độ phản chiếu được so sánh trên cùng một điều kiện chiếu sáng, tránh việc chỉnh sai do ảo giác thị giác từ ánh sáng không ổn định.

Cách nhanh và phổ biến nhất là dùng **World HDRI** (High Dynamic Range Image) — một ảnh môi trường 360° chứa cả thông tin ánh sáng lẫn phản chiếu thực tế. Trong tab **World Properties**, đổi Color từ RGB phẳng sang **Environment Texture**, load một file HDRI (ví dụ HDRI studio neutral từ Poly Haven), rồi dùng node **Mapping** (nối qua Texture Coordinate > Generated) để xoay hướng chiếu sáng nếu cần. HDRI studio trung tính (nền xám, ánh sáng dịu, không màu sắc chủ đạo) là lựa chọn tốt nhất để không làm lệch cảm nhận màu Base Color.

Phương án thay thế không cần file HDRI là dựng **rig ánh sáng studio 2-3 điểm** bằng Light object trong Blender:

- **Key Light**: nguồn sáng chính, mạnh nhất, đặt chếch khoảng 30-45° so với camera, quyết định hướng bóng đổ chủ đạo.
- **Fill Light**: nguồn sáng phụ, yếu hơn Key (khoảng 30-50% cường độ), đặt đối diện Key để làm dịu vùng bóng tối, tránh tương phản quá gắt.
- **Rim/Back Light**: nguồn sáng phía sau vật thể, tạo viền sáng tách vật thể khỏi nền, hữu ích để thấy rõ silhouette và các phản chiếu cạnh (Fresnel).

Loại Light phù hợp cho setup này thường là **Area Light** (ánh sáng mềm, có kích thước, mô phỏng softbox studio) hơn là Point/Sun vì cho phản chiếu mượt mà, dễ kiểm soát hơn trên các bề mặt bóng.

## 3. Quy trình thực hành gợi ý

1. Mở **World Properties**, đổi input Color của Background thành **Environment Texture**.
2. Tải một HDRI studio trung tính (từ Poly Haven hoặc thư viện có sẵn), gán vào Environment Texture.
3. Chèn Texture Coordinate (Generated) > Mapping trước Environment Texture để có thể xoay hướng HDRI bằng Rotation Z.
4. Thử phương án thay thế: xóa/ẩn World HDRI, thêm 3 Area Light (Key, Fill, Rim) quanh một Sphere test vật liệu.
5. Chỉnh Power và khoảng cách từng Light để đạt tỷ lệ sáng-tối hợp lý (Key mạnh, Fill dịu, Rim tạo viền).
6. Lưu scene test này riêng (hoặc đặt trong một Collection ẩn) để tái sử dụng cho các bài vật liệu tiếp theo.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Vị trí |
|---|---|
| Mở World Properties | Properties Editor > tab World (biểu tượng địa cầu) |
| Đổi sang Environment Texture | World Properties > Color > Environment Texture |
| Thêm Texture Coordinate/Mapping cho World | Shader Editor > chế độ "World" (dropdown trên cùng) |
| Thêm Light mới | `Shift + A > Light > Area` |
| Chỉnh cường độ Light | Properties Editor > tab Light > Power |
| Xem kết quả thời gian thực | `Z` > Rendered |

## 5. Lưu ý & lỗi thường gặp

- Đánh giá vật liệu ở **Material Preview** (dùng ánh sáng studio giả lập cố định của Blender) rồi ngạc nhiên khi kết quả khác biệt lúc chuyển sang **Rendered** với ánh sáng scene thật — nên chốt bằng Rendered View với rig ánh sáng đã chuẩn bị.
- Dùng HDRI có màu sắc chủ đạo mạnh (ví dụ hoàng hôn cam) khi đánh giá Base Color sẽ khiến mắt đánh giá sai màu thực của vật liệu — nên ưu tiên HDRI trung tính, cân bằng trắng tốt.
- Quên rằng thay đổi ánh sáng giữa các lần test khiến việc so sánh trước/sau không còn khách quan — cần giữ rig cố định trong suốt quá trình phát triển một vật liệu.
- Rim Light quá mạnh có thể gây cháy sáng (overexposed) ở viền, che mất chi tiết thực của vật liệu.

## 6. Checklist thực hành

- [ ] Đã thiết lập được World HDRI trung tính cho việc đánh giá vật liệu.
- [ ] Đã biết xoay hướng HDRI bằng Mapping/Rotation.
- [ ] Đã dựng được rig ánh sáng studio 3 điểm (Key/Fill/Rim) thay thế.
- [ ] Đã lưu lại rig ánh sáng để tái sử dụng cho các bài vật liệu sau.

## 7. Tóm tắt

Một hệ ánh sáng trung tính và nhất quán — dù bằng World HDRI hay rig studio 2-3 điểm — là điều kiện tiên quyết để đánh giá chính xác các thay đổi màu sắc và độ phản chiếu khi phát triển vật liệu ở các bài tiếp theo.
