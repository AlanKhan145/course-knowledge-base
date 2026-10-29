# Bài 08 — Thực hành tổng hợp, đánh giá và khắc phục lỗi

**Loại bài:** Tài liệu **bổ sung sư phạm**, không có bài cuối khóa riêng trong video gốc.

## 1. Đề bài thực hành

Từ một đầu nhân vật 3D đã có miệng và edge loop hợp lý, hoàn thành:

1. Khoang miệng có chiều sâu, không nhìn xuyên từ góc thông dụng.
2. Hai cung nướu tương xứng với khuôn hàm.
3. Bốn nhóm hình thể răng có thể phân biệt: cửa, nanh, tiền hàm, hàm.
4. Một lưỡi có độ dày, vị trí gốc lưỡi hợp lý.
5. Bố cục đặt đúng, không giao cắt lớn; hoàn thành bước nối cavity với head nếu topology phù hợp.

## 2. Sản phẩm cần nộp

- File `character_mouth_final.blend` với tên object rõ ràng.
- 4 ảnh chụp viewport: **front**, **side**, **top**, **mouth open/cutaway**.
- Một tệp ghi chú ngắn: nêu đã dùng modifier nào, còn lỗi nào, sẽ rig thế nào.
- *Tùy chọn:* ảnh close-up có vật liệu đơn giản, không bắt buộc hoàn thiện texture.

## 3. Rubric (100 điểm)

| Tiêu chí | Trọng số | Dấu hiệu đạt |
|---|---:|---|
| Hình khối cavity | 20 | Có chiều sâu, thành miệng không tự giao, không hở rõ |
| Hình thể nướu và răng | 25 | Cung nướu hợp lý; răng phân loại được |
| Lưỡi | 15 | Đủ độ dày, shape mềm, đặt đúng vị trí |
| Topology và normals | 15 | Seam sạch, không có vertex hàn nhầm |
| Tổ chức object và pivot | 10 | Dễ thao tác, gốc xoay hợp lý |
| Kiểm tra ở góc nhìn/pose | 15 | Có bằng chứng kiểm tra các view và miệng mở |

## 4. Bộ câu hỏi tự kiểm tra

1. Cavity khác gì với một lỗ mở không có mặt bên trong?
2. Tại sao cần quan sát cả từ front và side khi extrude?
3. Tại sao Clipping trong Mirror có thể gây phiền khi đặt răng?
4. Khi nào nên thêm loop support trước Subdivision?
5. Về hình khối, răng nanh khác răng cửa ra sao?
6. `Ctrl+J` có làm hai vòng vertex được hàn tự động không?
7. Vị trí pivot ảnh hưởng thế nào đến thao tác xoay lưỡi?
8. Vì sao không nên gộp toàn bộ răng với da đầu trước khi rig?

<details>
<summary>Gợi ý đáp án</summary>

1. Cavity tạo thể tích và các mặt che vùng trống phía trong.
2. Front cho đường cung/đối xứng; side cho độ sâu và tiết diện.
3. Clipping có thể giữ vertex ở mặt phẳng đối xứng, gây khó khi cần dịch khỏi vùng giữa.
4. Khi cần bảo toàn dáng mép/góc khi làm mượt.
5. Nanh thuôn và có đỉnh nổi bật; cửa bản rộng với mép cắn mỏng/phẳng.
6. Không. Phải kiểm tra và hàn ở bước riêng nếu cần.
7. Pivot gần gốc giúp xoay theo chuyển động có ý nghĩa hơn tâm hình học.
8. Chuyển động/weight khác nhau; việc gộp quá sớm gây khó kiểm soát rig.

</details>

## 5. Bảng xử lý sự cố

| Vấn đề | Kiểm tra nhanh | Phương án xử lý |
|---|---|---|
| Nhìn xuyên đầu khi mở miệng | Cuối cavity có hở? | Đóng mặt cuối hoặc bổ sung hình học che hợp lý |
| Lỗ giữa môi và cavity | Hai edge loops có khớp? | Căn vertex, bridge và merge có chọn lọc |
| Một đường gấp cứng trong miệng | Các vòng extrude đổi hướng gấp? | Nắn lại đường cong, phân bố loop đều |
| Nướu bị nhọn/chảy | Subdivision kéo giãn ở vùng mép | Thêm support loop, hiệu chỉnh cage mesh |
| Hai răng dính vào nhau | Clipping hoặc vertex ở seam? | Tách lại và kiểm tra modifier |
| Normals kỳ lạ sau lật Z | Scale âm hoặc mặt bị lật? | Kiểm tra Transform, Recalculate Normals |
| Lưỡi trông như tờ giấy | Solidify chưa bật hoặc quá mỏng | Tăng thickness phù hợp |
| Lưỡi xoay sai tâm | Origin nằm giữa object? | Đặt Origin về gốc lưỡi |
| Hàm dưới quay vòng lạ | Origin/bone pivot đặt sai? | Đặt hinge gần vùng khớp hàm, điều chỉnh rig |
| Model chậm | Subdivision quá cao, nhiều răng chi tiết? | Giảm viewport level, tối ưu mesh và LOD |

## 6. Kế hoạch thực hành gợi ý

- **Buổi 1:** Phác và tạo cavity; kiểm tra chiều sâu.
- **Buổi 2:** Dựng cung nướu và ít nhất hai mẫu răng.
- **Buổi 3:** Hoàn thiện răng hai hàm, thêm lưỡi.
- **Buổi 4:** Lắp ráp, kiểm tra normals, chụp ảnh kết quả.

## 7. Tổng kết

Cốt lõi của bài học không phải khắc từng chiếc răng như mô hình giải phẫu, mà là tạo **một khoang miệng có chiều sâu, các khối nhận dạng được, đường cong sạch, vận hành được ở biểu cảm mở/đóng miệng**. Khi các phần này ổn, bạn mới nên chuyển qua texture, rig và animation.

**Quay về:** [Tổng quan khóa học](README.md).
