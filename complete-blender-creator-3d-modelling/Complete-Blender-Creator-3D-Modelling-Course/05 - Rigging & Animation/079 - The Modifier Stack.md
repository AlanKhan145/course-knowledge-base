# 079 — The Modifier Stack

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 05 — Rigging & Animation |
| **Bài học** | The Modifier Stack |
| **Thời lượng** | 8:54 |
| **Chủ đề chính** | Tìm hiểu thứ tự Modifier Stack |

## 1. Mục tiêu bài học

- Hiểu Modifier Stack là gì và tại sao thứ tự các modifier ảnh hưởng đến kết quả cuối cùng.
- Biết cách sắp xếp lại thứ tự modifier bằng kéo thả hoặc menu dropdown.
- Nắm được cách kết hợp phổ biến giữa Bevel, Mirror, Solidify và Subdivision Surface.
- Biết cách Apply modifier khi cần chuyển kết quả thành mesh thật.

## 2. Nội dung chính

Modifier Stack trong Blender hoạt động theo nguyên tắc tuần tự từ trên xuống dưới: mỗi modifier nhận đầu vào là kết quả đã qua modifier phía trên nó, xử lý, rồi truyền kết quả xuống modifier tiếp theo. Vì vậy, cùng một tập modifier nhưng thứ tự khác nhau sẽ cho ra kết quả hình học hoàn toàn khác nhau.

Một ví dụ kinh điển là kết hợp Mirror và Subdivision Surface: nếu đặt Mirror trước Subdivision Surface, đường nối ở giữa (nơi mirror) sẽ được subdivide mượt mà cùng với phần còn lại của mesh; nhưng nếu đặt Subdivision Surface trước Mirror, đường nối giữa có thể xuất hiện khe hở hoặc gấp khúc vì mỗi nửa được subdivide độc lập trước khi ghép lại. Tương tự, Bevel thường nên đặt trước Subdivision Surface để phần vát cạnh được làm mượt cùng lúc với toàn bộ mesh, còn Solidify (tạo độ dày cho mesh phẳng) thường đặt trước hoặc sau Subdivision Surface tùy hiệu ứng độ dày mong muốn khi bo tròn.

Modifier Stack chỉ là một lớp hiển thị/tính toán không phá hủy (non-destructive) — mesh gốc trong Edit Mode không bị thay đổi cho đến khi người dùng chủ động nhấn Apply. Sau khi Apply, kết quả của modifier được "đóng băng" thành hình học thật của mesh, không thể chỉnh lại tham số modifier đó nữa (trừ khi Undo). Việc Apply thường thực hiện khi mesh đã hoàn thiện và chuẩn bị cho bước tiếp theo như rigging, vì một số modifier (đặc biệt Mirror, Subdivision Surface ở mức cao) có thể ảnh hưởng đến cách Weight Paint và Armature hoạt động nếu chưa Apply.

## 3. Quy trình thực hành gợi ý

1. Trên mesh TV đã dựng ở bài trước, thêm modifier Bevel để vát nhẹ các cạnh.
2. Thêm tiếp modifier Subdivision Surface bên dưới Bevel, quan sát kết quả.
3. Thử kéo thả đổi thứ tự hai modifier (Subdivision Surface lên trước Bevel) để so sánh khác biệt.
4. Nếu mesh có tính đối xứng, thử thêm Mirror modifier và thử nghiệm thứ tự với Subdivision Surface.
5. Khi hài lòng với kết quả, cân nhắc Apply các modifier cần thiết trước khi chuyển sang bước rigging hoặc UV.
6. Kiểm tra lại mesh trong Edit Mode sau khi Apply để xác nhận số lượng vertex/face đã đúng như mong đợi.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Chức năng |
|---|---|
| Kéo thả icon `::::` trên modifier | Đổi thứ tự modifier trong stack |
| Ctrl+A (trong menu Apply, hoặc dropdown modifier) | Apply modifier đã chọn |
| `Ctrl+2` / `Ctrl+3` | Thêm nhanh Subdivision Surface với mức Viewport tương ứng |
| Icon con mắt / màn hình trên modifier | Bật/tắt hiển thị modifier ở Viewport / Render / Edit Mode |
| `Shift+Ctrl+A` | Apply tất cả transform hoặc modifier tùy context menu |

## 5. Lưu ý & lỗi thường gặp

- Đặt Mirror sau Subdivision Surface gây khe hở hoặc gấp khúc ở đường nối giữa.
- Apply modifier quá sớm khi mesh chưa hoàn thiện, mất khả năng chỉnh sửa tham số sau này.
- Quên Apply Scale/Rotation của object trước khi Apply modifier có thể khiến hình dạng bị méo.
- Chồng quá nhiều modifier nặng (Subdivision Surface mức cao, Mirror, Solidify...) làm giảm hiệu năng viewport đáng kể.

## 6. Checklist thực hành

- [ ] Đã hiểu nguyên tắc modifier xử lý tuần tự từ trên xuống.
- [ ] Đã thử đổi thứ tự Bevel và Subdivision Surface để so sánh kết quả.
- [ ] Đã thử kết hợp Mirror với Subdivision Surface đúng thứ tự.
- [ ] Đã Apply các modifier cần thiết trên mesh TV khi hoàn thiện.

## 7. Tóm tắt

Modifier Stack xử lý tuần tự từ trên xuống dưới, vì vậy thứ tự sắp xếp modifier (đặc biệt giữa Mirror, Bevel và Subdivision Surface) quyết định trực tiếp kết quả hình học cuối cùng. Hiểu rõ nguyên tắc này giúp tránh lỗi hình học phổ biến khi modelling.
