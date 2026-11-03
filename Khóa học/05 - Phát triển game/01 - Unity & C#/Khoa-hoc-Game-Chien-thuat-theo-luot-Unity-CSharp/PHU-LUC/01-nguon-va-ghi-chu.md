# Nguồn và phạm vi biên soạn

## Nguồn đầu vào

Bản ghi tiếng Việt do người học cung cấp: `Pasted markdown(20261103-151517).md`, khoảng 13 phút 29 giây, nội dung **tổng quan cách làm game chiến thuật theo lượt**. Tác giả video tự giới thiệu là Code Monkey (bản dịch tự động ghi “Cod Mony”) và dùng **Classified: France ’44** làm ví dụ. Nguồn không bao gồm URL video hoặc mã nguồn hướng dẫn chi tiết.

## Phân biệt nguồn và nội dung bổ sung

- **Được bản ghi đề cập:** Grid System; xác định ô bằng chuột; A* pathfinding; Action Points; kỹ năng & ScriptableObject; stealth/field of view/raycast; patrol; Overwatch; cover; flank; friendly fire và AoE; HP và Morale; loại địch; map prefab, trigger, level scripting; overworld map; dialogue; skill tree; equipment.
- **Được giáo trình bổ sung để triển khai:** kiến trúc dự án Unity/C#, state machine cụ thể, Dijkstra cho vùng di chuyển, hợp đồng giao diện của action, lớp dữ liệu và event, các công thức ví dụ, bộ kiểm thử, giới hạn MVP, UI và quy trình build. Các đề xuất không phải là lời trích hoặc mã nguồn từ video.
- **Không có trong nguồn:** link tới từng video tutorial của tác giả, số liệu cân bằng chính thức, asset và source code của *Classified: France ’44*, project Unity nguyên mẫu. Không giả định đây là khóa học gốc của tác giả.

## Hiệu đính thuật ngữ từ nhận dạng giọng nói

| Bản ghi tự động | Thuật ngữ dùng trong giáo trình | Giải thích |
|---|---|---|
| turnbas | turn-based | Theo lượt |
| lưới / Grid | Grid System | Hệ tọa độ ô |
| ASR | A* (A-star) | Thuật toán tìm đường |
| rast / recast | Raycast | Phát tia kiểm tra va chạm |
| đối tượng script | ScriptableObject | Asset dữ liệu trong Unity |
| Gorilla Sty | guerrilla/stealth | Lối chơi du kích, ẩn nấp |
| bảo hiểm / bìa / che phủ | cover | Vật che chắn |
| đánh vòng | flanking | Đánh sườn |
| vùng phun | cone/spread/AoE | Vùng tác động vũ khí |
| Sức khỏe và tinh thần | Health & Morale | Máu và tinh thần |

## Cách dùng tài liệu

Từng bài gắn mốc thời gian để quay lại transcript. Mọi ví dụ thông số (như 4 AP hoặc 50% morale) chỉ dùng để thử nghiệm. Hãy ghi thông số chốt vào GDD trước khi cân bằng.
