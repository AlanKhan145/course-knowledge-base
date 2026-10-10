# Bài 04 — Dựng vai, cánh tay và móng vuốt cơ khí

## 1. Tóm tắt

Hai cánh tay biến robot từ một mô hình trưng bày thành một nhân vật có khả năng cử động và tương tác. Bài học hoàn thiện giai đoạn modeling bằng cách dựng vai, khớp tay, cẳng tay và bàn tay dạng **móng vuốt**. Các chi tiết được thiết kế theo nguyên tắc cơ khí: mỗi khớp quay có chốt, tâm rõ ràng và khoảng hở giữa các phần.

## 2. Mục tiêu học tập

- Tạo cụm vai hình trụ với tiết diện và góc xoay phù hợp.
- Phát triển các tầng vỏ tay bằng `Inset`, `Extrude`, `Separate` và `Duplicate`.
- Dựng cánh tay có nhiều đoạn để xoay độc lập.
- Tạo cụm bàn tay và hai ngàm/móng vuốt đối xứng có thể đóng mở.
- Kết thúc modeling bằng việc sửa topology, normals và shading cho các phần lắp ráp.

## 3. Chuẩn bị và kiểm tra tỷ lệ

Quan sát robot trong góc nhìn bên (`Numpad 3`) và chính diện (`Numpad 1`). Nếu phần đầu nhô ra quá ít so với thân, có thể chỉnh một số đỉnh khuôn mặt trong chế độ chỉnh sửa đa object: chọn các object liên quan, chuyển `Edit Mode`, bật `Wireframe`, chọn nhóm vertex phía trước, sau đó dịch trên trục sâu phù hợp. Chỉ chỉnh vừa đủ để giữ dáng liền mạch.

Trước khi dựng cánh tay, xác định vị trí vai ở hai bên thân. Khớp vai nên nằm cao, thoáng, không đè lên panel thân. Dưới vai là đoạn tay trên, rồi khớp khuỷu, cẳng tay và ngàm. Khoảng hở nhỏ là cần thiết vì khi xoay, các phần không nên xuyên qua nhau một cách dễ thấy.

## 4. Dựng khớp vai

### 4.1. Dùng Cylinder tạo gối khớp

1. `Shift+C` đặt lại 3D Cursor; `Shift+A → Mesh → Cylinder`.
2. Dùng `G Z` đưa trụ lên gần vai, `G X` dịch sang một bên robot.
3. Trong `Edit Mode`, dùng `R Y 90` nếu cần hướng trục khớp nằm ngang từ thân ra vai.
4. Dùng `S` chỉnh đường kính và bề dày, sau đó đặt trụ vào vị trí tiếp xúc với thân.
5. Xóa mặt nằm hoàn toàn bên trong chỗ nối nếu không cần, tránh tăng số mặt vô ích.
6. Thêm `Mirror Modifier` để dựng vị trí đối xứng ở vai còn lại.

Một phần chốt nhô ra nhẹ giúp vai trông thực sự được gắn bằng cơ khí. Chọn mặt ngoài, `I` thu viền, `E` đùn ra một tầng, có thể lặp `E`–`S` để tạo vòng kim loại.

### 4.2. Bo mép và làm mượt

Dùng `Shade Smooth` cho trụ và thêm `Bevel Modifier`. Ví dụ bề mặt tròn có thể dùng **4 segments** để tạo chuyển tiếp mượt trong dự án. Giữ Amount thấp nếu vai gồm nhiều vòng mỏng. Cần kiểm tra `Normals` khi vừa xóa mặt ở mặt trong.

## 5. Tạo cánh tay nhiều đoạn

### 5.1. Tay trên và phần nối

Từ mặt của cụm vai, nhân geometry bằng `Shift+D`, tách phần bằng `P → Selection` nếu muốn đó là một object quay riêng. Di chuyển phần này theo trục ngang, dùng `E` kéo dài thành lõi tay trên. Dùng `I` để tạo mặt lõm/đầu nối, `E` để tạo gân hoặc nắp tròn. Với phần tấm vỏ ngoài, bắt đầu từ Cube dẹt, định vị cạnh lõi và bo góc.

Giữ rõ sự khác biệt giữa **lõi khớp** và **vỏ giáp**. Lõi là bộ phận cần quay quanh một pivot cụ thể; vỏ giáp thường đi theo lõi nhưng có thể tách thành object khác để gán vật liệu.

### 5.2. Khớp khuỷu và cẳng tay

Thêm trụ tròn ở vị trí khuỷu. Nhìn từ cạnh để kiểm tra hướng trục khuỷu; đặt nó song song với các gối đỡ. Cẳng tay được dựng từ những khối kéo dài có mặt cắt vuông hoặc dạng hộp nhiều cạnh. Dùng `Extrude` từng đoạn thay vì một khối kéo dài duy nhất, giúp thay đổi tiết diện và có chỗ chèn rãnh công nghiệp.

Tách khuỷu và cẳng tay nếu chúng dự định quay độc lập. Đối với cánh tay đối xứng, bạn có thể dựng một bên rồi phản chiếu, nhưng trước khi tạo rig cần kiểm tra xem các chi tiết đã trở thành các object có thể điều khiển riêng chưa.

## 6. Dựng cổ tay và bộ móng vuốt

### 6.1. Tạo bộ gá bàn tay

Đầu cẳng tay cần một giá đỡ nhỏ gắn ngàm. Tạo bằng `Cylinder` hoặc khối vỏ thu nhỏ. Bổ sung vòng mép và chốt kết nối. Cơ cấu ngàm nên có hai chốt nằm cách nhau hoặc hai bên khung trung tâm, để thao tác đóng mở sau này có quỹ đạo tự nhiên.

### 6.2. Tạo hai móng vuốt đối ứng

1. Bắt đầu bằng một khối hoặc một mặt được nhân bản từ chi tiết sẵn có.
2. Dùng `E` kéo dài theo hướng đầu kẹp, `S` thu nhỏ tiết diện gần đầu tạo dáng móng.
3. Dùng `G` hoặc `R` chỉnh nhẹ độ cong/góc của đoạn cuối.
4. Dùng `Bevel` giữ cạnh bớt sắc nhưng không làm mất hình dáng công cụ.
5. Dùng `Shift+D` tạo ngàm thứ hai, đối xứng theo trục của giá đỡ; chỉnh góc phù hợp.
6. Tách mỗi ngàm thành object riêng để chúng có thể mở/đóng quanh các chốt tương ứng.

Nên thử giả lập bằng cách xoay từng ngàm quanh vùng gá. Nếu hai ngàm xuyên nhau khi đóng hoặc tách khỏi trục, cần sửa hình học hoặc khoảng cách trước khi rig.

## 7. Hoàn thiện model trước khi chuyển giai đoạn

Đi quanh toàn bộ robot và kiểm tra những điểm dễ bị bỏ sót: mặt trong của vai, mép ống trụ, mặt giao nhau tại khuỷu, phần khuất của ngàm. Dùng `Shift+N` khi normals lộn hướng và `Shade Smooth` phù hợp với hình dạng. Đặt tên từng khớp để dễ chọn trong `Outliner`.

Ví dụ tên có thể dùng:

```text
Arm_L_Shoulder → Arm_L_Upper → Arm_L_Elbow → Arm_L_Forearm
                                       └── Arm_L_Claw_A / Arm_L_Claw_B
Arm_R_Shoulder → Arm_R_Upper → Arm_R_Elbow → Arm_R_Forearm
                                       └── Arm_R_Claw_A / Arm_R_Claw_B
```

Sơ đồ là gợi ý thứ tự chức năng, không phải một bộ constraint tự tạo. Bước này chỉ nhằm làm rõ bộ phận nào cần đi theo bộ phận nào.

## 8. Lab: Lắp hai cánh tay hoàn chỉnh

**Nhiệm vụ:** tạo hai cánh tay gắn vào thân, mỗi bên có vai, ít nhất hai đoạn tay và một kẹp hai ngàm.

- [ ] Khớp vai có chốt hình trụ rõ ràng.
- [ ] Cẳng tay có tỷ lệ hợp lý với thân và đầu.
- [ ] Ngàm có khe mở và điểm quay có thể xác định.
- [ ] Các object có tên dễ nhận biết.
- [ ] Không có mặt/chốt đè nhau bất thường khi nhìn từ góc bên.
- [ ] Đã lưu phiên bản mô hình hoàn tất.

**Thử nghiệm:** chọn độc lập ngàm trái và phải, thực hiện `R` để mô phỏng mở/đóng. Việc quay chưa nhất thiết đúng tâm vì chưa đặt `Origin`, nhưng sẽ phát hiện vấn đề khoảng hở và hướng dựng.

## 9. Những lỗi thường gặp

| Lỗi | Giải pháp |
| --- | --- |
| Vai hai bên thiếu cân xứng | Kiểm tra gốc Mirror, vị trí phần geometry trong Edit Mode |
| Cẳng tay đâm vào thân | Dời vị trí vai, tăng khoảng hở và kiểm tra khi xoay |
| Móng vuốt là một khối duy nhất | Tách từng ngàm bằng `P → Selection` |
| Bề mặt trụ nhiều vệt tối | Tính lại normals; kiểm tra mặt chồng, bevel |
| Đầu móng nhọn quá mức | Bevel nhẹ cạnh tiếp xúc, không làm mất dáng công cụ |

## 10. Câu hỏi ôn tập

### Câu 1

Vì sao mỗi ngàm móng vuốt cần tách riêng trước khi rig?

A. Để tự động tăng ánh sáng.  
B. Để mỗi ngàm có thể xoay độc lập quanh chốt của nó.  
C. Để thay camera.  
D. Để render nhanh hơn do có nhiều object.

**Đáp án:** B. **Giải thích:** Hai ngàm cần chuyển động đóng/mở khác nhau, vì thế cần đối tượng điều khiển riêng.

### Câu 2

Đối tượng nào là lựa chọn hợp lý để tạo khớp vai tròn?

A. `Text`.  
B. `Image Plane`.  
C. `Camera`.  
D. `Cylinder`.

**Đáp án:** D. **Giải thích:** Trụ cung cấp mặt tròn và một trục cơ khí trực quan.

### Câu 3

Khi ngàm vừa dựng có cạnh quá sắc, muốn bo nhẹ phần mép nên dùng gì?

A. `Bevel`.  
B. `Render Image`.  
C. `Timeline`.  
D. `Depth of Field`.

**Đáp án:** A. **Giải thích:** Bevel làm mép bắt sáng mà vẫn giữ hình dạng chủ đạo.

### Câu 4

Cách tốt nhất để kiểm tra các bộ phận có va nhau khi chuyển động là gì?

A. Chỉ xem góc trước.  
B. Chỉ đổi màu vật liệu.  
C. Thử xoay ngàm và các đoạn tay ở nhiều tư thế.  
D. Tăng độ phân giải render.

**Đáp án:** C. **Giải thích:** Va chạm có thể không nhìn thấy ở tư thế nghỉ.

### Câu 5

Khi muốn tận dụng một mặt có sẵn để tạo chi tiết tay độc lập, thứ tự nào phù hợp?

A. Render → Compositor.  
B. Duplicate vùng → Separate bằng `P → Selection`.  
C. Camera → World Strength.  
D. Thêm âm thanh → Encode video.

**Đáp án:** B. **Giải thích:** Nhân geometry tạo hình cơ sở; tách riêng giúp điều khiển độc lập.

## 11. Tổng kết

Tay robot cần được thiết kế **vừa đẹp vừa có thể chuyển động**. Cụm vai, khuỷu và cổ tay được chia thành các chi tiết có tâm xoay; hai ngàm có khe kẹp và vận hành riêng. Sau khi kiểm tra shading, normals và cấu trúc object, robot đã có đầy đủ bộ phận chính để chuyển sang vật liệu và rig cơ khí.
