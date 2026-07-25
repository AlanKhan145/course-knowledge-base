# 033 — Practical Exercise 2 – Headphones

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 04 — Hard-Surface Modeling |
| **Bài học** | Practical Exercise 2 – Headphones |
| **Thời lượng** | 17:31 |
| **Chủ đề chính** | Dựng tai nghe: headband cong, ear cup Boolean, đệm mềm |

## 1. Mục tiêu bài học

- Dựng một headband cong bằng Curve hoặc Cylinder uốn cong.
- Dựng ear cup bằng kỹ thuật Boolean.
- Dựng phần đệm êm (padding) bằng Subdivision Surface để tạo cảm giác mềm mại.
- Áp dụng Mirror Modifier để dựng đối xứng cả hai bên tai nghe.

## 2. Nội dung chính

**Headband** — phần vòng cung nối hai bên tai nghe — có thể dựng theo hai cách: (1) một **Bezier Curve** được uốn thành hình chữ U/vòng cung, sau đó dùng **Curve Modifier** hoặc **Convert to Mesh** rồi Solidify để có độ dày, hoặc (2) một Cylinder dài được uốn bằng **Simple Deform (Bend)** modifier theo góc mong muốn. Cách dùng Curve linh hoạt hơn khi cần chỉnh dáng cong tự nhiên qua nhiều điểm điều khiển.

**Ear cup** — phần vỏ ngoài hình đĩa/oval chứa loa — thường dựng từ một Cylinder dẹt, sau đó dùng **Boolean Difference** với một hình dạng khác để khoét các chi tiết như khe tản nhiệt, logo lõm, hoặc rãnh nối bản lề với headband. Bản lề nối ear cup với headband có thể là một trụ nhỏ đơn giản cho phép model trông có khớp xoay hợp lý dù không thực sự animate được.

**Phần đệm êm (ear cushion và headband padding)** dùng vật liệu mềm về mặt hình học: một Torus hoặc mesh dạng vòng được làm mượt bằng **Subdivision Surface** ở mức cao, tạo cảm giác phồng êm ái tương phản với vỏ nhựa/kim loại cứng bên ngoài — sự tương phản độ cong giữa phần cứng (ít bo tròn, bevel nhỏ) và phần đệm (bo tròn nhiều, Subdivision Surface cao) là chìa khóa để người xem "đọc" đúng vật liệu chỉ qua hình dáng.

Toàn bộ tai nghe chỉ cần dựng một bên, sau đó dùng **Mirror Modifier** qua trục giữa headband để tự động sinh bên còn lại đối xứng hoàn hảo.

## 3. Quy trình thực hành gợi ý

1. Dựng headband bằng Bezier Curve uốn cong chữ U, Convert to Mesh, Solidify để có độ dày.
2. Dựng ear cup từ Cylinder dẹt, dùng Boolean Difference khoét các chi tiết khe/rãnh.
3. Dựng bản lề nối ear cup với đầu headband bằng một trụ nhỏ.
4. Dựng đệm tai từ Torus, tăng Subdivision Surface Levels để tạo độ phồng mềm mại.
5. Gắn tất cả các phần vào đúng vị trí một bên, thêm Mirror Modifier trên headband để sinh bên đối xứng.
6. Áp dụng Bevel Modifier + Harden Normals cho các phần vỏ cứng.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt |
|---|---|
| Thêm Bezier Curve | `Shift + A > Curve > Bezier` |
| Convert Curve to Mesh | Object > Convert > Mesh |
| Simple Deform Modifier | Modifier Properties > Add Modifier > Deform > Simple Deform |
| Boolean Modifier | Modifier Properties > Add Modifier > Generate > Boolean |
| Mirror Modifier | Modifier Properties > Add Modifier > Generate > Mirror |

## 5. Lưu ý & lỗi thường gặp

- Curve chuyển sang Mesh thường có normal hoặc topology không đều — nên kiểm tra và dọn dẹp trước khi Solidify.
- Ear cup và headband không cùng tỉ lệ cong dễ khiến tai nghe trông "gãy khúc" thiếu tự nhiên ở điểm nối bản lề.
- Mirror Modifier áp dụng sai trục hoặc Origin không nằm đúng mặt phẳng đối xứng sẽ khiến hai bên tai nghe chồng lấn hoặc tách rời nhau.
- Đệm tai dùng Subdivision Surface quá thấp sẽ trông cứng như nhựa thay vì mút/da mềm.

## 6. Checklist thực hành

- [ ] Đã dựng headband cong bằng Curve hoặc Simple Deform.
- [ ] Đã dựng ear cup bằng kỹ thuật Boolean với chi tiết khe/rãnh.
- [ ] Đã tạo được đệm êm bo tròn tương phản với vỏ cứng.
- [ ] Đã dùng Mirror Modifier để hoàn thiện cả hai bên tai nghe.

## 7. Tóm tắt

Bài tập tai nghe rèn luyện khả năng kết hợp nhiều kỹ thuật khác nhau (Curve, Boolean, Subdivision Surface, Mirror) trong cùng một object, đồng thời làm quen với việc dùng độ cong bề mặt để phân biệt trực quan giữa vật liệu cứng và vật liệu mềm chỉ qua hình khối.
