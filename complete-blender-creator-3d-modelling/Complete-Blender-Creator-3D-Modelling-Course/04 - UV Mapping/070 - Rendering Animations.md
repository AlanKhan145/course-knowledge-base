# 070 — Rendering Animations

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 04 — UV Mapping |
| **Bài học** | Rendering Animations |
| **Thời lượng** | 4:57 |
| **Chủ đề chính** | Render hoạt ảnh |

## 1. Mục tiêu bài học
- Thiết lập Output Properties đầy đủ để render animation: độ phân giải, định dạng file, đường dẫn lưu.
- Hiểu sự khác biệt giữa render ra chuỗi ảnh (image sequence) và render trực tiếp ra video (FFmpeg).
- Chọn thông số Sample/chất lượng phù hợp giữa Eevee và Cycles để cân bằng chất lượng và thời gian render.
- Thực hiện render toàn bộ animation máy bay đã hoàn thiện.

## 2. Nội dung chính
Sau khi mô hình, texture, animation và ánh sáng HDRI đã hoàn tất, bước cuối cùng là render animation thành video. Các thiết lập quan trọng nằm trong **Output Properties**:
- **Resolution (X/Y) và Resolution %:** xác định độ phân giải khung hình cuối cùng; giảm % khi cần render thử nhanh (preview) trước khi render full chất lượng.
- **Frame Range:** đã thiết lập ở bài trước (Frame Start/End), đảm bảo khớp với đoạn animation cần xuất.
- **Output Path và File Format:** có thể chọn render ra **chuỗi ảnh** (PNG, OpenEXR...) — mỗi frame là một file riêng, an toàn hơn vì có thể render lại từng frame bị lỗi hoặc dừng giữa chừng mà không mất tiến độ; hoặc render trực tiếp ra **video** (FFmpeg Video, container MP4/MKV với codec H.264...) — tiện lợi nhưng nếu quá trình bị gián đoạn giữa chừng, thường phải render lại từ đầu.

Trong thực tế sản xuất, cách làm phổ biến là render ra chuỗi ảnh PNG trước, sau đó dùng Video Sequence Editor (VSE) của Blender hoặc phần mềm dựng phim khác để ghép chuỗi ảnh thành video hoàn chỉnh — vừa an toàn vừa linh hoạt hơn khi cần chỉnh sửa hậu kỳ.

Về chất lượng render, trong **Render Properties**:
- **Eevee:** điều chỉnh Sampling (Render Samples) và các tùy chọn Screen Space Reflections/Ambient Occlusion nếu cần chất lượng phản chiếu/bóng đổ cao hơn; render nhanh hơn đáng kể, phù hợp preview hoặc khi cần render nhiều frame animation trong thời gian ngắn.
- **Cycles:** điều chỉnh số Samples (và có thể bật Denoising) để cân bằng giữa chất lượng (giảm noise) và thời gian render; animation dài với Cycles có thể tốn thời gian đáng kể, nên cân nhắc kỹ số sample cần thiết, có thể render thử một vài frame đại diện trước khi render toàn bộ.

## 3. Quy trình thực hành gợi ý
1. Vào Output Properties, đặt Resolution (ví dụ 1920×1080), Frame Range khớp animation.
2. Chọn File Format: PNG (chuỗi ảnh, khuyến nghị an toàn) hoặc FFmpeg Video (MP4) nếu muốn xuất trực tiếp video.
3. Chỉ định Output Path — thư mục lưu kết quả render.
4. Vào Render Properties, chọn Render Engine (Eevee hoặc Cycles) và điều chỉnh Sample phù hợp.
5. Render thử một vài frame riêng lẻ (`Render → Render Image`, F12) tại các thời điểm quan trọng để kiểm tra ánh sáng, texture, chuyển động trước khi render toàn bộ.
6. Khi đã hài lòng, chạy `Render → Render Animation` (`Ctrl+F12`) để render toàn bộ đoạn animation.
7. Nếu render ra chuỗi ảnh, dùng Video Sequence Editor để ghép thành video hoàn chỉnh sau khi render xong.

## 4. Phím tắt & công cụ liên quan
| Phím tắt | Chức năng |
|---|---|
| `F12` | Render Image (render frame hiện tại) |
| `Ctrl+F12` | Render Animation (render toàn bộ Frame Range) |
| `Esc` | Hủy quá trình render đang chạy |
| Output Properties → File Format | Chọn định dạng ảnh/video xuất ra |
| Render Properties → Sampling | Điều chỉnh chất lượng/số sample của Eevee hoặc Cycles |

## 5. Lưu ý & lỗi thường gặp
- Render trực tiếp ra video (FFmpeg) cho animation dài mà không có bản sao lưu chuỗi ảnh — nếu máy tính gặp sự cố giữa chừng, phải render lại từ đầu.
- Không kiểm tra Frame Range trước khi Render Animation khiến render thiếu hoặc thừa đoạn không cần thiết.
- Đặt Sample quá cao ở Cycles cho animation dài khiến thời gian render kéo dài không cần thiết so với chất lượng thực tế cần có.
- Quên tắt hiển thị Reference Image hoặc object phụ trợ trong Render (đã xử lý ở bài Scene and Animation Adjustments) khiến chúng xuất hiện trong kết quả cuối.

## 6. Checklist thực hành
- [ ] Đã thiết lập Resolution, Frame Range và Output Path đầy đủ.
- [ ] Đã chọn định dạng xuất phù hợp (chuỗi ảnh hoặc video).
- [ ] Đã render thử một vài frame để kiểm tra chất lượng trước khi render toàn bộ.
- [ ] Đã render thành công toàn bộ animation máy bay.

## 7. Tóm tắt
Bài học hoàn tất dự án bằng việc thiết lập thông số Output/Render phù hợp và thực hiện render toàn bộ animation máy bay, khép lại quy trình từ UV mapping, modelling, texturing, animation cho đến sản phẩm video hoàn chỉnh của Module 04.
