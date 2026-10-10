# Bài 06 — Tạo ốp Sci-Fi, đối xứng chi tiết và hoàn thiện hình học cổ robot

## 1. Tóm tắt

Sau khi dựng trục và bu-lông, phần cổ cần có các tấm ốp liên kết thị giác với đầu robot. Ta sẽ nhân bản mặt từ mesh có sẵn, kéo dày thành ốp, tạo vùng lõm bằng `Inset`, lật chi tiết qua góc `180°`, và kiểm tra tổng thể bằng nhiều góc nhìn.

## 2. Mục tiêu học tập

- Chuyển một mặt mesh thành chi tiết ốp có chiều sâu.
- Dùng `G`, `S`, `E`, `I` để kiểm soát hình dáng và hướng đặt ốp.
- Dùng `Shift + D` và `R Z 180` để tạo chi tiết đối xứng theo bố cục.
- Thêm các gờ nối phía trước cổ và trên vỏ đầu.
- Kiểm tra `Normals`, phần chồng mặt, đường viền và tệp cuối.

## 3. Dựng ốp từ một mặt có sẵn

Một tấm ốp đơn giản có thể bắt đầu từ mặt phẳng bất kỳ trên phần thân/cổ robot, không cần thêm `Cube` mới.

1. Chọn phần object liên quan, `Tab` vào `Edit Mode` và chuyển `Face Select` (phím `3` ở hàng số).
2. Chọn một mặt có tỷ lệ gần với ốp muốn dựng.
3. Nhấn `Shift + D` để nhân bản mặt, dùng `G` để đưa nó ra khỏi bề mặt ban đầu.
4. Dùng `S` hoặc `S X` để thay đổi chiều ngang; `G Y` và `G Z` để đặt vào vùng cổ.
5. Mở `Front View` và `Side View` để kiểm tra hình chiếu của miếng ốp.
6. Nhấn `E` để extrude tạo độ dày và đặt mặt sau vào vùng tiếp xúc với vỏ.

Tạo ốp có độ dày giúp hình khối phản ứng với ánh sáng tốt hơn một mặt phẳng nổi đơn độc. Không để mặt sao trùng đúng vị trí với mặt gốc vì dễ phát sinh nhấp nháy shading (`z-fighting`).

## 4. Tạo đường viền và vùng lõm

Chọn mặt ngoài của tấm ốp vừa dựng:

1. `I` (`Inset`) tạo một viền nhỏ bên trong mặt.
2. `G Y` (hoặc hướng phù hợp) dịch mặt trong xuống một chút, tạo hõm; hoặc `E` để đùn phần mặt trong rồi giảm tỷ lệ `S X` khi muốn có một thanh nổi mảnh.
3. Kiểm tra mép ốp có bị cắt vào phần cổ phía sau hay không.
4. Nhấn `L` nếu cần chọn lại toàn bộ ốp thành một phần liên thông; `Shift + N` để tính lại normals của phần đang chọn.

Đối với các chi tiết máy, các lớp **viền ngoài → khoảng inset → gờ/ô lõm bên trong** thường tạo cảm giác có bộ phận vỏ riêng biệt rõ hơn là chỉ đổi màu vật liệu.

## 5. Tạo chi tiết đối xứng

Nếu một tấm ốp ở phía bên trái đã đạt hình mong muốn, có thể tái sử dụng:

1. `L` chọn toàn bộ phần ốp liên thông (hoặc chọn vùng mặt đủ để tái tạo).
2. `Shift + D` nhân bản.
3. `R Z 180` xoay bản sao đúng `180°` quanh trục Z theo bố cục đang dựng.
4. `G Y` hoặc `G X` chuyển sang vị trí đối diện.
5. Kiểm tra từ cả `Front View`, `Side View` và góc nhìn phối cảnh để chắc chắn mặt ngoài hướng ra đúng phía.

**Quan trọng:** `R Z 180` là bước lật dùng cho cấu trúc chi tiết đang thực hành; không phải mọi cặp ốp đối xứng đều cần xoay theo Z. Nếu robot có mặt phẳng đối xứng ở trục khác, phải chọn trục phản chiếu/quay phù hợp.

## 6. Bổ sung chi tiết trên đầu và phần trước cổ

Để liên kết ngôn ngữ thiết kế giữa đầu và khớp cổ:

- Chọn một mặt thích hợp trên vỏ đầu; dùng `Shift + D` nhân bản và đặt xuống vùng phía trước cổ.
- Dùng `S`, `G` và `E` biến mặt thành một gờ/ốp nhỏ có chiều dày.
- Từ một bu-lông đã có, `L` chọn bu-lông rồi `Shift + D` nhân một chiếc gắn lên mặt trước. Dùng Face Snapping khi mặt đích nghiêng.
- Ở mép bên đầu, chọn mặt phù hợp, nhân bản và `E` đùn thành một chi tiết hẹp có tác dụng liên kết thị giác.

Thực hiện trên mặt hoặc đảo mesh được chọn, không nhân bản toàn bộ đầu robot. Các gờ phụ cần có tỷ lệ vừa phải để không che các khớp quay chính.

## 7. Kiểm tra cuối cùng

Sau khi thêm ốp:

1. `A` chọn toàn bộ phần mesh đang chỉnh sửa, `Shift + N` để tính lại normals nếu cần.
2. `Tab` về `Object Mode` và kiểm tra `Shade Smooth` trên các mặt cong.
3. Kiểm tra `Mirror Modifier` ở mỗi object: vỏ nửa bên có thể cần Mirror, nhưng trục tròn toàn phần thường không.
4. Quay các góc nhìn quanh cổ, tập trung vùng giáp mặt với đầu, khe xoay, mặt bên trụ và các ốc vít.
5. Kiểm tra có mặt gấp đôi, mặt hở không chủ ý, vùng ốp cắm xuyên hoặc gờ bị lệch.
6. Dọn Outliner bằng cách đặt tên các nhóm object; lưu file bằng `Ctrl + S`.

## 8. Checklist hoàn thành

- [ ] Đầu robot có giá đỡ phía sau hợp lý.
- [ ] Hai phần vỏ của khớp cổ có tâm tương ứng.
- [ ] Chốt trụ và lõi trục được đặt đúng vị trí.
- [ ] Các bu-lông nằm trên bề mặt chứ không trôi trong không gian.
- [ ] Các tấm ốp có chiều sâu, có inset hoặc gờ, không chỉ là mặt mỏng.
- [ ] Không có `Mirror` thừa tạo mặt chồng trên một trục tròn hoàn chỉnh.
- [ ] Normals được kiểm tra và không còn vùng shading bất thường dễ thấy.
- [ ] Đã lưu phiên bản `.blend`.

## 9. Lỗi thường gặp

| Lỗi | Cách xử lý |
| --- | --- |
| Tấm ốp mới nhấp nháy với vỏ | Dời ốp ra hoặc tạo độ dày để loại bề mặt trùng |
| Tấm ốp bị ngược mặt khi lật | Kiểm tra hướng xoay và normals, dùng `Shift + N` nếu phù hợp |
| Inset quá nhỏ khó nhìn | Điều chỉnh độ sâu/chiều rộng theo tỷ lệ chung của khớp |
| Quá nhiều chi tiết làm cổ rối | Giữ các thành phần cơ khí lớn dễ đọc, giản lược gờ/ốc thứ yếu |
| Thay đổi một phía làm phá bố cục hai bên | Kiểm tra Mirror và căn lại góc nhìn đối xứng |

## 10. Thực hành ngắn

Tạo một cặp ốp nhỏ hai bên cổ. Mỗi ốp phải có viền inset và ít nhất một mặt extrude tạo độ dày. So sánh chất lượng nhìn trước/bên; sửa những phần bị giao nhau không hợp lý.

## 11. Câu hỏi ôn tập

**Câu 1.** Vì sao sau `Shift + D` một mặt, không nên để nó trùng hoàn toàn với mặt gốc?

A. Blender sẽ tự tạo animation.  
B. Có thể gây `z-fighting` do hai bề mặt cùng vị trí.  
C. Không thể lưu `.blend`.  
D. Bắt buộc phải chuyển sang Texture Paint.

**Đáp án: B.** Hai mặt trùng nhau thường tạo hiện tượng hiển thị nhấp nháy hoặc shading không ổn định.

**Câu 2.** Quy trình phù hợp để tạo một tấm ốp có đường viền và lõm bên trong là gì?

A. Chỉ bấm `H`.  
B. Chỉ đổi tên object.  
C. Chỉ bật Grid.  
D. Nhân mặt, extrude độ dày, inset mặt ngoài và đẩy mặt trong.

**Đáp án: D.** Quy trình này tạo hình học có chiều sâu thay vì chỉ một mặt phẳng.

**Câu 3.** `R Z 180` có nghĩa là gì?

A. Xoay `180°` quanh trục Z.  
B. Di chuyển 180 đơn vị theo Z.  
C. Thu nhỏ còn 180%.  
D. Nhân thêm 180 mặt.

**Đáp án: A.** `R` gọi phép quay, `Z` giới hạn trục và `180` là số độ.

**Câu 4.** Vì sao các ốp Sci-Fi cần được kiểm tra ở nhiều góc nhìn?

A. Để tự thêm textures.  
B. Để thay đổi ngôn ngữ UI.  
C. Vì hình chiếu một góc có thể che lỗi xuyên mặt hoặc lệch vị trí 3D.  
D. Vì chỉ có Camera View mới hiển thị polygon.

**Đáp án: C.** Một chi tiết đúng ở hình trước vẫn có thể xuyên vào khớp khi nhìn bên.

**Câu 5.** Trường hợp nào nên loại bỏ Mirror trên một object?

A. Bất cứ khi nào muốn lưu file.  
B. Khi object đã là trục tròn đầy đủ và Mirror tạo các mặt trùng lặp.  
C. Khi muốn dùng Vertex Select.  
D. Khi ốp có chất liệu kim loại.

**Đáp án: B.** Mirror dư thừa có thể phá chất lượng hình học; nhu cầu đối xứng phụ thuộc cấu trúc object.

## 12. Tổng kết

Một cụm cổ mech thuyết phục cần tỷ lệ khối lớn rõ ràng trước, sau đó mới tới vỏ ốp, inset, gờ nhỏ và bu-lông. Quy trình kết thúc ở bước **kiểm tra hình học và tổ chức object**, không phải ở thời điểm thêm được nhiều chi tiết nhất.
