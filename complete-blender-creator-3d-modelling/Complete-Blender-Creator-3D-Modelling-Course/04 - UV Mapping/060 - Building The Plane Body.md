# 060 — Building The Plane Body

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 04 — UV Mapping |
| **Bài học** | Building The Plane Body |
| **Thời lượng** | 5:23 |
| **Chủ đề chính** | Dựng thân máy bay |

## 1. Mục tiêu bài học
- Bắt đầu dựng thân máy bay (fuselage) dựa theo ảnh tham chiếu đã thiết lập.
- Áp dụng box modelling: bắt đầu từ một khối cơ bản rồi thêm chi tiết dần.
- Sử dụng Mirror Modifier để chỉ cần model một nửa thân máy bay.
- Dùng Loop Cut và Proportional Editing để tạo dáng cong tự nhiên cho thân.

## 2. Nội dung chính
Thân máy bay thường được dựng theo phương pháp **box modelling**: bắt đầu từ một mesh đơn giản (cube hoặc cylinder), sau đó dùng loop cut để thêm cạnh, rồi kéo/scale từng vòng cạnh (edge loop) theo hình dạng thân máy bay quan sát được từ ảnh tham chiếu Front và Side.

Vì máy bay đối xứng qua mặt phẳng dọc thân (trục X), nên chỉ cần model một nửa và dùng **Mirror Modifier** (trục X, bật Clipping để hai nửa luôn khớp liền tại đường giữa) để tự động phản chiếu nửa còn lại. Điều này giúp tiết kiệm thời gian và đảm bảo đối xứng hoàn hảo.

Quy trình dựng dáng cơ bản:
- Thêm một mesh cơ bản (ví dụ Cylinder hoặc Cube) làm gốc cho thân.
- Dùng `Ctrl+R` (Loop Cut) để chia thân thành nhiều đoạn dọc theo chiều dài, tương ứng các điểm mốc quan trọng trên ảnh tham chiếu (mũi, khoang lái, đuôi).
- Chọn từng vòng cạnh, dùng `S` (Scale) để phồng/hóp thân theo đúng đường viền ảnh, có thể kết hợp Proportional Editing (`O`) để tạo độ chuyển mượt giữa các đoạn.
- Kéo (`E` — Extrude) phần mũi và đuôi để tạo độ thon nhọn tự nhiên.

Nên thường xuyên xoay góc nhìn giữa Front, Side và Perspective để đối chiếu dáng thân với cả hai ảnh tham chiếu cùng lúc, tránh chỉ tham chiếu một góc nhìn duy nhất khiến mesh bị lệch ở góc còn lại.

## 3. Quy trình thực hành gợi ý
1. Thêm mesh cơ bản (Cylinder/Cube) tại vị trí thân máy bay, dịch một nửa sang trục X dương để chuẩn bị Mirror.
2. Thêm Mirror Modifier, chọn trục X, bật Clipping.
3. Vào Edit Mode, dùng `Ctrl+R` thêm loop cut dọc theo chiều dài thân theo các mốc trên ảnh tham chiếu.
4. Scale từng edge loop để khớp đường viền thân từ ảnh Side và Front, xen kẽ kiểm tra ở cả hai góc nhìn.
5. Extrude phần mũi và đuôi máy bay để tạo độ vuốt nhọn.
6. Dùng Proportional Editing khi cần chỉnh dáng cong mượt mà hơn thay vì di chuyển từng vertex cứng.
7. Kiểm tra đối xứng bằng cách xoay view sang Perspective, xác nhận Mirror hoạt động đúng không có khe hở ở giữa.

## 4. Phím tắt & công cụ liên quan
| Phím tắt | Chức năng |
|---|---|
| `Ctrl+R` | Loop Cut (thêm vòng cạnh mới) |
| `E` | Extrude (kéo mặt/cạnh để tạo hình mới) |
| `S` | Scale |
| `O` | Bật/tắt Proportional Editing |
| `Ctrl+2` (trên Modifier) | Áp Multiresolution/Subdivision preview mức 2 (nếu dùng thêm Subdivision Surface) |
| `Numpad 1` / `Numpad 3` | Chuyển góc nhìn Front / Side để đối chiếu ảnh tham chiếu |

## 5. Lưu ý & lỗi thường gặp
- Quên bật Clipping trên Mirror Modifier khiến đường giữa thân bị hở khi các vertex trung tâm không nằm đúng trên trục X = 0.
- Chỉ tham chiếu một ảnh (chỉ Front hoặc chỉ Side) khiến thân máy bay đúng ở góc này nhưng sai lệch rõ ở góc kia.
- Thêm quá nhiều loop cut ngay từ đầu khiến mesh khó kiểm soát; nên bắt đầu với ít đoạn, tăng dần khi cần chi tiết hơn.
- Không kiểm tra pháp tuyến (normal) mặt ngoài có thể gây lỗi hiển thị bóng đổ sai khi render sau này (dùng Overlay → Face Orientation để kiểm tra).

## 6. Checklist thực hành
- [ ] Đã dựng được khối thân cơ bản đối xứng qua Mirror Modifier.
- [ ] Đã thêm loop cut và scale khớp theo cả ảnh Front và Side.
- [ ] Đã tạo được độ thon ở mũi và đuôi máy bay.
- [ ] Đã kiểm tra không có khe hở tại đường giữa thân.

## 7. Tóm tắt
Bài học bắt đầu quá trình modelling máy bay bằng cách dựng thân từ một khối cơ bản, sử dụng box modelling kết hợp Mirror Modifier để đảm bảo đối xứng, tạo nền tảng hình khối cho các chi tiết cánh và bộ phận khác ở các bài tiếp theo.
