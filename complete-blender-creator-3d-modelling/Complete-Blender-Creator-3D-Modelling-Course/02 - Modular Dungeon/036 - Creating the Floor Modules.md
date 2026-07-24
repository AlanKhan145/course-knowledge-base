# 036 — Creating the Floor Modules

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 02 — Modular Dungeon |
| **Bài học** | Creating the Floor Modules |
| **Thời lượng** | 11:41 |
| **Chủ đề chính** | Tạo các module sàn |

## 1. Mục tiêu bài học

- Dựng module sàn (floor tile) đúng kích thước lưới, khớp với module tường đã tạo.
- Tạo chi tiết bề mặt sàn đá (khối lát, khe nối) bằng Loop Cut, Inset, Bevel.
- Sử dụng Array modifier để xem trước nhanh hiệu ứng lát sàn lặp lại trước khi lắp ráp scene thật.
- Đảm bảo UV/scale nhất quán để vật liệu không bị kéo giãn khi nhân bản.

## 2. Nội dung chính

Module sàn thường là phần đơn giản nhất về hình học (một tấm phẳng dày vừa phải) nhưng quan trọng về mặt chi tiết bề mặt vì đây là diện tích lớn, dễ bị người xem chú ý sự lặp lại nếu không đủ biến thiên. Bắt đầu từ Cube dẹt (Plane cũng có thể dùng nếu không cần độ dày), scale đúng kích thước module (khớp chiều rộng tường), Apply Scale.

Tương tự tường, dùng Loop Cut chia bề mặt sàn thành lưới các phiến đá lát (floor slab), sau đó Inset (`I`) từng phiến với giá trị nhỏ để tạo khe nối (grout line) giữa các phiến, rồi Extrude/Shrink-Fatten nhẹ để một số phiến nhô cao/thấp hơn chút ít — mô phỏng sàn đá cổ không hoàn toàn phẳng tuyệt đối.

**Array modifier** (Add Modifier > Generate > Array) hữu ích để xem trước nhanh cảnh sàn lát rộng: thiết lập Count và Relative Offset theo trục X/Y để nhân bản tạm thời module sàn thành một khu vực lớn, kiểm tra xem chi tiết có tạo cảm giác lặp lại rõ rệt (repetition) hay không trước khi thực sự đưa vào lắp ráp scene ở bài 039. Sau khi kiểm tra xong, có thể xoá Array modifier (chỉ dùng để preview) và giữ lại module sàn gốc.

Cũng cần lưu ý **UV mapping** cơ bản: nếu texture sẽ áp dụng theo toạ độ UV (thay vì hoàn toàn procedural theo Generated coordinates), cần đảm bảo UV của mỗi module sàn có tỷ lệ nhất quán (dùng `U > Smart UV Project` hoặc `U > Unwrap` sau khi Mark Seam hợp lý) để khi nhân bản nhiều module, texture không bị kéo giãn hoặc lệch tỷ lệ giữa các module.

## 3. Quy trình thực hành gợi ý

1. Add Cube dẹt (hoặc Plane có độ dày), scale đúng kích thước module khớp với tường, Apply Scale.
2. Loop Cut chia bề mặt thành lưới các phiến đá lát.
3. Inset từng phiến để tạo khe nối, Extrude/Shrink-Fatten nhẹ tạo độ lồi lõm tự nhiên.
4. Bevel các cạnh phiến để bắt sáng tốt hơn tại khe nối.
5. Thêm Array modifier tạm thời (Count 3x3 chẳng hạn) để preview hiệu ứng lát sàn rộng, kiểm tra độ lặp lại.
6. Xoá Array modifier sau khi kiểm tra, giữ lại module sàn gốc.
7. Unwrap UV (Smart UV Project hoặc thủ công) nếu dự định dùng texture ảnh ở các bài sau.
8. Đặt Origin tại góc module để dễ căn lưới khi lắp ráp.

## 4. Phím tắt & công cụ liên quan

| Phím tắt | Chức năng |
|---|---|
| `Ctrl+R` | Loop Cut chia lưới phiến sàn |
| `I` | Inset Faces tạo khe nối |
| `Alt+S` | Shrink/Fatten tạo độ lồi lõm phiến |
| `Ctrl+B` | Bevel cạnh phiến |
| Array modifier | Preview nhanh hiệu ứng lát sàn lặp lại |
| `U` | Menu UV Unwrap / Smart UV Project |
| Mark Seam (`Ctrl+E`) | Đánh dấu đường cắt UV trước khi Unwrap |

## 5. Lưu ý & lỗi thường gặp

- Kích thước module sàn không khớp chiều rộng module tường gây lệch khi ghép góc.
- Khe nối (Inset) quá sâu hoặc quá rộng làm sàn trông như vỡ nứt thay vì các phiến lát liền mạch.
- Quên xoá Array modifier preview trước khi export/lắp ráp khiến nhân bản chồng chéo không kiểm soát.
- UV không nhất quán về tỷ lệ giữa các module gây texture bị kéo giãn khi nhìn tổng thể scene.

## 6. Checklist thực hành

- [ ] Đã tạo module sàn đúng kích thước khớp với tường.
- [ ] Đã tạo chi tiết khe nối và độ lồi lõm nhẹ giữa các phiến.
- [ ] Đã dùng Array modifier để preview và kiểm tra độ lặp lại.
- [ ] Đã Unwrap UV nhất quán cho module sàn.
- [ ] Đã đặt Origin phù hợp để dễ căn lưới khi lắp ráp.

## 7. Tóm tắt

Bài học dựng module sàn đá với chi tiết khe nối và độ lồi lõm tự nhiên, đồng thời dùng Array modifier để kiểm tra trước hiệu ứng lát sàn trên diện rộng — giúp phát hiện sớm vấn đề lặp lại đơn điệu trước khi chính thức lắp ráp scene.
