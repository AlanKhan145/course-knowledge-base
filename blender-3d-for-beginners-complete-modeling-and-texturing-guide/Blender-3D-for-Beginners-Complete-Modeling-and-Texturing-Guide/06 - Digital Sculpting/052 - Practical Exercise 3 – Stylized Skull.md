# 052 — Practical Exercise 3 – Stylized Skull

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 06 — Digital Sculpting |
| **Bài học** | Practical Exercise 3 – Stylized Skull |
| **Thời lượng** | 24:28 |
| **Chủ đề chính** | Sculpt hộp sọ cách điệu — bài tập khép lại module sculpting |

## 1. Mục tiêu bài học

- Sculpt một hộp sọ với tỷ lệ giải phẫu cơ bản nhưng phóng đại theo phong cách cách điệu.
- Luyện tập Symmetry, Crease và Scrape trên một chủ thể có nhiều mặt phẳng và hốc rõ rệt.
- Tổng kết toàn bộ kỹ thuật sculpting của module qua bài tập cuối cùng.

## 2. Nội dung chính

Bài tập khép lại module với một chủ thể vừa có yếu tố giải phẫu (cần tỷ lệ hợp lý để nhận ra ngay là hộp sọ) vừa cho phép tự do cách điệu (phóng đại hốc mắt, thu nhỏ hàm, làm nhọn răng nanh) — tổng hợp toàn bộ kỹ thuật đã học từ ba bài tập trước.

**Blocking**: base mesh từ Sphere làm sọ, Voxel Remesh, dùng Grab/Clay Strips định hình khối cầu sọ phía sau-trên, thu hẹp dần về phía hàm dưới, bật Symmetry X vì hộp sọ đối xứng hoàn toàn trái-phải. **Hốc mắt (eye sockets)** là chi tiết đặc trưng nhất: dùng **Scrape** kết hợp Clay Strips âm (giữ Ctrl để Deflate/khoét vào) tạo hai hốc sâu hình oval, với gờ xương phía trên hốc mắt nhô nhẹ ra bằng Clay Strips dương.

**Xương gò má và hàm**: dùng Scrape để tạo các mặt phẳng góc cạnh đặc trưng của xương gò má, Crease để nhấn mạnh đường viền hàm và khớp nối hàm-sọ. **Răng**: có thể sculpt trực tiếp bằng Snake Hook kéo dài từng răng nanh cách điệu (phóng đại dài hơn răng thật), hoặc dựng riêng răng bằng các Cone nhỏ rồi Boolean/hợp nhất vào hàm — tùy độ chi tiết mong muốn. Cuối cùng, dùng **Pinch** cho các cạnh xương sắc (sống mũi, gờ trán) và **Smooth** có kiểm soát để cân bằng giữa độ sắc cạnh cách điệu và cảm giác xương tự nhiên.

## 3. Quy trình thực hành gợi ý

1. Dựng base mesh từ Sphere, Voxel Remesh, bật Symmetry X.
2. Blocking khối sọ tổng thể: vòm sọ tròn phía sau, thu hẹp dần về hàm dưới.
3. Khoét hai hốc mắt bằng Scrape/Deflate, thêm gờ xương phía trên bằng Clay Strips.
4. Tạo mặt phẳng gò má bằng Scrape, nhấn viền hàm bằng Crease.
5. Thêm chi tiết răng (Snake Hook kéo dài hoặc Cone rời ghép vào).
6. Pinch các cạnh xương sắc, Smooth cân bằng tổng thể, kiểm tra silhouette từ góc chính diện và nghiêng.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt |
|---|---|
| Deflate (khoét vào, ngược Inflate) | Giữ `Ctrl` khi dùng brush Inflate |
| Voxel Remesh | `R` |
| Symmetry trục X | Panel Symmetry |
| Pinch | Chọn brush Pinch trong thanh công cụ |

## 5. Lưu ý & lỗi thường gặp

- Hốc mắt đặt sai vị trí hoặc sai tỷ lệ (quá gần nhau/quá xa nhau) khiến hộp sọ mất đi tính nhận diện giải phẫu cơ bản dù đã cách điệu.
- Quên bật Symmetry khi hộp sọ vốn là chủ thể đối xứng hoàn toàn (khác với bài đe ở 051) sẽ gây lãng phí thời gian và dễ lệch.
- Sculpt răng quá chi tiết trước khi tỷ lệ hàm-sọ tổng thể ổn định thường phải sculpt lại toàn bộ phần hàm.
- Scrape quá tay ở gò má có thể làm phẳng mất hoàn toàn độ cong tự nhiên của khối sọ, trông như đa giác thô thay vì xương.

## 6. Checklist thực hành

- [ ] Đã blocking đúng tỷ lệ tổng thể hộp sọ với Symmetry X.
- [ ] Đã tạo được hốc mắt sâu với gờ xương rõ ràng.
- [ ] Đã hoàn thiện gò má, viền hàm và chi tiết răng.
- [ ] Đã kiểm tra silhouette và tính nhận diện "hộp sọ" từ nhiều góc nhìn.

## 7. Tóm tắt

Hộp sọ cách điệu là bài tập tổng kết Module 06, đòi hỏi cân bằng giữa tỷ lệ giải phẫu hợp lý và sự tự do cách điệu — cùng với ba bài tập trước, nó hoàn thiện bộ kỹ năng sculpting sẽ được áp dụng trực tiếp vào việc sculpt cơ thể nhân vật ếch fantasy ở Module 08.
