# Khóa học: Thủy động lực học của bơi kiểu cá

Khóa học này chuyển nội dung bài tổng quan **Hydrodynamics of Fishlike Swimming** của M. S. Triantafyllou, G. S. Triantafyllou và D. K. P. Yue thành hệ thống bài học độc lập bằng tiếng Việt. Trọng tâm của tài liệu là cơ chế tạo lực nhờ chuyển động không ổn định, sự hình thành và điều khiển các cấu trúc xoáy quy mô lớn, tương tác giữa thân - cuống đuôi - vây đuôi, cơ động nhanh và các robot mô phỏng cá.

## 1. Mục tiêu khóa học

Sau khi hoàn thành khóa học, người học có thể:

- giải thích vì sao chuyển động không ổn định của thân và vây có thể tạo lực đẩy hiệu quả;
- phân biệt **Kármán street** và **reverse Kármán street** trong ngữ cảnh lực cản và lực đẩy;
- sử dụng số Strouhal `St = fA/U` để mô tả quan hệ giữa tần số, biên độ và tốc độ bơi;
- mô tả các tham số chính của một foil dao động: heave, pitch, pha, góc tấn danh nghĩa và vị trí trục pitch;
- hiểu vai trò của xoáy mép trước, xoáy mép sau và xoáy đầu mút;
- giải thích giả thiết và giới hạn của slender-body theory trong mô hình hóa cá bơi;
- mô tả chuỗi điều khiển độ xoáy từ thân đến cuống đuôi và vây đuôi;
- phân tích cơ chế C-start, S-start và chuyển hướng nhanh bằng cặp xoáy;
- rút ra nguyên lý thiết kế cho robot cá và phương tiện đẩy bằng foil dao động;
- đọc và diễn giải các hình DPIV, đồ thị Strouhal - hiệu suất và profile lớp biên trong bài báo.

## 2. Đối tượng phù hợp

Khóa học phù hợp với người học đã có kiến thức nhập môn về cơ học chất lưu, cơ học vật rắn hoặc mô phỏng/animation sinh học. Tài liệu vẫn giải thích lại các khái niệm cốt lõi để có thể đọc độc lập, nhưng không thay thế một khóa cơ học chất lưu nền tảng.

## 3. Cấu trúc

| Phần | Bài | Nội dung chính |
|---|---|---|
| Nền tảng | 01 | Chuyển động không ổn định và điều khiển độ xoáy |
| Foil dao động | 02 | Heave + pitch và cơ chế tạo lực đẩy |
| Foil dao động | 03 | Strouhal, wake dynamics và hiệu suất |
| Bơi ổn định | 04 | Slender-body theory và lực ngang |
| Bơi ổn định | 05 | Chuỗi điều khiển xoáy thân - đuôi |
| Cơ động | 06 | C-start, S-start, turning và fast-start |
| Biomimetic | 07 | Robot cá, đo công suất và giảm công suất cần thiết |
| Biomimetic | 08 | Lớp biên, traveling wave và relaminarization |
| Ôn tập | 09 | Tổng hợp nguyên lý thiết kế |
| Đánh giá | 10 | Bài kiểm tra cuối khóa |

## 4. Cách học đề xuất

1. Học bài 01-03 để nắm nền tảng dòng không ổn định và wake.
2. Học bài 04-05 để chuyển từ foil lý tưởng sang thân cá mềm ba chiều.
3. Học bài 06 để hiểu cơ động nhanh.
4. Học bài 07-08 để xem các nguyên lý được kiểm chứng trên robot và lớp biên.
5. Làm bài 09 và 10 không xem đáp án trước.
6. Dùng `07-phu-luc/thuat-ngu.md` khi gặp thuật ngữ mới.

## 5. Nguyên tắc biên soạn

Khóa học chỉ diễn giải và tổ chức lại nội dung được bài báo hỗ trợ. Khi bài báo nêu một giá trị chỉ đúng trong một cấu hình thí nghiệm cụ thể, khóa học giữ nguyên phạm vi đó thay vì biến nó thành quy luật phổ quát. Ví dụ, khoảng Strouhal 0,25-0,35 được báo cáo là vùng tối ưu cho một số profile cụ thể, không phải hằng số tối ưu cho mọi loài cá hay mọi foil.

## 6. Tài nguyên đi kèm

- `assets/images/figures/`: 17 ảnh được tách trực tiếp từ PDF, bao phủ Figure 1-13 và các panel phụ.
- `07-phu-luc/ban-do-nguon-pdf.md`: ánh xạ từng bài học sang trang và hình của PDF.
- `07-phu-luc/tai-lieu-tham-khao.md`: danh mục tài liệu tham khảo xuất hiện trong bài báo.
- `07-phu-luc/thuat-ngu.md`: từ điển thuật ngữ Anh - Việt.
