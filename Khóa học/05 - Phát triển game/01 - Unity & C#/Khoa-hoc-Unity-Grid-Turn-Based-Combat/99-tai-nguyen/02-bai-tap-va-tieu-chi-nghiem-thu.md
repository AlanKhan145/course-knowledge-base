# Bài tập tổng kết và rubric nghiệm thu

## Đề bài cuối khóa

Xây một prototype Unity 2D có lưới 12×10, ít nhất **2 Unit Đỏ và 2 Unit Xanh**, 3 vật cản, một overlay màu đánh dấu phạm vi di chuyển. Mỗi Unit có `moveRange = 5`, `attackRange = 1`, có animation placeholder cho Move/Attack.

## Các cấp độ

**Cơ bản (60 điểm):** Grid/Unit 10đ, vùng đi có vật cản 15đ, click validation 10đ, click attack và range 10đ, luân phiên đúng 15đ.

**Tốt (25 điểm):** occupancy không sai lệch 10đ, khóa input khi animation chạy 10đ, overlay/UI rõ 5đ.

**Nâng cao (15 điểm):** camera pan 5đ, Space/End Turn button 5đ, kiểm thử tự động hoặc benchmark BFS 5đ.

## Bộ câu hỏi ôn tập

1. Sự khác nhau giữa phạm vi di chuyển theo khoảng cách thẳng và theo đường đi?
2. Tại sao chỉ highlight tile chưa đủ ngăn click sai?
3. Khi nào cập nhật ô đang chiếm lúc Unit di chuyển?
4. Tại sao phải khóa input khi controller đang chạy animation?
5. Nếu Attack trước rồi Move, game nên kiểm tra điều kiện kết thúc lượt khi nào?
6. Nếu Team Red không còn Unit thì `% red.Count` sẽ gặp điều gì?
7. BFS một lần có lợi gì so với chạy A* cho mọi ô, trong trường hợp bước đi cùng chi phí?

## Điều kiện hoàn thành

Có recording gameplay mô tả 2 chu kỳ Blue/Red, với ít nhất một ô bị chặn, một Attack thất bại do quá xa, một lượt bỏ qua, một lượt Attack→Move và camera về đúng Unit.

## Bài mở rộng tự chọn

Tạo một Unit Cung Thủ (tầm 3) và một Unit Kiếm Sĩ (tầm 1), hệ thống HP, trạng thái Dead và danh sách Unit còn sống. Lưu ý đây là **phần đề xuất học thêm**, không phải nội dung đã được triển khai trong video.
