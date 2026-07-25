# 057 — Creating a Professional Hard-Surface Material

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 07 — Material Creation |
| **Bài học** | Creating a Professional Hard-Surface Material |
| **Thời lượng** | 15:10 |
| **Chủ đề chính** | Vật liệu kim loại/nhựa đã qua sử dụng bằng kỹ thuật edge wear |

## 1. Mục tiêu bài học

- Hiểu quy trình "layer" nhiều lớp mask để tạo vật liệu hard-surface trông chân thực, đã qua sử dụng.
- Sử dụng node **Geometry** (output Pointiness) để mô phỏng mài mòn ở các cạnh lồi.
- Sử dụng node **Ambient Occlusion** để mô phỏng bụi bẩn/grime tích tụ ở khe kẽ, góc lõm.
- Kết hợp các mask này với ColorRamp và Mix để biến thiên Base Color và Roughness một cách có kiểm soát.

## 2. Nội dung chính

Vật liệu hard-surface "trông rẻ tiền" thường vì nó đồng nhất tuyệt đối — Roughness và Base Color giống hệt nhau trên toàn bộ bề mặt. Vật thể thật (kim loại, nhựa công nghiệp) luôn có dấu vết sử dụng: cạnh bị mài bóng do va chạm/cầm nắm, khe kẽ tích bụi bẩn, bề mặt phẳng có độ nhám vi mô không đều. Kỹ thuật chuyên nghiệp là **layer hóa** các yếu tố này bằng mask, thay vì đặt một giá trị Roughness/Color cố định.

**Curvature/Pointiness** — output **Pointiness** của node **Geometry** trả về giá trị dựa trên độ cong bề mặt tại từng điểm: giá trị cao ở các cạnh lồi sắc nét (convex edges), giá trị thấp/âm ở các khe lõm (concave). Đây chính là mask lý tưởng cho **edge wear** (mài mòn ở cạnh) — vì trong đời thực, các cạnh lồi là nơi tiếp xúc, va chạm nhiều nhất nên lớp sơn/oxit dễ bị mài bong, để lộ kim loại sáng bóng bên dưới. Thường cần đẩy Pointiness qua một **ColorRamp** để kiểm soát ngưỡng và độ rộng của vùng mòn (kéo hai stop gần nhau để mòn chỉ xuất hiện ở cạnh sắc nhất).

**Ambient Occlusion (AO)** — node **Ambient Occlusion** tính toán mức độ một điểm bị "che khuất" bởi hình học xung quanh, cho giá trị thấp ở các khe, góc lõm, kẽ hở (nơi ánh sáng môi trường khó chiếu tới) và giá trị cao ở bề mặt mở, lồi. Đây là mask ngược với Pointiness về mặt vị trí — dùng để mô phỏng **grime/bụi bẩn tích tụ** ở khe kẽ: bụi, dầu mỡ, gỉ sét thường đọng lại ở góc lõm, rãnh, mối nối chứ không phải ở bề mặt phẳng thoáng.

Quy trình layer hóa điển hình:

1. Lớp nền (base layer): Base Color + Roughness "sạch" của vật liệu gốc (ví dụ kim loại sơn màu, Roughness ~0.4).
2. Lớp mòn cạnh: dùng Pointiness (qua ColorRamp) làm Factor cho node Mix, trộn vào một Base Color khác (kim loại trần sáng bóng, Roughness thấp) — chỉ hiện ở cạnh.
3. Lớp bụi bẩn khe kẽ: dùng AO (qua ColorRamp, đảo ngược bằng Invert hoặc đảo vị trí stop) làm Factor cho một lớp Mix khác, trộn thêm Base Color tối/nâu và tăng Roughness ở khe.
4. Lớp biến thiên vi mô: cộng thêm một chút **Noise Texture** biên độ nhỏ vào Roughness tổng để tránh bề mặt phẳng quá đều ngay cả ở vùng "sạch".

Nhiều node Mix này được nối nối tiếp (chain) — output của lớp trước làm input A cho lớp sau — để cộng dồn hiệu ứng theo đúng thứ tự vật lý (nền → mòn cạnh → bẩn khe).

## 3. Quy trình thực hành gợi ý

1. Chuẩn bị một mesh hard-surface đơn giản có cả cạnh lồi lẫn khe lõm (ví dụ hộp kim loại có rãnh, bu-lông).
2. Thêm **Geometry** node, nối output Pointiness qua một ColorRamp (Constant hoặc kéo stop gần nhau) để tạo mask cạnh sắc.
3. Thêm một node **Mix (Color)**, input A là Base Color sơn (ví dụ xanh đậm), input B là Base Color kim loại trần sáng, Factor = mask Pointiness vừa tạo.
4. Thêm **Ambient Occlusion** node, qua ColorRamp riêng để tạo mask khe kẽ; dùng làm Factor cho một Mix (Color) thứ hai nối tiếp sau lớp mòn cạnh, trộn thêm màu bẩn/nâu tối.
5. Lặp lại cấu trúc Mix tương tự cho kênh **Roughness**: vùng mòn cạnh Roughness thấp (bóng), vùng bẩn khe Roughness cao (mờ, khô).
6. Cộng thêm một Noise Texture biên độ nhỏ (qua node Math > Multiply để giảm cường độ) vào Roughness tổng để tránh vùng phẳng quá đều.
7. Đánh giá kết quả dưới rig ánh sáng đã chuẩn bị ở bài 055, xoay vật thể để kiểm tra mòn/bẩn ở nhiều góc.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Vị trí |
|---|---|
| Thêm Geometry node | `Shift + A > Input > Geometry` (dùng output Pointiness) |
| Thêm Ambient Occlusion node | `Shift + A > Input > Ambient Occlusion` |
| Thêm ColorRamp để chỉnh ngưỡng mask | `Shift + A > Converter > Color Ramp` |
| Thêm Mix (Color) để trộn lớp | `Shift + A > Color > Mix Color` |
| Đảo ngược mask | Node `Invert Color` hoặc đảo vị trí stop trên ColorRamp |
| Giảm biên độ Noise trước khi cộng vào Roughness | `Shift + A > Converter > Math > Multiply` |

## 5. Lưu ý & lỗi thường gặp

- Node **Ambient Occlusion** có thể tốn hiệu năng render đáng kể, đặc biệt trong Cycles với Samples cao — nên giới hạn Distance hợp lý thay vì để mặc định quá lớn.
- Quên rằng **Pointiness** phụ thuộc mật độ lưới (mesh resolution) — mesh quá thô (ít cạnh/bevel) sẽ cho mask mòn cạnh không mượt hoặc không xuất hiện đúng chỗ; nên bevel nhẹ các cạnh sắc trước.
- Lạm dụng mòn cạnh quá mạnh trên toàn bộ vật thể khiến kết quả trông "giả, quá kịch" thay vì tinh tế — chỉ nên để lộ kim loại ở mức độ vừa phải, không đều 100%.
- Nối sai thứ tự các lớp Mix (ví dụ lớp bẩn khe đè lên trước lớp mòn cạnh) sẽ cho kết quả không đúng logic vật lý mòn/bẩn thực tế.
- Không kiểm tra kết quả trên nhiều góc nhìn/ánh sáng khác nhau — mask Pointiness/AO là hiệu ứng theo hình học nên cần xoay vật thể để đánh giá toàn diện.

## 6. Checklist thực hành

- [ ] Đã tạo được mask mòn cạnh từ Pointiness qua ColorRamp.
- [ ] Đã tạo được mask bụi bẩn khe kẽ từ Ambient Occlusion.
- [ ] Đã trộn được ít nhất 3 lớp (nền, mòn cạnh, bẩn khe) bằng chuỗi node Mix.
- [ ] Đã áp dụng layer tương tự cho cả Base Color và Roughness.
- [ ] Đã thêm biến thiên vi mô bằng Noise Texture biên độ nhỏ.

## 7. Tóm tắt

Một vật liệu hard-surface chuyên nghiệp không phải là một giá trị Roughness/Color cố định mà là kết quả của nhiều lớp mask — Pointiness cho mòn cạnh, Ambient Occlusion cho bẩn khe kẽ — được trộn nối tiếp để tái hiện lịch sử sử dụng thực tế của vật thể.
