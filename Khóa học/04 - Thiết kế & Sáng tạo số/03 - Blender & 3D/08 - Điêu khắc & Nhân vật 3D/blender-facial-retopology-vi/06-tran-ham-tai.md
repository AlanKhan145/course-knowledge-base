# Bài 06 — Vòng trán, hàm và chân tai
**Tham chiếu video:** 10:29–13:49.


## Mục tiêu
Dựng khung luồng cạnh lớn để nối vùng quanh mắt, miệng tới trán, hàm và hai bên đầu.


## Các vòng trọng tâm
- **Qua trán:** từ má qua thái dương rồi vòng lên trán.
- **Cằm–hàm–thái dương:** xác định đường quai hàm và viền đầu.
- **Chân tai:** xác định ranh giới kết nối tai với mặt bên đầu.
Các đường này trong video là đường hướng dẫn; không có một topology duy nhất cho mọi khuôn mặt.


## Thực hành
1. Chọn các cạnh khu vực má, `F` nối khi đủ đỉnh tạo mặt sạch, không chồng mặt.
2. `Ctrl + R` thêm Loop Cut; lăn bánh xe để điều chỉnh số cắt nếu đang ở một dải quads thích hợp.
3. `E` kéo topology theo má → thái dương → trán, giữ nhịp các quads.
4. Tạo dải từ cằm qua góc hàm đến thái dương; chỉnh theo đường cơ và hình học thật của model.
5. Khoanh vùng chân tai, để chỗ cho cấu trúc tai sau này.
6. Kiểm tra hình bên cạnh: đường hàm có bám vào sculpt hay lơ lửng?


## Phân phối mật độ
| Vùng | Định hướng |
|---|---|
| Khóe mắt, khóe miệng | Dải đủ dày để biến dạng |
| Má và góc hàm | Mật độ vừa; quads tương đối đều |
| Trán phẳng | Thưa hơn nếu ít biến dạng |
| Gốc tai | Nhiều đường cong, cần xử lý cẩn thận |


## Những lỗi cần tránh
- Quad dài, méo khi chạy từ má tới thái dương.
- Quá nhiều đường cạnh dồn vào cùng một đỉnh ngay sát miệng.
- Bị nhảy sang mặt sau tai vì Shrinkwrap.
- Dùng Ctrl+R trên topology không có dải quad liên tục rồi kỳ vọng lệnh chạy hết.


## Bài tập
Hoàn thiện 3 đường khung và đánh dấu vùng còn trống giữa các loop. Bài 07 sẽ nối chúng thành lưới liên thông.