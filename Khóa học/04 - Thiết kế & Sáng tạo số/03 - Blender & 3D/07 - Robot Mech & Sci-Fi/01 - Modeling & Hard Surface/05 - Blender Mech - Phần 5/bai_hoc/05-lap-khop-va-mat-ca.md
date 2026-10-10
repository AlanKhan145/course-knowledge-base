# Bài 05 — Lắp cẳng chân, làm bản lề gối và cụm mắt cá

## 1. Tóm tắt

Sau khi hoàn tất giáp và lõi, cụm cẳng chân phải được đặt lại theo hướng của robot, tạo trục quay qua khớp gối và dựng chi tiết mắt cá để chuẩn bị nối bàn chân. Đây cũng là lúc kiểm tra **pháp tuyến mặt (`Normals`)** vì thao tác nhân bản và scale âm có thể tạo hướng mặt không đúng.

Bài học kết hợp kỹ thuật lắp ráp theo tham chiếu, `Inset`, `Extrude`, `Bridge Edge Loops`, scale âm và `Face Orientation`.

## 2. Mục tiêu học tập

- Trả ảnh tham chiếu về hướng ban đầu và căn lại cụm cẳng chân.
- Tạo trục bản lề đi xuyên qua vùng nối đùi–cẳng chân, có khoảng hở hợp lý.
- Dựng chi tiết mắt cá từ một hình trụ/khớp có sẵn.
- Dùng `Bridge Edge Loops` để nối hai vòng cạnh tương thích.
- Kiểm tra và sửa mặt có normals bị đảo ngược.

## 3. Hoàn nguyên tham chiếu và đặt lại chân

1. Ở `Object Mode`, nhấn `Alt + H` để hiện mọi object đã ẩn.
2. Chọn đối tượng ảnh tham chiếu. Nhấn `N` mở bảng bên, tìm `Item` → `Transform` → `Rotation`. Trong cảnh của quy trình này, ảnh đã được xoay trên **trục Y**, vì vậy đưa `Rotation Y` về `0` để trả hướng tham chiếu ban đầu.
3. Đóng bảng `N`, lưu bằng `Ctrl + S`.
4. Chọn những phần của cụm cẳng chân cần quay cùng nhau, chuyển sang `Side View` và `Wireframe`, dùng `R` để xoay cụm về hướng của ảnh tham chiếu; `G` để chỉnh vị trí.
5. Kiểm tra tiếp `Top View` và `Front View` nhằm xác nhận trục khớp cùng mặt phẳng và cụm chân không lệch tim.

**Lưu ý:** Giá trị xoay cần đặt lại phụ thuộc cách bạn đã xoay ảnh. Trong bài này, việc đưa `Rotation Y` về 0 đúng với quy trình đang dùng; nếu bạn đã thay đổi các trục khác, hãy hoàn nguyên chính xác các giá trị đó thay vì đặt tất cả về 0 theo thói quen.

## 4. Tạo bản lề nối đùi và cẳng chân

Bản lề gồm vòng khớp bên ngoài và một trục hình trụ đi ngang qua hai cụm chân. Khe hở nhỏ gần vị trí xoay làm đường ghép trông hợp lý hơn.

1. Chọn object khớp gối, vào `Edit Mode`; kiểm tra `Top View` để phát hiện bề mặt nào chồng lấn. Dùng `G`, `X` chỉnh vùng khớp để tạo khe nhỏ.
2. Chọn một mặt đầu phù hợp của chi tiết tròn trong `Face Select` và nhấn `I` để tạo **vòng mặt bên trong nhỏ hơn**.
3. Dùng `E` đùn một đoạn trục ngắn theo chiều ngang qua vùng nối; điều chỉnh độ sâu sao cho nó đi qua các thành phần cần kết nối. Tiếp tục `E` nếu cần tạo các bậc trục ở vùng giữa và phía sau.
4. Ở đầu trục, nhấn `E` rồi `S` để tạo đường kính lớn hơn, sau đó đùn thêm một đoạn mỏng để hình thành vành chặn.
5. Có thể dùng `I` rồi `E` trên đầu trục để tạo gờ lõm. Kiểm tra lại toàn bộ trong `Solid View`.
6. Chọn vòng biên liên quan và `E`, sau đó `S`, `Shift + X` khi chỉ muốn tăng tiết diện Y–Z của đĩa mà không kéo dài theo X.

**Checkpoint:** Từ mặt trên, trục nằm xuyên qua tâm vùng nối; từ mặt bên, các vành chặn và khe hở có thể phân biệt rõ. Đừng nhầm một bản lề trông có thể quay với bản lề đã được rig.

## 5. Dựng cụm mắt cá từ khớp có sẵn

1. Trong `Object Mode`, chọn một chi tiết khớp có hình dáng gần giống mắt cá; `Shift + D` tạo bản sao và chuyển bản sao xuống cuối cẳng chân.
2. Chuyển `Edit Mode`, `Wireframe`, sử dụng `B` để chọn và `X` → `Faces` để loại các mặt bên trong không cần thiết ở khu vực mắt cá.
3. Chuyển `Front View`; chọn toàn bộ phần cần sao chép trong Edit Mode, `Shift + D` và di chuyển theo X sang vị trí đối diện.
4. Để phản chiếu hình học bản sao qua trục X tại tâm biến đổi thích hợp, có thể dùng `S`, `X`, `-1`. Kiểm tra hình dạng và vị trí trước khi xác nhận.
5. Khi hai vòng mép của chi tiết có số lượng đỉnh tương thích, chuyển `Edge Select`, `Alt`-chọn một vòng biên và `Shift + Alt`-chọn vòng còn lại. Dùng `Ctrl + E` → `Bridge Edge Loops` để nối hai vòng thành bề mặt giữa.
6. Xem lại bề mặt nối trong `Solid View`. Nếu xuất hiện vặn xoắn hoặc mặt sai chiều, kiểm tra thứ tự vòng cạnh và Normals.

Lệnh `Bridge Edge Loops` nối trực tiếp hai vòng biên bằng những mặt ở giữa. Nó đặc biệt hữu ích khi dựng vỏ ngoài cho cụm mắt cá có hai phía tương ứng.

## 6. Kiểm tra và sửa Normals

`Normals` xác định chiều mặt ngoài của bề mặt. Khi sao chép rồi scale âm, một số mặt có thể bị đảo chiều. Điều này dễ làm vùng hiển thị khác lạ hoặc ảnh hưởng xử lý hình khối tiếp theo.

1. Chọn object cần kiểm tra và vào `Edit Mode`.
2. Chọn hình học cần sửa, nhấn `Shift + N` để `Recalculate Outside`.
3. Mở `Viewport Overlays` → `Face Orientation` để kiểm tra: theo hiển thị mặc định, **màu xanh là mặt hướng ra ngoài**, **màu đỏ là mặt phía sau**.
4. Nếu một đảo mesh vẫn có hướng ngược, chọn riêng nó (`L`) và dùng lệnh `Flip` normals của các mặt đã chọn trong menu normals thích hợp.
5. Tắt overlay sau khi kiểm tra và lưu dự án.

Không đảo toàn bộ normals một cách mù quáng khi chỉ một nhóm bu lông bị sai. Phải chọn chính xác vùng hình học có vấn đề.

## 7. Tạo phần nối xuống bàn chân

Ở đáy cụm mắt cá, chọn các vòng mặt cần phát triển thêm rồi `E` đùn xuống theo biên của chân. Dùng `S`, `Z`, `0` để làm phẳng nhóm đỉnh/mặt theo chiều cao khi phù hợp, xóa các mặt không cần thiết ở vị trí sau này sẽ nối bàn chân. Giữ khoảng hở nhỏ ở các chi tiết bản lề để thấy rõ cấu trúc.

## 8. Lỗi thường gặp

| Vấn đề | Khắc phục |
| --- | --- |
| Chân lệch so với ảnh tham chiếu | Hoàn nguyên hướng ảnh rồi mới xoay cụm chân, kiểm tra nhiều góc |
| Khớp xuyên vào giáp | Chỉnh trục và các vành chặn, duy trì khe lắp nhỏ |
| Bridge tạo các mặt xoắn | Kiểm tra hai vòng cạnh và thứ tự hình học trước khi nối |
| Một bên mesh đỏ trong Face Orientation | Chọn vùng đó rồi `Shift + N` hoặc `Flip` normals phù hợp |
| Mắt cá không đối xứng | Kiểm tra thao tác `S X -1` và vị trí tâm scale |

## 9. Thực hành

Lắp lại cụm cẳng chân vào đúng hướng ban đầu, tạo bản lề gối có trục xuyên và hai vành ngoài, dựng mắt cá có hai phía và kết nối bằng mặt cầu nối (`Bridge Edge Loops`). Bật `Face Orientation` kiểm tra toàn bộ bề mặt, sau đó lưu file.

## 10. Câu hỏi ôn tập

### Câu 1

Sau khi đã xoay ảnh tham chiếu để dựng cẳng chân thẳng đứng, cần làm gì trước khi căn cụm chân vào cơ thể?

A. Thêm Subdivision Surface.  
B. Xóa ảnh tham chiếu.  
C. Khôi phục góc xoay ban đầu của ảnh.  
D. Tắt toàn bộ modifier.

**Đáp án:** C. **Giải thích:** Cần đối chiếu cụm chân với hướng tham chiếu gốc trước khi lắp ráp.

### Câu 2

Công cụ nào dùng để tạo mặt nối giữa hai vòng biên tương thích?

A. `Bridge Edge Loops`.  
B. `Snap to Cursor`.  
C. `Bevel Weight`.  
D. `Hide Selected`.

**Đáp án:** A. **Giải thích:** Bridge tạo các mặt nối giữa hai vòng cạnh được chọn.

### Câu 3

Hiện tượng normals bị đảo có thể xuất hiện khi nào trong thao tác của bài?

A. Chỉ khi lưu file.  
B. Chỉ khi bật đèn.  
C. Chỉ khi tô vật liệu.  
D. Khi sao chép rồi scale âm một phần hình học.

**Đáp án:** D. **Giải thích:** Scale âm có thể đảo chiều hướng hình học, nên cần kiểm tra lại normals.

### Câu 4

Trong overlay `Face Orientation` mặc định, màu nào thường biểu thị mặt trước đúng chiều?

A. Đỏ.  
B. Xanh.  
C. Vàng.  
D. Đen.

**Đáp án:** B. **Giải thích:** Xanh biểu thị mặt trước, đỏ biểu thị mặt sau theo màu hiển thị mặc định của Blender.

### Câu 5

Trong thiết kế bản lề gối, vì sao nên có một khe hở nhỏ ở vùng nối?

A. Để tự sinh animation.  
B. Để làm giáp biến mất.  
C. Để nhận ra các bộ phận cơ khí độc lập và vùng quay.  
D. Để không cần xử lý normals.

**Đáp án:** C. **Giải thích:** Khe nhỏ cho thấy ranh giới cơ cấu và hạn chế cảm giác các khối đang xuyên vào nhau.

## 11. Tổng kết

Khi lắp cụm chân, hãy **khôi phục tham chiếu → xoay cẳng chân → dựng trục gối → làm mắt cá → nối vòng cạnh → kiểm tra normals**. Cụm chân sẵn sàng nhận mesh bàn chân khi trục bản lề nằm đúng tâm và các bề mặt không bị đảo chiều.
