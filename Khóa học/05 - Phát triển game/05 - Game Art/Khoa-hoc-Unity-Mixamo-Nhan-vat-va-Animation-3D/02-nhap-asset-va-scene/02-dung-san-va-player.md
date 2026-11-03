# Bài 04 — Dựng sàn 3D và tổ chức GameObject Player

## 1. Tóm tắt

Nhân vật cần một không gian đơn giản để quan sát chuyển động. Bài này tạo `Plane` làm sàn, dùng ảnh bàn cờ làm texture, sau đó tổ chức nhân vật vào GameObject cha `Player` nhằm tách phần điều khiển khỏi phần hiển thị.

## 2. Mục tiêu học tập

- Tạo một `Plane` làm sàn và đặt tỉ lệ phù hợp.
- Đưa ảnh bàn cờ vào Unity, gán làm texture của material sàn.
- Sử dụng `Tiling` để lặp texture theo hai chiều.
- Tạo GameObject `Player`, đặt nhân vật `AJ` thành con và giải thích parent–child Transform.

## 3. Dựng sàn bằng Plane

Trong `Hierarchy`, tạo GameObject 3D `Plane` và đặt tên `Floor`. Chọn `Floor`, thay đổi `Transform > Scale` thành `(5, 1, 5)` như ví dụ thực hành. Unity Plane mặc định có kích thước khoảng 10 × 10 world units trước khi scale, vì thế scale `(5,1,5)` cho diện tích khoảng 50 × 50 world units. **Scale không phải kích thước world-unit trực tiếp.**

Nếu không dùng texture bàn cờ, bạn vẫn có thể chọn ảnh khác có dạng mặt sàn thích hợp.

## 4. Nhập và gán texture bàn cờ

1. Kéo ảnh bàn cờ vào `Assets/Resources/Textures`.
2. Tạo một Material mới, chẳng hạn `ChessFloor`, trong `Assets/Materials`.
3. Chọn Material và tìm thuộc tính màu nền/texture chính (`Base Map` hoặc `Albedo`, tùy render pipeline/shader).
4. Gán ảnh bàn cờ vào ô texture.
5. Kéo material lên `Floor` hoặc gán trong `Mesh Renderer > Materials`.
6. Trong material, đặt `Tiling X = 5`, `Tiling Y = 5` nếu muốn texture lặp theo lưới 5 × 5.

Tiling không thay đổi kích thước vật lý của sàn. Nó chỉ điều khiển số lần lặp lại hình ảnh trên bề mặt.

## 5. Cấu trúc Player và Transform

Tạo GameObject trống tên `Player` ở gốc `Hierarchy`. Kéo nhân vật `AJ` vào trong `Player`, sao cho cấu trúc scene giống:

```text
Hierarchy
├── Floor
├── Player
│   └── AJ
└── Main Camera
```

Chọn `Player`, đặt `Position = (0,0,0)` và `Rotation = (0,0,0)` trong ngữ cảnh scene phù hợp. Chọn `AJ` và đặt lại **local** Position/Rotation về 0 nếu model cho phép. `Scale` thông thường giữ là `(1,1,1)` trừ khi model có thông số import riêng.

Một child chịu ảnh hưởng từ Transform của parent. Vì thế trong hệ thống mở rộng, bạn có thể dùng `Player` làm điểm điều khiển tổng thể, trong khi `AJ` chủ yếu chịu trách nhiệm hiển thị model. Nếu model bị chìm dưới sàn, cần kiểm tra vị trí chân model và điều chỉnh có chủ đích thay vì reset liên tục.

## 6. Kiểm tra camera con không cần thiết

Một số FBX có thể chứa GameObject phụ không cần dùng trong scene, chẳng hạn một camera. Nếu gặp camera con trùng chức năng với `Main Camera`, hãy vô hiệu hóa hoặc loại bỏ instance con không cần thiết (không xóa tùy tiện asset nguồn).

Cần kiểm tra tên và loại component thực tế thay vì mặc định mọi FBX đều có cùng một cấu trúc con.

## 7. Thực hành

- Tạo sàn có hoa văn lặp 5 × 5, kiểm tra ảnh không bị méo hoặc biến mất.
- Tạo parent `Player` và đặt `AJ` bên trong.
- Di chuyển thử `Player` theo trục X trong Scene View và quan sát `AJ` đi cùng.
- Trả lại vị trí bắt đầu trước khi lưu scene.

## 8. Lỗi thường gặp

| Hiện tượng | Nguyên nhân | Hướng xử lý |
| --- | --- | --- |
| Không thấy texture trên sàn | Chưa gán material cho Plane | Kiểm tra `Mesh Renderer > Materials` |
| Ô bàn cờ quá lớn | `Tiling` thấp | Tăng `Tiling X/Y` có chủ đích |
| Nhân vật bị chìm | Transform/model pivot không khớp sàn | Kiểm tra điểm đặt chân và tọa độ Y |
| Nhân vật không đi theo Player | `AJ` chưa là con của `Player` | Kéo thả `AJ` đúng trong Hierarchy |

## 9. Câu hỏi ôn tập

**Câu 1.** `Tiling X = 5` trên material điều khiển gì?

A. Tốc độ animation  
B. Số lần lặp texture theo một chiều  
C. Số camera hoạt động  
D. Số nhân vật trong scene

**Đáp án:** B. **Giải thích:** Tiling là thuộc tính hiển thị texture, không thay đổi số nhân vật hay chiều dài animation.

**Câu 2.** Sau khi `AJ` là child của `Player`, di chuyển `Player` sẽ thế nào?

A. Di chuyển cả `AJ` theo Transform cha  
B. Chỉ di chuyển sàn  
C. Không ảnh hưởng đến `AJ`  
D. Xóa animation

**Đáp án:** A. **Giải thích:** Child chịu ảnh hưởng Transform của parent.

**Câu 3.** Để ảnh bàn cờ xuất hiện trên sàn, thao tác cốt lõi là gì?

A. Thêm Trigger  
B. Gắn script C#  
C. Tạo transition  
D. Gán texture vào material rồi gán material lên Plane

**Đáp án:** D. **Giải thích:** Mesh Renderer hiển thị bề mặt dựa vào material và shader được gán.

**Câu 4.** `Scale (5,1,5)` của Plane thông thường có nghĩa gì?

A. Plane cao 5 m  
B. Chỉ thay màu vật thể  
C. Phóng hình học theo trục X/Z, không phải đặt thẳng kích thước 5 world units  
D. Tăng tốc di chuyển 5 lần

**Đáp án:** C. **Giải thích:** Scale nhân vào kích thước gốc của mesh.

**Câu 5.** Khi phát hiện camera phụ trong FBX không dùng đến, nên làm gì?

A. Xóa toàn bộ scene  
B. Kiểm tra component và vô hiệu hóa instance không cần thiết  
C. Xóa mọi file FBX  
D. Đổi tên material

**Đáp án:** B. **Giải thích:** Chỉ cần tránh camera trùng vai trò; không nên làm hỏng asset nguồn.

## 10. Tổng kết

Scene đã có bề mặt để quan sát nhân vật và một cấu trúc GameObject gọn gàng. Bạn cũng đã phân biệt scale hình học, tiling texture và quan hệ parent–child.
