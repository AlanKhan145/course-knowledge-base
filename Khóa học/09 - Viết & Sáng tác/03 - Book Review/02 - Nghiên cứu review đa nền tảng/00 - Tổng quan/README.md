# Khóa học: Phân tích dữ liệu đánh giá sách đa nền tảng

## Goodreads × Douban — Từ dữ liệu review đến phân tích tiếp nhận sách

Khóa học này chuyển hóa một paper nghiên cứu thành hệ thống bài học Markdown độc lập, tập trung vào **cách xây dựng, đối sánh và diễn giải dữ liệu đánh giá sách giữa hai nền tảng khác nhau**.

> **Nguồn học thuật chính:** Hu, Y., Underwood, T., Layne-Worthey, G., & Downie, J. S. (2026). *Comparative analysis of classics book review data created by users across Douban and Goodreads*. Digital Scholarship in the Humanities, 41, i89–i106. https://doi.org/10.1093/llc/fqaf084 (advance access: 13-09-2025).

## Khóa học giúp bạn làm được gì?

Sau khi hoàn thành, người học có thể:

- giải thích vì sao dữ liệu review sách trực tuyến hữu ích cho nghiên cứu về người đọc và sự tiếp nhận văn học;
- phân biệt **book-level**, **edition-level** và **all-editions data** trong bối cảnh Goodreads/Douban;
- mô tả quy trình tạo **parallel cross-platform dataset**;
- nhận diện ba nhóm vấn đề lớn: **metadata**, **khác biệt tổ chức dữ liệu giữa nền tảng**, **xử lý dữ liệu đa ngôn ngữ**;
- đọc và diễn giải dữ liệu **rating trung bình**, **phân phối 1–5 sao**, **số lượt rating**, **số review**, **tag/genre**;
- hiểu vì sao rating trung bình giống nhau vẫn có thể che giấu khác biệt lớn trong cách cộng đồng đánh giá;
- diễn giải các khác biệt văn hóa/nền tảng một cách thận trọng, không nhầm tương quan dữ liệu với nguyên nhân đã được chứng minh;
- thiết kế một nghiên cứu tương tự cho hai nền tảng khác.

## Cấu trúc

| Phần | Nội dung |
|---|---|
| 00 | Định hướng khóa học và bản đồ paper |
| 01 | Tại sao nghiên cứu review sách trực tuyến? |
| 02 | Câu hỏi nghiên cứu và thiết kế so sánh |
| 03 | Goodreads, Douban và cách chọn “classics” |
| 04 | Xây dựng parallel dataset và bài toán matching |
| 05 | Rating, edition và chuẩn hóa so sánh |
| 06 | “Classic” trên Douban khác gì Goodreads? |
| 07 | Tags, ratings, distributions và Jensen–Shannon |
| 08 | Review volume, diễn giải kết quả và các case study |
| 09 | Hạn chế, bài học phương pháp và hướng nghiên cứu |
| 10 | Lab thực hành với 23 shared classics |
| 11 | Bài tập dự án cuối khóa |
| 12 | Quiz tổng kết |
| 13 | Đáp án và gợi ý chấm |

## Cách học gợi ý

Đây là **thiết kế sư phạm của khóa học**, không phải cấu trúc nguyên văn của paper.

1. Đọc lesson theo thứ tự 00 → 09.
2. Làm lab ở lesson 10 bằng file `data/shared_classics_23.csv`.
3. Chọn một đề tài ở lesson 11 để viết mini research plan.
4. Làm quiz lesson 12 rồi tự đối chiếu lesson 13.

Thời lượng gợi ý: **6–8 giờ** nếu học nội dung + bài tập; **10–12 giờ** nếu làm project cuối khóa.

## Lưu ý quan trọng về phạm vi

Paper **không phải hướng dẫn cách viết book review**. Nó nghiên cứu **dữ liệu review/rating/tag do người dùng tạo ra** để tìm hiểu sự tiếp nhận sách và khác biệt giữa hai nền tảng. Khóa học giữ đúng phạm vi đó.
