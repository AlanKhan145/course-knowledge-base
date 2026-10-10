# Bài 01 — Dựng phông studio cho robot mech

## 1. Tóm tắt

Một model robot dù có chi tiết tốt vẫn khó nổi bật nếu được đặt trong scene thiếu chủ đích. Bài này tạo **nền studio dạng sàn chuyển tiếp lên phông đứng**, đặt robot lên bề mặt hợp lý và tổ chức các đối tượng trong `Outliner`. Kỹ thuật chính gồm `Plane`, `Loop Cut`, `Extrude`, `Subdivision Surface` và `Shade Smooth`.

## 2. Mục tiêu học tập

Sau bài học, người học có thể:

- Dựng một nền studio đơn giản từ một mặt phẳng.
- Giải thích tại sao cần cắt thêm cạnh và làm mịn khu vực chuyển tiếp sàn–phông.
- Đưa chân robot về gần đúng mặt sàn, không để chân nổi hoặc lún sâu.
- Tổ chức `Camera`, `Light` và nền vào collection dễ quản lý.

## 3. Khái niệm cốt lõi

### 3.1. Nền studio liền mạch

Một mặt phẳng phẳng đơn thuần chỉ tạo được sàn. Để hậu cảnh có chiều sâu nhưng không bị ngắt bởi đường giao giữa sàn và tường, hãy kéo một phần hình học lên cao và tạo chuyển tiếp cong. Khi kết hợp với vật liệu tối, người xem tập trung vào robot thay vì cấu trúc căn phòng.

### 3.2. Loop Cut và Subdivision Surface

`Loop Cut` thêm các vòng cạnh để tạo vùng kiểm soát hình học. `Extrude` kéo dài các đỉnh hoặc mặt đã chọn. `Subdivision Surface` chia nhỏ bề mặt và làm dịu chỗ gấp, còn `Shade Smooth` làm mượt cách hiển thị ánh sáng trên bề mặt. Hai công cụ cuối có vai trò khác nhau: subdivision thay đổi mức độ chi tiết hình học; smooth shading thay đổi cách tính pháp tuyến hiển thị.

## 4. Thực hành dựng nền

1. Mở tệp robot đã hoàn thiện và lưu một bản riêng. Trong `3D Viewport`, nhấn `Shift + C` để đưa `3D Cursor` về tâm scene (thao tác này cũng có thể ảnh hưởng khung nhìn).
2. Nhấn `Shift + A` → `Mesh` → `Plane`, tạo một mặt phẳng dưới robot. Phóng lớn để mặt phẳng bao trọn khu vực dự kiến render.
3. Nhấn `Tab` vào `Edit Mode`. Dùng `Ctrl + R` tạo hai đường cắt vòng, bố trí chúng để tách khu vực sàn trước, vùng chuyển tiếp và phần phông phía sau.
4. Chuyển sang chế độ chọn đỉnh, chọn các đỉnh phía sau cần nâng lên. Nhấn `E` để đùn, sau đó ràng buộc chuyển động lên trục `Z` nếu cần (`Z`). Kéo lên thành phông đứng.
5. Trở lại `Object Mode`. Nhấn `Ctrl + 2` để thêm `Subdivision Surface` với viewport level 2, sau đó chọn `Shade Smooth` từ menu chuột phải.
6. Quan sát vị trí cong của phông. Nếu vùng cong quá rộng hay mép sàn bị co, điều chỉnh các vòng cạnh trong `Edit Mode` để giữ đúng hình dạng.
7. Chọn đối tượng nền, dùng `G`, `Z` để tinh chỉnh cao độ cho tới khi phần thấp nhất của bàn chân tiếp xúc tự nhiên với sàn. Kiểm tra từ góc nhìn bên để phát hiện lún hoặc nổi.

**Lưu ý:** Các thao tác dựng mesh và scale có thể khác nhau theo kích thước robot. Không có yêu cầu nhập một con số cố định cho bề rộng nền hoặc độ cao phông.

## 5. Tổ chức scene

Thêm camera bằng `Shift + A` → `Camera`. Tạo hoặc sử dụng collection `Lights & Camera`, chuyển camera và các đèn vào đó. Đổi tên plane thành `Studio_Backdrop` hoặc `Ground`. Các tên này là nhãn quản lý tùy chọn, không ảnh hưởng trực tiếp tới chất lượng render.

Để đặt camera vào vị trí đang nhìn, điều chỉnh góc nhìn 3D trước rồi nhấn `Ctrl + Alt + Numpad 0`. Sử dụng `Numpad 0` để kiểm tra khung camera. Ở giai đoạn này chưa cần chốt lens hoặc độ phân giải.

## 6. Checkpoint và lỗi thường gặp

| Dấu hiệu | Nguyên nhân có thể | Cách xử lý |
| --- | --- | --- |
| Thấy đường gãy giữa sàn và phông | Hình học chưa đủ mịn | Bổ sung/chỉnh loop cut, kiểm tra Subdivision |
| Nền bị co mép quá mạnh | Subdivision làm tròn cả khu vực không mong muốn | Dời các cạnh kiểm soát gần mép cần giữ |
| Robot lơ lửng | Sàn thấp hơn vị trí chân | Điều chỉnh `G`, `Z` và kiểm tra góc bên |
| Một vài chi tiết chân xuyên sàn | Mặt đất quá cao hoặc tư thế robot không cân | Chỉnh cao độ và tư thế robot trước khi render |
| Không thấy camera/đèn | Collection bị ẩn trong `Outliner` | Bật lại hiển thị đúng collection |

## 7. Thực hành ngắn

Tạo phông studio từ một plane; bảo đảm nhìn từ camera không thấy cạnh kết thúc của nền. Đặt robot đúng mặt sàn, đổi tên tối thiểu hai đối tượng, lưu file `mech_studio.blend`.

**Tiêu chí hoàn thành:** Nền kín khung hình, chuyển tiếp sàn–phông êm và robot không bị treo trên không.

## 8. Câu hỏi ôn tập

### Câu 1

Mục đích chính của `Loop Cut` khi làm phông cong là gì?

A. Tạo vật liệu bóng.  
B. Xuất hình PNG.  
C. Kiểm soát các vùng hình học và độ cong khi làm mịn.  
D. Tăng tiêu cự camera.

**Đáp án:** C. **Giải thích:** Vòng cạnh phân chia mesh, cho phép kiểm soát vùng chuyển tiếp trước khi subdivision.

### Câu 2

Phím tắt nào thường dùng để kéo dài phần mesh đang chọn trong Edit Mode?

A. `E`.  
B. `F12`.  
C. `Numpad 0`.  
D. `Ctrl + S`.

**Đáp án:** A. **Giải thích:** `E` gọi thao tác Extrude đối với hình học được chọn.

### Câu 3

`Shade Smooth` khác `Subdivision Surface` ở điểm nào?

A. Nó chỉ hoạt động với camera.  
B. Nó luôn xóa lưới gốc.  
C. Nó tăng độ phân giải video.  
D. Nó điều chỉnh cách hiển thị bề mặt mà không tự chia nhỏ hình học theo cơ chế của subdivision.

**Đáp án:** D. **Giải thích:** Smooth shading và subdivision giải quyết hai khía cạnh khác nhau của bề mặt.

### Câu 4

Muốn đặt camera theo góc nhìn viewport hiện tại, chọn thao tác nào?

A. `Alt + R`.  
B. `Ctrl + Alt + Numpad 0`.  
C. `Ctrl + F12`.  
D. `Shift + D`.

**Đáp án:** B. **Giải thích:** Lệnh căn camera theo góc nhìn hiện tại, hữu ích khi bố cục shot.

### Câu 5

Đâu là kiểm tra quan trọng nhất sau khi đặt nền dưới robot?

A. Tên collection có viết hoa hay không.  
B. Có thể xuất âm thanh AAC hay không.  
C. Bàn chân tiếp xúc hợp lý với mặt sàn trong khung nhìn.  
D. FPS đã bằng 60 hay chưa.

**Đáp án:** C. **Giải thích:** Quan hệ giữa chân và nền quyết định cảm giác trọng lượng của robot.

## 9. Tổng kết

Phông studio được dựng bằng một mesh đơn giản, có chuyển tiếp cong và có thể quản lý rõ ràng trong `Outliner`. Đây là nền tảng để thiết lập vật liệu và camera ở bước render.
