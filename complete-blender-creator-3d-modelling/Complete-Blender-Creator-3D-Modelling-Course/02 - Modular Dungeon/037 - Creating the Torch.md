# 037 — Creating the Torch

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 02 — Modular Dungeon |
| **Bài học** | Creating the Torch |
| **Thời lượng** | 11:13 |
| **Chủ đề chính** | Tạo ngọn đuốc |

## 1. Mục tiêu bài học

- Dựng cấu trúc đuốc gồm cán cầm (handle), giá đỡ kim loại (bracket/cage), và phần bó vải/rơm cháy (head).
- Kết hợp nhiều loại mesh cơ bản (Cylinder, Cone, Torus) để tạo hình dáng đuốc tổng thể.
- Tạo vật liệu phát sáng (Emission shader) cho phần lửa để làm nguồn sáng thực tế trong scene.
- Chuẩn bị đuốc như một prop hoàn chỉnh, sẵn sàng dùng làm nguồn sáng ở bài "Lighting the Dungeon".

## 2. Nội dung chính

Cây đuốc (torch) thường gồm ba phần: **cán cầm** — một trụ gỗ dài dựng từ Cylinder mỏng, có thể thêm Loop Cut và Bevel nhẹ để tạo vân khấc tay cầm; **giá đỡ kim loại** — thường là một dải kim loại xoắn hoặc lồng bao quanh phần đầu, có thể dùng Torus hoặc một Cylinder mỏng uốn cong bằng modifier Screw/Curve, hoặc đơn giản là vài vòng dây kim loại tạo từ Circle được Extrude theo path; **phần đầu bó cháy** — mô phỏng bó vải/rơm tẩm dầu, có thể dựng từ Cone hoặc Icosphere biến dạng bất quy tắc bằng Proportional Editing (`O`) để tạo hình dáng không đối xứng tự nhiên.

Phần lửa/ánh sáng phát ra từ đầu đuốc thường được tạo bằng một mesh nhỏ (ví dụ Cone dẹt hoặc Plane) gán vật liệu dùng node **Emission** (Shader Editor: Add > Shader > Emission) thay cho Principled BSDF — node Emission phát ra ánh sáng có màu và cường độ (Strength) xác định, khiến mesh đó tự phát sáng và có thể dùng làm nguồn chiếu sáng thực sự cho scene nếu bật Cycles hoặc Eevee với Light Probe/tuỳ chọn phù hợp. Màu Emission cho lửa đuốc nên nghiêng về cam-vàng ấm (ví dụ RGB khoảng 1.0, 0.4, 0.1) để mô phỏng ánh lửa.

Ngoài mesh Emission, thường kết hợp thêm một **Point Light** hoặc **Area Light** đặt tại vị trí ngọn lửa để chiếu sáng thực sự lên các object xung quanh (mesh Emission chỉ phát sáng chính nó trong Eevee trừ khi bật Screen Space Global Illumination/Ray-traced GI; ở Cycles thì mesh Emission có thể chiếu sáng thật nhưng dễ gây nhiễu hạt — noise — nếu diện tích phát sáng quá nhỏ).

## 3. Quy trình thực hành gợi ý

1. Dựng cán cầm từ Cylinder mỏng, dài, thêm Loop Cut/Bevel nhẹ tạo vân khấc tay cầm.
2. Dựng giá đỡ kim loại bao quanh đầu cán bằng Torus hoặc Cylinder uốn cong.
3. Dựng phần đầu bó cháy bằng Cone/Icosphere, biến dạng bất quy tắc bằng Proportional Editing.
4. Tạo một mesh nhỏ cho phần lửa, gán vật liệu Emission màu cam-vàng ấm.
5. Thêm một Point Light hoặc Area Light tại vị trí ngọn lửa để chiếu sáng thật lên môi trường xung quanh.
6. Join các phần cán, giá đỡ, đầu bó cháy (không join phần Emission/Light nếu muốn giữ riêng để dễ điều chỉnh).
7. Đặt Origin ở đáy cán cầm để dễ gắn đuốc lên tường trong bài lắp ráp.

## 4. Phím tắt & công cụ liên quan

| Phím tắt / Thao tác | Chức năng |
|---|---|
| `O` | Bật Proportional Editing (biến dạng mềm mại phần đầu bó cháy) |
| `Ctrl+R` | Loop Cut tạo vân khấc cán cầm |
| `Ctrl+B` | Bevel cạnh chi tiết |
| Add > Light > Point/Area | Thêm nguồn sáng thật cho ngọn lửa |
| Shader Editor > Add > Shader > Emission | Vật liệu tự phát sáng cho mesh lửa |
| `Ctrl+J` | Join các phần thân đuốc |

## 5. Lưu ý & lỗi thường gặp

- Chỉ dùng vật liệu Emission mà không thêm Point/Area Light thật khiến vùng xung quanh đuốc không đủ sáng trong Eevee (nếu chưa bật ray-traced GI).
- Cường độ (Strength) Emission quá cao gây cháy sáng (overexposure/bloom quá mức) khi render.
- Diện tích mesh Emission quá nhỏ trong Cycles gây nhiễu hạt (fireflies) khó khử.
- Tỉ lệ đuốc không phù hợp với tỉ lệ nhân vật/tường khiến vật thể trông quá to hoặc quá nhỏ khi lắp vào scene.

## 6. Checklist thực hành

- [ ] Đã dựng đủ 3 phần: cán cầm, giá đỡ, đầu bó cháy.
- [ ] Đã tạo vật liệu Emission màu cam-vàng cho phần lửa.
- [ ] Đã thêm Point/Area Light thật tại vị trí ngọn lửa.
- [ ] Đã kiểm tra tỉ lệ đuốc phù hợp với các module khác.
- [ ] Đã đặt Origin thuận tiện cho việc gắn lên tường.

## 7. Tóm tắt

Bài học dựng một cây đuốc hoàn chỉnh kết hợp modelling nhiều dạng khối cơ bản với vật liệu Emission và nguồn sáng thật — chuẩn bị trực tiếp cho bài thiết lập ánh sáng tổng thể của hầm ngục ở bài kế tiếp.
