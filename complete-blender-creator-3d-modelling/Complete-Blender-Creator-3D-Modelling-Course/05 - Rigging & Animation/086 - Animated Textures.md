# 086 — Animated Textures

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 05 — Rigging & Animation |
| **Bài học** | Animated Textures |
| **Thời lượng** | 6:13 |
| **Chủ đề chính** | Đưa video lên màn hình TV |

## 1. Mục tiêu bài học

- Hiểu cách Blender xử lý video/image sequence như một texture động (animated texture).
- Biết cách thêm Image Texture node dạng Movie/Sequence trong Shader Editor.
- Áp video texture lên mặt màn hình của TV đã dựng ở các bài trước.
- Đồng bộ thời lượng video texture với frame range của scene.

## 2. Nội dung chính

Animated Texture là kỹ thuật gán một video (hoặc chuỗi ảnh tuần tự - image sequence) làm texture cho một vật liệu, khiến bề mặt đó phát video khi animation chạy — thường dùng cho các chi tiết như màn hình TV, màn hình máy tính, biển quảng cáo động trong scene. Về bản chất, Blender coi video như một chuỗi frame ảnh và đọc đúng frame tương ứng với frame hiện tại của Timeline khi render hoặc playback trong Shader/Material preview.

Để thiết lập, trong Shader Editor của vật liệu gán cho mặt màn hình TV, thêm một node Image Texture, sau đó Open một file video (định dạng phổ biến như .mp4, hoặc chuỗi ảnh .png/.jpg đánh số thứ tự). Sau khi load, cần vào phần Image Properties (thường xuất hiện dưới node hoặc trong sidebar N của Shader Editor) để thiết lập Source là "Movie" (hoặc tự động nhận diện với video), khai báo Frame Start (frame bắt đầu phát trong Timeline), số lượng Frames (tổng số frame của video), và tùy chọn Auto Refresh để đảm bảo video cập nhật đúng khi tua qua lại Timeline.

Nối output Color của node Image Texture vào input Base Color (hoặc Emission Color nếu muốn màn hình phát sáng như TV thật) của node Principled BSDF. Dùng Emission thường cho kết quả thuyết phục hơn cho màn hình TV vì mô phỏng ánh sáng tự phát ra từ màn hình thay vì chỉ phản chiếu ánh sáng môi trường như Base Color thông thường. Cũng cần lưu ý đồng bộ độ dài video với frame range tổng thể của scene animation — nếu video ngắn hơn animation, có thể cần lặp lại (loop) bằng cách bật tùy chọn Cyclic trong Image Sequence settings.

## 3. Quy trình thực hành gợi ý

1. Chọn object màn hình TV, vào Shading workspace hoặc Shader Editor.
2. Thêm node Image Texture (Shift+A > Texture > Image Texture) vào node tree của vật liệu màn hình.
3. Open file video/image sequence, kiểm tra Source được nhận diện là Movie hoặc Image Sequence.
4. Thiết lập Frame Start và Frame Count khớp với thời lượng video thực tế.
5. Nối Color output vào Emission Color của Principled BSDF (thay vì Base Color) để màn hình phát sáng.
6. Play animation trong Viewport (chế độ Material Preview hoặc Rendered) để kiểm tra video phát đúng theo Timeline.
7. Nếu cần lặp video liên tục, bật Cyclic trong phần Image Sequence settings.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Chức năng |
|---|---|
| `Shift+A` (trong Shader Editor) | Thêm node mới, ví dụ Image Texture |
| Image Texture node > Open | Load file video hoặc chuỗi ảnh |
| Source: Movie / Sequence (Image Properties) | Xác định loại animated texture |
| Frame Start / Frames / Offset | Đồng bộ video với Timeline scene |
| Cyclic (checkbox) | Lặp video liên tục khi animation dài hơn video |
| Kết nối vào Emission Color (Principled BSDF) | Làm màn hình tự phát sáng thay vì chỉ phản chiếu |

## 5. Lưu ý & lỗi thường gặp

- Nối video texture vào Base Color thay vì Emission khiến màn hình trông tối, thiếu cảm giác "đang phát sáng" như TV thật.
- Không thiết lập đúng Frame Start khiến video không đồng bộ với Timeline (bắt đầu sai thời điểm).
- Quên bật Auto Refresh hoặc chưa Pack video vào file .blend khiến video không phát khi mở lại project trên máy khác.
- Độ phân giải video quá cao gây giật lag khi preview trong Viewport, nên cân nhắc proxy hoặc giảm preview quality khi làm việc.

## 6. Checklist thực hành

- [ ] Đã thêm node Image Texture với video/image sequence cho màn hình TV.
- [ ] Đã thiết lập Frame Start/Frame Count khớp với Timeline.
- [ ] Đã nối video vào Emission Color để màn hình phát sáng.
- [ ] Đã kiểm tra video phát đúng khi play animation trong Viewport.

## 7. Tóm tắt

Animated Texture cho phép gán video như một texture động lên vật liệu, thường dùng qua node Image Texture nối vào Emission để tạo hiệu ứng màn hình phát sáng. Đây là chi tiết hoàn thiện cuối cùng cho scene TV trong module, kết hợp cả modelling và shading động.
