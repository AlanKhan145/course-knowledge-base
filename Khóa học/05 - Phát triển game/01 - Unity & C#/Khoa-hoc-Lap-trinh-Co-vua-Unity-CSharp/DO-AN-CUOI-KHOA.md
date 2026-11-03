# Đồ án cuối khóa: Unity Chess Online

## 1. Bài toán

Xây game cờ vua 3D chạy được ở hai chế độ: hai người trên cùng máy và hai người ở hai máy thông qua server. Trò chơi phải áp dụng luật cờ chuẩn và có khả năng tái đấu.

## 2. Yêu cầu bắt buộc

- **Gameplay:** bàn 8×8; 32 quân; luật sáu quân; hiển thị nước đi hợp lệ; kiểm tra chiếu và chiếu hết; nhập thành, bắt Tốt qua đường, phong cấp; không đi sai lượt.
- **UI:** menu Local/Online, Host/Connect, chờ đối thủ, kết quả, Reset và Rematch.
- **Networking:** message có định dạng rõ, hai client có state nhất quán; không bắt đầu khi chưa đủ người; xử lý rời phòng.
- **Hosting:** chứng minh localhost và LAN hoạt động; phần nâng cao triển khai VPS Linux/dedicated server.
- **Độ tin cậy:** restart ván không rò rỉ object/event; không double-apply nước đi; dữ liệu không hỏng sau mô phỏng.

## 3. Cấu trúc dự án khuyến nghị

```text
Assets/
├── Scenes/ChessGame.unity
├── Config/
├── Materials/
├── Prefabs/ChessPieces/
├── Scripts/
│   ├── Board/
│   ├── Pieces/
│   ├── Rules/
│   ├── UI/
│   └── Networking/
└── Tests/
```

Cấu trúc trên là đề xuất tổ chức code để dễ mở rộng, không phải cấu trúc duy nhất bắt buộc.

## 4. Bộ kiểm thử chấp nhận

| ID | Tình huống | Kết quả mong đợi |
| --- | --- | --- |
| T01 | Kéo quân ngoài bàn | Quân về ô ban đầu, lượt không đổi |
| T02 | Mã bị các quân đứng quanh chắn | Vẫn đi chữ L nếu ô đích hợp lệ |
| T03 | Xe bị quân cùng phe chắn | Không thể đi xuyên hoặc ăn quân cùng phe |
| T04 | Tốt đi hai ô rồi bị en passant ngay lượt kế | Quân bị bắt bị loại tại đúng ô |
| T05 | Tốt bỏ qua cơ hội en passant | Không còn quyền bắt qua đường |
| T06 | Vua đã từng di chuyển rồi quay về | Không thể nhập thành |
| T07 | Ô Vua đi qua bị tấn công | Không được nhập thành |
| T08 | Tốt đến hàng cuối | Phong cấp đúng phe, chỉ một quân tại ô |
| T09 | Quân bị ghim muốn rời đường chắn | Nước khiến Vua bị chiếu bị loại |
| T10 | Vua bị chiếu và không còn nước thoát | Thông báo chiếu hết |
| T11 | Một client yêu cầu nước đi sai | State hai bên không bị phá vỡ |
| T12 | Hai client kết nối, tái đấu | Chỉ reset sau khi cả hai chấp nhận |
| T13 | Đối thủ disconnect | UI thông báo/rời trận an toàn |
| T14 | Server Linux headless chạy | Hai client kết nối đến endpoint đã cấu hình |

## 5. Mốc bàn giao

1. **M1 — Prototype 3D:** tạo bàn, quân, input kéo thả.
2. **M2 — Chess Engine:** luật chuẩn và chiếu hết.
3. **M3 — UI + Local:** menu, lượt, kết quả, reset.
4. **M4 — Online:** client–server và đồng bộ trạng thái.
5. **M5 — Deploy:** thử trên mạng và server riêng.

## 6. Tiêu chí hoàn thành

Nộp mã nguồn Unity, video quay luồng Local/Online, bảng kiểm thử T01–T14, ghi chú những tính năng chưa hỗ trợ và cách chạy dự án. Không đánh dấu hoàn thành nếu chỉ kiểm tra bằng mắt một ván duy nhất.

[Quay về mục lục](README.md)
