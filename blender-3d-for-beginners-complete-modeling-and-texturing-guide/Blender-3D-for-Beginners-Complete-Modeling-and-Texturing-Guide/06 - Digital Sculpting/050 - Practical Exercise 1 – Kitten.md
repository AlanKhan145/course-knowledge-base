# 050 — Practical Exercise 1 – Kitten

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 06 — Digital Sculpting |
| **Bài học** | Practical Exercise 1 – Kitten |
| **Thời lượng** | 27:24 |
| **Chủ đề chính** | Sculpt một mèo con cách điệu — bài tập sculpting dài nhất khóa học |

## 1. Mục tiêu bài học

- Sculpt một nhân vật động vật hoàn chỉnh với tỷ lệ đầu-thân-chân-đuôi cân đối.
- Luyện tập gợi ý kết cấu lông (fur) chỉ bằng brush, không dùng particle hair.
- Rèn luyện quy trình blocking-refine-detail trên một chủ thể phức tạp hơn quân mã.

## 2. Nội dung chính

Đây là bài tập sculpting dài và phức tạp nhất module, đóng vai trò tổng ôn toàn bộ kỹ thuật đã học. Base mesh xuất phát từ một **Sphere** làm thân, Voxel Remesh về mật độ vừa phải, sau đó blocking bằng **Grab** và **Clay Strips** để định hình tỷ lệ đặc trưng của mèo con: đầu to so với thân (tỷ lệ "baby schema" tạo cảm giác dễ thương), thân ngắn, chân ngắn mập, đuôi thon dài.

**Blocking đầu**: tạo khối má phính bằng Inflate, hốc mắt bằng Scrape/Dent nhẹ, mũi nhỏ bằng Pinch, và tai tam giác bằng Snake Hook kéo ra rồi dẹt bằng Flatten/Scrape. **Blocking thân và chân**: bốn chân ngắn dùng Clay Strips đắp khối trụ tròn, bàn chân dẹt hơi loe ra, đuôi kéo dài bằng Snake Hook rồi làm thon dần về cuối bằng Pinch.

**Chi tiết lông (fur suggestion)**: thay vì dùng hệ thống Particle Hair (nằm ngoài phạm vi module này), lông được gợi ý bằng brush **Clay Strips** hoặc một brush **Fur/Snakehook** kéo theo hướng mọc lông tự nhiên (dọc theo sống lưng, tỏa ra từ đỉnh đầu), tạo các dải gợn nhỏ trên bề mặt thay vì sợi lông thật — kỹ thuật "fake fur" phổ biến trong sculpting theo phong cách stylized. Cuối cùng, dùng **Smooth** có kiểm soát để làm mềm các chuyển tiếp lớn (giữa đầu-thân, thân-chân) trong khi vẫn giữ độ gồ ghề của lông ở các vùng đã đắp riêng, có thể hỗ trợ bằng Mask để bảo vệ vùng lông khi làm mượt xung quanh.

## 3. Quy trình thực hành gợi ý

1. Dựng base mesh từ Sphere, Voxel Remesh, bật Symmetry X.
2. Blocking tỷ lệ đầu to - thân ngắn - chân ngắn - đuôi dài bằng Grab và Clay Strips, Remesh định kỳ.
3. Đắp chi tiết đầu: má phính (Inflate), hốc mắt (Scrape), mũi (Pinch), tai (Snake Hook + Flatten).
4. Đắp bốn chân và bàn chân, kéo đuôi thon dần bằng Snake Hook và Pinch.
5. Dùng Mask bảo vệ khuôn mặt, sculpt lớp gợn lông trên thân/lưng bằng Clay Strips theo hướng mọc lông.
6. Smooth có kiểm soát các vùng chuyển tiếp lớn, kiểm tra silhouette cuối cùng.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt |
|---|---|
| Vẽ Mask bảo vệ vùng | Giữ `Ctrl` + kéo chuột |
| Voxel Remesh | `R` |
| Symmetry trục X | Panel Symmetry |
| Smooth tạm thời | Giữ `Shift` |

## 5. Lưu ý & lỗi thường gặp

- Tỷ lệ đầu-thân sai lệch (đầu quá nhỏ) khiến mèo con mất đi vẻ "baby schema" đặc trưng, trông giống mèo trưởng thành thu nhỏ hơn là mèo con.
- Đắp chi tiết lông trước khi tỷ lệ tổng thể ổn định sẽ phải sculpt lại toàn bộ lớp lông sau khi chỉnh tỷ lệ.
- Smooth quá tay trên vùng lông sẽ xóa mất toàn bộ gợn kết cấu vừa đắp — nên dùng Mask bảo vệ vùng này khi làm mượt các vùng khác.
- Bốn chân không đối xứng đều nhau (do quên bật Symmetry ở một bước nào đó) khiến mèo con đứng lệch, mất cân đối khi nhìn từ trước.

## 6. Checklist thực hành

- [ ] Đã blocking đúng tỷ lệ baby schema (đầu to, thân ngắn, chân ngắn).
- [ ] Đã hoàn thiện chi tiết mặt: má, mắt, mũi, tai.
- [ ] Đã sculpt lớp gợn lông theo hướng mọc lông tự nhiên.
- [ ] Đã kiểm tra đối xứng và silhouette tổng thể trước khi hoàn thành.

## 7. Tóm tắt

Bài tập mèo con là thử thách sculpting nhân vật động vật đầy đủ nhất trong module, đòi hỏi kiểm soát tỷ lệ cẩn thận và kỹ thuật gợi ý kết cấu lông chỉ bằng brush — kỹ năng nền tảng quan trọng cho việc sculpt nhân vật ếch fantasy ở dự án cuối khóa (Module 08).
