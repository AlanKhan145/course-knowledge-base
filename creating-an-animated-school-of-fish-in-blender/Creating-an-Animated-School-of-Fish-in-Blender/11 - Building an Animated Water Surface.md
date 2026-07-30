# 11 — Dựng mặt nước động

| Thuộc tính | Nội dung |
|---|---|
| **Video** | (không rõ tên/kênh — chỉ có transcript) |
| **Đoạn** | Water shading |
| **Thời điểm** | 25:15–29:48 |
| **Chủ đề chính** | Glass BSDF, World Environment Texture, Noise Texture 4D, driver nhanh `#frame/...` |

## 1. Mục tiêu bài học

- Dựng mặt phẳng nước, đặt đúng độ sâu để đàn cá "chìm" bên dưới bề mặt.
- Xây dựng vật liệu nước bằng **Glass BSDF** với Roughness thấp và IOR phù hợp.
- Tạo gợn sóng động trên bề mặt bằng **Noise Texture (chế độ 4D)** và animate bằng cú pháp driver nhanh `#biểu_thức` ngay trong trường số của node Mapping.

## 2. Nội dung chính

**Mặt phẳng nước.** Thêm một **Plane** khá lớn để làm bề mặt nước. Về độ sâu: tác giả đào lòng suối sâu thêm một chút (quay lại chỉnh object "Ground") rồi **nâng mặt phẳng nước lên** sao cho đàn cá nằm **bên dưới** bề mặt nước, đúng logic thị giác của một cảnh dưới nước nhìn từ trên xuống. Nhìn cảnh từ trên xuống để kiểm tra bố cục tổng thể. Vì đây là một mặt phẳng đơn giản, UV unwrap chỉ cần vào Edit Mode và nhấn `U > Unwrap` — không cần kỹ thuật phức tạp.

**Environment texture cho World.** Trước khi vào material nước, tác giả thiết lập nhanh **World**: Shader Editor, chuyển tab sang **World**, bật **Use Nodes**, thêm node **Environment Texture** nối vào **Background**. Lý do làm bước này: có một environment texture (dù chỉ dùng ảnh mặc định/placeholder) giúp **dễ quan sát phản chiếu (reflections)** trên các bề mặt bóng như nước hơn nhiều so với chỉ dùng World màu phẳng đơn sắc — vì Glass/Glossy shader cần một môi trường có chi tiết để phản chiếu thì mới nhìn thấy rõ hiệu ứng phản xạ khi xem preview. Tác giả cũng thêm ánh sáng cơ bản cho cảnh ở bước này (không đi sâu chi tiết).

**Material nước.** Chọn object mặt phẳng nước, tạo **Material mới**, đặt tên **"Water"** (lưu ý: tác giả phát hiện object này vô tình bị thêm nhầm vào "Fish Collection" — cần kéo nó ra khỏi Collection đó vì sẽ gây vấn đề cho Geometry Nodes ở chương 10). Trong Shader Editor: xóa node **Principled BSDF** mặc định, thêm **Shader > Glass BSDF**, nối vào **Surface** của Material Output. Thiết lập thông số:
- **Roughness**: rất thấp nhưng **không hoàn toàn bằng 0** — khoảng **0.001** — giữ mặt nước gần như mịn như kính nhưng vẫn có chút tán xạ vi mô.
- **IOR (Index of Refraction)**: khoảng **1.33** — chỉ số khúc xạ điển hình của nước (lưu ý: giá trị này có thể khác nếu nước bị đóng băng hoặc có độ mặn khác).

Ở giai đoạn này, mặt nước đã có hiệu ứng khúc xạ/phản chiếu cơ bản nhưng **hoàn toàn phẳng như kính**, chưa có gợn sóng.

**Tạo gợn sóng bằng Noise Texture.** Thêm node **Texture > Noise Texture**. Nếu add-on **Node Wrangler** đã bật, có thể chọn Noise Texture rồi nhấn `Ctrl + T` — thao tác này **tự động thêm sẵn node Texture Coordinate và Mapping**, tiết kiệm thời gian nối tay. Thêm node **Converter > Math**, đặt chế độ **Multiply**, lấy đầu ra **Fac** của Noise Texture nối vào một đầu vào của Math, đặt hệ số nhân ban đầu khoảng **0.2** — đây là **tỉ lệ cường độ** của gợn sóng/độ dịch chuyển do nhiễu tạo ra. Kết quả của phép nhân này sau đó được dùng làm dữ liệu **dịch chuyển bề mặt (Displacement/Bump-style)** đưa vào Normal của Glass BSDF (thông qua một node Bump ngầm định để chuyển giá trị cao độ nhiễu thành vector pháp tuyến gợn sóng).

Noise Texture được đặt ở **chế độ 4D** (Blender hỗ trợ Noise Texture 1D/2D/3D/4D — chiều thứ 4, thường gọi là **W**, cho phép biến thiên hoa văn theo "thời gian" độc lập với việc dịch chuyển không gian XYZ thông thường) với **Scale khoảng 80**, giữ **Detail ở mức mặc định**. Sau khi xem thử, cường độ gợn sóng ban đầu (hệ số Multiply 0.2) hơi mạnh — giảm xuống còn khoảng **0.1**, rồi tinh chỉnh lại lên khoảng **0.125** cho vừa mắt (giá trị phù hợp phụ thuộc vào tỉ lệ thực tế của model/cảnh cụ thể, cần thử nghiệm).

**Animate gợn sóng bằng driver nhanh.** Thay vì keyframe thủ công, tác giả dùng một mẹo nhanh: click vào trường **Location X** của node **Mapping**, gõ trực tiếp cú pháp bắt đầu bằng dấu **`#`** (thăng/hash) theo sau là một **biểu thức Python** — cụ thể là **`#frame/4000`** — trường số ngay lập tức chuyển sang **màu tím**, dấu hiệu cho biết trường đó giờ được điều khiển bởi một **driver nhanh (quick driver)** thay vì giá trị tĩnh. Biểu thức này lấy **số khung hình hiện tại (frame)** chia cho **4000**, tạo ra một giá trị **tăng dần rất chậm** theo thời gian — dùng làm độ dịch chuyển ngang của texture nhiễu, khiến hoa văn gợn sóng trôi chậm rãi theo animation thay vì đứng yên.

Thực hiện tương tự cho trường **Location Z** của cùng node Mapping, nhưng với biểu thức **`#frame/3000`** (chia cho một số nhỏ hơn, nên biến thiên **nhanh hơn một chút** so với trục X) — mục đích dùng trục thứ hai (kết hợp với bản chất 4D của Noise Texture) để hoa văn **tiến hóa/thay đổi hình dạng theo thời gian**, chứ không chỉ đơn thuần "trượt" đều theo một hướng cố định trên bề mặt — tạo cảm giác nước chuyển động tự nhiên hơn nhiều so với chỉ dịch chuyển texture theo một trục duy nhất.

Tác giả lưu ý hiệu ứng này khó thấy rõ trong một video tĩnh/khung hình đơn lẻ, nên đính kèm một đoạn animation preview riêng để minh họa rõ hiệu ứng gợn sóng động hoạt động như thế nào theo thời gian.

**Ghi chú về Eevee.** Tác giả có đề cập hiệu ứng này cũng có thể thực hiện trong **Eevee**, nhưng sẽ gặp một số **thách thức về phản chiếu (reflection) trên mặt nước** — các hiệu ứng phản xạ/khúc xạ phức tạp này **dễ đạt được hơn ở Cycles**, không đơn giản để làm trong Eevee.

## 3. Quy trình thực hành gợi ý

1. Thêm Plane lớn làm mặt nước; chỉnh độ sâu lòng suối và độ cao mặt nước sao cho đàn cá nằm bên dưới bề mặt.
2. Edit Mode, `U > Unwrap` cho mặt phẳng nước.
3. Shader Editor > tab World, bật Use Nodes, thêm Environment Texture nối Background; thêm ánh sáng cơ bản cho cảnh.
4. Chọn mặt phẳng nước, tạo Material "Water" (đảm bảo không nằm trong "Fish Collection"), thay Principled BSDF bằng Glass BSDF, đặt Roughness ~0.001, IOR ~1.33.
5. Thêm Noise Texture (chế độ 4D, Scale ~80); nếu có Node Wrangler, chọn node và `Ctrl + T` để tự thêm Texture Coordinate + Mapping.
6. Thêm Math (Multiply), nối Fac của Noise vào, đặt hệ số ~0.1–0.125; dùng kết quả làm Displacement/Bump cho Normal của Glass BSDF.
7. Trên node Mapping, gõ `#frame/4000` vào Location X và `#frame/3000` vào Location Z để driver tự động animate gợn sóng theo thời gian.
8. Play animation để xem hiệu ứng gợn sóng động; điều chỉnh lại các hệ số chia (4000/3000) và Multiply nếu tốc độ/cường độ chưa như ý.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Vị trí |
|---|---|
| Unwrap đơn giản | `U > Unwrap` (Edit Mode) |
| Tự động thêm Texture Coordinate + Mapping (Node Wrangler) | Chọn node Texture, `Ctrl + T` |
| Nhập driver nhanh vào một trường số | Click vào trường, gõ `#biểu_thức` (ví dụ `#frame/4000`) |
| Chuyển tab Shader Editor sang World | Dropdown ở đầu Shader Editor: Object/World |

## 5. Lưu ý & lỗi thường gặp

- IOR không đúng (ví dụ vẫn để mặc định của Glass BSDF thay vì ~1.33) khiến độ khúc xạ trông sai lệch so với nước thật.
- Roughness = 0 tuyệt đối đôi khi gây nhiễu số học (fireflies) trong Cycles ở một số trường hợp; giữ một giá trị rất nhỏ nhưng khác 0 (như 0.001) thường an toàn hơn.
- Quên đặt Noise Texture ở chế độ 4D (giữ mặc định 3D) vẫn hoạt động nhưng sẽ khó tạo hiệu ứng "tiến hóa hoa văn" độc lập với việc trượt không gian — 4D tận dụng đúng ý đồ dùng driver trên cả X và Z để vừa trượt vừa biến đổi hình dạng.
- Driver nhanh dạng `#biểu_thức` là một driver Python đơn giản — cần cẩn trọng vì biểu thức nhập sai cú pháp sẽ báo lỗi ngay tại trường đó; giá trị chia (4000, 3000...) cần thử nghiệm vì phụ thuộc vào tổng độ dài animation và cảm giác tốc độ mong muốn.
- Hiệu ứng phản chiếu/khúc xạ phức tạp của nước dễ thực hiện hơn ở Cycles; nếu bắt buộc dùng Eevee (ví dụ vì lý do hiệu năng, khác với hai video Polyfjord trong repo vốn ưu tiên Eevee), cần chấp nhận đánh đổi chất lượng phản chiếu hoặc đầu tư thêm cấu hình Screen Space Reflections.

## 6. Checklist thực hành

- [ ] Đã dựng mặt phẳng nước ở đúng độ cao để đàn cá nằm bên dưới bề mặt.
- [ ] Đã xây dựng material "Water" bằng Glass BSDF với Roughness và IOR phù hợp.
- [ ] Đã thêm Noise Texture 4D tạo gợn sóng, tinh chỉnh cường độ qua node Math (Multiply).
- [ ] Đã animate gợn sóng bằng driver nhanh `#frame/...` trên node Mapping (cả Location X và Z).
- [ ] Đã xác nhận hiệu ứng gợn sóng động hoạt động đúng khi phát animation.

## 7. Tóm tắt

Mặt nước động được dựng từ một công thức gọn: Glass BSDF cho độ khúc xạ/phản chiếu vật lý cơ bản, Noise Texture 4D cho hoa văn gợn sóng, và driver nhanh `#frame/...` trên node Mapping để animate hoa văn theo thời gian mà không cần keyframe thủ công — hoàn thiện cảnh suối có cả đàn cá bơi bên dưới một bề mặt nước sống động.
