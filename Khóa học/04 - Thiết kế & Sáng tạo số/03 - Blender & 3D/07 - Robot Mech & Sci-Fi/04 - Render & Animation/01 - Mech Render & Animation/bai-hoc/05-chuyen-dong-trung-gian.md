# Bài 05 — Tạo pha nhấc chân và dao động cơ thể tại frame 15 và 45

## 1. Tóm tắt

Chỉ với hai tư thế tiếp đất, robot có xu hướng **trượt chân** và chuyển trọng lượng thiếu thuyết phục. Hai mốc trung gian **frame 15 và frame 45** được thêm vào để tạo pha nâng chân, xoay bàn chân, nâng hạ toàn thân và chuyển động ngược của đầu/thân.

## 2. Mục tiêu học tập

- Xây dựng pha chuyển chân giữa hai contact pose.
- Điều chỉnh controller root để toàn thân nhún lên và hạ xuống theo chu kỳ.
- Hoàn thiện chuyển động đối xứng nhưng trái vai trò tại frame 15 và 45.
- Phát hiện dáng đi kiểu kéo lê chân hoặc robot bị nổi khỏi mặt đất.

## 3. Năm mốc quan trọng

| Frame | Trạng thái hướng dẫn | Trọng tâm |
| --- | --- | --- |
| 1 | Contact pose A: một chân trước, một chân sau | Tương đối thấp |
| 15 | Chuyển động qua nửa pha A → B, một chân nhấc đi | Nâng lên nhẹ |
| 30 | Contact pose B: đảo vai trò hai chân | Hạ xuống |
| 45 | Chuyển động qua nửa pha B → A, chân kia nhấc đi | Nâng lên nhẹ |
| 60 | Trở về contact pose A | Giống frame 1 |

Đây là **bố cục keyframe minh họa** cho rig trong bài thực hành. Nếu robot chân dài, nặng hoặc có cấu tạo đặc biệt, chiều cao nhấc chân và độ nghiêng thân cần điều chỉnh cho phù hợp.

## 4. Thực hiện pha chuyển ở frame 15

Chuyển sang `Pose Mode` và đặt playhead tại **frame 15**. Bật Auto Keying nếu có kiểm soát và kiểm tra sau mỗi thay đổi:

1. Chọn **root/main controller**, dùng `G`, `Z` nâng toàn bộ robot lên một khoảng nhỏ. Chỉ nâng đủ để cơ thể bớt thấp so với contact pose.
2. Chọn chân **đang làm chân trụ**; dịch chuyển bàn chân để nó giữ tiếp xúc với mặt sàn. Không nâng chân trụ lên theo root nếu hệ IK không tự bù.
3. Chọn chân **đang vung về phía trước**; dùng `G` đưa bàn chân lên khỏi sàn và về phía trước.
4. Chọn controller bàn chân, dùng `R` xoay nhẹ mũi hoặc gót trong lúc chân nhấc, sao cho quỹ đạo không giống đang kéo một tấm ván qua sàn.
5. Chọn xương thân, xoay nhẹ để phản ánh sự chuyển trọng lượng; chọn đầu và chỉnh hướng nhìn để không gật theo thân một cách cứng nhắc.
6. Kiểm tra keyframe có xuất hiện cho root, hai chân/bàn chân, thân và đầu.

Điều cần ưu tiên là **hình ảnh chuyển động**: chân trụ ổn định, chân vung có khoảng hở, thân dao động nhẹ và đầu hướng về phía bước.

## 5. Tạo pha đối xứng tại frame 45

Frame 45 là pha tương ứng của nửa vòng còn lại, nhưng hai chân **đổi vai trò**. Có thể tiết kiệm thời gian bằng cách sao chép keyframe giữa các controller thích hợp trong `Dope Sheet`:

- Lấy vị trí/rotation hợp lý của chân đang vung ở frame 15 làm tham khảo cho chân đối diện ở frame 45.
- Làm tương tự với controller bàn chân (`foot.R` / `foot.L` nếu rig dùng quy ước đó).
- Sao chép keyframe nâng root từ 15 sang 45 nếu muốn biên độ nhún giống nhau.
- Sao chép hoặc điều chỉnh các keyframe thân/đầu theo hướng đối xứng cần thiết.

Khi sử dụng `Ctrl + C` và `Ctrl + V`, hãy đảm bảo thao tác đúng vùng editor, đúng bone channel và đúng frame đích. `B` cho phép box-select các key mong muốn. Với bản sao cùng controller nhưng khác thời điểm, dùng `Shift + D` thường trực quan hơn.

**Không sao chép nguyên xi vị trí của cả hai bàn chân mà không xét bên nào đang chịu lực.** Kết quả cần là một chân bám sàn và chân kia đưa về trước.

## 6. Thiết lập nhịp nhún của root

Có thể tổ chức độ cao body/root theo nguyên tắc:

```text
Frame:       1       15       30       45       60
Root Z:    thấp     cao      thấp      cao      thấp
```

Đặt keyframe root tại frame 30 theo độ cao của frame 1 (sao chép và điều chỉnh nếu cần). Frame 45 dùng độ cao như frame 15. Cuối cùng frame 60 kế thừa frame 1.

Tạo được nhịp lên–xuống đều không có nghĩa là animation đã hoàn thiện. Cần xem root có bị trôi ngang không, chân trụ có trượt không, thân có bị xoay quá mức không.

## 7. Kiểm tra chuyển động

Nhấn `Space` phát trong viewport hoặc kéo playhead qua lại. Đánh giá từ góc nhìn bên (`Numpad 3`) và từ góc camera (`Numpad 0`):

| Hiện tượng | Diễn giải và hướng sửa |
| --- | --- |
| Chân vung quệt mặt sàn | Nâng vị trí chân ở 15 hoặc 45; chỉnh xoay bàn chân |
| Cả hai chân cùng nổi | Căn lại chân trụ/root, kiểm tra cơ chế IK |
| Root quá nhún | Giảm biên độ dịch chuyển Z |
| Đầu giật theo thân | Chỉnh keyframe đầu để giữ hướng nhìn ổn định |
| Hai nửa bước không cân | So sánh frame 15 với 45 và quỹ đạo hai bên |

## 8. Bài thực hành

Từ project đã có key tại 1, 30 và 60, thêm hai mốc 15 và 45. Lưu file, phát thử và viết một checklist ngắn: chân trụ có bám đất không, chân vung có đủ độ cao không, đầu có hướng về trước không.

**Tiêu chí hoàn thành:** Robot bước chân luân phiên qua cả hai nửa chu kỳ; toàn thân có nhún nhẹ ở mốc 15 và 45; không có lỗi rõ ràng ở hình silhouette.

## 9. Câu hỏi ôn tập

### Câu 1

Vì sao cần thêm keyframe giữa hai tư thế tiếp đất?

A. Để đổi định dạng PNG.  
B. Để tạo quỹ đạo bước chân và dao động trọng lượng thay vì nội suy cứng.  
C. Để xóa hết light.  
D. Để tăng focal length.

**Đáp án:** B. **Giải thích:** Các key trung gian mô tả cách robot chuyển từ một điểm tiếp đất tới điểm tiếp đất kế tiếp.

### Câu 2

Trong ví dụ, frame nào dùng cho pha trung gian thứ hai?

A. 45.  
B. 60.  
C. 1.  
D. 5.

**Đáp án:** A. **Giải thích:** Frame 45 là pha vung chân đối diện với frame 15.

### Câu 3

Cách thiết lập dao động root hợp lý trong chu kỳ này là gì?

A. Frame 1 luôn cao nhất.  
B. Mọi frame đều đặt root cùng cao độ.  
C. Tăng Z không ngừng tới frame 60.  
D. Root cao hơn tại 15 và 45 so với các contact pose 1 và 30.

**Đáp án:** D. **Giải thích:** Mô hình nhịp nhún này tạo hai pha nâng cơ thể trong một vòng đi bộ.

### Câu 4

Nếu chân trụ nhấc khỏi mặt sàn khi nâng root, nên ưu tiên điều chỉnh gì?

A. Codec AAC.  
B. Ánh sáng nền.  
C. Controller chân trụ hoặc hệ IK để duy trì tiếp xúc sàn.  
D. Tên vật liệu.

**Đáp án:** C. **Giải thích:** Điểm tựa phải được giữ tương đối cố định khi trọng tâm di chuyển lên.

### Câu 5

Lựa chọn nào giúp giảm hiện tượng bước chân giống đang kéo lê một tấm ván?

A. Chỉ đổi màu robot.  
B. Bổ sung độ nhấc và xoay bàn chân ở pha chuyển động.  
C. Chỉ đổi khung hình cuối sang 120.  
D. Chỉ ẩn tất cả xương.

**Đáp án:** B. **Giải thích:** Chân cần có quỹ đạo rời mặt sàn và hướng bàn chân tự nhiên khi vung.

## 10. Tổng kết

Năm mốc keyframe xây dựng cấu trúc thời gian cơ bản của dáng đi. Frame 15 và 45 có nhiệm vụ tạo bước chân có quỹ đạo, còn root/thân/đầu giúp robot chuyển trọng lượng có sức sống hơn.
