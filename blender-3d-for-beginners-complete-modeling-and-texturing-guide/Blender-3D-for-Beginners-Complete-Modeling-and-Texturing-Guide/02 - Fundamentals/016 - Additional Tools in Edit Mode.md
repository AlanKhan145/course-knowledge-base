# 016 — Additional Tools in Edit Mode

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 02 — Fundamentals |
| **Bài học** | Additional Tools in Edit Mode |
| **Thời lượng** | 6:47 |
| **Chủ đề chính** | Knife, Vertex/Edge Slide, Rip Region, Grid Fill, Triangulate, Merge by Distance, Bridge Edge Loops |

## 1. Mục tiêu bài học

- Biết cắt mesh tự do bằng Knife Tool (`K`).
- Biết trượt vertex/edge dọc theo hình học lân cận bằng Vertex/Edge Slide.
- Biết tách rời hình học bằng Rip Region (`V`).
- Biết lấp lỗ hổng bằng Grid Fill, chuyển n-gon thành tam giác bằng Triangulate, gộp các đỉnh trùng nhau bằng Merge by Distance, và nối hai vòng cạnh mở bằng Bridge Edge Loops.

## 2. Nội dung chính

**Knife Tool** (`K`) cho phép cắt cạnh mới tự do trên bề mặt mesh bằng cách click từng điểm cắt, kết thúc bằng `Enter`. Giữ `Ctrl` để bật snap vào giữa cạnh, `C` để bật chế độ cắt đi qua nhiều mặt liên tục theo đường thẳng (Cut Through khi bật `Z`), hữu ích khi cần thêm chi tiết không theo lưới cạnh sẵn có, ví dụ khoét rãnh trang trí trên bề mặt hard-surface.

**Vertex Slide** (`Shift + V`) và **Edge Slide** (`G` `G` hoặc `Ctrl + E > Edge Slide`) di chuyển một vertex/edge dọc theo các cạnh lân cận hiện có thay vì tự do trong không gian 3D — giữ nguyên hình dạng tổng thể của mesh trong khi tinh chỉnh vị trí phân bố cạnh, rất hữu ích để căn chỉnh loop cut lệch tâm.

**Rip Region** (`V`) tách một vertex/edge đang chọn ra khỏi các face xung quanh, tạo một khoảng hở (mesh không còn liền mạch tại điểm đó) — dùng khi cần "xé" mesh để kéo một phần ra riêng, ví dụ tạo vết nứt hoặc tách một mảng bề mặt.

**Grid Fill** (`Face > Grid Fill`) lấp đầy một lỗ hổng mở bằng lưới quad đều đặn, yêu cầu số cạnh biên là số chẵn — rất hữu ích để bít các lỗ tròn/oval bằng topology sạch thay vì dùng Fill tam giác lộn xộn. **Triangulate Faces** (`Ctrl + T`) chuyển toàn bộ n-gon/quad đang chọn thành tam giác, thường dùng trước khi export sang engine khác. **Merge by Distance** (`M > By Distance`) gộp các vertex nằm gần nhau trong một ngưỡng khoảng cách thành một điểm — bước dọn dẹp bắt buộc sau các thao tác như Mirror hay Boolean để tránh vertex trùng lặp. **Bridge Edge Loops** (`Edge > Bridge Edge Loops`) tự động tạo các face nối liền hai vòng cạnh mở đang chọn, tiết kiệm rất nhiều thời gian so với nối tay từng face.

## 3. Quy trình thực hành gợi ý

1. Thêm một Plane, Subdivide vài lần, dùng Knife (`K`) cắt một đường zig-zag tự do qua bề mặt, `Enter` để xác nhận.
2. Xóa một face ở giữa mesh để tạo lỗ hổng có 4 hoặc 6 cạnh biên, chọn các cạnh biên đó rồi dùng `Face > Grid Fill`.
3. Trên một mesh khác, chọn hai vòng cạnh mở song song (ví dụ miệng trên và dưới của một ống trụ bị cắt hở), dùng `Edge > Bridge Edge Loops` để nối chúng.
4. Chọn một vertex, nhấn `V` để Rip, kéo ra khỏi vị trí cũ để thấy khoảng hở.
5. Nhân đôi một phần mesh chồng lên vị trí cũ, chọn tất cả (`A`), chạy `M > By Distance` và quan sát số vertex bị gộp báo trong Status Bar.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt |
|---|---|
| Knife Tool | `K` |
| Cắt xuyên qua nhiều mặt (khi dùng Knife) | `Z` |
| Snap vào giữa cạnh (khi dùng Knife) | `Ctrl` |
| Vertex Slide | `Shift + V` |
| Edge Slide | `G` `G` |
| Rip Region | `V` |
| Grid Fill | `Face > Grid Fill` |
| Triangulate Faces | `Ctrl + T` |
| Merge by Distance | `M` → `By Distance` |
| Bridge Edge Loops | `Edge > Bridge Edge Loops` |

## 5. Lưu ý & lỗi thường gặp

- Grid Fill sẽ báo lỗi hoặc cho kết quả xấu nếu số cạnh biên của lỗ hổng là số lẻ — cần thêm/bớt một Loop Cut để chỉnh về số chẵn.
- Quên chạy Merge by Distance sau Mirror hoặc Boolean là nguyên nhân phổ biến nhất gây lỗi shading và bóng đen (dark faces) ở đường nối.
- Bridge Edge Loops có thể tạo mặt xoắn (twisted) nếu hai vòng cạnh không cùng hướng vertex — thử nút Flip trong bảng Adjust Last Operation nếu kết quả bị vặn.
- Triangulate Faces nên là bước gần cuối cùng (trước khi export), không nên tam giác hóa quá sớm vì sẽ gây khó khăn cho các thao tác Edit Mode tiếp theo như Loop Cut.

## 6. Checklist thực hành

- [ ] Đã dùng Knife Tool cắt một đường tự do trên mesh.
- [ ] Đã lấp một lỗ hổng bằng Grid Fill với số cạnh biên chẵn.
- [ ] Đã nối hai vòng cạnh mở bằng Bridge Edge Loops.
- [ ] Đã dùng Rip Region để tách rời hình học.
- [ ] Đã chạy Merge by Distance và quan sát số vertex bị gộp.

## 7. Tóm tắt

Nhóm công cụ này giải quyết các tình huống mà Extrude/Inset/Bevel/Loop Cut cơ bản không xử lý được: cắt tự do, trượt theo lưới có sẵn, xé mesh, lấp lỗ bằng topology sạch, và dọn dẹp vertex trùng — những kỹ năng "dọn dẹp mesh" sẽ được dùng liên tục trong suốt các dự án thực hành sau này.
