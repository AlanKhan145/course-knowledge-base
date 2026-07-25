# 028 — Introduction to Hard-Surface Modeling

| Thuộc tính | Nội dung |
|---|---|
| **Module** | Module 04 — Hard-Surface Modeling |
| **Bài học** | Introduction to Hard-Surface Modeling |
| **Thời lượng** | 14:35 |
| **Chủ đề chính** | Tổng quan dựng hình hard-surface, dựng ghế từ ảnh tham chiếu |

## 1. Mục tiêu bài học

- Hiểu khái niệm "hard-surface modeling" và điểm khác biệt cốt lõi so với organic modeling.
- Biết thiết lập ảnh tham chiếu nền (background reference image) qua View > Background Images và Image Empty.
- Nắm quy trình box-modeling: bắt đầu từ khối hộp đơn giản rồi tinh chỉnh dần theo tham chiếu.
- Dựng một chiếc ghế đơn giản làm ví dụ minh họa cho toàn bộ module.

## 2. Nội dung chính

**Hard-surface modeling** là hướng dựng hình tập trung vào các vật thể nhân tạo, cơ khí — có cạnh thẳng, góc vuông, bề mặt phẳng hoặc cong đều theo quy luật hình học rõ ràng (máy móc, đồ nội thất, vũ khí, phương tiện, kiến trúc...). Trái với organic modeling ở Module 03 (ưu tiên Subdivision Surface và hình dạng bất quy tắc mềm mại), hard-surface ưu tiên độ chính xác kích thước, các phép toán Boolean, và kiểm soát chặt chẽ edge loop để giữ cạnh sắc nét sau khi bevel/shade smooth.

Bước chuẩn bị quan trọng cho hard-surface modeling là **ảnh tham chiếu (reference image)**, giúp bám sát tỷ lệ và hình dáng thực tế thay vì ước lượng bằng mắt. Có hai cách đưa ảnh tham chiếu vào scene: (1) `Add > Image > Reference` — tạo một **Image Empty**, đối tượng độc lập có thể di chuyển/xoay/scale trong scene 3D và hiển thị ở mọi góc nhìn; (2) `View > Background Images > Add Image` — chỉ hiển thị ảnh khi viewport ở chế độ **Orthographic** (Front/Side/Top, `Numpad 1/3/7`), không hiển thị trong Perspective, phù hợp khi cần nhiều ảnh tham chiếu khác nhau cho từng hướng nhìn (Front.png, Side.png) mà không muốn chúng chồng lấn trong không gian 3D thực.

Sau khi có tham chiếu, kỹ thuật chủ đạo là **box-modeling**: bắt đầu từ một khối hộp cơ bản (Cube) xấp xỉ hình bao (bounding box) của vật thể mục tiêu, sau đó dần dần thêm Loop Cut, Extrude, Bevel để "khắc" ra chi tiết, thu nhỏ dần khoảng cách giữa mesh và hình dạng tham chiếu — trái ngược với cách dựng "từ chi tiết nhỏ ghép lên" thường thấy ở tổ chức Boolean-heavy.

Bài học minh họa bằng việc dựng một **chiếc ghế đơn giản**: mặt ngồi (seat) là một khối hộp dẹt, bốn chân ghế là bốn khối trụ hoặc hộp thon dựng bằng Extrude từ bốn góc mặt ngồi, lưng ghế (backrest) là một tấm dựng đứng phía sau, tất cả được đối chiếu liên tục với ảnh tham chiếu nền để giữ đúng tỷ lệ chiều cao/chiều rộng.

## 3. Quy trình thực hành gợi ý

1. Chuẩn bị (hoặc tưởng tượng) ảnh tham chiếu ghế nhìn từ Front và Side.
2. Thêm ảnh qua `View > Background Images > Add Image`, gán ảnh Front cho viewport Front (`Numpad 1`) và ảnh Side cho viewport Side (`Numpad 3`).
3. Thêm Cube, Scale theo tỷ lệ mặt ngồi ước lượng từ ảnh tham chiếu.
4. Extrude bốn góc dưới mặt ngồi xuống thành bốn chân, đối chiếu chiều cao với ảnh Side.
5. Extrude cạnh sau mặt ngồi lên thành lưng ghế, kiểm tra góc nghiêng theo ảnh tham chiếu.
6. Thêm Loop Cut ở các vị trí cần chuyển tiếp góc cạnh rõ ràng (chân nối mặt ngồi, mặt ngồi nối lưng ghế).
7. Thêm Bevel Modifier nhẹ toàn bộ để cạnh không quá sắc gắt khi render.
8. So sánh silhouette hoàn chỉnh với ảnh tham chiếu ở cả hai góc Front/Side.

## 4. Phím tắt & công cụ liên quan

| Thao tác | Phím tắt |
|---|---|
| Thêm Image Empty | `Shift + A > Image > Reference` |
| Thêm Background Image (chỉ Ortho) | `View > Background Images > Add Image` |
| Chuyển Front/Side/Top Orthographic | `Numpad 1` / `Numpad 3` / `Numpad 7` |
| Extrude | `E` |
| Loop Cut | `Ctrl + R` |
| Thêm Bevel Modifier | `Add Modifier > Generate > Bevel` |

## 5. Lưu ý & lỗi thường gặp

- Ảnh tham chiếu Front và Side không cùng tỷ lệ (scale) khiến kích thước đối chiếu giữa hai góc nhìn bị lệch nhau.
- Background Images chỉ hiện trong Orthographic — dễ nhầm tưởng ảnh "biến mất" khi vô tình xoay sang Perspective.
- Box-modeling quá vội thêm chi tiết nhỏ trước khi chốt hình bao tổng thể khiến phải sửa lại nhiều lần.
- Không khóa (Lock) hoặc đặt Image Empty vào layer riêng dễ vô tình chọn nhầm và di chuyển ảnh tham chiếu trong lúc dựng hình.

## 6. Checklist thực hành

- [ ] Giải thích được sự khác biệt giữa hard-surface và organic modeling.
- [ ] Đã thiết lập thành công ảnh tham chiếu nền cho ít nhất một góc nhìn Orthographic.
- [ ] Hiểu quy trình box-modeling: hình bao tổng thể trước, chi tiết sau.
- [ ] Đã dựng xong mô hình ghế đơn giản đúng tỷ lệ tham chiếu.

## 7. Tóm tắt

Hard-surface modeling đòi hỏi tư duy chính xác về kích thước và cạnh góc, khởi đầu bằng việc thiết lập ảnh tham chiếu đúng cách và áp dụng box-modeling để đi từ hình bao tổng thể đến chi tiết — nền tảng cho toàn bộ các bài Boolean và dự án thực hành tiếp theo trong module.
