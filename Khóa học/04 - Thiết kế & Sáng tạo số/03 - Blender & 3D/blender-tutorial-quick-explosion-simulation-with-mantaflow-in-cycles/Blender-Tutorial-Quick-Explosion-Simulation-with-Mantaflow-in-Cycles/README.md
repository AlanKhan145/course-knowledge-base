# Blender Tutorial: Quick Explosion Simulation With Mantaflow in Cycles

Video hướng dẫn dựng **vụ nổ nhanh** trong Blender bằng hệ mô phỏng **Mantaflow**, render bằng **Cycles**. Điểm hay của quy trình: thay vì animate tay một mesh nổ phức tạp, video dùng một **cụm hạt phát nổ ngắn hạn** (particle burst) làm nguồn phát trực tiếp cho một đối tượng Fluid Flow kiểu Fire + Smoke — Mantaflow tự "gieo" lửa/khói tại vị trí từng hạt còn sống, cho ra hình dạng nổ hỗn loạn tự nhiên gần như miễn phí. Vật liệu lửa/khói được dựng thủ công bằng node Shader (Principled Volume + Emission qua Attribute) thay vì dùng preset có sẵn.

- **Tác giả:** tự giới thiệu là "Olaf" trong video (nghe theo bản dịch máy — có thể là **Olav**, khả năng trùng kênh Olav3D Tutorials, nhưng không chắc chắn).
- **Công cụ:** Blender, hệ mô phỏng **Mantaflow**, render engine **Cycles**.
- **Thời lượng:** ~14 phút 34 giây.
- **Nguồn ghi chú:** bản dịch máy (tiếng Việt) của transcript/phụ đề gốc video, do người dùng cung cấp — các thuật ngữ Blender bị dịch sai/lạ đã được diễn giải lại đúng theo ngữ cảnh (ví dụ "linh hoạt" = tab **Fluid**, "Bắn cài đặt" = mục **Fire**, "D5" = **Density = 5**, "yếu tố" = **Fac**). Một số con số nghe được qua dịch máy có thể không chính xác tuyệt đối — xem ghi chú chi tiết ở đầu bài 01.

## Cấu trúc khoá học

Khoá học này chỉ có **một bài duy nhất**, gộp toàn bộ kỹ thuật của video vào một file ghi chú.

| # | Bài học | Nội dung |
|---|---|---|
| [01](<01%20-%20Blender%20Tutorial%20Quick%20Explosion%20Simulation%20With%20Mantaflow%20in%20Cycles.md>) | Blender Tutorial: Quick Explosion Simulation With Mantaflow in Cycles | Hạt phát nổ làm nguồn Fluid Flow lửa+khói, Domain + Fire settings keyframe theo thời gian, shader lửa/khói thủ công trong Cycles, camera, và quy trình bake hai lần (sơ bộ → độ phân giải cao) |

## Kỹ thuật cốt lõi rút ra được

- **Hạt làm nguồn phát, không animate mesh nổ**: một hệ hạt burst (3000 hạt, phát trong 1 khung hình, sống 7 khung hình, tốc độ 25 m/s ± 100% ngẫu nhiên) được gán làm **Flow Source** cho đối tượng Fluid Flow (Type=Flow, Flow Type=Fire+Smoke, Behavior=Inflow) — Mantaflow đọc vị trí từng hạt còn sống để gieo lửa/khói, tự nhiên toả ra hỗn loạn nhờ Randomness cao.
- **Keyframe Fire settings của Domain để lửa "sống động" theo thời gian**: **Reaction Speed** cao ở đầu rồi giảm xuống 0.1 ở khung 13 làm lửa bùng mạnh rồi tắt dần, để lại khói; **Flame Smoke** và **Temperature Max/Min** kiểm soát lượng khói và vùng lửa nóng.
- **Shader lửa/khói dựng thủ công thay vì preset**: **Principled Volume** (khói, Density) cộng **Emission** (lửa, Strength lấy từ **Fac** của node **Attribute** đọc thuộc tính `flame` do Mantaflow ghi lên mesh Domain sau bake, nhân với một hệ số khuếch đại) qua **Add Shader**, nối vào ngõ **Volume** (không phải Surface) của Material Output.
- **Bake hai lần**: bake sơ bộ độ phân giải thấp để kiểm tra hình dạng/bố cục trong lúc dựng ánh sáng, camera, vật liệu; rồi **Free Bake** và bake lại ở độ phân giải cao (Resolution Divisions 200–400) sau khi mọi thứ đã chốt — tránh phí thời gian bake nặng nhiều lần trên thiết lập chưa hoàn chỉnh.
- **Lưu file liên tục ở mọi mốc quan trọng**: mô phỏng Mantaflow độ phân giải cao chạy nhiều giờ, nên video lưu lại (File → Save As → +) sau mỗi cụm thiết lập lớn để tránh mất dữ liệu khi crash.

## Cách sử dụng thư mục ghi chú này

- File `01 - Blender Tutorial Quick Explosion Simulation With Mantaflow in Cycles.md` là bài học duy nhất, có cấu trúc: mục tiêu, quy trình từng bước theo mốc thời gian, hai sơ đồ mermaid (pipeline tổng thể + node shader), phím tắt & thiết lập liên quan, lưu ý & lỗi thường gặp, checklist, tóm tắt.
- Vì có transcript thật (dù qua dịch máy), quy trình bám khá sát thao tác tác giả làm trong video; một số con số cụ thể (đặc biệt giá trị Flame Smoke, số khung hình mô phỏng cuối) có khả năng bị nghe/dịch không chính xác tuyệt đối — dùng làm điểm khởi đầu rồi tinh chỉnh bằng mắt trong Rendered viewport.
- Nên xem qua video gốc một lượt trước để thấy đúng tỉ lệ/tốc độ thao tác, sau đó dùng ghi chú này để tra lại đúng thứ tự thiết lập khi tự dựng lại trong Blender của bạn.

## Checklist tổng thể

- [ ] Hiểu vì sao dùng hệ hạt burst làm Flow Source thay vì animate mesh nổ, và Randomness cao tạo hình dạng hỗn loạn tự nhiên như thế nào.
- [ ] Dựng được Fluid Flow đúng loại (Fire+Smoke, Inflow, Source=Particle System) và keyframe Size/Initial Velocity cho nguồn phát.
- [ ] Dựng được Domain và keyframe Reaction Speed để lửa bùng rồi tắt dần theo thời gian.
- [ ] Dựng được node shader thủ công cho lửa/khói (Principled Volume + Emission qua Attribute "flame") và nối đúng vào ngõ Volume.
- [ ] Biết quy trình bake hai lần: sơ bộ để kiểm tra, rồi độ phân giải cao sau khi mọi thứ đã chốt.
- [ ] Biết cấu hình render cuối (Cycles, GPU, Samples, Resolution%, output PNG) và thói quen lưu file liên tục khi làm mô phỏng nặng.
