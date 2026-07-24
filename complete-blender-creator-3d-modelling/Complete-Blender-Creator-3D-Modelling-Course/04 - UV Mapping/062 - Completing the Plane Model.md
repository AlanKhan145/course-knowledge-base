# 062 — Completing the Plane Model

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 04 — UV Mapping |
| **Bài học** | Completing the Plane Model |
| **Thời lượng** | 9:32 |
| **Chủ đề chính** | Hoàn thiện mô hình máy bay |

## 1. Mục tiêu bài học
- Bổ sung các chi tiết còn thiếu của máy bay: đuôi (tail fin), cánh đuôi ngang (horizontal stabilizer), propeller/động cơ, kính buồng lái.
- Dọn dẹp mesh: merge vertex trùng, xóa mặt thừa, kiểm tra và sửa normal.
- Áp dụng (Apply) các modifier cần thiết khi mô hình đã hoàn chỉnh về hình khối.
- Kiểm tra tổng thể mô hình từ nhiều góc nhìn trước khi chuyển sang bước UV unwrap.

## 2. Nội dung chính
Sau khi đã có thân và cánh chính, bước hoàn thiện mô hình bao gồm thêm các chi tiết còn lại: đuôi đứng (vertical stabilizer/tail fin), đuôi ngang (horizontal stabilizer), propeller hoặc động cơ, và các chi tiết nhỏ như kính buồng lái, bánh đáp (landing gear) nếu dự án yêu cầu. Các bộ phận này thường được dựng bằng kỹ thuật tương tự cánh chính: extrude, scale thon dần, thêm độ dày bằng Solidify Modifier.

Trước khi chuyển sang bước UV mapping, việc dọn dẹp mesh (mesh cleanup) rất quan trọng:
- **Merge by Distance** (`M → By Distance` trong Edit Mode): gộp các vertex trùng hoặc quá gần nhau, thường phát sinh sau nhiều lần extrude/bridge/mirror.
- **Recalculate Normals** (`Shift+N`): đảm bảo tất cả pháp tuyến hướng ra ngoài đồng nhất; có thể bật Overlay → Face Orientation (xanh = đúng hướng, đỏ = sai hướng) để kiểm tra trực quan.
- Xóa các face/vertex thừa không sử dụng (loose geometry), kiểm tra bằng `Select → Select All by Trait → Non Manifold` để phát hiện lỗi topology.
- **Apply Modifier**: khi hình khối đã ưng ý, cân nhắc Apply Mirror Modifier (và các modifier khác như Solidify nếu không cần chỉnh sửa thêm) để "đóng băng" hình dạng cuối cùng, thuận tiện cho UV unwrap ở bài sau — vì UV thường được tạo trên mesh thực tế, không phải trên kết quả ảo của modifier.

Trước khi kết thúc, nên xoay mô hình toàn bộ 360°, kiểm tra ở chế độ Shading Solid và Material Preview, để phát hiện các lỗi hình khối, khe hở hoặc chi tiết chưa cân đối.

## 3. Quy trình thực hành gợi ý
1. Thêm các chi tiết còn thiếu: đuôi đứng, đuôi ngang, propeller, kính buồng lái... bằng extrude/inset tương tự các bước trước.
2. Ở Edit Mode, chọn toàn bộ mesh (`A`), chạy `M → By Distance` để gộp vertex trùng.
3. Chạy `Shift+N` để chuẩn hóa normal; bật Face Orientation overlay để kiểm tra trực quan.
4. Rà soát các phần rời rạc (loose geometry) và xóa nếu không cần thiết.
5. Khi hài lòng với hình khối, vào Object Mode, Apply các modifier cần thiết (Mirror, Solidify...) qua Modifier Properties.
6. Xoay mô hình 360° ở chế độ Material Preview để kiểm tra tổng thể trước khi chuyển sang unwrap.

## 4. Phím tắt & công cụ liên quan
| Phím tắt | Chức năng |
|---|---|
| `M` | Merge menu (By Distance, At Center...) |
| `Shift+N` | Recalculate Normals Outside |
| `Alt+N` | Mở menu Normals nâng cao (Flip, Recalculate Inside...) |
| `Ctrl+A` | Apply menu (Apply Modifier khi trỏ chuột vào modifier, hoặc Apply transform ở Object Mode) |
| `Z` | Pie menu chuyển Shading (Wireframe/Solid/Material Preview/Rendered) |

## 5. Lưu ý & lỗi thường gặp
- Apply Mirror Modifier quá sớm, trước khi hình khối hoàn chỉnh, khiến mọi chỉnh sửa sau đó phải làm thủ công trên cả hai bên thay vì tự động đối xứng.
- Không chạy Merge by Distance để lại các vertex trùng gây lỗi khi unwrap hoặc shading (bóng đổ loang lổ).
- Bỏ qua kiểm tra normal khiến một số mặt hiển thị tối/trong suốt bất thường khi render bằng Cycles hoặc Eevee.
- Thêm quá nhiều chi tiết nhỏ (rivet, ốc vít...) làm tăng số lượng polygon không cần thiết cho một mô hình học tập cơ bản.

## 6. Checklist thực hành
- [ ] Đã thêm đầy đủ các chi tiết còn thiếu: đuôi, propeller, kính buồng lái.
- [ ] Đã chạy Merge by Distance và Recalculate Normals trên toàn bộ mesh.
- [ ] Đã Apply các modifier cần thiết khi hình khối đã hoàn chỉnh.
- [ ] Đã kiểm tra mô hình từ nhiều góc nhìn, không còn khe hở hoặc lỗi hình khối rõ rệt.

## 7. Tóm tắt
Bài học hoàn thiện mô hình máy bay bằng cách bổ sung các chi tiết còn thiếu và dọn dẹp mesh kỹ lưỡng — bước chuẩn bị bắt buộc để đảm bảo quá trình UV unwrap và texturing ở các bài tiếp theo diễn ra suôn sẻ, không phát sinh lỗi từ hình học.
