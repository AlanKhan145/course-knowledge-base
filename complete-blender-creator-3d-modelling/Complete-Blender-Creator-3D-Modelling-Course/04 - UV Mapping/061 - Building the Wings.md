# 061 — Building the Wings

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 04 — UV Mapping |
| **Bài học** | Building the Wings |
| **Thời lượng** | 11:49 |
| **Chủ đề chính** | Dựng cánh máy bay |

## 1. Mục tiêu bài học
- Dựng hình cánh máy bay dựa trên ảnh tham chiếu Top/Front.
- Tạo profile cánh máy bay (airfoil) với độ dày và độ vuốt thon hợp lý.
- Gắn kết (bridge/join) cánh vào thân máy bay một cách liền mạch.
- Tiếp tục tận dụng Mirror Modifier để dựng đối xứng cả hai cánh.

## 2. Nội dung chính
Cánh máy bay có đặc điểm hình học riêng: nhìn từ trên xuống (top view) có hình thang thon dần ra đầu cánh; nhìn từ mặt cắt ngang (cross-section) có dạng airfoil — mặt trên cong nhẹ, mặt dưới phẳng hơn hoặc cong ít hơn, mép trước (leading edge) tròn, mép sau (trailing edge) mỏng nhọn.

Cách tiếp cận dựng cánh phổ biến:
- Bắt đầu từ một mặt phẳng (plane) hoặc trích xuất một số face từ thân máy bay tại vị trí gắn cánh.
- Extrude dọc theo trục cánh (thường là trục X hoặc Y tùy hướng máy bay) nhiều lần, mỗi lần scale nhỏ dần để tạo độ thon (taper) từ gốc cánh đến đầu cánh.
- Thêm độ dày cho cánh bằng Solidify Modifier hoặc bằng cách extrude/inset thủ công để tạo mặt cắt airfoil đơn giản (không nhất thiết phải mô phỏng khí động học chính xác cho một dự án học tập cơ bản).
- Dùng Loop Cut để thêm các đoạn dọc theo chiều dài cánh nếu cần uốn cong nhẹ hoặc thêm chi tiết (ví dụ điểm gắn động cơ, đèn tín hiệu).

Việc gắn cánh vào thân cần đảm bảo mesh liền mạch, không có khe hở: có thể dùng `Bridge Edge Loops` để nối các cạnh rời giữa gốc cánh và lỗ hổng tương ứng trên thân, hoặc dùng Boolean Modifier (Union) nếu cánh và thân là hai mesh riêng biệt rồi hợp nhất, tuy Boolean thường tạo topology phức tạp hơn cần dọn dẹp sau đó.

Vì máy bay đối xứng, chỉ cần dựng một bên cánh và để Mirror Modifier (đã áp dụng từ bài trước cho thân) tự động tạo cánh còn lại, miễn là cánh được model ở đúng phía và nằm trong phạm vi ảnh hưởng của modifier.

## 3. Quy trình thực hành gợi ý
1. Xác định vị trí gốc cánh trên thân máy bay dựa theo ảnh tham chiếu Top và Front.
2. Extrude từ cạnh/mặt thân tại vị trí gắn cánh, kéo dài theo hướng cánh, scale nhỏ dần qua từng lần extrude để tạo độ thon.
3. Kiểm tra hình dạng cánh từ góc nhìn Top (Numpad 7) để khớp đường viền hình thang trong ảnh tham chiếu.
4. Thêm độ dày bằng Solidify Modifier hoặc extrude mặt cắt để tạo airfoil đơn giản.
5. Dùng Bridge Edge Loops hoặc chỉnh tay để nối liền mạch cánh với thân, tránh khe hở hoặc chồng mặt (overlapping faces).
6. Kiểm tra lại toàn bộ trong Perspective View và xác nhận Mirror Modifier tạo đúng cánh đối xứng bên còn lại.
7. Recalculate Normals (`Shift+N`) nếu phát hiện mặt bị đảo pháp tuyến sau các thao tác extrude/bridge.

## 4. Phím tắt & công cụ liên quan
| Phím tắt | Chức năng |
|---|---|
| `E` | Extrude |
| `S` | Scale (tạo độ thon dần cho cánh) |
| `Ctrl+R` | Loop Cut |
| `Edge menu → Bridge Edge Loops` | Nối liền hai vòng cạnh rời |
| `Shift+N` | Recalculate Normals (đưa pháp tuyến về đúng hướng ra ngoài) |
| `Numpad 7` | Góc nhìn Top, dùng để đối chiếu hình dạng cánh |

## 5. Lưu ý & lỗi thường gặp
- Scale cánh không đều qua các lần extrude tạo cánh gồ ghề thay vì đường viền thon mượt như trong ảnh tham chiếu.
- Không kiểm tra góc nhìn Top khiến hình dạng cánh (độ thon, góc quét) bị sai dù nhìn từ Front vẫn có vẻ ổn.
- Bridge Edge Loops giữa hai vòng cạnh có số lượng vertex không khớp sẽ báo lỗi hoặc tạo topology xoắn; cần đảm bảo số vertex hai bên bằng nhau.
- Quên kiểm tra normal sau khi bridge/extrude phức tạp dễ gây lỗi bóng đổ đen hoặc mặt trong suốt khi render.

## 6. Checklist thực hành
- [ ] Đã dựng được hình dạng cánh thon dần theo đúng ảnh tham chiếu Top.
- [ ] Đã thêm độ dày/mặt cắt airfoil đơn giản cho cánh.
- [ ] Đã nối cánh với thân liền mạch, không có khe hở.
- [ ] Đã kiểm tra Mirror Modifier tạo đúng cánh đối xứng và normal không bị đảo.

## 7. Tóm tắt
Bài học tiếp nối việc dựng thân máy bay bằng cách xây dựng cánh — bộ phận có hình dạng thon và mặt cắt airfoil đặc trưng — rồi gắn kết liền mạch vào thân, tận dụng Mirror Modifier để hoàn thành cả hai bên cánh một cách đối xứng.
