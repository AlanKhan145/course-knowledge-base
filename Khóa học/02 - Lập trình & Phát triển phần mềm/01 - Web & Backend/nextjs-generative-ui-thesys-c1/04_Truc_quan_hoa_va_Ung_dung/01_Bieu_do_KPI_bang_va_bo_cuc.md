# Biểu đồ, KPI, bảng và cách tổ chức phản hồi

**Loại bài:** Bài học thực hành · **Mục tiêu:** Quyết định được dữ liệu nào dùng card KPI, bar chart, table, form; nhận diện lỗi so sánh sai đơn vị.

**Bối cảnh:** Khóa học Generative UI với Next.js và Thesys C1. Nội dung C1 dùng API legacy; với dự án mới, xem OpenUI ở https://www.openui.com/docs.

## 1. Từ dữ liệu đến cấu trúc UI
Một phản hồi tốt cần tầng thông tin: **tổng quan** (KPI), **bằng chứng** (chart/table), **diễn giải** (2-3 nhận xét) và **hành động** (lọc/chọn). Nếu người dùng hỏi “hiệu suất ngành”, dùng biểu đồ cột để so sánh; nếu hỏi “SKU nào biên lợi nhuận trên 5%?”, bảng cho phép đọc chính xác từng dòng.

## 2. KPI và đơn vị đo
KPI nên có nhãn, giá trị, đơn vị, khoảng thời gian và cách tính. Ví dụ: doanh thu tháng, số đơn, giá trị đơn trung bình, tăng trưởng so tháng trước. Không dùng % mà không nói mẫu số. Trong bài thực hành này, các số là **dữ liệu minh họa**, không liên quan thị trường thực tế.

| Tháng | Doanh thu (triệu VND) | Số đơn |
| --- | ---: | ---: |
| 01 | 120 | 80 |
| 02 | 150 | 100 |
| 03 | 135 | 90 |

Tăng trưởng tháng 02 so với 01:
$$
\mathrm{Growth}=\frac{150-120}{120}\times100\%=25\%.
$$

## 3. Quy tắc chọn biểu đồ
Biểu đồ đường: chuỗi thời gian; cột: so sánh nhóm; scatter: liên hệ hai biến; bảng: đọc số chính xác. Không dùng pie chart cho hàng chục nhóm nhỏ. Tránh trục Y cắt gây hiểu nhầm khi so sánh độ dài cột. Nếu dữ liệu thiếu hoặc có giá trị `null`, cần xử lý rõ thay vì âm thầm điền số 0.

## 4. UI thông minh không có nghĩa dữ liệu thông minh
C1 có thể render chart hoặc table, nhưng không thể tự kiểm chứng nguồn của số liệu. Backend cần tính KPI hoặc gọi công cụ lấy số liệu thật, định dạng dữ liệu trước khi đưa cho mô hình. Với lĩnh vực tài chính, thêm thời điểm cập nhật và nguồn; không biểu diễn số liệu sinh ngẫu nhiên như giá thị trường hiện tại.

## 5. Lab: dashboard một trang
Chuẩn bị dataset bảng trên. Yêu cầu AI trả KPI doanh thu tháng 03, thay đổi so với tháng 02 và chart 3 tháng. Kiểm tra thủ công công thức, nhãn, đơn vị, cách xử lý dữ liệu thiếu. Chụp lại UI, ghi chênh lệch nếu LLM tính sai.

## 6. Tổng kết
Dùng thành phần đúng câu hỏi, đặt dữ liệu có nguồn phía sau, và kiểm tra phép tính: đó là ba điều kiện để dashboard tạo sinh hữu ích.

## 7. Câu hỏi ôn tập

**Câu 1.** Để so sánh doanh thu nhiều tháng, biểu đồ nào phù hợp?

A. Biểu đồ đường hoặc cột  
B. Ảnh nền  
C. Biểu đồ không nhãn  
D. Form password  

**Đáp án:** A. **Giải thích:** Xu hướng theo thời gian nên dùng line/bar.

**Câu 2.** Tăng trưởng từ 120 lên 150 là?

A. 15%  
B. 20%  
C. 25%  
D. 30%  

**Đáp án:** C. **Giải thích:** (150−120)/120 = 25%.

**Câu 3.** Để đọc chính xác giá từng SKU nên chọn?

A. Heatmap thiếu legend  
B. Bảng dữ liệu có cột  
C. Một đoạn text cực dài  
D. Bọt màu không nhãn  

**Đáp án:** B. **Giải thích:** Bảng thích hợp cho dữ liệu hàng/cột.

**Câu 4.** KPI tốt cần gì?

A. Chỉ số không đơn vị  
B. Luôn dùng màu xanh  
C. Ẩn thời gian  
D. Nhãn, đơn vị, ngữ cảnh thời gian  

**Đáp án:** D. **Giải thích:** KPI thiếu ngữ cảnh dễ gây hiểu lầm.

**Câu 5.** Nếu dữ liệu thiếu, cách xử lý đúng?

A. Đánh dấu thiếu và giải thích  
B. Tự điền ngẫu nhiên  
C. Ẩn số lượng dòng  
D. Dùng giá trị tối đa  

**Đáp án:** A. **Giải thích:** Không được đánh tráo thiếu dữ liệu thành một giá trị giả.

