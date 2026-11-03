# Bản đồ thời gian video (theo bản chép lời)

| Thời gian | Chủ đề | Bài học tương ứng |
|---|---|---|
| 00:00–02:12 | Giới thiệu prototype, hai đội, một Move và một Attack, skip | 01.01 |
| 02:13–03:35 | Scene có sẵn, Grid, Pathfinding, Tilemap, code tái sử dụng | 01.02 |
| 03:36–05:35 | Tham chiếu Unit, click để đi đến vị trí chuột | 01.03 |
| 05:36–08:20 | Quét ô xung quanh, kiểm tra walkable, độ dài đường đi | 02.01 |
| 08:21–09:32 | Tilemap tô vùng Move, xác minh vật cản | 02.02 |
| 09:33–12:10 | Grid Object lưu `isValidMovePosition`, chặn click không hợp lệ | 02.03 |
| 12:11–14:25 | Recompute vị trí hợp lệ, state idle/waiting, callback khi đến nơi | 02.04 |
| 14:26–16:30 | Grid Object lưu Unit đang chiếm ô, đăng ký các Unit | 03.01 |
| 16:30–18:20 | Click enemy trên Grid, lệnh tấn công, callback | 03.02 |
| 18:21–19:22 | Check attack range và cập nhật occupancy khi đi | 03.03 |
| 19:23–22:12 | Phân Blue/Red, chọn next active Unit | 04.01 |
| 22:13–23:48 | Cờ `canMove`, `canAttack`, Space skip | 04.02 |
| 23:49–25:39 | Camera pan, demo hệ thống | 04.03 |
| 25:40–26:31 | Cảnh báo hiệu năng, gợi ý thuật toán tốt hơn | 05.02 |

**Lưu ý về độ tin cậy:** Bản chép lời là bản dịch/nhận dạng tự động, có nhiều thuật ngữ sai. Các mốc thời gian và cơ chế lớn đáng dùng để tra cứu, nhưng **không đủ để tái tạo từng dòng code trong video**.
