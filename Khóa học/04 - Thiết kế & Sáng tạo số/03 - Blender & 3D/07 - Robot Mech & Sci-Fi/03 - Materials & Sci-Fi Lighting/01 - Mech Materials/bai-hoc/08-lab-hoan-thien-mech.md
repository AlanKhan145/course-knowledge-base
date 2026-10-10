# Bài 08 — Lab tổng hợp: Hoàn thiện vật liệu cho robot Mech

## 1. Tổng quan

Trong bài lab này, người học hoàn thiện hệ vật liệu cho một robot Mech đã có mesh và ánh sáng. Kết quả kỳ vọng là robot có các phần kim loại sáng–tối rõ ràng, khớp xanh, cụm đèn đỏ, bình chứa tối bóng và ống nhựa xanh đậm. Có thể bổ sung một đoạn ống cơ khí nếu model có hình học mẫu phù hợp.

Đây là bài thực hành tổng hợp. Các bước ưu tiên tự thao tác trên model thay vì cung cấp một tệp scene hoặc mã tự động gán vật liệu.

## 2. Mục tiêu và điều kiện đầu vào

**Mục tiêu:** Tạo hệ vật liệu nhất quán, không bỏ sót mặt, có thể quan sát rõ chức năng các bộ phận khi nhìn toàn cảnh.

**Chuẩn bị:** Blender, scene có robot hoàn chỉnh về hình học và ánh sáng; các material `Light Metal`, `Dark Metal`, `Red Light` đã có hoặc được chuẩn bị trước. Lưu một bản scene dự phòng trước khi sửa nhiều material slots.

## 3. Quy trình thực hành

### 3.1. Giai đoạn A — Khung sáng–tối và đèn

1. Ẩn những object che khuất vùng cần thao tác bằng `H`.
2. Phân vùng `Light Metal` và `Dark Metal` trên cổ, chân và thân theo cấu trúc vỏ–lõi.
3. Dùng `L`, `Ctrl + I` và `Face Select` để lấy đúng các vùng cần tô.
4. Gán `Red Light` cho các đảo hình học của cụm đèn trước.

**Checkpoint A:** Không có nhóm bu lông hoặc mảnh nối quan trọng nào còn sai màu; đèn đỏ khác rõ với phần vỏ tối.

### 3.2. Giai đoạn B — Khớp xanh

1. Nhân bản material `Light Metal` thành `Blue Metal` độc lập.
2. Trong shader, dùng `Color Ramp` với điểm màu sáng tham chiếu `#0070FF` trên đường cấp `Base Color` thích hợp.
3. Gán `Blue Metal` cho phần vỏ khớp, `Dark Metal` cho mặt lõm, vòng mép và bu lông.
4. Dùng `Wireframe` và `Box Select` để tiếp cận các mặt ở phía trong, rồi quan sát lại từ nhiều góc.

**Checkpoint B:** Hai khớp tương tự đồng nhất về cách phối màu; khớp không bị lem màu hoặc bỏ sót các mảng nhỏ.

### 3.3. Giai đoạn C — Thân, giáp và bình chứa

1. Gán `Dark Metal` cho phần kết cấu trên thân và hông theo nhóm hình học.
2. Giữ các tấm ốp chọn lọc ở `Light Metal` để tạo điểm nhấn.
3. Tạo `Tank`, đặt `Metallic = 1.0` và màu tối tham chiếu `#303030`.
4. Giảm `Roughness` tới mức phản xạ thấy rõ dưới ánh sáng scene.
5. Chọn các đai giữ bình và gán lại `Light Metal`.

**Checkpoint C:** Bình có độ tối nhưng vẫn còn độ nổi khối, các đai giữ dễ nhận diện.

### 3.4. Giai đoạn D — Ống và hoàn thiện scene

1. Tạo `Tubes` riêng với màu xanh dương đậm, `Roughness` khoảng `0.3` và `Subsurface` tham chiếu khoảng `0.2` qua điều khiển tương ứng của phiên bản Blender.
2. Quan sát bề mặt nhựa của ống bên cạnh các khớp kim loại xanh.
3. Nếu muốn, nhân bản một đoạn ống có sẵn rồi tách bằng `P` → `Selection`, gắn vào thân và chỉnh bằng `G`, `S`, `E`.
4. Dùng `Alt + H` hiện toàn bộ object, trở về `Layout` và lưu bằng `Ctrl + S`.

**Checkpoint D:** Toàn bộ robot hiển thị lại; không có object nào vô tình bị ẩn và không có ống xuyên bất thường vào vỏ.

## 4. Kiểm tra kết quả

Quan sát robot ở ba mức: **toàn cảnh** để đánh giá bảng màu, **trung cảnh** để xem cấu trúc khớp và giáp, **cận cảnh** để kiểm tra bu lông, vòng mặt và đai bình. Nếu một màu trông không đúng, xác định nguyên nhân là **mặt gán sai**, **slot sai** hay **shader/ánh sáng**, rồi mới sửa.

| Tình huống | Hướng xử lý |
| --- | --- |
| Cả object đổi màu khi chỉ muốn đổi bulông | Thêm slot mới, chọn đúng mặt rồi `Assign` |
| Chỉnh Blue Metal nhưng Light Metal ở nơi khác cũng đổi | Tạo bản sao material độc lập |
| Khớp còn mảng sai màu ở phía sau | Kiểm tra ở `Wireframe`, bổ sung mặt thiếu |
| Bình tối nhưng không có highlight | Kiểm tra ánh sáng, `Metallic`, `Roughness` |
| Ống giống hệt kim loại xanh | Kiểm tra thuộc tính vật liệu phi kim và tán xạ nhẹ |
| Mất bộ phận khi nhìn toàn cảnh | Dùng `Alt + H` đúng mode và kiểm tra scene |

## 5. Sản phẩm cần nộp

- File `.blend` đã lưu với vật liệu phân bố hoàn chỉnh.
- Một ảnh chụp toàn cảnh robot trong chế độ hiển thị vật liệu hoặc rendered.
- Hai ảnh cận cảnh: một ảnh khớp xanh–tối, một ảnh bình chứa với đai sáng và hệ ống.

## 6. Checklist đánh giá

- [ ] `Light Metal` được giữ cho đúng mảng vỏ và các chi tiết nổi bật.
- [ ] `Dark Metal` có mặt ở khung, khe lõm, bulông và vùng bên trong khớp.
- [ ] `Red Light` chỉ gán cho các chi tiết đèn đã dự kiến.
- [ ] `Blue Metal` độc lập với `Light Metal`, có màu xanh nhất quán.
- [ ] Bình chứa sử dụng `Tank` tối bóng; đai giữ có màu sáng.
- [ ] Đường ống dùng `Tubes` và thể hiện cảm giác chất liệu khác kim loại.
- [ ] Các mặt phía sau và những vùng khuất đã được kiểm tra.
- [ ] Các object tạm ẩn đã được hiển thị lại.
- [ ] File Blender cuối cùng đã được lưu.

## 7. Câu hỏi ôn tập

**Câu 1.** Sau khi gán vật liệu, một số mặt trong khớp còn màu xanh không chủ ý. Cách xử lý đúng là gì?

A. Đổi màu World.  
B. Xóa tất cả đèn.  
C. Kiểm tra và chọn bổ sung các mặt trong, rồi gán `Dark Metal`.  
D. Chỉ tăng độ phân giải.

**Đáp án:** C. **Giải thích:** Sai màu ở vài mặt thường xuất phát từ phân vùng lựa chọn chưa đầy đủ.

**Câu 2.** Chỉnh Blue Metal xong nhưng vỏ ngoài khác cũng bị xanh. Nguyên nhân có khả năng nhất?

A. Material vẫn chia sẻ datablock với Light Metal thay vì bản sao độc lập.  
B. Do chế độ Wireframe.  
C. Do chỉ có một camera.  
D. Do đối tượng đã được lưu.

**Đáp án:** A. **Giải thích:** Thay đổi material chia sẻ ảnh hưởng tất cả vùng tham chiếu tới nó.

**Câu 3.** Bình chứa có màu tối nhưng khó đọc hình khối. Kiểm tra nào phù hợp nhất?

A. Chỉ đổi tên vật liệu.  
B. Chỉ bật Overlays.  
C. Chỉ di chuyển 3D Cursor.  
D. Xem lại `Metallic`, `Roughness` và ánh sáng của scene.

**Đáp án:** D. **Giải thích:** Độ nổi khối ở vật liệu kim loại tối cần phản xạ được ánh sáng.

**Câu 4.** Vì sao nên xem robot cả toàn cảnh lẫn cận cảnh?

A. Vì chỉ toàn cảnh mới chỉnh được material.  
B. Vì toàn cảnh đánh giá bố cục màu, còn cận cảnh phát hiện mặt/chi tiết sai.  
C. Vì cận cảnh sẽ thay đổi shader.  
D. Vì hai góc nhìn luôn cho cùng loại lỗi.

**Đáp án:** B. **Giải thích:** Hai khoảng quan sát hỗ trợ các mức kiểm tra khác nhau.

**Câu 5.** Bước kết thúc nào giúp tránh hiểu nhầm model bị thiếu bộ phận?

A. Chỉ đóng Shading Workspace.  
B. Xóa Collection.  
C. Dùng `Alt + H` hiện các object đã ẩn và kiểm tra toàn cảnh trước khi lưu.  
D. Chỉ đổi tên file.

**Đáp án:** C. **Giải thích:** Object bị ẩn tạm có thể khiến scene trông như thiếu mesh dù thực tế vẫn tồn tại.

## 8. Tổng kết

Một hệ vật liệu tốt không chỉ là tạo màu đẹp, mà còn là **phân đúng vật liệu theo chức năng cấu tạo** và **kiểm tra từng vùng**. Sau khi hoàn tất lab này, robot đã có cơ sở hình ảnh rõ ràng cho những bước chuẩn bị rig, animation và render ở các công đoạn khác.
