# 057 — Wooden Barrels UV's

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 04 — UV Mapping |
| **Bài học** | Wooden Barrels UV's |
| **Thời lượng** | 10:03 |
| **Chủ đề chính** | UV Mapping thùng gỗ |

## 1. Mục tiêu bài học
- Áp dụng kiến thức seam và UV island vào một mô hình thực tế: thùng gỗ (wooden barrel).
- Biết cách unwrap một mesh dạng trụ (cylindrical) sao cho các thanh gỗ dọc thân thùng không bị méo.
- Tách UV của thân thùng và hai nắp (cap) thành các island riêng biệt hợp lý.
- Kiểm tra và tinh chỉnh UV bằng checker texture trước khi áp texture gỗ thật.

## 2. Nội dung chính
Thùng gỗ là mesh dạng trụ điển hình, thường gồm: phần thân hình trụ (có thể phình nhẹ ở giữa) và hai mặt nắp tròn ở trên/dưới, cộng thêm các đai kim loại (hoop) bao quanh nếu mô hình có chi tiết đó.

Chiến lược unwrap phổ biến cho hình trụ:
- Đánh một seam dọc theo một đường sinh (vertical edge loop) trên thân trụ để "mở" thân thùng thành một hình chữ nhật phẳng — đây chính là nguyên lý của Cylinder Projection.
- Đánh seam theo vòng tròn ở mép trên và mép dưới thân trụ để tách rời thân khỏi hai nắp.
- Unwrap riêng hai mặt nắp (cap) — thường tự nhiên trở thành hình tròn gần như không méo vì mặt đã phẳng.

Có thể dùng `U → Cylinder Projection` để Blender tự động thực hiện việc này, hoặc tự đánh seam thủ công rồi dùng `U → Unwrap` để kiểm soát chính xác vị trí đường nối (quan trọng nếu texture gỗ có vân dọc theo thớ gỗ, cần thân thùng không bị méo ngang).

Sau khi có UV, cần **pack** các island (thân, nắp trên, nắp dưới, đai kim loại nếu có) gọn trong không gian UV 0–1 bằng `UV → Pack Islands`, đảm bảo tỷ lệ texel tương đối đồng đều giữa các phần.

## 3. Quy trình thực hành gợi ý
1. Mở mesh thùng gỗ ở Edit Mode, chọn Edge Select Mode.
2. Chọn một đường dọc (vertical edge loop) trên thân trụ, đánh dấu Mark Seam.
3. Chọn hai vòng tròn mép trên và mép dưới (Alt+Click để chọn loop), Mark Seam để tách nắp khỏi thân.
4. Chọn toàn bộ mesh, nhấn `U → Unwrap` (hoặc thử Cylinder Projection để so sánh).
5. Mở UV Editor, kiểm tra thân thùng đã trải thành hình chữ nhật đều, hai nắp thành hình tròn riêng.
6. Dùng checker texture để xác minh không có ô vuông bị kéo dãn bất thường.
7. Dùng `UV → Pack Islands` để sắp xếp lại các island gọn gàng, tránh chồng lấn.
8. Xoay/di chuyển thủ công các island trong UV Editor nếu cần bố cục hợp lý hơn cho bước texturing sau này.

## 4. Phím tắt & công cụ liên quan
| Phím tắt | Chức năng |
|---|---|
| `Ctrl+E → Mark Seam` | Đánh dấu seam trên cạnh đã chọn |
| `Alt+Click` | Chọn nhanh edge loop (vòng dọc hoặc vòng ngang) |
| `U → Unwrap` | Unwrap dựa trên seam |
| `U → Cylinder Projection` | Chiếu UV tự động theo hình trụ |
| `U → Pack Islands` | Sắp xếp lại các UV island gọn trong không gian 0–1 |
| `G` / `R` / `S` (trong UV Editor) | Di chuyển / xoay / scale island trong UV space |

## 5. Lưu ý & lỗi thường gặp
- Seam dọc đặt ở vị trí dễ nhìn thấy (mặt trước thùng) sẽ lộ rõ đường nối texture khi nhìn từ góc đó — nên đặt seam ở mặt sau hoặc nơi ít quan sát.
- Quên tách nắp khỏi thân bằng seam vòng khiến toàn bộ mesh unwrap thành một khối bị méo nặng.
- Không Pack Islands sau khi unwrap khiến các island chồng lấn hoặc chiếm không đều không gian UV, gây lãng phí độ phân giải texture.
- Tỷ lệ texel không đồng đều giữa thân và nắp khiến texture gỗ trông sắc nét khác nhau giữa các phần.

## 6. Checklist thực hành
- [ ] Đã đánh seam dọc thân trụ và seam vòng tách hai nắp.
- [ ] Đã unwrap và kiểm tra bằng checker texture không bị méo đáng kể.
- [ ] Đã Pack Islands để sắp xếp UV gọn gàng.
- [ ] Đã đặt seam ở vị trí ít lộ để chuẩn bị cho bước texturing.

## 7. Tóm tắt
Bài học áp dụng trực tiếp kỹ thuật seam và UV island vào mô hình thùng gỗ — một ví dụ kinh điển cho hình dạng trụ. Kết quả là một layout UV gồm thân thùng trải phẳng và hai nắp tròn riêng biệt, sẵn sàng cho bước texturing với vân gỗ ở các bài tiếp theo.
