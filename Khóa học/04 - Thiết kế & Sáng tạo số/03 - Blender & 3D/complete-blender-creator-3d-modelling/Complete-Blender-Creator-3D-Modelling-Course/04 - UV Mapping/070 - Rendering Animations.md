# 070 — Rendering Animations

## Kết xuất hoạt ảnh trong Blender

| Thuộc tính             | Nội dung                                              |
| ---------------------- | ----------------------------------------------------- |
| **Module**             | Module 04 — UV Mapping                                |
| **Bài học**            | Rendering Animations                                  |
| **Thời lượng**         | 4:57                                                  |
| **Chủ đề chính**       | Render hoạt ảnh thành video hoặc chuỗi ảnh            |
| **Phần mềm liên quan** | Blender, Adobe Premiere, DaVinci Resolve, Movie Maker |

---

## 1. Mục tiêu bài học

Sau khi hoàn thành bài học, người học có thể:

* Thiết lập độ phân giải và phạm vi frame cho animation.
* Chọn thư mục lưu kết quả render.
* Render thử nhanh bằng **Eevee** trước khi xuất bản cuối cùng.
* Phân biệt hai phương pháp xuất animation:

  * Render trực tiếp thành video.
  * Render thành chuỗi ảnh tĩnh.
* Thiết lập định dạng video bằng **FFmpeg**.
* Hiểu lợi ích của việc sử dụng chuỗi ảnh PNG.
* Kiểm tra và phát lại animation sau khi render.
* Xuất animation cuối cùng bằng Eevee hoặc Cycles.

---

## 2. Tổng quan quy trình render animation

Render animation khác với render một ảnh tĩnh vì Blender phải xử lý toàn bộ các frame nằm trong phạm vi animation.

Ví dụ:

* Frame bắt đầu: `1`
* Frame kết thúc: `100`
* Tổng số frame cần render: `100`

Mỗi frame sẽ được Blender render riêng biệt, sau đó:

* Được lưu thành từng ảnh riêng; hoặc
* Được mã hóa trực tiếp thành một file video.

### Sơ đồ quy trình

```text
Hoàn thiện scene
      │
      ▼
Kiểm tra Frame Range
      │
      ▼
Đặt Output Path
      │
      ▼
Render thử bằng Eevee
      │
      ▼
Animation đã ổn?
  ┌───┴────┐
  │        │
 Chưa      Rồi
  │        │
Chỉnh sửa  ▼
       Chọn định dạng xuất
            │
      ┌─────┴─────┐
      │           │
  Chuỗi ảnh      Video
  PNG/OpenEXR    FFmpeg
      │           │
      ▼           ▼
Ghép hậu kỳ    Phát trực tiếp
```

---

## 3. Render thử bằng Eevee

Trước khi render animation ở chất lượng cao, nên thực hiện một bản render thử.

Eevee phù hợp cho bước này vì tốc độ xử lý nhanh hơn Cycles.

### Thiết lập render thử

Trong **Output Properties**:

1. Giảm **Resolution Percentage** xuống khoảng `50%`.
2. Kiểm tra lại phạm vi frame.
3. Chọn thư mục lưu kết quả.
4. Sử dụng Eevee làm Render Engine.
5. Chạy render toàn bộ animation.

### Ví dụ

Nếu độ phân giải gốc là:

```text
1920 × 1080 px
```

Khi đặt Resolution Percentage thành `50%`, độ phân giải render thực tế sẽ là:

```text
960 × 540 px
```

Điều này giúp:

* Giảm thời gian render.
* Kiểm tra nhanh chuyển động.
* Phát hiện lỗi camera.
* Kiểm tra ánh sáng và texture.
* Xác nhận animation không bị giật hoặc sai frame.

Sau khi bản thử hoạt động tốt, có thể tăng độ phân giải trở lại `100%` và chuyển sang Cycles nếu cần chất lượng cao hơn.

---

## 4. Kiểm tra phạm vi frame

Trong **Output Properties**, cần kiểm tra hai thông số:

| Thiết lập | Ý nghĩa                     |
| --------- | --------------------------- |
| **Start** | Frame đầu tiên được render  |
| **End**   | Frame cuối cùng được render |

Trong bài học:

```text
Start: 1
End: 100
```

Nếu phạm vi frame không chính xác, Blender có thể:

* Render thiếu một phần animation.
* Render thêm các frame không cần thiết.
* Tạo video dài hoặc ngắn hơn dự kiến.
* Làm tăng thời gian render không cần thiết.

---

## 5. Thiết lập thư mục lưu kết quả

Phần quan trọng nhất trong **Output Properties** là **Output Path**.

Nếu không thay đổi đường dẫn, Blender có thể lưu kết quả vào thư mục tạm của hệ thống. Các file trong thư mục tạm có thể khó tìm hoặc bị xóa sau đó.

### Cách thực hiện

1. Mở **Output Properties**.
2. Tìm phần **Output**.
3. Nhấn biểu tượng thư mục.
4. Tạo hoặc chọn một thư mục riêng.

Ví dụ:

```text
Plane Animation Renders/
```

5. Mở đúng thư mục đó.
6. Nhấn **Accept** để xác nhận.

### Cấu trúc thư mục gợi ý

```text
Plane Animation/
├── blender/
│   └── plane_animation.blend
├── preview/
│   └── plane_preview.mp4
├── frames/
│   ├── 0001.png
│   ├── 0002.png
│   ├── 0003.png
│   └── ...
└── final/
    └── plane_animation.mp4
```

---

## 6. Hai phương pháp xuất animation

Blender hỗ trợ hai phương pháp chính:

### Phương pháp 1: Render trực tiếp thành video

Blender render các frame và mã hóa chúng ngay vào một file video.

Ví dụ:

```text
plane_animation.mp4
```

### Phương pháp 2: Render thành chuỗi ảnh

Mỗi frame được lưu thành một file ảnh riêng.

Ví dụ:

```text
0001.png
0002.png
0003.png
...
0100.png
```

Sau đó, chuỗi ảnh được đưa vào phần mềm dựng phim để tạo thành video.

---

## 7. So sánh video trực tiếp và chuỗi ảnh

| Tiêu chí                           | Render video trực tiếp | Render chuỗi ảnh         |
| ---------------------------------- | ---------------------- | ------------------------ |
| **Số lượng file**                  | Một file video         | Một file cho mỗi frame   |
| **Dễ sử dụng**                     | Rất thuận tiện         | Cần thêm bước ghép ảnh   |
| **Khả năng phục hồi khi lỗi**      | Thấp hơn               | Cao                      |
| **Hỗ trợ nền trong suốt**          | Phụ thuộc codec        | PNG hỗ trợ alpha         |
| **Khả năng hậu kỳ**                | Hạn chế hơn            | Linh hoạt                |
| **Dung lượng lưu trữ**             | Thường nhỏ hơn         | Thường lớn hơn           |
| **Phù hợp người mới**              | Có                     | Có, nhưng nhiều bước hơn |
| **Phù hợp sản xuất chuyên nghiệp** | Ít được ưu tiên        | Được ưu tiên             |

---

# Phần A — Render trực tiếp thành video

## 8. Chọn định dạng FFmpeg Video

Để xuất animation thành video:

1. Mở **Output Properties**.
2. Tìm mục **File Format**.
3. Chọn:

```text
FFmpeg Video
```

Khi chọn FFmpeg Video, Blender sẽ hiển thị thêm phần **Encoding**.

---

## 9. Thiết lập Encoding

Trong phần **Encoding**, cần thiết lập container và chất lượng video.

### 9.1 Container

Container là định dạng dùng để chứa hình ảnh, âm thanh và dữ liệu video.

Một số lựa chọn phổ biến:

| Container    | Phần mở rộng thường gặp | Đặc điểm                                                       |
| ------------ | ----------------------- | -------------------------------------------------------------- |
| **Matroska** | `.mkv`                  | Ổn định, linh hoạt nhưng không phải trình phát nào cũng hỗ trợ |
| **MPEG-4**   | `.mp4`                  | Tương thích rộng, phù hợp để chia sẻ                           |
| **WebM**     | `.webm`                 | Phù hợp nội dung web                                           |

Trong bài học, giảng viên đề xuất sử dụng:

```text
Container: MPEG-4
```

MPEG-4 phù hợp khi cần một file video có thể phát trên nhiều thiết bị và phần mềm.

---

### 9.2 Chất lượng video

Có thể chọn mức:

```text
Perceptually Lossless
```

Mức này tạo ra hình ảnh có chất lượng rất cao. Người xem gần như không nhận thấy sự suy giảm chất lượng, trong khi dung lượng file thường nhỏ hơn chế độ hoàn toàn không nén.

---

### 9.3 Encoding Speed

Trong bài học, tốc độ mã hóa được đặt thành:

```text
Slowest
```

Mã hóa chậm hơn có thể tạo ra file được nén hiệu quả hơn.

Lưu ý rằng **Encoding Speed** chủ yếu ảnh hưởng đến giai đoạn mã hóa video, không làm Blender render ánh sáng và vật liệu nhanh hơn.

Thời gian render chính vẫn phụ thuộc vào:

* Render Engine.
* Số lượng frame.
* Độ phân giải.
* Samples.
* Ánh sáng.
* Vật liệu.
* Độ phức tạp của scene.

---

## 10. Thiết lập video gợi ý

```text
File Format: FFmpeg Video
Container: MPEG-4
Video Codec: H.264
Output Quality: Perceptually Lossless
Encoding Speed: Slowest
```

Kết quả có thể là:

```text
plane_animation.mp4
```

---

## 11. Render toàn bộ animation

Sau khi hoàn tất thiết lập:

```text
Render → Render Animation
```

Phím tắt:

```text
Ctrl + F12
```

Blender sẽ lần lượt xử lý:

```text
Frame 1
Frame 2
Frame 3
...
Frame 100
```

Không nên đóng Blender hoặc tắt máy trong quá trình render.

---

## 12. Phát lại animation

Sau khi render xong, có hai cách kiểm tra:

### Cách 1: Mở file video

Đi đến thư mục đã chọn trong **Output Path** và mở file video bằng trình phát phù hợp.

### Cách 2: Xem trong Blender

Sử dụng:

```text
Render → View Animation
```

Blender sẽ mở cửa sổ phát lại animation đã render.

---

# Phần B — Render thành chuỗi ảnh

## 13. Chọn định dạng PNG

Để render mỗi frame thành một ảnh riêng:

1. Mở **Output Properties**.
2. Tại **File Format**, chọn:

```text
PNG
```

3. Chọn thư mục riêng để lưu các frame.
4. Nhấn `Ctrl + F12`.

Blender sẽ tạo ra nhiều file:

```text
0001.png
0002.png
0003.png
...
0100.png
```

Mỗi ảnh tương ứng với một frame trong animation.

---

## 14. Ưu điểm của chuỗi ảnh

### 14.1 Không mất toàn bộ tiến độ khi render gặp lỗi

Giả sử animation có 100 frame và Blender bị dừng ở frame 61.

Khi render bằng chuỗi ảnh, các frame sau vẫn còn nguyên:

```text
0001.png → 0060.png
```

Người dùng chỉ cần tiếp tục render từ frame 61.

```text
Start: 61
End: 100
```

Nếu render trực tiếp thành video, file video đang được ghi có thể bị lỗi hoặc không hoàn chỉnh. Trong một số trường hợp, người dùng phải render lại từ đầu.

---

### 14.2 Hỗ trợ nền trong suốt

PNG có thể chứa **Alpha Channel**, cho phép lưu nền trong suốt.

Để bật nền trong suốt:

1. Mở **Render Properties**.
2. Tìm phần **Film**.
3. Bật:

```text
Transparent
```

Khi đó, background của scene sẽ không được render vào ảnh.

Điều này hữu ích khi muốn:

* Đặt máy bay lên một bầu trời khác.
* Ghép vật thể 3D vào video thực tế.
* Tạo hiệu ứng hình ảnh.
* Thực hiện compositing.
* Thay đổi background trong hậu kỳ.

### Sơ đồ compositing

```text
Chuỗi ảnh máy bay có Alpha
             +
Ảnh hoặc video bầu trời mới
             │
             ▼
        Phần mềm hậu kỳ
             │
             ▼
Video máy bay trên nền mới
```

---

## 15. Thiết lập PNG có Alpha Channel

Nếu cần nền trong suốt, nên sử dụng:

```text
File Format: PNG
Color: RGBA
Film → Transparent: Enabled
```

Ý nghĩa:

| Chế độ   | Thành phần                       |
| -------- | -------------------------------- |
| **RGB**  | Đỏ, xanh lá và xanh dương        |
| **RGBA** | Đỏ, xanh lá, xanh dương và Alpha |

Chỉ chọn `RGBA` khi thực sự cần nền trong suốt. Nếu không cần Alpha Channel, có thể sử dụng `RGB` để giảm dung lượng.

---

## 16. Ghép chuỗi ảnh thành video

Sau khi render xong, có thể đưa chuỗi PNG vào:

* Blender Video Sequence Editor.
* Adobe Premiere Pro.
* DaVinci Resolve.
* Movie Maker.
* Phần mềm dựng phim hỗ trợ image sequence.

### Quy trình ghép ảnh

```text
Chuỗi ảnh PNG
      │
      ▼
Import dưới dạng Image Sequence
      │
      ▼
Thiết lập đúng Frame Rate
      │
      ▼
Thêm âm thanh hoặc hiệu ứng
      │
      ▼
Export thành MP4
```

Điều quan trọng là phải chọn đúng tốc độ khung hình khi ghép ảnh.

Ví dụ, nếu animation trong Blender sử dụng:

```text
24 FPS
```

Phần mềm dựng phim cũng phải được thiết lập ở:

```text
24 FPS
```

Nếu sai FPS, video có thể chạy quá nhanh hoặc quá chậm.

---

## 17. Sử dụng Video Sequence Editor của Blender

Không nhất thiết phải dùng phần mềm bên ngoài. Blender có sẵn **Video Sequence Editor — VSE**.

### Các bước cơ bản

1. Chuyển sang workspace **Video Editing**.
2. Chọn:

```text
Add → Image/Sequence
```

3. Chọn toàn bộ chuỗi ảnh.
4. Nhấn **Add Image Strip**.
5. Kiểm tra thứ tự frame.
6. Đặt Frame Rate đúng với scene gốc.
7. Chọn FFmpeg Video.
8. Render lại thành file MP4.

### Quy trình đầy đủ

```text
Render 3D
   │
   ▼
Chuỗi PNG
   │
   ▼
Blender VSE
   │
   ├── Chỉnh màu
   ├── Thêm âm thanh
   ├── Cắt cảnh
   └── Thêm chữ
   │
   ▼
Video MP4 hoàn chỉnh
```

---

## 18. Eevee và Cycles khi render animation

### 18.1 Eevee

Eevee có tốc độ render nhanh, phù hợp với:

* Render thử.
* Animation dài.
* Máy tính cấu hình trung bình.
* Phong cách đồ họa game.
* Scene không yêu cầu mô phỏng ánh sáng quá chính xác.

Ưu điểm:

* Tốc độ cao.
* Phản hồi gần thời gian thực.
* Phù hợp kiểm tra animation.
* Thời gian render toàn bộ ngắn hơn đáng kể.

---

### 18.2 Cycles

Cycles là công cụ render theo phương pháp path tracing, phù hợp khi cần:

* Ánh sáng chân thực.
* Bóng đổ chính xác.
* Phản xạ tốt hơn.
* Vật liệu chân thực.
* Chất lượng hình ảnh cao.

Nhược điểm:

* Render chậm hơn Eevee.
* Animation dài có thể mất nhiều thời gian.
* Dễ xuất hiện noise nếu Samples quá thấp.

---

## 19. Quy trình kết hợp Eevee và Cycles

Một quy trình hiệu quả là:

```text
Eevee + Resolution 50%
          │
          ▼
Render bản thử
          │
          ▼
Kiểm tra chuyển động và camera
          │
          ▼
Sửa lỗi nếu có
          │
          ▼
Cycles + Resolution 100%
          │
          ▼
Render bản cuối
```

Không nên chuyển trực tiếp sang Cycles và render toàn bộ animation khi chưa kiểm tra bản preview.

---

## 20. Render thử các frame đại diện

Trước khi render toàn bộ animation, nên render riêng một số frame quan trọng.

Ví dụ:

```text
Frame 1
Frame 25
Frame 50
Frame 75
Frame 100
```

Sử dụng:

```text
F12
```

Việc kiểm tra các frame đại diện giúp phát hiện:

* Camera đi xuyên qua vật thể.
* Máy bay ra ngoài khung hình.
* Ánh sáng thay đổi bất thường.
* Texture bị thiếu.
* HDRI bị xoay sai.
* Vật thể phụ xuất hiện trong render.
* Motion blur quá mạnh.
* Vật liệu bị noise.

---

## 21. Quy trình thực hành hoàn chỉnh

### Bước 1: Kiểm tra animation

* Phát animation trong Timeline.
* Kiểm tra chuyển động máy bay.
* Kiểm tra camera.
* Kiểm tra frame đầu và frame cuối.

### Bước 2: Chọn Eevee để render thử

* Chọn Eevee.
* Đặt độ phân giải `50%`.
* Giảm Samples nếu cần.

### Bước 3: Kiểm tra Frame Range

```text
Start: 1
End: 100
```

### Bước 4: Chọn Output Path

Ví dụ:

```text
Plane Animation Renders/
```

### Bước 5: Chọn định dạng

Một trong hai lựa chọn:

```text
PNG
```

hoặc:

```text
FFmpeg Video
```

### Bước 6: Render thử

```text
Ctrl + F12
```

### Bước 7: Xem kết quả

```text
Render → View Animation
```

### Bước 8: Thiết lập chất lượng cuối

* Tăng Resolution lên `100%`.
* Chọn Eevee hoặc Cycles.
* Điều chỉnh Samples.
* Bật Denoising nếu sử dụng Cycles.

### Bước 9: Render bản cuối

```text
Ctrl + F12
```

### Bước 10: Ghép chuỗi ảnh nếu cần

* Import chuỗi ảnh vào phần mềm dựng phim.
* Chọn đúng FPS.
* Thêm âm thanh và hậu kỳ.
* Xuất file MP4.

---

## 22. Phím tắt và công cụ liên quan

| Phím tắt hoặc công cụ     | Chức năng                                      |
| ------------------------- | ---------------------------------------------- |
| `F12`                     | Render frame hiện tại                          |
| `Ctrl + F12`              | Render toàn bộ animation                       |
| `Esc`                     | Yêu cầu hủy quá trình render                   |
| `Render → View Animation` | Phát animation đã render                       |
| **Output Properties**     | Đặt độ phân giải, frame range và đường dẫn     |
| **File Format**           | Chọn định dạng ảnh hoặc video                  |
| **Encoding**              | Thiết lập container, codec và chất lượng video |
| **Render Properties**     | Chọn Eevee hoặc Cycles                         |
| **Film → Transparent**    | Bật nền trong suốt                             |
| **Video Sequence Editor** | Ghép chuỗi ảnh thành video                     |

---

## 23. Các lỗi thường gặp

### 23.1 Không đặt Output Path

**Hiện tượng:** Không tìm thấy file sau khi render.

**Nguyên nhân:** Blender đang lưu trong thư mục tạm.

**Khắc phục:** Chọn một thư mục dự án cụ thể trước khi nhấn `Ctrl + F12`.

---

### 23.2 Render sai phạm vi frame

**Hiện tượng:** Video bị thiếu đoạn hoặc chứa khoảng trống thừa.

**Nguyên nhân:** Start và End không khớp với animation.

**Khắc phục:** Kiểm tra Frame Range trước khi render.

---

### 23.3 Render trực tiếp video và bị gián đoạn

**Hiện tượng:** File video không phát được hoặc không hoàn chỉnh.

**Nguyên nhân:** Máy bị tắt, Blender bị lỗi hoặc quá trình render bị dừng.

**Khắc phục:** Với animation dài, nên render thành chuỗi PNG trước.

---

### 23.4 Quên đặt MPEG-4

**Hiện tượng:** Video xuất ra khó mở trên một số thiết bị.

**Nguyên nhân:** Sử dụng container ít phổ biến hơn, chẳng hạn Matroska.

**Khắc phục:** Chọn MPEG-4 và codec H.264 khi cần khả năng tương thích rộng.

---

### 23.5 Quên bật RGBA

**Hiện tượng:** Đã bật Film Transparent nhưng ảnh không có nền trong suốt đúng như mong muốn.

**Nguyên nhân:** PNG đang được lưu ở chế độ RGB.

**Khắc phục:**

```text
Color: RGBA
```

---

### 23.6 Render Cycles với Samples quá cao

**Hiện tượng:** Thời gian render kéo dài nhưng chất lượng tăng không đáng kể.

**Khắc phục:**

* Render thử một vài frame.
* So sánh nhiều mức Samples.
* Bật Denoising.
* Chỉ sử dụng mức Samples thực sự cần thiết.

---

### 23.7 FPS không đồng nhất

**Hiện tượng:** Sau khi ghép chuỗi ảnh, video chạy quá nhanh hoặc quá chậm.

**Nguyên nhân:** FPS trong phần mềm dựng phim khác với FPS của Blender.

**Khắc phục:** Sử dụng cùng một FPS ở mọi giai đoạn.

---

### 23.8 Object phụ xuất hiện trong kết quả

**Hiện tượng:** Reference Image hoặc object dùng để hỗ trợ xuất hiện trong video.

**Khắc phục:**

* Kiểm tra biểu tượng camera trong Outliner.
* Tắt khả năng render của object không cần thiết.
* Render thử frame đầu, giữa và cuối.

---

## 24. Nên chọn phương pháp nào?

### Chọn render trực tiếp thành video khi:

* Animation ngắn.
* Chỉ cần file MP4 nhanh chóng.
* Không cần nền trong suốt.
* Không cần hậu kỳ phức tạp.
* Máy tính hoạt động ổn định.
* Không muốn sử dụng phần mềm dựng phim.

### Chọn chuỗi ảnh khi:

* Animation dài.
* Render bằng Cycles.
* Cần nền trong suốt.
* Cần compositing.
* Muốn chỉnh màu hoặc thêm hiệu ứng.
* Muốn tiếp tục từ frame bị gián đoạn.
* Đang thực hiện dự án quan trọng.

### Khuyến nghị thực tế

```text
Preview nhanh:
Eevee → FFmpeg Video → MP4

Bản render quan trọng:
Cycles/Eevee → PNG Sequence → VSE/Premiere/Resolve → MP4
```

---

## 25. Checklist trước khi render

### Thiết lập scene

* [ ] Camera đang hoạt động đúng.
* [ ] Animation phát đúng trong Timeline.
* [ ] Không có object phụ xuất hiện trong render.
* [ ] Ánh sáng và HDRI đã được kiểm tra.
* [ ] Texture không bị thiếu.

### Thiết lập output

* [ ] Resolution X/Y đã chính xác.
* [ ] Resolution Percentage đã phù hợp.
* [ ] Frame Start và End đã chính xác.
* [ ] Frame Rate đã được kiểm tra.
* [ ] Output Path đã được thiết lập.

### Thiết lập định dạng

* [ ] Đã chọn PNG hoặc FFmpeg Video.
* [ ] Nếu xuất MP4, đã chọn MPEG-4.
* [ ] Nếu cần nền trong suốt, đã chọn RGBA.
* [ ] Film Transparent đã được bật khi cần.

### Kiểm tra chất lượng

* [ ] Đã render thử một số frame đại diện.
* [ ] Đã render preview bằng Eevee.
* [ ] Samples không quá cao.
* [ ] Denoising đã được bật nếu cần.
* [ ] Có đủ dung lượng lưu trữ.

### Hoàn tất

* [ ] Đã render toàn bộ animation bằng `Ctrl + F12`.
* [ ] Đã xem lại kết quả.
* [ ] Đã ghép chuỗi ảnh nếu sử dụng PNG.
* [ ] Đã xuất video cuối cùng.
* [ ] Đã lưu file Blender.

---

## 26. Bài tập thực hành

Hãy render animation máy bay đã hoàn thiện bằng một trong hai phương pháp:

### Lựa chọn A — Video trực tiếp

```text
Eevee
Resolution: 100%
File Format: FFmpeg Video
Container: MPEG-4
Codec: H.264
```

### Lựa chọn B — Chuỗi ảnh

```text
Eevee hoặc Cycles
Resolution: 100%
File Format: PNG
Color: RGB hoặc RGBA
```

Sau đó:

1. Kiểm tra toàn bộ video.
2. Xác nhận không có frame lỗi.
3. Ghép chuỗi ảnh thành video nếu cần.
4. Lưu file dự án.
5. Chia sẻ sản phẩm với cộng đồng để nhận góp ý.

---

## 27. Kiến thức trọng tâm

> Không nên render toàn bộ animation ở chất lượng cao trước khi thực hiện một bản render thử.

> Output Path phải được thiết lập trước khi bắt đầu render.

> Render trực tiếp thành video tiện lợi, nhưng chuỗi ảnh an toàn và linh hoạt hơn.

> PNG hỗ trợ Alpha Channel, phù hợp cho nền trong suốt và compositing.

> Eevee phù hợp để preview; Cycles phù hợp khi cần hình ảnh chân thực hơn.

> Khi ghép chuỗi ảnh, FPS phải khớp với FPS của scene Blender.

---

## 28. Tóm tắt bài học

Trong bài học này, chúng ta đã hoàn thành bước cuối của dự án máy bay: render animation thành sản phẩm có thể phát và chia sẻ.

Quy trình chính gồm:

1. Kiểm tra độ phân giải và phạm vi frame.
2. Đặt thư mục lưu kết quả.
3. Render thử nhanh bằng Eevee.
4. Chọn xuất trực tiếp bằng FFmpeg hoặc xuất chuỗi ảnh PNG.
5. Thiết lập MPEG-4 và chất lượng mã hóa khi xuất video.
6. Sử dụng Alpha Channel nếu cần nền trong suốt.
7. Ghép chuỗi ảnh bằng Blender VSE hoặc phần mềm dựng phim.
8. Render bản cuối ở độ phân giải và chất lượng đầy đủ.

Bài học khép lại toàn bộ quy trình của Module 04:

```text
UV Mapping
    ↓
Modeling
    ↓
Texturing
    ↓
Scene Setup
    ↓
Lighting
    ↓
Animation
    ↓
Rendering
    ↓
Video hoàn chỉnh
```
