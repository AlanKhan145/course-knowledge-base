# 033 — Creating the Door Surround

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 02 — Modular Dungeon |
| **Bài học** | Creating the Door Surround |
| **Thời lượng** | 11:48 |
| **Chủ đề chính** | Tạo khung bao quanh cửa |

## 1. Mục tiêu bài học

- Dựng khung viền trang trí (door surround/archway) bao quanh lỗ cửa trên tường.
- Sử dụng kỹ thuật box modelling kết hợp Extrude theo profile để tạo khung có chiều sâu.
- Áp dụng Bevel để làm mềm các cạnh khung, tăng chi tiết kiến trúc.
- Đảm bảo kích thước khung khớp với lỗ cửa sẽ cắt ở bài tiếp theo.

## 2. Nội dung chính

Door surround là phần khung trang trí (thường bằng đá chạm khắc) bao quanh cửa ra vào, tạo điểm nhấn kiến trúc và che đường cắt thô của lỗ cửa trên tường. Cách tiếp cận phổ biến: dựng một mặt cắt ngang (profile) hình chữ U ngược hoặc hình vòm, rồi Extrude profile này dọc theo đường viền cửa.

Một quy trình thực tế trong Blender: bắt đầu từ Cube dẹt làm khối khung phía trên (lintel) và hai khối trụ/hộp đứng hai bên (jamb). Dùng Loop Cut và Inset để tạo các đường gờ chìm/nổi lặp lại theo chiều dài khung — mô phỏng các đường chỉ điêu khắc đá cổ điển. Với phần vòm cong phía trên cửa (nếu thiết kế có mái vòm), có thể dùng một phần Cylinder được cắt góc, hoặc dùng Curve modifier để uốn một profile thẳng theo đường cong.

Kích thước lỗ trống bên trong khung (nơi cửa sẽ đi qua) cần được đo và ghi nhớ chính xác — đây chính là kích thước sẽ dùng để cắt lỗ cửa trên tường ở bài học kế tiếp bằng Boolean modifier, nên khung và lỗ cắt phải khớp tuyệt đối để không hở khe hoặc chồng lấn.

Cuối cùng, Bevel các cạnh ngoài của khung với Width nhỏ và Segments vừa phải để bắt sáng tốt, tạo cảm giác chất liệu đá chạm khắc chắc chắn thay vì khối hộp thô.

## 3. Quy trình thực hành gợi ý

1. Xác định kích thước lỗ cửa mong muốn (rộng x cao) trước khi bắt đầu — đây là cơ sở cho toàn bộ khung.
2. Dựng khối lintel (thanh ngang trên đỉnh cửa) từ Cube, scale đúng chiều rộng khung.
3. Dựng hai khối jamb (trụ đứng hai bên) đối xứng, có thể dùng Mirror modifier như bài 031.
4. Thêm chi tiết đường gờ bằng Loop Cut + Inset dọc theo khung.
5. Bevel các cạnh ngoài để tăng chất lượng bắt sáng.
6. Join các phần khung thành một object "Door_Surround", kiểm tra Origin đặt tại tâm lỗ cửa.
7. Ghi lại chính xác kích thước lỗ trống bên trong khung để dùng cho bài cắt cửa tiếp theo.

## 4. Phím tắt & công cụ liên quan

| Phím tắt | Chức năng |
|---|---|
| `Ctrl+R` | Loop Cut tạo đường gờ dọc khung |
| `I` | Inset Faces |
| `E` | Extrude theo profile khung |
| `Ctrl+B` | Bevel cạnh khung |
| Mirror modifier | Đối xứng hai bên khung (jamb trái/phải) |
| `Ctrl+J` | Join các phần khung thành một object |
| `N` | Kiểm tra Dimensions của lỗ trống bên trong khung |

## 5. Lưu ý & lỗi thường gặp

- Không xác định kích thước lỗ cửa trước khi dựng khung khiến phải sửa lại nhiều lần.
- Khung và tường không cùng độ dày gây lồi/lõm bất hợp lý khi lắp ghép.
- Bevel cạnh trong (mép sát lỗ cửa) quá lớn làm thu hẹp không gian lỗ cửa thực tế.
- Không Join các phần khung lại khiến việc di chuyển/định vị khung vào tường ở bài lắp ráp trở nên rắc rối.

## 6. Checklist thực hành

- [ ] Đã xác định kích thước lỗ cửa trước khi dựng khung.
- [ ] Đã dựng đủ phần lintel (trên) và jamb (hai bên).
- [ ] Đã thêm chi tiết đường gờ và Bevel cạnh ngoài.
- [ ] Đã Join thành một object khung hoàn chỉnh.
- [ ] Đã ghi lại chính xác kích thước lỗ trống để dùng cho bài cắt cửa.

## 7. Tóm tắt

Bài học dựng khung trang trí bao quanh cửa, một chi tiết kiến trúc quan trọng giúp lỗ cửa trông hoàn thiện thay vì một khoảng cắt thô trên tường. Kích thước lỗ trống của khung sẽ được dùng làm chuẩn để cắt tường ở bài tiếp theo.
