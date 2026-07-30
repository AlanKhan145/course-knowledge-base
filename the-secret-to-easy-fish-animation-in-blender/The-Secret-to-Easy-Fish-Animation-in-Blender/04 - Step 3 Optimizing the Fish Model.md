# 04 — Bước 3: Tối ưu hóa model cá

| Thuộc tính | Nội dung |
|---|---|
| **Video** | The Secret to Easy Fish Animation in Blender! |
| **Đoạn** | Step three |
| **Thời điểm** | 01:30–02:09 |
| **Chủ đề chính** | Giảm tải vertex bằng Decimate, sửa lỗi mesh bằng Merge by Distance |

## 1. Mục tiêu bài học

- Hiểu vì sao model scan orbit mượt trong viewport nhưng lại chậm hẳn khi bắt đầu biến dạng (deform).
- Biết dùng Decimate modifier như một giải pháp "nhanh và bẩn" (quick & dirty) để giảm số lượng vertex.
- Nhận diện và sửa lỗi mesh trông "vỡ" sau Decimate — thường do vertex trùng lặp — bằng Merge by Distance.
- Hiểu vì sao cần Apply modifier trước khi tiếp tục sang bước animate.

## 2. Nội dung chính

Sau khi import, model cá có **số lượng vertex rất cao** — hệ quả trực tiếp của việc nó được tạo ra bằng scan/photogrammetry (đã nêu ở chương 01). Với số lượng poly cao này, việc chỉ **xoay/quan sát model trong chế độ xem 3D (orbit trong viewport)** hoàn toàn không có vấn đề gì — GPU xử lý việc hiển thị tĩnh khá nhẹ nhàng. Nhưng ngay khi bắt đầu **làm biến dạng lưới (deform)** — chính là điều sẽ xảy ra liên tục ở bước gắn Curve Modifier và animate — **mọi thứ sẽ trở nên rất chậm**, vì việc tính toán lại vị trí hàng trăm nghìn vertex ở mỗi khung hình tốn tài nguyên hơn nhiều so với chỉ hiển thị tĩnh.

Giải pháp được đề xuất là một cách khắc phục **"nhanh và bẩn"** (quick & dirty — ưu tiên tốc độ hơn là độ hoàn hảo): dùng **Decimate modifier** để thu gọn các cạnh (chế độ Collapse), giảm đáng kể số lượng vertex trong khi vẫn giữ được hình dáng tổng thể ở mức chấp nhận được. Đây không phải retopology thực thụ (không tạo topology quad sạch), nhưng đủ nhanh và đủ tốt cho mục đích của kỹ thuật này.

Một vấn đề thường gặp ngay sau khi áp Decimate: mesh trông **bị "vỡ"/hỏng** (các mặt bị rách, lỗ hổng lạ). Nguyên nhân phổ biến nhất trong trường hợp này là mesh gốc có **các đỉnh (vertex) trùng lặp** — thường xảy ra tự nhiên với mesh xuất ra từ quy trình scan. Cách khắc phục: vào **Edit Mode**, đảm bảo **tất cả vertex đã được chọn** (`A`), sau đó vào menu **Mesh > Merge > By Distance** (gộp các vertex nằm quá gần nhau trong một ngưỡng khoảng cách thành một vertex duy nhất) — thao tác này thường sửa được phần lớn lỗi vỡ mesh do Decimate gây ra.

Cuối cùng, sau khi hài lòng với kết quả, cần **Apply Decimate modifier** để nó "không được tính toán lại trong mọi khung hình" — biến kết quả giảm poly thành mesh cố định, giúp Blender không phải chạy lại thuật toán Decimate ở mỗi frame trong lúc animate, giữ cho viewport mượt mà thực sự trong thời gian thực.

## 3. Quy trình thực hành gợi ý

1. Sau khi import, kiểm tra số lượng vertex/face qua overlay Statistics để xác nhận model thực sự nặng.
2. Thêm Decimate modifier (chế độ Collapse), giảm dần tỉ lệ và quan sát hình dáng cá trong viewport cho đến khi đạt mức cân bằng giữa hiệu năng và chi tiết.
3. Nếu mesh trông bị vỡ/rách sau Decimate: vào Edit Mode, nhấn `A` để chọn tất cả vertex, vào `Mesh > Merge > By Distance`.
4. Kiểm tra lại hình dáng mesh sau khi Merge — nếu vẫn còn lỗi, thử tăng ngưỡng khoảng cách của Merge by Distance trong panel thao tác cuối (F6/bottom-left operator panel).
5. Khi đã hài lòng với kết quả, Apply Decimate modifier để chốt lại mesh, tránh tính toán lại mỗi frame.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt/Vị trí |
|---|---|
| Bật overlay Statistics (xem số vertex/face) | Viewport Overlays > Statistics |
| Thêm Decimate modifier | Modifier Properties > Add Modifier > Generate > Decimate |
| Chọn tất cả vertex (Edit Mode) | `A` |
| Gộp vertex trùng lặp | `Mesh > Merge > By Distance` (hoặc `M > By Distance`) |
| Apply modifier | `Ctrl + A` khi hover trên modifier, hoặc menu chevron > Apply |

## 5. Lưu ý & lỗi thường gặp

- Decimate quá mạnh có thể phá hỏng các chi tiết nhỏ quan trọng (mắt, mép vây) — đây là đánh đổi chấp nhận được theo tinh thần "quick & dirty" của kỹ thuật này, nhưng nên kiểm tra trực quan kỹ trước khi Apply.
- Nếu mesh vẫn "vỡ" sau Merge by Distance, có thể do ngưỡng khoảng cách mặc định quá nhỏ so với lỗi trùng lặp thực tế trong mesh — thử tăng giá trị này trong panel thao tác vừa thực hiện.
- Quên Apply Decimate trước khi sang bước animate khiến Blender phải tính lại toàn bộ thuật toán giảm poly ở mỗi khung hình — làm mất đi lợi ích hiệu năng mà bước tối ưu này mang lại, ngược với mục tiêu "chạy real-time trong Eevee" đã hứa ở chương 01.
- Đây là giải pháp "quick & dirty", không phải retopology chuẩn — nếu cần chất lượng deform cao hơn cho một dự án chuyên nghiệp, vẫn nên cân nhắc retopology thủ công dù tốn thời gian hơn.

## 6. Checklist thực hành

- [ ] Đã xác nhận model có số lượng vertex cao gây chậm khi deform.
- [ ] Đã thêm Decimate modifier và giảm poly ở mức chấp nhận được.
- [ ] Đã sửa lỗi mesh vỡ (nếu có) bằng Merge by Distance.
- [ ] Đã Apply Decimate modifier để chốt mesh trước khi sang bước gắn Curve modifier.

## 7. Tóm tắt

Tối ưu model là bước bắt buộc để mesh scan dày đặc có thể biến dạng mượt trong thời gian thực — Decimate kết hợp Merge by Distance là giải pháp nhanh, không hoàn hảo nhưng đủ dùng, và việc Apply modifier trước khi animate là điều kiện tiên quyết để giữ đúng lời hứa "real-time trong Eevee" của video.
