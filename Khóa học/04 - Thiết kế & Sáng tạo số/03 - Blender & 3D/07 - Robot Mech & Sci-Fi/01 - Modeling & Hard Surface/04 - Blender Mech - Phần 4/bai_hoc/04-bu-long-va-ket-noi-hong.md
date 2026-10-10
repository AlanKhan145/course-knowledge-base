# Bài 04 — Tạo bu lông quanh khớp và hoàn thiện liên kết hông

**Loại:** Bài học thực hành hard-surface.  
**Thành phẩm:** Cụm vỏ trục có các bu lông phân bố theo vòng, các đầu nối khép lại phần liên kết của hông.

## 1. Mục tiêu học tập

Sau bài này, bạn có thể:

- Nhân một vòng đỉnh thành mẫu bu lông cơ bản rồi đùn tạo độ dày.
- Sao chép, xoay và phân bố các bu lông quanh khớp theo các góc `90°` và `45°`.
- Dùng `H`/`Alt + H` tạm ẩn các bộ phận để xử lý những phần bị che.
- Hoàn thiện chỗ nối từ trục vào khớp, tính lại `Normals` và kiểm tra bề mặt đầu bu lông.

## 2. Tư duy phân bố chi tiết cơ khí

Bu lông nhỏ giúp robot mang cảm giác là tổ hợp được lắp ráp từ các bộ phận. Tuy nhiên, hình dạng và vị trí lặp lại cần có quy luật. Thay vì tạo từng bu lông mới từ menu `Add`, có thể **dựng một bu lông mẫu**, sau đó nhân bản bằng `Shift + D` và xoay quanh vùng chọn.

Chuẩn bị vỏ trục dạng tròn có các vòng đỉnh dễ chọn và các bộ phận nối vào thân robot. Bài này không cần bu lông đúng chuẩn ren; chỉ cần tạo được đầu bắt vít có khối và độ dày.

## 3. Các công cụ chính

| Công cụ | Vai trò |
| --- | --- |
| `Alt` + chọn vòng | Lấy một vòng đỉnh để làm khuôn bu lông |
| `Shift + D` | Nhân bản một bu lông hoặc cả nhóm |
| `L` | Chọn toàn bộ geometry liên thông của bu lông |
| `R` và góc cụ thể | Phân bố theo hướng có quy luật |
| `B` | Box Select các đỉnh cần chỉnh đồng loạt |
| `F` | Tạo mặt ở đầu mở, khi vùng chọn phù hợp |
| `H`, `Alt + H` | Ẩn/hiện những phần cản trở thao tác |

## 4. Thực hành

### 4.1. Tạo một bu lông mẫu

1. Chọn vỏ trục và vào `Edit Mode`.
2. Chuyển sang chọn đỉnh hoặc cạnh; giữ `Alt` chọn một vòng đỉnh quanh chi tiết trục.
3. Nhấn `Shift + D` để nhân bản vòng. Dùng góc bên `Numpad 3` và `Wireframe` để đưa bản sao đến vị trí gần mép ngoài của cụm khớp.
4. Nhấn `S` để thu vòng sao chép thành kích thước phù hợp với đầu bu lông.
5. Dùng góc trước để điều chỉnh phần đầu, rồi `E` theo trục X tạo độ dày.
6. Chọn vòng đầu bu lông và dùng `F` để đóng mặt. Nếu cần thêm cạnh quanh mép, chỉnh hình học trước khi đóng đầu.

**Checkpoint:** Một bu lông nổi trên cụm khớp, có bề mặt đầu và chiều dày rõ ràng.

### 4.2. Nhân bu lông theo vị trí vòng khớp

1. Di chuột lên bu lông mẫu rồi nhấn `L` để chọn toàn bộ phần geometry liên thông.
2. Dùng `Shift + D` rồi `Z` để nhân bản đến vị trí phía dưới.
3. Chọn một nhóm bu lông, `Shift + D` để nhân thêm nhóm.
4. Dùng `R`, nhập `90`, `Enter` để tạo một nhóm xoay vuông góc với nhóm ban đầu, tùy trục và góc nhìn phù hợp.
5. Lặp lại với góc `45°` để có các vị trí xen kẽ. Chú ý **tâm quay của vùng chọn** phải hợp lý; nếu các bu lông quay quanh chính giữa nhóm thay vì tâm khớp, cần chủ động đổi pivot sang tâm khớp bằng `3D Cursor`.
6. Kiểm tra góc bên và góc trước để đảm bảo đầu bu lông không chìm hẳn vào vỏ trục hay lơ lửng quá xa.

Đối với khớp tròn, các bu lông nên tạo cảm giác phân bố có nhịp điệu, nhưng không nhất thiết phải nhân đủ một vòng nếu một số vị trí bị che khuất.

### 4.3. Sửa bề mặt đầu bu lông

1. Nếu phát hiện các đầu bu lông chưa đóng mặt, chuyển sang `Wireframe`.
2. Dùng `B` chọn những vòng đỉnh thuộc cùng phía đầu bu lông.
3. Dùng `G`, `X` để kéo các đầu ra một chút nếu độ dày chưa rõ.
4. Kiểm tra lựa chọn: `F` chỉ nên áp dụng lên vùng biên phù hợp. Nếu một lần `F` tạo mặt lớn nối xuyên qua nhiều bu lông, hoàn tác và đóng từng vòng biên riêng.
5. Quay lại `Solid`, chọn hình học rồi dùng `Shift + N` để sửa normals.
6. Về `Object Mode`, dùng `Shade Smooth` nếu phù hợp.

### 4.4. Hoàn thiện phần liên kết phía trong hông

1. Nếu thân, ba lô hoặc các khớp khác che mất vị trí cần sửa, chọn từng object gây cản trở và nhấn `H` để ẩn tạm.
2. Chọn chi tiết kết nối chính, vào `Edit Mode`, giữ `Alt` chọn vòng đỉnh ở đầu còn mở.
3. Dùng `E` theo X để đùn vào phần tiếp giáp trong khớp; điều chỉnh `S` nếu cần làm nhỏ tiết diện.
4. Dùng `F` đóng mặt đầu thích hợp hoặc cho phần nối đi vào bên trong object đích theo thiết kế.
5. Chọn vòng đỉnh trên chi tiết tiếp giáp, dùng `G`, `X` để dịch trùng khớp với ống nối vừa tạo, tránh khoảng hở thấy được.
6. Trở về `Object Mode` rồi nhấn `Alt + H` để hiện lại các object đã ẩn.
7. Kiểm tra toàn bộ góc nhìn, dùng `Ctrl + S` để lưu.

**Checkpoint:** Các vỏ trục, đầu nối và bu lông đọc được như một cụm lắp ghép thống nhất, không có khoảng hở lớn không chủ ý.

## 5. Checklist hoàn thành

- [ ] Có ít nhất một bu lông mẫu được làm từ vòng đỉnh và extrude.
- [ ] Có nhiều bản sao với cách sắp xếp nhất quán quanh trục.
- [ ] Các mặt đầu bu lông không bị thủng và không bị nối nhầm vào nhau.
- [ ] Phần khớp được nối sâu vào nhau, không để lộ khe hở lớn.
- [ ] Tất cả object bị ẩn tạm đã được hiện lại.
- [ ] Dự án đã lưu sau khi kiểm tra normals và shading.

## 6. Debug nhanh

| Biểu hiện | Hướng giải quyết |
| --- | --- |
| Bu lông xoay quanh chính nó, không quanh trục chính | Kiểm tra `Transform Pivot Point`; dùng `3D Cursor` tại tâm khớp nếu cần |
| Nhân bản không di chuyển theo hướng mong muốn | Sau `Shift + D`, khóa trục bằng `X`/`Y`/`Z` |
| Đầu bu lông bị nối thành một mặt quá lớn | Hoàn tác và đóng từng vòng đỉnh phù hợp |
| Không thao tác được phần nối vì thân che | Ẩn object cản trở bằng `H`, hiện lại với `Alt + H` |
| Mặt phẳng chớp nháy | Hai mặt đang chồng khít; kiểm tra vị trí và geometry thừa |

## 7. Bài tập thực hành

Tạo hai cách bố trí bu lông khác nhau trên cùng kiểu vỏ trục: một kiểu dùng bốn vị trí theo góc vuông, một kiểu có thêm các vị trí xen giữa. Chọn phương án dễ nhận diện nhất ở góc nhìn bên và giải thích vì sao không nhất thiết phải đặt quá nhiều bu lông.

## 8. Câu hỏi ôn tập

### Câu 1
Khi đã có một bu lông mẫu, cách hiệu quả để tạo nhiều bu lông giống nhau là gì?

A. Vẽ lại bằng `Knife` từ đầu.  
B. Tạo thêm camera.  
C. Đổi `Object Origin` ngẫu nhiên.  
D. Chọn geometry liên thông và dùng `Shift + D`.

**Đáp án:** D.  
**Giải thích:** Duplicate giữ lại cùng hình học, có thể kết hợp dịch và xoay để bố trí nhiều bản sao.

### Câu 2
Cặp lệnh nào dùng để tạm ẩn và hiện lại object?

A. `F` và `I`.  
B. `H` và `Alt + H`.  
C. `K` và `E`.  
D. `S` và `R`.

**Đáp án:** B.  
**Giải thích:** Ẩn các chi tiết che khuất giúp thao tác thuận tiện và có thể hoàn tác hiển thị về sau.

### Câu 3
Nếu `F` tạo một mặt khổng lồ qua nhiều bu lông, bước nào phù hợp nhất?

A. Hoàn tác, rồi đóng từng vòng biên đúng đối tượng.  
B. Thêm `Mirror` ngay lập tức.  
C. Nhân thêm bu lông.  
D. Chuyển sang camera view.

**Đáp án:** A.  
**Giải thích:** Vùng chọn nhiều vòng biên không liên quan có thể cho kết quả nối mặt sai.

### Câu 4
Vì sao nên quan sát khớp theo góc bên khi đặt bu lông?

A. Để đổi số frame.  
B. Để chạy rig tự động.  
C. Để kiểm tra khoảng cách của đầu bu lông với mặt vỏ trục.  
D. Để gán vật liệu.

**Đáp án:** C.  
**Giải thích:** Góc bên thể hiện mức chìm/nổi trên bề mặt rõ hơn chỉ nhìn trực diện.

### Câu 5
Bước hoàn thiện liên kết phía trong hông nhằm mục tiêu chính nào?

A. Tăng tốc độ render.  
B. Thêm xương chuyển động.  
C. Tạo camera mới.  
D. Giảm khe hở và làm các bộ phận nhìn như lắp được với nhau.

**Đáp án:** D.  
**Giải thích:** Đùn và điều chỉnh các vòng đỉnh để phần trục–khớp kết nối hình học hợp lý.

## 9. Tổng kết

Bài học chuyển từ việc tạo một chi tiết đơn lẻ sang **tổ chức cụm chi tiết lặp lại**. Tính thẩm mỹ của cơ khí sci-fi không chỉ đến từ số lượng bu lông, mà còn từ quy luật bố trí, tỷ lệ với vỏ trục và độ sạch của vùng nối.
