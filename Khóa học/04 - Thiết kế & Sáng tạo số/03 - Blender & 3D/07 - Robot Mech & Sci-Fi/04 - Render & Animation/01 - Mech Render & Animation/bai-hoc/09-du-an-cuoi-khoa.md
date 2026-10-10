# Bài 09 — Dự án cuối khóa: Bộ trình bày robot mech hoàn chỉnh

## 1. Bài toán

Một robot mech đã có model và rig cần được trình bày như sản phẩm hoàn chỉnh: ảnh tĩnh sắc nét, hero pose rõ hình khối và video đi bộ có thể lặp cùng âm thanh đồng bộ. Dự án kết hợp toàn bộ workflow từ scene tới MP4.

## 2. Mục tiêu sản phẩm

Hoàn thành **một gói sản phẩm** gồm file dự án Blender, hai ảnh render và một video có âm thanh. Người xem phải nhận thấy hình khối robot rõ ràng, bước đi có trọng lượng, không xuyên sàn quá mức và mối nối giữa các chu kỳ khó nhận ra.

## 3. Yêu cầu kỹ thuật

| Hạng mục | Yêu cầu |
| --- | --- |
| Nền và vật liệu | Phông studio tối, chuyển tiếp cong, không cắt khung |
| Camera | Cùng bố cục chủ đạo, lens mẫu 90 mm |
| Ảnh tĩnh | Hai tệp PNG, ví dụ 2560 × 2560 |
| Walk cycle | 24 FPS; key ở 1, 15, 30, 45, 60 |
| Loop | Frame 60 = 1; render 1–59 |
| Chân và thân | Chân luân phiên, root có dao động nhẹ |
| Video dựng | 5 vòng liên tục, kết thúc ở frame 295 |
| Âm thanh | Hiệu ứng bước chân căn theo thời điểm tiếp đất |
| Export | MP4, H.264, AAC |

Được phép thay đổi một số thông số hình ảnh để phù hợp phần cứng, nhưng phải giải thích lý do trong phần ghi chú bàn giao.

## 4. Các mốc triển khai

### 4.1. Milestone 1 — Studio và ảnh tĩnh

- Dựng nền từ Plane, Loop Cut, Extrude và Subdivision Surface.
- Đặt vật liệu nền tối, điều chỉnh đèn và camera.
- Render `mech_final_01.png` và `mech_final_02.png`.

**Checkpoint:** Không có chi tiết robot quan trọng bị cắt; bóng và ánh sáng đủ đọc hình khối.

### 4.2. Milestone 2 — Walk cycle

- Lưu riêng `mech_walk.blend`.
- Tạo contact pose tại 1 và 30; đóng vòng tại 60.
- Dựng pha nhấc chân tại 15 và 45.
- Sửa xuyên sàn gần 25/35, chỉnh đầu/cổ và so sánh khung 1/60.

**Checkpoint:** Phát lại 1–59 nhiều vòng không nhận thấy nhảy tư thế rõ rệt.

### 4.3. Milestone 3 — Render frame sequence

- Chỉ đường dẫn `rendered_frames/`.
- Thiết lập JPEG Quality 100 cho ví dụ, 24 FPS, dải 1–59.
- Render Animation và kiểm tra đủ ảnh.

**Checkpoint:** 59 ảnh có thứ tự đúng và nội dung nhất quán.

### 4.4. Milestone 4 — Dựng video và âm thanh

- Mở Video Sequencer, nhập image sequence tăng dần.
- Nhân bản dải hình thành 5 vòng = 295 khung.
- Đồng bộ hiệu ứng bước chân, kiểm tra điểm nối.
- Xuất MP4 H.264/AAC và lưu `videoedit.blend`.

**Checkpoint:** Video và audio phát bình thường từ đầu tới cuối.

## 5. Quy tắc kiểm thử

Kiểm tra không chỉ trong Blender mà còn bằng trình phát file bên ngoài:

1. **Ảnh:** Mở riêng hai PNG; kiểm tra chi tiết, vùng sáng tối, khung ảnh.
2. **Animation:** Scrub tất cả frame có điểm tiếp đất, đặc biệt quanh 25 và 35.
3. **Loop:** Quan sát mối nối khung 59 → 1 qua ít nhất ba vòng phát.
4. **Âm thanh:** Nghe ở đoạn giữa và tại ranh giới chu kỳ; kiểm tra không hụt hoặc chồng tiếng gây khó chịu.
5. **Đầu ra:** Kiểm tra định dạng MP4, tỷ lệ ảnh và frame rate ở file cuối.

## 6. Deliverables

```text
mech-final/
├── mech_studio.blend
├── mech_walk.blend
├── videoedit.blend
├── stills/
│   ├── mech_final_01.png
│   └── mech_final_02.png
├── rendered_frames/
│   └── [59 ảnh frame được đánh số]
└── output/
    ├── mech_walk_final.mp4
    └── ghi_chu_ban_giao.md
```

Trong `ghi_chu_ban_giao.md`, ghi ngắn gọn cấu hình render cuối, nơi chứa tệp âm thanh và điều chỉnh quan trọng so với thông số ví dụ. Không cần chép lại toàn bộ các bài học.

## 7. Definition of Done

Dự án chỉ được đánh dấu hoàn thành khi tất cả điều kiện dưới đây đạt:

- [ ] Có hai PNG hiển thị được và nhìn thấy toàn bộ robot theo chủ ý.
- [ ] Scene Blender gốc có thể mở lại và chỉnh sửa tiếp.
- [ ] Chu kỳ bước chân không xuất hiện xuyên sàn nghiêm trọng.
- [ ] Frame 1 và 60 trùng tư thế, không có keyframe camera ngoài ý muốn.
- [ ] Có đầy đủ 59 ảnh trong chuỗi render.
- [ ] Video gồm năm lần lặp liên tục, dải 1–295 ở 24 FPS.
- [ ] Âm thanh đồng bộ bước chân và có giấy phép sử dụng phù hợp.
- [ ] MP4 xuất thành công, có hình và âm thanh khi phát độc lập.

## 8. Câu hỏi ôn tập

### Câu 1

Kết quả nào chứng minh bộ ảnh tĩnh đã được lưu, không chỉ tồn tại trong cửa sổ Render Result?

A. Có file PNG mở được từ ổ đĩa.  
B. Camera ở Pose Mode.  
C. Render Engine đang chọn Eevee.  
D. Có một Material trong scene.

**Đáp án:** A. **Giải thích:** Tệp PNG trên ổ đĩa là deliverable độc lập với trạng thái hiện tại của Blender.

### Câu 2

Vì sao dự án cần giữ `mech_walk.blend` và `videoedit.blend` riêng?

A. Vì Blender không cho lưu hai tệp cùng thư mục.  
B. Vì file video không được phép chứa âm thanh.  
C. Để tách công đoạn tạo animation khỏi công đoạn dựng và xuất video.  
D. Vì Eevee chỉ hỗ trợ một camera.

**Đáp án:** C. **Giải thích:** Phân chia file theo pipeline giúp dễ chỉnh lại từng công đoạn mà không ảnh hưởng vô ý tới phần khác.

### Câu 3

Trước khi hoàn thiện video, điểm kiểm tra kỹ thuật quan trọng nhất ở mối nối là gì?

A. Mọi ánh đèn đều biến mất.  
B. Pose cuối nối liên tục với pose đầu và không xuất hiện khoảng trống giữa strip.  
C. Tất cả xương đều bị xóa.  
D. Chất lượng JPEG luôn bằng 0.

**Đáp án:** B. **Giải thích:** Loop yêu cầu cả sự liên tục của animation và sự liên tục của timeline dựng video.

### Câu 4

Khi xuất video có âm thanh, bộ mã hóa nào phù hợp với thiết lập mẫu?

A. PNG + WAV trong container ảnh.  
B. JPEG + JPEG.  
C. Subdivision + Eevee.  
D. H.264 cho hình và AAC cho âm thanh trong MPEG-4.

**Đáp án:** D. **Giải thích:** Đây là cấu hình mã hóa video và âm thanh sử dụng trong dự án.

### Câu 5

Tại sao phải kiểm tra cả video bằng trình phát ngoài Blender?

A. Để xác nhận file cuối thực sự mở được, có hình và tiếng sau khi mã hóa.  
B. Để tự sinh thêm keyframe.  
C. Để đổi chiều camera.  
D. Để thực hiện Loop Cut.

**Đáp án:** A. **Giải thích:** Kiểm tra ngoài ứng dụng xác nhận tệp giao nộp hoạt động độc lập.

## 9. Tổng kết

Dự án cuối khóa hoàn chỉnh khi cả **hình ảnh tĩnh**, **walk cycle lặp**, **âm thanh**, **video xuất** và **các file làm việc** đều đạt yêu cầu. Chất lượng không nằm ở số lượng hiệu ứng, mà ở tính liền mạch và khả năng kiểm soát mọi bước trong pipeline.
