# 032 — Practical Exercise 1 – Sword with Gem

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 04 — Hard-Surface Modeling |
| **Bài học** | Practical Exercise 1 – Sword with Gem |
| **Thời lượng** | 15:35 |
| **Chủ đề chính** | Dựng thanh kiếm và đá quý gắn hilt |

## 1. Mục tiêu bài học

- Áp dụng box modeling và Bevel để dựng lưỡi kiếm, cross-guard, tay cầm và pommel.
- Dựng một viên đá quý dạng facet (đa giác cắt mặt) gắn vào hilt.
- Luyện tập bố cục một prop hard-surface hoàn chỉnh có nhiều bộ phận rời.

## 2. Nội dung chính

Thanh kiếm được chia thành 4 phần chính, mỗi phần dựng riêng rồi ghép lại: **lưỡi kiếm (blade)** — một khối hộp dẹt dài, Loop Cut dọc theo giữa để tạo gờ sống dao (fuller/blood groove), sau đó Scale to nhỏ dần về mũi kiếm; **cross-guard** — khối ngang nhỏ chặn giữa lưỡi và tay cầm, thường bevel nhẹ các góc; **tay cầm (grip)** — một trụ tròn hoặc bo góc, có thể thêm các Loop Cut đều đặn mô phỏng dây quấn; **pommel** — khối tròn/đa giác ở cuối chuôi kiếm, thường dùng Icosphere hoặc Cylinder bo cạnh.

**Viên đá quý (gem)** được dựng từ một **Icosphere** (Subdivisions thấp, 1-2, để giữ các mặt facet góc cạnh tự nhiên thay vì tròn mượt), sau đó Scale dẹt theo một trục để tạo dáng viên đá cắt kiểu "brilliant cut" đơn giản, hoặc dùng **Decimate Modifier** (Planar) trên một Sphere mượt để tự động giảm về các mặt phẳng facet. Đá quý được gắn (thường bằng Boolean hoặc đơn giản là đặt lồng vào một hốc đã khoét sẵn) vào cross-guard hoặc pommel.

Xuyên suốt quá trình dựng, áp dụng lại các kỹ thuật từ bài 031 (Bevel Modifier với Limit Angle, Harden Normals) để đảm bảo tất cả các bộ phận kim loại đều bắt sáng sắc nét và sạch sẽ khi render.

## 3. Quy trình thực hành gợi ý

1. Dựng lưỡi kiếm từ một Cube dẹt dài, thêm Loop Cut dọc trục, kéo nhẹ để tạo gờ sống dao, Scale thon dần về phía mũi.
2. Dựng cross-guard từ một Cube ngang nhỏ, Bevel các góc.
3. Dựng grip từ một Cylinder, thêm các Loop Cut đều đặn mô phỏng vân quấn dây.
4. Dựng pommel từ một Icosphere hoặc Cylinder bo cạnh.
5. Ghép 4 phần bằng cách căn chỉnh vị trí dọc theo một trục chung (dùng Snap to origin/vertex nếu cần).
6. Dựng viên đá quý từ Icosphere Subdivisions = 1, Scale dẹt, gắn vào cross-guard hoặc pommel.
7. Thêm Bevel Modifier (Limit Angle) và Harden Normals cho toàn bộ các phần kim loại.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt |
|---|---|
| Thêm Icosphere | `Shift + A > Mesh > Ico Sphere` |
| Chỉnh Subdivisions Icosphere (Adjust Last Operation) | `F9` |
| Loop Cut | `Ctrl + R` |
| Scale theo một trục | `S` + `X`/`Y`/`Z` |
| Bevel Modifier | Modifier Properties > Add Modifier > Generate > Bevel |

## 5. Lưu ý & lỗi thường gặp

- Icosphere với Subdivisions quá cao sẽ mất hoàn toàn hình dạng facet góc cạnh, trông giống khối cầu mượt thay vì đá quý cắt mặt.
- Ghép các bộ phận không đúng Origin/trục chung khiến kiếm bị lệch tâm khi nhìn từ góc khác.
- Quên Bevel ở các cạnh sắc của lưỡi kiếm khiến ánh sáng phản chiếu trông "phẳng" và giả tạo so với kim loại thật.
- Gem quá lớn so với tỉ lệ tổng thể thanh kiếm làm mất cân đối thiết kế — nên đối chiếu tỉ lệ với hilt và cross-guard thường xuyên.

## 6. Checklist thực hành

- [ ] Đã dựng đủ 4 phần: lưỡi kiếm, cross-guard, tay cầm, pommel.
- [ ] Đã tạo được gờ sống dao trên lưỡi kiếm.
- [ ] Đã dựng viên đá quý dạng facet và gắn vào hilt.
- [ ] Đã áp dụng Bevel Modifier + Harden Normals cho toàn bộ phần kim loại.

## 7. Tóm tắt

Bài tập kiếm và đá quý là ví dụ điển hình của việc dựng một prop nhiều bộ phận bằng cách chia nhỏ thành các khối đơn giản, dựng riêng rồi ghép lại — một tư duy modeling sẽ lặp lại xuyên suốt các dự án hard-surface phức tạp hơn sau này.
