# Blender Tutorial: Surface Cracks

Video ngắn của kênh **tutor4u**, hướng dẫn cách thêm **vết nứt lên bề mặt một đối tượng hoàn toàn bằng thủ tục (procedural)** — không cần bất kỳ texture ảnh bên ngoài nào — bằng cách "gấp" một Noise Texture thành hoạ tiết dạng đường nứt mảnh (kỹ thuật "ridged noise") rồi dùng đúng hoạ tiết đó vừa làm Displacement (độ sâu vết nứt) vừa làm mặt nạ đổi vật liệu (vùng nứt tối/khuếch tán hơn vùng bề mặt bóng xung quanh). Video dùng **Blender 2.7x** và render engine **Cycles**.

- **Kênh:** tutor4u
- **Công cụ:** Blender 2.7x, render engine **Cycles**
- **Thời lượng:** ~8 phút 24 giây
- **Nguồn ghi chú:** bản dịch máy (tiếng Việt) của transcript/phụ đề gốc video, do người dùng cung cấp — vì vậy các thuật ngữ kỹ thuật Blender bị dịch sai/lạ đã được diễn giải lại đúng theo ngữ cảnh (ví dụ "shader hỗn hợp" = **Mix Shader**, "trọng lượng lớp" = **Layer Weight**, "bộ chuyển đổi" = nhóm node **Converter**, "nút nhân" = node **Math (Multiply)**, "kiểu math ít hơn" = phép toán **Less Than**). Một vài con số trong transcript có khả năng bị nghe/dịch sai (ví dụ giá trị "2.01" ở node Value — xem ghi chú tại bước liên quan) — nên tinh chỉnh lại bằng mắt trong viewport thay vì áp dụng máy móc.

## Cấu trúc khoá học

Khoá học này chỉ có **một bài duy nhất**, gộp toàn bộ kỹ thuật của video vào một file ghi chú.

| # | Bài học | Nội dung |
|---|---|---|
| [01](01%20-%20Blender%20Tutorial%20Surface%20Cracks.md) | Blender Tutorial: Surface Cracks | Dựng vết nứt hoàn toàn procedural từ Noise Texture bằng chuỗi node Subtract → Maximum → Minimum → Multiply cho Displacement, và Less Than cho mặt nạ đổi vật liệu vùng nứt |

## Kỹ thuật cốt lõi rút ra được

- **"Gấp" noise quanh điểm giữa để tạo đường nứt (ridged noise)**: lấy `0.5 − noise` và `noise − 0.5` (hai node Subtract đảo input/output cho nhau), rồi **Maximum** hai giá trị đó lại — về bản chất là `|noise − 0.5|` — biến một hoạ tiết noise mượt thành mạng lưới đường mảnh tối tại đúng những điểm noise ở quanh giá trị giữa (0.5).
- **Minimum để "phẳng hoá" nền, giữ lại đúng đường nứt**: `Minimum(|noise−0.5|, ngưỡng nhỏ)` cắt mọi giá trị lớn hơn ngưỡng về bằng ngưỡng — biến toàn bộ nền thành một mức xám phẳng, chỉ còn đường nứt (giá trị gần 0) nổi bật tối hơn hẳn.
- **Multiply để khuếch đại thành Displacement**: nhân giá trị đã "phẳng hoá" lên (video dùng 50) rồi cắm thẳng vào **Displacement** của Material Output — giá trị nhân này chính là "núm chỉnh độ sâu vết nứt".
- **Một node Value dùng chung cho hai ngưỡng**: cùng một giá trị (video dùng khoảng 0.1) vừa là ngưỡng của Minimum (điều khiển độ rộng vết nứt trên Displacement) vừa là ngưỡng của Less Than (điều khiển vùng đổi vật liệu) — dùng chung một node Value để hai hệ thống luôn khớp nhau khi chỉnh.
- **Less Than làm công tắc đổi vật liệu**: so `|noise−0.5|` với cùng ngưỡng đó — nơi nhỏ hơn ngưỡng (bên trong vết nứt) chọn một Diffuse BSDF tối hơn ở input dưới của một Mix Shader thứ hai, nơi còn lại giữ nguyên vật liệu Diffuse+Glossy (qua Layer Weight/Fresnel) ban đầu — vết nứt vừa lõm (Displacement) vừa "sần, không bóng" đúng vị trí.
- **Emission chỉ dùng để xem trước (preview)**: nối tạm Noise/Math node ra Emission → Surface để nhìn trực quan hoạ tiết từng bước, rồi xoá đi khi ráp lại pipeline thật (Mix Shader → Surface, Multiply → Displacement).
- Đổi **Scale** của Noise Texture thì phải chỉnh lại cả node Value (ngưỡng) lẫn Multiply (độ sâu) cho khớp lại — ba tham số này phụ thuộc lẫn nhau.

## Cách sử dụng thư mục ghi chú này

- File `01 - Blender Tutorial Surface Cracks.md` là bài học duy nhất, có cấu trúc: mục tiêu, nguyên lý, sơ đồ node, quy trình thực hành từng bước, phím tắt & node liên quan, lưu ý & lỗi thường gặp, checklist, tóm tắt.
- Vì có transcript thật (dù qua dịch máy), node setup bám sát đúng thao tác tác giả làm; một số con số cụ thể (đặc biệt giá trị của node Value) có khả năng bị nghe/dịch sai — dùng làm điểm khởi đầu rồi tinh chỉnh bằng mắt trong Rendered viewport.
- Nên xem qua video gốc một lượt trước, sau đó dùng ghi chú này để tra lại đúng thứ tự node khi tự dựng lại trong Blender của bạn (kể cả ở bản Blender mới hơn 2.7x — node Math/Mix Shader vẫn hoạt động tương tự, chỉ khác đôi chút về giao diện).

## Checklist tổng thể

- [ ] Hiểu vì sao `Maximum(0.5−noise, noise−0.5)` tương đương `|noise−0.5|` và biến noise mượt thành đường nứt mảnh.
- [ ] Dựng được chuỗi Subtract ×2 → Maximum → Minimum → Multiply và cắm đúng vào Displacement.
- [ ] Dùng chung một node Value cho ngưỡng của Minimum và ngưỡng của Less Than.
- [ ] Dựng được Mix Shader thứ hai đổi vật liệu (Diffuse tối) đúng vùng vết nứt bằng Less Than làm Fac.
- [ ] Biết dùng Emission tạm thời để xem trước từng bước, rồi gỡ ra khi ráp pipeline thật.
- [ ] Biết chỉnh Scale/Detail/Distortion của Noise Texture và biết phải chỉnh lại Value + Multiply khi đổi Scale.
