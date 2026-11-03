# Lộ trình học và mục tiêu đầu ra

## Năng lực đạt được

Sau khóa học, người học cần có khả năng: (1) giải thích chênh lệch tọa độ thế giới và tọa độ lưới; (2) tìm ô đi được theo đường đi hợp lệ thay vì đo khoảng cách thẳng; (3) phân biệt hiển thị ô hợp lệ với **chặn hành động không hợp lệ**; (4) quản lý trạng thái unit khi animation/pathfinding đang chạy; (5) chọn đúng quân địch đang đứng trên ô; (6) lưu vị trí chiếm ô; (7) quản lý luân phiên giữa hai đội và hai quyền hành động; (8) kiểm thử một vòng chiến đấu.

## Quy trình thực hành đề xuất

| Buổi | Học | Sản phẩm cần có |
|---|---|---|
| 1 | Module 01 | Scene có Grid, Unit, pathfinding và click điều khiển cơ bản |
| 2 | Module 02 — bài 1, 2 | Tính, tô màu các ô di chuyển hợp lệ |
| 3 | Module 02 — bài 3, 4 | Chặn click sai; khóa input trong khi unit đang đi |
| 4 | Module 03 | Click mục tiêu, đánh trong tầm và cập nhật ô đang chiếm |
| 5 | Module 04 | Hai đội đổi lượt, mỗi unit một Move + một Attack, Space bỏ lượt |
| 6 | Module 05 | Bộ test tối thiểu, tối ưu vùng tìm đường, demo hoàn chỉnh |

Thời lượng các buổi tùy người học. Video nguồn dài 26:31 nhưng không gồm việc tự xây lại các hệ thống nền đã được tác giả tái sử dụng.

## Kết quả nghiệm thu

- Tô các ô có thể đi đến dù bản đồ có vật cản; không đi xuyên chướng ngại.
- Click ô ngoài phạm vi không làm Unit di chuyển.
- Chỉ tấn công Unit **đội đối phương**, **trong tầm**.
- Di chuyển cập nhật ô cũ và ô mới, không làm mất dấu quân.
- Sau một Move và một Attack (thứ tự tùy chọn), lượt chuyển cho đội còn lại.
- Không thể spam click để ra lệnh mới khi Unit đang di chuyển/tấn công.
- Có thể bỏ lượt, camera di chuyển đúng mục tiêu.

## Nếu chưa có Grid/Pathfinding

Xem `99-tai-nguyen/03-tien-quyet-va-thuat-ngu.md`. Video không cung cấp đầy đủ cách xây hệ thống nền nên phần này có thể phải tự triển khai hoặc sử dụng project mẫu phù hợp trước khi bắt đầu bài 01.03.
