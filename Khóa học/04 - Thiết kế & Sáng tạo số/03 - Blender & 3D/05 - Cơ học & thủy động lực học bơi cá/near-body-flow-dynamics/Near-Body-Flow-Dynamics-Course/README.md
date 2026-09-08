# Khóa học: Thủy động lực học dòng gần thân ở cá bơi

## Tổng quan

Khóa học này chuyển bài báo **M. J. Wolfgang et al. (1999), “Near-body flow dynamics in swimming fish”, Journal of Experimental Biology 202, 2303–2327** thành một lộ trình học độc lập bằng tiếng Việt.

Trọng tâm là cá **giant danio (*Danio malabaricus*)**, kiểu bơi **carangiform**, đo trường dòng bằng **DPIV**, mô phỏng số ba chiều bằng **unsteady panel method**, cơ chế tạo **reverse Kármán vortex street**, kiểm soát **body-bound vorticity**, và động tác **rẽ 60°** bằng biến dạng thân dạng chữ C.

> **Phạm vi nguồn:** Nội dung khoa học trong bài học được biên soạn từ *Near-body flow dynamics in swimming fish* (Wolfgang et al., 1999). Phần diễn giải được viết lại theo dạng giáo trình; không thay thế bài báo gốc khi cần đối chiếu số liệu hoặc phương pháp chi tiết.


## Mục tiêu đầu ra

Sau khi hoàn thành khóa học, người học có thể:

1. Giải thích vì sao chỉ nhìn wake phía sau đuôi là chưa đủ để hiểu cơ chế đẩy của cá.
2. Mô tả vai trò phối hợp giữa thân, peduncle và vây đuôi trong việc tạo, vận chuyển và giải phóng xoáy.
3. Đọc được velocity vectors, streamlines, vorticity contours và dynamic-pressure contours trong các hình của bài báo.
4. Trình bày nguyên lý DPIV và các hạn chế khi đo dòng sát một vật thể sống đang biến dạng.
5. Hiểu cấu trúc của mô hình potential-flow/panel-method, wake sheet, Kutta condition và vortex-lattice fins.
6. Phân tích chuyển động carangiform bằng sóng chạy dọc backbone và số Strouhal.
7. Giải thích cách cá tạo một cặp xoáy lớn để đổi hướng lực đẩy trong cú rẽ nhanh.
8. Đánh giá bằng chứng, giả định và giới hạn của nghiên cứu.

## Cấu trúc khóa học

| Module | Bài | Chủ đề |
|---|---:|---|
| 1. Nền tảng | 01 | Câu hỏi khoa học và ý tưởng trung tâm |
| 1. Nền tảng | 02 | Hình thái giant danio và kinematics carangiform |
| 2. Phương pháp | 03 | DPIV và thiết kế thí nghiệm |
| 2. Phương pháp | 04 | Mô hình số: panel method, wake và thin fins |
| 2. Phương pháp | 05 | Lực, công suất và hiệu suất thủy động lực |
| 3. Bơi thẳng | 06 | Wake, reverse Kármán street và thrust jet |
| 3. Bơi thẳng | 07 | Body-bound vorticity và vai trò thực sự của vây đuôi |
| 4. Cơ động | 08 | Thí nghiệm cú rẽ 60° |
| 4. Cơ động | 09 | Mô phỏng rẽ, pressure field và force vectoring |
| 5. Tổng hợp | 10 | Mô hình cơ chế thống nhất cho bơi thẳng và rẽ |
| 5. Tổng hợp | 11 | Đọc phản biện: bằng chứng, giả định, giới hạn |
| 6. Đánh giá | 12 | Review questions và đáp án |
| 6. Đánh giá | 13 | Capstone: phân tích hình và tái dựng cơ chế |

## Cách học đề xuất

- Học bài 01–05 trước để nắm ngôn ngữ và phương pháp.
- Với bài 06–10, luôn mở hình đi kèm trong `assets/figures/`.
- Không chỉ ghi nhớ “đuôi tạo lực đẩy”; hãy theo dõi **vorticity được tạo ở đâu, di chuyển thế nào, khi nào được shed và đuôi tương tác với nó ra sao**.
- Hoàn thành bài 12 trước capstone bài 13.

## Tài nguyên trong gói

- `assets/figures/figure_01.png` … `figure_17.png`: 17 hình của bài báo được tách theo trang, kể cả hình vector.
- `assets/raw_images/`: các raster image được trích trực tiếp từ PDF bằng `pdfimages`.
- `assets/image_manifest.md`: bảng tra cứu hình, trang và công dụng học tập.
- `formula_sheet.md`: công thức và ký hiệu cốt lõi.
- `glossary.md`: thuật ngữ Anh–Việt.
- `source_metadata.md`: thông tin nguồn và phạm vi biên soạn.
