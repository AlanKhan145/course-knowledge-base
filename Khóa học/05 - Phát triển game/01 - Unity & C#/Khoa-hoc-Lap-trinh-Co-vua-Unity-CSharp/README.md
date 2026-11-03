# Khóa học: Xây dựng game cờ vua với Unity và C#

> Lộ trình thực hành từ dựng bàn cờ 3D đến triển khai multiplayer trên máy chủ. Tài liệu dành cho người đã có kiến thức C# và thao tác Unity cơ bản.

## 1. Kết quả đầu ra

Sau khóa học, học viên có thể tạo bàn cờ 8×8, dựng và điều khiển 32 quân cờ, triển khai nước đi của sáu loại quân, xử lý lượt chơi, các nước đi đặc biệt (en passant, castling, promotion), phát hiện chiếu/chiếu hết, làm menu chơi cục bộ và trực tuyến, đồng bộ lượt đi theo mô hình client–server, và chạy server trên Linux.

## 2. Các module

| Module | Chủ đề | Bài |
| --- | --- | --- |
| [01](01-nen-tang-unity-va-ban-co/README.md) | Dựng dự án, bàn cờ, quân cờ, tương tác kéo thả | 01–03 |
| [02](02-luat-co-va-co-che-tran-dau/README.md) | Luật di chuyển, giao diện ván đấu, nước đi đặc biệt, chiếu hết | 04–08 |
| [03](03-multiplayer-client-server/README.md) | Menu online, networking, bắt đầu trận, di chuyển và tái đấu | 09–12 |
| [04](04-hosting-va-trien-khai/README.md) | Hosting local/LAN/WAN và dedicated server Linux | 13–14 |

## 3. Cách học

1. Đọc bài theo thứ tự; mỗi bài có mục tiêu, giải thích, ví dụ, thực hành và câu hỏi kiểm tra.
2. Hoàn thành checkpoint trước khi học bài tiếp theo.
3. Giữ mã nguồn trong Git và commit sau mỗi bài.
4. Hoàn thiện [đồ án cuối khóa](DO-AN-CUOI-KHOA.md).

## 4. Lưu ý tương thích

Loạt hướng dẫn dùng Unity 2020.1.10 và Universal Render Pipeline. Tên menu, package và API có thể khác trên Unity mới. Các đoạn code trong giáo trình là ví dụ giảng dạy được biên soạn để hiểu cơ chế; cần tích hợp và kiểm thử với phiên bản Unity đang dùng. Phần online mô tả mô hình dùng Unity Transport trong loạt hướng dẫn, không phải khuyến nghị mặc định về stack mạng mới nhất.

## 5. Quy ước

- Trục `x, y` là tọa độ ô trên bàn cờ (0–7); `team = 0` là trắng và `team = 1` là đen.
- Thuật ngữ chess: *en passant* = bắt tốt qua đường, *castling* = nhập thành, *promotion* = phong cấp.
- File `.md` chứa giáo trình; không phải source Unity hoàn chỉnh có thể chạy ngay.

## 6. Nội dung và phạm vi

Khóa học biên soạn lại 14 bài hướng dẫn về game cờ vua với Unity và C#. Phần luật của game cần kiểm thử đầy đủ, đặc biệt khi phân biệt nước đi giả lập với nước đi hợp lệ và khi chơi trực tuyến.
