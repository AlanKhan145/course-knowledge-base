# 069 — Staff and Lamp

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 08 — Final Project |
| **Bài học** | Staff and Lamp |
| **Thời lượng** | 9:46 |
| **Chủ đề chính** | Dựng cây gậy và đèn lồng cho nhân vật |

## 1. Mục tiêu bài học

- Dựng cây gậy với phần tay cầm quấn dây và đầu gậy chi tiết.
- Dựng đèn lồng dạng hard-surface kết hợp phần kính/bầu đèn trong suốt.
- Chuẩn bị hai prop này sẵn sàng để nhân vật cầm/xách ở bước rig (bài 070).

## 2. Nội dung chính

**Cây gậy (staff)** dựng từ một trụ dài thon nhẹ về phía đầu, dùng **Bevel** hoặc thêm Loop Cut tại các đoạn để tạo cảm giác gỗ tự nhiên (không hoàn toàn thẳng đều). Phần tay cầm quấn dây tái sử dụng kỹ thuật **Screw Modifier** (bài 038) để tạo rãnh xoắn quấn quanh trụ, mô phỏng dây da hoặc vải quấn tay cầm. Đầu gậy (phần trên cùng, nơi thường gắn đá/biểu tượng trang trí) dựng chi tiết hơn bằng box-modeling hoặc Boolean kết hợp một viên đá facet tương tự kỹ thuật ở bài 032 (Sword with Gem).

**Đèn lồng (lamp)** là một prop hard-surface có cấu trúc lồng bảo vệ (dùng kỹ thuật tương tự **Wireframe Modifier** ở bài 040, hoặc dựng khung tay bằng các thanh nhỏ Boolean) bao quanh một **bầu đèn** — phần này thường dựng bằng UV Sphere hoặc Cylinder bo tròn, sẽ được gán vật liệu kính/thủy tinh trong suốt kết hợp **Emission** (phát sáng) ở Module 07 (bài 059) để mô phỏng ánh nến/lửa bên trong. Móc treo hoặc quai xách đèn dựng bằng một vòng cong nhỏ (Torus cắt một phần, hoặc Curve tương tự dây thừng).

Cả hai prop cần được dựng với **tỷ lệ chính xác** so với bàn tay nhân vật ếch — nên đặt tạm hai prop cạnh mesh tay đã sculpt để đối chiếu kích thước cầm nắm hợp lý trước khi hoàn thiện chi tiết, vì bài 070 sẽ cần gậy vừa khít trong tay khi rig và pose.

## 3. Quy trình thực hành gợi ý

1. Dựng trụ gậy thon dần, thêm Bevel/Loop Cut tạo cảm giác gỗ tự nhiên.
2. Thêm Screw Modifier tạo rãnh xoắn quấn dây ở phần tay cầm.
3. Dựng đầu gậy chi tiết với viên đá facet gắn vào, đối chiếu tỷ lệ với bài 032.
4. Dựng khung lồng đèn bằng Wireframe Modifier hoặc Boolean các thanh nhỏ.
5. Dựng bầu đèn bằng UV Sphere/Cylinder bo tròn, đặt lồng vào khung.
6. Dựng móc treo/quai xách, đặt cả hai prop cạnh bàn tay nhân vật để kiểm tra tỷ lệ.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt |
|---|---|
| Screw Modifier | Modifier Properties > Add Modifier > Generate > Screw |
| Wireframe Modifier | Modifier Properties > Add Modifier > Generate > Wireframe |
| Bevel (thủ công) | `Ctrl + B` |
| Boolean Modifier | Modifier Properties > Add Modifier > Generate > Boolean |

## 5. Lưu ý & lỗi thường gặp

- Gậy dựng quá thẳng đều, thiếu biến thiên độ dày tự nhiên khiến trông như ống nhựa công nghiệp thay vì gậy gỗ.
- Tỷ lệ gậy/đèn không đối chiếu với kích thước tay nhân vật ngay từ đầu, phải chỉnh lại toàn bộ khi đến bước rig ở bài 070.
- Khung lồng đèn quá dày đặc che khuất hoàn toàn bầu đèn bên trong, mất tác dụng hiển thị ánh sáng.
- Quên rằng bầu đèn cần vật liệu trong suốt + Emission ở bước sau — nếu hình học không có đủ độ dày hợp lý sẽ khó lên vật liệu kính đẹp.

## 6. Checklist thực hành

- [ ] Đã dựng cây gậy với tay cầm quấn dây và đầu gậy chi tiết.
- [ ] Đã dựng đèn lồng với khung bảo vệ và bầu đèn.
- [ ] Đã đối chiếu tỷ lệ cả hai prop với kích thước bàn tay nhân vật.
- [ ] Cả hai prop sẵn sàng để gắn vào tay nhân vật ở bước rig tiếp theo.

## 7. Tóm tắt

Gậy và đèn tổng hợp lại nhiều kỹ thuật đã học (Screw, Wireframe, Boolean, facet gem) vào hai prop cầm tay hoàn chỉnh, được chuẩn bị kỹ về tỷ lệ để sẵn sàng gắn vào tay nhân vật khi rig cánh tay ở bài tiếp theo.
