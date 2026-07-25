# 064 — Clothes Refinement

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 08 — Final Project |
| **Bài học** | Clothes Refinement |
| **Thời lượng** | 16:25 |
| **Chủ đề chính** | Tinh chỉnh nếp gấp, độ dày và topology trang phục |

## 1. Mục tiêu bài học

- Thêm chi tiết nếp gấp/nhăn vải (fold/wrinkle) cho các mảng trang phục đã blocking ở bài trước.
- So sánh hai hướng tạo nếp gấp: sculpting thủ công và mô phỏng Cloth simulation nhẹ.
- Tinh chỉnh đường viền gấu áo, cổ áo, gấu quần cho gọn gàng.
- Thêm độ dày vải bằng **Solidify Modifier** và dọn dẹp topology tại các khớp cử động (nách, khuỷu, đầu gối) để tránh pinching.

## 2. Nội dung chính

Đây là bài dài nhất của module, tập trung biến các mảng vải khối lớn từ bài trước thành trang phục có cảm giác vải thật. Có hai hướng tiếp cận để tạo **nếp gấp (fold/wrinkle)**: (1) *Sculpting thủ công* — chuyển mảng vải sang Sculpt Mode, dùng brush **Crease** để khắc rãnh nếp gấp sâu, **Clay Strips** để đắp gờ vải phồng, và **Smooth** để làm dịu chuyển tiếp; phù hợp khi cần kiểm soát chính xác từng nếp theo concept. (2) *Cloth Simulation nhẹ* — bật `Physics Properties > Cloth`, gán **Vertex Group Pin** cho các vùng vải cố định vào cơ thể (vai, thắt lưng), bật **Collision** trên object cơ thể để vải rơi tự nhiên và tạo nếp gấp vật lý; sau khi mô phỏng ra hình dáng ưng ý, có thể **Apply as Shape Key** hoặc Apply Modifier để "đóng băng" kết quả rồi tiếp tục sculpt tay chỉnh sửa thêm.

Sau khi có nếp gấp, các đường viền như cổ áo, gấu tay, gấu quần cần được làm gọn: dùng `Ctrl + R` thêm Loop Cut dọc theo viền để kiểm soát độ cong, hoặc Bevel cạnh viền (`Ctrl + B`) với vài segment để tránh cạnh sắc gãy khúc thiếu tự nhiên trên vải.

Tiếp theo, thêm **Solidify Modifier** (`Add Modifier > Generate > Solidify`) cho từng mảng vải để tạo độ dày thực — tham số Thickness nên nhỏ (vài milimet theo tỷ lệ scene) và có thể bật **Rim Fill** để đóng kín các cạnh hở (gấu tay áo, gấu quần) thành mép vải có độ dày nhìn thấy được.

Cuối cùng, bài học nhấn mạnh việc **dọn dẹp topology tại các khớp** — nách, khuỷu tay, đầu gối — nơi vải dễ bị nén/kéo dãn khi nhân vật cử động (chuẩn bị cho bài rig ở sau). Thêm Loop Cut bổ sung quanh khớp để có đủ edge loop chịu biến dạng, tránh tình trạng "pinching" (mesh bị tóp lại thành điểm nhọn) khi Subdivision Surface hoặc rig sau này bẻ cong khu vực đó.

## 3. Quy trình thực hành gợi ý

1. Vào Sculpt Mode trên từng mảng vải, dùng Crease và Clay Strips khắc nếp gấp chính theo hướng trọng lực và điểm neo (vai, thắt lưng).
2. (Tùy chọn) Bật Cloth Simulation, gán Pin Group, chạy vài frame để lấy dáng vải rơi tự nhiên, sau đó Apply.
3. Loop Cut và Bevel các đường viền cổ áo/gấu tay/gấu quần cho mềm mại.
4. Thêm Solidify Modifier, chỉnh Thickness nhỏ, bật Rim Fill để đóng mép vải hở.
5. Zoom vào từng khớp (nách, khuỷu, đầu gối), thêm Loop Cut bổ sung để chuẩn bị chịu biến dạng khi rig.
6. Apply Solidify sau khi hài lòng với độ dày, rồi Shade Smooth kết hợp Auto Smooth để bề mặt vải mượt mà.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt |
|---|---|
| Vào/thoát Sculpt Mode | Chuyển workspace "Sculpting" |
| Brush Crease / Clay Strips / Smooth | Chọn trong thanh công cụ Sculpt (`Shift` giữ = Smooth tạm thời) |
| Bật Cloth Physics | `Physics Properties > Cloth` |
| Gán Pin Group | `Vertex Groups` + chọn trong panel Cloth > Shape > Pin |
| Loop Cut | `Ctrl + R` |
| Bevel cạnh | `Ctrl + B` |
| Thêm Solidify Modifier | `Add Modifier > Generate > Solidify` |

## 5. Lưu ý & lỗi thường gặp

- Sculpt nếp gấp quá đều và lặp lại khiến vải trông giả, thiếu tính ngẫu nhiên tự nhiên của vải thật.
- Cloth Simulation không bật Collision với cơ thể khiến vải rơi xuyên qua mesh body.
- Solidify Thickness quá lớn làm trang phục trông dày như áo giáp thay vì vải mềm.
- Bỏ qua bước dọn topology tại khớp khiến vải bị pinching nghiêm trọng khi rig bẻ cong tay ở bài sau.
- Apply Cloth Modifier quá sớm khi chưa ưng ý dáng vải khiến khó chỉnh sửa lại vì mất khả năng re-simulate.

## 6. Checklist thực hành

- [ ] Mỗi mảng trang phục đã có nếp gấp rõ ràng, không đều đặn máy móc.
- [ ] Đường viền cổ áo/gấu tay/gấu quần đã được làm gọn và mềm mại.
- [ ] Đã thêm Solidify Modifier với độ dày hợp lý cho toàn bộ trang phục.
- [ ] Các khớp nách, khuỷu, đầu gối đã có đủ edge loop để chịu biến dạng.

## 7. Tóm tắt

Kết hợp sculpting và/hoặc Cloth Simulation để tạo nếp gấp, cùng với Solidify cho độ dày và dọn topology tại khớp, biến các mảng vải blocking thô ở bài trước thành trang phục có cảm giác chất liệu thật, sẵn sàng cho các bước tinh chỉnh cơ thể và rig tiếp theo.
