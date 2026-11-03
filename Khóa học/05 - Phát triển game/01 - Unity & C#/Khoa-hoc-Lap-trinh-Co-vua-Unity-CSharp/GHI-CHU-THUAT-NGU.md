# Ghi chú thuật ngữ Unity Chess

| Thuật ngữ | Giải thích |
| --- | --- |
| `Chessboard` | Component quản lý ô và quân trên bàn |
| `ChessPiece` | Lớp cơ sở cho quân cờ |
| `Prefab` | Mẫu GameObject để tạo instance |
| `MeshFilter` | Nơi lưu mesh của đối tượng |
| `MeshRenderer` | Thành phần hiển thị mesh với material |
| `Collider` | Hình học va chạm để raycast chạm đối tượng |
| `Raycast` | Truy vấn đối tượng bị tia phát từ camera chạm vào |
| `URP` | Universal Render Pipeline của Unity |
| `GetAvailableMoves` | Sinh nước đi ứng viên theo loại quân |
| `GetLegalMoves` | Lọc những nước không khiến Vua mình bị chiếu |
| `En passant` | Bắt tốt qua đường ngay sau nước Tốt địch đi hai ô |
| `Castling` | Nhập thành: Vua đi hai ô và Xe di chuyển kèm |
| `Promotion` | Phong Tốt thành Hậu/Xe/Tượng/Mã |
| `Check` | Chiếu: Vua đang bị đe dọa |
| `Checkmate` | Chiếu hết: đang bị chiếu và không còn cách thoát hợp lệ |
| `NetMessage` | Định dạng thông điệp ở tầng game |
| `Opcode` | Mã nhận diện loại bản tin |
| `Serialization` | Chuyển dữ liệu có cấu trúc thành chuỗi bytes truyền qua mạng |
| `Client/Server` | Thiết bị yêu cầu và tiến trình phục vụ/điều phối |
| `LAN/WAN` | Mạng cục bộ / mạng diện rộng |
| `NAT` | Dịch địa chỉ mạng tại router |
| `Port forwarding` | Chuyển cổng từ mạng ngoài vào thiết bị nội bộ |
| `SSH/SCP` | Kết nối terminal bảo mật / sao chép file bảo mật |
| `Headless` | Tiến trình không cần hiển thị cửa sổ đồ họa |

## Các lưu ý quan trọng

- Unity 2020.1.10 được nhắc ở nguồn hướng dẫn; các API/mục Package Manager có thể thay đổi ở phiên bản mới.
- Các đoạn code trong bài mang tính minh họa để tự triển khai, không thay thế full project.
- Logic bắt Vua trong giai đoạn đầu là bước thử nghiệm UI; thắng cờ tiêu chuẩn dựa trên chiếu hết.
- Mẫu `NetMessage` và `NetOperation` trong các bài học diễn giải khái niệm, cần đồng bộ theo code thật và transport đã cài.

[Quay về mục lục](README.md)
