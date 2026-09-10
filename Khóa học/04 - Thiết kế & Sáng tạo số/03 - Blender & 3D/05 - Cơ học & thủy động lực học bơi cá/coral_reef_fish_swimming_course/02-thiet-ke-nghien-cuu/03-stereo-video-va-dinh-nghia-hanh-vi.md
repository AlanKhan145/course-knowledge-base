# Bài 03 — Quan sát cá bằng stereo video và định nghĩa hành vi

- **Module:** 02. Thiết kế nghiên cứu
- **Loại:** Lesson phương pháp
- **Nguồn chính:** Materials and Methods 2.1

## Mục tiêu học tập

Hiểu cách nhóm nghiên cứu đo hành vi bơi trong điều kiện tự nhiên mà không cần can thiệp trực tiếp vào cá.

## 1. Địa điểm và thời gian ghi hình

Video được thu tại các rạn san hô ở kênh Mozambique, khu vực Mayotte, vào tháng 11/2018 và tháng 2/2021. Các đoạn ghi được chọn khi điều kiện nước yên, trong khung giờ 08:00–16:00, tại 10 địa điểm có độ sâu từ 2 đến 81 m.

## 2. Hệ camera stereo

Nghiên cứu sử dụng 5 rig camera. Mỗi rig gồm hai GoPro:

- cách nhau **80 cm**;
- hướng vào trong **8°** để tăng vùng ảnh chồng lấp;
- quay **Full HD, 30 fps**;
- được hiệu chuẩn bằng cấu trúc 3D có tọa độ biết trước và bảng chessboard để xử lý méo camera.

Thiết kế stereo cho phép đo trong không gian 3D:

- kích thước cá;
- quãng đường;
- tốc độ;
- thay đổi hướng.

## 3. Mẫu quan sát

Nghiên cứu thu dữ liệu của **48 loài thuộc 16 họ**. Mỗi loài có 7–31 cá thể/video sequence. Để giảm nguy cơ ghi lại cùng một cá thể, các clip được chọn cách nhau ít nhất 5 phút.

## 4. Bốn biến hành vi chính

### 4.1 Average swimming speed

Tốc độ trung bình, đơn vị cm/s, được tính trong các đoạn bơi thẳng giữa hai lần rẽ.

### 4.2 Swimming bout distance

Quãng đường trung bình của một đoạn bơi thẳng giữa hai lần rẽ.

### 4.3 Turning frequency

Một lần rẽ được định nghĩa là thay đổi hướng gần tức thời **lớn hơn 45°**. Tần suất rẽ bằng số lần rẽ chia cho tổng thời gian cá thực sự đang di chuyển.

### 4.4 Station holding

Cá được xem là giữ vị trí khi **không bơi tiến về phía trước**. Trong quan sát, hành vi này thường là nghỉ trên hoặc lơ lửng sát cấu trúc san hô.

## 5. Phân nhóm locomotor mode

Dựa trên bơi thẳng thường nhật:

- **MPF:** dùng vây ngực hoặc vây lưng/vây hậu môn làm nguồn lực đẩy đáng kể.
- **BCF:** dùng dao động thân và vây đuôi làm nguồn lực đẩy chủ yếu.

Một số taxon phối hợp nhiều cơ chế; nghiên cứu xếp các loài sử dụng vây đôi nhiều trong bơi thẳng vào MPF.

## Bài tập

Hãy thiết kế một schema dữ liệu cho một clip cá gồm các trường: `species`, `SL_cm`, `duration_s`, `turn_count`, `moving_time_s`, `station_holding_s`, `bout_distance_cm`, `bout_speed_cm_s`. Sau đó viết công thức tính `turn_frequency`.
