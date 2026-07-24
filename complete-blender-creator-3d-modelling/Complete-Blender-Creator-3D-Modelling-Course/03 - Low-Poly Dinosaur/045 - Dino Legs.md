# 045 — Dino Legs

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 03 — Low-Poly Dinosaur |
| **Bài học** | Dino Legs |
| **Thời lượng** | 9:05 |
| **Chủ đề chính** | Tạo chân khủng long |

## 1. Mục tiêu bài học

- Extrude chân từ mesh thân theo đúng vị trí và góc trong ảnh tham chiếu.
- Tạo khớp gối/mắt cá bằng loop cut để chân có hình dáng tự nhiên hơn.
- Đảm bảo chân đối xứng trái/phải thông qua Mirror Modifier.
- Giữ tỉ lệ chân phù hợp với trọng lượng và tư thế đứng của thân.

## 2. Nội dung chính

Chân được tạo bằng cách chọn một cụm face ở phần bụng/hông của thân rồi **Extrude** liên tiếp xuống dưới để hình thành đùi, cẳng chân và bàn chân. Vì mesh đã có Mirror Modifier từ bài trước, chỉ cần dựng chân bên trái (hoặc phải) trong nửa mesh đang làm việc, bên còn lại sẽ tự động sinh ra.

Quy trình extrude chân điển hình gồm:

1. Chọn các face tại vị trí gốc chân trên thân (theo ảnh tham chiếu Side để xác định đúng điểm nối hông/vai).
2. Extrude (E) xuống theo trục Z tạo đùi, dùng loop cut (Ctrl+R) chia thêm một vòng cạnh làm khớp gối.
3. Extrude tiếp tạo cẳng chân, hơi gập góc tại khớp gối để tạo dáng đứng tự nhiên (khủng long hai chân sau thường có tư thế chân hơi cong).
4. Extrude cuối cùng dẹt ra tạo bàn chân, chuẩn bị vị trí để thêm móng vuốt ở bài sau.

Vì đây là khủng long hai chân trước ngắn - hai chân sau to khỏe (dạng theropod), chân sau thường to và dài hơn nhiều so với tay/chân trước sẽ làm ở bài Dino Face. Cần đặc biệt chú ý cân bằng trọng lượng thị giác: chân sau đủ to và vững để "đỡ" được cả khối thân khi nhìn silhouette tổng thể.

Khi extrude nhiều đoạn liên tiếp, nên bật **Statistics overlay** (trong Viewport Overlays) để theo dõi số lượng face/vertex, tránh mesh phình to quá mức cần thiết cho phong cách low-poly.

## 3. Quy trình thực hành gợi ý

1. Ở view Side, xác định vị trí gốc chân trên thân theo ảnh tham chiếu.
2. Chọn face tương ứng bằng Face Select Mode (phím 3), Extrude (E) xuống tạo đùi.
3. Thêm Loop Cut tại vị trí khớp gối, xoay/di chuyển nhẹ để tạo góc gập tự nhiên.
4. Extrude tiếp tạo cẳng chân và bàn chân, dẹt bàn chân theo trục Z gần mặt đất.
5. Kiểm tra ở view Front đảm bảo chân không lệch khỏi trục đối xứng X=0 (Mirror Modifier).
6. Xoay Perspective kiểm tra tư thế đứng, chỉnh lại góc khớp gối nếu chân trông "thẳng đơ".
7. Merge các vertex trùng nhau nếu có bằng M > By Distance sau khi extrude nhiều lần.

## 4. Phím tắt & công cụ liên quan

| Phím tắt | Chức năng |
|---|---|
| 3 | Face Select Mode |
| E | Extrude |
| E, sau đó Z | Extrude khóa theo trục Z |
| Ctrl+R | Loop Cut (tạo khớp gối) |
| R | Rotate (bẻ góc khớp) |
| M | Merge Vertices (By Distance) |
| Ctrl+J | Join nếu chân được dựng là object riêng cần gộp vào thân |

## 5. Lưu ý & lỗi thường gặp

- Extrude không khóa trục dễ khiến chân bị lệch khỏi mặt phẳng đối xứng, tạo lỗi khi Mirror.
- Chân quá mảnh so với thân khiến silhouette mất cân bằng, trông không vững.
- Quên thêm khớp gối (loop cut) khiến chân thẳng đơ, thiếu tự nhiên.
- Không kiểm tra ở view Front thường xuyên có thể khiến hai chân không đối xứng đúng qua Mirror.
- Để lại vertex/face thừa (ví dụ n-gon không cần thiết) ở điểm nối chân-thân gây lỗi shading sau này.

## 6. Checklist thực hành

- [ ] Đã extrude đủ đùi, cẳng chân và bàn chân theo ảnh tham chiếu.
- [ ] Khớp gối đã được tạo bằng loop cut và bẻ góc hợp lý.
- [ ] Chân đối xứng chính xác qua Mirror Modifier.
- [ ] Tỉ lệ chân cân đối với khối thân khi nhìn silhouette tổng thể.
- [ ] Không còn vertex/face thừa tại điểm nối chân-thân.

## 7. Tóm tắt

Bài học hướng dẫn extrude và tạo hình chân khủng long từ mesh thân, chú trọng vào tư thế đứng tự nhiên và cân bằng tỉ lệ tổng thể. Chân sau là bộ phận chịu trọng lượng chính của nhân vật nên cần được dựng chắc chắn, làm nền cho việc thêm móng vuốt ở bài tiếp theo.
