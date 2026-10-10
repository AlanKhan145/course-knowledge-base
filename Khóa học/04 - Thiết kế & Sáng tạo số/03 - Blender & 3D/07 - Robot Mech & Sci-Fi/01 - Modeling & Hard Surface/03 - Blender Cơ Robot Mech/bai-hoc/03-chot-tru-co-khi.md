# Bài 03 — Tạo chốt trụ và gờ cơ khí cho khớp cổ

## 1. Tóm tắt

Một khớp robot sẽ thiếu độ thuyết phục nếu chỉ có hai vỏ ốp đặt sát nhau. Bộ phận **chốt trụ** cho người xem biết nơi lực được truyền qua và nơi vòng khớp có khả năng xoay. Ta sẽ đặt trụ tại tâm khớp bằng `3D Cursor`, bổ sung gờ bằng `Loop Cut`, `Inset`, `Extrude`, rồi tạo các vấu nổi chạy quanh bề mặt.

## 2. Mục tiêu học tập

- Đặt `3D Cursor` tại vị trí trung gian của điểm chọn trên khớp.
- Thêm `Cylinder` đúng tâm khớp và xoay vuông góc với vỏ cổ.
- Tạo gờ lõm/nổi bằng `Ctrl + R`, `I` và `E`.
- Đùn nhiều mặt theo normals và dùng `Individual Origins` để thu nhỏ từng vấu độc lập.
- Phân biệt thao tác trang trí bằng hình học với thao tác làm mượt shading.

## 3. Đặt 3D Cursor vào tâm khớp

Bắt đầu ở `Edit Mode` của vỏ cổ. Chọn hai đỉnh nằm đối diện nhau qua vùng giữa của khớp. Khi dùng `Shift + S > Cursor to Selected`, Blender đặt `3D Cursor` vào vị trí trung bình của lựa chọn. Nếu chỉ chọn một đỉnh, con trỏ sẽ nằm đúng đỉnh ấy; nếu chọn nhiều đỉnh không đối xứng, vị trí trung bình có thể không phải tâm mong muốn.

**Quy trình:**

1. Chọn `Vertex Select`.
2. Chọn một đỉnh ở một phía khớp, giữ `Shift` chọn đỉnh đối diện.
3. Nhấn `Shift + S > Cursor to Selected`.
4. Kiểm tra con trỏ ở `Front View` và `Side View`. Sửa lại lựa chọn nếu con trỏ chưa nằm trên trục cơ khí.

Sau bước này, `Shift + A > Mesh > Cylinder` sẽ thêm hình trụ với vị trí dựa trên `3D Cursor`.

## 4. Định vị chốt trụ

1. Trong `Edit Mode`, thêm `Cylinder` bằng `Shift + A`.
2. Nếu `Mirror Clipping` khiến trụ bị giữ trên mặt phẳng giữa, tạm tắt `Clipping`.
3. Nhấn `S` thu nhỏ hình trụ, rồi bật lại `Clipping` khi đã đưa nó khỏi vùng vướng.
4. Dùng `R Y 90` để hướng mặt tròn của trụ ra ngoài khớp (nếu cấu trúc robot của bạn bố trí theo trục khác, thay đổi trục quay phù hợp).
5. Ở `Front View`/`Wireframe`, dùng `S` và `G X` để khớp chiều rộng, vị trí với vòng cổ.
6. Kiểm tra bên hông để đảm bảo trụ không bị đâm xuyên quá sâu hoặc nổi quá xa.

Chốt trụ nên tạo cảm giác đi xuyên qua vỏ khớp tại tâm vòng cung, chứ không phải một chiếc đĩa trang trí gắn ngẫu nhiên.

## 5. Tạo gờ bằng Loop Cut

Giả sử chốt đã có mặt bên đủ dài. Dùng `Ctrl + R` để thêm một vòng cắt gần đoạn sẽ làm gờ. Chọn vòng đỉnh mới (`Alt + Click` vào cạnh khi topology cho phép), sau đó dùng `S` giảm nhẹ tỷ lệ vòng. Điều này tạo một đoạn thắt trên thành trụ.

Tạo mặt đầu có nhiều lớp:

1. Chuyển sang `Face Select` và chọn mặt đầu trụ.
2. Nhấn `I` để `Inset`: tạo một đường biên nhỏ hơn trên cùng mặt.
3. Nhấn `E` để đùn phần inset, tạo bậc nổi hoặc lõm theo hướng phù hợp.
4. Có thể `I` một lần nữa và `E` tiếp để thêm tầng chi tiết.
5. `Tab` về `Object Mode`, dùng `Shade Smooth` để đánh giá shading của phần trụ.

Không cần đặt số đo tuyệt đối khi chưa có bản vẽ. Điều cần giữ là các lớp inset có độ dày đủ nhìn, không quá mỏng đến mức chồng mặt.

## 6. Tạo các vấu nổi trên thành trụ

Một vài mặt bên được đùn ra có thể làm chốt trông giống bộ phận cơ khí có rãnh hãm.

1. Vào `Edit Mode`, `Face Select`.
2. Giữ `Shift` chọn một số mặt ở các vị trí quanh chu vi; tránh chọn liên tiếp mọi mặt nếu muốn tạo các vấu tách nhau.
3. Dùng menu `Ctrl + F > Extrude Faces Along Normals` để đùn theo pháp tuyến của các mặt đã chọn.
4. Chỉ đùn một đoạn vừa phải để bề mặt có chiều sâu.
5. Chuyển `Transform Pivot Point` sang **Individual Origins**.
6. Dùng `S` để thu nhỏ từng mặt đã đùn quanh tâm của chính nó, tạo vấu gọn và cách nhau rõ hơn.

**Phân biệt:** `S` với pivot mặc định có thể kéo cả nhóm mặt lại gần tâm chung; `Individual Origins` giúp từng mặt thay đổi tỷ lệ riêng.

## 7. Kiểm tra kết quả

- Chốt trụ nằm ở tâm cơ khí, không bị lệch khi chuyển góc nhìn.
- Thành trụ có ít nhất một gờ được tạo từ `Loop Cut` hoặc `Inset`.
- Các vấu nổi có kích thước vừa phải, không xuyên vào vỏ đầu.
- Trên bề mặt không có mặt chồng nhau gây nhấp nháy khi xoay camera.
- Lưu file với `Ctrl + S` sau khi kiểm tra.

## 8. Lỗi phổ biến

| Lỗi | Nguyên nhân | Cách khắc phục |
| --- | --- | --- |
| Cylinder xuất hiện sai vị trí | 3D Cursor chưa được căn | Chọn lại các đỉnh đại diện và `Cursor to Selected` |
| Chốt trông như miếng dán | Định hướng trụ sai, quá mỏng | Kiểm tra `R Y 90`, độ sâu, vị trí trong `Side View` |
| Gờ xuất hiện méo hoặc không đều | Chọn sai edge loop | Bật Wireframe và kiểm tra vòng cắt trước khi scale |
| Vấu bị kéo dính vào nhau | Pivot đang dùng Median Point | Đổi sang `Individual Origins` |
| Bề mặt nhấp nháy | Nhiều mặt nằm trùng nhau | Kiểm tra phần duplicate/inset/extrude đã tạo |

## 9. Thực hành ngắn

Thay đổi cách bố trí các vấu nổi trên chốt trụ sao cho có nhịp điệu đối xứng. Đánh giá chúng ở hình nhìn trước, nhìn bên và phối cảnh. Giải thích vì sao bạn không chọn tất cả mặt bên để đùn cùng lúc.

## 10. Câu hỏi ôn tập

**Câu 1.** `Cursor to Selected` đặt 3D Cursor ở đâu khi chọn hai đỉnh?

A. Luôn tại World Origin.  
B. Tại vị trí trung bình của các đỉnh được chọn.  
C. Tại góc camera.  
D. Tại đỉnh đầu tiên được tạo.

**Đáp án: B.** Blender sử dụng trung tâm lựa chọn để định vị con trỏ, hữu ích khi chọn hai điểm hai phía khớp.

**Câu 2.** Phím nào thêm `Loop Cut`?

A. `Ctrl + R`.  
B. `Shift + N`.  
C. `Alt + H`.  
D. `Ctrl + J`.

**Đáp án: A.** `Ctrl + R` tạo các vòng cắt qua topology có cấu trúc phù hợp.

**Câu 3.** Muốn tạo một viền nhỏ bên trong mặt đầu trụ, chọn lệnh nào?

A. `P > Selection`.  
B. `G X`.  
C. `H`.  
D. `I` (`Inset`).

**Đáp án: D.** `Inset` tạo mặt con và vùng viền xung quanh mặt được chọn.

**Câu 4.** Vì sao nên chọn `Individual Origins` khi thu nhỏ nhiều vấu riêng lẻ?

A. Để gộp tất cả thành một mặt.  
B. Để xóa normals.  
C. Để mỗi vấu scale quanh tâm riêng, không cùng co về một tâm chung.  
D. Để kích hoạt `Mirror Modifier`.

**Đáp án: C.** Đây là tác dụng của điểm pivot theo từng thành phần.

**Câu 5.** Chốt trụ nằm lệch trong hình nhìn bên dù đúng ở hình nhìn trước. Nên ưu tiên bước nào?

A. Tăng ánh sáng.  
B. Căn lại vị trí/hướng trụ trong `Side View`.  
C. Thêm thật nhiều bu-lông.  
D. Chỉ đổi tên object.

**Đáp án: B.** Vị trí 3D phải được kiểm tra ở nhiều phép chiếu, đặc biệt tại tâm khớp.

## 11. Tổng kết

Chốt trụ được dựng từ ba nguyên lý: **định vị đúng bằng 3D Cursor**, **phân tầng bề mặt bằng Inset/Extrude**, và **tạo chi tiết lặp bằng Extrude Along Normals + Individual Origins**. Các kỹ thuật này áp dụng được cho nhiều khớp cơ khí khác.
