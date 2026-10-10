# Bài 06 — Polish Walk Cycle: sửa xuyên sàn, chuyển động cổ và mối nối vòng lặp

## 1. Tóm tắt

Một vòng đi bộ có đủ keyframe chưa chắc đã đạt chất lượng để render. Bài này sửa ba lỗi thường gặp: **bàn chân xuyên qua mặt sàn**, **đầu/cổ cử động cứng** và **giật ở điểm lặp**. Quy trình kết thúc bằng việc khóa lại camera và tắt `Auto Keying` trước khi xuất ảnh.

## 2. Mục tiêu học tập

- Phát hiện khung gây xuyên sàn bằng cách scrub animation.
- Chỉnh bàn chân tại các mốc 25 và 35 và cân lại góc xoay chân.
- Dựng dao động đầu, thân và cổ có chủ đích.
- Kiểm tra frame 1 và 60 trùng nhau trên mọi controller quan trọng.
- Tránh ghi nhầm keyframe khi điều chỉnh camera.

## 3. Sửa chuyển động bàn chân

Khi phát hoạt ảnh từ bên cạnh, quan sát **đế chân so với sàn** ở từng khung. Có thể thấy một chân gần frame 25 hoặc chân còn lại gần frame 35 lún xuyên xuống đất. Đây là vấn đề dễ bị bỏ qua nếu chỉ nhìn năm keyframe lớn.

### 3.1. Chỉnh gần frame 25

1. Đặt playhead tại **frame 25**.
2. Chọn controller của chân đang xuyên sàn.
3. Nhấn `G`, `Z` để nâng vị trí controller/đế chân vừa đủ khỏi mặt sàn.
4. Nếu đế chân bị nghiêng khiến mũi/gót xuyên sàn, chọn controller xoay bàn chân và dùng `R` tinh chỉnh.
5. Bảo đảm có keyframe ghi nhận chỉnh sửa, sau đó scrub qua vùng frame 20–30.

### 3.2. Chỉnh gần frame 35

Lặp lại với **frame 35** cho chân đối diện. Cần bảo đảm chuyển động đi vào và đi ra từ các frame này không tạo cú giật mới.

**Nguyên tắc:** Không chỉ nhìn đúng frame 25/35; luôn kiểm tra các khung trước và sau, vì nội suy giữa các key cũng có thể làm xuyên sàn.

## 4. Đồng bộ chuyển động thân và đầu

Khi root nhún lên ở frame 15 và 45, thân có thể nghiêng nhẹ còn đầu giữ phương nhìn hướng về phía trước. Để tạo nhịp lặp có tổ chức:

- Với controller **đầu**, cân chỉnh tư thế ở frame 1, nhân bản tư thế về frame 30; đặt phiên bản tương ứng của frame 15 tại frame 45 nếu hai pha cần độ nhún tương tự.
- Với controller **thân**, đặt keyframe ở frame 1 và frame 30 tương thích nhau; frame 15 và 45 có thể dùng cùng mức nghiêng hoặc biến thể trái–phải tùy rig.
- Nếu chỉ cần nhân bản key trên **chính controller đó**, chọn keyframe trong `Dope Sheet` và dùng `Shift + D` kéo tới frame đích.

Không bắt buộc đầu phải di chuyển cùng một góc với thân. Một độ trễ hoặc độ bù nhỏ giúp robot trông có trọng lượng hơn, nhưng không được làm sai hướng nhìn mong muốn.

## 5. Chuyển động cổ có biên độ đối chiều

Chọn controller **cổ**. Đặt một keyframe cơ sở tại frame 30 nếu cổ cần về trung tâm ở giữa chu kỳ; kiểm tra cả frame 1/60 để bảo đảm giá trị ban đầu được lưu.

Thiết lập minh họa:

| Frame | Chuyển động cổ |
| --- | --- |
| 1 | Trung tâm |
| 15 | Xoay khoảng `-17°` quanh trục phù hợp |
| 30 | Trở về trung tâm |
| 45 | Xoay khoảng `+17°` theo chiều đối diện |
| 60 | Trung tâm, giống frame 1 |

Để xoay có giá trị chính xác, chọn đúng trục/không gian xoay cho rig, nhấn `R` rồi nhập số góc tương ứng nếu thao tác đó có tác dụng như mong muốn. **±17° là giá trị ví dụ**, không phải quy chuẩn giải phẫu hay bắt buộc cho mọi robot. Nếu cổ cử động quá mạnh, giảm độ lớn góc.

## 6. Làm kín vòng lặp

Thấy đầu giật nhẹ ở cuối vòng thường có nghĩa **frame 60 chưa thực sự giống frame 1**, có thể do đã sửa một số xương ở giữa nhưng chưa cập nhật lại frame kết thúc.

Các bước:

1. Chọn armature vào `Pose Mode`, chọn **toàn bộ controller có liên quan**.
2. Trong `Dope Sheet` hoặc `Timeline`, chọn đúng các keyframe ở frame 1.
3. Dùng `Shift + D` nhân bản toàn bộ tập key cần thiết sang frame 60, ghi đè giá trị khác nếu đây là chủ ý đóng vòng.
4. Kiểm tra trực quan hai mốc frame 1/60; sau đó phát dải 1–59 liên tục.
5. Nếu còn giật, kiểm tra cả **vận tốc** ở mối nối. Dù vị trí đầu/cuối trùng, kiểu nội suy (`Interpolation`) và tay nắm đường cong (`F-Curve Handles`) không tương thích vẫn có thể tạo khác biệt về nhịp chuyển động.

Đánh giá vòng lặp bằng việc phát nhiều lần, chú ý tại điểm chuyển từ frame 59 về frame 1: robot không được đứng khựng hoặc nhảy tư thế bất ngờ.

## 7. Cố định camera và tránh Auto Key ngoài ý muốn

Sau khi xong pose:

1. Tắt `Auto Keying` trước khi thao tác camera nếu không định animate camera.
2. Chuyển sang `Object Mode`, chọn camera.
3. Đặt khung nhìn mong muốn, dùng `Ctrl + Alt + Numpad 0` nếu cần căn theo viewport, rồi dịch camera bằng `G` cho đủ toàn thân robot trong khung.
4. Nếu đã vô tình tạo keyframe camera, kiểm tra dữ liệu animation của **camera** trong `Dope Sheet` và xóa chỉ những keyframe không mong muốn.
5. Kiểm tra ở frame 1, 15, 30, 45 và 59 để chắc chắn robot không ra ngoài khung trong suốt chuyển động.
6. Lưu `Ctrl + S`.

**Không xóa toàn bộ keyframe trong timeline một cách đại trà**, vì có thể xóa luôn animation của rig.

## 8. Checklist nghiệm thu kỹ thuật

- [ ] Không còn xuyên sàn rõ ở hai chân khi scrub toàn bộ chu kỳ.
- [ ] Chân trụ tương đối ổn định, chân vung có khoảng hở khỏi sàn.
- [ ] Root không giật ngang, không nhún quá mức.
- [ ] Đầu/cổ chuyển động nhẹ, có hướng và không lệch tâm sau mỗi chu kỳ.
- [ ] Frame 1 giống frame 60 ở tất cả controller cần thiết.
- [ ] Dải render vẫn là frame 1–59 ở 24 FPS.
- [ ] Camera không chứa keyframe chuyển động ngoài ý muốn.

## 9. Câu hỏi ôn tập

### Câu 1

Phát hiện một chân xuyên sàn quanh frame 25. Bước đầu hợp lý nhất là gì?

A. Đổi tất cả vật liệu sang màu trắng.  
B. Tăng số FPS.  
C. Xóa cả chu kỳ animation.  
D. Chọn controller chân liên quan ở mốc lỗi và chỉnh vị trí/rotation, sau đó kiểm tra các frame lân cận.

**Đáp án:** D. **Giải thích:** Sửa theo controller, vị trí và thời điểm lỗi tránh làm hỏng phần chuyển động còn lại.

### Câu 2

Tại sao frame 1 và 60 phải trùng nhau?

A. Để vị trí cuối chu kỳ nối liên tục với đầu chu kỳ.  
B. Để giảm lượng polygon.  
C. Để camera có góc rộng hơn.  
D. Để xuất được ảnh PNG.

**Đáp án:** A. **Giải thích:** Hai tư thế trùng tạo điều kiện cho pose lặp liền mạch.

### Câu 3

Trong cấu hình cổ minh họa, điều gì xảy ra ở frame 15 và 45?

A. Cả hai luôn xoay cùng chiều 90°.  
B. Cổ bị ẩn đi.  
C. Cổ xoay khoảng -17° và +17° theo hai chiều đối nhau.  
D. Không có bất kỳ keyframe nào.

**Đáp án:** C. **Giải thích:** Hai pha đối chiều tạo chuyển động cân bằng trong chu kỳ.

### Câu 4

Nếu vô tình làm camera bị animate khi căn góc nhìn, nguyên nhân có thể là gì?

A. `Roughness = 1`.  
B. `Auto Keying` còn bật khi di chuyển camera.  
C. Định dạng MP4 đang dùng.  
D. Ảnh render là PNG.

**Đáp án:** B. **Giải thích:** Auto Keying có thể ghi lại thay đổi transform của camera tại frame đang chọn.

### Câu 5

Nếu frame 1 và 60 giống tư thế nhưng mối nối vẫn giật về tốc độ, nên kiểm tra gì?

A. Tên file ảnh.  
B. Màu collection.  
C. Âm lượng hệ điều hành.  
D. Nội suy và F-Curve Handles của các kênh chuyển động.

**Đáp án:** D. **Giải thích:** Liên tục vị trí không đảm bảo đạo hàm/nhịp chuyển động trơn ở điểm nối.

## 10. Tổng kết

Một walk cycle đáng render cần đúng cả **vị trí chân**, **nhịp chuyển trọng lượng** và **mối nối vòng**. Kỹ thuật sửa ở frame 25/35, dao động cổ đối chiều và tái sao chép key 1 → 60 giúp đạt ba yêu cầu đó.
