# Bài đánh giá cuối khóa — Động học và thủy động lực học vây ngực Bluegill

## 1. Mục tiêu đánh giá

Bài đánh giá kiểm tra khả năng:

- đọc và diễn giải hình động học;
- kết nối dữ liệu với cơ chế sinh học;
- phân biệt dữ liệu quan sát với suy luận thủy động lực học;
- tổng hợp mô hình chuyển động vây trong 3D.

## 2. Phần A — Khái niệm cơ bản

### Câu 1

Ghép thuật ngữ với mô tả đúng:

- abduction
- adduction
- protraction
- retraction
- levation
- depression

Mô tả:

A. đưa vây về phía sau
B. đưa vây ra xa thân
C. nâng vây
D. khép vây về thân
E. đưa vây về phía trước
F. hạ vây

### Câu 2

Giải thích vì sao paper cần hai góc quay lateral và ventral.

### Câu 3

Viết công thức phase lag theo độ nếu biết `Δt` và `cycle duration`.

## 3. Phần B — Đọc dữ liệu

### Câu 4

Từ Figure 5, mô tả xu hướng fin beat frequency theo swimming speed. Nêu các giá trị mốc quan trọng được paper báo cáo.

### Câu 5

Từ Figure 7, giải thích sự khác nhau giữa phase pattern tại 0.3 TL s⁻¹ và 1.1 TL s⁻¹.

### Câu 6

Từ Figure 8, so sánh xu hướng longitudinal/lateral excursion với vertical excursion khi tốc độ tăng.

## 4. Phần C — Phân tích cơ chế

### Câu 7

Nêu ít nhất bốn bằng chứng cho thấy vây ngực bluegill không thể xem đơn giản như rigid plate.

### Câu 8

Giải thích vì sao drag-based propulsion có vai trò nhưng không đủ giải thích toàn bộ fin beat cycle.

### Câu 9

Giải thích vì sao lift có thể đóng góp vào forward thrust trong abduction dù body không dao động vertical rõ.

### Câu 10

Paper dùng Re ≈ `5 × 10^3` và reduced frequency `s ≈ 0.85` để lập luận điều gì?

## 5. Phần D — Bài tập tính toán

### Câu 11

Một marker ventral đạt lateral maximum muộn hơn marker 4 `0.06 s`. Chu kỳ kéo dài `0.72 s`.

Tính phase lag theo độ.

### Câu 12

Một planar element có:

```text
path angle = -21°
planar angle = 33°
```

Theo quy ước hình học dùng trong course, tính `α`.

### Câu 13

Nếu fin beat cycle có thời lượng `0.40 s`, hãy tính fin beat frequency.

## 6. Phần E — Bài tổng hợp

### Câu 14 — Mô tả một chu kỳ vây

Viết 250–400 từ mô tả một fin beat của bluegill ở tốc độ thấp, bao gồm:

- abduction/adduction;
- protraction/retraction;
- levation/depression;
- dorsal leading edge;
- phase lag;
- sự khác nhau giữa dorsal và ventral marker.

### Câu 15 — So sánh hai tốc độ

Lập bảng so sánh **0.3 TL s⁻¹** và **1.1 TL s⁻¹** theo ít nhất sáu tiêu chí:

- frequency;
- pause;
- phase lag;
- excursion;
- quỹ đạo marker;
- slip;
- mức độ plate-like;
- sử dụng body/caudal fin.

### Câu 16 — Mô hình lực

Vẽ sơ đồ khái niệm cho chuỗi:

```text
3D kinematics → local orientation → incident flow → lift/drag/acceleration reaction → thrust
```

Sau đó giải thích ở đâu paper có dữ liệu trực tiếp và ở đâu paper phải dùng mô hình hoặc suy luận.

## 7. Đáp án gợi ý

### Đáp án 1

- abduction → B
- adduction → D
- protraction → E
- retraction → A
- levation → C
- depression → F

### Đáp án 2

Lateral view cho x-y, ventral view cho x-z. Kết hợp hai góc nhìn mới khôi phục được chuyển động 3D và orientation của fin elements; một projection lateral riêng lẻ có thể làm sai angle of attack.

### Đáp án 3

```text
phase lag = (Δt / cycle duration) × 360°
```

### Đáp án 4

Frequency tăng rõ từ khoảng 1.2 Hz ở 0.3 TL s⁻¹ lên khoảng 2.1 Hz ở 1.0 TL s⁻¹, sau đó không tăng đáng kể ở 1.1 TL s⁻¹.

### Đáp án 5

Ở 0.3 TL s⁻¹, marker ventral đạt lateral maximum muộn hơn marker dorsal, phase lag có thể tới 32°. Ở 1.1 TL s⁻¹, các marker gần đồng bộ hơn.

### Đáp án 6

Longitudinal và lateral excursion nhìn chung giảm khi có hiệu ứng tốc độ rõ; vertical excursion có xu hướng tăng, đặc biệt vùng dorsal.

### Đáp án 7

Có thể nêu: excursion khác nhau; loop direction khác nhau; phase lag; angle of attack dorsal/ventral khác nhau; speed effect khác nhau giữa marker.

### Đáp án 8

Backward slip và retraction tạo điều kiện cho drag thrust nhưng chỉ trong đoạn ngắn của cycle và chủ yếu ở vùng dorsal. Body speed cũng không cho power/recovery oscillation rõ như mô hình chèo thuần túy.

### Đáp án 9

Hướng lift thay đổi theo orientation của fin element. Thành phần vector hướng trước có thể tồn tại mà không nhất thiết tạo vertical body oscillation lớn nếu các lực khác cân bằng.

### Đáp án 10

Hai tham số cho thấy unsteady effects và acceleration reaction không thể bỏ qua; reduced frequency 0.85 lớn hơn ngưỡng 0.4 được paper viện dẫn.

### Đáp án 11

```text
(0.06 / 0.72) × 360° = 30°
```

### Đáp án 12

```text
α = 33 - (-21) = 54°
```

### Đáp án 13

```text
f = 1 / 0.40 = 2.5 Hz
```

## 8. Rubric phần tổng hợp

| Tiêu chí | Tốt | Đạt | Chưa đạt |
|---|---|---|---|
| Thuật ngữ | Dùng đúng và nhất quán | Có 1–2 lỗi nhỏ | Nhầm nhiều thuật ngữ |
| Đọc hình | Nêu đúng pattern và quan hệ | Nêu được xu hướng chính | Mô tả sai dữ liệu |
| Phân biệt dữ liệu/suy luận | Rõ ràng | Có phân biệt nhưng chưa sâu | Trộn lẫn quan sát và kết luận |
| Cơ chế lực | Kết nối drag + lift + unsteady hợp lý | Nêu đủ ba cơ chế | Chỉ nêu một cơ chế |
| Tổng hợp 3D | Liên kết x-y-z và deformation | Có mô tả 3D cơ bản | Mô tả như chuyển động 1 trục |
