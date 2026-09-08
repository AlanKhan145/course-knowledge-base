# Blender 2.8 Tutorial: Cell Fracture Explosion

Video hướng dẫn dựng một **vụ nổ vỡ mảnh** trong Blender 2.8: một quả cầu (đá/hành tinh/tường... tuỳ bạn tưởng tượng) được vỡ ra thành hàng trăm mảnh bằng add-on **Cell Fracture**, sau đó bị một **Force Field** thổi bung ra mọi hướng, và được "trang điểm" thêm ánh sáng thể tích (volumetric), Bloom để trông thật hoành tráng. Điểm hay của kỹ thuật: chỉ với add-on có sẵn + Rigid Body + một Force Field duy nhất, bạn dựng được hiệu ứng nổ hoàn toàn tự động (procedural), không cần animate tay bất kỳ mảnh vỡ nào — và có thể tái sử dụng cho tường nổ, sàn nhà nổ, hành tinh nổ, v.v.

- **Tác giả:** tự giới thiệu là "Alex" trong video, đại diện cộng đồng **BlenderMania3D.com** (cuối video nhắc lại nguyên văn "chia sẻ kết quả trên blendermania3d.com trên diễn đàn"). Cụm nghe được ở đầu video ("Core Bard") không rõ nghĩa — nhiều khả năng là lỗi dịch máy của một câu giới thiệu kênh/cộng đồng, không chắc chắn, xem ghi chú chi tiết ở đầu bài 01.
- **Công cụ:** Blender 2.8, add-on tích hợp sẵn **Cell Fracture**, hệ **Rigid Body**, **Force Field**, render engine **EEVEE** (Bloom + Volumetrics).
- **Thời lượng:** ~17 phút 53 giây.
- **Nguồn ghi chú:** bản dịch máy (tiếng Việt) của transcript/phụ đề gốc video, do người dùng cung cấp — các thuật ngữ Blender bị dịch sai/lạ đã được diễn giải lại đúng theo ngữ cảnh (ví dụ "tự gãy xương" = add-on **Cell Fracture**, "thể tích nguyên tắc" = **Principled Volume**, "SDF" = **Surface**/Principled BSDF). Một số con số nghe được qua dịch máy không hoàn toàn chắc chắn — xem ghi chú chi tiết ở đầu bài 01.

## Cấu trúc khoá học

Khoá học này chỉ có **một bài duy nhất**, gộp toàn bộ kỹ thuật của video vào một file ghi chú.

| # | Bài học | Nội dung |
|---|---|---|
| [01](<01%20-%20Blender%202.8%20Tutorial%20Cell%20Fracture%20Explosion.md>) | Blender 2.8 Tutorial: Cell Fracture Explosion | Texture PBR thủ công (Albedo/Roughness/Normal), add-on Cell Fracture, Rigid Body Active/Passive, Force Field đẩy nổ từ tâm, keyframe ánh sáng để giấu "rò sáng" qua khe nứt, Bloom + Volumetric trong EEVEE |

## Kỹ thuật cốt lõi rút ra được

- **Cell Fracture thay cho việc dựng mảnh vỡ thủ công**: add-on tích hợp sẵn của Blender (bật trong Preferences → Add-ons) chia một mesh thành hàng trăm mảnh dạng Voronoi chỉ bằng một lệnh (Object → Quick Effects → Cell Fracture), giữ nguyên vật liệu/UV của mesh gốc cho từng mảnh — không cần UV lại hay gán texture riêng cho từng mảnh.
- **Noise tạo sự bất quy tắc cho hình dạng vỡ**: tăng tham số **Noise** (mặc định 0 → 0.5) làm ranh giới các mảnh lởm chởm, không đều tăm tắp như khi để mặc định — quan trọng để vụ nổ trông tự nhiên.
- **Tắt Gravity + một Force Field = nổ từ tâm mọi hướng đều**: thay vì để mảnh vỡ rơi xuống do trọng lực (chỉ phù hợp cho đống đổ nát), tắt hẳn **Gravity** ở Scene Properties rồi đặt một **Force Field** (Type: Force) đúng tại tâm khối, tăng **Strength** — các mảnh Active Rigid Body bị đẩy bung ra đều theo mọi hướng, tạo đúng cảm giác nổ tung thay vì sụp đổ.
- **Ánh sáng "rò" qua khe nứt trước khi nổ = keyframe Power của Light về 0**: ngay cả khi mảnh chưa tách rời, các khe nứt li ti của Cell Fracture vẫn để lọt ánh sáng ở khung hình đầu (khi khối chưa "mở"), trông thiếu tự nhiên; giải pháp là animate **Power** ánh sáng chính từ 0 (giữ tắt) lên giá trị đích, đúng lúc mảnh bắt đầu tách ra rõ trong animation.
- **Volumetric bằng một khối lập phương "vô hình" bọc cảnh**: thêm một Cube bao trọn quả cầu, gán vật liệu **Principled Volume** (thay vì Surface/Principled BSDF) với Density thấp (~0.1), cộng bật **Bloom** và **Volumetric Lighting/Shadows** trong Render Properties của EEVEE — tạo hiệu ứng tia sáng xuyên qua khe nứt (god rays) mà không cần world fog toàn cảnh.

## Cách sử dụng thư mục ghi chú này

- File `01 - Blender 2.8 Tutorial Cell Fracture Explosion.md` là bài học duy nhất, có cấu trúc: mục tiêu, quy trình từng bước theo mốc thời gian, hai sơ đồ mermaid (pipeline tổng thể + node shader vật liệu đá), phím tắt & thiết lập liên quan, lưu ý & lỗi thường gặp, checklist, tóm tắt.
- Vì có transcript thật (dù qua dịch máy), quy trình bám khá sát thao tác tác giả làm trong video; một vài con số cụ thể (đặc biệt giá trị Strength cuối của Force Field và Power thứ hai của Light) có khả năng nghe/dịch không chính xác tuyệt đối — dùng làm điểm khởi đầu rồi tinh chỉnh bằng mắt trong Rendered viewport.
- Nên xem qua video gốc một lượt trước để thấy đúng tỉ lệ/tốc độ thao tác, sau đó dùng ghi chú này để tra lại đúng thứ tự thiết lập khi tự dựng lại trong Blender của bạn.
- Kỹ thuật này rất linh hoạt: đổi hình dạng khởi điểm (tường phẳng, sàn nhà, hành tinh...) và texture, giữ nguyên toàn bộ pipeline Cell Fracture → Rigid Body → Force Field → keyframe ánh sáng, là ra được vô số biến thể "vỡ tung" khác nhau.

## Checklist tổng thể

- [ ] Dựng được vật liệu PBR thủ công cho quả cầu (Albedo → Base Color, Roughness → Roughness với Non-Color, Normal → node Normal Map với Non-Color).
- [ ] Bật được add-on Cell Fracture và chạy nó với Noise=0.5 để vỡ quả cầu thành nhiều mảnh bất quy tắc, giữ nguyên vật liệu.
- [ ] Gán Active Rigid Body cho toàn bộ mảnh vỡ, hiểu vì sao cần chọn hết (kể cả mảnh lẻ dễ sót).
- [ ] Hiểu sự khác biệt giữa để trọng lực rơi (đống đổ nát, cần thêm Plane Passive Rigid Body làm sàn) và tắt trọng lực + Force Field (nổ tung đều từ tâm).
- [ ] Đặt đúng vị trí Force Field vào tâm khối và tăng Strength để có tốc độ nổ mong muốn.
- [ ] Keyframe Power của Light chính (0 → giữ 0 lâu hơn → lên giá trị đích) đúng lúc để giấu ánh sáng rò qua khe nứt ở đầu animation.
- [ ] Dựng được khối Cube volume (Principled Volume, Density thấp) + bật Bloom/Volumetric trong EEVEE để có hiệu ứng tia sáng xuyên khe nứt.
- [ ] Thêm đèn phụ thứ hai để tăng chiều sâu ánh sáng cho cảnh.
