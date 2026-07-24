# 046 — Dino Claws

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 03 — Low-Poly Dinosaur |
| **Bài học** | Dino Claws |
| **Thời lượng** | 8:57 |
| **Chủ đề chính** | Tạo móng vuốt |

## 1. Mục tiêu bài học

- Chia bàn chân thành nhiều ngón bằng Loop Cut và Knife Tool.
- Extrude từng ngón chân thành móng vuốt nhọn, cong tự nhiên.
- Sử dụng Bevel để bo góc nhẹ, tránh các cạnh quá sắc/gãy khúc gây rối mắt.
- Kiểm soát số lượng chi tiết nhỏ (móng vuốt) sao cho vẫn hợp phong cách low-poly.

## 2. Nội dung chính

Móng vuốt là chi tiết nhỏ nhưng quan trọng để nhân vật khủng long trông đúng đặc trưng loài. Vì đây là các chi tiết nhỏ, cần cân bằng giữa độ chi tiết và số lượng polygon — quá nhiều cạnh nhỏ sẽ phá vỡ phong cách low-poly, quá ít sẽ khiến móng vuốt trông như khối vuông thô.

Quy trình tạo móng vuốt từ bàn chân đã dựng ở bài trước:

1. **Chia ngón**: dùng Loop Cut (Ctrl+R) trên mặt bàn chân để chia thành 3 phần bằng nhau (điển hình khủng long theropod có 3 ngón chính phía trước, có thể thêm 1 ngón sau nhỏ hơn).
2. **Tách các ngón**: dùng Knife Tool (K) hoặc chọn cạnh rồi Extrude từng phần riêng biệt để mỗi ngón trở thành một khối kéo dài độc lập.
3. **Extrude tạo móng**: từ đầu mỗi ngón, extrude thêm 1-2 đoạn ngắn, thu nhỏ dần (Scale nhỏ lại sau mỗi lần extrude) để tạo hình nhọn của móng vuốt.
4. **Bo cong móng**: dùng Proportional Editing hoặc di chuyển trực tiếp đỉnh móng lên/xuống để tạo độ cong quặp đặc trưng của móng vuốt thú săn mồi.
5. **Bevel nhẹ (Ctrl+B)** ở các cạnh gốc ngón để tránh chỗ nối ngón-bàn chân bị gãy góc quá đột ngột, đồng thời vẫn giữ nét góc cạnh low-poly ở phần thân móng.

Vì móng vuốt xuất hiện ở cả bàn chân sau (bài này) và có thể ở tay trước (bài Dino Face), nên áp dụng quy trình tương tự nhưng với tỉ lệ nhỏ hơn cho tay.

## 3. Quy trình thực hành gợi ý

1. Zoom vào khu vực bàn chân (Numpad . để View Selected).
2. Loop Cut chia bàn chân thành 3 (hoặc số ngón mong muốn) theo chiều ngang.
3. Extrude từng đầu ngón ra phía trước, thu Scale nhỏ dần qua mỗi lần extrude.
4. Chỉnh cong nhẹ từng móng bằng G kèm Proportional Editing hoặc chỉnh vertex trực tiếp.
5. Bevel (Ctrl+B) tại gốc ngón nối với bàn chân, kéo chuột để chỉnh số lượng đoạn bo.
6. Kiểm tra ở view Perspective gần để đảm bảo móng không xuyên (clip) vào nhau hoặc vào mặt đất.
7. Lặp lại đối xứng qua Mirror Modifier có sẵn, kiểm tra cả hai bàn chân đều khớp.

## 4. Phím tắt & công cụ liên quan

| Phím tắt | Chức năng |
|---|---|
| Ctrl+R | Loop Cut chia ngón |
| K | Knife Tool tách mesh thủ công |
| E | Extrude tạo từng đốt móng |
| S | Scale (thu nhỏ dần đầu móng) |
| Ctrl+B | Bevel bo góc gốc ngón |
| O | Proportional Editing khi bẻ cong móng |
| Numpad . | Zoom vào vùng đang chọn |

## 5. Lưu ý & lỗi thường gặp

- Extrude quá nhiều đoạn cho mỗi móng khiến chi tiết rối, không hợp phong cách low-poly.
- Quên Scale thu nhỏ dần khiến móng vuốt trông như ống trụ thay vì nhọn tự nhiên.
- Bevel với số đoạn (segment) quá cao làm móng bo tròn mất nét góc cạnh đặc trưng.
- Móng vuốt xuyên qua nhau hoặc xuyên mặt đất nếu không kiểm tra kỹ từ nhiều góc.
- Không kiểm tra Normals sau khi Knife/Extrude nhiều lần có thể tạo mặt bị đảo hướng.

## 6. Checklist thực hành

- [ ] Bàn chân đã được chia thành các ngón rõ ràng.
- [ ] Mỗi ngón có móng vuốt nhọn, hơi cong tự nhiên.
- [ ] Gốc ngón đã được Bevel nhẹ, không quá sắc hoặc quá tròn.
- [ ] Móng không bị xuyên chồng lên nhau hoặc xuyên mặt đất.
- [ ] Đối xứng trái/phải chính xác qua Mirror Modifier.

## 7. Tóm tắt

Bài học đi sâu vào chi tiết móng vuốt — điểm nhấn nhỏ nhưng góp phần lớn vào đặc trưng nhận diện của khủng long. Kỹ thuật chia ngón, extrude thu nhỏ dần và bevel nhẹ là công thức chung có thể áp dụng lại cho tay ở bài Dino Face tiếp theo.
