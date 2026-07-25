# 041 — Skin Modifier

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 05 — Creative Modeling with Modifiers |
| **Bài học** | Skin Modifier |
| **Thời lượng** | 3:46 |
| **Chủ đề chính** | Tạo thể tích nhanh từ khung xương vertex/edge |

## 1. Mục tiêu bài học

- Hiểu cách Skin Modifier "bọc thịt" quanh một cấu trúc vertex/edge đơn giản.
- Biết chỉnh bán kính skin riêng cho từng vertex bằng Ctrl+A.
- Dựng nhanh được một base mesh dạng cây hoặc dạng khung nhân vật.

## 2. Nội dung chính

**Skin Modifier** hoạt động trên một mesh chỉ gồm vertex và edge (không cần face) — nó tự động sinh ra geometry hình ống/khối bao quanh mỗi cạnh, biến một "bộ khung que" đơn giản thành một hình khối có thể tích. Đây là cách cực nhanh để blocking ý tưởng: chỉ cần vẽ các đường edge dọc theo hình dáng mong muốn (thân cây, cành cây, hoặc khung xương thô của một nhân vật/sinh vật) rồi thêm modifier là có ngay khối 3D sơ bộ.

Bán kính "thịt" bọc quanh mỗi vertex có thể chỉnh riêng lẻ bằng cách chọn vertex trong Edit Mode và nhấn **Ctrl + A** (khác với Apply Transform ở Object Mode) rồi di chuột — cho phép tạo các đoạn phình to/thu nhỏ khác nhau dọc theo cùng một chuỗi edge, ví dụ thân cây to dần về gốc, cành nhỏ dần về ngọn. Vertex có thể đánh dấu là **Root** (gốc) để modifier biết đâu là điểm neo chính khi tính toán hướng bọc thịt tại các điểm chia nhánh.

Kết quả từ Skin Modifier thường thô ráp và có nhiều tam giác/n-gon tại điểm chia nhánh — thường được kết hợp thêm **Subdivision Surface** phía sau trong stack để làm mượt, hoặc Apply rồi tiếp tục chỉnh sửa thủ công/sculpt nếu cần chi tiết hữu cơ hơn.

## 3. Quy trình thực hành gợi ý

1. Thêm một Plane, xóa hết face chỉ giữ một vertex, Extrude nhiều lần để vẽ một "khung que" hình cây (thân chính, vài nhánh rẽ).
2. Thêm Skin Modifier, quan sát khối 3D tự động bọc quanh khung que.
3. Vào Edit Mode, chọn vertex ở gốc thân, nhấn `Ctrl + A` và kéo chuột để phình to bán kính ở đó.
4. Chọn các vertex ở đầu cành, thu nhỏ bán kính để tạo dáng thon dần.
5. Thêm Subdivision Surface phía sau Skin Modifier trong stack để làm mượt kết quả.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt |
|---|---|
| Thêm Skin Modifier | Modifier Properties > Add Modifier > Generate > Skin |
| Chỉnh bán kính skin của vertex đang chọn | `Ctrl + A` (trong Edit Mode) rồi kéo chuột |
| Đánh dấu vertex làm Root | Menu Vertex > Skin Roots Mark/Clear |

## 5. Lưu ý & lỗi thường gặp

- Nhầm lẫn `Ctrl + A` của Skin Modifier (chỉnh bán kính trong Edit Mode) với `Ctrl + A` Apply Transform ở Object Mode — hai lệnh hoàn toàn khác nhau tùy theo mode và ngữ cảnh.
- Khung que có quá nhiều điểm chia nhánh gần nhau dễ khiến Skin Modifier sinh ra hình học chồng chéo, lộn xộn tại điểm giao.
- Không thêm Subdivision Surface phía sau khiến kết quả trông rất góc cạnh, thô — cần cân nhắc tùy mục đích (blocking thô hay hình dáng cuối).

## 6. Checklist thực hành

- [ ] Đã vẽ được một khung que edge-only và áp dụng Skin Modifier.
- [ ] Đã chỉnh bán kính skin khác nhau cho các vertex khác nhau bằng Ctrl+A.
- [ ] Đã kết hợp Subdivision Surface để làm mượt kết quả.
- [ ] Đã dựng được một base mesh dạng cây hoặc khung nhân vật hoàn chỉnh.

## 7. Tóm tắt

Skin Modifier là công cụ blocking nhanh cực kỳ hiệu quả khi cần chuyển một ý tưởng hình dáng dạng "khung xương" thành khối 3D sơ bộ chỉ trong vài phút, thường dùng làm điểm khởi đầu trước khi tinh chỉnh hoặc sculpt tiếp.
