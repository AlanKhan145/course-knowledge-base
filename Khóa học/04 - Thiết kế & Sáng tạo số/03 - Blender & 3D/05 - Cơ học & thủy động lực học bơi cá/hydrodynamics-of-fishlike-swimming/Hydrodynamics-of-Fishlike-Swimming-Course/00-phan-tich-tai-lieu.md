# Phân tích tài liệu nguồn và chiến lược chuyển thành khóa học

## 1. Loại tài liệu

PDF là một **review paper** về thủy động lực học của fishlike swimming, không phải giáo trình theo chương. Vì vậy việc chuyển thành khóa học không nên giữ nguyên thứ tự từng đoạn, mà phải tái cấu trúc thành chuỗi kiến thức có prerequisite rõ ràng.

## 2. Luận điểm trung tâm

Trục giải thích xuyên suốt bài báo là **vorticity control**: chuyển động không ổn định của thân và vây tạo các cấu trúc xoáy quy mô lớn; các cấu trúc này được vận chuyển, shed và tái định vị, đặc biệt bởi tail, để tạo thrust và force quá độ cho maneuver.

## 3. Các lớp kiến thức trong PDF

### 3.1. Lớp cơ chế cơ bản

- unsteady flow control;
- interaction giữa foil và oncoming vortices;
- reverse Kármán wake;
- heave, pitch, phase và Strouhal.

### 3.2. Lớp mô hình hóa cá bơi

- slender-body theory;
- lực ngang và added mass;
- hạn chế của mô hình mặt cắt gần hai chiều;
- flow ba chiều quanh thân mềm.

### 3.3. Lớp cơ chế sinh học

- body-generated vorticity;
- shedding tăng dần về peduncle;
- tail repositioning;
- steady swimming, fast-start và turning.

### 3.4. Lớp kiểm chứng kỹ thuật

- DPIV và flow visualization;
- RoboTuna/RoboPike;
- power reduction;
- boundary-layer relaminarization.

## 4. Vì sao khóa học tách thành 8 bài lõi

Nếu học thẳng theo paper, người mới dễ gặp công thức slender-body trước khi hình thành trực giác đầy đủ về wake. Khóa học sắp lại theo chuỗi:

1. vorticity control;
2. foil dao động;
3. Strouhal và efficiency;
4. slender-body theory;
5. body-tail wake control;
6. turning/fast-start;
7. robot biomimetic;
8. boundary layer.

Thứ tự này đi từ mô hình đơn giản sang hệ phức tạp và từ cơ chế sang kiểm chứng.

## 5. Những điểm được giữ nguyên phạm vi

- Khoảng `St = 0,25-0,35` chỉ được trình bày là tối ưu cho **một số profile cụ thể** trong các nghiên cứu được review.
- Giá trị efficiency tới 87% thuộc các foil và điều kiện tải cụ thể.
- Giảm power hơn 50% thuộc vùng tham số của robot thí nghiệm được dẫn.
- Các con số circulation/core radius trong turning thuộc Giant Danio ở case được nghiên cứu.
- `c/U = 1,2` là trường hợp cho power tối thiểu trong mô phỏng/thí nghiệm được mô tả, không phải hằng số phổ quát.

## 6. Xử lý hình ảnh

PDF có các Figure đen-trắng nằm trong bài chính và Figure màu nằm ở color insert cuối file. Toàn bộ ảnh nhúng có ích đã được tách thành file PNG riêng, đổi tên theo Figure và liên kết trực tiếp trong các bài học.

## 7. Kết quả đầu ra

Khóa học tạo ra:

- 8 lesson kiến thức;
- 1 bài tổng hợp;
- 1 assessment cuối khóa;
- glossary;
- bản đồ trang/hình nguồn;
- bibliography của paper;
- 17 PNG figure được tách từ PDF.
