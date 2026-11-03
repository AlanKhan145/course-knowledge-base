# Bảng thông số tham khảo — Unity VFX Energy Orb

## 1. Ý nghĩa

Bảng này lưu lại các **giá trị đã xuất hiện trong bài thực hành**, nhằm tiện kiểm tra graph. Chúng là mốc thử và có thể cần thay đổi cho từng project hoặc GPU.

## 2. Thông số

| Hệ | Thuộc tính / thành phần | Giá trị minh họa | Ghi chú |
| --- | --- | --- | --- |
| Môi trường | Unity | `2019.3.7` | Phiên bản của bài thực hành |
| Môi trường | Render Pipeline | URP | Kết hợp VFX Graph và Shader Graph |
| Trails | Capacity | Khoảng `1000` | Cả dung lượng hạt/đường vệt nếu graph yêu cầu riêng |
| Trails | Spawn Rate | `30` | Thuộc tính Float Exposed |
| Trails | OrbSize | `1` | Giá trị mặc định |
| Trails | Lifetime property | `1` | Dùng để kiểm soát tuổi thọ |
| Trails | Spawn Sphere Radius | `1 × OrbSize` | Điểm phát hạt |
| Trails | Conform Sphere Radius | `1.5 × OrbSize` | Ràng buộc khi cập nhật |
| Trails | Attraction | Khoảng `10` | Giá trị điều chỉnh bằng mắt |
| Trails | Stick Force | Khoảng `5` | Giá trị điều chỉnh bằng mắt |
| Trails | Kích thước vệt | `0.01–0.02 × OrbSize` | Ngẫu nhiên và giảm theo tuổi |
| Pulse | Periodic Burst | `1` hạt / `1` giây | Xung định kỳ |
| Pulse | Lifetime | `2` giây | Xung có thể chồng pha |
| Pulse | Quad Size | `10 × OrbSize` | Quầng lớn |
| Pulse | Alpha over Life | `0 → cao → 0` | Vào/ra mềm |
| Pulse | Blend | Additive | Ánh sáng cộng dồn |
| Particles | ParticleSpawnRate | `5000` | Mốc ban đầu minh họa |
| Particles | Tốc độ phát rất cao | `50000` | Chỉ để thử, có cảnh báo tải GPU |
| Particles | Sphere Radius | `2 × OrbSize` | Vùng xuất hiện và Conform |
| Particles | Velocity | `-0.5` đến `0.5` | Khoảng vận tốc khởi tạo |
| Particles | Particle Size | `0.01–0.02` | Hạt nhỏ |
| Noise | Remap đầu | `[-3,3] → [-1,1]` | Thử ban đầu |
| Noise | Remap tinh chỉnh | `[-6,6] → [-1,1]` | Chuyển động gọn hơn trong ví dụ |
| Noise | Cường độ tác động | Thử tới `5` | Không phải giá trị bắt buộc |
| Màu | Màu chính | Xanh dương | Điểm khởi đầu |
| Màu | Màu bổ sung | Tím hoặc vàng | Thử riêng cho Trails |

## 3. Cách sử dụng

Bắt đầu từ các giá trị có mật độ vừa phải, quan sát biến dạng và độ sáng; chỉ tăng số lượng hạt khi ảnh thực sự cần. Hãy xem `Capacity`, `Spawn Rate` và `Lifetime` là ba biến khác nhau. Với các node khác phiên bản, đối chiếu ý nghĩa thay vì cố tìm chính xác một giao diện cũ.
