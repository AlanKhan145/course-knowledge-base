# Bài 08 — Animation Robot Worker, render khung hình và dựng video

## 1. Tóm tắt

Bài cuối biến robot có rig thành một đoạn hoạt hình hoàn chỉnh: robot **tiến vào hành lang, giảm tốc, nhìn quanh, đưa tay lên quan sát, quay sang lối rẽ rồi rời khung hình**. Chuyển động được dựng bằng `Timeline`, `Keyframe` và việc điều chỉnh khoảng cách giữa các mốc. Sau đó bạn sẽ hoạt hình camera, render **chuỗi PNG** và lắp ghép thành video bằng `Video Sequencer` của Blender.

## 2. Mục tiêu học tập

- Cấu hình Timeline, độ phân giải và phạm vi khung hình.
- Tạo keyframe di chuyển và xoay cho các object trong rig cơ khí.
- Kết hợp chuyển động thân, đầu, vai, khuỷu và móng vuốt để nhân vật có sức nặng và biểu cảm.
- Điều chỉnh timing qua vị trí keyframe thay vì chỉ tăng số lượng keyframe.
- Đưa camera chuyển động theo nhân vật mà vẫn giữ bố cục ổn định.
- Render chuỗi ảnh và biên tập video có mã hóa H.264 trong container MP4.

## 3. Thiết lập Timeline và đầu ra hình ảnh

Kéo mở vùng `Timeline` ở phía dưới màn hình nếu nó đang thu nhỏ; chuyển editor sang `Timeline` khi cần. Trong ví dụ, phạm vi làm việc ban đầu được đặt tới khoảng **400 khung hình**. Con số này là giới hạn dựng thử, không bắt buộc clip cuối phải chứa đủ 400 khung; khi biên tập có thể chốt thời lượng khác, chẳng hạn 375 khung theo số frame đã xuất.

Chọn Eevee để ưu tiên tốc độ render. Tại `Output Properties`, đặt khung hình cơ sở **1920 × 1080 (16:9)**. Ví dụ có lựa chọn `Resolution % = 200%` để render ở kích thước gấp đôi mỗi chiều (nặng hơn 1080p cơ sở); máy yếu nên để 100% và kiểm tra preview trước.

Đảm bảo camera bao trọn vùng chuyển động đầu và thân. `G Z Z` di chuyển camera theo trục cục bộ, `R R` chỉnh xoay trackball; sau mỗi lần chỉnh, xem `Numpad 0` để biết nhân vật có bị cắt ra khỏi khung không.

## 4. Nguyên tắc tạo keyframe cơ khí

Animation được dựng trên các object điều khiển có `Origin` đúng tâm khớp. Khi bật `Auto Keying`, thay đổi transform của object trên một frame thích hợp có thể tự tạo keyframe cho các kênh tương ứng theo thiết lập keying. Cần kiểm tra biểu tượng keyframe/timeline thay vì giả định mọi kênh đã được ghi.

Các kênh chuyển động quan trọng gồm:

- **Root/body:** di chuyển toàn robot, quay theo hướng hành lang.
- **Torso/neck:** nghiêng người khi tăng tốc/giảm tốc và điều chỉnh hướng nhìn.
- **Head:** nhìn xung quanh, cúi đầu quan sát.
- **Arms/claws:** đu đưa khi chạy, đưa một tay lên, mở và khép móng vuốt.
- **Camera:** xoay nhẹ, thay đổi vị trí để theo nhân vật.

`Alt+R` đưa một object về rotation mặc định khi thử pose, nhưng không nên dùng tùy tiện giữa animation nếu nó sẽ ghi keyframe xóa một tư thế đang cần.

## 5. Chuyển động 1 — Robot tiến vào cảnh

Ở **frame 1**, đặt điều khiển gốc của robot lùi về vị trí bắt đầu, ngoài hoặc gần rìa tầm nhìn camera. Tạo keyframe vị trí. Chuyển tới khoảng **frame 80**, dịch root theo hướng hành lang (`G Y` trong bố cục đang dùng) rồi tạo keyframe tiếp theo.

Nếu chỉ animate root, robot sẽ trượt trên sàn. Để chuyển động có trọng lượng:

1. Ở đầu chuyển động, cho thân nghiêng nhẹ về phía trước hoặc hạ thấp phần đầu.
2. Khi tăng tốc, khép tay vào cơ thể và chỉnh móng vuốt gần trạng thái đóng.
3. Khi tiến về mốc 80, thay đổi góc thân một chút, như phản ứng với quán tính.
4. Sau khi dừng, chuyển thân về vị trí cân bằng thay vì đứng yên đột ngột.

Điều quan trọng không nằm ở việc tạo thật nhiều chuyển động lớn. Một góc nghiêng nhỏ giữa các keyframe có thể khiến robot trông nặng và có cơ chế vận hành hơn.

## 6. Chuyển động 2 — Dừng lại và nhìn quanh

Khoảng **frame 95–125** có thể dùng để tạo giai đoạn dừng và điều chỉnh tư thế. Chèn keyframe giữ vị trí trước khi đổi pose để tay không bắt đầu hạ quá sớm. Ở đoạn sau, giảm góc tay và chuyển vị trí đầu/cổ để robot trông đang quan sát hành lang.

Nếu tay hạ quá nhanh, hãy chọn keyframe của bộ phận đó và dùng `G` di chuyển nó xa hơn trên Timeline. **Khoảng cách khung hình lớn hơn thường tạo chuyển động chậm hơn** khi biên độ chuyển động giữ nguyên. Khi có nhiều object ở cùng một hành động, phải xem lại thời điểm keyframe của từng bộ phận để chúng không kết thúc lệch nhau vô lý.

## 7. Chuyển động 3 — Quan sát bàn tay và mở móng vuốt

Giai đoạn giữa clip tạo một cử chỉ có tính nhân vật: robot quay đầu nhìn cánh tay, đưa tay lên rồi mở ngàm. Thực hiện theo thứ tự:

1. Tạo keyframe trạng thái tay trước khi nâng.
2. Xoay vai và khuỷu để đưa tay vào vùng camera thấy rõ.
3. Xoay phần đầu để đường nhìn hướng về tay.
4. Tại khoảng **frame 235** (mốc tham khảo), điều chỉnh cổ tay và mở các móng vuốt bằng rotation riêng.
5. Thêm các keyframe nối để ngàm khép/mở không giật cục.

Nếu chỉ xoay một ngàm, kẹp sẽ trông như bị lỗi; nếu cả hai ngàm xoay cùng chiều tuyệt đối, chúng có thể không thực sự đóng mở. Hãy kiểm tra hướng rotation của từng ngàm trong hệ rig và khoảng hở ở đầu kẹp.

## 8. Chuyển động 4 — Quay sang hành lang mới và rời cảnh

Trước khi robot đổi hướng, nên có một keyframe giữ orientation ở khoảng **frame 250**. Sau đó chuyển tới **frame 290** và xoay root quanh `Z` để hướng về nhánh hành lang. Khi chuyển động quá nhanh, có thể dời keyframe quay sang khoảng **frame 300**.

Phối hợp các phần sau:

- Cổ và đầu hướng theo lối rẽ; mắt/cảm biến có vẻ nhìn thấy đích đến.
- Thân xoay theo sau thay vì mọi bộ phận quay cứng cùng thời điểm.
- Hai tay trở về tư thế thích hợp để di chuyển.
- Root tiếp tục dịch dọc hành lang để ra khỏi khung hình.

Kiểm tra các keyframe bị quá gần nhau vì chúng thường tạo chuyển động giật. Nếu muốn robot bắt đầu quay muộn, giữ nguyên rotation tại frame trước và chỉ đổi ở frame mới.

## 9. Chuyển động camera

Tạo camera motion vừa phải: camera có thể nghiêng nhẹ như cầm tay hoặc lùi/xoay theo robot. Chọn Camera, ở đầu clip đặt góc nhìn rộng đủ thấy hướng di chuyển; thêm keyframe vị trí và rotation. Ở các mốc quan trọng, di chuyển camera bằng `G`, xoay bằng `R R`, rồi tạo keyframe tương ứng.

Camera không nên chuyển động ngược với robot đến mức đối tượng bị tuột khỏi khung. Luôn xem lại bằng `Numpad 0` ở vài frame then chốt. Chỉ cần chuyển động nhỏ để tạo cảm giác người quan sát đang hiện diện trong cảnh.

## 10. Render animation thành chuỗi ảnh PNG

Tại `Output Properties`:

1. Xác định lại `Frame Start` và `End` theo clip cuối thực tế.
2. Chọn thư mục riêng, ví dụ `rendered_frames/`.
3. Đặt `File Format = PNG` để mỗi frame được lưu thành một ảnh độc lập.
4. Nếu scene có vignette từ Compositor, kiểm tra lại hình dạng mask trên khung **16:9**: mask thiết kế cho ảnh tĩnh vuông có thể không che đều mép trên/dưới.
5. Lưu `.blend` và chọn `Render → Render Animation` (`Ctrl+F12`).

Xuất PNG mang lại lợi thế: nếu có sự cố trong quá trình render, những khung đã lưu vẫn có thể kiểm tra và sử dụng. Trước khi chạy cả chuỗi, render thử một vài frame có góc camera và ánh sáng khó nhất để phát hiện lỗi.

## 11. Ghép PNG thành video trong Video Sequencer

Mở workspace hoặc file mới dành cho `Video Editing`. Trong `Video Sequencer`, dùng `Shift+A → Image/Sequence` và mở thư mục `rendered_frames/`. Chọn các ảnh đúng thứ tự bằng `A`, thêm chúng thành một strip ảnh. Đặt `Frame End` phù hợp với số ảnh thực tế; ví dụ quá trình biên tập có thể kết thúc ở **frame 375**.

Thiết lập kích thước dự án trùng với chuỗi ảnh muốn xuất. Nếu render ảnh ở tỷ lệ 200% của 1920 × 1080 nhưng muốn video cuối là 1080p, có thể đặt đầu ra video là 1920 × 1080 và kiểm tra scale/fit của strip. Không tự mặc định ảnh và video luôn có cùng độ phân giải chỉ vì cùng tỷ lệ 16:9.

Nếu cần, chèn hiệu ứng âm thanh từ thư viện có giấy phép sử dụng phù hợp, chẳng hạn Freesound, bằng audio strip; khâu này là tùy chọn trong bài.

## 12. Encode MP4 và kiểm tra kết quả

Vào `Output Properties`, chỉ định thư mục và tên tệp video cuối. Ở bản Blender hỗ trợ FFmpeg:

- `File Format`: `FFmpeg Video`.
- `Container`: `MPEG-4`.
- `Video Codec`: `H.264`.
- Nếu có âm thanh, chọn codec âm thanh `AAC` phù hợp.
- Chọn mức chất lượng hợp lý với kích thước video và mục đích sử dụng.

Dùng `Render → Render Animation` để encode video. Kiểm tra file cuối bằng trình phát video: khung đầu có vào cảnh đúng không, các khớp có giật không, robot có đi ra khỏi camera đúng lúc không, có frame đen hoặc vignette bị lệch không. Chỉ chỉnh tốc độ keyframe sau khi đã thấy vấn đề cụ thể.

## 13. Bài tập cuối khóa và Definition of Done

**Dự án:** hoàn thành animation có câu chuyện chuyển động ngắn: **đi vào → dừng/quan sát → xem bàn tay → quay hướng → rời cảnh**.

- [ ] Root di chuyển theo hành lang, không trượt khớp.
- [ ] Thân có quán tính nhỏ khi tăng và giảm tốc.
- [ ] Đầu nhìn quanh; ít nhất một tay được đưa lên và móng vuốt mở/đóng.
- [ ] Chuyển động quay hướng có timing hợp lý; không giật ở các keyframe gần nhau.
- [ ] Camera không làm nhân vật biến mất ngoài ý muốn.
- [ ] Đã render chuỗi PNG đầy đủ theo phạm vi khung cuối.
- [ ] Video cuối đúng khung 16:9 và phát liên tục.
- [ ] Có file `.blend`, thư mục frames và video kết quả.

**Gợi ý nâng cao:** tạo thêm một bản với camera cố định, rồi so sánh mức độ rõ ràng của chuyển động so với bản camera có chuyển động nhẹ.

## 14. Lỗi thường gặp

| Lỗi | Nguyên nhân | Giải pháp |
| --- | --- | --- |
| Robot trượt như vật tĩnh | Chỉ animate root | Thêm nghiêng thân, chuyển tay/đầu, kiểm tra bánh/chân |
| Cánh tay đột ngột giật | Keyframe đặt quá sát hoặc thiếu keyframe giữ | Dời keyframe và xem lại các kênh rotation |
| Ngàm đóng lệch | Origin hoặc dấu góc của hai ngàm chưa đúng | Kiểm tra pivot từng ngàm và hướng xoay |
| Camera cắt mất robot | Góc nhìn không bao trọn hành trình | Xem từng mốc bằng Camera View |
| Vignette bị sai ở trên/dưới | Mask từ ảnh vuông chưa chỉnh sang 16:9 | Điều chỉnh width/height mask trước khi render |
| File xuất không phải MP4/H.264 | Chưa chọn container/codec đúng | Chỉnh `FFmpeg Video`, `MPEG-4`, `H.264` |
| Video không khớp độ dài | End Frame khác số ảnh | Đặt lại số frame trong Sequencer |

## 15. Câu hỏi ôn tập

### Câu 1

Chỉ animate di chuyển root từ frame 1 đến 80 thường tạo cảm giác gì?

A. Robot có chuyển động tay chân tự nhiên ngay lập tức.  
B. Robot tự động quay bánh xe.  
C. Robot phát sáng nhiều hơn.  
D. Robot có thể trượt trên sàn, thiếu quán tính cơ thể.

**Đáp án:** D. **Giải thích:** Chuyển động root chưa mô tả các phản ứng của cơ thể và tay.

### Câu 2

Một cánh tay đổi góc quá nhanh giữa hai keyframe. Điều chỉnh nào trực tiếp giúp chậm lại nếu giữ nguyên góc cuối?

A. Đặt keyframe kết thúc muộn hơn.  
B. Tăng Metallic.  
C. Xóa camera.  
D. Thêm một Plane.

**Đáp án:** A. **Giải thích:** Cùng biên độ trong nhiều frame hơn làm tốc độ quay trung bình nhỏ hơn.

### Câu 3

Vì sao chuỗi PNG là một cách xuất animation hữu ích?

A. Nó tự chèn âm thanh.  
B. Nó biến mọi khớp thành xương.  
C. Mỗi frame được lưu độc lập, dễ kiểm tra và tái dựng video.  
D. Nó tự giảm toàn bộ thời gian render về 0.

**Đáp án:** C. **Giải thích:** Ảnh rời giúp xử lý độc lập từng khung và không phụ thuộc hoàn toàn vào file video đang ghi.

### Câu 4

Cấu hình nào phù hợp để tạo một video MP4 phổ biến?

A. Image Texture + Bevel.  
B. `FFmpeg Video` + `MPEG-4` + `H.264`.  
C. `Mirror` + `Origin to 3D Cursor`.  
D. `AO` + `ColorRamp`.

**Đáp án:** B. **Giải thích:** FFmpeg định dạng video, MPEG-4 là container và H.264 là codec hình ảnh.

### Câu 5

Khi chuyển ảnh render vuông thành khung video 16:9, hiệu ứng nào dễ cần chỉnh lại vùng ảnh?

A. `Parenting` của bàn tay.  
B. `Mirror` của chân.  
C. `Apply Rotation` của cổ.  
D. Kích thước và tỷ lệ của vignette mask.

**Đáp án:** D. **Giải thích:** Mask hậu kỳ có hình dạng phụ thuộc tỷ lệ khung hình.

## 16. Tổng kết

Animation có sức sống nhờ **sự phối hợp chuyển động, thời điểm và phản ứng cơ học**. Root quyết định đường đi, thân tạo cảm giác trọng lượng, đầu cho biết sự chú ý, còn cánh tay/móng vuốt tạo hành động. Chuỗi PNG giúp quản lý render an toàn, và `Video Sequencer` giúp xuất bản clip cuối bằng MP4/H.264. Hoàn thành bài này đồng nghĩa bạn có một quy trình trọn vẹn: modeling, look development, rig, posing, rendering và animation của robot khoa học viễn tưởng.
