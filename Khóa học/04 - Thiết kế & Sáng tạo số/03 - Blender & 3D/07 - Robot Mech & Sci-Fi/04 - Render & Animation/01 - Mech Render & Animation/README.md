# Khóa thực hành Blender: Render và Walk Cycle cho Robot Mech

> **Chủ đề:** Dàn dựng studio, render ảnh, tạo walk cycle lặp vô hạn và dựng video có âm thanh trong Blender.

## Tổng quan

Khóa học hướng dẫn hoàn thiện phần trình bày của **một robot mech khoa học viễn tưởng đã có model, vật liệu cơ bản và rig điều khiển**. Người học sẽ tạo nền studio, bố trí camera, render ảnh tĩnh, dựng chuyển động đi bộ lặp, xuất chuỗi khung hình, ghép âm thanh bước chân và kết xuất video MP4.

**Phạm vi:** Khóa học không hướng dẫn dựng toàn bộ model hoặc rig từ đầu. Cần có một tệp `.blend` với robot đã được rig, các bộ điều khiển chân/bàn chân/thân/đầu có thể thao tác trong Pose Mode. Tên xương tùy rig; ví dụ `foot.R`, `foot.L`, `IK` chỉ là tên minh họa.

## Lộ trình học

| Bài | Nội dung | Sản phẩm |
| --- | --- | --- |
| [01](bai-hoc/01-dung-phong-studio.md) | Dựng nền studio và quản lý scene | Studio có nền cong và camera |
| [02](bai-hoc/02-vat-lieu-anh-sang-camera.md) | Vật liệu tối, ánh sáng, camera và khung hình | Scene sẵn sàng render |
| [03](bai-hoc/03-render-anh-va-tao-dang.md) | Render ảnh tĩnh và pose robot | 2 ảnh PNG: mặc định và tạo dáng |
| [04](bai-hoc/04-thiet-lap-walk-cycle.md) | Chuẩn bị rig, FPS, mốc đầu–cuối và contact pose | Khung 1, 30, 60 |
| [05](bai-hoc/05-chuyen-dong-trung-gian.md) | Bước chân, nâng hạ trọng tâm và đối xứng chuyển động | Khung 15 và 45, walk cycle cơ bản |
| [06](bai-hoc/06-polish-kiem-tra-loop.md) | Chỉnh bàn chân, chuyển động đầu/cổ và nối vòng lặp | Walk cycle mượt, không xuyên sàn |
| [07](bai-hoc/07-render-chuoi-khung-hinh.md) | Xuất animation thành image sequence | Bộ 59 khung JPEG được đánh số |
| [08](bai-hoc/08-video-sequencer-am-thanh-mp4.md) | Dựng video, âm thanh, lặp 5 chu kỳ và xuất MP4 | Video MP4 H.264 + AAC |
| [09](bai-hoc/09-du-an-cuoi-khoa.md) | Dự án tổng hợp và tiêu chí nghiệm thu | Bộ sản phẩm hoàn chỉnh |

## Chuẩn bị

- Blender có giao diện `Layout`, `Shading`, `Output Properties`, `Pose Mode` và `Video Sequencer`.
- Model robot có rig hoạt động; các bộ điều khiển chân, bàn chân, thân, đầu và cổ có thể tạo keyframe.
- Máy có đủ dung lượng để chứa tệp `.blend`, ảnh render và video; thời gian render phụ thuộc phần cứng và thiết lập scene.
- Có thể chuẩn bị thêm một hiệu ứng âm thanh bước chân phù hợp, với quyền sử dụng rõ ràng.

## Thông số xuyên suốt ví dụ

| Thành phần | Thiết lập được sử dụng trong lộ trình |
| --- | --- |
| Engine minh họa | Eevee |
| Ảnh tĩnh | 2560 × 2560 px, PNG |
| Tiêu cự camera | 90 mm |
| Màu nền | Đen, độ nhám (`Roughness`) khoảng 1 |
| Chu trình đi bộ | Key tại 1 và 60 giống nhau; render 1–59 |
| Các mốc chính | 1, 15, 30, 45, 60 |
| Frame rate | 24 FPS |
| Render animation | JPEG, Quality 100 (theo ví dụ) |
| Lặp video | 5 lần × 59 khung = 295 khung |
| Xuất video | FFmpeg Video, MPEG-4, H.264, AAC |

Các thông số trên là **thiết lập thực hành**, không phải cấu hình tối ưu cho mọi model hoặc mọi phiên bản Blender. Vị trí tùy chọn và tên thông số có thể khác giữa các phiên bản.

## Phương pháp học

Mỗi bài là một tệp Markdown độc lập với mục tiêu, phần giải thích, các bước thao tác, checkpoint, lỗi thường gặp, bài thực hành và câu hỏi trắc nghiệm kèm đáp án giải thích. Hoàn thành sản phẩm ở bài trước rồi mới sang bài tiếp theo. Lưu phiên bản `.blend` mới ở các mốc quan trọng để tránh ghi đè mất trạng thái ổn định.

## Cấu trúc bài nộp gợi ý

```text
mech-final/
├── mech_studio.blend
├── mech_walk.blend
├── videoedit.blend
├── stills/
│   ├── mech_final_01.png
│   └── mech_final_02.png
├── rendered_frames/
│   ├── 0001.jpg
│   └── ...
└── output/
    └── mech_walk_final.mp4
```

Tên tệp chỉ là gợi ý sắp xếp dự án; Blender có thể sinh tên ảnh khác tùy đường dẫn và mẫu tên file xuất.
