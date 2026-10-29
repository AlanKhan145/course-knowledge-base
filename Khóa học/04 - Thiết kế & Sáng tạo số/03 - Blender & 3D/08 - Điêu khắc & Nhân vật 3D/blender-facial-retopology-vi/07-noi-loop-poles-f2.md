# Bài 07 — Nối edge loops, poles và tiện ích F2
**Tham chiếu video:** 13:49–19:45.


## Mục tiêu
Liên kết các loop miệng, mắt, mũi, má, trán, hàm thành một mesh; quản lý poles và độ đều quad.


## Công cụ
| Công cụ | Tác dụng |
|---|---|
| `E` | Đùn dải quads |
| `F` | Tạo cạnh/mặt trong vùng chọn |
| `Ctrl + R` | Loop Cut trong dải quad phù hợp |
| `G G` | Slide đỉnh/cạnh theo ngữ cảnh |
| `X > Dissolve Edges` | Bỏ cạnh mà cố giữ vùng mặt |
| `Alt + click` | Chọn loop khi có thể |
| `L` | Chọn phần mesh liên thông |
| F2 extension | Mở rộng lệnh F, tăng tốc dựng mặt |


**Cài F2:** Edit > Preferences > Get Extensions > tìm “F2”, xem tại https://extensions.blender.org/add-ons/f2/ .


## Pole là gì?
Một đỉnh bình thường trong lưới quad thường có 4 cạnh gặp. Nếu có 3 hoặc 5, gọi là **pole**. Pole cần thiết để chuyển hướng hoặc thay đổi số lượng dải edge loops. Vấn đề không phải “có pole”, mà là **đặt tại đâu và biến dạng thế nào**. Hạn chế tại nếp mí và khóe miệng.


## Quy trình kết nối
1. Chọn vùng dễ ở má, tạo các quad nối hai dải gần nhau.
2. Khi số đỉnh biên khác nhau, thêm loop hoặc chuyển hướng bằng một pole ở vùng ít biến dạng.
3. Dùng `G G` phân bố đều quads, kiểm tra mặt có bị vặn hay lộn normal.
4. `F` hoặc F2 để lấp những ô được xác định đúng. Đừng tạo n-gon khổng lồ trên má.
5. Dùng `L` để kiểm tra có đảo mesh chưa nối hay không.
6. Bật Wireframe, xem front, side, 3/4, xác nhận không mặt trùng.


```mermaid
flowchart LR
 A[Hai vòng cạnh cần nối] --> B{Số đỉnh tương thích?}
 B -->|Có| C[Tạo dải quads]
 B -->|Không| D[Loop Cut / Dissolve / pole 3-5]
 D --> C
 C --> E[Kiểm tra liên thông và biến dạng]
```


## Bài tập
Tìm một chỗ hai loop khác số đỉnh; vẽ cách chuyển hướng bằng một pole và mô tả vì sao chọn vị trí đó.


**Kết quả:** không còn các đảo topo tách biệt trên vùng mặt cần nối.