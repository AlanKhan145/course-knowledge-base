# Bài 05 — Tạo Dark Metal và gán vật liệu cho bu lông, viền, ăng-ten

## 1. Tóm tắt

Một robot chỉ sử dụng một sắc kim loại sẽ khó phân biệt chi tiết. `Dark Metal` là biến thể của `Light Metal`: vẫn có Noise, AO, Bump và Roughness nhưng tối hơn và bớt bóng. Bài này cũng rèn cách gán vật liệu chính xác lên nhiều chi tiết nhỏ như bu lông, mảng ốp, cạnh viền và ăng-ten.

## 2. Mục tiêu học tập

- Tạo bản sao material độc lập từ shader có sẵn.
- Điều chỉnh màu và Roughness để tạo kim loại tối.
- Gán material cho vùng mặt, loop và cụm hình học liên thông.
- Dùng `H` / `Alt + H` để cô lập các chi tiết nhỏ khó chọn.
- Tái sử dụng `Dark Metal` và `Pipes` trên nhiều object mà không nhân bản thừa.

## 3. Tạo bản sao Light Metal thành Dark Metal

Nếu sửa trực tiếp material `Light Metal` đang được liên kết ở nhiều object, toàn robot có thể đồng loạt đổi màu. Vì vậy, hãy **nhân bản datablock vật liệu trước khi chỉnh**.

1. Chọn object cần tô tối; mở `Material Properties`.
2. Thêm slot mới bằng dấu `+`.
3. Chọn material `Light Metal` từ menu material có sẵn.
4. Nhấn biểu tượng **số người dùng / tạo bản sao material (Make Single User / Duplicate datablock)** ở cạnh tên material tùy giao diện.
5. Đổi tên material mới thành `Dark Metal`.
6. Kiểm tra nó là datablock riêng rồi mới chỉnh các node.

Sao chép material giữ lại mạng AO–Noise–Roughness–Bump. Bạn chỉ cần đổi tông và mức phản xạ thay vì xây lại shader.

## 4. Làm tối màu nhưng giữ tính kim loại

### 4.1. Đổi sắc độ

Trong Shader Editor của `Dark Metal`, tìm phần `Color Ramp` phụ trách màu xám đã thiết lập ở mạng `Light Metal`, rồi hạ các điểm màu. Giá trị tham khảo được mô tả bằng lời là:

| Vị trí màu trong ramp | Giá trị tham khảo | Hiệu quả |
| --- | --- | --- |
| Đầu tối | Xấp xỉ `#363636` | Tăng độ tối của mảng kim loại |
| Đầu sáng | Xấp xỉ `#666666` | Giữ sự khác biệt sáng–tối nhưng không quá trắng |

**Lưu ý thông số:** Hai mã trên là cách diễn giải các cụm màu xám được đọc thành lời; nếu muốn tái hiện tuyệt đối, cần đối chiếu màu trong file Blender mẫu. Việc chọn tông tối–sáng **tương đối** quan trọng hơn số hex chính xác.

### 4.2. Giảm bóng cho Dark Metal

Khi màu tối được áp dụng, bề mặt có thể trông quá bóng. Tìm `Color Ramp` đang nối vào `Roughness` và nâng giá trị đầu thấp lên sắc xám sáng hơn; ví dụ một đầu ramp được minh họa khoảng **`#9E9E9E`**.

Đây là điều khiển *độ nhám*, khác với việc hạ `Base Color`. Màu tối chỉ thay đổi sắc của vật liệu; `Roughness` mới quyết định vùng phản xạ rộng, mềm hay sắc.

## 5. Gán Dark Metal cho các vùng ốp và viền

1. Chọn object có những chi tiết cần sơn tối, nhấn `Tab` vào `Edit Mode`.
2. Nhấn `Alt + A` để bỏ chọn.
3. Di chuột lên từng phần rời và nhấn `L` để chọn phần liên thông.
4. Khi cần chọn chuỗi mặt dọc theo một vành, chuyển phù hợp sang Face/Edge Select và sử dụng `Alt + Click` (có thể kèm `Shift` để cộng vùng chọn) cho loop, tùy ngữ cảnh và keymap.
5. Xoay model để chọn cả các mảng bên hông, mặt trên và mặt sau.
6. Trong `Material Properties`, chọn slot `Dark Metal` và nhấn `Assign`.
7. Quay về Object Mode, kiểm tra đường ranh giới sáng–tối.

`L` có hiệu quả nhất khi các mảng hình học tách rời bên trong object. Với mesh liền khối, hãy chọn face hoặc loop cẩn thận để không tô nhầm cả bề mặt.

## 6. Chọn bu lông bằng cách ẩn các phần còn lại

Bu lông nhỏ thường bị khuất giữa nhiều ống và tấm giáp. Thay vì phải chọn từng đầu bu lông giữa khung nhìn rối, hãy tạm ẩn các phần *không cần tô*.

1. Trong `Edit Mode`, chọn một cụm hình học lớn không phải bu lông.
2. Nhấn `H` để ẩn vùng chọn.
3. Lặp lại với các tấm vỏ, mắt, đoạn ống và mảng không phải bu lông.
4. Khi màn hình chủ yếu còn các bu lông, nhấn `A` để chọn **tất cả phần hình học còn đang hiển thị**.
5. Chọn slot `Dark Metal` → `Assign`.
6. Nhấn `Alt + H` để hiện lại các phần đã ẩn.
7. Quay về `Object Mode` và xác nhận bu lông tối hơn lớp vỏ.

**Tại sao cách này hiệu quả?** Blender không chọn phần hình học đang ẩn bằng thao tác chọn thông thường. Do đó, sau khi ẩn phần không mong muốn, `A` sẽ chọn phần còn hiển thị. Cần cẩn thận: bất kỳ vùng nào chưa được ẩn sẽ cũng được nhận vật liệu khi nhấn `Assign`.

## 7. Gán lại vật liệu trên các object khác

Robot có thể chứa ăng-ten hoặc một cụm phụ kiện dưới dạng object riêng.

- **Object phụ cần Dark Metal:** chọn object → `Tab` → chọn phần mặt tương ứng → thêm slot → chọn `Dark Metal` có sẵn → `Assign`.
- **Phần ăng-ten cần màu ống:** chọn phần ăng-ten → thêm slot → chọn `Pipes` → `Assign`.
- **Chi tiết viền nằm chung object:** chỉ chọn đúng phần cần tô tối và gán `Dark Metal`.

Việc chọn material từ danh sách khác với bấm `New`: chọn từ danh sách **tái sử dụng** shader, còn `New` **tạo shader mới**.

## 8. Thực hành và checkpoint

**Nhiệm vụ:** Tạo `Dark Metal` độc lập, gán lên ít nhất ba nhóm chi tiết: viền ốp, bu lông và một cụm cơ khí phụ. Gán `Pipes` lên phần ăng-ten hoặc chi tiết ống nằm trong object khác. Kiểm tra từ góc trước, bên và sau.

**Checkpoint:** Có chênh lệch giữa `Light Metal` và `Dark Metal`; kim loại tối không đơn thuần là mảng đen phẳng mà vẫn giữ biến thiên Roughness/Bump. Không có vùng mắt hay ống bị nhuộm nhầm vì thao tác chọn. Lưu `mech_05_darkmetal.blend`.

### 8.1. Lỗi thường gặp

| Triệu chứng | Cách xử lý |
| --- | --- |
| Chỉnh `Dark Metal` làm `Light Metal` đổi theo | Chưa sao chép material datablock độc lập |
| Bu lông vẫn sáng | Chưa chọn đủ các face/bolt hoặc chưa Assign |
| Tấm giáp ngoài ý muốn bị tối | Một số phần không phải bu lông vẫn hiển thị khi nhấn `A` |
| Một ăng-ten có shader `Pipes.001` khác bản gốc | Chọn lại `Pipes` có sẵn từ danh sách material |
| Dark Metal phản xạ quá chói | Chỉnh `Color Ramp` dẫn đến Roughness, không chỉ sửa màu |

## 9. Câu hỏi ôn tập

**Câu 1.** Muốn chỉnh Dark Metal mà không ảnh hưởng Light Metal đang dùng chung, nên làm gì?

A. Nhân đôi object nhưng giữ nguyên material.  
B. Xóa toàn bộ HDRI.  
C. Tăng Bump Strength.  
D. Tạo datablock material riêng trước khi chỉnh.

**Đáp án: D.** Material bản sao độc lập giúp chỉnh màu và nhám mà không thay đổi bản gốc.

**Câu 2.** Sau khi ẩn mọi phần không phải bu lông trong Edit Mode, nhấn `A` sẽ chọn gì?

A. Tất cả hình học còn hiển thị.  
B. Tất cả object của scene.  
C. Chỉ camera.  
D. Chỉ nguồn sáng.

**Đáp án: A.** Trong Edit Mode, thao tác chọn toàn bộ áp dụng lên phần hình học có thể chọn đang hiển thị.

**Câu 3.** Muốn hiện lại hình học đã bị ẩn bằng phím `H`, dùng phím nào?

A. `Ctrl + S`.  
B. `Alt + H`.  
C. `Shift + A`.  
D. `Numpad 7`.

**Đáp án: B.** `Alt + H` hiển thị lại các thành phần hình học bị ẩn.

**Câu 4.** Dark Metal có màu đúng nhưng còn phản xạ sắc quá mức. Nên điều chỉnh gì?

A. Frame Rate.  
B. Độ dài timeline.  
C. Bản đồ Roughness.  
D. Camera Focal Length.

**Đáp án: C.** Roughness kiểm soát độ sắc của phản xạ độc lập với Base Color.

**Câu 5.** Muốn gán `Pipes` có sẵn cho ăng-ten ở object khác mà không tạo shader mới, chọn thao tác nào?

A. Thêm material slot, chọn `Pipes` từ danh sách và `Assign` đúng mặt.  
B. Luôn nhấn New tạo vật liệu trống.  
C. Chuyển object sang Light.  
D. Xóa tất cả material.

**Đáp án: A.** Bạn có thể tái sử dụng datablock material đã có trên object khác.

## 10. Tổng kết

`Dark Metal` giúp tách lớp vỏ sáng với các mảng viền, bu lông và cơ cấu phụ. Kỹ năng quan trọng nhất không chỉ là chỉnh màu, mà là kiểm soát **datablock material, material slot và vùng face được Assign**.
