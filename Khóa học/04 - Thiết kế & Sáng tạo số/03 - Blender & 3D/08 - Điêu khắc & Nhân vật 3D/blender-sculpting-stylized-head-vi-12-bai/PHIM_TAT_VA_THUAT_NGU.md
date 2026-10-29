# Phụ lục — Phím tắt, thuật ngữ và phân biệt công cụ Blender

> Các phím là **mặc định phổ biến** trong Blender; có thể khác theo phiên bản, keymap, vùng giao diện và chế độ hiện hành. Luôn xem tooltip/menu của phiên bản bạn dùng.

## Phím tắt

| Phím | Bối cảnh | Tác dụng |
|---|---|---|
| `Numpad 1` | Viewport | Mặt trước |
| `Numpad 3` | Viewport | Mặt bên |
| `Numpad 7` | Viewport | Nhìn trên |
| Chuột giữa + kéo | Viewport | Xoay khung nhìn |
| `Shift + A` | Object/Edit | Add đối tượng/mesh tùy mode |
| `G`, `R`, `S` | Object/Edit | Move, Rotate, Scale |
| `X`, `Y`, `Z` sau G/R/S | Object/Edit | Khóa hướng trục |
| `Tab` | Viewport | Chuyển Object/Edit (tùy chế độ) |
| `Ctrl + A > Scale` | Object Mode | Apply Scale |
| `Ctrl + R` | Edit Mode mesh | Loop Cut (khi có topology thích hợp) |
| `Ctrl + J` | Object Mode, nhiều mesh | Join object |
| `Shift + D` | Object/Edit | Nhân đôi |
| `M` | Object Mode | Chuyển object vào Collection |
| `F` | Sculpt Mode (keymap phù hợp) | Điều chỉnh radius cọ |
| `Ctrl` khi tô | Sculpt Mode, brush hỗ trợ | Đảo tác động cọ |
| `Shift` khi tô | Sculpt Mode, brush hỗ trợ | Smooth tạm thời |
| `N` | Viewport | Bật/tắt Sidebar |
| `Ctrl + S` | Blender | Lưu tệp |

## Thuật ngữ Anh–Việt

| Thuật ngữ | Diễn giải đúng |
|---|---|
| Mesh | Lưới hình học (đỉnh, cạnh, mặt) |
| Sculpt / Sculpting | Điêu khắc lưới bằng cọ |
| Grab | Cọ kéo biến dạng vùng lưới |
| Draw | Cọ đắp/gọt bề mặt theo hướng tác động |
| Draw Sharp | Cọ tạo rãnh/nét sắc |
| Smooth Brush | Cọ làm mềm bề mặt |
| Subdivision Surface | Modifier chia nhỏ và làm mượt hình học |
| Shade Smooth | Cách nội suy pháp tuyến để hiển thị mượt |
| Mirror Modifier | Modifier phản chiếu hình học |
| Sculpt Symmetry | Đối xứng thao tác sculpt |
| Join | Gộp object, không mặc định hàn mesh |
| Voxel Remesh | Tạo lại lưới theo ô thể tích voxel |
| Shrinkwrap | Ép hoặc chiếu bề mặt mesh theo target |
| Solidify | Tạo độ dày cho bề mặt |
| Apply | Ghi hiệu ứng/chuyển đổi vào dữ liệu gốc |
| MatCap | Cách xem trước chất liệu/ánh sáng của viewport |
| Origin | Điểm mốc cục bộ của object |
| Modifier Stack | Danh sách modifier được tính theo thứ tự |
| Retopology | Xây lại topology có luồng cạnh phù hợp |

## Lỗi nghe/nhận dạng trong nguồn đã chuẩn hóa

- “sắp Vision serfect”, “sắp đi Vision” → **Subdivision Surface**.
- “scoot”, “sơ cấp”, “scup” → **Sculpt Mode / Sculpting**.
- “micro / meera / mirrort” → **Mirror Modifier**.
- “remote / remax” → **Remesh** (trong ngữ cảnh này là Voxel Remesh).
- “hấp dẫn mod / Optimus” → **Object Mode**.
- “ship rap / dịp rap” → **Shrinkwrap**.
- “6 lít define” → **Solidify**.
- “mua mát Cáp / claybrown” → **MatCap / Clay Brown**.

Các giá trị và thao tác không nghe rõ trong bản ghi được thay bằng hướng dẫn thao tác an toàn, không được khẳng định là trích nguyên văn từ video.
