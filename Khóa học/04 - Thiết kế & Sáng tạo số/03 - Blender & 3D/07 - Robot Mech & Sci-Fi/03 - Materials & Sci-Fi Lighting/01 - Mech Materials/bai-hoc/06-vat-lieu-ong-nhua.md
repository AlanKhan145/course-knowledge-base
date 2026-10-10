# Bài 06 — Thiết kế vật liệu ống xanh có độ bóng và tán xạ nhẹ

## 1. Tóm tắt

Đường ống robot cần cảm giác khác lớp vỏ kim loại. Một ống mềm có thể dùng màu xanh đậm, độ bóng vừa phải và tán xạ dưới bề mặt nhẹ để gợi chất liệu giống nhựa. Bài này tạo `Tubes` riêng, không sử dụng màu kim loại đã có trên các khớp.

## 2. Mục tiêu học tập

- Tạo material độc lập cho toàn bộ object đường ống.
- Phân biệt vẻ ngoài nhựa bóng với kim loại ở mức thuộc tính shader.
- Điều chỉnh `Base Color`, `Subsurface` và `Roughness` theo mục tiêu thẩm mỹ.
- Kiểm tra đường ống trong điều kiện ánh sáng của scene.

## 3. Tạo material Tubes

Chọn object chứa các ống. Trong `Material Properties`, loại bỏ slot/material liên kết không còn dùng cho object này nếu việc loại bỏ không làm mất những phân vùng cần giữ. Tạo material mới bằng nút `New` và đặt tên `Tubes`.

Khác với phần chân phải gán cho từng nhóm mặt, ở đây toàn bộ object đường ống có thể dùng một material chính. Tuy nhiên, trước khi xóa một slot, hãy kiểm tra object có đang chứa nhiều loại chi tiết với các material khác nhau hay không.

## 4. Điều chỉnh bề mặt nhựa xanh

Trong `Shading Workspace`, chọn vật liệu `Tubes` và chỉnh `Principled BSDF`:

| Tham số | Giá trị/hướng điều chỉnh | Vai trò |
| --- | --- | --- |
| `Base Color` | Xanh dương đậm, hơi tối | Màu chủ đạo của ống |
| `Subsurface Weight` hoặc điều khiển tương ứng | Khoảng `0.2` | Cho ánh sáng tán xạ nhẹ vào lớp bề mặt |
| Màu tán xạ, nếu giao diện có điều khiển tương ứng | Xanh đậm | Giữ sắc độ phù hợp với Base Color |
| `Roughness` | Khoảng `0.3` | Tạo ống tương đối bóng |

Cách tổ chức thông số `Subsurface` khác nhau giữa các phiên bản Blender. Hãy dùng điều khiển của Principled BSDF tương ứng với tán xạ dưới bề mặt; không cố tìm một nhãn cũ nếu giao diện đã đổi. Giá trị khoảng `0.2` là mức tham chiếu để tạo hiệu ứng nhẹ, không phải điều kiện bắt buộc với mọi mesh.

Vì muốn ống giống nhựa, không đặt `Metallic = 1` như bình chứa. Vẻ ngoài ống nên khác khớp `Blue Metal` dù cùng họ màu xanh: khớp xanh có tính kim loại; ống xanh có độ mềm về cảm giác vật liệu.

## 5. Quan sát và hoàn thiện

Chuyển qua chế độ xem vật liệu hoặc rendered thích hợp. Quan sát các đoạn cong: highlight chạy dọc theo ống sẽ giúp nhận diện độ tròn và độ bóng. Nếu ống quá sáng so với khung robot, làm tối `Base Color`; nếu ống bị lì, kiểm tra `Roughness`; nếu hiệu ứng tán xạ làm mất cảm giác nhựa, giảm `Subsurface`.

Sau khi hoàn thành, dùng `Alt + H` để hiện lại các object đã tạm ẩn. Chuyển về `Layout` nếu muốn đánh giá toàn cảnh robot.

## 6. Các lỗi cần tránh

- **Ống mang chất liệu kim loại:** kiểm tra vật liệu cũ đã được thay bằng `Tubes` và giá trị Metallic phù hợp.
- **Sửa màu không ảnh hưởng ống:** object có thể đang dùng một slot/material khác hoặc shader nodes chưa nối đúng.
- **Ống trông quá xuyên sáng:** giảm mức tán xạ dưới bề mặt.
- **Ống thiếu độ nổi khối:** xem lại ánh sáng, độ nhám và góc nhìn.

## 7. Thực hành ngắn

Tạo một vật liệu `Tubes` màu xanh tối cho toàn bộ nhóm ống, xem thử sự khác biệt với `Blue Metal` trên khớp. Điều chỉnh shader sao cho ống có phản xạ mềm và không sáng lấn át các chi tiết kim loại.

## 8. Câu hỏi ôn tập

**Câu 1.** Đặc điểm nào giúp phân biệt `Tubes` với `Blue Metal`?

A. Chỉ khác tên object.  
B. Cả hai buộc phải Metallic 1.  
C. Tubes thiên về bề mặt nhựa bóng với tán xạ nhẹ, Blue Metal là vật liệu kim loại.  
D. Tubes phải phát sáng đỏ.

**Đáp án:** C. **Giải thích:** Cấu hình phản xạ và tán xạ giúp hai material khác chất dù màu tương đối gần nhau.

**Câu 2.** `Roughness` khoảng `0.3` trên ống nhằm mục đích chính nào?

A. Làm bề mặt phản xạ khá rõ, không quá lì.  
B. Tạo thêm mesh cho ống.  
C. Nhân đôi object.  
D. Tự gán rig cho ống.

**Đáp án:** A. **Giải thích:** Roughness tương đối thấp làm phản xạ tập trung hơn.

**Câu 3.** Với mục tiêu tán xạ dưới bề mặt nhẹ, giá trị tham chiếu nào được sử dụng?

A. `10`.  
B. `-1`.  
C. `5`.  
D. Khoảng `0.2`.

**Đáp án:** D. **Giải thích:** Mức 0.2 cho tán xạ nhẹ, có thể điều chỉnh thêm theo bề mặt và phiên bản Blender.

**Câu 4.** Trước khi xóa một material slot khỏi object ống, cần kiểm tra gì?

A. Scene có mấy camera.  
B. Object có đang dùng slot đó cho các vùng cần giữ hay không.  
C. Tên workspace.  
D. Độ dài Timeline.

**Đáp án:** B. **Giải thích:** Xóa slot đang được sử dụng có thể khiến các mặt mất phân bổ material như mong muốn.

**Câu 5.** Vì sao cần xem material ống dưới ánh sáng của scene?

A. Ánh sáng sẽ tự sửa topology.  
B. Khi render, mọi bề mặt đều giống nhau.  
C. Màu và phản xạ nhìn thấy phụ thuộc ánh sáng và góc quan sát.  
D. Để đổi hệ tọa độ thế giới.

**Đáp án:** C. **Giải thích:** Thuộc tính shader chỉ tạo kết quả nhìn thấy khi tương tác với điều kiện chiếu sáng.

## 9. Tổng kết

`Tubes` hoàn thiện hệ vật liệu bằng một nhóm bề mặt phi kim: xanh đậm, bóng vừa phải và có tán xạ nhẹ. Sự khác nhau giữa kim loại và nhựa giúp robot Mech trông đa dạng về chất liệu mà không làm mất tính đồng nhất về màu sắc.
