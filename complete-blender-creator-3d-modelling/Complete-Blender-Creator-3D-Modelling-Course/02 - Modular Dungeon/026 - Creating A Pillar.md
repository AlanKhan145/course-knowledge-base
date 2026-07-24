# 026 — Creating A Pillar

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 02 — Modular Dungeon |
| **Bài học** | Creating A Pillar |
| **Thời lượng** | 11:30 |
| **Chủ đề chính** | Tạo cột đá |

## 1. Mục tiêu bài học

- Dựng hình dáng cơ bản của một cột đá (pillar) gồm đế (base), thân (shaft) và đỉnh (capital).
- Luyện kỹ năng box modelling kết hợp Cylinder để tạo cấu trúc kiến trúc cổ điển.
- Sử dụng Loop Cut, Scale, Extrude để phân đoạn và tạo hình khối các phần của cột.
- Chuẩn bị nền tảng hình học để hai bài tiếp theo thêm chi tiết bằng Bevel, Knife, Bisect.

## 2. Nội dung chính

Cột đá kiến trúc cổ điển thường có 3 phần rõ rệt: đế (base) loe rộng ở dưới, thân (shaft) hình trụ thon dài, và đỉnh cột (capital) loe rộng ở trên đỡ phần trần/dầm. Có thể bắt đầu từ Cylinder (12–16 cạnh) làm thân, sau đó dùng `Ctrl+R` để thêm loop cut phân chia vùng đế, thân, đỉnh theo chiều cao.

Với mỗi vùng, chọn loop tương ứng và `S` (Scale) để tạo độ loe/thon: đế và đỉnh scale to hơn thân giữa. Có thể extrude thêm các đoạn ở đế/đỉnh để tạo bậc thang (step) — đặc trưng kiến trúc cổ, bằng cách chọn face trên/dưới, `E` (Extrude) rồi `S` để thu/phóng tạo dạng bậc.

Một cách tiếp cận khác là box modelling: bắt đầu từ Cube vuông cho đế và đỉnh (dạng khối vuông), rồi nối với thân trụ tròn ở giữa — cách này giữ silhouette góc cạnh rõ ràng hơn, phù hợp phong cách stylized dungeon.

Trong bài này chỉ tập trung dựng khối lớn (blockout) chuẩn tỉ lệ; các chi tiết rãnh, hoa văn sẽ được thêm ở hai bài tiếp theo bằng Bevel và Knife/Bisect.

## 3. Quy trình thực hành gợi ý

1. Add Cylinder làm thân cột, chỉnh số cạnh phù hợp phong cách (12–16).
2. Loop Cut phân chia chiều cao thành các vùng: đế, thân, đỉnh.
3. Scale từng vùng để tạo độ loe ở đế và đỉnh, thon ở thân.
4. Extrude thêm các bậc thang tại đế/đỉnh nếu muốn chi tiết kiến trúc rõ hơn.
5. Kiểm tra tỉ lệ tổng thể (chiều cao) khớp với module tường sẽ dựng ở các bài sau.
6. Apply Scale/Rotation, đặt Origin ở đáy cột.
7. Đổi tên object thành "Pillar" và lưu lại làm base mesh cho hai bài tiếp theo.

## 4. Phím tắt & công cụ liên quan

| Phím tắt | Chức năng |
|---|---|
| `Ctrl+R` | Loop Cut phân đoạn chiều cao |
| `S` | Scale tạo độ loe/thon |
| `E` | Extrude tạo bậc thang |
| `Alt+S` | Shrink/Fatten (đẩy đều mặt theo pháp tuyến) |
| `Ctrl+A` | Apply Transform |
| `Numpad 1/3/7` | Chuyển góc nhìn Front/Side/Top để căn chỉnh tỉ lệ |

## 5. Lưu ý & lỗi thường gặp

- Không kiểm soát số cạnh Cylinder ngay từ đầu khiến việc chỉnh sửa sau này tốn công đổi lại toàn bộ mesh.
- Scale không đều theo trục Z lẫn X/Y cùng lúc dễ làm méo mặt cắt (nên scale theo trục cụ thể, ví dụ `S, Shift+Z`).
- Quên Apply Scale trước khi sang bài Bevel khiến Bevel Width không đều.
- Tỉ lệ chiều cao cột không khớp với chiều cao tường sẽ gây lệch khi lắp ráp scene ở bài 039.

## 6. Checklist thực hành

- [ ] Đã dựng đủ 3 phần: đế, thân, đỉnh cột.
- [ ] Đã tạo độ loe hợp lý ở đế và đỉnh.
- [ ] Đã kiểm tra tỉ lệ chiều cao so với module khác.
- [ ] Đã Apply Transform và đặt Origin ở đáy.
- [ ] Đã đổi tên object rõ ràng.

## 7. Tóm tắt

Bài học dựng khối cơ bản (blockout) của cột đá gồm đế, thân, đỉnh bằng Loop Cut và Scale trên nền Cylinder — nền tảng hình học sẽ được bồi thêm chi tiết bằng Bevel và Knife/Bisect trong hai bài kế tiếp.
