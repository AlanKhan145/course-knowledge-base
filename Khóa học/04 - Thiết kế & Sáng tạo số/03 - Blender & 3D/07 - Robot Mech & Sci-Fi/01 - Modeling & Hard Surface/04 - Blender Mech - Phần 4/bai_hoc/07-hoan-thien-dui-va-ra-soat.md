# Bài 07 — Hoàn thiện giáp đùi: khe thông gió, ốc vít nhỏ và rà soát model

**Loại:** Bài học thực hành tổng hợp.  
**Thành phẩm:** Cụm đùi trên có các dải chi tiết lặp, ốc vít nhỏ và bề mặt được rà soát trước khi chuyển sang các công đoạn modeling tiếp theo.

## 1. Mục tiêu học tập

Sau bài học, bạn có thể:

- Tạo dãy chi tiết sci-fi kiểu khe thông gió bằng cách nhân bản mặt và extrude.
- Tạo những mảng trang trí thứ hai từ mặt đã có, định hình và nhân nhiều lần.
- Tận dụng mẫu ốc vít từ bộ phận khác bằng `Separate` và `Join`, sau đó định vị với `Snapping`.
- Kiểm tra tính đối xứng, normals, mặt chồng, khe hở và silhouette toàn bộ cụm đùi.

## 2. Vì sao cần bước hoàn thiện?

Một mô hình mech thuyết phục được nhìn từ xa bằng khối lớn, nhưng khi quan sát gần cũng cần những chi tiết đủ sắc nét để gợi cảm giác ghép từ nhiều linh kiện. Cách an toàn là tạo các nhóm họa tiết có quy luật: dãy khe nhỏ ở một vùng, tấm kim loại ở vùng khác, và một số đầu vít cố định tại điểm lắp ghép. Các chi tiết nên làm rõ kết cấu, không lấn át hình dạng chính.

Chuẩn bị phần đùi trên, khớp hông và một chi tiết ốc vít ở thân/ba lô để dùng làm mẫu. Nếu không có ốc mẫu, dùng bu lông đã tự dựng từ vòng đỉnh.

## 3. Quy tắc thiết kế chi tiết lặp

### 3.1. Một mẫu trước, nhiều bản sao sau

Dùng một mặt hoặc đảo geometry làm nền cho chi tiết. Nhân bản, chỉnh hình một bản gốc trước rồi mới sao chép bằng `Shift + D` dọc phương cần thiết. Giữ khoảng cách tương đối đều và nhìn lại từ xa sau mỗi nhóm chi tiết.

### 3.2. Tách rồi gộp khi cần làm việc chung

`P` → `Selection` tạo một object độc lập từ geometry đã chọn. `Ctrl + J` kết hợp nhiều object được chọn thành một object để tiện thao tác; **Join không tự hàn các vertex trùng nhau**. Trong `Edit Mode`, lệnh `L` vẫn dùng được để chọn từng đảo mesh trong object đã gộp.

## 4. Quy trình thực hành

### 4.1. Dựng khe thông gió hoặc lá giáp nhỏ ở chân đùi

1. Chọn một mặt nhỏ ở phần dưới đùi trên, chuyển vào `Edit Mode` và `Face Select`.
2. Nhấn `Shift + D` để nhân bản mặt đó; dùng `G` dịch tới vùng cần thêm chi tiết.
3. Dùng `S` để thu tỷ lệ chung, tiếp tục scale theo trục Y để tạo mặt hẹp và tương đối dài.
4. Nhấn `E` để đùn một đoạn ngắn, tạo độ dày. Chọn mặt đầu rồi scale theo X nếu cần tạo đầu thuôn.
5. Di chuột lên phần mới tạo, nhấn `L` để chọn toàn bộ đảo mesh; chỉnh vị trí của chi tiết mẫu sao cho bám gần bề mặt đùi.
6. Nhấn `Shift + D` nhiều lần; giới hạn dịch theo trục Y để tạo một dãy lặp. Giữ nhịp lặp đủ đều, tránh để phần tử cuối chọc vào mặt giáp kế bên.
7. Quay về `Solid` để quan sát dãy chi tiết như các khe hoặc tấm lá thông gió.

**Checkpoint:** Dãy chi tiết có độ dày, chiều dài và khoảng cách có chủ đích, không chỉ là các nét vẽ phẳng trên bề mặt.

### 4.2. Tạo nhóm trang trí bổ sung ở vị trí khác

1. Chọn một mặt ở vùng trên của đùi, `Shift + D` để nhân bản lên theo trục Z.
2. Dùng `S` chỉnh kích thước và `G` theo Y để đặt sát bề mặt mong muốn.
3. Vào góc trên `Numpad 7`, bật `Wireframe` và chọn cạnh cần kéo dài bằng `Edge Select`.
4. Dùng `E` theo Y để tạo phần kéo dài hoặc mép gờ, sau đó `S` nếu cần thu tiết diện.
5. Chuyển sang `Face Select`, chọn các mặt vừa tạo rồi `E` để đùn xuống hoặc đẩy vào một đoạn ngắn.
6. Di chuột lên đảo mesh vừa tạo và nhấn `L`, sau đó `Shift + D` tạo bản sao ở vị trí khác trên mảng giáp.
7. Dùng `B` chọn nhóm đỉnh ở đầu bản sao, `G` theo Y, `E` theo Y và `S` theo X để bản sao khớp với không gian mới.

Đây là bước thiết kế theo bề mặt có sẵn; không cần buộc mọi chi tiết trang trí giống hệt nhau nếu hai vị trí có độ rộng khác nhau.

### 4.3. Sao chép ốc vít từ một bộ phận khác

1. Chọn bộ phận đang chứa ốc mẫu, chẳng hạn ba lô hoặc cụm khớp.
2. Vào `Edit Mode`, bỏ chọn bằng `Alt + A`, di chuột lên ốc mẫu rồi nhấn `L` để chọn geometry liên thông.
3. Dùng `Shift + D` sao chép ốc và đặt gần khu vực mới; nhấn `P` → `Selection` để tách ốc ra thành object riêng nếu cần.
4. Về `Object Mode`, chọn object ốc mới, giữ `Shift` chọn cuối object đùi dự kiến chứa chi tiết, rồi nhấn `Ctrl + J` để gộp thành một object.
5. Vào `Edit Mode` của object đã gộp; di chuột lên ốc và nhấn `L` để chọn riêng đảo hình học của ốc.
6. Bật `Snapping` nếu giúp ốc bám đúng bề mặt; chọn chế độ snap và kiểm tra preview trước khi xác nhận vị trí.
7. Dùng `G`, `R`, `S` đặt ốc tại một điểm lắp ghép phù hợp. Sao chép với `Shift + D` để bổ sung các ốc khác trên mặt trước và mặt sau của đùi.
8. Nếu một số vị trí bị che khuất nhiều, chỉ thêm khi thực sự làm kết cấu rõ hơn; không cần ép đủ số lượng ốc ở mọi mặt.

**Checkpoint:** Các ốc vừa phải về kích thước, bám đúng mặt giáp và không bị lệch tâm bất thường.

### 4.4. Rà soát cụm hông–đùi trên

1. Kiểm tra ở `Numpad 1` (trước), `Numpad 3` (bên) và `Numpad 7` (trên).
2. Trong `Edit Mode`, chọn toàn bộ mesh cần xử lý và `Shift + N` để tính lại normals.
3. Về `Object Mode`, dùng `Shade Smooth` ở các chi tiết cần độ mượt và xem lại những mảng hard-surface cần giữ đường cạnh rõ.
4. Kiểm tra `Mirror Modifier`: hai bên có cùng khớp, đùi và họa tiết dự kiến; không có bản sao bị chồng sai phía.
5. Tìm mặt chồng gây nhấp nháy, đầu lộ, khe hở hoặc mảng trang trí xuyên qua giáp. Dùng `Wireframe` và tạm ẩn object nếu cần quan sát.
6. Đảm bảo không còn object quan trọng nào bị ẩn ngoài ý muốn. Lưu file bằng `Ctrl + S`.

## 5. Checklist đầu ra

- [ ] Đùi trên có ít nhất một dãy chi tiết lặp có độ dày.
- [ ] Có thêm một vùng chi tiết trang trí thứ hai.
- [ ] Có các bu lông/ốc vít được đặt ở điểm lắp ghép hợp lý.
- [ ] Khi Join, geometry ốc vẫn lựa chọn được theo đảo bằng `L`.
- [ ] Không có lỗi normals hoặc mặt chồng rõ rệt.
- [ ] Hai phía của robot cân đối khi xem từ trước.
- [ ] Phần hông–đùi trên có thể kiểm tra độc lập, không nhầm với một model đã rig hoàn chỉnh.

## 6. Những lỗi thường gặp

| Lỗi | Cách xử lý |
| --- | --- |
| Dãy thông gió lệch hàng | Chọn đảo bằng `L`, dùng trục giới hạn khi duplicate |
| Chi tiết quá lớn so với đùi | Thu tỷ lệ mẫu trước khi nhân nhiều lần |
| Object đã Join nhưng mesh chưa dính vào nhau | Hiểu rằng `Ctrl + J` chỉ gộp object; nếu cần hàn mesh phải xử lý topology riêng |
| Ốc lơ lửng hoặc chìm quá sâu | Kiểm tra chế độ snap và xem từ góc bên |
| Sau Shade Smooth, mép hard-surface trông không rõ | Kiểm tra bevel, normals và hình dạng cạnh, không chỉ dựa vào Smooth |
| Một phía robot thiếu trang trí | Kiểm tra `Mirror` và xem chi tiết đang thuộc object nào |

## 7. Bài tập tổng hợp

Tạo bản hoàn thiện của hông–đùi trên với ba mức độ chi tiết: khối chính, chi tiết cấu trúc, ốc vít trang trí. Tự kiểm tra từng mức bằng cách tạm ẩn mức chi tiết nhỏ. Nếu tắt hết ốc mà phần đùi không còn nhận diện rõ, hãy xem lại silhouette và gờ nối lớn.

**Tiêu chí tự đánh giá:** Đối xứng đúng, trục khớp rõ, các mặt giáp không có khe bất hợp lý, chi tiết lặp ngay hàng, shading ổn định từ ba góc chuẩn.

## 8. Câu hỏi ôn tập

### Câu 1
Tại sao nên tạo hoàn chỉnh một khe thông gió trước khi nhân thành cả dãy?

A. Để `Mirror` ngừng hoạt động.  
B. Để Blender tự tạo animation.  
C. Để dễ kiểm soát kích thước, độ dày và kiểu dáng nhất quán.  
D. Để đổi định dạng ảnh.

**Đáp án:** C.  
**Giải thích:** Bản sao thừa hưởng hình học mẫu, nên mẫu chuẩn giúp giảm công sửa hàng loạt.

### Câu 2
Điều nào đúng về `Ctrl + J`?

A. Nó gộp object nhưng không tự hàn vertex trùng nhau.  
B. Nó tạo bộ xương.  
C. Nó làm normals luôn đúng.  
D. Nó tự thêm Mirror.

**Đáp án:** A.  
**Giải thích:** Join kết hợp dữ liệu vào một object; các đảo mesh vẫn có thể tách rời về hình học.

### Câu 3
Sau khi đã gộp ốc vào object đùi, làm sao chọn riêng toàn bộ geometry của một ốc trong `Edit Mode`?

A. Nhấn `F`.  
B. Nhấn `H`.  
C. Nhấn `Ctrl + R`.  
D. Di chuột lên ốc và nhấn `L`.

**Đáp án:** D.  
**Giải thích:** `L` chọn đảo geometry liên thông tại vị trí con trỏ.

### Câu 4
Một ốc vít bám sai bề mặt dù đã bật Snapping. Bước hợp lý là gì?

A. Nhân thêm nhiều ốc.  
B. Kiểm tra chế độ snap, vị trí và góc nhìn bên.  
C. Xóa toàn bộ mesh đùi.  
D. Chỉ làm mượt shading.

**Đáp án:** B.  
**Giải thích:** Snapping phải dùng đúng chế độ và vị trí mới giúp chi tiết bám mặt mong muốn.

### Câu 5
Khi kết thúc bài, thành phẩm chính xác nhất là gì?

A. Robot hoàn chỉnh đã có rig và animation.  
B. Robot đã có chân dưới và bàn chân.  
C. Cụm model khớp hông–đùi trên đã được hoàn thiện hình học và chi tiết.  
D. Một vật liệu kim loại procedural hoàn chỉnh.

**Đáp án:** C.  
**Giải thích:** Phạm vi bài chỉ bao gồm modeling hông và đùi trên, không bao gồm rigging hoặc chân dưới.

## 9. Tổng kết

Bạn đã hoàn thiện phần model bằng các nhóm chi tiết nhỏ, đồng thời rà soát các vấn đề ảnh hưởng mạnh đến chất lượng: đối xứng, mặt chồng, khe hở, normals và sự rõ ràng của silhouette. Thành phẩm đã đủ để tiếp tục những bước dựng bộ phận khác hoặc chuẩn bị rig ở giai đoạn riêng.
