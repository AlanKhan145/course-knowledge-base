# 024 — Creating A Barrel

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 02 — Modular Dungeon |
| **Bài học** | Creating A Barrel |
| **Thời lượng** | 9:49 |
| **Chủ đề chính** | Tạo thùng gỗ |

## 1. Mục tiêu bài học

- Dựng hình thùng gỗ (barrel) từ một Cylinder cơ bản bằng kỹ thuật box modelling.
- Sử dụng Loop Cut và Scale để tạo độ phình (bulge) đặc trưng của thùng gỗ.
- Thêm các vòng đai kim loại (metal ring) bằng Bevel hoặc geometry phụ.
- Áp dụng Subdivision Surface để làm mượt hình dáng cong.

## 2. Nội dung chính

Bắt đầu với `Shift+A > Mesh > Cylinder`, giảm số Vertices xuống mức hợp lý (khoảng 12–16 cạnh) để giữ silhouette dạng đa giác nhẹ, phù hợp phong cách low-to-mid poly của game asset. Vào Edit Mode (`Tab`), dùng `Ctrl+R` (Loop Cut) để thêm nhiều vòng cắt ngang thân thùng.

Để tạo độ phình, chọn từng loop giữa thân và `S` (Scale) tăng dần rồi giảm dần ra hai đầu, tạo đường cong barrel tự nhiên. Hai đầu thùng (top/bottom) được inset (`I`) và extrude nhẹ vào trong để tạo mặt nắp lõm.

Vòng đai kim loại có thể tạo bằng cách: chọn loop tại vị trí đai, `Ctrl+B` (Bevel) với Width nhỏ để tạo hai loop sát nhau, sau đó extrude ra ngoài một chút để tạo độ nổi khối kim loại, hoặc tách riêng một mesh trụ mỏng bọc quanh thân rồi Boolean/Join lại.

Cuối cùng, thêm modifier Subdivision Surface (mức 1–2) kết hợp với Shade Auto Smooth để làm mượt bề mặt cong mà vẫn giữ các cạnh sắc ở đai kim loại (thông qua Bevel Weight hoặc thêm loop cut hỗ trợ — support loops).

## 3. Quy trình thực hành gợi ý

1. Add Cylinder, chỉnh số cạnh và bán kính trong panel "Adjust Last Operation".
2. `Tab` vào Edit Mode, dùng Loop Cut chia thân thùng thành nhiều đoạn.
3. Scale từng loop để tạo hình phình giữa – thon hai đầu.
4. Inset và extrude âm hai mặt đầu để tạo nắp lõm.
5. Tạo các đai kim loại bằng Bevel hoặc mesh phụ.
6. Thêm modifier Subdivision Surface, bật Shade Auto Smooth.
7. Đặt Origin về tâm đáy (`Object > Set Origin > Origin to 3D Cursor`) để dễ đặt vào scene sau này.
8. Đổi tên object thành "Barrel" và gom vào Collection phù hợp.

## 4. Phím tắt & công cụ liên quan

| Phím tắt | Chức năng |
|---|---|
| `Tab` | Chuyển Object Mode / Edit Mode |
| `Ctrl+R` | Loop Cut |
| `S` | Scale |
| `I` | Inset Faces |
| `E` | Extrude |
| `Ctrl+B` | Bevel (vertex/edge) |
| `Ctrl+A` | Apply Transform (Scale/Rotation) |
| `Shift+D` | Duplicate |

## 5. Lưu ý & lỗi thường gặp

- Quên `Ctrl+A > Apply Scale` sau khi scale không đều khiến Subdivision Surface bị méo.
- Dùng quá nhiều Loop Cut làm tăng số poly không cần thiết cho một prop nhỏ.
- Không bật Auto Smooth/Shade Smooth khiến bề mặt cong trông góc cạnh dù đã có Subsurf.
- Đai kim loại không có support loop sẽ bị Subdivision Surface làm mềm mất cạnh sắc.

## 6. Checklist thực hành

- [ ] Đã tạo silhouette thùng phình giữa – thon hai đầu.
- [ ] Đã tạo nắp lõm ở hai đầu thùng.
- [ ] Đã thêm chi tiết đai kim loại.
- [ ] Đã áp Subdivision Surface + Auto Smooth hợp lý.
- [ ] Đã đặt Origin và đổi tên object.

## 7. Tóm tắt

Bài học hướng dẫn dựng một chiếc thùng gỗ hoàn chỉnh từ Cylinder bằng Loop Cut, Scale và Inset, kết hợp Subdivision Surface để có bề mặt cong mượt — một prop nền tảng thường gặp trong mọi scene modular dungeon.
