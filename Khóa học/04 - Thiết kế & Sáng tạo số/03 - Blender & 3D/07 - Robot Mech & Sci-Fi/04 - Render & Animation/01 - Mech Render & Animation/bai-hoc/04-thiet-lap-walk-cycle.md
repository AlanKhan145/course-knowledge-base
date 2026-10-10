# Bài 04 — Thiết lập Walk Cycle: FPS, keyframe và tư thế tiếp đất

## 1. Tóm tắt

`Walk Cycle` là chuyển động bước đi có thể phát lại liên tục. Trong bài này, robot được đặt vào một chu kỳ có **hai mốc giống nhau ở frame 1 và frame 60**, nhưng chỉ **render từ frame 1 đến frame 59** để tránh lặp lại hai lần cùng một tư thế tại điểm nối. Tư thế chân đối nhau được đặt tại frame 30.

## 2. Mục tiêu học tập

- Giải thích vai trò của `Timeline`, `FPS`, `Keyframe` và `Auto Keying`.
- Thiết lập animation 24 FPS, frame đầu 1 và frame cuối 59.
- Tạo tư thế hai chân ở frame 1, nhân bản sang frame 60.
- Tạo tư thế chân đối diện ở frame 30 và kiểm tra sự đảo chiều.

## 3. Logic của một vòng đi bộ

Robot phải chuyển từ tư thế chân A sang tư thế chân B, sau đó trở lại tư thế A. Có thể hình dung mạch chuyển động:

```text
Frame 1                 Frame 30                 Frame 60
Chân phải trước         Chân trái trước         Giống Frame 1
Chân trái sau           Chân phải sau           (mốc đóng vòng)
     A  ─────────────────── B ─────────────────── A

Các khung được render: 1 ... 59
```

Frame 60 được dùng để **xác lập điểm kết thúc nội suy**, nhưng frame 60 không có trong dải render. Nếu xuất cả frame 60 rồi nối lại frame 1, hai ảnh giống nhau xuất hiện liền nhau, dễ tạo cảm giác chững lại ở mối nối.

Thiết lập `24 FPS` nghĩa là mỗi giây phát lại 24 khung hình. Lộ trình dùng chu kỳ 59 khung và giữ nguyên con số này khi đưa qua Video Sequencer.

## 4. Chuẩn bị rig và timeline

1. Chọn `Armature`, vào `Pose Mode` bằng `Ctrl + Tab` trong ngữ cảnh cho phép.
2. Nếu robot đang ở hero pose, dùng thao tác reset phù hợp rig; với các rig dùng transform chuẩn có thể chọn xương rồi dùng `Alt + R`, `Alt + G`, `Alt + S`.
3. Để dễ thao tác, chuyển viewport sang `Solid View`, ẩn hiển thị đèn hoặc các đối tượng phụ qua `Overlays` nếu chúng che xương điều khiển.
4. Trong `Output Properties`, đặt `Frame Rate = 24 FPS`.
5. Trong `Timeline`, đặt `Start = 1`, `End = 59`.
6. Dùng `Numpad 3` để quan sát robot ở góc nhìn bên, nơi hướng trước/sau của chân dễ nhận biết.
7. Bật `Auto Keying` nếu muốn Blender tự ghi keyframe khi thay đổi controller, nhưng vẫn cần kiểm tra các xương nào đã có key.

**Phân biệt:** `Auto Keying` giúp ghi thay đổi khi thao tác; `I` dùng để chèn keyframe thủ công. Tùy phiên bản Blender, hộp chọn keying set và menu của phím `I` có thể khác nhau. Điều quan trọng là lưu **Location, Rotation và Scale** cho các controller cần thiết.

## 5. Tạo contact pose tại frame 1

Tại frame 1, định hình bước đi đầu tiên:

1. Chọn controller chân phải, dùng `G` đặt một chân về phía trước.
2. Đặt controller chân trái về phía sau, duy trì trục di chuyển đúng hướng bước đi.
3. Chỉnh độ cao từng bàn chân sao cho điểm tiếp xúc với sàn rõ ràng.
4. Chọn controller toàn thân/root và dùng `G`, `Z` điều chỉnh trọng tâm cho có sức nặng; đừng để cả robot treo trên không.
5. Chọn xương thân, dùng `R` nghiêng nhẹ theo chiều bước đi.
6. Chọn đầu, dùng `R` để robot nhìn về phía trước, tránh cúi/gật quá mạnh ở tư thế contact.
7. Chọn các controller cần animate, dùng `I` để lưu `Location/Rotation/Scale` tại frame 1.

**Checkpoint:** Khung 1 phải có tư thế rõ ràng, có điểm tựa; tất cả controller đang tham gia chuyển động cần có keyframe tại khung này. Nếu chỉ một số controller được key, chuyển động cuối vòng có thể bị lệch.

## 6. Đóng vòng ở frame 60

Trong `Timeline` hoặc `Dope Sheet`, chọn các keyframe của frame 1 trên những controller liên quan. Nhấn `Shift + D` để nhân bản keyframe và đặt bản sao tại **frame 60**. Cần nhân bản cho **toàn bộ controller có chuyển động** thay vì chỉ một chân.

Kiểm tra nhanh: frame 1 và 60 phải cho ra cùng tư thế. Nếu không giống, kiểm tra xem có xương nào chưa được key hoặc có constraint tác động khác nhau hay không.

## 7. Tạo contact pose ngược tại frame 30

Đưa playhead tới frame 30. Chân ở phía trước trong frame 1 nay cần được đưa ra sau; chân còn lại chuyển lên trước. Có hai cách:

- **Thủ công:** Chọn từng controller chân và bàn chân, dùng `G`/`R` để đổi vai trò hai chân rồi keyframe.
- **Tận dụng keyframe có sẵn:** Dùng `Ctrl + C` / `Ctrl + V` trong `Dope Sheet` để sao chép đoạn dữ liệu phù hợp, sau đó kiểm tra đúng kênh/đúng xương. Nếu tên xương đối xứng chuẩn và rig hỗ trợ, công cụ mirror pose có thể giúp đảo bên; không mặc định mọi rig hỗ trợ cách này.

Không dán keyframe một cách mù quáng vào xương đối diện: mỗi controller có hệ tọa độ, constraint và quy tắc điều khiển riêng. Hãy ưu tiên **kết quả pose đúng** sau khi sao chép, không chỉ số liệu trên timeline.

Ở frame 30, để trọng tâm ở vị trí thấp hơn so với giữa pha nhấc chân (sẽ tạo tại frame 15/45); có thể sao chép giá trị của root frame 1 sang frame 30 làm điểm xuất phát.

## 8. Kiểm tra và sửa lỗi ban đầu

Nhấn `Space` để phát thử; scrub dọc timeline để kiểm tra từng frame. Lúc này chuyển động có thể còn cứng vì mới có 3 tư thế chính, nhưng hai chân phải **luân phiên** tiến ra trước và ra sau. Chưa cần xử lý toàn bộ độ nâng của bàn chân.

| Lỗi | Cách kiểm tra |
| --- | --- |
| Chân không đổi vị trí ở frame 30 | Controller chưa có key hoặc key gắn sai xương |
| Tư thế frame 60 không giống frame 1 | Thiếu key cuối trên một số controller |
| Root bị trôi | Kiểm tra location của controller chính |
| Keyframe tự sinh ngoài ý muốn | Kiểm tra trạng thái Auto Keying |

## 9. Thực hành ngắn

Dựng ba tư thế ở frame **1, 30 và 60**, trong đó frame 60 giống frame 1. Lưu project thành `mech_walk.blend`. Chưa cần render video.

**Tiêu chí hoàn thành:** Khi scrub, hai chân đổi vai trò qua frame 30; frame 1 và 60 trùng tư thế; dải đầu ra vẫn là 1–59.

## 10. Câu hỏi ôn tập

### Câu 1

Tại sao render kết thúc ở frame 59 trong khi vẫn đặt keyframe ở frame 60?

A. Vì frame 60 không có dữ liệu.  
B. Vì Blender không thể render frame chẵn.  
C. Vì keyframe 60 dùng khép kín nội suy và không cần xuất lặp lại tư thế frame 1.  
D. Vì render chỉ hỗ trợ tối đa 59 khung.

**Đáp án:** C. **Giải thích:** Xuất 1–59 tránh nhân đôi tư thế ở mối nối hai chu kỳ liên tiếp.

### Câu 2

Frame nào chứa tư thế đối chân với frame 1 trong ví dụ?

A. 30.  
B. 2.  
C. 59.  
D. 100.

**Đáp án:** A. **Giải thích:** Frame 30 là mốc chuyển đổi vai trò hai chân trong chu kỳ.

### Câu 3

Để thêm dữ liệu `Location/Rotation/Scale` cho các controller cần thiết, cần làm gì?

A. Chỉ ẩn overlays.  
B. Chỉ đổi lens.  
C. Chuyển sang Shading.  
D. Chèn keyframe bằng chế độ/keying set tương ứng và kiểm tra kênh được ghi.

**Đáp án:** D. **Giải thích:** Pose có thay đổi nhưng không được key thì không được lưu đúng trong animation.

### Câu 4

`Auto Keying` hữu ích ở điểm nào?

A. Tự dựng toàn bộ rig mới.  
B. Tự tạo key khi thay đổi thuộc tính/pose trong ngữ cảnh phù hợp.  
C. Tự xuất file MP4.  
D. Tự phát hiệu ứng âm thanh.

**Đáp án:** B. **Giải thích:** Đây là chế độ tự ghi keyframe cho những thao tác đáp ứng điều kiện của Blender.

### Câu 5

Sau khi dán keyframe từ chân này sang chân kia, vì sao phải kiểm tra trực quan pose?

A. Vì hai controller có thể khác hệ tọa độ và constraint.  
B. Vì JPEG làm mất màu.  
C. Vì nhạc nền có thể bị trễ.  
D. Vì camera luôn tự xoay.

**Đáp án:** A. **Giải thích:** Dữ liệu biến đổi không tự động có nghĩa giống nhau trên các controller khác nhau.

## 11. Tổng kết

Bài học đã tạo bộ khung cho vòng đi bộ: 24 FPS, output 1–59, điểm đóng vòng ở 60 và tư thế đối diện tại 30. Các mốc trung gian sẽ bổ sung chuyển động nhấc chân và nâng hạ toàn thân.
