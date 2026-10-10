# Bài 05 — Phân vùng thân robot, balô và tạo vật liệu bình chứa

## 1. Tóm tắt

Phần thân là nơi tập trung nhiều kết cấu lớn và các chi tiết phụ. Sau khi xử lý `Dark Metal` cho khung máy và balô, ta tạo một vật liệu mới mang tên `Tank` để các bình chứa có sắc độ rất tối, bề mặt kim loại bóng và nổi bật nhờ những dây đai `Light Metal`.

## 2. Mục tiêu học tập

- Áp dụng `Dark Metal` nhất quán cho mảng kết cấu trên thân.
- Phân vùng những mặt phụ khi object chứa nhiều đảo mesh.
- Tạo material `Tank` và cấu hình `Metallic`, `Roughness`, `Base Color`.
- Làm nổi các dây đai và đầu nối bằng `Light Metal`.

## 3. Xử lý balô và các mảng thân

Một object balô hay phần nối lớn có thể chỉ cần `Dark Metal`. Với object như vậy, chọn material này trực tiếp cho cả object. Sau đó xử lý object thân chính có nhiều phân vùng:

1. Chọn object thân và vào `Edit Mode`.
2. Chọn hai mảng hình học lớn cần giữ sáng bằng cách trỏ chuột và nhấn `L`.
3. Nhấn `Ctrl + I` để lấy phần còn lại nếu đúng với cách tổ chức mesh hiện tại.
4. Thêm các mặt viền hoặc mặt nằm sâu bị bỏ sót bằng thao tác chọn mặt và chọn vòng mặt.
5. Thêm slot `Dark Metal` và **Assign**.
6. Xoay đến mặt sau của thân, kiểm tra các vùng vừa tô có bị hở hoặc bỏ sót không.

Các mảnh bổ sung có thể tiếp tục được chọn và gán vào slot `Dark Metal` trong cùng một object mà không cần tạo material mới.

## 4. Vật liệu riêng cho các bình chứa

### 4.1. Chọn phần bình chứa

Các bình có thể là nhiều đảo hình học cùng nằm trong object thân. Ở `Edit Mode`, bỏ chọn tất cả, trỏ vào từng bình rồi nhấn `L`. Thêm slot mới, tạo material mới và đặt tên `Tank`; nhấn **Assign** cho các đảo đã chọn.

Chuyển sang `Shading Workspace`, chọn đối tượng và phóng gần khu vực bình để chỉnh shader. Bạn có thể dùng `Numpad .` (Frame Selected) để đưa phần đang chọn vào trung tâm góc nhìn.

### 4.2. Cấu hình Principled BSDF

Với material `Tank`, sử dụng những đặc tính sau:

| Thuộc tính | Thiết lập | Tác dụng |
| --- | --- | --- |
| `Metallic` | `1.0` | Thể hiện bề mặt kim loại |
| `Base Color` | Gần `#303030` | Màu xám rất tối |
| `Roughness` | Giảm để tạo ánh phản xạ khá rõ | Khi giảm roughness, bề mặt nhìn bóng hơn |

`Roughness` của Principled BSDF thuộc khoảng `0–1`. Khi chọn giá trị, hãy xem sự phân bố highlight ở góc nhìn có ánh sáng; không nhập giá trị ngoài phạm vi hợp lệ. Mục tiêu trong bài là **bình kim loại tối nhưng có phản xạ nhìn thấy được**, không phải một khối đen phẳng.

## 5. Tạo các đai giữ sáng

Trở lại `Edit Mode`, bỏ chọn những mặt đang chọn. Trỏ vào từng đai/miếng nối ở thành bình và nhấn `L` để chọn các đảo liên kết tương ứng. Chọn slot `Light Metal`, sau đó **Assign**.

Sự tương phản giữa bình tối và đai sáng làm người xem nhận ra kết cấu giữ bình. Quay về `Object Mode`, nhìn cả cụm ở khoảng cách xa: nếu không đọc được hình khối bình, hãy kiểm tra ánh sáng và độ bóng trước khi thay đổi tông màu quá mạnh.

## 6. Lỗi thường gặp

- **Bình vẫn mang màu của thân:** material `Tank` chưa được Assign vào các mặt bình.
- **Bình đen lì, không rõ bề mặt:** kiểm tra `Metallic`, `Roughness` và ánh sáng của scene.
- **Đai không nổi bật:** xem đã chọn đúng vùng mesh và đúng slot `Light Metal` chưa.
- **Thân có đốm sáng ở khe lõm:** có mặt đã bị bỏ sót khi gán `Dark Metal`.

## 7. Thực hành ngắn

Tạo một nhóm bình chứa gồm vật liệu `Tank` tối, kim loại bóng và các đai giữ sáng. Đồng thời hoàn thiện phần khung thân với `Dark Metal` để các lớp ngoài và trong không lẫn nhau.

## 8. Câu hỏi ôn tập

**Câu 1.** Để tạo material `Tank` độc lập cho các bình thuộc object thân, thao tác nào là cần thiết?

A. Chỉ chọn camera.  
B. Chọn các mặt bình, tạo material slot mới, tạo material `Tank` và `Assign`.  
C. Ẩn các bình bằng `H`.  
D. Xóa mọi material trong scene.

**Đáp án:** B. **Giải thích:** Material mới phải được gán vào đúng các mặt bình trong `Edit Mode`.

**Câu 2.** `Metallic = 1.0` thể hiện điều gì trong vật liệu Tank?

A. Bề mặt được mô tả như kim loại.  
B. Bề mặt biến thành nguồn sáng.  
C. Object được nhân bản.  
D. Object tự động có xương.

**Đáp án:** A. **Giải thích:** Thông số Metallic điều khiển tính chất phản xạ theo mô hình vật liệu kim loại.

**Câu 3.** Muốn bình nhìn bóng hơn, với các điều kiện khác tương đương, nên làm gì?

A. Xóa UV.  
B. Tăng Scale lên nhiều lần.  
C. Giảm `Roughness` trong phạm vi hợp lệ.  
D. Tắt toàn bộ đèn trong scene.

**Đáp án:** C. **Giải thích:** Roughness thấp cho phản xạ tập trung hơn, giúp thấy highlight rõ.

**Câu 4.** Vì sao dây đai trên bình dùng `Light Metal`?

A. Để làm bình biến mất.  
B. Để thay mesh bằng đèn.  
C. Để giảm số object.  
D. Để phân biệt chi tiết giữ bình với vỏ bình rất tối.

**Đáp án:** D. **Giải thích:** Tương phản sáng–tối làm rõ chức năng và hình khối của cụm bình.

**Câu 5.** Nếu các bình tối nhưng không có highlight, điều gì nên được kiểm tra đầu tiên?

A. Phím đổi góc nhìn.  
B. `Metallic`, `Roughness` và ánh sáng scene.  
C. Tên Collection.  
D. Chỉ số frame của Timeline.

**Đáp án:** B. **Giải thích:** Độ phản xạ nhìn thấy phụ thuộc thuộc tính vật liệu cùng điều kiện chiếu sáng.

## 9. Tổng kết

`Dark Metal` giúp thân máy có chiều sâu, còn `Tank` tạo một nhóm vật liệu đặc thù cho bình chứa. Cấu hình vật liệu riêng và gán dây đai sáng là cách làm rõ chức năng từng bộ phận mà vẫn giữ phong cách cơ khí nhất quán.
