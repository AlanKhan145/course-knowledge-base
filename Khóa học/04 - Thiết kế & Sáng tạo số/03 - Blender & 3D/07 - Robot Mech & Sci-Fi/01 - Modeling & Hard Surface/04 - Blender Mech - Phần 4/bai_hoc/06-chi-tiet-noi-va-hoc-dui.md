# Bài 06 — Tạo gờ nối, hốc lõm và tấm lắp trên đùi

**Loại:** Bài học thực hành Blender theo quy trình.  
**Thành phẩm:** Đùi trên có phần nối nhô lên, hốc lõm trước–sau, gờ lắp ghép và chi tiết nhỏ ở chân khối.

## 1. Mục tiêu học tập

Sau khi hoàn thành, bạn có thể:

- Giải thích vì sao `Loop Cut` có thể bị ngắt khi gặp topology phức tạp sau `Bevel`.
- Dùng `Knife` để tạo đường cắt tại vị trí `Loop Cut` không đi qua được.
- Kết hợp `Inset Individual Faces` và `Extrude` để tạo nhiều hốc riêng biệt.
- Tạo phần nhô nối khối đùi với bộ phận khác bằng thao tác chọn mặt, đùn và điều chỉnh vertex.
- Kiểm soát khe hở, hướng đùn và normals của các mảng giáp.

## 2. Vấn đề cần giải quyết

Một tấm giáp đùi có silhouette đẹp vẫn có thể trông như một khối kín. Để tạo cảm giác được lắp ghép, ta cần thêm **gờ nhô lên**, **rãnh lõm** và **vùng tiếp giáp**. Những chi tiết này nên xuất phát từ logic của hình dạng đang có, thay vì đặt ngẫu nhiên một loạt cube lên bề mặt.

Chuẩn bị khối đùi trên đã có cạnh vát và một góc bo tròn; phía trên có phần thân hoặc ba lô làm mốc vị trí phần nối. Nếu tập độc lập, dùng một khối phụ đại diện cho bộ phận tiếp giáp.

## 3. Kiến thức trọng tâm

### 3.1. Vì sao Loop Cut không luôn chạy xuyên suốt?

`Ctrl + R` thường hoạt động thuận lợi trên các chuỗi mặt dạng quad. Sau khi bevel hoặc tạo những mặt nhiều cạnh, đường đi của edge loop có thể không còn liên tục. Khi đó, kéo loop cut không đảm bảo tạo được đường cắt trên toàn chiều dày mong muốn. `Knife` thích hợp để bổ sung đường cắt có chủ đích trên vùng khó xử lý.

### 3.2. Knife và Cut Through

Ở keymap Blender hiện đại, khi dùng `K` để bật `Knife`, nhấn `C` cho `Cut Through` để đường cắt tác động cả các mặt bị khuất; phím `X`, `Y`, `Z` ràng buộc đoạn cắt theo trục. **Các tổ hợp có thể khác ở keymap/phiên bản cũ**, vì vậy cần xem gợi ý điều khiển hiển thị trong giao diện. Đây là tính năng cần chú ý nếu bạn dùng cả `Wireframe` để cắt từ một góc trực giao.

### 3.3. Inset chung và Inset riêng

Nếu chọn nhiều mặt cùng lúc, `I` có thể tạo đường inset cho cả vùng. Trong trường hợp muốn mỗi mặt có một rãnh riêng, dùng `I` hai lần để chuyển sang chế độ `Inset Individual Faces` theo thao tác trong bài. Kiểm tra preview trước khi xác nhận.

## 4. Quy trình thực hành

### 4.1. Tạo đường cắt cho gờ lắp

1. Chọn đùi trên, vào `Edit Mode`, dùng `Numpad 3` và `Z` → `Wireframe`.
2. Thử `Ctrl + R` dọc vùng muốn làm gờ. Nếu đường loop không đi qua hết vì hình học bevel, thoát khỏi thao tác.
3. Nhấn `K` mở `Knife`. Bật `Cut Through` nếu cần cắt xuyên mặt trước/sau; chọn ràng buộc trục thích hợp để đường cắt thẳng.
4. Đặt các điểm cắt qua vùng từ mép trên đến mép dưới, nhấn `Enter` để xác nhận.
5. Chuyển sang `Vertex Select`, dùng `G` theo trục Y chỉnh vị trí của những đỉnh trên đường cắt cho khớp hình dáng mong muốn.
6. Nếu vùng còn thiếu một đường cắt phụ có thể tạo bằng loop, dùng tiếp `Ctrl + R` rồi căn vị trí.

**Checkpoint:** Có mặt polygon mới đủ điều kiện để chọn và đùn, không để lại các đường cắt dở dang.

### 4.2. Đùn phần gờ nối nhô lên

1. Chuyển sang `Face Select`, chọn vùng mặt vừa tạo ở phía trên khối đùi.
2. Nhìn từ bên, nhấn `E` rồi giới hạn hướng theo trục Z để kéo phần gờ lên trên.
3. Dùng `S` theo Y để làm phần nhô mỏng hơn, giống một lưỡi nối vào cụm thân–ba lô.
4. Chuyển sang góc trên (`Numpad 7`), chọn mặt đầu của gờ và nhấn `I` để tạo viền.
5. Nhấn `E` để đùn vùng inset vào trong, tạo hốc hoặc khe gắn cơ khí.
6. Lặp lại kiểu `I` → `E` trên một mặt phía sau khối đùi nếu muốn cân đối hình thức.
7. Chọn thêm một mặt tại phần dưới, `Shift + D` sao chép, dùng `G` theo Z/Y và `S` để bố trí thành một chi tiết lắp nhỏ, sau đó `E` tạo độ dày.

**Checkpoint:** Các mặt mới nhô hoặc lõm vào đúng hướng, không xuyên qua vị trí lắp ghép chính.

### 4.3. Tạo các hốc độc lập trên mảng giáp

1. Ở `Face Select`, giữ `Shift` chọn hai mặt cần tạo hốc.
2. Nhấn `I` để bắt đầu `Inset` rồi bật chế độ **individual** (với keymap mặc định thông dụng, nhấn `I` thêm lần nữa).
3. Giảm kích thước vùng inset cho từng mặt, quan sát preview để chắc rằng hai mặt có viền riêng.
4. Dùng `E` đùn các mặt inset một đoạn nhỏ **vào trong**, tạo rãnh lõm.
5. Kiểm tra góc nhìn nghiêng: hốc phải đủ sâu để thấy, nhưng không gây thủng ngoài ý muốn ở mặt bên kia.

### 4.4. Dựng gờ nối đến bộ phận kế cận

1. Chọn một cặp mặt gần vùng nối; giữ `Shift` để chọn nhiều mặt.
2. Chuyển sang góc bên `Numpad 3` và `Wireframe`, dùng `E` đùn chúng ra ngoài thành gờ tiếp giáp.
3. Chuyển `Vertex Select`, dùng `B` chọn nhóm đỉnh ở mép dưới rồi `G`, `Z` nâng/giảm để bám theo hình tham chiếu.
4. Dùng `Ctrl + R` bổ sung một vòng cắt nơi cần tạo đoạn gãy của gờ.
5. Chọn một góc qua `B` và dịch theo Z để có đường cong/gấp phù hợp.
6. Ở góc trên `Numpad 7`, chọn các đỉnh cùng mép và điều chỉnh chiều ngang theo X. Nếu cần, `E` tiếp phần gờ vào trong bộ phận tiếp giáp.
7. Nếu thấy khe hở ngoài ý muốn, chọn đỉnh ở mép trong và dịch chúng về phía khối tiếp giáp. Không kéo toàn bộ mặt ngoài làm hỏng silhouette.

**Checkpoint:** Đầu nối bám với cụm bên cạnh về mặt hình dáng; không còn khe lớn trông như chi tiết bị treo rời.

### 4.5. Kiểm tra normals và biên dạng

1. Trong `Edit Mode`, nhấn `A` chọn toàn bộ mesh; `Shift + N` để tính lại normals.
2. Quan sát hình dáng từ trước/bên/trên. Đặc biệt kiểm tra phần gờ sau `Extrude` có đỉnh bị lệch không.
3. Chuyển về `Object Mode`, đánh giá mặt giáp dưới ánh sáng viewport và lưu dự án bằng `Ctrl + S`.

## 5. Tiêu chí hoàn thành

- [ ] Có đường cắt bằng `Knife` ở vị trí `Loop Cut` không xử lý được.
- [ ] Có phần gờ nhô lên hoặc lưỡi nối đúng vùng dự kiến.
- [ ] Có ít nhất hai hốc inset độc lập.
- [ ] Phần nối nằm sát bộ phận kế cận, không có khe hở lớn ngoài ý muốn.
- [ ] Tỉ lệ khối giáp chính vẫn rõ ràng sau khi thêm chi tiết.
- [ ] Normals đã được rà soát.

## 6. Lỗi thường gặp

| Vấn đề | Nguyên nhân | Cách khắc phục |
| --- | --- | --- |
| `Ctrl + R` không đi xuyên qua toàn bộ mesh | Đường topo quad bị ngắt sau bevel | Dùng `Knife`, kiểm tra điểm bắt đầu/kết thúc |
| Chỉ mặt trước được cắt | `Knife` chưa ở chế độ cut-through | Bật `Cut Through`, kiểm tra keymap |
| Hai hốc trở thành một vùng inset lớn | Đang dùng `Inset Region` | Chuyển sang `Inset Individual Faces` |
| Hốc phình ra ngoài | Hướng extrude ngược | Đảo hướng, xem góc bên trước khi xác nhận |
| Gờ nối tạo lỗ lớn ở mép | Đỉnh biên không được căn đúng | Chọn nhóm đỉnh biên và chỉnh theo X/Z |

## 7. Bài tập thực hành

Trên một khối đùi có góc bevel, hãy tạo một gờ nối phía trên và hai hốc lõm riêng ở mặt bên. Cố tình thử `Loop Cut` qua vùng bevel; nếu đường cắt không đi được, dùng `Knife` làm giải pháp thay thế. Ghi lại sự khác biệt giữa hai kỹ thuật bằng ba câu.

## 8. Câu hỏi ôn tập

### Câu 1
`Loop Cut` khó tiếp tục qua một vùng sau bevel thường do nguyên nhân gì?

A. Hình học chỉ có một object.  
B. Đường topology liên tục bị ngắt bởi cấu trúc mặt phức tạp.  
C. Chưa bật camera.  
D. Màu vật liệu chưa đúng.

**Đáp án:** B.  
**Giải thích:** Loop Cut dựa vào luồng cạnh phù hợp; topology phức tạp có thể chặn đường đi.

### Câu 2
Khi muốn tạo đường cắt xuyên cả các mặt bị khuất bằng `Knife` trên Blender hiện đại, cần bật tùy chọn nào?

A. `Cut Through`.  
B. `Shade Smooth`.  
C. `Mirror`.  
D. `Bevel`.

**Đáp án:** A.  
**Giải thích:** Cut Through cho phép đường cắt ảnh hưởng tới hình học bị che phía sau.

### Câu 3
Muốn inset riêng hai mặt đã chọn, cách nào phù hợp?

A. `Ctrl + J` gộp object.  
B. `Shift + N` tính normals.  
C. `Alt + H` hiện object.  
D. Dùng `Inset Individual Faces`.

**Đáp án:** D.  
**Giải thích:** Chế độ individual tạo biên inset cho mỗi mặt thay vì một vùng chung.

### Câu 4
Muốn một mảng giáp có hốc lõm, thao tác nào hợp lý nhất?

A. `R` xoay cả object.  
B. `Mirror` qua trục Y.  
C. `I` tạo viền rồi `E` đùn vào trong.  
D. `Shift + C` đưa cursor về tâm.

**Đáp án:** C.  
**Giải thích:** Viền inset kết hợp độ sâu từ extrude tạo hình hốc cơ khí.

### Câu 5
Khi phát hiện gờ nối có khe hở ở mép trong, nên ưu tiên làm gì?

A. Tăng số frame animation.  
B. Chỉnh các đỉnh ở mép nối cho sát bộ phận kế cận.  
C. Xóa cả khối đùi.  
D. Chỉ đổi màu mesh.

**Đáp án:** B.  
**Giải thích:** Sửa đúng nhóm đỉnh giúp đóng khoảng hở mà vẫn giữ silhouette chính.

## 9. Tổng kết

Bạn đã kết hợp `Knife`, `Inset`, `Extrude` và điều chỉnh vertex để bổ sung các phần nối có chiều sâu trên đùi. Mục tiêu không phải càng nhiều đường cắt càng đẹp, mà là **mỗi đường cắt phục vụ một mặt hoặc chi tiết lắp ghép cụ thể**.
