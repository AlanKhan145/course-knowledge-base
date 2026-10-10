# Bài 01 — Dựng đầu Robot Worker khoa học viễn tưởng trong Blender

## 1. Tóm tắt

Đầu robot quyết định ngôn ngữ thiết kế của toàn bộ nhân vật. Một khối đầu sci-fi thuyết phục thường được dựng từ các hình học đơn giản, sau đó được tinh chỉnh bằng `Extrude`, `Inset`, `Bevel`, các đường cắt và chi tiết phụ trợ. Bài học hướng dẫn dựng vỏ đầu robot có hình dáng cơ khí, phần mặt nhô ra, các tấm giáp, cụm mắt/cảm biến và bề mặt sẵn sàng để gán vật liệu.

**Sản phẩm:** cụm đầu có các chi tiết chính tách bạch, đường viền chắc chắn, những mặt trong không cần thiết được dọn dẹp và bóng đổ không bị méo rõ rệt.

## 2. Mục tiêu học tập

Sau bài này, bạn có thể:

- Tạo khối cơ sở và điều chỉnh tỷ lệ theo từng trục trong `Edit Mode`.
- Sử dụng `Vertex`, `Edge`, `Face Select`, `Extrude`, `Inset` và `Loop Cut` để tạo vỏ đầu hard-surface.
- Phân biệt tạo chi tiết trong cùng mesh với tạo đối tượng riêng cần chuyển động hoặc vật liệu khác.
- Áp dụng `Mirror Modifier`, `Bevel` và làm mượt bề mặt mà vẫn giữ các cạnh chủ đạo.
- Tìm và sửa các mặt thừa, hướng normal sai hoặc lỗi shading.

## 3. Chuẩn bị giao diện và tư duy dựng hình

Mở một scene mới. Dành phần lớn diện tích cho `3D Viewport`; `Timeline` có thể thu nhỏ trong giai đoạn dựng hình. Trong `Object Mode`, bạn quản lý và biến đổi cả vật thể; trong `Edit Mode`, bạn sửa trực tiếp các đỉnh, cạnh và mặt. `Tab` cho phép chuyển đổi nhanh giữa hai chế độ.

Để chỉnh chính xác dáng đầu, chuyển liên tục giữa các góc trực giao: `Numpad 1` (trước), `Numpad 3` (bên), `Numpad 7` (trên). Sử dụng `Z` và chọn chế độ `Wireframe` khi cần quét chọn các đỉnh nằm phía sau bề mặt. Với lệnh di chuyển, xoay và thu phóng, nhập lần lượt `G X`, `R Y`, `S Z` khi muốn hạn chế theo một trục.

Robot được dựng theo lối **hard-surface modeling**: hình dạng là tập hợp các khối cơ khí và tấm giáp. Vì thế, không cần tạo một khối điêu khắc liên tục. Khi hai chi tiết có chức năng khác nhau, để chúng thành hai đối tượng độc lập thường giúp chỉnh sửa, tô vật liệu và tạo chuyển động thuận lợi hơn.

## 4. Dựng vỏ đầu chính

### 4.1. Tạo khối nền và tỷ lệ

1. Tạo `Cube` bằng `Shift+A → Mesh → Cube`.
2. Chuyển sang `Edit Mode`, dùng `S` kết hợp `X`, `Y`, `Z` để nắn khối thành dáng đầu rộng, có độ dày phù hợp.
3. Quan sát từ trước và bên; kiểm tra độ rộng hai bên và khoảng không gian dành cho phần mặt.
4. Chọn các đỉnh ở nửa trước, dùng `G` và `E` để kéo phần mặt ra tạo dáng đầu dốc, thiên về khoa học viễn tưởng.
5. Xem lại từ nhiều góc. Tránh chỉnh chỉ dựa vào một góc camera vì khối có thể đẹp từ trước nhưng bị quá mỏng từ bên.

`Extrude` làm xuất hiện mặt mới nối với hình học cũ; `Scale` chỉ thay đổi tỷ lệ của phần đã chọn. Kết hợp hai công cụ giúp tạo chuỗi mặt nghiêng và các tầng giáp có tiết diện khác nhau.

### 4.2. Tạo mặt trước và phần gáy

Chuyển sang góc nhìn bên (`Numpad 3`) và chế độ `Wireframe`. Dùng `B` quét chọn các đỉnh ở phía trước để di chuyển/đùn ra; thao tác này định hình mặt robot. Chọn tiếp các đỉnh ở phía sau để xây dựng phần gáy. Nếu phần gáy cần kéo dài, dùng `E` đùn về phía sau rồi thay đổi chiều rộng bằng `S` trên trục thích hợp.

Đầu cơ khí thường đẹp hơn khi mặt trước có nhịp thay đổi rõ: mép trán, mặt nghiêng, hốc cảm biến và cạnh hàm. Các cạnh chuyển hướng đột ngột có thể được vát nhẹ bằng `Ctrl+B` để tránh trông quá sắc như một khối đồ họa chưa hoàn thiện.

### 4.3. Cắt topology tạo các panel

Dùng `Ctrl+R` để thêm các `Loop Cut` chạy qua thân đầu. Những đường này tạo thêm vị trí để đùn hoặc chỉnh mặt. Ở khu vực mà loop không đi qua được theo ý muốn, dùng `K` (`Knife Tool`), nhấp các điểm đầu/cuối đường cắt rồi nhấn `Enter` xác nhận.

Một chi tiết panel có thể tạo theo chuỗi sau:

1. Chọn mặt ở vị trí muốn đặt đường lõm.
2. Nhấn `I` để tạo đường viền nằm trong mặt (Inset).
3. Nhấn `E` và đùn nhẹ vào trong để tạo rãnh; hoặc đùn ra ngoài để tạo miếng giáp.
4. Điều chỉnh mặt vừa tạo bằng `S` và `G` cho ăn khớp với hình khối.

Không nên dùng rất nhiều `Loop Cut` chỉ để tăng số polygon. Mỗi đường cắt nên giúp kiểm soát biên dạng hoặc vùng phản xạ ánh sáng.

## 5. Bổ sung chi tiết cơ khí

### 5.1. Tấm giáp không đối xứng

Nếu muốn một tấm giáp hoặc điểm nhấn chỉ xuất hiện một bên, tạo vật thể riêng trong `Object Mode`. `Shift+C` đưa 3D Cursor về tâm scene; sau đó `Shift+A` thêm khối mới. Định vị bằng `G`, thu phóng bằng `S` và xoay bằng `R`. Nếu tạo trực tiếp trong mesh đang có `Mirror Modifier`, chi tiết có thể tự động bị nhân đối xứng, trái với thiết kế.

Tạo một tấm kim loại bằng khối hộp mỏng, dùng `Inset` và `Extrude` tạo bậc, sau đó thêm `Bevel` nhỏ ở mép. Dùng `P → Selection` khi cần tách một phần hình học thành vật thể riêng.

### 5.2. Hốc mắt, cảm biến và khung viền

Vùng mắt/cảm biến có thể bắt đầu từ `Cube` hoặc `Cylinder`. Dùng `Inset` để tạo vành bao, sau đó `Extrude` để lõm vào thân đầu. Trên một vòng đỉnh, chọn bằng `Alt + click` theo cạnh thích hợp, rồi vát nhẹ bằng `Ctrl+B` để bóng đổ đọc được hình tròn hoặc bán nguyệt.

Có thể tạo thêm một vòng sáng/cảm biến như vật thể khác để sau đó gán vật liệu phát sáng. Đừng nhập chung tất cả chi tiết vào vỏ đầu: việc giữ cảm biến riêng giúp điều chỉnh chất liệu và hướng xoay trong giai đoạn sau.

### 5.3. Mặt sau và các lớp máy

Ở mặt sau, dùng `Inset`, `Extrude` và `Duplicate` (`Shift+D`) để tạo cụm gân, ốc/khối trang trí và các panel lắp ghép. Sau khi nhân một mặt hoặc phần geometry, kiểm tra có mặt nằm sâu bên trong hay không. Những mặt bị kín hoàn toàn có thể xóa bằng `X → Faces` nếu không ảnh hưởng hình học nhìn thấy.

## 6. Mirror, Bevel và sửa lỗi shading

`Mirror Modifier` dựng nửa còn lại từ nửa mô hình đang có. Với những bộ phận đối xứng, chỉ cần dựng một nửa rồi bật `Clipping` và `Merge` nếu muốn các đỉnh ở đường tâm ghép chính xác. Khi thêm `Bevel`, dùng lượng vát nhỏ so với kích thước của bộ phận và kiểm tra cạnh có bị phồng hoặc giao nhau không.

`Shade Smooth` giúp mặt cong trông mượt, nhưng không tự sửa topology. Nếu bề mặt bỗng xuất hiện vùng tối/sáng bất thường:

1. Kiểm tra các mặt chồng lên nhau và xóa mặt bên trong không cần thiết.
2. Chọn phần geometry liên thông bằng cách di chuột và nhấn `L` trong `Edit Mode`.
3. Nhấn `Shift+N` để tính lại normals hướng ra ngoài.
4. Bổ sung bevel hoặc cạnh hỗ trợ tại khu vực cần giữ góc sắc.
5. Quan sát lại dưới ánh sáng ở nhiều góc, không chỉ ở chế độ `Solid`.

Không nên tăng `Bevel Segments` quá mức nếu cạnh quá mỏng; chi tiết quan trọng là ánh sáng bắt được ở mép nhưng dáng hard-surface vẫn rõ.

## 7. Quy trình thực hành và Checkpoint

**Nhiệm vụ:** dựng một cụm đầu hoàn chỉnh gồm vỏ chính, mặt trước, ít nhất một rãnh panel, một cảm biến và một chi tiết phía sau.

- [ ] Vỏ đầu đọc rõ dáng từ góc trước và góc bên.
- [ ] Những bộ phận đối xứng có kích thước và vị trí tương ứng.
- [ ] Chi tiết cần độc lập được tách thành object riêng.
- [ ] Không còn mặt thừa chắn trong hốc mắt hoặc tạo lỗi shading rõ ràng.
- [ ] Đã kiểm tra lại normals bằng `Shift+N` ở các vùng có vấn đề.
- [ ] Đã lưu file `.blend`.

**Bài tập mở rộng:** tạo hai thiết kế mặt trước trên hai bản sao file: một phiên bản vuông khỏe, một phiên bản kéo dài góc cạnh. Giữ nguyên phần gáy để so sánh tác động của tỷ lệ khuôn mặt.

## 8. Lỗi thường gặp

| Hiện tượng | Nguyên nhân thường gặp | Cách xử lý |
| --- | --- | --- |
| Đùn mặt theo hướng ngoài ý muốn | Chọn sai face hoặc góc nhìn | Đổi sang góc trực giao, chọn lại vùng và giới hạn trục |
| Một chi tiết bị phản chiếu không mong muốn | Tạo trong mesh có `Mirror` | Tách bằng `P → Selection` hoặc tạo object độc lập |
| Vệt shading lạ sau khi làm mượt | Normal, topology, mặt chồng | Kiểm tra `Shift+N`, mặt trong và bevel |
| Đường cắt quá rối | Thêm Loop Cut không theo hình khối | Bỏ đường không cần và cắt đúng nơi đổi biên dạng |
| Mô hình trông phẳng | Không có hốc, bậc và cạnh bắt sáng | Tạo `Inset`/`Extrude`, thêm bevel tiết chế |

## 9. Câu hỏi ôn tập

### Câu 1

Khi muốn chi tiết chỉ nằm một bên đầu robot, lựa chọn nào thường dễ quản lý nhất?

A. Để chi tiết nằm chung trong object có `Mirror`.  
B. Tạo object riêng không bị modifier của vỏ đầu chi phối.  
C. Chỉ tăng số `Bevel Segments`.  
D. Sử dụng `Shade Smooth` nhiều lần.

**Đáp án:** B. **Giải thích:** Object riêng tránh bị phản chiếu theo vỏ đầu và dễ gán vật liệu.

### Câu 2

Một mảng mặt cần tạo rãnh lõm có đường viền. Thứ tự thao tác phù hợp là gì?

A. `I` tạo viền, sau đó `E` đùn vào.  
B. `R` xoay toàn bộ object, sau đó `Ctrl+S`.  
C. `Shade Smooth`, sau đó `G`.  
D. Chuyển ngay sang `Camera View`.

**Đáp án:** A. **Giải thích:** `Inset` tạo biên vùng và `Extrude` tạo chiều sâu rãnh.

### Câu 3

Tác dụng của `Shift+N` trong Edit Mode là gì?

A. Đổi vị trí 3D Cursor.  
B. Nhân đôi các mặt.  
C. Tính lại hướng normal của hình học đã chọn.  
D. Đặt keyframe.

**Đáp án:** C. **Giải thích:** Normal nhất quán giúp khắc phục một số lỗi hướng mặt và shading.

### Câu 4

Vì sao nên xem cả góc trước và bên khi chỉnh hình đầu?

A. Để biến mọi vật thể thành mesh.  
B. Để làm tăng tốc độ render.  
C. Để không cần thêm vật liệu.  
D. Để kiểm tra chiều rộng, độ dày và silhouette trong không gian 3D.

**Đáp án:** D. **Giải thích:** Một hình chỉ đẹp từ một góc có thể bị sai tỷ lệ từ các góc khác.

### Câu 5

Khi cần tạo đường cắt tùy ý không đi theo một vòng topology có sẵn, công cụ nào hữu ích?

A. `Knife Tool` (`K`).  
B. `Auto Keying`.  
C. `Video Sequencer`.  
D. `World Properties`.

**Đáp án:** A. **Giải thích:** Knife cho phép xác định đường cắt bằng các điểm chọn trực tiếp.

## 10. Tổng kết

Một đầu robot cơ khí đẹp được xây từ khối lớn trước, sau đó mới có mặt trước, panel, mắt/cảm biến và chi tiết nhỏ. `Inset`–`Extrude` tạo chiều sâu; `Mirror` tiết kiệm thao tác khi làm đối xứng; `Bevel` và việc sửa normals giúp bề mặt bắt sáng tự nhiên. Hãy lưu đầu robot với các bộ phận đặt tên rõ ràng để có thể thêm khớp cổ và điều khiển chuyển động.
