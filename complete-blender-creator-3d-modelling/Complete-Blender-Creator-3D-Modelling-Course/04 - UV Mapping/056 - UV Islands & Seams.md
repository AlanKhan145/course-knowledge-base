# 056 — UV Islands & Seams

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 04 — UV Mapping |
| **Bài học** | UV Islands & Seams |
| **Thời lượng** | 10:06 |
| **Chủ đề chính** | UV Island và Seam |

## 1. Mục tiêu bài học
- Hiểu khái niệm seam và vai trò của nó trong việc "cắt" mesh trước khi unwrap.
- Hiểu khái niệm UV island — nhóm các face liền kề không bị seam chia cắt.
- Biết cách đánh dấu và xóa seam bằng Ctrl+E.
- Biết cách chọn cạnh (edge loop, edge ring) hợp lý để đặt seam sao cho UV ít méo và dễ texturing.

## 2. Nội dung chính
**Seam** là các cạnh (edge) được đánh dấu để báo cho Blender biết "hãy cắt mesh tại đây" khi thực hiện Unwrap, giống như việc cắt một hộp giấy dọc theo các cạnh để trải phẳng nó ra. Seam được đánh dấu qua menu Edge (`Ctrl+E → Mark Seam`) sau khi chọn các cạnh mong muốn ở Edit Mode, và hiển thị màu đỏ trên mesh.

**UV island** là một nhóm các face liền kề nhau, không bị ngăn cách bởi seam, được unwrap thành một mảnh liền trong UV space. Một mesh phức tạp thường được chia thành nhiều island: mỗi island cần đủ lớn để chứa chi tiết texture, nhưng cũng cần được sắp xếp (pack) gọn gàng để tận dụng không gian UV 0–1.

Nguyên tắc chọn seam:
- Đặt seam ở những vị trí ít bị nhìn thấy hoặc đường nét tự nhiên của mô hình (ví dụ theo cạnh dưới, đường viền, khe nối).
- Seam nên chia mesh thành các island có hình dạng gần phẳng để giảm méo (distortion) khi unwrap.
- Tránh tạo quá nhiều seam nhỏ lẻ — sẽ sinh ra nhiều island rời rạc, khó quản lý và dễ lộ đường nối texture.

Sau khi đánh seam, bật **Live Unwrap** (trong menu UV) giúp xem UV cập nhật theo thời gian thực khi seam hoặc mesh thay đổi, rất hữu ích khi tinh chỉnh.

## 3. Quy trình thực hành gợi ý
1. Chọn một mesh có hình dạng phức tạp hơn khối cơ bản (ví dụ mesh dạng hộp có bo góc).
2. Chuyển sang Edge Select Mode (`2`), chọn các cạnh dự định làm seam theo nguyên tắc "ít lộ, dễ trải phẳng".
3. Đánh seam bằng `Ctrl+E → Mark Seam`.
4. Chọn toàn bộ mesh (`A`), nhấn `U → Unwrap` để xem island được tạo ra.
5. Bật Live Unwrap, thử thêm/bớt seam và quan sát UV island thay đổi trực tiếp trong UV Editor.
6. Dùng checker texture để kiểm tra độ méo của từng island; điều chỉnh seam nếu island bị kéo dãn nhiều.
7. Nếu cần bỏ seam, chọn lại các cạnh đó và dùng `Ctrl+E → Clear Seam`.

## 4. Phím tắt & công cụ liên quan
| Phím tắt | Chức năng |
|---|---|
| `Ctrl+E` | Mở Edge menu (Mark Seam, Clear Seam...) |
| `2` | Chuyển sang Edge Select Mode |
| `Alt+Click` (trên cạnh) | Chọn edge loop nhanh |
| `Ctrl+Alt+Click` | Chọn edge ring |
| `U` | Mở menu Unwrap sau khi đã đánh seam |
| `A` / `Alt+A` | Chọn tất cả / bỏ chọn tất cả |

## 5. Lưu ý & lỗi thường gặp
- Quên chọn toàn bộ mesh trước khi Unwrap khiến chỉ một phần mesh được unwrap lại.
- Đặt seam giữa các mặt lớn liền mạch khiến texture bị chia cắt không cần thiết, lộ đường nối rõ ràng.
- Không kiểm tra Live Unwrap/checker texture nên không phát hiện được island bị méo cho đến khi texture thật đã áp.
- Đặt seam quá ít khiến mesh dạng cong (như hình trụ) bị kéo dãn nghiêm trọng khi trải phẳng.

## 6. Checklist thực hành
- [ ] Đã hiểu và phân biệt được khái niệm seam và UV island.
- [ ] Đã thực hành đánh dấu và xóa seam bằng Ctrl+E.
- [ ] Đã bật Live Unwrap và quan sát UV thay đổi theo seam.
- [ ] Đã kiểm tra độ méo UV bằng checker texture và điều chỉnh lại seam nếu cần.

## 7. Tóm tắt
Seam và UV island là hai khái niệm cốt lõi của UV mapping: seam xác định nơi mesh bị "cắt", còn island là kết quả của quá trình cắt đó. Đặt seam hợp lý giúp UV ít méo, dễ texturing và ẩn đường nối một cách tự nhiên — kỹ năng này sẽ được áp dụng ngay ở bài tiếp theo với mô hình thùng gỗ.
