# Bài 08 — Dựng vòng lặp có âm thanh và xuất video MP4

## 1. Tóm tắt

Bài cuối của pipeline xử lý `Video Sequencer`: nhập 59 ảnh render thành một `Image Strip`, lặp lại năm lần, đồng bộ âm thanh bước chân và xuất video **MP4 sử dụng H.264 cho hình ảnh, AAC cho âm thanh**. Dự án dựng video được lưu độc lập dưới tên `videoedit.blend`.

## 2. Mục tiêu học tập

- Nhập image sequence theo thứ tự thời gian đúng.
- Đồng bộ độ phân giải và FPS của sequence với video dự kiến.
- Lặp `Image Strip` năm lần mà không làm trùng frame tại mối nối.
- Cắt, di chuyển và nhân bản `Sound Strip` để khớp nhịp chân.
- Cấu hình FFmpeg Video, MPEG-4, H.264 và AAC rồi render MP4.

## 3. Tạo dự án dựng video

Sau khi render thành công chuỗi ảnh, lưu tệp nguồn. Chọn `File` → `New` → workspace hoặc template `Video Editing`. Trong `Sequencer`, dùng `Shift + A` → `Image/Sequence`, sau đó điều hướng tới thư mục `rendered_frames/`.

Một trình duyệt file có thể liệt kê ảnh theo thứ tự không mong muốn. **Kiểm tra tên ảnh đầu và cuối trước khi thêm**. Nếu danh sách đang đảo chiều, dùng điều khiển đảo thứ tự sắp xếp (`Reverse Sorting` hoặc tương đương trong file browser) để dãy bắt đầu ở `0001` rồi tăng lên.

Chọn toàn bộ chuỗi ảnh bằng `A`, nhấn `Add Image Strip`. Blender sẽ đưa một dải ảnh vào timeline. Nếu trình duyệt không tự tạo strip gồm toàn bộ ảnh mà chỉ nhập từng ảnh riêng, cần chọn đúng thao tác nhập **image sequence**, không nhầm với một ảnh tĩnh đơn lẻ.

## 4. Đặt kích thước và tốc độ phát

Chọn `Image Strip`. Nếu phiên bản Blender hỗ trợ, dùng lệnh tương ứng `Strip` → `Set Render Size` để khớp độ phân giải render với kích thước ảnh nhập. Kiểm tra `Output Properties`:

- `Resolution X/Y`: phù hợp chuỗi ảnh gốc (trong ví dụ là khung vuông 2560 × 2560 nếu đã render cấu hình đó).
- `Frame Rate`: **24 FPS**.
- `Frame Start`: **1**.

Nhấn `Space` thử phát chuỗi. Nếu robot đi ngược trình tự, kiểm tra **thứ tự ảnh đã nhập**, không chữa bằng cách đảo tốc độ phát tùy tiện.

## 5. Nhân bản thành năm chu kỳ

Dải đầu tiên có 59 frame. Chọn dải và nhấn `Shift + D`, đặt bản sao **ngay sau dải trước**. Lặp cho đến khi có tổng cộng **5 dải liền nhau**.

```text
Chu kỳ 1      Chu kỳ 2      Chu kỳ 3      Chu kỳ 4      Chu kỳ 5
[ 59 frame ][ 59 frame ][ 59 frame ][ 59 frame ][ 59 frame ]

Tổng = 59 × 5 = 295 frame
Dải xuất: 1–295
```

Đặt `Frame End = 295`. Các dải không được chồng lên nhau ngoài ý muốn và không để khoảng trống. Một strip 59 khung bắt đầu ở frame 1 sẽ kết thúc ở frame 59; bản sao kế tiếp bắt đầu ở frame 60. Kiểm tra bằng cách zoom timeline và phát qua chỗ nối.

Nhấn `Ctrl + Shift + S` hoặc dùng `File` → `Save As` để lưu dự án dựng video dưới tên **`videoedit.blend`**. Menu và phím tắt Save As có thể thay đổi theo phiên bản hoặc keymap.

## 6. Nhập và đồng bộ âm thanh bước chân

Bạn cần một tệp audio bước chân robot có quyền sử dụng hợp lệ. Hiệu ứng có thể lấy từ một thư viện âm thanh miễn phí như Freesound nếu tệp cụ thể và điều kiện giấy phép cho phép; không có tệp âm thanh kèm sẵn trong khóa học.

Trong Video Sequencer, sử dụng `Shift + A` → `Sound` hoặc kéo thả tệp âm thanh vào vùng sequencer. Đặt sound strip ở một channel riêng phía dưới dải hình.

Để căn nhịp chính xác:

1. Mở sidebar bằng `N` nếu cần, tìm phần hiển thị âm thanh và bật `Waveform`/`Show Waveforms` tương ứng phiên bản.
2. Phát video và lắng nghe: xác định thời điểm bàn chân thực sự chạm sàn, không phải thời điểm chân bắt đầu vung.
3. Chọn sound strip; dùng `G` để dịch nó đến nhịp tiếp đất đầu tiên.
4. Đặt playhead tại điểm cần cắt, chọn dải âm thanh và sử dụng thao tác `Split` (`K` trong cấu hình đang dùng nếu phím này được gán cho split).
5. Căn các đoạn cho từng nhịp chân. Tránh đặt tiếng bước chân vào lúc bàn chân còn đang ở trên không.
6. Khi âm thanh của **một chu kỳ** đã khớp, dùng `B` box-select các đoạn âm thanh thuộc chu kỳ đó và `Shift + D` để nhân bản sang các vòng tiếp theo.
7. Phát thử nhiều lần qua các điểm nối, điều chỉnh phần cuối/đầu để không bị phát chồng quá to hoặc hụt nhịp.

**Quan trọng:** `K` và một số lệnh thao tác strip có thể khác tùy phiên bản, keymap hoặc editor đang được focus. Nếu không cắt được, sử dụng menu `Strip` → `Split` của Video Sequencer. Không nhầm với lệnh cắt strip trong editor khác.

## 7. Xuất video cuối

Mở `Output Properties` và chỉ đường dẫn lưu output video. Chọn các thông số minh họa:

| Mục | Thiết lập |
| --- | --- |
| File Format | `FFmpeg Video` |
| Container | `MPEG-4` |
| Video Codec | `H.264` |
| Output Quality | `Medium` hoặc mức phù hợp |
| Audio Codec | `AAC` |
| Frame Rate | `24 FPS` |
| Frame Range | `1–295` |

Trong một số phiên bản Blender, phần `Encoding` hoặc bố cục thuộc tính có thể được đặt tên khác, nhưng mục đích vẫn là tạo container MP4 với mã hóa video H.264 và âm thanh AAC.

Nhấn **`Ctrl + S`** lưu `videoedit.blend`, rồi **`Ctrl + F12`** hoặc `Render` → `Render Animation` để xuất video. Khi hoàn thành, mở MP4 bằng trình phát thông thường để kiểm tra hình ảnh, âm thanh và toàn bộ thời lượng.

## 8. Kiểm tra chất lượng xuất video

- Độ phân giải và tỷ lệ khung hình đúng mục tiêu, không bị co méo.
- Video có tổng 295 khung ở 24 FPS theo cấu hình bài thực hành.
- Không có frame đen hoặc khoảng trống giữa hai strip.
- Âm thanh nghe rõ, không bị cắt hụt hoặc chồng tiếng khó chịu.
- Nhịp chân và tiếng bước chân đúng tại ít nhất một vòng hoàn chỉnh; kiểm tra thêm tại các mối nối.
- Tệp có đuôi `.mp4` và phát được bằng ứng dụng thông thường.

| Lỗi | Hướng xử lý |
| --- | --- |
| Video đi ngược | Kiểm tra thứ tự image sequence khi nhập |
| Hình biến dạng | Kiểm tra Resolution X/Y và tùy chọn fit/crop |
| Video nhanh/chậm | Khớp FPS sequence với FPS output |
| Có khung đen | Kiểm tra khoảng trống giữa image strips và dải frame render |
| Không có tiếng | Kiểm tra Sound Strip, mute/channel và Audio Codec AAC |
| Có tiếng chân sai nhịp | Dời hoặc cắt lại sound strips theo điểm tiếp đất |

## 9. Thực hành ngắn

Nhập bộ 59 ảnh vào Video Sequencer, nhân bản thành **5 chu kỳ (295 frame)**, thêm âm thanh bước chân căn theo từng lần tiếp đất, rồi xuất video H.264/AAC ở 24 FPS. Lưu riêng `videoedit.blend`.

**Tiêu chí hoàn thành:** MP4 phát được, đúng kích thước khung, vòng đi bộ nối liền mạch và tiếng bước chân không lệch rõ khi lặp lại.

## 10. Câu hỏi ôn tập

### Câu 1

Sau khi nhập 59 frame và nhân bản đủ 5 chu kỳ, mốc kết thúc output nên đặt là gì?

A. 60.  
B. 295.  
C. 300.  
D. 59.

**Đáp án:** B. **Giải thích:** 5 chu kỳ × 59 frame cho ra 295 frame.

### Câu 2

Nếu video phát ngược thứ tự bước chân ngay sau khi nhập ảnh, nên kiểm tra điều gì đầu tiên?

A. `Roughness` của nền.  
B. Rotation của camera.  
C. Tên xương đầu.  
D. Thứ tự file ảnh đã chọn khi tạo Image Strip.

**Đáp án:** D. **Giải thích:** Sequence nhập không đúng thứ tự sẽ làm chuyển động bị đảo ngược.

### Câu 3

Codec âm thanh được sử dụng trong cấu hình MP4 mẫu là gì?

A. AAC.  
B. H.264.  
C. JPEG.  
D. PNG.

**Đáp án:** A. **Giải thích:** AAC mã hóa âm thanh, còn H.264 dành cho video.

### Câu 4

Điểm nào thích hợp để đặt tiếng bước chân rõ nhất?

A. Mọi frame số chẵn.  
B. Chỉ frame 60.  
C. Khi bàn chân chạm sàn và chịu lực theo chuyển động.  
D. Khi camera thay đổi lens.

**Đáp án:** C. **Giải thích:** Âm thanh bước chân phải khớp sự kiện tiếp xúc, không chỉ khớp chuyển động chân bất kỳ.

### Câu 5

Vì sao cần kiểm tra khung giữa các Image Strip sau khi nhân bản?

A. Để đổi màu đèn.  
B. Để bảo đảm không có khung trống hoặc chồng khung gây lỗi nối vòng.  
C. Để làm rig dài hơn.  
D. Để thêm Subdivision Surface vào âm thanh.

**Đáp án:** B. **Giải thích:** Các dải phải nối liên tục để tạo video lặp không đứt đoạn.

## 11. Tổng kết

Image sequence cung cấp hình ảnh, Video Sequencer ghép các vòng, còn Sound Strip tạo cảm giác trọng lượng qua âm thanh bước chân. Bộ thiết lập FFmpeg/MPEG-4/H.264/AAC hoàn thiện một tệp MP4 có thể chia sẻ.
